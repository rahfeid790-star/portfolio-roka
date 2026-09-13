/**
 * RAHF PORTFOLIO — MAIN APPLICATION CONTROLLER
 * Orchestrates navigation, project filtering, modal dialogs, stats counter,
 * contact form handling, and toast feedback.
 */

// Project Case Study Data Store
const projectCaseStudies = {
  novacore: {
    title: 'NovaCore AI — Enterprise Autonomous Agent Orchestrator',
    category: 'Full-Stack & Generative AI',
    year: '2025',
    client: 'Autonomous AI Labs (San Francisco / Riyadh)',
    summary: 'An enterprise multi-agent workflow platform enabling engineering teams to design, evaluate, and deploy autonomous LLM agents with automated RAG retrieval, vector pipelines, and live telemetry.',
    challenges: 'Coordinating multi-step agent reasoning loops with low latency, preventing hallucination through strict vector validation, and providing real-time streaming WebSocket traces without browser memory bloat.',
    architecture: 'Built on Next.js 15, FastAPI, LangChain, PostgreSQL with pgvector, and Redis cache clusters. Visual workflow canvas powered by React Flow with custom SVG telemetry cards.',
    outcomes: 'Reduced enterprise agent deployment turnaround from weeks to minutes. Processed over 12 million agent reasoning steps with 99.98% pipeline uptime.',
    tags: ['React', 'Next.js', 'Python FastAPI', 'pgvector', 'LangChain', 'Docker', 'WebSockets']
  },
  zenith: {
    title: 'Zenith Wealth — Next-Gen Digital Banking & Investment Suite',
    category: 'FinTech & Full-Stack Web',
    year: '2024',
    client: 'Zenith Financial Group',
    summary: 'A luxury wealth management platform offering real-time multi-asset portfolio analytics, institutional crypto index tracking, automated yield harvesting, and biometrically secured transfers.',
    challenges: 'Designing a zero-latency financial charting interface compliant with stringent open banking security standards and financial regulations.',
    architecture: 'TypeScript, React 19, Tailwind CSS, Node.js microservices, Kafka event streams, and cryptographic transaction signing via WebCrypto API.',
    outcomes: 'Secured $140M+ in assets under management within 6 months of public rollout, maintaining a sub-50ms data refresh rate across global markets.',
    tags: ['TypeScript', 'React', 'Node.js', 'Kafka', 'Chart.js', 'PostgreSQL', 'FinTech Security']
  },
  auraluxe: {
    title: 'Aura Maison — Spatial Interiors & Architectural Runway',
    category: 'UI/UX & Creative Tech',
    year: '2024',
    client: 'Aura Studio (Paris / Riyadh)',
    summary: 'An editorial e-commerce platform showcasing bespoke architectural furniture and spatial decor. Features interactive 3D model orbiters, tactile sound design, and headless checkout.',
    challenges: 'Optimizing high-polygon 3D glTF models for instantaneous mobile loading and fluid 60fps orbit controls across all screen sizes.',
    architecture: 'Vue 3, Three.js, GSAP ScrollTrigger, Shopify Headless Storefront GraphQL API, and procedural Web Audio ambient effects.',
    outcomes: 'Featured in Awwwards Site of the Day and Webby Nominee. 42% increase in average user session duration and 2.4x conversion lift.',
    tags: ['Three.js', 'WebGL', 'GSAP', 'Headless Shopify', 'Vue 3', 'Creative Direction']
  },
  pulseops: {
    title: 'PulseOps Telemetry — Cloud Observability & Distributed Tracing',
    category: 'Full-Stack & DevOps',
    year: '2023',
    client: 'CloudScale Infrastructure',
    summary: 'A unified developer observability dashboard delivering real-time Kubernetes cluster diagnostics, distributed service mesh tracing, and proactive anomaly detection.',
    challenges: 'Ingesting and rendering 50,000+ telemetry events per second in a browser dashboard without dropping frames or freezing DOM nodes.',
    architecture: 'Go backend, React frontend with Canvas rendering, ClickHouse columnar analytics database, and OpenTelemetry collector agents.',
    outcomes: 'Adopted by 80+ engineering teams to diagnose production incidents 65% faster, reducing MTTR (Mean Time to Resolution) from 45 mins to 14 mins.',
    tags: ['Go', 'React', 'ClickHouse', 'Kubernetes', 'OpenTelemetry', 'D3.js']
  },
  mirage: {
    title: 'Mirage Studio — 3D Spatial Audio & Web Synthesizer',
    category: 'Creative Tech & WebGL',
    year: '2023',
    client: 'Acoustic Labs & Sound Artists',
    summary: 'An experimental in-browser spatial audio visualizer and algorithmic sound generator, empowering digital artists to sculpt 3D soundscapes via interactive geometric nodes.',
    challenges: 'Executing binaural 3D panning with dynamic room reverb in real-time while rendering interactive audio-reactive shader geometry.',
    architecture: 'Native Web Audio API, WebGL Shaders (GLSL), Three.js particle mesh, and Web MIDI device integration.',
    outcomes: 'Over 250,000 community sessions created; adopted as an interactive exhibit in digital media museums.',
    tags: ['Web Audio API', 'Three.js', 'GLSL Shaders', 'WebGL', 'Mathematical DSP']
  },
  noorhealth: {
    title: 'Noor Health — Preventive Telehealth & AI Diagnostics Portal',
    category: 'Healthcare & UI/UX',
    year: '2023',
    client: 'Noor Digital Health Initiative',
    summary: 'A patient-first digital health portal featuring encrypted teleconsultations, continuous biomarker tracking, and automated clinical nutrition recommendations.',
    challenges: 'Strict HIPAA and local data governance compliance, along with accessible high-contrast UX designed for multi-generational demographics.',
    architecture: 'React, Tailwind CSS, Python FastAPI, WebRTC encrypted peer connections, PostgreSQL, and FHIR medical record compliance.',
    outcomes: 'Served 60,000+ clinical consultations with a 99.4% patient satisfaction rating across Saudi Arabia and the GCC region.',
    tags: ['React', 'Python FastAPI', 'WebRTC', 'HIPAA Compliant', 'PostgreSQL', 'Accessible UX']
  }
};

