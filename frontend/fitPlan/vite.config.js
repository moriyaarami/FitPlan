import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()],
  base: '/FitPlan/',
  build: {
    outDir: '../../gh-pages', // כדי לשים את הקבצים ישירות בענף
    emptyOutDir: true,
  }

})
