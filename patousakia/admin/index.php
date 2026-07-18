<?php
// ══════════════════════════════════════════════════════
//  admin/index.php — Πατουσάκια στον Παράδεισο
//  Admin Dashboard
// ══════════════════════════════════════════════════════

require_once 'config.php';

session_name(SESSION_NAME);
session_start();

$error   = '';
$success = '';
$action  = $_GET['action'] ?? 'dashboard';

// ── AUTH ────────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    if ($_POST['password'] === ADMIN_PASSWORD) {
        $_SESSION['admin_logged_in'] = true;
        $_SESSION['admin_time']      = time();
        header('Location: index.php');
        exit;
    } else {
        $error = 'Λάθος κωδικός πρόσβασης.';
    }
}

if (isset($_GET['rebuild']) && $loggedIn) {
    rebuildRegistry();
    header('Location: index.php?rebuilt=1');
    exit;
}

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: index.php');
    exit;
}

// Auto-logout after 2 hours
if (isset($_SESSION['admin_time']) && (time() - $_SESSION['admin_time'] > 7200)) {
    session_destroy();
    header('Location: index.php?timeout=1');
    exit;
}

$loggedIn = !empty($_SESSION['admin_logged_in']);

// ── HANDLE FORM SUBMISSIONS (only if logged in) ─────────
if ($loggedIn && $_SERVER['REQUEST_METHOD'] === 'POST') {

    // ── CREATE MEMORIAL ──────────────────────────────────
    if (isset($_POST['create_memorial'])) {
        $name       = trim($_POST['pet_name'] ?? '');
        $slug       = trim($_POST['pet_slug'] ?? '');
        $species    = trim($_POST['species'] ?? '');
        $species_icon = trim($_POST['species_icon'] ?? '🐾');
        $breed      = trim($_POST['breed'] ?? '');
        $sex        = trim($_POST['sex'] ?? 'male'); // 'male' | 'female'
        $birth_year = trim($_POST['birth_year'] ?? '');
        $birth_month= trim($_POST['birth_month'] ?? '');
        $death_year = trim($_POST['death_year'] ?? '');
        $death_month= trim($_POST['death_month'] ?? '');
        $tagline    = trim($_POST['tagline'] ?? '');
        $tribute    = trim($_POST['tribute'] ?? '');
        $emoji      = trim($_POST['emoji'] ?? '🐾');

        // Validate slug
        $slug = preg_replace('/[^a-z0-9\-]/', '', strtolower($slug));

        if (!$name || !$slug || !$birth_year || !$death_year || !$tribute) {
            $error = 'Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία.';
        } elseif (file_exists(MEMORIALS_PATH . $slug . '.html')) {
            $error = 'Υπάρχει ήδη μνημείο με αυτό το slug: ' . htmlspecialchars($slug);
        } else {
            // Handle photo uploads — first is profile photo
            $photos = [];
            $profile_photo = null;
            if (!empty($_FILES['photos']['name'][0])) {
                $uploadDir = UPLOADS_PATH . $slug . '/';
                if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);

                foreach ($_FILES['photos']['tmp_name'] as $i => $tmp) {
                    if ($_FILES['photos']['error'][$i] === UPLOAD_ERR_OK) {
                        $ext  = strtolower(pathinfo($_FILES['photos']['name'][$i], PATHINFO_EXTENSION));
                        $allowed = ['jpg','jpeg','png','webp','gif'];
                        if (in_array($ext, $allowed)) {
                            // First image becomes the profile photo
                            $fname = ($i === 0) ? 'profile.' . $ext : sprintf('%02d.%s', $i + 1, $ext);
                            if (move_uploaded_file($tmp, $uploadDir . $fname)) {
                                if ($i === 0) {
                                    $profile_photo = $slug . '/' . $fname; // relative path only
                                } else {
                                    $photos[] = $slug . '/' . $fname; // relative path only
                                }
                            }
                        }
                    }
                }
            }

            // Build years lived
            $years_lived = $death_year - $birth_year;

            // Build gallery HTML — store relative path in data-rel, resolved by SITE_ROOT at runtime
            $gallery_html = '';
            if (!empty($photos)) {
                foreach ($photos as $photo) {
                    $rel = 'assets/images/memorials/' . $photo;
                    $gallery_html .= '      <div class="gallery-item"><img data-rel="' . htmlspecialchars($rel) . '" alt="' . htmlspecialchars($name) . '" loading="lazy" class="site-root-img"></div>' . "\n";
                }
            } else {
                for ($i = 0; $i < 3; $i++) {
                    $gallery_html .= '      <div class="gallery-item">' . $emoji . '</div>' . "\n";
                }
            }

            // Build tribute paragraphs
            $tribute_html = '';
            foreach (explode("\n\n", $tribute) as $para) {
                $para = trim($para);
                if ($para) {
                    $tribute_html .= '      <p>' . nl2br(htmlspecialchars($para)) . '</p>' . "\n";
                }
            }

            // Main portrait — data-rel path resolved by SITE_ROOT at runtime
            if ($profile_photo) {
                $rel_profile = 'assets/images/memorials/' . $profile_photo;
                $main_photo_html = '<img data-rel="' . htmlspecialchars($rel_profile) . '" class="memorial-portrait site-root-img" alt="' . htmlspecialchars($name) . '" onerror="this.outerHTML=\'<div class=&quot;memorial-portrait-placeholder&quot;>' . $emoji . '</div>\'">';
            } else {
                $main_photo_html = '<div class="memorial-portrait-placeholder">' . $emoji . '</div>';
            }

            // Build birth/death display
            $months_el = ['', 'Ιανουάριος','Φεβρουάριος','Μάρτιος','Απρίλιος','Μάιος','Ιούνιος','Ιούλιος','Αύγουστος','Σεπτέμβριος','Οκτώβριος','Νοέμβριος','Δεκέμβριος'];
            $birth_display = ($birth_month ? $months_el[(int)$birth_month] . ' ' : '') . $birth_year;
            $death_display = ($death_month ? $months_el[(int)$death_month] . ' ' : '') . $death_year;

            // Generate HTML page from template
            $html = generateMemorialPage([
                'name'         => $name,
                'slug'         => $slug,
                'sex'          => $sex,
                'species'      => $species,
                'species_icon' => $species_icon,
                'breed'        => $breed,
                'birth_year'   => $birth_year,
                'death_year'   => $death_year,
                'birth_display'=> $birth_display,
                'death_display'=> $death_display,
                'years_lived'  => $years_lived,
                'tagline'      => $tagline,
                'tribute_html' => $tribute_html,
                'gallery_html' => $gallery_html,
                'main_photo'   => $main_photo_html,
                'emoji'        => $emoji,
            ]);

            file_put_contents(MEMORIALS_PATH . $slug . '.html', $html);
            rebuildRegistry();
            $article = ($sex === 'female') ? 'την' : 'τον';
            $success = 'Το μνημείο για ' . $article . ' <strong>' . htmlspecialchars($name) . '</strong> δημιουργήθηκε και το μητρώο ενημερώθηκε αυτόματα! <a href="../memorials/' . $slug . '.html" target="_blank">Δείτε το →</a>';
        }
    }

    // ── DELETE MEMORIAL ──────────────────────────────────
    if (isset($_POST['delete_memorial'])) {
        $slug = preg_replace('/[^a-z0-9\-]/', '', $_POST['delete_slug'] ?? '');
        if ($slug && file_exists(MEMORIALS_PATH . $slug . '.html')) {
            unlink(MEMORIALS_PATH . $slug . '.html');
            rebuildRegistry();
            $success = 'Το μνημείο <strong>' . htmlspecialchars($slug) . '</strong> διαγράφηκε και το μητρώο ενημερώθηκε αυτόματα.';
        } else {
            $error = 'Το μνημείο δεν βρέθηκε.';
        }
    }
}

