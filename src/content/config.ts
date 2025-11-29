import { defineCollection, z } from 'astro:content';

// =============================================================================
// Content Collections — конфигурация контента для neprokin.com
// =============================================================================
//
// Astro Content Collections позволяют типизированно работать с Markdown/MDX.
// Каждая коллекция — это папка в src/content/ с файлами контента.
//
// Документация: https://docs.astro.build/en/guides/content-collections/
// =============================================================================

export const collections = {
  // ---------------------------------------------------------------------------
  // Blog — статьи блога (пока не используется, готово к расширению)
  // ---------------------------------------------------------------------------
  // Путь: src/content/blog/
  // URL: /blog/[slug]
  blog: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.date(),
      tags: z.array(z.string()).optional(),
      featured: z.boolean().optional(),
      readingTime: z.number().optional(),
    }),
  }),
  
  // ---------------------------------------------------------------------------
  // Projects — портфолио проектов (пока не используется)
  // ---------------------------------------------------------------------------
  // Путь: src/content/projects/
  // URL: /projects/[slug]
  projects: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      role: z.string(),
      company: z.string(),
      duration: z.string(),
      status: z.string().optional(),
      technologies: z.array(z.string()).optional(),
      featured: z.boolean().optional(),
      order: z.number().optional(),
    }),
  }),
  
  // ---------------------------------------------------------------------------
  // Posts — минималистичные публикации в стиле Telegraph
  // ---------------------------------------------------------------------------
  // Путь: src/content/posts/
  // URL: /p/[slug]
  //
  // Использование:
  // 1. Создайте файл src/content/posts/my-post.md
  // 2. Добавьте frontmatter с title:
  //    ---
  //    title: Название статьи
  //    ---
  // 3. Статья будет доступна по адресу /p/my-post
  //
  // Особенности:
  // - Минимум метаданных (только title)
  // - Типографика через remark-typograf (неразрывные пробелы и т.д.)
  // - Чистый дизайн без навигации
  // - Идеально для шаринга в мессенджерах
  posts: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
    }),
  }),
};
