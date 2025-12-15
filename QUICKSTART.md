# nuwest.ai v3 - Quick Start Guide

## What This Is

**CORRECT VERSION:** Company portfolio website with proper nuwest.ai branding
- Logo: `nuwest.ai >` (NOT "SEXTANT")
- Fonts: Chakra Petch + Inter (NOT Space Grotesk)
- Products: Sextant AND Beacon (NOT just Sextant)
- Aesthetic: Premium, VC-backed (NOT generic WordPress)

**Status:** ✅ Ready for local review → ⏸️ Awaiting deployment approval

---

## Local Preview (Start Here)

```bash
# 1. Navigate to directory
cd /Users/home/Documents/nuwest/2026/website/nuwest-v3

# 2. Start local server
python3 -m http.server 8000

# 3. Open in browser
open http://localhost:8000
```

**Or use Node.js:**
```bash
npx http-server -p 8000
```

---

## What to Check

### Visual Identity ✅
- [ ] Logo: `nuwest.ai >` with yellow chevron
- [ ] Font: Chakra Petch (sharp, geometric) for headlines
- [ ] Colors: Signal Yellow (#FFD300), Charcoal Black (#111111)
- [ ] Aesthetic: Premium, futuristic, NOT generic

### Hero Section ✅
- [ ] Headline: "Battle-Tested. Board-Ready. Built Right."
- [ ] Animated grid pattern in background
- [ ] Pulsing giant chevron (right side)
- [ ] Two CTAs: "Explore Products" + "Talk to Us"

### Products Section ✅
- [ ] TWO product cards (not one)
  - **Sextant:** "Available Now" badge, primary styling
  - **Beacon:** "Coming 2026" badge, secondary styling
- [ ] Sextant description: NO "TurboTax" reference
  - Correct copy: "Realistic ransomware simulations facilitated by AI..."
  - D&D-style messaging ✓
  - Framework alignment ✓

### Company Positioning ✅
- [ ] About section: Company mission (not just product)
- [ ] Value props: "No Buzzword BS", "Evidence Over Compliance", "Built for Practitioners"
- [ ] Stats: "$5K-$20K Saved", "5 Compliance Frameworks", "24/7 AI-Powered"

### Interactions ✅
- [ ] Mobile menu: Hamburger toggle works
- [ ] Smooth scroll: Nav links scroll to sections
- [ ] Hero animation: Grid pulse + chevron pulse
- [ ] Product cards: Hover effects (glow, lift)
- [ ] Contact form: Validation + submit feedback

### Responsive Design ✅
- [ ] Mobile (375px): Single column, readable
- [ ] Tablet (768px): Stacked layout
- [ ] Desktop (1280px+): Full grid layouts

---

## Files Overview

| File | Purpose | Size |
|------|---------|------|
| `index.html` | Main page structure | ~13KB |
| `style.css` | Design system + components | ~20KB |
| `script.js` | Interactions + form handling | ~5KB |
| `README.md` | Technical documentation | ~6KB |
| `COMPARISON.md` | v1 vs v3 differences | ~8KB |
| `QUICKSTART.md` | This file | ~2KB |

**Total page weight:** <50KB (excluding Google Fonts)

---

## Key Changes from v1 (Wrong Deployment)

| What Changed | v1 (Wrong) | v3 (Correct) |
|--------------|------------|--------------|
| **Logo** | SEXTANT | nuwest.ai > |
| **Font** | Space Grotesk | Chakra Petch |
| **Focus** | Product page | Company portfolio |
| **Products** | Sextant only | Sextant + Beacon |
| **Copy** | "TurboTax of..." | "Realistic ransomware simulations..." |
| **Aesthetic** | Generic | Premium, futuristic |

---

## Deployment (DO NOT DEPLOY YET)

**Status:** ⏸️ Awaiting user approval

**When approved, follow these steps:**

### 1. Configure Form Backend
```html
<!-- Option A: Formspree -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

<!-- Option B: Netlify Forms -->
<form name="contact" method="POST" data-netlify="true">
```

### 2. Deploy to AWS S3
```bash
# Sync files to S3
aws s3 sync /Users/home/Documents/nuwest/2026/website/nuwest-v3/ \
  s3://nuwest-website-bucket/ \
  --exclude ".git/*" \
  --exclude "*.md" \
  --exclude ".DS_Store" \
  --cache-control "public, max-age=31536000"

# Invalidate CloudFront cache (if using CDN)
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

### 3. Verify Deployment
- Visit https://nuwest.ai
- Check logo: `nuwest.ai >`
- Check products: Both Sextant and Beacon visible
- Test mobile responsiveness
- Test contact form submission

---

## Common Issues

### Fonts not loading
**Solution:** Check network tab for CORS errors. Google Fonts should load from fonts.googleapis.com

### Chevron animation stuttering
**Solution:** Check browser performance. Disable animations in reduced-motion mode.

### Form submission not working
**Solution:** Configure form backend (Formspree/Netlify). Currently logs to console only.

### Mobile menu not closing
**Solution:** Check JavaScript console for errors. Verify `script.js` loaded.

---

## Next Steps

1. **Review locally** → `python3 -m http.server 8000`
2. **Provide feedback** → Update files based on review
3. **Configure form** → Choose Formspree/Netlify/custom
4. **Deploy to AWS** → Update S3 bucket
5. **Monitor** → Check analytics, fix any issues

---

## Brand Guidelines Compliance

✅ Logo: `nuwest.ai >` with chevron symbol
✅ Typography: Chakra Petch (primary) + Inter (body)
✅ Colors: Signal Yellow (#FFD300), Charcoal Black (#111111)
✅ Aesthetic: Futuristic minimalism, sharp edges, geometric
✅ Copy: No "TurboTax" references, Sugarman principles (specificity, credibility)

**Reference:** `/website/website_project/nuwest_brand_guidelines-v0.2.md`

---

## Contact

**Created by:** Marketing Director (Claude Code)
**Company:** nuwest.ai
**Date:** December 12, 2025
**Version:** 3.0

**Questions?** Open an issue or contact the team.
