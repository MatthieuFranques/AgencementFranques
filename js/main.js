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
  $$('[data-apropos="photo"]').forEach(el => { el.src = SITE.apropos.photo; el.loading = 'lazy'; });
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

function carteProjet({ titre, description, src, alt, type }, index) {
  return `
    <article class="projet-carte snap-center shrink-0 w-full md:w-[31%] group" data-type="${type}" data-index="${index}">
      <button type="button" data-lb-open class="block w-full text-left cursor-zoom-in">
        <div class="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl mb-4 bg-surface-container">
          <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               src="${src}" alt="${alt}" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 pointer-events-none"></div>
          <span class="absolute top-3 left-3 manrope text-[11px] font-semibold tracking-wide uppercase bg-surface/90 text-on-surface px-3 py-1 rounded-full backdrop-blur-sm">${type}</span>
          <svg viewBox="0 0 24 24" fill="currentColor" class="absolute bottom-3 right-3 w-6 h-6 text-white/90 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm.5-7H9v2H7v1h2v2h1v-2h2V9h-2z"/></svg>
        </div>
        <h4 class="noto-serif text-lg font-bold mb-1">${titre}</h4>
        <p class="manrope text-sm text-on-surface-variant">${description}</p>
      </button>
    </article>
  `;
}

function injecterPortfolio() {
  const carousel  = $('[data-portfolio-carousel]');
  const filtresEl = $('[data-portfolio-filtres]');
  const dotsEl    = $('[data-portfolio-dots]');
  if (!carousel) return;

  const ordre    = SITE.portfolioCategories || [];
  const presents = ordre.filter(t => SITE.projets.some(p => p.type === t));
  const filtres  = ['Tout', ...presents];

  let filtreActif = 'Tout';
  let liste = [];

  // ── Boutons de filtre ──────────────────────
  const cBase    = 'filtre-btn shrink-0 snap-start manrope text-sm font-semibold px-4 py-2 rounded-full border transition-colors';
  const cActif   = 'bg-on-surface text-surface border-on-surface';
  const cInactif = 'text-on-surface-variant border-outline/20 hover:bg-surface-container';

  if (filtresEl) {
    filtresEl.innerHTML = filtres.map((f, i) => `
      <button type="button" data-filtre="${f}"
              class="${cBase} ${i === 0 ? cActif : cInactif}">${f}</button>
    `).join('');
    filtresEl.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-filtre]');
      if (!btn) return;
      filtreActif = btn.dataset.filtre;
      filtresEl.querySelectorAll('[data-filtre]').forEach(b =>
        b.className = `${cBase} ${b === btn ? cActif : cInactif}`);
      rendre();
    });
  }

  // ── Rendu des cartes ───────────────────────
  function rendre() {
    liste = SITE.projets.filter(p => filtreActif === 'Tout' || p.type === filtreActif);
    carousel.innerHTML = liste.map(carteProjet).join('');
    construireDots(liste.length);
    carousel.scrollTo({ left: 0, behavior: 'auto' });
    majDots(0);
  }

  // ── Points de pagination (fenêtre glissante, style iOS) ──
  function construireDots(n) {
    if (!dotsEl) return;
    dotsEl.innerHTML = n <= 1 ? '' : `
      <div class="dots-track flex gap-2 items-center transition-transform duration-300 ease-out">
        ${Array.from({ length: n }, (_, i) =>
          `<button type="button" data-dot="${i}" aria-label="Image ${i + 1}"
                   class="dot w-2 h-2 rounded-full bg-outline/30 transition-all duration-300"></button>`).join('')}
      </div>`;
  }

  function indexActif() {
    const cards = carousel.querySelectorAll('.projet-carte');
    if (!cards.length) return 0;
    const rect = carousel.getBoundingClientRect();
    const centre = rect.left + rect.width / 2;
    let best = 0, bestD = Infinity;
    cards.forEach((c, i) => {
      const r = c.getBoundingClientRect();
      const d = Math.abs(r.left + r.width / 2 - centre);
      if (d < bestD) { bestD = d; best = i; }
    });
    return best;
  }

  function majDots(active) {
    if (!dotsEl) return;
    const track = dotsEl.querySelector('.dots-track');
    if (!track) return;
    const dots = track.querySelectorAll('.dot');
    dots.forEach((d, i) => {
      d.className = `dot w-2 h-2 rounded-full transition-all duration-300 ${
        i === active ? 'bg-primary scale-150' : 'bg-outline/30'}`;
    });
    const STEP = 16; // point 8px + gap 8px
    const V = dotsEl.clientWidth;
    const trackW = dots.length * STEP - 8;
    let tx = trackW <= V
      ? (V - trackW) / 2
      : Math.min(0, Math.max(V - trackW, V / 2 - (active * STEP + 4)));
    track.style.transform = `translateX(${tx}px)`;
  }

  if (dotsEl) {
    dotsEl.addEventListener('click', (e) => {
      const dot = e.target.closest('[data-dot]');
      if (!dot) return;
      carousel.querySelectorAll('.projet-carte')[+dot.dataset.dot]
        ?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
  }

  let raf;
  carousel.addEventListener('scroll', () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => majDots(indexActif()));
  }, { passive: true });
  window.addEventListener('resize', () => majDots(indexActif()));

  // ── Flèches (desktop) ──────────────────────
  const pas = () => {
    const card = carousel.querySelector('.projet-carte');
    return card ? card.offsetWidth + 20 : carousel.clientWidth;
  };
  $('[data-carousel="prev"]')?.addEventListener('click', () =>
    carousel.scrollBy({ left: -pas(), behavior: 'smooth' }));
  $('[data-carousel="next"]')?.addEventListener('click', () =>
    carousel.scrollBy({ left: pas(), behavior: 'smooth' }));

  // ── Ouverture lightbox au tap ──────────────
  carousel.addEventListener('click', (e) => {
    const art = e.target.closest('[data-lb-open]')?.closest('.projet-carte');
    if (!art) return;
    ouvrirLightbox(liste, +art.dataset.index);
  });

  rendre();
}

