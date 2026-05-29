/* =====================================================
   premium-practice-engine.js
   Client-side engine for the full premium practice experience.
   Fetches a problem set from the Netlify function and renders
   the same interactive UI as the original practice pages.

   Usage (from a premium-gated page):
     import { initPremiumPractice } from './premium-practice-engine.js';
     initPremiumPractice({ unit: '04', containerId: 'problemContainer' });
   ===================================================== */

const SUBSCRIPT_DIGITS = '₀₁₂₃₄₅₆₇₈₉';
const SUPERSCRIPT_MAP = {
  '⁰': '0',
  '¹': '1',
  '²': '2',
  '³': '3',
  '⁴': '4',
  '⁵': '5',
  '⁶': '6',
  '⁷': '7',
  '⁸': '8',
  '⁹': '9',
  '⁺': '+',
  '⁻': '-'
};

function normalize(s) {
  return String(s)
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, d => '0123456789'[SUBSCRIPT_DIGITS.indexOf(d)])
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, ch => SUPERSCRIPT_MAP[ch] || ch)
    .replace(/⁺/g, '+')
    .replace(/[⁻−]/g, '-')
    .replace(/\s+/g, '')
    .toLowerCase()
    .trim();
}

function matchesTextAnswer(raw, answer) {
  if (Array.isArray(answer)) {
    return answer.some(option => normalize(raw) === normalize(String(option)));
  }
  return normalize(raw) === normalize(String(answer));
}

function formatAnswerForFeedback(answer) {
  if (Array.isArray(answer)) {
    return answer.join(' or ');
  }
  return String(answer);
}

function decodeSubscripts(text) {
  return String(text).replace(/[₀₁₂₃₄₅₆₇₈₉]/g, d => '0123456789'[SUBSCRIPT_DIGITS.indexOf(d)]);
}

function decodeSuperscripts(text) {
  return String(text).replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]/g, ch => SUPERSCRIPT_MAP[ch] || ch);
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function normalizeNotationText(text) {
  if (!text) return escapeHtml(text);

  const hasUnicodeNotation = /[₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]/.test(text);
  const hasAsciiNotation = /(?:[A-Z][a-z]?\d+|\^[+-]?\d+[+-]?|\^[+-])/.test(text);
  if (!hasUnicodeNotation && !hasAsciiNotation) return escapeHtml(text);

  return escapeHtml(text)
    .replace(/(^|[\s([{])([⁰¹²³⁴⁵⁶⁷⁸⁹]+)(?=[A-Z][a-z]?)/g, (_, prefix, digits) => `${prefix}<sup>${decodeSuperscripts(digits)}</sup>`)
    .replace(/([A-Za-z\)])([₀₁₂₃₄₅₆₇₈₉]+)/g, (_, lead, digits) => `${lead}<span class="chem-sub">${decodeSubscripts(digits)}</span>`)
    .replace(/((?:\([A-Za-z][A-Za-z0-9]*?(?:<span class="chem-sub">\d+<\/span>)*\)|[A-Z][a-z]?(?:<span class="chem-sub">\d+<\/span>)?)+)([⁰¹²³⁴⁵⁶⁷⁸⁹]*[⁺⁻])/g, (_, formula, charge) => `<span class="ion-group">${formula}<span class="chem-charge">${decodeSuperscripts(charge)}</span></span>`)
    .replace(/([₀₁₂₃₄₅₆₇₈₉]+)/g, digits => `<sub>${decodeSubscripts(digits)}</sub>`)
    .replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+)/g, marks => `<sup>${decodeSuperscripts(marks)}</sup>`)
    .replace(/([A-Z][a-z]?|\))(\d+)/g, (_, lead, digits) => `${lead}<span class="chem-sub">${digits}</span>`)
    .replace(/(<\/span>|[A-Za-z0-9)\]])\^([+-]?\d+[+-]?|[+-])/g, (_, base, exponent) => `${base}<sup>${exponent}</sup>`)
    .replace(/((?:\([A-Za-z][A-Za-z0-9]*?(?:<span class="chem-sub">\d+<\/span>)*\)|[A-Z][a-z]?(?:<span class="chem-sub">\d+<\/span>)?)+)<sup>(\d*[+-])<\/sup>/g, (_, formula, charge) => `<span class="ion-group">${formula}<span class="chem-charge">${charge}</span></span>`);
}

