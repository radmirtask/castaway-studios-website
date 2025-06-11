// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: netlify({
    edge: true,
    include: ['**/*'],
    exclude: ['**/*.{png,jpg,jpeg,gif,svg,webp,ico,woff,woff2,eot,ttf,otf,webmanifest,xml,json,txt,csv,doc,docx,xls,xlsx,ppt,pptx,zip,tar,gz,bz2,rar,7z,pdf}'],
    functionsDir: './functions'
  })
});