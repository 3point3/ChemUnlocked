let mw73State = {
            from: null,
            to: null
          };

          const routes = {
            'grams->moles': {
              header: 'Grams (g) → Moles (mol)', color: '#0F6E56', step: 'Divide by Molar Mass',
              formula: 'g × <span class="mw73-fbox"><span class="mw73-fn">1 mol</span><span class="mw73-fd">Molar Mass (g)</span></span> = mol',
              tip: 'Find the chemical element or compound\'s molar mass using your periodic table.'
            },
            'moles->grams': {
              header: 'Moles (mol) → Grams (g)', color: '#0F6E56', step: 'Multiply by Molar Mass',
              formula: 'mol × <span class="mw73-fbox"><span class="mw73-fn">Molar Mass (g)</span><span class="mw73-fd">1 mol</span></span> = g',
              tip: 'Use the molar mass of the same substance named in the problem before you multiply.'
            },
            'moles->particles': {
              header: 'Moles (mol) → Particles', color: '#993C1D', step: 'Multiply by Avogadro\'s Number',
              formula: 'mol × <span class="mw73-fbox"><span class="mw73-fn">6.022 × 10<sup>23</sup> items</span><span class="mw73-fd">1 mol</span></span> = particles',
              tip: 'Use this when the target is a count of atoms, molecules, or formula units.'
            },
            'particles->moles': {
              header: 'Particles → Moles (mol)', color: '#993C1D', step: 'Divide by Avogadro\'s Number',
              formula: 'particles × <span class="mw73-fbox"><span class="mw73-fn">1 mol</span><span class="mw73-fd">6.022 × 10<sup>23</sup> items</span></span> = mol',
              tip: 'Keep Avogadro\'s number in the denominator when you are converting a particle count back to moles.'
            },
            'moles->liters': {
              header: 'Moles (mol) → Liters (L)', color: '#185FA5', step: 'Multiply by Ideal Gas Molar Volume',
              formula: 'mol × <span class="mw73-fbox"><span class="mw73-fn">22.4 L</span><span class="mw73-fd">1 mol</span></span> = L',
              tip: 'Use 22.4 L/mol only for gases at STP: 0°C and 1 atm.'
            },
            'liters->moles': {
              header: 'Liters (L) → Moles (mol)', color: '#185FA5', step: 'Divide by Ideal Gas Molar Volume',
              formula: 'L × <span class="mw73-fbox"><span class="mw73-fn">1 mol</span><span class="mw73-fd">22.4 L</span></span> = mol',
              tip: 'This works only for gas volume at STP, not for ordinary liquid volume.'
            },
            'grams->particles': {
              header: 'Grams (g) → Particles', color: '#993C1D', step: 'Convert to Moles, then to Particles',
              formula: 'g × <span class="mw73-fbox"><span class="mw73-fn">1 mol</span><span class="mw73-fd">Molar Mass (g)</span></span> × <span class="mw73-fbox"><span class="mw73-fn">6.022 × 10<sup>23</sup> items</span><span class="mw73-fd">1 mol</span></span> = particles',
              tip: 'Grams must convert to moles first, and only then can moles convert to particles.'
            },
            'particles->grams': {
              header: 'Particles → Grams (g)', color: '#0F6E56', step: 'Convert to Moles, then to Grams',
              formula: 'particles × <span class="mw73-fbox"><span class="mw73-fn">1 mol</span><span class="mw73-fd">6.022 × 10<sup>23</sup> items</span></span> × <span class="mw73-fbox"><span class="mw73-fn">Molar Mass (g)</span><span class="mw73-fd">1 mol</span></span> = g',
              tip: 'First convert the count to moles, then use molar mass to reach grams.'
            },
            'grams->liters': {
              header: 'Grams (g) → Liters (L)', color: '#185FA5', step: 'Convert to Moles, then to Volume',
              formula: 'g × <span class="mw73-fbox"><span class="mw73-fn">1 mol</span><span class="mw73-fd">Molar Mass (g)</span></span> × <span class="mw73-fbox"><span class="mw73-fn">22.4 L</span><span class="mw73-fd">1 mol</span></span> = L',
              tip: 'Use this two-step path only when the target volume is a gas at STP.'
            },
            'liters->grams': {
              header: 'Liters (L) → Grams (g)', color: '#0F6E56', step: 'Convert to Moles, then to Grams',
              formula: 'L × <span class="mw73-fbox"><span class="mw73-fn">1 mol</span><span class="mw73-fd">22.4 L</span></span> × <span class="mw73-fbox"><span class="mw73-fn">Molar Mass (g)</span><span class="mw73-fd">1 mol</span></span> = g',
              tip: 'First reach moles from liters at STP, then use molar mass to convert those moles to grams.'
            },
            'liters->particles': {
              header: 'Liters (L) → Particles', color: '#993C1D', step: 'Convert to Moles, then to Count',
              formula: 'L × <span class="mw73-fbox"><span class="mw73-fn">1 mol</span><span class="mw73-fd">22.4 L</span></span> × <span class="mw73-fbox"><span class="mw73-fn">6.022 × 10<sup>23</sup> items</span><span class="mw73-fd">1 mol</span></span> = particles',
              tip: 'First use 22.4 L/mol to get moles, then use Avogadro\'s number to count particles.'
            },
            'particles->liters': {
              header: 'Particles → Liters (L)', color: '#185FA5', step: 'Convert to Moles, then to Volume',
              formula: 'particles × <span class="mw73-fbox"><span class="mw73-fn">1 mol</span><span class="mw73-fd">6.022 × 10<sup>23</sup> items</span></span> × <span class="mw73-fbox"><span class="mw73-fn">22.4 L</span><span class="mw73-fd">1 mol</span></span> = L',
              tip: 'First convert particles to moles, then use 22.4 L/mol to reach gas volume at STP.'
            }
          };

          window.mw73SelectNode = function mw73SelectNode(unit) {
            if (!mw73State.from || (mw73State.from && mw73State.to)) {
              mw73SetFrom(unit);
            } else {
              if (unit !== mw73State.from) {
                mw73SetTo(unit);
              }
            }
          };

          window.mw73SetFrom = function mw73SetFrom(unit) {
            mw73State.from = unit;
            mw73State.to = null;
            mw73UpdateUI();
          };

          window.mw73SetTo = function mw73SetTo(unit) {
            if (unit === mw73State.from) return;
            mw73State.to = unit;
            mw73UpdateUI();
          };

          window.mw73UpdateUI = function mw73UpdateUI() {
            const units = ['moles', 'grams', 'particles', 'liters'];

            units.forEach(u => {
              const fromChip = document.querySelector(`#mw73FromChips [data-unit="${u}"]`);
              const toChip = document.querySelector(`#mw73ToChips [data-unit="${u}"]`);

              fromChip.className = 'mw73-chip' + (mw73State.from === u ? ` active-${u}` : '');
              toChip.className = 'mw73-chip' + (mw73State.to === u ? ` active-${u}` : '');
              toChip.disabled = (mw73State.from === u);
            });

            let activeNodes = [];
            let activeSpokes = [];

            if (mw73State.from) activeNodes.push(mw73State.from);
            if (mw73State.to) activeNodes.push(mw73State.to);

            if (mw73State.from && mw73State.to) {
              if (mw73State.from === 'moles' || mw73State.to === 'moles') {
                activeSpokes.push(mw73State.from === 'moles' ? mw73State.to : mw73State.from);
              } else {
                activeNodes.push('moles');
                activeSpokes.push(mw73State.from, mw73State.to);
              }
            } else if (mw73State.from && !mw73State.to) {
              if(mw73State.from !== 'moles') {
                activeSpokes.push(mw73State.from);
              }
            }

            units.forEach(u => {
              const nodeEl = document.getElementById(`node-${u}`);
              if (activeNodes.length === 0 || activeNodes.includes(u)) {
                nodeEl.style.opacity = '1';
                if (mw73State.from === u || mw73State.to === u) {
                  nodeEl.style.filter = `drop-shadow(0px 0px 8px var(--color-${u}))`;
                } else {
                  nodeEl.style.filter = 'none';
                }
              } else {
                nodeEl.style.opacity = '0.25';
                nodeEl.style.filter = 'none';
              }

              if (u !== 'moles') {
                const spokeEl = document.getElementById(`spoke-${u}`);
                if (activeSpokes.length === 0) {
                  spokeEl.style.opacity = '0.6';
                } else if (activeSpokes.includes(u)) {
                  spokeEl.style.opacity = '1';
                } else {
                  spokeEl.style.opacity = '0.1';
                }
              }
            });

            const hintBox = document.getElementById('mw73Hint');
            const defaultBox = document.getElementById('mw73Default');

            if (mw73State.from && mw73State.to) {
              const routeKey = `${mw73State.from}->${mw73State.to}`;
              const data = routes[routeKey];

              if (data) {
                hintBox.innerHTML = `
                  <div class="mw73-route-header" style="color: ${data.color}">${data.header}</div>
                  <div class="mw73-step-box" style="border-left-color: ${data.color}">
                    <div class="mw73-step-num" style="color: ${data.color}">${data.step}</div>
                    <div class="mw73-step-formula">${data.formula}</div>
                    <div class="mw73-step-tip"><strong>Note:</strong> ${data.tip}</div>
                  </div>
                `;
                hintBox.style.display = 'block';
                defaultBox.style.display = 'none';
              }
            } else {
              hintBox.style.display = 'none';
              defaultBox.style.display = 'block';
              if (mw73State.from) {
                defaultBox.innerText = `Starting unit selected: ${mw73State.from.toUpperCase()}. Now pick a target unit above or on the wheel to see the conversion path.`;
              } else {
                defaultBox.innerText = 'Tap any unit node on the wheel, or choose a starting unit above, to begin tracing a conversion path.';
              }
            }
          };

          mw73UpdateUI();

