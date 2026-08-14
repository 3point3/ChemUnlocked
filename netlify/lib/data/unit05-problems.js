/* ── Unit 05 Problem Bank — Periodic Table & Trends ──
   174 problems total (84 original + 60 added + 30 hard expansion)
   Difficulty: 75 easy | 50 medium | 49 hard
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  /* ══════════════════════════════════════════════════
      CALCULATION PROBLEMS  (29)
  ══════════════════════════════════════════════════ */

  {
    id:'p01', difficulty:'easy', type:'calc', tag:'Valence Electrons',
    q:'Sulfur (S) is in Group 16 of the periodic table. How many valence electrons does a sulfur atom have?',
    answer:6, tolerance:0, unit:'valence electrons',
    solution:'<p>For main-group elements, valence electrons = last digit of the group number. Group 16 → <strong>6 valence electrons</strong>. Verify: S is [Ne] 3s^2 3p^4; level 3 has 2 + 4 = 6 electrons.</p>'
  },
  {
    id:'p02', difficulty:'easy', type:'calc', tag:'Valence Electrons',
    q:'Aluminum (Al) is in Group 13. How many valence electrons does an aluminum atom have?',
    answer:3, tolerance:0, unit:'valence electrons',
    solution:'<p>Group 13 → <strong>3 valence electrons</strong>. Al = [Ne] 3s^2 3p^1; level 3 has 2 + 1 = 3 electrons.</p>'
  },
  {
    id:'p03', difficulty:'easy', type:'calc', tag:'Valence Electrons',
    q:'Phosphorus (P) is in Group 15, Period 3. How many valence electrons does phosphorus have?',
    answer:5, tolerance:0, unit:'valence electrons',
    solution:'<p>Group 15 → <strong>5 valence electrons</strong>. P = [Ne] 3s^2 3p^3; level 3 has 2 + 3 = 5 electrons.</p>'
  },
  {
    id:'p04', difficulty:'easy', type:'calc', tag:'Valence Electrons',
    q:'Fluorine (F) is in Group 17, Period 2. How many valence electrons does fluorine have?',
    answer:7, tolerance:0, unit:'valence electrons',
    solution:'<p>For main-group elements, the group number tells you the valence electrons.</p><p>Fluorine is in Group 17, so it has <strong>7 valence electrons</strong>.</p><p>You can confirm it from the configuration 1s^2 2s^2 2p^5: the outer level has 2 + 5 = 7 electrons.</p>'
  },
  {
    id:'p05', difficulty:'easy', type:'calc', tag:'Valence Electrons',
    q:'Oxygen (O) is in Group 16, Period 2. How many valence electrons does oxygen have?',
    answer:6, tolerance:0, unit:'valence electrons',
    solution:'<p>Group 16 → <strong>6 valence electrons</strong>. O = 1s^2 2s^2 2p^4; level 2 has 2 + 4 = 6 electrons. O typically needs 2 more electrons to complete its octet.</p>'
  },
  {
    id:'p06', difficulty:'easy', type:'calc', tag:'Valence Electrons',
    q:'Silicon (Si) is in Group 14, Period 3. How many valence electrons does silicon have?',
    answer:4, tolerance:0, unit:'valence electrons',
    solution:'<p>Group 14 → <strong>4 valence electrons</strong>. Si = [Ne] 3s^2 3p^2; level 3 has 2 + 2 = 4 electrons. Si is the basis for semiconductors and computer chips.</p>'
  },
  {
    id:'p07', difficulty:'easy', type:'calc', tag:'Period & Group',
    q:'Bromine (Br) has atomic number 35. What period is bromine in?',
    answer:4, tolerance:0, unit:'',
    solution:'<p>Br = [Ar] 3d^10 4s^2 4p^5. The outermost occupied level is 4 → <strong>Period 4</strong>. Check: Period 4 runs from K (Z=19) to Kr (Z=36); Br at Z=35 is in Period 4.</p>'
  },
  {
    id:'p08', difficulty:'easy', type:'calc', tag:'Period & Group',
    q:'Calcium (Ca) has atomic number 20. What group is calcium in?',
    answer:2, tolerance:0, unit:'',
    solution:'<p>Ca = [Ar] 4s^2. Level 4 holds 2 valence electrons → <strong>Group 2</strong>. Ca is an alkaline earth metal. It loses 2 electrons to form Ca^2+.</p>'
  },
  {
    id:'p09', difficulty:'easy', type:'calc', tag:'Period & Group',
    q:'Potassium (K) has atomic number 19. What period is it in?',
    answer:4, tolerance:0, unit:'',
    solution:'<p>K = [Ar] 4s^1. Outermost electron is in level 4 → <strong>Period 4</strong>. K is the first element of Period 4, directly below Na in Group 1.</p>'
  },
  {
    id:'p10', difficulty:'easy', type:'calc', tag:'Period & Group',
    q:'Cesium (Cs) has atomic number 55 and configuration [Xe] 6s^1. What period is cesium in?',
    answer:6, tolerance:0, unit:'',
    solution:'<p>Outermost energy level is 6 → <strong>Period 6</strong>. Cs is in Group 1 (alkali metals), Period 6. It has the lowest first ionization energy of all stable alkali metals.</p>'
  },
  {
    id:'p11', difficulty:'easy', type:'calc', tag:'Electronegativity',
    q:'Calculate the electronegativity difference (ΔEN) for the Na–Cl bond. Na EN = 0.93, Cl EN = 3.16.',
    answer:2.23, tolerance:0.05, unit:'',
    solution:'<p>Find the electronegativity difference first: ΔEN = |0.93 - 3.16| = <strong>2.23</strong>.</p><p>Because 2.23 is greater than 1.7, the bond is classified as <strong>ionic</strong>.</p><p>This matches the pattern too: Na is a metal, Cl is a nonmetal, and large ΔEN values usually mean electron transfer.</p>'
  },
  {
    id:'p12', difficulty:'easy', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the H–Cl bond. H EN = 2.20, Cl EN = 3.16.',
    answer:0.96, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |2.20 - 3.16| = <strong>0.96</strong>. Since 0.4 ≤ 0.96 ≤ 1.7, the H–Cl bond is <strong>polar covalent</strong>. Electrons are shared but pulled toward Cl.</p>'
  },
  {
    id:'p13', difficulty:'easy', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the H–F bond. H EN = 2.20, F EN = 3.98.',
    answer:1.78, tolerance:0.05, unit:'',
    solution:'<p>Calculate the difference: ΔEN = |2.20 - 3.98| = <strong>1.78</strong>.</p><p>That is just above the 1.7 cutoff, so by this classroom rule HF is classified as <strong>ionic</strong>.</p><p>This is a good reminder that HF sits right near the boundary, so always check the actual cutoff being used.</p>'
  },
  {
    id:'p14', difficulty:'easy', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the C–O bond. C EN = 2.55, O EN = 3.44.',
    answer:0.89, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |2.55 - 3.44| = <strong>0.89</strong>. Polar covalent (0.4–1.7). O pulls bonding electrons toward itself, creating a partial negative charge on O in C–O bonds — important in CO2 and organic molecules.</p>'
  },
  {
    id:'p15', difficulty:'easy', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the H–Br bond. H EN = 2.20, Br EN = 2.96.',
    answer:0.76, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |2.20 - 2.96| = <strong>0.76</strong>. Polar covalent. Trend in hydrogen halides: HF (1.78) → HCl (0.96) → HBr (0.76) → HI (0.46). ΔEN decreases as the halogen EN decreases going down Group 17.</p>'
  },
  {
    id:'p16', difficulty:'easy', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the Mg–O bond. Mg EN = 1.31, O EN = 3.44.',
    answer:2.13, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |1.31 - 3.44| = <strong>2.13</strong>. Ionic (> 1.7). MgO is magnesium oxide — a hard white ionic solid with a very high melting point (2852°C).</p>'
  },
  {
    id:'p17', difficulty:'easy', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the Al–O bond. Al EN = 1.61, O EN = 3.44.',
    answer:1.83, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |1.61 - 3.44| = <strong>1.83</strong>. Ionic (> 1.7). Al2O3 (aluminum oxide) is the ionic compound in rubies and sapphires.</p>'
  },
  {
    id:'p18', difficulty:'easy', type:'calc', tag:'Ion Size',
    q:'The atomic radius of Na is 186 pm. The ionic radius of Na^+ is 102 pm. By how many picometers did the radius decrease when Na lost one electron?',
    answer:84, tolerance:1, unit:'pm',
    solution:'<p>Decrease = 186 - 102 = <strong>84 pm</strong>. Na loses its entire 3s^1 electron. The remaining 10 electrons are in level 2, pulled much closer by 11 protons. Cations are always smaller than their neutral atoms.</p>'
  },
  {
    id:'p19', difficulty:'easy', type:'calc', tag:'Ion Size',
    q:'The atomic radius of Cl is 99 pm. The ionic radius of Cl^- is 181 pm. By how many picometers did the radius increase when Cl gained one electron?',
    answer:82, tolerance:2, unit:'pm',
    solution:'<p>Compute the size change directly: 181 - 99 = <strong>82 pm</strong>.</p><p>Chlorine becomes larger when it gains an electron because 18 electrons are now being held by only 17 protons.</p><p>The added electron-electron repulsion spreads the cloud out, so anions are larger than their neutral atoms.</p>'
  },
  {
    id:'p20', difficulty:'easy', type:'calc', tag:'Ion Size',
    q:'The atomic radius of K is 227 pm. The ionic radius of K^+ is 138 pm. By how many picometers did the radius decrease when K lost one electron?',
    answer:89, tolerance:2, unit:'pm',
    solution:'<p>Decrease = 227 - 138 = <strong>89 pm</strong>. K loses its 4s^1 electron, dropping from level 4 to level 3 as the outermost shell. The remaining 18 electrons are pulled tightly by 19 protons.</p>'
  },
  {
    id:'p21', difficulty:'easy', type:'calc', tag:'Ion Size',
    q:'The atomic radius of Ca is 197 pm. The ionic radius of Ca^2+ is 100 pm. By how many picometers did the radius decrease when Ca lost two electrons?',
    answer:97, tolerance:2, unit:'pm',
    solution:'<p>Decrease = 197 - 100 = <strong>97 pm</strong>. Ca loses both 4s electrons. Losing the entire outermost level causes dramatic shrinkage — Ca^2+ is about half the size of the Ca atom.</p>'
  },
  {
    id:'p22', difficulty:'medium', type:'calc', tag:'Ionization Energy',
    q:'The first ionization energy of K is 419 kJ/mol and for Na it is 496 kJ/mol. How many kJ/mol higher is sodium\'s ionization energy than potassium\'s?',
    answer:77, tolerance:2, unit:'kJ/mol',
    solution:'<p>Difference = 496 - 419 = <strong>77 kJ/mol</strong>. Na (Period 3) is smaller than K (Period 4), so its valence electron is closer to the nucleus and harder to remove. Moving down Group 1, IE decreases.</p>'
  },
  {
    id:'p23', difficulty:'medium', type:'calc', tag:'Ionization Energy',
    q:'The first ionization energy of F is 1681 kJ/mol and for Cl it is 1251 kJ/mol. How many kJ/mol higher is fluorine\'s ionization energy than chlorine\'s?',
    answer:430, tolerance:5, unit:'kJ/mol',
    solution:'<p>Difference = 1681 - 1251 = <strong>430 kJ/mol</strong>. F (Period 2) is smaller than Cl (Period 3). F\'s valence electrons are in level 2, much closer to the nucleus. Moving down Group 17, IE decreases substantially.</p>'
  },
  {
    id:'p24', difficulty:'easy', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the Si–O bond. Si EN = 1.90, O EN = 3.44.',
    answer:1.54, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |1.90 - 3.44| = <strong>1.54</strong>. Polar covalent (0.4–1.7). The Si–O bond is one of the most important in geology — it makes up silicate minerals, with O pulling electron density away from Si.</p>'
  },
  {
    id:'p25', difficulty:'easy', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the N–H bond. N EN = 3.04, H EN = 2.20.',
    answer:0.84, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |3.04 - 2.20| = <strong>0.84</strong>. Polar covalent. In ammonia (NH3), the N end is slightly negative and each H is slightly positive, making N–H bonds capable of hydrogen bonding.</p>'
  },
  {
    id:'p26', difficulty:'easy', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the Li–F bond. Li EN = 0.98, F EN = 3.98.',
    answer:3.00, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |0.98 - 3.98| = <strong>3.00</strong>. Ionic (> 1.7). LiF is lithium fluoride — a strongly ionic crystal. Li is in the upper-left and F in the upper-right of the table, giving a very large EN gap.</p>'
  },
  {
    id:'p27', difficulty:'easy', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the K–Br bond. K EN = 0.82, Br EN = 2.96.',
    answer:2.14, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |0.82 - 2.96| = <strong>2.14</strong>. Ionic (> 1.7). KBr is potassium bromide, an ionic salt. K (Group 1 metal) and Br (Group 17 nonmetal) have a large EN difference.</p>'
  },
  {
    id:'p28', difficulty:'easy', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the H–I bond. H EN = 2.20, I EN = 2.66.',
    answer:0.46, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |2.20 - 2.66| = <strong>0.46</strong>. Polar covalent (barely above 0.4). HI is almost nonpolar. Trend: HF (1.78) → HCl (0.96) → HBr (0.76) → HI (0.46). As you go down Group 17, halogens become less electronegative, shrinking ΔEN.</p>'
  },

  /* ══════════════════════════════════════════════════
      CONCEPT PROBLEMS  (34)
  ══════════════════════════════════════════════════ */

  {
    id:'p29', difficulty:'easy', type:'concept', tag:'Table Organization',
    q:'Elements in the same GROUP of the periodic table have similar chemical properties because they have the same…',
    choices:['A. number of protons','B. number of neutrons','C. number of valence electrons','D. atomic mass'],
    correct:2,
    solution:'<p><strong>C — number of valence electrons.</strong> Same group = same valence electron count = similar bonding behavior. All Group 1 elements (Li, Na, K…) have 1 valence electron and react similarly with water. Protons (A) define the element uniquely; neutrons (B) vary; atomic mass (D) increases down a group.</p>'
  },
  {
    id:'p30', difficulty:'easy', type:'concept', tag:'Table Organization',
    q:'The period number of an element tells you…',
    choices:['A. how many protons it has','B. how many valence electrons it has','C. how many energy levels are occupied','D. which group it belongs to'],
    correct:2,
    solution:'<p><strong>C — how many energy levels are occupied.</strong> Period 2 elements use levels 1 and 2; Period 3 elements use levels 1, 2, and 3; etc. The period = the outermost energy level number. The number of protons (A) increases across a period, not just with period number.</p>'
  },
  {
    id:'p31', difficulty:'easy', type:'concept', tag:'Table Organization',
    q:'How many valence electrons do all elements in Group 2 share?',
    choices:['A. 1','B. 2','C. 8','D. Varies by element'],
    correct:1,
    solution:'<p><strong>B — 2 valence electrons.</strong> All Group 2 elements (Be, Mg, Ca, Sr, Ba) end in s^2, giving exactly 2 valence electrons. This shared property means they all form 2+ ions and react with similar vigor with water and acids.</p>'
  },
  {
    id:'p32', difficulty:'easy', type:'concept', tag:'Table Organization',
    q:'The halogens (Group 17) all have 7 valence electrons. This means they tend to…',
    choices:['A. lose 7 electrons to form 7+ ions','B. gain 1 electron to complete their octet and form 1- ions','C. not react because they have many electrons','D. form bonds by losing 1 electron'],
    correct:1,
    solution:'<p><strong>B — gain 1 electron to form 1- ions.</strong> Halogens are one electron short of a full octet. Gaining 1 electron is far easier than losing 7. F^-, Cl^-, Br^-, I^- are common halide ions. Halogens are actually among the most reactive elements precisely because they so strongly attract that final electron.</p>'
  },
  {
    id:'p33', difficulty:'easy', type:'concept', tag:'Table Organization',
    q:'Sodium (Na) and potassium (K) are in the same group. You would predict that they…',
    choices:['A. have the same atomic mass','B. react with water in similar ways','C. have the same number of energy levels','D. are the same size'],
    correct:1,
    solution:'<p><strong>B — react with water in similar ways.</strong> Both Na and K have 1 valence electron and react with water to produce hydrogen gas and a hydroxide. They do NOT have the same mass (A), energy levels (C — Na has 3, K has 4), or size (D — K is larger).</p>'
  },
  {
    id:'p34', difficulty:'easy', type:'concept', tag:'Table Organization',
    q:'The noble gases (Group 18) are the least reactive elements because…',
    choices:['A. they are all gases at room temperature','B. they have completely filled outer energy levels','C. they have the lowest atomic masses in their period','D. they are in the center of the periodic table'],
    correct:1,
    solution:'<p><strong>B — completely filled outer energy levels.</strong> Noble gases have 8 valence electrons (He has 2) — a complete, stable octet. No tendency to gain, lose, or share electrons → essentially no reactivity. Being gases (A) is a consequence, not the cause. Noble gases are on the far right (D is wrong).</p>'
  },
  {
    id:'p35', difficulty:'easy', type:'concept', tag:'Atomic Radius Trend',
    q:'As you move from left to right across Period 3 (Na → Cl), the atomic radius…',
    choices:['A. increases, because more electrons are added','B. decreases, because more protons pull electrons inward','C. stays the same, because all Period 3 elements have the same energy levels','D. first increases, then decreases'],
    correct:1,
    solution:'<p><strong>B — decreases.</strong> Across a period, protons increase one at a time but all valence electrons stay in the same energy level. More nuclear charge = stronger pull = smaller atom. Na (186 pm) → Mg (160) → Al (143) → Si (111) → P (106) → S (103) → Cl (99 pm).</p>'
  },
  {
    id:'p36', difficulty:'easy', type:'concept', tag:'Atomic Radius Trend',
    q:'Moving down Group 1 (Li → Na → K → Rb → Cs), atomic radius…',
    choices:['A. decreases, because nuclear charge increases','B. stays the same, because all have 1 valence electron','C. increases, because each step adds a new energy level','D. first increases, then decreases'],
    correct:2,
    solution:'<p><strong>C — increases.</strong> Li valence e^- is in level 2, Na in level 3, K in level 4, etc. Each new level is farther from the nucleus. Li (152 pm) → Na (186) → K (227) → Rb (248) → Cs (265 pm). Having 1 valence electron (B) is constant, but the distance of that electron from the nucleus grows each period.</p>'
  },
  {
    id:'p37', difficulty:'medium', type:'concept', tag:'Atomic Radius Trend',
    q:'Which atom has the largest atomic radius?',
    choices:['A. F (Period 2, Group 17)','B. Cl (Period 3, Group 17)','C. Na (Period 3, Group 1)','D. K (Period 4, Group 1)'],
    correct:3,
    solution:'<p><strong>D — K</strong> (227 pm). K is farthest down and farthest left of the four options. Moving down a group increases radius; moving left across a period increases radius. K (Period 4, Group 1) beats Na because it has an extra energy level. K beats the halogens because Group 1 is far larger than Group 17. F (64 pm) is the smallest.</p>'
  },
  {
    id:'p38', difficulty:'medium', type:'concept', tag:'Atomic Radius Trend',
    q:'Which atom has the smallest atomic radius?',
    choices:['A. Cs (Period 6, Group 1)','B. F (Period 2, Group 17)','C. Na (Period 3, Group 1)','D. Cl (Period 3, Group 17)'],
    correct:1,
    solution:'<p><strong>B — F</strong> (64 pm). Atomic radius is smallest in the upper-right corner of the table. F is Period 2, Group 17 — small period (level-2 valence electrons) AND far right (many protons pulling electrons inward). Cs (A) is bottom-left = the largest alkali metal (265 pm).</p>'
  },
  {
    id:'p39', difficulty:'easy', type:'concept', tag:'Atomic Radius Trend',
    q:'Within Period 2, which element has the larger atomic radius: Li or F?',
    choices:['A. F, because it has more protons','B. Li, because it has fewer protons pulling on the valence electrons','C. They are the same size; both are in Period 2','D. F, because nonmetals are always larger than metals'],
    correct:1,
    solution:'<p><strong>B — Li</strong> (152 pm vs F at 64 pm). Across a period, more protons = smaller atom. Li has 3 protons; F has 9. In Period 2, all valence electrons are in level 2, but F\'s 9 protons pull them inward much more strongly. Li is the largest atom in Period 2; F is the smallest.</p>'
  },
  {
    id:'p40', difficulty:'medium', type:'concept', tag:'Ionization Energy',
    q:'Which element would you expect to have the HIGHEST first ionization energy?',
    choices:['A. Cs (Period 6, Group 1)','B. Na (Period 3, Group 1)','C. Ne (Period 2, Group 18)','D. Cl (Period 3, Group 17)'],
    correct:2,
    solution:'<p><strong>C — Ne</strong> (2081 kJ/mol). IE is highest in the upper-right. Noble gases have the highest IE per period — Ne is a small atom with a complete, very stable octet. Cs (A) has the LOWEST IE of the options. Cl (D) has a high IE (1251 kJ/mol) but less than Ne.</p>'
  },
  {
    id:'p41', difficulty:'easy', type:'concept', tag:'Ionization Energy',
    q:'Moving DOWN Group 1 (Li → Na → K → Rb → Cs), ionization energy…',
    choices:['A. increases, because more protons are present','B. decreases, because valence electrons are farther away and more shielded','C. stays the same, because all Group 1 elements have 1 valence electron','D. first decreases, then increases at Cs'],
    correct:1,
    solution:'<p><strong>B — decreases.</strong> Moving down a group, the valence electron is in a higher energy level (farther from the nucleus) and shielded by more inner electrons. Li (520) → Na (496) → K (419) → Cs (376 kJ/mol). Having 1 valence electron (C) doesn\'t fix the IE — distance and shielding matter.</p>'
  },
  {
    id:'p42', difficulty:'hard', type:'concept', tag:'Ionization Energy',
    q:'The first ionization energy of Be is 899 kJ/mol and of B is 801 kJ/mol. B has more protons — why is its IE lower?',
    choices:['A. B has fewer neutrons, making it less stable','B. B\'s outermost electron is in the higher-energy 2p sublevel, which is easier to remove than Be\'s 2s electron','C. B has more valence electrons, overwhelming the nucleus','D. B is a metalloid and metalloids always have lower IE'],
    correct:1,
    solution:'<p><strong>B — the 2p electron is higher in energy.</strong> Be ends in 2s^2 (lower-energy sublevel). B ends in 2s^2 2p^1 — the 2p electron is slightly higher-energy AND shielded by the 2s electrons. Despite having more protons, B\'s valence electron is easier to remove. This is one of two well-known Period 2 IE exceptions (the other is O vs N).</p>'
  },
  {
    id:'p43', difficulty:'hard', type:'concept', tag:'Ionization Energy',
    q:'The first ionization energy of O (1314 kJ/mol) is LOWER than N (1402 kJ/mol) even though O has more protons. Why?',
    choices:['A. O is a larger atom than N','B. In O, the 2p subshell has a paired electron that is extra easy to remove due to electron-electron repulsion','C. N is a noble gas with a high IE','D. O has more neutrons than N, adding instability'],
    correct:1,
    solution:'<p><strong>B — paired 2p electron in O.</strong> N has exactly half-filled 2p (2p^3) — a particularly stable configuration. O has 2p^4, meaning one 2p orbital has a pair. That paired electron repels its partner, making it easier to remove despite O having more protons. This explains the small dip at Group 16 in Period 2.</p>'
  },
  {
    id:'p44', difficulty:'easy', type:'concept', tag:'Electronegativity',
    q:'The most electronegative element on the periodic table is…',
    choices:['A. Oxygen (O)','B. Chlorine (Cl)','C. Fluorine (F)','D. Cesium (Cs)'],
    correct:2,
    solution:'<p><strong>C — Fluorine (F)</strong>, EN = 3.98. F is Period 2, Group 17: small atom, high nuclear charge, 7 valence electrons, one short of a complete octet. O (A) is second-highest (3.44). Cl (B) is 3.16. Cs (D) is one of the LEAST electronegative (0.79).</p>'
  },
  {
    id:'p45', difficulty:'easy', type:'concept', tag:'Electronegativity',
    q:'A bond has ΔEN = 0.10. What type of bond is this?',
    choices:['A. Ionic','B. Polar covalent','C. Nonpolar covalent','D. Metallic'],
    correct:2,
    solution:'<p><strong>C — Nonpolar covalent.</strong> ΔEN &lt; 0.4 → nonpolar covalent. Electrons are shared nearly equally. Examples: H–H (ΔEN = 0), Cl–Cl (ΔEN = 0), C–H (ΔEN = 0.35). Ionic (A) needs ΔEN &gt; 1.7. Polar covalent (B) needs 0.4–1.7.</p>'
  },
  {
    id:'p46', difficulty:'easy', type:'concept', tag:'Electronegativity',
    q:'A bond has ΔEN = 1.2. What type of bond is this?',
    choices:['A. Ionic','B. Polar covalent','C. Nonpolar covalent','D. Cannot be determined without knowing the elements'],
    correct:1,
    solution:'<p><strong>B — Polar covalent.</strong> 0.4 ≤ 1.2 ≤ 1.7 → polar covalent. Electrons are shared but pulled toward the more electronegative atom. Examples in this range: H–Cl (0.96), C–O (0.89), N–H (0.84).</p>'
  },
  {
    id:'p47', difficulty:'easy', type:'concept', tag:'Electronegativity',
    q:'A bond has ΔEN = 2.5. What type of bond is this?',
    choices:['A. Ionic','B. Polar covalent','C. Nonpolar covalent','D. Hydrogen bond'],
    correct:0,
    solution:'<p><strong>A — Ionic.</strong> ΔEN &gt; 1.7 → ionic. An electron is effectively transferred, forming oppositely charged ions. Na–Cl (2.23), Mg–O (2.13), and K–F (3.16) are examples. Hydrogen bond (D) is a type of intermolecular attraction, not a covalent bond classification.</p>'
  },
  {
    id:'p48', difficulty:'easy', type:'concept', tag:'Electronegativity',
    q:'Moving across Period 2 from left to right (Li → F, skipping noble gases), electronegativity…',
    choices:['A. decreases, because more electrons repel each other','B. increases, because more protons attract bonding electrons more strongly','C. stays the same, because all Period 2 atoms use the same energy level','D. first increases then decreases at nitrogen'],
    correct:1,
    solution:'<p><strong>B — increases.</strong> Across a period, protons increase but valence electrons stay in the same level. Increased nuclear charge pulls bonding electrons more strongly. EN: Li (0.98) → Be (1.57) → B (2.04) → C (2.55) → N (3.04) → O (3.44) → F (3.98).</p>'
  },
  {
    id:'p49', difficulty:'medium', type:'concept', tag:'Electronegativity',
    q:'Francium (Fr) is in Period 7, Group 1 — bottom-left corner of the table. Its electronegativity would be predicted to be…',
    choices:['A. very high (~4.0), because it has many protons','B. very low (~0.7), because its valence electron is very far from the nucleus','C. moderate (~2.5), because large atoms have moderate EN','D. impossible to predict from position alone'],
    correct:1,
    solution:'<p><strong>B — very low (~0.7).</strong> EN increases toward the upper-right (F = 3.98) and decreases toward the lower-left. Fr is in the extreme lower-left. Its valence electron is in level 7 — incredibly far from the nucleus and shielded by 6 inner levels. Having many protons (A) doesn\'t help when they are so distant from the bonding region.</p>'
  },
  {
    id:'p50', difficulty:'easy', type:'concept', tag:'Ion Formation',
    q:'When a metal atom forms a cation (loses electrons), its radius compared to the neutral atom is…',
    choices:['A. larger, because there are now more particles overall','B. the same, because the number of protons does not change','C. smaller, because fewer electrons means less repulsion and electrons pulled in more tightly','D. larger, because the atom is less stable as an ion'],
    correct:2,
    solution:'<p><strong>C — smaller.</strong> Losing electrons reduces electron–electron repulsion AND the same nuclear charge pulls fewer electrons more tightly. Na (186 pm) → Na^+ (102 pm) — a 45% shrinkage. Cations are always smaller than their parent atoms.</p>'
  },
  {
    id:'p51', difficulty:'easy', type:'concept', tag:'Ion Formation',
    q:'When a nonmetal forms an anion (gains electrons), its radius compared to the neutral atom is…',
    choices:['A. smaller, because there are now more protons than electrons','B. the same, because only electrons changed','C. larger, because more electrons means more repulsion and they spread out','D. smaller, because the atom is more stable as an ion'],
    correct:2,
    solution:'<p><strong>C — larger.</strong> Gaining electrons means more electrons held by the same proton count. Extra electron–electron repulsion causes the cloud to expand. Cl (99 pm) → Cl^- (181 pm) — an 83% increase. Anions are always larger than their parent atoms.</p>'
  },
  {
    id:'p52', difficulty:'medium', type:'concept', tag:'Ion Formation',
    q:'Which ion would be SMALLER than its parent neutral atom?',
    choices:['A. Cl^- (chloride)','B. O^2- (oxide)','C. Na^+ (sodium)','D. N^3- (nitride)'],
    correct:2,
    solution:'<p><strong>C — Na^+.</strong> Na^+ is a cation — it lost an electron — so it is smaller than Na. All cations are smaller than their parent atoms. Cl^-, O^2-, and N^3- are anions (gained electrons) and are therefore larger than their neutral atoms.</p>'
  },
  {
    id:'p53', difficulty:'medium', type:'concept', tag:'Ion Formation',
    q:'In an isoelectronic series, Na^+, Mg^2+, and Al^3+ all have 10 electrons. They have 11, 12, and 13 protons respectively. Which is the smallest?',
    choices:['A. Na^+ (11 protons)','B. Mg^2+ (12 protons)','C. Al^3+ (13 protons)','D. They are the same size because they have the same electrons'],
    correct:2,
    solution:'<p><strong>C — Al^3+.</strong> For isoelectronic ions, more protons = smaller ion. Al^3+ has 13 protons pulling the same 10 electrons more tightly than Mg^2+ (12 protons) or Na^+ (11 protons). Sizes: Na^+ (102 pm) &gt; Mg^2+ (72 pm) &gt; Al^3+ (53 pm).</p>'
  },
  {
    id:'p54', difficulty:'easy', type:'concept', tag:'Element Classification',
    q:'Silicon (Si) is classified as a metalloid. This means it…',
    choices:['A. is a very reactive metal that conducts electricity well','B. has properties between those of metals and nonmetals','C. is a gas at room temperature','D. does not conduct electricity at all'],
    correct:1,
    solution:'<p><strong>B — properties between metals and nonmetals.</strong> Metalloids (semimetals) are on the staircase border. Si conducts electricity, but only a little (semiconductor). This is why Si is the basis for all computer chips and solar cells. A describes alkali metals; C describes noble gases; D describes insulators.</p>'
  },
  {
    id:'p55', difficulty:'easy', type:'concept', tag:'Element Classification',
    q:'Which of the following is an alkali metal?',
    choices:['A. Ca (calcium)','B. Cl (chlorine)','C. K (potassium)','D. Ar (argon)'],
    correct:2,
    solution:'<p><strong>C — K (potassium).</strong> Alkali metals are Group 1 elements: Li, Na, K, Rb, Cs, Fr. They all have 1 valence electron and are very reactive. Ca (A) is an alkaline earth metal (Group 2). Cl (B) is a halogen (Group 17). Ar (D) is a noble gas (Group 18).</p>'
  },
  {
    id:'p56', difficulty:'easy', type:'concept', tag:'Element Classification',
    q:'Which group contains the most reactive nonmetals?',
    choices:['A. Group 1 (alkali metals)','B. Group 2 (alkaline earth metals)','C. Group 17 (halogens)','D. Group 18 (noble gases)'],
    correct:2,
    solution:'<p><strong>C — Group 17, the halogens.</strong> Halogens have 7 valence electrons and desperately seek one more to complete their octet. They are the most reactive nonmetals — F is so reactive it will attack glass. Groups 1 and 2 are the most reactive metals. Group 18 is the least reactive of all elements.</p>'
  },
  {
    id:'p57', difficulty:'easy', type:'concept', tag:'Element Classification',
    q:'The staircase line on the periodic table separates…',
    choices:['A. metals from nonmetals (metals on the left, nonmetals on the right)','B. s-block from p-block elements','C. main-group from transition metals','D. solids from gases at room temperature'],
    correct:0,
    solution:'<p><strong>A — metals from nonmetals.</strong> The staircase runs from B to At. Metals are to the left; nonmetals are to the right. Elements touching the staircase are metalloids. B (B) is close but the s/p block boundary is different. C and D do not describe the staircase function.</p>'
  },
  {
    id:'p58', difficulty:'medium', type:'concept', tag:'Element Classification',
    q:'An element has the electron configuration [Ar] 3d^10 4s^2 4p^5. What region of the periodic table is it in?',
    choices:['A. Alkali metals (Group 1)','B. Transition metals','C. Halogens (Group 17)','D. Noble gases (Group 18)'],
    correct:2,
    solution:'<p><strong>C — Halogens (Group 17).</strong> The configuration ends in 4p^5 — 5 electrons in the 4p sublevel, totaling 7 valence electrons in level 4. 7 valence electrons → Group 17 → halogen. The element is bromine (Br), the only liquid nonmetal at room temperature.</p>'
  },
  {
    id:'p59', difficulty:'easy', type:'concept', tag:'Table Organization',
    q:'How many energy levels does an atom in Period 4 use for its electrons?',
    choices:['A. 1','B. 2','C. 4','D. 18'],
    correct:2,
    solution:'<p><strong>C — 4 energy levels.</strong> For main-group elements, the period number equals the number of occupied energy levels. Period 4 elements (K, Ca, Ga, Ge, As, Se, Br, Kr) fill levels 1 through 4. Level 4 is the outermost (valence) shell. 18 (D) is the number of groups.</p>'
  },
  {
    id:'p60', difficulty:'medium', type:'concept', tag:'Atomic Radius Trend',
    q:'Why does atomic radius increase as you move down a group?',
    choices:['A. More protons are added, pushing electrons out','B. Each new period adds a new energy level farther from the nucleus','C. More neutrons are added, making the nucleus larger','D. Electron-electron repulsion increases as more electrons are added to the same level'],
    correct:1,
    solution:'<p><strong>B — each new period adds a new energy level.</strong> Going down Group 1: Li valence e^- is in level 2, Na in level 3, K in level 4, etc. Each new level extends farther from the nucleus. Neutrons (C) don\'t affect electron behavior. More protons (A) actually increase nuclear pull, but the new energy level effect dominates.</p>'
  },
  {
    id:'p61', difficulty:'medium', type:'concept', tag:'Ionization Energy',
    q:'Which element has the LOWEST first ionization energy?',
    choices:['A. F (Period 2, Group 17)','B. Na (Period 3, Group 1)','C. Cs (Period 6, Group 1)','D. He (Period 1, Group 18)'],
    correct:2,
    solution:'<p><strong>C — Cs.</strong> Lowest IE is in the bottom-left of the table. Cs (Period 6, Group 1) has its valence electron in level 6 — very far from the nucleus and shielded by 5 inner levels. IE for Cs = 376 kJ/mol. He (D) has the highest IE of all (2372 kJ/mol). F (A) is also very high (1681 kJ/mol).</p>'
  },

  /* ══════════════════════════════════════════════════
      MULTI-STEP PROBLEMS  (21)
  ══════════════════════════════════════════════════ */

  {
    id:'p62', difficulty:'medium', type:'multi', tag:'Trends Comparison',
    q:'Rank these four atoms from SMALLEST to LARGEST atomic radius: F, Cl, Li, Na. (Type four symbols separated by commas, smallest first, e.g.: X, X, X, X)',
    isText:true, answer:'F, Cl, Li, Na',
    solution:'<p>Step 1 — locate each: F (Period 2, Group 17), Cl (Period 3, Group 17), Li (Period 2, Group 1), Na (Period 3, Group 1).</p><p>Step 2 — within periods: Period 2: Li (152 pm) &gt; F (64 pm). Period 3: Na (186 pm) &gt; Cl (99 pm).</p><p>Step 3 — between periods (same group): Na (186) &gt; Li (152); Cl (99) &gt; F (64).</p><p>Final: <strong>F (64) &lt; Cl (99) &lt; Li (152) &lt; Na (186 pm)</strong></p>'
  },
  {
    id:'p63', difficulty:'medium', type:'multi', tag:'Trends Comparison',
    q:'Rank these four atoms from HIGHEST to LOWEST first ionization energy: K, Na, Li, Cs. (Type four symbols separated by commas, highest first)',
    isText:true, answer:'Li, Na, K, Cs',
    solution:'<p>All four are in Group 1. IE decreases moving down a group. IE values: Li (520) &gt; Na (496) &gt; K (419) &gt; Cs (376 kJ/mol). Highest to lowest: <strong>Li, Na, K, Cs</strong>.</p>'
  },
  {
    id:'p64', difficulty:'easy', type:'multi', tag:'Bond Classification',
    q:'For the Mg–O bond: Mg EN = 1.31, O EN = 3.44. (A) Calculate ΔEN. (B) Classify the bond. Enter ΔEN as your answer.',
    answer:2.13, tolerance:0.05, unit:'',
    solution:'<p><strong>A:</strong> ΔEN = |1.31 - 3.44| = <strong>2.13</strong><br><strong>B:</strong> 2.13 &gt; 1.7 → <strong>Ionic</strong>. MgO (magnesium oxide) is an ionic compound — a hard white solid used in refractory bricks and antacids. Mg gives 2 electrons to O, forming Mg^2+ and O^2-.</p>'
  },
  {
    id:'p65', difficulty:'medium', type:'multi', tag:'Bond Classification',
    q:'Which H–halogen bond is MORE polar: H–Cl or H–F? H EN = 2.20, Cl EN = 3.16, F EN = 3.98. Enter the bond with the higher ΔEN (write as: H-F or H-Cl).',
    isText:true, answer:'H-F',
    solution:'<p>ΔEN(H–F) = |2.20 - 3.98| = 1.78. ΔEN(H–Cl) = |2.20 - 3.16| = 0.96. <strong>H–F is more polar</strong> because F has a much higher electronegativity than Cl. Both bonds are in the polar covalent/ionic borderline, but H–F has a larger electron density shift toward fluorine.</p>'
  },
  {
    id:'p66', difficulty:'medium', type:'multi', tag:'Element Identification',
    q:'An unknown element X is in Period 3, Group 16. (A) How many valence electrons does X have? (B) Is X a metal, metalloid, or nonmetal? (C) What element is X? Enter the number of valence electrons.',
    answer:6, tolerance:0, unit:'valence electrons',
    solution:'<p><strong>A:</strong> Group 16 → <strong>6 valence electrons</strong>.<br><strong>B:</strong> Period 3, Group 16 is in the upper-right region → <strong>nonmetal</strong>.<br><strong>C:</strong> Period 3, Group 16 = <strong>Sulfur (S)</strong>. Config: [Ne] 3s^2 3p^4 — 6 electrons in level 3 ✓.</p>'
  },
  {
    id:'p67', difficulty:'medium', type:'multi', tag:'Element Identification',
    q:'Element Q has the electron configuration [Ne] 3s^2 3p^6. (A) What period is it in? (B) What group? (C) What element is it? Enter the group number.',
    answer:18, tolerance:0, unit:'',
    solution:'<p><strong>A:</strong> Outermost level is 3 → <strong>Period 3</strong>.<br><strong>B:</strong> Level 3 has 3s^2 + 3p^6 = 8 valence electrons → <strong>Group 18</strong>.<br><strong>C:</strong> Period 3, Group 18 = <strong>Argon (Ar)</strong>. Ar has a complete octet and is used in light bulbs and welding.</p>'
  },
  {
    id:'p68', difficulty:'medium', type:'multi', tag:'Isoelectronic Series',
    q:'The ions Na^+, Mg^2+, and Al^3+ all have 10 electrons. They have 11, 12, and 13 protons respectively. Rank from LARGEST to SMALLEST ionic radius. (Type as symbols separated by commas, largest first)',
    isText:true, answer:'Na+, Mg2+, Al3+',
    solution:'<p>For isoelectronic ions, more protons = smaller ion (same electrons pulled more tightly).</p><ul><li>Na^+: 11 protons → 102 pm</li><li>Mg^2+: 12 protons → 72 pm</li><li>Al^3+: 13 protons → 53 pm</li></ul><p>Largest to smallest: <strong>Na^+ &gt; Mg^2+ &gt; Al^3+</strong></p>'
  },
  {
    id:'p69', difficulty:'medium', type:'multi', tag:'Isoelectronic Series',
    q:'N^3-, O^2-, and F^- all have 10 electrons. N has 7 protons, O has 8, F has 9. Rank from LARGEST to SMALLEST ionic radius. (Type as symbols separated by commas, largest first)',
    isText:true, answer:'N3-, O2-, F-',
    solution:'<p>Same electron count (10), different proton counts. Fewer protons = less pull = larger ion.</p><ul><li>N^3-: 7 protons → 146 pm</li><li>O^2-: 8 protons → 140 pm</li><li>F^-: 9 protons → 133 pm</li></ul><p>Largest to smallest: <strong>N^3- &gt; O^2- &gt; F^-</strong></p>'
  },
  {
    id:'p70', difficulty:'medium', type:'multi', tag:'Periodic Position',
    q:'Element Z has 17 protons. (A) What period is it in? (B) What group? (C) How many valence electrons does it have? Enter the number of valence electrons.',
    answer:7, tolerance:0, unit:'valence electrons',
    solution:'<p><strong>A:</strong> Z = 17 → config [Ne] 3s^2 3p^5 → outermost level is 3 → <strong>Period 3</strong>.<br><strong>B:</strong> 2 + 5 = 7 valence electrons → <strong>Group 17</strong>.<br><strong>C:</strong> <strong>7 valence electrons</strong>.<br>The element is <strong>Chlorine (Cl)</strong> — a yellow-green gas and powerful disinfectant.</p>'
  },
  {
    id:'p71', difficulty:'medium', type:'multi', tag:'Trends Comparison',
    q:'Compare Rb (Period 5, Group 1) and Br (Period 4, Group 17). Which has the larger atomic radius? Enter the element symbol.',
    isText:true, answer:'Rb',
    solution:'<p><strong>Rb has the larger radius.</strong> Rb (Period 5, Group 1) = 248 pm; Br (Period 4, Group 17) = 114 pm. Rb is one period lower AND far to the left — both factors dramatically increase radius. As a bonus: Br has a much higher IE (1140 kJ/mol) than Rb (403 kJ/mol) because Br is smaller and to the right.</p>'
  },
  {
    id:'p72', difficulty:'medium', type:'multi', tag:'Bond Classification',
    q:'Classify each bond as ionic (I), polar covalent (P), or nonpolar covalent (N). Cutoffs: &lt;0.4=N, 0.4–1.7=P, &gt;1.7=I.\nBond 1: Ca–Cl (Ca EN=1.00, Cl EN=3.16)\nBond 2: H–I (H EN=2.20, I EN=2.66)\nBond 3: Cl–Cl (Cl EN=3.16)\nEnter the ΔEN for Bond 1.',
    answer:2.16, tolerance:0.05, unit:'',
    solution:'<p><strong>Bond 1 (Ca–Cl):</strong> ΔEN = |1.00 - 3.16| = 2.16 → <strong>Ionic</strong>. CaCl2 is calcium chloride, used on icy roads.<br><strong>Bond 2 (H–I):</strong> ΔEN = |2.20 - 2.66| = 0.46 → <strong>Polar covalent</strong>.<br><strong>Bond 3 (Cl–Cl):</strong> ΔEN = 0.00 → <strong>Nonpolar covalent</strong>. Identical atoms share equally.</p>'
  },
  {
    id:'p73', difficulty:'medium', type:'multi', tag:'Trends Comparison',
    q:'Without looking up values, predict which has higher first ionization energy: Cl (Period 3, Group 17) or S (Period 3, Group 16). Enter the element symbol.',
    isText:true, answer:'Cl',
    solution:'<p><strong>Cl</strong> has higher IE. Across Period 3, IE generally increases left to right. Cl (Group 17, 1251 kJ/mol) is to the right of S (Group 16, 1000 kJ/mol). Note: there is a small dip at Group 16 (O, S) due to electron pairing, but the overall trend still puts Cl above S.</p>'
  },
  {
    id:'p74', difficulty:'medium', type:'multi', tag:'Trends Comparison',
    q:'Rank these four elements from LOWEST to HIGHEST electronegativity: Cs, Na, Cl, F. (Type four symbols separated by commas, lowest first)',
    isText:true, answer:'Cs, Na, Cl, F',
    solution:'<p>EN increases toward the upper-right of the table. EN values: Cs (0.79) &lt; Na (0.93) &lt; Cl (3.16) &lt; F (3.98).<br>Lowest to highest: <strong>Cs, Na, Cl, F</strong>. Notice the large jump between Na (Group 1 metal) and Cl (Group 17 nonmetal).</p>'
  },
  {
    id:'p75', difficulty:'hard', type:'multi', tag:'Ion Formation',
    q:'Ca (atomic radius = 197 pm) → Ca^2+ (ionic radius = 100 pm). Cl (atomic radius = 99 pm) → Cl^- (ionic radius = 181 pm). Which change produced the larger absolute size change? Enter the size change (in pm) for Ca→Ca^2+.',
    answer:97, tolerance:2, unit:'pm',
    solution:'<p><strong>Ca→Ca^2+ change:</strong> 197 - 100 = <strong>97 pm</strong> (shrinks).<br><strong>Cl→Cl^- change:</strong> 181 - 99 = 82 pm (grows).<br>Ca→Ca^2+ produced the larger absolute change (97 vs 82 pm). Losing 2 electrons (and an entire energy level) causes more dramatic shrinkage than gaining 1 electron.</p>'
  },
  {
    id:'p76', difficulty:'medium', type:'multi', tag:'Element Identification',
    q:'Element W has 3 valence electrons and is in Period 2. (A) What group is W in? (B) Is W a metal, metalloid, or nonmetal? (C) What element is W? Enter the group number.',
    answer:13, tolerance:0, unit:'',
    solution:'<p><strong>A:</strong> 3 valence electrons → <strong>Group 13</strong>.<br><strong>B:</strong> Period 2, Group 13 is <strong>Boron (B)</strong>, which is a <strong>metalloid</strong>.<br><strong>C:</strong> <strong>Boron (B)</strong>. Config: 1s^2 2s^2 2p^1 — 3 level-2 electrons. B is the lightest metalloid, used in glass and ceramics.</p>'
  },
  {
    id:'p77', difficulty:'easy', type:'multi', tag:'Trends Comparison',
    q:'Compare F (Period 2) and I (Period 5), both in Group 17. Which has the higher electronegativity? Enter the element symbol.',
    isText:true, answer:'F',
    solution:'<p><strong>F has the higher electronegativity.</strong> EN: F = 3.98, I = 2.66. Moving down a group, EN decreases because the bonding electrons are farther from the nucleus and more shielded. F is the most electronegative element of all.<br>Atomic radius: I (133 pm) &gt; F (64 pm) — moving down Group 17 adds energy levels, increasing radius.</p>'
  },
  {
    id:'p78', difficulty:'easy', type:'multi', tag:'Bond Classification',
    q:'Predict whether CsF is ionic, polar covalent, or nonpolar covalent. Cs EN = 0.79, F EN = 3.98. Calculate ΔEN and classify. Enter ΔEN.',
    answer:3.19, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |0.79 - 3.98| = <strong>3.19</strong> → <strong>Ionic</strong>. CsF has the largest EN difference of any common binary compound — Cs is in the extreme lower-left (lowest EN) and F is in the upper-right (highest EN). CsF is a strongly ionic salt with a melting point of 682°C.</p>'
  },
  {
    id:'p79', difficulty:'easy', type:'multi', tag:'Periodic Position',
    q:'An unknown element has the configuration [Ar] 4s^1. (A) What period is it in? (B) What group? (C) How many valence electrons? Enter the period number.',
    answer:4, tolerance:0, unit:'',
    solution:'<p><strong>A:</strong> Outermost electron is in level 4 → <strong>Period 4</strong>.<br><strong>B:</strong> Ends in 4s^1 → 1 valence electron → <strong>Group 1</strong>.<br><strong>C:</strong> <strong>1 valence electron</strong>.<br>The element is <strong>Potassium (K)</strong> — an alkali metal essential to the human body as an electrolyte.</p>'
  },
  {
    id:'p80', difficulty:'easy', type:'multi', tag:'Trends Comparison',
    q:'Compare Na (Period 3, Group 1) and Cl (Period 3, Group 17). Which has the larger atomic radius? Enter the element symbol.',
    isText:true, answer:'Na',
    solution:'<p><strong>Na has the larger atomic radius.</strong> Na (186 pm) vs Cl (99 pm). Within Period 3, moving from Group 1 (Na) to Group 17 (Cl), protons increase but valence electrons stay in level 3. More protons pull electrons inward more tightly.<br>IE comparison: Cl (1251 kJ/mol) has much higher IE than Na (496 kJ/mol) — smaller atom + farther right = harder to remove an electron.</p>'
  },
  {
    id:'p81', difficulty:'easy', type:'multi', tag:'Bond Classification',
    q:'Classify the Ba–O bond. Ba EN = 0.89, O EN = 3.44. (A) Calculate ΔEN. (B) Classify as ionic, polar covalent, or nonpolar covalent. Enter ΔEN.',
    answer:2.55, tolerance:0.05, unit:'',
    solution:'<p><strong>A:</strong> ΔEN = |0.89 - 3.44| = <strong>2.55</strong>.<br><strong>B:</strong> 2.55 &gt; 1.7 → <strong>Ionic</strong>. BaO is barium oxide — a white ionic solid. Ba is a Group 2 metal (Period 6, EN = 0.89) and O is a reactive nonmetal (Period 2, EN = 3.44). Metal + nonmetal with large EN difference = ionic compound.</p>'
  },


  /* ══════════════════════════════════════════════════
      NEW PROBLEMS  (p82–p84)
  ══════════════════════════════════════════════════ */

  {
    id:'p82', difficulty:'easy', type:'calc', tag:'Ion Formation',
    q:'Oxygen (O) is in Group 16, Period 2. How many electrons must oxygen gain to achieve a complete octet and form its most stable ion?',
    answer:2, tolerance:0, unit:'electrons',
    solution:'<p>Group 16 elements have 6 valence electrons. A complete octet requires 8.</p><p>Electrons gained = 8 - 6 = <strong>2 electrons</strong>.</p><p>Oxygen forms the <strong>oxide ion, O^2-</strong>: 8 protons and 10 electrons → net charge = 8 - 10 = -2 ✓.</p><p>Pattern: all Group 16 elements (O, S, Se, Te) gain 2 electrons to form 2- ions; all Group 17 elements gain 1 to form 1- ions. The number of electrons gained = 8 - (valence electrons).</p>'
  },

  {
    id:'p83', difficulty:'medium', type:'concept', tag:'Metallic Character',
    q:'Which statement best describes how metallic character changes moving left to right across a period?',
    choices:[
      'A. It increases, because each element has more protons and protons define metallic behavior',
      'B. It decreases, because atoms become smaller and hold their electrons more tightly, making them less likely to lose electrons',
      'C. It stays the same, because all elements in a period share the same outermost energy level',
      'D. It first increases, then decreases, peaking at the transition metals in the middle'
    ],
    correct:1,
    solution:'<p><strong>B — metallic character decreases left to right across a period.</strong></p><p>Metals are characterized by their tendency to <em>lose</em> electrons. Moving left to right across a period, nuclear charge increases, atoms shrink, and valence electrons are held progressively more tightly. This makes elements less willing to lose electrons and more inclined to gain them — the hallmark of nonmetallic behavior.</p><p>Example — Period 3: Na (highly reactive metal) → Mg → Al (metal) → Si (metalloid) → P → S → Cl (reactive nonmetal). The staircase line on the periodic table marks this transition from metal to nonmetal. The same trend works going <em>up</em> a group (smaller atom = more nonmetallic).</p>'
  },

  {
    id:'p84', difficulty:'hard', type:'multi', tag:'Successive Ionization Energies',
    q:'Element X has successive ionization energies: IE1 = 738 kJ/mol, IE2 = 1451 kJ/mol, IE3 = 7733 kJ/mol. The enormous jump between IE2 and IE3 reveals how many valence electrons element X has. Enter that number.',
    answer:2, tolerance:0, unit:'valence electrons',
    solution:'<p>A dramatic jump in successive ionization energies occurs when you begin removing a <strong>core (inner-shell) electron</strong>, which is held far more tightly than valence electrons.</p><p>The jump here is between IE2 and IE3: removing the 1st and 2nd electrons is relatively easy (738 and 1451 kJ/mol), but the 3rd costs 7733 kJ/mol — more than five times harder. This tells you the first two electrons are valence electrons and the third is a core electron.</p><p>Conclusion: element X has <strong>2 valence electrons → Group 2</strong>. These values belong to <strong>magnesium (Mg)</strong>: its two 3s^2 valence electrons are removed at IE1 and IE2; IE3 reaches into the filled 2p core level, requiring vastly more energy.</p><p>This technique — looking for the big jump — is one of the most reliable experimental ways to determine an element\'s group.</p>'
  },

  /* ══════════════════════════════════════════════════
      EXPANSION BATCH — 60 problems (20 easy / 25 medium / 15 hard)
  ══════════════════════════════════════════════════ */

  // ── EASY (20) ──
  {id:'p85', difficulty:'easy', type:'calc', tag:'Valence Electrons', q:'Nitrogen (N) is in Group 15. How many valence electrons does a nitrogen atom have?', answer:5, tolerance:0, unit:'valence electrons', solution:'<p>Group 15 → <strong>5 valence electrons</strong>. N = 1s^2 2s^2 2p^3; level 2 has 2 + 3 = 5 electrons.</p>'},
  {id:'p86', difficulty:'easy', type:'calc', tag:'Valence Electrons', q:'Magnesium (Mg) is in Group 2. How many valence electrons does magnesium have?', answer:2, tolerance:0, unit:'valence electrons', solution:'<p>Group 2 → <strong>2 valence electrons</strong>. Mg = [Ne] 3s^2.</p>'},
  {id:'p87', difficulty:'easy', type:'calc', tag:'Valence Electrons', q:'Chlorine (Cl) is in Group 17. How many valence electrons does chlorine have?', answer:7, tolerance:0, unit:'valence electrons', solution:'<p>Group 17 → <strong>7 valence electrons</strong>. Cl = [Ne] 3s^2 3p^5.</p>'},
  {id:'p88', difficulty:'easy', type:'calc', tag:'Valence Electrons', q:'Carbon (C) is in Group 14. How many valence electrons does carbon have?', answer:4, tolerance:0, unit:'valence electrons', solution:'<p>Group 14 → <strong>4 valence electrons</strong>. C = 1s^2 2s^2 2p^2.</p>'},
  {id:'p89', difficulty:'easy', type:'calc', tag:'Period & Group', q:'Neon (Ne) has atomic number 10, configuration 1s^2 2s^2 2p^6. What period is neon in?', answer:2, tolerance:0, unit:'', solution:'<p>Outermost occupied level is 2 → <strong>Period 2</strong>.</p>'},
  {id:'p90', difficulty:'easy', type:'calc', tag:'Period & Group', q:'Barium (Ba) has atomic number 56, configuration [Xe] 6s^2. What group is barium in?', answer:2, tolerance:0, unit:'', solution:'<p>Ends in 6s^2 → 2 valence electrons → <strong>Group 2</strong>. Ba is an alkaline earth metal.</p>'},
  {id:'p91', difficulty:'easy', type:'calc', tag:'Period & Group', q:'Rubidium (Rb) has atomic number 37, configuration [Kr] 5s^1. What period is rubidium in?', answer:5, tolerance:0, unit:'', solution:'<p>Outermost electron is in level 5 → <strong>Period 5</strong>.</p>'},
  {id:'p92', difficulty:'easy', type:'calc', tag:'Period & Group', q:'Iodine (I) has atomic number 53. What period is iodine in?', answer:5, tolerance:0, unit:'', solution:'<p>I = [Kr] 5s^2 4d^10 5p^5. Outermost occupied level is 5 → <strong>Period 5</strong>.</p>'},
  {id:'p93', difficulty:'easy', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the C–H bond. C EN = 2.55, H EN = 2.20.', answer:0.35, tolerance:0.05, unit:'', solution:'<p>ΔEN = |2.55 - 2.20| = <strong>0.35</strong>. Nonpolar covalent (< 0.4) — one of the least polar common bonds, found throughout organic chemistry.</p>'},
  {id:'p94', difficulty:'easy', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Na–F bond. Na EN = 0.93, F EN = 3.98.', answer:3.05, tolerance:0.05, unit:'', solution:'<p>ΔEN = |0.93 - 3.98| = <strong>3.05</strong>. Strongly ionic (> 1.7). NaF is used in fluoridated water and toothpaste.</p>'},
  {id:'p95', difficulty:'easy', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the O–H bond. O EN = 3.44, H EN = 2.20.', answer:1.24, tolerance:0.05, unit:'', solution:'<p>ΔEN = |3.44 - 2.20| = <strong>1.24</strong>. Polar covalent (0.4–1.7). This is why water molecules are polar and capable of hydrogen bonding.</p>'},
  {id:'p96', difficulty:'easy', type:'concept', tag:'Element Classification', q:'Which of the following is a noble gas?', choices:['Xenon', 'Sodium', 'Sulfur', 'Calcium'], correct:0, solution:'<p><strong>Xenon</strong> is a Group 18 noble gas. Sodium is an alkali metal, sulfur is a nonmetal (Group 16), and calcium is an alkaline earth metal.</p>'},
  {id:'p97', difficulty:'easy', type:'concept', tag:'Element Classification', q:'Which of the following is an alkaline earth metal?', choices:['Magnesium', 'Potassium', 'Bromine', 'Helium'], correct:0, solution:'<p><strong>Magnesium</strong> is in Group 2, the alkaline earth metals. Potassium is Group 1 (alkali metal), bromine is Group 17 (halogen), and helium is Group 18 (noble gas).</p>'},
  {id:'p98', difficulty:'easy', type:'concept', tag:'Electronegativity', q:'A bond has ΔEN = 0.00. What type of bond is this?', choices:['Ionic', 'Polar covalent', 'Nonpolar covalent', 'Metallic'], correct:2, solution:'<p><strong>Nonpolar covalent.</strong> A ΔEN of exactly 0 means both atoms attract bonding electrons equally — always true when two atoms of the same element bond, like Cl–Cl or O=O.</p>'},
  {id:'p99', difficulty:'easy', type:'concept', tag:'Electronegativity', q:'A bond has ΔEN = 3.5. What type of bond is this?', choices:['Ionic', 'Polar covalent', 'Nonpolar covalent', 'Metallic'], correct:0, solution:'<p><strong>Ionic.</strong> ΔEN > 1.7 → ionic. A difference this large means one atom essentially takes an electron entirely from the other.</p>'},
  {id:'p100', difficulty:'easy', type:'concept', tag:'Table Organization', q:'Which group number corresponds to elements with 8 valence electrons (except helium, which has 2)?', choices:['Group 1', 'Group 8', 'Group 18', 'Group 2'], correct:2, solution:'<p><strong>Group 18</strong>, the noble gases. They have a complete outer octet (8 valence electrons), making them extremely stable and unreactive.</p>'},
  {id:'p101', difficulty:'easy', type:'concept', tag:'Ion Formation', q:'An anion always has _____ electrons than its parent neutral atom.', choices:['Fewer', 'More', 'The same number of', 'Zero'], correct:1, solution:'<p><strong>More.</strong> Anions form when an atom gains electrons, so they always have more electrons than protons — and more electrons than the neutral atom started with.</p>'},
  {id:'p102', difficulty:'easy', type:'concept', tag:'Ion Formation', q:'A cation always has _____ electrons than its parent neutral atom.', choices:['Fewer', 'More', 'The same number of', 'Zero'], correct:0, solution:'<p><strong>Fewer.</strong> Cations form when an atom loses electrons, so they always have fewer electrons than protons — and fewer electrons than the neutral atom started with.</p>'},
  {id:'p103', difficulty:'easy', type:'concept', tag:'Electronegativity', q:'Which region of the periodic table contains elements with the LOWEST electronegativity?', choices:['Upper right', 'Lower left', 'Upper left', 'Lower right'], correct:1, solution:'<p><strong>Lower left.</strong> Electronegativity increases toward the upper right (where F sits, EN=3.98) and decreases toward the lower left (where Fr and Cs sit, EN≈0.7-0.8).</p>'},
  {id:'p104', difficulty:'easy', type:'concept', tag:'Ionization Energy', q:'Which region of the periodic table contains elements with the HIGHEST first ionization energy?', choices:['Upper right', 'Lower left', 'Upper left', 'Lower right'], correct:0, solution:'<p><strong>Upper right</strong> (excluding the noble gas group itself, which is highest of all within each period). Small atoms with high nuclear charge hold their electrons most tightly.</p>'},

  // ── MEDIUM (25) ──
  {id:'p105', difficulty:'medium', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Ca–F bond. Ca EN = 1.00, F EN = 3.98.', answer:2.98, tolerance:0.05, unit:'', solution:'<p>ΔEN = |1.00 - 3.98| = <strong>2.98</strong>. Ionic (> 1.7). CaF2 (fluorite) is a common ionic mineral.</p>'},
  {id:'p106', difficulty:'medium', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the P–Cl bond. P EN = 2.19, Cl EN = 3.16.', answer:0.97, tolerance:0.05, unit:'', solution:'<p>ΔEN = |2.19 - 3.16| = <strong>0.97</strong>. Polar covalent (0.4–1.7). PCl3 and PCl5 are common phosphorus chlorides used in industrial synthesis.</p>'},
  {id:'p107', difficulty:'medium', type:'calc', tag:'Ionization Energy', q:'The first ionization energy of Mg is 738 kJ/mol and of Ca is 590 kJ/mol. How many kJ/mol higher is magnesium\'s ionization energy than calcium\'s?', answer:148, tolerance:3, unit:'kJ/mol', solution:'<p>Difference = 738 - 590 = <strong>148 kJ/mol</strong>. Mg (Period 3) is smaller than Ca (Period 4), so its valence electrons are closer to the nucleus and harder to remove.</p>'},
  {id:'p108', difficulty:'medium', type:'calc', tag:'Ion Size', q:'The atomic radius of Br is 114 pm. The ionic radius of Br^- is 196 pm. By how many picometers did the radius increase when Br gained one electron?', answer:82, tolerance:2, unit:'pm', solution:'<p>Increase = 196 - 114 = <strong>82 pm</strong>. Gaining an electron adds electron-electron repulsion, spreading the electron cloud outward.</p>'},
  {id:'p109', difficulty:'medium', type:'calc', tag:'Ion Size', q:'The atomic radius of Mg is 160 pm. The ionic radius of Mg^2+ is 72 pm. By how many picometers did the radius decrease when Mg lost two electrons?', answer:88, tolerance:2, unit:'pm', solution:'<p>Decrease = 160 - 72 = <strong>88 pm</strong>. Losing both 3s electrons drops the outermost occupied level from n=3 to n=2, causing a dramatic shrinkage.</p>'},
  {id:'p110', difficulty:'medium', type:'concept', tag:'Atomic Radius Trend', q:'Which of the following correctly ranks F, O, and N (all Period 2) by INCREASING atomic radius?', choices:['F < O < N', 'N < O < F', 'O < F < N', 'They are equal'], correct:0, solution:'<p><strong>F < O < N.</strong> Across a period, atomic radius decreases left to right due to increasing nuclear charge. Since N is leftmost of the three (Group 15), O is next (Group 16), and F is rightmost (Group 17), radius increases in the reverse order: F < O < N.</p>'},
  {id:'p111', difficulty:'medium', type:'concept', tag:'Ionization Energy', q:'Which of the following correctly ranks Cs, K, and Na (all Group 1) by INCREASING first ionization energy?', choices:['Cs < K < Na', 'Na < K < Cs', 'K < Cs < Na', 'They are equal'], correct:0, solution:'<p><strong>Cs < K < Na.</strong> Ionization energy decreases moving down a group. Cs (Period 6) is lowest, Na (Period 3) is highest of these three, so increasing order is Cs < K < Na.</p>'},
  {id:'p112', difficulty:'medium', type:'concept', tag:'Element Classification', q:'Aluminum (Al) is classified as a:', choices:['Nonmetal', 'Metal', 'Metalloid', 'Noble gas'], correct:1, solution:'<p><strong>Metal.</strong> Al is just to the left of the metalloid staircase (which starts at boron), so it is classified as a metal, not a metalloid, despite being close to the border.</p>'},
  {id:'p113', difficulty:'medium', type:'concept', tag:'Element Classification', q:'Germanium (Ge) is classified as a:', choices:['Metal', 'Metalloid', 'Nonmetal', 'Noble gas'], correct:1, solution:'<p><strong>Metalloid.</strong> Ge sits directly on the staircase line, giving it properties between metals and nonmetals — it is a well-known semiconductor, like silicon.</p>'},
  {id:'p114', difficulty:'medium', type:'concept', tag:'Ionization Energy', q:'Which of the following best explains why Mg has a higher ionization energy than Na, even though Mg has one more electron to remove electrons past?', choices:['Mg has one more proton than Na, and both valence electrons are still in the same energy level, so the extra nuclear charge dominates', 'Mg is a nonmetal so it always has higher IE', 'Na has more valence electrons than Mg', 'IE is unrelated to nuclear charge'], correct:0, solution:'<p>Mg (12 protons) and Na (11 protons) both have valence electrons in level 3. The extra proton in Mg increases nuclear attraction on those electrons without adding a new energy level, making Mg\'s valence electrons harder to remove.</p>'},
  {id:'p115', difficulty:'medium', type:'calc', tag:'Successive Ionization Energies', q:'Successive ionization energies of an unknown element: IE1 = 580 kJ/mol, IE2 = 1815 kJ/mol, IE3 = 2740 kJ/mol, IE4 = 11600 kJ/mol. The huge jump reveals how many valence electrons this element has?', answer:3, tolerance:0, unit:'valence electrons', solution:'<p>The jump occurs between IE3 and IE4 — removing the 4th electron costs over 4× more than the 3rd. This means the first 3 electrons removed were valence electrons, and the 4th reached into the core. <strong>3 valence electrons</strong> (this matches aluminum, Group 13).</p>'},
  {id:'p116', difficulty:'medium', type:'concept', tag:'Isoelectronic Series', q:'O^2- and F^- are isoelectronic (both have 10 electrons), but O has 8 protons and F has 9. Which ion is LARGER?', choices:['O^2-, because fewer protons means less pull on the same 10 electrons', 'F^-, because it has more protons', 'They are the same size', 'Cannot be determined'], correct:0, solution:'<p><strong>O^2- is larger.</strong> For isoelectronic ions, fewer protons means weaker attraction on the shared electron count, so the electron cloud is held less tightly and spreads out more.</p>'},
  {id:'p117', difficulty:'medium', type:'concept', tag:'Electronegativity', q:'Astatine (At) is in Group 17, Period 6. Compared to fluorine (Group 17, Period 2), astatine\'s electronegativity would be predicted to be:', choices:['Much higher', 'Much lower', 'Exactly the same', 'Impossible to predict'], correct:1, solution:'<p><strong>Much lower.</strong> Electronegativity decreases moving down a group. At\'s valence electrons are in level 6, far more shielded and distant from the nucleus than F\'s level-2 electrons.</p>'},
  {id:'p118', difficulty:'medium', type:'calc', tag:'Valence Electrons', q:'Gallium (Ga) is in Group 13. How many valence electrons does gallium have?', answer:3, tolerance:0, unit:'valence electrons', solution:'<p>Group 13 → <strong>3 valence electrons</strong>. Ga = [Ar] 3d^10 4s^2 4p^1; level 4 has 2 + 1 = 3 electrons.</p>'},
  {id:'p119', difficulty:'medium', type:'calc', tag:'Valence Electrons', q:'Xenon (Xe) is in Group 18. How many valence electrons does xenon have?', answer:8, tolerance:0, unit:'valence electrons', solution:'<p>Group 18 → <strong>8 valence electrons</strong> (a complete octet), except for helium which has only 2.</p>'},
  {id:'p120', difficulty:'medium', type:'concept', tag:'Ionization Energy', q:'Which best explains why noble gases have very high ionization energies?', choices:['Their complete octet is extremely stable, so removing an electron disrupts a favorable, low-energy arrangement', 'They have very few protons', 'They are always gases', 'They have no electrons to remove'], correct:0, solution:'<p>Noble gases have a full, stable valence shell. Disrupting that stability by removing an electron requires significantly more energy than removing an electron from an atom with an incomplete shell.</p>'},
  {id:'p121', difficulty:'medium', type:'concept', tag:'Bond Classification', q:'Predict the bond type for the Rb–I bond, given Rb is a very electropositive metal (Group 1, Period 5) and I is a reactive nonmetal (Group 17, Period 5).', choices:['Ionic', 'Nonpolar covalent', 'Metallic', 'Cannot be predicted from position alone'], correct:0, solution:'<p><strong>Ionic.</strong> A Group 1 metal (very low EN) bonding with a Group 17 nonmetal (high EN) reliably produces a large ΔEN, characteristic of ionic bonding — matching the pattern seen in NaCl, KBr, and similar salts.</p>'},
  {id:'p122', difficulty:'medium', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Be–Cl bond. Be EN = 1.57, Cl EN = 3.16.', answer:1.59, tolerance:0.05, unit:'', solution:'<p>ΔEN = |1.57 - 3.16| = <strong>1.59</strong>. Polar covalent, just below the 1.7 ionic cutoff — BeCl2 is unusual among Group 2 halides for having significant covalent character.</p>'},
  {id:'p123', difficulty:'medium', type:'concept', tag:'Periodic Trends', q:'Which statement correctly describes electron affinity\'s general relationship to electronegativity across the periodic table?', choices:['They generally follow the same trend — increasing toward the upper right, since both relate to an atom\'s attraction for electrons', 'They are always opposite trends', 'Electron affinity is only relevant for metals', 'There is no relationship'], correct:0, solution:'<p>Both electronegativity and electron affinity describe an atom\'s tendency to attract electrons, so they both generally increase toward the upper right of the periodic table (with some exceptions, particularly among the noble gases).</p>'},
  {id:'p124', difficulty:'medium', type:'calc', tag:'Successive Ionization Energies', q:'Successive ionization energies of an unknown element: IE1 = 496 kJ/mol, IE2 = 4560 kJ/mol, IE3 = 6910 kJ/mol. The huge jump reveals how many valence electrons this element has?', answer:1, tolerance:0, unit:'valence electrons', solution:'<p>The jump occurs immediately, between IE1 and IE2 — the 2nd electron costs over 9× more than the 1st. This means only 1 electron was a valence electron. <strong>1 valence electron</strong> (this matches sodium, Group 1).</p>'},
  {id:'p125', difficulty:'medium', type:'concept', tag:'Isoelectronic Series', q:'X (19 protons, forming X^+) and Y (16 protons, forming Y^2-) are both isoelectronic with 18 electrons. Which ion has the LARGER ionic radius?', choices:['Y, because fewer protons pull less strongly on the same 18 electrons', 'X, because it has more protons', 'They are the same size', 'Cannot be determined'], correct:0, solution:'<p><strong>Y is larger.</strong> With the same electron count (18), the ion with fewer protons (Y, 16) experiences weaker nuclear attraction than the ion with more protons (X, 19), so its electron cloud is less tightly held and spreads out more.</p>'},
  {id:'p126', difficulty:'medium', type:'concept', tag:'Ion Formation', q:'Which statement correctly compares the radius of a transition metal cation, like Fe^2+, to neutral Fe?', choices:['Fe^2+ is smaller than Fe, because it has lost 2 electrons', 'Fe^2+ is larger than Fe', 'They are the same size', 'Fe^2+ has more protons than Fe'], correct:0, solution:'<p><strong>Fe^2+ is smaller.</strong> This follows the same universal rule as main-group cations: losing electrons reduces electron-electron repulsion and lets the remaining electrons be pulled in more tightly by the unchanged nuclear charge.</p>'},
  {id:'p127', difficulty:'medium', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Sr–Br bond. Sr EN = 0.95, Br EN = 2.96.', answer:2.01, tolerance:0.05, unit:'', solution:'<p>ΔEN = |0.95 - 2.96| = <strong>2.01</strong>. Ionic (> 1.7). SrBr2 is strontium bromide, an ionic salt.</p>'},
  {id:'p128', difficulty:'medium', type:'concept', tag:'Table Organization', q:'Which of these elements would have chemical properties most similar to sulfur (S, Group 16)?', choices:['Selenium (Se, Group 16)', 'Chlorine (Cl, Group 17)', 'Phosphorus (P, Group 15)', 'Silicon (Si, Group 14)'], correct:0, solution:'<p><strong>Selenium.</strong> Elements in the same group share the same valence electron count and therefore similar chemical behavior. Se, like S, has 6 valence electrons and forms similar compounds (like Se^2- vs S^2-).</p>'},
  {id:'p129', difficulty:'medium', type:'concept', tag:'Table Organization', q:'Why don\'t transition metals follow the simple "group number = valence electrons" rule used for main-group elements?', choices:['Because transition metals fill d sublevels, and their outermost electron count doesn\'t follow the same simple s/p pattern as main-group elements', 'Because transition metals have no valence electrons', 'Because transition metals are not real elements', 'Because the periodic table is organized incorrectly for transition metals'], correct:0, solution:'<p>Main-group valence electron counting works because those elements fill only s and p sublevels in a simple pattern matching group number. Transition metals fill d sublevels (and sometimes shift electrons between s and d, as in Cr and Cu), making a simple group-number rule inapplicable.</p>'},

  // ── HARD (15) ──
  {id:'p130', difficulty:'hard', type:'multi', tag:'Successive Ionization Energies', q:'An unknown element has successive ionization energies: IE1=578, IE2=1817, IE3=2745, IE4=11577, IE5=14842, IE6=18379 (all kJ/mol). How many valence electrons does this element have?', answer:'3', isText:true, tolerance:0, solution:'<p>The huge jump occurs between IE3 and IE4 (over 4× increase) — the first 3 electrons removed are valence electrons; the 4th reaches into the core. <strong>3 valence electrons</strong> (Group 13). This data matches real aluminum.</p>'},
  {id:'p131', difficulty:'hard', type:'multi', tag:'Isoelectronic Series', q:'Rank these three isoelectronic ions (all 10 electrons) from SMALLEST to LARGEST ionic radius: Mg^2+ (12 protons), Na^+ (11 protons), F^- (9 protons).', answer:'Mg2+, Na+, F-', isText:true, tolerance:0, solution:'<p>For isoelectronic ions, more protons = stronger pull = smaller radius. Mg^2+ (12 protons) is smallest, F^- (9 protons) is largest. <strong>Mg^2+ < Na^+ < F^-</strong></p>'},
  {id:'p132', difficulty:'hard', type:'concept', tag:'Ionization Energy', q:'Mg (IE1 = 738 kJ/mol) has a higher ionization energy than Al (IE1 = 578 kJ/mol), even though Al has one more proton. Why?', choices:['Al\'s outermost electron is in the higher-energy 3p sublevel (from a 3s^2 3p^1 configuration), which is easier to remove than Mg\'s paired 3s^2 electron', 'Al has fewer neutrons, making it less stable', 'Al is a nonmetal so it always has lower IE', 'Al has more valence electrons, overwhelming the nucleus'], correct:0, solution:'<p>This mirrors the Be/B anomaly in Period 2. Mg ends in 3s^2 (lower energy sublevel); Al ends in 3s^2 3p^1 — the 3p electron is higher in energy and more shielded, making it easier to remove despite Al\'s extra proton.</p>'},
  {id:'p133', difficulty:'hard', type:'concept', tag:'Ionization Energy', q:'S (IE1 = 1000 kJ/mol) has a slightly lower ionization energy than P (IE1 = 1012 kJ/mol), even though S has one more proton. Why?', choices:['S\'s 3p^4 configuration has one paired electron; electron-electron repulsion in that pair makes it easier to remove than P\'s half-filled, unpaired 3p^3', 'S has fewer valence electrons than P', 'S is a metal so it has lower IE', 'P has more protons than S'], correct:0, solution:'<p>This mirrors the N/O anomaly in Period 2. P has a stable half-filled 3p^3 (three unpaired electrons). S has 3p^4 — one orbital now holds a pair, and the repulsion in that pair makes the paired electron easier to remove, despite S having more protons.</p>'},
  {id:'p134', difficulty:'hard', type:'multi', tag:'Successive Ionization Energies', q:'An unknown Group 2 element has successive ionization energies IE1=899, IE2=1757, IE3=14849 (kJ/mol). The huge jump between IE2 and IE3 confirms how many valence electrons?', answer:'2', isText:true, tolerance:0, solution:'<p>The jump appears immediately after the 2nd electron — removing the 3rd costs over 8× more. This confirms <strong>2 valence electrons</strong> (Group 2, matching beryllium).</p>'},
  {id:'p135', difficulty:'hard', type:'multi', tag:'Isoelectronic Series', q:'Rank these four species (all isoelectronic with 10 electrons) from SMALLEST to LARGEST ionic radius: Al^3+ (13 protons), Mg^2+ (12 protons), Na^+ (11 protons), O^2- (8 protons).', answer:'Al3+, Mg2+, Na+, O2-', isText:true, tolerance:0, solution:'<p>More protons = smaller ion for the same electron count. Ranking by protons (13, 12, 11, 8): <strong>Al^3+ < Mg^2+ < Na^+ < O^2-</strong></p>'},
  {id:'p136', difficulty:'hard', type:'concept', tag:'Isoelectronic Series', q:'Al^3+ (13 protons) and F^- (9 protons) are both isoelectronic with neon (10 electrons). Why is Al^3+ smaller than F^-?', choices:['Al^3+ has more protons pulling on the same 10-electron cloud, resulting in stronger attraction and a smaller radius', 'Al^3+ has fewer electrons than F^-', 'F^- is a cation and therefore larger', 'Ionic charge does not affect radius'], correct:0, solution:'<p>Both ions have exactly 10 electrons, but Al^3+ has 13 protons compared to F^-\'s 9. The extra positive charge pulls the shared electron cloud in much more tightly, making Al^3+ noticeably smaller.</p>'},
  {id:'p137', difficulty:'hard', type:'concept', tag:'Periodic Trends', q:'Electronegativity increases toward the upper-right of the periodic table, while atomic radius increases toward the lower-left — opposite directions. Why?', choices:['Electronegativity depends on how strongly an atom attracts bonding electrons (favored by high nuclear charge, low shielding — upper right); atomic radius depends on how far out the valence shell extends (favored by more energy levels and less nuclear pull — lower left); these are different underlying effects that happen to point oppositely', 'Both trends are caused by the same effect and should point the same direction', 'Electronegativity and atomic radius are unrelated to nuclear charge', 'Shielding has no effect on either trend'], correct:0, solution:'<p>Electronegativity favors strong nuclear pull with little shielding (small, highly charged atoms — upper right). Atomic radius favors more energy levels and weaker relative nuclear pull per level (larger atoms — lower left). Both trends do relate to nuclear charge and shielding, but the specific property each measures leads them in opposite geographic directions on the table.</p>'},
  {id:'p138', difficulty:'hard', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Fr–F bond — the most extreme electronegativity difference possible on the periodic table. Fr EN = 0.70, F EN = 3.98.', answer:3.28, tolerance:0.05, unit:'', solution:'<p>ΔEN = |0.70 - 3.98| = <strong>3.28</strong>. This represents the two most extreme positions on the periodic table for electronegativity — Fr (lower-left) and F (upper-right) — producing the largest possible EN gap.</p>'},
  {id:'p139', difficulty:'hard', type:'multi', tag:'Periodic Position', q:'An element has the configuration [Kr] 5s^2 4d^10 5p^1. Determine its period, group, valence electron count, and predict its classification.', answer:'Period 5, Group 13, 3 valence electrons, metal', isText:true, tolerance:0, solution:'<p>Outermost level is 5 → <strong>Period 5</strong>. 5s^2 + 5p^1 = 3 valence electrons → <strong>Group 13</strong>. This element is indium (In), which is a <strong>metal</strong> (Group 13 metals are to the left of the metalloid staircase, except boron).</p>'},
  {id:'p140', difficulty:'hard', type:'concept', tag:'Periodic Trends', q:'Moving down Group 17 from F to I, both atomic radius and ionic radius (X^-) increase together, while electronegativity decreases. What single underlying cause explains all three trends?', choices:['Each period adds a new energy level, moving valence electrons farther from the nucleus, which increases size but weakens the atom\'s pull on electrons', 'Radius and electronegativity always move in the same direction', 'Ionic radius is unrelated to atomic radius', 'These trends only apply to metals'], correct:0, solution:'<p>All three properties trace back to the same cause: each step down a group adds a new occupied energy level. A larger, farther-out valence shell means both a bigger atom/ion (larger radius) and weaker attraction on bonding electrons (lower electronegativity).</p>'},
  {id:'p141', difficulty:'hard', type:'multi', tag:'Isoelectronic Series', q:'Cl^- (17 protons), K^+ (19 protons), and Ca^2+ (20 protons) are all isoelectronic with 18 electrons. Rank from LARGEST to SMALLEST ionic radius.', answer:'Cl-, K+, Ca2+', isText:true, tolerance:0, solution:'<p>Fewer protons = larger radius for the same electron count. Cl^- (17 protons) is largest; Ca^2+ (20 protons) is smallest. <strong>Cl^- > K^+ > Ca^2+</strong></p>'},
  {id:'p142', difficulty:'hard', type:'calc', tag:'Successive Ionization Energies', q:'An unknown element has successive ionization energies: IE1=1000, IE2=2251, IE3=3361, IE4=4564, IE5=7013, IE6=8496, IE7=27107 (kJ/mol). How many valence electrons does it have?', answer:6, tolerance:0, unit:'valence electrons', solution:'<p>The huge jump occurs between IE6 and IE7. The first 6 electrons removed are valence electrons; the 7th reaches into the core. <strong>6 valence electrons</strong> (Group 16, matching sulfur).</p>'},
  {id:'p143', difficulty:'hard', type:'concept', tag:'Successive Ionization Energies', q:'Sodium\'s IE1=496 shows a huge jump to IE2=4560, but magnesium doesn\'t jump until IE3=7730 (after IE1=738, IE2=1450). Why do the jumps appear at different points?', choices:['Na has 1 valence electron (Group 1), so removing the 2nd electron reaches into the core immediately; Mg has 2 valence electrons (Group 2), so the jump doesn\'t appear until the 3rd removal', 'Both elements have the same number of valence electrons', 'Mg\'s jump appears earlier than Na\'s', 'Ionization energy jumps are random and unrelated to valence electrons'], correct:0, solution:'<p>The jump location directly reveals valence electron count. Na, with only 1 valence electron, hits the core on the very next removal. Mg, with 2 valence electrons, doesn\'t hit the core until the 3rd removal.</p>'},
  {id:'p144', difficulty:'hard', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Cs–O bond, an extreme case: the least electronegative common metal versus a highly electronegative nonmetal. Cs EN = 0.79, O EN = 3.44.', answer:2.65, tolerance:0.05, unit:'', solution:'<p>ΔEN = |0.79 - 3.44| = <strong>2.65</strong>. Strongly ionic. Cs2O is a highly reactive ionic compound.</p>'},

  /* ══════════════════════════════════════════════════
      HARD EXPANSION BATCH — 30 additional hard problems
  ══════════════════════════════════════════════════ */
  {id:'p145', difficulty:'hard', type:'calc', tag:'Successive Ionization Energies', q:'Successive ionization energies: IE1=590, IE2=1145, IE3=4912 (kJ/mol). The huge jump reveals how many valence electrons?', answer:2, tolerance:0, unit:'valence electrons', solution:'<p>Jump occurs after the 2nd electron. <strong>2 valence electrons</strong> (matches calcium, Group 2).</p>'},
  {id:'p146', difficulty:'hard', type:'multi', tag:'Trends Comparison', q:'Rank these four Group 17 elements from SMALLEST to LARGEST atomic radius: Cl, Br, F, I.', answer:'F, Cl, Br, I', isText:true, tolerance:0, solution:'<p>Radius increases moving down a group. F (64 pm) < Cl (99 pm) < Br (114 pm) < I (133 pm). <strong>F, Cl, Br, I</strong></p>'},
  {id:'p147', difficulty:'hard', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Ga–As bond (used in the semiconductor gallium arsenide). Ga EN = 1.81, As EN = 2.18.', answer:0.37, tolerance:0.05, unit:'', solution:'<p>ΔEN = |1.81 - 2.18| = <strong>0.37</strong>. Barely nonpolar covalent — GaAs behaves almost like a covalent semiconductor, similar to silicon.</p>'},
  {id:'p148', difficulty:'hard', type:'multi', tag:'Trends Comparison', q:'Rank these four Period 3 elements from LOWEST to HIGHEST first ionization energy: S, Cl, P, Si. (Remember the Group 16 dip: S has slightly lower IE than P.)', answer:'Si, S, P, Cl', isText:true, tolerance:0, solution:'<p>Real values (kJ/mol): Si (786) < S (1000) < P (1012) < Cl (1251). Even though the general trend is left-to-right increasing, the Group 16 pairing anomaly puts S slightly below P. <strong>Si, S, P, Cl</strong></p>'},
  {id:'p149', difficulty:'hard', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Ba–Cl bond. Ba EN = 0.89, Cl EN = 3.16.', answer:2.27, tolerance:0.05, unit:'', solution:'<p>ΔEN = |0.89 - 3.16| = <strong>2.27</strong>. Ionic. BaCl2 is a common ionic salt.</p>'},
  {id:'p150', difficulty:'hard', type:'concept', tag:'Successive Ionization Energies', q:'An element has successive ionization energies IE1=419, IE2=3051, IE3=4411, IE4=5877 (kJ/mol). What group does this element likely belong to?', choices:['Group 1, because the huge jump occurs immediately after removing the first electron', 'Group 2, because two electrons are removed easily', 'Group 17, because it should gain rather than lose electrons', 'Group 4, because four ionization energies are given'], correct:0, solution:'<p>The jump (over 7×) occurs right after IE1, meaning only 1 electron is a valence electron before reaching the core. This places the element in <strong>Group 1</strong> (matching potassium\'s real IE values).</p>'},
  {id:'p151', difficulty:'hard', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Li–Cl bond. Li EN = 0.98, Cl EN = 3.16.', answer:2.18, tolerance:0.05, unit:'', solution:'<p>ΔEN = |0.98 - 3.16| = <strong>2.18</strong>. Ionic. LiCl is used in some batteries and as a desiccant.</p>'},
  {id:'p152', difficulty:'hard', type:'multi', tag:'Isoelectronic Series', q:'Br^- (35 protons), Rb^+ (37 protons), and Sr^2+ (38 protons) are all isoelectronic with krypton (36 electrons). Rank from LARGEST to SMALLEST ionic radius.', answer:'Br-, Rb+, Sr2+', isText:true, tolerance:0, solution:'<p>Fewer protons = larger radius for the same electron count. Br^- (35 protons) is largest; Sr^2+ (38 protons) is smallest. <strong>Br^- > Rb^+ > Sr^2+</strong></p>'},
  {id:'p153', difficulty:'hard', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Ca–Br bond. Ca EN = 1.00, Br EN = 2.96.', answer:1.96, tolerance:0.05, unit:'', solution:'<p>ΔEN = |1.00 - 2.96| = <strong>1.96</strong>. Ionic. CaBr2 is calcium bromide.</p>'},
  {id:'p154', difficulty:'hard', type:'multi', tag:'Periodic Position', q:'Element X has 5 valence electrons and is in Period 4. Determine its group, likely element identity, and classification.', answer:'Group 15, Arsenic, metalloid', isText:true, tolerance:0, solution:'<p>5 valence electrons → <strong>Group 15</strong>. Period 4, Group 15 is <strong>arsenic (As)</strong>, which sits directly on the metalloid staircase — a <strong>metalloid</strong>.</p>'},
  {id:'p155', difficulty:'hard', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Sr–O bond. Sr EN = 0.95, O EN = 3.44.', answer:2.49, tolerance:0.05, unit:'', solution:'<p>ΔEN = |0.95 - 3.44| = <strong>2.49</strong>. Ionic. SrO is strontium oxide.</p>'},
  {id:'p156', difficulty:'hard', type:'concept', tag:'Trends Comparison', q:'Element A has IE1 = 1000 kJ/mol and is in Period 3. Element B also has IE1 = 1000 kJ/mol but is in Period 2. Which element is likely smaller in atomic radius, and why?', choices:['Element B (Period 2), because it has fewer energy levels, placing its valence electrons closer to the nucleus regardless of the specific IE value', 'Element A, because Period 3 elements are always smaller', 'They must be the same size since their IE values match', 'IE and atomic radius are unrelated'], correct:0, solution:'<p>Even with matching IE values, the number of occupied energy levels (determined by period) is the dominant factor for atomic radius. Fewer energy levels (Period 2) means the valence shell sits closer to the nucleus.</p>'},
  {id:'p157', difficulty:'hard', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Rb–Cl bond. Rb EN = 0.82, Cl EN = 3.16.', answer:2.34, tolerance:0.05, unit:'', solution:'<p>ΔEN = |0.82 - 3.16| = <strong>2.34</strong>. Ionic. RbCl is rubidium chloride.</p>'},
  {id:'p158', difficulty:'hard', type:'multi', tag:'Successive Ionization Energies', q:'An unknown element has successive ionization energies: 800, 2427, 3660, 25025 (kJ/mol). Between which removal does the largest jump occur, and how many valence electrons does this reveal?', answer:'between the 3rd and 4th; 3 valence electrons', isText:true, tolerance:0, solution:'<p>The ratio jumps sharply between the 3rd (3660) and 4th (25025) removals — nearly a 7× increase. This means <strong>3 valence electrons</strong> (matching a Group 13 element).</p>'},
  {id:'p159', difficulty:'hard', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the K–O bond. K EN = 0.82, O EN = 3.44.', answer:2.62, tolerance:0.05, unit:'', solution:'<p>ΔEN = |0.82 - 3.44| = <strong>2.62</strong>. Ionic. K2O is potassium oxide.</p>'},
  {id:'p160', difficulty:'hard', type:'concept', tag:'Bond Classification', q:'Which pair of elements would you predict to form the MOST ionic bond, based on their periodic table positions?', choices:['Francium (Fr, Period 7, Group 1) and Fluorine (F, Period 2, Group 17) — the two most extreme positions for low and high electronegativity', 'Carbon (C) and Hydrogen (H) — both near the middle of the EN range', 'Chlorine (Cl) and Chlorine (Cl) — identical atoms', 'Silicon (Si) and Germanium (Ge) — both metalloids in the same group'], correct:0, solution:'<p>Ionic character increases with a larger ΔEN. Fr (extreme lower-left, lowest EN) paired with F (extreme upper-right, highest EN) produces the largest possible electronegativity gap on the periodic table.</p>'},
  {id:'p161', difficulty:'hard', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Na–Br bond. Na EN = 0.93, Br EN = 2.96.', answer:2.03, tolerance:0.05, unit:'', solution:'<p>ΔEN = |0.93 - 2.96| = <strong>2.03</strong>. Ionic. NaBr is sodium bromide.</p>'},
  {id:'p162', difficulty:'hard', type:'multi', tag:'Successive Ionization Energies', q:'Successive ionization energies for phosphorus: IE1=1012, IE2=1907, IE3=2914, IE4=4964, IE5=6274, IE6=21267 (kJ/mol). Identify the valence electron count from the jump location.', answer:'5', isText:true, tolerance:0, solution:'<p>The jump occurs between IE5 and IE6 — the first 5 removals are relatively gradual valence-electron removals, and the 6th reaches the core. <strong>5 valence electrons</strong>, matching phosphorus (Group 15).</p>'},
  {id:'p163', difficulty:'hard', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Mg–Cl bond. Mg EN = 1.31, Cl EN = 3.16.', answer:1.85, tolerance:0.05, unit:'', solution:'<p>ΔEN = |1.31 - 3.16| = <strong>1.85</strong>. Ionic. MgCl2 is magnesium chloride, used for de-icing roads.</p>'},
  {id:'p164', difficulty:'hard', type:'concept', tag:'Isoelectronic Series', q:'S^2- (16 protons) and Ca^2+ (20 protons) are both isoelectronic with argon (18 electrons). Which is larger, and how many protons separate the two?', choices:['S^2- is larger (fewer protons pull less tightly on the same 18 electrons); the proton counts differ by 4', 'Ca^2+ is larger because it has more protons', 'They are exactly the same size', 'The proton difference is 2'], correct:0, solution:'<p>Both ions have 18 electrons, but S^2- has 16 protons while Ca^2+ has 20 protons — a difference of 4. The weaker nuclear pull from fewer protons makes S^2- larger.</p>'},
  {id:'p165', difficulty:'hard', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Cs–Cl bond. Cs EN = 0.79, Cl EN = 3.16.', answer:2.37, tolerance:0.05, unit:'', solution:'<p>ΔEN = |0.79 - 3.16| = <strong>2.37</strong>. Ionic. CsCl is cesium chloride, notable for its unique crystal structure.</p>'},
  {id:'p166', difficulty:'hard', type:'concept', tag:'Table Organization', q:'A brand-new element is synthesized with configuration [Rn] 7s^2 5f^14 6d^10 7p^3. What group does its valence electron pattern suggest, and which family would it likely resemble?', choices:['Group 15 (7s^2 7p^3 = 5 valence electrons), likely similar in reactivity pattern to nitrogen, phosphorus, and arsenic', 'Group 3, similar to scandium', 'Group 17, similar to the halogens', '"Group 7p" is not a valid group designation'], correct:0, solution:'<p>Ignoring the filled inner 5f and 6d sublevels, the outermost s and p electrons (7s^2 7p^3) give 5 valence electrons, placing this element in Group 15 alongside N, P, and As.</p>'},
  {id:'p167', difficulty:'hard', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Ba–I bond. Ba EN = 0.89, I EN = 2.66.', answer:1.77, tolerance:0.05, unit:'', solution:'<p>ΔEN = |0.89 - 2.66| = <strong>1.77</strong>. Ionic (just above the 1.7 cutoff). BaI2 is barium iodide.</p>'},
  {id:'p168', difficulty:'hard', type:'multi', tag:'Isoelectronic Series', q:'Rank these four ions (all isoelectronic with krypton, 36 electrons) from SMALLEST to LARGEST ionic radius: Se^2- (34 protons), Br^- (35 protons), Rb^+ (37 protons), Sr^2+ (38 protons).', answer:'Sr2+, Rb+, Br-, Se2-', isText:true, tolerance:0, solution:'<p>More protons = smaller radius for the same electron count. Ranking by protons (38, 37, 35, 34): <strong>Sr^2+ < Rb^+ < Br^- < Se^2-</strong></p>'},
  {id:'p169', difficulty:'hard', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Sr–Cl bond. Sr EN = 0.95, Cl EN = 3.16.', answer:2.21, tolerance:0.05, unit:'', solution:'<p>ΔEN = |0.95 - 3.16| = <strong>2.21</strong>. Ionic. SrCl2 is strontium chloride.</p>'},
  {id:'p170', difficulty:'hard', type:'concept', tag:'Successive Ionization Energies', q:'An unknown alkaline earth metal has successive ionization energies IE1=550, IE2=1060, IE3=4940 (kJ/mol). Given that Ca has a real IE1 of 590 kJ/mol and Sr has a real IE1 of 549 kJ/mol, which element does this data most likely match?', choices:['Strontium (Sr) — the IE1 value of 550 closely matches Sr\'s known value of 549 kJ/mol', 'Calcium (Ca) — because both are Group 2', 'Magnesium (Mg) — because Mg is the most common Group 2 element', 'Beryllium (Be) — because Be has the highest IE in Group 2'], correct:0, solution:'<p>The IE1 value of 550 kJ/mol is very close to strontium\'s actual value of 549 kJ/mol, and much lower than calcium\'s 590 kJ/mol — a strong match for strontium, not calcium.</p>'},
  {id:'p171', difficulty:'hard', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the K–I bond. K EN = 0.82, I EN = 2.66.', answer:1.84, tolerance:0.05, unit:'', solution:'<p>ΔEN = |0.82 - 2.66| = <strong>1.84</strong>. Ionic. KI is potassium iodide, added to table salt to prevent iodine deficiency.</p>'},
  {id:'p172', difficulty:'hard', type:'multi', tag:'Metallic Character', q:'Rank Na (Period 3, Group 1), Mg (Period 3, Group 2), and Al (Period 3, Group 13) from MOST to LEAST metallic character.', answer:'Na, Mg, Al', isText:true, tolerance:0, solution:'<p>Metallic character decreases moving left to right across a period, as atoms hold their valence electrons more tightly and become less willing to lose them. <strong>Na > Mg > Al</strong></p>'},
  {id:'p173', difficulty:'hard', type:'calc', tag:'Electronegativity', q:'Calculate ΔEN for the Rb–Br bond. Rb EN = 0.82, Br EN = 2.96.', answer:2.14, tolerance:0.05, unit:'', solution:'<p>ΔEN = |0.82 - 2.96| = <strong>2.14</strong>. Ionic. RbBr is rubidium bromide.</p>'},
  {id:'p174', difficulty:'hard', type:'multi', tag:'Trends Comparison', q:'Four elements have these first ionization energies: W = 419 kJ/mol, X = 1251 kJ/mol, Y = 738 kJ/mol, Z = 2372 kJ/mol. Using the general inverse relationship between IE and atomic radius, rank them from LARGEST to SMALLEST predicted atomic radius.', answer:'W, Y, X, Z', isText:true, tolerance:0, solution:'<p>Lower IE generally corresponds to larger atomic radius (both trends stem from weaker nuclear pull on valence electrons). Ranking by increasing IE — W(419) < Y(738) < X(1251) < Z(2372) — gives the radius order (largest to smallest): <strong>W, Y, X, Z</strong>.</p>'}

]; // end ALL_PROBLEMS — 174 problems total (84 original + 60 added + 30 hard expansion)
