#!/bin/bash
# Скрипт для проверки состояния проекта neprokin.com

echo "🚀 neprokin.com - Проверка состояния проекта"
echo "=============================================="

# Проверка Git статуса
echo "📊 Git статус:"
git status --short

echo ""
echo "🌐 Ветки:"
git branch -a

echo ""
echo "📈 Последние коммиты:"
git log --oneline -5

echo ""
echo "🔍 Поиск коммитов по ключевым словам:"
echo "  - domain:"
git log --oneline --all --grep="domain" | head -3
echo "  - setup:"
git log --oneline --all --grep="setup" | head -3
echo "  - neprokin.com:"
git log --oneline --all --grep="neprokin.com" | head -3

echo ""
echo "🌍 Удаленные репозитории:"
git remote -v

echo ""
echo "📦 Статус синхронизации:"
git fetch origin --dry-run 2>&1 | head -5

echo ""
echo "✅ Проверка завершена!"
