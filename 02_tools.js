document.addEventListener('DOMContentLoaded', function () {
  initMatterClassifier();
  initChangeClassifier();
});

function initMatterClassifier() {
  const quizImage = document.getElementById('matterQuizImage');
  const quizPrompt = document.getElementById('matterQuizPrompt');
  const quizChoices = document.getElementById('matterQuizChoices');
  const quizFeedback = document.getElementById('matterQuizFeedback');
  const revealList = document.getElementById('matterQuizRevealList');
  const revealBox = document.getElementById('matterQuizReveal');
  const supportBox = document.getElementById('matterQuizSupport');
  const checkBtn = document.getElementById('matterCheckBtn');
  const revealBtn = document.getElementById('matterRevealBtn');
  const nextBtn = document.getElementById('matterNextBtn');

  if (!quizImage || !quizPrompt || !quizChoices || !quizFeedback || !revealList || !revealBox || !supportBox || !checkBtn || !revealBtn || !nextBtn) {
    return;
  }

  const interaction = window.ChemUnlockedInteractive || {
    nextIndex(currentIndex, length) {
      if (length <= 1) return 0;
      let next = currentIndex;
      while (next === currentIndex) {
        next = Math.floor(Math.random() * length);
      }
      return next;
    },
    shuffle(items) {
      if (!Array.isArray(items)) return [];
      const copy = items.slice();
      for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
      }
      return copy;
    }
  };

  const particleQuestions = [
    {
      image: 'images/practice-u02-monatomic-element.svg',
      alt: 'Monatomic particle diagram showing only one kind of atom.',
      prompt: 'A sample shows only one kind of atom repeated throughout the container. What is the best classification?',
      answer: 'Element',
      choices: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'],
      reveal: [
        'There is only one atom type present.',
        'No second atom type is bonded in, so this cannot be a compound.',
        'Only one particle type means the sample is a pure element.'
      ],
      coaching: {
        Compound: 'A compound needs more than one atom type bonded together.',
        'Homogeneous mixture': 'A mixture must contain more than one particle type.',
        'Heterogeneous mixture': 'A heterogeneous mixture must contain more than one particle type in separate regions.'
      }
    },
    {
      image: 'images/practice-u02-diatomic-element.svg',
      alt: 'Diatomic particle diagram showing pairs of identical atoms bonded together.',
      prompt: 'Each particle is a bonded pair, but both atoms in each pair are the same type. What is the best classification?',
      answer: 'Element',
      choices: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'],
      reveal: [
        'Bonding does not automatically mean compound.',
        'A compound requires different atom types bonded in one repeating unit.',
        'Because each bonded pair uses only one atom type, the sample is still an element.'
      ],
      coaching: {
        Compound: 'Bonding alone does not make a compound. The bonded atoms must be different atom types.',
        'Homogeneous mixture': 'A mixture must contain more than one particle type.',
        'Heterogeneous mixture': 'A heterogeneous mixture must contain more than one particle type in separate regions.'
      }
    },
    {
      image: 'images/practice-u02-compound-2to1.svg',
      alt: 'Particle diagram showing identical molecules made from more than one atom type.',
      prompt: 'The sample shows the same bonded particle repeated, and each particle contains more than one atom type. What is the best classification?',
      answer: 'Compound',
      choices: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'],
      reveal: [
        'Different atom types are present in each particle.',
        'Those atom types repeat in the same bonded ratio every time.',
        'One repeating bonded particle made from different atoms is a pure compound.'
      ],
      coaching: {
        Element: 'An element has only one atom type. This diagram shows more than one atom type bonded together.',
        'Homogeneous mixture': 'A homogeneous mixture has more than one particle type present, not one repeating bonded particle.',
        'Heterogeneous mixture': 'A heterogeneous mixture has different particle types in separate regions, not one repeating bonded particle.'
      }
    },
    {
      image: 'images/practice-u02-mixture-uniform.svg',
      alt: 'Particle diagram showing more than one particle type spread evenly throughout the container.',
      prompt: 'More than one particle type is present, but the particles stay evenly mixed throughout the sample. What is the best classification?',
      answer: 'Homogeneous mixture',
      choices: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'],
      reveal: [
        'More than one particle type means the sample is a mixture.',
        'The particle types are spread evenly rather than separated into regions.',
        'Uniform composition throughout means homogeneous mixture.'
      ],
      coaching: {
        Element: 'An element would show only one atom type.',
        Compound: 'A pure compound would show one repeating bonded particle throughout.',
        'Heterogeneous mixture': 'This sample has more than one particle type, but they are evenly spread rather than separated into regions.'
      }
    },
    {
      image: 'images/practice-u02-mixture-heterogeneous.svg',
      alt: 'Particle diagram showing different particle types separated into distinct regions.',
      prompt: 'Different particle types are present and they cluster into distinct regions. What is the best classification?',
      answer: 'Heterogeneous mixture',
      choices: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'],
      reveal: [
        'More than one particle type means the sample is a mixture.',
        'The particle types are not spread uniformly through the container.',
        'Separate regions or layers make the mixture heterogeneous.'
      ],
      coaching: {
        Element: 'An element would show only one atom type.',
        Compound: 'A pure compound would show one repeating bonded particle throughout.',
        'Homogeneous mixture': 'More than one particle type is present, but the key clue is that they are separated into regions instead of spread uniformly.'
      }
    },
    {
      image: 'images/practice-u02-saltwater.svg',
      alt: 'Particle diagram representing dissolved particles mixed evenly in solution.',
      prompt: 'Saltwater is shown here at the particle level. What is the best overall classification?',
      answer: 'Homogeneous mixture',
      choices: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'],
      reveal: [
        'Saltwater contains more than one substance, so it is not pure.',
        'The particles are dispersed evenly throughout the sample.',
        'A uniform solution is a homogeneous mixture.'
      ],
      coaching: {
        Element: 'Saltwater contains more than one substance, so it cannot be an element.',
        Compound: 'Saltwater is not one pure bonded particle repeated throughout. It contains dissolved substances mixed together.',
        'Heterogeneous mixture': 'Saltwater is uniform throughout, so it is not heterogeneous.'
      }
    },
    {
      image: 'images/example-particle-mixture.svg',
      alt: 'Particle diagram showing multiple particle types mixed together.',
      prompt: 'The diagram contains different particle types distributed throughout the container with no separate regions. What is the best classification?',
      answer: 'Homogeneous mixture',
      choices: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'],
      reveal: [
        'There are multiple particle types present, so the sample is a mixture.',
        'The particle types are interspersed rather than separated into layers.',
        'That makes the sample a homogeneous mixture.'
      ],
      coaching: {
        Element: 'A pure element would show only one atom type.',
        Compound: 'A pure compound would show one repeating bonded particle throughout.',
        'Heterogeneous mixture': 'The particle types are mixed throughout the container instead of split into distinct regions.'
      }
    },
    {
      image: 'images/practice-u02-element-Au.svg',
      alt: 'Particle diagram showing six identical large gold-colored atoms, all unbonded, spread throughout a container.',
      prompt: 'A pure metal sample at the particle level shows only one kind of atom — all identical, none bonded to a different type. What is the best classification?',
      answer: 'Element',
      choices: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'],
      reveal: [
        'Every particle in the container is the same atom type.',
        'No atom is bonded to a different kind of atom.',
        'One atom type, unbonded = pure element in monatomic form.'
      ],
      coaching: {
        Compound: 'A compound requires two or more different atom types chemically bonded together in a fixed ratio.',
        'Homogeneous mixture': 'A homogeneous mixture must contain more than one particle type evenly distributed.',
        'Heterogeneous mixture': 'A heterogeneous mixture must contain more than one particle type in separate regions.'
      }
    },
    {
      image: 'images/practice-u02-element-He.svg',
      alt: 'Particle diagram showing eight identical small lavender atoms, all unbonded, spread throughout a container.',
      prompt: 'A gas sample at room temperature contains only one kind of tiny, unbonded particle throughout the container. What is the best classification?',
      answer: 'Element',
      choices: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'],
      reveal: [
        'Every particle is the same atom type — no second type is present.',
        'None of the atoms are bonded to anything.',
        'One atom type, completely unbonded = monatomic element, the form noble gases take.'
      ],
      coaching: {
        Compound: 'A compound requires two or more different atom types bonded together. This sample shows only one type.',
        'Homogeneous mixture': 'A mixture must contain more than one distinct particle type — this sample has only one.',
        'Heterogeneous mixture': 'Both types of mixtures require more than one particle type to be present.'
      }
    },
    {
      image: 'images/practice-u02-compound-H2O.svg',
      alt: 'Particle diagram showing four identical bent molecules, each with one large red atom bonded to two smaller gray atoms.',
      prompt: 'Every particle in the sample looks the same: one large red atom bonded to two smaller atoms in a bent shape. What is the best classification?',
      answer: 'Compound',
      choices: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'],
      reveal: [
        'Each particle contains two different atom types — one large red and two smaller.',
        'The ratio (1 large : 2 small) is identical in every particle and never varies.',
        'One repeating particle built from different bonded atom types = compound.'
      ],
      coaching: {
        Element: 'An element contains only one atom type. Each particle here shows two different atom types bonded together.',
        'Homogeneous mixture': 'A homogeneous mixture would show more than one distinct particle type mixed together — every particle here is identical.',
        'Heterogeneous mixture': 'All particles throughout this sample are the same molecule. A heterogeneous mixture would show different particle types separated into regions.'
      }
    },
    {
      image: 'images/practice-u02-compound-NaCl.svg',
      alt: 'Particle diagram showing four identical bonded pairs, each with one purple atom touching one teal atom in a 1-to-1 ratio.',
      prompt: 'The sample shows only one kind of bonded pair — one purple atom bonded to one teal atom — repeated throughout. What is the best classification?',
      answer: 'Compound',
      choices: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'],
      reveal: [
        'Two different atom types (purple and teal) are present in each bonded unit.',
        'The 1:1 ratio is fixed and identical in every pair throughout the sample.',
        'A fixed ratio of different bonded atom types = compound, not a mixture of separate substances.'
      ],
      coaching: {
        Element: 'An element contains only one atom type. This diagram shows two different types bonded together in every particle.',
        'Homogeneous mixture': 'A homogeneous mixture has more than one distinct particle type mixed together. Here, every particle is the same bonded unit — a pure substance.',
        'Heterogeneous mixture': 'A heterogeneous mixture shows different particle types in separate regions. All particles here are identical bonded pairs.'
      }
    },
    {
      image: 'images/practice-u02-compound-CO2.svg',
      alt: 'Particle diagram showing three identical linear molecules, each with a large dark center atom bonded to two smaller red atoms on either side.',
      prompt: 'A gas sample shows identical linear molecules: one dark center atom bonded to two red atoms, one on each side. What is the best classification?',
      answer: 'Compound',
      choices: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'],
      reveal: [
        'Two different atom types are present — a dark center and two red outer atoms.',
        'Every molecule in the sample has the same bonded arrangement in the same ratio.',
        'One repeating molecule built from two different atom types = compound.'
      ],
      coaching: {
        Element: 'An element has only one atom type. Each molecule here has a dark center bonded to two red atoms — two distinct types.',
        'Homogeneous mixture': 'All particles in this sample are identical molecules, not a mixture of different particles.',
        'Heterogeneous mixture': 'Every region of this sample contains the same molecule. A heterogeneous mixture would show different particle types separated into regions.'
      }
    }
  ];

  let currentIndex = 0;
  let selectedChoice = '';

  function resetState() {
    selectedChoice = '';
    revealBox.hidden = true;
    supportBox.hidden = true;
    revealBtn.disabled = true;
    nextBtn.disabled = true;
    quizFeedback.dataset.state = 'pending';
    quizFeedback.textContent = 'Choose one classification, then click Check.';
  }

  function setSelectedChoice(choice) {
    selectedChoice = choice;
    quizChoices.querySelectorAll('button').forEach(button => {
      const active = button.dataset.choice === choice;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function renderQuestion(index) {
    const question = particleQuestions[index];
    const choices = interaction.shuffle(question.choices);

    quizImage.src = question.image;
    quizImage.alt = question.alt;
    quizPrompt.textContent = question.prompt;
    quizChoices.innerHTML = '';

    choices.forEach(choice => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'segment-btn tool-choice-btn explore-choice';
      button.dataset.choice = choice;
      button.setAttribute('aria-pressed', 'false');
      button.textContent = choice;
      button.addEventListener('click', function () {
        setSelectedChoice(choice);
      });
      quizChoices.appendChild(button);
    });

    resetState();
  }

  function checkAnswer() {
    const question = particleQuestions[currentIndex];

    if (!selectedChoice) {
      quizFeedback.dataset.state = 'incorrect';
      quizFeedback.textContent = 'Pick one classification first so the feedback can target your reasoning.';
      return;
    }

    revealBtn.disabled = false;
    nextBtn.disabled = false;
    supportBox.hidden = false;

    if (selectedChoice === question.answer) {
      quizFeedback.dataset.state = 'correct';
      quizFeedback.textContent = 'Correct. ' + question.reveal[question.reveal.length - 1] + ' Rule: classify by particle types first, then decide whether those particles make one pure substance or a mixture.';
    } else {
      quizFeedback.dataset.state = 'incorrect';
      quizFeedback.textContent = 'Not yet. ' + (question.coaching[selectedChoice] || question.reveal[question.reveal.length - 1]) + ' Correct rule: classify by particle types first, then decide whether those particles are bonded in one repeating unit or mixed together. Next step: count the particle types before you look at the answer label.';
    }
  }

  function revealAnswer() {
    const question = particleQuestions[currentIndex];
    revealList.innerHTML = '';
    question.reveal.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      revealList.appendChild(li);
    });
    revealBox.hidden = false;
    supportBox.hidden = false;
  }

  checkBtn.addEventListener('click', checkAnswer);
  revealBtn.addEventListener('click', revealAnswer);
  nextBtn.addEventListener('click', function () {
    currentIndex = interaction.nextIndex(currentIndex, particleQuestions.length);
    renderQuestion(currentIndex);
  });

  renderQuestion(currentIndex);
}

