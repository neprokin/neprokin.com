// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

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
    drafts: true,
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    },
    remarkPlugins: [
      // Добавим remark-wiki-link после настройки
    ],
    rehypePlugins: [
      // Добавим rehype-highlight после настройки  
    ]
  },
  
  // Vite настройки
  vite: {
    css: {
      devSourcemap: true
    }
  }
});
