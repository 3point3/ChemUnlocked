import { ALL_PROBLEMS as data } from "./netlify/lib/data/unit01-problems.js";

function normalize(text) {
  if (!text) return "";
  return text.toLowerCase()
    .replace(/<[^>]*>?/gm, "")
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getTokens(text) {
  return new Set(text.split(" ").filter(t => t.length > 0));
}

function jaccardSimilarity(setA, setB) {
  const intersection = new Set([...setA].filter(x => setB.has(x)));
  const union = new Set([...setA, ...setB]);
  if (union.size === 0) return 0;
  return intersection.size / union.size;
}

const problems = data.map(p => ({
  id: p.id,
  original: p.q || "",
  tokens: getTokens(normalize(p.q))
}));

const pairs = [];
for (let i = 0; i < problems.length; i++) {
  for (let j = i + 1; j < problems.length; j++) {
    const score = jaccardSimilarity(problems[i].tokens, problems[j].tokens);
    if (score >= 0.65) {
      pairs.push({
        id1: problems[i].id,
        id2: problems[j].id,
        score: score.toFixed(4),
        q1: problems[i].original.substring(0, 100),
        q2: problems[j].original.substring(0, 100)
      });
    }
  }
}

pairs.sort((a, b) => b.score - a.score);

console.log("Top 15 near-duplicate pairs (Score >= 0.65):");
pairs.slice(0, 15).forEach((p, idx) => {
  console.log(`${idx + 1}. Score: ${p.score} | ${p.id1} & ${p.id2}`);
  console.log(`   Q1: ${p.q1}...`);
  console.log(`   Q2: ${p.q2}...`);
  console.log("---");
});
