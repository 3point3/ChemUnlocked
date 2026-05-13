import fs from 'fs';
import { ALL_PROBLEMS } from './netlify/lib/data/unit03-problems.js';

const report = [];

// 1) Duplicate or non-sequential IDs
const ids = ALL_PROBLEMS.map(p => {
    const match = p.id.match(/(\d+)$/);
    return match ? parseInt(match[1], 10) : null;
}).filter(n => n !== null);

const duplicates = ALL_PROBLEMS.map(p => p.id).filter((item, index) => ALL_PROBLEMS.map(p => p.id).indexOf(item) !== index);
if (duplicates.length > 0) report.push("Duplicate IDs: " + [...new Set(duplicates)].join(", "));

for (let i = 0; i < ids.length - 1; i++) {
    if (ids[i+1] !== ids[i] + 1) {
        report.push(`Non-sequential IDs: ${ALL_PROBLEMS[i].id} followed by ${ALL_PROBLEMS[i+1].id}`);
    }
}

ALL_PROBLEMS.forEach(p => {
    // 2) Out-of-range correct indices
    if (p.type === 'concept' || p.type === 'multi') {
         if (p.correct < 0 || p.correct >= p.choices.length) {
             report.push(`ID ${p.id}: correct index ${p.correct} out of range (length ${p.             report.push(`ID ${         
         // 3         // 3         // 3         // 3         // 3         // 3               // 3    D $         // 3         // 3         /s.length} (expected 4)`);
         }


        }
 3         // 3               3         // 3               3         // 3c.trim 3         // 3       oiceDup 3         // 3               3         // 3               3         // 3c.trim 3         // 3       oiceDup 3         // 3report.push(`ID ${p.id}: Duplicate choices found: ${JSON.stringify([...new Set(choiceDupes)])}`);
                                           tch (bold numeric answer in solution not in choices)
         if (p.solution) {
             const boldMatches = p.solution.match(/<b>(-?\d+\.?\d*)<\/b>/g);
             if (boldMatches) {
                 boldMatch                 boldMatch                 boldMatcm.r                 boldMatch                 boldMatch     found                  boldMatch                 boldMatch                 boldMatcm.r                 boldMatch                 boldMaicious mismatch - bold value ${val} in solution not found in choices.`);
                     }
                 });
             }
         }
    }
});

if (report.lenif (repor) {
    console.log("No issues found.");
} else {
    console.log(report.join("\n"));
}
