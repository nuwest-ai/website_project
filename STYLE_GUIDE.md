# Nuwest.ai Website Style Guide

**Version:** 1.0
**Last Updated:** November 7, 2025
**Designer:** Miles

---

## Brand Identity

### Brand Personality
Nuwest.ai projects a professional, cutting-edge security company that's trustworthy, intelligent, and modern. The visual identity should convey:
- **Trust & Security** - We protect what matters
- **Innovation** - Leading-edge technology and approach
- **Clarity** - Clear communication, no BS (hence bsdetector)
- **Confidence** - Bold, decisive, and professional

---

## Color Palette

### Primary Colors

```css
/* Primary Black - Main background */
--color-black-primary: #000000;
--color-black-900: #0A0A0A;
--color-black-800: #141414;

/* Primary Yellow - Accent and highlights */
--color-yellow-primary: #FFD700;  /* Gold */
--color-yellow-400: #FFED4E;      /* Bright Yellow */
--color-yellow-500: #FFC700;      /* Deep Gold */
--color-yellow-600: #E6B800;      /* Darker Gold */

/* Whites - Text and inverse backgrounds */
--color-white-primary: #FFFFFF;
--color-white-100: #F8F8F8;
--color-white-200: #F0F0F0;

/* Grays - Supporting elements */
--color-gray-100: #E5E5E5;
--color-gray-200: #CCCCCC;
--color-gray-300: #B3B3B3;
--color-gray-400: #999999;
--color-gray-500: #808080;
--color-gray-600: #666666;
--color-gray-700: #4D4D4D;
--color-gray-800: #333333;
--color-gray-900: #1A1A1A;
```

### Color Usage Guidelines

