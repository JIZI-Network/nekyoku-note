importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nekyoku-note",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.be51a5b05ab128cf4cf1.js",
    "revision": "5551ca74111af47bdf9ae713988af91f"
  },
  {
    "url": "/_nuxt/layouts/default.fb674e02ec3a3684bc18.js",
    "revision": "30d248a34d19987a7bb7b9a2ecf8943a"
  },
  {
    "url": "/_nuxt/manifest.9e232af34ddb9b44a3c3.js",
    "revision": "1cde29982783735265c13e4dd6e4579d"
  },
  {
    "url": "/_nuxt/pages/about.5893133c23a9d6a7c9ca.js",
    "revision": "2a7e40b41d446d3518d8e819c674add8"
  },
  {
    "url": "/_nuxt/pages/index.0769adf1b39277117afe.js",
    "revision": "e0778bcfc2485f99163e77d022225595"
  },
  {
    "url": "/_nuxt/pages/test.76c9849c664a6623a743.js",
    "revision": "63803f2fb0fb2d6168fe42dc1ebd3f1e"
  },
  {
    "url": "/_nuxt/vendor.59b19566eedd1ad39b9f.js",
    "revision": "1a9eb16b9bcabf84a8c342b4b4dd87bc"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

