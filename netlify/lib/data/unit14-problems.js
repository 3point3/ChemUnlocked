/* ── Unit 14 Problem Bank — Chemical Equilibrium
   171 problems total: 76 calc | 62 concept | 33 multi (81 original + 90 added)
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  // ─── CALCULATION (40 problems) ────────────────────────────────────────

  // Writing K expressions
  {id:'p01', difficulty:'easy', type:'calc', tag:'K Expression', q:'Write the equilibrium constant expression K for: 2NO(g) + O2(g) ⇌ 2NO2(g). Which answer is correct?',
    choices:['K = [NO2] / ([NO][O2])','K = [NO2]^2 / ([NO]^2[O2])','K = [NO]^2[O2] / [NO2]^2','K = [NO2]^2 / [NO][O2]'],
    correct:1,
    solution:'<p>Write products over reactants, and raise each concentration to its coefficient.</p><p>K = <span class="chem-frac"><span class="chem-frac-n">[NO2]^2</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">([NO]^2[O2])</span></span></p>'},

  {id:'p02', difficulty:'easy', type:'calc', tag:'K Expression', q:'Which is the correct K expression for: N2(g) + 3H2(g) ⇌ 2NH3(g)?',
    choices:['K = [NH3]^2 / ([N2][H2]^3)','K = [NH3] / ([N2][H2])','K = 2[NH3] / ([N2] + 3[H2])','K = [N2][H2]^3 / [NH3]^2'],
    correct:0,
    solution:'<p>K = <span class="chem-frac"><span class="chem-frac-n">[NH3]^2</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">([N2][H2]^3)</span></span><br>Coefficients become exponents; products in numerator, reactants in denominator.</p>'},

  {id:'p03', difficulty:'easy', type:'calc', tag:'K Expression', q:'For the reaction CaCO3(s) ⇌ CaO(s) + CO2(g), which K expression is correct?',
    choices:['K = [CaO][CO2] / [CaCO3]','K = [CO2]','K = [CO2] / [CaCO3]','K = [CaCO3] / [CaO]'],
    correct:1,
    solution:'<p>Pure solids are omitted from the K expression, so both CaCO3(s) and CaO(s) are left out.</p><p><strong>K = [CO2]</strong></p>'},

  {id:'p04', difficulty:'easy', type:'calc', tag:'K Expression', q:'For C(s) + O2(g) ⇌ CO2(g), which K expression is correct?',
    choices:['K = [CO2] / ([C][O2])','K = [C][O2] / [CO2]','K = [CO2] / [O2]','K = [O2] / [CO2]'],
    correct:2,
    solution:'<p>C(s) is a pure solid — it is omitted from K.<br><strong>K = <span class="chem-frac"><span class="chem-frac-n">[CO2]</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">[O2]</span></span></strong></p>'},

  // Calculating K from equilibrium concentrations
  {id:'p05', difficulty:'easy', type:'calc', tag:'Calculating K', q:'At equilibrium: [NH3] = 0.250 M, [N2] = 0.150 M, [H2] = 0.300 M for N2 + 3H2 ⇌ 2NH3. What is K?', answer:15.43, unit:'', tolerance:0.3,
    solution:'<p>K = <span class="chem-frac"><span class="chem-frac-n">[NH3]^2</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">([N2][H2]^3)</span></span><br>K = <span class="chem-frac"><span class="chem-frac-n">(0.250)^2</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">(0.150 × 0.300^3)</span></span><br>K = <span class="chem-frac"><span class="chem-frac-n">0.0625</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">(0.150 × 0.0270)</span></span><br>K = <span class="chem-frac"><span class="chem-frac-n">0.0625</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">0.004050</span></span> = <strong>15.43</strong></p>'},

  {id:'p06', difficulty:'easy', type:'calc', tag:'Calculating K', q:'For H2(g) + I2(g) ⇌ 2HI(g), at equilibrium: [H2] = 0.220 M, [I2] = 0.220 M, [HI] = 1.54 M. Calculate K.', answer:49.0, unit:'', tolerance:0.5,
    solution:'<p>K = <span class="chem-frac"><span class="chem-frac-n">[HI]^2</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">([H2][I2])</span></span><br>K = <span class="chem-frac"><span class="chem-frac-n">(1.54)^2</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">(0.220 × 0.220)</span></span><br>K = <span class="chem-frac"><span class="chem-frac-n">2.3716</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">0.04840</span></span> = <strong>49.0</strong></p>'},

  {id:'p07', difficulty:'easy', type:'calc', tag:'Calculating K', q:'At equilibrium: [PCl5] = 0.217 M, [PCl3] = 0.083 M, [Cl2] = 0.083 M for PCl5(g) ⇌ PCl3(g) + Cl2(g). Find K.', answer:0.0318, unit:'', tolerance:0.002,
    solution:'<p>K = <span class="chem-frac"><span class="chem-frac-n">[PCl3][Cl2]</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">[PCl5]</span></span><br>K = <span class="chem-frac"><span class="chem-frac-n">(0.083)(0.083)</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">0.217</span></span><br>K = <span class="chem-frac"><span class="chem-frac-n">0.006889</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">0.217</span></span> = <strong>0.0318</strong></p>'},

  {id:'p08', difficulty:'medium', type:'calc', tag:'Calculating K', q:'For 2SO2(g) + O2(g) ⇌ 2SO3(g), at equilibrium: [SO2] = 0.0560 M, [O2] = 0.0280 M, [SO3] = 0.0360 M. Find K.', answer:14.76, unit:'', tolerance:0.3,
    solution:'<p>K = <span class="chem-frac"><span class="chem-frac-n">[SO3]^2</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">([SO2]^2[O2])</span></span><br>K = <span class="chem-frac"><span class="chem-frac-n">(0.0360)^2</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">((0.0560)^2 × 0.0280)</span></span><br>K = <span class="chem-frac"><span class="chem-frac-n">0.001296</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">(0.003136 × 0.0280)</span></span><br>K = <span class="chem-frac"><span class="chem-frac-n">0.001296</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">0.00008781</span></span> = <strong>14.76</strong></p>'},

  // Q vs K — comparing and predicting direction
  {id:'p09', difficulty:'easy', type:'calc', tag:'Q vs K', q:'For N2(g) + 3H2(g) ⇌ 2NH3(g), K = 6.0 × 10^-2. Current concentrations: [N2] = 1.0 M, [H2] = 2.0 M, [NH3] = 3.0 M. Calculate Q.', answer:1.125, unit:'', tolerance:0.05,
    solution:'<p>Use the same expression as K.</p><p>Q = <span class="chem-frac"><span class="chem-frac-n">[NH3]^2</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">([N2][H2]^3)</span></span> = <span class="chem-frac"><span class="chem-frac-n">9.0</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">8.0</span></span> = <strong>1.125</strong></p><p>Because Q > K, the reaction shifts in the reverse direction (←).</p>'},

  {id:'p10', difficulty:'easy', type:'calc', tag:'Q vs K', q:'For 2SO2(g) + O2(g) ⇌ 2SO3(g), K = 1.67. Current: [SO3] = 0.100 M, [SO2] = 0.200 M, [O2] = 0.150 M. Calculate Q.', answer:1.667, unit:'', tolerance:0.05,
    solution:'<p>Q = <span class="chem-frac"><span class="chem-frac-n">[SO3]^2</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">([SO2]^2[O2])</span></span><br>Q = <span class="chem-frac"><span class="chem-frac-n">(0.100)^2</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">((0.200)^2 × 0.150)</span></span><br>Q = <span class="chem-frac"><span class="chem-frac-n">0.01</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">(0.04 × 0.150)</span></span><br>Q = <span class="chem-frac"><span class="chem-frac-n">0.01</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">0.006</span></span> = <strong>1.667</strong><br>Q ≈ K, the system is at (or very near) equilibrium.</p>'},

  // ICE Table — solving for equilibrium concentrations
  {id:'p11', difficulty:'medium', type:'calc', tag:'ICE Table', q:'H2(g) + I2(g) ⇌ 2HI(g), K = 49.0 at 450°C. Start: [H2]0 = [I2]0 = 0.500 M, [HI]0 = 0. What is [HI] at equilibrium?', answer:0.778, unit:'M', tolerance:0.01,
    solution:'<p>From the ICE table, H2 and I2 each lose x and HI gains 2x.</p><p>K = <span class="chem-frac"><span class="chem-frac-n">(2x)^2</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">(0.500-x)^2</span></span> = 49.0, so <span class="chem-frac"><span class="chem-frac-n">2x</span><span class="chem-frac-bar">/</span><span class="chem-frac-d">(0.500-x)</span></span> = 7.00.</p><p>Solve: 2x = 3.50 - 7.00x → 9.00x = 3.50 → x = 0.389 M.</p><p>[HI] = 2x = <strong>0.778 M</strong></p>'},

  {id:'p12', difficulty:'easy', type:'calc', tag:'ICE Table', q:'H2(g) + I2(g) ⇌ 2HI(g), K = 49.0. Start: [H2]0 = [I2]0 = 0.500 M. What is [H2] at equilibrium?', answer:0.111, unit:'M', tolerance:0.005,
    solution:'<p>From the same ICE setup: x = 0.389 M<br>[H2] = 0.500 - x = 0.500 - 0.389 = <strong>0.111 M</strong></p>'},

  {id:'p13', difficulty:'medium', type:'calc', tag:'ICE Table', q:'For CO(g) + H2O(g) ⇌ CO2(g) + H2(g), K = 5.10. Start: [CO]0 = [H2O]0 = 0.300 M. What is [CO2] at equilibrium?', answer:0.208, unit:'M', tolerance:0.005,
    solution:'<p>ICE: CO and H2O lose x; CO2 and H2 gain x.<br>K = x^2/(0.300-x)^2 = 5.10<br>√both sides: x/(0.300-x) = 2.258<br>x = 2.258(0.300-x) → 3.258x = 0.6775 → x = 0.2079 M<br>[CO2] = <strong>0.208 M</strong></p>'},

  {id:'p14', difficulty:'hard', type:'calc', tag:'ICE Table', q:'N2O4(g) ⇌ 2NO2(g), K = 0.0114. Start: [N2O4]0 = 0.500 M, [NO2]0 = 0. Find [NO2] at equilibrium.', answer:0.0727, unit:'M', tolerance:0.003,
    solution:'<p>ICE: N2O4 loses x; NO2 gains 2x.<br>K = (2x)^2/(0.500-x) = 0.0114<br>4x^2 + 0.0114x - 0.00570 = 0<br>Quadratic: x = (-0.0114 + √(0.0114^2 + 4·4·0.00570))/(2·4)<br>x = 0.0364 M<br>[NO2] = 2x = <strong>0.0727 M</strong></p>'},

  {id:'p15', difficulty:'medium', type:'calc', tag:'ICE Table', q:'SO2(g) + NO2(g) ⇌ SO3(g) + NO(g), K = 3.75. Start: [SO2]0 = [NO2]0 = 0.800 M. Find [SO3] at equilibrium.', answer:0.528, unit:'M', tolerance:0.01,
    solution:'<p>ICE: SO2 and NO2 lose x; SO3 and NO gain x.<br>K = x^2/(0.800-x)^2 = 3.75<br>√both sides: x/(0.800-x) = 1.936<br>x = 1.936(0.800-x) → 2.936x = 1.549 → x = 0.5276 M<br>[SO3] = <strong>0.528 M</strong></p>'},

  {id:'p16', difficulty:'hard', type:'calc', tag:'ICE Table', q:'N2(g) + 3H2(g) ⇌ 2NH3(g), K = 0.060 at 500°C. Start: [N2]0 = [H2]0 = 1.00 M, [NH3]0 = 0. Find [NH3] at equilibrium.', answer:0.157, unit:'M', tolerance:0.01,
    solution:'<p>ICE: N2 loses x; H2 loses 3x; NH3 gains 2x.<br>K = (2x)^2 / ((1-x)(1-3x)^3) = 0.060<br>Since K is small, try x ≈ 0.079 (iterative): x ≈ 0.0786<br>[NH3] = 2x = <strong>0.157 M</strong></p>'},

  {id:'p17', difficulty:'medium', type:'calc', tag:'ICE Table', q:'For PCl5(g) ⇌ PCl3(g) + Cl2(g), K = 0.040. Initially: [PCl3] = [Cl2] = 0.030 M, [PCl5] = 0. Find [PCl5] at equilibrium.', answer:0.010, unit:'M', tolerance:0.001,
    solution:'<p>Q = [PCl3][Cl2]/[PCl5] → undefined ([PCl5]=0), but Q→∞ > K, so system shifts reverse.<br>ICE (reverse): [PCl3] and [Cl2] decrease by r; [PCl5] increases by r.<br>K = (0.030-r)^2/r = 0.040<br>r^2 - 0.100r + 0.0009 = 0 → r = 0.010<br>[PCl5] = <strong>0.010 M</strong></p>'},

  {id:'p18', difficulty:'medium', type:'calc', tag:'ICE Table', q:'For A(g) ⇌ B(g) + C(g), K = 4.0. Start: [A]0 = 2.00 M. Find [A] at equilibrium.', answer:0.536, unit:'M', tolerance:0.02,
    solution:'<p>ICE: A loses x; B and C each gain x.<br>K = x·x/(2.00-x) = 4.0<br>x^2 = 4(2-x) = 8-4x → x^2+4x-8=0<br>x = (-4+√48)/2 = 1.464 M<br>[A] = 2.00-1.464 = <strong>0.536 M</strong></p>'},

  // Kp calculations
  {id:'p19', difficulty:'medium', type:'calc', tag:'Kp vs Kc', q:'For N2(g) + 3H2(g) ⇌ 2NH3(g), Kc = 6.0 × 10^-2 at 773 K. Calculate Kp. (R = 0.08206 L·atm/mol·K)', answer:1.49e-5, unit:'', tolerance:5e-7,
    solution:'<p>Δn = moles product gas - moles reactant gas = 2 - (1+3) = -2<br>Kp = Kc(RT)^Δn = 0.060 × (0.08206 × 773)^(-2)<br>= 0.060 × (63.43)^(-2)<br>= 0.060 / 4023 = <strong>1.49 × 10^-5</strong></p>'},

  {id:'p20', difficulty:'easy', type:'calc', tag:'Kp vs Kc', q:'For the reaction 2SO3(g) ⇌ 2SO2(g) + O2(g), what is Δn (change in moles of gas)?', answer:1, unit:'', tolerance:0.1,
    solution:'<p>Δn = moles of gaseous products - moles of gaseous reactants<br>= (2 + 1) - 2 = <strong>1</strong></p>'},

  // K for reverse and scaled reactions
  {id:'p21', difficulty:'easy', type:'calc', tag:'K Relationships', q:'If K = 49.0 for H2(g) + I2(g) ⇌ 2HI(g), what is K for 2HI(g) ⇌ H2(g) + I2(g)?', answer:0.0204, unit:'', tolerance:0.001,
    solution:'<p>Reversing a reaction inverts K.<br>K_reverse = 1/K_forward = 1/49.0 = <strong>0.0204</strong></p>'},

  {id:'p22', difficulty:'easy', type:'calc', tag:'K Relationships', q:'If K = 49.0 for H2(g) + I2(g) ⇌ 2HI(g), what is K for ½H2(g) + ½I2(g) ⇌ HI(g)?', answer:7.0, unit:'', tolerance:0.1,
    solution:'<p>Multiplying a reaction equation by ½ raises K to the power ½.<br>K_new = (49.0)^(1/2) = √49.0 = <strong>7.00</strong></p>'},

  {id:'p23', difficulty:'easy', type:'calc', tag:'K Relationships', q:'If Kc = 3.00 for rxn 1: A + B ⇌ C, and Kc = 2.00 for rxn 2: C ⇌ D + E, what is Kc for A + B ⇌ D + E?', answer:6.0, unit:'', tolerance:0.1,
    solution:'<p>Adding two reactions multiplies their K values.<br>K_total = K1 × K2 = 3.00 × 2.00 = <strong>6.00</strong></p>'},

  // Finding K from partial data
  {id:'p24', difficulty:'medium', type:'calc', tag:'Calculating K', q:'For 2HI(g) ⇌ H2(g) + I2(g) at 425°C: starting with 1.000 mol HI in a 1.00 L flask, 0.222 mol H2 is present at equilibrium. Find K.', answer:0.0205, unit:'', tolerance:0.001,
    solution:'<p>ICE in mol/L: HI starts 1.000, loses 2(0.222)=0.444; H2 and I2 each gain 0.222.<br>[HI]=0.556, [H2]=[I2]=0.222<br>K = (0.222)(0.222)/(0.556)^2 = 0.04928/0.30914 = <strong>0.0205</strong> (≈1/49)</p>'},

  {id:'p25', difficulty:'medium', type:'calc', tag:'Calculating K', q:'For A(g) ⇌ 2B(g), starting with [A]0 = 1.00 M and [B]0 = 0, at equilibrium [B] = 0.620 M. Calculate K.', answer:0.557, unit:'', tolerance:0.01,
    solution:'<p>ICE: A loses x = 0.310 M (because [B]=2x=0.620); [A] = 1.00-0.310 = 0.690 M<br>K = [B]^2/[A] = (0.620)^2/0.690 = 0.3844/0.690 = <strong>0.557</strong></p>'},

  // Concentration effect on Q
  {id:'p26', difficulty:'easy', type:'calc', tag:'Q vs K', q:'For N2O4(g) ⇌ 2NO2(g), K = 0.0114. If [NO2] = 0.050 M and [N2O4] = 0.025 M, calculate Q.', answer:0.100, unit:'', tolerance:0.005,
    solution:'<p>Q = [NO2]^2/[N2O4] = (0.050)^2/0.025 = 0.0025/0.025 = <strong>0.100</strong><br>Q > K (0.100 > 0.0114), so the reaction shifts reverse (←) toward N2O4.</p>'},

  {id:'p27', difficulty:'easy', type:'calc', tag:'Q vs K', q:'For PCl5(g) ⇌ PCl3(g) + Cl2(g), K = 0.040. Calculate Q if [PCl5] = 0.500 M, [PCl3] = 0.050 M, [Cl2] = 0.050 M.', answer:0.005, unit:'', tolerance:0.0005,
    solution:'<p>Q = [PCl3][Cl2]/[PCl5] = (0.050)(0.050)/0.500 = 0.0025/0.500 = <strong>0.005</strong><br>Q < K (0.005 < 0.040), so the reaction shifts forward (→).</p>'},

  // ICE small-K approximation
  {id:'p28', difficulty:'hard', type:'calc', tag:'ICE Table', q:'For 2NH3(g) ⇌ N2(g) + 3H2(g), K = 2.5 × 10^-9 at 25°C. Start: [NH3]0 = 0.200 M. Find [N2] at equilibrium.', answer:0.001387, unit:'M', tolerance:0.0002,
    solution:'<p>ICE: NH3 loses 2x; N2 gains x; H2 gains 3x.<br>K = x(3x)^3/(0.200)^2 ≈ 27x^4/0.04 = 2.5×10^-9 (since x≪0.200)<br>x^4 = 3.70×10^-12 → x = <strong>1.39 × 10^-3 M</strong><br>Check: x/0.200 = 0.7% ✓ (small assumption valid)</p>'},

  {id:'p29', difficulty:'hard', type:'calc', tag:'ICE Table', q:'For CO(g) + Cl2(g) ⇌ COCl2(g), K = 4.56 × 10^9 at a given T. Start: [CO]0 = [Cl2]0 = 1.00 × 10^-3 M. Find [COCl2] at equilibrium.', answer:0.001, unit:'M', tolerance:5e-5,
    solution:'<p>K is enormous — reaction goes essentially to completion.<br>ICE: [CO] and [Cl2] decrease by r ≈ 0.001; [COCl2] ≈ 0.001 M.<br>Exact: let remaining [CO]=[Cl2]=y (tiny). K = 0.001/y^2 → y = √(0.001/4.56×10^9) = 4.68×10^-7 M<br>[COCl2] ≈ <strong>1.00 × 10^-3 M</strong> (essentially complete reaction)</p>'},

  // Le Châtelier — quantitative pressure
  {id:'p30', difficulty:'medium', type:'calc', tag:'Le Châtelier', q:'For 2A(g) ⇌ B(g), K = 6.0. Start: [A]0 = 1.00 M, [B]0 = 0. Find [B] at equilibrium.', answer:0.375, unit:'M', tolerance:0.01,
    solution:'<p>ICE: A loses 2x; B gains x.<br>K = x/(1-2x)^2 = 6.0<br>6(1-4x+4x^2) = x → 24x^2-25x+6=0<br>x = (25-√(625-576))/48 = (25-7)/48 = 0.375 M<br>[B] = <strong>0.375 M</strong></p>'},

  // Heterogeneous — writing K
  {id:'p31', difficulty:'easy', type:'calc', tag:'Heterogeneous K', q:'What is the K expression for: Fe3O4(s) + 4H2(g) ⇌ 3Fe(s) + 4H2O(g)?',
    choices:['K = [H2O]^4 / [H2]^4','K = [Fe]^3[H2O]^4 / ([Fe3O4][H2]^4)','K = [H2]^4 / [H2O]^4','K = [H2O]^4 / ([Fe3O4][H2]^4)'],
    correct:0,
    solution:'<p>Fe3O4(s) and Fe(s) are pure solids — both omitted.<br>K = [H2O]^4 / [H2]^4</p>'},

  {id:'p32', difficulty:'medium', type:'calc', tag:'Heterogeneous K', q:'For Ag2O(s) ⇌ 2Ag(s) + ½O2(g), write the correct K expression.',
    choices:['K = [O2]^(1/2)','K = [Ag]^2[O2]^(1/2) / [Ag2O]','K = 1/[O2]^(1/2)','K = [Ag2O] / [Ag]^2[O2]^(1/2)'],
    correct:0,
    solution:'<p>Both Ag2O(s) and Ag(s) are pure solids — omitted.<br>K = [O2]^(1/2)</p>'},

  // Additional K calculations
  {id:'p33', difficulty:'easy', type:'calc', tag:'Calculating K', q:'At 25°C, Kp = 1.00 for 2NO2(g) ⇌ N2O4(g). If Kp for the reverse reaction is determined, what is its value?', answer:1.0, unit:'', tolerance:0.05,
    solution:'<p>K_reverse = 1/K_forward = 1/1.00 = <strong>1.00</strong><br>When K=1, the forward and reverse K are identical.</p>'},

  {id:'p34', difficulty:'medium', type:'calc', tag:'Calculating K', q:'For Br2(g) ⇌ 2Br(g), K = 2.00 × 10^-3 at 1280°C. At equilibrium in a 1.00 L flask: [Br] = 0.0447 M. Find [Br2].', answer:0.999, unit:'M', tolerance:0.01,
    solution:'<p>K = [Br]^2/[Br2] = 2.00×10^-3<br>[Br2] = [Br]^2/K = (0.0447)^2/(2.00×10^-3) = 0.001998/0.002000 = <strong>0.999 M</strong></p>'},

  // Remaining calculation problems to reach 40
  {id:'p35', difficulty:'easy', type:'calc', tag:'ICE Table', q:'For A(g) ⇌ B(g) + C(g), at equilibrium in a 1.0 L flask: 0.40 mol A, 0.20 mol B, 0.20 mol C. What is K?', answer:0.10, unit:'', tolerance:0.005,
    solution:'<p>Concentrations = mol/L: [A]=0.40, [B]=0.20, [C]=0.20<br>K = [B][C]/[A] = (0.20)(0.20)/0.40 = 0.04/0.40 = <strong>0.10</strong></p>'},

  {id:'p36', difficulty:'easy', type:'calc', tag:'Q vs K', q:'For the equilibrium A(g) + B(g) ⇌ C(g), K = 8.0. Calculate Q if [A]=1.0 M, [B]=2.0 M, [C]=12.0 M.', answer:6.0, unit:'', tolerance:0.1,
    solution:'<p>Q = [C]/([A][B]) = 12.0/(1.0 × 2.0) = 12.0/2.0 = <strong>6.0</strong><br>Q < K, so the reaction shifts forward (→).</p>'},

  {id:'p37', difficulty:'medium', type:'calc', tag:'Calculating K', q:'For 2SO3(g) ⇌ 2SO2(g) + O2(g), K = 4.0 × 10^-3 at 600°C. Find K for: SO3(g) ⇌ SO2(g) + ½O2(g).', answer:0.0632, unit:'', tolerance:0.003,
    solution:'<p>Dividing reaction by 2 raises K to power ½.<br>K_new = (4.0×10^-3)^(1/2) = √(0.004) = <strong>0.0632</strong></p>'},

  {id:'p38', difficulty:'medium', type:'calc', tag:'Calculating K', q:'For PCl5(g) ⇌ PCl3(g) + Cl2(g), K = 0.040 at 300°C. Starting with [PCl5]0 = 0.800 M, find [PCl5] at equilibrium.', answer:0.640, unit:'M', tolerance:0.02,
    solution:'<p>ICE: PCl5 loses x; PCl3 and Cl2 gain x.<br>K = x^2/(0.800-x) = 0.040<br>x^2 = 0.040(0.800-x) = 0.032-0.040x<br>x^2 + 0.040x - 0.032 = 0<br>x = [-0.040 + √(0.0016 + 0.128)]/2 = [-0.040 + 0.360]/2 = 0.160<br>[PCl5] = 0.800 - 0.160 = <strong>0.640 M</strong></p>'},

  {id:'p39', difficulty:'medium', type:'calc', tag:'Calculating K', q:'For 2NO(g) + Cl2(g) ⇌ 2NOCl(g), K = 4.60 × 10^4 at 25°C. At equilibrium [NO] = 0.0300 M and [Cl2] = 0.0150 M. Find [NOCl].', answer:0.788, unit:'M', tolerance:0.01,
    solution:'<p>K = [NOCl]^2/([NO]^2[Cl2])<br>[NOCl]^2 = K × [NO]^2 × [Cl2] = 4.60×10^4 × (0.0300)^2 × 0.0150<br>= 4.60×10^4 × 9.00×10^-4 × 0.0150 = 0.6210<br>[NOCl]^2 = 0.01952 → wait: 4.60×10^4×9.00×10^-4=41.4; 41.4×0.0150=0.621<br>Hmm: [NOCl]^2 = 0.621? Too high. Re-check: 0.0300^2=9×10^-4; ×0.0150=1.35×10^-5; ×4.60×10^4=0.621<br>[NOCl] = √0.621 = <strong>0.788 M</strong></p>'},

  {id:'p40', difficulty:'hard', type:'calc', tag:'ICE Table', q:'For I2(g) ⇌ 2I(g), K = 3.76 × 10^-5 at 1000 K. Starting with [I2]0 = 0.0100 M, find [I] at equilibrium.', answer:6.13e-4, unit:'M', tolerance:3e-5,
    solution:'<p>ICE: I2 loses x; I gains 2x.<br>K = (2x)^2/(0.0100-x) ≈ 4x^2/0.0100 = 3.76×10^-5 (x≪0.0100)<br>x^2 = 9.40×10^-8 → x = 3.07×10^-4<br>[I] = 2x = 2 × 3.07×10^-4 = <strong>6.13 × 10^-4 M</strong><br>Check: x/0.0100 = 3.1% ✓</p>'},

  // ─── CONCEPTUAL (28 problems) ─────────────────────────────────────────

  {id:'p41', difficulty:'easy', type:'concept', tag:'Dynamic Equilibrium', q:'A sealed container holds a reversible reaction at equilibrium. Which statement is TRUE?',
    choices:['Reactants are fully converted to products','The forward and reverse reactions have both stopped','The forward and reverse reaction rates are equal','The concentrations of reactants and products are equal'],
    correct:2,
    solution:'<p>Equilibrium is dynamic — both reactions continue, but at equal rates. Concentrations are constant but not necessarily equal.</p>'},

  {id:'p42', difficulty:'medium', type:'concept', tag:'Dynamic Equilibrium', q:'The color of NO2 (brown) can be used to observe equilibrium shifts in 2NO2(g) ⇌ N2O4(g). If the mixture is cooled and becomes less brown, what happened?',
    choices:['The reaction shifted forward, consuming NO2','The reaction shifted reverse, producing more NO2','The color change proves the reaction stopped','Cooling always makes gases colorless'],
    correct:0,
    solution:'<p>Less brown color means less NO2. The reaction shifted forward (→) to consume NO2 and form colorless N2O4. This tells us cooling favors the exothermic direction (forward is exothermic here).</p>'},

  {id:'p43', difficulty:'easy', type:'concept', tag:'K Meaning', q:'A reaction has K = 1.5 × 10^-8. What does this tell you about the equilibrium mixture?',
    choices:['Products are strongly favored; very little reactant remains','Reactants are strongly favored; very little product is present','About equal amounts of reactants and products are present','The reaction does not reach equilibrium'],
    correct:1,
    solution:'<p>K ≪ 1 means the numerator (products) is much smaller than the denominator (reactants). Reactants are greatly favored at equilibrium.</p>'},

  {id:'p44', difficulty:'easy', type:'concept', tag:'K Meaning', q:'K = 3.2 × 10^12 for a reaction at 25°C. This means:',
    choices:['The reaction is very slow','Products are enormously favored at equilibrium','Reactants are enormously favored','The system can never reach equilibrium'],
    correct:1,
    solution:'<p>K ≫ 1 means [products] ≫ [reactants] at equilibrium. The reaction proceeds nearly to completion, strongly favoring products.</p>'},

  {id:'p45', difficulty:'easy', type:'concept', tag:'Q vs K', q:'For a reaction at a given temperature, Q < K. In which direction must the reaction shift to reach equilibrium?',
    choices:['Reverse (←), to make more reactants','Forward (→), to make more products','No shift — the system is already at equilibrium','Either direction, depending on temperature'],
    correct:1,
    solution:'<p>Q < K means the current [products]/[reactants] ratio is too small. The reaction shifts forward (→) to increase Q until Q = K.</p>'},

  {id:'p46', difficulty:'easy', type:'concept', tag:'Q vs K', q:'For a reaction at a given temperature, Q = K. What is true?',
    choices:['The reaction rates are zero','The system is at equilibrium — no net change occurs','The reaction will shift forward','All reactants have been converted to products'],
    correct:1,
    solution:'<p>Q = K means the system is at equilibrium. The forward and reverse rates are equal, and no net concentration changes occur.</p>'},

  {id:'p47', difficulty:'easy', type:'concept', tag:'Le Châtelier', q:'For N2(g) + 3H2(g) ⇌ 2NH3(g) (exothermic), what happens to the equilibrium position when temperature is decreased?',
    choices:['Shifts reverse, producing more N2 and H2','Shifts forward, producing more NH3','No shift; only the rate changes','K increases, but the position does not shift'],
    correct:1,
    solution:'<p>Decreasing temperature removes heat. For an exothermic reaction, heat is a "product." Removing a product drives the equilibrium forward (→), producing more NH3. K also increases.</p>'},

  {id:'p48', difficulty:'easy', type:'concept', tag:'Le Châtelier', q:'For N2(g) + 3H2(g) ⇌ 2NH3(g), what is the effect of increasing pressure by decreasing volume?',
    choices:['Shifts reverse (←) toward more moles of gas','Shifts forward (→) toward fewer moles of gas','No effect — only concentration of gases matter','K decreases'],
    correct:1,
    solution:'<p>Reactant side: 1+3=4 mol gas. Product side: 2 mol gas. Increasing pressure favors fewer moles of gas → forward shift (→). K is unchanged.</p>'},

  {id:'p49', difficulty:'medium', type:'concept', tag:'Le Châtelier', q:'For N2(g) + O2(g) ⇌ 2NO(g), what is the effect of increasing pressure?',
    choices:['Shifts forward (→)','Shifts reverse (←)','No net shift — both sides have equal moles of gas','The system decomposes'],
    correct:2,
    solution:'<p>Both sides have 2 moles of gas (1+1=2 on left; 2 on right). Pressure changes have no effect on equilibrium position when Δn = 0.</p>'},

  {id:'p50', difficulty:'medium', type:'concept', tag:'Le Châtelier', q:'Adding an inert gas (like argon) at constant volume to an equilibrium mixture will:',
    choices:['Shift the equilibrium forward','Shift the equilibrium reverse','Have no effect on the equilibrium position','Always increase K'],
    correct:2,
    solution:'<p>At constant volume, adding an inert gas increases total pressure but does NOT change the partial pressures (or concentrations) of any reacting species. Q is unchanged, so no shift occurs.</p>'},

  {id:'p51', difficulty:'easy', type:'concept', tag:'Le Châtelier', q:'For PCl5(g) ⇌ PCl3(g) + Cl2(g) (endothermic), increasing temperature:',
    choices:['Shifts forward (→), producing more PCl3 and Cl2; K increases','Shifts reverse (←), producing more PCl5; K increases','Shifts forward (→); K decreases','No shift; K decreases'],
    correct:0,
    solution:'<p>The reaction is endothermic — heat is a reactant. Adding heat drives the reaction forward (→). Since temperature changes K, and more products are favored, K increases.</p>'},

  {id:'p52', difficulty:'easy', type:'concept', tag:'Catalyst', q:'A catalyst is added to an equilibrium mixture. What is the result?',
    choices:['The equilibrium shifts forward','K increases','Equilibrium is reached faster; K and equilibrium concentrations are unchanged','The equilibrium shifts reverse'],
    correct:2,
    solution:'<p>A catalyst lowers activation energy for both forward and reverse reactions equally. It speeds up the approach to equilibrium but does not change K or the equilibrium composition.</p>'},

  {id:'p53', difficulty:'easy', type:'concept', tag:'Heterogeneous K', q:'For CaCO3(s) ⇌ CaO(s) + CO2(g), doubling the mass of CaCO3(s) will:',
    choices:['Shift the reaction forward','Shift the reaction reverse','Have no effect — pure solids do not appear in K','Double the amount of CO2 produced'],
    correct:2,
    solution:'<p>Pure solids have constant concentration and are omitted from K. Adding more CaCO3(s) does not change Q and therefore does not shift the equilibrium.</p>'},

  {id:'p54', difficulty:'easy', type:'concept', tag:'K Meaning', q:'At a given temperature, K = 1.00 for A(g) ⇌ B(g). Which statement is correct?',
    choices:['All A converts to B','All B converts to A','At equilibrium, [A] = [B]','The reaction does not occur'],
    correct:2,
    solution:'<p>K = [B]/[A] = 1.00 means [B] = [A] at equilibrium. Equal concentrations of reactant and product are present.</p>'},

  {id:'p55', difficulty:'easy', type:'concept', tag:'Le Châtelier', q:'For CO(g) + H2O(g) ⇌ CO2(g) + H2(g) (water-gas shift reaction), removing CO2 from the mixture will:',
    choices:['Shift the reaction reverse','Shift the reaction forward, producing more CO2','Have no effect on the equilibrium','Cause K to decrease'],
    correct:1,
    solution:'<p>Removing a product (CO2) decreases Q below K. The system shifts forward (→) to restore Q = K, producing more CO2 and H2. K is unchanged.</p>'},

  {id:'p56', difficulty:'easy', type:'concept', tag:'Le Châtelier', q:'For 2SO2(g) + O2(g) ⇌ 2SO3(g), adding more O2 will cause:',
    choices:['A forward shift (→), consuming O2 and making more SO3','A reverse shift (←), consuming SO3','No change — only temperature affects K','K to increase'],
    correct:0,
    solution:'<p>Adding O2 increases the denominator of Q, making Q &lt; K. The system shifts forward (→) to restore equilibrium by consuming some O2 and producing more SO3.</p>'},

  {id:'p57', difficulty:'easy', type:'concept', tag:'K Relationships', q:'If a reaction is written in reverse, the new K (K_rev) is related to the original K by:',
    choices:['K_rev = K^2','K_rev = 1/K','K_rev = -K','K_rev = K/2'],
    correct:1,
    solution:'<p>Reversing a reaction inverts the K expression (products become reactants and vice versa). K_rev = 1/K_forward.</p>'},

  {id:'p58', difficulty:'easy', type:'concept', tag:'K Relationships', q:'If multiplying a balanced equation by 3 gives a new reaction, the new K_new is related to the original K by:',
    choices:['K_new = 3K','K_new = K/3','K_new = K^3','K_new = K^(1/3)'],
    correct:2,
    solution:'<p>Multiplying an equation by a factor n raises K to the power n. Multiply by 3: K_new = K^3.</p>'},

  {id:'p59', difficulty:'easy', type:'concept', tag:'Dynamic Equilibrium', q:'A student claims: "At equilibrium, no more reaction occurs." This statement is:',
    choices:['Correct — both reactions stop when equilibrium is reached','Incorrect — equilibrium is dynamic; both reactions continue at equal rates','Correct only for irreversible reactions','Incorrect — only the forward reaction stops'],
    correct:1,
    solution:'<p>Equilibrium is dynamic. Both the forward and reverse reactions continue, but their rates are equal, so there is no net change in concentration. The student confused equilibrium with a stopped reaction.</p>'},

  {id:'p60', difficulty:'medium', type:'concept', tag:'Le Châtelier', q:'The Haber process (N2 + 3H2 ⇌ 2NH3) is run at high pressure industrially. The main reason is:',
    choices:['High pressure increases K','High pressure shifts equilibrium toward fewer moles of gas, increasing NH3 yield','High pressure speeds up the reaction without affecting equilibrium','High pressure lowers the activation energy'],
    correct:1,
    solution:'<p>The product side has fewer moles of gas (2 mol) than the reactant side (4 mol). Le Châtelier: increasing pressure shifts equilibrium toward fewer moles of gas — forward, increasing NH3 yield. K is unchanged by pressure.</p>'},

  {id:'p61', difficulty:'medium', type:'concept', tag:'Heterogeneous K', q:'For the dissolution equilibrium NaCl(s) ⇌ Na^+(aq) + Cl^-(aq), the K expression is:',
    choices:['K = [NaCl]','K = [Na^+][Cl^-]/[NaCl]','K = [Na^+][Cl^-]','K = 1/([Na^+][Cl^-])'],
    correct:2,
    solution:'<p>NaCl(s) is a pure solid — omitted from K. K = [Na^+][Cl^-]. This specific K for dissolution is also called Ksp, the solubility product.</p>'},

  {id:'p62', difficulty:'easy', type:'concept', tag:'K Meaning', q:'For a reaction with a very large K (K > 10^10), which assumption is usually safe?',
    choices:['Equal amounts of reactants and products exist at equilibrium','The reaction proceeds essentially to completion','The reaction is very fast','Temperature has no effect on K'],
    correct:1,
    solution:'<p>K ≫ 1 means the equilibrium lies far to the right. Virtually all reactants convert to products — the reaction goes essentially to completion.</p>'},

  {id:'p63', difficulty:'easy', type:'concept', tag:'Le Châtelier', q:'For an exothermic reaction, as temperature increases:',
    choices:['K increases; equilibrium shifts forward','K decreases; equilibrium shifts reverse','K is unchanged; only the rate increases','K increases; equilibrium shifts reverse'],
    correct:1,
    solution:'<p>For exothermic reactions, heat is a product. Increasing temperature adds heat (a product), shifting equilibrium reverse (←) and decreasing K.</p>'},

  {id:'p64', difficulty:'medium', type:'concept', tag:'Dynamic Equilibrium', q:'Which observation provides the best evidence that equilibrium is dynamic rather than static?',
    choices:['The concentrations stop changing at equilibrium','Radioactive tracers added at equilibrium appear in both reactants and products over time','The color of the mixture stays constant','The total mass of the system is conserved'],
    correct:1,
    solution:'<p>Radioactive tracers scramble between reactants and products even at equilibrium, proving molecules are still reacting in both directions. Static equilibrium would show no tracer movement.</p>'},

  {id:'p65', difficulty:'easy', type:'concept', tag:'Le Châtelier', q:'Decreasing the volume of a container holding the equilibrium 2NO2(g) ⇌ N2O4(g) will:',
    choices:['Shift equilibrium toward 2NO2 (more moles of gas)','Shift equilibrium toward N2O4 (fewer moles of gas)','Have no effect — both sides are gases','Cause K to increase'],
    correct:1,
    solution:'<p>Reactant side: 2 mol gas. Product side: 1 mol gas. Decreasing volume increases pressure — system shifts toward fewer gas moles (→ N2O4). K is unchanged.</p>'},

  {id:'p66', difficulty:'easy', type:'concept', tag:'Le Châtelier', q:'For CO(g) + 3H2(g) ⇌ CH4(g) + H2O(g), adding more H2 at constant volume will:',
    choices:['Shift equilibrium forward (→) to make more CH4','Shift equilibrium reverse (←) to make more CO','Have no effect — inert gas was added','Decrease K'],
    correct:0,
    solution:'<p>Adding a reactant (H2) makes Q < K (denominator increases). System shifts forward (→) to consume the added H2 and produce more CH4 and H2O. K is unchanged.</p>'},

  {id:'p67', difficulty:'easy', type:'concept', tag:'Q vs K', q:'Q > K for a reaction. The reaction will:',
    choices:['Shift forward to make more products','Shift reverse to make more reactants','Stay at equilibrium','Stop completely'],
    correct:1,
    solution:'<p>Q > K means [products]/[reactants] is too high. The system shifts reverse (←) to consume products and form reactants, decreasing Q back toward K.</p>'},

  {id:'p68', difficulty:'medium', type:'concept', tag:'Le Châtelier', q:'For an endothermic reaction, which condition will increase both the forward reaction rate AND shift equilibrium to produce more products?',
    choices:['Decreasing temperature','Adding a catalyst','Increasing temperature','Increasing pressure (if Δn_gas = 0)'],
    correct:2,
    solution:'<p>For endothermic reactions, heat is a reactant. Increasing temperature adds heat, driving the equilibrium forward (more products) and increasing K. It also increases both reaction rates, but the forward rate increases more.</p>'},

  // ─── MULTI-STEP (13 problems) ─────────────────────────────────────────

  {id:'p69', difficulty:'hard', type:'multi', tag:'Full ICE', q:'For CO(g) + H2O(g) ⇌ CO2(g) + H2(g), K = 1.60 at a certain temperature. Start: [CO]0 = 0.500 M, [H2O]0 = 0.400 M, [CO2]0 = [H2]0 = 0. Find [CO2] at equilibrium.', answer:0.248, unit:'M', tolerance:0.01,
    solution:'<p>ICE: CO and H2O lose x; CO2 and H2 gain x.<br>K = x^2/((0.500-x)(0.400-x)) = 1.60<br>x^2 = 1.60(0.200 - 0.900x + x^2) → -0.60x^2 + 1.44x - 0.32 = 0<br>0.60x^2 - 1.44x + 0.32 = 0<br>x = (1.44 - √(2.0736 - 0.768))/1.20 = (1.44 - 1.142)/1.20 = 0.2483 M<br>[CO2] = <strong>0.248 M</strong></p>'},

  {id:'p70', difficulty:'medium', type:'multi', tag:'Q → direction → ICE', q:'For H2(g) + I2(g) ⇌ 2HI(g), K = 49.0. A flask contains [H2] = 0.100 M, [I2] = 0.050 M, [HI] = 0.800 M. (a) Calculate Q. (b) Will the reaction shift forward or reverse?', answer:128, unit:'', tolerance:5,
    solution:'<p>Q = [HI]^2/([H2][I2]) = (0.800)^2/(0.100 × 0.050) = 0.640/0.005 = <strong>128</strong><br>Q > K (128 > 49), so the reaction shifts <strong>reverse (←)</strong> — consuming HI and forming H2 and I2.</p>'},

  {id:'p71', difficulty:'hard', type:'multi', tag:'Full ICE + verify', q:'For 2HI(g) ⇌ H2(g) + I2(g), K = 0.0205. Starting with [HI]0 = 1.00 M, find [HI] at equilibrium.', answer:0.777, unit:'M', tolerance:0.01,
    solution:'<p>ICE: HI loses 2x; H2 and I2 each gain x.<br>K = x^2/(1.00-2x)^2 = 0.0205<br>√: x/(1.00-2x) = 0.1432<br>x = 0.1432 - 0.2864x → 1.2864x = 0.1432 → x = 0.1113<br>[HI] = 1.00 - 2(0.1113) = 1.00 - 0.2226 = <strong>0.777 M</strong><br>Wait — verify: K=(0.1113)^2/(0.777)^2=0.01239/0.604=0.0205 ✓<br>[HI] = <strong>0.777 M</strong></p>'},

  {id:'p72', difficulty:'medium', type:'multi', tag:'Combine K values', q:'Given: (1) N2(g) + O2(g) ⇌ 2NO(g), K1 = 1.00 × 10^-30 and (2) 2NO(g) + O2(g) ⇌ 2NO2(g), K2 = 1.00 × 10^13. Find K for: N2(g) + 2O2(g) ⇌ 2NO2(g).', answer:1.0e-17, unit:'', tolerance:5e-18,
    solution:'<p>Add reactions 1 and 2 to get the target reaction.<br>K = K1 × K2 = (1.00×10^-30)(1.00×10^13) = <strong>1.00 × 10^-17</strong></p>'},

  {id:'p73', difficulty:'medium', type:'multi', tag:'Le Châtelier multi', q:'For 2SO2(g) + O2(g) ⇌ 2SO3(g), K = 280 at 1000 K. At equilibrium: [SO2] = 0.400 M, [O2] = 0.200 M, [SO3] = 0.600 M. If [SO2] is suddenly increased to 0.800 M, in which direction does the reaction shift and by how much does Q change?', answer:2.81, unit:'', tolerance:0.05,
    solution:'<p>New Q after adding SO2: [SO2]=0.800<br>Q = (0.600)^2/((0.800)^2×0.200) = 0.360/(0.640×0.200) = 0.360/0.128 = <strong>2.81</strong><br>Q < K (2.81 < 280), so system shifts <strong>forward (→)</strong> to consume added SO2 and make more SO3.</p>'},

  {id:'p74', difficulty:'hard', type:'multi', tag:'Full ICE quadratic', q:'For 3A(g) ⇌ 2B(g) + C(g), K = 0.150. Start: [A]0 = 0.600 M. Find [C] at equilibrium.', answer:0.100, unit:'M', tolerance:0.005,
    solution:'<p>ICE: A loses 3x; B gains 2x; C gains x.<br>K = (2x)^2(x)/(0.600-3x)^3 = 4x^3/(0.600-3x)^3 = 0.150<br>Cube root both sides carefully. Let u = x/(0.600-3x):<br>4x^3/(0.600-3x)^3 = 4u^3 = 0.150 → u^3 = 0.0375 → u = 0.3348<br>x = 0.3348(0.600-3x) = 0.2009-1.004x → 2.004x = 0.2009 → x = 0.1002<br>[C] = x = <strong>0.100 M</strong></p>'},

  {id:'p75', difficulty:'hard', type:'multi', tag:'Kp ICE', q:'For N2O4(g) ⇌ 2NO2(g), Kp = 0.112 atm at 25°C. Starting with only N2O4 at an initial partial pressure of 1.00 atm, find the equilibrium partial pressure of NO2.', answer:0.298, unit:'atm', tolerance:0.01,
    solution:'<p>ICE in pressures: N2O4 starts 1.00 atm, loses x; NO2 gains 2x.<br>Kp = (2x)^2/(1.00-x) = 0.112<br>4x^2 + 0.112x - 0.112 = 0<br>x = (-0.112 + √(0.01254 + 1.792))/8 = (-0.112 + 1.343)/8 = 0.1489 atm<br>P(NO2) = 2x = <strong>0.298 atm</strong></p>'},

  {id:'p76', difficulty:'medium', type:'multi', tag:'Temp and K', q:'The reaction A(g) ⇌ B(g) is exothermic. At 25°C, K = 10.0. At 100°C, K = 2.50. A student increases temperature from 25°C to 100°C on a sample at equilibrium. Describe TWO observable changes.', answer:'shift reverse, K decreases',
    isText:true, tolerance:0,
    solution:'<p>1. <strong>Equilibrium shifts reverse (←)</strong> — the system adjusts to the new, lower K, consuming B and forming more A.<br>2. <strong>K decreases from 10.0 to 2.50</strong> — for exothermic reactions, increasing temperature always lowers K.<br>Accept any answer indicating reverse shift and K decreasing.</p>'},

  {id:'p77', difficulty:'easy', type:'multi', tag:'Q → ICE', q:'For SO2(g) + NO2(g) ⇌ SO3(g) + NO(g), K = 3.75. A flask contains [SO2] = [NO2] = 0.500 M and [SO3] = [NO] = 0.100 M. Calculate Q and determine how [NO] will change as equilibrium is established.', answer:0.04, unit:'', tolerance:0.005,
    solution:'<p>Q = [SO3][NO]/([SO2][NO2]) = (0.100)(0.100)/((0.500)(0.500)) = 0.010/0.250 = <strong>0.040</strong><br>Q < K (0.040 < 3.75): reaction shifts forward (→), producing more SO3 and NO.<br>[NO] will <strong>increase</strong> as equilibrium is reached.</p>'},

  {id:'p78', difficulty:'hard', type:'multi', tag:'Full ICE', q:'For 2A(g) ⇌ B(g), K = 6.0. Starting with [A]0 = 1.00 M and [B]0 = 0, find [A] at equilibrium.', answer:0.250, unit:'M', tolerance:0.01,
    solution:'<p>ICE: A loses 2x; B gains x.<br>K = x/(1.00-2x)^2 = 6.0<br>6(1.00-2x)^2 = x → 6-24x+24x^2 = x → 24x^2-25x+6=0<br>x = (25-√(625-576))/48 = (25-7)/48 = 18/48 = 0.375<br>[A] = 1.00-2(0.375) = 1.00-0.750 = <strong>0.250 M</strong></p>'},

  {id:'p79', difficulty:'hard', type:'multi', tag:'Haber multi', q:'The Haber process: N2(g) + 3H2(g) ⇌ 2NH3(g). K = 0.500 at 400°C. Starting with [N2]0 = 2.00 M and [H2]0 = 6.00 M, solve numerically for [NH3] at equilibrium.', answer:2.39, unit:'M', tolerance:0.05,
    solution:'<p>ICE: N2 loses x; H2 loses 3x; NH3 gains 2x.<br>K = (2x)^2/((2.00-x)(6.00-3x)^3) = 0.500<br>This does not satisfy a small-x approximation, so solve numerically.<br>At x ≈ 1.194, K ≈ 4x^2/((2-x)(6-3x)^3) ≈ 0.500.<br>[NH3] = 2x = 2(1.194) = <strong>2.39 M</strong>.</p>'},

  {id:'p80', difficulty:'medium', type:'multi', tag:'Reverse + ICE', q:'For 2HI(g) ⇌ H2(g) + I2(g), K = 0.0205. A sample contains 0.800 mol HI, 0.100 mol H2, and 0.100 mol I2 in a 2.00 L flask. (a) Calculate Q. (b) Is the system at equilibrium?', answer:0.0156, unit:'', tolerance:0.001,
    solution:'<p>Concentrations: [HI]=0.800/2=0.400 M, [H2]=[I2]=0.100/2=0.0500 M<br>Q = [H2][I2]/[HI]^2 = (0.0500)(0.0500)/(0.400)^2 = 0.002500/0.1600 = <strong>0.01563</strong><br>Q (0.0156) < K (0.0205): system shifts forward — NOT at equilibrium. More H2 and I2 will form.</p>'},

  {id:'p81', difficulty:'medium', type:'multi', tag:'K at new T', q:'For 2SO2(g) + O2(g) ⇌ 2SO3(g), the Hess-style analysis gives: if K = 280 at 1000 K and the reaction is exothermic, predict whether K at 1200 K is greater than, less than, or equal to 280. Explain by stating the direction of Q vs K shift caused by the temperature change.', answer:'less than 280', isText:true, tolerance:0,
    solution:'<p>The reaction is exothermic — heat is a product. Increasing temperature adds heat, shifting equilibrium reverse (←). This decreases the product-to-reactant ratio, so K at 1200 K is <strong>less than 280</strong>. For exothermic reactions, K always decreases as temperature increases.</p>'},

  // ─── EXPANSION BATCH (90 problems: 20 easy / 25 medium / 45 hard) ──────

  // ── EASY CALC (10) ──
  {id:'p82', difficulty:'easy', type:'calc', tag:'K Expression', q:'Write the equilibrium constant expression K for: 2H2S(g) ⇌ 2H2(g) + S2(g). Which answer is correct?',
    choices:['K = [H2]^2[S2] / [H2S]^2','K = [H2S]^2 / ([H2]^2[S2])','K = [H2][S2] / [H2S]','K = [H2]^2 / [H2S]^2'],
    correct:0,
    solution:'<p>Products over reactants, coefficients become exponents.</p><p>K = [H2]^2[S2] / [H2S]^2</p>'},

  {id:'p83', difficulty:'easy', type:'calc', tag:'K Expression', q:'Which is the correct K expression for: CO(g) + Cl2(g) ⇌ COCl2(g)?',
    choices:['K = [COCl2] / ([CO][Cl2])','K = [CO][Cl2] / [COCl2]','K = [COCl2]','K = [CO][Cl2]'],
    correct:0,
    solution:'<p>K = [COCl2] / ([CO][Cl2]). All coefficients are 1, so no exponents are needed.</p>'},

  {id:'p84', difficulty:'easy', type:'calc', tag:'Heterogeneous K', q:'For the reaction C(s) + CO2(g) ⇌ 2CO(g), which K expression is correct?',
    choices:['K = [CO]^2 / [CO2]','K = [CO]^2 / ([C][CO2])','K = [CO2] / [CO]^2','K = [C][CO2] / [CO]^2'],
    correct:0,
    solution:'<p>C(s) is a pure solid and is omitted from K.<br>K = [CO]^2 / [CO2]</p>'},

  {id:'p85', difficulty:'easy', type:'calc', tag:'Calculating K', q:'At equilibrium for A(g) + B(g) ⇌ C(g): [A] = 0.20 M, [B] = 0.30 M, [C] = 0.60 M. Calculate K.', answer:10.0, unit:'', tolerance:0.2,
    solution:'<p>K = [C]/([A][B]) = 0.60/(0.20 × 0.30) = 0.60/0.060 = <strong>10.0</strong></p>'},

  {id:'p86', difficulty:'easy', type:'calc', tag:'Calculating K', q:'At equilibrium for 2A(g) ⇌ B(g): [A] = 0.40 M, [B] = 0.10 M. Calculate K.', answer:0.625, unit:'', tolerance:0.02,
    solution:'<p>K = [B]/[A]^2 = 0.10/(0.40)^2 = 0.10/0.16 = <strong>0.625</strong></p>'},

  {id:'p87', difficulty:'easy', type:'calc', tag:'Q vs K', q:'For A(g) + B(g) ⇌ C(g), K = 5.0. Current concentrations: [A] = 0.50 M, [B] = 0.40 M, [C] = 0.90 M. Calculate Q.', answer:4.5, unit:'', tolerance:0.1,
    solution:'<p>Q = [C]/([A][B]) = 0.90/(0.50 × 0.40) = 0.90/0.20 = <strong>4.5</strong><br>Q &lt; K, so the reaction shifts forward.</p>'},

  {id:'p88', difficulty:'easy', type:'calc', tag:'Q vs K', q:'For 2A(g) ⇌ B(g), K = 2.0. Current concentrations: [A] = 0.30 M, [B] = 0.15 M. Calculate Q.', answer:1.667, unit:'', tolerance:0.05,
    solution:'<p>Q = [B]/[A]^2 = 0.15/(0.30)^2 = 0.15/0.090 = <strong>1.667</strong><br>Q &lt; K, so the reaction shifts forward.</p>'},

  {id:'p89', difficulty:'easy', type:'calc', tag:'K Relationships', q:'If K = 25 for a forward reaction, what is K for the reverse reaction?', answer:0.0400, unit:'', tolerance:0.002,
    solution:'<p>K_reverse = 1/K_forward = 1/25 = <strong>0.0400</strong></p>'},

  {id:'p90', difficulty:'easy', type:'calc', tag:'K Relationships', q:'If K = 3.0 for a reaction, what is K if the equation is doubled (all coefficients ×2)?', answer:9.0, unit:'', tolerance:0.2,
    solution:'<p>Doubling a reaction squares K.<br>K_new = (3.0)^2 = <strong>9.0</strong></p>'},

  {id:'p91', difficulty:'easy', type:'calc', tag:'Kp vs Kc', q:'For the reaction 2NH3(g) ⇌ N2(g) + 3H2(g), what is Δn (change in moles of gas)?', answer:2, unit:'', tolerance:0.1,
    solution:'<p>Δn = moles gaseous products − moles gaseous reactants = (1+3) − 2 = <strong>2</strong></p>'},

  // ── MEDIUM CALC (12) ──
  {id:'p92', difficulty:'medium', type:'calc', tag:'Calculating K', q:'At equilibrium for 2A(g) ⇌ B(g) + C(g): [A] = 0.100 M, [B] = 0.0500 M, [C] = 0.0500 M. Calculate K.', answer:0.250, unit:'', tolerance:0.01,
    solution:'<p>K = [B][C]/[A]^2 = (0.0500)(0.0500)/(0.100)^2 = 0.00250/0.0100 = <strong>0.250</strong></p>'},

  {id:'p93', difficulty:'medium', type:'calc', tag:'ICE Table', q:'For A(g) + B(g) ⇌ C(g) + D(g), K = 9.00. Start: [A]0 = [B]0 = 0.600 M. Find [C] at equilibrium.', answer:0.450, unit:'M', tolerance:0.01,
    solution:'<p>K = x^2/(0.600-x)^2 = 9.00, so x/(0.600-x) = 3.00.<br>x = 1.800 - 3.00x → 4.00x = 1.800 → x = 0.450<br>[C] = <strong>0.450 M</strong></p>'},

  {id:'p94', difficulty:'medium', type:'calc', tag:'ICE Table', q:'For A(g) ⇌ 2B(g), K = 0.500. Start: [A]0 = 0.400 M. Find [B] at equilibrium.', answer:0.339, unit:'M', tolerance:0.01,
    solution:'<p>K = (2x)^2/(0.400-x) = 0.500 → 4x^2 + 0.500x − 0.200 = 0<br>x = (−0.500+√(0.250+3.20))/8 = 0.1697 M<br>[B] = 2x = <strong>0.339 M</strong></p>'},

  {id:'p95', difficulty:'medium', type:'calc', tag:'K Relationships', q:'Given: (1) A ⇌ B, K1 = 4.0 and (2) B ⇌ C, K2 = 0.25. Find K for A ⇌ C.', answer:1.0, unit:'', tolerance:0.05,
    solution:'<p>Adding two reactions multiplies their K values.<br>K_total = K1 × K2 = 4.0 × 0.25 = <strong>1.0</strong></p>'},

  {id:'p96', difficulty:'medium', type:'calc', tag:'K Relationships', q:'If K = 16.0 for a reaction, what is K if the equation is halved (all coefficients ×½)?', answer:4.0, unit:'', tolerance:0.1,
    solution:'<p>Halving a reaction takes the square root of K.<br>K_new = √16.0 = <strong>4.0</strong></p>'},

  {id:'p97', difficulty:'medium', type:'calc', tag:'Kp vs Kc', q:'For a reaction with Δn = +1, Kc = 0.0200 at 500 K. Calculate Kp. (R = 0.08206 L·atm/mol·K)', answer:0.821, unit:'', tolerance:0.02,
    solution:'<p>Kp = Kc(RT)^Δn = 0.0200 × (0.08206 × 500)^1 = 0.0200 × 41.03 = <strong>0.821</strong></p>'},

  {id:'p98', difficulty:'medium', type:'calc', tag:'Kp vs Kc', q:'For a reaction with Δn = −1, Kp = 2.50 at 500 K. Calculate Kc. (R = 0.08206 L·atm/mol·K)', answer:0.0609, unit:'', tolerance:0.002,
    solution:'<p>Kc = Kp/(RT) = 2.50/(0.08206 × 500) = 2.50/41.03 = <strong>0.0609</strong></p>'},

  {id:'p99', difficulty:'medium', type:'calc', tag:'Calculating K', q:'For A(g) ⇌ B(g) + C(g), K = 0.0800. At equilibrium, [B] = [C] = 0.0200 M. Find [A].', answer:0.00500, unit:'M', tolerance:0.0003,
    solution:'<p>K = [B][C]/[A] → [A] = [B][C]/K = (0.0200×0.0200)/0.0800 = 0.000400/0.0800 = <strong>0.00500 M</strong></p>'},

  {id:'p100', difficulty:'medium', type:'calc', tag:'Q vs K', q:'For 2A(g) ⇌ B(g) + C(g), K = 0.600. Calculate Q if [A] = 0.250 M, [B] = 0.100 M, [C] = 0.150 M.', answer:0.240, unit:'', tolerance:0.01,
    solution:'<p>Q = [B][C]/[A]^2 = (0.100)(0.150)/(0.250)^2 = 0.0150/0.0625 = <strong>0.240</strong><br>Q &lt; K, so the reaction shifts forward.</p>'},

  {id:'p101', difficulty:'medium', type:'calc', tag:'ICE Table', q:'For A(g) ⇌ B(g) + C(g), K = 0.0250. Start: [B]0 = [C]0 = 0.200 M, [A]0 = 0. Find [A] at equilibrium.', answer:0.141, unit:'M', tolerance:0.01,
    solution:'<p>Since Q would be infinite with [A]0=0, the system shifts reverse. Let r = amount converted back to A.<br>K = (0.200-r)^2/r = 0.0250 → r^2 − 0.425r + 0.0400 = 0<br>r = 0.1407 (the root &lt; 0.200)<br>[A] = <strong>0.141 M</strong></p>'},

  {id:'p102', difficulty:'medium', type:'calc', tag:'Le Châtelier', q:'For 2A(g) ⇌ B(g), K = 8.0. Start: [A]0 = 1.20 M, [B]0 = 0. Find [B] at equilibrium.', answer:0.478, unit:'M', tolerance:0.01,
    solution:'<p>K = x/(1.20-2x)^2 = 8.0 → 32x^2 − 39.4x + 11.52 = 0<br>x = 0.4778 (the root satisfying 2x &lt; 1.20)<br>[B] = <strong>0.478 M</strong></p>'},

  {id:'p103', difficulty:'medium', type:'calc', tag:'Calculating K', q:'For A(g) ⇌ B(g) + C(g), at equilibrium in a 2.0 L flask: 0.60 mol A, 0.30 mol B, 0.30 mol C. What is K?', answer:0.0750, unit:'', tolerance:0.003,
    solution:'<p>Concentrations = mol/L: [A]=0.30, [B]=0.15, [C]=0.15<br>K = [B][C]/[A] = (0.15)(0.15)/0.30 = 0.0225/0.30 = <strong>0.0750</strong></p>'},

  // ── HARD CALC (14) ──
  {id:'p104', difficulty:'hard', type:'calc', tag:'ICE Table', q:'N2O4(g) ⇌ 2NO2(g), K = 0.0250. Start: [N2O4]0 = 0.600 M, [NO2]0 = 0. Find [NO2] at equilibrium.', answer:0.116, unit:'M', tolerance:0.005,
    solution:'<p>K = (2x)^2/(0.600-x) = 0.0250 → 4x^2 + 0.0250x − 0.0150 = 0<br>x = 0.05819 M<br>[NO2] = 2x = <strong>0.116 M</strong></p>'},

  {id:'p105', difficulty:'hard', type:'calc', tag:'ICE Table', q:'For CO(g) + H2O(g) ⇌ CO2(g) + H2(g), K = 8.00. Start: [CO]0 = [H2O]0 = 0.450 M. Find [CO2] at equilibrium.', answer:0.333, unit:'M', tolerance:0.01,
    solution:'<p>√K = 2.828. x/(0.450-x) = 2.828 → x = 1.2728 − 2.828x → 3.828x = 1.2728 → x = 0.3325<br>[CO2] = <strong>0.333 M</strong></p>'},

  {id:'p106', difficulty:'hard', type:'calc', tag:'ICE Table', q:'For 2NH3(g) ⇌ N2(g) + 3H2(g), K = 5.0 × 10^-10. Start: [NH3]0 = 0.150 M. Find [N2] at equilibrium.', answer:8.03e-4, unit:'M', tolerance:5e-5,
    solution:'<p>ICE: NH3 loses 2x; N2 gains x; H2 gains 3x.<br>K = x(3x)^3/(0.150)^2 ≈ 27x^4/0.0225 = 5.0×10^-10 (x ≪ 0.150)<br>x^4 = 4.167×10^-13 → x = <strong>8.03 × 10^-4 M</strong></p>'},

  {id:'p107', difficulty:'hard', type:'calc', tag:'ICE Table', q:'For CO(g) + Cl2(g) ⇌ COCl2(g), K = 8.20 × 10^8. Start: [CO]0 = [Cl2]0 = 2.00 × 10^-3 M. Find [COCl2] at equilibrium.', answer:0.00200, unit:'M', tolerance:5e-5,
    solution:'<p>K is enormous — the reaction goes essentially to completion.<br>Leftover [CO]=[Cl2]=y ≈ √(0.00200/8.20×10^8) ≈ 1.56×10^-6 M (negligible)<br>[COCl2] ≈ <strong>0.00200 M</strong> (essentially complete reaction)</p>'},

  {id:'p108', difficulty:'hard', type:'calc', tag:'Le Châtelier', q:'For 2A(g) ⇌ B(g), K = 10.0. Start: [A]0 = 0.900 M, [B]0 = 0. Find [B] at equilibrium.', answer:0.356, unit:'M', tolerance:0.01,
    solution:'<p>K = x/(0.900-2x)^2 = 10.0 → 40x^2 − 37x + 8.1 = 0<br>x = 0.3557 (the root satisfying 2x &lt; 0.900)<br>[B] = <strong>0.356 M</strong></p>'},

  {id:'p109', difficulty:'hard', type:'calc', tag:'K Relationships', q:'K = 64.0 for A(g) ⇌ B(g) + C(g). Find K for ½B(g) + ½C(g) ⇌ ½A(g) (the reverse reaction, halved).', answer:0.125, unit:'', tolerance:0.005,
    solution:'<p>Reverse first: K_rev = 1/64.0 = 0.015625. Then halve the equation (square root of K):<br>K_new = √0.015625 = <strong>0.125</strong></p>'},

  {id:'p110', difficulty:'hard', type:'calc', tag:'Kp vs Kc', q:'For a reaction with Δn = −2, Kc = 250 at 650 K. Calculate Kp. (R = 0.08206 L·atm/mol·K)', answer:0.0879, unit:'', tolerance:0.004,
    solution:'<p>Kp = Kc(RT)^Δn = 250 × (0.08206 × 650)^-2 = 250 × (53.34)^-2 = 250 × 0.0003515 = <strong>0.0879</strong></p>'},

  {id:'p111', difficulty:'hard', type:'calc', tag:'K Relationships', q:'Given: (1) K1 = 2.0 × 10^-3, (2) K2 = 5.0 × 10^4, and (3) K3 = 8.0 (used in REVERSE to build the target). If the target reaction is Rxn1 + Rxn2 + reverse(Rxn3), find K_total.', answer:12.5, unit:'', tolerance:0.5,
    solution:'<p>K_total = K1 × K2 × (1/K3) = (2.0×10^-3)(5.0×10^4)(1/8.0) = 100 × 0.125 = <strong>12.5</strong></p>'},

  {id:'p112', difficulty:'hard', type:'calc', tag:'ICE Table', q:'For A(g) ⇌ 2B(g) + C(g), K = 0.0800. Start: [A]0 = 0.500 M. Find [C] at equilibrium.', answer:0.185, unit:'M', tolerance:0.01,
    solution:'<p>K = (2x)^2(x)/(0.500-x) = 4x^3/(0.500-x) = 0.0800<br>Solving numerically: x = 0.1847<br>[C] = x = <strong>0.185 M</strong></p>'},

  {id:'p113', difficulty:'hard', type:'calc', tag:'Kp vs Kc', q:'For N2O4(g) ⇌ 2NO2(g), Kp = 0.500 atm. Starting with only N2O4 at an initial partial pressure of 2.00 atm, find the equilibrium partial pressure of NO2.', answer:0.883, unit:'atm', tolerance:0.02,
    solution:'<p>Kp = (2x)^2/(2.00-x) = 0.500 → 4x^2 + 0.500x − 1.00 = 0<br>x = 0.4414 atm<br>P(NO2) = 2x = <strong>0.883 atm</strong></p>'},

  {id:'p114', difficulty:'hard', type:'calc', tag:'ICE Table', q:'For 2NO(g) ⇌ N2(g) + O2(g), K = 2400. Start: [NO]0 = 0.800 M. Find the equilibrium concentration of NO remaining (the reaction goes nearly to completion).', answer:0.00812, unit:'M', tolerance:0.001,
    solution:'<p>√K = 48.99. x/(0.800-2x) = 48.99 → x(1+97.98) = 39.19 → x = 0.3960<br>Leftover [NO] = 0.800 − 2x = 0.800 − 0.7920 = <strong>0.00812 M</strong></p>'},

  {id:'p115', difficulty:'hard', type:'calc', tag:'K Relationships', q:'K = 0.00250 for 3X(g) ⇌ Y(g). Find K for ⅓Y(g) ⇌ X(g) (the reverse reaction, taken to the ⅓ power).', answer:7.37, unit:'', tolerance:0.2,
    solution:'<p>Scale 3X⇌Y by ⅓ (X⇌⅓Y): K^(1/3) = (0.00250)^(1/3) = 0.1357. Then reverse:<br>K_new = 1/0.1357 = <strong>7.37</strong></p>'},

  {id:'p116', difficulty:'hard', type:'calc', tag:'ICE Table', q:'For N2(g) + 3H2(g) ⇌ 2NH3(g), K = 0.0400. Start: [N2]0 = [H2]0 = 1.50 M. Find [NH3] at equilibrium.', answer:0.269, unit:'M', tolerance:0.01,
    solution:'<p>K = (2x)^2/((1.50-x)(1.50-3x)^3) = 0.0400. Solving numerically: x = 0.1343<br>[NH3] = 2x = <strong>0.269 M</strong></p>'},

  {id:'p117', difficulty:'hard', type:'calc', tag:'Calculating K', q:'For A(g) ⇌ B(g) + C(g), K = 0.360. At equilibrium, [B] = [C] = 0.300 M (starting from pure A). Find [A]0, the initial concentration of A.', answer:0.550, unit:'M', tolerance:0.01,
    solution:'<p>[A]eq = [B][C]/K = (0.300)(0.300)/0.360 = 0.0900/0.360 = 0.250 M<br>Since x = [B] = 0.300 M was consumed from A: [A]0 = [A]eq + x = 0.250 + 0.300 = <strong>0.550 M</strong></p>'},

  // ═══ NEW CONCEPTUAL (34) ═══

  // ── EASY CONCEPT (8) ──
  {id:'p118', difficulty:'easy', type:'concept', tag:'Dynamic Equilibrium', q:'In a reversible reaction at equilibrium, what happens to the rates of the forward and reverse reactions over time?',
    choices:['Both increase steadily','Both decrease steadily','They become equal and remain constant','The forward rate becomes zero'],
    correct:2,
    solution:'<p>At equilibrium, the forward and reverse rates are equal and stay constant — this is what makes concentrations stop changing.</p>'},

  {id:'p119', difficulty:'easy', type:'concept', tag:'K Meaning', q:'If K = 4.5 × 10^-15 for a reaction, which best describes the equilibrium mixture?',
    choices:['Almost entirely products','Almost entirely reactants','Roughly equal amounts','Cannot be determined'],
    correct:1,
    solution:'<p>K ≪ 1 means very little product forms — the equilibrium mixture is almost entirely reactants.</p>'},

  {id:'p120', difficulty:'easy', type:'concept', tag:'Q vs K', q:'For a reaction where Q &gt; K, what must happen for the system to reach equilibrium?',
    choices:['Products must decrease and reactants must increase','Products must increase and reactants must decrease','No change is needed','The reaction must stop'],
    correct:0,
    solution:'<p>Q &gt; K means too much product relative to reactant. The system shifts reverse, decreasing products and increasing reactants until Q = K.</p>'},

  {id:'p121', difficulty:'easy', type:'concept', tag:'Catalyst', q:'Which condition change would NOT affect a system already at chemical equilibrium?',
    choices:['Changing temperature','Adding a catalyst','Removing a product','Adding more reactant'],
    correct:1,
    solution:'<p>A catalyst speeds up both the forward and reverse reactions equally, so it does not shift the equilibrium position or change K.</p>'},

  {id:'p122', difficulty:'easy', type:'concept', tag:'Le Châtelier', q:'For an exothermic reaction, cooling the system will shift equilibrium in which direction?',
    choices:['Toward reactants','Toward products','No shift occurs','Depends on pressure only'],
    correct:1,
    solution:'<p>For an exothermic reaction, heat is a product. Removing heat (cooling) shifts the equilibrium toward products.</p>'},

  {id:'p123', difficulty:'easy', type:'concept', tag:'Heterogeneous K', q:'Pure liquids and solids are omitted from equilibrium constant expressions because:',
    choices:['Their concentrations are effectively constant','They do not participate in the reaction','They evaporate too quickly','K only applies to gases'],
    correct:0,
    solution:'<p>The "concentration" of a pure solid or liquid (density/molar mass) does not change during the reaction, so it is folded into the constant K itself rather than written explicitly.</p>'},

  {id:'p124', difficulty:'easy', type:'concept', tag:'K Meaning', q:'If a reaction&#8217;s K value is exactly 1, what can be said about products and reactants at equilibrium?',
    choices:['No products form','No reactants remain','Products and reactants are present in comparable amounts (exactly equal concentrations only for simple 1:1 stoichiometry)','The reaction is nonreversible'],
    correct:2,
    solution:'<p>K = 1 means neither side is strongly favored — products and reactants are present in comparable amounts, though only truly equal in concentration for simple 1:1 reactions.</p>'},

  {id:'p125', difficulty:'easy', type:'concept', tag:'Le Châtelier', q:'What effect does increasing pressure (by decreasing volume) have on an equilibrium where both sides of the equation have the same number of moles of gas?',
    choices:['Shifts toward more moles of gas','Shifts toward fewer moles of gas','No effect on equilibrium position','K increases'],
    correct:2,
    solution:'<p>When Δn_gas = 0, pressure/volume changes affect both sides equally, so there is no shift in equilibrium position.</p>'},

  // ── MEDIUM CONCEPT (10) ──
  {id:'p126', difficulty:'medium', type:'concept', tag:'Le Châtelier', q:'A reaction has K = 25 at 300 K. Increasing the temperature causes K to decrease to 5.0. What can you conclude about the reaction&#8217;s enthalpy?',
    choices:['The reaction is exothermic','The reaction is endothermic','The reaction has ΔH = 0','Cannot be determined from K alone'],
    correct:0,
    solution:'<p>K decreasing as temperature increases is the signature of an exothermic reaction — added heat (a "product") shifts equilibrium backward.</p>'},

  {id:'p127', difficulty:'medium', type:'concept', tag:'Le Châtelier', q:'For the equilibrium 2A(g) ⇌ B(g) + C(s), what effect does decreasing the container volume have?',
    choices:['Shifts toward A, since only gas moles on each side matter and there are more on the reactant side','Shifts toward B, since there are 2 mol gas on the left and only 1 mol gas on the right (C(s) does not count)','No effect, since a solid is present','K decreases'],
    correct:1,
    solution:'<p>Only gaseous moles matter for pressure effects. Left: 2 mol gas (A). Right: 1 mol gas (B), since C(s) is not counted. Decreasing volume favors the side with fewer gas moles — forward, toward B.</p>'},

  {id:'p128', difficulty:'medium', type:'concept', tag:'Q vs K', q:'A student increases the concentration of a reactant in an equilibrium mixture. Which statement correctly describes what happens to Q and the resulting shift?',
    choices:['Q increases above K; shifts reverse','Q decreases below K; shifts forward to consume the added reactant','Q stays equal to K; no shift','Q becomes undefined'],
    correct:1,
    solution:'<p>Adding reactant increases the denominator of Q, making Q &lt; K. The system shifts forward to consume the added reactant and restore Q = K.</p>'},

  {id:'p129', difficulty:'medium', type:'concept', tag:'Le Châtelier', q:'Why does adding an inert gas at CONSTANT PRESSURE (allowing volume to increase) shift an equilibrium with unequal moles of gas on each side, while adding it at constant volume does not?',
    choices:['At constant pressure, the increasing volume decreases the partial pressures/concentrations of all reacting species, effectively acting like a pressure decrease; at constant volume, concentrations of reacting species are unaffected','Inert gases only react at constant pressure','Constant volume prevents any gas from moving','There is no real difference between the two cases'],
    correct:0,
    solution:'<p>At constant volume, adding inert gas raises total pressure but not the partial pressures/concentrations of the actual reacting gases, so Q is unchanged. At constant pressure, the container must expand, diluting all species and shifting equilibrium as if pressure had decreased.</p>'},

  {id:'p130', difficulty:'medium', type:'concept', tag:'Le Châtelier', q:'A reaction has a very small K at low temperature but a much larger K at high temperature. What does this suggest about the reaction?',
    choices:['It is exothermic','It is endothermic — increasing temperature favors the forward (product-forming) direction, increasing K','K is independent of temperature for this reaction','The reaction cannot be reversible'],
    correct:1,
    solution:'<p>K increasing with temperature is the signature of an endothermic reaction — heat behaves like a reactant, so adding it drives the equilibrium forward.</p>'},

  {id:'p131', difficulty:'medium', type:'concept', tag:'K Meaning', q:'Which statement correctly compares a large positive K (K=10^8) to a very negative ΔG (a highly spontaneous reaction)?',
    choices:['They are unrelated concepts','Both indicate the reaction strongly favors products at equilibrium — large K and very negative ΔG go together','A large K always means ΔG is positive','K and ΔG can never both be large for the same reaction'],
    correct:1,
    solution:'<p>ΔG = −RT ln K. A very negative ΔG corresponds to a very large K — both describe a reaction that strongly favors products.</p>'},

  {id:'p132', difficulty:'medium', type:'concept', tag:'Catalyst', q:'A catalyst is added to a reaction that has NOT yet reached equilibrium. Which is TRUE?',
    choices:['The catalyst changes the final equilibrium concentrations','The catalyst helps the system reach the SAME equilibrium concentrations faster, without changing K','The catalyst prevents equilibrium from ever being reached','The catalyst only affects the reverse reaction'],
    correct:1,
    solution:'<p>A catalyst speeds up both directions equally, so the system reaches the same equilibrium state faster — the destination is unchanged, only the speed of the journey.</p>'},

  {id:'p133', difficulty:'medium', type:'concept', tag:'Heterogeneous K', q:'For the heterogeneous equilibrium C(s) + H2O(g) ⇌ CO(g) + H2(g), which change would shift the equilibrium forward?',
    choices:['Adding more C(s)','Removing some CO(g)','Increasing the amount of solid carbon present, doubling its mass','Decreasing the volume of the container'],
    correct:1,
    solution:'<p>Removing a product (CO) decreases Q below K, shifting the equilibrium forward. Adding more solid C(s) does not change Q since solids are omitted from the K expression.</p>'},

  {id:'p134', difficulty:'medium', type:'concept', tag:'K Relationships', q:'Which pair of reactions, when added together, would give a K_total using the multiplication rule (K_total = K1 × K2)?',
    choices:['Two independent, unrelated reactions','Two reactions where the product of the first is a reactant in the second, and together they sum to a new overall reaction','Any two reactions with the same K value','Two reactions that are exact reverses of each other'],
    correct:1,
    solution:'<p>The multiplication rule applies when two reactions are added (a common intermediate species cancels) to give a new overall target reaction; then K_total = K1 × K2.</p>'},

  {id:'p135', difficulty:'medium', type:'concept', tag:'Q vs K', q:'A reaction vessel initially contains only products (no reactants). Which statement is true as the system approaches equilibrium?',
    choices:['Q starts at infinity (or very large) and decreases toward K as the reverse reaction proceeds','Q starts at zero and stays there','No reaction occurs since there are no reactants yet','The system is already at equilibrium'],
    correct:0,
    solution:'<p>With no reactants present, Q (products over reactants) starts extremely large (or undefined/infinite). The reverse reaction proceeds, converting products to reactants and decreasing Q toward K.</p>'},

  // ── HARD CONCEPT (16) ──
  {id:'p136', difficulty:'hard', type:'concept', tag:'K Relationships', q:'A reaction has K = 2.0 at 300 K. If the SAME reaction is written with all coefficients doubled, and then reversed, what is the new K value?',
    choices:['4.0','0.25','2.0','1/√2'],
    correct:1,
    solution:'<p>Doubling: K^2 = (2.0)^2 = 4.0. Reversing: 1/4.0 = <strong>0.25</strong></p>'},

  {id:'p137', difficulty:'hard', type:'concept', tag:'K Relationships', q:'Two reactions are combined: Reaction 1 (K1=100) is used in REVERSE, and Reaction 2 (K2=0.0500) is used as written and DOUBLED. What is K_total?',
    choices:['2.5 × 10^-5','2.0 × 10^3','5.0 × 10^-3','4.0 × 10^-4'],
    correct:0,
    solution:'<p>Reverse of Rxn1: 1/100 = 0.0100. Doubled Rxn2: (0.0500)^2 = 0.00250.<br>K_total = 0.0100 × 0.00250 = <strong>2.5 × 10^-5</strong></p>'},

  {id:'p138', difficulty:'hard', type:'concept', tag:'Q vs K', q:'A student measures Q at several time points as a reaction approaches equilibrium starting from pure reactants. Which pattern is expected?',
    choices:['Q starts at K and stays there','Q starts near zero and increases toward K over time','Q starts above K and decreases','Q oscillates randomly'],
    correct:1,
    solution:'<p>Starting with only reactants, Q (products/reactants) begins near zero and rises as the forward reaction proceeds, approaching K as equilibrium is reached.</p>'},

  {id:'p139', difficulty:'hard', type:'concept', tag:'K Meaning', q:'For an equilibrium mixture at a fixed temperature, if you double the volume of the container (for a reaction where Δn_gas ≠ 0), does K change?',
    choices:['Yes, K always changes with volume','No — K depends only on temperature; the equilibrium POSITION shifts, but K itself stays the same','Yes, but only if Δn is negative','No, and the position does not shift either'],
    correct:1,
    solution:'<p>K is a function of temperature only. Changing volume shifts the equilibrium POSITION (concentrations rebalance) but the value of K itself is unaffected.</p>'},

  {id:'p140', difficulty:'hard', type:'concept', tag:'Le Châtelier', q:'A student argues: "Since removing a product shifts equilibrium forward and increases the amount of product made, K must have increased." Is this reasoning correct?',
    choices:['Yes, removing a product always increases K','No — Le Chatelier shifts change the equilibrium POSITION (amounts), not K itself, which depends only on temperature','Yes, but only for exothermic reactions','No, because removing a product decreases K'],
    correct:1,
    solution:'<p>Le Chatelier shifts move the system to a NEW equilibrium position at the SAME K — concentration changes never change K itself, only temperature does.</p>'},

  {id:'p141', difficulty:'hard', type:'concept', tag:'K Meaning', q:'Which scenario describes a reaction that is both kinetically fast AND has an equilibrium that strongly favors reactants (small K)?',
    choices:['This combination is impossible — fast reactions always favor products','A reaction can reach equilibrium quickly (fast forward AND reverse rates) while still having very little product present at that equilibrium (small K); rate and equilibrium position are independent','Fast reactions always have large K','K determines the reaction rate directly'],
    correct:1,
    solution:'<p>Reaction rate (kinetics) and equilibrium position (thermodynamics, K) are independent properties. A reaction can rapidly reach an equilibrium that still favors reactants overwhelmingly.</p>'},

  {id:'p142', difficulty:'hard', type:'concept', tag:'Le Châtelier', q:'For 2X(g) ⇌ Y(g) + Z(s), predict the effect of INCREASING volume (decreasing pressure) on the equilibrium position.',
    choices:['Shifts toward Y and Z, since decreasing pressure favors the side with fewer moles of gas, and only 1 mol gas (Y) is on the product side (Z is solid and does not count)','Shifts toward X, since decreasing pressure favors the side with MORE moles of gas — 2 mol X on the reactant side vs only 1 mol gas (Y) on the product side, since Z(s) does not count','No shift, since Z(s) balances the moles','K decreases'],
    correct:1,
    solution:'<p>Counting only gas-phase species: reactant side has 2 mol gas (X), product side has 1 mol gas (Y) since Z(s) is omitted. Decreasing pressure (increasing volume) favors the side with MORE moles of gas — here, that is the reactant side (X). The equilibrium shifts <strong>toward X</strong>.</p>'},

  {id:'p143', difficulty:'hard', type:'concept', tag:'Le Châtelier', q:'A reaction is exothermic and has Δn_gas = 0 (equal moles of gas on both sides). Which changes would shift the equilibrium position?',
    choices:['Only pressure changes, since Δn=0 rules out temperature effects','Only temperature changes; pressure/volume changes have no effect since Δn=0','Only concentration changes of reactants or products; temperature has no effect since it is exothermic','Both temperature changes and changes in reactant/product concentration shift the position; pressure changes do not, because Δn=0'],
    correct:3,
    solution:'<p>Temperature always shifts equilibrium (and changes K) regardless of Δn. Concentration changes always shift position too. Only pressure/volume changes are neutralized when Δn_gas = 0.</p>'},

  {id:'p144', difficulty:'hard', type:'concept', tag:'K Meaning', q:'Two reactions have identical ΔH (both exothermic by the same amount) but very different K values at 25°C. What does this tell you?',
    choices:['This is impossible; equal ΔH always means equal K','K depends on both enthalpy AND entropy changes (via ΔG = ΔH − TΔS = −RT ln K), so reactions with equal ΔH can still have very different K if their ΔS differs','K only depends on ΔH, so this cannot happen','Temperature must be different for the two reactions'],
    correct:1,
    solution:'<p>K is governed by ΔG, which combines both ΔH and ΔS. Two reactions with the same ΔH can have very different ΔS, and therefore very different K, even at the same temperature.</p>'},

  {id:'p145', difficulty:'hard', type:'concept', tag:'Le Châtelier', q:'A sealed reaction vessel at equilibrium is suddenly compressed to half its original volume (at constant T) for a reaction with Δn_gas = −1. Immediately after compression (before any shift), how do Q and K compare?',
    choices:['Q = K still, since concentrations haven&#8217;t changed in ratio','Q ≠ K immediately after compression — concentrations all double, which changes Q by a factor depending on Δn, so the system must then shift to restore Q=K','Q becomes undefined','K changes immediately due to the volume change'],
    correct:1,
    solution:'<p>Halving volume doubles every concentration. Since Q&#8217;s formula has different net exponents for products vs reactants (Δn≠0), doubling all concentrations changes Q&#8217;s value, taking the system out of equilibrium until it re-shifts.</p>'},

  {id:'p146', difficulty:'hard', type:'concept', tag:'Calculating K', q:'In the reaction A(g) + B(g) ⇌ 2C(g), K = 1.00. At a given moment, [A] = [B] = [C] = 0.500 M. What can you conclude?',
    choices:['The system is at equilibrium, since all concentrations are equal','Q = [C]^2/([A][B]) = (0.500)^2/(0.500×0.500) = 1.00 = K, so yes, the system IS at equilibrium — but this is a coincidence of the specific numbers, not because the concentrations are equal','The system cannot be at equilibrium since K=1 requires unequal concentrations','Not enough information'],
    correct:1,
    solution:'<p>Plugging in gives Q = 1.00 = K, confirming equilibrium — but this results from the specific numbers chosen (equal concentrations happen to satisfy this particular K expression), not from a general rule that K=1 requires equal concentrations.</p>'},

  {id:'p147', difficulty:'hard', type:'concept', tag:'Heterogeneous K', q:'A reaction vessel contains an equilibrium mixture. A chemist adds a large excess of an INERT solid (not part of the reaction, doesn&#8217;t react or dissolve) to the vessel. What happens to the equilibrium?',
    choices:['Shifts forward, since more mass was added','Shifts reverse','No effect — an unreactive solid that isn&#8217;t part of the equilibrium expression cannot change Q','K increases due to the added mass'],
    correct:2,
    solution:'<p>Only species that appear in the K/Q expression can affect the equilibrium. An inert solid that does not participate in the reaction has no effect on Q, so no shift occurs.</p>'},

  {id:'p148', difficulty:'hard', type:'concept', tag:'K Meaning', q:'Which of these best explains why K is temperature-dependent but NOT dependent on the initial concentrations used to reach equilibrium?',
    choices:['K is a ratio of equilibrium concentrations determined by the reaction&#8217;s thermodynamics at a given T; different starting points reach different equilibrium concentrations, but the RATIO (K) they satisfy is always the same at that T','K depends on initial concentrations, this statement is false','K is only valid for one specific starting concentration','Temperature does not actually affect K'],
    correct:0,
    solution:'<p>K is fixed by the thermodynamics (ΔG) of the reaction at a given temperature. Different starting concentrations lead to different equilibrium concentrations, but they will always satisfy the same K at that temperature.</p>'},

  {id:'p149', difficulty:'hard', type:'concept', tag:'Le Châtelier', q:'A weak acid HA has a small Ka (its equilibrium constant for ionization). If you dilute the solution with water, Le Chatelier&#8217;s principle predicts the degree of ionization (fraction of HA that ionizes) will:',
    choices:['Decrease, since dilution reduces all concentrations equally','Stay exactly the same regardless of dilution','Increase — dilution shifts the equilibrium toward the side with MORE dissolved particles (more ions), increasing the fraction ionized even though absolute concentrations decrease','Become zero'],
    correct:2,
    solution:'<p>Dilution favors the side of an equilibrium with more dissolved particles. Since ionization produces 2 particles (H^+ and A^-) from 1 (HA), dilution shifts the equilibrium toward more ionization, increasing the fraction ionized.</p>'},

  {id:'p150', difficulty:'hard', type:'concept', tag:'K Relationships', q:'Considering K Relationships and Le Chatelier&#8217;s Principle together: a target reaction is built from K1 (used as written) and the reverse of K2. When temperature is raised, the target reaction shifts reverse. What does this imply about whether the target reaction is exothermic or endothermic?',
    choices:['Endothermic, since a reverse shift always signals an endothermic reaction','Exothermic — a reverse shift with increasing temperature is the signature of an exothermic reaction, since K decreases as temperature rises','Cannot be determined from a reverse shift alone','The target reaction has no defined enthalpy since it was constructed from two other reactions'],
    correct:1,
    solution:'<p>A reaction that shifts reverse (toward reactants) as temperature increases has a K that decreases with temperature — this is the defining signature of an EXOTHERMIC reaction, regardless of how the reaction was constructed from other reactions.</p>'},

  {id:'p151', difficulty:'hard', type:'concept', tag:'Le Châtelier', q:'A reaction at equilibrium has K = 50. The container volume is doubled at constant temperature for a reaction with Δn_gas = +1 (more gas moles in products). Predict the qualitative shift, and state whether K changes.',
    choices:['Shifts toward products (more gas moles) to partially counteract the pressure decrease; K stays 50 since temperature is unchanged','Shifts toward reactants; K increases','No shift; K decreases to keep Q=K','Shifts toward products; K also doubles'],
    correct:0,
    solution:'<p>Doubling volume lowers pressure, so the equilibrium shifts toward the side with MORE moles of gas (products, since Δn=+1) to partially resist the pressure drop. Since temperature is unchanged, K remains exactly 50.</p>'},

  // ═══ NEW MULTI-STEP (20) ═══

  // ── EASY MULTI (2) ──
  {id:'p152', difficulty:'easy', type:'multi', tag:'Q vs K', q:'For A(g) + B(g) ⇌ C(g), K = 6.0. Current concentrations: [A] = 0.50 M, [B] = 0.40 M, [C] = 0.60 M. Calculate Q.', answer:3.0, unit:'', tolerance:0.1,
    solution:'<p>Q = [C]/([A][B]) = 0.60/(0.50 × 0.40) = 0.60/0.20 = <strong>3.0</strong><br>Q &lt; K, so the reaction shifts forward.</p>'},

  {id:'p153', difficulty:'easy', type:'multi', tag:'K Relationships', q:'If K = 81.0 for a forward reaction, what is K for the reverse reaction?', answer:0.01235, unit:'', tolerance:0.0005,
    solution:'<p>K_reverse = 1/K_forward = 1/81.0 = <strong>0.01235</strong></p>'},

  // ── MEDIUM MULTI (3) ──
  {id:'p154', difficulty:'medium', type:'multi', tag:'Full ICE', q:'For A(g) + B(g) ⇌ C(g) + D(g), K = 4.00. Start: [A]0 = [B]0 = 0.500 M. Find [C] at equilibrium.', answer:0.333, unit:'M', tolerance:0.01,
    solution:'<p>√K = 2.00. x/(0.500-x) = 2.00 → x = 1.00 − 2x → 3x = 1.00 → x = 0.333<br>[C] = <strong>0.333 M</strong></p>'},

  {id:'p155', difficulty:'medium', type:'multi', tag:'Q vs K', q:'For 2A(g) ⇌ B(g), K = 0.250. Current concentrations: [A] = 0.600 M, [B] = 0.0500 M. Calculate Q.', answer:0.1389, unit:'', tolerance:0.005,
    solution:'<p>Q = [B]/[A]^2 = 0.0500/(0.600)^2 = 0.0500/0.360 = <strong>0.1389</strong><br>Q &lt; K, so the reaction shifts forward.</p>'},

  {id:'p156', difficulty:'medium', type:'multi', tag:'Combine K values', q:'Given: (1) K1 = 15.0 and (2) K2 = 0.400. If the target reaction is Rxn1 + Rxn2, find K_total.', answer:6.00, unit:'', tolerance:0.2,
    solution:'<p>K_total = K1 × K2 = 15.0 × 0.400 = <strong>6.00</strong></p>'},

  // ── HARD MULTI (15) ──
  {id:'p157', difficulty:'hard', type:'multi', tag:'Full ICE', q:'N2O4(g) ⇌ 2NO2(g), K = 0.0400. Start: [N2O4]0 = 0.700 M, [NO2]0 = 0. Find [NO2] at equilibrium.', answer:0.158, unit:'M', tolerance:0.006,
    solution:'<p>K = (2x)^2/(0.700-x) = 0.0400 → 4x^2 + 0.0400x − 0.0280 = 0<br>x = 0.07882<br>[NO2] = 2x = <strong>0.158 M</strong></p>'},

  {id:'p158', difficulty:'hard', type:'multi', tag:'Full ICE', q:'For A(g) + B(g) ⇌ C(g) + D(g), K = 12.0. Start: [A]0 = [B]0 = 0.550 M. Find [C] at equilibrium.', answer:0.427, unit:'M', tolerance:0.01,
    solution:'<p>√K = 3.464. x/(0.550-x) = 3.464 → x = 1.9053 − 3.464x → 4.464x = 1.9053 → x = 0.4269<br>[C] = <strong>0.427 M</strong></p>'},

  {id:'p159', difficulty:'hard', type:'multi', tag:'Full ICE', q:'For 2NH3(g) ⇌ N2(g) + 3H2(g), K = 8.0 × 10^-10. Start: [NH3]0 = 0.250 M. Find [N2] at equilibrium.', answer:1.17e-3, unit:'M', tolerance:6e-5,
    solution:'<p>K ≈ 27x^4/(0.250)^2 = 8.0×10^-10 (x ≪ 0.250)<br>x^4 = 1.852×10^-12 → x = <strong>1.17 × 10^-3 M</strong></p>'},

  {id:'p160', difficulty:'hard', type:'multi', tag:'Full ICE', q:'For CO(g) + Cl2(g) ⇌ COCl2(g), K = 5.50 × 10^8. Start: [CO]0 = [Cl2]0 = 3.00 × 10^-3 M. Find [COCl2] at equilibrium.', answer:0.00300, unit:'M', tolerance:8e-5,
    solution:'<p>K is enormous — reaction goes essentially to completion.<br>Leftover [CO]=[Cl2] ≈ √(0.00300/5.50×10^8) ≈ 2.3×10^-6 M (negligible)<br>[COCl2] ≈ <strong>0.00300 M</strong></p>'},

  {id:'p161', difficulty:'hard', type:'multi', tag:'Le Châtelier multi', q:'For 2A(g) ⇌ B(g), K = 12.0. Start: [A]0 = 1.00 M, [B]0 = 0. Find [B] at equilibrium.', answer:0.408, unit:'M', tolerance:0.01,
    solution:'<p>K = x/(1.00-2x)^2 = 12.0 → 48x^2 − 49x + 12 = 0<br>x = 0.4078 (the root satisfying 2x &lt; 1.00)<br>[B] = <strong>0.408 M</strong></p>'},

  {id:'p162', difficulty:'hard', type:'multi', tag:'Combine K values', q:'K = 81.0 for A(g) ⇌ B(g) + C(g). Find K for ½B(g) + ½C(g) ⇌ ½A(g).', answer:0.1111, unit:'', tolerance:0.005,
    solution:'<p>Reverse first: 1/81.0 = 0.01235. Halve the equation (square root):<br>K_new = √0.01235 = <strong>0.1111</strong></p>'},

  {id:'p163', difficulty:'hard', type:'multi', tag:'Kp ICE', q:'For a reaction with Δn = +2, Kc = 0.0150 at 700 K. Calculate Kp. (R = 0.08206 L·atm/mol·K)', answer:49.5, unit:'', tolerance:1.5,
    solution:'<p>Kp = Kc(RT)^2 = 0.0150 × (0.08206 × 700)^2 = 0.0150 × (57.44)^2 = 0.0150 × 3299.3 = <strong>49.5</strong></p>'},

  {id:'p164', difficulty:'hard', type:'multi', tag:'Combine K values', q:'Given: (1) K1 = 4.0 × 10^-4, (2) K2 = 6.0 × 10^5 (used in REVERSE), and (3) K3 = 3.0 (used SQUARED). If the target is Rxn1 + reverse(Rxn2) + 2×Rxn3, find K_total.', answer:1.0e-8, unit:'', tolerance:5e-10,
    solution:'<p>K_total = K1 × (1/K2) × (K3)^2 = (4.0×10^-4)(1/6.0×10^5)(9.0) = (4.0×10^-4)(1.5×10^-6)(9.0) = <strong>1.0 × 10^-8</strong></p>'},

  {id:'p165', difficulty:'hard', type:'multi', tag:'Full ICE', q:'For A(g) ⇌ 2B(g) + C(g), K = 0.120. Start: [A]0 = 0.550 M. Find [C] at equilibrium.', answer:0.216, unit:'M', tolerance:0.01,
    solution:'<p>K = 4x^3/(0.550-x) = 0.120. Solving numerically: x = 0.2157<br>[C] = x = <strong>0.216 M</strong></p>'},

  {id:'p166', difficulty:'hard', type:'multi', tag:'Kp ICE', q:'For N2O4(g) ⇌ 2NO2(g), Kp = 0.750 atm. Starting with only N2O4 at an initial partial pressure of 2.50 atm, find the equilibrium partial pressure of NO2.', answer:1.19, unit:'atm', tolerance:0.03,
    solution:'<p>Kp = (2x)^2/(2.50-x) = 0.750 → 4x^2 + 0.750x − 1.875 = 0<br>x = 0.5973<br>P(NO2) = 2x = <strong>1.19 atm</strong></p>'},

  {id:'p167', difficulty:'hard', type:'multi', tag:'Full ICE', q:'For 2NO(g) ⇌ N2(g) + O2(g), K = 3600. Start: [NO]0 = 0.900 M. Find the equilibrium concentration of NO remaining (the reaction goes nearly to completion).', answer:0.00744, unit:'M', tolerance:0.001,
    solution:'<p>√K = 60.0. x/(0.900-2x) = 60.0 → x(1+120) = 54.0 → x = 0.4463<br>Leftover [NO] = 0.900 − 2x = 0.900 − 0.8926 = <strong>0.00744 M</strong></p>'},

  {id:'p168', difficulty:'hard', type:'multi', tag:'Combine K values', q:'K = 0.00160 for 2X(g) ⇌ 3Y(g). Find K for Y(g) ⇌ ⅔X(g).', answer:8.55, unit:'', tolerance:0.3,
    solution:'<p>Scale 2X⇌3Y by ⅓ (⅔X⇌Y): K^(1/3) = (0.00160)^(1/3) = 0.1170. Reverse to get Y⇌⅔X:<br>K_new = 1/0.1170 = <strong>8.55</strong></p>'},

  {id:'p169', difficulty:'hard', type:'multi', tag:'Full ICE', q:'For N2(g) + 3H2(g) ⇌ 2NH3(g), K = 0.0900. Start: [N2]0 = [H2]0 = 2.00 M. Find [NH3] at equilibrium.', answer:0.526, unit:'M', tolerance:0.02,
    solution:'<p>K = (2x)^2/((2.00-x)(2.00-3x)^3) = 0.0900. Solving numerically: x = 0.2632<br>[NH3] = 2x = <strong>0.526 M</strong></p>'},

  {id:'p170', difficulty:'hard', type:'multi', tag:'Calculating K', q:'For A(g) ⇌ B(g) + C(g), K = 0.500. At equilibrium, [B] = [C] = 0.400 M (starting from pure A). Find [A]0.', answer:0.720, unit:'M', tolerance:0.01,
    solution:'<p>[A]eq = [B][C]/K = (0.400)(0.400)/0.500 = 0.160/0.500 = 0.320 M<br>[A]0 = [A]eq + x = 0.320 + 0.400 = <strong>0.720 M</strong></p>'},

  {id:'p171', difficulty:'hard', type:'multi', tag:'Q → direction', q:'For H2(g) + I2(g) ⇌ 2HI(g), K = 54.0. A flask contains [H2] = 0.200 M, [I2] = 0.150 M, [HI] = 1.00 M. Calculate Q and determine the shift direction.', answer:33.3, unit:'', tolerance:1,
    solution:'<p>Q = [HI]^2/([H2][I2]) = (1.00)^2/(0.200×0.150) = 1.00/0.0300 = <strong>33.3</strong><br>Q &lt; K (33.3 &lt; 54.0), so the reaction shifts <strong>forward (→)</strong>, producing more HI.</p>'},

]; // end ALL_PROBLEMS — 171 problems total (81 original + 90 added)
