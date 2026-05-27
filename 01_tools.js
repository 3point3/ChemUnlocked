/* ══════════════════════════════════════════
   Unit 01 Explore Tools
══════════════════════════════════════════ */

const cylinderState = {
  size: 25,
  volume: 42.0,
  interval: 1,
  labelStep: 10,
  choices: [],
  selected: '',
  checked: false
};

const balProc = {
  state: 'empty',
  containerMass: 0,
  sampleMass: 0
};

const sigFigCountTasks = [
  {
    prompt: 'How many significant figures are in 0.00470?',
    options: ['2', '3', '4', 'Ambiguous'],
    answer: '3',
    correctFeedback: 'Right — the leading zeros only locate the decimal, but the trailing zero after 7 counts because it shows measured precision.',
    incorrectFeedback: 'Not quite — do not count the leading zeros. Start with 4 and 7, then include the trailing zero because it comes after a decimal measurement.'
  },
  {
    prompt: 'How many significant figures are in 2500?',
    options: ['2', '3', '4', '5'],
    answer: '2',
    correctFeedback: 'Right — without a decimal point, the trailing zeros are placeholders, so only 2 and 5 count.',
    incorrectFeedback: 'Not quite — those last zeros are placeholders because there is no decimal point shown. Count only the 2 and 5.'
  },
  {
    prompt: 'How many significant figures are in 2.50 x 10^3?',
    options: ['2', '3', '4', 'Ambiguous'],
    answer: '3',
    correctFeedback: 'Right — scientific notation makes the measured digits explicit, so 2.50 has three significant figures.',
    incorrectFeedback: 'Not quite — in scientific notation, only the coefficient controls the count. The coefficient 2.50 has three significant figures.'
  }
];

const sigFigRuleTasks = [
  {
    prompt: 'Which rounding rule applies to 12.36 + 1.2?',
    options: ['Fewest significant figures', 'Least precise decimal place', 'Exact count rule', 'No rounding rule needed'],
    answer: 'Least precise decimal place',
    correctFeedback: 'Right — addition is limited by the least precise decimal place, so the tenths place controls the final answer.',
    incorrectFeedback: 'Not quite — this is addition, so check decimal places, not total significant figures. Find the number with the least precise decimal place first.'
  },
  {
    prompt: 'Which rounding rule applies to 3.21 ÷ 1.5?',
    options: ['Fewest significant figures', 'Least precise decimal place', 'Exact count rule', 'No rounding rule needed'],
    answer: 'Fewest significant figures',
    correctFeedback: 'Right — division is limited by the measurement with the fewest significant figures, so 1.5 controls the final answer.',
    incorrectFeedback: 'Not quite — this is division, so the sig-fig rule applies. Count significant figures in each measurement before rounding.'
  }
];

let currentSigFigCountTask = 0;
let currentSigFigRuleTask = 0;
let selectedSigFigCountChoice = '';
let selectedSigFigRuleChoice = '';

function setCylinderFeedback(message, state = 'pending') {
  const feedback = document.getElementById('cylFeedback');
  if (!feedback) return;
  feedback.textContent = message;
  feedback.dataset.state = state;
}

function cylinderConfig(size) {
  if (size === 10) return { interval: 1, labelStep: 1, min: 1.1, max: 9.8 };
  if (size === 25) return { interval: 1, labelStep: 5, min: 1.2, max: 24.7 };
  return { interval: 1, labelStep: 10, min: 2.3, max: 49.6 };
}

function randomTenths(min, max) {
  const start = Math.round(min * 10);
  const end = Math.round(max * 10);
  return (Math.floor(Math.random() * (end - start + 1)) + start) / 10;
}

function newCylinderReading() {
  const size = parseInt(document.getElementById('cylSize').value, 10);
  const config = cylinderConfig(size);
  cylinderState.size = size;
  cylinderState.interval = config.interval;
  cylinderState.labelStep = config.labelStep;
  cylinderState.volume = randomTenths(config.min, config.max);
  cylinderState.selected = '';
  cylinderState.checked = false;
  cylinderState.choices = buildCylinderChoices(cylinderState.volume, cylinderState.size);

  setCylinderFeedback('Choose a reading above, then click Check.', 'pending');
  document.getElementById('cylTip').textContent = 'Do not reveal the answer until you commit to a reading.';
  document.getElementById('cylRevealBox').hidden = true;
  document.getElementById('cylRevealBtn').disabled = true;
  document.getElementById('cylNextBtn').disabled = true;
  renderCylinderChoices();
  drawCylinder(cylinderState.size, cylinderState.volume, cylinderState.interval, cylinderState.labelStep);
}

