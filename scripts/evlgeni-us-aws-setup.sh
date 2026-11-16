#!/usr/bin/env bash
#
# Set up evlgeni.us short links on AWS with HTTPS:
#   https://evlgeni.us/<path>  ->  301  ->  https://www.evilgeniuslabs.org/<path>
#
# Creates (or reuses, so it is safe to re-run):
#   1. Route 53 hosted zone for evlgeni.us, with "no email" MX/SPF/DMARC records
#   2. ACM certificate (us-east-1) for evlgeni.us + www.evlgeni.us, DNS-validated
#   3. CloudFront Function that answers every request with a 301 to the main site
#   4. CloudFront distribution using that certificate and function
#   5. Route 53 alias A/AAAA records for evlgeni.us and www.evlgeni.us
#
# The certificate can't validate while Namecheap still serves DNS, so the first run
# stops after step 2 and prints the validation CNAMEs. Add those in Namecheap
# (Advanced DNS) so short links keep working during the move, wait for the certificate
# to show "Issued", then run the script again. Switch the nameservers only after the
# second run has tested the new redirect.
#
# Usage:  AWS_PROFILE=yourprofile scripts/evlgeni-us-aws-setup.sh

set -euo pipefail
export AWS_PAGER=""

DOMAIN="evlgeni.us"
WWW="www.${DOMAIN}"
TARGET="https://www.evilgeniuslabs.org"
FUNCTION_NAME="evlgeni-us-redirect"
CLOUDFRONT_ZONE_ID="Z2FDTNDATAQYW2"           # fixed hosted zone ID for all CloudFront aliases
CACHING_DISABLED="4135ea2d-6df8-44a3-9df3-4b5a84be39ad"  # AWS managed cache policy

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

step() { printf '\n==> %s\n' "$*"; }

step "AWS identity"
aws sts get-caller-identity --query '[Account, Arn]' --output text

# ---------------------------------------------------------------------------
step "1. Route 53 hosted zone"
ZONE_ID="$(aws route53 list-hosted-zones-by-name --dns-name "$DOMAIN" \
  --query "HostedZones[?Name=='${DOMAIN}.'].Id | [0]" --output text)"
if [[ "$ZONE_ID" == "None" || -z "$ZONE_ID" ]]; then
  ZONE_ID="$(aws route53 create-hosted-zone --name "$DOMAIN" \
    --caller-reference "evlgeni-us-$(date +%s)" \
    --hosted-zone-config Comment="Short links for evilgeniuslabs.org" \
    --query HostedZone.Id --output text)"
  echo "Created $ZONE_ID"
else
  echo "Exists: $ZONE_ID"
fi
ZONE_ID="${ZONE_ID#/hostedzone/}"

# evlgeni.us has no email: null MX (RFC 7505), SPF that allows no senders, and a DMARC
# reject policy, so mail is refused cleanly and nobody can spoof @evlgeni.us.
cat > "$TMP/email.json" <<EOF
{ "Comment": "No email on this domain", "Changes": [
  { "Action": "UPSERT", "ResourceRecordSet": { "Name": "${DOMAIN}.", "Type": "MX", "TTL": 3600,
    "ResourceRecords": [ { "Value": "0 ." } ] } },
  { "Action": "UPSERT", "ResourceRecordSet": { "Name": "${DOMAIN}.", "Type": "TXT", "TTL": 3600,
    "ResourceRecords": [ { "Value": "\"v=spf1 -all\"" } ] } },
  { "Action": "UPSERT", "ResourceRecordSet": { "Name": "_dmarc.${DOMAIN}.", "Type": "TXT", "TTL": 3600,
    "ResourceRecords": [ { "Value": "\"v=DMARC1; p=reject;\"" } ] } }
] }
EOF
aws route53 change-resource-record-sets --hosted-zone-id "$ZONE_ID" \
  --change-batch "file://$TMP/email.json" --query ChangeInfo.Status --output text

# ---------------------------------------------------------------------------
step "2. ACM certificate (us-east-1)"
CERT_ARN="$(aws acm list-certificates --region us-east-1 \
  --certificate-statuses PENDING_VALIDATION ISSUED \
  --query "CertificateSummaryList[?DomainName=='${DOMAIN}'].CertificateArn | [0]" --output text)"
if [[ "$CERT_ARN" == "None" || -z "$CERT_ARN" ]]; then
  CERT_ARN="$(aws acm request-certificate --region us-east-1 \
    --domain-name "$DOMAIN" --subject-alternative-names "$WWW" \
    --validation-method DNS --idempotency-token evlgeniuscert \
    --query CertificateArn --output text)"
  echo "Requested $CERT_ARN"
