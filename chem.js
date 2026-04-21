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
        updateStickyOffset();
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

  function getStickyTopOffset() {
    const header = document.querySelector('.site-header');
    const tabs = document.querySelector('.nav-tabs');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const tabsHeight = tabs ? tabs.getBoundingClientRect().height : 0;
    return Math.ceil(headerHeight + tabsHeight + 18);
  }

  function updateStickyOffset() {
    const header = document.querySelector('.site-header');
    const headerHeight = header ? Math.ceil(header.getBoundingClientRect().height) : 72;
    document.documentElement.style.setProperty('--site-header-height', `${headerHeight}px`);
    document.documentElement.style.setProperty('--sticky-offset', `${getStickyTopOffset()}px`);
  }

  const UNIT_PAGES = {
    '00': { title: 'Intro to Chemistry & Lab Safety', learn: '00_Learn_Intro_to_Chemistry_and_Lab_Safety.html', practice: '00_practice.html' },
    '01': { title: 'Matter', learn: '01_Learn_Chemistry_Matter.html', practice: '01_practice.html' },
    '02': { title: 'Atomic Structure', learn: '02_Learn_Atomic_Structure.html', practice: '02_practice.html' },
    '03': { title: 'Electron Configuration', learn: '03_Learn_Electron_Configuration.html', practice: '03_practice.html' },
    '04': { title: 'Periodic Table & Trends', learn: '04_Learn_Periodic_Table_and_Trends.html', practice: '04_practice.html' },
    '05': { title: 'Nomenclature', learn: '05_Learn_Chemistry_Nomenclature.html', practice: '05_practice.html' },
    '06': { title: 'Moles', learn: '06_Learn_Chemistry_Moles.html', practice: '06_practice.html' },
    '07': { title: 'Chemical Reactions', learn: '07_Learn_Chemical_Reactions.html', practice: '07_practice.html' },
    '08': { title: 'Stoichiometry', learn: '08_Learn_Chemistry_Stoichiometry.html', practice: '08_practice.html' },
    '09': { title: 'Bonding', learn: '09_Learn_Chemistry_Bonding.html', practice: '09_practice.html' },
    '10': { title: 'Energy & Thermochemistry', learn: '10_Learn_Chemistry_Energy_Thermochemistry.html', practice: '10_practice.html' },
    '11': { title: 'Gas Laws', learn: '11_Learn_Chemistry_Gas.html', practice: '11_practice.html' },
    '12': { title: 'Solutions', learn: '12_Learn_Chemistry_Solutions.html', practice: '12_practice.html' },
    '13': { title: 'Equilibrium', learn: '13_Learn_Chemistry_Equilibrium.html', practice: '13_practice.html' },
    '14': { title: 'Acids & Bases', learn: '14_Learn_Chemistry_Acid_Base.html', practice: '14_practice.html' },
    '15': { title: 'General Organic Chemistry', learn: '15_Learn_Chemistry_General_Organic.html', practice: '' }
  };

  function getCurrentPageName() {
    return window.location.pathname.split('/').pop() || 'index.html';
  }

  function getUnitFromPage() {
    const match = getCurrentPageName().match(/^(\d{2})_(Learn|practice)/i);
    return match ? { unit: match[1], isPractice: /practice/i.test(match[2]) } : null;
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

      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', btn.id);
      panel.setAttribute('aria-hidden', panel.classList.contains('active') ? 'false' : 'true');
    });
  }

  function wireTabButtons() {
    document.querySelectorAll('.tab-btn[data-tab]').forEach(btn => {
      btn.addEventListener('click', function () {
        const id = this.getAttribute('data-tab');
        if (id) window.showTab(id, this);
      });
    });
  }

  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 64);
  }

  function addConceptJumpNav() {
    if (document.querySelector('.concept-jump-nav')) return;
    const concepts = document.getElementById('concepts');
    const tabs = document.querySelector('.nav-tabs');
    if (!concepts || !tabs) return;

    const headings = Array.from(concepts.querySelectorAll('.card-title')).filter(heading => heading.textContent.trim());
    if (headings.length < 4) return;

    const nav = document.createElement('nav');
    nav.className = 'concept-jump-nav';
    nav.setAttribute('aria-label', 'Jump to unit concepts');

    const label = document.createElement('span');
    label.className = 'concept-jump-label';
    label.textContent = 'Jump to';
    nav.appendChild(label);

    const usedIds = new Set();
    headings.forEach((heading, index) => {
      if (!heading.id) {
        let id = slugify(heading.textContent) || `concept-${index + 1}`;
        if (!/^concept-/.test(id)) id = `concept-${id}`;
        let uniqueId = id;
        let suffix = 2;
        while (usedIds.has(uniqueId) || document.getElementById(uniqueId)) {
          uniqueId = `${id}-${suffix}`;
          suffix += 1;
        }
        heading.id = uniqueId;
      }
      usedIds.add(heading.id);

      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent.replace(/\s+/g, ' ').trim();
      nav.appendChild(link);
    });

    tabs.insertAdjacentElement('afterend', nav);
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

    const units = Object.keys(UNIT_PAGES).filter(unit => Number(unit) <= 15);
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
      nav.appendChild(makeUnitNavLink('Practice', { unit: unitInfo.unit, title: 'All Practice Banks' }, 'practice.html', 'All Practice Banks'));
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
          educationalLevel: 'Introductory General Chemistry',
          isPartOf: {
            '@type': 'Course',
            name: 'ChemUnlocked Introductory General Chemistry'
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
            {
              '@type': 'ListItem',
              position: 3,
              name: unitInfo.isPractice ? 'Practice' : 'Lesson',
              item: url
            }
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
    });
  }

  function init() {
    injectFonts();
    addBodyPageClasses();
    injectHeader();
    injectFooter();
    normalizeTabs();
    wireTabButtons();
    wireAnchorOffsets();
    addConceptJumpNav();
    addUnitBottomNav();
    addGeneratedStructuredData();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
