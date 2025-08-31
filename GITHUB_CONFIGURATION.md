# 🔧 GitHub Configuration для neprokin.com

**Репозиторий**: https://github.com/neprokin/neprokin.com  
**Тип**: Private Repository  
**Дата создания**: 31 августа 2025

---

## 📊 Информация о репозитории

### Основные настройки
- **Owner**: neprokin
- **Repository name**: neprokin.com
- **Description**: Personal website powered by Obsidian and Astro with custom UI-kit
- **Visibility**: Private
- **Default branch**: main

### Текущее состояние
- **Commits**: 2 (Initial + Feature commit)
- **Files**: 23 файла
- **Code size**: ~104.50 KiB
- **Languages**: TypeScript, JavaScript, CSS, HTML, Markdown

---

## 🔗 Git Remote Configuration

### Подключение
```bash
# Remote URL
origin: https://github.com/neprokin/neprokin.com.git (fetch)
origin: https://github.com/neprokin/neprokin.com.git (push)

# Tracking branch
main -> origin/main
```

### Git User Configuration
```bash
user.name: neprokin
# user.email: [настроить при необходимости]
```

---

## 📋 Рекомендуемые настройки GitHub

### 1. Repository Settings

#### General
- [x] **Repository name**: neprokin.com
- [x] **Description**: Personal website powered by Obsidian and Astro with custom UI-kit
- [ ] **Website**: https://neprokin.com (добавить после деплоя)
- [ ] **Topics**: `astro`, `typescript`, `obsidian`, `ui-kit`, `personal-website`

#### Features
- [x] **Issues**: Enable (для bug tracking)
- [x] **Projects**: Enable (для планирования)
- [ ] **Wiki**: Disable (документация в README)
- [ ] **Discussions**: Disable (не нужно для личного сайта)

#### Pull Requests
- [x] **Allow merge commits**: Enable
- [x] **Allow squash merging**: Enable  
- [x] **Allow rebase merging**: Enable
- [x] **Automatically delete head branches**: Enable

#### Security
- [x] **Private vulnerability reporting**: Enable
- [x] **Dependency graph**: Enable
- [x] **Dependabot alerts**: Enable
- [x] **Dependabot security updates**: Enable

### 2. Branch Protection Rules

#### Main Branch Protection
```
Branch name pattern: main

Protect matching branches:
- [x] Require a pull request before merging
- [x] Require status checks to pass before merging
- [ ] Require branches to be up to date before merging
- [ ] Require conversation resolution before merging
- [x] Restrict pushes that create files larger than 100MB
```

### 3. GitHub Actions / Pages

#### Pages Settings
```
Source: GitHub Actions
Build and deployment: Astro workflow

Custom domain: neprokin.com (после настройки DNS)
HTTPS: Enforce HTTPS
```

#### Suggested Actions
- **Astro Build & Deploy**: Автоматический деплой на GitHub Pages
- **Lighthouse CI**: Проверка производительности на каждый PR
- **CodeQL**: Анализ безопасности кода

---

## 🚀 Workflow для разработки

### Основной workflow
```bash
# Ежедневная разработка
git pull origin main
# ... разработка ...
git add .
git commit -m "feat: add new feature"
git push origin main
```

### Feature branches
```bash
# Создание feature branch
git checkout -b feature/blog-system
# ... разработка ...
git add .
git commit -m "feat: implement blog system"
git push -u origin feature/blog-system

# Создание PR через GitHub UI
# Merge через GitHub UI
# Удаление локальной ветки
git checkout main
git pull origin main
git branch -d feature/blog-system
```

### Hotfix workflow
```bash
# Критические исправления
git checkout -b hotfix/fix-critical-bug
# ... исправление ...
git commit -m "fix: resolve critical bug"
git push -u origin hotfix/fix-critical-bug
# Создать PR с high priority
```

---

## 📦 GitHub Packages (будущее)

### npm Package (если понадобится)
```json
{
  "name": "@neprokin/ui-kit",
  "version": "1.0.0",
  "description": "Monochrome UI Kit for neprokin.com",
  "repository": "github:neprokin/neprokin.com"
}
```

---

## 🔐 Security Settings

### Secrets (для CI/CD)
```
VERCEL_TOKEN: [для автоматического деплоя]
VERCEL_ORG_ID: [для Vercel интеграции]
VERCEL_PROJECT_ID: [для проекта]
```

### Environment Variables
```
NODE_ENV: production
ASTRO_TELEMETRY_DISABLED: 1
```

---

## 📊 Мониторинг и аналитика

### GitHub Insights
- **Pulse**: Еженедельная активность
- **Contributors**: Статистика контрибуций
- **Traffic**: Просмотры и клоны (для public repo)
- **Dependency graph**: Анализ зависимостей

### Рекомендуемые интеграции
- **Vercel**: Автоматический деплой
- **Lighthouse CI**: Проверка производительности
- **Dependabot**: Обновление зависимостей
- **CodeQL**: Анализ безопасности

---

## 🎯 Roadmap для GitHub

### Ближайшие задачи
- [ ] Настроить GitHub Pages
- [ ] Добавить Astro workflow
- [ ] Настроить автоматический деплой
- [ ] Добавить topics и description

### Долгосрочные планы
- [ ] Branch protection rules
- [ ] PR templates
- [ ] Issue templates
- [ ] GitHub Projects для планирования
- [ ] Release automation

---

## 📞 Поддержка и контакты

### GitHub Profile
- **Username**: neprokin
- **Profile**: https://github.com/neprokin
- **Bio**: Product Designer 🎯 Focusing
- **Repositories**: 7 (включая neprokin.com)

### Связанные репозитории
- **cursor-talk-to-figma-mcp**: Figma интеграция для Cursor
- **Figma-Context-MCP**: MCP сервер для Figma
- **vibedesign**: Python проект
- **setting**: Конфигурационные файлы

---

**GitHub настроен и готов для профессиональной разработки!** 🚀
