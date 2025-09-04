# 🔧 Development Workflow - neprokin.com

**Ежедневный workflow - всегда под рукой в Cursor**

---

## ⚡ Быстрые команды

```bash
# Разработка
npm run dev     # → localhost:4321
npm run build   # Проверка сборки

# Контент (Obsidian)
# src/content/ → создать .md → git push

# Деплой
git push origin main  # → автодеплой на Vercel
```

---

## 🎨 CSS Workflow

### **Изменение стилей:**
1. **Откройте UI Kit**: http://localhost:4321/uikit
2. **Измените переменную** в Layout.astro или globals.css
3. **Сохраните** - UI Kit автообновится
4. **Проверьте** на основном сайте

### **Где что менять:**
- **Critical CSS** → `src/layouts/Layout.astro`
- **Components** → `src/styles/globals.css`
- **New components** → `src/components/ui/`

---

## 🧩 Компоненты

### **Создание нового компонента:**
```astro
---
// src/components/ui/NewComponent.astro
export interface Props {
  variant?: 'primary' | 'secondary';
}
const { variant = 'primary' } = Astro.props;
---

<div class={`new-component new-component-${variant}`}>
  <slot />
</div>
```

### **Добавление стилей:**
```css
/* В globals.css */
.new-component {
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--space-sm);
}
```

---

## 📝 Content Workflow

### **Создание поста:**
```markdown
---
title: "Название статьи"
description: "Описание для SEO"
publishDate: "2024-12-15"
tags: ["design", "systems"]
draft: false
---

# Заголовок статьи

Контент статьи...
```

### **Создание проекта:**
```markdown
---
title: "Название проекта"
company: "Компания"
role: "Senior Designer"
duration: "2 years"
status: "completed"
technologies: ["React", "TypeScript"]
---

Описание проекта...
```

---

## 🎯 Типичный день

1. **Утром**: Откройте Cursor → npm run dev
2. **Контент**: Obsidian → src/content/ → создать/редактировать
3. **Стили**: UI Kit → изменить CSS → автообновление
4. **Компоненты**: src/components/ → создать/обновить
5. **Деплой**: git push → автоматический деплой

---

**UI Kit: http://localhost:4321/uikit - основной инструмент!** 🎨
