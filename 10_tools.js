// ===================== ELECTRONEGATIVITY DATA (Pauling scale) =====================
const EN_DATA = [
  {sym:'H',  name:'Hydrogen',    en:2.20, grp:1},
  {sym:'Li', name:'Lithium',     en:0.98, grp:1},
  {sym:'Na', name:'Sodium',      en:0.93, grp:1},
  {sym:'K',  name:'Potassium',   en:0.82, grp:1},
  {sym:'Mg', name:'Magnesium',   en:1.31, grp:2},
  {sym:'Ca', name:'Calcium',     en:1.00, grp:2},
  {sym:'Al', name:'Aluminum',    en:1.61, grp:13},
  {sym:'C',  name:'Carbon',      en:2.55, grp:14},
  {sym:'Si', name:'Silicon',     en:1.90, grp:14},
  {sym:'N',  name:'Nitrogen',    en:3.04, grp:15},
  {sym:'P',  name:'Phosphorus',  en:2.19, grp:15},
  {sym:'As', name:'Arsenic',     en:2.18, grp:15},
  {sym:'O',  name:'Oxygen',      en:3.44, grp:16},
  {sym:'S',  name:'Sulfur',      en:2.58, grp:16},
  {sym:'Se', name:'Selenium',    en:2.55, grp:16},
  {sym:'F',  name:'Fluorine',    en:3.98, grp:17},
  {sym:'Cl', name:'Chlorine',    en:3.16, grp:17},
  {sym:'Br', name:'Bromine',     en:2.96, grp:17},
  {sym:'I',  name:'Iodine',      en:2.66, grp:17},
  {sym:'B',  name:'Boron',       en:2.04, grp:13},
  {sym:'Ge', name:'Germanium',   en:2.01, grp:14},
  {sym:'Fe', name:'Iron',        en:1.83, grp:8},
  {sym:'Cu', name:'Copper',      en:1.90, grp:11},
  {sym:'Zn', name:'Zinc',        en:1.65, grp:12},
  {sym:'Cs', name:'Cesium',      en:0.79, grp:1},
  {sym:'Ba', name:'Barium',      en:0.89, grp:2},
  {sym:'Xe', name:'Xenon',       en:2.60, grp:18},
];

const EN_TYPES = {
  Al: 'metal',
  As: 'metalloid',
  B: 'metalloid',
  Ba: 'metal',
  Br: 'nonmetal',
  C: 'nonmetal',
  Ca: 'metal',
  Cl: 'nonmetal',
  Cs: 'metal',
  Cu: 'metal',
  F: 'nonmetal',
  Fe: 'metal',
  Ge: 'metalloid',
  H: 'nonmetal',
  I: 'nonmetal',
  K: 'metal',
  Li: 'metal',
  Mg: 'metal',
  N: 'nonmetal',
  Na: 'metal',
  O: 'nonmetal',
  P: 'nonmetal',
  S: 'nonmetal',
  Se: 'nonmetal',
  Si: 'metalloid',
  Xe: 'nonmetal',
  Zn: 'metal'
};

const EN_LOOKUP = Object.fromEntries(EN_DATA.map(item => [item.sym, item]));

