import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Clean, stable Vite config for dev preview
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    // Enable HMR and file watching for reliable live preview
    hmr: true,
    cors: {
      origin: '*',
      credentials: true
    },
    allowedHosts: [
      '.modal.host',
      'localhost',
      '127.0.0.1'
    ]
  },
  preview: {
    port: 3000,
    host: '0.0.0.0'
  }
})
