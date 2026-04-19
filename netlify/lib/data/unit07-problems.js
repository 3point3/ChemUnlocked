/* ── Unit 07 Problem Bank — Chemical Reactions
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
   solution:'<p>The arrow means "produces" or "yields." It separates reactants (left) on the left from products (right) on the right. Mass is always conserved, but the arrow itself just shows direction of the reaction.</p>'},

  {id:'p02', type:'concept', tag:'Equations',
   q:'Which of the following is true about subscripts in a chemical formula?',
   choices:['You can change them to balance an equation','They show how many molecules are present','They tell you how many of each atom are in one formula unit','They are always the same as the coefficients'],
   correct:2,
   solution:'<p>Subscripts are part of the formula and show how many atoms of each element are in one molecule or formula unit. You must NEVER change subscripts when balancing — only coefficients (the numbers in front of the formula) can be changed.</p>'},

  {id:'p03', type:'concept', tag:'Conservation',
   q:'Which law explains why chemical equations must be balanced?',
   choices:['Law of Definite Proportions','Law of Conservation of Energy','Law of Conservation of Mass','Avogadro\'s Law'],
   correct:2,
   solution:'<p>The Law of Conservation of Mass states that atoms are neither created nor destroyed in a chemical reaction — they are only rearranged. So the total number of each type of atom must be the same on both sides of the equation.</p>'},

  {id:'p04', type:'concept', tag:'Equations',
   q:'What does the symbol (aq) after a substance mean?',
   choices:['The substance is aqueous — dissolved in water','The substance is a gas','The substance is a solid that does not dissolve','The substance is in liquid form'],
   correct:0,
   solution:'<p>(aq) stands for "aqueous," meaning the substance is dissolved in water. The four state symbols are: (s) solid, (l) liquid, (g) gas, and (aq) aqueous.</p>'},

  {id:'p05', type:'concept', tag:'Reaction Types',
   q:'Which reaction type follows the pattern A + B → AB?',
   choices:['Decomposition','Double replacement','Combustion','Synthesis'],
   correct:3,
   solution:'<p>Synthesis (also called combination) reactions combine two or more substances to form one new product. The pattern is A + B → AB. Example: 2H₂ + O₂ → 2H₂O.</p>'},

  {id:'p06', type:'concept', tag:'Reaction Types',
   q:'A single compound breaks apart into two simpler substances. What type of reaction is this?',
   choices:['Synthesis','Decomposition','Single replacement','Combustion'],
   correct:1,
   solution:'<p>Decomposition reactions follow the pattern AB → A + B. One compound breaks down into two or more simpler substances. Example: 2H₂O₂ → 2H₂O + O₂.</p>'},

  {id:'p07', type:'concept', tag:'Reaction Types',
   q:'A strip of zinc metal is placed in hydrochloric acid (HCl). Zinc dissolves and hydrogen gas is produced. What reaction type is this?',
   choices:['Synthesis','Decomposition','Single replacement','Double replacement'],
   correct:2,
   solution:'<p>Single replacement reactions follow the pattern A + BC → AC + B. Here, zinc (Zn) replaces hydrogen (H) in HCl. Equation: Zn + 2HCl → ZnCl₂ + H₂.</p>'},

  {id:'p08', type:'concept', tag:'Reaction Types',
   q:'Two aqueous ionic solutions are mixed and a solid forms. What is the solid called?',
   choices:['Catalyst','Precipitate','Solvent','Electrolyte'],
   correct:1,
   solution:'<p>When ions from two solutions combine to form an insoluble compound, the solid that forms is called a precipitate. The reaction is a precipitation reaction, a type of double replacement.</p>'},

  {id:'p09', type:'concept', tag:'Precipitation',
   q:'Which compound is insoluble in water (forms a precipitate)?',
   choices:['NaNO₃','KCl','AgCl','MgSO₄'],
   correct:2,
   solution:'<p>Most chlorides are soluble, EXCEPT for AgCl (silver chloride), PbCl₂, and HgCl₂. AgCl forms a white precipitate when Ag⁺ and Cl⁻ ions meet in solution. NaNO₃, KCl, and MgSO₄ are all soluble.</p>'},

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
   choices:['Hydroxide ions (OH⁻)','Chloride ions (Cl⁻)','Hydrogen ions (H⁺)','Sodium ions (Na⁺)'],
   correct:2,
   solution:'<p>Acids release hydrogen ions (H⁺) in water. Bases release hydroxide ions (OH⁻). When they react together, they neutralize each other: H⁺ + OH⁻ → H₂O.</p>'},

  {id:'p13', type:'concept', tag:'Acid-Base',
   q:'What are the products of a neutralization reaction between an acid and a base?',
   choices:['An acid and a gas','A salt and water','An element and a compound','Two acids'],
   correct:1,
   solution:'<p>When an acid and base neutralize each other, they produce a salt and water. Example: HCl + NaOH → NaCl + H₂O. NaCl is the salt, H₂O is water.</p>'},

  {id:'p14', type:'concept', tag:'Acid-Base',
   q:'What is the net ionic equation for any strong acid reacting with a strong base?',
   choices:['Na⁺ + Cl⁻ → NaCl','H⁺ + OH⁻ → H₂O','HCl + NaOH → NaCl + H₂O','H₂O → H⁺ + OH⁻'],
   correct:1,
   solution:'<p>For any strong acid–strong base neutralization, the spectator ions (the metal cation and non-reactive anion) cancel out. The only change is H⁺ + OH⁻ → H₂O. This net ionic equation is the same regardless of which strong acid and base you use.</p>'},

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
   q:'In the reaction 2Na + Cl₂ → 2NaCl, what happens to sodium (Na)?',
   choices:['Na is reduced because it gains electrons','Na is oxidized because it loses electrons','Na is a spectator ion','Na\'s oxidation number decreases from 0 to −1'],
   correct:1,
   solution:'<p>Sodium starts as a pure element (oxidation number = 0) and becomes Na⁺ in NaCl (oxidation number = +1). The oxidation number INCREASES, so Na is oxidized — it loses electrons.</p>'},

  {id:'p18', type:'concept', tag:'Redox',
   q:'What is the oxidation number of any pure element (like Fe, O₂, or Cl₂)?',
   choices:['+1','−1','0','It depends on the compound'],
   correct:2,
   solution:'<p>Pure elements always have an oxidation number of 0 — whether they are monatomic (Fe) or diatomic (O₂, Cl₂, H₂, N₂). This is a key rule for identifying redox reactions: if the oxidation number changes from 0, the element was either oxidized or reduced.</p>'},

  {id:'p19', type:'concept', tag:'Oxidation Numbers',
   q:'What is the usual oxidation number of oxygen in a compound?',
   choices:['+2','−1','−2','+1'],
   correct:2,
   solution:'<p>Oxygen in compounds is almost always −2. The main exception is in peroxides (like H₂O₂ or Na₂O₂), where oxygen is −1.</p>'},

  {id:'p20', type:'concept', tag:'Oxidation Numbers',
   q:'What is the usual oxidation number of hydrogen in a compound?',
   choices:['+1','−1','0','+2'],
   correct:0,
   solution:'<p>Hydrogen in compounds is almost always +1. The exception is in metal hydrides (like NaH or CaH₂), where hydrogen bonded to a metal is −1.</p>'},

  {id:'p21', type:'concept', tag:'Oxidation Numbers',
   q:'The oxidation numbers in a neutral compound must add up to:',
   choices:['The atomic number of the element','The number of atoms in the formula','Zero','The charge of the most electronegative element'],
   correct:2,
   solution:'<p>For a neutral compound (no overall charge), all the oxidation numbers multiplied by the number of each atom must add to zero. For an ion, they must add to the ion charge.</p>'},

  {id:'p22', type:'concept', tag:'Redox',
   q:'What is a reducing agent?',
   choices:['A substance that gains electrons','A substance that is reduced','A substance that loses electrons (and is itself oxidized)','A substance that does not change oxidation number'],
   correct:2,
   solution:'<p>A reducing agent is the substance that LOSES electrons — it REDUCES something else while being oxidized itself. In 2Na + Cl₂ → 2NaCl, Na is the reducing agent (it loses electrons to Cl₂).</p>'},

  {id:'p23', type:'concept', tag:'Redox',
   q:'What is an oxidizing agent?',
   choices:['A substance that loses electrons','A substance that is oxidized','A substance that gains electrons (and causes oxidation in another)','A substance with an oxidation number of zero'],
   correct:2,
   solution:'<p>An oxidizing agent accepts electrons from another substance. By accepting electrons, it causes that substance to be oxidized. The oxidizing agent itself is reduced. In 2Na + Cl₂ → 2NaCl, Cl₂ is the oxidizing agent.</p>'},

  {id:'p24', type:'concept', tag:'Combustion',
   q:'What are the products of complete combustion of a hydrocarbon (a compound containing only C and H)?',
   choices:['CO and H₂','CO₂ and H₂O','C and H₂O','CO₂ and O₂'],
   correct:1,
   solution:'<p>When a hydrocarbon burns completely in excess oxygen, the carbon becomes CO₂ and the hydrogen becomes H₂O. Example: CH₄ + 2O₂ → CO₂ + 2H₂O.</p>'},

  {id:'p25', type:'concept', tag:'Precipitation',
   q:'Are all nitrate compounds soluble in water?',
   choices:['No — most are insoluble','No — only group 1 nitrates dissolve','Yes — all nitrate compounds are soluble','Only when heated'],
   correct:2,
   solution:'<p>YES — all nitrate (NO₃⁻) compounds are soluble in water. This is a key solubility rule. Because all nitrates dissolve, NO₃⁻ is frequently a spectator ion in precipitation reactions.</p>'},

  {id:'p26', type:'concept', tag:'Equations',
   q:'Which coefficient correctly balances the equation: _H₂ + _O₂ → _H₂O?',
   choices:['1, 1, 1','2, 1, 2','1, 2, 1','2, 2, 2'],
   correct:1,
   solution:'<p>With coefficients 2, 1, 2: left side has 4 H and 2 O. Right side: 2 H₂O has 4 H and 2 O. Both sides match. ✓ 2H₂ + O₂ → 2H₂O.</p>'},

  {id:'p27', type:'concept', tag:'Equations',
   q:'Which equation is correctly balanced?',
   choices:['H₂ + Cl₂ → HCl','H₂ + Cl₂ → 2HCl','2H₂ + Cl₂ → 2HCl','H₂ + 2Cl₂ → 2HCl'],
   correct:1,
   solution:'<p>H₂ + Cl₂ → 2HCl: Left has 2 H and 2 Cl. Right has 2 H and 2 Cl. ✓ The other options are unbalanced — choice A gives only 1 HCl (1 H, 1 Cl on right), choices C and D give wrong H or Cl counts.</p>'},

  {id:'p28', type:'concept', tag:'Reaction Types',
   q:'Methane (CH₄) burns in air to produce CO₂ and water. What type of reaction is this?',
   choices:['Synthesis','Decomposition','Single replacement','Combustion'],
   correct:3,
   solution:'<p>Combustion is the reaction of a fuel with oxygen, producing CO₂ and H₂O (for hydrocarbon fuels). CH₄ + 2O₂ → CO₂ + 2H₂O is a classic combustion reaction.</p>'},

  {id:'p29', type:'concept', tag:'Net Ionic',
   q:'In the reaction AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq), which ions are spectators?',
   choices:['Ag⁺ and Cl⁻','Na⁺ and NO₃⁻','Ag⁺ and Na⁺','Cl⁻ and NO₃⁻'],
   correct:1,
   solution:'<p>Na⁺ and NO₃⁻ appear on both sides of the complete ionic equation unchanged — they are spectator ions. The reaction that actually occurs is Ag⁺(aq) + Cl⁻(aq) → AgCl(s).</p>'},

  {id:'p30', type:'concept', tag:'Acid-Base',
   q:'HCl(aq) + NaOH(aq) → ? This is an example of which reaction type?',
   choices:['Precipitation','Combustion','Neutralization (acid-base)','Decomposition'],
   correct:2,
   solution:'<p>HCl is an acid (releases H⁺) and NaOH is a base (releases OH⁻). They react in a neutralization (acid-base) reaction to produce water and a salt: HCl + NaOH → H₂O + NaCl.</p>'},

  {id:'p31', type:'concept', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Cr in Cr₂O₇²⁻?',
   choices:['+3','+6','+7','−2'],
   correct:1,
   solution:'<p>Ion charge = −2. O = −2 each, 7 oxygens total = −14. So 2 Cr + (−14) = −2 → 2 Cr = +12 → each Cr = +6.</p>'},

  {id:'p32', type:'concept', tag:'Oxidation Numbers',
   q:'What is the oxidation number of S in SO₄²⁻?',
   choices:['+2','+4','+6','−2'],
   correct:2,
   solution:'<p>Ion charge = −2. O = −2 each, 4 oxygens = −8. S + (−8) = −2 → S = +6.</p>'},

  {id:'p33', type:'concept', tag:'Oxidation Numbers',
   q:'What is the oxidation number of N in NO₃⁻?',
   choices:['+3','+5','−3','0'],
   correct:1,
   solution:'<p>Ion charge = −1. O = −2 each, 3 oxygens = −6. N + (−6) = −1 → N = +5.</p>'},

  {id:'p34', type:'concept', tag:'Precipitation',
   q:'Which compound would NOT form a precipitate when dissolved in water?',
   choices:['AgCl','BaSO₄','PbI₂','KNO₃'],
   correct:3,
   solution:'<p>KNO₃ is soluble — all potassium compounds and all nitrates dissolve. AgCl, BaSO₄, and PbI₂ are all listed as insoluble compounds in the standard solubility rules.</p>'},

  {id:'p35', type:'concept', tag:'Equations',
   q:'What do coefficients in a balanced equation represent?',
   choices:['The number of atoms in each molecule','The relative number of moles (or molecules) of each substance','The mass of each substance in grams','The charge on each ion'],
   correct:1,
   solution:'<p>Coefficients tell you the ratio of moles (or molecules) involved. In 2H₂ + O₂ → 2H₂O, the coefficients say: 2 moles of H₂ react with 1 mole of O₂ to produce 2 moles of H₂O.</p>'},

  {id:'p36', type:'concept', tag:'Redox',
   q:'Is the reaction 4Fe + 3O₂ → 2Fe₂O₃ a redox reaction?',
   choices:['No — no ions are formed','Yes — Fe is oxidized and O is reduced','No — it is a synthesis reaction, not redox','Yes — but only because Fe is a metal'],
   correct:1,
   solution:'<p>Yes. Fe goes from 0 (pure element) to +3 (in Fe₂O₃) — Fe is oxidized. O goes from 0 (in O₂) to −2 (in Fe₂O₃) — O is reduced. Oxidation numbers change, so it is a redox reaction. (Note: reaction type categories are not mutually exclusive — this is BOTH a synthesis AND a redox reaction.)</p>'},

  {id:'p37', type:'concept', tag:'Reaction Types',
   q:'CaCO₃(s) → CaO(s) + CO₂(g) when heated. What type of reaction is this?',
   choices:['Synthesis','Combustion','Decomposition','Single replacement'],
   correct:2,
   solution:'<p>One compound (CaCO₃) breaks apart into two simpler substances (CaO and CO₂). This matches the pattern AB → A + B: decomposition. Heating often drives decomposition reactions.</p>'},

  {id:'p38', type:'concept', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Mn in MnO₄⁻?',
   choices:['+4','+6','+7','−2'],
   correct:2,
   solution:'<p>Ion charge = −1. O = −2 each, 4 oxygens = −8. Mn + (−8) = −1 → Mn = +7. MnO₄⁻ (permanganate) is a strong oxidizing agent precisely because Mn is in its high +7 state.</p>'},

  {id:'p39', type:'concept', tag:'Precipitation',
   q:'When Pb(NO₃)₂(aq) is mixed with KI(aq), a yellow precipitate of PbI₂ forms. What does the net ionic equation look like?',
   choices:['Pb²⁺ + 2I⁻ → PbI₂(s)','Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃','K⁺ + NO₃⁻ → KNO₃','2K⁺ + Pb²⁺ → Pb + 2K⁺'],
   correct:0,
   solution:'<p>K⁺ and NO₃⁻ are spectator ions (both are soluble and unchanged). The actual reaction is Pb²⁺ meeting I⁻ to form insoluble PbI₂. Net ionic: Pb²⁺(aq) + 2I⁻(aq) → PbI₂(s).</p>'},

  {id:'p40', type:'concept', tag:'Equations',
   q:'Which statement best describes a balanced chemical equation?',
   choices:['Reactant and product volumes are equal','The number of each type of atom is the same on both sides of the equation','The masses of all substances are listed','The temperature and pressure are specified'],
   correct:1,
   solution:'<p>A balanced equation has equal numbers of each type of atom on the reactant side and the product side. This reflects the Law of Conservation of Mass: atoms are rearranged, not created or destroyed.</p>'},

  /* ════════════════════ CALCULATION (25 problems) ════════════════════ */

  {id:'p41', type:'calc', tag:'Balancing',
   q:'Balance this equation: _Fe + _O₂ → _Fe₂O₃. What is the coefficient in front of Fe?',
   answer:4, tolerance:0,
   solution:'<p>Balanced equation: 4Fe + 3O₂ → 2Fe₂O₃. Check: Fe left = 4, right = 2×2 = 4 ✓. O left = 3×2 = 6, right = 2×3 = 6 ✓. Coefficient of Fe = <strong>4</strong>.</p>'},

  {id:'p42', type:'calc', tag:'Balancing',
   q:'Balance: _N₂ + _H₂ → _NH₃. What is the coefficient in front of H₂?',
   answer:3, tolerance:0,
   solution:'<p>Balanced: N₂ + 3H₂ → 2NH₃. Right side has 2 NH₃ = 6 H atoms. Left needs 3 H₂ = 6 H atoms. ✓ Coefficient of H₂ = <strong>3</strong>.</p>'},

  {id:'p43', type:'calc', tag:'Balancing',
   q:'Balance: _Al + _Cl₂ → _AlCl₃. What is the sum of all coefficients in the balanced equation?',
   answer:7, tolerance:0,
   solution:'<p>Balanced: 2Al + 3Cl₂ → 2AlCl₃. Coefficients: 2 + 3 + 2 = <strong>7</strong>. Check: Al: 2=2 ✓, Cl: 6=6 ✓.</p>'},

  {id:'p44', type:'calc', tag:'Balancing',
   q:'Balance: _CH₄ + _O₂ → _CO₂ + _H₂O. What is the coefficient in front of O₂?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: CH₄ + 2O₂ → CO₂ + 2H₂O. Right side has 2 O (CO₂) + 2 O (2H₂O) = 4 O atoms, which needs 2 O₂ on the left. Coefficient of O₂ = <strong>2</strong>.</p>'},

  {id:'p45', type:'calc', tag:'Balancing',
   q:'Balance: _H₂O₂ → _H₂O + _O₂. What is the coefficient in front of H₂O₂?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: 2H₂O₂ → 2H₂O + O₂. This is decomposition of hydrogen peroxide. Check: H: 4=4 ✓, O: 4=4 ✓. Coefficient of H₂O₂ = <strong>2</strong>.</p>'},

  {id:'p46', type:'calc', tag:'Balancing',
   q:'Balance: _Na + _H₂O → _NaOH + _H₂. What is the coefficient in front of Na?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: 2Na + 2H₂O → 2NaOH + H₂. Check: Na: 2=2 ✓, H: 4=4 ✓, O: 2=2 ✓. Coefficient of Na = <strong>2</strong>.</p>'},

  {id:'p47', type:'calc', tag:'Balancing',
   q:'Balance: _C₃H₈ + _O₂ → _CO₂ + _H₂O (combustion of propane). What is the coefficient in front of O₂?',
   answer:5, tolerance:0,
   solution:'<p>Balanced: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Products: 3 CO₂ gives 6 O, 4 H₂O gives 4 O → 10 O atoms total on right → 5 O₂ on left. Coefficient of O₂ = <strong>5</strong>.</p>'},

  {id:'p48', type:'calc', tag:'Balancing',
   q:'Balance: _Ca(OH)₂ + _HCl → _CaCl₂ + _H₂O. What is the coefficient in front of HCl?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O. Right side needs 2 Cl for CaCl₂ → 2 HCl. Check: Ca:1=1✓, Cl:2=2✓, O:2=2✓, H:4=4✓. Coefficient of HCl = <strong>2</strong>.</p>'},

  {id:'p49', type:'calc', tag:'Balancing',
   q:'Balance: _Mg + _HCl → _MgCl₂ + _H₂. What is the sum of all coefficients?',
   answer:5, tolerance:0,
   solution:'<p>Balanced: Mg + 2HCl → MgCl₂ + H₂. Coefficients: 1 + 2 + 1 + 1 = <strong>5</strong>. Check: Mg:1=1✓, Cl:2=2✓, H:2=2✓.</p>'},

  {id:'p50', type:'calc', tag:'Balancing',
   q:'Balance: _P₄ + _O₂ → _P₄O₁₀. What is the coefficient in front of O₂?',
   answer:5, tolerance:0,
   solution:'<p>P₄ + 5O₂ → P₄O₁₀. Right side has 10 O atoms, needing 5 O₂. P is already balanced (4=4). Coefficient of O₂ = <strong>5</strong>.</p>'},

  {id:'p51', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Fe in Fe₂O₃? (enter as a signed number, e.g. +3)',
   isText:true, answer:'+3',
   solution:'<p>O = −2 each, 3 oxygens = −6. Compound is neutral: 2 Fe + (−6) = 0 → 2 Fe = +6 → each Fe = <strong>+3</strong>.</p>'},

  {id:'p52', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of S in H₂SO₄? (enter as a signed number)',
   isText:true, answer:'+6',
   solution:'<p>Neutral compound. H = +1 each × 2 = +2. O = −2 each × 4 = −8. S + 2 + (−8) = 0 → S = +6.</p>'},

  {id:'p53', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of N in NH₃? (enter as a signed number)',
   isText:true, answer:'-3',
   solution:'<p>H = +1 each × 3 = +3. Neutral molecule: N + 3 = 0 → N = <strong>−3</strong>.</p>'},

  {id:'p54', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Cl in HClO₃? (enter as a signed number)',
   isText:true, answer:'+5',
   solution:'<p>H = +1, O = −2 each × 3 = −6. Neutral: 1 + Cl + (−6) = 0 → Cl = +5.</p>'},

  {id:'p55', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Mn in MnO₂? (enter as a signed number)',
   isText:true, answer:'+4',
   solution:'<p>O = −2 each × 2 = −4. Neutral: Mn + (−4) = 0 → Mn = <strong>+4</strong>.</p>'},

  {id:'p56', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of P in PO₄³⁻? (enter as a signed number)',
   isText:true, answer:'+5',
   solution:'<p>Ion charge = −3. O = −2 × 4 = −8. P + (−8) = −3 → P = <strong>+5</strong>.</p>'},

  {id:'p57', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Cr in CrO₄²⁻? (enter as a signed number)',
   isText:true, answer:'+6',
   solution:'<p>Ion charge = −2. O = −2 × 4 = −8. Cr + (−8) = −2 → Cr = <strong>+6</strong>.</p>'},

  {id:'p58', type:'calc', tag:'Balancing',
   q:'Balance: _KMnO₄ + _HCl → _KCl + _MnCl₂ + _H₂O + _Cl₂. What is the coefficient in front of KMnO₄?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: 2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 8H₂O + 5Cl₂. Coefficient of KMnO₄ = <strong>2</strong>. (This is a more challenging redox balance — check Mn: 2=2, K: 2=2, O: 8=8.)</p>'},

  {id:'p59', type:'calc', tag:'Balancing',
   q:'Balance: _Fe + _CuSO₄ → _FeSO₄ + _Cu. What is the coefficient in front of Fe?',
   answer:1, tolerance:0,
   solution:'<p>This equation is already balanced with coefficient 1 in front of Fe: Fe + CuSO₄ → FeSO₄ + Cu. Check: Fe:1=1✓, Cu:1=1✓, S:1=1✓, O:4=4✓.</p>'},

  {id:'p60', type:'calc', tag:'Balancing',
   q:'Balance: _C₂H₆ + _O₂ → _CO₂ + _H₂O (combustion of ethane). What is the coefficient in front of O₂?',
   answer:7, tolerance:0,
   solution:'<p>Balanced: 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O. Products: 8 O (from 4CO₂) + 6 O (from 6H₂O) = 14 O atoms → 7 O₂. Coefficient of O₂ = <strong>7</strong>.</p>'},

  {id:'p61', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of N in HNO₃? (enter as a signed number)',
   isText:true, answer:'+5',
   solution:'<p>H = +1, O = −2 × 3 = −6. Neutral: +1 + N + (−6) = 0 → N = <strong>+5</strong>.</p>'},

  {id:'p62', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of C in CO₂? (enter as a signed number)',
   isText:true, answer:'+4',
   solution:'<p>O = −2 × 2 = −4. Neutral: C + (−4) = 0 → C = <strong>+4</strong>.</p>'},

  {id:'p63', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of I in IO₃⁻? (enter as a signed number)',
   isText:true, answer:'+5',
   solution:'<p>Ion charge = −1. O = −2 × 3 = −6. I + (−6) = −1 → I = <strong>+5</strong>.</p>'},

  {id:'p64', type:'calc', tag:'Balancing',
   q:'Balance: _Cu + _AgNO₃ → _Cu(NO₃)₂ + _Ag. What is the coefficient in front of AgNO₃?',
   answer:2, tolerance:0,
   solution:'<p>Balanced: Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag. Cu²⁺ needs 2 NO₃⁻ to form Cu(NO₃)₂, so 2 AgNO₃ are needed. Coefficient of AgNO₃ = <strong>2</strong>.</p>'},

  {id:'p65', type:'calc', tag:'Oxidation Numbers',
   q:'What is the oxidation number of Cl in Cl₂? (enter as a signed number)',
   isText:true, answer:'0',
   solution:'<p>Cl₂ is a pure element (diatomic molecule of the same element). Any pure element has an oxidation number of <strong>0</strong>.</p>'},

  /* ════════════════════ MULTI-STEP (16 problems) ════════════════════ */

  {id:'p66', type:'multi', tag:'Precipitation',
   q:'Two solutions are mixed: Ba(NO₃)₂(aq) and Na₂SO₄(aq). Which product is a precipitate, and what is the net ionic equation?',
   choices:[
     'BaSO₄(s) is the precipitate; net ionic: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)',
     'NaNO₃(s) is the precipitate; net ionic: Na⁺ + NO₃⁻ → NaNO₃',
     'Ba(NO₃)₂ is the precipitate; net ionic: Ba²⁺ + 2NO₃⁻ → Ba(NO₃)₂',
     'No precipitate forms; both products are soluble'
   ],
   correct:0,
   solution:'<p>Swap ions: Ba²⁺ pairs with SO₄²⁻ → BaSO₄. Na⁺ pairs with NO₃⁻ → NaNO₃. Check solubility rules: BaSO₄ is INSOLUBLE (precipitate). NaNO₃ is soluble (all nitrates soluble). Spectators: Na⁺ and NO₃⁻. Net ionic: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s).</p>'},

  {id:'p67', type:'multi', tag:'Redox Identification',
   q:'In the reaction: Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g), identify what is oxidized and what is reduced.',
   choices:[
     'Zn is oxidized (0 to +2); H is reduced (+1 to 0)',
     'Zn is reduced (0 to +2); H is oxidized (+1 to 0)',
     'Cl is oxidized; Zn is reduced',
     'No oxidation or reduction occurs — this is just a single replacement'
   ],
   correct:0,
   solution:'<p>Assign oxidation numbers: Zn starts at 0, becomes +2 in ZnCl₂ → Zn is OXIDIZED (loses electrons). H starts at +1 in HCl, becomes 0 in H₂ → H is REDUCED (gains electrons). Cl stays at −1 throughout (spectator). Zn is the reducing agent; HCl/H⁺ is the oxidizing agent.</p>'},

  {id:'p68', type:'multi', tag:'Net Ionic',
   q:'Solutions of Pb(NO₃)₂(aq) and NaCl(aq) are mixed. Write the correct net ionic equation.',
   choices:[
     'Pb²⁺(aq) + 2Cl⁻(aq) → PbCl₂(s)',
     'Pb(NO₃)₂ + NaCl → PbCl₂ + NaNO₃',
     'Na⁺(aq) + NO₃⁻(aq) → NaNO₃(s)',
     'No reaction occurs because all products are soluble'
   ],
   correct:0,
   solution:'<p>Product of swapping ions: PbCl₂ and NaNO₃. Solubility: PbCl₂ is INSOLUBLE (PbCl₂ is one exception to the "chlorides soluble" rule). NaNO₃ is soluble. Spectators: Na⁺ and NO₃⁻. Net ionic: Pb²⁺(aq) + 2Cl⁻(aq) → PbCl₂(s).</p>'},

  {id:'p69', type:'multi', tag:'Reaction Classification',
   q:'Classify: 2HgO(s) → 2Hg(l) + O₂(g). Also identify if it is redox.',
   choices:[
     'Synthesis; not redox',
     'Decomposition; redox (Hg goes from +2 to 0; O goes from −2 to 0)',
     'Decomposition; not redox',
     'Single replacement; redox'
   ],
   correct:1,
   solution:'<p>One compound breaks apart → Decomposition. Check oxidation numbers: Hg in HgO = +2, Hg in pure Hg(l) = 0 (decreased → reduced). O in HgO = −2, O in O₂ = 0 (increased → oxidized). Oxidation numbers changed → it IS a redox reaction. So: Decomposition AND Redox.</p>'},

  {id:'p70', type:'multi', tag:'Acid-Base',
   q:'H₂SO₄(aq) + 2KOH(aq) → K₂SO₄(aq) + 2H₂O(l). What is the net ionic equation?',
   choices:[
     'H⁺(aq) + OH⁻(aq) → H₂O(l)',
     'H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O',
     'SO₄²⁻ + 2K⁺ → K₂SO₄',
     '2H⁺(aq) + 2OH⁻(aq) → 2H₂O(l) (simplified: H⁺ + OH⁻ → H₂O)'
   ],
   correct:3,
   solution:'<p>H₂SO₄ provides 2H⁺, KOH provides 2OH⁻. K⁺ and SO₄²⁻ are spectator ions (both remain in solution). Full net ionic: 2H⁺ + 2OH⁻ → 2H₂O, which simplifies to H⁺ + OH⁻ → H₂O. This is the universal acid-base net ionic equation.</p>'},

  {id:'p71', type:'multi', tag:'Redox Agents',
   q:'In the reaction: Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s), identify the oxidizing agent and reducing agent.',
   choices:[
     'Fe is the oxidizing agent; Cu²⁺ is the reducing agent',
     'Cu²⁺ is the oxidizing agent; Fe is the reducing agent',
     'SO₄²⁻ is the oxidizing agent; Fe is the reducing agent',
     'Fe is both the oxidizing and reducing agent'
   ],
   correct:1,
   solution:'<p>Fe goes from 0 (pure element) to +2 in FeSO₄ → Fe is OXIDIZED → Fe is the REDUCING AGENT. Cu goes from +2 in CuSO₄ to 0 (pure Cu metal) → Cu²⁺ is REDUCED → Cu²⁺ is the OXIDIZING AGENT. SO₄²⁻ stays at −2 throughout (spectator).</p>'},

  {id:'p72', type:'multi', tag:'Precipitation',
   q:'FeCl₃(aq) + 3NaOH(aq) → Fe(OH)₃(s) + 3NaCl(aq). What is the correct net ionic equation?',
   choices:[
     'Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s)',
     'FeCl₃ + 3NaOH → Fe(OH)₃ + 3NaCl',
     'Na⁺ + Cl⁻ → NaCl(s)',
     'Fe³⁺ + Na⁺ → FeNa³⁺'
   ],
   correct:0,
   solution:'<p>Fe(OH)₃ is insoluble (most hydroxides are insoluble). NaCl is soluble. Spectators: Na⁺ and Cl⁻. The ions that actually react are Fe³⁺ and OH⁻. Net ionic: Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s).</p>'},

  {id:'p73', type:'multi', tag:'Redox Identification',
   q:'In 2H₂O₂(aq) → 2H₂O(l) + O₂(g), is this a redox reaction? If so, explain.',
   choices:[
     'No — H₂O₂ is a compound, so no redox can occur',
     'Yes — H in H₂O₂ changes oxidation number',
     'Yes — oxygen changes oxidation number: from −1 in H₂O₂ to −2 (in H₂O) and 0 (in O₂)',
     'No — decomposition reactions are never redox reactions'
   ],
   correct:2,
   solution:'<p>In H₂O₂, oxygen is −1 (peroxide exception). In the products: O in H₂O = −2 (decreased → reduced) and O in O₂ = 0 (increased → oxidized). Both oxidation AND reduction of oxygen occur — this is called a disproportionation redox reaction. H stays at +1 throughout.</p>'},

  {id:'p74', type:'multi', tag:'Combustion',
   q:'Balance the combustion of ethanol: C₂H₅OH + O₂ → CO₂ + H₂O. What is the balanced equation?',
   choices:[
     'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O',
     'C₂H₅OH + O₂ → 2CO₂ + 3H₂O',
     'C₂H₅OH + 2O₂ → 2CO₂ + H₂O',
     '2C₂H₅OH + 3O₂ → 4CO₂ + 6H₂O'
   ],
   correct:0,
   solution:'<p>C₂H₅OH has 2 C, 6 H, 1 O. Products: 2 CO₂ (for 2C) and 3 H₂O (for 6H). Count O on right: 4 O (from 2CO₂) + 3 O (from 3H₂O) = 7 O. Left: 1 O in ethanol + 3 O₂ (6 O) = 7 O. ✓ Balanced: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.</p>'},

  {id:'p75', type:'multi', tag:'Reaction Classification',
   q:'Classify each reaction correctly: (i) 2K + Br₂ → 2KBr &nbsp; (ii) 2KBr → 2K + Br₂ &nbsp; (iii) Cl₂ + 2KBr → 2KCl + Br₂',
   choices:[
     '(i) Decomposition, (ii) Synthesis, (iii) Double replacement',
     '(i) Synthesis, (ii) Decomposition, (iii) Single replacement',
     '(i) Single replacement, (ii) Decomposition, (iii) Synthesis',
     '(i) Combustion, (ii) Decomposition, (iii) Synthesis'
   ],
   correct:1,
   solution:'<p>(i) Two elements combine to form one compound: Synthesis. (ii) One compound breaks into its elements: Decomposition. (iii) Cl₂ is a more reactive halogen that replaces Br from KBr — one element replaces another: Single Replacement.</p>'},

  {id:'p76', type:'multi', tag:'Net Ionic',
   q:'When HNO₃(aq) + NaOH(aq) react, what is the net ionic equation and reaction type?',
   choices:[
     'HNO₃ + NaOH → NaNO₃ + H₂O; double replacement',
     'H⁺(aq) + OH⁻(aq) → H₂O(l); acid-base neutralization',
     'Na⁺ + NO₃⁻ → NaNO₃; precipitation',
     'H₂O → H⁺ + OH⁻; decomposition'
   ],
   correct:1,
   solution:'<p>HNO₃ is a strong acid; NaOH is a strong base. Both fully dissociate. Na⁺ and NO₃⁻ are spectators. The only thing that changes is H⁺ + OH⁻ → H₂O. This is an acid-base neutralization. The net ionic equation is the same for ANY strong acid + strong base combination.</p>'},

  {id:'p77', type:'multi', tag:'Redox Full Analysis',
   q:'In the reaction Cl₂(g) + 2NaBr(aq) → 2NaCl(aq) + Br₂(l), which statement is correct?',
   choices:[
     'Cl is oxidized from 0 to −1; Br is reduced from −1 to 0',
     'Br is oxidized from −1 to 0; Cl is reduced from 0 to −1; Cl₂ is the oxidizing agent',
     'Na is oxidized; Cl is reduced',
     'No redox occurs because chlorine and bromine are both halogens'
   ],
   correct:1,
   solution:'<p>Cl₂: Cl starts at 0, ends at −1 in NaCl (DECREASED → reduced). Br: starts at −1 in NaBr, ends at 0 in Br₂ (INCREASED → oxidized). Cl₂ accepts electrons from Br → Cl₂ is the oxidizing agent. NaBr/Br⁻ is the reducing agent.</p>'},

  {id:'p78', type:'multi', tag:'Precipitation',
   q:'When CaCl₂(aq) and Na₂CO₃(aq) are mixed, a precipitate forms. What is the molecular equation and net ionic equation?',
   choices:[
     'CaCl₂ + Na₂CO₃ → CaCO₃(s) + 2NaCl; net ionic: Ca²⁺(aq) + CO₃²⁻(aq) → CaCO₃(s)',
     'CaCl₂ + Na₂CO₃ → CaCl₂CO₃ + Na; net ionic: Cl⁻ + CO₃²⁻ → ClCO₃²⁻',
     'CaCl₂ + Na₂CO₃ → NaCl(s) + CaCO₃; net ionic: Na⁺ + Cl⁻ → NaCl',
     'No reaction occurs because carbonates are always soluble'
   ],
   correct:0,
   solution:'<p>Swap ions: Ca²⁺ + CO₃²⁻ → CaCO₃ (insoluble — most carbonates precipitate). Na⁺ + Cl⁻ → NaCl (soluble). Molecular: CaCl₂ + Na₂CO₃ → CaCO₃(s) + 2NaCl. Net ionic: Ca²⁺(aq) + CO₃²⁻(aq) → CaCO₃(s). Spectators: Na⁺ and Cl⁻.</p>'},

  {id:'p79', type:'multi', tag:'Redox Balancing',
   q:'In this half-reaction for a redox in acidic solution: MnO₄⁻ → Mn²⁺, how many electrons are gained per MnO₄⁻ ion? (Mn changes from +7 to +2)',
   choices:['2 electrons','3 electrons','5 electrons','7 electrons'],
   correct:2,
   solution:'<p>Mn starts at +7 and ends at +2. Change = +7 − (+2) = 5 units. Each unit represents one electron gained. So MnO₄⁻ gains 5 electrons per ion: MnO₄⁻ + 5e⁻ → Mn²⁺ (in acidic solution, after balancing O and H). The 5-electron gain makes permanganate a powerful oxidizing agent.</p>'},

  {id:'p80', type:'multi', tag:'Reaction Classification',
   q:'2Al(s) + 3Cl₂(g) → 2AlCl₃(s). This reaction is BEST described as:',
   choices:[
     'Combustion only',
     'Synthesis only',
     'Both synthesis AND redox: Al goes from 0 to +3; Cl goes from 0 to −1',
     'Single replacement: Al replaces Cl'
   ],
   correct:2,
   solution:'<p>Two elements combine to form one compound → Synthesis. Also check oxidation numbers: Al goes from 0 to +3 (oxidized) and Cl goes from 0 to −1 (reduced) → it is also a Redox reaction. Reaction categories are NOT mutually exclusive. Al is the reducing agent; Cl₂ is the oxidizing agent.</p>'},

  {id:'p81', type:'multi', tag:'Full Analysis',
   q:'For the reaction: Fe₂O₃(s) + 3CO(g) → 2Fe(l) + 3CO₂(g) — a key reaction in steel production — which element is oxidized?',
   choices:['Fe (goes from +3 to 0)','C in CO (goes from +2 to +4)','O (goes from −2 to −2)','Fe (goes from 0 to +3)'],
   correct:1,
   solution:'<p>Fe in Fe₂O₃ = +3; Fe in pure Fe(l) = 0 → Fe DECREASES from +3 to 0 → Fe is REDUCED (gains electrons). C in CO: C + (−2) = 0 → C = +2. In CO₂: C + 2(−2) = 0 → C = +4. C INCREASES from +2 to +4 → C is OXIDIZED. So: Fe₂O₃ is the oxidizing agent; CO is the reducing agent. This is why CO is pumped into blast furnaces to reduce iron ore to iron metal.</p>'}

];
