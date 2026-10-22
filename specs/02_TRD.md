# 🛠️ Pillar 2: Technical Requirements Document (TRD) — London Curated

## 1. System Architecture & Tech Stack

```
┌─────────────────────────────────────────────────────────────┐
│                 LONDON CURATED ARCHITECTURE                 │
├───────────────────────────────┬─────────────────────────────┤
│ Frontend Presentation         │ Astro 5 / React 19          │
│ Spatial Map Rendering         │ MapLibre GL + Stadia/Carto  │
│ Styling & Design System       │ Tailwind CSS v4 + Motion    │
│ Culinary & Wine Intelligence  │ In-house `sommelier-engine` │
│ Data Sourcing & Enrichment    │ Google Places API + FSA API │
│ Hosting & Edge CDN            │ Vercel Edge / Netlify       │
└───────────────────────────────┴─────────────────────────────┘
```

- **Framework:** Astro 5 with React Island Architecture for zero-JS static performance on editorial content and dynamic client hydration on the interactive map.
- **Mapping:** MapLibre GL (`maplibre-gl`) utilizing high-contrast vector tiles (Alidade Smooth Dark / Carto Dark Matter) for a luxury dark aesthetic without Google Maps watermarks.
- **Data Ingestion Scripting:** Python 3.11 automated enrichment pipelines linking raw image directories with Google Places API coordinates, opening hours, and FSA Food Hygiene ratings.

---

## 2. File Tree & Code Contract

```
london-curated/
├── specs/
│   ├── 01_PRD.md
│   ├── 02_TRD.md
│   ├── 03_APP_FLOW.md
│   ├── 04_UI_UX.md
│   ├── 05_SCHEMA.md
│   └── 06_IMPLEMENTATION_PLAN.md
├── scripts/
│   ├── enrich_restaurants.py      # Automated Google Places + FSA Hygiene enrichment
│   └── generate_pairings.py       # Calls sommelier-pairing engine for signature dishes
├── public/
│   ├── images/
│   │   ├── venues/                # 21 Curated venue image packs (cover.jpg, food-*.jpg)
│   │   └── badges/                # Michelin Star, FSA 5/5 Hygiene badges
├── src/
│   ├── components/
│   │   ├── map/
│   │   │   ├── InteractiveMap.tsx # MapLibre GL canvas with custom champagne pins
│   │   │   └── MapPinMarker.tsx
│   │   ├── sommelier/
│   │   │   ├── SommelierPairingCard.tsx # Dish + Wine + Bottle + Rationale
│   │   │   └── WineAffiliateButton.tsx  # Direct merchant 1-click CTA
│   │   ├── venue/
│   │   │   ├── VenueCard.tsx      # Editorial venue preview card
│   │   │   ├── VenueGrid.tsx      # Filterable layout grid
│   │   │   └── VenueDetailModal.tsx
│   │   └── layout/
│   │       ├── Header.astro
│   │       └── Footer.astro
│   ├── content/
│   │   └── venues/                # JSON/Markdown collections for the 21 Bermondsey venues
│   └── pages/
│       ├── index.astro            # Master split view: Interactive Map + Editorial Cards
│       ├── venue/[slug].astro     # Deep-dive restaurant profile & tasting pairings
│       └── passport.astro         # Bermondsey Foodie Passport membership landing
```

---

## 3. Performance & Quality Budgets
- **Lighthouse Performance Score:** ≥ 95 on Desktop, ≥ 85 on Mobile.
- **First Contentful Paint (FCP):** < 1.0s.
- **Interactive Map Initialization:** Lazy-loaded using IntersectionObserver to ensure initial page load is instantaneous.
- **Image Optimization:** All cover photos served via Astro Image pipeline in progressive WebP format with responsive srcset.