else
  echo "Exists: $CERT_ARN"
fi

# ACM takes a few seconds to generate the validation records.
for _ in $(seq 1 30); do
  RECORDS="$(aws acm describe-certificate --region us-east-1 --certificate-arn "$CERT_ARN" \
    --query 'Certificate.DomainValidationOptions[].ResourceRecord.[Name, Value]' --output text | sort -u)"
  [[ -n "$RECORDS" && "$RECORDS" != *None* ]] && break
  sleep 2
done
[[ -n "$RECORDS" && "$RECORDS" != *None* ]] || { echo "ACM validation records not ready; re-run in a minute."; exit 1; }

CHANGES=""
while read -r NAME VALUE; do
  CHANGES+="${CHANGES:+,}{ \"Action\": \"UPSERT\", \"ResourceRecordSet\": { \"Name\": \"$NAME\", \"Type\": \"CNAME\", \"TTL\": 300, \"ResourceRecords\": [ { \"Value\": \"$VALUE\" } ] } }"
done <<< "$RECORDS"
echo "{ \"Comment\": \"ACM validation\", \"Changes\": [ $CHANGES ] }" > "$TMP/acm.json"
aws route53 change-resource-record-sets --hosted-zone-id "$ZONE_ID" \
  --change-batch "file://$TMP/acm.json" --query ChangeInfo.Status --output text

CERT_STATUS="$(aws acm describe-certificate --region us-east-1 --certificate-arn "$CERT_ARN" \
  --query Certificate.Status --output text)"
if [[ "$CERT_STATUS" != "ISSUED" ]]; then
  cat <<EOF

Certificate status: $CERT_STATUS

Public DNS for $DOMAIN is still at Namecheap, so ACM can't see the records above yet.
In Namecheap > Domain List > $DOMAIN > Advanced DNS, add these CNAME records
(Namecheap's Host field is the name without ".$DOMAIN."):

EOF
  while read -r NAME VALUE; do
    printf '  Type: CNAME   Host: %-40s Value: %s\n' "${NAME%.${DOMAIN}.}" "$VALUE"
  done <<< "$RECORDS"
  cat <<EOF

Then wait until this prints ISSUED (usually a few minutes):
  aws acm describe-certificate --region us-east-1 --certificate-arn $CERT_ARN --query Certificate.Status

and run this script again.
EOF
  exit 0
fi
echo "Certificate ISSUED"

# ---------------------------------------------------------------------------
step "3. CloudFront Function ($FUNCTION_NAME)"
cat > "$TMP/redirect.js" <<EOF
// 301 every request to the same path (and query string) on the main site.
function handler(event) {
  var req = event.request;
  var parts = [];
  for (var key in req.querystring) {
    var p = req.querystring[key];
    var values = p.multiValue ? p.multiValue : [p];
    for (var i = 0; i < values.length; i++) {
      parts.push(values[i].value === '' ? key : key + '=' + values[i].value);
    }
  }
  var location = '${TARGET}' + req.uri + (parts.length ? '?' + parts.join('&') : '');
  return {
    statusCode: 301,
    statusDescription: 'Moved Permanently',
    headers: {
      location: { value: location },
      'cache-control': { value: 'public, max-age=3600' }
    }
  };
}
EOF
FN_CONFIG="Comment=evlgeni.us short links to evilgeniuslabs.org,Runtime=cloudfront-js-2.0"
if ETAG="$(aws cloudfront describe-function --name "$FUNCTION_NAME" --stage DEVELOPMENT \
    --query ETag --output text 2>/dev/null)"; then
  ETAG="$(aws cloudfront update-function --name "$FUNCTION_NAME" --if-match "$ETAG" \
    --function-config "$FN_CONFIG" --function-code "fileb://$TMP/redirect.js" \
    --query ETag --output text)"
  echo "Updated"
else
  ETAG="$(aws cloudfront create-function --name "$FUNCTION_NAME" \
    --function-config "$FN_CONFIG" --function-code "fileb://$TMP/redirect.js" \
    --query ETag --output text)"
  echo "Created"
fi
aws cloudfront publish-function --name "$FUNCTION_NAME" --if-match "$ETAG" \
  --query FunctionSummary.Status --output text
FUNCTION_ARN="$(aws cloudfront describe-function --name "$FUNCTION_NAME" --stage LIVE \
  --query FunctionSummary.FunctionMetadata.FunctionARN --output text)"
echo "$FUNCTION_ARN"

# ---------------------------------------------------------------------------
step "4. CloudFront distribution"
DIST_ID="$(aws cloudfront list-distributions \
  --query "DistributionList.Items[?Aliases.Items && contains(Aliases.Items, '${DOMAIN}')].Id | [0]" \
  --output text)"