// ===================== LOCAL TAB NAV =====================

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

function renderChemText(text) {
  if (!text) return '';

  const replacements = [
    'Ca3(PO4)2',
    'C6H12O6',
    'C3H6O3',
    'AgNO3',
    'CH2O',
    'NaCl',
    'NH3',
    'H2O',
    'CO2',
    'O2'
  ];

  return replacements.reduce((out, formula) => {
    return out.replace(new RegExp(formula.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), renderChemFormula(formula));
  }, text);
}

// ===================== EXPLORE TOOLS =====================
function initSingleChoiceTool(config) {
  const promptEl = document.getElementById(config.promptId);
  const choicesEl = document.getElementById(config.choicesId);
  const feedbackEl = document.getElementById(config.feedbackId);
  const checkBtn = document.getElementById(config.checkBtnId);
  const nextBtn = document.getElementById(config.nextBtnId);
  const revealBtn = document.getElementById(config.revealBtnId);
  const revealBox = document.getElementById(config.revealBoxId);
  const revealBody = document.getElementById(config.revealBodyId);

  if (!promptEl || !choicesEl || !feedbackEl || !checkBtn || !nextBtn || !revealBtn || !revealBox || !revealBody) {
    return;
  }

  const interaction = window.ChemUnlockedInteractive || {
    nextIndex(currentIndex, length) {
      if (length <= 1) return 0;
      let next = currentIndex;
      while (next === currentIndex) next = Math.floor(Math.random() * length);
      return next;
    },
    shuffle(items) {
      return Array.isArray(items) ? items.slice() : [];
    }
  };

  let currentIndex = 0;
  let selected = '';

  function setFeedbackState(text, stateOverride) {
    let state = stateOverride || 'info';
    if (!stateOverride) {
      if (/^Right\b/.test(text)) state = 'correct';
      else if (/^Not quite\b/.test(text)) state = 'incorrect';
      else if (/click Check\.?$|before you check\.?$/.test(text)) state = 'pending';
    }
    feedbackEl.textContent = text;
    feedbackEl.dataset.state = state;
  }

  function formatChoice(option) {
    if (typeof option === 'string') {
      return { value: option, label: option, isHTML: false };
    }
    return {
      value: option.value,
      label: option.label || option.value,
      isHTML: !!option.isHTML
    };
  }

  function renderChoices(item) {
    choicesEl.innerHTML = '';
    interaction.shuffle(item.options).forEach(rawOption => {
      const option = formatChoice(rawOption);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'segment-btn tool-choice-btn explore-choice';
      button.dataset.choice = option.value;
      button.setAttribute('aria-pressed', 'false');
      button.innerHTML = renderChemText(option.label);
      button.addEventListener('click', function () {
        selected = option.value;
        choicesEl.querySelectorAll('.explore-choice').forEach(btn => {
          const isSelected = btn.dataset.choice === option.value;
          btn.classList.remove('correct', 'incorrect', 'reveal-correct');
          btn.classList.toggle('active', isSelected);
          btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        });
        setFeedbackState(config.readyText, 'pending');
        revealBox.hidden = true;
        revealBtn.disabled = true;
        nextBtn.disabled = true;
      });
      choicesEl.appendChild(button);
    });
  }

  function loadItem(index) {
    const item = config.items[index];
    selected = '';
    promptEl.innerHTML = renderChemText(item.prompt);
    setFeedbackState(config.startText, 'pending');
    revealBox.hidden = true;
    revealBtn.disabled = true;
    nextBtn.disabled = true;
    renderChoices(item);
  }

  function markChoices(correctAnswer) {
    choicesEl.querySelectorAll('.explore-choice').forEach(btn => {
      if (btn.dataset.choice === correctAnswer) btn.classList.add('reveal-correct');
      if (btn.dataset.choice === selected) {
        btn.classList.add(selected === correctAnswer ? 'correct' : 'incorrect');
      }
    });
  }

  checkBtn.addEventListener('click', function () {
    const item = config.items[currentIndex];
    if (!selected) {
      setFeedbackState(config.selectFirstText, 'incorrect');
      return;
    }
    markChoices(item.answer);
    if (selected === item.answer) {
      setFeedbackState(item.correctFeedback, 'correct');
    } else {
      setFeedbackState(item.incorrectFeedback, 'incorrect');
    }
    revealBody.innerHTML = renderChemText(item.reveal);
    revealBox.hidden = true;
    revealBtn.disabled = false;
    nextBtn.disabled = false;
  });

  revealBtn.addEventListener('click', function () {
    revealBox.hidden = false;
  });

  nextBtn.addEventListener('click', function () {
    currentIndex = interaction.nextIndex(currentIndex, config.items.length);
    loadItem(currentIndex);
  });

  loadItem(currentIndex);
}

