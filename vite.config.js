import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Asegura que las rutas se manejen correctamente en producción
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
  build: {
    outDir: 'dist',
  },
});
