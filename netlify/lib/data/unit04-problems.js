const ALL_PROBLEMS = [
  {
    id: 'p01', type: 'calc', tag: 'Valence Electrons',
    q: 'Sulfur (S) is in Group 16 of the periodic table. How many valence electrons does a sulfur atom have?',
    answer: 6, tolerance: 0, unit: 'valence electrons',
    solution: '<p>Group 16 main-group elements have <strong>6 valence electrons</strong>.</p>'
  },
  {
    id: 'p02', type: 'calc', tag: 'Valence Electrons',
    q: 'Aluminum (Al) is in Group 13. How many valence electrons does an aluminum atom have?',
    answer: 3, tolerance: 0, unit: 'valence electrons',
    solution: '<p>Group 13 main-group elements have <strong>3 valence electrons</strong>.</p>'
  },
  {
    id: 'p03', type: 'concept', tag: 'Periodic Trend',
    q: 'Which trend generally increases from left to right across a period?',
    choices: ['Atomic radius', 'Electronegativity', 'Shielding', 'Metallic character'],
    correct: 1,
    solution: '<p>Electronegativity generally increases from left to right across a period.</p>'
  },
  {
    id: 'p04', type: 'concept', tag: 'Periodic Trend',
    q: 'Which element is expected to have the larger atomic radius?',
    choices: ['Fluorine', 'Lithium', 'Neon', 'Oxygen'],
    correct: 1,
    solution: '<p>Atomic radius decreases from left to right across a period, so lithium is larger.</p>'
  },
  {
    id: 'p05', type: 'multi', tag: 'Ion Size',
    q: 'Which particle is larger, Na or Na<sup>+</sup>, and why?',
    choices: ['Na because cations gain electrons', 'Na<sup>+</sup> because cations are always larger', 'Na because losing an electron and outer shell makes Na<sup>+</sup> smaller', 'They are the same size'],
    correct: 2,
    solution: '<p>Neutral sodium is larger. Forming Na<sup>+</sup> removes the outer electron shell and reduces repulsion.</p>'
  },
  {
    id: 'p06', type: 'multi', tag: 'Periodic Table',
    q: 'A student says chlorine is in Period 3 and Group 17. What does that tell you about chlorine?',
    choices: ['It has 3 valence electrons and 17 shells', 'It has 17 valence electrons and 3 shells', 'It has 7 valence electrons and electrons in the third energy level', 'It is a metal with 3 valence electrons'],
    correct: 2,
    solution: '<p>Group 17 main-group elements have 7 valence electrons, and Period 3 means the highest occupied level is n = 3.</p>'
  }
];

module.exports = { ALL_PROBLEMS };
