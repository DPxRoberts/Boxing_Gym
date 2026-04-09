# QA Report — Underdog Boxing Gym

**Date:** 2026-04-08
**Status:** PASS

## Summary
8/8 pages passed all checks.

---

## Page Results

### index.html — PASS

**Structure:**
- ✅ `<div id="site-nav">` present before main content
- ✅ `<div id="site-footer">` present after main
- ✅ `<script src="assets/js/components.js">` loaded at bottom
- ✅ `<script src="assets/js/main.js">` loaded at bottom
- ✅ `<link rel="icon" href="assets/images/logo.jpg">` in head
- ✅ Tailwind CDN script in head
- ✅ Google Fonts link in head
- ✅ `assets/css/custom.css` linked

**Content:**
- ✅ Page has an `<h1>` heading
- ✅ No broken internal links (about.html, classes.html all exist)
- ✅ `href="#booking"` CTAs present (hero CTA + CTA strip)

**Page-specific:**
- ✅ Hero section with full-screen background image (min-h-screen, background-image inline style)
- ✅ Logo img (`assets/images/logo.jpg`) in hero
- ✅ "Become the Underdog They Underestimated" heading in h1
- ✅ Two hero CTAs: "Book a Free Class" (href="#booking") and "Learn More" (href="about.html")
- ✅ Value props bar with ALL LEVELS, REAL BOXING, COMMUNITY
- ✅ 3 class preview cards (Beginner Boxing, Cardio Boxing, Advanced Sparring)
- ✅ CTA strip section with `id="booking"`
- ✅ NO `page-content` class on `<main>` (hero is full-screen)

---

### about.html — PASS

**Structure:**
- ✅ `<div id="site-nav">` present before main content
- ✅ `<div id="site-footer">` present after main
- ✅ `<script src="assets/js/components.js">` loaded at bottom
- ✅ `<script src="assets/js/main.js">` loaded at bottom
- ✅ `<link rel="icon" href="assets/images/logo.jpg">` in head
- ✅ Tailwind CDN script in head
- ✅ Google Fonts link in head
- ✅ `assets/css/custom.css` linked

**Content:**
- ✅ Page has an `<h1>` heading
- ✅ No broken internal links
- ✅ `href="#booking"` CTA present ("Book a Free Class" in bottom CTA section)

**Page-specific:**
- ✅ `page-content` class on `<main>`
- ✅ "Our Story" h1
- ✅ 3 story paragraphs (founding story, growth, current offering)
- ✅ Mission callout blockquote ("Train every person like they're the underdog...")
- ✅ 3 values: Discipline, Community, Growth

---

### classes.html — PASS

**Structure:**
- ✅ `<div id="site-nav">` present before main content
- ✅ `<div id="site-footer">` present after main
- ✅ `<script src="assets/js/components.js">` loaded at bottom
- ✅ `<script src="assets/js/main.js">` loaded at bottom
- ✅ `<link rel="icon" href="assets/images/logo.jpg">` in head
- ✅ Tailwind CDN script in head
- ✅ Google Fonts link in head
- ✅ `assets/css/custom.css` linked

**Content:**
- ✅ Page has an `<h1>` heading
- ✅ No broken internal links (pricing.html exists)
- ✅ `href="#booking"` CTAs present on 5 class cards

**Page-specific:**
- ✅ `page-content` class on `<main>`
- ✅ "Our Classes" h1
- ✅ 6 class cards: Beginner Boxing, Cardio Boxing, Advanced Sparring, Junior Boxing, One-on-One Coaching, Open Gym
- ✅ Each card has level badge, duration, and "Book Now" button (5 cards with href="#booking")
- ✅ Open Gym card has "See Membership" link to pricing.html (correct — members-only access)

---

### pricing.html — PASS

**Structure:**
- ✅ `<div id="site-nav">` present before main content
- ✅ `<div id="site-footer">` present after main
- ✅ `<script src="assets/js/components.js">` loaded at bottom
- ✅ `<script src="assets/js/main.js">` loaded at bottom
- ✅ `<link rel="icon" href="assets/images/logo.jpg">` in head
- ✅ Tailwind CDN script in head
- ✅ Google Fonts link in head
- ✅ `assets/css/custom.css` linked

**Content:**
- ✅ Page has an `<h1>` heading
- ✅ No broken internal links
- ✅ `href="#booking"` CTAs present (Drop-In "Get Started", Monthly "Join Now", Premium "Get Started")

**Page-specific:**
- ✅ `page-content` class on `<main>`
- ✅ "Membership" h1
- ✅ 3 pricing tiers: Drop-In, Monthly, Premium
- ✅ Monthly card is visually distinct (`class="bg-white text-black"`)
- ✅ "Most Popular" badge on Monthly card

---

### schedule.html — PASS