function buildCylinderChoices(correct, size) {
  const rounded = Math.round(correct);
  const topRead = Math.min(size - 0.1, +(correct + 0.8).toFixed(1));
  const offByOne = correct >= size - 1 ? +(correct - 1.0).toFixed(1) : +(correct + 1.0).toFixed(1);
  const options = [
    { value: correct.toFixed(1), kind: 'correct' },
    { value: rounded.toFixed(0), kind: 'no-estimate' },
    { value: topRead.toFixed(1), kind: 'top-meniscus' },
    { value: offByOne.toFixed(1), kind: 'wrong-interval' }
  ];
  const unique = [];
  const seen = new Set();
  options.forEach((option) => {
    if (!seen.has(option.value)) {
      seen.add(option.value);
      unique.push(option);
    }
  });
  return unique.sort(() => Math.random() - 0.5);
}

function renderCylinderChoices() {
  const container = document.getElementById('cylChoiceButtons');
  if (!container) return;
  container.innerHTML = '';
  cylinderState.choices.forEach((choice) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'segment-btn tool-choice-btn explore-choice';
    button.dataset.value = choice.value;
    button.setAttribute('aria-pressed', 'false');
    button.textContent = `${choice.value} mL`;
    button.addEventListener('click', () => selectCylinderChoice(choice.value));
    container.appendChild(button);
  });
}

function selectCylinderChoice(value) {
  cylinderState.selected = value;
  document.querySelectorAll('#cylChoiceButtons .tool-choice-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.value === value);
    button.setAttribute('aria-pressed', button.dataset.value === value ? 'true' : 'false');
  });
}

function drawCylinder(size, vol, interval, labelStep) {
  const svg = document.getElementById('cylSVG');
  const bodyTop = 24;
  const bodyBot = 300;
  const bodyH = bodyBot - bodyTop;
  const lx = 42;
  const rx = 98;
  const meniscusDepth = 16;
  // Map the reported volume to the lowest visible point of the meniscus.
  const meniscusBottomY = bodyBot - (vol / size) * bodyH;
  const fillTop = meniscusBottomY - meniscusDepth / 2;
  const meniscusControl = fillTop + meniscusDepth;

  let lines = '';
  for (let v = 0; v <= size; v += interval) {
    const y = bodyBot - (v / size) * bodyH;
    const isLabel = v % labelStep === 0;
    const x1 = isLabel ? lx : lx + 16;
    const sw = isLabel ? 2 : 1.15;
    lines += `<line x1="${x1}" y1="${y.toFixed(1)}" x2="${rx}" y2="${y.toFixed(1)}" stroke="#475569" stroke-width="${sw}"/>`;
    if (isLabel && v > 0) {
      lines += `<text x="${lx - 6}" y="${(y + 4.5).toFixed(1)}" text-anchor="end" font-size="11" fill="#334155" font-family="DM Mono,monospace">${v}</text>`;
    }
  }

  svg.innerHTML = `
    <title>Graduated cylinder showing ${cylinderState.volume.toFixed(1)} mL</title>
    <rect x="12" y="10" width="116" height="320" rx="22" fill="#ffffff"/>
    <rect x="${lx}" y="${bodyTop}" width="${rx - lx}" height="${bodyH}" rx="8" fill="#e0f2fe" stroke="#475569" stroke-width="2.4"/>
    ${lines}
    <path d="M${lx + 1},${fillTop.toFixed(1)} Q${(lx + rx) / 2},${meniscusControl.toFixed(1)} ${rx - 1},${fillTop.toFixed(1)} L${rx - 1},${bodyBot} L${lx + 1},${bodyBot} Z" fill="#bae6fd" opacity="0.75"/>
    <path d="M${lx + 1},${fillTop.toFixed(1)} Q${(lx + rx) / 2},${meniscusControl.toFixed(1)} ${rx - 1},${fillTop.toFixed(1)}" fill="none" stroke="#0ea5e9" stroke-width="2"/>
    <rect x="${lx - 8}" y="${bodyBot}" width="${rx - lx + 16}" height="16" rx="4" fill="#94a3b8" stroke="#475569" stroke-width="1.3"/>
  `;
}

