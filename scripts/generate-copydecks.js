const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

function decodeEntities(str = '') {
  return str
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&deg;/g, '°')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–');
}

function htmlToMarkdown(str = '') {
  let s = str;
  s = s.replace(/<br\s*\/?>/gi, '\n');
  s = s.replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => `[${htmlToMarkdown(text).trim()}](${href})`);
  s = s.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
  s = s.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**');
  s = s.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*');
  s = s.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*');
  s = s.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`');
  s = s.replace(/<sup[^>]*>([\s\S]*?)<\/sup>/gi, '^$1');
  s = s.replace(/<sub[^>]*>([\s\S]*?)<\/sub>/gi, '_$1');
  s = s.replace(/<span[^>]*>([\s\S]*?)<\/span>/gi, '$1');
  s = s.replace(/<[^>]+>/g, '');
  s = decodeEntities(s);
  s = s.replace(/\r/g, '');
  s = s.replace(/[ \t]+\n/g, '\n').replace(/\n[ \t]+/g, '\n').replace(/[ \t]{2,}/g, ' ');
  s = s.replace(/\n{3,}/g, '\n\n');
  return s.trim();
}

function getFileTargets() {
  return fs.readdirSync(root)
    .filter((file) => {
      if (!file.endsWith('.html')) return false;
      if (/^\d{2}_Learn_.*\.html$/.test(file)) return true;
      if (file === 'how-it-works.html') return true;
      if (/^study_skills.*\.html$/.test(file)) return true;
      return false;
    })
    .sort();
}

function getSectionHtml(html, id) {
  const start = html.indexOf(`<div id="${id}"`);
  if (start < 0) return '';
  const openEnd = html.indexOf('>', start);
  if (openEnd < 0) return '';

  let depth = 1;
  const tagRe = /<\/?div\b[^>]*>/gi;
  tagRe.lastIndex = openEnd + 1;

  while (depth > 0) {
    const match = tagRe.exec(html);
    if (!match) return '';
    if (match[0][1] === '/') {
      depth -= 1;
    } else {
      depth += 1;
    }
    if (depth === 0) {
      return html.slice(openEnd + 1, match.index);
    }
  }

  return '';
}

function getTopLevelDivBlocks(sectionInnerHtml, classNames) {
  const blocks = [];
  const openDivRe = /<div\b[^>]*class="([^"]+)"[^>]*>/gi;
  let match;

  while ((match = openDivRe.exec(sectionInnerHtml)) !== null) {
    const classList = match[1].split(/\s+/);
    const matchedClass = classNames.find((name) => classList.includes(name));
    if (!matchedClass) continue;

    const start = match.index;
    const openEnd = openDivRe.lastIndex;
    let depth = 1;
    const tagRe = /<\/?div\b[^>]*>/gi;
    tagRe.lastIndex = openEnd;

    while (depth > 0) {
      const divMatch = tagRe.exec(sectionInnerHtml);
      if (!divMatch) break;
      if (divMatch[0][1] === '/') {
        depth -= 1;
      } else {
        depth += 1;
      }
      if (depth === 0) {
        const end = tagRe.lastIndex;
        blocks.push({
          className: matchedClass,
          html: sectionInnerHtml.slice(start, end),
        });
        openDivRe.lastIndex = end;
      }
    }
  }

  return blocks;
}

function appendMetadata(lines, label, value) {
  if (!value) return;
  lines.push(`${label}:`);
  lines.push(value);
  lines.push('');
}

function appendList(lines, title, items) {
  if (!items.length) return;
  lines.push(`${title}:`);
  items.forEach((item) => lines.push(`- ${item}`));
  lines.push('');
}

function extractTitle(blockHtml) {
  return htmlToMarkdown(blockHtml.match(/<(h2|h3)[^>]*>([\s\S]*?)<\/\1>/i)?.[2] || 'Untitled');
}

function appendSectionBlocks(lines, sectionTitle, sectionHtml) {
  if (!sectionHtml) return;
  lines.push(`# ${sectionTitle}`);
  lines.push('');

  const blocks = getTopLevelDivBlocks(sectionHtml, ['card', 'info-callout']);

  for (const block of blocks) {
    const heading = extractTitle(block.html);
    lines.push(`## ${heading}`);

    let paragraphCount = 0;
    for (const p of block.html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)) {
      const text = htmlToMarkdown(p[1]);
      if (!text) continue;
      paragraphCount += 1;
      lines.push(`- Paragraph ${paragraphCount}: ${text}`);
    }

    let listCount = 0;
    for (const li of block.html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)) {
      const text = htmlToMarkdown(li[1]);
      if (!text) continue;
      listCount += 1;
      lines.push(`- List item ${listCount}: ${text}`);
    }

    let buttonCount = 0;
    for (const button of block.html.matchAll(/<button[^>]*>([\s\S]*?)<\/button>/gi)) {
      const text = htmlToMarkdown(button[1]).replace(/\n+/g, ' ').trim();
      if (!text) continue;
      buttonCount += 1;
      lines.push(`- Button ${buttonCount}: ${text}`);
    }

    let labelCount = 0;
    for (const label of block.html.matchAll(/<(?:span|div) class="label[^"]*"[^>]*>([\s\S]*?)<\/(?:span|div)>/gi)) {
      const text = htmlToMarkdown(label[1]);
      if (!text) continue;
      labelCount += 1;
      lines.push(`- Label ${labelCount}: ${text}`);
    }

    let rowCount = 0;
    for (const row of block.html.matchAll(/<tr>([\s\S]*?)<\/tr>/gi)) {
      const cells = [...row[1].matchAll(/<(?:th|td)[^>]*>([\s\S]*?)<\/(?:th|td)>/gi)]
        .map((cell) => htmlToMarkdown(cell[1]))
        .filter(Boolean);
      if (!cells.length) continue;
      rowCount += 1;
      lines.push(`- Table row ${rowCount}: ${cells.join(' | ')}`);
    }

    lines.push('');
  }
}

