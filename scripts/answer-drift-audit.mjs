import path from 'path';
import { pathToFileURL } from 'url';
import fs from 'fs';

const dataDir = path.resolve('netlify/lib/data');
const unitFiles = fs
  .readdirSync(dataDir)
  .filter((f) => /^unit\d{2}-problems\.js$/.test(f))
  .sort();

const args = new Set(process.argv.slice(2));
const strictMode = args.has('--strict');

function toNum(value) {
  if (value === null || value === undefined) return null;
  const n = Number(String(value).replace(/,/g, '').trim());
  return Number.isFinite(n) ? n : null;
}

function stripHtml(s) {
  return String(s)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&times;/gi, 'x')
    .replace(/×/g, 'x')
    .replace(/&minus;/gi, '-')
    .replace(/−/g, '-')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractNumericCandidates(solutionText) {
  const txt = stripHtml(solutionText);
  const out = new Set();

  const sciMatches = txt.matchAll(/([-+]?\d+(?:\.\d+)?)\s*[x*]\s*10\^\s*([-+]?\d+)/gi);
  for (const m of sciMatches) {
    const coeff = Number(m[1]);
    const exp = Number(m[2]);
    if (Number.isFinite(coeff) && Number.isFinite(exp)) {
      out.add(coeff * Math.pow(10, exp));
    }
  }

  const eMatches = txt.matchAll(/[-+]?\d+(?:\.\d+)?e[-+]?\d+/gi);
  for (const m of eMatches) {
    const n = Number(m[0]);
    if (Number.isFinite(n)) out.add(n);
  }

  const plainMatches = txt.matchAll(/[-+]?\d[\d,]*(?:\.\d+)?/g);
  for (const m of plainMatches) {
    const n = toNum(m[0]);
    if (n !== null) out.add(n);
  }

  return [...out];
}

function extractTaggedCandidates(solutionText) {
  const raw = String(solutionText);
  const txt = stripHtml(solutionText);
  const out = new Set();

  // Prefer values explicitly emphasized as the final result.
  const strongBlocks = [...raw.matchAll(/<strong>([\s\S]*?)<\/strong>/gi)].map((m) => stripHtml(m[1]));
  for (const block of strongBlocks) {
    for (const m of block.matchAll(/([-+]?\d+(?:\.\d+)?)\s*[x*]\s*10\^\s*([-+]?\d+)/gi)) {
      const coeff = Number(m[1]);
      const exp = Number(m[2]);
      if (Number.isFinite(coeff) && Number.isFinite(exp)) {
        out.add(coeff * Math.pow(10, exp));
      }
    }
    for (const m of block.matchAll(/[-+]?\d[\d,]*(?:\.\d+)?(?:e[-+]?\d+)?/gi)) {
      const n = toNum(m[0]);
      if (n !== null) out.add(n);
    }
  }

  // Capture final numbers that appear after an arrow step.
  for (const m of txt.matchAll(/(?:→|->)\s*([-+]?\d[\d,]*(?:\.\d+)?(?:e[-+]?\d+)?)/g)) {
    const n = toNum(m[1]);
    if (n !== null) out.add(n);
  }

  for (const m of txt.matchAll(/(?:→|->)\s*([-+]?\d+(?:\.\d+)?)\s*[x*]\s*10\^\s*([-+]?\d+)/gi)) {
    const coeff = Number(m[1]);
    const exp = Number(m[2]);
    if (Number.isFinite(coeff) && Number.isFinite(exp)) {
      out.add(coeff * Math.pow(10, exp));
    }
  }

  // Focus on explicit final-answer style phrasing.
  const taggedNumber = /(?:answer|final answer|rounded|round to|result)\s*[:=]?\s*([-+]?\d[\d,]*(?:\.\d+)?(?:e[-+]?\d+)?)/ig;
  for (const m of txt.matchAll(taggedNumber)) {
    const n = toNum(m[1]);
    if (n !== null) out.add(n);
  }

  // Capture equality forms that usually present a computed final value.
  const equalsNumber = /(?:=|equals?)\s*([-+]?\d[\d,]*(?:\.\d+)?(?:e[-+]?\d+)?)/ig;
  for (const m of txt.matchAll(equalsNumber)) {
    const n = toNum(m[1]);
    if (n !== null) out.add(n);
  }

  // Capture explicit scientific-notation final forms in tagged/equality contexts.
  const sciTagged = /(?:answer|final answer|rounded|result|=|equals?)\s*[:=]?\s*([-+]?\d+(?:\.\d+)?)\s*[x*]\s*10\^\s*([-+]?\d+)/ig;
  for (const m of txt.matchAll(sciTagged)) {
    const coeff = Number(m[1]);
    const exp = Number(m[2]);
    if (Number.isFinite(coeff) && Number.isFinite(exp)) {
      out.add(coeff * Math.pow(10, exp));
    }
  }

  return [...out];
}

