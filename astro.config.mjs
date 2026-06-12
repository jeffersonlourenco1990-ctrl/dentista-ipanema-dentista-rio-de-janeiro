import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://dentista-ipanema-dentista-rio-de-janeiro.netlify.app',
  output: 'static',
  devToolbar: { enabled: false },
});
