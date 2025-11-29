// @ts-check
// =============================================================================
// Astro Configuration — neprokin.com
// =============================================================================
//
// Основные интеграции:
// - Tailwind CSS — утилитарные стили
// - MDX — расширенный Markdown
// - Typograf — автоматическая типографика
//
// Типографика (две системы):
// 1. astro-typograf — для .astro страниц (работает после рендеринга)
// 2. remark-typograf — для Markdown/MDX (работает до рендеринга)
//
// Почему две системы:
// - Markdown-парсер экранирует HTML-сущности (&nbsp; → &amp;nbsp;)
// - Поэтому для Markdown используем remark-плагин с UTF-символами
// - Для .astro страниц astro-typograf работает корректно
//
// =============================================================================

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkWikiLink from 'remark-wiki-link';
import rehypeHighlight from 'rehype-highlight';
import typograf from 'astro-typograf';
import remarkTypograf from './src/plugins/remark-typograf.mjs';

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
      // Обрабатываем ВСЕ текстовые элементы
      selector: '*',
      // Исключаем элементы, которые НЕ должны обрабатываться
      // Добавляем .prose для исключения Markdown-контента (обрабатывается отдельно)
      ignore: ['pre', 'code', 'script', 'style', 'textarea', 'input', '.prose', '.post-body'],
      // Конструктор Typograf
      typografOptions: {
        locale: ['ru', 'en-US'],
        // Используем Unicode-символы вместо HTML-сущностей
        // чтобы избежать проблем с экранированием
        htmlEntity: { type: 'utf' },
      },
      // Тонкая настройка правил (пример: после коротких слов в RU)
      typografSettings: {
        'common/nbsp/afterShortWord': { lengthShortWord: 3 },
        // Включаем NBSP перед короткими словами для предотвращения висящих предлогов
        'common/nbsp/beforeShortLastWord': { lengthShortWord: 3 },
        // Включаем правило для английского языка
        'en/nbsp/beforeShortLastWord': { lengthShortWord: 3 },
        // Альтернативное правило для коротких слов
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
      // Типографика для Markdown (неразрывные пробелы, кавычки и т.д.)
      // ВАЖНО: должен быть первым, чтобы обработать текст до других плагинов
      remarkTypograf,
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
