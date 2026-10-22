# 📅 Pillar 6: Implementation Plan & Definition of Done (DoD) — London Curated

## 1. Chronological Milestone Roadmap

```
Milestone 1: Data Ingestion & Asset Migration (21 Venues)
    │
    ▼
Milestone 2: Sommelier Wine Pairing Integration
    │
    ▼
Milestone 3: Luxury Editorial UI & Responsive Grid
    │
    ▼
Milestone 4: MapLibre GL Spatial Map & Pin Synchronization
    │
    ▼
Milestone 5: Production Deployment & Monetization Verification
```

---

## 2. Milestone Breakdown & Definition of Done (DoD)

### Milestone 1: Data Ingestion & Asset Migration
- [ ] Migrate the 21 Bermondsey restaurant folders (`cover.jpg` + images) from `bermondsey_assets` into `public/images/venues/`.
- [ ] Run automated enrichment script using Google Places & FSA API to generate clean, verified `venues.json` metadata (GPS coordinates, addresses, opening hours, hygiene ratings).
- **DoD:** All 21 venues have verified coordinates, 5/5 hygiene badges, valid phone numbers, and high-res cover photos.

### Milestone 2: Sommelier Wine Pairing Integration
- [ ] Feed each venue's signature dish into the `sommelier-pairing` engine.
- [ ] Generate structured wine pairings (wine style, sommelier rationale, ideal bottle, 2 alternatives).
- [ ] Wire up affiliate purchase tracking links for Berry Bros. & Rudd, Majestic, and Vivino.
- **DoD:** Every venue card displays a verified dish + wine recommendation with an active, compliant affiliate buy button.

### Milestone 3: Luxury Editorial UI & Responsive Grid
- [ ] Build the Astro 5 component system with Tailwind CSS (Obsidian `#0B0F17`, Champagne Gold `#D4AF37`).
- [ ] Implement filter bar (Cuisine, Michelin Stars, Wine Focus, Atmosphere).
- [ ] Build the Sommelier drawer modal with smooth micro-interactions.
- **DoD:** 100% responsive across mobile and desktop with zero layout shift (CLS = 0).

### Milestone 4: MapLibre GL Spatial Map & Sync
- [ ] Initialize MapLibre GL canvas with dark vector tiles.
- [ ] Implement bidirectional hover synchronization: hovering on a card highlights its map pin; clicking a pin centers the card.
- **DoD:** 60fps smooth pan/zoom on desktop and touch gestures on mobile.

### Milestone 5: Production Deployment & Live Verification
- [ ] Configure `vercel.json` or `netlify.toml` for automated edge deployment.
- [ ] Verify SEO metadata, OpenGraph cards, and Schema.org `Restaurant` structured data.
- **DoD:** Live public URL deployed on Vercel with zero console errors and 100% working affiliate/booking links.
