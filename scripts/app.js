import { landingContent } from './content.js';

/* ════════════════════════════════════════════════════════════
   Content injection — binds data to DOM via data-* attrs.
   ════════════════════════════════════════════════════════════ */

function setText(selector, text) {
  document.querySelectorAll(selector).forEach((el) => {
    if (text != null) el.textContent = text;
  });
}

function esc(s) {
  return String(s || '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

/* ── BRAND ─────────────────────────────────────────────────── */
function renderBrand() {
  const { brand, footer } = landingContent;
  setText('[data-brand-label]', brand.label);
  setText('[data-brand-name]', brand.name);
  setText('[data-footer-brand]', footer.brand);
  setText('[data-footer-tagline]', footer.tagline);
  setText('[data-footer-handle]', footer.handle);
  setText('[data-footer-year]', '© ' + footer.year);
  setText('[data-footer-made]', footer.made);
}

/* ── NAVIGATION ───────────────────────────────────────────── */
function renderNav() {
  const navList = document.getElementById('nav-list');
  const mobileList = document.getElementById('mobile-nav-list');
  if (!navList || !mobileList) return;

  const markup = landingContent.nav
    .map((item) => `<li><a href="${esc(item.href)}">${esc(item.label)}</a></li>`)
    .join('');
  navList.innerHTML = markup;
  mobileList.innerHTML = markup;
}

/* ── HERO ──────────────────────────────────────────────────── */
function renderHero() {
  const { hero } = landingContent;
  setText('[data-hero-kicker]', hero.kicker);
  setText('[data-hero-top]', hero.titleTop);
  setText('[data-hero-mid]', hero.titleMid);
  setText('[data-hero-bottom]', hero.titleBottom);
  setText('[data-hero-tagline]', hero.tagline);
  setText('[data-hero-subline]', hero.subline);

  const primary = document.getElementById('hero-cta-primary');
  const secondary = document.getElementById('hero-cta-secondary');
  if (primary) { primary.textContent = hero.ctaPrimary.label; primary.href = hero.ctaPrimary.href; }
  if (secondary) { secondary.textContent = hero.ctaSecondary.label; secondary.href = hero.ctaSecondary.href; }

  const floating = document.getElementById('hero-floating');
  if (floating) {
    floating.innerHTML = hero.floatingLabels
      .map((l) => `<span class="hero__floating-chip" style="transform: rotate(${l.rotate}deg)">${esc(l.label)}</span>`)
      .join('');
  }
}

/* ── MANIFESTO ────────────────────────────────────────────── */
function renderManifesto() {
  const { manifesto } = landingContent;
  setText('[data-manifesto-kicker]', manifesto.kicker);
  setText('[data-manifesto-title]', manifesto.title);

  const grid = document.getElementById('manifesto-grid');
  if (!grid) return;

  grid.innerHTML = manifesto.points.map((p) => `
    <div class="manifesto__card">
      <div class="manifesto__num">${esc(p.index)}</div>
      <h3 class="manifesto__title">${esc(p.title)}</h3>
      <p class="manifesto__text">${esc(p.text)}</p>
    </div>
  `).join('');
}

/* ── PRICE LIST STRIP ─────────────────────────────────────── */
function renderPriceStrip() {
  const { priceListStrip } = landingContent;
  setText('[data-price-kicker]', priceListStrip.kicker);
  setText('[data-price-title]', priceListStrip.title);
  setText('[data-price-description]', priceListStrip.description);

  const grid = document.getElementById('price-strip-grid');
  if (!grid) return;

  grid.innerHTML = priceListStrip.compact.map((c) => `
    <a href="#collection" class="price-chip">
      <span class="price-chip__name">${esc(c.name)}</span>
      <span class="price-chip__from">от</span>
      <span class="price-chip__price">${esc(c.from)} ₽</span>
    </a>
  `).join('');
}

/* ── COLLECTION ────────────────────────────────────────────── */
function renderCollection() {
  const { collection } = landingContent;
  setText('[data-collection-kicker]', collection.kicker);
  setText('[data-collection-title]', collection.title);
  setText('[data-collection-description]', collection.description);

  const list = document.getElementById('collection-list');
  if (!list) return;

  list.innerHTML = collection.items.map((item, idx) => {
    const reverse = idx % 2 === 1 ? ' collection__item--reverse' : '';
    const sizesMarkup = item.sizes.map((s) => {
      const isQuery = typeof s.price === 'string' && s.price.includes('запрос');
      return `
        <div class="collection__size-row">
          <span class="collection__size-label">${esc(s.label)}</span>
          <span class="collection__size-price">
            ${s.old ? `<span class="collection__size-old">${esc(s.old)} ₽</span>` : ''}
            ${esc(s.price)}${isQuery ? '' : ' ₽'}
          </span>
        </div>
      `;
    }).join('');

    const flavorsMarkup = item.flavors && item.flavors.length
      ? `<div class="collection__flavors">${
          item.flavors.map((f) => `<span class="collection__flavor">${esc(f)}</span>`).join('')
        }</div>`
      : '';

    const images = Array.isArray(item.images) ? item.images : [];
    const main = images[0];
    const behind = images[1];
    const tape = item.tapeColor || 'rgba(232, 197, 206, 0.72)';

    const galleryMarkup = main
      ? `
        <figure class="collection__gallery" style="--accent-fill: ${esc(item.accent || '#E8C5C5')}; --tape: ${esc(tape)}">
          ${behind ? `
            <div class="collection__photo collection__photo--behind" style="--tilt: ${Number(behind.tilt) || 5}deg">
              <div class="collection__photo-inner">
                <img src="${esc(behind.src)}" alt="${esc(behind.alt || '')}" loading="lazy" />
              </div>
            </div>
          ` : ''}
          <div class="collection__photo collection__photo--main" style="--tilt: ${Number(main.tilt) || -3}deg">
            <span class="collection__tape" aria-hidden="true"></span>
            <span class="collection__num">№ ${esc(item.num)}</span>
            <div class="collection__photo-inner">
              <img src="${esc(main.src)}" alt="${esc(main.alt || item.title)}" loading="lazy" />
            </div>
            ${main.caption ? `<figcaption class="collection__caption">${esc(main.caption)}</figcaption>` : ''}
          </div>
        </figure>
      `
      : `
        <figure class="collection__gallery collection__gallery--placeholder" style="--accent-fill: ${esc(item.accent || '#E8C5C5')}">
          <span class="collection__num">№ ${esc(item.num)}</span>
          <span>${esc(item.title)}</span>
        </figure>
      `;

    return `
      <article class="collection__item${reverse} reveal" id="${esc(item.id)}">
        ${galleryMarkup}
        <div class="collection__body">
          <p class="collection__category">${esc(item.category)}</p>
          <h3 class="collection__title">${esc(item.title)}</h3>
          <p class="collection__tagline">${esc(item.tagline)}</p>
          <p class="collection__description">${esc(item.description)}</p>
          <div class="collection__sizes">${sizesMarkup}</div>
          ${flavorsMarkup}
          <a class="collection__cta" href="https://t.me/tt_zefir39" target="_blank" rel="noreferrer">
            Заказать
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </article>
    `;
  }).join('');
}

/* ── PROMOS ──────────────────────────────────────────────── */
function renderPromos() {
  const { promos } = landingContent;
  if (!promos) return;
  setText('[data-promos-kicker]', promos.kicker);
  setText('[data-promos-title]', promos.title);
  setText('[data-promos-description]', promos.description);
  setText('[data-promos-signature]', promos.signature);

  const icons = {
    percent: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>',
    gift: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
    heart: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  };

  const grid = document.getElementById('promos-grid');
  if (grid) {
    grid.innerHTML = promos.items.map((p, i) => `
      <article class="promo-card" style="--delay: ${i * 80}ms">
        <span class="promo-card__icon" aria-hidden="true">${icons[p.icon] || ''}</span>
        <p class="promo-card__label">${esc(p.label)}</p>
        <p class="promo-card__sub">${esc(p.sub)}</p>
        <p class="promo-card__note">${esc(p.note)}</p>
      </article>
    `).join('');
  }

  const cta = document.getElementById('promos-cta');
  if (cta) { cta.textContent = promos.ctaLabel; cta.href = promos.ctaHref; }
}

/* ── PROCESS ──────────────────────────────────────────────── */
function renderProcess() {
  const { process } = landingContent;
  setText('[data-process-kicker]', process.kicker);
  setText('[data-process-title]', process.title);

  const track = document.getElementById('process-track');
  if (!track) return;

  track.innerHTML = process.steps.map((s) => `
    <div class="process__step">
      <span class="process__num">Шаг · ${esc(s.num)}</span>
      <h3 class="process__title">${esc(s.title)}</h3>
      <p class="process__text">${esc(s.text)}</p>
    </div>
  `).join('');
}

/* ── SOCIAL PROOF ─────────────────────────────────────────── */
function renderSocial() {
  const { social } = landingContent;
  setText('[data-social-kicker]', social.kicker);
  setText('[data-social-title]', social.title);

  const stats = document.getElementById('social-stats');
  if (stats) {
    stats.innerHTML = social.stats.map((s) => `
      <div class="social__stat">
        <span class="social__stat-big">${esc(s.big)}</span>
        <span class="social__stat-small">${esc(s.small)}</span>
      </div>
    `).join('');
  }

  const quotes = document.getElementById('social-quotes');
  if (quotes) {
    quotes.innerHTML = social.quotes.map((q) => `
      <blockquote class="social__quote">
        <p class="social__quote-text">${esc(q.text)}</p>
        <footer class="social__quote-foot">
          <span class="social__quote-name">${esc(q.name)}</span>
          <span class="social__quote-context">${esc(q.context)}</span>
        </footer>
      </blockquote>
    `).join('');
  }
}

/* ── CONTACT ──────────────────────────────────────────────── */
function renderContact() {
  const { contact } = landingContent;
  setText('[data-contact-kicker]', contact.kicker);
  setText('[data-contact-title]', contact.title);
  setText('[data-contact-description]', contact.description);
  setText('[data-contact-location]', contact.location);
  setText('[data-contact-hours]', contact.hours);

  const methods = document.getElementById('contact-methods');
  if (!methods) return;

  const icons = {
    telegram: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.3 1.2 4.8L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>',
  };

  methods.innerHTML = contact.methods.map((m) => {
    const icon = icons[m.key] || '';
    const klass = m.primary ? 'contact__method contact__method--primary' : 'contact__method contact__method--secondary';
    return `
      <a class="${klass}" href="${esc(m.url)}" target="_blank" rel="noreferrer">
        ${icon}
        <span>${esc(m.label)} <small>${esc(m.handle)}</small></span>
      </a>
    `;
  }).join('');
}

/* ════════════════════════════════════════════════════════════
   Scroll-reveal via IntersectionObserver
   ════════════════════════════════════════════════════════════ */
function initReveal() {
  const nodes = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    nodes.forEach((n) => n.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  nodes.forEach((n) => io.observe(n));
}

/* ════════════════════════════════════════════════════════════
   Mobile menu toggle
   ════════════════════════════════════════════════════════════ */
function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    menu.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    setOpen(open);
  });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));

  const mq = window.matchMedia('(min-width: 961px)');
  mq.addEventListener('change', (e) => { if (e.matches) setOpen(false); });
}

/* ════════════════════════════════════════════════════════════
   Parallax for hero sprig on scroll
   ════════════════════════════════════════════════════════════ */
function initParallax() {
  const sprig = document.querySelector('.hero__sprig');
  if (!sprig) return;
  const update = () => {
    const y = window.scrollY;
    if (y < 800) {
      sprig.style.transform = `translateY(${y * 0.15}px) rotate(${y * 0.03}deg)`;
    }
  };
  window.addEventListener('scroll', update, { passive: true });
}

/* ════════════════════════════════════════════════════════════
   Init
   ════════════════════════════════════════════════════════════ */
function init() {
  renderBrand();
  renderNav();
  renderHero();
  renderManifesto();
  renderPriceStrip();
  renderCollection();
  renderPromos();
  renderProcess();
  renderSocial();
  renderContact();

  initMobileMenu();
  initReveal();
  initParallax();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
