import { resolve } from 'path';
import { defineConfig } from 'vite';
import htmlPurge from 'vite-plugin-purgecss';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  plugins: [htmlPurge],
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      // input: {},
    },
  },
});
