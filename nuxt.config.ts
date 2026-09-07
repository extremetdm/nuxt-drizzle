// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // runtimeConfig: {
  //   databaseUrl: 'postgresql://postgres:P@ssw0rd@localhost:5432/testing'
  // },

  nitro: {

    runtimeConfig: {
      database: {
        url: 'postgresql://postgres:P@ssw0rd@localhost:5432/testing',
      }
    },

    experimental: {
      database: true
    },

    database: {
      default: {
        connector: 'postgresql',
        options: {
          name: "test",
          url: 'postgresql://postgres:P@ssw0rd@localhost:5432/testing'
        }
      }
    }
  },

  modules: ['@nuxtjs/tailwindcss'],
});