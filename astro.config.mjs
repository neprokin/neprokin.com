// @ts-check
// =============================================================================
// Astro Configuration — neprokin.com
// =============================================================================
//
// Основные интеграции:
// - Tailwind CSS — утилитарные стили
// - MDX — расширенный Markdown
// - astro-typograf — автоматическая типографика (RU/EN)
//
// Типографика:
// - Используем astro-typograf для всего контента
// - htmlEntity: 'digit' — возвращает &#160; вместо Unicode
// - Браузер корректно отображает HTML-сущности
//
// ⚠️ ИЗВЕСТНЫЙ БАГ typograf v7.6.0:
// - htmlEntity: { type: 'utf' } возвращает 'undefined' вместо символов
// - Поэтому используем type: 'digit'
//
// =============================================================================

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkWikiLink from 'remark-wiki-link';
import rehypeHighlight from 'rehype-highlight';
import typograf from 'astro-typograf';
// remark-typograf отключён — astro-typograf справляется со всем контентом
// import remarkTypograf from './src/plugins/remark-typograf.mjs';

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
    typograf({
      // Обрабатываем текстовые элементы, КРОМЕ Markdown-контента
      selector: '*',
      // Исключаем:
      // - pre, code, script, style, textarea, input — технические элементы
      // - title — заголовок страницы
      // - .prose, .post-body, .post-content, article — Markdown обрабатывается remark-typograf
      ignore: ['pre', 'code', 'script', 'style', 'textarea', 'input', 'title', 'article', '.prose', '.post-body', '.post-content'],
      typografOptions: {
        locale: ['ru', 'en-US'],
        // Используем 'digit' и конвертируем в браузере, т.к. 'utf'/'name' могут ломаться
        htmlEntity: { type: 'digit' },
      },
      typografSettings: {
        'common/nbsp/afterShortWord': { lengthShortWord: 3 },
        'common/nbsp/beforeShortLastWord': { lengthShortWord: 3 },
        'en/nbsp/beforeShortLastWord': { lengthShortWord: 3 },
        'common/nbsp/beforeShortWord': { lengthShortWord: 3 },
      },
    }),
  ],
  
  // ---------------------------------------------------------------------------
  // Markdown настройки
  // ---------------------------------------------------------------------------
  // remarkPlugins — обрабатывают Markdown AST (до преобразования в HTML)
  // rehypePlugins — обрабатывают HTML AST (после преобразования)
  // ---------------------------------------------------------------------------
  markdown: {
    smartypants: false, // Отключаем — используем Typograf для типографики
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    },
    remarkPlugins: [
      // ВРЕМЕННО ОТКЛЮЧЕНО: remarkTypograf — проблема с undefined
      // remarkTypograf,
      // Поддержка Wiki-ссылок в стиле Obsidian: [[page]] или [[page|alias]]
      [remarkWikiLink, {
        pageResolver: (name) => [name.replace(/ /g, '-').toLowerCase()],
        hrefTemplate: (permalink) => `/${permalink}`,
        aliasDivider: '|',
        markdownFolder: 'src/content/',
      }],
    ],
    rehypePlugins: [
      // Подсветка синтаксиса в блоках кода
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
