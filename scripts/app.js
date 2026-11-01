import { landingContent as content } from './content.js';
import { initEffects } from './effects.js';

const TELEGRAM = 'https://t.me/tt_zefir39';

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

const setHtml = (id, html) => {
  const node = document.getElementById(id);
  if (node) node.innerHTML = html;
};
const setText = (selector, text) => {
  document.querySelectorAll(selector).forEach((el) => { el.textContent = text ?? ''; });
};
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const videoTag = (v) => `<video src="${esc(v.src)}" poster="${esc(v.poster)}" muted loop playsinline preload="metadata" ${prefersReducedMotion() ? 'controls' : 'autoplay'} aria-label="${esc(v.label)}"></video>`;

function renderSeo() {
  const { seo } = content;
  document.title = seo.title;
  const setMeta = (selector, value) => document.querySelector(selector)?.setAttribute('content', value);
  setMeta('meta[name="description"]', seo.description);
  setMeta('meta[name="keywords"]', seo.keywords);
  setMeta('meta[property="og:title"]', seo.ogTitle);
  setMeta('meta[property="og:description"]', seo.ogDescription);
  setMeta('meta[name="twitter:title"]', seo.ogTitle);
  setMeta('meta[name="twitter:description"]', seo.ogDescription);
}

function renderNav() {
  const links = content.nav.map((item) => `<li><a href="${esc(item.href)}">${esc(item.label)}</a></li>`).join('');
  setHtml('nav-list', links);
  setHtml('mobile-nav-list', links);
}

function renderHero() {
  const { hero } = content;
  setHtml('hero-visual', `<img src="${esc(hero.photo.src)}" alt="${esc(hero.photo.alt)}" fetchpriority="high" />`);
  setText('[data-hero-kicker]', hero.kicker);
  setText('[data-hero-tagline]', hero.tagline);
}

function renderMap() {
  const { map } = content;
  setText('[data-map-text]', map.description);
  setHtml('delivery-map', `<iframe src="${esc(map.yandexEmbed)}" title="Карта Калининграда" loading="lazy"></iframe>`);
}

function renderFeed() {
  const { items, plaques } = content.collection;
  const cards = items.map((item) => `
    <a class="feed__card reveal" id="${esc(item.id)}" href="${TELEGRAM}" target="_blank" rel="noreferrer" aria-label="Заказать: ${esc(item.title)}, от ${esc(item.priceFrom)} ₽">
      <img src="${esc(item.image)}" alt="${esc(item.alt)}" loading="lazy" />
      <div class="feed__info"><h3>${esc(item.title)}</h3><span>от ${esc(item.priceFrom)} ₽</span></div>
      <div class="feed__sizes" aria-hidden="true">
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.description)}</p>
        <ul>${item.sizes.map((s) => `<li>${esc(s.label)}<b>${esc(s.price)}${/\d$/.test(s.price) ? ' ₽' : ''}</b></li>`).join('')}</ul>
      </div>
    </a>`);
  plaques.forEach((p) => {
    cards.splice(p.position, 0, `<div class="feed__plaque ${esc(p.tone)}">${esc(p.text)}</div>`);
  });
  setHtml('feed', cards.join(''));
}

function renderCakes() {
  const { cakes } = content;
  const [big, ...rest] = cakes.images;
  const photo = (p, cls = '') => `<figure class="${cls}"><img src="${esc(p.src)}" alt="${esc(p.alt)}" loading="lazy" /></figure>`;
  setHtml('cakes-grid', `
    ${photo(big, 'is-big')}
    <figure>${videoTag(cakes.video)}</figure>
    ${rest.slice(0, 3).map((p) => photo(p)).join('')}
    <div class="cakes__copy"><h3>${esc(cakes.text)}</h3><a class="btn btn--main btn--sm" href="${TELEGRAM}" target="_blank" rel="noreferrer">${esc(cakes.ctaLabel)}</a></div>
    ${rest.slice(3, 6).map((p) => photo(p)).join('')}
  `);
}

function renderAutumn() {
  const { autumn } = content;
  setText('[data-autumn-kicker]', autumn.kicker);
  setText('[data-autumn-text]', autumn.text);
  setText('[data-autumn-note]', autumn.note);
  setText('#autumn-cta', autumn.ctaLabel);
  const [first, ...rest] = autumn.images;
  const photo = (p) => `<figure><img src="${esc(p.src)}" alt="${esc(p.alt)}" loading="lazy" /></figure>`;
  setHtml('autumn-gallery', `${photo(first)}<figure>${videoTag(autumn.video)}</figure>${rest.map(photo).join('')}`);
}

function renderOccasions() {
  const { limited } = content;
  setText('[data-limited-note]', limited.description);
  setHtml('occasions', limited.items.map((item) => `
    <a class="occasion ${esc(item.tile)}${item.image ? ' has-photo' : ''}" href="${TELEGRAM}" target="_blank" rel="noreferrer">
      ${item.image ? `<img src="${esc(item.image)}" alt="" loading="lazy" />` : ''}
      <span class="occasion__name">${esc(item.title)}</span>
      <span class="occasion__when">${esc(item.when)}</span>
      ${item.example ? '<span class="occasion__example">пример оформления</span>' : ''}
    </a>`).join(''));
}

function renderReviews() {
  setHtml('reviews', content.social.quotes.map((q) => `
    <figure><blockquote>${esc(q.text)}</blockquote><cite>${esc(q.name)}</cite></figure>`).join(''));
}

function renderFaq() {
  setHtml('faq', content.faq.items.map((item) => `
    <details><summary>${esc(item.q)}</summary><p>${esc(item.a)}</p></details>`).join(''));
}

function renderContact() {
  const { contact, footer } = content;
  setHtml('contact-links', contact.methods.map((m) => `
    <a class="${m.primary ? 'btn btn--light' : ''}" href="${esc(m.url)}" target="_blank" rel="noreferrer">${esc(m.label)}</a>`).join(''));
  setText('[data-contact-meta]', `${contact.location} · ${contact.hours}`);
  setText('[data-footer-brand]', `© ${footer.year} ${footer.brand}`);
  setText('[data-footer-handle]', footer.handle);
}

function initReveal() {
  document.querySelectorAll('.section__head, .cakes__grid > *, .occasion, .reviews__list figure, .faq__list details, .delivery__copy, .delivery__map').forEach((n) => n.classList.add('reveal'));
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
  }, { threshold: 0.1 });
  nodes.forEach((n) => io.observe(n));
}

function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    menu.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  window.matchMedia('(min-width: 1181px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });
}

renderSeo();
renderNav();
renderHero();
renderFeed();
renderCakes();
renderAutumn();
renderOccasions();
renderReviews();
renderFaq();
renderMap();
renderContact();
initReveal();
initMobileMenu();
initEffects();
