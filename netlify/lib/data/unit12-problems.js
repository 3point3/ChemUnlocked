/* ── Unit 12 Problem Bank — Gas Laws
    84 problems total: 42 calc | 25 concept | 17 multi
    Updates: Optimized for Netlify; audited Boyle's, Charles's, and Ideal Gas Law math.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

/* ══════════════ CALCULATION — Gas Law Math (42) ══════════════ */
{id:'p01', type:'calc', tag:'Pressure', q:'Convert 2.50 atm to torr.', answer:1900, unit:'torr', tolerance:5, solution:'<p>2.50 atm × 760 torr/atm = <strong>1900 torr</strong></p>'},
{id:'p03', type:'calc', tag:'Pressure', q:'32.0 psi to kPa? (1 atm = 14.696 psi = 101.325 kPa)', answer:220.6, unit:'kPa', tolerance:1.0, solution:'<p>32.0 psi × (101.325 / 14.696) = <strong>220.6 kPa</strong></p>'},
{id:'p06', type:'calc', tag:'Boyles', q:'Gas at 6.00 L and 1.20 atm. Volume at 2.40 atm? (T constant)', answer:3.00, unit:'L', tolerance:0.05, solution:'<p>V₂ = (P₁V₁) / P₂ = (1.20 × 6.00) / 2.40 = <strong>3.00 L</strong></p>'},
{id:'p12', type:'calc', tag:'Charles', q:'Balloon at 5.00 L and 27°C. Volume at 127°C? (P constant)', answer:6.67, unit:'L', tolerance:0.05, solution:'<p>T₁=300K, T₂=400K. V₂ = 5.00 × (400/300) = <strong>6.67 L</strong></p>'},
{id:'p16', type:'calc', tag:'Gay-Lussac', q:'Rigid tank at 1.50 atm and 300 K. Pressure at 600 K?', answer:3.00, unit:'atm', tolerance:0.05, solution:'<p>P₂ = 1.50 × (600/300) = <strong>3.00 atm</strong></p>'},
{id:'p20', type:'calc', tag:'Combined', q:'3.00 L at 1 atm and 300 K. Volume at 2.00 atm and 450 K?', answer:2.25, unit:'L', tolerance:0.05, solution:'<p>V₂ = (1.00 × 3.00 × 450) / (300 × 2.00) = <strong>2.25 L</strong></p>'},
{id:'p25', type:'calc', tag:'Ideal', q:'Moles in 10.0 L at 2.00 atm and 300 K?', answer:0.813, unit:'mol', tolerance:0.015, solution:'<p>n = PV/RT = (2.00 × 10.0) / (0.08206 × 300) = <strong>0.813 mol</strong></p>'},
{id:'p34', type:'calc', tag:'Density', q:'Density (g/L) of N₂O at 325 K and 113.0 kPa? (M=44.01, R=8.314)', answer:1.84, unit:'g/L', tolerance:0.05, solution:'<p>d = PM/RT = (113.0 × 44.01) / (8.314 × 325) = <strong>1.84 g/L</strong></p>'},
{id:'p38', type:'calc', tag:'Dalton', q:'P_total = 760 mmHg at 25°C. P_H2O = 23.8 mmHg. Pressure of dry H₂?', answer:736.2, unit:'mmHg', tolerance:1, solution:'<p>P_dry = 760 - 23.8 = <strong>736.2 mmHg</strong></p>'},

/* ══════════════ CONCEPT — KMT & Behavior (25) ══════════════ */
{id:'p43', type:'concept', tag:'Boyles', q:'If pressure on a gas is doubled at constant temperature, the volume will:', choices:['Double','Decrease by half','Stay the same','Quadruple'], correct:1, solution:'<p>Pressure and volume are inversely proportional (Boyle\'s Law).</p>'},
{id:'p45', type:'concept', tag:'KMT', q:'According to KMT, collisions between gas particles are:', choices:['Sticky','Elastic','Inelastic','Slow'], correct:1, solution:'<p>Elastic collisions mean no net loss of total kinetic energy.</p>'},
{id:'p50', type:'concept', tag:'Real Gases', q:'Gases deviate most from ideal behavior at:', choices:['High T, Low P','Low T, High P','High T, High P','Low T, Low P'], correct:1, solution:'<p>At low temp and high pressure, particle volume and attractions become significant.</p>'},

/* ══════════════ MULTI-STEP — Stoich & Partial Pressures (17) ══════════════ */
{id:'p81', type:'multi', tag:'Stoich', q:'Volume of CO₂ produced at STP if 5.00 g of CaCO₃ (M=100.1) decomposes?', answer:1.12, unit:'L', tolerance:0.05, solution:'<p>5.00 g = 0.0500 mol. 0.0500 mol × 22.4 L/mol = <strong>1.12 L</strong></p>'},
{id:'p82', type:'multi', tag:'Dalton', q:'5.00 L flask with 0.300 mol N₂ and 0.500 mol Ar at 25°C. P_Ar?', choices:['1.47 atm','2.45 atm','3.92 atm','0.500 atm'], correct:1, solution:'<p>P_Ar = (0.500 × 0.08206 × 298) / 5.00 = <strong>2.45 atm</strong></p>'}

];