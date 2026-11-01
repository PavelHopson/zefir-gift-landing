export const landingContent = {
  seo: {
    title: 'Вся в Зефире — зефирные букеты и домашняя кондитерская в Калининграде',
    description: 'Домашняя кондитерская «Вся в Зефире» в Калининграде: зефирные букеты, подарочные коробки, завитки, грибочки и чизкейки ручной работы. Доставка по городу, индивидуальные заказы и оформление через Telegram.',
    keywords: 'зефир Калининград, зефирные букеты Калининград, съедобный букет Калининград, домашняя кондитерская Калининград, зефир на заказ Калининград, подарочные сладости Калининград',
    ogTitle: 'Вся в Зефире — зефирные букеты и подарочные десерты в Калининграде',
    ogDescription: 'Съедобные букеты, коробки с завитками, грибочки и чизкейки ручной работы. Доставка по Калининграду, индивидуальные заказы через Telegram.',
  },

  // seasonal banner — set active: true to enable; content hot-swappable
  seasonal: {
    active: false,
    emoji: '🌸',
    title: 'Букеты к 8 марта',
    description: 'Принимаем заказы до 5 марта. Доставка по Калининграду.',
    ctaLabel: 'Заказать',
    ctaHref: 'https://t.me/tt_zefir39',
  },

  brand: {
    name: 'Вся в Зефире',
    label: 'Домашняя кондитерская · Калининград',
    handle: '@tt_zefir39',
    established: '',
  },

  nav: [
    { label: 'В наличии', href: '#collection' },
    { label: 'Торты', href: '#cakes' },
    { label: 'Осень', href: '#autumn' },
    { label: 'К праздникам', href: '#limited' },
    { label: 'Отзывы', href: '#social' },
    { label: 'Доставка', href: '#delivery' },
    { label: 'Контакт', href: '#contact' },
  ],

  hero: {
    kicker: 'Домашняя кондитерская · Калининград',
    tagline: 'Зефир, букеты и торты ручной работы',
    photo: { src: 'assets/images/new/cake-tulips-dark.webp', alt: 'Торт с тюльпанами ручной работы на тёмном фоне' },
  },

  limited: {
    kicker: 'Ограниченные коллекции',
    title: 'Выходят к праздникам',
    description: 'Небольшие партии к дате. Лучше написать заранее.',
    ctaLabel: 'Спросить в Telegram',
    items: [
      { when: 'Декабрь', title: 'Новый год', text: 'Подарочные наборы к праздничному столу и для коллег.', tile: 'tile-choc', tone: 'light', image: 'assets/images/new/holiday-newyear.webp', example: true },
      { when: 'Февраль', title: '14 февраля', text: 'Сладкий подарок для любимого человека.', tile: 'tile-burgundy', tone: 'light', image: 'assets/images/new/holiday-valentine.webp', example: true },
      { when: 'Март', title: '8 Марта', text: 'Цветы, которые можно съесть.', tile: 'tile-rose', tone: 'dark', image: 'assets/images/new/cake-tulips.webp' },
      { when: 'Весна', title: 'Пасха', text: 'Куличи с цветами ручной работы.', tile: 'tile-moss', tone: 'light', image: 'assets/images/new/easter-new.webp' },
      { when: 'Сентябрь', title: '1 сентября', text: 'Вместо обычного букета для первого учителя.', tile: 'tile-champagne', tone: 'dark', image: 'assets/images/new/holiday-september.webp', example: true },
      { when: 'Октябрь', title: 'День учителя', text: 'Небольшие наборы для всего педагогического состава.', tile: 'tile-sage', tone: 'light', image: 'assets/images/new/holiday-teacher.webp', example: true },
    ],
  },

  cakes: {
    kicker: 'Торты',
    text: 'Белый крем, свежие ягоды и мята или цветы ручной работы.',
    note: 'Собираем под вашу дату.',
    ctaLabel: 'Заказать торт',
    video: { src: 'assets/images/new/cake-loop.mp4', poster: 'assets/images/new/cake-loop-poster.jpg', label: 'Торт с жемчужинами и бантом' },
    images: [
      { src: 'assets/images/new/cake-berry-top.webp', alt: 'Белый торт с ежевикой и мятой' },
      { src: 'assets/images/new/cake-pearl-sun.webp', alt: 'Торт с жемчужинами и белым бантом' },
      { src: 'assets/images/new/cake-rose-side.webp', alt: 'Белый торт с розовыми цветами' },
      { src: 'assets/images/new/cake-mushroom-basket.webp', alt: 'Торт-корзина с зефирными грибами' },
      { src: 'assets/images/new/cake-tulips.webp', alt: 'Торт с тюльпанами ручной работы' },
      { src: 'assets/images/new/cake-strawberry.webp', alt: 'Торт с клубникой' },
      { src: 'assets/images/new/cake-bear.webp', alt: 'Детский торт с медвежонком' },
    ],
  },

  autumn: {
    kicker: 'Осенняя коллекция',
    text: 'Тыквы полностью из зефира, сделаны вручную.',
    note: 'Можно приобрести. Напишите нам.',
    ctaLabel: 'Приобрести в Telegram',
    video: { src: 'assets/autumn/autumn-loop.mp4', poster: 'assets/autumn/autumn-loop-poster.jpg', label: 'Зефирные тыквы крупным планом' },
    images: [
      { src: 'assets/autumn/autumn-1.webp', alt: 'Зефирная тыква на деревянной подставке, за ней букет хризантем' },
      { src: 'assets/autumn/autumn-2.webp', alt: 'Зефирная тыква с листьями и усиками крупным планом' },
      { src: 'assets/autumn/autumn-3.webp', alt: 'Две зефирные тыквы и хризантемы' },
    ],
  },

  localIntent: {
    kicker: 'Зефирные букеты · Калининград',
    title: 'Подарочные букеты и сладкие наборы, которые хочется вручать сразу',
    description: 'Если нужен подарок для дня рождения, свадьбы, учителя, благодарности или просто красивый десерт для себя, мы соберём композицию под повод, палитру и бюджет. Работаем по Калининграду и быстро ведём заказ через Telegram.',
    chips: [
      'доставка по городу и области',
      'букеты, коробки и мини-комплименты',
      'индивидуальные композиции под событие',
      'предпросмотр крупных заказов перед отправкой',
    ],
    paths: [
      {
        label: 'Хочу букет',
        title: 'Подберём зефирный букет под повод, бюджет и цветовую гамму',
        text: 'Для дня рождения, свадьбы, 8 марта, благодарности или красивого сюрприза без лишней суеты. Подскажем размер, упаковку и сроки.',
        ctaLabel: 'Обсудить букет в Telegram',
        href: 'https://t.me/tt_zefir39',
      },
      {
        label: 'Нужен особый заказ',
        title: 'Сделаем подарочный набор, корпоративный комплимент или композицию под идею',
        text: 'Если нужен нестандартный состав, коробка с завитками, сладкий комплимент к основному подарку или оформление под событие — соберём под задачу.',
        ctaLabel: 'Запросить индивидуальный заказ',
        href: 'https://t.me/tt_zefir39',
      },
    ],
    proofLabel: 'Нас рекомендуют и за внешний вид, и за вкус',
    quote: {
      text: 'Заказывала букет на юбилей маме — она ахнула. Пионы как настоящие, упаковка сразу подарочная, а вкус мягкий и не приторный. Через неделю вернулась ещё за коробкой грибочков.',
      name: 'Анна К.',
      context: 'букет + грибочки',
    },
    stats: [
      { big: '3 года', small: 'делаем заказы для Калининграда' },
      { big: '100%', small: 'ручная работа и сборка под заказ' },
      { big: '24 ч', small: 'от суток на небольшие заказы' },
    ],
  },

  manifesto: {
    kicker: 'О кондитерской',
    title: 'Три вещи, в которые мы верим',
    points: [
      {
        index: '01',
        title: 'Делаем руками',
        text: 'Каждый завиток, каждый цветок, каждый грибочек — вручную. Без штамповки, без конвейера.',
      },
      {
        index: '02',
        title: 'Натурально',
        text: 'Яблочное пюре, ягоды, агар-агар, белок. Без консервантов, красителей и ароматизаторов.',
      },
      {
        index: '03',
        title: 'С любовью',
        text: 'Мы вкладываем душу. Не каждый день, а каждый заказ — это забота о получателе.',
      },
    ],
  },

  collection: {
    kicker: 'Постоянно в наличии',
    title: 'Можно заказать в любой день',
    plaques: [
      { text: 'Красота, которую можно попробовать', tone: 'plaque-burgundy', position: 1 },
      { text: 'Наши вкусы', tone: 'plaque-rose', position: 3 },
      { text: 'Создано с любовью', tone: 'plaque-sage', position: 8 },
    ],
    items: [
      {
        id: 'zavitki-classic',
        image: 'assets/images/new/zavitki-tray.webp',
        alt: 'Зефирные завитки разных вкусов',
        num: '01',
        category: 'Классика',
        title: 'Зефирные завитки',
        tagline: 'Нежные, воздушные, ягодные',
        description: 'На яблочном пюре с ягодной начинкой.',
        priceFrom: '400',
        sizes: [
          { label: '10 шт', price: '1000' },
          { label: '8 шт', price: '800' },
          { label: '4 шт', price: '400' },
        ],
        flavors: ['яблоко', 'чёрная смородина', 'малина', 'клубника', 'вишня', 'апельсин', 'черника'],
        images: [
          { src: 'assets/images/new/zavitki-tray.webp', alt: 'Зефирные завитки разных вкусов', tilt: 0 },
          { src: 'assets/images/zavitki-white-mint.jpg', alt: 'Белые завитки в мятной упаковке', tilt: 5 },
        ],
        tapeColor: 'rgba(232, 197, 206, 0.72)',
        accent: '#D8AFB8',
      },
      {
        id: 'zavitki-author',
        image: 'assets/images/new/zavitki-verticals.webp',
        alt: 'Авторские зефирные завитки крупным планом',
        num: '02',
        category: 'Авторское',
        title: 'Авторские завитки',
        tagline: 'С подачей и начинкой',
        description: 'Особые вкусы в подарочной коробке с лентой.',
        priceFrom: '500',
        sizes: [
          { label: '10 шт', price: '1200', old: '1400' },
          { label: '8 шт', price: '950' },
          { label: '4 шт', price: '500' },
        ],
        flavors: ['пряный латте', 'банановый с начинкой'],
        images: [
          { src: 'assets/images/zavitki-butterfly-gift.jpg', alt: 'Подарочные коробки авторских завитков', tilt: -4, caption: 'с характером' },
          { src: 'assets/images/zavitki-rainbow-collage.jpg', alt: 'Цветные коробки завитков', tilt: 6 },
        ],
        tapeColor: 'rgba(197, 180, 205, 0.72)',
        accent: '#B08A9F',
      },
      {
        id: 'compliment',
        image: 'assets/images/new/compliment-box.webp',
        alt: 'Завитки в прозрачной подарочной коробке',
        num: '03',
        category: 'Мини',
        title: 'Комплимент',
        tagline: 'Маленький подарок — большое впечатление',
        description: 'Мини-подарок: завитки или цветок в прозрачной упаковке.',
        priceFrom: '400',
        sizes: [
          { label: '3 завитка или 1 цветок', price: '400' },
          { label: 'цветок хризантемы или пион', price: '500' },
        ],
        flavors: [],
        images: [
          { src: 'assets/images/new/gift-boxes.webp', alt: 'Подарочные коробочки с зелёными бантами', tilt: 0 },
          { src: 'assets/images/compliment-mushroom-gifts.jpg', alt: 'Миниатюрные коробочки с грибочками', tilt: 5 },
        ],
        tapeColor: 'rgba(232, 197, 197, 0.72)',
        accent: '#E8C5C5',
      },
      {
        id: 'mushrooms',
        image: 'assets/images/new/mushrooms-set-2.webp',
        alt: 'Зефирные мухоморы, боровики и лисички',
        num: '04',
        category: 'Шедевр',
        title: 'Зефирные грибочки',
        tagline: 'Лесная сказка на столе',
        description: 'Боровики, лисички и мухоморы из зефира.',
        priceFrom: '750',
        sizes: [
          { label: 'коробка 13×13', price: '750' },
          { label: 'коробка 16×16', price: '1000' },
          { label: 'шляпная d=16', price: '1100' },
          { label: 'шляпная d=18', price: '1400' },
        ],
        flavors: [],
        images: [
          { src: 'assets/images/new/mushrooms-set-2.webp', alt: 'Зефирные мухоморы, боровики и лисички', tilt: 0 },
          { src: 'assets/images/new/mushrooms-boletus.webp', alt: 'Зефирные боровики крупным планом', tilt: 0 },
        ],
        tapeColor: 'rgba(196, 165, 132, 0.7)',
        accent: '#9E8B73',
      },
      {
        id: 'cheesecake',
        image: 'assets/images/new/cheesecake-snickers-side.webp',
        alt: 'Шоколадный чизкейк с карамелью и орехами',
        num: '05',
        category: 'Десерт',
        title: 'Чизкейки',
        tagline: 'Плотный, сливочный, как обещали',
        description: 'Домашний чизкейк, восемь вкусов.',
        priceFrom: '1200',
        sizes: [
          { label: 'd=16 см', price: '1200' },
          { label: 'd=18 см', price: '1500' },
        ],
        flavors: ['три шоколада', 'сникерс', 'баунти', 'марс', 'твикс', 'милка', 'тирамису', 'брауни'],
        images: [
          { src: 'assets/images/new/cheesecake-snickers-side.webp', alt: 'Шоколадный чизкейк с карамелью и орехами', tilt: 0 },
          { src: 'assets/images/new/cheesecake-nut-top.webp', alt: 'Карамель с орехами на чизкейке', tilt: 0 },
        ],
        tapeColor: 'rgba(196, 165, 132, 0.7)',
        accent: '#C4A584',
      },
      {
        id: 'bouquets',
        image: 'assets/images/new/bouquet-white-roses.webp',
        alt: 'Большая корзина светлых зефирных роз',
        num: '06',
        category: 'Топ',
        title: 'Съедобные букеты',
        tagline: 'Флагман коллекции',
        description: 'Пионы, розы и хризантемы из зефира в корзинах и коробках.',
        priceFrom: '3000',
        sizes: [
          { label: 'компактный букет', price: 'от 3000' },
          { label: 'корзина среднего размера', price: 'от 4500' },
          { label: 'свадебный / юбилейный', price: 'по запросу' },
        ],
        flavors: [],
        images: [
          { src: 'assets/images/new/basket-flowers.webp', alt: 'Корзина с зефирными цветами', tilt: 0 },
          { src: 'assets/images/new/basket-lilac.webp', alt: 'Корзина сиреневых зефирных цветов', tilt: 0 },
        ],
        tapeColor: 'rgba(213, 223, 208, 0.72)',
        accent: '#C49A8F',
      },
    ],
  },

  promos: {
    kicker: 'Сладкие бонусы',
    title: 'С любовью и заботой',
    description: '',
    items: [
      {
        icon: 'percent',
        label: '−15%',
        sub: 'на первый заказ',
        note: 'при предъявлении купона из Telegram',
      },
      {
        icon: 'gift',
        label: 'Коробочка',
        sub: 'завитков в подарок',
        note: 'при заказе корзины цветов',
      },
      {
        icon: 'heart',
        label: 'С любовью',
        sub: 'к деталям',
        note: 'каждый заказ собираем руками',
      },
    ],
    ctaLabel: 'Забрать купон в Telegram',
    ctaHref: 'https://t.me/tt_zefir39',
    signature: '@tt_zefir39 · +7 (906) 239-85-73',
  },

  priceListStrip: {
    kicker: 'Прайс одним взглядом',
    title: 'От 400 ₽ до 3000+ ₽',
    description: 'Полный актуальный прайс — в карточках ниже. Все цены ручной работы без скрытых платежей.',
    compact: [
      { name: 'Комплимент', from: '400' },
      { name: 'Завитки классические', from: '400' },
      { name: 'Завитки авторские', from: '500' },
      { name: 'Грибочки', from: '750' },
      { name: 'Чизкейк', from: '1200' },
      { name: 'Букеты', from: '3000' },
    ],
  },

  process: {
    kicker: 'Как заказать',
    title: 'Четыре шага до готового подарка',
    steps: [
      {
        num: '01',
        title: 'Выберите',
        text: 'Посмотрите каталог, подскажем при сомнениях.',
      },
      {
        num: '02',
        title: 'Напишите',
        text: 'Уточним состав, дату и адрес.',
      },
      {
        num: '03',
        title: 'Согласуйте',
        text: 'Обсудим оформление и упаковку.',
      },
      {
        num: '04',
        title: 'Получите',
        text: 'Доставка по Калининграду или самовывоз.',
      },
    ],
  },

  lookbook: {
    kicker: 'Наши работы',
    title: 'Как это выглядит',
    description: '',
    // photos used only here (not referenced elsewhere) to give them a stage
    photos: [
      { src: 'assets/images/new/cake-rose-chest.webp', alt: 'Торт-шкатулка с зефирными пионами' },
      { src: 'assets/images/new/cake-mushroom-basket-2.webp', alt: 'Торт-корзина с грибами' },
      { src: 'assets/images/new/cake-rose-pale.webp', alt: 'Торт с розами' },
      { src: 'assets/images/new/basket-flowers-2.webp', alt: 'Корзина цветов с красным бантом' },
      { src: 'assets/images/new/easter-table.webp', alt: 'Пасхальный стол с куличами' },
      { src: 'assets/images/new/bun-swirl.webp', alt: 'Домашняя сдоба' },
      { src: 'assets/images/new/zavitki-tray.webp', alt: 'Завитки' },
      { src: 'assets/images/new/mushrooms-basket.webp', alt: 'Корзина зефирных грибов' },
    ],
    ctaLabel: 'Смотреть все работы в Instagram',
    ctaHref: 'https://instagram.com/tt_zefir39',
  },

  faq: {
    kicker: 'Частые вопросы',
    title: 'Вопросы',
    description: '',
    items: [
      {
        q: 'Сколько хранится зефир?',
        a: 'Зефир из яблочного пюре на агар-агаре хранится 7-10 дней при комнатной температуре, до 14 дней — в холодильнике в закрытой коробке. Букеты собираем под дату получения, поэтому они всегда свежие.',
      },
      {
        q: 'Сколько делается букет?',
        a: 'Маленькие композиции (до 12 цветов) собираем за 1-2 дня. Большие корзины и свадебные букеты — 3-5 дней. Срочный заказ «на завтра» обсуждаемо, зависит от загрузки — пишите, подскажем.',
      },
      {
        q: 'Как доставляете?',
        a: 'По Калининграду — курьером или самовывоз из нашей локации. Доставка от 400 ₽ в зависимости от района. При заказе от 2 000 ₽ по городу — бесплатно. За город и в область — по договорённости.',
      },
    ],
  },

  map: {
    kicker: 'Где мы',
    title: 'Калининград и доставка по городу',
    description: 'Курьером по городу и области или самовывоз, адрес уточним при заказе.',
    yandexEmbed: 'https://yandex.ru/map-widget/v1/?ll=20.507333%2C54.720687&z=11&l=map',
  },

  social: {
    kicker: 'Отзывы',
    title: 'Что говорят клиенты',
    stats: [],
    quotes: [
      {
        text: 'Заказывала букет на юбилей маме — она ахнула. Пионы как настоящие. И вкус — не приторный, а мягкий. Через неделю заказала ещё коробку грибочков для детей.',
        name: 'Анна К.',
        context: 'букет + грибочки',
      },
      {
        text: 'Брал авторские завитки коллегам на 8 марта. Упаковка такая, что дарить не стыдно — как из дорогой кондитерской. Все были в восторге, особенно пряный латте.',
        name: 'Дмитрий М.',
        context: 'корпоратив, 12 коробок',
      },
      {
        text: 'Три года подряд беру чизкейки на дни рождения. Никогда не разочаровалась. Тирамису — моя любовь.',
        name: 'Марина Т.',
        context: 'постоянный клиент',
      },
    ],
  },

  contact: {
    kicker: 'Контакт',
    title: 'Напишите нам',
    description: '',
    methods: [
      {
        key: 'telegram',
        label: 'Telegram',
        handle: '@tt_zefir39',
        url: 'https://t.me/tt_zefir39',
        primary: true,
      },
      {
        key: 'instagram',
        label: 'Instagram',
        handle: '@tt_zefir39',
        url: 'https://instagram.com/tt_zefir39',
        primary: false,
      },
      {
        key: 'vk',
        label: 'ВКонтакте',
        handle: 'tt_zefir39',
        url: 'https://vk.ru/tt_zefir39',
        primary: false,
      },
      {
        key: 'max',
        label: 'MAX',
        handle: 'присоединиться',
        url: 'https://max.ru/join/BCsqjdzRJDQXhsA1yJhV5xPrz_ZkPJY1M96uSgb7tj0',
        primary: false,
      },
    ],
    location: 'Калининград · доставка по городу и области',
    hours: 'Ежедневно 10:00 – 21:00',
  },

  footer: {
    brand: 'Вся в Зефире',
    tagline: 'Домашняя кондитерская · Калининград',
    year: '2026',
    handle: '@tt_zefir39',
    made: '',
  },
};
