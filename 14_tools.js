// ── 1. TOOL LOGIC ─────────────────────────────────────────────────────────

const equilibriumCards = [
  {
    prompt: 'At equilibrium, what must be true?',
    hint: 'Hint: Focus on rates, not on whether the amounts match.',
    choices: [
      'Forward and reverse rates are equal.',
      'Reactant and product amounts are equal.',
      'The reaction has stopped.'
    ],
    correctIndex: 0,
    revealText: 'At equilibrium, particles still react in both directions. The forward and reverse rates are equal, so the concentrations stop changing even when the amounts on the two sides are not equal.',
    correctFeedback: 'Right — equilibrium means the forward and reverse reaction rates are equal. The amounts can still be different on the two sides.',
    incorrectFeedback: 'Not quite — equal rates do not mean equal amounts. At equilibrium, both directions happen at the same rate, so the concentrations stop changing even if the amounts are different.'
  },
  {
    prompt: 'A reaction mixture is at equilibrium. Which statement can still be true?',
    hint: 'Hint: Equilibrium does not require equal amounts on both sides.',
    choices: [
      'There is more product than reactant.',
      'The reaction has stopped.',
      'Only the forward reaction is happening.'
    ],
    correctIndex: 0,
    revealText: 'Equilibrium only requires equal forward and reverse rates. One side can still contain more particles or a higher concentration than the other.',
    correctFeedback: 'Right — one side can have more particles at equilibrium. Equal rates do not require equal amounts.',
    incorrectFeedback: 'Not quite — equilibrium does not mean the reaction stops or goes only one way. Check whether the statement keeps both directions running at equal rates.'
  },
  {
    prompt: 'At equilibrium, why do the concentrations stop changing?',
    hint: 'Hint: Ask what the forward and reverse reactions are doing at the same time.',
    choices: [
      'Because the forward and reverse rates are equal.',
      'Because all reactants have been used up.',
      'Because the reactant and product concentrations are equal.'
    ],
    correctIndex: 0,
    revealText: 'The concentrations stay constant because each side is changing at the same rate in opposite directions. Particles still react, but the net change is zero.',
    correctFeedback: 'Right — the rates match, so there is no net change in concentration. That is the rule for dynamic equilibrium.',
    incorrectFeedback: 'Not quite — concentrations stop changing when the two reaction rates match. Focus on equal rates, not equal concentrations or running out of reactants.'
  },
  {
    prompt: 'Which statement best describes dynamic equilibrium?',
    hint: 'Hint: Dynamic means particles are still reacting.',
    choices: [
      'Particles keep reacting both ways at equal rates.',
      'Particles stop moving once equilibrium is reached.',
      'Products can no longer change back into reactants.'
    ],
    correctIndex: 0,
    revealText: 'Dynamic equilibrium means the reaction is still active in both directions. The forward and reverse rates are equal, so the overall amounts stay constant.',
    correctFeedback: 'Right — dynamic equilibrium means both directions continue at equal rates. The system is active, not frozen.',
    incorrectFeedback: 'Not quite — dynamic equilibrium is not a stopped system. Look for the choice where both directions are still happening at equal rates.'
  },
  {
    prompt: 'Which statement does equilibrium NOT require?',
    hint: 'Hint: Equal rates do not force equal amounts.',
    choices: ['Equal amounts of reactants and products.', 'Forward and reverse rates are equal.', 'Both directions can occur.'],
    correctIndex: 0,
    revealText: 'Equilibrium requires equal forward and reverse rates, not equal amounts. One side can still contain more particles than the other.',
    correctFeedback: 'Right — equilibrium does not require equal amounts.',
    incorrectFeedback: 'Not quite — equilibrium is about equal rates, not equal amounts.'
  },
  {
    prompt: 'After a disturbed system reaches a new equilibrium, what becomes true again?',
    hint: 'Hint: Think about the two rates after the shift finishes.',
    choices: ['Forward and reverse rates are equal again.', 'The original concentrations return.', 'The reaction stops completely.'],
    correctIndex: 0,
    revealText: 'A new equilibrium still means equal forward and reverse rates, even if the concentrations changed from the original values.',
    correctFeedback: 'Right — the rates become equal again at the new equilibrium.',
    incorrectFeedback: 'Not quite — the new equilibrium still has equal forward and reverse rates.'
  },
  {
    prompt: 'Why can product concentration stay larger than reactant concentration at equilibrium?',
    hint: 'Hint: Rates can match even when amounts do not.',
    choices: ['Because equilibrium only requires equal rates.', 'Because products cannot change back.', 'Because all reactants are used up.'],
    correctIndex: 0,
    revealText: 'Equilibrium is defined by equal rates. The amounts on each side do not have to match.',
    correctFeedback: 'Right — equal rates do not require equal amounts.',
    incorrectFeedback: 'Not quite — equal rates, not equal amounts, define equilibrium.'
  },
  {
    prompt: 'What makes equilibrium “dynamic” instead of static?',
    hint: 'Hint: Ask whether particles are still reacting.',
    choices: ['Both forward and reverse reactions continue.', 'Nothing moves once equilibrium is reached.', 'Only products remain.'],
    correctIndex: 0,
    revealText: 'Dynamic equilibrium means both directions continue while the rates stay equal.',
    correctFeedback: 'Right — particles keep reacting both ways at equilibrium.',
    incorrectFeedback: 'Not quite — dynamic equilibrium is active, not frozen.'
  },
  {
    prompt: 'At equilibrium, what makes the net concentration change zero?',
    hint: 'Hint: Compare the two opposing rates.',
    choices: ['The forward and reverse rates cancel out.', 'The reactants reach zero.', 'The products stop reacting.'],
    correctIndex: 0,
    revealText: 'There is no net concentration change because the forward and reverse rates are equal and cancel each other out.',
    correctFeedback: 'Right — equal rates cause zero net change.',
    incorrectFeedback: 'Not quite — the reason is equal forward and reverse rates.'
  },
  {
    prompt: 'If a reaction stops completely, is it at dynamic equilibrium?',
    hint: 'Hint: Dynamic equilibrium still has ongoing forward and reverse reaction.',
    choices: ['No, because both directions must still occur.', 'Yes, because concentrations stop changing.', 'Yes, because products and reactants are equal.'],
    correctIndex: 0,
    revealText: 'A stopped reaction is not dynamic equilibrium. At equilibrium, both directions still occur at equal rates.',
    correctFeedback: 'Right — a stopped reaction is not dynamic equilibrium.',
    incorrectFeedback: 'Not quite — dynamic equilibrium still has both directions happening.'
  },
  {
    prompt: 'Which observation best supports that a system is at equilibrium?',
    hint: 'Hint: Look for constant concentrations caused by equal rates.',
    choices: ['Concentrations stay constant while both directions still occur.', 'Only products are present.', 'The flask becomes empty.'],
    correctIndex: 0,
    revealText: 'At equilibrium, concentrations stay constant because the forward and reverse rates are equal while both directions still occur.',
    correctFeedback: 'Right — constant concentrations with both directions active is the equilibrium clue.',
    incorrectFeedback: 'Not quite — equilibrium means constant concentrations because both directions still happen at equal rates.'
  },
  {
    prompt: 'At equilibrium, what is true about the reaction itself?',
    hint: 'Hint: The system is not frozen.',
    choices: ['Both directions are still occurring.', 'Only the reverse reaction remains.', 'All motion has stopped.'],
    correctIndex: 0,
    revealText: 'At equilibrium, particles continue reacting in both directions even though the concentrations stay constant.',
    correctFeedback: 'Right — both forward and reverse reactions are still occurring.',
    incorrectFeedback: 'Not quite — equilibrium is dynamic, so both directions still occur.'
  }
];

