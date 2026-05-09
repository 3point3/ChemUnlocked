/* ============================================================
   chem.js — ChemUnlocked Shared Behaviour
   Injects fonts, header, footer, nav highlighting, page classes,
   and a reusable tab switcher.
   ============================================================ */

(function () {
  const FALLBACK_HEADER_HTML = `
    <header class="site-header">
      <div class="site-header-inner">
        <a href="index.html" class="site-logo" aria-label="ChemUnlocked home">
          <span class="logo-chem">Chem</span><span class="logo-unlock">Unlocked</span>
        </a>
        <button
          class="site-menu-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="site-nav"
          aria-label="Open main menu">
          <span class="site-menu-toggle-bar" aria-hidden="true"></span>
          <span class="site-menu-toggle-bar" aria-hidden="true"></span>
          <span class="site-menu-toggle-bar" aria-hidden="true"></span>
        </button>
        <nav class="site-nav" id="site-nav" aria-label="Main navigation">
          <a href="index.html#units">Learning Hub</a>
          <a href="practice.html">Practice Hub</a>
          <a href="study_skills_blog.html">Study Skills</a>
          <a href="how-it-works.html">How It Works</a>
          <a href="Contact_ChemUnlocked.html">Contact</a>
        </nav>
      </div>
    </header>
  `;

  const FALLBACK_FOOTER_HTML = `
    <footer class="site-footer">
      <div class="footer-links">
        <a href="index.html#units">Learning Hub</a> &nbsp;·&nbsp;
        <a href="practice.html">Practice Hub</a> &nbsp;·&nbsp;
        <a href="study_skills_blog.html">Study Skills</a> &nbsp;·&nbsp;
        <a href="how-it-works.html">How It Works</a> &nbsp;·&nbsp;
        <a href="Contact_ChemUnlocked.html">Contact</a> &nbsp;·&nbsp;
        <a href="Privacy-Policy.html">Privacy Policy</a> &nbsp;·&nbsp;
        <a href="Terms-of-Service.html">Terms of Service</a>
      </div>
      © 2026 ChemUnlocked &nbsp;·&nbsp; Introductory General Chemistry
    </footer>
  `;

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
    if (document.querySelector('.site-header')) {
      const existingHeader = document.querySelector('.site-header');
      setupHeaderMenu(existingHeader);
      highlightActiveNav();
      updateStickyOffset();
      return;
    }

    fetch('header.html')
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then(html => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        const header = wrapper.querySelector('.site-header');
        if (!header) return;

        const main = document.querySelector('main');
        const target = main && main.parentNode === document.body
          ? main
          : document.body.firstElementChild;

        document.body.insertBefore(header, target);
        setupHeaderMenu(header);
        highlightActiveNav();
        updateStickyOffset();
      })
      .catch(error => {
        console.warn('ChemUnlocked: failed to load header fragment, using fallback.', error);
        const wrapper = document.createElement('div');
        wrapper.innerHTML = FALLBACK_HEADER_HTML;
        const header = wrapper.querySelector('.site-header');
        if (!header) return;

        const main = document.querySelector('main');
        const target = main && main.parentNode === document.body
          ? main
          : document.body.firstElementChild;

        document.body.insertBefore(header, target);
        setupHeaderMenu(header);
        highlightActiveNav();
        updateStickyOffset();
      });
  }

  function setupHeaderMenu(header) {
    if (!header) return;

    const toggle = header.querySelector('.site-menu-toggle');
    const nav = header.querySelector('.site-nav');
    if (!toggle || !nav || header.dataset.menuReady === 'true') return;

    const mobileQuery = window.matchMedia('(max-width: 640px)');

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
    if (!header || !header.classList.contains('menu-open') || !window.matchMedia('(max-width: 640px)').matches) {
      return 0;
    }

    const nav = header.querySelector('.site-nav');
    if (!nav) return 0;

    const headerRect = header.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    return Math.max(0, Math.ceil(navRect.bottom - headerRect.bottom));
  }

  function injectFooter() {
    if (document.querySelector('.site-footer')) return;

    fetch('footer.html')
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then(html => {
        const container = document.querySelector('.container');
        if (!container) return;
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        const footer = wrapper.firstElementChild;
        if (!footer) return;
        container.appendChild(footer);
      })
      .catch(error => {
        console.warn('ChemUnlocked: failed to load footer fragment, using fallback.', error);
        const container = document.querySelector('.container');
        if (!container) return;
        const wrapper = document.createElement('div');
        wrapper.innerHTML = FALLBACK_FOOTER_HTML;
        const footer = wrapper.querySelector('.site-footer');
        if (!footer) return;
        container.appendChild(footer);
      });
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
    { unit: '01', title: 'Intro to Chemistry & Lab Safety', learn: '01_Learn_Intro_to_Chemistry_and_Lab_Safety.html', practice: '01_practice.html' },
    { unit: '02', title: 'Matter', learn: '02_Learn_Chemistry_Matter.html', practice: '02_practice.html' },
    { unit: '03', title: 'Atomic Structure', learn: '03_Learn_Atomic_Structure.html', practice: '03_practice.html' },
    { unit: '04', title: 'Electron Configuration', learn: '04_Learn_Electron_Configuration.html', practice: '04_practice.html' },
    { unit: '05', title: 'Periodic Table & Trends', learn: '05_Learn_Periodic_Table_and_Trends.html', practice: '05_practice.html' },
    { unit: '06', title: 'Nomenclature', learn: '06_Learn_Chemistry_Nomenclature.html', practice: '06_practice.html' },
    { unit: '07', title: 'Moles', learn: '07_Learn_Chemistry_Moles.html', practice: '07_practice.html' },
    { unit: '08', title: 'Chemical Reactions', learn: '08_Learn_Chemical_Reactions.html', practice: '08_practice.html' },
    { unit: '09', title: 'Stoichiometry', learn: '09_Learn_Chemistry_Stoichiometry.html', practice: '09_practice.html' },
    { unit: '10', title: 'Bonding', learn: '10_Learn_Chemistry_Bonding.html', practice: '10_practice.html' },
    { unit: '11', title: 'Energy & Thermochemistry', learn: '11_Learn_Chemistry_Energy_Thermochemistry.html', practice: '11_practice.html' },
    { unit: '12', title: 'Gas Laws', learn: '12_Learn_Chemistry_Gas.html', practice: '12_practice.html' },
    { unit: '13', title: 'Solutions', learn: '13_Learn_Chemistry_Solutions.html', practice: '13_practice.html' },
    { unit: '14', title: 'Equilibrium', learn: '14_Learn_Chemistry_Equilibrium.html', practice: '14_practice.html' },
    { unit: '15', title: 'Acids & Bases', learn: '15_Learn_Chemistry_Acid_Base.html', practice: '15_practice.html' }
  ];

  const UNIT_PAGES = COURSE_UNITS.reduce((pages, unit) => {
    pages[unit.unit] = unit;
    return pages;
  }, {});

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
      const numSpan = heading.querySelector('.num');
      const rawText = numSpan
        ? heading.textContent.replace(numSpan.textContent, '')
        : heading.textContent;
      link.textContent = rawText.replace(/\s+/g, ' ').trim();
      nav.appendChild(link);
    });

    const firstCard = concepts.querySelector('.card');
    const insertAfter = firstCard || tabs;
    insertAfter.insertAdjacentElement('afterend', nav);
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

  function init() {
    injectFonts();
    addBodyPageClasses();
    injectHeader();
    injectFooter();
    wireAnchorOffsets();

    if (document.querySelector('.nav-tabs')) {
      normalizeTabs();
      wireTabButtons();
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
