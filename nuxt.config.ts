// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  css: ["/layouts/global.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@zadigetvoltaire/nuxt-gtm",
  ],
  plugins: ["~/plugins/iconify.ts"],
  gtm: {
    id: "GTM-TSW84BGD",
    defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
    compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    debug: true, // Whether or not display console logs debugs (optional)
    trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
    devtools: true, // (optional)
  },
  runtimeConfig: {
    public: {
      gtm: {
        id: "GTM-TSW84BGD",
        pageTracking: true,
        defer: false,
        compatibility: false,
        enabled: true,
        debug: true,
        loadScript: true,
        trackOnNextTick: false,
        devtools: true,
      },
    },
  },
});