function checkCylinderAnswer() {
  const correct = cylinderState.volume;
  const guess = parseFloat(cylinderState.selected);
  const chosen = cylinderState.choices.find((choice) => choice.value === cylinderState.selected);
  const tip = document.getElementById('cylTip');
  const revealBtn = document.getElementById('cylRevealBtn');
  const nextBtn = document.getElementById('cylNextBtn');

  if (!cylinderState.selected || Number.isNaN(guess)) {
    setCylinderFeedback('Choose one reading before checking.', 'pending');
    tip.textContent = 'Start by deciding which option matches the bottom of the meniscus.';
    return;
  }

  cylinderState.checked = true;
  if (revealBtn) revealBtn.disabled = false;
  if (nextBtn) nextBtn.disabled = false;

  if (Math.abs(guess - correct) < 0.05) {
    setCylinderFeedback('Correct — you read the bottom of the meniscus and kept one estimated digit. Rule: record all certain digits plus one estimated digit.', 'correct');
    tip.textContent = 'That is the correct graduated-cylinder reading rule.';
    return;
  }

  if (chosen && chosen.kind === 'no-estimate') {
    setCylinderFeedback('Incorrect — that choice drops the estimated digit. Rule: read one place beyond the smallest marked interval.', 'incorrect');
    tip.textContent = 'Next step: stay between the two nearest lines and choose the option with one decimal place.';
    return;
  }

  if (chosen && chosen.kind === 'top-meniscus') {
    setCylinderFeedback('Incorrect — that choice reads the top of the meniscus. Rule: for most aqueous solutions, read the bottom of the curve.', 'incorrect');
    tip.textContent = 'Next step: look at the lowest point of the meniscus, not the highest point.';
    return;
  }

  setCylinderFeedback('Incorrect — that choice misses the interval where the meniscus sits. Rule: find the two nearest marked lines first, then estimate one more digit.', 'incorrect');
  tip.textContent = `Next step: the correct reading is between ${Math.floor(correct)} mL and ${Math.floor(correct) + 1} mL.`;
}

function revealCylinderAnswer() {
  if (!cylinderState.checked) return;
  document.getElementById('cylRevealBox').hidden = false;
  document.getElementById('cylRevealText').textContent = `${cylinderState.volume.toFixed(1)} mL. Read the bottom of the meniscus, then record one estimated digit because the smallest marked interval is ${cylinderState.interval} mL.`;
}

function balRandMass(min, max) {
  return Math.round((Math.random() * (max - min) + min) * 1000) / 1000;
}

function balGetDisplayText() {
  const s = balProc;
  switch (s.state) {
    case 'container_on':          return s.containerMass.toFixed(3);
    case 'container_tared':       return '0.000';
    case 'sample_added_tared':    return s.sampleMass.toFixed(3);
    case 'sample_added_no_tare':  return (s.containerMass + s.sampleMass).toFixed(3);
    case 'container_removed':     return (-s.containerMass).toFixed(3);
    default:                      return '0.000';
  }
}

function balSyncVisual() {
  const s = balProc;
  const showBoat   = ['container_on','container_tared','sample_added_tared','sample_added_no_tare'].includes(s.state);
  const showSample = ['sample_added_tared','sample_added_no_tare'].includes(s.state);
  const dispText   = balGetDisplayText();
  const isWarn     = dispText.startsWith('-') || s.state === 'sample_added_no_tare';

  const boat    = document.getElementById('weighBoat');
  const powder  = document.getElementById('samplePowder');
  const disp    = document.getElementById('balDisplay');
  const modeLbl = document.getElementById('balModeLabel');
  const stateLbl = document.getElementById('balStateLabel');

  if (boat)  boat.setAttribute('opacity', showBoat ? '1' : '0');
  if (powder) powder.setAttribute('opacity', showSample ? '1' : '0');
  if (disp) {
    disp.textContent = dispText;
    disp.setAttribute('fill', isWarn ? '#f59e0b' : '#1ecc70');
  }
  if (modeLbl) {
    const tared = ['container_tared','sample_added_tared'].includes(s.state);
    modeLbl.textContent = tared ? 'TARE ON' : 'TARE OFF';
  }
  const stateLabels = {
    empty:                'PAN EMPTY',
    container_on:         'CONTAINER ON PAN',
    container_tared:      'TARED — ADD SAMPLE',
    sample_added_tared:   'READING USABLE ✓',
    sample_added_no_tare: 'READING NOT USABLE ✗',
    container_removed:    'INVALID STATE ✗'
  };
  const balSvg = document.getElementById('balSVG');
  if (balSvg) {
    let title = balSvg.querySelector('title');
    if (!title) {
      title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      balSvg.insertBefore(title, balSvg.firstChild);
    }
    title.textContent = `Electronic balance showing ${dispText} grams. State: ${stateLabels[s.state] || 'UNKNOWN'}.`;
  }
  if (stateLbl) stateLbl.textContent = stateLabels[s.state] || '';
}