const BOND_TOOL_DATA = [
  {
    pair: 'Na + Cl',
    answer: 'Ionic',
    correctFeedback: 'Right — Na is a metal and Cl is a nonmetal, so the beginner bonding picture is ionic.',
    incorrectFeedback: 'Not quite — start with element types, not just shared electrons. A metal with a nonmetal is classified as ionic first. Check which atom would lose electrons and which would gain them.',
    reveal: `
      <div class="bond-tool-grid">
        <div class="bond-tool-panel">
          <h4>1. Element types</h4>
          <p>Na is a metal and Cl is a nonmetal.</p>
        </div>
        <div class="bond-tool-panel">
          <h4>2. Electron behavior</h4>
          <p>Na tends to lose an electron, and Cl tends to gain one.</p>
        </div>
        <div class="bond-tool-panel">
          <h4>3. ΔEN support</h4>
          <p>ΔEN is large, which supports very uneven attraction and ionic character.</p>
        </div>
        <div class="bond-tool-panel">
          <h4>Particle picture</h4>
          <p>Picture ions in a crystal lattice, not separate molecules.</p>
        </div>
      </div>`
  },
  {
    pair: 'H + Cl',
    answer: 'Polar Covalent',
    correctFeedback: 'Right — H and Cl are both nonmetals, so the bond is covalent, and Cl pulls the shared electrons closer.',
    incorrectFeedback: 'Not quite — both atoms here are nonmetals, so start with a covalent picture. Then decide whether the electrons are shared equally or unequally.',
    reveal: `
      <div class="bond-tool-grid">
        <div class="bond-tool-panel">
          <h4>1. Element types</h4>
          <p>H and Cl are both nonmetals, so this is a covalent bond.</p>
        </div>
        <div class="bond-tool-panel">
          <h4>2. Electron behavior</h4>
          <p>Cl attracts the shared electrons more strongly, so the bond has a dipole.</p>
        </div>
        <div class="bond-tool-panel">
          <h4>3. ΔEN support</h4>
          <p>The ΔEN value falls in the polar-covalent range.</p>
        </div>
        <div class="bond-tool-panel">
          <h4>Particle picture</h4>
          <p>Picture a molecule with a polar bond, not full ions in a lattice.</p>
        </div>
      </div>`
  },
  {
    pair: 'Cl + Cl',
    answer: 'Nonpolar Covalent',
    correctFeedback: 'Right — the two atoms are the same, so the shared electrons stay centered and the bond is nonpolar covalent.',
    incorrectFeedback: 'Not quite — both atoms are the same nonmetal, so neither side pulls harder. Think about equal sharing.',
    reveal: `
      <div class="bond-tool-grid">
        <div class="bond-tool-panel">
          <h4>1. Element types</h4>
          <p>Both atoms are nonmetals, so this is a covalent bond.</p>
        </div>
        <div class="bond-tool-panel">
          <h4>2. Electron behavior</h4>
          <p>Because the atoms are identical, the shared electrons stay centered.</p>
        </div>
        <div class="bond-tool-panel">
          <h4>3. ΔEN support</h4>
          <p>ΔEN = 0, which matches nonpolar covalent bonding.</p>
        </div>
        <div class="bond-tool-panel">
          <h4>Particle picture</h4>
          <p>Picture a simple molecule with no bond dipole.</p>
        </div>
      </div>`
  },
  {
    pair: 'Cu + Zn',
    answer: 'Metallic',
    correctFeedback: 'Right — both elements are metals, so the best introductory bonding picture is metallic.',
    incorrectFeedback: 'Not quite — when both elements are metals, use the metallic bonding picture first. Do not force a covalent or ionic model here.',
    reveal: `
      <div class="bond-tool-grid">
        <div class="bond-tool-panel">
          <h4>1. Element types</h4>
          <p>Cu and Zn are both metals.</p>
        </div>
        <div class="bond-tool-panel">
          <h4>2. Electron behavior</h4>
          <p>The valence electrons are delocalized across many atoms.</p>
        </div>
        <div class="bond-tool-panel">
          <h4>3. ΔEN support</h4>
          <p>For two metals, electronegativity is not the main decision tool.</p>
        </div>
        <div class="bond-tool-panel">
          <h4>Particle picture</h4>
          <p>Picture positive metal centers in a mobile sea of electrons.</p>
        </div>
      </div>`
  },
  {
    pair: 'Mg + O',
    answer: 'Ionic',
    correctFeedback: 'Right — Mg is a metal and O is a nonmetal, so the beginner bonding picture is ionic.',
    incorrectFeedback: 'Not quite — start with element types. A metal paired with a nonmetal is classified as ionic first.',
    reveal: `
      <div class="bond-tool-grid">
        <div class="bond-tool-panel"><h4>1. Element types</h4><p>Mg is a metal and O is a nonmetal.</p></div>
        <div class="bond-tool-panel"><h4>2. Electron behavior</h4><p>Mg tends to lose electrons and O tends to gain them.</p></div>
        <div class="bond-tool-panel"><h4>3. ΔEN support</h4><p>The electronegativity difference is large enough to support ionic character.</p></div>
        <div class="bond-tool-panel"><h4>Particle picture</h4><p>Picture ions held together in a lattice.</p></div>
      </div>`
  },
  {
    pair: 'C + O',
    answer: 'Polar Covalent',
    correctFeedback: 'Right — both are nonmetals, but oxygen pulls the shared electrons more strongly, so the bond is polar covalent.',
    incorrectFeedback: 'Not quite — this is not a metal/nonmetal pair, so start from a covalent model and then decide whether the sharing is equal or unequal.',
    reveal: `
      <div class="bond-tool-grid">
        <div class="bond-tool-panel"><h4>1. Element types</h4><p>C and O are both nonmetals.</p></div>
        <div class="bond-tool-panel"><h4>2. Electron behavior</h4><p>O attracts the shared electrons more strongly than C.</p></div>
        <div class="bond-tool-panel"><h4>3. ΔEN support</h4><p>The ΔEN falls in the polar-covalent range.</p></div>
        <div class="bond-tool-panel"><h4>Particle picture</h4><p>Picture a molecule with unequal sharing, not full ions.</p></div>
      </div>`
  },
  {
    pair: 'N + N',
    answer: 'Nonpolar Covalent',
    correctFeedback: 'Right — identical nonmetal atoms share electrons equally, so the bond is nonpolar covalent.',
    incorrectFeedback: 'Not quite — when the atoms are identical, neither side pulls harder. Think equal sharing.',
    reveal: `
      <div class="bond-tool-grid">
        <div class="bond-tool-panel"><h4>1. Element types</h4><p>Both atoms are nonmetals.</p></div>
        <div class="bond-tool-panel"><h4>2. Electron behavior</h4><p>The shared electrons stay centered because the atoms are identical.</p></div>
        <div class="bond-tool-panel"><h4>3. ΔEN support</h4><p>ΔEN = 0, which matches nonpolar covalent bonding.</p></div>
        <div class="bond-tool-panel"><h4>Particle picture</h4><p>Picture a molecule with no bond dipole.</p></div>
      </div>`
  },
  {
    pair: 'Al + Cu',
    answer: 'Metallic',
    correctFeedback: 'Right — both atoms are metals, so the best introductory bonding picture is metallic.',
    incorrectFeedback: 'Not quite — when both elements are metals, use the metallic bonding picture first.',
    reveal: `
      <div class="bond-tool-grid">
        <div class="bond-tool-panel"><h4>1. Element types</h4><p>Al and Cu are both metals.</p></div>
        <div class="bond-tool-panel"><h4>2. Electron behavior</h4><p>Valence electrons are delocalized over many metal atoms.</p></div>
        <div class="bond-tool-panel"><h4>3. ΔEN support</h4><p>Electronegativity difference is not the main decision tool for two metals.</p></div>
        <div class="bond-tool-panel"><h4>Particle picture</h4><p>Picture positive metal centers in a mobile electron sea.</p></div>
      </div>`
  },
  {
    pair: 'Ca + F',
    answer: 'Ionic',
    correctFeedback: 'Right — calcium is a metal and fluorine is a nonmetal, so the bond picture is ionic.',
    incorrectFeedback: 'Not quite — begin with the element types. Metal plus nonmetal points to ionic bonding.',
    reveal: `
      <div class="bond-tool-grid">
        <div class="bond-tool-panel"><h4>1. Element types</h4><p>Ca is a metal and F is a nonmetal.</p></div>
        <div class="bond-tool-panel"><h4>2. Electron behavior</h4><p>Calcium loses electrons and fluorine gains them.</p></div>
        <div class="bond-tool-panel"><h4>3. ΔEN support</h4><p>The electronegativity gap is very large.</p></div>
        <div class="bond-tool-panel"><h4>Particle picture</h4><p>Picture ions, not a shared-electron molecule.</p></div>
      </div>`
  },
  {
    pair: 'S + H',
    answer: 'Polar Covalent',
    correctFeedback: 'Right — sulfur and hydrogen are both nonmetals, but sulfur pulls the shared electrons a bit more strongly.',
    incorrectFeedback: 'Not quite — this pair stays covalent because both atoms are nonmetals. Then decide whether the sharing is equal or unequal.',
    reveal: `
      <div class="bond-tool-grid">
        <div class="bond-tool-panel"><h4>1. Element types</h4><p>S and H are both nonmetals.</p></div>
        <div class="bond-tool-panel"><h4>2. Electron behavior</h4><p>S pulls the shared electrons somewhat more strongly than H.</p></div>
        <div class="bond-tool-panel"><h4>3. ΔEN support</h4><p>The difference supports a polar covalent bond.</p></div>
        <div class="bond-tool-panel"><h4>Particle picture</h4><p>Picture a polar molecule rather than separate ions.</p></div>
      </div>`
  },
  {
    pair: 'O + O',
    answer: 'Nonpolar Covalent',
    correctFeedback: 'Right — the two oxygen atoms are identical, so the shared electrons stay centered.',
    incorrectFeedback: 'Not quite — identical nonmetal atoms make a nonpolar covalent bond because the sharing is equal.',
    reveal: `
      <div class="bond-tool-grid">
        <div class="bond-tool-panel"><h4>1. Element types</h4><p>Both atoms are oxygen, a nonmetal.</p></div>
        <div class="bond-tool-panel"><h4>2. Electron behavior</h4><p>Neither atom pulls harder because they are identical.</p></div>
        <div class="bond-tool-panel"><h4>3. ΔEN support</h4><p>ΔEN = 0 for O–O.</p></div>
        <div class="bond-tool-panel"><h4>Particle picture</h4><p>Picture a molecule with equal sharing and no bond dipole.</p></div>
      </div>`
  },
  {
    pair: 'Fe + Fe',
    answer: 'Metallic',
    correctFeedback: 'Right — two iron atoms point to metallic bonding, not ionic or covalent.',
    incorrectFeedback: 'Not quite — iron is a metal, and metal-metal bonding is described with the metallic model.',
    reveal: `
      <div class="bond-tool-grid">
        <div class="bond-tool-panel"><h4>1. Element types</h4><p>Both atoms are metals.</p></div>
        <div class="bond-tool-panel"><h4>2. Electron behavior</h4><p>Electrons are delocalized rather than shared in one fixed pair.</p></div>
        <div class="bond-tool-panel"><h4>3. ΔEN support</h4><p>ΔEN is not the main classifier for a metal-metal pair.</p></div>
        <div class="bond-tool-panel"><h4>Particle picture</h4><p>Picture a metallic lattice with mobile electrons.</p></div>
      </div>`
  },
  {
    pair: 'K + Br',
    answer: 'Ionic',
    correctFeedback: 'Right — potassium is a metal and bromine is a nonmetal, so the introductory bonding picture is ionic.',
    incorrectFeedback: 'Not quite — use the element types first. Metal plus nonmetal points to ionic bonding.',
    reveal: `
      <div class="bond-tool-grid">
        <div class="bond-tool-panel"><h4>1. Element types</h4><p>K is a metal and Br is a nonmetal.</p></div>
        <div class="bond-tool-panel"><h4>2. Electron behavior</h4><p>Potassium tends to lose an electron and bromine tends to gain one.</p></div>
        <div class="bond-tool-panel"><h4>3. ΔEN support</h4><p>The large ΔEN supports ionic character.</p></div>
        <div class="bond-tool-panel"><h4>Particle picture</h4><p>Picture ions arranged in a crystal lattice.</p></div>
      </div>`
  }
];

