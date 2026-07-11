const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const CSS_FILE = process.argv[2] || 'chem.css';
const APPLY = process.argv.includes('--apply'); // fail-safe default: dry-run unless explicitly told to write
const DRY_RUN = !APPLY;
const cssPath = path.join(root, CSS_FILE);
const original = fs.readFileSync(cssPath, 'utf8');

// ---- unused set: same detection as find-unused-css.js, minus confirmed false positives ----
const FALSE_POSITIVES = new Set(['solution--calc', 'solution--concept', 'solution--multi']);

function computeUnusedClasses(css) {
  const stripped = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const parts = stripped.split('{');
  const classNames = new Set();
  const classTokenRe = /\.(-?[a-zA-Z_][a-zA-Z0-9_-]*)/g;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    const lastBrace = part.lastIndexOf('}');
    const selectorText = (lastBrace === -1 ? part : part.slice(lastBrace + 1)).trim();
    if (!selectorText || selectorText.startsWith('@')) continue;
    let m;
    while ((m = classTokenRe.exec(selectorText))) classNames.add(m[1]);
  }

  const sourceFiles = fs.readdirSync(root).filter(f => /\.(html|js)$/.test(f));
  let sourceText = '';
  for (const f of sourceFiles) sourceText += '\n' + fs.readFileSync(path.join(root, f), 'utf8');

  function isReferenced(name) {
    const re = new RegExp(`(^|[^a-zA-Z0-9_-])${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|[^a-zA-Z0-9_-])`);
    return re.test(sourceText);
  }

  const unused = new Set();
  for (const n of classNames) {
    if (FALSE_POSITIVES.has(n)) continue;
    if (!isReferenced(n)) unused.add(n);
  }
  return unused;
}

const UNUSED = computeUnusedClasses(original);
console.log(`Treating ${UNUSED.size} classes as confirmed-unused (after excluding ${FALSE_POSITIVES.size} known false positives).`);

// ---- proper brace/comment-aware parser ----
// Produces a tree of nodes: { type: 'rule', selector, body } | { type: 'atrule-block', prelude, children } | { type: 'opaque', text } | { type: 'text', text }
function parse(css) {
  let i = 0;
  const n = css.length;

  function skipCommentsAndWhitespace() {} // comments already stripped by caller before parse

  function parseBlockChildren(stopAtEnd) {
    const nodes = [];
    let buf = '';
    while (i < n) {
      const ch = css[i];
      if (ch === '}' ) {
        i++;
        if (buf) nodes.push({ type: 'text', text: buf });
        return nodes;
      }
      if (ch === '{') {
        const prelude = buf; buf = '';
        i++; // consume {
        const trimmed = prelude.trim();
        if (/^@(-webkit-)?keyframes/i.test(trimmed) || /^@font-face/i.test(trimmed) || /^@-moz-document/i.test(trimmed)) {
          // opaque: capture raw text until matching closing brace (track nesting depth)
          let depth = 1;
          let start = i;
          while (i < n && depth > 0) {
            if (css[i] === '{') depth++;
            else if (css[i] === '}') depth--;
            if (depth > 0) i++;
          }
          const inner = css.slice(start, i);
          i++; // consume final }
          nodes.push({ type: 'opaque', prelude: prelude, inner });
        } else if (trimmed.startsWith('@')) {
          // at-rule with nested rules (@media, @supports, @layer, ...)
          const children = parseBlockChildren(false);
          nodes.push({ type: 'atrule-block', prelude: prelude, trimmedPrelude: trimmed, children });
        } else {
          // normal rule: buf up to here was the selector, now consume body until matching }
          let depth = 1;
          let start = i;
          while (i < n && depth > 0) {
            if (css[i] === '{') depth++;
            else if (css[i] === '}') depth--;
            if (depth > 0) i++;
          }
          const body = css.slice(start, i);
          i++; // consume final }
          nodes.push({ type: 'rule', selector: prelude, trimmedSelector: trimmed, body });
        }
        continue;
      }
      buf += ch;
      i++;
    }
    if (buf) nodes.push({ type: 'text', text: buf });
    return nodes;
  }

  return parseBlockChildren(true);
}

