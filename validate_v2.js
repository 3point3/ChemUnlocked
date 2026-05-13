const fs = require("fs");
const content = fs.readFileSync("./netlify/lib/data/unit13-problems.js", "utf8");
const match = content.match(/export const ALL_PROBLEMS = (\[[\s\S]*?\]);/);
if (!match) { console.error("Could not find ALL_PROBLEMS"); process.exit(1); }
const ALL_PROBLEMS = eval(match[1]);

const findings = {
  total: ALL_PROBLEMS.length,
  typeCounts: {},
  idIssues: [],
  missingFields: [],
  outOfRange: [],
  duplicateChoices: []
};

ALL_PROBLEMS.forEach((p, i) => {
  findings.typeCounts[p.type] = (findings.typeCounts[p.type] || 0) + 1;
  const expectedId = "p" + (i + 1).toString().padStart(2, "0");
  if (p.id !== expectedId) {
    findings.idIssues.push(`Index ${i}: found ${p.id}, expected ${expectedId}`);
  }

  if (p.choices) {
    const choices = p.choices.map(c => String(c).trim());
    const seen = new Set();
    const dupes = choices.filter(c => seen.has(c) || !seen.add(c));
    if (new Set(dupes).size > 0) {
      findings.duplicateChoices.push({ id: p.id, du      findings.duplicateCho;
                          =                           =                           =                                                     =                           =                   ec                          =                           =                    se i                          =        nsw                 || p.tolerance === undefined) {
                issingFields.push(                issse if (p.type === "multi") {
    const hasCalc     const hasCalc     const hasto    const hasCalc     const hasCalc     const hasto    const hasCalc ed     const hasCalc     const hasCalc     const hasto    const h{
      findings.missingFields.push(p.id);
    }
    if (hasConcept && (p.correct < 0 || p.correct >= p.choices.  ngth)) {
      findings.outOfRange.push(p.id);
    }
  }
});

console.log(JSON.stringify(findings, null, 2));
