# ForgAuto v7.1

The 3D Marketplace for Automotive Parts.

**Live:** https://forgauto.com / https://warwideweb.github.io/forgauto/

## Features

### Users
- **Buyer/Seller** - Buy parts, sell designs ($10 listing fee, keep 100%)
- **Designer** - All seller features + public profile, custom commissions
- **Print Shop** - Listed in directory, receive quote requests ($100 registration)

### Print Shop System
- Full shop profile with logo, portfolio, capabilities
- Country/State/City location support (international)
- Technologies: FDM, SLA, SLS, MJF, Metal
- Services: Instant Quote, Print & Ship, Local Pickup, Rush
- Rating & review system (verified after 5 reviews)
- Blue star badge for verified shops
- **View Shop popup** with full details and build gallery

### Quote System
- Users request quotes from specific print shops
- Print shops receive requests in dashboard (with product link)
- Respond with price, turnaround, message
- Users see quotes in "My Quotes" tab
- **Payment options:** Buy Service + File OR Print Service Only
- **After payment:** File upload, payment details, shop contact

### Review System
- **Reviews only after purchase** (can't review without buying)
- **My Reviews tab** in dashboard
- Review purchased products
- Review print shops after completed jobs
- Star rating with interactive input

### Part Pages
- 3D STL viewer
- **Seller rating shown** next to name with downloads
- Reviews section at bottom
- Featured listings ($20/30 days)

### Listing Creation
- **Ownership confirmation checkbox** required
- Multiple file upload for packages
- Photo upload with drag & drop

### Mobile Optimizations
- **Title/seller info shown first** (above 3D viewer)
- **Lazy loading images** to reduce lag
- Responsive layouts

### Other Features
- **Message notifications** badge on username
- Messaging system with email notifications
- Google OAuth login

## Tech Stack
- **Frontend:** Vanilla JS, HTML, CSS
- **Backend:** Cloudflare Workers (D1 + R2)
- **API:** https://forgauto-api.warwideweb.workers.dev

## Deployment

### Frontend (GitHub Pages)
```bash
cd PartForge
git add -A
git commit -m "Update"
git push origin main
```

### Backend (Cloudflare Workers)
```bash
cd worker
npx wrangler deploy
```

### Database Migration
Run migrations in Cloudflare Dashboard or:
```bash
npx wrangler d1 execute forgauto-db --file=migrations/003_printshop_quotes.sql
```

## Version History
- v7.1 - Fixed: seller rating from actual reviews (not hardcoded), mobile layout restructure, My Reviews with product links/prices/your rating, review API endpoint fix
- v7.0 - Message badge, mobile-first part view, review gating, My Reviews tab, print shop popup, ownership checkbox, lazy loading
- v6.9 - Seller ratings, ownership checkbox, enhanced quotes with payment options
- v6.8 - Country/State fields, verified blue star, mobile fixes, backend updates
- v6.7 - Quote system, My Quotes tab, seller avatar, print shop fixes
- v6.6 - Remove emojis, auth bug fixes
- v6.5 - Complete Print Shop system
- v6.4 - Designer profile tab
