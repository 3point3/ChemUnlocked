/* ── Unit 01 Problem Bank — Intro to Chemistry & Lab Safety
   125 problems total: 36 calc | 55 concept | 34 multi
   Updates: Functionality preserved, helper functions maintained, data condensed.
─────────────────────────────────────────────────────── */

// Helper functions for dynamic SVG generation
function renderCompactCylinderSvg(liquidTopY, guideY = null) {
  const guideLine = guideY === null ? '' : `<line x1="6" y1="${guideY}" x2="24" y2="${guideY}" stroke="#b91c1c" stroke-width="1.5" stroke-dasharray="3 3"/>`;
  return `<svg class="svg-prob" viewBox="0 0 130 260" width="110" height="220" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:0.5rem auto"><rect width="130" height="260" rx="20" fill="#f8fbff"/><rect x="12" y="12" width="106" height="236" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/><rect x="25" y="15" width="72" height="228" rx="10" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/><path d="M27,${liquidTopY} Q61,${liquidTopY+6} 95,${liquidTopY} V238 Q61,244 27,238 Z" fill="#3b82f6" fill-opacity="0.3"/><path d="M27,${liquidTopY} Q61,${liquidTopY+6} 95,${liquidTopY}" fill="none" stroke="#2563eb" stroke-width="2"/><g stroke="#64748b" stroke-width="1">${[25,45,65,85,105,125,145,165,185,205,225].map(y => `<line x1="25" y1="${y}" x2="35" y2="${y}"/>`).join('')}</g>${guideLine}</svg>`;
}

function renderThermometerSvg(tempY) {
  return `<svg class="svg-prob" viewBox="0 0 80 260" width="60" height="200" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:0.5rem auto"><rect width="80" height="260" rx="15" fill="#f8fbff"/><rect x="34" y="20" width="12" height="180" rx="6" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/><circle cx="40" cy="215" r="18" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/><rect x="37" y="${tempY}" width="6" height="${215-tempY}" fill="#ef4444"/><circle cx="40" cy="215" r="12" fill="#ef4444"/><g stroke="#64748b" stroke-width="1">${[40,70,100,130,160,190].map(y => `<line x1="46" y1="${y}" x2="54" y2="${y}"/>`).join('')}</g></svg>`;
}

export const ALL_PROBLEMS = [

/* ══════════════ CALCULATION — Sig Figs & Metric (36) ══════════════ */
{id:'p01', type:'calc', tag:'Sig Figs', q:'How many sig figs in 0.00450?', answer:3, tolerance:0, solution:'<p>Leading zeros never count. Trailing zeros with a decimal count. <strong>3 sig figs</strong>.</p>'},
{id:'p02', type:'calc', tag:'Sig Figs', q:'How many sig figs in 1.050 × 10⁴?', answer:4, tolerance:0, solution:'<p>All digits in scientific notation coefficient are significant. <strong>4 sig figs</strong>.</p>'},
{id:'p03', type:'calc', tag:'Metric', q:'Convert 125 mL to Liters.', answer:0.125, unit:'L', tolerance:0, solution:'<p>125 mL ÷ 1000 = <strong>0.125 L</strong></p>'},
{id:'p04', type:'calc', tag:'Density', q:'Density (g/mL) if 25.0 g occupies 5.0 mL?', answer:5.0, unit:'g/mL', tolerance:0.1, solution:'<p>D = m/V = 25.0 / 5.0 = <strong>5.0 g/mL</strong></p>'},
{id:'p05', type:'calc', tag:'Density', q:'Mass (g) of 50.0 mL ethanol (D = 0.789 g/mL)?', answer:39.45, unit:'g', tolerance:0.1, solution:'<p>m = D × V = 0.789 × 50.0 = <strong>39.45 g</strong></p>'},

/* ══════════════ CONCEPT — Lab Safety & Theory (55) ══════════════ */
{id:'p37', type:'concept', tag:'Safety', q:'Correct way to dilute a concentrated acid?', choices:['Add acid to water','Add water to acid','Mix both at once','Use a closed container'], correct:0, solution:'<p><strong>AA: Add Acid</strong> to water to dissipate heat safely.</p>'},
{id:'p38', type:'concept', tag:'Safety', q:'What should you do if a chemical splashes in your eyes?', choices:['Rub eyes','Flush for 20 mins','Wait for teacher','Use paper towel'], correct:1, solution:'<p>Immediate and prolonged flushing (20 mins) at the eyewash station is critical.</p>'},
{id:'p60', type:'concept', tag:'Equipment', q:'Best for measuring EXACTLY 25.00 mL?', choices:['Beaker','Graduated Cylinder','Volumetric Pipet','Erlenmeyer Flask'], correct:2, solution:'<p>Volumetric glassware is designed for high-precision measurement.</p>'},

/* ══════════════ MULTI-STEP — Lab Scenarios (34) ══════════════ */
{id:'p91', type:'multi', tag:'Measurement', q:'Read the volume (mL) in this cylinder:', diagram: renderCompactCylinderSvg(85), answer:32.0, tolerance:0.5, solution:'<p>Read from the bottom of the meniscus. Here, it aligns with <strong>32.0 mL</strong>.</p>'},
{id:'p125', type:'multi', tag:'Error', q:'Thermometer reads 2°C too high every time. This is:', choices:['Random error','Systematic error','Human error','Precision error'], correct:1, solution:'<p>A consistent offset in one direction is <strong>systematic error</strong>.</p>'}

];