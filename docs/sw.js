importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nekyoku-note",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.546dd612f44fcf15967f.js",
    "revision": "d639f5c4fb77b039d14381761686e59d"
  },
  {
    "url": "/_nuxt/layouts/default.f23f9ea3c31509c4a79c.js",
    "revision": "199511b38364e09802622e2765126c77"
  },
  {
    "url": "/_nuxt/manifest.3476280bc233231c08f1.js",
    "revision": "8833e4fe0bba7682de1c2bb38f3de2ac"
  },
  {
    "url": "/_nuxt/pages/about.4eb56776c2aa92c42c6e.js",
    "revision": "9c3bb76d071689a65c0d04a2f8ebba0c"
  },
  {
    "url": "/_nuxt/pages/html/basic.e62b636ccbdfccc73b98.js",
    "revision": "3c7cfff4f14fb7499ce5a244eb755a4e"
  },
  {
    "url": "/_nuxt/pages/html/index.ef8a15c4a4ab94402d4f.js",
    "revision": "e21872e77e6ee411de2cf11bba8af09d"
  },
  {
    "url": "/_nuxt/pages/index.f5090d77c5b7e3f9aa34.js",
    "revision": "0cb93f0c8588c75c1190d43bd5c44c52"
  },
  {
    "url": "/_nuxt/pages/test.3c11ab9be450e5f96303.js",
    "revision": "4666507ca8f1202e91397d2877f72fd7"
  },
  {
    "url": "/_nuxt/vendor.3fad48e5fc6b2d8f0e6a.js",
    "revision": "17e2745871a1208f55b6493ef7fb5436"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

