/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      // Цвета из UI Kit
      colors: {
        // Базовые цвета
        'ui-white': '#FDFDFD',
        'ui-light': '#F8F8F8',
        'ui-border': '#F0F0F0',
        'ui-text-secondary': '#6B6B6B',
        'ui-dark': '#212121',
        'ui-black': '#0A0A0A',
        
        // Семантические цвета (будут переопределены через CSS variables)
        'bg': 'var(--bg)',
        'surface': 'var(--surface)',
        'text': 'var(--text)',
        'accent': 'var(--accent)',
        'border-color': 'var(--border-color)',
        'text-muted': 'var(--text-muted)',
      },
      
      // Типографика из UI Kit
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      
      fontSize: {
        'h1': ['48px', '52px'],
        'h2': ['32px', '36px'],
        'body-large': ['20px', '28px'],
        'body': ['16px', '24px'],
      },
      
      fontWeight: {
        'light': '300',
        'medium': '500',
      },
      
      // Spacing система через CSS переменные
      spacing: {
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '4xl': 'var(--space-4xl)',
        '5xl': 'var(--space-5xl)',
        '6xl': 'var(--space-6xl)',
        '7xl': 'var(--space-7xl)',
        // Сохраняем числовые значения для совместимости
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '24': '96px',
        '32': '128px',
      },
      
      // Border radius
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      
      // Анимации
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Container queries будут добавлены позже при необходимости
  ]
}
