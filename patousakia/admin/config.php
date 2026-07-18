<?php
// ══════════════════════════════════════════════════════
//  config.php — Πατουσάκια στον Παράδεισο
//  Admin configuration — DO NOT commit to public repos
// ══════════════════════════════════════════════════════

// Admin password (change this to your own secure password)
define('ADMIN_PASSWORD', 'patousakiadmin2025');

// Session name
define('SESSION_NAME', 'patousakiaadmin');

// Filesystem paths (server-side only)
define('BASE_PATH',      dirname(__DIR__));
define('MEMORIALS_PATH', BASE_PATH . '/memorials/');
define('ASSETS_PATH',    BASE_PATH . '/assets/');
define('UPLOADS_PATH',   BASE_PATH . '/assets/images/memorials/');
define('REGISTRY_PATH',  BASE_PATH . '/assets/js/memorials-registry.js');

// Site info
define('SITE_NAME',  'Πατουσάκια στον Παράδεισο');
define('SITE_EMAIL', 'info@patousakiaparadise.gr');
