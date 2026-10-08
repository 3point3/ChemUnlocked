#!/usr/bin/env node

/**
 * Generates the SEO topic pages (e.g. /stoichiometry-practice-problems) from
 * the copy in scripts/topic-pages-data.js.
 *
 * - The 3 free problems are copied verbatim from NN_practice.html, so a topic
 *   page can never drift from the unit page's free/premium boundary.
 * - The problems are also written into the HTML as static text (replaced by the
 *   interactive versions on load) so crawlers can read them without running JS.
 * - Also (re)writes the "Practice by skill" block on practice.html and the
 *   one-line topic links on each NN_practice.html and unit study guide. Those
 *   inserts are marker-delimited, so re-running the script is idempotent.
 *
 * Run: node scripts/generate-topic-pages.js   (or npm run topics:generate)
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { TOPICS } = require('./topic-pages-data');

const root = path.resolve(__dirname, '..');
const origin = 'https://chemunlocked.com';
const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');
const write = (f, s) => fs.writeFileSync(path.join(root, f), s);

/* ── Chemistry markup helpers ── */
const MINUS = '&minus;';

function formulaHtml(raw) {
  const [formula, charge] = raw.trim().split(/\s+/);
  let out = '';
  for (let i = 0; i < formula.length; i++) {
    const ch = formula[i];
    if (/\d/.test(ch) && i > 0 && /[A-Za-z)\]]/.test(formula[i - 1])) {
      let j = i;
      while (j < formula.length && /\d/.test(formula[j])) j++;
      out += `<span class="chem-sub">${formula.slice(i, j)}</span>`;
      i = j - 1;
    } else out += ch;
  }
  if (charge) {
    const c = charge.replace('-', MINUS);
    return `<span class="ion-group">${out}<span class="chem-charge">${c}</span></span>`;
  }
  return `<span class="ion-group">${out}</span>`;
}

const chem = (s) => s.replace(/\{\{([^}]+)\}\}/g, (_, f) => formulaHtml(f));

function equationHtml(s) {
  const parts = s.split(/\s+(\+|->)\s+/);
  const bits = parts.map((p) => {
    if (p === '+') return '<span class="chem-op">+</span>';
    if (p === '->') return '<span class="chem-op">&rarr;</span>';
    const m = p.match(/^(\d+)?\s*(.+)$/);
    const coef = m[1] ? `${m[1]}&nbsp;` : '';
    return `<span class="chem-token">${coef}${formulaHtml(m[2])}</span>`;
  });
  return `<div class="chem-eq">${bits.join('')}</div>`;
}

