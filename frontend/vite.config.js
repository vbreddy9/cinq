import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // Vercel expects the build output here
  },
  base: './' // ensures relative paths for assets in production
});
