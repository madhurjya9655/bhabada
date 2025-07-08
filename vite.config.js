// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace this with your actual GitHub Pages repo name
const repoName = 'bhabada'

export default defineConfig(({ mode }) => ({
  // In dev, serve at '/', in prod serve under '/bhabada/'
  base: mode === 'production' ? `/${repoName}/` : '/',

  plugins: [react()],

  esbuild: {
    loader: "jsx",
    include: [
      /src\/.*\.js$/,
      /src\/.*\.jsx$/
    ],
  },

  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
}))