let bondToolIndex = 0;
let bondToolChoice = '';
let bondToolChecked = false;
let bondChoiceSignature = '';
let vseprChoiceSignature = '';
let nasbuChoiceSignature = '';

function setToolFeedbackState(id, text, explicitState) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
  let state = explicitState || 'info';
  if (explicitState) {
    el.dataset.state = explicitState;
    return;
  }
  if (/^Right\b/.test(text)) state = 'correct';
  else if (/^Not quite\b/.test(text)) state = 'incorrect';
  else if (/first\.?$/.test(text)) state = 'pending';
  el.dataset.state = state;
}

function setVseprFeedbackState(state) {
  const box = document.getElementById('vseprOut');
  if (box) box.dataset.state = state;
}

function resetChoiceButtons(containerId) {
  document.querySelectorAll(`#${containerId} [data-choice]`).forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-pressed', 'false');
  });
}

function selectChoice(containerId, value, assignFn) {
  assignFn(value);
  document.querySelectorAll(`#${containerId} [data-choice]`).forEach(btn => {
    const active = btn.getAttribute('data-choice') === value;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

function shuffleArray(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function shuffleChoices(choices, previousSignature) {
  if (choices.length < 2) {
    return { choices: [...choices], signature: choices.join('|') };
  }
  let shuffled = [...choices];
  let signature = shuffled.join('|');
  let attempts = 0;
  while (signature === previousSignature && attempts < 6) {
    shuffled = shuffleArray(choices);
    signature = shuffled.join('|');
    attempts += 1;
  }
  return { choices: shuffled, signature };
}

function getNextRandomIndex(length, currentIndex) {
  if (length <= 1) return 0;
  let nextIndex = currentIndex;
  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * length);
  }
  return nextIndex;
}

function renderChemSpecies(species) {
  if (!species) return '';
  const trimmed = String(species).trim();
  const stateMatch = trimmed.match(/(\((?:aq|s|l|g)\))$/i);
  const state = stateMatch ? stateMatch[1] : '';
  let core = stateMatch ? trimmed.slice(0, -state.length).trim() : trimmed;
  const chargeMatch = core.match(/(?:\s+(\d+[+-])|([+-]))$/);
  const charge = chargeMatch ? (chargeMatch[1] || chargeMatch[2] || '') : '';
  core = chargeMatch ? core.slice(0, -chargeMatch[0].length).trim() : core;
  const renderedCore = core.replace(/([A-Za-z\)])(\d+)/g, '$1<span class="chem-sub">$2</span>');
  const renderedCharge = charge ? `<span class="chem-charge">${charge}</span>` : '';
  return `<span class="ion-group">${renderedCore}${renderedCharge}</span>${state}`;
}

function renderChemInlineText(text) {
  if (!text) return '';
  return String(text).replace(/([A-Z][A-Za-z0-9()]*?(?:\s+\d+[+-]|\s+[+-])?)(?=[,.;:!?)]|$|\s)/g, function (match) {
    if (!/[0-9]/.test(match) && !/[()]/.test(match) && match.length < 2) return match;
    if (/^(AX\dE?\d*|LP|EN|DNA|IMF|LDF|H|C|N|O|F|Cl|Br|I|P|S|B|Xe|Si|Mo|As|Be|Ne|He)$/.test(match)) return match;
    return renderChemSpecies(match);
  });
}

function renderChoiceButtons(containerId, choices, clickHandler, previousSignature) {
  const { choices: shuffledChoices, signature } = shuffleChoices(choices, previousSignature);
  const container = document.getElementById(containerId);
  container.innerHTML = shuffledChoices
    .map(choice => `<button type="button" class="segment-btn tool-choice-btn explore-choice" data-choice="${choice}" aria-pressed="false">${choice}</button>`)
    .join('');
  container.querySelectorAll('[data-choice]').forEach(btn => {
    btn.addEventListener('click', () => clickHandler(btn.getAttribute('data-choice')));
  });
  return signature;
}

function renderBondTool() {
  const card = BOND_TOOL_DATA[bondToolIndex];
  document.getElementById('bondPairPrompt').textContent = card.pair;
  bondToolChoice = '';
  bondToolChecked = false;
  bondChoiceSignature = renderChoiceButtons(
    'bondChoiceButtons',
    ['Ionic', 'Polar Covalent', 'Nonpolar Covalent', 'Metallic'],
    value => selectChoice('bondChoiceButtons', value, selected => { bondToolChoice = selected; }),
    bondChoiceSignature
  );
  setToolFeedbackState('bondFeedback', 'Choose one bonding picture, then click Check.', 'pending');
  document.getElementById('bondReveal').hidden = true;
  document.getElementById('bondReveal').innerHTML = '';
  document.getElementById('bondRevealBtn').disabled = true;
  document.getElementById('bondNextBtn').disabled = true;
}

function checkBondTool() {
  const card = BOND_TOOL_DATA[bondToolIndex];
  if (!bondToolChoice) {
    setToolFeedbackState('bondFeedback', 'Choose one bonding picture, then click Check.', 'pending');
    return;
  }
  bondToolChecked = true;
  setToolFeedbackState('bondFeedback', bondToolChoice === card.answer ? card.correctFeedback : card.incorrectFeedback);
  document.getElementById('bondRevealBtn').disabled = false;
  document.getElementById('bondNextBtn').disabled = false;
}

function revealBondTool() {
  const revealEl = document.getElementById('bondReveal');
  if (!bondToolChecked) {
    setToolFeedbackState('bondFeedback', 'Check your answer first.', 'pending');
    return;
  }
  revealEl.hidden = false;
  revealEl.innerHTML = `<strong class="tool-reveal-heading">Why this is the best bonding picture</strong>${BOND_TOOL_DATA[bondToolIndex].reveal}`;
}

