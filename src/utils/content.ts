/**
 * Утилиты для работы с контентом - расширение obsidian.ts
 */

// import type { CollectionEntry } from 'astro:content'; // Unused import
import type { 
  BlogPost, 
  Project, 
  ContentFilters, 
  ContentMeta,
  BlogPostWithMeta,
  ProjectWithMeta 
} from '../types/content';

// Фильтрация контента
export function filterBlogPosts(
  posts: BlogPost[], 
  filters: ContentFilters = {}
): BlogPost[] {
  return posts.filter(post => {
    // Фильтр по featured
    if (filters.featured !== undefined && post.data.featured !== filters.featured) {
      return false;
    }
    
    // Фильтр по тегам
    if (filters.tags && filters.tags.length > 0) {
      const postTags = post.data.tags || [];
      const hasMatchingTag = filters.tags.some(tag => 
        postTags.includes(tag)
      );
      if (!hasMatchingTag) return false;
    }
    
    // Фильтр по дате
    if (filters.dateRange) {
      const postDate = post.data.publishDate;
      if (postDate < filters.dateRange.from || postDate > filters.dateRange.to) {
        return false;
      }
    }
    
    return true;
  });
}

export function filterProjects(
  projects: Project[], 
  filters: ContentFilters = {}
): Project[] {
  return projects.filter(project => {
    // Фильтр по статусу
    if (filters.status && project.data.status !== filters.status) {
      return false;
    }
    
    // Фильтр по featured
    if (filters.featured !== undefined && project.data.featured !== filters.featured) {
      return false;
    }
    
    return true;
  });
}

// Сортировка контента
export function sortBlogPosts(
  posts: BlogPost[], 
  sortBy: 'date' | 'title' | 'readingTime' = 'date',
  order: 'asc' | 'desc' = 'desc'
): BlogPost[] {
  return [...posts].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'date':
        comparison = a.data.publishDate.getTime() - b.data.publishDate.getTime();
        break;
      case 'title':
        comparison = a.data.title.localeCompare(b.data.title);
        break;
      case 'readingTime':
        const aTime = a.data.readingTime || 0;
        const bTime = b.data.readingTime || 0;
        comparison = aTime - bTime;
        break;
    }
    
    return order === 'desc' ? -comparison : comparison;
  });
}

export function sortProjects(
  projects: Project[], 
  sortBy: 'order' | 'title' | 'company' = 'order',
  order: 'asc' | 'desc' = 'asc'
): Project[] {
  return [...projects].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'order':
        comparison = (a.data.order || 999) - (b.data.order || 999);
        break;
      case 'title':
        comparison = a.data.title.localeCompare(b.data.title);
        break;
      case 'company':
        comparison = a.data.company.localeCompare(b.data.company);
        break;
    }
    
    return order === 'desc' ? -comparison : comparison;
  });
}

// Генерация метаданных
export function generateContentMeta(content: string): ContentMeta {
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / 200); // 200 слов в минуту
  
  return {
    wordCount: words,
    readingTime,
    excerpt: createExcerpt(content, 160)
  };
}

// Улучшенная функция создания excerpt
export function createExcerpt(content: string, maxLength: number = 160): string {
  // Удаляем frontmatter
  const withoutFrontmatter = content.replace(/^---[\s\S]*?---/, '').trim();
  
  // Удаляем markdown разметку
  const plainText = withoutFrontmatter
    .replace(/#{1,6}\s+/g, '') // заголовки
    .replace(/\*\*([^*]+)\*\*/g, '$1') // bold
    .replace(/\*([^*]+)\*/g, '$1') // italic
    .replace(/`([^`]+)`/g, '$1') // inline code
    .replace(/```[\s\S]*?```/g, '') // code blocks
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // ссылки
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // изображения
    .replace(/\n+/g, ' ') // переносы строк
    .replace(/\s+/g, ' ') // множественные пробелы
    .trim();
  
  if (plainText.length <= maxLength) {
    return plainText;
  }
  
  // Обрезаем по словам
  const truncated = plainText.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  return (lastSpaceIndex > 0 ? truncated.substring(0, lastSpaceIndex) : truncated) + '...';
}

// Расширение контента с метаданными
export function enrichBlogPost(post: BlogPost, content?: string): BlogPostWithMeta {
  const meta = content ? generateContentMeta(content) : {
    readingTime: post.data.readingTime || 0
  };
  
  return {
    ...post,
    meta
  };
}

export function enrichProject(project: Project, content?: string): ProjectWithMeta {
  const meta = content ? generateContentMeta(content) : {};
  
  return {
    ...project,
    meta
  };
}

// Группировка контента
export function groupBlogPostsByYear(posts: BlogPost[]): Record<number, BlogPost[]> {
  return posts.reduce((groups, post) => {
    const year = post.data.publishDate.getFullYear();
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(post);
    return groups;
  }, {} as Record<number, BlogPost[]>);
}

export function groupProjectsByStatus(projects: Project[]): Record<string, Project[]> {
  return projects.reduce((groups, project) => {
    const status = project.data.status || 'unknown';
    if (!groups[status]) {
      groups[status] = [];
    }
    groups[status].push(project);
    return groups;
  }, {} as Record<string, Project[]>);
}

// Поиск контента
export function searchContent<T extends BlogPost | Project>(
  items: T[],
  query: string,
  searchFields: (keyof T['data'])[] = ['title', 'description']
): T[] {
  if (!query.trim()) return items;
  
  const searchTerm = query.toLowerCase().trim();
  
  return items.filter(item => {
    return searchFields.some(field => {
      const value = item.data[field as keyof typeof item.data];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(searchTerm);
      }
      if (Array.isArray(value)) {
        return value.some(v => 
          typeof v === 'string' && v.toLowerCase().includes(searchTerm)
        );
      }
      return false;
    });
  });
}

// Валидация контента
export function validateBlogPost(post: BlogPost): string[] {
  const errors: string[] = [];
  
  if (!post.data.title?.trim()) {
    errors.push('Title is required');
  }
  
  if (!post.data.description?.trim()) {
    errors.push('Description is required');
  }
  
  if (!post.data.publishDate) {
    errors.push('Publish date is required');
  }
  
  if (post.data.publishDate && post.data.publishDate > new Date()) {
    errors.push('Publish date cannot be in the future');
  }
  
  return errors;
}

export function validateProject(project: Project): string[] {
  const errors: string[] = [];
  
  if (!project.data.title?.trim()) {
    errors.push('Title is required');
  }
  
  if (!project.data.description?.trim()) {
    errors.push('Description is required');
  }
  
  if (!project.data.role?.trim()) {
    errors.push('Role is required');
  }
  
  if (!project.data.company?.trim()) {
    errors.push('Company is required');
  }
  
  return errors;
}
