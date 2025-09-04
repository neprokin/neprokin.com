# 🚀 neprokin.com

**Personal website powered by Obsidian and Astro with custom UI-kit**

---

## 🎯 О проекте

Современный персональный веб-сайт с уникальной архитектурой:
- **Content Management**: Obsidian vault (удобное редактирование в Markdown)
- **Frontend**: Astro 5.x (максимальная производительность)
- **UI System**: Кастомный монохромный UI-kit
- **Performance**: Lighthouse Score 100/100

---

## 🏗️ Архитектура

### **Obsidian → GitHub → Vercel → Website**
```
Obsidian Vault → GitHub Repository → Vercel Build → Live Website
     ↓                ↓                   ↓            ↓
  Markdown        Auto Deployment     Static Gen   neprokin.com
```

### **Технологический стек**
- **Framework**: Astro 5.13.5 (Islands Architecture)
- **Language**: TypeScript (строгая типизация)
- **Styling**: Распределенная CSS архитектура (Critical CSS + Global Styles + Tailwind)
- **Content**: Obsidian Markdown files
- **Build**: Vite 5.x
- **Hosting**: Vercel (Free Tier)
- **Version Control**: GitHub
- **CI/CD**: Vercel Auto-Deploy

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
│   │   ├── ui/          # Базовые UI элементы
│   │   ├── layout/      # Лейаут компоненты (Navigation)
│   │   └── content/     # Контент компоненты
│   ├── layouts/          # Базовые лейауты (Layout.astro)
│   ├── pages/            # Страницы сайта
│   ├── styles/           # CSS архитектура
│   │   ├── globals.css  # Система дизайна
│   │   └── ui-kit-demo.css # Preview стили
│   └── utils/            # Утилиты
├── public/               # Статические файлы
└── ui-kit-preview.html   # Интерактивный UI Kit
```

---

## 🎨 CSS Архитектура

### **Распределенная система стилей**
```
CSS Architecture
├── Critical CSS (Layout.astro)    # Мгновенная загрузка
├── Global Styles (globals.css)    # Система дизайна
├── Tailwind Config               # Utility framework
└── UI Kit Demo                  # Preview only
```

### **Преимущества архитектуры**
- ⚡ **Performance First** - критические стили inline
- 📦 **Модульность** - четкое разделение ответственности
- 📱 **Mobile-First** - responsive дизайн с hamburger меню
- 🎨 **Design System** - система CSS переменных и spacing

---

## 📊 Производительность

### **Достигнутые результаты**
- **Lighthouse Score**: 100/100/100/100 ✅
- **Bundle Size**: < 50KB (gzipped) ✅
- **Core Web Vitals**: Оптимизированы ✅
- **Loading Time**: < 1.0s ✅

### **Сравнение с предыдущей версией**
| Метрика | WordPress (reg.ru) | Astro (Vercel) | Улучшение |
|---------|-------------------|----------------|-----------|
| Performance | 85/100 | 100/100 | **+15 points** |
| FCP | 2.8s | <1.0s | **3x быстрее** |
| LCP | 3.3s | <1.5s | **2x быстрее** |
| Security Headers | D | A+ | **Максимум** |
| Bundle Size | ~200KB | <50KB | **75% меньше** |
| Hosting Cost | 500-1000₽/мес | 0₽/мес | **100% экономия** |

---

## 🔧 Особенности

### **Obsidian интеграция (быстрая настройка):**
```bash
# 1. Откройте Obsidian
# 2. Open folder as vault → src/content/
# 3. Создавайте .md файлы с YAML frontmatter
# 4. Git commit + push → автодеплой на Vercel
```

### **CSS Архитектура**
- **Critical CSS** в Layout.astro - мгновенная загрузка
- **Global Styles** в globals.css - система дизайна и компоненты
- **Tailwind Config** - utility framework с CSS переменными
- **Spacing система** - модульная сетка 4px
- **Mobile-First** responsive дизайн с hamburger меню
- **Performance** оптимизация для Lighthouse 100/100

### **SEO оптимизация**
- Автогенерация meta tags
- Структурированные данные
- Sitemap.xml
- RSS feeds

---

## 📋 Статус разработки

**Текущий прогресс: 100% - ПРОЕКТ ЗАПУЩЕН!** 🚀

### ✅ Завершено
- [x] **Cursor настройка** (AI ассистент)
- [x] **UI-Kit система** (интерактивный preview)
- [x] **Архитектура и планирование**
- [x] **Astro проект** инициализирован и настроен
- [x] **Установка зависимостей** (все пакеты)
- [x] **Структура проекта** создана
- [x] **Конфигурационные файлы** настроены
- [x] **Базовые компоненты** реализованы
- [x] **Content Collections** настроены
- [x] **Obsidian интеграция** работает
- [x] **SEO настройки** реализованы
- [x] **GitHub интеграция** настроена
- [x] **Vercel деплой** работает
- [x] **Security Headers** настроены
- [x] **TypeScript утилиты** созданы
- [x] **Performance оптимизация** завершена

### 🌐 Live Website
- **Production URL**: [https://neprokincom.vercel.app](https://neprokincom.vercel.app)
- **Custom Domain**: neprokin.com (настройка в процессе)
- **Auto Deploy**: При каждом push в GitHub

### 🔄 Continuous Integration
- **Git Push** → **Auto Deploy** → **Live Update**
- **Preview Deployments** для каждого PR
- **Rollback** одним кликом при необходимости

---

## 🎯 Команда

- **Developer**: neprokin
- **AI Assistant**: Cursor (полностью настроен)
- **Content Management**: Obsidian
- **Design System**: Кастомный монохромный UI-kit

---

## 🚀 Деплой и разработка

### **Локальная разработка**
```bash
# Клонирование репозитория
git clone https://github.com/neprokin/neprokin.com.git
cd neprokin.com

# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev
# → http://localhost:4321

# Сборка для production
npm run build
npm run preview
```

### **Деплой на Vercel**
```bash
# Автоматический деплой
git add -A
git commit -m "feat: update content"
git push origin main
# → Vercel автоматически задеплоит изменения
```

### **Структура проекта (обновлено)**
```
neprokin.com/
├── docs/                   # 📚 Вся техническая документация
│   ├── README.md          # Индекс документации
│   ├── CSS_ARCHITECTURE.md # Архитектура CSS
│   ├── QUICK_REFERENCE.md # Быстрый справочник
│   └── [другие .md файлы] # Техническая документация
├── src/
│   ├── components/        # Переиспользуемые компоненты
│   │   ├── ui/           # Button, Card, Badge
│   │   ├── layout/       # Navigation, Footer
│   │   └── content/      # BlogCard, ProjectCard
│   ├── content/          # Markdown контент (Obsidian)
│   ├── pages/            # Astro страницы + /uikit
│   ├── styles/           # CSS архитектура (globals.css)
│   └── layouts/          # Layout.astro (Critical CSS)
├── public/               # Статические файлы
├── vercel.json          # Vercel конфигурация
└── README.md            # Главная документация (этот файл)
```

---

## 📞 Контакты

- **Email**: stas.neprokin@gmail.com
- **Telegram**: @neprokin
- **Website**: https://neprokin.com
- **GitHub**: https://github.com/neprokin/neprokin.com
- **Live Site**: https://neprokincom.vercel.app

---

## 📚 Документация

### **Cursor-integrated документация (всегда под рукой в IDE):**
- **🎨 [/uikit](http://localhost:4321/uikit)** - живая дизайн-система (основной инструмент)
- **📝 .cursor/notepads/css-architecture.md** - архитектура CSS
- **🚀 .cursor/notepads/deployment.md** - деплой и настройка  
- **🔧 .cursor/notepads/development-workflow.md** - ежедневный workflow
- **⚡ .cursor/notepads/quick-reference.md** - быстрый справочник CSS

---

**Simple Design of Complex Systems** 🎨

*Powered by Obsidian + Astro + Vercel*