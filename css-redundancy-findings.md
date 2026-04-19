# CSS Redundancy Findings

## Resolved

- [03_Learn_Electron_Configuration.html](03_Learn_Electron_Configuration.html): removed duplicated `.calc-grid`, `.calc-group`, and `.calc-result` rules because shared definitions already exist in [chem.css](chem.css).
- [09_Learn_Chemistry_Bonding.html](09_Learn_Chemistry_Bonding.html): replaced repeated inline `min-width` and `max-width` values on `.lewis-box` examples with reusable page-level modifier classes.

## Remaining audit targets

- [03_Learn_Electron_Configuration.html](03_Learn_Electron_Configuration.html): still contains many inline style attributes for labels, swatches, layout wrappers, and result boxes. These should be converted to classes if this page is audited further.
- [09_Learn_Chemistry_Bonding.html](09_Learn_Chemistry_Bonding.html): still contains many inline style attributes for centered wrappers, explanatory text, comparison cards, and tool sections. The repeated `text-align:center`, spacing, and card-box declarations are the main consolidation targets.
- [04_premium.html](04_premium.html): premium page still has repeated inline layout styles for the top controls area and footer CTA, plus inline styled loading and error messages injected by script.
- [05_premium.html](05_premium.html): same pattern as [04_premium.html](04_premium.html): repeated inline control-row layout and inline styled status/error markup.
- [index backup pre edit.html](index%20backup%20pre%20edit.html): backup file still duplicates large sections of hero, units-card, guide-card, and responsive CSS now represented in [chem.css](chem.css). If the backup remains in scope for audits, treat it as duplicated style inventory rather than a primary source.
- [practice-teaser.css](practice-teaser.css): overlaps conceptually with practice-page layout patterns in [chem.css](chem.css), especially around filter/control sections and card-style containers. Review for shared selectors that can be unified without breaking teaser-specific presentation.