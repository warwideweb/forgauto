# ForgAuto — 3D Marketplace for Automotive Parts

![Version](https://img.shields.io/badge/version-3.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

**The marketplace for 3D printable car parts. $5 listing fee, 0% commission.**

🌐 **Live:** https://forgauto.com  
📦 **API:** https://forgauto-api.warwideweb.workers.dev  
⚙️ **Admin:** https://forgauto.com/admin.html

---

## Features

### For Buyers
- 🔍 Search by make, model, category
- 🎨 3D model preview (STL viewer)
- 💳 Secure checkout (Stripe - coming soon)
- ⭐ Reviews and ratings
- �icing Find local print shops

### For Sellers
- 📤 Upload 3D files (STL, STEP, OBJ)
- 💰 **$5 flat listing fee, keep 100% of sales**
- 📊 Sales dashboard
- 🌟 Featured listings (+$10)

### Platform
- 🔐 Google OAuth login
- 👤 Profile photos
- 📱 Mobile responsive
- ⚙️ Admin panel

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Vanilla JS, CSS3 |
| API | Cloudflare Workers |
| Database | Cloudflare D1 (SQLite) |
| Storage | Cloudflare R2 |
| Auth | Google OAuth 2.0 |
| Hosting | GitHub Pages |
| Domain | Namecheap → Cloudflare DNS |

---

## API Endpoints

### Auth
- `POST /api/auth/signup` — Email signup
- `POST /api/auth/login` — Email login
- `GET /api/auth/google` — Google OAuth
- `GET /api/auth/me` — Current user

### Parts
- `GET /api/parts` — List parts (with filters)
- `GET /api/parts/:id` — Part details
- `POST /api/parts` — Create listing (auth required)
- `PUT /api/parts/:id` — Update listing
- `DELETE /api/parts/:id` — Delete listing

### Users
- `GET /api/users/:id` — Public profile
- `PUT /api/profile` — Update profile
- `PUT /api/profile/avatar` — Upload avatar
- `GET /api/designers` — List designers

### Admin
- `GET /api/admin/stats` — Dashboard stats
- `GET /api/admin/users` — All users
- `GET /api/admin/parts` — All listings
- `GET /api/admin/sales` — All transactions
- `PUT /api/admin/users/:id` — Update user (ban/verify)
- `DELETE /api/admin/parts/:id` — Remove listing

---

## File Structure

```
PartForge/
├── PartForge/              # Frontend (GitHub Pages)
│   ├── index.html          # Main app
│   ├── app.js              # Application logic
│   ├── style.css           # Styles
│   ├── admin.html          # Admin panel
│   ├── privacy.html        # Privacy policy
│   ├── terms.html          # Terms of service
│   └── CNAME               # Custom domain
├── worker/                 # Cloudflare Worker API
│   ├── src/index.js        # API routes
│   ├── wrangler.toml       # Worker config
│   └── schema.sql          # Database schema
├── PROJECT.md              # Full documentation
└── README.md               # This file
```

---

## Deployment

### Frontend
```bash
cd PartForge
git add -A && git commit -m "Update" && git push
```

### Worker API
```bash
cd worker
npx wrangler deploy
```

### Database Migrations
```bash
npx wrangler d1 execute forgauto --remote --command "YOUR SQL"
```

### Secrets
```bash
npx wrangler secret put SECRET_NAME
```

---

## Environment Variables (Worker)

| Variable | Description |
|----------|-------------|
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth secret |
| `ADMIN_KEY` | Admin panel access key |
| `JWT_SECRET` | Session token secret |
| `CORS_ORIGIN` | Allowed origins |

---

## Business Model

- **Listing Fee:** $5 one-time
- **Commission:** 0% (sellers keep 100%)
- **Featured:** +$10 for 30 days
- **Revenue:** Listing fees only

---

## Roadmap

- [x] Core marketplace
- [x] Google OAuth
- [x] Profile photos
- [x] Admin panel
- [ ] Stripe payments
- [ ] Print & Ship integration
- [ ] Mobile app

---

## License

MIT License — Free to use and modify.

---

*Built by Error by Human • 2026*
