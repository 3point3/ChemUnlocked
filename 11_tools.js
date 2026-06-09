function setToolFeedback(target, html, state) {
  const el = typeof target === 'string' ? document.getElementById(target) : target;
  if (!el) return;
  if (typeof html === 'string') {
    el.innerHTML = html;
  }
  el.dataset.state = state || 'info';
}

function shuffleArray(items) {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

function arraysEqual(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function createPracticeOrder(items, lastOrder, lastItem) {
  if (items.length < 2) return items.slice();
  let order = items.slice();
  let attempts = 0;
  do {
    order = shuffleArray(items);
    attempts += 1;
  } while (
    attempts < 12 &&
    ((lastOrder && arraysEqual(order, lastOrder)) || (lastItem != null && order[0] === lastItem))
  );

  if (lastItem != null && order[0] === lastItem) {
    const firstDifferentIndex = order.findIndex(function(item) {
      return item !== lastItem;
    });
    if (firstDifferentIndex > 0) {
      const firstDifferent = order.splice(firstDifferentIndex, 1)[0];
      order.unshift(firstDifferent);
    }
  }

  if (lastOrder && arraysEqual(order, lastOrder) && order.length > 1) {
    const tail = order.pop();
    order.unshift(tail);
  }

  return order;
}

function shuffleChoiceButtons(containerSelector, buttonSelector, lastOrder) {
  const container = document.querySelector(containerSelector);
  if (!container) return lastOrder || [];
  const buttons = Array.from(container.querySelectorAll(buttonSelector));
  const nextOrder = createPracticeOrder(buttons, lastOrder || [], null);
  nextOrder.forEach(function(btn) {
    container.appendChild(btn);
  });
  return nextOrder;
}

// ── 1. EQUATION CHOOSER ───────────────────────────────────────
const EQUATION_CASES = [
  {
    prompt: 'A sample of liquid water warms from 25.0&deg;C to 60.0&deg;C without changing phase.',
    answer: 'temp',
    feedbackCorrect: 'Right &mdash; the sample stays in one phase while its temperature changes, so q = mc&Delta;T applies.',
    feedbackIncorrect: 'Not quite &mdash; this is not a phase-change step. Use q = mc&Delta;T when the sample stays in one phase and the temperature changes. Next, check whether the problem says melting, freezing, boiling, or condensation.',
    reveal: '<strong>Why this equation fits</strong><br><strong>What is changing?</strong> The temperature rises from 25.0&deg;C to 60.0&deg;C.<br><strong>What stays the same?</strong> The sample stays liquid the whole time.<br><strong>Why this equation fits:</strong> When one phase changes temperature, use <strong>q = mc&Delta;T</strong>.<br><strong>Now calculate q:</strong> q = (50.0 g)(4.184 J/g&deg;C)(35.0&deg;C) = <strong>7322 J</strong>.'
  },
  {
    prompt: 'A 15.0 g sample of ice melts completely at 0.0&deg;C.',
    answer: 'fus',
    feedbackCorrect: 'Right &mdash; the sample is melting at constant temperature, so q = m&Delta;H<sub>fus</sub> applies.',
    feedbackIncorrect: 'Not quite &mdash; the sample is changing phase at constant temperature. Use q = m&Delta;H<sub>fus</sub> for melting or freezing. Next, check whether the process happens at a constant temperature.',
    reveal: '<strong>Why this equation fits</strong><br><strong>What is changing?</strong> The sample changes from solid to liquid.<br><strong>What stays the same?</strong> The temperature stays at 0.0&deg;C during melting.<br><strong>Why this equation fits:</strong> Melting is a phase change, so use <strong>q = m&Delta;H<sub>fus</sub></strong>.<br><strong>Now calculate q:</strong> q = (15.0 g)(334 J/g) = <strong>5010 J</strong>.'
  },
  {
    prompt: 'A 10.0 g sample of liquid water boils completely at 100.0&deg;C.',
    answer: 'vap',
    feedbackCorrect: 'Right &mdash; the sample is boiling at constant temperature, so q = m&Delta;H<sub>vap</sub> applies.',
    feedbackIncorrect: 'Not quite &mdash; boiling is a phase change, so the temperature does not rise during that step. Use q = m&Delta;H<sub>vap</sub>. Next, look for boiling, evaporation, or condensation.',
    reveal: '<strong>Why this equation fits</strong><br><strong>What is changing?</strong> The sample changes from liquid to gas.<br><strong>What stays the same?</strong> The temperature stays at 100.0&deg;C during boiling.<br><strong>Why this equation fits:</strong> Boiling is a phase change, so use <strong>q = m&Delta;H<sub>vap</sub></strong>.<br><strong>Now calculate q:</strong> q = (10.0 g)(2260 J/g) = <strong>22,600 J</strong>.'
  },
  {
    prompt: 'A 35.0 g sample of steam cools from 140.0&deg;C to 110.0&deg;C without condensing.',
    answer: 'temp',
    feedbackCorrect: 'Right &mdash; the sample stays in the gas phase while its temperature changes, so q = mc&Delta;T applies.',
    feedbackIncorrect: 'Not quite &mdash; this is not a phase-change step. The steam stays gas the whole time, so use q = mc&Delta;T.',
    reveal: '<strong>Why this equation fits</strong><br><strong>What is changing?</strong> The temperature of the gas changes.<br><strong>What stays the same?</strong> The sample remains steam, so the phase does not change.<br><strong>Why this equation fits:</strong> A temperature change within one phase uses <strong>q = mc&Delta;T</strong>.'
  },
  {
    prompt: 'A 20.0 g sample of liquid water freezes completely at 0.0&deg;C.',
    answer: 'fus',
    feedbackCorrect: 'Right &mdash; freezing is the reverse of melting, so q = m&Delta;H<sub>fus</sub> applies at constant temperature.',
    feedbackIncorrect: 'Not quite &mdash; the sample is changing phase at constant temperature. Freezing uses the fusion enthalpy value too.',
    reveal: '<strong>Why this equation fits</strong><br><strong>What is changing?</strong> Liquid water becomes solid ice.<br><strong>What stays the same?</strong> The temperature stays constant during freezing.<br><strong>Why this equation fits:</strong> Freezing and melting use <strong>q = m&Delta;H<sub>fus</sub></strong> because they are solid-liquid phase changes.'
  },
  {
    prompt: 'A 12.0 g sample of water vapor condenses completely at 100.0&deg;C.',
    answer: 'vap',
    feedbackCorrect: 'Right &mdash; condensation is the reverse of boiling, so q = m&Delta;H<sub>vap</sub> applies at constant temperature.',
    feedbackIncorrect: 'Not quite &mdash; the temperature stays constant during condensation, so this is a phase-change step. Use the vaporization enthalpy value.',
    reveal: '<strong>Why this equation fits</strong><br><strong>What is changing?</strong> Gas becomes liquid.<br><strong>What stays the same?</strong> The temperature stays constant during condensation.<br><strong>Why this equation fits:</strong> Condensation is a liquid-gas phase change, so use <strong>q = m&Delta;H<sub>vap</sub></strong>.'
  },
  {
    prompt: 'A block of aluminum warms from 18.0&deg;C to 75.0&deg;C with no melting.',
    answer: 'temp',
    feedbackCorrect: 'Right &mdash; the metal stays solid while its temperature changes, so q = mc&Delta;T applies.',
    feedbackIncorrect: 'Not quite &mdash; the sample stays in one phase and only its temperature changes. Use q = mc&Delta;T.',
    reveal: '<strong>Why this equation fits</strong><br><strong>What is changing?</strong> Temperature increases.<br><strong>What stays the same?</strong> The aluminum remains solid.<br><strong>Why this equation fits:</strong> When a sample stays in one phase, use <strong>q = mc&Delta;T</strong>.'
  },
  {
    prompt: 'A 9.0 g sample of ice submerges in a process where only melting at 0.0&deg;C is described.',
    answer: 'fus',
    feedbackCorrect: 'Right &mdash; the key clue is melting at constant temperature, so q = m&Delta;H<sub>fus</sub> applies.',
    feedbackIncorrect: 'Not quite &mdash; ignore the wording distraction and focus on the phase change. Melting at 0.0&deg;C uses q = m&Delta;H<sub>fus</sub>.',
    reveal: '<strong>Why this equation fits</strong><br><strong>What is changing?</strong> Ice becomes liquid water.<br><strong>What stays the same?</strong> Temperature remains at the melting point.<br><strong>Why this equation fits:</strong> A solid-liquid phase change uses <strong>q = m&Delta;H<sub>fus</sub></strong>.'
  },
  {
    prompt: 'A 25.0 g sample of ethanol warms from 10.0&deg;C to 32.0&deg;C and stays liquid.',
    answer: 'temp',
    feedbackCorrect: 'Right &mdash; the sample stays liquid while the temperature changes, so q = mc&Delta;T applies.',
    feedbackIncorrect: 'Not quite &mdash; no phase change is described here. A one-phase temperature change uses q = mc&Delta;T.',
    reveal: '<strong>Why this equation fits</strong><br><strong>What is changing?</strong> The liquid temperature rises.<br><strong>What stays the same?</strong> The ethanol remains liquid.<br><strong>Why this equation fits:</strong> For a temperature change in one phase, use <strong>q = mc&Delta;T</strong>.'
  },
  {
    prompt: 'A 30.0 g sample of water at 100.0&deg;C is described only as vaporizing completely.',
    answer: 'vap',
    feedbackCorrect: 'Right &mdash; vaporizing at constant temperature is a phase change, so q = m&Delta;H<sub>vap</sub> applies.',
    feedbackIncorrect: 'Not quite &mdash; the sample is boiling or vaporizing, so the temperature stays constant during that step. Use q = m&Delta;H<sub>vap</sub>.',
    reveal: '<strong>Why this equation fits</strong><br><strong>What is changing?</strong> Liquid becomes gas.<br><strong>What stays the same?</strong> Temperature remains constant during the phase change.<br><strong>Why this equation fits:</strong> Liquid-gas phase changes use <strong>q = m&Delta;H<sub>vap</sub></strong>.'
  },
  {
    prompt: 'A 40.0 g sample of liquid water cools from 85.0&deg;C to 25.0&deg;C and remains liquid.',
    answer: 'temp',
    feedbackCorrect: 'Right &mdash; the sample remains in one phase while the temperature changes, so q = mc&Delta;T applies.',
    feedbackIncorrect: 'Not quite &mdash; cooling within one phase still uses q = mc&Delta;T. No phase change is happening here.',
    reveal: '<strong>Why this equation fits</strong><br><strong>What is changing?</strong> Temperature decreases.<br><strong>What stays the same?</strong> The sample remains liquid water.<br><strong>Why this equation fits:</strong> Temperature changes within a single phase use <strong>q = mc&Delta;T</strong>.'
  },
  {
    prompt: 'A sample of solid paraffin wax melts completely at its melting point with no temperature change.',
    answer: 'fus',
    feedbackCorrect: 'Right &mdash; melting at constant temperature uses q = m&Delta;H<sub>fus</sub>.',
    feedbackIncorrect: 'Not quite &mdash; because this is melting, the energy goes into the phase change rather than changing temperature. Use q = m&Delta;H<sub>fus</sub>.',
    reveal: '<strong>Why this equation fits</strong><br><strong>What is changing?</strong> Solid wax becomes liquid wax.<br><strong>What stays the same?</strong> Temperature stays constant during melting.<br><strong>Why this equation fits:</strong> Melting is a phase change, so use <strong>q = m&Delta;H<sub>fus</sub></strong>.'
  },
  {
    prompt: 'A sample of refrigerant gas condenses back to liquid while staying at its condensation temperature.',
    answer: 'vap',
    feedbackCorrect: 'Right &mdash; condensation is a liquid-gas phase change at constant temperature, so q = m&Delta;H<sub>vap</sub> applies.',
    feedbackIncorrect: 'Not quite &mdash; this is not a sloped temperature-change step. Condensation uses the vaporization enthalpy value because it is the reverse of boiling.',
    reveal: '<strong>Why this equation fits</strong><br><strong>What is changing?</strong> Gas becomes liquid.<br><strong>What stays the same?</strong> Temperature stays constant during condensation.<br><strong>Why this equation fits:</strong> Gas-liquid phase changes use <strong>q = m&Delta;H<sub>vap</sub></strong>.'
  },
  {
    prompt: 'A copper sample is heated from 22.0&deg;C to 120.0&deg;C and stays solid throughout.',
    answer: 'temp',
    feedbackCorrect: 'Right &mdash; the copper remains solid while its temperature changes, so q = mc&Delta;T applies.',
    feedbackIncorrect: 'Not quite &mdash; this is a one-phase temperature change, not a phase change. Use q = mc&Delta;T.',
    reveal: '<strong>Why this equation fits</strong><br><strong>What is changing?</strong> The solid temperature rises.<br><strong>What stays the same?</strong> The copper remains in the solid phase.<br><strong>Why this equation fits:</strong> One-phase temperature changes use <strong>q = mc&Delta;T</strong>.'
  }
];

let equationOrder = [];
let equationOrderPosition = 0;
let equationLastCaseIndex = null;
let equationChoice = null;
let equationChecked = false;
let equationChoiceOrder = [];

function getCurrentEquationCaseIndex() {
  if (!equationOrder.length || equationOrderPosition >= equationOrder.length) {
    equationOrder = createPracticeOrder(
      EQUATION_CASES.map(function(_, index) { return index; }),
      equationOrder,
      equationLastCaseIndex
    );
    equationOrderPosition = 0;
  }
  return equationOrder[equationOrderPosition];
}

function renderEquationCase() {
  const current = EQUATION_CASES[getCurrentEquationCaseIndex()];
  document.getElementById('equationScenario').innerHTML = current.prompt;
  setToolFeedback('equationFeedback', 'Choose one equation, then click Check.', 'pending');
  document.getElementById('equationRevealBox').hidden = true;
  document.getElementById('equationRevealBox').innerHTML = '';
  document.getElementById('equationRevealBox').dataset.state = 'info';
  document.getElementById('equationReveal').disabled = true;
  document.getElementById('equationNext').disabled = true;
  equationChoice = null;
  equationChecked = false;
  document.querySelectorAll('#equationChoices .segment-btn').forEach(function(btn) {
    btn.classList.remove('active');
  });
  equationChoiceOrder = shuffleChoiceButtons('#equationChoices', '.segment-btn', equationChoiceOrder);
}

function selectEquationChoice(btn) {
  if (equationChecked) return;
  equationChoice = btn.dataset.answer;
  document.querySelectorAll('#equationChoices .segment-btn').forEach(function(choiceBtn) {
    choiceBtn.classList.remove('active');
  });
  btn.classList.add('active');
}

function checkEquationChoice() {
  if (!equationChoice) {
    setToolFeedback('equationFeedback', 'Choose one equation first.', 'info');
    return;
  }
  equationChecked = true;
  const current = EQUATION_CASES[getCurrentEquationCaseIndex()];
  const isCorrect = equationChoice === current.answer;
  setToolFeedback('equationFeedback', isCorrect ? current.feedbackCorrect : current.feedbackIncorrect, isCorrect ? 'correct' : 'incorrect');
  document.getElementById('equationReveal').disabled = false;
  document.getElementById('equationNext').disabled = false;
}

function revealEquationReasoning() {
  if (!equationChecked) return;
  const current = EQUATION_CASES[getCurrentEquationCaseIndex()];
  const box = document.getElementById('equationRevealBox');
  setToolFeedback(box, current.reveal, 'info');
  box.hidden = false;
}

function nextEquationCase() {
  equationLastCaseIndex = getCurrentEquationCaseIndex();
  equationOrderPosition += 1;
  renderEquationCase();
}

// ── 2. HEATING CURVE EXPLORER ─────────────────────────────────
const CURVE_DATA = {
  ice:   { target:'seg-ice',   title:'Ice warming',    equation:'q = mc\u0394T',
           detail:'The sample is solid ice. Temperature rises toward 0\u00B0C as particles vibrate faster in fixed lattice positions.',
           temp:'Temperature is changing &mdash; sloped segment.',
           particle:'Particles vibrate faster but stay in fixed positions.',
           answer:'temp',
           feedbackCorrect:'Right &mdash; this segment is sloped, so the temperature changes within one phase. Use q = mc&Delta;T.',
           feedbackIncorrect:'Not quite &mdash; this segment is sloped, so the sample is not changing phase here. Use the temperature-change rule. Next, check whether the graph is sloped or flat.' },
  melt:  { target:'seg-melt',  title:'Melting',        equation:'q = m\u0394H<sub>fus</sub>',
           detail:'Temperature holds constant at 0\u00B0C. Added energy breaks intermolecular attractions instead of raising temperature.',
           temp:'Temperature stays constant at 0&deg;C &mdash; flat segment.',
           particle:'Energy breaks attractions between water molecules instead of speeding them up.',
           answer:'fus',
           feedbackCorrect:'Right &mdash; this segment is flat, so temperature stays constant and the energy goes into a phase change. Use q = m&Delta;H for a flat phase-change segment.',
           feedbackIncorrect:'Not quite &mdash; a flat segment means the temperature is not rising. Check which phase change is happening. At 0&deg;C for water, use q = m&Delta;H<sub>fus</sub>.' },
  water: { target:'seg-water', title:'Liquid warming', equation:'q = mc\u0394T',
           detail:'The sample is now liquid water. Temperature rises from 0\u00B0C toward 100\u00B0C.',
           temp:'Temperature is changing &mdash; sloped segment.',
           particle:'Liquid particles move faster and slide past each other more freely.',
           answer:'temp',
           feedbackCorrect:'Right &mdash; this segment is sloped, so the temperature changes within one phase. Use q = mc&Delta;T.',
           feedbackIncorrect:'Not quite &mdash; this segment is sloped, so it is not a phase-change step. Use q = mc&Delta;T. Next, look first at the shape of the segment.' },
  boil:  { target:'seg-boil',  title:'Boiling',        equation:'q = m\u0394H<sub>vap</sub>',
           detail:'Temperature holds constant at 100\u00B0C. Added energy separates liquid particles into gas phase.',
           temp:'Temperature stays constant at 100&deg;C &mdash; flat segment.',
           particle:'Energy separates liquid particles into the gas phase.',
           answer:'vap',
           feedbackCorrect:'Right &mdash; this segment is flat, so the temperature stays constant and the energy goes into a phase change. At 100&deg;C for water, use q = m&Delta;H<sub>vap</sub>.',
           feedbackIncorrect:'Not quite &mdash; you chose a temperature-change rule, but this segment is flat. On a flat segment, temperature stays constant, so check which phase change is happening.' },
  steam: { target:'seg-steam', title:'Steam warming',  equation:'q = mc\u0394T',
           detail:'All of the sample is now gas. Temperature rises above 100\u00B0C.',
           temp:'Temperature is changing &mdash; sloped segment.',
           particle:'Gas particles move faster and spread farther apart.',
           answer:'temp',
           feedbackCorrect:'Right &mdash; this segment is sloped, so the temperature changes within one phase. Use q = mc&Delta;T.',
           feedbackIncorrect:'Not quite &mdash; this segment is sloped, so the sample is not changing phase here. Use q = mc&Delta;T. Next, look at whether the line is sloped or flat.' }
};

const CURVE_SEQUENCE = ['ice', 'melt', 'water', 'boil', 'steam'];
let curveOrder = [];
let curveOrderPosition = 0;
let curveLastKey = null;
let curveChoice = null;
let curveChecked = false;
let curveChoiceOrder = [];

function getCurrentCurveKey() {
  if (!curveOrder.length || curveOrderPosition >= curveOrder.length) {
    curveOrder = createPracticeOrder(CURVE_SEQUENCE, curveOrder, curveLastKey);
    curveOrderPosition = 0;
  }
  return curveOrder[curveOrderPosition];
}

function renderCurveSegment() {
  document.querySelectorAll('.curve-segment').forEach(function(el){el.classList.remove('active');});
  document.querySelectorAll('[data-curve-answer]').forEach(function(el){el.classList.remove('active');});
  const key = getCurrentCurveKey();
  const data = CURVE_DATA[key];
  const seg  = document.getElementById(data.target);
  if (seg) seg.classList.add('active');
  curveChoice = null;
  curveChecked = false;
  setToolFeedback('curveFeedback', 'Choose one equation, then click Check.', 'pending');
  document.getElementById('curveReveal').disabled = true;
  document.getElementById('curveNext').disabled = true;
  document.getElementById('segmentReadout').hidden = true;
  document.getElementById('segmentReadout').innerHTML = '';
  document.getElementById('segmentReadout').dataset.state = 'info';
  curveChoiceOrder = shuffleChoiceButtons('.tool-choice-row[aria-label="Heating curve equation choices"]', '.tool-choice-btn', curveChoiceOrder);
}

function selectCurveChoice(btn) {
  if (curveChecked) return;
  curveChoice = btn.dataset.curveAnswer;
  document.querySelectorAll('[data-curve-answer]').forEach(function(choiceBtn) {
    choiceBtn.classList.remove('active');
  });
  btn.classList.add('active');
}

function checkCurveChoice() {
  if (!curveChoice) {
    setToolFeedback('curveFeedback', 'Choose one equation first.', 'info');
    return;
  }
  curveChecked = true;
  const data = CURVE_DATA[getCurrentCurveKey()];
  const isCorrect = curveChoice === data.answer;
  setToolFeedback('curveFeedback', isCorrect ? data.feedbackCorrect : data.feedbackIncorrect, isCorrect ? 'correct' : 'incorrect');
  document.getElementById('curveReveal').disabled = false;
  document.getElementById('curveNext').disabled = false;
}

function revealCurveReasoning() {
  if (!curveChecked) return;
  const data = CURVE_DATA[getCurrentCurveKey()];
  setToolFeedback('segmentReadout',
    '<strong>Segment reasoning</strong><br>' +
    '<strong>Segment:</strong> ' + data.title + '<br>' +
    '<strong>Why this equation fits:</strong> Use <strong>' + data.equation + '</strong>.<br>' +
    '<strong>Temperature behavior:</strong> ' + data.temp + '<br>' +
    '<strong>Particle picture:</strong> ' + data.particle + '<br>' +
    data.detail,
    'info'
  );
  document.getElementById('segmentReadout').hidden = false;
}

function nextCurveSegment() {
  curveLastKey = getCurrentCurveKey();
  curveOrderPosition += 1;
  renderCurveSegment();
}

// ── 3. REACTION PROFILE EXPLORER ─────────────────────────────
const PROFILE_SEQUENCE = ['exo', 'endo'];
let profileOrder = [];
let profileOrderPosition = 0;
let profileLastType = null;
let currentProfile = 'exo';
let profileChoice = null;
let profileChecked = false;
let profileChoiceOrder = [];

// Geometry configs matching the 11.6 static diagram style
const PROF_CFG = {
  exo: {
    rY: 95, pY: 285, peakY: 30, catPeakY: 68,
    eaX: 260, catEaX: 260,
    dhX: 520,
    uncatD: 'M 60,95 L 145,95 C 190,95 215,30 260,30 C 305,30 335,285 380,285 L 510,285',
    catD:   'M 60,95 L 145,95 C 190,95 215,68 260,68 C 305,68 335,285 380,285 L 510,285',
    reactLabelX: 65,  prodLabelX: 385,
    uncatLabelX: 265, uncatLabelY: 19,
    catLabelX:   280, catLabelY:   57,
    dhSign: ' \u003C 0 J'
  },
  endo: {
    rY: 265, pY: 145, peakY: 55, catPeakY: 105,
    eaX: 305, catEaX: 305,
    dhX: 520,
    uncatD: 'M 60,265 L 145,265 C 185,265 230,55 310,55 C 385,55 400,145 425,145 L 510,145',
    catD:   'M 60,265 L 145,265 C 200,265 250,105 310,105 C 370,105 398,145 425,145 L 510,145',
    reactLabelX: 65,  prodLabelX: 430,
    uncatLabelX: 238, uncatLabelY: 43,
    catLabelX:   355, catLabelY:   93,
    dhSign: ' \u003E 0 J'
  }
};

function _svgLine(id, x1, y1, x2, y2) {
  var el = document.getElementById(id); if (!el) return;
  el.setAttribute('x1', x1); el.setAttribute('y1', y1);
  el.setAttribute('x2', x2); el.setAttribute('y2', y2);
}
function _svgAttr(id, attr, val) {
  var el = document.getElementById(id); if (el) el.setAttribute(attr, val);
}
function _refY(id, y) {
  var el = document.getElementById(id); if (!el) return;
  el.setAttribute('y1', y); el.setAttribute('y2', y);
}

function setReactionProfile(type, btn) {
  currentProfile = type;
  document.querySelectorAll('.profile-btn').forEach(function(el){
    if (el.dataset.profile) el.classList.remove('active');
  });
  if (btn) btn.classList.add('active');
  const p = PROF_CFG[type];

  // Curves
  document.getElementById('uncatPath').setAttribute('d', p.uncatD);
  document.getElementById('catPath').setAttribute('d',   p.catD);

  // Dashed reference lines
  _refY('refReactant', p.rY);
  _refY('refPeak',     p.peakY);
  _refY('refPeakCat',  p.catPeakY);
  _refY('refProduct',  p.pY);

  // E_A uncatalyzed line: reactant level → peak
  _svgLine('uncatEa', p.eaX, p.rY, p.eaX, p.peakY);
  _svgAttr('uncatEaLabel', 'x', p.eaX + 8);
  _svgAttr('uncatEaLabel', 'y', Math.round((p.rY + p.peakY) / 2) + 5);

  // E_A catalyzed line: reactant level → catalyst peak
  _svgLine('catEa', p.catEaX, p.rY, p.catEaX, p.catPeakY);
  _svgAttr('catEaLabel', 'x', p.catEaX + 8);
  _svgAttr('catEaLabel', 'y', Math.round((p.rY + p.catPeakY) / 2) + 5);

  // ΔH line: reactant level → product level
  _svgLine('dhLine', p.dhX, p.rY, p.dhX, p.pY);
  _svgAttr('dhLabel', 'x', p.dhX + 8);
  _svgAttr('dhLabel', 'y', Math.round((p.rY + p.pY) / 2) + 5);
  var dhSign = document.getElementById('dhSign');
  if (dhSign) dhSign.textContent = p.dhSign;

  // Reactants / Products labels
  _svgAttr('reactLabel', 'x', p.reactLabelX);
  _svgAttr('reactLabel', 'y', p.rY - 12);
  _svgAttr('prodLabel',  'x', p.prodLabelX);
  _svgAttr('prodLabel',  'y', p.pY - 12);

  // Path labels
  _svgAttr('uncatPathLabel', 'x', p.uncatLabelX);
  _svgAttr('uncatPathLabel', 'y', p.uncatLabelY);
  _svgAttr('catPathLabel',   'x', p.catLabelX);
  _svgAttr('catPathLabel',   'y', p.catLabelY);

  resetProfilePrompt();
}

function resetProfilePrompt() {
  profileChoice = null;
  profileChecked = false;
  document.getElementById('reactionProfileSvg').classList.remove('show-catalyst');
  const feedback = document.getElementById('profileFeedback');
  setToolFeedback(feedback, 'Choose one answer, then click Check.', 'pending');
  document.getElementById('profileReveal').disabled = true;
  document.getElementById('profileNext').disabled = true;
  document.getElementById('profileReadout').hidden = true;
  document.getElementById('profileReadout').innerHTML = '';
  document.getElementById('profileReadout').dataset.state = 'info';
  document.querySelectorAll('[data-profile-answer]').forEach(function(btn) {
    btn.classList.remove('active');
  });
  profileChoiceOrder = shuffleChoiceButtons('#profileChoices', '.tool-choice-btn', profileChoiceOrder);
}

function selectProfileChoice(btn) {
  if (profileChecked) return;
  profileChoice = btn.dataset.profileAnswer;
  document.querySelectorAll('[data-profile-answer]').forEach(function(choiceBtn) {
    choiceBtn.classList.remove('active');
  });
  btn.classList.add('active');
}

function checkProfileChoice() {
  const feedback = document.getElementById('profileFeedback');
  if (!profileChoice) {
    setToolFeedback(feedback, 'Choose one answer first.', 'info');
    return;
  }
  profileChecked = true;
  const isCorrect = profileChoice === 'ea';
  setToolFeedback(
    feedback,
    isCorrect
      ? 'Right &mdash; a catalyst lowers E<sub>a</sub> by giving a different pathway, but it does not change the energy of the reactants or products, so &Delta;H stays the same.'
      : 'Not quite &mdash; catalysts change the pathway, not the starting or ending energy levels. Next, compare the reactant-to-product difference with the reactant-to-peak barrier.',
    isCorrect ? 'correct' : 'incorrect'
  );
  document.getElementById('profileReveal').disabled = false;
  document.getElementById('profileNext').disabled = false;
}

function revealProfileReasoning() {
  if (!profileChecked) return;
  const rxnType = currentProfile === 'exo' ? 'Exothermic' : 'Endothermic';
  const dhText = currentProfile === 'exo'
    ? 'Products are lower in potential energy than reactants, so &Delta;H is negative.'
    : 'Products are higher in potential energy than reactants, so &Delta;H is positive.';
  document.getElementById('reactionProfileSvg').classList.add('show-catalyst');
  setToolFeedback('profileReadout',
    '<strong>What changes on the diagram</strong><br>' +
    '<strong>' + rxnType + ' profile:</strong> ' + dhText + '<br>' +
    '<strong>E<sub>a</sub>:</strong> the vertical rise from the reactant level to the peak gets smaller with a catalyst.<br>' +
    '<strong>&Delta;H:</strong> the reactant-to-product energy difference does not change because the reactant and product levels stay in the same place.',
    'info'
  );
  document.getElementById('profileReadout').hidden = false;
}

function cycleReactionProfile() {
  profileLastType = currentProfile;
  if (!profileOrder.length || profileOrderPosition >= profileOrder.length) {
    profileOrder = createPracticeOrder(PROFILE_SEQUENCE, profileOrder, profileLastType);
    profileOrderPosition = 0;
  }
  const nextType = profileOrder[profileOrderPosition];
  profileOrderPosition += 1;
  const nextBtn = document.querySelector('.profile-btn[data-profile="' + nextType + '"]');
  setReactionProfile(nextType, nextBtn);
}

// ── 4. EXOTHERMIC OR ENDOTHERMIC CLASSIFIER ──────────────────
const THERMO_CLASSIFY_CASES = [
  {
    prompt: '<span class="ion-group">CH<span class="chem-sub">4</span></span>(g) + 2<span class="ion-group">O<span class="chem-sub">2</span></span>(g) &rarr; <span class="ion-group">CO<span class="chem-sub">2</span></span>(g) + 2<span class="ion-group">H<span class="chem-sub">2</span>O</span>(l), &Delta;H<sub>rxn</sub> = &minus;890 kJ',
    answer: 'exo',
    feedbackCorrect: 'Right &mdash; a negative &Delta;H means the reaction releases heat, so it is exothermic.',
    feedbackIncorrect: 'Not quite &mdash; the sign of &Delta;H is negative here. Negative &Delta;H means heat is released. Next, check whether the enthalpy value is below zero or above zero.',
    reveal: '<strong>Why this is exothermic</strong><br><strong>Reaction:</strong> combustion of methane<br><strong>Clue:</strong> &Delta;H<sub>rxn</sub> = &minus;890 kJ is negative.<br><strong>Rule:</strong> A negative &Delta;H means heat leaves the system, so the reaction is <strong>exothermic</strong>.'
  },
  {
    prompt: '<span class="ion-group">N<span class="chem-sub">2</span></span>(g) + <span class="ion-group">O<span class="chem-sub">2</span></span>(g) &rarr; 2NO(g), &Delta;H<sub>rxn</sub> = +180.5 kJ',
    answer: 'endo',
    feedbackCorrect: 'Right &mdash; a positive &Delta;H means the reaction absorbs heat, so it is endothermic.',
    feedbackIncorrect: 'Not quite &mdash; the sign of &Delta;H is positive here. Positive &Delta;H means heat is absorbed. Next, check whether the enthalpy value is above zero.',
    reveal: '<strong>Why this is endothermic</strong><br><strong>Reaction:</strong> formation of nitric oxide from nitrogen and oxygen<br><strong>Clue:</strong> &Delta;H<sub>rxn</sub> = +180.5 kJ is positive.<br><strong>Rule:</strong> A positive &Delta;H means heat enters the system, so the reaction is <strong>endothermic</strong>.'
  },
  {
    prompt: '<span class="ion-group">C<span class="chem-sub">2</span>H<span class="chem-sub">5</span>OH</span>(l) + 3<span class="ion-group">O<span class="chem-sub">2</span></span>(g) &rarr; 2<span class="ion-group">CO<span class="chem-sub">2</span></span>(g) + 3<span class="ion-group">H<span class="chem-sub">2</span>O</span>(l) + 1367 kJ',
    answer: 'exo',
    feedbackCorrect: 'Right &mdash; heat is written on the product side, so the reaction releases heat and is exothermic.',
    feedbackIncorrect: 'Not quite &mdash; when heat appears on the product side, the reaction gives off heat. Next, look at which side of the equation the energy is written on.',
    reveal: '<strong>Why this is exothermic</strong><br><strong>Reaction:</strong> combustion of ethanol<br><strong>Clue:</strong> 1367 kJ is written on the <strong>product</strong> side.<br><strong>Rule:</strong> Heat on the product side means the reaction releases heat, so it is <strong>exothermic</strong>.'
  },
  {
    prompt: '<span class="ion-group">CaCO<span class="chem-sub">3</span></span>(s) + 178 kJ &rarr; CaO(s) + <span class="ion-group">CO<span class="chem-sub">2</span></span>(g)',
    answer: 'endo',
    feedbackCorrect: 'Right &mdash; heat is written on the reactant side, so the reaction absorbs heat and is endothermic.',
    feedbackIncorrect: 'Not quite &mdash; when heat appears on the reactant side, the reaction takes in heat. Next, check whether the energy is written with the reactants or the products.',
    reveal: '<strong>Why this is endothermic</strong><br><strong>Reaction:</strong> thermal decomposition of calcium carbonate<br><strong>Clue:</strong> 178 kJ is written on the <strong>reactant</strong> side.<br><strong>Rule:</strong> Heat on the reactant side means the reaction absorbs heat, so it is <strong>endothermic</strong>.'
  },
  {
    prompt: '2<span class="ion-group">H<span class="chem-sub">2</span></span>(g) + <span class="ion-group">O<span class="chem-sub">2</span></span>(g) &rarr; 2<span class="ion-group">H<span class="chem-sub">2</span>O</span>(l) + 572 kJ',
    answer: 'exo',
    feedbackCorrect: 'Right &mdash; heat is written on the product side, so the reaction releases energy and is exothermic.',
    feedbackIncorrect: 'Not quite &mdash; the energy is written with the products, which means heat is being released.',
    reveal: '<strong>Why this is exothermic</strong><br><strong>Clue:</strong> 572 kJ appears on the product side.<br><strong>Rule:</strong> Heat written as a product means the reaction is <strong>exothermic</strong>.'
  },
  {
    prompt: '2<span class="ion-group">KClO<span class="chem-sub">3</span></span>(s) + heat &rarr; 2KCl(s) + 3<span class="ion-group">O<span class="chem-sub">2</span></span>(g)',
    answer: 'endo',
    feedbackCorrect: 'Right &mdash; heat is a reactant, so the reaction must absorb energy and is endothermic.',
    feedbackIncorrect: 'Not quite &mdash; heat is on the reactant side, so the system takes in energy.',
    reveal: '<strong>Why this is endothermic</strong><br><strong>Clue:</strong> Heat is written with the reactants.<br><strong>Rule:</strong> If heat is a reactant, the reaction is <strong>endothermic</strong>.'
  },
  {
    prompt: '<span class="ion-group">H<span class="chem-sub">2</span></span>(g) + <span class="ion-group">Cl<span class="chem-sub">2</span></span>(g) &rarr; 2HCl(g), &Delta;H<sub>rxn</sub> = &minus;184.6 kJ',
    answer: 'exo',
    feedbackCorrect: 'Right &mdash; the enthalpy change is negative, so the reaction releases heat and is exothermic.',
    feedbackIncorrect: 'Not quite &mdash; a negative &Delta;H means the system releases energy.',
    reveal: '<strong>Why this is exothermic</strong><br><strong>Clue:</strong> &Delta;H is negative.<br><strong>Rule:</strong> Negative enthalpy change means the reaction is <strong>exothermic</strong>.'
  },
  {
    prompt: '<span class="ion-group">NH<span class="chem-sub">4</span>NO<span class="chem-sub">3</span></span>(s) &rarr; <span class="ion-group">NH<span class="chem-sub">4</span><span class="chem-charge">+</span></span>(aq) + <span class="ion-group">NO<span class="chem-sub">3</span><span class="chem-charge">-</span></span>(aq), &Delta;H<sub>soln</sub> = +25.7 kJ',
    answer: 'endo',
    feedbackCorrect: 'Right &mdash; the positive enthalpy change means heat is absorbed, so the process is endothermic.',
    feedbackIncorrect: 'Not quite &mdash; positive &Delta;H means the system absorbs heat.',
    reveal: '<strong>Why this is endothermic</strong><br><strong>Clue:</strong> &Delta;H is positive.<br><strong>Rule:</strong> Positive enthalpy change means the process is <strong>endothermic</strong>.'
  },
  {
    prompt: '2<span class="ion-group">SO<span class="chem-sub">2</span></span>(g) + <span class="ion-group">O<span class="chem-sub">2</span></span>(g) &rarr; 2<span class="ion-group">SO<span class="chem-sub">3</span></span>(g) + 198 kJ',
    answer: 'exo',
    feedbackCorrect: 'Right &mdash; heat appears on the product side, so the reaction gives off energy and is exothermic.',
    feedbackIncorrect: 'Not quite &mdash; energy written as a product means the reaction releases heat.',
    reveal: '<strong>Why this is exothermic</strong><br><strong>Clue:</strong> 198 kJ is shown as a product.<br><strong>Rule:</strong> Heat on the product side means the reaction is <strong>exothermic</strong>.'
  },
  {
    prompt: '<span class="ion-group">N<span class="chem-sub">2</span>O<span class="chem-sub">4</span></span>(g) + 57.2 kJ &rarr; 2<span class="ion-group">NO<span class="chem-sub">2</span></span>(g)',
    answer: 'endo',
    feedbackCorrect: 'Right &mdash; heat is a reactant, so the process absorbs energy and is endothermic.',
    feedbackIncorrect: 'Not quite &mdash; because the energy is on the left side, the system is taking in heat.',
    reveal: '<strong>Why this is endothermic</strong><br><strong>Clue:</strong> 57.2 kJ is written on the reactant side.<br><strong>Rule:</strong> Heat as a reactant means the process is <strong>endothermic</strong>.'
  },
  {
    prompt: 'C(s) + <span class="ion-group">O<span class="chem-sub">2</span></span>(g) &rarr; <span class="ion-group">CO<span class="chem-sub">2</span></span>(g), &Delta;H<sub>rxn</sub> = &minus;393.5 kJ',
    answer: 'exo',
    feedbackCorrect: 'Right &mdash; the negative &Delta;H shows the reaction releases heat and is exothermic.',
    feedbackIncorrect: 'Not quite &mdash; the sign of &Delta;H is negative, which means energy leaves the system.',
    reveal: '<strong>Why this is exothermic</strong><br><strong>Clue:</strong> &Delta;H is below zero.<br><strong>Rule:</strong> Negative enthalpy change means the reaction is <strong>exothermic</strong>.'
  },
  {
    prompt: '6<span class="ion-group">CO<span class="chem-sub">2</span></span>(g) + 6<span class="ion-group">H<span class="chem-sub">2</span>O</span>(l) + light energy &rarr; <span class="ion-group">C<span class="chem-sub">6</span>H<span class="chem-sub">12</span>O<span class="chem-sub">6</span></span>(s) + 6<span class="ion-group">O<span class="chem-sub">2</span></span>(g)',
    answer: 'endo',
    feedbackCorrect: 'Right &mdash; energy is required on the reactant side, so the process is endothermic.',
    feedbackIncorrect: 'Not quite &mdash; when energy is needed as a reactant, the process absorbs heat or energy.',
    reveal: '<strong>Why this is endothermic</strong><br><strong>Clue:</strong> Light energy is listed with the reactants.<br><strong>Rule:</strong> Required energy on the reactant side means the process is <strong>endothermic</strong>.'
  },
  {
    prompt: '2Al(s) + <span class="ion-group">Fe<span class="chem-sub">2</span>O<span class="chem-sub">3</span></span>(s) &rarr; <span class="ion-group">Al<span class="chem-sub">2</span>O<span class="chem-sub">3</span></span>(s) + 2Fe(l) + 851 kJ',
    answer: 'exo',
    feedbackCorrect: 'Right &mdash; heat is on the product side, so the thermite reaction is exothermic.',
    feedbackIncorrect: 'Not quite &mdash; the energy is written as a product, which means the reaction releases heat.',
    reveal: '<strong>Why this is exothermic</strong><br><strong>Clue:</strong> 851 kJ appears on the product side.<br><strong>Rule:</strong> Heat as a product means the reaction is <strong>exothermic</strong>.'
  },
  {
    prompt: '2HgO(s) + heat &rarr; 2Hg(l) + <span class="ion-group">O<span class="chem-sub">2</span></span>(g)',
    answer: 'endo',
    feedbackCorrect: 'Right &mdash; because heat is a reactant, the decomposition absorbs energy and is endothermic.',
    feedbackIncorrect: 'Not quite &mdash; energy appears with the reactants here, so the process is endothermic.',
    reveal: '<strong>Why this is endothermic</strong><br><strong>Clue:</strong> Heat is placed on the reactant side.<br><strong>Rule:</strong> That means the reaction absorbs energy and is <strong>endothermic</strong>.'
  },
  {
    prompt: 'HCl(aq) + NaOH(aq) &rarr; NaCl(aq) + <span class="ion-group">H<span class="chem-sub">2</span>O</span>(l), &Delta;H<sub>rxn</sub> = &minus;57.3 kJ',
    answer: 'exo',
    feedbackCorrect: 'Right &mdash; a negative enthalpy change means the neutralization releases heat and is exothermic.',
    feedbackIncorrect: 'Not quite &mdash; this &Delta;H value is negative, so energy is released.',
    reveal: '<strong>Why this is exothermic</strong><br><strong>Clue:</strong> &Delta;H is negative.<br><strong>Rule:</strong> Negative enthalpy change means the process is <strong>exothermic</strong>.'
  }
];

let thermoClassifyOrder = [];
let thermoClassifyOrderPosition = 0;
let thermoClassifyLastCaseIndex = null;
let thermoClassifyChoice = null;
let thermoClassifyChecked = false;
let thermoChoiceOrder = [];

function getCurrentThermoClassifyCaseIndex() {
  if (!thermoClassifyOrder.length || thermoClassifyOrderPosition >= thermoClassifyOrder.length) {
    thermoClassifyOrder = createPracticeOrder(
      THERMO_CLASSIFY_CASES.map(function(_, index) { return index; }),
      thermoClassifyOrder,
      thermoClassifyLastCaseIndex
    );
    thermoClassifyOrderPosition = 0;
  }
  return thermoClassifyOrder[thermoClassifyOrderPosition];
}

function renderThermoClassifyCase() {
  const current = THERMO_CLASSIFY_CASES[getCurrentThermoClassifyCaseIndex()];
  document.getElementById('thermoClassifyPrompt').innerHTML = current.prompt;
  setToolFeedback('thermoClassifyFeedback', 'Choose one answer, then click Check.', 'pending');
  document.getElementById('thermoClassifyRevealBox').hidden = true;
  document.getElementById('thermoClassifyRevealBox').innerHTML = '';
  document.getElementById('thermoClassifyRevealBox').dataset.state = 'info';
  document.getElementById('thermoClassifyReveal').disabled = true;
  document.getElementById('thermoClassifyNext').disabled = true;
  thermoClassifyChoice = null;
  thermoClassifyChecked = false;
  document.querySelectorAll('[data-thermo-answer]').forEach(function(btn) {
    btn.classList.remove('active');
  });
  thermoChoiceOrder = shuffleChoiceButtons('#thermoClassifyChoices', '.segment-btn', thermoChoiceOrder);
}

function selectThermoClassifyChoice(btn) {
  if (thermoClassifyChecked) return;
  thermoClassifyChoice = btn.dataset.thermoAnswer;
  document.querySelectorAll('[data-thermo-answer]').forEach(function(choiceBtn) {
    choiceBtn.classList.remove('active');
  });
  btn.classList.add('active');
}

function checkThermoClassifyChoice() {
  if (!thermoClassifyChoice) {
    setToolFeedback('thermoClassifyFeedback', 'Choose exothermic or endothermic first.', 'info');
    return;
  }
  thermoClassifyChecked = true;
  const current = THERMO_CLASSIFY_CASES[getCurrentThermoClassifyCaseIndex()];
  const isCorrect = thermoClassifyChoice === current.answer;
  setToolFeedback('thermoClassifyFeedback', isCorrect ? current.feedbackCorrect : current.feedbackIncorrect, isCorrect ? 'correct' : 'incorrect');
  document.getElementById('thermoClassifyReveal').disabled = false;
  document.getElementById('thermoClassifyNext').disabled = false;
}

function revealThermoClassifyReasoning() {
  if (!thermoClassifyChecked) return;
  const current = THERMO_CLASSIFY_CASES[getCurrentThermoClassifyCaseIndex()];
  const box = document.getElementById('thermoClassifyRevealBox');
  setToolFeedback(box, current.reveal, 'info');
  box.hidden = false;
}

function nextThermoClassifyCase() {
  thermoClassifyLastCaseIndex = getCurrentThermoClassifyCaseIndex();
  thermoClassifyOrderPosition += 1;
  renderThermoClassifyCase();
}

function bindUnit11EventHandlers() {
  document.querySelectorAll('.nav-tabs .tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const targetTab = btn.dataset.tab;
      if (targetTab) showTab(targetTab, btn);
    });
  });

  document.querySelectorAll('#equationChoices .segment-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      selectEquationChoice(btn);
    });
  });
  document.getElementById('equationCheck').addEventListener('click', checkEquationChoice);
  document.getElementById('equationReveal').addEventListener('click', revealEquationReasoning);
  document.getElementById('equationNext').addEventListener('click', nextEquationCase);

  document.querySelectorAll('[data-curve-answer]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      selectCurveChoice(btn);
    });
  });
  document.getElementById('curveCheck').addEventListener('click', checkCurveChoice);
  document.getElementById('curveReveal').addEventListener('click', revealCurveReasoning);
  document.getElementById('curveNext').addEventListener('click', nextCurveSegment);

  document.querySelectorAll('.profile-btn[data-profile]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const profile = btn.dataset.profile;
      if (profile) setReactionProfile(profile, btn);
    });
  });
  document.querySelectorAll('[data-profile-answer]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      selectProfileChoice(btn);
    });
  });
  document.getElementById('profileCheck').addEventListener('click', checkProfileChoice);
  document.getElementById('profileReveal').addEventListener('click', revealProfileReasoning);
  document.getElementById('profileNext').addEventListener('click', cycleReactionProfile);

  document.querySelectorAll('[data-thermo-answer]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      selectThermoClassifyChoice(btn);
    });
  });
  document.getElementById('thermoClassifyCheck').addEventListener('click', checkThermoClassifyChoice);
  document.getElementById('thermoClassifyReveal').addEventListener('click', revealThermoClassifyReasoning);
  document.getElementById('thermoClassifyNext').addEventListener('click', nextThermoClassifyCase);
}

// ── 5. INITIALISE ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  bindUnit11EventHandlers();
  renderEquationCase();
  renderCurveSegment();
  profileOrder = createPracticeOrder(PROFILE_SEQUENCE, profileOrder, profileLastType);
  profileOrderPosition = 1;
  setReactionProfile(profileOrder[0], document.querySelector('.profile-btn[data-profile="' + profileOrder[0] + '"]'));
  renderThermoClassifyCase();
});
