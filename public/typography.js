/**
 * Автоматическая типографика для браузера
 * Применяется к элементам с классом .auto-typography
 */

// Правила для неразрывных пробелов
const NON_BREAKING_RULES = [
  // Русские предлоги и союзы
  { pattern: /\b(в|во|к|ко|с|со|на|за|из|от|до|по|под|над|при|про|для|без|через|между|среди|около|вокруг|вместо|благодаря|согласно|вопреки|навстречу|вслед|вследствие|ввиду|вроде|подобно|наподобие|включая|исключая|начиная|кончая|смотря|судя|несмотря|невзирая)\s+/gi, replacement: '$1&nbsp;' },
  
  // Английские предлоги и союзы
  { pattern: /\b(in|on|at|to|for|of|with|by|from|up|about|into|through|during|before|after|above|below|between|among|under|over|across|around|near|beside|behind|beyond|within|without|against|toward|towards|upon|amid|amidst|amongst|beneath|underneath|throughout|alongside|notwithstanding)\s+/gi, replacement: '$1&nbsp;' },
  
  // Союзы
  { pattern: /\b(и|а|но|да|или|либо|что|чтобы|как|будто|словно|точно|также|тоже|причем|притом|зато|однако|тем не менее|все же|все-таки|все равно|все равно что|не только|но и)\s+/gi, replacement: '$1&nbsp;' },
  
  // Частицы
  { pattern: /\s+(ли|ль|же|ж|бы|б|не|ни|уже|ведь|вон|вот|даже|еще|именно|как|куда|откуда|почему|отчего|зачем|как|сколько|насколько|столько|столь|так|такой|такая|такое|такие|тот|та|то|те|этот|эта|это|эти)\b/gi, replacement: '&nbsp;$1' },
  
  // Короткие слова (1-2 буквы)
  { pattern: /\b(я|ты|он|она|оно|мы|вы|они|мне|тебе|ему|ей|нам|вам|им|меня|тебя|его|её|нас|вас|их|мной|тобой|им|ею|нами|вами|ими)\s+/gi, replacement: '$1&nbsp;' },
  
  // Числа и единицы измерения
  { pattern: /\b(\d+)\s+(г|кг|м|км|см|мм|л|мл|г|мг|кв|куб|руб|долл|евро|%|°|'|"|px|em|rem|pt|pc|in|cm|mm|ex|ch|vw|vh|vmin|vmax|fr|auto|none|inherit|initial|unset)\b/gi, replacement: '$1&nbsp;$2' },
  
  // Инициалы
  { pattern: /\b([А-ЯЁ]\.\s*[А-ЯЁ]\.|[A-Z]\.\s*[A-Z]\.)\s+/g, replacement: '$1&nbsp;' },
  
  // Телефонные номера
  { pattern: /\b(\d{3})-(\d{2})-(\d{2})\b/g, replacement: '<nobr>$1-$2-$3</nobr>' },
  
  // Специальные случаи
  { pattern: /\b(т\.\s*е\.|т\.\s*к\.|и\.\s*т\.\s*д\.|и\.\s*т\.\s*п\.|т\.\s*п\.|т\.\s*д\.)\s+/gi, replacement: '<nobr>$1</nobr>&nbsp;' },
];

// Правила для тире
const DASH_RULES = [
  // Замена дефисов на тире в списках
  { pattern: /(\w+)\s*-\s*(\w+)/g, replacement: '$1 — $2' },
  
  // Замена двойных дефисов на тире
  { pattern: /--/g, replacement: '—' },
];

// Правила для кавычек
const QUOTE_RULES = [
  // Русские кавычки
  { pattern: /"([^"]+)"/g, replacement: '«$1»' },
  
  // Английские кавычки (внутри русских)
  { pattern: /«([^»]*)"([^"]*)"([^»]*)»/g, replacement: '«$1"$2"$3»' },
];

// Правила для специальных символов
const SYMBOL_RULES = [
  // Copyright
  { pattern: /\(c\)/gi, replacement: '©' },
  { pattern: /\(C\)/g, replacement: '©' },
  
  // Registered trademark
  { pattern: /\(r\)/gi, replacement: '®' },
  { pattern: /\(R\)/g, replacement: '®' },
  
  // Trademark
  { pattern: /\(tm\)/gi, replacement: '™' },
  { pattern: /\(TM\)/g, replacement: '™' },
  
  // Degree
  { pattern: /(\d+)\s*градус/g, replacement: '$1°' },
  { pattern: /(\d+)\s*°C/g, replacement: '$1°C' },
  { pattern: /(\d+)\s*°F/g, replacement: '$1°F' },
  
  // Plus-minus
  { pattern: /\+-/g, replacement: '±' },
  { pattern: /-\+/g, replacement: '±' },
  
  // Number sign
  { pattern: /№\s*(\d+)/g, replacement: '№&nbsp;$1' },
];

/**
 * Применяет все правила типографики к тексту
 */
function applyTypography(text) {
  let result = text;
  
  // Применяем правила для неразрывных пробелов
  NON_BREAKING_RULES.forEach(rule => {
    result = result.replace(rule.pattern, rule.replacement);
  });
  
  // Применяем правила для тире
  DASH_RULES.forEach(rule => {
    result = result.replace(rule.pattern, rule.replacement);
  });
  
  // Применяем правила для кавычек
  QUOTE_RULES.forEach(rule => {
    result = result.replace(rule.pattern, rule.replacement);
  });
  
  // Применяем правила для специальных символов
  SYMBOL_RULES.forEach(rule => {
    result = result.replace(rule.pattern, rule.replacement);
  });
  
  return result;
}

/**
 * Применяет типографику к элементу
 */
function applyTypographyToElement(element) {
  if (element.nodeType === Node.TEXT_NODE) {
    // Если это текстовый узел, применяем типографику
    element.textContent = applyTypography(element.textContent);
  } else if (element.nodeType === Node.ELEMENT_NODE) {
    // Если это элемент, обрабатываем его дочерние узлы
    const childNodes = Array.from(element.childNodes);
    childNodes.forEach(child => {
      if (child.nodeType === Node.TEXT_NODE) {
        child.textContent = applyTypography(child.textContent);
      } else if (child.nodeType === Node.ELEMENT_NODE && !child.matches('script, style, code, pre')) {
        // Рекурсивно обрабатываем дочерние элементы, исключая скрипты и стили
        applyTypographyToElement(child);
      }
    });
  }
}

/**
 * Инициализирует автоматическую типографику
 */
function initAutoTypography() {
  // Находим все элементы с классом .auto-typography
  const elements = document.querySelectorAll('.auto-typography');
  
  elements.forEach(element => {
    applyTypographyToElement(element);
  });
}

// Запускаем автоматическую типографику при загрузке DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAutoTypography);
} else {
  initAutoTypography();
}

// Экспортируем функции для использования в других скриптах
window.autoTypography = {
  applyTypography,
  applyTypographyToElement,
  initAutoTypography
};