const qkCards = [
  {
    q: '0.20',
    k: '5.0',
    correct: 'Shift right',
    reveal: 'Q &lt; K → too few products → shift right',
    correctFeedback: 'Right — Q is smaller than K, so the system has too few products compared with equilibrium. It shifts right to make more products.',
    incorrectFeedback: 'Not quite — compare Q to K first. If Q is smaller than K, the system must make more products, so the shift is right.'
  },
  {
    q: '8.0',
    k: '0.40',
    correct: 'Shift left',
    reveal: 'Q &gt; K → too many products → shift left',
    correctFeedback: 'Right — Q is larger than K, so the system has too many products compared with equilibrium. It shifts left to make more reactants.',
    incorrectFeedback: 'Not quite — compare Q to K first. If Q is larger than K, the system has too many products, so the shift is left.'
  },
  {
    q: '1.5',
    k: '1.5',
    correct: 'No shift',
    reveal: 'Q = K → the system is already at equilibrium → no shift',
    correctFeedback: 'Right — when Q equals K, the system is already at equilibrium. There is no net shift.',
    incorrectFeedback: 'Not quite — if Q equals K, the system already matches the equilibrium ratio. That means there is no net shift.'
  },
  {
    q: '0.05',
    k: '2.0',
    correct: 'Shift right',
    reveal: 'Q &lt; K → too few products → shift right',
    correctFeedback: 'Right — Q is smaller than K, so the system shifts right to make more products.',
    incorrectFeedback: 'Not quite — smaller-than-K means shift right.'
  },
  {
    q: '12',
    k: '3.0',
    correct: 'Shift left',
    reveal: 'Q &gt; K → too many products → shift left',
    correctFeedback: 'Right — Q is larger than K, so the system shifts left.',
    incorrectFeedback: 'Not quite — larger-than-K means shift left.'
  },
  {
    q: '0.80',
    k: '0.80',
    correct: 'No shift',
    reveal: 'Q = K → already at equilibrium → no shift',
    correctFeedback: 'Right — matching Q and K means no shift.',
    incorrectFeedback: 'Not quite — if Q equals K, there is no shift.'
  },
  {
    q: '0.30',
    k: '9.0',
    correct: 'Shift right',
    reveal: 'Q &lt; K → too few products → shift right',
    correctFeedback: 'Right — Q is smaller than K, so the system shifts right.',
    incorrectFeedback: 'Not quite — smaller-than-K means shift right.'
  },
  {
    q: '4.5',
    k: '0.90',
    correct: 'Shift left',
    reveal: 'Q &gt; K → too many products → shift left',
    correctFeedback: 'Right — Q is larger than K, so the system shifts left.',
    incorrectFeedback: 'Not quite — larger-than-K means shift left.'
  },
  {
    q: '6.0',
    k: '6.0',
    correct: 'No shift',
    reveal: 'Q = K → already at equilibrium → no shift',
    correctFeedback: 'Right — equal Q and K means no net shift.',
    incorrectFeedback: 'Not quite — Q equal to K means no shift.'
  },
  {
    q: '0.002',
    k: '0.50',
    correct: 'Shift right',
    reveal: 'Q &lt; K → too few products → shift right',
    correctFeedback: 'Right — Q is smaller than K, so products must increase.',
    incorrectFeedback: 'Not quite — smaller-than-K means shift right.'
  },
  {
    q: '15',
    k: '1.2',
    correct: 'Shift left',
    reveal: 'Q &gt; K → too many products → shift left',
    correctFeedback: 'Right — Q is larger than K, so reactants must increase.',
    incorrectFeedback: 'Not quite — larger-than-K means shift left.'
  },
  {
    q: '0.70',
    k: '7.0',
    correct: 'Shift right',
    reveal: 'Q &lt; K → too few products → shift right',
    correctFeedback: 'Right — Q is smaller than K, so the reaction shifts right.',
    incorrectFeedback: 'Not quite — smaller-than-K means shift right.'
  }
];

