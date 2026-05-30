import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/bussiundamore/',
  server: {
    port: parseInt(process.env.PORT) || 5173,
  },
})
