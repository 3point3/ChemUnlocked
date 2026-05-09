/* ── Unit 04 Problem Bank — Electron Configuration
   81 problems total: 30 calc | 33 concept | 18 multi
   Updates: Standardized notation, streamlined wave/photon math, and audited orbital logic.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

/* ══════════════ CALCULATION — Waves & Photons (30) ══════════════ */
{id:'p01', type:'calc', tag:'Waves', q:'Frequency (Hz) of light with λ = 600.0 nm?', answer:5.00e14, unit:'Hz', tolerance:1e13, solution:'<p>ν = c/λ = (3.00×10⁸) / (600.0×10⁻⁹) = <strong>5.00 × 10¹⁴ Hz</strong></p>'},
{id:'p02', type:'calc', tag:'Waves', q:'Wavelength (nm) of light with ν = 7.50 × 10¹⁴ Hz?', answer:400.0, unit:'nm', tolerance:2, solution:'<p>λ = c/ν = (3.00×10⁸) / (7.50×10¹⁴) = 4.00×10⁻⁷ m = <strong>400.0 nm</strong></p>'},
{id:'p03', type:'calc', tag:'Energy', q:'Energy (J) of a photon with ν = 5.45 × 10¹⁴ Hz?', answer:3.61e-19, unit:'J', tolerance:5e-21, solution:'<p>E = hν = (6.626×10⁻³⁴)(5.45×10¹⁴) = <strong>3.61 × 10⁻¹⁹ J</strong></p>'},
{id:'p04', type:'calc', tag:'Energy', q:'Energy (J) of a photon with λ = 500.0 nm?', answer:3.98e-19, unit:'J', tolerance:5e-21, solution:'<p>E = hc/λ = (6.626e-34 × 3e8) / 500e-9 = <strong>3.98 × 10⁻¹⁹ J</strong></p>'},
{id:'p05', type:'calc', tag:'Waves', q:'Frequency (Hz) of a 450 nm blue photon?', answer:6.67e14, unit:'Hz', tolerance:1e13, solution:'<p>ν = 3.00e8 / 450e-9 = <strong>6.67 × 10¹⁴ Hz</strong></p>'},
{id:'p06', type:'calc', tag:'Energy', q:'Energy (J) of a photon with ν = 1.00 × 10¹⁵ Hz?', answer:6.63e-19, unit:'J', tolerance:5e-21, solution:'<p>E = hν = 6.626e-34 × 1.00e15 = <strong>6.63 × 10⁻¹⁹ J</strong></p>'},
{id:'p07', type:'calc', tag:'Waves', q:'Wavelength (nm) of a photon with E = 3.00 × 10⁻¹⁹ J?', answer:663, unit:'nm', tolerance:5, solution:'<p>λ = hc/E = (1.988e-25) / 3.00e-19 = 6.63e-7 m = <strong>663 nm</strong></p>'},
{id:'p08', type:'calc', tag:'Waves', q:'Frequency (Hz) of radio wave with λ = 3.00 m?', answer:1.00e8, unit:'Hz', tolerance:1e6, solution:'<p>ν = 3.00e8 / 3.00 = <strong>1.00 × 10⁸ Hz</strong></p>'},
{id:'p09', type:'calc', tag:'Energy', q:'Energy of 1 mole of photons with ν = 5.00 × 10¹⁴ Hz? (kJ/mol)', answer:199.5, unit:'kJ/mol', tolerance:1.0, solution:'<p>E_total = hν × Nₐ = (3.313e-19 J) × 6.022e23 = 199500 J = <strong>199.5 kJ/mol</strong></p>'},
{id:'p10', type:'calc', tag:'Waves', q:'Wavelength (m) of X-ray with ν = 3.00 × 10¹⁸ Hz?', answer:1.00e-10, unit:'m', tolerance:5e-12, solution:'<p>λ = 3.00e8 / 3.00e18 = <strong>1.00 × 10⁻¹⁰ m</strong></p>'},

