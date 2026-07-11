const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const CSS_FILE = process.argv[2] || 'chem.css';
const cssPath = path.join(root, CSS_FILE);
let css = fs.readFileSync(cssPath, 'utf8');

// Strip comments
css = css.replace(/\/\*[\s\S]*?\*\//g, '');

// Split on '{' — for each chunk, the text after the chunk's LAST '}' (or the whole
// chunk if it has none) is the selector list / at-rule prelude that precedes the
// next '{'. This correctly excludes declaration values (e.g. hex colors), which
// always sit between a '{' and the next '}', never immediately before a '{'.
const parts = css.split('{');
const selectorChunks = [];
for (let i = 0; i < parts.length - 1; i++) {
  const part = parts[i];
  const lastBrace = part.lastIndexOf('}');
  const selectorText = (lastBrace === -1 ? part : part.slice(lastBrace + 1)).trim();
  if (!selectorText || selectorText.startsWith('@')) continue; // skip @media/@keyframes/@supports/@font-face preludes
  selectorChunks.push(selectorText);
}

const classNames = new Set();
const idNames = new Set();
const classTokenRe = /\.(-?[a-zA-Z_][a-zA-Z0-9_-]*)/g;
const idTokenRe = /#(-?[a-zA-Z_][a-zA-Z0-9_-]*)/g;

for (const chunk of selectorChunks) {
  let m;
  while ((m = classTokenRe.exec(chunk))) classNames.add(m[1]);
  while ((m = idTokenRe.exec(chunk))) idNames.add(m[1]);
}

// Gather searchable source: all root-level html/js files (not subdirectories, not publish/, not node_modules).
const sourceFiles = fs.readdirSync(root)
  .filter(f => /\.(html|js)$/.test(f))
  .filter(f => f !== CSS_FILE);

let sourceText = '';
for (const f of sourceFiles) {
  sourceText += '\n' + fs.readFileSync(path.join(root, f), 'utf8');
}

function isReferenced(name) {
  const re = new RegExp(`(^|[^a-zA-Z0-9_-])${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|[^a-zA-Z0-9_-])`);
  return re.test(sourceText);
}

const unusedClasses = [...classNames].filter(n => !isReferenced(n)).sort();
const unusedIds = [...idNames].filter(n => !isReferenced(n)).sort();

console.log(`Total distinct classes referenced in ${CSS_FILE} selectors: ${classNames.size}`);
console.log(`Total distinct ids referenced in ${CSS_FILE} selectors: ${idNames.size}`);
console.log(`\nClasses with ZERO references in any root .html/.js file (${unusedClasses.length}):`);
unusedClasses.forEach(n => console.log('  .' + n));
console.log(`\nIDs with ZERO references in any root .html/.js file (${unusedIds.length}):`);
unusedIds.forEach(n => console.log('  #' + n));
