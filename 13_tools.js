/* ════════════════════════════════
   PARTICLE DIAGRAMS — beaker style
════════════════════════════════ */
function drawParticles() {
  if (!document.getElementById('cvNaCl') || !document.getElementById('cvGluc') || !document.getElementById('cvPpt')) {
    return;
  }

  function setupHiDPICanvas(cv) {
    const logicalW = Number(cv.getAttribute('width')) || cv.width;
    const logicalH = Number(cv.getAttribute('height')) || cv.height;
    const dpr = window.devicePixelRatio || 1;
    cv.width = logicalW * dpr;
    cv.height = logicalH * dpr;
    cv.style.width = logicalW + 'px';
    cv.style.height = logicalH + 'px';
    const ctx = cv.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.__logicalW = logicalW;
    ctx.__logicalH = logicalH;
    return { ctx, W: logicalW, H: logicalH };
  }

  const subscriptMap = {
    '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
    '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9'
  };
  const superscriptMap = {
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
    '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
    '⁺': '+', '⁻': '-'
  };

  function splitChemLabel(label) {
    let charge = '';
    let main = label;
    const chargeMatch = label.match(/([⁰¹²³⁴⁵⁶⁷⁸⁹]*[⁺⁻])$/);
    if (chargeMatch) {
      charge = chargeMatch[1].replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]/g, function (char) {
        return superscriptMap[char] || char;
      });
      main = label.slice(0, -chargeMatch[1].length);
    }

    const segments = [];
    for (let i = 0; i < main.length; i += 1) {
      const char = main[i];
      if (subscriptMap[char]) {
        segments.push({ text: subscriptMap[char], kind: 'sub' });
      } else {
        segments.push({ text: char, kind: 'base' });
      }
    }
    if (charge) segments.push({ text: charge, kind: 'sup' });
    return segments;
  }

  function drawChemLabel(ctx, x, y, label, color, radius) {
    const segments = splitChemLabel(label);
    const baseSize = Math.max(9, radius * 0.72);
    const subSize = baseSize * 0.72;
    const supSize = baseSize * 0.68;

    const measured = segments.map(function (segment) {
      const fontSize = segment.kind === 'base' ? baseSize : (segment.kind === 'sub' ? subSize : supSize);
      ctx.font = `bold ${fontSize}px DM Mono, monospace`;
      return {
        text: segment.text,
        kind: segment.kind,
        width: ctx.measureText(segment.text).width,
        fontSize
      };
    });

    const totalWidth = measured.reduce(function (sum, segment) {
      return sum + segment.width;
    }, 0);

    let cursorX = x - totalWidth / 2;
    measured.forEach(function (segment) {
      ctx.font = `bold ${segment.fontSize}px DM Mono, monospace`;
      let drawY = y + 1;
      if (segment.kind === 'sub') drawY += baseSize * 0.18;
      if (segment.kind === 'sup') drawY -= baseSize * 0.34;
      ctx.fillStyle = color || '#fff';
      ctx.fillText(segment.text, cursorX + segment.width / 2, drawY);
      cursorX += segment.width;
    });
  }

  /* Helper: draw a glass beaker outline on a canvas context.
     Returns the inner solution region {x, y, w, h, solutionTop}
     bx/by = top-left of beaker body, bw/bh = outer dimensions */
  function drawBeaker(ctx, bx, by, bw, bh, fillFraction, fillColor, labelTop) {
    const wall = 6;       // wall thickness px
    const baseH = 10;     // base height
    const lipW = 10;      // lip overhang on each side

    // ----- background (page color) -----
    ctx.clearRect(0, 0, ctx.__logicalW || ctx.canvas.width, ctx.__logicalH || ctx.canvas.height);

    // ----- beaker label at top -----
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 13px DM Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(labelTop, (ctx.__logicalW || ctx.canvas.width) / 2, by - 6);

    // ----- solution fill -----
    const innerX = bx + wall;
    const innerW = bw - wall * 2;
    const innerBottom = by + bh - baseH;
    const solutionH = (bh - baseH) * fillFraction;
    const solutionTop = innerBottom - solutionH;

    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.rect(innerX, solutionTop, innerW, solutionH);
    ctx.fill();

    // ----- water surface line -----
    ctx.strokeStyle = 'rgba(148,163,184,0.55)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(innerX, solutionTop);
    ctx.lineTo(innerX + innerW, solutionTop);
    ctx.stroke();
    ctx.setLineDash([]);

    // ----- beaker glass body -----
    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = wall;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    // left wall
    ctx.beginPath();
    ctx.moveTo(bx + wall/2, by);
    ctx.lineTo(bx + wall/2, by + bh - baseH + wall/2);
    ctx.stroke();

    // right wall
    ctx.beginPath();
    ctx.moveTo(bx + bw - wall/2, by);
    ctx.lineTo(bx + bw - wall/2, by + bh - baseH + wall/2);
    ctx.stroke();

    // base
    ctx.lineWidth = wall * 1.3;
    ctx.beginPath();
    ctx.moveTo(bx + wall/2, by + bh - baseH + wall/2);
    ctx.lineTo(bx + bw - wall/2, by + bh - baseH + wall/2);
    ctx.stroke();

    // left lip (horizontal top edge)
    ctx.lineWidth = wall * 0.75;
    ctx.beginPath();
    ctx.moveTo(bx + wall/2, by);
    ctx.lineTo(bx - lipW, by);
    ctx.stroke();

    // right lip
    ctx.beginPath();
    ctx.moveTo(bx + bw - wall/2, by);
    ctx.lineTo(bx + bw + lipW, by);
    ctx.stroke();

    return { innerX, solutionTop, innerW, solutionH, innerBottom };
  }

  /* Draw a single particle circle with label */
  function drawParticle(ctx, x, y, r, color, label, labelColor) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = 'rgba(15,23,42,0.16)';
    ctx.stroke();

    // label
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    drawChemLabel(ctx, x, y, label, labelColor || '#fff', r);
  }

  /* ── Beaker 1: NaCl(aq) ── */
  (function () {
    const cv = document.getElementById('cvNaCl');
    if (!cv) return;
    const { ctx, W, H } = setupHiDPICanvas(cv);
    const bx = 20, by = 30, bw = W - 40, bh = H - 50;

    const reg = drawBeaker(ctx, bx, by, bw, bh, 0.78, 'rgba(219,234,254,0.55)', 'NaCl(aq)');

    // Ions scattered throughout solution zone — clipped to beaker interior
    ctx.save();
    ctx.beginPath();
    ctx.rect(reg.innerX, reg.solutionTop, reg.innerW, reg.innerBottom - reg.solutionTop);
    ctx.clip();
    const ions = [
      {x:55,  y:reg.solutionTop+18, c:'#3b82f6', l:'Na+'},
      {x:130, y:reg.solutionTop+12, c:'#ef4444', l:'Cl-'},
      {x:90,  y:reg.solutionTop+38, c:'#3b82f6', l:'Na+'},
      {x:50,  y:reg.solutionTop+62, c:'#ef4444', l:'Cl-'},
      {x:148, y:reg.solutionTop+50, c:'#3b82f6', l:'Na+'},
      {x:110, y:reg.solutionTop+80, c:'#ef4444', l:'Cl-'},
      {x:60,  y:reg.solutionTop+98, c:'#3b82f6', l:'Na+'},
      {x:155, y:reg.solutionTop+108,c:'#ef4444', l:'Cl-'},
      {x:95,  y:reg.solutionTop+125,c:'#3b82f6', l:'Na+'},
      {x:45,  y:reg.solutionTop+140,c:'#ef4444', l:'Cl-'},
      {x:140, y:reg.solutionTop+140,c:'#3b82f6', l:'Na+'},
      {x:80,  y:reg.solutionTop+158,c:'#ef4444', l:'Cl-'},
    ];
    ions.forEach(p => drawParticle(ctx, p.x, p.y, 16, p.c, p.l));
    ctx.restore();
  })();

  /* ── Beaker 2: Glucose(aq) ── */
  (function () {
    const cv = document.getElementById('cvGluc');
    if (!cv) return;
    const { ctx, W, H } = setupHiDPICanvas(cv);
    const bx = 20, by = 30, bw = W - 40, bh = H - 50;

    const reg = drawBeaker(ctx, bx, by, bw, bh, 0.78, 'rgba(209,250,229,0.5)', 'Glucose(aq)');

    const r = 18;
    const pad = r + 2;
    const solH = reg.innerBottom - reg.solutionTop;
    // Evenly distribute molecules in 3 columns × 3 rows within solution zone
    const cols = [reg.innerX + pad + 4, reg.innerX + reg.innerW/2, reg.innerX + reg.innerW - pad - 4];
    const rows = [
      reg.solutionTop + pad,
      reg.solutionTop + solH * 0.38,
      reg.solutionTop + solH * 0.65,
      reg.innerBottom - pad,
    ];
    const mols = [
      {x:cols[0], y:rows[0]}, {x:cols[2], y:rows[0]},
      {x:cols[1], y:rows[1]},
      {x:cols[0], y:rows[2]}, {x:cols[2], y:rows[2]},
      {x:cols[1], y:rows[3]},
    ];

    // Clip to solution interior so nothing escapes the beaker
    ctx.save();
    ctx.beginPath();
    ctx.rect(reg.innerX, reg.solutionTop, reg.innerW, solH);
    ctx.clip();

    mols.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fillStyle = '#10b981'; ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(15,23,42,0.16)';
      ctx.stroke();
      // Label
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 9px DM Mono, monospace';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('glc', p.x, p.y);
    });

    ctx.restore();
  })();

  /* ── Beaker 3: After precipitation (AgNO3 + NaCl) ── */
  (function () {
    const cv = document.getElementById('cvPpt');
    if (!cv) return;
    const { ctx, W, H } = setupHiDPICanvas(cv);
    const bx = 20, by = 30, bw = W - 40, bh = H - 50;

    const reg = drawBeaker(ctx, bx, by, bw, bh, 0.78, 'rgba(237,233,254,0.45)', 'After Precipitation');

    // Precipitate pile at bottom — AgCl(s)
    const pileY = reg.innerBottom - 18;
    const pileParticles = [
      // bottom row
      {x:50,  y:pileY+2},  {x:72,  y:pileY+2},  {x:94,  y:pileY+2},
      {x:116, y:pileY+2},  {x:138, y:pileY+2},  {x:160, y:pileY+2},
      // second row
      {x:60,  y:pileY-16}, {x:82,  y:pileY-16}, {x:104, y:pileY-16},
      {x:126, y:pileY-16}, {x:148, y:pileY-16},
      // third row
      {x:70,  y:pileY-32}, {x:92,  y:pileY-32}, {x:114, y:pileY-32},
      {x:136, y:pileY-32},
    ];
    pileParticles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x, p.y, 11, 0, Math.PI*2);
      ctx.fillStyle = '#d1d5db'; ctx.fill();
      ctx.strokeStyle = '#6b7280'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = '#374151';
      ctx.font = 'bold 7.5px DM Mono, monospace';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('AgCl', p.x, p.y);
    });

    // Label below pile
    ctx.fillStyle = '#374151';
    ctx.font = 'bold 10px DM Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('AgCl(s)', W/2, reg.innerBottom + 14);

    // Dissolved spectator ions floating in solution above pile
    const topZone = reg.solutionTop;
    const bottomZone = pileY - 44;   // stop above the pile
    const ions = [
      {x:52,  y:topZone+16, c:'#3b82f6', l:'Na+'},
      {x:148, y:topZone+12, c:'#3b82f6', l:'Na+'},
      {x:95,  y:topZone+34, c:'#f97316', l:'NO3-'},
      {x:55,  y:topZone+58, c:'#f97316', l:'NO3-'},
      {x:152, y:topZone+52, c:'#3b82f6', l:'Na+'},
      {x:100, y:topZone+78, c:'#3b82f6', l:'Na+'},
      {x:55,  y:topZone+100,c:'#f97316', l:'NO3-'},
      {x:148, y:topZone+98, c:'#f97316', l:'NO3-'},
    ].filter(p => p.y < bottomZone);
    ions.forEach(p => drawParticle(ctx, p.x, p.y, 16, p.c, p.l));
  })();
}

