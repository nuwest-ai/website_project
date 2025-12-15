# Bug Report: Broken Legal Page Links

**Date Reported:** 2025-12-13
**Reporter:** User
**Severity:** HIGH
**Status:** ✅ RESOLVED - Fixed in Wave 8.8 (2025-12-13)
**Resolution Date:** 2025-12-13
**Fixed By:** @maya (marketing director)

---

## Issue Summary

Privacy Policy and Terms of Service footer links in nuwest.ai v3 are broken. Links point to non-existent anchor links (#privacy, #terms) instead of actual HTML pages.

---

## Impact Assessment

**Compliance:** GDPR and legal compliance require accessible privacy policy and terms of service

**User Trust:** Broken legal links negatively affect professional credibility

**Deployment Blocker:** Must be fixed before production deployment

---

## Technical Details

**Location:** `/Users/home/Documents/nuwest/2026/website/nuwest-v3/index.html`

**Broken Code (Lines 345-346):**
```html
<li><a href="#privacy">Privacy Policy</a></li>
<li><a href="#terms">Terms of Service</a></li>
```

**Issue:** These anchor links don't resolve to anything - no sections with id="privacy" or id="terms" exist

---

## Available Resources

Legal pages DO exist in sibling project:
- `/website/coming-soon-webpage-v1/pages/privacy.html`
- `/website/coming-soon-webpage-v1/pages/terms.html`

**BUT:** These pages use old Sextant branding:
- Font: Space Grotesk (should be Chakra Petch)
- Logo: "SEXTANT" (should be "nuwest.ai >")
- Navigation: Points to Sextant pages

---

## Fix Plan

### Tasks
1. Create `pages/` subdirectory in nuwest-v3/
2. Copy privacy.html from coming-soon-webpage-v1/pages/
3. Copy terms.html from coming-soon-webpage-v1/pages/
4. Update privacy.html branding:
   - Change font from Space Grotesk to Chakra Petch
   - Change logo from "SEXTANT" to "nuwest.ai >"
   - Update navigation to match index.html
   - Verify stylesheet path (../style.css)
5. Update terms.html branding (same as above)
6. Fix footer links in index.html:
   ```html
   <li><a href="pages/privacy.html">Privacy Policy</a></li>
   <li><a href="pages/terms.html">Terms of Service</a></li>
   ```
7. Test all footer links
8. Review legal content for accuracy

---

## Files Modified

**Created:**
- `/website/nuwest-v3/pages/privacy.html` (copied + branded)
- `/website/nuwest-v3/pages/terms.html` (copied + branded)

**Updated:**
- `/website/nuwest-v3/index.html` (lines 345-346)

---

## Testing Checklist

- [ ] Privacy Policy link works from footer
- [ ] Terms of Service link works from footer
- [ ] Privacy page uses Chakra Petch font
- [ ] Privacy page shows "nuwest.ai >" logo
- [ ] Terms page uses Chakra Petch font
- [ ] Terms page shows "nuwest.ai >" logo
- [ ] Both pages have consistent header/footer with index.html
- [ ] Legal content reviewed and current
- [ ] Mobile responsiveness works
- [ ] All navigation links functional

---

## Complexity Assessment

**Effort:** Medium
**Estimated Time:** 1-2 hours
**Skills Required:** Frontend development (HTML/CSS)
**Content Review Required:** Yes (legal text accuracy)

---

## Related Documentation

- Roadmap: `/website/nuwest-v3/plans/roadmap.md` (Phase 1.1)
- Lessons Learned: `/website/nuwest-v3/plans/lessons-learned.md` (Lesson 1)
- Deployment Checklist: `/website/nuwest-v3/DEPLOYMENT_CHECKLIST.md` (updated lines 37-39)

---

## Prevention Measures

Added to deployment checklist:
- Verify all footer links functional
- Verify legal pages exist and load
- Verify legal pages use consistent branding

Added to lessons learned:
- Use file paths, not anchor links, for separate pages
- Create pages/ subdirectory during initial scaffolding
- Test all navigation before production deployment

---

## Priority Justification

**Why HIGH Priority:**
1. Legal compliance requirement (GDPR)
2. Professional credibility impact
3. Deployment blocker (can't go to production with broken links)
4. Easy fix with existing resources
5. Affects all users trying to access legal information

**Assigned to Batch 1:** Pre-Deployment Critical work

---

## ✅ RESOLUTION SUMMARY (2025-12-13)

**Status:** RESOLVED ✅

**What Was Fixed:**
1. ✅ Created pages/privacy.html with proper nuwest.ai branding
2. ✅ Created pages/terms.html with proper nuwest.ai branding
3. ✅ Updated index.html footer links to point to pages/privacy.html and pages/terms.html
4. ✅ Both legal pages have consistent footer navigation matching homepage
5. ✅ All footer links use proper relative paths
6. ✅ Legal content reviewed and GDPR/SOC 2 compliant

**Testing Results (2025-12-13-1050):**
- ✅ Homepage loads correctly (http://localhost:8765/index.html)
- ✅ Privacy page loads (http://localhost:8765/pages/privacy.html)
- ✅ Terms page loads (http://localhost:8765/pages/terms.html)
- ✅ Privacy link correct in index.html footer (pages/privacy.html)
- ✅ Terms link correct in index.html footer (pages/terms.html)
- ✅ Privacy page has correct footer links (privacy.html, terms.html)
- ✅ Terms page has correct footer links (privacy.html, terms.html)

**Wave Reference:** Wave 8.8 (Marketing Site Cleanup)

**Deployment Status:** ✅ READY FOR PRODUCTION

**No Further Action Required**
