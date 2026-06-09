document.addEventListener('DOMContentLoaded', function () {
  function shuffleList(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function pickNextIndex(items, currentIndex) {
    if (!items.length) return 0;
    let nextIndex = Math.floor(Math.random() * items.length);
    if (items.length > 1) {
      while (nextIndex === currentIndex) nextIndex = Math.floor(Math.random() * items.length);
    }
    return nextIndex;
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

  function injectChemMarkup(text) {
    if (!text) return text;
    return text
      .replace(/\[\[chem:(.+?)\]\]/g, function (_, species) {
        return renderChemSpecies(species);
      })
      .replace(/\[\[eq:(.+?)\]\]/g, function (_, equation) {
        return renderEquationMarkup(equation);
      });
  }

  function formatFormulaToken(token) {
    const withCoeff = token.replace(/^(\d+)(?=[A-Z(])/, '<span class="eq-coeff">$1</span>');
    return withCoeff.replace(/([A-Za-z\)])(\d+)/g, '$1<span class="chem-sub">$2</span>');
  }

  function renderEquationMarkup(text) {
    return `<span class="chem-eq">${text.split(/(\s+|→|\+)/).map(function (part) {
      if (part === '→') return '<span class="chem-op eq-arrow">→</span>';
      if (part === '+') return '<span class="chem-op">+</span>';
      if (/^\s+$/.test(part) || !part) return '';
      return `<span class="chem-token">${formatFormulaToken(part)}</span>`;
    }).join('')}</span>`;
  }

  function normalizeNotationHtml(text) {
    return injectChemMarkup(text);
  }

  const typeScenarios = [
    {
      equation: 'AgNO3(aq) + NaCl(aq) → AgCl(s) + NaNO3(aq)',
      answer: 'double',
      feedbackCorrect: 'Right — the compounds swapped ions, so the reaction fits the double-replacement pattern.',
      feedbackIncorrect: 'Not quite — the error is treating any two-reactant equation as the same pattern. Check whether two compounds swap ions or whether one free element replaces another.',
      revealHtml: `
        <div class="tool-subhead">Key clue</div>
        <p>Two ionic compounds switched partners, and a solid formed.</p>
        <div class="tool-subhead">Pattern</div>
        <p>AB + CD → AD + CB</p>
        <div class="tool-subhead">Compare it to</div>
        <p>In single replacement, one element replaces another element in a compound. That is not what happens here.</p>
      `
    },
    {
      equation: '2KClO3 → 2KCl + 3O2',
      answer: 'decomposition',
      feedbackCorrect: 'Right — one reactant broke into simpler products, so this is a decomposition reaction.',
      feedbackIncorrect: 'Not quite — the error is missing the one-reactant clue. One reactant breaking into simpler products is the decomposition pattern.',
      revealHtml: `
        <div class="tool-subhead">Key clue</div>
        <p>There is only one reactant formula, and it breaks into smaller products.</p>
        <div class="tool-subhead">Pattern</div>
        <p>AB → A + B</p>
        <div class="tool-subhead">Compare it to</div>
        <p>Synthesis goes the other direction: smaller pieces join to make one product.</p>
      `
    },
    {
      equation: 'Zn + 2HCl → ZnCl2 + H2',
      answer: 'single',
      feedbackCorrect: 'Right — zinc replaced hydrogen in the compound, so this is a single-replacement reaction.',
      feedbackIncorrect: 'Not quite — the error is overlooking the free element. One element takes the place of another in a compound in a single-replacement reaction.',
      revealHtml: `
        <div class="tool-subhead">Key clue</div>
        <p>Zinc is a single element, and it takes hydrogen’s place in the compound.</p>
        <div class="tool-subhead">Pattern</div>
        <p>A + BC → AC + B</p>
        <div class="tool-subhead">Compare it to</div>
        <p>In double replacement, two compounds swap ions. Here, only one free element does the replacing.</p>
      `
    },
    {
      equation: 'CH4 + 2O2 → CO2 + 2H2O',
      answer: 'combustion',
      feedbackCorrect: 'Right — [[chem:O2]] is a reactant, and this hydrocarbon combustion forms [[chem:CO2]] and [[chem:H2O]].',
      feedbackIncorrect: 'Not quite — the error is missing the [[chem:O2]] pattern clue. Combustion uses [[chem:O2]] as a reactant and forms oxides such as [[chem:CO2]] and [[chem:H2O]].',
      revealHtml: `
        <div class="tool-subhead">Key clue</div>
        <p>[[chem:O2]] is a reactant, and the products are [[chem:CO2]] and [[chem:H2O]].</p>
        <div class="tool-subhead">Pattern</div>
        <p>[[eq:fuel + O2 → CO2 + H2O]]</p>
        <div class="tool-subhead">Compare it to</div>
        <p>Combustion is identified by the role of [[chem:O2]] and the oxide products, not just by the number of reactants.</p>
      `
    },
    {
      equation: '2Mg + O2 → 2MgO',
      answer: 'synthesis',
      feedbackCorrect: 'Right — two simpler reactants combine to make one product, so this is synthesis.',
      feedbackIncorrect: 'Not quite — this pattern shows smaller pieces combining into one product.',
      revealHtml: `<div class="tool-subhead">Key clue</div><p>Two reactants combine into a single product compound.</p><div class="tool-subhead">Pattern</div><p>A + B → AB</p><div class="tool-subhead">Compare it to</div><p>Decomposition would start with one reactant, not two.</p>`
    },
    {
      equation: 'CaCO3 → CaO + CO2',
      answer: 'decomposition',
      feedbackCorrect: 'Right — one reactant breaks into simpler products, so this is decomposition.',
      feedbackIncorrect: 'Not quite — look for the one-reactant clue. One compound is breaking apart.',
      revealHtml: `<div class="tool-subhead">Key clue</div><p>One reactant breaks into two simpler products.</p><div class="tool-subhead">Pattern</div><p>AB → A + B</p><div class="tool-subhead">Compare it to</div><p>Synthesis goes in the opposite direction.</p>`
    },
    {
      equation: 'Cl2 + 2KI → 2KCl + I2',
      answer: 'single',
      feedbackCorrect: 'Right — chlorine replaces iodine in the compound, so this is single replacement.',
      feedbackIncorrect: 'Not quite — a free element is taking the place of another element in a compound.',
      revealHtml: `<div class="tool-subhead">Key clue</div><p>A free element replaces another element in a compound.</p><div class="tool-subhead">Pattern</div><p>A + BC → AC + B</p><div class="tool-subhead">Compare it to</div><p>Double replacement would start with two compounds.</p>`
    },
    {
      equation: 'C3H8 + 5O2 → 3CO2 + 4H2O',
      answer: 'combustion',
      feedbackCorrect: 'Right — oxygen reacts with a hydrocarbon to make [[chem:CO2]] and [[chem:H2O]], so this is combustion.',
      feedbackIncorrect: 'Not quite — [[chem:O2]] as a reactant plus [[chem:CO2]] and [[chem:H2O]] as products is the combustion pattern.',
      revealHtml: `<div class="tool-subhead">Key clue</div><p>[[chem:O2]] is a reactant and the products are carbon dioxide and water.</p><div class="tool-subhead">Pattern</div><p>[[eq:fuel + O2 → CO2 + H2O]]</p><div class="tool-subhead">Compare it to</div><p>This is identified by the oxygen/fuel pattern, not just by having two reactants.</p>`
    },
    {
      equation: '2Na + Cl2 → 2NaCl',
      answer: 'synthesis',
      feedbackCorrect: 'Right — the reactants join to make one compound, so this is synthesis.',
      feedbackIncorrect: 'Not quite — this is a combine-into-one-product pattern, which is synthesis.',
      revealHtml: `<div class="tool-subhead">Key clue</div><p>Two reactants combine into a single product.</p><div class="tool-subhead">Pattern</div><p>A + B → AB</p><div class="tool-subhead">Compare it to</div><p>Single replacement would produce a free element as a product.</p>`
    },
    {
      equation: '2HgO → 2Hg + O2',
      answer: 'decomposition',
      feedbackCorrect: 'Right — one reactant breaks apart, so this is decomposition.',
      feedbackIncorrect: 'Not quite — a single compound is breaking down into simpler substances.',
      revealHtml: `<div class="tool-subhead">Key clue</div><p>There is one reactant only, and it breaks into simpler products.</p><div class="tool-subhead">Pattern</div><p>AB → A + B</p><div class="tool-subhead">Compare it to</div><p>Synthesis would have one product instead of one reactant.</p>`
    },
    {
      equation: 'Fe + CuSO4 → FeSO4 + Cu',
      answer: 'single',
      feedbackCorrect: 'Right — iron replaces copper in the compound, so this is single replacement.',
      feedbackIncorrect: 'Not quite — one free element is replacing another element in a compound.',
      revealHtml: `<div class="tool-subhead">Key clue</div><p>Iron starts free and takes copper’s place in the compound.</p><div class="tool-subhead">Pattern</div><p>A + BC → AC + B</p><div class="tool-subhead">Compare it to</div><p>Double replacement would begin with two ionic compounds.</p>`
    },
    {
      equation: '2H2 + O2 → 2H2O',
      answer: 'synthesis',
      feedbackCorrect: 'Right — hydrogen and oxygen combine to form one product, so this is synthesis.',
      feedbackIncorrect: 'Not quite — this reaction combines simpler substances into one compound.',
      revealHtml: `<div class="tool-subhead">Key clue</div><p>Two reactants join to make one product.</p><div class="tool-subhead">Pattern</div><p>[[eq:A + B → AB]]</p><div class="tool-subhead">Compare it to</div><p>Combustion usually involves a fuel producing [[chem:CO2]] and [[chem:H2O]].</p>`
    },
    {
      equation: '2NaHCO3 → Na2CO3 + CO2 + H2O',
      answer: 'decomposition',
      feedbackCorrect: 'Right — one reactant breaks apart into several products, so this is decomposition.',
      feedbackIncorrect: 'Not quite — the one-reactant clue points to decomposition.',
      revealHtml: `<div class="tool-subhead">Key clue</div><p>Only one reactant is present, and it breaks into multiple products.</p><div class="tool-subhead">Pattern</div><p>AB → A + B + ...</p><div class="tool-subhead">Compare it to</div><p>Synthesis would move toward fewer formulas, not more.</p>`
    },
    {
      equation: '2C2H6 + 7O2 → 4CO2 + 6H2O',
      answer: 'combustion',
      feedbackCorrect: 'Right — a hydrocarbon reacts with [[chem:O2]] to form [[chem:CO2]] and [[chem:H2O]], so this is combustion.',
      feedbackIncorrect: 'Not quite — hydrocarbon plus oxygen making [[chem:CO2]] and [[chem:H2O]] is the combustion pattern.',
      revealHtml: `<div class="tool-subhead">Key clue</div><p>Ethane reacts with oxygen and makes carbon dioxide and water.</p><div class="tool-subhead">Pattern</div><p>[[eq:fuel + O2 → CO2 + H2O]]</p><div class="tool-subhead">Compare it to</div><p>This is the standard hydrocarbon combustion pattern.</p>`
    },
    {
      equation: 'Pb(NO3)2(aq) + 2KI(aq) → PbI2(s) + 2KNO3(aq)',
      answer: 'double',
      feedbackCorrect: 'Right — the ions swap partners, so this is double replacement.',
      feedbackIncorrect: 'Not quite — two ionic compounds are exchanging ions here.',
      revealHtml: `<div class="tool-subhead">Key clue</div><p>Two compounds switch ions and make a new pair of compounds.</p><div class="tool-subhead">Pattern</div><p>AB + CD → AD + CB</p><div class="tool-subhead">Compare it to</div><p>Single replacement would involve one free element, not two compounds.</p>`
    }
  ];

  const balanceScenarios = [
    {
      equation: 'H2 + O2 → H2O',
      answer: 'not-balanced',
      feedbackCorrect: 'Right — an equation is balanced only when every element has the same count on both sides.',
      feedbackIncorrect: 'Not quite — the error is stopping after one element matches. Recount each element one at a time and compare the left side to the right side.',
      rows: [
        { el: 'H', left: 2, right: 2 },
        { el: 'O', left: 2, right: 1 }
      ],
      noteLabel: 'Next fix',
      note: 'Oxygen does not match yet. The left side has 2 O atoms, but the right side has 1 O atom.'
    },
    {
      equation: '2H2 + O2 → 2H2O',
      answer: 'balanced',
      feedbackCorrect: 'Right — an equation is balanced only when every element has the same count on both sides.',
      feedbackIncorrect: 'Not quite — the error is judging by appearance instead of atom counts. Hydrogen and oxygen both match on the two sides here.',
      rows: [
        { el: 'H', left: 4, right: 4 },
        { el: 'O', left: 2, right: 2 }
      ],
      noteLabel: 'Why it works',
      note: 'Hydrogen and oxygen both match, so the equation is balanced.'
    },
    {
      equation: 'Fe + O2 → Fe2O3',
      answer: 'not-balanced',
      feedbackCorrect: 'Right — an equation is balanced only when every element has the same count on both sides.',
      feedbackIncorrect: 'Not quite — the error is not checking both elements. This equation is not balanced because both Fe and O change count across the arrow.',
      rows: [
        { el: 'Fe', left: 1, right: 2 },
        { el: 'O', left: 2, right: 3 }
      ],
      noteLabel: 'Next fix',
      note: 'Neither element matches yet. You would need coefficients to balance both Fe and O.'
    },
    {
      equation: 'N2 + 3H2 → 2NH3',
      answer: 'balanced',
      feedbackCorrect: 'Right — an equation is balanced only when every element has the same count on both sides.',
      feedbackIncorrect: 'Not quite — the error is assuming the coefficients make it look complicated. Recount N and H one at a time; both element counts match here.',
      rows: [
        { el: 'N', left: 2, right: 2 },
        { el: 'H', left: 6, right: 6 }
      ],
      noteLabel: 'Why it works',
      note: 'Nitrogen and hydrogen both match, so the equation is balanced.'
    }
  ];

  const oxScenarios = [
    {
      equation: 'AgNO3(aq) + NaCl(aq) → AgCl + NaNO3',
      answer: 'AgCl',
      choices: ['AgCl', 'NaNO3', 'No precipitate'],
      feedbackCorrect: 'Right — the key rule is that AgCl is insoluble, so it forms the solid precipitate.',
      feedbackIncorrect: 'Not quite — the error is ignoring the solubility exception. Most chlorides dissolve, but AgCl is one of the important insoluble exceptions.',
      revealHtml: `
        <ol class="tool-steps">
          <li>Swap ions to predict the products: [[chem:AgCl]] and [[chem:NaNO3]].</li>
          <li>All nitrates are soluble, so [[chem:NaNO3]] stays aqueous.</li>
          <li>AgCl is an insoluble chloride, so <strong>AgCl(s)</strong> is the precipitate.</li>
        </ol>
      `
    },
    {
      equation: 'Ba(NO3)2(aq) + Na2SO4(aq) → BaSO4 + NaNO3',
      answer: 'BaSO4',
      choices: ['BaSO4', 'NaNO3', 'No precipitate'],
      feedbackCorrect: 'Right — [[chem:BaSO4]] is one of the common insoluble sulfate exceptions, so it forms the precipitate.',
      feedbackIncorrect: 'Not quite — the error is treating all sulfates as soluble. Most are, but [[chem:BaSO4]] is a standard insoluble exception.',
      revealHtml: `
        <ol class="tool-steps">
          <li>Swap ions to predict the products: [[chem:BaSO4]] and [[chem:NaNO3]].</li>
          <li>Nitrates stay soluble, so [[chem:NaNO3]] remains aqueous.</li>
          <li>[[chem:BaSO4]] is insoluble, so <strong>BaSO4(s)</strong> is the precipitate.</li>
        </ol>
      `
    },
    {
      equation: 'KNO3(aq) + NaCl(aq) → KCl + NaNO3',
      answer: 'No precipitate',
      choices: ['KCl', 'NaNO3', 'No precipitate'],
      feedbackCorrect: 'Right — both predicted products are soluble, so no precipitate forms.',
      feedbackIncorrect: 'Not quite — the error is assuming every ion swap makes a solid. Check both products: nitrates are soluble and KCl is also soluble.',
      revealHtml: `
        <ol class="tool-steps">
          <li>Swap ions to predict the products: [[chem:KCl]] and [[chem:NaNO3]].</li>
          <li>All nitrates are soluble, so [[chem:NaNO3]] stays aqueous.</li>
          <li>Group 1 salts such as KCl are soluble, so both products stay dissolved and <strong>no precipitate forms</strong>.</li>
        </ol>
      `
    },
    {
      equation: 'Pb(NO3)2(aq) + 2KI(aq) → PbI2 + 2KNO3',
      answer: 'PbI2',
      choices: ['PbI2', 'KNO3', 'No precipitate'],
      feedbackCorrect: 'Right — lead(II) iodide is insoluble, so it forms the precipitate.',
      feedbackIncorrect: 'Not quite — nitrates stay soluble, but [[chem:PbI2]] is an insoluble iodide.',
      revealHtml: `<ol class="tool-steps"><li>Swap ions to predict [[chem:PbI2]] and [[chem:KNO3]].</li><li>All nitrates are soluble, so [[chem:KNO3]] stays aqueous.</li><li>[[chem:PbI2]] is insoluble, so <strong>PbI2(s)</strong> is the precipitate.</li></ol>`
    },
    {
      equation: 'CaCl2(aq) + Na2CO3(aq) → CaCO3 + 2NaCl',
      answer: 'CaCO3',
      choices: ['CaCO3', 'NaCl', 'No precipitate'],
      feedbackCorrect: 'Right — calcium carbonate is insoluble, so it precipitates.',
      feedbackIncorrect: 'Not quite — sodium salts stay soluble, but [[chem:CaCO3]] is insoluble.',
      revealHtml: `<ol class="tool-steps"><li>Swap ions to predict [[chem:CaCO3]] and [[chem:NaCl]].</li><li>Group 1 salts such as [[chem:NaCl]] stay soluble.</li><li>Carbonates are usually insoluble unless paired with Group 1 or [[chem:NH4+]], so <strong>CaCO3(s)</strong> precipitates.</li></ol>`
    },
    {
      equation: 'Na2SO4(aq) + KNO3(aq) → K2SO4 + NaNO3',
      answer: 'No precipitate',
      choices: ['K2SO4', 'NaNO3', 'No precipitate'],
      feedbackCorrect: 'Right — both predicted products stay soluble, so no precipitate forms.',
      feedbackIncorrect: 'Not quite — Group 1 salts and nitrates stay soluble, so no solid forms here.',
      revealHtml: `<ol class="tool-steps"><li>Swap ions to predict [[chem:K2SO4]] and [[chem:NaNO3]].</li><li>[[chem:NaNO3]] is soluble because all nitrates dissolve.</li><li>[[chem:K2SO4]] is a Group 1 salt and stays soluble, so <strong>no precipitate forms</strong>.</li></ol>`
    },
    {
      equation: 'CuSO4(aq) + 2NaOH(aq) → Cu(OH)2 + Na2SO4',
      answer: 'Cu(OH)2',
      choices: ['Cu(OH)2', 'Na2SO4', 'No precipitate'],
      feedbackCorrect: 'Right — copper(II) hydroxide is insoluble, so it precipitates.',
      feedbackIncorrect: 'Not quite — hydroxides are often insoluble except for Group 1 and some Group 2 cases. [[chem:Cu(OH)2]] forms the solid.',
      revealHtml: `<ol class="tool-steps"><li>Swap ions to predict [[chem:Cu(OH)2]] and [[chem:Na2SO4]].</li><li>Sodium sulfate stays dissolved.</li><li>Copper(II) hydroxide is insoluble, so <strong>Cu(OH)2(s)</strong> is the precipitate.</li></ol>`
    },
    {
      equation: 'MgCl2(aq) + Na2CO3(aq) → MgCO3 + 2NaCl',
      answer: 'MgCO3',
      choices: ['MgCO3', 'NaCl', 'No precipitate'],
      feedbackCorrect: 'Right — magnesium carbonate is insoluble, so it precipitates.',
      feedbackIncorrect: 'Not quite — sodium salts stay soluble, but [[chem:MgCO3]] is insoluble.',
      revealHtml: `<ol class="tool-steps"><li>Swap ions to predict [[chem:MgCO3]] and [[chem:NaCl]].</li><li>[[chem:NaCl]] stays aqueous.</li><li>Most carbonates are insoluble, so <strong>MgCO3(s)</strong> precipitates.</li></ol>`
    },
    {
      equation: 'NaCl(aq) + KBr(aq) → NaBr + KCl',
      answer: 'No precipitate',
      choices: ['NaBr', 'KCl', 'No precipitate'],
      feedbackCorrect: 'Right — all predicted products stay soluble, so no precipitate forms.',
      feedbackIncorrect: 'Not quite — Group 1 salts stay soluble, so neither product forms a solid.',
      revealHtml: `<ol class="tool-steps"><li>Swap ions to predict NaBr and KCl.</li><li>Both are Group 1 salts and stay soluble.</li><li>So <strong>no precipitate forms</strong>.</li></ol>`
    },
    {
      equation: 'AgNO3(aq) + Na2CO3(aq) → Ag2CO3 + NaNO3',
      answer: 'Ag2CO3',
      choices: ['Ag2CO3', 'NaNO3', 'No precipitate'],
      feedbackCorrect: 'Right — silver carbonate is insoluble, so it precipitates.',
      feedbackIncorrect: 'Not quite — nitrates stay soluble, but [[chem:Ag2CO3]] is insoluble.',
      revealHtml: `<ol class="tool-steps"><li>Swap ions to predict [[chem:Ag2CO3]] and [[chem:NaNO3]].</li><li>[[chem:NaNO3]] stays aqueous because nitrates are soluble.</li><li>Most carbonates are insoluble, so <strong>Ag2CO3(s)</strong> precipitates.</li></ol>`
    },
    {
      equation: 'BaCl2(aq) + Na2SO4(aq) → BaSO4 + 2NaCl',
      answer: 'BaSO4',
      choices: ['BaSO4', 'NaCl', 'No precipitate'],
      feedbackCorrect: 'Right — barium sulfate is insoluble, so it precipitates.',
      feedbackIncorrect: 'Not quite — sodium salts stay soluble, but [[chem:BaSO4]] is an insoluble sulfate exception.',
      revealHtml: `<ol class="tool-steps"><li>Swap ions to predict [[chem:BaSO4]] and [[chem:NaCl]].</li><li>[[chem:NaCl]] stays dissolved.</li><li>[[chem:BaSO4]] is insoluble, so <strong>BaSO4(s)</strong> precipitates.</li></ol>`
    },
    {
      equation: 'NH4Cl(aq) + NaNO3(aq) → NH4NO3 + NaCl',
      answer: 'No precipitate',
      choices: ['NH4NO3', 'NaCl', 'No precipitate'],
      feedbackCorrect: 'Right — ammonium salts, nitrates, and sodium salts stay soluble, so no precipitate forms.',
      feedbackIncorrect: 'Not quite — both predicted products remain soluble here.',
      revealHtml: `<ol class="tool-steps"><li>Swap ions to predict [[chem:NH4NO3]] and [[chem:NaCl]].</li><li>Ammonium salts and nitrates are soluble.</li><li>[[chem:NaCl]] also stays soluble, so <strong>no precipitate forms</strong>.</li></ol>`
    }
  ];

  function showEl(el, show = true) {
    if (el) el.hidden = !show;
  }

  function setFeedbackState(element, message) {
    if (!element) return;
    element.innerHTML = normalizeNotationHtml(message);
    let state = 'info';
    if (/^Right\b/.test(message)) state = 'correct';
    else if (/^Not quite\b/.test(message)) state = 'incorrect';
    else if (/click Check\.?$|first\.?$/.test(message)) state = 'pending';
    element.dataset.state = state;
  }

  function setupChoiceButtons(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return { buttons: [], getSelected: () => null, mark: () => {}, reset: () => {}, setChoices: () => {} };
    const buttons = Array.from(container.querySelectorAll('.explore-choice'));
    let selected = null;

    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', function () {
        if (button.disabled) return;
        selected = button.dataset.choice;
        buttons.forEach((btn) => {
          btn.classList.remove('active');
          btn.setAttribute('aria-pressed', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');
      });
    });

    return {
      buttons,
      getSelected: () => selected,
      mark(correctChoice) {
        buttons.forEach((button) => {
          button.disabled = true;
          button.classList.remove('active');
          button.setAttribute('aria-pressed', 'false');
          if (button.dataset.choice === correctChoice) {
            button.classList.add('correct');
          } else if (button.dataset.choice === selected) {
            button.classList.add('incorrect');
          }
        });
      },
      reset() {
        selected = null;
        buttons.forEach((button) => {
          button.disabled = false;
          button.classList.remove('correct', 'incorrect', 'active');
          button.setAttribute('aria-pressed', 'false');
        });
      },
      setChoices(newChoices) {
        const orderedChoices = shuffleList(newChoices);
        orderedChoices.forEach((choice, index) => {
          const button = buttons[index];
          button.dataset.choice = choice;
          button.innerHTML = formatFormulaToken(choice);
        });
      }
    };
  }

  function showFeedback(element, correct, message) {
    setFeedbackState(element, message);
  }

  function clearToolState(choiceApi, feedbackEl, revealBtn, revealEl, anotherBtn, supportEl) {
    choiceApi.reset();
    setFeedbackState(feedbackEl, feedbackEl.dataset.default || 'Choose one answer, then click Check.');
    revealBtn.disabled = true;
    anotherBtn.disabled = true;
    showEl(revealEl, false);
    showEl(supportEl, false);
  }

  function nextScenario(currentIndex, total) {
    if (total <= 1) return 0;
    let nextIndex = Math.floor(Math.random() * total);
    while (nextIndex === currentIndex) nextIndex = Math.floor(Math.random() * total);
    return nextIndex;
  }

  /* ── Tool A: Reaction Type Identifier ── */
  const typeChoices = setupChoiceButtons('typeChoices');
  const typeEquation = document.getElementById('typeEquation');
  const typeCheckBtn = document.getElementById('typeCheckBtn');
  const typeRevealBtn = document.getElementById('typeRevealBtn');
  const typeAnotherBtn = document.getElementById('typeAnotherBtn');
  const typeFeedback = document.getElementById('typeFeedback');
  const typeReveal = document.getElementById('typeReveal');
  const typeSupport = document.getElementById('typeSupport');
  const typeRevealContent = document.getElementById('typeRevealContent');
  let typeIndex = 0;

  function renderTypeScenario() {
    const scenario = typeScenarios[typeIndex];
    if (typeEquation) typeEquation.innerHTML = renderEquationMarkup(scenario.equation);
    if (typeRevealContent) typeRevealContent.innerHTML = normalizeNotationHtml(scenario.revealHtml);
    clearToolState(typeChoices, typeFeedback, typeRevealBtn, typeReveal, typeAnotherBtn, typeSupport);
  }

  if (typeCheckBtn && typeRevealBtn && typeFeedback && typeReveal && typeAnotherBtn) {
    renderTypeScenario();
    typeCheckBtn.addEventListener('click', function () {
      const scenario = typeScenarios[typeIndex];
      const selected = typeChoices.getSelected();
      if (!selected) {
        showFeedback(typeFeedback, false, 'Choose one reaction type first.');
        return;
      }
      const isCorrect = selected === scenario.answer;
      typeChoices.mark(scenario.answer);
      typeRevealBtn.disabled = false;
      typeAnotherBtn.disabled = false;
      showEl(typeSupport, true);
      showFeedback(
        typeFeedback,
        isCorrect,
        isCorrect ? scenario.feedbackCorrect : scenario.feedbackIncorrect
      );
    });

    typeRevealBtn.addEventListener('click', function () {
      showEl(typeReveal, true);
    });

    typeAnotherBtn.addEventListener('click', function () {
      typeIndex = nextScenario(typeIndex, typeScenarios.length);
      renderTypeScenario();
    });
  }

  /* ── Tool C: Equation Balance Checker ── */
  const balanceChoices = setupChoiceButtons('balanceChoices');
  const balanceEquation = document.getElementById('balanceEquation');
  const balanceCheckBtn = document.getElementById('balanceCheckBtn');
  const balanceRevealBtn = document.getElementById('balanceRevealBtn');
  const balanceAnotherBtn = document.getElementById('balanceAnotherBtn');
  const balanceFeedback = document.getElementById('balanceFeedback');
  const balanceReveal = document.getElementById('balanceReveal');
  const balanceSupport = document.getElementById('balanceSupport');
  const balanceRevealContent = document.getElementById('balanceRevealContent');
  let balanceIndex = 0;

  function renderBalanceReveal(scenario) {
    const rowsHtml = scenario.rows.map((row) => {
      const match = row.left === row.right;
      return `<div class="balance-audit-row">
        <span class="balance-audit-cell balance-audit-cell-label">${row.el}</span>
        <span class="balance-audit-cell"><strong>Left:</strong> ${row.left}</span>
        <span class="balance-audit-cell"><strong>Right:</strong> ${row.right}</span>
        <span class="balance-audit-cell balance-audit-cell-status ${match ? 'is-match' : 'is-mismatch'}">${match ? 'Matches' : 'Does not match'}</span>
      </div>`;
    }).join('');
    balanceRevealContent.innerHTML = `
      <div class="balance-audit-list">${rowsHtml}</div>
      <div class="tool-subhead">${scenario.noteLabel}</div>
      <p>${normalizeNotationHtml(scenario.note)}</p>
      <p><strong>Next step:</strong> If one element does not match, adjust coefficients and recount. Never change subscripts.</p>
    `;
  }

  function renderBalanceScenario() {
    const scenario = balanceScenarios[balanceIndex];
    if (balanceEquation) balanceEquation.innerHTML = renderEquationMarkup(scenario.equation);
    renderBalanceReveal(scenario);
    clearToolState(balanceChoices, balanceFeedback, balanceRevealBtn, balanceReveal, balanceAnotherBtn, balanceSupport);
  }

  if (balanceCheckBtn && balanceRevealBtn && balanceFeedback && balanceReveal && balanceAnotherBtn) {
    renderBalanceScenario();
    balanceCheckBtn.addEventListener('click', function () {
      const scenario = balanceScenarios[balanceIndex];
      const selected = balanceChoices.getSelected();
      if (!selected) {
        showFeedback(balanceFeedback, false, 'Choose balanced or not balanced first.');
        return;
      }
      const isCorrect = selected === scenario.answer;
      balanceChoices.mark(scenario.answer);
      balanceRevealBtn.disabled = false;
      balanceAnotherBtn.disabled = false;
      showEl(balanceSupport, true);
      showFeedback(
        balanceFeedback,
        isCorrect,
        isCorrect ? scenario.feedbackCorrect : scenario.feedbackIncorrect
      );
    });

    balanceRevealBtn.addEventListener('click', function () {
      showEl(balanceReveal, true);
    });

    balanceAnotherBtn.addEventListener('click', function () {
      balanceIndex = nextScenario(balanceIndex, balanceScenarios.length);
      renderBalanceScenario();
    });
  }

  /* ── Tool 3: Precipitate Predictor ── */
  const oxChoices = setupChoiceButtons('oxChoices');
  const oxPrompt = document.getElementById('precipEquation');
  const oxCheckBtn = document.getElementById('oxCheckBtn');
  const oxRevealBtn = document.getElementById('oxRevealBtn');
  const oxAnotherBtn = document.getElementById('oxAnotherBtn');
  const oxFeedback = document.getElementById('oxFeedback');
  const oxReveal = document.getElementById('oxReveal');
  const oxSupport = document.getElementById('oxSupport');
  const oxRevealContent = document.getElementById('oxRevealContent');
  let oxIndex = 0;

  function renderOxScenario() {
    const scenario = oxScenarios[oxIndex];
    if (oxPrompt) oxPrompt.innerHTML = renderEquationMarkup(scenario.equation);
    oxChoices.setChoices(scenario.choices);
    oxRevealContent.innerHTML = normalizeNotationHtml(scenario.revealHtml);
    clearToolState(oxChoices, oxFeedback, oxRevealBtn, oxReveal, oxAnotherBtn, oxSupport);
  }

  if (oxCheckBtn && oxRevealBtn && oxFeedback && oxReveal && oxAnotherBtn) {
    renderOxScenario();
    oxCheckBtn.addEventListener('click', function () {
      const scenario = oxScenarios[oxIndex];
      const selected = oxChoices.getSelected();
      if (!selected) {
        setFeedbackState(oxFeedback, oxFeedback.dataset.default || 'Choose the precipitate, then click Check.');
        return;
      }
      const isCorrect = selected === scenario.answer;
      oxChoices.mark(scenario.answer);
      oxRevealBtn.disabled = false;
      oxAnotherBtn.disabled = false;
      showEl(oxSupport, true);
      showFeedback(
        oxFeedback,
        isCorrect,
        isCorrect ? scenario.feedbackCorrect : scenario.feedbackIncorrect
      );
    });

    oxRevealBtn.addEventListener('click', function () {
      showEl(oxReveal, true);
    });

    oxAnotherBtn.addEventListener('click', function () {
      oxIndex = nextScenario(oxIndex, oxScenarios.length);
      renderOxScenario();
    });
  }

});
