# Phase 1 MVP - Quick Start Guide

**Target:** Launch a branded lead capture page in 2-4 hours
**Updated:** November 7, 2025

---

## 🎯 Goal

Get a professional, on-brand lead capture page live ASAP to start collecting leads while the full production site is being developed.

---

## ✅ Prerequisites Checklist

Before starting development, ensure you have:

- [ ] **Existing "coming soon webpage folder"** - Contains current site content
- [ ] **Hero headline** - Main message (1 sentence)
- [ ] **Subheadline** - Supporting message (1-2 sentences)
- [ ] **Value propositions** - 2-3 key benefits or features
- [ ] **CTA text** - Call-to-action button text (e.g., "Get Early Access", "Join Waitlist")
- [ ] **Logo file** - PNG, SVG, or text-based logo
- [ ] **Form backend** - Formspree account or email endpoint
- [ ] **Hosting access** - Netlify, Vercel, GitHub Pages, or existing host

---

## 📋 Task Breakdown (2-4 Hours)

### 1. Setup & Foundation (30 min)
- [x] Review existing "coming soon webpage" content
- [ ] Create project structure
- [ ] Initialize git tracking
- [ ] Load Inter font from Google Fonts
- [ ] Set up basic file structure

**Files to create:**
```
mvp/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── logo.png (or .svg)
```

### 2. Style Implementation (45 min)
- [ ] Create CSS variables (colors from style guide)
- [ ] Implement typography system
- [ ] Build responsive grid
- [ ] Style primary CTA button (yellow on hover)
- [ ] Style form inputs (dark theme)
- [ ] Add fade-in animations
- [ ] Test mobile responsiveness

**Key CSS Variables:**
```css
--color-black: #000000;
--color-yellow: #FFD700;
--color-white: #FFFFFF;
--color-gray: #333333;
```

### 3. Page Structure (45 min)
- [ ] Build hero section
- [ ] Add headline and subheadline
- [ ] Create value proposition cards (2-3)
- [ ] Insert lead capture form
- [ ] Build simple footer
- [ ] Add logo placement

**Page Sections:**
1. Hero (full viewport height)
2. Value propositions (3-column grid on desktop)
3. Lead capture form (centered, prominent)
4. Footer (social links, copyright)

### 4. Lead Capture Form (30 min)
- [ ] Build email input field
- [ ] Add name field (optional)
- [ ] Implement client-side validation
- [ ] Style success/error messages
- [ ] Connect to form backend
- [ ] Test submission flow

**Form Fields:**
- Name (optional)
- Email (required, validated)
- Submit button (yellow with hover effect)

### 5. Content Integration (20 min)
- [ ] Insert provided copy
- [ ] Add meta tags (title, description, OG tags)
- [ ] Add favicon
- [ ] Verify all links work
- [ ] Final content review

**Required Meta Tags:**
```html
<title>Nuwest.ai - Security Solutions</title>
<meta name="description" content="...">
<meta property="og:title" content="...">
<meta property="og:image" content="...">
```

### 6. Testing & Optimization (30 min)
- [ ] Test on mobile (320px, 375px, 414px)
- [ ] Test on tablet (768px, 1024px)
- [ ] Test on desktop (1440px+)
- [ ] Test form validation
- [ ] Test form submission
- [ ] Verify color contrast (WCAG AA)
- [ ] Check Chrome, Firefox, Safari
- [ ] Optimize image sizes

**Testing Checklist:**
- [ ] Mobile responsive (portrait & landscape)
- [ ] Form validates correctly
- [ ] Form submits successfully
- [ ] All animations smooth
- [ ] No console errors
- [ ] Fast page load (< 2s)

### 7. Deployment (20 min)
- [ ] Minify CSS/JS (optional for MVP)
- [ ] Create deployment package
- [ ] Upload to hosting
- [ ] Configure domain (if needed)
- [ ] Test live site
- [ ] Share URL for approval

---

## 🎨 Design Requirements

