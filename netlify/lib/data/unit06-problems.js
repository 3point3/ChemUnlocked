/* ── Unit 06 Problem Bank — Nomenclature
   81 problems total: 12 calc | 56 concept | 13 multi
   Updates: Standardized ionic/covalent naming logic and condensed solution HTML.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

/* ══════════════ CONCEPT — Binary & Polyatomic Naming (56) ══════════════ */
{id:'p01', type:'concept', tag:'Ionic', q:'Correct name for NaCl?', choices:['sodium chloride','sodium chlorine','sodium(I) chloride','monosodium chloride'], correct:0, solution:'<p>Binary ionic: Name metal + nonmetal with <em>-ide</em> ending. <strong>sodium chloride</strong>.</p>'},
{id:'p02', type:'concept', tag:'Ionic', q:'Correct name for K₂O?', choices:['potassium oxide','dipotassium oxide','potassium(II) oxide','potassium oxygen'], correct:0, solution:'<p>Ionic compounds do not use Greek prefixes. <strong>potassium oxide</strong>.</p>'},
{id:'p03', type:'concept', tag:'Ionic', q:'Correct name for MgBr₂?', choices:['magnesium bromide','dimagnesium bromide','magnesium dibromide','magnesium bromine'], correct:0, solution:'<p>Metal + Nonmetal-ide. <strong>magnesium bromide</strong>.</p>'},
{id:'p04', type:'concept', tag:'Ionic', q:'Correct name for AlCl₃?', choices:['aluminum chloride','aluminum trichloride','trialuminum chloride','aluminum(III) chloride'], correct:0, solution:'<p>Aluminum always forms +3, so no Roman numeral is needed. <strong>aluminum chloride</strong>.</p>'},
{id:'p05', type:'concept', tag:'Transition', q:'Correct name for FeCl₂?', choices:['iron(II) chloride','iron chloride','iron(I) chloride','iron dichloride'], correct:0, solution:'<p>Iron is a transition metal. Since Cl is -1 and there are two, iron must be +2. <strong>iron(II) chloride</strong>.</p>'},
{id:'p06', type:'concept', tag:'Transition', q:'Correct name for FeCl₃?', choices:['iron(III) chloride','iron(II) chloride','iron trichloride','iron chloride'], correct:0, solution:'<p>Iron is +3 here to balance three -1 chlorides. <strong>iron(III) chloride</strong>.</p>'},
{id:'p20', type:'concept', tag:'Polyatomic', q:'Correct name for NaNO₃?', choices:['sodium nitrate','sodium nitride','sodium nitrogen trioxide','sodium nitroxide'], correct:0, solution:'<p>NO₃⁻ is the polyatomic ion <strong>nitrate</strong>.</p>'},
{id:'p21', type:'concept', tag:'Polyatomic', q:'Correct name for CaCO₃?', choices:['calcium carbonate','calcium carbon trioxide','calcium carbide','calcium(II) carbonate'], correct:0, solution:'<p>CO₃²⁻ is the polyatomic ion <strong>carbonate</strong>.</p>'},
{id:'p35', type:'concept', tag:'Covalent', q:'Correct name for CO₂?', choices:['carbon dioxide','monocarbon dioxide','carbon oxide','carbon(IV) oxide'], correct:0, solution:'<p>Covalent molecules use prefixes. <strong>carbon dioxide</strong>.</p>'},
{id:'p36', type:'concept', tag:'Covalent', q:'Correct name for N₂O₅?', choices:['dinitrogen pentoxide','nitrogen oxide','dinitrogen oxide','penta氮 dinitride'], correct:0, solution:'<p>Two nitrogens (di-) and five oxygens (penta-). <strong>dinitrogen pentoxide</strong>.</p>'},

/* ══════════════ CALCULATION — Molar Mass & Composition (12) ══════════════ */
{id:'p57', type:'calc', tag:'Mass', q:'Molar mass (g/mol) of NaCl? (Na=22.99, Cl=35.45)', answer:58.44, tolerance:0.01, solution:'<p>22.99 + 35.45 = <strong>58.44 g/mol</strong></p>'},
{id:'p58', type:'calc', tag:'Mass', q:'Molar mass (g/mol) of H₂O? (H=1.01, O=16.00)', answer:18.02, tolerance:0.01, solution:'<p>2(1.01) + 16.00 = <strong>18.02 g/mol</strong></p>'},
{id:'p59', type:'calc', tag:'Mass', q:'Molar mass (g/mol) of Li₂O? (Li=6.94, O=16.00)', answer:29.88, tolerance:0.02, solution:'<p>2(6.94) + 16.00 = <strong>29.88 g/mol</strong></p>'},

/* ══════════════ MULTI-STEP — Formula Writing (13) ══════════════ */
{id:'p69', type:'multi', tag:'Formula', q:'Formula for magnesium nitride?', choices:['Mg₃N₂','MgN','Mg₂N₃','Mg₃N'], correct:0, solution:'<p>Mg²⁺ and N³⁻. Criss-cross charges to balance: 3(+2) + 2(-3) = 0. <strong>Mg₃N₂</strong>.</p>'},
{id:'p70', type:'multi', tag:'Formula', q:'Formula for aluminum oxide?', choices:['Al₂O₃','AlO','Al₃O₂','AlO₂'], correct:0, solution:'<p>Al³⁺ and O²⁻. Balance to 6: <strong>Al₂O₃</strong>.</p>'},
{id:'p79', type:'multi', tag:'Formula', q:'Formula for calcium phosphate?', choices:['Ca₃(PO₄)₂','Ca₂(PO₄)₃','CaPO₄','Ca₃PO₄'], correct:0, solution:'<p>Ca²⁺ and PO₄³⁻. Need three Ca and two PO₄ to balance charges. <strong>Ca₃(PO₄)₂</strong>.</p>'},
{id:'p81', type:'multi', tag:'Mixed', q:'Name for SF₆?', choices:['sulfur hexafluoride','monosulfur fluoride','sulfur(VI) fluoride','sulfur fluorine'], correct:0, solution:'<p>Covalent: prefix for 6 is hexa-. <strong>sulfur hexafluoride</strong>.</p>'}

];