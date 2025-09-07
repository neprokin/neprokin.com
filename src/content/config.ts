import { defineCollection, z } from 'astro:content';

// Content Collections конфигурация для neprokin.com
// Готова для будущего расширения контента

export const collections = {
  // Блог статьи
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
  
  // Проекты
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
};