initSingleChoiceTool({
  promptId: 'pathCheckPrompt',
  choicesId: 'pathCheckChoices',
  feedbackId: 'pathCheckFeedback',
  checkBtnId: 'pathCheckBtn',
  revealBtnId: 'pathRevealBtn',
  nextBtnId: 'pathNextBtn',
  revealBoxId: 'pathCheckReveal',
  revealBodyId: 'pathCheckRevealBody',
  startText: 'Choose one road map, then click Check.',
  readyText: 'Click Check to see whether this path works.',
  selectFirstText: 'Choose one road map before you check.',
  items: [
    {
      prompt: '18.3 g CO2 → molecules CO2. Which path gets from the given unit to the target unit?',
      options: ['Grams → Moles → Particles', 'Grams → Particles', 'Particles → Moles → Grams'],
      answer: 'Grams → Moles → Particles',
      correctFeedback: 'Right — this conversion must pass through moles because moles connect grams to particles.',
      incorrectFeedback: 'Not quite — you skipped the mole step. Use the path that goes through moles, then check which unit you start with.',
      reveal: '<p><strong>Correct road map:</strong> Grams → Moles → Particles</p><p>Grams connect to moles by molar mass. Moles connect to particles by Avogadro\'s number.</p>'
    },
    {
      prompt: '3.20 × 10²⁴ molecules CO2 → grams CO2. Which path gets from the given unit to the target unit?',
      options: ['Particles → Moles → Grams', 'Particles → Grams', 'Grams → Moles → Particles'],
      answer: 'Particles → Moles → Grams',
      correctFeedback: 'Right — this conversion must pass through moles because moles connect particles to grams.',
      incorrectFeedback: 'Not quite — you skipped the mole step. Use the path that goes through moles, then check which unit you start with.',
      reveal: '<p><strong>Correct road map:</strong> Particles → Moles → Grams</p><p>Particles connect to moles by Avogadro\'s number. Moles connect to grams by molar mass.</p>'
    },
    {
      prompt: '11.2 L NH3 at STP → molecules NH3. Which path gets from the given unit to the target unit?',
      options: ['Liters at STP → Moles → Particles', 'Liters at STP → Particles', 'Grams → Moles → Particles'],
      answer: 'Liters at STP → Moles → Particles',
      correctFeedback: 'Right — gases at STP convert to moles first, and then moles convert to particles.',
      incorrectFeedback: 'Not quite — you skipped the mole step. Use the path that goes through moles, then check which unit you start with.',
      reveal: '<p><strong>Correct road map:</strong> Liters at STP → Moles → Particles</p><p>Use 22.4 L/mol only for gases at STP. After that, use Avogadro\'s number.</p>'
    }
  ]
});

