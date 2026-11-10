import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  
  // Local Development runs on "/" and Production (GitHub Pages) runs on "/my-blog/"
  base: mode === "development" ? "/" : "/my-blog/", 

  esbuild: {
    legalComments: "none", // Removes unnecessary legal comments
  },

  build: {
    minify: "esbuild", // Optimized build using esbuild for Vite v5+
    terserOptions: {
      compress: {
        drop_console: true, // Automatically removes console.log in production
        drop_debugger: true, // Automatically removes debugger statements
      },
    },
  },

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Sets up '@/' alias for cleaner imports from 'src' folder
    },
  },
}));