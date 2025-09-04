# ⚡ Quick Reference - neprokin.com

**Быстрый справочник - всегда под рукой в Cursor**

---

## 🎨 CSS Variables

### **Colors:**
```css
/* Critical (Layout.astro) */
--white: #FDFDFD; --black: #0A0A0A;
--bg: var(--white); --accent: var(--black);

/* Extended (globals.css) */
--light: #F8F8F8; --surface: var(--light);
--text: var(--dark); --text-muted: var(--text-secondary);
```

### **Spacing (4px grid):**
```css
--space-xs: 4px;    --space-sm: 8px;     --space-md: 12px;
--space-lg: 16px;   --space-xl: 24px;    --space-2xl: 32px;
--space-3xl: 48px;  --space-6xl: 128px;
```

### **Typography:**
```css
--font-size-h1: 48px;        --font-weight-light: 300;
--font-size-h2: 32px;        --font-weight-medium: 500;
--font-size-body-large: 20px;
--font-size-body: 16px;
```

### **Breakpoints:**
```css
--bp-mobile: 480px;   --bp-tablet: 768px;
--bp-desktop: 1024px; --bp-wide: 1400px;
```

---

## 🧩 Components

### **Typography Classes:**
```css
.h1           /* 48px, light (300) */
.h2           /* 32px, light (300) */
.body-large   /* 20px, light (300) */
.body         /* 16px, medium (500) */
.body-light   /* 16px, light (300) - NEW */
```

### **Color Classes:**
```css
.text-primary    /* var(--text) */
.text-secondary  /* var(--text-muted) */
.text-accent     /* var(--accent) */
```

### **Component Classes:**
```css
.btn             /* Button base */
.btn-primary     /* Primary button */
.badge           /* Badge/tag */
.card            /* Card container */
.nav-item        /* Navigation item */
```

---

## 📱 Responsive

### **Mobile-first:**
```css
/* Base: Mobile */
.component { flex-direction: column; }

/* Desktop */
@media (min-width: 768px) {
  .component { flex-direction: row; }
}
```

---

## 🔧 Quick Actions

### **CSS:**
- **Change colors** → Layout.astro
- **Change spacing** → globals.css  
- **Add component** → globals.css
- **Check result** → /uikit

### **Components:**
```astro
<Button variant="primary">Text</Button>
<Badge>Tag</Badge>
<Card>Content</Card>
```

### **Dev:**
```bash
npm run dev    # Start development
npm run build  # Check build
git push       # Deploy
```

---

**Live UI Kit: http://localhost:4321/uikit** 🎨
