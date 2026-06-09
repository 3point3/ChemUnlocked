// ── TOOL LOGIC ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  function setToolFeedbackState(el, state) {
    if (el) el.dataset.state = state;
  }

  function setToolButtonState(button, enabled) {
    if (button) button.disabled = !enabled;
  }

  function toggleToolBlock(el, show) {
    if (el) el.hidden = !show;
  }

  function shuffle(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function renderChoiceMarkup(name, choice, value) {
    return `<button type="button" class="segment-btn tool-choice-btn explore-choice" data-choice-group="${name}" data-choice-value="${value}" aria-pressed="false">${choice.label}</button>`;
  }

  function activateChoice(container, value) {
    if (!container) return;
    container.dataset.selectedValue = String(value);
    Array.from(container.querySelectorAll('.explore-choice')).forEach(function (button) {
      const isActive = button.dataset.choiceValue === String(value);
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function clearChoiceSelection(container) {
    if (!container) return;
    delete container.dataset.selectedValue;
    Array.from(container.querySelectorAll('.explore-choice')).forEach(function (button) {
      button.classList.remove('active');
      button.setAttribute('aria-pressed', 'false');
    });
  }

  function getSelectedChoiceValue(container) {
    return container ? container.dataset.selectedValue : '';
  }

  function bindChoiceButtons(container) {
    if (!container) return;
    container.addEventListener('click', function (event) {
      const button = event.target.closest('.explore-choice');
      if (!button || !container.contains(button)) return;
      activateChoice(container, button.dataset.choiceValue);
      container.dispatchEvent(new Event('change'));
    });
  }

  // --- Tool 1: Atom Builder ---
  const tool1Prompt = document.getElementById('tool1Prompt');
  const tool1Choices = document.getElementById('tool1Choices');
  const newTool1 = document.getElementById('newTool1');
  const checkTool1 = document.getElementById('checkTool1');
  const revealTool1 = document.getElementById('revealTool1');
  const tool1Result = document.getElementById('tool1Result');
  const tool1Reveal = document.getElementById('tool1Reveal');
  const tool1RevealContent = document.getElementById('tool1RevealContent');
  const tool1Support = document.getElementById('tool1Support');
  const tool1ProblemBank = [
    { symbol: 'H', name: 'hydrogen', Z: 1, masses: [1, 2, 3], charges: [0, 0, 1, -1] },
    { symbol: 'He', name: 'helium', Z: 2, masses: [3, 4], charges: [0] },
    { symbol: 'Li', name: 'lithium', Z: 3, masses: [6, 7], charges: [0, 1] },
    { symbol: 'Be', name: 'beryllium', Z: 4, masses: [9], charges: [0, 2] },
    { symbol: 'B', name: 'boron', Z: 5, masses: [10, 11], charges: [0, 3] },
    { symbol: 'C', name: 'carbon', Z: 6, masses: [12, 13, 14], charges: [0, 4, -4] },
    { symbol: 'N', name: 'nitrogen', Z: 7, masses: [14, 15], charges: [0, -3, 3] },
    { symbol: 'O', name: 'oxygen', Z: 8, masses: [16, 17, 18], charges: [0, -2] },
    { symbol: 'F', name: 'fluorine', Z: 9, masses: [19], charges: [0, -1] },
    { symbol: 'Ne', name: 'neon', Z: 10, masses: [20, 21, 22], charges: [0] },
    { symbol: 'Na', name: 'sodium', Z: 11, masses: [23], charges: [0, 1] },
    { symbol: 'Mg', name: 'magnesium', Z: 12, masses: [24, 25, 26], charges: [0, 2] },
    { symbol: 'Al', name: 'aluminum', Z: 13, masses: [27], charges: [0, 3] },
    { symbol: 'Si', name: 'silicon', Z: 14, masses: [28, 29, 30], charges: [0, 4, -4] },
    { symbol: 'P', name: 'phosphorus', Z: 15, masses: [31], charges: [0, -3, 3] },
    { symbol: 'S', name: 'sulfur', Z: 16, masses: [32, 33, 34, 36], charges: [0, -2] },
    { symbol: 'Cl', name: 'chlorine', Z: 17, masses: [35, 37], charges: [0, -1, 1, 5, 7] },
    { symbol: 'Ar', name: 'argon', Z: 18, masses: [36, 38, 40], charges: [0] },
    { symbol: 'K', name: 'potassium', Z: 19, masses: [39, 40, 41], charges: [0, 1] },
    { symbol: 'Ca', name: 'calcium', Z: 20, masses: [40, 42, 44], charges: [0, 2] },
    { symbol: 'Fe', name: 'iron', Z: 26, masses: [54, 56, 57, 58], charges: [0, 2, 3] },
    { symbol: 'Cu', name: 'copper', Z: 29, masses: [63, 65], charges: [0, 1, 2] },
    { symbol: 'Zn', name: 'zinc', Z: 30, masses: [64, 66, 68, 70], charges: [0, 2] }
  ];
  let tool1Current = null;

  if (!tool1Prompt) return;

  function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function buildTool1NotationMarkup(data) {
    const chargeMarkup = data.charge === 0 ? '' : `<span class="nuclear-notation-charge">${data.charge > 0 ? `${data.charge}+` : `${Math.abs(data.charge)}-`}</span>`;
    return `<div class="tool-notation-preview">
      <span class="nuclear-notation" aria-label="${data.symbol} with mass number ${data.A}, atomic number ${data.Z}${data.charge === 0 ? '' : `, ${data.chargeStr}`}">
        <span class="nuclear-notation-stack"><span>${data.A}</span><span>${data.Z}</span></span><span class="nuclear-notation-symbol">${data.symbol}</span>${chargeMarkup}
      </span>
      <div class="tool-notation-copy">
        <strong>Nuclear notation</strong>
        <span>${data.symbol}-${data.A}${data.charge === 0 ? '' : `, ${data.chargeStr}`}</span>
      </div>
    </div>`;
  }

  function resetTool1Result() {
    tool1Result.innerHTML = 'Choose one complete particle-count set first: protons = Z, neutrons = A − Z, electrons = Z − charge.';
    setToolFeedbackState(tool1Result, 'pending');
    toggleToolBlock(tool1Reveal, false);
    toggleToolBlock(tool1Support, false);
    setToolButtonState(revealTool1, false);
    setToolButtonState(newTool1, false);
  }

  function makeTool1Problem() {
    const base = getRandomItem(tool1ProblemBank);
    const A = getRandomItem(base.masses);
    const charge = getRandomItem(base.charges);
    const neutrons = A - base.Z;
    const electrons = base.Z - charge;
    const chargeStr = charge === 0 ? 'neutral atom' : (charge > 0 ? `${charge}+ ion` : `${Math.abs(charge)}- ion`);
    return {
      ...base,
      A,
      charge,
      neutrons,
      electrons,
      chargeStr,
      notationMarkup: '',
      choices: []
    };
  }

  function buildTool1Choices(problem) {
    const correct = {
      p: problem.Z,
      n: problem.neutrons,
      e: problem.electrons,
      label: `${problem.Z} p, ${problem.neutrons} n, ${problem.electrons} e`,
      mistake: 'correct'
    };
    const candidates = [
      {
        p: problem.A,
        n: problem.neutrons,
        e: problem.electrons,
        label: `${problem.A} p, ${problem.neutrons} n, ${problem.electrons} e`,
        mistake: 'mass-for-protons'
      },
      {
        p: problem.Z,
        n: problem.A,
        e: problem.electrons,
        label: `${problem.Z} p, ${problem.A} n, ${problem.electrons} e`,
        mistake: 'mass-for-neutrons'
      },
      {
        p: problem.Z,
        n: problem.neutrons,
        e: problem.charge === 0 ? problem.Z + 1 : problem.Z + problem.charge,
        label: `${problem.Z} p, ${problem.neutrons} n, ${problem.charge === 0 ? problem.Z + 1 : problem.Z + problem.charge} e`,
        mistake: problem.charge === 0 ? 'extra-electron' : 'charge-direction'
      },
      {
        p: problem.Z,
        n: problem.neutrons,
        e: problem.Z,
        label: `${problem.Z} p, ${problem.neutrons} n, ${problem.Z} e`,
        mistake: 'neutral-electrons'
      }
    ];
    const seen = new Set([`${correct.p}|${correct.n}|${correct.e}`]);
    const options = [correct];
    candidates.forEach(function (candidate) {
      const key = `${candidate.p}|${candidate.n}|${candidate.e}`;
      if (candidate.e >= 0 && !seen.has(key) && options.length < 4) {
        seen.add(key);
        options.push(candidate);
      }
    });
    while (options.length < 4) {
      const fallback = {
        p: problem.Z,
        n: problem.neutrons + options.length,
        e: problem.electrons,
        label: `${problem.Z} p, ${problem.neutrons + options.length} n, ${problem.electrons} e`,
        mistake: 'generic'
      };
      const key = `${fallback.p}|${fallback.n}|${fallback.e}`;
      if (!seen.has(key)) {
        seen.add(key);
        options.push(fallback);
      }
    }
    return shuffle(options);
  }

  function renderTool1Prompt() {
    if (!tool1Current) return;
    tool1Current.notationMarkup = buildTool1NotationMarkup(tool1Current);
    tool1Current.choices = buildTool1Choices(tool1Current);
    tool1Prompt.innerHTML = `<span class="label">Given</span>
      ${tool1Current.notationMarkup}
      <div style="margin-top:0.6rem;">Choose the number of <strong>protons</strong>, <strong>neutrons</strong>, and <strong>electrons</strong> for this ${tool1Current.name} ${tool1Current.charge === 0 ? 'atom' : 'ion'}.</div>`;
    tool1Choices.innerHTML = tool1Current.choices.map(function (choice, index) {
      return renderChoiceMarkup('tool1Choice', choice, index);
    }).join('');
    clearChoiceSelection(tool1Choices);
  }

  function newTool1Problem() {
    tool1Current = makeTool1Problem();
    renderTool1Prompt();
    resetTool1Result();
  }

  function renderTool1Reveal(data, label) {
    const { notationMarkup, Z, A, neutrons, electrons, charge } = data;
    tool1RevealContent.innerHTML = `
      ${notationMarkup}
      <ul class="key-fact-list">
        <li>Protons = <strong>${Z}</strong> because the atomic number always defines the proton count.</li>
        <li>Neutrons = <strong>${neutrons}</strong> because A − Z = ${A} − ${Z}.</li>
        <li>Electrons = <strong>${electrons}</strong>${charge !== 0 ? ` because Z − charge = ${Z} − ${charge}.` : ' because a neutral atom has the same number of electrons and protons.'}</li>
      </ul>`;
    toggleToolBlock(tool1Reveal, true);
    tool1Result.textContent = label;
    setToolFeedbackState(tool1Result, 'info');
  }

  function checkTool1Counts() {
    if (!tool1Current) {
      tool1Result.textContent = 'Load a notation prompt first.';
      return;
    }
    const selectedValue = getSelectedChoiceValue(tool1Choices);
    if (selectedValue === '') {
      tool1Result.textContent = 'Choose one particle-count set before checking.';
      return;
    }
    const choice = tool1Current.choices[parseInt(selectedValue, 10)];
    if (choice.mistake === 'correct') {
      tool1Result.textContent = 'Correct. Atomic number sets protons, A − Z gives neutrons, and ion charge changes only electrons.';
      setToolFeedbackState(tool1Result, 'correct');
    } else {
      let message = 'Incorrect. ';
      if (choice.mistake === 'mass-for-protons') {
        message += 'You used the mass number as the proton count. Protons always equal the atomic number, Z.';
      } else if (choice.mistake === 'mass-for-neutrons') {
        message += 'You treated the mass number as the neutron count. Neutrons come from A − Z, not A by itself.';
      } else if (choice.mistake === 'charge-direction') {
        message += `You moved the electron count in the wrong direction. A ${tool1Current.charge > 0 ? 'positive' : 'negative'} charge means electrons were ${tool1Current.charge > 0 ? 'lost' : 'gained'}.`;
      } else if (choice.mistake === 'extra-electron') {
        message += 'You changed the electron count even though the species is neutral. Neutral atoms have electrons equal to protons.';
      } else if (choice.mistake === 'neutral-electrons') {
        message += 'You kept electrons equal to protons even though the species is an ion. Charge changes electrons only.';
      } else {
        message += 'One of the counting rules was applied incorrectly.';
      }
      message += ' Next step: read Z for protons, subtract Z from A for neutrons, then adjust electrons for the charge.';
      tool1Result.textContent = message;
      setToolFeedbackState(tool1Result, 'incorrect');
    }
    toggleToolBlock(tool1Support, true);
    setToolButtonState(revealTool1, true);
    setToolButtonState(newTool1, true);
  }
  bindChoiceButtons(tool1Choices);
  newTool1.addEventListener('click', newTool1Problem);
  tool1Choices.addEventListener('change', resetTool1Result);
  checkTool1.addEventListener('click', checkTool1Counts);
  revealTool1.addEventListener('click', function () {
    if (!tool1Current) {
      tool1Result.textContent = 'Load a notation prompt first.';
      return;
    }
    renderTool1Reveal(tool1Current, 'Reasoning revealed below.');
  });
  newTool1Problem();

  // --- Tool 2: Average Atomic Mass Sense Check ---
  const tool2Scenario = document.getElementById('tool2Scenario');
  const tool2Choices = document.getElementById('tool2Choices');
  const checkTool2 = document.getElementById('checkTool2');
  const revealTool2 = document.getElementById('revealTool2');
  const newTool2 = document.getElementById('newTool2');
  const tool2Prompt = document.getElementById('tool2Prompt');
  const tool2Result = document.getElementById('tool2Result');
  const tool2Reveal = document.getElementById('tool2Reveal');
  const tool2RevealContent = document.getElementById('tool2RevealContent');
  const tool2Support = document.getElementById('tool2Support');
  if (!tool2Scenario) return;

  const tool2Scenarios = {
    chlorine: {
      name: 'Chlorine',
      lighterMass: 34.969,
      lighterPct: 75.77,
      heavierMass: 36.966,
      heavierPct: 24.23,
      options: [34.4, 35.5, 37.1]
    },
    boron: {
      name: 'Boron',
      lighterMass: 10.013,
      lighterPct: 19.9,
      heavierMass: 11.009,
      heavierPct: 80.1,
      options: [10.2, 10.8, 11.4]
    },
    copper: {
      name: 'Copper',
      lighterMass: 62.930,
      lighterPct: 69.15,
      heavierMass: 64.928,
      heavierPct: 30.85,
      options: [62.2, 63.5, 64.9]
    }
  };

  function getTool2ScenarioData() {
    const data = tool2Scenarios[tool2Scenario.value] || tool2Scenarios.chlorine;
    const avg = (data.lighterMass * data.lighterPct + data.heavierMass * data.heavierPct) / 100;
    const expectedCloser = data.lighterPct > data.heavierPct ? 'lighter' : data.lighterPct < data.heavierPct ? 'heavier' : 'middle';
    let bestEstimate = data.options[0];
    let bestDiff = Math.abs(data.options[0] - avg);
    data.options.forEach(function (option) {
      const diff = Math.abs(option - avg);
      if (diff < bestDiff) {
        bestEstimate = option;
        bestDiff = diff;
      }
    });
    return { ...data, avg, expectedCloser, bestEstimate };
  }

  function renderTool2Scenario() {
    const data = getTool2ScenarioData();
    tool2Prompt.innerHTML = `<span class="label">Example</span>
      <strong>${data.name}</strong><br>
      Lighter isotope: ${data.lighterMass.toFixed(3)} amu at ${data.lighterPct.toFixed(2)}%<br>
      Heavier isotope: ${data.heavierMass.toFixed(3)} amu at ${data.heavierPct.toFixed(2)}%<br>
      Without calculating exactly, decide where the average atomic mass should land.`;
    tool2Choices.innerHTML = shuffle(data.options).map(function (option, index) {
      return renderChoiceMarkup('tool2Choice', {
        label: `${option.toFixed(3)} amu`
      }, option.toFixed(3));
    }).join('');
    clearChoiceSelection(tool2Choices);
    tool2Result.textContent = 'Pick an example, choose one estimate, then check your reasoning.';
    setToolFeedbackState(tool2Result, 'pending');
    toggleToolBlock(tool2Reveal, false);
    toggleToolBlock(tool2Support, false);
    setToolButtonState(revealTool2, false);
    setToolButtonState(newTool2, false);
  }

  function renderTool2Feedback() {
    const data = getTool2ScenarioData();
    const selectedValue = getSelectedChoiceValue(tool2Choices);
    if (!selectedValue) {
      tool2Result.textContent = 'Choose one estimate before checking your reasoning.';
      setToolFeedbackState(tool2Result, 'pending');
      return;
    }
    const estimate = parseFloat(selectedValue);
    const correct = estimate === data.bestEstimate;
    if (correct) {
      tool2Result.textContent = `Correct. The average must stay between the isotope masses and lean toward the more abundant isotope, so ${data.bestEstimate.toFixed(3)} amu is the best estimate.`;
      setToolFeedbackState(tool2Result, 'correct');
    } else {
      const outsideRange = estimate < data.lighterMass || estimate > data.heavierMass;
      const wrongDirection = data.expectedCloser === 'lighter' ? estimate > data.avg : estimate < data.avg;
      let message = 'Incorrect. ';
      if (outsideRange) {
        message += 'A weighted average cannot fall outside the two isotope masses.';
      } else if (wrongDirection) {
        message += `This estimate leans toward the less abundant isotope. The average should be closer to the ${data.expectedCloser} isotope because it is more common.`;
      } else {
        message += 'This estimate is possible in range, but it is not the best match for the abundance pattern.';
      }
      message += ` Next step: find the more abundant isotope first, then choose an estimate between the two masses and closer to that isotope.`;
      tool2Result.textContent = message;
      setToolFeedbackState(tool2Result, 'incorrect');
    }
    toggleToolBlock(tool2Support, true);
    setToolButtonState(revealTool2, true);
    setToolButtonState(newTool2, true);
  }

  function renderTool2Reveal() {
    const data = getTool2ScenarioData();
    tool2RevealContent.innerHTML = `<ul class="key-fact-list">
      <li>The weighted average must stay between <strong>${data.lighterMass.toFixed(3)} amu</strong> and <strong>${data.heavierMass.toFixed(3)} amu</strong>.</li>
      <li>The average leans toward the <strong>${data.expectedCloser}</strong> isotope because that isotope is more abundant.</li>
      <li>The best estimate before calculating is <strong>${data.bestEstimate.toFixed(3)} amu</strong>.</li>
      <li>The exact weighted average is <strong>${data.avg.toFixed(3)} amu</strong>, found from (${data.lighterMass.toFixed(3)} × ${data.lighterPct.toFixed(2)}%) + (${data.heavierMass.toFixed(3)} × ${data.heavierPct.toFixed(2)}%).</li>
    </ul>`;
    toggleToolBlock(tool2Reveal, true);
    tool2Result.textContent = 'Reasoning revealed below.';
    setToolFeedbackState(tool2Result, 'info');
  }

  tool2Scenario.addEventListener('change', renderTool2Scenario);
  bindChoiceButtons(tool2Choices);
  tool2Choices.addEventListener('change', function () {
    tool2Result.textContent = 'Estimate selected. Check your reasoning when you are ready.';
    setToolFeedbackState(tool2Result, 'pending');
    toggleToolBlock(tool2Reveal, false);
    toggleToolBlock(tool2Support, false);
    setToolButtonState(revealTool2, false);
    setToolButtonState(newTool2, false);
  });
  checkTool2.addEventListener('click', function () {
    renderTool2Feedback();
  });
  revealTool2.addEventListener('click', function () {
    renderTool2Reveal();
  });
  newTool2.addEventListener('click', function () {
    const keys = Object.keys(tool2Scenarios).filter(key => key !== tool2Scenario.value);
    tool2Scenario.value = keys[Math.floor(Math.random() * keys.length)];
    renderTool2Scenario();
  });
  renderTool2Scenario();

  // --- Tool 3: Formula Atom Counter ---
  const formulaSelect = document.getElementById('formulaSelect');
  const tool3Choices = document.getElementById('tool3Choices');
  const checkTool3 = document.getElementById('checkTool3');
  const revealTool3 = document.getElementById('revealTool3');
  const newTool3 = document.getElementById('newTool3');
  const tool3Result = document.getElementById('tool3Result');
  const tool3Reveal = document.getElementById('tool3Reveal');
  const tool3RevealContent = document.getElementById('tool3RevealContent');
  const tool3Support = document.getElementById('tool3Support');
  if (!formulaSelect) return;

  function renderChemFormula(formula) {
    if (!formula) return '';
    const chargeMatch = formula.match(/^(.*?)(\d*)([+-])$/);
    const coreFormula = chargeMatch ? chargeMatch[1] : formula;
    const chargeText = chargeMatch
      ? `${chargeMatch[2] || ''}${chargeMatch[3] === '-' ? '-' : '+'}`
      : '';
    const coreMarkup = coreFormula.replace(/(\d+)/g, '<span class="chem-sub">$1</span>');
    return `<span class="ion-group">${coreMarkup}${chargeText ? `<span class="chem-charge">${chargeText}</span>` : ''}</span>`;
  }

  const formulaData = {
    'H2O':     { formula: 'H2O', atoms: { H:2, O:1 }, distractors: { 2: 'subscript-ignored', 1: 'element-count', 4: 'extra-added' } },
    'CO2':     { formula: 'CO2', atoms: { C:1, O:2 }, distractors: { 2: 'subscript-ignored', 1: 'element-count', 4: 'extra-added' } },
    'NH3':     { formula: 'NH3', atoms: { N:1, H:3 }, distractors: { 3: 'subscript-ignored', 2: 'element-count', 5: 'extra-added' } },
    'C6H12O6': { formula: 'C6H12O6', atoms: { C:6, H:12, O:6 }, distractors: { 12: 'divided-too-soon', 18: 'missed-one-element', 6: 'element-count' } },
    'Ca3PO42': { formula: 'Ca3(PO4)2', atoms: { Ca:3, P:2, O:8 }, distractors: { 8: 'forgot-calcium', 9: 'parentheses-not-multiplied', 10: 'missed-oxygen-multiplier' } },
    'Al2SO43': { formula: 'Al2(SO4)3', atoms: { Al:2, S:3, O:12 }, distractors: { 9: 'parentheses-not-multiplied', 12: 'forgot-aluminum', 5: 'element-count' } },
    'C2H6O':   { formula: 'C2H5OH', atoms: { C:2, H:6, O:1 }, distractors: { 6: 'missed-hydrogen', 3: 'element-count', 8: 'extra-added' } },
    'NaCl':    { formula: 'NaCl', atoms: { Na:1, Cl:1 }, distractors: { 1: 'element-count', 3: 'extra-added', 0: 'subscript-ignored' } },
    'H2SO4':   { formula: 'H2SO4', atoms: { H:2, S:1, O:4 }, distractors: { 4: 'missed-hydrogen-sulfur', 3: 'element-count', 6: 'missed-one-element' } },
    'C12H22O11':{ formula:'C12H22O11', atoms:{ C:12, H:22, O:11 }, distractors:{ 22: 'missed-elements', 12: 'element-count', 33: 'partial-total' } }
  };

  function renderTool3Breakdown(data) {
    const total = Object.values(data.atoms).reduce((s, v) => s + v, 0);
    const breakdown = Object.entries(data.atoms).map(([el, n]) => `<li>${el}: <strong>${n}</strong></li>`).join('');
    tool3RevealContent.innerHTML = `<ul class="key-fact-list">
      <li>Molecular formula: <strong>${renderChemFormula(data.formula)}</strong></li>
      ${breakdown}
      <li>Total atoms per formula unit: <strong>${total}</strong></li>
    </ul>`;
    toggleToolBlock(tool3Reveal, true);
  }

  function buildTool3Choices(data) {
    const total = Object.values(data.atoms).reduce((s, v) => s + v, 0);
    const options = [{ value: total, mistake: 'correct' }];
    Object.entries(data.distractors).forEach(function ([value, mistake]) {
      options.push({ value: Number(value), mistake });
    });
    return shuffle(options).map(function (option) {
      return {
        ...option,
        label: `${option.value} total atoms`
      };
    });
  }

  formulaSelect.addEventListener('change', function () {
    const data = formulaData[this.value];
    if (!data) {
      tool3Choices.innerHTML = '';
      tool3Result.textContent = 'Pick a compound, then decide how many total atoms are in one molecule or formula unit.';
      setToolFeedbackState(tool3Result, 'pending');
      toggleToolBlock(tool3Reveal, false);
      toggleToolBlock(tool3Support, false);
      setToolButtonState(revealTool3, false);
      setToolButtonState(newTool3, false);
      return;
    }
    const choices = buildTool3Choices(data);
    tool3Choices.innerHTML = choices.map(function (choice, index) {
      return renderChoiceMarkup('tool3Choice', choice, choice.value).replace('aria-pressed="false"', `data-mistake="${choice.mistake}" aria-pressed="false"`);
    }).join('');
    clearChoiceSelection(tool3Choices);
    tool3Result.innerHTML = `Compound selected: <strong>${renderChemFormula(data.formula)}</strong><br>Now decide the total atom count before checking.`;
    setToolFeedbackState(tool3Result, 'pending');
    toggleToolBlock(tool3Reveal, false);
    toggleToolBlock(tool3Support, false);
    setToolButtonState(revealTool3, false);
    setToolButtonState(newTool3, false);
  });
  tool3Choices.addEventListener('change', function () {
    tool3Result.textContent = 'Selection updated. Check your atom count when you are ready.';
    setToolFeedbackState(tool3Result, 'pending');
    toggleToolBlock(tool3Reveal, false);
    toggleToolBlock(tool3Support, false);
    setToolButtonState(revealTool3, false);
    setToolButtonState(newTool3, false);
  });

  checkTool3.addEventListener('click', function () {
    const data = formulaData[formulaSelect.value];
    if (!data) {
      tool3Result.textContent = 'Select a compound first.';
      setToolFeedbackState(tool3Result, 'pending');
      return;
    }
    const total = Object.values(data.atoms).reduce((s, v) => s + v, 0);
    const selectedValue = getSelectedChoiceValue(tool3Choices);
    if (!selectedValue) {
      tool3Result.textContent = 'Choose one total atom count before checking.';
      setToolFeedbackState(tool3Result, 'pending');
      return;
    }
    const selected = tool3Choices.querySelector(`.explore-choice[data-choice-value="${selectedValue}"]`);
    const value = parseInt(selectedValue, 10);
    const mistake = selected ? selected.dataset.mistake : '';
    if (value === total) {
      tool3Result.textContent = 'Correct. Total atom count comes from the full formula: read every subscript and multiply groups in parentheses before adding.';
      setToolFeedbackState(tool3Result, 'correct');
    } else {
      let message = 'Incorrect. ';
      if (mistake === 'parentheses-not-multiplied' || mistake === 'missed-oxygen-multiplier') {
        message += 'You did not multiply everything inside the parentheses by the outside subscript.';
      } else if (mistake === 'subscript-ignored' || mistake === 'element-count') {
        message += 'You counted symbols but did not fully apply the subscripts.';
      } else if (mistake === 'forgot-calcium' || mistake === 'forgot-aluminum' || mistake === 'missed-one-element' || mistake === 'missed-elements' || mistake === 'missed-hydrogen-sulfur') {
        message += 'You left out one element while adding the total.';
      } else if (mistake === 'divided-too-soon') {
        message += 'You simplified toward an empirical formula before counting the full formula.';
      } else {
        message += 'One of the formula-counting steps was missed.';
      }
      message += ' Next step: count each element from the full formula first, then add those counts.';
      tool3Result.textContent = message;
      setToolFeedbackState(tool3Result, 'incorrect');
    }
    toggleToolBlock(tool3Support, true);
    setToolButtonState(revealTool3, true);
    setToolButtonState(newTool3, true);
  });

  bindChoiceButtons(tool3Choices);
  revealTool3.addEventListener('click', function () {
    const data = formulaData[formulaSelect.value];
    if (!data) {
      tool3Result.textContent = 'Select a compound first.';
      setToolFeedbackState(tool3Result, 'pending');
      return;
    }
    renderTool3Breakdown(data);
    tool3Result.textContent = 'Reasoning revealed below.';
    setToolFeedbackState(tool3Result, 'info');
  });
  newTool3.addEventListener('click', function () {
    const keys = Object.keys(formulaData).filter(key => key !== formulaSelect.value);
    formulaSelect.value = keys[Math.floor(Math.random() * keys.length)];
    formulaSelect.dispatchEvent(new Event('change'));
  });

});
