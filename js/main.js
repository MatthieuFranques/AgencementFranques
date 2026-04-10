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
  $$('[data-apropos="photo"]').forEach(el => el.src = SITE.apropos.photo); 
  const container = $('[data-apropos="textes"]');
  if (container) container.innerHTML = SITE.apropos.textes.map(t => `<p>${t}</p>`).join('');
}

function injecterExpertises() {
  const container = $('[data-expertises]');
  if (!container) return;
  container.innerHTML = SITE.expertises.map(({ categorie, label }) => `
    <div class="bg-surface p-8 rounded-xl border border-outline/10">
      <span class="manrope text-xs font-semibold text-outline tracking-wider uppercase block mb-3">${categorie}</span>
      <span class="noto-serif text-xl text-on-surface">${label}</span>
    </div>
  `).join('');
}

function injecterPortfolio() {
  const carousel = $('[data-portfolio-carousel]');
  if (!carousel) return;
  carousel.innerHTML = SITE.projets.map(({ titre, description, src, alt }) => `
    <div class="min-w-[70vw] md:min-w-[25vw] snap-center group cursor-pointer">
      <div class="relative aspect-[3/4] overflow-hidden rounded-xl mb-4">
        <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             src="${src}" alt="${alt}" />
        <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
      </div>
      <h4 class="noto-serif text-lg font-bold mb-1">${titre}</h4>
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
  const container = document.getElementById('map');
  if (!container) return;
 
  const { lat, lng, rayon, label } = SITE.carte;
 
  const map = L.map(container, { scrollWheelZoom: false })
    .setView([lat, lng], 9);
 
  L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
        '© <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }
  ).addTo(map);
 
  L.circle([lat, lng], {
    radius:      rayon,
    color:       '#674628',
    fillColor:   '#825e3e',
    fillOpacity: 0.12,
    weight:      2,
    dashArray:   '6 4',
  }).addTo(map);
 
  const icon = L.divIcon({
    html: `<div style="
      width: 14px;
      height: 14px;
      background: #674628;
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 1px 4px rgba(0,0,0,0.3);
    "></div>`,
    iconSize:   [14, 14],
    iconAnchor: [7, 7],
    className:  '',
  });
 
  L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(`<strong>${label}</strong>`)
    .openPopup();
}

function injecterLegal() {
  $$('[data-legal="proprietaire"]').forEach(el => el.textContent = SITE.legal.proprietaire);
  $$('[data-legal="siret-label"]').forEach(el => el.textContent = "SIRET : " + SITE.legal.siret);
  $$('[data-legal="adresse"]').forEach(el => el.textContent = SITE.legal.adresseLegale);
  $$('[data-legal="hebergeur"]').forEach(el => el.textContent = SITE.legal.hebergeur);
  // Email dans les mentions
  $$('[data-contact-text="email"]').forEach(el => {
    el.textContent = SITE.email;
    el.href = SITE.emailHref;
  });
}

// ── Interactions ──────────────────────────────────────
 
function initNavbar() {
  const btn       = $('#mobile-menu-btn');
  const mobileNav = $('#mobile-nav');
  if (!btn || !mobileNav) return;

  const lines = btn.querySelectorAll('.burger-line');

  function closeMenu() {
    mobileNav.style.display  = 'none';
    btn.setAttribute('aria-expanded', 'false');
    lines[0].style.transform = '';
    lines[1].style.opacity   = '';
    lines[2].style.transform = '';
  }

  function openMenu() {
    mobileNav.style.display  = 'flex';
    btn.setAttribute('aria-expanded', 'true');
    lines[0].style.transform = 'translateY(8px) rotate(45deg)';
    lines[1].style.opacity   = '0';
    lines[2].style.transform = 'translateY(-8px) rotate(-45deg)';
  }

  btn.addEventListener('click', () => {
    btn.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Rétrécissement au scroll (desktop uniquement)
  const navbar      = $('#navbar');
  const navbarInner = $('#navbar-inner');
  const navbarLogo  = $('#navbar-logo');

  const isMobile = () => window.innerWidth < 768;

  window.addEventListener('scroll', () => {
    if (isMobile()) return;

    if (window.scrollY > 60) {
      navbar?.classList.add('shadow-sm');
      navbarInner?.classList.replace('py-4', 'py-2');
      navbarLogo?.classList.replace('h-10', 'h-8');
      navbarLogo?.classList.replace('lg:h-16', 'lg:h-10');
    } else {
      navbar?.classList.remove('shadow-sm');
      navbarInner?.classList.replace('py-2', 'py-4');
      navbarLogo?.classList.replace('h-8', 'h-10');
      navbarLogo?.classList.replace('lg:h-10', 'lg:h-16');
    }
  });
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
  initNavbar();
  injecterLegal();
});