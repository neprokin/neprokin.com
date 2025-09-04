/**
 * Утилиты для интеграции с Obsidian
 */

// Преобразование Obsidian ссылок [[]] в обычные ссылки
export function processObsidianLinks(content: string): string {
  // Паттерн для [[ссылка|текст]] или [[ссылка]]
  const wikiLinkPattern = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
  
  return content.replace(wikiLinkPattern, (_match, link, alias) => {
    const displayText = alias || link;
    const slug = link.toLowerCase().replace(/\s+/g, '-');
    
    // Определяем тип ссылки по контексту
    if (isProjectLink(link)) {
      return `[${displayText}](/projects/${slug})`;
    } else if (isBlogLink(link)) {
      return `[${displayText}](/blog/${slug})`;
    } else {
      // Обычная внутренняя ссылка
      return `[${displayText}](/${slug})`;
    }
  });
}

// Проверка, является ли ссылка проектом
function isProjectLink(link: string): boolean {
  const projectKeywords = ['urbi', 'm2 pro', 'vk tax', 'skipp pro', '123 apps'];
  return projectKeywords.some(keyword => 
    link.toLowerCase().includes(keyword)
  );
}

// Проверка, является ли ссылка статьей блога
function isBlogLink(link: string): boolean {
  const blogKeywords = ['design systems', 'article', 'post', '2025'];
  return blogKeywords.some(keyword => 
    link.toLowerCase().includes(keyword)
  );
}

// Генерация чтения времени
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Извлечение заголовков для Table of Contents
export function extractHeadings(content: string): Array<{level: number, text: string, slug: string}> {
  const headingPattern = /^(#{1,6})\s+(.+)$/gm;
  const headings = [];
  let match;
  
  while ((match = headingPattern.exec(content)) !== null) {
    const level = match?.[1]?.length || 1;
    const text = match?.[2]?.trim() || '';
    const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    
    headings.push({ level, text, slug });
  }
  
  return headings;
}

// Обработка изображений из Obsidian
export function processObsidianImages(content: string): string {
  // Паттерн для ![[image.jpg|alt text]]
  const imagePattern = /!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
  
  return content.replace(imagePattern, (_match, imagePath, altText) => {
    const alt = altText || imagePath;
    const src = `/images/${imagePath}`;
    return `![${alt}](${src})`;
  });
}

// Создание excerpt из контента
export function createExcerpt(content: string, maxLength: number = 160): string {
  // Удаляем markdown разметку
  const plainText = content
    .replace(/#{1,6}\s+/g, '') // заголовки
    .replace(/\*\*([^*]+)\*\*/g, '$1') // bold
    .replace(/\*([^*]+)\*/g, '$1') // italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // ссылки
    .replace(/`([^`]+)`/g, '$1') // code
    .replace(/\n+/g, ' ') // переносы строк
    .trim();
  
  if (plainText.length <= maxLength) {
    return plainText;
  }
  
  return plainText.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

// Валидация YAML frontmatter
export function validateFrontmatter(data: any, type: 'blog' | 'project'): boolean {
  const requiredFields = {
    blog: ['title', 'description', 'publishDate'],
    project: ['title', 'description', 'role', 'company', 'duration']
  };
  
  const required = requiredFields[type];
  return required.every(field => data[field] !== undefined);
}

// Сортировка контента
export function sortContent<T extends {data: {publishDate?: Date, order?: number}}>(
  items: T[], 
  sortBy: 'date' | 'order' = 'date'
): T[] {
  if (sortBy === 'date') {
    return items.sort((a, b) => {
      const dateA = a.data.publishDate?.getTime() || 0;
      const dateB = b.data.publishDate?.getTime() || 0;
      return dateB - dateA; // новые сначала
    });
  } else {
    return items.sort((a, b) => {
      const orderA = a.data.order || 999;
      const orderB = b.data.order || 999;
      return orderA - orderB; // по возрастанию
    });
  }
}
