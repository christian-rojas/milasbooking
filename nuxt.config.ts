// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/node_modules/bootstrap/dist/css/bootstrap.min.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  // plugins: [{ src: "~/plugins/bootstrap.js", mode: "client" }],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
        },
        {
          src: "https://assets.calendly.com/assets/external/widget.js",
          type: "text/javascript",
        },
      ],
      link: [{ rel: "stylesheet", href: "https://assets.calendly.com/assets/external/widget.css" }],
    },
  },

  // buildModules: ["@nuxtjs/fontawesome"],

  // fontawesome: {
  //   icons: {
  //     solid: true,
  //     brands: true,
  //   },
  // },
});
