document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const toggleBtn = document.querySelector('.navbar-toggle');
  const linksContainer = document.getElementById('navbar-links');
  const langToggle = document.querySelector('.lang-toggle');
  const langDropdown = document.querySelector('.lang-dropdown');

  // === TOGGLE MOBILE MENU ===
  if (toggleBtn && linksContainer) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = linksContainer.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    linksContainer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        linksContainer.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', false);
      });
    });
  }

  // === LANGUAGE DROPDOWN ===
  if (langToggle && langDropdown) {
    langToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
      langToggle.setAttribute('aria-expanded', langDropdown.classList.contains('show'));
    });

    document.addEventListener('click', (e) => {
      if (!langDropdown.contains(e.target) && !langToggle.contains(e.target)) {
        langDropdown.classList.remove('show');
        langToggle.setAttribute('aria-expanded', false);
      }
    });
  }

  // === STICKY NAVBAR ===
  const handleScroll = () => {
    if (window.scrollY > 16) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();
  
  // === SCROLL HERO ARROW (".scroll-v") ===
const scrollArrow = document.querySelector('.scroll-v');
const introSection = document.getElementById('section-solutions');

if (scrollArrow && introSection) {
  scrollArrow.addEventListener('click', () => {
    introSection.scrollIntoView({ behavior: 'smooth' });
  });
  scrollArrow.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
});


