import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base removed for custom domain
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 5173,
    host: true,
    fs: {
      strict: false
    },
    hmr: {
      overlay: true
    }
  },
  optimizeDeps: {
    force: true,
    include: []
  },
  clearScreen: false,
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})