/* ════════════════════════════════
   EXPLORE TOOLS
════════════════════════════════ */
const SOL_DATA = {
  'KNO3':    { color:'#2563eb', pts:[[0,13],[10,21],[20,32],[30,45],[40,63],[50,85],[60,110],[70,138],[80,169],[90,202],[100,240]] },
  'NaNO3':   { color:'#16a34a', pts:[[0,73],[10,80],[20,88],[30,96],[40,104],[50,114],[60,124],[70,136],[80,148],[90,163],[100,180]] },
  'KCl':     { color:'#dc2626', pts:[[0,28],[10,31],[20,34],[30,37],[40,40],[50,43],[60,46],[70,48],[80,51],[90,54],[100,57]] },
  'NaCl':    { color:'#7c3aed', pts:[[0,35.7],[10,35.8],[20,36],[30,36.3],[40,36.6],[50,37],[60,37.3],[70,37.8],[80,38.4],[90,39],[100,39.8]] },
  'KClO3':  { color:'#ea580c', pts:[[0,3.3],[10,5],[20,7.4],[30,10.5],[40,14.0],[50,18.5],[60,24],[70,30],[80,37.5],[90,46],[100,56]] },
  'NH4Cl':  { color:'#0891b2', pts:[[0,29.4],[10,33],[20,37.2],[30,41.4],[40,45.8],[50,50.4],[60,55.2],[70,60.2],[80,65.5],[90,71],[100,77.3]] },
  'Ce2(SO4)3':{ color:'#be185d', pts:[[0,20],[10,16],[20,11],[30,7.5],[40,5.5],[50,4.1],[60,3.4],[70,3],[80,2.7],[90,2.4],[100,2.2]] },
};

const SOLUBILITY_SCENARIOS = [
  {
    compound: 'KNO3',
    temperature: 40,
    amountAdded: 80,
    answer: 'saturated',
    reveal: 'Solubility limit at 40 °C: 63 g per 100 g H2O.<br>Amount added: 80 g.<br>Since 80 g is greater than 63 g, only 63 g dissolves. The rest stays solid, so the mixture is saturated with excess undissolved solid.'
  },
  {
    compound: 'KCl',
    temperature: 40,
    amountAdded: 30,
    answer: 'unsaturated',
    reveal: 'Solubility limit at 40 °C: 40 g per 100 g H2O.<br>Amount added: 30 g.<br>Since 30 g is below 40 g, all of the KCl can dissolve and more could still dissolve. The solution is unsaturated.'
  },
  {
    compound: 'KNO3',
    temperature: 40,
    amountAdded: 80,
    answer: 'supersaturated',
    promptNote: 'This sample was dissolved hot and then cooled carefully to 40 °C without being disturbed.',
    reveal: 'Solubility limit at 40 °C: 63 g per 100 g H2O.<br>Amount dissolved after careful cooling: 80 g.<br>Because more than the usual 40 °C limit is still dissolved, this is a supersaturated solution. It is unstable and can crystallize if disturbed.'
  },
  {
    compound: 'NaCl',
    temperature: 40,
    amountAdded: 20,
    answer: 'unsaturated',
    reveal: 'Solubility limit at 40 °C: about 36 g per 100 g H2O.<br>Amount added: 20 g.<br>Because 20 g is below the solubility limit, more could still dissolve. The solution is unsaturated.'
  },
  {
    compound: 'NaCl',
    temperature: 40,
    amountAdded: 40,
    answer: 'saturated',
    reveal: 'Solubility limit at 40 °C: about 36 g per 100 g H2O.<br>Amount added: 40 g.<br>Because the amount added is above the limit, some stays undissolved and the mixture is saturated.'
  },
  {
    compound: 'NaCl',
    temperature: 40,
    amountAdded: 40,
    answer: 'supersaturated',
    promptNote: 'This sample was dissolved hot and then cooled carefully to 40 °C without being disturbed.',
    reveal: 'Solubility limit at 40 °C: about 36 g per 100 g H2O.<br>Amount dissolved after careful cooling: 40 g.<br>Because more than the normal 40 °C limit remains dissolved, this is supersaturated.'
  },
  {
    compound: 'KCl',
    temperature: 40,
    amountAdded: 55,
    answer: 'saturated',
    reveal: 'Solubility limit at 40 °C: about 40 g per 100 g H2O.<br>Amount added: 55 g.<br>Because the amount added is above the limit, the mixture is saturated with extra solid present.'
  },
  {
    compound: 'KCl',
    temperature: 40,
    amountAdded: 55,
    answer: 'supersaturated',
    promptNote: 'This sample was dissolved hot and then cooled carefully to 40 °C without being disturbed.',
    reveal: 'Solubility limit at 40 °C: about 40 g per 100 g H2O.<br>Amount dissolved after careful cooling: 55 g.<br>Because more than the usual limit remains dissolved, the solution is supersaturated.'
  },
  {
    compound: 'KNO3',
    temperature: 40,
    amountAdded: 40,
    answer: 'unsaturated',
    reveal: 'Solubility limit at 40 °C: 63 g per 100 g H2O.<br>Amount added: 40 g.<br>Since 40 g is below 63 g, more KNO3 could still dissolve. The solution is unsaturated.'
  },
  {
    compound: 'KCl',
    temperature: 40,
    amountAdded: 40,
    answer: 'saturated',
    reveal: 'Solubility limit at 40 °C: about 40 g per 100 g H2O.<br>Amount added: 40 g.<br>Because the amount added is right at the limit, the solution is saturated.'
  },
  {
    compound: 'NaCl',
    temperature: 40,
    amountAdded: 36,
    answer: 'saturated',
    reveal: 'Solubility limit at 40 °C: about 36 g per 100 g H2O.<br>Amount added: 36 g.<br>That matches the solubility limit, so the solution is saturated.'
  },
  {
    compound: 'KNO3',
    temperature: 40,
    amountAdded: 63,
    answer: 'saturated',
    reveal: 'Solubility limit at 40 °C: 63 g per 100 g H2O.<br>Amount added: 63 g.<br>That matches the solubility limit exactly, so the solution is saturated.'
  }
];

