/* ── Unit 14 Problem Bank — Chemical Equilibrium
   81 problems total: 40 calc | 28 concept | 13 multi
   Updates: Standardized K expression notation and streamlined ICE table solutions.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

/* ══════════════ CALCULATION — K Expressions & Math (40) ══════════════ */
{id:'p01', type:'calc', tag:'K Expression', q:'Correct K expression for: 2NO(g) + O₂(g) ⇌ 2NO₂(g)?', choices:['[NO₂]/([NO][O₂])','[NO₂]²/([NO]²[O₂])','[NO]²[O₂]/[NO₂]²','[NO₂]²/[NO][O₂]'], correct:1, solution:'<p>K = [Products] / [Reactants] raised to coefficients. <strong>K = [NO₂]² / ([NO]²[O₂])</strong></p>'},
{id:'p02', type:'calc', tag:'K Expression', q:'Correct K expression for: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)?', choices:['[NH₃]²/([N₂][H₂]³)','([N₂][H₂]³)/[NH₃]²','[NH₃]/([N₂][H₂])','[NH₃]²/[N₂][H₂]'], correct:0, solution:'<p><strong>K = [NH₃]² / ([N₂][H₂]³)</strong></p>'},
{id:'p03', type:'calc', tag:'Heterogeneous', q:'Correct K for: CaCO₃(s) ⇌ CaO(s) + CO₂(g)?', choices:['[CaO][CO₂]/[CaCO₃]','[CO₂]','1/[CO₂]','[CaO]/[CaCO₃]'], correct:1, solution:'<p>Pure solids and liquids are <strong>excluded</strong> from K expressions. Only gases and aqueous species remain.</p>'},
{id:'p15', type:'calc', tag:'K Math', q:'If K=0.040 for A ⇌ B, what is K for B ⇌ A?', answer:25.0, tolerance:0.1, solution:'<p>K_rev = 1 / K_fwd = 1 / 0.040 = <strong>25.0</strong></p>'},
{id:'p16', type:'calc', tag:'K Math', q:'If K=10 for A ⇌ B, what is K for 2A ⇌ 2B?', answer:100, tolerance:0, solution:'<p>K_new = (K_old)^power = 10² = <strong>100</strong></p>'},
{id:'p25', type:'calc', tag:'K Value', q:'Find K if [H₂]=0.1, [I₂]=0.1, [HI]=0.8 for H₂ + I₂ ⇌ 2HI.', answer:64, tolerance:1, solution:'<p>K = [HI]² / ([H₂][I₂]) = (0.8)² / (0.1 × 0.1) = 0.64 / 0.01 = <strong>64</strong></p>'},

/* ══════════════ CONCEPT — Le Chatelier’s & Theory (28) ══════════════ */
{id:'p41', type:'concept', tag:'Le Chatelier', q:'N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + heat. Increase temp shifts reaction:', choices:['Right','Left','No change','To solid phase'], correct:1, solution:'<p>Exothermic reactions shift <strong>Left</strong> (toward reactants) when heat is added.</p>'},
{id:'p42', type:'concept', tag:'Le Chatelier', q:'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), increasing pressure shifts reaction:', choices:['Right','Left','No change','Up'], correct:0, solution:'<p>Increased pressure shifts toward the side with <strong>fewer moles of gas</strong> (2 vs 4).</p>'},
{id:'p43', type:'concept', tag:'Le Chatelier', q:'Adding a catalyst to a system at equilibrium:', choices:['Shifts right','Shifts left','Increases K','No shift, just faster rate'], correct:3, solution:'<p>A catalyst lowers activation energy for <strong>both</strong> directions equally; it does not change the equilibrium position.</p>'},
{id:'p45', type:'concept', tag:'Theory', q:'If K >> 1, the reaction at equilibrium:', choices:['Favors products','Favors reactants','Has equal amounts','Is very slow'], correct:0, solution:'<p>A large K means the numerator (products) is much larger than the denominator.</p>'},

/* ══════════════ MULTI-STEP — ICE Tables & Q (13) ══════════════ */
{id:'p69', type:'multi', tag:'Q vs K', q:'If Q=0.5 and K=2.0, the reaction will:', choices:['Shift Right','Shift Left','Stay at equilibrium','Stop'], correct:0, solution:'<p>Q < K, so the system must produce more products to reach equilibrium.</p>'},
{id:'p80', type:'multi', tag:'ICE', q:'2HI ⇌ H₂ + I₂, K=0.02. Initial [HI]=1.0 M. Find [H₂] at equilibrium.', answer:0.11, unit:'M', tolerance:0.02, solution:'<p>K = x² / (1-2x)². √0.02 = x/(1-2x). 0.141 = x/(1-2x). x = 0.141 - 0.282x. 1.282x = 0.141. x = <strong>0.11 M</strong></p>'},
{id:'p81', type:'multi', tag:'Solubility', q:'Ksp for AgCl is 1.8e-10. Solubility (s) in mol/L?', answer:1.34e-5, unit:'M', tolerance:1e-7, solution:'<p>Ksp = s². s = √(1.8 × 10⁻¹⁰) = <strong>1.34 × 10⁻⁵ M</strong></p>'}

];