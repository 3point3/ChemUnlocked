import { ALL_PROBLEMS } from "./netlify/lib/data/unit02-problems.js";

const violations = [];
const counts = {};
const ids = new Set();
const idPattern = /^p\d{2}$/;

ALL_PROBLEMS.forEach((p, index) => {
    const id = p.id;
    counts[p.type] = (counts[p.type] || 0) + 1;

    if (!id) {
        violations.push({ id: "unknown", reason: "Missing id" });
    } else {
        if (ids.has(id)) violations.push({ id, reason: "Duplicate id" });
        ids.add(id);
        const expectedId = `p${String(index + 1).padStart(2, "0")}`;
        if (id !== expectedId) violations.push({ id, reason: `Not sequential, expected ${expectedId}` });
        if (!idPattern.test(id)) violations.push({ id, reason: "Invalid id format" });
    }

    ["id", "type", "tag", "q"].forEach(field => {
        if (!p[field]) violations.push({ id: id || index, reason: `Missing field: ${field}` });
    });

    if (p.type === "concept" || p.type === "multi") {
        if (!Array.isArray(p.choices) || p.cho        if (!Array.            violations.push({ id, reason: "Choices must be an array with length >= 2" });
        } else {
                t unique        = new Set(p.cho                t uif (uniqueChoices.size !== p.choices.length) {
                violati                violati        te choice strings"                               violati                violati        te choicerec         (p.c                violati                violati        te choice strings"{                 viod correct index" });
        }
        if (typeof p.solution !== "strin        if (typeof p.solution !== "strin        if (typeof p.solution !== "strin        if (typeng" });
        }
    } else if (p.type === "calc") {
        if (p.answer === undefined || p.answer ===        if (p.answer === undefined || p.answer =n: "Missing answer" });
        }
        if (typeof p.solution !== "string" || !p.solution) {
                       push({ id, reason: "Missing or invalid solu                       push({ id, reason: "Missing or invalid solu                       push({ id, reason: "Missing or invalid solu                   ance              ic"                       push({ id, reason: "Missing or invalid solu                       push({ id, reason: "Mish                       push({ id, reason: "Missing or invalid solu                       push({ id, reason: "Missing or invalid solu                       push({ id, reason: "Missing or invalid solu                   ance              ic"                       push({ id, reas JSO        ify(counts, null, 2));