function nextBondTool() {
  bondToolIndex = getNextRandomIndex(BOND_TOOL_DATA.length, bondToolIndex);
  renderBondTool();
}

// ===================== VSEPR LOOKUP TABLE =====================
const VSEPR_TABLE = {
  '2-0': {eg:'Linear',               mg:'Linear',                 angle:'180°',      polar:'No (if terminal atoms are the same)', ex:'CO2, BeCl2',  formula:'AX2'},
  '3-0': {eg:'Trigonal Planar',      mg:'Trigonal Planar',        angle:'120°',      polar:'No (if all same atoms)', ex:'BF3, SO3, NO3 -',   formula:'AX3'},
  '3-1': {eg:'Trigonal Planar',      mg:'Bent (trigonal planar)', angle:'~119°',     polar:'Yes',                     ex:'SO2, O3, NO2 -',    formula:'AX2E'},
  '4-0': {eg:'Tetrahedral',          mg:'Tetrahedral',            angle:'109.5°',    polar:'No (if all same)',       ex:'CH4, CCl4, SiH4',  formula:'AX4'},
  '4-1': {eg:'Tetrahedral',          mg:'Trigonal Pyramidal',     angle:'~107°',     polar:'Yes',                     ex:'NH3, PCl3, NF3',   formula:'AX3E'},
  '4-2': {eg:'Tetrahedral',          mg:'Bent (tetrahedral)',     angle:'~104.5°',   polar:'Yes',                     ex:'H2O, OF2, H2S',    formula:'AX2E2'},
  '5-0': {eg:'Trigonal Bipyramidal', mg:'Trigonal Bipyramidal',   angle:'90°/120°',  polar:'No (if all terminal atoms are the same)', ex:'PCl5, PF5, AsF5',  formula:'AX5'},
  '5-1': {eg:'Trigonal Bipyramidal', mg:'See-Saw',                angle:'~90°/120°', polar:'Yes',                     ex:'SF4, ClF4 +',       formula:'AX4E'},
  '5-2': {eg:'Trigonal Bipyramidal', mg:'T-Shaped',               angle:'~90°',      polar:'Yes',                     ex:'ClF3, BrF3',       formula:'AX3E2'},
  '5-3': {eg:'Trigonal Bipyramidal', mg:'Linear',                 angle:'180°',      polar:'No (if terminal atoms are the same)', ex:'XeF2, I3 -',        formula:'AX2E3'},
  '6-0': {eg:'Octahedral',           mg:'Octahedral',             angle:'90°',       polar:'No (if all terminal atoms are the same)', ex:'SF6, Mo(CO)6',     formula:'AX6'},
  '6-1': {eg:'Octahedral',           mg:'Square Pyramidal',       angle:'~90°',      polar:'Yes',                     ex:'ClF5, BrF5, IF5',  formula:'AX5E'},
  '6-2': {eg:'Octahedral',           mg:'Square Planar',          angle:'90°',       polar:'No (if all terminal atoms are the same)', ex:'XeF4, ICl4 -',      formula:'AX4E2'},
};

