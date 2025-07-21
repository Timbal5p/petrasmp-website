// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
       meta: [
      // <meta name="viewport" content="width=device-width, initial-scale=1">
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
     ],
      script: [
      // <script src="https://myawesome-lib.js"></script>
      { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5466155084617223' }
     ]
    }
  }
},
);
