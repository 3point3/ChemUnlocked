#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const siteOrigin = 'https://chemunlocked.com';
const requiredRootFiles = ['robots.txt', 'sitemap.xml'];
const htmlFiles = fs
  .readdirSync(repoRoot)
  .filter((name) => name.endsWith('.html'))
  .sort();

const issues = [];
const titleToFiles = new Map();
const descriptionToFiles = new Map();
const canonicalToFiles = new Map();
const indexablePages = [];
const noindexPages = [];

function addIssue(file, level, message) {
  issues.push({ file, level, message });
}

function collect(map, key, file) {
  if (!key) return;
  if (!map.has(key)) {
    map.set(key, []);
  }
  map.get(key).push(file);
}

function extractFirst(text, regex) {
  const match = text.match(regex);
  return match ? match[1].trim() : '';
}

function extractMetaContent(head, attrName, attrValue) {
  const regex = new RegExp(
    `<meta[^>]+${attrName}=["']${attrValue}["'][^>]+content=(["'])([\\s\\S]*?)\\1[^>]*>`,
    'i'
  );
  const match = head.match(regex);
  return match ? match[2].trim() : '';
}

function extractLinkHref(head, relValue) {
  const regex = new RegExp(
    `<link[^>]+rel=["']${relValue}["'][^>]+href=(["'])([\\s\\S]*?)\\1[^>]*>`,
    'i'
  );
  const match = head.match(regex);
  return match ? match[2].trim() : '';
}

