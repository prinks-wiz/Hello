import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://prinks-wiz.github.io',
  integrations: [
    // applyBaseStyles: false so global.css owns the @tailwind directives
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap(),
  ],
  output: 'static',
});
