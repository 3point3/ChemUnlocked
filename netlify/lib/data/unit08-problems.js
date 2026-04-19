/* ── Unit 08 Problem Bank — Stoichiometry
   81 problems total: 40 calc | 25 concept | 16 multi
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  /* ════════════ CALCULATION — Reaction Stoichiometry (g→g / g→mol / mol→g / mol→mol) ════════════ */

  {id:'p01',type:'calc',tag:'g → g',
   q:'The combustion of methane: CH₄ + 2 O₂ → CO₂ + 2 H₂O. How many grams of CO₂ are produced from 32.0 g of CH₄? (Molar masses: CH₄ = 16.04 g/mol, CO₂ = 44.01 g/mol)',
   answer:87.8, tolerance:0.6, unit:'g CO₂',
   solution:'<p>32.0 g CH₄ × (1 mol CH₄ / 16.04 g) × (1 mol CO₂ / 1 mol CH₄) × (44.01 g CO₂ / 1 mol CO₂) = <strong>87.8 g CO₂</strong>. The 1:1 mole ratio from the balanced equation is the key middle step.</p>'},

  {id:'p02',type:'calc',tag:'g → g',
   q:'In the Haber process: N₂ + 3 H₂ → 2 NH₃. How many grams of NH₃ are produced from 14.0 g of N₂? (MM: N₂ = 28.01 g/mol, NH₃ = 17.03 g/mol)',
   answer:17.0, tolerance:0.3, unit:'g NH₃',
   solution:'<p>14.0 g N₂ × (1 mol / 28.01 g) = 0.4998 mol N₂. × (2 mol NH₃ / 1 mol N₂) = 0.9996 mol NH₃. × (17.03 g / mol) = <strong>17.0 g NH₃</strong>.</p>'},

  {id:'p03',type:'calc',tag:'g → g',
   q:'Hydrogen burns: 2 H₂ + O₂ → 2 H₂O. How many grams of water are produced from 4.00 g of H₂? (MM: H₂ = 2.016 g/mol, H₂O = 18.02 g/mol)',
   answer:35.7, tolerance:0.5, unit:'g H₂O',
   solution:'<p>4.00 g H₂ × (1 mol / 2.016 g) × (2 mol H₂O / 2 mol H₂) × (18.02 g / mol) = <strong>35.7 g H₂O</strong>. The 2:2 mole ratio simplifies to 1:1.</p>'},

  {id:'p04',type:'calc',tag:'g → g',
   q:'Iron ore reduction: Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂. How many grams of Fe are produced from 80.0 g of Fe₂O₃? (MM: Fe₂O₃ = 159.7 g/mol, Fe = 55.85 g/mol)',
   answer:55.9, tolerance:0.5, unit:'g Fe',
   solution:'<p>80.0 g Fe₂O₃ × (1 mol / 159.7 g) × (2 mol Fe / 1 mol Fe₂O₃) × (55.85 g / mol) = <strong>55.9 g Fe</strong>.</p>'},

  {id:'p05',type:'calc',tag:'g → g',
   q:'Sulfur dioxide oxidation: 2 SO₂ + O₂ → 2 SO₃. How many grams of SO₃ are produced from 64.0 g of SO₂? (MM: SO₂ = 64.06 g/mol, SO₃ = 80.06 g/mol)',
   answer:80.0, tolerance:0.5, unit:'g SO₃',
   solution:'<p>64.0 g SO₂ × (1 mol / 64.06 g) × (2 mol SO₃ / 2 mol SO₂) × (80.06 g / mol) = <strong>80.0 g SO₃</strong>. The 2:2 ratio is 1:1.</p>'},

  {id:'p06',type:'calc',tag:'g → g',
   q:'Limestone decomposition: CaCO₃ → CaO + CO₂. How many grams of CO₂ are produced from 50.0 g of CaCO₃? (MM: CaCO₃ = 100.1 g/mol, CO₂ = 44.01 g/mol)',
   answer:22.0, tolerance:0.3, unit:'g CO₂',
   solution:'<p>50.0 g CaCO₃ × (1 mol / 100.1 g) × (1 mol CO₂ / 1 mol CaCO₃) × (44.01 g / mol) = <strong>22.0 g CO₂</strong>.</p>'},

  {id:'p07',type:'calc',tag:'g → g',
   q:'Magnesium burns: 2 Mg + O₂ → 2 MgO. How many grams of MgO are produced from 12.0 g of Mg? (MM: Mg = 24.31 g/mol, MgO = 40.30 g/mol)',
   answer:19.9, tolerance:0.3, unit:'g MgO',
   solution:'<p>12.0 g Mg × (1 mol / 24.31 g) × (2 mol MgO / 2 mol Mg) × (40.30 g / mol) = <strong>19.9 g MgO</strong>.</p>'},

  {id:'p08',type:'calc',tag:'g → g',
   q:'Aluminum reacts with oxygen: 4 Al + 3 O₂ → 2 Al₂O₃. How many grams of Al₂O₃ are produced from 27.0 g of Al? (MM: Al = 26.98 g/mol, Al₂O₃ = 101.96 g/mol)',
   answer:51.0, tolerance:0.5, unit:'g Al₂O₃',
   solution:'<p>27.0 g Al × (1 mol / 26.98 g) × (2 mol Al₂O₃ / 4 mol Al) × (101.96 g / mol) = <strong>51.0 g Al₂O₃</strong>. Note: 2/4 simplifies to 1/2.</p>'},

  {id:'p09',type:'calc',tag:'g → g',
   q:'Potassium chlorate decomposes: 2 KClO₃ → 2 KCl + 3 O₂. How many grams of O₂ are produced from 24.5 g of KClO₃? (MM: KClO₃ = 122.5 g/mol, O₂ = 32.00 g/mol)',
   answer:9.60, tolerance:0.25, unit:'g O₂',
   solution:'<p>24.5 g KClO₃ × (1 mol / 122.5 g) × (3 mol O₂ / 2 mol KClO₃) × (32.00 g / mol) = <strong>9.60 g O₂</strong>.</p>'},

  {id:'p10',type:'calc',tag:'g → g',
   q:'Glucose combustion: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O. How many grams of CO₂ are produced from 36.0 g of glucose? (MM: C₆H₁₂O₆ = 180.2 g/mol, CO₂ = 44.01 g/mol)',
   answer:52.8, tolerance:0.5, unit:'g CO₂',
   solution:'<p>36.0 g glucose × (1 mol / 180.2 g) × (6 mol CO₂ / 1 mol glucose) × (44.01 g / mol) = <strong>52.8 g CO₂</strong>.</p>'},

  {id:'p11',type:'calc',tag:'g → g',
   q:'Acid-base neutralization: HCl + NaOH → NaCl + H₂O. How many grams of NaCl are produced from 18.25 g of HCl? (MM: HCl = 36.46 g/mol, NaCl = 58.44 g/mol)',
   answer:29.3, tolerance:0.4, unit:'g NaCl',
   solution:'<p>18.25 g HCl × (1 mol / 36.46 g) × (1 mol NaCl / 1 mol HCl) × (58.44 g / mol) = <strong>29.3 g NaCl</strong>.</p>'},

  {id:'p12',type:'calc',tag:'g → g',
   q:'Silver chloride precipitation: AgNO₃ + HCl → AgCl + HNO₃. How many grams of AgCl precipitate form from 17.0 g of HCl? (MM: HCl = 36.46 g/mol, AgCl = 143.3 g/mol)',
   answer:66.8, tolerance:0.6, unit:'g AgCl',
   solution:'<p>17.0 g HCl × (1 mol / 36.46 g) × (1 mol AgCl / 1 mol HCl) × (143.3 g / mol) = <strong>66.8 g AgCl</strong>.</p>'},

  {id:'p13',type:'calc',tag:'g → g',
   q:'Limestone decomposition: CaCO₃ → CaO + CO₂. How many grams of CaO are produced from 150.0 g of CaCO₃? (MM: CaCO₃ = 100.1 g/mol, CaO = 40.08 g/mol)',
   answer:60.1, tolerance:0.5, unit:'g CaO',
   solution:'<p>150.0 g CaCO₃ × (1 mol / 100.1 g) × (1 mol CaO / 1 mol CaCO₃) × (40.08 g / mol) = <strong>60.1 g CaO</strong>.</p>'},

  {id:'p14',type:'calc',tag:'g → g',
   q:'Potassium chlorate decomposition: 2 KClO₃ → 2 KCl + 3 O₂. How many grams of KCl are produced from 49.0 g of KClO₃? (MM: KClO₃ = 122.5 g/mol, KCl = 74.55 g/mol)',
   answer:29.8, tolerance:0.4, unit:'g KCl',
   solution:'<p>49.0 g KClO₃ × (1 mol / 122.5 g) × (2 mol KCl / 2 mol KClO₃) × (74.55 g / mol) = <strong>29.8 g KCl</strong>. The 2:2 ratio = 1:1.</p>'},

  {id:'p15',type:'calc',tag:'g → g',
   q:'Sodium burns in water: 2 Na + 2 H₂O → 2 NaOH + H₂. How many grams of NaOH are produced from 23.0 g of Na? (MM: Na = 22.99 g/mol, NaOH = 40.00 g/mol)',
   answer:40.0, tolerance:0.5, unit:'g NaOH',
   solution:'<p>23.0 g Na × (1 mol / 22.99 g) × (2 mol NaOH / 2 mol Na) × (40.00 g / mol) = <strong>40.0 g NaOH</strong>.</p>'},

  {id:'p16',type:'calc',tag:'g → g',
   q:'Methane combustion: CH₄ + 2 O₂ → CO₂ + 2 H₂O. How many grams of water are produced from 8.00 g of CH₄? (MM: CH₄ = 16.04 g/mol, H₂O = 18.02 g/mol)',
   answer:17.97, tolerance:0.4, unit:'g H₂O',
   solution:'<p>8.00 g CH₄ × (1 mol / 16.04 g) × (2 mol H₂O / 1 mol CH₄) × (18.02 g / mol) = <strong>18.0 g H₂O</strong>.</p>'},

  {id:'p17',type:'calc',tag:'mol → mol',
   q:'2 H₂ + O₂ → 2 H₂O. How many moles of H₂O are produced from 2.00 mol of H₂?',
   answer:2.00, tolerance:0.05, unit:'mol H₂O',
   solution:'<p>2.00 mol H₂ × (2 mol H₂O / 2 mol H₂) = <strong>2.00 mol H₂O</strong>. The 2:2 mole ratio equals 1:1.</p>'},

  {id:'p18',type:'calc',tag:'mol → mol',
   q:'N₂ + 3 H₂ → 2 NH₃. How many moles of NH₃ are produced from 0.750 mol of H₂?',
   answer:0.500, tolerance:0.02, unit:'mol NH₃',
   solution:'<p>0.750 mol H₂ × (2 mol NH₃ / 3 mol H₂) = <strong>0.500 mol NH₃</strong>.</p>'},

  {id:'p19',type:'calc',tag:'mol → mol',
   q:'2 SO₂ + O₂ → 2 SO₃. How many moles of SO₃ are produced from 3.00 mol of SO₂?',
   answer:3.00, tolerance:0.05, unit:'mol SO₃',
   solution:'<p>3.00 mol SO₂ × (2 mol SO₃ / 2 mol SO₂) = <strong>3.00 mol SO₃</strong>. The 2:2 ratio = 1:1.</p>'},

  {id:'p20',type:'calc',tag:'mol → mol',
   q:'4 Fe + 3 O₂ → 2 Fe₂O₃. How many moles of Fe₂O₃ are produced from 1.20 mol of Fe?',
   answer:0.600, tolerance:0.02, unit:'mol Fe₂O₃',
   solution:'<p>1.20 mol Fe × (2 mol Fe₂O₃ / 4 mol Fe) = <strong>0.600 mol Fe₂O₃</strong>. Note: 2/4 = 1/2.</p>'},

  {id:'p21',type:'calc',tag:'mol → mol',
   q:'2 H₂O → 2 H₂ + O₂ (electrolysis). How many moles of O₂ are produced from 5.00 mol of H₂O?',
   answer:2.50, tolerance:0.05, unit:'mol O₂',
   solution:'<p>5.00 mol H₂O × (1 mol O₂ / 2 mol H₂O) = <strong>2.50 mol O₂</strong>.</p>'},

  {id:'p22',type:'calc',tag:'mol → g',
   q:'N₂ + 3 H₂ → 2 NH₃. How many grams of NH₃ are produced from 0.500 mol N₂? (MM NH₃ = 17.03 g/mol)',
   answer:17.03, tolerance:0.3, unit:'g NH₃',
   solution:'<p>0.500 mol N₂ × (2 mol NH₃ / 1 mol N₂) × (17.03 g / mol) = <strong>17.0 g NH₃</strong>.</p>'},

  {id:'p23',type:'calc',tag:'mol → g',
   q:'CaCO₃ → CaO + CO₂. How many grams of CaO are produced from 0.250 mol of CaCO₃? (MM CaO = 40.08 g/mol)',
   answer:10.02, tolerance:0.2, unit:'g CaO',
   solution:'<p>0.250 mol CaCO₃ × (1 mol CaO / 1 mol CaCO₃) × (40.08 g / mol) = <strong>10.0 g CaO</strong>.</p>'},

  {id:'p24',type:'calc',tag:'mol → g',
   q:'2 Al + 3 Cl₂ → 2 AlCl₃. How many grams of AlCl₃ are produced from 0.600 mol of Al? (MM AlCl₃ = 133.3 g/mol)',
   answer:80.0, tolerance:0.6, unit:'g AlCl₃',
   solution:'<p>0.600 mol Al × (2 mol AlCl₃ / 2 mol Al) × (133.3 g / mol) = <strong>80.0 g AlCl₃</strong>.</p>'},

  /* ════════════ CALCULATION — Percent Yield ════════════ */

  {id:'p25',type:'calc',tag:'% Yield',
   q:'A reaction has a theoretical yield of 29.2 g of NaCl. The student collects 24.8 g. What is the percent yield?',
   answer:84.9, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (24.8 / 29.2) × 100 = <strong>84.9%</strong>.</p>'},

  {id:'p26',type:'calc',tag:'% Yield',
   q:'A student synthesizes aspirin. The theoretical yield is 2.50 g; they collect 2.08 g. What is the percent yield?',
   answer:83.2, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (2.08 / 2.50) × 100 = <strong>83.2%</strong>.</p>'},

  {id:'p27',type:'calc',tag:'% Yield',
   q:'The theoretical yield of Fe from a reduction reaction is 55.8 g. The actual yield is 47.4 g. What is the percent yield?',
   answer:84.9, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (47.4 / 55.8) × 100 = <strong>84.9%</strong>.</p>'},

  {id:'p28',type:'calc',tag:'% Yield',
   q:'In an ammonia synthesis, the theoretical yield of NH₃ is 34.0 g. The actual yield is 28.9 g. What is the percent yield?',
   answer:85.0, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (28.9 / 34.0) × 100 = <strong>85.0%</strong>.</p>'},

  {id:'p29',type:'calc',tag:'% Yield',
   q:'The theoretical yield of CO₂ in a combustion reaction is 44.0 g. Only 38.5 g are collected. What is the percent yield?',
   answer:87.5, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (38.5 / 44.0) × 100 = <strong>87.5%</strong>.</p>'},

  {id:'p30',type:'calc',tag:'% Yield',
   q:'Iron rusting: 4 Fe + 3 O₂ → 2 Fe₂O₃. The theoretical yield of Fe₂O₃ is 8.37 g. The actual yield is 6.70 g. What is the percent yield?',
   answer:80.0, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (6.70 / 8.37) × 100 = <strong>80.0%</strong>.</p>'},

  {id:'p31',type:'calc',tag:'% Yield',
   q:'A student finds the actual yield of MgO is 16.5 g. The theoretical yield was 19.9 g. What is the percent yield?',
   answer:82.9, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (16.5 / 19.9) × 100 = <strong>82.9%</strong>.</p>'},

  {id:'p32',type:'calc',tag:'% Yield',
   q:'The theoretical yield of AgCl precipitate is 143.5 g. The chemist collects 121.0 g. What is the percent yield?',
   answer:84.3, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (121.0 / 143.5) × 100 = <strong>84.3%</strong>.</p>'},

  {id:'p33',type:'calc',tag:'% Yield',
   q:'A student\'s actual yield is 18.0 g. The percent yield was 75.0%. What was the theoretical yield?',
   answer:24.0, tolerance:0.3, unit:'g',
   solution:'<p>Theoretical = Actual / (% yield / 100) = 18.0 / 0.750 = <strong>24.0 g</strong>.</p>'},

  {id:'p34',type:'calc',tag:'% Yield',
   q:'The percent yield is 92.0% and the theoretical yield is 50.0 g. What is the actual yield?',
   answer:46.0, tolerance:0.4, unit:'g',
   solution:'<p>Actual = % yield × Theoretical / 100 = 0.920 × 50.0 = <strong>46.0 g</strong>.</p>'},

  {id:'p35',type:'calc',tag:'% Yield',
   q:'A student has an actual yield of 12.6 g and a percent yield of 84.0%. What was the theoretical yield?',
   answer:15.0, tolerance:0.3, unit:'g',
   solution:'<p>Theoretical = 12.6 / 0.840 = <strong>15.0 g</strong>.</p>'},

  /* ════════════ CALCULATION — Limiting Reactant ════════════ */

  {id:'p36',type:'calc',tag:'Limiting Reactant',
   q:'2 H₂ + O₂ → 2 H₂O. You have 4.00 g of H₂ and 32.0 g of O₂. Which is the limiting reactant? How many grams of H₂O form? (MM: H₂ = 2.016, O₂ = 32.00, H₂O = 18.02 g/mol)',
   answer:35.7, tolerance:0.5, unit:'g H₂O',
   solution:'<p>H₂: 4.00/2.016 = 1.984 mol → could make 1.984 mol H₂O → 35.7 g. O₂: 32.0/32.00 = 1.000 mol → could make 2.000 mol H₂O → 36.0 g. <strong>H₂ makes less → H₂ is the limiting reactant → 35.7 g H₂O</strong>.</p>'},

  {id:'p37',type:'calc',tag:'Limiting Reactant',
   q:'N₂ + 3 H₂ → 2 NH₃. You have 14.0 g of N₂ and 6.00 g of H₂. How many grams of NH₃ are produced? (MM: N₂ = 28.01, H₂ = 2.016, NH₃ = 17.03 g/mol)',
   answer:17.0, tolerance:0.4, unit:'g NH₃',
   solution:'<p>N₂: 14.0/28.01 = 0.4998 mol → could make 0.9996 mol NH₃ → 17.0 g. H₂: 6.00/2.016 = 2.976 mol → could make 1.984 mol NH₃ → 33.8 g. <strong>N₂ makes less → N₂ is the limiting reactant → 17.0 g NH₃</strong>.</p>'},

  {id:'p38',type:'calc',tag:'Limiting Reactant',
   q:'Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂. You have 32.0 g of Fe₂O₃ and 21.0 g of CO. How many grams of Fe are produced? (MM: Fe₂O₃ = 159.7, CO = 28.01, Fe = 55.85 g/mol)',
   answer:22.4, tolerance:0.4, unit:'g Fe',
   solution:'<p>Fe₂O₃: 32.0/159.7 = 0.2004 mol → could make 22.4 g Fe. CO: 21.0/28.01 = 0.7497 mol → could make 27.9 g Fe. <strong>Fe₂O₃ makes less → Fe₂O₃ is the limiting reactant → 22.4 g Fe</strong>.</p>'},

  {id:'p39',type:'calc',tag:'Limiting Reactant',
   q:'2 Mg + O₂ → 2 MgO. You have 12.0 g of Mg and 16.0 g of O₂. How many grams of MgO form? (MM: Mg = 24.31, O₂ = 32.00, MgO = 40.30 g/mol)',
   answer:19.9, tolerance:0.4, unit:'g MgO',
   solution:'<p>Mg: 12.0/24.31 = 0.4937 mol → could make 19.9 g MgO. O₂: 16.0/32.00 = 0.5000 mol → could make 40.3 g MgO. <strong>Mg makes less → Mg is the limiting reactant → 19.9 g MgO</strong>.</p>'},

  {id:'p40',type:'calc',tag:'Limiting Reactant',
   q:'4 Fe + 3 O₂ → 2 Fe₂O₃. You have 11.2 g of Fe and 8.00 g of O₂. How many grams of Fe₂O₃ form? (MM: Fe = 55.85, O₂ = 32.00, Fe₂O₃ = 159.7 g/mol)',
   answer:16.0, tolerance:0.4, unit:'g Fe₂O₃',
   solution:'<p>Fe: 11.2/55.85 = 0.2006 mol → could make 0.1003 mol Fe₂O₃ → 16.0 g. O₂: 8.00/32.00 = 0.2500 mol → could make 0.1667 mol Fe₂O₃ → 26.6 g. <strong>Fe makes less → Fe is the limiting reactant → 16.0 g Fe₂O₃</strong>.</p>'},

  /* ════════════ CONCEPT PROBLEMS ════════════ */

  {id:'p41',type:'concept',tag:'Mole Ratio',
   q:'In the equation 2 H₂ + O₂ → 2 H₂O, what is the mole ratio of H₂ to H₂O?',
   choices:['1:1 (H₂ to H₂O)','2:1 (H₂ to H₂O)','1:2 (H₂ to H₂O)','2:3 (H₂ to H₂O)'],
   correct:0,
   solution:'<p>The balanced equation has 2 mol H₂ producing 2 mol H₂O. The ratio 2:2 simplifies to <strong>1:1</strong>. Choice A is correct.</p>'},

  {id:'p42',type:'concept',tag:'Mole Ratio',
   q:'In the equation N₂ + 3 H₂ → 2 NH₃, how many moles of H₂ are needed for every mole of N₂?',
   choices:['1 mol H₂','2 mol H₂','3 mol H₂','4 mol H₂'],
   correct:2,
   solution:'<p>The coefficient of H₂ is 3 and the coefficient of N₂ is 1. So <strong>3 moles of H₂</strong> are needed per mole of N₂.</p>'},

  {id:'p43',type:'concept',tag:'Mole Ratio',
   q:'For the equation 4 Al + 3 O₂ → 2 Al₂O₃, the mole ratio of Al₂O₃ to O₂ is:',
   choices:['4:3','2:3','3:2','1:1'],
   correct:1,
   solution:'<p>Al₂O₃ has a coefficient of 2; O₂ has a coefficient of 3. The ratio Al₂O₃:O₂ = <strong>2:3</strong>.</p>'},

  {id:'p44',type:'concept',tag:'Roadmap',
   q:'In a stoichiometry problem, you are given grams of a reactant and asked for grams of a product. What is the CORRECT order of conversions?',
   choices:['Grams → Moles → Moles → Grams','Grams → Grams → Moles → Moles','Moles → Grams → Moles → Grams','Grams → Moles → Grams → Moles'],
   correct:0,
   solution:'<p>The stoichiometry road map is always: <strong>Grams → Moles → (mole ratio) → Moles → Grams</strong>. You must convert to moles first so you can use the mole ratio from the balanced equation.</p>'},

  {id:'p45',type:'concept',tag:'Roadmap',
   q:'Why must you convert grams to moles BEFORE using the mole ratio in a stoichiometry problem?',
   choices:['Because molar mass is always 1','Because the coefficients in a balanced equation represent moles, not grams','Because grams and moles are the same unit','Because you always need to find volume first'],
   correct:1,
   solution:'<p>Coefficients in a balanced equation are mole ratios. They tell you how many <em>moles</em> react — not grams. You must convert to moles first to use those ratios correctly.</p>'},

  {id:'p46',type:'concept',tag:'Limiting Reactant',
   q:'In a chemical reaction, the limiting reactant is:',
   choices:['The reactant with the smallest mass in grams','The reactant that runs out first and stops the reaction','The reactant with the smallest molar mass','The reactant listed first in the equation'],
   correct:1,
   solution:'<p>The limiting reactant is the one that is completely used up first, stopping the reaction. Mass alone does not determine which reactant is limiting — you must compare moles relative to the equation.</p>'},

  {id:'p47',type:'concept',tag:'Limiting Reactant',
   q:'After a reaction with a limiting and excess reactant, which statement is true?',
   choices:['Both reactants are completely used up','The limiting reactant has some left over','The excess reactant has some left over','The product yield equals 100%'],
   correct:2,
   solution:'<p>When the limiting reactant runs out, the reaction stops. The <strong>excess reactant</strong> is still partially present — it was not all consumed.</p>'},

  {id:'p48',type:'concept',tag:'Limiting Reactant',
   q:'You mix 2 mol of H₂ with 2 mol of O₂ for the reaction 2 H₂ + O₂ → 2 H₂O. Which is the limiting reactant?',
   choices:['H₂, because it needs twice as much O₂','O₂, because more H₂ is needed per O₂','Neither — both will be used up completely','H₂, because it has a smaller molar mass'],
   correct:0,
   solution:'<p>For 2 mol H₂, you need only 1 mol O₂ (ratio 2:1). But you have 2 mol O₂ — excess! <strong>H₂ is the limiting reactant</strong> because it runs out first relative to its required ratio.</p>'},

  {id:'p49',type:'concept',tag:'Theoretical Yield',
   q:'The theoretical yield of a reaction is:',
   choices:['The amount of product you actually collect in the lab','The maximum amount of product possible based on the limiting reactant','The amount of product from the excess reactant','Always less than the actual yield'],
   correct:1,
   solution:'<p>Theoretical yield is calculated from stoichiometry using the limiting reactant — it represents the maximum possible amount of product if no product is lost. Actual yield is almost always less than theoretical yield.</p>'},

  {id:'p50',type:'concept',tag:'Percent Yield',
   q:'A percent yield of 100% means:',
   choices:['The reaction was very fast','All of the product was collected with no losses','The actual yield was doubled','The limiting reactant was not used up'],
   correct:1,
   solution:'<p>100% yield means actual yield = theoretical yield — every bit of product was recovered. In real labs this is extremely rare because of spills, side reactions, and incomplete reactions.</p>'},

  {id:'p51',type:'concept',tag:'Percent Yield',
   q:'Which percent yield indicates the most efficient reaction?',
   choices:['55%','72%','89%','43%'],
   correct:2,
   solution:'<p><strong>89%</strong> is closest to 100% and represents the most product collected relative to what was theoretically possible.</p>'},

  {id:'p52',type:'concept',tag:'Percent Yield',
   q:'Why is the actual yield in a lab usually less than the theoretical yield?',
   choices:['The balanced equation is wrong','Product is lost due to spills, side reactions, or incomplete reaction','The molar mass was calculated incorrectly','The limiting reactant was added in excess'],
   correct:1,
   solution:'<p>Real lab reactions are never perfect — product can be lost to spills, evaporation, side reactions, or the reaction may not go completely to completion. All of these reduce actual yield below theoretical yield.</p>'},

  {id:'p53',type:'concept',tag:'Stoichiometric Factor',
   q:'For the reaction 2 SO₂ + O₂ → 2 SO₃, which fraction correctly represents the stoichiometric factor to convert mol SO₂ to mol SO₃?',
   choices:['(2 mol SO₂) / (2 mol SO₃)','(2 mol SO₃) / (2 mol SO₂)','(1 mol O₂) / (2 mol SO₂)','(2 mol SO₃) / (1 mol O₂)'],
   correct:1,
   solution:'<p>To convert mol SO₂ → mol SO₃, the stoichiometric factor is <strong>(2 mol SO₃) / (2 mol SO₂)</strong>, which simplifies to 1:1. You put the substance you WANT on top.</p>'},

  {id:'p54',type:'concept',tag:'Stoichiometric Factor',
   q:'Which conversion factor correctly converts moles of H₂ to moles of H₂O in the reaction 2 H₂ + O₂ → 2 H₂O?',
   choices:['(1 mol H₂O) / (2 mol H₂)','(2 mol H₂O) / (2 mol H₂)','(2 mol H₂) / (2 mol H₂O)','(1 mol O₂) / (2 mol H₂)'],
   correct:1,
   solution:'<p>The balanced equation shows 2 mol H₂ → 2 mol H₂O. The factor is <strong>(2 mol H₂O) / (2 mol H₂)</strong>, which simplifies to 1 mol H₂O per mol H₂.</p>'},

  {id:'p55',type:'concept',tag:'Balanced Equations',
   q:'Which of the following equations is correctly balanced?',
   choices:['H₂ + O₂ → H₂O','2 H₂ + O₂ → 2 H₂O','H₂ + O₂ → 2 H₂O','2 H₂ + 2 O₂ → 2 H₂O'],
   correct:1,
   solution:'<p><strong>2 H₂ + O₂ → 2 H₂O</strong> is balanced: 4 H and 2 O on each side. Option A has 2 O on left but 1 O on right. Option C has unbalanced hydrogen. Option D has 4 O left but 2 O right.</p>'},

  {id:'p56',type:'concept',tag:'Balanced Equations',
   q:'Why must a chemical equation be balanced before you do stoichiometry calculations?',
   choices:['So the equation looks neat','So the coefficients correctly represent the mole ratios','So you can find molar mass','So you know the color of the product'],
   correct:1,
   solution:'<p>Stoichiometry uses the coefficients as mole ratios. If the equation is not balanced, the ratios are wrong and all calculations will give incorrect answers. The balanced equation is the foundation of every stoichiometry calculation.</p>'},

  {id:'p57',type:'concept',tag:'Mole Ratio',
   q:'In the equation CH₄ + 2 O₂ → CO₂ + 2 H₂O, how many moles of O₂ are needed to react with 3 mol of CH₄?',
   choices:['2 mol','3 mol','4 mol','6 mol'],
   correct:3,
   solution:'<p>Mole ratio: 2 mol O₂ per 1 mol CH₄. For 3 mol CH₄: 3 × 2 = <strong>6 mol O₂</strong>.</p>'},

  {id:'p58',type:'concept',tag:'Limiting Reactant',
   q:'A student has 1 mol N₂ and 1 mol H₂ for N₂ + 3 H₂ → 2 NH₃. Which reactant is limiting?',
   choices:['N₂, because it reacts in a 1:3 ratio and H₂ is insufficient','H₂, because there is only 1 mol and 3 are needed per mol N₂','Both are limiting equally','Neither — both are in excess'],
   correct:1,
   solution:'<p>1 mol N₂ requires 3 mol H₂. But there is only 1 mol H₂ available. <strong>H₂ is the limiting reactant</strong> because it runs out first.</p>'},

  {id:'p59',type:'concept',tag:'Excess Reactant',
   q:'After the reaction 2 H₂ + O₂ → 2 H₂O using 4 g H₂ and 32 g O₂, which reactant has some left over?',
   choices:['H₂','O₂','H₂O','Neither — both are used up'],
   correct:1,
   solution:'<p>4 g H₂ = 1.98 mol. 32 g O₂ = 1.00 mol. The 2:1 ratio means 1.98 mol H₂ needs only 0.99 mol O₂. You have 1.00 mol O₂, so there is a tiny excess. <strong>O₂ is the excess reactant</strong>.</p>'},

  {id:'p60',type:'concept',tag:'Percent Yield',
   q:'If a student calculates a percent yield greater than 100%, what most likely happened?',
   choices:['The reaction was very efficient','The student made an error in measurement or calculation','The theoretical yield formula was used correctly','The actual yield was measured perfectly'],
   correct:1,
   solution:'<p>Percent yield cannot exceed 100% — you cannot make more product than the stoichiometry predicts. A result over 100% means there was a <strong>measurement or calculation error</strong>, such as using the wrong theoretical yield or not drying a precipitate.</p>'},

  {id:'p61',type:'concept',tag:'Theoretical Yield',
   q:'Theoretical yield is calculated from:',
   choices:['The excess reactant','The limiting reactant','The average of both reactants','The actual yield measured in lab'],
   correct:1,
   solution:'<p>Theoretical yield is always calculated from the <strong>limiting reactant</strong> — the one that controls how much product can form. Using the excess reactant would give an inflated, impossible number.</p>'},

  {id:'p62',type:'concept',tag:'Stoichiometry Basics',
   q:'The numbers in front of chemical formulas in a balanced equation are called:',
   choices:['Subscripts','Exponents','Coefficients','Superscripts'],
   correct:2,
   solution:'<p><strong>Coefficients</strong> are the large numbers in front of each formula (e.g., the 2 in 2H₂O). Subscripts are the small numbers inside the formula (e.g., the 2 in H₂). Coefficients tell you the mole ratio.</p>'},

  {id:'p63',type:'concept',tag:'Stoichiometry Basics',
   q:'The "stoichiometry road map" always starts with converting the given substance to what unit?',
   choices:['Liters','Grams','Moles','Atoms'],
   correct:2,
   solution:'<p>The road map always converts first to <strong>moles</strong>. Coefficients in balanced equations are mole ratios, so moles are the universal currency of stoichiometry calculations.</p>'},

  {id:'p64',type:'concept',tag:'Limiting Reactant',
   q:'To find the limiting reactant when given grams of two reactants, the CORRECT method is:',
   choices:['Compare the grams directly — smaller mass = limiting reactant','Convert both to moles, then compare each to the needed mole ratio','Compare molar masses — larger molar mass = limiting reactant','Divide grams by the coefficient for each reactant'],
   correct:1,
   solution:'<p>You must <strong>convert both to moles</strong>, then calculate how much product each could produce. The reactant that produces less product is the limiting reactant. Simply comparing grams gives the wrong answer.</p>'},

  {id:'p65',type:'concept',tag:'Percent Yield',
   q:'The percent yield formula uses actual yield divided by theoretical yield. If both are in grams, the units:',
   choices:['Stay as grams in the final answer','Cancel out, giving a dimensionless percentage','Must be converted to moles first','Give a result in g/mol'],
   correct:1,
   solution:'<p>Grams ÷ grams = dimensionless ratio. Multiplying by 100 gives a <strong>percentage with no units</strong>. Both must be in the same units for the division to be valid.</p>'},

  /* ════════════ MULTI-STEP PROBLEMS ════════════ */

  {id:'p66',type:'multi',tag:'LR + Product Mass',
   q:'2 H₂ + O₂ → 2 H₂O. You have 3.00 g of H₂ and 24.0 g of O₂. Step 1: Find the limiting reactant. Step 2: Calculate the theoretical yield of H₂O in grams. (MM: H₂ = 2.016, O₂ = 32.00, H₂O = 18.02 g/mol)',
   answer:26.8, tolerance:0.4, unit:'g H₂O',
   solution:'<p><strong>Step 1:</strong> H₂: 3.00/2.016 = 1.488 mol → could make 1.488 mol H₂O → 26.8 g. O₂: 24.0/32.00 = 0.750 mol → could make 1.500 mol H₂O → 27.0 g. H₂ makes less → <strong>H₂ is the limiting reactant</strong>.<br><strong>Step 2:</strong> Theoretical yield = <strong>26.8 g H₂O</strong>.</p>'},

  {id:'p67',type:'multi',tag:'LR + % Yield',
   q:'N₂ + 3 H₂ → 2 NH₃. You start with 10.0 g N₂ and 8.00 g H₂. The actual yield of NH₃ is 9.50 g. What is the percent yield? (MM: N₂ = 28.01, H₂ = 2.016, NH₃ = 17.03 g/mol)',
   answer:78.1, tolerance:0.8, unit:'%',
   solution:'<p><strong>Step 1 (LR):</strong> N₂: 10.0/28.01 = 0.357 mol → 0.714 mol NH₃ → 12.16 g NH₃. H₂: 8.00/2.016 = 3.968 mol → 2.645 mol NH₃ → 45.0 g NH₃. N₂ makes less → <strong>N₂ is LR, theor = 12.16 g NH₃</strong>.<br><strong>Step 2:</strong> % yield = (9.50 / 12.16) × 100 = <strong>78.1%</strong>.</p>'},

  {id:'p68',type:'multi',tag:'LR + % Yield',
   q:'4 Fe + 3 O₂ → 2 Fe₂O₃. You use 22.4 g of Fe and 12.8 g of O₂. The actual yield of Fe₂O₃ is 28.0 g. What is the percent yield? (MM: Fe = 55.85, O₂ = 32.00, Fe₂O₃ = 159.7 g/mol)',
   answer:87.4, tolerance:0.8, unit:'%',
   solution:'<p><strong>Step 1 (LR):</strong> Fe: 22.4/55.85 = 0.401 mol → 0.201 mol Fe₂O₃ → 32.1 g. O₂: 12.8/32.00 = 0.400 mol → 0.267 mol Fe₂O₃ → 42.6 g. Fe makes less → <strong>Fe is LR, theor = 32.1 g Fe₂O₃</strong>.<br><strong>Step 2:</strong> % yield = (28.0 / 32.1) × 100 = <strong>87.2%</strong>.</p>'},

  {id:'p69',type:'multi',tag:'LR + % Yield',
   q:'CaCO₃ → CaO + CO₂. You start with 75.0 g of CaCO₃. The actual yield of CaO is 25.0 g. What is the percent yield? (MM: CaCO₃ = 100.1, CaO = 40.08 g/mol)',
   answer:83.2, tolerance:0.8, unit:'%',
   solution:'<p><strong>Step 1 (theor):</strong> 75.0 g CaCO₃ × (1/100.1) × (1 mol CaO/1 mol CaCO₃) × 40.08 = 30.0 g CaO.<br><strong>Step 2:</strong> % yield = (25.0 / 30.0) × 100 = <strong>83.3%</strong>.</p>'},

  {id:'p70',type:'multi',tag:'LR + % Yield',
   q:'CH₄ + 2 O₂ → CO₂ + 2 H₂O. You mix 16.0 g CH₄ and 32.0 g O₂. The actual yield of H₂O is 16.0 g. Find the percent yield. (MM: CH₄ = 16.04, O₂ = 32.00, H₂O = 18.02 g/mol)',
   answer:88.8, tolerance:1.0, unit:'%',
   solution:'<p><strong>Step 1 (LR):</strong> CH₄: 16.0/16.04 = 0.998 mol → could make 1.996 mol H₂O → 35.9 g. O₂: 32.0/32.00 = 1.000 mol → could make 1.000 mol H₂O → 18.02 g. O₂ makes less → <strong>O₂ is LR, theor = 18.0 g H₂O</strong>.<br><strong>Step 2:</strong> % yield = (16.0 / 18.0) × 100 = <strong>88.9%</strong>.</p>'},

  {id:'p71',type:'multi',tag:'Multi-step Chain',
   q:'2 KClO₃ → 2 KCl + 3 O₂. Starting with 49.0 g KClO₃: (a) How many moles of O₂ form? (b) How many grams of O₂ form? Report your answer as grams of O₂. (MM: KClO₃ = 122.5, O₂ = 32.00 g/mol)',
   answer:19.2, tolerance:0.4, unit:'g O₂',
   solution:'<p><strong>(a)</strong> 49.0 g KClO₃ × (1 mol / 122.5 g) × (3 mol O₂ / 2 mol KClO₃) = 0.600 mol O₂.<br><strong>(b)</strong> 0.600 mol O₂ × (32.00 g / mol) = <strong>19.2 g O₂</strong>.</p>'},

  {id:'p72',type:'multi',tag:'Multi-step Chain',
   q:'N₂ + 3 H₂ → 2 NH₃. Starting with 0.800 mol of N₂: (a) How many moles of H₂ are consumed? (b) How many grams of NH₃ form? Report grams of NH₃. (MM NH₃ = 17.03 g/mol)',
   answer:27.2, tolerance:0.4, unit:'g NH₃',
   solution:'<p><strong>(a)</strong> 0.800 mol N₂ × (3 mol H₂ / 1 mol N₂) = 2.40 mol H₂ consumed.<br><strong>(b)</strong> 0.800 mol N₂ × (2 mol NH₃ / 1 mol N₂) × (17.03 g / mol) = <strong>27.2 g NH₃</strong>.</p>'},

  {id:'p73',type:'multi',tag:'Multi-step Chain',
   q:'Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂. You start with 0.300 mol Fe₂O₃. (a) What mass of CO is consumed? (b) What mass of Fe is produced? Report grams of Fe. (MM: CO = 28.01, Fe = 55.85 g/mol)',
   answer:33.5, tolerance:0.4, unit:'g Fe',
   solution:'<p><strong>(a)</strong> 0.300 mol Fe₂O₃ × (3 mol CO / 1 mol Fe₂O₃) × (28.01 g / mol) = 25.2 g CO consumed.<br><strong>(b)</strong> 0.300 mol Fe₂O₃ × (2 mol Fe / 1 mol Fe₂O₃) × (55.85 g / mol) = <strong>33.5 g Fe</strong>.</p>'},

  {id:'p74',type:'multi',tag:'Excess Reactant',
   q:'N₂ + 3 H₂ → 2 NH₃. You start with 14.0 g N₂ and 6.00 g H₂. N₂ is the limiting reactant. How many grams of H₂ are left over? (MM: N₂ = 28.01, H₂ = 2.016 g/mol)',
   answer:2.97, tolerance:0.15, unit:'g H₂',
   solution:'<p>Mol N₂ = 14.0/28.01 = 0.4998 mol. H₂ required = 0.4998 × 3 = 1.499 mol. Available H₂ = 6.00/2.016 = 2.976 mol. Excess H₂ = 2.976 − 1.499 = 1.477 mol × 2.016 g/mol = <strong>2.98 g H₂ left over</strong>.</p>'},

  {id:'p75',type:'multi',tag:'Excess Reactant',
   q:'2 H₂ + O₂ → 2 H₂O. You start with 4.00 g H₂ and 32.0 g O₂. H₂ is the limiting reactant. How many grams of O₂ are left over? (MM: H₂ = 2.016, O₂ = 32.00 g/mol)',
   answer:0.256, tolerance:0.05, unit:'g O₂',
   solution:'<p>Mol H₂ = 4.00/2.016 = 1.984 mol. O₂ required = 1.984/2 = 0.992 mol. Available O₂ = 32.0/32.00 = 1.000 mol. Excess O₂ = 1.000 − 0.992 = 0.008 mol × 32.00 = <strong>0.256 g O₂ left over</strong>.</p>'},

  {id:'p76',type:'multi',tag:'Find Limiting + Product',
   q:'2 SO₂ + O₂ → 2 SO₃. You have 16.0 g SO₂ and 16.0 g O₂. Which is the limiting reactant, and how many grams of SO₃ form? (MM: SO₂ = 64.06, O₂ = 32.00, SO₃ = 80.06 g/mol)',
   answer:20.0, tolerance:0.4, unit:'g SO₃',
   solution:'<p>SO₂: 16.0/64.06 = 0.2498 mol → 0.2498 mol SO₃ → 20.0 g. O₂: 16.0/32.00 = 0.5000 mol → 1.000 mol SO₃ → 80.1 g. <strong>SO₂ is LR → 20.0 g SO₃</strong>.</p>'},

  {id:'p77',type:'multi',tag:'Find Limiting + Product',
   q:'4 Al + 3 O₂ → 2 Al₂O₃. You have 27.0 g Al and 24.0 g O₂. Find the limiting reactant and the grams of Al₂O₃ produced. (MM: Al = 26.98, O₂ = 32.00, Al₂O₃ = 101.96 g/mol)',
   answer:51.0, tolerance:0.6, unit:'g Al₂O₃',
   solution:'<p>Al: 27.0/26.98 = 1.001 mol → 0.5005 mol Al₂O₃ → 51.0 g. O₂: 24.0/32.00 = 0.7500 mol → 0.5000 mol Al₂O₃ → 51.0 g. Both give nearly identical product — <strong>both are nearly stoichiometric; Al₂O₃ = 51.0 g</strong>. (O₂ is the limiting reactant by a tiny margin.)</p>'},

  {id:'p78',type:'multi',tag:'Real-World Application',
   q:'A student wants to make 10.0 g of water (H₂O) from H₂ and O₂: 2 H₂ + O₂ → 2 H₂O. How many grams of H₂ are needed? (MM: H₂ = 2.016, H₂O = 18.02 g/mol)',
   answer:1.12, tolerance:0.05, unit:'g H₂',
   solution:'<p>Work backwards: 10.0 g H₂O × (1 mol / 18.02 g) × (2 mol H₂ / 2 mol H₂O) × (2.016 g / mol) = <strong>1.12 g H₂</strong>.</p>'},

  {id:'p79',type:'multi',tag:'Real-World Application',
   q:'A car airbag inflates via: 2 NaN₃ → 2 Na + 3 N₂. To produce 56.0 g of N₂, how many grams of NaN₃ are needed? (MM: NaN₃ = 65.01, N₂ = 28.01 g/mol)',
   answer:86.7, tolerance:0.8, unit:'g NaN₃',
   solution:'<p>56.0 g N₂ × (1 mol / 28.01 g) × (2 mol NaN₃ / 3 mol N₂) × (65.01 g / mol) = <strong>86.7 g NaN₃</strong>.</p>'},

  {id:'p80',type:'multi',tag:'Design the Experiment',
   q:'You need exactly 1.00 mol of CO₂ from the reaction CH₄ + 2 O₂ → CO₂ + 2 H₂O. How many grams of CH₄ must you burn? (MM: CH₄ = 16.04 g/mol)',
   answer:16.04, tolerance:0.15, unit:'g CH₄',
   solution:'<p>Mole ratio CH₄:CO₂ = 1:1. So 1.00 mol CO₂ requires 1.00 mol CH₄. 1.00 mol × 16.04 g/mol = <strong>16.04 g CH₄</strong>.</p>'},

  {id:'p81',type:'multi',tag:'Interpret Results',
   q:'A chemist synthesizes a compound. The theoretical yield is 25.0 g but the actual yield is 16.0 g. The percent yield is 64.0%. If the chemist improves the procedure to achieve 80.0% yield, how many grams would be collected? (Theoretical yield remains 25.0 g.)',
   answer:20.0, tolerance:0.3, unit:'g',
   solution:'<p>Actual yield = % yield × theoretical yield / 100 = 0.800 × 25.0 = <strong>20.0 g</strong>. The improved procedure would recover 20.0 g instead of 16.0 g.</p>'}

]; // end ALL_PROBLEMS — 81 problems total
