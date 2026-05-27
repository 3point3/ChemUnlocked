# ChemUnlocked Repo Notes

## Merged Audit Routing

Use a layered audit approach so rules stay consistent and do not drift:

- Always start from `.github/prompts/audit-baseline.md`.
- Use `AGENTS.md` as the chemistry layout and notation overlay for learn/practice pages with equations, SVG visuals, tables, callouts, or mobile card issues.
- Use `.github/prompts/audit-debug.prompt.md` as the general HTML/JS debug overlay.
- Use `.github/prompts/audit-debug-problembank.prompt.md` as the problem-bank data overlay.
- Do not merge all checklists into one giant prompt. Keep one baseline + one overlay per task.

## Trigger Phrases

When the user says any of the following, treat it as a request to run the full ChemUnlocked chemistry layout and notation pass for the current page:

- `run the ChemUnlocked layout pass`
- `run the ChemUnlocked chemistry layout pass`
- `fix chemistry layout on this page`
- `do the ChemUnlocked mobile/notation audit`

## ChemUnlocked Chemistry Layout Pass

Use this workflow for ChemUnlocked learn/practice pages, especially unit lesson pages with equations, SVG visuals, tables, callouts, and mobile card layouts.

### Goals

- Fix chemistry notation so subscripts and ionic charges render correctly.
- Keep polyatomic ions together as a single unit when wrapping.
- Prevent equations from breaking at unsafe points.
- Fix SVG text alignment, padding, clipping, and callout geometry.
- Make phone-width layout readable without crushed tables, broken badges, or oversized cards.
- Preserve instructional meaning and existing page tone.

### Required Chemistry Markup Rules

- Formula numbers must use a reusable subscript span such as `chem-sub`.
- Charges must use a reusable superscript span such as `chem-charge`.
- Polyatomic ions and charged species should be wrapped in a no-break group such as `ion-group`.
- Avoid ad hoc inline superscript/subscript formatting when a shared class can be used.
- Do not rely on raw Unicode chemistry characters such as `₂`, `₃`, `⁺`, `⁻`, `²⁻`, or similar handwritten typography in lesson HTML, badges, captions, or labels when shared chemistry markup should be used instead.
- Treat chemistry notation as structured markup, not typed glyphs:
  - counts in formulas should be `chem-sub`
  - ionic charges should be `chem-charge`
  - full species should be grouped with `ion-group`
- Distinguish neutral formulas from ions when auditing:
  - neutral compounds such as `Ca3(PO4)2` use subscripts for `3`, `4`, and the outer `2`
  - ions such as `PO4 2−` use a subscript for `4` and a superscript charge for `2−`
  - do not let a formatter guess blindly when a trailing number is a subscript versus a charge
- Distinguish chemistry notation from legitimate math/science notation:
  - scientific notation such as `6.02 × 10^23`, powers, algebraic exponents, and variable labels like `K_a`, `K_b`, `K_w`, `m_l`, or `m_s` are not chemistry-subscript bugs by themselves
  - the audit target is chemical species, formulas, ions, grouped polyatomic ions, reaction terms, and chemistry examples shown to students
  - plain `<sup>` / `<sub>` is acceptable for legitimate math/science notation such as `10^23`, `N_A`, `M_empirical`, fractions, and variable labels
  - plain `<sup>` / `<sub>` should be replaced when they are being used to render a chemical species, formula, subscript count, or ionic charge

### Required Equation Layout Rules

- Equations should wrap only between compounds or operators, not inside compounds.
- Prefer tokenized markup:
  - `chem-eq`
  - `chem-token`
  - `chem-op`
  - `chem-sub`
  - `chem-charge`
  - `ion-group`
- Labels like `Net ionic:` or `Pattern:` should be separated from the equation when that improves wrapping.
- Do not rely on one-off `nowrap` hacks unless a compact equation genuinely must remain on one line.

### SVG Rules

- Review all inline SVGs for baseline errors, mis-positioned subscripts, clipped text, cramped padding, and poor arrow alignment.
- Make containers larger when more visual padding is needed; do not solve spacing by forcing text into awkward positions.
- Keep annotation boxes wide and tall enough for the text they contain.
- For hub-and-spoke or node-link SVGs, lines should terminate at the visible edge of the node or card, not run center-to-center underneath semi-opaque fills.
- Arrowheads must sit on the stroke direction and point to the actual target connection point, not float off the line or overshoot into the label/card area.
- Prefer crisp fills, gradients, and strokes over blur-heavy filters on small SVG elements; drop shadows on atoms, particles, or other tiny repeated shapes often make the diagram look soft on mobile and laptop screens.
- If a diagram contains small particle circles, badges, or dense labels, do not assume an external SVG is the problem; first audit the SVG itself for filters, cramped spacing, and over-detailed decoration.
- Default against legends inside instructional SVGs unless the legend adds essential meaning that cannot be conveyed by labels, surrounding copy, or repeated element symbols. Reclaim that space for the main diagram when possible.

### Mobile Rules

- Audit at narrow phone width.
- Fix root causes for:
  - crushed tables
  - badges stacking letter-by-letter
  - equation boxes that force bad wraps
  - inconsistent multi-card alignment
  - oversized vertical spacing
