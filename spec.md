# Miracle Center Assembly of God — Site Spec

## 1. Project Overview

Miracle Center Assembly of God is a Pentecostal church based in Clarkston, GA. This site serves as their primary web presence, targeting both existing members and new visitors discovering the church online.

**Goals**
- Inform visitors about who the church is, its pastors, and service times
- Grow attendance by making the church feel accessible and inviting
- Accept donations via Zelle
- Run a bible competition leaderboard for church members
- Collect prayer requests via email form (Formspree)

**Non-Goals (v1)**
- No CMS or admin dashboard
- No user authentication or member portal
- No event ticketing or RSVP system
- No multilingual support

**Scope**
4 pages: Home, About, Leaderboard, Donate. Plus a prayer request form powered by Formspree (submissions emailed to johnsang1970@gmail.com). Leaderboard data stored in a local JSON file, edited directly by the maintainer. Testimonials page planned but deferred from v1.

- **Navbar display name:** "Miracle Center Assembly of God"
- **Prayer request form success state:** form replaced with inline message — "Your prayer request has been received. Check your email for confirmation." Formspree sends submitter an automatic email receipt showing what they submitted.

**Contact**
- Email form via Formspree → johnsang1970@gmail.com
- Facebook page linked in nav and footer (URL TBD)

**Tech Stack**
React + Vite, deployed to Vercel or Netlify. No backend, no database.

**Maintainer**
Single developer. Leaderboard updated by editing `src/data/leaderboard.json` directly and redeploying.

## 2. Site Architecture

**Routing**
SPA via React Router. 5 routes:
- `/` — Home (includes prayer request form section)
- `/about` — About
- `/leaderboard` — Leaderboard
- `/testimonials` — Testimonials
- `/donate` — Donate
- `/testimonials` — omitted from nav and routing entirely in v1

**Navigation**
Persistent navbar on all pages. Contains logo (left), page links (center/right), Facebook icon. On mobile: hamburger menu toggled via React state.

**Footer**
Persistent on all pages. Contains service times, location (Clarkston, GA), email, Facebook link, copyright.

**Asset Structure**
```
public/
  assets/
    logo.png
src/
  data/
    leaderboard.json
  components/
  pages/
  App.jsx
  main.jsx
```

**Responsiveness**
Mobile-first. Breakpoints via Tailwind CSS (sm, md, lg). Hamburger nav on mobile, full nav on desktop.

**No lazy loading in v1.** All routes bundled together for simplicity.

## 3. Design System

**Color Palette**
| Token | Value | Usage |
|---|---|---|
| Background | `#f5f0e8` | Page background |
| Surface | `#ffffff` | Cards, navbar |
| Text Primary | `#1a1a1a` | Headings, body |
| Text Secondary | `#6b6b6b` | Captions, meta |
| Brand Blue | `#1a3aad` | Accents, rank badges, hover states |
| Brand Teal | `#0e7c6e` | Accents, section dividers |
| Brand Gold | `#c9a84c` | Rank badges, highlights |
| Border | `#e5e0d8` | Card borders, dividers |
| Button BG | `#1a1a1a` | Primary buttons |
| Button Text | `#ffffff` | Primary button labels |

**Typography**
- Headings: Playfair Display (Google Fonts)
- Body: Inter (Google Fonts)
- Scale: 14px base, 16px body, 24/32/48px headings

**Spacing**
- Section padding: 80px vertical desktop, 48px mobile
- Card padding: 24px
- Component gap: 16px default

**Components**
- Cards: white surface, `#e5e0d8` border, 8px border radius, no heavy shadow
- Buttons: solid `#1a1a1a`, white text, 4px border radius, opacity 80% on hover
- Logo: 48px height in navbar, 120px height in hero

**Constraints**
- Brand colors used as accents only, never as full-page backgrounds
- No dark mode in v1
- Warm ivory (`#f5f0e8`) is the default page background everywhere

## 4. Page Specs

### 4.1 Home

Sections top to bottom:

1. **Navbar** — persistent, see Component Inventory
2. **Hero** — logo (120px), church full name, Josh 1:9 verse as tagline, CTA button ("Join Us" smooth scrolls to `#services` section)
3. **Intro Blurb** — 2-3 sentences, who the church is, warm and inviting tone
4. **Service Times + Location** — two cards side by side (stacked on mobile). Left: service times (Saturday 7:30–9pm youth, Sunday 4–6:30pm). Right: location (Clarkston, GA)
5. **Values Strip** — two values: Community, Prayer. Icon + label + one sentence each
6. **Meet the Pastors** — two placeholder cards (Pastor Abraham Thang, Pastor Sarah Muan Cing), photo placeholder, name, title. Links to About page
7. **Prayer Request Form** — fields: Name, Email, Prayer Request (textarea), Submit. Powered by Formspree, submissions to johnsang1970@gmail.com
8. **Facebook CTA Strip** — short line of copy + "Follow Us" button linking to Facebook page (URL TBD)
9. **Footer** — persistent, see Component Inventory

### 4.2 About

Sections top to bottom:

1. **Page Hero** — "About Us" heading, short subheading (e.g. "A church built on obedience, community, and faith")
2. **Founding Story** — full narrative: pastors' calling, home services, yearly growth, moving locations
3. **Pastor Bios** — two cards: Pastor Abraham Thang (Lead Pastor) and Pastor Sarah Muan Cing. Photo placeholder, name, title, short bio each
4. **Denomination** — brief note: Assemblies of God, Pentecostal tradition
5. **Values** — Community and Prayer, each with a heading and short paragraph
6. **Church Timeline** — visual milestones showing growth from home services to current congregation
7. **Service Times** — repeated for visitors landing directly on this page (Saturday 7:30–9pm youth, Sunday 4–6:30pm)
8. **Location + Directions** — Clarkston, GA with embedded Google Maps iframe

### 4.3 Leaderboard

Sections top to bottom:

1. **Page Hero** — "Bible Competition Leaderboard" heading
2. **Mini Intro** — short paragraph explaining the competition: weekly Bible quiz on church teachings covered each week, final prize $500
3. **Test Selector** — tabs or dropdown listing all tests sorted most recent first, plus a default "Overall" option. Selecting a test switches the table below. Defaults to "Overall" on page load. No row interactions — selecting a view is the only interaction.
4. **Table** — two states driven by the selector:
   - **Overall (default):** columns: Rank, Name, Average Score, Tests Taken. Sorted by average score descending. Top 3 rows styled gold, silver, bronze.
   - **Per-test:** columns: Rank, Name, Score. Filtered to selected test, sorted by score descending. Top 3 rows styled gold, silver, bronze.
5. **Search** — filter current table by name in real time (client side)
6. **Last Updated** — timestamp below table, pulled from leaderboard.json
7. **Empty State** — friendly message if no data exists yet
8. **Mobile** — table collapses to stacked cards, one per participant

**Data Source:** `src/data/leaderboard.json` — edited directly by maintainer, redeployed to update

### 4.4 Testimonials
[To be written]

### 4.5 Donate

Sections top to bottom:

1. **Page Hero** — "Give" heading, short subheading
2. **Why We Give** — short paragraph on generosity and supporting the church community
3. **Bible Verse** — one verse about giving (e.g. 2 Corinthians 9:7)
4. **Zelle Instructions** — step by step: open Zelle, send to 404-207-6509, add "Tithe" or "Offering" in memo
5. **Zelle Info Display** — phone number displayed prominently, clean and easy to copy
6. **Facebook CTA** — short line + "Follow Us" button linking to Facebook page

## 5. Component Inventory

| Component | Used On | Notes |
|---|---|---|
| `Navbar` | All pages | Logo, nav links, Facebook icon, hamburger on mobile |
| `Footer` | All pages | Service times, location, email, Facebook link, copyright |
| `PageHero` | About, Leaderboard, Donate | Reusable heading + subheading banner |
| `Card` | Home, About | White surface, `#e5e0d8` border, 8px radius |
| `Button` | All pages | Primary (black bg, white text), Secondary (outlined) |
| `PrayerRequestForm` | Home | Name, email, textarea, submit via Formspree |
| `LeaderboardTable` | Leaderboard | Table + name search + mobile card collapse |
| `FacebookCTAStrip` | Home, Donate | Reusable strip with Follow Us button |
| `ValueStrip` | Home | Icon + label + one sentence per value |
| `Timeline` | About | Visual milestones for church growth history |

## 6. Leaderboard Data Model

**File:** `src/data/leaderboard.json`

**Structure**
- `lastUpdated` — ISO date string, updated manually by maintainer on each edit
- `members` — array of all participants, defined once to avoid name repetition across tests
- `tests` — array of all tests, each containing scores for that test

**Member object**
```json
{ "id": 1, "name": "John Doe" }
```

**Test object**
```json
{
  "id": 1,
  "name": "Test 1 — Genesis Ch. 1-25",
  "date": "2026-04-06",
  "scores": [
    { "memberId": 1, "score": 95 },
    { "memberId": 2, "score": 88 }
  ]
}
```

**Full example**
```json
{
  "lastUpdated": "2026-04-22",
  "members": [
    { "id": 1, "name": "John Doe" },
    { "id": 2, "name": "Jane Smith" }
  ],
  "tests": [
    {
      "id": 1,
      "name": "Test 1 — Genesis Ch. 1-25",
      "date": "2026-04-06",
      "scores": [
        { "memberId": 1, "score": 95 },
        { "memberId": 2, "score": 88 }
      ]
    }
  ]
}
```

**Runtime Logic**
- Max score per test: always 100
- Main leaderboard: average score per member across all tests taken, sorted descending
- Per-test view: scores filtered by test id, sorted descending
- Rank computed at runtime, never stored in JSON
- Members who missed a test are excluded from that test's view
- A member's average only counts tests they participated in

## 7. Deployment Notes

**Local Development**
- Run with `npm run dev`, available at `http://localhost:5173`
- SPA routing handled by Vite dev server automatically

**Environment Variables**
- `VITE_FORMSPREE_ID` — Formspree endpoint ID for prayer request form, stored in `.env`
- Facebook URL stored as a constant in `src/config.js` (TBD, one place to update)

**Production**
- Deployed via Vercel MCP
- Build command: `vite build`, output dir: `dist`
- Vercel rewrite rule required: all routes serve `index.html` to support SPA routing
- Leaderboard updates: edit `src/data/leaderboard.json`, push to GitHub, Vercel auto-deploys
