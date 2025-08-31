# Обзор проекта neprokin.com

## Технологии
- **Frontend Framework**: Astro 4.x (Static Site Generation + Islands Architecture)
- **Content Management**: Obsidian Vault (Markdown файлы)
- **Styling**: Tailwind CSS + CSS Custom Properties
- **Language**: TypeScript (строгая типизация)
- **Build Tool**: Vite 5.x (быстрая сборка и dev server)
- **Content Processing**: Unified.js (remark + rehype)
- **Deployment**: Vercel/Netlify (автоматический деплой)

## Архитектура
- **Obsidian-Powered Website**: Контент редактируется в Obsidian, отображается на сайте
- **Git-Based Workflow**: Obsidian → Git → Website автоматическая синхронизация
- **Islands Architecture**: Минимальный JavaScript, максимальная производительность
- **Component-Driven**: Модульная система UI компонентов
- **Mobile-First**: Адаптивный дизайн для всех устройств

## Стандарты
- **Git Flow** для ветвления и релизов
- **Conventional Commits** для структурированных коммитов
- **ESLint + Prettier** для автоматического форматирования
- **TypeScript Strict Mode** для максимальной типобезопасности
- **Semantic Versioning** для релизов

## Структура проекта
```
neprokin.com/
├── content/                    # Obsidian content (Markdown файлы)
│   ├── blog/                  # Статьи блога
│   ├── projects/              # Портфолио проектов  
│   ├── about/                 # Страницы о себе
│   └── assets/                # Изображения и медиа
├── src/
│   ├── components/            # React/Astro компоненты
│   ├── styles/                # CSS и UI-kit
│   ├── pages/                 # Astro страницы
│   ├── layouts/               # Базовые лейауты
│   ├── utils/                 # Утилиты и хелперы
│   └── types/                 # TypeScript определения
├── public/                    # Статические файлы
└── dist/                      # Собранный сайт
```

## Цели проекта
1. **Максимальная производительность** - Lighthouse Score 100/100
2. **Удобство редактирования** - комфортная работа в Obsidian
3. **Современный дизайн** - кастомный UI-kit с темной/светлой темой
4. **SEO оптимизация** - автоматическая генерация метаданных
5. **Accessibility** - полная поддержка скрин-ридеров

## Workflow разработки
1. **Контент**: Редактирование в Obsidian
2. **Код**: Разработка компонентов и стилей
3. **Тестирование**: Локальная проверка на `localhost:4321`
4. **Деплой**: Автоматическая публикация через Git push
5. **Мониторинг**: Отслеживание производительности и ошибок

## API и интеграции
- **Astro Content Collections** - типизированные коллекции контента
- **Remark/Rehype plugins** - обработка Markdown
- **Obsidian API** - интеграция с vault (если нужно)
- **Analytics** - Plausible или Google Analytics
- **Search** - Pagefind для статического поиска

## Команда
- **Developer & Content Creator**: neprokin (полный цикл разработки)
- **AI Assistant**: Cursor для автоматизации и помощи в коде
- **Content Management**: Obsidian как основной редактор
