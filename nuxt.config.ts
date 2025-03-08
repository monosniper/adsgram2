export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/scss/global.scss", "aos/dist/aos.css"],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-96x96.png",
          sizes: "96x96",
        },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  vite: {
    css: {
      devSourcemap: false,
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
  modules: ["nuxt-i18n-micro"],
  i18n: {
    locales: [
      { code: "ru", iso: "ru-RU", dir: "ltr" },
    ],
    defaultLocale: "ru",
    translationDir: "locales",
    meta: true,
  },
});
