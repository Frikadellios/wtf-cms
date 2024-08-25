import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss'
    }
  },
  site: 'https://example.com',
  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: true
  },
  integrations: [react(), mdx()],
  output: 'hybrid'
})
