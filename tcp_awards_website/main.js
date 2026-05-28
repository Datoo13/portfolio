/* ============================================================
   TCP AWARDS — SHARED JS
   Loads shared components, handles nav scroll, animations, tabs
   ============================================================ */

/* --- Component Loader --- */
async function loadComponent(selector, file) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to load ${file}`);
    el.innerHTML = await res.text();
    // Re-run inline scripts if any
    el.querySelectorAll('script').forEach(s => {
      const ns = document.createElement('script');
      // Copy all attributes (type, src, etc.)
      Array.from(s.attributes).forEach(a => ns.setAttribute(a.name, a.value));
      if (s.src) {
        ns.src = s.src;
      } else {
        ns.textContent = s.textContent;
      }
      document.head.appendChild(ns);
    });
  } catch (e) {
    console.warn('Component load error:', e);
  }
}

/* --- Mark active nav link --- */
function markActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* --- Header scroll behaviour --- */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const update = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* --- Mobile nav --- */
function initMobileNav() {
  const btn   = document.getElementById('hamburger-btn');
  const nav   = document.getElementById('mobile-nav');
  const close = document.getElementById('mobile-nav-close');
  if (!btn || !nav) return;

  const openNav  = () => { nav.classList.add('open');    btn.classList.add('active'); };
  const closeNav = () => { nav.classList.remove('open'); btn.classList.remove('active'); };

  btn.addEventListener('click', () => {
    nav.classList.contains('open') ? closeNav() : openNav();
  });
  close?.addEventListener('click', closeNav);
  nav.addEventListener('click', e => {
    if (e.target.tagName === 'A') closeNav();
  });
}

/* --- Scroll reveal --- */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* --- Tab system --- */
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  if (!tabs.length) return;
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });
}

/* --- Terms modal --- */
function initTermsModal() {
  const trigger = document.getElementById('terms-trigger');
  const modal   = document.getElementById('terms-modal');
  const close   = document.getElementById('terms-modal-close');
  if (!trigger || !modal) return;
  trigger.addEventListener('click', () => modal.classList.add('open'));
  close?.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('open');
  });
}

/* --- Pricing card selection --- */
function initPricingCards() {
  document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('click', () => {
      card.closest('.pricing-cards')
          ?.querySelectorAll('.pricing-card')
          .forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });
}

/* --- Business type card selection (vote page) --- */
function initBusinessTypeCards() {
  document.querySelectorAll('.business-type-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.business-type-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });
}

/* --- Main init --- */
document.addEventListener('DOMContentLoaded', async () => {
  // All pages are in the root, components are in components/
  // This works whether opened via file:// (with a server) or http://
  const base = 'components/';

  await Promise.all([
    loadComponent('#intro-placeholder', base + 'intro.html'),
    loadComponent('#header-placeholder', base + 'header.html'),
    loadComponent('#sponsors-placeholder', base + 'sponsors.html'),
    loadComponent('#footer-placeholder', base + 'footer.html'),
    loadComponent('#logo3d-placeholder', base + 'logo3d.html'),
  ]);

  // Init after components are loaded
  markActiveNav();
  initHeader();
  initMobileNav();
  initReveal();
  initTabs();
  initTermsModal();
  initPricingCards();
  initBusinessTypeCards();

  // Signal that everything is ready (used by page-specific scripts)
  document.dispatchEvent(new Event('tcp:ready'));

  // Signal that components are ready (used by GSAP on home page)
  document.dispatchEvent(new Event('tcp:ready'));
});
