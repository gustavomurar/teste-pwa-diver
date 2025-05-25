const CACHE_NAME = 'divertidamente-cache-v1';
const urlsToCache = [
  '/home2.html',
  '/carrinho.html',
  '/favoritos.html',
  '/style.css',
  '/carrinho.css',
  '/script.js',
  '/carrinho.js',
  '/favoritos.js',
  '/pwa-192x192.png',
  '/pwa-512x512.png',
  '/apple-touch-icon.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
