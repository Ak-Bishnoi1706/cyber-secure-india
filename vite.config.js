import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/cyber-secure-india/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@Security': path.resolve(__dirname, './src/components/Security'),
      '@Awareness': path.resolve(__dirname, './src/components/Awareness'),
      '@styles': path.resolve(__dirname, './src/styles'),
    }
  }
})
