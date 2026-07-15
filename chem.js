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
    const header = document.querySelector('.site-header');
    if (!header) return;
    setupHeaderMenu(header);
    highlightActiveNav();
    updateStickyOffset();
  }

  function setupHeaderMenu(header) {
    if (!header) return;

    const toggle = header.querySelector('.site-menu-toggle');
    const nav = header.querySelector('.site-nav');
    if (!toggle || !nav || header.dataset.menuReady === 'true') return;

    const mobileQuery = window.matchMedia('(max-width: 980px)');

    function setMenuState(isOpen) {
      header.classList.toggle('menu-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Close main menu' : 'Open main menu');
      updateStickyOffset();
    }

    function closeMenu() {
      setMenuState(false);
    }

    toggle.addEventListener('click', () => {
      setMenuState(!header.classList.contains('menu-open'));
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', event => {
      if (!mobileQuery.matches || !header.classList.contains('menu-open')) return;
      if (!header.contains(event.target)) closeMenu();
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && header.classList.contains('menu-open')) {
        closeMenu();
        toggle.focus();
      }
    });

    const handleViewportChange = event => {
      if (!event.matches) closeMenu();
    };

    if (typeof mobileQuery.addEventListener === 'function') {
      mobileQuery.addEventListener('change', handleViewportChange);
    } else if (typeof mobileQuery.addListener === 'function') {
      mobileQuery.addListener(handleViewportChange);
    }

    header.dataset.menuReady = 'true';
  }

  function getHeaderMenuExtraHeight(header) {
    if (!header || !header.classList.contains('menu-open') || !window.matchMedia('(max-width: 980px)').matches) {
      return 0;
    }

    const nav = header.querySelector('.site-nav');
    if (!nav) return 0;

    const headerRect = header.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    return Math.max(0, Math.ceil(navRect.bottom - headerRect.bottom));
  }

  function highlightActiveNav() {
    const current = window.location.pathname.replace(/\/+$/, '') || '/';
    document.querySelectorAll('.site-nav a').forEach(link => {
      const rawHref = (link.getAttribute('href') || '').split('#')[0] || '/';
      const linkPage = rawHref === '/' ? '/' : rawHref.replace(/\/+$/, '');
      if (linkPage === current) {
        link.classList.add('active');
      }
    });
  }

  function addBodyPageClasses() {
    const raw = window.location.pathname.split('/').pop() || 'index';
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

  function getStickyTopOffset() {
    const header = document.querySelector('.site-header');
    const tabs = document.querySelector('.nav-tabs');
    const headerHeight = header ? header.getBoundingClientRect().height + getHeaderMenuExtraHeight(header) : 0;
    const tabsHeight = tabs ? tabs.getBoundingClientRect().height : 0;
    return Math.ceil(headerHeight + tabsHeight + 18);
  }

  function updateStickyOffset() {
    const header = document.querySelector('.site-header');
    const headerHeight = header ? Math.ceil(header.getBoundingClientRect().height) : 72;
    const menuExtraHeight = getHeaderMenuExtraHeight(header);
    document.documentElement.style.setProperty('--site-menu-open-height', `${menuExtraHeight}px`);
    document.documentElement.style.setProperty('--site-header-height', `${headerHeight + menuExtraHeight}px`);
    document.documentElement.style.setProperty('--sticky-offset', `${getStickyTopOffset()}px`);
  }

  const COURSE_UNITS = [
    { unit: '01', title: 'Intro to Chemistry & Lab Safety', learn: '/01_learn_intro_to_chemistry_and_lab_safety', practice: '/01_practice' },
    { unit: '02', title: 'Matter', learn: '/02_learn_chemistry_matter', practice: '/02_practice' },
    { unit: '03', title: 'Atomic Structure', learn: '/03_learn_atomic_structure', practice: '/03_practice' },
    { unit: '04', title: 'Electron Configuration', learn: '/04_learn_electron_configuration', practice: '/04_practice' },
    { unit: '05', title: 'Periodic Table & Trends', learn: '/05_learn_periodic_table_and_trends', practice: '/05_practice' },
    { unit: '06', title: 'Nomenclature', learn: '/06_learn_chemistry_nomenclature', practice: '/06_practice' },
    { unit: '07', title: 'Moles', learn: '/07_learn_chemistry_moles', practice: '/07_practice' },
    { unit: '08', title: 'Chemical Reactions', learn: '/08_learn_chemical_reactions', practice: '/08_practice' },
    { unit: '09', title: 'Stoichiometry', learn: '/09_learn_chemistry_stoichiometry', practice: '/09_practice' },
    { unit: '10', title: 'Bonding', learn: '/10_learn_chemistry_bonding', practice: '/10_practice' },
    { unit: '11', title: 'Energy & Thermochemistry', learn: '/11_learn_chemistry_energy_thermochemistry', practice: '/11_practice' },
    { unit: '12', title: 'Gas Laws', learn: '/12_learn_chemistry_gas', practice: '/12_practice' },
    { unit: '13', title: 'Solutions', learn: '/13_learn_chemistry_solutions', practice: '/13_practice' },
    { unit: '14', title: 'Equilibrium', learn: '/14_learn_chemistry_equilibrium', practice: '/14_practice' },
    { unit: '15', title: 'Acids & Bases', learn: '/15_learn_chemistry_acid_base', practice: '/15_practice' }
  ];

  const UNIT_PAGES = COURSE_UNITS.reduce((pages, unit) => {
    pages[unit.unit] = unit;
    return pages;
  }, {});

  function getCurrentPageName() {
    return window.location.pathname.split('/').pop() || 'index';
  }

  function getUnitFromPage() {
    const current = getCurrentPageName();
    const match = current.match(/^(\d{2})_(learn_[a-z_]+|practice)$/i);
    return match ? { unit: match[1], isPractice: /^practice$/i.test(match[2]) } : null;
  }

  function scrollToTabPanel(section) {
    if (!section) return;

    window.requestAnimationFrame(() => {
      updateStickyOffset();
      const targetTop = section.getBoundingClientRect().top + window.pageYOffset - getStickyTopOffset();
      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: 'smooth'
      });
    });
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
      btn.setAttribute('tabindex', '0');
      document.querySelectorAll('.tab-btn[data-tab]').forEach(otherBtn => {
        if (otherBtn !== btn) otherBtn.setAttribute('tabindex', '-1');
      });
      if (targetSection) {
        history.replaceState(null, '', `#${id}`);
        scrollToTabPanel(targetSection);
      }
      return;
    }

    const fallbackBtn = document.querySelector(`.tab-btn[data-tab="${id}"]`);
    if (fallbackBtn) {
      fallbackBtn.classList.add('active');
      fallbackBtn.setAttribute('aria-selected', 'true');
      fallbackBtn.setAttribute('tabindex', '0');
      document.querySelectorAll('.tab-btn[data-tab]').forEach(otherBtn => {
        if (otherBtn !== fallbackBtn) otherBtn.setAttribute('tabindex', '-1');
      });
    }
  };

  function normalizeTabs() {
    const tablist = document.querySelector('.nav-tabs');
    if (!tablist) return;

    tablist.setAttribute('role', 'tablist');
    if (!tablist.hasAttribute('aria-label')) {
      const unitInfo = getUnitFromPage();
      tablist.setAttribute('aria-label', unitInfo ? `Unit ${unitInfo.unit} content sections` : 'Content sections');
    }

    document.querySelectorAll('.tab-btn[data-tab]').forEach(btn => {
      const tabId = btn.getAttribute('data-tab');
      const panel = document.getElementById(tabId);
      if (!tabId || !panel) return;

      if (!btn.id || !btn.id.startsWith('tab-')) btn.id = `tab-${tabId}`;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-controls', tabId);
      btn.setAttribute('aria-selected', btn.classList.contains('active') ? 'true' : 'false');
      btn.setAttribute('tabindex', btn.classList.contains('active') ? '0' : '-1');

      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', btn.id);
      panel.setAttribute('aria-hidden', panel.classList.contains('active') ? 'false' : 'true');
    });
  }

  function wireTabButtons() {
    const buttons = Array.from(document.querySelectorAll('.tab-btn[data-tab]'));
    if (!buttons.length) return;

    buttons.forEach(btn => {
      if (btn.dataset.cuTabBound === 'true') return;

      btn.addEventListener('click', function () {
        const id = this.getAttribute('data-tab');
        if (id) window.showTab(id, this);
      });

      btn.addEventListener('keydown', function (event) {
        const currentIndex = buttons.indexOf(this);
        if (currentIndex === -1) return;

        let nextIndex = -1;
        if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % buttons.length;
        if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = buttons.length - 1;

        if (nextIndex !== -1) {
          event.preventDefault();
          buttons[nextIndex].focus();
          return;
        }

        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          const id = this.getAttribute('data-tab');
          if (id) window.showTab(id, this);
        }
      });

      btn.dataset.cuTabBound = 'true';
    });
  }

  function initTabFromHash() {
    const tablist = document.querySelector('.nav-tabs');
    if (!tablist || !window.location.hash) return;

    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    const btn = document.querySelector(`.tab-btn[data-tab="${id}"]`);
    const panel = document.getElementById(id);
    if (!btn || !panel || !panel.classList.contains('section')) return;

    window.showTab(id, btn);
  }

  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 64);
  }

  function getDirectCardTitle(card) {
    if (!card) return null;
    return Array.from(card.children).find(child => child.classList && child.classList.contains('card-title')) || null;
  }

  function buildConceptJumpLabel(numText, titleText) {
    const compactTitle = (titleText || '')
      .replace(/^start here:\s*/i, '')
      .replace(/\s+/g, ' ')
      .trim();

    if (!numText) return compactTitle;
    if (!compactTitle) return numText;
    return `${numText} ${compactTitle}`;
  }

  function addConceptJumpNav() {
    if (document.querySelector('.concept-jump-nav, .concept-jump-disclosure')) return;
    const concepts = document.getElementById('concepts');
    const tabs = document.querySelector('.nav-tabs');
    if (!concepts || !tabs) return;

    const cards = Array.from(concepts.children).filter(child => child.classList && child.classList.contains('card'));
    const sections = cards
      .map((card, index) => {
        const heading = getDirectCardTitle(card);
        if (!heading) return null;

        const numSpan = heading.querySelector('.num');
        const numText = numSpan ? numSpan.textContent.replace(/\s+/g, ' ').trim() : '';
        if (!/^\d+\.\d+[A-Za-z]?$/.test(numText)) return null;

        const fullTitle = heading.textContent.replace(/\s+/g, ' ').trim();
        const titleWithoutNum = numSpan
          ? fullTitle.replace(numSpan.textContent, '').replace(/\s+/g, ' ').trim()
          : fullTitle;

        return {
          card,
          index,
          numText,
          titleWithoutNum,
          label: buildConceptJumpLabel(numText, titleWithoutNum)
        };
      })
      .filter(Boolean);

    if (sections.length < 4) return;

    const details = document.createElement('details');
    details.className = 'concept-jump-disclosure';

    const summary = document.createElement('summary');
    summary.className = 'concept-jump-summary';
    summary.innerHTML = '<span class="concept-jump-summary-text">Jump to a Concept</span>';
    details.appendChild(summary);

    const nav = document.createElement('nav');
    nav.className = 'concept-jump-nav';
    nav.setAttribute('aria-label', 'Jump to unit concepts');

    const usedIds = new Set();
    sections.forEach(({ card, index, numText, titleWithoutNum, label }) => {
      if (!card.id) {
        let id = slugify(`${numText} ${titleWithoutNum}`) || `concept-${index + 1}`;
        if (!/^concept-/.test(id)) id = `concept-${id}`;
        let uniqueId = id;
        let suffix = 2;
        while (usedIds.has(uniqueId) || document.getElementById(uniqueId)) {
          uniqueId = `${id}-${suffix}`;
          suffix += 1;
        }
        card.id = uniqueId;
      }
      usedIds.add(card.id);

      const link = document.createElement('a');
      link.href = `#${card.id}`;
      link.textContent = label;
      nav.appendChild(link);
    });

    details.appendChild(nav);

    const firstCard = concepts.querySelector('.card');
    if (firstCard) {
      firstCard.insertAdjacentElement('beforebegin', details);
      return;
    }

    tabs.insertAdjacentElement('afterend', details);
  }

  function makeUnitNavLink(kicker, data, href, fallbackTitle) {
    const link = document.createElement(href ? 'a' : 'span');
    link.className = `unit-bottom-link${href ? '' : ' is-disabled'}`;
    if (href) link.href = href;

    const kickerEl = document.createElement('span');
    kickerEl.className = 'unit-bottom-kicker';
    kickerEl.textContent = kicker;

    const titleEl = document.createElement('span');
    titleEl.className = 'unit-bottom-title';
    titleEl.textContent = data ? `Unit ${data.unit} · ${data.title}` : fallbackTitle;

    link.append(kickerEl, titleEl);
    return link;
  }

  function addUnitBottomNav() {
    if (document.querySelector('.unit-bottom-nav')) return;
    const unitInfo = getUnitFromPage();
    const container = document.querySelector('.container');
    if (!unitInfo || !container || !UNIT_PAGES[unitInfo.unit]) return;

    const units = COURSE_UNITS.map(unit => unit.unit);
    const index = units.indexOf(unitInfo.unit);
    const prevUnit = units[index - 1];
    const nextUnit = units[index + 1];
    const current = UNIT_PAGES[unitInfo.unit];

    const nav = document.createElement('nav');
    nav.className = 'unit-bottom-nav';
    nav.setAttribute('aria-label', `Unit ${unitInfo.unit} navigation`);

    nav.appendChild(makeUnitNavLink('Previous', prevUnit ? { unit: prevUnit, ...UNIT_PAGES[prevUnit] } : null, prevUnit ? UNIT_PAGES[prevUnit].learn : '', 'Start of course'));

    if (unitInfo.isPractice) {
      nav.appendChild(makeUnitNavLink('Review Notes', { unit: unitInfo.unit, title: current.title }, current.learn, 'Review Notes'));
    } else if (current.practice) {
      nav.appendChild(makeUnitNavLink('Practice', { unit: unitInfo.unit, title: `${current.title} Practice` }, current.practice, 'Practice'));
    } else {
      nav.appendChild(makeUnitNavLink('Practice', { unit: unitInfo.unit, title: 'All Practice Banks' }, '/practice', 'All Practice Banks'));
    }

    nav.appendChild(makeUnitNavLink('Next', nextUnit ? { unit: nextUnit, ...UNIT_PAGES[nextUnit] } : null, nextUnit ? UNIT_PAGES[nextUnit].learn : '', 'End of course'));

    const scrollHint = container.querySelector('.scroll-hint');
    if (scrollHint) {
      scrollHint.insertAdjacentElement('beforebegin', nav);
    } else {
      container.appendChild(nav);
    }
  }

  function addGeneratedStructuredData() {
    if (document.getElementById('cu-generated-unit-schema')) return;
    const unitInfo = getUnitFromPage();
    if (!unitInfo || !UNIT_PAGES[unitInfo.unit]) return;

    const canonical = document.querySelector('link[rel="canonical"]');
    const description = document.querySelector('meta[name="description"]');
    const url = canonical ? canonical.href : window.location.href.split('#')[0];
    const title = document.title.replace(/\s*\|\s*ChemUnlocked\s*$/i, '');
    const unit = UNIT_PAGES[unitInfo.unit];
    const resourceType = unitInfo.isPractice ? 'Practice Problem Set' : 'Lesson';

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LearningResource',
          name: title,
          description: description ? description.content : unit.title,
          learningResourceType: resourceType,
          educationalLevel: 'Introductory',
          isPartOf: {
            '@type': 'Course',
            name: 'ChemUnlocked General Chemistry'
          },
          provider: {
            '@type': 'Organization',
            name: 'ChemUnlocked'
          },
          url
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'ChemUnlocked',
              item: 'https://chemunlocked.com/'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: `Unit ${unitInfo.unit} — ${unit.title}`,
              item: `https://chemunlocked.com/${unit.learn}`
            },
            ...(unitInfo.isPractice ? [{
              '@type': 'ListItem',
              position: 3,
              name: 'Practice',
              item: url
            }] : [])
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.id = 'cu-generated-unit-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  function wireAnchorOffsets() {
    updateStickyOffset();
    window.addEventListener('resize', updateStickyOffset, { passive: true });
    window.addEventListener('orientationchange', updateStickyOffset);
    window.addEventListener('load', updateStickyOffset);

    if (document.fonts) {
      document.fonts.ready.then(updateStickyOffset).catch(() => {});

      if (typeof document.fonts.addEventListener === 'function') {
        document.fonts.addEventListener('loadingdone', updateStickyOffset);
        document.fonts.addEventListener('loadingerror', updateStickyOffset);
      }
    }

    document.addEventListener('click', event => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return;

      event.preventDefault();
      updateStickyOffset();
      const targetTop = target.getBoundingClientRect().top + window.pageYOffset - getStickyTopOffset();
      history.pushState(null, '', hash);
      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: 'smooth'
      });

      if (link.classList.contains('skip-link')) {
        const hadTabIndex = target.hasAttribute('tabindex');
        if (!hadTabIndex) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        if (!hadTabIndex) {
          target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
        }
      }
    });
  }

  function setupJumpToTopButton() {
    if (document.querySelector('.jump-top-btn')) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'jump-top-btn';
    button.setAttribute('aria-label', 'Jump to top');
    button.setAttribute('title', 'Jump to top');
    button.textContent = '↑';
    document.body.appendChild(button);

    let rafId = 0;

    function getRevealThreshold() {
      return Math.max(720, Math.round(window.innerHeight * 1.2));
    }

    function updateVisibility() {
      rafId = 0;
      const canScrollFar = document.documentElement.scrollHeight - window.innerHeight > getRevealThreshold() * 0.7;
      const shouldShow = canScrollFar && window.scrollY >= getRevealThreshold();
      button.classList.toggle('is-visible', shouldShow);
      button.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
    }

    function queueVisibilityUpdate() {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateVisibility);
    }

    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    window.addEventListener('scroll', queueVisibilityUpdate, { passive: true });
    window.addEventListener('resize', queueVisibilityUpdate, { passive: true });
    window.addEventListener('orientationchange', queueVisibilityUpdate);
    window.addEventListener('load', queueVisibilityUpdate);

    queueVisibilityUpdate();
  }

  function reportWebVital(metric) {
    if (!metric || !metric.name || typeof metric.value !== 'number') return;

    const payload = {
      name: metric.name,
      value: Number(metric.value.toFixed(2)),
      rating: metric.rating,
      id: metric.id,
      path: window.location.pathname,
      navType: performance.getEntriesByType('navigation')[0]?.type || 'navigate',
      ts: Date.now()
    };

    const body = JSON.stringify(payload);
    const endpoint = '/.netlify/functions/report-web-vitals';

    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: 'application/json' });
      navigator.sendBeacon(endpoint, blob);
      return;
    }

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true
    }).catch(() => {});
  }

  function shouldSampleWebVitals() {
    const params = new URLSearchParams(window.location.search || '');
    if (params.get('cwv') === '1') return true;

    const configuredRate = Number(window.CU_WEB_VITALS_SAMPLE_RATE);
    const sampleRate = Number.isFinite(configuredRate) && configuredRate >= 0 && configuredRate <= 1
      ? configuredRate
      : 0.3;

    const key = 'cu-web-vitals-sampled';
    try {
      const existing = sessionStorage.getItem(key);
      if (existing === '1') return true;
      if (existing === '0') return false;

      const sampled = Math.random() < sampleRate;
      sessionStorage.setItem(key, sampled ? '1' : '0');
      return sampled;
    } catch {
      return Math.random() < sampleRate;
    }
  }

  function setupWebVitalsReporting() {
    if (window.__cuWebVitalsReady) return;
    window.__cuWebVitalsReady = true;

    const supportsObserver = typeof PerformanceObserver === 'function';
    if (!supportsObserver) return;
    if (!shouldSampleWebVitals()) return;

    const sessionId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    const metrics = {
      CLS: { name: 'CLS', value: 0, id: `cls-${sessionId}`, rating: 'good' },
      LCP: { name: 'LCP', value: 0, id: `lcp-${sessionId}`, rating: 'good' },
      INP: { name: 'INP', value: 0, id: `inp-${sessionId}`, rating: 'good' }
    };

    function rate(name, value) {
      if (name === 'LCP') return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
      if (name === 'CLS') return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
      if (name === 'INP') return value <= 200 ? 'good' : value <= 500 ? 'needs-improvement' : 'poor';
      return 'good';
    }

    try {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const last = entries[entries.length - 1];
        if (!last) return;
        metrics.LCP.value = last.startTime;
        metrics.LCP.rating = rate('LCP', metrics.LCP.value);
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch {}

    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach((entry) => {
          if (entry.hadRecentInput) return;
          clsValue += entry.value;
        });
        metrics.CLS.value = clsValue;
        metrics.CLS.rating = rate('CLS', metrics.CLS.value);
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch {}

    try {
      const inpObserver = new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach((entry) => {
          if (entry.interactionId && entry.duration > metrics.INP.value) {
            metrics.INP.value = entry.duration;
            metrics.INP.rating = rate('INP', metrics.INP.value);
          }
        });
      });
      inpObserver.observe({ type: 'event', buffered: true, durationThreshold: 40 });
    } catch {}

    let sent = false;
    function flushWebVitals() {
      if (sent) return;
      sent = true;
      Object.values(metrics).forEach((metric) => {
        if (metric.value > 0) reportWebVital(metric);
      });
    }

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') flushWebVitals();
    });
    window.addEventListener('pagehide', flushWebVitals);
  }

  function init() {
    setupWebVitalsReporting();
    injectFonts();
    addBodyPageClasses();
    injectHeader();
    wireAnchorOffsets();
    setupJumpToTopButton();

    if (document.querySelector('.nav-tabs')) {
      normalizeTabs();
      wireTabButtons();
      initTabFromHash();
    }

    if (document.getElementById('concepts') && document.querySelector('.nav-tabs')) {
      addConceptJumpNav();
    }

    if (getUnitFromPage()) {
      addUnitBottomNav();
      addGeneratedStructuredData();
    }

    if (document.querySelector('.fl-chain')) {
      solutionRenderer.enhanceExisting();
    }

    wrapTables();
    wireHorizontalOverflowHints();
  }

  function wrapTables() {
    document.querySelectorAll('table').forEach(function (table) {
      if (table.parentElement.classList.contains('table-scroll-wrap')) return;

      // Pull <caption> out before wrapping so it stays visible above the scroll area
      const caption = table.querySelector('caption');
      if (caption) {
        const captionEl = document.createElement('p');
        captionEl.className = 'table-caption';
        captionEl.textContent = caption.textContent;
        table.parentNode.insertBefore(captionEl, table);
        caption.remove();
      }

      const wrap = document.createElement('div');
      wrap.className = 'table-scroll-wrap';
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);

      bindHorizontalOverflowHint(wrap);
    });
  }

  function bindHorizontalOverflowHint(wrap, options) {
    if (!wrap || wrap.dataset.scrollHintBound === 'true') return;

    const settings = options || {};
    const hintText = settings.text || '← swipe to see more →';

    wrap.dataset.scrollHintBound = 'true';
    wrap.classList.add('overflow-scroll-wrap');

    const hint = document.createElement('p');
    hint.className = 'table-scroll-hint';
    hint.setAttribute('aria-hidden', 'true');
    hint.textContent = hintText;
    wrap.parentNode.insertBefore(hint, wrap.nextSibling);

    function updateHint() {
      const overflows = wrap.scrollWidth > wrap.clientWidth + 2;
      const canScrollMore = wrap.scrollLeft < wrap.scrollWidth - wrap.clientWidth - 4;
      wrap.classList.toggle('has-overflow', overflows && canScrollMore);
      hint.classList.toggle('visible', overflows && canScrollMore);
    }

    wrap.addEventListener('scroll', updateHint, { passive: true });
    window.addEventListener('resize', updateHint, { passive: true });
    window.addEventListener('load', updateHint, { once: true });

    if ('ResizeObserver' in window) {
      const resizeObserver = new ResizeObserver(updateHint);
      resizeObserver.observe(wrap);
    }

    requestAnimationFrame(updateHint);
    setTimeout(updateHint, 0);
  }

  function wireHorizontalOverflowHints() {
    document.querySelectorAll('.chart-scroll-wrap').forEach(function (wrap) {
      bindHorizontalOverflowHint(wrap, { text: '← swipe to see full chart →' });
    });

    document.querySelectorAll([
      '.pt-diag-outer',
      '.mini-pt-wrap',
      '.pt-tool-grid',
      '.u02-svg-scroll',
      '.reaction-visual-scroll',
      '.graph-wrapper',
      '.resonance-row--nitrate'
    ].join(', ')).forEach(function (wrap) {
      bindHorizontalOverflowHint(wrap);
    });
  }

  function createSolutionRenderer() {
    function stripHtml(html) {
      const temp = document.createElement('div');
      temp.innerHTML = html;
      return temp.textContent.replace(/\s+/g, ' ').trim();
    }

    function splitSegments(html) {
      const temp = document.createElement('div');
      temp.innerHTML = html;
      const segments = [];

      function pushSegment(segmentHtml) {
        const trimmed = segmentHtml.trim();
        if (trimmed) segments.push(trimmed);
      }

      function splitOnBreaks(innerHtml) {
        innerHtml
          .split(/<br\s*\/?>/i)
          .map(part => part.trim())
          .filter(Boolean)
          .forEach(pushSegment);
      }

      if (!temp.childNodes.length) {
        splitOnBreaks(html);
        return segments;
      }

      Array.from(temp.childNodes).forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          pushSegment(node.textContent || '');
          return;
        }

        if (node.nodeType !== Node.ELEMENT_NODE) return;

        if (node.tagName === 'TABLE') {
          pushSegment(node.outerHTML);
          return;
        }

        if (['P', 'DIV', 'LI'].includes(node.tagName)) {
          splitOnBreaks(node.innerHTML);
          return;
        }

        pushSegment(node.outerHTML);
      });

      return segments;
    }

    function normalizeFractionMarkup(html) {
      let normalized = html
        .replace(
          /<span class="chem-frac">\s*<span class="chem-frac-n">([\s\S]*?)<\/span>\s*<span class="chem-frac-bar">\/<\/span>\s*<span class="chem-frac-d">([\s\S]*?)<\/span>\s*<\/span>/g,
          '<span class="fl-frac"><span class="fl-num">$1</span><span class="fl-den">$2</span></span>'
        )
        .replace(
          /<span class="chem-frac">\s*<span class="top">([\s\S]*?)<\/span>\s*<span class="bottom">([\s\S]*?)<\/span>\s*<\/span>/g,
          '<span class="fl-frac"><span class="fl-num">$1</span><span class="fl-den">$2</span></span>'
        );

      if (/[×]/.test(stripHtml(normalized))) {
        normalized = normalized.replace(
          /\(\s*([^()<>]+?)\s*\/\s*([^()<>]+?)\s*\)/g,
          '<span class="fl-frac"><span class="fl-num">$1</span><span class="fl-den">$2</span></span>'
        );
      }

      return normalized;
    }

    function extractAnswerSplit(html) {
      const match = html.match(/^([\s\S]*)\s*([=→])\s*(<strong[\s\S]*<\/strong>[\s\S]*)$/);
      if (!match) return null;

      const chainText = stripHtml(match[1]);
      if (chainText.length < 3) return null;

      return {
        chainHtml: match[1].trim(),
        operator: match[2],
        answerHtml: match[3].trim()
      };
    }

    function highlightAnswer(html) {
      let output = html
        .replace(/<strong\b[^>]*>/g, '<span class="fl-result">')
        .replace(/<\/strong>/g, '</span>');

      if (!/class="fl-result"/.test(output)) {
        output = `<span class="fl-result">${output}</span>`;
      }

      return output;
    }

    function lineLooksLikeMath(text, html) {
      if (/<table/i.test(html)) return false;
      if (/fl-frac|chem-frac/.test(html)) return true;
      if (/[=×÷→]/.test(text)) return true;
      return /^\s*(K|Q|pH|pOH|pK|n|m|M|V|P|q|Δ|mol|mass|atoms|%)/.test(text) && /\d/.test(text);
    }

    function splitLeadingLabel(html) {
      const match = html.match(/^\s*(<strong[\s\S]*?<\/strong>)([\s\S]+)$/);
      if (!match) return null;

      const remainderText = stripHtml(match[2]);
      if (!remainderText) return null;

      return {
        labelHtml: match[1].trim(),
        remainderHtml: match[2].trim()
      };
    }

    function createSolvedDisplayElement(chainHtml, answerHtml, operator) {
      const wrapper = document.createElement('div');
      wrapper.className = 'solved-display';

      const chain = document.createElement('div');
      chain.className = 'fl-chain solved-display-chainline';
      chain.innerHTML = chainHtml;
      wrapper.appendChild(chain);

      if (answerHtml) {
        const answer = document.createElement('div');
        answer.className = 'solved-display-answerline';

        const equals = document.createElement('span');
        equals.className = 'equals-mark';
        equals.textContent = operator || '=';
        answer.appendChild(equals);

        const content = document.createElement('span');
        content.className = 'solved-display-answer';
        content.innerHTML = highlightAnswer(answerHtml);
        answer.appendChild(content);

        wrapper.appendChild(answer);
      }

      return wrapper;
    }

    function renderMathBlock(html) {
      const normalized = normalizeFractionMarkup(html);
      const split = extractAnswerSplit(normalized);

      if (split) {
        return createSolvedDisplayElement(split.chainHtml, split.answerHtml, split.operator).outerHTML;
      }

      return createSolvedDisplayElement(normalized, '', '').outerHTML;
    }

    function renderCopyBlock(html) {
      return `<p class="worked-solution-copy">${normalizeFractionMarkup(html)}</p>`;
    }

    function format(problem) {
      if (!problem || !problem.solution) return '';

      const segments = splitSegments(problem.solution);
      if (!segments.length) return problem.solution;

      const isStructuredProblem = problem.type === 'calc' || problem.type === 'multi';
      const parts = [];

      segments.forEach(segment => {
        if (/<table/i.test(segment)) {
          parts.push(`<div class="worked-solution-table">${segment}</div>`);
          return;
        }

        const normalized = normalizeFractionMarkup(segment);
        const text = stripHtml(normalized);
        const labeled = splitLeadingLabel(normalized);

        if (labeled && lineLooksLikeMath(stripHtml(labeled.remainderHtml), labeled.remainderHtml) && isStructuredProblem) {
          parts.push(`<p class="worked-solution-copy">${labeled.labelHtml}</p>`);
          parts.push(renderMathBlock(labeled.remainderHtml));
          return;
        }

        const shouldRenderMath =
          lineLooksLikeMath(text, normalized) &&
          (isStructuredProblem || /fl-frac|chem-frac|^\s*(K|Q|pH|pOH|pK|Δ|n|m|M|V|P|q)/.test(text));

        if (shouldRenderMath) {
          parts.push(renderMathBlock(normalized));
          return;
        }

        parts.push(renderCopyBlock(normalized));
      });

      return `<div class="worked-solution worked-solution--${problem.type || 'generic'}">${parts.join('')}</div>`;
    }

    function enhanceExisting(root = document) {
      root.querySelectorAll('.fl-chain').forEach(chain => {
        if (chain.closest('.solved-display, .coach-solved-work, #coachPreviewStep, #coachSolvedSetup, .setup-preview-box')) return;
        if (chain.querySelectorAll('.fl-result').length !== 1) return;

        const split = extractAnswerSplit(normalizeFractionMarkup(chain.innerHTML));
        if (!split) return;

        chain.replaceWith(createSolvedDisplayElement(split.chainHtml, split.answerHtml, split.operator));
      });
    }

    return { format, enhanceExisting };
  }

  const solutionRenderer = createSolutionRenderer();
  window.ChemUnlockedSolutionRenderer = solutionRenderer;

  window.ChemUnlockedInteractive = {
    nextIndex(currentIndex, length) {
      if (!Number.isInteger(length) || length <= 1) return 0;
      let next = currentIndex;
      while (next === currentIndex) {
        next = Math.floor(Math.random() * length);
      }
      return next;
    },

    shuffle(items) {
      const copy = Array.isArray(items) ? items.slice() : [];
      for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* ── Email capture (Formspree AJAX) ── */
(function () {
  function initEmailCapture() {
    document.querySelectorAll('.email-capture-form').forEach(function (form) {
      form.addEventListener('submit', async function (e) {
        e.preventDefault();
        var btn = form.querySelector('button[type="submit"]');
        if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
        try {
          var res = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
          });
          if (res.ok) {
            form.hidden = true;
            var success = form.parentElement.querySelector('.email-capture-success');
            if (success) success.hidden = false;
          } else {
            if (btn) { btn.disabled = false; btn.textContent = 'Notify me'; }
          }
        } catch (_) {
          form.submit(); // fallback to full page submit
        }
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEmailCapture);
  } else {
    initEmailCapture();
  }
})();

/* ── Restore premium access (lost token after checkout) ── */
(function () {
  function getUnitFromPath() {
    const match = window.location.pathname.match(/^\/?(\d{2})_practice/);
    return match ? match[1] : null;
  }

  function initAccessRestore() {
    const container = document.getElementById('accessMessage');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const access = params.get('access');
    if (access !== 'no_token' && access !== 'expired') return;

    const unit       = getUnitFromPath();
    const savedEmail = localStorage.getItem('cu_email') || '';

    const wrap = document.createElement('div');
    wrap.className = 'access-restore';
    wrap.innerHTML =
      '<form class="access-restore-form email-capture-row" novalidate>' +
        '<input type="email" name="email" placeholder="you@example.com" autocomplete="email" required>' +
        '<button type="submit" class="btn btn-sm">Restore access</button>' +
      '</form>' +
      '<p class="access-restore-status" role="status" aria-live="polite"></p>';
    container.appendChild(wrap);

    const form   = wrap.querySelector('form');
    const input  = wrap.querySelector('input[type="email"]');
    const status = wrap.querySelector('.access-restore-status');
    const button = wrap.querySelector('button');
    if (savedEmail) input.value = savedEmail;

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const email = input.value.trim().toLowerCase();
      if (!email) return;

      button.disabled = true;
      button.textContent = 'Checking…';
      status.textContent = '';

      try {
        const res  = await fetch(`/.netlify/functions/get-access-token?email=${encodeURIComponent(email)}`);
        const data = await res.json().catch(() => ({}));

        if (res.ok && data.token) {
          localStorage.setItem('cu_token', data.token);
          localStorage.setItem('cu_email', email);
          status.textContent = 'Access restored! Redirecting…';
          setTimeout(function () {
            window.location.replace(unit ? `/premium?unit=${encodeURIComponent(unit)}` : '/practice');
          }, 500);
          return;
        }

        status.textContent = data.error || 'No active subscription found for that email.';
      } catch (err) {
        status.textContent = 'Could not check subscription. Please try again.';
      }

      button.disabled = false;
      button.textContent = 'Restore access';
    });
  }

  /* Deferred to window 'load' (not 'DOMContentLoaded'): the practice pages'
     own inline scripts overwrite #accessMessage's innerHTML on
     DOMContentLoaded, which would wipe this form out if it ran first. */
  if (document.readyState === 'complete') {
    initAccessRestore();
  } else {
    window.addEventListener('load', initAccessRestore);
  }
})();
