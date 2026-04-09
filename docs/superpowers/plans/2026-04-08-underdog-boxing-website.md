# Underdog Boxing Gym Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished 8-page static website for Underdog Boxing Gym using HTML + Tailwind CSS CDN, serving as a portfolio demo to attract web development clients.

**Architecture:** Multi-page static site where all pages share a common nav and footer injected by a `components.js` file. Tailwind CSS is loaded via CDN (no build step). Vanilla JS handles mobile menu toggling and the contact form. All booking CTAs point to `#booking` as a placeholder.

**Tech Stack:** HTML5, Tailwind CSS v3 CDN, Vanilla JS, picsum.photos (placeholder images), Google Fonts (Inter)

---

## File Structure

```
/
├── index.html              # Home page
├── about.html              # About page
├── classes.html            # Classes page
├── pricing.html            # Pricing page
├── schedule.html           # Schedule page
├── coaches.html            # Coaches page
├── gallery.html            # Gallery page
├── contact.html            # Contact page
├── assets/
│   ├── css/
│   │   └── custom.css      # Minimal custom styles (hero texture, base resets)
│   ├── js/
│   │   ├── components.js   # Injects shared nav + footer into every page
│   │   └── main.js         # Mobile menu toggle + contact form handler
│   └── images/
│       └── logo.jpg        # Copy of Underdog_Boxing.jpg
├── .acloud/
│   └── settings.local.json # Agent teams config
├── .gitignore
├── docs/
│   ├── build-summary.md    # QA + Docs agent output
│   └── superpowers/
│       ├── specs/
│       └── plans/
└── tests/
    └── report.md           # QA agent checklist results
```

**Shared component pattern:** Every HTML page has `<div id="site-nav"></div>` near the top and `<div id="site-footer"></div>` before `</body>`. `components.js` (loaded last) injects the full nav and footer HTML into those divs on DOMContentLoaded.

**Image strategy:** Use `https://picsum.photos/seed/{seed}/{w}/{h}` for reliable, consistent placeholder images. Each seed string always returns the same image. Overlay dark gradients on hero images so the monochrome aesthetic holds regardless of photo content.

---

## Task 1: Project Scaffold

**Files:**
- Create: `.acloud/settings.local.json`
- Create: `.gitignore`
- Create: `assets/css/custom.css`
- Create: `assets/js/components.js` (stub)
- Create: `assets/js/main.js` (stub)
- Copy: `Underdog_Boxing.jpg` → `assets/images/logo.jpg`
- Create: `tests/report.md` (stub)
- Create: `docs/build-summary.md` (stub)

- [ ] **Step 1: Enable agent teams config**

Create `.acloud/settings.local.json`:
```json
{
  "agentTeams.enabled": true
}
```

- [ ] **Step 2: Create .gitignore**

Create `.gitignore`:
```
.superpowers/
.DS_Store
Thumbs.db
```

- [ ] **Step 3: Create directory structure**

Run:
```bash
mkdir -p assets/css assets/js assets/images tests
cp Underdog_Boxing.jpg assets/images/logo.jpg
```

- [ ] **Step 4: Create stub JS files**

Create `assets/js/components.js`:
```javascript
// Shared nav and footer — injected into every page
// See Task 2 for full implementation
```

Create `assets/js/main.js`:
```javascript
// Mobile menu + contact form
// See Task 3 for full implementation
```

- [ ] **Step 5: Create custom.css**

Create `assets/css/custom.css`:
```css
/* Hero diagonal texture overlay */
.hero-texture {
  position: relative;
}
.hero-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(255, 255, 255, 0.015) 10px,
    rgba(255, 255, 255, 0.015) 11px
  );
  pointer-events: none;
  z-index: 1;
}
.hero-texture > * {
  position: relative;
  z-index: 2;
}

/* Page-level top padding to clear fixed nav */
.page-content {
  padding-top: 4rem; /* 64px = h-16 nav height */
}
```

- [ ] **Step 6: Create stub docs**

Create `tests/report.md`:
```markdown
# QA Report — Underdog Boxing Gym

**Status:** Pending build completion

## Checklist
To be filled in by QA agent after all pages are built.
```

Create `docs/build-summary.md`:
```markdown
# Build Summary — Underdog Boxing Gym

**Status:** In progress

## Pages
To be updated as pages are completed.
```

- [ ] **Step 7: Commit scaffold**

```bash
git init
git add .acloud/ .gitignore assets/css/ assets/js/ assets/images/ tests/ docs/
git commit -m "chore: project scaffold, agent config, shared asset stubs"
```

---

## Task 2: Shared Components (Nav + Footer)

**Files:**
- Modify: `assets/js/components.js`

- [ ] **Step 1: Define acceptance criteria**

The nav must:
- [ ] Be fixed to top, always visible on scroll
- [ ] Show logo image + gym name on left
- [ ] Show 7 page links in centre (desktop)
- [ ] Show Facebook + Instagram SVG icon links (desktop)
- [ ] Show white "Book a Class" CTA button (desktop)
- [ ] Show hamburger button on mobile
- [ ] Expand mobile drawer with all links on hamburger click
- [ ] All booking links use `href="#booking"`
- [ ] All social links use `href="#"`

The footer must:
- [ ] Show logo + tagline
- [ ] Show quick nav links column
- [ ] Show contact info column (placeholder)
- [ ] Show Facebook + Instagram SVG icons
- [ ] Show copyright line

- [ ] **Step 2: Write components.js**

Replace `assets/js/components.js` with:
```javascript
document.addEventListener('DOMContentLoaded', function () {

  // ── NAV ──────────────────────────────────────────────────────────────────
  const navEl = document.getElementById('site-nav');
  if (navEl) {
    navEl.innerHTML = `
<nav class="fixed top-0 left-0 right-0 z-50 bg-black border-b border-zinc-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">

      <!-- Logo -->
      <a href="index.html" class="flex items-center gap-3 shrink-0">
        <img src="assets/images/logo.jpg" alt="Underdog Boxing Gym logo"
             class="h-10 w-10 rounded-full object-cover border border-zinc-700">
        <span class="text-white font-black text-xs tracking-widest uppercase hidden sm:block">
          Underdog Boxing
        </span>
      </a>

      <!-- Desktop nav links -->
      <div class="hidden md:flex items-center gap-5 text-xs text-zinc-400 tracking-widest uppercase font-semibold">
        <a href="about.html"    class="hover:text-white transition-colors duration-150">About</a>
        <a href="classes.html"  class="hover:text-white transition-colors duration-150">Classes</a>
        <a href="pricing.html"  class="hover:text-white transition-colors duration-150">Pricing</a>
        <a href="schedule.html" class="hover:text-white transition-colors duration-150">Schedule</a>
        <a href="coaches.html"  class="hover:text-white transition-colors duration-150">Coaches</a>
        <a href="gallery.html"  class="hover:text-white transition-colors duration-150">Gallery</a>
        <a href="contact.html"  class="hover:text-white transition-colors duration-150">Contact</a>
      </div>

      <!-- Desktop: social + CTA -->
      <div class="hidden md:flex items-center gap-4 shrink-0">
        <!-- Facebook -->
        <a href="#" aria-label="Facebook" class="text-zinc-500 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
        </a>
        <!-- Instagram -->
        <a href="#" aria-label="Instagram" class="text-zinc-500 hover:text-white transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        <a href="#booking"
           class="bg-white text-black text-xs font-black tracking-widest uppercase px-5 py-2.5 hover:bg-zinc-200 transition-colors duration-150">
          Book a Class
        </a>
      </div>

      <!-- Mobile: hamburger -->
      <button id="menu-toggle" aria-label="Toggle navigation menu"
              class="md:hidden text-white p-2 -mr-2">
        <svg id="icon-open" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg id="icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

    </div>
  </div>

  <!-- Mobile drawer -->
  <div id="mobile-menu" class="hidden md:hidden bg-black border-t border-zinc-800 px-4 pb-4">
    <div class="flex flex-col space-y-1 pt-2">
      <a href="about.html"    class="block text-xs text-zinc-400 tracking-widest uppercase font-semibold hover:text-white py-2.5 border-b border-zinc-900">About</a>
      <a href="classes.html"  class="block text-xs text-zinc-400 tracking-widest uppercase font-semibold hover:text-white py-2.5 border-b border-zinc-900">Classes</a>
      <a href="pricing.html"  class="block text-xs text-zinc-400 tracking-widest uppercase font-semibold hover:text-white py-2.5 border-b border-zinc-900">Pricing</a>
      <a href="schedule.html" class="block text-xs text-zinc-400 tracking-widest uppercase font-semibold hover:text-white py-2.5 border-b border-zinc-900">Schedule</a>
      <a href="coaches.html"  class="block text-xs text-zinc-400 tracking-widest uppercase font-semibold hover:text-white py-2.5 border-b border-zinc-900">Coaches</a>
      <a href="gallery.html"  class="block text-xs text-zinc-400 tracking-widest uppercase font-semibold hover:text-white py-2.5 border-b border-zinc-900">Gallery</a>
      <a href="contact.html"  class="block text-xs text-zinc-400 tracking-widest uppercase font-semibold hover:text-white py-2.5 border-b border-zinc-900">Contact</a>
      <div class="flex items-center gap-4 py-3">
        <a href="#" aria-label="Facebook" class="text-zinc-500 hover:text-white transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        <a href="#" aria-label="Instagram" class="text-zinc-500 hover:text-white transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
      </div>
      <a href="#booking"
         class="block bg-white text-black text-xs font-black tracking-widest uppercase px-5 py-3 text-center">
        Book a Class
      </a>
    </div>
  </div>
