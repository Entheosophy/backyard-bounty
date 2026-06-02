// Backyard Bounty current implementation notes

## Brand

- Name: Backyard Bounty
- Tagline: Preserving the flavor of home
- Tone: humble, local, artisan, Idaho-rooted
- Product focus: small-batch salsa made with heirloom tomatoes, organic garlic, and peppers

## Current Site

- Framework: Next.js pages router
- Main public route: `/`
- Secondary route: `/stats`
- Public sections on `/`: Home, About, Products, Where to Buy, Contact
- Product source of truth: `/Users/entheos/Documents/Backyard Bounty/data/products.js`
- Analytics source of truth: `/Users/entheos/Documents/Backyard Bounty/lib/analyticsStore.js`

## Visual System

- The site uses a day/night illustrated farm background.
- Product cards should feel like jar labels, not generic UI tiles.
- Large content sections should not scale on hover.
- Heat levels are lightweight UI marks rendered by `HeatScale.jsx`, not large image assets.
- The small logo derivative is intended for UI surfaces: `/backyard-bounty-logo-small.png`.

## Analytics

- `POST /api/pageview` records pageviews.
- `GET /api/stats` is read-only.
- `/stats` intentionally does not record a pageview.
- If Upstash Redis is not configured or unreachable, stats return fallback values instead of crashing the page.

## Verification

- Run `npm run lint`.
- Run `npm run build`.
- For visual changes, verify desktop and mobile screenshots.
