# nuwest.ai v3 Deployment Checklist

**Current Status:** ✅ Ready for review → Local server running at http://localhost:8000

---

## Pre-Deployment Checklist

### 1. Brand Guidelines Compliance ✅
- [x] Logo: `nuwest.ai >` with chevron (NOT "SEXTANT")
- [x] Primary font: Chakra Petch (NOT Space Grotesk)
- [x] Body font: Inter
- [x] Colors: Signal Yellow #FFD300, Charcoal Black #111111
- [x] Aesthetic: Premium, futuristic minimalism (NOT generic WordPress)

### 2. Content Review ✅
- [x] Hero: "Battle-Tested. Board-Ready. Built Right."
- [x] Products: TWO cards (Sextant + Beacon)
- [x] Sextant copy: NO "TurboTax" reference
  - [x] Updated to: "Realistic ransomware simulations facilitated by AI..."
  - [x] D&D-style messaging present
  - [x] Framework alignment emphasized
  - [x] Measured outcomes highlighted
- [x] Beacon: "Coming 2026" badge
- [x] About: Company mission (not just product)
- [x] Value props: "No Buzzword BS", "Evidence Over Compliance", "Built for Practitioners"

### 3. Technical Validation ⏸️ (USER TO VERIFY)
- [ ] Local preview looks correct at http://localhost:8000
- [ ] Logo displays properly: `nuwest.ai >`
- [ ] Fonts load correctly (Chakra Petch + Inter)
- [ ] Mobile menu works (hamburger toggle)
- [ ] Smooth scroll navigation
- [ ] Hero animations play (grid pulse, chevron pulse)
- [ ] Product cards hover effects work
- [ ] Contact form validation works
- [ ] All footer links functional (especially Privacy Policy and Terms of Service)
- [ ] Legal pages exist and load correctly (pages/privacy.html, pages/terms.html)
- [ ] Legal pages use consistent nuwest.ai v3 branding
- [ ] Responsive design works (test mobile, tablet, desktop)

### 4. Copy Guidelines Compliance ✅
- [x] Sugarman principles: Specificity, credibility, emotion
- [x] NO product comparisons (no "TurboTax")
- [x] D&D-style messaging for Sextant ✓
- [x] Emphasis on: Realistic scenarios, measured outcomes, framework alignment ✓
- [x] Practitioner-built positioning ✓
- [x] Evidence-based messaging ✓

---

## Deployment Steps (WHEN APPROVED)

### Step 1: Configure Contact Form Backend

**Choose ONE option:**

#### Option A: Formspree (Recommended - Easiest)
1. Sign up at https://formspree.io
2. Create new form
3. Update `index.html` line 277:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Remove JavaScript form handler (optional - Formspree handles it)

#### Option B: Netlify Forms (If deploying to Netlify)
1. Update `index.html` line 277:
   ```html
   <form class="contact-form" id="contactForm" name="contact" method="POST" data-netlify="true">
   ```
2. Netlify auto-detects and handles form submissions

#### Option C: Custom Backend API
1. Set up API endpoint at `https://api.nuwest.ai/contact`
2. Update `script.js` line ~90 to use real endpoint
3. Implement CORS headers on backend
4. Add email notification service (SendGrid/Mailgun)

---

### Step 2: AWS S3 Deployment

#### Prerequisites
- AWS CLI installed and configured
- S3 bucket created: `nuwest-website-bucket` (or your bucket name)
- S3 static website hosting enabled
- CloudFront distribution (optional but recommended for HTTPS)

#### Deploy Files
```bash
# 1. Navigate to directory
cd /Users/home/Documents/nuwest/2026/website/nuwest-v3

# 2. Sync files to S3 (EXCLUDES markdown docs)
aws s3 sync . s3://nuwest-website-bucket/ \
  --exclude ".git/*" \
  --exclude "*.md" \
  --exclude ".DS_Store" \
  --exclude "COMPARISON.md" \
  --exclude "DEPLOYMENT_CHECKLIST.md" \
  --exclude "PREVIEW.md" \
  --exclude "QUICKSTART.md" \
  --exclude "README.md" \
  --cache-control "public, max-age=31536000" \
  --delete

# 3. Set correct MIME types (if needed)
aws s3 cp s3://nuwest-website-bucket/style.css \
  s3://nuwest-website-bucket/style.css \
  --content-type "text/css" \
  --metadata-directive REPLACE

aws s3 cp s3://nuwest-website-bucket/script.js \
  s3://nuwest-website-bucket/script.js \
  --content-type "application/javascript" \
  --metadata-directive REPLACE

# 4. Invalidate CloudFront cache (if using CDN)
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

#### Verify S3 Deployment
```bash
# List uploaded files
aws s3 ls s3://nuwest-website-bucket/

# Expected files:
# - index.html
# - style.css
# - script.js
```

---

### Step 3: Post-Deployment Verification

#### Automated Checks
```bash
# Check HTTP status
curl -I https://nuwest.ai

# Check for correct logo text
curl https://nuwest.ai | grep "nuwest.ai"

# Check for Chakra Petch font
curl https://nuwest.ai | grep "Chakra+Petch"

