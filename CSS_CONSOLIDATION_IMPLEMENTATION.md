# CSS Consolidation - Implementation Guide
**For:** chem.css (172KB, 8,392 lines)

---

## CRITICAL: Button System Consolidation

### Current State (Scattered across file)

**Primary buttons:** Lines 1820-1860
```css
.btn {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  border: 1px solid transparent;
  background: linear-gradient(180deg, #14a590, #0b7569);
  color: #fff;
  border-radius: 12px;
  padding: 0.8rem 1rem;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: 0.18s ease;
  box-shadow: 0 10px 22px rgba(15, 138, 122, 0.18);
  text-align: center;
  white-space: normal;
  overflow-wrap: anywhere;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 26px rgba(15, 138, 122, 0.22);
}
```

**Duplicate variations:**
- `.contact-btn` (Lines 85-99): ~95% identical
- `.tool-check-btn` (Lines 2785-2790): ~80% identical  
- `.explore-check` (Lines 2781-2784): ~80% identical

**Choice button with states:** Lines 1200-1250
```css
.choice-btn { /* ~20 properties */ }
.choice-btn:hover { /* 3 properties */ }
.choice-btn.selected { /* 4 properties */ }
.choice-btn.correct { /* 3 properties */ }
.choice-btn.incorrect { /* 3 properties */ }
```

**SAME exact colors repeated in:**
- `.tool-feedback[data-state="correct"]` (Line 1594-1599)
- `.choice-btn.reveal-correct` (Line 1247-1250) 
- `.feedback.correct` (Line 1247-1250)

### Recommended Refactor

Create BEM-style button system:
```css
/* Base button utility */
:root {
  /* Button base styles */
  --btn-gradient: linear-gradient(180deg, #14a590, #0b7569);
  --btn-shadow: 0 10px 22px rgba(15, 138, 122, 0.18);
  --btn-shadow-hover: 0 14px 26px rgba(15, 138, 122, 0.22);
  
  /* State colors - CONSOLIDATE all state styling here */
  --state-success-bg: #ecfdf5;
  --state-success-border: #86efac;
  --state-success-color: #166534;
  
  --state-error-bg: #fef2f2;
  --state-error-border: #fecaca;
  --state-error-color: #991b1b;
  
  --state-warn-bg: #fff7ed;
  --state-warn-border: #fdba74;
  --state-warn-color: #9a3412;
}

/* Single base button class */
.btn {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  border: 1px solid transparent;
  background: var(--btn-gradient);
  color: #fff;
  border-radius: 12px;
  padding: 0.8rem 1rem;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: 0.18s ease;
  box-shadow: var(--btn-shadow);
  text-align: center;
  white-space: normal;
  overflow-wrap: anywhere;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--btn-shadow-hover);
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.58;
  transform: none;
  box-shadow: none;
}

/* Size modifiers */
.btn--sm {
  padding: 0.55rem 0.8rem;
  font-size: 0.86rem;
  border-radius: 10px;
}

/* Appearance modifiers */
.btn--outline {
  background: #fff;
  border-color: var(--border);
  color: var(--accent2);
  box-shadow: none;
}

.btn--outline:hover {
  border-color: #5eead4;
  background: #f0fdfa;
}

/* State modifiers - NOW SINGLE DEFINITIONS */
.btn--state-success,
.btn[aria-pressed="true"],
[data-state="correct"] {
  border-color: var(--state-success-border);
  background: linear-gradient(135deg, var(--state-success-bg), #d1fae5);
  color: var(--state-success-color);
  box-shadow: 0 14px 28px rgba(22, 163, 74, 0.14);
}

.btn--state-error,
[data-state="incorrect"] {
  border-color: var(--state-error-border);
  background: linear-gradient(135deg, var(--state-error-bg), #ffedd5);
  color: var(--state-error-color);
  box-shadow: 0 14px 28px rgba(234, 88, 12, 0.14);
}

.btn--state-warning,
[data-state="warn"] {
  border-color: var(--state-warn-border);
  background: linear-gradient(135deg, var(--state-warn-bg), #fffbeb);
  color: var(--state-warn-color);
}

/* Color variant modifiers */
.btn--gold {
  background: #b45309;
  border-color: #b45309;
  box-shadow: 0 12px 24px rgba(180, 83, 9, 0.22);
}

.btn--gold:hover {
  background: #92400e;
  border-color: #92400e;
}

.btn--teal {
  background: #0f766e;
  border-color: #0f766e;
  box-shadow: 0 12px 24px rgba(15, 118, 110, 0.22);
}

.btn--teal:hover {
  background: #115e59;
  border-color: #115e59;
}

.btn--blue-light {
  background: #e0ecff;
  border-color: #9bbcf7;
  color: #174ea6;
  box-shadow: 0 8px 18px rgba(59, 130, 246, 0.12);
}

.btn--blue-light:hover:not(:disabled) {
  background: #0b6f63;
  border-color: #0b6f63;
  color: #fff;
  box-shadow: 0 12px 24px rgba(15, 118, 110, 0.22);
}
```