function toleranceFor(problem, answerNum) {
  const explicit = toNum(problem.tolerance);
  if (explicit !== null) return Math.abs(explicit);
  const rel = Math.abs(answerNum) * 0.001;
  return Math.max(1e-9, rel);
}

function numericAnswer(problem) {
  if (problem.isText) return null;
  if (typeof problem.answer === 'number' && Number.isFinite(problem.answer)) return problem.answer;
  if (typeof problem.answer === 'string') return toNum(problem.answer);
  return null;
}

const findings = [];
const strictMissingFinal = [];
const perUnit = [];
let totalProblems = 0;
let numericChecked = 0;

for (const file of unitFiles) {
  const unitPath = path.join(dataDir, file);
  const mod = await import(pathToFileURL(unitPath).href);
  const problems = Array.isArray(mod.ALL_PROBLEMS) ? mod.ALL_PROBLEMS : [];

  let unitNumericChecked = 0;
  let unitFindings = 0;

  totalProblems += problems.length;

  for (const p of problems) {
    const ans = numericAnswer(p);
    if (ans === null) continue;

    unitNumericChecked += 1;
    numericChecked += 1;

    const candidates = strictMode
      ? extractTaggedCandidates(p.solution || '')
      : extractNumericCandidates(p.solution || '');

    if (candidates.length === 0) {
      if (strictMode) {
        strictMissingFinal.push({ file, id: p.id, type: p.type });
      }
      continue;
    }

    const tol = toleranceFor(p, ans);
    let bestDiff = Infinity;
    let bestCandidate = null;

    for (const c of candidates) {
      const d = Math.abs(c - ans);
      if (d < bestDiff) {
        bestDiff = d;
        bestCandidate = c;
      }
    }

    if (bestDiff > tol) {
      unitFindings += 1;
      findings.push({
        file,
        id: p.id,
        type: p.type,
        answer: ans,
        closestSolutionNumber: bestCandidate,
        diff: bestDiff,
        tolerance: tol
      });
    }
  }

  perUnit.push({ file, problems: problems.length, numericChecked: unitNumericChecked, findings: unitFindings });
}

console.log(`Mode: ${strictMode ? 'strict' : 'default'}`);
console.log(`Scanned files: ${unitFiles.length}`);
console.log(`Scanned problems: ${totalProblems}`);
console.log(`Numeric-answer problems checked: ${numericChecked}`);
console.log('');
console.log('Per-unit summary:');
for (const row of perUnit) {
  console.log(`${row.file}\tproblems=${row.problems}\tnumericChecked=${row.numericChecked}\tfindings=${row.findings}`);
}
console.log('');
console.log(`Potential answer-drift findings: ${findings.length}`);
for (const f of findings.slice(0, 200)) {
  console.log(`${f.file}\t${f.id}\t${f.type}\tanswer=${f.answer}\tclosest=${f.closestSolutionNumber}\tdiff=${f.diff}\ttol=${f.tolerance}`);
}

if (strictMode) {
  console.log('');
  console.log(`Strict-mode missing explicit final-number cues: ${strictMissingFinal.length}`);
  for (const row of strictMissingFinal.slice(0, 200)) {
    console.log(`${row.file}\t${row.id}\t${row.type}`);
  }
}