const plain = (html) =>
  html
    .replace(/\{\{([^}]+)\}\}/g, (_, f) => f.trim().replace(/\s+(\S+)$/, (m, c) => c.replace('-', '−')))
    .replace(/<[^>]+>/g, '')
    .replace(/&times;/g, '×').replace(/&divide;/g, '÷').replace(/&minus;/g, '−')
    .replace(/&deg;/g, '°').replace(/&middot;/g, '·').replace(/&Delta;/g, 'Δ')
    .replace(/&oslash;/g, 'ø').replace(/&rarr;/g, '→').replace(/&#8652;/g, '⇌')
    .replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const escJsonScript = (s) => s.replace(/<\//g, '<\\/');

/* ── Pull the free problems and bank size from NN_practice.html ── */
function loadUnit(unit) {
  const html = read(`${unit}_practice.html`);
  const m = html.match(/const SAMPLE_PROBLEMS = \[[\s\S]*?\n\];/);
  if (!m) throw new Error(`No SAMPLE_PROBLEMS block in ${unit}_practice.html`);
  const problems = vm.runInNewContext(m[0].replace('const SAMPLE_PROBLEMS =', '(') .replace(/;\s*$/, ')'));
  const bank = html.match(/(\d+)-problem bank/);
  if (!bank) throw new Error(`No bank size in ${unit}_practice.html`);
  return { block: m[0], problems, bank: bank[1] };
}

const plainAnswer = (p) => {
  if (p.choices) return plain(p.choices[p.correct]);
  const a = Array.isArray(p.answer) ? p.answer[0] : p.answer;
  return plain(`${a}${p.unit ? ' ' + p.unit : ''}`);
};

function buildTitle(name) {
  // Keep rendered titles at 60 characters or fewer (the & is one character once decoded).
  const long = `${name} Practice Problems & Solutions | ChemUnlocked`;
  const title = long.length <= 60 ? long : `${name} Practice Problems | ChemUnlocked`;
  return title;
}

const HEADER = read('header.html').trim().split('\n').map((l) => (l ? '    ' + l : l)).join('\n');
const FOOTER = read('footer.html').trim().split('\n').map((l) => (l ? '    ' + l : l)).join('\n');

const CSS_V = '20261007b';

/* ── Page builder ── */
function buildPage(t) {
  const { block, problems, bank } = loadUnit(t.unit);
  const url = `${origin}/${t.slug}`;
  const title = buildTitle(t.name);
  const titleAttr = esc(title);
  const h1 = `${t.name} Practice Problems`;
  const unitNum = String(parseInt(t.unit, 10));
  const practiceUrl = `/${t.unit}_practice`;
  const learnUrl = `/${t.learn}`;
  const others = TOPICS.filter((o) => o.slug !== t.slug);

  const faqJson = t.faq.map(([q, a]) => ({
    '@type': 'Question',
    name: plain(q),
    acceptedAnswer: { '@type': 'Answer', text: plain(chem(a)) },
  }));

  const quiz = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: h1,
    url,
    about: { '@type': 'Thing', name: t.name },
    educationalLevel: 'High School',
    isAccessibleForFree: true,
    provider: { '@type': 'Organization', name: 'ChemUnlocked', url: `${origin}/` },
    hasPart: problems.map((p) => ({
      '@type': 'Question',
      eduQuestionType: p.choices ? 'Multiple choice' : 'Flashcard',
      text: plain(p.q),
      ...(p.choices ? { suggestedAnswer: p.choices.map((c) => ({ '@type': 'Answer', text: plain(c) })) } : {}),
      acceptedAnswer: { '@type': 'Answer', text: plainAnswer(p) },
    })),
  };

  const learning = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: h1,
    description: t.desc,
    url,
    learningResourceType: 'Practice Problems',
    educationalLevel: 'High School',
    teaches: t.teaches,
    isPartOf: { '@type': 'Course', name: 'High School Chemistry', url: `${origin}/` },
    provider: { '@type': 'Organization', name: 'ChemUnlocked', url: `${origin}/` },
  };

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
      { '@type': 'ListItem', position: 2, name: 'Practice Hub', item: `${origin}/practice` },
      { '@type': 'ListItem', position: 3, name: h1, item: url },
    ],
  };

  const ld = (o) => `<script type="application/ld+json">\n${escJsonScript(JSON.stringify(o, null, 2))}\n</script>`;

  const staticProblems = problems
    .map((p, i) => {
      const tagClass = p.type === 'calc' ? 'tag-calc' : p.type === 'multi' ? 'tag-multi' : 'tag-concept';
      return `      <div class="problem"><div class="prob-top"><span class="prob-num">#${i + 1}</span><span class="prob-tag ${tagClass}">${p.tag}</span></div><div class="prob-q">${p.q}</div></div>`;
    })
    .join('\n');

  const ex = t.example;
  const exSteps = ex.steps.map((s) => `<p>${chem(s)}</p>`).join('\n        ');
  const exEq = ex.eq ? `\n        ${equationHtml(ex.eq)}` : '';

  const skills = t.skills
    .map(([l, d]) => `      <li><strong>${chem(l)}</strong> ${chem(d)}</li>`)
    .join('\n');

  const faqHtml = t.faq
    .map(
      ([q, a]) => `          <details class="faq-item">
            <summary>${chem(q)}</summary>
            <div class="faq-answer">${chem(a)}</div>
          </details>`
    )
    .join('\n');

  const related = others
    .map((o) => `      <li><a href="/${o.slug}">${o.name}</a></li>`)
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-BLMEQDBT8X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BLMEQDBT8X');
</script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- GENERATED by scripts/generate-topic-pages.js from scripts/topic-pages-data.js. Edit those, then re-run. -->
<title>${titleAttr}</title>
<meta name="description" content="${esc(t.desc)}">
<link rel="canonical" href="${url}">
<meta property="og:title" content="${titleAttr}">
<meta property="og:description" content="${esc(t.ogDesc)}">
<meta property="og:url" content="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="ChemUnlocked">
<meta property="og:locale" content="en_US">
<meta property="og:image" content="${origin}/og-image.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="ChemUnlocked chemistry help and study hub preview">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@ChemUnlocked">
<meta name="twitter:creator" content="@ChemUnlocked">
<meta name="twitter:title" content="${titleAttr}">
<meta name="twitter:description" content="${esc(t.ogDesc)}">
<meta name="twitter:image" content="${origin}/og-image.png">
<meta name="twitter:image:alt" content="ChemUnlocked chemistry help and study hub preview">
${ld(learning)}
${ld(quiz)}
${ld({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqJson })}
${ld(breadcrumbs)}
<link rel="stylesheet" href="chem.css?v=${CSS_V}">
<link rel="stylesheet" href="practice-teaser.css?v=${CSS_V}">
<meta name="theme-color" content="#0f766e">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="shortcut icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <div class="starfield"></div>
${HEADER}

  <main id="main-content">
  <div class="container">

  <header>
    <div class="unit-label">High School Chemistry &nbsp;·&nbsp; Practice by Skill</div>
    <h1>${h1}</h1>
    <p class="subtitle">${chem(t.intro)}</p>
  </header>

  <section class="topic-section" aria-labelledby="practice-skills-title">
    <h2 id="practice-skills-title">What you&rsquo;ll practice</h2>
    <ul class="key-fact-list">
