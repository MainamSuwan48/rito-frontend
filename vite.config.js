
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import { defineConfig } from "vite"
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin({ fix: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/',
  define: {
    'process.env': process.env,
  },
});
