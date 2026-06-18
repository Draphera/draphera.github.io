document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const logo = document.getElementById('draphera-logo');
  const heroTheme = document.getElementById('hero-theme');
  const icon = document.getElementById('theme-icon');
  const fontSelect = document.getElementById("font-select");
  const root = document.documentElement;

  // === Cambia Tema (dark/light) ===
  const applyTheme = (mode) => {
    const isLight = mode === 'light';
    document.body.classList.toggle('light-mode', isLight);

    // Aggiorna logo
    if (logo) {
      logo.src = isLight
        ? logo.getAttribute('data-logo-light') || './assets/img/logo-dark.png'
        : logo.getAttribute('data-logo-dark') || './assets/img/logo-light.png';
    }

    // Aggiorna hero CSS
    if (heroTheme) {
      heroTheme.href = isLight
        ? './assets/css/hero-light.css'
        : './assets/css/hero-dark.css';
    }

    // Aggiorna icona SVG
    if (icon && icon.tagName.toLowerCase() === 'svg') {
      icon.innerHTML = isLight
        ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke-width="2"/><path stroke-width="2" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>`;
    }

    localStorage.setItem('theme', mode);
  };

  // === Tema iniziale
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

 

  // === Toggle manuale tema
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = document.body.classList.contains('light-mode');
      applyTheme(isLight ? 'dark' : 'light');
    });
  }
});