initSingleChoiceTool({
  promptId: 'bridgeCheckPrompt',
  choicesId: 'bridgeCheckChoices',
  feedbackId: 'bridgeCheckFeedback',
  checkBtnId: 'bridgeCheckBtn',
  revealBtnId: 'bridgeRevealBtn',
  nextBtnId: 'bridgeNextBtn',
  revealBoxId: 'bridgeCheckReveal',
  revealBodyId: 'bridgeCheckRevealBody',
  startText: 'Choose one factor, then click Check.',
  readyText: 'Click Check to see whether this bridge factor fits.',
  selectFirstText: 'Choose one factor before you check.',
  items: [
    {
      prompt: '18.3 g CO2 → moles CO2. Which conversion factor is the right bridge to moles?',
      options: [
        {
          value: 'molar-mass',
          label: '<span class="fl-frac"><span class="fl-num">1 mol CO2</span><span class="fl-den">44.010 g CO2</span></span>',
          isHTML: true
        },
        {
          value: 'avogadro',
          label: '<span class="fl-frac"><span class="fl-num">6.022 × 10²³ molecules CO2</span><span class="fl-den">1 mol CO2</span></span>',
          isHTML: true
        },
        {
          value: 'stp',
          label: '<span class="fl-frac"><span class="fl-num">22.4 L CO2</span><span class="fl-den">1 mol CO2</span></span>',
          isHTML: true
        }
      ],
      answer: 'molar-mass',
      correctFeedback: 'Right — grams connect to moles through molar mass.',
      incorrectFeedback: 'Not quite — this is the wrong bridge. Ask which conversion factor relates grams of a substance to 1 mole of that same substance.',
      reveal: '<p><strong>Correct bridge:</strong> molar mass</p><p>Grams connect to moles through the molar mass of the substance. Avogadro\'s number connects particles to moles, and 22.4 L/mol only applies to gases at STP.</p>'
    },
    {
      prompt: '3.20 × 10²⁴ molecules CO2 → moles CO2. Which conversion factor is the right bridge to moles?',
      options: [
        {
          value: 'molar-mass',
          label: '<span class="fl-frac"><span class="fl-num">1 mol CO2</span><span class="fl-den">44.010 g CO2</span></span>',
          isHTML: true
        },
        {
          value: 'avogadro',
          label: '<span class="fl-frac"><span class="fl-num">1 mol CO2</span><span class="fl-den">6.022 × 10²³ molecules CO2</span></span>',
          isHTML: true
        },
        {
          value: 'stp',
          label: '<span class="fl-frac"><span class="fl-num">22.4 L CO2</span><span class="fl-den">1 mol CO2</span></span>',
          isHTML: true
        }
      ],
      answer: 'avogadro',
      correctFeedback: 'Right — particles connect to moles through Avogadro\'s number.',
      incorrectFeedback: 'Not quite — this is the wrong bridge. Ask which conversion factor counts particles per mole.',
      reveal: '<p><strong>Correct bridge:</strong> Avogadro\'s number</p><p>Particles connect to moles through 6.022 × 10²³ particles per mole. Molar mass is for grams, and 22.4 L/mol is for gases at STP.</p>'
    },
    {
      prompt: '11.2 L NH3 at STP → moles NH3. Which conversion factor is the right bridge to moles?',
      options: [
        {
          value: 'molar-mass',
          label: '<span class="fl-frac"><span class="fl-num">1 mol NH3</span><span class="fl-den">17.031 g NH3</span></span>',
          isHTML: true
        },
        {
          value: 'avogadro',
          label: '<span class="fl-frac"><span class="fl-num">1 mol NH3</span><span class="fl-den">6.022 × 10²³ molecules NH3</span></span>',
          isHTML: true
        },
        {
          value: 'stp',
          label: '<span class="fl-frac"><span class="fl-num">1 mol NH3</span><span class="fl-den">22.4 L NH3</span></span>',
          isHTML: true
        }
      ],
      answer: 'stp',
      correctFeedback: 'Right — gas volume at STP connects to moles through 22.4 L/mol.',
      incorrectFeedback: 'Not quite — this is the wrong bridge. Check whether the given unit is a gas volume at STP, a particle count, or a mass.',
      reveal: '<p><strong>Correct bridge:</strong> 22.4 L/mol at STP</p><p>This is a gas volume at STP, so liters connect to moles through 22.4 L per mole. Do not use this bridge for ordinary grams or particle counts.</p>'
    }
  ]
});

