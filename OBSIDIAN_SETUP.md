# 📝 Настройка Obsidian для neprokin.com

## 🎯 Концепция

**Obsidian как headless CMS** - редактируйте контент в удобном Obsidian, а сайт автоматически обновляется через Git.

---

## 🔧 Настройка Obsidian vault

### Шаг 1: Открытие vault
1. **Откройте Obsidian**
2. **Open folder as vault** 
3. **Выберите папку**: `src/content/`
4. **Trust author and enable plugins**: Yes

### Шаг 2: Структура vault
```
src/content/ (Obsidian vault)
├── blog/              # Статьи блога
│   └── design-systems-2025.md
├── projects/          # Проекты портфолио
│   ├── urbi.md
│   └── m2-pro.md
├── about/             # Страницы о себе
├── assets/            # Изображения и медиа
└── config.ts          # TypeScript схемы
```

### Шаг 3: Рекомендуемые плагины Obsidian

#### Core плагины (включить)
- [x] **File explorer** - навигация по файлам
- [x] **Search** - поиск по контенту
- [x] **Quick switcher** - быстрое переключение
- [x] **Graph view** - визуализация связей
- [x] **Backlinks** - обратные ссылки
- [x] **Outline** - структура документа
- [x] **Word count** - подсчет слов
- [x] **File recovery** - восстановление файлов

#### Community плагины (рекомендуемые)
- **Templater** - шаблоны для новых файлов
- **Calendar** - календарь для блога
- **Tag Wrangler** - управление тегами
- **Advanced Tables** - улучшенные таблицы
- **Paste URL into selection** - быстрые ссылки

---

## 📝 Шаблоны для контента

### Шаблон для блога
```markdown
---
title: "Заголовок статьи"
description: "Краткое описание для SEO"
publishDate: 2025-08-31
tags: ["design", "systems", "ui"]
draft: false
featured: false
author: "Stas Neprokin"
readingTime: 5
---

# Заголовок статьи

Введение к статье...

## Основные разделы

Контент статьи с возможностью использования [[внутренних ссылок]].

### Подразделы

- Списки
- **Выделение**
- `Код`

## Заключение

Выводы и [[ссылки на проекты|связанные материалы]].
```

### Шаблон для проектов
```markdown
---
title: "Название проекта"
description: "Описание проекта для SEO"
role: "Senior Product Designer"
company: "Название компании"
duration: "2 years"
technologies: ["Figma", "Design System", "User Research"]
challenges:
  - "Основная проблема 1"
  - "Основная проблема 2"
results:
  - "Результат 1"
  - "Результат 2"
featured: true
order: 1
status: "completed"
externalUrl: "https://company.com"
---

# Название проекта

## Project Overview

Описание проекта и контекста...

## Key Responsibilities

- **Задача 1** - Описание
- **Задача 2** - Описание

## Design Process

Процесс работы с возможностью ссылок на [[другие проекты]] или [[статьи блога]].

## Results & Impact

Результаты работы...
```

---

## 🔗 Wiki Links система

### Поддерживаемые форматы
```markdown
[[page-name]]              # Простая ссылка
[[page-name|Display Text]] # Ссылка с кастомным текстом
[[projects/urbi]]          # Ссылка на конкретный проект
[[blog/design-systems]]    # Ссылка на статью блога
```

### Автоматическое преобразование
- `[[Urbi]]` → `/projects/urbi`
- `[[Design Systems 2025]]` → `/blog/design-systems-2025`  
- `[[About|About Me]]` → `/about` (с текстом "About Me")

### Изображения
```markdown
![[image.jpg]]             # Простое изображение
![[image.jpg|Alt text]]    # С alt текстом
```
Преобразуется в: `![Alt text](/images/image.jpg)`

---

## 📊 Workflow редактирования

### Создание нового блог поста
1. **В Obsidian**: `Cmd+N` → новый файл в `blog/`
2. **Имя файла**: `my-new-post.md`
3. **Добавить frontmatter** из шаблона
4. **Написать контент** с wiki-links
5. **Сохранить** и **commit в Git**

### Создание нового проекта
1. **В Obsidian**: `Cmd+N` → новый файл в `projects/`
2. **Имя файла**: `company-name.md`
3. **Заполнить схему** проекта
4. **Добавить кейс-стади** с изображениями
5. **Commit и push**

### Редактирование существующего контента
1. **Открыть файл** в Obsidian
2. **Использовать graph view** для навигации по связям
3. **Редактировать** с preview режимом
4. **Проверить links** через backlinks panel
5. **Save и Git commit**

---

## 🔄 Синхронизация с сайтом

### Автоматический workflow
```
Obsidian Edit → Git Commit → GitHub Push → Vercel Deploy → Live Site
     ↓              ↓           ↓             ↓            ↓
  Markdown      Version      Repository    Build        Website
   Files        Control                   Process      neprokin.com
```

### Git команды для синхронизации
```bash
# После редактирования в Obsidian
git add src/content/
git commit -m "content: add new blog post about design"
git push origin main

# Автоматический деплой произойдет через GitHub Actions
```

---

## 🎨 Преимущества Obsidian интеграции

### Для автора контента
- ✅ **Удобный редактор** - лучше чем WordPress admin
- ✅ **Offline работа** - редактирование без интернета
- ✅ **Graph view** - визуализация связей между контентом
- ✅ **Быстрый поиск** - мгновенный поиск по всему контенту
- ✅ **Backlinks** - автоматические обратные ссылки

### Для сайта
- ✅ **Типизированный контент** - TypeScript схемы
- ✅ **Автоматические ссылки** - wiki-links → HTML ссылки
- ✅ **SEO оптимизация** - мета-теги из frontmatter
- ✅ **Производительность** - статическая генерация
- ✅ **Версионность** - Git история всех изменений

### Для разработки
- ✅ **Separation of concerns** - контент отдельно от кода
- ✅ **Type safety** - схемы проверяют корректность
- ✅ **Hot reload** - изменения видны мгновенно
- ✅ **Markdown ecosystem** - remark/rehype плагины

---

## 🚀 Готовые команды

### Создание нового поста
```bash
# Через Obsidian
Cmd+N → blog/new-post.md → заполнить шаблон

# Через терминал
touch src/content/blog/new-post.md
# добавить frontmatter и контент
```

### Проверка ссылок
```bash
# Найти все wiki-links в проекте
grep -r "\[\[.*\]\]" src/content/

# Проверить что все ссылки работают
npm run build
```

### Синхронизация
```bash
# Стандартный workflow
git add src/content/
git commit -m "content: update about page"
git push origin main
```

---

**Obsidian vault готов к использованию как headless CMS!** 📝✨
