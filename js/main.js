/* ===================================================
   LUMBER & GRAIN — Rendu dynamique + interactions
   Dépend de : js/data.js (chargé avant ce fichier)
   =================================================== */

// ── Helpers ──────────────────────────────────────────

const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function setHTML(sel, value) {
  const el = $(sel); if (el) el.innerHTML = value;
}

// ── Injection des données ─────────────────────────────

function injecterIdentite() {
  $$('[data-site="nom"]').forEach(el => el.textContent = SITE.nom);
  $$('[data-site="slogan"]').forEach(el => el.textContent = SITE.slogan);
  $$('[data-site="baseline"]').forEach(el => el.textContent = SITE.baseline);
  $$('[data-site="adresse"]').forEach(el => el.textContent = SITE.adresse);
  $$('[data-site="copyright"]').forEach(el => el.textContent = SITE.copyright);
}

function injecterContact() {
  $$('[data-contact="telephone"]').forEach(el => el.textContent = SITE.telephone);
  $$('[data-contact="telephone-href"]').forEach(el => el.href = SITE.telephoneHref);
  $$('[data-contact="email"]').forEach(el => el.textContent = SITE.email);
  $$('[data-contact="email-href"]').forEach(el => el.href = SITE.emailHref);
  $$('[data-contact="instagram"]').forEach(el => el.href = SITE.instagram);
}

function injecterAPropos() {
  setHTML('[data-apropos="titre"]', SITE.apropos.titre);
  const container = $('[data-apropos="textes"]');
  if (container) container.innerHTML = SITE.apropos.textes.map(t => `<p>${t}</p>`).join('');
}

function injecterExpertises() {
  const container = $('[data-expertises]');
  if (!container) return;
  container.innerHTML = SITE.expertises.map(({ categorie, label }) => `
    <div class="flex flex-col gap-2">
      <span class="manrope text-xs font-semibold text-outline tracking-wider uppercase">${categorie}</span>
      <span class="noto-serif text-2xl text-on-surface">${label}</span>
    </div>
  `).join('');
}

function injecterPortfolio() {
  const carousel = $('[data-portfolio-carousel]');
  if (!carousel) return;
  carousel.innerHTML = SITE.projets.map(({ titre, description, src, alt }) => `
    <div class="min-w-[85vw] md:min-w-[45vw] snap-center group cursor-pointer">
      <div class="relative aspect-[4/5] overflow-hidden rounded-xl mb-6">
        <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             src="${src}" alt="${alt}" />
        <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
      </div>
      <h4 class="noto-serif text-2xl font-bold mb-2">${titre}</h4>
      <p class="manrope text-sm text-on-surface-variant">${description}</p>
    </div>
  `).join('');
}

// ── Interactions ──────────────────────────────────────

function initMenuMobile() {
  const btn = $('#mobile-menu-btn');
  const nav = $('#mobile-nav');
  btn?.addEventListener('click', () => nav?.classList.toggle('hidden'));
}

function initCarousel() {
  const carousel = $('[data-portfolio-carousel]');
  const SCROLL = 600;
  $('[data-carousel="prev"]')?.addEventListener('click', () => carousel?.scrollBy({ left: -SCROLL, behavior: 'smooth' }));
  $('[data-carousel="next"]')?.addEventListener('click', () => carousel?.scrollBy({ left:  SCROLL, behavior: 'smooth' }));
}

function initCarte() {
  if (!document.getElementById('map')) return;

  const map = L.map('map', { scrollWheelZoom: false })
    .setView([SITE.carte.lat, SITE.carte.lng], 9);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  L.circle([SITE.carte.lat, SITE.carte.lng], {
    radius:      SITE.carte.rayon,
    color:       '#674628',
    fillColor:   '#825e3e',
    fillOpacity: 0.12,
    weight:      2,
    dashArray:   '6 4'
  }).addTo(map);

  const icon = L.divIcon({
    html: '<div style="width:14px;height:14px;background:#674628;border:2px solid white;border-radius:50%;"></div>',
    iconSize: [14,14], iconAnchor: [7,7], className: ''
  });

  L.marker([SITE.carte.lat, SITE.carte.lng], { icon })
    .addTo(map)
    .bindPopup(`<strong>${SITE.carte.label}</strong>`)
    .openPopup();
}


// ── Init ──────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  injecterIdentite();
  injecterContact();
  injecterAPropos();
  injecterExpertises();
  injecterPortfolio();
  initMenuMobile();
  initCarousel();
  initCarte();
});