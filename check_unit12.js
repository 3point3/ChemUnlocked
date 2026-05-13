const fs = require("fs");
const content = fs.readFileSync("./netlify/lib/data/unit12-problems.js", "utf8");
const match = content.match(/export const ALL_PROBLEMS = (\[[\s\S]*?\]);/);
if (!match) { console.error("Could not find ALL_PROBLEMS"); process.exit(1); }
const problems = eval(match[1]);
const results = {
  total: problems.length,
  typeCounts: {},
  idErrors: [],
  duplicateIds: [],
  choiceErrors: [],
  multiValueErrors: [],
  duplicateChoices: []
};
const ids = new Set();
problems.forEach((p, i) => {
  results.typeCounts[p.type] = (results.typeCounts[p.type] || 0) + 1;
  const expectedId = "p" + (i + 1).toString().padStart(2, "0");
  if (p.id !== expectedId) results.idErrors.push(`${p.id}(exp:${expectedId})`);
  if (ids.has(p.id)) results.duplicateIds.push(p.id);
  ids.add(p.id);
  if (p.choices) {
    if (typeof p.correct !== "number" || p.correct < 0 || p.correct >= p.choices.length) results.choiceErrors.push(p.id);
    const tc = p.choices.map(c => String(c).trim());
    const dups = tc.filter((c, index) => tc.indexOf(c)     const dups = tc.filter((c, index) => tc.indexOf(c)     const dups = tc.fi
  if  if  if  if  if  if  if  if  if  if  if  if  if  if  if  if  if  if  if  p.  if  if  if  if  if  if  if  if  if  if  if  if  if  if  if  iundefined && p.c  if  if  if  if  if  if  iif (!h  if  if  if  ifsC  if  if  if  if  ifValueErrors.push(p.id);
  if  if  if  e.  if  if  if, result  if  l);
console.loconsole.loconsole.locngify(results.typeCounts));
cccccccccccccccccccccs:"cccccccccccccccccccccs:"c ? results.idErrors.join(", ") : "None");
console.log("Duplicate IDs:", results.duplicateIds.length ? results.duplicateIds.join(", ") : "Nconsole.log("Duplicate IDs:", results.duplicateIds.length ? results.duplicults.cconsole.log("Duplicate IDs:", results.duplicateIdplicaconsole.log("Duesconsole.logateChoicconsole.log("Duplicate IDs:", results.duplicateIds.length ? results.duplicateIds.join(", ") : "Nconsole.log("Duplicate lenconsole.log("Duplicate IDs:", results.duplicateIe");