const pressureCards = [
  {
    reaction: 'N2(g) + 3H2(g) ⇌ 2NH3(g)',
    stress: 'Pressure increases because volume decreases',
    correct: 'Shift right',
    tilt: -1,
    reveal: 'Left side: 4 mol gas | Right side: 2 mol gas<br>Higher pressure favors the side with fewer moles of gas.',
    correctFeedback: 'Right — increasing pressure favors the side with fewer moles of gas. This reaction shifts right because 2 mol of gas is fewer than 4 mol.',
    incorrectFeedback: 'Not quite — count the gas moles on each side first. Pressure favors the side with fewer moles of gas, so compare the two totals and then choose the shift.'
  },
  {
    reaction: 'N2(g) + O2(g) ⇌ 2NO(g)',
    stress: 'Pressure increases because volume decreases',
    correct: 'No shift',
    tilt: 0,
    reveal: 'Left side: 2 mol gas | Right side: 2 mol gas<br>Both sides have the same total moles of gas, so changing pressure does not shift this equilibrium.',
    correctFeedback: 'Right — both sides have the same total moles of gas. When the gas moles match, a pressure change does not shift equilibrium.',
    incorrectFeedback: 'Not quite — pressure only changes the equilibrium position when the gas mole totals are different. Count both sides first, then compare them.'
  },
  {
    reaction: 'PCl5(g) ⇌ PCl3(g) + Cl2(g)',
    stress: 'Pressure decreases because volume increases',
    correct: 'Shift right',
    tilt: -1,
    reveal: 'Left side: 1 mol gas | Right side: 2 mol gas<br>Lower pressure favors the side with more moles of gas.',
    correctFeedback: 'Right — decreasing pressure favors the side with more moles of gas. This reaction shifts right because 2 mol of gas is more than 1 mol.',
    incorrectFeedback: 'Not quite — for a pressure decrease, look for the side with more gas moles. Count both sides, then choose the shift.'
  },
  {
    reaction: '2SO2(g) + O2(g) ⇌ 2SO3(g)',
    stress: 'Pressure increases because volume decreases',
    correct: 'Shift right',
    tilt: -1,
    reveal: 'Left side: 3 mol gas | Right side: 2 mol gas<br>Higher pressure favors the side with fewer moles of gas.',
    correctFeedback: 'Right — higher pressure favors the side with fewer gas moles, so this shifts right.',
    incorrectFeedback: 'Not quite — compare the gas moles. Higher pressure favors fewer moles.'
  },
  {
    reaction: 'H2(g) + I2(g) ⇌ 2HI(g)',
    stress: 'Pressure increases because volume decreases',
    correct: 'No shift',
    tilt: 0,
    reveal: 'Left side: 2 mol gas | Right side: 2 mol gas<br>Equal gas totals mean no pressure shift.',
    correctFeedback: 'Right — equal gas totals mean no pressure shift.',
    incorrectFeedback: 'Not quite — if gas moles match on both sides, pressure does not shift equilibrium.'
  },
  {
    reaction: '2NO2(g) ⇌ N2O4(g)',
    stress: 'Pressure increases because volume decreases',
    correct: 'Shift right',
    tilt: -1,
    reveal: 'Left side: 2 mol gas | Right side: 1 mol gas<br>Higher pressure favors the side with fewer moles of gas.',
    correctFeedback: 'Right — the side with fewer gas moles is favored, so this shifts right.',
    incorrectFeedback: 'Not quite — count the gas moles. Higher pressure favors fewer moles.'
  },
  {
    reaction: '2NH3(g) ⇌ N2(g) + 3H2(g)',
    stress: 'Pressure decreases because volume increases',
    correct: 'Shift right',
    tilt: -1,
    reveal: 'Left side: 2 mol gas | Right side: 4 mol gas<br>Lower pressure favors the side with more moles of gas.',
    correctFeedback: 'Right — lower pressure favors more gas moles, so this shifts right.',
    incorrectFeedback: 'Not quite — for lower pressure, look for the side with more gas moles.'
  },
  {
    reaction: 'CO(g) + H2O(g) ⇌ CO2(g) + H2(g)',
    stress: 'Pressure decreases because volume increases',
    correct: 'No shift',
    tilt: 0,
    reveal: 'Left side: 2 mol gas | Right side: 2 mol gas<br>Equal gas moles mean no pressure shift.',
    correctFeedback: 'Right — equal gas totals mean the pressure change does not shift equilibrium.',
    incorrectFeedback: 'Not quite — if the gas totals match, there is no pressure shift.'
  },
  {
    reaction: '2SO3(g) ⇌ 2SO2(g) + O2(g)',
    stress: 'Pressure increases because volume decreases',
    correct: 'Shift left',
    tilt: 1,
    reveal: 'Left side: 2 mol gas | Right side: 3 mol gas<br>Higher pressure favors the side with fewer gas moles, so the shift is left.',
    correctFeedback: 'Right — higher pressure favors the left side because it has fewer gas moles.',
    incorrectFeedback: 'Not quite — higher pressure favors the side with fewer gas moles.'
  },
  {
    reaction: 'N2O4(g) ⇌ 2NO2(g)',
    stress: 'Pressure decreases because volume increases',
    correct: 'Shift right',
    tilt: -1,
    reveal: 'Left side: 1 mol gas | Right side: 2 mol gas<br>Lower pressure favors the side with more gas moles.',
    correctFeedback: 'Right — lower pressure favors the right side because it has more gas moles.',
    incorrectFeedback: 'Not quite — lower pressure favors more gas moles.'
  },
  {
    reaction: 'H2(g) + Cl2(g) ⇌ 2HCl(g)',
    stress: 'Pressure decreases because volume increases',
    correct: 'No shift',
    tilt: 0,
    reveal: 'Left side: 2 mol gas | Right side: 2 mol gas<br>Equal gas-mole totals mean no pressure shift.',
    correctFeedback: 'Right — matching gas totals means no pressure shift.',
    incorrectFeedback: 'Not quite — equal gas totals mean no pressure shift.'
  },
  {
    reaction: '2CO(g) + O2(g) ⇌ 2CO2(g)',
    stress: 'Pressure increases because volume decreases',
    correct: 'Shift right',
    tilt: -1,
    reveal: 'Left side: 3 mol gas | Right side: 2 mol gas<br>Higher pressure favors the side with fewer gas moles.',
    correctFeedback: 'Right — higher pressure favors the product side because it has fewer gas moles.',
    incorrectFeedback: 'Not quite — higher pressure favors the side with fewer gas moles.'
  }
];

const temperatureCards = [
  {
    reaction: '2SO2(g) + O2(g) ⇌ 2SO3(g)',
    type: 'Exothermic',
    change: 'Temperature increases',
    correct: 'K decreases',
    reveal: 'Exothermic forward reaction: heat acts like a product.<br>Increasing temperature adds product-side heat, so equilibrium shifts left and K decreases.',
    correctFeedback: 'Right — for an exothermic forward reaction, heat acts like a product. Increasing temperature adds product-side heat, so K decreases.',
    incorrectFeedback: 'Not quite — temperature is the one common stress that changes K. First decide whether heat acts like a reactant or a product, then decide whether adding heat makes products more or less favored.'
  },
  {
    reaction: 'N2(g) + O2(g) ⇌ 2NO(g)',
    type: 'Endothermic',
    change: 'Temperature increases',
    correct: 'K increases',
    reveal: 'Endothermic forward reaction: heat acts like a reactant.<br>Increasing temperature adds reactant-side heat, so equilibrium shifts right and K increases.',
    correctFeedback: 'Right — for an endothermic forward reaction, heat acts like a reactant. Increasing temperature makes products more favored, so K increases.',
    incorrectFeedback: 'Not quite — temperature changes K. Decide whether heat is acting like a reactant or a product first, then ask which side is favored when heat is added.'
  },
  {
    reaction: 'PCl5(g) ⇌ PCl3(g) + Cl2(g)',
    type: 'Endothermic',
    change: 'Temperature decreases',
    correct: 'K decreases',
    reveal: 'Endothermic forward reaction: heat acts like a reactant.<br>Decreasing temperature removes reactant-side heat, so equilibrium shifts left and K decreases.',
    correctFeedback: 'Right — for an endothermic forward reaction, lowering temperature removes reactant-side heat. Products become less favored, so K decreases.',
    incorrectFeedback: 'Not quite — when temperature changes, K changes too. Treat heat like a reactant or product first, then decide whether lowering temperature makes products more or less favored.'
  },
  {
    reaction: '2NO2(g) ⇌ N2O4(g)',
    type: 'Exothermic',
    change: 'Temperature increases',
    correct: 'K decreases',
    reveal: 'Exothermic forward reaction: heat acts like a product.<br>Adding heat shifts equilibrium left, so K decreases.',
    correctFeedback: 'Right — for an exothermic reaction, increasing temperature decreases K.',
    incorrectFeedback: 'Not quite — in an exothermic forward reaction, heat acts like a product.'
  },
  {
    reaction: 'CaCO3(s) ⇌ CaO(s) + CO2(g)',
    type: 'Endothermic',
    change: 'Temperature increases',
    correct: 'K increases',
    reveal: 'Endothermic forward reaction: heat acts like a reactant.<br>Adding heat favors products, so K increases.',
    correctFeedback: 'Right — increasing temperature increases K for an endothermic reaction.',
    incorrectFeedback: 'Not quite — for an endothermic forward reaction, increasing temperature increases K.'
  },
  {
    reaction: '2SO3(g) ⇌ 2SO2(g) + O2(g)',
    type: 'Endothermic',
    change: 'Temperature decreases',
    correct: 'K decreases',
    reveal: 'Endothermic forward reaction: heat acts like a reactant.<br>Removing heat makes products less favored, so K decreases.',
    correctFeedback: 'Right — decreasing temperature lowers K for an endothermic reaction.',
    incorrectFeedback: 'Not quite — for endothermic reactions, lowering temperature decreases K.'
  },
  {
    reaction: 'N2(g) + 3H2(g) ⇌ 2NH3(g)',
    type: 'Exothermic',
    change: 'Temperature decreases',
    correct: 'K increases',
    reveal: 'Exothermic forward reaction: heat acts like a product.<br>Removing heat favors products, so K increases.',
    correctFeedback: 'Right — decreasing temperature increases K for an exothermic reaction.',
    incorrectFeedback: 'Not quite — for exothermic reactions, lowering temperature increases K.'
  },
  {
    reaction: 'H2(g) + I2(g) ⇌ 2HI(g)',
    type: 'Endothermic',
    change: 'Temperature increases',
    correct: 'K increases',
    reveal: 'Endothermic forward reaction: heat acts like a reactant.<br>Adding heat favors products, so K increases.',
    correctFeedback: 'Right — adding heat increases K for an endothermic reaction.',
    incorrectFeedback: 'Not quite — for endothermic reactions, increasing temperature increases K.'
  },
  {
    reaction: '2SO2(g) + O2(g) ⇌ 2SO3(g)',
    type: 'Exothermic',
    change: 'Temperature decreases',
    correct: 'K increases',
    reveal: 'Exothermic forward reaction: heat acts like a product.<br>Removing heat favors products, so K increases.',
    correctFeedback: 'Right — decreasing temperature increases K for an exothermic reaction.',
    incorrectFeedback: 'Not quite — for exothermic reactions, lower temperature increases K.'
  },
  {
    reaction: 'PCl5(g) ⇌ PCl3(g) + Cl2(g)',
    type: 'Endothermic',
    change: 'Temperature increases',
    correct: 'K increases',
    reveal: 'Endothermic forward reaction: heat acts like a reactant.<br>Adding heat favors products, so K increases.',
    correctFeedback: 'Right — increasing temperature increases K for an endothermic reaction.',
    incorrectFeedback: 'Not quite — if the forward reaction is endothermic, adding heat increases K.'
  },
  {
    reaction: '2NO(g) + O2(g) ⇌ 2NO2(g)',
    type: 'Exothermic',
    change: 'Temperature increases',
    correct: 'K decreases',
    reveal: 'Exothermic forward reaction: heat acts like a product.<br>Adding heat favors reactants, so K decreases.',
    correctFeedback: 'Right — increasing temperature decreases K for an exothermic reaction.',
    incorrectFeedback: 'Not quite — for an exothermic forward reaction, adding heat decreases K.'
  },
  {
    reaction: 'CaCO3(s) ⇌ CaO(s) + CO2(g)',
    type: 'Endothermic',
    change: 'Temperature decreases',
    correct: 'K decreases',
    reveal: 'Endothermic forward reaction: heat acts like a reactant.<br>Removing heat makes products less favored, so K decreases.',
    correctFeedback: 'Right — decreasing temperature decreases K for an endothermic reaction.',
    incorrectFeedback: 'Not quite — for an endothermic reaction, lowering temperature decreases K.'
  }
];