// ── Lightbox plein écran ─────────────────────────────
let lbListe = [], lbIndex = 0;

function ouvrirLightbox(items, index) {
  const lb = $('[data-lightbox]');
  if (!lb) return;
  lbListe = items;
  lbIndex = index;
  rendreLightbox();
  lb.classList.remove('hidden');
  lb.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function fermerLightbox() {
  const lb = $('[data-lightbox]');
  if (!lb) return;
  lb.classList.add('hidden');
  lb.classList.remove('flex');
  document.body.style.overflow = '';
}

function lbNav(d) {
  if (!lbListe.length) return;
  lbIndex = (lbIndex + d + lbListe.length) % lbListe.length;
  rendreLightbox();
}

function rendreLightbox() {
  const p = lbListe[lbIndex];
  if (!p) return;
  const img = $('[data-lb-img]');
  if (img) { img.src = p.src; img.alt = p.alt; }
  setHTML('[data-lb-caption]',
    `<span class="noto-serif text-base md:text-lg font-bold">${p.titre}</span>` +
    `<span class="manrope text-sm text-white/60 ml-3">${lbIndex + 1} / ${lbListe.length}</span>`);
}

function initLightbox() {
  const lb = $('[data-lightbox]');
  if (!lb) return;
  $('[data-lb-close]')?.addEventListener('click', fermerLightbox);
  $('[data-lb-prev]')?.addEventListener('click', () => lbNav(-1));
  $('[data-lb-next]')?.addEventListener('click', () => lbNav(1));
  lb.addEventListener('click', (e) => { if (e.target === lb) fermerLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (lb.classList.contains('hidden')) return;
    if (e.key === 'Escape')     fermerLightbox();
    if (e.key === 'ArrowLeft')  lbNav(-1);
    if (e.key === 'ArrowRight') lbNav(1);
  });
  // Swipe tactile
  let x0 = null;
  lb.addEventListener('touchstart', (e) => { x0 = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) lbNav(dx < 0 ? 1 : -1);
    x0 = null;
  }, { passive: true });
}

// ── Interactions ──────────────────────────────────────

function initMenuMobile() {
  const btn = $('#mobile-menu-btn');
  const nav = $('#mobile-nav');
  btn?.addEventListener('click', () => nav?.classList.toggle('hidden'));
}

function renderCarte(container) {
  const { lat, lng, rayon, label } = SITE.carte;

  // Carte verrouillée (statique) : aucune interaction → pas de bug de pan/zoom
  const map = L.map(container, {
    zoomControl:     false,
    dragging:        false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom:         false,
    keyboard:        false,
    touchZoom:       false,
    tap:             false,
  }).setView([lat, lng], 9);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }
  ).addTo(map);

  const cercle = L.circle([lat, lng], {
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
    iconSize:    [14, 14],
    iconAnchor:  [7, 7],
    popupAnchor: [0, -10],
    className:   '',
  });

  // Point central Bezonnes + nom (sans popup)
  L.marker([lat, lng], { icon })
    .addTo(map)
    .bindTooltip(label, { permanent: true, direction: 'right', offset: [6, 0], className: 'ville-label ville-label--centre' });

  // Villes voisines (point + nom permanent), éditables dans data.js
  (SITE.carte.villes || []).forEach(v => {
    L.circleMarker([v.lat, v.lng], {
      radius: 3, color: '#674628', fillColor: '#674628', fillOpacity: 1, weight: 0,
    })
      .addTo(map)
      .bindTooltip(v.nom, { permanent: true, direction: 'right', offset: [4, 0], className: 'ville-label' });
  });

  // Le conteneur n'a pas toujours sa taille au 1er rendu (observer + layout PC/mobile).
  // → on recadre sur Bezonnes (centre du cercle) à chaque changement de taille.
  const recadrer = () => {
    map.invalidateSize();
    map.fitBounds(cercle.getBounds(), { padding: [24, 24] });
  };

  requestAnimationFrame(recadrer);

  if ('ResizeObserver' in window) {
    new ResizeObserver(() => recadrer()).observe(container);
  }
  window.addEventListener('resize', recadrer);
}

function initCarte() {
  const container = document.getElementById('map');
  if (!container) return;

  const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    observer.disconnect();

    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'assets/css/leaflet.css';
    document.head.appendChild(css);

    const js = document.createElement('script');
    js.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    js.onload = () => renderCarte(container);
    document.head.appendChild(js);
  }, { rootMargin: '300px' });

  observer.observe(container);
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
  initLightbox();
  initMenuMobile();
  initCarte();
  initNavbar();
  injecterLegal();
});