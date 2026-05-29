const CACHE_NAME = 'tarot-pwa-v6'; // 更新版本號

// 1. 安裝時快取基本檔案
self.addEventListener('install', event => {
    self.skipWaiting(); // 強制立即接管控制權
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

// 2. 啟動時清除舊版本的快取 (重要更新！)
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // 如果快取的名稱跟現在的版本不同，就把它刪掉
                    if (cacheName !== CACHE_NAME) {
                        console.log('清除舊快取:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// 3. 攔截請求 (採用 Network First, 失敗才用 Cache)
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(networkResponse => {
                // 如果網路有通，就把抓到的新檔案存進快取
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            })
            .catch(() => {
                // 如果沒網路，才退回去用快取的舊檔案
                return caches.match(event.request);
            })
    );
});