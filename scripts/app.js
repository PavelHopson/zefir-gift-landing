import { landingContent } from './content.js';

const icons = {
  butterfly: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 11.5c0-2.8 1.8-5.8 5.2-6.4-.4 2.2-.1 4.2 1.6 5.5-2 .5-3.7 1.4-4.8 3.2" />
      <path d="M12 11.5c0-2.8-1.8-5.8-5.2-6.4.4 2.2.1 4.2-1.6 5.5 2 .5 3.7 1.4 4.8 3.2" />
      <path d="M12 12.3c0 2.8 1.8 5.8 5.2 6.4-.4-2.2-.1-4.2 1.6-5.5-2-.5-3.7-1.4-4.8-3.2" />
      <path d="M12 12.3c0 2.8-1.8 5.8-5.2 6.4.4-2.2.1-4.2-1.6-5.5 2-.5 3.7-1.4 4.8-3.2" />
      <path d="M12 10.2v3.8" />
    </svg>
  `,
  'heart-outline': `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20.4C6 16 3.5 13.3 3.5 9.7a4.4 4.4 0 0 1 8.1-2.3A4.4 4.4 0 0 1 20 9.7c0 3.6-2.5 6.3-8 10.7Z" />
    </svg>
  `,
  'heart-solid': `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 20.4C6 16 3.5 13.3 3.5 9.7a4.4 4.4 0 0 1 8.1-2.3A4.4 4.4 0 0 1 20 9.7c0 3.6-2.5 6.3-8 10.7Z" />
    </svg>
  `,
  sprig: `
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M23 42c0-17.2 1.7-29.4 10.5-36" />
      <path d="M23.5 25c-4.3-.4-7.7-2-10.4-5.5 4-.8 7.4-.2 10.2 2.2" />
      <path d="M24 18c2.1-3.6 5-5.9 9.2-6.7-.4 4.1-2.1 7.2-5.8 9" />
      <path d="M24 31.3c2.9.4 5.4 1.7 7.4 4.6-3.5.8-6.3.5-8.3-1.7" />
      <path d="M22.5 35.8c-3.1.6-5.8 2.1-7.8 5 4-.1 6.8-1.1 8.7-3.6" />
    </svg>
  `,
  gift: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3.5" y="9" width="17" height="11" rx="2.3" />
      <path d="M12 9v11" />
      <path d="M4 13h16" />
      <path d="M12 9c0-2.6-1-4.7-3.3-4.7S6 6.2 6 8c0 .4.1.7.3 1" />
      <path d="M12 9c0-2.6 1-4.7 3.3-4.7S18 6.2 18 8c0 .4-.1.7-.3 1" />
    </svg>
  `,
  percent: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="m18 6-12 12" />
      <circle cx="7.5" cy="7.5" r="2.5" />
      <circle cx="16.5" cy="16.5" r="2.5" />
    </svg>
  `,
  telegram: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 4.8 3.7 11.5c-.8.3-.8 1.4 0 1.7l4.4 1.5 1.8 5.1c.2.7 1.2.8 1.7.2l2.7-3.3 4.8 3.5c.6.4 1.5.1 1.7-.7L22 5.9c.2-.8-.5-1.4-1.2-1.1Z" />
      <path d="m8.3 14.8 10.4-8.6" />
    </svg>
  `,
  phone: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 16.8v2.4a1.8 1.8 0 0 1-2 1.8A17.8 17.8 0 0 1 3 6a1.8 1.8 0 0 1 1.8-2h2.4A1.8 1.8 0 0 1 9 5.5l.5 2.4a1.8 1.8 0 0 1-.5 1.7l-1 1a14.4 14.4 0 0 0 5.4 5.4l1-1a1.8 1.8 0 0 1 1.7-.5l2.4.5a1.8 1.8 0 0 1 1.5 1.8Z" />
    </svg>
  `,
};

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = value;
  });
};

const setHtml = (selector, value) => {
  document.querySelectorAll(selector).forEach((node) => {
    node.innerHTML = value;
  });
};

const decorateIcons = () => {
  document.querySelectorAll('[data-icon]').forEach((node) => {
    const iconName = node.getAttribute('data-icon');
    if (!iconName || !icons[iconName]) return;
    node.innerHTML = icons[iconName];
    node.setAttribute('aria-hidden', 'true');
  });
};

const renderNav = () => {
  const navRoot = document.getElementById('nav-list');
  if (!navRoot) return;

  navRoot.innerHTML = landingContent.nav
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join('');
};

const renderOffers = () => {
  const offersRoot = document.getElementById('offer-list');
  if (!offersRoot) return;

  offersRoot.innerHTML = landingContent.promos
    .map(
      (card) => `
        <article class="offer-card reveal">
          <span class="offer-card__icon" aria-hidden="true">${icons[card.icon]}</span>
          <div class="offer-card__copy">
            <p class="offer-card__headline">
              <span>${card.accent}</span>
              ${card.title ? `<small>${card.title}</small>` : ''}
            </p>
            <p class="offer-card__note">${card.note}</p>
          </div>
        </article>
      `,
    )
    .join('');
};

const renderCollections = () => {
  const collectionsRoot = document.getElementById('collections-list');
  if (!collectionsRoot) return;

  collectionsRoot.innerHTML = landingContent.collections.items
    .map(
      (item) => `
        <article class="collection-item">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join('');
};