initSingleChoiceTool({
  promptId: 'percentPredictPrompt',
  choicesId: 'percentPredictChoices',
  feedbackId: 'percentPredictFeedback',
  checkBtnId: 'percentPredictBtn',
  revealBtnId: 'percentRevealBtn',
  nextBtnId: 'percentNextBtn',
  revealBoxId: 'percentPredictReveal',
  revealBodyId: 'percentPredictRevealBody',
  startText: 'Choose one element, then click Check.',
  readyText: 'Click Check to compare your choice with the mass contribution rule.',
  selectFirstText: 'Choose one element before you check.',
  items: [
    {
      prompt: 'In 1 mol of H2O, which element contributes the greatest mass percent?',
      options: ['Hydrogen', 'Oxygen'],
      answer: 'Oxygen',
      correctFeedback: 'Right — oxygen contributes the most mass here because its total mass contribution in 1 mol of the compound is largest.',
      incorrectFeedback: 'Not quite — do not look only at the subscript or only at atomic mass. Compare each element\'s total mass contribution in 1 mol of the compound.',
      reveal: '<p><strong>Mass contribution check:</strong></p><p>H: 2 × 1.008 = 2.016 g/mol<br>O: 1 × 15.999 = 15.999 g/mol</p><p>Oxygen contributes more mass, so it has the greater mass percent.</p>'
    },
    {
      prompt: 'In 1 mol of CO2, which element contributes the greatest mass percent?',
      options: ['Carbon', 'Oxygen'],
      answer: 'Oxygen',
      correctFeedback: 'Right — oxygen contributes the most mass here because its total mass contribution in 1 mol of the compound is largest.',
      incorrectFeedback: 'Not quite — do not look only at the subscript or only at atomic mass. Compare each element\'s total mass contribution in 1 mol of the compound.',
      reveal: '<p><strong>Mass contribution check:</strong></p><p>C: 1 × 12.011 = 12.011 g/mol<br>O: 2 × 15.999 = 31.998 g/mol</p><p>Oxygen contributes more total mass, so it has the greater mass percent.</p>'
    },
    {
      prompt: 'In 1 mol of NH3, which element contributes the greatest mass percent?',
      options: ['Nitrogen', 'Hydrogen'],
      answer: 'Nitrogen',
      correctFeedback: 'Right — nitrogen contributes the most mass here because its total mass contribution in 1 mol of the compound is largest.',
      incorrectFeedback: 'Not quite — do not look only at the subscript or only at atomic mass. Compare each element\'s total mass contribution in 1 mol of the compound.',
      reveal: '<p><strong>Mass contribution check:</strong></p><p>N: 1 × 14.007 = 14.007 g/mol<br>H: 3 × 1.008 = 3.024 g/mol</p><p>Nitrogen contributes more total mass, so it has the greater mass percent.</p>'
    }
  ]
});

