# 🎨 CSS Architecture - neprokin.com

**Архитектура стилей - всегда под рукой в Cursor**

---

## 🎯 Единые источники правды

### **🚀 Layout.astro (Critical CSS)**
```css
:root {
  --white: #FDFDFD; --black: #0A0A0A;
  --bg: var(--white); --accent: var(--black);
  --font-family: system-ui, -apple-system, sans-serif;
}
```

### **📐 globals.css (Extended CSS)**
```css
/* Spacing (4px grid) */
--space-xs: 4px; --space-sm: 8px; --space-lg: 16px; --space-xl: 24px;

/* Typography */
--font-size-h1: 48px; --font-size-body: 16px;
--font-weight-light: 300; --font-weight-medium: 500;

/* Breakpoints */
--bp-mobile: 480px; --bp-desktop: 1024px;
```

---

## 🧩 Компоненты

### **Borderless design (чистый вид):**
```css
.badge { border: none; background: var(--surface); }
.btn   { border: none; background: var(--accent); }
.card  { border: none; background: var(--surface); }
.input { border: none; background: var(--surface); }
```

### **Unified sizing (8px vertical padding):**
```css
.badge { padding: var(--space-sm) var(--space-lg); } /* 8px 16px */
.btn   { padding: var(--space-sm) var(--space-lg); } /* 8px 16px */
```

### **Unified table system (.companies-table):**
```css
.companies-table { max-width: 800px; margin: 0; }
.companies-table-content { width: 100%; border-collapse: collapse; }
.company-cell { width: 40%; } /* Title/Name column */
.role-cell { width: 45%; } /* Description column */
.status-cell { width: 15%; text-align: right; } /* Action column */
```

### **4px grid compliance:**
```css
border-radius: var(--space-sm); /* 8px - все скругления */
```

---

## 📱 Responsive

### **Mobile navigation:**
```css
@media (max-width: 768px) {
  .nav-toggle { display: block; }
  .nav-links { position: absolute; transform: translateY(-100%); }
  .nav-links.nav-open { transform: translateY(0); }
}
```

---

## 🔧 Workflow

### **Добавление стилей:**
1. **Критические** → Layout.astro
2. **Компонентные** → globals.css  
3. **Utility** → tailwind.config.mjs
4. **Проверить** → /uikit

### **Таблицы (единая система):**
```html
<!-- ✅ Всегда используй .companies-table -->
<div class="companies-table">
  <table class="companies-table-content">
    <tbody>
      <tr>
        <td class="company-cell"><span class="company-name">Title</span></td>
        <td class="role-cell">Description</td>
        <td class="status-cell"><a class="table-action-link">Action</a></td>
      </tr>
    </tbody>
  </table>
</div>
```

### **Naming:**
```css
/* ✅ Хорошо */
--space-xl, .nav-item, .btn-primary

/* ❌ Плохо */  
--spacing-large, .navigationItem, .redButton
```

---

**Live UI Kit: http://localhost:4321/uikit**
