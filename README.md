# ForgAuto v5.3

The 3D marketplace for automotive parts. Buy and sell STL files for your car.

**Live Site:** https://forgauto.com  
**API:** https://forgauto-api.warwideweb.workers.dev

---

## What's New in v5.3

- **Image Compression**: Photos auto-compressed to max 1200px, 80% quality (reduces lag)
- **3D File Switcher**: View each file in a package in the 3D viewer (click 3D 1, 3D 2, etc.)
- **Resend API Integrated**: Email notifications now working

---

## What's New in v5.2

- **Email Notifications**: Real emails via Resend API
  - New message notifications with HTML templates
  - Sale notifications when someone buys your part
- **Logo 2x Bigger**: 64px height in nav
- **Better Layout**: Description under gallery on desktop

---

## What's New in v5.1

- **Multiple 3D Files**: Upload package of files, download all as ZIP
- **Package Contents**: See all files in a package on part detail
- **New Logo**: Custom ForgAuto logo in nav

---

## Features

### For Buyers
- Browse 3D printable car parts by make, model, and category
- Thingiverse-style 3D model viewer with toolbar
- View all files in a package (3D viewer switcher)
- Instant digital download after payment
- Download link emailed to your account
- Find local print shops for Print & Ship service
- Hire designers for custom parts

### For Sellers
- $10 flat listing fee (keep 100% of sales)
- No monthly fees, no commission
- Listings never expire
- Upload multiple 3D files per listing (package)
- Images auto-compressed for fast loading
- Email notification when you make a sale
- Optional $20 Featured placement (30 days)

### Platform
- 70+ car makes supported
- 6 categories: Interior, Exterior, Gauges, Accessories, Performance, Lighting
- Google OAuth login
- Responsive design (mobile-friendly)

---

## Tech Stack

**Frontend:**
- Vanilla JavaScript (no framework)
- Three.js for 3D STL viewing
- JSZip for package downloads
- Client-side image compression
- CSS custom properties for theming
- GitHub Pages hosting

**Backend:**
- Cloudflare Workers (API)
- Cloudflare D1 (SQLite database)
- Cloudflare R2 (file storage)
- Resend (email notifications)

---

## Version History

### v5.3 (Feb 17, 2026)
- Image compression (max 1200px, 80% quality)
- 3D viewer file switcher for packages
- Resend API key configured

### v5.2 (Feb 17, 2026)
- Email notifications via Resend
- Logo 2x bigger
- Description under gallery on desktop

### v5.1 (Feb 17, 2026)
- Multiple 3D file upload
- ZIP package download
- New logo

### v5.0 (Feb 17, 2026)
- Character limits (title/description)
- Seller info on cards
- Featured section redesign
- Download modal

### v4.0 (Feb 17, 2026)
- Fixed image pipeline
- Thingiverse-style 3D viewer

---

## License

Copyright 2026 ForgAuto. All rights reserved.
