import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
    // Adjusted the base option with the correct repository name
    build: {
      outDir: 'dist',
      assetsDir: '',
      assetsInlineLimit: 0,
      sourcemap: false,
      minify: 'terser', // You can change this to 'esbuild' for faster minification
    },
});
