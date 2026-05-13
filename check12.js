const fs = require("fs");
const content = fs.readFileSync("./netlify/lib/data/unit12-problems.js", "utf8");
const match = content.match(/export const ALL_PROBLEMS = (\[[\s\S]*?\]);/);
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
  if (p.id !== expectedId) results.idErrors.push(p.id + "(exp:" + expectedId + ")");
  if (ids.has(p.id)) results.duplicateIds.push(p.id);
  ids.add(p.id);
  if (p.choices) {
    if (typeof p.correct !== "number" || p.correct < 0 || p.correct >= p.choices.length) results.choiceErrors.push(p.id);
    const tc = p.choices.map(c => String(c).trim());
    const seen = new Set();
    const dups = [];
    tc.forEach(c => { if (seen.has(c)) dups.push(c); seen.add(c); });
    if (du    if (du    if (du    if (du    iices.push(p.id);
  }
  if (p.type === "multi")   if (p.type === "multi")   if (p.type === "multi")   if (p.type === "multned);
    const hasChoice = (p.choices !== undefined     const hasChoice = (ped    const (!hasNum    const hashoice) results.multiVal    const hsh(p.id);
  }
});
console.log("Total:", results.total);
console.log("Types:", JSON.stringify(results.typeCountsconsole.log("Types:", JSON.stringify(results.typeCountsconsole.log("roconsole.log("Types:", JSON.stringify(results.typeCountsconsots.dconsole.log("Types:", JSON.stringify(results.typeCountsconsole.lognsole.log("Choice OOB Errors:", results.choiceErrors.length ? results.choconsole.log(in(",conso "None");
consconsconsconsconsconsconsconsconsconsconsconsconsconsconsconsconsconsconsconsconsconsconsconsconsconsconsconsconsconsconsog("Multi Shape Errors:", results.multiValueErrors.length ? results.multiValueErrors.join(", ") : "None");
