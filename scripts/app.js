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

  const visual = document.getElementById('hero-visual');
  if (visual && hero.visual && Array.isArray(hero.visual.photos)) {
    visual.innerHTML = hero.visual.photos.map((p, i) => `
      <figure class="hero__photo" style="--tilt: ${Number(p.tilt) || 0}deg; top: ${esc(p.top)}; right: ${esc(p.right)}; width: ${esc(p.width)}; z-index: ${Number(p.z) || i + 1}; --d: ${i * 0.18 + 0.4}s">
        <div class="hero__photo-inner">
          <img src="${esc(p.src)}" alt="${esc(p.alt)}" loading="eager" />
        </div>
        ${p.caption ? `<figcaption>${esc(p.caption)}</figcaption>` : ''}
      </figure>
    `).join('');
  }
}

/* ── SEASONAL BANNER ───────────────────────────────────────── */
function renderSeasonal() {
  const { seasonal } = landingContent;
  if (!seasonal) return;
  const bar = document.getElementById('seasonal-banner');
  if (!bar) return;

  const dismissed = localStorage.getItem('seasonal-dismissed');
  if (!seasonal.active || dismissed === '1') return;

  setText('[data-seasonal-emoji]', seasonal.emoji);
  setText('[data-seasonal-title]', seasonal.title);
  setText('[data-seasonal-desc]', seasonal.description);
  const cta = document.getElementById('seasonal-cta');
  if (cta) { cta.textContent = seasonal.ctaLabel; cta.href = seasonal.ctaHref; }

  bar.hidden = false;
  bar.setAttribute('aria-hidden', 'false');
  document.body.classList.add('has-seasonal');

  const close = document.getElementById('seasonal-close');
  if (close) {
    close.addEventListener('click', () => {
      bar.hidden = true;
      bar.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('has-seasonal');
      localStorage.setItem('seasonal-dismissed', '1');
    });
  }
}

/* ── LOOKBOOK ─────────────────────────────────────────────── */
function renderLookbook() {
  const { lookbook } = landingContent;
  if (!lookbook) return;
  setText('[data-lookbook-kicker]', lookbook.kicker);
  setText('[data-lookbook-title]', lookbook.title);
  setText('[data-lookbook-description]', lookbook.description);

  const track = document.getElementById('lookbook-track');
  if (track && Array.isArray(lookbook.photos)) {
    // duplicate for seamless infinite marquee
    const once = lookbook.photos.map((p, i) => `
      <figure class="lookbook__card" style="--tilt: ${(i % 2 ? 2 : -2)}deg">
        <img src="${esc(p.src)}" alt="${esc(p.alt)}" loading="lazy" />
      </figure>
    `).join('');
    track.innerHTML = once + once;
  }

  const cta = document.getElementById('lookbook-cta');
  if (cta) { cta.textContent = lookbook.ctaLabel; cta.href = lookbook.ctaHref; }
}

/* ── FAQ ─────────────────────────────────────────────────── */
function renderFaq() {
  const { faq } = landingContent;
  if (!faq) return;
  setText('[data-faq-kicker]', faq.kicker);
  setText('[data-faq-title]', faq.title);
  setText('[data-faq-description]', faq.description);

  const list = document.getElementById('faq-list');
  if (!list) return;

  list.innerHTML = faq.items.map((it, i) => `
    <details class="faq__item"${i === 0 ? ' open' : ''}>
      <summary class="faq__q">
        <span class="faq__q-text">${esc(it.q)}</span>
        <span class="faq__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </summary>
      <div class="faq__a">${esc(it.a)}</div>
    </details>
  `).join('');
}

