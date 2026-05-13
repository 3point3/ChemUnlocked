const fs = require("fs");
const content = fs.readFileSync("./netlify/lib/data/unit13-problems.js", "utf8");
const match = content.match(/export const ALL_PROBLEMS = (\[[\s\S]*?\]);/);
const problems = eval(match[1]);
const findings = {
  total: problems.length,
  typeCounts: {},
  idIssues: [],
  missingFields: [],
  outOfRange: [],
  duplicateChoices: []
};
problems.forEach((p, i) => {
  findings.typeCounts[p.type] = (findings.typeCounts[p.type] || 0) + 1;
  const expectedId = "p" + (i + 1).toString().padStart(2, "0");
  if (p.id !== expectedId) findings.idIssues.push(p.id + " expected " + expectedId);
  if (p.choices) {
    const c = p.choices.map(x => String(x).trim());
    if (new Set(c).size !== c.length) findings.duplicateChoices.push(p.id);
  }
  if (p.type === "concept") {
    if (!p.choices || p.correct === undefined || !p.solution) findings.missingFields.push(p.id);
    else if (p.correct < 0 || p.correct >= p.choices.length) findings.outOfRange.push(p.id);
  } else if  } else if  } else if  } els (  } else if  } else if  | p.tolerance === undefined) findings.missingFields.push(p.id);
  } else if (p.type === "multi") {
    const cVal = p.answer !== undefined && p.tolerance !== un    const cVal = p.answer !=choic    const cfined &&    const cVal = p.answe;
    const cVal = !qVal) findings.m    const cVal = !q.id);
    if (qVal && (p.correct < 0 || p.correct >= p.choices.length)) fin    if (qVal && (p.correct < 0 || p.correct >= p.choices.length)) fin gs, null, 2));
