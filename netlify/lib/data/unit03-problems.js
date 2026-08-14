/* ── Unit 03 Problem Bank — Atomic Structure
   174 problems total (84 original + 60 added + 30 hard expansion)
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  /* ═══════════════════ CALCULATION PROBLEMS (12) ═══════════════════ */

  {
    id: 'p01', difficulty: 'easy', type: 'calc', tag: 'Subatomic Particles',
    q: 'How many neutrons are in an atom of iron-56 (Fe-56)? (Atomic number of Fe = 26)',
    answer: 30, tolerance: 0,
    solution: '<p>Neutrons = A - Z = 56 - 26 = <strong>30 neutrons</strong>. The mass number (56) minus the atomic number (26) gives the neutron count.</p>'
  },
  {
    id: 'p02', difficulty: 'easy', type: 'calc', tag: 'Subatomic Particles',
    q: 'How many neutrons are in uranium-238? (Atomic number of U = 92)',
    answer: 146, tolerance: 0,
    solution: '<p>Use the isotope relationship: neutrons = mass number - atomic number.</p><p>For U-238, neutrons = 238 - 92 = <strong>146 neutrons</strong>.</p><p>The extra fact about U-238 is interesting, but the key test step is simply subtracting A - Z.</p>'
  },
  {
    id: 'p03', difficulty: 'easy', type: 'calc', tag: 'Ion Electrons',
    q: 'How many electrons does a Ca^2+ ion have? (Atomic number of Ca = 20)',
    answer: 18, tolerance: 0,
    solution: '<p>Electrons = Z - charge = 20 - 2 = <strong>18 electrons</strong>. Ca^2+ has lost 2 electrons, giving it the same electron count as argon.</p>'
  },
  {
    id: 'p04', difficulty: 'easy', type: 'calc', tag: 'Ion Electrons',
    q: 'How many electrons does a Cl^- ion have? (Atomic number of Cl = 17)',
    answer: 18, tolerance: 0,
    solution: '<p>Electrons = Z - charge = 17 - (-1) = 17 + 1 = <strong>18 electrons</strong>. Cl^- has gained 1 electron, giving it the same count as argon.</p>'
  },
  {
    id: 'p05', difficulty: 'medium', type: 'calc', tag: 'Average Atomic Mass',
    q: 'Chlorine has two isotopes: Cl-35 (mass = 34.969 amu, abundance = 75.77%) and Cl-37 (mass = 36.966 amu, abundance = 24.23%). What is the average atomic mass of chlorine in amu? (Round to two decimal places)',
    answer: 35.45, tolerance: 0.02,
    solution: '<p>Average atomic mass = Σ(isotope mass × decimal abundance).</p><p>(34.969 × 0.7577) + (36.966 × 0.2423) = 26.496 + 8.957 = <strong>35.45 amu</strong>. This matches the value on the periodic table.</p>'
  },
  {
    id: 'p06', difficulty: 'medium', type: 'calc', tag: 'Average Atomic Mass',
    q: 'Boron has two isotopes: B-10 (mass = 10.013 amu, abundance = 19.9%) and B-11 (mass = 11.009 amu, abundance = 80.1%). What is the average atomic mass in amu? (Round to two decimal places)',
    answer: 10.81, tolerance: 0.02,
    solution: '<p>Multiply each isotope mass by its decimal abundance, then add the contributions.</p><p>(10.013 × 0.199) + (11.009 × 0.801) = 1.993 + 8.818 = <strong>10.811 amu ≈ 10.81 amu</strong>.</p><p>The average ends up closer to 11 because B-11 is much more abundant.</p>'
  },
  {
    id: 'p07', difficulty: 'easy', type: 'calc', tag: 'Subatomic Particles',
    q: 'How many neutrons are in a phosphorus-31 atom? (Atomic number of P = 15)',
    answer: 16, tolerance: 0,
    solution: '<p>Neutrons = A - Z = 31 - 15 = <strong>16 neutrons</strong>. Phosphorus-31 is the only stable isotope of phosphorus.</p>'
  },
  {
    id: 'p08', difficulty: 'easy', type: 'calc', tag: 'Ion Electrons',
    q: 'How many electrons does an Al^3+ ion have? (Atomic number of Al = 13)',
    answer: 10, tolerance: 0,
    solution: '<p>Electrons = Z - charge = 13 - 3 = <strong>10 electrons</strong>. Al^3+ has lost 3 electrons, giving it the same electron count as neon.</p>'
  },
  {
    id: 'p09', difficulty: 'medium', type: 'calc', tag: 'Average Atomic Mass',
    q: 'Lithium has two isotopes: Li-6 (mass = 6.015 amu, abundance = 7.59%) and Li-7 (mass = 7.016 amu, abundance = 92.41%). What is the average atomic mass in amu? (Round to two decimal places)',
    answer: 6.94, tolerance: 0.02,
    solution: '<p>(6.015 × 0.0759) + (7.016 × 0.9241) = 0.456 + 6.483 = <strong>6.94 amu</strong>. Because Li-7 is far more abundant, the average is close to 7.</p>'
  },
  {
    id: 'p10', difficulty: 'easy', type: 'calc', tag: 'Subatomic Particles',
    q: 'How many neutrons are in a lead-207 (Pb-207) atom? (Atomic number of Pb = 82)',
    answer: 125, tolerance: 0,
    solution: '<p>Neutrons = A - Z = 207 - 82 = <strong>125 neutrons</strong>. Lead-207 is one of four stable lead isotopes.</p>'
  },
  {
    id: 'p11', difficulty: 'easy', type: 'calc', tag: 'Ion Electrons',
    q: 'How many electrons does an O^2- ion have? (Atomic number of O = 8)',
    answer: 10, tolerance: 0,
    solution: '<p>Electrons = Z - charge = 8 - (-2) = 8 + 2 = <strong>10 electrons</strong>. O^2- has gained 2 electrons, making it isoelectronic with neon.</p>'
  },
  {
    id: 'p12', difficulty: 'hard', type: 'calc', tag: 'Average Atomic Mass',
    q: 'Magnesium has three isotopes: Mg-24 (23.985 amu, 78.99%), Mg-25 (24.986 amu, 10.00%), and Mg-26 (25.982 amu, 11.01%). What is the average atomic mass in amu? (Round to two decimal places)',
    answer: 24.31, tolerance: 0.02,
    solution: '<p>Average atomic mass = Σ(isotope mass × decimal abundance).</p><p>(23.985 × 0.7899) + (24.986 × 0.1000) + (25.982 × 0.1101)</p><p>= 18.943 + 2.499 + 2.861 = <strong>24.303 ≈ 24.31 amu</strong>. This matches the periodic table value for Mg.</p>'
  },

  /* ═══════════════════ CONCEPT PROBLEMS (55) ═══════════════════ */

  {
    id: 'p13', difficulty: 'easy', type: 'concept', tag: 'Dalton\'s Theory',
    q: 'According to Dalton\'s atomic theory, what happens to atoms during a chemical reaction?',
    choices: ['Atoms are created from energy', 'Atoms are destroyed and replaced by new atoms', 'Atoms are rearranged but not created or destroyed', 'Atoms fuse together to form new atoms with different properties'],
    correct: 2,
    solution: '<p><strong>C — rearranged but not created or destroyed.</strong> This is the atomic explanation for conservation of mass. A, B, and D all violate Dalton\'s theory. Nuclear reactions are a different story, but ordinary chemistry conserves atoms.</p>'
  },
  {
    id: 'p14', difficulty: 'easy', type: 'concept', tag: 'Atomic Number',
    q: 'What property of an atom determines which element it is?',
    choices: ['The number of neutrons', 'The number of electrons', 'The number of protons (atomic number)', 'The mass number'],
    correct: 2,
    solution: '<p><strong>C — number of protons.</strong> The atomic number (Z) defines the element. Change the proton count and you change the element. Electrons can be gained/lost (ions) and neutrons can vary (isotopes) without changing the elemental identity.</p>'
  },
  {
    id: 'p15', difficulty: 'easy', type: 'concept', tag: 'Rutherford',
    q: 'Rutherford\'s gold foil experiment showed that most alpha particles passed straight through the foil. What did this indicate about atomic structure?',
    choices: ['Atoms are solid spheres with no internal space', 'Atoms contain a uniform distribution of positive charge (plum pudding)', 'Atoms are mostly empty space with a small dense nucleus', 'All electrons are located in the nucleus'],
    correct: 2,
    solution: '<p><strong>C — mostly empty space.</strong> If atoms were solid (A) or uniformly charged (B, the "plum pudding" model), all particles would deflect slightly. Instead, most went straight through (empty space) and a few bounced back sharply (tiny dense nucleus).</p>'
  },
  {
    id: 'p16', difficulty: 'easy', type: 'concept', tag: 'Isotopes',
    q: 'Which of the following best defines isotopes?',
    choices: ['Atoms of different elements with the same mass number', 'Atoms of the same element with different numbers of protons', 'Atoms of the same element with different numbers of neutrons', 'Ions of the same element with different charges'],
    correct: 2,
    solution: '<p><strong>C — same element, different neutron counts.</strong></p><p>Isotopes have the same atomic number, so they are the same element. What changes is the number of neutrons, which changes the mass number.</p><p>That is why isotopes behave almost the same chemically but have different masses.</p>'
  },
  {
    id: 'p17', difficulty: 'easy', type: 'concept', tag: 'Ions',
    q: 'A sodium atom loses one electron to form Na^+. Which statement is true about Na^+?',
    choices: ['It has more protons than a neutral sodium atom', 'It has 11 electrons and 11 protons', 'It has 10 electrons and 11 protons', 'It has a different atomic number than sodium'],
    correct: 2,
    solution: '<p><strong>C — 10 electrons, 11 protons.</strong> Na (Z=11) loses 1 electron → 11 - 1 = 10 electrons. Protons do not change when forming an ion, so there are still 11 protons. The charge is +1 because protons outnumber electrons by 1.</p>'
  },
  {
    id: 'p18', difficulty: 'easy', type: 'concept', tag: 'Subatomic Particles',
    q: 'Which subatomic particle has essentially no contribution to the mass of an atom?',
    choices: ['Proton', 'Neutron', 'Electron', 'Nucleus'],
    correct: 2,
    solution: '<p><strong>C — electron.</strong> An electron\'s mass is 0.00055 amu, roughly 1/1836 the mass of a proton or neutron. For all practical purposes, atomic mass is determined only by protons and neutrons. Electrons contribute negligible mass.</p>'
  },
  {
    id: 'p19', difficulty: 'easy', type: 'concept', tag: 'Chemical Formulas',
    q: 'What type of formula shows the exact number of each type of atom in one molecule of a compound?',
    choices: ['Empirical formula', 'Structural formula', 'Molecular formula', 'Ionic formula'],
    correct: 2,
    solution: '<p><strong>C — molecular formula.</strong> The molecular formula (e.g., C6H12O6 for glucose) shows the actual count of each atom per molecule. The empirical formula (CH2O) gives only the simplest ratio. The structural formula shows connectivity.</p>'
  },
  {
    id: 'p20', difficulty: 'medium', type: 'concept', tag: 'Average Atomic Mass',
    q: 'Why does the average atomic mass of most elements on the periodic table include decimal places rather than being a whole number?',
    choices: ['Atoms cannot have whole-number masses', 'Protons and neutrons do not have exactly 1 amu mass', 'Most elements exist as a mixture of isotopes with different masses', 'The periodic table rounds values incorrectly'],
    correct: 2,
    solution: '<p><strong>C — mixture of isotopes.</strong></p><p>Periodic table masses are usually not whole numbers because they are weighted averages, not single-isotope masses.</p><p>Most elements occur in nature as a mixture of isotopes, so the listed atomic mass reflects all of those isotopes together.</p>'
  },
  {
    id: 'p21', difficulty: 'easy', type: 'concept', tag: 'Ions',
    q: 'What is the correct term for a negatively charged ion?',
    choices: ['Cation', 'Anion', 'Isotope', 'Nucleon'],
    correct: 1,
    solution: '<p><strong>B — anion.</strong> Anions are formed when atoms gain electrons (more electrons than protons → negative charge). Cations are positively charged (lost electrons). Memory trick: Anion has an "n" for "negative."</p>'
  },
  {
    id: 'p22', difficulty: 'easy', type: 'concept', tag: 'Thomson',
    q: 'What did J.J. Thomson discover with his cathode ray tube experiment?',
    choices: ['The proton and its positive charge', 'The nucleus of the atom', 'Electrons — small negatively charged particles in all atoms', 'The neutron and its neutral charge'],
    correct: 2,
    solution: '<p><strong>C — electrons.</strong> Thomson showed that the cathode ray was deflected by electric and magnetic fields, proving it consisted of charged particles. These negative particles were present regardless of the cathode material, meaning they are part of all atoms.</p>'
  },
  {
    id: 'p23', difficulty: 'easy', type: 'concept', tag: 'Chadwick',
    q: 'What particle did James Chadwick discover in 1932?',
    choices: ['Electron', 'Proton', 'Neutron', 'Nucleus'],
    correct: 2,
    solution: '<p><strong>C — neutron.</strong> Chadwick discovered neutral particles in the nucleus through bombardment experiments. Before this discovery, scientists could not explain why atomic masses were roughly twice the atomic number — neutrons provided the answer.</p>'
  },
  {
    id: 'p24', difficulty: 'medium', type: 'concept', tag: 'Empirical Formula',
    q: 'Hydrogen peroxide has the molecular formula H2O2. What is its empirical formula?',
    choices: ['H2O2', 'HO', 'H2O', 'H4O4'],
    correct: 1,
    solution: '<p><strong>B — HO.</strong> Divide each subscript by the GCF (which is 2): H: 2÷2=1, O: 2÷2=1. The empirical formula is HO. Note that water (H2O) is a different compound entirely, even though it also contains H and O.</p>'
  },
  {
    id: 'p25', difficulty: 'medium', type: 'concept', tag: 'Atomic Number',
    q: 'Atom X has 26 protons and 30 neutrons. Atom Y has 26 protons and 28 neutrons. Which statement is correct?',
    choices: ['X and Y are different elements with the same mass number', 'X and Y are isotopes of the same element', 'X and Y are ions with different charges', 'X and Y are identical atoms'],
    correct: 1,
    solution: '<p><strong>B — isotopes of the same element.</strong> Both atoms have Z=26 (iron), so they are the same element. They differ in neutron count (30 vs 28) and therefore mass number (56 vs 54). By definition, atoms of the same element with different neutron counts are isotopes.</p>'
  },
  {
    id: 'p26', difficulty: 'medium', type: 'concept', tag: 'Chemical Formulas',
    q: 'In the formula Al2(SO4)3, how many oxygen atoms are present per formula unit?',
    choices: ['4', '3', '12', '6'],
    correct: 2,
    solution: '<p><strong>C — 12.</strong> Inside the parentheses: (SO4) contains 4 oxygen atoms. The subscript 3 outside the parentheses multiplies all atoms inside: O: 4 × 3 = 12. The complete count is Al:2, S:3, O:12 → 17 total atoms.</p>'
  },
  {
    id: 'p27', difficulty: 'medium', type: 'concept', tag: 'Dalton\'s Theory',
    q: 'Which of Dalton\'s original postulates has been modified by modern science?',
    choices: ['Atoms combine in whole-number ratios to form compounds', 'Matter is made of indivisible atoms with no internal structure', 'Atoms are rearranged (not destroyed) in chemical reactions', 'Each element has atoms with characteristic properties'],
    correct: 1,
    solution: '<p><strong>B — atoms are indivisible.</strong> We now know atoms contain subatomic particles (protons, neutrons, electrons) and can be split in nuclear reactions. The other postulates remain valid for describing ordinary chemical behavior.</p>'
  },
  {
    id: 'p28', difficulty: 'easy', type: 'concept', tag: 'Isotopes',
    q: 'Two isotopes of the same element always have the same:',
    choices: ['Mass number', 'Number of neutrons', 'Number of protons', 'Number of electrons in their ions'],
    correct: 2,
    solution: '<p><strong>C — number of protons.</strong> Isotopes are defined by having the same atomic number (same proton count = same element). They differ in neutron count and therefore mass number. Their electron count (in neutral atoms) also equals the proton count.</p>'
  },
  {
    id: 'p29', difficulty: 'medium', type: 'concept', tag: 'Ions',
    q: 'Which of the following ions has the SAME number of electrons as a neutral neon atom (Z=10)?',
    choices: ['Na^+ (Z=11)', 'K^+ (Z=19)', 'F^2- (Z=9)', 'Mg^+ (Z=12)'],
    correct: 0,
    solution: '<p><strong>A — Na^+.</strong> Na (Z=11) loses 1 electron → 10 electrons = same as neutral Ne. Check the others: K^+ has 18 electrons; F^2- (if it existed) would have 11; Mg^+ has 11. Only Na^+ matches Ne\'s 10 electrons.</p>'
  },
  {
    id: 'p30', difficulty: 'easy', type: 'concept', tag: 'Subatomic Particles',
    q: 'Which statement about the atomic nucleus is correct?',
    choices: ['The nucleus contains protons and electrons', 'The nucleus is positively charged because it contains protons and neutrons', 'The nucleus has a diameter roughly equal to the whole atom', 'Neutrons in the nucleus carry a negative charge'],
    correct: 1,
    solution: '<p><strong>B — positively charged from protons.</strong> The nucleus contains protons (+) and neutrons (0), so its overall charge is positive. A is wrong (electrons are outside the nucleus). C is wrong (the nucleus is ~100,000× smaller than the atom). D is wrong (neutrons are neutral).</p>'
  },
  {
    id: 'p31', difficulty: 'easy', type: 'concept', tag: 'Chemical Formulas',
    q: 'Compounds with the same molecular formula but different structural arrangements are called:',
    choices: ['Isotopes', 'Isomers', 'Allotropes', 'Ions'],
    correct: 1,
    solution: '<p><strong>B — isomers.</strong> Isomers share the same molecular formula (same number and type of atoms) but differ in how those atoms are connected. For example, C2H6O can be ethanol or dimethyl ether — same formula, very different structures and properties.</p>'
  },
  {
    id: 'p32', difficulty: 'easy', type: 'concept', tag: 'Atomic Mass Unit',
    q: 'The atomic mass unit (amu) is defined as:',
    choices: ['The mass of one proton', 'Exactly 1/12 the mass of a carbon-12 atom', 'The mass of one neutron', 'The average mass of all naturally occurring carbon atoms'],
    correct: 1,
    solution: '<p><strong>B — 1/12 the mass of carbon-12.</strong> This definition was chosen because carbon-12 is a standard reference isotope. It makes the mass of one carbon-12 atom exactly 12.000 amu, which links atomic mass to molar mass elegantly.</p>'
  },
  {
    id: 'p33', difficulty: 'medium', type: 'concept', tag: 'Average Atomic Mass',
    q: 'An element has two isotopes. The average atomic mass is closest to the mass of the more abundant isotope. Why?',
    choices: ['The more abundant isotope has more protons', 'A weighted average is pulled toward the value with the higher weight (abundance)', 'The heavier isotope always contributes more to the average', 'The periodic table rounds to the nearest whole number'],
    correct: 1,
    solution: '<p><strong>B — weighted average is pulled toward higher weight.</strong> This is a fundamental property of weighted averages. For example, chlorine\'s average (35.45 amu) is much closer to Cl-35 than Cl-37 because Cl-35 makes up ~76% of all chlorine atoms.</p>'
  },
  {
    id: 'p34', difficulty: 'medium', type: 'concept', tag: 'Atomic Number',
    q: 'An atom has the nuclear symbol ^6329Cu. How many neutrons does it have?',
    choices: ['29', '63', '34', '92'],
    correct: 2,
    solution: '<p><strong>C — 34 neutrons.</strong> The nuclear symbol shows A=63 (mass number) and Z=29 (atomic number, copper). Neutrons = A - Z = 63 - 29 = 34.</p>'
  },
  {
    id: 'p35', difficulty: 'medium', type: 'concept', tag: 'Chemical Formulas',
    q: 'What is the total number of atoms in one formula unit of Ca3(PO4)2?',
    choices: ['7', '9', '13', '12'],
    correct: 2,
    solution: '<p><strong>C — 13 atoms.</strong> Ca: 3 atoms. Inside (PO4)2: P = 1×2 = 2 atoms; O = 4×2 = 8 atoms. Total = 3 + 2 + 8 = 13 atoms per formula unit.</p>'
  },
  {
    id: 'p36', difficulty: 'easy', type: 'concept', tag: 'Ions',
    q: 'When a neutral atom becomes an anion, it:',
    choices: ['Loses protons and becomes lighter', 'Gains protons from another atom', 'Gains electrons and becomes negatively charged', 'Loses neutrons from the nucleus'],
    correct: 2,
    solution: '<p><strong>C — gains electrons and becomes negatively charged.</strong> Anions form when atoms gain electrons (from another atom or molecule). No protons or neutrons change during ion formation — only electrons transfer.</p>'
  },
  {
    id: 'p37', difficulty: 'medium', type: 'concept', tag: 'Empirical Formula',
    q: 'Which pair of compounds could be represented by the same empirical formula?',
    choices: ['H2O and H2O2', 'CH4 and C2H4', 'C2H4 and C4H8', 'CO and CO2'],
    correct: 2,
    solution: '<p><strong>C — C2H4 and C4H8.</strong> C2H4: GCF=2 → CH2. C4H8: GCF=4 → CH2. Both reduce to the empirical formula CH2. The others: H2O and H2O2 give different empirical formulas (H2O and HO); CH4 → CH4; C2H4 → CH2; CO → CO; CO2 → CO2.</p>'
  },
  {
    id: 'p38', difficulty: 'easy', type: 'concept', tag: 'Millikan',
    q: 'What was the significance of Millikan\'s oil drop experiment?',
    choices: ['It discovered the proton and measured its charge', 'It revealed the structure of the atomic nucleus', 'It determined the fundamental charge of a single electron', 'It showed that atoms are mostly empty space'],
    correct: 2,
    solution: '<p><strong>C — fundamental charge of the electron.</strong> Millikan suspended charged oil droplets between electric plates and measured the minimum electric force needed, revealing that charge always comes in multiples of one minimum value: the electron charge (-1.602 × 10^-19 C).</p>'
  },
  {
    id: 'p39', difficulty: 'easy', type: 'concept', tag: 'Subatomic Particles',
    q: 'Protons and neutrons are similar in that both:',
    choices: ['Carry a positive charge', 'Are located outside the nucleus', 'Have a mass of approximately 1 amu', 'Are repelled by the nucleus'],
    correct: 2,
    solution: '<p><strong>C — both have mass ≈ 1 amu.</strong> Proton = 1.0073 amu; Neutron = 1.0087 amu. They are both nucleons located in the nucleus. Protons are positive; neutrons are neutral. Electrons (not protons/neutrons) are outside the nucleus.</p>'
  },
  {
    id: 'p40', difficulty: 'easy', type: 'concept', tag: 'Chemical Formulas',
    q: 'What type of formula shows which atoms are bonded to which in a molecule?',
    choices: ['Molecular formula', 'Empirical formula', 'Structural formula', 'Nuclear symbol'],
    correct: 2,
    solution: '<p><strong>C — structural formula.</strong> A structural formula shows every bond between atoms (e.g., H-O-H for water). Molecular formulas give counts; empirical formulas give ratios; nuclear symbols describe single atoms, not compounds.</p>'
  },
  {
    id: 'p41', difficulty: 'medium', type: 'concept', tag: 'Dalton\'s Theory',
    q: 'Dalton\'s law of multiple proportions states that when two elements form more than one compound, the ratios of the masses of one element that combine with a fixed mass of the other are:',
    choices: ['Equal to each other', 'Small whole-number ratios', 'Irrational numbers', 'Equal to the atomic mass ratio'],
    correct: 1,
    solution: '<p><strong>B — small whole-number ratios.</strong> For example, CO and CO2 both contain C and O. For a fixed mass of carbon, the oxygen in CO2 is exactly twice the oxygen in CO — a 1:2 ratio. This simple ratio arises because atoms combine in discrete, whole-number quantities.</p>'
  },
  {
    id: 'p42', difficulty: 'easy', type: 'concept', tag: 'Isotopes',
    q: 'Carbon-12 and carbon-14 are both isotopes of carbon. What do they have in common?',
    choices: ['The same number of neutrons', 'The same mass number', 'The same number of protons', 'The same mass in amu'],
    correct: 2,
    solution: '<p><strong>C — same number of protons.</strong> Both have Z=6 (6 protons), which is why they are both carbon. They differ in mass number (12 vs 14) and neutron count (6 vs 8). C-14 is radioactive and is used in radiocarbon dating.</p>'
  },
  {
    id: 'p43', difficulty: 'easy', type: 'concept', tag: 'Ions',
    q: 'Fe^3+ has an atomic number of 26. How many electrons does Fe^3+ have?',
    choices: ['26', '29', '23', '30'],
    correct: 2,
    solution: '<p><strong>C — 23 electrons.</strong> Electrons = Z - charge = 26 - 3 = 23. Iron lost 3 electrons to form the Fe^3+ ion. Note that protons (26) and neutrons are unchanged.</p>'
  },
  {
    id: 'p44', difficulty: 'easy', type: 'concept', tag: 'Subatomic Particles',
    q: 'Which statement correctly explains why atoms are electrically neutral?',
    choices: ['Protons and electrons cancel out by combining in the nucleus', 'Atoms contain equal numbers of protons and electrons', 'Neutrons balance the charges of protons and electrons', 'The positive nucleus repels all electrons away equally'],
    correct: 1,
    solution: '<p><strong>B — equal numbers of protons and electrons.</strong> Each proton carries a +1 charge and each electron carries a -1 charge. When these counts are equal, charges cancel and the atom is neutral. Neutrons contribute no charge.</p>'
  },
  {
    id: 'p45', difficulty: 'easy', type: 'concept', tag: 'Chemical Formulas',
    q: 'How many hydrogen atoms are in one molecule of sucrose, C12H22O11?',
    choices: ['12', '13', '22', '45'],
    correct: 2,
    solution: '<p><strong>C — 22 hydrogen atoms.</strong> Read the subscript after H in the molecular formula: C12<strong>H22</strong>O11. The subscript 22 tells you there are 22 hydrogen atoms per molecule.</p>'
  },
  {
    id: 'p46', difficulty: 'medium', type: 'concept', tag: 'Atomic Mass Unit',
    q: 'Which of the following is approximately equal to the mass of one proton?',
    choices: ['1.6605 × 10^-24 g', '9.109 × 10^-28 g', '1.6605 × 10^-19 g', '6.022 × 10^23 g'],
    correct: 0,
    solution: '<p><strong>A — 1.6605 × 10^-24 g.</strong> One amu = 1.6605 × 10^-24 g, and protons have a mass of approximately 1.0073 amu, so a proton\'s mass ≈ 1.673 × 10^-24 g. Option B is the electron mass. Option C is the electron charge in coulombs. Option D is Avogadro\'s number.</p>'
  },
  {
    id: 'p47', difficulty: 'hard', type: 'concept', tag: 'Isotopes',
    q: 'An element has three naturally occurring isotopes with masses 27.977, 28.976, and 29.974 amu. The average atomic mass is 28.086 amu. Which isotope is most abundant?',
    choices: ['The 27.977 amu isotope (Si-28)', 'The 28.976 amu isotope (Si-29)', 'The 29.974 amu isotope (Si-30)', 'Cannot be determined from this information'],
    correct: 0,
    solution: '<p><strong>A — the 27.977 amu isotope (Si-28).</strong> The average (28.086) is closest to 27.977, so that isotope must have the highest abundance (it pulls the average toward its value). In reality, Si-28 makes up about 92% of natural silicon.</p>'
  },
  {
    id: 'p48', difficulty: 'easy', type: 'concept', tag: 'Empirical Formula',
    q: 'Benzene has the molecular formula C6H6. What is its empirical formula?',
    choices: ['C6H6', 'CH', 'C2H2', 'C3H3'],
    correct: 1,
    solution: '<p><strong>B — CH.</strong> GCF of subscripts 6 and 6 is 6. Divide each by 6: C:1, H:1. Empirical formula = CH. This 1:1 carbon-to-hydrogen ratio is characteristic of many aromatic compounds.</p>'
  },
  {
    id: 'p49', difficulty: 'easy', type: 'concept', tag: 'Ions',
    q: 'Which change occurs when a neutral sulfur atom (Z=16) forms the S^2- ion?',
    choices: ['It loses 2 protons', 'It gains 2 neutrons', 'It gains 2 electrons', 'It loses 2 electrons'],
    correct: 2,
    solution: '<p><strong>C — gains 2 electrons.</strong> A 2- charge means 2 more electrons than protons. Neutral S has 16 electrons; S^2- has 18 electrons. No protons or neutrons change — only electrons transfer during ion formation.</p>'
  },
  {
    id: 'p50', difficulty: 'easy', type: 'concept', tag: 'Chemical Formulas',
    q: 'What does a subscript in a chemical formula tell you?',
    choices: ['The charge of the preceding element', 'The number of atoms of the preceding element (or group) per formula unit', 'The atomic number of the preceding element', 'The mass of the preceding element in amu'],
    correct: 1,
    solution: '<p><strong>B — number of atoms per formula unit.</strong> In H2O, the subscript 2 after H means there are 2 hydrogen atoms per molecule. Subscripts after a closing parenthesis multiply every atom inside. They have no relationship to charge or atomic number.</p>'
  },
  {
    id: 'p51', difficulty: 'medium', type: 'concept', tag: 'Dalton\'s Theory',
    q: 'The law of definite proportions states that a given compound always contains the same elements in the same proportion by mass. Which part of Dalton\'s theory explains this?',
    choices: ['Atoms cannot be created or destroyed', 'All atoms of a given element are identical and have the same mass', 'Atoms combine in fixed whole-number ratios to form compounds', 'Different elements have atoms with different properties'],
    correct: 2,
    solution: '<p><strong>C — atoms combine in fixed whole-number ratios.</strong> If water is always 2 H atoms per O atom, and all H atoms have the same mass and all O atoms have the same mass, then the mass ratio H:O is always fixed (1:8 by mass). Fixed atom ratios → fixed mass ratios.</p>'
  },
  {
    id: 'p52', difficulty: 'easy', type: 'concept', tag: 'Atomic Number',
    q: 'Element X has 15 protons. What element is it?',
    choices: ['Nitrogen (Z=7)', 'Oxygen (Z=8)', 'Phosphorus (Z=15)', 'Sulfur (Z=16)'],
    correct: 2,
    solution: '<p><strong>C — Phosphorus (Z=15).</strong> The atomic number is the number of protons. Z=15 corresponds to phosphorus (P), which is in Group 15 of the periodic table. Each element has a unique atomic number.</p>'
  },
  {
    id: 'p53', difficulty: 'easy', type: 'concept', tag: 'Subatomic Particles',
    q: 'Where are electrons located in the modern model of the atom?',
    choices: ['Inside the nucleus alongside protons', 'Randomly distributed throughout the atom with no pattern', 'In a region of space outside the nucleus', 'Orbiting the nucleus in fixed circular paths at exact distances'],
    correct: 2,
    solution: '<p><strong>C — region outside the nucleus.</strong> Electrons occupy the space around the nucleus — a much larger volume than the nucleus itself. Option D describes the old Bohr model, which is a useful simplification but not the modern quantum mechanical picture.</p>'
  },
  {
    id: 'p54', difficulty: 'medium', type: 'concept', tag: 'Isotopes',
    q: 'How are the chemical properties of carbon-12 and carbon-14 expected to compare?',
    choices: ['Very different — they have different masses', 'Very similar — they have the same number of protons and electrons', 'Identical — isotopes are completely the same in every way', 'Carbon-14 is more reactive because it is radioactive'],
    correct: 1,
    solution: '<p><strong>B — very similar chemical properties.</strong> Chemical behavior is determined by electron configuration, which depends on the number of electrons (= protons = Z). Both C-12 and C-14 have Z=6 and 6 electrons, so they react the same way. They differ in physical properties like density and nuclear stability.</p>'
  },
  {
    id: 'p55', difficulty: 'easy', type: 'concept', tag: 'Chemical Formulas',
    q: 'Glucose (C6H12O6) and fructose are both monosaccharides with the same molecular formula but different structures. This makes them:',
    choices: ['Isotopes', 'Ions', 'Isomers', 'Empirical formula pairs'],
    correct: 2,
    solution: '<p><strong>C — isomers.</strong> Isomers are compounds with the same molecular formula but different arrangements of atoms (different structures), leading to different properties. Glucose and fructose both have C6H12O6 but differ in how the atoms are connected, giving them different physical and biochemical properties.</p>'
  },
  {
    id: 'p56', difficulty: 'medium', type: 'concept', tag: 'Average Atomic Mass',
    q: 'Copper has two stable isotopes: Cu-63 (abundance ~69%) and Cu-65 (abundance ~31%). Which value is closest to copper\'s average atomic mass?',
    choices: ['63.0 amu', '63.5 amu', '64.0 amu', '65.0 amu'],
    correct: 1,
    solution: '<p><strong>B — 63.5 amu.</strong> The actual value is ~63.55 amu. With ~69% at mass 63 and ~31% at mass 65, the weighted average is pulled toward 63 but not all the way. (63 × 0.69) + (65 × 0.31) ≈ 43.47 + 20.15 = 63.62 amu. Option B (63.5) is closest.</p>'
  },
  {
    id: 'p57', difficulty: 'medium', type: 'concept', tag: 'Ions',
    q: 'An ion has 18 electrons and a charge of 2+. Which element is it?',
    choices: ['Argon (Z=18)', 'Calcium (Z=20)', 'Chlorine (Z=17)', 'Potassium (Z=19)'],
    correct: 1,
    solution: '<p><strong>B — Calcium (Z=20).</strong> Electrons = Z - charge → Z = electrons + charge = 18 + 2 = 20. Element with Z=20 is calcium. Ca^2+ has lost 2 electrons (20 - 2 = 18 electrons) and is isoelectronic with argon.</p>'
  },
  {
    id: 'p58', difficulty: 'medium', type: 'concept', tag: 'Subatomic Particles',
    q: 'The discovery that all cathode rays had the same charge-to-mass ratio, regardless of the cathode material, suggested that:',
    choices: ['Different elements have different electrons', 'Electrons are a fundamental component of all matter', 'Cathode rays are made of protons', 'The nucleus is positive'],
    correct: 1,
    solution: '<p><strong>B — electrons are a fundamental component of all matter.</strong> Because the same type of particle (with the same e/m ratio) was produced from any material, Thomson concluded these particles (electrons) must be present in all atoms.</p>'
  },
  {
    id: 'p59', difficulty: 'medium', type: 'concept', tag: 'Chemical Formulas',
    q: 'How many oxygen atoms are in one formula unit of Al2(SO4)3?',
    choices: ['3', '4', '7', '12'],
    correct: 3,
    solution: '<p><strong>D — 12 oxygen atoms.</strong> The sulfate group (SO4) contains 4 oxygen atoms. The subscript 3 outside the parentheses multiplies everything inside: O = 4 × 3 = 12. Full count: Al:2, S:3, O:12 = 17 atoms total.</p>'
  },
  {
    id: 'p60', difficulty: 'easy', type: 'concept', tag: 'Dalton\'s Theory',
    q: 'Which observation directly supports the law of conservation of mass?',
    choices: ['Elements always combine in fixed ratios', 'The products of a reaction have the same total mass as the reactants', 'All samples of a pure compound have the same composition', 'Different elements have different characteristic atoms'],
    correct: 1,
    solution: '<p><strong>B — products have the same mass as reactants.</strong> Conservation of mass means mass is neither created nor destroyed in a chemical reaction. Dalton\'s atomic theory explains this: atoms are rearranged, not created or destroyed, so mass stays constant.</p>'
  },
  {
    id: 'p61', difficulty: 'easy', type: 'concept', tag: 'Atomic Mass Unit',
    q: 'One atomic mass unit (amu) is equal to:',
    choices: ['1.6605 × 10^-24 g', '6.022 × 10^23 g', '1.6605 × 10^-19 g', '1.000 g'],
    correct: 0,
    solution: '<p><strong>A — 1.6605 × 10^-24 g.</strong> This tiny mass reflects the scale of individual atoms. One mole of these 1-amu units (6.022 × 10^23 of them) weighs exactly 1 gram — this is the bridge between atomic mass and molar mass.</p>'
  },
  {
    id: 'p62', difficulty: 'easy', type: 'concept', tag: 'Isotopes',
    q: 'Radioactive carbon-14 is used in radiocarbon dating. C-14 and C-12 are isotopes because they:',
    choices: ['Have the same atomic mass', 'Have the same mass number', 'Have the same atomic number (Z=6)', 'Both have 6 neutrons'],
    correct: 2,
    solution: '<p><strong>C — same atomic number (Z=6).</strong> Both are carbon (Z=6), which is the definition of isotopes: same element (same Z), different mass number (12 vs 14). C-12 has 6 neutrons; C-14 has 8 neutrons — they differ in neutron count, not proton count.</p>'
  },
  {
    id: 'p63', difficulty: 'easy', type: 'concept', tag: 'Ions',
    q: 'Which of the following is a cation?',
    choices: ['Cl^-', 'O^2-', 'S^2-', 'Mg^2+'],
    correct: 3,
    solution: '<p><strong>D — Mg^2+.</strong> A cation is a positively charged ion (lost electrons). Mg^2+ has lost 2 electrons. The other options (Cl^-, O^2-, S^2-) are all anions — they have gained electrons and carry negative charges.</p>'
  },
  {
    id: 'p64', difficulty: 'medium', type: 'concept', tag: 'Empirical Formula',
    q: 'A compound has the molecular formula N2H4. What is its empirical formula?',
    choices: ['N2H4', 'NH3', 'NH2', 'N2H2'],
    correct: 2,
    solution: '<p><strong>C — NH2.</strong> GCF of 2 and 4 is 2. Divide each subscript: N: 2÷2=1, H: 4÷2=2. Empirical formula = NH2. This is hydrazine — its 1:2 N:H ratio is the simplest whole-number expression.</p>'
  },
  {
    id: 'p65', difficulty: 'easy', type: 'concept', tag: 'Chemical Formulas',
    q: 'What is the total number of atoms in one molecule of glucose, C6H12O6?',
    choices: ['18', '21', '24', '13'],
    correct: 2,
    solution: '<p><strong>C — 24 atoms.</strong> Add all subscripts: C: 6, H: 12, O: 6. Total = 6 + 12 + 6 = 24 atoms per molecule. This is why glucose is a relatively large organic molecule.</p>'
  },
  {
    id: 'p66', difficulty: 'easy', type: 'concept', tag: 'Subatomic Particles',
    q: 'Which subatomic particle carries a positive charge?',
    choices: ['Electron', 'Neutron', 'Proton', 'Photon'],
    correct: 2,
    solution: '<p><strong>C — proton.</strong> Protons carry a +1 charge and are located in the nucleus. Electrons (-1) are outside the nucleus. Neutrons (0) are neutral. Photons are particles of light — not subatomic particles of atoms.</p>'
  },
  {
    id: 'p67', difficulty: 'easy', type: 'concept', tag: 'Atomic Number',
    q: 'An atom has 17 protons. When it becomes a Cl^- ion, the atomic number:',
    choices: ['Decreases to 16', 'Increases to 18', 'Stays at 17', 'Changes to match the number of electrons'],
    correct: 2,
    solution: '<p><strong>C — stays at 17.</strong> Atomic number = number of protons, which never changes during ion formation. Only electrons are gained or lost. Cl (Z=17) becomes Cl^- by gaining 1 electron, but it still has 17 protons and is still chlorine.</p>'
  },

  /* ═══════════════════ MULTI-STEP PROBLEMS (17) ═══════════════════ */

  {
    id: 'p68', difficulty: 'medium', type: 'multi', tag: 'Isotopes + Particles',
    q: 'An atom of bromine-80 (Z = 35) forms a Br^- ion. How many electrons does Br^- have, and how does this compare to the number of neutrons in Br-80?',
    choices: [
      'Br^- has 36 electrons; Br-80 has 45 neutrons — more neutrons than electrons',
      'Br^- has 34 electrons; Br-80 has 45 neutrons — more neutrons than electrons',
      'Br^- has 36 electrons; Br-80 has 35 neutrons — they are about equal',
      'Br^- has 35 electrons; Br-80 has 45 neutrons — more neutrons'
    ],
    correct: 0,
    solution: '<p><strong>Electrons in Br^-:</strong> Z=35, charge=-1 → electrons = 35 - (-1) = 36.<br><strong>Neutrons in Br-80:</strong> A=80, Z=35 → neutrons = 80 - 35 = 45.<br>So Br^- has 36 electrons and the nucleus has 45 neutrons — more neutrons than electrons. Answer A is correct.</p>'
  },
  {
    id: 'p69', difficulty: 'medium', type: 'multi', tag: 'Nuclear Symbol',
    q: 'Element X has the nuclear symbol ^5626X. It forms a 2+ ion. Which set of values is correct for the ion?',
    choices: [
      'Protons: 26, Neutrons: 30, Electrons: 28',
      'Protons: 26, Neutrons: 30, Electrons: 24',
      'Protons: 26, Neutrons: 56, Electrons: 24',
      'Protons: 28, Neutrons: 28, Electrons: 26'
    ],
    correct: 1,
    solution: '<p>From ^5626X: Z = 26 (protons), A = 56, neutrons = A - Z = 56 - 26 = 30. For a 2+ ion: electrons = Z - charge = 26 - 2 = <strong>24 electrons</strong>. The correct set is protons=26, neutrons=30, electrons=24 — option B. Option A has 28 electrons, which would correspond to a 2- ion, not 2+.</p>'
  },
  {
    id: 'p70', difficulty: 'hard', type: 'multi', tag: 'Average Atomic Mass',
    q: 'An unknown element has two isotopes. Isotope A has a mass of 6.015 amu and Isotope B has a mass of 7.016 amu. The average atomic mass is 6.94 amu. What is the approximate percent abundance of Isotope A?',
    choices: ['7.6%', '19.9%', '75.8%', '92.4%'],
    correct: 0,
    solution: '<p>Let x = fraction of isotope A. Then:<br>6.015x + 7.016(1-x) = 6.94<br>6.015x + 7.016 - 7.016x = 6.94<br>-1.001x = -0.076<br>x = 0.0759 ≈ 7.6%.<br>Isotope A (mass 6.015) is about <strong>7.6% abundant</strong> — this is lithium-6. Isotope B (Li-7) is 92.4% abundant, pulling the average close to 7.</p>'
  },
  {
    id: 'p71', difficulty: 'medium', type: 'multi', tag: 'Formula + Atom Count',
    q: 'How many total atoms are in one formula unit of Al2(SO4)3?',
    choices: ['7', '13', '17', '15'],
    correct: 2,
    solution: '<p>Count carefully: Al: 2. Inside (SO4)3 — S: 1×3=3, O: 4×3=12. Total = 2 + 3 + 12 = <strong>17 atoms</strong>.</p>'
  },
  {
    id: 'p72', difficulty: 'hard', type: 'multi', tag: 'Isotopes + Averages',
    q: 'Gallium has two stable isotopes: Ga-69 (mass = 68.926 amu) and Ga-71 (mass = 70.925 amu). The average atomic mass of gallium is 69.723 amu. What is the percent abundance of Ga-69?',
    choices: ['39.9%', '50.0%', '60.1%', '75.8%'],
    correct: 2,
    solution: '<p>Let x = fraction of Ga-69. Then:<br>68.926x + 70.925(1-x) = 69.723<br>68.926x + 70.925 - 70.925x = 69.723<br>-1.999x = -1.202<br>x = 0.6013 ≈ <strong>60.1%</strong> for Ga-69. Ga-71 is 39.9% abundant.</p>'
  },
  {
    id: 'p73', difficulty: 'medium', type: 'multi', tag: 'Nuclear Symbol + Ions',
    q: 'A neutral atom has 20 protons and 20 neutrons. It then loses 2 electrons. Which nuclear symbol AND ion description are both correct?',
    choices: [
      '^4020Ca; the ion has 18 electrons and is called Ca^2+',
      '^2040Ca; the ion has 22 electrons and is called Ca^2+',
      '^4020Ca; the ion has 22 electrons and is called Ca^2-',
      '^4020Ca; the ion has 20 electrons and is called Ca^0'
    ],
    correct: 0,
    solution: '<p>Nuclear symbol: A = protons + neutrons = 20 + 20 = 40; Z = 20. Symbol: ^4020Ca ✓. After losing 2 electrons: electrons = 20 - 2 = 18, charge = +2 → Ca^2+. Answer A is correct.</p>'
  },
  {
    id: 'p74', difficulty: 'medium', type: 'multi', tag: 'Dalton + Modern',
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
    id: 'p75', difficulty: 'hard', type: 'multi', tag: 'Empirical + Molecular',
    q: 'A compound with empirical formula CH2O has a molar mass of approximately 180 g/mol. The molar mass of CH2O is approximately 30 g/mol. What is the molecular formula?',
    choices: ['CH2O', 'C3H6O3', 'C6H12O6', 'C4H8O4'],
    correct: 2,
    solution: '<p>Ratio = molar mass / empirical formula mass = 180 / 30 = 6. Multiply each subscript in CH2O by 6: C:1×6=6, H:2×6=12, O:1×6=6. Molecular formula = <strong>C6H12O6</strong> (glucose).</p>'
  },
  {
    id: 'p76', difficulty: 'medium', type: 'multi', tag: 'Ions + Particles',
    q: 'An ion has 36 electrons, 35 protons, and 45 neutrons. What is its identity and charge?',
    choices: ['Br^- (bromine, 1- charge)', 'Kr (krypton, neutral)', 'Se^2- (selenium, 2- charge)', 'Rb^+ (rubidium, 1+ charge)'],
    correct: 0,
    solution: '<p>Protons = 35 → element is bromine (Br, Z=35). Charge = protons - electrons = 35 - 36 = -1. So this is <strong>Br^-</strong>. Neutrons = 45 → A = Z + N = 35 + 45 = 80 → Br-80.</p>'
  },
  {
    id: 'p77', difficulty: 'medium', type: 'multi', tag: 'Formula + Empirical',
    q: 'A molecule contains 2 carbon atoms, 6 hydrogen atoms, and 1 oxygen atom. What is its empirical formula?',
    choices: ['C2H6O', 'CH3O', 'CHO', 'C2H6O — this IS the empirical formula because the GCF is 1'],
    correct: 3,
    solution: '<p>Molecular formula: C2H6O. Find GCF of subscripts 2, 6, 1. GCF = 1. When the GCF is 1, the empirical formula equals the molecular formula: <strong>C2H6O</strong>. This is the formula for ethanol — you cannot simplify it further.</p>'
  },
  {
    id: 'p78', difficulty: 'medium', type: 'multi', tag: 'Average Atomic Mass',
    q: 'Element Z has two isotopes. Z-10 (mass = 10.013 amu) makes up 20.0% and Z-11 (mass = 11.009 amu) makes up 80.0%. What is the average atomic mass, and which element is this most likely?',
    choices: ['10.810 amu — Boron', '10.500 amu — Carbon', '11.000 amu — Sodium', '10.200 amu — Beryllium'],
    correct: 0,
    solution: '<p>(10.013 × 0.200) + (11.009 × 0.800) = 2.003 + 8.807 = <strong>10.810 amu</strong>. The periodic table value for boron is 10.811 amu — this is boron (B, Z=5). Answer A is correct.</p>'
  },
  {
    id: 'p79', difficulty: 'medium', type: 'multi', tag: 'Subatomic + Nuclear Symbol',
    q: 'Which atom has 56 protons, 81 neutrons, and 56 electrons?',
    choices: ['Ba-137 (Z=56)', 'Cs-137 (Z=55)', 'Ba-137 (Z=56) — but as an ion', 'La-137 (Z=57)'],
    correct: 0,
    solution: '<p>Z = protons = 56 → element is barium (Ba). Neutral (electrons = protons = 56). A = protons + neutrons = 56 + 81 = 137. This is <strong>Ba-137</strong>, a stable isotope of barium.</p>'
  },
  {
    id: 'p80', difficulty: 'easy', type: 'multi', tag: 'Ions + Isoelectronic',
    q: 'Na^+ (Z=11), Mg^2+ (Z=12), Al^3+ (Z=13), and Ne (Z=10) all have 10 electrons. What term describes species that have the same number of electrons?',
    choices: ['Isotopes', 'Isomers', 'Isoelectronic', 'Allotropes'],
    correct: 2,
    solution: '<p><strong>C — isoelectronic.</strong> Isoelectronic species have the same number of electrons (and therefore the same electron configuration). Na^+, Mg^2+, Al^3+, and Ne all have 10 electrons and share the neon electron configuration, despite being different elements/ions.</p>'
  },
  {
    id: 'p81', difficulty: 'medium', type: 'multi', tag: 'Formula + Counting',
    q: 'How many total atoms are in one formula unit of Ca3(PO4)2, and what is its empirical formula?',
    choices: [
      '13 total atoms; Ca3(PO4)2 is already the empirical formula',
      '10 total atoms; CaPO4',
      '13 total atoms; CaPO4 is a simpler formula',
      '9 total atoms; Ca3P2O8'
    ],
    correct: 0,
    solution: '<p>Atom count: Ca=3, P=1×2=2, O=4×2=8. Total = 3+2+8 = <strong>13 atoms</strong>. GCF of subscripts 3, 2, 8 is 1 — so Ca3(PO4)2 cannot be simplified further and is already the empirical formula. Answer A is correct.</p>'
  },
  {
    id: 'p82', difficulty: 'medium', type: 'multi', tag: 'Dalton + Proportions',
    q: 'Water (H2O) is always 11.2% hydrogen and 88.8% oxygen by mass. Carbon dioxide (CO2) is always 27.3% carbon and 72.7% oxygen. These facts illustrate which of Dalton\'s laws?',
    choices: ['Law of conservation of mass', 'Law of definite proportions', 'Law of multiple proportions', 'Law of mass action'],
    correct: 1,
    solution: '<p><strong>B — law of definite proportions.</strong> Each pure compound always has the same mass ratio of elements, regardless of sample size or source. Water is always ~1:8 H:O by mass. This is explained by atoms combining in fixed whole-number ratios (2H per O in water, 1C per 2O in CO2).</p>'
  },
  {
    id: 'p83', difficulty: 'medium', type: 'multi', tag: 'Isotopes + Notation',
    q: 'Write out the nuclear symbol for an atom with 7 protons and 8 neutrons, and identify the element.',
    choices: ['^157N — Nitrogen-15', '^158O — Oxygen-15', '^87N — Nitrogen-8', '^78O — Oxygen-7'],
    correct: 0,
    solution: '<p>Z = 7 (nitrogen, N). A = protons + neutrons = 7 + 8 = 15. Nuclear symbol: <strong>^157N</strong> — this is nitrogen-15, a stable heavy isotope of nitrogen (the more common isotope is N-14 with 7 neutrons).</p>'
  },
  {
    id: 'p84', difficulty: 'hard', type: 'multi', tag: 'All Concepts',
    q: 'An atom has: 29 protons, 36 neutrons, and 29 electrons. It forms a 2+ ion. Which of the following statements about this atom and its ion are BOTH correct?',
    choices: [
      'The atom is Cu-65; the ion Cu^2+ has 27 electrons',
      'The atom is Cu-65; the ion Cu^2+ has 29 electrons',
      'The atom is Zn-65; the ion Zn^2+ has 27 electrons',
      'The atom is Cu-64; the ion Cu^2+ has 31 electrons'
    ],
    correct: 0,
    solution: '<p>Z=29 → copper (Cu). A = 29 + 36 = 65 → Cu-65. For Cu^2+: electrons = Z - charge = 29 - 2 = 27. Both statements in A are correct: Cu-65 with a Cu^2+ ion having 27 electrons.</p>'
  },

  /* ═══════════════════ EXPANSION BATCH — 60 problems (20 easy / 25 medium / 15 hard) ═══════════════════ */

  /* ── EASY (20) ── */
  {id:'p85',difficulty:'easy',type:'calc',tag:'Subatomic Particles',q:'How many neutrons are in a sodium-23 (Na-23) atom? (Atomic number of Na = 11)',answer:12,tolerance:0,solution:'Neutrons = A - Z = 23 - 11 = <strong>12 neutrons</strong>.'},
  {id:'p86',difficulty:'easy',type:'calc',tag:'Subatomic Particles',q:'How many neutrons are in a potassium-39 (K-39) atom? (Atomic number of K = 19)',answer:20,tolerance:0,solution:'Neutrons = A - Z = 39 - 19 = <strong>20 neutrons</strong>.'},
  {id:'p87',difficulty:'easy',type:'calc',tag:'Ion Electrons',q:'How many electrons does a Mg^2+ ion have? (Atomic number of Mg = 12)',answer:10,tolerance:0,solution:'Electrons = Z - charge = 12 - 2 = <strong>10 electrons</strong>. Mg^2+ has lost 2 electrons.'},
  {id:'p88',difficulty:'easy',type:'calc',tag:'Ion Electrons',q:'How many electrons does a Br^- ion have? (Atomic number of Br = 35)',answer:36,tolerance:0,solution:'Electrons = Z - charge = 35 - (-1) = 35 + 1 = <strong>36 electrons</strong>. Br^- has gained 1 electron.'},
  {id:'p89',difficulty:'easy',type:'calc',tag:'Subatomic Particles',q:'How many electrons are in a neutral silver (Ag) atom? (Atomic number of Ag = 47)',answer:47,tolerance:0,solution:'A neutral atom has equal protons and electrons. Since Z = 47, a neutral Ag atom has <strong>47 electrons</strong>.'},
  {id:'p90',difficulty:'easy',type:'concept',tag:'Subatomic Particles',q:'Which particle is found in the nucleus along with protons?',choices:['Electron','Neutron','Photon','Positron'],correct:1,solution:'The nucleus contains protons and neutrons (collectively called nucleons). Electrons occupy the space outside the nucleus.'},
  {id:'p91',difficulty:'easy',type:'concept',tag:'Ions',q:'An atom of oxygen has 8 protons. If it gains 2 electrons to become O^2-, how many protons does it now have?',choices:['6','8','10','16'],correct:1,solution:'Forming an ion never changes the number of protons — only electrons are gained or lost. Oxygen still has 8 protons whether it is neutral O or the ion O^2-.'},
  {id:'p92',difficulty:'easy',type:'concept',tag:'Subatomic Particles',q:'What is the charge of a proton?',choices:['+1','-1','0','+2'],correct:0,solution:'Protons carry a charge of +1. This is the fundamental positive charge found in every atomic nucleus.'},
  {id:'p93',difficulty:'easy',type:'concept',tag:'Subatomic Particles',q:'What is the charge of a neutron?',choices:['+1','-1','0','+2'],correct:2,solution:'Neutrons are electrically neutral — they carry no charge. Their name reflects this: "neutron" for "neutral."'},
  {id:'p94',difficulty:'easy',type:'concept',tag:'Subatomic Particles',q:'What is the charge of an electron?',choices:['+1','-1','0','+2'],correct:1,solution:'Electrons carry a charge of -1, equal in magnitude but opposite in sign to a proton\'s charge.'},
  {id:'p95',difficulty:'easy',type:'concept',tag:'Subatomic Particles',q:'Which two subatomic particles are found in the nucleus?',choices:['Protons and electrons','Protons and neutrons','Electrons and neutrons','Only protons'],correct:1,solution:'The nucleus contains protons (positive) and neutrons (neutral). Electrons occupy a much larger region of space surrounding the nucleus.'},
  {id:'p96',difficulty:'easy',type:'concept',tag:'Subatomic Particles',q:'The mass number of an atom equals:',choices:['Protons only','Electrons only','Protons + neutrons','Protons + electrons'],correct:2,solution:'The mass number (A) counts the nucleons — protons plus neutrons. Electrons contribute negligible mass and are not included.'},
  {id:'p97',difficulty:'easy',type:'concept',tag:'Rutherford',q:'Which scientist proposed that atoms are mostly empty space with a small, dense nucleus?',choices:['Dalton','Thomson','Rutherford','Bohr'],correct:2,solution:'Rutherford\'s gold foil experiment showed most alpha particles passed straight through the foil, leading him to conclude atoms are mostly empty space with a tiny, dense, positively charged nucleus.'},
  {id:'p98',difficulty:'easy',type:'concept',tag:'Thomson',q:'Which scientist is credited with discovering the electron?',choices:['Thomson','Rutherford','Chadwick','Millikan'],correct:0,solution:'J.J. Thomson discovered the electron through his cathode ray tube experiments, showing that negatively charged particles are present in all atoms.'},
  {id:'p99',difficulty:'easy',type:'concept',tag:'Chadwick',q:'Which scientist discovered the neutron?',choices:['Thomson','Rutherford','Chadwick','Dalton'],correct:2,solution:'James Chadwick discovered the neutron in 1932, explaining the "extra" mass in atomic nuclei that protons alone could not account for.'},
  {id:'p100',difficulty:'easy',type:'concept',tag:'Ions',q:'A cation forms when an atom:',choices:['Gains electrons','Loses electrons','Gains protons','Loses neutrons'],correct:1,solution:'Cations are positively charged ions, formed when an atom loses one or more electrons, leaving more protons than electrons.'},
  {id:'p101',difficulty:'easy',type:'concept',tag:'Ions',q:'An anion forms when an atom:',choices:['Loses electrons','Gains electrons','Loses protons','Gains protons'],correct:1,solution:'Anions are negatively charged ions, formed when an atom gains one or more electrons, leaving more electrons than protons.'},
  {id:'p102',difficulty:'easy',type:'calc',tag:'Chemical Formulas',q:'How many total atoms are in one formula unit of MgCl2?',answer:3,tolerance:0,solution:'Mg: 1 atom. Cl: 2 atoms. Total = 1 + 2 = <strong>3 atoms</strong>.'},
  {id:'p103',difficulty:'easy',type:'calc',tag:'Chemical Formulas',q:'How many total atoms are in one molecule of CH4?',answer:5,tolerance:0,solution:'C: 1 atom. H: 4 atoms. Total = 1 + 4 = <strong>5 atoms</strong>.'},
  {id:'p104',difficulty:'easy',type:'concept',tag:'Atomic Number',q:'What does the atomic number of an element tell you?',choices:['The number of neutrons','The number of protons','The total mass','The number of isotopes'],correct:1,solution:'The atomic number (Z) is defined as the number of protons in an atom\'s nucleus. It uniquely identifies the element.'},

  /* ── MEDIUM (25) ── */
  {id:'p105',difficulty:'medium',type:'calc',tag:'Average Atomic Mass',q:'An element has isotopes X-63 (mass = 62.930 amu, abundance = 69.15%) and X-65 (mass = 64.928 amu, abundance = 30.85%). What is the average atomic mass?',answer:63.55,tolerance:0.05,solution:'(62.930 × 0.6915) + (64.928 × 0.3085) = 43.516 + 20.031 = <strong>63.55 amu</strong>. This matches copper\'s periodic table value.'},
  {id:'p106',difficulty:'medium',type:'calc',tag:'Average Atomic Mass',q:'Silicon has isotopes Si-28 (27.977 amu, 92.23%), Si-29 (28.976 amu, 4.68%), and Si-30 (29.974 amu, 3.09%). What is the average atomic mass?',answer:28.09,tolerance:0.05,solution:'(27.977 × 0.9223) + (28.976 × 0.0468) + (29.974 × 0.0309) = 25.808 + 1.356 + 0.926 = <strong>28.09 amu</strong>.'},
  {id:'p107',difficulty:'medium',type:'concept',tag:'History of Atomic Theory',q:'Which of the following pairs is correctly matched (scientist → contribution)?',choices:['Dalton — discovered the electron','Thomson — measured electron charge','Rutherford — discovered the nucleus','Chadwick — proposed atoms are indivisible'],correct:2,solution:'Rutherford\'s gold foil experiment revealed the existence of a small, dense, positively charged nucleus. Thomson discovered the electron (not Dalton); Millikan (not Thomson) measured its charge; Dalton (not Chadwick) originally proposed atoms were indivisible.'},
  {id:'p108',difficulty:'medium',type:'concept',tag:'History of Atomic Theory',q:'Democritus, an ancient Greek philosopher, proposed that matter is composed of indivisible particles. What did he call these particles?',choices:['"Atomos" (meaning uncuttable)','"Molecules"','"Elements"','"Ions"'],correct:0,solution:'Democritus coined the term "atomos," meaning indivisible or uncuttable, over 2,000 years before the scientific atomic theory was developed. The modern word "atom" comes directly from this term.'},
  {id:'p109',difficulty:'medium',type:'concept',tag:'Rutherford',q:'Rutherford\'s gold foil experiment used which particles to bombard the foil?',choices:['Electrons','Alpha particles (positively charged)','Neutrons','Protons'],correct:1,solution:'Rutherford fired a beam of positively charged alpha particles at thin gold foil. Most passed straight through, but a small fraction deflected sharply, revealing the existence of a small, dense, positive nucleus.'},
  {id:'p110',difficulty:'medium',type:'calc',tag:'Subatomic Particles',q:'An atom has 34 protons and 45 neutrons. What is its mass number?',answer:79,tolerance:0,solution:'Mass number = protons + neutrons = 34 + 45 = <strong>79</strong>.'},
  {id:'p111',difficulty:'medium',type:'concept',tag:'Subatomic Particles',q:'Which of the following correctly compares the size of the nucleus to the size of the entire atom?',choices:['The nucleus is much smaller than the entire atom','The entire atom is smaller than the nucleus','The electron cloud is smaller than the nucleus','They are all the same size'],correct:0,solution:'The nucleus is roughly 100,000 times smaller in diameter than the entire atom. Most of an atom\'s volume is empty space occupied by the electron cloud.'},
  {id:'p112',difficulty:'medium',type:'concept',tag:'Isotopes',q:'A student says: "Isotopes of the same element have identical chemical properties because they have the same number of electrons." Is this reasoning correct?',choices:['Yes — chemical behavior depends on electron configuration, which is the same across isotopes','No — isotopes have different numbers of protons','No — isotopes react completely differently','Yes but only for noble gases'],correct:0,solution:'Isotopes share the same atomic number, so they have the same number of electrons and the same electron configuration. Since chemical behavior is governed by electrons, isotopes behave almost identically in reactions.'},
  {id:'p113',difficulty:'medium',type:'calc',tag:'Chemical Formulas',q:'How many total atoms are in one formula unit of Ca(NO3)2?',answer:9,tolerance:0,solution:'Ca: 1. Inside (NO3)2: N = 1×2=2, O = 3×2=6. Total = 1 + 2 + 6 = <strong>9 atoms</strong>.'},
  {id:'p114',difficulty:'medium',type:'concept',tag:'Empirical Formula',q:'Which statement about the empirical formula is correct?',choices:['It always equals the molecular formula','It shows the simplest whole-number ratio of atoms in a compound','It only applies to ionic compounds','It shows the 3D shape of a molecule'],correct:1,solution:'The empirical formula gives the simplest whole-number ratio of elements in a compound. The molecular formula may be a whole-number multiple of the empirical formula (or identical to it, when the ratio is already simplest).'},
  {id:'p115',difficulty:'medium',type:'concept',tag:'Chemical Formulas',q:'A compound is found to be 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen by mass. This information would be used to determine the compound\'s:',choices:['Nuclear symbol','Empirical formula','Isotope ratio','Electron configuration'],correct:1,solution:'Percent composition by mass is the starting data used to calculate a compound\'s empirical formula — converting mass percentages to a mole ratio, then to the simplest whole-number ratio of atoms.'},
  {id:'p116',difficulty:'medium',type:'concept',tag:'Ions',q:'Which ion is isoelectronic with a neutral argon atom (Z=18)?',choices:['Cl^- (Z=17)','Na^+ (Z=11)','O^2- (Z=8)','Mg^2+ (Z=12)'],correct:0,solution:'Cl^- gains 1 electron: 17 + 1 = 18 electrons, matching neutral argon\'s 18 electrons. Na^+ has 10 electrons, O^2- has 10 electrons, and Mg^2+ has 10 electrons — none match argon.'},
  {id:'p117',difficulty:'medium',type:'calc',tag:'Ion Electrons',q:'An ion has 10 electrons and a charge of 1-. What is its atomic number?',answer:9,tolerance:0,solution:'Z = electrons + charge = 10 + (-1) = <strong>9</strong>. This is fluorine, which becomes F^- by gaining 1 electron.'},
  {id:'p118',difficulty:'medium',type:'concept',tag:'Average Atomic Mass',q:'A sample of chlorine gas has an average atomic mass of 35.45 amu, even though no single chlorine atom actually has this mass. Why?',choices:['Because 35.45 is a typo on the periodic table','Because it is a weighted average of all naturally occurring isotopes, not the mass of any single atom','Because chlorine atoms gain mass over time','Because electrons add exactly 0.45 amu'],correct:1,solution:'Average atomic mass is a weighted average across all naturally occurring isotopes of an element. No individual atom has this exact mass — it reflects the overall isotope mixture found in nature.'},
  {id:'p119',difficulty:'medium',type:'concept',tag:'Isotopes',q:'What is the correct format for a nuclear symbol?',choices:['Mass number as a superscript to the left of the symbol, atomic number as a subscript to the left','Both numbers as subscripts to the right','Atomic number above, mass number below','Charge shown to the left of the symbol'],correct:0,solution:'A nuclear symbol places the mass number (A) as a superscript and the atomic number (Z) as a subscript, both to the left of the element symbol — for example, ^23592U.'},
  {id:'p120',difficulty:'medium',type:'calc',tag:'Chemical Formulas',q:'How many total atoms are in one formula unit of Fe2O3?',answer:5,tolerance:0,solution:'Fe: 2. O: 3. Total = 2 + 3 = <strong>5 atoms</strong>.'},
  {id:'p121',difficulty:'medium',type:'concept',tag:'Isotopes',q:'Which best explains why isotopes of the same element have nearly identical chemical properties but different physical properties like density?',choices:['Chemical properties depend on electrons (same across isotopes); physical properties like density depend on mass (which differs)','Isotopes are entirely different elements','Physical and chemical properties are unrelated to atomic structure','Isotopes have different electron configurations'],correct:0,solution:'Chemical behavior is governed by electron configuration, which is identical across isotopes of the same element. Physical properties like density depend on mass, which does differ between isotopes because of their different neutron counts.'},
  {id:'p122',difficulty:'medium',type:'concept',tag:'Empirical Formula',q:'Which pair of formulas represents the same empirical formula?',choices:['C2H4 and C3H6','CH4 and C2H4','H2O and H2O2','NO and NO2'],correct:0,solution:'C2H4 (GCF=2) reduces to CH2. C3H6 (GCF=3) also reduces to CH2. Both share the same empirical formula. The other pairs reduce to different empirical formulas.'},
  {id:'p123',difficulty:'medium',type:'concept',tag:'Isotopes',q:'A student writes a nuclear symbol incorrectly, placing the atomic number where the mass number should go. What is the likely consequence of this mistake?',choices:['No consequence, the values are interchangeable','The student will calculate the wrong number of neutrons, since neutrons = mass number − atomic number','The charge of the atom will change','The atom will become an isotope'],correct:1,solution:'Since neutrons are calculated as (mass number − atomic number), swapping the two values would produce a completely incorrect (and often negative or nonsensical) neutron count.'},
  {id:'p124',difficulty:'medium',type:'calc',tag:'Subatomic Particles',q:'How many neutrons are in a tin-120 (Sn-120) atom? (Atomic number of Sn = 50)',answer:70,tolerance:0,solution:'Neutrons = A - Z = 120 - 50 = <strong>70 neutrons</strong>.'},
  {id:'p125',difficulty:'medium',type:'concept',tag:'Atomic Number',q:'Which of the following is TRUE about the relationship between protons and atomic number?',choices:['They are unrelated','Atomic number always equals the number of protons','Atomic number equals protons only in neutral atoms','Atomic number equals protons minus electrons'],correct:1,solution:'Atomic number (Z) is defined as the number of protons — always, whether the atom is neutral or has become an ion. Electrons can change without affecting Z.'},
  {id:'p126',difficulty:'medium',type:'concept',tag:'Ions',q:'A neutral atom has 12 protons, 12 neutrons, and 12 electrons. If it gains 2 electrons, what is the resulting charge and how many total electrons does it have?',choices:['2- charge; 14 electrons','2+ charge; 10 electrons','2- charge; 10 electrons','Neutral; 12 electrons'],correct:0,solution:'Gaining 2 electrons: 12 + 2 = 14 electrons, while protons stay at 12. Charge = protons - electrons = 12 - 14 = -2. So the ion has a 2- charge and 14 electrons.'},
  {id:'p127',difficulty:'medium',type:'concept',tag:'Isotopes',q:'Two atoms have identical numbers of protons and electrons but different numbers of neutrons. How are their chemical reactivities expected to compare?',choices:['Very different','Nearly identical, since reactivity depends on electron configuration','Identical only if the mass numbers match','Impossible to compare without more data'],correct:1,solution:'Chemical reactivity is governed by electron configuration, which depends on the number of electrons (equal to protons in a neutral atom). Since these atoms share the same proton and electron count, they are isotopes with nearly identical reactivity.'},
  {id:'p128',difficulty:'medium',type:'calc',tag:'Chemical Formulas',q:'How many total atoms are in one formula unit of Mg(OH)2?',answer:5,tolerance:0,solution:'Mg: 1. Inside (OH)2: O = 1×2=2, H = 1×2=2. Total = 1 + 2 + 2 = <strong>5 atoms</strong>.'},
  {id:'p129',difficulty:'medium',type:'concept',tag:'Ions',q:'Which of the following correctly describes what happens to protons, neutrons, and electrons when an atom forms an ion?',choices:['Protons and neutrons stay the same; only electrons are gained or lost','All three particles can change','Only protons change','Only neutrons change'],correct:0,solution:'Ion formation is purely an electron-transfer process. The nucleus (protons and neutrons) is unaffected — only the number of electrons changes, which is what creates the ion\'s charge.'},

  /* ── HARD (15) ── */
  {id:'p130',difficulty:'hard',type:'multi',tag:'All Concepts',q:'An atom has 47 protons and 60 neutrons, and forms a 1+ ion. Identify the element, write its nuclear symbol, and state how many electrons the ion has.',choices:['Silver (Ag); ^10747Ag; Ag^+ has 46 electrons','Silver (Ag); ^6047Ag; Ag^+ has 48 electrons','Palladium (Pd); ^10746Pd; Pd^+ has 45 electrons','Silver (Ag); ^10747Ag; Ag^+ has 47 electrons'],correct:0,solution:'Z = 47 → silver (Ag). Mass number A = 47 + 60 = 107, so the nuclear symbol is ^10747Ag. For the 1+ ion: electrons = 47 - 1 = 46.'},
  {id:'p131',difficulty:'hard',type:'calc',tag:'Average Atomic Mass',q:'Rubidium has two isotopes: Rb-85 (mass = 84.912 amu, abundance = 72.17%) and Rb-87 (mass = 86.909 amu, abundance = 27.83%). Calculate the average atomic mass.',answer:85.47,tolerance:0.05,solution:'(84.912 × 0.7217) + (86.909 × 0.2783) = 61.283 + 24.187 = <strong>85.47 amu</strong>.'},
  {id:'p132',difficulty:'hard',type:'multi',tag:'Average Atomic Mass',q:'An unknown element has 3 isotopes: mass 19.992 amu (90.48%), 20.994 amu (0.27%), and 21.991 amu (9.25%). Calculate the average atomic mass and identify the element (Ne = 20.18 amu; Na = 22.99 amu; Mg = 24.31 amu).',choices:['19.99 amu — this matches sodium','20.18 amu — this matches neon','21.99 amu — this matches magnesium','20.99 amu — this matches an unknown element'],correct:1,solution:'(19.992 × 0.9048) + (20.994 × 0.0027) + (21.991 × 0.0925) = 18.086 + 0.057 + 2.034 = <strong>20.18 amu</strong>, matching neon\'s periodic table value.'},
  {id:'p133',difficulty:'hard',type:'multi',tag:'Ions + Isoelectronic',q:'A student compares two ions: X^2+ has 18 electrons and 20 protons. Y^2- has 18 electrons and 16 protons. Identify both elements and explain why they have the same electron count despite different charges.',choices:['X = Calcium, Y = Sulfur; both are isoelectronic with argon because they have 18 electrons even though their proton counts differ','X = Argon, Y = Sulfur; both are neutral','X = Potassium, Y = Chlorine; both have 19 electrons','X = Calcium, Y = Sulfur; they are isotopes of each other'],correct:0,solution:'For X^2+: protons=20, electrons=18 (lost 2). This is calcium (Ca). For Y^2-: protons=16, electrons=18 (gained 2). This is sulfur (S). Both end up with 18 electrons — the same electron count as argon (Z=18) — because their different proton counts are offset by different charges.'},
  {id:'p134',difficulty:'hard',type:'calc',tag:'Average Atomic Mass',q:'Antimony has two isotopes: Sb-121 (mass = 120.904 amu, abundance = 57.21%) and Sb-123 (mass = 122.904 amu, abundance = 42.79%). Calculate the average atomic mass.',answer:121.77,tolerance:0.05,solution:'(120.904 × 0.5721) + (122.904 × 0.4279) = 69.169 + 52.598 = <strong>121.77 amu</strong>.'},
  {id:'p135',difficulty:'hard',type:'multi',tag:'Empirical + Molecular',q:'A compound has an empirical formula of C3H4O3 and a molar mass of about 176 g/mol. The empirical formula mass of C3H4O3 is approximately 88 g/mol. What is the molecular formula?',choices:['C6H8O6 (this is vitamin C, ascorbic acid)','C3H4O3','C9H12O9','C12H16O12'],correct:0,solution:'Ratio = 176 / 88 = 2. Multiply each subscript in C3H4O3 by 2: C:6, H:8, O:6. Molecular formula = <strong>C6H8O6</strong> — ascorbic acid (vitamin C).'},
  {id:'p136',difficulty:'hard',type:'multi',tag:'All Concepts',q:'An atom X has mass number 65 and 35 neutrons. It forms an ion with 28 electrons. Determine the atomic number, identify the element, and determine the ion\'s charge.',choices:['Z=30 (zinc); charge = 2+','Z=35 (bromine); charge = 7-','Z=30 (zinc); charge = 2-','Z=28 (nickel); charge = neutral'],correct:0,solution:'Z = A - neutrons = 65 - 35 = 30 (zinc). Charge = Z - electrons = 30 - 28 = +2. This is Zn^2+.'},
  {id:'p137',difficulty:'hard',type:'calc',tag:'Average Atomic Mass',q:'Europium has two isotopes: Eu-151 (mass = 150.920 amu, abundance = 47.8%) and Eu-153 (mass = 152.921 amu, abundance = 52.2%). Calculate the average atomic mass.',answer:151.97,tolerance:0.05,solution:'(150.920 × 0.478) + (152.921 × 0.522) = 72.140 + 79.825 = <strong>151.97 amu</strong>.'},
  {id:'p138',difficulty:'hard',type:'multi',tag:'Average Atomic Mass',q:'An unknown element has two isotopes: average atomic mass = 79.90 amu, isotope 1 mass = 78.918 amu, isotope 2 mass = 80.916 amu. Solve for the percent abundance of isotope 1.',choices:['50.8%','49.2%','79.9%','20.1%'],correct:0,solution:'Let x = fraction of isotope 1: 78.918x + 80.916(1-x) = 79.90. This gives -1.998x = -1.016, so x = 0.508 = <strong>50.8%</strong>.'},
  {id:'p139',difficulty:'hard',type:'multi',tag:'Ions',q:'Two students disagree about an ion. Student A says an ion with 18 electrons and 16 protons has a 2+ charge. Student B says it has a 2- charge. Who is correct, and what element is this?',choices:['Student B is correct — charge = protons − electrons = 16−18 = −2; the element is sulfur','Student A is correct — the element is sulfur with 2+ charge','Student A is correct — the element is argon','Student B is correct — the element is chlorine'],correct:0,solution:'Charge = protons - electrons = 16 - 18 = -2. Student B is correct. With 16 protons, this element is sulfur (S), forming the S^2- ion.'},
  {id:'p140',difficulty:'hard',type:'calc',tag:'Chemical Formulas',q:'How many total atoms are in 3 formula units of Ba(NO3)2?',answer:27,tolerance:0,solution:'One formula unit: Ba(1) + N(2) + O(6) = 9 atoms. For 3 formula units: 3 × 9 = <strong>27 atoms</strong>.'},
  {id:'p141',difficulty:'hard',type:'multi',tag:'Average Atomic Mass',q:'A newly discovered element has 4 isotopes: 203.973 amu (1.4%), 205.974 amu (24.1%), 206.976 amu (22.1%), and 207.977 amu (52.4%). Calculate the average atomic mass and identify which heavy metal this is (Pb = 207.2 amu; Bi = 208.98 amu; Tl = 204.38 amu).',choices:['207.22 amu — Lead (Pb)','204.38 amu — Thallium (Tl)','208.98 amu — Bismuth (Bi)','206.00 amu — an unknown element'],correct:0,solution:'(203.973×0.014)+(205.974×0.241)+(206.976×0.221)+(207.977×0.524) = 2.856+49.639+45.742+108.980 = <strong>207.22 amu</strong>, matching lead (Pb).'},
  {id:'p142',difficulty:'hard',type:'multi',tag:'Ions',q:'An atom loses 3 electrons to become a 3+ ion with 10 electrons remaining. A second atom gains 1 electron to become a 1- ion with 18 electrons. Identify both original neutral atoms (before ionization).',choices:['Atom 1 = Aluminum (13 protons); Atom 2 = Chlorine (17 protons)','Atom 1 = Sodium; Atom 2 = Argon','Atom 1 = Aluminum; Atom 2 = Potassium','Atom 1 = Neon; Atom 2 = Chlorine'],correct:0,solution:'Atom 1: ion has 10 electrons, charge +3, so neutral atom had 10+3=13 electrons (protons) — aluminum. Atom 2: ion has 18 electrons, charge -1, so neutral atom had 18-1=17 electrons (protons) — chlorine.'},
  {id:'p143',difficulty:'hard',type:'multi',tag:'Empirical + Molecular',q:'A compound has empirical formula NO2 and a molar mass of approximately 92 g/mol. The empirical formula mass of NO2 is approximately 46 g/mol. How many total atoms are in one molecule of the actual molecular formula?',choices:['6','3','4','8'],correct:0,solution:'Ratio = 92/46 = 2. Molecular formula = N2O4. Total atoms = 2 + 4 = <strong>6 atoms</strong>.'},
  {id:'p144',difficulty:'hard',type:'concept',tag:'Average Atomic Mass',q:'Magnesium\'s average atomic mass (24.31 amu) comes from three isotopes: Mg-24 (78.99%), Mg-25 (10.00%), and Mg-26 (11.01%). If a new sample had a higher proportion of Mg-26 than normal, how would its average atomic mass change?',choices:['It would increase slightly, since Mg-26 is the heaviest isotope and pulls the weighted average higher','It would decrease, since more isotopes always lower the average','It would stay exactly the same regardless of isotope ratios','It would become a whole number'],correct:0,solution:'A weighted average shifts toward whichever value has more weight. Increasing the proportion of the heaviest isotope (Mg-26) would pull the weighted average mass slightly higher than 24.31 amu.'},

  /* ═══════════════════ HARD EXPANSION BATCH — 30 additional hard problems ═══════════════════ */
  {id:'p145',difficulty:'hard',type:'calc',tag:'Average Atomic Mass',q:'Boron has isotopes B-10 (10.013 amu) and B-11 (11.009 amu). If the average atomic mass is 10.81 amu, what percent of boron atoms are B-11?',answer:80.0,tolerance:1,solution:'Let x = fraction of B-11: 10.013(1-x) + 11.009x = 10.81. This gives 0.996x = 0.797, so x = 0.800 = <strong>80.0%</strong>.'},
  {id:'p146',difficulty:'hard',type:'multi',tag:'Ions + Isoelectronic',q:'An ion X^3- has 36 electrons. A second ion Y^2+ has 36 electrons. Determine the atomic numbers of X and Y, and state whether they are isoelectronic with each other.',choices:['X: Z=33 (arsenic); Y: Z=38 (strontium); yes, both are isoelectronic with krypton','X: Z=39; Y: Z=34; no, they are not isoelectronic','X: Z=36; Y: Z=36; they are the same element','X: Z=33; Y: Z=38; no, isoelectronic only applies to neutral atoms'],correct:0,solution:'X^3-: Z = electrons - 3 = 36 - 3 = 33 (arsenic). Y^2+: Z = electrons + 2 = 36 + 2 = 38 (strontium). Both have 36 electrons — the same as krypton (Z=36) — so they are isoelectronic with krypton and with each other.'},
  {id:'p147',difficulty:'hard',type:'calc',tag:'Average Atomic Mass',q:'Copper has isotopes Cu-63 (62.930 amu) and Cu-65 (64.928 amu). The average atomic mass of copper is 63.55 amu. What percent abundance is Cu-63?',answer:69.0,tolerance:1,solution:'Let x = fraction of Cu-63: 62.930x + 64.928(1-x) = 63.55. This gives -1.998x = -1.378, so x = 0.690 = <strong>69.0%</strong>.'},
  {id:'p148',difficulty:'hard',type:'multi',tag:'All Concepts',q:'A nuclear symbol shows ^23592U. It undergoes a process forming U^4+ (loses 4 electrons). Determine: (a) the number of neutrons in the original atom, (b) the number of electrons in the ion.',choices:['143 neutrons; 88 electrons','92 neutrons; 88 electrons','143 neutrons; 96 electrons','235 neutrons; 92 electrons'],correct:0,solution:'Neutrons = A - Z = 235 - 92 = 143. For U^4+: electrons = 92 - 4 = 88.'},
  {id:'p149',difficulty:'hard',type:'calc',tag:'Chemical Formulas',q:'How many total atoms are in 4 formula units of (NH4)3PO4?',answer:80,tolerance:0,solution:'One formula unit: (NH4)3 = 3N+12H, plus PO4 = 1P+4O. Total = 3+12+1+4 = 20 atoms. For 4 formula units: 4 × 20 = <strong>80 atoms</strong>.'},
  {id:'p150',difficulty:'hard',type:'multi',tag:'Isotopes',q:'A chemist has a sample believed to contain only isotope A (mass 34.969 amu), but testing reveals an average atomic mass of 35.45 amu. What does this indicate, and which element does this data match?',choices:['The sample is not pure isotope A — it\'s actually natural chlorine, a mixture of Cl-35 and Cl-37','The sample is 100% pure isotope A, and the measurement has a rounding error','The sample gained mass through a nuclear reaction','The sample must be a different element entirely, unrelated to isotope A'],correct:0,solution:'A measured average mass different from the mass of the assumed single isotope means the sample is actually a mixture of isotopes. 35.45 amu matches natural chlorine\'s average, which is a blend of Cl-35 (34.969 amu) and Cl-37.'},
  {id:'p151',difficulty:'hard',type:'calc',tag:'Average Atomic Mass',q:'An element has three isotopes: 27.977 amu (originally 92.23% abundant), 28.976 amu (4.68%), and 29.974 amu (3.09%). If a geological sample instead shows abundances of 90.00%, 5.00%, and 5.00% for the same three isotopes, what would the new average atomic mass be?',answer:28.13,tolerance:0.05,solution:'(27.977 × 0.90) + (28.976 × 0.05) + (29.974 × 0.05) = 25.179 + 1.449 + 1.499 = <strong>28.13 amu</strong>.'},
  {id:'p152',difficulty:'hard',type:'concept',tag:'Ions + Isoelectronic',q:'A student claims that because Na^+ and Mg^2+ both have 10 electrons, they must have identical chemical and physical properties. Evaluate this claim.',choices:['The claim is false — while isoelectronic ions share the same electron configuration, their different nuclear charges (11 vs 12 protons) pull the shared electrons in with different strength, giving them different sizes and properties','The claim is true — isoelectronic species are always identical in every way','The claim is false because they have different numbers of electrons','The claim is true only for noble gas ions'],correct:0,solution:'Isoelectronic species share the same electron count and configuration, but not the same nuclear charge. A higher proton count (Mg, 12) pulls the same 10 electrons in more tightly than a lower proton count (Na, 11), making Mg^2+ smaller than Na^+ despite having identical electron counts.'},
  {id:'p153',difficulty:'hard',type:'calc',tag:'Chemical Formulas',q:'How many total atoms are in 2 formula units of Cr(NO3)3?',answer:26,tolerance:0,solution:'One formula unit: Cr(1) + (NO3)3 = N(3)+O(9). Total = 1+3+9 = 13 atoms. For 2 formula units: 2 × 13 = <strong>26 atoms</strong>.'},
  {id:'p154',difficulty:'hard',type:'concept',tag:'Isotopes',q:'Sample 1 has an average atomic mass very close to a whole number (little isotope variation). Sample 2 has an average atomic mass far from any whole number (multiple isotopes with similar abundance). Which is more likely to resemble fluorine (essentially one isotope in nature) versus bromine (nearly 50/50 split between two isotopes)?',choices:['Sample 1 is more like fluorine (essentially one isotope); Sample 2 is more like bromine (split between isotopes with different masses)','Sample 1 is more like bromine; Sample 2 is more like fluorine','Both samples are equally likely to be either element','Neither pattern relates to isotope distribution'],correct:0,solution:'An average mass very close to a whole number suggests one dominant isotope (like fluorine, which is essentially 100% F-19). An average far from any whole number suggests two or more isotopes with comparable abundance pulling the average between their masses (like bromine).'},
  {id:'p155',difficulty:'hard',type:'calc',tag:'Average Atomic Mass',q:'Gallium has isotopes Ga-69 (68.926 amu) and Ga-71 (70.925 amu), with an average atomic mass of 69.72 amu. What percent abundance is Ga-71?',answer:39.7,tolerance:1,solution:'Let x = fraction of Ga-71: 68.926(1-x) + 70.925x = 69.72. This gives 1.999x = 0.794, so x = 0.397 = <strong>39.7%</strong>.'},
  {id:'p156',difficulty:'hard',type:'multi',tag:'All Concepts',q:'An atom has 82 protons and forms a stable 2+ ion commonly found in old paint pigments. The neutral atom has a mass number of 208. Determine the number of neutrons in the neutral atom and the number of electrons in the 2+ ion.',choices:['126 neutrons; 80 electrons','208 neutrons; 84 electrons','126 neutrons; 84 electrons','82 neutrons; 80 electrons'],correct:0,solution:'Neutrons = A - Z = 208 - 82 = 126. For the 2+ ion: electrons = 82 - 2 = 80. This describes lead (Pb-208) forming Pb^2+.'},
  {id:'p157',difficulty:'hard',type:'calc',tag:'Chemical Formulas',q:'How many total atoms are in 5 formula units of Li2CO3?',answer:30,tolerance:0,solution:'One formula unit: Li(2) + C(1) + O(3) = 6 atoms. For 5 formula units: 5 × 6 = <strong>30 atoms</strong>.'},
  {id:'p158',difficulty:'hard',type:'multi',tag:'Ions + Isoelectronic',q:'An unknown ion has 54 electrons and a charge of 2-. A second unknown ion has 54 electrons and a charge of 1+. Determine both atomic numbers and identify which noble gas both are isoelectronic with.',choices:['Ion 1: Z=52 (tellurium); Ion 2: Z=55 (cesium); both isoelectronic with xenon (Z=54)','Ion 1: Z=54; Ion 2: Z=54; both are xenon','Ion 1: Z=56; Ion 2: Z=53; both isoelectronic with xenon','Ion 1: Z=52; Ion 2: Z=55; isoelectronic with krypton'],correct:0,solution:'Ion 1 (2- charge): Z = 54 - 2 = 52 (tellurium). Ion 2 (1+ charge): Z = 54 + 1 = 55 (cesium). Both have 54 electrons, matching xenon (Z=54), so both are isoelectronic with xenon.'},
  {id:'p159',difficulty:'hard',type:'calc',tag:'Chemical Formulas',q:'How many total atoms are in 3 formula units of Al(OH)3?',answer:21,tolerance:0,solution:'One formula unit: Al(1) + (OH)3 = O(3)+H(3). Total = 1+3+3 = 7 atoms. For 3 formula units: 3 × 7 = <strong>21 atoms</strong>.'},
  {id:'p160',difficulty:'hard',type:'concept',tag:'Isotopes',q:'A student determines that iron has an average atomic mass of 55.85 amu from four naturally occurring isotopes. Which statement best explains why the average is so close to a whole number despite being a mix of isotopes?',choices:['One isotope (Fe-56) makes up the overwhelming majority (about 92%) of natural iron, pulling the average very close to 56','Iron only has one isotope, so there is no averaging involved','All four isotopes have exactly equal abundance','Average atomic masses are always close to whole numbers regardless of isotope distribution'],correct:0,solution:'A weighted average is pulled toward whichever isotope has the greatest abundance. Since Fe-56 makes up roughly 92% of natural iron, the average atomic mass sits very close to 56, even though three other isotopes also contribute small amounts.'},
  {id:'p161',difficulty:'hard',type:'calc',tag:'Chemical Formulas',q:'How many total atoms are in 2 formula units of (NH4)2Cr2O7?',answer:38,tolerance:0,solution:'One formula unit: (NH4)2 = 2N+8H, Cr2O7 = 2Cr+7O. Total = 2+8+2+7 = 19 atoms. For 2 formula units: 2 × 19 = <strong>38 atoms</strong>.'},
  {id:'p162',difficulty:'hard',type:'multi',tag:'Ions + Isoelectronic',q:'Atom X has atomic number 20 and mass number 44. It loses 2 electrons to form an ion. Atom Y has atomic number 16 and mass number 32; it gains 2 electrons to form an ion. Compare the number of electrons in both resulting ions.',choices:['X^2+ has 18 electrons; Y^2- has 18 electrons — they are isoelectronic with each other','X^2+ has 20 electrons; Y^2- has 16 electrons — not isoelectronic','X^2+ has 22 electrons; Y^2- has 14 electrons','X^2+ has 18 electrons; Y^2- has 16 electrons — not isoelectronic'],correct:0,solution:'X^2+: electrons = 20 - 2 = 18. Y^2-: electrons = 16 + 2 = 18. Both ions end up with 18 electrons, making them isoelectronic with each other (and with argon).'},
  {id:'p163',difficulty:'hard',type:'calc',tag:'Average Atomic Mass',q:'Indium has isotopes In-113 (mass = 112.904 amu, abundance = 4.29%) and In-115 (mass = 114.904 amu, abundance = 95.71%). Calculate the average atomic mass.',answer:114.82,tolerance:0.05,solution:'(112.904 × 0.0429) + (114.904 × 0.9571) = 4.844 + 109.976 = <strong>114.82 amu</strong>.'},
  {id:'p164',difficulty:'hard',type:'concept',tag:'Isotopes',q:'A student reads that "atoms of the same element always have the same mass." Using isotopes as a counterexample, what should be corrected in this statement?',choices:['The corrected statement should be: atoms of the same element always have the same number of protons, but can have different masses due to varying neutron counts (isotopes)','The statement is completely correct as written','The correction should be: atoms of the same element always have the same number of electrons, but different protons','No correction is needed since isotopes do not really exist'],correct:0,solution:'What truly defines an element is a fixed number of protons (atomic number), not a fixed mass. Isotopes of the same element share the same proton count but differ in neutron count, giving them different masses.'},
  {id:'p165',difficulty:'hard',type:'calc',tag:'Chemical Formulas',q:'How many total atoms are in 6 formula units of NaOH?',answer:18,tolerance:0,solution:'One formula unit: Na(1) + O(1) + H(1) = 3 atoms. For 6 formula units: 6 × 3 = <strong>18 atoms</strong>.'},
  {id:'p166',difficulty:'hard',type:'multi',tag:'Ions',q:'Ion P has 12 protons and 10 electrons. Ion Q has 9 protons and 10 electrons. Determine the charge of each ion, and state which one is a cation and which is an anion.',choices:['Ion P is Mg^2+ (cation); Ion Q is F^- (anion)','Ion P is Mg^2- (anion); Ion Q is F^+ (cation)','Both ions are cations','Both ions are anions'],correct:0,solution:'Ion P: charge = protons - electrons = 12 - 10 = +2. This is Mg^2+, a cation. Ion Q: charge = 9 - 10 = -1. This is F^-, an anion.'},
  {id:'p167',difficulty:'hard',type:'calc',tag:'Empirical + Molecular',q:'A compound has an empirical formula of CH and a molar mass of approximately 78 g/mol. The empirical formula mass of CH is about 13 g/mol. How many total atoms are in one molecule of the actual molecular formula?',answer:12,tolerance:0,solution:'Ratio = 78 / 13 = 6. Molecular formula = C6H6 (benzene). Total atoms = 6 + 6 = <strong>12 atoms</strong>.'},
  {id:'p168',difficulty:'hard',type:'concept',tag:'Isotopes',q:'A sample is found to contain atoms with 3 different neutron counts, but all with 17 protons. What term describes the relationship between these atoms, and how many different isotopes are present?',choices:['They are isotopes of chlorine; 3 different isotopes are present','They are isomers of chlorine; 3 different isomers','They are 3 different elements','They are ions of chlorine with 3 different charges'],correct:0,solution:'Atoms that share the same number of protons (17, chlorine) but differ in neutron count are isotopes of the same element. Three different neutron counts means three distinct isotopes of chlorine are present.'},
  {id:'p169',difficulty:'hard',type:'calc',tag:'Chemical Formulas',q:'How many total atoms are in 4 formula units of K2SO4?',answer:28,tolerance:0,solution:'One formula unit: K(2) + S(1) + O(4) = 7 atoms. For 4 formula units: 4 × 7 = <strong>28 atoms</strong>.'},
  {id:'p170',difficulty:'hard',type:'multi',tag:'All Concepts',q:'An unknown element has 92 neutrons and a mass number of 157. It forms a stable 3+ ion. Determine the atomic number, identify the element (Gd, Z=64; Tb, Z=65; Dy, Z=66), and find the number of electrons in the ion.',choices:['Z=65 (Terbium); ion has 62 electrons','Z=64 (Gadolinium); ion has 61 electrons','Z=66 (Dysprosium); ion has 63 electrons','Z=65 (Terbium); ion has 65 electrons'],correct:0,solution:'Z = A - neutrons = 157 - 92 = 65 (terbium). For the 3+ ion: electrons = 65 - 3 = 62.'},
  {id:'p171',difficulty:'hard',type:'calc',tag:'Chemical Formulas',q:'How many total atoms are in 3 formula units of Ba3N2?',answer:15,tolerance:0,solution:'One formula unit: Ba(3) + N(2) = 5 atoms. For 3 formula units: 3 × 5 = <strong>15 atoms</strong>.'},
  {id:'p172',difficulty:'hard',type:'multi',tag:'Ions',q:'Rank three ions from fewest to most protons: Ion 1 has 10 electrons and a 1- charge. Ion 2 has 10 electrons and a 2+ charge. Ion 3 has 10 electrons and is neutral.',choices:['Ion 1 (F^-, Z=9) < Ion 3 (Ne, Z=10) < Ion 2 (Mg^2+, Z=12)','Ion 2 < Ion 3 < Ion 1','Ion 3 < Ion 1 < Ion 2','All three have the same number of protons'],correct:0,solution:'Ion 1: Z = 10 - 1 = 9 (F^-). Ion 3 (neutral): Z = 10 (Ne). Ion 2: Z = 10 + 2 = 12 (Mg^2+). Ranked from fewest to most protons: 9 < 10 < 12.'},
  {id:'p173',difficulty:'hard',type:'calc',tag:'Chemical Formulas',q:'How many total atoms are in 2 formula units of Sr(OH)2?',answer:10,tolerance:0,solution:'One formula unit: Sr(1) + (OH)2 = O(2)+H(2). Total = 1+2+2 = 5 atoms. For 2 formula units: 2 × 5 = <strong>10 atoms</strong>.'},
  {id:'p174',difficulty:'hard',type:'multi',tag:'Nuclear Symbol',q:'A researcher discovers a new isotope with 92 protons and 146 neutrons, radioactive and used as nuclear fuel. Determine its mass number and nuclear symbol.',choices:['Mass number = 238; nuclear symbol ^23892U (Uranium-238)','Mass number = 146; nuclear symbol ^14692U','Mass number = 92; nuclear symbol ^9292U','Mass number = 238; nuclear symbol ^92238U (reversed notation)'],correct:0,solution:'Mass number = protons + neutrons = 92 + 146 = 238. The nuclear symbol places mass number as the superscript and atomic number as the subscript: ^23892U — uranium-238.'}

]; // end ALL_PROBLEMS — 174 problems total (84 original + 60 added + 30 hard expansion)