</nav>`;
  }

  // ── FOOTER ────────────────────────────────────────────────────────────────
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.innerHTML = `
<footer class="bg-black border-t border-zinc-800 mt-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

      <!-- Brand column -->
      <div>
        <a href="index.html" class="flex items-center gap-3 mb-4">
          <img src="assets/images/logo.jpg" alt="Underdog Boxing" class="h-10 w-10 rounded-full object-cover border border-zinc-700">
          <span class="font-black text-xs tracking-widest uppercase">Underdog Boxing</span>
        </a>
        <p class="text-zinc-500 text-sm leading-relaxed">
          Where underdogs become champions. Boxing for all levels — no experience needed, just the will to show up.
        </p>
        <div class="flex items-center gap-4 mt-5">
          <a href="#" aria-label="Facebook" class="text-zinc-500 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" class="text-zinc-500 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Quick links column -->
      <div>
        <h4 class="text-xs font-black tracking-widest uppercase text-white mb-5">Quick Links</h4>
        <ul class="space-y-2.5">
          <li><a href="about.html"    class="text-zinc-500 hover:text-white text-sm transition-colors">About</a></li>
          <li><a href="classes.html"  class="text-zinc-500 hover:text-white text-sm transition-colors">Classes</a></li>
          <li><a href="pricing.html"  class="text-zinc-500 hover:text-white text-sm transition-colors">Pricing</a></li>
          <li><a href="schedule.html" class="text-zinc-500 hover:text-white text-sm transition-colors">Schedule</a></li>
          <li><a href="coaches.html"  class="text-zinc-500 hover:text-white text-sm transition-colors">Coaches</a></li>
          <li><a href="gallery.html"  class="text-zinc-500 hover:text-white text-sm transition-colors">Gallery</a></li>
          <li><a href="contact.html"  class="text-zinc-500 hover:text-white text-sm transition-colors">Contact</a></li>
        </ul>
      </div>

      <!-- Contact column -->
      <div>
        <h4 class="text-xs font-black tracking-widest uppercase text-white mb-5">Find Us</h4>
        <address class="not-italic space-y-2 text-zinc-500 text-sm">
          <p>123 Placeholder Street</p>
          <p>Your City, State 00000</p>
          <p class="pt-2">(555) 000-0000</p>
          <p>info@underdogboxing.com</p>
          <p class="pt-2 text-zinc-600 text-xs leading-relaxed">Mon–Fri: 6:00am – 9:00pm<br>Sat–Sun: 8:00am – 6:00pm</p>
        </address>
      </div>

    </div>

    <div class="border-t border-zinc-800 mt-10 pt-8 text-center text-zinc-600 text-xs tracking-widest">
      &copy; 2025 Underdog Boxing Gym. All rights reserved.
    </div>
  </div>
</footer>`;
  }

});
```

- [ ] **Step 3: Commit**

```bash
git add assets/js/components.js
git commit -m "feat: shared nav and footer components via JS injection"
```

---

## Task 3: Mobile Menu + Contact Form JS

**Files:**
- Modify: `assets/js/main.js`

- [ ] **Step 1: Write main.js**

Replace `assets/js/main.js` with:
```javascript
document.addEventListener('DOMContentLoaded', function () {

  // ── MOBILE MENU TOGGLE ───────────────────────────────────────────────────
  // Elements are injected by components.js which also runs on DOMContentLoaded.
  // Use a short timeout to ensure components.js has run first.
  setTimeout(function () {
    const toggle = document.getElementById('menu-toggle');
    const menu   = document.getElementById('mobile-menu');
    const iconOpen  = document.getElementById('icon-open');
    const iconClose = document.getElementById('icon-close');

    if (toggle && menu) {
      toggle.addEventListener('click', function () {
        const isHidden = menu.classList.contains('hidden');
        menu.classList.toggle('hidden', !isHidden);
        iconOpen.classList.toggle('hidden', isHidden);
        iconClose.classList.toggle('hidden', !isHidden);
      });
    }
  }, 0);

  // ── CONTACT FORM ─────────────────────────────────────────────────────────
  const form    = document.getElementById('contact-form');
  const thankYou = document.getElementById('thank-you');

  if (form && thankYou) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.classList.add('hidden');
      thankYou.classList.remove('hidden');
    });
  }

  // ── SCHEDULE ACCORDION (mobile) ──────────────────────────────────────────
  document.querySelectorAll('.day-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const panel = document.getElementById(btn.getAttribute('data-target'));
      if (!panel) return;
      const isOpen = !panel.classList.contains('hidden');
      // Close all panels
      document.querySelectorAll('.day-panel').forEach(p => p.classList.add('hidden'));
      document.querySelectorAll('.day-toggle svg').forEach(s => s.classList.remove('rotate-180'));
      // Open clicked if it was closed
      if (!isOpen) {
        panel.classList.remove('hidden');
        btn.querySelector('svg').classList.add('rotate-180');
      }
    });
  });

});
```

- [ ] **Step 2: Commit**

```bash
git add assets/js/main.js
git commit -m "feat: mobile menu toggle, contact form handler, schedule accordion"
```

---

## Task 4: HTML Base Template (reference — not a standalone file)

Every page uses this exact shell. Copy it when creating each page — do not deviate from this structure.

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PAGE TITLE | Underdog Boxing Gym</title>
  <meta name="description" content="PAGE DESCRIPTION">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] }
        }
      }
    }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/custom.css">
</head>
<body class="bg-black text-white font-sans antialiased">

  <div id="site-nav"></div>

  <main class="page-content">
    <!-- PAGE CONTENT HERE -->
  </main>

  <div id="site-footer"></div>

  <script src="assets/js/components.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>