function balSetButtons() {
  const s = balProc.state;
  const states = (id, enabled) => {
    const el = document.getElementById(id);
    if (el) el.disabled = !enabled;
  };
  states('btnPlace',     s === 'empty');
  states('btnTare',      s === 'container_on');
  states('btnAddSample', s === 'container_on' || s === 'container_tared');
  states('btnRemove',    ['container_on','container_tared','sample_added_tared','sample_added_no_tare','container_removed'].includes(s));
}

function balLog(msg) {
  const log = document.getElementById('balanceLog');
  if (!log) return;
  log.innerHTML += `&gt; ${msg}<br>`;
  log.scrollTop = log.scrollHeight;
}

function balSetMsg(msg, state = 'info') {
  const el = document.getElementById('balStepMsg');
  if (!el) return;
  el.textContent = msg;
  el.dataset.state = state;
}

function balSetFeedback(message, state = 'pending') {
  const el = document.getElementById('balanceFeedback');
  if (!el) return;
  el.textContent = message;
  el.dataset.state = state;
}

function balResetReview() {
  const reveal = document.getElementById('balanceReveal');
  const support = document.getElementById('balanceSupport');
  const revealBtn = document.getElementById('balanceRevealBtn');
  const nextBtn = document.getElementById('balanceNextBtn');
  if (reveal) reveal.hidden = true;
  if (support) support.hidden = true;
  if (revealBtn) revealBtn.disabled = true;
  if (nextBtn) nextBtn.disabled = true;
  balSetFeedback('Work through the procedure, then click Check.', 'pending');
}

function checkBalanceWorkflow() {
  const revealBtn = document.getElementById('balanceRevealBtn');
  const nextBtn = document.getElementById('balanceNextBtn');
  const revealList = document.getElementById('balanceRevealList');
  const state = balProc.state;

  if (state === 'empty' || state === 'container_on' || state === 'container_tared') {
    balSetFeedback('Finish the weighing sequence before checking. The sample must be added before you can judge the reading.', 'pending');
    return;
  }

  if (revealBtn) revealBtn.disabled = false;
  if (nextBtn) nextBtn.disabled = false;

  if (state === 'sample_added_tared') {
    balSetFeedback(`Correct — ${balProc.sampleMass.toFixed(3)} g is usable because TARE removed the container mass first. Rule: the final display must show the sample only.`, 'correct');
    if (revealList) {
      revealList.innerHTML = `
        <li>The weigh boat was placed on the pan before the sample was added.</li>
        <li>Pressing TARE set the display to <strong>0.000 g</strong>, so the container mass was removed electronically.</li>
        <li>Adding the sample after taring made the display show <strong>${balProc.sampleMass.toFixed(3)} g</strong> for the sample only.</li>
      `;
    }
    return;
  }

  if (state === 'sample_added_no_tare') {
    balSetFeedback('Incorrect — the displayed mass still includes the container. Rule: place the container first, press TARE, then add the sample. Next step: restart and tare before adding anything.', 'incorrect');
    if (revealList) {
      revealList.innerHTML = `
        <li>The sample was added while the balance was still showing the container mass.</li>
        <li>The final display equals <strong>container + sample</strong>, so it is not a usable sample-only mass.</li>
        <li>The correct fix is to restart, place the container, press TARE, and then add the sample.</li>
      `;
    }
    return;
  }

  if (state === 'container_removed') {
    balSetFeedback('Incorrect — removing a tared container breaks the zero point. Rule: keep the tared container on the pan while you add the sample. Next step: restart and leave the container in place after TARE.', 'incorrect');
    if (revealList) {
      revealList.innerHTML = `
        <li>After TARE, the balance treats the container mass as the new zero point.</li>
        <li>Removing that container produces a negative reading, which means the setup is no longer valid.</li>
        <li>Restart the measurement and keep the tared container on the pan while adding the sample.</li>
      `;
    }
  }
}

function revealBalanceReasoning() {
  const reveal = document.getElementById('balanceReveal');
  const support = document.getElementById('balanceSupport');
  if (reveal) reveal.hidden = false;
  if (support) support.hidden = false;
}

