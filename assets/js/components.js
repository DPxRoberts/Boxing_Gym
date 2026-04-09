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