const VSEPR_DIAGRAMS = {
  '2-0': `
    <svg width="110" height="75" viewBox="0 0 180 120" overflow="visible" role="img" aria-label="Linear VSEPR diagram">
      <line x1="45" y1="60" x2="135" y2="60" class="bond" />
      <circle cx="45" cy="60" r="14" class="atom-a" />
      <text x="45" y="60" class="text-a">A</text>
      <circle cx="135" cy="60" r="14" class="atom-a" />
      <text x="135" y="60" class="text-a">A</text>
      <circle cx="90" cy="60" r="16" class="atom-b" />
      <text x="90" y="60" class="text-b">B</text>
    </svg>`,
  '3-0': `
    <svg width="110" height="75" viewBox="0 0 180 120" overflow="visible" role="img" aria-label="Trigonal planar VSEPR diagram">
      <line x1="90" y1="65" x2="90" y2="20" class="bond" />
      <line x1="90" y1="65" x2="45" y2="100" class="bond" />
      <line x1="90" y1="65" x2="135" y2="100" class="bond" />
      <circle cx="90" cy="20" r="14" class="atom-a" />
      <text x="90" y="20" class="text-a">A</text>
      <circle cx="45" cy="100" r="14" class="atom-a" />
      <text x="45" y="100" class="text-a">A</text>
      <circle cx="135" cy="100" r="14" class="atom-a" />
      <text x="135" y="100" class="text-a">A</text>
      <circle cx="90" cy="65" r="16" class="atom-b" />
      <text x="90" y="65" class="text-b">B</text>
    </svg>`,
  '3-1': `
    <svg width="110" height="75" viewBox="0 0 180 120" overflow="visible" role="img" aria-label="Bent trigonal planar VSEPR diagram">
      <ellipse cx="90" cy="25" rx="16" ry="10" class="lp" />
      <text x="90" y="25" class="text-lp">LP</text>
      <line x1="90" y1="65" x2="50" y2="105" class="bond" />
      <line x1="90" y1="65" x2="130" y2="105" class="bond" />
      <circle cx="50" cy="105" r="14" class="atom-a" />
      <text x="50" y="105" class="text-a">A</text>
      <circle cx="130" cy="105" r="14" class="atom-a" />
      <text x="130" y="105" class="text-a">A</text>
      <circle cx="90" cy="65" r="16" class="atom-b" />
      <text x="90" y="65" class="text-b">B</text>
    </svg>`,
  '4-0': `
    <svg width="110" height="75" viewBox="0 0 180 120" overflow="visible" role="img" aria-label="Tetrahedral VSEPR diagram">
      <line x1="90" y1="65" x2="90" y2="15" class="bond" />
      <line x1="90" y1="65" x2="40" y2="80" class="bond" />
      <line x1="90" y1="65" x2="135" y2="55" class="bond-dash" />
      <polygon points="90,65 115,115 132,105" class="wedge" />
      <circle cx="90" cy="15" r="14" class="atom-a" />
      <text x="90" y="15" class="text-a">A</text>
      <circle cx="40" cy="80" r="14" class="atom-a" />
      <text x="40" y="80" class="text-a">A</text>
      <circle cx="135" cy="55" r="14" class="atom-a" />
      <text x="135" y="55" class="text-a">A</text>
      <circle cx="123" cy="110" r="14" class="atom-a" />
      <text x="123" y="110" class="text-a">A</text>
      <circle cx="90" cy="65" r="16" class="atom-b" />
      <text x="90" y="65" class="text-b">B</text>
    </svg>`,
  '4-1': `
    <svg width="110" height="75" viewBox="0 0 180 120" overflow="visible" role="img" aria-label="Trigonal pyramidal VSEPR diagram">
      <ellipse cx="90" cy="25" rx="16" ry="10" class="lp" />
      <text x="90" y="25" class="text-lp">LP</text>
      <line x1="90" y1="65" x2="40" y2="90" class="bond" />
      <line x1="90" y1="65" x2="140" y2="80" class="bond-dash" />
      <polygon points="90,65 80,115 100,115" class="wedge" />
      <circle cx="40" cy="90" r="14" class="atom-a" />
      <text x="40" y="90" class="text-a">A</text>
      <circle cx="140" cy="80" r="14" class="atom-a" />
      <text x="140" y="80" class="text-a">A</text>
      <circle cx="90" cy="115" r="14" class="atom-a" />
      <text x="90" y="115" class="text-a">A</text>
      <circle cx="90" cy="65" r="16" class="atom-b" />
      <text x="90" y="65" class="text-b">B</text>
    </svg>`,
  '4-2': `
    <svg width="110" height="75" viewBox="0 0 180 120" overflow="visible" role="img" aria-label="Bent tetrahedral VSEPR diagram">
      <g transform="translate(65, 35) rotate(-35)">
        <ellipse cx="0" cy="0" rx="15" ry="9" class="lp" />
        <text x="0" y="0" class="text-lp">LP</text>
      </g>
      <g transform="translate(115, 35) rotate(35)">
        <ellipse cx="0" cy="0" rx="15" ry="9" class="lp" />
        <text x="0" y="0" class="text-lp">LP</text>
      </g>
      <line x1="90" y1="65" x2="50" y2="105" class="bond" />
      <line x1="90" y1="65" x2="130" y2="105" class="bond" />
      <circle cx="50" cy="105" r="14" class="atom-a" />
      <text x="50" y="105" class="text-a">A</text>
      <circle cx="130" cy="105" r="14" class="atom-a" />
      <text x="130" y="105" class="text-a">A</text>
      <circle cx="90" cy="65" r="16" class="atom-b" />
      <text x="90" y="65" class="text-b">B</text>
    </svg>`,
  '5-0': `
    <svg width="110" height="83" viewBox="0 0 180 135" overflow="visible" role="img" aria-label="Trigonal bipyramidal VSEPR diagram">
      <line x1="90" y1="67" x2="90" y2="15" class="bond" />
      <line x1="90" y1="67" x2="90" y2="120" class="bond" />
      <line x1="90" y1="67" x2="40" y2="67" class="bond" />
      <line x1="90" y1="67" x2="135" y2="40" class="bond-dash" />
      <polygon points="90,67 125,105 138,92" class="wedge" />
      <circle cx="90" cy="15" r="14" class="atom-a" />
      <text x="90" y="15" class="text-a">A</text>
      <circle cx="90" cy="120" r="14" class="atom-a" />
      <text x="90" y="120" class="text-a">A</text>
      <circle cx="40" cy="67" r="14" class="atom-a" />
      <text x="40" y="67" class="text-a">A</text>
      <circle cx="135" cy="40" r="14" class="atom-a" />
      <text x="135" y="40" class="text-a">A</text>
      <circle cx="130" cy="98" r="14" class="atom-a" />
      <text x="130" y="98" class="text-a">A</text>
      <circle cx="90" cy="67" r="16" class="atom-b" />
      <text x="90" y="67" class="text-b">B</text>
    </svg>`,
  '5-1': `
    <svg width="100" height="80" viewBox="0 0 160 128" overflow="visible" role="img" aria-label="See-saw VSEPR diagram">
      <ellipse cx="34" cy="64" rx="14" ry="8" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="34" y="67" font-size="7" fill="#64748b" text-anchor="middle">LP</text>
      <line x1="80" y1="50" x2="80" y2="33" stroke="#374151" stroke-width="2"/>
      <line x1="80" y1="78" x2="80" y2="95" stroke="#374151" stroke-width="2"/>
      <line x1="88" y1="54" x2="112" y2="38" stroke="#374151" stroke-width="2"/>
      <line x1="88" y1="74" x2="112" y2="90" stroke="#374151" stroke-width="2"/>
      <circle cx="80" cy="64" r="15" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="80" y="69" font-size="12" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="middle">B</text>
      <circle cx="80" cy="22" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="80" y="26" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
      <circle cx="80" cy="106" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="80" y="110" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
      <circle cx="122" cy="28" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="122" y="32" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
      <circle cx="122" cy="100" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="122" y="104" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
    </svg>`,
  '5-2': `
    <svg width="100" height="80" viewBox="0 0 160 128" overflow="visible" role="img" aria-label="T-shaped VSEPR diagram">
      <ellipse cx="30" cy="46" rx="14" ry="8" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="30" y="49" font-size="7" fill="#64748b" text-anchor="middle">LP</text>
      <ellipse cx="30" cy="82" rx="14" ry="8" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="30" y="85" font-size="7" fill="#64748b" text-anchor="middle">LP</text>
      <line x1="80" y1="50" x2="80" y2="33" stroke="#374151" stroke-width="2"/>
      <line x1="80" y1="78" x2="80" y2="95" stroke="#374151" stroke-width="2"/>
      <line x1="66" y1="64" x2="42" y2="64" stroke="#374151" stroke-width="2"/>
      <circle cx="80" cy="64" r="15" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="80" y="69" font-size="12" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="middle">B</text>
      <circle cx="80" cy="22" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="80" y="26" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
      <circle cx="80" cy="106" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="80" y="110" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
      <circle cx="28" cy="64" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="28" y="68" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
    </svg>`,
  '5-3': `
    <svg width="100" height="80" viewBox="0 0 160 128" overflow="visible" role="img" aria-label="Linear from trigonal bipyramidal VSEPR diagram">
      <ellipse cx="34" cy="42" rx="14" ry="8" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="34" y="45" font-size="7" fill="#64748b" text-anchor="middle">LP</text>
      <ellipse cx="34" cy="64" rx="14" ry="8" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="34" y="67" font-size="7" fill="#64748b" text-anchor="middle">LP</text>
      <ellipse cx="34" cy="86" rx="14" ry="8" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="34" y="89" font-size="7" fill="#64748b" text-anchor="middle">LP</text>
      <line x1="80" y1="50" x2="80" y2="33" stroke="#374151" stroke-width="2"/>
      <line x1="80" y1="78" x2="80" y2="95" stroke="#374151" stroke-width="2"/>
      <circle cx="80" cy="64" r="15" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="80" y="69" font-size="12" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="middle">B</text>
      <circle cx="80" cy="22" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="80" y="26" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
      <circle cx="80" cy="106" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="80" y="110" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
    </svg>`,
  '6-0': `
    <svg width="110" height="83" viewBox="0 0 180 135" overflow="visible" role="img" aria-label="Octahedral VSEPR diagram">
      <line x1="90" y1="67" x2="90" y2="15" class="bond" />
      <line x1="90" y1="67" x2="90" y2="120" class="bond" />
      <line x1="90" y1="67" x2="45" y2="40" class="bond-dash" />
      <line x1="90" y1="67" x2="135" y2="40" class="bond-dash" />
      <polygon points="90,67 42,92 55,105" class="wedge" />
      <polygon points="90,67 138,92 125,105" class="wedge" />
      <circle cx="90" cy="15" r="14" class="atom-a" />
      <text x="90" y="15" class="text-a">A</text>
      <circle cx="90" cy="120" r="14" class="atom-a" />
      <text x="90" y="120" class="text-a">A</text>
      <circle cx="45" cy="40" r="14" class="atom-a" />
      <text x="45" y="40" class="text-a">A</text>
      <circle cx="135" cy="40" r="14" class="atom-a" />
      <text x="135" y="40" class="text-a">A</text>
      <circle cx="48" cy="98" r="14" class="atom-a" />
      <text x="48" y="98" class="text-a">A</text>
      <circle cx="132" cy="98" r="14" class="atom-a" />
      <text x="132" y="98" class="text-a">A</text>
      <circle cx="90" cy="67" r="16" class="atom-b" />
      <text x="90" y="67" class="text-b">B</text>
    </svg>`,
  '6-1': `
    <svg width="100" height="80" viewBox="0 0 160 128" overflow="visible" role="img" aria-label="Square pyramidal VSEPR diagram">
      <ellipse cx="80" cy="114" rx="15" ry="9" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="80" y="117" font-size="7" fill="#64748b" text-anchor="middle">LP</text>
      <line x1="80" y1="50" x2="80" y2="33" stroke="#374151" stroke-width="2"/>
      <line x1="66" y1="64" x2="40" y2="64" stroke="#374151" stroke-width="2"/>
      <line x1="94" y1="64" x2="120" y2="64" stroke="#374151" stroke-width="2"/>
      <line x1="70" y1="52" x2="48" y2="36" stroke="#374151" stroke-width="2"/>
      <line x1="90" y1="76" x2="112" y2="92" stroke="#374151" stroke-width="2"/>
      <circle cx="80" cy="64" r="15" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="80" y="69" font-size="12" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="middle">B</text>
      <circle cx="80" cy="22" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="80" y="26" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
      <circle cx="28" cy="64" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="28" y="68" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
      <circle cx="132" cy="64" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="132" y="68" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
      <circle cx="36" cy="26" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="36" y="30" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
      <circle cx="124" cy="102" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="124" y="106" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
    </svg>`,
  '6-2': `
    <svg width="100" height="80" viewBox="0 0 160 128" overflow="visible" role="img" aria-label="Square planar VSEPR diagram">
      <ellipse cx="80" cy="22" rx="15" ry="9" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="80" y="25" font-size="7" fill="#64748b" text-anchor="middle">LP</text>
      <ellipse cx="80" cy="106" rx="15" ry="9" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="80" y="109" font-size="7" fill="#64748b" text-anchor="middle">LP</text>
      <line x1="66" y1="64" x2="40" y2="64" stroke="#374151" stroke-width="2"/>
      <line x1="94" y1="64" x2="120" y2="64" stroke="#374151" stroke-width="2"/>
      <line x1="70" y1="52" x2="48" y2="36" stroke="#374151" stroke-width="2"/>
      <line x1="90" y1="76" x2="112" y2="92" stroke="#374151" stroke-width="2"/>
      <circle cx="80" cy="64" r="15" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="80" y="69" font-size="12" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="middle">B</text>
      <circle cx="28" cy="64" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="28" y="68" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
      <circle cx="132" cy="64" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="132" y="68" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
      <circle cx="36" cy="26" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="36" y="30" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
      <circle cx="124" cy="102" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="124" y="106" font-size="11" font-family="system-ui, -apple-system, sans-serif" font-weight="bold" fill="#991b1b" text-anchor="middle">A</text>
    </svg>`,
};