if [[ "$DIST_ID" == "None" || -z "$DIST_ID" ]]; then
  # The origin is required but never contacted: the function answers every request.
  # Viewer protocol "allow-all" lets http:// requests go straight to the https target in one hop.
  cat > "$TMP/dist.json" <<EOF
{
  "CallerReference": "evlgeni-us-$(date +%s)",
  "Comment": "evlgeni.us short links -> ${TARGET}",
  "Enabled": true,
  "Aliases": { "Quantity": 2, "Items": [ "${DOMAIN}", "${WWW}" ] },
  "Origins": { "Quantity": 1, "Items": [ {
    "Id": "evilgeniuslabs",
    "DomainName": "www.evilgeniuslabs.org",
    "CustomOriginConfig": {
      "HTTPPort": 80, "HTTPSPort": 443, "OriginProtocolPolicy": "https-only",
      "OriginSslProtocols": { "Quantity": 1, "Items": [ "TLSv1.2" ] }
    }
  } ] },
  "DefaultCacheBehavior": {
    "TargetOriginId": "evilgeniuslabs",
    "ViewerProtocolPolicy": "allow-all",
    "CachePolicyId": "${CACHING_DISABLED}",
    "Compress": false,
    "FunctionAssociations": { "Quantity": 1, "Items": [
      { "EventType": "viewer-request", "FunctionARN": "${FUNCTION_ARN}" } ] }
  },
  "ViewerCertificate": {
    "ACMCertificateArn": "${CERT_ARN}",
    "SSLSupportMethod": "sni-only",
    "MinimumProtocolVersion": "TLSv1.2_2021"
  },
  "PriceClass": "PriceClass_100",
  "HttpVersion": "http2and3",
  "IsIPV6Enabled": true
}
EOF
  DIST_ID="$(aws cloudfront create-distribution --distribution-config "file://$TMP/dist.json" \
    --query Distribution.Id --output text)"
  echo "Created $DIST_ID"
else
  echo "Exists: $DIST_ID (not modified; the function update above is already live on it)"
fi
DIST_DOMAIN="$(aws cloudfront get-distribution --id "$DIST_ID" \
  --query Distribution.DomainName --output text)"
echo "$DIST_DOMAIN"

# ---------------------------------------------------------------------------
step "5. Route 53 alias records"
CHANGES=""
for NAME in "$DOMAIN" "$WWW"; do
  for TYPE in A AAAA; do
    CHANGES+="${CHANGES:+,}{ \"Action\": \"UPSERT\", \"ResourceRecordSet\": { \"Name\": \"${NAME}.\", \"Type\": \"$TYPE\", \"AliasTarget\": { \"HostedZoneId\": \"$CLOUDFRONT_ZONE_ID\", \"DNSName\": \"${DIST_DOMAIN}.\", \"EvaluateTargetHealth\": false } } }"
  done
done
echo "{ \"Comment\": \"CloudFront aliases\", \"Changes\": [ $CHANGES ] }" > "$TMP/alias.json"
aws route53 change-resource-record-sets --hosted-zone-id "$ZONE_ID" \
  --change-batch "file://$TMP/alias.json" --query ChangeInfo.Status --output text

# ---------------------------------------------------------------------------
step "Waiting for CloudFront to deploy (often 5-15 minutes)"
aws cloudfront wait distribution-deployed --id "$DIST_ID"

step "Testing through CloudFront directly (before any nameserver change)"
for URL in "https://${DOMAIN}/cube8" "https://${WWW}/cube8" "http://${DOMAIN}/cube8"; do
  HOST_PORT="${URL#*://}"; HOST_PORT="${HOST_PORT%%/*}"
  PORT=443; [[ "$URL" == http://* ]] && PORT=80
  printf '%-32s ' "$URL"
  curl -sS -o /dev/null -m 15 -w '%{http_code} -> %{redirect_url}\n' \
    --connect-to "${HOST_PORT}:${PORT}:${DIST_DOMAIN}:${PORT}" "$URL" || echo "FAILED"
done

step "Done. Next steps"
cat <<EOF
If the tests above show 301 -> ${TARGET}/cube8:

  1. In Namecheap > Domain List > ${DOMAIN} > Nameservers, choose "Custom DNS" and enter:
$(aws route53 get-hosted-zone --id "$ZONE_ID" --query DelegationSet.NameServers --output text | tr '\t' '\n' | sed 's/^/       /')
  2. After it propagates:  curl -sI https://${DOMAIN}/cube8
EOF
