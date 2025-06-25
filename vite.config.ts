import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    target: 'es2015', // Chrome 90+ support
    cssTarget: 'chrome90',
  },
  css: {
    postcss: './postcss.config.js',
  },
});