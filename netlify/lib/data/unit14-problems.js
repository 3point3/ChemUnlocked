/* ── Unit 14 Problem Bank — Acids & Bases
   81 problems total: 37 calc | 29 concept | 15 multi
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  // ════════════════════════════════════════════════════════════════
  // CALCULATION — Strong Acid / Base pH  (p01–p10)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p01', type:'calc', tag:'Strong Acid pH',
    q:'Calculate the pH of a 0.010 M HCl solution.',
    answer: 2.00, tolerance: 0.05, unit:'',
    solution:`<p>HCl is a strong acid — it ionizes 100% in water.<br>
    [H₃O⁺] = 0.010 M<br>
    pH = −log(0.010) = −log(10⁻²) = <strong>2.00</strong></p>`
  },
  {
    id:'p02', type:'calc', tag:'Strong Acid pH',
    q:'Calculate the pH of a 0.050 M HNO₃ solution.',
    answer: 1.30, tolerance: 0.05, unit:'',
    solution:`<p>HNO₃ is a strong acid: [H₃O⁺] = 0.050 M<br>
    pH = −log(0.050) = <strong>1.30</strong></p>`
  },
  {
    id:'p03', type:'calc', tag:'Strong Acid pH',
    q:'Calculate the pH of a 0.0025 M HCl solution.',
    answer: 2.60, tolerance: 0.05, unit:'',
    solution:`<p>[H₃O⁺] = 0.0025 M<br>
    pH = −log(0.0025) = −log(2.5 × 10⁻³) = 3 − log(2.5) = 3 − 0.398 = <strong>2.60</strong></p>`
  },
  {
    id:'p04', type:'calc', tag:'Strong Base pH',
    q:'Calculate the pH of a 0.010 M NaOH solution at 25 °C.',
    answer: 12.00, tolerance: 0.05, unit:'',
    solution:`<p>NaOH is a strong base: [OH⁻] = 0.010 M<br>
    pOH = −log(0.010) = 2.00<br>
    pH = 14 − pOH = 14 − 2.00 = <strong>12.00</strong></p>`
  },
  {
    id:'p05', type:'calc', tag:'Strong Base pH',
    q:'Calculate the pH of a 0.0050 M NaOH solution at 25 °C.',
    answer: 11.70, tolerance: 0.05, unit:'',
    solution:`<p>[OH⁻] = 0.0050 M<br>
    pOH = −log(0.0050) = 2.30<br>
    pH = 14 − 2.30 = <strong>11.70</strong></p>`
  },
  {
    id:'p06', type:'calc', tag:'Strong Base pH',
    q:'Calculate the pH of a 0.200 M KOH solution at 25 °C.',
    answer: 13.30, tolerance: 0.05, unit:'',
    solution:`<p>[OH⁻] = 0.200 M<br>
    pOH = −log(0.200) = 0.699<br>
    pH = 14 − 0.699 = <strong>13.30</strong></p>`
  },
  {
    id:'p07', type:'calc', tag:'Strong Acid pH',
    q:'A 0.0050 M H₂SO₄ solution is prepared. Assuming complete ionization of both protons, calculate the pH.',
    answer: 2.00, tolerance: 0.05, unit:'',
    solution:`<p>H₂SO₄ is a diprotic strong acid. Each formula unit releases 2 H⁺:<br>
    [H₃O⁺] = 2 × 0.0050 = 0.010 M<br>
    pH = −log(0.010) = <strong>2.00</strong></p>`
  },
  {
    id:'p08', type:'calc', tag:'pH → [H₃O⁺]',
    q:'A solution has pH = 1.00. Calculate [H₃O⁺] in mol/L.',
    answer: 0.10, tolerance: 0.005, unit:'mol/L',
    solution:`<p>[H₃O⁺] = 10⁻ᵖᴴ = 10⁻¹·⁰⁰ = <strong>0.10 mol/L</strong></p>`
  },
  {
    id:'p09', type:'calc', tag:'pH + pOH',
    q:'A solution has pOH = 3.00 at 25 °C. Calculate the pH.',
    answer: 11.00, tolerance: 0.05, unit:'',
    solution:`<p>pH + pOH = 14.00 at 25 °C<br>
    pH = 14.00 − 3.00 = <strong>11.00</strong></p>`
  },
  {
    id:'p10', type:'calc', tag:'pH + pOH',
    q:'A solution has [OH⁻] = 2.5 × 10⁻⁴ M. Calculate the pH at 25 °C.',
    answer: 10.40, tolerance: 0.05, unit:'',
    solution:`<p>pOH = −log(2.5 × 10⁻⁴) = 3.60<br>
    pH = 14 − 3.60 = <strong>10.40</strong></p>`
  },

  // ════════════════════════════════════════════════════════════════
  // CALCULATION — Weak Acid / Base ICE  (p11–p16)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p11', type:'calc', tag:'Weak Acid pH',
    q:'Calculate the pH of a 0.100 M acetic acid solution. Kₐ = 1.8 × 10⁻⁵.',
    answer: 2.87, tolerance: 0.05, unit:'',
    solution:`<p>ICE table: [H₃O⁺] = x at equilibrium<br>
    Kₐ = x²/(0.100 − x) ≈ x²/0.100<br>
    x = √(1.8 × 10⁻⁵ × 0.100) = √(1.8 × 10⁻⁶) = 1.34 × 10⁻³ M<br>
    Check: 1.34%/0.100 = 1.34% &lt; 5% ✓<br>
    pH = −log(1.34 × 10⁻³) = <strong>2.87</strong></p>`
  },
  {
    id:'p12', type:'calc', tag:'Weak Acid pH',
    q:'Calculate the pH of a 0.150 M HF solution. Kₐ = 6.8 × 10⁻⁴.',
    answer: 2.01, tolerance: 0.05, unit:'',
    solution:`<p>Because Kₐ is relatively large, use the quadratic formula:<br>
    x² + (6.8 × 10⁻⁴)x − (6.8 × 10⁻⁴)(0.150) = 0<br>
    x = [−6.8 × 10⁻⁴ + √((6.8 × 10⁻⁴)² + 4(6.8 × 10⁻⁴)(0.150))] / 2<br>
    x = 9.77 × 10⁻³ M<br>
    pH = −log(9.77 × 10⁻³) = <strong>2.01</strong></p>`
  },
  {
    id:'p13', type:'calc', tag:'Weak Acid pH',
    q:'Calculate the pH of a 0.0500 M formic acid (HCOOH) solution. Kₐ = 1.8 × 10⁻⁴.',
    answer: 2.54, tolerance: 0.05, unit:'',
    solution:`<p>Approximate first: x ≈ √(1.8 × 10⁻⁴ × 0.0500) = 3.0 × 10⁻³ M<br>
    Check: 3.0 × 10⁻³ / 0.0500 = 6% — slightly over 5%, use quadratic:<br>
    x = 2.91 × 10⁻³ M<br>
    pH = −log(2.91 × 10⁻³) = <strong>2.54</strong></p>`
  },
  {
    id:'p14', type:'calc', tag:'Weak Acid pH',
    q:'Calculate the pH of a 0.200 M HCN solution. Kₐ = 4.9 × 10⁻¹⁰.',
    answer: 5.00, tolerance: 0.05, unit:'',
    solution:`<p>x ≈ √(4.9 × 10⁻¹⁰ × 0.200) = √(9.8 × 10⁻¹¹) = 9.90 × 10⁻⁶ M<br>
    Check: 9.90 × 10⁻⁶ / 0.200 = 0.005% ≪ 5% ✓<br>
    pH = −log(9.90 × 10⁻⁶) = <strong>5.00</strong></p>`
  },
  {
    id:'p15', type:'calc', tag:'Weak Base pH',
    q:'Calculate the pH of a 0.100 M NH₃ solution. Kb = 1.8 × 10⁻⁵.',
    answer: 11.13, tolerance: 0.05, unit:'',
    solution:`<p>NH₃ + H₂O ⇌ NH₄⁺ + OH⁻<br>
    x ≈ √(1.8 × 10⁻⁵ × 0.100) = 1.34 × 10⁻³ M = [OH⁻]<br>
    Check: 1.34% &lt; 5% ✓<br>
    pOH = −log(1.34 × 10⁻³) = 2.87<br>
    pH = 14 − 2.87 = <strong>11.13</strong></p>`
  },
  {
    id:'p16', type:'calc', tag:'Weak Base pH',
    q:'Calculate the pH of a 0.0250 M NH₃ solution. Kb = 1.8 × 10⁻⁵.',
    answer: 10.83, tolerance: 0.05, unit:'',
    solution:`<p>x ≈ √(1.8 × 10⁻⁵ × 0.0250) = √(4.5 × 10⁻⁷) = 6.71 × 10⁻⁴ M<br>
    pOH = −log(6.71 × 10⁻⁴) = 3.17<br>
    pH = 14 − 3.17 = <strong>10.83</strong></p>`
  },

  // ════════════════════════════════════════════════════════════════
  // CALCULATION — pKa / pKb / Ka / Kb conversions  (p17–p23)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p17', type:'calc', tag:'pKa',
    q:'Acetic acid has Kₐ = 1.8 × 10⁻⁵. Calculate its pKₐ.',
    answer: 4.74, tolerance: 0.05, unit:'',
    solution:`<p>pKₐ = −log(Kₐ) = −log(1.8 × 10⁻⁵)<br>
    = −(log 1.8 + log 10⁻⁵) = −(0.255 − 5) = <strong>4.74</strong></p>`
  },
  {
    id:'p18', type:'calc', tag:'pKa',
    q:'Hydrofluoric acid has Kₐ = 6.8 × 10⁻⁴. Calculate its pKₐ.',
    answer: 3.17, tolerance: 0.05, unit:'',
    solution:`<p>pKₐ = −log(6.8 × 10⁻⁴) = −(log 6.8 − 4) = −(0.833 − 4) = <strong>3.17</strong></p>`
  },
  {
    id:'p19', type:'calc', tag:'Ka from pKa',
    q:'A weak acid has pKₐ = 9.25. Calculate its Kₐ. Express your answer to 2 significant figures (e.g. 5.6e-10).',
    answer: 5.62e-10, tolerance: 5e-11, unit:'',
    solution:`<p>Kₐ = 10⁻ᵖᴷᵃ = 10⁻⁹·²⁵<br>
    = 10⁻¹⁰ × 10⁰·⁷⁵ = 10⁻¹⁰ × 5.62 = <strong>5.62 × 10⁻¹⁰</strong></p>`
  },
  {
    id:'p20', type:'calc', tag:'Kb from Ka',
    q:'Acetic acid has Kₐ = 1.8 × 10⁻⁵. Calculate Kb for the acetate ion (CH₃COO⁻).',
    answer: 5.56e-10, tolerance: 5e-11, unit:'',
    solution:`<p>Kₐ × Kb = Kw = 1.0 × 10⁻¹⁴<br>
    Kb = Kw / Kₐ = (1.0 × 10⁻¹⁴) / (1.8 × 10⁻⁵) = <strong>5.56 × 10⁻¹⁰</strong></p>`
  },
  {
    id:'p21', type:'calc', tag:'pKb',
    q:'Ammonia has Kb = 1.8 × 10⁻⁵. Calculate pKb.',
    answer: 4.74, tolerance: 0.05, unit:'',
    solution:`<p>pKb = −log(1.8 × 10⁻⁵) = <strong>4.74</strong></p>`
  },
  {
    id:'p22', type:'calc', tag:'pKa + pKb',
    q:'A weak base has pKb = 4.74. Calculate the pKₐ of its conjugate acid.',
    answer: 9.26, tolerance: 0.05, unit:'',
    solution:`<p>pKₐ + pKb = 14.00 at 25 °C<br>
    pKₐ = 14.00 − 4.74 = <strong>9.26</strong></p>`
  },
  {
    id:'p23', type:'calc', tag:'Kb from Ka',
    q:'HCN has Kₐ = 4.9 × 10⁻¹⁰. Calculate Kb for CN⁻.',
    answer: 2.04e-5, tolerance: 1e-6, unit:'',
    solution:`<p>Kb = Kw / Kₐ = (1.0 × 10⁻¹⁴) / (4.9 × 10⁻¹⁰) = <strong>2.04 × 10⁻⁵</strong></p>`
  },

  // ════════════════════════════════════════════════════════════════
  // CALCULATION — Kw / [H₃O⁺][OH⁻] interconversions  (p24–p27)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p24', type:'calc', tag:'Kw',
    q:'A solution has [H₃O⁺] = 3.5 × 10⁻⁴ M. Calculate [OH⁻] at 25 °C.',
    answer: 2.86e-11, tolerance: 5e-12, unit:'mol/L',
    solution:`<p>[OH⁻] = Kw / [H₃O⁺] = (1.0 × 10⁻¹⁴) / (3.5 × 10⁻⁴) = <strong>2.86 × 10⁻¹¹ mol/L</strong></p>`
  },
  {
    id:'p25', type:'calc', tag:'Kw',
    q:'A solution has [OH⁻] = 4.0 × 10⁻³ M. Calculate [H₃O⁺] at 25 °C.',
    answer: 2.50e-12, tolerance: 5e-13, unit:'mol/L',
    solution:`<p>[H₃O⁺] = Kw / [OH⁻] = (1.0 × 10⁻¹⁴) / (4.0 × 10⁻³) = <strong>2.50 × 10⁻¹² mol/L</strong></p>`
  },
  {
    id:'p26', type:'calc', tag:'pH → [OH⁻]',
    q:'A solution has pH = 4.35. Calculate [OH⁻] at 25 °C.',
    answer: 2.24e-10, tolerance: 1e-11, unit:'mol/L',
    solution:`<p>pOH = 14 − 4.35 = 9.65<br>
    [OH⁻] = 10⁻⁹·⁶⁵ = <strong>2.24 × 10⁻¹⁰ mol/L</strong></p>`
  },
  {
    id:'p27', type:'calc', tag:'pH → [H₃O⁺]',
    q:'A solution has pH = 9.72. Calculate [H₃O⁺] at 25 °C.',
    answer: 1.91e-10, tolerance: 5e-12, unit:'mol/L',
    solution:`<p>[H₃O⁺] = 10⁻⁹·⁷² = <strong>1.91 × 10⁻¹⁰ mol/L</strong></p>`
  },

  // ════════════════════════════════════════════════════════════════
  // CALCULATION — Titration stoichiometry  (p28–p32)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p28', type:'calc', tag:'Titration',
    q:'25.00 mL of 0.100 M HCl is titrated with 0.100 M NaOH. What volume of NaOH (in mL) is required to reach the equivalence point?',
    answer: 25.00, tolerance: 0.1, unit:'mL',
    solution:`<p>mol HCl = 0.02500 L × 0.100 mol/L = 2.50 × 10⁻³ mol<br>
    At equivalence: mol NaOH = mol HCl<br>
    V(NaOH) = 2.50 × 10⁻³ mol / 0.100 mol/L = 0.02500 L = <strong>25.00 mL</strong></p>`
  },
  {
    id:'p29', type:'calc', tag:'Titration',
    q:'20.00 mL of 0.150 M HCl is titrated with 0.200 M NaOH. What volume of NaOH (in mL) is needed to reach the equivalence point?',
    answer: 15.00, tolerance: 0.1, unit:'mL',
    solution:`<p>mol HCl = 0.02000 L × 0.150 mol/L = 3.00 × 10⁻³ mol<br>
    V(NaOH) = 3.00 × 10⁻³ mol / 0.200 mol/L = 0.01500 L = <strong>15.00 mL</strong></p>`
  },
  {
    id:'p30', type:'calc', tag:'Titration',
    q:'30.00 mL of 0.0800 M H₂SO₄ is titrated with 0.100 M NaOH. H₂SO₄ provides 2 H⁺ per molecule. What volume of NaOH (in mL) is needed?',
    answer: 48.00, tolerance: 0.2, unit:'mL',
    solution:`<p>mol H⁺ = 2 × 0.03000 L × 0.0800 mol/L = 4.80 × 10⁻³ mol<br>
    V(NaOH) = 4.80 × 10⁻³ / 0.100 = 0.04800 L = <strong>48.00 mL</strong></p>`
  },
  {
    id:'p31', type:'calc', tag:'Titration',
    q:'10.00 mL of an unknown HCl solution is titrated to the equivalence point using 25.00 mL of 0.1000 M NaOH. Calculate the molarity of the HCl solution.',
    answer: 0.2500, tolerance: 0.005, unit:'M',
    solution:`<p>mol NaOH = 0.02500 L × 0.1000 mol/L = 2.500 × 10⁻³ mol<br>
    mol HCl = mol NaOH = 2.500 × 10⁻³ mol<br>
    [HCl] = 2.500 × 10⁻³ mol / 0.01000 L = <strong>0.2500 M</strong></p>`
  },
  {
    id:'p32', type:'calc', tag:'Titration',
    q:'25.00 mL of an unknown NaOH solution is titrated to the equivalence point using 18.50 mL of 0.1000 M HCl. Calculate the molarity of the NaOH solution.',
    answer: 0.0740, tolerance: 0.002, unit:'M',
    solution:`<p>mol HCl = 0.01850 L × 0.1000 mol/L = 1.850 × 10⁻³ mol<br>
    [NaOH] = 1.850 × 10⁻³ mol / 0.02500 L = <strong>0.0740 M</strong></p>`
  },

  // ════════════════════════════════════════════════════════════════
  // CALCULATION — pH during a titration  (p33–p35)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p33', type:'calc', tag:'Titration pH',
    q:'25.00 mL of 0.100 M HCl has been treated with 10.00 mL of 0.100 M NaOH. Calculate the pH of the resulting solution (before the equivalence point).',
    answer: 1.37, tolerance: 0.05, unit:'',
    solution:`<p>mol HCl = 2.50 × 10⁻³ mol; mol NaOH = 1.00 × 10⁻³ mol<br>
    Excess H⁺ = 1.50 × 10⁻³ mol; total volume = 35.00 mL = 0.03500 L<br>
    [H⁺] = 1.50 × 10⁻³ / 0.03500 = 0.0429 M<br>
    pH = −log(0.0429) = <strong>1.37</strong></p>`
  },
  {
    id:'p34', type:'calc', tag:'Titration pH',
    q:'25.00 mL of 0.100 M HCl is mixed with 25.00 mL of 0.100 M NaOH. Calculate the pH of the resulting solution.',
    answer: 7.00, tolerance: 0.05, unit:'',
    solution:`<p>Equal moles of strong acid and strong base — the equivalence point of a strong acid / strong base titration.<br>
    The salt (NaCl) does not hydrolyze. The solution is simply pure water.<br>
    pH = <strong>7.00</strong></p>`
  },
  {
    id:'p35', type:'calc', tag:'Titration pH',
    q:'25.00 mL of 0.100 M HCl is mixed with 30.00 mL of 0.100 M NaOH. Calculate the pH (past the equivalence point).',
    answer: 11.96, tolerance: 0.05, unit:'',
    solution:`<p>mol HCl = 2.50 × 10⁻³ mol; mol NaOH = 3.00 × 10⁻³ mol<br>
    Excess OH⁻ = 5.0 × 10⁻⁴ mol; total volume = 55.00 mL = 0.05500 L<br>
    [OH⁻] = 5.0 × 10⁻⁴ / 0.05500 = 9.09 × 10⁻³ M<br>
    pOH = −log(9.09 × 10⁻³) = 2.04<br>
    pH = 14 − 2.04 = <strong>11.96</strong></p>`
  },

  // ════════════════════════════════════════════════════════════════
  // CALCULATION — Polyprotic acids  (p36–p37)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p36', type:'calc', tag:'Polyprotic Acid',
    q:'Calculate the pH of a 0.010 M H₂CO₃ solution. Use only the first ionization: Kₐ₁ = 4.3 × 10⁻⁷.',
    answer: 4.18, tolerance: 0.05, unit:'',
    solution:`<p>x ≈ √(Kₐ₁ × C) = √(4.3 × 10⁻⁷ × 0.010) = √(4.3 × 10⁻⁹) = 6.56 × 10⁻⁵ M<br>
    Check: 6.56 × 10⁻⁵ / 0.010 = 0.66% &lt; 5% ✓<br>
    pH = −log(6.56 × 10⁻⁵) = <strong>4.18</strong></p>`
  },
  {
    id:'p37', type:'calc', tag:'Polyprotic Acid',
    q:'Calculate the pH of a 0.100 M H₃PO₄ solution. Use only the first ionization: Kₐ₁ = 7.5 × 10⁻³.',
    answer: 1.62, tolerance: 0.05, unit:'',
    solution:`<p>Percent ionization will be large — use the quadratic:<br>
    x² + (7.5 × 10⁻³)x − (7.5 × 10⁻³)(0.100) = 0<br>
    x = [−7.5 × 10⁻³ + √((7.5 × 10⁻³)² + 4(7.5 × 10⁻³)(0.100))] / 2<br>
    x = 2.39 × 10⁻² M<br>
    pH = −log(2.39 × 10⁻²) = <strong>1.62</strong></p>`
  },

  // ════════════════════════════════════════════════════════════════
  // MULTI-STEP  (p38–p52)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p38', type:'multi', tag:'Mass → pH',
    q:'0.365 g of HCl (molar mass = 36.46 g/mol) is dissolved in enough water to make 500.0 mL of solution. Calculate the pH.',
    answer: 1.70, tolerance: 0.05, unit:'',
    solution:`<p>Step 1 — moles HCl: 0.365 g ÷ 36.46 g/mol = 0.01001 mol<br>
    Step 2 — molarity: 0.01001 mol / 0.5000 L = 0.02002 M<br>
    Step 3 — pH (strong acid): pH = −log(0.02002) = <strong>1.70</strong></p>`
  },
  {
    id:'p39', type:'multi', tag:'Mass → pH',
    q:'2.00 g of NaOH (molar mass = 40.00 g/mol) is dissolved in enough water to make 250.0 mL of solution. Calculate the pH at 25 °C.',
    answer: 13.30, tolerance: 0.05, unit:'',
    solution:`<p>Step 1 — moles NaOH: 2.00 g ÷ 40.00 g/mol = 0.0500 mol<br>
    Step 2 — molarity: 0.0500 mol / 0.2500 L = 0.200 M<br>
    Step 3 — pOH = −log(0.200) = 0.699<br>
    pH = 14 − 0.699 = <strong>13.30</strong></p>`
  },
  {
    id:'p40', type:'multi', tag:'Mass → pH',
    q:'1.00 g of HF (molar mass = 20.01 g/mol) is dissolved to make 250.0 mL of solution. Kₐ(HF) = 6.8 × 10⁻⁴. Calculate the pH.',
    answer: 1.95, tolerance: 0.05, unit:'',
    solution:`<p>Step 1 — moles: 1.00 / 20.01 = 0.04997 mol<br>
    Step 2 — molarity: 0.04997 / 0.2500 = 0.1999 M<br>
    Step 3 — quadratic (percent ionization will be ~7%): x = 1.13 × 10⁻² M<br>
    pH = −log(1.13 × 10⁻²) = <strong>1.95</strong></p>`
  },
  {
    id:'p41', type:'multi', tag:'% Ionization',
    q:'Calculate the percent ionization of 0.100 M acetic acid. Kₐ = 1.8 × 10⁻⁵.',
    answer: 1.34, tolerance: 0.1, unit:'%',
    solution:`<p>[H₃O⁺] = √(1.8 × 10⁻⁵ × 0.100) = 1.34 × 10⁻³ M<br>
    % ionization = (1.34 × 10⁻³ / 0.100) × 100 = <strong>1.34%</strong></p>`
  },
  {
    id:'p42', type:'multi', tag:'% Ionization',
    q:'Calculate the percent ionization of 0.0100 M acetic acid. Kₐ = 1.8 × 10⁻⁵. How does it compare to 0.100 M?',
    answer: 4.24, tolerance: 0.2, unit:'%',
    solution:`<p>x ≈ √(1.8 × 10⁻⁵ × 0.0100) = 4.24 × 10⁻⁴ M<br>
    Check: 4.24 × 10⁻⁴ / 0.0100 = 4.24% — just under 5%, approximation valid.<br>
    % ionization = (4.24 × 10⁻⁴ / 0.0100) × 100 = <strong>4.24%</strong><br>
    This is greater than the 1.34% at 0.100 M — dilution increases percent ionization (Le Chatelier).</p>`
  },
  {
    id:'p43', type:'multi', tag:'Conjugate Pairs',
    q:'A weak acid HA has Kₐ = 2.0 × 10⁻⁶. Find: (a) pKₐ, (b) Kb for A⁻, (c) pKb for A⁻.',
    answer: 5.70, tolerance: 0.05, unit:'(enter pKₐ)',
    solution:`<p>(a) pKₐ = −log(2.0 × 10⁻⁶) = <strong>5.70</strong><br>
    (b) Kb = Kw / Kₐ = 1.0 × 10⁻¹⁴ / 2.0 × 10⁻⁶ = 5.0 × 10⁻⁹<br>
    (c) pKb = −log(5.0 × 10⁻⁹) = 8.30<br>
    Check: pKₐ + pKb = 5.70 + 8.30 = 14.00 ✓</p>`
  },
  {
    id:'p44', type:'multi', tag:'Titration pH',
    q:'50.00 mL of 0.200 M HCl is titrated with 0.200 M NaOH. Calculate the pH after adding 60.00 mL of NaOH.',
    answer: 12.26, tolerance: 0.05, unit:'',
    solution:`<p>mol HCl = 0.05000 × 0.200 = 0.01000 mol<br>
    mol NaOH = 0.06000 × 0.200 = 0.01200 mol<br>
    Excess OH⁻ = 0.00200 mol; V = 110.00 mL = 0.1100 L<br>
    [OH⁻] = 0.00200 / 0.1100 = 0.01818 M<br>
    pOH = −log(0.01818) = 1.74; pH = 14 − 1.74 = <strong>12.26</strong></p>`
  },
  {
    id:'p45', type:'multi', tag:'Titration pH',
    q:'40.00 mL of 0.100 M NaOH is titrated with 0.100 M HCl. Calculate the pH after adding 30.00 mL of HCl.',
    answer: 12.15, tolerance: 0.05, unit:'',
    solution:`<p>mol NaOH = 0.04000 × 0.100 = 4.00 × 10⁻³ mol<br>
    mol HCl = 0.03000 × 0.100 = 3.00 × 10⁻³ mol<br>
    Excess OH⁻ = 1.00 × 10⁻³ mol; V = 70.00 mL = 0.07000 L<br>
    [OH⁻] = 1.00 × 10⁻³ / 0.07000 = 0.01429 M<br>
    pOH = −log(0.01429) = 1.845; pH = 14 − 1.845 = <strong>12.15</strong><br>
    (Accepted range 12.10–12.20 due to rounding)</p>`
  },
  {
    id:'p46', type:'multi', tag:'Ka from pH',
    q:'A 0.200 M solution of a weak acid HA has pH = 3.15. Calculate Kₐ.',
    answer: 2.52e-6, tolerance: 3e-7, unit:'',
    solution:`<p>[H₃O⁺] = 10⁻³·¹⁵ = 7.08 × 10⁻⁴ M<br>
    At equilibrium: [HA] = 0.200 − 7.08 × 10⁻⁴ ≈ 0.1993 M<br>
    Kₐ = (7.08 × 10⁻⁴)² / 0.1993 = 5.01 × 10⁻⁷ / 0.1993 = <strong>2.52 × 10⁻⁶</strong></p>`
  },
  {
    id:'p47', type:'multi', tag:'Ka from pH',
    q:'A 0.0500 M solution of a weak acid HA has a pH of 4.02. Calculate Kₐ.',
    answer: 1.84e-7, tolerance: 2e-8, unit:'',
    solution:`<p>[H₃O⁺] = 10⁻⁴·⁰² = 9.55 × 10⁻⁵ M<br>
    [HA] ≈ 0.0500 − 9.55 × 10⁻⁵ ≈ 0.04990 M<br>
    Kₐ = (9.55 × 10⁻⁵)² / 0.04990 = 9.12 × 10⁻⁹ / 0.04990 = <strong>1.84 × 10⁻⁷</strong></p>`
  },
  {
    id:'p48', type:'multi', tag:'Polyprotic pH',
    q:'A diprotic acid H₂A has Kₐ₁ = 5.0 × 10⁻⁴ and Kₐ₂ = 5.0 × 10⁻⁹. A 0.100 M solution is prepared. Calculate the pH using only Kₐ₁.',
    answer: 2.15, tolerance: 0.05, unit:'',
    solution:`<p>x² + (5.0 × 10⁻⁴)x − (5.0 × 10⁻⁴)(0.100) = 0<br>
    x = [−5.0 × 10⁻⁴ + √((5.0 × 10⁻⁴)² + 4(5.0 × 10⁻⁴)(0.100))] / 2<br>
    x = 6.84 × 10⁻³ M<br>
    pH = −log(6.84 × 10⁻³) = <strong>2.16</strong><br>
    (Kₐ₂ contributes negligibly — Kₐ₁/Kₐ₂ = 10⁵)</p>`
  },
  {
    id:'p49', type:'multi', tag:'Brønsted-Lowry',
    q:'For the reaction: HNO₂ + H₂O ⇌ H₃O⁺ + NO₂⁻, identify both conjugate acid-base pairs AND determine whether the equilibrium lies left or right given Kₐ(HNO₂) = 4.5 × 10⁻⁴.',
    choices:[
      'Pair 1: HNO₂/NO₂⁻; Pair 2: H₃O⁺/H₂O — equilibrium lies left (Kₐ < 1)',
      'Pair 1: HNO₂/NO₂⁻; Pair 2: H₂O/H₃O⁺ — equilibrium lies right (Kₐ > 1)',
      'Pair 1: HNO₂/H₂O; Pair 2: H₃O⁺/NO₂⁻ — equilibrium lies left',
      'Pair 1: HNO₂/NO₂⁻; Pair 2: H₂O/OH⁻ — equilibrium lies right'
    ], correct: 0,
    solution:`<p>Conjugate pairs differ by one H⁺:<br>
    Pair 1: HNO₂ (acid) / NO₂⁻ (conjugate base)<br>
    Pair 2: H₃O⁺ (conjugate acid) / H₂O (base)<br>
    Kₐ = 4.5 × 10⁻⁴ &lt; 1, so equilibrium lies to the <strong>left</strong> — HNO₂ is only slightly ionized.</p>`
  },
  {
    id:'p50', type:'multi', tag:'Acid Strength',
    q:'Two weak acids HA (Kₐ = 3.0 × 10⁻⁵) and HB (Kₐ = 7.0 × 10⁻⁸) are each dissolved at 0.100 M. Which solution has the higher [H₃O⁺], and by approximately what factor?',
    choices:[
      'HA has higher [H₃O⁺] by a factor of about 20',
      'HB has higher [H₃O⁺] by a factor of about 20',
      'HA has higher [H₃O⁺] by a factor of about 2300',
      'They have the same [H₃O⁺] because concentration is equal'
    ], correct: 0,
    solution:`<p>[H₃O⁺] ≈ √(Kₐ × C): x(HA) = √(3.0 × 10⁻⁵ × 0.1) = 1.73 × 10⁻³ M<br>
    x(HB) = √(7.0 × 10⁻⁸ × 0.1) = 8.37 × 10⁻⁵ M<br>
    Ratio = 1.73 × 10⁻³ / 8.37 × 10⁻⁵ ≈ <strong>20.7 ≈ 20</strong></p>`
  },
  {
    id:'p51', type:'multi', tag:'Equivalence Point pH',
    q:'Predict the pH at the equivalence point when 0.100 M acetic acid is titrated with 0.100 M NaOH. Is the pH equal to, greater than, or less than 7? Justify.',
    choices:[
      'Greater than 7 — the conjugate base (acetate) hydrolyzes to produce OH⁻',
      'Equal to 7 — all the acid has been neutralized',
      'Less than 7 — excess NaOH lowers the pH',
      'Equal to 7 — sodium acetate is a neutral salt'
    ], correct: 0,
    solution:`<p>At the equivalence point, all acetic acid has been converted to sodium acetate (NaC₂H₃O₂).<br>
    Acetate (C₂H₃O₂⁻) is the conjugate base of a weak acid — it reacts with water:<br>
    C₂H₃O₂⁻ + H₂O ⇌ HC₂H₃O₂ + OH⁻<br>
    This produces OH⁻, making the solution <strong>basic (pH &gt; 7)</strong>.</p>`
  },
  {
    id:'p52', type:'multi', tag:'Titration Curve',
    q:'At the half-equivalence point of a weak acid-strong base titration, pH = pKₐ. If 25.00 mL of 0.100 M benzoic acid (pKₐ = 4.20) is titrated with 0.100 M NaOH, what is the pH after exactly 12.50 mL of NaOH has been added?',
    answer: 4.20, tolerance: 0.05, unit:'',
    solution:`<p>At the half-equivalence point, half the acid has been converted to its conjugate base.<br>
    [HA] = [A⁻], so log([A⁻]/[HA]) = log(1) = 0<br>
    pH = pKₐ + 0 = <strong>4.20</strong><br>
    This is one of the most important relationships in acid-base chemistry: pH at half-equivalence = pKₐ.</p>`
  },

  // ════════════════════════════════════════════════════════════════
  // CONCEPT  (p53–p81)
  // ════════════════════════════════════════════════════════════════
  {
    id:'p53', type:'concept', tag:'Brønsted-Lowry',
    q:'In the reaction NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺, which species is the Brønsted-Lowry acid?',
    choices:['NH₄⁺','H₂O','NH₃','H₃O⁺'], correct:0,
    solution:`<p>A Brønsted-Lowry acid donates a proton. NH₄⁺ donates H⁺ to H₂O, forming H₃O⁺ and NH₃. So <strong>NH₄⁺ is the acid</strong>. H₂O accepts the proton — it is the base in this reaction.</p>`
  },
  {
    id:'p54', type:'concept', tag:'Conjugate Pairs',
    q:'What is the conjugate base of H₂PO₄⁻?',
    choices:['HPO₄²⁻','H₃PO₄','PO₄³⁻','H₂O'], correct:0,
    solution:`<p>A conjugate base is formed by removing one H⁺ from the acid.<br>
    H₂PO₄⁻ − H⁺ = HPO₄²⁻<br>
    <strong>HPO₄²⁻ is the conjugate base.</strong></p>`
  },
  {
    id:'p55', type:'concept', tag:'Conjugate Pairs',
    q:'What is the conjugate acid of NH₃?',
    choices:['NH₄⁺','NH₂⁻','N₂H₄','OH⁻'], correct:0,
    solution:`<p>A conjugate acid is formed by adding one H⁺ to the base.<br>
    NH₃ + H⁺ = NH₄⁺<br>
    <strong>NH₄⁺ is the conjugate acid of NH₃.</strong></p>`
  },
  {
    id:'p56', type:'concept', tag:'Amphiprotic',
    q:'Which of the following species is amphiprotic?',
    choices:['HCO₃⁻','CO₃²⁻','H₂SO₄','NaOH'], correct:0,
    solution:`<p>An amphiprotic species can both donate and accept a proton.<br>
    HCO₃⁻ can donate H⁺ (→ CO₃²⁻) or accept H⁺ (→ H₂CO₃).<br>
    CO₃²⁻ can only accept H⁺ (base only). H₂SO₄ and NaOH are strong acid/base.</p>`
  },
  {
    id:'p57', type:'concept', tag:'Autoionization',
    q:'The autoionization of water produces which pair of ions?',
    choices:['H₃O⁺ and OH⁻','H⁺ and O²⁻','H₂⁺ and O⁻','H⁺ and H⁻'], correct:0,
    solution:`<p>2H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq)<br>
    One water molecule donates H⁺ to another, forming <strong>H₃O⁺ and OH⁻</strong>.</p>`
  },
  {
    id:'p58', type:'concept', tag:'Kw',
    q:'At 25 °C, Kw = 1.0 × 10⁻¹⁴. Which statement about Kw is correct?',
    choices:[
      'Kw = [H₃O⁺][OH⁻] and applies to any aqueous solution at 25 °C',
      'Kw only applies to pure water, not acidic or basic solutions',
      'Kw increases as pH increases',
      'Kw is only defined when [H₃O⁺] = [OH⁻]'
    ], correct:0,
    solution:`<p>Kw is the equilibrium constant for water's autoionization and equals [H₃O⁺][OH⁻] in <em>any</em> aqueous solution at 25 °C — acidic, basic, or neutral. It is a true constant at fixed temperature.</p>`
  },
  {
    id:'p59', type:'concept', tag:'pH Scale',
    q:'A solution has [H₃O⁺] = 1.0 × 10⁻³ M. Which statement is correct?',
    choices:[
      'pH = 3, the solution is acidic',
      'pH = 11, the solution is basic',
      'pH = 3, the solution is basic',
      'pH = −3, the solution is acidic'
    ], correct:0,
    solution:`<p>pH = −log(1.0 × 10⁻³) = 3. Since pH &lt; 7, the solution is <strong>acidic</strong>.</p>`
  },
  {
    id:'p60', type:'concept', tag:'pH Scale',
    q:'Which solution is most acidic?',
    choices:['pH = 1.5','pH = 3.2','pH = 6.8','pH = 4.0'], correct:0,
    solution:`<p>The lower the pH, the higher the [H₃O⁺], and the more acidic the solution. <strong>pH = 1.5</strong> is the most acidic.</p>`
  },
  {
    id:'p61', type:'concept', tag:'pH Scale',
    q:'A change from pH 5 to pH 3 represents what change in [H₃O⁺]?',
    choices:[
      'A 100-fold increase in [H₃O⁺]',
      'A 2-fold increase in [H₃O⁺]',
      'A 100-fold decrease in [H₃O⁺]',
      'A 2-fold decrease in [H₃O⁺]'
    ], correct:0,
    solution:`<p>Each unit decrease in pH represents a 10-fold increase in [H₃O⁺].<br>
    A decrease of 2 units = 10² = <strong>100-fold increase</strong>.</p>`
  },
  {
    id:'p62', type:'concept', tag:'Strong vs Weak',
    q:'Which of the following is a strong acid?',
    choices:['HI','HF','CH₃COOH','HCN'], correct:0,
    solution:`<p>Strong acids ionize essentially 100% in water. The strong haloacids are HCl, HBr, and <strong>HI</strong>. HF is a weak acid despite being a haloacid — the H–F bond is unusually strong.</p>`
  },
  {
    id:'p63', type:'concept', tag:'Strong vs Weak',
    q:'Which of the following correctly ranks the acids from strongest to weakest?',
    choices:[
      'HCl > HF > HCN',
      'HCN > HF > HCl',
      'HF > HCl > HCN',
      'HCl > HCN > HF'
    ], correct:0,
    solution:`<p>HCl is a strong acid (complete ionization). HF is weak but relatively strong (Kₐ = 6.8 × 10⁻⁴). HCN is very weak (Kₐ = 4.9 × 10⁻¹⁰).<br>
    Correct order: <strong>HCl > HF > HCN</strong>.</p>`
  },
  {
    id:'p64', type:'concept', tag:'Acid Strength Trends',
    q:'Why does acid strength increase going down Group 17 (HF < HCl < HBr < HI)?',
    choices:[
      'The H–X bond gets longer and weaker, making it easier to donate H⁺',
      'The H–X bond gets shorter and stronger, making it easier to donate H⁺',
      'Electronegativity increases down the group, pulling H away from X',
      'The atoms get smaller, so the bond is more polar'
    ], correct:0,
    solution:`<p>Going down Group 17, the halogen atoms get larger. The H–X bond gets <strong>longer and weaker</strong>, so it breaks more easily — making H⁺ donation easier and the acid stronger. Electronegativity actually <em>decreases</em> down the group.</p>`
  },
  {
    id:'p65', type:'concept', tag:'Acid Strength Trends',
    q:'Which oxyacid is stronger: H₂SO₃ or H₂SO₄?',
    choices:[
      'H₂SO₄ — more oxygen atoms increase the oxidation state of S, weakening the O–H bond',
      'H₂SO₃ — fewer oxygen atoms means a simpler structure and more ionization',
      'They are equal because both contain sulfur and two ionizable protons',
      'H₂SO₃ — a higher oxidation state of S makes the O–H bond stronger'
    ], correct:0,
    solution:`<p>In oxyacids, more oxygen atoms pull electron density away from the O–H bond, making H⁺ release easier. H₂SO₄ has more O atoms (and S in a higher oxidation state) than H₂SO₃, so <strong>H₂SO₄ is stronger</strong>.</p>`
  },
  {
    id:'p66', type:'concept', tag:'Conjugate Pair Strength',
    q:'HCl is a stronger acid than acetic acid. Which statement follows from this?',
    choices:[
      'Cl⁻ is a weaker base than acetate (CH₃COO⁻)',
      'Cl⁻ is a stronger base than acetate',
      'Both conjugate bases are equally weak',
      'Acetate is not a base because it has no lone pairs'
    ], correct:0,
    solution:`<p>The stronger the acid, the weaker its conjugate base. HCl is a strong acid → Cl⁻ is essentially no base at all (extremely weak). Acetic acid is a weak acid → acetate is a measurably weak base. So <strong>Cl⁻ is a weaker base than acetate</strong>.</p>`
  },
  {
    id:'p67', type:'concept', tag:'pKa',
    q:'Acid A has pKₐ = 3.5 and Acid B has pKₐ = 7.2. Which acid is stronger?',
    choices:[
      'Acid A — lower pKₐ means larger Kₐ means stronger acid',
      'Acid B — higher pKₐ means the acid ionizes more',
      'They are equally strong because pKₐ does not measure acid strength',
      'Acid A — higher Kₐ value means the acid is weaker'
    ], correct:0,
    solution:`<p>pKₐ = −log Kₐ. A smaller pKₐ corresponds to a larger Kₐ and a <strong>stronger acid</strong>. Acid A (pKₐ = 3.5, Kₐ ≈ 3 × 10⁻⁴) is stronger than Acid B (pKₐ = 7.2, Kₐ ≈ 6 × 10⁻⁸).</p>`
  },
  {
    id:'p68', type:'concept', tag:'pKa',
    q:'A weak acid with pKₐ = 5.00 is half-ionized. What is the pH of this solution?',
    choices:['pH = 5.00','pH = 7.00','pH = 2.50','pH = 9.00'], correct:0,
    solution:`<p>When a weak acid is half-ionized, [HA] = [A⁻], so log([A⁻]/[HA]) = 0.<br>
    Henderson-Hasselbalch: pH = pKₐ + 0 = <strong>5.00</strong>.<br>
    This is the defining property: pH = pKₐ when the acid is 50% ionized.</p>`
  },
  {
    id:'p69', type:'concept', tag:'pKa + pKb',
    q:'A conjugate acid-base pair has pKₐ(acid) = 4.75. What is the pKb of the conjugate base at 25 °C?',
    choices:['9.25','4.75','14.00','−4.75'], correct:0,
    solution:`<p>pKₐ + pKb = 14.00 at 25 °C<br>
    pKb = 14.00 − 4.75 = <strong>9.25</strong></p>`
  },
  {
    id:'p70', type:'concept', tag:'Polyprotic Acids',
    q:'For a polyprotic acid H₂A, why is Kₐ₁ always much larger than Kₐ₂?',
    choices:[
      'It is harder to remove a proton from a negatively charged ion than from a neutral molecule',
      'The second proton is always bonded to oxygen, making it harder to remove',
      'The first ionization is exothermic and the second is endothermic',
      'Kₐ₁ and Kₐ₂ are always equal for symmetric molecules'
    ], correct:0,
    solution:`<p>After the first proton is removed, the species has a negative charge. Removing a <em>second</em> positive proton from an already-negative ion requires overcoming electrostatic attraction — significantly harder. This is why Kₐ₁ ≫ Kₐ₂.</p>`
  },
  {
    id:'p71', type:'concept', tag:'Polyprotic Acids',
    q:'For H₃PO₄, which ionization step dominates the pH of a dilute solution?',
    choices:[
      'The first ionization (Kₐ₁) because Kₐ₁ ≫ Kₐ₂ ≫ Kₐ₃',
      'The third ionization (Kₐ₃) because it produces the most acidic product',
      'All three contribute equally to the final pH',
      'The second ionization because the monohydrogen phosphate is most stable'
    ], correct:0,
    solution:`<p>For H₃PO₄: Kₐ₁ = 7.5 × 10⁻³, Kₐ₂ = 6.2 × 10⁻⁸, Kₐ₃ = 4.8 × 10⁻¹³.<br>
    Kₐ₁ is about 10⁵ times larger than Kₐ₂, so the <strong>first ionization dominates</strong> the equilibrium and determines the pH.</p>`
  },
  {
    id:'p72', type:'concept', tag:'Titration',
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
    id:'p73', type:'concept', tag:'Titration',
    q:'Why does the pH at the equivalence point of a weak acid-strong base titration exceed 7?',
    choices:[
      'The conjugate base of the weak acid reacts with water to produce OH⁻',
      'Excess NaOH remains at the equivalence point',
      'Strong bases always force pH above 7 regardless of the acid',
      'The solution is neutral because all the acid has been consumed'
    ], correct:0,
    solution:`<p>At the equivalence point, all weak acid has been converted to its conjugate base (A⁻). That conjugate base is a measurable base — it reacts with water: A⁻ + H₂O ⇌ HA + OH⁻. The production of OH⁻ pushes pH above 7.</p>`
  },
  {
    id:'p74', type:'concept', tag:'Titration',
    q:'An indicator is a weak acid (HIn) that changes color when it converts to its conjugate base (In⁻). What condition determines which color is observed?',
    choices:[
      'Whether [HIn] or [In⁻] is greater in solution, which depends on solution pH vs. pKₐ(HIn)',
      'The temperature of the solution',
      'Whether the solution contains a strong or weak acid',
      'The concentration of the titrant'
    ], correct:0,
    solution:`<p>HIn has one color; In⁻ has another. When pH &lt; pKₐ(HIn), [HIn] dominates → one color. When pH &gt; pKₐ(HIn), [In⁻] dominates → the other color. The transition (color change) occurs near pH = pKₐ(HIn).</p>`
  },
  {
    id:'p75', type:'concept', tag:'Titration Curve',
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
    id:'p76', type:'concept', tag:'Brønsted-Lowry',
    q:'Which of the following best defines a Brønsted-Lowry base?',
    choices:[
      'A species that accepts a proton (H⁺)',
      'A species that donates an electron pair',
      'A species that produces OH⁻ in water',
      'A species with a positive charge'
    ], correct:0,
    solution:`<p>The Brønsted-Lowry definition focuses on proton transfer. A Brønsted-Lowry base is any species that <strong>accepts a proton</strong>. This is broader than the Arrhenius definition (which requires OH⁻ production) — it includes species like NH₃, CO₃²⁻, and H₂O.</p>`
  },
  {
    id:'p77', type:'concept', tag:'Autoionization',
    q:'Water is described as amphiprotic. In the autoionization of water, which roles does water play?',
    choices:[
      'One water molecule acts as an acid (proton donor) and another acts as a base (proton acceptor)',
      'Both water molecules act as acids',
      'Water only acts as a base in autoionization',
      'Water acts as neither acid nor base — it simply splits apart spontaneously'
    ], correct:0,
    solution:`<p>2H₂O ⇌ H₃O⁺ + OH⁻<br>
    One H₂O donates H⁺ (acts as acid), the other accepts H⁺ (acts as base). This is why water is the classic example of an amphiprotic substance.</p>`
  },
  {
    id:'p78', type:'concept', tag:'Strong vs Weak',
    q:'A 0.10 M solution of acid HA has a pH of 2.35. What can you conclude?',
    choices:[
      'HA is a weak acid because [H₃O⁺] is much less than 0.10 M',
      'HA is a strong acid because its pH is below 7',
      'HA is a strong acid because [H₃O⁺] = 0.10 M exactly',
      'HA strength cannot be determined from pH alone'
    ], correct:0,
    solution:`<p>If HA were a strong acid, [H₃O⁺] = 0.10 M → pH = 1.00. The actual pH is 2.35, so [H₃O⁺] = 10⁻²·³⁵ = 4.5 × 10⁻³ M, which is much less than 0.10 M. This means only partial ionization occurred — <strong>HA is a weak acid</strong>.</p>`
  },
  {
    id:'p79', type:'concept', tag:'Acid Strength Trends',
    q:'Which correctly orders the oxyacids of chlorine from weakest to strongest acid?',
    choices:[
      'HOCl < HOClO < HOClO₂ < HOClO₃ (HClO < HClO₂ < HClO₃ < HClO₄)',
      'HOClO₃ < HOClO₂ < HOClO < HClO (HClO₄ < HClO₃ < HClO₂ < HClO)',
      'All chlorine oxyacids are equally strong',
      'HOCl is the strongest because it has the fewest oxygen atoms'
    ], correct:0,
    solution:`<p>More oxygen atoms on the central atom withdraw more electron density from the O–H bond, making H⁺ easier to release. Acid strength increases with more oxygens: <strong>HClO &lt; HClO₂ &lt; HClO₃ &lt; HClO₄</strong>.</p>`
  },
  {
    id:'p80', type:'concept', tag:'Kw',
    q:'At a temperature higher than 25 °C, Kw > 1.0 × 10⁻¹⁴. What does this tell you about the autoionization of water?',
    choices:[
      'The autoionization is endothermic — higher temperature shifts equilibrium toward products',
      'The autoionization is exothermic — higher temperature produces fewer ions',
      'Temperature has no effect on Kw because water is a pure liquid',
      'A higher Kw means pure water becomes acidic at higher temperatures'
    ], correct:0,
    solution:`<p>If increasing temperature increases Kw, more product is formed — Le Chatelier's principle tells us the forward reaction is endothermic. Note: even at higher temperatures, pure water is still <em>neutral</em> because [H₃O⁺] still equals [OH⁻] — it's just that both concentrations are higher.</p>`
  },
  {
    id:'p81', type:'concept', tag:'Titration Curve',
    q:'When selecting an indicator for a titration, the most important criterion is:',
    choices:[
      'The indicator\'s pKₐ should fall within the steep region of the titration curve near the equivalence point',
      'The indicator must change color at exactly pH = 7',
      'The indicator should be a strong acid so it reacts completely',
      'The indicator color change should occur before the equivalence point is reached'
    ], correct:0,
    solution:`<p>An indicator works by changing color near its own pKₐ. If the indicator's pKₐ is within the steep pH jump at the equivalence point, even a single drop of titrant will cause the complete color change — giving an accurate endpoint. Phenolphthalein (pKₐ ≈ 9) works for weak acid / strong base titrations; methyl orange (pKₐ ≈ 3.5) works for strong acid / weak base titrations.</p>`
  }

]; // end ALL_PROBLEMS
