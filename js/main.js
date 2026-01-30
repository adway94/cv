// ============================================
// Main JavaScript - CV Website
// ============================================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initBackToTop();
  populateContent();
  if (typeof initAnimations === 'function') {
    initAnimations();
  }
});

// ============================================
// Navigation
// ============================================

const initNavigation = () => {
  const header = document.querySelector('.header');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll effect on header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
  });

  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = navToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
  }

  // Close mobile menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const icon = navToggle?.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove('active');
      const icon = navToggle?.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
    }
  });
};

// Update active nav link based on scroll position
const updateActiveNavLink = () => {
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
};

// ============================================
// Back to Top Button
// ============================================

const initBackToTop = () => {
  const backToTopBtn = document.querySelector('.back-to-top');

  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};

// ============================================
// Populate Dynamic Content from data.js
// ============================================

const populateContent = () => {
  if (typeof cvData === 'undefined') {
    console.warn('cvData not found. Make sure data.js is loaded.');
    return;
  }

  populatePersonalInfo();
  populateSocialLinks();
  populateExperience();
  populateAchievements();
  populateChallenges();
  populateProjects();
  populateSkills();
  populateEducation();
  populateCertifications();
  populateLanguages();
};

// Personal Info
const populatePersonalInfo = () => {
  const { personal } = cvData;

  // Update hero section - nombre, título y tagline
  document.querySelector('.hero-title').textContent = personal.name;
  document.querySelector('.hero-subtitle').textContent = personal.title;

  const heroTagline = document.querySelector('.hero-tagline');
  if (heroTagline && personal.tagline) {
    heroTagline.textContent = personal.tagline;
  }

  const heroImage = document.querySelector('.hero-image');
  if (heroImage && personal.image) {
    heroImage.src = personal.image;
    heroImage.alt = personal.name;
  }

  // Update about section - Bio completa aquí
  const aboutContent = document.querySelector('.about-content');
  if (aboutContent) {
    aboutContent.innerHTML = `<p>${personal.bio}</p>`;
  }

  // Update contact section
  const contactEmail = document.querySelector('.contact-email');
  const contactPhone = document.querySelector('.contact-phone');
  const contactLocation = document.querySelector('.contact-location');

  if (contactEmail) contactEmail.textContent = personal.email || 'Contactar vía LinkedIn';
  if (contactPhone) contactPhone.textContent = personal.phone || '';
  if (contactLocation) contactLocation.textContent = personal.location;
};

// Social Links
const populateSocialLinks = () => {
  const { social } = cvData;

  const socialContainers = document.querySelectorAll('.social-links');

  socialContainers.forEach(container => {
    container.innerHTML = '';

    if (social.linkedin) {
      container.innerHTML += `<a href="${social.linkedin}" target="_blank" class="social-link" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>`;
    }
    if (social.github) {
      container.innerHTML += `<a href="${social.github}" target="_blank" class="social-link" aria-label="GitHub"><i class="fab fa-github"></i></a>`;
    }
    if (social.twitter) {
      container.innerHTML += `<a href="${social.twitter}" target="_blank" class="social-link" aria-label="Twitter"><i class="fab fa-twitter"></i></a>`;
    }
    if (social.portfolio) {
      container.innerHTML += `<a href="${social.portfolio}" target="_blank" class="social-link" aria-label="Portfolio"><i class="fas fa-globe"></i></a>`;
    }
  });
};

// Experience
const populateExperience = () => {
  const { experience } = cvData;
  const experienceList = document.querySelector('.experience-list');

  if (!experienceList) return;

  experienceList.innerHTML = '<div class="timeline">' +
    experience.map(exp => `
      <div class="timeline-item">
        <div class="timeline-date">${exp.startDate} - ${exp.endDate}</div>
        <div class="timeline-title">${exp.title}</div>
        <div class="timeline-subtitle">${exp.company} • ${exp.location}</div>
        <div class="timeline-content">
          <p>${exp.description}</p>
          ${exp.achievements && exp.achievements.length > 0 ? `
            <ul style="margin-top: 1rem; padding-left: 1.5rem;">
              ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
          ` : ''}
        </div>
      </div>
    `).join('') +
    '</div>';
};

// Achievements
const populateAchievements = () => {
  const { achievements } = cvData;
  const achievementsGrid = document.querySelector('.achievements .grid');

  if (!achievementsGrid) return;

  achievementsGrid.innerHTML = achievements.map(achievement => `
    <div class="card achievement-card">
      <div class="icon-box">${achievement.icon}</div>
      <h3 class="card-title">${achievement.title}</h3>
      <p class="card-content">${achievement.description}</p>
    </div>
  `).join('');
};

