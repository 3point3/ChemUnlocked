(function () {
  const cfg = window.practiceTeaserConfig || {};

  const defaults = {
    samplesPerUnit: 3,
    stripeCheckoutPath: '/.netlify/functions/create-checkout-session',
    stripePortalPath: '/.netlify/functions/create-customer-portal-session',
    loginPath: '/login.html',
    subscribeButtonText: 'Unlock Full Practice',
    portalButtonText: 'Manage Subscription',
    subtitle:
      'Try a few free sample problems below. Unlock full randomized practice sets, instant feedback, and detailed explanations with a subscription.',
    premiumBullets: [
      'Full randomized practice sets',
      'Instant answer checking',
      'Step-by-step explanations',
      'More concept, calculation, and multi-step questions'
    ],
    lockTitle: '🔒 Unlock Full Practice',
    lockBody:
      'The full practice experience includes larger randomized sets, mixed concepts and calculations, instant feedback, and guided explanations.',
    legalNote:
      'By subscribing, you agree to the Terms of Service and Privacy Policy.'
  };

  const state = {
    accessStatus: 'unknown',
    selectedPlan: 'monthly'
  };

  const settings = Object.assign({}, defaults, cfg);

  function qs(sel, root = document) {
    return root.querySelector(sel);
  }

  function qsa(sel, root = document) {
    return Array.from(root.querySelectorAll(sel));
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function ensureSubtitle() {
    const subtitle = qs('header .subtitle');
    if (subtitle && !subtitle.textContent.trim()) {
      subtitle.textContent = settings.subtitle;
    }
  }

  function problemCard(problem, index) {
    const wrap = document.createElement('div');
    wrap.className = 'practice-problem';

    const badge = document.createElement('span');
    badge.className = 'free-badge';
    badge.textContent = 'Free Sample';
    wrap.appendChild(badge);

    const heading = document.createElement('h3');
    heading.textContent = `Sample Problem ${index + 1}`;
    wrap.appendChild(heading);

    const prompt = document.createElement('p');
    prompt.innerHTML = problem.q || '';
    wrap.appendChild(prompt);

    if (Array.isArray(problem.choices) && problem.choices.length) {
      const list = document.createElement('div');
      list.className = 'choice-list';
      problem.choices.forEach((choice, i) => {
        const item = document.createElement('div');
        item.className = 'choice';
        item.innerHTML = `<strong>${String.fromCharCode(65 + i)}.</strong> ${choice}`;
        list.appendChild(item);
      });
      wrap.appendChild(list);
    }

    const answer = document.createElement('div');
    answer.className = 'answer-box';
    answer.innerHTML = buildAnswerMarkup(problem);
    wrap.appendChild(answer);

    return wrap;
  }

  function buildAnswerMarkup(problem) {
    const parts = ['<strong>Answer:</strong> '];

    if (Array.isArray(problem.choices) && Number.isInteger(problem.correct)) {
      const label = String.fromCharCode(65 + problem.correct);
      parts.push(`${label}`);
      if (problem.choices[problem.correct]) {
        parts.push(` — ${problem.choices[problem.correct]}`);
      }
    } else if (problem.answer !== undefined && problem.answer !== null) {
      parts.push(escapeHtml(problem.answer));
      if (problem.unit) {
        parts.push(` ${escapeHtml(problem.unit)}`);
      }
    } else {
      parts.push('See explanation');
    }

    if (problem.solution) {
      parts.push('<br>');
      parts.push(problem.solution);
    }

    return parts.join('');
  }

  function createPreviewGrid() {
    const samples = Array.isArray(settings.sampleProblems)
      ? settings.sampleProblems.slice(0, settings.samplesPerUnit)
      : [];

    const grid = document.createElement('section');
    grid.className = 'practice-preview-grid';

    samples.forEach((problem, index) => {
      grid.appendChild(problemCard(problem, index));
    });

    return grid;
  }

  function createPremiumPreview() {
    const locked = document.createElement('section');
    locked.className = 'locked-zone';

    const blurred = document.createElement('div');
    blurred.className = 'locked-content';

    const placeholderProblems = Array.isArray(settings.lockedPreviewProblems)
      ? settings.lockedPreviewProblems
      : [
          'Question 4. More guided practice goes here.',
          'Question 5. Additional randomized problems appear here.',
          'Question 6. Step-by-step premium explanations appear here.'
        ];

    placeholderProblems.forEach((text, index) => {
      const box = document.createElement('div');
      box.className = 'fake-problem';
      box.innerHTML = `
        <span class="premium-badge">Premium</span>
        <h3>Premium Practice ${index + 1}</h3>
        <p>${escapeHtml(text)}</p>
      `;
      blurred.appendChild(box);
    });

    const overlay = document.createElement('div');
    overlay.className = 'lock-overlay';
    overlay.innerHTML = `
      <div class="lock-card">
        <h2>${settings.lockTitle}</h2>
        <p>${settings.lockBody}</p>
        <div class="plan-picker" role="group" aria-label="Choose subscription plan">
          <button class="plan-btn active" type="button" data-plan="monthly">Monthly</button>
          <button class="plan-btn" type="button" data-plan="yearly">Yearly</button>
        </div>
        <ul class="premium-list">
          ${settings.premiumBullets.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
        </ul>
        <div class="cta-row">
          <button class="btn" type="button" id="cuSubscribeBtn">${settings.subscribeButtonText}</button>
          <button class="btn btn-outline" type="button" id="cuPortalBtn">${settings.portalButtonText}</button>
          ${settings.learnHref ? `<a href="${settings.learnHref}" class="btn btn-outline">Review the Lesson First</a>` : ''}
        </div>
        <p class="micro-note">Monthly and yearly plans use secure Stripe Checkout.</p>
        <p class="micro-note">${settings.legalNote}</p>
      </div>
    `;

    locked.appendChild(blurred);
    locked.appendChild(overlay);
    return locked;
  }

  function renderPage() {
    const container = qs('.container');
    if (!container) return;

    const existingProblemContainer = qs('#problemContainer', container);
    const existingGenerateBtn = qs('#generateBtn', container);
    const existingFilters = qs('#filterPanel', container);
    const existingScoreBar = qs('#scoreBar', container);
    const existingSubmissionBox = qs('#submissionBox', container);

    [existingFilters, existingScoreBar, existingGenerateBtn, existingProblemContainer, existingSubmissionBox]
      .filter(Boolean)
      .forEach(el => el.remove());

    const marker = qs('.scroll-hint', container);
    const mount = document.createElement('div');
    mount.className = 'practice-teaser-wrap';
    mount.appendChild(createPreviewGrid());
    mount.appendChild(createPremiumPreview());

    if (marker) {
      container.insertBefore(mount, marker);
    } else {
      container.appendChild(mount);
    }
  }

  function bindPlanButtons() {
    qsa('.plan-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedPlan = btn.dataset.plan || 'monthly';
        qsa('.plan-btn').forEach(node => node.classList.toggle('active', node === btn));
      });
    });
  }

  async function postJson(path, payload) {
    const response = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload || {})
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error || 'Request failed.');
    }
    return data;
  }

  async function createCheckoutSession() {
    const payload = {
      plan: state.selectedPlan,
      unit: settings.unitCode,
      successUrl: settings.successUrl || window.location.href,
      cancelUrl: settings.cancelUrl || window.location.href
    };

    const data = await postJson(settings.stripeCheckoutPath, payload);
    if (!data.url) throw new Error('Missing checkout URL.');
    window.location.href = data.url;
  }

  async function openCustomerPortal() {
    const payload = {
      returnUrl: settings.portalReturnUrl || window.location.href
    };

    const data = await postJson(settings.stripePortalPath, payload);
    if (!data.url) throw new Error('Missing portal URL.');
    window.location.href = data.url;
  }

  function bindActionButtons() {
    const subscribe = qs('#cuSubscribeBtn');
    const portal = qs('#cuPortalBtn');

    if (subscribe) {
      subscribe.addEventListener('click', async () => {
        subscribe.disabled = true;
        try {
          await createCheckoutSession();
        } catch (err) {
          alert(err.message || 'Could not start checkout.');
          subscribe.disabled = false;
        }
      });
    }

    if (portal) {
      portal.addEventListener('click', async () => {
        portal.disabled = true;
        try {
          await openCustomerPortal();
        } catch (err) {
          alert(err.message || 'Could not open customer portal.');
          portal.disabled = false;
        }
      });
    }
  }

  function init() {
    ensureSubtitle();
    renderPage();
    bindPlanButtons();
    bindActionButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