function stripTags(text) {
  return text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function expectedCanonical(file) {
  const slugOverrides = {
    '01_Learn_Intro_to_Chemistry_and_Lab_Safety.html': `${siteOrigin}/01_Learn_Intro_to_Chemistry_and_Lab_Safety.html`,
    '02_Learn_Chemistry_Matter.html': `${siteOrigin}/02_Learn_Chemistry_Matter.html`,
    '03_Learn_Atomic_Structure.html': `${siteOrigin}/03_Learn_Atomic_Structure.html`,
    '04_Learn_Electron_Configuration.html': `${siteOrigin}/04_Learn_Electron_Configuration.html`,
    '05_Learn_Periodic_Table_and_Trends.html': `${siteOrigin}/05_Learn_Periodic_Table_and_Trends.html`,
    '06_Learn_Chemistry_Nomenclature.html': `${siteOrigin}/06_Learn_Chemistry_Nomenclature.html`,
    '07_Learn_Chemistry_Moles.html': `${siteOrigin}/07_Learn_Chemistry_Moles.html`,
    '08_Learn_Chemical_Reactions.html': `${siteOrigin}/08_Learn_Chemical_Reactions.html`,
    '09_Learn_Chemistry_Stoichiometry.html': `${siteOrigin}/09_Learn_Chemistry_Stoichiometry.html`,
    '10_Learn_Chemistry_Bonding.html': `${siteOrigin}/10_Learn_Chemistry_Bonding.html`,
    '11_Learn_Chemistry_Energy_Thermochemistry.html': `${siteOrigin}/11_Learn_Chemistry_Energy_Thermochemistry.html`,
    '12_Learn_Chemistry_Gas.html': `${siteOrigin}/12_Learn_Chemistry_Gas.html`,
    '13_Learn_Chemistry_Solutions.html': `${siteOrigin}/13_Learn_Chemistry_Solutions.html`,
    '14_Learn_Chemistry_Equilibrium.html': `${siteOrigin}/14_Learn_Chemistry_Equilibrium.html`,
    '15_Learn_Chemistry_Acid_Base.html': `${siteOrigin}/15_Learn_Chemistry_Acid_Base.html`,
    'Contact_ChemUnlocked.html': `${siteOrigin}/Contact_ChemUnlocked.html`,
    'Privacy-Policy.html': `${siteOrigin}/Privacy-Policy.html`,
    'Terms-of-Service.html': `${siteOrigin}/Terms-of-Service.html`,
  };
  return slugOverrides[file] || (file === 'index.html' ? `${siteOrigin}/` : `${siteOrigin}/${file}`);
}

function isLikelyRedirectPage(html) {
  return (
    /<meta[^>]+http-equiv=["']refresh["']/i.test(html) ||
    /<title>\s*Redirecting\b/i.test(html)
  );
}

for (const rootFile of requiredRootFiles) {
  const absolutePath = path.join(repoRoot, rootFile);
  if (!fs.existsSync(absolutePath)) {
    addIssue(rootFile, 'error', 'Missing required crawl-control file.');
  }
}

for (const file of htmlFiles) {
  const absolutePath = path.join(repoRoot, file);
  const html = fs.readFileSync(absolutePath, 'utf8');

  if (!/<!DOCTYPE html>/i.test(html) || !/<html\b/i.test(html)) {
    continue;
  }

  const head = extractFirst(html, /<head[^>]*>([\s\S]*?)<\/head>/i);
  const body = extractFirst(html, /<body[^>]*>([\s\S]*?)<\/body>/i);
  const lang = extractFirst(html, /<html[^>]*\blang=["']([^"']+)["']/i);
  const title = extractFirst(head, /<title>([\s\S]*?)<\/title>/i);
  const description = extractMetaContent(head, 'name', 'description');
  const robots = extractMetaContent(head, 'name', 'robots').toLowerCase();
  const canonical = extractLinkHref(head, 'canonical');
  const ogTitle = extractMetaContent(head, 'property', 'og:title');
  const ogDescription = extractMetaContent(head, 'property', 'og:description');
  const ogUrl = extractMetaContent(head, 'property', 'og:url');
  const ogImage = extractMetaContent(head, 'property', 'og:image');
  const twitterCard = extractMetaContent(head, 'name', 'twitter:card');
  const twitterTitle = extractMetaContent(head, 'name', 'twitter:title');
  const twitterDescription = extractMetaContent(head, 'name', 'twitter:description');
  const twitterImage = extractMetaContent(head, 'name', 'twitter:image');
  const jsonLdBlocks = [...head.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const h1Matches = [...body.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  const h1Values = h1Matches.map((match) => stripTags(match[1])).filter(Boolean);
  const redirectPage = isLikelyRedirectPage(html);
  const indexable = !robots.includes('noindex');

  if (!lang) addIssue(file, 'error', 'Missing document language on <html>.');
  if (lang && !/^en(?:-[A-Z]{2})?$/i.test(lang)) {
    addIssue(file, 'warn', `Unexpected lang attribute "${lang}".`);
  }

  if (!title) addIssue(file, 'error', 'Missing <title>.');
  if (title && title.length < 20) addIssue(file, 'warn', 'Title is shorter than 20 characters.');
  if (title && title.length > 65) addIssue(file, 'warn', 'Title is longer than 65 characters.');

  if (!description) addIssue(file, 'error', 'Missing meta description.');
  if (description && description.length < 70) {
    addIssue(file, 'warn', 'Meta description is shorter than 70 characters.');
  }
  if (description && description.length > 160) {
    addIssue(file, 'warn', 'Meta description is longer than 160 characters.');
  }

  if (!canonical) {
    addIssue(file, 'error', 'Missing canonical URL.');
  } else {
    if (!canonical.startsWith(siteOrigin)) {
      addIssue(file, 'error', `Canonical is not on ${siteOrigin}.`);
    }
    if (!redirectPage && canonical !== expectedCanonical(file)) {
      addIssue(file, 'warn', `Canonical does not match expected page URL (${expectedCanonical(file)}).`);
    }
  }

  if (h1Values.length === 0) addIssue(file, 'error', 'Missing <h1>.');
  if (h1Values.length > 1) addIssue(file, 'warn', `Expected 1 <h1>, found ${h1Values.length}.`);

  if (indexable) {
    if (!ogTitle) addIssue(file, 'error', 'Missing og:title.');
    if (!ogDescription) addIssue(file, 'error', 'Missing og:description.');
    if (!ogUrl) addIssue(file, 'error', 'Missing og:url.');
    if (!ogImage) addIssue(file, 'error', 'Missing og:image.');
    if (!twitterCard) addIssue(file, 'error', 'Missing twitter:card.');
    if (!twitterTitle) addIssue(file, 'error', 'Missing twitter:title.');
    if (!twitterDescription) addIssue(file, 'error', 'Missing twitter:description.');
    if (!twitterImage) addIssue(file, 'error', 'Missing twitter:image.');
    if (jsonLdBlocks.length === 0) addIssue(file, 'warn', 'No JSON-LD structured data found.');
  } else {
    if (!robots) addIssue(file, 'warn', 'Non-indexable page is missing an explicit robots directive.');
  }

  if (redirectPage && !robots.includes('noindex')) {
    addIssue(file, 'error', 'Redirect page should be marked noindex.');
  }

  collect(titleToFiles, title, file);
  collect(descriptionToFiles, description, file);
  collect(canonicalToFiles, canonical, file);

  if (indexable) {
    indexablePages.push(file);
  } else {
    noindexPages.push(file);
  }
}

for (const [title, files] of titleToFiles) {
  if (title && files.length > 1) {
    addIssue(files.join(', '), 'warn', `Duplicate title: "${title}"`);
  }
}

for (const [description, files] of descriptionToFiles) {
  if (description && files.length > 1) {
    addIssue(files.join(', '), 'warn', 'Duplicate meta description.');
  }
}

for (const [canonical, files] of canonicalToFiles) {
  if (canonical && files.length > 1) {
    addIssue(files.join(', '), 'error', `Duplicate canonical URL: ${canonical}`);
  }
}

const sitemapPath = path.join(repoRoot, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  for (const file of indexablePages) {
    const url = expectedCanonical(file);
    if (!sitemap.includes(url)) {
      addIssue('sitemap.xml', 'warn', `Missing indexable page: ${url}`);
    }
  }
  for (const file of noindexPages) {
    const url = expectedCanonical(file);
    if (sitemap.includes(url)) {
      addIssue('sitemap.xml', 'error', `Noindex page should not be in sitemap: ${url}`);
    }
  }
}

const robotsPath = path.join(repoRoot, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robotsText = fs.readFileSync(robotsPath, 'utf8');
  if (!/Sitemap:\s+https:\/\/chemunlocked\.com\/sitemap\.xml/i.test(robotsText)) {
    addIssue('robots.txt', 'warn', 'robots.txt should declare the sitemap URL.');
  }
}

issues.sort((a, b) => {
  if (a.file !== b.file) return a.file.localeCompare(b.file);
  const severityOrder = { error: 0, warn: 1 };
  return severityOrder[a.level] - severityOrder[b.level];
});

if (issues.length === 0) {
  console.log(`PASS: audited ${htmlFiles.length} HTML files, ${indexablePages.length} indexable pages.`);
  process.exit(0);
}

for (const issue of issues) {
  console.log(`${issue.level.toUpperCase()} ${issue.file}: ${issue.message}`);
}

const errorCount = issues.filter((issue) => issue.level === 'error').length;
const warnCount = issues.length - errorCount;
console.log(`\nSummary: ${errorCount} error(s), ${warnCount} warning(s).`);
process.exit(errorCount > 0 ? 1 : 0);