### Search/Replace Strategy

1. **Identify all button classes:** search for `.btn`, `.contact-btn`, `.tool-check-btn`, `.explore-check`, `.tool-reveal-btn`, `.explore-reveal`, `.tool-next-btn`, `.explore-next`, `.choice-btn`, `.filter-btn`, `.tare-btn`, `.segment-btn`, `.profile-btn`, `.tool-choice-btn`, `.explore-choice`

2. **Replace in HTML:** Convert from class selectors to data attributes + base `.btn`
   ```html
   <!-- From: -->
   <button class="tool-check-btn">Check</button>
   
   <!-- To: -->
   <button class="btn btn--gold">Check</button>
   <!-- Or with data attrs: -->
   <button class="btn" data-action="check">Check</button>
   ```

3. **Remove old classes** from CSS after verification

**Estimated time:** 4-6 hours CSS + 2-3 hours HTML updates

---

## Grid System Consolidation

### Current Duplication (15+ grid classes)

| Class | Location | Properties |
|-------|----------|------------|
| `.tool-grid-2` | 1085-1090 | `grid-template-columns: repeat(2, ...)` |
| `.tool-grid-3` | 1091-1096 | `grid-template-columns: repeat(3, ...)` |
| `.diagram-grid-2` | 1445-1451 | `grid-template-columns: repeat(auto-fit, ...)` |
| `.diagram-grid` | 3575-3580 | Different minmax value |
| `.unit-grid` | 5520-5526 | Different spacing |
| `.guides-grid` | 5648-5653 | Aligned layout |
| `.unit-features` | 5650-5658 | 4 columns + arrows |
| `.making-grid` | 7975-7981 | 2 columns |
| `.equipment-row` | 3570-3575 | flex layout variant |
| `.safety-grid` | 3670-3676 | Auto-fill variant |
| `.practice-options` | 1980-1985 | minmax(180px, 1fr) |
| `.atomic-models-grid` | 3710-3716 | 4-column |
| `.unit-link-grid` | 5470-5476 | minmax(190px) |
| `.context-grid` | 1165-1171 | minmax(220px) |
| `.bond-compare` | 5935-5942 | 3-column |

### Recommended System

```css
/* Grid utility classes */
:root {
  /* Grid column counts */
  --grid-cols-1: 1;
  --grid-cols-2: 2;
  --grid-cols-3: 3;
  --grid-cols-4: 4;
  
  /* Grid gaps */
  --gap-xs: 0.45rem;
  --gap-sm: 0.55rem;
  --gap-md: 0.75rem;
  --gap-lg: 1rem;
  --gap-xl: 1.5rem;
}

/* Base grid utility */
.grid {
  display: grid;
  gap: var(--gap-md, 0.75rem);
}

/* Column modifiers */
.grid--cols-1 { grid-template-columns: 1fr; }
.grid--cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid--cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid--cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid--cols-auto-fit-190 { grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); }
.grid--cols-auto-fit-220 { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.grid--cols-auto-fit-280 { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }

/* Gap modifiers */
.grid--gap-xs { gap: var(--gap-xs); }
.grid--gap-sm { gap: var(--gap-sm); }
.grid--gap-md { gap: var(--gap-md); }
.grid--gap-lg { gap: var(--gap-lg); }

/* Responsive helpers */
@media (max-width: 900px) {
  .grid--cols-4 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 700px) {
  .grid--cols-2,
  .grid--cols-3,
  .grid--cols-4 {
    grid-template-columns: 1fr;
  }
}
```

