# Development Workflow для neprokin.com

## Ежедневный рабочий процесс

### 1. Создание контента (Obsidian)
```
1. Открыть Obsidian vault в папке content/
2. Создать новый Markdown файл
3. Добавить YAML frontmatter:
   ---
   title: "Заголовок статьи"
   description: "Описание для SEO"
   publishDate: "2025-01-15"
   tags: ["web", "development"]
   draft: false
   ---
4. Написать контент с поддержкой [[ссылок]]
5. Сохранить файл
```

### 2. Разработка компонентов (Cursor)
```
1. Запустить dev server: npm run dev
2. Создать компонент в src/components/
3. Добавить TypeScript типы
4. Стилизовать с Tailwind CSS
5. Протестировать в браузере
```

### 3. Git workflow
```bash
# Создание feature branch
git checkout -b feature/new-blog-post
git add .
git commit -m "feat: add new blog post about web performance"

# Merge в main
git checkout main
git merge feature/new-blog-post
git push origin main

# Автоматический деплой на Vercel
```

## Команды разработки

### Основные команды
```bash
# Установка зависимостей
npm install

# Запуск dev server
npm run dev

# Сборка для production
npm run build

# Предварительный просмотр сборки
npm run preview

# Линтинг и форматирование
npm run lint
npm run format

# Проверка типов
npm run type-check
```

### Работа с контентом
```bash
# Создание нового поста
npm run new:post "Название поста"

# Создание нового проекта
npm run new:project "Название проекта"

# Генерация sitemap и RSS
npm run generate:feeds
```

## Структура компонентов

### Базовые UI компоненты
```typescript
// src/components/ui/Button.astro
---
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const { variant = 'primary', size = 'md', href, ...props } = Astro.props;
---

// src/components/ui/Card.astro
// src/components/ui/Input.astro
// src/components/ui/Badge.astro
```

### Layout компоненты
```typescript
// src/components/layout/Header.astro
// src/components/layout/Footer.astro
// src/components/layout/Navigation.astro
// src/components/layout/Sidebar.astro
```

### Content компоненты
```typescript
// src/components/content/BlogPost.astro
// src/components/content/ProjectCard.astro
// src/components/content/TableOfContents.astro
// src/components/content/ShareButtons.astro
```

## Стили и темизация

### CSS Custom Properties
```css
/* src/styles/base.css */
:root {
  /* Colors */
  --color-primary: #3b82f6;
  --color-secondary: #64748b;
  --color-accent: #f59e0b;
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #1e293b;
  
  /* Dark theme */
  --color-primary-dark: #60a5fa;
  --color-background-dark: #0f172a;
  --color-surface-dark: #1e293b;
  --color-text-dark: #f1f5f9;
}

[data-theme="dark"] {
  --color-primary: var(--color-primary-dark);
  --color-background: var(--color-background-dark);
  --color-surface: var(--color-surface-dark);
  --color-text: var(--color-text-dark);
}
```

### Tailwind Configuration
```javascript
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
```

## Content Collections

### Определение типов
```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    github: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
```

## Производительность и оптимизация

### Checklist перед деплоем
- [ ] Bundle size < 50KB (gzipped)
- [ ] Lighthouse Performance > 95
- [ ] All images optimized
- [ ] Critical CSS inlined
- [ ] Unused CSS purged
- [ ] JavaScript минимизирован
- [ ] Service Worker настроен (если нужен)

### Мониторинг
- **Web Vitals**: Core Web Vitals отслеживание
- **Bundle Analyzer**: Анализ размера бандла
- **Lighthouse CI**: Автоматические проверки производительности
- **Error Tracking**: Отслеживание ошибок в production

## Troubleshooting

### Частые проблемы
1. **Slow build times**: Проверить размер content/ папки
2. **Hydration errors**: Проверить SSR/CSR совместимость
3. **Style conflicts**: Проверить порядок загрузки CSS
4. **Type errors**: Обновить Content Collections схемы

### Debug команды
```bash
# Анализ bundle
npm run build:analyze

# Debug mode
npm run dev --debug

# Проверка типов
npm run type-check --watch
```
