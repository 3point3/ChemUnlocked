function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderChemSpecies(species) {
  if (!species) return '';
  const trimmed = species.trim();
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
  return String(text).split(/(\s+)/).map(function (part) {
    if (!part || /^\s+$/.test(part)) return part;
    const match = part.match(/^([("'“]*)(\d*[A-Z][A-Za-z0-9()]*?(?:\((?:aq|s|l|g)\))?)([)",'.:;!?%”]*)$/);
    if (!match) return escapeHtml(part);
    return `${escapeHtml(match[1])}${renderChemSpecies(match[2])}${escapeHtml(match[3])}`;
  }).join('');
}

function formatFormulaToken(token) {
  const withCoeff = token.replace(/^(\d+)(?=[A-Z(])/, '<span class="eq-coeff">$1</span>');
  return withCoeff.replace(/([A-Za-z\)])(\d+)/g, '$1<span class="chem-sub">$2</span>');
}

function renderEquationMarkup(text) {
  return String(text).split(/(\s+|→|\+)/).map(function (part) {
    if (part === '→') return '<span class="eq-arrow">→</span>';
    if (part === '+' || /^\s+$/.test(part)) return part;
    return `<span class="chem-token">${formatFormulaToken(escapeHtml(part))}</span>`;
  }).join('');
}

function renderStackedFraction(numerator, denominator, prefix, suffix) {
  const prefixHtml = prefix ? `<span class="ratio-choice-prefix">${escapeHtml(prefix)}</span>` : '';
  const suffixHtml = suffix ? `<span class="ratio-choice-suffix">${escapeHtml(suffix)}</span>` : '';
  return `
    <span class="ratio-choice-fraction" aria-hidden="true">
      ${prefixHtml}
      <span class="ratio-choice-num">${renderChemInlineText(numerator)}</span>
      <span class="ratio-choice-frac-line"></span>
      <span class="ratio-choice-den">${renderChemInlineText(denominator)}</span>
      ${suffixHtml}
    </span>
  `;
}

function setFeedbackState(id, text) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
  let state = 'info';
  if (/^Right\b/.test(text)) state = 'correct';
  else if (/^Not quite\b/.test(text)) state = 'incorrect';
  else if (/click Check\.?$|first\.?$/.test(text)) state = 'pending';
  el.dataset.state = state;
}

function updateChoiceSelection(container, selectedId, datasetName) {
  if (!container) return;
  container.querySelectorAll('button').forEach(function (btn) {
    const isSelected = btn.dataset[datasetName] === selectedId;
    btn.classList.toggle('active', isSelected);
    btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
  });
}

function clearChoiceFeedback(container) {
  if (!container) return;
  container.querySelectorAll('button').forEach(function (btn) {
    btn.classList.remove('correct', 'incorrect');
  });
}

/* ── Tool 1: Mole Ratio Direction Check ── */
document.addEventListener('DOMContentLoaded', function () {
  const checkBtn = document.getElementById('checkRatioBtn');
  const revealBtn = document.getElementById('revealRatioBtn');
  const nextBtn = document.getElementById('nextRatioBtn');
  const eqEl = document.getElementById('stoichEquation');
  const promptEl = document.getElementById('stoichPrompt');
  const choicesEl = document.getElementById('ratioChoices');
  const revealPanel = document.getElementById('ratioReveal');
  const revealCopy = document.getElementById('ratioRevealCopy');
  if (!checkBtn || !revealBtn || !nextBtn || !eqEl || !promptEl || !choicesEl || !revealPanel || !revealCopy) return;

  const stoichQuestions = [
    {
      equation: '2H2 + O2 → 2H2O',
      prompt: 'Choose the mole ratio that cancels mol H2 and leaves mol H2O.',
      given: 'H2',
      target: 'H2O',
      ratios: [
        { id: 'correct', numerator: '2 mol H2O', denominator: '2 mol H2', correct: true },
        { id: 'flip', numerator: '2 mol H2', denominator: '2 mol H2O', correct: false },
        { id: 'other-reactant', numerator: '1 mol O2', denominator: '2 mol H2', correct: false },
        { id: 'wrong-denominator', numerator: '2 mol H2O', denominator: '1 mol O2', correct: false }
      ]
    },
    {
      equation: 'CH4 + 2O2 → CO2 + 2H2O',
      prompt: 'Choose the mole ratio that cancels mol CH4 and leaves mol CO2.',
      given: 'CH4',
      target: 'CO2',
      ratios: [
        { id: 'correct', numerator: '1 mol CO2', denominator: '1 mol CH4', correct: true },
        { id: 'flip', numerator: '1 mol CH4', denominator: '1 mol CO2', correct: false },
        { id: 'wrong-product', numerator: '2 mol H2O', denominator: '1 mol CH4', correct: false },
        { id: 'wrong-denominator', numerator: '1 mol CO2', denominator: '2 mol O2', correct: false }
      ]
    },
    {
      equation: 'N2 + 3H2 → 2NH3',
      prompt: 'Choose the mole ratio that cancels mol H2 and leaves mol NH3.',
      given: 'H2',
      target: 'NH3',
      ratios: [
        { id: 'correct', numerator: '2 mol NH3', denominator: '3 mol H2', correct: true },
        { id: 'flip', numerator: '3 mol H2', denominator: '2 mol NH3', correct: false },
        { id: 'wrong-reactant', numerator: '1 mol N2', denominator: '3 mol H2', correct: false },
        { id: 'wrong-denominator', numerator: '2 mol NH3', denominator: '1 mol N2', correct: false }
      ]
    },
    {
      equation: '2KClO3 → 2KCl + 3O2',
      prompt: 'Choose the mole ratio that cancels mol KClO3 and leaves mol O2.',
      given: 'KClO3',
      target: 'O2',
      ratios: [
        { id: 'correct', numerator: '3 mol O2', denominator: '2 mol KClO3', correct: true },
        { id: 'flip', numerator: '2 mol KClO3', denominator: '3 mol O2', correct: false },
        { id: 'wrong-product', numerator: '2 mol KCl', denominator: '2 mol KClO3', correct: false },
        { id: 'wrong-denominator', numerator: '3 mol O2', denominator: '2 mol KCl', correct: false }
      ]
    },
    {
      equation: 'CaCO3 → CaO + CO2',
      prompt: 'Choose the mole ratio that cancels mol CaCO3 and leaves mol CO2.',
      given: 'CaCO3',
      target: 'CO2',
      ratios: [
        { id: 'correct', numerator: '1 mol CO2', denominator: '1 mol CaCO3', correct: true },
        { id: 'flip', numerator: '1 mol CaCO3', denominator: '1 mol CO2', correct: false },
        { id: 'wrong-product', numerator: '1 mol CaO', denominator: '1 mol CaCO3', correct: false },
        { id: 'wrong-denominator', numerator: '1 mol CO2', denominator: '1 mol CaO', correct: false }
      ]
    }
  ];

  let currentIndex = -1;
  let selectedRatioId = '';
  let hasChecked = false;

  function plainMolLabel(label) {
    return label.replace(/^[0-9.]+\s+mol\s+/, '');
  }

  function renderRatioChoices(question) {
    choicesEl.innerHTML = question.ratios.map(function (ratio) {
      return `<button type="button" class="segment-btn tool-choice-btn explore-choice" data-ratio-id="${escapeHtml(ratio.id)}" aria-pressed="false" aria-label="${escapeHtml(ratio.numerator)} over ${escapeHtml(ratio.denominator)}">${renderStackedFraction(ratio.numerator, ratio.denominator)}</button>`;
    }).join('');

    choicesEl.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectedRatioId = btn.dataset.ratioId || '';
        hasChecked = false;
        revealBtn.disabled = true;
        nextBtn.disabled = true;
        revealPanel.hidden = true;
        clearChoiceFeedback(choicesEl);
        updateChoiceSelection(choicesEl, selectedRatioId, 'ratioId');
        setFeedbackState('ratioOutput', 'Choose one ratio, then click Check.');
      });
    });
  }

  function nextQuestion() {
    let nextIndex = Math.floor(Math.random() * stoichQuestions.length);
    if (stoichQuestions.length > 1) {
      while (nextIndex === currentIndex) nextIndex = Math.floor(Math.random() * stoichQuestions.length);
    }
    currentIndex = nextIndex;
    const q = stoichQuestions[currentIndex];
    eqEl.innerHTML = renderEquationMarkup(q.equation);
    promptEl.innerHTML = renderChemInlineText(q.prompt);
    renderRatioChoices(q);
    selectedRatioId = '';
    hasChecked = false;
    revealBtn.disabled = true;
    nextBtn.disabled = true;
    revealPanel.hidden = true;
    revealCopy.innerHTML = '';
    setFeedbackState('ratioOutput', 'Choose one ratio, then click Check.');
  }

  checkBtn.addEventListener('click', function () {
    const q = stoichQuestions[currentIndex];
    if (!selectedRatioId) {
      setFeedbackState('ratioOutput', 'Choose one ratio, then click Check.');
      return;
    }

    const chosen = q.ratios.find(function (ratio) { return ratio.id === selectedRatioId; });
    hasChecked = true;
    revealBtn.disabled = false;
    nextBtn.disabled = false;
    clearChoiceFeedback(choicesEl);

    if (chosen && chosen.correct) {
      const selectedBtn = choicesEl.querySelector(`[data-ratio-id="${selectedRatioId}"]`);
      if (selectedBtn) selectedBtn.classList.add('correct');
      setFeedbackState('ratioOutput', 'Right — the given substance is in the denominator, so it cancels, and the wanted substance stays in the answer. That is the mole-ratio rule.');
      return;
    }

    const selectedBtn = choicesEl.querySelector(`[data-ratio-id="${selectedRatioId}"]`);
    const correctBtn = choicesEl.querySelector('[data-ratio-id="correct"]');
    if (selectedBtn) selectedBtn.classList.add('incorrect');
    if (correctBtn) correctBtn.classList.add('correct');
    setFeedbackState('ratioOutput', 'Not quite — the error is flipping or mismatching the substances. Put the given substance in the denominator, put the wanted substance in the numerator, then try another.');
  });

  revealBtn.addEventListener('click', function () {
    if (!hasChecked) return;
    const q = stoichQuestions[currentIndex];
    const correct = q.ratios.find(function (ratio) { return ratio.correct; });
    const correctNumerator = plainMolLabel(correct.numerator);
    const correctDenominator = plainMolLabel(correct.denominator);
    revealCopy.innerHTML = `
      <li><strong>Given substance:</strong> ${renderChemInlineText(correctDenominator)}</li>
      <li><strong>Wanted substance:</strong> ${renderChemInlineText(correctNumerator)}</li>
      <li><strong>Best ratio:</strong> ${renderStackedFraction(correct.numerator, correct.denominator)}</li>
      <li><strong>Why it works:</strong> ${renderChemInlineText(correctDenominator)} cancels, and ${renderChemInlineText(correctNumerator)} stays in the answer.</li>
    `;
    revealPanel.hidden = false;
  });

  nextBtn.addEventListener('click', nextQuestion);
  nextQuestion();
});

