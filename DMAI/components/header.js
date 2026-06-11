// components/header.js — injects nav and handles mobile menu + scroll state

// All pages are at the same level, so paths are always relative to ./
const ROOT = './';

const NAV_LINKS = [
  { label: 'Home',               href: ROOT + 'index.html' },
  { label: 'Digital Marketing',  href: ROOT + 'digital-marketing.html' },
  { label: 'Newsletters',        href: ROOT + 'newsletters.html' },
  { label: 'Websites',           href: ROOT + 'websites.html' },
  { label: 'AI Solutions',       href: ROOT + 'ai-solutions.html' },
  { label: 'About',              href: ROOT + 'about.html' },
];

function buildNav() {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  const linksHTML = NAV_LINKS.map(l => {
    const linkFile = l.href.split('/').pop();
    const isActive = linkFile === currentFile;
    return `<li><a href="${l.href}" class="${isActive ? 'active' : ''}">${l.label}</a></li>`;
  }).join('');

  const mobileLinksHTML = NAV_LINKS.map(l =>
    `<a href="${l.href}">${l.label}</a>`
  ).join('');

  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.id = 'main-nav';
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="${ROOT}index.html" class="nav-logo">
        <div class="nav-logo-icon">⚡</div>
        <span>DM&amp;AI <span style="font-weight:400;opacity:.6">Solutions</span></span>
      </a>
      <ul class="nav-links">${linksHTML}</ul>
      <a href="https://www.linkedin.com/in/konstantinos-doukakis" target="_blank" rel="noopener" class="btn btn-primary nav-cta" style="padding:10px 22px;font-size:.85rem;">
        Get in Touch ↗
      </a>
      <button class="nav-hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu';
  mobileMenu.id = 'mobile-menu';
  mobileMenu.innerHTML = mobileLinksHTML +
    `<a href="https://www.linkedin.com/in/konstantinos-doukakis" target="_blank" rel="noopener" style="color:var(--blue);font-weight:600;">Get in Touch ↗</a>`;

  document.body.prepend(mobileMenu);
  document.body.prepend(nav);

  // Scroll effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile toggle
  document.getElementById('hamburger').addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// Scroll reveal
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  initReveal();
});
