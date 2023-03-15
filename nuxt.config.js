import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - HNFPRO',
    title: 'HNFPRO',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    // '~/assets/variables.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/notifier.js', mode: 'client'}
  ],

  router: {
    middleware: [
      'security'
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL || '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake:  true,
    theme: {
      dark: true,
      themes: {
        light: {
          primary:    '#99dad4', // Breaker Bay
          secondary:  '#FFA17A', //
          accent:     colors.grey.darken3,
          info:       '#16161C', // Shark
          success:    '#54ad69', // Fruit Salad
          warning:    '#d7a02a', // Hokey-Pokey
          error:      '#f44336', // Pomegranate
        },
        dark: {
          primary:    colors.teal.darken2,
          secondary:  '#FFA17A',
          accent:     colors.grey.darken3,
          info:       colors.lightBlue.darken2,
          success:    '#389f58', // Chateau Green
          warning:    '#b58f20',  // colors.amber.base,
          error:      '#F44336', // colors.deepOrange.accent4,
          background: '#18171F'
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Server run as middleware
  serverMiddleware: [
    // { path: "/test", handler: "~/api/rest.js" },
    '~/api/index.js'
  ],
}