/* ══════════════ CONCEPT — Quantum Numbers & Rules (33) ══════════════ */
{id:'p31', type:'concept', tag:'Rules', q:'Electrons fill lowest energy orbitals first. This is:', choices:['Hund’s Rule','Pauli Principle','Aufbau Principle','Heisenberg Uncertainty'], correct:2, solution:'<p>The <strong>Aufbau Principle</strong> states that orbitals are filled in order of increasing energy.</p>'},
{id:'p32', type:'concept', tag:'Rules', q:'No two electrons in an atom can have the same 4 quantum numbers. This is:', choices:['Aufbau Principle','Pauli Exclusion Principle','Hund’s Rule','Octet Rule'], correct:1, solution:'<p>The <strong>Pauli Exclusion Principle</strong> limits each orbital to 2 electrons with opposite spins.</p>'},
{id:'p33', type:'concept', tag:'Rules', q:'Single electrons with parallel spins must occupy each equal-energy orbital before doubling up. This is:', choices:['Hund’s Rule','Pauli Principle','Aufbau Principle','Bohr Model'], correct:0, solution:'<p><strong>Hund’s Rule</strong> minimizes electron repulsion by spreading electrons out across subshells.</p>'},
{id:'p34', type:'concept', tag:'Theory', q:'Which orbital subshell does NOT exist?', choices:['1s','2p','2d','3f'], correct:2, solution:'<p>For n=2, only s (l=0) and p (l=1) are allowed. <strong>2d</strong> does not exist.</p>'},
{id:'p35', type:'concept', tag:'Capacity', q:'Maximum electrons in a single "d" orbital?', choices:['2','6','10','14'], correct:0, solution:'<p>ANY single orbital can hold a maximum of <strong>2</strong> electrons, regardless of its shape.</p>'},
{id:'p36', type:'concept', tag:'Capacity', q:'Maximum electrons in the entire 3p subshell?', choices:['2','6','8','18'], correct:1, solution:'<p>The p-subshell has 3 orbitals; 3 × 2 = <strong>6 electrons</strong>.</p>'},

/* ══════════════ MULTI-STEP — Configurations & Exceptions (18) ══════════════ */
{id:'p64', type:'multi', tag:'Config', q:'Ground state configuration for Manganese (Z=25)?', choices:['[Ar] 4s² 3d⁵','[Ar] 4s² 4d⁵','[Ar] 3d⁷','[Ar] 4s¹ 3d⁶'], correct:0, solution:'<p>Ar fills to 18. Then 4s² (20) and 3d⁵ (25).</p>'},
{id:'p65', type:'multi', tag:'Exception', q:'Ground state configuration for Copper (Z=29)?', choices:['[Ar] 4s² 3d⁹','[Ar] 4s¹ 3d¹⁰','[Ar] 4s⁰ 3d¹¹','[Ar] 3d¹⁰'], correct:1, solution:'<p>Copper is an <strong>exception</strong>; it promotes a 4s electron to create a more stable, full 3d subshell.</p>'},
{id:'p66', type:'multi', tag:'Ions', q:'Configuration for the Fe²⁺ ion (Z=26)?', choices:['[Ar] 4s² 3d⁴','[Ar] 3d⁶','[Ar] 4s¹ 3d⁵','[Ar] 4s² 3d⁶'], correct:1, solution:'<p>Transition metals lose <strong>s-electrons first</strong>. Fe [Ar] 4s² 3d⁶ loses the two 4s electrons.</p>'},
{id:'p79', type:'multi', tag:'Hunds', q:'Unpaired electrons in a neutral Phosphorus atom (Z=15)?', answer:3, tolerance:0, solution:'<p>Ends in 3p³. According to Hund’s Rule, each of the three p-orbitals gets one electron. <strong>3 unpaired</strong>.</p>'},
{id:'p81', type:'multi', tag:'Exceptions', q:'Zinc (Z=30) is NOT a "transition metal" by some definitions because:', choices:['It is a gas','It has a full d-subshell','It has no s-electrons','It is radioactive'], correct:1, solution:'<p>Zinc has a completely filled 3d¹⁰ subshell in both its elemental and ionic (Zn²⁺) forms.</p>'}

];