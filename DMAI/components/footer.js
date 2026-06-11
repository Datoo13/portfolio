// components/footer.js — injects footer

function buildFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <a href="./index.html"><div class="footer-logo-icon">⚡</div></a>
          <p style="color:rgba(255,255,255,.55);font-size:.88rem;line-height:1.75;max-width:260px;">
            Digital Marketing &amp; AI Solutions.<br>
            Experience-driven performance, AI-powered possibilities.
          </p>
          <a href="https://www.linkedin.com/in/konstantinos-doukakis" target="_blank" rel="noopener"
             style="display:inline-flex;align-items:center;gap:6px;margin-top:20px;color:rgba(255,255,255,.7);font-size:.85rem;transition:color .2s;"
             onmouseover="this.style.color='#6a80f5'" onmouseout="this.style.color='rgba(255,255,255,.7)'">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            linkedin.com/in/konstantinos-doukakis
          </a>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="./digital-marketing.html">Digital Marketing</a></li>
            <li><a href="./newsletters.html">Newsletters</a></li>
            <li><a href="./websites.html">Web Design</a></li>
            <li><a href="./ai-solutions.html">AI Solutions</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="./about.html">About</a></li>
            <li><a href="https://datoo13.github.io/portfolio/" target="_blank" rel="noopener">Portfolio ↗</a></li>
            <li><a href="https://datoo13.github.io/portfolio/case_studies/Lenovo_Greece_CaseStudy.pdf" target="_blank" rel="noopener">Case Study ↗</a></li>
            <li><a href="https://www.linkedin.com/in/konstantinos-doukakis" target="_blank" rel="noopener">LinkedIn ↗</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://www.linkedin.com/in/konstantinos-doukakis" target="_blank" rel="noopener">Get in Touch</a></li>
            <li><a href="https://datoo13.github.io/portfolio/" target="_blank" rel="noopener">View Portfolio</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Digital Marketing &amp; AI Solutions. All rights reserved.</span>
        <span style="color:rgba(255,255,255,.3);">Built with precision &amp; purpose.</span>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', buildFooter);
