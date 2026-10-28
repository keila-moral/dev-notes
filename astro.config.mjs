// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE and BASE_PATH are set by the GitHub Pages workflow. Locally they fall back
// to a user site served from the root.
export default defineConfig({
  site: process.env.SITE ?? 'https://keila-moral.github.io',
  base: process.env.BASE_PATH ?? '/',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
