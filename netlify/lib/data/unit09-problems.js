/* ── Unit 09 Problem Bank — Stoichiometry
   81 problems total: 40 calc | 25 concept | 16 multi
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  /* ════════════ CALCULATION — Reaction Stoichiometry (g→g / g→mol / mol→g / mol→mol) ════════════ */

  {id:'p01',type:'calc',tag:'g → g',
   q:'The combustion of methane: CH4 + 2 O2 → CO2 + 2 H2O. How many grams of CO2 are produced from 32.0 g of CH4? (Molar masses: CH4 = 16.04 g/mol, CO2 = 44.01 g/mol)',
   answer:87.8, tolerance:0.6, unit:'g CO2',
   solution:'<p>Set up the factor-label chain:</p><p>32.0 g CH4 × (1 mol CH4 / 16.04 g) × (1 mol CO2 / 1 mol CH4) × (44.01 g CO2 / 1 mol CO2) = <strong>87.8 g CO2</strong>.</p><p>The key middle step is the 1:1 mole ratio from the balanced equation.</p>'},

  {id:'p02',type:'calc',tag:'g → g',
   q:'In the Haber process: N2 + 3 H2 → 2 NH3. How many grams of NH3 are produced from 14.0 g of N2? (MM: N2 = 28.01 g/mol, NH3 = 17.03 g/mol)',
   answer:17.0, tolerance:0.3, unit:'g NH3',
   solution:'<p>First convert grams N2 to moles N2: 14.0 g N2 × (1 mol / 28.01 g) = 0.4998 mol N2.</p><p>Then use the mole ratio and convert to grams: 0.4998 mol N2 × (2 mol NH3 / 1 mol N2) × (17.03 g / mol) = <strong>17.0 g NH3</strong>.</p>'},

  {id:'p03',type:'calc',tag:'g → g',
   q:'Hydrogen burns: 2 H2 + O2 → 2 H2O. How many grams of water are produced from 4.00 g of H2? (MM: H2 = 2.016 g/mol, H2O = 18.02 g/mol)',
   answer:35.7, tolerance:0.5, unit:'g H2O',
   solution:'<p>Use factor-label conversion:</p><p>4.00 g H2 × (1 mol / 2.016 g) × (2 mol H2O / 2 mol H2) × (18.02 g / mol) = <strong>35.7 g H2O</strong>.</p><p>The 2:2 mole ratio simplifies to 1:1.</p>'},

  {id:'p04',type:'calc',tag:'g → g',
   q:'Iron ore reduction: Fe2O3 + 3 CO → 2 Fe + 3 CO2. How many grams of Fe are produced from 80.0 g of Fe2O3? (MM: Fe2O3 = 159.7 g/mol, Fe = 55.85 g/mol)',
   answer:55.9, tolerance:0.5, unit:'g Fe',
   solution:'<p>80.0 g Fe2O3 × (1 mol / 159.7 g) × (2 mol Fe / 1 mol Fe2O3) × (55.85 g / mol) = <strong>55.9 g Fe</strong>.</p>'},

  {id:'p05',type:'calc',tag:'g → g',
   q:'Sulfur dioxide oxidation: 2 SO2 + O2 → 2 SO3. How many grams of SO3 are produced from 64.0 g of SO2? (MM: SO2 = 64.06 g/mol, SO3 = 80.06 g/mol)',
   answer:80.0, tolerance:0.5, unit:'g SO3',
   solution:'<p>64.0 g SO2 × (1 mol / 64.06 g) × (2 mol SO3 / 2 mol SO2) × (80.06 g / mol) = <strong>80.0 g SO3</strong>. The 2:2 ratio is 1:1.</p>'},

  {id:'p06',type:'calc',tag:'g → g',
   q:'Limestone decomposition: CaCO3 → CaO + CO2. How many grams of CO2 are produced from 50.0 g of CaCO3? (MM: CaCO3 = 100.1 g/mol, CO2 = 44.01 g/mol)',
   answer:22.0, tolerance:0.3, unit:'g CO2',
   solution:'<p>50.0 g CaCO3 × (1 mol / 100.1 g) × (1 mol CO2 / 1 mol CaCO3) × (44.01 g / mol) = <strong>22.0 g CO2</strong>.</p>'},

  {id:'p07',type:'calc',tag:'g → g',
   q:'Magnesium burns: 2 Mg + O2 → 2 MgO. How many grams of MgO are produced from 12.0 g of Mg? (MM: Mg = 24.31 g/mol, MgO = 40.30 g/mol)',
   answer:19.9, tolerance:0.3, unit:'g MgO',
   solution:'<p>12.0 g Mg × (1 mol / 24.31 g) × (2 mol MgO / 2 mol Mg) × (40.30 g / mol) = <strong>19.9 g MgO</strong>.</p>'},

  {id:'p08',type:'calc',tag:'g → g',
   q:'Aluminum reacts with oxygen: 4 Al + 3 O2 → 2 Al2O3. How many grams of Al2O3 are produced from 27.0 g of Al? (MM: Al = 26.98 g/mol, Al2O3 = 101.96 g/mol)',
   answer:51.0, tolerance:0.5, unit:'g Al2O3',
   solution:'<p>27.0 g Al × (1 mol / 26.98 g) × (2 mol Al2O3 / 4 mol Al) × (101.96 g / mol) = <strong>51.0 g Al2O3</strong>. Note: 2/4 simplifies to 1/2.</p>'},

  {id:'p09',type:'calc',tag:'g → g',
   q:'Potassium chlorate decomposes: 2 KClO3 → 2 KCl + 3 O2. How many grams of O2 are produced from 24.5 g of KClO3? (MM: KClO3 = 122.5 g/mol, O2 = 32.00 g/mol)',
   answer:9.60, tolerance:0.25, unit:'g O2',
   solution:'<p>24.5 g KClO3 × (1 mol / 122.5 g) × (3 mol O2 / 2 mol KClO3) × (32.00 g / mol) = <strong>9.60 g O2</strong>.</p>'},

  {id:'p10',type:'calc',tag:'g → g',
   q:'Glucose combustion: C6H12O6 + 6 O2 → 6 CO2 + 6 H2O. How many grams of CO2 are produced from 36.0 g of glucose? (MM: C6H12O6 = 180.2 g/mol, CO2 = 44.01 g/mol)',
   answer:52.8, tolerance:0.5, unit:'g CO2',
   solution:'<p>36.0 g glucose × (1 mol / 180.2 g) × (6 mol CO2 / 1 mol glucose) × (44.01 g / mol) = <strong>52.8 g CO2</strong>.</p>'},

  {id:'p11',type:'calc',tag:'g → g',
   q:'Acid-base neutralization: HCl + NaOH → NaCl + H2O. How many grams of NaCl are produced from 18.25 g of HCl? (MM: HCl = 36.46 g/mol, NaCl = 58.44 g/mol)',
   answer:29.3, tolerance:0.4, unit:'g NaCl',
   solution:'<p>18.25 g HCl × (1 mol / 36.46 g) × (1 mol NaCl / 1 mol HCl) × (58.44 g / mol) = <strong>29.3 g NaCl</strong>.</p>'},

  {id:'p12',type:'calc',tag:'g → g',
   q:'Silver chloride precipitation: AgNO3 + HCl → AgCl + HNO3. How many grams of AgCl precipitate form from 17.0 g of HCl? (MM: HCl = 36.46 g/mol, AgCl = 143.3 g/mol)',
   answer:66.8, tolerance:0.6, unit:'g AgCl',
   solution:'<p>17.0 g HCl × (1 mol / 36.46 g) × (1 mol AgCl / 1 mol HCl) × (143.3 g / mol) = <strong>66.8 g AgCl</strong>.</p>'},

  {id:'p13',type:'calc',tag:'g → g',
   q:'Limestone decomposition: CaCO3 → CaO + CO2. How many grams of CaO are produced from 150.0 g of CaCO3? (MM: CaCO3 = 100.1 g/mol, CaO = 40.08 g/mol)',
   answer:60.1, tolerance:0.5, unit:'g CaO',
   solution:'<p>150.0 g CaCO3 × (1 mol / 100.1 g) × (1 mol CaO / 1 mol CaCO3) × (40.08 g / mol) = <strong>60.1 g CaO</strong>.</p>'},

  {id:'p14',type:'calc',tag:'g → g',
   q:'Potassium chlorate decomposition: 2 KClO3 → 2 KCl + 3 O2. How many grams of KCl are produced from 49.0 g of KClO3? (MM: KClO3 = 122.5 g/mol, KCl = 74.55 g/mol)',
   answer:29.8, tolerance:0.4, unit:'g KCl',
   solution:'<p>49.0 g KClO3 × (1 mol / 122.5 g) × (2 mol KCl / 2 mol KClO3) × (74.55 g / mol) = <strong>29.8 g KCl</strong>. The 2:2 ratio = 1:1.</p>'},

  {id:'p15',type:'calc',tag:'g → g',
   q:'Sodium burns in water: 2 Na + 2 H2O → 2 NaOH + H2. How many grams of NaOH are produced from 23.0 g of Na? (MM: Na = 22.99 g/mol, NaOH = 40.00 g/mol)',
   answer:40.0, tolerance:0.5, unit:'g NaOH',
   solution:'<p>23.0 g Na × (1 mol / 22.99 g) × (2 mol NaOH / 2 mol Na) × (40.00 g / mol) = <strong>40.0 g NaOH</strong>.</p>'},

  {id:'p16',type:'calc',tag:'g → g',
   q:'Methane combustion: CH4 + 2 O2 → CO2 + 2 H2O. How many grams of water are produced from 8.00 g of CH4? (MM: CH4 = 16.04 g/mol, H2O = 18.02 g/mol)',
   answer:17.97, tolerance:0.4, unit:'g H2O',
   solution:'<p>8.00 g CH4 × (1 mol / 16.04 g) × (2 mol H2O / 1 mol CH4) × (18.02 g / mol) = <strong>18.0 g H2O</strong>.</p>'},

  {id:'p17',type:'calc',tag:'mol → mol',
   q:'2 H2 + O2 → 2 H2O. How many moles of H2O are produced from 2.00 mol of H2?',
   answer:2.00, tolerance:0.05, unit:'mol H2O',
   solution:'<p>2.00 mol H2 × (2 mol H2O / 2 mol H2) = <strong>2.00 mol H2O</strong>. The 2:2 mole ratio equals 1:1.</p>'},

  {id:'p18',type:'calc',tag:'mol → mol',
   q:'N2 + 3 H2 → 2 NH3. How many moles of NH3 are produced from 0.750 mol of H2?',
   answer:0.500, tolerance:0.02, unit:'mol NH3',
   solution:'<p>Start with the given amount in moles and apply the mole ratio from the balanced equation:</p><p>0.750 mol H2 × (2 mol NH3 / 3 mol H2) = <strong>0.500 mol NH3</strong>.</p>'},

  {id:'p19',type:'calc',tag:'mol → mol',
   q:'2 SO2 + O2 → 2 SO3. How many moles of SO3 are produced from 3.00 mol of SO2?',
   answer:3.00, tolerance:0.05, unit:'mol SO3',
   solution:'<p>3.00 mol SO2 × (2 mol SO3 / 2 mol SO2) = <strong>3.00 mol SO3</strong>. The 2:2 ratio = 1:1.</p>'},

  {id:'p20',type:'calc',tag:'mol → mol',
   q:'4 Fe + 3 O2 → 2 Fe2O3. How many moles of Fe2O3 are produced from 1.20 mol of Fe?',
   answer:0.600, tolerance:0.02, unit:'mol Fe2O3',
   solution:'<p>1.20 mol Fe × (2 mol Fe2O3 / 4 mol Fe) = <strong>0.600 mol Fe2O3</strong>. Note: 2/4 = 1/2.</p>'},

  {id:'p21',type:'calc',tag:'mol → mol',
   q:'2 H2O → 2 H2 + O2 (electrolysis). How many moles of O2 are produced from 5.00 mol of H2O?',
   answer:2.50, tolerance:0.05, unit:'mol O2',
   solution:'<p>5.00 mol H2O × (1 mol O2 / 2 mol H2O) = <strong>2.50 mol O2</strong>.</p>'},

  {id:'p22',type:'calc',tag:'mol → g',
   q:'N2 + 3 H2 → 2 NH3. How many grams of NH3 are produced from 0.500 mol N2? (MM NH3 = 17.03 g/mol)',
   answer:17.03, tolerance:0.3, unit:'g NH3',
   solution:'<p>0.500 mol N2 × (2 mol NH3 / 1 mol N2) × (17.03 g / mol) = <strong>17.0 g NH3</strong>.</p>'},

  {id:'p23',type:'calc',tag:'mol → g',
   q:'CaCO3 → CaO + CO2. How many grams of CaO are produced from 0.250 mol of CaCO3? (MM CaO = 40.08 g/mol)',
   answer:10.02, tolerance:0.2, unit:'g CaO',
   solution:'<p>0.250 mol CaCO3 × (1 mol CaO / 1 mol CaCO3) × (40.08 g / mol) = <strong>10.0 g CaO</strong>.</p>'},

  {id:'p24',type:'calc',tag:'mol → g',
   q:'2 Al + 3 Cl2 → 2 AlCl3. How many grams of AlCl3 are produced from 0.600 mol of Al? (MM AlCl3 = 133.3 g/mol)',
   answer:80.0, tolerance:0.6, unit:'g AlCl3',
   solution:'<p>0.600 mol Al × (2 mol AlCl3 / 2 mol Al) × (133.3 g / mol) = <strong>80.0 g AlCl3</strong>.</p>'},

  /* ════════════ CALCULATION — Percent Yield ════════════ */

  {id:'p25',type:'calc',tag:'% Yield',
   q:'A reaction has a theoretical yield of 29.2 g of NaCl. The student collects 24.8 g. What is the percent yield?',
   answer:84.9, tolerance:0.6, unit:'%',
   solution:'<p>Use the percent-yield formula:</p><p>% yield = (actual yield / theoretical yield) × 100 = (24.8 / 29.2) × 100 = <strong>84.9%</strong>.</p>'},

  {id:'p26',type:'calc',tag:'% Yield',
   q:'A student synthesizes aspirin. The theoretical yield is 2.50 g; they collect 2.08 g. What is the percent yield?',
   answer:83.2, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (2.08 / 2.50) × 100 = <strong>83.2%</strong>.</p>'},

  {id:'p27',type:'calc',tag:'% Yield',
   q:'The theoretical yield of Fe from a reduction reaction is 55.8 g. The actual yield is 47.4 g. What is the percent yield?',
   answer:84.9, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (47.4 / 55.8) × 100 = <strong>84.9%</strong>.</p>'},

  {id:'p28',type:'calc',tag:'% Yield',
   q:'In an ammonia synthesis, the theoretical yield of NH3 is 34.0 g. The actual yield is 28.9 g. What is the percent yield?',
   answer:85.0, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (28.9 / 34.0) × 100 = <strong>85.0%</strong>.</p>'},

  {id:'p29',type:'calc',tag:'% Yield',
   q:'The theoretical yield of CO2 in a combustion reaction is 44.0 g. Only 38.5 g are collected. What is the percent yield?',
   answer:87.5, tolerance:0.6, unit:'%',
   solution:'<p>% yield = (38.5 / 44.0) × 100 = <strong>87.5%</strong>.</p>'},

  {id:'p30',type:'calc',tag:'% Yield',
   q:'Iron rusting: 4 Fe + 3 O2 → 2 Fe2O3. The theoretical yield of Fe2O3 is 8.37 g. The actual yield is 6.70 g. What is the percent yield?',
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
   q:'2 H2 + O2 → 2 H2O. You have 4.00 g of H2 and 32.0 g of O2. Which is the limiting reactant? How many grams of H2O form? (MM: H2 = 2.016, O2 = 32.00, H2O = 18.02 g/mol)',
   answer:35.7, tolerance:0.5, unit:'g H2O',
   solution:'<p>H2: 4.00/2.016 = 1.984 mol → could make 1.984 mol H2O → 35.7 g. O2: 32.0/32.00 = 1.000 mol → could make 2.000 mol H2O → 36.0 g. <strong>H2 makes less → H2 is the limiting reactant → 35.7 g H2O</strong>.</p>'},

  {id:'p37',type:'calc',tag:'Limiting Reactant',
   q:'N2 + 3 H2 → 2 NH3. You have 14.0 g of N2 and 6.00 g of H2. How many grams of NH3 are produced? (MM: N2 = 28.01, H2 = 2.016, NH3 = 17.03 g/mol)',
   answer:17.0, tolerance:0.4, unit:'g NH3',
   solution:'<p>N2: 14.0/28.01 = 0.4998 mol → could make 0.9996 mol NH3 → 17.0 g. H2: 6.00/2.016 = 2.976 mol → could make 1.984 mol NH3 → 33.8 g. <strong>N2 makes less → N2 is the limiting reactant → 17.0 g NH3</strong>.</p>'},

  {id:'p38',type:'calc',tag:'Limiting Reactant',
   q:'Fe2O3 + 3 CO → 2 Fe + 3 CO2. You have 32.0 g of Fe2O3 and 21.0 g of CO. How many grams of Fe are produced? (MM: Fe2O3 = 159.7, CO = 28.01, Fe = 55.85 g/mol)',
   answer:22.4, tolerance:0.4, unit:'g Fe',
   solution:'<p>Fe2O3: 32.0/159.7 = 0.2004 mol → could make 22.4 g Fe. CO: 21.0/28.01 = 0.7497 mol → could make 27.9 g Fe. <strong>Fe2O3 makes less → Fe2O3 is the limiting reactant → 22.4 g Fe</strong>.</p>'},

  {id:'p39',type:'calc',tag:'Limiting Reactant',
   q:'2 Mg + O2 → 2 MgO. You have 12.0 g of Mg and 16.0 g of O2. How many grams of MgO form? (MM: Mg = 24.31, O2 = 32.00, MgO = 40.30 g/mol)',
   answer:19.9, tolerance:0.4, unit:'g MgO',
   solution:'<p>Mg: 12.0/24.31 = 0.4937 mol → could make 19.9 g MgO. O2: 16.0/32.00 = 0.5000 mol → could make 40.3 g MgO. <strong>Mg makes less → Mg is the limiting reactant → 19.9 g MgO</strong>.</p>'},

  {id:'p40',type:'calc',tag:'Limiting Reactant',
   q:'4 Fe + 3 O2 → 2 Fe2O3. You have 11.2 g of Fe and 8.00 g of O2. How many grams of Fe2O3 form? (MM: Fe = 55.85, O2 = 32.00, Fe2O3 = 159.7 g/mol)',
   answer:16.0, tolerance:0.4, unit:'g Fe2O3',
   solution:'<p>Fe: 11.2/55.85 = 0.2006 mol → could make 0.1003 mol Fe2O3 → 16.0 g. O2: 8.00/32.00 = 0.2500 mol → could make 0.1667 mol Fe2O3 → 26.6 g. <strong>Fe makes less → Fe is the limiting reactant → 16.0 g Fe2O3</strong>.</p>'},

  /* ════════════ CONCEPT PROBLEMS ════════════ */

  {id:'p41',type:'concept',tag:'Mole Ratio',
   q:'In the equation 2 H2 + O2 → 2 H2O, what is the mole ratio of H2 to H2O?',
   choices:['1:1 (H2 to H2O)','2:1 (H2 to H2O)','1:2 (H2 to H2O)','2:3 (H2 to H2O)'],
   correct:0,
   solution:'<p>The balanced equation has 2 mol H2 producing 2 mol H2O. The ratio 2:2 simplifies to <strong>1:1</strong>. Choice A is correct.</p>'},

  {id:'p42',type:'concept',tag:'Mole Ratio',
   q:'In the equation N2 + 3 H2 → 2 NH3, how many moles of H2 are needed for every mole of N2?',
   choices:['1 mol H2','2 mol H2','3 mol H2','4 mol H2'],
   correct:2,
   solution:'<p>The coefficient of H2 is 3 and the coefficient of N2 is 1. So <strong>3 moles of H2</strong> are needed per mole of N2.</p>'},

  {id:'p43',type:'concept',tag:'Mole Ratio',
   q:'For the equation 4 Al + 3 O2 → 2 Al2O3, the mole ratio of Al2O3 to O2 is:',
   choices:['4:3','2:3','3:2','1:1'],
   correct:1,
   solution:'<p>Al2O3 has a coefficient of 2; O2 has a coefficient of 3. The ratio Al2O3:O2 = <strong>2:3</strong>.</p>'},

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
   q:'You mix 2 mol of H2 with 2 mol of O2 for the reaction 2 H2 + O2 → 2 H2O. Which is the limiting reactant?',
   choices:['H2, because it needs twice as much O2','O2, because more H2 is needed per O2','Neither — both will be used up completely','H2, because it has a smaller molar mass'],
   correct:0,
   solution:'<p>For 2 mol H2, you need only 1 mol O2 (ratio 2:1). But you have 2 mol O2 — excess! <strong>H2 is the limiting reactant</strong> because it runs out first relative to its required ratio.</p>'},

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
   q:'For the reaction 2 SO2 + O2 → 2 SO3, which fraction correctly represents the stoichiometric factor to convert mol SO2 to mol SO3?',
   choices:['(2 mol SO2) / (2 mol SO3)','(2 mol SO3) / (2 mol SO2)','(1 mol O2) / (2 mol SO2)','(2 mol SO3) / (1 mol O2)'],
   correct:1,
   solution:'<p>To convert mol SO2 → mol SO3, the stoichiometric factor is <strong>(2 mol SO3) / (2 mol SO2)</strong>, which simplifies to 1:1. You put the substance you WANT on top.</p>'},

  {id:'p54',type:'concept',tag:'Stoichiometric Factor',
   q:'Which conversion factor correctly converts moles of H2 to moles of H2O in the reaction 2 H2 + O2 → 2 H2O?',
   choices:['(1 mol H2O) / (2 mol H2)','(2 mol H2O) / (2 mol H2)','(2 mol H2) / (2 mol H2O)','(1 mol O2) / (2 mol H2)'],
   correct:1,
   solution:'<p>The balanced equation shows 2 mol H2 → 2 mol H2O. The factor is <strong>(2 mol H2O) / (2 mol H2)</strong>, which simplifies to 1 mol H2O per mol H2.</p>'},

  {id:'p55',type:'concept',tag:'Balanced Equations',
   q:'Which of the following equations is correctly balanced?',
   choices:['H2 + O2 → H2O','2 H2 + O2 → 2 H2O','H2 + O2 → 2 H2O','2 H2 + 2 O2 → 2 H2O'],
   correct:1,
   solution:'<p><strong>2 H2 + O2 → 2 H2O</strong> is balanced: 4 H and 2 O on each side. Option A has 2 O on left but 1 O on right. Option C has unbalanced hydrogen. Option D has 4 O left but 2 O right.</p>'},

  {id:'p56',type:'concept',tag:'Balanced Equations',
   q:'Why must a chemical equation be balanced before you do stoichiometry calculations?',
   choices:['So the equation looks neat','So the coefficients correctly represent the mole ratios','So you can find molar mass','So you know the color of the product'],
   correct:1,
   solution:'<p>Stoichiometry uses the coefficients as mole ratios. If the equation is not balanced, the ratios are wrong and all calculations will give incorrect answers. The balanced equation is the foundation of every stoichiometry calculation.</p>'},

  {id:'p57',type:'concept',tag:'Mole Ratio',
   q:'In the equation CH4 + 2 O2 → CO2 + 2 H2O, how many moles of O2 are needed to react with 3 mol of CH4?',
   choices:['2 mol','3 mol','4 mol','6 mol'],
   correct:3,
   solution:'<p>Mole ratio: 2 mol O2 per 1 mol CH4. For 3 mol CH4: 3 × 2 = <strong>6 mol O2</strong>.</p>'},

  {id:'p58',type:'concept',tag:'Limiting Reactant',
   q:'A student has 1 mol N2 and 1 mol H2 for N2 + 3 H2 → 2 NH3. Which reactant is limiting?',
   choices:['N2, because it reacts in a 1:3 ratio and H2 is insufficient','H2, because there is only 1 mol and 3 are needed per mol N2','Both are limiting equally','Neither — both are in excess'],
   correct:1,
   solution:'<p>1 mol N2 requires 3 mol H2. But there is only 1 mol H2 available. <strong>H2 is the limiting reactant</strong> because it runs out first.</p>'},

  {id:'p59',type:'concept',tag:'Excess Reactant',
   q:'After the reaction 2 H2 + O2 → 2 H2O using 4 g H2 and 32 g O2, which reactant has some left over?',
   choices:['H2','O2','H2O','Neither — both are used up'],
   correct:1,
   solution:'<p>4 g H2 = 1.98 mol. 32 g O2 = 1.00 mol. The 2:1 ratio means 1.98 mol H2 needs only 0.99 mol O2. You have 1.00 mol O2, so there is a tiny excess. <strong>O2 is the excess reactant</strong>.</p>'},

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
   solution:'<p><strong>Coefficients</strong> are the large numbers in front of each formula (e.g., the 2 in 2H2O). Subscripts are the small numbers inside the formula (e.g., the 2 in H2). Coefficients tell you the mole ratio.</p>'},

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
   q:'2 H2 + O2 → 2 H2O. You have 3.00 g of H2 and 24.0 g of O2. Step 1: Find the limiting reactant. Step 2: Calculate the theoretical yield of H2O in grams. (MM: H2 = 2.016, O2 = 32.00, H2O = 18.02 g/mol)',
   answer:26.8, tolerance:0.4, unit:'g H2O',
   solution:'<p><strong>Step 1:</strong> H2: 3.00/2.016 = 1.488 mol → could make 1.488 mol H2O → 26.8 g. O2: 24.0/32.00 = 0.750 mol → could make 1.500 mol H2O → 27.0 g. H2 makes less → <strong>H2 is the limiting reactant</strong>.<br><strong>Step 2:</strong> Theoretical yield = <strong>26.8 g H2O</strong>.</p>'},

  {id:'p67',type:'multi',tag:'LR + % Yield',
   q:'N2 + 3 H2 → 2 NH3. You start with 10.0 g N2 and 8.00 g H2. The actual yield of NH3 is 9.50 g. What is the percent yield? (MM: N2 = 28.01, H2 = 2.016, NH3 = 17.03 g/mol)',
   answer:78.1, tolerance:0.8, unit:'%',
   solution:'<p><strong>Step 1 (LR):</strong> N2: 10.0/28.01 = 0.357 mol → 0.714 mol NH3 → 12.16 g NH3. H2: 8.00/2.016 = 3.968 mol → 2.645 mol NH3 → 45.0 g NH3. N2 makes less → <strong>N2 is LR, theor = 12.16 g NH3</strong>.<br><strong>Step 2:</strong> % yield = (9.50 / 12.16) × 100 = <strong>78.1%</strong>.</p>'},

  {id:'p68',type:'multi',tag:'LR + % Yield',
   q:'4 Fe + 3 O2 → 2 Fe2O3. You use 22.4 g of Fe and 12.8 g of O2. The actual yield of Fe2O3 is 28.0 g. What is the percent yield? (MM: Fe = 55.85, O2 = 32.00, Fe2O3 = 159.7 g/mol)',
   answer:87.2, tolerance:0.8, unit:'%',
   solution:'<p><strong>Step 1 (LR):</strong> Fe: 22.4/55.85 = 0.401 mol → 0.201 mol Fe2O3 → 32.1 g. O2: 12.8/32.00 = 0.400 mol → 0.267 mol Fe2O3 → 42.6 g. Fe makes less → <strong>Fe is LR, theor = 32.1 g Fe2O3</strong>.<br><strong>Step 2:</strong> % yield = (28.0 / 32.1) × 100 = <strong>87.2%</strong>.</p>'},

  {id:'p69',type:'multi',tag:'LR + % Yield',
   q:'CaCO3 → CaO + CO2. You start with 75.0 g of CaCO3. The actual yield of CaO is 25.0 g. What is the percent yield? (MM: CaCO3 = 100.1, CaO = 40.08 g/mol)',
   answer:83.3, tolerance:0.8, unit:'%',
   solution:'<p><strong>Step 1 (theor):</strong> 75.0 g CaCO3 × (1/100.1) × (1 mol CaO/1 mol CaCO3) × 40.08 = 30.0 g CaO.<br><strong>Step 2:</strong> % yield = (25.0 / 30.0) × 100 = <strong>83.3%</strong>.</p>'},

  {id:'p70',type:'multi',tag:'LR + % Yield',
   q:'CH4 + 2 O2 → CO2 + 2 H2O. You mix 16.0 g CH4 and 32.0 g O2. The actual yield of H2O is 16.0 g. Find the percent yield. (MM: CH4 = 16.04, O2 = 32.00, H2O = 18.02 g/mol)',
   answer:88.8, tolerance:1.0, unit:'%',
   solution:'<p><strong>Step 1 (LR):</strong> CH4: 16.0/16.04 = 0.998 mol → could make 1.996 mol H2O → 35.9 g. O2: 32.0/32.00 = 1.000 mol → could make 1.000 mol H2O → 18.02 g. O2 makes less → <strong>O2 is LR, theor = 18.0 g H2O</strong>.<br><strong>Step 2:</strong> % yield = (16.0 / 18.0) × 100 = <strong>88.9%</strong>.</p>'},

  {id:'p71',type:'multi',tag:'Multi-step Chain',
   q:'2 KClO3 → 2 KCl + 3 O2. Starting with 49.0 g KClO3: (a) How many moles of O2 form? (b) How many grams of O2 form? Report your answer as grams of O2. (MM: KClO3 = 122.5, O2 = 32.00 g/mol)',
   answer:19.2, tolerance:0.4, unit:'g O2',
   solution:'<p><strong>(a)</strong> 49.0 g KClO3 × (1 mol / 122.5 g) × (3 mol O2 / 2 mol KClO3) = 0.600 mol O2.<br><strong>(b)</strong> 0.600 mol O2 × (32.00 g / mol) = <strong>19.2 g O2</strong>.</p>'},

  {id:'p72',type:'multi',tag:'Multi-step Chain',
   q:'N2 + 3 H2 → 2 NH3. Starting with 0.800 mol of N2: (a) How many moles of H2 are consumed? (b) How many grams of NH3 form? Report grams of NH3. (MM NH3 = 17.03 g/mol)',
   answer:27.2, tolerance:0.4, unit:'g NH3',
   solution:'<p><strong>(a)</strong> 0.800 mol N2 × (3 mol H2 / 1 mol N2) = 2.40 mol H2 consumed.<br><strong>(b)</strong> 0.800 mol N2 × (2 mol NH3 / 1 mol N2) × (17.03 g / mol) = <strong>27.2 g NH3</strong>.</p>'},

  {id:'p73',type:'multi',tag:'Multi-step Chain',
   q:'Fe2O3 + 3 CO → 2 Fe + 3 CO2. You start with 0.300 mol Fe2O3. (a) What mass of CO is consumed? (b) What mass of Fe is produced? Report grams of Fe. (MM: CO = 28.01, Fe = 55.85 g/mol)',
   answer:33.5, tolerance:0.4, unit:'g Fe',
   solution:'<p><strong>(a)</strong> 0.300 mol Fe2O3 × (3 mol CO / 1 mol Fe2O3) × (28.01 g / mol) = 25.2 g CO consumed.<br><strong>(b)</strong> 0.300 mol Fe2O3 × (2 mol Fe / 1 mol Fe2O3) × (55.85 g / mol) = <strong>33.5 g Fe</strong>.</p>'},

  {id:'p74',type:'multi',tag:'Excess Reactant',
   q:'N2 + 3 H2 → 2 NH3. You start with 14.0 g N2 and 6.00 g H2. N2 is the limiting reactant. How many grams of H2 are left over? (MM: N2 = 28.01, H2 = 2.016 g/mol)',
   answer:2.97, tolerance:0.15, unit:'g H2',
   solution:'<p>Mol N2 = 14.0/28.01 = 0.4998 mol. H2 required = 0.4998 × 3 = 1.499 mol. Available H2 = 6.00/2.016 = 2.976 mol. Excess H2 = 2.976 - 1.499 = 1.477 mol × 2.016 g/mol = <strong>2.98 g H2 left over</strong>.</p>'},

  {id:'p75',type:'multi',tag:'Excess Reactant',
   q:'2 H2 + O2 → 2 H2O. You start with 4.00 g H2 and 32.0 g O2. H2 is the limiting reactant. How many grams of O2 are left over? (MM: H2 = 2.016, O2 = 32.00 g/mol)',
   answer:0.256, tolerance:0.05, unit:'g O2',
   solution:'<p>Mol H2 = 4.00/2.016 = 1.984 mol. O2 required = 1.984/2 = 0.992 mol. Available O2 = 32.0/32.00 = 1.000 mol. Excess O2 = 1.000 - 0.992 = 0.008 mol × 32.00 = <strong>0.256 g O2 left over</strong>.</p>'},

  {id:'p76',type:'multi',tag:'Find Limiting + Product',
   q:'2 SO2 + O2 → 2 SO3. You have 16.0 g SO2 and 16.0 g O2. Which is the limiting reactant, and how many grams of SO3 form? (MM: SO2 = 64.06, O2 = 32.00, SO3 = 80.06 g/mol)',
   answer:20.0, tolerance:0.4, unit:'g SO3',
   solution:'<p>SO2: 16.0/64.06 = 0.2498 mol → 0.2498 mol SO3 → 20.0 g. O2: 16.0/32.00 = 0.5000 mol → 1.000 mol SO3 → 80.1 g. <strong>SO2 is LR → 20.0 g SO3</strong>.</p>'},

  {id:'p77',type:'multi',tag:'Find Limiting + Product',
   q:'4 Al + 3 O2 → 2 Al2O3. You have 27.0 g Al and 24.0 g O2. Find the limiting reactant and the grams of Al2O3 produced. (MM: Al = 26.98, O2 = 32.00, Al2O3 = 101.96 g/mol)',
   answer:51.0, tolerance:0.6, unit:'g Al2O3',
   solution:'<p>Al: 27.0/26.98 = 1.001 mol → 0.5005 mol Al2O3 → 51.0 g. O2: 24.0/32.00 = 0.7500 mol → 0.5000 mol Al2O3 → 51.0 g. Both give nearly identical product — <strong>both are nearly stoichiometric; Al2O3 = 51.0 g</strong>. (O2 is the limiting reactant by a tiny margin.)</p>'},

  {id:'p78',type:'multi',tag:'Real-World Application',
   q:'A student wants to make 10.0 g of water (H2O) from H2 and O2: 2 H2 + O2 → 2 H2O. How many grams of H2 are needed? (MM: H2 = 2.016, H2O = 18.02 g/mol)',
   answer:1.12, tolerance:0.05, unit:'g H2',
   solution:'<p>Work backwards: 10.0 g H2O × (1 mol / 18.02 g) × (2 mol H2 / 2 mol H2O) × (2.016 g / mol) = <strong>1.12 g H2</strong>.</p>'},

  {id:'p79',type:'multi',tag:'Real-World Application',
   q:'A car airbag inflates via: 2 NaN3 → 2 Na + 3 N2. To produce 56.0 g of N2, how many grams of NaN3 are needed? (MM: NaN3 = 65.01, N2 = 28.01 g/mol)',
   answer:86.7, tolerance:0.8, unit:'g NaN3',
   solution:'<p>56.0 g N2 × (1 mol / 28.01 g) × (2 mol NaN3 / 3 mol N2) × (65.01 g / mol) = <strong>86.7 g NaN3</strong>.</p>'},

  {id:'p80',type:'multi',tag:'Design the Experiment',
   q:'You need exactly 1.00 mol of CO2 from the reaction CH4 + 2 O2 → CO2 + 2 H2O. How many grams of CH4 must you burn? (MM: CH4 = 16.04 g/mol)',
   answer:16.04, tolerance:0.15, unit:'g CH4',
   solution:'<p>Mole ratio CH4:CO2 = 1:1. So 1.00 mol CO2 requires 1.00 mol CH4. 1.00 mol × 16.04 g/mol = <strong>16.04 g CH4</strong>.</p>'},

  {id:'p81',type:'multi',tag:'Interpret Results',
   q:'A chemist synthesizes a compound. The theoretical yield is 25.0 g but the actual yield is 16.0 g. The percent yield is 64.0%. If the chemist improves the procedure to achieve 80.0% yield, how many grams would be collected? (Theoretical yield remains 25.0 g.)',
   answer:20.0, tolerance:0.3, unit:'g',
   solution:'<p>Actual yield = % yield × theoretical yield / 100 = 0.800 × 25.0 = <strong>20.0 g</strong>. The improved procedure would recover 20.0 g instead of 16.0 g.</p>'}

]; // end ALL_PROBLEMS — 81 problems total
