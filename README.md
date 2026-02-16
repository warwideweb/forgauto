# ForgAuto — 3D Marketplace for Automotive Parts

![Version](https://img.shields.io/badge/version-3.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

**The marketplace for 3D printable car parts. $5 listing fee, 0% commission.**

🌐 **Live:** https://forgauto.com  
📦 **API:** https://forgauto-api.warwideweb.workers.dev  
⚙️ **Admin:** https://forgauto.com/admin.html

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-02-16 | Initial deployment |
| 1.5 | 2026-02-16 | Google OAuth, profile photos |
| 2.0 | 2026-02-16 | Messaging, password recovery, admin panel |
| 2.1 | 2026-02-16 | Featured designers/shops, reviews |
| 2.2 | 2026-02-16 | Browser history, Google OAuth fix |
| 2.3 | 2026-02-16 | Navigation fixes, part update fix |
| **3.0** | 2026-02-16 | **Major Update:** 70+ car makes, photo required, Non-Specific option, card click fix |

---

## Features

### For Buyers
- 🔍 Search 70+ car makes and models
- 🎨 3D model preview
- 💬 Message sellers directly
- ⭐ Reviews and ratings
- 🏭 Find local print shops

### For Sellers
- 📤 Upload 3D files + photos (thumbnail required)
- 💰 **$5 flat listing fee, keep 100% of sales**
- 📊 Sales dashboard
- 🌟 Featured listings (+$10/30 days)
- 🚗 70+ car makes or "Non-Specific" for universal parts

### Platform
- 🔐 Google OAuth + Email login
- 🔑 Password recovery
- 👤 Profile photos
- 💬 Built-in messaging
- 📱 Mobile responsive
- ⚙️ Admin panel
- ↩️ Browser back button support

---

## Supported Car Makes (70+)

Acura, Alfa Romeo, Aston Martin, Audi, Bentley, BMW, Bugatti, Buick, Cadillac, Chevrolet, Chrysler, Citroën, Dacia, Daewoo, Daihatsu, Dodge, Ferrari, Fiat, Ford, Genesis, GMC, Honda, Hummer, Hyundai, Infiniti, Isuzu, Jaguar, Jeep, Kia, Koenigsegg, Lamborghini, Lancia, Land Rover, Lexus, Lincoln, Lotus, Maserati, Mazda, McLaren, Mercedes-Benz, Mercury, MG, Mini, Mitsubishi, Nissan, Oldsmobile, Opel, Pagani, Peugeot, Plymouth, Polestar, Pontiac, Porsche, Ram, Renault, Rivian, Rolls-Royce, Saab, Saturn, Scion, Seat, Skoda, Smart, Subaru, Suzuki, Tesla, Toyota, Triumph, Vauxhall, Volkswagen, Volvo

**+ "Non-Specific"** for universal parts (hides make/model fields)

---

## Pricing

| Feature | Price | Duration |
|---------|-------|----------|
| Part Listing | $5 | Forever |
| Featured Part | +$10 | 30 days |
| Featured Designer | $100 | 30 days |
| Featured Print Shop | $150 | 30 days |
| Commission | 0% | - |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Vanilla JS, CSS3 |
| API | Cloudflare Workers v3.0 |
| Database | Cloudflare D1 (SQLite) |
| Storage | Cloudflare R2 |
| Auth | Google OAuth 2.0 + Email |
| Hosting | GitHub Pages |

---

## Deployment

```bash
# Frontend
cd PartForge && git push

# API
cd worker && npx wrangler deploy
```

---

*Built by Error by Human • 2026*