/* ── Tool 2: Limiting Reactant Decision Check ── */
document.addEventListener('DOMContentLoaded', function () {
  const eqEl = document.getElementById('limitEquation');
  const amountsEl = document.getElementById('limitAmounts');
  const choicesEl = document.getElementById('limitChoices');
  const checkBtn = document.getElementById('checkLimitBtn');
  const revealBtn = document.getElementById('revealLimitBtn');
  const nextBtn = document.getElementById('nextLimitBtn');
  const revealPanel = document.getElementById('limitReveal');
  const revealCopy = document.getElementById('limitRevealCopy');
  if (!eqEl || !amountsEl || !choicesEl || !checkBtn || !revealBtn || !nextBtn || !revealPanel || !revealCopy) return;

  const scenarios = [
    {
      equation: '2H2 + O2 → 2H2O',
      amountsText: '3.0 mol H2 and 2.0 mol O2',
      reactantA: 'H2',
      reactantB: 'O2',
      correct: 'A',
      product: 'H2O',
      compareA: '3.0 mol H2 × (2 mol H2O / 2 mol H2) = 3.0 mol H2O',
      compareB: '2.0 mol O2 × (2 mol H2O / 1 mol O2) = 4.0 mol H2O',
      reason: 'H2 makes less product, so H2 runs out first and is the limiting reactant.'
    },
    {
      equation: 'N2 + 3H2 → 2NH3',
      amountsText: '1.5 mol N2 and 3.0 mol H2',
      reactantA: 'N2',
      reactantB: 'H2',
      correct: 'B',
      product: 'NH3',
      compareA: '1.5 mol N2 × (2 mol NH3 / 1 mol N2) = 3.0 mol NH3',
      compareB: '3.0 mol H2 × (2 mol NH3 / 3 mol H2) = 2.0 mol NH3',
      reason: 'H2 makes less product, so H2 is limiting.'
    },
    {
      equation: '2Al + 3Cl2 → 2AlCl3',
      amountsText: '4.0 mol Al and 6.0 mol Cl2',
      reactantA: 'Al',
      reactantB: 'Cl2',
      correct: 'none',
      product: 'AlCl3',
      compareA: '4.0 mol Al × (2 mol AlCl3 / 2 mol Al) = 4.0 mol AlCl3',
      compareB: '6.0 mol Cl2 × (2 mol AlCl3 / 3 mol Cl2) = 4.0 mol AlCl3',
      reason: 'Both reactants make the same amount of product, so the amounts are exactly matched. Neither reactant is in excess.'
    },
    {
      equation: 'CH4 + 2O2 → CO2 + 2H2O',
      amountsText: '0.80 mol CH4 and 1.20 mol O2',
      reactantA: 'CH4',
      reactantB: 'O2',
      correct: 'B',
      product: 'CO2',
      compareA: '0.80 mol CH4 × (1 mol CO2 / 1 mol CH4) = 0.80 mol CO2',
      compareB: '1.20 mol O2 × (1 mol CO2 / 2 mol O2) = 0.60 mol CO2',
      reason: 'O2 makes less product, so O2 is the limiting reactant.'
    }
  ];

  let currentIndex = -1;
  let selectedOptionId = '';
  let hasChecked = false;

  function renderChoices(scenario) {
    const options = [
      { id: 'A', label: `${scenario.reactantA} is limiting` },
      { id: 'B', label: `${scenario.reactantB} is limiting` },
      { id: 'none', label: 'No limiting reactant' }
    ];

    choicesEl.innerHTML = options.map(function (option) {
      return `<button type="button" class="segment-btn tool-choice-btn explore-choice" data-option-id="${escapeHtml(option.id)}" aria-pressed="false">${renderChemInlineText(option.label)}</button>`;
    }).join('');

    choicesEl.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectedOptionId = btn.dataset.optionId || '';
        hasChecked = false;
        revealBtn.disabled = true;
        nextBtn.disabled = true;
        revealPanel.hidden = true;
        clearChoiceFeedback(choicesEl);
        updateChoiceSelection(choicesEl, selectedOptionId, 'optionId');
        setFeedbackState('limitOutput', 'Choose one verdict, then click Check.');
      });
    });
  }

  function nextScenario() {
    let nextIndex = Math.floor(Math.random() * scenarios.length);
    if (scenarios.length > 1) {
      while (nextIndex === currentIndex) nextIndex = Math.floor(Math.random() * scenarios.length);
    }
    currentIndex = nextIndex;
    const scenario = scenarios[currentIndex];
    eqEl.innerHTML = renderEquationMarkup(scenario.equation);
    amountsEl.innerHTML = renderChemInlineText(scenario.amountsText);
    renderChoices(scenario);
    selectedOptionId = '';
    hasChecked = false;
    revealBtn.disabled = true;
    nextBtn.disabled = true;
    revealPanel.hidden = true;
    revealCopy.innerHTML = '';
    setFeedbackState('limitOutput', 'Choose one verdict, then click Check.');
  }

  checkBtn.addEventListener('click', function () {
    const scenario = scenarios[currentIndex];
    if (!selectedOptionId) {
      setFeedbackState('limitOutput', 'Choose one verdict, then click Check.');
      return;
    }

    hasChecked = true;
    revealBtn.disabled = false;
    nextBtn.disabled = false;
    clearChoiceFeedback(choicesEl);

    if (selectedOptionId === scenario.correct) {
      const selectedBtn = choicesEl.querySelector(`[data-option-id="${selectedOptionId}"]`);
      if (selectedBtn) selectedBtn.classList.add('correct');
      setFeedbackState('limitOutput', 'Right — the limiting reactant is the one that could make less product. That comparison rule is what decides the answer.');
      return;
    }

    const selectedBtn = choicesEl.querySelector(`[data-option-id="${selectedOptionId}"]`);
    const correctBtn = choicesEl.querySelector(`[data-option-id="${scenario.correct}"]`);
    if (selectedBtn) selectedBtn.classList.add('incorrect');
    if (correctBtn) correctBtn.classList.add('correct');
    setFeedbackState('limitOutput', 'Not quite — the error is comparing starting amounts directly instead of comparing product made. Convert each reactant through the balanced equation, then choose the one that makes less product.');
  });

  revealBtn.addEventListener('click', function () {
    if (!hasChecked) return;
    const scenario = scenarios[currentIndex];
    revealCopy.innerHTML = `
      <li><strong>Compare reactant ${renderChemInlineText(scenario.reactantA)}:</strong> ${renderChemInlineText(scenario.compareA)}</li>
      <li><strong>Compare reactant ${renderChemInlineText(scenario.reactantB)}:</strong> ${renderChemInlineText(scenario.compareB)}</li>
      <li><strong>Decision:</strong> ${renderChemInlineText(scenario.reason)}</li>
      <li><strong>Rule:</strong> the reactant that makes less ${renderChemInlineText(scenario.product)} is limiting.</li>
    `;
    revealPanel.hidden = false;
  });

  nextBtn.addEventListener('click', nextScenario);
  nextScenario();
});
