/**
 * Основные типы для проекта neprokin.com
 */

// Re-export всех типов для удобства
export * from './content';

// Глобальные типы
export interface BaseComponent {
  class?: string;
}

export interface LinkComponent extends BaseComponent {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

export interface ImageComponent extends BaseComponent {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

// Типы для Astro компонентов
export interface AstroComponentProps {
  [key: string]: any;
}

// Типы для окружения
export interface EnvVars {
  readonly NODE_ENV: 'development' | 'production' | 'test';
  readonly SITE_URL?: string;
  readonly ANALYTICS_ID?: string;
}

// Типы для конфигурации
export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
    telegram: string;
  };
  social: {
    telegram: string;
    email: string;
  };
}

// Константы типов
export const SITE_CONFIG: SiteConfig = {
  title: 'neprokin.com',
  description: 'Simple Design of Complex Systems',
  url: 'https://neprokin.com',
  author: {
    name: 'Stas Neprokin',
    email: 'stas.neprokin@gmail.com',
    telegram: 'neprokin'
  },
  social: {
    telegram: 'https://telegram.me/neprokin',
    email: 'mailto:stas.neprokin@gmail.com'
  }
} as const;

// Типы для ошибок
export interface AppError {
  message: string;
  code?: string;
  status?: number;
}

export class ValidationError extends Error implements AppError {
  code = 'VALIDATION_ERROR';
  status = 400;
  
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export class NotFoundError extends Error implements AppError {
  code = 'NOT_FOUND';
  status = 404;
  
  constructor(message: string = 'Resource not found') {
    super(message);
    this.name = 'NotFoundError';
  }
}