const buildPromoBoard = (board, options = {}) => {
  const { titleTag = 'h3', titleId = '', extraClass = '' } = options;
  const titleOpen = `<${titleTag} class="promo-board__script"${titleId ? ` id="${titleId}"` : ''}>`;
  const titleClose = `</${titleTag}>`;

  const boardClass = ['promo-board', extraClass].filter(Boolean).join(' ');

  return `
    <article class="${boardClass}">
      <div class="promo-board__badge">
        <span class="promo-board__badge-icon" aria-hidden="true">${icons.butterfly}</span>
        <p class="promo-board__badge-text">${landingContent.badgeLines.join('<br />')}</p>
        <span class="promo-board__badge-heart" aria-hidden="true">${icons['heart-outline']}</span>
      </div>

      <div class="promo-board__content">
        ${board.eyebrow ? `<p class="promo-board__eyebrow">${board.eyebrow}</p>` : ''}
        <p class="promo-board__lead">${board.lead}</p>
        <div class="promo-board__script-row">
          ${titleOpen}${board.script}${titleClose}
          <span class="promo-board__script-heart" aria-hidden="true">${icons['heart-outline']}</span>
        </div>
        <p class="promo-board__subhead">${board.subhead}</p>
        <div class="promo-board__description-row">
          ${
            board.descriptionIcon
              ? `<span class="promo-board__description-icon" aria-hidden="true">${icons[board.descriptionIcon]}</span>`
              : ''
          }
          <p class="promo-board__description">${board.description}</p>
        </div>

        <div class="promo-board__offers">
          ${landingContent.promos
            .map(
              (promo) => `
                <article class="promo-board__offer">
                  <span class="promo-board__offer-icon" aria-hidden="true">${icons[promo.icon]}</span>
                  <div>
                    <strong>${promo.accent}</strong>
                    ${promo.title ? `<span>${promo.title}</span>` : ''}
                    ${promo.note ? `<small>${promo.note}</small>` : ''}
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>

      <div class="promo-board__visual">
        <figure class="promo-board__hero-media">
          <img src="${board.heroImage}" alt="${board.heroAlt}" />
        </figure>

        <div class="promo-board__compliment">
          <p class="promo-board__compliment-label">${landingContent.compliment.label}</p>
          <div class="promo-board__compliment-card">
            <img src="${board.secondaryImage}" alt="${board.secondaryAlt}" />
          </div>
        </div>

        <div class="promo-board__qr">
          <span class="promo-board__qr-icon" aria-hidden="true">${icons['heart-outline']}</span>
          <strong>${board.qrTitle}</strong>
          <span>${board.qrCaption}</span>
        </div>

        <div class="promo-board__benefits">
          ${board.benefits
            .map(
              (item) => `
                <span>
                  <i aria-hidden="true">${icons[item.icon]}</i>
                  <em>${item.label}</em>
                </span>
              `,
            )
            .join('')}
        </div>
      </div>
    </article>
  `;
};

const renderHeroPoster = () => {
  const heroRoot = document.getElementById('hero');
  const board = landingContent.showcase.boards[0];
  if (!heroRoot || !board) return;

  heroRoot.innerHTML = `
    <div class="hero__poster">
      ${buildPromoBoard(board, { titleTag: 'h1', titleId: 'hero-script', extraClass: 'promo-board--hero' })}
    </div>

    <div class="hero__foot">
      <div class="hero__summary">
        <p class="hero__eyebrow">${landingContent.hero.eyebrow}</p>
        <p class="hero__summary-text">${landingContent.hero.description}</p>
      </div>

      <div class="hero__actions">
        <a class="button button--primary" href="${landingContent.hero.primaryCta.href}">${landingContent.hero.primaryCta.label}</a>
        <a class="button button--secondary" href="${landingContent.hero.secondaryCta.href}" target="_blank" rel="noreferrer">
          ${landingContent.hero.secondaryCta.label}
        </a>
      </div>
    </div>
  `;
};

const renderShowcase = () => {
  const showcaseSection = document.getElementById('showcase');
  if (showcaseSection) {
    showcaseSection.remove();
  }
};

const renderWorks = () => {
  const worksRoot = document.getElementById('works-list');
  if (!worksRoot) return;

  worksRoot.innerHTML = landingContent.works.items
    .map((item) => {
      const media = item.image
        ? `<div class="work-card__media"><img src="${item.image}" alt="${item.alt}" /></div>`
        : `
          <div class="work-card__media work-card__media--placeholder">
            <span>Добавьте фото новой работы</span>
          </div>
        `;

      return `
        <article class="work-card work-card--${item.tone}">
          ${media}
          <div class="work-card__copy">
            <span class="work-card__tag">${item.tag}</span>
            <h3>${item.title}</h3>
            <p>${item.note}</p>
          </div>
        </article>
      `;
    })
    .join('');
};

const renderBenefits = () => {
  const benefitsRoot = document.getElementById('benefits-list');
  if (!benefitsRoot) return;

  benefitsRoot.innerHTML = landingContent.benefits.items
    .map(
      (item) => `
        <article class="advantage-item">
          <span class="advantage-item__icon" aria-hidden="true">${icons[item.icon]}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.note}</p>
          </div>
        </article>
      `,
    )
    .join('');
};

const renderProcess = () => {
  const processRoot = document.getElementById('process-list');
  if (!processRoot) return;

  processRoot.innerHTML = landingContent.process.steps
    .map(
      (step, index) => `
        <article class="order-step">
          <span class="order-step__index">${String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3>${step.title}</h3>
            <p>${step.note}</p>
          </div>
        </article>
      `,
    )
    .join('');
};

const renderHeroStats = () => {
  const statsRoot = document.getElementById('hero-stats');
  if (!statsRoot) return;

  statsRoot.innerHTML = landingContent.hero.stats
    .map((item) => `<div class="hero-chip"><strong>${item.value}</strong><span>${item.label}</span></div>`)
    .join('');
};

const renderQr = () => {
  const qrFrame = document.getElementById('qr-frame');
  if (!qrFrame) return;

  const qrSource = landingContent.assets.qrCode || landingContent.assets.qrPlaceholder;
  const qrAlt = landingContent.assets.qrCode
    ? 'QR-код для быстрого перехода'
    : 'Заглушка для QR-кода';

  qrFrame.innerHTML = `
    <img
      class="qr-card__image"
      src="${qrSource}"
      alt="${qrAlt}"
    />
  `;
};

const wireContent = () => {
  const heroImage = document.getElementById('hero-image');
  const telegramLink = document.getElementById('telegram-link');
  const phoneLink = document.getElementById('phone-link');
  const badge = document.querySelector('[data-badge]');
  const headerCta = document.querySelector('.site-header__cta');
  const heroPrimary = document.querySelector('[data-hero-primary]');
  const heroSecondary = document.querySelector('[data-hero-secondary]');

  if (badge) {
    badge.innerHTML = landingContent.badgeLines.join('<br>');
  }

  setText('[data-brand-label]', landingContent.brand.label);
  setText('[data-brand-name]', landingContent.brand.name);
  setText('[data-hero-eyebrow]', landingContent.hero.eyebrow);
  setHtml('[data-title-lead]', landingContent.hero.lead.replaceAll('\n', '<br />'));
  setHtml('[data-title-script]', landingContent.hero.script.replaceAll('\n', '<br />'));
  setText('[data-title-subhead]', landingContent.hero.subhead);
  setText('[data-hero-description]', landingContent.hero.description);

  setText('[data-collections-kicker]', landingContent.collections.kicker);
  setText('[data-collections-title]', landingContent.collections.title);
  setText('[data-collections-description]', landingContent.collections.description);

  setText('[data-showcase-kicker]', landingContent.showcase.kicker);
  setText('[data-showcase-title]', landingContent.showcase.title);
  setText('[data-showcase-description]', landingContent.showcase.description);

  setText('[data-works-kicker]', landingContent.works.kicker);
  setText('[data-works-title]', landingContent.works.title);
  setText('[data-works-description]', landingContent.works.description);

  setText('[data-benefits-kicker]', landingContent.benefits.kicker);
  setText('[data-benefits-title]', landingContent.benefits.title);

  setText('[data-process-kicker]', landingContent.process.kicker);
  setText('[data-process-title]', landingContent.process.title);

  setText('[data-compliment-label]', landingContent.compliment.label);
  setText('[data-compliment-title]', landingContent.compliment.title);
  setText('[data-compliment-caption]', landingContent.compliment.caption);

  setText('[data-qr-title]', landingContent.qr.title);
  setText('[data-qr-caption]', landingContent.qr.caption);

  setText('[data-contact-kicker]', landingContent.contact.kicker);
  setText('[data-contact-title]', landingContent.contact.title);
  setText('[data-contact-description]', landingContent.contact.description);
  setText('[data-telegram]', landingContent.contact.telegram);
  setText('[data-phone]', landingContent.contact.phone);
  setText('[data-signature]', landingContent.contact.signature);

  if (headerCta) {
    headerCta.href = landingContent.contact.telegramUrl;
  }

  if (heroPrimary) {
    heroPrimary.href = landingContent.hero.primaryCta.href;
    heroPrimary.textContent = landingContent.hero.primaryCta.label;
  }

  if (heroSecondary) {
    heroSecondary.href = landingContent.hero.secondaryCta.href;
    heroSecondary.textContent = landingContent.hero.secondaryCta.label;
  }

  if (heroImage) {
    heroImage.src = landingContent.assets.heroImage;
    heroImage.alt = landingContent.assets.heroAlt;
  }

  if (telegramLink) {
    telegramLink.href = landingContent.contact.telegramUrl;
  }

  if (phoneLink) {
    phoneLink.href = landingContent.contact.phoneHref;
  }
};

const setupReveal = () => {
  document.documentElement.classList.add('has-motion');

  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.15,
    },
  );

  reveals.forEach((element, index) => {
    element.style.setProperty('--delay', `${index * 50}ms`);
    observer.observe(element);
  });
};

decorateIcons();
renderNav();
wireContent();
renderHeroPoster();
renderShowcase();
renderCollections();
renderWorks();
renderOffers();
renderBenefits();
renderProcess();
renderQr();
setupReveal();
