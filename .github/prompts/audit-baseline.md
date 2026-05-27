# ChemUnlocked Shared Audit Baseline

Use this baseline for every ChemUnlocked audit task. Apply these checks before any domain-specific overlay.

## Scope Routing

- Learn/practice HTML or tools JS: run this baseline, then `.github/prompts/audit-debug.prompt.md`.
- Chemistry-heavy lesson/practice layout fixes: run this baseline, then `AGENTS.md` chemistry layout pass.
- Problem-bank data files in `netlify/lib/data/unitXX-problems.js`: run this baseline, then `.github/prompts/audit-debug-problembank.prompt.md`.
- If the file type is unclear, resolve target first, then choose exactly one overlay plus this baseline.

## Core Checks (All Targets)

- Resolve the correct target file and any required companion files before making edits.
- Fix issues directly instead of listing only.
- Prefer minimal, style-consistent changes that preserve existing instructional tone.
- After edits, run `get_errors` on the modified files and verify no new functional regressions were introduced.

## Shared Functional and Safety Checks

- Verify referenced IDs/selectors exist where the code uses DOM lookups.
- Confirm user-facing state transitions can recover after retry/reset actions.
- Remove obvious dead debug artifacts (`console.log`, stale commented debug blocks) unless intentionally retained.
- Keep dynamic HTML output structurally valid (no broken tags, malformed template literals, or invalid nesting).

## Shared Accessibility Checks

- Dynamic feedback/readout regions should expose polite live updates when content changes.
- Interactive controls should expose current state (`aria-pressed`, selected state, etc.) when applicable.
- SVG content generated for learning interactions should include a meaningful `<title>`.
- Prefer semantic hiding (`hidden`) when scripts toggle visibility via `.hidden`.

## Shared Chem Notation Guardrail

- For chemistry species/formulas/ions shown to students, use shared chemistry markup classes and avoid raw Unicode chemistry superscript/subscript glyphs.
- Keep math/science notation that is not chemistry species formatting (for example powers in scientific notation) unchanged unless incorrect.

## Shared Mobile/Layout Guardrail

- Check narrow-phone behavior for tables, equation boxes, badges/chips, prompt cards, and inline SVG containers.
- If content fails on mobile, implement a dedicated mobile-safe pattern rather than shrinking text only.

## Shared Reporting Standard

- Report what was broken, what was fixed, and any remaining informational warnings.
- Call out assumptions when answer keys/content intent is ambiguous.
