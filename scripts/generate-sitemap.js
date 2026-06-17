#!/usr/bin/env node

/**
 * Regenerates sitemap.xml from the indexable HTML files in the repo root.
 *
 * - A page is indexable when its <meta name="robots"> does NOT contain "noindex".
 * - Each URL is taken from the page's own <link rel="canonical"> so this script
 *   stays in lock-step with the canonical/slug rules the SEO audit enforces.
 * - <lastmod> is the file's git commit date (YYYY-MM-DD). Files with uncommitted
 *   changes (or not yet tracked) are stamped with today's date, so a page edited
 *   right before a deploy gets a fresh date even before it is committed.
 *
 * Run standalone with `npm run sitemap:generate`; it also runs inside publish:prep.
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const siteOrigin = 'https://chemunlocked.com';
const sitemapPath = path.join(repoRoot, 'sitemap.xml');

function readHead(html) {
  const match = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  return match ? match[1] : html;
}

function extractMetaContent(head, attrName, attrValue) {
  const regex = new RegExp(
    `<meta[^>]+${attrName}=["']${attrValue}["'][^>]+content=(["'])([\\s\\S]*?)\\1[^>]*>`,
    'i'
  );
  const match = head.match(regex);
  return match ? match[2].trim() : '';
}

function extractCanonical(head) {
  const regex = /<link[^>]+rel=["']canonical["'][^>]+href=(["'])([\s\S]*?)\1[^>]*>/i;
  const match = head.match(regex);
  return match ? match[2].trim() : '';
}

function isLikelyRedirectPage(html) {
  return (
    /<meta[^>]+http-equiv=["']refresh["']/i.test(html) ||
    /<title>\s*Redirecting\b/i.test(html)
  );
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function gitLastModified(file) {
  // Dirty or untracked files are stamped with today's date.
  try {
    const status = execFileSync('git', ['status', '--porcelain', '--', file], {
      cwd: repoRoot,
      encoding: 'utf8',
    }).trim();
    if (status) return today();
  } catch (err) {
    return today();
  }

  try {
    const date = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], {
      cwd: repoRoot,
      encoding: 'utf8',
    }).trim();
    return date || today();
  } catch (err) {
    return today();
  }
}

const htmlFiles = fs
  .readdirSync(repoRoot)
  .filter((name) => name.endsWith('.html'))
  .sort();

const entries = [];
const skipped = [];

for (const file of htmlFiles) {
  const html = fs.readFileSync(path.join(repoRoot, file), 'utf8');
  const head = readHead(html);
  const robots = extractMetaContent(head, 'name', 'robots').toLowerCase();
  const canonical = extractCanonical(head);

  if (robots.includes('noindex') || isLikelyRedirectPage(html)) {
    skipped.push(file);
    continue;
  }
  if (!canonical || !canonical.startsWith(siteOrigin)) {
    skipped.push(file);
    continue;
  }

  entries.push({ url: canonical, lastmod: gitLastModified(file) });
}

// Stable ordering: site root first, then by URL.
entries.sort((a, b) => {
  const rootUrl = `${siteOrigin}/`;
  if (a.url === rootUrl) return -1;
  if (b.url === rootUrl) return 1;
  return a.url.localeCompare(b.url);
});

const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries.map(
    (e) => `  <url><loc>${e.url}</loc><lastmod>${e.lastmod}</lastmod></url>`
  ),
  '</urlset>',
  '',
].join('\n');

fs.writeFileSync(sitemapPath, lines);

console.log(
  `sitemap.xml written: ${entries.length} URL(s), ${skipped.length} non-indexable file(s) skipped.`
);
