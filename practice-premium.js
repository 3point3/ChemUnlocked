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
                  font-family:inherit">
        <p style="margin:0 0 1.25rem;font-size:0.97rem;color:#991b1b;
                  line-height:1.55;font-weight:600">${message}</p>
        <div style="display:flex;justify-content:flex-end">
          <button id="cu-error-dismiss"
            style="padding:0.7rem 1.2rem;background:#f1f5f9;color:#334155;
                   border:none;border-radius:10px;font:inherit;
                   font-size:0.93rem;font-weight:600;cursor:pointer">OK</button>
        </div>
      </div>`;

    document.body.appendChild(overlay);

    const dismiss = () => overlay.remove();
    overlay.querySelector('#cu-error-dismiss').addEventListener('click', dismiss);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) dismiss(); });
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
                    font-family:inherit">
          <h3 style="margin:0 0 0.4rem;font-size:1.15rem;color:#0f172a;
                     letter-spacing:-0.02em">Enter your email to subscribe</h3>
          <p style="margin:0 0 1.25rem;font-size:0.92rem;color:#64748b;line-height:1.55">
            You'll be redirected to a secure Stripe checkout page.</p>
          <input id="cu-email-input" type="email" placeholder="you@example.com"
            autocomplete="email" style="width:100%;padding:0.8rem 0.9rem;
            border:1px solid #dbe4ee;border-radius:12px;font:inherit;
            font-size:0.97rem;box-sizing:border-box;margin-bottom:1rem;
            outline:none;transition:border-color 0.2s"
            onfocus="this.style.borderColor='#93c5fd'"
            onblur="this.style.borderColor='#dbe4ee'">
          <div style="display:flex;gap:0.6rem;justify-content:flex-end">
            <button id="cu-email-cancel"
              style="padding:0.7rem 1rem;border:1px solid #dbe4ee;background:#fff;
                     border-radius:10px;font:inherit;font-size:0.93rem;
                     cursor:pointer;color:#334155">Cancel</button>
            <button id="cu-email-submit"
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

      function done(value) {
        overlay.remove();
        resolve(value || '');
      }

      submit.addEventListener('click', () => done(input.value.trim()));
      cancel.addEventListener('click', () => done(''));
      input.addEventListener('keydown', (e) => { if (e.key === 'Enter') done(input.value.trim()); });
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
