// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- Live "on air" timecode ----------
const timecodeEl = document.getElementById('timecode');
if (timecodeEl) {
  const start = Date.now();
  const pad = n => String(n).padStart(2, '0');

  const tick = () => {
    const elapsed = Math.floor((Date.now() - start) / 1000);
    const h = Math.floor(elapsed / 3600);
    const m = Math.floor((elapsed % 3600) / 60);
    const s = elapsed % 60;
    timecodeEl.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
  };

  tick();
  setInterval(tick, 1000);
}

// ---------- Scene switcher (Servicios) ----------
const tabs = document.querySelectorAll('.scene-tab');
const panels = document.querySelectorAll('.scene-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.scene;

    tabs.forEach(t => {
      const active = t === tab;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', String(active));
    });

    panels.forEach(panel => {
      const match = panel.dataset.scenePanel === target;
      panel.classList.toggle('is-active', match);
      panel.hidden = !match;
    });
  });
});

// ---------- Footer year ----------
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
