# N7 Banking Landing Page

A pixel-perfect React + Bootstrap implementation of the N7 banking landing page.

## Project Structure
```
n7-landing/
├── public/          → Static HTML template
├── src/
│   ├── components/  → All React components (Navbar, Hero, Solutions, etc.)
│   ├── App.js       → Main app assembling all sections
│   └── index.css    → Global styles & CSS variables
├── build/           → Production-ready compiled files (open index.html directly)
└── package.json
```

## Quick Preview (no install needed)
Open `build/index.html` in your browser — it works as a static site!

## Development Setup
```bash
npm install
npm start        # Dev server at http://localhost:3000
npm run build    # Production build
```

## Sections Implemented
1. ✅ Navbar (sticky, dropdowns, mobile hamburger)
2. ✅ Hero (banking app dashboard UI mockups)
3. ✅ Trusted By brands ticker
4. ✅ Solutions grid (CB7, Digital Banking N7, Open Banking, etc.)
5. ✅ Cloud Banking (AML Dashboard mockup)
6. ✅ Core Banking features + KYC Dashboard
7. ✅ Marquee ticker banner
8. ✅ Digital Banking (phone mockup + compliance)
9. ✅ No Legacy IT / No Traditional Branches
10. ✅ CTA Banner (paper-less now)
11. ✅ Insights / Blog section
12. ✅ Case Studies with slider
13. ✅ Footer with addresses + links

## Replace Dummy Images
Search for `images.unsplash.com` in:
- `src/components/Hero.jsx` → hero person photo
- `src/components/DigitalBanking.jsx` → profile avatar
- `src/components/PhoneSections.jsx` → profile photos

Replace with your actual image paths in `public/` folder.
