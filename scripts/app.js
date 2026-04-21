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

const decorateIcons = () => {
  document.querySelectorAll('[data-icon]').forEach((node) => {
    const iconName = node.getAttribute('data-icon');
    if (!iconName || !icons[iconName]) return;
    node.innerHTML = icons[iconName];
    node.setAttribute('aria-hidden', 'true');
  });
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

const renderBenefits = () => {
  const benefitsRoot = document.getElementById('benefits-list');
  if (!benefitsRoot) return;

  benefitsRoot.innerHTML = landingContent.benefits
    .map(
      (item) => `
        <article class="benefit-item">
          <span class="benefit-item__icon" aria-hidden="true">${icons[item.icon]}</span>
          <p class="benefit-item__title">${item.title}</p>
        </article>
      `,
    )
    .join('');
};

const renderQr = () => {
  const qrFrame = document.getElementById('qr-frame');
  if (!qrFrame) return;

  const qrSource =
    landingContent.assets.qrCode || landingContent.assets.qrPlaceholder;
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

  if (badge) {
    badge.innerHTML = landingContent.badgeLines.join('<br>');
  }

  setText('[data-title-lead]', landingContent.hero.lead);
  setText('[data-title-script]', landingContent.hero.script);
  setText('[data-title-subhead]', landingContent.hero.subhead);
  setText('[data-hero-description]', landingContent.hero.description);

  setText('[data-compliment-label]', landingContent.compliment.label);
  setText('[data-compliment-title]', landingContent.compliment.title);
  setText('[data-compliment-caption]', landingContent.compliment.caption);

  setText('[data-qr-title]', landingContent.qr.title);
  setText('[data-qr-caption]', landingContent.qr.caption);

  setText('[data-telegram]', landingContent.contact.telegram);
  setText('[data-phone]', landingContent.contact.phone);
  setText('[data-signature]', landingContent.contact.signature);

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
      threshold: 0.2,
    },
  );

  reveals.forEach((element, index) => {
    element.style.setProperty('--delay', `${index * 60}ms`);
    observer.observe(element);
  });
};

decorateIcons();
wireContent();
renderOffers();
renderBenefits();
renderQr();
setupReveal();
