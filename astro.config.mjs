// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const base = '/astroDoctor';

export default defineConfig({
  // GitHub Pages: https://ivanwashere.github.io/astroDoctor/
  site: 'https://ivanwashere.github.io',
  base,
  trailingSlash: 'always',
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'de', locales: { de: 'de-DE', en: 'en-GB' } },
      filter: (page) => !page.includes('/kontakt/kontaktformular/'),
    }),
  ],
  build: { inlineStylesheets: 'always' },
  // Alte WordPress-Adressen weiterleiten
  redirects: {
    '/kontakt/kontaktformular/': `${base}/kontakt/#formular`,
    '/ueber-uns/behandlungsspektrum/': `${base}/behandlungsspektrum/`,
  },
});
