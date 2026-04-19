/* ── Unit 04 Problem Bank — Periodic Table & Trends ──
   84 problems total: 29 calc | 34 concept | 21 multi
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  /* ══════════════════════════════════════════════════
      CALCULATION PROBLEMS  (28)
  ══════════════════════════════════════════════════ */

  {
    id:'p01', type:'calc', tag:'Valence Electrons',
    q:'Sulfur (S) is in Group 16 of the periodic table. How many valence electrons does a sulfur atom have?',
    answer:6, tolerance:0, unit:'valence electrons',
    solution:'<p>For main-group elements, valence electrons = last digit of the group number. Group 16 → <strong>6 valence electrons</strong>. Verify: S is [Ne] 3s² 3p⁴; level 3 has 2 + 4 = 6 electrons.</p>'
  },
  {
    id:'p02', type:'calc', tag:'Valence Electrons',
    q:'Aluminum (Al) is in Group 13. How many valence electrons does an aluminum atom have?',
    answer:3, tolerance:0, unit:'valence electrons',
    solution:'<p>Group 13 → <strong>3 valence electrons</strong>. Al = [Ne] 3s² 3p¹; level 3 has 2 + 1 = 3 electrons.</p>'
  },
  {
    id:'p03', type:'calc', tag:'Valence Electrons',
    q:'Phosphorus (P) is in Group 15, Period 3. How many valence electrons does phosphorus have?',
    answer:5, tolerance:0, unit:'valence electrons',
    solution:'<p>Group 15 → <strong>5 valence electrons</strong>. P = [Ne] 3s² 3p³; level 3 has 2 + 3 = 5 electrons.</p>'
  },
  {
    id:'p04', type:'calc', tag:'Valence Electrons',
    q:'Fluorine (F) is in Group 17, Period 2. How many valence electrons does fluorine have?',
    answer:7, tolerance:0, unit:'valence electrons',
    solution:'<p>Group 17 → <strong>7 valence electrons</strong>. F = 1s² 2s² 2p⁵; level 2 has 2 + 5 = 7 electrons. F is one electron short of a full octet, making it highly reactive.</p>'
  },
  {
    id:'p05', type:'calc', tag:'Valence Electrons',
    q:'Oxygen (O) is in Group 16, Period 2. How many valence electrons does oxygen have?',
    answer:6, tolerance:0, unit:'valence electrons',
    solution:'<p>Group 16 → <strong>6 valence electrons</strong>. O = 1s² 2s² 2p⁴; level 2 has 2 + 4 = 6 electrons. O typically needs 2 more electrons to complete its octet.</p>'
  },
  {
    id:'p06', type:'calc', tag:'Valence Electrons',
    q:'Silicon (Si) is in Group 14, Period 3. How many valence electrons does silicon have?',
    answer:4, tolerance:0, unit:'valence electrons',
    solution:'<p>Group 14 → <strong>4 valence electrons</strong>. Si = [Ne] 3s² 3p²; level 3 has 2 + 2 = 4 electrons. Si is the basis for semiconductors and computer chips.</p>'
  },
  {
    id:'p07', type:'calc', tag:'Period & Group',
    q:'Bromine (Br) has atomic number 35. What period is bromine in?',
    answer:4, tolerance:0, unit:'',
    solution:'<p>Br = [Ar] 3d¹⁰ 4s² 4p⁵. The outermost occupied level is 4 → <strong>Period 4</strong>. Check: Period 4 runs from K (Z=19) to Kr (Z=36); Br at Z=35 is in Period 4.</p>'
  },
  {
    id:'p08', type:'calc', tag:'Period & Group',
    q:'Calcium (Ca) has atomic number 20. What group is calcium in?',
    answer:2, tolerance:0, unit:'',
    solution:'<p>Ca = [Ar] 4s². Level 4 holds 2 valence electrons → <strong>Group 2</strong>. Ca is an alkaline earth metal. It loses 2 electrons to form Ca²⁺.</p>'
  },
  {
    id:'p09', type:'calc', tag:'Period & Group',
    q:'Potassium (K) has atomic number 19. What period is it in?',
    answer:4, tolerance:0, unit:'',
    solution:'<p>K = [Ar] 4s¹. Outermost electron is in level 4 → <strong>Period 4</strong>. K is the first element of Period 4, directly below Na in Group 1.</p>'
  },
  {
    id:'p10', type:'calc', tag:'Period & Group',
    q:'Cesium (Cs) has atomic number 55 and configuration [Xe] 6s¹. What period is cesium in?',
    answer:6, tolerance:0, unit:'',
    solution:'<p>Outermost energy level is 6 → <strong>Period 6</strong>. Cs is in Group 1 (alkali metals), Period 6. It has the lowest first ionization energy of all stable alkali metals.</p>'
  },
  {
    id:'p11', type:'calc', tag:'Electronegativity',
    q:'Calculate the electronegativity difference (ΔEN) for the Na–Cl bond. Na EN = 0.93, Cl EN = 3.16.',
    answer:2.23, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |0.93 − 3.16| = <strong>2.23</strong>. Since 2.23 > 1.7, the Na–Cl bond is <strong>ionic</strong>. This is table salt — a classic ionic compound formed between a metal and a nonmetal with a large EN gap.</p>'
  },
  {
    id:'p12', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the H–Cl bond. H EN = 2.20, Cl EN = 3.16.',
    answer:0.96, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |2.20 − 3.16| = <strong>0.96</strong>. Since 0.4 ≤ 0.96 ≤ 1.7, the H–Cl bond is <strong>polar covalent</strong>. Electrons are shared but pulled toward Cl.</p>'
  },
  {
    id:'p13', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the H–F bond. H EN = 2.20, F EN = 3.98.',
    answer:1.78, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |2.20 − 3.98| = <strong>1.78</strong>. Just above 1.7 → classified as <strong>ionic</strong> by the cutoff. F is the most electronegative element (3.98), creating a large EN gap with H.</p>'
  },
  {
    id:'p14', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the C–O bond. C EN = 2.55, O EN = 3.44.',
    answer:0.89, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |2.55 − 3.44| = <strong>0.89</strong>. Polar covalent (0.4–1.7). O pulls bonding electrons toward itself, creating a partial negative charge on O in C–O bonds — important in CO₂ and organic molecules.</p>'
  },
  {
    id:'p15', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the H–Br bond. H EN = 2.20, Br EN = 2.96.',
    answer:0.76, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |2.20 − 2.96| = <strong>0.76</strong>. Polar covalent. Trend in hydrogen halides: HF (1.78) → HCl (0.96) → HBr (0.76) → HI (0.46). ΔEN decreases as the halogen EN decreases going down Group 17.</p>'
  },
  {
    id:'p16', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the Mg–O bond. Mg EN = 1.31, O EN = 3.44.',
    answer:2.13, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |1.31 − 3.44| = <strong>2.13</strong>. Ionic (> 1.7). MgO is magnesium oxide — a hard white ionic solid with a very high melting point (2852°C).</p>'
  },
  {
    id:'p17', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the Al–O bond. Al EN = 1.61, O EN = 3.44.',
    answer:1.83, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |1.61 − 3.44| = <strong>1.83</strong>. Ionic (> 1.7). Al₂O₃ (aluminum oxide) is the ionic compound in rubies and sapphires.</p>'
  },
  {
    id:'p18', type:'calc', tag:'Ion Size',
    q:'The atomic radius of Na is 186 pm. The ionic radius of Na⁺ is 102 pm. By how many picometers did the radius decrease when Na lost one electron?',
    answer:84, tolerance:1, unit:'pm',
    solution:'<p>Decrease = 186 − 102 = <strong>84 pm</strong>. Na loses its entire 3s¹ electron. The remaining 10 electrons are in level 2, pulled much closer by 11 protons. Cations are always smaller than their neutral atoms.</p>'
  },
  {
    id:'p19', type:'calc', tag:'Ion Size',
    q:'The atomic radius of Cl is 99 pm. The ionic radius of Cl⁻ is 181 pm. By how many picometers did the radius increase when Cl gained one electron?',
    answer:82, tolerance:2, unit:'pm',
    solution:'<p>Increase = 181 − 99 = <strong>82 pm</strong>. Cl gains one electron to form Cl⁻. Now 18 electrons are held by 17 protons — extra repulsion causes the ion to expand dramatically. Anions are always larger than their neutral atoms.</p>'
  },
  {
    id:'p20', type:'calc', tag:'Ion Size',
    q:'The atomic radius of K is 227 pm. The ionic radius of K⁺ is 138 pm. By how many picometers did the radius decrease when K lost one electron?',
    answer:89, tolerance:2, unit:'pm',
    solution:'<p>Decrease = 227 − 138 = <strong>89 pm</strong>. K loses its 4s¹ electron, dropping from level 4 to level 3 as the outermost shell. The remaining 18 electrons are pulled tightly by 19 protons.</p>'
  },
  {
    id:'p21', type:'calc', tag:'Ion Size',
    q:'The atomic radius of Ca is 197 pm. The ionic radius of Ca²⁺ is 100 pm. By how many picometers did the radius decrease when Ca lost two electrons?',
    answer:97, tolerance:2, unit:'pm',
    solution:'<p>Decrease = 197 − 100 = <strong>97 pm</strong>. Ca loses both 4s electrons. Losing the entire outermost level causes dramatic shrinkage — Ca²⁺ is about half the size of the Ca atom.</p>'
  },
  {
    id:'p22', type:'calc', tag:'Ionization Energy',
    q:'The first ionization energy of K is 419 kJ/mol and for Na it is 496 kJ/mol. How many kJ/mol higher is sodium\'s ionization energy than potassium\'s?',
    answer:77, tolerance:2, unit:'kJ/mol',
    solution:'<p>Difference = 496 − 419 = <strong>77 kJ/mol</strong>. Na (Period 3) is smaller than K (Period 4), so its valence electron is closer to the nucleus and harder to remove. Moving down Group 1, IE decreases.</p>'
  },
  {
    id:'p23', type:'calc', tag:'Ionization Energy',
    q:'The first ionization energy of F is 1681 kJ/mol and for Cl it is 1251 kJ/mol. How many kJ/mol higher is fluorine\'s ionization energy than chlorine\'s?',
    answer:430, tolerance:5, unit:'kJ/mol',
    solution:'<p>Difference = 1681 − 1251 = <strong>430 kJ/mol</strong>. F (Period 2) is smaller than Cl (Period 3). F\'s valence electrons are in level 2, much closer to the nucleus. Moving down Group 17, IE decreases substantially.</p>'
  },
  {
    id:'p24', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the Si–O bond. Si EN = 1.90, O EN = 3.44.',
    answer:1.54, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |1.90 − 3.44| = <strong>1.54</strong>. Polar covalent (0.4–1.7). The Si–O bond is one of the most important in geology — it makes up silicate minerals, with O pulling electron density away from Si.</p>'
  },
  {
    id:'p25', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the N–H bond. N EN = 3.04, H EN = 2.20.',
    answer:0.84, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |3.04 − 2.20| = <strong>0.84</strong>. Polar covalent. In ammonia (NH₃), the N end is slightly negative and each H is slightly positive, making N–H bonds capable of hydrogen bonding.</p>'
  },
  {
    id:'p26', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the Li–F bond. Li EN = 0.98, F EN = 3.98.',
    answer:3.00, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |0.98 − 3.98| = <strong>3.00</strong>. Ionic (> 1.7). LiF is lithium fluoride — a strongly ionic crystal. Li is in the upper-left and F in the upper-right of the table, giving a very large EN gap.</p>'
  },
  {
    id:'p27', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the K–Br bond. K EN = 0.82, Br EN = 2.96.',
    answer:2.14, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |0.82 − 2.96| = <strong>2.14</strong>. Ionic (> 1.7). KBr is potassium bromide, an ionic salt. K (Group 1 metal) and Br (Group 17 nonmetal) have a large EN difference.</p>'
  },
  {
    id:'p28', type:'calc', tag:'Electronegativity',
    q:'Calculate ΔEN for the H–I bond. H EN = 2.20, I EN = 2.66.',
    answer:0.46, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |2.20 − 2.66| = <strong>0.46</strong>. Polar covalent (barely above 0.4). HI is almost nonpolar. Trend: HF (1.78) → HCl (0.96) → HBr (0.76) → HI (0.46). As you go down Group 17, halogens become less electronegative, shrinking ΔEN.</p>'
  },

  /* ══════════════════════════════════════════════════
      CONCEPT PROBLEMS  (33)
  ══════════════════════════════════════════════════ */

  {
    id:'p29', type:'concept', tag:'Table Organization',
    q:'Elements in the same GROUP of the periodic table have similar chemical properties because they have the same…',
    choices:['A. number of protons','B. number of neutrons','C. number of valence electrons','D. atomic mass'],
    correct:2,
    solution:'<p><strong>C — number of valence electrons.</strong> Same group = same valence electron count = similar bonding behavior. All Group 1 elements (Li, Na, K…) have 1 valence electron and react similarly with water. Protons (A) define the element uniquely; neutrons (B) vary; atomic mass (D) increases down a group.</p>'
  },
  {
    id:'p30', type:'concept', tag:'Table Organization',
    q:'The period number of an element tells you…',
    choices:['A. how many protons it has','B. how many valence electrons it has','C. how many energy levels are occupied','D. which group it belongs to'],
    correct:2,
    solution:'<p><strong>C — how many energy levels are occupied.</strong> Period 2 elements use levels 1 and 2; Period 3 elements use levels 1, 2, and 3; etc. The period = the outermost energy level number. The number of protons (A) increases across a period, not just with period number.</p>'
  },
  {
    id:'p31', type:'concept', tag:'Table Organization',
    q:'How many valence electrons do all elements in Group 2 share?',
    choices:['A. 1','B. 2','C. 8','D. Varies by element'],
    correct:1,
    solution:'<p><strong>B — 2 valence electrons.</strong> All Group 2 elements (Be, Mg, Ca, Sr, Ba) end in s², giving exactly 2 valence electrons. This shared property means they all form 2+ ions and react with similar vigor with water and acids.</p>'
  },
  {
    id:'p32', type:'concept', tag:'Table Organization',
    q:'The halogens (Group 17) all have 7 valence electrons. This means they tend to…',
    choices:['A. lose 7 electrons to form 7+ ions','B. gain 1 electron to complete their octet and form 1− ions','C. not react because they have many electrons','D. form bonds by losing 1 electron'],
    correct:1,
    solution:'<p><strong>B — gain 1 electron to form 1− ions.</strong> Halogens are one electron short of a full octet. Gaining 1 electron is far easier than losing 7. F⁻, Cl⁻, Br⁻, I⁻ are common halide ions. Halogens are actually among the most reactive elements precisely because they so strongly attract that final electron.</p>'
  },
  {
    id:'p33', type:'concept', tag:'Table Organization',
    q:'Sodium (Na) and potassium (K) are in the same group. You would predict that they…',
    choices:['A. have the same atomic mass','B. react with water in similar ways','C. have the same number of energy levels','D. are the same size'],
    correct:1,
    solution:'<p><strong>B — react with water in similar ways.</strong> Both Na and K have 1 valence electron and react with water to produce hydrogen gas and a hydroxide. They do NOT have the same mass (A), energy levels (C — Na has 3, K has 4), or size (D — K is larger).</p>'
  },
  {
    id:'p34', type:'concept', tag:'Table Organization',
    q:'The noble gases (Group 18) are the least reactive elements because…',
    choices:['A. they are all gases at room temperature','B. they have completely filled outer energy levels','C. they have the lowest atomic masses in their period','D. they are in the center of the periodic table'],
    correct:1,
    solution:'<p><strong>B — completely filled outer energy levels.</strong> Noble gases have 8 valence electrons (He has 2) — a complete, stable octet. No tendency to gain, lose, or share electrons → essentially no reactivity. Being gases (A) is a consequence, not the cause. Noble gases are on the far right (D is wrong).</p>'
  },
  {
    id:'p35', type:'concept', tag:'Atomic Radius Trend',
    q:'As you move from left to right across Period 3 (Na → Cl), the atomic radius…',
    choices:['A. increases, because more electrons are added','B. decreases, because more protons pull electrons inward','C. stays the same, because all Period 3 elements have the same energy levels','D. first increases, then decreases'],
    correct:1,
    solution:'<p><strong>B — decreases.</strong> Across a period, protons increase one at a time but all valence electrons stay in the same energy level. More nuclear charge = stronger pull = smaller atom. Na (186 pm) → Mg (160) → Al (143) → Si (111) → P (106) → S (103) → Cl (99 pm).</p>'
  },
  {
    id:'p36', type:'concept', tag:'Atomic Radius Trend',
    q:'Moving down Group 1 (Li → Na → K → Rb → Cs), atomic radius…',
    choices:['A. decreases, because nuclear charge increases','B. stays the same, because all have 1 valence electron','C. increases, because each step adds a new energy level','D. first increases, then decreases'],
    correct:2,
    solution:'<p><strong>C — increases.</strong> Li valence e⁻ is in level 2, Na in level 3, K in level 4, etc. Each new level is farther from the nucleus. Li (152 pm) → Na (186) → K (227) → Rb (248) → Cs (265 pm). Having 1 valence electron (B) is constant, but the distance of that electron from the nucleus grows each period.</p>'
  },
  {
    id:'p37', type:'concept', tag:'Atomic Radius Trend',
    q:'Which atom has the largest atomic radius?',
    choices:['A. F (Period 2, Group 17)','B. Cl (Period 3, Group 17)','C. Na (Period 3, Group 1)','D. K (Period 4, Group 1)'],
    correct:3,
    solution:'<p><strong>D — K</strong> (227 pm). K is farthest down and farthest left of the four options. Moving down a group increases radius; moving left across a period increases radius. K (Period 4, Group 1) beats Na because it has an extra energy level. K beats the halogens because Group 1 is far larger than Group 17. F (64 pm) is the smallest.</p>'
  },
  {
    id:'p38', type:'concept', tag:'Atomic Radius Trend',
    q:'Which atom has the smallest atomic radius?',
    choices:['A. Cs (Period 6, Group 1)','B. F (Period 2, Group 17)','C. Na (Period 3, Group 1)','D. Cl (Period 3, Group 17)'],
    correct:1,
    solution:'<p><strong>B — F</strong> (64 pm). Atomic radius is smallest in the upper-right corner of the table. F is Period 2, Group 17 — small period (level-2 valence electrons) AND far right (many protons pulling electrons inward). Cs (A) is bottom-left = the largest alkali metal (265 pm).</p>'
  },
  {
    id:'p39', type:'concept', tag:'Atomic Radius Trend',
    q:'Within Period 2, which element has the larger atomic radius: Li or F?',
    choices:['A. F, because it has more protons','B. Li, because it has fewer protons pulling on the valence electrons','C. They are the same size; both are in Period 2','D. F, because nonmetals are always larger than metals'],
    correct:1,
    solution:'<p><strong>B — Li</strong> (152 pm vs F at 64 pm). Across a period, more protons = smaller atom. Li has 3 protons; F has 9. In Period 2, all valence electrons are in level 2, but F\'s 9 protons pull them inward much more strongly. Li is the largest atom in Period 2; F is the smallest.</p>'
  },
  {
    id:'p40', type:'concept', tag:'Ionization Energy',
    q:'Which element would you expect to have the HIGHEST first ionization energy?',
    choices:['A. Cs (Period 6, Group 1)','B. Na (Period 3, Group 1)','C. Ne (Period 2, Group 18)','D. Cl (Period 3, Group 17)'],
    correct:2,
    solution:'<p><strong>C — Ne</strong> (2081 kJ/mol). IE is highest in the upper-right. Noble gases have the highest IE per period — Ne is a small atom with a complete, very stable octet. Cs (A) has the LOWEST IE of the options. Cl (D) has a high IE (1251 kJ/mol) but less than Ne.</p>'
  },
  {
    id:'p41', type:'concept', tag:'Ionization Energy',
    q:'Moving DOWN Group 1 (Li → Na → K → Rb → Cs), ionization energy…',
    choices:['A. increases, because more protons are present','B. decreases, because valence electrons are farther away and more shielded','C. stays the same, because all Group 1 elements have 1 valence electron','D. first decreases, then increases at Cs'],
    correct:1,
    solution:'<p><strong>B — decreases.</strong> Moving down a group, the valence electron is in a higher energy level (farther from the nucleus) and shielded by more inner electrons. Li (520) → Na (496) → K (419) → Cs (376 kJ/mol). Having 1 valence electron (C) doesn\'t fix the IE — distance and shielding matter.</p>'
  },
  {
    id:'p42', type:'concept', tag:'Ionization Energy',
    q:'The first ionization energy of Be is 899 kJ/mol and of B is 801 kJ/mol. B has more protons — why is its IE lower?',
    choices:['A. B has fewer neutrons, making it less stable','B. B\'s outermost electron is in the higher-energy 2p sublevel, which is easier to remove than Be\'s 2s electron','C. B has more valence electrons, overwhelming the nucleus','D. B is a metalloid and metalloids always have lower IE'],
    correct:1,
    solution:'<p><strong>B — the 2p electron is higher in energy.</strong> Be ends in 2s² (lower-energy sublevel). B ends in 2s² 2p¹ — the 2p electron is slightly higher-energy AND shielded by the 2s electrons. Despite having more protons, B\'s valence electron is easier to remove. This is one of two well-known Period 2 IE exceptions (the other is O vs N).</p>'
  },
  {
    id:'p43', type:'concept', tag:'Ionization Energy',
    q:'The first ionization energy of O (1314 kJ/mol) is LOWER than N (1402 kJ/mol) even though O has more protons. Why?',
    choices:['A. O is a larger atom than N','B. In O, the 2p subshell has a paired electron that is extra easy to remove due to electron-electron repulsion','C. N is a noble gas with a high IE','D. O has more neutrons than N, adding instability'],
    correct:1,
    solution:'<p><strong>B — paired 2p electron in O.</strong> N has exactly half-filled 2p (2p³) — a particularly stable configuration. O has 2p⁴, meaning one 2p orbital has a pair. That paired electron repels its partner, making it easier to remove despite O having more protons. This explains the small dip at Group 16 in Period 2.</p>'
  },
  {
    id:'p44', type:'concept', tag:'Electronegativity',
    q:'The most electronegative element on the periodic table is…',
    choices:['A. Oxygen (O)','B. Chlorine (Cl)','C. Fluorine (F)','D. Cesium (Cs)'],
    correct:2,
    solution:'<p><strong>C — Fluorine (F)</strong>, EN = 3.98. F is Period 2, Group 17: small atom, high nuclear charge, 7 valence electrons, one short of a complete octet. O (A) is second-highest (3.44). Cl (B) is 3.16. Cs (D) is one of the LEAST electronegative (0.79).</p>'
  },
  {
    id:'p45', type:'concept', tag:'Electronegativity',
    q:'A bond has ΔEN = 0.10. What type of bond is this?',
    choices:['A. Ionic','B. Polar covalent','C. Nonpolar covalent','D. Metallic'],
    correct:2,
    solution:'<p><strong>C — Nonpolar covalent.</strong> ΔEN &lt; 0.4 → nonpolar covalent. Electrons are shared nearly equally. Examples: H–H (ΔEN = 0), Cl–Cl (ΔEN = 0), C–H (ΔEN = 0.35). Ionic (A) needs ΔEN &gt; 1.7. Polar covalent (B) needs 0.4–1.7.</p>'
  },
  {
    id:'p46', type:'concept', tag:'Electronegativity',
    q:'A bond has ΔEN = 1.2. What type of bond is this?',
    choices:['A. Ionic','B. Polar covalent','C. Nonpolar covalent','D. Cannot be determined without knowing the elements'],
    correct:1,
    solution:'<p><strong>B — Polar covalent.</strong> 0.4 ≤ 1.2 ≤ 1.7 → polar covalent. Electrons are shared but pulled toward the more electronegative atom. Examples in this range: H–Cl (0.96), C–O (0.89), N–H (0.84).</p>'
  },
  {
    id:'p47', type:'concept', tag:'Electronegativity',
    q:'A bond has ΔEN = 2.5. What type of bond is this?',
    choices:['A. Ionic','B. Polar covalent','C. Nonpolar covalent','D. Hydrogen bond'],
    correct:0,
    solution:'<p><strong>A — Ionic.</strong> ΔEN &gt; 1.7 → ionic. An electron is effectively transferred, forming oppositely charged ions. Na–Cl (2.23), Mg–O (2.13), and K–F (3.16) are examples. Hydrogen bond (D) is a type of intermolecular attraction, not a covalent bond classification.</p>'
  },
  {
    id:'p48', type:'concept', tag:'Electronegativity',
    q:'Moving across Period 2 from left to right (Li → F, skipping noble gases), electronegativity…',
    choices:['A. decreases, because more electrons repel each other','B. increases, because more protons attract bonding electrons more strongly','C. stays the same, because all Period 2 atoms use the same energy level','D. first increases then decreases at nitrogen'],
    correct:1,
    solution:'<p><strong>B — increases.</strong> Across a period, protons increase but valence electrons stay in the same level. Increased nuclear charge pulls bonding electrons more strongly. EN: Li (0.98) → Be (1.57) → B (2.04) → C (2.55) → N (3.04) → O (3.44) → F (3.98).</p>'
  },
  {
    id:'p49', type:'concept', tag:'Electronegativity',
    q:'Francium (Fr) is in Period 7, Group 1 — bottom-left corner of the table. Its electronegativity would be predicted to be…',
    choices:['A. very high (~4.0), because it has many protons','B. very low (~0.7), because its valence electron is very far from the nucleus','C. moderate (~2.5), because large atoms have moderate EN','D. impossible to predict from position alone'],
    correct:1,
    solution:'<p><strong>B — very low (~0.7).</strong> EN increases toward the upper-right (F = 3.98) and decreases toward the lower-left. Fr is in the extreme lower-left. Its valence electron is in level 7 — incredibly far from the nucleus and shielded by 6 inner levels. Having many protons (A) doesn\'t help when they are so distant from the bonding region.</p>'
  },
  {
    id:'p50', type:'concept', tag:'Ion Formation',
    q:'When a metal atom forms a cation (loses electrons), its radius compared to the neutral atom is…',
    choices:['A. larger, because there are now more particles overall','B. the same, because the number of protons does not change','C. smaller, because fewer electrons means less repulsion and electrons pulled in more tightly','D. larger, because the atom is less stable as an ion'],
    correct:2,
    solution:'<p><strong>C — smaller.</strong> Losing electrons reduces electron–electron repulsion AND the same nuclear charge pulls fewer electrons more tightly. Na (186 pm) → Na⁺ (102 pm) — a 45% shrinkage. Cations are always smaller than their parent atoms.</p>'
  },
  {
    id:'p51', type:'concept', tag:'Ion Formation',
    q:'When a nonmetal forms an anion (gains electrons), its radius compared to the neutral atom is…',
    choices:['A. smaller, because there are now more protons than electrons','B. the same, because only electrons changed','C. larger, because more electrons means more repulsion and they spread out','D. smaller, because the atom is more stable as an ion'],
    correct:2,
    solution:'<p><strong>C — larger.</strong> Gaining electrons means more electrons held by the same proton count. Extra electron–electron repulsion causes the cloud to expand. Cl (99 pm) → Cl⁻ (181 pm) — an 83% increase. Anions are always larger than their parent atoms.</p>'
  },
  {
    id:'p52', type:'concept', tag:'Ion Formation',
    q:'Which ion would be SMALLER than its parent neutral atom?',
    choices:['A. Cl⁻ (chloride)','B. O²⁻ (oxide)','C. Na⁺ (sodium)','D. N³⁻ (nitride)'],
    correct:2,
    solution:'<p><strong>C — Na⁺.</strong> Na⁺ is a cation — it lost an electron — so it is smaller than Na. All cations are smaller than their parent atoms. Cl⁻, O²⁻, and N³⁻ are anions (gained electrons) and are therefore larger than their neutral atoms.</p>'
  },
  {
    id:'p53', type:'concept', tag:'Ion Formation',
    q:'In an isoelectronic series, Na⁺, Mg²⁺, and Al³⁺ all have 10 electrons. They have 11, 12, and 13 protons respectively. Which is the smallest?',
    choices:['A. Na⁺ (11 protons)','B. Mg²⁺ (12 protons)','C. Al³⁺ (13 protons)','D. They are the same size because they have the same electrons'],
    correct:2,
    solution:'<p><strong>C — Al³⁺.</strong> For isoelectronic ions, more protons = smaller ion. Al³⁺ has 13 protons pulling the same 10 electrons more tightly than Mg²⁺ (12 protons) or Na⁺ (11 protons). Sizes: Na⁺ (102 pm) &gt; Mg²⁺ (72 pm) &gt; Al³⁺ (53 pm).</p>'
  },
  {
    id:'p54', type:'concept', tag:'Element Classification',
    q:'Silicon (Si) is classified as a metalloid. This means it…',
    choices:['A. is a very reactive metal that conducts electricity well','B. has properties between those of metals and nonmetals','C. is a gas at room temperature','D. does not conduct electricity at all'],
    correct:1,
    solution:'<p><strong>B — properties between metals and nonmetals.</strong> Metalloids (semimetals) are on the staircase border. Si conducts electricity, but only a little (semiconductor). This is why Si is the basis for all computer chips and solar cells. A describes alkali metals; C describes noble gases; D describes insulators.</p>'
  },
  {
    id:'p55', type:'concept', tag:'Element Classification',
    q:'Which of the following is an alkali metal?',
    choices:['A. Ca (calcium)','B. Cl (chlorine)','C. K (potassium)','D. Ar (argon)'],
    correct:2,
    solution:'<p><strong>C — K (potassium).</strong> Alkali metals are Group 1 elements: Li, Na, K, Rb, Cs, Fr. They all have 1 valence electron and are very reactive. Ca (A) is an alkaline earth metal (Group 2). Cl (B) is a halogen (Group 17). Ar (D) is a noble gas (Group 18).</p>'
  },
  {
    id:'p56', type:'concept', tag:'Element Classification',
    q:'Which group contains the most reactive nonmetals?',
    choices:['A. Group 1 (alkali metals)','B. Group 2 (alkaline earth metals)','C. Group 17 (halogens)','D. Group 18 (noble gases)'],
    correct:2,
    solution:'<p><strong>C — Group 17, the halogens.</strong> Halogens have 7 valence electrons and desperately seek one more to complete their octet. They are the most reactive nonmetals — F is so reactive it will attack glass. Groups 1 and 2 are the most reactive metals. Group 18 is the least reactive of all elements.</p>'
  },
  {
    id:'p57', type:'concept', tag:'Element Classification',
    q:'The staircase line on the periodic table separates…',
    choices:['A. metals from nonmetals (metals on the left, nonmetals on the right)','B. s-block from p-block elements','C. main-group from transition metals','D. solids from gases at room temperature'],
    correct:0,
    solution:'<p><strong>A — metals from nonmetals.</strong> The staircase runs from B to At. Metals are to the left; nonmetals are to the right. Elements touching the staircase are metalloids. B (B) is close but the s/p block boundary is different. C and D do not describe the staircase function.</p>'
  },
  {
    id:'p58', type:'concept', tag:'Element Classification',
    q:'An element has the electron configuration [Ar] 3d¹⁰ 4s² 4p⁵. What region of the periodic table is it in?',
    choices:['A. Alkali metals (Group 1)','B. Transition metals','C. Halogens (Group 17)','D. Noble gases (Group 18)'],
    correct:2,
    solution:'<p><strong>C — Halogens (Group 17).</strong> The configuration ends in 4p⁵ — 5 electrons in the 4p sublevel, totaling 7 valence electrons in level 4. 7 valence electrons → Group 17 → halogen. The element is bromine (Br), the only liquid nonmetal at room temperature.</p>'
  },
  {
    id:'p59', type:'concept', tag:'Table Organization',
    q:'How many energy levels does an atom in Period 4 use for its electrons?',
    choices:['A. 1','B. 2','C. 4','D. 18'],
    correct:2,
    solution:'<p><strong>C — 4 energy levels.</strong> For main-group elements, the period number equals the number of occupied energy levels. Period 4 elements (K, Ca, Ga, Ge, As, Se, Br, Kr) fill levels 1 through 4. Level 4 is the outermost (valence) shell. 18 (D) is the number of groups.</p>'
  },
  {
    id:'p60', type:'concept', tag:'Atomic Radius Trend',
    q:'Why does atomic radius increase as you move down a group?',
    choices:['A. More protons are added, pushing electrons out','B. Each new period adds a new energy level farther from the nucleus','C. More neutrons are added, making the nucleus larger','D. Electron-electron repulsion increases as more electrons are added to the same level'],
    correct:1,
    solution:'<p><strong>B — each new period adds a new energy level.</strong> Going down Group 1: Li valence e⁻ is in level 2, Na in level 3, K in level 4, etc. Each new level extends farther from the nucleus. Neutrons (C) don\'t affect electron behavior. More protons (A) actually increase nuclear pull, but the new energy level effect dominates.</p>'
  },
  {
    id:'p61', type:'concept', tag:'Ionization Energy',
    q:'Which element has the LOWEST first ionization energy?',
    choices:['A. F (Period 2, Group 17)','B. Na (Period 3, Group 1)','C. Cs (Period 6, Group 1)','D. He (Period 1, Group 18)'],
    correct:2,
    solution:'<p><strong>C — Cs.</strong> Lowest IE is in the bottom-left of the table. Cs (Period 6, Group 1) has its valence electron in level 6 — very far from the nucleus and shielded by 5 inner levels. IE for Cs = 376 kJ/mol. He (D) has the highest IE of all (2372 kJ/mol). F (A) is also very high (1681 kJ/mol).</p>'
  },

  /* ══════════════════════════════════════════════════
      MULTI-STEP PROBLEMS  (20)
  ══════════════════════════════════════════════════ */

  {
    id:'p62', type:'multi', tag:'Trends Comparison',
    q:'Rank these four atoms from SMALLEST to LARGEST atomic radius: F, Cl, Li, Na. (Type four symbols separated by commas, smallest first, e.g.: X, X, X, X)',
    isText:true, answer:'F, Cl, Li, Na',
    solution:'<p>Step 1 — locate each: F (Period 2, Group 17), Cl (Period 3, Group 17), Li (Period 2, Group 1), Na (Period 3, Group 1).</p><p>Step 2 — within periods: Period 2: Li (152 pm) &gt; F (64 pm). Period 3: Na (186 pm) &gt; Cl (99 pm).</p><p>Step 3 — between periods (same group): Na (186) &gt; Li (152); Cl (99) &gt; F (64).</p><p>Final: <strong>F (64) &lt; Cl (99) &lt; Li (152) &lt; Na (186 pm)</strong></p>'
  },
  {
    id:'p63', type:'multi', tag:'Trends Comparison',
    q:'Rank these four atoms from HIGHEST to LOWEST first ionization energy: K, Na, Li, Cs. (Type four symbols separated by commas, highest first)',
    isText:true, answer:'Li, Na, K, Cs',
    solution:'<p>All four are in Group 1. IE decreases moving down a group. IE values: Li (520) &gt; Na (496) &gt; K (419) &gt; Cs (376 kJ/mol). Highest to lowest: <strong>Li, Na, K, Cs</strong>.</p>'
  },
  {
    id:'p64', type:'multi', tag:'Bond Classification',
    q:'For the Mg–O bond: Mg EN = 1.31, O EN = 3.44. (A) Calculate ΔEN. (B) Classify the bond. Enter ΔEN as your answer.',
    answer:2.13, tolerance:0.05, unit:'',
    solution:'<p><strong>A:</strong> ΔEN = |1.31 − 3.44| = <strong>2.13</strong><br><strong>B:</strong> 2.13 &gt; 1.7 → <strong>Ionic</strong>. MgO (magnesium oxide) is an ionic compound — a hard white solid used in refractory bricks and antacids. Mg gives 2 electrons to O, forming Mg²⁺ and O²⁻.</p>'
  },
  {
    id:'p65', type:'multi', tag:'Bond Classification',
    q:'Which H–halogen bond is MORE polar: H–Cl or H–F? H EN = 2.20, Cl EN = 3.16, F EN = 3.98. Enter the bond with the higher ΔEN (write as: H-F or H-Cl).',
    isText:true, answer:'H-F',
    solution:'<p>ΔEN(H–F) = |2.20 − 3.98| = 1.78. ΔEN(H–Cl) = |2.20 − 3.16| = 0.96. <strong>H–F is more polar</strong> because F has a much higher electronegativity than Cl. Both bonds are in the polar covalent/ionic borderline, but H–F has a larger electron density shift toward fluorine.</p>'
  },
  {
    id:'p66', type:'multi', tag:'Element Identification',
    q:'An unknown element X is in Period 3, Group 16. (A) How many valence electrons does X have? (B) Is X a metal, metalloid, or nonmetal? (C) What element is X? Enter the number of valence electrons.',
    answer:6, tolerance:0, unit:'valence electrons',
    solution:'<p><strong>A:</strong> Group 16 → <strong>6 valence electrons</strong>.<br><strong>B:</strong> Period 3, Group 16 is in the upper-right region → <strong>nonmetal</strong>.<br><strong>C:</strong> Period 3, Group 16 = <strong>Sulfur (S)</strong>. Config: [Ne] 3s² 3p⁴ — 6 electrons in level 3 ✓.</p>'
  },
  {
    id:'p67', type:'multi', tag:'Element Identification',
    q:'Element Q has the electron configuration [Ne] 3s² 3p⁶. (A) What period is it in? (B) What group? (C) What element is it? Enter the group number.',
    answer:18, tolerance:0, unit:'',
    solution:'<p><strong>A:</strong> Outermost level is 3 → <strong>Period 3</strong>.<br><strong>B:</strong> Level 3 has 3s² + 3p⁶ = 8 valence electrons → <strong>Group 18</strong>.<br><strong>C:</strong> Period 3, Group 18 = <strong>Argon (Ar)</strong>. Ar has a complete octet and is used in light bulbs and welding.</p>'
  },
  {
    id:'p68', type:'multi', tag:'Isoelectronic Series',
    q:'The ions Na⁺, Mg²⁺, and Al³⁺ all have 10 electrons. They have 11, 12, and 13 protons respectively. Rank from LARGEST to SMALLEST ionic radius. (Type as symbols separated by commas, largest first)',
    isText:true, answer:'Na+, Mg2+, Al3+',
    solution:'<p>For isoelectronic ions, more protons = smaller ion (same electrons pulled more tightly).</p><ul><li>Na⁺: 11 protons → 102 pm</li><li>Mg²⁺: 12 protons → 72 pm</li><li>Al³⁺: 13 protons → 53 pm</li></ul><p>Largest to smallest: <strong>Na⁺ &gt; Mg²⁺ &gt; Al³⁺</strong></p>'
  },
  {
    id:'p69', type:'multi', tag:'Isoelectronic Series',
    q:'N³⁻, O²⁻, and F⁻ all have 10 electrons. N has 7 protons, O has 8, F has 9. Rank from LARGEST to SMALLEST ionic radius. (Type as symbols separated by commas, largest first)',
    isText:true, answer:'N3-, O2-, F-',
    solution:'<p>Same electron count (10), different proton counts. Fewer protons = less pull = larger ion.</p><ul><li>N³⁻: 7 protons → 146 pm</li><li>O²⁻: 8 protons → 140 pm</li><li>F⁻: 9 protons → 133 pm</li></ul><p>Largest to smallest: <strong>N³⁻ &gt; O²⁻ &gt; F⁻</strong></p>'
  },
  {
    id:'p70', type:'multi', tag:'Periodic Position',
    q:'Element Z has 17 protons. (A) What period is it in? (B) What group? (C) How many valence electrons does it have? Enter the number of valence electrons.',
    answer:7, tolerance:0, unit:'valence electrons',
    solution:'<p><strong>A:</strong> Z = 17 → config [Ne] 3s² 3p⁵ → outermost level is 3 → <strong>Period 3</strong>.<br><strong>B:</strong> 2 + 5 = 7 valence electrons → <strong>Group 17</strong>.<br><strong>C:</strong> <strong>7 valence electrons</strong>.<br>The element is <strong>Chlorine (Cl)</strong> — a yellow-green gas and powerful disinfectant.</p>'
  },
  {
    id:'p71', type:'multi', tag:'Trends Comparison',
    q:'Compare Rb (Period 5, Group 1) and Br (Period 4, Group 17). Which has the larger atomic radius? Enter the element symbol.',
    isText:true, answer:'Rb',
    solution:'<p><strong>Rb has the larger radius.</strong> Rb (Period 5, Group 1) = 248 pm; Br (Period 4, Group 17) = 114 pm. Rb is one period lower AND far to the left — both factors dramatically increase radius. As a bonus: Br has a much higher IE (1140 kJ/mol) than Rb (403 kJ/mol) because Br is smaller and to the right.</p>'
  },
  {
    id:'p72', type:'multi', tag:'Bond Classification',
    q:'Classify each bond as ionic (I), polar covalent (P), or nonpolar covalent (N). Cutoffs: &lt;0.4=N, 0.4–1.7=P, &gt;1.7=I.\nBond 1: Ca–Cl (Ca EN=1.00, Cl EN=3.16)\nBond 2: H–I (H EN=2.20, I EN=2.66)\nBond 3: Cl–Cl (Cl EN=3.16)\nEnter the ΔEN for Bond 1.',
    answer:2.16, tolerance:0.05, unit:'',
    solution:'<p><strong>Bond 1 (Ca–Cl):</strong> ΔEN = |1.00 − 3.16| = 2.16 → <strong>Ionic</strong>. CaCl₂ is calcium chloride, used on icy roads.<br><strong>Bond 2 (H–I):</strong> ΔEN = |2.20 − 2.66| = 0.46 → <strong>Polar covalent</strong>.<br><strong>Bond 3 (Cl–Cl):</strong> ΔEN = 0.00 → <strong>Nonpolar covalent</strong>. Identical atoms share equally.</p>'
  },
  {
    id:'p73', type:'multi', tag:'Trends Comparison',
    q:'Without looking up values, predict which has higher first ionization energy: Cl (Period 3, Group 17) or S (Period 3, Group 16). Enter the element symbol.',
    isText:true, answer:'Cl',
    solution:'<p><strong>Cl</strong> has higher IE. Across Period 3, IE generally increases left to right. Cl (Group 17, 1251 kJ/mol) is to the right of S (Group 16, 1000 kJ/mol). Note: there is a small dip at Group 16 (O, S) due to electron pairing, but the overall trend still puts Cl above S.</p>'
  },
  {
    id:'p74', type:'multi', tag:'Trends Comparison',
    q:'Rank these four elements from LOWEST to HIGHEST electronegativity: Cs, Na, Cl, F. (Type four symbols separated by commas, lowest first)',
    isText:true, answer:'Cs, Na, Cl, F',
    solution:'<p>EN increases toward the upper-right of the table. EN values: Cs (0.79) &lt; Na (0.93) &lt; Cl (3.16) &lt; F (3.98).<br>Lowest to highest: <strong>Cs, Na, Cl, F</strong>. Notice the large jump between Na (Group 1 metal) and Cl (Group 17 nonmetal).</p>'
  },
  {
    id:'p75', type:'multi', tag:'Ion Formation',
    q:'Ca (atomic radius = 197 pm) → Ca²⁺ (ionic radius = 100 pm). Cl (atomic radius = 99 pm) → Cl⁻ (ionic radius = 181 pm). Which change produced the larger absolute size change? Enter the size change (in pm) for Ca→Ca²⁺.',
    answer:97, tolerance:2, unit:'pm',
    solution:'<p><strong>Ca→Ca²⁺ change:</strong> 197 − 100 = <strong>97 pm</strong> (shrinks).<br><strong>Cl→Cl⁻ change:</strong> 181 − 99 = 82 pm (grows).<br>Ca→Ca²⁺ produced the larger absolute change (97 vs 82 pm). Losing 2 electrons (and an entire energy level) causes more dramatic shrinkage than gaining 1 electron.</p>'
  },
  {
    id:'p76', type:'multi', tag:'Element Identification',
    q:'Element W has 3 valence electrons and is in Period 2. (A) What group is W in? (B) Is W a metal, metalloid, or nonmetal? (C) What element is W? Enter the group number.',
    answer:13, tolerance:0, unit:'',
    solution:'<p><strong>A:</strong> 3 valence electrons → <strong>Group 13</strong>.<br><strong>B:</strong> Period 2, Group 13 is <strong>Boron (B)</strong>, which is a <strong>metalloid</strong>.<br><strong>C:</strong> <strong>Boron (B)</strong>. Config: 1s² 2s² 2p¹ — 3 level-2 electrons. B is the lightest metalloid, used in glass and ceramics.</p>'
  },
  {
    id:'p77', type:'multi', tag:'Trends Comparison',
    q:'Compare F (Period 2) and I (Period 5), both in Group 17. Which has the higher electronegativity? Enter the element symbol.',
    isText:true, answer:'F',
    solution:'<p><strong>F has the higher electronegativity.</strong> EN: F = 3.98, I = 2.66. Moving down a group, EN decreases because the bonding electrons are farther from the nucleus and more shielded. F is the most electronegative element of all.<br>Atomic radius: I (133 pm) &gt; F (64 pm) — moving down Group 17 adds energy levels, increasing radius.</p>'
  },
  {
    id:'p78', type:'multi', tag:'Bond Classification',
    q:'Predict whether CsF is ionic, polar covalent, or nonpolar covalent. Cs EN = 0.79, F EN = 3.98. Calculate ΔEN and classify. Enter ΔEN.',
    answer:3.19, tolerance:0.05, unit:'',
    solution:'<p>ΔEN = |0.79 − 3.98| = <strong>3.19</strong> → <strong>Ionic</strong>. CsF has the largest EN difference of any common binary compound — Cs is in the extreme lower-left (lowest EN) and F is in the upper-right (highest EN). CsF is a strongly ionic salt with a melting point of 682°C.</p>'
  },
  {
    id:'p79', type:'multi', tag:'Periodic Position',
    q:'An unknown element has the configuration [Ar] 4s¹. (A) What period is it in? (B) What group? (C) How many valence electrons? Enter the period number.',
    answer:4, tolerance:0, unit:'',
    solution:'<p><strong>A:</strong> Outermost electron is in level 4 → <strong>Period 4</strong>.<br><strong>B:</strong> Ends in 4s¹ → 1 valence electron → <strong>Group 1</strong>.<br><strong>C:</strong> <strong>1 valence electron</strong>.<br>The element is <strong>Potassium (K)</strong> — an alkali metal essential to the human body as an electrolyte.</p>'
  },
  {
    id:'p80', type:'multi', tag:'Trends Comparison',
    q:'Compare Na (Period 3, Group 1) and Cl (Period 3, Group 17). Which has the larger atomic radius? Enter the element symbol.',
    isText:true, answer:'Na',
    solution:'<p><strong>Na has the larger atomic radius.</strong> Na (186 pm) vs Cl (99 pm). Within Period 3, moving from Group 1 (Na) to Group 17 (Cl), protons increase but valence electrons stay in level 3. More protons pull electrons inward more tightly.<br>IE comparison: Cl (1251 kJ/mol) has much higher IE than Na (496 kJ/mol) — smaller atom + farther right = harder to remove an electron.</p>'
  },
  {
    id:'p81', type:'multi', tag:'Bond Classification',
    q:'Classify the Ba–O bond. Ba EN = 0.89, O EN = 3.44. (A) Calculate ΔEN. (B) Classify as ionic, polar covalent, or nonpolar covalent. Enter ΔEN.',
    answer:2.55, tolerance:0.05, unit:'',
    solution:'<p><strong>A:</strong> ΔEN = |0.89 − 3.44| = <strong>2.55</strong>.<br><strong>B:</strong> 2.55 &gt; 1.7 → <strong>Ionic</strong>. BaO is barium oxide — a white ionic solid. Ba is a Group 2 metal (Period 6, EN = 0.89) and O is a reactive nonmetal (Period 2, EN = 3.44). Metal + nonmetal with large EN difference = ionic compound.</p>'
  }


  /* ══════════════════════════════════════════════════
      NEW PROBLEMS  (p82–p84)
  ══════════════════════════════════════════════════ */

  {
    id:'p82', type:'calc', tag:'Ion Formation',
    q:'Oxygen (O) is in Group 16, Period 2. How many electrons must oxygen gain to achieve a complete octet and form its most stable ion?',
    answer:2, tolerance:0, unit:'electrons',
    solution:'<p>Group 16 elements have 6 valence electrons. A complete octet requires 8.</p><p>Electrons gained = 8 − 6 = <strong>2 electrons</strong>.</p><p>Oxygen forms the <strong>oxide ion, O²⁻</strong>: 8 protons and 10 electrons → net charge = 8 − 10 = −2 ✓.</p><p>Pattern: all Group 16 elements (O, S, Se, Te) gain 2 electrons to form 2− ions; all Group 17 elements gain 1 to form 1− ions. The number of electrons gained = 8 − (valence electrons).</p>'
  },

  {
    id:'p83', type:'concept', tag:'Metallic Character',
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
    id:'p84', type:'multi', tag:'Successive Ionization Energies',
    q:'Element X has successive ionization energies: IE₁ = 738 kJ/mol, IE₂ = 1451 kJ/mol, IE₃ = 7733 kJ/mol. The enormous jump between IE₂ and IE₃ reveals how many valence electrons element X has. Enter that number.',
    answer:2, tolerance:0, unit:'valence electrons',
    solution:'<p>A dramatic jump in successive ionization energies occurs when you begin removing a <strong>core (inner-shell) electron</strong>, which is held far more tightly than valence electrons.</p><p>The jump here is between IE₂ and IE₃: removing the 1st and 2nd electrons is relatively easy (738 and 1451 kJ/mol), but the 3rd costs 7733 kJ/mol — more than five times harder. This tells you the first two electrons are valence electrons and the third is a core electron.</p><p>Conclusion: element X has <strong>2 valence electrons → Group 2</strong>. These values belong to <strong>magnesium (Mg)</strong>: its two 3s² valence electrons are removed at IE₁ and IE₂; IE₃ reaches into the filled 2p core level, requiring vastly more energy.</p><p>This technique — looking for the big jump — is one of the most reliable experimental ways to determine an element\'s group.</p>'
  }

]; // end ALL_PROBLEMS — 84 problems total
