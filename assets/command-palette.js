/**
 * RAHF PORTFOLIO — COMMAND PALETTE (CMD / CTRL + K)
 * Keyboard-first navigation and quick action launcher.
 */

class CommandPalette {
  constructor() {
    this.modal = document.getElementById('cmd-k-modal');
    this.input = document.getElementById('cmd-k-input');
    this.resultsList = document.getElementById('cmd-k-results');
    this.isOpen = false;
    this.selectedIndex = 0;

    this.commands = [
      { id: 'projects', title: 'Explore Featured Projects', icon: '🚀', action: () => this.scrollTo('projects') },
      { id: 'skills', title: 'View Technical Skills & Stack', icon: '⚡', action: () => this.scrollTo('skills') },
      { id: 'experience', title: 'Read Journey & Career Timeline', icon: '📍', action: () => this.scrollTo('journey') },
      { id: 'contact', title: 'Get In Touch / Hire Rahf', icon: '✉️', action: () => this.scrollTo('contact') },
      { id: 'resume', title: 'Open & Preview Resume / CV', icon: '📄', action: () => window.openResumeModal && window.openResumeModal() },
      { id: 'lang', title: 'Switch Language (EN / العربية)', icon: '🌐', action: () => window.i18n && window.i18n.toggle() },
      { id: 'sound', title: 'Toggle Audio Sound FX', icon: '🔊', action: () => window.soundFX && window.soundFX.toggleMute() },
      { id: 'email', title: 'Copy Email to Clipboard', icon: '📋', action: () => window.copyToClipboard && window.copyToClipboard('rahaf.engineer@domain.com', 'Email copied!') },
      { id: 'github', title: 'Visit GitHub Profile', icon: '🐙', action: () => window.open('https://github.com', '_blank') },
      { id: 'linkedin', title: 'Connect on LinkedIn', icon: '💼', action: () => window.open('https://linkedin.com', '_blank') }
    ];

    this.filteredCommands = [...this.commands];
    this.bindEvents();
    this.render();
  }

  bindEvents() {
    // Keyboard Shortcut (Cmd+K / Ctrl+K)
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.toggle();
      } else if (e.key === 'Escape' && this.isOpen) {
        this.close();
      } else if (this.isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          this.selectedIndex = (this.selectedIndex + 1) % this.filteredCommands.length;
          this.render();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          this.selectedIndex = (this.selectedIndex - 1 + this.filteredCommands.length) % this.filteredCommands.length;
          this.render();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          this.executeSelected();
        }
      }
    });

    // Input Filter
    if (this.input) {
      this.input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        this.filteredCommands = this.commands.filter(cmd => 
          cmd.title.toLowerCase().includes(query)
        );
        this.selectedIndex = 0;
        this.render();
      });
    }

    // Backdrop click close
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.close();
        }
      });
    }

    // Trigger button clicks
    const triggerBtns = document.querySelectorAll('.cmd-k-trigger');
    triggerBtns.forEach(btn => {
      btn.addEventListener('click', () => this.open());
    });
  }

  open() {
    this.isOpen = true;
    if (this.modal) this.modal.classList.add('active');
    if (this.input) {
      this.input.value = '';
      setTimeout(() => this.input.focus(), 50);
    }
    this.filteredCommands = [...this.commands];
    this.selectedIndex = 0;
    this.render();
    if (window.soundFX) window.soundFX.playModalOpen();
  }

  close() {
    this.isOpen = false;
    if (this.modal) this.modal.classList.remove('active');
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  executeSelected() {
    if (this.filteredCommands.length > 0 && this.filteredCommands[this.selectedIndex]) {
      const selected = this.filteredCommands[this.selectedIndex];
      this.close();
      selected.action();
      if (window.soundFX) window.soundFX.playClick();
    }
  }

  scrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  render() {
    if (!this.resultsList) return;
    this.resultsList.innerHTML = '';

    if (this.filteredCommands.length === 0) {
      this.resultsList.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.875rem;">
          No matching commands found.
        </div>
      `;
      return;
    }

    this.filteredCommands.forEach((cmd, idx) => {
      const item = document.createElement('div');
      item.className = `cmd-k-item ${idx === this.selectedIndex ? 'selected' : ''}`;
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span style="font-size: 1.15rem;">${cmd.icon}</span>
          <span style="font-weight: 500;">${cmd.title}</span>
        </div>
        <span class="kbd-badge" style="font-size: 0.6rem;">Action</span>
      `;
      item.addEventListener('click', () => {
        this.selectedIndex = idx;
        this.executeSelected();
      });
      item.addEventListener('mouseenter', () => {
        this.selectedIndex = idx;
        const currentSelected = this.resultsList.querySelector('.cmd-k-item.selected');
        if (currentSelected) currentSelected.classList.remove('selected');
        item.classList.add('selected');
      });
      this.resultsList.appendChild(item);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.cmdPalette = new CommandPalette();
});
