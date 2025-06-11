// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: netlify(),           // ← defaults to `.netlify/functions/`
  // optional: if you still want `/` → `/home` at build time:
  redirects: {
    '/': '/home',
  },
});
