# Zefir Gift Landing

Нежный адаптивный landing page для домашнего зефира в подарочном стиле.

## Структура

```text
zefir-gift-landing/
├── assets/
│   ├── icons/
│   │   └── qr-placeholder.svg
│   └── images/
│       ├── hero-box-reference.jpg
│       └── secondary-reference.png
├── scripts/
│   ├── app.js
│   └── content.js
├── styles/
│   └── main.css
├── index.html
└── README.md
```

## Где менять контент

Все основные тексты, контакты и пути к изображениям вынесены в:

- [scripts/content.js](/E:/projects/zefir-gift-landing/scripts/content.js)

Ищи такие блоки:

- `hero` — главный заголовок и описание
- `promos` — карточки со скидкой и подарком
- `compliment` — блок "Наш сладкий комплимент"
- `qr` — подписи QR-блока
- `benefits` — три преимущества
- `contact` — Telegram, телефон, подпись
- `assets` — пути к фото и QR

## Где менять телефон и Telegram

В [scripts/content.js](/E:/projects/zefir-gift-landing/scripts/content.js):

- `contact.telegram`
- `contact.telegramUrl`
- `contact.phone`
- `contact.phoneHref`

## Где менять изображение коробки

Есть два варианта:

1. Заменить файл:
   - [hero-box-reference.jpg](/E:/projects/zefir-gift-landing/assets/images/hero-box-reference.jpg)
2. Или поменять путь в:
   - `assets.heroImage` в [scripts/content.js](/E:/projects/zefir-gift-landing/scripts/content.js)

## Где менять QR-код

По умолчанию используется заглушка:

- [qr-placeholder.svg](/E:/projects/zefir-gift-landing/assets/icons/qr-placeholder.svg)

Чтобы поставить настоящий QR-код:

1. Положи свой файл в `assets/icons/` или `assets/images/`
2. Укажи путь в `assets.qrCode` в [scripts/content.js](/E:/projects/zefir-gift-landing/scripts/content.js)

Если `assets.qrCode` пустой, автоматически используется заглушка.

## Где менять цвета, радиусы, тени и размеры

Все дизайн-переменные находятся в самом начале:

- [styles/main.css](/E:/projects/zefir-gift-landing/styles/main.css)

Ищи блок `:root`, в нем вынесены:

- цвета
- тени
- радиусы
- контейнер
- шрифты
- transition

## Где менять композицию секций

Основная HTML-структура находится в:

- [index.html](/E:/projects/zefir-gift-landing/index.html)

Стили композиции и адаптива:

- [styles/main.css](/E:/projects/zefir-gift-landing/styles/main.css)

## Как открыть

Это статический проект без сборщика.

Можно:

1. Просто открыть `index.html` в браузере
2. Или поднять любой простой локальный static server

## Что уже сделано

- адаптив desktop / tablet / mobile
- мягкая pastel premium-палитра
- отдельные секции под акцию, подарок, комплимент, QR и контакты
- переменные для дизайна
- лёгкие hover-эффекты
- деликатные reveal-анимации без тяжёлых библиотек
- отдельные placeholder assets
