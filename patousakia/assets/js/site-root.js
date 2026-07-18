// site-root.js — Auto-detects the site root URL regardless of
// whether the site lives at domain.gr/ or domain.gr/patousakia/
// Must be the FIRST script loaded on every page.
(function () {
  // Find the <script> tag that loaded this file and derive root from it.
  // This file always lives at: <root>/assets/js/site-root.js
  var scripts = document.getElementsByTagName('script');
  var me = null;
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src && scripts[i].src.indexOf('site-root.js') !== -1) {
      me = scripts[i].src;
      break;
    }
  }
  if (me) {
    // Strip /assets/js/site-root.js from the end
    window.SITE_ROOT = me.replace(/\/assets\/js\/site-root\.js.*$/, '/');
  } else {
    // Fallback: derive from current page location
    var path = window.location.pathname;
    // Remove filename
    path = path.substring(0, path.lastIndexOf('/') + 1);
    // If we're inside /memorials/, go up one
    if (path.match(/\/memorials\/$/)) {
      path = path.replace(/\/memorials\/$/, '/');
    }
    window.SITE_ROOT = window.location.origin + path;
  }
  // Ensure trailing slash
  if (window.SITE_ROOT.slice(-1) !== '/') window.SITE_ROOT += '/';
})();
