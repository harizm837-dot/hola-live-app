const CACHE_NAME = 'hola-live-pro-v1';
const ASSETS = [
  '/',
  '/app.html',
  '/index.html',
  '/offline.html',
  '/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request) || caches.match('/offline.html'))
  );
});
