source 'https://rubygems.org'

gem 'jekyll', '~> 4.4'
gem 'jekyll-redirect-from'
gem 'wdm', '>= 0.1.0' if Gem.win_platform?
gem "webrick", "~> 1.7"

# Link/image checker run against the built site in CI (and locally via `npm run check`)
group :test do
  gem 'html-proofer', '~> 5.0'
end