const VSEPR_TOOL_DATA = [
  { key:'4-1', correct:'Trigonal Pyramidal', choices:['Tetrahedral', 'Trigonal Pyramidal', 'Bent', 'Trigonal Planar'] },
  { key:'4-2', correct:'Bent', choices:['Bent', 'Linear', 'Tetrahedral', 'Trigonal Pyramidal'] },
  { key:'3-0', correct:'Trigonal Planar', choices:['Bent', 'Trigonal Planar', 'Tetrahedral', 'Linear'] },
  { key:'2-0', correct:'Linear', choices:['Linear', 'Bent', 'Trigonal Planar', 'Tetrahedral'] },
  { key:'3-1', correct:'Bent', choices:['Bent', 'Trigonal Planar', 'Linear', 'Trigonal Pyramidal'] },
  { key:'4-0', correct:'Tetrahedral', choices:['Trigonal Planar', 'Bent', 'Tetrahedral', 'Linear'] },
  { key:'5-0', correct:'Trigonal Bipyramidal', choices:['Trigonal Bipyramidal', 'Octahedral', 'See-Saw', 'Tetrahedral'] },
  { key:'5-1', correct:'See-Saw', choices:['T-Shaped', 'Trigonal Bipyramidal', 'See-Saw', 'Square Pyramidal'] },
  { key:'5-2', correct:'T-Shaped', choices:['Bent', 'T-Shaped', 'Linear', 'Trigonal Pyramidal'] },
  { key:'5-3', correct:'Linear', choices:['Linear', 'See-Saw', 'Square Planar', 'T-Shaped'] },
  { key:'6-0', correct:'Octahedral', choices:['Octahedral', 'Square Planar', 'Trigonal Bipyramidal', 'Tetrahedral'] },
  { key:'6-1', correct:'Square Pyramidal', choices:['Square Pyramidal', 'Octahedral', 'See-Saw', 'T-Shaped'] },
  { key:'6-2', correct:'Square Planar', choices:['Square Planar', 'Tetrahedral', 'Bent', 'Trigonal Planar'] }
];

let vseprToolIndex = 0;
let vseprToolChoice = '';
let vseprToolChecked = false;

function renderVseprTool() {
  const scenario = VSEPR_TOOL_DATA[vseprToolIndex];
  const [groupsText, lonePairsText] = scenario.key.split('-').map(Number);
  const data = VSEPR_TABLE[scenario.key];
  const bondCount = groupsText - lonePairsText;

  vseprToolChoice = '';
  vseprToolChecked = false;
  resetChoiceButtons('vseprChoiceButtons');

  document.getElementById('vseprQuestion').innerHTML = `This picture shows <strong>${groupsText}</strong> electron groups and <strong>${lonePairsText}</strong> lone pair${lonePairsText === 1 ? '' : 's'} on the central atom.`;
  document.getElementById('vDiagram').innerHTML = VSEPR_DIAGRAMS[scenario.key];
  document.getElementById('vBadges').innerHTML =
    `<span class="vsepr-badge">${groupsText} electron groups</span>` +
    `<span class="vsepr-badge">${bondCount} bonded atoms</span>` +
    `<span class="vsepr-badge">${lonePairsText} lone pair${lonePairsText === 1 ? '' : 's'}</span>`;
  document.getElementById('vDiagramTitle').textContent = 'Electron-group picture';
  document.getElementById('vCaption').textContent = 'Choose the molecular shape before revealing the answer.';
  document.getElementById('vMolGeo').textContent = 'Choose a molecular shape first.';
  document.getElementById('vElecGeo').textContent = 'The answer stays hidden until you commit.';
  document.getElementById('vDetails').textContent = 'Use the diagram to count the bonded atoms and lone pairs.';
  setVseprFeedbackState('pending');
  document.getElementById('vseprReveal').hidden = true;
  document.getElementById('vseprReveal').innerHTML = '';
  document.getElementById('vseprRevealBtn').disabled = true;
  document.getElementById('vseprNextBtn').disabled = true;

  vseprChoiceSignature = renderChoiceButtons(
    'vseprChoiceButtons',
    scenario.choices,
    value => selectChoice('vseprChoiceButtons', value, selected => { vseprToolChoice = selected; }),
    vseprChoiceSignature
  );
}