### Mapping (Replace with utility classes)

```
.tool-grid-2           → .grid.grid--cols-2.grid--gap-md
.tool-grid-3           → .grid.grid--cols-3.grid--gap-md
.diagram-grid-2        → .grid.grid--cols-auto-fit-240.grid--gap-lg
.diagram-grid          → .grid.grid--cols-auto-fit-280.grid--gap-lg
.unit-grid             → .grid.grid--cols-auto-fit-280.grid--gap-sm
.guides-grid           → .grid.grid--cols-3.grid--gap-md
.practice-options      → .grid.grid--cols-auto-fit-180.grid--gap-md
.atomic-models-grid    → .grid.grid--cols-4.grid--gap-lg
```

---

## Form Input Consolidation

### Current Duplication (8+ variants)

**Lines 48-72:**
```css
.form-row input,
.form-row textarea { /* 6 common properties */ }
```

**Lines 1500-1510:**
```css
.tool-panel input[type="text"],
.tool-panel input[type="number"],
.tool-panel select { /* 9 similar properties */ }
```

**Lines 1900-1910:**
```css
.prob-input { /* ~8 properties, 95% duplicate */ }
```

**Lines 4050-4060:**
```css
.conv-input { /* ~7 properties, 95% duplicate */ }
```

**Lines 3960-3970:**
```css
.sigfig-input { /* ~7 properties */ }
```

### Consolidation

```css
:root {
  --input-padding: 0.7rem 0.85rem;
  --input-padding-form: 0.85rem 0.95rem;
  --input-border: 1px solid var(--border);
  --input-border-focus: #5eead4;
  --input-focus-shadow: 0 0 0 3px rgba(20, 184, 166, 0.12);
}

/* Universal input styling */
input,
select,
textarea {
  font: inherit;
}

/* Base input class */
.input {
  width: 100%;
  border: var(--input-border);
  border-radius: var(--radius-sm, 10px);
  background: #fff;
  color: var(--text);
  padding: var(--input-padding);
  outline: none;
  transition: border-color 0.2s;
}

.input:focus {
  border-color: var(--input-border-focus);
  box-shadow: var(--input-focus-shadow);
}

.input--form {
  padding: var(--input-padding-form);
}

/* Size variants */
.input--sm {
  padding: 0.55rem 0.7rem;
  font-size: 0.9rem;
}

.input--lg {
  padding: 0.9rem 1rem;
  font-size: 1rem;
}

/* Textarea variant */
textarea.input {
  min-height: 180px;
  resize: vertical;
}
```

### HTML Changes Needed

Find all input selectors and add `.input` class:
- `.form-row input` → add class="input input--form"
- `.tool-panel input[type="text"]` → add class="input"
- `.prob-input` → add class="input"
- `.conv-input` → add class="input"
- `.sigfig-input` → add class="input"
- `.cyl-select` → add class="input"

---

## State Pattern Consolidation

### Current State (Scattered - Lines 1585-1612, 1200-1250, 3420+)

**Problem:** Same success/error/warning colors defined separately in:
1. `.tool-feedback[data-state="correct"]`
2. `.choice-btn.correct`
3. `.feedback.correct`
4. `.bal-step-msg[data-state="ok"]`

### Solution: Single State System

