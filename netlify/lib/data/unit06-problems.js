/* ── Unit 06 Problem Bank — Nomenclature
   174 problems total (81 original + 60 added + 33 hard expansion)
   Difficulty: 75 easy | 51 medium | 48 hard
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  /* ========== CONCEPT — Binary Ionic (simple metals) ========== */
  {id:'p01',difficulty:'easy',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for NaCl?',
   choices:['sodium chloride','sodium chlorine','sodium(I) chloride','monosodium chloride'],correct:0,
  solution:'<p>NaCl is ionic because it contains a metal and a nonmetal.</p><p>Name the metal first: sodium. Then change the nonmetal ending to <em>-ide</em>: chloride.</p><p>Sodium always forms +1, so no Roman numeral is needed.</p>'},

  {id:'p02',difficulty:'easy',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for K2O?',
   choices:['potassium oxide','dipotassium oxide','potassium(II) oxide','potassium oxygen'],correct:0,
   solution:'<p>K2O is ionic. K is potassium (always +1). O becomes oxide. Do not use prefixes ("di-") for ionic compounds. No Roman numeral since K has only one charge.</p><p>Name: <strong>potassium oxide</strong>.</p>'},

  {id:'p03',difficulty:'easy',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for MgBr2?',
   choices:['magnesium bromide','dimagnesium bromide','magnesium(II) bromide','magnesium dibromide'],correct:0,
   solution:'<p>MgBr2 is ionic. Mg is magnesium (always +2). Br becomes bromide. Write: magnesium bromide. No prefix needed because it is ionic. Mg always has a +2 charge, so no Roman numeral.</p>'},

  {id:'p04',difficulty:'easy',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for CaF2?',
   choices:['calcium fluoride','calcium difluoride','calcium(II) fluoride','dicalcium fluoride'],correct:0,
   solution:'<p>CaF2 is ionic. Ca is calcium (always +2). F becomes fluoride. Write: calcium fluoride. Subscripts in ionic formulas come from charges — never use prefixes for ionic compounds.</p>'},

  {id:'p05',difficulty:'easy',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for Al2O3?',
   choices:['aluminum oxide','dialuminum trioxide','aluminum(III) oxide','trialuminum dioxide'],correct:0,
   solution:'<p>Al2O3 is ionic. Al is aluminum (always +3). O becomes oxide. Write: aluminum oxide. Al has only one common charge (+3), so no Roman numeral. Do not use "di-" or "tri-" prefixes for ionic compounds.</p>'},

  {id:'p06',difficulty:'easy',type:'concept',tag:'Ionic Naming',
   q:'Which formula matches the name "sodium sulfide"?',
   choices:['Na2S','NaS','NaS2','Na2S2'],correct:0,
   solution:'<p>Sodium sulfide: Na^+ and S^2-. To balance: 2 Na^+ and 1 S^2- → Na2S. The subscripts come from swapping the charges (cross-multiply method): 1 from Na, 2 from S → <strong>Na2S</strong>.</p>'},

  {id:'p07',difficulty:'easy',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for Li3N?',
   choices:['lithium nitride','trilithium nitrogen','lithium(I) nitride','lithium nitrogen'],correct:0,
   solution:'<p>Li3N is ionic. Li is lithium (always +1). N becomes nitride (N^3-). Write: lithium nitride. Li has only one charge, so no Roman numeral. Do not use "tri-" prefix.</p>'},

  {id:'p08',difficulty:'easy',type:'concept',tag:'Ionic Naming',
   q:'What is the BEST name for the ionic compound formed between barium (Ba^2+) and oxygen (O^2-)?',
   choices:['barium oxide','barium monoxide','barium(II) oxide','dibarium monoxide'],correct:0,
   solution:'<p>BaO is ionic (metal + nonmetal), so use ionic naming rules: metal name first, then nonmetal with <em>-ide</em>.</p><p>The best name is <strong>barium oxide</strong>. Prefixes like mono-/di- are not used for ionic compounds, and barium has a fixed +2 charge so a Roman numeral is not required.</p>'},

  /* ========== CONCEPT — Transition Metals / Roman Numerals ========== */
  {id:'p09',difficulty:'medium',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for FeCl2?',
   choices:['iron(II) chloride','iron(III) chloride','iron chloride','ferrous dichloride'],correct:0,
  solution:'<p>Iron is a transition metal, so you must determine its charge.</p><p>Each Cl^- is -1, and there are 2 chloride ions for a total of -2.</p><p>That means Fe must be +2 to balance the compound, so the correct name is <strong>iron(II) chloride</strong>.</p>'},

  {id:'p10',difficulty:'medium',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for FeCl3?',
   choices:['iron(III) chloride','iron(II) chloride','iron chloride','iron trichloride'],correct:0,
   solution:'<p>Cl^- × 3 = -3 total. Iron must be +3. Roman numeral III. Name: iron(III) chloride. Do not use "tri-" for ionic compounds.</p>'},

  {id:'p11',difficulty:'medium',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for CuO?',
   choices:['copper(II) oxide','copper(I) oxide','copper oxide','cupric monooxide'],correct:0,
  solution:'<p>Oxide is O^2-, so the negative charge in the compound is -2 total.</p><p>To make the compound neutral, copper must be +2.</p><p>Because copper can have more than one charge, include the Roman numeral: <strong>copper(II) oxide</strong>.</p>'},

  {id:'p12',difficulty:'medium',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for Cu2O?',
   choices:['copper(I) oxide','copper(II) oxide','dicopper oxide','copper monooxide'],correct:0,
   solution:'<p>O^2- = -2 total. 2 copper atoms share +2 total → each Cu = +1. Roman numeral I. Name: copper(I) oxide.</p>'},

  {id:'p13',difficulty:'easy',type:'concept',tag:'Roman Numerals',
   q:'Which compound requires a Roman numeral in its name?',
   choices:['FeCl2','NaCl','MgO','CaS'],correct:0,
  solution:'<p>Iron is a transition metal, and transition metals often have more than one possible ion charge.</p><p>That is why iron compounds need a Roman numeral to show which charge is present, such as iron(II) or iron(III).</p><p>Elements like Na, Mg, and Ca have only one common charge, so they do not need Roman numerals.</p>'},

  {id:'p14',difficulty:'medium',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for FeO?',
   choices:['iron(II) oxide','iron(III) oxide','iron oxide','ferrous monoxide'],correct:0,
   solution:'<p>O^2- = -2 total. 1 Fe balances this with +2. Roman numeral II. Name: iron(II) oxide.</p>'},

  {id:'p15',difficulty:'medium',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for Fe2O3?',
   choices:['iron(III) oxide','iron(II) oxide','diiron trioxide','iron oxide'],correct:0,
   solution:'<p>3 O^2- = -6 total. 2 Fe must supply +6 total. +6 ÷ 2 = +3 each. Roman numeral III. Name: iron(III) oxide.</p>'},

  {id:'p16',difficulty:'medium',type:'concept',tag:'Roman Numerals',
   q:'Which is the correct name for PbO2?',
   choices:['lead(IV) oxide','lead(II) oxide','lead dioxide','lead(II) dioxide'],correct:0,
   solution:'<p>2 O^2- = -4 total. 1 Pb = +4. Roman numeral IV. Name: lead(IV) oxide. Do not use prefixes in ionic naming.</p>'},

  /* ========== CONCEPT — Polyatomic Ions ========== */
  {id:'p17',difficulty:'easy',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for Ca(OH)2?',
   choices:['calcium hydroxide','calcium(II) hydroxide','dicalcium hydroxide','calcium dihydroxide'],correct:0,
   solution:'<p>Ca^2+ and OH^- (hydroxide). Ca is always +2, so no Roman numeral. Use the polyatomic ion name directly: hydroxide (not hydroxide-ide). Name: calcium hydroxide.</p>'},

  {id:'p18',difficulty:'easy',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for NH4NO3?',
   choices:['ammonium nitrate','ammonium nitrite','nitrogen ammonium oxide','nitrogen nitrate'],correct:0,
  solution:'<p>Recognize the polyatomic ions first: NH4^+ is ammonium and NO3^- is nitrate.</p><p>When a formula uses polyatomic ions, keep their standard names instead of changing the endings.</p><p>So NH4NO3 is <strong>ammonium nitrate</strong>.</p>'},

  {id:'p19',difficulty:'easy',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for Na2SO4?',
   choices:['sodium sulfate','sodium sulfite','disodium sulfate','sodium(I) sulfate'],correct:0,
   solution:'<p>Na^+ = sodium. SO4^2- = sulfate. Na always has a +1 charge, no Roman numeral needed. Name: sodium sulfate.</p>'},

  {id:'p20',difficulty:'easy',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for Na2SO3?',
   choices:['sodium sulfite','sodium sulfate','sodium(I) sulfite','disodium trioxide'],correct:0,
   solution:'<p>Na^+ = sodium. SO3^2- = sulfite (fewer oxygens than sulfate, ends in –ite). Name: sodium sulfite.</p>'},

  {id:'p21',difficulty:'easy',type:'concept',tag:'Polyatomic Ions',
   q:'What is the name for the NO3^- ion?',
   choices:['nitrate','nitrite','nitrogen trioxide','nitric ion'],correct:0,
   solution:'<p>NO3^- is the nitrate ion (more oxygens, ends in –ate). NO2^- would be nitrite. Memorize both.</p>'},

  {id:'p22',difficulty:'easy',type:'concept',tag:'Polyatomic Ions',
   q:'What is the name for the SO4^2- ion?',
   choices:['sulfate','sulfite','persulfate','sulfuric'],correct:0,
   solution:'<p>SO4^2- is the sulfate ion. It has 4 oxygens and a 2- charge. SO3^2- (3 oxygens) would be sulfite.</p>'},

  {id:'p23',difficulty:'easy',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for K3PO4?',
   choices:['potassium phosphate','potassium phosphite','tripotassium phosphate','potassium(III) phosphate'],correct:0,
   solution:'<p>K^+ = potassium. PO4^3- = phosphate. K always has +1 charge. Name: potassium phosphate. No prefix, no Roman numeral.</p>'},

  {id:'p24',difficulty:'easy',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for NH4Cl?',
   choices:['ammonium chloride','nitrogen chloride','ammonium(I) chloride','nitrogen tetrachloride'],correct:0,
   solution:'<p>NH4^+ = ammonium. Cl^- = chloride (a simple nonmetal, not polyatomic). Name: ammonium chloride.</p>'},

  {id:'p25',difficulty:'easy',type:'concept',tag:'Polyatomic Ions',
   q:'Which ion is called "carbonate"?',
   choices:['CO3^2-','HCO3^-','CO2','C2O4^2-'],correct:0,
   solution:'<p>CO3^2- is carbonate (3 oxygens, 2- charge). HCO3^- is hydrogen carbonate (bicarbonate). CO2 is a molecular compound, not an ion.</p>'},

  {id:'p26',difficulty:'easy',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for Al(NO3)3?',
   choices:['aluminum nitrate','aluminum(III) nitrate','aluminum nitrite','trialuminum nitrate'],correct:0,
   solution:'<p>Al^3+ = aluminum (always +3, so no Roman numeral needed). NO3^- = nitrate. Name: aluminum nitrate.</p>'},

  {id:'p27',difficulty:'easy',type:'concept',tag:'Polyatomic Ions',
   q:'What is the difference between nitrate and nitrite?',
   choices:['Nitrate has more oxygen atoms','Nitrate has fewer oxygen atoms','They have different charges','They contain different elements'],correct:0,
   solution:'<p>Nitrate = NO3^- (3 oxygens, –ate suffix). Nitrite = NO2^- (2 oxygens, –ite suffix). The –ate ion always has more oxygens than the –ite ion for the same element.</p>'},

  /* ========== CONCEPT — Molecular Compounds ========== */
  {id:'p28',difficulty:'easy',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for CO2?',
   choices:['carbon dioxide','carbon monoxide','dioxocarbon','carbon(IV) oxide'],correct:0,
   solution:'<p>CO2 is molecular (nonmetal + nonmetal). C = carbon (1 atom, skip "mono" for first element). O = 2 atoms = di- + oxide = dioxide. Name: carbon dioxide.</p>'},

  {id:'p29',difficulty:'easy',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for CO?',
   choices:['carbon monoxide','carbon oxide','monocarbon oxide','carbon(II) oxide'],correct:0,
   solution:'<p>CO is molecular. C = 1 (skip mono for first). O = 1 atom = monoxide (keep mono for second element). Name: carbon monoxide.</p>'},

  {id:'p30',difficulty:'medium',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for N2O4?',
   choices:['dinitrogen tetroxide','nitrogen tetroxide','dinitrogen tetraoxide','nitrogen dioxide'],correct:0,
   solution:'<p>N2O4 is molecular. N = 2 = di-. O = 4 = tetra-. "Tetra-" + "oxide" → drop the trailing "a" from "tetra" → "tetroxide." Name: dinitrogen tetroxide.</p>'},

  {id:'p31',difficulty:'easy',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for SF6?',
   choices:['sulfur hexafluoride','sulfur(VI) fluoride','hexafluorosulfur','disulfur hexafluoride'],correct:0,
   solution:'<p>S = 1 (skip mono). F = 6 = hexa-. Fluorine → fluoride. Name: sulfur hexafluoride.</p>'},

  {id:'p32',difficulty:'easy',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for PCl3?',
   choices:['phosphorus trichloride','phosphorus(III) chloride','triphosphorus chloride','phosphorus chloride'],correct:0,
   solution:'<p>P = 1 (skip mono). Cl = 3 = tri-. Chlorine → chloride. Name: phosphorus trichloride. No Roman numeral — it is a molecular, not ionic, compound.</p>'},

  {id:'p33',difficulty:'easy',type:'concept',tag:'Molecular Naming',
   q:'Which compound is named using prefixes?',
   choices:['SO2','NaCl','CaO','FeCl2'],correct:0,
   solution:'<p>SO2 is molecular (S and O are both nonmetals) → use prefixes → sulfur dioxide. NaCl, CaO, FeCl2 are ionic (they contain metals) → no prefixes.</p>'},

  {id:'p34',difficulty:'easy',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for NO2?',
   choices:['nitrogen dioxide','dinitrogen oxide','nitrogen(IV) oxide','nitrogen monoxide'],correct:0,
   solution:'<p>N = 1 (skip mono for first element). O = 2 = di-. Name: nitrogen dioxide.</p>'},

  {id:'p35',difficulty:'medium',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for N2O?',
   choices:['dinitrogen monoxide','nitrogen oxide','dinitrogen oxide','nitrogen monoxide'],correct:0,
   solution:'<p>N = 2 = di-. O = 1 = mono- (always use prefix for second element even when it is 1). Name: dinitrogen monoxide (also known as nitrous oxide, laughing gas).</p>'},

  {id:'p36',difficulty:'easy',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for SO3?',
   choices:['sulfur trioxide','sulfur(VI) oxide','disulfur trioxide','sulfuric trioxide'],correct:0,
   solution:'<p>S = 1 (skip mono). O = 3 = tri-. Name: sulfur trioxide.</p>'},

  {id:'p37',difficulty:'medium',type:'concept',tag:'Molecular Naming',
   q:'A student writes "diphosphorus pentoxide" for P2O5. Which part of this name is NOT correct?',
   choices:['Nothing — it is correct','The prefix "di" should be dropped','The prefix "penta" should be "hexa"','Phosphorus should have a Roman numeral'],correct:0,
   solution:'<p>P2O5: P = 2 = di-, O = 5 = penta-. The name "diphosphorus pentoxide" is actually correct! Phosphorus is a nonmetal so we use prefixes, not Roman numerals. This is also sometimes written as P4O10 (tetraphosphorus decoxide) when written as two P2O5 units.</p>'},

  /* ========== CONCEPT — Binary Acids ========== */
  {id:'p38',difficulty:'easy',type:'concept',tag:'Binary Acids',
   q:'What is the correct name for HCl dissolved in water?',
   choices:['hydrochloric acid','chloric acid','hydrogen chloride','hydrochlorine acid'],correct:0,
   solution:'<p>HCl (aq) is a binary acid: H + Cl, no oxygen. Pattern: hydro- + chlor + -ic acid = hydrochloric acid.</p>'},

  {id:'p39',difficulty:'easy',type:'concept',tag:'Binary Acids',
   q:'What is the correct name for HBr (aq)?',
   choices:['hydrobromic acid','hydrogen bromide','bromic acid','hydrobromine acid'],correct:0,
   solution:'<p>HBr (aq) is a binary acid. Pattern: hydro- + brom + -ic acid = hydrobromic acid.</p>'},

  {id:'p40',difficulty:'easy',type:'concept',tag:'Binary Acids',
   q:'What is the correct name for HF (aq)?',
   choices:['hydrofluoric acid','fluoric acid','hydrogen fluoride','hydrofloric acid'],correct:0,
   solution:'<p>HF (aq) is a binary acid. Pattern: hydro- + fluor + -ic acid = hydrofluoric acid.</p>'},

  {id:'p41',difficulty:'easy',type:'concept',tag:'Binary Acids',
   q:'Which formula matches "hydroiodic acid"?',
   choices:['HI','HIO3','HIO','H2I'],correct:0,
   solution:'<p>Hydro- = no oxygen. Iod- = iodine. -ic acid. So the compound contains H and I only → HI. HIO3 is iodic acid (an oxyacid).</p>'},

  {id:'p42',difficulty:'easy',type:'concept',tag:'Binary Acids',
   q:'What prefix do ALL binary acids share?',
   choices:['hydro-','hypo-','per-','bi-'],correct:0,
   solution:'<p>All binary acids (H + one nonmetal, no oxygen) begin with "hydro-." This distinguishes them from oxyacids which do NOT use "hydro-."</p>'},

  /* ========== CONCEPT — Oxyacids ========== */
  {id:'p43',difficulty:'easy',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for HNO3?',
   choices:['nitric acid','nitrous acid','hydronitric acid','nitrogen acid'],correct:0,
   solution:'<p>HNO3 contains oxygen → oxyacid. Ion inside: NO3^- = nitrate (ends in –ate). –ate → –ic acid. Root: nitr. Name: nitric acid.</p>'},

  {id:'p44',difficulty:'easy',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for HNO2?',
   choices:['nitrous acid','nitric acid','hydronitrous acid','nitrite acid'],correct:0,
   solution:'<p>HNO2 is an oxyacid. Ion inside: NO2^- = nitrite (ends in –ite). –ite → –ous acid. Name: nitrous acid.</p>'},

  {id:'p45',difficulty:'easy',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for H2SO4?',
   choices:['sulfuric acid','sulfurous acid','hydrosulfuric acid','sulfate acid'],correct:0,
   solution:'<p>H2SO4 is an oxyacid. Ion inside: SO4^2- = sulfate (–ate). –ate → –ic acid. Root: sulfur. Name: sulfuric acid.</p>'},

  {id:'p46',difficulty:'easy',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for H2SO3?',
   choices:['sulfurous acid','sulfuric acid','hydrosulfurous acid','sulfite acid'],correct:0,
   solution:'<p>H2SO3 is an oxyacid. Ion inside: SO3^2- = sulfite (–ite). –ite → –ous acid. Name: sulfurous acid.</p>'},

  {id:'p47',difficulty:'easy',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for H2CO3?',
   choices:['carbonic acid','carborous acid','hydrocarbonic acid','carbon acid'],correct:0,
   solution:'<p>H2CO3 is an oxyacid. Ion inside: CO3^2- = carbonate (–ate). –ate → –ic acid. Name: carbonic acid.</p>'},

  {id:'p48',difficulty:'easy',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for H3PO4?',
   choices:['phosphoric acid','phosphorous acid','hydrophosphoric acid','phosphate acid'],correct:0,
   solution:'<p>H3PO4 is an oxyacid. Ion inside: PO4^3- = phosphate (–ate). –ate → –ic acid. Name: phosphoric acid.</p>'},

  {id:'p49',difficulty:'easy',type:'concept',tag:'Oxyacids',
   q:'If an acid ends in "-ous acid," the polyatomic ion inside ends in:',
   choices:['-ite','-ate','-ide','-ic'],correct:0,
   solution:'<p>The pattern: –ate ion → –ic acid; –ite ion → –ous acid. So an "-ous acid" always contains an "-ite" ion.</p>'},

  {id:'p50',difficulty:'medium',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for HClO4?',
   choices:['perchloric acid','chloric acid','hypochlorous acid','perchlorous acid'],correct:0,
   solution:'<p>HClO4 is an oxyacid. Ion inside: ClO4^- = perchlorate (–ate). –ate → –ic acid. Name: perchloric acid.</p>'},

  {id:'p51',difficulty:'medium',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for HClO?',
   choices:['hypochlorous acid','chlorous acid','hydrochlorous acid','chloric acid'],correct:0,
   solution:'<p>HClO is an oxyacid. Ion inside: ClO^- = hypochlorite (–ite). –ite → –ous acid. Name: hypochlorous acid. Note: it contains oxygen, so no "hydro-" prefix.</p>'},

  /* ========== CONCEPT — Identifying Compound Type ========== */
  {id:'p52',difficulty:'easy',type:'concept',tag:'Compound Types',
   q:'Which compound is molecular (not ionic)?',
   choices:['SO2','NaCl','CaCl2','KBr'],correct:0,
   solution:'<p>SO2 has two nonmetals (S and O) — molecular. NaCl, CaCl2, and KBr all contain a metal + nonmetal — ionic.</p>'},

  {id:'p53',difficulty:'easy',type:'concept',tag:'Compound Types',
   q:'Which rule applies to ionic compounds but NOT molecular ones?',
   choices:['No prefixes needed','Prefixes like di- and tri- are required','The name ends with -ic acid','The compound starts with hydrogen'],correct:0,
   solution:'<p>Ionic compounds never use prefixes like di-, tri-, etc. The subscripts in ionic formulas are determined by ion charges, not by choice. Molecular compounds do use prefixes.</p>'},

  {id:'p54',difficulty:'easy',type:'concept',tag:'Compound Types',
   q:'A compound has the formula HCl dissolved in water. What type of compound is it?',
   choices:['A binary acid','An oxyacid','An ionic compound','A molecular compound'],correct:0,
   solution:'<p>HCl (aq) starts with H, has no oxygen, and contains one other element (Cl). This fits the definition of a binary acid. Its name is hydrochloric acid.</p>'},

  {id:'p55',difficulty:'easy',type:'concept',tag:'Compound Types',
   q:'Which formula represents an ionic compound containing a polyatomic ion?',
   choices:['Ca(NO3)2','CaCl2','CO2','HCl'],correct:0,
   solution:'<p>Ca(NO3)2 contains Ca^2+ (metal cation) and NO3^- (nitrate, a polyatomic ion). CaCl2 is ionic but Cl^- is not polyatomic. CO2 and HCl are molecular/binary acid.</p>'},

  {id:'p56',difficulty:'easy',type:'concept',tag:'Compound Types',
   q:'Which metal always requires a Roman numeral in its compound names?',
   choices:['Iron (Fe)','Sodium (Na)','Calcium (Ca)','Aluminum (Al)'],correct:0,
   solution:'<p>Iron (Fe) is a transition metal that can be +2 or +3, so a Roman numeral is always needed. Na is always +1, Ca is always +2, and Al is always +3 — no Roman numerals for these.</p>'},

  /* ========== CONCEPT — Naming Polyatomic Ion Compounds (more) ========== */
  {id:'p57',difficulty:'medium',type:'multi',tag:'Polyatomic + Roman',
   q:'What is the correct name for Fe(NO3)2?',
   choices:['iron(II) nitrate','iron(III) nitrate','iron dinitrate','iron(II) nitrite'],correct:0,
   solution:'<p>Step 1: Identify the polyatomic ion — NO3^- = nitrate. Step 2: Find Fe charge — 2 NO3^- = -2 total → Fe must be +2. Step 3: Name → iron(II) nitrate.</p>'},

  {id:'p58',difficulty:'medium',type:'multi',tag:'Polyatomic + Roman',
   q:'What is the correct name for Fe(NO3)3?',
   choices:['iron(III) nitrate','iron(II) nitrate','iron(III) nitrite','iron trinitrate'],correct:0,
   solution:'<p>Step 1: NO3^- = nitrate. Step 2: 3 NO3^- = -3 total → Fe = +3. Step 3: iron(III) nitrate.</p>'},

  {id:'p59',difficulty:'medium',type:'multi',tag:'Polyatomic + Roman',
   q:'What is the correct name for Cu3(PO4)2?',
   choices:['copper(II) phosphate','copper(I) phosphate','tricopper diphosphate','copper(III) phosphate'],correct:0,
   solution:'<p>Step 1: PO4^3- = phosphate. Step 2: 2 × (-3) = -6 total. 3 Cu = +6 total → each Cu = +2. Step 3: copper(II) phosphate.</p>'},

  {id:'p60',difficulty:'medium',type:'multi',tag:'Polyatomic + Roman',
   q:'What is the correct name for Pb(NO3)2?',
   choices:['lead(II) nitrate','lead(IV) nitrate','lead nitrate','lead dinitrate'],correct:0,
   solution:'<p>Step 1: NO3^- = nitrate. Step 2: 2 × (-1) = -2 total → Pb = +2. Step 3: lead(II) nitrate. Pb has variable charge → Roman numeral required.</p>'},

  /* ========== CONCEPT — More Molecular ========== */
  {id:'p61',difficulty:'easy',type:'multi',tag:'Molecular Naming',
   q:'What is the correct name for CCl4?',
   choices:['carbon tetrachloride','carbon(IV) chloride','monocarbon tetrachloride','tetrachlorocarbon'],correct:0,
   solution:'<p>C = 1 (skip mono for first element). Cl = 4 = tetra-. Chlorine → chloride. Name: carbon tetrachloride (used as a solvent).</p>'},

  {id:'p62',difficulty:'medium',type:'multi',tag:'Molecular Naming',
   q:'What is the correct name for P4O10?',
   choices:['tetraphosphorus decoxide','tetraphosphorus decaoxide','phosphorus oxide','diphosphorus pentoxide'],correct:0,
   solution:'<p>P = 4 = tetra-. O = 10 = deca-. "Deca-" + "oxide" → drop trailing "a" → "decoxide." Name: tetraphosphorus decoxide.</p>'},

  {id:'p63',difficulty:'medium',type:'multi',tag:'Molecular Naming',
   q:'What is the correct name for Cl2O7?',
   choices:['dichlorine heptoxide','chlorine heptoxide','chlorine(VII) oxide','dichlorine septoxide'],correct:0,
   solution:'<p>Cl = 2 = di-. O = 7 = hepta-. Name: dichlorine heptoxide.</p>'},

  /* ========== CALC — Charge determination ========== */
  {id:'p64',difficulty:'easy',type:'calc',tag:'Metal Charge',
   q:'In the compound MnO2, oxygen has a -2 charge. What is the charge on the manganese (Mn) ion? Enter just the number with its sign (e.g., +2).',
   answer:'+4', isText:true,
   solution:'<p>2 O^2- = -4 total. Mn must be +4 to balance. The compound is manganese(IV) oxide.</p>'},

  {id:'p65',difficulty:'easy',type:'calc',tag:'Metal Charge',
   q:'In CrCl3, chloride (Cl^-) has a -1 charge. What is the charge on the chromium (Cr) ion? Enter with sign (e.g., +3).',
   answer:'+3', isText:true,
   solution:'<p>3 Cl^- = -3 total. Cr must be +3. The compound is chromium(III) chloride.</p>'},

  {id:'p66',difficulty:'easy',type:'calc',tag:'Metal Charge',
   q:'In PbO, what is the charge on the lead (Pb) ion? Enter with sign (e.g., +2).',
   answer:'+2', isText:true,
   solution:'<p>1 O^2- = -2 total. Pb must be +2. The compound is lead(II) oxide.</p>'},

  {id:'p67',difficulty:'easy',type:'calc',tag:'Metal Charge',
   q:'In SnCl4, what is the charge on the tin (Sn) ion? Enter with sign (e.g., +4).',
   answer:'+4', isText:true,
   solution:'<p>4 Cl^- = -4 total. Sn must be +4. The compound is tin(IV) chloride.</p>'},

  {id:'p68',difficulty:'easy',type:'calc',tag:'Metal Charge',
   q:'In SnCl2, what is the charge on the tin (Sn) ion? Enter with sign (e.g., +2).',
   answer:'+2', isText:true,
   solution:'<p>2 Cl^- = -2 total. Sn must be +2. The compound is tin(II) chloride.</p>'},

  {id:'p69',difficulty:'medium',type:'calc',tag:'Metal Charge',
   q:'In Cr2(SO4)3, the sulfate ion (SO4^2-) has a -2 charge. What is the charge on each chromium ion? Enter with sign (e.g., +3).',
   answer:'+3', isText:true,
   solution:'<p>3 SO4^2- = -6 total. 2 Cr atoms supply +6 total. +6 ÷ 2 = +3 per Cr. The compound is chromium(III) sulfate.</p>'},

  {id:'p70',difficulty:'medium',type:'calc',tag:'Metal Charge',
   q:'In Cu3(PO4)2, the phosphate ion (PO4^3-) has a -3 charge. What is the charge on each copper ion? Enter with sign (e.g., +2).',
   answer:'+2', isText:true,
   solution:'<p>2 PO4^3- = -6 total. 3 Cu supply +6 total. +6 ÷ 3 = +2 per Cu. The compound is copper(II) phosphate.</p>'},

  {id:'p71',difficulty:'medium',type:'calc',tag:'Metal Charge',
   q:'In Fe2(SO4)3, the sulfate ion (SO4^2-) has a -2 charge. What is the charge on each iron ion? Enter with sign (e.g., +3).',
   answer:'+3', isText:true,
   solution:'<p>3 SO4^2- = -6 total. 2 Fe supply +6 total. +6 ÷ 2 = +3. The compound is iron(III) sulfate.</p>'},

  {id:'p72',difficulty:'easy',type:'calc',tag:'Metal Charge',
   q:'In NiCl2, what is the charge on the nickel (Ni) ion? Enter with sign.',
   answer:'+2', isText:true,
   solution:'<p>2 Cl^- = -2 total. Ni must be +2. The compound is nickel(II) chloride.</p>'},

  {id:'p73',difficulty:'easy',type:'calc',tag:'Metal Charge',
   q:'In CoO, what is the charge on the cobalt (Co) ion? Enter with sign.',
   answer:'+2', isText:true,
   solution:'<p>1 O^2- = -2 total. Co must be +2. The compound is cobalt(II) oxide.</p>'},

  {id:'p74',difficulty:'medium',type:'calc',tag:'Metal Charge',
   q:'In Co2O3, what is the charge on each cobalt (Co) ion? Enter with sign.',
   answer:'+3', isText:true,
   solution:'<p>3 O^2- = -6 total. 2 Co supply +6 total. +6 ÷ 2 = +3. The compound is cobalt(III) oxide.</p>'},

  {id:'p75',difficulty:'easy',type:'calc',tag:'Metal Charge',
   q:'In MnO, what is the charge on the manganese (Mn) ion? Enter with sign.',
   answer:'+2', isText:true,
   solution:'<p>1 O^2- = -2 total. Mn must be +2. The compound is manganese(II) oxide.</p>'},

  /* ========== MULTI-STEP ========== */
  {id:'p76',difficulty:'medium',type:'multi',tag:'Name → Formula',
   q:'Which formula correctly represents "iron(III) sulfate"?',
   choices:['Fe2(SO4)3','Fe3(SO4)2','Fe(SO4)3','Fe2SO4'],correct:0,
   solution:'<p>Iron(III) = Fe^3+. Sulfate = SO4^2-. To balance: need charges equal to zero. Fe^3+ × 2 = +6 total. SO4^2- × 3 = -6 total. Formula: Fe2(SO4)3.</p>'},

  {id:'p77',difficulty:'easy',type:'multi',tag:'Name → Formula',
   q:'Which formula correctly represents "copper(I) sulfide"?',
   choices:['Cu2S','CuS','Cu2S2','CuS2'],correct:0,
   solution:'<p>Copper(I) = Cu^+. Sulfide = S^2-. 2 Cu^+ = +2 total. 1 S^2- = -2 total. Formula: Cu2S.</p>'},

  {id:'p78',difficulty:'easy',type:'multi',tag:'Name → Formula',
   q:'Which formula correctly represents "ammonium carbonate"?',
   choices:['(NH4)2CO3','NH4CO3','(NH4)3CO3','NH4(CO3)2'],correct:0,
   solution:'<p>Ammonium = NH4^+ (+1). Carbonate = CO3^2- (-2). 2 NH4^+ = +2. 1 CO3^2- = -2. Formula: (NH4)2CO3.</p>'},

  {id:'p79',difficulty:'medium',type:'multi',tag:'Name → Formula',
   q:'Which formula correctly represents "calcium phosphate"?',
   choices:['Ca3(PO4)2','Ca2(PO4)3','CaPO4','Ca3PO4'],correct:0,
   solution:'<p>Ca^2+ (+2). PO4^3- (-3). 3 Ca^2+ = +6. 2 PO4^3- = -6. Formula: Ca3(PO4)2.</p>'},

  {id:'p80',difficulty:'medium',type:'multi',tag:'Full Naming',
   q:'A compound has the formula Pb(NO3)2. Which of the following is the correct systematic name?',
   choices:['lead(II) nitrate','lead(IV) dinitrate','dilead nitrate','lead nitrate(II)'],correct:0,
   solution:'<p>NO3^- = nitrate. 2 NO3^- = -2 total. Pb = +2. Roman numeral II goes right after metal name in parentheses. Correct format: lead(II) nitrate.</p>'},

  {id:'p81',difficulty:'medium',type:'multi',tag:'Full Naming',
   q:'A compound contains Mn^3+ and oxygen (O^2-). What is its formula and name?',
   choices:['Mn2O3 — manganese(III) oxide','MnO3 — manganese(VI) oxide','Mn3O2 — manganese(II) oxide','MnO — manganese(III) oxide'],correct:0,
   solution:'<p>Mn^3+ × 2 = +6 total. O^2- × 3 = -6 total. Formula: Mn2O3. Metal with variable charge → Roman numeral III → manganese(III) oxide.</p>'},

  /* ========== EXPANSION BATCH — 60 problems (20 easy / 25 medium / 15 hard) ========== */

  /* ── EASY (20) ── */
  {id:'p82',difficulty:'easy',type:'concept',tag:'Ionic Naming',q:'What is the correct name for LiBr?',choices:['lithium bromide','lithium(I) bromide','dilithium bromide','lithium monobromide'],correct:0,solution:'<p>LiBr is ionic. Li is lithium (always +1). Br becomes bromide. No prefix, no Roman numeral. Name: lithium bromide.</p>'},
  {id:'p83',difficulty:'easy',type:'concept',tag:'Ionic Naming',q:'What is the correct name for BaCl2?',choices:['barium chloride','barium(II) chloride','barium dichloride','dibarium chloride'],correct:0,solution:'<p>BaCl2 is ionic. Ba is barium (always +2). Cl becomes chloride. No prefix, no Roman numeral needed. Name: barium chloride.</p>'},
  {id:'p84',difficulty:'easy',type:'concept',tag:'Ionic Naming',q:'What is the correct name for Al2S3?',choices:['aluminum sulfide','aluminum(III) sulfide','dialuminum trisulfide','aluminum disulfide'],correct:0,solution:'<p>Al2S3 is ionic. Al is aluminum (always +3). S becomes sulfide. No prefix or Roman numeral for ionic compounds. Name: aluminum sulfide.</p>'},
  {id:'p85',difficulty:'easy',type:'concept',tag:'Ionic Naming',q:'What is the correct name for MgS?',choices:['magnesium sulfide','magnesium(II) sulfide','magnesium monosulfide','dimagnesium sulfide'],correct:0,solution:'<p>MgS is ionic. Mg is magnesium (always +2). S becomes sulfide. Name: magnesium sulfide.</p>'},
  {id:'p86',difficulty:'easy',type:'concept',tag:'Name → Formula',q:'Which formula matches the name "calcium bromide"?',choices:['CaBr2','CaBr','Ca2Br','CaBr3'],correct:0,solution:'<p>Calcium is Ca^2+; bromide is Br^-. Cross-multiply the charges: 1 Ca to 2 Br → <strong>CaBr2</strong>.</p>'},
  {id:'p87',difficulty:'easy',type:'concept',tag:'Name → Formula',q:'Which formula matches the name "potassium nitride"?',choices:['K3N','KN','KN3','K2N3'],correct:0,solution:'<p>Potassium is K^+; nitride is N^3-. Cross-multiply: 3 K to 1 N → <strong>K3N</strong>.</p>'},
  {id:'p88',difficulty:'easy',type:'concept',tag:'Polyatomic Ions',q:'What is the name for the ClO3^- ion?',choices:['chlorate','chlorite','perchlorate','hypochlorite'],correct:0,solution:'<p>ClO3^- is chlorate. Compare: ClO2^- is chlorite (fewer oxygens), ClO4^- is perchlorate (more oxygens), ClO^- is hypochlorite (fewest oxygens).</p>'},
  {id:'p89',difficulty:'easy',type:'concept',tag:'Polyatomic Ions',q:'What is the name for the C2H3O2^- ion?',choices:['acetate','carbonate','cyanide','chlorate'],correct:0,solution:'<p>C2H3O2^- is the acetate ion, found in vinegar (acetic acid, HC2H3O2) and many metal-acetate salts.</p>'},
  {id:'p90',difficulty:'easy',type:'concept',tag:'Polyatomic Ions',q:'What is the name for the CN^- ion?',choices:['cyanide','cyanate','nitride','carbide'],correct:0,solution:'<p>CN^- is the cyanide ion — a highly toxic polyatomic ion made of one carbon and one nitrogen.</p>'},
  {id:'p91',difficulty:'easy',type:'concept',tag:'Polyatomic Ions',q:'What is the correct name for KC2H3O2?',choices:['potassium acetate','potassium carbonate','potassium cyanide','dipotassium acetate'],correct:0,solution:'<p>K^+ = potassium. C2H3O2^- = acetate. K always has +1 charge, so no Roman numeral. Name: potassium acetate.</p>'},
  {id:'p92',difficulty:'easy',type:'concept',tag:'Polyatomic Ions',q:'What is the correct name for NH4OH?',choices:['ammonium hydroxide','ammonia hydroxide','nitrogen hydroxide','ammonium(I) hydroxide'],correct:0,solution:'<p>NH4^+ = ammonium. OH^- = hydroxide. Both are polyatomic ions with fixed charges. Name: ammonium hydroxide.</p>'},
  {id:'p93',difficulty:'easy',type:'concept',tag:'Molecular Naming',q:'Which prefix means 7 in molecular compound naming?',choices:['hepta-','hexa-','octa-','nona-'],correct:0,solution:'<p><strong>Hepta-</strong> means 7. The full sequence is mono-(1), di-(2), tri-(3), tetra-(4), penta-(5), hexa-(6), hepta-(7), octa-(8), nona-(9), deca-(10).</p>'},
  {id:'p94',difficulty:'easy',type:'concept',tag:'Molecular Naming',q:'Which prefix means 9 in molecular compound naming?',choices:['nona-','deca-','octa-','hepta-'],correct:0,solution:'<p><strong>Nona-</strong> means 9. Deca- means 10, octa- means 8, and hepta- means 7.</p>'},
  {id:'p95',difficulty:'easy',type:'concept',tag:'Molecular Naming',q:'What is the correct name for SiO2?',choices:['silicon dioxide','silicon(IV) oxide','monosilicon dioxide','disilicon oxide'],correct:0,solution:'<p>Si = 1 (skip mono for the first element). O = 2 = di-. Name: silicon dioxide — the compound in ordinary sand and quartz.</p>'},
  {id:'p96',difficulty:'easy',type:'concept',tag:'Molecular Naming',q:'What is the correct name for OF2?',choices:['oxygen difluoride','dioxygen fluoride','oxygen(II) fluoride','monooxygen difluoride'],correct:0,solution:'<p>O = 1 (skip mono for first element). F = 2 = di-. Fluorine → fluoride. Name: oxygen difluoride.</p>'},
  {id:'p97',difficulty:'easy',type:'concept',tag:'Binary Acids',q:'What is the correct name for HI dissolved in water?',choices:['hydroiodic acid','iodic acid','hydrogen iodide','iodous acid'],correct:0,solution:'<p>HI (aq) is a binary acid (H + one nonmetal, no oxygen). Pattern: hydro- + iod + -ic acid = hydroiodic acid.</p>'},
  {id:'p98',difficulty:'easy',type:'concept',tag:'Binary Acids',q:'What is the correct name for H2S dissolved in water?',choices:['hydrosulfuric acid','sulfuric acid','hydrogen sulfide','sulfurous acid'],correct:0,solution:'<p>H2S (aq) is a binary acid — no oxygen present. Pattern: hydro- + sulfur + -ic acid = hydrosulfuric acid. (Note: sulfuric acid, H2SO4, is a completely different oxyacid.)</p>'},
  {id:'p99',difficulty:'easy',type:'concept',tag:'Compound Types',q:'Which of the following is a polyatomic ion, not a simple monatomic ion?',choices:['SO4^2-','Cl^-','Na^+','O^2-'],correct:0,solution:'<p>SO4^2- (sulfate) is a polyatomic ion — made of more than one type of atom bonded together with an overall charge. Cl^-, Na^+, and O^2- are all simple, single-atom (monatomic) ions.</p>'},
  {id:'p100',difficulty:'easy',type:'concept',tag:'Ionic Naming',q:'What is the correct name for ZnCl2? (Zinc has only one common charge, +2.)',choices:['zinc chloride','zinc(II) chloride','zinc dichloride','dizinc chloride'],correct:0,solution:'<p>Even though zinc is a transition-block metal, it only ever forms a +2 ion in compounds, so by convention no Roman numeral is used. Name: zinc chloride.</p>'},
  {id:'p101',difficulty:'easy',type:'concept',tag:'Ionic Naming',q:'What is the correct name for AgNO3? (Silver has only one common charge, +1.)',choices:['silver nitrate','silver(I) nitrate','disilver nitrate','silver nitrite'],correct:0,solution:'<p>Silver almost always forms a +1 ion, so by convention no Roman numeral is used. NO3^- = nitrate. Name: silver nitrate.</p>'},

  /* ── MEDIUM (25) ── */
  {id:'p102',difficulty:'medium',type:'concept',tag:'Roman Numerals',q:'What is the correct name for CrCl2?',choices:['chromium(II) chloride','chromium(III) chloride','chromium chloride','dichromium chloride'],correct:0,solution:'<p>2 Cl^- = -2 total. Cr must be +2. Roman numeral II. Name: chromium(II) chloride.</p>'},
  {id:'p103',difficulty:'medium',type:'concept',tag:'Roman Numerals',q:'What is the correct name for CrCl3?',choices:['chromium(III) chloride','chromium(II) chloride','chromium trichloride','trichromium chloride'],correct:0,solution:'<p>3 Cl^- = -3 total. Cr must be +3. Roman numeral III. Name: chromium(III) chloride. Do not use "tri-" for ionic compounds.</p>'},
  {id:'p104',difficulty:'medium',type:'concept',tag:'Roman Numerals',q:'What is the correct name for MnO2?',choices:['manganese(IV) oxide','manganese(II) oxide','manganese dioxide','dimanganese oxide'],correct:0,solution:'<p>2 O^2- = -4 total. Mn must be +4. Roman numeral IV. Name: manganese(IV) oxide.</p>'},
  {id:'p105',difficulty:'medium',type:'concept',tag:'Roman Numerals',q:'What is the correct name for SnO2?',choices:['tin(IV) oxide','tin(II) oxide','tin dioxide','ditin oxide'],correct:0,solution:'<p>2 O^2- = -4 total. Sn must be +4. Roman numeral IV. Name: tin(IV) oxide.</p>'},
  {id:'p106',difficulty:'medium',type:'concept',tag:'Roman Numerals',q:'What is the correct name for CoCl3?',choices:['cobalt(III) chloride','cobalt(II) chloride','cobalt trichloride','tricobalt chloride'],correct:0,solution:'<p>3 Cl^- = -3 total. Co must be +3. Roman numeral III. Name: cobalt(III) chloride.</p>'},
  {id:'p107',difficulty:'medium',type:'concept',tag:'Roman Numerals',q:'What is the correct name for Cu(NO3)2?',choices:['copper(II) nitrate','copper(I) nitrate','dicopper nitrate','copper dinitrate'],correct:0,solution:'<p>2 NO3^- = -2 total. Cu must be +2. Roman numeral II. Name: copper(II) nitrate.</p>'},
  {id:'p108',difficulty:'medium',type:'concept',tag:'Roman Numerals',q:'What is the correct name for FeSO4?',choices:['iron(II) sulfate','iron(III) sulfate','iron sulfate','diiron sulfate'],correct:0,solution:'<p>1 SO4^2- = -2 total. Fe must be +2. Roman numeral II. Name: iron(II) sulfate.</p>'},
  {id:'p109',difficulty:'medium',type:'concept',tag:'Roman Numerals',q:'What is the correct name for Fe2(SO4)3?',choices:['iron(III) sulfate','iron(II) sulfate','diiron trisulfate','iron sulfate'],correct:0,solution:'<p>3 SO4^2- = -6 total. 2 Fe must supply +6, so each is +3. Roman numeral III. Name: iron(III) sulfate.</p>'},
  {id:'p110',difficulty:'medium',type:'concept',tag:'Polyatomic Ions',q:'What is the name for the CrO4^2- ion?',choices:['chromate','dichromate','chromite','chlorate'],correct:0,solution:'<p>CrO4^2- is chromate. Cr2O7^2- (a related but distinct ion) is dichromate.</p>'},
  {id:'p111',difficulty:'medium',type:'concept',tag:'Polyatomic Ions',q:'What is the name for the Cr2O7^2- ion?',choices:['dichromate','chromate','chromite','perchromate'],correct:0,solution:'<p>Cr2O7^2- is dichromate — a distinct polyatomic ion from chromate (CrO4^2-), well known for its bright orange color.</p>'},
  {id:'p112',difficulty:'medium',type:'concept',tag:'Polyatomic Ions',q:'What is the name for the MnO4^- ion?',choices:['permanganate','manganate','manganite','dimanganate'],correct:0,solution:'<p>MnO4^- is permanganate, a strong oxidizer known for its deep purple color in compounds like KMnO4.</p>'},
  {id:'p113',difficulty:'medium',type:'concept',tag:'Name → Formula',q:'Which formula matches "iron(II) hydroxide"?',choices:['Fe(OH)2','FeOH2','Fe2OH','Fe(OH)3'],correct:0,solution:'<p>Fe^2+ and OH^- (-1 each). 2 OH^- balance 1 Fe^2+. Formula: Fe(OH)2.</p>'},
  {id:'p114',difficulty:'medium',type:'concept',tag:'Name → Formula',q:'Which formula matches "tin(IV) oxide"?',choices:['SnO2','SnO','Sn2O','Sn2O4'],correct:0,solution:'<p>Sn^4+ and O^2-. Cross-multiply charges (4 and 2), reducing to 1:2. Formula: SnO2.</p>'},
  {id:'p115',difficulty:'medium',type:'concept',tag:'Molecular Naming',q:'What is the correct name for N2O5?',choices:['dinitrogen pentoxide','nitrogen pentoxide','dinitrogen pentaoxide','nitrogen(V) oxide'],correct:0,solution:'<p>N = 2 = di-. O = 5 = penta-. "Penta-" + "oxide" drops the trailing "a" → "pentoxide." Name: dinitrogen pentoxide.</p>'},
  {id:'p116',difficulty:'medium',type:'concept',tag:'Molecular Naming',q:'What is the correct name for XeF4?',choices:['xenon tetrafluoride','xenon(IV) fluoride','tetraxenon fluoride','xenon tetrafluorine'],correct:0,solution:'<p>Xe = 1 (skip mono). F = 4 = tetra-. Fluorine → fluoride. Name: xenon tetrafluoride — a real, stable noble gas compound.</p>'},
  {id:'p117',difficulty:'medium',type:'concept',tag:'Oxyacids',q:'What is the correct name for HClO2?',choices:['chlorous acid','chloric acid','hypochlorous acid','perchloric acid'],correct:0,solution:'<p>HClO2 is an oxyacid. Ion inside: ClO2^- = chlorite (-ite). -ite → -ous acid. Name: chlorous acid.</p>'},
  {id:'p118',difficulty:'medium',type:'concept',tag:'Oxyacids',q:'What is the correct name for HClO3?',choices:['chloric acid','chlorous acid','perchloric acid','hypochlorous acid'],correct:0,solution:'<p>HClO3 is an oxyacid. Ion inside: ClO3^- = chlorate (-ate). -ate → -ic acid. Name: chloric acid.</p>'},
  {id:'p119',difficulty:'medium',type:'concept',tag:'Oxyacids',q:'Of the four chlorine oxyacids — HClO, HClO2, HClO3, HClO4 — which has the FEWEST oxygen atoms?',choices:['HClO (hypochlorous acid)','HClO2 (chlorous acid)','HClO3 (chloric acid)','HClO4 (perchloric acid)'],correct:0,solution:'<p>HClO (hypochlorous acid) has only 1 oxygen — the fewest of the four. The family increases: hypochlorous (1 O) < chlorous (2 O) < chloric (3 O) < perchloric (4 O).</p>'},
  {id:'p120',difficulty:'medium',type:'concept',tag:'Name → Formula',q:'Which formula matches "aluminum sulfate"?',choices:['Al2(SO4)3','Al3(SO4)2','AlSO4','Al(SO4)3'],correct:0,solution:'<p>Al^3+ and SO4^2-. Cross-multiply charges (3 and 2), reducing to 2:3. Formula: Al2(SO4)3.</p>'},
  {id:'p121',difficulty:'medium',type:'concept',tag:'Name → Formula',q:'Which formula matches "magnesium phosphate"?',choices:['Mg3(PO4)2','Mg2(PO4)3','MgPO4','Mg3PO4'],correct:0,solution:'<p>Mg^2+ and PO4^3-. Cross-multiply charges (2 and 3), reducing to 3:2. Formula: Mg3(PO4)2.</p>'},
  {id:'p122',difficulty:'medium',type:'concept',tag:'Hydrates',q:'What is the correct name for CuSO4·5H2O?',choices:['copper(II) sulfate pentahydrate','copper sulfate water','pentacopper sulfate hydrate','copper(II) sulfate(V) hydrate'],correct:0,solution:'<p>CuSO4 is copper(II) sulfate (Cu must be +2 to balance SO4^2-). The "·5H2O" indicates 5 water molecules attached in the crystal — named with the prefix "penta-" plus "hydrate." Name: copper(II) sulfate pentahydrate.</p>'},
  {id:'p123',difficulty:'medium',type:'concept',tag:'Name → Formula',q:'Which formula matches "nickel(III) oxide"?',choices:['Ni2O3','NiO3','Ni3O2','NiO'],correct:0,solution:'<p>Ni^3+ and O^2-. Cross-multiply charges (3 and 2), reducing to 2:3. Formula: Ni2O3.</p>'},
  {id:'p124',difficulty:'medium',type:'concept',tag:'Oxyacids',q:'Which oxyacid corresponds to the perchlorate ion, ClO4^-?',choices:['HClO4, perchloric acid','HClO3, chloric acid','HClO2, chlorous acid','HClO, hypochlorous acid'],correct:0,solution:'<p>Perchlorate (ClO4^-, -ate) becomes perchloric acid (-ic acid) when combined with H^+. The full formula is HClO4.</p>'},
  {id:'p125',difficulty:'medium',type:'concept',tag:'Polyatomic Ions',q:'What is the correct name for Ba(ClO3)2?',choices:['barium chlorate','barium chloride','barium perchlorate','barium(II) chlorate'],correct:0,solution:'<p>Ba^2+ (always +2, no Roman numeral) and ClO3^- = chlorate. 2 chlorate ions balance 1 Ba^2+. Name: barium chlorate.</p>'},
  {id:'p126',difficulty:'medium',type:'concept',tag:'Name → Formula',q:'Which formula matches "chromium(III) oxide"?',choices:['Cr2O3','CrO3','Cr3O2','CrO2'],correct:0,solution:'<p>Cr^3+ and O^2-. Cross-multiply charges (3 and 2), reducing to 2:3. Formula: Cr2O3 — the green pigment chromium oxide.</p>'},

  /* ── HARD (15) ── */
  {id:'p127',difficulty:'hard',type:'multi',tag:'Complex Naming',q:'A compound has the formula Cu2Cr2O7. Determine the copper charge and the correct name.',choices:['Copper is +1 (since Cr2O7^2- is -2 total and there are 2 Cu); name is copper(I) dichromate','Copper is +2; name is copper(II) dichromate','Copper is +1; name is copper(I) chromate','Copper is +2; name is copper(II) chromate'],correct:0,solution:'<p>Dichromate (Cr2O7^2-) carries a -2 charge. With 2 copper ions balancing this -2, each Cu must be +1. Name: <strong>copper(I) dichromate</strong>.</p>'},
  {id:'p128',difficulty:'hard',type:'multi',tag:'Complex Naming',q:'A student names Fe2(Cr2O7)3 as "iron(II) dichromate." Identify the error and give the correct name.',choices:['The charge is wrong — 3 dichromate ions (each -2) total -6, so 2 Fe must total +6, meaning each Fe is +3; correct name is iron(III) dichromate','The name is already correct','The formula should be Fe(Cr2O7)2','Dichromate should be called chromate'],correct:0,solution:'<p>3 × (-2) = -6 total negative charge. To balance, 2 Fe ions must total +6, so each Fe is +3, not +2. Correct name: <strong>iron(III) dichromate</strong>.</p>'},
  {id:'p129',difficulty:'hard',type:'concept',tag:'Oxyacids',q:'Which of the following correctly distinguishes chlorate (ClO3^-) from chlorite (ClO2^-) AND correctly names the acid formed from each?',choices:['Chlorate has one more oxygen than chlorite; HClO3 is chloric acid and HClO2 is chlorous acid','Chlorate and chlorite have the same number of oxygens; both form the same acid','Chlorate has one FEWER oxygen than chlorite','Chlorite forms perchloric acid'],correct:0,solution:'<p>Chlorate (ClO3^-, 3 O) has one more oxygen than chlorite (ClO2^-, 2 O). Following the -ate → -ic and -ite → -ous pattern: HClO3 is chloric acid, HClO2 is chlorous acid.</p>'},
  {id:'p130',difficulty:'hard',type:'multi',tag:'Name → Formula',q:'Barium (fixed +2 charge) combines with the chromate ion (CrO4^2-) in a 1:1 ratio since the charges already balance. What is the correct formula and name?',choices:['BaCrO4 — barium chromate','Ba2CrO4 — dibarium chromate','BaCr2O4 — barium dichromate','Ba(CrO4)2 — barium bischromate'],correct:0,solution:'<p>Ba^2+ and CrO4^2- have equal-magnitude opposite charges, so they combine 1:1 with no cross-multiplication needed. Formula: BaCrO4 — barium chromate.</p>'},
  {id:'p131',difficulty:'hard',type:'concept',tag:'Formula Writing',q:'Which of the following pairs of ions requires parentheses around the polyatomic ion in its resulting formula?',choices:['Ca^2+ and OH^- (forms Ca(OH)2, since more than one hydroxide ion is needed)','Na^+ and Cl^- (forms NaCl, a simple 1:1 ratio)','K^+ and NO3^- (forms KNO3, a simple 1:1 ratio)','Ag^+ and OH^- (forms AgOH, a simple 1:1 ratio)'],correct:0,solution:'<p>Parentheses around a polyatomic ion are only needed when MORE THAN ONE of that ion is present in the formula. Ca(OH)2 needs 2 hydroxide ions (charge +2 balancing 2×-1), so parentheses are required. The other three examples are all 1:1 ratios needing no parentheses.</p>'},
  {id:'p132',difficulty:'hard',type:'multi',tag:'Complex Naming',q:'A compound has the formula M2(SO4)3, where M is chromium. What is the correct name?',choices:['Chromium(III) sulfate — each Cr must be +3 to make 2×(+3)=+6, balancing 3×(-2)=-6 from sulfate','Chromium(II) sulfate','Chromium(VI) sulfate','Dichromium trisulfate'],correct:0,solution:'<p>3 sulfate ions contribute -6 total charge. To balance, 2 chromium ions must total +6, so each Cr is individually +3. Name: chromium(III) sulfate (ionic compounds never use prefixes like "di-" or "tri-").</p>'},
  {id:'p133',difficulty:'hard',type:'multi',tag:'Complex Naming',q:'Name the compound (NH4)2Cr2O7 (used in the classic "volcano" demonstration), identifying both polyatomic ions.',choices:['NH4^+ (ammonium, +1) and Cr2O7^2- (dichromate, -2); 2 ammonium ions balance 1 dichromate ion, giving (NH4)2Cr2O7','NH4^+ and CrO4^2-; the name should be ammonium chromate','NH3^+ and Cr2O7^2-; the cation is amide, not ammonium','The formula should be NH4(Cr2O7)2'],correct:0,solution:'<p>Ammonium (NH4^+, +1) and dichromate (Cr2O7^2-, -2) combine in a 2:1 ratio to balance charge: 2×(+1) = +2 balances 1×(-2). Name: ammonium dichromate.</p>'},
  {id:'p134',difficulty:'hard',type:'concept',tag:'Compound Types',q:'A student claims that "iron(II) oxide" and "iron(III) oxide" must be the same compound since both only contain iron and oxygen. Evaluate this claim.',choices:['The claim is false — they are different compounds with different formulas (FeO vs Fe2O3) and different iron-to-oxygen ratios, resulting from iron\'s two different possible charges','The claim is true — both formulas are identical','The claim is true because oxide is always O^2- regardless of charge','The claim is false because iron(III) oxide contains no oxygen'],correct:0,solution:'<p>Iron(II) oxide is FeO (Fe^2+ balancing one O^2-). Iron(III) oxide is Fe2O3 (2 Fe^3+ balancing 3 O^2-). These are genuinely different compounds with different formulas, ratios, and properties — the Roman numeral is essential information, not decoration.</p>'},
  {id:'p135',difficulty:'hard',type:'multi',tag:'Formula Writing',q:'Which of the following formulas is INCORRECTLY balanced for its stated name?',choices:['"Aluminum oxide" written as AlO (should be Al2O3, since Al^3+ and O^2- need a 2:3 ratio to balance charges)','"Calcium chloride" written as CaCl2','"Sodium phosphate" written as Na3PO4','"Magnesium nitride" written as Mg3N2'],correct:0,solution:'<p>AlO would only balance if Al and O had equal-magnitude charges, but Al is +3 and O is -2. Cross-multiplying gives Al2O3, not AlO. The other three formulas are all correctly balanced.</p>'},
  {id:'p136',difficulty:'hard',type:'multi',tag:'Molecular Naming',q:'Which is the correctly named molecular compound for the formula N2O3?',choices:['Dinitrogen trioxide — the "di-" prefix is required for the first element whenever there is more than 1 atom of it','Nitrogen trioxide — prefixes are never used on the first element','Both names are equally correct for N2O3','Nitrogen(III) oxide — Roman numerals are used since nitrogen is a nonmetal with variable charge'],correct:0,solution:'<p>The rule to skip "mono-" applies ONLY when there is exactly 1 atom of the first element. Since N2O3 has 2 nitrogen atoms, the "di-" prefix is required: dinitrogen trioxide.</p>'},
  {id:'p137',difficulty:'hard',type:'multi',tag:'Name → Formula',q:'Lead in the +2 oxidation state combines with the phosphate ion. Determine the correct formula.',choices:['Pb3(PO4)2 — 3 Pb^2+ (+6 total) balances 2 PO4^3- (-6 total)','Pb2(PO4)3 — reversed ratio','PbPO4 — assumes a simple 1:1 ratio','Pb3PO4 — missing parentheses around the polyatomic ion'],correct:0,solution:'<p>Pb^2+ and PO4^3- cross-multiply to a 3:2 ratio: 3 Pb^2+ (+6 total) balances 2 PO4^3- (-6 total). Formula: Pb3(PO4)2.</p>'},
  {id:'p138',difficulty:'hard',type:'concept',tag:'Formula Writing',q:'Why does the formula for aluminum sulfate, Al2(SO4)3, require BOTH a subscript of 2 on aluminum AND parentheses with a subscript of 3 around the sulfate group?',choices:['Al^3+ and SO4^2- have charges that don\'t divide evenly into each other, so cross-multiplying the charges (3 and 2) gives the smallest whole-number ratio 2:3, and parentheses are needed because more than one polyatomic ion is present','The subscripts are arbitrary and could be written in any ratio','Only the aluminum needs a subscript; sulfate should not be in parentheses','The charges of Al and SO4 happen to be equal, requiring no cross-multiplication'],correct:0,solution:'<p>3 and 2 share no common factor greater than 1, so cross-multiplying the charges is required to find the smallest whole-number ratio: 2 Al to 3 SO4. Since 3 sulfate ions are needed, parentheses group the polyatomic ion before applying that subscript.</p>'},
  {id:'p139',difficulty:'hard',type:'multi',tag:'Complex Naming',q:'A compound is confirmed to contain a 2:3 ratio of Fe to O, with no other elements. Using charge-balancing logic, determine iron\'s charge and name the compound.',choices:['3 O^2- = -6 total; 2 Fe must total +6, so each Fe is +3; the compound is iron(III) oxide','2 Fe must total -6; each Fe is -3, and the compound is iron oxide with no name possible','3 O^2- = -6 requires only 1 Fe at +6; the ratio given must be wrong','Iron always has a fixed +2 charge regardless of the oxygen ratio'],correct:0,solution:'<p>With 3 oxide ions contributing -6 total, the 2 iron ions must together supply +6, meaning each is individually +3. The compound is iron(III) oxide, Fe2O3.</p>'},
  {id:'p140',difficulty:'hard',type:'concept',tag:'Oxyacids',q:'Compare "potassium chlorate" (KClO3) and "potassium perchlorate" (KClO4). What is the key structural difference?',choices:['Perchlorate has one more oxygen atom than chlorate (4 vs 3), making the perchlorate ion more oxidized','Chlorate and perchlorate are the same ion with different names','Perchlorate has one FEWER oxygen than chlorate','The two ions have different central atoms'],correct:0,solution:'<p>Chlorate (ClO3^-) has 3 oxygens; perchlorate (ClO4^-) has 4. The "per-" prefix specifically signals one MORE oxygen than the "-ate" form, making perchlorate the most oxygen-rich member of the chlorine oxyacid family.</p>'},
  {id:'p141',difficulty:'hard',type:'multi',tag:'Formula Writing',q:'A compound is confirmed by analysis to contain the ratio 2 M : 3 O for an unknown metal M, and separately, its charge-per-ion is determined to be +3. Which statement correctly summarizes the charge-balancing logic used to arrive at this ratio?',choices:['3 O^2- ions supply -6 total charge; to balance, 2 M^3+ ions are needed since 2 × (+3) = +6','2 O^2- ions supply -4 total charge, requiring only 1 M^4+ ion','The ratio 2:3 was chosen arbitrarily and does not depend on charge','M must have a -3 charge to match the ratio'],correct:0,solution:'<p>The 2:3 ratio directly reflects charge-balancing: 3 oxide ions (-2 each) total -6, requiring 2 metal ions to together supply +6 — meaning each metal ion is individually +3.</p>'},

  /* ========== HARD EXPANSION BATCH — 30 additional hard problems ========== */
  {id:'p142',difficulty:'hard',type:'multi',tag:'Complex Naming',q:'Name Mn2(SO4)3.',choices:['manganese(III) sulfate — 3 SO4^2- = -6 total, 2 Mn = +6 total, each Mn = +3','manganese(II) sulfate','dimanganese trisulfate','manganese(VI) sulfate'],correct:0,solution:'<p>3 sulfate ions total -6 charge. 2 manganese ions must supply +6, so each is +3. Name: manganese(III) sulfate.</p>'},
  {id:'p143',difficulty:'hard',type:'multi',tag:'Complex Naming',q:'Name Co2(CO3)3.',choices:['cobalt(III) carbonate — 3 CO3^2- = -6 total, 2 Co = +6 total, each Co = +3','cobalt(II) carbonate','dicobalt tricarbonate','cobalt(VI) carbonate'],correct:0,solution:'<p>3 carbonate ions total -6 charge. 2 cobalt ions must supply +6, so each is +3. Name: cobalt(III) carbonate.</p>'},
  {id:'p144',difficulty:'hard',type:'concept',tag:'Roman Numerals',q:'A student names both PbO2 and PbO as "lead oxide." What is wrong with this, and what should each be called?',choices:['Both need Roman numerals since Pb has variable charge — PbO2 is lead(IV) oxide and PbO is lead(II) oxide','Nothing is wrong; both are correctly named "lead oxide"','PbO2 should be "lead dioxide" using prefixes since lead is a metal','Only PbO needs a Roman numeral'],correct:0,solution:'<p>Lead can be +2 or +4, so both formulas need a Roman numeral to distinguish them. PbO2 (2 O^2- = -4, so Pb = +4) is lead(IV) oxide. PbO (1 O^2- = -2, so Pb = +2) is lead(II) oxide.</p>'},
  {id:'p145',difficulty:'hard',type:'multi',tag:'Complex Naming',q:'Determine the correct name for Sn(SO4)2.',choices:['tin(IV) sulfate — 2 SO4^2- = -4 total, so Sn = +4','tin(II) sulfate','ditin sulfate','tin sulfate(IV)'],correct:0,solution:'<p>2 sulfate ions total -4 charge. A single tin ion must be +4 to balance. Name: tin(IV) sulfate.</p>'},
  {id:'p146',difficulty:'hard',type:'multi',tag:'Complex Naming',q:'Determine the correct name for Ni3(PO4)2.',choices:['nickel(II) phosphate — 2 PO4^3- = -6 total, 3 Ni = +6 total, each Ni = +2','nickel(III) phosphate','trinickel diphosphate','nickel(VI) phosphate'],correct:0,solution:'<p>2 phosphate ions total -6 charge. 3 nickel ions must supply +6, so each is +2. Name: nickel(II) phosphate.</p>'},
  {id:'p147',difficulty:'hard',type:'multi',tag:'Name → Formula',q:'Determine the correct formula for "chromium(VI) oxide."',choices:['CrO3 — Cr^6+ and O^2-; cross-multiplying 6 and 2 reduces to a 1:3 ratio','Cr6O2','Cr2O6','CrO6'],correct:0,solution:'<p>Cr^6+ and O^2- cross-multiply: LCM(6,2)=6, giving Cr: 6/6=1 and O: 6/2=3. Formula: CrO3.</p>'},
  {id:'p148',difficulty:'hard',type:'concept',tag:'Polyatomic Ions',q:'Explain why "sulfate" (SO4^2-) and "sulfite" (SO3^2-) have DIFFERENT structures from "sulfide" (S^2-), even though all three contain sulfur.',choices:['Sulfide is a simple monatomic ion (just S^2-), while sulfate and sulfite are polyatomic ions combining sulfur with oxygen; the -ide, -ate, and -ite suffixes signal fundamentally different ion structures, not just different charges','All three ions are identical in structure and only differ by naming convention','Sulfate and sulfite are isotopes of sulfide','The charges shown are typos and all three should be -2'],correct:0,solution:'<p>The suffix tells you the ion\'s composition: -ide means a simple, single-element ion (sulfide, S^2-); -ate and -ite mean polyatomic ions containing oxygen (sulfate, SO4^2-; sulfite, SO3^2-). These are fundamentally different chemical species, not just different names for the same thing.</p>'},
  {id:'p149',difficulty:'hard',type:'multi',tag:'Complex Naming',q:'Name Cu(ClO3)2.',choices:['copper(II) chlorate — 2 ClO3^- = -2 total, so Cu = +2','copper(I) chlorate','dicopper chlorate','copper chlorate(II)'],correct:0,solution:'<p>2 chlorate ions total -2 charge. A single copper ion must be +2 to balance. Name: copper(II) chlorate.</p>'},
  {id:'p150',difficulty:'hard',type:'multi',tag:'Complex Naming',q:'A compound has the formula Fe(C2H3O2)3. Determine the iron charge and correct name.',choices:['+3; iron(III) acetate — 3 acetate ions (each -1) total -3, so Fe must be +3','+1; iron(I) acetate','+3; iron(III) acetatide','+1; iron acetate(I)'],correct:0,solution:'<p>3 acetate ions (C2H3O2^-, each -1) total -3 charge. Iron must be +3 to balance. Name: iron(III) acetate.</p>'},
  {id:'p151',difficulty:'hard',type:'concept',tag:'Roman Numerals',q:'Why is "sodium(I) chloride" considered an INCORRECT (though not charge-wrong) name for NaCl?',choices:['Roman numerals are only required for metals with MORE THAN ONE possible charge; since Na is always +1, including "(I)" is redundant and non-standard','Sodium never has a +1 charge, so the name is factually wrong','NaCl should use prefixes instead, like "monosodium chloride"','Chloride should be written as "chlorine" in this name'],correct:0,solution:'<p>Roman numerals exist specifically to resolve ambiguity for metals with variable charge. Since sodium only ever forms Na^+, adding "(I)" provides no new information and is nonstandard, even though it isn\'t technically false.</p>'},
  {id:'p152',difficulty:'hard',type:'multi',tag:'Complex Naming',q:'Name (NH4)3PO4.',choices:['ammonium phosphate — 3 NH4^+ (each +1) balances 1 PO4^3-','ammonium phosphate(III)','triammonium phosphate','ammonium triphosphate'],correct:0,solution:'<p>3 ammonium ions (each +1) total +3, balancing 1 phosphate ion (-3). Since this is an ionic compound, no numerical prefixes are used in the name: ammonium phosphate.</p>'},
  {id:'p153',difficulty:'hard',type:'multi',tag:'Complex Naming',q:'Name Al(C2H3O2)3.',choices:['aluminum acetate — Al^3+ balances 3 acetate ions (C2H3O2^-, each -1)','aluminum(III) acetate — Roman numeral needed since acetate is polyatomic','trialuminum acetate','aluminum triacetate(III)'],correct:0,solution:'<p>Al^3+ balances 3 acetate ions (each -1). Since aluminum only has one common charge (+3), no Roman numeral is needed: aluminum acetate.</p>'},
  {id:'p154',difficulty:'hard',type:'concept',tag:'Roman Numerals',q:'Why is "aluminum(III) chloride" considered nonstandard, even though aluminum does have a +3 charge in AlCl3?',choices:['Aluminum has only ONE common charge (+3), so by convention Roman numerals are omitted — they are reserved for metals with variable/ambiguous charge, like transition metals and Pb, Sn, Bi','Aluminum never actually has a +3 charge','"III" is the wrong Roman numeral; it should be "I"','Chloride compounds never use Roman numerals'],correct:0,solution:'<p>Roman numerals communicate which of several possible charges a metal has adopted. Since aluminum forms only +3 in virtually all its compounds, there is no ambiguity to resolve, so the Roman numeral is conventionally omitted.</p>'},
  {id:'p155',difficulty:'hard',type:'multi',tag:'Name → Formula',q:'Determine the formula for "manganese(VII) oxide," the highest common oxidation state of manganese.',choices:['Mn2O7 — Mn^7+ and O^2-; cross-multiplying 7 and 2 gives a 2:7 ratio','MnO7','Mn7O2','MnO4 (this is permanganate\'s formula, not manganese(VII) oxide)'],correct:0,solution:'<p>Mn^7+ and O^2- cross-multiply: LCM(7,2)=14, giving Mn: 14/7=2 and O: 14/2=7. Formula: Mn2O7.</p>'},
  {id:'p156',difficulty:'hard',type:'multi',tag:'Hydrates',q:'A hydrate has the formula CoCl2·6H2O. Name this compound completely, including the hydrate prefix.',choices:['cobalt(II) chloride hexahydrate — Co must be +2 to balance 2 Cl^-, and "hexa-" indicates 6 water molecules','cobalt(VI) chloride hexahydrate','cobalt chloride water','dicobalt chloride hexahydrate'],correct:0,solution:'<p>2 Cl^- total -2 charge, so Co must be +2. The "·6H2O" is named with the prefix "hexa-" plus "hydrate": cobalt(II) chloride hexahydrate.</p>'},
  {id:'p157',difficulty:'hard',type:'concept',tag:'Polyatomic Ions',q:'What is the difference between "phosphate" (PO4^3-) and "phosphite" (PO3^3-)?',choices:['Phosphate has one more oxygen than phosphite (4 vs 3), following the same -ate/-ite oxygen-count pattern as sulfate/sulfite and nitrate/nitrite, even though BOTH happen to carry the same -3 charge','Phosphate and phosphite have different charges, not different oxygen counts','Phosphite has more oxygens than phosphate','The two names refer to the exact same ion'],correct:0,solution:'<p>Phosphate (4 O) has one more oxygen than phosphite (3 O), matching the general -ate/-ite pattern. Unusually, both ions happen to carry the same -3 charge, unlike sulfate/sulfite (both -2) or nitrate/nitrite (both -1) — the oxygen-count difference, not the charge, is what distinguishes them.</p>'},
  {id:'p158',difficulty:'hard',type:'multi',tag:'Complex Naming',q:'Name Ba(MnO4)2.',choices:['barium permanganate — MnO4^- (permanganate, -1) × 2 balances Ba^2+','barium manganate','barium permanganate(II)','dibarium permanganate'],correct:0,solution:'<p>2 permanganate ions (each -1) total -2, balancing Ba^2+. Ba always has a fixed +2 charge, so no Roman numeral. Name: barium permanganate.</p>'},
  {id:'p159',difficulty:'hard',type:'multi',tag:'Name → Formula',q:'Determine the correct formula for "chromium(II) hydroxide."',choices:['Cr(OH)2 — Cr^2+ balances 2 OH^-','CrOH2','Cr2OH','Cr(OH)2(II)'],correct:0,solution:'<p>Cr^2+ requires 2 OH^- ions (each -1) to balance. Formula: Cr(OH)2, with parentheses since more than one hydroxide is present.</p>'},
  {id:'p160',difficulty:'hard',type:'concept',tag:'Polyatomic Ions',q:'A student sees the formula K2Cr2O7 and assumes "Cr2O7" must mean 2 separate chromate ions bonded together. Correct this misconception.',choices:['Cr2O7^2- (dichromate) is actually a single polyatomic ion with its own distinct structure and -2 charge — it is NOT simply "2 chromate ions" combined, even though the name and formula might suggest that','The student is correct; dichromate is exactly 2 chromate ions stuck together with no change in charge','Dichromate has a -4 charge since it contains 2 chromiums','K2Cr2O7 is actually 2 separate formula units of KCrO4'],correct:0,solution:'<p>Dichromate is its own distinct polyatomic ion (Cr2O7^2-) with a single overall -2 charge, not simply two chromate ions (2 × CrO4^2- would be -4) stuck together. Its structure and charge must be memorized separately from chromate.</p>'},
  {id:'p161',difficulty:'hard',type:'multi',tag:'Complex Naming',q:'Name Sn3(PO4)4.',choices:['tin(IV) phosphate — 4 PO4^3- = -12 total, 3 Sn = +12 total, each Sn = +4','tin(III) phosphate','tin(II) phosphate','tritin tetraphosphate'],correct:0,solution:'<p>4 phosphate ions total -12 charge. 3 tin ions must supply +12, so each is +4. Name: tin(IV) phosphate.</p>'},
  {id:'p162',difficulty:'hard',type:'concept',tag:'Oxyacids',q:'Rank these acids from FEWEST oxygens to MOST oxygens, based on the chlorine oxyacid naming convention.',choices:['Hypochlorous acid < chlorous acid < chloric acid < perchloric acid','Perchloric acid < chloric acid < chlorous acid < hypochlorous acid','Chloric acid < hypochlorous acid < perchloric acid < chlorous acid','All four have the same number of oxygens'],correct:0,solution:'<p>Hypochlorous (1 O) < chlorous (2 O) < chloric (3 O) < perchloric (4 O). The prefixes hypo- and per- extend the -ous/-ic pattern to the fewest and most oxygen-rich members of the family.</p>'},
  {id:'p163',difficulty:'hard',type:'multi',tag:'Complex Naming',q:'Name Cu2SO4.',choices:['copper(I) sulfate — 1 SO4^2- = -2 total, 2 Cu = +2 total, each Cu = +1','copper(II) sulfate','dicopper sulfate','copper sulfate(I)'],correct:0,solution:'<p>1 sulfate ion contributes -2 charge. 2 copper ions must together supply +2, so each is individually +1. Name: copper(I) sulfate.</p>'},
  {id:'p164',difficulty:'hard',type:'concept',tag:'Roman Numerals',q:'Explain why the Roman numeral in a name like "manganese(IV) oxide" refers to the charge on a SINGLE manganese ion, not the total charge of all manganese in the formula.',choices:['By convention, the Roman numeral always represents the charge per individual ion of that element, which is why Fe2O3 is "iron(III) oxide" (each Fe is +3) and not "iron(VI) oxide" (which would incorrectly suggest the total +6 charge)','The Roman numeral represents the total charge of all atoms of that element combined','The Roman numeral represents the number of oxygen atoms','The Roman numeral is chosen arbitrarily by convention with no charge meaning'],correct:0,solution:'<p>The Roman numeral always states the per-ion charge, regardless of how many of that ion appear in the formula. This is why Fe2O3 (total Fe charge = +6, but 2 atoms) is correctly named iron(III) oxide, not iron(VI) oxide.</p>'},
  {id:'p165',difficulty:'hard',type:'multi',tag:'Name → Formula',q:'Determine the formula for "iron(II) dichromate."',choices:['FeCr2O7 — Fe^2+ balances Cr2O7^2- in a 1:1 ratio','Fe2(Cr2O7)','FeCr2O7(II)','Fe(Cr2O7)2'],correct:0,solution:'<p>Fe^2+ and Cr2O7^2- have equal-magnitude opposite charges, combining in a simple 1:1 ratio with no cross-multiplication needed. Formula: FeCr2O7.</p>'},
  {id:'p166',difficulty:'hard',type:'concept',tag:'Polyatomic Ions',q:'A compound is named "ammonium sulfate," (NH4)2SO4. Explain why TWO ammonium ions are needed.',choices:['Ammonium (NH4^+) is +1 and sulfate (SO4^2-) is -2; two +1 charges are needed to balance one -2 charge','Ammonium is -2 and needs to balance a +1 sulfate','Only one ammonium is actually needed; the formula (NH4)2SO4 is written incorrectly','Ammonium and sulfate always combine in a 1:1 ratio regardless of charge'],correct:0,solution:'<p>Ammonium is +1 and sulfate is -2. To balance overall charge to zero, two ammonium ions (2 × +1 = +2) are needed for every one sulfate ion (-2).</p>'},
  {id:'p167',difficulty:'hard',type:'multi',tag:'Complex Naming',q:'Name Pb3(PO4)4.',choices:['lead(IV) phosphate — 4 PO4^3- = -12 total, 3 Pb = +12 total, each Pb = +4','lead(II) phosphate','lead(III) phosphate','tripblead tetraphosphate'],correct:0,solution:'<p>4 phosphate ions total -12 charge. 3 lead ions must supply +12, so each is +4. Name: lead(IV) phosphate.</p>'},
  {id:'p168',difficulty:'hard',type:'concept',tag:'Compound Types',q:'Compare the formulas for "sulfur dioxide" (SO2, molecular naming with prefixes) and "iron(II) oxide" (FeO, ionic naming with Roman numerals). Why do these two similar-looking oxide compounds use completely different naming systems?',choices:['SO2 is molecular (two nonmetals), so prefixes indicate the exact atom ratio; FeO is ionic (metal + nonmetal), so the Roman numeral indicates the metal\'s charge instead, since ionic ratios come from charge-balancing, not free choice','Both should use the same naming system; this is an error in chemistry nomenclature','Prefixes and Roman numerals mean the same thing and are interchangeable','FeO is actually molecular, not ionic'],correct:0,solution:'<p>Whether a compound is molecular (two nonmetals, ratio described with prefixes) or ionic (metal + nonmetal, ratio determined by charge-balancing) is what dictates which naming system applies — not how the formula happens to look.</p>'},
  {id:'p169',difficulty:'hard',type:'concept',tag:'Molecular Naming',q:'A compound has the formula (NH4)2Cr2O7 but a student mistakenly writes its name as "diammonium dichromate," adding a prefix to ammonium. Explain the error.',choices:['Ionic compounds (including polyatomic ion compounds like this one) never use numerical prefixes like "di-"; the subscript of 2 on ammonium is already implied by charge-balancing and doesn\'t need to be stated in the name','The name is correct as written','"diammonium" should instead be "triammonium"','Only the dichromate portion should have a prefix, not ammonium'],correct:0,solution:'<p>Prefixes like "di-" are reserved for molecular (covalent) compound naming. Ionic compounds — even ones containing polyatomic ions — never use them; the subscript ratio is understood from charge-balancing alone. The correct name is simply "ammonium dichromate."</p>'},
  {id:'p170',difficulty:'hard',type:'multi',tag:'Name → Formula',q:'Determine the correct formula for "titanium(IV) oxide" (the compound in white paint pigment and sunscreen).',choices:['TiO2 — Ti^4+ and O^2-; cross-multiplying 4 and 2 reduces to 1:2','TiO4','Ti2O4','Ti4O2'],correct:0,solution:'<p>Ti^4+ and O^2- cross-multiply: LCM(4,2)=4, giving Ti: 4/4=1 and O: 4/2=2. Formula: TiO2.</p>'},
  {id:'p171',difficulty:'hard',type:'concept',tag:'Molecular Naming',q:'A textbook shows N2O5 (dinitrogen pentoxide, molecular naming) and Mn2O5 (manganese(V) oxide, ionic naming), both with the same subscript pattern. Why are they named so differently?',choices:['Nitrogen and oxygen are both nonmetals (molecular compound → prefixes), while manganese is a metal and oxygen is a nonmetal (ionic compound → Roman numeral for the variable-charge metal); identical subscripts don\'t mean identical bonding type','Both should be named with prefixes since they have the same formula pattern','Both should be named with Roman numerals','Manganese is actually a nonmetal, so this is an error'],correct:0,solution:'<p>The naming system depends on what KIND of elements are bonded (metal+nonmetal = ionic vs. nonmetal+nonmetal = molecular), not on the numerical subscript pattern. N2O5 and Mn2O5 happen to share the same subscripts by coincidence, but represent fundamentally different types of bonding.</p>'},
  {id:'p172',difficulty:'hard',type:'calc',tag:'Metal Charge',q:'In Mn2O7, oxygen has a -2 charge. What is the charge on each manganese ion? Enter with sign (e.g., +7).',answer:'+7',isText:true,solution:'<p>7 O^2- = -14 total. 2 Mn must together supply +14, so each is individually +7. The compound is manganese(VII) oxide.</p>'},
  {id:'p173',difficulty:'hard',type:'calc',tag:'Metal Charge',q:'In Pb3(PO4)4, the phosphate ion (PO4^3-) has a -3 charge. What is the charge on each lead ion? Enter with sign (e.g., +4).',answer:'+4',isText:true,solution:'<p>4 PO4^3- = -12 total. 3 Pb must together supply +12, so each is individually +4. The compound is lead(IV) phosphate.</p>'},
  {id:'p174',difficulty:'hard',type:'calc',tag:'Metal Charge',q:'In Co3(PO4)2, the phosphate ion (PO4^3-) has a -3 charge. What is the charge on each cobalt ion? Enter with sign (e.g., +2).',answer:'+2',isText:true,solution:'<p>2 PO4^3- = -6 total. 3 Co must together supply +6, so each is individually +2. The compound is cobalt(II) phosphate.</p>'}

]; // end ALL_PROBLEMS — 174 problems total (81 original + 60 added + 33 hard expansion)
