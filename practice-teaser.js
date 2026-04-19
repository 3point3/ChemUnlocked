/* =====================================================
   practice-teaser.js — ChemUnlocked Shared Teaser Logic
   Handles the 3-problem sample set on all teaser pages.
   ===================================================== */

/* ── Text normalizer (matches full practice engine) ── */
function normalize(s) {
  return String(s)
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, d => '0123456789'['₀₁₂₃₄₅₆₇₈₉'.indexOf(d)])
    .replace(/\s+/g, '')
    .toLowerCase()
    .trim();
}

/* ── Render a fixed array of sample problems ── */
function renderSampleProblems(problems, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  problems.forEach((p, i) => {
    const tagClass = p.type === 'calc' ? 'tag-calc' : p.type === 'multi' ? 'tag-multi' : 'tag-concept';
    let answerHTML = '';

    if (p.choices) {
      answerHTML = `<div class="prob-choices">${p.choices.map((c, ci) =>
        `<button class="choice-btn" data-prob="${p.id}" data-idx="${ci}" data-correct="${p.correct}">${c}</button>`
      ).join('')}</div>`;
    } else {
      const unitLabel = p.unit ? ` <span class="unit-label-inline">${p.unit}</span>` : '';
      answerHTML = `<div class="prob-answer-area">
        <input class="prob-input" id="input-${p.id}" type="text" placeholder="Your answer…" aria-label="Answer for this problem">
        ${unitLabel}
        <div class="prob-btns">
          <button class="btn btn-sm teaser-check-btn"
            data-prob="${p.id}"
            data-answer="${encodeURIComponent(JSON.stringify(p.answer))}"
            data-tolerance="${p.tolerance || 0}"
            data-istext="${!!p.isText}">Check</button>
        </div>
      </div>`;
    }

    container.insertAdjacentHTML('beforeend', `
      <div class="problem" id="prob-${p.id}">
        <div class="prob-top">
          <span class="prob-num">#${i + 1}</span>
          <span class="prob-tag ${tagClass}">${p.tag}</span>
        </div>
        <div class="prob-q">${p.q}</div>
        ${answerHTML}
        <div class="feedback" id="fb-${p.id}"></div>
        <div class="solution" id="sol-${p.id}">${p.solution}</div>
      </div>`);
  });

  /* ── Event delegation for choices ── */
  container.addEventListener('click', function (e) {
    const choiceBtn = e.target.closest('.choice-btn');
    if (choiceBtn) {
      const probId  = choiceBtn.dataset.prob;
      const chosen  = parseInt(choiceBtn.dataset.idx, 10);
      const correct = parseInt(choiceBtn.dataset.correct, 10);
      handleChoiceCheck(probId, chosen, correct, choiceBtn);
      return;
    }

    const checkBtn = e.target.closest('.teaser-check-btn');
    if (checkBtn) {
      const probId    = checkBtn.dataset.prob;
      const answer    = JSON.parse(decodeURIComponent(checkBtn.dataset.answer));
      const tolerance = parseFloat(checkBtn.dataset.tolerance);
      const isText    = checkBtn.dataset.istext === 'true';
      const inputEl   = document.getElementById(`input-${probId}`);
      handleTextCheck(probId, inputEl, answer, tolerance, isText);
    }
  });
}

function handleChoiceCheck(probId, chosen, correct, btn) {
  const fb = document.getElementById(`fb-${probId}`);
  if (fb.style.display === 'block') return;
  const btns = btn.closest('.prob-choices').querySelectorAll('.choice-btn');
  btns.forEach(b => b.disabled = true);
  const isCorrect = chosen === correct;
  btn.classList.add(isCorrect ? 'correct' : 'incorrect');
  if (!isCorrect) btns[correct].classList.add('reveal-correct');
  fb.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
  fb.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';
  fb.style.display = 'block';
  document.getElementById(`sol-${probId}`).style.display = 'block';
}

function handleTextCheck(probId, inputEl, answer, tolerance, isText) {
  const fb = document.getElementById(`fb-${probId}`);
  if (fb.style.display === 'block') return;
  const raw = inputEl.value.trim();
  let isCorrect;
  if (isText) {
    isCorrect = normalize(raw) === normalize(String(answer));
  } else {
    const val = parseFloat(raw);
    isCorrect = !isNaN(val) && Math.abs(val - answer) <= tolerance;
  }
  inputEl.disabled = true;
  fb.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
  fb.textContent = isCorrect ? '✓ Correct!' : `✗ Incorrect — answer: ${answer}`;
  fb.style.display = 'block';
  document.getElementById(`sol-${probId}`).style.display = 'block';
}
