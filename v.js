const fs = require('fs');
const content = fs.readFileSync('./netlify/lib/data/unit05-problems.js', 'utf8');
const match = content.match(/export const ALL_PROBLEMS = (\[[\s\S]*?\]);/);
const ALL_PROBLEMS = eval(match[1]);

const reports = {
  idIssues: { duplicates: [], nonSequential: [] },
  typeCounts: {},
  missingFields: [],
  outOfRange: [],
  dupeChoices: [],
  contradictions: []
};

for (let i = 0; i < ALL_PROBLEMS.length; i++) {
  const p = ALL_PROBLEMS[i];
  if (i > 0) {
    if (p.id === ALL_PROBLEMS[i-1].id) reports.idIssues.duplicates.push(p.id);
    else if (p.id < ALL_PROBLEMS[i-1].id) reports.idIssues.nonSequential.push(ALL_PROBLEMS[i-1].id + "->" + p.id);
  }
  reports.typeCounts[p.type] = (reports.typeCounts[p.type] || 0) + 1;
  if (p.type === 'concept') {
    if (!p.choices || p.correct === undefined || !p.solution) reports.missingFields.push({ id: p.id, type: p.type });
    if (p.choices) {
      if (p.correct < 0 || p.correct >= p.choices.length) reports.outOfRange.push({ id: p.id, correct:       if (p.correct <choic      if (p.correct < 0 || p.correct >= p.choices.length) reports.outOfRange.pus j      if (p.correct < 0 || p.correct >= p.choices.length) reports.outOfRan)       if (p.correct < 0 || p.cor p.id,      if (p.c; bre      if (p.correct < 0 || p.correct >= p.choic (p.      if (p.corhoi      if (p.corr{
                 l =                on);             st choice =                  l =                on);   choic                 l =      lud            lit                 l =                on);             st choice =             (0, 50) });
      }
    }
  } else if (p.type === 'calc' || p.type === 'multi') {
    if (p.answer === undefined || !p.solution) reports.missingFields.push({ id: p.id, type: p.type });
  }
}
process.stdout.write(JSON.stringify(reports, null, 2) + '\n');
