const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const HEADER_FRAGMENT = fs.readFileSync(path.join(root, 'header.html'), 'utf8').trim();
const FOOTER_FRAGMENT = fs.readFileSync(path.join(root, 'footer.html'), 'utf8').trim();

function indent(block, spaces) {
  const pad = ' '.repeat(spaces);
  return block.split('\n').map(line => (line ? pad + line : line)).join('\n');
}

const HEADER_BLOCK = indent(HEADER_FRAGMENT, 2);
const FOOTER_BLOCK = indent(FOOTER_FRAGMENT, 2);

const SKIP_FILES = new Set(['index.html', 'header.html', 'footer.html']);

function getTargetFiles() {
  return fs.readdirSync(root)
    .filter(f => f.endsWith('.html'))
    .filter(f => !SKIP_FILES.has(f));
}

function processFile(file) {
  const filePath = path.join(root, file);
  let html = fs.readFileSync(filePath, 'utf8');

  if (html.includes('class="site-header"')) {
    return { file, status: 'skipped (already has static header)' };
  }

  const mainMatch = html.match(/<main[\s>]/);
  if (!mainMatch) {
    return { file, status: 'SKIPPED — no <main> tag found' };
  }

  const mainIndex = mainMatch.index;
  html = html.slice(0, mainIndex) + HEADER_BLOCK + '\n\n  ' + html.slice(mainIndex);

  const closeMatch = html.match(/<\/div>(\s*(?:<!--[^>]*-->)?\s*)<\/main>/);
  if (!closeMatch) {
    return { file, status: 'HEADER INSERTED, but SKIPPED FOOTER — no matching </div></main> pattern' };
  }

  html = html.slice(0, closeMatch.index) + FOOTER_BLOCK + '\n' + html.slice(closeMatch.index);

  fs.writeFileSync(filePath, html);
  return { file, status: 'updated' };
}

const results = getTargetFiles().map(processFile);
results.forEach(r => console.log(`${r.status.padEnd(55)} ${r.file}`));

const updated = results.filter(r => r.status === 'updated').length;
console.log(`\n${updated} file(s) updated.`);
