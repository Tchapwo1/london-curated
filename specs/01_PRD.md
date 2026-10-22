# Product Requirements Document (PRD) — London Curated

## 1. Executive Summary & Value Proposition
London Curated is a tightly edited gastronomic guide and digital sommelier companion focused on independent dining rooms and wine bars in Bermondsey, London.

Instead of an uncurated directory, London Curated provides human-vetted recommendations: pairing marquee neighborhood dishes with sommelier-grade wine selections, testing digital dining club perks, and exploring curated hospitality partnerships.

---

## 2. Target Persona & Validation Problem
- **Primary Persona:** London professionals, neighborhood residents, and food enthusiasts seeking trusted dining without wading through noisy review platforms.
- **The Core Problem:**
  - Standard directories lack taste, voice, and editorial credibility.
  - Independent restaurant managers reject cold listing pitches.
  - Diners lack specific, trusted guidance on what to order and what to drink with it.
- **Our Value Promise:**
  - Strict human editorial curation (launching with a 5-venue Bermondsey pilot).
  - Sommelier Pairing: Thoughtful wine recommendations accompanying signature dishes.

---

## 3. Revenue Models [Hypotheses To Verify]
1. **Tier 1: Sommelier Wine Merchant Referrals [To Verify Terms]**
   - Signature dishes feature recommended wine pairings linking to UK merchants (e.g. Majestic, Berry Bros. & Rudd, Vivino).
   - *Validation Gate:* Look up each merchant's current commission rate and cookie duration before assuming revenue. Enforce strict UK Portman Group, ASA affiliate `#AD` disclosure, and 18+ Drinkaware compliance.
2. **Tier 2: Bermondsey Foodie Passport [Requires Venue Buy-In]**
   - Digital dining pass offering an off-menu perk on quiet midweek shifts.
   - *Validation Gate:* Dependent on venue managers agreeing in Milestone 0 discovery conversations.
3. **Tier 3: Seasonal Hospitality Spotlights [Requires Venue Buy-In]**
   - Curated seasonal drops featuring tasting menus for independent hospitality groups.
   - *Validation Gate:* Requires proven readership and trust before pitching.

---

## 4. Scope: Bermondsey Pilot 5 (v1.0)
Launching with 5 independent Bermondsey venues:
1. **José Tapas Bar** (104 Bermondsey St — Basque Tapas & Sherry)
2. **Casse-Croûte** (109 Bermondsey St — French Bistro)
3. **Baccalà London** (194 Bermondsey St — Seafood & Wine Bar)
4. **Le Chevalier** (85 Tower Bridge Rd — Wine Bar & Shop)
5. **Pique-Nique** (Tanner Street Park — French Bistro & Terroir)

### Asset & Data Baseline
- **Photography:** One curator-owned cover photo per venue (`cover.jpg`).
- **Coordinates:** Pre-mapped coordinates from existing local GeoJSON asset (spot-checked manually).
- **Editorial Copy:** 100% hand-crafted dish descriptions and human-checked pairing notes.
- **Hygiene Ratings:** Displayed with an explicit "Last Checked: [Date]" timestamp sourced from the FSA API.

---

## 5. Non-Goals for v1.0
- Expanding beyond the 5 pilot venues before Milestone 0 validation.
- Direct table booking transaction processing (we deep-link directly to venue booking engines).
- Automated AI text scraping without human editorial review.

---

## 6. Items To Verify Before Production
- [ ] Confirm each of the 5 venues is currently operating at the stated address.
- [ ] Verify each venue's current menu, signature dish, and wine focus against their live site.
- [ ] Check live commission and cookie terms for wine merchants on Awin / direct portals.
- [ ] Spot-check GeoJSON coordinates on an actual map.
