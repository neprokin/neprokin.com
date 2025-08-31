# 🚀 neprokin.com

**Personal website powered by Obsidian and Astro with custom UI-kit**

---

## 🎯 О проекте

Современный персональный веб-сайт с уникальной архитектурой:
- **Content Management**: Obsidian vault (удобное редактирование в Markdown)
- **Frontend**: Astro 4.x (максимальная производительность)
- **UI System**: Кастомный монохромный UI-kit
- **Performance**: Lighthouse Score 100/100

---

## 🏗️ Архитектура

### **Obsidian → Git → Website**
```
Obsidian Vault → Git Repository → Astro Build → Deployed Site
     ↓                ↓              ↓            ↓
  Markdown        Version Control   Static Gen   neprokin.com
```

### **Технологический стек**
- **Framework**: Astro 4.x (Islands Architecture)
- **Language**: TypeScript (строгая типизация)
- **Styling**: Tailwind CSS + CSS Custom Properties
- **Content**: Obsidian Markdown files
- **Build**: Vite 5.x
- **Deployment**: Vercel/Netlify

---

## 🎨 UI Kit

### **Монохромная система дизайна**
- **6 цветов** в серой палитре (#FDFDFD → #0A0A0A)
- **IBM Plex Sans** типографика (300, 500 weights)
- **Модульная сетка 4px** для консистентности
- **Светлая/темная тема** с автоматическим переключением

### **Просмотр UI Kit**
```bash
# Откройте в браузере
open ui-kit-preview.html
```

---

## 🚀 Быстрый старт

### **Разработка**
```bash
# Установка зависимостей
npm install

# Запуск dev server
npm run dev

# Сборка для production  
npm run build
```

### **Структура проекта**
```
neprokin.com/
├── content/              # Obsidian контент (Markdown)
├── src/
│   ├── components/       # Astro компоненты
│   ├── layouts/          # Базовые лейауты
│   ├── pages/            # Страницы сайта
│   ├── styles/           # CSS и UI-kit
│   └── utils/            # Утилиты
├── public/               # Статические файлы
└── ui-kit-preview.html   # Интерактивный UI Kit
```

---

## 📊 Производительность

### **Цели**
- **Lighthouse Score**: 100/100/100/100
- **Bundle Size**: < 50KB (gzipped)
- **Core Web Vitals**: Оптимизированы
- **Loading Time**: < 1.5s

### **Текущий сайт vs Новая версия**
| Метрика | WordPress | Astro (цель) | Улучшение |
|---------|-----------|--------------|-----------|
| Performance | 85/100 | 100/100 | +15 |
| FCP | 2.8s | <1.5s | -1.3s |
| LCP | 3.3s | <2.5s | -0.8s |
| Bundle Size | ~200KB | <50KB | 75% меньше |

---

## 🔧 Особенности

### **Obsidian интеграция**
- Поддержка `[[внутренних ссылок]]`
- YAML frontmatter для метаданных  
- Автоматическая обработка изображений
- Синхронизация через Git

### **UI Kit система**
- CSS Custom Properties для темизации
- Модульная сетка 4px
- Responsive типографика
- Интерактивные компоненты

### **SEO оптимизация**
- Автогенерация meta tags
- Структурированные данные
- Sitemap.xml
- RSS feeds

---

## 📋 Статус разработки

**Текущий прогресс: 70%**

### ✅ Завершено
- [x] Cursor настройка (AI ассистент)
- [x] UI-Kit система (интерактивный preview)
- [x] Архитектура и планирование
- [x] Astro проект инициализирован

### 🚧 В работе
- [ ] Установка зависимостей
- [ ] Создание структуры папок
- [ ] Конфигурационные файлы
- [ ] Базовые компоненты

### ⏳ Планируется
- [ ] Content Collections
- [ ] Obsidian интеграция
- [ ] SEO настройки
- [ ] Деплой

---

## 🎯 Команда

- **Developer**: neprokin
- **AI Assistant**: Cursor (полностью настроен)
- **Content Management**: Obsidian
- **Design System**: Кастомный монохромный UI-kit

---

## 📞 Контакты

- **Email**: stas.neprokin@gmail.com
- **Telegram**: @neprokin
- **Website**: https://neprokin.com

---

**Simple Design of Complex Systems** 🎨