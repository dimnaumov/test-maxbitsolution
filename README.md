Задача:
Реализовать приложение с выводом данных полученных по API.
Пример схематичного интерфейса приложения изображен в app_example.png

Исходные данные:
- Запрещено использовать любого рода boilerplates
- Всю информацию запрашиваем по GET-запросу: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=<cocktail_code>
- Доступные cocktail_code: margarita, mojito, a1, kir
- Из эндпоинта используем все коктейли относящиеся к одному виду. Например: эндпоинт возвращает 4 вида mojito, на странице с данным коктейлем выводим все 4 вида

Функциональные требования:
- Использовать менеджер состояния для сохранения данных и исключения дублирующих запросов
- Учесть обработку ошибок, где это необходимо
- Список кодов (cocktail_code) использовать для названия пунктов меню и формирования url-страниц
- Каждый пункт меню ведет на страницу со своим описанием
- Активный пункт меню должен быть выделен
- По умолчанию первый пункт меню, является главной страницей и использует его же урл
- Переход на url-адрес "/", должен отправлять пользователя на url-первого пункта меню
- При переходе на несуществующую страницу, показать 404 ошибку в произвольной форме
- Резиновая верстка интерфейса. Максимальная ширина 1024px, минимальная 360px
- lazy-loading для загрузки изображений

Нефункциональные требования:
- Масштабируемая архитектура. Код должен быть структурирован таким образом, чтобы его можно было легко расширять и модифицировать.
- Quality Gates (не более 5 штук). Приложение должно содержать набор инструментов необходимых для поддержания качества кода.

Требования по стеку на выбор:
- Typescript + vue 2/3, react + state manager
- webpack, vite
- eslint, prettier
- html 5, css 3
- scss/sass, stylus, less, postCSS
- Адаптивная верстка (chrome, safari)
- unit-testing (опционально)

По окончанию:
- выложить в репозиторий
- развернуть на любом бесплатном хостинге, например Vercel: https://test-maxbitsolution-sooty.vercel.app/

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# yarn
yarn install

# pyarn
pyarn install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn run dev

# pyarn
pyarn dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# yarn
yarn run build

# pyarn
pyarn build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# yarn
yarn run preview

# pyarn
pyarn preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