```

**Note:** `assets/css/custom.css` defines `.page-content { padding-top: 4rem; }` to offset the fixed nav.

---

## Task 5: Home Page (`index.html`)

**Files:**
- Create: `index.html`

- [ ] **Step 1: Define acceptance criteria**

`index.html` must contain:
- [ ] Hero: full-width dark section with background image overlay, logo, headline, subtext, two CTAs
- [ ] Value props: 3-column bar (ALL LEVELS · REAL BOXING · COMMUNITY)
- [ ] Classes preview: 3 cards with image, title, description
- [ ] CTA strip: full-width section with headline and Book a Class button
- [ ] `<div id="site-nav">` and `<div id="site-footer">` present
- [ ] Both JS files loaded at bottom

- [ ] **Step 2: Create index.html**

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home | Underdog Boxing Gym</title>
  <meta name="description" content="Boxing classes for all levels. Book your first class at Underdog Boxing Gym.">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = { theme: { extend: { fontFamily: { sans: ['Inter','system-ui','sans-serif'] } } } }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/custom.css">
</head>
<body class="bg-black text-white font-sans antialiased">

  <div id="site-nav"></div>

  <main>

    <!-- ── HERO ─────────────────────────────────────────────────────────── -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden hero-texture"
             style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.9) 100%), url('https://picsum.photos/seed/boxinghero/1600/900'); background-size: cover; background-position: center;">

      <div class="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <img src="assets/images/logo.jpg" alt="Underdog Boxing Gym"
             class="w-24 h-24 rounded-full object-cover border-2 border-zinc-600 mx-auto mb-8">

        <p class="text-zinc-500 text-xs tracking-widest uppercase mb-4">Est. 2025 &middot; [Your City]</p>

        <h1 class="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none mb-6">
          Become the<br>
          <span class="text-white">Underdog</span><br>
          They Underestimated
        </h1>

        <p class="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Boxing classes for all levels. No experience needed.<br>Just the will to show up.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#booking"
             class="w-full sm:w-auto bg-white text-black font-black text-xs tracking-widest uppercase px-8 py-4 hover:bg-zinc-200 transition-colors duration-150">
            Book a Free Class
          </a>
          <a href="about.html"
             class="w-full sm:w-auto border border-zinc-600 text-zinc-400 font-semibold text-xs tracking-widest uppercase px-8 py-4 hover:border-white hover:text-white transition-colors duration-150">
            Learn More
          </a>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 animate-bounce">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>

    <!-- ── VALUE PROPS BAR ───────────────────────────────────────────────── -->
    <section class="bg-zinc-900 border-y border-zinc-800">
      <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800">
        <div class="text-center py-8 px-6">
          <p class="text-white font-black text-xl tracking-widest uppercase mb-1">All Levels</p>
          <p class="text-zinc-500 text-xs tracking-wide uppercase">Beginner to advanced</p>
        </div>
        <div class="text-center py-8 px-6">
          <p class="text-white font-black text-xl tracking-widest uppercase mb-1">Real Boxing</p>
          <p class="text-zinc-500 text-xs tracking-wide uppercase">Technique-first training</p>
        </div>
        <div class="text-center py-8 px-6">
          <p class="text-white font-black text-xl tracking-widest uppercase mb-1">Community</p>
          <p class="text-zinc-500 text-xs tracking-wide uppercase">Train alongside others</p>
        </div>
      </div>
    </section>

    <!-- ── CLASSES PREVIEW ───────────────────────────────────────────────── -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <p class="text-zinc-500 text-xs tracking-widest uppercase mb-2">What we offer</p>
      <h2 class="text-4xl font-black uppercase tracking-tight mb-12">Our Classes</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <!-- Card 1 -->
        <div class="group bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-600 transition-colors duration-200">
          <div class="overflow-hidden">
            <img src="https://picsum.photos/seed/beginner/600/400" alt="Beginner Boxing"
                 class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
          </div>
          <div class="p-6">
            <span class="text-xs text-zinc-500 tracking-widest uppercase font-semibold">All Levels</span>
            <h3 class="text-lg font-black uppercase tracking-tight mt-1 mb-3">Beginner Boxing</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Master the fundamentals — stance, footwork, jabs, and combinations. The perfect starting point.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="group bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-600 transition-colors duration-200">
          <div class="overflow-hidden">
            <img src="https://picsum.photos/seed/cardio/600/400" alt="Cardio Boxing"
                 class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
          </div>
          <div class="p-6">
            <span class="text-xs text-zinc-500 tracking-widest uppercase font-semibold">All Levels</span>
            <h3 class="text-lg font-black uppercase tracking-tight mt-1 mb-3">Cardio Boxing</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              High-energy fitness workout using boxing movements. No sparring — just sweat, rhythm, and results.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="group bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-600 transition-colors duration-200">
          <div class="overflow-hidden">
            <img src="https://picsum.photos/seed/sparring/600/400" alt="Advanced Sparring"
                 class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
          </div>
          <div class="p-6">
            <span class="text-xs text-zinc-500 tracking-widest uppercase font-semibold">Intermediate+</span>
            <h3 class="text-lg font-black uppercase tracking-tight mt-1 mb-3">Advanced Sparring</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Controlled, coach-supervised sparring for members ready to test their skills in the ring.
            </p>
          </div>
        </div>

      </div>

      <div class="text-center mt-10">
        <a href="classes.html"
           class="inline-block border border-zinc-600 text-zinc-400 text-xs font-semibold tracking-widest uppercase px-8 py-3 hover:border-white hover:text-white transition-colors duration-150">
          View All Classes &rarr;
        </a>
      </div>
    </section>

    <!-- ── CTA STRIP ─────────────────────────────────────────────────────── -->
    <section id="booking" class="bg-zinc-900 border-y border-zinc-800 py-20">
      <div class="max-w-2xl mx-auto text-center px-4">
        <p class="text-zinc-500 text-xs tracking-widest uppercase mb-4">Ready to start?</p>
        <h2 class="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-6">
          Ready to Step<br>in the Ring?
        </h2>
        <p class="text-zinc-400 text-base mb-10 leading-relaxed">
          Your first class is on us. No gear required. Just show up.
        </p>
        <a href="#booking"
           class="inline-block bg-white text-black font-black text-xs tracking-widest uppercase px-10 py-4 hover:bg-zinc-200 transition-colors duration-150">
          Book a Free Class
        </a>
      </div>
    </section>

  </main>

  <div id="site-footer"></div>
  <script src="assets/js/components.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Open index.html in browser and verify all criteria from Step 1**

Open file directly: `open index.html` (Mac) or navigate to `file:///path/to/index.html` (Windows/Linux).

Expected: nav loads, hero image visible with dark overlay, headline readable, both CTAs present, 3 class cards render with images, CTA strip at bottom, footer loads.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: home page — hero, value props, classes preview, CTA strip"
```

---

## Task 6: About Page (`about.html`)

**Files:**
- Create: `about.html`

- [ ] **Step 1: Define acceptance criteria**

`about.html` must contain:
- [ ] Page hero banner with "Our Story" heading and dark background photo
- [ ] 2–3 paragraphs of placeholder gym story text
- [ ] Mission statement callout in a visually distinct block
- [ ] 3 values: Discipline, Community, Growth — each with an SVG icon and short description

- [ ] **Step 2: Create about.html**

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About | Underdog Boxing Gym</title>
  <meta name="description" content="Learn the story behind Underdog Boxing Gym — a community gym built for everyone.">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = { theme: { extend: { fontFamily: { sans: ['Inter','system-ui','sans-serif'] } } } }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/custom.css">
</head>
<body class="bg-black text-white font-sans antialiased">

  <div id="site-nav"></div>

  <main class="page-content">

    <!-- ── PAGE HERO ────────────────────────────────────────────────────── -->
    <section class="relative py-28 overflow-hidden"
             style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%), url('https://picsum.photos/seed/aboutgym/1600/600'); background-size: cover; background-position: center;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-zinc-500 text-xs tracking-widest uppercase mb-3">Who we are</p>
        <h1 class="text-5xl sm:text-6xl font-black uppercase tracking-tight">Our Story</h1>
      </div>
    </section>

    <!-- ── GYM STORY ─────────────────────────────────────────────────────── -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="space-y-6 text-zinc-400 text-base leading-relaxed">
        <p>
          Underdog Boxing Gym was born from a simple belief: boxing is for everyone. Not just the naturally gifted.
          Not just those who grew up with gloves on. Everyone. The person walking through our doors for the first
          time — nervous, unsure, maybe thinking they don't belong — that's who we built this place for.
        </p>
        <p>
          Founded in [Year] by [Founder Name], Underdog started as a small training space with a heavy bag, a ring,
          and a handful of people who just wanted to learn. Word spread fast. People didn't just come for the
          workout — they came back for the community. The coaches who actually give a damn. The members who cheer
          louder for the beginner than the champion.
        </p>
        <p>
          Today we offer classes for all skill levels — from absolute beginners to serious competitors — in an
          environment that's tough but welcoming. You don't have to want to fight. You just have to want to be better.
          Whatever that means for you, we're here for it.
        </p>
      </div>
    </section>

    <!-- ── MISSION CALLOUT ───────────────────────────────────────────────── -->
    <section class="bg-zinc-900 border-y border-zinc-800 py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-zinc-500 text-xs tracking-widest uppercase mb-6">Our mission</p>
        <blockquote class="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight text-white">
          &ldquo;Train every person like they&rsquo;re the underdog — because that&rsquo;s where the hunger lives.&rdquo;
        </blockquote>
      </div>
    </section>

    <!-- ── VALUES ─────────────────────────────────────────────────────────── -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <p class="text-zinc-500 text-xs tracking-widest uppercase mb-2">What drives us</p>
      <h2 class="text-4xl font-black uppercase tracking-tight mb-12">Our Values</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- Discipline -->
        <div class="bg-zinc-900 border border-zinc-800 p-8">
          <div class="w-12 h-12 flex items-center justify-center border border-zinc-700 mb-6">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-black uppercase tracking-tight mb-3">Discipline</h3>
          <p class="text-zinc-400 text-sm leading-relaxed">
            Boxing teaches discipline before it teaches anything else. We show up, we work hard, we respect the craft —
            every single session.
          </p>
        </div>

        <!-- Community -->
        <div class="bg-zinc-900 border border-zinc-800 p-8">
          <div class="w-12 h-12 flex items-center justify-center border border-zinc-700 mb-6">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-black uppercase tracking-tight mb-3">Community</h3>
          <p class="text-zinc-400 text-sm leading-relaxed">
            No egos, no cliques. Just people of all backgrounds working toward the same thing. The gym is only as strong
            as the people in it.
          </p>
        </div>

        <!-- Growth -->
        <div class="bg-zinc-900 border border-zinc-800 p-8">
          <div class="w-12 h-12 flex items-center justify-center border border-zinc-700 mb-6">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
          </div>
          <h3 class="text-xl font-black uppercase tracking-tight mb-3">Growth</h3>
          <p class="text-zinc-400 text-sm leading-relaxed">
            Every class is a chance to be better than yesterday. We measure progress against yourself — not anyone else
            in the ring.
          </p>
        </div>

      </div>
    </section>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <section class="bg-zinc-900 border-t border-zinc-800 py-16 text-center px-4">
      <h2 class="text-3xl font-black uppercase tracking-tight mb-6">Come Train With Us</h2>
      <a href="#booking"
         class="inline-block bg-white text-black font-black text-xs tracking-widest uppercase px-10 py-4 hover:bg-zinc-200 transition-colors">
        Book a Free Class
      </a>
    </section>

  </main>

  <div id="site-footer"></div>
  <script src="assets/js/components.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Open about.html in browser, verify all criteria from Step 1**

- [ ] **Step 4: Commit**

```bash
git add about.html
git commit -m "feat: about page — story, mission callout, values"
```

---

## Task 7: Classes Page (`classes.html`)

**Files:**
- Create: `classes.html`

- [ ] **Step 1: Define acceptance criteria**

`classes.html` must contain:
- [ ] Page hero with heading
- [ ] 6 class cards in a 3-column responsive grid
- [ ] Each card: image, level badge, class name, description, duration, "Book Now" button linking to `#booking`

Classes to include:
1. Beginner Boxing — All Levels — 60 min
2. Cardio Boxing — All Levels — 45 min
3. Advanced Sparring — Intermediate+ — 90 min
4. Junior Boxing — Ages 8–16 — 45 min
5. One-on-One Coaching — All Levels — 60 min
6. Open Gym — Members Only — Flexible

