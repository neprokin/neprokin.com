# 🚀 Deployment & Setup - neprokin.com

**Деплой и настройка - всегда под рукой в Cursor**

---

## ⚡ Быстрый деплой

### **Текущий статус:**
- ✅ **Live Site**: https://neprokincom.vercel.app
- ✅ **GitHub**: https://github.com/neprokin/neprokin.com
- ✅ **Auto Deploy**: git push → Vercel deploy

### **Workflow:**
```bash
# Изменения → Git → Автодеплой
git add -A
git commit -m "feat: update content"
git push origin main
# → Vercel автоматически деплоит (~2-3 минуты)
```

---

## 🔧 Настройки (одноразовые)

### **Obsidian:**
```bash
# 1. Откройте Obsidian
# 2. Open folder as vault → src/content/
# 3. Создавайте .md файлы с YAML frontmatter
```

### **Vercel:**
```bash
# Уже настроено:
# - GitHub интеграция
# - Auto deploy on push
# - Security headers
# - SSL certificate
```

### **GitHub:**
```bash
# Репозиторий: github.com/neprokin/neprokin.com
# - Private repository
# - Vercel integration
# - Auto deploy webhook
```

---

## 🛠️ Локальная разработка

```bash
npm install    # Установка зависимостей
npm run dev    # Dev server → localhost:4321
npm run build  # Проверка сборки
```

---

## 📊 Мониторинг

### **URLs:**
- **Production**: https://neprokincom.vercel.app
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repo**: https://github.com/neprokin/neprokin.com

### **Performance:**
- **Lighthouse**: 100/100/100/100
- **Core Web Vitals**: Оптимизированы
- **Security**: A+ SSL Labs

---

**Все настроено и работает автоматически!** 🎯
