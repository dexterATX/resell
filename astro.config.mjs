import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://skyresell.example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