- [ ] **Step 2: Create classes.html**

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Classes | Underdog Boxing Gym</title>
  <meta name="description" content="Boxing classes for all levels — beginner, cardio, sparring, junior, and private coaching.">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = { theme: { extend: { fontFamily: { sans: ['Inter','system-ui','sans-serif'] } } } }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/custom.css">
</head>
<body class="bg-black text-white font-sans antialiased">

  <div id="site-nav"></div>

  <main class="page-content">

    <!-- ── PAGE HERO ────────────────────────────────────────────────────── -->
    <section class="relative py-24 overflow-hidden"
             style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url('https://picsum.photos/seed/classeshero/1600/600'); background-size: cover; background-position: center;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-zinc-500 text-xs tracking-widest uppercase mb-3">What we offer</p>
        <h1 class="text-5xl sm:text-6xl font-black uppercase tracking-tight">Our Classes</h1>
        <p class="text-zinc-400 text-base mt-4 max-w-xl leading-relaxed">
          From first-timers to seasoned fighters, we have a class for every level and every goal.
        </p>
      </div>
    </section>

    <!-- ── CLASS GRID ─────────────────────────────────────────────────────── -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Beginner Boxing -->
        <div class="group bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-600 transition-colors duration-200 flex flex-col">
          <div class="overflow-hidden">
            <img src="https://picsum.photos/seed/class1/600/400" alt="Beginner Boxing"
                 class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300">
          </div>
          <div class="p-6 flex flex-col flex-1">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-zinc-500 tracking-widest uppercase font-semibold bg-zinc-800 px-2 py-1">All Levels</span>
              <span class="text-xs text-zinc-600">60 min</span>
            </div>
            <h3 class="text-xl font-black uppercase tracking-tight mb-3">Beginner Boxing</h3>
            <p class="text-zinc-400 text-sm leading-relaxed flex-1">
              Start from zero. Learn proper stance, guard, footwork, and your first combinations in a supportive
              group environment. No experience or equipment required.
            </p>
            <a href="#booking"
               class="mt-6 block text-center bg-white text-black font-black text-xs tracking-widest uppercase py-3 hover:bg-zinc-200 transition-colors">
              Book Now
            </a>
          </div>
        </div>

        <!-- Cardio Boxing -->
        <div class="group bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-600 transition-colors duration-200 flex flex-col">
          <div class="overflow-hidden">
            <img src="https://picsum.photos/seed/class2/600/400" alt="Cardio Boxing"
                 class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300">
          </div>
          <div class="p-6 flex flex-col flex-1">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-zinc-500 tracking-widest uppercase font-semibold bg-zinc-800 px-2 py-1">All Levels</span>
              <span class="text-xs text-zinc-600">45 min</span>
            </div>
            <h3 class="text-xl font-black uppercase tracking-tight mb-3">Cardio Boxing</h3>
            <p class="text-zinc-400 text-sm leading-relaxed flex-1">
              High-intensity boxing-inspired fitness. Heavy bags, combos, and conditioning drills — zero sparring.
              A full-body burn in 45 minutes flat.
            </p>
            <a href="#booking"
               class="mt-6 block text-center bg-white text-black font-black text-xs tracking-widest uppercase py-3 hover:bg-zinc-200 transition-colors">
              Book Now
            </a>
          </div>
        </div>

        <!-- Advanced Sparring -->
        <div class="group bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-600 transition-colors duration-200 flex flex-col">
          <div class="overflow-hidden">
            <img src="https://picsum.photos/seed/class3/600/400" alt="Advanced Sparring"
                 class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300">
          </div>
          <div class="p-6 flex flex-col flex-1">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-zinc-500 tracking-widest uppercase font-semibold bg-zinc-800 px-2 py-1">Intermediate+</span>
              <span class="text-xs text-zinc-600">90 min</span>
            </div>
            <h3 class="text-xl font-black uppercase tracking-tight mb-3">Advanced Sparring</h3>
            <p class="text-zinc-400 text-sm leading-relaxed flex-1">
              Coach-supervised controlled sparring for members ready to apply their skills live. Mouthguard and
              headgear required. Invitation or coach approval needed.
            </p>
            <a href="#booking"
               class="mt-6 block text-center bg-white text-black font-black text-xs tracking-widest uppercase py-3 hover:bg-zinc-200 transition-colors">
              Book Now
            </a>
          </div>
        </div>

        <!-- Junior Boxing -->
        <div class="group bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-600 transition-colors duration-200 flex flex-col">
          <div class="overflow-hidden">
            <img src="https://picsum.photos/seed/class4/600/400" alt="Junior Boxing"
                 class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300">
          </div>
          <div class="p-6 flex flex-col flex-1">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-zinc-500 tracking-widest uppercase font-semibold bg-zinc-800 px-2 py-1">Ages 8–16</span>
              <span class="text-xs text-zinc-600">45 min</span>
            </div>
            <h3 class="text-xl font-black uppercase tracking-tight mb-3">Junior Boxing</h3>
            <p class="text-zinc-400 text-sm leading-relaxed flex-1">
              A safe, structured program designed for kids and teens. Builds discipline, confidence, fitness, and
              respect. Separate from adult classes.
            </p>
            <a href="#booking"
               class="mt-6 block text-center bg-white text-black font-black text-xs tracking-widest uppercase py-3 hover:bg-zinc-200 transition-colors">
              Book Now
            </a>
          </div>
        </div>

        <!-- One-on-One Coaching -->
        <div class="group bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-600 transition-colors duration-200 flex flex-col">
          <div class="overflow-hidden">
            <img src="https://picsum.photos/seed/class5/600/400" alt="One-on-One Coaching"
                 class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300">
          </div>
          <div class="p-6 flex flex-col flex-1">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-zinc-500 tracking-widest uppercase font-semibold bg-zinc-800 px-2 py-1">All Levels</span>
              <span class="text-xs text-zinc-600">60 min</span>
            </div>
            <h3 class="text-xl font-black uppercase tracking-tight mb-3">One-on-One Coaching</h3>
            <p class="text-zinc-400 text-sm leading-relaxed flex-1">
              Private sessions with one of our head coaches. Personalised training plan, focused pad work, and
              direct feedback accelerate your progress like nothing else.
            </p>
            <a href="#booking"
               class="mt-6 block text-center bg-white text-black font-black text-xs tracking-widest uppercase py-3 hover:bg-zinc-200 transition-colors">
              Book Now
            </a>
          </div>
        </div>

        <!-- Open Gym -->
        <div class="group bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-zinc-600 transition-colors duration-200 flex flex-col">
          <div class="overflow-hidden">
            <img src="https://picsum.photos/seed/class6/600/400" alt="Open Gym"
                 class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300">
          </div>
          <div class="p-6 flex flex-col flex-1">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-zinc-500 tracking-widest uppercase font-semibold bg-zinc-800 px-2 py-1">Members Only</span>
              <span class="text-xs text-zinc-600">Flexible</span>
            </div>
            <h3 class="text-xl font-black uppercase tracking-tight mb-3">Open Gym</h3>
            <p class="text-zinc-400 text-sm leading-relaxed flex-1">
              Train on your own terms. Bags, skipping ropes, mitts, and the ring available during open gym hours.
              Active members only — check the schedule for times.
            </p>
            <a href="pricing.html"
               class="mt-6 block text-center border border-zinc-600 text-zinc-400 font-black text-xs tracking-widest uppercase py-3 hover:border-white hover:text-white transition-colors">
              See Membership
            </a>
          </div>
        </div>

      </div>
    </section>

  </main>

  <div id="site-footer"></div>
  <script src="assets/js/components.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Open classes.html in browser, verify all 6 cards render, all "Book Now" buttons present**

- [ ] **Step 4: Commit**

```bash
git add classes.html
git commit -m "feat: classes page — 6 class cards with images, badges, and book CTAs"
```

---

## Task 8: Pricing Page (`pricing.html`)

**Files:**
- Create: `pricing.html`

- [ ] **Step 1: Define acceptance criteria**

`pricing.html` must contain:
- [ ] Page hero with heading
- [ ] 3 pricing tier cards: Drop-In, Monthly Membership, Premium
- [ ] Each card: price placeholder, feature list with checkmarks, CTA button
- [ ] Middle card (Monthly) visually differentiated as most popular

- [ ] **Step 2: Create pricing.html**

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pricing | Underdog Boxing Gym</title>
  <meta name="description" content="Flexible membership options at Underdog Boxing Gym — drop-in, monthly, and premium.">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = { theme: { extend: { fontFamily: { sans: ['Inter','system-ui','sans-serif'] } } } }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/custom.css">
