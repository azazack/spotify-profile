export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'spotify-profile',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  modules: ['@nuxtjs/axios'],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '@/assets/bootstrap/myAsset.scss', lang: 'sass' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  plugins: [
    { src: '~/plugins/persistedState.client.ts' },
    { src: '~/plugins/axios.ts' },
  ],

  // router: {
  //   middleware: ['isLogged'],
  // },

  publicRuntimeConfig: {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
  },
}
