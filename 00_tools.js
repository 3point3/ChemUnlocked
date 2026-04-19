/* ══════════════════════════════════════════
   1. TOOL: Interactive Graduated Cylinder
══════════════════════════════════════════ */
function updateCylinder() {
  const size = parseInt(document.getElementById('cylSize').value);
  const slider = document.getElementById('cylSlider');
  const vol = parseFloat(slider.value);
  slider.max = size - 1;
  slider.min = Math.max(1, Math.floor(size * 0.05));

  // Determine graduation interval and precision
  let interval, precision, step;
  if (size === 10)       { interval = 1; precision = 0.1; step = 1; }
  else if (size === 25)  { interval = 1; precision = 0.1; step = 5; }
  else if (size === 50)  { interval = 2; precision = 0.1; step = 10; }
  else                   { interval = 1; precision = 0.1; step = 10; } // 100 mL

  // Round displayed reading to precision
  const displayed = Math.round(vol / precision) * precision;
  document.getElementById('cylReadingVal').textContent = displayed.toFixed(1);

  // Tip text
  const tipEl = document.getElementById('cylTip');
  const pct = vol / size;
  const nearGrad = Math.abs(vol - Math.round(vol / interval) * interval) < interval * 0.2;
  if (nearGrad) {
    tipEl.innerHTML = `<strong>Near a graduation line.</strong> The liquid is close to the ${Math.round(vol/interval)*interval} mL mark — estimate your tenths digit carefully.`;
  } else {
    const lower = Math.floor(vol / interval) * interval;
    const upper = lower + interval;
    tipEl.innerHTML = `Meniscus is between the <strong>${lower} mL</strong> and <strong>${upper} mL</strong> lines. Estimate the tenths digit.`;
  }

  // Draw cylinder SVG
  drawCylinder(size, vol, interval, step);
}

function drawCylinder(size, vol, interval, labelStep) {
  const svg = document.getElementById('cylSVG');
  const W = 90, H = 240;
  const bodyTop = 20, bodyBot = 210, bodyH = bodyBot - bodyTop;
  const lx = 20, rx = 70;

  // Water fill: y position for this volume
  const fillTop = bodyBot - (vol / size) * bodyH;
  const meniscusBot = fillTop + 6;

  let lines = '';

  // Graduation lines
  for (let v = 0; v <= size; v += interval) {
    const y = bodyBot - (v / size) * bodyH;
    const isLabel = (v % labelStep === 0);
    const x1 = isLabel ? lx : lx + 12;
    const sw = isLabel ? 1.5 : 0.9;
    lines += `<line x1="${x1}" y1="${y.toFixed(1)}" x2="${rx}" y2="${y.toFixed(1)}" stroke="#475569" stroke-width="${sw}"/>`;
    if (isLabel && v > 0) {
      lines += `<text x="${lx - 2}" y="${(y + 3.5).toFixed(1)}" text-anchor="end" font-size="9" fill="#334155" font-family="DM Mono,monospace">${v}</text>`;
    }
  }

  svg.innerHTML = `
    <!-- Body -->
    <rect x="${lx}" y="${bodyTop}" width="${rx - lx}" height="${bodyH}" rx="4" fill="#e0f2fe" stroke="#475569" stroke-width="2"/>
    ${lines}
    <!-- Water -->
    <rect x="${lx + 1}" y="${fillTop.toFixed(1)}" width="${rx - lx - 2}" height="${(bodyBot - fillTop).toFixed(1)}" fill="#bae6fd" opacity="0.75"/>
    <!-- Meniscus -->
    <path d="M${lx + 1},${fillTop.toFixed(1)} Q${(lx + rx) / 2},${meniscusBot.toFixed(1)} ${rx - 1},${fillTop.toFixed(1)}" fill="#bae6fd" stroke="#0ea5e9" stroke-width="1.5"/>
    <!-- Reading line -->
    <line x1="8" y1="${meniscusBot.toFixed(1)}" x2="${rx + 10}" y2="${meniscusBot.toFixed(1)}" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2"/>
    <!-- Bottom base -->
    <rect x="${lx - 5}" y="${bodyBot}" width="${rx - lx + 10}" height="10" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="1"/>
  `;

  document.getElementById('cylHint').textContent =
    `Graduated in ${interval} mL increments — estimate to the nearest 0.1 mL`;
}

/* ══════════════════════════════════════════
   2. TOOL: Balance Simulator
══════════════════════════════════════════ */
let balanceTared = false;
let taredOffset = 0;

function updateBalance() {
  const c = parseFloat(document.getElementById('containerSlider').value);
  const s = parseFloat(document.getElementById('sampleSlider').value);
  document.getElementById('containerVal').textContent = c.toFixed(1);
  document.getElementById('sampleVal').textContent = s.toFixed(1);

  if (!balanceTared) {
    // Show container mass only
    document.getElementById('balanceDisplay').textContent = c.toFixed(3);
  } else {
    // Show sample mass relative to tared zero
    const shown = Math.max(0, c + s - taredOffset);
    document.getElementById('balanceDisplay').textContent = shown.toFixed(3);
  }
}

