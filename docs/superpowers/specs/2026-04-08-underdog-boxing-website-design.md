# Underdog Boxing Gym — Website Design Spec

**Date:** 2026-04-08  
**Project:** Static multi-page website for Underdog Boxing Gym  
**Purpose:** Demo/portfolio site to attract web development clients

---

## 1. Project Overview

A static multi-page website for a local boxing gym called **Underdog Boxing Gym**. The site is a demo/portfolio piece — it will be shown to the gym owner and other potential clients to sell web development services. Content is placeholder throughout. The design must look polished and professional enough to close deals.

The gym caters to **all skill levels** — beginners through advanced. The primary goal of the site is to drive visitors to **book a class** (via an external booking tool, initially a button/link placeholder for Meeteergo or similar).

---

## 2. Design Direction

| Property | Decision |
|----------|----------|
| Color scheme | **Classic Grit** — black (#000/#111), white (#fff), grey (#888/#555) |
| Accent | No color accent — pure monochrome |
| Typography | Bold, uppercase, wide letter-spacing for headings; clean sans-serif for body |
| Imagery | Unsplash stock photos (boxing-related: gloves, bags, ring, training) |
| Logo | `Underdog_Boxing.jpg` — circular badge, black/white, hanging gloves |
| Tone | Raw, gritty, community-focused. Not intimidating — everyone belongs here |

---

## 3. Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Markup | HTML5 | Static, no build step |
| Styling | Tailwind CSS via CDN | No build step, utility-first, responsive by default, modern |
| JavaScript | Vanilla JS (minimal) | Mobile nav toggle, smooth scroll only |
| Images | Unsplash embed URLs | Free, high quality, boxing-specific |
| Hosting | Any static host (Netlify, GitHub Pages, etc.) | No server required |
| Booking | Placeholder CTA linking to Meeteergo (or similar) | Drop-in link swap when ready |
| Social | Facebook + Instagram icon links in nav/footer | Placeholder `#` hrefs for now |

---

## 4. Site Structure

Multi-page static site. Each page shares a common `<nav>` and `<footer>`.

| File | Page | Primary Content |
|------|------|-----------------|
| `index.html` | Home | Hero, value props, classes preview, CTA strip |
| `about.html` | About | Gym story, mission, values |
| `classes.html` | Classes | Class cards with descriptions and images |
| `pricing.html` | Pricing | Membership tiers and pricing table |
| `schedule.html` | Schedule | Weekly class timetable |
| `coaches.html` | Coaches | Coach profile cards with placeholder bios |
| `gallery.html` | Gallery | Photo grid using Unsplash boxing images |
| `contact.html` | Contact | Address, phone, email, hours, Google Maps embed placeholder |

---

## 5. Shared Components (repeated across all pages)

### Navigation
- Fixed top bar, black background
- Left: logo image (`Underdog_Boxing.jpg`) + gym name text
- Centre: page links (About, Classes, Pricing, Schedule, Coaches, Gallery, Contact)
- Right: "Book a Class" CTA button (white, bold, uppercase)
- Mobile: hamburger menu, collapsible drawer
- Facebook + Instagram icon links (small, in nav or footer)

### Footer
- Black background
- Gym name + tagline
- Quick nav links
- Social icons (Facebook, Instagram)
- Placeholder contact info (address, phone, email)
- Copyright line

---

## 6. Page Designs

### 6.1 Home (`index.html`)

1. **Hero section** — full-width, dark background with subtle texture overlay
   - Placeholder for full-bleed boxing photo (Unsplash)
   - Headline: *"Become the Underdog They Underestimated"*
   - Subtext: *"Boxing classes for all levels. No experience needed. Just the will to show up."*
   - CTAs: `Book a Free Class` (primary, white) + `Learn More` (secondary, ghost)
   - Gym logo centered above headline

2. **3 value props bar** — full width, dark grey, 3 columns
   - ALL LEVELS · REAL BOXING · COMMUNITY

3. **Classes preview** — 3 class cards (Beginner Boxing, Cardio Boxing, Advanced Sparring)
   - Each card: Unsplash image, class name, short description
   - "View All Classes →" link

4. **CTA strip** — full-width black section
   - Headline: *"Ready to step in the ring?"*
   - Button: `Book a Class` → links to booking placeholder

### 6.2 About (`about.html`)

- Hero banner with heading "Our Story" and background boxing photo
- Gym story section (2–3 placeholder paragraphs)
- Mission statement callout (bold quote-style)
- 3 values (Discipline, Community, Growth) — icon + short description each

### 6.3 Classes (`classes.html`)

- Page heading + intro text
- 6 class cards in a 3-column grid:
  1. Beginner Boxing
  2. Cardio Boxing
  3. Advanced Sparring
  4. Junior Boxing (kids/teens)
  5. One-on-One Coaching
  6. Open Gym
- Each card: Unsplash image, class name, level badge, description, duration, "Book Now" button

### 6.4 Pricing (`pricing.html`)

- Page heading
- 3 pricing tiers in a card layout:
  1. **Drop-In** — single class, no commitment
  2. **Monthly Membership** — unlimited classes
  3. **Premium** — unlimited + personal coaching sessions
- Each tier: price placeholder (e.g. `$XX/mo`), feature list, CTA button
- Note: all prices are placeholder

### 6.5 Schedule (`schedule.html`)

- Page heading
- Weekly timetable — 7-column grid (Mon–Sun)
- Placeholder class slots with class name, time, and level badge
- Mobile: stack to daily accordion view

### 6.6 Coaches (`coaches.html`)

- Page heading + intro
- 4 coach profile cards (2×2 grid):
  - Placeholder Unsplash portrait (boxing/athlete style)
  - Name (placeholder), role/specialty, short bio
- "Train with us" CTA at bottom

### 6.7 Gallery (`gallery.html`)

- Page heading
- Masonry/grid layout of 12 Unsplash boxing photos
- Hover overlay effect (image darkens, white icon appears)
- No lightbox required for v1

### 6.8 Contact (`contact.html`)

- Page heading
- Two-column layout:
  - Left: contact details (address, phone, email, opening hours) — all placeholder
  - Right: Google Maps embed placeholder (grey box with label)
- Simple contact form below: Name, Email, Message, Send button
  - Form is static (no backend) — on submit shows a thank-you message via JS

---

## 7. Booking Integration

- All "Book a Class" / "Book Now" CTAs link to a single placeholder URL (`#booking`)
- When Meeteergo (or chosen tool) is set up, swap all `#booking` hrefs to the live link
- No iframe embed needed — external redirect is sufficient for v1

---

## 8. Social Media Integration

- Facebook and Instagram icon links in nav and footer
- `href="#"` placeholder — owner swaps in real profile URLs
- No feed embed for v1

---

## 9. Agent Team Setup

Per `agent-teams-sop.md`, the project will be built using parallel agents:

| Agent | Role | Owns |
|-------|------|------|
| Frontend Developer | Build all HTML pages and Tailwind styling | `/src/` (all `.html` files) |
| QA Engineer | Review, test responsiveness, check links/CTAs | `/tests/report.md` |
| Docs Agent | Maintain build summary and notes | `/docs/build-summary.md` |

Enable in `.acloud/settings.local.json`:
```json
{
  "agentTeams.enabled": true
}
```

**File ownership rules:**
- Frontend owns all HTML files — QA does not edit them
- QA reports issues; Frontend implements fixes
- No cross-editing between agents

---

## 10. Out of Scope (v1)

- Backend / server-side logic
- User accounts or login
- CMS integration
- Blog
- Testimonials section (explicitly excluded)
- Lightbox gallery
- Live booking calendar embed
- Live social media feed embed
- SEO optimisation beyond basic meta tags
