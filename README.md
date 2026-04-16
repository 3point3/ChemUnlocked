# ChemUnlocked membership starter

## Put these files here

### Public site root
- `practice-teaser.js`
- `practice-teaser.css`
- `templates/04_practice.html` becomes your new `04_practice.html`

### Netlify server-side
- `netlify/functions/create-checkout-session.js`
- `netlify/functions/create-customer-portal-session.js`
- `netlify/functions/stripe-webhook.js`
- `netlify/functions/get-premium-problem-set.js`
- `netlify/lib/premium-practice-engine.js`
- `netlify/lib/access.js`
- `netlify/lib/data/unit04-problems.js`

## How to migrate each unit
1. Run the extractor script against your current `XX_practice.html`.
2. Move the extracted bank into `netlify/lib/data/unitXX-problems.js`.
3. Replace the public `XX_practice.html` with the teaser template.
4. Edit `window.practiceTeaserConfig` for that unit.
5. Add the unit to `unitLoaders` in `get-premium-problem-set.js`.

## Example extractor command
node scripts/extract-problem-bank.js 04_practice.html 04

## What to edit next
- Replace checkout and portal stubs with real Stripe SDK code.
- Replace `access.js` with real subscription verification.
- Add all 15 unit data files.
- Add all 15 units to `unitLoaders`.
