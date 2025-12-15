# nuwest.ai > Company Portfolio Website (v3)

**Status:** Ready for local review
**Version:** 3.0
**Last Updated:** December 12, 2025

---

## Overview

Premium, VC-backed company portfolio website showcasing nuwest.ai's enterprise cyber resilience products:
- **Sextant** - AI-powered crisis rehearsal (available now)
- **Beacon** - Cyber recovery monitoring (coming 2026)

**Design Philosophy:** Futuristic minimalism with sharp edges, geometric patterns, and premium feel.

---

## Brand Guidelines Compliance

✅ **Logo:** `nuwest.ai >` with chevron symbol
✅ **Typography:** Chakra Petch (primary) + Inter (body)
✅ **Colors:** Signal Yellow (#FFD300), Charcoal Black (#111111)
✅ **Aesthetic:** Sharp, geometric, premium (NOT generic WordPress)

---

## Key Features

### Design
- Futuristic hero section with animated grid and pulsing chevron
- Premium black/yellow color scheme
- Responsive navigation with mobile hamburger menu
- Smooth scroll animations and transitions
- Accessibility: WCAG AA compliant, keyboard navigation, focus states

### Content
- Hero: "Battle-Tested. Board-Ready. Built Right."
- Product cards: Sextant (primary, available) + Beacon (coming soon)
- Value propositions: No BS, Evidence-based, Practitioner-built
- About section with company stats
- Contact form with validation

### Technical
- Semantic HTML5
- CSS Grid + Flexbox layout
- Vanilla JavaScript (no dependencies)
- Mobile-first responsive design
- Performance optimized (no heavy libraries)
- Intersection Observer for scroll animations

---

## File Structure

```
nuwest-v3/
├── index.html          # Main page
├── style.css           # Design system + components
├── script.js           # Interactivity + form handling
└── README.md           # This file
```

---

## Local Testing

### Quick Start
```bash
# Navigate to directory
cd /Users/home/Documents/nuwest/2026/website/nuwest-v3

# Start local server (Python 3)
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

### Alternative (Node.js)
```bash
npx http-server -p 8000
```

### Test Checklist
- [ ] Logo displays correctly: `nuwest.ai >`
- [ ] Colors match: Yellow #FFD300, Black #111111
- [ ] Fonts load: Chakra Petch + Inter
- [ ] Navigation: Smooth scroll, mobile menu works
- [ ] Hero: Animations play (grid pulse, chevron pulse)
- [ ] Products: Both cards display (Sextant + Beacon)
- [ ] Contact form: Validation works, submit feedback shows
- [ ] Responsive: Test mobile (375px), tablet (768px), desktop (1280px+)
- [ ] Accessibility: Keyboard navigation, focus states

---

## Differences from v1 (Wrong Deployment)

| Aspect | v1 (Wrong) | v3 (Correct) |
|--------|------------|--------------|
| **Logo** | "SEXTANT" | `nuwest.ai >` |
| **Font** | Space Grotesk + Inter | Chakra Petch + Inter |
| **Focus** | Single product | Company portfolio (2 products) |
| **Aesthetic** | Generic WordPress | Premium VC-backed |
| **Products** | Sextant only | Sextant + Beacon |
| **Branding** | Product page | Company portfolio |

---

## Form Backend Setup (Required for Production)

The contact form currently logs to console. For production, integrate with:

### Option 1: Formspree (Recommended)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Netlify Forms
```html
<form name="contact" method="POST" data-netlify="true">
```

### Option 3: Custom Backend
Configure API endpoint in `script.js`:
```javascript
const response = await fetch('https://api.nuwest.ai/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

---

## AWS Deployment (When Ready)

**DO NOT deploy until local review approved.**

### Prerequisites
1. AWS Account with Route 53 domain
2. S3 bucket configured for static hosting
3. CloudFront distribution (optional, for HTTPS + CDN)

### Deployment Steps
```bash
# 1. Build (if using any build tools - currently none needed)
# No build step required for this version

# 2. Upload to S3
aws s3 sync . s3://nuwest-website-bucket/ \
  --exclude ".git/*" \
  --exclude "README.md" \
  --cache-control "public, max-age=31536000"

# 3. Invalidate CloudFront (if using)
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

---

## Performance Notes

- **No external dependencies** - Only Google Fonts (Chakra Petch + Inter)
- **Minimal JavaScript** - ~5KB unminified
- **CSS** - ~20KB unminified
- **Images** - None currently (pure CSS design)
- **Total page weight** - <50KB (excluding fonts)

**Lighthouse Goals:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

---

## Browser Support

- Chrome/Edge: 90+
- Firefox: 88+
- Safari: 14+
- Mobile Safari: 14+
- Mobile Chrome: 90+

**Fallbacks:**
- CSS Grid: Flexbox fallback (auto-handled by browsers)
- Intersection Observer: Graceful degradation (animations still work)

---

## Next Steps (Optional Enhancements)

### Phase 2 Features
1. **Legal Pages**: Privacy Policy, Terms of Service
2. **Blog/Resources**: Thought leadership content
3. **Customer Logos**: Social proof section
4. **Video Background**: Hero section (if desired)
5. **Analytics**: Google Analytics / Plausible
6. **SEO**: Sitemap, structured data, meta tags
7. **A/B Testing**: Optimize conversion rates

### Technical Improvements
- Image optimization (if images added)
- Service worker for offline support
- Preload critical fonts
- Lazy load below-the-fold content

---

## Contact

**Designer/Developer:** Marketing Director (Claude Code)
**Company:** nuwest.ai
**Version History:**
- v1: Sextant product page (WRONG - deployed to AWS)
- v2: (skipped)
- v3: nuwest.ai company portfolio (CURRENT)

---

## Approval Status

- [x] Brand guidelines reviewed
- [x] Design system implemented
- [x] Local testing ready
- [ ] **Client review pending** ← YOU ARE HERE
- [ ] Production deployment

**Next Action:** Start local server, review at http://localhost:8000, provide feedback.
