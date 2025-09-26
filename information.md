// Backyard Bounty — Master Brand & Web Design Specification

## 🌱 Brand Essence

* **Name:** Backyard Bounty
* **Tagline:** Preserving the flavor of home
* **Voice/Tone:** Humble, artisan, friendly, grounded, Idaho-rooted
* **Visual Aesthetic:** Clean, modern-rustic; organic meets digital polish
* **Audience:** Local food lovers, farmers market shoppers, home-style product enthusiasts

---

## 🧭 Site Navigation

**Main Nav Links:**

* Home (`/`)
* Products (`/products`)
* Where to Buy (`/where-to-buy`)
* About (`/about`)
* Contact (`/contact`)
* Basket (`/basket`) — icon-only

**Mobile Menu:**

* Hamburger toggles full nav overlay dropdown
* Centered button in mobile layout
* Uses transition + `max-h-0` to `max-h-96` expansion

---

## ✍️ Typography

* **Font Family:** `Bitter`
* **Tagline Style:** `Bitter Italic`
* **Heading Sizes:**

  * h1: `text-4xl font-bold`
  * h2: `text-2xl font-semibold`
* **Body:** `text-base`, leading-relaxed
* **Color:** Always `text-[var(--scene-text)]`

---

## 🎨 Color System

### Light Theme (`.theme-day`)

```css
--scene-sky: #cceeff;
--scene-sun: #fcd34d;
--scene-field: #fbbf24;
--scene-plant: #4caf50;
--scene-text: #111827;
--scene-bg: #ffffff;
```

### Dark Theme (`.theme-night`)

```css
--scene-sky: #1e1b4b;
--scene-sun: #a5b4fc; // moon
--scene-field: #334155;
--scene-plant: #64748b;
--scene-text: #f1f5f9;
--scene-bg: #020617;
```

---

## 🧩 Component Patterns

### Navigation Bar (`Navigation.jsx`)

* Flexbox layout with 3 zones: Logo / Nav Links / Basket+Toggle
* ThemeToggle and BasketIcon on far right
* Responsive collapse into centered ☰
* Background: transparent + `backdrop-blur-md`

### ThemeToggle

* Uses `theme-day` / `theme-night` class toggles
* LocalStorage sync
* Positioned `fixed` top-right (`top-4 right-4 z-50`)
* Rounded, soft-colored toggle (☀️ / 🌙)

### Background

* Full-screen SVG + blur layers
* SunAura, CrescentMoon, FieldRows, RootCanvas, FireflySwap
* Smartly layered with `z-[-1]` and `pointer-events-none`

### ProductList

* Grid of 1–3 columns
* Product cards with name, flavor text, and heat scale image (1–4)
* HeatScale uses `/heat-1.png`–`/heat-4.png`

### Footer

* `text-sm`, centered
* Year + company name
* Dark mode compliant via `text-[var(--scene-text)]`

### BasketIcon

* PNG image `/backyard-bounty-logo.png`
* Used inline in nav, logo, and page elements

---

## 📱 Responsive Logic

* Nav switches to hamburger below `md`
* Theme toggle and basket always visible
* Cards stack vertically below `md`

---

## 🧾 Pages

### `/` (Home)

* Centered Welcome Message
* Pulls from shared Background.jsx layer

### `/products`

* Salsa flavors w/ HeatScale
* Future: filter/sort by heat level or seasonal tags

### `/where-to-buy`

* List of locations (markets, co-ops, local pick-up)
* Future: interactive map

### `/about`

* Story of Tim
* Emphasis on family, soil, small-batch care

### `/contact`

* Minimal form (name/email/message)
* Clean, centered, no spam indicators

### `/basket`

* Placeholder for future cart logic or ordering flow

---

## 💡 UX Standards

* All text inherits `var(--scene-text)` for theme compliance
* Background is visible unless explicitly styled (no unneeded opaque wrappers)
* Use `backdrop-blur-md` with translucent colors (`bg-white/10`, `bg-[var(--scene-bg)]/70`)
* Animations: `transition`, `duration-300+`, `ease-in-out`

---

## ✅ Rules to Remember

* All files must include `// src/path/Filename.jsx` header comment
* Never apply hard `bg-white` or `bg-black` — always theme-controlled
* Never overlap key UI (e.g. Basket/Toggle) — maintain responsive spacing
* Use `text-[var(--scene-text)]` always — no fixed `text-black`/`text-white`

---

## 📦 Assets

* `/public/backyard-bounty-logo.png`
* `/public/heat-1.png`–`heat-4.png`
* `/public/favicon.svg` (optional tab icon)

---

## 🚧 Future (Queued)

* Label Generator UI / PNG export tool
* Shopify or POS integration
* Branded SVG sticker sheet (roots, bees, peppers)
* FireflySwap v2 w/ motion
* Accessibility sweep

---

This document and structure will remain the authoritative reference for all visual, interactive, and functional elements of the Backyard Bounty web ecosystem.
