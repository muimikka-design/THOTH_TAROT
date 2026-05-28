const CACHE_NAME = 'tarot-pwa-v1';

// 首次安裝時，先快取基礎檔案
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                './',
                './index.html',
                './manifest.json'
            ]);
        })
    );
});

// 當網頁發出請求（例如抓取圖檔或音樂）時，攔截並處理
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            // 如果快取裡有這個檔案，就直接從手機給檔案 (離線可用)
            if (cachedResponse) {
                return cachedResponse;
            }
            // 如果快取沒有，就透過網路抓取，抓到後順便存進快取裡
            return fetch(event.request).then(networkResponse => {
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            });
        })
    );
});