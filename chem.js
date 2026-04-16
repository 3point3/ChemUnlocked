/* ============================================================
   chem.js — ChemUnlocked Shared Behaviour
   Injects fonts, header, footer, nav highlighting, page classes,
   and a reusable tab switcher.
   ============================================================ */

(function () {
  function injectFonts() {
    if (document.getElementById('cu-fonts')) return;

    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';

    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = 'anonymous';

    const fontLink = document.createElement('link');
    fontLink.id = 'cu-fonts';
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap';

    document.head.appendChild(preconnect1);
    document.head.appendChild(preconnect2);
    document.head.appendChild(fontLink);
  }

  function injectHeader() {
    fetch('header.html')
      .then(r => r.text())
      .then(html => {
        const container = document.querySelector('.container');
        if (!container) return;
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        const header = wrapper.firstElementChild;
        if (!header) return;
        document.body.insertBefore(header, container);
        highlightActiveNav();
      })
      .catch(() => {});
  }

  function injectFooter() {
    fetch('footer.html')
      .then(r => r.text())
      .then(html => {
        const container = document.querySelector('.container');
        if (!container) return;
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        const footer = wrapper.firstElementChild;
        if (!footer) return;
        container.appendChild(footer);
      })
      .catch(() => {});
  }

  function highlightActiveNav() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.site-nav a').forEach(link => {
      const linkPage = (link.getAttribute('href') || '').split('#')[0];
      if (linkPage === current) {
        link.classList.add('active');
      }
    });
  }

  function addBodyPageClasses() {
    const raw = window.location.pathname.split('/').pop() || 'index.html';
    const base = raw.replace(/\.html?$/i, '');
    const safe = base
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    if (safe) {
      document.body.classList.add(`page-${safe}`);
      document.body.setAttribute('data-page', safe);
    }

    if (/^\d+[-_]/.test(base) || /^unit[-_]/i.test(base)) {
      document.body.classList.add('page-unit');
    }
  }

  window.showTab = function (id, btn) {
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
      section.setAttribute('aria-hidden', 'true');
    });

    document.querySelectorAll('.tab-btn').forEach(button => {
      button.classList.remove('active');
      button.setAttribute('aria-selected', 'false');
    });

    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.classList.add('active');
      targetSection.setAttribute('aria-hidden', 'false');
    }

    if (btn) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      return;
    }

    const fallbackBtn = document.querySelector(`.tab-btn[data-tab="${id}"]`);
    if (fallbackBtn) {
      fallbackBtn.classList.add('active');
      fallbackBtn.setAttribute('aria-selected', 'true');
    }
  };

  function wireTabButtons() {
    document.querySelectorAll('.tab-btn[data-tab]').forEach(btn => {
      btn.addEventListener('click', function () {
        const id = this.getAttribute('data-tab');
        if (id) window.showTab(id, this);
      });
    });
  }

  function init() {
    injectFonts();
    addBodyPageClasses();
    injectHeader();
    injectFooter();
    wireTabButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();