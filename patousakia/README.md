# 🐾 Πατουσάκια στον Παράδεισο — Setup Guide

## Δομή Αρχείων

```
petmemorial/
├── index.html              ← Αρχική σελίδα
├── how-it-works.html       ← Πώς λειτουργεί
├── request.html            ← Αίτηση μνημείου
├── memorials/
│   ├── index.html          ← Λίστα μνημείων
│   ├── bob.html            ← Παράδειγμα μνημείου
│   ├── luna.html
│   └── rocky.html
├── admin/
│   ├── index.php           ← Πίνακας διαχείρισης (PHP)
│   ├── config.php          ← Ρυθμίσεις & κωδικός
│   └── .htaccess
└── assets/
    ├── css/style.css       ← Κοινό CSS
    ├── js/
    │   ├── header.js       ← Κοινό header
    │   └── footer.js       ← Κοινό footer
    └── images/memorials/   ← Φωτογραφίες ανά μνημείο

```

## Απαιτήσεις Hosting

- PHP 7.4+ (για τον admin)
- Apache ή Nginx με PHP-FPM
- Δικαιώματα εγγραφής στον φάκελο `memorials/` και `assets/images/memorials/`

## Πρώτη Εγκατάσταση

1. Ανεβάστε όλα τα αρχεία στον server σας
2. Ανοίξτε `admin/config.php` και αλλάξτε:
   - `ADMIN_PASSWORD` → δικός σας κωδικός
   - `SITE_EMAIL` → email σας
3. Δώστε δικαιώματα εγγραφής:
   ```bash
   chmod 755 memorials/
   chmod 755 assets/images/memorials/
   ```
4. Ανοίξτε `/admin/` από τον browser

## Admin Dashboard

- URL: `yourdomain.gr/admin/`
- Κωδικός: βλ. `admin/config.php` → `ADMIN_PASSWORD`
- Λειτουργίες:
  - Δημιουργία νέων μνημείων (με upload φωτογραφιών)
  - Προβολή & διαγραφή υπαρχόντων μνημείων

## Για κάθε νέο μνημείο (admin):

1. Συνδεθείτε στο `/admin/`
2. Συμπληρώστε: όνομα, slug, είδος, χρονολογίες, tagline, κείμενο, φωτογραφίες
3. Κλικ «Δημιουργία Μνημείου»
4. Η σελίδα δημιουργείται αυτόματα στο `/memorials/[slug].html`
5. **Θυμηθείτε να ενημερώσετε χειροκίνητα** το `memorials/index.html` για να εμφανίζεται το νέο μνημείο στη λίστα

## Ενημέρωση Λίστας Μνημείων

Μετά τη δημιουργία νέου μνημείου, προσθέστε κάρτα στο `memorials/index.html`:

```html
<a href="[slug].html" class="memorial-card" style="display:block;">
  <div class="memorial-card-img-placeholder">🐕</div>
  <div class="memorial-card-body">
    <span class="memorial-species-tag">🐕 Σκύλος</span>
    <div class="memorial-card-name">[Όνομα]</div>
    <div class="memorial-card-dates">[Χρονιά] – [Χρονιά] · [Χρόνια] χρόνια αγάπης</div>
    <p class="memorial-card-excerpt">[Tagline ή μικρό απόσπασμα]</p>
    <span class="memorial-card-link">Δείτε το μνημείο →</span>
  </div>
</a>
```

## Επικοινωνία & Email

Οι κουμπίτσες «Αίτηση» ανοίγουν email με προσυμπληρωμένο θέμα/σώμα.
Αλλάξτε το email στο `admin/config.php` και στο `assets/js/footer.js`.
