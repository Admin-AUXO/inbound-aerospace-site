import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://inboundaerospace.com',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [sitemap({ filter: (page) => !/\/(404|privacy-policy|terms-of-service)\//.test(page) })]
});
