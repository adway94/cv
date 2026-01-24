// ============================================
// Animations & Scroll Effects
// ============================================

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const animateOnScroll = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');

        // Animate progress bars when in view
        if (entry.target.classList.contains('progress-fill')) {
          const width = entry.target.getAttribute('data-width');
          entry.target.style.width = width + '%';
        }

        // Unobserve after animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.card, .timeline-item, .skill-item, .stat-card');
  animatedElements.forEach(el => observer.observe(el));

  // Observe progress bars
  const progressBars = document.querySelectorAll('.progress-fill');
  progressBars.forEach(bar => observer.observe(bar));
};

// Parallax effect for hero section
const parallaxEffect = () => {
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;

    if (scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
  });
};

// Smooth reveal animation for cards
const staggerAnimation = (selector, delay = 100) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * delay}ms`;
  });
};

// Typing effect for hero subtitle (optional enhancement)
const typingEffect = (element, text, speed = 100) => {
  let i = 0;
  element.textContent = '';

  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };

  type();
};

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
  let start = 0;
  const increment = target / (duration / 16);

  const updateCounter = () => {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
};

// Initialize counters when in view
const initCounters = () => {
  const counters = document.querySelectorAll('[data-counter]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-counter'));
        animateCounter(entry.target, target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => counterObserver.observe(counter));
};

// Smooth scroll for anchor links
const smoothScrollLinks = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        const headerOffset = 80;
        const targetPosition = target.offsetTop - headerOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
};

// Add hover effect to cards
const cardHoverEffect = () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
};

// Tilt effect for project cards (subtle 3D effect)
const tiltEffect = () => {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
};

// Reveal animation for timeline items
const timelineAnimation = () => {
  const timelineItems = document.querySelectorAll('.timeline-item');

  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateX(-50px)';

        setTimeout(() => {
          entry.target.style.transition = 'all 0.6s ease-out';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, 100);

        timelineObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  timelineItems.forEach(item => timelineObserver.observe(item));
};

// Skill bars animation
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll('.progress-fill');

  skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = '0%';

    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.width = width + '%';
          }, 200);
          skillObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    skillObserver.observe(bar);
  });
};

// Initialize all animations
const initAnimations = () => {
  animateOnScroll();
  smoothScrollLinks();
  staggerAnimation('.card', 100);
  initCounters();
  timelineAnimation();
  animateSkillBars();

  // Optional: uncomment for additional effects
  // parallaxEffect();
  // cardHoverEffect();
  // tiltEffect();
};

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initAnimations };
}
