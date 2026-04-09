document.addEventListener('DOMContentLoaded', function () {

  // ── MOBILE MENU TOGGLE ───────────────────────────────────────────────────
  // Elements are injected by components.js which also runs on DOMContentLoaded.
  // Use setTimeout(0) to ensure components.js has run first.
  setTimeout(function () {
    const toggle    = document.getElementById('menu-toggle');
    const menu      = document.getElementById('mobile-menu');
    const iconOpen  = document.getElementById('icon-open');
    const iconClose = document.getElementById('icon-close');

    if (toggle && menu && iconOpen && iconClose) {
      toggle.addEventListener('click', function () {
        const isHidden = menu.classList.contains('hidden');

        menu.classList.toggle('hidden', !isHidden);
        iconOpen.classList.toggle('hidden',  isHidden);
        iconClose.classList.toggle('hidden', !isHidden);
        toggle.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
        menu.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
      });
    }
  }, 0);

  // ── CONTACT FORM ─────────────────────────────────────────────────────────
  const form     = document.getElementById('contact-form');
  const thankYou = document.getElementById('thank-you');

  if (form && thankYou) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.reset();
      form.classList.add('hidden');
      thankYou.classList.remove('hidden');
    });
  }

  // ── SCHEDULE ACCORDION (mobile) ──────────────────────────────────────────
  document.querySelectorAll('.day-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetId = btn.getAttribute('data-target');
      const panel    = document.getElementById(targetId);
      if (!panel) return;

      const isOpen = !panel.classList.contains('hidden');

      // Close all panels and reset all chevrons
      document.querySelectorAll('.day-panel').forEach(function (p) {
        p.classList.add('hidden');
      });
      document.querySelectorAll('.day-toggle').forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
        b.querySelector('svg').classList.remove('rotate-180');
      });

      // If clicked panel was closed, open it
      if (!isOpen) {
        panel.classList.remove('hidden');
        btn.setAttribute('aria-expanded', 'true');
        const chevron = btn.querySelector('svg');
        if (chevron) chevron.classList.add('rotate-180');
      }
    });
  });

});
