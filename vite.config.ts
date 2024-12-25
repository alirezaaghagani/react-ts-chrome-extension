import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: "./index.html",
        background: "src/background/background.ts",
        content: "src/content/content.ts",
      },
      output: {
        entryFileNames: "[name]/[name].js",
        chunkFileNames: "[name]/[name].js",
        assetFileNames: "[name]/[name].[ext]",
      },
    },
  },
});