</head>
<body class="bg-black text-white font-sans antialiased">

  <div id="site-nav"></div>

  <main class="page-content">

    <!-- ── PAGE HERO ────────────────────────────────────────────────────── -->
    <section class="py-24 border-b border-zinc-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-zinc-500 text-xs tracking-widest uppercase mb-3">Simple and flexible</p>
        <h1 class="text-5xl sm:text-6xl font-black uppercase tracking-tight">Membership</h1>
        <p class="text-zinc-400 text-base mt-4 max-w-xl leading-relaxed">
          No long contracts. No hidden fees. Just boxing.
        </p>
      </div>
    </section>

    <!-- ── PRICING CARDS ──────────────────────────────────────────────────── -->
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

        <!-- Drop-In -->
        <div class="bg-zinc-900 border border-zinc-800 p-8 flex flex-col">
          <p class="text-zinc-500 text-xs tracking-widest uppercase font-semibold mb-4">Drop-In</p>
          <div class="mb-6">
            <span class="text-5xl font-black">$XX</span>
            <span class="text-zinc-500 text-sm ml-1">/ class</span>
          </div>
          <p class="text-zinc-400 text-sm leading-relaxed mb-8">
            Train when you want, no commitment. Perfect for trying us out or occasional training.
          </p>
          <ul class="space-y-3 text-sm text-zinc-400 mb-10 flex-1">
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              Single class access
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              All class types available
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              No sign-up fee
            </li>
            <li class="flex items-center gap-3 text-zinc-600">
              <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              Open gym access
            </li>
          </ul>
          <a href="#booking"
             class="block text-center border border-zinc-600 text-zinc-300 font-black text-xs tracking-widest uppercase py-3 hover:border-white hover:text-white transition-colors mt-auto">
            Get Started
          </a>
        </div>

        <!-- Monthly — Most Popular -->
        <div class="bg-white text-black p-8 flex flex-col relative">
          <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-black tracking-widest uppercase px-4 py-1">
            Most Popular
          </span>
          <p class="text-zinc-600 text-xs tracking-widest uppercase font-semibold mb-4">Monthly</p>
          <div class="mb-6">
            <span class="text-5xl font-black">$XX</span>
            <span class="text-zinc-500 text-sm ml-1">/ month</span>
          </div>
          <p class="text-zinc-700 text-sm leading-relaxed mb-8">
            Unlimited classes every month. The best value for anyone training regularly.
          </p>
          <ul class="space-y-3 text-sm text-zinc-700 mb-10 flex-1">
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-black shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              Unlimited group classes
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-black shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              Open gym access
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-black shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              Cancel anytime
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-black shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              Member discounts on gear
            </li>
          </ul>
          <a href="#booking"
             class="block text-center bg-black text-white font-black text-xs tracking-widest uppercase py-3 hover:bg-zinc-800 transition-colors mt-auto">
            Join Now
          </a>
        </div>

        <!-- Premium -->
        <div class="bg-zinc-900 border border-zinc-800 p-8 flex flex-col">
          <p class="text-zinc-500 text-xs tracking-widest uppercase font-semibold mb-4">Premium</p>
          <div class="mb-6">
            <span class="text-5xl font-black">$XX</span>
            <span class="text-zinc-500 text-sm ml-1">/ month</span>
          </div>
          <p class="text-zinc-400 text-sm leading-relaxed mb-8">
            Everything in Monthly, plus private coaching sessions for accelerated progress.
          </p>
          <ul class="space-y-3 text-sm text-zinc-400 mb-10 flex-1">
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              Everything in Monthly
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              4 private coaching sessions / mo
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              Personalised training plan
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              Priority class booking
            </li>
          </ul>
          <a href="#booking"
             class="block text-center border border-zinc-600 text-zinc-300 font-black text-xs tracking-widest uppercase py-3 hover:border-white hover:text-white transition-colors mt-auto">
            Get Started
          </a>
        </div>

      </div>

      <p class="text-center text-zinc-600 text-xs mt-8">
        All prices are placeholder. Contact us for current rates.
      </p>
    </section>

  </main>

  <div id="site-footer"></div>
  <script src="assets/js/components.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Open pricing.html in browser, verify 3 cards render, Monthly card is white/inverted**

- [ ] **Step 4: Commit**

```bash
git add pricing.html
git commit -m "feat: pricing page — 3 membership tiers with feature lists"
```

---

## Task 9: Schedule Page (`schedule.html`)

**Files:**
- Create: `schedule.html`

- [ ] **Step 1: Define acceptance criteria**

`schedule.html` must contain:
- [ ] Page hero with heading
- [ ] Desktop: 7-column grid table (Mon–Sun) with class slots
- [ ] Mobile: day accordion (one open at a time, controlled by main.js)
- [ ] Each slot: class name, time, level badge
- [ ] Days: Monday–Sunday with 3–4 class slots each

- [ ] **Step 2: Create schedule.html**

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Schedule | Underdog Boxing Gym</title>
  <meta name="description" content="Weekly class schedule at Underdog Boxing Gym.">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = { theme: { extend: { fontFamily: { sans: ['Inter','system-ui','sans-serif'] } } } }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/custom.css">
