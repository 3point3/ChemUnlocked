#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function usage() {
  console.log('Usage: node extract-problem-bank.js path/to/05_practice.html 05');
}

function extractNamedArray(source, name) {
  const token = `const ${name}`;
  const start = source.indexOf(token);
  if (start === -1) return null;

  const equalsIndex = source.indexOf('=', start);
  if (equalsIndex === -1) return null;

  const arrayStart = source.indexOf('[', equalsIndex);
  if (arrayStart === -1) return null;

  let depth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let escaped = false;

  for (let i = arrayStart; i < source.length; i += 1) {
    const ch = source[i];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (ch === '\\') {
      escaped = true;
      continue;
    }

    if (!inDouble && !inTemplate && ch === "'") {
      inSingle = !inSingle;
      continue;
    }
    if (!inSingle && !inTemplate && ch === '"') {
      inDouble = !inDouble;
      continue;
    }
    if (!inSingle && !inDouble && ch === '`') {
      inTemplate = !inTemplate;
      continue;
    }

    if (inSingle || inDouble || inTemplate) continue;

    if (ch === '[') depth += 1;
    if (ch === ']') {
      depth -= 1;
      if (depth === 0) {
        return source.slice(arrayStart, i + 1);
      }
    }
  }

  return null;
}

const input = process.argv[2];
const unitCode = process.argv[3];

if (!input || !unitCode) {
  usage();
  process.exit(1);
}

if (!/^\d{1,2}$/.test(unitCode)) {
  console.error(`Invalid unit code: "${unitCode}". Use 1- or 2-digit numeric unit code.`);
  process.exit(1);
}

const resolvedInput = path.resolve(process.cwd(), input);
if (!fs.existsSync(resolvedInput)) {
  console.error(`Input file not found: ${resolvedInput}`);
  process.exit(1);
}

const source = fs.readFileSync(resolvedInput, 'utf8');
const extracted =
  extractNamedArray(source, 'ALL_PROBLEMS') ||
  extractNamedArray(source, 'SAMPLE_PROBLEMS');

if (!extracted) {
  console.error('Could not find const ALL_PROBLEMS = [...] or const SAMPLE_PROBLEMS = [...] in the source file.');
  process.exit(1);
}

const outputDir = path.resolve(process.cwd(), 'netlify/lib/data');
fs.mkdirSync(outputDir, { recursive: true });
const outputPath = path.join(outputDir, `unit${String(unitCode).padStart(2, '0')}-problems.js`);

const fileContents = `export const ALL_PROBLEMS = ${extracted}\n`;
fs.writeFileSync(outputPath, fileContents, 'utf8');
console.log(`Created ${outputPath}`);
