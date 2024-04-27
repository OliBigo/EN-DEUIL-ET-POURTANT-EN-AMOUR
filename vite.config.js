import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/EN-DEUIL-ET-POURTANT-EN-AMOUR/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": __dirname,
    },
  },
  assetsInclude: ["**/*.epub"],
  build: {
    rollupOptions: {
      input: {
        main: "@/index.html",
        comments: "@/commentaires/index.html",
      },
    },
  },
});