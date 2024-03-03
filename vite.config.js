/* eslint-disable no-undef */
import react from '@vitejs/plugin-react';
// import eslintPlugin from 'vite-plugin-eslint'; //re-enable this if you like pain and suffering.
import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
  define: {
    'process.env': process.env,
  },
});
