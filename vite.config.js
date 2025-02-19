import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true,
  },
  // Ensure all routes redirect to index.html
  preview: {
    port: 5000,
    strictPort: true,
    host: true,
  }
})