#### Primary Style (Default)
- **Background:** Black (#000000)
- **Text:** White (#FFFFFF) or Light Gray (#E5E5E5)
- **Accents:** Yellow (#FFD700)
- **Highlights:** Bright Yellow (#FFED4E)
- **Borders:** Dark Gray (#333333) or Yellow

#### Inverse Style (Statement Blocks)
- **Background:** White (#FFFFFF) or Light Gray (#F8F8F8)
- **Text:** Black (#000000) or Dark Gray (#333333)
- **Accents:** Gold (#FFC700)
- **Highlights:** Deep Gold (#E6B800)
- **Borders:** Light Gray (#E5E5E5)

#### Interactive Elements
- **Primary CTA:** Yellow background, Black text
- **Secondary CTA:** Black background, Yellow border, Yellow text
- **Hover State:** Slight glow effect with yellow
- **Active State:** Deeper yellow (#E6B800)
- **Disabled State:** Gray (#666666)

#### Status Colors (Use sparingly)
```css
--color-success: #00C853;  /* Green for success messages */
--color-warning: #FFB300;  /* Amber for warnings */
--color-error: #D32F2F;    /* Red for errors */
--color-info: #0288D1;     /* Blue for info */
```

---

## Typography

### Font Stack

#### Primary Font - Headers & Display
```css
--font-primary: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
```
- **Characteristics:** Modern, clean, professional
- **Usage:** Headings, hero text, navigation, buttons
- **Weights:** 300 (Light), 400 (Regular), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)

#### Secondary Font - Body Text
```css
--font-secondary: 'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
```
- **Usage:** Body copy, descriptions, form labels
- **Weights:** 400 (Regular), 500 (Medium), 600 (SemiBold)

#### Monospace Font - Code & Technical
```css
--font-mono: 'JetBrains Mono', 'Fira Code', 'Monaco', 'Courier New', monospace;
```
- **Usage:** Code snippets, technical specifications, API examples
- **Weights:** 400 (Regular), 500 (Medium), 700 (Bold)

### Type Scale

```css
/* Display - Hero sections */
--text-display-xl: 72px / 1.1;    /* Hero headlines */
--text-display-lg: 60px / 1.1;    /* Major headlines */
--text-display-md: 48px / 1.2;    /* Section headers */

/* Headings */
--text-h1: 40px / 1.2;
--text-h2: 32px / 1.3;
--text-h3: 24px / 1.4;
--text-h4: 20px / 1.4;
--text-h5: 18px / 1.5;
--text-h6: 16px / 1.5;

/* Body */
--text-body-xl: 20px / 1.6;
--text-body-lg: 18px / 1.6;
--text-body-md: 16px / 1.6;
--text-body-sm: 14px / 1.5;
--text-body-xs: 12px / 1.5;

/* Labels & Captions */
--text-caption: 12px / 1.4;
--text-overline: 10px / 1.4;
```

### Typography Guidelines

- **Line Height:** 1.6 for body text, 1.2-1.3 for headlines
- **Paragraph Spacing:** 1.5em between paragraphs
- **Letter Spacing:**
  - Headers: -0.02em to -0.04em (tighter)
  - Body: 0 (normal)
  - All Caps: 0.05em to 0.1em (wider)
- **Text Color Contrast:** Minimum WCAG AA compliance (4.5:1 for body, 3:1 for large text)

---

## Layout & Spacing

### Grid System
- **Max Content Width:** 1440px
- **Breakpoints:**
  ```css
  --breakpoint-xs: 320px;   /* Small phones */
  --breakpoint-sm: 640px;   /* Large phones */
  --breakpoint-md: 768px;   /* Tablets */
  --breakpoint-lg: 1024px;  /* Desktop */
  --breakpoint-xl: 1280px;  /* Large desktop */
  --breakpoint-2xl: 1536px; /* Extra large desktop */
  ```

### Spacing Scale (8px base)
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
```

### Section Spacing
- **Section Padding (Vertical):**
  - Mobile: 48px - 64px
  - Tablet: 64px - 96px
  - Desktop: 96px - 128px
- **Container Padding (Horizontal):**
  - Mobile: 16px - 24px
  - Tablet: 32px - 48px
  - Desktop: 48px - 64px

---

## Components

### Buttons

#### Primary Button
```css
Background: var(--color-yellow-primary)
Text: var(--color-black-primary)
Font Weight: 600
Padding: 12px 32px
Border Radius: 4px
Font Size: 16px
Transition: all 0.3s ease

Hover:
  Background: var(--color-yellow-500)
  Box Shadow: 0 0 20px rgba(255, 215, 0, 0.4)
  Transform: translateY(-2px)
```

#### Secondary Button
```css
Background: transparent
Border: 2px solid var(--color-yellow-primary)
Text: var(--color-yellow-primary)
Font Weight: 600
Padding: 10px 30px
Border Radius: 4px
Font Size: 16px

Hover:
  Background: var(--color-yellow-primary)
  Text: var(--color-black-primary)
```

#### Ghost Button
```css
Background: transparent
Text: var(--color-white-primary)
Border: 2px solid var(--color-gray-600)
Font Weight: 500
Padding: 10px 30px

Hover:
  Border Color: var(--color-yellow-primary)
  Text: var(--color-yellow-primary)
```

### Forms

#### Input Fields
```css
Background: var(--color-gray-900)
Border: 1px solid var(--color-gray-700)
Text: var(--color-white-primary)
Padding: 12px 16px
Border Radius: 4px
Font Size: 16px

Focus:
  Border: 2px solid var(--color-yellow-primary)
  Box Shadow: 0 0 0 3px rgba(255, 215, 0, 0.1)
  Outline: none

Error:
  Border: 2px solid var(--color-error)

Success:
  Border: 2px solid var(--color-success)
```

#### Labels
```css
Font Size: 14px
Font Weight: 500
Color: var(--color-gray-200)
Margin Bottom: 8px
```

### Cards

#### Default Card
```css
Background: var(--color-gray-900)
Border: 1px solid var(--color-gray-800)
Border Radius: 8px
Padding: 32px
Box Shadow: 0 4px 6px rgba(0, 0, 0, 0.1)

Hover:
  Border Color: var(--color-yellow-primary)
  Transform: translateY(-4px)
  Box Shadow: 0 12px 24px rgba(0, 0, 0, 0.2)
```

#### Feature Card
```css
Background: linear-gradient(135deg, var(--color-gray-900) 0%, var(--color-black-900) 100%)
Border: 1px solid var(--color-gray-800)
Border Radius: 12px
Padding: 40px
Position: relative
Overflow: hidden

::before (accent line):
  Position: absolute
  Top: 0
  Left: 0
  Width: 4px
  Height: 100%
  Background: var(--color-yellow-primary)
```

### Navigation

#### Header
```css
Background: rgba(0, 0, 0, 0.95)
Backdrop Filter: blur(10px)
Height: 80px
Position: sticky
Border Bottom: 1px solid var(--color-gray-900)

Scrolled State:
  Box Shadow: 0 4px 12px rgba(0, 0, 0, 0.3)
```

#### Nav Links
```css
Font Size: 16px
Font Weight: 500
Color: var(--color-gray-200)
Padding: 8px 16px

Hover:
  Color: var(--color-yellow-primary)

Active:
  Color: var(--color-yellow-primary)
  Border Bottom: 2px solid var(--color-yellow-primary)
```

### Footer
```css
Background: var(--color-black-900)
Border Top: 1px solid var(--color-gray-900)
Padding: 64px 0 32px
Color: var(--color-gray-400)
```

---

## Visual Effects

### Shadows

```css
/* Subtle shadows for depth */
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.2);
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.3);
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.4);
--shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.5);

/* Yellow glow for interactive elements */
--shadow-yellow-sm: 0 0 10px rgba(255, 215, 0, 0.2);
--shadow-yellow-md: 0 0 20px rgba(255, 215, 0, 0.3);
--shadow-yellow-lg: 0 0 30px rgba(255, 215, 0, 0.4);
```

### Gradients

```css
/* Hero background gradient */
--gradient-hero: linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%);

/* Yellow accent gradient */
--gradient-yellow: linear-gradient(135deg, #FFD700 0%, #FFC700 100%);

/* Subtle overlay gradient */
--gradient-overlay: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
```

### Animations

#### Fade In
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
Animation: fadeIn 0.6s ease-out
```

#### Glow Pulse
```css
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
  }
}
Animation: glowPulse 2s ease-in-out infinite
```

#### Slide In
```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

### Hover Transitions
- **Duration:** 0.3s for most interactions
- **Timing Function:** ease-in-out
- **Properties to animate:** background, color, transform, box-shadow, border-color

---

## Background Effects

### Video Backgrounds
- **Format:** MP4, WebM
- **Placement:** Hero sections, full-page backgrounds
- **Overlay:** Dark overlay (0.6-0.8 opacity) for text readability
- **Controls:** No controls visible, autoplay, loop, muted
- **Fallback:** Static image with similar aesthetic

### Animated Patterns
- **Style:** Subtle geometric patterns, grid lines, or particle effects
- **Color:** Very dark gray (#1A1A1A) on black
- **Movement:** Slow, ambient motion
- **Opacity:** 0.1 - 0.3 to avoid distraction

### Parallax Effects
- **Usage:** Section backgrounds, large images
- **Speed:** 0.3x - 0.5x scroll speed
- **Disable:** On mobile devices for performance

---

## Imagery

### Photography Style
- **Tone:** Professional, high-contrast
- **Subject:** Technology, security, abstract concepts
- **Treatment:** Slight blue-green tint for tech feel, or keep monochrome
- **Overlay:** Often with dark gradient overlay

### Graphics & Illustrations
- **Style:** Clean, modern, minimal
- **Line Work:** Thin to medium weight lines
- **Colors:** Primarily yellow and white on black
- **Icons:** Outlined style, consistent stroke width (2px)

### Product Screenshots
- **Frame:** MacBook/browser frame or floating with shadow
- **Background:** Dark or gradient background
- **Annotations:** Yellow highlights/arrows for callouts

---

## Content Blocks

### Hero Section
```
Layout: Full viewport height
Background: Video or animated gradient
Text Alignment: Center or left
Content:
  - H1 headline (60-72px)
  - Subheadline (20-24px)
  - Primary CTA button
  - Secondary CTA (optional)
Overlay: Dark (0.6-0.7 opacity)
```

### Feature Grid
```
Layout: 3-column grid (desktop), 1-column (mobile)
Card Style: Feature cards with icon
Icon: 48x48px, yellow
Title: H3 (24px)
Description: Body medium (16px)
Spacing: 32px gap between cards
```

### Statement Block (Inverse Style)
```
Background: White or light gray
Text: Black
Border: Yellow left accent (4px wide)
Padding: 48px 64px
Font Size: 24px (quote style)
Max Width: 800px
Center aligned
```

### Stats Section
```
Background: Black with yellow accents
Layout: 4-column grid (responsive)
Number: 48-60px, yellow, bold
Label: 16px, gray
Separator: Vertical line between stats
```

### CTA Section
```
Background: Yellow
Text: Black
Padding: 80px 0
Center aligned
Headline: H2 (40px)
Button: Secondary style (black bg, white text)
```

---

## Accessibility

### WCAG Compliance
- **Target Level:** AA (minimum)
- **Color Contrast:**
  - Body text: 4.5:1 minimum
  - Large text (18px+): 3:1 minimum
  - Yellow (#FFD700) on Black: 12.4:1 ✓
  - White on Black: 21:1 ✓

### Focus States
```css
--focus-outline: 2px solid var(--color-yellow-primary);
--focus-offset: 2px;
--focus-shadow: 0 0 0 3px rgba(255, 215, 0, 0.2);
```

### Screen Reader Support
- Use semantic HTML (header, nav, main, section, footer)
- ARIA labels for icons and interactive elements
- Alt text for all images (descriptive, not decorative)
- Skip to main content link

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Visible focus indicators
- Logical tab order
- ESC key closes modals/menus

---

## Motion & Animation Guidelines

### Principles
1. **Purposeful:** Animations should guide attention or provide feedback
2. **Subtle:** Avoid distracting or excessive motion
3. **Fast:** Keep animations under 500ms for UI interactions
4. **Respectful:** Honor `prefers-reduced-motion` user preference

### Timing
- **Micro-interactions:** 150-300ms
- **Page transitions:** 300-500ms
- **Scroll animations:** 600-800ms
- **Ambient effects:** 2-4 seconds (loops)

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Code Conventions

### CSS Architecture
- **Methodology:** BEM or CSS Modules
- **Organization:** Component-based
- **Custom Properties:** Use CSS variables for theming
- **Mobile-First:** Write mobile styles first, desktop as overrides

### Naming Conventions
```css
/* BEM Example */
.component-name { }
.component-name__element { }
.component-name--modifier { }

/* Color classes */
.bg-black { background: var(--color-black-primary); }
.text-yellow { color: var(--color-yellow-primary); }
.border-gray { border-color: var(--color-gray-700); }
```

### File Structure
```
/styles
  /base
    - reset.css
    - typography.css
    - variables.css
  /components
    - button.css
    - card.css
    - form.css
    - navigation.css
  /layouts
    - header.css
    - footer.css
    - grid.css
  /utilities
    - spacing.css
    - colors.css
    - animations.css
```

---

## Brand Voice & Tone

### Voice Characteristics
- **Direct:** Get to the point, no fluff
- **Confident:** We know security, we know BS
- **Clear:** Technical but accessible
- **Human:** Professional but not corporate-stiff

### Writing Guidelines
- Use active voice
- Short sentences and paragraphs
- Break up text with headings and lists
- Technical terms explained simply
- CTAs are action-oriented and benefit-focused

### Messaging Hierarchy
1. **Headline:** Clear value proposition
2. **Subheadline:** Supporting detail or benefit
3. **Body:** Explanation and context
4. **CTA:** Clear next action

---

## Do's and Don'ts

### Do's ✓
- Use high contrast for readability
- Keep animations subtle and purposeful
- Make CTAs stand out with yellow
- Use whitespace generously
- Test on real devices
- Optimize images and videos
- Follow accessibility guidelines
- Use semantic HTML

### Don'ts ✗
- Don't use low-contrast text combinations
- Don't overuse yellow (it's an accent, not primary)
- Don't use too many different font sizes
- Don't autoplay audio
- Don't forget mobile experience
- Don't use tiny tap targets (minimum 44x44px)
- Don't ignore loading states
- Don't forget error states in forms

---

## Resources & Tools

### Design Tools
- Figma/Sketch for design mockups
- Adobe After Effects for animations
- Sora for AI video generation
- Nano banana for custom graphics

### Development Tools
- Chrome DevTools for debugging
- Lighthouse for performance/accessibility audits
- WAVE for accessibility testing
- WebPageTest for performance testing

### Fonts & Icons
- Google Fonts (Inter)
- Heroicons or Feather Icons
- Custom iconography as needed

### Color Contrast Checkers
- WebAIM Contrast Checker
- Stark (Figma plugin)
- Chrome DevTools Color Picker

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Nov 7, 2025 | Initial style guide created |

---

## Approval & Feedback

This style guide is a living document. Feedback and iterations are expected as the project evolves.

**Next Steps:**
1. Review and approve color palette
2. Select and license fonts
3. Create initial component mockups
4. Build component library in code

---

**Contact:** Miles - Chief Web Developer, nuwest.ai