</head>
<body class="bg-black text-white font-sans antialiased">

  <div id="site-nav"></div>

  <main class="page-content">

    <!-- ── PAGE HERO ────────────────────────────────────────────────────── -->
    <section class="py-24 border-b border-zinc-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-zinc-500 text-xs tracking-widest uppercase mb-3">Plan your week</p>
        <h1 class="text-5xl sm:text-6xl font-black uppercase tracking-tight">Class Schedule</h1>
        <p class="text-zinc-400 text-base mt-4 max-w-xl leading-relaxed">
          Classes run Monday through Sunday. All times are placeholder — confirm with us before attending.
        </p>
      </div>
    </section>

    <!-- ── DESKTOP TIMETABLE ──────────────────────────────────────────────── -->
    <section class="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-7 gap-px bg-zinc-800 border border-zinc-800 text-xs">

        <!-- Header row -->
        <div class="bg-zinc-900 p-3 font-black uppercase tracking-widest text-center text-zinc-400">Mon</div>
        <div class="bg-zinc-900 p-3 font-black uppercase tracking-widest text-center text-zinc-400">Tue</div>
        <div class="bg-zinc-900 p-3 font-black uppercase tracking-widest text-center text-zinc-400">Wed</div>
        <div class="bg-zinc-900 p-3 font-black uppercase tracking-widest text-center text-zinc-400">Thu</div>
        <div class="bg-zinc-900 p-3 font-black uppercase tracking-widest text-center text-zinc-400">Fri</div>
        <div class="bg-zinc-900 p-3 font-black uppercase tracking-widest text-center text-zinc-400">Sat</div>
        <div class="bg-zinc-900 p-3 font-black uppercase tracking-widest text-center text-zinc-400">Sun</div>

        <!-- Time slots -->
        <!-- Monday -->
        <div class="bg-black p-3 space-y-2">
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">6:00am</p><p class="text-zinc-400 mt-0.5">Cardio Boxing</p><span class="text-zinc-600 text-xs">All Levels</span></div>
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">12:00pm</p><p class="text-zinc-400 mt-0.5">Beginner Boxing</p><span class="text-zinc-600 text-xs">All Levels</span></div>
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">6:00pm</p><p class="text-zinc-400 mt-0.5">Advanced Sparring</p><span class="text-zinc-600 text-xs">Intermediate+</span></div>
        </div>
        <!-- Tuesday -->
        <div class="bg-black p-3 space-y-2">
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">7:00am</p><p class="text-zinc-400 mt-0.5">Beginner Boxing</p><span class="text-zinc-600 text-xs">All Levels</span></div>
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">5:30pm</p><p class="text-zinc-400 mt-0.5">Cardio Boxing</p><span class="text-zinc-600 text-xs">All Levels</span></div>
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">7:00pm</p><p class="text-zinc-400 mt-0.5">Junior Boxing</p><span class="text-zinc-600 text-xs">Ages 8–16</span></div>
        </div>
        <!-- Wednesday -->
        <div class="bg-black p-3 space-y-2">
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">6:00am</p><p class="text-zinc-400 mt-0.5">Cardio Boxing</p><span class="text-zinc-600 text-xs">All Levels</span></div>
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">12:00pm</p><p class="text-zinc-400 mt-0.5">Open Gym</p><span class="text-zinc-600 text-xs">Members</span></div>
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">6:30pm</p><p class="text-zinc-400 mt-0.5">Beginner Boxing</p><span class="text-zinc-600 text-xs">All Levels</span></div>
        </div>
        <!-- Thursday -->
        <div class="bg-black p-3 space-y-2">
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">7:00am</p><p class="text-zinc-400 mt-0.5">Cardio Boxing</p><span class="text-zinc-600 text-xs">All Levels</span></div>
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">5:30pm</p><p class="text-zinc-400 mt-0.5">Advanced Sparring</p><span class="text-zinc-600 text-xs">Intermediate+</span></div>
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">7:00pm</p><p class="text-zinc-400 mt-0.5">Junior Boxing</p><span class="text-zinc-600 text-xs">Ages 8–16</span></div>
        </div>
        <!-- Friday -->
        <div class="bg-black p-3 space-y-2">
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">6:00am</p><p class="text-zinc-400 mt-0.5">Beginner Boxing</p><span class="text-zinc-600 text-xs">All Levels</span></div>
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">12:00pm</p><p class="text-zinc-400 mt-0.5">Cardio Boxing</p><span class="text-zinc-600 text-xs">All Levels</span></div>
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">6:00pm</p><p class="text-zinc-400 mt-0.5">Open Gym</p><span class="text-zinc-600 text-xs">Members</span></div>
        </div>
        <!-- Saturday -->
        <div class="bg-black p-3 space-y-2">
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">8:00am</p><p class="text-zinc-400 mt-0.5">Cardio Boxing</p><span class="text-zinc-600 text-xs">All Levels</span></div>
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">10:00am</p><p class="text-zinc-400 mt-0.5">Beginner Boxing</p><span class="text-zinc-600 text-xs">All Levels</span></div>
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">12:00pm</p><p class="text-zinc-400 mt-0.5">Junior Boxing</p><span class="text-zinc-600 text-xs">Ages 8–16</span></div>
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">2:00pm</p><p class="text-zinc-400 mt-0.5">Advanced Sparring</p><span class="text-zinc-600 text-xs">Intermediate+</span></div>
        </div>
        <!-- Sunday -->
        <div class="bg-black p-3 space-y-2">
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">9:00am</p><p class="text-zinc-400 mt-0.5">Cardio Boxing</p><span class="text-zinc-600 text-xs">All Levels</span></div>
          <div class="bg-zinc-900 border border-zinc-800 p-2"><p class="font-bold text-white">11:00am</p><p class="text-zinc-400 mt-0.5">Open Gym</p><span class="text-zinc-600 text-xs">Members</span></div>
        </div>

      </div>
    </section>

    <!-- ── MOBILE ACCORDION ───────────────────────────────────────────────── -->
    <section class="md:hidden max-w-7xl mx-auto px-4 py-10 space-y-2">

      <!-- Monday -->
      <div>
        <button class="day-toggle w-full flex items-center justify-between bg-zinc-900 border border-zinc-800 px-4 py-4 text-left" data-target="day-mon">
          <span class="font-black text-sm uppercase tracking-widest">Monday</span>
          <svg class="w-4 h-4 text-zinc-500 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div id="day-mon" class="day-panel hidden bg-black border border-t-0 border-zinc-800 divide-y divide-zinc-800">
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">6:00am — Cardio Boxing</span><span class="text-zinc-500 text-xs">All Levels</span></div>
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">12:00pm — Beginner Boxing</span><span class="text-zinc-500 text-xs">All Levels</span></div>
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">6:00pm — Advanced Sparring</span><span class="text-zinc-500 text-xs">Intermediate+</span></div>
        </div>
      </div>

      <!-- Tuesday -->
      <div>
        <button class="day-toggle w-full flex items-center justify-between bg-zinc-900 border border-zinc-800 px-4 py-4 text-left" data-target="day-tue">
          <span class="font-black text-sm uppercase tracking-widest">Tuesday</span>
          <svg class="w-4 h-4 text-zinc-500 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div id="day-tue" class="day-panel hidden bg-black border border-t-0 border-zinc-800 divide-y divide-zinc-800">
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">7:00am — Beginner Boxing</span><span class="text-zinc-500 text-xs">All Levels</span></div>
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">5:30pm — Cardio Boxing</span><span class="text-zinc-500 text-xs">All Levels</span></div>
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">7:00pm — Junior Boxing</span><span class="text-zinc-500 text-xs">Ages 8–16</span></div>
        </div>
      </div>

      <!-- Wednesday -->
      <div>
        <button class="day-toggle w-full flex items-center justify-between bg-zinc-900 border border-zinc-800 px-4 py-4 text-left" data-target="day-wed">
          <span class="font-black text-sm uppercase tracking-widest">Wednesday</span>
          <svg class="w-4 h-4 text-zinc-500 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div id="day-wed" class="day-panel hidden bg-black border border-t-0 border-zinc-800 divide-y divide-zinc-800">
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">6:00am — Cardio Boxing</span><span class="text-zinc-500 text-xs">All Levels</span></div>
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">12:00pm — Open Gym</span><span class="text-zinc-500 text-xs">Members</span></div>
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">6:30pm — Beginner Boxing</span><span class="text-zinc-500 text-xs">All Levels</span></div>
        </div>
      </div>

      <!-- Thursday -->
      <div>
        <button class="day-toggle w-full flex items-center justify-between bg-zinc-900 border border-zinc-800 px-4 py-4 text-left" data-target="day-thu">
          <span class="font-black text-sm uppercase tracking-widest">Thursday</span>
          <svg class="w-4 h-4 text-zinc-500 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div id="day-thu" class="day-panel hidden bg-black border border-t-0 border-zinc-800 divide-y divide-zinc-800">
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">7:00am — Cardio Boxing</span><span class="text-zinc-500 text-xs">All Levels</span></div>
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">5:30pm — Advanced Sparring</span><span class="text-zinc-500 text-xs">Intermediate+</span></div>
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">7:00pm — Junior Boxing</span><span class="text-zinc-500 text-xs">Ages 8–16</span></div>
        </div>
      </div>

      <!-- Friday -->
      <div>
        <button class="day-toggle w-full flex items-center justify-between bg-zinc-900 border border-zinc-800 px-4 py-4 text-left" data-target="day-fri">
          <span class="font-black text-sm uppercase tracking-widest">Friday</span>
          <svg class="w-4 h-4 text-zinc-500 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div id="day-fri" class="day-panel hidden bg-black border border-t-0 border-zinc-800 divide-y divide-zinc-800">
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">6:00am — Beginner Boxing</span><span class="text-zinc-500 text-xs">All Levels</span></div>
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">12:00pm — Cardio Boxing</span><span class="text-zinc-500 text-xs">All Levels</span></div>
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">6:00pm — Open Gym</span><span class="text-zinc-500 text-xs">Members</span></div>
        </div>
      </div>

      <!-- Saturday -->
      <div>
        <button class="day-toggle w-full flex items-center justify-between bg-zinc-900 border border-zinc-800 px-4 py-4 text-left" data-target="day-sat">
          <span class="font-black text-sm uppercase tracking-widest">Saturday</span>
          <svg class="w-4 h-4 text-zinc-500 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div id="day-sat" class="day-panel hidden bg-black border border-t-0 border-zinc-800 divide-y divide-zinc-800">
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">8:00am — Cardio Boxing</span><span class="text-zinc-500 text-xs">All Levels</span></div>
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">10:00am — Beginner Boxing</span><span class="text-zinc-500 text-xs">All Levels</span></div>
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">12:00pm — Junior Boxing</span><span class="text-zinc-500 text-xs">Ages 8–16</span></div>
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">2:00pm — Advanced Sparring</span><span class="text-zinc-500 text-xs">Intermediate+</span></div>
        </div>
      </div>

      <!-- Sunday -->
      <div>
        <button class="day-toggle w-full flex items-center justify-between bg-zinc-900 border border-zinc-800 px-4 py-4 text-left" data-target="day-sun">
          <span class="font-black text-sm uppercase tracking-widest">Sunday</span>
          <svg class="w-4 h-4 text-zinc-500 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div id="day-sun" class="day-panel hidden bg-black border border-t-0 border-zinc-800 divide-y divide-zinc-800">
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">9:00am — Cardio Boxing</span><span class="text-zinc-500 text-xs">All Levels</span></div>
          <div class="px-4 py-3 flex justify-between text-sm"><span class="font-semibold">11:00am — Open Gym</span><span class="text-zinc-500 text-xs">Members</span></div>
        </div>
      </div>

    </section>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <section class="bg-zinc-900 border-t border-zinc-800 py-16 text-center px-4">
      <p class="text-zinc-500 text-xs tracking-widest uppercase mb-4">Ready to train?</p>
      <h2 class="text-3xl font-black uppercase tracking-tight mb-6">Book Your Spot</h2>
      <a href="#booking" class="inline-block bg-white text-black font-black text-xs tracking-widest uppercase px-10 py-4 hover:bg-zinc-200 transition-colors">
        Book a Class
      </a>
    </section>

  </main>

  <div id="site-footer"></div>
  <script src="assets/js/components.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Open schedule.html in browser — verify desktop grid shows, resize to mobile to verify accordion renders. Click a day header to confirm it expands.**

- [ ] **Step 4: Commit**

```bash
git add schedule.html
git commit -m "feat: schedule page — desktop grid + mobile accordion"
```

---

## Task 10: Coaches Page (`coaches.html`)

**Files:**
- Create: `coaches.html`

- [ ] **Step 1: Define acceptance criteria**

`coaches.html` must contain:
- [ ] Page hero
- [ ] 4 coach cards in a 2×2 grid
- [ ] Each card: portrait image (picsum, portrait crop), name, role/specialty, short bio
- [ ] "Train with us" CTA section at bottom

- [ ] **Step 2: Create coaches.html**

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Coaches | Underdog Boxing Gym</title>
  <meta name="description" content="Meet the coaches at Underdog Boxing Gym — experienced trainers for all levels.">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = { theme: { extend: { fontFamily: { sans: ['Inter','system-ui','sans-serif'] } } } }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/custom.css">
