const CACHE_NAME = 'hola-live-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/store.html',
  '/streamer.html',
  '/profile.html',
  '/vip.html',
  '/moderator.html',
  '/manifest.json'
  // Хэрэв танд CSS эсвэл JS файлууд тусдаа байгаа бол энд замыг нь нэмээрэй
];

// 1. Install Service Worker & Cache Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Кэш үүсгэж байна...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. Activate & Cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Хуучин кэшийг устгаж байна...');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// 3. Fetch assets from cache or network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
