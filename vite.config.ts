import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "../www",
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "~modules": "../node_modules",
      "@": "/src"
    }
  },
  plugins: [vue()],
})
