/* ── Unit 11 Problem Bank — Thermochemistry
   84 problems total: 27 calc | 35 concept | 22 multi
   Updates: Standardized to single-line objects, streamlined Hess's Law logic.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

/* ══════════════ CALCULATION — Energy & Calorimetry (27) ══════════════ */
{id:'p01', type:'calc', tag:'Conversion', q:'Convert 2500 J to kJ.', answer:2.5, unit:'kJ', tolerance:0.01, solution:'<p>2500 J ÷ 1000 = <strong>2.50 kJ</strong></p>'},
{id:'p02', type:'calc', tag:'Conversion', q:'Convert 3.50 kJ to J.', answer:3500, unit:'J', tolerance:5, solution:'<p>3.50 kJ × 1000 = <strong>3500 J</strong></p>'},
{id:'p03', type:'calc', tag:'Conversion', q:'Convert 125 cal to J. (1 cal = 4.184 J)', answer:523, unit:'J', tolerance:2, solution:'<p>125 × 4.184 = <strong>523 J</strong></p>'},
{id:'p04', type:'calc', tag:'Conversion', q:'Convert 4184 J to food Calories (Cal). (1 Cal = 4184 J)', answer:1.00, unit:'Cal', tolerance:0.01, solution:'<p>4184 J ÷ 4184 = <strong>1.00 Cal</strong></p>'},
{id:'p05', type:'calc', tag:'Specific Heat', q:'Heat (J) to raise 10.0 g water from 20.0°C to 30.0°C? (c = 4.184 J/g°C)', answer:418.4, unit:'J', tolerance:1.0, solution:'<p>q = mcΔT = 10.0 × 4.184 × 10.0 = <strong>418.4 J</strong></p>'},
{id:'p06', type:'calc', tag:'Specific Heat', q:'Specific heat (J/g°C) if 204 J raises 15.0 g of metal by 30.0°C?', answer:0.453, unit:'J/g°C', tolerance:0.005, solution:'<p>c = q / (mΔT) = 204 / (15.0 × 30.0) = <strong>0.453 J/g°C</strong></p>'},
{id:'p07', type:'calc', tag:'Specific Heat', q:'Final temp (°C) if 500 J is added to 20.0 g water at 25.0°C?', answer:31.0, unit:'°C', tolerance:0.2, solution:'<p>ΔT = q/(mc) = 500/(20.0×4.184) = 5.97°C. T_final = 25.0 + 5.97 = <strong>31.0°C</strong></p>'},
{id:'p08', type:'calc', tag:'Phase Change', q:'Heat (kJ) to melt 50.0 g ice at 0°C? (ΔH_fus = 334 J/g)', answer:16.7, unit:'kJ', tolerance:0.2, solution:'<p>q = mΔH = 50.0 × 334 = 16700 J = <strong>16.7 kJ</strong></p>'},
{id:'p09', type:'calc', tag:'Phase Change', q:'Heat (kJ) to vaporize 2.00 mol water? (ΔH_vap = 40.7 kJ/mol)', answer:81.4, unit:'kJ', tolerance:0.5, solution:'<p>q = nΔH = 2.00 × 40.7 = <strong>81.4 kJ</strong></p>'},
{id:'p10', type:'calc', tag:'Specific Heat', q:'Mass (g) of iron (c=0.45) that releases 180 J when cooling by 10°C?', answer:40.0, unit:'g', tolerance:1.0, solution:'<p>m = q / (cΔT) = 180 / (0.45 × 10) = <strong>40.0 g</strong></p>'},

/* ══════════════ CONCEPT — Laws & Definitions (35) ══════════════ */
{id:'p28', type:'concept', tag:'Theory', q:'Which is a measure of average kinetic energy?', choices:['Heat','Temperature','Enthalpy','Entropy'], correct:1, solution:'<p>Temperature is defined as the average kinetic energy of particles in a sample.</p>'},
{id:'p29', type:'concept', tag:'Theory', q:'In an exothermic reaction, the system ____ heat and the surroundings get ____.', choices:['Releases / Warmer','Absorbs / Colder','Releases / Colder','Absorbs / Warmer'], correct:0, solution:'<p>Exo = "exit". Heat leaves the system, raising the temperature of the surroundings.</p>'},
{id:'p30', type:'concept', tag:'Theory', q:'The First Law of Thermodynamics states:', choices:['Entropy increases','Energy is conserved','Absolute zero is unreachable','Heat flows cold to hot'], correct:1, solution:'<p>Energy cannot be created or destroyed, only transferred or transformed.</p>'},
{id:'p31', type:'concept', tag:'Theory', q:'Breaking a chemical bond is always:', choices:['Exothermic','Endothermic','Spontaneous','Fast'], correct:1, solution:'<p>Energy must be <strong>absorbed</strong> to overcome the attraction between atoms.</p>'},
{id:'p32', type:'concept', tag:'Theory', q:'For an endothermic reaction, ΔH is:', choices:['Positive','Negative','Zero','Variable'], correct:0, solution:'<p>Endothermic reactions absorb energy, so the final enthalpy is higher than the initial (positive ΔH).</p>'},
{id:'p33', type:'concept', tag:'Theory', q:'Which phase change is exothermic?', choices:['Melting','Boiling','Sublimation','Freezing'], correct:3, solution:'<p>Freezing releases energy as particles slow down to form a solid lattice.</p>'},

/* ══════════════ MULTI-STEP — Hess’s Law & Stoich (22) ══════════════ */
{id:'p63', type:'multi', tag:'Hess Law', q:'Find ΔH for A→C if A→B is +20 kJ and B→C is -60 kJ.', answer:-40, unit:'kJ', tolerance:1, solution:'<p>Add the steps: +20 + (-60) = <strong>-40 kJ</strong></p>'},
{id:'p64', type:'multi', tag:'Hess Law', q:'Find ΔH for 2A→2C if A→C is -40 kJ.', answer:-80, unit:'kJ', tolerance:1, solution:'<p>If you double the coefficients, you must double the ΔH: 2 × -40 = <strong>-80 kJ</strong></p>'},
{id:'p65', type:'multi', tag:'Hess Law', q:'Find ΔH for C→A if A→C is -40 kJ.', answer:40, unit:'kJ', tolerance:1, solution:'<p>Reversing a reaction flips the sign of ΔH.</p>'},
{id:'p83', type:'multi', tag:'Thermo Stoich', q:'Burning propane (M=44.0) has ΔH = -2220 kJ/mol. Heat released by 88.0 g?', answer:4440, unit:'kJ', tolerance:5, solution:'<p>88.0 g = 2.00 mol. 2.00 × 2220 = <strong>4440 kJ</strong></p>'},
{id:'p84', type:'multi', tag:'Formation', q:'ΔH_rxn = ΣΔH_f(products) - ΣΔH_f(reactants). What is ΔH_f for O₂(g)?', answer:0, unit:'kJ/mol', tolerance:0.01, solution:'<p>The enthalpy of formation for any element in its standard state is <strong>zero</strong>.</p>'}

];