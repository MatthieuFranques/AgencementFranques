/* ===================================================
   LUMBER & GRAIN — Interactions
   =================================================== */

// --- Mobile menu toggle ---
const menuBtn   = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');

menuBtn?.addEventListener('click', () => {
  mobileNav?.classList.toggle('hidden');
});

// --- Carousel (flèches) ---
const carousel  = document.getElementById('portfolio-carousel');
const btnPrev   = document.getElementById('carousel-prev');
const btnNext   = document.getElementById('carousel-next');

const SCROLL_AMOUNT = 600; // px

btnPrev?.addEventListener('click', () => {
  carousel?.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
});

btnNext?.addEventListener('click', () => {
  carousel?.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
});