function checkVseprTool() {
  const scenario = VSEPR_TOOL_DATA[vseprToolIndex];
  const data = VSEPR_TABLE[scenario.key];
  if (!vseprToolChoice) {
    document.getElementById('vMolGeo').textContent = 'Choose a molecular shape, then click Check.';
    document.getElementById('vElecGeo').textContent = 'The answer stays hidden until you commit.';
    document.getElementById('vDetails').textContent = 'Use the diagram to count the bonded atoms and lone pairs.';
    setVseprFeedbackState('pending');
    return;
  }
  vseprToolChecked = true;
  if (vseprToolChoice === scenario.correct) {
    document.getElementById('vMolGeo').innerHTML = `Right — ${renderChemInlineText(data.formula)} gives a ${scenario.correct.toLowerCase()} molecular shape.`;
    document.getElementById('vElecGeo').textContent = 'Molecular geometry counts bonded atoms, not lone pairs.';
    document.getElementById('vDetails').textContent = '';
    setVseprFeedbackState('correct');
  } else {
    document.getElementById('vMolGeo').textContent = 'Not quite — you may have named the wrong shape.';
    document.getElementById('vElecGeo').textContent = 'Count all groups for electron geometry, then count only bonded atoms for molecular geometry.';
    document.getElementById('vDetails').textContent = `Try the shape with ${Number(scenario.key.split('-')[0]) - Number(scenario.key.split('-')[1])} bonded atoms.`;
    setVseprFeedbackState('incorrect');
  }
  document.getElementById('vseprRevealBtn').disabled = false;
  document.getElementById('vseprNextBtn').disabled = false;
}

function revealVseprTool() {
  const scenario = VSEPR_TOOL_DATA[vseprToolIndex];
  const data = VSEPR_TABLE[scenario.key];
  const [groupsText, lonePairsText] = scenario.key.split('-').map(Number);
  const bondCount = groupsText - lonePairsText;
  const revealEl = document.getElementById('vseprReveal');

  if (!vseprToolChecked) {
    document.getElementById('vMolGeo').textContent = 'Check your answer first.';
    setVseprFeedbackState('pending');
    return;
  }

  document.getElementById('vMolGeo').textContent = `Molecular geometry: ${data.mg}`;
  document.getElementById('vElecGeo').textContent = `Electron geometry: ${data.eg}`;
  document.getElementById('vDetails').textContent = 'Use the reveal panel below to compare the two geometry labels and the bond-angle clue.';
  revealEl.hidden = false;
  revealEl.innerHTML =
    `<strong class="tool-reveal-heading">Why this shape fits</strong>` +
    `Why: <strong>${groupsText}</strong> electron groups, but only <strong>${bondCount}</strong> bonded atoms and <strong>${lonePairsText}</strong> lone pair${lonePairsText === 1 ? '' : 's'}.<br>` +
    `Approximate bond angle: <strong>${data.angle}</strong><br>` +
    `Common example: ${renderChemInlineText(data.ex)}`;
  setVseprFeedbackState('info');
}

function nextVseprTool() {
  vseprToolIndex = getNextRandomIndex(VSEPR_TOOL_DATA.length, vseprToolIndex);
  renderVseprTool();
}

