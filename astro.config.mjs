// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
// import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: `https://${process.env.SITE}`,
  // adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  trailingSlash: 'never',
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'UncutSans',
      cssVariable: '--font-uncut-sans',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/uncut.woff2'],
            weight: '200 900',
            style: 'normal',
            variationSettings: '"ital" 0',
          },
          {
            src: ['./src/assets/fonts/uncut.woff2'],
            weight: '200 900',
            style: 'italic',
            variationSettings: '"ital" 11',
          },
        ],
      },
    },
  ],
  integrations: [icon(), sitemap()],
});
