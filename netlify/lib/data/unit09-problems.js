/* ── Unit 09 Problem Bank — Stoichiometry
   174 problems total (81 original + 60 added + 30 hard expansion + 3 easy multi-step)
   Difficulty: 58 easy | 68 medium | 48 hard
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  /* ════════════ CALCULATION — Reaction Stoichiometry (g→g / g→mol / mol→g / mol→mol) ════════════ */

  {id:'p01',difficulty:'medium',type:'calc',tag:'g → g',
   q:'The combustion of methane: CH4 + 2 O2 → CO2 + 2 H2O. How many grams of CO2 are produced from 32.0 g of CH4? (Molar masses: CH4 = 16.04 g/mol, CO2 = 44.01 g/mol)',
   answer:87.8, tolerance:0.6, unit:'g CO2',
   solution:'<p>Set up the factor-label chain:</p><p>32.0 g CH4 × (1 mol CH4 / 16.04 g) × (1 mol CO2 / 1 mol CH4) × (44.01 g CO2 / 1 mol CO2) = <strong>87.8 g CO2</strong>.</p><p>The key middle step is the 1:1 mole ratio from the balanced equation.</p>'},

  {id:'p02',difficulty:'medium',type:'calc',tag:'g → g',
   q:'In the Haber process: N2 + 3 H2 → 2 NH3. How many grams of NH3 are produced from 14.0 g of N2? (MM: N2 = 28.01 g/mol, NH3 = 17.03 g/mol)',
   answer:17.0, tolerance:0.3, unit:'g NH3',
   solution:'<p>First convert grams N2 to moles N2: 14.0 g N2 × (1 mol / 28.01 g) = 0.4998 mol N2.</p><p>Then use the mole ratio and convert to grams: 0.4998 mol N2 × (2 mol NH3 / 1 mol N2) × (17.03 g / mol) = <strong>17.0 g NH3</strong>.</p>'},

  {id:'p03',difficulty:'medium',type:'calc',tag:'g → g',
   q:'Hydrogen burns: 2 H2 + O2 → 2 H2O. How many grams of water are produced from 4.00 g of H2? (MM: H2 = 2.016 g/mol, H2O = 18.02 g/mol)',
   answer:35.7, tolerance:0.5, unit:'g H2O',
   solution:'<p>Use factor-label conversion:</p><p>4.00 g H2 × (1 mol / 2.016 g) × (2 mol H2O / 2 mol H2) × (18.02 g / mol) = <strong>35.7 g H2O</strong>.</p><p>The 2:2 mole ratio simplifies to 1:1.</p>'},

  {id:'p04',difficulty:'medium',type:'calc',tag:'g → g',
   q:'Iron ore reduction: Fe2O3 + 3 CO → 2 Fe + 3 CO2. How many grams of Fe are produced from 80.0 g of Fe2O3? (MM: Fe2O3 = 159.7 g/mol, Fe = 55.85 g/mol)',
   answer:55.9, tolerance:0.5, unit:'g Fe',
   solution:'<p>80.0 g Fe2O3 × (1 mol / 159.7 g) × (2 mol Fe / 1 mol Fe2O3) × (55.85 g / mol) = <strong>55.9 g Fe</strong>.</p>'},

  {id:'p05',difficulty:'medium',type:'calc',tag:'g → g',
   q:'Sulfur dioxide oxidation: 2 SO2 + O2 → 2 SO3. How many grams of SO3 are produced from 64.0 g of SO2? (MM: SO2 = 64.06 g/mol, SO3 = 80.06 g/mol)',
   answer:80.0, tolerance:0.5, unit:'g SO3',
   solution:'<p>64.0 g SO2 × (1 mol / 64.06 g) × (2 mol SO3 / 2 mol SO2) × (80.06 g / mol) = <strong>80.0 g SO3</strong>. The 2:2 ratio is 1:1.</p>'},

  {id:'p06',difficulty:'medium',type:'calc',tag:'g → g',
   q:'Limestone decomposition: CaCO3 → CaO + CO2. How many grams of CO2 are produced from 50.0 g of CaCO3? (MM: CaCO3 = 100.1 g/mol, CO2 = 44.01 g/mol)',
   answer:22.0, tolerance:0.3, unit:'g CO2',
   solution:'<p>50.0 g CaCO3 × (1 mol / 100.1 g) × (1 mol CO2 / 1 mol CaCO3) × (44.01 g / mol) = <strong>22.0 g CO2</strong>.</p>'},

  {id:'p07',difficulty:'medium',type:'calc',tag:'g → g',
   q:'Magnesium burns: 2 Mg + O2 → 2 MgO. How many grams of MgO are produced from 12.0 g of Mg? (MM: Mg = 24.31 g/mol, MgO = 40.30 g/mol)',
   answer:19.9, tolerance:0.3, unit:'g MgO',
   solution:'<p>12.0 g Mg × (1 mol / 24.31 g) × (2 mol MgO / 2 mol Mg) × (40.30 g / mol) = <strong>19.9 g MgO</strong>.</p>'},

  {id:'p08',difficulty:'medium',type:'calc',tag:'g → g',
   q:'Aluminum reacts with oxygen: 4 Al + 3 O2 → 2 Al2O3. How many grams of Al2O3 are produced from 27.0 g of Al? (MM: Al = 26.98 g/mol, Al2O3 = 101.96 g/mol)',
   answer:51.0, tolerance:0.5, unit:'g Al2O3',
   solution:'<p>27.0 g Al × (1 mol / 26.98 g) × (2 mol Al2O3 / 4 mol Al) × (101.96 g / mol) = <strong>51.0 g Al2O3</strong>. Note: 2/4 simplifies to 1/2.</p>'},

  {id:'p09',difficulty:'medium',type:'calc',tag:'g → g',
   q:'Potassium chlorate decomposes: 2 KClO3 → 2 KCl + 3 O2. How many grams of O2 are produced from 24.5 g of KClO3? (MM: KClO3 = 122.5 g/mol, O2 = 32.00 g/mol)',
   answer:9.60, tolerance:0.25, unit:'g O2',
   solution:'<p>24.5 g KClO3 × (1 mol / 122.5 g) × (3 mol O2 / 2 mol KClO3) × (32.00 g / mol) = <strong>9.60 g O2</strong>.</p>'},

  {id:'p10',difficulty:'medium',type:'calc',tag:'g → g',
   q:'Glucose combustion: C6H12O6 + 6 O2 → 6 CO2 + 6 H2O. How many grams of CO2 are produced from 36.0 g of glucose? (MM: C6H12O6 = 180.2 g/mol, CO2 = 44.01 g/mol)',
   answer:52.8, tolerance:0.5, unit:'g CO2',
   solution:'<p>36.0 g glucose × (1 mol / 180.2 g) × (6 mol CO2 / 1 mol glucose) × (44.01 g / mol) = <strong>52.8 g CO2</strong>.</p>'},

  {id:'p11',difficulty:'medium',type:'calc',tag:'g → g',
   q:'Acid-base neutralization: HCl + NaOH → NaCl + H2O. How many grams of NaCl are produced from 18.25 g of HCl? (MM: HCl = 36.46 g/mol, NaCl = 58.44 g/mol)',
   answer:29.3, tolerance:0.4, unit:'g NaCl',
   solution:'<p>18.25 g HCl × (1 mol / 36.46 g) × (1 mol NaCl / 1 mol HCl) × (58.44 g / mol) = <strong>29.3 g NaCl</strong>.</p>'},

  {id:'p12',difficulty:'medium',type:'calc',tag:'g → g',
   q:'Silver chloride precipitation: AgNO3 + HCl → AgCl + HNO3. How many grams of AgCl precipitate form from 17.0 g of HCl? (MM: HCl = 36.46 g/mol, AgCl = 143.3 g/mol)',
   answer:66.8, tolerance:0.6, unit:'g AgCl',
   solution:'<p>17.0 g HCl × (1 mol / 36.46 g) × (1 mol AgCl / 1 mol HCl) × (143.3 g / mol) = <strong>66.8 g AgCl</strong>.</p>'},

  {id:'p13',difficulty:'medium',type:'calc',tag:'g → g',
   q:'Limestone decomposition: CaCO3 → CaO + CO2. How many grams of CaO are produced from 150.0 g of CaCO3? (MM: CaCO3 = 100.1 g/mol, CaO = 56.08 g/mol)',
   answer:84.0, tolerance:0.5, unit:'g CaO',
   solution:'<p>150.0 g CaCO3 × (1 mol / 100.1 g) × (1 mol CaO / 1 mol CaCO3) × (56.08 g / mol) = <strong>84.0 g CaO</strong>.</p>'},

  {id:'p14',difficulty:'medium',type:'calc',tag:'g → g',
   q:'Potassium chlorate decomposition: 2 KClO3 → 2 KCl + 3 O2. How many grams of KCl are produced from 49.0 g of KClO3? (MM: KClO3 = 122.5 g/mol, KCl = 74.55 g/mol)',
   answer:29.8, tolerance:0.4, unit:'g KCl',
   solution:'<p>49.0 g KClO3 × (1 mol / 122.5 g) × (2 mol KCl / 2 mol KClO3) × (74.55 g / mol) = <strong>29.8 g KCl</strong>. The 2:2 ratio = 1:1.</p>'},

  {id:'p15',difficulty:'medium',type:'calc',tag:'g → g',
   q:'Sodium burns in water: 2 Na + 2 H2O → 2 NaOH + H2. How many grams of NaOH are produced from 23.0 g of Na? (MM: Na = 22.99 g/mol, NaOH = 40.00 g/mol)',
   answer:40.0, tolerance:0.5, unit:'g NaOH',
   solution:'<p>23.0 g Na × (1 mol / 22.99 g) × (2 mol NaOH / 2 mol Na) × (40.00 g / mol) = <strong>40.0 g NaOH</strong>.</p>'},

  {id:'p16',difficulty:'medium',type:'calc',tag:'g → g',
   q:'Methane combustion: CH4 + 2 O2 → CO2 + 2 H2O. How many grams of water are produced from 8.00 g of CH4? (MM: CH4 = 16.04 g/mol, H2O = 18.02 g/mol)',
   answer:17.97, tolerance:0.4, unit:'g H2O',
   solution:'<p>8.00 g CH4 × (1 mol / 16.04 g) × (2 mol H2O / 1 mol CH4) × (18.02 g / mol) = <strong>18.0 g H2O</strong>.</p>'},

  {id:'p17',difficulty:'easy',type:'calc',tag:'mol → mol',
   q:'2 H2 + O2 → 2 H2O. How many moles of H2O are produced from 2.00 mol of H2?',
   answer:2.00, tolerance:0.05, unit:'mol H2O',
   solution:'<p>2.00 mol H2 × (2 mol H2O / 2 mol H2) = <strong>2.00 mol H2O</strong>. The 2:2 mole ratio equals 1:1.</p>'},

  {id:'p18',difficulty:'easy',type:'calc',tag:'mol → mol',
   q:'N2 + 3 H2 → 2 NH3. How many moles of NH3 are produced from 0.750 mol of H2?',
   answer:0.500, tolerance:0.02, unit:'mol NH3',
   solution:'<p>Start with the given amount in moles and apply the mole ratio from the balanced equation:</p><p>0.750 mol H2 × (2 mol NH3 / 3 mol H2) = <strong>0.500 mol NH3</strong>.</p>'},

  {id:'p19',difficulty:'easy',type:'calc',tag:'mol → mol',
   q:'2 SO2 + O2 → 2 SO3. How many moles of SO3 are produced from 3.00 mol of SO2?',
   answer:3.00, tolerance:0.05, unit:'mol SO3',
   solution:'<p>3.00 mol SO2 × (2 mol SO3 / 2 mol SO2) = <strong>3.00 mol SO3</strong>. The 2:2 ratio = 1:1.</p>'},

  {id:'p20',difficulty:'easy',type:'calc',tag:'mol → mol',
   q:'4 Fe + 3 O2 → 2 Fe2O3. How many moles of Fe2O3 are produced from 1.20 mol of Fe?',
   answer:0.600, tolerance:0.02, unit:'mol Fe2O3',
   solution:'<p>1.20 mol Fe × (2 mol Fe2O3 / 4 mol Fe) = <strong>0.600 mol Fe2O3</strong>. Note: 2/4 = 1/2.</p>'},

  {id:'p21',difficulty:'easy',type:'calc',tag:'mol → mol',
   q:'2 H2O → 2 H2 + O2 (electrolysis). How many moles of O2 are produced from 5.00 mol of H2O?',
   answer:2.50, tolerance:0.05, unit:'mol O2',
   solution:'<p>5.00 mol H2O × (1 mol O2 / 2 mol H2O) = <strong>2.50 mol O2</strong>.</p>'},

  {id:'p22',difficulty:'easy',type:'calc',tag:'mol → g',
   q:'N2 + 3 H2 → 2 NH3. How many grams of NH3 are produced from 0.500 mol N2? (MM NH3 = 17.03 g/mol)',
   answer:17.03, tolerance:0.3, unit:'g NH3',
   solution:'<p>0.500 mol N2 × (2 mol NH3 / 1 mol N2) × (17.03 g / mol) = <strong>17.0 g NH3</strong>.</p>'},

  {id:'p23',difficulty:'easy',type:'calc',tag:'mol → g',
   q:'CaCO3 → CaO + CO2. How many grams of CaO are produced from 0.250 mol of CaCO3? (MM CaO = 56.08 g/mol)',
   answer:14.02, tolerance:0.2, unit:'g CaO',
   solution:'<p>0.250 mol CaCO3 × (1 mol CaO / 1 mol CaCO3) × (56.08 g / mol) = <strong>14.0 g CaO</strong>.</p>'},

  {id:'p24',difficulty:'easy',type:'calc',tag:'mol → g',
   q:'2 Al + 3 Cl2 → 2 AlCl3. How many grams of AlCl3 are produced from 0.600 mol of Al? (MM AlCl3 = 133.3 g/mol)',
   answer:80.0, tolerance:0.6, unit:'g AlCl3',
   solution:'<p>0.600 mol Al × (2 mol AlCl3 / 2 mol Al) × (133.3 g / mol) = <strong>80.0 g AlCl3</strong>.</p>'},

  /* ════════════ CALCULATION — Percent Yield ════════════ */

  {id:'p25',difficulty:'easy',type:'calc',tag:'% Yield',
   q:'A reaction has a theoretical yield of 29.2 g of NaCl. The student collects 24.8 g. What is the percent yield?',
   answer:84.9, tolerance:0.6, unit:'%',
   solution:'<p>Use the percent-yield formula:</p><p>% yield = (actual yield / theoretical yield) × 100 = (24.8 / 29.2) × 100 = <strong>84.9%</strong>.</p>'},

  {id:'p26',difficulty:'easy',type:'calc',tag:'% Yield',
   q:'A student synthesizes aspirin. The theoretical yield is 2.50 g; they collect 2.08 g. What is the percent yield?',
   answer:83.2, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (2.08 / 2.50) × 100 = <strong>83.2%</strong>.</p>'},

  {id:'p27',difficulty:'easy',type:'calc',tag:'% Yield',
   q:'The theoretical yield of Fe from a reduction reaction is 55.8 g. The actual yield is 47.4 g. What is the percent yield?',
   answer:84.9, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (47.4 / 55.8) × 100 = <strong>84.9%</strong>.</p>'},

  {id:'p28',difficulty:'easy',type:'calc',tag:'% Yield',
   q:'In an ammonia synthesis, the theoretical yield of NH3 is 34.0 g. The actual yield is 28.9 g. What is the percent yield?',
   answer:85.0, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (28.9 / 34.0) × 100 = <strong>85.0%</strong>.</p>'},

  {id:'p29',difficulty:'easy',type:'calc',tag:'% Yield',
   q:'The theoretical yield of CO2 in a combustion reaction is 44.0 g. Only 38.5 g are collected. What is the percent yield?',
   answer:87.5, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (38.5 / 44.0) × 100 = <strong>87.5%</strong>.</p>'},

  {id:'p30',difficulty:'easy',type:'calc',tag:'% Yield',
   q:'Iron rusting: 4 Fe + 3 O2 → 2 Fe2O3. The theoretical yield of Fe2O3 is 8.37 g. The actual yield is 6.70 g. What is the percent yield?',
   answer:80.0, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (6.70 / 8.37) × 100 = <strong>80.0%</strong>.</p>'},

  {id:'p31',difficulty:'easy',type:'calc',tag:'% Yield',
   q:'A student finds the actual yield of MgO is 16.5 g. The theoretical yield was 19.9 g. What is the percent yield?',
   answer:82.9, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (16.5 / 19.9) × 100 = <strong>82.9%</strong>.</p>'},

  {id:'p32',difficulty:'easy',type:'calc',tag:'% Yield',
   q:'The theoretical yield of AgCl precipitate is 143.5 g. The chemist collects 121.0 g. What is the percent yield?',
   answer:84.3, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (121.0 / 143.5) × 100 = <strong>84.3%</strong>.</p>'},

  {id:'p33',difficulty:'medium',type:'calc',tag:'% Yield',
   q:'A student\'s actual yield is 18.0 g. The percent yield was 75.0%. What was the theoretical yield?',
   answer:24.0, tolerance:0.3, unit:'g',
   solution:'<p>Theoretical = Actual / (% yield / 100) = 18.0 / 0.750 = <strong>24.0 g</strong>.</p>'},

  {id:'p34',difficulty:'medium',type:'calc',tag:'% Yield',
   q:'The percent yield is 92.0% and the theoretical yield is 50.0 g. What is the actual yield?',
   answer:46.0, tolerance:0.4, unit:'g',
   solution:'<p>Actual = % yield × Theoretical / 100 = 0.920 × 50.0 = <strong>46.0 g</strong>.</p>'},

  {id:'p35',difficulty:'medium',type:'calc',tag:'% Yield',
   q:'A student has an actual yield of 12.6 g and a percent yield of 84.0%. What was the theoretical yield?',
   answer:15.0, tolerance:0.3, unit:'g',
   solution:'<p>Theoretical = 12.6 / 0.840 = <strong>15.0 g</strong>.</p>'},

  /* ════════════ CALCULATION — Limiting Reactant ════════════ */

  {id:'p36',difficulty:'medium',type:'calc',tag:'Limiting Reactant',
   q:'2 H2 + O2 → 2 H2O. You have 4.00 g of H2 and 32.0 g of O2. Which is the limiting reactant? How many grams of H2O form? (MM: H2 = 2.016, O2 = 32.00, H2O = 18.02 g/mol)',
   answer:35.7, tolerance:0.5, unit:'g H2O',
   solution:'<p>H2: 4.00/2.016 = 1.984 mol → could make 1.984 mol H2O → 35.7 g. O2: 32.0/32.00 = 1.000 mol → could make 2.000 mol H2O → 36.0 g. <strong>H2 makes less → H2 is the limiting reactant → 35.7 g H2O</strong>.</p>'},

  {id:'p37',difficulty:'medium',type:'calc',tag:'Limiting Reactant',
   q:'N2 + 3 H2 → 2 NH3. You have 14.0 g of N2 and 6.00 g of H2. How many grams of NH3 are produced? (MM: N2 = 28.01, H2 = 2.016, NH3 = 17.03 g/mol)',
   answer:17.0, tolerance:0.4, unit:'g NH3',
   solution:'<p>N2: 14.0/28.01 = 0.4998 mol → could make 0.9996 mol NH3 → 17.0 g. H2: 6.00/2.016 = 2.976 mol → could make 1.984 mol NH3 → 33.8 g. <strong>N2 makes less → N2 is the limiting reactant → 17.0 g NH3</strong>.</p>'},

  {id:'p38',difficulty:'medium',type:'calc',tag:'Limiting Reactant',
   q:'Fe2O3 + 3 CO → 2 Fe + 3 CO2. You have 32.0 g of Fe2O3 and 21.0 g of CO. How many grams of Fe are produced? (MM: Fe2O3 = 159.7, CO = 28.01, Fe = 55.85 g/mol)',
   answer:22.4, tolerance:0.4, unit:'g Fe',
   solution:'<p>Fe2O3: 32.0/159.7 = 0.2004 mol → could make 22.4 g Fe. CO: 21.0/28.01 = 0.7497 mol → could make 27.9 g Fe. <strong>Fe2O3 makes less → Fe2O3 is the limiting reactant → 22.4 g Fe</strong>.</p>'},

  {id:'p39',difficulty:'medium',type:'calc',tag:'Limiting Reactant',
   q:'2 Mg + O2 → 2 MgO. You have 12.0 g of Mg and 16.0 g of O2. How many grams of MgO form? (MM: Mg = 24.31, O2 = 32.00, MgO = 40.30 g/mol)',
   answer:19.9, tolerance:0.4, unit:'g MgO',
   solution:'<p>Mg: 12.0/24.31 = 0.4937 mol → could make 19.9 g MgO. O2: 16.0/32.00 = 0.5000 mol → could make 40.3 g MgO. <strong>Mg makes less → Mg is the limiting reactant → 19.9 g MgO</strong>.</p>'},

  {id:'p40',difficulty:'medium',type:'calc',tag:'Limiting Reactant',
   q:'4 Fe + 3 O2 → 2 Fe2O3. You have 11.2 g of Fe and 8.00 g of O2. How many grams of Fe2O3 form? (MM: Fe = 55.85, O2 = 32.00, Fe2O3 = 159.7 g/mol)',
   answer:16.0, tolerance:0.4, unit:'g Fe2O3',
   solution:'<p>Fe: 11.2/55.85 = 0.2006 mol → could make 0.1003 mol Fe2O3 → 16.0 g. O2: 8.00/32.00 = 0.2500 mol → could make 0.1667 mol Fe2O3 → 26.6 g. <strong>Fe makes less → Fe is the limiting reactant → 16.0 g Fe2O3</strong>.</p>'},

  /* ════════════ CONCEPT PROBLEMS ════════════ */

  {id:'p41',difficulty:'easy',type:'concept',tag:'Mole Ratio',
   q:'In the equation 2 H2 + O2 → 2 H2O, what is the mole ratio of H2 to H2O?',
   choices:['1:1 (H2 to H2O)','2:1 (H2 to H2O)','1:2 (H2 to H2O)','2:3 (H2 to H2O)'],
   correct:0,
   solution:'<p>The balanced equation has 2 mol H2 producing 2 mol H2O. The ratio 2:2 simplifies to <strong>1:1</strong>. Choice A is correct.</p>'},

  {id:'p42',difficulty:'easy',type:'concept',tag:'Mole Ratio',
   q:'In the equation N2 + 3 H2 → 2 NH3, how many moles of H2 are needed for every mole of N2?',
   choices:['1 mol H2','2 mol H2','3 mol H2','4 mol H2'],
   correct:2,
   solution:'<p>The coefficient of H2 is 3 and the coefficient of N2 is 1. So <strong>3 moles of H2</strong> are needed per mole of N2.</p>'},

  {id:'p43',difficulty:'easy',type:'concept',tag:'Mole Ratio',
   q:'For the equation 4 Al + 3 O2 → 2 Al2O3, the mole ratio of Al2O3 to O2 is:',
   choices:['4:3','2:3','3:2','1:1'],
   correct:1,
   solution:'<p>Al2O3 has a coefficient of 2; O2 has a coefficient of 3. The ratio Al2O3:O2 = <strong>2:3</strong>.</p>'},

  {id:'p44',difficulty:'easy',type:'concept',tag:'Roadmap',
   q:'In a stoichiometry problem, you are given grams of a reactant and asked for grams of a product. What is the CORRECT order of conversions?',
   choices:['Grams → Moles → Moles → Grams','Grams → Grams → Moles → Moles','Moles → Grams → Moles → Grams','Grams → Moles → Grams → Moles'],
   correct:0,
   solution:'<p>The stoichiometry road map is always: <strong>Grams → Moles → (mole ratio) → Moles → Grams</strong>. You must convert to moles first so you can use the mole ratio from the balanced equation.</p>'},

  {id:'p45',difficulty:'easy',type:'concept',tag:'Roadmap',
   q:'Why must you convert grams to moles BEFORE using the mole ratio in a stoichiometry problem?',
   choices:['Because molar mass is always 1','Because the coefficients in a balanced equation represent moles, not grams','Because grams and moles are the same unit','Because you always need to find volume first'],
   correct:1,
   solution:'<p>Coefficients in a balanced equation are mole ratios. They tell you how many <em>moles</em> react — not grams. You must convert to moles first to use those ratios correctly.</p>'},

  {id:'p46',difficulty:'easy',type:'concept',tag:'Limiting Reactant',
   q:'In a chemical reaction, the limiting reactant is:',
   choices:['The reactant with the smallest mass in grams','The reactant that runs out first and stops the reaction','The reactant with the smallest molar mass','The reactant listed first in the equation'],
   correct:1,
   solution:'<p>The limiting reactant is the one that is completely used up first, stopping the reaction. Mass alone does not determine which reactant is limiting — you must compare moles relative to the equation.</p>'},

  {id:'p47',difficulty:'easy',type:'concept',tag:'Limiting Reactant',
   q:'After a reaction with a limiting and excess reactant, which statement is true?',
   choices:['Both reactants are completely used up','The limiting reactant has some left over','The excess reactant has some left over','The product yield equals 100%'],
   correct:2,
   solution:'<p>When the limiting reactant runs out, the reaction stops. The <strong>excess reactant</strong> is still partially present — it was not all consumed.</p>'},

  {id:'p48',difficulty:'medium',type:'concept',tag:'Limiting Reactant',
   q:'You mix 2 mol of H2 with 2 mol of O2 for the reaction 2 H2 + O2 → 2 H2O. Which is the limiting reactant?',
   choices:['H2, because it needs twice as much O2','O2, because more H2 is needed per O2','Neither — both will be used up completely','H2, because it has a smaller molar mass'],
   correct:0,
   solution:'<p>For 2 mol H2, you need only 1 mol O2 (ratio 2:1). But you have 2 mol O2 — excess! <strong>H2 is the limiting reactant</strong> because it runs out first relative to its required ratio.</p>'},

  {id:'p49',difficulty:'easy',type:'concept',tag:'Theoretical Yield',
   q:'The theoretical yield of a reaction is:',
   choices:['The amount of product you actually collect in the lab','The maximum amount of product possible based on the limiting reactant','The amount of product from the excess reactant','Always less than the actual yield'],
   correct:1,
   solution:'<p>Theoretical yield is calculated from stoichiometry using the limiting reactant — it represents the maximum possible amount of product if no product is lost. Actual yield is almost always less than theoretical yield.</p>'},

  {id:'p50',difficulty:'easy',type:'concept',tag:'Percent Yield',
   q:'A percent yield of 100% means:',
   choices:['The reaction was very fast','All of the product was collected with no losses','The actual yield was doubled','The limiting reactant was not used up'],
   correct:1,
   solution:'<p>100% yield means actual yield = theoretical yield — every bit of product was recovered. In real labs this is extremely rare because of spills, side reactions, and incomplete reactions.</p>'},

  {id:'p51',difficulty:'easy',type:'concept',tag:'Percent Yield',
   q:'Which percent yield indicates the most efficient reaction?',
   choices:['55%','72%','89%','43%'],
   correct:2,
   solution:'<p><strong>89%</strong> is closest to 100% and represents the most product collected relative to what was theoretically possible.</p>'},

  {id:'p52',difficulty:'easy',type:'concept',tag:'Percent Yield',
   q:'Why is the actual yield in a lab usually less than the theoretical yield?',
   choices:['The balanced equation is wrong','Product is lost due to spills, side reactions, or incomplete reaction','The molar mass was calculated incorrectly','The limiting reactant was added in excess'],
   correct:1,
   solution:'<p>Real lab reactions are never perfect — product can be lost to spills, evaporation, side reactions, or the reaction may not go completely to completion. All of these reduce actual yield below theoretical yield.</p>'},

  {id:'p53',difficulty:'medium',type:'concept',tag:'Stoichiometric Factor',
   q:'For the reaction 2 SO2 + O2 → 2 SO3, which fraction correctly represents the stoichiometric factor to convert mol SO2 to mol SO3?',
   choices:['(2 mol SO2) / (2 mol SO3)','(2 mol SO3) / (2 mol SO2)','(1 mol O2) / (2 mol SO2)','(2 mol SO3) / (1 mol O2)'],
   correct:1,
   solution:'<p>To convert mol SO2 → mol SO3, the stoichiometric factor is <strong>(2 mol SO3) / (2 mol SO2)</strong>, which simplifies to 1:1. You put the substance you WANT on top.</p>'},

  {id:'p54',difficulty:'medium',type:'concept',tag:'Stoichiometric Factor',
   q:'Which conversion factor correctly converts moles of H2 to moles of H2O in the reaction 2 H2 + O2 → 2 H2O?',
   choices:['(1 mol H2O) / (2 mol H2)','(2 mol H2O) / (2 mol H2)','(2 mol H2) / (2 mol H2O)','(1 mol O2) / (2 mol H2)'],
   correct:1,
   solution:'<p>The balanced equation shows 2 mol H2 → 2 mol H2O. The factor is <strong>(2 mol H2O) / (2 mol H2)</strong>, which simplifies to 1 mol H2O per mol H2.</p>'},

  {id:'p55',difficulty:'easy',type:'concept',tag:'Balanced Equations',
   q:'Which of the following equations is correctly balanced?',
   choices:['H2 + O2 → H2O','2 H2 + O2 → 2 H2O','H2 + O2 → 2 H2O','2 H2 + 2 O2 → 2 H2O'],
   correct:1,
   solution:'<p><strong>2 H2 + O2 → 2 H2O</strong> is balanced: 4 H and 2 O on each side. Option A has 2 O on left but 1 O on right. Option C has unbalanced hydrogen. Option D has 4 O left but 2 O right.</p>'},

  {id:'p56',difficulty:'easy',type:'concept',tag:'Balanced Equations',
   q:'Why must a chemical equation be balanced before you do stoichiometry calculations?',
   choices:['So the equation looks neat','So the coefficients correctly represent the mole ratios','So you can find molar mass','So you know the color of the product'],
   correct:1,
   solution:'<p>Stoichiometry uses the coefficients as mole ratios. If the equation is not balanced, the ratios are wrong and all calculations will give incorrect answers. The balanced equation is the foundation of every stoichiometry calculation.</p>'},

  {id:'p57',difficulty:'easy',type:'concept',tag:'Mole Ratio',
   q:'In the equation CH4 + 2 O2 → CO2 + 2 H2O, how many moles of O2 are needed to react with 3 mol of CH4?',
   choices:['2 mol','3 mol','4 mol','6 mol'],
   correct:3,
   solution:'<p>Mole ratio: 2 mol O2 per 1 mol CH4. For 3 mol CH4: 3 × 2 = <strong>6 mol O2</strong>.</p>'},

  {id:'p58',difficulty:'medium',type:'concept',tag:'Limiting Reactant',
   q:'A student has 1 mol N2 and 1 mol H2 for N2 + 3 H2 → 2 NH3. Which reactant is limiting?',
   choices:['N2, because it reacts in a 1:3 ratio and H2 is insufficient','H2, because there is only 1 mol and 3 are needed per mol N2','Both are limiting equally','Neither — both are in excess'],
   correct:1,
   solution:'<p>1 mol N2 requires 3 mol H2. But there is only 1 mol H2 available. <strong>H2 is the limiting reactant</strong> because it runs out first.</p>'},

  {id:'p59',difficulty:'medium',type:'concept',tag:'Excess Reactant',
   q:'After the reaction 2 H2 + O2 → 2 H2O using 4 g H2 and 32 g O2, which reactant has some left over?',
   choices:['H2','O2','H2O','Neither — both are used up'],
   correct:1,
   solution:'<p>4 g H2 = 1.98 mol. 32 g O2 = 1.00 mol. The 2:1 ratio means 1.98 mol H2 needs only 0.99 mol O2. You have 1.00 mol O2, so there is a tiny excess. <strong>O2 is the excess reactant</strong>.</p>'},

  {id:'p60',difficulty:'easy',type:'concept',tag:'Percent Yield',
   q:'If a student calculates a percent yield greater than 100%, what most likely happened?',
   choices:['The reaction was very efficient','The student made an error in measurement or calculation','The theoretical yield formula was used correctly','The actual yield was measured perfectly'],
   correct:1,
   solution:'<p>Percent yield cannot exceed 100% — you cannot make more product than the stoichiometry predicts. A result over 100% means there was a <strong>measurement or calculation error</strong>, such as using the wrong theoretical yield or not drying a precipitate.</p>'},

  {id:'p61',difficulty:'easy',type:'concept',tag:'Theoretical Yield',
   q:'Theoretical yield is calculated from:',
   choices:['The excess reactant','The limiting reactant','The average of both reactants','The actual yield measured in lab'],
   correct:1,
   solution:'<p>Theoretical yield is always calculated from the <strong>limiting reactant</strong> — the one that controls how much product can form. Using the excess reactant would give an inflated, impossible number.</p>'},

  {id:'p62',difficulty:'easy',type:'concept',tag:'Stoichiometry Basics',
   q:'The numbers in front of chemical formulas in a balanced equation are called:',
   choices:['Subscripts','Exponents','Coefficients','Superscripts'],
   correct:2,
   solution:'<p><strong>Coefficients</strong> are the large numbers in front of each formula (e.g., the 2 in 2H2O). Subscripts are the small numbers inside the formula (e.g., the 2 in H2). Coefficients tell you the mole ratio.</p>'},

  {id:'p63',difficulty:'easy',type:'concept',tag:'Stoichiometry Basics',
   q:'The "stoichiometry road map" always starts with converting the given substance to what unit?',
   choices:['Liters','Grams','Moles','Atoms'],
   correct:2,
   solution:'<p>The road map always converts first to <strong>moles</strong>. Coefficients in balanced equations are mole ratios, so moles are the universal currency of stoichiometry calculations.</p>'},

  {id:'p64',difficulty:'medium',type:'concept',tag:'Limiting Reactant',
   q:'To find the limiting reactant when given grams of two reactants, the CORRECT method is:',
   choices:['Compare the grams directly — smaller mass = limiting reactant','Convert both to moles, then compare each to the needed mole ratio','Compare molar masses — larger molar mass = limiting reactant','Divide grams by the coefficient for each reactant'],
   correct:1,
   solution:'<p>You must <strong>convert both to moles</strong>, then calculate how much product each could produce. The reactant that produces less product is the limiting reactant. Simply comparing grams gives the wrong answer.</p>'},

  {id:'p65',difficulty:'easy',type:'concept',tag:'Percent Yield',
   q:'The percent yield formula uses actual yield divided by theoretical yield. If both are in grams, the units:',
   choices:['Stay as grams in the final answer','Cancel out, giving a dimensionless percentage','Must be converted to moles first','Give a result in g/mol'],
   correct:1,
   solution:'<p>Grams ÷ grams = dimensionless ratio. Multiplying by 100 gives a <strong>percentage with no units</strong>. Both must be in the same units for the division to be valid.</p>'},

  /* ════════════ MULTI-STEP PROBLEMS ════════════ */

  {id:'p66',difficulty:'medium',type:'multi',tag:'LR + Product Mass',
   q:'2 H2 + O2 → 2 H2O. You have 3.00 g of H2 and 24.0 g of O2. Step 1: Find the limiting reactant. Step 2: Calculate the theoretical yield of H2O in grams. (MM: H2 = 2.016, O2 = 32.00, H2O = 18.02 g/mol)',
   answer:26.8, tolerance:0.4, unit:'g H2O',
   solution:'<p><strong>Step 1:</strong> H2: 3.00/2.016 = 1.488 mol → could make 1.488 mol H2O → 26.8 g. O2: 24.0/32.00 = 0.750 mol → could make 1.500 mol H2O → 27.0 g. H2 makes less → <strong>H2 is the limiting reactant</strong>.<br><strong>Step 2:</strong> Theoretical yield = <strong>26.8 g H2O</strong>.</p>'},

  {id:'p67',difficulty:'hard',type:'multi',tag:'LR + % Yield',
   q:'N2 + 3 H2 → 2 NH3. You start with 10.0 g N2 and 8.00 g H2. The actual yield of NH3 is 9.50 g. What is the percent yield? (MM: N2 = 28.01, H2 = 2.016, NH3 = 17.03 g/mol)',
   answer:78.1, tolerance:0.8, unit:'%',
   solution:'<p><strong>Step 1 (LR):</strong> N2: 10.0/28.01 = 0.357 mol → 0.714 mol NH3 → 12.16 g NH3. H2: 8.00/2.016 = 3.968 mol → 2.645 mol NH3 → 45.0 g NH3. N2 makes less → <strong>N2 is LR, theor = 12.16 g NH3</strong>.<br><strong>Step 2:</strong> % yield = (9.50 / 12.16) × 100 = <strong>78.1%</strong>.</p>'},

  {id:'p68',difficulty:'hard',type:'multi',tag:'LR + % Yield',
   q:'4 Fe + 3 O2 → 2 Fe2O3. You use 22.4 g of Fe and 12.8 g of O2. The actual yield of Fe2O3 is 28.0 g. What is the percent yield? (MM: Fe = 55.85, O2 = 32.00, Fe2O3 = 159.7 g/mol)',
   answer:87.2, tolerance:0.8, unit:'%',
   solution:'<p><strong>Step 1 (LR):</strong> Fe: 22.4/55.85 = 0.401 mol → 0.201 mol Fe2O3 → 32.1 g. O2: 12.8/32.00 = 0.400 mol → 0.267 mol Fe2O3 → 42.6 g. Fe makes less → <strong>Fe is LR, theor = 32.1 g Fe2O3</strong>.<br><strong>Step 2:</strong> % yield = (28.0 / 32.1) × 100 = <strong>87.2%</strong>.</p>'},

  {id:'p69',difficulty:'medium',type:'multi',tag:'LR + % Yield',
   q:'CaCO3 → CaO + CO2. You start with 75.0 g of CaCO3. The actual yield of CaO is 25.0 g. What is the percent yield? (MM: CaCO3 = 100.1, CaO = 56.08 g/mol)',
   answer:59.5, tolerance:0.8, unit:'%',
   solution:'<p><strong>Step 1 (theor):</strong> 75.0 g CaCO3 × (1/100.1) × (1 mol CaO/1 mol CaCO3) × 56.08 = 42.0 g CaO.<br><strong>Step 2:</strong> % yield = (25.0 / 42.0) × 100 = <strong>59.5%</strong>.</p>'},

  {id:'p70',difficulty:'hard',type:'multi',tag:'LR + % Yield',
   q:'CH4 + 2 O2 → CO2 + 2 H2O. You mix 16.0 g CH4 and 32.0 g O2. The actual yield of H2O is 16.0 g. Find the percent yield. (MM: CH4 = 16.04, O2 = 32.00, H2O = 18.02 g/mol)',
   answer:88.8, tolerance:1.0, unit:'%',
   solution:'<p><strong>Step 1 (LR):</strong> CH4: 16.0/16.04 = 0.998 mol → could make 1.996 mol H2O → 35.9 g. O2: 32.0/32.00 = 1.000 mol → could make 1.000 mol H2O → 18.02 g. O2 makes less → <strong>O2 is LR, theor = 18.0 g H2O</strong>.<br><strong>Step 2:</strong> % yield = (16.0 / 18.0) × 100 = <strong>88.9%</strong>.</p>'},

  {id:'p71',difficulty:'medium',type:'multi',tag:'Multi-step Chain',
   q:'2 KClO3 → 2 KCl + 3 O2. Starting with 49.0 g KClO3: (a) How many moles of O2 form? (b) How many grams of O2 form? Report your answer as grams of O2. (MM: KClO3 = 122.5, O2 = 32.00 g/mol)',
   answer:19.2, tolerance:0.4, unit:'g O2',
   solution:'<p><strong>(a)</strong> 49.0 g KClO3 × (1 mol / 122.5 g) × (3 mol O2 / 2 mol KClO3) = 0.600 mol O2.<br><strong>(b)</strong> 0.600 mol O2 × (32.00 g / mol) = <strong>19.2 g O2</strong>.</p>'},

  {id:'p72',difficulty:'medium',type:'multi',tag:'Multi-step Chain',
   q:'N2 + 3 H2 → 2 NH3. Starting with 0.800 mol of N2: (a) How many moles of H2 are consumed? (b) How many grams of NH3 form? Report grams of NH3. (MM NH3 = 17.03 g/mol)',
   answer:27.2, tolerance:0.4, unit:'g NH3',
   solution:'<p><strong>(a)</strong> 0.800 mol N2 × (3 mol H2 / 1 mol N2) = 2.40 mol H2 consumed.<br><strong>(b)</strong> 0.800 mol N2 × (2 mol NH3 / 1 mol N2) × (17.03 g / mol) = <strong>27.2 g NH3</strong>.</p>'},

  {id:'p73',difficulty:'medium',type:'multi',tag:'Multi-step Chain',
   q:'Fe2O3 + 3 CO → 2 Fe + 3 CO2. You start with 0.300 mol Fe2O3. (a) What mass of CO is consumed? (b) What mass of Fe is produced? Report grams of Fe. (MM: CO = 28.01, Fe = 55.85 g/mol)',
   answer:33.5, tolerance:0.4, unit:'g Fe',
   solution:'<p><strong>(a)</strong> 0.300 mol Fe2O3 × (3 mol CO / 1 mol Fe2O3) × (28.01 g / mol) = 25.2 g CO consumed.<br><strong>(b)</strong> 0.300 mol Fe2O3 × (2 mol Fe / 1 mol Fe2O3) × (55.85 g / mol) = <strong>33.5 g Fe</strong>.</p>'},

  {id:'p74',difficulty:'medium',type:'multi',tag:'Excess Reactant',
   q:'N2 + 3 H2 → 2 NH3. You start with 14.0 g N2 and 6.00 g H2. N2 is the limiting reactant. How many grams of H2 are left over? (MM: N2 = 28.01, H2 = 2.016 g/mol)',
   answer:2.97, tolerance:0.15, unit:'g H2',
   solution:'<p>Mol N2 = 14.0/28.01 = 0.4998 mol. H2 required = 0.4998 × 3 = 1.499 mol. Available H2 = 6.00/2.016 = 2.976 mol. Excess H2 = 2.976 - 1.499 = 1.477 mol × 2.016 g/mol = <strong>2.98 g H2 left over</strong>.</p>'},

  {id:'p75',difficulty:'medium',type:'multi',tag:'Excess Reactant',
   q:'2 H2 + O2 → 2 H2O. You start with 4.00 g H2 and 32.0 g O2. H2 is the limiting reactant. How many grams of O2 are left over? (MM: H2 = 2.016, O2 = 32.00 g/mol)',
   answer:0.256, tolerance:0.05, unit:'g O2',
   solution:'<p>Mol H2 = 4.00/2.016 = 1.984 mol. O2 required = 1.984/2 = 0.992 mol. Available O2 = 32.0/32.00 = 1.000 mol. Excess O2 = 1.000 - 0.992 = 0.008 mol × 32.00 = <strong>0.256 g O2 left over</strong>.</p>'},

  {id:'p76',difficulty:'medium',type:'multi',tag:'Find Limiting + Product',
   q:'2 SO2 + O2 → 2 SO3. You have 16.0 g SO2 and 16.0 g O2. Which is the limiting reactant, and how many grams of SO3 form? (MM: SO2 = 64.06, O2 = 32.00, SO3 = 80.06 g/mol)',
   answer:20.0, tolerance:0.4, unit:'g SO3',
   solution:'<p>SO2: 16.0/64.06 = 0.2498 mol → 0.2498 mol SO3 → 20.0 g. O2: 16.0/32.00 = 0.5000 mol → 1.000 mol SO3 → 80.1 g. <strong>SO2 is LR → 20.0 g SO3</strong>.</p>'},

  {id:'p77',difficulty:'medium',type:'multi',tag:'Find Limiting + Product',
   q:'4 Al + 3 O2 → 2 Al2O3. You have 27.0 g Al and 24.0 g O2. Find the limiting reactant and the grams of Al2O3 produced. (MM: Al = 26.98, O2 = 32.00, Al2O3 = 101.96 g/mol)',
   answer:51.0, tolerance:0.6, unit:'g Al2O3',
   solution:'<p>Al: 27.0/26.98 = 1.001 mol → 0.5005 mol Al2O3 → 51.0 g. O2: 24.0/32.00 = 0.7500 mol → 0.5000 mol Al2O3 → 51.0 g. Both give nearly identical product — <strong>both are nearly stoichiometric; Al2O3 = 51.0 g</strong>. (O2 is the limiting reactant by a tiny margin.)</p>'},

  {id:'p78',difficulty:'medium',type:'multi',tag:'Real-World Application',
   q:'A student wants to make 10.0 g of water (H2O) from H2 and O2: 2 H2 + O2 → 2 H2O. How many grams of H2 are needed? (MM: H2 = 2.016, H2O = 18.02 g/mol)',
   answer:1.12, tolerance:0.05, unit:'g H2',
   solution:'<p>Work backwards: 10.0 g H2O × (1 mol / 18.02 g) × (2 mol H2 / 2 mol H2O) × (2.016 g / mol) = <strong>1.12 g H2</strong>.</p>'},

  {id:'p79',difficulty:'medium',type:'multi',tag:'Real-World Application',
   q:'A car airbag inflates via: 2 NaN3 → 2 Na + 3 N2. To produce 56.0 g of N2, how many grams of NaN3 are needed? (MM: NaN3 = 65.01, N2 = 28.01 g/mol)',
   answer:86.7, tolerance:0.8, unit:'g NaN3',
   solution:'<p>56.0 g N2 × (1 mol / 28.01 g) × (2 mol NaN3 / 3 mol N2) × (65.01 g / mol) = <strong>86.7 g NaN3</strong>.</p>'},

  {id:'p80',difficulty:'medium',type:'multi',tag:'Design the Experiment',
   q:'You need exactly 1.00 mol of CO2 from the reaction CH4 + 2 O2 → CO2 + 2 H2O. How many grams of CH4 must you burn? (MM: CH4 = 16.04 g/mol)',
   answer:16.04, tolerance:0.15, unit:'g CH4',
   solution:'<p>Mole ratio CH4:CO2 = 1:1. So 1.00 mol CO2 requires 1.00 mol CH4. 1.00 mol × 16.04 g/mol = <strong>16.04 g CH4</strong>.</p>'},

  {id:'p81',difficulty:'medium',type:'multi',tag:'Interpret Results',
   q:'A chemist synthesizes a compound. The theoretical yield is 25.0 g but the actual yield is 16.0 g. The percent yield is 64.0%. If the chemist improves the procedure to achieve 80.0% yield, how many grams would be collected? (Theoretical yield remains 25.0 g.)',
   answer:20.0, tolerance:0.3, unit:'g',
   solution:'<p>Actual yield = % yield × theoretical yield / 100 = 0.800 × 25.0 = <strong>20.0 g</strong>. The improved procedure would recover 20.0 g instead of 16.0 g.</p>'},

  /* ════════════ EXPANSION BATCH — 60 problems (20 easy / 25 medium / 15 hard) ════════════ */

  /* ── EASY (20) ── */
  {id:'p82',difficulty:'easy',type:'calc',tag:'mol → mol',q:'2 Al + 3 Cl2 → 2 AlCl3. How many moles of AlCl3 form from 4.00 mol of Al?',answer:4.00,tolerance:0.05,unit:'mol AlCl3',solution:'<p>4.00 mol Al × (2 mol AlCl3 / 2 mol Al) = <strong>4.00 mol AlCl3</strong>. The 2:2 ratio simplifies to 1:1.</p>'},
  {id:'p83',difficulty:'easy',type:'calc',tag:'mol → mol',q:'N2 + 3 H2 → 2 NH3. How many moles of NH3 form from 2.00 mol of H2?',answer:1.33,tolerance:0.03,unit:'mol NH3',solution:'<p>2.00 mol H2 × (2 mol NH3 / 3 mol H2) = <strong>1.33 mol NH3</strong>.</p>'},
  {id:'p84',difficulty:'easy',type:'calc',tag:'mol → mol',q:'2 H2O2 → 2 H2O + O2. How many moles of O2 form from 6.00 mol of H2O2?',answer:3.00,tolerance:0.05,unit:'mol O2',solution:'<p>6.00 mol H2O2 × (1 mol O2 / 2 mol H2O2) = <strong>3.00 mol O2</strong>.</p>'},
  {id:'p85',difficulty:'easy',type:'calc',tag:'% Yield',q:'A reaction has a theoretical yield of 25.0 g. The student collects 21.0 g. What is the percent yield?',answer:84.0,tolerance:0.5,unit:'%',solution:'<p>% yield = (21.0 / 25.0) × 100 = <strong>84.0%</strong>.</p>'},
  {id:'p86',difficulty:'easy',type:'calc',tag:'% Yield',q:'A reaction has a theoretical yield of 50.0 g. The student collects 45.0 g. What is the percent yield?',answer:90.0,tolerance:0.5,unit:'%',solution:'<p>% yield = (45.0 / 50.0) × 100 = <strong>90.0%</strong>.</p>'},
  {id:'p87',difficulty:'easy',type:'calc',tag:'mol → g',q:'N2 + 3 H2 → 2 NH3. How many grams of NH3 form from 0.400 mol of N2? (MM NH3 = 17.03 g/mol)',answer:13.62,tolerance:0.3,unit:'g NH3',solution:'<p>0.400 mol N2 × (2 mol NH3 / 1 mol N2) × (17.03 g/mol) = <strong>13.6 g NH3</strong>.</p>'},
  {id:'p88',difficulty:'easy',type:'calc',tag:'mol → g',q:'CaCO3 → CaO + CO2. How many grams of CaO form from 0.500 mol of CaCO3? (MM CaO = 56.08 g/mol)',answer:28.04,tolerance:0.4,unit:'g CaO',solution:'<p>0.500 mol CaCO3 × (1 mol CaO / 1 mol CaCO3) × (56.08 g/mol) = <strong>28.0 g CaO</strong>.</p>'},
  {id:'p89',difficulty:'easy',type:'calc',tag:'% Yield',q:'A student\'s actual yield is 9.00 g, and the percent yield was 75.0%. What was the theoretical yield?',answer:12.00,tolerance:0.2,unit:'g',solution:'<p>Theoretical = Actual ÷ (% yield/100) = 9.00 ÷ 0.750 = <strong>12.0 g</strong>.</p>'},
  {id:'p90',difficulty:'easy',type:'calc',tag:'% Yield',q:'The percent yield is 60.0% and the theoretical yield is 40.0 g. What is the actual yield?',answer:24.00,tolerance:0.3,unit:'g',solution:'<p>Actual = % yield × Theoretical / 100 = 0.600 × 40.0 = <strong>24.0 g</strong>.</p>'},
  {id:'p91',difficulty:'easy',type:'calc',tag:'mol → mol',q:'2 KClO3 → 2 KCl + 3 O2. How many moles of O2 form from 4.00 mol of KClO3?',answer:6.00,tolerance:0.1,unit:'mol O2',solution:'<p>4.00 mol KClO3 × (3 mol O2 / 2 mol KClO3) = <strong>6.00 mol O2</strong>.</p>'},
  {id:'p92',difficulty:'easy',type:'calc',tag:'mol → mol',q:'CaCO3 → CaO + CO2. How many moles of CO2 form from 2.50 mol of CaCO3?',answer:2.50,tolerance:0.05,unit:'mol CO2',solution:'<p>2.50 mol CaCO3 × (1 mol CO2 / 1 mol CaCO3) = <strong>2.50 mol CO2</strong>. The ratio is 1:1.</p>'},
  {id:'p93',difficulty:'easy',type:'calc',tag:'mol → g',q:'2 Mg + O2 → 2 MgO. How many grams of MgO form from 1.00 mol of Mg? (MM MgO = 40.30 g/mol)',answer:40.30,tolerance:0.4,unit:'g MgO',solution:'<p>1.00 mol Mg × (2 mol MgO / 2 mol Mg) × (40.30 g/mol) = <strong>40.3 g MgO</strong>.</p>'},
  {id:'p94',difficulty:'easy',type:'calc',tag:'mol → g',q:'4 Fe + 3 O2 → 2 Fe2O3. How many grams of Fe2O3 form from 2.00 mol of Fe? (MM Fe2O3 = 159.7 g/mol)',answer:159.7,tolerance:1.5,unit:'g Fe2O3',solution:'<p>2.00 mol Fe × (2 mol Fe2O3 / 4 mol Fe) × (159.7 g/mol) = <strong>159.7 g Fe2O3</strong>.</p>'},
  {id:'p95',difficulty:'easy',type:'calc',tag:'% Yield',q:'A reaction has a theoretical yield of 15.0 g. The student collects 12.0 g. What is the percent yield?',answer:80.0,tolerance:0.5,unit:'%',solution:'<p>% yield = (12.0 / 15.0) × 100 = <strong>80.0%</strong>.</p>'},
  {id:'p96',difficulty:'easy',type:'calc',tag:'% Yield',q:'A reaction has a theoretical yield of 70.0 g. The student collects 63.0 g. What is the percent yield?',answer:90.0,tolerance:0.5,unit:'%',solution:'<p>% yield = (63.0 / 70.0) × 100 = <strong>90.0%</strong>.</p>'},
  {id:'p97',difficulty:'easy',type:'concept',tag:'Mole Ratio',q:'In the equation 2Na + Cl2 → 2NaCl, what is the mole ratio of Na to NaCl?',choices:['1:1','2:1','1:2','2:3'],correct:0,solution:'<p>2 mol Na produces 2 mol NaCl. The ratio 2:2 simplifies to <strong>1:1</strong>.</p>'},
  {id:'p98',difficulty:'easy',type:'concept',tag:'Theoretical Yield',q:'When one reactant is in excess, which reactant determines the theoretical yield of product?',choices:['The limiting reactant','The excess reactant','Whichever reactant has the larger molar mass','Whichever reactant was added first'],correct:0,solution:'<p>The limiting reactant runs out first and caps how much product can possibly form — it always determines the theoretical yield, regardless of how much excess reactant remains.</p>'},
  {id:'p99',difficulty:'easy',type:'concept',tag:'Percent Yield',q:'For a percent yield calculation to be valid, the actual yield and theoretical yield must:',choices:['Be expressed in the same units','Both equal exactly 100 g','Come from different reactions','Always be whole numbers'],correct:0,solution:'<p>Since percent yield is actual ÷ theoretical × 100, both values must share the same units (usually grams) so they cancel correctly, leaving a unitless percentage.</p>'},
  {id:'p100',difficulty:'easy',type:'concept',tag:'Excess Reactant',q:'After a reaction goes to completion, which reactant is left over (unreacted)?',choices:['The excess reactant','The limiting reactant','Both reactants are always fully consumed','Neither — products are always leftover, not reactants'],correct:0,solution:'<p>By definition, the excess reactant is present in more than the amount needed to react completely with the limiting reactant, so some of it remains unreacted.</p>'},
  {id:'p101',difficulty:'easy',type:'concept',tag:'Stoichiometry Basics',q:'What is the very first thing you should check before starting any stoichiometry calculation?',choices:['That the chemical equation is balanced','That all masses are given in kilograms','That the reaction produces a gas','That a catalyst is present'],correct:0,solution:'<p>Every stoichiometry calculation relies on the coefficients representing correct mole ratios — which is only true if the equation is properly balanced first.</p>'},

  /* ── MEDIUM (25) ── */
  {id:'p102',difficulty:'medium',type:'calc',tag:'g → g',q:'Zn + 2HCl → ZnCl2 + H2. How many grams of H2 are produced from 10.0 g of Zn? (MM: Zn = 65.38, H2 = 2.016 g/mol)',answer:0.308,tolerance:0.02,unit:'g H2',solution:'<p>10.0 g Zn × (1 mol / 65.38 g) × (1 mol H2 / 1 mol Zn) × (2.016 g/mol) = <strong>0.308 g H2</strong>.</p>'},
  {id:'p103',difficulty:'medium',type:'calc',tag:'g → g',q:'2Na + Cl2 → 2NaCl. How many grams of NaCl are produced from 5.00 g of Na? (MM: Na = 22.99, NaCl = 58.44 g/mol)',answer:12.71,tolerance:0.2,unit:'g NaCl',solution:'<p>5.00 g Na × (1 mol / 22.99 g) × (2 mol NaCl / 2 mol Na) × (58.44 g/mol) = <strong>12.7 g NaCl</strong>.</p>'},
  {id:'p104',difficulty:'medium',type:'calc',tag:'g → g',q:'CuO + H2 → Cu + H2O. How many grams of Cu are produced from 20.0 g of CuO? (MM: CuO = 79.55, Cu = 63.55 g/mol)',answer:15.98,tolerance:0.3,unit:'g Cu',solution:'<p>20.0 g CuO × (1 mol / 79.55 g) × (1 mol Cu / 1 mol CuO) × (63.55 g/mol) = <strong>16.0 g Cu</strong>.</p>'},
  {id:'p105',difficulty:'medium',type:'calc',tag:'g → g',q:'2Fe + 3Cl2 → 2FeCl3. How many grams of FeCl3 are produced from 15.0 g of Fe? (MM: Fe = 55.85, FeCl3 = 162.2 g/mol)',answer:43.57,tolerance:0.4,unit:'g FeCl3',solution:'<p>15.0 g Fe × (1 mol / 55.85 g) × (2 mol FeCl3 / 2 mol Fe) × (162.2 g/mol) = <strong>43.6 g FeCl3</strong>.</p>'},
  {id:'p106',difficulty:'medium',type:'calc',tag:'g → g',q:'Mg + 2HCl → MgCl2 + H2. How many grams of MgCl2 are produced from 8.00 g of Mg? (MM: Mg = 24.31, MgCl2 = 95.21 g/mol)',answer:31.34,tolerance:0.3,unit:'g MgCl2',solution:'<p>8.00 g Mg × (1 mol / 24.31 g) × (1 mol MgCl2 / 1 mol Mg) × (95.21 g/mol) = <strong>31.3 g MgCl2</strong>.</p>'},
  {id:'p107',difficulty:'medium',type:'calc',tag:'% Yield',q:'The actual yield of a reaction is 14.5 g and the theoretical yield is 18.0 g. What is the percent yield?',answer:80.6,tolerance:0.6,unit:'%',solution:'<p>% yield = (14.5 / 18.0) × 100 = <strong>80.6%</strong>.</p>'},
  {id:'p108',difficulty:'medium',type:'calc',tag:'% Yield',q:'The actual yield is 33.6 g, and the percent yield was 84.0%. What was the theoretical yield?',answer:40.00,tolerance:0.4,unit:'g',solution:'<p>Theoretical = 33.6 ÷ 0.840 = <strong>40.0 g</strong>.</p>'},
  {id:'p109',difficulty:'medium',type:'calc',tag:'g → g',q:'2NaHCO3 → Na2CO3 + H2O + CO2. How many grams of CO2 form from 42.0 g of NaHCO3? (MM: NaHCO3 = 84.01, CO2 = 44.01 g/mol)',answer:11.00,tolerance:0.2,unit:'g CO2',solution:'<p>42.0 g NaHCO3 × (1 mol / 84.01 g) × (1 mol CO2 / 2 mol NaHCO3) × (44.01 g/mol) = <strong>11.0 g CO2</strong>.</p>'},
  {id:'p110',difficulty:'medium',type:'calc',tag:'g → g',q:'4NH3 + 5O2 → 4NO + 6H2O. How many grams of NO are produced from 34.0 g of NH3? (MM: NH3 = 17.03, NO = 30.01 g/mol)',answer:59.90,tolerance:0.5,unit:'g NO',solution:'<p>34.0 g NH3 × (1 mol / 17.03 g) × (4 mol NO / 4 mol NH3) × (30.01 g/mol) = <strong>59.9 g NO</strong>.</p>'},
  {id:'p111',difficulty:'medium',type:'concept',tag:'Limiting Reactant',q:'2KOH + H2SO4 → K2SO4 + 2H2O. You have 3.00 mol KOH and 2.00 mol H2SO4. Which is limiting?',choices:['KOH, because it would produce only 1.50 mol K2SO4 versus H2SO4\'s 2.00 mol','H2SO4, because it has a smaller coefficient','Neither — the amounts are already in the exact stoichiometric ratio','KOH, because it has the larger starting mole amount'],correct:0,solution:'<p>KOH: 3.00 mol × (1 mol K2SO4 / 2 mol KOH) = 1.50 mol K2SO4. H2SO4: 2.00 mol × (1 mol K2SO4 / 1 mol H2SO4) = 2.00 mol K2SO4. KOH produces less, so it is the limiting reactant.</p>'},
  {id:'p112',difficulty:'medium',type:'calc',tag:'g → g',q:'2KOH + H2SO4 → K2SO4 + 2H2O. How many grams of K2SO4 are produced from 22.4 g of KOH? (MM: KOH = 56.11, K2SO4 = 174.26 g/mol)',answer:34.79,tolerance:0.4,unit:'g K2SO4',solution:'<p>22.4 g KOH × (1 mol / 56.11 g) × (1 mol K2SO4 / 2 mol KOH) × (174.26 g/mol) = <strong>34.8 g K2SO4</strong>.</p>'},
  {id:'p113',difficulty:'medium',type:'calc',tag:'g → g',q:'BaCl2 + Na2SO4 → BaSO4 + 2NaCl. How many grams of BaSO4 precipitate form from 20.8 g of BaCl2? (MM: BaCl2 = 208.23, BaSO4 = 233.39 g/mol)',answer:23.31,tolerance:0.3,unit:'g BaSO4',solution:'<p>20.8 g BaCl2 × (1 mol / 208.23 g) × (1 mol BaSO4 / 1 mol BaCl2) × (233.39 g/mol) = <strong>23.3 g BaSO4</strong>.</p>'},
  {id:'p114',difficulty:'medium',type:'calc',tag:'g → g',q:'2H2O2 → 2H2O + O2. How many grams of O2 form from 34.0 g of H2O2? (MM: H2O2 = 34.01, O2 = 32.00 g/mol)',answer:15.99,tolerance:0.3,unit:'g O2',solution:'<p>34.0 g H2O2 × (1 mol / 34.01 g) × (1 mol O2 / 2 mol H2O2) × (32.00 g/mol) = <strong>16.0 g O2</strong>.</p>'},
  {id:'p115',difficulty:'medium',type:'calc',tag:'g → g',q:'Mg + 2HCl → MgCl2 + H2. How many grams of H2 form from 12.0 g of Mg? (MM: Mg = 24.31, H2 = 2.016 g/mol)',answer:0.995,tolerance:0.03,unit:'g H2',solution:'<p>12.0 g Mg × (1 mol / 24.31 g) × (1 mol H2 / 1 mol Mg) × (2.016 g/mol) = <strong>0.995 g H2</strong>.</p>'},
  {id:'p116',difficulty:'medium',type:'calc',tag:'g → g',q:'A car airbag inflates via 2NaN3 → 2Na + 3N2. How many grams of N2 form from 39.0 g of NaN3? (MM: NaN3 = 65.01, N2 = 28.01 g/mol)',answer:25.21,tolerance:0.3,unit:'g N2',solution:'<p>39.0 g NaN3 × (1 mol / 65.01 g) × (3 mol N2 / 2 mol NaN3) × (28.01 g/mol) = <strong>25.2 g N2</strong>.</p>'},
  {id:'p117',difficulty:'medium',type:'calc',tag:'% Yield',q:'The actual yield is 5.60 g and the percent yield was 70.0%. What was the theoretical yield?',answer:8.00,tolerance:0.15,unit:'g',solution:'<p>Theoretical = 5.60 ÷ 0.700 = <strong>8.00 g</strong>.</p>'},
  {id:'p118',difficulty:'medium',type:'calc',tag:'% Yield',q:'The theoretical yield is 60.0 g and the percent yield is 95.0%. What is the actual yield?',answer:57.00,tolerance:0.4,unit:'g',solution:'<p>Actual = 0.950 × 60.0 = <strong>57.0 g</strong>.</p>'},
  {id:'p119',difficulty:'medium',type:'calc',tag:'g → g',q:'4Al + 3O2 → 2Al2O3. How many grams of Al2O3 form from 40.0 g of Al? (MM: Al = 26.98, Al2O3 = 101.96 g/mol)',answer:75.58,tolerance:0.6,unit:'g Al2O3',solution:'<p>40.0 g Al × (1 mol / 26.98 g) × (2 mol Al2O3 / 4 mol Al) × (101.96 g/mol) = <strong>75.6 g Al2O3</strong>.</p>'},
  {id:'p120',difficulty:'medium',type:'calc',tag:'g → g',q:'SiO2 + 2C → Si + 2CO. How many grams of CO form from 30.0 g of SiO2? (MM: SiO2 = 60.08, CO = 28.01 g/mol)',answer:27.97,tolerance:0.3,unit:'g CO',solution:'<p>30.0 g SiO2 × (1 mol / 60.08 g) × (2 mol CO / 1 mol SiO2) × (28.01 g/mol) = <strong>28.0 g CO</strong>.</p>'},
  {id:'p121',difficulty:'medium',type:'concept',tag:'Limiting Reactant',q:'2Al + 3Cl2 → 2AlCl3. You have 2.00 mol Al and 2.00 mol Cl2. Which is limiting?',choices:['Cl2, because it would only produce 1.33 mol AlCl3, versus Al\'s 2.00 mol','Al, because it has a smaller coefficient','Neither — the amounts are in the exact stoichiometric ratio','Cl2, because it has a larger molar mass'],correct:0,solution:'<p>Al: 2.00 mol × (2/2) = 2.00 mol AlCl3 possible. Cl2: 2.00 mol × (2/3) = 1.33 mol AlCl3 possible. Cl2 produces less, so it is the limiting reactant.</p>'},
  {id:'p122',difficulty:'medium',type:'calc',tag:'g → g',q:'2C2H2 + 5O2 → 4CO2 + 2H2O. How many grams of CO2 form from 13.0 g of C2H2? (MM: C2H2 = 26.04, CO2 = 44.01 g/mol)',answer:43.94,tolerance:0.4,unit:'g CO2',solution:'<p>13.0 g C2H2 × (1 mol / 26.04 g) × (4 mol CO2 / 2 mol C2H2) × (44.01 g/mol) = <strong>43.9 g CO2</strong>.</p>'},
  {id:'p123',difficulty:'medium',type:'calc',tag:'g → g',q:'Calcium carbide reacts with water: CaC2 + 2H2O → Ca(OH)2 + C2H2. How many grams of Ca(OH)2 form from 16.0 g of CaC2? (MM: CaC2 = 64.10, Ca(OH)2 = 74.09 g/mol)',answer:18.49,tolerance:0.3,unit:'g Ca(OH)2',solution:'<p>16.0 g CaC2 × (1 mol / 64.10 g) × (1 mol Ca(OH)2 / 1 mol CaC2) × (74.09 g/mol) = <strong>18.5 g Ca(OH)2</strong>.</p>'},
  {id:'p124',difficulty:'medium',type:'calc',tag:'mol → g',q:'2Al + 3H2SO4 → Al2(SO4)3 + 3H2. If a reaction produces 0.750 mol of Al2(SO4)3, how many grams of H2 also formed? (MM H2 = 2.016 g/mol)',answer:4.54,tolerance:0.1,unit:'g H2',solution:'<p>0.750 mol Al2(SO4)3 × (3 mol H2 / 1 mol Al2(SO4)3) × (2.016 g/mol) = <strong>4.54 g H2</strong>.</p>'},
  {id:'p125',difficulty:'medium',type:'calc',tag:'g → g',q:'CuO + H2 → Cu + H2O. How many grams of H2O form from 15.9 g of CuO? (MM: CuO = 79.55, H2O = 18.02 g/mol)',answer:3.60,tolerance:0.1,unit:'g H2O',solution:'<p>15.9 g CuO × (1 mol / 79.55 g) × (1 mol H2O / 1 mol CuO) × (18.02 g/mol) = <strong>3.60 g H2O</strong>.</p>'},
  {id:'p126',difficulty:'medium',type:'calc',tag:'g → g',q:'2NaHCO3 → Na2CO3 + H2O + CO2. How many grams of Na2CO3 form from 16.8 g of NaHCO3? (MM: NaHCO3 = 84.01, Na2CO3 = 105.99 g/mol)',answer:10.60,tolerance:0.2,unit:'g Na2CO3',solution:'<p>16.8 g NaHCO3 × (1 mol / 84.01 g) × (1 mol Na2CO3 / 2 mol NaHCO3) × (105.99 g/mol) = <strong>10.6 g Na2CO3</strong>.</p>'},

  /* ── HARD (15) ── */
  {id:'p127',difficulty:'hard',type:'multi',tag:'LR + Product Mass',q:'2Al + 3Cl2 → 2AlCl3. You have 10.0 g of Al and 20.0 g of Cl2. Find the limiting reactant and the theoretical yield of AlCl3. (MM: Al = 26.98, Cl2 = 70.90, AlCl3 = 133.34 g/mol)',answer:25.07,tolerance:0.5,unit:'g AlCl3',solution:'<p>Al: 10.0/26.98 = 0.371 mol → 0.371 mol AlCl3 → 49.4 g. Cl2: 20.0/70.90 = 0.282 mol → 0.188 mol AlCl3 → 25.1 g. <strong>Cl2 is limiting → 25.1 g AlCl3</strong>.</p>'},
  {id:'p128',difficulty:'hard',type:'multi',tag:'LR + % Yield',q:'N2 + 3H2 → 2NH3. You start with 20.0 g N2 and 5.00 g H2. The actual yield of NH3 is 20.0 g. What is the percent yield? (MM: N2 = 28.01, H2 = 2.016, NH3 = 17.03 g/mol)',answer:82.2,tolerance:0.8,unit:'%',solution:'<p>N2: 20.0/28.01 = 0.714 mol → 1.428 mol NH3 → 24.3 g. H2: 5.00/2.016 = 2.480 mol → 1.653 mol NH3 → 28.2 g. N2 makes less → <strong>N2 is LR, theor = 24.3 g NH3</strong>. % yield = (20.0/24.3) × 100 = <strong>82.2%</strong>.</p>'},
  {id:'p129',difficulty:'hard',type:'multi',tag:'Excess Reactant',q:'2Mg + O2 → 2MgO. You start with 10.0 g Mg and 10.0 g O2. Mg is the limiting reactant. How many grams of O2 are left over? (MM: Mg = 24.31, O2 = 32.00 g/mol)',answer:3.42,tolerance:0.2,unit:'g O2',solution:'<p>Mol Mg = 10.0/24.31 = 0.4114 mol. O2 required = 0.4114/2 = 0.2057 mol. Available O2 = 10.0/32.00 = 0.3125 mol. Excess O2 = 0.3125 - 0.2057 = 0.1068 mol × 32.00 = <strong>3.42 g O2 left over</strong>.</p>'},
  {id:'p130',difficulty:'hard',type:'multi',tag:'Multi-step Chain',q:'Limestone is heated (CaCO3 → CaO + CO2), then the CaO is slaked with water (CaO + H2O → Ca(OH)2). Starting with 25.0 g of CaCO3, how many grams of Ca(OH)2 are ultimately produced? (MM: CaCO3 = 100.09, Ca(OH)2 = 74.09 g/mol)',answer:18.51,tolerance:0.3,unit:'g Ca(OH)2',solution:'<p>Both reactions have 1:1:1 ratios all the way through, so mol Ca(OH)2 = mol CaCO3. 25.0 g CaCO3 × (1 mol / 100.09 g) × (74.09 g/mol) = <strong>18.5 g Ca(OH)2</strong>.</p>'},
  {id:'p131',difficulty:'hard',type:'multi',tag:'Back-solve',q:'2H2 + O2 → 2H2O. A chemist wants to collect 36.0 g of H2O (actual yield), and the reaction typically runs at 75.0% yield. How many grams of H2 must be used (assuming H2 is the limiting reactant)? (MM: H2 = 2.016, H2O = 18.02 g/mol)',answer:5.37,tolerance:0.15,unit:'g H2',solution:'<p>First find the theoretical yield needed: 36.0 g ÷ 0.750 = 48.0 g H2O (theoretical). Then work backward: 48.0 g H2O × (1 mol / 18.02 g) × (2 mol H2 / 2 mol H2O) × (2.016 g/mol) = <strong>5.37 g H2</strong>.</p>'},
  {id:'p132',difficulty:'hard',type:'multi',tag:'LR + % Yield',q:'4Al + 3O2 → 2Al2O3. You start with 15.0 g Al and 15.0 g O2. The actual yield of Al2O3 is 22.0 g. What is the percent yield? (MM: Al = 26.98, O2 = 32.00, Al2O3 = 101.96 g/mol)',answer:77.6,tolerance:0.8,unit:'%',solution:'<p>Al: 15.0/26.98 = 0.556 mol → 0.278 mol Al2O3 → 28.3 g. O2: 15.0/32.00 = 0.469 mol → 0.313 mol Al2O3 → 31.9 g. Al makes less → <strong>Al is LR, theor = 28.3 g</strong>. % yield = (22.0/28.3) × 100 = <strong>77.6%</strong>.</p>'},
  {id:'p133',difficulty:'hard',type:'multi',tag:'Excess Reactant',q:'Zn + 2HCl → ZnCl2 + H2. You start with 20.0 g Zn and 20.0 g HCl. HCl is the limiting reactant. How many grams of Zn are left over? (MM: Zn = 65.38, HCl = 36.46 g/mol)',answer:2.07,tolerance:0.15,unit:'g Zn',solution:'<p>Mol HCl = 20.0/36.46 = 0.5485 mol. Zn required = 0.5485/2 = 0.2743 mol. Available Zn = 20.0/65.38 = 0.3059 mol. Excess Zn = 0.3059 - 0.2743 = 0.0316 mol × 65.38 = <strong>2.07 g Zn left over</strong>.</p>'},
  {id:'p134',difficulty:'hard',type:'calc',tag:'g → g',q:'2C4H10 + 13O2 → 8CO2 + 10H2O (butane combustion). How many grams of CO2 form from 29.0 g of C4H10? (MM: C4H10 = 58.12, CO2 = 44.01 g/mol)',answer:87.83,tolerance:0.7,unit:'g CO2',solution:'<p>29.0 g C4H10 × (1 mol / 58.12 g) × (8 mol CO2 / 2 mol C4H10) × (44.01 g/mol) = <strong>87.8 g CO2</strong>.</p>'},
  {id:'p135',difficulty:'hard',type:'calc',tag:'g → g',q:'CaC2 + 2H2O → Ca(OH)2 + C2H2. How many grams of C2H2 form from 32.0 g of CaC2? (MM: CaC2 = 64.10, C2H2 = 26.04 g/mol)',answer:13.00,tolerance:0.2,unit:'g C2H2',solution:'<p>32.0 g CaC2 × (1 mol / 64.10 g) × (1 mol C2H2 / 1 mol CaC2) × (26.04 g/mol) = <strong>13.0 g C2H2</strong>.</p>'},
  {id:'p136',difficulty:'hard',type:'calc',tag:'g → g',q:'SiO2 + 2C → Si + 2CO. How many grams of Si form from 60.0 g of SiO2? (MM: SiO2 = 60.08, Si = 28.09 g/mol)',answer:28.05,tolerance:0.3,unit:'g Si',solution:'<p>60.0 g SiO2 × (1 mol / 60.08 g) × (1 mol Si / 1 mol SiO2) × (28.09 g/mol) = <strong>28.0 g Si</strong>.</p>'},
  {id:'p137',difficulty:'hard',type:'multi',tag:'LR + % Yield',q:'2C4H10 + 13O2 → 8CO2 + 10H2O. You start with 20.0 g C4H10 and 80.0 g O2. The actual yield of CO2 is 45.0 g. What is the percent yield? (MM: C4H10 = 58.12, O2 = 32.00, CO2 = 44.01 g/mol)',answer:74.3,tolerance:0.8,unit:'%',solution:'<p>C4H10: 20.0/58.12 = 0.344 mol → 1.376 mol CO2 → 60.6 g. O2: 80.0/32.00 = 2.500 mol → 1.538 mol CO2 → 67.7 g. C4H10 makes less → <strong>C4H10 is LR, theor = 60.6 g</strong>. % yield = (45.0/60.6) × 100 = <strong>74.3%</strong>.</p>'},
  {id:'p138',difficulty:'hard',type:'multi',tag:'Excess Reactant',q:'Zn + 2HCl → ZnCl2 + H2. You start with 15.0 g Zn and 30.0 g HCl. Zn is the limiting reactant. How many grams of HCl are left over? (MM: Zn = 65.38, HCl = 36.46 g/mol)',answer:13.27,tolerance:0.5,unit:'g HCl',solution:'<p>Mol Zn = 15.0/65.38 = 0.2294 mol. HCl required = 0.2294 × 2 = 0.4588 mol. Available HCl = 30.0/36.46 = 0.8228 mol. Excess HCl = 0.8228 - 0.4588 = 0.3640 mol × 36.46 = <strong>13.27 g HCl left over</strong>.</p>'},
  {id:'p139',difficulty:'hard',type:'multi',tag:'Multi-step Chain',q:'Limestone is heated (CaCO3 → CaO + CO2), then the CaO is slaked with water (CaO + H2O → Ca(OH)2). Starting with 40.0 g of CaCO3, how many grams of Ca(OH)2 are ultimately produced? (MM: CaCO3 = 100.09, Ca(OH)2 = 74.09 g/mol)',answer:29.61,tolerance:0.4,unit:'g Ca(OH)2',solution:'<p>Both steps carry a 1:1:1 mole ratio through to Ca(OH)2. 40.0 g CaCO3 × (1 mol / 100.09 g) × (74.09 g/mol) = <strong>29.6 g Ca(OH)2</strong>.</p>'},
  {id:'p140',difficulty:'hard',type:'multi',tag:'Back-solve',q:'N2 + 3H2 → 2NH3. A chemist wants an actual yield of 25.0 g NH3, and the process runs at 65.0% yield. How many grams of N2 are needed (assuming N2 is the limiting reactant)? (MM: N2 = 28.01, NH3 = 17.03 g/mol)',answer:31.63,tolerance:0.6,unit:'g N2',solution:'<p>Theoretical yield needed: 25.0 ÷ 0.650 = 38.46 g NH3. Working backward: 38.46 g NH3 × (1 mol / 17.03 g) × (1 mol N2 / 2 mol NH3) × (28.01 g/mol) = <strong>31.6 g N2</strong>.</p>'},
  {id:'p141',difficulty:'hard',type:'multi',tag:'LR + % Yield',q:'N2 + 3H2 → 2NH3. You start with 12.0 g N2 and 12.0 g H2. The actual yield of NH3 is 10.0 g. What is the percent yield? (MM: N2 = 28.01, H2 = 2.016, NH3 = 17.03 g/mol)',answer:68.5,tolerance:0.8,unit:'%',solution:'<p>N2: 12.0/28.01 = 0.428 mol → 0.857 mol NH3 → 14.6 g. H2: 12.0/2.016 = 5.952 mol → 3.968 mol NH3 → 67.6 g. N2 makes less → <strong>N2 is LR, theor = 14.6 g</strong>. % yield = (10.0/14.6) × 100 = <strong>68.5%</strong>.</p>'},

  /* ════════════ HARD EXPANSION BATCH — 30 additional hard problems ════════════ */
  {id:'p142',difficulty:'hard',type:'multi',tag:'LR + Product Mass',q:'4Al + 3O2 → 2Al2O3. You have 20.0 g of Al and 15.0 g of O2. Find the limiting reactant and the theoretical yield of Al2O3. (MM: Al = 26.98, O2 = 32.00, Al2O3 = 101.96 g/mol)',answer:31.86,tolerance:0.5,unit:'g Al2O3',solution:'<p>Al: 20.0/26.98 = 0.741 mol → 0.371 mol Al2O3 → 37.8 g. O2: 15.0/32.00 = 0.469 mol → 0.313 mol Al2O3 → 31.9 g. <strong>O2 is limiting → 31.9 g Al2O3</strong>.</p>'},
  {id:'p143',difficulty:'hard',type:'calc',tag:'g → g',q:'2C2H2 + 5O2 → 4CO2 + 2H2O. How many grams of H2O form from 25.0 g of O2? (MM: O2 = 32.00, H2O = 18.02 g/mol)',answer:5.63,tolerance:0.15,unit:'g H2O',solution:'<p>25.0 g O2 × (1 mol / 32.00 g) × (2 mol H2O / 5 mol O2) × (18.02 g/mol) = <strong>5.63 g H2O</strong>.</p>'},
  {id:'p144',difficulty:'hard',type:'multi',tag:'LR + Product Mass',q:'2Na + Cl2 → 2NaCl. You have 10.0 g of Na and 10.0 g of Cl2. Find the limiting reactant and the theoretical yield of NaCl. (MM: Na = 22.99, Cl2 = 70.90, NaCl = 58.44 g/mol)',answer:16.48,tolerance:0.3,unit:'g NaCl',solution:'<p>Na: 10.0/22.99 = 0.435 mol → 0.435 mol NaCl → 25.4 g. Cl2: 10.0/70.90 = 0.141 mol → 0.282 mol NaCl → 16.5 g. <strong>Cl2 is limiting → 16.5 g NaCl</strong>.</p>'},
  {id:'p145',difficulty:'hard',type:'multi',tag:'LR + % Yield',q:'2Fe + 3Cl2 → 2FeCl3. You start with 10.0 g Fe and 30.0 g Cl2. The actual yield of FeCl3 is 25.0 g. What is the percent yield? (MM: Fe = 55.85, Cl2 = 70.90, FeCl3 = 162.2 g/mol)',answer:86.1,tolerance:0.8,unit:'%',solution:'<p>Fe: 10.0/55.85 = 0.179 mol → 0.179 mol FeCl3 → 29.0 g. Cl2: 30.0/70.90 = 0.423 mol → 0.282 mol FeCl3 → 45.8 g. Fe makes less → <strong>Fe is LR, theor = 29.0 g</strong>. % yield = (25.0/29.0) × 100 = <strong>86.1%</strong>.</p>'},
  {id:'p146',difficulty:'hard',type:'multi',tag:'LR + % Yield',q:'Mg + 2HCl → MgCl2 + H2. You start with 6.00 g Mg and 20.0 g HCl. The actual yield of H2 is 0.450 g. What is the percent yield? (MM: Mg = 24.31, HCl = 36.46, H2 = 2.016 g/mol)',answer:90.4,tolerance:1.0,unit:'%',solution:'<p>Mg: 6.00/24.31 = 0.247 mol → 0.247 mol H2 → 0.498 g. HCl: 20.0/36.46 = 0.549 mol → 0.274 mol H2 → 0.553 g. Mg makes less → <strong>Mg is LR, theor = 0.498 g</strong>. % yield = (0.450/0.498) × 100 = <strong>90.4%</strong>.</p>'},
  {id:'p147',difficulty:'hard',type:'multi',tag:'Excess Reactant',q:'2Fe + 3Cl2 → 2FeCl3. You start with 10.0 g Fe and 30.0 g Cl2. Fe is the limiting reactant. How many grams of Cl2 are left over? (MM: Fe = 55.85, Cl2 = 70.90 g/mol)',answer:10.95,tolerance:0.4,unit:'g Cl2',solution:'<p>Mol Fe = 10.0/55.85 = 0.1791 mol. Cl2 required = 0.1791 × (3/2) = 0.2686 mol. Available Cl2 = 30.0/70.90 = 0.4232 mol. Excess Cl2 = 0.4232 - 0.2686 = 0.1546 mol × 70.90 = <strong>10.95 g Cl2 left over</strong>.</p>'},
  {id:'p148',difficulty:'hard',type:'multi',tag:'Multi-step Chain',q:'Calcium carbide reacts with water (CaC2 + 2H2O → Ca(OH)2 + C2H2), and the acetylene gas produced is then burned (2C2H2 + 5O2 → 4CO2 + 2H2O). Starting with 25.0 g of CaC2, how many grams of CO2 are ultimately produced? (MM: CaC2 = 64.10, C2H2 = 26.04, CO2 = 44.01 g/mol)',answer:34.33,tolerance:0.5,unit:'g CO2',solution:'<p>Step 1: 25.0 g CaC2 × (1 mol / 64.10 g) × (26.04 g/mol) = 10.16 g C2H2.<br>Step 2: 10.16 g C2H2 × (1 mol / 26.04 g) × (4 mol CO2 / 2 mol C2H2) × (44.01 g/mol) = <strong>34.3 g CO2</strong>.</p>'},
  {id:'p149',difficulty:'hard',type:'multi',tag:'Back-solve',q:'CuO + H2 → Cu + H2O. A chemist wants an actual yield of 15.0 g of Cu, and the reduction runs at 88.0% yield. How many grams of CuO are needed? (MM: CuO = 79.55, Cu = 63.55 g/mol)',answer:21.34,tolerance:0.4,unit:'g CuO',solution:'<p>Theoretical Cu needed: 15.0 ÷ 0.880 = 17.05 g Cu. Working backward: 17.05 g Cu × (1 mol / 63.55 g) × (1 mol CuO / 1 mol Cu) × (79.55 g/mol) = <strong>21.3 g CuO</strong>.</p>'},
  {id:'p150',difficulty:'hard',type:'multi',tag:'LR + % Yield',q:'4NH3 + 5O2 → 4NO + 6H2O. You start with 17.0 g NH3 and 40.0 g O2. The actual yield of NO is 20.0 g. What is the percent yield? (MM: NH3 = 17.03, O2 = 32.00, NO = 30.01 g/mol)',answer:66.8,tolerance:0.8,unit:'%',solution:'<p>NH3: 17.0/17.03 = 0.998 mol → 0.998 mol NO → 30.0 g. O2: 40.0/32.00 = 1.250 mol → 1.000 mol NO → 30.0 g. Nearly tied — NH3 is limiting by a hair: <strong>theor = 30.0 g NO</strong>. % yield = (20.0/30.0) × 100 = <strong>66.8%</strong>.</p>'},
  {id:'p151',difficulty:'hard',type:'multi',tag:'LR + Product Mass',q:'N2 + 3H2 → 2NH3. You have 28.0 g of N2 and 9.00 g of H2. Find the limiting reactant and the theoretical yield of NH3. (MM: N2 = 28.01, H2 = 2.016, NH3 = 17.03 g/mol)',answer:34.04,tolerance:0.5,unit:'g NH3',solution:'<p>N2: 28.0/28.01 = 0.9996 mol → 1.999 mol NH3 → 34.0 g. H2: 9.00/2.016 = 4.464 mol → 2.976 mol NH3 → 50.7 g. <strong>N2 is limiting → 34.0 g NH3</strong>.</p>'},
  {id:'p152',difficulty:'hard',type:'concept',tag:'Percent Yield',q:'A student calculates a NEGATIVE percent yield for their experiment. What does this indicate?',choices:['A calculation error occurred — percent yield can never be negative, since both actual and theoretical yields must be positive masses','The reaction consumed product instead of forming it','The reaction is exothermic','Negative percent yield is normal for gas-producing reactions'],correct:0,solution:'<p>Both actual and theoretical yield are always positive physical masses, so their ratio (and therefore percent yield) can never be negative. A negative result always points to an arithmetic or sign error somewhere in the calculation.</p>'},
  {id:'p153',difficulty:'hard',type:'concept',tag:'Percent Yield',q:'Two students run the identical reaction with identical starting masses (same limiting reactant amount) but report different percent yields. What does this best illustrate?',choices:['Percent yield depends heavily on experimental technique and lab conditions, not just the starting amounts — the same theoretical yield can lead to different actual yields due to losses, technique, or side reactions','One of the students must have made a math error, since identical inputs must give identical percent yields','Percent yield is meaningless if two students get different values','The theoretical yield must have been different for each student'],correct:0,solution:'<p>Theoretical yield is fixed by stoichiometry and starting amounts (identical here). Actual yield, however, depends on real-world factors like technique, spills, and side reactions — which naturally vary between students, producing different percent yields from the same theoretical starting point.</p>'},
  {id:'p154',difficulty:'hard',type:'concept',tag:'Excess Reactant',q:'A reaction leaves excess reactant B unreacted. If you wanted to consume ALL of reactant B with nothing left over, what change would accomplish this?',choices:['Add more of reactant A (the limiting reactant) in the correct stoichiometric ratio until B is no longer in excess','Remove some of reactant B until it matches the amount of A','Increase the temperature of the reaction only','Nothing can be done — some reactant is always left over'],correct:0,solution:'<p>Excess reactant remains simply because there isn\'t enough of the limiting reactant to consume it all. Adding more of the limiting reactant (in the correct mole ratio) would allow the reaction to consume the previously-excess reactant completely.</p>'},
  {id:'p155',difficulty:'hard',type:'concept',tag:'Percent Yield',q:'Why can a percent yield calculation never have a theoretical yield of zero in the denominator?',choices:['Dividing by zero is undefined; a theoretical yield of zero would mean the reaction is predicted to produce no product at all, making the percent yield calculation meaningless','Zero is not allowed in chemistry formulas by convention','A theoretical yield of zero always indicates a typo','Percent yield formulas automatically round zero up to a small positive number'],correct:0,solution:'<p>Mathematically, division by zero is undefined. Chemically, a theoretical yield of exactly zero would mean stoichiometry predicts no product should form at all — in which case comparing an actual yield to "zero expected" has no meaningful interpretation.</p>'},
  {id:'p156',difficulty:'hard',type:'calc',tag:'g → g',q:'2NaHCO3 → Na2CO3 + H2O + CO2. How many grams of H2O form from 84.0 g of NaHCO3? (MM: NaHCO3 = 84.01, H2O = 18.02 g/mol)',answer:9.01,tolerance:0.2,unit:'g H2O',solution:'<p>84.0 g NaHCO3 × (1 mol / 84.01 g) × (1 mol H2O / 2 mol NaHCO3) × (18.02 g/mol) = <strong>9.01 g H2O</strong>.</p>'},
  {id:'p157',difficulty:'hard',type:'multi',tag:'Excess Reactant',q:'N2 + 3H2 → 2NH3. You start with 28.0 g N2 and 9.00 g H2. N2 is the limiting reactant. How many grams of H2 are left over? (MM: N2 = 28.01, H2 = 2.016 g/mol)',answer:2.96,tolerance:0.2,unit:'g H2',solution:'<p>Mol N2 = 28.0/28.01 = 0.9996 mol. H2 required = 0.9996 × 3 = 2.999 mol. Available H2 = 9.00/2.016 = 4.464 mol. Excess H2 = 4.464 - 2.999 = 1.465 mol × 2.016 = <strong>2.96 g H2 left over</strong>.</p>'},
  {id:'p158',difficulty:'hard',type:'calc',tag:'g → g',q:'4NH3 + 5O2 → 4NO + 6H2O. How many grams of H2O form from 51.0 g of NH3? (MM: NH3 = 17.03, H2O = 18.02 g/mol)',answer:80.92,tolerance:0.7,unit:'g H2O',solution:'<p>51.0 g NH3 × (1 mol / 17.03 g) × (6 mol H2O / 4 mol NH3) × (18.02 g/mol) = <strong>80.9 g H2O</strong>.</p>'},
  {id:'p159',difficulty:'hard',type:'multi',tag:'Back-solve',q:'2Al + 3Cl2 → 2AlCl3. A chemist wants an actual yield of 80.0 g of AlCl3, running the reaction at 90.0% yield. How many grams of Al are needed (assuming Al is the limiting reactant)? (MM: Al = 26.98, AlCl3 = 133.34 g/mol)',answer:17.99,tolerance:0.4,unit:'g Al',solution:'<p>Theoretical AlCl3 needed: 80.0 ÷ 0.900 = 88.9 g. Working backward: 88.9 g AlCl3 × (1 mol / 133.34 g) × (2 mol Al / 2 mol AlCl3) × (26.98 g/mol) = <strong>18.0 g Al</strong>.</p>'},
  {id:'p160',difficulty:'hard',type:'multi',tag:'LR + % Yield',q:'2Na + Cl2 → 2NaCl. You start with 10.0 g Na and 10.0 g Cl2. The actual yield of NaCl is 15.0 g. What is the percent yield? (MM: Na = 22.99, Cl2 = 70.90, NaCl = 58.44 g/mol)',answer:91.0,tolerance:1.0,unit:'%',solution:'<p>Na: 10.0/22.99 = 0.435 mol → 0.435 mol NaCl → 25.4 g. Cl2: 10.0/70.90 = 0.141 mol → 0.282 mol NaCl → 16.5 g. Cl2 makes less → <strong>Cl2 is LR, theor = 16.5 g</strong>. % yield = (15.0/16.5) × 100 = <strong>91.0%</strong>.</p>'},
  {id:'p161',difficulty:'hard',type:'calc',tag:'g → g',q:'CaC2 + 2H2O → Ca(OH)2 + C2H2. How many grams of Ca(OH)2 form from 50.0 g of CaC2? (MM: CaC2 = 64.10, Ca(OH)2 = 74.09 g/mol)',answer:57.79,tolerance:0.6,unit:'g Ca(OH)2',solution:'<p>50.0 g CaC2 × (1 mol / 64.10 g) × (1 mol Ca(OH)2 / 1 mol CaC2) × (74.09 g/mol) = <strong>57.8 g Ca(OH)2</strong>.</p>'},
  {id:'p162',difficulty:'hard',type:'multi',tag:'Excess Reactant',q:'4Al + 3O2 → 2Al2O3. You start with 20.0 g Al and 15.0 g O2. O2 is the limiting reactant. How many grams of Al are left over? (MM: Al = 26.98, O2 = 32.00 g/mol)',answer:3.14,tolerance:0.2,unit:'g Al',solution:'<p>Mol O2 = 15.0/32.00 = 0.4688 mol. Al required = 0.4688 × (4/3) = 0.6250 mol. Available Al = 20.0/26.98 = 0.7413 mol. Excess Al = 0.7413 - 0.6250 = 0.1163 mol × 26.98 = <strong>3.14 g Al left over</strong>.</p>'},
  {id:'p163',difficulty:'hard',type:'calc',tag:'g → g',q:'SiO2 + 2C → Si + 2CO. How many grams of C are needed to fully react with 45.0 g of SiO2? (MM: SiO2 = 60.08, C = 12.01 g/mol)',answer:17.99,tolerance:0.3,unit:'g C',solution:'<p>45.0 g SiO2 × (1 mol / 60.08 g) × (2 mol C / 1 mol SiO2) × (12.01 g/mol) = <strong>18.0 g C</strong>.</p>'},
  {id:'p164',difficulty:'hard',type:'multi',tag:'Multi-step Chain',q:'2KClO3 → 2KCl + 3O2. Starting with 61.25 g of KClO3: (a) how many moles of O2 form? (b) how many grams of O2 form? Report grams of O2. (MM: KClO3 = 122.55, O2 = 32.00 g/mol)',answer:23.99,tolerance:0.4,unit:'g O2',solution:'<p>(a) 61.25 g KClO3 × (1 mol / 122.55 g) × (3 mol O2 / 2 mol KClO3) = 0.750 mol O2.<br>(b) 0.750 mol O2 × (32.00 g/mol) = <strong>24.0 g O2</strong>.</p>'},
  {id:'p165',difficulty:'hard',type:'multi',tag:'Back-solve',q:'Zn + 2HCl → ZnCl2 + H2. A chemist wants an actual yield of 2.00 g of H2, running the reaction at 85.0% yield. How many grams of Zn are needed (assuming Zn is limiting)? (MM: Zn = 65.38, H2 = 2.016 g/mol)',answer:76.31,tolerance:1.5,unit:'g Zn',solution:'<p>Theoretical H2 needed: 2.00 ÷ 0.850 = 2.353 g. Working backward: 2.353 g H2 × (1 mol / 2.016 g) × (1 mol Zn / 1 mol H2) × (65.38 g/mol) = <strong>76.3 g Zn</strong>.</p>'},
  {id:'p166',difficulty:'hard',type:'calc',tag:'g → g',q:'BaCl2 + Na2SO4 → BaSO4 + 2NaCl. How many grams of NaCl form from 41.6 g of BaCl2? (MM: BaCl2 = 208.23, NaCl = 58.44 g/mol)',answer:23.35,tolerance:0.4,unit:'g NaCl',solution:'<p>41.6 g BaCl2 × (1 mol / 208.23 g) × (2 mol NaCl / 1 mol BaCl2) × (58.44 g/mol) = <strong>23.3 g NaCl</strong>.</p>'},
  {id:'p167',difficulty:'hard',type:'multi',tag:'LR + % Yield',q:'2KOH + H2SO4 → K2SO4 + 2H2O. You start with 20.0 g KOH and 15.0 g H2SO4. The actual yield of K2SO4 is 25.0 g. What is the percent yield? (MM: KOH = 56.11, H2SO4 = 98.08, K2SO4 = 174.26 g/mol)',answer:93.8,tolerance:1.0,unit:'%',solution:'<p>KOH: 20.0/56.11 = 0.356 mol → 0.178 mol K2SO4 → 31.1 g. H2SO4: 15.0/98.08 = 0.153 mol → 0.153 mol K2SO4 → 26.7 g. H2SO4 makes less → <strong>H2SO4 is LR, theor = 26.7 g</strong>. % yield = (25.0/26.7) × 100 = <strong>93.8%</strong>.</p>'},
  {id:'p168',difficulty:'hard',type:'concept',tag:'Limiting Reactant',q:'Why is it incorrect to identify the limiting reactant by simply comparing the given masses in grams (e.g., "10 g must be limiting because it\'s less than 20 g")?',choices:['Different substances have different molar masses, so equal or unequal masses do NOT correspond to equal or unequal mole amounts — moles (not grams) are what the balanced equation\'s ratios actually govern', 'Grams are never a valid unit for any chemistry calculation', 'Mass comparisons only work for gases, not solids or liquids', 'The limiting reactant is always whichever substance is listed first in the equation'], correct:0, solution:'<p>The stoichiometric ratios in a balanced equation are mole ratios. Two different substances with the same mass in grams can represent very different numbers of moles (and therefore very different amounts relative to what the equation requires) — so grams alone can never reliably identify the limiting reactant.</p>'},
  {id:'p169',difficulty:'hard',type:'concept',tag:'Theoretical Yield',q:'Does the amount of EXCESS reactant present affect the calculated theoretical yield of a reaction?',choices:['No — theoretical yield is calculated entirely from the limiting reactant; having more or less excess reactant (as long as it remains in excess) does not change the theoretical yield at all', 'Yes — more excess reactant always increases theoretical yield proportionally', 'Yes — excess reactant and limiting reactant are averaged together to find theoretical yield', 'It depends on whether the reaction is exothermic or endothermic'], correct:0, solution:'<p>Once a reactant is confirmed to be in excess, its exact quantity is irrelevant to the theoretical yield calculation — the limiting reactant alone determines how much product can form, regardless of how much extra excess reactant is sitting around unused.</p>'},
  {id:'p170',difficulty:'hard',type:'calc',tag:'g → g',q:'2C4H10 + 13O2 → 8CO2 + 10H2O. How many grams of H2O form from 58.0 g of C4H10? (MM: C4H10 = 58.12, H2O = 18.02 g/mol)',answer:89.88,tolerance:0.8,unit:'g H2O',solution:'<p>58.0 g C4H10 × (1 mol / 58.12 g) × (10 mol H2O / 2 mol C4H10) × (18.02 g/mol) = <strong>89.9 g H2O</strong>.</p>'},
  {id:'p171',difficulty:'hard',type:'multi',tag:'% Yield',q:'CaCO3 → CaO + CO2. A chemist starts with 100.0 g of CaCO3, and the decomposition runs at 92.0% yield. How many grams of CaO are actually collected? (MM: CaCO3 = 100.09, CaO = 56.08 g/mol)',answer:51.55,tolerance:0.6,unit:'g CaO',solution:'<p>Theoretical yield: 100.0 g CaCO3 × (1 mol / 100.09 g) × (56.08 g/mol) = 56.0 g CaO. Actual yield = 0.920 × 56.0 = <strong>51.6 g CaO</strong>.</p>'},

  /* ── 3 short easy multi-step problems (fill the multi+easy filter gap) ── */
  {id:'p172',difficulty:'easy',type:'multi',tag:'mol → g',q:'2H2 + O2 → 2H2O. Starting with 1.00 mol of H2: (a) how many moles of H2O form? (b) how many grams of H2O form? Report grams of H2O. (MM H2O = 18.02 g/mol)',answer:18.02,tolerance:0.3,unit:'g H2O',solution:'<p>(a) 1.00 mol H2 × (2 mol H2O / 2 mol H2) = 1.00 mol H2O.<br>(b) 1.00 mol H2O × (18.02 g/mol) = <strong>18.0 g H2O</strong>.</p>'},
  {id:'p173',difficulty:'easy',type:'multi',tag:'% Yield',q:'A reaction has a theoretical yield of 10.0 g. If the percent yield is 90.0%, how many grams were actually collected?',answer:9.00,tolerance:0.15,unit:'g',solution:'<p>Actual yield = % yield × theoretical yield ÷ 100 = 0.900 × 10.0 = <strong>9.00 g</strong>.</p>'},
  {id:'p174',difficulty:'easy',type:'multi',tag:'mol → mol',q:'2Mg + O2 → 2MgO. You have 2.00 mol Mg and 2.00 mol O2. Which is in excess, and how many moles of MgO form?',answer:2.00,tolerance:0.05,unit:'mol MgO',solution:'<p>2.00 mol Mg needs only 1.00 mol O2 (2:1 ratio), but 2.00 mol O2 is available — O2 is in excess. Mg is limiting: 2.00 mol Mg × (2 mol MgO / 2 mol Mg) = <strong>2.00 mol MgO</strong>.</p>'}

]; // end ALL_PROBLEMS — 174 problems total (81 original + 60 added + 30 hard expansion + 3 easy multi-step)