document.addEventListener('DOMContentLoaded', function () {
  function formatReactionFormula(formula) {
    return formula.replace(/([A-Za-z\)])(\d+)/g, '$1<span class="chem-sub">$2</span>');
  }

  function formatReactionToken(token) {
    const trimmed = token.trim();
    if (!trimmed || trimmed === '+' || trimmed === '⇌') return trimmed;
    const match = trimmed.match(/^(\d+)?([A-Za-z0-9()]+)(\([a-z]+\))$/i);
    if (!match) return trimmed;
    const [, coefficient = '', formula, state] = match;
    return `${coefficient}<span class="ion-group">${formatReactionFormula(formula)}</span>${state}`;
  }

  function formatReactionText(text) {
    return text
      .split(/(\s+\+\s+|\s+⇌\s+)/)
      .map(part => {
        if (/^\s+\+\s+$/.test(part) || /^\s+⇌\s+$/.test(part)) return part;
        return formatReactionToken(part);
      })
      .join('');
  }

  function setFeedbackState(id, text) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = text;
    let state = 'info';
    if (/^Right\b/.test(text)) state = 'correct';
    else if (/^Not quite\b/.test(text)) state = 'incorrect';
    else if (/^Choose\b|before checking\.?$|first\.?$/.test(text)) state = 'pending';
    el.dataset.state = state;
  }

  function shuffleList(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function sameOrder(a, b) {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((value, index) => value === b[index]);
  }

  function getShuffledLabels(labels, previousOrder) {
    if (labels.length < 2) return labels.slice();
    let nextOrder = labels.slice();
    let attempts = 0;
    do {
      nextOrder = shuffleList(labels);
      attempts += 1;
    } while (sameOrder(nextOrder, previousOrder) && attempts < 12);
    return nextOrder;
  }

  function buildCardOrder(length, previousOrder, currentIndex) {
    const base = Array.from({ length }, (_, index) => index);
    if (base.length < 2) return base;
    let nextOrder = base.slice();
    let attempts = 0;
    do {
      nextOrder = shuffleList(base);
      attempts += 1;
    } while ((sameOrder(nextOrder, previousOrder) || nextOrder[0] === currentIndex) && attempts < 16);
    return nextOrder;
  }

  function getNextCardIndex(state, total) {
    if (!state.order.length || state.pointer >= state.order.length) {
      state.order = buildCardOrder(total, state.order, state.index);
      state.pointer = 0;
    }
    const nextIndex = state.order[state.pointer];
    state.pointer += 1;
    return nextIndex;
  }

  function setChoiceButtons(containerId, labels, selectedLabel, previousOrder) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    const orderedLabels = getShuffledLabels(labels, previousOrder);
    orderedLabels.forEach(label => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'segment-btn tool-choice-btn explore-choice';
      btn.textContent = label;
      const isSelected = label === selectedLabel;
      btn.classList.toggle('active', isSelected);
      btn.setAttribute('aria-pressed', String(isSelected));
      container.appendChild(btn);
    });
    return orderedLabels;
  }

  function bindChoiceGroup(containerId, stateObj, key, onSelect) {
    document.getElementById(containerId).addEventListener('click', function (event) {
      const target = event.target.closest('.tool-choice-btn');
      if (!target) return;
      this.querySelectorAll('.tool-choice-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      target.classList.add('active');
      target.setAttribute('aria-pressed', 'true');
      stateObj[key] = target.textContent;
      if (typeof onSelect === 'function') onSelect();
    });
  }

  function showToolBlock(id, show) {
    const el = document.getElementById(id);
    if (!el) return;
    el.hidden = !show;
  }

  function applyTilt(tilt) {
    const beamGroup = document.getElementById('beam-group');
    const shiftArrow = document.getElementById('shift-arrow');
    const shiftArrowText = document.getElementById('shift-arrow-text');
    const eqLabel = document.getElementById('eq-state-label');

    if (tilt === -1) {
      beamGroup.style.transform = 'rotate(-12deg)';
      shiftArrow.setAttribute('opacity', '1');
      shiftArrowText.textContent = 'Shift right';
      shiftArrowText.setAttribute('fill', '#6ee7b7');
      eqLabel.textContent = 'Shift right — the system makes more products';
    } else if (tilt === 1) {
      beamGroup.style.transform = 'rotate(12deg)';
      shiftArrow.setAttribute('opacity', '1');
      shiftArrowText.textContent = 'Shift left';
      shiftArrowText.setAttribute('fill', '#fca5a5');
      eqLabel.textContent = 'Shift left — the system makes more reactants';
    } else {
      beamGroup.style.transform = 'rotate(0deg)';
      shiftArrow.setAttribute('opacity', '0');
      eqLabel.textContent = 'No shift — both sides are balanced for this stress';
    }
  }

  function resetSeesaw() {
    applyTilt(0);
    document.getElementById('shift-arrow-text').setAttribute('fill', '#d97706');
    document.getElementById('eq-state-label').textContent = 'Level until you check your answer';
  }

  const equilibriumState = { index: null, order: [], pointer: 0, selected: null, checked: false, choiceOrder: [] };
  function renderEquilibriumCard() {
    if (equilibriumState.index === null) {
      equilibriumState.index = getNextCardIndex(equilibriumState, equilibriumCards.length);
    }
    const card = equilibriumCards[equilibriumState.index];
    document.getElementById('equilibrium-prompt').textContent = card.prompt;
    document.getElementById('equilibrium-hint').textContent = card.hint;
    document.getElementById('equilibrium-reveal-text').textContent = card.revealText;
    equilibriumState.choiceOrder = setChoiceButtons('tool-equilibrium-choices', card.choices, null, equilibriumState.choiceOrder);
    equilibriumState.selected = null;
    equilibriumState.checked = false;
    setFeedbackState('equilibrium-feedback', 'Choose one statement, then click Check.');
    showToolBlock('equilibrium-reveal-box', false);
    showToolBlock('equilibrium-support', false);
    document.getElementById('equilibrium-reveal').disabled = true;
    document.getElementById('equilibrium-next').disabled = true;
  }
  bindChoiceGroup('tool-equilibrium-choices', equilibriumState, 'selected', function () {
    equilibriumState.checked = false;
    setFeedbackState('equilibrium-feedback', 'Choose one statement, then click Check.');
    showToolBlock('equilibrium-reveal-box', false);
    showToolBlock('equilibrium-support', false);
    document.getElementById('equilibrium-reveal').disabled = true;
    document.getElementById('equilibrium-next').disabled = true;
  });
  document.getElementById('equilibrium-check').addEventListener('click', function () {
    const card = equilibriumCards[equilibriumState.index];
    if (!equilibriumState.selected) {
      setFeedbackState('equilibrium-feedback', 'Choose one statement, then click Check.');
      return;
    }
    equilibriumState.checked = true;
    setFeedbackState('equilibrium-feedback',
      equilibriumState.selected === card.choices[card.correctIndex] ? card.correctFeedback : card.incorrectFeedback
    );
    showToolBlock('equilibrium-support', true);
    document.getElementById('equilibrium-reveal').disabled = false;
    document.getElementById('equilibrium-next').disabled = false;
  });
  document.getElementById('equilibrium-reveal').addEventListener('click', function () {
    if (!equilibriumState.checked) return;
    showToolBlock('equilibrium-reveal-box', true);
  });
  document.getElementById('equilibrium-next').addEventListener('click', function () {
    equilibriumState.index = getNextCardIndex(equilibriumState, equilibriumCards.length);
    renderEquilibriumCard();
  });

  const qkChoices = ['Shift left', 'Shift right', 'No shift'];
  const qkState = { index: null, order: [], pointer: 0, selected: null, checked: false, choiceOrder: [] };
  function renderQkCard() {
    if (qkState.index === null) {
      qkState.index = getNextCardIndex(qkState, qkCards.length);
    }
    const card = qkCards[qkState.index];
    document.getElementById('qk-q-value').textContent = card.q;
    document.getElementById('qk-k-value').textContent = card.k;
    qkState.choiceOrder = setChoiceButtons('qk-choice-buttons', qkChoices, null, qkState.choiceOrder);
    qkState.selected = null;
    qkState.checked = false;
    setFeedbackState('qk-feedback', 'Choose a shift, then click Check.');
    showToolBlock('qk-reveal-box', false);
    showToolBlock('qk-support', false);
    document.getElementById('qk-reveal-text').innerHTML = '';
    document.getElementById('qk-reveal').disabled = true;
    document.getElementById('qk-next').disabled = true;
  }
  bindChoiceGroup('qk-choice-buttons', qkState, 'selected', function () {
    qkState.checked = false;
    setFeedbackState('qk-feedback', 'Choose a shift, then click Check.');
    showToolBlock('qk-reveal-box', false);
    showToolBlock('qk-support', false);
    document.getElementById('qk-reveal-text').innerHTML = '';
    document.getElementById('qk-reveal').disabled = true;
    document.getElementById('qk-next').disabled = true;
  });
  document.getElementById('qk-check').addEventListener('click', function () {
    const card = qkCards[qkState.index];
    if (!qkState.selected) {
      setFeedbackState('qk-feedback', 'Choose a shift, then click Check.');
      return;
    }
    qkState.checked = true;
    setFeedbackState('qk-feedback', qkState.selected === card.correct ? card.correctFeedback : card.incorrectFeedback);
    showToolBlock('qk-support', true);
    document.getElementById('qk-reveal').disabled = false;
    document.getElementById('qk-next').disabled = false;
  });
  document.getElementById('qk-reveal').addEventListener('click', function () {
    if (!qkState.checked) return;
    const card = qkCards[qkState.index];
    showToolBlock('qk-reveal-box', true);
    document.getElementById('qk-reveal-text').innerHTML = card.reveal;
  });
  document.getElementById('qk-next').addEventListener('click', function () {
    qkState.index = getNextCardIndex(qkState, qkCards.length);
    renderQkCard();
  });

  const pressureChoices = ['Shift left', 'Shift right', 'No shift'];
  const pressureState = { index: null, order: [], pointer: 0, selected: null, checked: false, choiceOrder: [] };
  function renderPressureCard() {
    if (pressureState.index === null) {
      pressureState.index = getNextCardIndex(pressureState, pressureCards.length);
    }
    const card = pressureCards[pressureState.index];
    document.getElementById('pressure-reaction-label').innerHTML = formatReactionText(card.reaction);
    document.getElementById('pressure-stress-label').textContent = card.stress;
    pressureState.choiceOrder = setChoiceButtons('pressure-choice-buttons', pressureChoices, null, pressureState.choiceOrder);
    pressureState.selected = null;
    pressureState.checked = false;
    resetSeesaw();
    setFeedbackState('pressure-feedback', 'Choose a shift, then click Check.');
    showToolBlock('pressure-reveal-box', false);
    showToolBlock('pressure-support', false);
    document.getElementById('pressure-reveal-text').innerHTML = '';
    document.getElementById('pressure-reveal').disabled = true;
    document.getElementById('pressure-next').disabled = true;
  }
  bindChoiceGroup('pressure-choice-buttons', pressureState, 'selected', function () {
    pressureState.checked = false;
    resetSeesaw();
    setFeedbackState('pressure-feedback', 'Choose a shift, then click Check.');
    showToolBlock('pressure-reveal-box', false);
    showToolBlock('pressure-support', false);
    document.getElementById('pressure-reveal-text').innerHTML = '';
    document.getElementById('pressure-reveal').disabled = true;
    document.getElementById('pressure-next').disabled = true;
  });
  document.getElementById('pressure-check').addEventListener('click', function () {
    const card = pressureCards[pressureState.index];
    if (!pressureState.selected) {
      setFeedbackState('pressure-feedback', 'Choose a shift, then click Check.');
      return;
    }
    pressureState.checked = true;
    setFeedbackState('pressure-feedback', pressureState.selected === card.correct ? card.correctFeedback : card.incorrectFeedback);
    showToolBlock('pressure-support', true);
    document.getElementById('pressure-reveal').disabled = false;
    document.getElementById('pressure-next').disabled = false;
  });
  document.getElementById('pressure-reveal').addEventListener('click', function () {
    if (!pressureState.checked) return;
    const card = pressureCards[pressureState.index];
    showToolBlock('pressure-reveal-box', true);
    document.getElementById('pressure-reveal-text').innerHTML = card.reveal;
    applyTilt(card.tilt);
  });
  document.getElementById('pressure-next').addEventListener('click', function () {
    pressureState.index = getNextCardIndex(pressureState, pressureCards.length);
    renderPressureCard();
  });

  const temperatureChoices = ['K increases', 'K decreases', 'K stays the same'];
  const tempState = { index: null, order: [], pointer: 0, selected: null, checked: false, choiceOrder: [] };
  function renderTempCard() {
    if (tempState.index === null) {
      tempState.index = getNextCardIndex(tempState, temperatureCards.length);
    }
    const card = temperatureCards[tempState.index];
    document.getElementById('temp-reaction-label').innerHTML = formatReactionText(card.reaction);
    document.getElementById('temp-type-label').textContent = card.type;
    document.getElementById('temp-change-label').textContent = card.change;
    tempState.choiceOrder = setChoiceButtons('temp-choice-buttons', temperatureChoices, null, tempState.choiceOrder);
    tempState.selected = null;
    tempState.checked = false;
    setFeedbackState('temp-feedback', 'Choose what happens to K, then click Check.');
    showToolBlock('temp-reveal-box', false);
    showToolBlock('temp-support', false);
    document.getElementById('temp-reveal-text').innerHTML = '';
    document.getElementById('temp-reveal').disabled = true;
    document.getElementById('temp-next').disabled = true;
  }
  bindChoiceGroup('temp-choice-buttons', tempState, 'selected', function () {
    tempState.checked = false;
    setFeedbackState('temp-feedback', 'Choose what happens to K, then click Check.');
    showToolBlock('temp-reveal-box', false);
    showToolBlock('temp-support', false);
    document.getElementById('temp-reveal-text').innerHTML = '';
    document.getElementById('temp-reveal').disabled = true;
    document.getElementById('temp-next').disabled = true;
  });
  document.getElementById('temp-check').addEventListener('click', function () {
    const card = temperatureCards[tempState.index];
    if (!tempState.selected) {
      setFeedbackState('temp-feedback', 'Choose what happens to K, then click Check.');
      return;
    }
    tempState.checked = true;
    setFeedbackState('temp-feedback', tempState.selected === card.correct ? card.correctFeedback : card.incorrectFeedback);
    showToolBlock('temp-support', true);
    document.getElementById('temp-reveal').disabled = false;
    document.getElementById('temp-next').disabled = false;
  });
  document.getElementById('temp-reveal').addEventListener('click', function () {
    if (!tempState.checked) return;
    const card = temperatureCards[tempState.index];
    showToolBlock('temp-reveal-box', true);
    document.getElementById('temp-reveal-text').innerHTML = card.reveal;
  });
  document.getElementById('temp-next').addEventListener('click', function () {
    tempState.index = getNextCardIndex(tempState, temperatureCards.length);
    renderTempCard();
  });

  renderEquilibriumCard();
  renderQkCard();
  renderPressureCard();
  renderTempCard();
});

