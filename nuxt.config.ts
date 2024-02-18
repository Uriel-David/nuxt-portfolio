import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Software Engineer Portfolio | Uriel David",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content:
            "Personal Portfolio Website. Hi, Uriel David. I'm a Software Engineer based in Porto, Portugal. Currently focused on developing website/products using PHP/Laravel - Vue/React. Checkout my projects and github repositories",
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "author", content: "Uriel David" },
        {
          name: "keywords",
          content:
            "Web Developer, Full Stack Developer, Full-Stack Developer, Software Engineer, Senior Software Developer, Uriel David, Uriel, zinrax, Portugal",
        },
        // social meta tags
        {
          property: "og:site_name",
          content: "Software Engineer Portfolio | Uriel David",
        },
        {
          property: "og:site",
          content: "https://www.eazypau.com/",
        },
        {
          property: "og:title",
          content: "Software Engineer Portfolio | Uriel David",
        },
        {
          property: "og:description",
          content:
            "Personal Portfolio Website. Hi, Uriel David. I'm a Software Engineer based in Porto, Portugal. Currently focused on developing website/products using PHP/Laravel - Vue/React. Checkout my projects and github repositories",
        },
        // sharing thumbmail img
        {
          property: "og:image",
          content: "https://www.uriel-portfolio.com/favicon-bw.png", ///favicon-wb.png
        },
        // google site verification - TO DO
        /* {
          name: "google-site-verification",
          content: "",
        }, */
      ],
      link: [{ rel: "icon", href: "/favicon-bw.png" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  /** @type {import('tailwindcss').Config} */
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
  },
  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },
  runtimeConfig: {
    public: {
      NUXT_GTM_ID: process.env.NUXT_GTM_ID,
    },
  },
});
