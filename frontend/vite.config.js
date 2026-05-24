import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),],
  server: {
    // here was the problem(no fixed port — frontend must always be 5173 for FRONTEND_URL in .env to work)
    port: 5173,
  }
})
