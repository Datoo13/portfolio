// footer.js — injects the site footer. Requires site-root.js to be loaded first.
(function () {
  var root = window.SITE_ROOT || '../';

  var footerHTML = '<footer id="site-footer">'
    + '<div class="footer-inner">'
    + '<div class="footer-top">'
    + '<div class="footer-brand">'
    + '<div class="logo"><span class="logo-main"><span class="paw-icon">🐾</span>Πατουσάκια <span>στον Παράδεισο</span></span></div>'
    + '<p>Ένας ψηφιακός τόπος μνήμης για τα αγαπημένα μας ζώα που έφυγαν. Γιατί κάθε πατουσιά άφησε ένα αποτύπωμα στην καρδιά μας.</p>'
    + '</div>'
    + '<div class="footer-col">'
    + '<h4>Σελίδες</h4>'
    + '<ul>'
    + '<li><a href="' + root + 'index.html">Αρχική</a></li>'
    + '<li><a href="' + root + 'memorials/index.html">Μνημεία</a></li>'
    + '<li><a href="' + root + 'how-it-works.html">Πώς Λειτουργεί</a></li>'
    + '<li><a href="' + root + 'request.html">Αίτηση Μνημείου</a></li>'
    + '</ul>'
    + '</div>'
    + '<div class="footer-col">'
    + '<h4>Επικοινωνία & Νομικά</h4>'
    + '<ul>'
    + '<li><a href="mailto:info@patousakiaparadise.gr">info@patousakiaparadise.gr</a></li>'
    + '<li><a href="' + root + 'privacy.html">Πολιτική Απορρήτου</a></li>'
    + '<li><a href="' + root + 'privacy.html#terms">Όροι Χρήσης</a></li>'
    + '</ul>'
    + '</div>'
    + '</div>'
    + '<div class="footer-bottom">'
    + '<span>© 2025 Πατουσάκια στον Παράδεισο. Όλα τα δικαιώματα διατηρούνται.</span>'
    + '<span class="footer-paws">🐾 🐾 🐾</span>'
    + '</div>'
    + '</div>'
    + '</footer>';

  document.getElementById('footer-placeholder').innerHTML = footerHTML;
})();
