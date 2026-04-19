---
name: audit-css
description: Audit a CSS file for syntax issues, cascade conflicts, responsive behavior, accessibility risks, maintainability, and performance.
---

1. Syntax and Parsing: Check for invalid declarations, broken blocks, unsupported values, duplicate properties, and anything that could prevent later rules from parsing correctly.
2. Cascade and Specificity: Identify conflicting selectors, accidental overrides, over-specific selectors, unnecessary `!important`, and rules that rely too heavily on source order.
3. Responsive Behavior: Review fixed widths and heights, text measure, wrapping, overflow, spacing, breakpoints, and layouts that may fail on smaller or larger screens.
4. Accessibility: Flag contrast issues, weak or missing focus states, reduced-motion concerns, unreadable line lengths, and font sizing or spacing choices that hurt readability.
5. Maintainability: Find duplicated rules, repeated values that should use variables, inconsistent naming, dead or likely-unused selectors, and opportunities to consolidate patterns.
6. Performance: Note overly complex selectors, redundant declarations, and stylesheet patterns that add unnecessary weight or repaint/reflow cost.
7. Organization: Review sectioning, comments, token usage, consistency with existing design variables, and whether shared styles are placed appropriately.

Return findings first, ordered by severity.
For each finding, include the selector, the exact file location, why it matters, and the smallest safe fix.
Separate true bugs from cleanup suggestions.
Do not rewrite unrelated sections.