/* ── MAP ─────────────────────────────────────────────────── */
function renderMap() {
  const { map } = landingContent;
  if (!map) return;
  setText('[data-map-kicker]', map.kicker);
  setText('[data-map-title]', map.title);
  setText('[data-map-description]', map.description);

  const frame = document.getElementById('map-frame');
  if (frame && map.yandexEmbed) {
    frame.innerHTML = `<iframe src="${esc(map.yandexEmbed)}" title="Карта: Калининград" loading="lazy" frameborder="0" allowfullscreen></iframe>`;
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
    vk: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12.77 16.81h1.12s.34-.04.52-.23c.16-.18.15-.51.15-.51s-.02-1.5.68-1.72c.69-.22 1.57 1.45 2.51 2.09.71.48 1.25.38 1.25.38l2.51-.04s1.31-.08.69-1.11c-.05-.08-.36-.76-1.87-2.17-1.58-1.47-1.37-1.23.53-3.77 1.16-1.54 1.62-2.49 1.48-2.89-.13-.39-.98-.29-.98-.29l-2.82.02s-.21-.03-.37.06c-.15.09-.25.31-.25.31s-.45 1.2-1.04 2.22c-1.26 2.15-1.77 2.27-1.97 2.13-.48-.31-.36-1.25-.36-1.92 0-2.09.32-2.96-.62-3.19-.31-.07-.54-.12-1.34-.13-1.02-.01-1.89.01-2.38.25-.33.16-.58.52-.42.54.19.03.63.12.86.44.3.41.29 1.33.29 1.33s.17 2.53-.4 2.85c-.39.22-.93-.23-2.06-2.18-.58-1-1.02-2.1-1.02-2.1s-.08-.21-.23-.32c-.18-.14-.43-.18-.43-.18l-2.68.02s-.4.01-.55.19c-.13.16-.01.48-.01.48s2.1 4.91 4.48 7.39c2.18 2.27 4.65 2.12 4.65 2.12z"/></svg>',
    max: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="6"/><path d="M7 16V8l5 6 5-6v8"/></svg>',
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
   Collection gallery: click a polaroid to bring it to the front
   ════════════════════════════════════════════════════════════ */
function initGallerySwap() {
  document.querySelectorAll('.collection__gallery').forEach((gallery) => {
    const photos = gallery.querySelectorAll('.collection__photo');
    if (photos.length < 2) return;

    photos.forEach((photo) => {
      photo.setAttribute('role', 'button');
      photo.setAttribute('tabindex', '0');
      const img = photo.querySelector('img');
      const label = img ? img.alt || 'Фото' : 'Фото';
      photo.setAttribute('aria-label', `${label} — нажмите, чтобы вывести на передний план`);
    });

    const handler = (e) => {
      const photo = e.target.closest('.collection__photo');
      if (!photo) return;
      const isBehind = photo.classList.contains('collection__photo--behind');
      const current = gallery.dataset.focused;
      const next = isBehind ? 'behind' : 'main';
      // Toggle off if clicking the already-focused one back to default
      if (current === next && next === 'behind') {
        gallery.dataset.focused = 'main';
      } else {
        gallery.dataset.focused = next;
      }
    };
    gallery.addEventListener('click', handler);
    gallery.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handler(e);
      }
    });
  });
}

/* ════════════════════════════════════════════════════════════
   Social stats count-up — parses leading number and animates
   ════════════════════════════════════════════════════════════ */
