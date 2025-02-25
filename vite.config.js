import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [imagetools()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  }
});