### Colors
- **Background:** Black (#000000)
- **Text:** White (#FFFFFF)
- **Accent/CTA:** Yellow (#FFD700)
- **Borders:** Dark Gray (#333333)

### Typography
- **Font:** Inter (Google Fonts)
- **Hero headline:** 48-60px, bold
- **Subheadline:** 18-20px, regular
- **Body text:** 16px, regular
- **Buttons:** 16px, semibold

### Spacing
- **Section padding:** 64px vertical (mobile), 96px (desktop)
- **Container max-width:** 1200px
- **Content padding:** 16px (mobile), 32px (desktop)

### Components

#### Primary Button
```css
background: #FFD700;
color: #000000;
padding: 12px 32px;
border-radius: 4px;
font-weight: 600;
transition: all 0.3s ease;

hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
}
```

#### Form Input
```css
background: #1A1A1A;
border: 1px solid #333333;
color: #FFFFFF;
padding: 12px 16px;
border-radius: 4px;

focus {
  border-color: #FFD700;
  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
}
```

---

## 📝 Copy Template

### Example Content Structure

**Hero Section:**
```
[LOGO]

Headline: "Security Solutions That Actually Work"
Subheadline: "Cutting-edge threat detection powered by AI.
              No BS, just results."

[CTA Button: "Get Early Access"]
```

**Value Propositions:**
```
Icon/Graphic + Title + Description

1. Real-Time Detection
   Monitor and detect threats as they happen

2. AI-Powered Analysis
   Advanced algorithms that learn and adapt

3. Zero False Positives
   Our bsdetector eliminates the noise
```

**Form Section:**
```
Headline: "Join the Waitlist"
Subheadline: "Be the first to experience next-gen security"

[Name Field]
[Email Field]
[Submit Button]
```

**Footer:**
```
© 2025 Nuwest.ai. All rights reserved.
[Social Icons: LinkedIn, Twitter, GitHub]
Privacy Policy | Terms of Service
```

---

## 🔗 Form Backend Setup (Formspree)

### Quick Setup Steps:

1. **Create Formspree account:** https://formspree.io/
2. **Create new form**
3. **Get form endpoint:** `https://formspree.io/f/YOUR_FORM_ID`
4. **Add to HTML:**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" placeholder="Your name">
  <input type="email" name="email" placeholder="Your email" required>
  <button type="submit">Submit</button>
</form>
```

### Alternative Options:
- **Google Forms** - Free, easy integration
- **Netlify Forms** - Built-in if using Netlify hosting
- **Custom endpoint** - If you have backend infrastructure

---

## 🚀 Deployment Options

### Option 1: Netlify (Recommended for MVP)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=mvp
```

### Option 2: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Option 3: GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select branch and folder
4. Save and deploy

### Option 4: Manual Upload
- Upload files via FTP/SFTP to existing hosting
- Ensure proper file permissions
- Configure domain if needed

---

## ✅ Definition of Done

MVP is complete when:

- [ ] Page loads in < 2 seconds
- [ ] Design matches style guide (black/yellow theme)
- [ ] Form validates email addresses correctly
- [ ] Form submissions reach designated email/CRM
- [ ] Mobile responsive on all devices (320px+)
- [ ] No console errors
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Live URL accessible
- [ ] Stakeholder approved

---

## 🐛 Troubleshooting

### Form not submitting
- Check form action URL is correct
- Verify CORS settings if using custom endpoint
- Check browser console for errors
- Test with simple alert first

### Mobile layout broken
- Check CSS media queries
- Verify viewport meta tag present
- Test flex/grid fallbacks
- Use Chrome DevTools device mode

### Colors not matching
- Verify CSS variables are defined
- Check hex codes match style guide
- Test color contrast with WAVE tool
- Ensure no browser color overrides

### Slow load times
- Optimize images (compress, resize)
- Minify CSS and JavaScript
- Remove unused code
- Use browser caching headers

---

## 📞 Need Help?

**Questions about:**
- Content: Contact project stakeholder
- Design: Refer to STYLE_GUIDE.md
- Technical: Check PROJECT_PLAN.md or reach out to Miles

---

## 🎉 After Launch

Once MVP is live:

1. **Share URL** with stakeholders
2. **Monitor form submissions** - Check they're coming through
3. **Track analytics** - Add basic tracking if available
4. **Gather feedback** - Quick wins for improvements
5. **Begin Phase 2** - Start planning full production site

---

**Remember:** This is an MVP - speed over perfection. Get it live, capture leads, iterate later!

**Next Steps:** Once MVP is launched, proceed to Phase 2 (Full Production Website) per PROJECT_PLAN.md
