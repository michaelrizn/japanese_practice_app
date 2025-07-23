const CACHE_NAME = 'japanese-practice-v5';
const urlsToCache = [
  './',
  './index.html',
  './app.js',
  './pwa-updater.js',
  './common.js',
  './style.css',
  './manifest.json',
  './exercises/hiragana/hiragana.html',
  './exercises/hiragana/hiragana.js',
  './exercises/hiragana/app.js',
  './exercises/katakana/katakana.html',
  './exercises/katakana/katakana.js',
  './exercises/katakana/app.js',
  './exercises/hiraganaandkatakana/hiraganaandkatakana.html',
  './exercises/hiraganaandkatakana/hiraganaandkatakana.js',
  './exercises/hiraganaandkatakana/app.js',
  './exercises/phrase_practice/phrase_practice.html',
  './exercises/phrase_practice/app.js',
  './exercises/phrase_practice/data/hiragana_phrases_01.js',
  './exercises/phrase_practice/data/kanji_phrases_01.js',
  './exercises/phrase_practice/data/katakana_phrases_01.js',
  './exercises/transliteration/transliteration.html',
  './exercises/transliteration/app.js',
  './exercises/transliteration/transliteration.js',
  './exercises/transliteration/data/kanji_n5.js',
  './exercises/transliteration/data/kanji_n4.js',
  './icons/icon-192.svg',
  './icons/icon-512.svg'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', event => {
  self.clients.claim();
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});