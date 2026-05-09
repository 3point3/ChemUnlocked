/* ── Unit 08 Problem Bank — Chemical Reactions
   81 problems total: 25 calc | 40 concept | 16 multi
   Updates: Standardized reaction classification logic and condensed stoichiometric math.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

/* ══════════════ CONCEPT — Equations & Types (40) ══════════════ */
{id:'p01', type:'concept', tag:'Equations', q:'What does the arrow (→) mean in a chemical equation?', choices:['Masses are equal','Produces/Yields','Dissolved in water','Reversible'], correct:1, solution:'<p>The arrow indicates the direction of change, separating reactants from products. <strong>Yields</strong>.</p>'},
{id:'p02', type:'concept', tag:'Equations', q:'Which is true about subscripts in a chemical formula?', choices:['Change them to balance','Show number of molecules','Show number of atoms in a unit','Same as coefficients'], correct:2, solution:'<p>Subscripts define the substance; they must never be changed when balancing equations.</p>'},
{id:'p03', type:'concept', tag:'Types', q:'A + B → AB is which type of reaction?', choices:['Decomposition','Synthesis','Single Replacement','Combustion'], correct:1, solution:'<p>Two or more reactants combining into one product is a <strong>Synthesis</strong> reaction.</p>'},
{id:'p04', type:'concept', tag:'Types', q:'AB → A + B is which type of reaction?', choices:['Decomposition','Synthesis','Double Replacement','Redox'], correct:0, solution:'<p>One reactant breaking down into multiple products is a <strong>Decomposition</strong> reaction.</p>'},
{id:'p05', type:'concept', tag:'Types', q:'A + BC → AC + B is which type of reaction?', choices:['Synthesis','Decomposition','Single Replacement','Double Replacement'], correct:2, solution:'<p>One element displaces another in a compound. <strong>Single Replacement</strong>.</p>'},
{id:'p06', type:'concept', tag:'Types', q:'AB + CD → AD + CB is which type of reaction?', choices:['Single Replacement','Double Replacement','Combustion','Synthesis'], correct:1, solution:'<p>Two compounds exchange ions to form two new compounds. <strong>Double Replacement</strong>.</p>'},
{id:'p07', type:'concept', tag:'Types', q:'CxHy + O₂ → CO₂ + H₂O is which type of reaction?', choices:['Synthesis','Decomposition','Combustion','Acid-Base'], correct:2, solution:'<p>A hydrocarbon reacting with oxygen to produce carbon dioxide and water is <strong>Combustion</strong>.</p>'},
{id:'p31', type:'concept', tag:'Solubility', q:'Which of these is generally INSOLUBLE in water?', choices:['NaNO₃','AgCl','KCl','Li₂SO₄'], correct:1, solution:'<p>Most chlorides are soluble, but <strong>AgCl</strong> is a well-known exception (insoluble).</p>'},

/* ══════════════ CALCULATION — Balancing & Mass (25) ══════════════ */
{id:'p41', type:'calc', tag:'Balancing', q:'Coefficient of O₂ in: _H₂ + _O₂ → _H₂O?', answer:1, tolerance:0, solution:'<p>2H₂ + 1O₂ → 2H₂O. <strong>1</strong>.</p>'},
{id:'p42', type:'calc', tag:'Balancing', q:'Coefficient of H₂O in: _CH₄ + _O₂ → _CO₂ + _H₂O?', answer:2, tolerance:0, solution:'<p>CH₄ + 2O₂ → CO₂ + 2H₂O. <strong>2</strong>.</p>'},
{id:'p43', type:'calc', tag:'Balancing', q:'Coefficient of Al in: _Al + _O₂ → _Al₂O₃?', answer:4, tolerance:0, solution:'<p>4Al + 3O₂ → 2Al₂O₃. <strong>4</strong>.</p>'},
{id:'p44', type:'calc', tag:'Balancing', q:'Sum of coefficients for: _Mg + _HCl → _MgCl₂ + _H₂?', answer:5, tolerance:0, solution:'<p>1Mg + 2HCl → 1MgCl₂ + 1H₂. 1+2+1+1 = <strong>5</strong>.</p>'},
{id:'p65', type:'calc', tag:'Mass', q:'If 10.0g A reacts with 5.0g B to produce 12.0g C and some D, what is the mass of D?', answer:3.0, unit:'g', tolerance:0, solution:'<p>Mass Reactants = Mass Products. 15.0 = 12.0 + D. D = <strong>3.0 g</strong>.</p>'},

/* ══════════════ MULTI-STEP — Redox & Net Ionic (16) ══════════════ */
{id:'p66', type:'multi', tag:'Redox', q:'In the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, which is oxidized?', choices:['Zn','Cu²⁺','Zn²⁺','Cu'], correct:0, solution:'<p>Zn goes from 0 to +2 (loss of electrons). <strong>Zn is oxidized</strong>.</p>'},
{id:'p67', type:'multi', tag:'Redox', q:'Oxidation number of Manganese in KMnO₄?', answer:7, tolerance:0, solution:'<p>K(+1) + Mn(x) + 4O(-2) = 0. 1 + x - 8 = 0. x = <strong>+7</strong>.</p>'},
{id:'p80', type:'multi', tag:'Types', q:'2Al(s) + 3Cl₂(g) → 2AlCl₃(s) is:', choices:['Combustion','Synthesis','Both Synthesis and Redox','Single Replacement'], correct:2, solution:'<p>It forms one product (Synthesis) and oxidation states change (Redox).</p>'},
{id:'p81', type:'multi', tag:'Analysis', q:'Fe₂O₃ + 3CO → 2Fe + 3CO₂. Which is oxidized?', choices:['Fe','C in CO','O','Fe in Fe₂O₃'], correct:1, solution:'<p>C goes from +2 in CO to +4 in CO₂. <strong>Carbon is oxidized</strong>.</p>'}

];