// ===================== NASBU TOOL =====================
const NASBU_TOOL_DATA = [
  {
    prompt: 'For CO2, what is A, the number of available valence electrons?',
    choices: ['12', '16', '24', '32'],
    answer: '16',
    correctFeedback: 'Right — A counts the valence electrons the atoms actually bring. In CO2, that total is 16.',
    incorrectFeedback: 'Not quite — you counted full shells instead of valence electrons. A means the electrons the atoms already have, not the electrons they want. Recount C and the two O atoms.',
    reveal: 'C has 4 valence electrons. Each O has 6. So A = 4 + 6 + 6 = 16.'
  },
  {
    prompt: 'For SO2, what is B, the total number of bond lines?',
    choices: ['2', '3', '4', '6'],
    answer: '3',
    correctFeedback: 'Right — B comes from shared electrons divided into pairs, so 6 shared electrons give 3 bond lines.',
    incorrectFeedback: 'Not quite — use B = S divided by 2. Shared electrons make bonds in pairs. Start from S = 6, then divide by 2.',
    reveal: 'For SO2, N = 24 and A = 18, so S = 6. Then B = <span class="formula-frac"><span class="formula-frac-n">6</span><span class="formula-frac-d">2</span></span> = 3 bond lines.'
  },
  {
    prompt: 'For NH3, what is U, the number of unshared electrons?',
    choices: ['0', '2', '6', '8'],
    answer: '2',
    correctFeedback: 'Right — U means the electrons left after the shared electrons are placed in bonds. NH3 has 2 unshared electrons.',
    incorrectFeedback: 'Not quite — use U = A - S. Find how many electrons are left after bonding, then decide where the lone pair goes.',
    reveal: 'For NH3, A = 8 and S = 6, so U = 8 - 6 = 2 unshared electrons. Those 2 electrons make 1 lone pair on N.'
  },
  {
    prompt: 'For NO3 -, what must you do first when counting A?',
    choices: ['Ignore the charge', 'Add 1 electron for the -1 charge', 'Subtract 1 electron for the -1 charge', 'Force N to have 8 electrons'],
    answer: 'Add 1 electron for the -1 charge',
    correctFeedback: 'Right — a negative charge means extra electrons, so you add 1 electron when counting A.',
    incorrectFeedback: 'Not quite — A counts the electrons the ion actually has. A -1 charge means one extra electron. Add that electron before you continue.',
    reveal: 'For NO3 -, start with N = 5 and O = 3 × 6 = 18, then add 1 more electron for the -1 charge.'
  },
  {
    prompt: 'For H2O, what is A, the number of available valence electrons?',
    choices: ['6', '8', '10', '12'],
    answer: '8',
    correctFeedback: 'Right — oxygen contributes 6 and the two hydrogens contribute 2 more, so A = 8.',
    incorrectFeedback: 'Not quite — A is the total valence electrons the atoms bring. Count oxygen and both hydrogens again.',
    reveal: 'O has 6 valence electrons and each H has 1. So A = 6 + 1 + 1 = 8.'
  },
  {
    prompt: 'For CO2, what is N, the number of electrons needed for full shells in this course model?',
    choices: ['8', '16', '24', '32'],
    answer: '24',
    correctFeedback: 'Right — carbon wants 8 and each oxygen wants 8, so N = 24.',
    incorrectFeedback: 'Not quite — N is the total electrons needed for all atoms to reach stable shells. Add 8 for each non-hydrogen atom here.',
    reveal: 'Carbon needs 8 electrons and each oxygen needs 8. So N = 8 + 8 + 8 = 24.'
  },
  {
    prompt: 'For NH3, what is B, the total number of bond lines?',
    choices: ['1', '2', '3', '4'],
    answer: '3',
    correctFeedback: 'Right — NH3 has 6 shared electrons, which makes 3 bond lines.',
    incorrectFeedback: 'Not quite — use B = S ÷ 2. Shared electrons come in pairs when you count bond lines.',
    reveal: 'For NH3, N = 14 and A = 8, so S = 6. Then B = 6 ÷ 2 = 3 bond lines.'
  },
  {
    prompt: 'For H2O, what is U, the number of unshared electrons?',
    choices: ['0', '2', '4', '6'],
    answer: '4',
    correctFeedback: 'Right — H2O leaves 4 electrons unshared after the bonding electrons are counted.',
    incorrectFeedback: 'Not quite — use U = A - S. Count what is left after the shared electrons are placed in bonds.',
    reveal: 'For H2O, N = 12 and A = 8, so S = 4. Then U = 8 - 4 = 4 unshared electrons.'
  },
  {
    prompt: 'For CO2, what is B, the total number of bond lines?',
    choices: ['2', '3', '4', '6'],
    answer: '4',
    correctFeedback: 'Right — CO2 has 8 shared electrons, so it uses 4 bond lines total.',
    incorrectFeedback: 'Not quite — once you find S, divide by 2 to convert shared electrons into bond lines.',
    reveal: 'For CO2, N = 24 and A = 16, so S = 8. Then B = 8 ÷ 2 = 4 bond lines.'
  },
  {
    prompt: 'For NH4 +, what must you do first when counting A?',
    choices: ['Add 1 electron for the +1 charge', 'Subtract 1 electron for the +1 charge', 'Ignore the charge', 'Give nitrogen 10 electrons'],
    answer: 'Subtract 1 electron for the +1 charge',
    correctFeedback: 'Right — a positive charge means one fewer electron, so you subtract 1 when counting A.',
    incorrectFeedback: 'Not quite — A counts the electrons the ion actually has. A +1 charge means one electron has been removed.',
    reveal: 'For NH4 +, start with N = 5 and H = 4 × 1 = 4, then subtract 1 electron for the +1 charge.'
  },
  {
    prompt: 'For BF3, what is A, the number of available valence electrons?',
    choices: ['18', '24', '30', '36'],
    answer: '24',
    correctFeedback: 'Right — boron contributes 3 valence electrons and the three fluorines contribute 21 more, for a total of 24.',
    incorrectFeedback: 'Not quite — count the actual valence electrons each atom brings before applying any octet ideas.',
    reveal: 'B has 3 valence electrons and each F has 7. So A = 3 + 7 + 7 + 7 = 24.'
  },
  {
    prompt: 'For HCl, what is N, the total number of electrons needed for full shells in this course model?',
    choices: ['8', '10', '12', '16'],
    answer: '10',
    correctFeedback: 'Right — hydrogen needs 2 and chlorine needs 8, so N = 10.',
    incorrectFeedback: 'Not quite — H follows the duet rule while chlorine follows the octet rule. Add those target counts together.',
    reveal: 'H needs 2 electrons for a duet and Cl needs 8 for an octet. So N = 2 + 8 = 10.'
  },
  {
    prompt: 'For HCN, what is B, the total number of bond lines?',
    choices: ['2', '3', '4', '5'],
    answer: '4',
    correctFeedback: 'Right — HCN has 8 shared electrons total, which makes 4 bond lines.',
    incorrectFeedback: 'Not quite — after you find S, divide by 2 because each bond line represents a pair of shared electrons.',
    reveal: 'For HCN, N = 18 and A = 10, so S = 8. Then B = 8 ÷ 2 = 4 bond lines.'
  },
  {
    prompt: 'For ClO3 -, what must you do first when counting A?',
    choices: ['Subtract 1 electron for the -1 charge', 'Add 1 electron for the -1 charge', 'Ignore the charge', 'Give chlorine 12 electrons first'],
    answer: 'Add 1 electron for the -1 charge',
    correctFeedback: 'Right — a negative charge adds electrons to the total A count.',
    incorrectFeedback: 'Not quite — A counts the electrons the ion actually has, so a -1 charge means one extra electron is included.',
    reveal: 'For ClO3 -, count chlorine and the three oxygens, then add 1 more electron because of the -1 charge.'
  },
  {
    prompt: 'For CH4, what is U, the number of unshared electrons?',
    choices: ['0', '2', '4', '8'],
    answer: '0',
    correctFeedback: 'Right — methane uses all of its available valence electrons in shared pairs, so no unshared electrons remain.',
    incorrectFeedback: 'Not quite — use U = A - S. In methane, all the valence electrons are used in bonds.',
    reveal: 'For CH4, N = 16 and A = 8, so S = 8. Then U = 8 - 8 = 0 unshared electrons.'
  }
];

let nasbuToolIndex = 0;
let nasbuToolChoice = '';
let nasbuToolChecked = false;

function renderNasbuTool() {
  const card = NASBU_TOOL_DATA[nasbuToolIndex];
  nasbuToolChoice = '';
  nasbuToolChecked = false;
  document.getElementById('nasbuPrompt').innerHTML = renderChemInlineText(card.prompt);
  setToolFeedbackState('nasbuOut', 'Choose one answer, then click Check.', 'pending');
  document.getElementById('nasbuReveal').hidden = true;
  document.getElementById('nasbuReveal').innerHTML = '';
  document.getElementById('nasbuRevealBtn').disabled = true;
  document.getElementById('nasbuNextBtn').disabled = true;

  nasbuChoiceSignature = renderChoiceButtons(
    'nasbuChoiceButtons',
    card.choices,
    value => selectChoice('nasbuChoiceButtons', value, selected => { nasbuToolChoice = selected; }),
    nasbuChoiceSignature
  );
}

function checkNasbuTool() {
  const card = NASBU_TOOL_DATA[nasbuToolIndex];
  if (!nasbuToolChoice) {
    setToolFeedbackState('nasbuOut', 'Choose one answer, then click Check.', 'pending');
    return;
  }
  nasbuToolChecked = true;
  setToolFeedbackState('nasbuOut', nasbuToolChoice === card.answer ? card.correctFeedback : card.incorrectFeedback);
  document.getElementById('nasbuRevealBtn').disabled = false;
  document.getElementById('nasbuNextBtn').disabled = false;
}

function revealNasbuTool() {
  const revealEl = document.getElementById('nasbuReveal');
  if (!nasbuToolChecked) {
    setToolFeedbackState('nasbuOut', 'Check your answer first.', 'pending');
    return;
  }
  revealEl.hidden = false;
  revealEl.innerHTML = `<strong class="tool-reveal-heading">Why this count is correct</strong>${NASBU_TOOL_DATA[nasbuToolIndex].reveal}`;
}

function nextNasbuTool() {
  nasbuToolIndex = getNextRandomIndex(NASBU_TOOL_DATA.length, nasbuToolIndex);
  renderNasbuTool();
}

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', function () {
  bondToolIndex = Math.floor(Math.random() * BOND_TOOL_DATA.length);
  vseprToolIndex = Math.floor(Math.random() * VSEPR_TOOL_DATA.length);
  nasbuToolIndex = Math.floor(Math.random() * NASBU_TOOL_DATA.length);
  renderBondTool();
  renderVseprTool();
  renderNasbuTool();
});
