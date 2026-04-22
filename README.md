# Miracle Center Assembly of God — Website

Church website for [Miracle Center Assembly of God](https://miraclecenterag.com), Clarkston, GA.

## Stack

- **React + Vite** — SPA, no backend
- **Tailwind CSS** — all styling
- **React Router** — client-side routing
- **Formspree** — prayer request form submissions
- **Vercel** — hosting + CI/CD

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero gallery, service times, pastor bios, prayer form |
| `/about` | About — founding story, pastor bios, timeline, location |
| `/leaderboard` | Bible Competition Leaderboard |
| `/donate` | Give — Zelle donation instructions |

## Local Development

```bash
npm install
npm run dev        # http://localhost:5173
```

## Environment Variables

Create a `.env` file at the project root:

```
VITE_FORMSPREE_ID=your_formspree_endpoint_id
```

## Assets

Drop files into the appropriate subfolder under `public/assets/`:

| Folder | Purpose |
|---|---|
| `logos/` | Church logo and brand marks |
| `stockimg/` | Stock/background images for the hero gallery |
| `mcaglive/` | Photos from MCAG services and events |

To swap hero gallery images, update `HERO_IMAGES` in `src/pages/Home.jsx`.

## Updating the Leaderboard

Edit `src/data/leaderboard.json` directly, update the `lastUpdated` field, and push. Vercel auto-deploys.

## Deployment

Deployed via Vercel. Every push to `main` triggers a production deploy automatically.
