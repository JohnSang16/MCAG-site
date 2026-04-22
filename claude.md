# claude.md — Miracle Center AG Site

## Project Context

Church website for Miracle Center Assembly of God, Clarkston, GA. React + Vite SPA, no backend. 4 pages: Home, About, Leaderboard, Donate. Testimonials deferred to v2. Read spec.md for full product requirements before writing any code.

## Architecture Decisions

- **No backend.** Leaderboard data lives in `src/data/leaderboard.json`. All computation (averages, ranks) happens client-side at runtime.
- **No database.** Maintainer edits JSON directly and redeploys.
- **Formspree** handles prayer request form submissions. Endpoint ID in `.env` as `VITE_FORMSPREE_ID`.
- **React Router** for SPA routing. All routes serve `index.html` in production (Vercel rewrite rule).
- **Tailwind CSS** for all styling. No inline styles. No CSS modules. No styled-components.

## Folder Structure

```
public/
  assets/
    logo.png           # Church logo, maintainer adds manually
src/
  components/          # Shared components only
    Navbar.jsx
    Footer.jsx
    PageHero.jsx
    Card.jsx
    Button.jsx
    PrayerRequestForm.jsx
    LeaderboardTable.jsx
    FacebookCTAStrip.jsx
    ValueStrip.jsx
    Timeline.jsx
  pages/               # One file per route
    Home.jsx
    About.jsx
    Leaderboard.jsx
    Donate.jsx
    NotFound.jsx
  data/
    leaderboard.json   # Single source of truth for leaderboard
  config.js            # Global constants (Facebook URL, Formspree ID, etc.)
  App.jsx              # Router setup
  main.jsx             # Entry point
  index.css            # Tailwind directives only
.env                   # VITE_FORMSPREE_ID (never commit this)
```

## Key Conventions

- Components use named exports, pages use default exports
- File names match component names exactly (PascalCase)
- No component does data fetching — data is imported directly from JSON
- All colors come from the design system in spec.md, defined as Tailwind config extensions in `tailwind.config.js`
- Facebook URL and other global constants live in `src/config.js`, never hardcoded in components. `config.js` exports: `FACEBOOK_URL` (string, TBD), `ZELLE_NUMBER` ("404-207-6509"), `CONTACT_EMAIL` ("johnsang1970@gmail.com")
- Google Fonts (Playfair Display + Inter) imported via `<link>` tag in `index.html`, not in CSS

## Component Patterns

- `PageHero` accepts `title` and `subtitle` props
- `Card` accepts `children`, optional `className` for overrides
- `Button` accepts `variant` ("primary" | "secondary"), `onClick`, `children`
- `LeaderboardTable` accepts the full parsed `leaderboard.json` object and manages a `selectedTest` state (null = Overall view, test id = per-test view). Test selector drives this state. No row click interactions.
- `PrayerRequestForm` reads `VITE_FORMSPREE_ID` from `import.meta.env`

## Data Layer

Leaderboard JSON structure:
- `lastUpdated` — ISO date string
- `members` — array of `{ id, name }`
- `tests` — array of `{ id, name, date, scores: [{ memberId, score }] }`

Runtime computations (all in `LeaderboardTable.jsx`):
- Average score per member: sum of scores divided by tests taken (missing tests excluded)
- Per-test view: filter scores by test id, join member names, sort descending
- Member drill-down: filter all tests for a given memberId
- Rank: index after sorting, never stored

## Tailwind Config Extensions

Add these to `tailwind.config.js` under `theme.extend.colors`:
```js
colors: {
  ivory: '#f5f0e8',
  surface: '#ffffff',
  'text-primary': '#1a1a1a',
  'text-secondary': '#6b6b6b',
  'brand-blue': '#1a3aad',
  'brand-teal': '#0e7c6e',
  'brand-gold': '#c9a84c',
  border: '#e5e0d8',
}
```

## Timeline Placeholder Content

Used in `Timeline.jsx` on the About page. Maintainer replaces with real dates later:

- **The Calling** — Pastors Abraham and Sarah receive God's calling to start a new congregation
- **First Home Service** — The church holds its first service from the family home in Clarkston, GA
- **Growing Together** — The congregation outgrows the home and moves to a larger space
- **A Church of Our Own** — Miracle Center Assembly of God establishes its current home in Clarkston, GA

- Do not use inline styles anywhere
- Do not hardcode the Facebook URL or Formspree ID in components
- Do not store rank in leaderboard.json — compute it at runtime
- Do not add a backend, database, or server-side logic
- Do not use CSS modules or styled-components
- Do not add dark mode support in v1
- Do not lazy load routes in v1
- Do not create additional pages beyond the 4 specified without confirmation
