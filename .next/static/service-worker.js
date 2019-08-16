self.__precacheManifest = [
  "/",
  {
    "url": "/_next/static/chunks/0.js",
    "revision": "ef2ae3251b8d971beca9"
  },
  {
    "url": "/_next/static/runtime/amp.js",
    "revision": "fcbd475a3543d624b3b0"
  },
  {
    "url": "/_next/static/runtime/main.js",
    "revision": "0cf636156c814d944253"
  },
  {
    "url": "/_next/static/runtime/webpack.js",
    "revision": "0dc716076a7c9081e3dd"
  },
  {
    "url": "/_next/static/webpack/bcf115a6a60d86aa8acf.hot-update.json",
    "revision": "5db42f516871787420fecab025c4d11e"
  },
  {
    "url": "/_next/static\\development\\dll\\dll_92fa9139568d8c3d8f78.js",
    "revision": "47670ad7e26ca6a3f42d0246cf57cffa"
  },
  {
    "url": "/_next/static\\development\\pages\\_app.js",
    "revision": "1023c4f17ee6ce67694a"
  },
  {
    "url": "/_next/static\\development\\pages\\_error.js",
    "revision": "3d3dae1ce12ed992acfb"
  },
  {
    "url": "/_next/static\\development\\pages\\index.js",
    "revision": "ca914f5074675373fd6c"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"https-calls","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
