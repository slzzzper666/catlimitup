// 離線快取：App 本體與貓咪素材都存起來，沒網路也能做影片
const CACHE = 'catlimitup-v4';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'assets/cats.mp4', 'assets/icon-192.png', 'assets/icon-512.png', 'assets/apple-touch-icon.png', 'assets/cat_dance.webp'];
self.addEventListener('install', (e) => e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES))));
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))));
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || e.request.headers.has('range')) return;   // 影片的分段請求交給網路，避免 iOS 播放卡住
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
