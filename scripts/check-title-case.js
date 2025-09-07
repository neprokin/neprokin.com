#!/usr/bin/env node

/**
 * Title Case Checker
 * Проверяет правильность Title Case в HTML файлах проекта
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Слова, которые НЕ должны быть с заглавной буквы в Title Case
const MINOR_WORDS = new Set([
  'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'if', 'in', 'nor', 'of', 'on', 'or', 'per', 'so', 'the', 'to', 'up', 'via', 'yet'
]);

// Слова, которые ВСЕГДА должны быть с заглавной буквы
const ALWAYS_CAPITALIZE = new Set([
  'ai', 'api', 'css', 'html', 'js', 'ts', 'ux', 'ui', 'b2b', 'saas', 'mvp', 'cto', 'ceo', 'cfo'
]);

function isTitleCase(text) {
  if (!text || typeof text !== 'string') return true;
  
  const words = text.split(/\s+/);
  
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase().replace(/[^\w]/g, '');
    
    if (!word) continue;
    
    const isFirstWord = i === 0;
    const isLastWord = i === words.length - 1;
    const shouldCapitalize = isFirstWord || isLastWord || 
                           !MINOR_WORDS.has(word) || 
                           ALWAYS_CAPITALIZE.has(word);
    
    const actualCapitalized = words[i][0] === words[i][0].toUpperCase();
    
    if (shouldCapitalize && !actualCapitalized) {
      return false;
    }
    
    if (!shouldCapitalize && actualCapitalized) {
      return false;
    }
  }
  
  return true;
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const errors = [];
  
  // Найти все заголовки h1, h2, h3
  const headingRegex = /<(h[1-3])(?:\s[^>]*)?>([^<]+)<\/\1>/gi;
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const tag = match[1];
    const text = match[2].trim();
    
    if (!isTitleCase(text)) {
      const lineNumber = content.substring(0, match.index).split('\n').length;
      errors.push({
        file: filePath,
        line: lineNumber,
        tag: tag,
        text: text,
        suggestion: suggestTitleCase(text)
      });
    }
  }
  
  return errors;
}

function suggestTitleCase(text) {
  const words = text.split(/\s+/);
  
  return words.map((word, index) => {
    const cleanWord = word.toLowerCase().replace(/[^\w]/g, '');
    const isFirstWord = index === 0;
    const isLastWord = index === words.length - 1;
    const shouldCapitalize = isFirstWord || isLastWord || 
                           !MINOR_WORDS.has(cleanWord) || 
                           ALWAYS_CAPITALIZE.has(cleanWord);
    
    if (shouldCapitalize) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word.toLowerCase();
    }
  }).join(' ');
}

async function main() {
  const files = await glob('src/**/*.astro');
  let totalErrors = 0;
  
  console.log('🔍 Checking Title Case in Astro files...\n');
  
  files.forEach(file => {
    const errors = checkFile(file);
    
    if (errors.length > 0) {
      console.log(`❌ ${file}:`);
      errors.forEach(error => {
        console.log(`   Line ${error.line}: <${error.tag}>${error.text}</${error.tag}>`);
        console.log(`   💡 Suggested: ${error.suggestion}`);
        console.log('');
        totalErrors++;
      });
    }
  });
  
  if (totalErrors === 0) {
    console.log('✅ All headings follow proper Title Case!');
    process.exit(0);
  } else {
    console.log(`❌ Found ${totalErrors} Title Case issues`);
    process.exit(1);
  }
}

// Запуск скрипта
main().catch(console.error);

export { isTitleCase, suggestTitleCase };