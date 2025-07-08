// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: [
      // Include ALL .js files in src folder for JSX processing
      /src\/.*\.js$/,
      /src\/.*\.jsx$/,
    ],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})