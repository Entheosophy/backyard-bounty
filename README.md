# Backyard Bounty

Small Next.js website for Backyard Bounty, an Idaho-rooted small-batch salsa brand.

## What Exists

- Single-page homepage with anchored sections for Home, About, Products, Where to Buy, and Contact.
- Day/night illustrated landscape background.
- Product catalog for four salsa heat levels.
- Product detail modal.
- Lightweight pageview tracking with Upstash Redis.
- Read-only `/stats` page for total and unique visitor counts.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

`npm run lint` uses the local flat ESLint config. `npm run build` runs the Next.js production build.

## Environment

Analytics are optional. Without these variables, the site still renders and stats return fallback values.

```bash
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

## Source Of Truth

- Product copy and heat metadata: `/Users/entheos/Documents/Backyard Bounty/data/products.js`
- Analytics read/write behavior: `/Users/entheos/Documents/Backyard Bounty/lib/analyticsStore.js`
- Homepage layout: `/Users/entheos/Documents/Backyard Bounty/pages/index.jsx`
- Shared shell/background/nav: `/Users/entheos/Documents/Backyard Bounty/components/Layout.jsx`
