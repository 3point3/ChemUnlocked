#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function usage() {
  console.log('Usage: node extract-problem-bank.js path/to/04_practice.html 04');
}

const input = process.argv[2];
const unitCode = process.argv[3];

if (!input || !unitCode) {
  usage();
  process.exit(1);
}

const source = fs.readFileSync(input, 'utf8');
const match = source.match(/const\s+ALL_PROBLEMS\s*=\s*(\[[\s\S]*?\n\]);/);

if (!match) {
  console.error('Could not find const ALL_PROBLEMS = [...] in the source file.');
  process.exit(1);
}

const outputDir = path.resolve(process.cwd(), 'netlify/lib/data');
fs.mkdirSync(outputDir, { recursive: true });
const outputPath = path.join(outputDir, `unit${String(unitCode).padStart(2, '0')}-problems.js`);

const fileContents = `const ALL_PROBLEMS = ${match[1]}\n\nmodule.exports = { ALL_PROBLEMS };\n`;
fs.writeFileSync(outputPath, fileContents, 'utf8');
console.log(`Created ${outputPath}`);