initSingleChoiceTool({
  promptId: 'fullSetupPrompt',
  choicesId: 'fullSetupChoices',
  feedbackId: 'fullSetupFeedback',
  checkBtnId: 'fullSetupCheckBtn',
  revealBtnId: 'fullSetupRevealBtn',
  nextBtnId: 'fullSetupNextBtn',
  revealBoxId: 'fullSetupReveal',
  revealBodyId: 'fullSetupRevealBody',
  startText: 'Choose one setup, then click Check.',
  readyText: 'Click Check to see whether this full setup works.',
  selectFirstText: 'Choose one setup before you check.',
  items: [
    {
      prompt: '25.0 g C6H12O6 → molecules C6H12O6. Which full setup is valid?',
      options: [
        {
          value: 'correct',
          label: '25.0 g C6H12O6 × <span class="fl-frac"><span class="fl-num">1 mol C6H12O6</span><span class="fl-den">180.156 g C6H12O6</span></span> × <span class="fl-frac"><span class="fl-num">6.022 × 10²³ molecules</span><span class="fl-den">1 mol C6H12O6</span></span>',
          isHTML: true
        },
        {
          value: 'wrong-order',
          label: '25.0 g C6H12O6 × <span class="fl-frac"><span class="fl-num">6.022 × 10²³ molecules</span><span class="fl-den">1 mol C6H12O6</span></span> × <span class="fl-frac"><span class="fl-num">1 mol C6H12O6</span><span class="fl-den">180.156 g C6H12O6</span></span>',
          isHTML: true
        },
        {
          value: 'wrong-flip',
          label: '25.0 g C6H12O6 × <span class="fl-frac"><span class="fl-num">180.156 g C6H12O6</span><span class="fl-den">1 mol C6H12O6</span></span> × <span class="fl-frac"><span class="fl-num">6.022 × 10²³ molecules</span><span class="fl-den">1 mol C6H12O6</span></span>',
          isHTML: true
        }
      ],
      answer: 'correct',
      correctFeedback: 'Right — the setup first uses molar mass to reach moles, then uses Avogadro\'s number to reach molecules.',
      incorrectFeedback: 'Not quite — one bridge is missing or flipped. Start from the given unit, get to moles first, and then leave only molecules standing.',
      reveal: '<p><strong>Why this one works:</strong> grams must convert to moles through molar mass first. Once moles are in the middle, Avogadro\'s number converts moles to molecules.</p>'
    },
    {
      prompt: '3.50 × 10²⁴ molecules CO2 → liters CO2 at STP. Which full setup is valid?',
      options: [
        {
          value: 'correct',
          label: '3.50 × 10²⁴ molecules CO2 × <span class="fl-frac"><span class="fl-num">1 mol CO2</span><span class="fl-den">6.022 × 10²³ molecules CO2</span></span> × <span class="fl-frac"><span class="fl-num">22.4 L CO2</span><span class="fl-den">1 mol CO2</span></span>',
          isHTML: true
        },
        {
          value: 'wrong-bridge',
          label: '3.50 × 10²⁴ molecules CO2 × <span class="fl-frac"><span class="fl-num">44.010 g CO2</span><span class="fl-den">1 mol CO2</span></span> × <span class="fl-frac"><span class="fl-num">22.4 L CO2</span><span class="fl-den">1 mol CO2</span></span>',
          isHTML: true
        },
        {
          value: 'wrong-final',
          label: '3.50 × 10²⁴ molecules CO2 × <span class="fl-frac"><span class="fl-num">6.022 × 10²³ molecules CO2</span><span class="fl-den">1 mol CO2</span></span> × <span class="fl-frac"><span class="fl-num">22.4 L CO2</span><span class="fl-den">1 mol CO2</span></span>',
          isHTML: true
        }
      ],
      answer: 'correct',
      correctFeedback: 'Right — the setup first uses Avogadro\'s number to reach moles, then uses 22.4 L/mol because the target is gas volume at STP.',
      incorrectFeedback: 'Not quite — check the first bridge and the final target together. Particles must pass through moles before liters at STP can appear.',
      reveal: '<p><strong>Why this one works:</strong> molecules connect to moles through Avogadro\'s number. After that, 22.4 L/mol can convert moles to liters because the gas is at STP.</p>'
    },
    {
      prompt: '11.2 L NH3 at STP → molecules NH3. Which full setup is valid?',
      options: [
        {
          value: 'correct',
          label: '11.2 L NH3 × <span class="fl-frac"><span class="fl-num">1 mol NH3</span><span class="fl-den">22.4 L NH3</span></span> × <span class="fl-frac"><span class="fl-num">6.022 × 10²³ molecules NH3</span><span class="fl-den">1 mol NH3</span></span>',
          isHTML: true
        },
        {
          value: 'wrong-order',
          label: '11.2 L NH3 × <span class="fl-frac"><span class="fl-num">6.022 × 10²³ molecules NH3</span><span class="fl-den">1 mol NH3</span></span> × <span class="fl-frac"><span class="fl-num">1 mol NH3</span><span class="fl-den">22.4 L NH3</span></span>',
          isHTML: true
        },
        {
          value: 'wrong-flip',
          label: '11.2 L NH3 × <span class="fl-frac"><span class="fl-num">22.4 L NH3</span><span class="fl-den">1 mol NH3</span></span> × <span class="fl-frac"><span class="fl-num">6.022 × 10²³ molecules NH3</span><span class="fl-den">1 mol NH3</span></span>',
          isHTML: true
        }
      ],
      answer: 'correct',
      correctFeedback: 'Right — the setup first uses 22.4 L/mol to reach moles, then uses Avogadro\'s number to reach molecules.',
      incorrectFeedback: 'Not quite — liters at STP must convert to moles first. Then choose the factor that leaves molecules as the final unit.',
      reveal: '<p><strong>Why this one works:</strong> the starting unit is liters of gas at STP, so the first bridge is 22.4 L per mole. Once moles are in the middle, Avogadro\'s number leaves molecules as the final unit.</p>'
    }
  ]
});