```css
:root {
  /* Success state */
  --color-success: #166534;
  --bg-success: #ecfdf5;
  --bg-success-gradient: linear-gradient(135deg, #ecfdf5, #d1fae5);
  --border-success: #86efac;
  --shadow-success: 0 14px 28px rgba(22, 163, 74, 0.14);
  
  /* Error state */
  --color-error: #991b1b;
  --bg-error: #fef2f2;
  --bg-error-gradient: linear-gradient(135deg, #fef2f2, #ffedd5);
  --border-error: #fecaca;
  --shadow-error: 0 14px 28px rgba(234, 88, 12, 0.14);
  
  /* Warning state */
  --color-warn: #9a3412;
  --bg-warn: #fff7ed;
  --bg-warn-gradient: linear-gradient(135deg, #fff7ed, #fffbeb);
  --border-warn: #fdba74;
  --shadow-warn: 0 12px 24px rgba(234, 88, 12, 0.14);
  
  /* Info state */
  --color-info: #334155;
  --bg-info: #f8fafc;
  --border-info: #cbd5e1;
}

/* Single state class system */
[data-state="success"],
[data-state="correct"] {
  background: var(--bg-success-gradient);
  border-color: var(--border-success);
  color: var(--color-success);
  box-shadow: var(--shadow-success);
}

[data-state="error"],
[data-state="incorrect"] {
  background: var(--bg-error-gradient);
  border-color: var(--border-error);
  color: var(--color-error);
  box-shadow: var(--shadow-error);
}

[data-state="warning"],
[data-state="warn"] {
  background: var(--bg-warn-gradient);
  border-color: var(--border-warn);
  color: var(--color-warn);
  box-shadow: var(--shadow-warn);
}

[data-state="info"],
[data-state="pending"] {
  background: var(--bg-info);
  border-color: var(--border-info);
  color: var(--color-info);
}
```

### Remove These Duplicate Classes

Delete (or mark for removal):
- `.tool-feedback[data-state="correct"]` – Line 1594
- `.tool-feedback[data-state="incorrect"]` – Line 1601
- `.tool-feedback[data-state="pending"]` – Line 1588
- `.choice-btn.correct` – Line 1243
- `.choice-btn.incorrect` – Line 1254
- `.feedback.correct` – Line 1263
- `.feedback.incorrect` – Line 1270
- `.bal-step-msg[data-state="ok"]` – Line 3420
- `.bal-step-msg[data-state="warn"]` – Line 3424
- `.bal-step-msg[data-state="error"]` – Line 3428

---

## Media Query Consolidation

### Current: Multiple Breakpoints (Scattered)

**@media (max-width: 640px)** appears 8 times:
- Lines ~200
- Lines ~1780-1830
- Lines ~2150-2200
- Lines ~3450-3500
- Lines ~5700-5850
- Lines ~6200-6250
- Lines ~6900-7000
- Lines ~7800-8000+

### Solution: Consolidate at End of File

```css
/* ============================================================
   RESPONSIVE BREAKPOINTS - CONSOLIDATED
   ============================================================ */

/* Desktop: 900px max */
@media (max-width: 900px) {
  .tool-grid-3 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .atomic-models-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .gold-foil-notes { grid-template-columns: 1fr; }
  /* ... add all 900px rules here */
}

/* Tablet: 780px max */
@media (max-width: 780px) {
  .home-hero,
  .practice-panel { grid-template-columns: 1fr; }
  /* ... add all 780px rules here */
}

/* Mobile: 700px max */
@media (max-width: 700px) {
  .tool-grid-2,
  .tool-grid-3 { grid-template-columns: 1fr; }
  .tab-btn.tab-rich { display: flex; }
  /* ... consolidate all 700px rules */
}

/* Small Mobile: 640px max */
@media (max-width: 640px) {
  html { font-size: 17px; }
  .site-header-inner { position: relative; }
  .site-nav { display: none; }
  .container { width: min(var(--container), calc(100% - 1rem)); }
  .card { padding: 1.1rem; }
  /* ... consolidate ALL 640px rules here */
}

/* Tiny: 480px max */
@media (max-width: 480px) {
  .safety-ppe-grid { grid-template-columns: 1fr; }
  .tab-btn.tab-rich { flex-direction: column; }
}

/* Extra small: 420px max */
@media (max-width: 420px) {
  /* ... consolidate 420px rules */
}
```

---

## Color Theme System

### Current Duplication (25+ color variants)

**Orbital types** (Lines 5530-5546):
```css
.pt-color-s { background: #ccfbf1; border: 1px solid #5eead4; }
.pt-color-p { background: #d1fae5; border: 1px solid #6ee7b7; }
.pt-color-d { background: #fef3c7; border: 1px solid #fcd34d; }
.pt-color-f { background: #fce7f3; border: 1px solid #f9a8d4; }
```

