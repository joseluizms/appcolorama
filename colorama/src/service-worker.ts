/// <reference lib="webworker" />

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope & typeof globalThis;

const CACHE_NAME = "meu-app-cache-v1";

clientsClaim();
precacheAndRoute(self.__WB_MANIFEST);

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  ({ request, url }: { request: Request; url: URL }) => {
    if (request.mode !== 'navigate' || url.pathname.startsWith('/_') || url.pathname.match(fileExtensionRegexp)) {
      return false;
    }
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

registerRoute(
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [new ExpirationPlugin({ maxEntries: 50 })],
  })
);

self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
      caches.open(CACHE_NAME)
          .then((cache) => {
              return cache.addAll([
                  '/',
                  '/index.html',
                  // Aqui, você deve adicionar os arquivos específicos que deseja armazenar em cache.
                  '/static/js/main.js',
                  '/static/media/logo.png',
                  // Adicione outros caminhos específicos conforme necessário.
              ]);
          })
  );
});

self.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
      caches.match(event.request)
          .then((response) => {
              if (response) {
                  return response;  // Se existir no cache, retorna o cache
              }
              return fetch(event.request);
          })
  );
});
