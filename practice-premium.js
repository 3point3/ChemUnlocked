(function () {
  function getStoredEmail() {
    return localStorage.getItem('cu_email') || '';
  }

  function showError(message) {
    const existing = document.getElementById('cu-error-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'cu-error-modal';
    overlay.style.cssText = [
      'position:fixed', 'inset:0', 'background:rgba(15,23,42,0.45)',
      'z-index:9999', 'display:flex', 'align-items:center',
      'justify-content:center', 'padding:1rem',
    ].join(';');

    overlay.innerHTML = `
      <div style="background:#fff;border-radius:18px;padding:2rem 1.75rem;
                  width:min(420px,100%);box-shadow:0 20px 60px rgba(15,23,42,0.2);
                  font-family:inherit"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cu-error-title"
          aria-describedby="cu-error-message">
        <h3 id="cu-error-title" style="margin:0 0 0.45rem;font-size:1.08rem;color:#0f172a">Something went wrong</h3>
        <p id="cu-error-message" style="margin:0 0 1.25rem;font-size:0.97rem;color:#991b1b;
                  line-height:1.55;font-weight:600"></p>
        <div style="display:flex;justify-content:flex-end">
          <button id="cu-error-dismiss"
            type="button"
            style="padding:0.7rem 1.2rem;background:#f1f5f9;color:#334155;
                   border:none;border-radius:10px;font:inherit;
                   font-size:0.93rem;font-weight:600;cursor:pointer">OK</button>
        </div>
      </div>`;

    document.body.appendChild(overlay);
    const messageEl = overlay.querySelector('#cu-error-message');
    if (messageEl) messageEl.textContent = message;

    const dismiss = () => overlay.remove();
    const dismissBtn = overlay.querySelector('#cu-error-dismiss');
    if (dismissBtn) dismissBtn.addEventListener('click', dismiss);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) dismiss(); });
    overlay.addEventListener('keydown', (e) => { if (e.key === 'Escape') dismiss(); });
    if (dismissBtn) dismissBtn.focus();
  }

  async function safeJson(res) {
    try {
      return await res.json();
    } catch {
      return {};
    }
  }

  /* ── Inline email modal — replaces browser prompt() ── */
  function requestEmailFromUser() {
    return new Promise((resolve) => {
      const existing = document.getElementById('cu-email-modal');
      if (existing) existing.remove();

      const overlay = document.createElement('div');
      overlay.id = 'cu-email-modal';
      overlay.style.cssText = [
        'position:fixed', 'inset:0', 'background:rgba(15,23,42,0.45)',
        'z-index:9999', 'display:flex', 'align-items:center',
        'justify-content:center', 'padding:1rem',
      ].join(';');

      overlay.innerHTML = `
        <div style="background:#fff;border-radius:18px;padding:2rem 1.75rem;
                    width:min(420px,100%);box-shadow:0 20px 60px rgba(15,23,42,0.2);
                    font-family:inherit"
             role="dialog"
             aria-modal="true"
             aria-labelledby="cu-email-title"
             aria-describedby="cu-email-desc">
          <h3 id="cu-email-title" style="margin:0 0 0.4rem;font-size:1.15rem;color:#0f172a;
                     letter-spacing:-0.02em">Enter your email to subscribe</h3>
          <p id="cu-email-desc" style="margin:0 0 1.25rem;font-size:0.92rem;color:#64748b;line-height:1.55">
            You'll be redirected to a secure Stripe checkout page.</p>
          <label for="cu-email-input" style="display:block;margin:0 0 0.45rem;font-size:0.9rem;color:#334155;font-weight:600">Email address</label>
          <input id="cu-email-input" type="email" placeholder="you@example.com"
            autocomplete="email" style="width:100%;padding:0.8rem 0.9rem;
            border:1px solid #dbe4ee;border-radius:12px;font:inherit;
            font-size:0.97rem;box-sizing:border-box;margin-bottom:1rem;
            outline:none;transition:border-color 0.2s">
          <div style="display:flex;gap:0.6rem;justify-content:flex-end">
            <button id="cu-email-cancel"
              type="button"
              style="padding:0.7rem 1rem;border:1px solid #dbe4ee;background:#fff;
                     border-radius:10px;font:inherit;font-size:0.93rem;
                     cursor:pointer;color:#334155">Cancel</button>
            <button id="cu-email-submit"
              type="button"
              style="padding:0.7rem 1.2rem;background:linear-gradient(180deg,#2563eb,#1d4ed8);
                     color:#fff;border:none;border-radius:10px;font:inherit;
                     font-size:0.93rem;font-weight:600;cursor:pointer">Continue →</button>
          </div>
        </div>`;

      document.body.appendChild(overlay);

      const input  = overlay.querySelector('#cu-email-input');
      const submit = overlay.querySelector('#cu-email-submit');
      const cancel = overlay.querySelector('#cu-email-cancel');
      input.focus();
      input.addEventListener('focus', () => { input.style.borderColor = '#93c5fd'; });
      input.addEventListener('blur', () => { input.style.borderColor = '#dbe4ee'; });

      function done(value) {
        overlay.remove();
        resolve(value || '');
      }

      submit.addEventListener('click', () => done(input.value.trim()));
      cancel.addEventListener('click', () => done(''));
      input.addEventListener('keydown', (e) => { if (e.key === 'Enter') done(input.value.trim()); });
      overlay.addEventListener('keydown', (e) => { if (e.key === 'Escape') done(''); });
      overlay.addEventListener('click', (e) => { if (e.target === overlay) done(''); });
    });
  }

  async function startCheckout(plan, unit) {
    const email = await requestEmailFromUser();
    if (!email) return;

    const res = await fetch('/.netlify/functions/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan, unit, email })
    });

    const data = await safeJson(res);
    if (!res.ok) {
      showError(data.error || 'Could not start checkout. Please try again.');
      return;
    }

    if (data.url) {
      window.location.href = data.url;
    }
  }

  async function openCustomerPortal() {
    const email = getStoredEmail();
    if (!email) {
      showError('No subscription email is saved on this browser. Subscribe first, or open this page on the same browser you used to subscribe.');
      return;
    }

    const res = await fetch('/.netlify/functions/create-customer-portal-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    const data = await safeJson(res);
    if (!res.ok) {
      showError(data.error || 'Could not open billing portal. Please try again.');
      return;
    }

    if (data.url) {
      window.location.href = data.url;
    }
  }

  async function loadPremiumSet(unit, filter = 'all', count = 3) {
    const token = localStorage.getItem('cu_token') || '';
    const res = await fetch(
      `/.netlify/functions/get-premium-problem-set?unit=${encodeURIComponent(unit)}&filter=${encodeURIComponent(filter)}&count=${encodeURIComponent(count)}`,
      {
        headers: token ? { 'x-access-token': token } : {}
      }
    );

    const data = await safeJson(res);
    if (!res.ok) {
      throw new Error(data.error || 'Could not load premium problem set.');
    }

    return data;
  }

  window.getStoredEmail = getStoredEmail;
  window.startCheckout = startCheckout;
  window.openCustomerPortal = openCustomerPortal;
  window.loadPremiumSet = loadPremiumSet;
})();
