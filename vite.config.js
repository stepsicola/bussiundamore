import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/bussiundamore/',
  build: {
    rollupOptions: {
      // Zwei Einstiegspunkte: Startseite und Kartenseite unter /karte/.
      // Kein Router nötig, damit auch kein 404-Fallback auf GitHub Pages.
      input: {
        main: 'index.html',
        karte: 'karte/index.html',
      },
      output: {
        // Ohne das benennt Rollup den geteilten Chunk (und damit das CSS)
        // nach einem beliebigen Modul.
        manualChunks: (id) => (id.includes('node_modules') ? 'vendor' : undefined),
        assetFileNames: (asset) => {
          const name = asset.names?.[0] ?? asset.name ?? '';
          return name.endsWith('.css')
            ? 'assets/bussi-[hash][extname]'
            : 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  server: {
    port: parseInt(process.env.PORT) || 5173,
  },
})
