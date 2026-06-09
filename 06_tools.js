/* ── TOOL LOGIC ── */
document.addEventListener('DOMContentLoaded', function () {

  /* ── Shared helpers ── */
  const ROMAN = ['','I','II','III','IV','V','VI'];
  function setFeedbackState(element, state, text) {
    element.dataset.state = state;
    element.innerHTML = text;
  }
  function setRevealOpen(element, isOpen) {
    element.hidden = !isOpen;
  }
  function pickNextIndex(items, currentIndex) {
    if (!items.length) return -1;
    let nextIndex = Math.floor(Math.random() * items.length);
    if (items.length > 1) {
      while (nextIndex === currentIndex) nextIndex = Math.floor(Math.random() * items.length);
    }
    return nextIndex;
  }

  function resetChoiceButtons(buttons) {
    buttons.forEach((button) => {
      button.classList.remove('active', 'correct', 'incorrect');
      button.setAttribute('aria-pressed', 'false');
    });
  }

  function setupChoiceGroup(buttons, onSelect) {
    buttons.forEach((button) => {
      button.addEventListener('click', function () {
        buttons.forEach((btn) => {
          btn.classList.remove('active');
          btn.setAttribute('aria-pressed', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');
        onSelect(button.dataset.value);
      });
    });
  }

  function shuffleChoiceButtons(buttons) {
    if (!buttons.length) return;
    const parent = buttons[0].parentElement;
    if (!parent) return;
    const shuffled = buttons.slice();
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    shuffled.forEach((button) => parent.appendChild(button));
  }

  function renderChemSpecies(species) {
    if (!species) return '';
    const trimmed = species.trim();
    const stateMatch = trimmed.match(/(\((?:aq|s|l|g)\))$/i);
    const state = stateMatch ? stateMatch[1] : '';
    let core = stateMatch ? trimmed.slice(0, -state.length).trim() : trimmed;
    const chargeMatch = core.match(/\s+(\d*[+-])$/);
    const charge = chargeMatch ? chargeMatch[1] : '';
    core = chargeMatch ? core.slice(0, -chargeMatch[0].length) : core;
    const renderedCore = core.replace(/(\d+)/g, '<span class="chem-sub">$1</span>');
    const renderedCharge = charge ? `<span class="chem-charge">${charge.replace('-', '-')}</span>` : '';
    return `<span class="ion-group">${renderedCore}${renderedCharge}</span>${state}`;
  }

  function injectChemMarkup(text) {
    return text.replace(/\[\[chem:(.+?)\]\]/g, function (_, species) {
      return renderChemSpecies(species);
    });
  }

  /* ── Tool A: Compound Type Classifier ── */
  const classifyFormula = document.getElementById('classifyFormula');
  const classifyChoices = Array.from(document.querySelectorAll('#classifyChoices .tool-choice-btn'));
  const classifyCheckBtn = document.getElementById('classifyCheckBtn');
  const classifyRevealBtn = document.getElementById('classifyRevealBtn');
  const classifyNextBtn = document.getElementById('classifyNextBtn');
  const classifyFeedback = document.getElementById('classifyFeedback');
  const classifyRevealBox = document.getElementById('classifyRevealBox');
  const classifyRevealText = document.getElementById('classifyRevealText');

  const classifyQuestions = [
    {
      formula: 'NaCl',
      answer: 'ionic',
      feedback: 'Sodium is a metal, so this formula belongs to the ionic group.',
      reveal: '<ul><li>The formula starts with Na, not H — so it is not an acid.</li><li>It contains a metal: Na.</li><li>That is enough to sort it as ionic.</li></ul>'
    },
    {
      formula: 'FeCl3',
      answer: 'ionic',
      feedback: 'Iron is a metal, so this formula belongs to the ionic group.',
      reveal: '<ul><li>The formula starts with Fe, not H — so it is not an acid.</li><li>It contains a metal: Fe.</li><li>Later you decide whether a Roman numeral is needed, but the first sort is still ionic.</li></ul>'
    },
    {
      formula: 'Ca(OH)2',
      answer: 'ionic',
      feedback: 'Calcium is a metal, so this formula belongs to the ionic group.',
      reveal: '<ul><li>The formula starts with Ca, not H — so it is not an acid.</li><li>It contains a metal: Ca.</li><li>[[chem:OH -]] is polyatomic, but the compound type is still ionic.</li></ul>'
    },
    {
      formula: 'CO2',
      answer: 'molecular',
      feedback: 'Carbon and oxygen are both nonmetals, so this compound uses molecular naming rules.',
      reveal: '<ul><li>The formula starts with C, not H — so it is not an acid.</li><li>It does not contain a metal or [[chem:NH4 +]].</li><li>Only nonmetals are present, so the type is molecular.</li></ul>'
    },
    {
      formula: 'HBr(aq)',
      answer: 'acid',
      feedback: 'The formula begins with H, and only nonmetals follow — so this uses acid naming rules.',
      reveal: '<ul><li>H is written first, followed only by nonmetals — that is the acid signal.</li><li>(aq) confirms it is dissolved in water, but the real clue is H first.</li><li>No oxygen present, so it is a binary acid: hydrobromic acid.</li></ul>'
    },
    {
      formula: 'HNO3(aq)',
      answer: 'acid',
      feedback: 'The formula begins with H, and only nonmetals follow — so this uses acid naming rules.',
      reveal: '<ul><li>H is written first, followed only by nonmetals — that is the acid signal.</li><li>It contains oxygen, so it is an oxyacid. Identify the ion inside (nitrate → nitric acid).</li></ul>'
    },
    {
      formula: 'NH4NO3',
      answer: 'ionic',
      feedback: 'Ammonium is a polyatomic cation, so this formula belongs to the ionic group.',
      reveal: '<ul><li>The formula starts with N, not H — so it is not an acid.</li><li>It contains [[chem:NH4 +]], which counts as the positive-ion clue.</li><li>That makes the compound ionic.</li></ul>'
    },
    {
      formula: 'Al2O3',
      answer: 'ionic',
      feedback: 'Aluminum is a metal, so this formula belongs to the ionic group.',
      reveal: '<ul><li>The formula starts with Al, not H — so it is not an acid.</li><li>It contains a metal: Al.</li><li>That sends you to ionic naming rules.</li></ul>'
    },
    {
      formula: 'K2SO4',
      answer: 'ionic',
      feedback: 'Potassium is a metal, so this formula belongs to the ionic group.',
      reveal: '<ul><li>The formula starts with K, not H — so it is not an acid.</li><li>It contains a metal: K.</li><li>Sulfate is polyatomic, but the compound type is still ionic.</li></ul>'
    },
    {
      formula: 'PCl3',
      answer: 'molecular',
      feedback: 'Phosphorus and chlorine are both nonmetals, so this formula uses molecular naming rules.',
      reveal: '<ul><li>The formula starts with P, not H — so it is not an acid.</li><li>It contains no metal and no [[chem:NH4 +]].</li><li>Only nonmetals are present, so it is molecular.</li></ul>'
    },
    {
      formula: 'N2O5',
      answer: 'molecular',
      feedback: 'Nitrogen and oxygen are both nonmetals, so this formula uses molecular naming rules.',
      reveal: '<ul><li>The formula starts with N, not H — so it is not an acid.</li><li>It contains no metal and no [[chem:NH4 +]].</li><li>That means you use molecular prefixes.</li></ul>'
    },
    {
      formula: 'SF6',
      answer: 'molecular',
      feedback: 'Sulfur and fluorine are both nonmetals, so this formula uses molecular naming rules.',
      reveal: '<ul><li>The formula starts with S, not H — so it is not an acid.</li><li>It contains no metal and no [[chem:NH4 +]].</li><li>Only nonmetals remain, so the type is molecular.</li></ul>'
    },
    {
      formula: 'CCl4',
      answer: 'molecular',
      feedback: 'Carbon and chlorine are both nonmetals, so this formula uses molecular naming rules.',
      reveal: '<ul><li>The formula starts with C, not H — so it is not an acid.</li><li>It does not contain a metal or [[chem:NH4 +]].</li><li>That makes it molecular.</li></ul>'
    },
    {
      formula: 'HCl(aq)',
      answer: 'acid',
      feedback: 'The formula begins with H, and only nonmetals follow — so this uses acid naming rules.',
      reveal: '<ul><li>H is written first, followed only by nonmetals — that is the acid signal.</li><li>(aq) tells you it is dissolved in water, which matters here: HCl gas would be named "hydrogen chloride," but HCl(aq) is "hydrochloric acid."</li><li>No oxygen, so it is a binary acid.</li></ul>'
    },
    {
      formula: 'HClO2(aq)',
      answer: 'acid',
      feedback: 'The formula begins with H, and only nonmetals follow — so this uses acid naming rules.',
      reveal: '<ul><li>H is written first, followed only by nonmetals — that is the acid signal.</li><li>It contains oxygen, so it is an oxyacid. Identify the ion inside (chlorite → chlorous acid).</li></ul>'
    },
    {
      formula: 'HCN(aq)',
      answer: 'acid',
      feedback: 'The formula begins with H, and only nonmetals follow — so this uses acid naming rules.',
      reveal: '<ul><li>H is written first, followed only by nonmetals (C and N are both nonmetals) — that is the acid signal.</li><li>No oxygen, so it follows the binary acid pattern: hydrocyanic acid.</li></ul>'
    },
    {
      formula: 'NaCl(aq)',
      answer: 'ionic',
      feedback: 'This is the classic trap. NaCl(aq) has (aq), but it is ionic — not an acid.',
      reveal: '<ul><li>The formula starts with Na, not H — so (aq) is irrelevant to the type decision here.</li><li>(aq) just means the compound is dissolved in water. Ionic compounds dissolve too.</li><li>It contains a metal (Na), so the type is ionic: sodium chloride.</li></ul>'
    },
    {
      formula: 'MgSO4(aq)',
      answer: 'ionic',
      feedback: 'Another (aq) compound that is ionic, not an acid. The formula starts with Mg.',
      reveal: '<ul><li>The formula starts with Mg, not H — so it is not an acid, regardless of (aq).</li><li>Mg is a metal, so the type is ionic.</li><li>[[chem:SO4 2-]] is the polyatomic anion, giving the name magnesium sulfate.</li></ul>'
    }
  ];

  let currentClassifyIndex = -1;
  let selectedClassify = '';
  let classifyChecked = false;

  function loadClassifyQuestion() {
    currentClassifyIndex = pickNextIndex(classifyQuestions, currentClassifyIndex);
    const question = classifyQuestions[currentClassifyIndex];
    selectedClassify = '';
    classifyChecked = false;
    classifyFormula.innerHTML = renderChemSpecies(question.formula);
    setFeedbackState(classifyFeedback, 'pending', 'Choose acid, ionic, or molecular before you name it.');
    classifyRevealBtn.disabled = true;
    classifyNextBtn.disabled = true;
    setRevealOpen(classifyRevealBox, false);
    classifyRevealText.innerHTML = '';
    resetChoiceButtons(classifyChoices);
    shuffleChoiceButtons(classifyChoices);
  }

  setupChoiceGroup(classifyChoices, (value) => {
    selectedClassify = value;
  });

  classifyCheckBtn.addEventListener('click', function () {
    const question = classifyQuestions[currentClassifyIndex];
    if (!selectedClassify) {
      setFeedbackState(classifyFeedback, 'incorrect', 'No decision yet. Pick acid, ionic, or molecular first, then check.');
      return;
    }

    classifyChecked = true;
    classifyRevealBtn.disabled = false;
    classifyNextBtn.disabled = false;
    resetChoiceButtons(classifyChoices);
    const chosenButton = classifyChoices.find((button) => button.dataset.value === selectedClassify);

    if (selectedClassify === question.answer) {
      chosenButton.classList.add('correct');
      setFeedbackState(classifyFeedback, 'correct', 'Right — the first naming decision is the compound type. That choice tells you which naming rule set to use.');
      return;
    }

    chosenButton.classList.add('incorrect');
    setFeedbackState(classifyFeedback, 'incorrect', 'Wrong type. Check: does H come first in the formula? Then: is there a metal or NH<span class="chem-sub">4</span><span class="chem-charge">+</span>? Then decide again.');
  });

  classifyRevealBtn.addEventListener('click', function () {
    if (!classifyChecked) return;
    const question = classifyQuestions[currentClassifyIndex];
    classifyRevealText.innerHTML = injectChemMarkup(`<p>${question.feedback}</p>${question.reveal}`);
    setRevealOpen(classifyRevealBox, true);
  });

  classifyNextBtn.addEventListener('click', loadClassifyQuestion);

  /* ── Tool B: Roman Numeral Charge Choice ── */
  const romanFormula = document.getElementById('romanFormula');
  const romanChoices = Array.from(document.querySelectorAll('#romanChoices .tool-choice-btn'));
  const romanCheckBtn = document.getElementById('romanCheckBtn');
  const romanRevealBtn = document.getElementById('romanRevealBtn');
  const romanNextBtn = document.getElementById('romanNextBtn');
  const romanFeedback = document.getElementById('romanFeedback');
  const romanRevealBox = document.getElementById('romanRevealBox');
  const romanRevealText = document.getElementById('romanRevealText');

  const romanQuestions = [
    {
      formula: 'Fe2O3',
      metalName: 'iron',
      charge: 3,
      totalNegative: -6,
      atoms: 2,
      answerName: 'iron(III) oxide'
    },
    {
      formula: 'Cu2O',
      metalName: 'copper',
      charge: 1,
      totalNegative: -2,
      atoms: 2,
      answerName: 'copper(I) oxide'
    },
    {
      formula: 'PbO2',
      metalName: 'lead',
      charge: 4,
      totalNegative: -4,
      atoms: 1,
      answerName: 'lead(IV) oxide'
    },
    {
      formula: 'CrCl3',
      metalName: 'chromium',
      charge: 3,
      totalNegative: -3,
      atoms: 1,
      answerName: 'chromium(III) chloride'
    },
    {
      formula: 'SnCl2',
      metalName: 'tin',
      charge: 2,
      totalNegative: -2,
      atoms: 1,
      answerName: 'tin(II) chloride'
    },
    {
      formula: 'Co2O3',
      metalName: 'cobalt',
      charge: 3,
      totalNegative: -6,
      atoms: 2,
      answerName: 'cobalt(III) oxide'
    },
    {
      formula: 'CuCl2',
      metalName: 'copper',
      charge: 2,
      totalNegative: -2,
      atoms: 1,
      answerName: 'copper(II) chloride'
    },
    {
      formula: 'FeO',
      metalName: 'iron',
      charge: 2,
      totalNegative: -2,
      atoms: 1,
      answerName: 'iron(II) oxide'
    },
    {
      formula: 'PbCl4',
      metalName: 'lead',
      charge: 4,
      totalNegative: -4,
      atoms: 1,
      answerName: 'lead(IV) chloride'
    },
    {
      formula: 'MnO2',
      metalName: 'manganese',
      charge: 4,
      totalNegative: -4,
      atoms: 1,
      answerName: 'manganese(IV) oxide'
    },
    {
      formula: 'Ni2O3',
      metalName: 'nickel',
      charge: 3,
      totalNegative: -6,
      atoms: 2,
      answerName: 'nickel(III) oxide'
    },
    {
      formula: 'Hg2Cl2',
      metalName: 'mercury',
      charge: 1,
      totalNegative: -2,
      atoms: 2,
      answerName: 'mercury(I) chloride'
    }
  ];

  let currentRomanIndex = -1;
  let selectedRoman = '';
  let romanChecked = false;

  function loadRomanQuestion() {
    currentRomanIndex = pickNextIndex(romanQuestions, currentRomanIndex);
    const question = romanQuestions[currentRomanIndex];
    selectedRoman = '';
    romanChecked = false;
    romanFormula.innerHTML = renderChemSpecies(question.formula);
    setFeedbackState(romanFeedback, 'pending', 'Choose the charge on each metal ion before you see the name.');
    romanRevealBtn.disabled = true;
    romanNextBtn.disabled = true;
    setRevealOpen(romanRevealBox, false);
    romanRevealText.innerHTML = '';
    resetChoiceButtons(romanChoices);
    shuffleChoiceButtons(romanChoices);
  }

  setupChoiceGroup(romanChoices, (value) => {
    selectedRoman = value;
  });

  romanCheckBtn.addEventListener('click', function () {
    const question = romanQuestions[currentRomanIndex];
    if (!selectedRoman) {
      setFeedbackState(romanFeedback, 'incorrect', 'No charge chosen yet. Pick one metal charge first, then check.');
      return;
    }

    romanChecked = true;
    romanRevealBtn.disabled = false;
    romanNextBtn.disabled = false;
    resetChoiceButtons(romanChoices);
    const chosenButton = romanChoices.find((button) => button.dataset.value === selectedRoman);

    if (Number(selectedRoman) === question.charge) {
      chosenButton.classList.add('correct');
      setFeedbackState(romanFeedback, 'correct', `Right — the charges must balance to zero, so each metal ion here is +${question.charge}. That is why the name uses ${question.metalName}(${ROMAN[question.charge]}).`);
      return;
    }

    chosenButton.classList.add('incorrect');
    setFeedbackState(romanFeedback, 'incorrect', 'That uses the wrong charge rule. Do not use the subscript as the charge. Find the total negative charge first, then divide the needed positive charge across the metal atoms.');
  });

  romanRevealBtn.addEventListener('click', function () {
    if (!romanChecked) return;
    const question = romanQuestions[currentRomanIndex];
    const totalPositive = Math.abs(question.totalNegative);
    romanRevealText.innerHTML = `
      <p>Total negative charge = ${question.totalNegative}.</p>
      <p>The metal ions must supply +${totalPositive} total.</p>
      <p>Charge on each metal ion = +${totalPositive} ÷ ${question.atoms} = +${question.charge}.</p>
      <p>Roman numeral = ${ROMAN[question.charge]}. Final name: <strong>${question.answerName}</strong>.</p>
    `;
    setRevealOpen(romanRevealBox, true);
  });

  romanNextBtn.addEventListener('click', loadRomanQuestion);

  /* ── Tool C: Polyatomic Name Keeper ── */
  const polyFormula = document.getElementById('polyFormula');
  const polyIon = document.getElementById('polyIon');
  const polyChoices = Array.from(document.querySelectorAll('#polyChoices .tool-choice-btn'));
  const polyCheckBtn = document.getElementById('polyCheckBtn');
  const polyRevealBtn = document.getElementById('polyRevealBtn');
  const polyNextBtn = document.getElementById('polyNextBtn');
  const polyFeedback = document.getElementById('polyFeedback');
  const polyRevealBox = document.getElementById('polyRevealBox');
  const polyRevealText = document.getElementById('polyRevealText');

  const polyQuestions = [
    {
      formula: 'Ca(NO3)2',
      ion: '[[chem:NO3 -]] = nitrate',
      answer: 'keep',
      finalName: 'calcium nitrate'
    },
    {
      formula: 'Na2SO4',
      ion: '[[chem:SO4 2-]] = sulfate',
      answer: 'keep',
      finalName: 'sodium sulfate'
    },
    {
      formula: 'Fe(OH)3',
      ion: '[[chem:OH -]] = hydroxide',
      answer: 'keep',
      finalName: 'iron(III) hydroxide'
    },
    {
      formula: 'MgCl2',
      ion: '[[chem:Cl -]] = chlorine ion',
      answer: 'ide',
      finalName: 'magnesium chloride'
    },
    {
      formula: 'K2CO3',
      ion: '[[chem:CO3 2-]] = carbonate',
      answer: 'keep',
      finalName: 'potassium carbonate'
    },
    {
      formula: '(NH4)3PO4',
      ion: '[[chem:NH4 +]] = ammonium',
      answer: 'keep',
      finalName: 'ammonium phosphate'
    },
    {
      formula: 'Al2(SO4)3',
      ion: '[[chem:SO4 2-]] = sulfate',
      answer: 'keep',
      finalName: 'aluminum sulfate'
    },
    {
      formula: 'CaF2',
      ion: '[[chem:F -]] = fluorine ion',
      answer: 'ide',
      finalName: 'calcium fluoride'
    },
    {
      formula: 'K2S',
      ion: '[[chem:S 2-]] = sulfur ion',
      answer: 'ide',
      finalName: 'potassium sulfide'
    },
    {
      formula: 'Li3N',
      ion: '[[chem:N 3-]] = nitrogen ion',
      answer: 'ide',
      finalName: 'lithium nitride'
    },
    {
      formula: 'Al2O3',
      ion: '[[chem:O 2-]] = oxygen ion',
      answer: 'ide',
      finalName: 'aluminum oxide'
    },
    {
      formula: 'NaBr',
      ion: '[[chem:Br -]] = bromine ion',
      answer: 'ide',
      finalName: 'sodium bromide'
    }
  ];

  let currentPolyIndex = -1;
  let selectedPoly = '';
  let polyChecked = false;

  function loadPolyQuestion() {
    currentPolyIndex = pickNextIndex(polyQuestions, currentPolyIndex);
    const question = polyQuestions[currentPolyIndex];
    selectedPoly = '';
    polyChecked = false;
    polyFormula.innerHTML = renderChemSpecies(question.formula);
    polyIon.innerHTML = injectChemMarkup(question.ion);
    setFeedbackState(polyFeedback, 'pending', 'Decide what happens to the highlighted ion name before the compound name is shown.');
    polyRevealBtn.disabled = true;
    polyNextBtn.disabled = true;
    setRevealOpen(polyRevealBox, false);
    polyRevealText.innerHTML = '';
    resetChoiceButtons(polyChoices);
    shuffleChoiceButtons(polyChoices);
  }

  setupChoiceGroup(polyChoices, (value) => {
    selectedPoly = value;
  });

  polyCheckBtn.addEventListener('click', function () {
    const question = polyQuestions[currentPolyIndex];
    if (!selectedPoly) {
      setFeedbackState(polyFeedback, 'incorrect', 'No naming move chosen yet. Pick one first, then check.');
      return;
    }

    polyChecked = true;
    polyRevealBtn.disabled = false;
    polyNextBtn.disabled = false;
    resetChoiceButtons(polyChoices);
    const chosenButton = polyChoices.find((button) => button.dataset.value === selectedPoly);

    if (selectedPoly === question.answer) {
      chosenButton.classList.add('correct');
      setFeedbackState(polyFeedback, 'correct', 'Right — polyatomic ions keep their memorized names, while single-element anions change to -ide.');
      return;
    }

    chosenButton.classList.add('incorrect');
    setFeedbackState(polyFeedback, 'incorrect', 'That changes the wrong kind of ion. -ide is for single-element anions like chloride or oxide. A polyatomic ion keeps its own name.');
  });

  polyRevealBtn.addEventListener('click', function () {
    if (!polyChecked) return;
    const question = polyQuestions[currentPolyIndex];
    if (question.answer === 'keep') {
      polyRevealText.innerHTML = `<p>The highlighted part is a <strong>polyatomic ion</strong>, so its memorized name stays the same.</p><p>Do not change it to -ide.</p><p>Final name: <strong>${question.finalName}</strong>.</p>`;
    } else {
      polyRevealText.innerHTML = `<p>The highlighted part is a <strong>single-element anion</strong>, not a polyatomic ion.</p><p>That means its ending changes to <strong>-ide</strong>.</p><p>Final name: <strong>${question.finalName}</strong>.</p>`;
    }
    setRevealOpen(polyRevealBox, true);
  });

  polyNextBtn.addEventListener('click', loadPolyQuestion);

  /* ── Tool D: Acid Rule Chooser ── */
  const acidFormula = document.getElementById('acidFormula');
  const acidChoices = Array.from(document.querySelectorAll('#acidChoices .tool-choice-btn'));
  const acidCheckBtn = document.getElementById('acidCheckBtn');
  const acidRevealBtn = document.getElementById('acidRevealBtn');
  const acidNextBtn = document.getElementById('acidNextBtn');
  const acidFeedback = document.getElementById('acidFeedback');
  const acidRevealBox = document.getElementById('acidRevealBox');
  const acidRevealText = document.getElementById('acidRevealText');

  const acidQuestions = [
    {
      formula: 'HBr(aq)',
      answer: 'binary',
      finalName: 'hydrobromic acid',
      reveal: '<p>No oxygen is present, so this is a binary acid.</p><p>Use hydro- + brom + -ic acid.</p><p>Final name: <strong>hydrobromic acid</strong>.</p>'
    },
    {
      formula: 'H2S(aq)',
      answer: 'binary',
      finalName: 'hydrosulfuric acid',
      reveal: '<p>No oxygen is present, so this is a binary acid.</p><p>Use hydro- + sulfur + -ic acid.</p><p>Final name: <strong>hydrosulfuric acid</strong>.</p>'
    },
    {
      formula: 'HNO3(aq)',
      answer: 'oxyacid',
      finalName: 'nitric acid',
      reveal: '<p>Oxygen is present, so this is an oxyacid.</p><p>The ion is nitrate. -ate becomes -ic acid.</p><p>Final name: <strong>nitric acid</strong>.</p>'
    },
    {
      formula: 'H2SO3(aq)',
      answer: 'oxyacid',
      finalName: 'sulfurous acid',
      reveal: '<p>Oxygen is present, so this is an oxyacid.</p><p>The ion is sulfite. -ite becomes -ous acid.</p><p>Final name: <strong>sulfurous acid</strong>.</p>'
    },
    {
      formula: 'HI(aq)',
      answer: 'binary',
      finalName: 'hydroiodic acid',
      reveal: '<p>No oxygen is present, so this is a binary acid.</p><p>Use hydro- + iod + -ic acid.</p><p>Final name: <strong>hydroiodic acid</strong>.</p>'
    },
    {
      formula: 'HF(aq)',
      answer: 'binary',
      finalName: 'hydrofluoric acid',
      reveal: '<p>No oxygen is present, so this is a binary acid.</p><p>Use hydro- + fluor + -ic acid.</p><p>Final name: <strong>hydrofluoric acid</strong>.</p>'
    },
    {
      formula: 'HCl(aq)',
      answer: 'binary',
      finalName: 'hydrochloric acid',
      reveal: '<p>No oxygen is present, so this is a binary acid.</p><p>Use hydro- + chlor + -ic acid.</p><p>Final name: <strong>hydrochloric acid</strong>.</p>'
    },
    {
      formula: 'HCN(aq)',
      answer: 'binary',
      finalName: 'hydrocyanic acid',
      reveal: '<p>No oxygen is present, so this follows the binary acid pattern.</p><p>Use hydro- + cyan + -ic acid.</p><p>Final name: <strong>hydrocyanic acid</strong>.</p>'
    },
    {
      formula: 'HNO2(aq)',
      answer: 'oxyacid',
      finalName: 'nitrous acid',
      reveal: '<p>Oxygen is present, so this is an oxyacid.</p><p>The ion is nitrite. -ite becomes -ous acid.</p><p>Final name: <strong>nitrous acid</strong>.</p>'
    },
    {
      formula: 'H2CO3(aq)',
      answer: 'oxyacid',
      finalName: 'carbonic acid',
      reveal: '<p>Oxygen is present, so this is an oxyacid.</p><p>The ion is carbonate. -ate becomes -ic acid.</p><p>Final name: <strong>carbonic acid</strong>.</p>'
    },
    {
      formula: 'HClO4(aq)',
      answer: 'oxyacid',
      finalName: 'perchloric acid',
      reveal: '<p>Oxygen is present, so this is an oxyacid.</p><p>The ion is perchlorate. -ate becomes -ic acid while keeping the per- prefix.</p><p>Final name: <strong>perchloric acid</strong>.</p>'
    },
    {
      formula: 'H3PO4(aq)',
      answer: 'oxyacid',
      finalName: 'phosphoric acid',
      reveal: '<p>Oxygen is present, so this is an oxyacid.</p><p>The ion is phosphate. -ate becomes -ic acid.</p><p>Final name: <strong>phosphoric acid</strong>.</p>'
    }
  ];

  let currentAcidIndex = -1;
  let selectedAcid = '';
  let acidChecked = false;

  function loadAcidQuestion() {
    currentAcidIndex = pickNextIndex(acidQuestions, currentAcidIndex);
    const question = acidQuestions[currentAcidIndex];
    selectedAcid = '';
    acidChecked = false;
    acidFormula.innerHTML = renderChemSpecies(question.formula);
    setFeedbackState(acidFeedback, 'pending', 'Choose the acid rule before you name it.');
    acidRevealBtn.disabled = true;
    acidNextBtn.disabled = true;
    setRevealOpen(acidRevealBox, false);
    acidRevealText.innerHTML = '';
    resetChoiceButtons(acidChoices);
    shuffleChoiceButtons(acidChoices);
  }

  setupChoiceGroup(acidChoices, (value) => {
    selectedAcid = value;
  });

  acidCheckBtn.addEventListener('click', function () {
    const question = acidQuestions[currentAcidIndex];
    if (!selectedAcid) {
      setFeedbackState(acidFeedback, 'incorrect', 'No acid rule chosen yet. Pick one first, then check.');
      return;
    }

    acidChecked = true;
    acidRevealBtn.disabled = false;
    acidNextBtn.disabled = false;
    resetChoiceButtons(acidChoices);
    const chosenButton = acidChoices.find((button) => button.dataset.value === selectedAcid);

    if (selectedAcid === question.answer) {
      chosenButton.classList.add('correct');
      setFeedbackState(acidFeedback, 'correct', 'Right — this formula uses the correct acid pattern. Binary acids use hydro- ... -ic acid, while oxyacids are named from the ion ending.');
      return;
    }

    chosenButton.classList.add('incorrect');
    setFeedbackState(acidFeedback, 'incorrect', 'Wrong acid rule. Check for oxygen first, then choose binary acid or oxyacid naming.');
  });

  acidRevealBtn.addEventListener('click', function () {
    if (!acidChecked) return;
    const question = acidQuestions[currentAcidIndex];
    acidRevealText.innerHTML = injectChemMarkup(question.reveal);
    setRevealOpen(acidRevealBox, true);
  });

  acidNextBtn.addEventListener('click', loadAcidQuestion);

  loadClassifyQuestion();
  loadRomanQuestion();
  loadPolyQuestion();
  loadAcidQuestion();

});