const SOL_FEEDBACK = {
  correct: {
    unsaturated: 'Right — the amount added is below the solubility limit at this temperature, so the solution is unsaturated and more solute could still dissolve.',
    saturated: 'Right — the amount added is above the solubility limit at 40 °C, so the solution is saturated and extra KNO3 stays undissolved.',
    supersaturated: 'Right — the sample was dissolved hot and cooled carefully, so more than the usual limit is still dissolved at 40 °C. That makes it supersaturated.'
  },
  incorrect: {
    unsaturated: 'Not quite — first compare the amount added with the solubility limit at the stated temperature. If the amount is below the limit, the solution is unsaturated.',
    saturated: 'Not quite — first compare the amount added with the solubility limit at the stated temperature. If the amount is above the limit, the mixture is saturated with extra solid present.',
    supersaturated: 'Not quite — check the special condition in the prompt. If a solution was dissolved hot and cooled carefully, it can hold more than the usual limit and become supersaturated.'
  }
};

let currentSolScenarioIndex = 0;
let currentSolSelection = '';
let solHasChecked = false;

function getCurveValue(compound, temp) {
  const pts = SOL_DATA[compound].pts;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[i + 1];
    if (temp >= x1 && temp <= x2) {
      const t = (temp - x1) / (x2 - x1);
      return y1 + t * (y2 - y1);
    }
  }
  return pts[pts.length - 1][1];
}

function drawSolChart() {
  const cv = document.getElementById('solCanvas');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  const pad = {l:55, r:20, t:20, b:45};
  const pw = W - pad.l - pad.r, ph = H - pad.t - pad.b;
  const xMin=0, xMax=100, yMin=0, yMax=250;
  function tx(v){ return pad.l + (v-xMin)/(xMax-xMin)*pw; }
  function ty(v){ return pad.t + (1-(v-yMin)/(yMax-yMin))*ph; }
  const scenario = SOLUBILITY_SCENARIOS[currentSolScenarioIndex];
  const dat = SOL_DATA[scenario.compound];
  const curveVal = getCurveValue(scenario.compound, scenario.temperature);

  ctx.clearRect(0,0,W,H);
  ctx.fillStyle='#f8fafc'; ctx.fillRect(0,0,W,H);

  // grid
  ctx.strokeStyle='#e2e8f0'; ctx.lineWidth=1;
  for(let x=0;x<=100;x+=20){ ctx.beginPath();ctx.moveTo(tx(x),pad.t);ctx.lineTo(tx(x),pad.t+ph);ctx.stroke(); }
  for(let y=0;y<=250;y+=50){ ctx.beginPath();ctx.moveTo(pad.l,ty(y));ctx.lineTo(pad.l+pw,ty(y));ctx.stroke(); }

  // axes labels
  ctx.fillStyle='#64748b'; ctx.font='12px DM Sans,sans-serif'; ctx.textAlign='center';
  for(let x=0;x<=100;x+=20) ctx.fillText(x+'°C', tx(x), pad.t+ph+18);
  ctx.textAlign='right'; ctx.textBaseline='middle';
  for(let y=0;y<=250;y+=50) ctx.fillText(y, pad.l-6, ty(y));
  ctx.save(); ctx.translate(14, pad.t+ph/2); ctx.rotate(-Math.PI/2);
  ctx.textAlign='center'; ctx.fillText(formatPlainChemLabel('g solute / 100 g H2O'), 0, 0);
  ctx.restore();
  ctx.textAlign='center'; ctx.textBaseline='alphabetic';
  ctx.fillText('Temperature (°C)', pad.l+pw/2, H-5);

  ctx.strokeStyle = dat.color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  dat.pts.forEach(([x, y], i) => { i === 0 ? ctx.moveTo(tx(x), ty(y)) : ctx.lineTo(tx(x), ty(y)); });
  ctx.stroke();

  ctx.fillStyle = dat.color;
  ctx.font = 'bold 12px DM Sans,sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(formatPlainChemLabel(scenario.compound), tx(dat.pts[dat.pts.length - 1][0]) - 8, ty(dat.pts[dat.pts.length - 1][1]) - 8);

  ctx.setLineDash([6,4]);
  ctx.strokeStyle = '#a78bfa';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(tx(scenario.temperature), pad.t);
  ctx.lineTo(tx(scenario.temperature), pad.t + ph);
  ctx.stroke();
  ctx.fillStyle = '#5b21b6';
  ctx.font = '11px DM Mono,monospace';
  ctx.textAlign = 'left';
  ctx.fillText(scenario.temperature + '°C', tx(scenario.temperature) + 4, pad.t + 14);
  ctx.setLineDash([]);

  if (solHasChecked) {
    ctx.setLineDash([6,4]);
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(pad.l, ty(scenario.amountAdded));
    ctx.lineTo(pad.l + pw, ty(scenario.amountAdded));
    ctx.stroke();
    ctx.fillStyle = '#92400e';
    ctx.font = '11px DM Mono,monospace';
    ctx.textAlign = 'left';
    ctx.fillText('Amount added: ' + scenario.amountAdded + ' g', pad.l + 4, ty(scenario.amountAdded) - 4);
    ctx.setLineDash([]);
  }

  ctx.beginPath();
  ctx.arc(tx(scenario.temperature), ty(curveVal), 5, 0, Math.PI * 2);
  ctx.fillStyle = dat.color;
  ctx.fill();
}

function setChoiceStyles(buttons, selectedValue, locked) {
  buttons.forEach(btn => {
    const isSelected = btn.dataset.choice === selectedValue;
    btn.classList.toggle('active', isSelected);
    btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    btn.disabled = !!locked;
  });
}

function showFeedback(node, isCorrect, text) {
  if (!node) return;
  let state = isCorrect ? 'correct' : 'incorrect';
  if (/click Check\.?$|first\.?$/i.test(text)) state = 'pending';
  node.dataset.state = state;
  node.innerHTML = normalizeNotationHtml(text);
}

function normalizeNotationHtml(text) {
  if (!text) return text;
  return text
    .replace(/C₁|C1/g, 'C<sub>1</sub>')
    .replace(/C₂|C2/g, 'C<sub>2</sub>')
    .replace(/V₁|V1/g, 'V<sub>1</sub>')
    .replace(/V₂|V2/g, 'V<sub>2</sub>')
    .replace(/ΔT<sub>f<\/sub>/g, 'ΔT<sub>f</sub>')
    .replace(/ΔT<sub>b<\/sub>/g, 'ΔT<sub>b</sub>')
    .replace(/H₂O|H2O/g, 'H<span class="chem-sub">2</span>O')
    .replace(/KNO₃|KNO3/g, 'KNO<span class="chem-sub">3</span>')
    .replace(/NaNO₃|NaNO3/g, 'NaNO<span class="chem-sub">3</span>')
    .replace(/Fe\(NO₃\)₃|Fe\(NO3\)3/g, 'Fe(NO<span class="chem-sub">3</span>)<span class="chem-sub">3</span>')
    .replace(/KMnO₄|KMnO4/g, 'KMnO<span class="chem-sub">4</span>')
    .replace(/CuSO₄|CuSO4/g, 'CuSO<span class="chem-sub">4</span>')
    .replace(/KClO₃|KClO3/g, 'KClO<span class="chem-sub">3</span>')
    .replace(/NH₄Cl|NH4Cl/g, 'NH<span class="chem-sub">4</span>Cl')
    .replace(/Ce₂\(SO₄\)₃|Ce2\(SO4\)3/g, 'Ce<span class="chem-sub">2</span>(SO<span class="chem-sub">4</span>)<span class="chem-sub">3</span>')
    .replace(/CaCl₂|CaCl2/g, 'CaCl<span class="chem-sub">2</span>')
    .replace(/MgCl₂|MgCl2/g, 'MgCl<span class="chem-sub">2</span>')
    .replace(/AlCl₃|AlCl3/g, 'AlCl<span class="chem-sub">3</span>')
    .replace(/Ca\(NO₃\)₂|Ca\(NO3\)2/g, 'Ca(NO<span class="chem-sub">3</span>)<span class="chem-sub">2</span>')
    .replace(/Na⁺|Na\+/g, '<span class="ion-group">Na<span class="chem-charge">+</span></span>')
    .replace(/Cl⁻|Cl-/g, '<span class="ion-group">Cl<span class="chem-charge">-</span></span>')
    .replace(/NO₃⁻|NO3-/g, '<span class="ion-group">NO<span class="chem-sub">3</span><span class="chem-charge">-</span></span>');
}

