---
name: audit
description: Audit and improve code files for errors, quality, performance, security, accessibility, and best practices. Use for HTML, JS, CSS, or any code file.
---

1. Errors and bugs: Check syntax, parsing, runtime issues, and logic flaws. Run any available diagnostics.
2. Maintainability: Review structure, readability, duplication, naming, and DRY issues. Flag inline styles/scripts and styles that should move to shared CSS/JS.
3. Performance: Identify expensive patterns, redundant code, unnecessary payload, and opportunities to simplify.
4. Accessibility and security: Check semantics, focus states, ARIA, contrast, keyboard flow, and common HTML/JS risks.
5. UX and responsiveness: Review layout, text wrapping, overflow, breakpoints, and interactive edge cases.
6. File-specific checks: For HTML, verify valid markup and responsive structure, including unit pages, practice pages, and any `XX_premium.html` premium pages. For CSS, flag duplicate or conflicting rules, specificity issues, dead styles, and repeated inline styling that should move to shared stylesheets. For JS, check error handling and modern usage.

Return findings first, ordered by severity.
For each finding, include the file location, why it matters, and the smallest safe fix.
Separate true bugs from cleanup suggestions.
Do not rewrite unrelated sections.