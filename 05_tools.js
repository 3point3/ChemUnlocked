document.addEventListener('DOMContentLoaded', function () {

  // ── PERIODIC TABLE DATA ──────────────────────────────────────
  // Each element: [symbol, name, atomicNum, period, group, type, radius, IE, EN]
  // type codes: am=alkali metal, ae=alkaline earth, tm=transition metal,
  //             ptm=post-transition metal, ml=metalloid, nm=nonmetal,
  //             ha=halogen, ng=noble gas, la=lanthanide, ac=actinide
  const ELEMENTS = [
    ['H','Hydrogen',1,1,1,'nm',53,1312,2.20], ['He','Helium',2,1,18,'ng',31,2372,null],
    ['Li','Lithium',3,2,1,'am',152,520,0.98], ['Be','Beryllium',4,2,2,'ae',112,899,1.57], ['B','Boron',5,2,13,'ml',87,801,2.04], ['C','Carbon',6,2,14,'nm',77,1086,2.55], ['N','Nitrogen',7,2,15,'nm',75,1402,3.04], ['O','Oxygen',8,2,16,'nm',73,1314,3.44], ['F','Fluorine',9,2,17,'ha',64,1681,3.98], ['Ne','Neon',10,2,18,'ng',38,2081,null],
    ['Na','Sodium',11,3,1,'am',186,496,0.93], ['Mg','Magnesium',12,3,2,'ae',160,738,1.31], ['Al','Aluminum',13,3,13,'ptm',143,578,1.61], ['Si','Silicon',14,3,14,'ml',111,786,1.90], ['P','Phosphorus',15,3,15,'nm',106,1012,2.19], ['S','Sulfur',16,3,16,'nm',103,1000,2.58], ['Cl','Chlorine',17,3,17,'ha',99,1251,3.16], ['Ar','Argon',18,3,18,'ng',71,1521,null],
    ['K','Potassium',19,4,1,'am',227,419,0.82], ['Ca','Calcium',20,4,2,'ae',197,590,1.00], ['Sc','Scandium',21,4,3,'tm',162,633,1.36], ['Ti','Titanium',22,4,4,'tm',147,659,1.54], ['V','Vanadium',23,4,5,'tm',134,651,1.63], ['Cr','Chromium',24,4,6,'tm',128,653,1.66], ['Mn','Manganese',25,4,7,'tm',127,717,1.55], ['Fe','Iron',26,4,8,'tm',126,763,1.83], ['Co','Cobalt',27,4,9,'tm',125,760,1.88], ['Ni','Nickel',28,4,10,'tm',124,737,1.91], ['Cu','Copper',29,4,11,'tm',128,746,1.90], ['Zn','Zinc',30,4,12,'tm',134,906,1.65], ['Ga','Gallium',31,4,13,'ptm',135,579,1.81], ['Ge','Germanium',32,4,14,'ml',122,762,2.01], ['As','Arsenic',33,4,15,'ml',119,947,2.18], ['Se','Selenium',34,4,16,'nm',116,941,2.55], ['Br','Bromine',35,4,17,'ha',114,1140,2.96], ['Kr','Krypton',36,4,18,'ng',88,1351,null],
    ['Rb','Rubidium',37,5,1,'am',248,403,0.82], ['Sr','Strontium',38,5,2,'ae',215,550,0.95], ['Y','Yttrium',39,5,3,'tm',180,600,1.22], ['Zr','Zirconium',40,5,4,'tm',160,640,1.33], ['Nb','Niobium',41,5,5,'tm',146,652,1.60], ['Mo','Molybdenum',42,5,6,'tm',139,684,2.16], ['Tc','Technetium',43,5,7,'tm',136,702,1.90], ['Ru','Ruthenium',44,5,8,'tm',134,710,2.20], ['Rh','Rhodium',45,5,9,'tm',134,720,2.28], ['Pd','Palladium',46,5,10,'tm',137,804,2.20], ['Ag','Silver',47,5,11,'tm',144,731,1.93], ['Cd','Cadmium',48,5,12,'tm',151,868,1.69], ['In','Indium',49,5,13,'ptm',167,558,1.78], ['Sn','Tin',50,5,14,'ptm',140,709,1.96], ['Sb','Antimony',51,5,15,'ml',140,834,2.05], ['Te','Tellurium',52,5,16,'ml',136,869,2.10], ['I','Iodine',53,5,17,'ha',133,1008,2.66], ['Xe','Xenon',54,5,18,'ng',108,1170,null],
    ['Cs','Cesium',55,6,1,'am',265,376,0.79], ['Ba','Barium',56,6,2,'ae',222,503,0.89], ['La','Lanthanum',57,6,3,'la',187,538,1.10], ['Ce','Cerium',58,6,3,'la',182,534,1.12], ['Pr','Praseodymium',59,6,3,'la',182,527,1.13], ['Nd','Neodymium',60,6,3,'la',181,533,1.14], ['Pm','Promethium',61,6,3,'la',183,540,null], ['Sm','Samarium',62,6,3,'la',180,545,1.17], ['Eu','Europium',63,6,3,'la',204,547,null], ['Gd','Gadolinium',64,6,3,'la',180,593,1.20], ['Tb','Terbium',65,6,3,'la',178,566,null], ['Dy','Dysprosium',66,6,3,'la',177,573,1.22], ['Ho','Holmium',67,6,3,'la',176,581,1.23], ['Er','Erbium',68,6,3,'la',176,589,1.24], ['Tm','Thulium',69,6,3,'la',176,597,1.25], ['Yb','Ytterbium',70,6,3,'la',176,603,null], ['Lu','Lutetium',71,6,3,'la',174,524,1.27], ['Hf','Hafnium',72,6,4,'tm',159,659,1.30], ['Ta','Tantalum',73,6,5,'tm',146,761,1.50], ['W','Tungsten',74,6,6,'tm',139,770,2.36], ['Re','Rhenium',75,6,7,'tm',137,760,1.90], ['Os','Osmium',76,6,8,'tm',135,840,2.20], ['Ir','Iridium',77,6,9,'tm',136,880,2.20], ['Pt','Platinum',78,6,10,'tm',139,870,2.28], ['Au','Gold',79,6,11,'tm',144,890,2.54], ['Hg','Mercury',80,6,12,'tm',151,1007,2.00], ['Tl','Thallium',81,6,13,'ptm',170,589,1.62], ['Pb','Lead',82,6,14,'ptm',175,716,2.33], ['Bi','Bismuth',83,6,15,'ptm',156,703,2.02], ['Po','Polonium',84,6,16,'ml',168,812,2.00], ['At','Astatine',85,6,17,'ha',150,920,2.20], ['Rn','Radon',86,6,18,'ng',120,1037,null],
    ['Fr','Francium',87,7,1,'am',null,393,0.70], ['Ra','Radium',88,7,2,'ae',null,509,0.90], ['Ac','Actinium',89,7,3,'ac',null,499,1.10], ['Th','Thorium',90,7,3,'ac',179,587,1.30], ['Pa','Protactinium',91,7,3,'ac',163,568,1.50], ['U','Uranium',92,7,3,'ac',156,598,1.38], ['Np','Neptunium',93,7,3,'ac',155,605,1.36], ['Pu','Plutonium',94,7,3,'ac',159,585,1.28], ['Am','Americium',95,7,3,'ac',173,578,1.30], ['Cm','Curium',96,7,3,'ac',174,581,1.30], ['Bk','Berkelium',97,7,3,'ac',170,601,1.30], ['Cf','Californium',98,7,3,'ac',186,608,1.30], ['Es','Einsteinium',99,7,3,'ac',186,619,1.30], ['Fm','Fermium',100,7,3,'ac',null,627,1.30], ['Md','Mendelevium',101,7,3,'ac',null,635,1.30], ['No','Nobelium',102,7,3,'ac',null,642,1.30], ['Lr','Lawrencium',103,7,3,'ac',null,470,null], ['Rf','Rutherfordium',104,7,4,'tm',null,580,null], ['Db','Dubnium',105,7,5,'tm',null,null,null], ['Sg','Seaborgium',106,7,6,'tm',null,null,null], ['Bh','Bohrium',107,7,7,'tm',null,null,null], ['Hs','Hassium',108,7,8,'tm',null,null,null], ['Mt','Meitnerium',109,7,9,'tm',null,null,null], ['Ds','Darmstadtium',110,7,10,'tm',null,null,null], ['Rg','Roentgenium',111,7,11,'tm',null,null,null], ['Cn','Copernicium',112,7,12,'tm',null,null,null], ['Nh','Nihonium',113,7,13,'ptm',null,null,null], ['Fl','Flerovium',114,7,14,'ptm',null,null,null], ['Mc','Moscovium',115,7,15,'ptm',null,null,null], ['Lv','Livermorium',116,7,16,'ptm',null,null,null], ['Ts','Tennessine',117,7,17,'ha',null,null,null], ['Og','Oganesson',118,7,18,'ng',null,null,null]
  ];

  const TYPE_CLASS = {
    am: 'metal-alkali', ae: 'metal-alkaline', tm: 'metal-trans', ptm: 'post-transition',
    ml: 'metalloid', nm: 'nonmetal', ha: 'halogen', ng: 'noble',
    la: 'lanthanide', ac: 'actinide'
  };
  const TYPE_LABEL = {
    am: 'Alkali Metal', ae: 'Alkaline Earth Metal', tm: 'Transition Metal',
    ptm: 'Post-transition Metal', ml: 'Metalloid', nm: 'Nonmetal', ha: 'Halogen', ng: 'Noble Gas',
    la: 'Lanthanide', ac: 'Actinide'
  };

  // Store display placement: [visual row, visual column].
  const PLACEMENT = {
    H:[1,1],He:[1,18],
    Li:[2,1],Be:[2,2],B:[2,13],C:[2,14],N:[2,15],O:[2,16],F:[2,17],Ne:[2,18],
    Na:[3,1],Mg:[3,2],Al:[3,13],Si:[3,14],P:[3,15],S:[3,16],Cl:[3,17],Ar:[3,18],
    K:[4,1],Ca:[4,2],Sc:[4,3],Ti:[4,4],V:[4,5],Cr:[4,6],Mn:[4,7],Fe:[4,8],Co:[4,9],Ni:[4,10],Cu:[4,11],Zn:[4,12],Ga:[4,13],Ge:[4,14],As:[4,15],Se:[4,16],Br:[4,17],Kr:[4,18],
    Rb:[5,1],Sr:[5,2],Y:[5,3],Zr:[5,4],Nb:[5,5],Mo:[5,6],Tc:[5,7],Ru:[5,8],Rh:[5,9],Pd:[5,10],Ag:[5,11],Cd:[5,12],In:[5,13],Sn:[5,14],Sb:[5,15],Te:[5,16],I:[5,17],Xe:[5,18],
    Cs:[6,1],Ba:[6,2],Hf:[6,4],Ta:[6,5],W:[6,6],Re:[6,7],Os:[6,8],Ir:[6,9],Pt:[6,10],Au:[6,11],Hg:[6,12],Tl:[6,13],Pb:[6,14],Bi:[6,15],Po:[6,16],At:[6,17],Rn:[6,18],
    Fr:[7,1],Ra:[7,2],Rf:[7,4],Db:[7,5],Sg:[7,6],Bh:[7,7],Hs:[7,8],Mt:[7,9],Ds:[7,10],Rg:[7,11],Cn:[7,12],Nh:[7,13],Fl:[7,14],Mc:[7,15],Lv:[7,16],Ts:[7,17],Og:[7,18],
    La:[8,4],Ce:[8,5],Pr:[8,6],Nd:[8,7],Pm:[8,8],Sm:[8,9],Eu:[8,10],Gd:[8,11],Tb:[8,12],Dy:[8,13],Ho:[8,14],Er:[8,15],Tm:[8,16],Yb:[8,17],Lu:[8,18],
    Ac:[9,4],Th:[9,5],Pa:[9,6],U:[9,7],Np:[9,8],Pu:[9,9],Am:[9,10],Cm:[9,11],Bk:[9,12],Cf:[9,13],Es:[9,14],Fm:[9,15],Md:[9,16],No:[9,17],Lr:[9,18]
  };

  const grid = document.getElementById('ptGrid');
  if (!grid) return;

  // Build element map by visual grid position.
  const byPos = {};
  ELEMENTS.forEach(el => {
    const pos = PLACEMENT[el[0]];
    if (!pos) return;
    const key = `${pos[0]}-${pos[1]}`;
    byPos[key] = el;
  });

  // Render 7 main rows plus lanthanide and actinide rows.
  for (let p = 1; p <= 9; p++) {
    for (let c = 1; c <= 18; c++) {
      const cell = document.createElement('div');
      const key = `${p}-${c}`;
      const el = byPos[key];
      if (!el) {
        cell.className = 'pt-cell empty';
      } else {
        const typeClass = TYPE_CLASS[el[5]] || '';
        cell.className = `pt-cell ${typeClass}`;
        cell.innerHTML = `<span class="sym">${el[0]}</span>`;
        cell.dataset.sym = el[0];
      }
      grid.appendChild(cell);
    }
  }

  function updateFamilyInfoPanel(el, note) {
    const panel = document.getElementById('ptInfoPanel');
    const nameEl = document.getElementById('ptName');
    const metaEl = document.getElementById('ptMeta');
    const [sym, name] = el;
    nameEl.textContent = `Highlighted element: ${name} (${sym})`;
    metaEl.textContent = note;
    panel.classList.add('visible');
  }

  function clearGridHighlights() {
    document.querySelectorAll('.pt-cell').forEach(cell => {
      cell.classList.remove('selected', 'is-target', 'is-compare');
    });
  }

  function setToolFeedback(node, message, state) {
    node.textContent = message;
    node.dataset.state = state || 'pending';
  }

  function toggleToolPanel(node, show) {
    node.hidden = !show;
  }

  function formatIonSpecies(species) {
    const match = species.match(/^([A-Z][a-z]?)(\d*)([+-−])?$/);
    if (!match) return species;
    const [, symbol, magnitude, sign] = match;
    if (!sign) return symbol;
    const charge = `${magnitude || ''}${sign === '-' ? '-' : sign}`;
    return `<span class="ion-group">${symbol}<span class="chem-charge">${charge}</span></span>`;
  }

  function formatIonPair(left, right) {
    return `${formatIonSpecies(left)} <span class="chem-op">vs</span> ${formatIonSpecies(right)}`;
  }

  function shuffleArray(items) {
    const shuffled = items.slice();
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function pickNextIndex(items, currentIndex) {
    if (!items.length) return 0;
    let nextIndex = Math.floor(Math.random() * items.length);
    if (items.length > 1) {
      while (nextIndex === currentIndex) nextIndex = Math.floor(Math.random() * items.length);
    }
    return nextIndex;
  }

  function markTarget(sym) {
    clearGridHighlights();
    const cell = grid.querySelector(`[data-sym="${sym}"]`);
    if (cell) cell.classList.add('is-target');
  }

  // ── FAMILY CLASSIFIER TOOL ────────────────────────────────────
  const FAMILY_QUESTIONS = [
    {
      sym: 'Cl',
      prompt: 'Which family does this highlighted element belong to?',
      options: ['Halogen', 'Noble gas', 'Alkali metal', 'Metalloid'],
      answer: 'Halogen',
      correct: 'Right — chlorine is in Group 17, so it is a halogen.',
      incorrect: 'Not quite — chlorine is not a noble gas. Group 17 elements are halogens, so check the column just left of Group 18.',
      support: 'Why this family: chlorine is in Group 17, a vertical family near the upper right of the table.',
      revealAnswer: 'Answer: Halogen',
      revealWhy: 'Why: Chlorine is in Group 17, the column just left of the noble gases.',
      revealExtra: 'Halogens are reactive nonmetals with 7 valence electrons.'
    },
    {
      sym: 'Si',
      prompt: 'Which region best fits this highlighted element?',
      options: ['Metalloid', 'Transition metal', 'Halogen', 'Noble gas'],
      answer: 'Metalloid',
      correct: 'Right — silicon touches the staircase line, so it is a metalloid.',
      incorrect: 'Not quite — silicon is not a transition metal. Check the staircase border: elements along it are metalloids.',
      support: 'Why this region: silicon sits on the staircase line that separates metals from nonmetals.',
      revealAnswer: 'Answer: Metalloid',
      revealWhy: 'Why: Silicon is one of the elements on the staircase border.',
      revealExtra: 'Metalloids have properties between metals and nonmetals.'
    },
    {
      sym: 'Mg',
      prompt: 'Which family does this highlighted element belong to?',
      options: ['Alkaline earth metal', 'Alkali metal', 'Nonmetal', 'Halogen'],
      answer: 'Alkaline earth metal',
      correct: 'Right — magnesium is in Group 2, so it is an alkaline earth metal.',
      incorrect: 'Not quite — magnesium is not in Group 1. Group 2 elements are alkaline earth metals, so check the second column.',
      support: 'Why this family: magnesium is in Group 2, the second column on the periodic table.',
      revealAnswer: 'Answer: Alkaline earth metal',
      revealWhy: 'Why: Magnesium is in Group 2.',
      revealExtra: 'Alkaline earth metals are reactive metals with 2 valence electrons.'
    },
    {
      sym: 'Ne',
      prompt: 'Which family does this highlighted element belong to?',
      options: ['Noble gas', 'Halogen', 'Nonmetal', 'Metalloid'],
      answer: 'Noble gas',
      correct: 'Right — neon is in Group 18, so it is a noble gas.',
      incorrect: 'Not quite — neon is not a halogen. Group 18 elements are noble gases, so check the far right column.',
      support: 'Why this family: neon is in Group 18, the far right column of the table.',
      revealAnswer: 'Answer: Noble gas',
      revealWhy: 'Why: Neon is in the last column, Group 18.',
      revealExtra: 'Noble gases have filled valence shells and are usually very unreactive.'
    },
    {
      sym: 'K',
      prompt: 'Which family does this highlighted element belong to?',
      options: ['Alkali metal', 'Alkaline earth metal', 'Halogen', 'Noble gas'],
      answer: 'Alkali metal',
      correct: 'Right — potassium is in Group 1, so it is an alkali metal.',
      incorrect: 'Not quite — potassium is not in Group 2. Group 1 elements are alkali metals.',
      support: 'Why this family: potassium is in Group 1, the first column of metals.',
      revealAnswer: 'Answer: Alkali metal',
      revealWhy: 'Why: Potassium sits in Group 1.',
      revealExtra: 'Alkali metals have 1 valence electron and are very reactive.'
    },
    {
      sym: 'Ar',
      prompt: 'Which family does this highlighted element belong to?',
      options: ['Noble gas', 'Halogen', 'Metalloid', 'Alkali metal'],
      answer: 'Noble gas',
      correct: 'Right — argon is in Group 18, so it is a noble gas.',
      incorrect: 'Not quite — argon is in the far right column, which is the noble gas family.',
      support: 'Why this family: argon is in Group 18, the last column.',
      revealAnswer: 'Answer: Noble gas',
      revealWhy: 'Why: Argon is in Group 18.',
      revealExtra: 'Noble gases are usually very unreactive because their valence shells are full.'
    },
    {
      sym: 'F',
      prompt: 'Which family does this highlighted element belong to?',
      options: ['Halogen', 'Noble gas', 'Metalloid', 'Alkali metal'],
      answer: 'Halogen',
      correct: 'Right — fluorine is in Group 17, so it is a halogen.',
      incorrect: 'Not quite — fluorine is one column left of the noble gases, which makes it a halogen.',
      support: 'Why this family: fluorine is in Group 17.',
      revealAnswer: 'Answer: Halogen',
      revealWhy: 'Why: Fluorine is in Group 17.',
      revealExtra: 'Halogens are reactive nonmetals with 7 valence electrons.'
    },
    {
      sym: 'B',
      prompt: 'Which region best fits this highlighted element?',
      options: ['Metalloid', 'Nonmetal', 'Noble gas', 'Transition metal'],
      answer: 'Metalloid',
      correct: 'Right — boron sits on the staircase line, so it is a metalloid.',
      incorrect: 'Not quite — boron is on the staircase border, which marks the metalloids.',
      support: 'Why this region: boron sits on the staircase boundary between metals and nonmetals.',
      revealAnswer: 'Answer: Metalloid',
      revealWhy: 'Why: Boron is on the staircase line.',
      revealExtra: 'Metalloids have mixed metal/nonmetal properties.'
    },
    {
      sym: 'Ca',
      prompt: 'Which family does this highlighted element belong to?',
      options: ['Alkaline earth metal', 'Alkali metal', 'Halogen', 'Nonmetal'],
      answer: 'Alkaline earth metal',
      correct: 'Right — calcium is in Group 2, so it is an alkaline earth metal.',
      incorrect: 'Not quite — calcium is in the second column, not the first.',
      support: 'Why this family: calcium is in Group 2.',
      revealAnswer: 'Answer: Alkaline earth metal',
      revealWhy: 'Why: Calcium is in Group 2.',
      revealExtra: 'Alkaline earth metals have 2 valence electrons.'
    },
    {
      sym: 'Br',
      prompt: 'Which family does this highlighted element belong to?',
      options: ['Halogen', 'Noble gas', 'Metalloid', 'Transition metal'],
      answer: 'Halogen',
      correct: 'Right — bromine is in Group 17, so it is a halogen.',
      incorrect: 'Not quite — bromine is not in the last column. It is one column left of the noble gases.',
      support: 'Why this family: bromine is in Group 17.',
      revealAnswer: 'Answer: Halogen',
      revealWhy: 'Why: Bromine is in Group 17.',
      revealExtra: 'Halogens are reactive nonmetals.'
    },
    {
      sym: 'He',
      prompt: 'Which family does this highlighted element belong to?',
      options: ['Noble gas', 'Halogen', 'Metalloid', 'Alkaline earth metal'],
      answer: 'Noble gas',
      correct: 'Right — helium is in Group 18, so it is a noble gas.',
      incorrect: 'Not quite — helium is in the far-right column, the noble gas family.',
      support: 'Why this family: helium is placed in Group 18.',
      revealAnswer: 'Answer: Noble gas',
      revealWhy: 'Why: Helium is in Group 18.',
      revealExtra: 'Helium has a filled outer shell and is very unreactive.'
    },
    {
      sym: 'Sr',
      prompt: 'Which family does this highlighted element belong to?',
      options: ['Alkaline earth metal', 'Alkali metal', 'Noble gas', 'Halogen'],
      answer: 'Alkaline earth metal',
      correct: 'Right — strontium is in Group 2, so it is an alkaline earth metal.',
      incorrect: 'Not quite — strontium is in the second column, not the first or far right.',
      support: 'Why this family: strontium is in Group 2 on the periodic table.',
      revealAnswer: 'Answer: Alkaline earth metal',
      revealWhy: 'Why: Strontium is in Group 2.',
      revealExtra: 'Group 2 elements are alkaline earth metals with 2 valence electrons.'
    }
  ];

  let familyIndex = 0;
  let familySelection = null;
  let familyChecked = false;

  const familyPrompt = document.getElementById('familyPrompt');
  const familyAnswers = document.getElementById('familyAnswers');
  const familyCheckBtn = document.getElementById('familyCheckBtn');
  const familyRevealBtn = document.getElementById('familyRevealBtn');
  const familyNextBtn = document.getElementById('familyNextBtn');
  const familyFeedback = document.getElementById('familyFeedback');
  const familyReveal = document.getElementById('familyReveal');
  const familySupport = document.getElementById('familySupport');

  function renderFamilyQuestion() {
    const q = FAMILY_QUESTIONS[familyIndex];
    familySelection = null;
    familyChecked = false;
    familyPrompt.textContent = q.prompt;
    familyAnswers.innerHTML = '';
    shuffleArray(q.options).forEach(option => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'segment-btn tool-choice-btn explore-choice';
      btn.setAttribute('aria-pressed', 'false');
      btn.textContent = option;
      btn.addEventListener('click', function () {
        familySelection = option;
        familyCheckBtn.disabled = false;
        document.querySelectorAll('#familyAnswers .explore-choice').forEach(node => {
          node.classList.remove('active');
          node.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      });
      familyAnswers.appendChild(btn);
    });
    familyCheckBtn.disabled = true;
    familyRevealBtn.disabled = true;
    familyNextBtn.disabled = true;
    setToolFeedback(familyFeedback, 'Choose one answer, then click Check.', 'pending');
    familyReveal.innerHTML = '';
    familySupport.innerHTML = '';
    toggleToolPanel(familyReveal, false);
    toggleToolPanel(familySupport, false);
    markTarget(q.sym);
    updateFamilyInfoPanel(ELEMENTS.find(el => el[0] === q.sym), 'Use its column and location in the periodic table to classify it before you check. Scroll down for a view of the periodic table.');
  }

  familyCheckBtn.addEventListener('click', function () {
    const q = FAMILY_QUESTIONS[familyIndex];
    if (!familySelection) {
      setToolFeedback(familyFeedback, 'Choose one answer, then click Check.', 'pending');
      return;
    }
    familyChecked = true;
    familyRevealBtn.disabled = false;
    familyNextBtn.disabled = false;
    toggleToolPanel(familySupport, true);
    familySupport.innerHTML = `
      <div class="icon">◉</div>
      <div class="key-fact-copy">
        <p class="key-fact-title">Rule to use</p>
        <ul class="key-fact-list">
          <li>${q.support}</li>
        </ul>
      </div>
    `;
    if (familySelection === q.answer) {
      setToolFeedback(familyFeedback, q.correct, 'correct');
    } else {
      setToolFeedback(familyFeedback, q.incorrect, 'incorrect');
    }
  });

  familyRevealBtn.addEventListener('click', function () {
    if (!familyChecked) return;
    const q = FAMILY_QUESTIONS[familyIndex];
    toggleToolPanel(familyReveal, true);
    familyReveal.innerHTML = `
      <div class="icon">▸</div>
      <div class="key-fact-copy">
        <p class="key-fact-title">Reveal reasoning</p>
        <ul class="key-fact-list">
          <li>${q.revealAnswer}</li>
          <li>${q.revealWhy}</li>
          <li>${q.revealExtra}</li>
        </ul>
      </div>
    `;
  });

  familyNextBtn.addEventListener('click', function () {
    familyIndex = pickNextIndex(FAMILY_QUESTIONS, familyIndex);
    renderFamilyQuestion();
  });

  renderFamilyQuestion();

  // ── TREND PREDICTOR TOOL ─────────────────────────────────────
  const TREND_DATA = {
    Na: { radius:186, ie:496, en:0.93 },
    K:  { radius:227, ie:419, en:0.82 },
    Cl: { radius:99,  ie:1251, en:3.16 },
    F:  { radius:64,  ie:1681, en:3.98 },
    Li: { radius:152, ie:520, en:0.98 },
    O:  { radius:73,  ie:1314, en:3.44 },
    S:  { radius:103, ie:1000, en:2.58 },
    Mg: { radius:160, ie:738, en:1.31 },
    Ca: { radius:197, ie:590, en:1.00 }
  };
  const TREND_QUESTIONS = [
    {
      property: 'radius',
      prompt: 'Which atom has the larger atomic radius?',
      pair: ['Na', 'Cl'],
      answer: 'Na',
      correct: 'Right — Na is larger because atomic radius gets smaller from left to right across a period.',
      incorrect: 'Not quite — these two elements are in the same period. Use the across-a-period rule: atomic radius gets smaller from left to right, so compare their positions again.',
      support: 'Na and Cl are both in Period 3, so this is an across-a-period comparison.',
      revealAnswer: 'Answer: Na',
      revealWhy: 'Why: Na and Cl are in the same period. Atomic radius gets smaller from left to right, so Na is larger.',
      valueText: 'Na: 186 pm | Cl: 99 pm'
    },
    {
      property: 'ie',
      prompt: 'Which atom has the higher ionization energy?',
      pair: ['Li', 'F'],
      answer: 'F',
      correct: 'Right — F has the higher ionization energy because ionization energy usually increases from left to right and up the table.',
      incorrect: 'Not quite — ionization energy does not follow the radius rule. Smaller atoms usually hold electrons more tightly, so check which atom is closer to the upper right.',
      support: 'Li and F are both in Period 2, so compare them from left to right.',
      revealAnswer: 'Answer: F',
      revealWhy: 'Why: Ionization energy usually increases across a period because the nucleus pulls electrons more strongly.',
      valueText: 'Li: 520 kJ/mol | F: 1681 kJ/mol'
    },
    {
      property: 'en',
      prompt: 'Which atom has the higher electronegativity?',
      pair: ['F', 'Cl'],
      answer: 'F',
      correct: 'Right — F has the higher electronegativity because electronegativity increases toward the upper right of the table.',
      incorrect: 'Not quite — electronegativity is about pull on shared electrons in a bond. Use the trend toward the upper right, then compare again.',
      support: 'F and Cl are in the same group, so this is a down-a-group comparison.',
      revealAnswer: 'Answer: F',
      revealWhy: 'Why: Electronegativity decreases as you move down a group, so fluorine is higher than chlorine.',
      valueText: 'F: 3.98 | Cl: 3.16'
    },
    {
      property: 'radius',
      prompt: 'Which atom has the larger atomic radius?',
      pair: ['Mg', 'Ca'],
      answer: 'Ca',
      correct: 'Right — Ca is larger because atomic radius increases as you move down a group.',
      incorrect: 'Not quite — these two elements are in the same group. Moving down adds an energy level, so compare their vertical positions again.',
      support: 'Mg and Ca are both in Group 2, so this is a down-a-group comparison.',
      revealAnswer: 'Answer: Ca',
      revealWhy: 'Why: Atomic radius increases down a group because each step adds a new energy level.',
      valueText: 'Mg: 160 pm | Ca: 197 pm'
    },
    {
      property: 'radius',
      prompt: 'Which atom has the larger atomic radius?',
      pair: ['K', 'Na'],
      answer: 'K',
      correct: 'Right — K is larger because atomic radius increases down a group.',
      incorrect: 'Not quite — these are in the same group. The lower element is larger.',
      support: 'K and Na are both in Group 1.',
      revealAnswer: 'Answer: K',
      revealWhy: 'Why: Going down Group 1 adds an energy level, so potassium is larger.',
      valueText: 'K: 227 pm | Na: 186 pm'
    },
    {
      property: 'ie',
      prompt: 'Which atom has the higher ionization energy?',
      pair: ['Na', 'K'],
      answer: 'Na',
      correct: 'Right — Na has the higher ionization energy because ionization energy decreases down a group.',
      incorrect: 'Not quite — these are in the same group. The higher element holds its electrons more tightly.',
      support: 'Na and K are both in Group 1.',
      revealAnswer: 'Answer: Na',
      revealWhy: 'Why: Ionization energy decreases down a group, so sodium is higher than potassium.',
      valueText: 'Na: 496 kJ/mol | K: 419 kJ/mol'
    },
    {
      property: 'en',
      prompt: 'Which atom has the higher electronegativity?',
      pair: ['O', 'S'],
      answer: 'O',
      correct: 'Right — O has the higher electronegativity because electronegativity decreases down a group.',
      incorrect: 'Not quite — oxygen is above sulfur in the same group, so it pulls shared electrons more strongly.',
      support: 'O and S are both in Group 16.',
      revealAnswer: 'Answer: O',
      revealWhy: 'Why: Electronegativity decreases down a group, so oxygen is higher than sulfur.',
      valueText: 'O: 3.44 | S: 2.58'
    },
    {
      property: 'radius',
      prompt: 'Which atom has the larger atomic radius?',
      pair: ['Li', 'F'],
      answer: 'Li',
      correct: 'Right — Li is larger because radius gets smaller from left to right.',
      incorrect: 'Not quite — these are in the same period. The left-side atom is larger.',
      support: 'Li and F are both in Period 2.',
      revealAnswer: 'Answer: Li',
      revealWhy: 'Why: Atomic radius decreases across a period, so lithium is larger than fluorine.',
      valueText: 'Li: 152 pm | F: 64 pm'
    },
    {
      property: 'ie',
      prompt: 'Which atom has the higher ionization energy?',
      pair: ['Mg', 'Ca'],
      answer: 'Mg',
      correct: 'Right — Mg has the higher ionization energy because ionization energy decreases down a group.',
      incorrect: 'Not quite — magnesium is above calcium, so it takes more energy to remove an electron.',
      support: 'Mg and Ca are both in Group 2.',
      revealAnswer: 'Answer: Mg',
      revealWhy: 'Why: Ionization energy decreases down a group, so magnesium is higher than calcium.',
      valueText: 'Mg: 738 kJ/mol | Ca: 590 kJ/mol'
    },
    {
      property: 'en',
      prompt: 'Which atom has the higher electronegativity?',
      pair: ['Na', 'Cl'],
      answer: 'Cl',
      correct: 'Right — Cl has the higher electronegativity because electronegativity increases to the right.',
      incorrect: 'Not quite — chlorine is far closer to the upper right of the table.',
      support: 'Na and Cl are both in Period 3.',
      revealAnswer: 'Answer: Cl',
      revealWhy: 'Why: Electronegativity increases from left to right across a period.',
      valueText: 'Na: 0.93 | Cl: 3.16'
    },
    {
      property: 'radius',
      prompt: 'Which atom has the larger atomic radius?',
      pair: ['O', 'F'],
      answer: 'O',
      correct: 'Right — O is larger because radius decreases from left to right.',
      incorrect: 'Not quite — oxygen is to the left of fluorine in the same period, so it is larger.',
      support: 'O and F are both in Period 2.',
      revealAnswer: 'Answer: O',
      revealWhy: 'Why: Atomic radius gets smaller from left to right, so oxygen is larger than fluorine.',
      valueText: 'O: 73 pm | F: 64 pm'
    },
    {
      property: 'ie',
      prompt: 'Which atom has the higher ionization energy?',
      pair: ['Cl', 'F'],
      answer: 'F',
      correct: 'Right — F has the higher ionization energy because ionization energy decreases down a group.',
      incorrect: 'Not quite — fluorine is above chlorine in the same group, so it takes more energy to remove an electron.',
      support: 'Cl and F are both in Group 17.',
      revealAnswer: 'Answer: F',
      revealWhy: 'Why: Ionization energy decreases down a group, so fluorine is higher than chlorine.',
      valueText: 'F: 1681 kJ/mol | Cl: 1251 kJ/mol'
    }
  ];
  const trendPrompt = document.getElementById('trendPrompt');
  const trendPropertyChip = document.getElementById('trendPropertyChip');
  const trendPairBadge = document.getElementById('trendPairBadge');
  const trendAnswers = document.getElementById('trendAnswers');
  const trendCheckBtn = document.getElementById('trendCheckBtn');
  const trendRevealBtn = document.getElementById('trendRevealBtn');
  const trendNextBtn = document.getElementById('trendNextBtn');
  const trendFeedback = document.getElementById('trendFeedback');
  const trendSupport = document.getElementById('trendSupport');
  const trendReveal = document.getElementById('trendReveal');
  const trendValues = document.getElementById('trendValues');

  let trendIndex = 0;
  let trendSelection = null;
  let trendChecked = false;

  function renderTrendQuestion() {
    const q = TREND_QUESTIONS[trendIndex];
    trendSelection = null;
    trendChecked = false;
    trendPropertyChip.textContent =
      q.property === 'radius' ? 'Atomic Radius' :
      q.property === 'ie' ? 'Ionization Energy' :
      'Electronegativity';
    trendPrompt.textContent = q.prompt;
    trendPairBadge.textContent = `${q.pair[0]} vs ${q.pair[1]}`;
    trendAnswers.innerHTML = '';
    shuffleArray(q.pair).forEach(sym => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'segment-btn tool-choice-btn explore-choice';
      btn.setAttribute('aria-pressed', 'false');
      btn.textContent = sym;
      btn.addEventListener('click', function () {
        trendSelection = sym;
        trendCheckBtn.disabled = false;
        document.querySelectorAll('#trendAnswers .explore-choice').forEach(node => {
          node.classList.remove('active');
          node.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      });
      trendAnswers.appendChild(btn);
    });
    trendCheckBtn.disabled = true;
    trendRevealBtn.disabled = true;
    trendNextBtn.disabled = true;
    setToolFeedback(trendFeedback, 'Choose one element, then click Check.', 'pending');
    trendSupport.innerHTML = '';
    trendReveal.innerHTML = '';
    trendValues.className = 'tool-values';
    trendValues.innerHTML = '';
    toggleToolPanel(trendSupport, false);
    toggleToolPanel(trendReveal, false);
  }

  trendCheckBtn.addEventListener('click', function () {
    const q = TREND_QUESTIONS[trendIndex];
    if (!trendSelection) {
      setToolFeedback(trendFeedback, 'Choose one element, then click Check.', 'pending');
      return;
    }
    trendChecked = true;
    trendRevealBtn.disabled = false;
    trendNextBtn.disabled = false;
    toggleToolPanel(trendSupport, true);
    trendSupport.innerHTML = `
      <div class="icon">◉</div>
      <div class="key-fact-copy">
        <p class="key-fact-title">Rule to use</p>
        <ul class="key-fact-list">
          <li>${q.support}</li>
        </ul>
      </div>
    `;
    if (trendSelection === q.answer) {
      setToolFeedback(trendFeedback, q.correct, 'correct');
    } else {
      setToolFeedback(trendFeedback, q.incorrect, 'incorrect');
    }
  });

  trendRevealBtn.addEventListener('click', function () {
    if (!trendChecked) return;
    const q = TREND_QUESTIONS[trendIndex];
    toggleToolPanel(trendReveal, true);
    trendReveal.innerHTML = `
      <div class="icon">▸</div>
      <div class="key-fact-copy">
        <p class="key-fact-title">Reveal reasoning</p>
        <ul class="key-fact-list">
          <li>${q.revealAnswer}</li>
          <li>${q.revealWhy}</li>
        </ul>
      </div>
    `;
    trendValues.className = 'tool-values visible';
    trendValues.innerHTML = q.valueText;
  });

  trendNextBtn.addEventListener('click', function () {
    trendIndex = pickNextIndex(TREND_QUESTIONS, trendIndex);
    renderTrendQuestion();
  });

  renderTrendQuestion();

  // ── ION SIZE CHOOSER ─────────────────────────────────────────
  const ION_QUESTIONS = [
    {
      prompt: 'Which species is larger?',
      pair: ['Na', 'Na+'],
      options: ['Na', 'Na+'],
      answer: 'Na',
      correct: 'Right — Na is larger. Losing an electron to form a cation makes the species smaller.',
      incorrect: 'Not quite — Na+ is a cation. Cations form by losing electrons, so they are usually smaller than the neutral atom. Compare the pair again with that rule.',
      support: 'Na loses its 3s electron to form Na+, so the ion is pulled into a smaller space.',
      revealAnswer: 'Answer: Na',
      revealWhy: 'Why: forming Na+ removes the outermost occupied energy level, so the ion becomes much smaller than the atom.'
    },
    {
      prompt: 'Which species is larger?',
      pair: ['Cl', 'Cl-'],
      options: ['Cl', 'Cl-'],
      answer: 'Cl-',
      correct: 'Right — Cl- is larger. Gaining an electron to form an anion makes the species larger.',
      incorrect: 'Not quite — Cl- is an anion. Anions form by gaining electrons, so electron-electron repulsion increases and the ion becomes larger. Compare the pair again with that rule.',
      support: 'Cl gains one electron to form Cl-, so the extra repulsion spreads the outer electrons farther out.',
      revealAnswer: 'Answer: Cl-',
      revealWhy: 'Why: adding an electron increases repulsion in the valence shell, so chloride is larger than neutral chlorine.'
    },
    {
      prompt: 'Which species is larger?',
      pair: ['Mg', 'Mg2+'],
      options: ['Mg', 'Mg2+'],
      answer: 'Mg',
      correct: 'Right — Mg is larger. Losing electrons to form Mg2+ makes the ion smaller.',
      incorrect: 'Not quite — Mg2+ is a cation. Cations are usually smaller than their neutral atoms because they have fewer electrons and the remaining electrons feel a stronger pull.',
      support: 'Mg loses its two 3s electrons to form Mg2+, leaving the ion with a smaller outer occupied level.',
      revealAnswer: 'Answer: Mg',
      revealWhy: 'Why: Mg2+ has lost two electrons, so the remaining electrons are held more tightly and the ion shrinks.'
    },
    {
      prompt: 'Which species is larger?',
      pair: ['O', 'O2-'],
      options: ['O', 'O2-'],
      answer: 'O2-',
      correct: 'Right — O2- is larger. Gaining electrons to form an anion makes the species larger.',
      incorrect: 'Not quite — O2- is an anion. Anions gain electrons, so extra repulsion makes them larger than the neutral atom.',
      support: 'O gains two electrons to form oxide, so the added electron-electron repulsion expands the outer electron cloud.',
      revealAnswer: 'Answer: O2-',
      revealWhy: 'Why: oxygen gains electrons to form O2-, so the extra electrons increase repulsion and make the ion larger.'
    },
    {
      prompt: 'Which species is larger?',
      pair: ['K', 'K+'],
      options: ['K', 'K+'],
      answer: 'K',
      correct: 'Right — K is larger because losing an electron to form K+ makes the ion smaller.',
      incorrect: 'Not quite — K+ is a cation, and cations are usually smaller than their atoms.',
      support: 'K loses its outermost electron to form K+.',
      revealAnswer: 'Answer: K',
      revealWhy: 'Why: losing the outermost electron shrinks the electron cloud.'
    },
    {
      prompt: 'Which species is larger?',
      pair: ['F', 'F-'],
      options: ['F', 'F-'],
      answer: 'F-',
      correct: 'Right — F- is larger because gaining an electron to form an anion makes it larger.',
      incorrect: 'Not quite — F- is an anion, so extra electron-electron repulsion makes it larger.',
      support: 'F gains one electron to form fluoride.',
      revealAnswer: 'Answer: F-',
      revealWhy: 'Why: added electron repulsion expands the ion.'
    },
    {
      prompt: 'Which species is larger?',
      pair: ['Ca', 'Ca2+'],
      options: ['Ca', 'Ca2+'],
      answer: 'Ca',
      correct: 'Right — Ca is larger because Ca2+ is a cation and cations are smaller.',
      incorrect: 'Not quite — calcium loses electrons to form Ca2+, which makes the ion smaller.',
      support: 'Ca loses two outer electrons to form Ca2+.',
      revealAnswer: 'Answer: Ca',
      revealWhy: 'Why: losing electrons shrinks the species.'
    },
    {
      prompt: 'Which species is larger?',
      pair: ['S', 'S2-'],
      options: ['S', 'S2-'],
      answer: 'S2-',
      correct: 'Right — S2- is larger because anions are larger than their neutral atoms.',
      incorrect: 'Not quite — sulfur gains electrons to form sulfide, so the ion becomes larger.',
      support: 'S gains two electrons to form S2-.',
      revealAnswer: 'Answer: S2-',
      revealWhy: 'Why: extra electron repulsion expands sulfide.'
    },
    {
      prompt: 'Which species is larger?',
      pair: ['Al', 'Al3+'],
      options: ['Al', 'Al3+'],
      answer: 'Al',
      correct: 'Right — Al is larger because Al3+ is a cation and cations are smaller.',
      incorrect: 'Not quite — aluminum loses electrons to form Al3+, so the ion is smaller.',
      support: 'Al loses three electrons to form Al3+.',
      revealAnswer: 'Answer: Al',
      revealWhy: 'Why: losing electrons reduces repulsion and shrinks the ion.'
    },
    {
      prompt: 'Which species is larger?',
      pair: ['Br', 'Br-'],
      options: ['Br', 'Br-'],
      answer: 'Br-',
      correct: 'Right — Br- is larger because bromide is an anion.',
      incorrect: 'Not quite — bromine gains an electron to form bromide, and anions are larger.',
      support: 'Br gains one electron to form Br-.',
      revealAnswer: 'Answer: Br-',
      revealWhy: 'Why: extra electron repulsion makes bromide larger.'
    },
    {
      prompt: 'Which species is larger?',
      pair: ['Li', 'Li+'],
      options: ['Li', 'Li+'],
      answer: 'Li',
      correct: 'Right — Li is larger because Li+ is a cation and cations are smaller.',
      incorrect: 'Not quite — lithium loses its outer electron to form Li+, which shrinks the ion.',
      support: 'Li loses one electron to form Li+.',
      revealAnswer: 'Answer: Li',
      revealWhy: 'Why: losing the outermost electron makes the ion smaller.'
    },
    {
      prompt: 'Which species is larger?',
      pair: ['N', 'N3-'],
      options: ['N', 'N3-'],
      answer: 'N3-',
      correct: 'Right — N3- is larger because nitride is an anion.',
      incorrect: 'Not quite — nitrogen gains electrons to form nitride, and anions are larger than the neutral atom.',
      support: 'N gains three electrons to form N3-.',
      revealAnswer: 'Answer: N3-',
      revealWhy: 'Why: the added electrons increase repulsion and expand the ion.'
    }
  ];

  const ionPrompt = document.getElementById('ionPrompt');
  const ionPairBadge = document.getElementById('ionPairBadge');
  const ionAnswers = document.getElementById('ionAnswers');
  const ionCheckBtn = document.getElementById('ionCheckBtn');
  const ionRevealBtn = document.getElementById('ionRevealBtn');
  const ionNextBtn = document.getElementById('ionNextBtn');
  const ionFeedback = document.getElementById('ionFeedback');
  const ionSupport = document.getElementById('ionSupport');
  const ionReveal = document.getElementById('ionReveal');

  let ionIndex = 0;
  let ionSelection = null;
  let ionChecked = false;

  function renderIonQuestion() {
    const q = ION_QUESTIONS[ionIndex];
    ionSelection = null;
    ionChecked = false;
    ionPrompt.textContent = q.prompt;
    ionPairBadge.innerHTML = formatIonPair(q.pair[0], q.pair[1]);
    ionAnswers.innerHTML = '';
    shuffleArray(q.options).forEach(option => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'segment-btn tool-choice-btn explore-choice';
      btn.setAttribute('aria-pressed', 'false');
      btn.innerHTML = formatIonSpecies(option);
      btn.addEventListener('click', function () {
        ionSelection = option;
        ionCheckBtn.disabled = false;
        document.querySelectorAll('#ionAnswers .explore-choice').forEach(node => {
          node.classList.remove('active');
          node.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      });
      ionAnswers.appendChild(btn);
    });
    ionCheckBtn.disabled = true;
    ionRevealBtn.disabled = true;
    ionNextBtn.disabled = true;
    setToolFeedback(ionFeedback, 'Choose one species, then click Check.', 'pending');
    ionSupport.innerHTML = '';
    ionReveal.innerHTML = '';
    toggleToolPanel(ionSupport, false);
    toggleToolPanel(ionReveal, false);
  }

  ionCheckBtn.addEventListener('click', function () {
    const q = ION_QUESTIONS[ionIndex];
    if (!ionSelection) {
      setToolFeedback(ionFeedback, 'Choose one species, then click Check.', 'pending');
      return;
    }
    ionChecked = true;
    ionRevealBtn.disabled = false;
    ionNextBtn.disabled = false;
    toggleToolPanel(ionSupport, true);
    ionSupport.innerHTML = `
      <div class="icon">◉</div>
      <div class="key-fact-copy">
        <p class="key-fact-title">Rule to use</p>
        <ul class="key-fact-list">
          <li>${q.support}</li>
        </ul>
      </div>
    `;
    if (ionSelection === q.answer) {
      setToolFeedback(ionFeedback, q.correct, 'correct');
    } else {
      setToolFeedback(ionFeedback, q.incorrect, 'incorrect');
    }
  });

  ionRevealBtn.addEventListener('click', function () {
    if (!ionChecked) return;
    const q = ION_QUESTIONS[ionIndex];
    toggleToolPanel(ionReveal, true);
    ionReveal.innerHTML = `
      <div class="icon">▸</div>
      <div class="key-fact-copy">
        <p class="key-fact-title">Reveal reasoning</p>
        <ul class="key-fact-list">
          <li>${q.revealAnswer}</li>
          <li>${q.revealWhy}</li>
        </ul>
      </div>
    `;
  });

  ionNextBtn.addEventListener('click', function () {
    ionIndex = pickNextIndex(ION_QUESTIONS, ionIndex);
    renderIonQuestion();
  });

  renderIonQuestion();

  // ── STATIC PT DIAGRAMS (5.1 groups/periods · 5.2 families) ──────────
  (function () {
    const BLOCK = { am:'s-blk', ae:'s-blk', tm:'d-blk', ptm:'p-blk', ml:'p-blk', nm:'p-blk', ha:'p-blk', ng:'p-blk', la:'f-blk', ac:'f-blk' };
    const FAM   = { am:'fam-alkali', ae:'fam-alkaline', tm:'fam-trans', ptm:'fam-ptrans', ml:'fam-metalloid', nm:'fam-nonmetal', ha:'fam-halogen', ng:'fam-noble', la:'fam-lant', ac:'fam-act' };

    function makeCell(cls, text, extraStyle) {
      const d = document.createElement('div');
      d.className = cls;
      if (text) d.textContent = text;
      if (extraStyle) d.style.cssText = extraStyle;
      return d;
    }

    function buildPTDiagram(containerId, mode) {
      const container = document.getElementById(containerId);
      if (!container) return;
      const isOrg = mode === 'org';
      // Period label column width: wider in org mode to fit "Period X" text
      const lblW = isOrg ? 58 : 20;

      const wrap = document.createElement('div');
      wrap.className = 'pt-diag-wrap';

      // Group number header row — corner width matches period label width
      const hdr = document.createElement('div');
      hdr.className = 'pt-diag-hdr';
      const corner = makeCell('pt-diag-hdr-lbl', '');
      corner.style.width = lblW + 'px';
      hdr.appendChild(corner);
      const grpsWrap = document.createElement('div');
      grpsWrap.className = 'pt-diag-hdr-grps';
      for (let g = 1; g <= 18; g++) grpsWrap.appendChild(makeCell('pt-diag-grp-num', g));
      hdr.appendChild(grpsWrap);
      wrap.appendChild(hdr);

      // Main 7-period rows (extra top gap in org mode = "move down")
      const main = document.createElement('div');
      main.className = 'pt-diag-main';
      if (isOrg) main.style.marginTop = '0.55rem';
      for (let p = 1; p <= 7; p++) {
        const row = document.createElement('div');
        row.className = 'pt-diag-row';
        const pl = makeCell('pt-diag-period-lbl', isOrg ? 'Period ' + p : p);
        pl.style.width = lblW + 'px';
        if (isOrg) pl.style.fontSize = '0.56rem';
        row.appendChild(pl);
        for (let g = 1; g <= 18; g++) {
          const el = byPos[`${p}-${g}`];
          if (!el) {
            if (g === 3 && (p === 6 || p === 7)) {
              row.appendChild(makeCell('pt-dc f-blk fblk-ph', p === 6 ? '*' : '**'));
            } else {
              row.appendChild(makeCell('pt-dc empty', ''));
            }
          } else {
            const blk = FAM[el[5]] || 'fam-nonmetal';
            row.appendChild(makeCell(`pt-dc ${blk}`, el[0]));
          }
        }
        main.appendChild(row);
      }
      wrap.appendChild(main);

      // f-block rows — offset = lblW + 3×col(30) + 2×gap(2) - f-lbl(20)
      const fOffsetPx = lblW + 74;
      const fSec = document.createElement('div');
      fSec.className = 'pt-diag-f-section';
      const fOffsetEl = makeCell('pt-diag-f-offset', '');
      fOffsetEl.style.width = fOffsetPx + 'px';
      fSec.appendChild(fOffsetEl);
      const fMain = document.createElement('div');
      fMain.className = 'pt-diag-f-main';
      [['Ln', 8], ['An', 9]].forEach(([lbl, pr]) => {
        const frow = document.createElement('div');
        frow.className = 'pt-diag-f-row';
        frow.appendChild(makeCell('pt-diag-f-lbl', lbl));
        const fcells = document.createElement('div');
        fcells.className = 'pt-diag-f-cells';
        for (let c = 4; c <= 18; c++) {
          const el = byPos[`${pr}-${c}`];
          if (!el) { fcells.appendChild(makeCell('pt-dc empty', '')); }
          else {
            const blk = FAM[el[5]] || 'fam-lant';
            fcells.appendChild(makeCell(`pt-dc ${blk}`, el[0]));
          }
        }
        frow.appendChild(fcells);
        fMain.appendChild(frow);
      });
      fSec.appendChild(fMain);
      wrap.appendChild(fSec);

      // Family legend (5.2 only) — built here, placed to the right of the table below
      let famLegend = null;
      if (!isOrg) {
        famLegend = document.createElement('div');
        famLegend.className = 'fam-legend-side';
        [
          ['#fee2e2','#fca5a5','Alkali Metals (Group 1)'],
          ['#ffedd5','#fdba74','Alkaline Earth Metals (Group 2)'],
          ['#fef3c7','#fcd34d','Transition Metals (Groups 3–12)'],
          ['#ede9fe','#c4b5fd','Post-transition Metals'],
          ['#d1fae5','#6ee7b7','Metalloids'],
          ['#dbeafe','#93c5fd','Nonmetals'],
          ['#e0e7ff','#a5b4fc','Halogens (Group 17)'],
          ['#fae8ff','#e879f9','Noble Gases (Group 18)'],
          ['#fce7f3','#f9a8d4','Lanthanides'],
          ['#fff1f2','#fda4af','Actinides'],
        ].forEach(([bg, border, name]) => {
          const item = document.createElement('div');
          item.className = 'fam-legend-item';
          const dot = document.createElement('span');
          dot.className = 'fam-dot';
          dot.style.background = bg;
          dot.style.border = `1px solid ${border}`;
          item.appendChild(dot);
          item.appendChild(document.createTextNode(name));
          famLegend.appendChild(item);
        });
      }

      // Org mode: group label above columns, period axis label on left
      if (isOrg) {
        // Insert group label row above the group-number header
        const grpLblRow = document.createElement('div');
        grpLblRow.style.cssText = 'display:flex;gap:2px;margin-bottom:4px;';
        const grpSpacer = document.createElement('div');
        grpSpacer.style.cssText = `width:${lblW}px;flex-shrink:0;`;
        grpLblRow.appendChild(grpSpacer);
        const grpLblText = document.createElement('div');
        grpLblText.style.cssText = 'flex:1;text-align:center;font-size:0.7rem;color:var(--dim);';
        grpLblText.innerHTML = '<span class="pt-diag-arrow-badge arrow-group">↕ Group (column)</span> &nbsp;18 groups · same valence electron count down each column';
        grpLblRow.appendChild(grpLblText);
        wrap.insertBefore(grpLblRow, hdr);

        const axisLbl = document.createElement('div');
        axisLbl.className = 'pt-diag-y-axis';
        axisLbl.innerHTML =
          '<span class="axis-badge">← Period (row) →</span>' +
          '<span>7 periods</span>' +
          '<span>All elements in a row share the same outermost energy level</span>';

        const outerFlex = document.createElement('div');
        outerFlex.className = 'pt-diag-outer-flex';
        outerFlex.appendChild(axisLbl);
        outerFlex.appendChild(wrap);
        container.appendChild(outerFlex);
      } else {
        const famOuter = document.createElement('div');
        famOuter.className = 'pt-diag-fam-outer';
        famOuter.appendChild(wrap);
        if (famLegend) famOuter.appendChild(famLegend);
        container.appendChild(famOuter);
      }
    }

    buildPTDiagram('diag-org', 'org');
    buildPTDiagram('diag-families', 'fam');
  })();

}); // end DOMContentLoaded
