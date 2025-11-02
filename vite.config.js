import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: "https://karoline-sol.github.io/Codecaddy/docs",
  build: {
    outDir: 'docs',
    emptyOutDir: true, // also necessary
  }
})