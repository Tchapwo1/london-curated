# **Architecture & Sitemap: London Curated Directory**

This document outlines the URL structure (Sitemap) and the data flow (Technical Architecture) for the Astro-based restaurant directory. It is designed for maximum SEO performance, fast load times, and secure API handling.

## **1\. The Sitemap (URL Structure)**

Astro uses "file-based routing," meaning the folder structure of your code dictates the URLs. This sitemap is structured to capture high-intent Google searches (e.g., "Best Italian in Soho").

### **Primary Routes**

* **/ (Home / Main Directory):** The Split-Screen Map & List view. By default, shows the top-rated or trending restaurants across all of London.  
* **/restaurant/\[slug\] (The Profile):** The dedicated detail page for a specific restaurant (e.g., /restaurant/dishoom-soho). This matches the profile.html template we built.

### **SEO "Collection" Routes (Crucial for Organic Traffic)**

Instead of relying only on URL parameters (like /?cuisine=italian), you should generate static pages for major categories to rank on Google.

* **/cuisine/\[slug\]:** Shows the main directory layout pre-filtered. (e.g., /cuisine/italian, /cuisine/indian).  
* **/neighborhood/\[slug\]:** Shows the main directory layout pre-filtered. (e.g., /neighborhood/soho, /neighborhood/carnaby).  
* **/guides/\[slug\]:** Editorial listicles (e.g., /guides/best-first-date-spots).

### **Utility & Static Pages**

* **/about:** Platform mission and curation philosophy.  
* **/contact:** For restaurant owners to claim a listing or users to suggest an addition.  
* **/privacy & /terms:** Legal requirements.

### **Internal API Routes (Server-Side Only)**

* **/api/places-image?place\_id=XYZ:** A secure backend endpoint built in Astro to fetch Google Places photos without exposing your API key to the browser.

## **2\. Technical Architecture (Data Flow)**

Here is how your tech stack (Astro, Supabase, Google Places, Netlify, GitHub) actually interacts when a user visits your site.

### **The Request Lifecycle (e.g., User clicks on "Dishoom Soho"):**

1. **The User Request:** The user navigates to /restaurant/dishoom-soho. The request hits **Netlify**.  
2. **Astro SSR (Server-Side Rendering):** Netlify triggers an Astro Edge Function to build the page.  
3. **Database Fetch (Supabase):** Astro securely queries your **Supabase** database for the slug: 'dishoom-soho'. Supabase returns the text data (description, rating, tags, and google\_place\_id).  
4. **External API Fetch (Google):** Astro takes the google\_place\_id and securely pings the **Google Places API** to retrieve the latest high-res photos and exact coordinates.  
5. **HTML Assembly:** Astro injects the Supabase text and Google Images into your Tailwind profile.html template.  
6. **Delivery:** The finished, styled HTML is sent to the user's browser in milliseconds.

## **3\. Astro Project Folder Structure**

When you hand your project to the AI or developer, this is the exact folder structure they should generate to map to the sitemap above:

/my-london-directory  
├── /public                 \# Static assets (favicons, local placeholder images)  
├── /src  
│   ├── /components         \# Reusable UI pieces  
│   │   ├── FilterBar.astro  
│   │   ├── RestaurantCard.astro  
│   │   ├── MapWidget.astro  
│   │   └── Toast.astro  
│   ├── /layouts            \# The "wrappers" for your pages  
│   │   └── MainLayout.astro  
│   ├── /pages              \# FILE-BASED ROUTING (The Sitemap)  
│   │   ├── index.astro                 \# \-\> /  
│   │   ├── about.astro                 \# \-\> /about  
│   │   ├── /restaurant  
│   │   │   └── \[slug\].astro            \# \-\> /restaurant/dishoom-soho  
│   │   ├── /cuisine  
│   │   │   └── \[cuisine\].astro         \# \-\> /cuisine/italian  
│   │   ├── /neighborhood  
│   │   │   └── \[neighborhood\].astro    \# \-\> /neighborhood/soho  
│   │   └── /api  
│   │       └── google-image.ts         \# \-\> /api/google-image (Secure fetch)  
│   ├── /lib                \# Logic and Database connections  
│   │   └── supabase.js     \# Supabase initialization & queries  
│   └── /styles  
│       └── global.css      \# Your design tokens (--bg-app, \--ui-interactive)  
├── astro.config.mjs        \# Astro settings (Netlify adapter enabled)  
├── tailwind.config.mjs     \# Tailwind theme configuration  
└── package.json            \# Dependencies  
