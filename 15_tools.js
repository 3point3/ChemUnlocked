document.addEventListener('DOMContentLoaded', function () {
  const superscriptDigitMap = {
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
    '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9'
  };

  function decodeSuperscriptDigits(text) {
    return text.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, function (char) {
      return superscriptDigitMap[char] || char;
    });
  }

  function normalizeNotationHtml(text) {
    if (!text) return text;
    return text
      .replace(/pKa/g, 'pK<sub>a</sub>')
      .replace(/pKb/g, 'pK<sub>b</sub>')
      .replace(/Kw/g, 'K<sub>w</sub>')
      .replace(/10⁻([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, function (_, digits) {
        return '10<sup>-' + decodeSuperscriptDigits(digits) + '</sup>';
      })
      .replace(/10⁺([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, function (_, digits) {
        return '10<sup>+' + decodeSuperscriptDigits(digits) + '</sup>';
      })
      .replace(/pKₐ/g, 'pK<sub>a</sub>')
      .replace(/\[H3O\+\]/g, '[<span class="ion-group">H<span class="chem-sub">3</span>O<span class="chem-charge">+</span></span>]')
      .replace(/\[H₃O⁺\]/g, '[<span class="ion-group">H<span class="chem-sub">3</span>O<span class="chem-charge">+</span></span>]')
      .replace(/H3O\+/g, '<span class="ion-group">H<span class="chem-sub">3</span>O<span class="chem-charge">+</span></span>')
      .replace(/H₃O⁺/g, '<span class="ion-group">H<span class="chem-sub">3</span>O<span class="chem-charge">+</span></span>')
      .replace(/\[OH-\]/g, '[<span class="ion-group">OH<span class="chem-charge">-</span></span>]')
      .replace(/\[OH⁻\]/g, '[<span class="ion-group">OH<span class="chem-charge">-</span></span>]')
      .replace(/OH-/g, '<span class="ion-group">OH<span class="chem-charge">-</span></span>')
      .replace(/OH⁻/g, '<span class="ion-group">OH<span class="chem-charge">-</span></span>')
      .replace(/\[A-\]/g, '[<span class="ion-group">A<span class="chem-charge">-</span></span>]')
      .replace(/\[A⁻\]/g, '[<span class="ion-group">A<span class="chem-charge">-</span></span>]')
      .replace(/A-/g, '<span class="ion-group">A<span class="chem-charge">-</span></span>')
      .replace(/A⁻/g, '<span class="ion-group">A<span class="chem-charge">-</span></span>')
      .replace(/CH3COO-/g, '<span class="ion-group">CH<span class="chem-sub">3</span>COO<span class="chem-charge">-</span></span>')
      .replace(/CH₃COO⁻/g, '<span class="ion-group">CH<span class="chem-sub">3</span>COO<span class="chem-charge">-</span></span>')
      .replace(/CH3COOH/g, '<span class="ion-group">CH<span class="chem-sub">3</span>COOH</span>')
      .replace(/CH₃COOH/g, 'CH<span class="chem-sub">3</span>COOH')
      .replace(/H2O/g, '<span class="ion-group">H<span class="chem-sub">2</span>O</span>')
      .replace(/H₂O/g, 'H<span class="chem-sub">2</span>O')
      .replace(/HNO3/g, 'HNO<span class="chem-sub">3</span>')
      .replace(/HNO₃/g, 'HNO<span class="chem-sub">3</span>');
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

  function setupExploreChoiceTool(config) {
    const state = { index: 0, selected: '', checked: false };
    const promptEl = document.getElementById(config.promptId);
    const choicesEl = document.getElementById(config.choicesId);
    const feedbackEl = document.getElementById(config.feedbackId);
    const revealEl = document.getElementById(config.revealId);
    const revealListEl = document.getElementById(config.revealListId);
    const supportEl = document.getElementById(config.supportId);
    const checkBtn = document.getElementById(config.checkId);
    const revealBtn = document.getElementById(config.revealBtnId);
    const nextBtn = document.getElementById(config.nextBtnId);

    function setFeedback(message, status) {
      feedbackEl.innerHTML = normalizeNotationHtml(message);
      feedbackEl.dataset.state = status;
    }

    function updateSelection() {
      Array.prototype.forEach.call(choicesEl.querySelectorAll('button'), function (btn) {
        const isSelected = btn.dataset.value === state.selected;
        btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        btn.classList.toggle('active', isSelected);
      });
    }

    function renderChoices(card) {
      choicesEl.innerHTML = '';
      shuffleArray(card.choices).forEach(function (choice) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'segment-btn tool-choice-btn explore-choice';
        btn.dataset.value = choice.value;
        btn.setAttribute('aria-pressed', 'false');
        btn.innerHTML = normalizeNotationHtml(choice.label);
        btn.addEventListener('click', function () {
          if (state.checked) return;
          state.selected = choice.value;
          updateSelection();
          setFeedback(config.pendingMessage, 'pending');
          revealEl.hidden = true;
          supportEl.hidden = true;
          revealBtn.disabled = true;
        });
        choicesEl.appendChild(btn);
      });
      updateSelection();
    }

    function render() {
      const card = config.cards[state.index];
      promptEl.innerHTML = normalizeNotationHtml(card.prompt);
      renderChoices(card);
      setFeedback(config.pendingMessage, 'pending');
      revealEl.hidden = true;
      supportEl.hidden = true;
      revealBtn.disabled = true;
      nextBtn.disabled = true;
    }

    checkBtn.addEventListener('click', function () {
      if (!state.selected) {
        setFeedback(config.pendingMessage, 'pending');
        return;
      }
      const card = config.cards[state.index];
      state.checked = true;
      updateSelection();
      const isCorrect = state.selected === card.answer;
      setFeedback(isCorrect ? card.correct : card.incorrect, isCorrect ? 'correct' : 'incorrect');
      revealBtn.disabled = false;
      nextBtn.disabled = false;
    });

    revealBtn.addEventListener('click', function () {
      if (!state.checked) return;
      const card = config.cards[state.index];
      revealListEl.innerHTML = '';
      card.reveal.forEach(function (item) {
        const li = document.createElement('li');
        li.innerHTML = normalizeNotationHtml(item);
        revealListEl.appendChild(li);
      });
      revealEl.hidden = false;
      supportEl.hidden = false;
    });

    nextBtn.addEventListener('click', function () {
      state.index = pickNextIndex(config.cards, state.index);
      state.selected = '';
      state.checked = false;
      render();
    });

    state.index = pickNextIndex(config.cards, -1);
    render();
  }

  setupExploreChoiceTool({
    promptId: 'classify-card',
    choicesId: 'classify-choices',
    feedbackId: 'classify-feedback',
    revealId: 'classify-reveal-box',
    revealListId: 'classify-reveal-list',
    supportId: 'classify-support',
    checkId: 'classify-check',
    revealBtnId: 'classify-reveal',
    nextBtnId: 'classify-reset',
    pendingMessage: 'Choose one answer, then click Check.',
    cards: [
      {
        prompt: 'pH = 3.2',
        answer: 'Acidic',
        reveal: [
          'pH = 3.2 is <strong>below 7</strong>.',
          'At 25 °C, pH below 7 means <strong>[H3O+] is greater than [OH-]</strong>.',
          'So this solution is <strong>acidic</strong>.'
        ],
        correct: 'Right — this value shows the solution is acidic. At 25 °C, pH below 7 means [H3O+] is greater than [OH-].',
        incorrect: 'Not quite — compare the value to the neutral reference first. At 25 °C, pH below 7 is acidic, pH 7 is neutral, and pH above 7 is basic.'
      },
      {
        prompt: 'pOH = 2.0',
        answer: 'Basic',
        reveal: [
          'pOH = 2.0 is <strong>below 7</strong>.',
          'For pOH, values below 7 mean <strong>[OH-] is greater than [H3O+]</strong>.',
          'So this solution is <strong>basic</strong>.'
        ],
        correct: 'Right — this value shows the solution is basic. At 25 °C, pOH below 7 means [OH-] is greater than [H3O+].',
        incorrect: 'Not quite — pOH works in the opposite direction from pH. At 25 °C, pOH below 7 means the solution is basic.'
      },
      {
        prompt: '[OH-] = 1.0 × 10⁻⁷ M',
        answer: 'Neutral',
        reveal: [
          'A neutral solution at 25 °C has <strong>[H3O+] = [OH-] = 1.0 × 10⁻⁷ M</strong>.',
          'This card matches that exact neutral benchmark.',
          'So the solution is <strong>neutral</strong>.'
        ],
        correct: 'Right — this value matches the neutral reference. At 25 °C, neutral water has [H3O+] and [OH-] both equal to 1.0 × 10⁻⁷ M.',
        incorrect: 'Not quite — compare the concentration to the neutral reference. Start with 1.0 × 10⁻⁷ M: if [OH-] is exactly that value, the solution is neutral.'
      },
      {
        prompt: 'pH = 8.6',
        answer: 'Basic',
        reveal: ['pH = 8.6 is <strong>above 7</strong>.', 'At 25 °C, pH above 7 means <strong>[OH-] is greater than [H3O+]</strong>.', 'So this solution is <strong>basic</strong>.'],
        correct: 'Right — pH above 7 means the solution is basic at 25 °C.',
        incorrect: 'Not quite — values above pH 7 are basic.'
      },
      {
        prompt: 'pOH = 9.5',
        answer: 'Acidic',
        reveal: ['pOH = 9.5 is <strong>above 7</strong>.', 'For pOH, values above 7 mean <strong>[H3O+] is greater than [OH-]</strong>.', 'So the solution is <strong>acidic</strong>.'],
        correct: 'Right — pOH above 7 means acidic at 25 °C.',
        incorrect: 'Not quite — for pOH, values above 7 mean acidic.'
      },
      {
        prompt: '[H3O+] = 1.0 × 10⁻³ M',
        answer: 'Acidic',
        reveal: ['[H3O+] is larger than the neutral benchmark of <strong>1.0 × 10⁻⁷ M</strong>.', 'That means hydronium concentration is elevated.', 'So the solution is <strong>acidic</strong>.'],
        correct: 'Right — [H3O+] above 1.0 × 10⁻⁷ M means acidic.',
        incorrect: 'Not quite — larger-than-neutral [H3O+] means acidic.'
      },
      {
        prompt: '[OH-] = 2.5 × 10⁻² M',
        answer: 'Basic',
        reveal: ['[OH-] is larger than the neutral benchmark of <strong>1.0 × 10⁻⁷ M</strong>.', 'That means hydroxide concentration is elevated.', 'So the solution is <strong>basic</strong>.'],
        correct: 'Right — [OH-] above 1.0 × 10⁻⁷ M means basic.',
        incorrect: 'Not quite — larger-than-neutral [OH-] means basic.'
      },
      {
        prompt: 'pH = 7.0',
        answer: 'Neutral',
        reveal: ['At 25 °C, <strong>pH = 7</strong> is the neutral point.', 'That means [H3O+] and [OH-] are equal.', 'So the solution is <strong>neutral</strong>.'],
        correct: 'Right — pH 7 is neutral at 25 °C.',
        incorrect: 'Not quite — pH 7 is the neutral benchmark.'
      },
      {
        prompt: 'pOH = 7.0',
        answer: 'Neutral',
        reveal: ['At 25 °C, <strong>pOH = 7</strong> is also neutral.', 'That means [H3O+] and [OH-] are equal.', 'So the solution is <strong>neutral</strong>.'],
        correct: 'Right — pOH 7 is neutral at 25 °C.',
        incorrect: 'Not quite — pOH 7 is the neutral benchmark.'
      },
      {
        prompt: '[H3O+] = 4.0 × 10⁻⁹ M',
        answer: 'Basic',
        reveal: ['[H3O+] is lower than the neutral benchmark of <strong>1.0 × 10⁻⁷ M</strong>.', 'Lower hydronium means relatively higher hydroxide.', 'So the solution is <strong>basic</strong>.'],
        correct: 'Right — [H3O+] below 1.0 × 10⁻⁷ M means basic.',
        incorrect: 'Not quite — lower-than-neutral [H3O+] means basic.'
      },
      {
        prompt: '[OH-] = 8.0 × 10⁻¹⁰ M',
        answer: 'Acidic',
        reveal: ['[OH-] is lower than the neutral benchmark of <strong>1.0 × 10⁻⁷ M</strong>.', 'Lower hydroxide means relatively higher hydronium.', 'So the solution is <strong>acidic</strong>.'],
        correct: 'Right — [OH-] below 1.0 × 10⁻⁷ M means acidic.',
        incorrect: 'Not quite — lower-than-neutral [OH-] means acidic.'
      },
      {
        prompt: 'pH = 11.2',
        answer: 'Basic',
        reveal: ['pH = 11.2 is well <strong>above 7</strong>.', 'That means hydroxide dominates over hydronium.', 'So the solution is <strong>basic</strong>.'],
        correct: 'Right — pH above 7 means basic.',
        incorrect: 'Not quite — pH above 7 means basic.'
      },
      {
        prompt: 'pOH = 11.8',
        answer: 'Acidic',
        reveal: ['pOH = 11.8 is well <strong>above 7</strong>.', 'For pOH, that means hydroxide is relatively low.', 'So the solution is <strong>acidic</strong>.'],
        correct: 'Right — pOH above 7 means acidic.',
        incorrect: 'Not quite — pOH above 7 means acidic.'
      }
    ].map(function (card) {
      card.choices = [
        { label: 'Acidic', value: 'Acidic' },
        { label: 'Neutral', value: 'Neutral' },
        { label: 'Basic', value: 'Basic' }
      ];
      return card;
    })
  });

  setupExploreChoiceTool({
    promptId: 'buffer-card',
    choicesId: 'buffer-choices',
    feedbackId: 'buffer-feedback',
    revealId: 'buffer-reveal-box',
    revealListId: 'buffer-reveal-list',
    supportId: 'buffer-support',
    checkId: 'buffer-check',
    revealBtnId: 'buffer-reveal',
    nextBtnId: 'buffer-reset',
    pendingMessage: 'Choose one answer, then click Check.',
    cards: [
      {
        prompt: 'pKa = 4.74, [HA] = 0.20 M, [A-] = 0.05 M',
        answer: 'Below pKa',
        reveal: [
          'This buffer has <strong>more HA than A-</strong>.',
          'In Henderson-Hasselbalch, log([A-]/[HA]) is therefore <strong>negative</strong>.',
          'That puts the pH <strong>below pK<sub>a</sub></strong>.'
        ],
        correct: 'Right — more acid than conjugate base makes the log term negative, so the pH is below pKa.',
        incorrect: 'Not quite — check which member of the pair is larger. When [HA] is greater than [A-], the pH is below pKa; compare the two concentrations again.'
      },
      {
        prompt: 'pKa = 6.10, [HA] = 0.12 M, [A-] = 0.12 M',
        answer: 'Equal to pKa',
        reveal: [
          '[HA] and [A-] are <strong>equal</strong>.',
          'That makes the ratio [A-]/[HA] = 1, and log(1) = <strong>0</strong>.',
          'So <strong>pH = pK<sub>a</sub></strong>.'
        ],
        correct: 'Right — equal acid and conjugate base make the log term zero, so pH = pKa.',
        incorrect: 'Not quite — this buffer has equal amounts of HA and A-. When the two concentrations match, pH = pKa.'
      },
      {
        prompt: 'pKa = 4.74, [HA] = 0.100 M, [A-] = 0.150 M',
        answer: 'Above pKa',
        reveal: [
          'This buffer has <strong>more A- than HA</strong>.',
          'That makes log([A-]/[HA]) <strong>positive</strong>.',
          'So the pH must be <strong>above pK<sub>a</sub></strong>.'
        ],
        correct: 'Right — more conjugate base than acid makes the log term positive, so the pH is above pKa.',
        incorrect: 'Not quite — check which member of the pair is larger. When [A-] is greater than [HA], the pH is above pKa; when they are equal, pH = pKa.'
      },
      {
        prompt: 'pKa = 3.10, [HA] = 0.30 M, [A-] = 0.10 M',
        answer: 'Below pKa',
        reveal: ['There is <strong>more HA than A-</strong>.', 'That makes [A-]/[HA] less than 1.', 'So pH is <strong>below pK<sub>a</sub></strong>.'],
        correct: 'Right — more HA than A- means pH below pKa.',
        incorrect: 'Not quite — if HA is larger, pH is below pKa.'
      },
      {
        prompt: 'pKa = 9.25, [HA] = 0.050 M, [A-] = 0.050 M',
        answer: 'Equal to pKa',
        reveal: ['[HA] and [A-] are <strong>equal</strong>.', 'That makes the log term zero.', 'So <strong>pH = pK<sub>a</sub></strong>.'],
        correct: 'Right — equal concentrations give pH = pKa.',
        incorrect: 'Not quite — equal HA and A- means pH = pKa.'
      },
      {
        prompt: 'pKa = 7.20, [HA] = 0.040 M, [A-] = 0.160 M',
        answer: 'Above pKa',
        reveal: ['There is <strong>more A- than HA</strong>.', 'That makes [A-]/[HA] greater than 1.', 'So the pH is <strong>above pK<sub>a</sub></strong>.'],
        correct: 'Right — more A- than HA means pH above pKa.',
        incorrect: 'Not quite — if A- is larger, pH is above pKa.'
      },
      {
        prompt: 'pKa = 5.00, [HA] = 0.18 M, [A-] = 0.06 M',
        answer: 'Below pKa',
        reveal: ['HA is three times larger than A-.', 'That keeps the log term negative.', 'So pH is <strong>below pK<sub>a</sub></strong>.'],
        correct: 'Right — more HA than A- means pH below pKa.',
        incorrect: 'Not quite — if HA is larger, pH is below pKa.'
      },
      {
        prompt: 'pKa = 6.35, [HA] = 0.090 M, [A-] = 0.090 M',
        answer: 'Equal to pKa',
        reveal: ['HA and A- match exactly.', 'That makes the ratio 1.', 'So pH equals <strong>pK<sub>a</sub></strong>.'],
        correct: 'Right — equal concentrations make pH = pKa.',
        incorrect: 'Not quite — equal concentrations give pH = pKa.'
      },
      {
        prompt: 'pKa = 10.30, [HA] = 0.020 M, [A-] = 0.080 M',
        answer: 'Above pKa',
        reveal: ['A- is four times larger than HA.', 'That makes the log term positive.', 'So pH is <strong>above pK<sub>a</sub></strong>.'],
        correct: 'Right — more A- than HA means pH above pKa.',
        incorrect: 'Not quite — if A- is larger, pH is above pKa.'
      },
      {
        prompt: 'pKa = 1.80, [HA] = 0.22 M, [A-] = 0.22 M',
        answer: 'Equal to pKa',
        reveal: ['The acid and conjugate base concentrations are equal.', 'That makes log([A-]/[HA]) = 0.', 'So pH equals <strong>pK<sub>a</sub></strong>.'],
        correct: 'Right — equal concentrations mean pH = pKa.',
        incorrect: 'Not quite — equal HA and A- means pH = pKa.'
      },
      {
        prompt: 'pKa = 8.10, [HA] = 0.24 M, [A-] = 0.08 M',
        answer: 'Below pKa',
        reveal: ['HA is larger than A-.', 'That keeps the log term negative.', 'So pH is <strong>below pK<sub>a</sub></strong>.'],
        correct: 'Right — more HA than A- means pH below pKa.',
        incorrect: 'Not quite — if HA is larger, pH is below pKa.'
      },
      {
        prompt: 'pKa = 4.20, [HA] = 0.070 M, [A-] = 0.210 M',
        answer: 'Above pKa',
        reveal: ['A- is three times larger than HA.', 'That makes the log term positive.', 'So pH is <strong>above pK<sub>a</sub></strong>.'],
        correct: 'Right — more A- than HA means pH above pKa.',
        incorrect: 'Not quite — if A- is larger, pH is above pKa.'
      }
    ].map(function (card) {
      card.choices = [
        { label: 'Below pKa', value: 'Below pKa' },
        { label: 'Equal to pKa', value: 'Equal to pKa' },
        { label: 'Above pKa', value: 'Above pKa' }
      ];
      return card;
    })
  });

  setupExploreChoiceTool({
    promptId: 'titration-card',
    choicesId: 'titration-choices',
    feedbackId: 'titration-feedback',
    revealId: 'titration-reveal-box',
    revealListId: 'titration-reveal-list',
    supportId: 'titration-support',
    checkId: 'titration-check',
    revealBtnId: 'titration-reveal',
    nextBtnId: 'titration-reset',
    pendingMessage: 'Choose one setup, then click Check.',
    cards: [
      {
        prompt: 'A 25.0 mL HCl sample is titrated to a faint pink phenolphthalein endpoint with 0.100 M NaOH. It takes 30.0 mL of base. Find the molarity of the acid.',
        choices: [
          { label: 'M<sub>a</sub>(25.0) = 0.100(30.0)', value: 'A' },
          { label: 'M<sub>a</sub>(30.0) = 0.100(25.0)', value: 'B' },
          { label: '25.0 + 30.0 = M<sub>a</sub> + 0.100', value: 'C' }
        ],
        answer: 'A',
        reveal: [
          'At the faint pink endpoint, the acid and base have reacted in the correct <strong>1:1 stoichiometric ratio</strong>.',
          'That means you can use <strong>M<sub>a</sub>V<sub>a</sub> = M<sub>b</sub>V<sub>b</sub></strong>.',
          'Substituting the values gives <strong>M<sub>a</sub>(25.0) = 0.100(30.0)</strong>, so M<sub>a</sub> = 0.120 M.'
        ],
        correct: 'Right — the endpoint marks neutralization for this 1:1 reaction, so <strong>M<sub>a</sub>V<sub>a</sub> = M<sub>b</sub>V<sub>b</sub></strong> is the correct setup.',
        incorrect: 'Not quite — start from the 1:1 endpoint relationship first. The acid volume stays with the acid molarity, and the base volume stays with the base molarity.'
      },
      {
        prompt: 'A 0.150 M HNO3 sample is neutralized at the faint pink phenolphthalein endpoint by 18.0 mL of 0.100 M NaOH. Find the volume of the acid sample.',
        choices: [
          { label: '0.150(V<sub>a</sub>) = 0.100(18.0)', value: 'A' },
          { label: '0.150(18.0) = 0.100(V<sub>a</sub>)', value: 'B' },
          { label: 'V<sub>a</sub> = 18.0 + 0.150 + 0.100', value: 'C' }
        ],
        answer: 'A',
        reveal: [
          'HNO3 and NaOH neutralize in a <strong>1:1 ratio</strong>.',
          'At the endpoint, moles of acid equal moles of base, so use <strong>M<sub>a</sub>V<sub>a</sub> = M<sub>b</sub>V<sub>b</sub></strong>.',
          'That gives <strong>0.150(V<sub>a</sub>) = 0.100(18.0)</strong>, so V<sub>a</sub> = 12.0 mL.'
        ],
        correct: 'Right — once the endpoint is reached, the 1:1 neutralization setup puts the unknown acid volume on the acid side.',
        incorrect: 'Not quite — pair each molarity with its own volume. The unknown acid volume belongs with the acid molarity, not the base molarity.'
      },
      {
        prompt: 'A 20.0 mL acetic acid sample is titrated to a faint pink phenolphthalein endpoint with 0.200 M NaOH. The acid concentration is 0.150 M. Find the base volume used.',
        choices: [
          { label: '0.150(20.0) = 0.200(V<sub>b</sub>)', value: 'A' },
          { label: '0.150(V<sub>b</sub>) = 0.200(20.0)', value: 'B' },
          { label: 'V<sub>b</sub> = 20.0 + 0.150/0.200', value: 'C' }
        ],
        answer: 'A',
        reveal: [
          'Even though acetic acid is weak, it still reacts with NaOH in a <strong>1:1 mole ratio</strong>.',
          'At the endpoint, use <strong>M<sub>a</sub>V<sub>a</sub> = M<sub>b</sub>V<sub>b</sub></strong>.',
          'Substitution gives <strong>0.150(20.0) = 0.200(V<sub>b</sub>)</strong>, so V<sub>b</sub> = 15.0 mL.'
        ],
        correct: 'Right — the endpoint still uses the 1:1 neutralization relation here, so that setup correctly solves for the base volume.',
        incorrect: 'Not quite — keep the acid values together and the base values together. Endpoint stoichiometry gives a 1:1 setup, not an added-value expression.'
      },
      {
        prompt: 'A 40.0 mL HCl sample reaches endpoint with 25.0 mL of 0.200 M NaOH. Which setup finds the acid molarity?',
        choices: [{ label: 'M<sub>a</sub>(40.0) = 0.200(25.0)', value: 'A' }, { label: 'M<sub>a</sub>(25.0) = 0.200(40.0)', value: 'B' }, { label: '40.0 + 25.0 = M<sub>a</sub> + 0.200', value: 'C' }],
        answer: 'A',
        reveal: ['HCl and NaOH react in a <strong>1:1 ratio</strong>.', 'At endpoint, use <strong>M<sub>a</sub>V<sub>a</sub> = M<sub>b</sub>V<sub>b</sub></strong>.', 'So the correct setup is <strong>M<sub>a</sub>(40.0) = 0.200(25.0)</strong>.'],
        correct: 'Right — the unknown acid molarity stays with the acid volume.',
        incorrect: 'Not quite — keep each molarity paired with its own solution volume.'
      },
      {
        prompt: 'A 15.0 mL nitric acid sample is neutralized by 30.0 mL of 0.125 M NaOH. Which setup finds the acid molarity?',
        choices: [{ label: '0.125(15.0) = M<sub>a</sub>(30.0)', value: 'A' }, { label: 'M<sub>a</sub>(15.0) = 0.125(30.0)', value: 'B' }, { label: '15.0 + 30.0 = M<sub>a</sub> + 0.125', value: 'C' }],
        answer: 'B',
        reveal: ['This is still a <strong>1:1 acid-base neutralization</strong>.', 'The acid volume belongs with the acid molarity, and the base volume belongs with the base molarity.', 'So the correct setup is <strong>M<sub>a</sub>(15.0) = 0.125(30.0)</strong>.'],
        correct: 'Right — the acid side uses the acid volume and unknown acid molarity.',
        incorrect: 'Not quite — pair each molarity with its own volume before solving.'
      },
      {
        prompt: 'A 32.0 mL HBr sample reaches endpoint with 16.0 mL of 0.250 M NaOH. Which setup finds the acid molarity?',
        choices: [{ label: 'M<sub>a</sub>(32.0) = 0.250(16.0)', value: 'A' }, { label: 'M<sub>a</sub>(16.0) = 0.250(32.0)', value: 'B' }, { label: '32.0/16.0 = M<sub>a</sub>/0.250 + 1', value: 'C' }],
        answer: 'A',
        reveal: ['HBr and NaOH react in a <strong>1:1 ratio</strong>.', 'Use the endpoint relation <strong>M<sub>a</sub>V<sub>a</sub> = M<sub>b</sub>V<sub>b</sub></strong>.', 'That gives <strong>M<sub>a</sub>(32.0) = 0.250(16.0)</strong>.'],
        correct: 'Right — that is the correct endpoint setup for a 1:1 titration.',
        incorrect: 'Not quite — the acid molarity must stay with the acid volume.'
      },
      {
        prompt: 'A 0.0800 M HNO3 solution needs 24.0 mL of NaOH to reach endpoint. The acid sample volume was 30.0 mL. Which setup finds the NaOH molarity?',
        choices: [{ label: '0.0800(24.0) = M<sub>b</sub>(30.0)', value: 'A' }, { label: '0.0800(30.0) = M<sub>b</sub>(24.0)', value: 'B' }, { label: '30.0 + 24.0 = 0.0800 + M<sub>b</sub>', value: 'C' }],
        answer: 'B',
        reveal: ['At endpoint, moles acid = moles base for a <strong>1:1 reaction</strong>.', 'The acid side uses 0.0800 and 30.0 mL.', 'So the correct setup is <strong>0.0800(30.0) = M<sub>b</sub>(24.0)</strong>.'],
        correct: 'Right — the unknown base molarity belongs with the base volume.',
        incorrect: 'Not quite — keep the acid numbers together and the base numbers together.'
      },
      {
        prompt: 'A 50.0 mL monoprotic acid sample is titrated with 40.0 mL of 0.150 M NaOH. Which setup finds the acid molarity?',
        choices: [{ label: 'M<sub>a</sub>(50.0) = 0.150(40.0)', value: 'A' }, { label: 'M<sub>a</sub>(40.0) = 0.150(50.0)', value: 'B' }, { label: '50.0 + 40.0 = M<sub>a</sub> + 0.150', value: 'C' }],
        answer: 'A',
        reveal: ['Monoprotic acid with NaOH means a <strong>1:1 neutralization</strong>.', 'At endpoint, use <strong>M<sub>a</sub>V<sub>a</sub> = M<sub>b</sub>V<sub>b</sub></strong>.', 'So the correct setup is <strong>M<sub>a</sub>(50.0) = 0.150(40.0)</strong>.'],
        correct: 'Right — that setup matches the 1:1 endpoint relation.',
        incorrect: 'Not quite — the acid molarity must stay with the acid sample volume.'
      },
      {
        prompt: 'A 0.250 M HCl sample of unknown volume reaches endpoint with 10.0 mL of 0.300 M NaOH. Which setup finds the acid volume?',
        choices: [{ label: '0.250(V<sub>a</sub>) = 0.300(10.0)', value: 'A' }, { label: '0.250(10.0) = 0.300(V<sub>a</sub>)', value: 'B' }, { label: 'V<sub>a</sub> = 10.0 + 0.250/0.300', value: 'C' }],
        answer: 'A',
        reveal: ['This is a <strong>1:1 acid-base titration</strong>.', 'The unknown acid volume stays on the acid side of the equation.', 'So the correct setup is <strong>0.250(V<sub>a</sub>) = 0.300(10.0)</strong>.'],
        correct: 'Right — the unknown acid volume belongs with the acid molarity.',
        incorrect: 'Not quite — pair each molarity with the correct solution volume.'
      },
      {
        prompt: 'A 35.0 mL weak monoprotic acid sample needs 28.0 mL of 0.175 M NaOH to reach endpoint. Which setup finds the acid molarity?',
        choices: [{ label: 'M<sub>a</sub>(28.0) = 0.175(35.0)', value: 'A' }, { label: 'M<sub>a</sub>(35.0) = 0.175(28.0)', value: 'B' }, { label: '35.0 + 28.0 = M<sub>a</sub> + 0.175', value: 'C' }],
        answer: 'B',
        reveal: ['Weak or strong does not change the <strong>1:1 mole ratio</strong> for a monoprotic acid with NaOH.', 'Use <strong>M<sub>a</sub>V<sub>a</sub> = M<sub>b</sub>V<sub>b</sub></strong>.', 'So the correct setup is <strong>M<sub>a</sub>(35.0) = 0.175(28.0)</strong>.'],
        correct: 'Right — the endpoint still uses the 1:1 setup here.',
        incorrect: 'Not quite — keep the acid values together and the base values together.'
      },
      {
        prompt: 'A 22.0 mL HCl sample reaches endpoint with 11.0 mL of 0.180 M KOH. Which setup finds the acid molarity?',
        choices: [{ label: 'M<sub>a</sub>(22.0) = 0.180(11.0)', value: 'A' }, { label: 'M<sub>a</sub>(11.0) = 0.180(22.0)', value: 'B' }, { label: '22.0 - 11.0 = M<sub>a</sub>/0.180', value: 'C' }],
        answer: 'A',
        reveal: ['HCl and KOH neutralize in a <strong>1:1 ratio</strong>.', 'At endpoint, use the acid values on one side and the base values on the other.', 'So the correct setup is <strong>M<sub>a</sub>(22.0) = 0.180(11.0)</strong>.'],
        correct: 'Right — that correctly matches each molarity to its own volume.',
        incorrect: 'Not quite — the acid molarity must stay with the acid volume.'
      },
      {
        prompt: 'A 45.0 mL HNO3 sample is titrated to endpoint with 15.0 mL of 0.300 M NaOH. Which setup finds the acid molarity?',
        choices: [{ label: 'M<sub>a</sub>(45.0) = 0.300(15.0)', value: 'A' }, { label: 'M<sub>a</sub>(15.0) = 0.300(45.0)', value: 'B' }, { label: '45.0 + 15.0 = M<sub>a</sub> + 0.300', value: 'C' }],
        answer: 'A',
        reveal: ['HNO3 and NaOH react in a <strong>1:1 ratio</strong>.', 'At endpoint, use <strong>M<sub>a</sub>V<sub>a</sub> = M<sub>b</sub>V<sub>b</sub></strong>.', 'So the correct setup is <strong>M<sub>a</sub>(45.0) = 0.300(15.0)</strong>.'],
        correct: 'Right — the unknown acid molarity stays with the acid sample volume.',
        incorrect: 'Not quite — pair each molarity with its own volume.'
      }
    ]
  });
});
