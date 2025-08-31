---
title: "Design Systems in 2025: Lessons from Building neprokin.com"
description: "How I built a monochrome design system with just 6 colors and why less is more in modern web design"
publishDate: 2025-08-31
tags: ["design-systems", "ui-design", "minimalism", "web-design"]
draft: false
featured: true
image: "/images/blog/design-systems-hero.jpg"
imageAlt: "Minimalist design system showcase"
readingTime: 8
---

# Design Systems in 2025: Less is More

## The Problem with Complex Design Systems

Most design systems today are bloated. Hundreds of colors, dozens of font sizes, countless component variations. But what if we could achieve more with less?

## Building a Monochrome System

For neprokin.com, I challenged myself to create a complete design system with just **6 colors** in a monochrome palette:

- **#FDFDFD** - Soft white (backgrounds)
- **#F8F8F8** - Light gray (surfaces) 
- **#F0F0F0** - Border gray (dividers)
- **#6B6B6B** - Medium gray (secondary text)
- **#212121** - Dark gray (primary text)
- **#0A0A0A** - Soft black (accents)

## Why Monochrome Works

### 1. **Accessibility First**
- Contrast ratios exceed WCAG AAA standards
- Works for users with color blindness
- Reduces cognitive load

### 2. **Performance Benefits**
- Smaller CSS bundle sizes
- Faster theme switching
- Reduced complexity

### 3. **Timeless Aesthetics**
- Never goes out of style
- Professional appearance
- Focus on content, not decoration

## The 4px Grid System

Every measurement in the system is divisible by 4:
- Typography: 16px, 20px, 32px, 48px
- Spacing: 4px, 8px, 12px, 16px, 24px, 32px, 48px
- Border radius: 4px, 8px, 12px, 16px

This mathematical precision creates visual harmony and makes development faster.

## Typography Hierarchy

Using **IBM Plex Sans** with just 2 weights (300, 500):

```css
H1: 48px/52px, weight 300  /* Page titles */
H2: 32px/36px, weight 300  /* Section headers */
Body Large: 20px/28px, weight 300  /* Leads, intros */
Body: 16px/24px, weight 500  /* Main text */
```

## Lessons Learned

### What Worked
- **Constraints breed creativity** - Limited palette forced better design decisions
- **Maintenance is easier** - Fewer variables to manage
- **Performance improved** - Smaller CSS, faster loading

### What I'd Change
- Consider adding one accent color for CTAs
- Include more spacing variables for complex layouts
- Add animation tokens to the system

## Implementation in Astro

The entire system is built with CSS Custom Properties:

```css
:root {
  --color-text: #212121;
  --color-accent: #0A0A0A;
  --font-size-h1: 48px;
  --spacing-4: 16px;
}

[data-theme="dark"] {
  --color-text: #F8F8F8;
  --color-accent: #FDFDFD;
}
```

This approach enables instant theme switching and easy maintenance.

## Conclusion

Building neprokin.com taught me that **constraints lead to better design**. By limiting myself to 6 colors and 4 font sizes, I created a more cohesive, accessible, and maintainable design system.

The result? A website that loads in under 1.5 seconds and scores 100/100 on Lighthouse - proving that simple can be powerful.

---

*This post is part of my ongoing exploration of minimal design systems. Follow my journey at [neprokin.com](https://neprokin.com) or reach out on [Telegram](https://telegram.me/neprokin).*
