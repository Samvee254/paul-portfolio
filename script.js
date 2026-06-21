// ==========================================================
// Paul Sumba Moses — Portfolio Script
// ==========================================================

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar shrink/shadow effect on scroll
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    mainNav.classList.add('scrolled');
  } else {
    mainNav.classList.remove('scrolled');
  }
});

// Highlight active nav link based on scroll position
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Auto-close mobile nav menu after clicking a link
const navMenu = document.getElementById('navMenu');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navMenu);
      if (bsCollapse) bsCollapse.hide();
    }
  });
});