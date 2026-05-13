---
name: "Audit & Debug Problem Bank File"
description: "Full audit of ChemUnlocked unit problem-bank JS files (schema, correctness, consistency, and render helpers). Use for netlify/lib/data/unitXX-problems.js files."
argument-hint: "Optional: file path, unit file name, or focus area (e.g. schema, duplicates, tags, SVG helper checks)"
agent: "agent"
---

Perform a thorough audit and debug of the current file (or the file path in $args if provided). This prompt is for problem-bank data files such as `netlify/lib/data/unit01-problems.js`.

Work through each category in order. Fix issues directly in-file where possible. Do not only list issues.

## 1. Resolve Target File and Scope

- If $args is provided, use that as the target file.
- If no $args is provided, use the active editor file.
- If target is not a `unitXX-problems.js` file, locate the nearest matching file in `netlify/lib/data/` and continue.
- Read the full target file including helper render functions and the exported problem array.

## 2. Functional/Data Integrity (fix first)

- Verify export shape is valid and deterministic (single `ALL_PROBLEMS` array export for this schema).
- Ensure every problem `id` is unique, correctly formatted, and sequential where expected.
- Validate required fields by type:
  - `concept`: requires `choices` array, numeric `correct`, `solution`.
  - `calc` and `multi`: requires `answer`; validate `tolerance` and `isText` usage.
- Confirm `correct` indices are in-bounds for `choices`.
- Detect malformed objects, missing commas, accidental trailing artifacts, or broken template literals.
- Ensure no unreachable or dead helper functions used by embedded prompts.

## 3. Answer/Explanation Correctness

- Check each problem for internal consistency:
  - question text, answer key, choices, and solution must agree.
  - units in prompt and solution must match.
  - sig-fig/tolerance values must be reasonable for the expected answer format.
- For conversion/math items, recompute suspicious results and correct wrong keys or explanations.
- For visual readout problems (SVG/readout), verify the rendered value/coordinates align with the keyed answer.
- Fix off-by-one answer key mistakes and contradictory explanations.

## 4. Accessibility and Rendering Safety

- For SVG helper functions used in problem text:
  - include `<title>` in each generated SVG.
  - include consistent class hooks used by styling (e.g. `svg-prob`) where appropriate.
- Ensure helper output does not introduce invalid HTML structure inside question strings.
- Avoid unsafe dynamic HTML patterns that could break rendering.

## 5. Taxonomy and Content Quality

- Normalize `tag` usage to meaningful categories; fix obvious mislabels.
- Detect near-duplicate items; if duplicates are unintentional, revise one while preserving coverage and difficulty balance.
- Keep total problem count stable unless a clear defect requires structural change.
- Preserve the intended mix across concept/calculation/multi-step where feasible.

## 6. Code Quality

- Replace `var` with `const`/`let`.
- Remove leftover debug logs and dead commented debug code.
- Keep edits minimal and style-consistent with the file.

## 7. Validation

- Run `get_errors` on the target file after fixes.
- If there is a companion consumer file that imports this bank, run `get_errors` there too.

## After Fixing

Report a concise summary with:
- what was broken,
- what was fixed,
- any informational warnings that do not require action,
- any assumptions made when resolving ambiguous answer keys.