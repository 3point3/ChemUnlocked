/* =====================================================
   premium-practice-engine.js
   Client-side engine for the full premium practice experience.
   Fetches a problem set from the Netlify function and renders
   the same interactive UI as the original practice pages.

   Usage (from a premium-gated page):
     import { initPremiumPractice } from './premium-practice-engine.js';
     initPremiumPractice({ unit: '05', containerId: 'problemContainer' });
   ===================================================== */

function normalize(s) {
  return String(s)
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, d => '0123456789'['₀₁₂₃₄₅₆₇₈₉'.indexOf(d)])
    .replace(/\s+/g, '')
    .toLowerCase()
    .trim();
}

function isEquivalentTextAnswer(raw, answer) {
  const normalizedRaw = normalize(raw);
  const normalizedAnswer = normalize(String(answer));
  if (normalizedRaw === normalizedAnswer) return true;

  // Accept either "+1" or "1+" style charge notation for simple signed values.
  const chargeMatch = normalizedRaw.match(/^([+-]?)(\d+)([+-]?)$/);
  const answerChargeMatch = normalizedAnswer.match(/^([+-]?)(\d+)([+-]?)$/);
  if (chargeMatch && answerChargeMatch) {
    const rawSign = chargeMatch[1] || chargeMatch[3];
    const answerSign = answerChargeMatch[1] || answerChargeMatch[3];
    if (chargeMatch[2] === answerChargeMatch[2] && rawSign && rawSign === answerSign) {
      return true;
    }
  }

  // For ordered text answers, ignore common separator differences while preserving order.
  const splitTokens = (value) => normalize(value).split(/[;,><-]+/).filter(Boolean);
  const rawTokens = splitTokens(raw);
  const answerTokens = splitTokens(answer);
  if (rawTokens.length > 1 && rawTokens.length === answerTokens.length) {
    return rawTokens.every((token, index) => token === answerTokens[index]);
  }

  return false;
}

export async function initPremiumPractice({ unit, containerId = 'problemContainer', filter = 'all', count = 3 } = {}) {
  const container = document.getElementById(containerId);
  if (!container) throw new Error(`Container #${containerId} not found`);

  container.innerHTML = '<p class="premium-status premium-status--muted">Loading your problem set…</p>';

  let problems;
  try {
    const token = localStorage.getItem('cu_token') || '';
    const res = await fetch(
      `/.netlify/functions/get-premium-problem-set?unit=${encodeURIComponent(unit)}&filter=${encodeURIComponent(filter)}&count=${encodeURIComponent(count)}`,
      {
        headers: token ? { 'x-access-token': token } : {}
      }
    );
    if (!res.ok) {
      let msg = 'Could not load premium problems.';
      try {
        const data = await res.json();
        msg = data.error || msg;
      } catch {}
      throw new Error(msg);
    }
    ({ problems } = await res.json());
  } catch (err) {
    container.innerHTML = `<p class="premium-status premium-status--error">Could not load problems: ${err.message}</p>`;
    return;
  }

  renderProblems(problems, container);
}

export function renderPremiumProblemSet({ problems, containerId = 'problemContainer' } = {}) {
  const container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
  if (!container) throw new Error(`Container #${containerId} not found`);
  renderProblems(problems, container);
}

function renderProblems(problems, container) {
  container.innerHTML = '';
  const solutionRenderer = window.ChemUnlockedSolutionRenderer;

  problems.forEach((p, i) => {
    const tagClass = p.type === 'calc' ? 'tag-calc' : p.type === 'multi' ? 'tag-multi' : 'tag-concept';
    let answerHTML = '';
    const solutionHTML = solutionRenderer ? solutionRenderer.format(p) : p.solution;
    const diagramHTML = p.diagram
      ? `<figure class="prob-diagram-wrap">
          <img class="prob-diagram" src="${p.diagram}" alt="${p.diagramAlt || ''}" loading="lazy">
          ${p.diagramCaption ? `<figcaption class="prob-diagram-caption">${p.diagramCaption}</figcaption>` : ''}
        </figure>`
      : '';

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
          <button class="btn btn-sm premium-check-btn"
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
        ${diagramHTML}
        ${answerHTML}
        <div class="feedback" id="fb-${p.id}"></div>
        <div class="solution" id="sol-${p.id}">${solutionHTML}</div>
      </div>`);
  });

  container.onclick = function (e) {
    const choiceBtn = e.target.closest('.choice-btn');
    if (choiceBtn) {
      const probId  = choiceBtn.dataset.prob;
      const chosen  = parseInt(choiceBtn.dataset.idx, 10);
      const correct = parseInt(choiceBtn.dataset.correct, 10);
      const fb = document.getElementById(`fb-${probId}`);
      if (fb.style.display === 'block') return;
      const btns = choiceBtn.closest('.prob-choices').querySelectorAll('.choice-btn');
      btns.forEach(b => b.disabled = true);
      const isCorrect = chosen === correct;
      choiceBtn.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) btns[correct].classList.add('reveal-correct');
      fb.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
      fb.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';
      fb.style.display = 'block';
      document.getElementById(`sol-${probId}`).style.display = 'block';
      return;
    }

    const checkBtn = e.target.closest('.premium-check-btn');
    if (checkBtn) {
      const probId    = checkBtn.dataset.prob;
      const answer    = JSON.parse(decodeURIComponent(checkBtn.dataset.answer));
      const tolerance = parseFloat(checkBtn.dataset.tolerance);
      const isText    = checkBtn.dataset.istext === 'true';
      const inputEl   = document.getElementById(`input-${probId}`);
      const fb        = document.getElementById(`fb-${probId}`);
      if (fb.style.display === 'block') return;
      const raw = inputEl.value.trim();
      let isCorrect;
      if (isText) {
        isCorrect = isEquivalentTextAnswer(raw, answer);
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
  };
}
