/* ── Unit 05 Problem Bank — Nomenclature
   81 problems total: 12 calc | 56 concept | 13 multi
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  /* ========== CONCEPT — Binary Ionic (simple metals) ========== */
  {id:'p01',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for NaCl?',
   choices:['sodium chloride','sodium chlorine','sodium(I) chloride','monosodium chloride'],correct:0,
   solution:'<p>NaCl is ionic: metal (Na) + nonmetal (Cl). Write the metal name first (sodium), then the nonmetal with –ide (chloride). Na always has a +1 charge, so no Roman numeral is needed.</p>'},

  {id:'p02',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for K₂O?',
   choices:['potassium oxide','dipotassium oxide','potassium(II) oxide','potassium oxygen'],correct:0,
   solution:'<p>K₂O is ionic. K is potassium (always +1). O becomes oxide. Write: potassium oxide. Do not use prefixes ("di-") for ionic compounds. No Roman numeral since K has only one charge.</p>'},

  {id:'p03',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for MgBr₂?',
   choices:['magnesium bromide','dimagnesium bromide','magnesium(II) bromide','magnesium dibromide'],correct:0,
   solution:'<p>MgBr₂ is ionic. Mg is magnesium (always +2). Br becomes bromide. Write: magnesium bromide. No prefix needed because it is ionic. Mg always has a +2 charge, so no Roman numeral.</p>'},

  {id:'p04',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for CaF₂?',
   choices:['calcium fluoride','calcium difluoride','calcium(II) fluoride','dicalcium fluoride'],correct:0,
   solution:'<p>CaF₂ is ionic. Ca is calcium (always +2). F becomes fluoride. Write: calcium fluoride. Subscripts in ionic formulas come from charges — never use prefixes for ionic compounds.</p>'},

  {id:'p05',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for Al₂O₃?',
   choices:['aluminum oxide','dialuminum trioxide','aluminum(III) oxide','trialuminum dioxide'],correct:0,
   solution:'<p>Al₂O₃ is ionic. Al is aluminum (always +3). O becomes oxide. Write: aluminum oxide. Al has only one common charge (+3), so no Roman numeral. Do not use "di-" or "tri-" prefixes for ionic compounds.</p>'},

  {id:'p06',type:'concept',tag:'Ionic Naming',
   q:'Which formula matches the name "sodium sulfide"?',
   choices:['Na₂S','NaS','NaS₂','Na₂S₂'],correct:0,
   solution:'<p>Sodium sulfide: Na⁺ and S²⁻. To balance: 2 Na⁺ and 1 S²⁻ → Na₂S. The subscripts come from swapping the charges (cross-multiply method): 1 from Na, 2 from S → Na₂S.</p>'},

  {id:'p07',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for Li₃N?',
   choices:['lithium nitride','trilithium nitrogen','lithium(I) nitride','lithium nitrogen'],correct:0,
   solution:'<p>Li₃N is ionic. Li is lithium (always +1). N becomes nitride (N³⁻). Write: lithium nitride. Li has only one charge, so no Roman numeral. Do not use "tri-" prefix.</p>'},

  {id:'p08',type:'concept',tag:'Ionic Naming',
   q:'Which name is WRONG for an ionic compound between barium (Ba²⁺) and oxygen (O²⁻)?',
   choices:['barium monoxide','barium oxide','BaO has the formula','Ba is always 2+'],correct:0,
   solution:'<p>"Barium monoxide" is wrong. The prefix "mono-" is never used for ionic compounds. The correct name is simply barium oxide. Prefixes are only used for molecular (nonmetal + nonmetal) compounds.</p>'},

  /* ========== CONCEPT — Transition Metals / Roman Numerals ========== */
  {id:'p09',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for FeCl₂?',
   choices:['iron(II) chloride','iron(III) chloride','iron chloride','ferrous dichloride'],correct:0,
   solution:'<p>Fe is a transition metal with variable charge. Cl⁻ has a −1 charge. 2 Cl⁻ = −2 total. Iron must be +2. Roman numeral II. Name: iron(II) chloride.</p>'},

  {id:'p10',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for FeCl₃?',
   choices:['iron(III) chloride','iron(II) chloride','iron chloride','iron trichloride'],correct:0,
   solution:'<p>Cl⁻ × 3 = −3 total. Iron must be +3. Roman numeral III. Name: iron(III) chloride. Do not use "tri-" for ionic compounds.</p>'},

  {id:'p11',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for CuO?',
   choices:['copper(II) oxide','copper(I) oxide','copper oxide','cupric monooxide'],correct:0,
   solution:'<p>O²⁻ has a charge of −2. 1 oxide ion = −2 total. Copper must be +2. Roman numeral II. Name: copper(II) oxide.</p>'},

  {id:'p12',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for Cu₂O?',
   choices:['copper(I) oxide','copper(II) oxide','dicopper oxide','copper monooxide'],correct:0,
   solution:'<p>O²⁻ = −2 total. 2 copper atoms share +2 total → each Cu = +1. Roman numeral I. Name: copper(I) oxide.</p>'},

  {id:'p13',type:'concept',tag:'Roman Numerals',
   q:'Which compound requires a Roman numeral in its name?',
   choices:['FeCl₂','NaCl','MgO','CaS'],correct:0,
   solution:'<p>Fe (iron) is a transition metal that can be +2 or +3. We need a Roman numeral to specify which charge is present. Na, Mg, and Ca each have only one possible charge, so they never need Roman numerals.</p>'},

  {id:'p14',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for FeO?',
   choices:['iron(II) oxide','iron(III) oxide','iron oxide','ferrous monoxide'],correct:0,
   solution:'<p>O²⁻ = −2 total. 1 Fe balances this with +2. Roman numeral II. Name: iron(II) oxide.</p>'},

  {id:'p15',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for Fe₂O₃?',
   choices:['iron(III) oxide','iron(II) oxide','diiron trioxide','iron oxide'],correct:0,
   solution:'<p>3 O²⁻ = −6 total. 2 Fe must supply +6 total. +6 ÷ 2 = +3 each. Roman numeral III. Name: iron(III) oxide.</p>'},

  {id:'p16',type:'concept',tag:'Roman Numerals',
   q:'Which is the correct name for PbO₂?',
   choices:['lead(IV) oxide','lead(II) oxide','lead dioxide','lead(II) dioxide'],correct:0,
   solution:'<p>2 O²⁻ = −4 total. 1 Pb = +4. Roman numeral IV. Name: lead(IV) oxide. Do not use prefixes in ionic naming.</p>'},

  /* ========== CONCEPT — Polyatomic Ions ========== */
  {id:'p17',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for Ca(OH)₂?',
   choices:['calcium hydroxide','calcium(II) hydroxide','dicalcium hydroxide','calcium dihydroxide'],correct:0,
   solution:'<p>Ca²⁺ and OH⁻ (hydroxide). Ca is always +2, so no Roman numeral. Use the polyatomic ion name directly: hydroxide (not hydroxide-ide). Name: calcium hydroxide.</p>'},

  {id:'p18',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for NH₄NO₃?',
   choices:['ammonium nitrate','ammonium nitrite','nitrogen ammonium oxide','nitrogen nitrate'],correct:0,
   solution:'<p>NH₄⁺ = ammonium. NO₃⁻ = nitrate. Name: ammonium nitrate. Both are polyatomic ions — use their names directly.</p>'},

  {id:'p19',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for Na₂SO₄?',
   choices:['sodium sulfate','sodium sulfite','disodium sulfate','sodium(I) sulfate'],correct:0,
   solution:'<p>Na⁺ = sodium. SO₄²⁻ = sulfate. Na always has a +1 charge, no Roman numeral needed. Name: sodium sulfate.</p>'},

  {id:'p20',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for Na₂SO₃?',
   choices:['sodium sulfite','sodium sulfate','sodium(I) sulfite','disodium trioxide'],correct:0,
   solution:'<p>Na⁺ = sodium. SO₃²⁻ = sulfite (fewer oxygens than sulfate, ends in –ite). Name: sodium sulfite.</p>'},

  {id:'p21',type:'concept',tag:'Polyatomic Ions',
   q:'What is the name for the NO₃⁻ ion?',
   choices:['nitrate','nitrite','nitrogen trioxide','nitric ion'],correct:0,
   solution:'<p>NO₃⁻ is the nitrate ion (more oxygens, ends in –ate). NO₂⁻ would be nitrite. Memorize both.</p>'},

  {id:'p22',type:'concept',tag:'Polyatomic Ions',
   q:'What is the name for the SO₄²⁻ ion?',
   choices:['sulfate','sulfite','persulfate','sulfuric'],correct:0,
   solution:'<p>SO₄²⁻ is the sulfate ion. It has 4 oxygens and a 2− charge. SO₃²⁻ (3 oxygens) would be sulfite.</p>'},

  {id:'p23',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for K₃PO₄?',
   choices:['potassium phosphate','potassium phosphite','tripotassium phosphate','potassium(III) phosphate'],correct:0,
   solution:'<p>K⁺ = potassium. PO₄³⁻ = phosphate. K always has +1 charge. Name: potassium phosphate. No prefix, no Roman numeral.</p>'},

  {id:'p24',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for NH₄Cl?',
   choices:['ammonium chloride','nitrogen chloride','ammonium(I) chloride','nitrogen tetrachloride'],correct:0,
   solution:'<p>NH₄⁺ = ammonium. Cl⁻ = chloride (a simple nonmetal, not polyatomic). Name: ammonium chloride.</p>'},

  {id:'p25',type:'concept',tag:'Polyatomic Ions',
   q:'Which ion is called "carbonate"?',
   choices:['CO₃²⁻','HCO₃⁻','CO₂','C₂O₄²⁻'],correct:0,
   solution:'<p>CO₃²⁻ is carbonate (3 oxygens, 2− charge). HCO₃⁻ is hydrogen carbonate (bicarbonate). CO₂ is a molecular compound, not an ion.</p>'},

  {id:'p26',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for Al(NO₃)₃?',
   choices:['aluminum nitrate','aluminum(III) nitrate','aluminum nitrite','trialuminum nitrate'],correct:0,
   solution:'<p>Al³⁺ = aluminum (always +3, so no Roman numeral needed). NO₃⁻ = nitrate. Name: aluminum nitrate.</p>'},

  {id:'p27',type:'concept',tag:'Polyatomic Ions',
   q:'What is the difference between nitrate and nitrite?',
   choices:['Nitrate has more oxygen atoms','Nitrate has fewer oxygen atoms','They have different charges','They contain different elements'],correct:0,
   solution:'<p>Nitrate = NO₃⁻ (3 oxygens, –ate suffix). Nitrite = NO₂⁻ (2 oxygens, –ite suffix). The –ate ion always has more oxygens than the –ite ion for the same element.</p>'},

  /* ========== CONCEPT — Molecular Compounds ========== */
  {id:'p28',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for CO₂?',
   choices:['carbon dioxide','carbon monoxide','dioxocarbon','carbon(IV) oxide'],correct:0,
   solution:'<p>CO₂ is molecular (nonmetal + nonmetal). C = carbon (1 atom, skip "mono" for first element). O = 2 atoms = di- + oxide = dioxide. Name: carbon dioxide.</p>'},

  {id:'p29',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for CO?',
   choices:['carbon monoxide','carbon oxide','monocarbon oxide','carbon(II) oxide'],correct:0,
   solution:'<p>CO is molecular. C = 1 (skip mono for first). O = 1 atom = monoxide (keep mono for second element). Name: carbon monoxide.</p>'},

  {id:'p30',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for N₂O₄?',
   choices:['dinitrogen tetroxide','nitrogen tetroxide','dinitrogen tetraoxide','nitrogen dioxide'],correct:0,
   solution:'<p>N₂O₄ is molecular. N = 2 = di-. O = 4 = tetra-. "Tetra-" + "oxide" → drop the trailing "a" from "tetra" → "tetroxide." Name: dinitrogen tetroxide.</p>'},

  {id:'p31',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for SF₆?',
   choices:['sulfur hexafluoride','sulfur(VI) fluoride','hexafluorosulfur','disulfur hexafluoride'],correct:0,
   solution:'<p>S = 1 (skip mono). F = 6 = hexa-. Fluorine → fluoride. Name: sulfur hexafluoride.</p>'},

  {id:'p32',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for PCl₃?',
   choices:['phosphorus trichloride','phosphorus(III) chloride','triphosphorus chloride','phosphorus chloride'],correct:0,
   solution:'<p>P = 1 (skip mono). Cl = 3 = tri-. Chlorine → chloride. Name: phosphorus trichloride. No Roman numeral — it is a molecular, not ionic, compound.</p>'},

  {id:'p33',type:'concept',tag:'Molecular Naming',
   q:'Which compound is named using prefixes?',
   choices:['SO₂','NaCl','CaO','FeCl₂'],correct:0,
   solution:'<p>SO₂ is molecular (S and O are both nonmetals) → use prefixes → sulfur dioxide. NaCl, CaO, FeCl₂ are ionic (they contain metals) → no prefixes.</p>'},

  {id:'p34',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for NO₂?',
   choices:['nitrogen dioxide','dinitrogen oxide','nitrogen(IV) oxide','nitrogen monoxide'],correct:0,
   solution:'<p>N = 1 (skip mono for first element). O = 2 = di-. Name: nitrogen dioxide.</p>'},

  {id:'p35',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for N₂O?',
   choices:['dinitrogen monoxide','nitrogen oxide','dinitrogen oxide','nitrogen monoxide'],correct:0,
   solution:'<p>N = 2 = di-. O = 1 = mono- (always use prefix for second element even when it is 1). Name: dinitrogen monoxide (also known as nitrous oxide, laughing gas).</p>'},

  {id:'p36',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for SO₃?',
   choices:['sulfur trioxide','sulfur(VI) oxide','disulfur trioxide','sulfuric trioxide'],correct:0,
   solution:'<p>S = 1 (skip mono). O = 3 = tri-. Name: sulfur trioxide.</p>'},

  {id:'p37',type:'concept',tag:'Molecular Naming',
   q:'A student writes "diphosphorus pentoxide" for P₂O₅. Which part of this name is NOT correct?',
   choices:['Nothing — it is correct','The prefix "di" should be dropped','The prefix "penta" should be "hexa"','Phosphorus should have a Roman numeral'],correct:0,
   solution:'<p>P₂O₅: P = 2 = di-, O = 5 = penta-. The name "diphosphorus pentoxide" is actually correct! Phosphorus is a nonmetal so we use prefixes, not Roman numerals. This is also sometimes written as P₄O₁₀ (tetraphosphorus decoxide) when written as two P₂O₅ units.</p>'},

  /* ========== CONCEPT — Binary Acids ========== */
  {id:'p38',type:'concept',tag:'Binary Acids',
   q:'What is the correct name for HCl dissolved in water?',
   choices:['hydrochloric acid','chloric acid','hydrogen chloride','hydrochlorine acid'],correct:0,
   solution:'<p>HCl (aq) is a binary acid: H + Cl, no oxygen. Pattern: hydro- + chlor + -ic acid = hydrochloric acid.</p>'},

  {id:'p39',type:'concept',tag:'Binary Acids',
   q:'What is the correct name for HBr (aq)?',
   choices:['hydrobromic acid','hydrogen bromide','bromic acid','hydrobromine acid'],correct:0,
   solution:'<p>HBr (aq) is a binary acid. Pattern: hydro- + brom + -ic acid = hydrobromic acid.</p>'},

  {id:'p40',type:'concept',tag:'Binary Acids',
   q:'What is the correct name for HF (aq)?',
   choices:['hydrofluoric acid','fluoric acid','hydrogen fluoride','hydrofloric acid'],correct:0,
   solution:'<p>HF (aq) is a binary acid. Pattern: hydro- + fluor + -ic acid = hydrofluoric acid.</p>'},

  {id:'p41',type:'concept',tag:'Binary Acids',
   q:'Which formula matches "hydroiodic acid"?',
   choices:['HI','HIO₃','HIO','H₂I'],correct:0,
   solution:'<p>Hydro- = no oxygen. Iod- = iodine. -ic acid. So the compound contains H and I only → HI. HIO₃ is iodic acid (an oxyacid).</p>'},

  {id:'p42',type:'concept',tag:'Binary Acids',
   q:'What prefix do ALL binary acids share?',
   choices:['hydro-','hypo-','per-','bi-'],correct:0,
   solution:'<p>All binary acids (H + one nonmetal, no oxygen) begin with "hydro-." This distinguishes them from oxyacids which do NOT use "hydro-."</p>'},

  /* ========== CONCEPT — Oxyacids ========== */
  {id:'p43',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for HNO₃?',
   choices:['nitric acid','nitrous acid','hydronitric acid','nitrogen acid'],correct:0,
   solution:'<p>HNO₃ contains oxygen → oxyacid. Ion inside: NO₃⁻ = nitrate (ends in –ate). –ate → –ic acid. Root: nitr. Name: nitric acid.</p>'},

  {id:'p44',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for HNO₂?',
   choices:['nitrous acid','nitric acid','hydronitrous acid','nitrite acid'],correct:0,
   solution:'<p>HNO₂ is an oxyacid. Ion inside: NO₂⁻ = nitrite (ends in –ite). –ite → –ous acid. Name: nitrous acid.</p>'},

  {id:'p45',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for H₂SO₄?',
   choices:['sulfuric acid','sulfurous acid','hydrosulfuric acid','sulfate acid'],correct:0,
   solution:'<p>H₂SO₄ is an oxyacid. Ion inside: SO₄²⁻ = sulfate (–ate). –ate → –ic acid. Root: sulfur. Name: sulfuric acid.</p>'},

  {id:'p46',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for H₂SO₃?',
   choices:['sulfurous acid','sulfuric acid','hydrosulfurous acid','sulfite acid'],correct:0,
   solution:'<p>H₂SO₃ is an oxyacid. Ion inside: SO₃²⁻ = sulfite (–ite). –ite → –ous acid. Name: sulfurous acid.</p>'},

  {id:'p47',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for H₂CO₃?',
   choices:['carbonic acid','carborous acid','hydrocarbonic acid','carbon acid'],correct:0,
   solution:'<p>H₂CO₃ is an oxyacid. Ion inside: CO₃²⁻ = carbonate (–ate). –ate → –ic acid. Name: carbonic acid.</p>'},

  {id:'p48',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for H₃PO₄?',
   choices:['phosphoric acid','phosphorous acid','hydrophosphoric acid','phosphate acid'],correct:0,
   solution:'<p>H₃PO₄ is an oxyacid. Ion inside: PO₄³⁻ = phosphate (–ate). –ate → –ic acid. Name: phosphoric acid.</p>'},

  {id:'p49',type:'concept',tag:'Oxyacids',
   q:'If an acid ends in "-ous acid," the polyatomic ion inside ends in:',
   choices:['-ite','-ate','-ide','-ic'],correct:0,
   solution:'<p>The pattern: –ate ion → –ic acid; –ite ion → –ous acid. So an "-ous acid" always contains an "-ite" ion.</p>'},

  {id:'p50',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for HClO₄?',
   choices:['perchloric acid','chloric acid','hypochlorous acid','perchlorous acid'],correct:0,
   solution:'<p>HClO₄ is an oxyacid. Ion inside: ClO₄⁻ = perchlorate (–ate). –ate → –ic acid. Name: perchloric acid.</p>'},

  {id:'p51',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for HClO?',
   choices:['hypochlorous acid','chlorous acid','hydrochlorous acid','chloric acid'],correct:0,
   solution:'<p>HClO is an oxyacid. Ion inside: ClO⁻ = hypochlorite (–ite). –ite → –ous acid. Name: hypochlorous acid. Note: it contains oxygen, so no "hydro-" prefix.</p>'},

  /* ========== CONCEPT — Identifying Compound Type ========== */
  {id:'p52',type:'concept',tag:'Compound Types',
   q:'Which compound is molecular (not ionic)?',
   choices:['SO₂','NaCl','CaCl₂','KBr'],correct:0,
   solution:'<p>SO₂ has two nonmetals (S and O) — molecular. NaCl, CaCl₂, and KBr all contain a metal + nonmetal — ionic.</p>'},

  {id:'p53',type:'concept',tag:'Compound Types',
   q:'Which rule applies to ionic compounds but NOT molecular ones?',
   choices:['No prefixes needed','Prefixes like di- and tri- are required','The name ends with -ic acid','The compound starts with hydrogen'],correct:0,
   solution:'<p>Ionic compounds never use prefixes like di-, tri-, etc. The subscripts in ionic formulas are determined by ion charges, not by choice. Molecular compounds do use prefixes.</p>'},

  {id:'p54',type:'concept',tag:'Compound Types',
   q:'A compound has the formula HCl dissolved in water. What type of compound is it?',
   choices:['A binary acid','An oxyacid','An ionic compound','A molecular compound'],correct:0,
   solution:'<p>HCl (aq) starts with H, has no oxygen, and contains one other element (Cl). This fits the definition of a binary acid. Its name is hydrochloric acid.</p>'},

  {id:'p55',type:'concept',tag:'Compound Types',
   q:'Which formula represents an ionic compound containing a polyatomic ion?',
   choices:['Ca(NO₃)₂','CaCl₂','CO₂','HCl'],correct:0,
   solution:'<p>Ca(NO₃)₂ contains Ca²⁺ (metal cation) and NO₃⁻ (nitrate, a polyatomic ion). CaCl₂ is ionic but Cl⁻ is not polyatomic. CO₂ and HCl are molecular/binary acid.</p>'},

  {id:'p56',type:'concept',tag:'Compound Types',
   q:'Which metal always requires a Roman numeral in its compound names?',
   choices:['Iron (Fe)','Sodium (Na)','Calcium (Ca)','Aluminum (Al)'],correct:0,
   solution:'<p>Iron (Fe) is a transition metal that can be +2 or +3, so a Roman numeral is always needed. Na is always +1, Ca is always +2, and Al is always +3 — no Roman numerals for these.</p>'},

  /* ========== CONCEPT — Naming Polyatomic Ion Compounds (more) ========== */
  {id:'p57',type:'multi',tag:'Polyatomic + Roman',
   q:'What is the correct name for Fe(NO₃)₂?',
   choices:['iron(II) nitrate','iron(III) nitrate','iron dinitrate','iron(II) nitrite'],correct:0,
   solution:'<p>Step 1: Identify the polyatomic ion — NO₃⁻ = nitrate. Step 2: Find Fe charge — 2 NO₃⁻ = −2 total → Fe must be +2. Step 3: Name → iron(II) nitrate.</p>'},

  {id:'p58',type:'multi',tag:'Polyatomic + Roman',
   q:'What is the correct name for Fe(NO₃)₃?',
   choices:['iron(III) nitrate','iron(II) nitrate','iron(III) nitrite','iron trinitrate'],correct:0,
   solution:'<p>Step 1: NO₃⁻ = nitrate. Step 2: 3 NO₃⁻ = −3 total → Fe = +3. Step 3: iron(III) nitrate.</p>'},

  {id:'p59',type:'multi',tag:'Polyatomic + Roman',
   q:'What is the correct name for Cu₃(PO₄)₂?',
   choices:['copper(II) phosphate','copper(I) phosphate','tricopper diphosphate','copper(III) phosphate'],correct:0,
   solution:'<p>Step 1: PO₄³⁻ = phosphate. Step 2: 2 × (−3) = −6 total. 3 Cu = +6 total → each Cu = +2. Step 3: copper(II) phosphate.</p>'},

  {id:'p60',type:'multi',tag:'Polyatomic + Roman',
   q:'What is the correct name for Pb(NO₃)₂?',
   choices:['lead(II) nitrate','lead(IV) nitrate','lead nitrate','lead dinitrate'],correct:0,
   solution:'<p>Step 1: NO₃⁻ = nitrate. Step 2: 2 × (−1) = −2 total → Pb = +2. Step 3: lead(II) nitrate. Pb has variable charge → Roman numeral required.</p>'},

  /* ========== CONCEPT — More Molecular ========== */
  {id:'p61',type:'multi',tag:'Molecular Naming',
   q:'What is the correct name for CCl₄?',
   choices:['carbon tetrachloride','carbon(IV) chloride','monocarbon tetrachloride','tetrachlorocarbon'],correct:0,
   solution:'<p>C = 1 (skip mono for first element). Cl = 4 = tetra-. Chlorine → chloride. Name: carbon tetrachloride (used as a solvent).</p>'},

  {id:'p62',type:'multi',tag:'Molecular Naming',
   q:'What is the correct name for P₄O₁₀?',
   choices:['tetraphosphorus decoxide','tetraphosphorus decaoxide','phosphorus oxide','diphosphorus pentoxide'],correct:0,
   solution:'<p>P = 4 = tetra-. O = 10 = deca-. "Deca-" + "oxide" → drop trailing "a" → "decoxide." Name: tetraphosphorus decoxide.</p>'},

  {id:'p63',type:'multi',tag:'Molecular Naming',
   q:'What is the correct name for Cl₂O₇?',
   choices:['dichlorine heptoxide','chlorine heptoxide','chlorine(VII) oxide','dichlorine septoxide'],correct:0,
   solution:'<p>Cl = 2 = di-. O = 7 = hepta-. Name: dichlorine heptoxide.</p>'},

  /* ========== CALC — Charge determination ========== */
  {id:'p64',type:'calc',tag:'Metal Charge',
   q:'In the compound MnO₂, oxygen has a −2 charge. What is the charge on the manganese (Mn) ion? Enter just the number with its sign (e.g., +2).',
   answer:'+4', isText:true,
   solution:'<p>2 O²⁻ = −4 total. Mn must be +4 to balance. The compound is manganese(IV) oxide.</p>'},

  {id:'p65',type:'calc',tag:'Metal Charge',
   q:'In CrCl₃, chloride (Cl⁻) has a −1 charge. What is the charge on the chromium (Cr) ion? Enter with sign (e.g., +3).',
   answer:'+3', isText:true,
   solution:'<p>3 Cl⁻ = −3 total. Cr must be +3. The compound is chromium(III) chloride.</p>'},

  {id:'p66',type:'calc',tag:'Metal Charge',
   q:'In PbO, what is the charge on the lead (Pb) ion? Enter with sign (e.g., +2).',
   answer:'+2', isText:true,
   solution:'<p>1 O²⁻ = −2 total. Pb must be +2. The compound is lead(II) oxide.</p>'},

  {id:'p67',type:'calc',tag:'Metal Charge',
   q:'In SnCl₄, what is the charge on the tin (Sn) ion? Enter with sign (e.g., +4).',
   answer:'+4', isText:true,
   solution:'<p>4 Cl⁻ = −4 total. Sn must be +4. The compound is tin(IV) chloride.</p>'},

  {id:'p68',type:'calc',tag:'Metal Charge',
   q:'In SnCl₂, what is the charge on the tin (Sn) ion? Enter with sign (e.g., +2).',
   answer:'+2', isText:true,
   solution:'<p>2 Cl⁻ = −2 total. Sn must be +2. The compound is tin(II) chloride.</p>'},

  {id:'p69',type:'calc',tag:'Metal Charge',
   q:'In Cr₂(SO₄)₃, the sulfate ion (SO₄²⁻) has a −2 charge. What is the charge on each chromium ion? Enter with sign (e.g., +3).',
   answer:'+3', isText:true,
   solution:'<p>3 SO₄²⁻ = −6 total. 2 Cr atoms supply +6 total. +6 ÷ 2 = +3 per Cr. The compound is chromium(III) sulfate.</p>'},

  {id:'p70',type:'calc',tag:'Metal Charge',
   q:'In Cu₃(PO₄)₂, the phosphate ion (PO₄³⁻) has a −3 charge. What is the charge on each copper ion? Enter with sign (e.g., +2).',
   answer:'+2', isText:true,
   solution:'<p>2 PO₄³⁻ = −6 total. 3 Cu supply +6 total. +6 ÷ 3 = +2 per Cu. The compound is copper(II) phosphate.</p>'},

  {id:'p71',type:'calc',tag:'Metal Charge',
   q:'In Fe₂(SO₄)₃, the sulfate ion (SO₄²⁻) has a −2 charge. What is the charge on each iron ion? Enter with sign (e.g., +3).',
   answer:'+3', isText:true,
   solution:'<p>3 SO₄²⁻ = −6 total. 2 Fe supply +6 total. +6 ÷ 2 = +3. The compound is iron(III) sulfate.</p>'},

  {id:'p72',type:'calc',tag:'Metal Charge',
   q:'In NiCl₂, what is the charge on the nickel (Ni) ion? Enter with sign.',
   answer:'+2', isText:true,
   solution:'<p>2 Cl⁻ = −2 total. Ni must be +2. The compound is nickel(II) chloride.</p>'},

  {id:'p73',type:'calc',tag:'Metal Charge',
   q:'In CoO, what is the charge on the cobalt (Co) ion? Enter with sign.',
   answer:'+2', isText:true,
   solution:'<p>1 O²⁻ = −2 total. Co must be +2. The compound is cobalt(II) oxide.</p>'},

  {id:'p74',type:'calc',tag:'Metal Charge',
   q:'In Co₂O₃, what is the charge on each cobalt (Co) ion? Enter with sign.',
   answer:'+3', isText:true,
   solution:'<p>3 O²⁻ = −6 total. 2 Co supply +6 total. +6 ÷ 2 = +3. The compound is cobalt(III) oxide.</p>'},

  {id:'p75',type:'calc',tag:'Metal Charge',
   q:'In MnO, what is the charge on the manganese (Mn) ion? Enter with sign.',
   answer:'+2', isText:true,
   solution:'<p>1 O²⁻ = −2 total. Mn must be +2. The compound is manganese(II) oxide.</p>'},

  /* ========== MULTI-STEP ========== */
  {id:'p76',type:'multi',tag:'Name → Formula',
   q:'Which formula correctly represents "iron(III) sulfate"?',
   choices:['Fe₂(SO₄)₃','Fe₃(SO₄)₂','Fe(SO₄)₃','Fe₂SO₄'],correct:0,
   solution:'<p>Iron(III) = Fe³⁺. Sulfate = SO₄²⁻. To balance: need charges equal to zero. Fe³⁺ × 2 = +6 total. SO₄²⁻ × 3 = −6 total. Formula: Fe₂(SO₄)₃.</p>'},

  {id:'p77',type:'multi',tag:'Name → Formula',
   q:'Which formula correctly represents "copper(I) sulfide"?',
   choices:['Cu₂S','CuS','Cu₂S₂','CuS₂'],correct:0,
   solution:'<p>Copper(I) = Cu⁺. Sulfide = S²⁻. 2 Cu⁺ = +2 total. 1 S²⁻ = −2 total. Formula: Cu₂S.</p>'},

  {id:'p78',type:'multi',tag:'Name → Formula',
   q:'Which formula correctly represents "ammonium carbonate"?',
   choices:['(NH₄)₂CO₃','NH₄CO₃','(NH₄)₃CO₃','NH₄(CO₃)₂'],correct:0,
   solution:'<p>Ammonium = NH₄⁺ (+1). Carbonate = CO₃²⁻ (−2). 2 NH₄⁺ = +2. 1 CO₃²⁻ = −2. Formula: (NH₄)₂CO₃.</p>'},

  {id:'p79',type:'multi',tag:'Name → Formula',
   q:'Which formula correctly represents "calcium phosphate"?',
   choices:['Ca₃(PO₄)₂','Ca₂(PO₄)₃','CaPO₄','Ca₃PO₄'],correct:0,
   solution:'<p>Ca²⁺ (+2). PO₄³⁻ (−3). 3 Ca²⁺ = +6. 2 PO₄³⁻ = −6. Formula: Ca₃(PO₄)₂.</p>'},

  {id:'p80',type:'multi',tag:'Full Naming',
   q:'A compound has the formula Pb(NO₃)₂. Which of the following is the correct systematic name?',
   choices:['lead(II) nitrate','lead(IV) dinitrate','dilead nitrate','lead nitrate(II)'],correct:0,
   solution:'<p>NO₃⁻ = nitrate. 2 NO₃⁻ = −2 total. Pb = +2. Roman numeral II goes right after metal name in parentheses. Correct format: lead(II) nitrate.</p>'},

  {id:'p81',type:'multi',tag:'Full Naming',
   q:'A compound contains Mn³⁺ and oxygen (O²⁻). What is its formula and name?',
   choices:['Mn₂O₃ — manganese(III) oxide','MnO₃ — manganese(VI) oxide','Mn₃O₂ — manganese(II) oxide','MnO — manganese(III) oxide'],correct:0,
   solution:'<p>Mn³⁺ × 2 = +6 total. O²⁻ × 3 = −6 total. Formula: Mn₂O₃. Metal with variable charge → Roman numeral III → manganese(III) oxide.</p>'},

]; // end ALL_PROBLEMS — 81 problems total