// ===================== PERCENT COMPOSITION =====================
const atomicMasses = {
  H:1.008, He:4.003, Li:6.941, Be:9.012, B:10.811, C:12.011, N:14.007, O:15.999, F:18.998, Ne:20.180,
  Na:22.990, Mg:24.305, Al:26.982, Si:28.086, P:30.974, S:32.065, Cl:35.453, Ar:39.948, K:39.098,
  Ca:40.078, Sc:44.956, Ti:47.867, V:50.942, Cr:51.996, Mn:54.938, Fe:55.845, Co:58.933, Ni:58.693,
  Cu:63.546, Zn:65.38, Ga:69.723, Ge:72.64, As:74.922, Se:78.96, Br:79.904, Kr:83.798, Rb:85.468,
  Sr:87.62, Ba:137.327, I:126.904, Pb:207.2, Ag:107.868, Au:196.967, Pt:195.084
};

function parseFormula(formula) {
  const stack = [{}];
  let i = 0;
  while (i < formula.length) {
    if (formula[i] === '(') {
      stack.push({});
      i++;
    } else if (formula[i] === ')') {
      i++;
      let numStr = '';
      while (i < formula.length && /\d/.test(formula[i])) {
        numStr += formula[i];
        i++;
      }
      const n = parseInt(numStr) || 1;
      const top = stack.pop();
      for (const el in top) {
        stack[stack.length - 1][el] = (stack[stack.length - 1][el] || 0) + top[el] * n;
      }
    } else if (/[A-Z]/.test(formula[i])) {
      let el = formula[i++];
      while (i < formula.length && /[a-z]/.test(formula[i])) {
        el += formula[i++];
      }
      let numStr = '';
      while (i < formula.length && /\d/.test(formula[i])) {
        numStr += formula[i++];
      }
      const n = parseInt(numStr) || 1;
      stack[stack.length - 1][el] = (stack[stack.length - 1][el] || 0) + n;
    } else {
      i++;
    }
  }
  return stack[0];
}

