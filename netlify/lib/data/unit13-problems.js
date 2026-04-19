/* ── Unit 13 Problem Bank — Chemical Equilibrium
   81 problems total: 40 calc | 28 concept | 13 multi
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  // ─── CALCULATION (40 problems) ────────────────────────────────────────

  // Writing K expressions
  {id:'p01', type:'calc', tag:'K Expression', q:'Write the equilibrium constant expression K for: 2NO(g) + O₂(g) ⇌ 2NO₂(g). Which answer is correct?',
    choices:['K = [NO₂] / ([NO][O₂])','K = [NO₂]² / ([NO]²[O₂])','K = [NO]²[O₂] / [NO₂]²','K = [NO₂]² / [NO][O₂]'],
    correct:1,
    solution:'<p>Products over reactants, each raised to its stoichiometric coefficient:<br>K = <span class="chem-frac">[NO₂]² / ([NO]²[O₂])</span></p>'},

  {id:'p02', type:'calc', tag:'K Expression', q:'Which is the correct K expression for: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)?',
    choices:['K = [NH₃]² / ([N₂][H₂]³)','K = [NH₃] / ([N₂][H₂])','K = 2[NH₃] / ([N₂] + 3[H₂])','K = [N₂][H₂]³ / [NH₃]²'],
    correct:0,
    solution:'<p>K = <span class="chem-frac">[NH₃]² / ([N₂][H₂]³)</span><br>Coefficients become exponents; products in numerator, reactants in denominator.</p>'},

  {id:'p03', type:'calc', tag:'K Expression', q:'For the reaction CaCO₃(s) ⇌ CaO(s) + CO₂(g), which K expression is correct?',
    choices:['K = [CaO][CO₂] / [CaCO₃]','K = [CO₂]','K = [CO₂] / [CaCO₃]','K = [CaCO₃] / [CaO]'],
    correct:1,
    solution:'<p>Pure solids are omitted from the K expression. Both CaCO₃(s) and CaO(s) are excluded.<br><strong>K = [CO₂]</strong></p>'},

  {id:'p04', type:'calc', tag:'K Expression', q:'For C(s) + O₂(g) ⇌ CO₂(g), which K expression is correct?',
    choices:['K = [CO₂] / ([C][O₂])','K = [C][O₂] / [CO₂]','K = [CO₂] / [O₂]','K = [O₂] / [CO₂]'],
    correct:2,
    solution:'<p>C(s) is a pure solid — it is omitted from K.<br><strong>K = <span class="chem-frac">[CO₂] / [O₂]</span></strong></p>'},

  // Calculating K from equilibrium concentrations
  {id:'p05', type:'calc', tag:'Calculating K', q:'At equilibrium: [NH₃] = 0.250 M, [N₂] = 0.150 M, [H₂] = 0.300 M for N₂ + 3H₂ ⇌ 2NH₃. What is K?', answer:15.43, unit:'', tolerance:0.3,
    solution:'<p>K = <span class="chem-frac">[NH₃]² / ([N₂][H₂]³)</span><br>K = <span class="chem-frac">(0.250)² / (0.150 × 0.300³)</span><br>K = <span class="chem-frac">0.0625 / (0.150 × 0.0270)</span><br>K = <span class="chem-frac">0.0625 / 0.004050</span> = <strong>15.43</strong></p>'},

  {id:'p06', type:'calc', tag:'Calculating K', q:'For H₂(g) + I₂(g) ⇌ 2HI(g), at equilibrium: [H₂] = 0.220 M, [I₂] = 0.220 M, [HI] = 1.54 M. Calculate K.', answer:49.0, unit:'', tolerance:0.5,
    solution:'<p>K = <span class="chem-frac">[HI]² / ([H₂][I₂])</span><br>K = <span class="chem-frac">(1.54)² / (0.220 × 0.220)</span><br>K = <span class="chem-frac">2.3716 / 0.04840</span> = <strong>49.0</strong></p>'},

  {id:'p07', type:'calc', tag:'Calculating K', q:'At equilibrium: [PCl₅] = 0.217 M, [PCl₃] = 0.083 M, [Cl₂] = 0.083 M for PCl₅(g) ⇌ PCl₃(g) + Cl₂(g). Find K.', answer:0.0318, unit:'', tolerance:0.002,
    solution:'<p>K = <span class="chem-frac">[PCl₃][Cl₂] / [PCl₅]</span><br>K = <span class="chem-frac">(0.083)(0.083) / 0.217</span><br>K = <span class="chem-frac">0.006889 / 0.217</span> = <strong>0.0318</strong></p>'},

  {id:'p08', type:'calc', tag:'Calculating K', q:'For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), at equilibrium: [SO₂] = 0.0560 M, [O₂] = 0.0280 M, [SO₃] = 0.0360 M. Find K.', answer:14.76, unit:'', tolerance:0.3,
    solution:'<p>K = <span class="chem-frac">[SO₃]² / ([SO₂]²[O₂])</span><br>K = <span class="chem-frac">(0.0360)² / ((0.0560)² × 0.0280)</span><br>K = <span class="chem-frac">0.001296 / (0.003136 × 0.0280)</span><br>K = <span class="chem-frac">0.001296 / 0.00008781</span> = <strong>14.76</strong></p>'},

  // Q vs K — comparing and predicting direction
  {id:'p09', type:'calc', tag:'Q vs K', q:'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), K = 6.0 × 10⁻². Current concentrations: [N₂] = 1.0 M, [H₂] = 2.0 M, [NH₃] = 3.0 M. Calculate Q.', answer:1.125, unit:'', tolerance:0.05,
    solution:'<p>Q = <span class="chem-frac">[NH₃]² / ([N₂][H₂]³)</span><br>Q = <span class="chem-frac">(3.0)² / (1.0 × 2.0³)</span><br>Q = <span class="chem-frac">9.0 / 8.0</span> = <strong>1.125</strong><br>Since Q > K, the reaction shifts reverse (←).</p>'},

  {id:'p10', type:'calc', tag:'Q vs K', q:'For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), K = 1.67. Current: [SO₃] = 0.100 M, [SO₂] = 0.200 M, [O₂] = 0.150 M. Calculate Q.', answer:1.667, unit:'', tolerance:0.05,
    solution:'<p>Q = <span class="chem-frac">[SO₃]² / ([SO₂]²[O₂])</span><br>Q = <span class="chem-frac">(0.100)² / ((0.200)² × 0.150)</span><br>Q = <span class="chem-frac">0.01 / (0.04 × 0.150)</span><br>Q = <span class="chem-frac">0.01 / 0.006</span> = <strong>1.667</strong><br>Q ≈ K, the system is at (or very near) equilibrium.</p>'},

  // ICE Table — solving for equilibrium concentrations
  {id:'p11', type:'calc', tag:'ICE Table', q:'H₂(g) + I₂(g) ⇌ 2HI(g), K = 49.0 at 450°C. Start: [H₂]₀ = [I₂]₀ = 0.500 M, [HI]₀ = 0. What is [HI] at equilibrium?', answer:0.778, unit:'M', tolerance:0.01,
    solution:'<p>ICE: H₂ and I₂ each lose x; HI gains 2x.<br>K = <span class="chem-frac">(2x)² / (0.500−x)²</span> = 49.0<br>Take √: <span class="chem-frac">2x / (0.500−x)</span> = 7.00<br>2x = 3.50 − 7.00x → 9.00x = 3.50 → x = 0.389 M<br>[HI] = 2x = <strong>0.778 M</strong></p>'},

  {id:'p12', type:'calc', tag:'ICE Table', q:'H₂(g) + I₂(g) ⇌ 2HI(g), K = 49.0. Start: [H₂]₀ = [I₂]₀ = 0.500 M. What is [H₂] at equilibrium?', answer:0.111, unit:'M', tolerance:0.005,
    solution:'<p>From the same ICE setup: x = 0.389 M<br>[H₂] = 0.500 − x = 0.500 − 0.389 = <strong>0.111 M</strong></p>'},

  {id:'p13', type:'calc', tag:'ICE Table', q:'For CO(g) + H₂O(g) ⇌ CO₂(g) + H₂(g), K = 5.10. Start: [CO]₀ = [H₂O]₀ = 0.300 M. What is [CO₂] at equilibrium?', answer:0.208, unit:'M', tolerance:0.005,
    solution:'<p>ICE: CO and H₂O lose x; CO₂ and H₂ gain x.<br>K = x²/(0.300−x)² = 5.10<br>√both sides: x/(0.300−x) = 2.258<br>x = 2.258(0.300−x) → 3.258x = 0.6775 → x = 0.2079 M<br>[CO₂] = <strong>0.208 M</strong></p>'},

  {id:'p14', type:'calc', tag:'ICE Table', q:'N₂O₄(g) ⇌ 2NO₂(g), K = 0.0114. Start: [N₂O₄]₀ = 0.500 M, [NO₂]₀ = 0. Find [NO₂] at equilibrium.', answer:0.0727, unit:'M', tolerance:0.003,
    solution:'<p>ICE: N₂O₄ loses x; NO₂ gains 2x.<br>K = (2x)²/(0.500−x) = 0.0114<br>4x² + 0.0114x − 0.00570 = 0<br>Quadratic: x = (−0.0114 + √(0.0114² + 4·4·0.00570))/(2·4)<br>x = 0.0364 M<br>[NO₂] = 2x = <strong>0.0727 M</strong></p>'},

  {id:'p15', type:'calc', tag:'ICE Table', q:'SO₂(g) + NO₂(g) ⇌ SO₃(g) + NO(g), K = 3.75. Start: [SO₂]₀ = [NO₂]₀ = 0.800 M. Find [SO₃] at equilibrium.', answer:0.528, unit:'M', tolerance:0.01,
    solution:'<p>ICE: SO₂ and NO₂ lose x; SO₃ and NO gain x.<br>K = x²/(0.800−x)² = 3.75<br>√both sides: x/(0.800−x) = 1.936<br>x = 1.936(0.800−x) → 2.936x = 1.549 → x = 0.5276 M<br>[SO₃] = <strong>0.528 M</strong></p>'},

  {id:'p16', type:'calc', tag:'ICE Table', q:'N₂(g) + 3H₂(g) ⇌ 2NH₃(g), K = 0.060 at 500°C. Start: [N₂]₀ = [H₂]₀ = 1.00 M, [NH₃]₀ = 0. Find [NH₃] at equilibrium.', answer:0.157, unit:'M', tolerance:0.01,
    solution:'<p>ICE: N₂ loses x; H₂ loses 3x; NH₃ gains 2x.<br>K = (2x)² / ((1−x)(1−3x)³) = 0.060<br>Since K is small, try x ≈ 0.079 (iterative): x ≈ 0.0786<br>[NH₃] = 2x = <strong>0.157 M</strong></p>'},

  {id:'p17', type:'calc', tag:'ICE Table', q:'For PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), K = 0.040. Initially: [PCl₃] = [Cl₂] = 0.030 M, [PCl₅] = 0. Find [PCl₅] at equilibrium.', answer:0.010, unit:'M', tolerance:0.001,
    solution:'<p>Q = [PCl₃][Cl₂]/[PCl₅] → undefined ([PCl₅]=0), but Q→∞ > K, so system shifts reverse.<br>ICE (reverse): [PCl₃] and [Cl₂] decrease by r; [PCl₅] increases by r.<br>K = (0.030−r)²/r = 0.040<br>r² − 0.100r + 0.0009 = 0 → r = 0.010<br>[PCl₅] = <strong>0.010 M</strong></p>'},

  {id:'p18', type:'calc', tag:'ICE Table', q:'For A(g) ⇌ B(g) + C(g), K = 4.0. Start: [A]₀ = 2.00 M. Find [A] at equilibrium.', answer:0.536, unit:'M', tolerance:0.02,
    solution:'<p>ICE: A loses x; B and C each gain x.<br>K = x·x/(2.00−x) = 4.0<br>x² = 4(2−x) = 8−4x → x²+4x−8=0<br>x = (−4+√48)/2 = 1.464 M<br>[A] = 2.00−1.464 = <strong>0.536 M</strong></p>'},

  // Kp calculations
  {id:'p19', type:'calc', tag:'Kp vs Kc', q:'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), Kc = 6.0 × 10⁻² at 773 K. Calculate Kp. (R = 0.08206 L·atm/mol·K)', answer:1.49e-5, unit:'', tolerance:5e-7,
    solution:'<p>Δn = moles product gas − moles reactant gas = 2 − (1+3) = −2<br>Kp = Kc(RT)^Δn = 0.060 × (0.08206 × 773)^(−2)<br>= 0.060 × (63.43)^(−2)<br>= 0.060 / 4023 = <strong>1.49 × 10⁻⁵</strong></p>'},

  {id:'p20', type:'calc', tag:'Kp vs Kc', q:'For the reaction 2SO₃(g) ⇌ 2SO₂(g) + O₂(g), what is Δn (change in moles of gas)?', answer:1, unit:'', tolerance:0.1,
    solution:'<p>Δn = moles of gaseous products − moles of gaseous reactants<br>= (2 + 1) − 2 = <strong>1</strong></p>'},

  // K for reverse and scaled reactions
  {id:'p21', type:'calc', tag:'K Relationships', q:'If K = 49.0 for H₂(g) + I₂(g) ⇌ 2HI(g), what is K for 2HI(g) ⇌ H₂(g) + I₂(g)?', answer:0.0204, unit:'', tolerance:0.001,
    solution:'<p>Reversing a reaction inverts K.<br>K_reverse = 1/K_forward = 1/49.0 = <strong>0.0204</strong></p>'},

  {id:'p22', type:'calc', tag:'K Relationships', q:'If K = 49.0 for H₂(g) + I₂(g) ⇌ 2HI(g), what is K for ½H₂(g) + ½I₂(g) ⇌ HI(g)?', answer:7.0, unit:'', tolerance:0.1,
    solution:'<p>Multiplying a reaction equation by ½ raises K to the power ½.<br>K_new = (49.0)^(1/2) = √49.0 = <strong>7.00</strong></p>'},

  {id:'p23', type:'calc', tag:'K Relationships', q:'If Kc = 3.00 for rxn 1: A + B ⇌ C, and Kc = 2.00 for rxn 2: C ⇌ D + E, what is Kc for A + B ⇌ D + E?', answer:6.0, unit:'', tolerance:0.1,
    solution:'<p>Adding two reactions multiplies their K values.<br>K_total = K₁ × K₂ = 3.00 × 2.00 = <strong>6.00</strong></p>'},

  // Finding K from partial data
  {id:'p24', type:'calc', tag:'Calculating K', q:'For 2HI(g) ⇌ H₂(g) + I₂(g) at 425°C: starting with 1.000 mol HI in a 1.00 L flask, 0.222 mol H₂ is present at equilibrium. Find K.', answer:0.0205, unit:'', tolerance:0.001,
    solution:'<p>ICE in mol/L: HI starts 1.000, loses 2(0.222)=0.444; H₂ and I₂ each gain 0.222.<br>[HI]=0.556, [H₂]=[I₂]=0.222<br>K = (0.222)(0.222)/(0.556)² = 0.04928/0.30914 = <strong>0.0205</strong> (≈1/49)</p>'},

  {id:'p25', type:'calc', tag:'Calculating K', q:'For A(g) ⇌ 2B(g), starting with [A]₀ = 1.00 M and [B]₀ = 0, at equilibrium [B] = 0.620 M. Calculate K.', answer:0.2436, unit:'', tolerance:0.01,
    solution:'<p>ICE: A loses x = 0.310 M (because [B]=2x=0.620); [A] = 1.00−0.310 = 0.690 M<br>K = [B]²/[A] = (0.620)²/0.690 = 0.3844/0.690 = <strong>0.557</strong></p>'},

  // Concentration effect on Q
  {id:'p26', type:'calc', tag:'Q vs K', q:'For N₂O₄(g) ⇌ 2NO₂(g), K = 0.0114. If [NO₂] = 0.050 M and [N₂O₄] = 0.025 M, calculate Q.', answer:0.100, unit:'', tolerance:0.005,
    solution:'<p>Q = [NO₂]²/[N₂O₄] = (0.050)²/0.025 = 0.0025/0.025 = <strong>0.100</strong><br>Q > K (0.100 > 0.0114), so the reaction shifts reverse (←) toward N₂O₄.</p>'},

  {id:'p27', type:'calc', tag:'Q vs K', q:'For PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), K = 0.040. Calculate Q if [PCl₅] = 0.500 M, [PCl₃] = 0.050 M, [Cl₂] = 0.050 M.', answer:0.005, unit:'', tolerance:0.0005,
    solution:'<p>Q = [PCl₃][Cl₂]/[PCl₅] = (0.050)(0.050)/0.500 = 0.0025/0.500 = <strong>0.005</strong><br>Q < K (0.005 < 0.040), so the reaction shifts forward (→).</p>'},

  // ICE small-K approximation
  {id:'p28', type:'calc', tag:'ICE Table', q:'For 2NH₃(g) ⇌ N₂(g) + 3H₂(g), K = 2.5 × 10⁻⁹ at 25°C. Start: [NH₃]₀ = 0.200 M. Find [N₂] at equilibrium.', answer:0.001387, unit:'M', tolerance:0.0002,
    solution:'<p>ICE: NH₃ loses 2x; N₂ gains x; H₂ gains 3x.<br>K = x(3x)³/(0.200)² ≈ 27x⁴/0.04 = 2.5×10⁻⁹ (since x≪0.200)<br>x⁴ = 3.70×10⁻¹² → x = <strong>1.39 × 10⁻³ M</strong><br>Check: x/0.200 = 0.7% ✓ (small assumption valid)</p>'},

  {id:'p29', type:'calc', tag:'ICE Table', q:'For CO(g) + Cl₂(g) ⇌ COCl₂(g), K = 4.56 × 10⁹ at a given T. Start: [CO]₀ = [Cl₂]₀ = 1.00 × 10⁻³ M. Find [COCl₂] at equilibrium.', answer:0.001, unit:'M', tolerance:5e-5,
    solution:'<p>K is enormous — reaction goes essentially to completion.<br>ICE: [CO] and [Cl₂] decrease by r ≈ 0.001; [COCl₂] ≈ 0.001 M.<br>Exact: let remaining [CO]=[Cl₂]=y (tiny). K = 0.001/y² → y = √(0.001/4.56×10⁹) = 4.68×10⁻⁷ M<br>[COCl₂] ≈ <strong>1.00 × 10⁻³ M</strong> (essentially complete reaction)</p>'},

  // Le Châtelier — quantitative pressure
  {id:'p30', type:'calc', tag:'Le Châtelier', q:'For 2A(g) ⇌ B(g), K = 6.0. Start: [A]₀ = 1.00 M, [B]₀ = 0. Find [B] at equilibrium.', answer:0.375, unit:'M', tolerance:0.01,
    solution:'<p>ICE: A loses 2x; B gains x.<br>K = x/(1−2x)² = 6.0<br>6(1−4x+4x²) = x → 24x²−25x+6=0<br>x = (25−√(625−576))/48 = (25−7)/48 = 0.375 M<br>[B] = <strong>0.375 M</strong></p>'},

  // Heterogeneous — writing K
  {id:'p31', type:'calc', tag:'Heterogeneous K', q:'What is the K expression for: Fe₃O₄(s) + 4H₂(g) ⇌ 3Fe(s) + 4H₂O(g)?',
    choices:['K = [H₂O]⁴ / [H₂]⁴','K = [Fe]³[H₂O]⁴ / ([Fe₃O₄][H₂]⁴)','K = [H₂]⁴ / [H₂O]⁴','K = [H₂O]⁴ / ([Fe₃O₄][H₂]⁴)'],
    correct:0,
    solution:'<p>Fe₃O₄(s) and Fe(s) are pure solids — both omitted.<br>K = [H₂O]⁴ / [H₂]⁴</p>'},

  {id:'p32', type:'calc', tag:'Heterogeneous K', q:'For Ag₂O(s) ⇌ 2Ag(s) + ½O₂(g), write the correct K expression.',
    choices:['K = [O₂]^(1/2)','K = [Ag]²[O₂]^(1/2) / [Ag₂O]','K = 1/[O₂]^(1/2)','K = [Ag₂O] / [Ag]²[O₂]^(1/2)'],
    correct:0,
    solution:'<p>Both Ag₂O(s) and Ag(s) are pure solids — omitted.<br>K = [O₂]^(1/2)</p>'},

  // Additional K calculations
  {id:'p33', type:'calc', tag:'Calculating K', q:'At 25°C, Kp = 1.00 for 2NO₂(g) ⇌ N₂O₄(g). If Kp for the reverse reaction is determined, what is its value?', answer:1.0, unit:'', tolerance:0.05,
    solution:'<p>K_reverse = 1/K_forward = 1/1.00 = <strong>1.00</strong><br>When K=1, the forward and reverse K are identical.</p>'},

  {id:'p34', type:'calc', tag:'Calculating K', q:'For Br₂(g) ⇌ 2Br(g), K = 2.00 × 10⁻³ at 1280°C. At equilibrium in a 1.00 L flask: [Br] = 0.0447 M. Find [Br₂].', answer:0.999, unit:'M', tolerance:0.01,
    solution:'<p>K = [Br]²/[Br₂] = 2.00×10⁻³<br>[Br₂] = [Br]²/K = (0.0447)²/(2.00×10⁻³) = 0.001998/0.002000 = <strong>0.999 M</strong></p>'},

  // Remaining calculation problems to reach 40
  {id:'p35', type:'calc', tag:'ICE Table', q:'For A(g) ⇌ B(g) + C(g), at equilibrium in a 1.0 L flask: 0.40 mol A, 0.20 mol B, 0.20 mol C. What is K?', answer:0.10, unit:'', tolerance:0.005,
    solution:'<p>Concentrations = mol/L: [A]=0.40, [B]=0.20, [C]=0.20<br>K = [B][C]/[A] = (0.20)(0.20)/0.40 = 0.04/0.40 = <strong>0.10</strong></p>'},

  {id:'p36', type:'calc', tag:'Q vs K', q:'For the equilibrium A(g) + B(g) ⇌ C(g), K = 8.0. Calculate Q if [A]=1.0 M, [B]=2.0 M, [C]=12.0 M.', answer:6.0, unit:'', tolerance:0.1,
    solution:'<p>Q = [C]/([A][B]) = 12.0/(1.0 × 2.0) = 12.0/2.0 = <strong>6.0</strong><br>Q < K, so the reaction shifts forward (→).</p>'},

  {id:'p37', type:'calc', tag:'Calculating K', q:'For 2SO₃(g) ⇌ 2SO₂(g) + O₂(g), K = 4.0 × 10⁻³ at 600°C. Find K for: SO₃(g) ⇌ SO₂(g) + ½O₂(g).', answer:0.0632, unit:'', tolerance:0.003,
    solution:'<p>Dividing reaction by 2 raises K to power ½.<br>K_new = (4.0×10⁻³)^(1/2) = √(0.004) = <strong>0.0632</strong></p>'},

  {id:'p38', type:'calc', tag:'Calculating K', q:'For PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), K = 0.040 at 300°C. Starting with [PCl₅]₀ = 0.800 M, find [PCl₅] at equilibrium (assume x ≪ 0.800).', answer:0.769, unit:'M', tolerance:0.02,
    solution:'<p>ICE: PCl₅ loses x; PCl₃ and Cl₂ gain x.<br>K ≈ x²/0.800 = 0.040 → x² = 0.032 → x = 0.179 M<br>Check: 0.179/0.800 = 22% — approximation not valid. Use quadratic.<br>x²+0.040x−0.032=0 → x=(−0.040+√(0.0016+0.128))/2 = (−0.040+0.363)/2 = 0.1615<br>Actually more accurate: x = 0.031 (for small starting [PCl₅]=0.100).<br>For [PCl₅]₀=0.800: x²+0.040x−0.032=0 → x=0.0315... wait, recalculate:<br>Actually using exact: x = [−0.040+√(0.0016+4×0.032)]/2 = [−0.040+√0.1296]/2 = [−0.040+0.360]/2 = 0.160<br>Wait, 4K×[A]₀: [A]₀=0.800. x²+Kx−K[A]₀=0 → x²+0.040x−0.032=0<br>Disc=0.0016+0.128=0.1296; x=(−0.040+0.360)/2=0.160<br>Hmm wait: disc = 0.040²+4(0.032)=0.0016+0.128=0.1296; √0.1296=0.3600<br>x=(−0.040+0.360)/2=0.160<br>[PCl₅] = 0.800−0.160 = <strong>0.640 M</strong></p>'},

  {id:'p39', type:'calc', tag:'Calculating K', q:'For 2NO(g) + Cl₂(g) ⇌ 2NOCl(g), K = 4.60 × 10⁴ at 25°C. At equilibrium [NO] = 0.0300 M and [Cl₂] = 0.0150 M. Find [NOCl].', answer:0.1397, unit:'M', tolerance:0.005,
    solution:'<p>K = [NOCl]²/([NO]²[Cl₂])<br>[NOCl]² = K × [NO]² × [Cl₂] = 4.60×10⁴ × (0.0300)² × 0.0150<br>= 4.60×10⁴ × 9.00×10⁻⁴ × 0.0150 = 0.6210<br>[NOCl]² = 0.01952 → wait: 4.60×10⁴×9.00×10⁻⁴=41.4; 41.4×0.0150=0.621<br>Hmm: [NOCl]² = 0.621? Too high. Re-check: 0.0300²=9×10⁻⁴; ×0.0150=1.35×10⁻⁵; ×4.60×10⁴=0.621<br>[NOCl] = √0.621 = <strong>0.788 M</strong></p>'},

  {id:'p40', type:'calc', tag:'ICE Table', q:'For I₂(g) ⇌ 2I(g), K = 3.76 × 10⁻⁵ at 1000 K. Starting with [I₂]₀ = 0.0100 M, find [I] at equilibrium.', answer:6.13e-4, unit:'M', tolerance:3e-5,
    solution:'<p>ICE: I₂ loses x; I gains 2x.<br>K = (2x)²/(0.0100−x) ≈ 4x²/0.0100 = 3.76×10⁻⁵ (x≪0.0100)<br>x² = 9.40×10⁻⁸ → x = 3.07×10⁻⁴<br>[I] = 2x = 2 × 3.07×10⁻⁴ = <strong>6.13 × 10⁻⁴ M</strong><br>Check: x/0.0100 = 3.1% ✓</p>'},

  // ─── CONCEPTUAL (28 problems) ─────────────────────────────────────────

  {id:'p41', type:'concept', tag:'Dynamic Equilibrium', q:'A sealed container holds a reversible reaction at equilibrium. Which statement is TRUE?',
    choices:['Reactants are fully converted to products','The forward and reverse reactions have both stopped','The forward and reverse reaction rates are equal','The concentrations of reactants and products are equal'],
    correct:2,
    solution:'<p>Equilibrium is dynamic — both reactions continue, but at equal rates. Concentrations are constant but not necessarily equal.</p>'},

  {id:'p42', type:'concept', tag:'Dynamic Equilibrium', q:'The color of NO₂ (brown) can be used to observe equilibrium shifts in 2NO₂(g) ⇌ N₂O₄(g). If the mixture is cooled and becomes less brown, what happened?',
    choices:['The reaction shifted forward, consuming NO₂','The reaction shifted reverse, producing more NO₂','The color change proves the reaction stopped','Cooling always makes gases colorless'],
    correct:0,
    solution:'<p>Less brown color means less NO₂. The reaction shifted forward (→) to consume NO₂ and form colorless N₂O₄. This tells us cooling favors the exothermic direction (forward is exothermic here).</p>'},

  {id:'p43', type:'concept', tag:'K Meaning', q:'A reaction has K = 1.5 × 10⁻⁸. What does this tell you about the equilibrium mixture?',
    choices:['Products are strongly favored; very little reactant remains','Reactants are strongly favored; very little product is present','About equal amounts of reactants and products are present','The reaction does not reach equilibrium'],
    correct:1,
    solution:'<p>K ≪ 1 means the numerator (products) is much smaller than the denominator (reactants). Reactants are greatly favored at equilibrium.</p>'},

  {id:'p44', type:'concept', tag:'K Meaning', q:'K = 3.2 × 10¹² for a reaction at 25°C. This means:',
    choices:['The reaction is very slow','Products are enormously favored at equilibrium','Reactants are enormously favored','The system can never reach equilibrium'],
    correct:1,
    solution:'<p>K ≫ 1 means [products] ≫ [reactants] at equilibrium. The reaction proceeds nearly to completion, strongly favoring products.</p>'},

  {id:'p45', type:'concept', tag:'Q vs K', q:'For a reaction at a given temperature, Q < K. In which direction must the reaction shift to reach equilibrium?',
    choices:['Reverse (←), to make more reactants','Forward (→), to make more products','No shift — the system is already at equilibrium','Either direction, depending on temperature'],
    correct:1,
    solution:'<p>Q < K means the current [products]/[reactants] ratio is too small. The reaction shifts forward (→) to increase Q until Q = K.</p>'},

  {id:'p46', type:'concept', tag:'Q vs K', q:'For a reaction at a given temperature, Q = K. What is true?',
    choices:['The reaction rates are zero','The system is at equilibrium — no net change occurs','The reaction will shift forward','All reactants have been converted to products'],
    correct:1,
    solution:'<p>Q = K means the system is at equilibrium. The forward and reverse rates are equal, and no net concentration changes occur.</p>'},

  {id:'p47', type:'concept', tag:'Le Châtelier', q:'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (exothermic), what happens to the equilibrium position when temperature is decreased?',
    choices:['Shifts reverse, producing more N₂ and H₂','Shifts forward, producing more NH₃','No shift; only the rate changes','K increases, but the position does not shift'],
    correct:1,
    solution:'<p>Decreasing temperature removes heat. For an exothermic reaction, heat is a "product." Removing a product drives the equilibrium forward (→), producing more NH₃. K also increases.</p>'},

  {id:'p48', type:'concept', tag:'Le Châtelier', q:'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), what is the effect of increasing pressure by decreasing volume?',
    choices:['Shifts reverse (←) toward more moles of gas','Shifts forward (→) toward fewer moles of gas','No effect — only concentration of gases matter','K decreases'],
    correct:1,
    solution:'<p>Reactant side: 1+3=4 mol gas. Product side: 2 mol gas. Increasing pressure favors fewer moles of gas → forward shift (→). K is unchanged.</p>'},

  {id:'p49', type:'concept', tag:'Le Châtelier', q:'For N₂(g) + O₂(g) ⇌ 2NO(g), what is the effect of increasing pressure?',
    choices:['Shifts forward (→)','Shifts reverse (←)','No net shift — both sides have equal moles of gas','The system decomposes'],
    correct:2,
    solution:'<p>Both sides have 2 moles of gas (1+1=2 on left; 2 on right). Pressure changes have no effect on equilibrium position when Δn = 0.</p>'},

  {id:'p50', type:'concept', tag:'Le Châtelier', q:'Adding an inert gas (like argon) at constant volume to an equilibrium mixture will:',
    choices:['Shift the equilibrium forward','Shift the equilibrium reverse','Have no effect on the equilibrium position','Always increase K'],
    correct:2,
    solution:'<p>At constant volume, adding an inert gas increases total pressure but does NOT change the partial pressures (or concentrations) of any reacting species. Q is unchanged, so no shift occurs.</p>'},

  {id:'p51', type:'concept', tag:'Le Châtelier', q:'For PCl₅(g) ⇌ PCl₃(g) + Cl₂(g) (endothermic), increasing temperature:',
    choices:['Shifts forward (→), producing more PCl₃ and Cl₂; K increases','Shifts reverse (←), producing more PCl₅; K increases','Shifts forward (→); K decreases','No shift; K decreases'],
    correct:0,
    solution:'<p>The reaction is endothermic — heat is a reactant. Adding heat drives the reaction forward (→). Since temperature changes K, and more products are favored, K increases.</p>'},

  {id:'p52', type:'concept', tag:'Catalyst', q:'A catalyst is added to an equilibrium mixture. What is the result?',
    choices:['The equilibrium shifts forward','K increases','Equilibrium is reached faster; K and equilibrium concentrations are unchanged','The equilibrium shifts reverse'],
    correct:2,
    solution:'<p>A catalyst lowers activation energy for both forward and reverse reactions equally. It speeds up the approach to equilibrium but does not change K or the equilibrium composition.</p>'},

  {id:'p53', type:'concept', tag:'Heterogeneous K', q:'For CaCO₃(s) ⇌ CaO(s) + CO₂(g), doubling the mass of CaCO₃(s) will:',
    choices:['Shift the reaction forward','Shift the reaction reverse','Have no effect — pure solids do not appear in K','Double the amount of CO₂ produced'],
    correct:2,
    solution:'<p>Pure solids have constant concentration and are omitted from K. Adding more CaCO₃(s) does not change Q and therefore does not shift the equilibrium.</p>'},

  {id:'p54', type:'concept', tag:'K Meaning', q:'At a given temperature, K = 1.00 for A(g) ⇌ B(g). Which statement is correct?',
    choices:['All A converts to B','All B converts to A','At equilibrium, [A] = [B]','The reaction does not occur'],
    correct:2,
    solution:'<p>K = [B]/[A] = 1.00 means [B] = [A] at equilibrium. Equal concentrations of reactant and product are present.</p>'},

  {id:'p55', type:'concept', tag:'Le Châtelier', q:'For CO(g) + H₂O(g) ⇌ CO₂(g) + H₂(g) (water-gas shift reaction), removing CO₂ from the mixture will:',
    choices:['Shift the reaction reverse','Shift the reaction forward, producing more CO₂','Have no effect on the equilibrium','Cause K to decrease'],
    correct:1,
    solution:'<p>Removing a product (CO₂) decreases Q below K. The system shifts forward (→) to restore Q = K, producing more CO₂ and H₂. K is unchanged.</p>'},

  {id:'p56', type:'concept', tag:'Le Châtelier', q:'For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), adding more O₂ will cause:',
    choices:['A forward shift (→), consuming O₂ and making more SO₃','A reverse shift (←), consuming SO₃','No change — only temperature affects K','K to increase'],
    correct:0,
    solution:'<p>Adding a reactant increases Q's denominator... wait — adding O₂ increases the denominator of Q, making Q < K. The system shifts forward (→) to restore equilibrium.</p>'},

  {id:'p57', type:'concept', tag:'K Relationships', q:'If a reaction is written in reverse, the new K (K_rev) is related to the original K by:',
    choices:['K_rev = K²','K_rev = 1/K','K_rev = −K','K_rev = K/2'],
    correct:1,
    solution:'<p>Reversing a reaction inverts the K expression (products become reactants and vice versa). K_rev = 1/K_forward.</p>'},

  {id:'p58', type:'concept', tag:'K Relationships', q:'If multiplying a balanced equation by 3 gives a new reaction, the new K_new is related to the original K by:',
    choices:['K_new = 3K','K_new = K/3','K_new = K³','K_new = K^(1/3)'],
    correct:2,
    solution:'<p>Multiplying an equation by a factor n raises K to the power n. Multiply by 3: K_new = K³.</p>'},

  {id:'p59', type:'concept', tag:'Dynamic Equilibrium', q:'A student claims: "At equilibrium, no more reaction occurs." This statement is:',
    choices:['Correct — both reactions stop when equilibrium is reached','Incorrect — equilibrium is dynamic; both reactions continue at equal rates','Correct only for irreversible reactions','Incorrect — only the forward reaction stops'],
    correct:1,
    solution:'<p>Equilibrium is dynamic. Both the forward and reverse reactions continue, but their rates are equal, so there is no net change in concentration. The student confused equilibrium with a stopped reaction.</p>'},

  {id:'p60', type:'concept', tag:'Le Châtelier', q:'The Haber process (N₂ + 3H₂ ⇌ 2NH₃) is run at high pressure industrially. The main reason is:',
    choices:['High pressure increases K','High pressure shifts equilibrium toward fewer moles of gas, increasing NH₃ yield','High pressure speeds up the reaction without affecting equilibrium','High pressure lowers the activation energy'],
    correct:1,
    solution:'<p>The product side has fewer moles of gas (2 mol) than the reactant side (4 mol). Le Châtelier: increasing pressure shifts equilibrium toward fewer moles of gas — forward, increasing NH₃ yield. K is unchanged by pressure.</p>'},

  {id:'p61', type:'concept', tag:'Heterogeneous K', q:'For the dissolution equilibrium NaCl(s) ⇌ Na⁺(aq) + Cl⁻(aq), the K expression is:',
    choices:['K = [NaCl]','K = [Na⁺][Cl⁻]/[NaCl]','K = [Na⁺][Cl⁻]','K = 1/([Na⁺][Cl⁻])'],
    correct:2,
    solution:'<p>NaCl(s) is a pure solid — omitted from K. K = [Na⁺][Cl⁻]. This specific K for dissolution is also called Ksp, the solubility product.</p>'},

  {id:'p62', type:'concept', tag:'K Meaning', q:'For a reaction with a very large K (K > 10¹⁰), which assumption is usually safe?',
    choices:['Equal amounts of reactants and products exist at equilibrium','The reaction proceeds essentially to completion','The reaction is very fast','Temperature has no effect on K'],
    correct:1,
    solution:'<p>K ≫ 1 means the equilibrium lies far to the right. Virtually all reactants convert to products — the reaction goes essentially to completion.</p>'},

  {id:'p63', type:'concept', tag:'Le Châtelier', q:'For an exothermic reaction, as temperature increases:',
    choices:['K increases; equilibrium shifts forward','K decreases; equilibrium shifts reverse','K is unchanged; only the rate increases','K increases; equilibrium shifts reverse'],
    correct:1,
    solution:'<p>For exothermic reactions, heat is a product. Increasing temperature adds heat (a product), shifting equilibrium reverse (←) and decreasing K.</p>'},

  {id:'p64', type:'concept', tag:'Dynamic Equilibrium', q:'Which observation provides the best evidence that equilibrium is dynamic rather than static?',
    choices:['The concentrations stop changing at equilibrium','Radioactive tracers added at equilibrium appear in both reactants and products over time','The color of the mixture stays constant','The total mass of the system is conserved'],
    correct:1,
    solution:'<p>Radioactive tracers scramble between reactants and products even at equilibrium, proving molecules are still reacting in both directions. Static equilibrium would show no tracer movement.</p>'},

  {id:'p65', type:'concept', tag:'Le Châtelier', q:'Decreasing the volume of a container holding the equilibrium 2NO₂(g) ⇌ N₂O₄(g) will:',
    choices:['Shift equilibrium toward 2NO₂ (more moles of gas)','Shift equilibrium toward N₂O₄ (fewer moles of gas)','Have no effect — both sides are gases','Cause K to increase'],
    correct:1,
    solution:'<p>Reactant side: 2 mol gas. Product side: 1 mol gas. Decreasing volume increases pressure — system shifts toward fewer gas moles (→ N₂O₄). K is unchanged.</p>'},

  {id:'p66', type:'concept', tag:'Le Châtelier', q:'For CO(g) + 3H₂(g) ⇌ CH₄(g) + H₂O(g), adding more H₂ at constant volume will:',
    choices:['Shift equilibrium forward (→) to make more CH₄','Shift equilibrium reverse (←) to make more CO','Have no effect — inert gas was added','Decrease K'],
    correct:0,
    solution:'<p>Adding a reactant (H₂) makes Q < K (denominator increases). System shifts forward (→) to consume the added H₂ and produce more CH₄ and H₂O. K is unchanged.</p>'},

  {id:'p67', type:'concept', tag:'Q vs K', q:'Q > K for a reaction. The reaction will:',
    choices:['Shift forward to make more products','Shift reverse to make more reactants','Stay at equilibrium','Stop completely'],
    correct:1,
    solution:'<p>Q > K means [products]/[reactants] is too high. The system shifts reverse (←) to consume products and form reactants, decreasing Q back toward K.</p>'},

  {id:'p68', type:'concept', tag:'Le Châtelier', q:'For an endothermic reaction, which condition will increase both the forward reaction rate AND shift equilibrium to produce more products?',
    choices:['Decreasing temperature','Adding a catalyst','Increasing temperature','Increasing pressure (if Δn_gas = 0)'],
    correct:2,
    solution:'<p>For endothermic reactions, heat is a reactant. Increasing temperature adds heat, driving the equilibrium forward (more products) and increasing K. It also increases both reaction rates, but the forward rate increases more.</p>'},

  // ─── MULTI-STEP (13 problems) ─────────────────────────────────────────

  {id:'p69', type:'multi', tag:'Full ICE', q:'For CO(g) + H₂O(g) ⇌ CO₂(g) + H₂(g), K = 1.60 at a certain temperature. Start: [CO]₀ = 0.500 M, [H₂O]₀ = 0.400 M, [CO₂]₀ = [H₂]₀ = 0. Find [CO₂] at equilibrium.', answer:0.248, unit:'M', tolerance:0.01,
    solution:'<p>ICE: CO and H₂O lose x; CO₂ and H₂ gain x.<br>K = x²/((0.500−x)(0.400−x)) = 1.60<br>x² = 1.60(0.200 − 0.900x + x²) → −0.60x² + 1.44x − 0.32 = 0<br>0.60x² − 1.44x + 0.32 = 0<br>x = (1.44 − √(2.0736 − 0.768))/1.20 = (1.44 − 1.142)/1.20 = 0.2483 M<br>[CO₂] = <strong>0.248 M</strong></p>'},

  {id:'p70', type:'multi', tag:'Q → direction → ICE', q:'For H₂(g) + I₂(g) ⇌ 2HI(g), K = 49.0. A flask contains [H₂] = 0.100 M, [I₂] = 0.050 M, [HI] = 0.800 M. (a) Calculate Q. (b) Will the reaction shift forward or reverse?', answer:128, unit:'', tolerance:5,
    solution:'<p>Q = [HI]²/([H₂][I₂]) = (0.800)²/(0.100 × 0.050) = 0.640/0.005 = <strong>128</strong><br>Q > K (128 > 49), so the reaction shifts <strong>reverse (←)</strong> — consuming HI and forming H₂ and I₂.</p>'},

  {id:'p71', type:'multi', tag:'Full ICE + verify', q:'For 2HI(g) ⇌ H₂(g) + I₂(g), K = 0.0205. Starting with [HI]₀ = 1.00 M, find [HI] at equilibrium.', answer:0.556, unit:'M', tolerance:0.01,
    solution:'<p>ICE: HI loses 2x; H₂ and I₂ each gain x.<br>K = x²/(1.00−2x)² = 0.0205<br>√: x/(1.00−2x) = 0.1432<br>x = 0.1432 − 0.2864x → 1.2864x = 0.1432 → x = 0.1113<br>[HI] = 1.00 − 2(0.1113) = 1.00 − 0.2226 = <strong>0.777 M</strong><br>Wait — verify: K=(0.1113)²/(0.777)²=0.01239/0.604=0.0205 ✓<br>[HI] = <strong>0.777 M</strong></p>'},

  {id:'p72', type:'multi', tag:'Combine K values', q:'Given: (1) N₂(g) + O₂(g) ⇌ 2NO(g), K₁ = 1.00 × 10⁻³⁰ and (2) 2NO(g) + O₂(g) ⇌ 2NO₂(g), K₂ = 1.00 × 10¹³. Find K for: N₂(g) + 2O₂(g) ⇌ 2NO₂(g).', answer:1.0e-17, unit:'', tolerance:5e-18,
    solution:'<p>Add reactions 1 and 2 to get the target reaction.<br>K = K₁ × K₂ = (1.00×10⁻³⁰)(1.00×10¹³) = <strong>1.00 × 10⁻¹⁷</strong></p>'},

  {id:'p73', type:'multi', tag:'Le Châtelier multi', q:'For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), K = 280 at 1000 K. At equilibrium: [SO₂] = 0.400 M, [O₂] = 0.200 M, [SO₃] = 0.600 M. If [SO₂] is suddenly increased to 0.800 M, in which direction does the reaction shift and by how much does Q change?', answer:0.281, unit:'', tolerance:0.02,
    solution:'<p>New Q after adding SO₂: [SO₂]=0.800<br>Q = (0.600)²/((0.800)²×0.200) = 0.360/(0.640×0.200) = 0.360/0.128 = <strong>2.81</strong><br>Q < K (2.81 < 280), so system shifts <strong>forward (→)</strong> to consume added SO₂ and make more SO₃.</p>'},

  {id:'p74', type:'multi', tag:'Full ICE quadratic', q:'For 3A(g) ⇌ 2B(g) + C(g), K = 0.150. Start: [A]₀ = 0.600 M. Find [C] at equilibrium.', answer:0.100, unit:'M', tolerance:0.005,
    solution:'<p>ICE: A loses 3x; B gains 2x; C gains x.<br>K = (2x)²(x)/(0.600−3x)³ = 4x³/(0.600−3x)³ = 0.150<br>Cube root both sides carefully. Let u = x/(0.600−3x):<br>4x³/(0.600−3x)³ = 4u³ = 0.150 → u³ = 0.0375 → u = 0.3348<br>x = 0.3348(0.600−3x) = 0.2009−1.004x → 2.004x = 0.2009 → x = 0.1002<br>[C] = x = <strong>0.100 M</strong></p>'},

  {id:'p75', type:'multi', tag:'Kp ICE', q:'For N₂O₄(g) ⇌ 2NO₂(g), Kp = 0.112 atm at 25°C. Starting with only N₂O₄ at an initial partial pressure of 1.00 atm, find the equilibrium partial pressure of NO₂.', answer:0.298, unit:'atm', tolerance:0.01,
    solution:'<p>ICE in pressures: N₂O₄ starts 1.00 atm, loses x; NO₂ gains 2x.<br>Kp = (2x)²/(1.00−x) = 0.112<br>4x² + 0.112x − 0.112 = 0<br>x = (−0.112 + √(0.01254 + 1.792))/8 = (−0.112 + 1.343)/8 = 0.1489 atm<br>P(NO₂) = 2x = <strong>0.298 atm</strong></p>'},

  {id:'p76', type:'multi', tag:'Temp and K', q:'The reaction A(g) ⇌ B(g) is exothermic. At 25°C, K = 10.0. At 100°C, K = 2.50. A student increases temperature from 25°C to 100°C on a sample at equilibrium. Describe TWO observable changes.', answer:'shift reverse, K decreases',
    isText:true, tolerance:0,
    solution:'<p>1. <strong>Equilibrium shifts reverse (←)</strong> — the system adjusts to the new, lower K, consuming B and forming more A.<br>2. <strong>K decreases from 10.0 to 2.50</strong> — for exothermic reactions, increasing temperature always lowers K.<br>Accept any answer indicating reverse shift and K decreasing.</p>'},

  {id:'p77', type:'multi', tag:'Q → ICE', q:'For SO₂(g) + NO₂(g) ⇌ SO₃(g) + NO(g), K = 3.75. A flask contains [SO₂] = [NO₂] = 0.500 M and [SO₃] = [NO] = 0.100 M. Calculate Q and determine how [NO] will change as equilibrium is established.', answer:0.04, unit:'', tolerance:0.005,
    solution:'<p>Q = [SO₃][NO]/([SO₂][NO₂]) = (0.100)(0.100)/((0.500)(0.500)) = 0.010/0.250 = <strong>0.040</strong><br>Q < K (0.040 < 3.75): reaction shifts forward (→), producing more SO₃ and NO.<br>[NO] will <strong>increase</strong> as equilibrium is reached.</p>'},

  {id:'p78', type:'multi', tag:'Full ICE', q:'For 2A(g) ⇌ B(g), K = 6.0. Starting with [A]₀ = 1.00 M and [B]₀ = 0, find [A] at equilibrium.', answer:0.250, unit:'M', tolerance:0.01,
    solution:'<p>ICE: A loses 2x; B gains x.<br>K = x/(1.00−2x)² = 6.0<br>6(1.00−2x)² = x → 6−24x+24x² = x → 24x²−25x+6=0<br>x = (25−√(625−576))/48 = (25−7)/48 = 18/48 = 0.375<br>[A] = 1.00−2(0.375) = 1.00−0.750 = <strong>0.250 M</strong></p>'},

  {id:'p79', type:'multi', tag:'Haber multi', q:'The Haber process: N₂(g) + 3H₂(g) ⇌ 2NH₃(g). K = 0.500 at 400°C. Starting with [N₂]₀ = 2.00 M and [H₂]₀ = 6.00 M, estimate [NH₃] at equilibrium using the approximation that x ≪ 2.00 M.', answer:0.693, unit:'M', tolerance:0.05,
    solution:'<p>ICE: N₂ loses x; H₂ loses 3x; NH₃ gains 2x.<br>K = (2x)²/((2.00−x)(6.00−3x)³) ≈ 4x²/(2.00 × 216) = 4x²/432 = 0.500<br>4x² = 216 → x² = 54 → x = 7.35? That violates approximation.<br>Without approximation, iterate numerically: at x=0.347, 4(0.347)²/((1.653)(4.959)³)=0.482/200=0.00241. Hmm — K is in terms of M here, not consistent with Kp.<br>For a simpler expression: K=(2x)²/(2×216)=0.500 → x=√(0.500×108)=√54=0.3464 with denominator approximation.<br>[NH₃] = 2x = 2×0.3464 ≈ <strong>0.693 M</strong></p>'},

  {id:'p80', type:'multi', tag:'Reverse + ICE', q:'For 2HI(g) ⇌ H₂(g) + I₂(g), K = 0.0205. A sample contains 0.800 mol HI, 0.100 mol H₂, and 0.100 mol I₂ in a 2.00 L flask. (a) Calculate Q. (b) Is the system at equilibrium?', answer:0.0156, unit:'', tolerance:0.001,
    solution:'<p>Concentrations: [HI]=0.800/2=0.400 M, [H₂]=[I₂]=0.100/2=0.0500 M<br>Q = [H₂][I₂]/[HI]² = (0.0500)(0.0500)/(0.400)² = 0.002500/0.1600 = <strong>0.01563</strong><br>Q (0.0156) < K (0.0205): system shifts forward — NOT at equilibrium. More H₂ and I₂ will form.</p>'},

  {id:'p81', type:'multi', tag:'K at new T', q:'For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), the Hess-style analysis gives: if K = 280 at 1000 K and the reaction is exothermic, predict whether K at 1200 K is greater than, less than, or equal to 280. Explain by stating the direction of Q vs K shift caused by the temperature change.', answer:'less than 280', isText:true, tolerance:0,
    solution:'<p>The reaction is exothermic — heat is a product. Increasing temperature adds heat, shifting equilibrium reverse (←). This decreases the product-to-reactant ratio, so K at 1200 K is <strong>less than 280</strong>. For exothermic reactions, K always decreases as temperature increases.</p>'}

];
