/* Telluride Insulation - Site JavaScript */
(function () {
  'use strict';

  // Mobile nav drawer
  var menuBtn = document.getElementById('menu-toggle');
  var drawer = document.getElementById('nav-drawer');
  var overlay = document.getElementById('nav-overlay');

  function openNav() {
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openNav);
  if (overlay) overlay.addEventListener('click', closeNav);

  // Close drawer on escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  // Close drawer links
  if (drawer) {
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
  }

  // Contact form — show loading state on submit (Netlify handles the POST)
  var form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', function () {
      var btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.disabled = true;
    });
  }

  // Call Now button in header
  var callBtn = document.getElementById('call-now-btn');
  if (callBtn) {
    callBtn.addEventListener('click', function () {
      window.location.href = 'tel:9709030768';
    });
  }
})();