function balAction(action) {
  const s = balProc;

  switch (action) {
    case 'place':
      if (s.state !== 'empty') return;
      s.state = 'container_on';
      balLog(`Place container → ${s.containerMass.toFixed(3)} g`);
      balSetMsg(`Display shows ${s.containerMass.toFixed(3)} g — the container's mass. Press TARE to zero it out before adding your sample.`, 'info');
      break;

    case 'tare':
      if (s.state !== 'container_on') return;
      s.state = 'container_tared';
      balLog('Press TARE → 0.000 g');
      balSetMsg('Display zeroed. The container mass is subtracted automatically from all future readings. Now add your sample.', 'info');
      break;

    case 'add':
      if (s.state === 'container_tared') {
        s.state = 'sample_added_tared';
        balLog(`Add sample → ${s.sampleMass.toFixed(3)} g ✓ usable`);
        balSetMsg(`Display reads ${s.sampleMass.toFixed(3)} g — sample mass only. Correct procedure. Record all digits shown.`, 'ok');
      } else if (s.state === 'container_on') {
        s.state = 'sample_added_no_tare';
        const combined = (s.containerMass + s.sampleMass).toFixed(3);
        balLog(`Add sample without TARE → ${combined} g ✗ not usable`);
        balSetMsg(`Display reads ${combined} g — container + sample combined. You cannot separate them electronically now. Always TARE first.`, 'warn');
      }
      break;

    case 'remove':
      if (s.state === 'container_tared') {
        s.state = 'container_removed';
        const neg = (-s.containerMass).toFixed(3);
        balLog(`Remove container after TARE → ${neg} g ✗ invalid`);
        balSetMsg(`Display goes to ${neg} g — negative because the balance expected the container to still be there. Removing a tared container invalidates the reading.`, 'error');
      } else if (['container_on','sample_added_tared','sample_added_no_tare','container_removed'].includes(s.state)) {
        balLog('Clear pan → 0.000 g');
        s.state = 'empty';
        balSetMsg('Pan cleared. Place the container again to start a new measurement.', 'info');
      }
      break;

    case 'restart':
      s.containerMass = balRandMass(8, 50);
      s.sampleMass    = balRandMass(1, 15);
      s.state         = 'empty';
      const log = document.getElementById('balanceLog');
      if (log) log.innerHTML = '<span class="balance-log-comment">// Action log</span><br>';
      balSetMsg('New scenario. Place the container on the pan to begin.', 'info');
      break;
  }

  balSyncVisual();
  balSetButtons();
  balResetReview();
}

function balInit() {
  balProc.containerMass = balRandMass(8, 50);
  balProc.sampleMass    = balRandMass(1, 15);
  balProc.state         = 'empty';
  balSyncVisual();
  balSetButtons();
  balSetMsg('Place the container on the pan to begin.', 'info');
  balResetReview();
  const log = document.getElementById('balanceLog');
  if (log) log.innerHTML = '<span class="balance-log-comment">// Action log</span><br>';
}

function newSigFigCountTask() {
  currentSigFigCountTask = Math.floor(Math.random() * sigFigCountTasks.length);
  selectedSigFigCountChoice = '';
  const task = sigFigCountTasks[currentSigFigCountTask];
  const container = document.getElementById('sigfigCountChoices');
  const result = document.getElementById('sigfigCountResult');
  container.innerHTML = '';
  task.options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'segment-btn tool-choice-btn explore-choice';
    button.dataset.value = option;
    button.setAttribute('aria-pressed', 'false');
    button.textContent = option;
    button.addEventListener('click', () => selectSigFigCountChoice(option));
    container.appendChild(button);
  });
  document.getElementById('sigfigCountPrompt').textContent = task.prompt;
  result.textContent = 'Choose one answer, then click Check.';
  result.dataset.state = 'pending';
  document.getElementById('sigfigCountExplain').textContent = '';
  document.getElementById('sigfigCountRevealBtn').disabled = true;
  document.getElementById('sigfigCountNextBtn').disabled = true;
}

function selectSigFigCountChoice(value) {
  selectedSigFigCountChoice = value;
  document.querySelectorAll('#sigfigCountChoices .tool-choice-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.value === value);
    button.setAttribute('aria-pressed', button.dataset.value === value ? 'true' : 'false');
  });
}

