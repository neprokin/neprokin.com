// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkWikiLink from 'remark-wiki-link';
import rehypeHighlight from 'rehype-highlight';

// https://astro.build/config
export default defineConfig({
  // Основные настройки
  site: 'https://neprokin.com',
  base: '/',
  
  // Сборка
  outDir: './dist',
  publicDir: './public',
  
  // Разработка
  server: {
    port: 4321,
    host: true
  },
  
  // Интеграции
  integrations: [
    tailwind({
      applyBaseStyles: false, // Используем наши собственные стили
    }),
    mdx(),
  ],
  
  // Markdown настройки
  markdown: {
    // drafts: true, // Не поддерживается в новой версии Astro
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    },
    remarkPlugins: [
      [remarkWikiLink, {
        pageResolver: (name) => [name.replace(/ /g, '-').toLowerCase()],
        hrefTemplate: (permalink) => `/${permalink}`,
        aliasDivider: '|',
        markdownFolder: 'src/content/',
      }],
    ],
    rehypePlugins: [
      rehypeHighlight
    ]
  },
  
  // Vite настройки
  vite: {
    css: {
      devSourcemap: true
    }
  }
});
