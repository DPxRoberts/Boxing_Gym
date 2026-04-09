# Underdog Boxing Gym — Demo Website

A polished static website built as a portfolio demo to showcase web development services. Designed for a local boxing gym opening soon.

---

## Live Preview

Open `index.html` directly in any browser — no server or build step required.

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Full-screen hero, value props, class preview, booking CTA |
| About | `about.html` | Gym story, mission statement, core values |
| Classes | `classes.html` | 6 class cards with level badges and booking buttons |
| Pricing | `pricing.html` | 3 membership tiers (Drop-In, Monthly, Premium) |
| Schedule | `schedule.html` | Weekly timetable — desktop grid + mobile accordion |
| Coaches | `coaches.html` | 4 coach profile cards |
| Gallery | `gallery.html` | 12-photo grid with hover effects |
| Contact | `contact.html` | Contact details, map placeholder, contact form |

---

## Tech Stack

- **HTML5** — static multi-page site, no frameworks
- **Tailwind CSS** — loaded via CDN, no build step
- **Vanilla JavaScript** — mobile nav, contact form, schedule accordion
- **Google Fonts** — Inter
- **Placeholder images** — [picsum.photos](https://picsum.photos) with seeded URLs

---

## Project Structure

```
/
├── index.html
├── about.html
├── classes.html
├── pricing.html
├── schedule.html
├── coaches.html
├── gallery.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── custom.css        # Hero texture, nav offset padding
│   ├── js/
│   │   ├── components.js     # Shared nav + footer (injected on all pages)
│   │   └── main.js           # Mobile menu, contact form, schedule accordion
│   └── images/
│       └── logo.jpg          # Underdog Boxing circular badge logo
└── docs/
    └── build-summary.md      # Deployment and content update guide
```

---

## Deployment

Drop the project folder onto any static host — no configuration needed.

- **Netlify** — drag and drop the folder at [app.netlify.com](https://app.netlify.com)
- **GitHub Pages** — push to a repo and enable Pages in repository settings
- **Vercel** — import the repo or drag and drop

---

## Customising for a Real Client

All placeholder content is clearly marked. Search the files for these tokens to replace them:

| Token | Location | Replace with |
|-------|----------|--------------|
| `#booking` | All pages — CTA buttons | Real booking URL (Meeteergo, etc.) |
| `href="#"` | `components.js` social icons | Facebook + Instagram profile URLs |
| `$XX` | `pricing.html` | Real membership prices |
| `[Coach Name]` | `coaches.html` | Real coach names |
| `[Your City]` | `index.html` hero | Gym location |
| `[Year]` | `about.html` | Year founded |
| `123 Placeholder Street` | `components.js`, `contact.html` | Real address |
| `(555) 000-0000` | `components.js`, `contact.html` | Real phone number |
| `info@underdogboxing.com` | `components.js`, `contact.html` | Real email address |
| Google Maps placeholder | `contact.html` | Real `<iframe>` embed from Google Maps |
| picsum.photos images | All pages | Real gym photos |

---

## Design

- **Palette** — Classic Grit: black (`#000`/`#111`), white (`#fff`), zinc greys
- **Typography** — Inter, bold/black weights, uppercase tracking
- **Style** — raw, gritty, community-focused. Not intimidating.

---

*Built as a portfolio demo by [Your Name/Agency]. Available for hire.*