function checkSigFigCountTask() {
  const task = sigFigCountTasks[currentSigFigCountTask];
  const choice = selectedSigFigCountChoice;
  const result = document.getElementById('sigfigCountResult');

  if (!choice) {
    result.textContent = 'Choose one answer before checking.';
    result.dataset.state = 'pending';
    document.getElementById('sigfigCountExplain').textContent = '';
    return;
  }

  document.getElementById('sigfigCountRevealBtn').disabled = false;
  document.getElementById('sigfigCountNextBtn').disabled = false;

  if (choice === task.answer) {
    result.textContent = `Correct — ${task.correctFeedback}`;
    result.dataset.state = 'correct';
    document.getElementById('sigfigCountExplain').textContent = 'Rule: count only digits that communicate measured precision.';
    return;
  }

  result.textContent = `Incorrect — ${task.incorrectFeedback}`;
  result.dataset.state = 'incorrect';
  document.getElementById('sigfigCountExplain').textContent = 'Next step: decide whether each zero is just a placeholder or part of the measured precision.';
}

function revealSigFigCountTask() {
  if (document.getElementById('sigfigCountRevealBtn').disabled) return;
  const task = sigFigCountTasks[currentSigFigCountTask];
  const result = document.getElementById('sigfigCountResult');
  result.textContent = `Correct answer: ${task.answer}`;
  result.dataset.state = 'info';
  document.getElementById('sigfigCountExplain').textContent = `${task.correctFeedback} Rule: leading zeros never count, but trailing zeros count only when the number format shows measured precision.`;
}

function newSigFigRuleTask() {
  currentSigFigRuleTask = Math.floor(Math.random() * sigFigRuleTasks.length);
  selectedSigFigRuleChoice = '';
  const task = sigFigRuleTasks[currentSigFigRuleTask];
  const container = document.getElementById('sigfigRuleChoices');
  const result = document.getElementById('sigfigRuleResult');
  container.innerHTML = '';
  task.options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'segment-btn tool-choice-btn explore-choice';
    button.dataset.value = option;
    button.setAttribute('aria-pressed', 'false');
    button.textContent = option;
    button.addEventListener('click', () => selectSigFigRuleChoice(option));
    container.appendChild(button);
  });
  document.getElementById('sigfigRulePrompt').textContent = task.prompt;
  result.textContent = 'Choose one rule, then click Check.';
  result.dataset.state = 'pending';
  document.getElementById('sigfigRuleExplain').textContent = '';
  document.getElementById('sigfigRuleRevealBtn').disabled = true;
  document.getElementById('sigfigRuleNextBtn').disabled = true;
}

function selectSigFigRuleChoice(value) {
  selectedSigFigRuleChoice = value;
  document.querySelectorAll('#sigfigRuleChoices .tool-choice-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.value === value);
    button.setAttribute('aria-pressed', button.dataset.value === value ? 'true' : 'false');
  });
}

function checkSigFigRuleTask() {
  const task = sigFigRuleTasks[currentSigFigRuleTask];
  const choice = selectedSigFigRuleChoice;
  const result = document.getElementById('sigfigRuleResult');

  if (!choice) {
    result.textContent = 'Choose one answer before checking.';
    result.dataset.state = 'pending';
    document.getElementById('sigfigRuleExplain').textContent = '';
    return;
  }

  document.getElementById('sigfigRuleRevealBtn').disabled = false;
  document.getElementById('sigfigRuleNextBtn').disabled = false;

  if (choice === task.answer) {
    result.textContent = `Correct — ${task.correctFeedback}`;
    result.dataset.state = 'correct';
    document.getElementById('sigfigRuleExplain').textContent = 'Rule: addition/subtraction uses decimal place; multiplication/division uses significant figures.';
    return;
  }

  result.textContent = `Incorrect — ${task.incorrectFeedback}`;
  result.dataset.state = 'incorrect';
  document.getElementById('sigfigRuleExplain').textContent = 'Next step: identify the operation first, then match it to the correct rounding rule.';
}

function revealSigFigRuleTask() {
  if (document.getElementById('sigfigRuleRevealBtn').disabled) return;
  const task = sigFigRuleTasks[currentSigFigRuleTask];
  const result = document.getElementById('sigfigRuleResult');
  result.textContent = `Correct answer: ${task.answer}`;
  result.dataset.state = 'info';
  document.getElementById('sigfigRuleExplain').textContent = `${task.correctFeedback} Rule: decide the operation type first so you know whether decimal places or sig figs control the final answer.`;
}

document.addEventListener('DOMContentLoaded', () => {
  newCylinderReading();
  balInit();
  newSigFigCountTask();
  newSigFigRuleTask();
});
