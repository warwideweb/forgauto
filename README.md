# ForgAuto v5.0

The 3D marketplace for automotive parts. Buy and sell STL files for your car.

**Live Site:** https://forgauto.com  
**API:** https://forgauto-api.warwideweb.workers.dev

---

## What's New in v5.0

- **Character Limits**: Title max 60 chars, description max 500 chars (prevents giant spam titles)
- **Seller Info on Cards**: Username + profile picture shown on every listing
- **Improved Featured Section**: Clean, modern dark UI with premium feel
- **Featured in Browse**: Featured listings appear at top with gold border + label
- **Real Download Modal**: Purchase shows actual download button + email notification
- **Login Required for Purchase**: Must be logged in to buy/download parts
- **Better Card Design**: Cleaner layout with seller avatar and featured badges

---

## What's New in v4.0

- **Fixed Image Pipeline**: Images now properly display on all listings
- **Thingiverse-style 3D Viewer**: Grid floor, toolbar, wireframe, fullscreen, loading bar
- **Pricing Standardized**: $10 listing fee, $20 featured boost
- **Image Editing**: Add/remove photos from existing listings
- **Dark Mode Fixed**: Removed conflicting CSS override
- **Demo Parts Only When Empty**: Real parts no longer mixed with samples
- **API-Level Image Filter**: Public queries only return parts with valid images
- **CORS Locked Down**: API restricted to forgauto.com and dev origins
- **Profile View Fix**: Sellers see their own imageless parts with warnings

---

## Features

### For Buyers
- Browse 3D printable car parts by make, model, and category
- Thingiverse-style 3D model viewer with toolbar
- Instant digital download after payment
- Download link emailed to your account
- Find local print shops for Print & Ship service
- Hire designers for custom parts

### For Sellers
- $10 flat listing fee (keep 100% of sales)
- No monthly fees, no commission
- Listings never expire
- Optional $20 Featured placement (30 days)
- Username + profile picture shown on all your listings
- Image editing on existing listings

### Platform
- 70+ car makes supported
- 6 categories: Interior, Exterior, Gauges, Accessories, Performance, Lighting
- Google OAuth login
- Responsive design (mobile-friendly)
- Character limits prevent spam

---

## Tech Stack

**Frontend:**
- Vanilla JavaScript (no framework)
- Three.js for 3D STL viewing
- CSS custom properties for theming
- GitHub Pages hosting

**Backend:**
- Cloudflare Workers (API)
- Cloudflare D1 (SQLite database)
- Cloudflare R2 (file storage)

---

## Version History

### v5.0 (Feb 17, 2026)
- Character limits (title: 60, description: 500)
- Seller username + profile picture on cards
- Modern featured section design
- Featured listings at top in browse
- Proper download modal with email notification
- Login required for purchase/download

### v4.0 (Feb 17, 2026)
- Fixed image pipeline
- Thingiverse-style 3D viewer
- Image editing on listings
- API-level image filtering

### v3.2 (Feb 17, 2026)
- Editable listings (owner can edit/delete)
- Mobile-friendly responsive design
- Improved 3D viewer with loading states

### v3.0 (Feb 16, 2026)
- Boost to Premier feature ($20)
- Required file + photo uploads
- Incomplete listing warnings

### v2.0 (Feb 16, 2026)
- Full marketplace launch
- Google OAuth integration
- 3D STL viewer
- Designer profiles
- Messaging system

---

## Files

```
/
├── index.html      # Main app shell
├── app.js          # All JavaScript (SPA router, views, API)
├── style.css       # All styles
├── privacy.html    # Privacy policy
├── terms.html      # Terms of service
├── dmca.html       # DMCA takedown procedures
├── favicon.svg     # Dark theme favicon
└── README.md       # This file
```

---

## API Endpoints

### Auth
- `GET /api/auth/google` - Google OAuth redirect
- `GET /api/auth/me` - Get current user

### Parts
- `GET /api/parts` - List parts (filters: category, make, model, search, user)
- `GET /api/parts/:id` - Get single part with images/reviews + purchased status
- `POST /api/parts` - Create listing (auth required)
- `PUT /api/parts/:id` - Update listing (owner only)
- `DELETE /api/parts/:id` - Delete listing (owner only)
- `POST /api/parts/:id/purchase` - Purchase part (returns download info)
- `POST /api/parts/:id/boost` - Boost to Featured ($20)
- `POST /api/parts/:id/reviews` - Add review

### Files
- `POST /api/upload/file` - Upload 3D file to R2
- `POST /api/upload/photo` - Upload photo to R2
- `GET /files/:key` - Serve files from R2

### Users
- `GET /api/users/:id` - Public profile
- `GET /api/designers` - List designers

---

## Local Development

1. Clone the repo
2. Open `index.html` in browser (or use live server)
3. API calls go to production Cloudflare Worker

For API development, see the `forgauto-api` repo.

---

## License

Copyright 2026 ForgAuto. All rights reserved.
