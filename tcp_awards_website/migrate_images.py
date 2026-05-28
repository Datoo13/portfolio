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

SHPAGES_BASE = "https://shpages.com/wp-content/uploads/"
LOCAL_BASE = "images/wp-content/uploads/"
HTML_GLOB = "**/*.html"
DOWNLOAD_DELAY = 0.3
SKIP_FILES = {"form-invitations.html", "form-participations.html"}

def find_html_files():
    script_dir = Path(__file__).parent
    return [p for p in sorted(script_dir.glob(HTML_GLOB)) if p.name not in SKIP_FILES]

def extract_image_urls(html_files):
    pattern = re.compile(r'https://shpages\.com/wp-content/uploads/[^\s"\'<>)]+', re.IGNORECASE)
    urls = set()
    for path in html_files:
        urls.update(pattern.findall(path.read_text(encoding="utf-8", errors="replace")))
    return sorted(urls)

def url_to_local_path(url):
    suffix = url.replace("https://shpages.com/wp-content/uploads/", "").split("?")[0]
    return Path(LOCAL_BASE + suffix)

def download_image(url, local_path):
    local_path.parent.mkdir(parents=True, exist_ok=True)
    if local_path.exists():
        return True, "already exists, skipped"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as r:
            data = r.read()
        local_path.write_bytes(data)
        return True, f"downloaded ({len(data)//1024} KB)"
    except urllib.error.HTTPError as e:
        return False, f"HTTP {e.code}"
    except Exception as e:
        return False, f"error: {e}"

def rewrite_html_files(html_files, url_to_path_map):
    rewritten = []
    for path in html_files:
        content = original = path.read_text(encoding="utf-8", errors="replace")
        for url, local_path in url_to_path_map.items():
            rel = os.path.relpath(local_path, path.parent).replace("\\", "/")
            content = content.replace(url, rel)
        if content != original:
            path.write_text(content, encoding="utf-8")
            rewritten.append(path.name)
    return rewritten

def main():
    print("=" * 60)
    print("  TCP Awards — Image Migration Script")
    print("=" * 60)
    html_files = find_html_files()
    print(f"\n📄 Found {len(html_files)} HTML files")
    urls = extract_image_urls(html_files)
    print(f"🔍 Found {len(urls)} unique image URLs\n")
    if not urls:
        print("Nothing to do.")
        return
    url_to_path_map, successes, failures = {}, [], []
    for i, url in enumerate(urls, 1):
        local_path = url_to_local_path(url)
        url_to_path_map[url] = local_path
        ok, msg = download_image(url, local_path)
        print(f"  [{i:>3}/{len(urls)}] {'✅' if ok else '❌'} {Path(url).name} — {msg}")
        (successes if ok else failures).append((url, msg))
        if i < len(urls) and "skipped" not in msg:
            time.sleep(DOWNLOAD_DELAY)
    print(f"\n✏️  Rewriting HTML files...")
    for name in rewrite_html_files(html_files, url_to_path_map):
        print(f"   updated: {name}")
    print(f"\n{'='*60}\n  Downloaded: {len(successes)}  Failed: {len(failures)}\n{'='*60}")
    if failures:
        print("\n⚠️  Failed:")
        for url, msg in failures:
            print(f"   {msg:20s}  {url}")
    print("\n✅ Done.\n")

if __name__ == "__main__":
    main()
