// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkWikiLink from 'remark-wiki-link';
import rehypeHighlight from 'rehype-highlight';
import typograf from 'astro-typograf';

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
      ignore: ['pre', 'code', 'script', 'style', 'textarea', 'input'],
      // Конструктор Typograf
      typografOptions: {
        locale: ['ru', 'en-US'],
        // Делаем сущностями только «невидимые» символы вроде &nbsp; при HTML-выводе
        // (для копипаста и индексации это безопаснее)
        htmlEntity: { type: 'name', onlyInvisible: true },
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
  
  // Markdown настройки
  markdown: {
    // drafts: true, // Не поддерживается в новой версии Astro
    smartypants: false, // Отключаем встроенный Smartypants для избежания конфликтов с Typograf
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