function normalizeNotationHtml(html) {
  if (!html) return String(html);
  const hasUnicodeNotation = /[₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]/.test(html);
  const hasAsciiNotation = /(?:[A-Z][a-z]?\d+|\^[+-]?\d+[+-]?|\^[+-])/.test(html);
  if (!hasUnicodeNotation && !hasAsciiNotation) return String(html);

  const template = document.createElement('template');
  template.innerHTML = String(html);
  const walker = document.createTreeWalker(template.content, NodeFilter.SHOW_TEXT);
  const textNodes = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach(node => {
    const normalized = normalizeNotationText(node.textContent);
    if (normalized === escapeHtml(node.textContent)) return;
    const fragment = document.createRange().createContextualFragment(normalized);
    node.replaceWith(fragment);
  });

  return template.innerHTML;
}

export async function initPremiumPractice({ unit, containerId = 'problemContainer', filter = 'all', count = 12 } = {}) {
  const container = document.getElementById(containerId);
  if (!container) throw new Error(`Container #${containerId} not found`);

  container.innerHTML = '<p class="premium-status premium-status--muted">Loading your problem set...</p>';

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

export function renderPremiumProblemSet({ problems = [], containerId = 'problemContainer' } = {}) {
  const container = document.getElementById(containerId);
  if (!container) throw new Error(`Container #${containerId} not found`);
  renderProblems(problems, container);
}

function renderProblems(problems, container) {
  ensureInteractionHandler(container);
  let html = '';

  problems.forEach((p, i) => {
    const tagClass = p.type === 'calc' ? 'tag-calc' : p.type === 'multi' ? 'tag-multi' : 'tag-concept';
    let answerHTML = '';

    if (p.choices) {
      answerHTML = `<div class="prob-choices">${p.choices.map((c, ci) =>
        `<button class="choice-btn" data-prob="${p.id}" data-idx="${ci}" data-correct="${p.correct}" aria-pressed="false">${normalizeNotationHtml(c)}</button>`
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

    html += `
      <div class="problem" id="prob-${p.id}">
        <div class="prob-top">
          <span class="prob-num">#${i + 1}</span>
          <span class="prob-tag ${tagClass}">${p.tag}</span>
        </div>
        <div class="prob-q">${normalizeNotationHtml(p.q)}</div>
        ${answerHTML}
        <div class="feedback" id="fb-${p.id}" aria-live="polite" hidden></div>
        <div class="solution" id="sol-${p.id}" hidden>${normalizeNotationHtml(p.solution)}</div>
      </div>`;
  });

  container.innerHTML = html;
}

function ensureInteractionHandler(container) {
  if (container.dataset.premiumBound === 'true') return;

  container.addEventListener('click', function (e) {
    const choiceBtn = e.target.closest('.choice-btn');
    if (choiceBtn) {
      const probId  = choiceBtn.dataset.prob;
      const chosen  = parseInt(choiceBtn.dataset.idx, 10);
      const correct = parseInt(choiceBtn.dataset.correct, 10);
      const fb = document.getElementById(`fb-${probId}`);
      if (!fb.hidden) return;
      const btns = choiceBtn.closest('.prob-choices').querySelectorAll('.choice-btn');
      btns.forEach(b => {
        b.disabled = true;
        b.setAttribute('aria-pressed', String(b === choiceBtn));
      });
      const isCorrect = chosen === correct;
      choiceBtn.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) btns[correct].classList.add('reveal-correct');
      fb.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
      fb.innerHTML = isCorrect ? '✓ Correct!' : '✗ Incorrect';
      fb.hidden = false;
      document.getElementById(`sol-${probId}`).hidden = false;
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
      if (!fb.hidden) return;
      const raw = inputEl.value.trim();
      let isCorrect;
      if (isText) {
        isCorrect = matchesTextAnswer(raw, answer);
      } else {
        const val = parseFloat(raw);
        isCorrect = !isNaN(val) && Math.abs(val - answer) <= tolerance;
      }
      inputEl.disabled = true;
      fb.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
      fb.innerHTML = isCorrect
        ? '✓ Correct!'
        : `✗ Incorrect — answer: ${normalizeNotationHtml(formatAnswerForFeedback(answer))}`;
      fb.hidden = false;
      document.getElementById(`sol-${probId}`).hidden = false;
    }
  });

  container.dataset.premiumBound = 'true';
}
