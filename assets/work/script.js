// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const navlinks = document.getElementById('navlinks');
if(toggle && navlinks){
  toggle.addEventListener('click', () => {
    const open = navlinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  // Close on link click
  navlinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navlinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
}

// Subtle scroll shadow on nav
const nav = document.querySelector('.nav');
if(nav){
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 1px 24px rgba(20,20,20,0.07)'
      : 'none';
  }, { passive: true });
}
