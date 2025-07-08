// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👉 use your repo name here
const repoName = 'bhabada';

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: [/src\/.*\.js$/, /src\/.*\.jsx$/],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})