**Structure:**
- ✅ `<div id="site-nav">` present before main content
- ✅ `<div id="site-footer">` present after main
- ✅ `<script src="assets/js/components.js">` loaded at bottom
- ✅ `<script src="assets/js/main.js">` loaded at bottom
- ✅ `<link rel="icon" href="assets/images/logo.jpg">` in head
- ✅ Tailwind CDN script in head
- ✅ Google Fonts link in head
- ✅ `assets/css/custom.css` linked

**Content:**
- ✅ Page has an `<h1>` heading
- ✅ No broken internal links
- ✅ `href="#booking"` CTA present ("Book a Class" in bottom CTA section)

**Page-specific:**
- ✅ `page-content` class on `<main>`
- ✅ "Class Schedule" h1
- ✅ Desktop timetable section with `class="hidden md:block"` and 7-column grid (`grid-cols-7`)
- ✅ Mobile accordion section with `class="md:hidden"`
- ✅ 7 day-toggle buttons each with `data-target` and `aria-expanded="false"` attributes (Mon–Sun)
- ✅ 7 day-panel divs with correct IDs: day-mon, day-tue, day-wed, day-thu, day-fri, day-sat, day-sun

---

### coaches.html — PASS

**Structure:**
- ✅ `<div id="site-nav">` present before main content
- ✅ `<div id="site-footer">` present after main
- ✅ `<script src="assets/js/components.js">` loaded at bottom
- ✅ `<script src="assets/js/main.js">` loaded at bottom
- ✅ `<link rel="icon" href="assets/images/logo.jpg">` in head
- ✅ Tailwind CDN script in head
- ✅ Google Fonts link in head
- ✅ `assets/css/custom.css` linked

**Content:**
- ✅ Page has an `<h1>` heading
- ✅ No broken internal links
- ✅ `href="#booking"` CTA present ("Book a Class" in bottom CTA section)

**Page-specific:**
- ✅ `page-content` class on `<main>`
- ✅ "Our Coaches" h1
- ✅ 4 coach cards in a 2-column grid (`grid-cols-1 sm:grid-cols-2`)
- ✅ All 4 coach images have `class="... grayscale"`

---

### gallery.html — PASS

**Structure:**
- ✅ `<div id="site-nav">` present before main content
- ✅ `<div id="site-footer">` present after main
- ✅ `<script src="assets/js/components.js">` loaded at bottom
- ✅ `<script src="assets/js/main.js">` loaded at bottom
- ✅ `<link rel="icon" href="assets/images/logo.jpg">` in head
- ✅ Tailwind CDN script in head
- ✅ Google Fonts link in head
- ✅ `assets/css/custom.css` linked

**Content:**
- ✅ Page has an `<h1>` heading
- ✅ No broken internal links

**Page-specific:**
- ✅ `page-content` class on `<main>`
- ✅ "Gallery" h1
- ✅ Exactly 12 images using picsum seeds gym1 through gym12
- ✅ Each image has a hover overlay `<div>` (absolute inset, opacity transition)

---

### contact.html — PASS

**Structure:**
- ✅ `<div id="site-nav">` present before main content
- ✅ `<div id="site-footer">` present after main
- ✅ `<script src="assets/js/components.js">` loaded at bottom
- ✅ `<script src="assets/js/main.js">` loaded at bottom
- ✅ `<link rel="icon" href="assets/images/logo.jpg">` in head
- ✅ Tailwind CDN script in head
- ✅ Google Fonts link in head
- ✅ `assets/css/custom.css` linked

**Content:**
- ✅ Page has an `<h1>` heading
- ✅ No broken internal links

**Page-specific:**
- ✅ `page-content` class on `<main>`
- ✅ "Contact" h1
- ✅ Contact details: address, phone, email, and hours all present
- ✅ Map placeholder div present (styled container with Google Maps embed note)
- ✅ Form with `id="contact-form"` and `novalidate`
- ✅ Form fields: name (text, required), email (email, required), message (textarea, required)
- ✅ Thank-you div with `id="thank-you"` and `class="hidden"`

---

## Issues Found

None. All checks passed across all 8 pages and all shared assets.

---

## Shared Assets

- `assets/js/components.js`: **PASS** — Full nav HTML (fixed bar, desktop links, mobile drawer with hamburger) and full footer HTML (brand, quick links, contact columns) injected via innerHTML. Not a stub.
- `assets/js/main.js`: **PASS** — Contains mobile menu toggle (with setTimeout for component injection ordering), contact form submit handler (hides form, shows thank-you), and schedule accordion (open/close panels, chevron rotation, aria-expanded). Not a stub.
- `assets/css/custom.css`: **PASS** — Defines `.hero-texture` (diagonal repeating-linear-gradient pseudo-element) and `.page-content` (padding-top: 4rem to clear fixed nav).
- `assets/images/logo.jpg`: **PASS** — File exists on disk.
