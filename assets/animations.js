/**
 * RAHF PORTFOLIO — ADVANCED ANIMATIONS & CANVAS ENGINE
 * Interactive constellation mesh, physics-based mouse attraction, cursor spotlight,
 * scroll reveal observers, and smooth role typewriter.
 */

// 1. Constellation Particle Canvas
class ConstellationCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 140 };
    this.maxParticles = window.innerWidth < 768 ? 40 : 85;
    this.colors = ['#8b5cf6', '#06b6d4', '#ec4899', '#38bdf8', '#a78bfa'];
    
    this.init();
    this.bindEvents();
    this.animate();
  }

  init() {
    this.resize();
    this.particles = [];
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        radius: Math.random() * 2 + 1.2,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        alpha: Math.random() * 0.6 + 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseVal: Math.random() * Math.PI
      });
    }
  }

  resize() {
    if (!this.canvas) return;
    this.width = this.canvas.width = this.canvas.offsetWidth;
    this.height = this.canvas.height = this.canvas.offsetHeight;
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.maxParticles = window.innerWidth < 768 ? 40 : 85;
    });

    window.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Pulse alpha
      p.pulseVal += p.pulseSpeed;
      const currentAlpha = p.alpha + Math.sin(p.pulseVal) * 0.15;

      // Position update
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off screen boundaries
      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      // Mouse gentle repulsion/interaction
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force * 2.2;
          p.y -= Math.sin(angle) * force * 2.2;
        }
      }

      // Draw particle node
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = Math.max(0.1, Math.min(0.9, currentAlpha));
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = p.color;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;

      // Draw connecting lines to nearby particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 120;

        if (dist < maxDist) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = p.color;
          this.ctx.globalAlpha = (1 - dist / maxDist) * 0.22;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }
    this.ctx.globalAlpha = 1;
  }
}

// 2. Cursor Spotlight with Smooth Lerp
class CursorSpotlight {
  constructor() {
    this.glow = document.getElementById('cursor-glow');
    if (!this.glow) return;
    this.currentX = window.innerWidth / 2;
    this.currentY = window.innerHeight / 2;
    this.targetX = this.currentX;
    this.targetY = this.currentY;

    window.addEventListener('mousemove', (e) => {
      this.targetX = e.clientX;
      this.targetY = e.clientY;
    });

    this.render();
  }

  render() {
    this.currentX += (this.targetX - this.currentX) * 0.12;
    this.currentY += (this.targetY - this.currentY) * 0.12;
    this.glow.style.transform = `translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(() => this.render());
  }
}

// 3. Dynamic Typewriter
class TypewriterEffect {
  constructor(elementId, phrases, loopDelay = 2200) {
    this.el = document.getElementById(elementId);
    this.phrases = phrases;
    this.loopDelay = loopDelay;
    this.phraseIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    if (this.el) this.type();
  }

  setPhrases(newPhrases) {
    this.phrases = newPhrases;
    this.phraseIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
  }

  type() {
    if (!this.el) return;
    const currentPhrase = this.phrases[this.phraseIndex];

    if (this.isDeleting) {
      this.charIndex--;
      this.el.textContent = currentPhrase.substring(0, this.charIndex);
    } else {
      this.charIndex++;
      this.el.textContent = currentPhrase.substring(0, this.charIndex);
    }

    let typeSpeed = this.isDeleting ? 40 : 80;

    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      typeSpeed = this.loopDelay;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      typeSpeed = 400;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// 4. Scroll Reveal Observer
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Animate skill bars inside if present
        const skillFills = entry.target.querySelectorAll('.skill-fill');
        skillFills.forEach(fill => {
          const targetWidth = fill.getAttribute('data-percent') || '0%';
          fill.style.width = targetWidth;
        });
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.portfolioCanvas = new ConstellationCanvas('hero-canvas');
  new CursorSpotlight();
  initScrollReveal();

  const defaultPhrases = [
    'Full-Stack Software Engineer',
    'Creative Technologist',
    'UI/UX & Interactive Designer',
    'AI Solutions Architect'
  ];
  window.heroTypewriter = new TypewriterEffect('role-typing-target', defaultPhrases);
});
