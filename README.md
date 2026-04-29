# Miracle Center Assembly of God — Website

Official website for **Miracle Center Assembly of God**, a Spirit-filled, predominantly Burmese/Chin (Zo) congregation in Clarkston, GA, open to people of every background. The church was founded on the belief that God called them to be a center of miracles: healing the sick, restoring the broken, and bringing wholeness — physically, mentally, emotionally, and spiritually.

**Live site:** [miraclecenterag.com](https://miraclecenterag.com)

---

## Features

- **Home** — Animated hero gallery, service times, pastor bios with portrait photos, upcoming events, prayer request form, and donation CTA
- **About** — Founding story, church history timeline, core beliefs, and Who Is Jesus page
- **Bible Faithfulness Leaderboard** — Live-computed rankings from a JSON data file; per-test and overall views with Pastor's Pick badges
- **Give** — Zelle donation card and Stripe donation form with preset amounts and ACH support
- **Prayer Request Form** — Submits directly to Formspree; no backend required
- **Scroll animations** — FadeUp entrance animations via Framer Motion across key sections
- **Fully responsive** — Separate mobile and desktop layouts where needed (e.g. Timeline)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19 + Vite 8** | SPA framework and dev/build tooling |
| **React Router v7** | Client-side routing |
| **Tailwind CSS v3** | All styling — no CSS modules or inline styles |
| **Framer Motion** | Scroll-triggered animations |
| **Stripe + React Stripe.js** | Donation form with card and ACH support |
| **Formspree** | Prayer request form submissions (no backend) |
| **Vercel** | Hosting, CI/CD, and serverless API handler for Stripe |

---

## Pages and Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero gallery, service info, pastors, prayer form |
| `/about` | About | Hub linking to History, Beliefs, and Who Is Jesus |
| `/about/history` | Church History | Founding story with visual timeline |
| `/about/beliefs` | Core Beliefs | Statement of faith |
| `/about/jesus` | Who Is Jesus | Evangelism-focused page |
| `/leaderboard` | Faithfulness Leaderboard | Bible competition rankings |
| `/donate` | Give | Zelle and Stripe donation options |

---

## Folder Structure

```
public/
  assets/
    logos/          # Church logo and brand marks
    stockimg/       # Background and hero images
    mcaglive/       # Photos from MCAG services and events
src/
  components/       # Shared UI components (Navbar, Footer, etc.)
  pages/            # One file per route
  data/
    leaderboard.json  # Single source of truth for leaderboard data
  config.js         # Global constants (Facebook URL, Zelle number, email)
  App.jsx           # Router setup
  main.jsx          # Entry point
  index.css         # Tailwind directives only
api/
  create-payment-intent.js  # Vercel serverless handler for Stripe
vercel.json         # SPA rewrite rule + CORS headers for /api
```

---

## Local Development

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint
```

---

## Environment Variables

Create a `.env` file at the project root:

```
VITE_FORMSPREE_ID=your_formspree_endpoint_id
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_...
```

The Stripe secret key must only be set in Vercel environment variables — never in `.env` or committed to the repo.

| Variable | Purpose | Where to get it |
|---|---|---|
| `VITE_FORMSPREE_ID` | Formspree form endpoint ID | [formspree.io](https://formspree.io) dashboard |
| `VITE_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key (client-safe) | Stripe Dashboard, Developers, API Keys |
| `STRIPE_SECRET_KEY` | Stripe secret key (Vercel only) | Stripe Dashboard, Developers, API Keys |

---

## Deployment

Deployed on **Vercel**. Every push to `main` triggers a production deploy automatically.

The `vercel.json` includes a catch-all rewrite routing all paths to `index.html` (required for React Router) and CORS headers for `/api/*` to allow Stripe requests.

To deploy manually:

```bash
npm i -g vercel
vercel --prod
```

---

## Maintainer Guides

### Updating the Leaderboard

Edit `src/data/leaderboard.json` directly:

```json
{
  "lastUpdated": "2025-01-01",
  "members": [{ "id": "1", "name": "Member Name" }],
  "tests": [{
    "id": "test-1",
    "name": "Genesis Quiz",
    "date": "2025-01-01",
    "scores": [{ "memberId": "1", "score": 95 }]
  }]
}
```

Push to `main` and Vercel auto-deploys. Ranks and averages are computed at runtime — never store rank in the JSON.

### Swapping Hero Gallery Images

Update the `HERO_IMAGES` array in `src/pages/Home.jsx`. Drop new images into `public/assets/mcaglive/` or `public/assets/stockimg/`.

### Updating Global Constants

Edit `src/config.js` for:
- `FACEBOOK_URL` — church Facebook page URL
- `ZELLE_NUMBER` — Zelle donation phone number (`404-207-6509`)
- `CONTACT_EMAIL` — contact email address (`johnsang1970@gmail.com`)

### Going Live with Stripe

The site uses Stripe in test mode until the church's nonprofit status is confirmed. Before accepting real donations:

1. Activate the Stripe account as a nonprofit and provide the church's EIN/501(c)(3) documentation
2. Swap `VITE_STRIPE_PUBLISHABLE_KEY` in `.env` to the live publishable key
3. Set `STRIPE_SECRET_KEY` in Vercel environment variables to the live secret key

---

## Design System

Custom Tailwind color tokens defined in `tailwind.config.js`:

| Token | Hex | Usage |
|---|---|---|
| `ivory` | `#f5f0e8` | Page backgrounds |
| `surface` | `#ffffff` | Card surfaces |
| `text-primary` | `#1a1a1a` | Body text |
| `text-secondary` | `#6b6b6b` | Captions, metadata |
| `brand-blue` | `#1a3aad` | Primary brand color |
| `brand-teal` | `#0e7c6e` | Accent color |
| `brand-gold` | `#c9a84c` | Highlights, badges |
| `border` | `#e5e0d8` | Dividers, card borders |

Fonts: **Playfair Display** (headings) + **Inter** (body), loaded via Google Fonts in `index.html`.