function splitTopLevelCommas(selector) {
  const parts = [];
  let depth = 0;
  let cur = '';
  for (const ch of selector) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ',' && depth === 0) {
      parts.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }
  if (cur.trim()) parts.push(cur);
  return parts;
}

function selectorIsDead(selector) {
  const classTokenRe = /\.(-?[a-zA-Z_][a-zA-Z0-9_-]*)/g;
  let m;
  while ((m = classTokenRe.exec(selector))) {
    if (UNUSED.has(m[1])) return true;
  }
  return false;
}

let rulesFullyRemoved = 0;
let rulesTrimmed = 0;
let atruleBlocksFullyRemoved = 0;

function processNodes(nodes) {
  const out = [];
  for (const node of nodes) {
    if (node.type === 'text' || node.type === 'opaque') {
      out.push(node);
      continue;
    }
    if (node.type === 'atrule-block') {
      const processedChildren = processNodes(node.children);
      const hasRealContent = processedChildren.some(c => c.type === 'rule' || c.type === 'atrule-block' || c.type === 'opaque');
      if (!hasRealContent) {
        atruleBlocksFullyRemoved++;
        continue; // drop empty @media/@supports block entirely
      }
      out.push({ type: 'atrule-block', prelude: node.prelude, children: processedChildren });
      continue;
    }
    if (node.type === 'rule') {
      const branches = splitTopLevelCommas(node.trimmedSelector);
      const aliveBranches = branches.filter(b => !selectorIsDead(b));
      if (aliveBranches.length === 0) {
        rulesFullyRemoved++;
        continue; // whole rule is dead, drop it
      }
      if (aliveBranches.length < branches.length) {
        rulesTrimmed++;
        // Partial removal: preserve the raw leading whitespace before the selector text
        // (everything up to the first non-whitespace char), then the cleaned selector list.
        const leadingWs = node.selector.match(/^\s*/)[0];
        out.push({ type: 'rule', selector: leadingWs + aliveBranches.map(s => s.trim()).join(',\n'), body: node.body });
        continue;
      }
      out.push(node);
      continue;
    }
  }
  return out;
}

function render(nodes, depth) {
  let s = '';
  for (const node of nodes) {
    if (node.type === 'text') { s += node.text; continue; }
    if (node.type === 'opaque') { s += node.prelude + '{' + node.inner + '}'; continue; }
    if (node.type === 'rule') { s += node.selector + '{' + node.body + '}'; continue; }
    if (node.type === 'atrule-block') {
      s += node.prelude + '{' + render(node.children, depth + 1) + '}';
      continue;
    }
  }
  return s;
}

// Strip comments the same way detection did, so parsing indices are consistent with detection,
// but preserve comments in final output by parsing the ORIGINAL text (comments kept as part of
// surrounding 'text'/selector/body strings naturally, since we only strip comments for detection).
const tree = parse(original);
const processedTree = processNodes(tree);
const result = render(processedTree, 0);

console.log(`Rules fully removed: ${rulesFullyRemoved}`);
console.log(`Rules partially trimmed (mixed dead/alive selector list): ${rulesTrimmed}`);
console.log(`Empty @media/@supports blocks removed: ${atruleBlocksFullyRemoved}`);
console.log(`Original size: ${original.length} bytes, new size: ${result.length} bytes (-${original.length - result.length} bytes)`);

if (DRY_RUN) {
  fs.writeFileSync(path.join(root, CSS_FILE + '.proposed'), result);
  console.log(`\nDry run — wrote proposed output to ${CSS_FILE}.proposed for review. Original untouched.`);
} else {
  fs.writeFileSync(cssPath, result);
  console.log(`\nWrote changes directly to ${CSS_FILE}.`);
}
