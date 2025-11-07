import { defineNuxtConfig } from "nuxt"

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss"],

  // Static site generation configuration
  ssr: false,

  app: {
    head: {
      title: "Project 1",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Building a Secure and Scalable VPC Architecture" },
      ],
    },
  },

  // Ensure static generation
  nitro: {
    preset: "static",
  },
})
