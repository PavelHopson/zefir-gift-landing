# Вся в зефире

Сайт-витрина домашней кондитерской `«Вся в зефире»`.

Теперь это не одна карточка, а полноценный одностраничный сайт со структурой:

- брендовый hero
- блок коллекций
- галерея работ
- спецпредложения
- преимущества
- сценарий заказа
- контактный финальный блок

## Структура

```text
zefir-gift-landing/
├── assets/
│   ├── icons/
│   │   └── qr-placeholder.svg
│   └── images/
│       ├── hero-box-crop.jpg
│       ├── hero-box-reference.jpg
│       ├── secondary-reference.png
│       ├── work-box-1.jpg
│       ├── work-box-2.jpg
│       ├── work-bouquet-1.jpg
│       ├── work-bouquet-2.jpg
│       ├── work-bouquet-3.jpg
│       └── work-detail-1.jpg
├── scripts/
│   ├── app.js
│   └── content.js
├── styles/
│   └── main.css
├── index.html
└── README.md
```

## Где менять контент

Все тексты, ссылки, названия секций и галерея вынесены в:

- [content.js](/E:/projects/zefir-gift-landing/scripts/content.js)

Основные блоки:

- `brand` — название и подпись бренда
- `nav` — пункты меню
- `hero` — первый экран
- `promos` — спецпредложения
- `collections` — основные направления
- `works` — галерея работ
- `benefits` — преимущества
- `process` — шаги заказа
- `contact` — финальный контактный блок
- `qr` — подпись к QR
- `assets` — главная картинка и QR

## Где менять галерею работ

В [content.js](/E:/projects/zefir-gift-landing/scripts/content.js) ищи `works.items`.

У каждой работы есть:

- `title`
- `tag`
- `note`
- `image`
- `alt`
- `tone`

`tone` управляет размером карточки в сетке:

- `large`
- `square`
- `portrait`
- `poster`
- `placeholder`

## Где менять фото

Сейчас для витрины используются изображения из:

- [assets/images](/E:/projects/zefir-gift-landing/assets/images)

Можно:

1. Заменить существующие файлы
2. Или поменять пути в `works.items[].image`
3. И отдельно поменять главный hero-image в `assets.heroImage`

## Где менять телефон и Telegram

В [content.js](/E:/projects/zefir-gift-landing/scripts/content.js):

- `contact.telegram`
- `contact.telegramUrl`
- `contact.phone`
- `contact.phoneHref`

## Где менять цвета и стили

Все основные переменные лежат в начале:

- [main.css](/E:/projects/zefir-gift-landing/styles/main.css)

В `:root` вынесены:

- цвета
- тени
- радиусы
- контейнер
- шрифты
- переходы

## Где менять структуру секций

Главная разметка:

- [index.html](/E:/projects/zefir-gift-landing/index.html)

Логика рендера секций:

- [app.js](/E:/projects/zefir-gift-landing/scripts/app.js)

## Как открыть

Проект статический, без сборщика.

Можно:

1. Открыть `index.html` в браузере
2. Или поднять любой простой local static server