**Bond types** (Lines 5935-5950):
```css
.bond-col.ionic { background: rgba(220, 38, 38, 0.06); border-color: rgba(220, 38, 38, 0.2); }
.bond-col.polar { background: rgba(15, 118, 110, 0.06); border-color: rgba(15, 118, 110, 0.2); }
.bond-col.nonpolar { background: rgba(5, 150, 105, 0.06); border-color: rgba(5, 150, 105, 0.2); }
```

### Solution: CSS Variables

```css
:root {
  /* Orbital types */
  --orbital-s: #ccfbf1;
  --orbital-s-border: #5eead4;
  --orbital-p: #d1fae5;
  --orbital-p-border: #6ee7b7;
  --orbital-d: #fef3c7;
  --orbital-d-border: #fcd34d;
  --orbital-f: #fce7f3;
  --orbital-f-border: #f9a8d4;
  
  /* Bond types */
  --bond-ionic-bg: rgba(220, 38, 38, 0.06);
  --bond-ionic-border: rgba(220, 38, 38, 0.2);
  --bond-ionic-text: #b91c1c;
  --bond-polar-bg: rgba(15, 118, 110, 0.06);
  --bond-polar-border: rgba(15, 118, 110, 0.2);
  --bond-polar-text: #0b6f63;
  --bond-nonpolar-bg: rgba(5, 150, 105, 0.06);
  --bond-nonpolar-border: rgba(5, 150, 105, 0.2);
  --bond-nonpolar-text: #047857;
}

/* Reduced duplication */
.pt-color-s { background: var(--orbital-s); border: 1px solid var(--orbital-s-border); }
.pt-color-p { background: var(--orbital-p); border: 1px solid var(--orbital-p-border); }

.bond-col.ionic { background: var(--bond-ionic-bg); border-color: var(--bond-ionic-border); }
.bond-col.ionic .bc-title { color: var(--bond-ionic-text); }
```

---

## Card/Panel System

### Current: 10+ variants

Replace all with:
```css
.card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 1.5rem;
}

.card--compact { padding: 1rem; }
.card--spacious { padding: 2rem; }
.card--elevated { box-shadow: var(--shadow-md); }
.card--outline { background: transparent; }
.card--alt { background: rgba(255, 255, 255, 0.82); border-color: rgba(148, 163, 184, 0.22); }

/* Semantic variants */
.card--problem { padding: 1.2rem; margin-bottom: 1rem; }
.card--tool { background: rgba(255, 255, 255, 0.82); }
.card--guide { display: flex; flex-direction: column; }
```

---

## Audit Checklist

Before committing changes:

- [ ] Run visual regression tests on all 15 unit pages
- [ ] Test all button states (hover, disabled, active, correct, incorrect)
- [ ] Test all form inputs on contact/practice pages
- [ ] Verify tool functionality (cylinder, balance, VSEPR, etc.)
- [ ] Test responsive layouts at: 480px, 640px, 700px, 780px, 900px
- [ ] Run accessibility audit (color contrast, focus states)
- [ ] Check practice engine feedback rendering
- [ ] Verify all choice button states work correctly
- [ ] Test media query consolidation didn't break layouts
- [ ] Validate CSS with W3C validator
- [ ] Measure file size reduction (target: 30-45KB)

---

## Tools & Scripts

### Script to Find Duplicate Properties

```bash
# Find all CSS color values to identify duplicates
grep -o '#[0-9a-fA-F]\{6\}' chem.css | sort | uniq -c | sort -rn

# Find all box-shadow values
grep 'box-shadow:' chem.css | sort | uniq

# Find all border-radius values
grep 'border-radius:' chem.css | sort | uniq

# Find class definitions
grep '^\.' chem.css | wc -l
```

### Recommended Tools
- **StyleStats**: Analyze CSS complexity
- **CSS Lint**: Find problematic patterns
- **PurgeCSS**: Identify unused styles
- **PostCSS plugins**: Automate variable replacement

---

**Total Estimated Effort:** 8-12 development hours
**Testing Time:** 4-6 hours
**Estimated Savings:** 30-45KB (18-26% reduction)
