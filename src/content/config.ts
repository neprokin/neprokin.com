import { defineCollection, z } from 'astro:content';

// Схема для блога
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    author: z.string().default('Stas Neprokin'),
    readingTime: z.number().optional(),
  }),
});

// Схема для проектов
const projects = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(), // "Senior Product Designer", "Lead Designer", etc.
    company: z.string(), // "Urbi", "M2 Pro", etc.
    duration: z.string(), // "2 years", "Current", etc.
    technologies: z.array(z.string()).optional(),
    challenges: z.array(z.string()).optional(),
    results: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0), // Для сортировки
    status: z.enum(['current', 'completed', 'archived']).default('completed'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    externalUrl: z.string().optional(),
    caseStudyUrl: z.string().optional(),
  }),
});

// Схема для страниц "О себе"
const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.date(),
    section: z.string(), // "bio", "experience", "skills", etc.
    order: z.number().default(0),
  }),
});

// Схема для ассетов (изображения, файлы)
const assets = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    type: z.enum(['image', 'document', 'video', 'other']).default('other'),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog,
  projects, 
  about,
  assets,
};