function formatPlainChemLabel(text) {
  return text
    .replace(/KNO₃/g, 'KNO3')
    .replace(/NaNO₃/g, 'NaNO3')
    .replace(/KClO₃/g, 'KClO3')
    .replace(/NH₄Cl/g, 'NH4Cl')
    .replace(/Ce₂\(SO₄\)₃/g, 'Ce2(SO4)3')
    .replace(/H₂O/g, 'H2O')
    .replace(/Na⁺/g, 'Na+')
    .replace(/Cl⁻/g, 'Cl-')
    .replace(/NO₃⁻/g, 'NO3-');
}

function initSolubilityTool() {
  const scenarioText = document.getElementById('solScenarioText');
  const choiceButtons = Array.from(document.querySelectorAll('#solChoiceGroup [data-choice]'));
  const checkBtn = document.getElementById('solCheckBtn');
  const revealBtn = document.getElementById('solRevealBtn');
  const nextBtn = document.getElementById('solNextBtn');
  const feedback = document.getElementById('solFeedback');
  const revealBox = document.getElementById('solRevealBox');
  const revealText = document.getElementById('solRevealText');
  if (!scenarioText || !checkBtn || !revealBtn || !nextBtn || !feedback || !revealBox || !revealText) return;

  function loadScenario() {
    const scenario = SOLUBILITY_SCENARIOS[currentSolScenarioIndex];
    currentSolSelection = '';
    solHasChecked = false;
    scenarioText.innerHTML = normalizeNotationHtml(`At ${scenario.temperature} °C, ${scenario.amountAdded} g of ${scenario.compound} is mixed with 100 g of water. ${scenario.promptNote ? `<br><em>${scenario.promptNote}</em>` : ''}`);
    feedback.dataset.state = 'pending';
    feedback.innerHTML = 'Choose one classification, then click Check.';
    revealBox.hidden = true;
    const supportBox = document.getElementById('solSupport');
    if (supportBox) supportBox.hidden = true;
    revealText.innerHTML = '';
    revealBtn.disabled = true;
    nextBtn.disabled = true;
    setChoiceStyles(choiceButtons, currentSolSelection, false);
    drawSolChart();
  }

  choiceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (solHasChecked) return;
      currentSolSelection = btn.dataset.choice;
      setChoiceStyles(choiceButtons, currentSolSelection, false);
    });
  });

  checkBtn.addEventListener('click', () => {
    const scenario = SOLUBILITY_SCENARIOS[currentSolScenarioIndex];
    if (!currentSolSelection) {
      showFeedback(feedback, false, 'Pick one classification first, then click Check.');
      return;
    }
    solHasChecked = true;
    setChoiceStyles(choiceButtons, currentSolSelection, true);
    const isCorrect = currentSolSelection === scenario.answer;
    showFeedback(feedback, isCorrect, isCorrect ? SOL_FEEDBACK.correct[scenario.answer] : SOL_FEEDBACK.incorrect[scenario.answer]);
    revealBtn.disabled = false;
    nextBtn.disabled = false;
    drawSolChart();
  });

  revealBtn.addEventListener('click', () => {
    if (!solHasChecked) return;
    revealBox.hidden = false;
    const supportBox = document.getElementById('solSupport');
    if (supportBox) supportBox.hidden = false;
    revealText.innerHTML = normalizeNotationHtml(SOLUBILITY_SCENARIOS[currentSolScenarioIndex].reveal);
  });

  nextBtn.addEventListener('click', () => {
    currentSolScenarioIndex = (currentSolScenarioIndex + 1) % SOLUBILITY_SCENARIOS.length;
    loadScenario();
  });

  loadScenario();
}

function initChoiceTool(rootId, config) {
  const root = document.getElementById(rootId);
  if (!root) return;
  const choiceButtons = Array.from(root.querySelectorAll('[data-choice]'));
  const checkBtn = root.querySelector('[data-check]');
  const revealBtn = root.querySelector('[data-reveal]');
  const nextBtn = root.querySelector('[data-next]');
  const feedback = root.querySelector('[data-feedback]');
  const revealBox = root.querySelector('[data-reveal-box]');
  const revealList = root.querySelector('[data-reveal-list]');
  const supportBox = root.querySelector('[data-support-box]');
  const supportList = root.querySelector('[data-support-list]');
  const titleNode = root.querySelector('[id$="Title"]');
  const hintNode = root.querySelector('[id$="Hint"]');
  const labelNode = root.querySelector('[id$="Label"]');
  const scenarioNode = root.querySelector('[id$="Scenario"]');
  const scenarios = config.scenarios || [];
  let selection = '';
  let checked = false;
  let currentIndex = 0;

  function shuffleArray(items) {
    const shuffled = items.slice();
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function pickNextIndex(items, current) {
    if (!items.length) return 0;
    let next = Math.floor(Math.random() * items.length);
    if (items.length > 1) {
      while (next === current) next = Math.floor(Math.random() * items.length);
    }
    return next;
  }

  function setList(node, items) {
    if (!node) return;
    node.innerHTML = items.map(item => `<li>${normalizeNotationHtml(item)}</li>`).join('');
  }

  function loadScenario() {
    const scenario = scenarios[currentIndex];
    if (!scenario) return;
    selection = '';
    checked = false;
    if (titleNode) titleNode.innerHTML = normalizeNotationHtml(scenario.title);
    if (hintNode) hintNode.innerHTML = normalizeNotationHtml(scenario.hint);
    if (labelNode) labelNode.textContent = scenario.label || 'Scenario:';
    if (scenarioNode) scenarioNode.innerHTML = normalizeNotationHtml(scenario.prompt);
    shuffleArray(scenario.choices).forEach((choice, index) => {
      const btn = choiceButtons[index];
      if (choice) {
        btn.hidden = false;
        btn.innerHTML = normalizeNotationHtml(choice.label);
        btn.dataset.choice = choice.value;
      } else {
        btn.hidden = true;
      }
    });
    choiceButtons.slice(scenario.choices.length).forEach((btn) => { btn.hidden = true; });
    setChoiceStyles(choiceButtons.filter(btn => !btn.hidden), selection, false);
    if (feedback) {
      feedback.dataset.state = 'pending';
      feedback.innerHTML = scenario.pending || 'Choose one answer, then click Check.';
    }
    if (revealBox) revealBox.hidden = true;
    if (supportBox) supportBox.hidden = true;
    if (revealBtn) revealBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = true;
    setList(revealList, []);
    setList(supportList, scenario.support || []);
  }

  choiceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (checked || btn.hidden) return;
      selection = btn.dataset.choice;
      setChoiceStyles(choiceButtons.filter(button => !button.hidden), selection, false);
    });
  });

  checkBtn?.addEventListener('click', () => {
    const scenario = scenarios[currentIndex];
    if (!selection || !scenario) {
      showFeedback(feedback, false, 'Choose one answer first, then click Check.');
      return;
    }
    checked = true;
    setChoiceStyles(choiceButtons.filter(btn => !btn.hidden), selection, true);
    const isCorrect = selection === scenario.answer;
    showFeedback(feedback, isCorrect, isCorrect ? scenario.correct : scenario.incorrect);
    if (revealBtn) revealBtn.disabled = false;
    if (nextBtn) nextBtn.disabled = false;
  });

  revealBtn?.addEventListener('click', () => {
    const scenario = scenarios[currentIndex];
    if (!checked || !revealBox || !scenario) return;
    revealBox.hidden = false;
    if (supportBox) supportBox.hidden = false;
    setList(revealList, scenario.reveal);
  });

  nextBtn?.addEventListener('click', () => {
    if (!scenarios.length) return;
    currentIndex = pickNextIndex(scenarios, currentIndex);
    loadScenario();
  });

  currentIndex = pickNextIndex(scenarios, -1);
  loadScenario();
}