# Check for both products
curl https://nuwest.ai | grep "Sextant"
curl https://nuwest.ai | grep "Beacon"
```

#### Manual Checks
- [ ] Visit https://nuwest.ai
- [ ] Logo shows `nuwest.ai >` (NOT "SEXTANT")
- [ ] Fonts load: Chakra Petch for headlines
- [ ] Hero headline: "Battle-Tested. Board-Ready. Built Right."
- [ ] Products section shows TWO cards (Sextant + Beacon)
- [ ] Sextant description: NO "TurboTax" reference
- [ ] Mobile menu works (test on real mobile device)
- [ ] Contact form submits successfully
- [ ] All animations work (grid pulse, chevron pulse)
- [ ] Page loads fast (<2 seconds)

#### Browser Testing
- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] Chrome (mobile)
- [ ] Safari (iOS mobile)

#### Performance Testing
```bash
# Run Lighthouse audit
lighthouse https://nuwest.ai --view

# Expected scores:
# Performance: 95+
# Accessibility: 100
# Best Practices: 95+
# SEO: 100
```

---

### Step 4: DNS & SSL (If New Domain)

If this is first deployment to nuwest.ai:

1. **Route 53 / DNS Configuration:**
   ```bash
   # Point nuwest.ai to S3 bucket or CloudFront distribution
   # A record: nuwest.ai → CloudFront distribution
   # CNAME record: www.nuwest.ai → nuwest.ai
   ```

2. **SSL Certificate (ACM):**
   - Request certificate in AWS Certificate Manager
   - Validate via DNS (add CNAME records)
   - Attach to CloudFront distribution

3. **CloudFront Distribution:**
   - Origin: S3 bucket
   - Alternate domain names: nuwest.ai, www.nuwest.ai
   - SSL certificate: ACM certificate
   - Viewer protocol: Redirect HTTP to HTTPS

---

## Rollback Plan

If deployment has issues:

### Quick Rollback (S3)
```bash
# Restore previous version from S3 versioning
aws s3api list-object-versions \
  --bucket nuwest-website-bucket \
  --prefix index.html

aws s3api copy-object \
  --bucket nuwest-website-bucket \
  --copy-source nuwest-website-bucket/index.html?versionId=PREVIOUS_VERSION_ID \
  --key index.html
```

### Full Rollback (CloudFront)
```bash
# Point CloudFront to backup S3 bucket
aws cloudfront update-distribution \
  --id YOUR_DISTRIBUTION_ID \
  --distribution-config file://backup-config.json
```

---

## Monitoring (Post-Deployment)

### Analytics Setup
1. Add Google Analytics (optional):
   ```html
   <!-- Add before </head> -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. Or use Plausible (privacy-friendly):
   ```html
   <script defer data-domain="nuwest.ai" src="https://plausible.io/js/script.js"></script>
   ```

### Uptime Monitoring
- UptimeRobot: https://uptimerobot.com
- Pingdom: https://www.pingdom.com
- Or AWS CloudWatch alarms

### Error Tracking
- Sentry: https://sentry.io
- Or CloudWatch Logs for S3/CloudFront

---

## Success Criteria

Deployment is successful when:
- [x] Logo: `nuwest.ai >` visible
- [x] Fonts: Chakra Petch + Inter load correctly
- [x] Products: Both Sextant and Beacon cards display
- [x] Copy: No "TurboTax" references
- [x] Mobile: Responsive design works
- [x] Forms: Contact form submits
- [x] Performance: Lighthouse score 95+
- [x] SSL: HTTPS works, no mixed content warnings
- [x] Analytics: Tracking active (if enabled)

---

## Timeline Estimate

| Task | Time | Owner |
|------|------|-------|
| Local review | 15 min | User |
| Configure form backend | 10 min | User/Dev |
| AWS S3 sync | 5 min | Dev |
| CloudFront invalidation | 2 min | Dev |
| Verification testing | 20 min | User/QA |
| **Total** | **~1 hour** | |

---

## Approval Required

**Before deploying to AWS, user must approve:**
- [ ] Design looks correct at http://localhost:8000
- [ ] All brand guidelines met
- [ ] Copy is accurate (no "TurboTax")
- [ ] Both products (Sextant + Beacon) display correctly
- [ ] Mobile responsiveness works
- [ ] Contact form backend configured

**Approval Signature:** __________________ Date: __________

---

## Files to Deploy

These files will be uploaded to S3:
- `index.html` (13KB)
- `style.css` (20KB)
- `script.js` (5KB)

These files will NOT be deployed (documentation only):
- `README.md`
- `QUICKSTART.md`
- `COMPARISON.md`
- `DEPLOYMENT_CHECKLIST.md`
- `PREVIEW.md`

**Total deployed size:** <50KB (excluding Google Fonts CDN)

---

## Support

**Issues?** Contact:
- Marketing Director (Claude Code)
- nuwest.ai team
- GitHub: https://github.com/nuwest-ai

**Documentation:**
- Technical: `README.md`
- Quick Start: `QUICKSTART.md`
- Comparison: `COMPARISON.md`

---

**Last Updated:** December 12, 2025
**Version:** 3.0
**Status:** ✅ Ready for deployment (pending user approval)
