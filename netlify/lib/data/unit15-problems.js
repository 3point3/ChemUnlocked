/* ── Unit 15 Problem Bank — Acids & Bases
   171 problems total: 73 calc | 63 concept | 35 multi (81 original + 90 added)
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  // ════════════════════════════════════════════════════════════════
  // CALCULATION — Strong Acid / Base pH  (p01–p10)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p01', difficulty:'easy', type:'calc', tag:'Strong Acid pH',
    q:'Calculate the pH of a 0.010 M HCl solution.',
    answer: 2.00, tolerance: 0.05, unit:'',
    solution:`<p>HCl is a strong acid, so it ionizes 100% in water.</p>
    <p>[H3O^+] = 0.010 M</p>
    <p>pH = -log(0.010) = -log(10^-2) = <strong>2.00</strong></p>`
  },
  {
    id:'p02', difficulty:'easy', type:'calc', tag:'Strong Acid pH',
    q:'Calculate the pH of a 0.050 M HNO3 solution.',
    answer: 1.30, tolerance: 0.05, unit:'',
    solution:`<p>HNO3 is a strong acid: [H3O^+] = 0.050 M<br>
    pH = -log(0.050) = <strong>1.30</strong></p>`
  },
  {
    id:'p03', difficulty:'easy', type:'calc', tag:'Strong Acid pH',
    q:'Calculate the pH of a 0.0025 M HCl solution.',
    answer: 2.60, tolerance: 0.05, unit:'',
    solution:`<p>[H3O^+] = 0.0025 M<br>
    pH = -log(0.0025) = -log(2.5 × 10^-3) = 3 - log(2.5) = 3 - 0.398 = <strong>2.60</strong></p>`
  },
  {
    id:'p04', difficulty:'easy', type:'calc', tag:'Strong Base pH',
    q:'Calculate the pH of a 0.010 M NaOH solution at 25 °C.',
    answer: 12.00, tolerance: 0.05, unit:'',
    solution:`<p>NaOH is a strong base, so [OH^-] = 0.010 M.</p>
    <p>pOH = -log(0.010) = 2.00</p>
    <p>pH = 14 - 2.00 = <strong>12.00</strong></p>`
  },
  {
    id:'p05', difficulty:'easy', type:'calc', tag:'Strong Base pH',
    q:'Calculate the pH of a 0.0050 M NaOH solution at 25 °C.',
    answer: 11.70, tolerance: 0.05, unit:'',
    solution:`<p>[OH^-] = 0.0050 M<br>
    pOH = -log(0.0050) = 2.30<br>
    pH = 14 - 2.30 = <strong>11.70</strong></p>`
  },
  {
    id:'p06', difficulty:'easy', type:'calc', tag:'Strong Base pH',
    q:'Calculate the pH of a 0.200 M KOH solution at 25 °C.',
    answer: 13.30, tolerance: 0.05, unit:'',
    solution:`<p>[OH^-] = 0.200 M<br>
    pOH = -log(0.200) = 0.699<br>
    pH = 14 - 0.699 = <strong>13.30</strong></p>`
  },
  {
    id:'p07', difficulty:'medium', type:'calc', tag:'Strong Acid pH',
    q:'A 0.0050 M H2SO4 solution is prepared. Assuming complete ionization of both protons, calculate the pH.',
    answer: 2.00, tolerance: 0.05, unit:'',
    solution:`<p>H2SO4 is a diprotic strong acid, so each formula unit releases 2 H^+.</p>
    <p>[H3O^+] = 2 × 0.0050 = 0.010 M</p>
    <p>pH = -log(0.010) = <strong>2.00</strong></p>`
  },
  {
    id:'p08', difficulty:'easy', type:'calc', tag:'pH → [H3O^+]',
    q:'A solution has pH = 1.00. Calculate [H3O^+] in mol/L.',
    answer: 0.10, tolerance: 0.005, unit:'mol/L',
    solution:`<p>[H3O^+] = 10^-ᵖᴴ = 10^-1·^00 = <strong>0.10 mol/L</strong></p>`
  },
  {
    id:'p09', difficulty:'easy', type:'calc', tag:'pH + pOH',
    q:'A solution has pOH = 3.00 at 25 °C. Calculate the pH.',
    answer: 11.00, tolerance: 0.05, unit:'',
    solution:`<p>pH + pOH = 14.00 at 25 °C<br>
    pH = 14.00 - 3.00 = <strong>11.00</strong></p>`
  },
  {
    id:'p10', difficulty:'easy', type:'calc', tag:'pH + pOH',
    q:'A solution has [OH^-] = 2.5 × 10^-4 M. Calculate the pH at 25 °C.',
    answer: 10.40, tolerance: 0.05, unit:'',
    solution:`<p>pOH = -log(2.5 × 10^-4) = 3.60<br>
    pH = 14 - 3.60 = <strong>10.40</strong></p>`
  },

  // ════════════════════════════════════════════════════════════════
  // CALCULATION — Weak Acid / Base ICE  (p11–p16)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p11', difficulty:'medium', type:'calc', tag:'Weak Acid pH',
    q:'Calculate the pH of a 0.100 M acetic acid solution. Kₐ = 1.8 × 10^-5.',
    answer: 2.87, tolerance: 0.05, unit:'',
    solution:`<p>Let [H3O^+] = x at equilibrium.</p>
    <p>Kₐ = x^2/(0.100 - x) ≈ x^2/0.100</p>
    <p>x = √(1.8 × 10^-5 × 0.100) = √(1.8 × 10^-6) = 1.34 × 10^-3 M</p>
    <p>The 5% check works because 1.34% &lt; 5%.</p>
    <p>pH = -log(1.34 × 10^-3) = <strong>2.87</strong></p>`
  },
  {
    id:'p12', difficulty:'hard', type:'calc', tag:'Weak Acid pH',
    q:'Calculate the pH of a 0.150 M HF solution. Kₐ = 6.8 × 10^-4.',
    answer: 2.01, tolerance: 0.05, unit:'',
    solution:`<p>Set up Kₐ = x^2/(C - x) where x = [H3O^+] and C = 0.150 M.</p><p>Because Kₐ is relatively large, use the quadratic formula:</p><p>x^2 + (6.8 × 10^-4)x - (6.8 × 10^-4)(0.150) = 0</p><p>x = [-6.8 × 10^-4 + √((6.8 × 10^-4)^2 + 4(6.8 × 10^-4)(0.150))] / 2</p><p>x = 9.77 × 10^-3 M</p><p>pH = -log(9.77 × 10^-3) = <strong>2.01</strong></p>`
  },
  {
    id:'p13', difficulty:'medium', type:'calc', tag:'Weak Acid pH',
    q:'Calculate the pH of a 0.0500 M formic acid (HCOOH) solution. Kₐ = 1.8 × 10^-4.',
    answer: 2.54, tolerance: 0.05, unit:'',
    solution:`<p>Approximate first: x ≈ √(1.8 × 10^-4 × 0.0500) = 3.0 × 10^-3 M<br>
    Check: 3.0 × 10^-3 / 0.0500 = 6% — slightly over 5%, use quadratic:<br>
    x = 2.91 × 10^-3 M<br>
    pH = -log(2.91 × 10^-3) = <strong>2.54</strong></p>`
  },
  {
    id:'p14', difficulty:'medium', type:'calc', tag:'Weak Acid pH',
    q:'Calculate the pH of a 0.200 M HCN solution. Kₐ = 4.9 × 10^-10.',
    answer: 5.00, tolerance: 0.05, unit:'',
    solution:`<p>x ≈ √(4.9 × 10^-10 × 0.200) = √(9.8 × 10^-11) = 9.90 × 10^-6 M<br>
    Check: 9.90 × 10^-6 / 0.200 = 0.005% ≪ 5% ✓<br>
    pH = -log(9.90 × 10^-6) = <strong>5.00</strong></p>`
  },
  {
    id:'p15', difficulty:'medium', type:'calc', tag:'Weak Base pH',
    q:'Calculate the pH of a 0.100 M NH3 solution. Kb = 1.8 × 10^-5.',
    answer: 11.13, tolerance: 0.05, unit:'',
    solution:`<p>NH3 + H2O ⇌ NH4^+ + OH^-<br>
    x ≈ √(1.8 × 10^-5 × 0.100) = 1.34 × 10^-3 M = [OH^-]<br>
    Check: 1.34% &lt; 5% ✓<br>
    pOH = -log(1.34 × 10^-3) = 2.87<br>
    pH = 14 - 2.87 = <strong>11.13</strong></p>`
  },
  {
    id:'p16', difficulty:'medium', type:'calc', tag:'Weak Base pH',
    q:'Calculate the pH of a 0.0250 M NH3 solution. Kb = 1.8 × 10^-5.',
    answer: 10.83, tolerance: 0.05, unit:'',
    solution:`<p>x ≈ √(1.8 × 10^-5 × 0.0250) = √(4.5 × 10^-7) = 6.71 × 10^-4 M<br>
    pOH = -log(6.71 × 10^-4) = 3.17<br>
    pH = 14 - 3.17 = <strong>10.83</strong></p>`
  },

  // ════════════════════════════════════════════════════════════════
  // CALCULATION — pKa / pKb / Ka / Kb conversions  (p17–p23)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p17', difficulty:'easy', type:'calc', tag:'pKa',
    q:'Acetic acid has Kₐ = 1.8 × 10^-5. Calculate its pKₐ.',
    answer: 4.74, tolerance: 0.05, unit:'',
    solution:`<p>pKₐ = -log(Kₐ) = -log(1.8 × 10^-5)<br>
    = -(log 1.8 + log 10^-5) = -(0.255 - 5) = <strong>4.74</strong></p>`
  },
  {
    id:'p18', difficulty:'easy', type:'calc', tag:'pKa',
    q:'Hydrofluoric acid has Kₐ = 6.8 × 10^-4. Calculate its pKₐ.',
    answer: 3.17, tolerance: 0.05, unit:'',
    solution:`<p>pKₐ = -log(6.8 × 10^-4) = -(log 6.8 - 4) = -(0.833 - 4) = <strong>3.17</strong></p>`
  },
  {
    id:'p19', difficulty:'easy', type:'calc', tag:'Ka from pKa',
    q:'A weak acid has pKₐ = 9.25. Calculate its Kₐ. Express your answer to 2 significant figures (e.g. 5.6e-10).',
    answer: 5.62e-10, tolerance: 5e-11, unit:'',
    solution:`<p>Kₐ = 10^-ᵖᴷᵃ = 10^-9·^25<br>
    = 10^-10 × 10^0·^75 = 10^-10 × 5.62 = <strong>5.62 × 10^-10</strong></p>`
  },
  {
    id:'p20', difficulty:'easy', type:'calc', tag:'Kb from Ka',
    q:'Acetic acid has Kₐ = 1.8 × 10^-5. Calculate Kb for the acetate ion (CH3COO^-).',
    answer: 5.56e-10, tolerance: 5e-11, unit:'',
    solution:`<p>Kₐ × Kb = Kw = 1.0 × 10^-14<br>
    Kb = Kw / Kₐ = (1.0 × 10^-14) / (1.8 × 10^-5) = <strong>5.56 × 10^-10</strong></p>`
  },
  {
    id:'p21', difficulty:'easy', type:'calc', tag:'pKb',
    q:'Ammonia has Kb = 1.8 × 10^-5. Calculate pKb.',
    answer: 4.74, tolerance: 0.05, unit:'',
    solution:`<p>pKb = -log(1.8 × 10^-5) = <strong>4.74</strong></p>`
  },
  {
    id:'p22', difficulty:'easy', type:'calc', tag:'pKa + pKb',
    q:'A weak base has pKb = 4.74. Calculate the pKₐ of its conjugate acid.',
    answer: 9.26, tolerance: 0.05, unit:'',
    solution:`<p>pKₐ + pKb = 14.00 at 25 °C<br>
    pKₐ = 14.00 - 4.74 = <strong>9.26</strong></p>`
  },
  {
    id:'p23', difficulty:'easy', type:'calc', tag:'Kb from Ka',
    q:'HCN has Kₐ = 4.9 × 10^-10. Calculate Kb for CN^-.',
    answer: 2.04e-5, tolerance: 1e-6, unit:'',
    solution:`<p>Kb = Kw / Kₐ = (1.0 × 10^-14) / (4.9 × 10^-10) = <strong>2.04 × 10^-5</strong></p>`
  },

  // ════════════════════════════════════════════════════════════════
  // CALCULATION — Kw / [H3O^+][OH^-] interconversions  (p24–p27)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p24', difficulty:'easy', type:'calc', tag:'Kw',
    q:'A solution has [H3O^+] = 3.5 × 10^-4 M. Calculate [OH^-] at 25 °C.',
    answer: 2.86e-11, tolerance: 5e-12, unit:'mol/L',
    solution:`<p>[OH^-] = Kw / [H3O^+] = (1.0 × 10^-14) / (3.5 × 10^-4) = <strong>2.86 × 10^-11 mol/L</strong></p>`
  },
  {
    id:'p25', difficulty:'easy', type:'calc', tag:'Kw',
    q:'A solution has [OH^-] = 4.0 × 10^-3 M. Calculate [H3O^+] at 25 °C.',
    answer: 2.50e-12, tolerance: 5e-13, unit:'mol/L',
    solution:`<p>[H3O^+] = Kw / [OH^-] = (1.0 × 10^-14) / (4.0 × 10^-3) = <strong>2.50 × 10^-12 mol/L</strong></p>`
  },
  {
    id:'p26', difficulty:'easy', type:'calc', tag:'pH → [OH^-]',
    q:'A solution has pH = 4.35. Calculate [OH^-] at 25 °C.',
    answer: 2.24e-10, tolerance: 1e-11, unit:'mol/L',
    solution:`<p>pOH = 14 - 4.35 = 9.65<br>
    [OH^-] = 10^-9·^65 = <strong>2.24 × 10^-10 mol/L</strong></p>`
  },
  {
    id:'p27', difficulty:'easy', type:'calc', tag:'pH → [H3O^+]',
    q:'A solution has pH = 9.72. Calculate [H3O^+] at 25 °C.',
    answer: 1.91e-10, tolerance: 5e-12, unit:'mol/L',
    solution:`<p>[H3O^+] = 10^-9·^72 = <strong>1.91 × 10^-10 mol/L</strong></p>`
  },

  // ════════════════════════════════════════════════════════════════
  // CALCULATION — Titration stoichiometry  (p28–p32)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p28', difficulty:'easy', type:'calc', tag:'Titration',
    q:'25.00 mL of 0.100 M HCl is titrated with 0.100 M NaOH. What volume of NaOH (in mL) is required to reach the equivalence point?',
    answer: 25.00, tolerance: 0.1, unit:'mL',
    solution:`<p>mol HCl = 0.02500 L × 0.100 mol/L = 2.50 × 10^-3 mol<br>
    At equivalence: mol NaOH = mol HCl<br>
    V(NaOH) = 2.50 × 10^-3 mol / 0.100 mol/L = 0.02500 L = <strong>25.00 mL</strong></p>`
  },
  {
    id:'p29', difficulty:'easy', type:'calc', tag:'Titration',
    q:'20.00 mL of 0.150 M HCl is titrated with 0.200 M NaOH. What volume of NaOH (in mL) is needed to reach the equivalence point?',
    answer: 15.00, tolerance: 0.1, unit:'mL',
    solution:`<p>mol HCl = 0.02000 L × 0.150 mol/L = 3.00 × 10^-3 mol<br>
    V(NaOH) = 3.00 × 10^-3 mol / 0.200 mol/L = 0.01500 L = <strong>15.00 mL</strong></p>`
  },
  {
    id:'p30', difficulty:'medium', type:'calc', tag:'Titration',
    q:'30.00 mL of 0.0800 M H2SO4 is titrated with 0.100 M NaOH. H2SO4 provides 2 H^+ per molecule. What volume of NaOH (in mL) is needed?',
    answer: 48.00, tolerance: 0.2, unit:'mL',
    solution:`<p>mol H^+ = 2 × 0.03000 L × 0.0800 mol/L = 4.80 × 10^-3 mol<br>
    V(NaOH) = 4.80 × 10^-3 / 0.100 = 0.04800 L = <strong>48.00 mL</strong></p>`
  },
  {
    id:'p31', difficulty:'easy', type:'calc', tag:'Titration',
    q:'10.00 mL of an unknown HCl solution is titrated to the equivalence point using 25.00 mL of 0.1000 M NaOH. Calculate the molarity of the HCl solution.',
    answer: 0.2500, tolerance: 0.005, unit:'M',
    solution:`<p>mol NaOH = 0.02500 L × 0.1000 mol/L = 2.500 × 10^-3 mol<br>
    mol HCl = mol NaOH = 2.500 × 10^-3 mol<br>
    [HCl] = 2.500 × 10^-3 mol / 0.01000 L = <strong>0.2500 M</strong></p>`
  },
  {
    id:'p32', difficulty:'easy', type:'calc', tag:'Titration',
    q:'25.00 mL of an unknown NaOH solution is titrated to the equivalence point using 18.50 mL of 0.1000 M HCl. Calculate the molarity of the NaOH solution.',
    answer: 0.0740, tolerance: 0.002, unit:'M',
    solution:`<p>mol HCl = 0.01850 L × 0.1000 mol/L = 1.850 × 10^-3 mol<br>
    [NaOH] = 1.850 × 10^-3 mol / 0.02500 L = <strong>0.0740 M</strong></p>`
  },

  // ════════════════════════════════════════════════════════════════
  // CALCULATION — pH during a titration  (p33–p35)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p33', difficulty:'medium', type:'calc', tag:'Titration pH',
    q:'25.00 mL of 0.100 M HCl has been treated with 10.00 mL of 0.100 M NaOH. Calculate the pH of the resulting solution (before the equivalence point).',
    answer: 1.37, tolerance: 0.05, unit:'',
    solution:`<p>mol HCl = 2.50 × 10^-3 mol; mol NaOH = 1.00 × 10^-3 mol<br>
    Excess H^+ = 1.50 × 10^-3 mol; total volume = 35.00 mL = 0.03500 L<br>
    [H^+] = 1.50 × 10^-3 / 0.03500 = 0.0429 M<br>
    pH = -log(0.0429) = <strong>1.37</strong></p>`
  },
  {
    id:'p34', difficulty:'easy', type:'calc', tag:'Titration pH',
    q:'25.00 mL of 0.100 M HCl is mixed with 25.00 mL of 0.100 M NaOH. Calculate the pH of the resulting solution.',
    answer: 7.00, tolerance: 0.05, unit:'',
    solution:`<p>Equal moles of strong acid and strong base — the equivalence point of a strong acid / strong base titration.<br>
    The salt (NaCl) does not hydrolyze. The solution is simply pure water.<br>
    pH = <strong>7.00</strong></p>`
  },
  {
    id:'p35', difficulty:'medium', type:'calc', tag:'Titration pH',
    q:'25.00 mL of 0.100 M HCl is mixed with 30.00 mL of 0.100 M NaOH. Calculate the pH (past the equivalence point).',
    answer: 11.96, tolerance: 0.05, unit:'',
    solution:`<p>mol HCl = 2.50 × 10^-3 mol; mol NaOH = 3.00 × 10^-3 mol<br>
    Excess OH^- = 5.0 × 10^-4 mol; total volume = 55.00 mL = 0.05500 L<br>
    [OH^-] = 5.0 × 10^-4 / 0.05500 = 9.09 × 10^-3 M<br>
    pOH = -log(9.09 × 10^-3) = 2.04<br>
    pH = 14 - 2.04 = <strong>11.96</strong></p>`
  },

  // ════════════════════════════════════════════════════════════════
  // CALCULATION — Polyprotic acids  (p36–p37)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p36', difficulty:'medium', type:'calc', tag:'Polyprotic Acid',
    q:'Calculate the pH of a 0.010 M H2CO3 solution. Use only the first ionization: Kₐ1 = 4.3 × 10^-7.',
    answer: 4.18, tolerance: 0.05, unit:'',
    solution:`<p>x ≈ √(Kₐ1 × C) = √(4.3 × 10^-7 × 0.010) = √(4.3 × 10^-9) = 6.56 × 10^-5 M<br>
    Check: 6.56 × 10^-5 / 0.010 = 0.66% &lt; 5% ✓<br>
    pH = -log(6.56 × 10^-5) = <strong>4.18</strong></p>`
  },
  {
    id:'p37', difficulty:'hard', type:'calc', tag:'Polyprotic Acid',
    q:'Calculate the pH of a 0.100 M H3PO4 solution. Use only the first ionization: Kₐ1 = 7.5 × 10^-3.',
    answer: 1.62, tolerance: 0.05, unit:'',
    solution:`<p>Percent ionization will be large — use the quadratic:<br>
    x^2 + (7.5 × 10^-3)x - (7.5 × 10^-3)(0.100) = 0<br>
    x = [-7.5 × 10^-3 + √((7.5 × 10^-3)^2 + 4(7.5 × 10^-3)(0.100))] / 2<br>
    x = 2.39 × 10^-2 M<br>
    pH = -log(2.39 × 10^-2) = <strong>1.62</strong></p>`
  },

  // ════════════════════════════════════════════════════════════════
  // MULTI-STEP  (p38–p52)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p38', difficulty:'medium', type:'multi', tag:'Mass → pH',
    q:'0.365 g of HCl (molar mass = 36.46 g/mol) is dissolved in enough water to make 500.0 mL of solution. Calculate the pH.',
    answer: 1.70, tolerance: 0.05, unit:'',
    solution:`<p>Step 1 — moles HCl: 0.365 g ÷ 36.46 g/mol = 0.01001 mol</p><p>Step 2 — molarity: 0.01001 mol / 0.5000 L = 0.02002 M</p><p>Step 3 — pH (strong acid): pH = -log(0.02002) = <strong>1.70</strong></p>`
  },
  {
    id:'p39', difficulty:'medium', type:'multi', tag:'Mass → pH',
    q:'2.00 g of NaOH (molar mass = 40.00 g/mol) is dissolved in enough water to make 250.0 mL of solution. Calculate the pH at 25 °C.',
    answer: 13.30, tolerance: 0.05, unit:'',
    solution:`<p>Step 1 — moles NaOH: 2.00 g ÷ 40.00 g/mol = 0.0500 mol<br>
    Step 2 — molarity: 0.0500 mol / 0.2500 L = 0.200 M<br>
    Step 3 — pOH = -log(0.200) = 0.699<br>
    pH = 14 - 0.699 = <strong>13.30</strong></p>`
  },
  {
    id:'p40', difficulty:'hard', type:'multi', tag:'Mass → pH',
    q:'1.00 g of HF (molar mass = 20.01 g/mol) is dissolved to make 250.0 mL of solution. Kₐ(HF) = 6.8 × 10^-4. Calculate the pH.',
    answer: 1.95, tolerance: 0.05, unit:'',
    solution:`<p>Step 1 — moles: 1.00 / 20.01 = 0.04997 mol<br>
    Step 2 — molarity: 0.04997 / 0.2500 = 0.1999 M<br>
    Step 3 — quadratic (percent ionization will be ~7%): x = 1.13 × 10^-2 M<br>
    pH = -log(1.13 × 10^-2) = <strong>1.95</strong></p>`
  },
  {
    id:'p41', difficulty:'medium', type:'multi', tag:'% Ionization',
    q:'Calculate the percent ionization of 0.100 M acetic acid. Kₐ = 1.8 × 10^-5.',
    answer: 1.34, tolerance: 0.1, unit:'%',
    solution:`<p>[H3O^+] = √(1.8 × 10^-5 × 0.100) = 1.34 × 10^-3 M<br>
    % ionization = (1.34 × 10^-3 / 0.100) × 100 = <strong>1.34%</strong></p>`
  },
  {
    id:'p42', difficulty:'medium', type:'multi', tag:'% Ionization',
    q:'Calculate the percent ionization of 0.0100 M acetic acid. Kₐ = 1.8 × 10^-5. How does it compare to 0.100 M?',
    answer: 4.24, tolerance: 0.2, unit:'%',
    solution:`<p>x ≈ √(1.8 × 10^-5 × 0.0100) = 4.24 × 10^-4 M<br>
    Check: 4.24 × 10^-4 / 0.0100 = 4.24% — just under 5%, approximation valid.<br>
    % ionization = (4.24 × 10^-4 / 0.0100) × 100 = <strong>4.24%</strong><br>
    This is greater than the 1.34% at 0.100 M — dilution increases percent ionization (Le Chatelier).</p>`
  },
  {
    id:'p43', difficulty:'medium', type:'multi', tag:'Conjugate Pairs',
    q:'A weak acid HA has Kₐ = 2.0 × 10^-6. Find: (a) pKₐ, (b) Kb for A^-, (c) pKb for A^-.',
    answer: 5.70, tolerance: 0.05, unit:'(enter pKₐ)',
    solution:`<p>(a) pKₐ = -log(2.0 × 10^-6) = <strong>5.70</strong><br>
    (b) Kb = Kw / Kₐ = 1.0 × 10^-14 / 2.0 × 10^-6 = 5.0 × 10^-9<br>
    (c) pKb = -log(5.0 × 10^-9) = 8.30<br>
    Check: pKₐ + pKb = 5.70 + 8.30 = 14.00 ✓</p>`
  },
  {
    id:'p44', difficulty:'hard', type:'multi', tag:'Titration pH',
    q:'50.00 mL of 0.200 M HCl is titrated with 0.200 M NaOH. Calculate the pH after adding 60.00 mL of NaOH.',
    answer: 12.26, tolerance: 0.05, unit:'',
    solution:`<p>mol HCl = 0.05000 × 0.200 = 0.01000 mol<br>
    mol NaOH = 0.06000 × 0.200 = 0.01200 mol<br>
    Excess OH^- = 0.00200 mol; V = 110.00 mL = 0.1100 L<br>
    [OH^-] = 0.00200 / 0.1100 = 0.01818 M<br>
    pOH = -log(0.01818) = 1.74; pH = 14 - 1.74 = <strong>12.26</strong></p>`
  },
  {
    id:'p45', difficulty:'hard', type:'multi', tag:'Titration pH',
    q:'40.00 mL of 0.100 M NaOH is titrated with 0.100 M HCl. Calculate the pH after adding 30.00 mL of HCl.',
    answer: 12.15, tolerance: 0.05, unit:'',
    solution:`<p>mol NaOH = 0.04000 × 0.100 = 4.00 × 10^-3 mol<br>
    mol HCl = 0.03000 × 0.100 = 3.00 × 10^-3 mol<br>
    Excess OH^- = 1.00 × 10^-3 mol; V = 70.00 mL = 0.07000 L<br>
    [OH^-] = 1.00 × 10^-3 / 0.07000 = 0.01429 M<br>
    pOH = -log(0.01429) = 1.845; pH = 14 - 1.845 = <strong>12.15</strong><br>
    (Accepted range 12.10–12.20 due to rounding)</p>`
  },
  {
    id:'p46', difficulty:'medium', type:'multi', tag:'Ka from pH',
    q:'A 0.200 M solution of a weak acid HA has pH = 3.15. Calculate Kₐ.',
    answer: 2.52e-6, tolerance: 3e-7, unit:'',
    solution:`<p>[H3O^+] = 10^-3·^15 = 7.08 × 10^-4 M<br>
    At equilibrium: [HA] = 0.200 - 7.08 × 10^-4 ≈ 0.1993 M<br>
    Kₐ = (7.08 × 10^-4)^2 / 0.1993 = 5.01 × 10^-7 / 0.1993 = <strong>2.52 × 10^-6</strong></p>`
  },
  {
    id:'p47', difficulty:'medium', type:'multi', tag:'Ka from pH',
    q:'A 0.0500 M solution of a weak acid HA has a pH of 4.02. Calculate Kₐ.',
    answer: 1.84e-7, tolerance: 2e-8, unit:'',
    solution:`<p>[H3O^+] = 10^-4·^02 = 9.55 × 10^-5 M<br>
    [HA] ≈ 0.0500 - 9.55 × 10^-5 ≈ 0.04990 M<br>
    Kₐ = (9.55 × 10^-5)^2 / 0.04990 = 9.12 × 10^-9 / 0.04990 = <strong>1.84 × 10^-7</strong></p>`
  },
  {
    id:'p48', difficulty:'hard', type:'multi', tag:'Polyprotic pH',
    q:'A diprotic acid H2A has Kₐ1 = 5.0 × 10^-4 and Kₐ2 = 5.0 × 10^-9. A 0.100 M solution is prepared. Calculate the pH using only Kₐ1.',
    answer: 2.15, tolerance: 0.05, unit:'',
    solution:`<p>x^2 + (5.0 × 10^-4)x - (5.0 × 10^-4)(0.100) = 0<br>
    x = [-5.0 × 10^-4 + √((5.0 × 10^-4)^2 + 4(5.0 × 10^-4)(0.100))] / 2<br>
    x = 6.84 × 10^-3 M<br>
    pH = -log(6.84 × 10^-3) = <strong>2.16</strong><br>
    (Kₐ2 contributes negligibly — Kₐ1/Kₐ2 = 10^5)</p>`
  },
  {
    id:'p49', difficulty:'easy', type:'multi', tag:'Brønsted-Lowry',
    q:'For the reaction: HNO2 + H2O ⇌ H3O^+ + NO2^-, identify both conjugate acid-base pairs AND determine whether the equilibrium lies left or right given Kₐ(HNO2) = 4.5 × 10^-4.',
    choices:[
      'Pair 1: HNO2/NO2^-; Pair 2: H3O^+/H2O — equilibrium lies left (Kₐ < 1)',
      'Pair 1: HNO2/NO2^-; Pair 2: H2O/H3O^+ — equilibrium lies right (Kₐ > 1)',
      'Pair 1: HNO2/H2O; Pair 2: H3O^+/NO2^- — equilibrium lies left',
      'Pair 1: HNO2/NO2^-; Pair 2: H2O/OH^- — equilibrium lies right'
    ], correct: 0,
    solution:`<p>Conjugate pairs differ by one H^+:</p><p>Pair 1: HNO2 (acid) / NO2^- (conjugate base)</p><p>Pair 2: H3O^+ (conjugate acid) / H2O (base)</p><p>Kₐ = 4.5 × 10^-4 &lt; 1, so equilibrium lies to the <strong>left</strong> — HNO2 is only slightly ionized.</p>`
  },
  {
    id:'p50', difficulty:'medium', type:'multi', tag:'Acid Strength',
    q:'Two weak acids HA (Kₐ = 3.0 × 10^-5) and HB (Kₐ = 7.0 × 10^-8) are each dissolved at 0.100 M. Which solution has the higher [H3O^+], and by approximately what factor?',
    choices:[
      'HA has higher [H3O^+] by a factor of about 20',
      'HB has higher [H3O^+] by a factor of about 20',
      'HA has higher [H3O^+] by a factor of about 2300',
      'They have the same [H3O^+] because concentration is equal'
    ], correct: 0,
    solution:`<p>[H3O^+] ≈ √(Kₐ × C): x(HA) = √(3.0 × 10^-5 × 0.1) = 1.73 × 10^-3 M<br>
    x(HB) = √(7.0 × 10^-8 × 0.1) = 8.37 × 10^-5 M<br>
    Ratio = 1.73 × 10^-3 / 8.37 × 10^-5 ≈ <strong>20.7 ≈ 20</strong></p>`
  },
  {
    id:'p51', difficulty:'easy', type:'multi', tag:'Equivalence Point pH',
    q:'Predict the pH at the equivalence point when 0.100 M acetic acid is titrated with 0.100 M NaOH. Is the pH equal to, greater than, or less than 7? Justify.',
    choices:[
      'Greater than 7 — the conjugate base (acetate) hydrolyzes to produce OH^-',
      'Equal to 7 — all the acid has been neutralized',
      'Less than 7 — excess NaOH lowers the pH',
      'Equal to 7 — sodium acetate is a neutral salt'
    ], correct: 0,
    solution:`<p>At the equivalence point, all acetic acid has been converted to sodium acetate (NaC2H3O2).<br>
    Acetate (C2H3O2^-) is the conjugate base of a weak acid — it reacts with water:<br>
    C2H3O2^- + H2O ⇌ HC2H3O2 + OH^-<br>
    This produces OH^-, making the solution <strong>basic (pH &gt; 7)</strong>.</p>`
  },
  {
    id:'p52', difficulty:'easy', type:'multi', tag:'Titration Curve',
    q:'At the half-equivalence point of a weak acid-strong base titration, pH = pKₐ. If 25.00 mL of 0.100 M benzoic acid (pKₐ = 4.20) is titrated with 0.100 M NaOH, what is the pH after exactly 12.50 mL of NaOH has been added?',
    answer: 4.20, tolerance: 0.05, unit:'',
    solution:`<p>At the half-equivalence point, half the acid has been converted to its conjugate base.<br>
    [HA] = [A^-], so log([A^-]/[HA]) = log(1) = 0<br>
    pH = pKₐ + 0 = <strong>4.20</strong><br>
    This is one of the most important relationships in acid-base chemistry: pH at half-equivalence = pKₐ.</p>`
  },

  // ════════════════════════════════════════════════════════════════
  // CONCEPT  (p53–p81)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p53', difficulty:'easy', type:'concept', tag:'Brønsted-Lowry',
    q:'In the reaction NH4^+ + H2O ⇌ NH3 + H3O^+, which species is the Brønsted-Lowry acid?',
    choices:['NH4^+','H2O','NH3','H3O^+'], correct:0,
    solution:`<p>A Brønsted-Lowry acid donates a proton. NH4^+ donates H^+ to H2O, forming H3O^+ and NH3. So <strong>NH4^+ is the acid</strong>. H2O accepts the proton — it is the base in this reaction.</p>`
  },
  {
    id:'p54', difficulty:'easy', type:'concept', tag:'Conjugate Pairs',
    q:'What is the conjugate base of H2PO4^-?',
    choices:['HPO4^2-','H3PO4','PO4^3-','H2O'], correct:0,
    solution:`<p>A conjugate base is formed by removing one H^+ from the acid.<br>
    H2PO4^- - H^+ = HPO4^2-<br>
    <strong>HPO4^2- is the conjugate base.</strong></p>`
  },
  {
    id:'p55', difficulty:'easy', type:'concept', tag:'Conjugate Pairs',
    q:'What is the conjugate acid of NH3?',
    choices:['NH4^+','NH2^-','N2H4','OH^-'], correct:0,
    solution:`<p>A conjugate acid is formed by adding one H^+ to the base.<br>
    NH3 + H^+ = NH4^+<br>
    <strong>NH4^+ is the conjugate acid of NH3.</strong></p>`
  },
  {
    id:'p56', difficulty:'easy', type:'concept', tag:'Amphiprotic',
    q:'Which of the following species is amphiprotic?',
    choices:['HCO3^-','CO3^2-','H2SO4','NaOH'], correct:0,
    solution:`<p>An amphiprotic species can both donate and accept a proton.<br>
    HCO3^- can donate H^+ (→ CO3^2-) or accept H^+ (→ H2CO3).<br>
    CO3^2- can only accept H^+ (base only). H2SO4 and NaOH are strong acid/base.</p>`
  },
  {
    id:'p57', difficulty:'easy', type:'concept', tag:'Autoionization',
    q:'The autoionization of water produces which pair of ions?',
    choices:['H3O^+ and OH^-','H^+ and O^2-','H2^+ and O^-','H^+ and H^-'], correct:0,
    solution:`<p>2H2O(l) ⇌ H3O^+(aq) + OH^-(aq)<br>
    One water molecule donates H^+ to another, forming <strong>H3O^+ and OH^-</strong>.</p>`
  },
  {
    id:'p58', difficulty:'easy', type:'concept', tag:'Kw',
    q:'At 25 °C, Kw = 1.0 × 10^-14. Which statement about Kw is correct?',
    choices:[
      'Kw = [H3O^+][OH^-] and applies to any aqueous solution at 25 °C',
      'Kw only applies to pure water, not acidic or basic solutions',
      'Kw increases as pH increases',
      'Kw is only defined when [H3O^+] = [OH^-]'
    ], correct:0,
    solution:`<p>Kw is the equilibrium constant for water's autoionization and equals [H3O^+][OH^-] in <em>any</em> aqueous solution at 25 °C — acidic, basic, or neutral. It is a true constant at fixed temperature.</p>`
  },
  {
    id:'p59', difficulty:'easy', type:'concept', tag:'pH Scale',
    q:'A solution has [H3O^+] = 1.0 × 10^-3 M. Which statement is correct?',
    choices:[
      'pH = 3, the solution is acidic',
      'pH = 11, the solution is basic',
      'pH = 3, the solution is basic',
      'pH = -3, the solution is acidic'
    ], correct:0,
    solution:`<p>pH = -log(1.0 × 10^-3) = 3. Since pH &lt; 7, the solution is <strong>acidic</strong>.</p>`
  },
  {
    id:'p60', difficulty:'easy', type:'concept', tag:'pH Scale',
    q:'Which solution is most acidic?',
    choices:['pH = 1.5','pH = 3.2','pH = 6.8','pH = 4.0'], correct:0,
    solution:`<p>The lower the pH, the higher the [H3O^+], and the more acidic the solution. <strong>pH = 1.5</strong> is the most acidic.</p>`
  },
  {
    id:'p61', difficulty:'medium', type:'concept', tag:'pH Scale',
    q:'A change from pH 5 to pH 3 represents what change in [H3O^+]?',
    choices:[
      'A 100-fold increase in [H3O^+]',
      'A 2-fold increase in [H3O^+]',
      'A 100-fold decrease in [H3O^+]',
      'A 2-fold decrease in [H3O^+]'
    ], correct:0,
    solution:`<p>Each unit decrease in pH represents a 10-fold increase in [H3O^+].<br>
    A decrease of 2 units = 10^2 = <strong>100-fold increase</strong>.</p>`
  },
  {
    id:'p62', difficulty:'easy', type:'concept', tag:'Strong vs Weak',
    q:'Which of the following is a strong acid?',
    choices:['HI','HF','CH3COOH','HCN'], correct:0,
    solution:`<p>Strong acids ionize essentially 100% in water. The strong haloacids are HCl, HBr, and <strong>HI</strong>. HF is a weak acid despite being a haloacid — the H–F bond is unusually strong.</p>`
  },
  {
    id:'p63', difficulty:'easy', type:'concept', tag:'Strong vs Weak',
    q:'Which of the following correctly ranks the acids from strongest to weakest?',
    choices:[
      'HCl > HF > HCN',
      'HCN > HF > HCl',
      'HF > HCl > HCN',
      'HCl > HCN > HF'
    ], correct:0,
    solution:`<p>HCl is a strong acid (complete ionization). HF is weak but relatively strong (Kₐ = 6.8 × 10^-4). HCN is very weak (Kₐ = 4.9 × 10^-10).<br>
    Correct order: <strong>HCl > HF > HCN</strong>.</p>`
  },
  {
    id:'p64', difficulty:'medium', type:'concept', tag:'Acid Strength Trends',
    q:'Why does acid strength increase going down Group 17 (HF < HCl < HBr < HI)?',
    choices:[
      'The H–X bond gets longer and weaker, making it easier to donate H^+',
      'The H–X bond gets shorter and stronger, making it easier to donate H^+',
      'Electronegativity increases down the group, pulling H away from X',
      'The atoms get smaller, so the bond is more polar'
    ], correct:0,
    solution:`<p>Going down Group 17, the halogen atoms get larger. The H–X bond gets <strong>longer and weaker</strong>, so it breaks more easily — making H^+ donation easier and the acid stronger. Electronegativity actually <em>decreases</em> down the group.</p>`
  },
  {
    id:'p65', difficulty:'medium', type:'concept', tag:'Acid Strength Trends',
    q:'Which oxyacid is stronger: H2SO3 or H2SO4?',
    choices:[
      'H2SO4 — more oxygen atoms increase the oxidation state of S, weakening the O–H bond',
      'H2SO3 — fewer oxygen atoms means a simpler structure and more ionization',
      'They are equal because both contain sulfur and two ionizable protons',
      'H2SO3 — a higher oxidation state of S makes the O–H bond stronger'
    ], correct:0,
    solution:`<p>In oxyacids, more oxygen atoms pull electron density away from the O–H bond, making H^+ release easier. H2SO4 has more O atoms (and S in a higher oxidation state) than H2SO3, so <strong>H2SO4 is stronger</strong>.</p>`
  },
  {
    id:'p66', difficulty:'medium', type:'concept', tag:'Conjugate Pair Strength',
    q:'HCl is a stronger acid than acetic acid. Which statement follows from this?',
    choices:[
      'Cl^- is a weaker base than acetate (CH3COO^-)',
      'Cl^- is a stronger base than acetate',
      'Both conjugate bases are equally weak',
      'Acetate is not a base because it has no lone pairs'
    ], correct:0,
    solution:`<p>The stronger the acid, the weaker its conjugate base. HCl is a strong acid → Cl^- is essentially no base at all (extremely weak). Acetic acid is a weak acid → acetate is a measurably weak base. So <strong>Cl^- is a weaker base than acetate</strong>.</p>`
  },
  {
    id:'p67', difficulty:'easy', type:'concept', tag:'pKa',
    q:'Acid A has pKₐ = 3.5 and Acid B has pKₐ = 7.2. Which acid is stronger?',
    choices:[
      'Acid A — lower pKₐ means larger Kₐ means stronger acid',
      'Acid B — higher pKₐ means the acid ionizes more',
      'They are equally strong because pKₐ does not measure acid strength',
      'Acid A — higher Kₐ value means the acid is weaker'
    ], correct:0,
    solution:`<p>pKₐ = -log Kₐ. A smaller pKₐ corresponds to a larger Kₐ and a <strong>stronger acid</strong>. Acid A (pKₐ = 3.5, Kₐ ≈ 3 × 10^-4) is stronger than Acid B (pKₐ = 7.2, Kₐ ≈ 6 × 10^-8).</p>`
  },
  {
    id:'p68', difficulty:'medium', type:'concept', tag:'pKa',
    q:'A weak acid with pKₐ = 5.00 is half-ionized. What is the pH of this solution?',
    choices:['pH = 5.00','pH = 7.00','pH = 2.50','pH = 9.00'], correct:0,
    solution:`<p>When a weak acid is half-ionized, [HA] = [A^-], so log([A^-]/[HA]) = 0.<br>
    Henderson-Hasselbalch: pH = pKₐ + 0 = <strong>5.00</strong>.<br>
    This is the defining property: pH = pKₐ when the acid is 50% ionized.</p>`
  },
  {
    id:'p69', difficulty:'easy', type:'concept', tag:'pKa + pKb',
    q:'A conjugate acid-base pair has pKₐ(acid) = 4.75. What is the pKb of the conjugate base at 25 °C?',
    choices:['9.25','4.75','14.00','-4.75'], correct:0,
    solution:`<p>pKₐ + pKb = 14.00 at 25 °C<br>
    pKb = 14.00 - 4.75 = <strong>9.25</strong></p>`
  },
  {
    id:'p70', difficulty:'medium', type:'concept', tag:'Polyprotic Acids',
    q:'For a polyprotic acid H2A, why is Kₐ1 always much larger than Kₐ2?',
    choices:[
      'It is harder to remove a proton from a negatively charged ion than from a neutral molecule',
      'The second proton is always bonded to oxygen, making it harder to remove',
      'The first ionization is exothermic and the second is endothermic',
      'Kₐ1 and Kₐ2 are always equal for symmetric molecules'
    ], correct:0,
    solution:`<p>After the first proton is removed, the species has a negative charge. Removing a <em>second</em> positive proton from an already-negative ion requires overcoming electrostatic attraction — significantly harder. This is why Kₐ1 ≫ Kₐ2.</p>`
  },
  {
    id:'p71', difficulty:'medium', type:'concept', tag:'Polyprotic Acids',
    q:'For H3PO4, which ionization step dominates the pH of a dilute solution?',
    choices:[
      'The first ionization (Kₐ1) because Kₐ1 ≫ Kₐ2 ≫ Kₐ3',
      'The third ionization (Kₐ3) because it produces the most acidic product',
      'All three contribute equally to the final pH',
      'The second ionization because the monohydrogen phosphate is most stable'
    ], correct:0,
    solution:`<p>For H3PO4: Kₐ1 = 7.5 × 10^-3, Kₐ2 = 6.2 × 10^-8, Kₐ3 = 4.8 × 10^-13.<br>
    Kₐ1 is about 10^5 times larger than Kₐ2, so the <strong>first ionization dominates</strong> the equilibrium and determines the pH.</p>`
  },
  {
    id:'p72', difficulty:'easy', type:'concept', tag:'Titration',
    q:'In an acid-base titration, what is the equivalence point?',
    choices:[
      'The point where moles of acid exactly equal moles of base added',
      'The point where pH = 7',
      'The point where the indicator changes color',
      'The point where concentration of acid equals concentration of base'
    ], correct:0,
    solution:`<p>The equivalence point is defined by stoichiometry — it is where moles of acid = moles of base, meaning neither is in excess. pH = 7 only at equivalence for strong acid / strong base titrations.</p>`
  },
  {
    id:'p73', difficulty:'medium', type:'concept', tag:'Titration',
    q:'Why does the pH at the equivalence point of a weak acid-strong base titration exceed 7?',
    choices:[
      'The conjugate base of the weak acid reacts with water to produce OH^-',
      'Excess NaOH remains at the equivalence point',
      'Strong bases always force pH above 7 regardless of the acid',
      'The solution is neutral because all the acid has been consumed'
    ], correct:0,
    solution:`<p>At the equivalence point, all weak acid has been converted to its conjugate base (A^-). That conjugate base is a measurable base — it reacts with water: A^- + H2O ⇌ HA + OH^-. The production of OH^- pushes pH above 7.</p>`
  },
  {
    id:'p74', difficulty:'medium', type:'concept', tag:'Titration',
    q:'An indicator is a weak acid (HIn) that changes color when it converts to its conjugate base (In^-). What condition determines which color is observed?',
    choices:[
      'Whether [HIn] or [In^-] is greater in solution, which depends on solution pH vs. pKₐ(HIn)',
      'The temperature of the solution',
      'Whether the solution contains a strong or weak acid',
      'The concentration of the titrant'
    ], correct:0,
    solution:`<p>HIn has one color; In^- has another. When pH &lt; pKₐ(HIn), [HIn] dominates → one color. When pH &gt; pKₐ(HIn), [In^-] dominates → the other color. The transition (color change) occurs near pH = pKₐ(HIn).</p>`
  },
  {
    id:'p75', difficulty:'easy', type:'concept', tag:'Titration Curve',
    q:'On a strong acid-strong base titration curve, where is the steepest rise in pH located?',
    choices:[
      'At the equivalence point',
      'At the beginning of the titration',
      'Halfway to the equivalence point',
      'After the equivalence point'
    ], correct:0,
    solution:`<p>Near the equivalence point, tiny additions of base convert the last traces of excess acid to neutral salt, causing a dramatic pH swing. This steep region is where the equivalence point is located and where a well-chosen indicator will change color.</p>`
  },
  {
    id:'p76', difficulty:'easy', type:'concept', tag:'Brønsted-Lowry',
    q:'Which of the following best defines a Brønsted-Lowry base?',
    choices:[
      'A species that accepts a proton (H^+)',
      'A species that donates an electron pair',
      'A species that produces OH^- in water',
      'A species with a positive charge'
    ], correct:0,
    solution:`<p>The Brønsted-Lowry definition focuses on proton transfer. A Brønsted-Lowry base is any species that <strong>accepts a proton</strong>. This is broader than the Arrhenius definition (which requires OH^- production) — it includes species like NH3, CO3^2-, and H2O.</p>`
  },
  {
    id:'p77', difficulty:'medium', type:'concept', tag:'Autoionization',
    q:'Water is described as amphiprotic. In the autoionization of water, which roles does water play?',
    choices:[
      'One water molecule acts as an acid (proton donor) and another acts as a base (proton acceptor)',
      'Both water molecules act as acids',
      'Water only acts as a base in autoionization',
      'Water acts as neither acid nor base — it simply splits apart spontaneously'
    ], correct:0,
    solution:`<p>2H2O ⇌ H3O^+ + OH^-<br>
    One H2O donates H^+ (acts as acid), the other accepts H^+ (acts as base). This is why water is the classic example of an amphiprotic substance.</p>`
  },
  {
    id:'p78', difficulty:'medium', type:'concept', tag:'Strong vs Weak',
    q:'A 0.10 M solution of acid HA has a pH of 2.35. What can you conclude?',
    choices:[
      'HA is a weak acid because [H3O^+] is much less than 0.10 M',
      'HA is a strong acid because its pH is below 7',
      'HA is a strong acid because [H3O^+] = 0.10 M exactly',
      'HA strength cannot be determined from pH alone'
    ], correct:0,
    solution:`<p>If HA were a strong acid, [H3O^+] = 0.10 M → pH = 1.00. The actual pH is 2.35, so [H3O^+] = 10^-2·^35 = 4.5 × 10^-3 M, which is much less than 0.10 M. This means only partial ionization occurred — <strong>HA is a weak acid</strong>.</p>`
  },
  {
    id:'p79', difficulty:'easy', type:'concept', tag:'Acid Strength Trends',
    q:'Which correctly orders the oxyacids of chlorine from weakest to strongest acid?',
    choices:[
      'HClO < HClO2 < HClO3 < HClO4',
      'HClO4 < HClO3 < HClO2 < HClO',
      'All chlorine oxyacids are equally strong',
      'HOCl is the strongest because it has the fewest oxygen atoms'
    ], correct:0,
    solution:`<p>More oxygen atoms on the central atom withdraw more electron density from the O–H bond, making H^+ easier to release. Acid strength increases with more oxygens: <strong>HClO &lt; HClO2 &lt; HClO3 &lt; HClO4</strong>.</p>`
  },
  {
    id:'p80', difficulty:'medium', type:'concept', tag:'Kw',
    q:'At a temperature higher than 25 °C, Kw > 1.0 × 10^-14. What does this tell you about the autoionization of water?',
    choices:[
      'The autoionization is endothermic — higher temperature shifts equilibrium toward products',
      'The autoionization is exothermic — higher temperature produces fewer ions',
      'Temperature has no effect on Kw because water is a pure liquid',
      'A higher Kw means pure water becomes acidic at higher temperatures'
    ], correct:0,
    solution:`<p>If increasing temperature increases Kw, more product is formed — Le Chatelier's principle tells us the forward reaction is endothermic. Note: even at higher temperatures, pure water is still <em>neutral</em> because [H3O^+] still equals [OH^-] — it's just that both concentrations are higher.</p>`
  },
  {
    id:'p81', difficulty:'medium', type:'concept', tag:'Titration Curve',
    q:'When selecting an indicator for a titration, the most important criterion is:',
    choices:[
      'The indicator\'s pKₐ should fall within the steep region of the titration curve near the equivalence point',
      'The indicator must change color at exactly pH = 7',
      'The indicator should be a strong acid so it reacts completely',
      'The indicator color change should occur before the equivalence point is reached'
    ], correct:0,
    solution:`<p>An indicator works by changing color near its own pKₐ. If the indicator's pKₐ is within the steep pH jump at the equivalence point, even a single drop of titrant will cause the complete color change — giving an accurate endpoint. Phenolphthalein (pKₐ ≈ 9) works for weak acid / strong base titrations; methyl orange (pKₐ ≈ 3.5) works for strong acid / weak base titrations.</p>`
  },

  // ════════════════════════════════════════════════════════════════
  // EXPANSION BATCH — 90 problems (20 easy / 25 medium / 45 hard)
  // ════════════════════════════════════════════════════════════════

  // ── EASY CALC (10) ──
  {
    id:'p82', difficulty:'easy', type:'calc', tag:'Strong Acid pH',
    q:'Calculate the pH of a 0.020 M HCl solution.',
    answer: 1.70, tolerance: 0.05, unit:'',
    solution:`<p>[H3O^+] = 0.020 M<br>pH = -log(0.020) = <strong>1.70</strong></p>`
  },
  {
    id:'p83', difficulty:'easy', type:'calc', tag:'Strong Acid pH',
    q:'Calculate the pH of a 0.0040 M HNO3 solution.',
    answer: 2.40, tolerance: 0.05, unit:'',
    solution:`<p>[H3O^+] = 0.0040 M<br>pH = -log(0.0040) = <strong>2.40</strong></p>`
  },
  {
    id:'p84', difficulty:'easy', type:'calc', tag:'Strong Base pH',
    q:'Calculate the pH of a 0.0500 M KOH solution at 25 °C.',
    answer: 12.70, tolerance: 0.05, unit:'',
    solution:`<p>[OH^-] = 0.0500 M<br>pOH = -log(0.0500) = 1.30<br>pH = 14 - 1.30 = <strong>12.70</strong></p>`
  },
  {
    id:'p85', difficulty:'easy', type:'calc', tag:'pH → [H3O^+]',
    q:'A solution has pH = 2.50. Calculate [H3O^+] in mol/L.',
    answer: 3.16e-3, tolerance: 3e-4, unit:'mol/L',
    solution:`<p>[H3O^+] = 10^-2·^50 = <strong>3.16 × 10^-3 mol/L</strong></p>`
  },
  {
    id:'p86', difficulty:'easy', type:'calc', tag:'pH + pOH',
    q:'A solution has pH = 8.40 at 25 °C. Calculate the pOH.',
    answer: 5.60, tolerance: 0.05, unit:'',
    solution:`<p>pH + pOH = 14.00<br>pOH = 14.00 - 8.40 = <strong>5.60</strong></p>`
  },
  {
    id:'p87', difficulty:'easy', type:'calc', tag:'pKa',
    q:'A weak acid has Kₐ = 2.9 × 10^-8. Calculate its pKₐ.',
    answer: 7.54, tolerance: 0.05, unit:'',
    solution:`<p>pKₐ = -log(2.9 × 10^-8) = <strong>7.54</strong></p>`
  },
  {
    id:'p88', difficulty:'easy', type:'calc', tag:'Ka from pKa',
    q:'A weak acid has pKₐ = 3.86. Calculate its Kₐ.',
    answer: 1.38e-4, tolerance: 1.5e-5, unit:'',
    solution:`<p>Kₐ = 10^-3·^86 = <strong>1.38 × 10^-4</strong></p>`
  },
  {
    id:'p89', difficulty:'easy', type:'calc', tag:'Kb from Ka',
    q:'A weak acid has Kₐ = 4.0 × 10^-8. Calculate Kb for its conjugate base.',
    answer: 2.5e-7, tolerance: 2e-8, unit:'',
    solution:`<p>Kb = Kw / Kₐ = (1.0 × 10^-14) / (4.0 × 10^-8) = <strong>2.5 × 10^-7</strong></p>`
  },
  {
    id:'p90', difficulty:'easy', type:'calc', tag:'Kw',
    q:'A solution has [H3O^+] = 6.0 × 10^-6 M. Calculate [OH^-] at 25 °C.',
    answer: 1.67e-9, tolerance: 2e-10, unit:'mol/L',
    solution:`<p>[OH^-] = Kw / [H3O^+] = (1.0 × 10^-14) / (6.0 × 10^-6) = <strong>1.67 × 10^-9 mol/L</strong></p>`
  },
  {
    id:'p91', difficulty:'easy', type:'calc', tag:'Titration',
    q:'20.00 mL of 0.200 M HBr is titrated with 0.250 M KOH. What volume of KOH (in mL) is needed to reach the equivalence point?',
    answer: 16.00, tolerance: 0.1, unit:'mL',
    solution:`<p>mol HBr = 0.02000 L × 0.200 mol/L = 4.00 × 10^-3 mol<br>V(KOH) = 4.00 × 10^-3 / 0.250 = 0.01600 L = <strong>16.00 mL</strong></p>`
  },

  // ── MEDIUM CALC (10) ──
  {
    id:'p92', difficulty:'medium', type:'calc', tag:'Strong Acid pH',
    q:'A 0.0150 M H2SO4 solution is prepared. Assuming complete ionization of both protons, calculate the pH.',
    answer: 1.52, tolerance: 0.05, unit:'',
    solution:`<p>[H3O^+] = 2 × 0.0150 = 0.0300 M<br>pH = -log(0.0300) = <strong>1.52</strong></p>`
  },
  {
    id:'p93', difficulty:'medium', type:'calc', tag:'Weak Acid pH',
    q:'Calculate the pH of a 0.120 M weak acid solution. Kₐ = 1.4 × 10^-4.',
    answer: 2.39, tolerance: 0.05, unit:'',
    solution:`<p>x ≈ √(Kₐ × C) = √(1.4 × 10^-4 × 0.120) = 4.10 × 10^-3 M<br>Check: 4.10×10^-3/0.120 = 3.4% &lt; 5% ✓<br>pH = -log(4.10 × 10^-3) = <strong>2.39</strong></p>`
  },
  {
    id:'p94', difficulty:'medium', type:'calc', tag:'Weak Base pH',
    q:'Calculate the pH of a 0.0800 M NH3 solution. Kb = 1.8 × 10^-5.',
    answer: 11.08, tolerance: 0.05, unit:'',
    solution:`<p>x ≈ √(1.8 × 10^-5 × 0.0800) = 1.20 × 10^-3 M = [OH^-]<br>pOH = -log(1.20 × 10^-3) = 2.92<br>pH = 14 - 2.92 = <strong>11.08</strong></p>`
  },
  {
    id:'p95', difficulty:'medium', type:'calc', tag:'Titration',
    q:'25.00 mL of 0.100 M H2SO4 is titrated with 0.150 M NaOH. H2SO4 provides 2 H^+ per molecule. What volume of NaOH (in mL) is needed?',
    answer: 33.33, tolerance: 0.3, unit:'mL',
    solution:`<p>mol H^+ = 2 × 0.02500 × 0.100 = 5.00 × 10^-3 mol<br>V(NaOH) = 5.00 × 10^-3 / 0.150 = <strong>33.33 mL</strong></p>`
  },
  {
    id:'p96', difficulty:'medium', type:'calc', tag:'Titration pH',
    q:'30.00 mL of 0.100 M HCl has been treated with 10.00 mL of 0.100 M NaOH. Calculate the pH of the resulting solution.',
    answer: 1.30, tolerance: 0.05, unit:'',
    solution:`<p>mol HCl = 3.00 × 10^-3; mol NaOH = 1.00 × 10^-3<br>Excess H^+ = 2.00 × 10^-3 mol; V = 40.00 mL<br>[H^+] = 2.00×10^-3/0.04000 = 0.0500 M<br>pH = -log(0.0500) = <strong>1.30</strong></p>`
  },
  {
    id:'p97', difficulty:'medium', type:'calc', tag:'Titration pH',
    q:'20.00 mL of 0.100 M HCl is mixed with 25.00 mL of 0.100 M NaOH. Calculate the pH of the resulting solution.',
    answer: 12.05, tolerance: 0.05, unit:'',
    solution:`<p>mol HCl = 2.00 × 10^-3; mol NaOH = 2.50 × 10^-3<br>Excess OH^- = 5.0 × 10^-4 mol; V = 45.00 mL<br>[OH^-] = 5.0×10^-4/0.04500 = 0.01111 M<br>pOH = -log(0.01111) = 1.95; pH = 14 - 1.95 = <strong>12.05</strong></p>`
  },
  {
    id:'p98', difficulty:'medium', type:'calc', tag:'Titration',
    q:'15.00 mL of an unknown HCl solution is titrated to the equivalence point using 22.30 mL of 0.1000 M NaOH. Calculate the molarity of the HCl solution.',
    answer: 0.1487, tolerance: 0.003, unit:'M',
    solution:`<p>mol NaOH = 0.02230 × 0.1000 = 2.230 × 10^-3 mol = mol HCl<br>[HCl] = 2.230 × 10^-3 / 0.01500 = <strong>0.1487 M</strong></p>`
  },
  {
    id:'p99', difficulty:'medium', type:'calc', tag:'Polyprotic Acid',
    q:'Calculate the pH of a 0.0500 M H2CO3 solution. Use only the first ionization: Kₐ1 = 4.3 × 10^-7.',
    answer: 3.83, tolerance: 0.05, unit:'',
    solution:`<p>x ≈ √(4.3 × 10^-7 × 0.0500) = 1.47 × 10^-4 M<br>Check: 1.47×10^-4/0.0500 = 0.29% ✓<br>pH = -log(1.47 × 10^-4) = <strong>3.83</strong></p>`
  },
  {
    id:'p100', difficulty:'medium', type:'calc', tag:'pKa + pKb',
    q:'A weak base has pKb = 5.40. Calculate the pKₐ of its conjugate acid.',
    answer: 8.60, tolerance: 0.05, unit:'',
    solution:`<p>pKₐ + pKb = 14.00<br>pKₐ = 14.00 - 5.40 = <strong>8.60</strong></p>`
  },
  {
    id:'p101', difficulty:'medium', type:'calc', tag:'pH → [OH^-]',
    q:'A solution has [OH^-] = 7.5 × 10^-5 M. Calculate the pH at 25 °C.',
    answer: 9.88, tolerance: 0.05, unit:'',
    solution:`<p>pOH = -log(7.5 × 10^-5) = 4.12<br>pH = 14 - 4.12 = <strong>9.88</strong></p>`
  },

  // ── HARD CALC (16) ──
  {
    id:'p102', difficulty:'hard', type:'calc', tag:'Weak Acid pH',
    q:'Calculate the pH of a 0.250 M weak acid solution. Kₐ = 1.2 × 10^-3.',
    answer: 1.78, tolerance: 0.05, unit:'',
    solution:`<p>Percent ionization will exceed 5%, so use the quadratic:<br>x^2 + (1.2×10^-3)x - (1.2×10^-3)(0.250) = 0<br>x = 0.01673 M<br>pH = -log(0.01673) = <strong>1.78</strong></p>`
  },
  {
    id:'p103', difficulty:'hard', type:'calc', tag:'Weak Base pH',
    q:'Calculate the pH of a 0.180 M weak base solution. Kb = 4.5 × 10^-4.',
    answer: 11.94, tolerance: 0.05, unit:'',
    solution:`<p>Use the quadratic: x^2 + (4.5×10^-4)x - (4.5×10^-4)(0.180) = 0<br>x = 8.78 × 10^-3 M = [OH^-]<br>pOH = -log(8.78×10^-3) = 2.06; pH = 14 - 2.06 = <strong>11.94</strong></p>`
  },
  {
    id:'p104', difficulty:'hard', type:'calc', tag:'Polyprotic Acid',
    q:'Calculate the pH of a 0.150 M weak diprotic acid solution using only the first ionization: Kₐ1 = 1.4 × 10^-2.',
    answer: 1.40, tolerance: 0.05, unit:'',
    solution:`<p>Percent ionization will be large — use the quadratic:<br>x^2 + (1.4×10^-2)x - (1.4×10^-2)(0.150) = 0<br>x = 0.03936 M<br>pH = -log(0.03936) = <strong>1.40</strong></p>`
  },
  {
    id:'p105', difficulty:'hard', type:'calc', tag:'Titration pH',
    q:'40.00 mL of 0.100 M HCl is titrated with 0.100 M NaOH. Calculate the pH after adding 40.50 mL of NaOH (just past equivalence).',
    answer: 10.79, tolerance: 0.05, unit:'',
    solution:`<p>mol HCl = 4.000 × 10^-3; mol NaOH = 4.050 × 10^-3<br>Excess OH^- = 5.0 × 10^-5 mol; V = 80.50 mL<br>[OH^-] = 5.0×10^-5/0.08050 = 6.21×10^-4 M<br>pOH = -log(6.21×10^-4) = 3.21; pH = 14 - 3.21 = <strong>10.79</strong></p>`
  },
  {
    id:'p106', difficulty:'hard', type:'calc', tag:'Buffer pH',
    q:'A buffer is prepared with 0.300 mol of acetate (CH3COO^-) and 0.200 mol of acetic acid (pKₐ = 4.74) in the same volume of solution. Calculate the pH.',
    answer: 4.92, tolerance: 0.05, unit:'',
    solution:`<p>Henderson-Hasselbalch: pH = pKₐ + log([A^-]/[HA])<br>pH = 4.74 + log(0.300/0.200) = 4.74 + log(1.50) = 4.74 + 0.176 = <strong>4.92</strong></p>`
  },
  {
    id:'p107', difficulty:'hard', type:'calc', tag:'Buffer pH',
    q:'A buffer has [A^-] = 0.150 M and [HA] = 0.400 M, where the acid has pKₐ = 3.75. Calculate the pH.',
    answer: 3.32, tolerance: 0.05, unit:'',
    solution:`<p>pH = pKₐ + log([A^-]/[HA]) = 3.75 + log(0.150/0.400) = 3.75 + log(0.375) = 3.75 - 0.426 = <strong>3.32</strong></p>`
  },
  {
    id:'p108', difficulty:'hard', type:'calc', tag:'Ka from % Ionization',
    q:'A 0.0800 M weak acid solution is found to be 3.60% ionized. Calculate Kₐ.',
    answer: 1.08e-4, tolerance: 1e-5, unit:'',
    solution:`<p>x = 0.0360 × 0.0800 = 2.88 × 10^-3 M<br>Kₐ = x^2/(C-x) = (2.88×10^-3)^2/(0.0800-2.88×10^-3) = <strong>1.08 × 10^-4</strong></p>`
  },
  {
    id:'p109', difficulty:'hard', type:'calc', tag:'Ka from pH',
    q:'A 0.0800 M solution of a weak acid HA has pH = 2.60. Calculate Kₐ.',
    answer: 8.14e-5, tolerance: 8e-6, unit:'',
    solution:`<p>[H3O^+] = 10^-2·^60 = 2.51 × 10^-3 M<br>Kₐ = (2.51×10^-3)^2/(0.0800-2.51×10^-3) = <strong>8.14 × 10^-5</strong></p>`
  },
  {
    id:'p110', difficulty:'hard', type:'calc', tag:'Buffer Preparation',
    q:'A chemist has 500.0 mL of 0.200 M acetic acid (pKₐ = 4.74, M(NaC2H3O2) = 82.03 g/mol). How many grams of sodium acetate must be added to create a buffer with pH = 5.00?',
    answer: 14.93, tolerance: 0.5, unit:'g',
    solution:`<p>Henderson-Hasselbalch: 5.00 = 4.74 + log([A^-]/[HA]) → log ratio = 0.26 → ratio = 10^0.26 = 1.820<br>mol HA = 0.500 × 0.200 = 0.100 mol<br>mol A^- needed = 1.820 × 0.100 = 0.1820 mol<br>mass = 0.1820 × 82.03 = <strong>14.93 g</strong></p>`
  },
  {
    id:'p111', difficulty:'hard', type:'calc', tag:'Kw at Elevated Temp',
    q:'At 37 °C (body temperature), Kw = 2.4 × 10^-14. What is the pH of neutral (pure) water at this temperature?',
    answer: 6.81, tolerance: 0.05, unit:'',
    solution:`<p>In neutral water, [H3O^+] = [OH^-] = √Kw = √(2.4×10^-14) = 1.55 × 10^-7 M<br>pH = -log(1.55×10^-7) = <strong>6.81</strong> (still neutral, just not pH 7.00)</p>`
  },
  {
    id:'p112', difficulty:'hard', type:'calc', tag:'Ka from Half-Equivalence pH',
    q:'During a titration, the pH at the half-equivalence point is measured as 4.88. Calculate the Kₐ of the weak acid.',
    answer: 1.32e-5, tolerance: 1.3e-6, unit:'',
    solution:`<p>At half-equivalence, pH = pKₐ, so pKₐ = 4.88.<br>Kₐ = 10^-4·^88 = <strong>1.32 × 10^-5</strong></p>`
  },
  {
    id:'p113', difficulty:'hard', type:'calc', tag:'Buffer pH',
    q:'A buffer contains 0.250 mol HA and 0.250 mol A^- (pKₐ = 4.74). If 0.0500 mol of strong acid (HCl) is added, what is the new pH? (Assume the strong acid fully converts A^- to HA.)',
    answer: 4.56, tolerance: 0.05, unit:'',
    solution:`<p>Added H^+ reacts with A^-: A^- + H^+ → HA<br>New [HA] = 0.250 + 0.0500 = 0.300; new [A^-] = 0.250 - 0.0500 = 0.200<br>pH = 4.74 + log(0.200/0.300) = 4.74 - 0.176 = <strong>4.56</strong></p>`
  },
  {
    id:'p114', difficulty:'hard', type:'calc', tag:'Mass → pH',
    q:'5.00 g of a weak acid HX (molar mass = 100.0 g/mol, Kₐ = 2.0 × 10^-3) is dissolved in enough water to make 500.0 mL of solution. Calculate the pH.',
    answer: 1.88, tolerance: 0.05, unit:'',
    solution:`<p>mol = 5.00/100.0 = 0.0500 mol; M = 0.0500/0.500 = 0.100 M<br>Use the quadratic (ionization is large): x^2 + (2.0×10^-3)x - (2.0×10^-3)(0.100) = 0<br>x = 0.01318 M<br>pH = -log(0.01318) = <strong>1.88</strong></p>`
  },
  {
    id:'p115', difficulty:'hard', type:'calc', tag:'% Ionization',
    q:'Calculate the percent ionization of a 0.00500 M weak acid solution. Kₐ = 8.0 × 10^-5.',
    answer: 11.9, tolerance: 0.5, unit:'%',
    solution:`<p>The sqrt approximation would give &gt;5% ionization, so use the quadratic:<br>x^2 + (8.0×10^-5)x - (8.0×10^-5)(0.00500) = 0<br>x = 5.94 × 10^-4 M<br>% ionization = (5.94×10^-4/0.00500) × 100 = <strong>11.9%</strong></p>`
  },
  {
    id:'p116', difficulty:'hard', type:'calc', tag:'Titration',
    q:'40.0 mL of 0.0500 M HCl is mixed with 60.0 mL of 0.0300 M NaOH. Calculate the pH of the resulting solution.',
    answer: 2.70, tolerance: 0.05, unit:'',
    solution:`<p>mol HCl = 2.00 × 10^-3; mol NaOH = 1.80 × 10^-3<br>Excess H^+ = 2.0 × 10^-4 mol; V = 100.0 mL<br>[H^+] = 2.0×10^-4/0.1000 = 2.00×10^-3 M<br>pH = -log(2.00×10^-3) = <strong>2.70</strong></p>`
  },
  {
    id:'p117', difficulty:'hard', type:'calc', tag:'Buffer pH',
    q:'A buffer contains 0.200 mol HA and 0.200 mol A^- (pKₐ = 4.20). If 0.0400 mol of strong base (NaOH) is added, what is the new pH? (Assume the strong base fully converts HA to A^-.)',
    answer: 4.38, tolerance: 0.05, unit:'',
    solution:`<p>Added OH^- reacts with HA: HA + OH^- → A^- + H2O<br>New [HA] = 0.200 - 0.0400 = 0.160; new [A^-] = 0.200 + 0.0400 = 0.240<br>pH = 4.20 + log(0.240/0.160) = 4.20 + 0.176 = <strong>4.38</strong></p>`
  },

  // ════════════════════════════════════════════════════════════════
  // NEW CONCEPTUAL (34 problems)
  // ════════════════════════════════════════════════════════════════

  // ── EASY CONCEPT (8) ──
  {
    id:'p118', difficulty:'easy', type:'concept', tag:'Brønsted-Lowry',
    q:'In the reaction HCl + H2O → H3O^+ + Cl^-, which species is the Brønsted-Lowry base?',
    choices:['HCl','H2O','H3O^+','Cl^-'], correct:1,
    solution:`<p>H2O accepts a proton from HCl, forming H3O^+. A proton acceptor is the Brønsted-Lowry base — <strong>H2O</strong>.</p>`
  },
  {
    id:'p119', difficulty:'easy', type:'concept', tag:'Conjugate Pairs',
    q:'What is the conjugate acid of HSO4^-?',
    choices:['H2SO4','SO4^2-','H2SO3','HSO3^-'], correct:0,
    solution:`<p>A conjugate acid is formed by adding one H^+: HSO4^- + H^+ = H2SO4. <strong>H2SO4</strong> is the conjugate acid.</p>`
  },
  {
    id:'p120', difficulty:'easy', type:'concept', tag:'pH Scale',
    q:'A solution has pH = 9. Is it acidic, basic, or neutral?',
    choices:['Acidic','Basic','Neutral','Cannot be determined'], correct:1,
    solution:`<p>pH &gt; 7 means the solution is <strong>basic</strong>.</p>`
  },
  {
    id:'p121', difficulty:'easy', type:'concept', tag:'Strong vs Weak',
    q:'Which of these is a strong base?',
    choices:['NH3','Ca(OH)2','CH3NH2','H2O'], correct:1,
    solution:`<p>Group 1 and Group 2 hydroxides (like Ca(OH)2) are strong bases that dissociate essentially completely. NH3 and CH3NH2 are weak bases; H2O is neither.</p>`
  },
  {
    id:'p122', difficulty:'easy', type:'concept', tag:'Kw',
    q:'What is the value of Kw at 25 °C?',
    choices:['1.0 × 10^-7','1.0 × 10^-14','1.0 × 10^7','7.00'], correct:1,
    solution:`<p>Kw = [H3O^+][OH^-] = <strong>1.0 × 10^-14</strong> at 25 °C.</p>`
  },
  {
    id:'p123', difficulty:'easy', type:'concept', tag:'Autoionization',
    q:'Pure water at 25 °C has [H3O^+] equal to:',
    choices:['1.0 × 10^-14 M','1.0 × 10^-7 M','0 M','1.0 M'], correct:1,
    solution:`<p>Since [H3O^+] = [OH^-] in pure water and their product is Kw = 1.0×10^-14, each equals √(1.0×10^-14) = <strong>1.0 × 10^-7 M</strong>.</p>`
  },
  {
    id:'p124', difficulty:'easy', type:'concept', tag:'pKa',
    q:'As pKₐ decreases, acid strength:',
    choices:['Decreases','Increases','Stays the same','Cannot be determined'], correct:1,
    solution:`<p>pKₐ = -log(Kₐ). A smaller pKₐ means a larger Kₐ, which means a <strong>stronger</strong> acid.</p>`
  },
  {
    id:'p125', difficulty:'easy', type:'concept', tag:'Amphiprotic',
    q:'Which best describes an amphiprotic species?',
    choices:['A species that is always a strong acid','A species that can act as either an acid or a base depending on what it reacts with','A species that never reacts with water','A species found only in polyprotic acids'], correct:1,
    solution:`<p>An amphiprotic species (like HCO3^-) can donate a proton (act as an acid) or accept a proton (act as a base), depending on the other reactant.</p>`
  },

  // ── MEDIUM CONCEPT (11) ──
  {
    id:'p126', difficulty:'medium', type:'concept', tag:'pH Scale',
    q:'A change from pH 4 to pH 7 represents what change in [H3O^+]?',
    choices:['A 1000-fold decrease','A 3-fold decrease','A 1000-fold increase','A 3-fold increase'], correct:0,
    solution:`<p>Each pH unit increase is a 10-fold decrease in [H3O^+]. An increase of 3 units = 10^3 = <strong>1000-fold decrease</strong>.</p>`
  },
  {
    id:'p127', difficulty:'medium', type:'concept', tag:'Titration',
    q:'At the equivalence point of a strong acid-strong base titration, why is pH exactly 7?',
    choices:['Because equal volumes were mixed','Because the salt formed does not hydrolyze, and the solution is just water plus a neutral spectator salt','Because strong acids and bases always neutralize to pH 7 by definition','Because the indicator turns green at that point'], correct:1,
    solution:`<p>The salt formed (e.g., NaCl) comes from a strong acid and strong base — neither ion hydrolyzes in water, so the solution behaves like pure water: <strong>pH = 7</strong>.</p>`
  },
  {
    id:'p128', difficulty:'medium', type:'concept', tag:'Conjugate Pair Strength',
    q:'If Kb for a base is very small, what can be said about its conjugate acid?',
    choices:['The conjugate acid is a strong acid','The conjugate acid is a weak acid with a relatively large Ka','The conjugate acid does not exist','The conjugate acid has Ka = Kb'], correct:1,
    solution:`<p>Since Kₐ × Kb = Kw (a constant), a very small Kb means a relatively large Kₐ — the conjugate acid is comparatively more acidic (though still a weak acid overall in typical cases).</p>`
  },
  {
    id:'p129', difficulty:'medium', type:'concept', tag:'Acid Strength Trends',
    q:'Comparing CH3COOH (acetic acid) and CH2ClCOOH (chloroacetic acid), which is the stronger acid and why?',
    choices:['CH2ClCOOH, because the electronegative Cl atom withdraws electron density, stabilizing the conjugate base and weakening the O-H bond','CH3COOH, because it has no halogen substituent to interfere','They are equally strong since both are carboxylic acids','CH2ClCOOH is weaker because chlorine adds steric bulk'], correct:0,
    solution:`<p>The electronegative chlorine atom pulls electron density away through the molecule (inductive effect), stabilizing the negative charge on the conjugate base and making the O-H bond easier to break. <strong>CH2ClCOOH is the stronger acid.</strong></p>`
  },
  {
    id:'p130', difficulty:'medium', type:'concept', tag:'Polyprotic Acids',
    q:'For H2CO3, Kₐ1 = 4.3×10^-7 and Kₐ2 = 4.8×10^-11. What does the large difference between Kₐ1 and Kₐ2 tell you about calculating the pH of an H2CO3 solution?',
    choices:['Both ionizations must be solved simultaneously for an accurate pH','The pH can be calculated using only Kₐ1, since the second ionization contributes a negligible amount of additional H3O^+','Kₐ2 dominates because it produces the more stable ion','The pH cannot be calculated without a computer'], correct:1,
    solution:`<p>Since Kₐ1 ≫ Kₐ2 (by about 4 orders of magnitude), the second ionization contributes negligibly to [H3O^+]. The <strong>first ionization alone</strong> is sufficient to calculate pH.</p>`
  },
  {
    id:'p131', difficulty:'medium', type:'concept', tag:'Titration Curve',
    q:'On a weak acid-strong base titration curve, what feature distinguishes it from a strong acid-strong base curve?',
    choices:['There is no equivalence point','A buffering region (gradual pH change) appears before the equivalence point, and the equivalence point pH is above 7','The initial pH is always 7','The curve is a straight line'], correct:1,
    solution:`<p>Weak acid titrations show a gradual, flat buffering region before the equivalence point (where HA and A^- coexist), and the equivalence point itself is basic (pH &gt; 7) because the conjugate base hydrolyzes.</p>`
  },
  {
    id:'p132', difficulty:'medium', type:'concept', tag:'pKa',
    q:'A buffer is most effective (best able to resist pH change) when:',
    choices:['The concentration of acid is much greater than the base','pH is far from pKₐ','[HA] and [A^-] are roughly equal, i.e., pH is close to pKₐ','The buffer contains only a strong acid'], correct:2,
    solution:`<p>Buffer capacity is maximized when [HA] ≈ [A^-] (pH ≈ pKₐ), since there is roughly equal capacity to neutralize either added acid or added base.</p>`
  },
  {
    id:'p133', difficulty:'medium', type:'concept', tag:'Strong vs Weak',
    q:'A 1.0 M solution of a strong acid and a 1.0 M solution of a weak acid are compared. Which has a higher electrical conductivity, and why?',
    choices:['The strong acid, because it produces many more ions in solution at the same concentration','The weak acid, because weak acids conduct better','They conduct equally since concentration is the same','Neither conducts electricity since both are covalent compounds'], correct:0,
    solution:`<p>The strong acid ionizes completely, producing many more free ions to carry current. The weak acid only partially ionizes, so far fewer ions are present despite the same total concentration.</p>`
  },
  {
    id:'p134', difficulty:'medium', type:'concept', tag:'Autoionization',
    q:'Adding an acid to pure water increases [H3O^+]. What must happen to [OH^-] as a result?',
    choices:['[OH^-] increases proportionally','[OH^-] decreases, since [H3O^+][OH^-] = Kw must remain constant at a given temperature','[OH^-] stays exactly the same','[OH^-] becomes zero'], correct:1,
    solution:`<p>Kw is a constant at a given temperature. If [H3O^+] increases, [OH^-] must <strong>decrease</strong> so that their product still equals Kw.</p>`
  },
  {
    id:'p135', difficulty:'medium', type:'concept', tag:'Titration',
    q:'Why is it useful to titrate a weak acid with a strong base when trying to determine the Kₐ of an unknown weak acid?',
    choices:['It is not actually necessary — any titration works the same way','The titration curve provides a buffering region where pH = pKₐ at the half-equivalence point, directly giving Kₐ','Weak acids cannot be titrated at all','Strong bases only react with strong acids'], correct:1,
    solution:`<p>At the half-equivalence point of a weak acid/strong base titration, [HA] = [A^-], so pH = pKₐ exactly. This makes such a titration a direct, practical way to determine Kₐ.</p>`
  },
  {
    id:'p136', difficulty:'medium', type:'concept', tag:'Acid Strength Trends',
    q:'Would you expect HOCl or HOBr to be the stronger acid, and why?',
    choices:['HOCl, because chlorine is more electronegative than bromine, withdrawing more electron density from the O-H bond','HOBr, because bromine is a larger atom','They are equally strong since both are hypohalous acids','HOBr, because bromine has more electron shells'], correct:0,
    solution:`<p>Chlorine is more electronegative than bromine, so it withdraws more electron density from the O-H bond in HOCl, making that bond easier to break. <strong>HOCl is the stronger acid.</strong></p>`
  },

  // ── HARD CONCEPT (15) ──
  {
    id:'p137', difficulty:'hard', type:'concept', tag:'Buffer pH',
    q:'A buffer solution is prepared with equal moles of a weak acid and its conjugate base. If a small amount of strong acid is added, which best describes what happens?',
    choices:['The pH drops dramatically, similar to adding acid to pure water','The added H^+ is consumed by the conjugate base (A^- + H^+ → HA), causing only a small pH change','The buffer stops working immediately','The pKₐ of the acid changes'], correct:1,
    solution:`<p>The conjugate base neutralizes the added strong acid, converting a small amount of A^- into HA. This shifts the [A^-]/[HA] ratio only slightly, so pH changes only slightly — the defining feature of buffer action.</p>`
  },
  {
    id:'p138', difficulty:'hard', type:'concept', tag:'Buffer pH',
    q:'Two buffers have the same pH but different total concentrations of buffer components (one is 0.1 M total, the other is 1.0 M total, both at the same [A^-]/[HA] ratio). Which has the greater buffer capacity?',
    choices:['The 0.1 M buffer, since less material is needed to shift the ratio','The 1.0 M buffer, since it has more moles of HA and A^- available to absorb added acid or base before the ratio changes significantly','They have identical buffer capacity since pH is the same','Buffer capacity does not depend on concentration'], correct:1,
    solution:`<p>pH depends only on the ratio [A^-]/[HA], but buffer capacity (how much acid/base it can absorb before pH shifts significantly) depends on the absolute amounts present. The more concentrated buffer has <strong>greater capacity</strong>.</p>`
  },
  {
    id:'p139', difficulty:'hard', type:'concept', tag:'Polyprotic Acids',
    q:'For a triprotic acid H3A, explain why Kₐ1 : Kₐ2 : Kₐ3 typically span roughly 5 orders of magnitude between each step.',
    choices:['Each successive ionization removes a proton from an increasingly negatively charged species, making it progressively harder due to stronger electrostatic attraction between H^+ and the growing negative charge','The molecule becomes physically smaller with each ionization','Temperature changes with each ionization step','This pattern is coincidental and has no physical explanation'], correct:0,
    solution:`<p>As each proton leaves, the remaining species becomes more negatively charged, which more strongly attracts and retains the next H^+. This electrostatic effect makes each successive Kₐ dramatically smaller.</p>`
  },
  {
    id:'p140', difficulty:'hard', type:'concept', tag:'Titration Curve',
    q:'A titration curve for a diprotic weak acid titrated with strong base shows TWO distinct equivalence points and TWO half-equivalence points. What do the two half-equivalence points represent?',
    choices:['pH = pKₐ1 at the first half-equivalence point, and pH = pKₐ2 at the second half-equivalence point','Both half-equivalence points give the same information','The half-equivalence points only apply to monoprotic acids','The second half-equivalence point is meaningless'], correct:0,
    solution:`<p>Each ionization step has its own buffering region and half-equivalence point, where pH equals the pKₐ for that specific ionization step — pKₐ1 for the first, pKₐ2 for the second.</p>`
  },
  {
    id:'p141', difficulty:'hard', type:'concept', tag:'Acid Strength Trends',
    q:'Formic acid (HCOOH, Kₐ=1.8×10^-4) is a stronger acid than acetic acid (CH3COOH, Kₐ=1.8×10^-5) despite both being simple carboxylic acids. What structural difference best explains this?',
    choices:['Formic acid lacks the electron-donating methyl (CH3) group that acetic acid has; that alkyl group slightly stabilizes the neutral acid and makes the O-H bond marginally harder to ionize, so formic acid ionizes more readily','Formic acid has a stronger O-H bond','Acetic acid has more oxygen atoms','There is no real structural explanation — the difference is random'], correct:0,
    solution:`<p>Acetic acid&#8217;s methyl group is weakly electron-donating, which slightly destabilizes the developing negative charge on the conjugate base compared to formic acid (which has only a hydrogen in that position). This makes formic acid the stronger acid.</p>`
  },
  {
    id:'p142', difficulty:'hard', type:'concept', tag:'Kw',
    q:'Kw depends on temperature. Predict what happens to the pH of NEUTRAL water as temperature increases, and explain why the water remains neutral despite the pH change.',
    choices:['pH decreases (water becomes more acidic) because more H3O^+ than OH^- forms as temperature rises','pH decreases as Kw increases (autoionization is endothermic), but the water is still neutral because [H3O^+] still equals [OH^-] — pH=7 is not always the neutral point','pH stays exactly 7.00 at all temperatures because water is always neutral','pH increases because higher temperature always favors basicity'], correct:1,
    solution:`<p>As temperature rises, Kw increases (autoionization is endothermic), so [H3O^+] = [OH^-] = √Kw increases, and pH decreases below 7.00. The water is still neutral because [H3O^+] still equals [OH^-] — pH 7 is only the neutral point at 25 °C specifically.</p>`
  },
  {
    id:'p143', difficulty:'hard', type:'concept', tag:'Buffer pH',
    q:'A student prepares a buffer using a weak acid with pKₐ = 5.00, aiming for pH = 5.00 exactly. They accidentally use a 2:1 ratio of A^- to HA instead of the intended 1:1. By how much does the resulting pH differ from the target?',
    choices:['No difference — the ratio doesn&#8217;t matter for buffers','About +0.30 pH units, since log(2) ≈ 0.30 shifts the Henderson-Hasselbalch equation from pKₐ by that amount','About +3.0 pH units','About -0.30 pH units'], correct:1,
    solution:`<p>pH = pKₐ + log([A^-]/[HA]) = 5.00 + log(2) = 5.00 + 0.30 = 5.30. The pH is about <strong>+0.30 units higher</strong> than the intended 5.00.</p>`
  },
  {
    id:'p144', difficulty:'hard', type:'concept', tag:'Conjugate Pair Strength',
    q:'Consider the conjugate bases of two weak acids: Acid X (Kₐ=1.0×10^-4) and Acid Y (Kₐ=1.0×10^-9). Which conjugate base is the stronger base, and by roughly what factor?',
    choices:['The conjugate base of Y is stronger, by a factor of about 10^5, since Kb = Kw/Kₐ is inversely related to Kₐ','The conjugate base of X is stronger, by a factor of about 10^5','They are equally strong since both come from weak acids','The conjugate base of X is stronger, by a factor of 10, matching the pKₐ difference directly'], correct:0,
    solution:`<p>Kb(X) = Kw/Kₐ(X) = 1.0×10^-10; Kb(Y) = Kw/Kₐ(Y) = 1.0×10^-5. Kb(Y) is about 10^5 times larger — <strong>the conjugate base of the weaker acid (Y) is the stronger base</strong>, consistent with the inverse Kₐ-Kb relationship.</p>`
  },
  {
    id:'p145', difficulty:'hard', type:'concept', tag:'Titration',
    q:'A student titrates an unknown diprotic acid with NaOH and expects the second equivalence point at exactly double the first (e.g., 15.0 mL then 30.0 mL), but it actually occurs at 29.8 mL. What is the most likely explanation for the small discrepancy?',
    choices:['The acid is actually triprotic','Kₐ1 and Kₐ2 are extremely close in value, invalidating the titration entirely','Normal experimental/measurement error in reading the burette — the two equivalence points should be close to a 1:2 ratio for a diprotic acid, and 29.8 vs 30.0 mL is well within expected error','NaOH must have reacted with the solvent'], correct:2,
    solution:`<p>A discrepancy of 0.2 mL out of 30.0 mL (&lt;1%) is well within normal burette reading and measurement error — this is the expected, mundane explanation rather than anything unusual about the acid itself.</p>`
  },
  {
    id:'p146', difficulty:'hard', type:'concept', tag:'Ka from pH',
    q:'A weak acid solution&#8217;s pH is measured, but the student forgets to account for water&#8217;s own autoionization contribution to [H3O^+]. For which type of solution would this omission cause the LARGEST relative error in the calculated Kₐ?',
    choices:['A concentrated, strongly ionizing weak acid solution (high [H3O^+] from the acid)','A very dilute, extremely weak acid solution where [H3O^+] from the acid is comparable to 1.0×10^-7 M (water&#8217;s own autoionization)','It never matters, water autoionization is always negligible','Only for strong acids does this correction matter'], correct:1,
    solution:`<p>Water contributes about 1.0×10^-7 M of H3O^+ on its own. When the acid barely raises [H3O^+] above that baseline (very dilute/weak acids), ignoring water&#8217;s contribution introduces the largest relative error.</p>`
  },
  {
    id:'p147', difficulty:'hard', type:'concept', tag:'Buffer pH',
    q:'The Henderson-Hasselbalch equation, pH = pKₐ + log([A^-]/[HA]), breaks down (becomes inaccurate) under which condition?',
    choices:['When [A^-] and [HA] are both very large','When the buffer is very dilute, or the ratio [A^-]/[HA] is extreme, such that the simplifying assumption (equilibrium concentrations ≈ initial concentrations) is no longer valid','It never breaks down under any condition','Only when pKₐ is negative'], correct:1,
    solution:`<p>Henderson-Hasselbalch assumes the amount of HA or A^- that ionizes/reacts is negligible compared to the initial amounts. This assumption fails for very dilute buffers or extreme ratios, requiring a full equilibrium (ICE) treatment instead.</p>`
  },
  {
    id:'p148', difficulty:'hard', type:'concept', tag:'Acid Strength Trends',
    q:'Which factor does NOT generally influence relative acid strength among similar compounds?',
    choices:['Bond strength (H-X bond energy)','Electronegativity of the atom bonded to H','Stability of the conjugate base','The color of the compound in solution'], correct:3,
    solution:`<p>Bond strength, electronegativity, and conjugate base stability are all real factors affecting acid strength. Color is unrelated to acidity.</p>`
  },
  {
    id:'p149', difficulty:'hard', type:'concept', tag:'Polyprotic Acids',
    q:'For phosphoric acid H3PO4 at physiological pH (~7.4), which species would be expected to dominate, given pKₐ1≈2.1, pKₐ2≈7.2, pKₐ3≈12.4?',
    choices:['Roughly an even mix of H2PO4^- and HPO4^2-, since pH 7.4 is very close to pKₐ2 (7.2)','H3PO4 dominates because it is the parent acid','PO4^3- dominates because phosphate is the most stable ion','HPO4^2- alone, since pKₐ2 exactly equals pH'], correct:0,
    solution:`<p>When pH is close to a pKₐ value, the acid and base forms for that ionization step coexist in comparable amounts (Henderson-Hasselbalch). Since pH 7.4 is near pKₐ2 (7.2), <strong>H2PO4^- and HPO4^2-</strong> are both present in significant amounts — this is exactly the phosphate buffer system used in blood.</p>`
  },
  {
    id:'p150', difficulty:'hard', type:'concept', tag:'Titration Curve',
    q:'Why does the buffering region of a weak acid titration curve appear relatively FLAT (small pH change per mL of titrant), while the region near the equivalence point is STEEP?',
    choices:['In the buffering region, both HA and A^- are present in comparable amounts, so added base is absorbed by the equilibrium (Henderson-Hasselbalch buffering); near equivalence, one component is nearly exhausted, so small additions cause large swings in the ratio (and thus pH)','The flat region occurs because the pH meter is malfunctioning','The steep region occurs because the acid runs out of protons entirely','Both regions are equally steep; this is a common misconception'], correct:0,
    solution:`<p>While both HA and A^- are present in comparable amounts, the system resists pH change (buffering). As HA nears depletion, the ratio [A^-]/[HA] changes drastically with each small addition of base, producing the characteristic steep jump near equivalence.</p>`
  },
  {
    id:'p151', difficulty:'hard', type:'concept', tag:'Kw',
    q:'If Kw increased by a factor of 100 at some elevated temperature, by how many pH units would the pH of pure (neutral) water decrease from 7.00?',
    choices:['1.00 pH unit, since Kw × 100 means [H3O^+] increases by √100 = 10, and pH decreases by log(10) = 1.00','2.00 pH units','0.50 pH units','100 pH units'], correct:0,
    solution:`<p>[H3O^+] = √Kw. If Kw increases 100-fold, [H3O^+] increases by √100 = 10-fold, which corresponds to a decrease of exactly <strong>1.00 pH unit</strong> (from 7.00 to 6.00).</p>`
  },

  // ════════════════════════════════════════════════════════════════
  // NEW MULTI-STEP (20 problems)
  // ════════════════════════════════════════════════════════════════

  // ── EASY MULTI (2) ──
  {
    id:'p152', difficulty:'easy', type:'multi', tag:'Strong Acid pH',
    q:'Calculate the pH of a 0.030 M HBr solution.',
    answer: 1.52, tolerance: 0.05, unit:'',
    solution:`<p>HBr is a strong acid: [H3O^+] = 0.030 M<br>pH = -log(0.030) = <strong>1.52</strong></p>`
  },
  {
    id:'p153', difficulty:'easy', type:'multi', tag:'Kb from Ka',
    q:'A weak base has Kb = 2.0 × 10^-5. Calculate Kₐ for its conjugate acid.',
    answer: 5.0e-10, tolerance: 5e-11, unit:'',
    solution:`<p>Kₐ = Kw / Kb = (1.0 × 10^-14) / (2.0 × 10^-5) = <strong>5.0 × 10^-10</strong></p>`
  },

  // ── MEDIUM MULTI (4) ──
  {
    id:'p154', difficulty:'medium', type:'multi', tag:'Mass → pH',
    q:'3.20 g of KOH (molar mass = 56.11 g/mol) is dissolved in enough water to make 400.0 mL of solution. Calculate the pH.',
    answer: 13.15, tolerance: 0.05, unit:'',
    solution:`<p>mol = 3.20/56.11 = 0.05703 mol; M = 0.05703/0.4000 = 0.1426 M<br>pOH = -log(0.1426) = 0.846; pH = 14 - 0.846 = <strong>13.15</strong></p>`
  },
  {
    id:'p155', difficulty:'medium', type:'multi', tag:'% Ionization',
    q:'Calculate the percent ionization of a 0.0800 M weak acid solution. Kₐ = 2.5 × 10^-5.',
    answer: 1.77, tolerance: 0.1, unit:'%',
    solution:`<p>x ≈ √(2.5×10^-5 × 0.0800) = 1.41 × 10^-3 M<br>% ionization = (1.41×10^-3/0.0800) × 100 = <strong>1.77%</strong></p>`
  },
  {
    id:'p156', difficulty:'medium', type:'multi', tag:'Titration pH',
    q:'35.00 mL of 0.100 M HCl has been treated with 15.00 mL of 0.100 M NaOH. Calculate the pH.',
    answer: 1.40, tolerance: 0.05, unit:'',
    solution:`<p>mol HCl = 3.50 × 10^-3; mol NaOH = 1.50 × 10^-3<br>Excess H^+ = 2.00 × 10^-3 mol; V = 50.00 mL<br>[H^+] = 2.00×10^-3/0.05000 = 0.0400 M<br>pH = -log(0.0400) = <strong>1.40</strong></p>`
  },
  {
    id:'p157', difficulty:'medium', type:'multi', tag:'Ka from pH',
    q:'A 0.100 M solution of a weak acid HA has pH = 2.90. Calculate Kₐ (assume ionization is small).',
    answer: 1.58e-5, tolerance: 1.6e-6, unit:'',
    solution:`<p>[H3O^+] = 10^-2·^90 = 1.26 × 10^-3 M<br>Kₐ ≈ [H3O^+]^2/C = (1.26×10^-3)^2/0.100 = <strong>1.58 × 10^-5</strong></p>`
  },

  // ── HARD MULTI (14) ──
  {
    id:'p158', difficulty:'hard', type:'multi', tag:'Mass → pH',
    q:'4.50 g of a weak acid HX (molar mass = 90.0 g/mol, Kₐ = 3.5 × 10^-3) is dissolved in enough water to make 300.0 mL of solution. Calculate the pH.',
    answer: 1.65, tolerance: 0.05, unit:'',
    solution:`<p>mol = 4.50/90.0 = 0.0500 mol; M = 0.0500/0.300 = 0.1667 M<br>Use quadratic (large ionization): x^2 + (3.5×10^-3)x - (3.5×10^-3)(0.1667) = 0<br>x = 0.02247 M<br>pH = -log(0.02247) = <strong>1.65</strong></p>`
  },
  {
    id:'p159', difficulty:'hard', type:'multi', tag:'Buffer pH',
    q:'A buffer is prepared with 0.400 mol of a conjugate base and 0.150 mol of its conjugate acid (pKₐ = 4.20). Calculate the pH.',
    answer: 4.63, tolerance: 0.05, unit:'',
    solution:`<p>pH = pKₐ + log([A^-]/[HA]) = 4.20 + log(0.400/0.150) = 4.20 + 0.426 = <strong>4.63</strong></p>`
  },
  {
    id:'p160', difficulty:'hard', type:'multi', tag:'Titration pH',
    q:'35.00 mL of 0.100 M HCl is titrated with 0.100 M NaOH. Calculate the pH after adding 35.40 mL of NaOH (just past equivalence).',
    answer: 10.75, tolerance: 0.05, unit:'',
    solution:`<p>mol HCl = 3.500 × 10^-3; mol NaOH = 3.540 × 10^-3<br>Excess OH^- = 4.0 × 10^-5 mol; V = 70.40 mL<br>[OH^-] = 4.0×10^-5/0.07040 = 5.68×10^-4 M<br>pOH = -log(5.68×10^-4) = 3.25; pH = 14 - 3.25 = <strong>10.75</strong></p>`
  },
  {
    id:'p161', difficulty:'hard', type:'multi', tag:'% Ionization',
    q:'Calculate the percent ionization of a 0.00300 M weak acid solution. Kₐ = 6.0 × 10^-5.',
    answer: 13.2, tolerance: 0.5, unit:'%',
    solution:`<p>The sqrt approximation fails (&gt;5%), so use the quadratic:<br>x^2 + (6.0×10^-5)x - (6.0×10^-5)(0.00300) = 0<br>x = 3.95 × 10^-4 M<br>% ionization = (3.95×10^-4/0.00300) × 100 = <strong>13.2%</strong></p>`
  },
  {
    id:'p162', difficulty:'hard', type:'multi', tag:'Ka from pH',
    q:'A 0.0600 M solution of a weak acid HA has pH = 2.45. Calculate Kₐ.',
    answer: 2.23e-4, tolerance: 2e-5, unit:'',
    solution:`<p>[H3O^+] = 10^-2·^45 = 3.55 × 10^-3 M<br>Kₐ = (3.55×10^-3)^2/(0.0600-3.55×10^-3) = <strong>2.23 × 10^-4</strong></p>`
  },
  {
    id:'p163', difficulty:'hard', type:'multi', tag:'Buffer Preparation',
    q:'A chemist has 400.0 mL of 0.150 M benzoic acid (pKₐ = 4.20, M(NaC7H5O2) = 144.1 g/mol). How many grams of sodium benzoate must be added to create a buffer with pH = 4.50?',
    answer: 17.25, tolerance: 0.6, unit:'g',
    solution:`<p>4.50 = 4.20 + log(ratio) → ratio = 10^0.30 = 1.995<br>mol HA = 0.400 × 0.150 = 0.0600 mol<br>mol A^- needed = 1.995 × 0.0600 = 0.1197 mol<br>mass = 0.1197 × 144.1 = <strong>17.25 g</strong></p>`
  },
  {
    id:'p164', difficulty:'hard', type:'multi', tag:'Polyprotic Acid',
    q:'Calculate the pH of a 0.200 M weak diprotic acid solution using only the first ionization: Kₐ1 = 9.0 × 10^-3.',
    answer: 1.42, tolerance: 0.05, unit:'',
    solution:`<p>Use the quadratic (large ionization): x^2 + (9.0×10^-3)x - (9.0×10^-3)(0.200) = 0<br>x = 0.03816 M<br>pH = -log(0.03816) = <strong>1.42</strong></p>`
  },
  {
    id:'p165', difficulty:'hard', type:'multi', tag:'Weak Base pH',
    q:'Calculate the pH of a 0.220 M weak base solution. Kb = 6.5 × 10^-4.',
    answer: 12.07, tolerance: 0.05, unit:'',
    solution:`<p>Use the quadratic: x^2 + (6.5×10^-4)x - (6.5×10^-4)(0.220) = 0<br>x = 0.01164 M = [OH^-]<br>pOH = -log(0.01164) = 1.93; pH = 14 - 1.93 = <strong>12.07</strong></p>`
  },
  {
    id:'p166', difficulty:'hard', type:'multi', tag:'Buffer pH',
    q:'A buffer contains 0.180 mol HA and 0.180 mol A^- (pKₐ = 4.76). If 0.0300 mol of strong acid (HCl) is added, what is the new pH?',
    answer: 4.61, tolerance: 0.05, unit:'',
    solution:`<p>New [HA] = 0.180 + 0.0300 = 0.210; new [A^-] = 0.180 - 0.0300 = 0.150<br>pH = 4.76 + log(0.150/0.210) = 4.76 - 0.146 = <strong>4.61</strong></p>`
  },
  {
    id:'p167', difficulty:'hard', type:'multi', tag:'Kw at Elevated Temp',
    q:'At a certain elevated temperature, Kw = 5.5 × 10^-14. What is the pH of neutral (pure) water at this temperature?',
    answer: 6.63, tolerance: 0.05, unit:'',
    solution:`<p>[H3O^+] = [OH^-] = √Kw = √(5.5×10^-14) = 2.35 × 10^-7 M<br>pH = -log(2.35×10^-7) = <strong>6.63</strong></p>`
  },
  {
    id:'p168', difficulty:'hard', type:'multi', tag:'Ka from Half-Equivalence pH',
    q:'During a titration, the pH at the half-equivalence point is measured as 3.86. Calculate the Kₐ of the weak acid.',
    answer: 1.38e-4, tolerance: 1.4e-5, unit:'',
    solution:`<p>At half-equivalence, pH = pKₐ, so pKₐ = 3.86.<br>Kₐ = 10^-3·^86 = <strong>1.38 × 10^-4</strong></p>`
  },
  {
    id:'p169', difficulty:'hard', type:'multi', tag:'Titration',
    q:'20.00 mL of 0.0500 M diprotic acid H2A is titrated with 0.100 M NaOH. What volume of NaOH is needed to reach the SECOND equivalence point?',
    answer: 20.00, tolerance: 0.2, unit:'mL',
    solution:`<p>mol H2A = 0.02000 × 0.0500 = 1.000 × 10^-3 mol. Both protons require 2 × 1.000×10^-3 = 2.000×10^-3 mol NaOH.<br>V(NaOH) = 2.000×10^-3/0.100 = <strong>20.00 mL</strong></p>`
  },
  {
    id:'p170', difficulty:'hard', type:'multi', tag:'Conjugate Pairs',
    q:'A weak acid has Kₐ = 5.0 × 10^-8. Find: (a) pKₐ, (b) Kb for its conjugate base, (c) pKb. Enter pKₐ.',
    answer: 7.30, tolerance: 0.05, unit:'(enter pKₐ)',
    solution:`<p>(a) pKₐ = -log(5.0×10^-8) = <strong>7.30</strong><br>(b) Kb = Kw/Kₐ = (1.0×10^-14)/(5.0×10^-8) = 2.0×10^-7<br>(c) pKb = -log(2.0×10^-7) = 6.70<br>Check: pKₐ + pKb = 7.30 + 6.70 = 14.00 ✓</p>`
  },
  {
    id:'p171', difficulty:'hard', type:'multi', tag:'Titration pH',
    q:'50.0 mL of 0.0400 M HCl is mixed with 30.0 mL of 0.0500 M NaOH. Calculate the pH of the resulting solution.',
    answer: 2.20, tolerance: 0.05, unit:'',
    solution:`<p>mol HCl = 2.00 × 10^-3; mol NaOH = 1.50 × 10^-3<br>Excess H^+ = 5.0 × 10^-4 mol; V = 80.0 mL<br>[H^+] = 5.0×10^-4/0.0800 = 6.25×10^-3 M<br>pH = -log(6.25×10^-3) = <strong>2.20</strong></p>`
  },

]; // end ALL_PROBLEMS — 171 problems total (81 original + 90 added)
