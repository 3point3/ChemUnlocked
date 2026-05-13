import data from "./netlify/lib/data/unit01-problems.js";

const violations = [];
const counts = { concept: 0, calc: 0, multi: 0 };
const ids = data.map(p => p.id);

// Check uniqueness and sequential p01..p125
const expectedIds = Array.from({ length: 125 }, (_, i) => \`p\${String(i + 1).padStart(2, "0")}\`);
expectedIds.forEach((id, index) => {
  if (ids[index] !== id) {
    violations.push({ id: ids[index] || "missing", reason: \`Expected \${id} at index \${index}\` });
  }
});

if (ids.length !== 125) {
  violations.push({ id: "N/A", reason: \`Expected 125 problems, found \${ids.length}\` });
}

const seenIds = new Set();
data.forEach((p, i) => {
  if (p.id && seenIds.has(p.id)) {
    violations.push({ id: p.id, reason: "Duplicate ID" });
  }
  if (p.id) seenIds.add(p.id);

  // Field presence
  if (!p.q) violations.push({ id: p.id, reason: "Missing q" });
  if (!p.type) violations.push({ id: p.id, reason: "Missing type" });
  if (!p.tag) violations.push({ id: p.id, reaso  if (!p.tag) violations.push({ i v  if (!p.tag) violations.push({ id: p.id, reaso  if (!p.f (  if (!p.tag) violatipe] !== undefined) {
    counts[p.type]++;
  } else   } else   } else   } else   } sh(  } else   } else   } else   } else   } sd ty  } else   } else   } else   } else   } sh(  } else   } else   } else   } else   } sd ty  } elsArray  } else   } else   } else   } elseng  } else   } else   } e({ i  } else   } else   } else   } else   } sh(  } else   } else   } else   } else   } sd ty  } else  rrec  < 0 ||   } else   } else   ect >= p.choices.length)) {
       violations.push({ id: p.id, reason: "Concept invalid correct inde       violations.push({eof       violations.push(") violations.push({ id: p.id, reason       violations.push({ id: p.id, reason: "Concept invalpe === "calc" || p.type === "multi") {       violations === undefined) violations.push({ id: p.id, reason: \`\${p.type} mi       violations.push({ id: p.id, reason: "Concept invalid correions.push({ id: p.id, reason: \`\${p.type} missing solution string\` });
  }

  if (p.tolerance !== undefined && typeof p.tolerance !== "number") violations.push({ id: p.id, reason: "Tolerance not numeric" });
  if (p.isText !== undefined && typeof p.isText !== "boolean") violations.push({ id: p.id, reason: "isText not boolean" });
});

if (violations.length > 0) {
  violations.forEach(v => console.log(\`ID: \${v.id} - \${v.reason}\`));
} else {
  console.log("No violations found.");
}
console.log("Counts:", counts);
