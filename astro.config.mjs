import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import Unocss from "unocss/astro";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [ mdx(), sitemap(), Unocss({
    injectReset: true,
  })],
  output: "server",
  adapter: cloudflare()
});