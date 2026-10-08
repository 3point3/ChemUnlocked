/**
 * Copy for the SEO topic pages (one per unit). Read by generate-topic-pages.js.
 *
 * Chemistry markup: write species as plain ASCII inside {{ }} and the generator
 * renders them with chem-sub / chem-charge / ion-group.
 *   {{CO2}}  {{Ca3(PO4)2}}  {{PO4 3-}}  {{H +}}  (a space separates the charge)
 * Equations: eq('C3H8 + 5 O2 -> 3 CO2 + 4 H2O') renders a wrap-safe chem-eq block.
 * Plain <sup>/<sub> is used only for legitimate math notation (10^24, K exponents).
 *
 * Fields per topic:
 *   unit      two-digit unit number (the free problems come from NN_practice.html)
 *   slug      URL slug, no extension
 *   name      skill name; H1 is "<name> Practice Problems"
 *   learn     path of the unit study guide (no .html, lowercase canonical)
 *   desc      meta description (~150 chars)
 *   ogDesc    social description
 *   teaches   short phrase for LearningResource.teaches
 *   intro     2-3 sentences, student language
 *   skills    [[bold label, text], ...]
 *   example   { title, steps: [html, ...], eq?: equation string, answer: html }
 *   faq       [[question, answerHtml], ...]
 */

const eq = (s) => ({ __eq: s });

