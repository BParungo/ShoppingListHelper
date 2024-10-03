import path from "node:path";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: ["shoppingcart.svg"],
      manifest: {
        name: "Shoppinglist Helper",
        short_name: "Shoppinglist Helper",
        description: "A simple shopping list helper",
        theme_color: "#ffffff",
        icons: [
          {
            src: "shoppingcart.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
          {
            src: "shoppingcart.svg",
            sizes: "512x512",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
