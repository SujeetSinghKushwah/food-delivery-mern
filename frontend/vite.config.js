import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // also put tailwind there
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
