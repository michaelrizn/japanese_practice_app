# Japanese Practice App

Веб-приложение для изучения японского языка с упражнениями по хирагане, катакане и фразам.

## Описание проекта

Japanese Practice App - это интерактивное приложение для изучения основ японской письменности. Приложение включает в себя:

### Упражнения:
- **Хирагана** - изучение основной японской слоговой азбуки
- **Катакана** - изучение слоговой азбуки для заимствованных слов
- **Хирагана + Катакана** - смешанные упражнения
- **Практика фраз** - изучение готовых фраз на японском языке

### Возможности:
- Адаптивный дизайн для всех устройств
- Настройка размера шрифта
- Темная тема интерфейса
- Сохранение прогресса в локальном хранилище
- Поддержка PWA (Progressive Web App)

### Технологии:
- Vanilla JavaScript (без фреймворков)
- CSS3 с CSS-переменными
- HTML5
- Service Worker для PWA
- Локальное хранилище для настроек

## Развертывание на GitHub Pages

1. Загрузите все файлы в репозиторий GitHub
2. Включите GitHub Pages в настройках репозитория
3. Выберите ветку для развертывания (обычно `main` или `gh-pages`)
4. Приложение будет доступно по адресу: `https://username.github.io/repository-name/`

# PWA (Progressive Web App)

Приложение поддерживает технологию PWA, что позволяет использовать его как нативное приложение.

## Возможности PWA

- ✅ **Офлайн работа** - работает без интернета после первой загрузки
- ✅ **Установка** - устанавливается как нативное приложение
- ✅ **Адаптивность** - оптимизировано для мобильных устройств
- ✅ **Кэширование** - быстрая загрузка благодаря кэшированию ресурсов
- ✅ **Уведомления** - поддержка push-уведомлений (при необходимости)

## Установка как PWA

### На мобильных устройствах:
- **Android (Chrome)**: Откройте меню браузера → "Добавить на главный экран"
- **iOS (Safari)**: Нажмите кнопку "Поделиться" → "На экран Домой"

### На десктопе:
- **Chrome/Edge**: Нажмите иконку установки в адресной строке
- **Firefox**: Откройте меню → "Установить это приложение"

## Файлы PWA

- `manifest.json` - манифест приложения с метаданными и настройками
- `sw.js` - Service Worker для кэширования и офлайн работы
- `icons/` - иконки приложения в масштабируемом SVG формате
- `.nojekyll` - файл для корректной работы с GitHub Pages

## Локальное тестирование

### Простой запуск (без сервера):
Проект может работать локально без веб-сервера - просто откройте файл `index.html` в браузере.

**Примечание:** При запуске без сервера PWA функции (Service Worker, установка приложения) работать не будут из-за ограничений безопасности браузеров.

### Запуск с локальным сервером (для полной функциональности PWA):
```bash
# Запуск локального сервера
python3 -m http.server 8000

# Откройте http://localhost:8000 в браузере
```

Или используйте любой другой локальный сервер:
```bash
# Node.js
npx serve .

# PHP
php -S localhost:8000
```

## Особенности совместимости с GitHub Pages

- Все пути в манифесте и service worker используют относительные ссылки
- Файл `.nojekyll` предотвращает обработку Jekyll
- SVG иконки обеспечивают малый размер и масштабируемость
- Service Worker кэширует все необходимые ресурсы для офлайн работы

---

# Japanese Practice App (English)

A web application for learning Japanese with exercises for hiragana, katakana, and phrases.

## Project Description

Japanese Practice App is an interactive application for learning the basics of Japanese writing. The application includes:

### Exercises:
- **Hiragana** - learning the main Japanese syllabic alphabet
- **Katakana** - learning the syllabic alphabet for borrowed words
- **Hiragana + Katakana** - mixed exercises
- **Phrase Practice** - learning ready-made phrases in Japanese

### Features:
- Responsive design for all devices
- Font size adjustment
- Dark theme interface
- Progress saving in local storage
- PWA (Progressive Web App) support

### Technologies:
- Vanilla JavaScript (no frameworks)
- CSS3 with CSS variables
- HTML5
- Service Worker for PWA
- Local storage for settings

## GitHub Pages Deployment

1. Upload all files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select a branch for deployment (usually `main` or `gh-pages`)
4. The application will be available at: `https://username.github.io/repository-name/`

# PWA (Progressive Web App)

The application supports PWA technology, allowing it to be used as a native application.

## PWA Features

- ✅ **Offline work** - works without internet after first load
- ✅ **Installation** - installs as a native application
- ✅ **Responsiveness** - optimized for mobile devices
- ✅ **Caching** - fast loading thanks to resource caching
- ✅ **Notifications** - push notification support (if needed)

## Installing as PWA

### On mobile devices:
- **Android (Chrome)**: Open browser menu → "Add to Home screen"
- **iOS (Safari)**: Tap "Share" button → "Add to Home Screen"

### On desktop:
- **Chrome/Edge**: Click the install icon in the address bar
- **Firefox**: Open menu → "Install this app"

## PWA Files

- `manifest.json` - application manifest with metadata and settings
- `sw.js` - Service Worker for caching and offline work
- `icons/` - application icons in scalable SVG format
- `.nojekyll` - file for correct GitHub Pages operation

## Local Testing

### Simple launch (without server):
The project can work locally without a web server - just open the `index.html` file in a browser.

**Note:** When running without a server, PWA functions (Service Worker, app installation) will not work due to browser security restrictions.

### Launch with local server (for full PWA functionality):
```bash
# Start local server
python3 -m http.server 8000

# Open http://localhost:8000 in browser
```

Or use any other local server:
```bash
# Node.js
npx serve .

# PHP
php -S localhost:8000
```

## GitHub Pages Compatibility Features

- All paths in manifest and service worker use relative links
- `.nojekyll` file prevents Jekyll processing
- SVG icons provide small size and scalability
- Service Worker caches all necessary resources for offline work