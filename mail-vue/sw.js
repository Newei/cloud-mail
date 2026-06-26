const CACHE_NAME = 'dsmail-v1';

// 激活时清理旧缓存
self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

// 拦截请求（满足 PWA 离线/安装的最低要求）
self.addEventListener('fetch', event => {
  // 仅做透传，确保 Worker 项目的动态 API 不受本地死缓存影响
  event.respondWith(fetch(event.request));
});
