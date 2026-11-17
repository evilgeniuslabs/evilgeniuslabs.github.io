#!/usr/bin/env python3
"""Fail if any image or video in the given directories carries location metadata.

Phone photos and videos embed GPS coordinates by default; once published, anyone can read them.
Standard library only, so it runs on CI without installing anything.

Checks:
  JPEG  - EXIF (APP1) GPS IFD with coordinates; XMP GPS fields
  PNG   - eXIf chunk GPS IFD; XMP GPS fields
  other images (gif/webp/heic/tiff) - XMP/EXIF GPS markers in the first 1 MB
  MP4/MOV - QuickTime location atom (\xa9xyz) or ISO 6709 location key

Strip location data before committing, e.g.:
  magick in.jpg -auto-orient +profile '!icc,*' out.jpg      (keeps the color profile)
  ffmpeg -i in.mp4 -map_metadata -1 -c copy out.mp4

Usage: python3 scripts/check-media-privacy.py assets images downloads
"""
import os
import struct
import sys

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".gif", ".webp", ".heic", ".tif", ".tiff"}
VIDEO_EXTS = {".mp4", ".mov", ".m4v"}
GPS_IFD_TAG = 0x8825
GPS_COORD_TAGS = {0x0002, 0x0004}  # GPSLatitude, GPSLongitude
XMP_GPS_MARKERS = (b"exif:GPSLatitude", b"exif:GPSLongitude", b"GPSLatitude=", b"<exif:GPSLatitude")


def tiff_has_gps(tiff: bytes) -> bool:
    """Parse a TIFF/EXIF block and report whether its GPS IFD holds coordinates."""
    if len(tiff) < 8 or tiff[:2] not in (b"II", b"MM"):
        return False
    e = "<" if tiff[:2] == b"II" else ">"

    def entries(offset):
        if offset + 2 > len(tiff):
            return
        (count,) = struct.unpack_from(e + "H", tiff, offset)
        for i in range(count):
            pos = offset + 2 + i * 12
            if pos + 12 > len(tiff):
                return
            tag, _typ, _cnt, value = struct.unpack_from(e + "HHII", tiff, pos)
            yield tag, value

    (ifd0,) = struct.unpack_from(e + "I", tiff, 4)
    for tag, value in entries(ifd0):
        if tag == GPS_IFD_TAG:
            return any(t in GPS_COORD_TAGS for t, _ in entries(value))
    return False


def jpeg_has_gps(data: bytes) -> bool:
    i = 2
    while i + 4 <= len(data) and data[i] == 0xFF:
        marker = data[i + 1]
        if marker in (0xD9, 0xDA):  # end of image / start of scan: no more metadata
            break
        (length,) = struct.unpack_from(">H", data, i + 2)
        seg = data[i + 4 : i + 2 + length]
        if marker == 0xE1 and seg.startswith(b"Exif\x00\x00") and tiff_has_gps(seg[6:]):
            return True
        i += 2 + length
    return False


def png_has_gps(data: bytes) -> bool:
    i = 8
    while i + 8 <= len(data):
        length, ctype = struct.unpack_from(">I4s", data, i)
        if ctype == b"eXIf" and tiff_has_gps(data[i + 8 : i + 8 + length]):
            return True
        if ctype == b"IEND":
            break
        i += 12 + length
    return False


def image_problem(path: str):
    with open(path, "rb") as f:
        data = f.read()
    if data[:2] == b"\xff\xd8" and jpeg_has_gps(data):
        return "EXIF GPS coordinates"
    if data[:8] == b"\x89PNG\r\n\x1a\n" and png_has_gps(data):
        return "PNG eXIf GPS coordinates"
    head = data[: 1024 * 1024]
    if any(m in head for m in XMP_GPS_MARKERS):
        return "XMP GPS coordinates"
    return None


# MP4/QuickTime boxes that hold location: Android/QuickTime '\xa9xyz' (ISO 6709 string), 3GPP 'loci',
# and iPhone-style 'keys' entries such as com.apple.quicktime.location.ISO6709.
LOCATION_BOXES = {b"\xa9xyz": "QuickTime location (\\xa9xyz)", b"loci": "3GPP location (loci)"}
CONTAINER_BOXES = {b"moov", b"udta", b"trak", b"mdia", b"minf", b"stbl", b"ilst", b"meta"}


def mp4_location(data: bytes, start: int = 0, end: int = None, depth: int = 0):
    """Walk the box tree (metadata containers only, never media data) looking for location boxes."""
    end = len(data) if end is None else end
    i = start
    while i + 8 <= end and depth < 12:
        size, btype = struct.unpack_from(">I4s", data, i)
        header = 8
        if size == 1 and i + 16 <= end:
            (size,) = struct.unpack_from(">Q", data, i + 8)
            header = 16
        elif size == 0:
            size = end - i
        if size < header or i + size > end:
            break
        body_start, body_end = i + header, i + size
        if btype in LOCATION_BOXES:
            return LOCATION_BOXES[btype]
        if btype == b"keys" and b"location" in data[body_start:body_end].lower():
            return "location key in metadata (keys)"
        if btype in CONTAINER_BOXES:
            child = body_start
            # ISO 'meta' is a full box (4 bytes version/flags) unless it's the QuickTime form (child box follows directly)
            if btype == b"meta" and data[body_start + 4 : body_start + 8] not in (b"hdlr", b"keys", b"ilst"):
                child += 4
            found = mp4_location(data, child, body_end, depth + 1)
            if found:
                return found
        i += size
    return None


def video_problem(path: str):
    with open(path, "rb") as f:
        data = f.read()
    return mp4_location(data)


def main(dirs):
    problems, scanned = [], 0
    for d in dirs:
        for root, _dirs, files in os.walk(d):
            for name in sorted(files):
                ext = os.path.splitext(name)[1].lower()
                path = os.path.join(root, name)
                if ext in IMAGE_EXTS:
                    problem = image_problem(path)
                elif ext in VIDEO_EXTS:
                    problem = video_problem(path)
                else:
                    continue
                scanned += 1
                if problem:
                    problems.append(f"{path}: {problem}")
    if problems:
        print(f"Location metadata found in {len(problems)} of {scanned} media files:")
        print("\n".join("  " + p for p in problems))
        print("\nStrip it before publishing (see the header of this script for commands).")
        return 1
    print(f"No location metadata in {scanned} media files.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:] or ["assets", "images", "downloads"]))
