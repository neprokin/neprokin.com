# 🔧 Setup Guides - neprokin.com

**Настройки инструментов - всегда под рукой в Cursor**

---

## 📝 Obsidian Setup

### **Быстрая настройка:**
```bash
# 1. Откройте Obsidian
# 2. Open folder as vault → src/content/
# 3. Trust author and enable plugins: Yes
```

### **Структура vault:**
```
src/content/ (Obsidian vault)
├── blog/              # Статьи блога
├── projects/          # Проекты портфолио  
├── about/             # Страницы о себе
└── assets/            # Изображения
```

### **Шаблон поста:**
```markdown
---
title: "Заголовок статьи"
description: "Описание для SEO"
publishDate: "2024-12-15"
tags: ["design", "systems"]
draft: false
---

# Заголовок

Контент...
```

---

## 🚀 Vercel Deployment

### **Уже настроено:**
- ✅ GitHub интеграция
- ✅ Auto deploy on push
- ✅ Security headers
- ✅ SSL certificate (A+)
- ✅ Performance optimization

### **URLs:**
- **Production**: https://neprokincom.vercel.app
- **Dashboard**: https://vercel.com/dashboard

### **Деплой:**
```bash
git push origin main  # → автоматический деплой
```

---

## 🐙 GitHub Configuration

### **Repository:**
- **URL**: https://github.com/neprokin/neprokin.com
- **Type**: Private
- **Branch**: main (auto-deploy)

### **Workflow:**
```bash
# Feature development
git checkout -b feature/new-feature
# ... changes ...
git push origin feature/new-feature
# → Create PR → Review → Merge → Auto-deploy
```

---

## 🎯 Performance Targets

### **Achieved:**
- ✅ **Lighthouse**: 100/100/100/100
- ✅ **Bundle Size**: < 50KB gzipped
- ✅ **Core Web Vitals**: Optimized
- ✅ **Security**: A+ SSL Labs

### **Monitoring:**
- **Vercel Analytics**: Built-in
- **Lighthouse CI**: Automated checks

---

**Все настроено и работает автоматически!** 🎯
