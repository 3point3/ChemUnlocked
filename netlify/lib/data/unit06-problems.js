/* ── Unit 06 Problem Bank — Nomenclature
   81 problems total: 12 calc | 56 concept | 13 multi
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  /* ========== CONCEPT — Binary Ionic (simple metals) ========== */
  {id:'p01',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for NaCl?',
   choices:['sodium chloride','sodium chlorine','sodium(I) chloride','monosodium chloride'],correct:0,
  solution:'<p>NaCl is ionic because it contains a metal and a nonmetal.</p><p>Name the metal first: sodium. Then change the nonmetal ending to <em>-ide</em>: chloride.</p><p>Sodium always forms +1, so no Roman numeral is needed.</p>'},

  {id:'p02',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for K2O?',
   choices:['potassium oxide','dipotassium oxide','potassium(II) oxide','potassium oxygen'],correct:0,
   solution:'<p>K2O is ionic. K is potassium (always +1). O becomes oxide. Do not use prefixes ("di-") for ionic compounds. No Roman numeral since K has only one charge.</p><p>Name: <strong>potassium oxide</strong>.</p>'},

  {id:'p03',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for MgBr2?',
   choices:['magnesium bromide','dimagnesium bromide','magnesium(II) bromide','magnesium dibromide'],correct:0,
   solution:'<p>MgBr2 is ionic. Mg is magnesium (always +2). Br becomes bromide. Write: magnesium bromide. No prefix needed because it is ionic. Mg always has a +2 charge, so no Roman numeral.</p>'},

  {id:'p04',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for CaF2?',
   choices:['calcium fluoride','calcium difluoride','calcium(II) fluoride','dicalcium fluoride'],correct:0,
   solution:'<p>CaF2 is ionic. Ca is calcium (always +2). F becomes fluoride. Write: calcium fluoride. Subscripts in ionic formulas come from charges — never use prefixes for ionic compounds.</p>'},

  {id:'p05',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for Al2O3?',
   choices:['aluminum oxide','dialuminum trioxide','aluminum(III) oxide','trialuminum dioxide'],correct:0,
   solution:'<p>Al2O3 is ionic. Al is aluminum (always +3). O becomes oxide. Write: aluminum oxide. Al has only one common charge (+3), so no Roman numeral. Do not use "di-" or "tri-" prefixes for ionic compounds.</p>'},

  {id:'p06',type:'concept',tag:'Ionic Naming',
   q:'Which formula matches the name "sodium sulfide"?',
   choices:['Na2S','NaS','NaS2','Na2S2'],correct:0,
   solution:'<p>Sodium sulfide: Na^+ and S^2-. To balance: 2 Na^+ and 1 S^2- → Na2S. The subscripts come from swapping the charges (cross-multiply method): 1 from Na, 2 from S → <strong>Na2S</strong>.</p>'},

  {id:'p07',type:'concept',tag:'Ionic Naming',
   q:'What is the correct name for Li3N?',
   choices:['lithium nitride','trilithium nitrogen','lithium(I) nitride','lithium nitrogen'],correct:0,
   solution:'<p>Li3N is ionic. Li is lithium (always +1). N becomes nitride (N^3-). Write: lithium nitride. Li has only one charge, so no Roman numeral. Do not use "tri-" prefix.</p>'},

  {id:'p08',type:'concept',tag:'Ionic Naming',
   q:'What is the BEST name for the ionic compound formed between barium (Ba^2+) and oxygen (O^2-)?',
   choices:['barium oxide','barium monoxide','barium(II) oxide','dibarium monoxide'],correct:0,
   solution:'<p>BaO is ionic (metal + nonmetal), so use ionic naming rules: metal name first, then nonmetal with <em>-ide</em>.</p><p>The best name is <strong>barium oxide</strong>. Prefixes like mono-/di- are not used for ionic compounds, and barium has a fixed +2 charge so a Roman numeral is not required.</p>'},

  /* ========== CONCEPT — Transition Metals / Roman Numerals ========== */
  {id:'p09',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for FeCl2?',
   choices:['iron(II) chloride','iron(III) chloride','iron chloride','ferrous dichloride'],correct:0,
  solution:'<p>Iron is a transition metal, so you must determine its charge.</p><p>Each Cl^- is -1, and there are 2 chloride ions for a total of -2.</p><p>That means Fe must be +2 to balance the compound, so the correct name is <strong>iron(II) chloride</strong>.</p>'},

  {id:'p10',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for FeCl3?',
   choices:['iron(III) chloride','iron(II) chloride','iron chloride','iron trichloride'],correct:0,
   solution:'<p>Cl^- × 3 = -3 total. Iron must be +3. Roman numeral III. Name: iron(III) chloride. Do not use "tri-" for ionic compounds.</p>'},

  {id:'p11',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for CuO?',
   choices:['copper(II) oxide','copper(I) oxide','copper oxide','cupric monooxide'],correct:0,
  solution:'<p>Oxide is O^2-, so the negative charge in the compound is -2 total.</p><p>To make the compound neutral, copper must be +2.</p><p>Because copper can have more than one charge, include the Roman numeral: <strong>copper(II) oxide</strong>.</p>'},

  {id:'p12',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for Cu2O?',
   choices:['copper(I) oxide','copper(II) oxide','dicopper oxide','copper monooxide'],correct:0,
   solution:'<p>O^2- = -2 total. 2 copper atoms share +2 total → each Cu = +1. Roman numeral I. Name: copper(I) oxide.</p>'},

  {id:'p13',type:'concept',tag:'Roman Numerals',
   q:'Which compound requires a Roman numeral in its name?',
   choices:['FeCl2','NaCl','MgO','CaS'],correct:0,
  solution:'<p>Iron is a transition metal, and transition metals often have more than one possible ion charge.</p><p>That is why iron compounds need a Roman numeral to show which charge is present, such as iron(II) or iron(III).</p><p>Elements like Na, Mg, and Ca have only one common charge, so they do not need Roman numerals.</p>'},

  {id:'p14',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for FeO?',
   choices:['iron(II) oxide','iron(III) oxide','iron oxide','ferrous monoxide'],correct:0,
   solution:'<p>O^2- = -2 total. 1 Fe balances this with +2. Roman numeral II. Name: iron(II) oxide.</p>'},

  {id:'p15',type:'concept',tag:'Roman Numerals',
   q:'What is the correct name for Fe2O3?',
   choices:['iron(III) oxide','iron(II) oxide','diiron trioxide','iron oxide'],correct:0,
   solution:'<p>3 O^2- = -6 total. 2 Fe must supply +6 total. +6 ÷ 2 = +3 each. Roman numeral III. Name: iron(III) oxide.</p>'},

  {id:'p16',type:'concept',tag:'Roman Numerals',
   q:'Which is the correct name for PbO2?',
   choices:['lead(IV) oxide','lead(II) oxide','lead dioxide','lead(II) dioxide'],correct:0,
   solution:'<p>2 O^2- = -4 total. 1 Pb = +4. Roman numeral IV. Name: lead(IV) oxide. Do not use prefixes in ionic naming.</p>'},

  /* ========== CONCEPT — Polyatomic Ions ========== */
  {id:'p17',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for Ca(OH)2?',
   choices:['calcium hydroxide','calcium(II) hydroxide','dicalcium hydroxide','calcium dihydroxide'],correct:0,
   solution:'<p>Ca^2+ and OH^- (hydroxide). Ca is always +2, so no Roman numeral. Use the polyatomic ion name directly: hydroxide (not hydroxide-ide). Name: calcium hydroxide.</p>'},

  {id:'p18',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for NH4NO3?',
   choices:['ammonium nitrate','ammonium nitrite','nitrogen ammonium oxide','nitrogen nitrate'],correct:0,
  solution:'<p>Recognize the polyatomic ions first: NH4^+ is ammonium and NO3^- is nitrate.</p><p>When a formula uses polyatomic ions, keep their standard names instead of changing the endings.</p><p>So NH4NO3 is <strong>ammonium nitrate</strong>.</p>'},

  {id:'p19',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for Na2SO4?',
   choices:['sodium sulfate','sodium sulfite','disodium sulfate','sodium(I) sulfate'],correct:0,
   solution:'<p>Na^+ = sodium. SO4^2- = sulfate. Na always has a +1 charge, no Roman numeral needed. Name: sodium sulfate.</p>'},

  {id:'p20',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for Na2SO3?',
   choices:['sodium sulfite','sodium sulfate','sodium(I) sulfite','disodium trioxide'],correct:0,
   solution:'<p>Na^+ = sodium. SO3^2- = sulfite (fewer oxygens than sulfate, ends in –ite). Name: sodium sulfite.</p>'},

  {id:'p21',type:'concept',tag:'Polyatomic Ions',
   q:'What is the name for the NO3^- ion?',
   choices:['nitrate','nitrite','nitrogen trioxide','nitric ion'],correct:0,
   solution:'<p>NO3^- is the nitrate ion (more oxygens, ends in –ate). NO2^- would be nitrite. Memorize both.</p>'},

  {id:'p22',type:'concept',tag:'Polyatomic Ions',
   q:'What is the name for the SO4^2- ion?',
   choices:['sulfate','sulfite','persulfate','sulfuric'],correct:0,
   solution:'<p>SO4^2- is the sulfate ion. It has 4 oxygens and a 2- charge. SO3^2- (3 oxygens) would be sulfite.</p>'},

  {id:'p23',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for K3PO4?',
   choices:['potassium phosphate','potassium phosphite','tripotassium phosphate','potassium(III) phosphate'],correct:0,
   solution:'<p>K^+ = potassium. PO4^3- = phosphate. K always has +1 charge. Name: potassium phosphate. No prefix, no Roman numeral.</p>'},

  {id:'p24',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for NH4Cl?',
   choices:['ammonium chloride','nitrogen chloride','ammonium(I) chloride','nitrogen tetrachloride'],correct:0,
   solution:'<p>NH4^+ = ammonium. Cl^- = chloride (a simple nonmetal, not polyatomic). Name: ammonium chloride.</p>'},

  {id:'p25',type:'concept',tag:'Polyatomic Ions',
   q:'Which ion is called "carbonate"?',
   choices:['CO3^2-','HCO3^-','CO2','C2O4^2-'],correct:0,
   solution:'<p>CO3^2- is carbonate (3 oxygens, 2- charge). HCO3^- is hydrogen carbonate (bicarbonate). CO2 is a molecular compound, not an ion.</p>'},

  {id:'p26',type:'concept',tag:'Polyatomic Ions',
   q:'What is the correct name for Al(NO3)3?',
   choices:['aluminum nitrate','aluminum(III) nitrate','aluminum nitrite','trialuminum nitrate'],correct:0,
   solution:'<p>Al^3+ = aluminum (always +3, so no Roman numeral needed). NO3^- = nitrate. Name: aluminum nitrate.</p>'},

  {id:'p27',type:'concept',tag:'Polyatomic Ions',
   q:'What is the difference between nitrate and nitrite?',
   choices:['Nitrate has more oxygen atoms','Nitrate has fewer oxygen atoms','They have different charges','They contain different elements'],correct:0,
   solution:'<p>Nitrate = NO3^- (3 oxygens, –ate suffix). Nitrite = NO2^- (2 oxygens, –ite suffix). The –ate ion always has more oxygens than the –ite ion for the same element.</p>'},

  /* ========== CONCEPT — Molecular Compounds ========== */
  {id:'p28',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for CO2?',
   choices:['carbon dioxide','carbon monoxide','dioxocarbon','carbon(IV) oxide'],correct:0,
   solution:'<p>CO2 is molecular (nonmetal + nonmetal). C = carbon (1 atom, skip "mono" for first element). O = 2 atoms = di- + oxide = dioxide. Name: carbon dioxide.</p>'},

  {id:'p29',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for CO?',
   choices:['carbon monoxide','carbon oxide','monocarbon oxide','carbon(II) oxide'],correct:0,
   solution:'<p>CO is molecular. C = 1 (skip mono for first). O = 1 atom = monoxide (keep mono for second element). Name: carbon monoxide.</p>'},

  {id:'p30',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for N2O4?',
   choices:['dinitrogen tetroxide','nitrogen tetroxide','dinitrogen tetraoxide','nitrogen dioxide'],correct:0,
   solution:'<p>N2O4 is molecular. N = 2 = di-. O = 4 = tetra-. "Tetra-" + "oxide" → drop the trailing "a" from "tetra" → "tetroxide." Name: dinitrogen tetroxide.</p>'},

  {id:'p31',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for SF6?',
   choices:['sulfur hexafluoride','sulfur(VI) fluoride','hexafluorosulfur','disulfur hexafluoride'],correct:0,
   solution:'<p>S = 1 (skip mono). F = 6 = hexa-. Fluorine → fluoride. Name: sulfur hexafluoride.</p>'},

  {id:'p32',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for PCl3?',
   choices:['phosphorus trichloride','phosphorus(III) chloride','triphosphorus chloride','phosphorus chloride'],correct:0,
   solution:'<p>P = 1 (skip mono). Cl = 3 = tri-. Chlorine → chloride. Name: phosphorus trichloride. No Roman numeral — it is a molecular, not ionic, compound.</p>'},

  {id:'p33',type:'concept',tag:'Molecular Naming',
   q:'Which compound is named using prefixes?',
   choices:['SO2','NaCl','CaO','FeCl2'],correct:0,
   solution:'<p>SO2 is molecular (S and O are both nonmetals) → use prefixes → sulfur dioxide. NaCl, CaO, FeCl2 are ionic (they contain metals) → no prefixes.</p>'},

  {id:'p34',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for NO2?',
   choices:['nitrogen dioxide','dinitrogen oxide','nitrogen(IV) oxide','nitrogen monoxide'],correct:0,
   solution:'<p>N = 1 (skip mono for first element). O = 2 = di-. Name: nitrogen dioxide.</p>'},

  {id:'p35',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for N2O?',
   choices:['dinitrogen monoxide','nitrogen oxide','dinitrogen oxide','nitrogen monoxide'],correct:0,
   solution:'<p>N = 2 = di-. O = 1 = mono- (always use prefix for second element even when it is 1). Name: dinitrogen monoxide (also known as nitrous oxide, laughing gas).</p>'},

  {id:'p36',type:'concept',tag:'Molecular Naming',
   q:'What is the correct name for SO3?',
   choices:['sulfur trioxide','sulfur(VI) oxide','disulfur trioxide','sulfuric trioxide'],correct:0,
   solution:'<p>S = 1 (skip mono). O = 3 = tri-. Name: sulfur trioxide.</p>'},

  {id:'p37',type:'concept',tag:'Molecular Naming',
   q:'A student writes "diphosphorus pentoxide" for P2O5. Which part of this name is NOT correct?',
   choices:['Nothing — it is correct','The prefix "di" should be dropped','The prefix "penta" should be "hexa"','Phosphorus should have a Roman numeral'],correct:0,
   solution:'<p>P2O5: P = 2 = di-, O = 5 = penta-. The name "diphosphorus pentoxide" is actually correct! Phosphorus is a nonmetal so we use prefixes, not Roman numerals. This is also sometimes written as P4O10 (tetraphosphorus decoxide) when written as two P2O5 units.</p>'},

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
   choices:['HI','HIO3','HIO','H2I'],correct:0,
   solution:'<p>Hydro- = no oxygen. Iod- = iodine. -ic acid. So the compound contains H and I only → HI. HIO3 is iodic acid (an oxyacid).</p>'},

  {id:'p42',type:'concept',tag:'Binary Acids',
   q:'What prefix do ALL binary acids share?',
   choices:['hydro-','hypo-','per-','bi-'],correct:0,
   solution:'<p>All binary acids (H + one nonmetal, no oxygen) begin with "hydro-." This distinguishes them from oxyacids which do NOT use "hydro-."</p>'},

  /* ========== CONCEPT — Oxyacids ========== */
  {id:'p43',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for HNO3?',
   choices:['nitric acid','nitrous acid','hydronitric acid','nitrogen acid'],correct:0,
   solution:'<p>HNO3 contains oxygen → oxyacid. Ion inside: NO3^- = nitrate (ends in –ate). –ate → –ic acid. Root: nitr. Name: nitric acid.</p>'},

  {id:'p44',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for HNO2?',
   choices:['nitrous acid','nitric acid','hydronitrous acid','nitrite acid'],correct:0,
   solution:'<p>HNO2 is an oxyacid. Ion inside: NO2^- = nitrite (ends in –ite). –ite → –ous acid. Name: nitrous acid.</p>'},

  {id:'p45',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for H2SO4?',
   choices:['sulfuric acid','sulfurous acid','hydrosulfuric acid','sulfate acid'],correct:0,
   solution:'<p>H2SO4 is an oxyacid. Ion inside: SO4^2- = sulfate (–ate). –ate → –ic acid. Root: sulfur. Name: sulfuric acid.</p>'},

  {id:'p46',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for H2SO3?',
   choices:['sulfurous acid','sulfuric acid','hydrosulfurous acid','sulfite acid'],correct:0,
   solution:'<p>H2SO3 is an oxyacid. Ion inside: SO3^2- = sulfite (–ite). –ite → –ous acid. Name: sulfurous acid.</p>'},

  {id:'p47',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for H2CO3?',
   choices:['carbonic acid','carborous acid','hydrocarbonic acid','carbon acid'],correct:0,
   solution:'<p>H2CO3 is an oxyacid. Ion inside: CO3^2- = carbonate (–ate). –ate → –ic acid. Name: carbonic acid.</p>'},

  {id:'p48',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for H3PO4?',
   choices:['phosphoric acid','phosphorous acid','hydrophosphoric acid','phosphate acid'],correct:0,
   solution:'<p>H3PO4 is an oxyacid. Ion inside: PO4^3- = phosphate (–ate). –ate → –ic acid. Name: phosphoric acid.</p>'},

  {id:'p49',type:'concept',tag:'Oxyacids',
   q:'If an acid ends in "-ous acid," the polyatomic ion inside ends in:',
   choices:['-ite','-ate','-ide','-ic'],correct:0,
   solution:'<p>The pattern: –ate ion → –ic acid; –ite ion → –ous acid. So an "-ous acid" always contains an "-ite" ion.</p>'},

  {id:'p50',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for HClO4?',
   choices:['perchloric acid','chloric acid','hypochlorous acid','perchlorous acid'],correct:0,
   solution:'<p>HClO4 is an oxyacid. Ion inside: ClO4^- = perchlorate (–ate). –ate → –ic acid. Name: perchloric acid.</p>'},

  {id:'p51',type:'concept',tag:'Oxyacids',
   q:'What is the correct name for HClO?',
   choices:['hypochlorous acid','chlorous acid','hydrochlorous acid','chloric acid'],correct:0,
   solution:'<p>HClO is an oxyacid. Ion inside: ClO^- = hypochlorite (–ite). –ite → –ous acid. Name: hypochlorous acid. Note: it contains oxygen, so no "hydro-" prefix.</p>'},

  /* ========== CONCEPT — Identifying Compound Type ========== */
  {id:'p52',type:'concept',tag:'Compound Types',
   q:'Which compound is molecular (not ionic)?',
   choices:['SO2','NaCl','CaCl2','KBr'],correct:0,
   solution:'<p>SO2 has two nonmetals (S and O) — molecular. NaCl, CaCl2, and KBr all contain a metal + nonmetal — ionic.</p>'},

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
   choices:['Ca(NO3)2','CaCl2','CO2','HCl'],correct:0,
   solution:'<p>Ca(NO3)2 contains Ca^2+ (metal cation) and NO3^- (nitrate, a polyatomic ion). CaCl2 is ionic but Cl^- is not polyatomic. CO2 and HCl are molecular/binary acid.</p>'},

  {id:'p56',type:'concept',tag:'Compound Types',
   q:'Which metal always requires a Roman numeral in its compound names?',
   choices:['Iron (Fe)','Sodium (Na)','Calcium (Ca)','Aluminum (Al)'],correct:0,
   solution:'<p>Iron (Fe) is a transition metal that can be +2 or +3, so a Roman numeral is always needed. Na is always +1, Ca is always +2, and Al is always +3 — no Roman numerals for these.</p>'},

  /* ========== CONCEPT — Naming Polyatomic Ion Compounds (more) ========== */
  {id:'p57',type:'multi',tag:'Polyatomic + Roman',
   q:'What is the correct name for Fe(NO3)2?',
   choices:['iron(II) nitrate','iron(III) nitrate','iron dinitrate','iron(II) nitrite'],correct:0,
   solution:'<p>Step 1: Identify the polyatomic ion — NO3^- = nitrate. Step 2: Find Fe charge — 2 NO3^- = -2 total → Fe must be +2. Step 3: Name → iron(II) nitrate.</p>'},

  {id:'p58',type:'multi',tag:'Polyatomic + Roman',
   q:'What is the correct name for Fe(NO3)3?',
   choices:['iron(III) nitrate','iron(II) nitrate','iron(III) nitrite','iron trinitrate'],correct:0,
   solution:'<p>Step 1: NO3^- = nitrate. Step 2: 3 NO3^- = -3 total → Fe = +3. Step 3: iron(III) nitrate.</p>'},

  {id:'p59',type:'multi',tag:'Polyatomic + Roman',
   q:'What is the correct name for Cu3(PO4)2?',
   choices:['copper(II) phosphate','copper(I) phosphate','tricopper diphosphate','copper(III) phosphate'],correct:0,
   solution:'<p>Step 1: PO4^3- = phosphate. Step 2: 2 × (-3) = -6 total. 3 Cu = +6 total → each Cu = +2. Step 3: copper(II) phosphate.</p>'},

  {id:'p60',type:'multi',tag:'Polyatomic + Roman',
   q:'What is the correct name for Pb(NO3)2?',
   choices:['lead(II) nitrate','lead(IV) nitrate','lead nitrate','lead dinitrate'],correct:0,
   solution:'<p>Step 1: NO3^- = nitrate. Step 2: 2 × (-1) = -2 total → Pb = +2. Step 3: lead(II) nitrate. Pb has variable charge → Roman numeral required.</p>'},

  /* ========== CONCEPT — More Molecular ========== */
  {id:'p61',type:'multi',tag:'Molecular Naming',
   q:'What is the correct name for CCl4?',
   choices:['carbon tetrachloride','carbon(IV) chloride','monocarbon tetrachloride','tetrachlorocarbon'],correct:0,
   solution:'<p>C = 1 (skip mono for first element). Cl = 4 = tetra-. Chlorine → chloride. Name: carbon tetrachloride (used as a solvent).</p>'},

  {id:'p62',type:'multi',tag:'Molecular Naming',
   q:'What is the correct name for P4O10?',
   choices:['tetraphosphorus decoxide','tetraphosphorus decaoxide','phosphorus oxide','diphosphorus pentoxide'],correct:0,
   solution:'<p>P = 4 = tetra-. O = 10 = deca-. "Deca-" + "oxide" → drop trailing "a" → "decoxide." Name: tetraphosphorus decoxide.</p>'},

  {id:'p63',type:'multi',tag:'Molecular Naming',
   q:'What is the correct name for Cl2O7?',
   choices:['dichlorine heptoxide','chlorine heptoxide','chlorine(VII) oxide','dichlorine septoxide'],correct:0,
   solution:'<p>Cl = 2 = di-. O = 7 = hepta-. Name: dichlorine heptoxide.</p>'},

  /* ========== CALC — Charge determination ========== */
  {id:'p64',type:'calc',tag:'Metal Charge',
   q:'In the compound MnO2, oxygen has a -2 charge. What is the charge on the manganese (Mn) ion? Enter just the number with its sign (e.g., +2).',
   answer:'+4', isText:true,
   solution:'<p>2 O^2- = -4 total. Mn must be +4 to balance. The compound is manganese(IV) oxide.</p>'},

  {id:'p65',type:'calc',tag:'Metal Charge',
   q:'In CrCl3, chloride (Cl^-) has a -1 charge. What is the charge on the chromium (Cr) ion? Enter with sign (e.g., +3).',
   answer:'+3', isText:true,
   solution:'<p>3 Cl^- = -3 total. Cr must be +3. The compound is chromium(III) chloride.</p>'},

  {id:'p66',type:'calc',tag:'Metal Charge',
   q:'In PbO, what is the charge on the lead (Pb) ion? Enter with sign (e.g., +2).',
   answer:'+2', isText:true,
   solution:'<p>1 O^2- = -2 total. Pb must be +2. The compound is lead(II) oxide.</p>'},

  {id:'p67',type:'calc',tag:'Metal Charge',
   q:'In SnCl4, what is the charge on the tin (Sn) ion? Enter with sign (e.g., +4).',
   answer:'+4', isText:true,
   solution:'<p>4 Cl^- = -4 total. Sn must be +4. The compound is tin(IV) chloride.</p>'},

  {id:'p68',type:'calc',tag:'Metal Charge',
   q:'In SnCl2, what is the charge on the tin (Sn) ion? Enter with sign (e.g., +2).',
   answer:'+2', isText:true,
   solution:'<p>2 Cl^- = -2 total. Sn must be +2. The compound is tin(II) chloride.</p>'},

  {id:'p69',type:'calc',tag:'Metal Charge',
   q:'In Cr2(SO4)3, the sulfate ion (SO4^2-) has a -2 charge. What is the charge on each chromium ion? Enter with sign (e.g., +3).',
   answer:'+3', isText:true,
   solution:'<p>3 SO4^2- = -6 total. 2 Cr atoms supply +6 total. +6 ÷ 2 = +3 per Cr. The compound is chromium(III) sulfate.</p>'},

  {id:'p70',type:'calc',tag:'Metal Charge',
   q:'In Cu3(PO4)2, the phosphate ion (PO4^3-) has a -3 charge. What is the charge on each copper ion? Enter with sign (e.g., +2).',
   answer:'+2', isText:true,
   solution:'<p>2 PO4^3- = -6 total. 3 Cu supply +6 total. +6 ÷ 3 = +2 per Cu. The compound is copper(II) phosphate.</p>'},

  {id:'p71',type:'calc',tag:'Metal Charge',
   q:'In Fe2(SO4)3, the sulfate ion (SO4^2-) has a -2 charge. What is the charge on each iron ion? Enter with sign (e.g., +3).',
   answer:'+3', isText:true,
   solution:'<p>3 SO4^2- = -6 total. 2 Fe supply +6 total. +6 ÷ 2 = +3. The compound is iron(III) sulfate.</p>'},

  {id:'p72',type:'calc',tag:'Metal Charge',
   q:'In NiCl2, what is the charge on the nickel (Ni) ion? Enter with sign.',
   answer:'+2', isText:true,
   solution:'<p>2 Cl^- = -2 total. Ni must be +2. The compound is nickel(II) chloride.</p>'},

  {id:'p73',type:'calc',tag:'Metal Charge',
   q:'In CoO, what is the charge on the cobalt (Co) ion? Enter with sign.',
   answer:'+2', isText:true,
   solution:'<p>1 O^2- = -2 total. Co must be +2. The compound is cobalt(II) oxide.</p>'},

  {id:'p74',type:'calc',tag:'Metal Charge',
   q:'In Co2O3, what is the charge on each cobalt (Co) ion? Enter with sign.',
   answer:'+3', isText:true,
   solution:'<p>3 O^2- = -6 total. 2 Co supply +6 total. +6 ÷ 2 = +3. The compound is cobalt(III) oxide.</p>'},

  {id:'p75',type:'calc',tag:'Metal Charge',
   q:'In MnO, what is the charge on the manganese (Mn) ion? Enter with sign.',
   answer:'+2', isText:true,
   solution:'<p>1 O^2- = -2 total. Mn must be +2. The compound is manganese(II) oxide.</p>'},

  /* ========== MULTI-STEP ========== */
  {id:'p76',type:'multi',tag:'Name → Formula',
   q:'Which formula correctly represents "iron(III) sulfate"?',
   choices:['Fe2(SO4)3','Fe3(SO4)2','Fe(SO4)3','Fe2SO4'],correct:0,
   solution:'<p>Iron(III) = Fe^3+. Sulfate = SO4^2-. To balance: need charges equal to zero. Fe^3+ × 2 = +6 total. SO4^2- × 3 = -6 total. Formula: Fe2(SO4)3.</p>'},

  {id:'p77',type:'multi',tag:'Name → Formula',
   q:'Which formula correctly represents "copper(I) sulfide"?',
   choices:['Cu2S','CuS','Cu2S2','CuS2'],correct:0,
   solution:'<p>Copper(I) = Cu^+. Sulfide = S^2-. 2 Cu^+ = +2 total. 1 S^2- = -2 total. Formula: Cu2S.</p>'},

  {id:'p78',type:'multi',tag:'Name → Formula',
   q:'Which formula correctly represents "ammonium carbonate"?',
   choices:['(NH4)2CO3','NH4CO3','(NH4)3CO3','NH4(CO3)2'],correct:0,
   solution:'<p>Ammonium = NH4^+ (+1). Carbonate = CO3^2- (-2). 2 NH4^+ = +2. 1 CO3^2- = -2. Formula: (NH4)2CO3.</p>'},

  {id:'p79',type:'multi',tag:'Name → Formula',
   q:'Which formula correctly represents "calcium phosphate"?',
   choices:['Ca3(PO4)2','Ca2(PO4)3','CaPO4','Ca3PO4'],correct:0,
   solution:'<p>Ca^2+ (+2). PO4^3- (-3). 3 Ca^2+ = +6. 2 PO4^3- = -6. Formula: Ca3(PO4)2.</p>'},

  {id:'p80',type:'multi',tag:'Full Naming',
   q:'A compound has the formula Pb(NO3)2. Which of the following is the correct systematic name?',
   choices:['lead(II) nitrate','lead(IV) dinitrate','dilead nitrate','lead nitrate(II)'],correct:0,
   solution:'<p>NO3^- = nitrate. 2 NO3^- = -2 total. Pb = +2. Roman numeral II goes right after metal name in parentheses. Correct format: lead(II) nitrate.</p>'},

  {id:'p81',type:'multi',tag:'Full Naming',
   q:'A compound contains Mn^3+ and oxygen (O^2-). What is its formula and name?',
   choices:['Mn2O3 — manganese(III) oxide','MnO3 — manganese(VI) oxide','Mn3O2 — manganese(II) oxide','MnO — manganese(III) oxide'],correct:0,
   solution:'<p>Mn^3+ × 2 = +6 total. O^2- × 3 = -6 total. Formula: Mn2O3. Metal with variable charge → Roman numeral III → manganese(III) oxide.</p>'},

]; // end ALL_PROBLEMS — 81 problems total
