/**
 * =============================================================================
 * Remark-плагин для типографики Markdown-контента
 * =============================================================================
 * 
 * Применяет типографические правила к текстовому контенту в Markdown.
 * Работает на уровне AST (до преобразования в HTML).
 * 
 * Документация Typograf: https://github.com/typograf/typograf
 * =============================================================================
 */

import Typograf from 'typograf';

// Создаём экземпляр Typograf
const tp = new Typograf({
  locale: ['ru', 'en-US'],
  htmlEntity: { type: 'digit' },
});

// Настройки правил типографики
tp.setSetting('common/nbsp/afterShortWord', 'lengthShortWord', 3);
tp.setSetting('common/nbsp/beforeShortLastWord', 'lengthShortWord', 3);

/**
 * Конвертирует HTML-сущности в Unicode символы
 */
function htmlEntitiesToUnicode(text) {
  if (!text || typeof text !== 'string') return text;
  return text
    .replace(/&#160;/g, '\u00A0')
    .replace(/&#171;/g, '«')
    .replace(/&#187;/g, '»')
    .replace(/&#8212;/g, '—')
    .replace(/&#8211;/g, '–')
    .replace(/&#8230;/g, '…')
    .replace(/&#8364;/g, '€');
}

/**
 * Рекурсивно обходит дерево AST и применяет типографику к текстовым узлам
 */
function processNode(node) {
  if (node.type === 'text' && node.value && typeof node.value === 'string') {
    const result = tp.execute(node.value);
    if (result && typeof result === 'string') {
      node.value = htmlEntitiesToUnicode(result);
    }
  }
  
  if (node.children && Array.isArray(node.children)) {
    node.children.forEach(processNode);
  }
}

/**
 * Remark-плагин для применения типографики
 */
export default function remarkTypograf() {
  return (tree) => {
    processNode(tree);
  };
}

