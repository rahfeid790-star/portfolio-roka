/**
 * RAHF PORTFOLIO — PROCEDURAL WEB AUDIO ENGINE
 * Zero external audio assets. Synthesizes sleek micro-interaction sound effects
 * using the HTML5 Web Audio API. Includes a persistent sound toggle.
 */

class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.isMuted = localStorage.getItem('rahf_sound_muted') === 'true';
    this.initUI();
  }

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  playTone(freq, type = 'sine', duration = 0.08, gainVal = 0.08) {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio context might be restricted before first interaction
    }
  }

  // Click Haptic
  playClick() {
    this.playTone(800, 'sine', 0.05, 0.05);
  }

  // Soft Hover Micro-Blip
  playHover() {
    this.playTone(480, 'sine', 0.04, 0.02);
  }

  // Success Notification Chime (2-Tone chord)
  playSuccess() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      [587.33, 880].forEach((freq, i) => {
        setTimeout(() => {
          this.playTone(freq, 'triangle', 0.18, 0.06);
        }, i * 90);
      });
    } catch (e) {}
  }

  // Modal Open Swell
  playModalOpen() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(640, ctx.currentTime + 0.14);

      gain.gain.setValueAtTime(0.01, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.16);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.16);
    } catch (e) {}
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('rahf_sound_muted', this.isMuted);
    this.updateSoundButtonUI();
    if (!this.isMuted) {
      this.playTone(600, 'sine', 0.1, 0.08);
    }
    return this.isMuted;
  }

  initUI() {
    this.updateSoundButtonUI();
  }

  updateSoundButtonUI() {
    const btn = document.getElementById('sound-toggle-btn');
    if (!btn) return;
    
    if (this.isMuted) {
      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      `;
      btn.setAttribute('title', 'Sound Muted (Click to Unmute)');
      btn.setAttribute('aria-label', 'Sound Muted');
    } else {
      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      `;
      btn.setAttribute('title', 'Sound Enabled (Click to Mute)');
      btn.setAttribute('aria-label', 'Sound Enabled');
    }
  }
}

// Global instance
window.soundFX = new SoundEngine();

document.addEventListener('DOMContentLoaded', () => {
  window.soundFX.initUI();

  const toggleBtn = document.getElementById('sound-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const muted = window.soundFX.toggleMute();
      if (window.showToast) {
        window.showToast(muted ? 'Sound Muted' : 'Sound Enabled', 'info');
      }
    });
  }

  // Attach hover sound to buttons and interactive links
  const interactives = document.querySelectorAll('.btn, .nav-link, .filter-tab, .project-card, .cmd-k-btn, .icon-btn');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => window.soundFX.playHover());
    el.addEventListener('click', () => window.soundFX.playClick());
  });
});