${skills}
    </ul>
    <p class="topic-links"><a href="${learnUrl}">Learn the method first &rarr;</a></p>
  </section>

  <section class="topic-section" aria-labelledby="example-title">
    <h2 id="example-title">${chem(ex.title)}</h2>
    <div class="topic-example">
        ${exSteps}${exEq}
        <p class="topic-example-answer">${chem(ex.answer)}</p>
    </div>
  </section>

  <!-- ── Free Sample Problems (same 3 as ${t.unit}_practice) ── -->
  <section class="topic-section" aria-labelledby="free-problems-title">
    <div class="teaser-intro">
      <h2 id="free-problems-title">3 free ${t.name.toLowerCase()} problems</h2>
      <p class="sample-note">Give each one a real try before you open the solution. Your answer is checked as soon as you submit it, and the worked solution shows every step so you can see exactly where a setup went wrong.</p>
    </div>

    <div id="sampleContainer">
${staticProblems}
    </div>
  </section>

  <aside class="topic-cta" aria-labelledby="topic-cta-title">
    <p class="topic-cta-title" id="topic-cta-title">Want more reps?</p>
    <p>These 3 are free. The full Unit ${t.unit} bank has ${bank} problems with worked solutions, randomized each time, in sets of 3, 9, or 18.</p>
    <div class="teaser-cta-btns">
      <a class="btn" href="${practiceUrl}">Unlock the full problem bank &mdash; $5.99/month</a>
      <a class="btn btn-outline" href="${learnUrl}">Learn the method first &rarr;</a>
    </div>
    <p class="teaser-cancel-note">Cancel anytime. Yearly plan is $64.99. See the <a href="${practiceUrl}">Unit ${t.unit} practice page</a> for details.</p>
  </aside>

  <section class="skills-card home-faq topic-section" id="faq" aria-labelledby="faq-title">
    <h2 id="faq-title">${t.name} questions students ask</h2>
    <div class="faq-list">
