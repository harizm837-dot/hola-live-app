const CACHE_NAME = 'hola-live-cache-v2'; // Хувилбарыг v2 болголоо
const URLS = [
  '/',
  '/index.html',
  '/app.html',
  '/pages/live.html',
  '/assets/css/reset.css',
  '/assets/css/layout.css',
  '/assets/js/core/state.js',
  '/assets/js/core/router.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap' // Фонтыг кэшлэх
];

// Install: Апп-ын файлуудыг кэшлэх
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('PWA: Файлуудыг кэшлэж байна...');
        return cache.addAll(URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate: Хуучин кэшийг цэвэрлэх
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.map(key => {
        if(key !== CACHE_NAME) {
          console.log('PWA: Хуучин кэш устгагдлаа:', key);
          return caches.delete(key);
        }
      }))
    ).then(() => self.clients.claim()) // Бүх цонхыг шууд хяналтандаа авах
  );
});

// Fetch: Ухаалаг хайлт (Network First for Dynamic, Cache First for Static)
self.addEventListener('fetch', event => {
  // Зөвхөн GET хүсэлтүүдийг кэшлэнэ
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // Сүлжээ хэвийн бол шинэ датаг кэш рүү хуулж авна
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      })
      .catch(() => {
        // Сүлжээ тасарсан үед кэшээс хайх
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) return cachedResponse;
          
          // Хэрэв кэшинд ч байхгүй бол (жишээ нь шинэ зураг)
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
      })
  );
});
