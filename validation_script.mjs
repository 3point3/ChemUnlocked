import { ALL_PROBLEMS } from './netlify/lib/data/unit05-problems.js';

function validate() {
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
    
    // 1. ID Issues
    if (i > 0) {
      if (p.id === ALL_PROBLEMS[i-1].id) {
        reports.idIssues.duplicates.push(p.id);
      } else if (p.id < ALL_PROBLEMS[i-1].id) {
        reports.idIssues.nonSequential.push(ALL_PROBLEMS[i-1].id + "->" + p.id);
      }
    }

    // 2. Type Counts
    reports.typeCounts[p.type] = (reports.typeCounts[p.type] || 0) + 1;

    // 3. Missing Fields & 4. Correct Range & 5. Dupe Choices
    if (p.type === 'concept') {
      if (!p.choices || p.correct === undefined || !p.solution) {
        reports.missingFields.push({ id: p.id, type: p.type });
      }
      if (p.choices) {      if (p.choices) {      if (p.chec      if (p.choices) {      if (p.choices) {      if (p.chec      ifd,       if (p.choices)le      if (p.ces.leng      if (p.choices) {      if (p.choices) {      for      if  0; j < p.c     s.length; j++) {
               t c =                t c ).trim();
           if (seen[c           if (seen[c           if (seen[c    d: p           if (seen[c           brea ;
           }
                   = true;
        }
        // 6. Contradictions
        if (p.solution && p.choices[p.correct]) {
           const sol = String(p.solution);
           const choice = String(p.choices[p.correct]);
           if (choice.match(/^\d/) && !sol.includes(choice.split(' ')[0])) {
             reports.contradictions.push({ id: p.id, choice             reports.contradictions.push({ id: p.id, choice
                              ===                               ===                                |                              =s.missingFields.push({ id: p.id,       p.type });
      }
    }
  }

  process.stdout.write(JSON.stringify(reports, null, 2) + '\n');
}

validate();
