/* ── Unit 08 Problem Bank — Chemical Reactions
   81 problems total: 25 calc | 40 concept | 16 multi
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  /* ════════════════════ CONCEPT (40 problems) ════════════════════ */

  {id:'p01', type:'concept', tag:'Equations',
   q:'What does the arrow (→) mean in a chemical equation?',
   choices:['The reactants and products are equal in mass','The reaction produces the substances on the right from those on the left','The substances are dissolved in water','The reaction is reversible'],
   correct:1,
   solution:'<p>The arrow means "produces" or "yields."</p><p>It separates the reactants on the left from the products on the right. Mass is conserved, but the arrow itself only shows the direction of the reaction.</p>'},

  {id:'p02', type:'concept', tag:'Equations',
   q:'Which of the following is true about subscripts in a chemical formula?',
   choices:['You can change them to balance an equation','They show how many molecules are present','They tell you how many of each atom are in one formula unit','They are always the same as the coefficients'],
   correct:2,
   solution:'<p>Subscripts are part of the formula. They show how many atoms of each element are in one molecule or formula unit.</p><p>Never change subscripts when balancing. Only coefficients, the numbers in front of the formula, can be changed.</p>'},

  {id:'p03', type:'concept', tag:'Conservation',
   q:'Which law explains why chemical equations must be balanced?',
   choices:['Law of Definite Proportions','Law of Conservation of Energy','Law of Conservation of Mass','Avogadro\'s Law'],
   correct:2,
   solution:'<p>The Law of Conservation of Mass says atoms are not created or destroyed in a chemical reaction.</p><p>They are only rearranged, so the total number of each type of atom must be the same on both sides of the equation.</p>'},

  {id:'p04', type:'concept', tag:'Equations',
   q:'What does the symbol (aq) after a substance mean?',
   choices:['The substance is aqueous — dissolved in water','The substance is a gas','The substance is a solid that does not dissolve','The substance is in liquid form'],
   correct:0,
   solution:'<p>(aq) stands for "aqueous," meaning the substance is dissolved in water. The four state symbols are: (s) solid, (l) liquid, (g) gas, and (aq) aqueous.</p>'},

  {id:'p05', type:'concept', tag:'Reaction Types',
   q:'Which reaction type follows the pattern A + B → AB?',
   choices:['Decomposition','Double replacement','Combustion','Synthesis'],
   correct:3,
   solution:'<p>Synthesis (also called combination) reactions combine two or more substances to form one new product. The pattern is A + B → AB. Example: 2H2 + O2 → 2H2O.</p>'},

  {id:'p06', type:'concept', tag:'Reaction Types',
   q:'A single compound breaks apart into two simpler substances. What type of reaction is this?',
   choices:['Synthesis','Decomposition','Single replacement','Combustion'],
   correct:1,
   solution:'<p>Decomposition reactions follow the pattern AB → A + B. One compound breaks down into two or more simpler substances. Example: 2H2O2 → 2H2O + O2.</p>'},

  {id:'p07', type:'concept', tag:'Reaction Types',
   q:'A strip of zinc metal is placed in hydrochloric acid (HCl). Zinc dissolves and hydrogen gas is produced. What reaction type is this?',
   choices:['Synthesis','Decomposition','Single replacement','Double replacement'],
   correct:2,
   solution:'<p>Single replacement reactions follow the pattern A + BC → AC + B. Here, zinc (Zn) replaces hydrogen (H) in HCl. Equation: Zn + 2HCl → ZnCl2 + H2.</p>'},

  {id:'p08', type:'concept', tag:'Reaction Types',
   q:'Two aqueous ionic solutions are mixed and a solid forms. What is the solid called?',
   choices:['Catalyst','Precipitate','Solvent','Electrolyte'],
   correct:1,
   solution:'<p>A precipitate is an insoluble solid that forms when ions in solution combine.</p><p>This kind of reaction is a precipitation reaction, which is a type of double replacement.</p>'},

  {id:'p09', type:'concept', tag:'Precipitation',
   q:'Which compound is insoluble in water (forms a precipitate)?',
   choices:['NaNO3','KCl','AgCl','MgSO4'],
   correct:2,
   solution:'<p>Most chlorides are soluble, EXCEPT for AgCl (silver chloride), PbCl2, and HgCl2. AgCl forms a white precipitate when Ag^+ and Cl^- ions meet in solution. NaNO3, KCl, and MgSO4 are all soluble.</p>'},

  {id:'p10', type:'concept', tag:'Precipitation',
   q:'What are spectator ions?',
   choices:['Ions that form the precipitate','Ions that gain or lose electrons','Ions that are present but do not change or react','Ions that are produced only on the product side'],
   correct:2,
   solution:'<p>Spectator ions appear on both sides of the complete ionic equation unchanged. They "watch" the reaction without participating. They are left out of the net ionic equation.</p>'},

  {id:'p11', type:'concept', tag:'Net Ionic',
   q:'What does a net ionic equation show?',
   choices:['All atoms including spectator ions','Only the ions that actually change or react','Only the molecular formulas of all substances','The state symbols only'],
   correct:1,
   solution:'<p>A net ionic equation shows only the species that actually change during the reaction — the ions (or molecules) that form new bonds, precipitates, or transfer electrons. Spectator ions are removed.</p>'},

  {id:'p12', type:'concept', tag:'Acid-Base',
   q:'What type of ions do acids release in water?',
   choices:['Hydroxide ions (OH^-)','Chloride ions (Cl^-)','Hydrogen ions (H^+)','Sodium ions (Na^+)'],
   correct:2,
   solution:'<p>Acids release hydrogen ions (H^+) in water. Bases release hydroxide ions (OH^-). When they react together, they neutralize each other: H^+ + OH^- → H2O.</p>'},

  {id:'p13', type:'concept', tag:'Acid-Base',
   q:'What are the products of a neutralization reaction between an acid and a base?',
   choices:['An acid and a gas','A salt and water','An element and a compound','Two acids'],
   correct:1,
   solution:'<p>When an acid and base neutralize each other, they produce a salt and water. Example: HCl + NaOH → NaCl + H2O. NaCl is the salt, H2O is water.</p>'},

  {id:'p14', type:'concept', tag:'Acid-Base',
   q:'What is the net ionic equation for any strong acid reacting with a strong base?',
   choices:['Na^+ + Cl^- → NaCl','H^+ + OH^- → H2O','HCl + NaOH → NaCl + H2O','H2O → H^+ + OH^-'],
   correct:1,
   solution:'<p>In a strong acid–strong base neutralization, the spectator ions cancel out.</p><p>The only change is H^+ + OH^- → H2O, so this net ionic equation is the same no matter which strong acid and strong base are used.</p>'},

  {id:'p15', type:'concept', tag:'Redox',
   q:'What does OIL RIG stand for?',
   choices:['Oxidation Increases Loss; Reduction Is Gain','Oxidation Is Loss; Reduction Is Gain (of electrons)','Oxygen Is Lost; Reduction Involves Gain','Only In Lab: Reactions Involve Gain'],
   correct:1,
   solution:'<p>OIL RIG is a memory trick: Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons). When a substance loses electrons, its oxidation number increases. When it gains electrons, its oxidation number decreases.</p>'},

  {id:'p16', type:'concept', tag:'Redox',
   q:'What happens to the oxidation number of an element that is oxidized?',
   choices:['It stays the same','It decreases','It increases','It becomes zero'],
   correct:2,
   solution:'<p>When a substance is oxidized, it LOSES electrons. Losing electrons makes the oxidation number go UP (increase). Remember: more positive = more oxidized.</p>'},

  {id:'p17', type:'concept', tag:'Redox',
   q:'In the reaction 2Na + Cl2 → 2NaCl, what happens to sodium (Na)?',
   choices:['Na is reduced because it gains electrons','Na is oxidized because it loses electrons','Na is a spectator ion','Na\'s oxidation number decreases from 0 to -1'],
   correct:1,
   solution:'<p>Sodium starts as a pure element (oxidation number = 0) and becomes Na^+ in NaCl (oxidation number = +1). The oxidation number INCREASES, so Na is oxidized — it loses electrons.</p>'},

  {id:'p18', type:'concept', tag:'Redox',
   q:'What is the oxidation number of any pure element (like Fe, O2, or Cl2)?',
   choices:['+1','-1','0','It depends on the compound'],
   correct:2,
   solution:'<p>Pure elements always have an oxidation number of 0 — whether they are monatomic (Fe) or diatomic (O2, Cl2, H2, N2). This is a key rule for identifying redox reactions: if the oxidation number changes from 0, the element was either oxidized or reduced.</p>'},

  {id:'p19', type:'concept', tag:'Oxidation Numbers',
   q:'What is the usual oxidation number of oxygen in a compound?',
   choices:['+2','-1','-2','+1'],
   correct:2,
   solution:'<p>Oxygen in compounds is almost always -2. The main exception is in peroxides (like H2O2 or Na2O2), where oxygen is -1.</p>'},

  {id:'p20', type:'concept', tag:'Oxidation Numbers',
   q:'What is the usual oxidation number of hydrogen in a compound?',
   choices:['+1','-1','0','+2'],
   correct:0,
   solution:'<p>Hydrogen in compounds is almost always +1. The exception is in metal hydrides (like NaH or CaH2), where hydrogen bonded to a metal is -1.</p>'},

  {id:'p21', type:'concept', tag:'Oxidation Numbers',
   q:'The oxidation numbers in a neutral compound must add up to:',
   choices:['The atomic number of the element','The number of atoms in the formula','Zero','The charge of the most electronegative element'],
   correct:2,
   solution:'<p>For a neutral compound (no overall charge), all the oxidation numbers multiplied by the number of each atom must add to zero. For an ion, they must add to the ion charge.</p>'},

  {id:'p22', type:'concept', tag:'Redox',
   q:'What is a reducing agent?',
   choices:['A substance that gains electrons','A substance that is reduced','A substance that loses electrons (and is itself oxidized)','A substance that does not change oxidation number'],
   correct:2,
   solution:'<p>A reducing agent is the substance that LOSES electrons — it REDUCES something else while being oxidized itself. In 2Na + Cl2 → 2NaCl, Na is the reducing agent (it loses electrons to Cl2).</p>'},

  {id:'p23', type:'concept', tag:'Redox',
   q:'What is an oxidizing agent?',
   choices:['A substance that loses electrons','A substance that is oxidized','A substance that gains electrons (and causes oxidation in another)','A substance with an oxidation number of zero'],
   correct:2,
   solution:'<p>An oxidizing agent accepts electrons from another substance. By accepting electrons, it causes that substance to be oxidized. The oxidizing agent itself is reduced. In 2Na + Cl2 → 2NaCl, Cl2 is the oxidizing agent.</p>'},

  {id:'p24', type:'concept', tag:'Combustion',
   q:'What are the products of complete combustion of a hydrocarbon (a compound containing only C and H)?',
   choices:['CO and H2','CO2 and H2O','C and H2O','CO2 and O2'],
   correct:1,
   solution:'<p>When a hydrocarbon burns completely in excess oxygen, the carbon becomes CO2 and the hydrogen becomes H2O. Example: CH4 + 2O2 → CO2 + 2H2O.</p>'},

  {id:'p25', type:'concept', tag:'Precipitation',
   q:'Are all nitrate compounds soluble in water?',
   choices:['No — most are insoluble','No — only group 1 nitrates dissolve','Yes — all nitrate compounds are soluble','Only when heated'],
   correct:2,
   solution:'<p>YES — all nitrate (NO3^-) compounds are soluble in water. This is a key solubility rule. Because all nitrates dissolve, NO3^- is frequently a spectator ion in precipitation reactions.</p>'},

  {id:'p26', type:'concept', tag:'Equations',
   q:'Which coefficient correctly balances the equation: _H2 + _O2 → _H2O?',
   choices:['1, 1, 1','2, 1, 2','1, 2, 1','2, 2, 2'],
   correct:1,
   solution:'<p>With coefficients 2, 1, 2: left side has 4 H and 2 O. Right side: 2 H2O has 4 H and 2 O. Both sides match. ✓ 2H2 + O2 → 2H2O.</p>'},

  {id:'p27', type:'concept', tag:'Equations',
   q:'Which equation is correctly balanced?',
   choices:['H2 + Cl2 → HCl','H2 + Cl2 → 2HCl','2H2 + Cl2 → 2HCl','H2 + 2Cl2 → 2HCl'],
   correct:1,
   solution:'<p>H2 + Cl2 → 2HCl: Left has 2 H and 2 Cl. Right has 2 H and 2 Cl. ✓ The other options are unbalanced — choice A gives only 1 HCl (1 H, 1 Cl on right), choices C and D give wrong H or Cl counts.</p>'},

  {id:'p28', type:'concept', tag:'Reaction Types',
   q:'Methane (CH4) burns in air to produce CO2 and water. What type of reaction is this?',
   choices:['Synthesis','Decomposition','Single replacement','Combustion'],
   correct:3,
   solution:'<p>Combustion is the reaction of a fuel with oxygen, producing CO2 and H2O (for hydrocarbon fuels). CH4 + 2O2 → CO2 + 2H2O is a classic combustion reaction.</p>'},

  {id:'p29', type:'concept', tag:'Net Ionic',
   q:'In the reaction AgNO3(aq) + NaCl(aq) → AgCl(s) + NaNO3(aq), which ions are spectators?',
   choices:['Ag^+ and Cl^-','Na^+ and NO3^-','Ag^+ and Na^+','Cl^- and NO3^-'],
   correct:1,
   solution:'<p>Na^+ and NO3^- appear on both sides of the complete ionic equation unchanged — they are spectator ions. The reaction that actually occurs is Ag^+(aq) + Cl^-(aq) → AgCl(s).</p>'},

  {id:'p30', type:'concept', tag:'Acid-Base',
   q:'HCl(aq) + NaOH(aq) → ? This is an example of which reaction type?',
   choices:['Precipitation','Combustion','Neutralization (acid-base)','Decomposition'],
   correct:2,
   solution:'<p>HCl is an acid (releases H^+) and NaOH is a base (releases OH^-). They react in a neutralization (acid-base) reaction to produce water and a salt: HCl + NaOH → H2O + NaCl.</p>'},

  {id:'p31', type:'concept', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Cr in Cr2O7^2-?',
   choices:['+3','+6','+7','-2'],
   correct:1,
   solution:'<p>Ion charge = -2. Seven O at -2 each gives -14 total.</p><p>2 Cr + (-14) = -2 → 2 Cr = +12 → each Cr = <strong>+6</strong>.</p>'},

  {id:'p32', type:'concept', tag:'Oxidation Numbers',
   q:'What is the oxidation number of S in SO4^2-?',
   choices:['+2','+4','+6','-2'],
   correct:2,
   solution:'<p>Ion charge = -2. O = -2 each, 4 oxygens = -8. S + (-8) = -2 → S = +6.</p>'},

  {id:'p33', type:'concept', tag:'Oxidation Numbers',
   q:'What is the oxidation number of N in NO3^-?',
   choices:['+3','+5','-3','0'],
   correct:1,
   solution:'<p>Ion charge = -1. O = -2 each, 3 oxygens = -6. N + (-6) = -1 → N = +5.</p>'},

  {id:'p34', type:'concept', tag:'Precipitation',
   q:'Which compound would NOT form a precipitate when dissolved in water?',
   choices:['AgCl','BaSO4','PbI2','KNO3'],
   correct:3,
   solution:'<p>KNO3 is soluble — all potassium compounds and all nitrates dissolve. AgCl, BaSO4, and PbI2 are all listed as insoluble compounds in the standard solubility rules.</p>'},

  {id:'p35', type:'concept', tag:'Equations',
   q:'What do coefficients in a balanced equation represent?',
   choices:['The number of atoms in each molecule','The relative number of moles (or molecules) of each substance','The mass of each substance in grams','The charge on each ion'],
   correct:1,
   solution:'<p>Coefficients tell you the ratio of moles (or molecules) involved. In 2H2 + O2 → 2H2O, the coefficients say: 2 moles of H2 react with 1 mole of O2 to produce 2 moles of H2O.</p>'},

  {id:'p36', type:'concept', tag:'Redox',
   q:'Is the reaction 4Fe + 3O2 → 2Fe2O3 a redox reaction?',
   choices:['No — no ions are formed','Yes — Fe is oxidized and O is reduced','No — it is a synthesis reaction, not redox','Yes — but only because Fe is a metal'],
   correct:1,
   solution:'<p>Yes. Fe goes from 0 (pure element) to +3 (in Fe2O3) — Fe is oxidized. O goes from 0 (in O2) to -2 (in Fe2O3) — O is reduced. Oxidation numbers change, so it is a redox reaction. (Note: reaction type categories are not mutually exclusive — this is BOTH a synthesis AND a redox reaction.)</p>'},

  {id:'p37', type:'concept', tag:'Reaction Types',
   q:'CaCO3(s) → CaO(s) + CO2(g) when heated. What type of reaction is this?',
   choices:['Synthesis','Combustion','Decomposition','Single replacement'],
   correct:2,
   solution:'<p>One compound (CaCO3) breaks apart into two simpler substances (CaO and CO2). This matches the pattern AB → A + B: decomposition. Heating often drives decomposition reactions.</p>'},

  {id:'p38', type:'concept', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Mn in MnO4^-?',
   choices:['+4','+6','+7','-2'],
   correct:2,
   solution:'<p>Ion charge = -1. O = -2 each, 4 oxygens = -8. Mn + (-8) = -1 → Mn = +7. MnO4^- (permanganate) is a strong oxidizing agent precisely because Mn is in its high +7 state.</p>'},

  {id:'p39', type:'concept', tag:'Precipitation',
   q:'When Pb(NO3)2(aq) is mixed with KI(aq), a yellow precipitate of PbI2 forms. What does the net ionic equation look like?',
   choices:['Pb^2+ + 2I^- → PbI2(s)','Pb(NO3)2 + 2KI → PbI2 + 2KNO3','K^+ + NO3^- → KNO3','2K^+ + Pb^2+ → Pb + 2K^+'],
   correct:0,
   solution:'<p>K^+ and NO3^- are spectator ions (both are soluble and unchanged). The actual reaction is Pb^2+ meeting I^- to form insoluble PbI2. Net ionic: Pb^2+(aq) + 2I^-(aq) → PbI2(s).</p>'},

  {id:'p40', type:'concept', tag:'Equations',
   q:'Which statement best describes a balanced chemical equation?',
   choices:['Reactant and product volumes are equal','The number of each type of atom is the same on both sides of the equation','The masses of all substances are listed','The temperature and pressure are specified'],
   correct:1,
   solution:'<p>A balanced equation has equal numbers of each type of atom on the reactant side and the product side. This reflects the Law of Conservation of Mass: atoms are rearranged, not created or destroyed.</p>'},

  /* ════════════════════ CALCULATION (25 problems) ════════════════════ */

  {id:'p41', type:'calc', tag:'Balancing',
   q:'Balance this equation: _Fe + _O2 → _Fe2O3. What is the coefficient in front of Fe?',
   answer:4, tolerance:0,
   solution:'<p>Balanced equation: 4Fe + 3O2 → 2Fe2O3. Check: Fe left = 4, right = 2×2 = 4 ✓. O left = 3×2 = 6, right = 2×3 = 6 ✓. Coefficient of Fe = <strong>4</strong>.</p>'},

  {id:'p42', type:'calc', tag:'Balancing',
   q:'Balance: _N2 + _H2 → _NH3. What is the coefficient in front of H2?',
   answer:3, tolerance:0,
   solution:'<p>Balanced: N2 + 3H2 → 2NH3. Right side has 2 NH3 = 6 H atoms. Left needs 3 H2 = 6 H atoms. ✓ Coefficient of H2 = <strong>3</strong>.</p>'},

  {id:'p43', type:'calc', tag:'Balancing',
   q:'Balance: _Al + _Cl2 → _AlCl3. What is the sum of all coefficients in the balanced equation?',
   answer:7, tolerance:0,
   solution:'<p>Balanced: 2Al + 3Cl2 → 2AlCl3. Coefficients: 2 + 3 + 2 = <strong>7</strong>. Check: Al: 2=2 ✓, Cl: 6=6 ✓.</p>'},

  {id:'p44', type:'calc', tag:'Balancing',
   q:'Balance: _CH4 + _O2 → _CO2 + _H2O. What is the coefficient in front of O2?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: CH4 + 2O2 → CO2 + 2H2O. Right side has 2 O (CO2) + 2 O (2H2O) = 4 O atoms, which needs 2 O2 on the left. Coefficient of O2 = <strong>2</strong>.</p>'},

  {id:'p45', type:'calc', tag:'Balancing',
   q:'Balance: _H2O2 → _H2O + _O2. What is the coefficient in front of H2O2?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: 2H2O2 → 2H2O + O2. This is decomposition of hydrogen peroxide. Check: H: 4=4 ✓, O: 4=4 ✓. Coefficient of H2O2 = <strong>2</strong>.</p>'},

  {id:'p46', type:'calc', tag:'Balancing',
   q:'Balance: _Na + _H2O → _NaOH + _H2. What is the coefficient in front of Na?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: 2Na + 2H2O → 2NaOH + H2. Check: Na: 2=2 ✓, H: 4=4 ✓, O: 2=2 ✓. Coefficient of Na = <strong>2</strong>.</p>'},

  {id:'p47', type:'calc', tag:'Balancing',
   q:'Balance: _C3H8 + _O2 → _CO2 + _H2O (combustion of propane). What is the coefficient in front of O2?',
   answer:5, tolerance:0,
   solution:'<p>Balanced: C3H8 + 5O2 → 3CO2 + 4H2O. Products: 3 CO2 gives 6 O, 4 H2O gives 4 O → 10 O atoms total on right → 5 O2 on left. Coefficient of O2 = <strong>5</strong>.</p>'},

  {id:'p48', type:'calc', tag:'Balancing',
   q:'Balance: _Ca(OH)2 + _HCl → _CaCl2 + _H2O. What is the coefficient in front of HCl?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: Ca(OH)2 + 2HCl → CaCl2 + 2H2O. Right side needs 2 Cl for CaCl2 → 2 HCl. Check: Ca:1=1✓, Cl:2=2✓, O:2=2✓, H:4=4✓. Coefficient of HCl = <strong>2</strong>.</p>'},

  {id:'p49', type:'calc', tag:'Balancing',
   q:'Balance: _Mg + _HCl → _MgCl2 + _H2. What is the sum of all coefficients?',
   answer:5, tolerance:0,
   solution:'<p>Balanced: Mg + 2HCl → MgCl2 + H2. Coefficients: 1 + 2 + 1 + 1 = <strong>5</strong>. Check: Mg:1=1✓, Cl:2=2✓, H:2=2✓.</p>'},

  {id:'p50', type:'calc', tag:'Balancing',
   q:'Balance: _P4 + _O2 → _P4O10. What is the coefficient in front of O2?',
   answer:5, tolerance:0,
   solution:'<p>P4 + 5O2 → P4O10. Right side has 10 O atoms, needing 5 O2. P is already balanced (4=4). Coefficient of O2 = <strong>5</strong>.</p>'},

  {id:'p51', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Fe in Fe2O3? (enter as a signed number, e.g. +3)',
   isText:true, answer:'+3',
   solution:'<p>O = -2 each, 3 oxygens = -6. Compound is neutral: 2 Fe + (-6) = 0 → 2 Fe = +6 → each Fe = <strong>+3</strong>.</p>'},

  {id:'p52', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of S in H2SO4? (enter as a signed number)',
   isText:true, answer:'+6',
   solution:'<p>Neutral compound. H = +1 each × 2 = +2. O = -2 each × 4 = -8. S + 2 + (-8) = 0 → S = +6.</p>'},

  {id:'p53', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of N in NH3? (enter as a signed number)',
   isText:true, answer:'-3',
   solution:'<p>H = +1 each × 3 = +3. Neutral molecule: N + 3 = 0 → N = <strong>-3</strong>.</p>'},

  {id:'p54', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Cl in HClO3? (enter as a signed number)',
   isText:true, answer:'+5',
   solution:'<p>H = +1, O = -2 each × 3 = -6. Neutral: 1 + Cl + (-6) = 0 → Cl = +5.</p>'},

  {id:'p55', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Mn in MnO2? (enter as a signed number)',
   isText:true, answer:'+4',
   solution:'<p>O = -2 each × 2 = -4. Neutral: Mn + (-4) = 0 → Mn = <strong>+4</strong>.</p>'},

  {id:'p56', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of P in PO4^3-? (enter as a signed number)',
   isText:true, answer:'+5',
   solution:'<p>Ion charge = -3. O = -2 × 4 = -8. P + (-8) = -3 → P = <strong>+5</strong>.</p>'},

  {id:'p57', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Cr in CrO4^2-? (enter as a signed number)',
   isText:true, answer:'+6',
   solution:'<p>Ion charge = -2. O = -2 × 4 = -8. Cr + (-8) = -2 → Cr = <strong>+6</strong>.</p>'},

  {id:'p58', type:'calc', tag:'Balancing',
   q:'Balance: _KMnO4 + _HCl → _KCl + _MnCl2 + _H2O + _Cl2. What is the coefficient in front of KMnO4?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: 2KMnO4 + 16HCl → 2KCl + 2MnCl2 + 8H2O + 5Cl2. Coefficient of KMnO4 = <strong>2</strong>. (This is a more challenging redox balance — check Mn: 2=2, K: 2=2, O: 8=8.)</p>'},

  {id:'p59', type:'calc', tag:'Balancing',
   q:'Balance: _Fe + _CuSO4 → _FeSO4 + _Cu. What is the coefficient in front of Fe?',
   answer:1, tolerance:0,
   solution:'<p>This equation is already balanced with coefficient 1 in front of Fe: Fe + CuSO4 → FeSO4 + Cu. Check: Fe:1=1✓, Cu:1=1✓, S:1=1✓, O:4=4✓.</p>'},

  {id:'p60', type:'calc', tag:'Balancing',
   q:'Balance: _C2H6 + _O2 → _CO2 + _H2O (combustion of ethane). What is the coefficient in front of O2?',
   answer:7, tolerance:0,
   solution:'<p>Balanced: 2C2H6 + 7O2 → 4CO2 + 6H2O. Products: 8 O (from 4CO2) + 6 O (from 6H2O) = 14 O atoms → 7 O2. Coefficient of O2 = <strong>7</strong>.</p>'},

  {id:'p61', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of N in HNO3? (enter as a signed number)',
   isText:true, answer:'+5',
   solution:'<p>H = +1, O = -2 × 3 = -6. Neutral: +1 + N + (-6) = 0 → N = <strong>+5</strong>.</p>'},

  {id:'p62', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of C in CO2? (enter as a signed number)',
   isText:true, answer:'+4',
   solution:'<p>O = -2 × 2 = -4. Neutral: C + (-4) = 0 → C = <strong>+4</strong>.</p>'},

  {id:'p63', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of I in IO3^-? (enter as a signed number)',
   isText:true, answer:'+5',
   solution:'<p>Ion charge = -1. O = -2 × 3 = -6. I + (-6) = -1 → I = <strong>+5</strong>.</p>'},

  {id:'p64', type:'calc', tag:'Balancing',
   q:'Balance: _Cu + _AgNO3 → _Cu(NO3)2 + _Ag. What is the coefficient in front of AgNO3?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: Cu + 2AgNO3 → Cu(NO3)2 + 2Ag. Cu^2+ needs 2 NO3^- to form Cu(NO3)2, so 2 AgNO3 are needed. Coefficient of AgNO3 = <strong>2</strong>.</p>'},

  {id:'p65', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Cl in Cl2? (enter as a signed number)',
   isText:true, answer:'0',
   solution:'<p>Cl2 is a pure element (diatomic molecule of the same element). Any pure element has an oxidation number of <strong>0</strong>.</p>'},

  /* ════════════════════ MULTI-STEP (16 problems) ════════════════════ */

  {id:'p66', type:'multi', tag:'Precipitation',
   q:'Two solutions are mixed: Ba(NO3)2(aq) and Na2SO4(aq). Which product is a precipitate, and what is the net ionic equation?',
   choices:[
     'BaSO4(s) is the precipitate; net ionic: Ba^2+(aq) + SO4^2-(aq) → BaSO4(s)',
     'NaNO3(s) is the precipitate; net ionic: Na^+ + NO3^- → NaNO3',
     'Ba(NO3)2 is the precipitate; net ionic: Ba^2+ + 2NO3^- → Ba(NO3)2',
     'No precipitate forms; both products are soluble'
   ],
   correct:0,
   solution:'<p>Swap ions: Ba^2+ pairs with SO4^2- → BaSO4. Na^+ pairs with NO3^- → NaNO3. Check solubility rules: BaSO4 is INSOLUBLE (precipitate). NaNO3 is soluble (all nitrates soluble). Spectators: Na^+ and NO3^-. Net ionic: Ba^2+(aq) + SO4^2-(aq) → BaSO4(s).</p>'},

  {id:'p67', type:'multi', tag:'Redox Identification',
   q:'In the reaction: Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g), identify what is oxidized and what is reduced.',
   choices:[
     'Zn is oxidized (0 to +2); H is reduced (+1 to 0)',
     'Zn is reduced (0 to +2); H is oxidized (+1 to 0)',
     'Cl is oxidized; Zn is reduced',
     'No oxidation or reduction occurs — this is just a single replacement'
   ],
   correct:0,
   solution:'<p>Assign oxidation numbers: Zn starts at 0, becomes +2 in ZnCl2 → Zn is OXIDIZED (loses electrons). H starts at +1 in HCl, becomes 0 in H2 → H is REDUCED (gains electrons). Cl stays at -1 throughout (spectator). Zn is the reducing agent; HCl/H^+ is the oxidizing agent.</p>'},

  {id:'p68', type:'multi', tag:'Net Ionic',
   q:'Solutions of Pb(NO3)2(aq) and NaCl(aq) are mixed. Write the correct net ionic equation.',
   choices:[
     'Pb^2+(aq) + 2Cl^-(aq) → PbCl2(s)',
     'Pb(NO3)2 + NaCl → PbCl2 + NaNO3',
     'Na^+(aq) + NO3^-(aq) → NaNO3(s)',
     'No reaction occurs because all products are soluble'
   ],
   correct:0,
   solution:'<p>Product of swapping ions: PbCl2 and NaNO3. Solubility: PbCl2 is INSOLUBLE (PbCl2 is one exception to the "chlorides soluble" rule). NaNO3 is soluble. Spectators: Na^+ and NO3^-. Net ionic: Pb^2+(aq) + 2Cl^-(aq) → PbCl2(s).</p>'},

  {id:'p69', type:'multi', tag:'Reaction Classification',
   q:'Classify: 2HgO(s) → 2Hg(l) + O2(g). Also identify if it is redox.',
   choices:[
     'Synthesis; not redox',
     'Decomposition; redox (Hg goes from +2 to 0; O goes from -2 to 0)',
     'Decomposition; not redox',
     'Single replacement; redox'
   ],
   correct:1,
   solution:'<p>One compound breaks apart → Decomposition. Check oxidation numbers: Hg in HgO = +2, Hg in pure Hg(l) = 0 (decreased → reduced). O in HgO = -2, O in O2 = 0 (increased → oxidized). Oxidation numbers changed → it IS a redox reaction. So: Decomposition AND Redox.</p>'},

  {id:'p70', type:'multi', tag:'Acid-Base',
   q:'H2SO4(aq) + 2KOH(aq) → K2SO4(aq) + 2H2O(l). What is the net ionic equation?',
   choices:[
     'H^+(aq) + OH^-(aq) → H2O(l)',
     'H2SO4 + 2KOH → K2SO4 + 2H2O',
     'SO4^2- + 2K^+ → K2SO4',
     '2H^+(aq) + 2OH^-(aq) → H2(g) + O2(g)'
   ],
   correct:0,
   solution:'<p>H2SO4 provides 2H^+, KOH provides 2OH^-. K^+ and SO4^2- are spectator ions (both remain in solution). Full net ionic: 2H^+ + 2OH^- → 2H2O, which simplifies to H^+ + OH^- → H2O. This is the universal acid-base net ionic equation.</p>'},

  {id:'p71', type:'multi', tag:'Redox Agents',
   q:'In the reaction: Fe(s) + CuSO4(aq) → FeSO4(aq) + Cu(s), identify the oxidizing agent and reducing agent.',
   choices:[
     'Fe is the oxidizing agent; Cu^2+ is the reducing agent',
     'Cu^2+ is the oxidizing agent; Fe is the reducing agent',
     'SO4^2- is the oxidizing agent; Fe is the reducing agent',
     'Fe is both the oxidizing and reducing agent'
   ],
   correct:1,
   solution:'<p>Fe goes from 0 (pure element) to +2 in FeSO4 → Fe is OXIDIZED → Fe is the REDUCING AGENT. Cu goes from +2 in CuSO4 to 0 (pure Cu metal) → Cu^2+ is REDUCED → Cu^2+ is the OXIDIZING AGENT. SO4^2- stays at -2 throughout (spectator).</p>'},

  {id:'p72', type:'multi', tag:'Precipitation',
   q:'FeCl3(aq) + 3NaOH(aq) → Fe(OH)3(s) + 3NaCl(aq). What is the correct net ionic equation?',
   choices:[
     'Fe^3+(aq) + 3OH^-(aq) → Fe(OH)3(s)',
     'FeCl3 + 3NaOH → Fe(OH)3 + 3NaCl',
     'Na^+ + Cl^- → NaCl(s)',
     'Fe^3+ + Na^+ → FeNa^3+'
   ],
   correct:0,
   solution:'<p>Fe(OH)3 is insoluble (most hydroxides are insoluble). NaCl is soluble. Spectators: Na^+ and Cl^-. The ions that actually react are Fe^3+ and OH^-. Net ionic: Fe^3+(aq) + 3OH^-(aq) → Fe(OH)3(s).</p>'},

  {id:'p73', type:'multi', tag:'Redox Identification',
   q:'In 2H2O2(aq) → 2H2O(l) + O2(g), is this a redox reaction? If so, explain.',
   choices:[
     'No — H2O2 is a compound, so no redox can occur',
     'Yes — H in H2O2 changes oxidation number',
     'Yes — oxygen changes oxidation number: from -1 in H2O2 to -2 (in H2O) and 0 (in O2)',
     'No — decomposition reactions are never redox reactions'
   ],
   correct:2,
   solution:'<p>In H2O2, oxygen is -1 (peroxide exception). In the products: O in H2O = -2 (decreased → reduced) and O in O2 = 0 (increased → oxidized). Both oxidation AND reduction of oxygen occur — this is called a disproportionation redox reaction. H stays at +1 throughout.</p>'},

  {id:'p74', type:'multi', tag:'Combustion',
   q:'Balance the combustion of ethanol: C2H5OH + O2 → CO2 + H2O. What is the balanced equation?',
   choices:[
     'C2H5OH + 3O2 → 2CO2 + 3H2O',
     'C2H5OH + O2 → 2CO2 + 3H2O',
     'C2H5OH + 2O2 → 2CO2 + H2O',
     '2C2H5OH + 3O2 → 4CO2 + 6H2O'
   ],
   correct:0,
   solution:'<p>C2H5OH has 2 C, 6 H, 1 O. Products: 2 CO2 (for 2C) and 3 H2O (for 6H). Count O on right: 4 O (from 2CO2) + 3 O (from 3H2O) = 7 O. Left: 1 O in ethanol + 3 O2 (6 O) = 7 O. ✓ Balanced: C2H5OH + 3O2 → 2CO2 + 3H2O.</p>'},

  {id:'p75', type:'multi', tag:'Reaction Classification',
   q:'Classify each reaction correctly: (i) 2K + Br2 → 2KBr &nbsp; (ii) 2KBr → 2K + Br2 &nbsp; (iii) Cl2 + 2KBr → 2KCl + Br2',
   choices:[
     '(i) Decomposition, (ii) Synthesis, (iii) Double replacement',
     '(i) Synthesis, (ii) Decomposition, (iii) Single replacement',
     '(i) Single replacement, (ii) Decomposition, (iii) Synthesis',
     '(i) Combustion, (ii) Decomposition, (iii) Synthesis'
   ],
   correct:1,
   solution:'<p>(i) Two elements combine to form one compound: Synthesis. (ii) One compound breaks into its elements: Decomposition. (iii) Cl2 is a more reactive halogen that replaces Br from KBr — one element replaces another: Single Replacement.</p>'},

  {id:'p76', type:'multi', tag:'Net Ionic',
   q:'When HNO3(aq) + NaOH(aq) react, what is the net ionic equation and reaction type?',
   choices:[
     'HNO3 + NaOH → NaNO3 + H2O; double replacement',
     'H^+(aq) + OH^-(aq) → H2O(l); acid-base neutralization',
     'Na^+ + NO3^- → NaNO3; precipitation',
     'H2O → H^+ + OH^-; decomposition'
   ],
   correct:1,
   solution:'<p>HNO3 is a strong acid; NaOH is a strong base. Both fully dissociate. Na^+ and NO3^- are spectators. The only thing that changes is H^+ + OH^- → H2O. This is an acid-base neutralization. The net ionic equation is the same for ANY strong acid + strong base combination.</p>'},

  {id:'p77', type:'multi', tag:'Redox Full Analysis',
   q:'In the reaction Cl2(g) + 2NaBr(aq) → 2NaCl(aq) + Br2(l), which statement is correct?',
   choices:[
     'Cl is oxidized from 0 to -1; Br is reduced from -1 to 0',
     'Br is oxidized from -1 to 0; Cl is reduced from 0 to -1; Cl2 is the oxidizing agent',
     'Na is oxidized; Cl is reduced',
     'No redox occurs because chlorine and bromine are both halogens'
   ],
   correct:1,
   solution:'<p>Cl2: Cl starts at 0, ends at -1 in NaCl (DECREASED → reduced). Br: starts at -1 in NaBr, ends at 0 in Br2 (INCREASED → oxidized). Cl2 accepts electrons from Br → Cl2 is the oxidizing agent. NaBr/Br^- is the reducing agent.</p>'},

  {id:'p78', type:'multi', tag:'Precipitation',
   q:'When CaCl2(aq) and Na2CO3(aq) are mixed, a precipitate forms. What is the molecular equation and net ionic equation?',
   choices:[
     'CaCl2 + Na2CO3 → CaCO3(s) + 2NaCl; net ionic: Ca^2+(aq) + CO3^2-(aq) → CaCO3(s)',
     'CaCl2 + Na2CO3 → CaCl2CO3 + Na; net ionic: Cl^- + CO3^2- → ClCO3^2-',
     'CaCl2 + Na2CO3 → NaCl(s) + CaCO3; net ionic: Na^+ + Cl^- → NaCl',
     'No reaction occurs because carbonates are always soluble'
   ],
   correct:0,
   solution:'<p>Swap ions: Ca^2+ + CO3^2- → CaCO3 (insoluble — most carbonates precipitate). Na^+ + Cl^- → NaCl (soluble). Molecular: CaCl2 + Na2CO3 → CaCO3(s) + 2NaCl. Net ionic: Ca^2+(aq) + CO3^2-(aq) → CaCO3(s). Spectators: Na^+ and Cl^-.</p>'},

  {id:'p79', type:'multi', tag:'Redox Balancing',
   q:'In this half-reaction for a redox in acidic solution: MnO4^- → Mn^2+, how many electrons are gained per MnO4^- ion? (Mn changes from +7 to +2)',
   choices:['2 electrons','3 electrons','5 electrons','7 electrons'],
   correct:2,
   solution:'<p>Mn starts at +7 and ends at +2. Change = +7 - (+2) = 5 units. Each unit represents one electron gained. So MnO4^- gains 5 electrons per ion: MnO4^- + 5e^- → Mn^2+ (in acidic solution, after balancing O and H). The 5-electron gain makes permanganate a powerful oxidizing agent.</p>'},

  {id:'p80', type:'multi', tag:'Reaction Classification',
   q:'2Al(s) + 3Cl2(g) → 2AlCl3(s). This reaction is BEST described as:',
   choices:[
     'Combustion only',
     'Synthesis only',
     'Both synthesis AND redox: Al goes from 0 to +3; Cl goes from 0 to -1',
     'Single replacement: Al replaces Cl'
   ],
   correct:2,
   solution:'<p>Two elements combine to form one compound → Synthesis. Also check oxidation numbers: Al goes from 0 to +3 (oxidized) and Cl goes from 0 to -1 (reduced) → it is also a Redox reaction. Reaction categories are NOT mutually exclusive. Al is the reducing agent; Cl2 is the oxidizing agent.</p>'},

  {id:'p81', type:'multi', tag:'Full Analysis',
   q:'For the reaction: Fe2O3(s) + 3CO(g) → 2Fe(l) + 3CO2(g) — a key reaction in steel production — which element is oxidized?',
   choices:['Fe (goes from +3 to 0)','C in CO (goes from +2 to +4)','O (goes from -2 to -2)','Fe (goes from 0 to +3)'],
   correct:1,
   solution:'<p>Fe in Fe2O3 = +3; Fe in pure Fe(l) = 0 → Fe DECREASES from +3 to 0 → Fe is REDUCED (gains electrons). C in CO: C + (-2) = 0 → C = +2. In CO2: C + 2(-2) = 0 → C = +4. C INCREASES from +2 to +4 → C is OXIDIZED. So: Fe2O3 is the oxidizing agent; CO is the reducing agent. This is why CO is pumped into blast furnaces to reduce iron ore to iron metal.</p>'}

];