// Challenges
const populateChallenges = () => {
  const { challenges } = cvData;
  const challengesGrid = document.querySelector('.challenges .grid');

  if (!challengesGrid) return;

  challengesGrid.innerHTML = challenges.map(challenge => `
    <div class="card challenge-card">
      <h3 class="card-title">${challenge.title}</h3>

      <div class="challenge-problem">
        <div class="challenge-problem-title">
          <i class="fas fa-exclamation-circle"></i>
          <span>Problema</span>
        </div>
        <p>${challenge.problem}</p>
      </div>

      <div class="challenge-action">
        <div class="challenge-action-title">
          <i class="fas fa-tools"></i>
          <span>Acción</span>
        </div>
        <p>${challenge.action}</p>
      </div>

      <div class="challenge-result">
        <div class="challenge-result-title">
          <i class="fas fa-check-circle"></i>
          <span>Resultado</span>
        </div>
        <p>${challenge.result}</p>
      </div>

      <div class="challenge-tags">
        <div class="tag-list">
          ${challenge.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
};

// Projects
const populateProjects = () => {
  const { projects } = cvData;
  const projectsGrid = document.querySelector('.projects .grid');

  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects.map(project => `
    <div class="card project-card">
      <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='https://via.placeholder.com/400x200?text=Project+Image'">
      <div class="project-header">
        <h3 class="card-title">${project.title}</h3>
      </div>
      <p class="card-content">${project.description}</p>
      <div class="tag-list" style="margin-top: 1rem;">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="project-links">
        ${project.github ? `<a href="${project.github}" target="_blank" class="btn btn-outline"><i class="fab fa-github"></i> Código</a>` : ''}
        ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
      </div>
    </div>
  `).join('');
};

// Skills
const populateSkills = () => {
  const { skills } = cvData;
  const skillsGrid = document.querySelector('.skills-grid');

  if (!skillsGrid) return;

  skillsGrid.innerHTML = Object.keys(skills).map(category => `
    <div class="skill-category">
      <h3 class="skill-category-title">${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
      ${skills[category].map(skill => `
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-level">${skill.level}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" data-width="${skill.level}"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
};

// Education
const populateEducation = () => {
  const { education } = cvData;
  const educationList = document.querySelector('.education-list');

  if (!educationList) return;

  educationList.innerHTML = '<div class="timeline">' +
    education.map(edu => `
      <div class="timeline-item">
        <div class="timeline-date">${edu.startDate} - ${edu.endDate}</div>
        <div class="timeline-title">${edu.degree}</div>
        <div class="timeline-subtitle">${edu.institution} • ${edu.location}</div>
        <div class="timeline-content">
          <p>${edu.description}</p>
        </div>
      </div>
    `).join('') +
    '</div>';
};

// Certifications (Show More/Less)
const populateCertifications = () => {
  const { certifications } = cvData;
  const certificationsGrid = document.querySelector('.certifications-grid');

  if (!certificationsGrid) return;

  // Populate certifications - hide items after index 2 (show only 3 most recent)
  certificationsGrid.innerHTML = certifications.map((cert, index) => `
    <div class="card certification-card ${index > 2 ? 'hidden' : ''}">
      <div class="certification-logo">${cert.logo}</div>
      <h3 class="card-title">${cert.name}</h3>
      <p class="card-subtitle">${cert.issuer}</p>
      <div class="badge badge-primary">${cert.date}</div>
    </div>
  `).join('');

  // Initialize toggle button after a short delay to ensure DOM is ready
  setTimeout(initCertificationsToggle, 100);
};

// Toggle certifications visibility
const initCertificationsToggle = () => {
  const toggleBtn = document.getElementById('toggleCertifications');

  if (!toggleBtn) {
    console.warn('Toggle button not found');
    return;
  }

  const toggleText = toggleBtn.querySelector('.toggle-text');
  const toggleIcon = toggleBtn.querySelector('.toggle-icon');

  // Remove previous listeners if any
  const newToggleBtn = toggleBtn.cloneNode(true);
  toggleBtn.parentNode.replaceChild(newToggleBtn, toggleBtn);

  newToggleBtn.addEventListener('click', () => {
    const hiddenCards = document.querySelectorAll('.certifications-grid .card.hidden');
    const isExpanded = hiddenCards.length === 0;

    if (isExpanded) {
      // Collapse - hide all except first 3
      const allCards = document.querySelectorAll('.certifications-grid .card');
      allCards.forEach((card, index) => {
        if (index > 2) card.classList.add('hidden');
      });
      newToggleBtn.querySelector('.toggle-text').textContent = 'Ver más';
      newToggleBtn.querySelector('.toggle-icon').classList.remove('rotated');
    } else {
      // Expand - show all
      hiddenCards.forEach(card => card.classList.remove('hidden'));
      newToggleBtn.querySelector('.toggle-text').textContent = 'Ver menos';
      newToggleBtn.querySelector('.toggle-icon').classList.add('rotated');
    }
  });
};

// Languages
const populateLanguages = () => {
  const { languages } = cvData;
  const languagesGrid = document.querySelector('.languages .grid');

  if (!languagesGrid) return;

  languagesGrid.innerHTML = languages.map(lang => `
    <div class="card language-card">
      <h3 class="card-title">${lang.name}</h3>
      <div class="language-level">${lang.level}</div>
    </div>
  `).join('');
};

// ============================================
// Utility Functions
// ============================================

// Download CV as PDF
const downloadCV = () => {
  window.open('assets/cv.pdf', '_blank');
};

// Print CV
const printCV = () => {
  window.print();
};

// Copy email to clipboard
const copyEmail = (email) => {
  navigator.clipboard.writeText(email).then(() => {
    alert('Email copiado al portapapeles!');
  }).catch(err => {
    console.error('Error al copiar email:', err);
  });
};
