import { fileURLToPath, URL } from 'node:url'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite'
import { ViteImageOptimizerOptions } from './config.js'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteImageOptimizer(ViteImageOptimizerOptions),
  ],
  resolve: {
    alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
      rollupOptions: {
          output: {
              manualChunks: () => 'main.js'
          }
      }
  }
})