function initUnit13Visuals() {
  drawParticles();
  initSolubilityTool();
  initChoiceTool('unitChoiceTool', {
    scenarios: [
      {
        title: 'Choose the concentration unit that fits.',
        hint: 'Decide whether the denominator should be liters of solution or kilograms of solvent before you choose.',
        label: 'Scenario:',
        prompt: 'You are finding freezing-point depression for a salt solution. Which concentration unit should you use?',
        choices: [
          { value: 'a', label: 'Use molarity (M)' },
          { value: 'b', label: 'Use molality (m)' }
        ],
        answer: 'b',
        pending: 'Choose one concentration unit, then click Check.',
        correct: 'Right — freezing-point depression uses molality because it is based on kilograms of solvent, not liters of solution.',
        incorrect: 'Not quite — molarity uses liters of solution, but this formula depends on kilograms of solvent. Choose molality next.',
        reveal: [
          'Molarity = moles per liter of solution.',
          'Molality = moles per kilogram of solvent.',
          'Freezing-point depression uses molality because the formula is based on amount of solute per mass of solvent.'
        ],
        support: [
          'M = mol/L solution',
          'm = mol/kg solvent'
        ]
      },
      {
        title: 'Choose the concentration unit that fits.',
        hint: 'Look at what the stoichiometry step gives you first. Reaction problems in solution usually start from moles per liter.',
        label: 'Problem:',
        prompt: 'You need the moles of NaOH delivered by 35.0 mL of 0.250 M NaOH in a neutralization reaction. Which concentration unit fits the setup?',
        choices: [
          { value: 'a', label: 'Use molarity (M)' },
          { value: 'b', label: 'Use molality (m)' }
        ],
        answer: 'a',
        pending: 'Choose one concentration unit, then click Check.',
        correct: 'Right — solution stoichiometry starts from molarity because the problem gives liters or milliliters of solution.',
        incorrect: 'Not quite — this setup uses volume of solution, so molarity is the concentration unit that converts directly to moles.',
        reveal: [
          'Molarity connects moles of solute to liters of solution.',
          '35.0 mL can be converted to liters, then multiplied by molarity to get moles.',
          'Molality would require kilograms of solvent, which this problem does not give.'
        ],
        support: [
          'For reaction stoichiometry in solution, the common first move is mol = M × L.',
          'Molality is mainly used for colligative-property relationships.'
        ]
      },
      {
        title: 'Choose the concentration unit that fits.',
        hint: 'Check which formula is being used. Osmotic pressure depends on dissolved particles per liter of solution.',
        label: 'Scenario:',
        prompt: 'You are calculating osmotic pressure with π = iMRT for an IV solution. Which concentration unit belongs in the formula?',
        choices: [
          { value: 'a', label: 'Use molarity (M)' },
          { value: 'b', label: 'Use molality (m)' }
        ],
        answer: 'a',
        pending: 'Choose one concentration unit, then click Check.',
        correct: 'Right — osmotic pressure uses molarity in the equation π = iMRT.',
        incorrect: 'Not quite — osmotic pressure is calculated from molarity, not molality.',
        reveal: [
          'The osmotic-pressure equation is π = iMRT, so it uses molarity directly.',
          'That means dissolved particles are counted per liter of solution.',
          'Molality is used for freezing-point depression and boiling-point elevation instead.'
        ],
        support: [
          'π = iMRT uses M.',
          'ΔTf = Kfmi and ΔTb = Kbmi use m.'
        ]
      },
      {
        title: 'Choose the concentration unit that fits.',
        hint: 'Freezing-point depression depends on kilograms of solvent, not liters of solution.',
        label: 'Scenario:',
        prompt: 'You are using ΔT<sub>f</sub> = K<sub>f</sub>mi for an antifreeze problem. Which concentration unit belongs in the formula?',
        choices: [{ value: 'a', label: 'Use molarity (M)' }, { value: 'b', label: 'Use molality (m)' }],
        answer: 'b',
        pending: 'Choose one concentration unit, then click Check.',
        correct: 'Right — freezing-point depression uses molality.',
        incorrect: 'Not quite — ΔT<sub>f</sub> uses molality because it is based on kilograms of solvent.',
        reveal: ['ΔT<sub>f</sub> = K<sub>f</sub>mi uses molality.', 'Molality counts moles per kilogram of solvent.', 'That is why molality fits this setup.'],
        support: ['Freezing-point depression uses m.', 'Molality is based on kg of solvent.']
      },
      {
        title: 'Choose the concentration unit that fits.',
        hint: 'If the problem gives volume of solution and asks for moles, think mol/L.',
        label: 'Problem:',
        prompt: 'A reaction uses 0.750 L of 0.200 M HCl. Which concentration unit converts directly to moles of HCl?',
        choices: [{ value: 'a', label: 'Use molarity (M)' }, { value: 'b', label: 'Use molality (m)' }],
        answer: 'a',
        pending: 'Choose one concentration unit, then click Check.',
        correct: 'Right — molarity converts liters of solution directly to moles.',
        incorrect: 'Not quite — liters of solution point to molarity, not molality.',
        reveal: ['Molarity means mol/L of solution.', '0.750 L can be multiplied by 0.200 mol/L.', 'That gives moles directly.'],
        support: ['M = mol/L solution', 'Use M when solution volume is given.']
      },
      {
        title: 'Choose the concentration unit that fits.',
        hint: 'Boiling-point elevation uses the same concentration type as freezing-point depression.',
        label: 'Scenario:',
        prompt: 'You are using ΔT<sub>b</sub> = K<sub>b</sub>mi. Which concentration unit belongs in the formula?',
        choices: [{ value: 'a', label: 'Use molarity (M)' }, { value: 'b', label: 'Use molality (m)' }],
        answer: 'b',
        pending: 'Choose one concentration unit, then click Check.',
        correct: 'Right — boiling-point elevation uses molality.',
        incorrect: 'Not quite — ΔT<sub>b</sub> uses molality because it is based on kilograms of solvent.',
        reveal: ['ΔT<sub>b</sub> = K<sub>b</sub>mi uses molality.', 'Molality is moles per kilogram of solvent.', 'That is the required concentration unit here.'],
        support: ['ΔT<sub>b</sub> uses m.', 'Colligative-property formulas often use molality.']
      },
      {
        title: 'Choose the concentration unit that fits.',
        hint: 'Neutralization and precipitation setups in solution usually start from moles per liter of solution.',
        label: 'Problem:',
        prompt: 'You need the moles of HCl in 22.0 mL of 0.150 M HCl for a solution stoichiometry calculation. Which unit fits?',
        choices: [{ value: 'a', label: 'Use molarity (M)' }, { value: 'b', label: 'Use molality (m)' }],
        answer: 'a',
        pending: 'Choose one concentration unit, then click Check.',
        correct: 'Right — solution stoichiometry setups start from molarity when solution volume is given.',
        incorrect: 'Not quite — milliliters of solution point to molarity.',
        reveal: ['Convert 22.0 mL to liters.', 'Then multiply by molarity to get moles.', 'Molality would require kilograms of solvent, which are not given.'],
        support: ['Solution stoichiometry commonly uses M × L.', 'Molality is not used when the given quantity is solution volume.']
      },
      {
        title: 'Choose the concentration unit that fits.',
        hint: 'If the formula shown is π = iMRT, use the concentration symbol that appears in the equation.',
        label: 'Scenario:',
        prompt: 'A dialysis problem uses the osmotic-pressure equation π = iMRT. Which concentration unit should you use?',
        choices: [{ value: 'a', label: 'Use molarity (M)' }, { value: 'b', label: 'Use molality (m)' }],
        answer: 'a',
        pending: 'Choose one concentration unit, then click Check.',
        correct: 'Right — osmotic pressure uses molarity.',
        incorrect: 'Not quite — the formula itself shows M, which is molarity.',
        reveal: ['The equation is π = iMRT.', 'That equation uses M, not m.', 'So the concentration unit is molarity.'],
        support: ['π = iMRT uses M.', 'M means molarity.']
      },
      {
        title: 'Choose the concentration unit that fits.',
        hint: 'Mass of solvent is the key clue for molality.',
        label: 'Scenario:',
        prompt: 'A solution contains 0.40 mol solute dissolved in 1.5 kg water. Which concentration unit is built from that information?',
        choices: [{ value: 'a', label: 'Use molarity (M)' }, { value: 'b', label: 'Use molality (m)' }],
        answer: 'b',
        pending: 'Choose one concentration unit, then click Check.',
        correct: 'Right — kilograms of solvent point directly to molality.',
        incorrect: 'Not quite — kilograms of solvent are the clue for molality.',
        reveal: ['Molality is moles per kilogram of solvent.', 'This problem gives moles of solute and kilograms of solvent directly.', 'So molality is the matching unit.'],
        support: ['m = mol/kg solvent', 'Use m when kg of solvent is given.']
      },
      {
        title: 'Choose the concentration unit that fits.',
        hint: 'A concentration used to prepare solution stoichiometry from liters is molarity.',
        label: 'Problem:',
        prompt: 'You are preparing 0.500 L of 0.300 M NaCl solution and want to find the moles of NaCl needed. Which unit fits?',
        choices: [{ value: 'a', label: 'Use molarity (M)' }, { value: 'b', label: 'Use molality (m)' }],
        answer: 'a',
        pending: 'Choose one concentration unit, then click Check.',
        correct: 'Right — liters of solution and moles of solute point to molarity.',
        incorrect: 'Not quite — liters of solution are the clue for molarity.',
        reveal: ['Molarity means mol/L of solution.', '0.500 L can be used directly with 0.300 M.', 'That makes molarity the correct concentration unit.'],
        support: ['M = mol/L solution', 'Use M with liters of solution.']
      },
      {
        title: 'Choose the concentration unit that fits.',
        hint: 'Colligative-property formulas based on K<sub>f</sub> or K<sub>b</sub> use molality.',
        label: 'Problem:',
        prompt: 'A problem asks for the concentration needed in a boiling-point-elevation equation. Which unit should you choose?',
        choices: [{ value: 'a', label: 'Use molarity (M)' }, { value: 'b', label: 'Use molality (m)' }],
        answer: 'b',
        pending: 'Choose one concentration unit, then click Check.',
        correct: 'Right — boiling-point elevation uses molality.',
        incorrect: 'Not quite — boiling-point elevation belongs with molality, not molarity.',
        reveal: ['Boiling-point elevation uses ΔT<sub>b</sub> = K<sub>b</sub>mi.', 'That equation uses molality.', 'So the correct concentration unit is m.'],
        support: ['K<sub>b</sub> formulas use m.', 'Molality is tied to kg of solvent.']
      },
      {
        title: 'Choose the concentration unit that fits.',
        hint: 'When the setup is moles dissolved in a known mass of solvent, think molality.',
        label: 'Scenario:',
        prompt: 'A lab prep dissolves 0.250 mol glucose in 0.800 kg water. Which concentration unit matches that information directly?',
        choices: [{ value: 'a', label: 'Use molarity (M)' }, { value: 'b', label: 'Use molality (m)' }],
        answer: 'b',
        pending: 'Choose one concentration unit, then click Check.',
        correct: 'Right — moles of solute with kilograms of solvent point directly to molality.',
        incorrect: 'Not quite — this setup gives kilograms of solvent, which is the clue for molality.',
        reveal: ['Molality is defined as moles of solute per kilogram of solvent.', 'This problem gives both of those quantities directly.', 'So molality is the matching concentration unit.'],
        support: ['m = mol/kg solvent', 'Kilograms of solvent point to molality.']
      }
    ]
  });
  initChoiceTool('dilutionTool', {
    scenarios: [
      {
        title: 'Choose the correct final volume before using the dilution equation.',
        hint: 'In dilution problems, V₂ is the final total volume after the solvent has been added.',
        label: 'Scenario:',
        prompt: '50.0 mL of stock solution is diluted by adding 450.0 mL of water. What is the final volume (V₂)?',
        choices: [
          { value: 'a', label: '450.0 mL' },
          { value: 'b', label: '500.0 mL' }
        ],
        answer: 'b',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — V₂ is the final total volume after dilution, so you add the starting solution volume and the water added.',
        incorrect: 'Not quite — 450.0 mL is only the water added. V₂ is the total final volume of the diluted solution.',
        reveal: [
          'V₂ means the final total volume of the diluted solution.',
          'Final volume = original solution volume + added water volume.',
          'V₂ = 50.0 mL + 450.0 mL = 500.0 mL.'
        ],
        support: [
          'C₁V₁ = C₂V₂',
          'V₂ = final volume, not added water'
        ]
      },
      {
        title: 'Choose the correct final volume before using the dilution equation.',
        hint: 'Think about what the volumetric flask contains after the dilution is complete.',
        label: 'Scenario:',
        prompt: '25.0 mL of stock CuSO₄ solution is placed in a flask and 175.0 mL of water is added. What is the final volume (V₂)?',
        choices: [
          { value: 'a', label: '175.0 mL' },
          { value: 'b', label: '200.0 mL' }
        ],
        answer: 'b',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — the diluted solution now contains both the original 25.0 mL and the 175.0 mL of added water, for a total of 200.0 mL.',
        incorrect: 'Not quite — 175.0 mL is only the water added. The final solution volume includes the original solution too.',
        reveal: [
          'Start with the original solution volume already in the flask.',
          'Then add the volume of water poured in.',
          '25.0 mL + 175.0 mL = 200.0 mL total.'
        ],
        support: [
          'Dilution changes concentration by changing total volume.',
          'The amount of solute stays the same before and after dilution.'
        ]
      },
      {
        title: 'Choose the correct final volume before using the dilution equation.',
        hint: 'If a problem says "dilute to the mark," the mark tells you the final total volume.',
        label: 'Problem:',
        prompt: '10.0 mL of concentrated acid is transferred to a 100.0 mL volumetric flask, then water is added to the mark. What is V₂?',
        choices: [
          { value: 'a', label: '90.0 mL' },
          { value: 'b', label: '100.0 mL' }
        ],
        answer: 'b',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — the final volume is the flask volume at the mark: 100.0 mL.',
        incorrect: 'Not quite — 90.0 mL would only be the approximate water added. V₂ is the total volume in the flask after filling to the mark.',
        reveal: [
          'A volumetric flask is calibrated to a final total volume.',
          '“Add water to the mark” means the diluted solution reaches that calibration volume.',
          'So V₂ = 100.0 mL.'
        ],
        support: [
          'In volumetric-flask language, "to the mark" means final total volume.',
          'Do not subtract the stock volume from the flask volume when identifying V₂.'
        ]
      },
      {
        title: 'Choose the correct final volume before using the dilution equation.',
        hint: 'The final volume is the whole diluted mixture, not just the solvent you poured in.',
        label: 'Scenario:',
        prompt: '40.0 mL of stock KNO3 solution is diluted by adding 160.0 mL of water. What is the final volume (V₂)?',
        choices: [
          { value: 'a', label: '200.0 mL' },
          { value: 'b', label: '160.0 mL' }
        ],
        answer: 'a',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — the final volume includes both the original 40.0 mL and the 160.0 mL of added water.',
        incorrect: 'Not quite — 160.0 mL is only the water added. V₂ is the total diluted volume.',
        reveal: [
          'Final total volume = starting solution volume + water added.',
          '40.0 mL + 160.0 mL = 200.0 mL.',
          'That total is the V₂ used in the dilution equation.'
        ],
        support: [
          'V₂ = total diluted volume',
          'Added solvent alone is not V₂'
        ]
      },
      {
        title: 'Choose the correct final volume before using the dilution equation.',
        hint: 'If the flask size is given, the mark sets the final volume.',
        label: 'Problem:',
        prompt: '15.0 mL of stock dye solution is transferred to a 250.0 mL volumetric flask and diluted to the mark. What is V₂?',
        choices: [
          { value: 'a', label: '235.0 mL' },
          { value: 'b', label: '250.0 mL' }
        ],
        answer: 'b',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — the flask volume at the mark is the final total volume.',
        incorrect: 'Not quite — 235.0 mL would only estimate the water added. V₂ is the total volume after dilution.',
        reveal: [
          'A volumetric flask is calibrated to one final total volume.',
          '“Diluted to the mark” means the solution is brought to that calibration line.',
          'So V₂ = 250.0 mL.'
        ],
        support: [
          'To the mark = final total volume',
          'Use the flask size for V₂'
        ]
      },
      {
        title: 'Choose the correct final volume before using the dilution equation.',
        hint: 'Add the stock solution volume and the added water to get the diluted total.',
        label: 'Scenario:',
        prompt: '80.0 mL of vinegar sample is diluted by adding 320.0 mL of water. What is V₂?',
        choices: [
          { value: 'a', label: '320.0 mL' },
          { value: 'b', label: '400.0 mL' }
        ],
        answer: 'b',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — 80.0 mL plus 320.0 mL gives a final total volume of 400.0 mL.',
        incorrect: 'Not quite — 320.0 mL is only the added water. V₂ is the total solution volume afterward.',
        reveal: [
          'The amount of solute stays the same during dilution.',
          'What changes is the total volume of the solution.',
          '80.0 mL + 320.0 mL = 400.0 mL, so V₂ = 400.0 mL.'
        ],
        support: [
          'C₁V₁ = C₂V₂',
          'Use total final volume for V₂'
        ]
      },
      {
        title: 'Choose the correct final volume before using the dilution equation.',
        hint: 'Read the wording carefully: “make 125.0 mL total” already tells you the final volume.',
        label: 'Problem:',
        prompt: 'A student uses 5.00 mL of stock indicator solution and adds water until the total solution volume is 125.0 mL. What is V₂?',
        choices: [
          { value: 'a', label: '120.0 mL' },
          { value: 'b', label: '125.0 mL' }
        ],
        answer: 'b',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — the problem directly states the total final solution volume.',
        incorrect: 'Not quite — 120.0 mL would be the water added, not the final diluted volume.',
        reveal: [
          'The phrase “total solution volume” means final overall volume.',
          'That full total is what V₂ represents in the dilution equation.',
          'So V₂ = 125.0 mL.'
        ],
        support: [
          'Final total volume goes in the V₂ spot.',
          'Do not confuse water added with V₂.'
        ]
      },
      {
        title: 'Choose the correct final volume before using the dilution equation.',
        hint: 'A transfer into a larger flask means the final mark is the total volume after dilution.',
        label: 'Scenario:',
        prompt: '20.0 mL of stock NaOH is pipetted into a 150.0 mL volumetric flask, then diluted to the mark. What is the final volume (V₂)?',
        choices: [
          { value: 'a', label: '150.0 mL' },
          { value: 'b', label: '130.0 mL' }
        ],
        answer: 'a',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — the volumetric flask mark sets the final total volume at 150.0 mL.',
        incorrect: 'Not quite — 130.0 mL would only be the water added. V₂ is the full flask volume at the mark.',
        reveal: [
          'The pipetted stock volume is part of the final mixture.',
          'Water is added only until the total reaches the flask mark.',
          'That makes V₂ = 150.0 mL.'
        ],
        support: [
          'Volumetric flasks define final volume.',
          'V₂ is not the added water amount.'
        ]
      },
      {
        title: 'Choose the correct final volume before using the dilution equation.',
        hint: 'Combine the original volume and the added solvent to get the total.',
        label: 'Scenario:',
        prompt: '12.5 mL of iodine solution is diluted by adding 37.5 mL of water. What is V₂?',
        choices: [
          { value: 'a', label: '50.0 mL' },
          { value: 'b', label: '37.5 mL' }
        ],
        answer: 'a',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — the final diluted volume is 50.0 mL.',
        incorrect: 'Not quite — 37.5 mL is only the water portion, not the total solution volume.',
        reveal: [
          'Add the original solution and the water added.',
          '12.5 mL + 37.5 mL = 50.0 mL.',
          'Use that total as V₂.'
        ],
        support: [
          'V₂ = total final solution',
          'Dilution keeps solute amount constant'
        ]
      },
      {
        title: 'Choose the correct final volume before using the dilution equation.',
        hint: 'If the question says “final volume of 300.0 mL,” use that exact value.',
        label: 'Problem:',
        prompt: '30.0 mL of stock Fe(NO₃)₃ solution is diluted until the final volume is 300.0 mL. What is V₂?',
        choices: [
          { value: 'a', label: '270.0 mL' },
          { value: 'b', label: '300.0 mL' }
        ],
        answer: 'b',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — the final volume is given directly as 300.0 mL.',
        incorrect: 'Not quite — 270.0 mL would only be the amount of water added, not the final diluted volume.',
        reveal: [
          'V₂ represents the final total volume after dilution.',
          'This problem states that total directly.',
          'So V₂ = 300.0 mL.'
        ],
        support: [
          'Use the stated final volume when it is given.',
          'Do not substitute the solvent-only amount.'
        ]
      },
      {
        title: 'Choose the correct final volume before using the dilution equation.',
        hint: 'The total mixture volume is what matters, even when a beaker is used instead of a flask.',
        label: 'Scenario:',
        prompt: '60.0 mL of stock sugar solution is mixed with 240.0 mL of water in a beaker. What is the final volume (V₂)?',
        choices: [
          { value: 'a', label: '240.0 mL' },
          { value: 'b', label: '300.0 mL' }
        ],
        answer: 'b',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — the final volume is the total combined solution volume of 300.0 mL.',
        incorrect: 'Not quite — 240.0 mL is only the water added. V₂ must include the original 60.0 mL too.',
        reveal: [
          'Final volume counts all liquid present after mixing.',
          '60.0 mL + 240.0 mL = 300.0 mL.',
          'That total is V₂ in the dilution equation.'
        ],
        support: [
          'Final total volume is always V₂.',
          'Add original solution and added solvent.'
        ]
      },
      {
        title: 'Choose the correct final volume before using the dilution equation.',
        hint: 'A larger container does not matter by itself; the final marked volume does.',
        label: 'Problem:',
        prompt: '8.00 mL of stock KMnO₄ is transferred into a 50.0 mL volumetric flask and diluted to the mark. What is V₂?',
        choices: [
          { value: 'a', label: '42.0 mL' },
          { value: 'b', label: '50.0 mL' }
        ],
        answer: 'b',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — the final total volume is the flask’s calibrated 50.0 mL.',
        incorrect: 'Not quite — 42.0 mL is only the approximate water added. V₂ is the final total volume in the flask.',
        reveal: [
          'The stock solution volume becomes part of the diluted solution.',
          'Water is added until the total reaches the 50.0 mL mark.',
          'That makes V₂ = 50.0 mL.'
        ],
        support: [
          'Flask mark sets V₂.',
          'V₂ is the total volume after dilution.'
        ]
      }
    ]
  });
  initChoiceTool('colligativeTool', {
    scenarios: [
      {
        title: 'Predict which solution has the larger colligative effect.',
        hint: 'Compare dissolved particle count using both concentration and the van \'t Hoff factor i.',
        label: 'Scenario:',
        prompt: 'Both solutions contain 1.0 mol solute in 1.0 kg water. Which solution has the lower freezing point?',
        choices: [
          { value: 'a', label: '1.0 m glucose' },
          { value: 'b', label: '1.0 m NaCl' }
        ],
        answer: 'b',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — NaCl produces more dissolved particles than glucose at the same molality, so it causes the larger freezing-point depression.',
        incorrect: 'Not quite — compare the number of dissolved particles, not just the compound name. At the same molality, NaCl gives more particles than glucose.',
        reveal: [
          'Glucose stays as 1 particle per formula unit, so i = 1.',
          'NaCl separates into 2 particles per formula unit, so i = 2.',
          'More dissolved particles cause a larger freezing-point depression, so the NaCl solution has the lower freezing point.'
        ],
        support: [
          'glucose: i = 1',
          'NaCl: i = 2',
          'CaCl2: i = 3'
        ]
      },
      {
        title: 'Predict which solution has the larger colligative effect.',
        hint: 'At equal molality, the solution with the larger i value gives the bigger boiling-point elevation.',
        label: 'Scenario:',
        prompt: 'Both solutions are 0.50 m in water. Which solution should have the higher boiling point?',
        choices: [
          { value: 'a', label: '0.50 m NaCl' },
          { value: 'b', label: '0.50 m CaCl2' }
        ],
        answer: 'b',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — CaCl2 produces more dissolved particles than NaCl at the same molality, so the boiling-point elevation is larger.',
        incorrect: 'Not quite — both concentrations are the same, so the deciding factor is how many particles each formula unit makes in solution.',
        reveal: [
          'NaCl gives about 2 dissolved particles per formula unit.',
          'CaCl2 gives about 3 dissolved particles per formula unit.',
          'A larger particle count causes a larger boiling-point elevation, so CaCl2 leads to the higher boiling point.'
        ],
        support: [
          'ΔTb = Kbmi',
          'At the same m, compare i values directly.'
        ]
      },
      {
        title: 'Predict which solution has the larger colligative effect.',
        hint: 'Now compare both concentration and particle count instead of only one of them.',
        label: 'Problem:',
        prompt: 'Which solution should create the larger osmotic pressure at the same temperature?',
        choices: [
          { value: 'a', label: '0.60 M glucose' },
          { value: 'b', label: '0.60 M CaCl2' }
        ],
        answer: 'b',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — the concentrations match, so the larger van \'t Hoff factor controls the comparison and CaCl2 gives the larger osmotic pressure.',
        incorrect: 'Not quite — because the molarity is the same, you need to compare how many dissolved particles each solute produces.',
        reveal: [
          'Osmotic pressure depends on iMRT, so both M and i matter.',
          'Both solutions are 0.60 M, so concentration is tied.',
          'CaCl2 has the larger i value, so it produces the larger osmotic pressure.'
        ],
        support: [
          'For equal M, the larger i gives the larger osmotic pressure.',
          'For equal i, the larger concentration gives the larger effect.'
        ]
      },
      {
        title: 'Predict which solution has the larger colligative effect.',
        hint: 'At the same molality, the solution with more dissolved particles lowers vapor pressure more.',
        label: 'Scenario:',
        prompt: 'Both solutions are 0.80 m in water. Which one should have the lower vapor pressure?',
        choices: [
          { value: 'a', label: '0.80 m sucrose' },
          { value: 'b', label: '0.80 m MgCl2' }
        ],
        answer: 'b',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — MgCl2 produces more dissolved particles than sucrose at the same molality, so it lowers vapor pressure more.',
        incorrect: 'Not quite — the larger vapor-pressure lowering comes from the solution with the larger particle count.',
        reveal: [
          'Sucrose is a nonelectrolyte, so i = 1.',
          'MgCl2 separates into about 3 particles, so i = 3.',
          'More particles create the larger colligative effect, so MgCl2 gives the lower vapor pressure.'
        ],
        support: [
          'Nonelectrolytes: i ≈ 1',
          'MgCl2: i ≈ 3'
        ]
      },
      {
        title: 'Predict which solution has the larger colligative effect.',
        hint: 'If the solutes have the same i value, compare concentration next.',
        label: 'Problem:',
        prompt: 'Which solution should have the lower freezing point?',
        choices: [
          { value: 'a', label: '0.90 m glucose' },
          { value: 'b', label: '0.40 m glucose' }
        ],
        answer: 'a',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — both are glucose, so the higher molality gives the larger freezing-point depression.',
        incorrect: 'Not quite — when the solute is the same, the more concentrated solution shows the larger colligative effect.',
        reveal: [
          'Both solutions use glucose, so both have i = 1.',
          'That means concentration is the deciding factor.',
          '0.90 m glucose creates the larger freezing-point depression and the lower freezing point.'
        ],
        support: [
          'Equal i means compare concentration.',
          'Higher m gives larger ΔTf.'
        ]
      },
      {
        title: 'Predict which solution has the larger colligative effect.',
        hint: 'For boiling-point elevation, compare the product of concentration and particle count.',
        label: 'Scenario:',
        prompt: 'Which solution should have the higher boiling point?',
        choices: [
          { value: 'a', label: '0.30 m CaCl2' },
          { value: 'b', label: '0.30 m NaCl' }
        ],
        answer: 'a',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — at the same molality, CaCl2 has the larger i value and gives the bigger boiling-point elevation.',
        incorrect: 'Not quite — the concentrations match, so the larger i value decides the comparison.',
        reveal: [
          'NaCl has i ≈ 2, while CaCl2 has i ≈ 3.',
          'At equal molality, the larger i produces the larger ΔTb.',
          'So 0.30 m CaCl2 has the higher boiling point.'
        ],
        support: [
          'ΔTb = Kbmi',
          'Compare i when m is the same.'
        ]
      },
      {
        title: 'Predict which solution has the larger colligative effect.',
        hint: 'The same electrolyte at a higher molarity gives the larger osmotic pressure.',
        label: 'Scenario:',
        prompt: 'At the same temperature, which solution should have the larger osmotic pressure?',
        choices: [
          { value: 'a', label: '0.20 M NaNO3' },
          { value: 'b', label: '0.50 M NaNO3' }
        ],
        answer: 'b',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — both solutions use the same solute, so the higher molarity gives the larger osmotic pressure.',
        incorrect: 'Not quite — because the solute is the same in both, the larger molarity gives the larger π value.',
        reveal: [
          'Osmotic pressure follows π = iMRT.',
          'Both solutions have the same i value because they use the same solute.',
          'The 0.50 M solution therefore has the larger osmotic pressure.'
        ],
        support: [
          'For the same solute, compare M directly.',
          'Higher M gives higher π.'
        ]
      },
      {
        title: 'Predict which solution has the larger colligative effect.',
        hint: 'More particles per formula unit can outweigh equal concentration.',
        label: 'Problem:',
        prompt: 'Both solutions are 1.0 m. Which should show the greater freezing-point depression?',
        choices: [
          { value: 'a', label: '1.0 m AlCl3' },
          { value: 'b', label: '1.0 m NaCl' }
        ],
        answer: 'a',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — AlCl3 produces more dissolved particles than NaCl at the same molality.',
        incorrect: 'Not quite — because the molality is the same, the larger particle count gives the larger effect.',
        reveal: [
          'NaCl separates into about 2 particles.',
          'AlCl3 separates into about 4 particles.',
          'The larger i value gives the larger freezing-point depression, so AlCl3 wins.'
        ],
        support: [
          'NaCl: i ≈ 2',
          'AlCl3: i ≈ 4'
        ]
      },
      {
        title: 'Predict which solution has the larger colligative effect.',
        hint: 'If both are nonelectrolytes, only concentration matters.',
        label: 'Scenario:',
        prompt: 'Which solution should have the higher boiling point?',
        choices: [
          { value: 'a', label: '0.25 m urea' },
          { value: 'b', label: '0.70 m urea' }
        ],
        answer: 'b',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — urea is the same nonelectrolyte in both cases, so the higher molality gives the larger boiling-point elevation.',
        incorrect: 'Not quite — with the same nonelectrolyte, the more concentrated solution shows the larger effect.',
        reveal: [
          'Urea is a nonelectrolyte, so i = 1 in both solutions.',
          'That leaves molality as the deciding factor.',
          '0.70 m urea gives the larger ΔTb and therefore the higher boiling point.'
        ],
        support: [
          'Equal i means compare m.',
          'Higher m gives larger ΔTb.'
        ]
      },
      {
        title: 'Predict which solution has the larger colligative effect.',
        hint: 'At equal concentration, the electrolyte with more ions lowers vapor pressure more.',
        label: 'Problem:',
        prompt: 'Both solutions are 0.40 m. Which one should have the lower vapor pressure?',
        choices: [
          { value: 'a', label: '0.40 m KBr' },
          { value: 'b', label: '0.40 m Ca(NO3)2' }
        ],
        answer: 'b',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — Ca(NO3)2 produces more dissolved particles than KBr, so it lowers vapor pressure more.',
        incorrect: 'Not quite — when molality is the same, the larger i value causes the larger vapor-pressure lowering.',
        reveal: [
          'KBr separates into about 2 particles.',
          'Ca(NO3)2 separates into about 3 particles.',
          'More particles mean a stronger colligative effect, so Ca(NO3)2 has the lower vapor pressure.'
        ],
        support: [
          'KBr: i ≈ 2',
          'Ca(NO3)2: i ≈ 3'
        ]
      },
      {
        title: 'Predict which solution has the larger colligative effect.',
        hint: 'Compare both concentration and particle count together.',
        label: 'Scenario:',
        prompt: 'Which solution should create the larger osmotic pressure at the same temperature?',
        choices: [
          { value: 'a', label: '0.30 M CaCl2' },
          { value: 'b', label: '0.50 M glucose' }
        ],
        answer: 'a',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — CaCl2 produces about 3 particles, so 0.30 × 3 gives a larger particle concentration than 0.50 × 1 for glucose.',
        incorrect: 'Not quite — osmotic pressure depends on total dissolved particle concentration, so compare i × M.',
        reveal: [
          'Glucose has i = 1, so its effective particle concentration is about 0.50.',
          'CaCl2 has i ≈ 3, so its effective particle concentration is about 0.90.',
          'The larger iM value gives the larger osmotic pressure, so CaCl2 is larger.'
        ],
        support: [
          'For π, compare i × M.',
          'Higher total particle concentration gives larger osmotic pressure.'
        ]
      },
      {
        title: 'Predict which solution has the larger colligative effect.',
        hint: 'Use the same logic for freezing-point depression: compare effective particle concentration.',
        label: 'Problem:',
        prompt: 'Which solution should have the lower freezing point?',
        choices: [
          { value: 'a', label: '0.20 m MgCl2' },
          { value: 'b', label: '0.50 m sucrose' }
        ],
        answer: 'a',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — MgCl2 gives the larger effective particle concentration, so it creates the larger freezing-point depression and the lower freezing point.',
        incorrect: 'Not quite — compare i × m for each solution before deciding. MgCl2 produces more total dissolved particles here.',
        reveal: [
          'Sucrose has i = 1, so its effective particle concentration is 0.50.',
          'MgCl2 has i ≈ 3, so its effective particle concentration is 0.60.',
          'Because 0.60 is larger than 0.50, MgCl2 should have the lower freezing point.'
        ],
        support: [
          'For ΔTf, compare i × m.',
          'Larger particle concentration gives lower freezing point.'
        ]
      },
      {
        title: 'Predict which solution has the larger colligative effect.',
        hint: 'Check both concentration and ion count rather than only the solute name.',
        label: 'Scenario:',
        prompt: 'Which solution should have the higher boiling point?',
        choices: [
          { value: 'a', label: '0.40 m KCl' },
          { value: 'b', label: '0.25 m AlCl3' }
        ],
        answer: 'b',
        pending: 'Choose one answer, then click Check.',
        correct: 'Right — KCl gives about 0.80 particle-molality units, while AlCl3 gives about 1.00, so AlCl3 produces the larger boiling-point elevation.',
        incorrect: 'Not quite — compare i × m to decide which solution has more dissolved particles overall.',
        reveal: [
          'KCl has i ≈ 2, so 0.40 × 2 = 0.80.',
          'AlCl3 has i ≈ 4, so 0.25 × 4 = 1.00.',
          'The larger effective particle concentration gives the higher boiling point, so 0.25 m AlCl3 wins.'
        ],
        support: [
          'For ΔTb, compare i × m.',
          'Greater total particle concentration gives the larger effect.'
        ]
      }
    ]
  });
  drawSolChart();

  document.querySelectorAll('.tab-btn[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      window.requestAnimationFrame(() => {
        drawParticles();
        drawSolChart();
      });
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initUnit13Visuals);
} else {
  initUnit13Visuals();
}
