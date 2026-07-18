// header.js — injects the site header. Requires site-root.js to be loaded first.
(function () {
  var root = window.SITE_ROOT || '../';
  var path = window.location.pathname;

  function isActive(page) {
    return path.endsWith('/' + page) || path.endsWith('/' + page.replace('index.html','')) ? 'active' : '';
  }
  function isActivePath(fragment) {
    return path.indexOf(fragment) !== -1 ? 'active' : '';
  }

  var headerHTML = '<header id="site-header">'
    + '<div class="header-inner">'
    + '<a href="' + root + 'index.html" class="logo" style="text-decoration:none;">'
    + '<span class="logo-main"><span class="paw-icon">🐾</span>Πατουσάκια <span>στον Παράδεισο</span></span>'
    + '<span class="logo-sub">Διαδικτυακό Μνημείο Αγαπημένων Ζώων</span>'
    + '</a>'
    + '<button class="nav-toggle" aria-label="Μενού" onclick="document.querySelector(\'nav\').classList.toggle(\'open\')">'
    + '<span></span><span></span><span></span>'
    + '</button>'
    + '<nav>'
    + '<a href="' + root + 'index.html" class="' + (isActive('index.html') || path.endsWith('/') ? 'active' : '') + '">Αρχική</a>'
    + '<a href="' + root + 'memorials/index.html" class="' + isActivePath('/memorials') + '">Μνημεία</a>'
    + '<a href="' + root + 'how-it-works.html" class="' + isActive('how-it-works.html') + '">Πώς Λειτουργεί</a>'
    + '<a href="' + root + 'request.html" class="nav-cta ' + isActive('request.html') + '">Αίτηση Μνημείου</a>'
    + '</nav>'
    + '</div>'
    + '</header>';

  document.getElementById('header-placeholder').innerHTML = headerHTML;
})();
