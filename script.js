/**
 * nuwest.ai > v3 JavaScript
 * Interactivity and form handling
 */

// ============================================
// Mobile Navigation Toggle
// ============================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');

    // Update ARIA attribute
    const isExpanded = navMenu.classList.contains('active');
    navToggle.setAttribute('aria-expanded', isExpanded);
  });

  // Close menu when clicking nav links
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');

    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const navHeight = document.querySelector('.nav').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// Navigation Scroll Effect
// ============================================
const nav = document.querySelector('.nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 100) {
    nav.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.3)';
  } else {
    nav.style.boxShadow = 'none';
  }

  lastScrollY = currentScrollY;
});

// ============================================
// Contact Form Handling
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Get submit button
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Build email content
    const interestText = data.interest ? `Interest: ${data.interest}` : '';
    const companyText = data.company ? `Company: ${data.company}` : '';

    const emailBody = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      companyText,
      interestText,
      '',
      'Message:',
      data.message || '(No message provided)'
    ].filter(line => line).join('\n');

    const subject = encodeURIComponent(`nuwest.ai Contact: ${data.name}${data.company ? ` (${data.company})` : ''}`);
    const body = encodeURIComponent(emailBody);

    // Open email client with pre-filled data
    const mailtoLink = `mailto:nuwest.ai@gmail.com?subject=${subject}&body=${body}`;

    // Try to open mailto
    window.location.href = mailtoLink;

    // Success state
    submitButton.textContent = 'Opening Email...';
    submitButton.style.background = '#00C853';

    // Show success message
    showNotification('Opening your email client. If it doesn\'t open, please email nuwest.ai@gmail.com directly.', 'success');

    // Reset form and button after delay
    setTimeout(() => {
      contactForm.reset();
      submitButton.disabled = false;
      submitButton.textContent = originalText;
      submitButton.style.background = '';
    }, 3000);
  });
}

// ============================================
// Notification System
// ============================================
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existing = document.querySelector('.notification');
  if (existing) {
    existing.remove();
  }

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.textContent = message;

  // Add styles
  Object.assign(notification.style, {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    padding: '1rem 1.5rem',
    background: type === 'success' ? '#00C853' : type === 'error' ? '#D32F2F' : '#FFD300',
    color: type === 'success' || type === 'error' ? '#FFFFFF' : '#111111',
    borderRadius: '2px',
    fontFamily: 'var(--font-primary)',
    fontSize: '0.9rem',
    fontWeight: '600',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    zIndex: '10000',
    animation: 'slideInUp 0.3s ease-out'
  });

  // Append to body
  document.body.appendChild(notification);

  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOutDown 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// Add animation keyframes
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes slideInUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideOutDown {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(styleSheet);

// ============================================
// Intersection Observer for Scroll Animations
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.product-card, .value-item, .stat').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// Add fade-in-up animation
const animationStyle = document.createElement('style');
animationStyle.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(animationStyle);

// ============================================
// Performance: Lazy Load Images (if added later)
// ============================================
if ('loading' in HTMLImageElement.prototype) {
  // Browser supports native lazy loading
  document.querySelectorAll('img[data-src]').forEach(img => {
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
  });
} else {
  // Fallback for older browsers
  const lazyImages = document.querySelectorAll('img[data-src]');
  const lazyImageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        lazyImageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => lazyImageObserver.observe(img));
}

// ============================================
// Console Easter Egg
// ============================================
console.log('%c nuwest.ai > ', 'background: #FFD300; color: #111111; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Illuminating the dark corners of risk.', 'color: #FFD300; font-size: 14px;');
console.log('%c Nuwest AI LLC | California | contact@nuwest.ai', 'color: #999999; font-size: 12px;');