- If a table fails on mobile, give it a dedicated mobile layout rather than only shrinking text.
- Any learn/practice table with 3 or more columns should include `data-label` markup on every `td` if there is any chance it will stack on mobile.
- Any instructional table with 4 or more columns should default to a known safe mobile pattern such as a stacked card/table layout unless a different mobile treatment is already implemented and verified.
- For any stacked mobile table pattern, verify that header labels do not overlap cell values at narrow phone width.
- Watch for fixed left padding, fixed pseudo-label widths, absolutely positioned `td::before` labels, and multi-line labels such as `Number of Orbitals` or `Max Electrons`.
- If stacked-table labels wrap or collide with values, switch to a label-above-value layout instead of only widening the left gutter.
- For interactive prompt cards, tool scenario panels, and reveal boxes that contain equations, formulas, or long inline chemistry strings, do not leave the label and the equation in one wrapping inline run.
- In those cases, separate the label (`Equation:`, `Formula:`, `Balanced equation:`, `Task:`) from the content when that improves wrapping, and make the equation/formula a block-level element.
- If the equation/formula is too wide for phone width, prefer a dedicated mobile layout or a horizontal swipe container; do not allow bordered or highlighted inline spans to wrap into fragmented overlapping slabs.
- For wide SVG diagrams, choose the mobile treatment based on meaning:
  - if the diagram can be rearranged vertically without losing the concept, build a dedicated stacked mobile version
  - if the left-to-right geometry or pole-to-pole interaction is the concept, preserve the wide layout and use a controlled horizontal swipe wrapper with a visible swipe hint
- Do not force a desktop-width SVG to fit phone width by shrinking it until labels, poles, or interactions become unclear.
- When a multi-part teaching panel combines a formula block, SVG, and explanatory note, prefer a true multi-column desktop layout and a normal vertical mobile stack rather than leaving the note as a figcaption stranded below one column.
- On wide screens, audit for wasted space inside oversized formula/callout panels. If the content is really three related teaching pieces, lay them out as three pieces instead of stretching one piece across empty space.
- Do not sign off a table from source inspection alone when it has any of the following:
  - 4 or more columns
  - long labels or parenthetical descriptors
  - chemistry notation in headers or cells
  - generic or fixed-layout table markup without an explicit mobile treatment
- Any table with those risk factors must either:
  - use a known safe mobile pattern such as a stacked mobile table, or
  - be visually verified at narrow phone width before the page is considered complete

### Repo-Specific Checks

- In worked examples inside learn-page example tabs, step 1 must identify the governing equation, relationship, or pattern before any substitution or arithmetic begins.
- Do not assume the student remembers which equation to use; explicitly show the equation or rule in the first step, then continue to setup, substitution, and calculation steps.
- When units cancel inside worked examples, show the cancellation directly in the factor-label or equation line using the shared cancellation markup and visible strike-through styling rather than leaving cancellation implied.
- Search the current file for plain formula spans such as `<span>2</span>` or inline chemistry text that should use shared subscript/charge classes.
- Search the current file for raw Unicode super/subscript chemistry characters and normalize them to shared markup before considering the page complete.
- Search for plain `<sup>` and `<sub>` usage in chemistry notation and replace it with shared ChemUnlocked chemistry classes unless there is a page-specific reason not to.
- If a page includes JS-driven tools, prompts, dropdown feedback, or injected HTML, audit the data source too:
  - store canonical formula strings in plain ASCII such as `Ca3(PO4)2` or `PO4 2-`
  - render them through a shared chemistry formatter for HTML output
  - do not store pre-rendered Unicode formula glyphs as the source of truth for interactive content
- For learn-page interactive content, explicitly audit:
  - prompt text
  - option labels
  - reveal/explanation content
  - calculator/checker output
  - any helper strings inserted with `innerHTML`
- If a page has a local renderer or formatter for chemistry strings, prefer reusing or extending that renderer instead of hand-formatting each interactive string separately.
- Apply the same rule to premium or gated question banks:
  - inspect the shared renderer, not just one sample page
  - audit prompt text, answer choices, worked solutions, and feedback strings
  - make sure runtime normalization covers chemistry notation and legitimate math super/subscripts before content is inserted into the DOM
- During repo-wide sweeps, separate findings into:
  - chemistry formulas and ions that must be normalized
  - non-chemistry superscripts/subscripts that should remain as math/science notation
- For every learn/practice page, do a section-by-section mobile render check of:
  - each table
  - each equation block
  - each inline SVG
  - each interactive prompt card or tool panel that contains equations, formulas, badges, chips, or other boxed inline content
  - each multi-card comparison or callout group
  before calling the page complete
- Search for pills, badges, and callouts that use `white-space` or fixed sizing in ways that break on mobile.
- Review page-specific CSS near the bottom of `chem.css` before adding more one-off overrides.
- Prefer shared ChemUnlocked patterns where safe, but scope narrowly if a rule might affect unrelated units.
- When using horizontal overflow for diagrams or tables on mobile, use the shared ChemUnlocked scroll treatment and show the swipe cue if the overflow is instructional, not accidental.

### Deliverable Standard

- Apply the fixes directly in the page HTML and `chem.css`.
- Keep the page visually consistent with existing ChemUnlocked styling.
- After changes, do a source-level audit for:
  - bad subscripts or superscripts
  - raw Unicode chemistry glyphs or stray `<sup>` / `<sub>` markup
  - neutral-formula versus ionic-charge mistakes in grouped species such as `Ca3(PO4)2` vs `PO4 2−`
  - equation breakage
  - clipped SVG labels
  - badge/table mobile failures
  - inconsistent spacing between cards or callouts

## Usage Note

If the user uses one of the trigger phrases above, run the full pass on the current page without asking them to restate the prompt.