const TOPICS = [
  {
    unit: '01',
    slug: 'significant-figures-practice-problems',
    name: 'Significant Figures',
    learn: '01_learn_intro_to_chemistry_and_lab_safety',
    desc: 'Practice significant figures, scientific notation, and unit conversions with free interactive problems, each with a full worked solution.',
    ogDesc: 'Try free interactive significant figures problems. Count sig figs, round after calculations, and use scientific notation, with a full worked solution for each.',
    teaches: 'Significant figures, scientific notation, and SI unit conversions',
    intro: 'Significant figures show how precise a measurement is, and they decide how many digits your final answer can honestly have. Every chemistry class uses them, so it pays to make the rules automatic. Here you can practice counting sig figs, rounding after a calculation, and writing numbers in scientific notation.',
    skills: [
      ['Counting sig figs:', 'decide which digits in a measurement count, including tricky zeros.'],
      ['Rounding after math:', 'use the right rule for adding and subtracting versus multiplying and dividing.'],
      ['Scientific notation:', 'write very large and very small numbers in a form that keeps the sig figs clear.'],
      ['Units and measurement:', 'convert between SI units and read lab tools like a graduated cylinder.'],
    ],
    example: {
      title: 'A quick example: multiplying measurements',
      steps: [
        'A rectangle measures 12.0 cm by 3.5 cm. What is its area?',
        'Multiply: 12.0 &times; 3.5 = 42.0.',
        '12.0 has 3 sig figs but 3.5 has only 2, and a product can only have as many sig figs as the least precise measurement.',
      ],
      answer: 'Round to 2 sig figs: <strong>42 cm<sup>2</sup></strong>.',
    },
    faq: [
      ['What are significant figures?', 'Significant figures are the digits in a measurement that carry real information: all the digits you were sure of, plus one estimated digit. They tell the reader how precise the measurement was.'],
      ['How do I count significant figures?', 'Nonzero digits always count, and so do zeros between nonzero digits. Leading zeros never count. Trailing zeros count only when the number has a decimal point, so 0.00450 has 3 sig figs and 4500 has 2.'],
      ['What is the sig fig rule for adding versus multiplying?', 'When you add or subtract, round to the fewest decimal places. When you multiply or divide, round to the fewest significant figures. Mixing those two rules up is one of the most common mistakes on tests.'],
      ['How do I write a number in scientific notation?', 'Move the decimal point until you have a number between 1 and 10, then multiply by 10 raised to the number of places you moved it. Moving left gives a positive exponent and moving right gives a negative one, so 6,020,000 becomes 6.02 &times; 10<sup>6</sup>.'],
    ],
  },
  {
    unit: '02',
    slug: 'classifying-matter-practice-problems',
    name: 'Classifying Matter',
    learn: '02_learn_chemistry_matter',
    desc: 'Practice classifying matter with free interactive problems: elements, compounds, mixtures, and physical changes, each with a full worked solution.',
    ogDesc: 'Try free interactive problems on elements, compounds, mixtures, and physical versus chemical changes. Check your answer, then read the worked solution.',
    teaches: 'Elements, compounds, mixtures, and physical versus chemical changes',
    intro: 'Classifying matter means deciding what a sample is made of and how its particles are arranged. A lot of later chemistry depends on telling elements, compounds, and mixtures apart quickly. You can practice that sorting below, along with reading formulas and spotting physical changes.',
    skills: [
      ['Pure substance or mixture:', 'decide whether a sample has one kind of particle or several.'],
      ['Element or compound:', 'use the formula to tell whether a pure substance can be broken down chemically.'],
      ['Homogeneous or heterogeneous:', 'classify mixtures by whether they look uniform throughout.'],
      ['Counting atoms in a formula:', 'read subscripts and parentheses to find the total atoms in one unit.'],
    ],
    example: {
      title: 'A quick example: counting atoms in a formula',
      steps: [
        'How many atoms are in one formula unit of {{Al2(SO4)3}}?',
        'The subscript outside the parentheses multiplies everything inside: 2 Al, 3 S, and 3 &times; 4 = 12 O.',
      ],
      answer: 'Add them up: 2 + 3 + 12 = <strong>17 atoms</strong>.',
    },
    faq: [
      ['What is the difference between an element and a compound?', 'An element has only one kind of atom and cannot be broken into simpler substances by chemical means. A compound has two or more kinds of atoms bonded in a fixed ratio, and it can be broken down chemically.'],
      ['What is the difference between a homogeneous and a heterogeneous mixture?', 'A homogeneous mixture looks the same all the way through, like salt water or air. A heterogeneous mixture has parts you can tell apart, like granite or a bowl of cereal with milk.'],
      ['How do I tell a physical change from a chemical change?', 'In a physical change the substance stays the same and only its form or appearance changes, like melting ice. In a chemical change new substances form, and clues include gas bubbles, a color change you cannot reverse, or a precipitate.'],
      ['How do I count the atoms in a chemical formula?', 'Subscripts multiply the atom right before them. A subscript after a closing parenthesis multiplies every atom inside, so {{Ca(NO3)2}} has 1 Ca, 2 N, and 6 O.'],
    ],
  },
  {
    unit: '03',
    slug: 'atomic-structure-practice-problems',
    name: 'Atomic Structure',
    learn: '03_learn_atomic_structure',
    desc: 'Practice atomic structure with free interactive problems on protons, neutrons, electrons, isotopes, and ions. Each one has a full worked solution.',
    ogDesc: 'Try free interactive atomic structure problems on subatomic particles, isotopes, ions, and average atomic mass, with a worked solution for each.',
    teaches: 'Subatomic particles, isotopes, ions, and average atomic mass',
    intro: 'An atom is built from protons, neutrons, and electrons, and the numbers of each decide what the atom is and how it behaves. Most atomic structure questions come down to reading a symbol and counting particles correctly. Practice below covers particle counts, isotopes, ions, and average atomic mass.',
    skills: [
      ['Particle counts:', 'find protons, neutrons, and electrons from atomic number and mass number.'],
      ['Isotopes:', 'tell isotopes apart and read notation like iron-56.'],
      ['Ions:', 'work out how gaining or losing electrons changes the charge and the electron count.'],
      ['Average atomic mass:', 'weight each isotope by how common it is.'],
    ],
    example: {
      title: 'A quick example: average atomic mass',
      steps: [
        'Chlorine is 75.77% chlorine-35 (34.969 amu) and 24.23% chlorine-37 (36.966 amu). What is its average atomic mass?',
        'Multiply each mass by its abundance as a decimal: 0.7577 &times; 34.969 = 26.50 and 0.2423 &times; 36.966 = 8.957.',
      ],
      answer: 'Add the contributions: 26.50 + 8.957 = <strong>35.45 amu</strong>.',
    },
    faq: [
      ['How do I find the number of protons, neutrons, and electrons?', 'The atomic number is the number of protons, and in a neutral atom it is also the number of electrons. Subtract the atomic number from the mass number to get the neutrons.'],
      ['What is an isotope?', 'Isotopes are atoms of the same element with different numbers of neutrons. They have the same atomic number but different mass numbers, like carbon-12 and carbon-14.'],
      ['How do I calculate average atomic mass?', 'Multiply the mass of each isotope by its relative abundance written as a decimal, then add the results. The answer sits closest to the mass of the most abundant isotope.'],
      ['What is the difference between mass number and atomic mass?', 'Mass number is a whole number: protons plus neutrons in one specific atom. Atomic mass is the weighted average mass of all of an element\'s isotopes, so it is usually a decimal.'],
    ],
  },
  {
    unit: '04',
    slug: 'electron-configuration-practice-problems',
    name: 'Electron Configuration',
    learn: '04_learn_electron_configuration',
    desc: 'Practice electron configurations and orbital diagrams with free interactive problems. Check your answer, then read a full worked solution for each.',
    ogDesc: 'Try free interactive electron configuration problems on sublevels, orbital rules, valence electrons, and unpaired electrons, with worked solutions.',
    teaches: 'Electron configurations, orbital diagrams, and valence electrons',
    intro: 'An electron configuration shows how an atom\'s electrons are spread across energy levels and sublevels. Writing one correctly comes down to following three filling rules in order. Below you can practice full and shorthand configurations, orbital diagrams, and counting valence and unpaired electrons.',
    skills: [
      ['Writing configurations:', 'fill sublevels in the right order for any element.'],
      ['Noble-gas shorthand:', 'start from the previous noble gas to keep long configurations short.'],
      ['Orbital rules:', 'apply the Aufbau principle, Hund\'s rule, and the Pauli exclusion principle.'],
      ['Valence and unpaired electrons:', 'read them straight off a configuration or orbital diagram.'],
    ],
    example: {
      title: 'A quick example: chlorine',
      steps: [
        'Chlorine has 17 electrons. Fill sublevels in order: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup> (2 + 2 + 6 + 2 + 5 = 17).',
        'Shorthand starts from neon: [Ne] 3s<sup>2</sup> 3p<sup>5</sup>.',
        'The outer shell is n = 3, which holds 2 + 5 = 7 valence electrons, and the 3p sublevel has 1 unpaired electron.',
      ],
      answer: 'Chlorine: <strong>[Ne] 3s<sup>2</sup> 3p<sup>5</sup></strong>, 7 valence electrons, 1 unpaired.',
    },
    faq: [
      ['How do I write an electron configuration?', 'Count the electrons, then fill sublevels in order of increasing energy: 1s, 2s, 2p, 3s, 3p, 4s, 3d, and so on. Each s sublevel holds 2 electrons, p holds 6, d holds 10, and f holds 14.'],
      ['What are the Aufbau principle, Hund\'s rule, and the Pauli exclusion principle?', 'Aufbau says fill the lowest-energy sublevels first. Hund\'s rule says spread electrons across orbitals of the same sublevel before pairing them. Pauli says an orbital holds at most two electrons, and they must spin in opposite directions.'],
      ['Why are chromium and copper exceptions?', 'A half-filled or completely filled d sublevel is slightly more stable, so one 4s electron moves into 3d. Chromium is [Ar] 4s<sup>1</sup> 3d<sup>5</sup> and copper is [Ar] 4s<sup>1</sup> 3d<sup>10</sup>.'],
      ['How do I find valence electrons from a configuration?', 'Count the electrons in the highest energy level (the largest n). For main-group elements, that is the s and p electrons in the outer shell.'],
    ],
  },
  {
    unit: '05',
    slug: 'periodic-trends-practice-problems',
    name: 'Periodic Trends',
    learn: '05_learn_periodic_table_and_trends',
    desc: 'Practice periodic trends with free interactive problems on atomic radius, ionization energy, electronegativity, and ions, with worked solutions.',
    ogDesc: 'Try free interactive periodic trends problems on atomic radius, ionization energy, electronegativity, and ion size. Check your answer, then read the solution.',
    teaches: 'Periodic table organization and trends in radius, ionization energy, and electronegativity',
    intro: 'The periodic table is arranged so that properties repeat in patterns you can predict. Once you know which way each trend runs across a period and down a group, you can compare almost any two elements. Practice below covers table layout, atomic radius, ionization energy, electronegativity, and ion size.',
    skills: [
      ['Table layout:', 'identify groups, periods, and regions such as metals, nonmetals, and metalloids.'],
      ['Atomic radius and ionization energy:', 'predict which way each trend runs across a period and down a group.'],
      ['Electronegativity:', 'compare how strongly atoms pull on shared electrons.'],
      ['Ion formation and size:', 'decide what charge an element forms and whether the ion is bigger or smaller than the atom.'],
    ],
    example: {
      title: 'A quick example: ranking atomic radius',
      steps: [
        'Rank Mg, Si, and Cl from largest to smallest atomic radius.',
        'All three are in Period 3. Across a period the nuclear charge grows while the electrons stay in the same shell, so the atoms get smaller from left to right.',
      ],
      answer: 'Left to right is Mg, Si, Cl, so the ranking is <strong>Mg &gt; Si &gt; Cl</strong>.',
    },
    faq: [
      ['What is the trend in atomic radius?', 'Atomic radius decreases from left to right across a period and increases from top to bottom down a group. Moving down adds electron shells, and moving across pulls the same shell in tighter.'],
      ['What is ionization energy and how does it change?', 'Ionization energy is the energy needed to remove an electron from a gaseous atom. It generally increases across a period and decreases down a group, so small atoms on the right hold their electrons most tightly.'],
      ['Why are negative ions larger than their atoms?', 'Adding an electron increases repulsion among the outer electrons without adding any protons, so the electron cloud spreads out. Positive ions shrink for the opposite reason, and they often lose a whole shell.'],
      ['What is electronegativity?', 'Electronegativity measures how strongly an atom attracts the shared electrons in a bond. It rises toward the upper right of the table, which is why fluorine is the most electronegative element.'],
    ],
  },
  {
    unit: '06',
    slug: 'naming-compounds-practice-problems',
    name: 'Naming Compounds',
    learn: '06_learn_chemistry_nomenclature',
    desc: 'Practice naming compounds and writing formulas with free interactive problems on ionic, covalent, and polyatomic ions, with worked solutions.',
    ogDesc: 'Try free interactive chemical nomenclature problems: name ionic and covalent compounds and write formulas, with a full worked solution for each.',
    teaches: 'Naming ionic and covalent compounds and writing chemical formulas',
    intro: 'Chemical nomenclature is the system for turning a formula into a name and a name back into a formula. The trick is picking the right set of rules for the type of compound in front of you. Practice below covers ionic names, Roman numerals, covalent prefixes, polyatomic ions, and writing formulas.',
    skills: [
      ['Choosing the rule set:', 'decide whether a compound is ionic, covalent, or an acid before you name it.'],
      ['Ionic names and Roman numerals:', 'name metal and nonmetal pairs, including metals with more than one charge.'],
      ['Polyatomic ions:', 'recognize and keep common polyatomic ions together as a unit.'],
      ['Writing formulas from names:', 'balance the charges so the formula has no net charge.'],
    ],
    example: {
      title: 'A quick example: writing a formula from a name',
      steps: [
        'Write the formula for calcium phosphate.',
        'Calcium forms {{Ca 2+}} and phosphate is {{PO4 3-}}. Find the smallest numbers that make the charges cancel: 3 &times; (+2) = +6 and 2 &times; (&minus;3) = &minus;6.',
        'Put parentheses around the polyatomic ion so its subscript applies to the whole group.',
      ],
      answer: 'The formula is <strong>{{Ca3(PO4)2}}</strong>.',
    },
    faq: [
      ['How do I name an ionic compound?', 'Name the metal (cation) first, then the nonmetal (anion) with its ending changed to -ide, so {{NaCl}} is sodium chloride. If the anion is a polyatomic ion, use its name unchanged, as in sodium nitrate.'],
      ['When do I use Roman numerals in a name?', 'Use them when the metal can form more than one charge, which includes most transition metals. The numeral gives the charge of the metal ion, so iron(III) means {{Fe 3+}}.'],
      ['How do I name a covalent compound?', 'Use prefixes (mono-, di-, tri-, tetra-, and so on) to show how many atoms of each element there are, and end the second element in -ide. {{CCl4}} is carbon tetrachloride. Skip mono- on the first element.'],
      ['How do I write a formula from a compound name?', 'Write the ions with their charges, then choose subscripts so the total positive and negative charge adds to zero. Use parentheses when you need more than one polyatomic ion.'],
    ],
  },
  {
    unit: '07',
    slug: 'mole-conversions-practice-problems',
    name: 'Mole Conversions',
    learn: '07_learn_chemistry_moles',
    desc: 'Practice mole conversions with free interactive problems on molar mass, grams to moles, particles, and empirical formulas, with worked solutions.',
    ogDesc: 'Try free interactive mole conversion problems: grams to moles, molar mass, Avogadro\'s number, and empirical formulas, each with a worked solution.',
    teaches: 'Mole conversions, molar mass, percent composition, and empirical formulas',
    intro: 'The mole is the counting unit chemists use to link tiny particles to masses you can weigh. Nearly every calculation later in chemistry starts with a mole conversion, so it is worth making these quick and reliable. Practice below covers molar mass, grams to moles to particles, percent composition, and empirical formulas.',
    skills: [
      ['Molar mass:', 'add up atomic masses from the periodic table to get grams per mole.'],
      ['Grams, moles, and particles:', 'convert in either direction using molar mass and Avogadro\'s number.'],
      ['Percent composition:', 'find the percent by mass of each element in a compound.'],
      ['Empirical and molecular formulas:', 'turn mass or ratio data into the simplest whole-number formula.'],
    ],
    example: {
      title: 'A quick example: grams to molecules',
      steps: [
        'How many molecules are in 36.0 g of water? The molar mass of {{H2O}} is 18.02 g/mol.',
        'Grams to moles: 36.0 g &divide; 18.02 g/mol = 1.998 mol.',
        'Moles to molecules: 1.998 mol &times; 6.022 &times; 10<sup>23</sup> molecules/mol.',
      ],
      answer: 'That is <strong>1.20 &times; 10<sup>24</sup> molecules</strong> of {{H2O}}.',
    },
    faq: [
      ['What is a mole in chemistry?', 'A mole is 6.022 &times; 10<sup>23</sup> particles of anything, whether atoms, molecules, or formula units. It works like a dozen, but for counting particles too small to count one at a time.'],
      ['How do I convert grams to moles?', 'Divide the mass in grams by the molar mass in grams per mole. To go back from moles to grams, multiply by the molar mass instead.'],
      ['How do I find molar mass?', 'Multiply the atomic mass of each element by the number of atoms of it in the formula, then add. For {{CO2}} that is 12.01 + 2(16.00) = 44.01 g/mol.'],
      ['How do I find an empirical formula?', 'Convert each element\'s mass to moles, divide all the mole values by the smallest one, and round to whole numbers. Those whole numbers become the subscripts.'],
    ],
  },
  {
    unit: '08',
    slug: 'balancing-equations-practice-problems',
    name: 'Balancing Equations',
    learn: '08_learn_chemical_reactions',
    desc: 'Practice balancing chemical equations and classifying reactions with free interactive problems. Each one comes with a full worked solution.',
    ogDesc: 'Try free interactive problems on balancing equations, reaction types, and precipitation reactions. Check your answer, then read the worked solution.',
    teaches: 'Balancing chemical equations, reaction types, and precipitation reactions',
    intro: 'A balanced chemical equation shows that atoms are never created or destroyed, only rearranged. Balancing is a skill you build with repetition, and it feeds straight into the quantity work in later units. Practice below covers balancing, identifying reaction types, and spotting precipitates and spectator ions.',
    skills: [
      ['Balancing equations:', 'choose coefficients so every element has the same count on both sides.'],
      ['Reaction types:', 'classify reactions as synthesis, decomposition, single replacement, double replacement, or combustion.'],
      ['Predicting products:', 'work out what forms from the reactants and write it correctly.'],
      ['Precipitates and spectator ions:', 'use solubility rules to find the solid and the ions that do not take part.'],
    ],
    example: {
      title: 'A quick example: balancing combustion of propane',
      steps: [
        'Balance the carbon first, then hydrogen, and leave oxygen for last because it appears in two products.',
        '3 carbons on the left means 3 {{CO2}}. 8 hydrogens means 4 {{H2O}}. Now the products hold 6 + 4 = 10 oxygen atoms, which needs 5 {{O2}}.',
      ],
      eq: 'C3H8 + 5 O2 -> 3 CO2 + 4 H2O',
      answer: 'Check each side: 3 C, 8 H, and 10 O. <strong>The equation is balanced.</strong>',
    },
    faq: [
      ['What does it mean to balance a chemical equation?', 'It means adjusting the coefficients so each element has the same number of atoms on both sides of the arrow. That reflects the law of conservation of mass.'],
      ['What are the steps to balance an equation?', 'List the atoms on each side, balance elements that appear in only one reactant and one product first, and save oxygen and hydrogen for last. Change only coefficients, never subscripts, and recount every element at the end.'],
      ['What are the five main types of chemical reactions?', 'Synthesis (two or more substances combine), decomposition (one substance splits), single replacement (one element swaps in for another), double replacement (two compounds swap partners), and combustion (a substance burns in oxygen).'],
      ['How do I know if a precipitate forms?', 'Swap the partners in a double replacement reaction and check the new compounds against the solubility rules. If one of them is insoluble, it is the precipitate and the ions that stay dissolved are spectator ions.'],
    ],
  },
  {
    unit: '09',
    slug: 'stoichiometry-practice-problems',
    name: 'Stoichiometry',
    learn: '09_learn_chemistry_stoichiometry',
    desc: 'Practice stoichiometry with free interactive problems — mole ratios, limiting reactants, percent yield — each with a full worked solution.',
    ogDesc: 'Try free interactive stoichiometry problems on mole ratios, limiting reactants, and percent yield. Check your answer, then read the full worked solution.',
    teaches: 'Mole ratios, limiting reactants, and percent yield',
    intro: 'Stoichiometry is how you use a balanced equation to predict how much of a substance a reaction uses up or makes. Here you can practice the three skills it comes down to: mole ratios, limiting reactants, and percent yield. Try the problems below, check your answer, and read the full worked solution.',
    skills: [
      ['Mole-to-mole conversions:', 'use the coefficients in a balanced equation to go from moles of one substance to moles of another.'],
      ['Mass-to-mass problems:', 'chain grams, moles, and a mole ratio together to go from grams of one substance to grams of another.'],
      ['Limiting reactant:', 'work out which reactant runs out first and how much product that allows.'],
      ['Percent yield:', 'compare what you actually collected with what the equation says was possible.'],
    ],
    example: {
      title: 'A quick example: a mole ratio',
      steps: [
        'How many moles of {{NH3}} form from 1.50 mol of {{H2}}?',
        'Read the ratio from the balanced equation: 3 mol {{H2}} makes 2 mol {{NH3}}.',
        'Multiply by the ratio so the moles of {{H2}} cancel: 1.50 mol {{H2}} &times; (2 mol {{NH3}} &divide; 3 mol {{H2}}).',
      ],
      eq: 'N2 + 3 H2 -> 2 NH3',
      answer: 'That gives <strong>1.00 mol {{NH3}}</strong>.',
    },
    faq: [
      ['What is stoichiometry?', 'Stoichiometry is the math of chemical reactions. A balanced equation tells you the ratio of moles of each substance, and stoichiometry uses that ratio to work out how much of one substance you need, or how much you will make, from an amount of another.'],
      ['How do I find the limiting reactant?', 'Convert the amount of each reactant to moles, then use the mole ratio to find how much product each one could make. The reactant that makes the <em>least</em> product is the limiting reactant, because it runs out first and stops the reaction.'],
      ['What is percent yield?', 'Percent yield compares what you actually collected in the lab (actual yield) with the most the equation says you could make (theoretical yield). Divide actual by theoretical and multiply by 100. It is almost always under 100% because some product gets lost or side reactions happen.'],
      ['How is stoichiometry different from mole conversions?', 'A mole conversion changes one substance between grams, moles, and particles using molar mass or Avogadro\'s number. Stoichiometry adds one more step: a mole ratio from a balanced equation that carries you from one substance to a <em>different</em> one. If you are still shaky on conversions, review <a href="/07_learn_chemistry_moles">the mole</a> first.'],
    ],
  },
  {
    unit: '10',
    slug: 'lewis-structures-practice-problems',
    name: 'Lewis Structures and VSEPR',
    learn: '10_learn_chemistry_bonding',
    desc: 'Practice Lewis structures, VSEPR shapes, and molecular polarity with free interactive problems, each with a full worked solution.',
    ogDesc: 'Try free interactive Lewis structure and VSEPR problems on valence electrons, bond types, molecular shape, and polarity, with worked solutions.',
    teaches: 'Lewis structures, VSEPR molecular geometry, bond types, and polarity',
    intro: 'A Lewis structure is a picture of how a molecule\'s valence electrons are shared and held as lone pairs. From that picture you can predict the molecule\'s shape, whether it is polar, and how it sticks to other molecules. Practice below covers valence electron counts, Lewis structures, VSEPR shapes, polarity, and bond types.',
    skills: [
      ['Counting valence electrons:', 'find the total electrons available before you draw anything.'],
      ['Drawing Lewis structures:', 'place bonds and lone pairs so every atom has a full outer shell.'],
      ['VSEPR shapes:', 'predict geometry from the number of bonding and lone pairs around the central atom.'],
      ['Polarity and bond types:', 'decide whether bonds and whole molecules are polar, and tell ionic from covalent bonding.'],
    ],
    example: {
      title: 'A quick example: water',
      steps: [
        'Count valence electrons for {{H2O}}: 2(1) + 6 = 8.',
        'Put oxygen in the center with a single bond to each hydrogen. That uses 4 electrons, and the other 4 become 2 lone pairs on oxygen.',
        'Oxygen now has 4 electron groups: 2 bonds and 2 lone pairs. The lone pairs push the bonds closer together.',
      ],
      answer: 'The shape is <strong>bent</strong>, and because the bond dipoles do not cancel, the molecule is <strong>polar</strong>.',
    },
    faq: [
      ['How do I draw a Lewis structure?', 'Add up the valence electrons, connect the atoms with single bonds, then spread the remaining electrons as lone pairs, outer atoms first. If the central atom is short of an octet, turn lone pairs into double or triple bonds.'],
      ['How do I predict molecular shape with VSEPR?', 'Count the electron groups around the central atom, because they spread out as far as possible. Then name the shape by the atoms only: 4 groups with 0 lone pairs is tetrahedral, with 1 lone pair is trigonal pyramidal, and with 2 is bent.'],
      ['How can I tell if a molecule is polar?', 'First check whether the bonds are polar, using the difference in electronegativity. Then check the shape: if the bond dipoles cancel in a symmetric shape, as in {{CCl4}}, the molecule is nonpolar.'],
      ['What is the difference between ionic and covalent bonds?', 'An ionic bond is the attraction between a positive and a negative ion after electrons transfer, usually from a metal to a nonmetal. A covalent bond is a pair of electrons shared between two nonmetal atoms.'],
    ],
  },
  {
    unit: '11',
    slug: 'thermochemistry-practice-problems',
    name: 'Thermochemistry',
    learn: '11_learn_chemistry_energy_thermochemistry',
    desc: 'Practice thermochemistry with free interactive problems on heat, specific heat, calorimetry, enthalpy, and heating curves, with worked solutions.',
    ogDesc: 'Try free interactive thermochemistry problems: q = mcΔT, calorimetry, enthalpy, and heating curves. Check your answer, then read the worked solution.',
    teaches: 'Heat, specific heat, calorimetry, enthalpy, and Hess\'s law',
    intro: 'Thermochemistry tracks how heat moves in and out of chemical and physical changes. Most problems use one of a few equations, and the main skill is choosing the right one for the situation. Practice below covers q = mc&Delta;T, heating curves, exothermic and endothermic changes, and enthalpy.',
    skills: [
      ['Heat and temperature change:', 'use q = mc&Delta;T for warming or cooling a sample.'],
      ['Heating curves:', 'combine temperature-change steps with melting and boiling energy.'],
      ['Exothermic and endothermic:', 'read the direction of heat flow from the sign of &Delta;H.'],
      ['Enthalpy and Hess\'s law:', 'add reaction steps to find the &Delta;H of a reaction you cannot measure directly.'],
    ],
    example: {
      title: 'A quick example: heating water',
      steps: [
        'How much heat is needed to warm 25.0 g of water by 10.0 &deg;C? The specific heat of water is 4.18 J/g&middot;&deg;C.',
        'Use q = mc&Delta;T: q = (25.0 g)(4.18 J/g&middot;&deg;C)(10.0 &deg;C).',
      ],
      answer: 'That works out to <strong>1.05 &times; 10<sup>3</sup> J</strong>, or about 1.05 kJ.',
    },
    faq: [
      ['What is specific heat?', 'Specific heat is the energy needed to raise the temperature of 1 gram of a substance by 1 &deg;C. Water\'s is 4.18 J/g&middot;&deg;C, which is unusually high, so water heats and cools slowly.'],
      ['What is the difference between exothermic and endothermic?', 'An exothermic change releases heat to the surroundings, so the surroundings warm up and &Delta;H is negative. An endothermic change absorbs heat from the surroundings, so they cool down and &Delta;H is positive.'],
      ['How do I solve a heating curve problem?', 'Split the curve into segments. On sloped segments use q = mc&Delta;T, and on flat segments, where the phase changes, use q = m&Delta;H<sub>fus</sub> or m&Delta;H<sub>vap</sub>. Then add all the segments together.'],
      ['What is Hess\'s law?', 'Hess\'s law says the total enthalpy change of a reaction is the same no matter how many steps it takes. You can add the &Delta;H values of steps, flipping the sign when you reverse a step and scaling when you multiply it.'],
    ],
  },
  {
    unit: '12',
    slug: 'gas-laws-practice-problems',
    name: 'Gas Laws',
    learn: '12_learn_chemistry_gas',
    desc: 'Practice gas laws with free interactive problems on Boyle\'s, Charles\'s, the combined gas law, and PV = nRT, each with a worked solution.',
    ogDesc: 'Try free interactive gas law problems: pressure units, Boyle\'s, Charles\'s, the combined gas law, and PV = nRT, with a full worked solution for each.',
    teaches: 'Boyle\'s law, Charles\'s law, the combined gas law, and the ideal gas law',
    intro: 'Gas laws describe how the pressure, volume, temperature, and amount of a gas depend on each other. Most problems are about picking the right law and putting temperature in kelvins. Practice below covers pressure units, Boyle\'s and Charles\'s laws, the combined gas law, and PV = nRT.',
    skills: [
      ['Pressure and temperature units:', 'convert among atm, torr, and kPa, and always convert to kelvins.'],
      ['Single-variable laws:', 'use Boyle\'s, Charles\'s, and Gay-Lussac\'s laws when one quantity stays constant.'],
      ['Combined gas law:', 'handle problems where pressure, volume, and temperature all change.'],
      ['Ideal gas law:', 'use PV = nRT to connect a gas to moles, including at STP.'],
    ],
    example: {
      title: 'A quick example: Charles\'s law',
      steps: [
        'A gas takes up 3.00 L at 300 K. It is heated to 450 K at constant pressure. What is the new volume?',
        'Volume and temperature are directly related, so V<sub>2</sub> = V<sub>1</sub> &times; (T<sub>2</sub> &divide; T<sub>1</sub>) = 3.00 L &times; (450 K &divide; 300 K).',
      ],
      answer: 'The new volume is <strong>4.50 L</strong>.',
    },
    faq: [
      ['How do I know which gas law to use?', 'Look at which quantities change and which are held constant. Constant temperature points to Boyle\'s law, constant pressure to Charles\'s law, and constant volume to Gay-Lussac\'s law. If all three change, use the combined gas law.'],
      ['Why do gas law problems need Kelvin?', 'The gas laws depend on the true amount of thermal energy, which is zero at 0 K. Celsius has a zero that is arbitrary, so using it gives wrong ratios. Convert with K = &deg;C + 273.'],
      ['What is the ideal gas law?', 'PV = nRT links pressure, volume, moles, and temperature for a gas. R is the gas constant, 0.0821 L&middot;atm/(mol&middot;K) when pressure is in atm and volume is in liters.'],
      ['What is STP?', 'STP stands for standard temperature and pressure: 0 &deg;C (273 K) and 1 atm (760 torr). At STP, 1 mole of an ideal gas takes up about 22.4 L.'],
    ],
  },
  {
    unit: '13',
    slug: 'molarity-practice-problems',
    name: 'Molarity and Solutions',
    learn: '13_learn_chemistry_solutions',
    desc: 'Practice molarity and solutions with free interactive problems on concentration, dilution, solubility, and molality, each with a worked solution.',
    ogDesc: 'Try free interactive molarity and solutions problems: concentration, dilution, solubility curves, and freezing point depression, with worked solutions.',
    teaches: 'Molarity, dilution, solubility, molality, and colligative properties',
    intro: 'A solution is a homogeneous mixture, and molarity tells you how much solute is dissolved in each liter of it. Most solution problems are a mole conversion plus a volume, so they reward careful unit work. Practice below covers molarity, dilution, solubility curves, molality, and freezing point depression.',
    skills: [
      ['Molarity:', 'find moles of solute per liter of solution from a mass and a volume.'],
      ['Dilution:', 'use M<sub>1</sub>V<sub>1</sub> = M<sub>2</sub>V<sub>2</sub> to prepare a weaker solution from a stronger one.'],
      ['Solubility and electrolytes:', 'read solubility curves and tell strong electrolytes from weak ones.'],
      ['Molality and colligative properties:', 'calculate freezing point depression and boiling point elevation.'],
    ],
    example: {
      title: 'A quick example: making a dilution',
      steps: [
        'How much 2.00 M stock solution do you need to make 250 mL of 0.100 M solution?',
        'Use M<sub>1</sub>V<sub>1</sub> = M<sub>2</sub>V<sub>2</sub> and solve for V<sub>1</sub>: V<sub>1</sub> = (0.100 M &times; 250 mL) &divide; 2.00 M.',
      ],
      answer: 'You need <strong>12.5 mL</strong> of stock, then add water to reach 250 mL total.',
    },
    faq: [
      ['How do I calculate molarity?', 'Divide the moles of solute by the liters of solution. If you start with grams, convert to moles with the molar mass first, and convert milliliters to liters before dividing.'],
      ['How does dilution work?', 'Adding solvent does not change the moles of solute, only the volume. That is why M<sub>1</sub>V<sub>1</sub> = M<sub>2</sub>V<sub>2</sub>: the moles before and after are equal.'],
      ['What is the difference between molarity and molality?', 'Molarity is moles of solute per liter of solution and changes slightly with temperature. Molality is moles of solute per kilogram of solvent and does not change, so it is used for freezing and boiling point problems.'],
      ['What is a strong electrolyte?', 'A strong electrolyte breaks apart almost completely into ions in water, so the solution conducts electricity well. Soluble ionic compounds like {{NaCl}} and strong acids are strong electrolytes, while sugar and ethanol are nonelectrolytes.'],
    ],
  },
  {
    unit: '14',
    slug: 'equilibrium-practice-problems',
    name: 'Chemical Equilibrium',
    learn: '14_learn_chemistry_equilibrium',
    desc: 'Practice chemical equilibrium with free interactive problems on K, Q, ICE tables, and Le Chatelier\'s principle, each with a full worked solution.',
    ogDesc: 'Try free interactive equilibrium problems on the equilibrium constant, Q versus K, ICE tables, and Le Chatelier\'s principle, with worked solutions.',
    teaches: 'The equilibrium constant, Q versus K, ICE tables, and Le Chatelier\'s principle',
    intro: 'A reaction reaches equilibrium when the forward and reverse rates match, so the amounts stop changing even though both reactions are still running. The equilibrium constant K tells you where that balance sits. Practice below covers writing K, comparing Q to K, ICE tables, and shifts from Le Chatelier\'s principle.',
    skills: [
      ['Writing and calculating K:', 'build the K expression from a balanced equation and plug in concentrations.'],
      ['Q versus K:', 'predict which way a mixture will shift to reach equilibrium.'],
      ['ICE tables:', 'track initial, change, and equilibrium amounts to find an unknown concentration.'],
      ['Le Chatelier\'s principle:', 'predict how changes in concentration, pressure, or temperature move the equilibrium.'],
    ],
    example: {
      title: 'A quick example: K and Q',
      steps: [
        'For {{N2}} + 3 {{H2}} &#8652; 2 {{NH3}}, products go on top and each concentration is raised to its coefficient: K = [{{NH3}}]<sup>2</sup> &divide; ([{{N2}}][{{H2}}]<sup>3</sup>).',
        'Calculate Q with the same expression using the current concentrations, then compare. If Q is less than K, there are too few products.',
      ],
      answer: 'When Q &lt; K, the reaction <strong>shifts toward the products</strong> (to the right).',
    },
    faq: [
      ['What is the equilibrium constant K?', 'K is the ratio of product concentrations to reactant concentrations at equilibrium, each raised to its coefficient. A large K means products are favored and a small K means reactants are favored. Pure solids and liquids are left out.'],
      ['What is the difference between Q and K?', 'Q has the same form as K but uses the concentrations at any moment, not just at equilibrium. Comparing Q to K tells you which direction the reaction will move.'],
      ['How do I use an ICE table?', 'Write the initial concentrations, then the change in terms of x using the coefficients, then the equilibrium values as initial plus change. Substitute them into the K expression and solve for x.'],
      ['What is Le Chatelier\'s principle?', 'If you disturb a system at equilibrium, it shifts to partly undo the disturbance. Adding a reactant shifts it toward the products, and removing a product does the same.'],
    ],
  },
  {
    unit: '15',
    slug: 'acids-and-bases-practice-problems',
    name: 'Acids and Bases',
    learn: '15_learn_chemistry_acid_base',
    desc: 'Practice acids and bases with free interactive problems on pH, strong and weak acids, buffers, and titrations, each with a full worked solution.',
    ogDesc: 'Try free interactive acid and base problems on pH, Brønsted-Lowry acids, buffers, and titrations. Check your answer, then read the worked solution.',
    teaches: 'pH, strong and weak acids and bases, buffers, and titrations',
    intro: 'Acid and base problems are about hydrogen ion concentration and how the pH scale measures it. Strong acids ionize completely, weak acids only partly, and that difference decides which method you use. Practice below covers pH calculations, Br&oslash;nsted-Lowry acids and bases, buffers, and neutralization.',
    skills: [
      ['pH and pOH:', 'convert between concentration, pH, and pOH.'],
      ['Strong and weak acids and bases:', 'decide when to assume complete ionization and when to use K<sub>a</sub> or K<sub>b</sub>.'],
      ['Br&oslash;nsted-Lowry theory:', 'identify acids, bases, and conjugate pairs in a reaction.'],
      ['Buffers and titrations:', 'reason about buffer pH and what happens at the endpoint of a neutralization.'],
    ],
    example: {
      title: 'A quick example: pH of a strong base',
      steps: [
        'What is the pH of 0.0010 M {{NaOH}}? {{NaOH}} is a strong base, so [{{OH -}}] = 0.0010 M.',
        'pOH = &minus;log(0.0010) = 3.00, and pH + pOH = 14.',
      ],
      answer: 'So pH = 14.00 &minus; 3.00 = <strong>11.00</strong>.',
    },
    faq: [
      ['How do I calculate pH?', 'For a strong acid, the hydrogen ion concentration equals the acid concentration, and pH = &minus;log[{{H +}}]. A 0.010 M HCl solution has pH 2.00.'],
      ['What is the difference between a strong and a weak acid?', 'A strong acid ionizes completely in water, while a weak acid ionizes only slightly and reaches an equilibrium described by K<sub>a</sub>. A weak acid at the same concentration has a higher pH than a strong one.'],
      ['What is a buffer?', 'A buffer is a mix of a weak acid and its conjugate base that resists changes in pH when small amounts of acid or base are added. The acid neutralizes added base, and the conjugate base neutralizes added acid.'],
      ['What is the endpoint of a titration?', 'The endpoint is the point where the indicator changes color to show the acid and base have reacted in equal mole amounts. For a strong acid and strong base the solution is neutral, pH 7, at that point.'],
    ],
  },
];

module.exports = { TOPICS, eq };