// 1. Sticky Navbar & Active Spy
function initNavigation() {
  const header = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Header background blur
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll Spy for active nav link
    let currentId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-toggle');
  const navLinksList = document.querySelector('.nav-links');
  if (mobileBtn && navLinksList) {
    mobileBtn.addEventListener('click', () => {
      navLinksList.classList.toggle('open-mobile');
      if (window.soundFX) window.soundFX.playClick();
    });
  }
}

// 2. Project Category Filtering
function initProjectFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });

      if (window.soundFX) window.soundFX.playClick();
    });
  });
}

// 3. Stats Counter Animation
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(stat => {
          const raw = stat.getAttribute('data-count') || '0';
          const target = parseInt(raw, 10);
          const prefix = stat.getAttribute('data-prefix') || '';
          const suffix = stat.getAttribute('data-suffix') || '';
          let current = 0;
          const duration = 1600;
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            stat.textContent = `${prefix}${Math.floor(current)}${suffix}`;
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.hero-stats-bar');
  if (statsSection) observer.observe(statsSection);
}

// 4. Case Study Modal Controller
function initCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('case-study-close-btn');
  const triggerBtns = document.querySelectorAll('.view-case-study-btn');

  const titleEl = document.getElementById('modal-project-title');
  const categoryEl = document.getElementById('modal-project-cat');
  const yearEl = document.getElementById('modal-project-year');
  const clientEl = document.getElementById('modal-project-client');
  const summaryEl = document.getElementById('modal-project-summary');
  const challengesEl = document.getElementById('modal-project-challenges');
  const archEl = document.getElementById('modal-project-arch');
  const outcomesEl = document.getElementById('modal-project-outcomes');
  const tagsContainer = document.getElementById('modal-project-tags');
  const visualPreview = document.getElementById('modal-project-visual');

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projectId = btn.getAttribute('data-project');
      const data = projectCaseStudies[projectId];
      if (!data) return;

      titleEl.textContent = data.title;
      categoryEl.textContent = data.category;
      yearEl.textContent = data.year;
      clientEl.textContent = data.client;
      summaryEl.textContent = data.summary;
      challengesEl.textContent = data.challenges;
      archEl.textContent = data.architecture;
      outcomesEl.textContent = data.outcomes;

      // Populate tags
      tagsContainer.innerHTML = '';
      data.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'pill pill-primary';
        span.textContent = tag;
        tagsContainer.appendChild(span);
      });

      // Populate artwork
      if (window.ProjectArtworks && window.ProjectArtworks[projectId]) {
        visualPreview.innerHTML = window.ProjectArtworks[projectId];
      }

      modal.classList.add('active');
      if (window.soundFX) window.soundFX.playModalOpen();
    });
  });

  function closeModal() {
    if (modal) modal.classList.remove('active');
    if (window.soundFX) window.soundFX.playClick();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// 5. Resume / CV Viewer Modal
function initResumeModal() {
  const modal = document.getElementById('resume-modal');
  const closeBtn = document.getElementById('resume-close-btn');
  const triggerBtns = document.querySelectorAll('.resume-trigger');
  const printBtn = document.getElementById('print-cv-btn');

  window.openResumeModal = () => {
    if (modal) modal.classList.add('active');
    if (window.soundFX) window.soundFX.playModalOpen();
  };

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.openResumeModal();
    });
  });

  function closeResume() {
    if (modal) modal.classList.remove('active');
    if (window.soundFX) window.soundFX.playClick();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeResume);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeResume();
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

