/**
 * =============================================================================
 * Remark-плагин для типографики Markdown-контента
 * =============================================================================
 * 
 * Применяет типографические правила к текстовому контенту в Markdown.
 * Работает на уровне AST (до преобразования в HTML), что позволяет
 * избежать проблем с экранированием HTML-сущностей.
 * 
 * Что делает:
 * - Добавляет неразрывные пробелы после коротких слов (предлоги, союзы)
 * - Добавляет неразрывные пробелы перед последним коротким словом
 * - Исправляет типографику для русского и английского языков
 * 
 * Почему remark, а не astro-typograf:
 * - astro-typograf работает после рендеринга HTML
 * - Markdown-парсер экранирует HTML-сущности (&nbsp; → &amp;nbsp;)
 * - remark-плагин работает до рендеринга, используя Unicode-символы
 * 
 * Использование:
 * В astro.config.mjs добавить в remarkPlugins:
 *   import remarkTypograf from './src/plugins/remark-typograf.mjs';
 *   remarkPlugins: [remarkTypograf, ...]
 * 
 * Документация Typograf: https://github.com/typograf/typograf
 * =============================================================================
 */

import Typograf from 'typograf';
import { visit } from 'unist-util-visit';

// Создаём экземпляр Typograf с настройками
const tp = new Typograf({
  locale: ['ru', 'en-US'],
  // Используем UTF-символы напрямую, без HTML-сущностей
  // Это критично для работы с Markdown — иначе &nbsp; будет экранирован
  htmlEntity: { type: 'utf' },
});

// Настройки правил типографики
// lengthShortWord: 3 — слова до 3 символов считаются "короткими"
tp.setSetting('common/nbsp/afterShortWord', 'lengthShortWord', 3);
tp.setSetting('common/nbsp/beforeShortLastWord', 'lengthShortWord', 3);

/**
 * Remark-плагин для применения типографики
 * @returns {function} Transformer функция для обработки AST
 */
export default function remarkTypograf() {
  return (tree) => {
    // Обходим все текстовые узлы в AST
    visit(tree, 'text', (node) => {
      // Применяем типографику к тексту
      node.value = tp.execute(node.value);
    });
  };
}