// ── LOAD EXISTING MEMORIALS (reads embedded meta from each HTML) ──
function getMemorials(): array {
    $files = glob(MEMORIALS_PATH . '*.html') ?: [];
    $memorials = [];
    foreach ($files as $f) {
        $slug = basename($f, '.html');
        if ($slug === 'index') continue;
        $content = file_get_contents($f);
        // Try to extract embedded metadata JSON comment
        if (preg_match('/<!--MEMORIAL_META:(.*?)-->/s', $content, $m)) {
            $meta = json_decode(trim($m[1]), true);
            if ($meta) {
                $meta['modified'] = filemtime($f);
                $memorials[] = $meta;
                continue;
            }
        }
        // Fallback: extract title only
        preg_match('/<title>([^<]+)<\/title>/', $content, $m);
        $title = $m[1] ?? $slug;
        $title = str_replace(' — Πατουσάκια στον Παράδεισο', '', $title);
        $memorials[] = [
            'slug'     => $slug,
            'name'     => $title,
            'title'    => $title,
            'url'      => '../memorials/' . $slug . '.html',
            'modified' => filemtime($f),
        ];
    }
    usort($memorials, fn($a,$b) => $b['modified'] <=> $a['modified']);
    return $memorials;
}

// ── REBUILD REGISTRY JS AUTOMATICALLY ────────────────────
function rebuildRegistry(): void {
    $memorials = getMemorials();
    // Sort newest death year first (same default as frontend)
    usort($memorials, function($a, $b) {
        $ad = (int)($a['death'] ?? 0);
        $bd = (int)($b['death'] ?? 0);
        return $bd <=> $ad;
    });

    $entries = [];
    foreach ($memorials as $m) {
        // Skip entries without full metadata (fallback-only)
        if (empty($m['slug']) || empty($m['name'])) continue;
        $entry = json_encode([
            'slug'    => $m['slug']    ?? '',
            'name'    => $m['name']    ?? '',
            'sex'     => $m['sex']     ?? 'male',
            'species' => $m['species'] ?? '',
            'icon'    => $m['icon']    ?? '🐾',
            'birth'   => (int)($m['birth'] ?? 0),
            'death'   => (int)($m['death'] ?? 0),
            'tagline' => $m['tagline'] ?? '',
            'photo'   => $m['photo']   ?? ($m['slug'] . '/profile.png'),
        ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        $entries[] = '  ' . $entry;
    }

    $js  = "// ══════════════════════════════════════════════════════════════\n";
    $js .= "//  memorials-registry.js — AUTO-GENERATED by admin\n";
    $js .= "//  DO NOT EDIT MANUALLY — updated automatically on add/delete\n";
    $js .= "//  Last updated: " . date('Y-m-d H:i:s') . "\n";
    $js .= "// ══════════════════════════════════════════════════════════════\n\n";
    $js .= "const MEMORIALS = [\n" . implode(",\n", $entries) . "\n];\n";

    // Append all the helper functions from the original static version
    $js .= <<<'JSFUNCS'

// ── Gender helpers ─────────────────────────────────────────────
function genderArticle(pet)    { return pet.sex === 'female' ? 'η'    : 'ο';   }
function genderPossessive(pet) { return pet.sex === 'female' ? 'της'  : 'του'; }
function genderPronoun(pet)    { return pet.sex === 'female' ? 'αυτή' : 'αυτός'; }

// ── Shuffle ────────────────────────────────────────────────────
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Candle card HTML ───────────────────────────────────────────
function candleCardHTML(pet, depthPrefix, delay) {
  const flickerSpeed  = (1.7 + Math.random() * 1.0).toFixed(1);
  const flickerOffset = (Math.random() * 1.0).toFixed(1);
  const flameColor    = pet.sex === 'female' ? '#F2A7BB' : '#F4845F';
  const glowColor     = pet.sex === 'female' ? '#FAD4E0' : '#FAC4B0';
  const imgSrc = `${depthPrefix}assets/images/memorials/${pet.photo}`;
  const photoHTML = `
    <div class="candle-card-photo-wrap">
      <img src="${imgSrc}" alt="${pet.name}" class="candle-card-photo"
           onerror="this.parentElement.innerHTML='<div class=\'candle-card-photo-fallback\'>${pet.icon}</div>'">
    </div>`;
  const delayClass = delay > 0 ? ` fade-in-delay-${Math.min(delay,3)}` : '';
  return `
  <div class="candle-card fade-in${delayClass}">
    <svg width="40" height="70" viewBox="0 0 48 80" style="margin:0 auto 12px;display:block;">
      <defs>
        <radialGradient id="cg_${pet.slug}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${glowColor}" stop-opacity="0.7"/>
          <stop offset="100%" stop-color="${glowColor}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="24" cy="20" r="18" fill="url(#cg_${pet.slug})"/>
      <rect x="20" y="26" width="8" height="48" rx="4" fill="#FDF5E6"/>
      <rect x="22" y="24" width="4" height="6" fill="#D4A847" rx="1"/>
      <ellipse cx="24" cy="20" rx="7" ry="10" fill="${flameColor}" style="animation:flicker ${flickerSpeed}s ease-in-out infinite ${flickerOffset}s;"/>
    </svg>
    ${photoHTML}
    <div class="candle-name">${pet.name}</div>
    <div class="candle-species">${pet.icon} ${pet.species}</div>
    <div class="candle-years">${pet.birth} – ${pet.death}</div>
    <p class="candle-quote">«${pet.tagline}»</p>
    <a href="${depthPrefix}memorials/${pet.slug}.html" class="candle-link">Δείτε το μνημείο →</a>
  </div>`;
}

// ── "Add yours" card ──────────────────────────────────────────
function addYoursCardHTML(depthPrefix) {
  return `
  <div class="candle-card" style="background:linear-gradient(135deg,#fff6f0,#fff0f4);border:2px dashed var(--orange-light);display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:280px;text-align:center;">
    <div style="font-size:2.5rem;margin-bottom:16px;">🕯️</div>
    <div class="candle-name" style="color:var(--orange);">Το αγαπημένο σας ζωάκι</div>
    <p class="candle-quote" style="margin-top:10px;">Αφήστε τη μνήμη του να ζήσει για πάντα εδώ.</p>
    <a href="${depthPrefix}request.html" class="btn btn-primary" style="margin-top:20px;font-size:0.82rem;padding:10px 22px;">Αίτηση Μνημείου</a>
  </div>`;
}

// ── Featured (random) on homepage ────────────────────────────
function renderFeaturedMemorials(containerId, maxCount = 4, isSubdir = false, showAddYours = true) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const depthPrefix = isSubdir ? '../' : '';
  const picked = shuffleArray(MEMORIALS).slice(0, maxCount);
  let html = '';
  picked.forEach((pet, i) => { html += candleCardHTML(pet, depthPrefix, i); });
  if (showAddYours) html += addYoursCardHTML(depthPrefix);
  container.innerHTML = html;
}

// ── Full grid (memorials/index.html) — handled inline ────────
function renderAllMemorials(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const sorted = [...MEMORIALS].sort((a, b) => b.death - a.death || a.name.localeCompare(b.name, 'el'));
  let html = '';
  sorted.forEach((pet) => {
    const years  = pet.death - pet.birth;
    const imgSrc = `../assets/images/memorials/${pet.photo}`;
    html += `
    <a href="${pet.slug}.html" class="memorial-card" style="display:block;">
      <div class="memorial-card-photo-wrap">
        <img src="${imgSrc}" alt="${pet.name}" class="memorial-card-img"
             onerror="this.parentElement.innerHTML='<div class=\'memorial-card-img-placeholder\'>${pet.icon}</div>'">
      </div>
      <div class="memorial-card-body">
        <span class="memorial-species-tag">${pet.icon} ${pet.species}</span>
        <div class="memorial-card-name">${pet.name}</div>
        <div class="memorial-card-dates">${pet.birth} – ${pet.death} &nbsp;·&nbsp; ${years} χρόνια αγάπης</div>
        <p class="memorial-card-excerpt">«${pet.tagline}»</p>
        <span class="memorial-card-link">Δείτε το μνημείο →</span>
      </div>
    </a>`;
  });
  container.innerHTML = html;
  const badge = document.getElementById('memorial-count');
  if (badge) badge.textContent = `${MEMORIALS.length} μνημεία`;
}
JSFUNCS;

    $registryPath = BASE_PATH . '/assets/js/memorials-registry.js';
    file_put_contents($registryPath, $js);
}

// ── GENERATE MEMORIAL HTML ───────────────────────────────
function generateMemorialPage(array $d): string {
    $name        = htmlspecialchars($d['name']);
    $species     = htmlspecialchars($d['species']);
    $species_icon = htmlspecialchars($d['species_icon']);
    $breed       = htmlspecialchars($d['breed']);
    $birth_display = htmlspecialchars($d['birth_display']);
    $death_display = htmlspecialchars($d['death_display']);
    $birth_year  = htmlspecialchars($d['birth_year']);
    $death_year  = htmlspecialchars($d['death_year']);
    $years       = (int)$d['years_lived'];
    $tagline     = htmlspecialchars($d['tagline']);
    $tribute     = $d['tribute_html'];
    $gallery     = $d['gallery_html'];
    $main_photo  = $d['main_photo'];
    $emoji       = htmlspecialchars($d['emoji']);
    $sex         = $d['sex'] ?? 'male';

    // Greek grammar based on sex
    $article_nom  = ($sex === 'female') ? 'η'    : 'ο';    // η Λούνα / ο Μπομπ
    $article_gen  = ($sex === 'female') ? 'της'  : 'του';  // της Λούνας / του Μπομπ
    $candle_text  = ($sex === 'female')
        ? "Ένα κερί καίει πάντα για τη {$name}"
        : "Ένα κερί καίει πάντα για τον {$name}";
    $tribute_title = ($sex === 'female')
        ? "Η ιστορία <em>{$article_gen} {$name}</em>"
        : "Η ιστορία <em>{$article_gen} {$name}</em>";
    $gallery_title = ($sex === 'female')
        ? "Στιγμές με <em>τη {$name}</em>"
        : "Στιγμές με <em>τον {$name}</em>";
    $meta_article = ($sex === 'female') ? 'την' : 'τον';
    $badge_color  = ($sex === 'female') ? 'var(--pink-dark)' : 'var(--orange)';
    $border_color = ($sex === 'female') ? 'var(--pink)'      : 'var(--orange)';
    $candle_color = ($sex === 'female') ? '#F2A7BB'           : '#F4845F';
    $flicker_speed = ($sex === 'female') ? '2.3s' : '2.0s';

    // Build metadata JSON to embed in HTML for auto-discovery
    $raw_slug    = $d['slug'];
    $raw_name    = $d['name'];
    $raw_sex     = $sex;
    $raw_species = $d['species'];
    $raw_icon    = $d['emoji'];
    $raw_birth   = (int)$d['birth_year'];
    $raw_death   = (int)$d['death_year'];
    $raw_tagline = $d['tagline'];
    $raw_photo   = $raw_slug . '/profile.png';
    $meta_json   = json_encode([
        'slug'    => $raw_slug,
        'name'    => $raw_name,
        'sex'     => $raw_sex,
        'species' => $raw_species,
        'icon'    => $raw_icon,
        'birth'   => $raw_birth,
        'death'   => $raw_death,
        'tagline' => $raw_tagline,
        'photo'   => $raw_photo,
    ], JSON_UNESCAPED_UNICODE);

    return <<<HTML
<!--MEMORIAL_META:{$meta_json}-->
<!DOCTYPE html>
<html lang="el">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{$name} — Πατουσάκια στον Παράδεισο</title>
  <meta name="description" content="Μνημείο για {$meta_article} {$name}. {$tagline}">
  <link rel="stylesheet" href="../assets/css/style.css">
  <style>
    .memorial-hero { background: linear-gradient(160deg,#fff8f6 0%,#fff0f4 60%,#fef6f0 100%); padding:110px 32px 56px; position:relative; overflow:hidden; }
    .memorial-hero::before { content:''; position:absolute; top:-100px; right:-100px; width:400px; height:400px; background:radial-gradient(circle,rgba(242,167,187,.2) 0%,transparent 70%); pointer-events:none; }
    .memorial-hero-inner { max-width:860px; margin:0 auto; display:grid; grid-template-columns:auto 1fr; gap:48px; align-items:center; }
    .memorial-portrait { width:200px; height:200px; border-radius:50%; object-fit:cover; border:6px solid white; box-shadow:0 12px 48px rgba(244,132,95,.25); display:block; }
    .memorial-portrait-placeholder { width:200px; height:200px; border-radius:50%; background:linear-gradient(135deg,var(--pink-light),var(--orange-light)); display:flex; align-items:center; justify-content:center; font-size:5rem; border:6px solid white; box-shadow:0 12px 48px rgba(244,132,95,.25); }
    .memorial-species-badge { display:inline-flex; align-items:center; gap:6px; background:{$badge_color}; color:white; border-radius:20px; padding:5px 16px; font-size:.78rem; font-weight:600; letter-spacing:.1em; text-transform:uppercase; margin-bottom:16px; }
    .memorial-name { font-family:var(--font-display); font-size:clamp(2.5rem,6vw,4rem); font-weight:700; color:var(--charcoal); line-height:1; margin-bottom:12px; }
    .memorial-dates { font-size:1rem; color:var(--gray); margin-bottom:20px; display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
    .memorial-dates-divider { color:{$border_color}; }
    .memorial-years-lived { display:inline-flex; align-items:center; gap:6px; background:var(--off-white); border:1px solid var(--gray-light); border-radius:20px; padding:4px 14px; font-size:.8rem; color:var(--gray); }
    .memorial-tagline { font-family:var(--font-elegant); font-size:1.2rem; font-style:italic; color:var(--gray); line-height:1.6; max-width:480px; }
    .candle-section { background:linear-gradient(135deg,var(--orange) 0%,var(--pink-dark) 100%); padding:48px 32px; text-align:center; }
    .candle-wrapper { display:inline-flex; flex-direction:column; align-items:center; gap:12px; }
    .candle-section p { color:rgba(255,255,255,.85); font-family:var(--font-elegant); font-style:italic; font-size:1.1rem; }
    .tribute-section { padding:72px 32px; }
    .tribute-inner { max-width:720px; margin:0 auto; }
    .tribute-text { font-family:var(--font-elegant); font-size:1.12rem; line-height:1.9; color:var(--charcoal); padding-left:28px; border-left:3px solid {$border_color}; }
    .tribute-text p { margin-bottom:20px; }
    .tribute-text p:last-child { margin-bottom:0; }
    .gallery-section { background:var(--off-white); padding:72px 32px; }
    .gallery-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:16px; margin-top:40px; }
    .gallery-item { border-radius:var(--radius-md); overflow:hidden; aspect-ratio:1; background:linear-gradient(135deg,var(--pink-light),var(--orange-light)); display:flex; align-items:center; justify-content:center; font-size:3rem; box-shadow:var(--shadow-soft); transition:var(--transition); }
    .gallery-item:hover { transform:scale(1.03); box-shadow:var(--shadow-card); }
    .gallery-item img { width:100%; height:100%; object-fit:cover; }
    .info-band { padding:48px 32px; background:white; }
    .info-band-inner { max-width:720px; margin:0 auto; display:flex; gap:32px; flex-wrap:wrap; justify-content:center; }
    .info-pill { display:flex; flex-direction:column; align-items:center; gap:6px; padding:20px 32px; background:var(--off-white); border-radius:var(--radius-md); border:1px solid var(--gray-light); min-width:140px; }
    .info-pill-icon { font-size:1.6rem; }
    .info-pill-label { font-size:.7rem; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:var(--gray); }
    .info-pill-value { font-family:var(--font-display); font-size:1rem; font-weight:700; color:var(--charcoal); }
    .memorial-nav { padding:40px 32px; border-top:1px solid var(--gray-light); display:flex; justify-content:space-between; align-items:center; max-width:860px; margin:0 auto; flex-wrap:wrap; gap:16px; }
    @media(max-width:600px){ .memorial-hero-inner{grid-template-columns:1fr;text-align:center;} .memorial-portrait-placeholder{margin:0 auto;} .tribute-text{padding-left:16px;} }
  </style>
</head>
<body>
<div id="header-placeholder"></div>

<section class="memorial-hero">
  <div class="memorial-hero-inner">
    {$main_photo}
    <div class="memorial-info fade-in">
      <span class="memorial-species-badge">{$species_icon} {$species}</span>
      <h1 class="memorial-name">{$name}</h1>
      <div class="memorial-dates">
        <span>{$birth_year}</span>
        <span class="memorial-dates-divider">🐾</span>
        <span>{$death_year}</span>
        <span class="memorial-years-lived">{$years} χρόνια αγάπης</span>
      </div>
      <p class="memorial-tagline">«{$tagline}»</p>
    </div>
  </div>
</section>

<div class="info-band">
  <div class="info-band-inner">
    <div class="info-pill">
      <div class="info-pill-icon">🎂</div>
      <div class="info-pill-label">Γεννήθηκε</div>
      <div class="info-pill-value">{$birth_display}</div>
    </div>
    <div class="info-pill">
      <div class="info-pill-icon">🌸</div>
      <div class="info-pill-label">Έφυγε</div>
      <div class="info-pill-value">{$death_display}</div>
    </div>
    <div class="info-pill">
      <div class="info-pill-icon">{$species_icon}</div>
      <div class="info-pill-label">Φυλή</div>
      <div class="info-pill-value">{$breed}</div>
    </div>
    <div class="info-pill">
      <div class="info-pill-icon">❤️</div>
      <div class="info-pill-label">Χρόνια μαζί</div>
      <div class="info-pill-value">{$years} χρόνια</div>
    </div>
  </div>
</div>

<div class="candle-section">
  <div class="candle-wrapper">
    <svg width="56" height="110" viewBox="0 0 56 110">
      <defs><radialGradient id="fg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(255,255,255,0.5)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient></defs>
      <circle cx="28" cy="22" r="22" fill="url(#fg)"/>
      <rect x="22" y="36" width="12" height="68" rx="6" fill="rgba(255,255,255,0.9)"/>
      <rect x="25" y="32" width="6" height="8" fill="#D4A847" rx="2"/>
      <ellipse cx="28" cy="22" rx="10" ry="16" fill="{$candle_color}" style="animation:flicker {$flicker_speed} ease-in-out infinite;"/>
    </svg>
    <p>{$candle_text}</p>
  </div>
</div>

<section class="tribute-section">
  <div class="tribute-inner">
    <p class="section-label">Το Αφιέρωμα</p>
    <h2 class="section-title" style="margin-bottom:36px;">{$tribute_title}</h2>
    <div class="tribute-text">
{$tribute}
    </div>
  </div>
</section>

<section class="gallery-section">
  <div class="section-inner">
    <div class="text-center">
      <p class="section-label">Φωτογραφίες</p>
      <h2 class="section-title">{$gallery_title}</h2>
    </div>
    <div class="gallery-grid">
{$gallery}
    </div>
  </div>
</section>

<div class="memorial-nav">
  <a href="index.html" class="btn btn-secondary">← Όλα τα μνημεία</a>
  <a href="../request.html" class="btn btn-primary">🐾 Δημιουργήστε το δικό σας μνημείο</a>
</div>

<div id="footer-placeholder"></div>
<script src="../assets/js/site-root.js"></script>
<script src="../assets/js/header.js"></script>
<script src="../assets/js/footer.js"></script>
<script>
// Resolve data-rel image paths using SITE_ROOT
document.querySelectorAll('img.site-root-img[data-rel]').forEach(function(img) {
  img.src = (window.SITE_ROOT || '../') + img.getAttribute('data-rel');
});
</script>
</body>
</html>
HTML;
}

$memorials = $loggedIn ? getMemorials() : [];
?>
<!DOCTYPE html>
<html lang="el">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin — Πατουσάκια στον Παράδεισο</title>
  <link rel="stylesheet" href="../assets/css/style.css">
  <style>
    * { box-sizing: border-box; }
    body { background: #f5f5f5; font-family: var(--font-body); }

    /* ── ADMIN LAYOUT ── */
    .admin-bar {
      background: var(--charcoal);
      padding: 14px 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .admin-bar-brand {
      color: white;
      font-weight: 700;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .admin-bar-brand span { color: var(--orange); }
    .admin-badge {
      background: var(--orange);
      color: white;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 20px;
    }
    .admin-bar-actions { display: flex; gap: 12px; align-items: center; }
    .admin-bar a { color: rgba(255,255,255,0.65); font-size: 0.85rem; transition: color 0.2s; }
    .admin-bar a:hover { color: white; }
    .admin-bar a.logout { color: var(--orange-light); }

    .admin-body {
      max-width: 1080px;
      margin: 0 auto;
      padding: 36px 24px 80px;
    }

    /* ── STATS ROW ── */
    .stats-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 32px;
    }
    .stat-card {
      background: white;
      border-radius: 12px;
      padding: 24px 20px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.07);
      border-left: 4px solid var(--orange);
      display: flex;
      gap: 16px;
      align-items: center;
    }
    .stat-card-icon { font-size: 2rem; }
    .stat-card-num { font-family: var(--font-display); font-size: 1.8rem; font-weight: 700; color: var(--charcoal); line-height: 1; }
    .stat-card-label { font-size: 0.78rem; color: var(--gray); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px; }

    /* ── PANELS ── */
    .panel {
      background: white;
      border-radius: 14px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.07);
      margin-bottom: 28px;
      overflow: hidden;
    }
    .panel-header {
      padding: 18px 24px;
      border-bottom: 1px solid #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .panel-title {
      font-weight: 700;
      font-size: 1rem;
      color: var(--charcoal);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .panel-body { padding: 28px 24px; }

    /* ── FORM ── */
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .form-full { grid-column: 1/-1; }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-label {
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--charcoal);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .form-label .req { color: var(--orange); }
    .form-control {
      padding: 10px 14px;
      border: 1.5px solid #e0e0e0;
      border-radius: 8px;
      font-family: var(--font-body);
      font-size: 0.92rem;
      color: var(--charcoal);
      transition: border-color 0.2s;
      background: white;
      width: 100%;
    }
    .form-control:focus { outline: none; border-color: var(--orange); box-shadow: 0 0 0 3px rgba(244,132,95,0.1); }
    textarea.form-control { resize: vertical; min-height: 120px; line-height: 1.6; }
    .form-hint { font-size: 0.75rem; color: var(--gray); }

    .emoji-row { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 8px; }
    .emoji-btn {
      width: 38px; height: 38px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      background: white;
      font-size: 1.3rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s;
    }
    .emoji-btn:hover, .emoji-btn.selected { border-color: var(--orange); background: var(--orange-light); transform: scale(1.1); }

    /* ── MEMORIALS TABLE ── */
    .memorial-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
    .memorial-table th {
      text-align: left;
      padding: 10px 14px;
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--gray);
      border-bottom: 2px solid #f0f0f0;
    }
    .memorial-table td {
      padding: 14px;
      border-bottom: 1px solid #f8f8f8;
      color: var(--charcoal);
      vertical-align: middle;
    }
    .memorial-table tr:last-child td { border-bottom: none; }
    .memorial-table tr:hover td { background: #fafafa; }
    .table-name { font-weight: 600; }
    .table-slug { font-family: monospace; font-size: 0.82rem; color: var(--gray); }
    .table-actions { display: flex; gap: 8px; align-items: center; }
    .btn-sm { padding: 6px 14px; font-size: 0.78rem; border-radius: 6px; }
    .btn-view { background: var(--off-white); color: var(--charcoal); border: 1px solid #e0e0e0; display:inline-flex; align-items:center; gap:4px; transition:.2s; }
    .btn-view:hover { background: var(--orange); color: white; border-color: var(--orange); }
    .btn-delete { background: #fff0f0; color: #c0392b; border: 1px solid #fcc; display:inline-flex; align-items:center; gap:4px; transition:.2s; }
    .btn-delete:hover { background: #c0392b; color: white; border-color: #c0392b; }

    /* ── ALERTS ── */
    .alert {
      padding: 14px 18px;
      border-radius: 8px;
      font-size: 0.9rem;
      margin-bottom: 24px;
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }
    .alert-success { background: #f0faf5; border: 1px solid #a3d9b4; color: #1a7a4a; }
    .alert-error   { background: #fff5f5; border: 1px solid #ffb3b3; color: #c0392b; }
    .alert a { color: inherit; font-weight: 600; text-decoration: underline; }

    /* ── LOGIN ── */
    .login-wrap {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #fff8f6 0%, #fff0f4 100%);
      padding: 20px;
    }
    .login-card {
      background: white;
      border-radius: 20px;
      padding: 48px 40px;
      box-shadow: 0 20px 60px rgba(244,132,95,0.15);
      width: 100%;
      max-width: 400px;
      text-align: center;
    }
    .login-logo { font-size: 3rem; margin-bottom: 16px; }
    .login-title { font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; color: var(--charcoal); margin-bottom: 6px; }
    .login-subtitle { font-size: 0.85rem; color: var(--gray); margin-bottom: 32px; }
    .login-card .form-group { text-align: left; margin-bottom: 20px; }
    .login-card .form-control { padding: 12px 16px; }

    @media (max-width: 700px) {
      .form-grid { grid-template-columns: 1fr; }
      .stats-row { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

<?php if (!$loggedIn): ?>
<!-- ══ LOGIN ══════════════════════════════════════════════════ -->
<div class="login-wrap">
  <div class="login-card">
    <div class="login-logo">🐾</div>
    <div class="login-title">Admin Panel</div>
    <div class="login-subtitle">Πατουσάκια στον Παράδεισο</div>

    <?php if ($error): ?>
    <div class="alert alert-error">⚠️ <?= htmlspecialchars($error) ?></div>
    <?php endif; ?>

    <?php if (isset($_GET['rebuilt'])): ?>
    <div class="alert alert-success">✅ Το μητρώο ανακατασκευάστηκε επιτυχώς από τα υπάρχοντα αρχεία.</div>
    <?php endif; ?>
    <?php if (isset($_GET['timeout'])): ?>
    <div class="alert alert-error">⏱️ Η συνεδρία έληξε. Παρακαλώ συνδεθείτε ξανά.</div>
    <?php endif; ?>

    <form method="POST">
      <div class="form-group">
        <label class="form-label">Κωδικός Πρόσβασης</label>
        <input type="password" name="password" class="form-control" placeholder="••••••••" autofocus required>
      </div>
      <button type="submit" name="login" class="btn btn-primary" style="width:100%; justify-content:center; margin-top:8px;">
        Είσοδος →
      </button>
    </form>

    <p style="margin-top:24px; font-size:0.78rem; color:var(--gray);">
      <a href="../index.html" style="color:var(--orange);">← Επιστροφή στην ιστοσελίδα</a>
    </p>
  </div>
</div>

<?php else: ?>
<!-- ══ ADMIN DASHBOARD ════════════════════════════════════════ -->

<div class="admin-bar">
  <div class="admin-bar-brand">
    🐾 <span>Πατουσάκια</span> στον Παράδεισο
    <span class="admin-badge">Admin</span>
  </div>
  <div class="admin-bar-actions">
    <a href="../index.html" target="_blank">🌐 Ιστοσελίδα</a>
    <a href="../memorials/index.html" target="_blank">📋 Μνημεία</a>
    <a href="?logout=1" class="logout">Αποσύνδεση</a>
  </div>
</div>

<div class="admin-body">

  <?php if ($success): ?>
  <div class="alert alert-success">✅ <?= $success ?></div>
  <?php endif; ?>
  <?php if ($error): ?>
  <div class="alert alert-error">⚠️ <?= htmlspecialchars($error) ?></div>
  <?php endif; ?>

  <!-- Stats -->
  <div class="stats-row">
    <div class="stat-card">
      <div class="stat-card-icon">🕯️</div>
      <div>
        <div class="stat-card-num"><?= count($memorials) ?></div>
        <div class="stat-card-label">Μνημεία</div>
      </div>
    </div>
    <div class="stat-card" style="border-left-color:var(--pink);">
      <div class="stat-card-icon">📅</div>
      <div>
        <div class="stat-card-num"><?= date('d/m/Y') ?></div>
        <div class="stat-card-label">Σημερινή ημερομηνία</div>
      </div>
    </div>
    <div class="stat-card" style="border-left-color:var(--sage);">
      <div class="stat-card-icon">📧</div>
      <div>
        <div class="stat-card-num" style="font-size:0.95rem;"><?= SITE_EMAIL ?></div>
        <div class="stat-card-label">Email επικοινωνίας</div>
      </div>
    </div>
  </div>

  <!-- ── CREATE NEW MEMORIAL ── -->
  <div class="panel">
    <div class="panel-header">
      <div class="panel-title">🌸 Δημιουργία Νέου Μνημείου</div>
    </div>
    <div class="panel-body">
      <form method="POST" enctype="multipart/form-data">
        <div class="form-grid">

          <!-- Name -->
          <div class="form-group">
            <label class="form-label">Όνομα Ζωακιού <span class="req">*</span></label>
            <input type="text" name="pet_name" class="form-control" placeholder="π.χ. Μπομπ" required>
          </div>

          <!-- Slug -->
          <div class="form-group">
            <label class="form-label">URL Slug <span class="req">*</span></label>
            <input type="text" name="pet_slug" id="pet_slug" class="form-control" placeholder="π.χ. bob" required>
            <span class="form-hint">Μόνο λατινικοί χαρακτήρες, αριθμοί, παύλα. URL: /memorials/<strong id="slug_preview">bob</strong>.html</span>
          </div>

          <!-- Species -->
          <div class="form-group">
            <label class="form-label">Είδος <span class="req">*</span></label>
            <input type="text" name="species" class="form-control" placeholder="π.χ. Σκύλος" required>
          </div>

          <!-- Sex -->
          <div class="form-group">
            <label class="form-label">Φύλο <span class="req">*</span></label>
            <select name="sex" class="form-control" required>
              <option value="male">Αρσενικό (ο, του)</option>
              <option value="female">Θηλυκό (η, της)</option>
            </select>
            <span class="form-hint">Χρησιμοποιείται για τη σωστή γραμματική στη σελίδα μνημείου.</span>
          </div>

          <!-- Breed -->
          <div class="form-group">
            <label class="form-label">Φυλή / Τύπος</label>
            <input type="text" name="breed" class="form-control" placeholder="π.χ. Λαμπραντόρ">
          </div>

          <!-- Birth -->
          <div class="form-group">
            <label class="form-label">Μήνας Γέννησης</label>
            <select name="birth_month" class="form-control">
              <option value="">— Επιλέξτε (προαιρετικό) —</option>
              <?php $months=['','Ιανουάριος','Φεβρουάριος','Μάρτιος','Απρίλιος','Μάιος','Ιούνιος','Ιούλιος','Αύγουστος','Σεπτέμβριος','Οκτώβριος','Νοέμβριος','Δεκέμβριος'];
              for($i=1;$i<=12;$i++) echo "<option value=\"$i\">{$months[$i]}</option>"; ?>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Χρονιά Γέννησης <span class="req">*</span></label>
            <input type="number" name="birth_year" class="form-control" placeholder="π.χ. 2010" min="1980" max="<?= date('Y') ?>" required>
          </div>

          <!-- Death -->
          <div class="form-group">
            <label class="form-label">Μήνας Θανάτου</label>
            <select name="death_month" class="form-control">
              <option value="">— Επιλέξτε (προαιρετικό) —</option>
              <?php for($i=1;$i<=12;$i++) echo "<option value=\"$i\">{$months[$i]}</option>"; ?>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Χρονιά Θανάτου <span class="req">*</span></label>
            <input type="number" name="death_year" class="form-control" placeholder="π.χ. 2023" min="1980" max="<?= date('Y') ?>" required>
          </div>

          <!-- Species icon -->
          <div class="form-group form-full">
            <label class="form-label">Emoji Ζωακιού <span class="req">*</span></label>
            <input type="hidden" name="species_icon" id="species_icon_val" value="🐕">
            <input type="hidden" name="emoji" id="emoji_val" value="🐕">
            <div class="emoji-row">
              <?php foreach(['🐕','🐈','🐇','🐦','🐠','🐹','🐢','🦜','🐓','🦔','🐾'] as $e): ?>
              <button type="button" class="emoji-btn <?= $e==='🐕'?'selected':'' ?>" onclick="selectEmoji(this,'<?= $e ?>')"><?= $e ?></button>
              <?php endforeach; ?>
            </div>
          </div>

          <!-- Tagline -->
          <div class="form-group form-full">
            <label class="form-label">Ετικέτα / Tagline <span class="req">*</span></label>
            <input type="text" name="tagline" class="form-control" placeholder="π.χ. Ήταν η χαρά κάθε πρωινού μας." required>
            <span class="form-hint">Εμφανίζεται στο hero του μνημείου, σε εισαγωγικά.</span>
          </div>

          <!-- Tribute -->
          <div class="form-group form-full">
            <label class="form-label">Κείμενο Αφιέρωσης <span class="req">*</span></label>
            <textarea name="tribute" class="form-control" style="min-height:200px;" placeholder="Γράψτε εδώ την ιστορία και την αφιέρωση. Χωρίστε παραγράφους με κενή γραμμή." required></textarea>
            <span class="form-hint">Κάθε κενή γραμμή δημιουργεί νέα παράγραφο.</span>
          </div>

          <!-- Photos -->
          <div class="form-group form-full">
            <label class="form-label">Φωτογραφίες (μέχρι 8)</label>
            <input type="file" name="photos[]" class="form-control" accept="image/jpeg,image/png,image/webp,image/gif" multiple>
            <span class="form-hint">📌 <strong>Η πρώτη φωτογραφία</strong> γίνεται η φωτογραφία προφίλ (εμφανίζεται ως κύκλος στην κεφαλίδα). Οι υπόλοιπες πηγαίνουν στη γκαλερί. Χρησιμοποιήστε τετράγωνο PNG/JPG για το προφίλ.</span>
          </div>

        </div>

        <div style="margin-top:24px; padding-top:20px; border-top:1px solid #f0f0f0; display:flex; gap:12px;">
          <button type="submit" name="create_memorial" class="btn btn-primary">
            🌸 Δημιουργία Μνημείου
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- ── EXISTING MEMORIALS ── -->
  <div class="panel">
    <div class="panel-header">
      <div class="panel-title">🕯️ Υπάρχοντα Μνημεία (<?= count($memorials) ?>)</div>
      <a href="../memorials/index.html" target="_blank" class="btn btn-sm btn-view">Δείτε Όλα →</a>
    </div>
    <div class="panel-body" style="padding:0;">
      <?php if (empty($memorials)): ?>
      <p style="padding:32px; text-align:center; color:var(--gray); font-style:italic;">Δεν υπάρχουν ακόμα μνημεία. Δημιουργήστε το πρώτο!</p>
      <?php else: ?>
      <table class="memorial-table">
        <thead>
          <tr>
            <th>Όνομα</th>
            <th>Slug</th>
            <th>Τελευταία τροποποίηση</th>
            <th>Ενέργειες</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach($memorials as $m): ?>
          <tr>
            <td><span class="table-name"><?= htmlspecialchars($m['title']) ?></span></td>
            <td><span class="table-slug"><?= htmlspecialchars($m['slug']) ?></span></td>
            <td><?= date('d/m/Y H:i', $m['modified']) ?></td>
            <td>
              <div class="table-actions">
                <a href="<?= htmlspecialchars($m['url']) ?>" target="_blank" class="btn btn-sm btn-view">👁 Προβολή</a>
                <form method="POST" onsubmit="return confirm('Είστε σίγουροι ότι θέλετε να διαγράψετε αυτό το μνημείο;');" style="display:inline;">
                  <input type="hidden" name="delete_slug" value="<?= htmlspecialchars($m['slug']) ?>">
                  <button type="submit" name="delete_memorial" class="btn btn-sm btn-delete">🗑 Διαγραφή</button>
                </form>
              </div>
            </td>
          </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
      <?php endif; ?>
    </div>
  </div>

</div><!-- /admin-body -->

<?php endif; ?>

<script>
function selectEmoji(btn, emoji) {
  document.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('species_icon_val').value = emoji;
  document.getElementById('emoji_val').value = emoji;
}

// Auto-slug from name
const nameInput = document.querySelector('[name="pet_name"]');
const slugInput = document.getElementById('pet_slug');
const slugPreview = document.getElementById('slug_preview');
if (nameInput && slugInput) {
  nameInput.addEventListener('input', function() {
    const slug = this.value
      .toLowerCase()
      .replace(/[αάΑΆ]/g,'a').replace(/[εέΕΈ]/g,'e').replace(/[ηήΗΉ]/g,'i')
      .replace(/[ιίΙΊϊΪΐ]/g,'i').replace(/[οόΟΌ]/g,'o').replace(/[υύΥΎϋΫΰ]/g,'u')
      .replace(/[ωώΩΏ]/g,'o').replace(/[θΘ]/g,'th').replace(/[χΧ]/g,'ch')
      .replace(/[ψΨ]/g,'ps').replace(/[ξΞ]/g,'ks').replace(/[φΦ]/g,'f')
      .replace(/[γΓ]/g,'g').replace(/[δΔ]/g,'d').replace(/[ζΖ]/g,'z')
      .replace(/[κΚ]/g,'k').replace(/[λΛ]/g,'l').replace(/[μΜ]/g,'m')
      .replace(/[νΝ]/g,'n').replace(/[πΠ]/g,'p').replace(/[ρΡ]/g,'r')
      .replace(/[σΣς]/g,'s').replace(/[τΤ]/g,'t').replace(/[βΒ]/g,'v')
      .replace(/[^a-z0-9]/g,'-').replace(/-+/g,'-').replace(/^-|-$/g,'');
    slugInput.value = slug;
    if (slugPreview) slugPreview.textContent = slug || 'slug';
  });
  slugInput.addEventListener('input', function() {
    if (slugPreview) slugPreview.textContent = this.value || 'slug';
  });
}
</script>
</body>
</html>
