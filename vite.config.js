import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/public/dist/',
  publicDir: false,

  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': resolve(__dirname, 'frontend')
    }
  },

  server: {
    port: 5173,
    strictPort: true
  },

  build: {
    outDir: 'public/dist',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        // Main layout entry (required for all pages)
        layout: resolve(__dirname, 'frontend/entries/layout.js'),
        home: resolve(__dirname, 'frontend/entries/home.js'),
   
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})