function calcComposition() {
  const f = document.getElementById('formulaInput').value.trim();
  if (!f) {
    document.getElementById('compResult').textContent = 'Enter a formula to check your work.';
    return;
  }

  try {
    const elems = parseFormula(f);
    let total = 0;
    const contributions = {};

    for (const el in elems) {
      if (!atomicMasses[el]) {
        document.getElementById('compResult').textContent = `Unknown element: ${el}`;
        return;
      }
      const mass = elems[el] * atomicMasses[el];
      contributions[el] = { count: elems[el], mass };
      total += mass;
    }

    let html = `<strong class="composition-result-start">${renderChemFormula(f)}</strong> — Molar mass: <span class="composition-result-molar-mass">${total.toFixed(3)} g/mol</span><br><br>`;
    for (const el in contributions) {
      const pct = (contributions[el].mass / total * 100).toFixed(2);
      html += `<span class="composition-result-element">${el}</span>: ${contributions[el].count} × ${atomicMasses[el]} = ${contributions[el].mass.toFixed(3)} g/mol → <span class="composition-result-percent">${pct}%</span>&nbsp;&nbsp;&nbsp;`;
    }

    document.getElementById('compResult').innerHTML = renderChemText(html);
  } catch (e) {
    document.getElementById('compResult').textContent = 'Could not parse formula.';
  }
}
