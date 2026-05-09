/* ── Unit 09 Problem Bank — Stoichiometry
   81 problems total: 40 calc | 25 concept | 16 multi
   Updates: Streamlined factor-label solutions and standardized molar mass precision.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

/* ════════════ CALCULATION — Mass & Mole Stoichiometry (40) ════════════ */
{id:'p01',type:'calc',tag:'g → g', q:'CH₄ + 2 O₂ → CO₂ + 2 H₂O. Grams of CO₂ from 32.0 g CH₄? (MM: CH₄=16.04, CO₂=44.01)', answer:87.8, unit:'g CO₂', tolerance:0.6, solution:'<p>32.0g CH₄ × (1 mol/16.04g) × (1 mol CO₂/1 mol CH₄) × (44.01g/mol) = <strong>87.8 g CO₂</strong>.</p>'},
{id:'p02',type:'calc',tag:'g → g', q:'N₂ + 3 H₂ → 2 NH₃. Grams of NH₃ from 14.0 g N₂? (MM: N₂=28.01, NH₃=17.03)', answer:17.0, unit:'g NH₃', tolerance:0.3, solution:'<p>14.0g N₂ × (1 mol/28.01g) × (2 mol NH₃/1 mol N₂) × (17.03g/mol) = <strong>17.0 g NH₃</strong>.</p>'},
{id:'p03',type:'calc',tag:'g → g', q:'2 H₂ + O₂ → 2 H₂O. Grams of H₂O from 4.00 g H₂? (MM: H₂=2.016, H₂O=18.02)', answer:35.7, unit:'g H₂O', tolerance:0.5, solution:'<p>4.00g H₂ × (1 mol/2.016g) × (1/1 ratio) × (18.02g/mol) = <strong>35.7 g H₂O</strong>.</p>'},
{id:'p08',type:'calc',tag:'g → g', q:'4 Al + 3 O₂ → 2 Al₂O₃. Grams of Al₂O₃ from 27.0 g Al? (MM: Al=26.98, Al₂O₃=101.96)', answer:51.0, unit:'g Al₂O₃', tolerance:0.5, solution:'<p>27.0g Al × (1 mol/26.98g) × (2 mol Al₂O₃/4 mol Al) × (101.96g/mol) = <strong>51.0 g Al₂O₃</strong>.</p>'},
{id:'p10',type:'calc',tag:'g → g', q:'C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O. Grams of CO₂ from 36.0 g glucose? (MM: 180.2)', answer:52.8, unit:'g CO₂', tolerance:0.5, solution:'<p>36.0g glucose × (1/180.2) × (6/1 ratio) × 44.01 = <strong>52.8 g CO₂</strong>.</p>'},

/* ════════════ CONCEPT — Laws & Ratios (25) ════════════ */
{id:'p41',type:'concept',tag:'Mole Ratio', q:'In 2 H₂ + O₂ → 2 H₂O, what is the mole ratio of H₂ to H₂O?', choices:['1:1','2:1','1:2','2:3'], correct:0, solution:'<p>The coefficients for both H₂ and H₂O are 2, which simplifies to a <strong>1:1 ratio</strong>.</p>'},
{id:'p42',type:'concept',tag:'Limiting Reactant', q:'The reactant that is completely consumed first is the:', choices:['Excess reactant','Limiting reactant','Catalyst','Theoretical yield'], correct:1, solution:'<p>The <strong>limiting reactant</strong> determines how much product can be formed.</p>'},
{id:'p45',type:'concept',tag:'Yield', q:'Which yield is determined by performing the experiment in a lab?', choices:['Theoretical yield','Actual yield','Percent yield','Stoichiometric yield'], correct:1, solution:'<p>The <strong>actual yield</strong> is the measured amount obtained from the real experiment.</p>'},

/* ════════════ MULTI-STEP — Limiting & Percent Yield (16) ════════════ */
{id:'p66',type:'multi',tag:'Percent Yield', q:'Theoretical yield is 50.0 g, but only 45.0 g is produced. What is the percent yield?', answer:90.0, unit:'%', tolerance:0.1, solution:'<p>(Actual / Theoretical) × 100 = (45.0 / 50.0) × 100 = <strong>90.0%</strong>.</p>'},
{id:'p79',type:'multi',tag:'Airbags', q:'2 NaN₃ → 2 Na + 3 N₂. Grams of NaN₃ to produce 56.0 g N₂? (MM: NaN₃=65.01, N₂=28.01)', answer:86.7, unit:'g NaN₃', tolerance:0.8, solution:'<p>56.0g N₂ × (1/28.01) × (2/3 ratio) × 65.01 = <strong>86.7 g NaN₃</strong>.</p>'},
{id:'p80',type:'multi',tag:'Experiment', q:'Need 1.00 mol CO₂ from CH₄ + 2 O₂ → CO₂ + 2 H₂O. Grams of CH₄ required? (MM: 16.04)', answer:16.04, unit:'g CH₄', tolerance:0.15, solution:'<p>Mole ratio is 1:1. 1.00 mol CH₄ × 16.04 g/mol = <strong>16.04 g CH₄</strong>.</p>'}

];