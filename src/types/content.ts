/**
 * TypeScript утилиты для работы с контентом
 */

import type { CollectionEntry } from 'astro:content';

// Типы для коллекций контента
export type BlogPost = CollectionEntry<'blog'>;
export type Project = CollectionEntry<'projects'>;
export type AboutPage = CollectionEntry<'about'>;

// Утилитарные типы для статусов
export type ProjectStatus = 'current' | 'completed' | 'archived';
export type PostStatus = 'draft' | 'published' | 'featured';

// Хелперы для фильтрации контента
export interface ContentFilters {
  featured?: boolean;
  status?: ProjectStatus | PostStatus;
  tags?: string[];
  dateRange?: {
    from: Date;
    to: Date;
  };
}

// Типы для метаданных
export interface ContentMeta {
  readingTime?: number;
  wordCount?: number;
  lastModified?: Date;
  excerpt?: string;
}

// Расширенные типы для UI компонентов
export interface BlogPostWithMeta extends BlogPost {
  meta: ContentMeta;
}

export interface ProjectWithMeta extends Project {
  meta: ContentMeta;
}

// Типы для навигации
export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
  external?: boolean;
}

// Типы для SEO
export interface SEOData {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  canonical?: string;
  noindex?: boolean;
  type?: 'website' | 'article' | 'profile';
}

// Типы для UI состояний
export interface UIState {
  theme: 'light' | 'dark';
  loading: boolean;
  error?: string;
}

// Утилитарные типы для форм
export interface ContactForm {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

// Типы для аналитики
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Типы для поиска
export interface SearchResult {
  title: string;
  excerpt: string;
  url: string;
  type: 'blog' | 'project' | 'page';
  relevance: number;
}

// Типы для RSS
export interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: Date;
  guid: string;
}