</head>
<body class="bg-black text-white font-sans antialiased">

  <div id="site-nav"></div>

  <main class="page-content">

    <!-- ── PAGE HERO ────────────────────────────────────────────────────── -->
    <section class="relative py-24 overflow-hidden"
             style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.97)), url('https://picsum.photos/seed/coacheshero/1600/600'); background-size: cover; background-position: center top;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-zinc-500 text-xs tracking-widest uppercase mb-3">The team</p>
        <h1 class="text-5xl sm:text-6xl font-black uppercase tracking-tight">Our Coaches</h1>
        <p class="text-zinc-400 text-base mt-4 max-w-xl leading-relaxed">
          Every coach at Underdog is here because they love the sport and love teaching it. No egos. Just results.
        </p>
      </div>
    </section>

    <!-- ── COACH CARDS ────────────────────────────────────────────────────── -->
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">

        <!-- Coach 1 -->
        <div class="bg-zinc-900 border border-zinc-800 overflow-hidden">
          <img src="https://picsum.photos/seed/coach1/600/500" alt="Head Coach placeholder"
               class="w-full h-64 object-cover object-top grayscale">
          <div class="p-6">
            <p class="text-zinc-500 text-xs tracking-widest uppercase font-semibold mb-1">Head Coach</p>
            <h3 class="text-2xl font-black uppercase tracking-tight mb-1">[Coach Name]</h3>
            <p class="text-zinc-500 text-xs tracking-widest mb-4">Amateur Champion · 15 years coaching</p>
            <p class="text-zinc-400 text-sm leading-relaxed">
              [Coach Name] has been boxing since the age of twelve and coaching for over fifteen years. Known for
              an emphasis on fundamentals and footwork, they bring patience and precision to every session.
              Specialists in beginner development and fight preparation.
            </p>
          </div>
        </div>

        <!-- Coach 2 -->
        <div class="bg-zinc-900 border border-zinc-800 overflow-hidden">
          <img src="https://picsum.photos/seed/coach2/600/500" alt="Strength Coach placeholder"
               class="w-full h-64 object-cover object-top grayscale">
          <div class="p-6">
            <p class="text-zinc-500 text-xs tracking-widest uppercase font-semibold mb-1">Strength & Conditioning</p>
            <h3 class="text-2xl font-black uppercase tracking-tight mb-1">[Coach Name]</h3>
            <p class="text-zinc-500 text-xs tracking-widest mb-4">Certified S&C Specialist · 8 years coaching</p>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Bridging the gap between the gym floor and the ring, [Coach Name] designs conditioning programmes
              that build the endurance and power every boxer needs — whether you're fighting or just trying to
              survive three rounds on the bag.
            </p>
          </div>
        </div>

        <!-- Coach 3 -->
        <div class="bg-zinc-900 border border-zinc-800 overflow-hidden">
          <img src="https://picsum.photos/seed/coach3/600/500" alt="Junior Coach placeholder"
               class="w-full h-64 object-cover object-top grayscale">
          <div class="p-6">
            <p class="text-zinc-500 text-xs tracking-widest uppercase font-semibold mb-1">Junior Programme Coach</p>
            <h3 class="text-2xl font-black uppercase tracking-tight mb-1">[Coach Name]</h3>
            <p class="text-zinc-500 text-xs tracking-widest mb-4">Youth specialist · DBS Checked</p>
            <p class="text-zinc-400 text-sm leading-relaxed">
              [Coach Name] leads all junior classes with an approach built on discipline, fun, and confidence-building.
              A background in youth sport and a DBS-checked record make them the perfect guide for our youngest members.
            </p>
          </div>
        </div>

        <!-- Coach 4 -->
        <div class="bg-zinc-900 border border-zinc-800 overflow-hidden">
          <img src="https://picsum.photos/seed/coach4/600/500" alt="Sparring Coach placeholder"
               class="w-full h-64 object-cover object-top grayscale">
          <div class="p-6">
            <p class="text-zinc-500 text-xs tracking-widest uppercase font-semibold mb-1">Sparring & Advanced Coach</p>
            <h3 class="text-2xl font-black uppercase tracking-tight mb-1">[Coach Name]</h3>
            <p class="text-zinc-500 text-xs tracking-widest mb-4">Pro record: 12–3 · 10 years coaching</p>
            <p class="text-zinc-400 text-sm leading-relaxed">
              With a professional boxing record and a decade of coaching experience, [Coach Name] runs our advanced
              sparring sessions with an iron-calm intensity. If you're ready to fight or want to think like a fighter,
              this is your coach.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <section class="bg-zinc-900 border-t border-zinc-800 py-16 text-center px-4">
      <h2 class="text-3xl font-black uppercase tracking-tight mb-6">Train With Our Coaches</h2>
      <a href="#booking" class="inline-block bg-white text-black font-black text-xs tracking-widest uppercase px-10 py-4 hover:bg-zinc-200 transition-colors">
        Book a Class
      </a>
    </section>

  </main>

  <div id="site-footer"></div>
  <script src="assets/js/components.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Open coaches.html in browser, verify 4 grayscale portrait cards render in a 2×2 grid**

- [ ] **Step 4: Commit**

```bash
git add coaches.html
git commit -m "feat: coaches page — 4 coach profile cards with grayscale portraits"
```

---

## Task 11: Gallery Page (`gallery.html`)

**Files:**
- Create: `gallery.html`

- [ ] **Step 1: Define acceptance criteria**

`gallery.html` must contain:
- [ ] Page hero
- [ ] 12 images in a responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- [ ] Each image has a hover overlay that darkens with a white "+" icon visible
- [ ] All 12 images load (picsum with unique seeds)

- [ ] **Step 2: Create gallery.html**

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gallery | Underdog Boxing Gym</title>
  <meta name="description" content="Photos from Underdog Boxing Gym — training, classes, and community.">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = { theme: { extend: { fontFamily: { sans: ['Inter','system-ui','sans-serif'] } } } }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/custom.css">
</head>
<body class="bg-black text-white font-sans antialiased">

  <div id="site-nav"></div>

  <main class="page-content">

    <!-- ── PAGE HERO ────────────────────────────────────────────────────── -->
    <section class="py-24 border-b border-zinc-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-zinc-500 text-xs tracking-widest uppercase mb-3">The gym in action</p>
        <h1 class="text-5xl sm:text-6xl font-black uppercase tracking-tight">Gallery</h1>
      </div>
    </section>

    <!-- ── PHOTO GRID ─────────────────────────────────────────────────────── -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

        <!-- 12 gallery images with hover overlay -->
        <div class="group relative overflow-hidden aspect-square">
          <img src="https://picsum.photos/seed/gym1/600/600" alt="Gym photo 1" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
            <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          </div>
        </div>

        <div class="group relative overflow-hidden aspect-square">
          <img src="https://picsum.photos/seed/gym2/600/600" alt="Gym photo 2" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
            <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          </div>
        </div>

        <div class="group relative overflow-hidden aspect-square">
          <img src="https://picsum.photos/seed/gym3/600/600" alt="Gym photo 3" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
            <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          </div>
        </div>

        <div class="group relative overflow-hidden aspect-square">
          <img src="https://picsum.photos/seed/gym4/600/600" alt="Gym photo 4" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
            <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          </div>
        </div>

        <div class="group relative overflow-hidden aspect-square">
          <img src="https://picsum.photos/seed/gym5/600/600" alt="Gym photo 5" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
            <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          </div>
        </div>

        <div class="group relative overflow-hidden aspect-square">
          <img src="https://picsum.photos/seed/gym6/600/600" alt="Gym photo 6" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
            <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          </div>
        </div>

        <div class="group relative overflow-hidden aspect-square">
          <img src="https://picsum.photos/seed/gym7/600/600" alt="Gym photo 7" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
            <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          </div>
        </div>

        <div class="group relative overflow-hidden aspect-square">
          <img src="https://picsum.photos/seed/gym8/600/600" alt="Gym photo 8" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
            <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          </div>
        </div>

        <div class="group relative overflow-hidden aspect-square">
          <img src="https://picsum.photos/seed/gym9/600/600" alt="Gym photo 9" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
            <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          </div>
        </div>

        <div class="group relative overflow-hidden aspect-square">
          <img src="https://picsum.photos/seed/gym10/600/600" alt="Gym photo 10" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
            <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          </div>
        </div>

        <div class="group relative overflow-hidden aspect-square">
          <img src="https://picsum.photos/seed/gym11/600/600" alt="Gym photo 11" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
            <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          </div>
        </div>

        <div class="group relative overflow-hidden aspect-square">
          <img src="https://picsum.photos/seed/gym12/600/600" alt="Gym photo 12" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
            <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          </div>
        </div>

      </div>
    </section>

  </main>

  <div id="site-footer"></div>
  <script src="assets/js/components.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Open gallery.html, verify 12 images render in 3-column grid. Hover an image to confirm dark overlay + icon appears.**

- [ ] **Step 4: Commit**

```bash
git add gallery.html
git commit -m "feat: gallery page — 12-image grid with hover overlays"
```

---

## Task 12: Contact Page (`contact.html`)

**Files:**
- Create: `contact.html`

- [ ] **Step 1: Define acceptance criteria**

`contact.html` must contain:
- [ ] Page hero
- [ ] Two-column section: left = contact details, right = Google Maps placeholder (grey box)
- [ ] Contact form below: Name, Email, Message fields, Send button
- [ ] On form submit: form hides, thank-you message with id `thank-you` appears
- [ ] Form has id `contact-form`, thank-you div has id `thank-you` (required by main.js)

- [ ] **Step 2: Create contact.html**

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact | Underdog Boxing Gym</title>
  <meta name="description" content="Get in touch with Underdog Boxing Gym — location, hours, and contact form.">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = { theme: { extend: { fontFamily: { sans: ['Inter','system-ui','sans-serif'] } } } }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/custom.css">
