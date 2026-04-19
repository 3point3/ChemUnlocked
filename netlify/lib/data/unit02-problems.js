/* ── Unit 02 Problem Bank — Atomic Structure
   84 problems total: 12 calc | 55 concept | 17 multi
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  /* ═══════════════════ CALCULATION PROBLEMS (12) ═══════════════════ */

  {
    id: 'p01', type: 'calc', tag: 'Subatomic Particles',
    q: 'How many neutrons are in an atom of iron-56 (Fe-56)? (Atomic number of Fe = 26)',
    answer: 30, tolerance: 0,
    solution: '<p>Neutrons = A − Z = 56 − 26 = <strong>30 neutrons</strong>. The mass number (56) minus the atomic number (26) gives the neutron count.</p>'
  },
  {
    id: 'p02', type: 'calc', tag: 'Subatomic Particles',
    q: 'How many neutrons are in uranium-238? (Atomic number of U = 92)',
    answer: 146, tolerance: 0,
    solution: '<p>Neutrons = A − Z = 238 − 92 = <strong>146 neutrons</strong>. U-238 is the most common naturally occurring uranium isotope and is used in nuclear reactors.</p>'
  },
  {
    id: 'p03', type: 'calc', tag: 'Ion Electrons',
    q: 'How many electrons does a Ca²⁺ ion have? (Atomic number of Ca = 20)',
    answer: 18, tolerance: 0,
    solution: '<p>Electrons = Z − charge = 20 − 2 = <strong>18 electrons</strong>. Ca²⁺ has lost 2 electrons, giving it the same electron count as argon.</p>'
  },
  {
    id: 'p04', type: 'calc', tag: 'Ion Electrons',
    q: 'How many electrons does a Cl⁻ ion have? (Atomic number of Cl = 17)',
    answer: 18, tolerance: 0,
    solution: '<p>Electrons = Z − charge = 17 − (−1) = 17 + 1 = <strong>18 electrons</strong>. Cl⁻ has gained 1 electron, giving it the same count as argon.</p>'
  },
  {
    id: 'p05', type: 'calc', tag: 'Average Atomic Mass',
    q: 'Chlorine has two isotopes: Cl-35 (mass = 34.969 amu, abundance = 75.77%) and Cl-37 (mass = 36.966 amu, abundance = 24.23%). What is the average atomic mass of chlorine in amu? (Round to two decimal places)',
    answer: 35.45, tolerance: 0.02,
    solution: '<p>(34.969 × 0.7577) + (36.966 × 0.2423) = 26.496 + 8.957 = <strong>35.45 amu</strong>. This matches the value on the periodic table.</p>'
  },
  {
    id: 'p06', type: 'calc', tag: 'Average Atomic Mass',
    q: 'Boron has two isotopes: B-10 (mass = 10.013 amu, abundance = 19.9%) and B-11 (mass = 11.009 amu, abundance = 80.1%). What is the average atomic mass in amu? (Round to two decimal places)',
    answer: 10.81, tolerance: 0.02,
    solution: '<p>(10.013 × 0.199) + (11.009 × 0.801) = 1.993 + 8.818 = <strong>10.811 amu ≈ 10.81 amu</strong>. Boron\'s average is closer to 11 because B-11 is much more abundant.</p>'
  },
  {
    id: 'p07', type: 'calc', tag: 'Subatomic Particles',
    q: 'How many neutrons are in a phosphorus-31 atom? (Atomic number of P = 15)',
    answer: 16, tolerance: 0,
    solution: '<p>Neutrons = A − Z = 31 − 15 = <strong>16 neutrons</strong>. Phosphorus-31 is the only stable isotope of phosphorus.</p>'
  },
  {
    id: 'p08', type: 'calc', tag: 'Ion Electrons',
    q: 'How many electrons does an Al³⁺ ion have? (Atomic number of Al = 13)',
    answer: 10, tolerance: 0,
    solution: '<p>Electrons = Z − charge = 13 − 3 = <strong>10 electrons</strong>. Al³⁺ has lost 3 electrons, giving it the same electron count as neon.</p>'
  },
  {
    id: 'p09', type: 'calc', tag: 'Average Atomic Mass',
    q: 'Lithium has two isotopes: Li-6 (mass = 6.015 amu, abundance = 7.59%) and Li-7 (mass = 7.016 amu, abundance = 92.41%). What is the average atomic mass in amu? (Round to two decimal places)',
    answer: 6.94, tolerance: 0.02,
    solution: '<p>(6.015 × 0.0759) + (7.016 × 0.9241) = 0.456 + 6.483 = <strong>6.94 amu</strong>. Because Li-7 is far more abundant, the average is close to 7.</p>'
  },
  {
    id: 'p10', type: 'calc', tag: 'Subatomic Particles',
    q: 'How many neutrons are in a lead-207 (Pb-207) atom? (Atomic number of Pb = 82)',
    answer: 125, tolerance: 0,
    solution: '<p>Neutrons = A − Z = 207 − 82 = <strong>125 neutrons</strong>. Lead-207 is one of four stable lead isotopes.</p>'
  },
  {
    id: 'p11', type: 'calc', tag: 'Ion Electrons',
    q: 'How many electrons does an O²⁻ ion have? (Atomic number of O = 8)',
    answer: 10, tolerance: 0,
    solution: '<p>Electrons = Z − charge = 8 − (−2) = 8 + 2 = <strong>10 electrons</strong>. O²⁻ has gained 2 electrons, making it isoelectronic with neon.</p>'
  },
  {
    id: 'p12', type: 'calc', tag: 'Average Atomic Mass',
    q: 'Magnesium has three isotopes: Mg-24 (23.985 amu, 78.99%), Mg-25 (24.986 amu, 10.00%), and Mg-26 (25.982 amu, 11.01%). What is the average atomic mass in amu? (Round to two decimal places)',
    answer: 24.31, tolerance: 0.02,
    solution: '<p>(23.985 × 0.7899) + (24.986 × 0.1000) + (25.982 × 0.1101)<br>= 18.943 + 2.499 + 2.861 = <strong>24.303 ≈ 24.31 amu</strong>. This matches the periodic table value for Mg.</p>'
  },

  /* ═══════════════════ CONCEPT PROBLEMS (55) ═══════════════════ */

  {
    id: 'p13', type: 'concept', tag: 'Dalton\'s Theory',
    q: 'According to Dalton\'s atomic theory, what happens to atoms during a chemical reaction?',
    choices: ['Atoms are created from energy', 'Atoms are destroyed and replaced by new atoms', 'Atoms are rearranged but not created or destroyed', 'Atoms fuse together to form new atoms with different properties'],
    correct: 2,
    solution: '<p><strong>C — rearranged but not created or destroyed.</strong> This is the atomic explanation for conservation of mass. A, B, and D all violate Dalton\'s theory. Nuclear reactions are a different story, but ordinary chemistry conserves atoms.</p>'
  },
  {
    id: 'p14', type: 'concept', tag: 'Atomic Number',
    q: 'What property of an atom determines which element it is?',
    choices: ['The number of neutrons', 'The number of electrons', 'The number of protons (atomic number)', 'The mass number'],
    correct: 2,
    solution: '<p><strong>C — number of protons.</strong> The atomic number (Z) defines the element. Change the proton count and you change the element. Electrons can be gained/lost (ions) and neutrons can vary (isotopes) without changing the elemental identity.</p>'
  },
  {
    id: 'p15', type: 'concept', tag: 'Rutherford',
    q: 'Rutherford\'s gold foil experiment showed that most alpha particles passed straight through the foil. What did this indicate about atomic structure?',
    choices: ['Atoms are solid spheres with no internal space', 'Atoms contain a uniform distribution of positive charge (plum pudding)', 'Atoms are mostly empty space with a small dense nucleus', 'All electrons are located in the nucleus'],
    correct: 2,
    solution: '<p><strong>C — mostly empty space.</strong> If atoms were solid (A) or uniformly charged (B, the "plum pudding" model), all particles would deflect slightly. Instead, most went straight through (empty space) and a few bounced back sharply (tiny dense nucleus).</p>'
  },
  {
    id: 'p16', type: 'concept', tag: 'Isotopes',
    q: 'Which of the following best defines isotopes?',
    choices: ['Atoms of different elements with the same mass number', 'Atoms of the same element with different numbers of protons', 'Atoms of the same element with different numbers of neutrons', 'Ions of the same element with different charges'],
    correct: 2,
    solution: '<p><strong>C — same element, different neutron counts.</strong> Isotopes share the same atomic number (same element) but differ in mass number due to different neutron counts. They are chemically nearly identical but have different masses.</p>'
  },
  {
    id: 'p17', type: 'concept', tag: 'Ions',
    q: 'A sodium atom loses one electron to form Na⁺. Which statement is true about Na⁺?',
    choices: ['It has more protons than a neutral sodium atom', 'It has 11 electrons and 11 protons', 'It has 10 electrons and 11 protons', 'It has a different atomic number than sodium'],
    correct: 2,
    solution: '<p><strong>C — 10 electrons, 11 protons.</strong> Na (Z=11) loses 1 electron → 11 − 1 = 10 electrons. Protons do not change when forming an ion, so there are still 11 protons. The charge is +1 because protons outnumber electrons by 1.</p>'
  },
  {
    id: 'p18', type: 'concept', tag: 'Subatomic Particles',
    q: 'Which subatomic particle has essentially no contribution to the mass of an atom?',
    choices: ['Proton', 'Neutron', 'Electron', 'Nucleus'],
    correct: 2,
    solution: '<p><strong>C — electron.</strong> An electron\'s mass is 0.00055 amu, roughly 1/1836 the mass of a proton or neutron. For all practical purposes, atomic mass is determined only by protons and neutrons. Electrons contribute negligible mass.</p>'
  },
  {
    id: 'p19', type: 'concept', tag: 'Chemical Formulas',
    q: 'What type of formula shows the exact number of each type of atom in one molecule of a compound?',
    choices: ['Empirical formula', 'Structural formula', 'Molecular formula', 'Ionic formula'],
    correct: 2,
    solution: '<p><strong>C — molecular formula.</strong> The molecular formula (e.g., C₆H₁₂O₆ for glucose) shows the actual count of each atom per molecule. The empirical formula (CH₂O) gives only the simplest ratio. The structural formula shows connectivity.</p>'
  },
  {
    id: 'p20', type: 'concept', tag: 'Average Atomic Mass',
    q: 'Why does the average atomic mass of most elements on the periodic table include decimal places rather than being a whole number?',
    choices: ['Atoms cannot have whole-number masses', 'Protons and neutrons do not have exactly 1 amu mass', 'Most elements exist as a mixture of isotopes with different masses', 'The periodic table rounds values incorrectly'],
    correct: 2,
    solution: '<p><strong>C — mixture of isotopes.</strong> If an element existed as only one isotope, its atomic mass would be very close to a whole number. But most elements exist as a natural mixture of isotopes (different mass numbers), so the periodic table value is a weighted average — which is almost never a whole number.</p>'
  },
  {
    id: 'p21', type: 'concept', tag: 'Ions',
    q: 'What is the correct term for a negatively charged ion?',
    choices: ['Cation', 'Anion', 'Isotope', 'Nucleon'],
    correct: 1,
    solution: '<p><strong>B — anion.</strong> Anions are formed when atoms gain electrons (more electrons than protons → negative charge). Cations are positively charged (lost electrons). Memory trick: Anion has an "n" for "negative."</p>'
  },
  {
    id: 'p22', type: 'concept', tag: 'Thomson',
    q: 'What did J.J. Thomson discover with his cathode ray tube experiment?',
    choices: ['The proton and its positive charge', 'The nucleus of the atom', 'Electrons — small negatively charged particles in all atoms', 'The neutron and its neutral charge'],
    correct: 2,
    solution: '<p><strong>C — electrons.</strong> Thomson showed that the cathode ray was deflected by electric and magnetic fields, proving it consisted of charged particles. These negative particles were present regardless of the cathode material, meaning they are part of all atoms.</p>'
  },
  {
    id: 'p23', type: 'concept', tag: 'Chadwick',
    q: 'What particle did James Chadwick discover in 1932?',
    choices: ['Electron', 'Proton', 'Neutron', 'Nucleus'],
    correct: 2,
    solution: '<p><strong>C — neutron.</strong> Chadwick discovered neutral particles in the nucleus through bombardment experiments. Before this discovery, scientists could not explain why atomic masses were roughly twice the atomic number — neutrons provided the answer.</p>'
  },
  {
    id: 'p24', type: 'concept', tag: 'Empirical Formula',
    q: 'Hydrogen peroxide has the molecular formula H₂O₂. What is its empirical formula?',
    choices: ['H₂O₂', 'HO', 'H₂O', 'H₄O₄'],
    correct: 1,
    solution: '<p><strong>B — HO.</strong> Divide each subscript by the GCF (which is 2): H: 2÷2=1, O: 2÷2=1. The empirical formula is HO. Note that water (H₂O) is a different compound entirely, even though it also contains H and O.</p>'
  },
  {
    id: 'p25', type: 'concept', tag: 'Atomic Number',
    q: 'Atom X has 26 protons and 30 neutrons. Atom Y has 26 protons and 28 neutrons. Which statement is correct?',
    choices: ['X and Y are different elements with the same mass number', 'X and Y are isotopes of the same element', 'X and Y are ions with different charges', 'X and Y are identical atoms'],
    correct: 1,
    solution: '<p><strong>B — isotopes of the same element.</strong> Both atoms have Z=26 (iron), so they are the same element. They differ in neutron count (30 vs 28) and therefore mass number (56 vs 54). By definition, atoms of the same element with different neutron counts are isotopes.</p>'
  },
  {
    id: 'p26', type: 'concept', tag: 'Chemical Formulas',
    q: 'In the formula Al₂(SO₄)₃, how many oxygen atoms are present per formula unit?',
    choices: ['4', '3', '12', '6'],
    correct: 2,
    solution: '<p><strong>C — 12.</strong> Inside the parentheses: (SO₄) contains 4 oxygen atoms. The subscript 3 outside the parentheses multiplies all atoms inside: O: 4 × 3 = 12. The complete count is Al:2, S:3, O:12 → 17 total atoms.</p>'
  },
  {
    id: 'p27', type: 'concept', tag: 'Dalton\'s Theory',
    q: 'Which of Dalton\'s original postulates has been modified by modern science?',
    choices: ['Atoms combine in whole-number ratios to form compounds', 'Matter is made of indivisible atoms with no internal structure', 'Atoms are rearranged (not destroyed) in chemical reactions', 'Each element has atoms with characteristic properties'],
    correct: 1,
    solution: '<p><strong>B — atoms are indivisible.</strong> We now know atoms contain subatomic particles (protons, neutrons, electrons) and can be split in nuclear reactions. The other postulates remain valid for describing ordinary chemical behavior.</p>'
  },
  {
    id: 'p28', type: 'concept', tag: 'Isotopes',
    q: 'Two isotopes of the same element always have the same:',
    choices: ['Mass number', 'Number of neutrons', 'Number of protons', 'Number of electrons in their ions'],
    correct: 2,
    solution: '<p><strong>C — number of protons.</strong> Isotopes are defined by having the same atomic number (same proton count = same element). They differ in neutron count and therefore mass number. Their electron count (in neutral atoms) also equals the proton count.</p>'
  },
  {
    id: 'p29', type: 'concept', tag: 'Ions',
    q: 'Which of the following ions has the SAME number of electrons as a neutral neon atom (Z=10)?',
    choices: ['Na⁺ (Z=11)', 'K⁺ (Z=19)', 'F²⁻ (Z=9)', 'Mg⁺ (Z=12)'],
    correct: 0,
    solution: '<p><strong>A — Na⁺.</strong> Na (Z=11) loses 1 electron → 10 electrons = same as neutral Ne. Check the others: K⁺ has 18 electrons; F²⁻ (if it existed) would have 11; Mg⁺ has 11. Only Na⁺ matches Ne\'s 10 electrons.</p>'
  },
  {
    id: 'p30', type: 'concept', tag: 'Subatomic Particles',
    q: 'Which statement about the atomic nucleus is correct?',
    choices: ['The nucleus contains protons and electrons', 'The nucleus is positively charged because it contains protons and neutrons', 'The nucleus has a diameter roughly equal to the whole atom', 'Neutrons in the nucleus carry a negative charge'],
    correct: 1,
    solution: '<p><strong>B — positively charged from protons.</strong> The nucleus contains protons (+) and neutrons (0), so its overall charge is positive. A is wrong (electrons are outside the nucleus). C is wrong (the nucleus is ~100,000× smaller than the atom). D is wrong (neutrons are neutral).</p>'
  },
  {
    id: 'p31', type: 'concept', tag: 'Chemical Formulas',
    q: 'Compounds with the same molecular formula but different structural arrangements are called:',
    choices: ['Isotopes', 'Isomers', 'Allotropes', 'Ions'],
    correct: 1,
    solution: '<p><strong>B — isomers.</strong> Isomers share the same molecular formula (same number and type of atoms) but differ in how those atoms are connected. For example, C₂H₆O can be ethanol or dimethyl ether — same formula, very different structures and properties.</p>'
  },
  {
    id: 'p32', type: 'concept', tag: 'Atomic Mass Unit',
    q: 'The atomic mass unit (amu) is defined as:',
    choices: ['The mass of one proton', 'Exactly 1/12 the mass of a carbon-12 atom', 'The mass of one neutron', 'The average mass of all naturally occurring carbon atoms'],
    correct: 1,
    solution: '<p><strong>B — 1/12 the mass of carbon-12.</strong> This definition was chosen because carbon-12 is a standard reference isotope. It makes the mass of one carbon-12 atom exactly 12.000 amu, which links atomic mass to molar mass elegantly.</p>'
  },
  {
    id: 'p33', type: 'concept', tag: 'Average Atomic Mass',
    q: 'An element has two isotopes. The average atomic mass is closest to the mass of the more abundant isotope. Why?',
    choices: ['The more abundant isotope has more protons', 'A weighted average is pulled toward the value with the higher weight (abundance)', 'The heavier isotope always contributes more to the average', 'The periodic table rounds to the nearest whole number'],
    correct: 1,
    solution: '<p><strong>B — weighted average is pulled toward higher weight.</strong> This is a fundamental property of weighted averages. For example, chlorine\'s average (35.45 amu) is much closer to Cl-35 than Cl-37 because Cl-35 makes up ~76% of all chlorine atoms.</p>'
  },
  {
    id: 'p34', type: 'concept', tag: 'Atomic Number',
    q: 'An atom has the nuclear symbol ⁶³₂₉Cu. How many neutrons does it have?',
    choices: ['29', '63', '34', '92'],
    correct: 2,
    solution: '<p><strong>C — 34 neutrons.</strong> The nuclear symbol shows A=63 (mass number) and Z=29 (atomic number, copper). Neutrons = A − Z = 63 − 29 = 34.</p>'
  },
  {
    id: 'p35', type: 'concept', tag: 'Chemical Formulas',
    q: 'What is the total number of atoms in one formula unit of Ca₃(PO₄)₂?',
    choices: ['7', '9', '13', '11'],
    correct: 2,
    solution: '<p><strong>C — 13 atoms.</strong> Ca: 3 atoms. Inside (PO₄)₂: P = 1×2 = 2 atoms; O = 4×2 = 8 atoms. Total = 3 + 2 + 8 = 13 atoms per formula unit.</p>'
  },
  {
    id: 'p36', type: 'concept', tag: 'Ions',
    q: 'When a neutral atom becomes an anion, it:',
    choices: ['Loses protons and becomes lighter', 'Gains protons from another atom', 'Gains electrons and becomes negatively charged', 'Loses neutrons from the nucleus'],
    correct: 2,
    solution: '<p><strong>C — gains electrons and becomes negatively charged.</strong> Anions form when atoms gain electrons (from another atom or molecule). No protons or neutrons change during ion formation — only electrons transfer.</p>'
  },
  {
    id: 'p37', type: 'concept', tag: 'Empirical Formula',
    q: 'Which pair of compounds could be represented by the same empirical formula?',
    choices: ['H₂O and H₂O₂', 'CH₄ and C₂H₄', 'C₂H₄ and C₄H₈', 'CO and CO₂'],
    correct: 2,
    solution: '<p><strong>C — C₂H₄ and C₄H₈.</strong> C₂H₄: GCF=2 → CH₂. C₄H₈: GCF=4 → CH₂. Both reduce to the empirical formula CH₂. The others: H₂O and H₂O₂ give different empirical formulas (H₂O and HO); CH₄ → CH₄; C₂H₄ → CH₂; CO → CO; CO₂ → CO₂.</p>'
  },
  {
    id: 'p38', type: 'concept', tag: 'Millikan',
    q: 'What was the significance of Millikan\'s oil drop experiment?',
    choices: ['It discovered the proton and measured its charge', 'It revealed the structure of the atomic nucleus', 'It determined the fundamental charge of a single electron', 'It showed that atoms are mostly empty space'],
    correct: 2,
    solution: '<p><strong>C — fundamental charge of the electron.</strong> Millikan suspended charged oil droplets between electric plates and measured the minimum electric force needed, revealing that charge always comes in multiples of one minimum value: the electron charge (−1.602 × 10⁻¹⁹ C).</p>'
  },
  {
    id: 'p39', type: 'concept', tag: 'Subatomic Particles',
    q: 'Protons and neutrons are similar in that both:',
    choices: ['Carry a positive charge', 'Are located outside the nucleus', 'Have a mass of approximately 1 amu', 'Are repelled by the nucleus'],
    correct: 2,
    solution: '<p><strong>C — both have mass ≈ 1 amu.</strong> Proton = 1.0073 amu; Neutron = 1.0087 amu. They are both nucleons located in the nucleus. Protons are positive; neutrons are neutral. Electrons (not protons/neutrons) are outside the nucleus.</p>'
  },
  {
    id: 'p40', type: 'concept', tag: 'Chemical Formulas',
    q: 'What type of formula shows which atoms are bonded to which in a molecule?',
    choices: ['Molecular formula', 'Empirical formula', 'Structural formula', 'Nuclear symbol'],
    correct: 2,
    solution: '<p><strong>C — structural formula.</strong> A structural formula shows every bond between atoms (e.g., H−O−H for water). Molecular formulas give counts; empirical formulas give ratios; nuclear symbols describe single atoms, not compounds.</p>'
  },
  {
    id: 'p41', type: 'concept', tag: 'Dalton\'s Theory',
    q: 'Dalton\'s law of multiple proportions states that when two elements form more than one compound, the ratios of the masses of one element that combine with a fixed mass of the other are:',
    choices: ['Equal to each other', 'Small whole-number ratios', 'Irrational numbers', 'Equal to the atomic mass ratio'],
    correct: 1,
    solution: '<p><strong>B — small whole-number ratios.</strong> For example, CO and CO₂ both contain C and O. For a fixed mass of carbon, the oxygen in CO₂ is exactly twice the oxygen in CO — a 1:2 ratio. This simple ratio arises because atoms combine in discrete, whole-number quantities.</p>'
  },
  {
    id: 'p42', type: 'concept', tag: 'Isotopes',
    q: 'Carbon-12 and carbon-14 are both isotopes of carbon. What do they have in common?',
    choices: ['The same number of neutrons', 'The same mass number', 'The same number of protons', 'The same mass in amu'],
    correct: 2,
    solution: '<p><strong>C — same number of protons.</strong> Both have Z=6 (6 protons), which is why they are both carbon. They differ in mass number (12 vs 14) and neutron count (6 vs 8). C-14 is radioactive and is used in radiocarbon dating.</p>'
  },
  {
    id: 'p43', type: 'concept', tag: 'Ions',
    q: 'Fe³⁺ has an atomic number of 26. How many electrons does Fe³⁺ have?',
    choices: ['26', '29', '23', '30'],
    correct: 2,
    solution: '<p><strong>C — 23 electrons.</strong> Electrons = Z − charge = 26 − 3 = 23. Iron lost 3 electrons to form the Fe³⁺ ion. Note that protons (26) and neutrons are unchanged.</p>'
  },
  {
    id: 'p44', type: 'concept', tag: 'Subatomic Particles',
    q: 'Which statement correctly explains why atoms are electrically neutral?',
    choices: ['Protons and electrons cancel out by combining in the nucleus', 'Atoms contain equal numbers of protons and electrons', 'Neutrons balance the charges of protons and electrons', 'The positive nucleus repels all electrons away equally'],
    correct: 1,
    solution: '<p><strong>B — equal numbers of protons and electrons.</strong> Each proton carries a +1 charge and each electron carries a −1 charge. When these counts are equal, charges cancel and the atom is neutral. Neutrons contribute no charge.</p>'
  },
  {
    id: 'p45', type: 'concept', tag: 'Chemical Formulas',
    q: 'How many hydrogen atoms are in one molecule of sucrose, C₁₂H₂₂O₁₁?',
    choices: ['11', '12', '22', '45'],
    correct: 2,
    solution: '<p><strong>C — 22 hydrogen atoms.</strong> Read the subscript after H in the molecular formula: C₁₂<strong>H₂₂</strong>O₁₁. The subscript 22 tells you there are 22 hydrogen atoms per molecule.</p>'
  },
  {
    id: 'p46', type: 'concept', tag: 'Atomic Mass Unit',
    q: 'Which of the following is approximately equal to the mass of one proton?',
    choices: ['1.6605 × 10⁻²⁴ g', '9.109 × 10⁻²⁸ g', '1.6605 × 10⁻¹⁹ g', '6.022 × 10²³ g'],
    correct: 0,
    solution: '<p><strong>A — 1.6605 × 10⁻²⁴ g.</strong> One amu = 1.6605 × 10⁻²⁴ g, and protons have a mass of approximately 1.0073 amu, so a proton\'s mass ≈ 1.673 × 10⁻²⁴ g. Option B is the electron mass. Option C is the electron charge in coulombs. Option D is Avogadro\'s number.</p>'
  },
  {
    id: 'p47', type: 'concept', tag: 'Isotopes',
    q: 'An element has three naturally occurring isotopes with masses 27.977, 28.976, and 29.974 amu. The average atomic mass is 28.086 amu. Which isotope is most abundant?',
    choices: ['The 27.977 amu isotope (Si-28)', 'The 28.976 amu isotope (Si-29)', 'The 29.974 amu isotope (Si-30)', 'Cannot be determined from this information'],
    correct: 0,
    solution: '<p><strong>A — the 27.977 amu isotope (Si-28).</strong> The average (28.086) is closest to 27.977, so that isotope must have the highest abundance (it pulls the average toward its value). In reality, Si-28 makes up about 92% of natural silicon.</p>'
  },
  {
    id: 'p48', type: 'concept', tag: 'Empirical Formula',
    q: 'Benzene has the molecular formula C₆H₆. What is its empirical formula?',
    choices: ['C₆H₆', 'CH', 'C₂H₂', 'C₃H₃'],
    correct: 1,
    solution: '<p><strong>B — CH.</strong> GCF of subscripts 6 and 6 is 6. Divide each by 6: C:1, H:1. Empirical formula = CH. This 1:1 carbon-to-hydrogen ratio is characteristic of many aromatic compounds.</p>'
  },
  {
    id: 'p49', type: 'concept', tag: 'Ions',
    q: 'Which change occurs when a neutral sulfur atom (Z=16) forms the S²⁻ ion?',
    choices: ['It loses 2 protons', 'It gains 2 neutrons', 'It gains 2 electrons', 'It loses 2 electrons'],
    correct: 2,
    solution: '<p><strong>C — gains 2 electrons.</strong> A 2− charge means 2 more electrons than protons. Neutral S has 16 electrons; S²⁻ has 18 electrons. No protons or neutrons change — only electrons transfer during ion formation.</p>'
  },
  {
    id: 'p50', type: 'concept', tag: 'Chemical Formulas',
    q: 'What does a subscript in a chemical formula tell you?',
    choices: ['The charge of the preceding element', 'The number of atoms of the preceding element (or group) per formula unit', 'The atomic number of the preceding element', 'The mass of the preceding element in amu'],
    correct: 1,
    solution: '<p><strong>B — number of atoms per formula unit.</strong> In H₂O, the subscript 2 after H means there are 2 hydrogen atoms per molecule. Subscripts after a closing parenthesis multiply every atom inside. They have no relationship to charge or atomic number.</p>'
  },
  {
    id: 'p51', type: 'concept', tag: 'Dalton\'s Theory',
    q: 'The law of definite proportions states that a given compound always contains the same elements in the same proportion by mass. Which part of Dalton\'s theory explains this?',
    choices: ['Atoms cannot be created or destroyed', 'All atoms of a given element are identical and have the same mass', 'Atoms combine in fixed whole-number ratios to form compounds', 'Different elements have atoms with different properties'],
    correct: 2,
    solution: '<p><strong>C — atoms combine in fixed whole-number ratios.</strong> If water is always 2 H atoms per O atom, and all H atoms have the same mass and all O atoms have the same mass, then the mass ratio H:O is always fixed (1:8 by mass). Fixed atom ratios → fixed mass ratios.</p>'
  },
  {
    id: 'p52', type: 'concept', tag: 'Atomic Number',
    q: 'Element X has 15 protons. What element is it?',
    choices: ['Nitrogen (Z=7)', 'Oxygen (Z=8)', 'Phosphorus (Z=15)', 'Sulfur (Z=16)'],
    correct: 2,
    solution: '<p><strong>C — Phosphorus (Z=15).</strong> The atomic number is the number of protons. Z=15 corresponds to phosphorus (P), which is in Group 15 of the periodic table. Each element has a unique atomic number.</p>'
  },
  {
    id: 'p53', type: 'concept', tag: 'Subatomic Particles',
    q: 'Where are electrons located in the modern model of the atom?',
    choices: ['Inside the nucleus alongside protons', 'Randomly distributed throughout the atom with no pattern', 'In a region of space outside the nucleus', 'Orbiting the nucleus in fixed circular paths at exact distances'],
    correct: 2,
    solution: '<p><strong>C — region outside the nucleus.</strong> Electrons occupy the space around the nucleus — a much larger volume than the nucleus itself. Option D describes the old Bohr model, which is a useful simplification but not the modern quantum mechanical picture.</p>'
  },
  {
    id: 'p54', type: 'concept', tag: 'Isotopes',
    q: 'How are the chemical properties of carbon-12 and carbon-14 expected to compare?',
    choices: ['Very different — they have different masses', 'Very similar — they have the same number of protons and electrons', 'Identical — isotopes are completely the same in every way', 'Carbon-14 is more reactive because it is radioactive'],
    correct: 1,
    solution: '<p><strong>B — very similar chemical properties.</strong> Chemical behavior is determined by electron configuration, which depends on the number of electrons (= protons = Z). Both C-12 and C-14 have Z=6 and 6 electrons, so they react the same way. They differ in physical properties like density and nuclear stability.</p>'
  },
  {
    id: 'p55', type: 'concept', tag: 'Chemical Formulas',
    q: 'Glucose (C₆H₁₂O₆) and fructose are both monosaccharides with the same molecular formula but different structures. This makes them:',
    choices: ['Isotopes', 'Ions', 'Isomers', 'Empirical formula pairs'],
    correct: 2,
    solution: '<p><strong>C — isomers.</strong> Isomers are compounds with the same molecular formula but different arrangements of atoms (different structures), leading to different properties. Glucose and fructose both have C₆H₁₂O₆ but differ in how the atoms are connected, giving them different physical and biochemical properties.</p>'
  },
  {
    id: 'p56', type: 'concept', tag: 'Average Atomic Mass',
    q: 'Copper has two stable isotopes: Cu-63 (abundance ~69%) and Cu-65 (abundance ~31%). Which value is closest to copper\'s average atomic mass?',
    choices: ['63.0 amu', '63.5 amu', '64.0 amu', '65.0 amu'],
    correct: 1,
    solution: '<p><strong>B — 63.5 amu.</strong> The actual value is ~63.55 amu. With ~69% at mass 63 and ~31% at mass 65, the weighted average is pulled toward 63 but not all the way. (63 × 0.69) + (65 × 0.31) ≈ 43.47 + 20.15 = 63.62 amu. Option B (63.5) is closest.</p>'
  },
  {
    id: 'p57', type: 'concept', tag: 'Ions',
    q: 'An ion has 18 electrons and a charge of 2+. Which element is it?',
    choices: ['Argon (Z=18)', 'Calcium (Z=20)', 'Chlorine (Z=17)', 'Potassium (Z=19)'],
    correct: 1,
    solution: '<p><strong>B — Calcium (Z=20).</strong> Electrons = Z − charge → Z = electrons + charge = 18 + 2 = 20. Element with Z=20 is calcium. Ca²⁺ has lost 2 electrons (20 − 2 = 18 electrons) and is isoelectronic with argon.</p>'
  },
  {
    id: 'p58', type: 'concept', tag: 'Subatomic Particles',
    q: 'The discovery that all cathode rays had the same charge-to-mass ratio, regardless of the cathode material, suggested that:',
    choices: ['Different elements have different electrons', 'Electrons are a fundamental component of all matter', 'Cathode rays are made of protons', 'The nucleus is positive'],
    correct: 1,
    solution: '<p><strong>B — electrons are a fundamental component of all matter.</strong> Because the same type of particle (with the same e/m ratio) was produced from any material, Thomson concluded these particles (electrons) must be present in all atoms.</p>'
  },
  {
    id: 'p59', type: 'concept', tag: 'Chemical Formulas',
    q: 'How many oxygen atoms are in one formula unit of Al₂(SO₄)₃?',
    choices: ['3', '4', '7', '12'],
    correct: 3,
    solution: '<p><strong>D — 12 oxygen atoms.</strong> The sulfate group (SO₄) contains 4 oxygen atoms. The subscript 3 outside the parentheses multiplies everything inside: O = 4 × 3 = 12. Full count: Al:2, S:3, O:12 = 17 atoms total.</p>'
  },
  {
    id: 'p60', type: 'concept', tag: 'Dalton\'s Theory',
    q: 'Which observation directly supports the law of conservation of mass?',
    choices: ['Elements always combine in fixed ratios', 'The products of a reaction have the same total mass as the reactants', 'All samples of a pure compound have the same composition', 'Different elements have different characteristic atoms'],
    correct: 1,
    solution: '<p><strong>B — products have the same mass as reactants.</strong> Conservation of mass means mass is neither created nor destroyed in a chemical reaction. Dalton\'s atomic theory explains this: atoms are rearranged, not created or destroyed, so mass stays constant.</p>'
  },
  {
    id: 'p61', type: 'concept', tag: 'Atomic Mass Unit',
    q: 'One atomic mass unit (amu) is equal to:',
    choices: ['1.6605 × 10⁻²⁴ g', '6.022 × 10²³ g', '1.6605 × 10⁻¹⁹ g', '1.000 g'],
    correct: 0,
    solution: '<p><strong>A — 1.6605 × 10⁻²⁴ g.</strong> This tiny mass reflects the scale of individual atoms. One mole of these 1-amu units (6.022 × 10²³ of them) weighs exactly 1 gram — this is the bridge between atomic mass and molar mass.</p>'
  },
  {
    id: 'p62', type: 'concept', tag: 'Isotopes',
    q: 'Radioactive carbon-14 is used in radiocarbon dating. C-14 and C-12 are isotopes because they:',
    choices: ['Have the same atomic mass', 'Have the same mass number', 'Have the same atomic number (Z=6)', 'Both have 6 neutrons'],
    correct: 2,
    solution: '<p><strong>C — same atomic number (Z=6).</strong> Both are carbon (Z=6), which is the definition of isotopes: same element (same Z), different mass number (12 vs 14). C-12 has 6 neutrons; C-14 has 8 neutrons — they differ in neutron count, not proton count.</p>'
  },
  {
    id: 'p63', type: 'concept', tag: 'Ions',
    q: 'Which of the following is a cation?',
    choices: ['Cl⁻', 'O²⁻', 'S²⁻', 'Mg²⁺'],
    correct: 3,
    solution: '<p><strong>D — Mg²⁺.</strong> A cation is a positively charged ion (lost electrons). Mg²⁺ has lost 2 electrons. The other options (Cl⁻, O²⁻, S²⁻) are all anions — they have gained electrons and carry negative charges.</p>'
  },
  {
    id: 'p64', type: 'concept', tag: 'Empirical Formula',
    q: 'A compound has the molecular formula N₂H₄. What is its empirical formula?',
    choices: ['N₂H₄', 'NH₃', 'NH₂', 'N₂H₂'],
    correct: 2,
    solution: '<p><strong>C — NH₂.</strong> GCF of 2 and 4 is 2. Divide each subscript: N: 2÷2=1, H: 4÷2=2. Empirical formula = NH₂. This is hydrazine — its 1:2 N:H ratio is the simplest whole-number expression.</p>'
  },
  {
    id: 'p65', type: 'concept', tag: 'Chemical Formulas',
    q: 'What is the total number of atoms in one molecule of glucose, C₆H₁₂O₆?',
    choices: ['18', '21', '24', '12'],
    correct: 2,
    solution: '<p><strong>C — 24 atoms.</strong> Add all subscripts: C: 6, H: 12, O: 6. Total = 6 + 12 + 6 = 24 atoms per molecule. This is why glucose is a relatively large organic molecule.</p>'
  },
  {
    id: 'p66', type: 'concept', tag: 'Subatomic Particles',
    q: 'Which subatomic particle carries a positive charge?',
    choices: ['Electron', 'Neutron', 'Proton', 'Photon'],
    correct: 2,
    solution: '<p><strong>C — proton.</strong> Protons carry a +1 charge and are located in the nucleus. Electrons (−1) are outside the nucleus. Neutrons (0) are neutral. Photons are particles of light — not subatomic particles of atoms.</p>'
  },
  {
    id: 'p67', type: 'concept', tag: 'Atomic Number',
    q: 'An atom has 17 protons. When it becomes a Cl⁻ ion, the atomic number:',
    choices: ['Decreases to 16', 'Increases to 18', 'Stays at 17', 'Changes to match the number of electrons'],
    correct: 2,
    solution: '<p><strong>C — stays at 17.</strong> Atomic number = number of protons, which never changes during ion formation. Only electrons are gained or lost. Cl (Z=17) becomes Cl⁻ by gaining 1 electron, but it still has 17 protons and is still chlorine.</p>'
  },

  /* ═══════════════════ MULTI-STEP PROBLEMS (17) ═══════════════════ */

  {
    id: 'p68', type: 'multi', tag: 'Isotopes + Particles',
    q: 'An atom of bromine-80 (Z = 35) forms a Br⁻ ion. How many electrons does Br⁻ have, and how does this compare to the number of neutrons in Br-80?',
    choices: [
      'Br⁻ has 36 electrons; Br-80 has 45 neutrons — more neutrons than electrons',
      'Br⁻ has 34 electrons; Br-80 has 45 neutrons — more neutrons than electrons',
      'Br⁻ has 36 electrons; Br-80 has 35 neutrons — they are about equal',
      'Br⁻ has 35 electrons; Br-80 has 45 neutrons — more neutrons'
    ],
    correct: 0,
    solution: '<p><strong>Electrons in Br⁻:</strong> Z=35, charge=−1 → electrons = 35 − (−1) = 36.<br><strong>Neutrons in Br-80:</strong> A=80, Z=35 → neutrons = 80 − 35 = 45.<br>So Br⁻ has 36 electrons and the nucleus has 45 neutrons — more neutrons than electrons. Answer A is correct.</p>'
  },
  {
    id: 'p69', type: 'multi', tag: 'Nuclear Symbol',
    q: 'Element X has the nuclear symbol ⁵⁶₂₆X. It forms a 2+ ion. Which set of values is correct for the ion?',
    choices: [
      'Protons: 26, Neutrons: 30, Electrons: 28',
      'Protons: 26, Neutrons: 30, Electrons: 24',
      'Protons: 26, Neutrons: 56, Electrons: 24',
      'Protons: 28, Neutrons: 28, Electrons: 26'
    ],
    correct: 1,
    solution: '<p>From ⁵⁶₂₆X: Z = 26 (protons), A = 56, neutrons = A − Z = 56 − 26 = 30. For a 2+ ion: electrons = Z − charge = 26 − 2 = <strong>24 electrons</strong>. The correct set is protons=26, neutrons=30, electrons=24 — option B. Option A has 28 electrons, which would correspond to a 2− ion, not 2+.</p>'
  },
  {
    id: 'p70', type: 'multi', tag: 'Average Atomic Mass',
    q: 'An unknown element has two isotopes. Isotope A has a mass of 6.015 amu and Isotope B has a mass of 7.016 amu. The average atomic mass is 6.94 amu. What is the approximate percent abundance of Isotope A?',
    choices: ['7.6%', '19.9%', '75.8%', '92.4%'],
    correct: 0,
    solution: '<p>Let x = fraction of isotope A. Then:<br>6.015x + 7.016(1−x) = 6.94<br>6.015x + 7.016 − 7.016x = 6.94<br>−1.001x = −0.076<br>x = 0.0759 ≈ 7.6%.<br>Isotope A (mass 6.015) is about <strong>7.6% abundant</strong> — this is lithium-6. Isotope B (Li-7) is 92.4% abundant, pulling the average close to 7.</p>'
  },
  {
    id: 'p71', type: 'multi', tag: 'Formula + Atom Count',
    q: 'How many total atoms are in one formula unit of Al₂(SO₄)₃?',
    choices: ['7', '12', '17', '15'],
    correct: 2,
    solution: '<p>Count carefully: Al: 2. Inside (SO₄)₃ — S: 1×3=3, O: 4×3=12. Total = 2 + 3 + 12 = <strong>17 atoms</strong>.</p>'
  },
  {
    id: 'p72', type: 'multi', tag: 'Isotopes + Averages',
    q: 'Gallium has two stable isotopes: Ga-69 (mass = 68.926 amu) and Ga-71 (mass = 70.925 amu). The average atomic mass of gallium is 69.723 amu. What is the percent abundance of Ga-69?',
    choices: ['39.9%', '50.0%', '60.1%', '75.8%'],
    correct: 2,
    solution: '<p>Let x = fraction of Ga-69. Then:<br>68.926x + 70.925(1−x) = 69.723<br>68.926x + 70.925 − 70.925x = 69.723<br>−1.999x = −1.202<br>x = 0.6013 ≈ <strong>60.1%</strong> for Ga-69. Ga-71 is 39.9% abundant.</p>'
  },
  {
    id: 'p73', type: 'multi', tag: 'Nuclear Symbol + Ions',
    q: 'A neutral atom has 20 protons and 20 neutrons. It then loses 2 electrons. Which nuclear symbol AND ion description are both correct?',
    choices: [
      '⁴⁰₂₀Ca; the ion has 18 electrons and is called Ca²⁺',
      '²⁰₄₀Ca; the ion has 22 electrons and is called Ca²⁺',
      '⁴⁰₂₀Ca; the ion has 22 electrons and is called Ca²⁻',
      '⁴⁰₂₀Ca; the ion has 20 electrons and is called Ca⁰'
    ],
    correct: 0,
    solution: '<p>Nuclear symbol: A = protons + neutrons = 20 + 20 = 40; Z = 20. Symbol: ⁴⁰₂₀Ca ✓. After losing 2 electrons: electrons = 20 − 2 = 18, charge = +2 → Ca²⁺. Answer A is correct.</p>'
  },
  {
    id: 'p74', type: 'multi', tag: 'Dalton + Modern',
    q: 'Dalton claimed all atoms of an element are identical. Isotopes show this is not perfectly true. Which aspect of Dalton\'s claim IS still valid?',
    choices: [
      'All atoms of an element have the same mass',
      'All atoms of an element have the same number of protons and identical chemical properties',
      'All atoms of an element have the same number of neutrons',
      'Atoms of one element cannot be distinguished from atoms of another element'
    ],
    correct: 1,
    solution: '<p><strong>B</strong> — All atoms of an element share the same atomic number (protons) and therefore the same electron configuration and chemical properties. Isotopes differ only in neutron count (and mass), but react nearly identically. Dalton\'s insight that each element has characteristic atoms that behave the same chemically remains correct.</p>'
  },
  {
    id: 'p75', type: 'multi', tag: 'Empirical + Molecular',
    q: 'A compound with empirical formula CH₂O has a molar mass of approximately 180 g/mol. The molar mass of CH₂O is approximately 30 g/mol. What is the molecular formula?',
    choices: ['CH₂O', 'C₃H₆O₃', 'C₆H₁₂O₆', 'C₄H₈O₄'],
    correct: 2,
    solution: '<p>Ratio = molar mass / empirical formula mass = 180 / 30 = 6. Multiply each subscript in CH₂O by 6: C:1×6=6, H:2×6=12, O:1×6=6. Molecular formula = <strong>C₆H₁₂O₆</strong> (glucose).</p>'
  },
  {
    id: 'p76', type: 'multi', tag: 'Ions + Particles',
    q: 'An ion has 36 electrons, 35 protons, and 45 neutrons. What is its identity and charge?',
    choices: ['Br⁻ (bromine, 1− charge)', 'Kr (krypton, neutral)', 'Se²⁻ (selenium, 2− charge)', 'Rb⁺ (rubidium, 1+ charge)'],
    correct: 0,
    solution: '<p>Protons = 35 → element is bromine (Br, Z=35). Charge = protons − electrons = 35 − 36 = −1. So this is <strong>Br⁻</strong>. Neutrons = 45 → A = Z + N = 35 + 45 = 80 → Br-80.</p>'
  },
  {
    id: 'p77', type: 'multi', tag: 'Formula + Empirical',
    q: 'A molecule contains 2 carbon atoms, 6 hydrogen atoms, and 1 oxygen atom. What is its empirical formula?',
    choices: ['C₂H₆O', 'CH₃O', 'CHO', 'C₂H₆O — this IS the empirical formula because the GCF is 1'],
    correct: 3,
    solution: '<p>Molecular formula: C₂H₆O. Find GCF of subscripts 2, 6, 1. GCF = 1. When the GCF is 1, the empirical formula equals the molecular formula: <strong>C₂H₆O</strong>. This is the formula for ethanol — you cannot simplify it further.</p>'
  },
  {
    id: 'p78', type: 'multi', tag: 'Average Atomic Mass',
    q: 'Element Z has two isotopes. Z-10 (mass = 10.013 amu) makes up 20.0% and Z-11 (mass = 11.009 amu) makes up 80.0%. What is the average atomic mass, and which element is this most likely?',
    choices: ['10.810 amu — Boron', '10.500 amu — Carbon', '11.000 amu — Sodium', '10.200 amu — Beryllium'],
    correct: 0,
    solution: '<p>(10.013 × 0.200) + (11.009 × 0.800) = 2.003 + 8.807 = <strong>10.810 amu</strong>. The periodic table value for boron is 10.811 amu — this is boron (B, Z=5). Answer A is correct.</p>'
  },
  {
    id: 'p79', type: 'multi', tag: 'Subatomic + Nuclear Symbol',
    q: 'Which atom has 56 protons, 81 neutrons, and 56 electrons?',
    choices: ['Ba-137 (Z=56)', 'Cs-137 (Z=55)', 'Ba-137 (Z=56) — but as an ion', 'La-137 (Z=57)'],
    correct: 0,
    solution: '<p>Z = protons = 56 → element is barium (Ba). Neutral (electrons = protons = 56). A = protons + neutrons = 56 + 81 = 137. This is <strong>Ba-137</strong>, a stable isotope of barium.</p>'
  },
  {
    id: 'p80', type: 'multi', tag: 'Ions + Isoelectronic',
    q: 'Na⁺ (Z=11), Mg²⁺ (Z=12), Al³⁺ (Z=13), and Ne (Z=10) all have 10 electrons. What term describes species that have the same number of electrons?',
    choices: ['Isotopes', 'Isomers', 'Isoelectronic', 'Allotropes'],
    correct: 2,
    solution: '<p><strong>C — isoelectronic.</strong> Isoelectronic species have the same number of electrons (and therefore the same electron configuration). Na⁺, Mg²⁺, Al³⁺, and Ne all have 10 electrons and share the neon electron configuration, despite being different elements/ions.</p>'
  },
  {
    id: 'p81', type: 'multi', tag: 'Formula + Counting',
    q: 'How many total atoms are in one formula unit of Ca₃(PO₄)₂, and what is its empirical formula?',
    choices: [
      '13 total atoms; Ca₃(PO₄)₂ is already the empirical formula',
      '10 total atoms; CaPO₄',
      '13 total atoms; CaPO₄ is a simpler formula',
      '9 total atoms; Ca₃P₂O₈'
    ],
    correct: 0,
    solution: '<p>Atom count: Ca=3, P=1×2=2, O=4×2=8. Total = 3+2+8 = <strong>13 atoms</strong>. GCF of subscripts 3, 2, 8 is 1 — so Ca₃(PO₄)₂ cannot be simplified further and is already the empirical formula. Answer A is correct.</p>'
  },
  {
    id: 'p82', type: 'multi', tag: 'Dalton + Proportions',
    q: 'Water (H₂O) is always 11.2% hydrogen and 88.8% oxygen by mass. Carbon dioxide (CO₂) is always 27.3% carbon and 72.7% oxygen. These facts illustrate which of Dalton\'s laws?',
    choices: ['Law of conservation of mass', 'Law of definite proportions', 'Law of multiple proportions', 'Law of mass action'],
    correct: 1,
    solution: '<p><strong>B — law of definite proportions.</strong> Each pure compound always has the same mass ratio of elements, regardless of sample size or source. Water is always ~1:8 H:O by mass. This is explained by atoms combining in fixed whole-number ratios (2H per O in water, 1C per 2O in CO₂).</p>'
  },
  {
    id: 'p83', type: 'multi', tag: 'Isotopes + Notation',
    q: 'Write out the nuclear symbol for an atom with 7 protons and 8 neutrons, and identify the element.',
    choices: ['¹⁵₇N — Nitrogen-15', '¹⁵₈O — Oxygen-15', '⁸₇N — Nitrogen-8', '⁷₈O — Oxygen-7'],
    correct: 0,
    solution: '<p>Z = 7 (nitrogen, N). A = protons + neutrons = 7 + 8 = 15. Nuclear symbol: <strong>¹⁵₇N</strong> — this is nitrogen-15, a stable heavy isotope of nitrogen (the more common isotope is N-14 with 7 neutrons).</p>'
  },
  {
    id: 'p84', type: 'multi', tag: 'All Concepts',
    q: 'An atom has: 29 protons, 36 neutrons, and 29 electrons. It forms a 2+ ion. Which of the following statements about this atom and its ion are BOTH correct?',
    choices: [
      'The atom is Cu-65; the ion Cu²⁺ has 27 electrons',
      'The atom is Cu-65; the ion Cu²⁺ has 29 electrons',
      'The atom is Zn-65; the ion Zn²⁺ has 27 electrons',
      'The atom is Cu-64; the ion Cu²⁺ has 31 electrons'
    ],
    correct: 0,
    solution: '<p>Z=29 → copper (Cu). A = 29 + 36 = 65 → Cu-65. For Cu²⁺: electrons = Z − charge = 29 − 2 = 27. Both statements in A are correct: Cu-65 with a Cu²⁺ ion having 27 electrons.</p>'
  }

]; // end ALL_PROBLEMS — 84 problems total