// 6. Contact Form Validation & Submission
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const msgInput = document.getElementById('contact-message');
    const submitBtn = document.getElementById('contact-submit-btn');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !msgInput.value.trim()) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    // Email pattern check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showToast('Please provide a valid email address.', 'error');
      return;
    }

    // Submit state animation
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending Message... ⏳';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = 'Message Sent! ✓';
      submitBtn.style.background = '#10b981';
      form.reset();

      if (window.soundFX) window.soundFX.playSuccess();
      showToast('Thank you! Your message has been sent to Rahf.', 'success');

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 3500);
    }, 900);
  });
}

// 7. Clipboard Copy Helper
window.copyToClipboard = function(text, label = 'Copied to clipboard!') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(label, 'success');
      if (window.soundFX) window.soundFX.playClick();
    });
  } else {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast(label, 'success');
    if (window.soundFX) window.soundFX.playClick();
  }
};

// 8. Toast Feedback System
window.showToast = function(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
  toast.innerHTML = `
    <span style="display: flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; background: rgba(255,255,255,0.15); font-weight: bold; font-size: 0.75rem;">
      ${icon}
    </span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3200);
};

// 9. Artwork Loader: Inject SVGs into project containers
function injectProjectArtworks() {
  if (!window.ProjectArtworks) return;

  // Inject Avatar
  const avatarContainer = document.getElementById('hero-avatar-target');
  if (avatarContainer && window.ProjectArtworks.avatar) {
    avatarContainer.innerHTML = window.ProjectArtworks.avatar;
  }

  // Inject Projects
  const projectContainers = document.querySelectorAll('[data-art-target]');
  projectContainers.forEach(container => {
    const artKey = container.getAttribute('data-art-target');
    if (window.ProjectArtworks[artKey]) {
      container.innerHTML = window.ProjectArtworks[artKey];
    }
  });
}

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  injectProjectArtworks();
  initNavigation();
  initProjectFilters();
  initStatsCounter();
  initCaseStudyModal();
  initResumeModal();
  initContactForm();

  // Attach copy buttons
  const copyButtons = document.querySelectorAll('[data-copy-target]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-copy-target');
      const label = btn.getAttribute('data-copy-msg') || 'Copied!';
      window.copyToClipboard(val, label);
    });
  });
});
