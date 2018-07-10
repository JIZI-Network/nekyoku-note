module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nekyoku-note',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'JIZI-network project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/markdownit','@nuxtjs/pwa'
  ],
  markdownit: {
    preset: 'default',
    linkify: true
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  manifest: {
    name: 'nekyoku-note',
    short_name: 'ne',
    title: 'nekyoku-note',
    'og:title': 'nekyoku-note',
    description: 'written by jizi-nekyoku',
    'og:description': 'written by jizi-nekyoku',
    lang: 'ja',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  }
}
