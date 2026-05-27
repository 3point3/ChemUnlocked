---
name: "Audit & Debug ChemUnlocked File"
description: "Full audit of a ChemUnlocked HTML/JS file: bugs, accessibility, performance, and SEO. Use when debugging a unit page, practice page, or tools JS file."
argument-hint: "Optional: file path or specific area to focus on (e.g. accessibility, JS logic)"
agent: "agent"
---

Before running this overlay, load and apply `.github/prompts/audit-baseline.md`.

If the target file is chemistry-heavy (formula markup, ionic notation, equation wrapping, chemistry SVGs, or mobile notation issues), also apply the chemistry overlay in `AGENTS.md`.

Perform a thorough audit and debug of the current file (or the file path in $args if provided). Work through each category below in order. Fix issues directly — do not just list them.

## 1. Functional Bugs (fix first)

- Read the file and any companion JS file (e.g. `01_tools.js` for `01_Learn_*.html`).
- Check all `getElementById`, `querySelector`, and DOM-manipulation calls — verify every referenced `id` exists in the HTML.
- Verify interactive tool state machines: confirm every state transition is reachable and every terminal state has a recovery path.
- Check all `onclick` and `addEventListener` targets exist and are spelled correctly.
- Confirm `DOMContentLoaded` init functions call the right setup functions in the right order.
- Look for off-by-one errors, unreachable branches, and stale state after "Try another" resets.

## 2. Accessibility (WCAG 2.1 AA)

- Every dynamic feedback element (`tool-feedback`, readout, result) must have `aria-live="polite"`.
- Every toggle/choice button must have `aria-pressed` set at creation and updated on click.
- Every interactive SVG drawn by JS must inject a `<title>` element reflecting current content.
- Every `<input type="range">` must have an explicit `<label for="...">` (not just `aria-label`).
- Hidden panels should use the `hidden` attribute, not `style="display:none"`, when JS toggles them via `.hidden`.
- Confirm all images have meaningful `alt` text or `alt=""` with `aria-hidden="true"` on the wrapper.
- Confirm tab-panel roles: `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-controls`, `aria-labelledby`, `aria-selected`, `aria-hidden` are all consistent.

## 3. Performance

- Images: confirm `loading="lazy"` and `decoding="async"` on all `<img>` tags that are below the fold.
- Script tags: confirm `chem.js` loads before unit-specific tools JS; no blocking scripts in `<head>`.
- No duplicate or redundant event listeners being attached on re-renders.
- No `innerHTML` assignments inside tight loops — batch DOM writes.

## 4. SEO & Structured Data

- Confirm `<title>` is unique, descriptive, and under 60 characters.
- Confirm `<meta name="description">` is 120–155 characters.
- Confirm `<link rel="canonical">` matches the expected production URL.
- Confirm `og:title`, `og:description`, `og:url`, `og:image` are all present.
- If a `<script type="application/ld+json">` block is present, validate that `@type`, `name`, `description`, and `url` are all populated correctly for the page type.

## 5. Code Quality

- Replace any `style="display:none"` inline styles with the `hidden` attribute where JS toggling uses `.hidden`.
- Replace `var` with `const`/`let` in JS files.
- Remove any `console.log` or debug statements left in production code.
- Ensure `chem.css` version query string (`?v=`) matches across all `<link rel="stylesheet">` tags on the page.

## 6. Cross-page Consistency

- Confirm the unit-bottom-nav `Previous` / `Practice` / `Next` links are correct for this unit number.
- Confirm the practice-banner `Start Practicing →` href points to the matching `XX_practice.html`.
- Confirm the `scroll-hint` footer text matches the unit number and title.

## After Fixing

- Run `get_errors` on the file and its companion JS.
- Report a concise summary: what was broken, what was fixed, and any remaining informational warnings that do not need action (e.g. `theme-color` Firefox notice).
