// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
 // 1. Tell Astro to output a server bundle for Netlify Functions
 output: 'server',

 // 2. Use the Netlify adapter
 adapter: netlify(),

  integrations: [
    react(),
    tailwind(),
  ],
});