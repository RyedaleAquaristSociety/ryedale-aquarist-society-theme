# Ryedale Aquarist Society theme

The shared Jekyll theme for the Ryedale Aquarist Society websites: a customised copy of
[TeXt 2.2.6](https://github.com/kitian616/jekyll-TeXt-theme) (MIT licence, see `LICENSE`).

Used by:

- https://www.ryedaleaquaristsociety.org.uk
- https://event.ryedaleaquaristsociety.org.uk

## Using it in a site

`Gemfile`:

```ruby
source "https://rubygems.org"

gem "jekyll", "~> 4.4"

group :jekyll_plugins do
  gem "jekyll-remote-theme"
  gem "jekyll-paginate"
  gem "jekyll-sitemap"
  gem "jekyll-feed"
  gem "jemoji"
  gem "jekyll-seo-tag"
end
```

`_config.yml`:

```yaml
remote_theme: RyedaleAquaristSociety/ryedale-aquarist-society-theme@v1.0.0
text_skin: ryedale
plugins:
  - jekyll-remote-theme
  - jekyll-feed
  - jekyll-paginate
  - jekyll-sitemap
  - jemoji
  - jekyll-seo-tag
```

Pin the theme to a tag. A change to the theme reaches a site only when that site's tag is moved on.

## What a site can set

| setting | where | what it does |
|---|---|---|
| `text_skin` | `_config.yml` | `ryedale` for the main site, `event` for the Open Event site |
| `nav_logo` | `_config.yml` | image beside the site title in the nav; defaults to `/assets/images/logo/ryedale-logo-indigo.png` |
| `header_logo` | page front matter | logo above the banner title on that page |
| `_data/navigation.yml` | site | the nav links |
| `_sass/site.scss` | site | extra styles for that site only, loaded after the theme's own |

Any file a site has at the same path as a theme file replaces the theme's copy.

## Skins

`_sass/skins/_ryedale.scss` is the main site's colours. `_sass/skins/_event.scss` is the Open Event site's,
and starts as a copy of the Ryedale skin.