function pressTare() {
  const c = parseFloat(document.getElementById('containerSlider').value);
  taredOffset = c;
  balanceTared = true;
  document.getElementById('balanceDisplay').textContent = '0.000';
  document.getElementById('addSampleBtn').disabled = false;
  document.getElementById('addSampleBtn').style.opacity = '1';
  document.getElementById('addSampleBtn').style.cursor = 'pointer';
  document.getElementById('tareStatus').textContent = '✓ Tared! Now click "Add Sample" to place your sample on the pan.';
  appendLog(`TARE pressed — offset set to ${c.toFixed(3)} g → display = 0.000 g`);
}

function addSample() {
  const s = parseFloat(document.getElementById('sampleSlider').value);
  document.getElementById('balanceDisplay').textContent = s.toFixed(3);
  document.getElementById('tareStatus').textContent = `✓ Sample added. Mass of sample = ${s.toFixed(3)} g`;
  appendLog(`Sample placed → display = ${s.toFixed(3)} g  ← this is the sample mass only`);
  document.getElementById('addSampleBtn').disabled = true;
  document.getElementById('addSampleBtn').style.opacity = '0.4';
}

function resetBalance() {
  balanceTared = false;
  taredOffset = 0;
  document.getElementById('addSampleBtn').disabled = true;
  document.getElementById('addSampleBtn').style.opacity = '0.4';
  document.getElementById('addSampleBtn').style.cursor = 'not-allowed';
  document.getElementById('balanceDisplay').textContent = '0.000';
  document.getElementById('tareStatus').textContent = 'Step 1: Place your container on the pan, then press TARE.';
  document.getElementById('balanceLog').innerHTML = '<span style="color:#4ade80;">// Balance log</span><br>';
  updateBalance();
}

function appendLog(msg) {
  const log = document.getElementById('balanceLog');
  log.innerHTML += `<span style="color:#93c5fd;">&gt;</span> ${msg}<br>`;
}

/* ══════════════════════════════════════════
   3. TOOL: Sig Figs Counter
══════════════════════════════════════════ */
function countSigFigs() {
  const raw = document.getElementById('sigfigInput').value.trim();
  if (!raw) {
    document.getElementById('sigfigResult').textContent = '';
    document.getElementById('sigfigExplain').textContent = '';
    return;
  }

  // Normalize scientific notation input
  const normalized = raw.replace(/[×x]\s*10\s*\^?\s*([+-]?\d+)/i, 'e$1').replace(/\s/g, '');

  // Validate input: only allow digits, decimal point, signs, and scientific notation
  if (!/^[+-]?\d*\.?\d+(?:e[+-]?\d+)?$/i.test(normalized)) {
    document.getElementById('sigfigResult').textContent = 'Invalid input — only numbers allowed.';
    document.getElementById('sigfigExplain').textContent = 'Please enter a valid number (e.g., 0.00470 or 2.50e3).';
    return;
  }

  // Extract the coefficient part before any 'e'
  const eIdx = normalized.toLowerCase().indexOf('e');
  const coeff = eIdx >= 0 ? normalized.slice(0, eIdx) : normalized;

  // Remove sign and work with absolute value string
  const absCoeff = coeff.replace(/^[+-]/, '');
  const hasDot = absCoeff.includes('.');

  let count = 0;
  let explain = [];

  if (!hasDot) {
    // No decimal point: count from first non-zero to last non-zero
    const stripped = absCoeff.replace(/^0+/, '').replace(/0+$/, '');
    // Trailing zeros ambiguous — count non-trailing
    const noTrail = absCoeff.replace(/^0+/, '');
    count = noTrail.replace(/0+$/, '').length || 0;
    explain.push('No decimal point: trailing zeros are ambiguous and not counted.');
    explain.push(`Non-zero + sandwiched-zero digits (excluding trailing): ${count}.`);
  } else {
    // Has decimal point
    // Leading zeros before first non-zero digit
    const noLead = absCoeff.replace(/^0*\.?0*/, '');
    // All remaining digits (including trailing zeros after decimal) are sig
    count = noLead.replace('.', '').length;
    if (absCoeff.startsWith('0') || absCoeff.startsWith('.0')) {
      explain.push('Leading zeros are NOT significant.');
    }
    explain.push('With a decimal point, all digits from first non-zero onward are significant.');
    explain.push(`Significant digits: ${count}.`);
  }

  document.getElementById('sigfigResult').textContent = count > 0 ? `${count} significant figure${count !== 1 ? 's' : ''}` : 'Unable to parse — check format.';
  document.getElementById('sigfigExplain').textContent = explain.join(' ');
}

/* ══════════════════════════════════════════
   4. TOOL: Metric Unit Converter
══════════════════════════════════════════ */
function convertUnits() {
  const val = parseFloat(document.getElementById('convInput').value);
  const from = parseFloat(document.getElementById('convFrom').value);
  const to = parseFloat(document.getElementById('convTo').value);
  const result = document.getElementById('convResult');

  if (isNaN(val)) { result.textContent = ''; return; }

  // Convert to base unit (m), then to target
  const inBase = val / from;
  const converted = inBase * to;

  const fromLabel = document.getElementById('convFrom').options[document.getElementById('convFrom').selectedIndex].text;
  const toLabel   = document.getElementById('convTo').options[document.getElementById('convTo').selectedIndex].text;

  result.textContent = `${val} ${fromLabel} = ${converted.toPrecision(4)} ${toLabel}`;
}


/* ══════════════════════════════════════════
   5. INIT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  updateCylinder();
  updateBalance();
});