/* ── Unit 08 Problem Bank — Chemical Reactions
   174 problems total (81 original + 60 added + 30 hard expansion + 3 easy multi-step)
   Difficulty: 69 easy | 56 medium | 49 hard
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  /* ════════════════════ CONCEPT (40 problems) ════════════════════ */

  {id:'p01', difficulty:'easy', type:'concept', tag:'Equations',
   q:'What does the arrow (→) mean in a chemical equation?',
   choices:['The reactants and products are equal in mass','The reaction produces the substances on the right from those on the left','The substances are dissolved in water','The reaction is reversible'],
   correct:1,
   solution:'<p>The arrow means "produces" or "yields."</p><p>It separates the reactants on the left from the products on the right. Mass is conserved, but the arrow itself only shows the direction of the reaction.</p>'},

  {id:'p02', difficulty:'easy', type:'concept', tag:'Equations',
   q:'Which of the following is true about subscripts in a chemical formula?',
   choices:['You can change them to balance an equation','They show how many molecules are present','They tell you how many of each atom are in one formula unit','They are always the same as the coefficients'],
   correct:2,
   solution:'<p>Subscripts are part of the formula. They show how many atoms of each element are in one molecule or formula unit.</p><p>Never change subscripts when balancing. Only coefficients, the numbers in front of the formula, can be changed.</p>'},

  {id:'p03', difficulty:'easy', type:'concept', tag:'Conservation',
   q:'Which law explains why chemical equations must be balanced?',
   choices:['Law of Definite Proportions','Law of Conservation of Energy','Law of Conservation of Mass','Avogadro\'s Law'],
   correct:2,
   solution:'<p>The Law of Conservation of Mass says atoms are not created or destroyed in a chemical reaction.</p><p>They are only rearranged, so the total number of each type of atom must be the same on both sides of the equation.</p>'},

  {id:'p04', difficulty:'easy', type:'concept', tag:'Equations',
   q:'What does the symbol (aq) after a substance mean?',
   choices:['The substance is aqueous — dissolved in water','The substance is a gas','The substance is a solid that does not dissolve','The substance is in liquid form'],
   correct:0,
   solution:'<p>(aq) stands for "aqueous," meaning the substance is dissolved in water. The four state symbols are: (s) solid, (l) liquid, (g) gas, and (aq) aqueous.</p>'},

  {id:'p05', difficulty:'easy', type:'concept', tag:'Reaction Types',
   q:'Which reaction type follows the pattern A + B → AB?',
   choices:['Decomposition','Double replacement','Combustion','Synthesis'],
   correct:3,
   solution:'<p>Synthesis (also called combination) reactions combine two or more substances to form one new product. The pattern is A + B → AB. Example: 2H2 + O2 → 2H2O.</p>'},

  {id:'p06', difficulty:'easy', type:'concept', tag:'Reaction Types',
   q:'A single compound breaks apart into two simpler substances. What type of reaction is this?',
   choices:['Synthesis','Decomposition','Single replacement','Combustion'],
   correct:1,
   solution:'<p>Decomposition reactions follow the pattern AB → A + B. One compound breaks down into two or more simpler substances. Example: 2H2O2 → 2H2O + O2.</p>'},

  {id:'p07', difficulty:'easy', type:'concept', tag:'Reaction Types',
   q:'A strip of zinc metal is placed in hydrochloric acid (HCl). Zinc dissolves and hydrogen gas is produced. What reaction type is this?',
   choices:['Synthesis','Decomposition','Single replacement','Double replacement'],
   correct:2,
   solution:'<p>Single replacement reactions follow the pattern A + BC → AC + B. Here, zinc (Zn) replaces hydrogen (H) in HCl. Equation: Zn + 2HCl → ZnCl2 + H2.</p>'},

  {id:'p08', difficulty:'easy', type:'concept', tag:'Reaction Types',
   q:'Two aqueous ionic solutions are mixed and a solid forms. What is the solid called?',
   choices:['Catalyst','Precipitate','Solvent','Electrolyte'],
   correct:1,
   solution:'<p>A precipitate is an insoluble solid that forms when ions in solution combine.</p><p>This kind of reaction is a precipitation reaction, which is a type of double replacement.</p>'},

  {id:'p09', difficulty:'medium', type:'concept', tag:'Precipitation',
   q:'Which compound is insoluble in water (forms a precipitate)?',
   choices:['NaNO3','KCl','AgCl','MgSO4'],
   correct:2,
   solution:'<p>Most chlorides are soluble, EXCEPT for AgCl (silver chloride), PbCl2, and HgCl2. AgCl forms a white precipitate when Ag^+ and Cl^- ions meet in solution. NaNO3, KCl, and MgSO4 are all soluble.</p>'},

  {id:'p10', difficulty:'easy', type:'concept', tag:'Precipitation',
   q:'What are spectator ions?',
   choices:['Ions that form the precipitate','Ions that gain or lose electrons','Ions that are present but do not change or react','Ions that are produced only on the product side'],
   correct:2,
   solution:'<p>Spectator ions appear on both sides of the complete ionic equation unchanged. They "watch" the reaction without participating. They are left out of the net ionic equation.</p>'},

  {id:'p11', difficulty:'easy', type:'concept', tag:'Net Ionic',
   q:'What does a net ionic equation show?',
   choices:['All atoms including spectator ions','Only the ions that actually change or react','Only the molecular formulas of all substances','The state symbols only'],
   correct:1,
   solution:'<p>A net ionic equation shows only the species that actually change during the reaction — the ions (or molecules) that form new bonds, precipitates, or transfer electrons. Spectator ions are removed.</p>'},

  {id:'p12', difficulty:'easy', type:'concept', tag:'Acid-Base',
   q:'What type of ions do acids release in water?',
   choices:['Hydroxide ions (OH^-)','Chloride ions (Cl^-)','Hydrogen ions (H^+)','Sodium ions (Na^+)'],
   correct:2,
   solution:'<p>Acids release hydrogen ions (H^+) in water. Bases release hydroxide ions (OH^-). When they react together, they neutralize each other: H^+ + OH^- → H2O.</p>'},

  {id:'p13', difficulty:'easy', type:'concept', tag:'Acid-Base',
   q:'What are the products of a neutralization reaction between an acid and a base?',
   choices:['An acid and a gas','A salt and water','An element and a compound','Two acids'],
   correct:1,
   solution:'<p>When an acid and base neutralize each other, they produce a salt and water. Example: HCl + NaOH → NaCl + H2O. NaCl is the salt, H2O is water.</p>'},

  {id:'p14', difficulty:'easy', type:'concept', tag:'Acid-Base',
   q:'What is the net ionic equation for any strong acid reacting with a strong base?',
   choices:['Na^+ + Cl^- → NaCl','H^+ + OH^- → H2O','HCl + NaOH → NaCl + H2O','H2O → H^+ + OH^-'],
   correct:1,
   solution:'<p>In a strong acid–strong base neutralization, the spectator ions cancel out.</p><p>The only change is H^+ + OH^- → H2O, so this net ionic equation is the same no matter which strong acid and strong base are used.</p>'},

  {id:'p15', difficulty:'easy', type:'concept', tag:'Redox',
   q:'What does OIL RIG stand for?',
   choices:['Oxidation Increases Loss; Reduction Is Gain','Oxidation Is Loss; Reduction Is Gain (of electrons)','Oxygen Is Lost; Reduction Involves Gain','Only In Lab: Reactions Involve Gain'],
   correct:1,
   solution:'<p>OIL RIG is a memory trick: Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons). When a substance loses electrons, its oxidation number increases. When it gains electrons, its oxidation number decreases.</p>'},

  {id:'p16', difficulty:'easy', type:'concept', tag:'Redox',
   q:'What happens to the oxidation number of an element that is oxidized?',
   choices:['It stays the same','It decreases','It increases','It becomes zero'],
   correct:2,
   solution:'<p>When a substance is oxidized, it LOSES electrons. Losing electrons makes the oxidation number go UP (increase). Remember: more positive = more oxidized.</p>'},

  {id:'p17', difficulty:'medium', type:'concept', tag:'Redox',
   q:'In the reaction 2Na + Cl2 → 2NaCl, what happens to sodium (Na)?',
   choices:['Na is reduced because it gains electrons','Na is oxidized because it loses electrons','Na is a spectator ion','Na\'s oxidation number decreases from 0 to -1'],
   correct:1,
   solution:'<p>Sodium starts as a pure element (oxidation number = 0) and becomes Na^+ in NaCl (oxidation number = +1). The oxidation number INCREASES, so Na is oxidized — it loses electrons.</p>'},

  {id:'p18', difficulty:'easy', type:'concept', tag:'Redox',
   q:'What is the oxidation number of any pure element (like Fe, O2, or Cl2)?',
   choices:['+1','-1','0','It depends on the compound'],
   correct:2,
   solution:'<p>Pure elements always have an oxidation number of 0 — whether they are monatomic (Fe) or diatomic (O2, Cl2, H2, N2). This is a key rule for identifying redox reactions: if the oxidation number changes from 0, the element was either oxidized or reduced.</p>'},

  {id:'p19', difficulty:'easy', type:'concept', tag:'Oxidation Numbers',
   q:'What is the usual oxidation number of oxygen in a compound?',
   choices:['+2','-1','-2','+1'],
   correct:2,
   solution:'<p>Oxygen in compounds is almost always -2. The main exception is in peroxides (like H2O2 or Na2O2), where oxygen is -1.</p>'},

  {id:'p20', difficulty:'easy', type:'concept', tag:'Oxidation Numbers',
   q:'What is the usual oxidation number of hydrogen in a compound?',
   choices:['+1','-1','0','+2'],
   correct:0,
   solution:'<p>Hydrogen in compounds is almost always +1. The exception is in metal hydrides (like NaH or CaH2), where hydrogen bonded to a metal is -1.</p>'},

  {id:'p21', difficulty:'easy', type:'concept', tag:'Oxidation Numbers',
   q:'The oxidation numbers in a neutral compound must add up to:',
   choices:['The atomic number of the element','The number of atoms in the formula','Zero','The charge of the most electronegative element'],
   correct:2,
   solution:'<p>For a neutral compound (no overall charge), all the oxidation numbers multiplied by the number of each atom must add to zero. For an ion, they must add to the ion charge.</p>'},

  {id:'p22', difficulty:'medium', type:'concept', tag:'Redox',
   q:'What is a reducing agent?',
   choices:['A substance that gains electrons','A substance that is reduced','A substance that loses electrons (and is itself oxidized)','A substance that does not change oxidation number'],
   correct:2,
   solution:'<p>A reducing agent is the substance that LOSES electrons — it REDUCES something else while being oxidized itself. In 2Na + Cl2 → 2NaCl, Na is the reducing agent (it loses electrons to Cl2).</p>'},

  {id:'p23', difficulty:'medium', type:'concept', tag:'Redox',
   q:'What is an oxidizing agent?',
   choices:['A substance that loses electrons','A substance that is oxidized','A substance that gains electrons (and causes oxidation in another)','A substance with an oxidation number of zero'],
   correct:2,
   solution:'<p>An oxidizing agent accepts electrons from another substance. By accepting electrons, it causes that substance to be oxidized. The oxidizing agent itself is reduced. In 2Na + Cl2 → 2NaCl, Cl2 is the oxidizing agent.</p>'},

  {id:'p24', difficulty:'easy', type:'concept', tag:'Combustion',
   q:'What are the products of complete combustion of a hydrocarbon (a compound containing only C and H)?',
   choices:['CO and H2','CO2 and H2O','C and H2O','CO2 and O2'],
   correct:1,
   solution:'<p>When a hydrocarbon burns completely in excess oxygen, the carbon becomes CO2 and the hydrogen becomes H2O. Example: CH4 + 2O2 → CO2 + 2H2O.</p>'},

  {id:'p25', difficulty:'easy', type:'concept', tag:'Precipitation',
   q:'Are all nitrate compounds soluble in water?',
   choices:['No — most are insoluble','No — only group 1 nitrates dissolve','Yes — all nitrate compounds are soluble','Only when heated'],
   correct:2,
   solution:'<p>YES — all nitrate (NO3^-) compounds are soluble in water. This is a key solubility rule. Because all nitrates dissolve, NO3^- is frequently a spectator ion in precipitation reactions.</p>'},

  {id:'p26', difficulty:'easy', type:'concept', tag:'Equations',
   q:'Which coefficient correctly balances the equation: _H2 + _O2 → _H2O?',
   choices:['1, 1, 1','2, 1, 2','1, 2, 1','2, 2, 2'],
   correct:1,
   solution:'<p>With coefficients 2, 1, 2: left side has 4 H and 2 O. Right side: 2 H2O has 4 H and 2 O. Both sides match. ✓ 2H2 + O2 → 2H2O.</p>'},

  {id:'p27', difficulty:'easy', type:'concept', tag:'Equations',
   q:'Which equation is correctly balanced?',
   choices:['H2 + Cl2 → HCl','H2 + Cl2 → 2HCl','2H2 + Cl2 → 2HCl','H2 + 2Cl2 → 2HCl'],
   correct:1,
   solution:'<p>H2 + Cl2 → 2HCl: Left has 2 H and 2 Cl. Right has 2 H and 2 Cl. ✓ The other options are unbalanced — choice A gives only 1 HCl (1 H, 1 Cl on right), choices C and D give wrong H or Cl counts.</p>'},

  {id:'p28', difficulty:'easy', type:'concept', tag:'Reaction Types',
   q:'Methane (CH4) burns in air to produce CO2 and water. What type of reaction is this?',
   choices:['Synthesis','Decomposition','Single replacement','Combustion'],
   correct:3,
   solution:'<p>Combustion is the reaction of a fuel with oxygen, producing CO2 and H2O (for hydrocarbon fuels). CH4 + 2O2 → CO2 + 2H2O is a classic combustion reaction.</p>'},

  {id:'p29', difficulty:'medium', type:'concept', tag:'Net Ionic',
   q:'In the reaction AgNO3(aq) + NaCl(aq) → AgCl(s) + NaNO3(aq), which ions are spectators?',
   choices:['Ag^+ and Cl^-','Na^+ and NO3^-','Ag^+ and Na^+','Cl^- and NO3^-'],
   correct:1,
   solution:'<p>Na^+ and NO3^- appear on both sides of the complete ionic equation unchanged — they are spectator ions. The reaction that actually occurs is Ag^+(aq) + Cl^-(aq) → AgCl(s).</p>'},

  {id:'p30', difficulty:'easy', type:'concept', tag:'Acid-Base',
   q:'HCl(aq) + NaOH(aq) → ? This is an example of which reaction type?',
   choices:['Precipitation','Combustion','Neutralization (acid-base)','Decomposition'],
   correct:2,
   solution:'<p>HCl is an acid (releases H^+) and NaOH is a base (releases OH^-). They react in a neutralization (acid-base) reaction to produce water and a salt: HCl + NaOH → H2O + NaCl.</p>'},

  {id:'p31', difficulty:'medium', type:'concept', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Cr in Cr2O7^2-?',
   choices:['+3','+6','+7','-2'],
   correct:1,
   solution:'<p>Ion charge = -2. Seven O at -2 each gives -14 total.</p><p>2 Cr + (-14) = -2 → 2 Cr = +12 → each Cr = <strong>+6</strong>.</p>'},

  {id:'p32', difficulty:'medium', type:'concept', tag:'Oxidation Numbers',
   q:'What is the oxidation number of S in SO4^2-?',
   choices:['+2','+4','+6','-2'],
   correct:2,
   solution:'<p>Ion charge = -2. O = -2 each, 4 oxygens = -8. S + (-8) = -2 → S = +6.</p>'},

  {id:'p33', difficulty:'medium', type:'concept', tag:'Oxidation Numbers',
   q:'What is the oxidation number of N in NO3^-?',
   choices:['+3','+5','-3','0'],
   correct:1,
   solution:'<p>Ion charge = -1. O = -2 each, 3 oxygens = -6. N + (-6) = -1 → N = +5.</p>'},

  {id:'p34', difficulty:'medium', type:'concept', tag:'Precipitation',
   q:'Which compound would NOT form a precipitate when dissolved in water?',
   choices:['AgCl','BaSO4','PbI2','KNO3'],
   correct:3,
   solution:'<p>KNO3 is soluble — all potassium compounds and all nitrates dissolve. AgCl, BaSO4, and PbI2 are all listed as insoluble compounds in the standard solubility rules.</p>'},

  {id:'p35', difficulty:'easy', type:'concept', tag:'Equations',
   q:'What do coefficients in a balanced equation represent?',
   choices:['The number of atoms in each molecule','The relative number of moles (or molecules) of each substance','The mass of each substance in grams','The charge on each ion'],
   correct:1,
   solution:'<p>Coefficients tell you the ratio of moles (or molecules) involved. In 2H2 + O2 → 2H2O, the coefficients say: 2 moles of H2 react with 1 mole of O2 to produce 2 moles of H2O.</p>'},

  {id:'p36', difficulty:'medium', type:'concept', tag:'Redox',
   q:'Is the reaction 4Fe + 3O2 → 2Fe2O3 a redox reaction?',
   choices:['No — no ions are formed','Yes — Fe is oxidized and O is reduced','No — it is a synthesis reaction, not redox','Yes — but only because Fe is a metal'],
   correct:1,
   solution:'<p>Yes. Fe goes from 0 (pure element) to +3 (in Fe2O3) — Fe is oxidized. O goes from 0 (in O2) to -2 (in Fe2O3) — O is reduced. Oxidation numbers change, so it is a redox reaction. (Note: reaction type categories are not mutually exclusive — this is BOTH a synthesis AND a redox reaction.)</p>'},

  {id:'p37', difficulty:'easy', type:'concept', tag:'Reaction Types',
   q:'CaCO3(s) → CaO(s) + CO2(g) when heated. What type of reaction is this?',
   choices:['Synthesis','Combustion','Decomposition','Single replacement'],
   correct:2,
   solution:'<p>One compound (CaCO3) breaks apart into two simpler substances (CaO and CO2). This matches the pattern AB → A + B: decomposition. Heating often drives decomposition reactions.</p>'},

  {id:'p38', difficulty:'medium', type:'concept', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Mn in MnO4^-?',
   choices:['+4','+6','+7','-2'],
   correct:2,
   solution:'<p>Ion charge = -1. O = -2 each, 4 oxygens = -8. Mn + (-8) = -1 → Mn = +7. MnO4^- (permanganate) is a strong oxidizing agent precisely because Mn is in its high +7 state.</p>'},

  {id:'p39', difficulty:'medium', type:'concept', tag:'Precipitation',
   q:'When Pb(NO3)2(aq) is mixed with KI(aq), a yellow precipitate of PbI2 forms. What does the net ionic equation look like?',
   choices:['Pb^2+ + 2I^- → PbI2(s)','Pb(NO3)2 + 2KI → PbI2 + 2KNO3','K^+ + NO3^- → KNO3','2K^+ + Pb^2+ → Pb + 2K^+'],
   correct:0,
   solution:'<p>K^+ and NO3^- are spectator ions (both are soluble and unchanged). The actual reaction is Pb^2+ meeting I^- to form insoluble PbI2. Net ionic: Pb^2+(aq) + 2I^-(aq) → PbI2(s).</p>'},

  {id:'p40', difficulty:'easy', type:'concept', tag:'Equations',
   q:'Which statement best describes a balanced chemical equation?',
   choices:['Reactant and product volumes are equal','The number of each type of atom is the same on both sides of the equation','The masses of all substances are listed','The temperature and pressure are specified'],
   correct:1,
   solution:'<p>A balanced equation has equal numbers of each type of atom on the reactant side and the product side. This reflects the Law of Conservation of Mass: atoms are rearranged, not created or destroyed.</p>'},

  /* ════════════════════ CALCULATION (25 problems) ════════════════════ */

  {id:'p41', difficulty:'easy', type:'calc', tag:'Balancing',
   q:'Balance this equation: _Fe + _O2 → _Fe2O3. What is the coefficient in front of Fe?',
   answer:4, tolerance:0,
   solution:'<p>Balanced equation: 4Fe + 3O2 → 2Fe2O3. Check: Fe left = 4, right = 2×2 = 4 ✓. O left = 3×2 = 6, right = 2×3 = 6 ✓. Coefficient of Fe = <strong>4</strong>.</p>'},

  {id:'p42', difficulty:'easy', type:'calc', tag:'Balancing',
   q:'Balance: _N2 + _H2 → _NH3. What is the coefficient in front of H2?',
   answer:3, tolerance:0,
   solution:'<p>Balanced: N2 + 3H2 → 2NH3. Right side has 2 NH3 = 6 H atoms. Left needs 3 H2 = 6 H atoms. ✓ Coefficient of H2 = <strong>3</strong>.</p>'},

  {id:'p43', difficulty:'easy', type:'calc', tag:'Balancing',
   q:'Balance: _Al + _Cl2 → _AlCl3. What is the sum of all coefficients in the balanced equation?',
   answer:7, tolerance:0,
   solution:'<p>Balanced: 2Al + 3Cl2 → 2AlCl3. Coefficients: 2 + 3 + 2 = <strong>7</strong>. Check: Al: 2=2 ✓, Cl: 6=6 ✓.</p>'},

  {id:'p44', difficulty:'easy', type:'calc', tag:'Balancing',
   q:'Balance: _CH4 + _O2 → _CO2 + _H2O. What is the coefficient in front of O2?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: CH4 + 2O2 → CO2 + 2H2O. Right side has 2 O (CO2) + 2 O (2H2O) = 4 O atoms, which needs 2 O2 on the left. Coefficient of O2 = <strong>2</strong>.</p>'},

  {id:'p45', difficulty:'easy', type:'calc', tag:'Balancing',
   q:'Balance: _H2O2 → _H2O + _O2. What is the coefficient in front of H2O2?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: 2H2O2 → 2H2O + O2. This is decomposition of hydrogen peroxide. Check: H: 4=4 ✓, O: 4=4 ✓. Coefficient of H2O2 = <strong>2</strong>.</p>'},

  {id:'p46', difficulty:'easy', type:'calc', tag:'Balancing',
   q:'Balance: _Na + _H2O → _NaOH + _H2. What is the coefficient in front of Na?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: 2Na + 2H2O → 2NaOH + H2. Check: Na: 2=2 ✓, H: 4=4 ✓, O: 2=2 ✓. Coefficient of Na = <strong>2</strong>.</p>'},

  {id:'p47', difficulty:'medium', type:'calc', tag:'Balancing',
   q:'Balance: _C3H8 + _O2 → _CO2 + _H2O (combustion of propane). What is the coefficient in front of O2?',
   answer:5, tolerance:0,
   solution:'<p>Balanced: C3H8 + 5O2 → 3CO2 + 4H2O. Products: 3 CO2 gives 6 O, 4 H2O gives 4 O → 10 O atoms total on right → 5 O2 on left. Coefficient of O2 = <strong>5</strong>.</p>'},

  {id:'p48', difficulty:'easy', type:'calc', tag:'Balancing',
   q:'Balance: _Ca(OH)2 + _HCl → _CaCl2 + _H2O. What is the coefficient in front of HCl?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: Ca(OH)2 + 2HCl → CaCl2 + 2H2O. Right side needs 2 Cl for CaCl2 → 2 HCl. Check: Ca:1=1✓, Cl:2=2✓, O:2=2✓, H:4=4✓. Coefficient of HCl = <strong>2</strong>.</p>'},

  {id:'p49', difficulty:'easy', type:'calc', tag:'Balancing',
   q:'Balance: _Mg + _HCl → _MgCl2 + _H2. What is the sum of all coefficients?',
   answer:5, tolerance:0,
   solution:'<p>Balanced: Mg + 2HCl → MgCl2 + H2. Coefficients: 1 + 2 + 1 + 1 = <strong>5</strong>. Check: Mg:1=1✓, Cl:2=2✓, H:2=2✓.</p>'},

  {id:'p50', difficulty:'medium', type:'calc', tag:'Balancing',
   q:'Balance: _P4 + _O2 → _P4O10. What is the coefficient in front of O2?',
   answer:5, tolerance:0,
   solution:'<p>P4 + 5O2 → P4O10. Right side has 10 O atoms, needing 5 O2. P is already balanced (4=4). Coefficient of O2 = <strong>5</strong>.</p>'},

  {id:'p51', difficulty:'easy', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Fe in Fe2O3? (enter as a signed number, e.g. +3)',
   isText:true, answer:'+3',
   solution:'<p>O = -2 each, 3 oxygens = -6. Compound is neutral: 2 Fe + (-6) = 0 → 2 Fe = +6 → each Fe = <strong>+3</strong>.</p>'},

  {id:'p52', difficulty:'easy', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of S in H2SO4? (enter as a signed number)',
   isText:true, answer:'+6',
   solution:'<p>Neutral compound. H = +1 each × 2 = +2. O = -2 each × 4 = -8. S + 2 + (-8) = 0 → S = +6.</p>'},

  {id:'p53', difficulty:'easy', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of N in NH3? (enter as a signed number)',
   isText:true, answer:'-3',
   solution:'<p>H = +1 each × 3 = +3. Neutral molecule: N + 3 = 0 → N = <strong>-3</strong>.</p>'},

  {id:'p54', difficulty:'medium', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Cl in HClO3? (enter as a signed number)',
   isText:true, answer:'+5',
   solution:'<p>H = +1, O = -2 each × 3 = -6. Neutral: 1 + Cl + (-6) = 0 → Cl = +5.</p>'},

  {id:'p55', difficulty:'easy', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Mn in MnO2? (enter as a signed number)',
   isText:true, answer:'+4',
   solution:'<p>O = -2 each × 2 = -4. Neutral: Mn + (-4) = 0 → Mn = <strong>+4</strong>.</p>'},

  {id:'p56', difficulty:'easy', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of P in PO4^3-? (enter as a signed number)',
   isText:true, answer:'+5',
   solution:'<p>Ion charge = -3. O = -2 × 4 = -8. P + (-8) = -3 → P = <strong>+5</strong>.</p>'},

  {id:'p57', difficulty:'medium', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Cr in CrO4^2-? (enter as a signed number)',
   isText:true, answer:'+6',
   solution:'<p>Ion charge = -2. O = -2 × 4 = -8. Cr + (-8) = -2 → Cr = <strong>+6</strong>.</p>'},

  {id:'p58', difficulty:'hard', type:'calc', tag:'Balancing',
   q:'Balance: _KMnO4 + _HCl → _KCl + _MnCl2 + _H2O + _Cl2. What is the coefficient in front of KMnO4?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: 2KMnO4 + 16HCl → 2KCl + 2MnCl2 + 8H2O + 5Cl2. Coefficient of KMnO4 = <strong>2</strong>. (This is a more challenging redox balance — check Mn: 2=2, K: 2=2, O: 8=8.)</p>'},

  {id:'p59', difficulty:'easy', type:'calc', tag:'Balancing',
   q:'Balance: _Fe + _CuSO4 → _FeSO4 + _Cu. What is the coefficient in front of Fe?',
   answer:1, tolerance:0,
   solution:'<p>This equation is already balanced with coefficient 1 in front of Fe: Fe + CuSO4 → FeSO4 + Cu. Check: Fe:1=1✓, Cu:1=1✓, S:1=1✓, O:4=4✓.</p>'},

  {id:'p60', difficulty:'medium', type:'calc', tag:'Balancing',
   q:'Balance: _C2H6 + _O2 → _CO2 + _H2O (combustion of ethane). What is the coefficient in front of O2?',
   answer:7, tolerance:0,
   solution:'<p>Balanced: 2C2H6 + 7O2 → 4CO2 + 6H2O. Products: 8 O (from 4CO2) + 6 O (from 6H2O) = 14 O atoms → 7 O2. Coefficient of O2 = <strong>7</strong>.</p>'},

  {id:'p61', difficulty:'easy', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of N in HNO3? (enter as a signed number)',
   isText:true, answer:'+5',
   solution:'<p>H = +1, O = -2 × 3 = -6. Neutral: +1 + N + (-6) = 0 → N = <strong>+5</strong>.</p>'},

  {id:'p62', difficulty:'easy', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of C in CO2? (enter as a signed number)',
   isText:true, answer:'+4',
   solution:'<p>O = -2 × 2 = -4. Neutral: C + (-4) = 0 → C = <strong>+4</strong>.</p>'},

  {id:'p63', difficulty:'medium', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of I in IO3^-? (enter as a signed number)',
   isText:true, answer:'+5',
   solution:'<p>Ion charge = -1. O = -2 × 3 = -6. I + (-6) = -1 → I = <strong>+5</strong>.</p>'},

  {id:'p64', difficulty:'easy', type:'calc', tag:'Balancing',
   q:'Balance: _Cu + _AgNO3 → _Cu(NO3)2 + _Ag. What is the coefficient in front of AgNO3?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: Cu + 2AgNO3 → Cu(NO3)2 + 2Ag. Cu^2+ needs 2 NO3^- to form Cu(NO3)2, so 2 AgNO3 are needed. Coefficient of AgNO3 = <strong>2</strong>.</p>'},

  {id:'p65', difficulty:'easy', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Cl in Cl2? (enter as a signed number)',
   isText:true, answer:'0',
   solution:'<p>Cl2 is a pure element (diatomic molecule of the same element). Any pure element has an oxidation number of <strong>0</strong>.</p>'},

  /* ════════════════════ MULTI-STEP (16 problems) ════════════════════ */

  {id:'p66', difficulty:'medium', type:'multi', tag:'Precipitation',
   q:'Two solutions are mixed: Ba(NO3)2(aq) and Na2SO4(aq). Which product is a precipitate, and what is the net ionic equation?',
   choices:[
     'BaSO4(s) is the precipitate; net ionic: Ba^2+(aq) + SO4^2-(aq) → BaSO4(s)',
     'NaNO3(s) is the precipitate; net ionic: Na^+ + NO3^- → NaNO3',
     'Ba(NO3)2 is the precipitate; net ionic: Ba^2+ + 2NO3^- → Ba(NO3)2',
     'No precipitate forms; both products are soluble'
   ],
   correct:0,
   solution:'<p>Swap ions: Ba^2+ pairs with SO4^2- → BaSO4. Na^+ pairs with NO3^- → NaNO3. Check solubility rules: BaSO4 is INSOLUBLE (precipitate). NaNO3 is soluble (all nitrates soluble). Spectators: Na^+ and NO3^-. Net ionic: Ba^2+(aq) + SO4^2-(aq) → BaSO4(s).</p>'},

  {id:'p67', difficulty:'medium', type:'multi', tag:'Redox Identification',
   q:'In the reaction: Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g), identify what is oxidized and what is reduced.',
   choices:[
     'Zn is oxidized (0 to +2); H is reduced (+1 to 0)',
     'Zn is reduced (0 to +2); H is oxidized (+1 to 0)',
     'Cl is oxidized; Zn is reduced',
     'No oxidation or reduction occurs — this is just a single replacement'
   ],
   correct:0,
   solution:'<p>Assign oxidation numbers: Zn starts at 0, becomes +2 in ZnCl2 → Zn is OXIDIZED (loses electrons). H starts at +1 in HCl, becomes 0 in H2 → H is REDUCED (gains electrons). Cl stays at -1 throughout (spectator). Zn is the reducing agent; HCl/H^+ is the oxidizing agent.</p>'},

  {id:'p68', difficulty:'medium', type:'multi', tag:'Net Ionic',
   q:'Solutions of Pb(NO3)2(aq) and NaCl(aq) are mixed. Write the correct net ionic equation.',
   choices:[
     'Pb^2+(aq) + 2Cl^-(aq) → PbCl2(s)',
     'Pb(NO3)2 + NaCl → PbCl2 + NaNO3',
     'Na^+(aq) + NO3^-(aq) → NaNO3(s)',
     'No reaction occurs because all products are soluble'
   ],
   correct:0,
   solution:'<p>Product of swapping ions: PbCl2 and NaNO3. Solubility: PbCl2 is INSOLUBLE (PbCl2 is one exception to the "chlorides soluble" rule). NaNO3 is soluble. Spectators: Na^+ and NO3^-. Net ionic: Pb^2+(aq) + 2Cl^-(aq) → PbCl2(s).</p>'},

  {id:'p69', difficulty:'medium', type:'multi', tag:'Reaction Classification',
   q:'Classify: 2HgO(s) → 2Hg(l) + O2(g). Also identify if it is redox.',
   choices:[
     'Synthesis; not redox',
     'Decomposition; redox (Hg goes from +2 to 0; O goes from -2 to 0)',
     'Decomposition; not redox',
     'Single replacement; redox'
   ],
   correct:1,
   solution:'<p>One compound breaks apart → Decomposition. Check oxidation numbers: Hg in HgO = +2, Hg in pure Hg(l) = 0 (decreased → reduced). O in HgO = -2, O in O2 = 0 (increased → oxidized). Oxidation numbers changed → it IS a redox reaction. So: Decomposition AND Redox.</p>'},

  {id:'p70', difficulty:'medium', type:'multi', tag:'Acid-Base',
   q:'H2SO4(aq) + 2KOH(aq) → K2SO4(aq) + 2H2O(l). What is the net ionic equation?',
   choices:[
     'H^+(aq) + OH^-(aq) → H2O(l)',
     'H2SO4 + 2KOH → K2SO4 + 2H2O',
     'SO4^2- + 2K^+ → K2SO4',
     '2H^+(aq) + 2OH^-(aq) → H2(g) + O2(g)'
   ],
   correct:0,
   solution:'<p>H2SO4 provides 2H^+, KOH provides 2OH^-. K^+ and SO4^2- are spectator ions (both remain in solution). Full net ionic: 2H^+ + 2OH^- → 2H2O, which simplifies to H^+ + OH^- → H2O. This is the universal acid-base net ionic equation.</p>'},

  {id:'p71', difficulty:'medium', type:'multi', tag:'Redox Agents',
   q:'In the reaction: Fe(s) + CuSO4(aq) → FeSO4(aq) + Cu(s), identify the oxidizing agent and reducing agent.',
   choices:[
     'Fe is the oxidizing agent; Cu^2+ is the reducing agent',
     'Cu^2+ is the oxidizing agent; Fe is the reducing agent',
     'SO4^2- is the oxidizing agent; Fe is the reducing agent',
     'Fe is both the oxidizing and reducing agent'
   ],
   correct:1,
   solution:'<p>Fe goes from 0 (pure element) to +2 in FeSO4 → Fe is OXIDIZED → Fe is the REDUCING AGENT. Cu goes from +2 in CuSO4 to 0 (pure Cu metal) → Cu^2+ is REDUCED → Cu^2+ is the OXIDIZING AGENT. SO4^2- stays at -2 throughout (spectator).</p>'},

  {id:'p72', difficulty:'medium', type:'multi', tag:'Precipitation',
   q:'FeCl3(aq) + 3NaOH(aq) → Fe(OH)3(s) + 3NaCl(aq). What is the correct net ionic equation?',
   choices:[
     'Fe^3+(aq) + 3OH^-(aq) → Fe(OH)3(s)',
     'FeCl3 + 3NaOH → Fe(OH)3 + 3NaCl',
     'Na^+ + Cl^- → NaCl(s)',
     'Fe^3+ + Na^+ → FeNa^3+'
   ],
   correct:0,
   solution:'<p>Fe(OH)3 is insoluble (most hydroxides are insoluble). NaCl is soluble. Spectators: Na^+ and Cl^-. The ions that actually react are Fe^3+ and OH^-. Net ionic: Fe^3+(aq) + 3OH^-(aq) → Fe(OH)3(s).</p>'},

  {id:'p73', difficulty:'hard', type:'multi', tag:'Redox Identification',
   q:'In 2H2O2(aq) → 2H2O(l) + O2(g), is this a redox reaction? If so, explain.',
   choices:[
     'No — H2O2 is a compound, so no redox can occur',
     'Yes — H in H2O2 changes oxidation number',
     'Yes — oxygen changes oxidation number: from -1 in H2O2 to -2 (in H2O) and 0 (in O2)',
     'No — decomposition reactions are never redox reactions'
   ],
   correct:2,
   solution:'<p>In H2O2, oxygen is -1 (peroxide exception). In the products: O in H2O = -2 (decreased → reduced) and O in O2 = 0 (increased → oxidized). Both oxidation AND reduction of oxygen occur — this is called a disproportionation redox reaction. H stays at +1 throughout.</p>'},

  {id:'p74', difficulty:'medium', type:'multi', tag:'Combustion',
   q:'Balance the combustion of ethanol: C2H5OH + O2 → CO2 + H2O. What is the balanced equation?',
   choices:[
     'C2H5OH + 3O2 → 2CO2 + 3H2O',
     'C2H5OH + O2 → 2CO2 + 3H2O',
     'C2H5OH + 2O2 → 2CO2 + H2O',
     '2C2H5OH + 3O2 → 4CO2 + 6H2O'
   ],
   correct:0,
   solution:'<p>C2H5OH has 2 C, 6 H, 1 O. Products: 2 CO2 (for 2C) and 3 H2O (for 6H). Count O on right: 4 O (from 2CO2) + 3 O (from 3H2O) = 7 O. Left: 1 O in ethanol + 3 O2 (6 O) = 7 O. ✓ Balanced: C2H5OH + 3O2 → 2CO2 + 3H2O.</p>'},

  {id:'p75', difficulty:'medium', type:'multi', tag:'Reaction Classification',
   q:'Classify each reaction correctly: (i) 2K + Br2 → 2KBr &nbsp; (ii) 2KBr → 2K + Br2 &nbsp; (iii) Cl2 + 2KBr → 2KCl + Br2',
   choices:[
     '(i) Decomposition, (ii) Synthesis, (iii) Double replacement',
     '(i) Synthesis, (ii) Decomposition, (iii) Single replacement',
     '(i) Single replacement, (ii) Decomposition, (iii) Synthesis',
     '(i) Combustion, (ii) Decomposition, (iii) Synthesis'
   ],
   correct:1,
   solution:'<p>(i) Two elements combine to form one compound: Synthesis. (ii) One compound breaks into its elements: Decomposition. (iii) Cl2 is a more reactive halogen that replaces Br from KBr — one element replaces another: Single Replacement.</p>'},

  {id:'p76', difficulty:'medium', type:'multi', tag:'Net Ionic',
   q:'When HNO3(aq) + NaOH(aq) react, what is the net ionic equation and reaction type?',
   choices:[
     'HNO3 + NaOH → NaNO3 + H2O; double replacement',
     'H^+(aq) + OH^-(aq) → H2O(l); acid-base neutralization',
     'Na^+ + NO3^- → NaNO3; precipitation',
     'H2O → H^+ + OH^-; decomposition'
   ],
   correct:1,
   solution:'<p>HNO3 is a strong acid; NaOH is a strong base. Both fully dissociate. Na^+ and NO3^- are spectators. The only thing that changes is H^+ + OH^- → H2O. This is an acid-base neutralization. The net ionic equation is the same for ANY strong acid + strong base combination.</p>'},

  {id:'p77', difficulty:'medium', type:'multi', tag:'Redox Full Analysis',
   q:'In the reaction Cl2(g) + 2NaBr(aq) → 2NaCl(aq) + Br2(l), which statement is correct?',
   choices:[
     'Cl is oxidized from 0 to -1; Br is reduced from -1 to 0',
     'Br is oxidized from -1 to 0; Cl is reduced from 0 to -1; Cl2 is the oxidizing agent',
     'Na is oxidized; Cl is reduced',
     'No redox occurs because chlorine and bromine are both halogens'
   ],
   correct:1,
   solution:'<p>Cl2: Cl starts at 0, ends at -1 in NaCl (DECREASED → reduced). Br: starts at -1 in NaBr, ends at 0 in Br2 (INCREASED → oxidized). Cl2 accepts electrons from Br → Cl2 is the oxidizing agent. NaBr/Br^- is the reducing agent.</p>'},

  {id:'p78', difficulty:'medium', type:'multi', tag:'Precipitation',
   q:'When CaCl2(aq) and Na2CO3(aq) are mixed, a precipitate forms. What is the molecular equation and net ionic equation?',
   choices:[
     'CaCl2 + Na2CO3 → CaCO3(s) + 2NaCl; net ionic: Ca^2+(aq) + CO3^2-(aq) → CaCO3(s)',
     'CaCl2 + Na2CO3 → CaCl2CO3 + Na; net ionic: Cl^- + CO3^2- → ClCO3^2-',
     'CaCl2 + Na2CO3 → NaCl(s) + CaCO3; net ionic: Na^+ + Cl^- → NaCl',
     'No reaction occurs because carbonates are always soluble'
   ],
   correct:0,
   solution:'<p>Swap ions: Ca^2+ + CO3^2- → CaCO3 (insoluble — most carbonates precipitate). Na^+ + Cl^- → NaCl (soluble). Molecular: CaCl2 + Na2CO3 → CaCO3(s) + 2NaCl. Net ionic: Ca^2+(aq) + CO3^2-(aq) → CaCO3(s). Spectators: Na^+ and Cl^-.</p>'},

  {id:'p79', difficulty:'hard', type:'multi', tag:'Redox Balancing',
   q:'In this half-reaction for a redox in acidic solution: MnO4^- → Mn^2+, how many electrons are gained per MnO4^- ion? (Mn changes from +7 to +2)',
   choices:['2 electrons','3 electrons','5 electrons','7 electrons'],
   correct:2,
   solution:'<p>Mn starts at +7 and ends at +2. Change = +7 - (+2) = 5 units. Each unit represents one electron gained. So MnO4^- gains 5 electrons per ion: MnO4^- + 5e^- → Mn^2+ (in acidic solution, after balancing O and H). The 5-electron gain makes permanganate a powerful oxidizing agent.</p>'},

  {id:'p80', difficulty:'medium', type:'multi', tag:'Reaction Classification',
   q:'2Al(s) + 3Cl2(g) → 2AlCl3(s). This reaction is BEST described as:',
   choices:[
     'Combustion only',
     'Synthesis only',
     'Both synthesis AND redox: Al goes from 0 to +3; Cl goes from 0 to -1',
     'Single replacement: Al replaces Cl'
   ],
   correct:2,
   solution:'<p>Two elements combine to form one compound → Synthesis. Also check oxidation numbers: Al goes from 0 to +3 (oxidized) and Cl goes from 0 to -1 (reduced) → it is also a Redox reaction. Reaction categories are NOT mutually exclusive. Al is the reducing agent; Cl2 is the oxidizing agent.</p>'},

  {id:'p81', difficulty:'hard', type:'multi', tag:'Full Analysis',
   q:'For the reaction: Fe2O3(s) + 3CO(g) → 2Fe(l) + 3CO2(g) — a key reaction in steel production — which element is oxidized?',
   choices:['Fe (goes from +3 to 0)','C in CO (goes from +2 to +4)','O (goes from -2 to -2)','Fe (goes from 0 to +3)'],
   correct:1,
   solution:'<p>Fe in Fe2O3 = +3; Fe in pure Fe(l) = 0 → Fe DECREASES from +3 to 0 → Fe is REDUCED (gains electrons). C in CO: C + (-2) = 0 → C = +2. In CO2: C + 2(-2) = 0 → C = +4. C INCREASES from +2 to +4 → C is OXIDIZED. So: Fe2O3 is the oxidizing agent; CO is the reducing agent. This is why CO is pumped into blast furnaces to reduce iron ore to iron metal.</p>'},

  /* ════════════════════ EXPANSION BATCH — 60 problems (20 easy / 25 medium / 15 hard) ════════════════════ */

  /* ── EASY (20) ── */
  {id:'p82',difficulty:'easy',type:'concept',tag:'Equations',q:'What does (s) mean after a substance in a chemical equation?',choices:['Solid','Solution','Solvent','Spectator'],correct:0,solution:'<p>(s) means the substance is a solid. The four common state symbols are (s) solid, (l) liquid, (g) gas, and (aq) aqueous (dissolved in water).</p>'},
  {id:'p83',difficulty:'easy',type:'concept',tag:'Equations',q:'What does (g) mean after a substance in a chemical equation?',choices:['Gas','Gram','Ground state','Given'],correct:0,solution:'<p>(g) means the substance is in the gas phase at the conditions of the reaction.</p>'},
  {id:'p84',difficulty:'easy',type:'concept',tag:'Equations',q:'What does (l) mean after a substance in a chemical equation?',choices:['Liquid','Large','Limiting reactant','Litre'],correct:0,solution:'<p>(l) means the substance is a pure liquid at the conditions of the reaction — for example, H2O(l) is liquid water.</p>'},
  {id:'p85',difficulty:'easy',type:'concept',tag:'Reaction Types',q:'A reaction follows the pattern AB + CD → AD + CB. What type of reaction is this?',choices:['Double replacement','Synthesis','Decomposition','Combustion'],correct:0,solution:'<p>Double replacement (also called double displacement) reactions swap the partners of two ionic compounds: AB + CD → AD + CB. Precipitation and neutralization reactions are both types of double replacement.</p>'},
  {id:'p86',difficulty:'easy',type:'concept',tag:'Reaction Types',q:'Which reaction type follows the pattern AB → A + B?',choices:['Decomposition','Synthesis','Single replacement','Double replacement'],correct:0,solution:'<p>Decomposition reactions break one compound apart into two or more simpler substances: AB → A + B.</p>'},
  {id:'p87',difficulty:'easy',type:'concept',tag:'Reaction Types',q:'Which reaction type follows the pattern A + BC → AC + B?',choices:['Single replacement','Synthesis','Decomposition','Double replacement'],correct:0,solution:'<p>Single replacement reactions have one free element replace another element within a compound: A + BC → AC + B.</p>'},
  {id:'p88',difficulty:'easy',type:'concept',tag:'Combustion',q:'Complete combustion of a hydrocarbon in excess oxygen always produces which two products?',choices:['CO2 and H2O','CO and H2','C and O2','Only CO2'],correct:0,solution:'<p>With enough oxygen, every hydrocarbon burns completely to form carbon dioxide (CO2) and water (H2O).</p>'},
  {id:'p89',difficulty:'easy',type:'concept',tag:'Equations',q:'Which symbol means "yields" or "produces" in a chemical equation?',choices:['→','=','+','↔'],correct:0,solution:'<p>The arrow (→) points from reactants to products and is read as "yields" or "produces." An equals sign would incorrectly imply a mathematical equality.</p>'},
  {id:'p90',difficulty:'easy',type:'concept',tag:'Equations',q:'Coefficients can be changed to balance an equation, but ______ can never be changed.',choices:['subscripts','arrows','state symbols','the plus signs'],correct:0,solution:'<p>Subscripts are part of a substance\'s chemical identity — changing them would create a different substance entirely. Only coefficients (multipliers in front of formulas) can be adjusted when balancing.</p>'},
  {id:'p91',difficulty:'easy',type:'concept',tag:'Acid-Base',q:'Bases release which ion when dissolved in water?',choices:['OH^- (hydroxide)','H^+ (hydrogen)','Na^+ (sodium)','Cl^- (chloride)'],correct:0,solution:'<p>Bases release hydroxide ions (OH^-) in water, while acids release hydrogen ions (H^+). This is the defining chemical behavior that distinguishes the two.</p>'},
  {id:'p92',difficulty:'easy',type:'concept',tag:'Acid-Base',q:'A neutralization reaction between an acid and a base always produces which two things?',choices:['A salt and water','An acid and a base','A gas and a solid','Two different acids'],correct:0,solution:'<p>Acid + base → salt + water is the universal pattern for neutralization. For example, HCl + NaOH → NaCl + H2O.</p>'},
  {id:'p93',difficulty:'easy',type:'calc',tag:'Balancing',q:'Balance: _H2 + _Br2 → _HBr. What is the coefficient in front of HBr?',answer:2,tolerance:0,solution:'<p>Balanced: H2 + Br2 → 2HBr. Check: H:2=2✓, Br:2=2✓. Coefficient of HBr = <strong>2</strong>.</p>'},
  {id:'p94',difficulty:'easy',type:'calc',tag:'Balancing',q:'Balance: _Mg + _O2 → _MgO. What is the coefficient in front of MgO?',answer:2,tolerance:0,solution:'<p>Balanced: 2Mg + O2 → 2MgO. Check: Mg:2=2✓, O:2=2✓. Coefficient of MgO = <strong>2</strong>.</p>'},
  {id:'p95',difficulty:'easy',type:'calc',tag:'Balancing',q:'Balance: _K + _Cl2 → _KCl. What is the coefficient in front of K?',answer:2,tolerance:0,solution:'<p>Balanced: 2K + Cl2 → 2KCl. Check: K:2=2✓, Cl:2=2✓. Coefficient of K = <strong>2</strong>.</p>'},
  {id:'p96',difficulty:'easy',type:'calc',tag:'Oxidation Numbers',q:'What is the oxidation number of Na in NaCl? (enter as a signed number)',isText:true,answer:'+1',solution:'<p>Cl is -1 (typical for a halide). Neutral compound: Na + (-1) = 0 → Na = <strong>+1</strong>.</p>'},
  {id:'p97',difficulty:'easy',type:'calc',tag:'Oxidation Numbers',q:'What is the oxidation number of O in H2O? (enter as a signed number)',isText:true,answer:'-2',solution:'<p>H is +1 each, ×2 = +2. Neutral molecule: 2 + O = 0 → O = <strong>-2</strong> (the typical oxidation number for oxygen).</p>'},
  {id:'p98',difficulty:'easy',type:'concept',tag:'Oxidation Numbers',q:'Pure elements (like Fe, N2, or O2) always have an oxidation number of:',choices:['0','+1','-1','It depends on the element'],correct:0,solution:'<p>Any pure element — whether a single atom or a diatomic/polyatomic molecule of the same element — has an oxidation number of 0, since there is no other element present to compare electronegativity against.</p>'},
  {id:'p99',difficulty:'easy',type:'concept',tag:'Precipitation',q:'A precipitate forms when two ______ solutions are mixed and an insoluble solid appears.',choices:['aqueous ionic','pure elemental','gaseous','solid'],correct:0,solution:'<p>Precipitation reactions occur when ions from two separate aqueous (dissolved) solutions combine to form a new compound that is insoluble in water, causing it to fall out of solution as a solid.</p>'},
  {id:'p100',difficulty:'easy',type:'concept',tag:'Precipitation',q:'Compounds containing which ion are ALWAYS soluble in water?',choices:['Nitrate (NO3^-)', 'Carbonate (CO3^2-)', 'Hydroxide (OH^-)', 'Sulfide (S^2-)'],correct:0,solution:'<p>Every nitrate compound is soluble in water — this is one of the most reliable solubility rules. Carbonates, hydroxides, and sulfides are generally insoluble, with only a few specific exceptions.</p>'},
  {id:'p101',difficulty:'easy',type:'calc',tag:'Balancing',q:'Balance: _Zn + _S → _ZnS. What is the coefficient in front of Zn?',answer:1,tolerance:0,solution:'<p>This equation is already balanced with a coefficient of 1: Zn + S → ZnS. Check: Zn:1=1✓, S:1=1✓.</p>'},

  /* ── MEDIUM (25) ── */
  {id:'p102',difficulty:'medium',type:'concept',tag:'Reaction Types',q:'Zn(s) + CuSO4(aq) → ZnSO4(aq) + Cu(s). What type of reaction is this?',choices:['Single replacement','Double replacement','Synthesis','Decomposition'],correct:0,solution:'<p>Zn replaces Cu within the compound CuSO4 — one free element swapping for another inside a compound is the signature of a single replacement reaction.</p>'},
  {id:'p103',difficulty:'medium',type:'concept',tag:'Precipitation',q:'Which of the following compounds is INSOLUBLE in water (forms a precipitate)?',choices:['PbSO4','NaCl','KOH','NH4Cl'],correct:0,solution:'<p>PbSO4 is insoluble — lead(II) sulfate is a well-known exception to the "most sulfates are soluble" rule. NaCl is soluble (most chlorides), KOH is soluble (Group 1 hydroxide), and NH4Cl is soluble (all ammonium compounds dissolve).</p>'},
  {id:'p104',difficulty:'medium',type:'calc',tag:'Oxidation Numbers',q:'What is the oxidation number of S in SO3? (enter as a signed number)',isText:true,answer:'+4',solution:'<p>O = -2 each × 3 = -6. Neutral: S + (-6) = 0 → S = <strong>+4</strong>.</p>'},
  {id:'p105',difficulty:'medium',type:'calc',tag:'Oxidation Numbers',q:'What is the oxidation number of Cl in ClO2^-? (enter as a signed number)',isText:true,answer:'+3',solution:'<p>Ion charge = -1. O = -2 each × 2 = -4. Cl + (-4) = -1 → Cl = <strong>+3</strong>.</p>'},
  {id:'p106',difficulty:'medium',type:'calc',tag:'Oxidation Numbers',q:'What is the oxidation number of Cr in Cr2O3? (enter as a signed number)',isText:true,answer:'+3',solution:'<p>Neutral compound. O = -2 each × 3 = -6. 2 Cr + (-6) = 0 → 2 Cr = +6 → each Cr = <strong>+3</strong>.</p>'},
  {id:'p107',difficulty:'medium',type:'calc',tag:'Balancing',q:'Balance the combustion of butane: _C4H10 + _O2 → _CO2 + _H2O. What is the coefficient in front of O2?',answer:13,tolerance:0,solution:'<p>Balanced: 2C4H10 + 13O2 → 8CO2 + 10H2O. Products: 16 O (8CO2) + 10 O (10H2O) = 26 O atoms → 13 O2. Coefficient of O2 = <strong>13</strong>.</p>'},
  {id:'p108',difficulty:'medium',type:'calc',tag:'Balancing',q:'Balance: _Al2O3 → _Al + _O2. What is the sum of all coefficients?',answer:9,tolerance:0,solution:'<p>Balanced: 2Al2O3 → 4Al + 3O2. Sum = 2+4+3 = <strong>9</strong>. Check: Al:4=4✓, O:6=6✓.</p>'},
  {id:'p109',difficulty:'medium',type:'concept',tag:'Net Ionic',q:'K2CO3(aq) + CaCl2(aq) → CaCO3(s) + 2KCl(aq). Which ions are the spectators?',choices:['K^+ and Cl^-','Ca^2+ and CO3^2-','K^+ and Ca^2+','Cl^- and CO3^2-'],correct:0,solution:'<p>K^+ and Cl^- appear on both sides of the complete ionic equation unchanged — they never form a precipitate together (KCl is soluble), so they are spectators.</p>'},
  {id:'p110',difficulty:'medium',type:'concept',tag:'Net Ionic',q:'What is the net ionic equation for K2CO3(aq) + CaCl2(aq) → CaCO3(s) + 2KCl(aq)?',choices:['Ca^2+(aq) + CO3^2-(aq) → CaCO3(s)','K2CO3 + CaCl2 → CaCO3 + 2KCl','K^+ + Cl^- → KCl(s)','2K^+ + CO3^2- → K2CO3'],correct:0,solution:'<p>Removing spectator ions K^+ and Cl^- leaves only the species that actually form the precipitate: Ca^2+(aq) + CO3^2-(aq) → CaCO3(s).</p>'},
  {id:'p111',difficulty:'medium',type:'concept',tag:'Redox',q:'In Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g), which element is oxidized?',choices:['Zn (goes from 0 to +2)','H (goes from +1 to 0)','Cl (stays at -1)','No element is oxidized'],correct:0,solution:'<p>Zn starts as a pure element (oxidation number 0) and becomes Zn^2+ in ZnCl2 — its oxidation number increases, meaning it loses electrons and is oxidized.</p>'},
  {id:'p112',difficulty:'medium',type:'concept',tag:'Redox',q:'In Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g), what is the oxidizing agent?',choices:['H^+ (in HCl)','Zn','Cl^-','H2'],correct:0,solution:'<p>H^+ is reduced (from +1 to 0), gaining electrons from Zn. The species that gets reduced (gains electrons) is, by definition, the oxidizing agent.</p>'},
  {id:'p113',difficulty:'medium',type:'calc',tag:'Balancing',q:'Balance: _KClO3 → _KCl + _O2. What is the coefficient in front of O2?',answer:3,tolerance:0,solution:'<p>Balanced: 2KClO3 → 2KCl + 3O2. Check: K:2=2✓, Cl:2=2✓, O:6=6✓. Coefficient of O2 = <strong>3</strong>.</p>'},
  {id:'p114',difficulty:'medium',type:'calc',tag:'Oxidation Numbers',q:'What is the oxidation number of N in N2O5? (enter as a signed number)',isText:true,answer:'+5',solution:'<p>Neutral compound. O = -2 each × 5 = -10. 2 N + (-10) = 0 → 2 N = +10 → each N = <strong>+5</strong>.</p>'},
  {id:'p115',difficulty:'medium',type:'concept',tag:'Precipitation',q:'AgNO3(aq) is mixed with NaBr(aq). What happens?',choices:['AgBr(s) precipitates; NaNO3 stays dissolved','AgNO3(s) precipitates; NaBr stays dissolved','No reaction occurs; all products are soluble','NaAg forms as a precipitate'],correct:0,solution:'<p>Swapping ions gives AgBr and NaNO3. AgBr is insoluble (silver halides, except AgF, are insoluble) — it precipitates. NaNO3 is soluble (all nitrates and all Group 1 salts dissolve), so it stays in solution.</p>'},
  {id:'p116',difficulty:'medium',type:'calc',tag:'Balancing',q:'Balance: _Ba(OH)2 + _H3PO4 → _Ba3(PO4)2 + _H2O. What is the coefficient in front of H3PO4?',answer:2,tolerance:0,solution:'<p>Balanced: 3Ba(OH)2 + 2H3PO4 → Ba3(PO4)2 + 6H2O. Check: Ba:3=3✓, P:2=2✓, O:6+8=14=8+6=14✓, H:6+6=12=12✓. Coefficient of H3PO4 = <strong>2</strong>.</p>'},
  {id:'p117',difficulty:'medium',type:'concept',tag:'Redox',q:'Is 2Mg(s) + O2(g) → 2MgO(s) a redox reaction?',choices:['Yes — Mg goes from 0 to +2 (oxidized), O goes from 0 to -2 (reduced)','No — no ions are formed','No — synthesis reactions are never redox','Yes, but only because Mg is a metal'],correct:0,solution:'<p>Both elements change oxidation number: Mg increases from 0 to +2 (oxidized), and O decreases from 0 to -2 (reduced). Any reaction where oxidation numbers change is a redox reaction, regardless of its other classification (this one is also a synthesis reaction).</p>'},
  {id:'p118',difficulty:'medium',type:'concept',tag:'Reaction Types',q:'2H2(g) + O2(g) → 2H2O(l). How should this reaction BEST be classified?',choices:['Synthesis AND redox','Synthesis only, not redox','Combustion only','Decomposition'],correct:0,solution:'<p>Two elements combine into one compound — synthesis. H goes from 0 to +1 (oxidized) and O goes from 0 to -2 (reduced) — also redox. Reaction type categories are not mutually exclusive.</p>'},
  {id:'p119',difficulty:'medium',type:'calc',tag:'Oxidation Numbers',q:'What is the oxidation number of Mn in Mn2O3? (enter as a signed number)',isText:true,answer:'+3',solution:'<p>Neutral compound. O = -2 each × 3 = -6. 2 Mn + (-6) = 0 → 2 Mn = +6 → each Mn = <strong>+3</strong>.</p>'},
  {id:'p120',difficulty:'medium',type:'calc',tag:'Balancing',q:'Balance: _Fe2O3 + _CO → _Fe + _CO2. What is the coefficient in front of CO?',answer:3,tolerance:0,solution:'<p>Balanced: Fe2O3 + 3CO → 2Fe + 3CO2. Check: Fe:2=2✓, O:3+3=6=6✓, C:3=3✓. Coefficient of CO = <strong>3</strong>.</p>'},
  {id:'p121',difficulty:'medium',type:'concept',tag:'Acid-Base',q:'Which of the following is a strong acid that fully dissociates in water?',choices:['HCl','NH3','CH3COOH','H2O'],correct:0,solution:'<p>HCl is a strong acid — it fully ionizes into H^+ and Cl^- in water. NH3 is a weak base, CH3COOH (acetic acid) is a weak acid, and H2O is neutral.</p>'},
  {id:'p122',difficulty:'medium',type:'concept',tag:'Acid-Base',q:'Which of the following is a strong base that fully dissociates in water?',choices:['NaOH','NH3','CH3COOH','HCl'],correct:0,solution:'<p>NaOH is a strong base — it fully dissociates into Na^+ and OH^- in water. NH3 is only a weak base (it only partially reacts with water), CH3COOH is a weak acid, and HCl is a strong acid.</p>'},
  {id:'p123',difficulty:'medium',type:'calc',tag:'Balancing',q:'Balance the combustion of glucose (cellular respiration): _C6H12O6 + _O2 → _CO2 + _H2O. What is the coefficient in front of O2?',answer:6,tolerance:0,solution:'<p>Balanced: C6H12O6 + 6O2 → 6CO2 + 6H2O. Check: C:6=6✓, H:12=12✓, O:6+12=18=12+6=18✓. Coefficient of O2 = <strong>6</strong>.</p>'},
  {id:'p124',difficulty:'medium',type:'concept',tag:'Net Ionic',q:'NaCl(aq) is mixed with KNO3(aq). What happens?',choices:['No reaction occurs — all possible product combinations (NaCl, KNO3, NaNO3, KCl) are soluble','NaK forms as a precipitate','ClNO3 forms as a precipitate','NaCl reacts with itself'],correct:0,solution:'<p>Swapping ions would give NaNO3 and KCl — but both are soluble (all nitrates and all Group 1 salts dissolve). Since no insoluble product can form, no reaction occurs; all four ions simply remain dissolved together.</p>'},
  {id:'p125',difficulty:'medium',type:'calc',tag:'Oxidation Numbers',q:'What is the oxidation number of Br in BrO3^-? (enter as a signed number)',isText:true,answer:'+5',solution:'<p>Ion charge = -1. O = -2 each × 3 = -6. Br + (-6) = -1 → Br = <strong>+5</strong>.</p>'},
  {id:'p126',difficulty:'medium',type:'concept',tag:'Reaction Types',q:'2KClO3(s) → 2KCl(s) + 3O2(g). What type of reaction is this?',choices:['Decomposition','Synthesis','Single replacement','Double replacement'],correct:0,solution:'<p>One compound (KClO3) breaks apart into two simpler substances (KCl and O2) — the pattern AB → A + B, which is decomposition.</p>'},

  /* ── HARD (15) ── */
  {id:'p127',difficulty:'hard',type:'multi',tag:'Redox Balancing',q:'Balance the redox equation in acidic solution: _Cr2O7^2- + _Fe^2+ + _H^+ → _Cr^3+ + _Fe^3+ + _H2O. What is the coefficient in front of Fe^2+?',choices:['6','3','2','14'],correct:0,solution:'<p>Balanced: Cr2O7^2- + 6Fe^2+ + 14H^+ → 2Cr^3+ + 6Fe^3+ + 7H2O. Atom check: Cr:2=2, Fe:6=6, O:7=7, H:14=14. Charge check: left = -2+6(2)+14(1) = 24; right = 2(3)+6(3) = 24 ✓. Coefficient of Fe^2+ = <strong>6</strong>.</p>'},
  {id:'p128',difficulty:'hard',type:'multi',tag:'Redox Full Analysis',q:'For the balanced redox equation MnO4^- + 5Fe^2+ + 8H^+ → Mn^2+ + 5Fe^3+ + 4H2O, which statement is correct?',choices:['Charge balances on both sides (+17 = +17); MnO4^- is the oxidizing agent, Fe^2+ is the reducing agent','Charge does not balance, so this equation must be wrong','Fe^2+ is the oxidizing agent since it has the highest coefficient','Mn^2+ is the oxidizing agent since manganese is a transition metal'],correct:0,solution:'<p>Left charge: -1 + 5(+2) + 8(+1) = -1+10+8 = +17. Right charge: +2 + 5(+3) = +2+15 = +17 — balanced. Mn goes from +7 to +2 (reduced) → MnO4^- is the oxidizing agent. Fe goes from +2 to +3 (oxidized) → Fe^2+ is the reducing agent.</p>'},
  {id:'p129',difficulty:'hard',type:'calc',tag:'Balancing',q:'Balance the reaction of copper with dilute nitric acid: _Cu + _HNO3 → _Cu(NO3)2 + _NO + _H2O. What is the coefficient in front of HNO3?',answer:8,tolerance:0,solution:'<p>Balanced: 3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO + 4H2O. Check: Cu:3=3, H:8=8, N:8=6+2=8, O:24=18+2+4=24. Coefficient of HNO3 = <strong>8</strong>.</p>'},
  {id:'p130',difficulty:'hard',type:'concept',tag:'Redox Agents',q:'In the reaction 3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO + 4H2O, only 2 of the 8 HNO3 molecules are actually reduced (their N changes from +5 to +2). What role do the other 6 HNO3 play?',choices:['They simply provide NO3^- ions to balance the Cu^2+ charge in Cu(NO3)2, acting as spectator-like counter-ions rather than being reduced','They are oxidized instead of reduced','They evaporate and do not participate in the reaction at all','They act as a catalyst, unchanged before and after'],correct:0,solution:'<p>Only the HNO3 molecules whose nitrogen changes oxidation state (from +5 in HNO3 to +2 in NO) are actually acting as the oxidizing agent. The remaining NO3^- ions simply pair with Cu^2+ to form the neutral salt Cu(NO3)2, without their nitrogen changing oxidation state.</p>'},
  {id:'p131',difficulty:'hard',type:'calc',tag:'Oxidation Numbers',q:'What is the oxidation number of S in S2O3^2- (thiosulfate), treated as an average? (enter as a signed number)',isText:true,answer:'+2',solution:'<p>Ion charge = -2. O = -2 each × 3 = -6. 2 S + (-6) = -2 → 2 S = +4 → each S = <strong>+2</strong> (this is an average — in the real structure, the two sulfur atoms are not chemically identical and have different true oxidation states, but the simplified rules give the average).</p>'},
  {id:'p132',difficulty:'hard',type:'calc',tag:'Balancing',q:'Balance: _Al + _H2SO4 → _Al2(SO4)3 + _H2. What is the sum of all coefficients?',answer:9,tolerance:0,solution:'<p>Balanced: 2Al + 3H2SO4 → Al2(SO4)3 + 3H2. Sum = 2+3+1+3 = <strong>9</strong>. Check: Al:2=2✓, H:6=6✓, S:3=3✓, O:12=12✓.</p>'},
  {id:'p133',difficulty:'hard',type:'multi',tag:'Redox Full Analysis',q:'For the combustion reaction C3H8 + 5O2 → 3CO2 + 4H2O, which statement correctly identifies the redox changes?',choices:['Oxygen is reduced, going from 0 in O2 to -2 in both CO2 and H2O; carbon is oxidized (its oxidation state increases from propane to CO2)','Carbon is reduced; oxygen is oxidized','Neither carbon nor oxygen changes oxidation state','Hydrogen is oxidized from -1 to +1'],correct:0,solution:'<p>Every combustion reaction is a redox reaction. Oxygen always starts at 0 (as O2) and ends at -2 in both products — reduced. Carbon\'s oxidation state increases as it goes from the hydrocarbon to CO2 — oxidized. Hydrogen stays at +1 throughout (unchanged).</p>'},
  {id:'p134',difficulty:'hard',type:'multi',tag:'Precipitation',q:'Pb(NO3)2(aq) is mixed with K2CrO4(aq), producing chrome yellow pigment. What is the correct net ionic equation?',choices:['Pb^2+(aq) + CrO4^2-(aq) → PbCrO4(s)','Pb(NO3)2 + K2CrO4 → PbCrO4 + 2KNO3','K^+ + NO3^- → KNO3(s)','2K^+ + Pb^2+ → PbK2'],correct:0,solution:'<p>Swapping ions gives PbCrO4 (insoluble — lead compounds with polyatomic oxyanions are often insoluble) and KNO3 (soluble). Spectators: K^+ and NO3^-. Net ionic: Pb^2+(aq) + CrO4^2-(aq) → PbCrO4(s).</p>'},
  {id:'p135',difficulty:'hard',type:'multi',tag:'Redox Full Analysis',q:'In the disproportionation reaction 3Cl2 + 6NaOH(hot) → 5NaCl + NaClO3 + 3H2O, what happens to chlorine?',choices:['Cl is both oxidized (0→+5, forming ClO3^-) and reduced (0→-1, forming Cl^-) — a disproportionation reaction','Cl is only oxidized, never reduced','Cl is only reduced, never oxidized','No redox occurs since only one element (Cl) changes'],correct:0,solution:'<p>In a disproportionation reaction, the SAME element is simultaneously oxidized and reduced. Here, some Cl atoms (starting at 0 in Cl2) end up at -1 in NaCl (reduced), while others end up at +5 in NaClO3 (oxidized) — both changes happen to chlorine atoms from the same starting material.</p>'},
  {id:'p136',difficulty:'hard',type:'calc',tag:'Balancing',q:'Balance the thermite reaction: _Al + _Fe2O3 → _Al2O3 + _Fe. What is the sum of all coefficients?',answer:6,tolerance:0,solution:'<p>Balanced: 2Al + Fe2O3 → Al2O3 + 2Fe. Sum = 2+1+1+2 = <strong>6</strong>. Check: Al:2=2✓, Fe:2=2✓, O:3=3✓.</p>'},
  {id:'p137',difficulty:'hard',type:'concept',tag:'Acid-Base',q:'Why does HCl(aq) + NaHCO3(aq) → NaCl(aq) + H2O(l) + CO2(g) produce visible bubbling, unlike a typical acid-base neutralization?',choices:['It is fundamentally still an acid-base reaction (H^+ transfers to HCO3^-), but the resulting carbonic acid (H2CO3) is unstable and immediately decomposes into H2O and CO2 gas, causing the bubbling as a secondary consequence','It is not actually an acid-base reaction at all — it is pure decomposition','Bubbling occurs because HCl is a gas being released unreacted','NaHCO3 is not really a base, so no acid-base chemistry is involved'],correct:0,solution:'<p>NaHCO3 acts as a base by accepting H^+ from HCl, forming the intermediate H2CO3 (carbonic acid). Carbonic acid is unstable at room temperature and spontaneously decomposes into water and carbon dioxide gas — explaining the fizzing without contradicting the fundamentally acid-base nature of the reaction.</p>'},
  {id:'p138',difficulty:'hard',type:'multi',tag:'Net Ionic',q:'Al2(SO4)3(aq) + 3BaCl2(aq) → 2AlCl3(aq) + 3BaSO4(s). What is the net ionic equation and what are the spectator ions?',choices:['Net ionic: Ba^2+(aq) + SO4^2-(aq) → BaSO4(s); spectators are Al^3+ and Cl^-','Net ionic: Al^3+(aq) + Cl^-(aq) → AlCl3(s); spectators are Ba^2+ and SO4^2-','No reaction occurs since all sulfates are soluble','Net ionic: 2Al^3+ + 3Ba^2+ → complex mixture; no spectators exist'],correct:0,solution:'<p>BaSO4 is insoluble (barium sulfate is a classic exception to "most sulfates are soluble"). AlCl3 is soluble. Al^3+ and Cl^- appear unchanged on both sides — they are spectators. Net ionic: Ba^2+(aq) + SO4^2-(aq) → BaSO4(s).</p>'},
  {id:'p139',difficulty:'hard',type:'calc',tag:'Oxidation Numbers',q:'What is the oxidation number of O in Na2O2 (sodium peroxide)? (enter as a signed number)',isText:true,answer:'-1',solution:'<p>Na is +1 each × 2 = +2. Neutral compound: +2 + 2(O) = 0 → 2(O) = -2 → each O = <strong>-1</strong>. This is the peroxide exception — oxygen is -1 rather than the usual -2 when it is directly bonded to another oxygen (O-O bond) rather than to a more electropositive element alone.</p>'},
  {id:'p140',difficulty:'hard',type:'multi',tag:'Redox Balancing',q:'Balance: _KI + _Cl2 → _KCl + _I2, then identify the oxidizing and reducing agents.',choices:['2KI + Cl2 → 2KCl + I2; Cl2 is the oxidizing agent (0→-1), I^- is the reducing agent (-1→0)','KI + Cl2 → KCl + I2; already balanced as written','2KI + Cl2 → 2KCl + I2; Cl2 is the reducing agent, I^- is the oxidizing agent','KI + 2Cl2 → KCl + 2I2'],correct:0,solution:'<p>Balanced: 2KI + Cl2 → 2KCl + I2 (check: K:2=2, I:2=2, Cl:2=2). Cl goes from 0 to -1 (reduced) → Cl2 is the oxidizing agent. I goes from -1 to 0 (oxidized) → I^- (in KI) is the reducing agent. This reflects chlorine\'s greater reactivity as a halogen compared to iodine.</p>'},
  {id:'p141',difficulty:'hard',type:'concept',tag:'Reaction Types',q:'A student claims "every double replacement reaction produces a precipitate." Evaluate this claim using HCl + NaOH → NaCl + H2O as a counterexample.',choices:['The claim is false — HCl+NaOH→NaCl+H2O technically follows the double replacement pattern (ions swap partners), yet no precipitate forms because both NaCl and H2O remain soluble/liquid; a precipitate only forms when one product happens to be insoluble','The claim is true — HCl+NaOH does produce a precipitate (NaCl)','The claim is true because H2O is technically a precipitate','HCl+NaOH is not a double replacement reaction, so it doesn\'t disprove the claim'],correct:0,solution:'<p>Double replacement describes the PATTERN of ion-swapping (AB+CD→AD+CB), not a guarantee of a specific outcome. Whether a precipitate forms depends entirely on the solubility of the specific products — acid-base neutralizations are double replacement reactions where both products (a soluble salt and water) happen to stay dissolved/liquid.</p>'},

  /* ════════════════════ HARD EXPANSION BATCH — 30 additional hard problems ════════════════════ */
  {id:'p142',difficulty:'hard',type:'calc',tag:'Balancing',q:'Balance the reaction of zinc with dilute nitric acid, where nitrogen is reduced all the way to ammonium: _Zn + _HNO3 → _Zn(NO3)2 + _NH4NO3 + _H2O. What is the coefficient in front of HNO3?',answer:10,tolerance:0,solution:'<p>Balanced: 4Zn + 10HNO3 → 4Zn(NO3)2 + NH4NO3 + 3H2O. Check: Zn:4=4, H:10=4+6=10, N:10=8+2=10, O:30=24+3+3=30. Coefficient of HNO3 = <strong>10</strong>.</p>'},
  {id:'p143',difficulty:'hard',type:'concept',tag:'Redox Agents',q:'In the reaction 4Zn + 10HNO3 → 4Zn(NO3)2 + NH4NO3 + 3H2O, which statement correctly identifies the redox roles?',choices:['Zn is the reducing agent (0→+2); HNO3/NO3^- is the oxidizing agent, with N reduced all the way from +5 to -3 (an 8-electron change) to form ammonium','Zn is the oxidizing agent; HNO3 is the reducing agent','No redox occurs since ammonium is a polyatomic ion','H is oxidized from +1 to +5'],correct:0,solution:'<p>Zn loses electrons (0→+2, oxidized) making it the reducing agent. The nitrogen that ends up in NH4^+ underwent an enormous change from +5 (in HNO3) to -3 (in NH4^+) — an 8-electron reduction — making that portion of HNO3 the oxidizing agent.</p>'},
  {id:'p144',difficulty:'hard',type:'calc',tag:'Oxidation Numbers',q:'What is the oxidation number of C in C2O4^2- (oxalate)? (enter as a signed number)',isText:true,answer:'+3',solution:'<p>Ion charge = -2. O = -2 each × 4 = -8. 2 C + (-8) = -2 → 2 C = +6 → each C = <strong>+3</strong>.</p>'},
  {id:'p145',difficulty:'hard',type:'calc',tag:'Oxidation Numbers',q:'What is the oxidation number of Cl in ClO4^-? (enter as a signed number)',isText:true,answer:'+7',solution:'<p>Ion charge = -1. O = -2 each × 4 = -8. Cl + (-8) = -1 → Cl = <strong>+7</strong> — the highest possible oxidation state for chlorine.</p>'},
  {id:'p146',difficulty:'hard',type:'calc',tag:'Balancing',q:'Balance this classic redox titration: _KMnO4 + _H2C2O4 + _H2SO4 → _MnSO4 + _CO2 + _K2SO4 + _H2O. What is the coefficient in front of KMnO4?',answer:2,tolerance:0,solution:'<p>Balanced: 2KMnO4 + 5H2C2O4 + 3H2SO4 → 2MnSO4 + 10CO2 + K2SO4 + 8H2O. Check: K:2=2, Mn:2=2, C:10=10, S:3=3, O:40=40, H:16=16. Coefficient of KMnO4 = <strong>2</strong>.</p>'},
  {id:'p147',difficulty:'hard',type:'concept',tag:'Oxidation Numbers',q:'In the reaction from the previous problem, oxalic acid (H2C2O4) is oxidized even though it contains no elemental carbon. How can this be explained using oxidation numbers?',choices:['Carbon in oxalic acid has an oxidation number of +3; in the product CO2, carbon is +4 — the increase in oxidation number means carbon was oxidized, even without any elemental carbon being involved','Oxidation can only occur when a pure element is present, so this reaction cannot actually be a redox reaction','Oxalic acid cannot be oxidized because it already contains oxygen','The hydrogen in oxalic acid is what gets oxidized, not the carbon'],correct:0,solution:'<p>Oxidation is defined by an INCREASE in oxidation number, regardless of whether elemental forms are involved. Carbon in H2C2O4 (+3) increasing to +4 in CO2 is a clear, quantifiable oxidation — electrons are lost even though no free element appears anywhere in the reaction.</p>'},
  {id:'p148',difficulty:'hard',type:'calc',tag:'Balancing',q:'Balance the combustion of octane (gasoline): _C8H18 + _O2 → _CO2 + _H2O. What is the coefficient in front of O2?',answer:25,tolerance:0,solution:'<p>Balanced: 2C8H18 + 25O2 → 16CO2 + 18H2O. Check: C:16=16, H:36=36, O:50=50. Coefficient of O2 = <strong>25</strong>.</p>'},
  {id:'p149',difficulty:'hard',type:'multi',tag:'Net Ionic',q:'(NH4)2S(aq) + CuCl2(aq) → CuS(s) + 2NH4Cl(aq). What is the net ionic equation and the spectator ions?',choices:['Net ionic: Cu^2+(aq) + S^2-(aq) → CuS(s); spectators are NH4^+ and Cl^-','Net ionic: NH4^+ + Cl^- → NH4Cl(s); spectators are Cu^2+ and S^2-','No reaction occurs since all sulfides are soluble','Net ionic: Cu^2+ + Cl^- → CuCl2; spectators are NH4^+ and S^2-'],correct:0,solution:'<p>CuS is insoluble (most sulfides are insoluble, except Group 1 and ammonium sulfides). NH4Cl is soluble (ammonium compounds are always soluble). Spectators: NH4^+ and Cl^-. Net ionic: Cu^2+(aq) + S^2-(aq) → CuS(s).</p>'},
  {id:'p150',difficulty:'hard',type:'calc',tag:'Oxidation Numbers',q:'What is the oxidation number of As in AsO4^3- (arsenate)? (enter as a signed number)',isText:true,answer:'+5',solution:'<p>Ion charge = -3. O = -2 each × 4 = -8. As + (-8) = -3 → As = <strong>+5</strong>.</p>'},
  {id:'p151',difficulty:'hard',type:'calc',tag:'Balancing',q:'Balance: _Ag2O → _Ag + _O2. What is the sum of all coefficients?',answer:7,tolerance:0,solution:'<p>Balanced: 2Ag2O → 4Ag + O2. Sum = 2+4+1 = <strong>7</strong>. Check: Ag:4=4✓, O:2=2✓.</p>'},
  {id:'p152',difficulty:'hard',type:'concept',tag:'Reaction Types',q:'A student claims "since Mg reacts with HCl in a single replacement reaction, ALL metals must react with HCl the same way." Evaluate this using the activity series.',choices:['The claim is false — the activity series shows metals like Cu, Ag, and Au are LESS reactive than hydrogen and do NOT react with HCl at all, since single replacement only occurs when the replacing element is more reactive than the element it displaces','The claim is true — every metal reacts identically with HCl','The claim is true, but only for Group 1 and Group 2 metals','Single replacement reactions do not depend on relative reactivity at all'],correct:0,solution:'<p>The activity series ranks metals by reactivity. Only metals ABOVE hydrogen on the series (like Mg, Zn, Fe) will displace H from HCl in a single replacement reaction. Metals below hydrogen (Cu, Ag, Au) are too unreactive to displace it, so no reaction occurs.</p>'},
  {id:'p153',difficulty:'hard',type:'calc',tag:'Balancing',q:'Balance a key step in industrial nitric acid production: _NH3 + _O2 → _NO + _H2O. What is the coefficient in front of O2?',answer:5,tolerance:0,solution:'<p>Balanced: 4NH3 + 5O2 → 4NO + 6H2O. Check: N:4=4, H:12=12, O:10=4+6=10. Coefficient of O2 = <strong>5</strong>.</p>'},
  {id:'p154',difficulty:'hard',type:'calc',tag:'Oxidation Numbers',q:'What is the oxidation number of N in N2H4 (hydrazine)? (enter as a signed number)',isText:true,answer:'-2',solution:'<p>H is +1 each × 4 = +4. Neutral molecule: 2N + 4 = 0 → 2N = -4 → each N = <strong>-2</strong>.</p>'},
  {id:'p155',difficulty:'hard',type:'multi',tag:'Precipitation',q:'(NH4)2CO3(aq) is mixed with MgCl2(aq). Which product precipitates?',choices:['MgCO3(s) precipitates (carbonates are generally insoluble); NH4Cl remains dissolved (ammonium compounds are always soluble)','NH4Cl(s) precipitates; MgCO3 remains dissolved','Both products precipitate','Neither product precipitates'],correct:0,solution:'<p>Swapping ions gives MgCO3 and NH4Cl. MgCO3 is insoluble (carbonates are insoluble except for Group 1 metals and ammonium). NH4Cl is soluble (all ammonium salts dissolve). MgCO3 is the precipitate.</p>'},
  {id:'p156',difficulty:'hard',type:'calc',tag:'Balancing',q:'Balance the industrial production of carbon disulfide: _C + _SO2 → _CS2 + _CO. What is the coefficient in front of C?',answer:5,tolerance:0,solution:'<p>Balanced: 5C + 2SO2 → CS2 + 4CO. Check: C:5=1+4=5, S:2=2, O:4=4. Coefficient of C = <strong>5</strong>.</p>'},
  {id:'p157',difficulty:'hard',type:'concept',tag:'Net Ionic',q:'Explain the difference between a "complete ionic equation" and a "net ionic equation," using AgNO3(aq) + NaCl(aq) → AgCl(s) + NaNO3(aq) as an example.',choices:['The complete ionic equation shows ALL dissolved ions, including spectators (Ag^++NO3^-+Na^++Cl^-→AgCl(s)+Na^++NO3^-); the net ionic equation removes the unchanged spectator ions (Na^+ and NO3^-), leaving only Ag^++Cl^-→AgCl(s)', 'They are the same thing with different names', 'The net ionic equation includes MORE detail than the complete ionic equation', 'The complete ionic equation never includes spectator ions'],correct:0,solution:'<p>The complete ionic equation breaks every soluble ionic compound into its dissolved ions. The net ionic equation then strips out any ion that appears identically on both sides without changing (the spectators), leaving only the species that actually participate in forming the new product.</p>'},
  {id:'p158',difficulty:'hard',type:'calc',tag:'Balancing',q:'Balance the formation of magnetite: _Fe + _O2 → _Fe3O4. What is the coefficient in front of O2?',answer:2,tolerance:0,solution:'<p>Balanced: 3Fe + 2O2 → Fe3O4. Check: Fe:3=3✓, O:4=4✓. Coefficient of O2 = <strong>2</strong>.</p>'},
  {id:'p159',difficulty:'hard',type:'concept',tag:'Oxidation Numbers',q:'Fe3O4 (magnetite) is described as a "mixed oxidation state" iron oxide. What does this mean?',choices:['Fe3O4 can be thought of as FeO·Fe2O3 — containing one Fe^2+ ion and two Fe^3+ ions within the same crystal structure, rather than all iron atoms sharing one single oxidation state', 'All three iron atoms in Fe3O4 have exactly the same oxidation number', 'Fe3O4 contains no iron at all', 'The oxidation state of iron in Fe3O4 changes randomly over time'],correct:0,solution:'<p>Unlike simple oxides like FeO (all Fe^2+) or Fe2O3 (all Fe^3+), magnetite\'s crystal structure actually contains iron in two different oxidation states simultaneously — one Fe(II) and two Fe(III) per formula unit — which is what "mixed oxidation state" means.</p>'},
  {id:'p160',difficulty:'hard',type:'calc',tag:'Oxidation Numbers',q:'What is the oxidation number of Xe in XeF4? (enter as a signed number)',isText:true,answer:'+4',solution:'<p>F is always -1 in compounds. 4 F = -4. Neutral molecule: Xe + (-4) = 0 → Xe = <strong>+4</strong>. Xenon can form real compounds despite being a noble gas, because its outer electrons are not held as tightly as lighter noble gases.</p>'},
  {id:'p161',difficulty:'hard',type:'calc',tag:'Balancing',q:'Balance: _K2Cr2O7 + _HCl → _KCl + _CrCl3 + _H2O + _Cl2. What is the coefficient in front of HCl?',answer:14,tolerance:0,solution:'<p>Balanced: K2Cr2O7 + 14HCl → 2KCl + 2CrCl3 + 7H2O + 3Cl2. Check: K:2=2, Cr:2=2, O:7=7, H:14=14, Cl:14=2+6+6=14. Coefficient of HCl = <strong>14</strong>.</p>'},
  {id:'p162',difficulty:'hard',type:'concept',tag:'Redox Agents',q:'In K2Cr2O7 + 14HCl → 2KCl + 2CrCl3 + 7H2O + 3Cl2, only 6 of the 14 Cl^- ions are oxidized to form 3 Cl2. What role do the other 8 Cl^- ions play?',choices:['They act purely as counter-ions, balancing the positive charges of K^+ and Cr^3+ without changing oxidation state, rather than being oxidized themselves', 'They are all reduced further past -1', 'They evaporate without reacting', 'They convert into Cr^3+ ions'],correct:0,solution:'<p>Just as with the HNO3 example, only the portion of Cl^- that actually changes oxidation state (here, 6 of 14, going from -1 to 0 to form Cl2) is functioning as the reducing agent. The remaining 8 Cl^- simply balance the charges of K^+ and Cr^3+ in the products KCl and CrCl3.</p>'},
  {id:'p163',difficulty:'hard',type:'calc',tag:'Balancing',q:'Balance the iodine-thiosulfate titration reaction: _Na2S2O3 + _I2 → _Na2S4O6 + _NaI. What is the coefficient in front of Na2S2O3?',answer:2,tolerance:0,solution:'<p>Balanced: 2Na2S2O3 + I2 → Na2S4O6 + 2NaI. Check: Na:4=4, S:4=4, O:6=6, I:2=2. Coefficient of Na2S2O3 = <strong>2</strong>.</p>'},
  {id:'p164',difficulty:'hard',type:'calc',tag:'Oxidation Numbers',q:'What is the AVERAGE oxidation number of S in S4O6^2- (tetrathionate)? (enter as a signed number, may be a fraction)',isText:true,answer:'+2.5',solution:'<p>Ion charge = -2. O = -2 each × 6 = -12. 4 S + (-12) = -2 → 4 S = +10 → each S = <strong>+2.5</strong> (on average). This is a rare case where the simplified oxidation-number rules give a non-whole-number result, since the sulfur atoms in the real structure are not all chemically identical.</p>'},
  {id:'p165',difficulty:'hard',type:'calc',tag:'Balancing',q:'Balance: _Cu + _H2SO4 → _CuSO4 + _SO2 + _H2O (hot, concentrated sulfuric acid). What is the coefficient in front of H2SO4?',answer:2,tolerance:0,solution:'<p>Balanced: Cu + 2H2SO4 → CuSO4 + SO2 + 2H2O. Check: Cu:1=1, H:4=4, S:2=2, O:8=8. Coefficient of H2SO4 = <strong>2</strong>.</p>'},
  {id:'p166',difficulty:'hard',type:'concept',tag:'Redox',q:'Why can hot, concentrated H2SO4 oxidize copper metal, when dilute H2SO4 or HCl cannot?',choices:['In hot concentrated sulfuric acid, sulfur itself (not H^+) acts as the oxidizing agent, being reduced from +6 in H2SO4 to +4 in SO2 — a different oxidizing pathway than the simple H^+ reduction that dilute acids rely on, which copper (below hydrogen in the activity series) cannot drive', 'Concentrated sulfuric acid contains more water, making it more reactive', 'Copper reacts with any acid regardless of concentration', 'Heat alone causes copper to dissolve without any chemical reaction'],correct:0,solution:'<p>Dilute acids can only oxidize metals that are more reactive than hydrogen (via H^+ reduction to H2). Copper is below hydrogen in the activity series and cannot reduce H^+. But concentrated hot H2SO4 provides an entirely different oxidizing agent — sulfur itself, in the +6 state — which CAN oxidize copper, being reduced to SO2 (+4) in the process.</p>'},
  {id:'p167',difficulty:'hard',type:'calc',tag:'Balancing',q:'Balance the hydrolysis of aluminum carbide: _Al4C3 + _H2O → _Al(OH)3 + _CH4. What is the coefficient in front of H2O?',answer:12,tolerance:0,solution:'<p>Balanced: Al4C3 + 12H2O → 4Al(OH)3 + 3CH4. Check: Al:4=4, C:3=3, H:24=24, O:12=12. Coefficient of H2O = <strong>12</strong>.</p>'},
  {id:'p168',difficulty:'hard',type:'multi',tag:'Net Ionic',q:'Ba(OH)2(aq) + H2SO4(aq) → BaSO4(s) + 2H2O(l). What makes this reaction unusual compared to typical acid-base or precipitation reactions?',choices:['This reaction has NO spectator ions at all — Ba^2+ + 2OH^- + 2H^+ + SO4^2- → BaSO4(s) + 2H2O uses every single ion in the reaction, unlike typical acid-base or precipitation reactions that usually leave some ions as spectators', 'This reaction has more spectator ions than usual', 'This reaction produces no net ionic equation at all', 'Ba(OH)2 does not actually react with H2SO4'], correct:0, solution:'<p>Normally, at least one ion pair remains unchanged as spectators. Here, BOTH the acid-base neutralization (H^++OH^-→H2O) AND the precipitation (Ba^2++SO4^2-→BaSO4(s)) happen simultaneously using every ion present — a genuinely spectator-free reaction.</p>'},
  {id:'p169',difficulty:'hard',type:'calc',tag:'Balancing',q:'Balance: _P4O10 + _H2O → _H3PO4. What is the coefficient in front of H2O?',answer:6,tolerance:0,solution:'<p>Balanced: P4O10 + 6H2O → 4H3PO4. Check: P:4=4, O:16=16, H:12=12. Coefficient of H2O = <strong>6</strong>.</p>'},
  {id:'p170',difficulty:'hard',type:'calc',tag:'Balancing',q:'Balance the cold, dilute disproportionation reaction: _KOH + _Cl2 → _KCl + _KOCl + _H2O. What is the coefficient in front of KOH?',answer:2,tolerance:0,solution:'<p>Balanced: 2KOH + Cl2 → KCl + KOCl + H2O. Check: K:2=2, O:2=2, H:2=2, Cl:2=2. Coefficient of KOH = <strong>2</strong>.</p>'},
  {id:'p171',difficulty:'hard',type:'concept',tag:'Redox',q:'Cold dilute KOH + Cl2 produces KOCl (Cl: 0→-1 and 0→+1), but hot concentrated KOH + Cl2 produces KClO3 instead (Cl: 0→-1 and 0→+5). What general principle does this illustrate?',choices:['The specific products of a disproportionation reaction can depend on reaction conditions like temperature and concentration — the same starting oxidation state (0) can be driven to different final oxidation states depending on how vigorously the reaction proceeds', 'Chlorine always disproportionates to the exact same products regardless of conditions', 'Temperature has no effect on redox reaction outcomes', 'KOCl and KClO3 are actually the same compound'],correct:0,solution:'<p>This shows that reaction conditions (temperature, concentration) can determine not just the RATE of a reaction but its actual PRODUCTS — the same reactants can be pushed toward different final oxidation states depending on how the reaction is run.</p>'},

  /* ── 3 short easy multi-step problems (fill the multi+easy filter gap) ── */
  {id:'p172',difficulty:'easy',type:'multi',tag:'Reaction Types',q:'Two reactions are given: (1) 2Na + Cl2 → 2NaCl, (2) 2NaCl → 2Na + Cl2. Which one is decomposition?',choices:['Reaction 2, because one compound breaks into two elements','Reaction 1, because two elements combine','Both are decomposition','Neither is decomposition'],correct:0,solution:'<p>Reaction 1 (elements combining into a compound) is synthesis. Reaction 2 (a compound breaking into its elements) follows the AB → A + B pattern of decomposition.</p>'},
  {id:'p173',difficulty:'easy',type:'multi',tag:'Acid-Base',q:'A student is given HCl(aq) and NaOH(aq). If mixed, will a precipitate form, and what reaction type is this?',choices:['No precipitate forms; this is an acid-base neutralization producing NaCl (soluble) and water','Yes, NaCl precipitates; this is a precipitation reaction','Yes, water precipitates; this is a synthesis reaction','No reaction occurs at all'],correct:0,solution:'<p>HCl (acid) and NaOH (base) neutralize each other to form NaCl and H2O. NaCl is soluble, so no precipitate forms — this is a straightforward acid-base neutralization, not a precipitation reaction.</p>'},
  {id:'p174',difficulty:'easy',type:'multi',tag:'Redox',q:'In the reaction 2Mg + O2 → 2MgO, does the oxidation number of magnesium increase or decrease, and is it oxidized or reduced?',choices:['Increases (0 to +2); Mg is oxidized','Decreases (0 to -2); Mg is reduced','Stays the same; no redox occurs','Increases (0 to +2); Mg is reduced'],correct:0,solution:'<p>Mg starts as a pure element (0) and becomes Mg^2+ in MgO. Its oxidation number increases from 0 to +2, meaning it lost electrons — it was oxidized.</p>'}

];
