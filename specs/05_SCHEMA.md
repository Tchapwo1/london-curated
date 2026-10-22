# 🗄️ Pillar 5: Data Schema & API Contracts — London Curated

## 1. Core Data Models

### A. Venue Model (`Venue`)
```typescript
export interface Venue {
  id: string;                     // "021_trivet"
  slug: string;                   // "trivet"
  name: string;                   // "Trivet"
  tagline: string;                // "Two-Michelin-starred culinary innovation by Jonny Lake & Isa Bal"
  neighborhood: string;           // "Bermondsey / Snowsfields"
  address: string;                // "36 Snowsfields, London SE1 3SU"
  postcode: string;               // "SE1 3SU"
  coordinates: {
    lat: number;                  // 51.5015
    lng: number;                  // -0.0842
  };
  priceTier: "£" | "££" | "£££" | "££££";
  cuisine: string[];              // ["Contemporary", "Fine Dining", "Wine Focused"]
  atmosphere: string[];           // ["Michelin Star", "Date Night", "Special Occasion"]
  michelinStars?: number;         // 2
  fsaHygieneRating: number;       // 5
  chef: {
    name: string;                 // "Jonny Lake & Isa Bal"
    role: string;                 // "Chef Patron & Master Sommelier"
  };
  contact: {
    phone: string;
    website: string;
    instagram?: string;
  };
  booking: {
    provider: "SevenRooms" | "OpenTable" | "Resy" | "Direct";
    url: string;
  };
  images: {
    cover: string;                // "/images/venues/021_trivet/cover.jpg"
    gallery: string[];
  };
  signatureDish: SignatureDish;
  passportPerk?: PassportPerk;
}
```

### B. Signature Dish & Sommelier Pairing (`SignatureDish`)
```typescript
export interface SignatureDish {
  name: string;                   // "Hokkaido Potato Mille-Feuille"
  description: string;            // "Crisp potato layers with sake sabayon and sea butter"
  priceGBP: number;               // 28.00
  image?: string;
  pairing: {
    wineCategory: "Red" | "White" | "Rosé" | "Sparkling" | "Fortified";
    subdivision: string;          // "Dry Sparkling / Junmai Daiginjo Sake"
    why: string;                  // "Umami richness and natural acidity cut through the buttery potato layers"
    idealBottle: string;          // "Masumi Sparkling Junmai Ginjo"
    equivalents: [string, string];
    affiliateUrl: string;         // Partner buy link
    merchant: string;             // "Berry Bros. & Rudd"
    estimatedBottlePrice: number; // 45.00
  };
}
```

### C. Foodie Passport Perk (`PassportPerk`)
```typescript
export interface PassportPerk {
  title: string;                  // "Complimentary Glass of Curated Wine"
  description: string;            // "Receive a sommelier-selected glass of wine when dining from the à la carte menu."
  terms: string;                  // "Valid Tuesday through Thursday with advance booking."
}
```

---

## 2. Ingestion & Enrichment Pipeline Contract
1. **Google Places Input:** `name` + `neighborhood` → `coordinates`, `formatted_address`, `opening_hours`, `place_id`.
2. **FSA Food Standards Agency Input:** `postcode` + `name` → `hygiene_rating` (1–5).
3. **Sommelier Engine Input:** `signatureDish.name` + `cuisine` → `wineCategory`, `subdivision`, `why`, `idealBottle`, `affiliateUrl`.