function initChangeClassifier() {
  const scenarioEl = document.getElementById('changeScenario');
  const choiceRow = document.getElementById('changeChoiceRow');
  const feedbackEl = document.getElementById('changeFeedback');
  const revealEl = document.getElementById('changeReveal');
  const revealList = document.getElementById('changeRevealList');
  const supportEl = document.getElementById('changeSupport');
  const checkBtn = document.getElementById('changeCheckBtn');
  const revealBtn = document.getElementById('changeRevealBtn');
  const nextBtn = document.getElementById('changeNextBtn');

  if (!scenarioEl || !choiceRow || !feedbackEl || !revealEl || !revealList || !supportEl || !checkBtn || !revealBtn || !nextBtn) {
    return;
  }

  const scenarios = [
    {
      scenario: 'Ice cubes melt into liquid water in a glass.',
      answer: 'Physical change',
      reveal: [
        'The substance before the change is water.',
        'The substance after the change is still water.',
        'A change of state with no new substance formed is a physical change.'
      ],
      correctFeedback: 'Correct. Melting changes state, but the substance stays water. Rule: no new substance means physical change.',
      coaching: {
        'Chemical change': 'That error treats a state change as if it created a new substance. Melting changes only the physical form.'
      }
    },
    {
      scenario: 'An iron nail rusts and forms reddish-brown iron oxide.',
      answer: 'Chemical change',
      reveal: [
        'The starting substance is iron metal.',
        'After the change, iron oxide is present.',
        'Because a new substance formed, this is a chemical change.'
      ],
      correctFeedback: 'Correct. Rusting forms iron oxide, which is a new substance. Rule: new substance means chemical change.',
      coaching: {
        'Physical change': 'That error focuses on the nail changing appearance, but rusting changes iron into iron oxide.'
      }
    },
    {
      scenario: 'Table salt dissolves in water and can later be recovered by evaporating the water.',
      answer: 'Physical change',
      reveal: [
        'Salt and water are still present after dissolving.',
        'No new substance formed during the dissolving process.',
        'A mixture forming without new substances is a physical change.'
      ],
      correctFeedback: 'Correct. Dissolving separates and spreads particles, but it does not create a new substance. Rule: recoverable mixing is physical change.',
      coaching: {
        'Chemical change': 'That error treats dissolving as if the original substances disappeared chemically. In this case, the salt can be recovered unchanged.'
      }
    },
    {
      scenario: 'A piece of wood burns and leaves ash, smoke, and gases.',
      answer: 'Chemical change',
      reveal: [
        'The starting material is wood.',
        'After burning, new substances such as ash and gases are present.',
        'Because combustion forms new substances, this is a chemical change.'
      ],
      correctFeedback: 'Correct. Burning makes new substances such as ash and gases. Rule: combustion is a chemical change because the substance changes identity.',
      coaching: {
        'Physical change': 'That error focuses on size or heat, but burning changes the material into different substances.'
      }
    }
  ];

  let currentIndex = 0;
  let selectedChoice = '';

  function setChoice(choice) {
    selectedChoice = choice;
    choiceRow.querySelectorAll('button').forEach(button => {
      const active = button.dataset.changeChoice === choice;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function resetDisplay() {
    revealEl.hidden = true;
    supportEl.hidden = true;
    revealBtn.disabled = true;
    nextBtn.disabled = true;
    feedbackEl.dataset.state = 'pending';
    feedbackEl.textContent = 'Choose one classification, then click Check.';
  }

  function renderScenario(index) {
    const item = scenarios[index];
    scenarioEl.textContent = item.scenario;
    selectedChoice = '';
    choiceRow.querySelectorAll('button').forEach(button => {
      button.classList.remove('active');
      button.setAttribute('aria-pressed', 'false');
    });
    resetDisplay();
  }

  function checkAnswer() {
    const item = scenarios[currentIndex];

    if (!selectedChoice) {
      feedbackEl.dataset.state = 'incorrect';
      feedbackEl.textContent = 'Pick one classification first so the feedback can target your reasoning.';
      return;
    }

    revealBtn.disabled = false;
    nextBtn.disabled = false;
    supportEl.hidden = false;

    if (selectedChoice === item.answer) {
      feedbackEl.dataset.state = 'correct';
      feedbackEl.textContent = item.correctFeedback;
    } else {
      feedbackEl.dataset.state = 'incorrect';
      feedbackEl.textContent = 'Not yet. ' + (item.coaching[selectedChoice] || 'The best classification is ' + item.answer + '.') + ' Correct rule: physical changes keep the same substance, while chemical changes form a new one. Next step: name the substance before and after the change.';
    }
  }

  function revealAnswer() {
    const item = scenarios[currentIndex];
    revealList.innerHTML = '';
    item.reveal.forEach(step => {
      const li = document.createElement('li');
      li.textContent = step;
      revealList.appendChild(li);
    });
    revealEl.hidden = false;
    supportEl.hidden = false;
  }

  choiceRow.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
      setChoice(button.dataset.changeChoice);
    });
  });

  checkBtn.addEventListener('click', checkAnswer);
  revealBtn.addEventListener('click', revealAnswer);
  nextBtn.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % scenarios.length;
    renderScenario(currentIndex);
  });

  renderScenario(currentIndex);
}