${faqHtml}
    </div>
  </section>

  <nav class="topic-section" aria-labelledby="more-topics-title">
    <h2 id="more-topics-title">More chemistry practice by skill</h2>
    <ul class="topic-grid">
${related}
    </ul>
    <p class="topic-links"><a href="/practice">See every unit&rsquo;s practice page &rarr;</a></p>
  </nav>

  </div>

  <div class="scroll-hint">High School Chemistry · ${h1}</div>

${FOOTER}
  </main>

<script src="chem.js?v=20260714"></script>
<script src="practice-teaser.js?v=20260611"></script>
<script>

/* ── Topic-page sample problems: the same 3 free problems as the Unit ${t.unit} practice page ── */
${block}

document.addEventListener('DOMContentLoaded', function () {
  renderSampleProblems(SAMPLE_PROBLEMS, 'sampleContainer');
});

</script>
</body>
</html>
`;
}

/* ── Marker-delimited inserts into existing pages ── */
function upsert(file, startMark, endMark, content, anchorRegex, where) {
  let html = read(file);
  const block = `${startMark}\n${content}\n${endMark}`;
  const re = new RegExp(`${startMark.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${endMark.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`);
  if (re.test(html)) {
    html = html.replace(re, () => block);
  } else {
    const m = html.match(anchorRegex);
    if (!m) throw new Error(`Anchor not found in ${file}: ${anchorRegex}`);
    const idx = where === 'before' ? html.lastIndexOf('\n', m.index) + 1 : m.index + m[0].length;
    html = html.slice(0, idx) + block + '\n' + html.slice(idx);
  }
  write(file, html);
}

function linkExistingPages() {
  const names = {};
  TOPICS.forEach((t) => {
    const learnFile = fs.readdirSync(root).find((f) => f.startsWith(`${t.unit}_Learn_`) && f.endsWith('.html'));
    if (!learnFile) throw new Error(`No learn page for unit ${t.unit}`);

    upsert(
      `${t.unit}_practice.html`,
      '<!-- topic-link:start -->',
      '<!-- topic-link:end -->',
      `  <p class="sample-note">Want one skill at a time? Try the free <a href="/${t.slug}">${t.name.toLowerCase()} practice problems</a> with worked solutions.</p>`,
      /<div id="accessMessage"/,
      'before'
    );

    upsert(
      learnFile,
      '<!-- topic-link:start -->',
      '<!-- topic-link:end -->',
      `<div class="key-fact mt-1">
  <div class="icon">&rarr;</div>
  <div class="key-fact-copy">
    <p class="key-fact-title">Practice this skill</p>
    <p>Try the free <a href="/${t.slug}">${t.name.toLowerCase()} practice problems</a> with worked solutions.</p>
  </div>
</div>`,
      /<nav class="unit-bottom-nav"/,
      'before'
    );
    names[t.unit] = learnFile;
  });

  const cards = TOPICS.map(
    (t) => `      <li><a href="/${t.slug}">${t.name} practice problems</a></li>`
  ).join('\n');
  upsert(
    'practice.html',
    '<!-- topic-pages:start -->',
    '<!-- topic-pages:end -->',
    `  <section class="topic-section" aria-labelledby="by-skill-title">
    <h2 id="by-skill-title">Practice by skill</h2>
    <p class="topic-links">Looking for one skill instead of a whole unit? Each of these pages has 3 free interactive problems with worked solutions.</p>
    <ul class="topic-grid">
${cards}
    </ul>
  </section>`,
    /<div class="bottom-cta">/,
    'before'
  );
  // practice.html gets new classes from chem.css, so bump its cache-busting version.
  let hub = read('practice.html');
  hub = hub.replace(/chem\.css\?v=[^"]+/, `chem.css?v=${CSS_V}`);
  write('practice.html', hub);
}

/* ── Main ── */
TOPICS.forEach((t) => {
  write(`${t.slug}.html`, buildPage(t));
  console.log(`wrote ${t.slug}.html`);
});
linkExistingPages();
console.log('linked unit pages, study guides, and practice hub');
