# Roadmap - nuwest.ai v3 Website

## Batch 1 (Pre-Deployment Critical)

### Phase 1.1: Fix Broken Legal Page Links
- **Status:** Not Started
- **Priority:** HIGH (Blocking Production Deployment)
- **Tasks:**
  - [ ] Create pages/ subdirectory in nuwest-v3/
  - [ ] Copy privacy.html from coming-soon-webpage-v1/pages/
  - [ ] Copy terms.html from coming-soon-webpage-v1/pages/
  - [ ] Update privacy.html branding (Space Grotesk -> Chakra Petch, SEXTANT -> nuwest.ai >)
  - [ ] Update terms.html branding (Space Grotesk -> Chakra Petch, SEXTANT -> nuwest.ai >)
  - [ ] Update footer links in index.html (lines 345-346) from #privacy/#terms to pages/privacy.html and pages/terms.html
  - [ ] Test all footer links work correctly
  - [ ] Review legal content is current and accurate
- **Effort:** M
- **Done When:**
  - Privacy Policy and Terms of Service pages accessible from footer
  - Pages use consistent nuwest.ai v3 branding (Chakra Petch font, nuwest.ai > logo)
  - All footer navigation links work correctly
  - Legal content reviewed and current
- **Compliance Impact:** GDPR/legal compliance requirement
- **User Impact:** Broken links affect trust and legal compliance
- **Technical Details:**
  - Source files: /website/coming-soon-webpage-v1/pages/{privacy,terms}.html
  - Destination: /website/nuwest-v3/pages/{privacy,terms}.html
  - Branding updates required:
    - Font: Space Grotesk -> Chakra Petch
    - Logo: "SEXTANT" -> "nuwest.ai >"
    - Navigation: Update to match index.html header/footer
    - Stylesheet: Link to ../style.css (verify path)
  - index.html changes:
    - Line 345: `<li><a href="pages/privacy.html">Privacy Policy</a></li>`
    - Line 346: `<li><a href="pages/terms.html">Terms of Service</a></li>`

---

## Backlog

- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Mobile responsiveness testing
- [ ] Analytics integration
