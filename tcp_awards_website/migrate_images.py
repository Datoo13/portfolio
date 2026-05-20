#!/usr/bin/env python3
"""
TCP Awards — Image Migration Script
====================================
Run this script from the tcp-awards/ folder (next to index.html).

What it does:
  1. Scans all .html files for shpages.com/wp-content/uploads/ URLs
  2. Downloads each image into images/wp-content/uploads/YYYY/MM/filename
  3. Rewrites all .html files to use local relative paths
  4. Prints a summary of successes and failures

Usage:
  python3 migrate_images.py
"""

import os
import re
import time
import urllib.request
import urllib.error
from pathlib import Path

# ── Config ────────────────────────────────────────────────────────────────────

# Base URL to find and replace
SHPAGES_BASE = "https://shpages.com/wp-content/uploads/"

# Local folder where images will be saved (relative to this script)
LOCAL_BASE = "images/wp-content/uploads/"

# HTML files to scan (all .html in the same folder and subfolders)
HTML_GLOB = "**/*.html"

# Delay between downloads in seconds — be polite to the server
DOWNLOAD_DELAY = 0.3

# Skip these files (MailerLite forms reference their own CDN)
SKIP_FILES = {"form-invitations.html", "form-participations.html"}

# ── Helpers ───────────────────────────────────────────────────────────────────

def find_html_files():
    """Find all HTML files relative to the script location."""
    script_dir = Path(__file__).parent
    files = []
    for path in sorted(script_dir.glob(HTML_GLOB)):
        if path.name not in SKIP_FILES:
            files.append(path)
    return files


def extract_image_urls(html_files):
    """Extract all unique shpages upload URLs from all HTML files."""
    pattern = re.compile(
        r'https://shpages\.com/wp-content/uploads/[^\s"\'<>)]+',
        re.IGNORECASE
    )
    urls = set()
    for path in html_files:
        content = path.read_text(encoding="utf-8", errors="replace")
        found = pattern.findall(content)
        urls.update(found)
    return sorted(urls)


def url_to_local_path(url):
    """
    Convert a shpages URL to a local relative path.
    e.g. https://shpages.com/wp-content/uploads/2025/10/photo.jpg
         -> images/wp-content/uploads/2025/10/photo.jpg
    """
    suffix = url.replace("https://shpages.com/wp-content/uploads/", "")
    # Strip any query strings
    suffix = suffix.split("?")[0]
    return Path(LOCAL_BASE + suffix)


def download_image(url, local_path):
    """Download a single image. Returns (success, message)."""
    local_path.parent.mkdir(parents=True, exist_ok=True)

    if local_path.exists():
        return True, "already exists, skipped"

    try:
        req = urllib.request.Request(
            url,
            headers={"User-Agent": "Mozilla/5.0 (compatible; TCP-Awards-Migrator/1.0)"}
        )
        with urllib.request.urlopen(req, timeout=30) as response:
            data = response.read()
        local_path.write_bytes(data)
        size_kb = len(data) // 1024
        return True, f"downloaded ({size_kb} KB)"
    except urllib.error.HTTPError as e:
        return False, f"HTTP {e.code}"
    except urllib.error.URLError as e:
        return False, f"URL error: {e.reason}"
    except Exception as e:
        return False, f"error: {e}"


def rewrite_html_files(html_files, url_to_path_map):
    """Replace all shpages URLs in HTML files with local relative paths."""
    rewritten = []
    for path in html_files:
        content = path.read_text(encoding="utf-8", errors="replace")
        original = content

        for url, local_path in url_to_path_map.items():
            # Make path relative to the HTML file's location
            try:
                rel = os.path.relpath(local_path, path.parent)
                # Normalise slashes for HTML (always forward slashes)
                rel = rel.replace("\\", "/")
            except ValueError:
                # On Windows, relpath can fail across drives — fallback
                rel = str(local_path).replace("\\", "/")

            content = content.replace(url, rel)

        if content != original:
            path.write_text(content, encoding="utf-8")
            rewritten.append(path.name)

    return rewritten


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    print("=" * 60)
    print("  TCP Awards — Image Migration Script")
    print("=" * 60)

    # 1. Find HTML files
    html_files = find_html_files()
    print(f"\n📄 Found {len(html_files)} HTML files to scan:")
    for f in html_files:
        print(f"   {f.name}")

    # 2. Extract URLs
    urls = extract_image_urls(html_files)
    print(f"\n🔍 Found {len(urls)} unique image URLs to download.\n")

    if not urls:
        print("Nothing to do. Exiting.")
        return

    # 3. Download images
    url_to_path_map = {}
    successes = []
    failures = []

    for i, url in enumerate(urls, 1):
        local_path = url_to_local_path(url)
        url_to_path_map[url] = local_path

        ok, msg = download_image(url, local_path)
        status = "✅" if ok else "❌"
        print(f"  [{i:>3}/{len(urls)}] {status} {Path(url).name}  — {msg}")

        if ok:
            successes.append(url)
        else:
            failures.append((url, msg))

        # Be polite — small delay between requests
        if i < len(urls) and "skipped" not in msg:
            time.sleep(DOWNLOAD_DELAY)

    # 4. Rewrite HTML files
    print(f"\n✏️  Rewriting HTML files...")
    rewritten = rewrite_html_files(html_files, url_to_path_map)
    for name in rewritten:
        print(f"   updated: {name}")
    if not rewritten:
        print("   (no files needed updating)")

    # 5. Summary
    print("\n" + "=" * 60)
    print("  SUMMARY")
    print("=" * 60)
    print(f"  Images found:      {len(urls)}")
    print(f"  Downloaded OK:     {len(successes)}")
    print(f"  Failed:            {len(failures)}")
    print(f"  HTML files updated: {len(rewritten)}")

    if failures:
        print(f"\n⚠️  Failed downloads ({len(failures)}):")
        for url, msg in failures:
            print(f"   {msg:20s}  {url}")
        print("\n  These URLs were NOT rewritten in the HTML files.")
        print("  Download them manually and rerun the script, or")
        print("  update those references by hand.")

    print("\n✅ Done.\n")


if __name__ == "__main__":
    main()
