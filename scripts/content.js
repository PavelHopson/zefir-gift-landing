export const landingContent = {
  brand: {
    name: 'Вся в Зефире',
    label: 'Домашняя кондитерская · Калининград',
    handle: '@tt_zefir39',
    established: 'est. 2024',
  },

  nav: [
    { label: 'Коллекция', href: '#collection' },
    { label: 'Прайс', href: '#pricelist' },
    { label: 'Акции', href: '#promos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Контакт', href: '#contact' },
  ],

  // seasonal banner — set active: true to enable; content hot-swappable
  seasonal: {
    active: false,
    emoji: '🌸',
    title: 'Букеты к 8 марта',
    description: 'Принимаем заказы до 5 марта. Доставка по Калининграду.',
    ctaLabel: 'Заказать',
    ctaHref: 'https://t.me/tt_zefir39',
  },

  hero: {
    kicker: 'est. 2024 · Калининград · @tt_zefir39',
    titleTop: 'Вся',
    titleMid: 'в',
    titleBottom: 'Зефире',
    tagline: 'Домашний зефир ручной работы',
    subline: 'Съедобные букеты, авторские завитки, зефирные грибочки и десерты — с любовью, в подарок и для себя.',
    ctaPrimary: { label: 'Открыть коллекцию', href: '#collection' },
    ctaSecondary: { label: 'Написать в Telegram', href: 'https://t.me/tt_zefir39' },
    floatingLabels: [
      { label: 'натуральные ингредиенты', rotate: -4 },
      { label: 'ручная работа', rotate: 3 },
      { label: 'без консервантов', rotate: -2 },
    ],
    visual: {
      // 3 polaroids anchored on the right side of the hero
      photos: [
        { src: 'assets/images/bouquet-cream-roses.jpg', alt: 'Букет из кремовых зефирных роз', tilt: -4, caption: 'флагман', top: '4%',  right: '8%',  width: '62%', z: 3 },
        { src: 'assets/images/mushrooms-boletus-pile.jpg', alt: 'Зефирные боровики крупно',       tilt: 8,  caption: 'грибочки', top: '48%', right: '42%', width: '42%', z: 2 },
        { src: 'assets/images/zavitki-pink-box.jpg',    alt: 'Розовая коробка с завитками',   tilt: -7, caption: 'завитки', top: '62%', right: '0%',  width: '40%', z: 1 },
      ],
    },
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
    kicker: 'Коллекция',
    title: 'Что мы делаем',
    description: 'Шесть направлений — от классических завитков до авторских десертов. Все композиции можно собрать под повод, настроение и бюджет.',
    items: [
      {
        id: 'zavitki-classic',
        num: '01',
        category: 'Классика',
        title: 'Зефирные завитки',
        tagline: 'Нежные, воздушные, ягодные',
        description: 'Классические зефирные завитки на основе яблочного пюре с натуральными ягодными начинками. Базовая коллекция — то, с чего всё начиналось.',
        priceFrom: '400',
        sizes: [
          { label: '10 шт', price: '1000' },
          { label: '8 шт', price: '800' },
          { label: '4 шт', price: '400' },
        ],
        flavors: ['яблоко', 'чёрная смородина', 'малина', 'клубника', 'вишня', 'апельсин', 'черника'],
        images: [
          { src: 'assets/images/zavitki-classic-box.jpg', alt: 'Коробка классических зефирных завитков', tilt: -3, caption: 'ягодная классика' },
          { src: 'assets/images/zavitki-white-mint.jpg', alt: 'Белые завитки в мятной упаковке', tilt: 5 },
        ],
        tapeColor: 'rgba(232, 197, 206, 0.72)',
        accent: '#D8AFB8',
      },
      {
        id: 'zavitki-author',
        num: '02',
        category: 'Авторское',
        title: 'Авторские завитки',
        tagline: 'С подачей и начинкой',
        description: 'Авторские завитки с особыми вкусами — больше слоёв, больше характера. Подарочная коробка с декором и лентой.',
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
        num: '03',
        category: 'Мини',
        title: 'Комплимент',
        tagline: 'Маленький подарок — большое впечатление',
        description: 'Мини-формат под конверт, букет или дополнение к основному подарку. Завитки или цветок — в прозрачной подарочной упаковке.',
        priceFrom: '400',
        sizes: [
          { label: '3 завитка или 1 цветок', price: '400' },
          { label: 'цветок хризантемы или пион', price: '500' },
        ],
        flavors: [],
        images: [
          { src: 'assets/images/compliment-rose-dome.jpg', alt: 'Зефирная роза под прозрачным куполом', tilt: -4, caption: 'роза под куполом' },
          { src: 'assets/images/compliment-mushroom-gifts.jpg', alt: 'Миниатюрные коробочки с грибочками', tilt: 5 },
        ],
        tapeColor: 'rgba(232, 197, 197, 0.72)',
        accent: '#E8C5C5',
      },
      {
        id: 'mushrooms',
        num: '04',
        category: 'Шедевр',
        title: 'Зефирные грибочки',
        tagline: 'Лесная сказка на столе',
        description: 'Боровички, лисички, мухоморы — всё из зефира. Выглядят настолько реально, что гости сомневаются. Лучший подарок с юмором.',
        priceFrom: '750',
        sizes: [
          { label: 'коробка 13×13', price: '750' },
          { label: 'коробка 16×16', price: '1000' },
          { label: 'шляпная d=16', price: '1100' },
          { label: 'шляпная d=18', price: '1400' },
        ],
        flavors: [],
        images: [
          { src: 'assets/images/mushrooms-autumn-basket.jpg', alt: 'Корзина с зефирными грибочками и листьями', tilt: -3, caption: 'лесная сказка' },
          { src: 'assets/images/mushrooms-boletus-pile.jpg', alt: 'Крупный план зефирных боровиков', tilt: 5 },
        ],
        tapeColor: 'rgba(196, 165, 132, 0.7)',
        accent: '#9E8B73',
      },
      {
        id: 'cheesecake',
        num: '05',
        category: 'Десерт',
        title: 'Чизкейки',
        tagline: 'Плотный, сливочный, как обещали',
        description: 'Настоящий домашний чизкейк с характером. Восемь авторских вкусов — от классического «трёх шоколадов» до карамельного сникерса и нежного тирамису.',
        priceFrom: '1200',
        sizes: [
          { label: 'd=16 см', price: '1200' },
          { label: 'd=18 см', price: '1500' },
        ],
        flavors: ['три шоколада', 'сникерс', 'баунти', 'марс', 'твикс', 'милка', 'тирамису', 'брауни'],
        images: [
          { src: 'assets/images/cheesecake-snickers.jpg', alt: 'Шоколадный чизкейк с карамельно-ореховой глазурью', tilt: -2, caption: 'сникерс' },
        ],
        tapeColor: 'rgba(196, 165, 132, 0.7)',
        accent: '#C4A584',
      },
      {
        id: 'bouquets',
        num: '06',
        category: 'Топ',
        title: 'Съедобные букеты',
        tagline: 'Флагман коллекции',
        description: 'Букеты из зефирных цветов — пионы, розы, хризантемы. Корзины, шляпные коробки, свадебные композиции. Работаем на индивидуальный заказ.',
        priceFrom: '3000',
        sizes: [
          { label: 'компактный букет', price: 'от 3000' },
          { label: 'корзина среднего размера', price: 'от 4500' },
          { label: 'свадебный / юбилейный', price: 'по запросу' },
        ],
        flavors: [],
        images: [
          { src: 'assets/images/bouquet-pink-roses-basket.jpg', alt: 'Большая корзина пыльно-розовых роз', tilt: -3, caption: 'флагман' },
          { src: 'assets/images/bouquet-pink-peonies.jpg', alt: 'Букет розовых пионов', tilt: 6 },
        ],
        tapeColor: 'rgba(213, 223, 208, 0.72)',
        accent: '#C49A8F',
      },
    ],
  },

  promos: {
    kicker: 'Сладкие бонусы',
    title: 'С любовью и заботой',
    description: 'Первый заказ — со скидкой. К каждой корзине цветов — коробочка завитков в подарок. Маленькие детали, которые мы любим.',
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
        text: 'Посмотрите коллекцию, определитесь с направлением и бюджетом. Если не уверены — подскажем.',
      },
      {
        num: '02',
        title: 'Напишите',
        text: 'Telegram, WhatsApp или Instagram — как удобно. Уточним состав, размер, дату и адрес доставки.',
      },
      {
        num: '03',
        title: 'Согласуйте',
        text: 'Обсудим оформление, упаковку, открытку. При заказе букета присылаем превью композиции.',
      },
      {
        num: '04',
        title: 'Получите',
        text: 'Доставка по Калининграду или самовывоз. Упакуем так, чтобы сразу можно было вручить.',
      },
    ],
  },

  lookbook: {
    kicker: 'Lookbook',
    title: 'Что мы делали в этом сезоне',
    description: 'Небольшой поток из instagram — без фильтров, как приготовили и отдали.',
    // photos used only here (not referenced elsewhere) to give them a stage
    photos: [
      { src: 'assets/images/zavitki-rainbow-collage.jpg', alt: 'Набор коробок завитков разных цветов' },
      { src: 'assets/images/bouquet-mixed-basket.jpg',    alt: 'Корзина-микс с розами и пионами' },
      { src: 'assets/images/zavitki-verticals.jpg',       alt: 'Вертикальный кадр с завитками' },
      { src: 'assets/images/zavitki-green-purple.jpg',    alt: 'Зелёная и сиреневая коробки' },
      { src: 'assets/images/compliment-mushroom-gifts.jpg', alt: 'Мини-коробки с грибочками и бантами' },
      { src: 'assets/images/bouquet-cream-roses.jpg',     alt: 'Букет кремовых роз' },
      { src: 'assets/images/zavitki-pink-box.jpg',        alt: 'Розовая коробка с завитками' },
      { src: 'assets/images/bouquet-pink-peonies.jpg',    alt: 'Розовые пионы' },
    ],
    ctaLabel: 'Смотреть все работы в Instagram',
    ctaHref: 'https://instagram.com/tt_zefir39',
  },

  faq: {
    kicker: 'Частые вопросы',
    title: 'Что спрашивают чаще всего',
    description: 'Быстрые ответы. Если вопроса нет в списке — напишите в Telegram, ответим живым человеком.',
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
      {
        q: 'Есть ли варианты без сахара или для диабетиков?',
        a: 'Классический зефир на сахаре. По отдельному запросу делаем на фруктозе/эритрите — нужно заказывать заранее (минимум за 3 дня). Скажите при оформлении, если важно.',
      },
      {
        q: 'Что если букет помнётся при доставке?',
        a: 'Упаковываем в жёсткую коробку с фиксацией цветов. За три года таких случаев не было, но если что-то случится — переделаем и пришлём новый бесплатно. Делаем фото каждого букета перед отправкой.',
      },
      {
        q: 'Можно ли на свадьбу или большое мероприятие?',
        a: 'Да, работаем со свадьбами и корпоративами. Нужно обсудить заранее — за 2-3 недели для больших заказов. Согласовываем цветовую гамму, размер, оформление, делаем превью композиции до старта.',
      },
    ],
  },

  map: {
    kicker: 'Где мы',
    title: 'Калининград и доставка по городу',
    description: 'Работаем в Калининграде. Самовывоз по адресу уточняется при оформлении — локация меняется в зависимости от загрузки кухни.',
    yandexEmbed: 'https://yandex.ru/map-widget/v1/?ll=20.507333%2C54.720687&z=11&l=map',
  },

  social: {
    kicker: 'Доверие',
    title: 'Почему к нам возвращаются',
    stats: [
      { big: '3 года', small: 'на рынке Калининграда' },
      { big: '100%', small: 'ручная работа' },
      { big: '0 ₽', small: 'доставка при заказе от 2 000 ₽' },
      { big: '24 ч', small: 'срок изготовления маленьких заказов' },
    ],
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
    description: 'Ответим в течение нескольких часов. Подскажем под повод, бюджет и вкусы — у нас это получается.',
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
    made: 'Сделано с любовью в Калининграде',
  },
};