</head>
<body class="bg-black text-white font-sans antialiased">

  <div id="site-nav"></div>

  <main class="page-content">

    <!-- ── PAGE HERO ────────────────────────────────────────────────────── -->
    <section class="py-24 border-b border-zinc-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-zinc-500 text-xs tracking-widest uppercase mb-3">Come find us</p>
        <h1 class="text-5xl sm:text-6xl font-black uppercase tracking-tight">Contact</h1>
      </div>
    </section>

    <!-- ── CONTACT INFO + MAP ─────────────────────────────────────────────── -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <!-- Contact details -->
        <div>
          <h2 class="text-2xl font-black uppercase tracking-tight mb-8">Find Us</h2>
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="w-10 h-10 border border-zinc-700 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <p class="text-xs text-zinc-500 tracking-widest uppercase font-semibold mb-1">Address</p>
                <p class="text-zinc-300 text-sm leading-relaxed">123 Placeholder Street<br>Your City, State 00000</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-10 h-10 border border-zinc-700 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <div>
                <p class="text-xs text-zinc-500 tracking-widest uppercase font-semibold mb-1">Phone</p>
                <p class="text-zinc-300 text-sm">(555) 000-0000</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-10 h-10 border border-zinc-700 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <p class="text-xs text-zinc-500 tracking-widest uppercase font-semibold mb-1">Email</p>
                <p class="text-zinc-300 text-sm">info@underdogboxing.com</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-10 h-10 border border-zinc-700 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <p class="text-xs text-zinc-500 tracking-widest uppercase font-semibold mb-1">Hours</p>
                <div class="text-zinc-300 text-sm space-y-1">
                  <p>Mon – Fri: 6:00am – 9:00pm</p>
                  <p>Sat – Sun: 8:00am – 6:00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Map placeholder -->
        <div class="bg-zinc-900 border border-zinc-800 flex items-center justify-center min-h-64 lg:min-h-full">
          <div class="text-center">
            <svg class="w-12 h-12 text-zinc-700 mx-auto mb-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
            <p class="text-zinc-600 text-sm">Google Maps embed</p>
            <p class="text-zinc-700 text-xs mt-1">Replace with &lt;iframe&gt; from Google Maps</p>
          </div>
        </div>

      </div>
    </section>

    <!-- ── CONTACT FORM ────────────────────────────────────────────────────── -->
    <section class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <h2 class="text-2xl font-black uppercase tracking-tight mb-8">Send a Message</h2>

      <form id="contact-form" class="space-y-5" novalidate>
        <div>
          <label for="name" class="block text-xs text-zinc-500 tracking-widest uppercase font-semibold mb-2">Name</label>
          <input type="text" id="name" name="name" required placeholder="Your full name"
                 class="w-full bg-zinc-900 border border-zinc-700 text-white text-sm px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors">
        </div>
        <div>
          <label for="email" class="block text-xs text-zinc-500 tracking-widest uppercase font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" required placeholder="your@email.com"
                 class="w-full bg-zinc-900 border border-zinc-700 text-white text-sm px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors">
        </div>
        <div>
          <label for="message" class="block text-xs text-zinc-500 tracking-widest uppercase font-semibold mb-2">Message</label>
          <textarea id="message" name="message" required rows="5" placeholder="What would you like to know?"
                    class="w-full bg-zinc-900 border border-zinc-700 text-white text-sm px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors resize-none"></textarea>
        </div>
        <button type="submit"
                class="w-full bg-white text-black font-black text-xs tracking-widest uppercase py-4 hover:bg-zinc-200 transition-colors">
          Send Message
        </button>
      </form>

      <!-- Thank-you message (hidden until form submit) -->
      <div id="thank-you" class="hidden text-center py-16">
        <svg class="w-12 h-12 text-white mx-auto mb-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <h3 class="text-2xl font-black uppercase tracking-tight mb-2">Message Sent</h3>
        <p class="text-zinc-400 text-sm">We'll get back to you as soon as possible. See you in the ring.</p>
      </div>
    </section>

  </main>

  <div id="site-footer"></div>
  <script src="assets/js/components.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Open contact.html, verify contact details render, map placeholder shows, form submits and hides itself showing thank-you message.**

- [ ] **Step 4: Commit**

```bash
git add contact.html
git commit -m "feat: contact page — details, map placeholder, form with thank-you state"
```

---

## Task 13: QA Report

**Files:**
- Modify: `tests/report.md`

**Agent:** QA Engineer

- [ ] **Step 1: Open every page in a browser and complete this checklist**

For each of the 8 pages (index, about, classes, pricing, schedule, coaches, gallery, contact):

```
Page: ___________

[ ] Nav renders (logo, links, Book a Class CTA)
[ ] Footer renders (links, social icons, copyright)
[ ] Page hero heading is visible
[ ] Images load (no broken images)
[ ] Responsive: resize to mobile width (< 640px) — nav collapses to hamburger
[ ] Hamburger opens/closes mobile drawer correctly
[ ] All internal links navigate to correct page
[ ] All "Book a Class"/"Book Now" buttons link to #booking (no 404)
[ ] No console errors (check browser DevTools)
```

Additional checks:
```
[ ] Contact form: fills in Name, Email, Message and submits — thank-you message appears
[ ] Schedule (mobile): day accordion opens/closes correctly, only one open at a time
[ ] Gallery: hover overlay appears on photo hover
[ ] Pricing: Monthly card is visually distinct (white/inverted)
[ ] Coaches: portraits are grayscale
[ ] No placeholder text like "TBD" visible on any page (only intentional placeholders like [Coach Name], $XX)
```

- [ ] **Step 2: Write report.md with findings**

Update `tests/report.md` with pass/fail results. For each failure, document:
- Page
- What failed
- What was expected

- [ ] **Step 3: Frontend agent fixes any issues reported**

For each failure in report.md: open the relevant HTML file, fix the issue, re-verify, update report.

- [ ] **Step 4: Commit final QA report**

```bash
git add tests/report.md
git commit -m "qa: site-wide review — all pages verified"
```

---

## Task 14: Build Summary Docs

**Files:**
- Modify: `docs/build-summary.md`

**Agent:** Docs

- [ ] **Step 1: Write build summary**

Update `docs/build-summary.md`:
```markdown
# Build Summary — Underdog Boxing Gym

**Completed:** [date]
**Status:** Complete

## Pages Delivered
- index.html — Home (hero, value props, classes preview, CTA strip)
- about.html — About (story, mission, values)
- classes.html — Classes (6 class cards)
- pricing.html — Pricing (3 membership tiers)
- schedule.html — Schedule (desktop grid + mobile accordion)
- coaches.html — Coaches (4 profile cards)
- gallery.html — Gallery (12 images with hover effect)
- contact.html — Contact (details, map placeholder, contact form)

## Shared Components
- assets/js/components.js — Nav and footer injected on all pages
- assets/js/main.js — Mobile menu, contact form, schedule accordion
- assets/css/custom.css — Hero texture, page-content padding

## How to Deploy
1. Copy all files to any static host (Netlify, GitHub Pages, Vercel, or raw file server)
2. No build step required
3. Open index.html in a browser to verify

## How to Update
- **Booking link:** Replace all `href="#booking"` in HTML files with the real Meeteergo/booking URL
- **Social links:** Replace `href="#"` on Facebook/Instagram icons in components.js with real profile URLs
- **Prices:** Search `$XX` across pricing.html and replace with real values
- **Coach names:** Replace `[Coach Name]` placeholders in coaches.html
- **Address/phone/email:** Update in components.js (footer) and contact.html
- **Map:** Replace the grey map placeholder in contact.html with a Google Maps `<iframe>`
- **Images:** Replace picsum.photos URLs with real gym photos from Unsplash or client-provided images

## QA Results
See tests/report.md
```

- [ ] **Step 2: Commit**

```bash
git add docs/build-summary.md
git commit -m "docs: build summary with deployment and update instructions"
```

---

## Self-Review

**Spec coverage check:**
- ✅ All 8 pages implemented (index, about, classes, pricing, schedule, coaches, gallery, contact)
- ✅ Shared nav + footer via components.js
- ✅ Tailwind CSS via CDN (no build step)
- ✅ Classic Grit color scheme (black/zinc/white) throughout
- ✅ All "Book a Class" CTAs use `href="#booking"`
- ✅ Facebook + Instagram icons in nav and footer with `href="#"`
- ✅ Mobile responsive nav with hamburger
- ✅ Schedule: desktop grid + mobile accordion
- ✅ Contact form with thank-you state (no backend)
- ✅ Placeholder images via picsum.photos (consistent seeds)
- ✅ Coach portraits grayscale
- ✅ Gallery hover effect
- ✅ Pricing: Monthly card inverted (white)
- ✅ Agent team config in .acloud/settings.local.json
- ✅ QA report and build summary
- ✅ No testimonials section (excluded per spec)
- ✅ No lightbox (excluded per spec)

**Placeholder scan:** No "TBD", no "TODO", no "implement later" found. All steps contain complete code.

**Type consistency:** No shared types/functions across tasks. Each page is self-contained HTML. `components.js` function names (`site-nav`, `site-footer`, `menu-toggle`, `mobile-menu`, `icon-open`, `icon-close`) are used consistently in both `components.js` (Task 2) and `main.js` (Task 3).