function initStatsCountup() {
  const nodes = document.querySelectorAll('.social__stat-big');
  if (!nodes.length || !('IntersectionObserver' in window)) return;

  const animate = (el) => {
    const raw = el.dataset.target || el.textContent.trim();
    const match = raw.match(/^(\d+)(.*)$/);
    if (!match) return;
    const target = parseInt(match[1], 10);
    const suffix = match[2];
    if (!el.dataset.target) el.dataset.target = raw;

    const duration = 1200;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const val = Math.round(target * eased);
      el.textContent = `${val}${suffix}`;
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = raw;
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  nodes.forEach((n) => io.observe(n));
}

/* ════════════════════════════════════════════════════════════
   Lightbox — click a gallery photo, open fullscreen viewer
   ════════════════════════════════════════════════════════════ */
function initLightbox() {
  const box = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const capt = document.getElementById('lightbox-caption');
  const counter = document.getElementById('lightbox-counter');
  const btnClose = document.getElementById('lightbox-close');
  const btnPrev = document.getElementById('lightbox-prev');
  const btnNext = document.getElementById('lightbox-next');
  if (!box || !img) return;

  let list = []; // current set of {src, alt, caption}
  let idx = 0;
  let lastFocus = null;

  const renderIdx = () => {
    if (!list.length) return;
    const item = list[idx];
    img.src = item.src;
    img.alt = item.alt || '';
    capt.textContent = item.caption || item.alt || '';
    counter.textContent = `${idx + 1} / ${list.length}`;
  };

  const open = (items, startIdx) => {
    list = items;
    idx = startIdx;
    box.hidden = false;
    document.body.style.overflow = 'hidden';
    renderIdx();
    requestAnimationFrame(() => box.classList.add('is-open'));
    lastFocus = document.activeElement;
    btnClose.focus();
  };

  const close = () => {
    box.classList.remove('is-open');
    setTimeout(() => {
      box.hidden = true;
      document.body.style.overflow = '';
      if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    }, 240);
  };

  const prev = () => { idx = (idx - 1 + list.length) % list.length; renderIdx(); };
  const next = () => { idx = (idx + 1) % list.length; renderIdx(); };

  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);
  box.addEventListener('click', (e) => { if (e.target === box) close(); });
  document.addEventListener('keydown', (e) => {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') prev();
    else if (e.key === 'ArrowRight') next();
  });

  // Wire up gallery photos — double-click opens lightbox, single click still swaps
  document.querySelectorAll('.collection__gallery').forEach((gallery) => {
    const photos = Array.from(gallery.querySelectorAll('.collection__photo img'));
    if (!photos.length) return;
    const items = photos.map((i) => ({ src: i.src, alt: i.alt, caption: i.alt }));
    photos.forEach((imgEl, i) => {
      imgEl.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        open(items, i);
      });
    });
  });

  // Lookbook photos — single click opens lightbox
  const lookbookTrack = document.getElementById('lookbook-track');
  if (lookbookTrack) {
    const unique = (landingContent.lookbook?.photos || []).map((p) => ({ src: p.src, alt: p.alt, caption: p.alt }));
    lookbookTrack.addEventListener('click', (e) => {
      const figure = e.target.closest('.lookbook__card');
      if (!figure) return;
      const allCards = Array.from(lookbookTrack.querySelectorAll('.lookbook__card'));
      const i = allCards.indexOf(figure) % unique.length;
      open(unique, i);
    });
    lookbookTrack.style.cursor = 'zoom-in';
  }
}

/* ════════════════════════════════════════════════════════════
   Scroll progress bar
   ════════════════════════════════════════════════════════════ */
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;
  let ticking = false;
  const update = () => {
    const h = document.documentElement;
    const max = (h.scrollHeight - h.clientHeight) || 1;
    const pct = Math.min(Math.max(window.scrollY / max, 0), 1);
    bar.style.transform = `scaleX(${pct})`;
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
}

/* ════════════════════════════════════════════════════════════
   Magnetic buttons — desktop only, cursor attraction
   ════════════════════════════════════════════════════════════ */
function initMagneticButtons() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const els = document.querySelectorAll('.btn--primary.btn--lg, .btn--outline.btn--lg');
  els.forEach((el) => {
    const strength = 14;
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const mx = e.clientX - rect.left - rect.width / 2;
      const my = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${mx / rect.width * strength}px, ${my / rect.height * strength}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
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
  renderLookbook();
  renderFaq();
  renderMap();
  renderProcess();
  renderSocial();
  renderContact();
  renderSeasonal();

  initMobileMenu();
  initReveal();
  initParallax();
  initGallerySwap();
  initStatsCountup();
  initLightbox();
  initScrollProgress();
  initMagneticButtons();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