document.addEventListener('DOMContentLoaded', function () {
  const root = document.querySelector('.page-14-learn-chemistry-equilibrium .lc-ss');
  if (!root) return;

  const COLORS = {
    N2: { fill: '#85B7EB', stroke: '#185FA5' },
    H2: { fill: '#F7C1C1', stroke: '#A32D2D' },
    NH3: { fill: '#FAC775', stroke: '#633806' },
    SO2: { fill: '#F09595', stroke: '#791F1F' },
    O2: { fill: '#9FE1CB', stroke: '#085041' },
    SO3: { fill: '#AFA9EC', stroke: '#3C3489' },
    PCl5: { fill: '#FAC775', stroke: '#633806' },
    PCl3: { fill: '#F5C4B3', stroke: '#712B13' },
    Cl2: { fill: '#C0DD97', stroke: '#27500A' },
    NO: { fill: '#F4C0D1', stroke: '#72243E' },
    I2: { fill: '#CECBF6', stroke: '#26215C' },
    HI: { fill: '#9FE1CB', stroke: '#04342C' }
  };

  const REACTIONS = [
    {
      eq: 'N2 + 3H2 ⇌ 2NH3 + Energy',
      label: 'N2 + 3H2 ⇌ 2NH3 (Haber process, exothermic)',
      reactants: [{ s: 'N2', n: 1 }, { s: 'H2', n: 3 }],
      products: [{ s: 'NH3', n: 2 }],
      reactMol: 4,
      prodMol: 2,
      exo: true
    },
    {
      eq: '2SO2 + O2 ⇌ 2SO3 + Energy',
      label: '2SO2 + O2 ⇌ 2SO3 (contact process, exothermic)',
      reactants: [{ s: 'SO2', n: 2 }, { s: 'O2', n: 1 }],
      products: [{ s: 'SO3', n: 2 }],
      reactMol: 3,
      prodMol: 2,
      exo: true
    },
    {
      eq: 'PCl5 + Energy ⇌ PCl3 + Cl2',
      label: 'PCl5 ⇌ PCl3 + Cl2 (endothermic)',
      reactants: [{ s: 'PCl5', n: 1 }],
      products: [{ s: 'PCl3', n: 1 }, { s: 'Cl2', n: 1 }],
      reactMol: 1,
      prodMol: 2,
      exo: false
    },
    {
      eq: 'N2 + O2 + Energy ⇌ 2NO',
      label: 'N2 + O2 ⇌ 2NO (endothermic, Δn = 0)',
      reactants: [{ s: 'N2', n: 1 }, { s: 'O2', n: 1 }],
      products: [{ s: 'NO', n: 2 }],
      reactMol: 2,
      prodMol: 2,
      exo: false
    },
    {
      eq: 'H2 + I2 ⇌ 2HI',
      label: 'H2 + I2 ⇌ 2HI (Δn = 0)',
      reactants: [{ s: 'H2', n: 1 }, { s: 'I2', n: 1 }],
      products: [{ s: 'HI', n: 2 }],
      reactMol: 2,
      prodMol: 2,
      exo: false
    }
  ];

  const NS = 'http://www.w3.org/2000/svg';
  const OPPOSITE = {
    'add-r': 'rem-r',
    'rem-r': 'add-r',
    'add-p': 'rem-p',
    'rem-p': 'add-p',
    'P-up': 'P-dn',
    'P-dn': 'P-up',
    'T-up': 'T-dn',
    'T-dn': 'T-up',
    cat: 'cat'
  };

  function byId(id) {
    return document.getElementById(id);
  }

  function formatFormulaHtml(formula) {
    return formula.replace(/([A-Za-z\)])(\d+)/g, '$1<span class="chem-sub">$2</span>');
  }

  function renderReactionHtml(text) {
    return text
      .split(/(\s+\+\s+|\s+⇌\s+)/)
      .map(function (part) {
        if (/^\s+\+\s+$/.test(part) || /^\s+⇌\s+$/.test(part)) return part;
        return part.replace(/([A-Za-z\)])(\d+)/g, '$1<span class="chem-sub">$2</span>');
      })
      .join('');
  }

  function setSvgTextWithChemistry(el, text) {
    el.textContent = '';
    const parentSize = parseFloat(el.getAttribute('font-size') || '16');
    const subDy = Math.round(parentSize * 0.3);
    const parts = text.split(/([A-Za-z][A-Za-z0-9()]*)/);
    let pendingReset = false;
    parts.forEach(function (part) {
      if (!part) return;
      if (!/^[A-Za-z][A-Za-z0-9()]*$/.test(part)) {
        const span = document.createElementNS(NS, 'tspan');
        span.textContent = part;
        if (pendingReset) {
          span.setAttribute('dy', String(-subDy));
          pendingReset = false;
        }
        el.appendChild(span);
        return;
      }
      const fragments = part.match(/[A-Za-z()]+|\d+/g) || [part];
      fragments.forEach(function (fragment) {
        const span = document.createElementNS(NS, 'tspan');
        span.textContent = fragment;
        if (/^\d+$/.test(fragment)) {
          if (!pendingReset) {
            span.setAttribute('dy', String(subDy));
          }
          span.setAttribute('font-size', '72%');
          pendingReset = true;
        } else {
          if (pendingReset) {
            span.setAttribute('dy', String(-subDy));
            pendingReset = false;
          }
        }
        el.appendChild(span);
      });
    });
  }

  function getBase(type) {
    if (type.startsWith('add-r')) return 'add-r';
    if (type.startsWith('rem-r')) return 'rem-r';
    if (type.startsWith('add-p')) return 'add-p';
    if (type.startsWith('rem-p')) return 'rem-p';
    return type;
  }

  function shiftInfo(base, rxn) {
    const { reactMol, prodMol, exo } = rxn;
    const dn = prodMol - reactMol;
    switch (base) {
      case 'add-r':
        return { tilt: -1, qk: 'Q < K', shift: 'forward →', kChg: 'no', explain: 'Adding a reactant makes Q < K. The system shifts forward (→) to consume it and restore Q = K.' };
      case 'rem-r':
        return { tilt: 1, qk: 'Q > K', shift: 'reverse ←', kChg: 'no', explain: 'Removing a reactant makes Q > K. The system shifts reverse (←) to replace it and restore Q = K.' };
      case 'add-p':
        return { tilt: 1, qk: 'Q > K', shift: 'reverse ←', kChg: 'no', explain: 'Adding a product makes Q > K. The system shifts reverse (←) to consume it and restore Q = K.' };
      case 'rem-p':
        return { tilt: -1, qk: 'Q < K', shift: 'forward →', kChg: 'no', explain: 'Removing a product makes Q < K. The system shifts forward (→) to replace it.' };
      case 'P-up':
        if (dn === 0) return { tilt: 0, qk: 'Q = K', shift: 'no shift', kChg: 'no', explain: 'Both sides have the same total moles of gas, so a pressure change does not favor either side.' };
        return dn < 0
          ? { tilt: -1, qk: 'Q < K', shift: 'forward →', kChg: 'no', explain: `Reactants: ${reactMol} mol gas, Products: ${prodMol} mol gas. Higher pressure favors fewer moles, so the system shifts forward (→).` }
          : { tilt: 1, qk: 'Q > K', shift: 'reverse ←', kChg: 'no', explain: `Reactants: ${reactMol} mol gas, Products: ${prodMol} mol gas. Higher pressure favors fewer moles, so the system shifts reverse (←).` };
      case 'P-dn':
        if (dn === 0) return { tilt: 0, qk: 'Q = K', shift: 'no shift', kChg: 'no', explain: 'Both sides have the same total moles of gas, so a pressure change does not favor either side.' };
        return dn > 0
          ? { tilt: -1, qk: 'Q < K', shift: 'forward →', kChg: 'no', explain: `Lower pressure favors more moles. Products have ${prodMol} mol gas versus ${reactMol} on the reactant side, so the system shifts forward (→).` }
          : { tilt: 1, qk: 'Q > K', shift: 'reverse ←', kChg: 'no', explain: `Lower pressure favors more moles. Reactants have ${reactMol} mol gas versus ${prodMol} on the product side, so the system shifts reverse (←).` };
      case 'T-up':
        return exo
          ? { tilt: 1, qk: 'Q > K', shift: 'reverse ←', kChg: 'yes — K decreases', explain: 'For an exothermic forward reaction, heat acts like a product. Adding heat drives the system in the reverse direction and decreases K.' }
          : { tilt: -1, qk: 'Q < K', shift: 'forward →', kChg: 'yes — K increases', explain: 'For an endothermic forward reaction, heat acts like a reactant. Adding heat drives the system forward and increases K.' };
      case 'T-dn':
        return exo
          ? { tilt: -1, qk: 'Q < K', shift: 'forward →', kChg: 'yes — K increases', explain: 'For an exothermic forward reaction, removing heat removes a product, so the system shifts forward and K increases.' }
          : { tilt: 1, qk: 'Q > K', shift: 'reverse ←', kChg: 'yes — K decreases', explain: 'For an endothermic forward reaction, removing heat removes a reactant, so the system shifts reverse and K decreases.' };
      case 'cat':
        return { tilt: 0, qk: 'Q = K', shift: 'no shift', kChg: 'no', explain: 'A catalyst speeds the forward and reverse reactions equally. It helps the system reach equilibrium faster, but it does not change the equilibrium position or K.' };
      default:
        return { tilt: 0, qk: 'Q = K', shift: 'none', kChg: 'no', explain: '' };
    }
  }

  function makeBalls(species, side) {
    const group = byId(side === 'left' ? 'lcLeftBalls' : 'lcRightBalls');
    group.innerHTML = '';
    const all = [];
    species.forEach(function (sp) {
      for (let i = 0; i < sp.n; i += 1) all.push(sp.s);
    });
    const count = all.length;
    const cols = Math.min(count, 4);
    const rows = Math.ceil(count / cols);
    const cx0 = side === 'left' ? 116 : 444;
    const spacing = 32;
    const sx = cx0 - ((cols - 1) * spacing) / 2;
    const sy = 215 - (rows - 1) * spacing;

    all.forEach(function (sym, i) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const cx = sx + col * spacing;
      const cy = sy + row * spacing;
      const color = COLORS[sym] || { fill: '#D3D1C7', stroke: '#5F5E5A' };

      const circle = document.createElementNS(NS, 'circle');
      circle.setAttribute('cx', cx);
      circle.setAttribute('cy', cy);
      circle.setAttribute('r', '14');
      circle.setAttribute('fill', color.fill);
      circle.setAttribute('stroke', color.stroke);
      circle.setAttribute('stroke-width', '1.5');
      group.appendChild(circle);

      const text = document.createElementNS(NS, 'text');
      text.setAttribute('x', cx);
      text.setAttribute('y', cy + 4.5);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('font-size', '9');
      text.setAttribute('font-family', 'var(--font-sans,sans-serif)');
      text.setAttribute('fill', color.stroke);
      text.setAttribute('font-weight', '600');
      setSvgTextWithChemistry(text, sym);
      group.appendChild(text);
    });
  }

  function buildLegend(rxn) {
    const legend = byId('lcLegendG');
    legend.innerHTML = '';
    const seen = new Set();
    const items = [];
    rxn.reactants.concat(rxn.products).forEach(function (sp) {
      if (!seen.has(sp.s)) {
        seen.add(sp.s);
        items.push(sp.s);
      }
    });
    const itemWidth = 88;
    const total = items.length * itemWidth;
    const startX = -total / 2 + 10;

    items.forEach(function (sym, i) {
      const color = COLORS[sym] || { fill: '#D3D1C7', stroke: '#5F5E5A' };
      const x = startX + i * itemWidth;

      const circle = document.createElementNS(NS, 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', '0');
      circle.setAttribute('r', '9');
      circle.setAttribute('fill', color.fill);
      circle.setAttribute('stroke', color.stroke);
      circle.setAttribute('stroke-width', '2');
      legend.appendChild(circle);

      const text = document.createElementNS(NS, 'text');
      text.setAttribute('x', x + 15);
      text.setAttribute('y', '5');
      text.setAttribute('font-size', '14');
      text.setAttribute('font-family', 'var(--font-sans,sans-serif)');
      text.setAttribute('fill', 'var(--color-text-secondary)');
      text.setAttribute('font-weight', '600');
      setSvgTextWithChemistry(text, sym);
      legend.appendChild(text);
    });
  }

  function applyTilt(tilt) {
    const beam = byId('lcBeamGroup');
    const line = byId('lcShiftLine');
    const text = byId('lcShiftTxt');
    const label = byId('lcEqLbl');
    const forward = '#639922';
    const reverse = '#D85A30';

    if (tilt === -1) {
      beam.style.transform = 'rotate(-11deg)';
      line.setAttribute('x1', '195');
      line.setAttribute('y1', '100');
      line.setAttribute('x2', '268');
      line.setAttribute('y2', '100');
      line.setAttribute('stroke', forward);
      line.setAttribute('marker-end', 'url(#lc-a-fwd)');
      line.setAttribute('opacity', '1');
      text.setAttribute('x', '230');
      text.setAttribute('y', '88');
      text.textContent = 'forward →';
      text.setAttribute('fill', forward);
      text.setAttribute('opacity', '1');
      label.setAttribute('opacity', '0');
    } else if (tilt === 1) {
      beam.style.transform = 'rotate(11deg)';
      line.setAttribute('x1', '365');
      line.setAttribute('y1', '100');
      line.setAttribute('x2', '292');
      line.setAttribute('y2', '100');
      line.setAttribute('stroke', reverse);
      line.setAttribute('marker-end', 'url(#lc-a-rev)');
      line.setAttribute('opacity', '1');
      text.setAttribute('x', '330');
      text.setAttribute('y', '88');
      text.textContent = '← reverse';
      text.setAttribute('fill', reverse);
      text.setAttribute('opacity', '1');
      label.setAttribute('opacity', '0');
    } else {
      beam.style.transform = 'rotate(0deg)';
      line.setAttribute('opacity', '0');
      text.setAttribute('opacity', '0');
      label.textContent = 'balanced — at equilibrium';
      label.setAttribute('fill', 'var(--color-text-secondary)');
      label.setAttribute('opacity', '1');
    }
  }

  function setReadout(info) {
    const forward = '#639922';
    const reverse = '#D85A30';
    const even = '#1D9E75';
    byId('lcRoQk').textContent = info.qk;
    const shift = byId('lcRoShift');
    shift.textContent = info.shift;
    shift.style.color = info.tilt === -1 ? forward : info.tilt === 1 ? reverse : even;
    const kChange = byId('lcRoKchg');
    kChange.textContent = info.kChg;
    kChange.style.color = info.kChg.indexOf('yes') === 0 ? reverse : even;
    byId('lcExplainBox').textContent = info.explain;
  }

  function resetReadout() {
    byId('lcRoQk').textContent = 'Q = K';
    const shift = byId('lcRoShift');
    shift.textContent = 'none';
    shift.style.color = 'var(--color-text-primary)';
    const kChange = byId('lcRoKchg');
    kChange.textContent = 'no';
    kChange.style.color = 'var(--color-text-primary)';
    byId('lcExplainBox').textContent = 'Choose a reaction, then tap a disturbance button.';
  }

  let activeBtn = null;

  function goEquilibrium() {
    if (activeBtn) activeBtn.classList.remove('active');
    activeBtn = null;
    applyTilt(0);
    resetReadout();
  }

  function makeBtn(label, type, cls, container, rxn) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerHTML = label;
    btn.className = 'lc-sbtn ' + cls;
    const base = getBase(type);
    btn.dataset.base = base;
    btn.addEventListener('click', function () {
      if (activeBtn === btn) {
        goEquilibrium();
        return;
      }
      if (activeBtn && OPPOSITE[getBase(activeBtn.dataset.base)] === base) {
        goEquilibrium();
        return;
      }
      if (activeBtn) activeBtn.classList.remove('active');
      activeBtn = btn;
      btn.classList.add('active');
      const info = shiftInfo(base, rxn);
      applyTilt(info.tilt);
      setReadout(info);
    });
    container.appendChild(btn);
  }

  function buildButtons(index) {
    const rxn = REACTIONS[index];
    activeBtn = null;
    const conc = byId('lcConcRow');
    conc.innerHTML = '';
    rxn.reactants.forEach(function (sp) {
      makeBtn('+ ' + formatFormulaHtml(sp.s), 'add-r:' + sp.s, 'lc-s-addr', conc, rxn);
      makeBtn('− ' + formatFormulaHtml(sp.s), 'rem-r:' + sp.s, 'lc-s-remr', conc, rxn);
    });
    rxn.products.forEach(function (sp) {
      makeBtn('+ ' + formatFormulaHtml(sp.s), 'add-p:' + sp.s, 'lc-s-addp', conc, rxn);
      makeBtn('− ' + formatFormulaHtml(sp.s), 'rem-p:' + sp.s, 'lc-s-remp', conc, rxn);
    });

    const pt = byId('lcPtRow');
    pt.innerHTML = '';
    [
      ['↑ pressure', 'P-up', 'lc-s-pup'],
      ['↓ pressure', 'P-dn', 'lc-s-pdn'],
      ['↑ temperature', 'T-up', 'lc-s-tup'],
      ['↓ temperature', 'T-dn', 'lc-s-tdn']
    ].forEach(function (item) {
      makeBtn(item[0], item[1], item[2], pt, rxn);
    });

    const cat = byId('lcCatRow');
    cat.innerHTML = '';
    makeBtn('add catalyst', 'cat', 'lc-s-cat', cat, rxn);
  }

  function initReaction(index) {
    const rxn = REACTIONS[index];
    setSvgTextWithChemistry(byId('lcRxnLine'), rxn.eq);
    buildLegend(rxn);
    makeBalls(rxn.reactants, 'left');
    makeBalls(rxn.products, 'right');
    buildButtons(index);
    applyTilt(0);
    resetReadout();
  }

  let selectedIndex = 0;
  const trigger = byId('lcCsTrigger');
  const menu = byId('lcCsMenu');
  const label = byId('lcCsLabel');
  const chevron = byId('lcCsChevron');
  const options = menu.querySelectorAll('.lc-cs-option');

  options.forEach(function (opt) {
    opt.innerHTML = renderReactionHtml(opt.dataset.reaction);
  });

  function closeMenu() {
    menu.classList.remove('open');
    chevron.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
  }

  trigger.addEventListener('click', function (event) {
    event.stopPropagation();
    menu.classList.toggle('open');
    chevron.classList.toggle('open');
    trigger.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true' : 'false');
  });

  trigger.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      trigger.click();
    }
  });

  options.forEach(function (opt) {
    opt.addEventListener('click', function () {
      selectedIndex = parseInt(opt.dataset.value, 10);
      label.innerHTML = renderReactionHtml(REACTIONS[selectedIndex].label);
      options.forEach(function (option) {
        option.classList.remove('selected');
        option.setAttribute('aria-selected', 'false');
      });
      opt.classList.add('selected');
      opt.setAttribute('aria-selected', 'true');
      closeMenu();
      initReaction(selectedIndex);
    });
  });

  document.addEventListener('click', function (event) {
    if (!root.contains(event.target)) closeMenu();
  });

  byId('lcResetBtn').addEventListener('click', goEquilibrium);

  label.innerHTML = renderReactionHtml(REACTIONS[0].label);
  initReaction(0);
});