function appendFallbackMainCopy(lines, html) {
  lines.push('## Main Copy');
  lines.push('');

  const main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] || html;
  const stripped = main
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<table[\s\S]*?<\/table>/gi, '');

  let blockCount = 0;
  for (const block of stripped.matchAll(/<(h1|h2|h3|p|li|button)[^>]*>([\s\S]*?)<\/\1>/gi)) {
    const text = htmlToMarkdown(block[2]).replace(/\n+/g, ' ').trim();
    if (!text) continue;
    blockCount += 1;
    lines.push(`- Block ${blockCount}: ${text}`);
  }

  lines.push('');
}

function generateCopydeck(file) {
  const src = path.join(root, file);
  const base = file.replace(/\.html$/i, '');
  const out = path.join(root, `${base}.copydeck.md`);
  const html = fs.readFileSync(src, 'utf8');
  const lines = [];

  lines.push(`# ${base} Copydeck`);
  lines.push('');
  lines.push('Source HTML:');
  lines.push(`\`${src}\``);
  lines.push('');
  lines.push('How to use this file:');
  lines.push('- Edit copy here instead of editing raw HTML.');
  lines.push('- Keep section labels so Codex can map your edits back into the page.');
  lines.push('- Links are preserved as Markdown, for example `[matter](/02_learn_chemistry_matter)`.');
  lines.push('- If you want to remove a link, replace the Markdown link with plain text.');
  lines.push('- If you want to change only the destination, edit only the URL part.');
  lines.push('- When you are done, ask Codex to sync this file back into the HTML.');
  lines.push('');

  lines.push('## SEO');
  lines.push('');
  appendMetadata(lines, 'Title', htmlToMarkdown(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || ''));
  appendMetadata(lines, 'Meta description', decodeEntities(html.match(/<meta name="description"\s+content="([^"]+)"/i)?.[1] || ''));
  appendMetadata(lines, 'Open Graph / Twitter image alt', decodeEntities(html.match(/<meta property="og:image:alt"\s+content="([^"]+)"/i)?.[1] || ''));

  const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i)?.[1] || '';
  appendMetadata(lines, 'Structured data name', jsonLd.match(/"name"\s*:\s*"([^"]+)"/i)?.[1] || '');
  appendMetadata(lines, 'Structured data description', jsonLd.match(/"description"\s*:\s*"([^"]+)"/i)?.[1] || '');

  const header = html.match(/<header>([\s\S]*?)<\/header>/i)?.[1] || '';
  const h1 = htmlToMarkdown(header.match(/<h1>([\s\S]*?)<\/h1>/i)?.[1] || '');
  const subtitle = htmlToMarkdown(header.match(/<p class="subtitle">([\s\S]*?)<\/p>/i)?.[1] || '');

  if (h1 || subtitle) {
    lines.push('## Header');
    lines.push('');
    appendMetadata(lines, 'H1', h1);
    appendMetadata(lines, 'Subtitle', subtitle);
  }

  const learning = html.match(/<div class="learning-objectives"[\s\S]*?<\/div>/i)?.[0] || '';
  const learningItems = [...learning.matchAll(/<span>([\s\S]*?)<\/span>/gi)].map((m) => htmlToMarkdown(m[1])).filter(Boolean);
  if (learningItems.length) {
    lines.push('## Learning Objectives');
    lines.push('');
    learningItems.forEach((item) => lines.push(`- ${item}`));
    lines.push('');
  }

  const concepts = getSectionHtml(html, 'concepts');
  const tools = getSectionHtml(html, 'tools');
  const examples = getSectionHtml(html, 'examples');

  if (concepts) appendSectionBlocks(lines, 'Concepts Tab', concepts);
  if (tools) appendSectionBlocks(lines, 'Tools Tab', tools);
  if (examples) appendSectionBlocks(lines, 'Examples Tab', examples);
  if (!concepts && !tools && !examples) appendFallbackMainCopy(lines, html);

  const practiceHeadline = htmlToMarkdown(html.match(/<div class="practice-banner-headline">([\s\S]*?)<\/div>/i)?.[1] || '');
  const practiceNote = htmlToMarkdown(html.match(/<div class="practice-banner-note">([\s\S]*?)<\/div>/i)?.[1] || '');
  const nav = html.match(/<nav[^>]*>([\s\S]*?)<\/nav>/i)?.[1] || '';
  const navItems = [...nav.matchAll(/<a [^>]*href="([^"]+)"[^>]*>[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>[\s\S]*?<\/a>/gi)]
    .map((m) => `${htmlToMarkdown(m[2])} | ${htmlToMarkdown(m[3])} | \`${m[1]}\``);

  if (practiceHeadline || practiceNote || navItems.length) {
    lines.push('## Footer / Navigation');
    lines.push('');
    appendMetadata(lines, 'Practice banner headline', practiceHeadline);
    appendMetadata(lines, 'Practice banner note', practiceNote);
    appendList(lines, 'Nav links', navItems);
  }

  fs.writeFileSync(out, lines.join('\n'), 'utf8');
  return path.basename(out);
}

function main() {
  const targets = getFileTargets();
  const created = targets.map(generateCopydeck);
  console.log(`Refreshed ${created.length} copydecks`);
  created.forEach((name) => console.log(name));
}

main();
