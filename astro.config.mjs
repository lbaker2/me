// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lbaker.dev',
  // Static output is the simplest and best fit for a portfolio site.
  // Swap to the @astrojs/vercel adapter only if server-rendered routes are needed.
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
