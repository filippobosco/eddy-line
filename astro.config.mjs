// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Landing paid: niente indicizzazione, niente sitemap.
  output: 'static',
  adapter: vercel(),
  site: 'https://prenota.eddyline.it',
  vite: {
    plugins: [tailwindcss()],
  },
});
