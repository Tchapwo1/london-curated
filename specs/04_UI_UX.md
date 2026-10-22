# 🎨 Pillar 4: UI/UX & Design System — London Curated

## 1. Aesthetic Direction & Brand Personality
- **Aesthetic:** Luxury Dark Editorial (inspired by *Michelin Guide*, *Monocle Magazine*, and *Kinfolk*).
- **Tone:** Authoritative, understated, refined, and confident. Zero cartoonish animations or generic star ratings.
- **Surface Elevation:** Deep obsidian layers with subtle hairline glass borders (`border-white/10`) and warm champagne gold accents.

---

## 2. Color Palette & Design Tokens

```
Obsidian Base     : #0B0F17 (Deep slate black)
Surface Card      : #111827 (Subtle elevated dark surface)
Surface Border    : rgba(255, 255, 255, 0.08)
Champagne Gold    : #D4AF37 (Marquee badges, map pins, pairing accents)
Champagne Glow    : rgba(212, 175, 55, 0.20)
Vermillion Accent : #E63946 (Subtle callouts, Michelin badges)
Text Primary      : #F8FAFC (Crisp warm white)
Text Muted        : #94A3B8 (Refined slate grey)
```

---

## 3. Typography Hierarchy
- **Display & Headings:** Modern High-Contrast Serif / Editorial Grotesk (`Playfair Display` or `Geist Sans` with optical letter spacing).
- **Body & Captions:** Clean Geometric Sans (`Inter` or `Geist Sans`), highly legible at small sizes with tabular numbers for prices and opening hours.
- **Sommelier Notes:** Elegant italicized blockquotes (`italic text-slate-300 font-serif`) conveying the sommelier's voice.

---

## 4. UI Components & Tactile Specifications

### A. The Editorial Venue Card
- High-contrast 4:3 cover photo with progressive WebP loading.
- Floating badges: `2 Michelin Stars`, `5/5 FSA Hygiene`, `Bermondsey St`.
- Signature Dish pill with sommelier glass icon.
- Hover state: Smooth 1.02x scale, subtle champagne border glow, and synchronized map pin pulse.

### B. The Interactive Map Pins
- Custom SVG marker shaped as a minimalist teardrop with an inner champagne dot.
- Active/Selected state: Expands to show venue thumbnail, name, and walking distance from London Bridge / Bermondsey station.

### C. The Sommelier Pairing Panel
- Two-column split: Left side showcases the dish photo and chef description; right side showcases the wine bottle, tasting profile, and prominent "Order Bottle ↗" button.
