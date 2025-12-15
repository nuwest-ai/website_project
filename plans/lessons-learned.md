# Lessons Learned - nuwest.ai v3 Website

## Lesson 1: Verify All Footer Links Before Deployment

**Date Discovered:** 2025-12-13

**Issue:** Privacy Policy and Terms of Service footer links pointed to non-existent anchor links (#privacy, #terms) instead of actual HTML pages.

**Impact:** HIGH - Legal compliance requirement (GDPR), affects user trust

**Root Cause:**
- Footer links implemented as placeholder anchor links during initial development
- Legal pages existed in sibling project (coming-soon-webpage-v1) but not copied to nuwest-v3
- No pre-deployment link validation checklist

**Solution:**
1. Create pages/ subdirectory
2. Copy legal pages from coming-soon-webpage-v1/pages/
3. Update branding to match nuwest.ai v3 (Chakra Petch font, nuwest.ai > logo)
4. Fix footer links to point to pages/{privacy,terms}.html
5. Test all footer navigation

**Prevention:**
- Add "Verify all footer links" to deployment checklist
- Use relative file paths, not anchor links, for separate pages
- Test all navigation before marking ready for production
- Create pages/ subdirectory during initial scaffolding

**Pattern to Follow:**
```html
<!-- WRONG: Placeholder anchor link -->
<li><a href="#privacy">Privacy Policy</a></li>

<!-- CORRECT: Actual page link -->
<li><a href="pages/privacy.html">Privacy Policy</a></li>
```

**Checklist for Future Sites:**
- [ ] Create pages/ subdirectory during scaffolding
- [ ] Add privacy.html and terms.html to initial structure
- [ ] Use file paths, not anchors, for legal pages
- [ ] Test all footer links before deployment
- [ ] Verify legal content is current
