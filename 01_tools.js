// ── 1. TOOL LOGIC ──────────────────────────────────────────────────────────
/**
 * Initializes the density calculator tool on page load.
 * Sets up event listeners for mode switching and calculation.
 */
document.addEventListener('DOMContentLoaded', function () {
  const dInput = document.getElementById('dInput');
  const mInput = document.getElementById('mInput');
  const vInput = document.getElementById('vInput');
  const result = document.getElementById('densityResult');
  const answer = document.getElementById('densityAnswer');
  const calcBtn = document.getElementById('calcDensityBtn');
  const solveD = document.getElementById('solveD');
  const solveM = document.getElementById('solveM');
  const solveV = document.getElementById('solveV');

  if (!calcBtn) return;

  let solvingFor = 'D';

  /**
   * Sets the calculation mode (D, M, or V) and updates UI accordingly.
   * @param {string} mode - 'D' for density, 'M' for mass, 'V' for volume.
   */
  function setSolveMode(mode) {
    solvingFor = mode;
    dInput.style.display = mode === 'D' ? 'none' : 'block';
    mInput.style.display = mode === 'M' ? 'none' : 'block';
    vInput.style.display = mode === 'V' ? 'none' : 'block';
    dInput.value = '';
    mInput.value = '';
    vInput.value = '';
    result.style.display = 'none';
    [solveD, solveM, solveV].forEach(b => b.classList.remove('active'));
    if (mode === 'D') solveD.classList.add('active');
    if (mode === 'M') solveM.classList.add('active');
    if (mode === 'V') solveV.classList.add('active');
    dInput.placeholder = 'Density (g/mL)';
    mInput.placeholder = 'Mass (g)';
    vInput.placeholder = 'Volume (mL)';
  }

  solveD.addEventListener('click', function () { setSolveMode('D'); });
  solveM.addEventListener('click', function () { setSolveMode('M'); });
  solveV.addEventListener('click', function () { setSolveMode('V'); });

  /**
   * Performs the density calculation based on the current mode and inputs.
   * Includes validation for positive values and prevents division by zero.
   */
  calcBtn.addEventListener('click', function () {
    const d = parseFloat(dInput.value);
    const m = parseFloat(mInput.value);
    const v = parseFloat(vInput.value);
    let res = NaN;
    let label = '';

    // Input validation
    if (solvingFor === 'D') {
      if (isNaN(m) || isNaN(v)) {
        label = 'Please enter valid positive numbers for mass and volume.';
      } else if (m <= 0 || v <= 0) {
        label = 'Mass and volume must be positive values.';
      } else {
        res = m / v;
        label = 'D = m ÷ V = ' + m + ' g ÷ ' + v + ' mL = ' + res.toFixed(3) + ' g/mL';
      }
    } else if (solvingFor === 'M') {
      if (isNaN(d) || isNaN(v)) {
        label = 'Please enter valid positive numbers for density and volume.';
      } else if (d <= 0 || v <= 0) {
        label = 'Density and volume must be positive values.';
      } else {
        res = d * v;
        label = 'm = D × V = ' + d + ' g/mL × ' + v + ' mL = ' + res.toFixed(3) + ' g';
      }
    } else if (solvingFor === 'V') {
      if (isNaN(d) || isNaN(m)) {
        label = 'Please enter valid positive numbers for density and mass.';
      } else if (d <= 0 || m <= 0) {
        label = 'Density and mass must be positive values.';
      } else {
        res = m / d;
        label = 'V = m ÷ D = ' + m + ' g ÷ ' + d + ' g/mL = ' + res.toFixed(3) + ' mL';
      }
    } else {
      label = 'Please enter valid numbers for both inputs.';
    }

    answer.textContent = label;
    result.style.display = 'block';
  });
});