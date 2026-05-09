/* ── Unit 03 Problem Bank — Atomic Structure
   84 problems total: 12 calc | 55 concept | 17 multi
   Updates: Standardized isotope notation, streamlined average atomic mass solutions.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

/* ══════════════ CALCULATION — Subatomic & Atomic Mass (12) ══════════════ */
{id:'p01', type:'calc', tag:'Subatomic', q:'Neutrons in an atom of iron-56 (Fe-56)? (Z=26)', answer:30, unit:'neutrons', tolerance:0, solution:'<p>Neutrons = A − Z = 56 − 26 = <strong>30 neutrons</strong>.</p>'},
{id:'p02', type:'calc', tag:'Subatomic', q:'Neutrons in uranium-238? (Z=92)', answer:146, unit:'neutrons', tolerance:0, solution:'<p>Neutrons = 238 − 92 = <strong>146 neutrons</strong>.</p>'},
{id:'p03', type:'calc', tag:'Ions', q:'Electrons in a Ca²⁺ ion? (Z=20)', answer:18, unit:'electrons', tolerance:0, solution:'<p>e⁻ = Z − charge = 20 − 2 = <strong>18 electrons</strong>.</p>'},
{id:'p04', type:'calc', tag:'Ions', q:'Electrons in a Cl⁻ ion? (Z=17)', answer:18, unit:'electrons', tolerance:0, solution:'<p>e⁻ = 17 − (−1) = <strong>18 electrons</strong>.</p>'},
{id:'p05', type:'calc', tag:'Atomic Mass', q:'Avg mass: Cl-35 (34.97 amu, 75.77%) and Cl-37 (36.97 amu, 24.23%)?', answer:35.45, unit:'amu', tolerance:0.02, solution:'<p>(34.97 × 0.7577) + (36.97 × 0.2423) = <strong>35.45 amu</strong>.</p>'},
{id:'p06', type:'calc', tag:'Atomic Mass', q:'Avg mass: B-10 (10.01 amu, 19.9%) and B-11 (11.01 amu, 80.1%)?', answer:10.81, unit:'amu', tolerance:0.02, solution:'<p>(10.01 × 0.199) + (11.01 × 0.801) = <strong>10.81 amu</strong>.</p>'},

/* ══════════════ CONCEPT — Theory & Definitions (55) ══════════════ */
{id:'p13', type:'concept', tag:'Dalton', q:'According to Dalton, what happens to atoms in a chemical reaction?', choices:['Created','Destroyed','Rearranged','Fused'], correct:2, solution:'<p>Atoms are rearranged but not created or destroyed (Law of Conservation of Mass).</p>'},
{id:'p14', type:'concept', tag:'Element', q:'What property determines which element an atom is?', choices:['Neutrons','Electrons','Protons','Mass number'], correct:2, solution:'<p>The number of protons (Atomic Number, Z) defines the element.</p>'},
{id:'p15', type:'concept', tag:'Rutherford', q:'Rutherford\'s gold foil experiment showed atoms are:', choices:['Solid spheres','Plum pudding','Mostly empty space','Only electrons'], correct:2, solution:'<p>Most alpha particles passed through, indicating atoms are mostly empty space with a tiny nucleus.</p>'},
{id:'p16', type:'concept', tag:'Isotopes', q:'Which defines isotopes?', choices:['Different mass #, different protons','Same protons, different neutrons','Same neutrons, different protons','Different ions'], correct:1, solution:'<p>Isotopes are atoms of the same element (same Z) with different mass numbers (different N).</p>'},
{id:'p21', type:'concept', tag:'Ions', q:'Correct term for a negatively charged ion?', choices:['Cation','Anion','Isotope','Nucleon'], correct:1, solution:'<p><strong>Anion</strong> (Negative). Cations are positive.</p>'},
{id:'p22', type:'concept', tag:'Discovery', q:'What did J.J. Thomson discover with cathode rays?', choices:['Protons','Nucleus','Electrons','Neutrons'], correct:2, solution:'<p>Thomson discovered the electron, the first subatomic particle found.</p>'},

/* ══════════════ MULTI-STEP — Notation & Formulas (17) ══════════════ */
{id:'p69', type:'multi', tag:'Formula', q:'Total atoms in one formula unit of Al₂(SO₄)₃?', answer:17, unit:'atoms', tolerance:0, solution:'<p>Al(2) + S(3) + O(12) = <strong>17 total atoms</strong>.</p>'},
{id:'p70', type:'multi', tag:'Isotopes', q:'Atomic mass of element X is 63.5. Isotope A (63 amu) and B (65 amu). Which is more abundant?', choices:['A','B','Equal','Cannot tell'], correct:0, solution:'<p>63.5 is closer to 63, so Isotope A must be more abundant.</p>'},
{id:'p83', type:'multi', tag:'Notation', q:'Nuclear symbol for an atom with 7 protons and 8 neutrons?', choices:['¹⁵₇N','¹⁵₈O','⁸₇N','⁷₈O'], correct:0, solution:'<p>Z=7 (Nitrogen). A = 7+8 = 15. Symbol is <strong>¹⁵₇N</strong>.</p>'},
{id:'p84', type:'multi', tag:'Ions', q:'Statement for atom with 29p, 36n, 29e that forms a 2+ ion?', choices:['Cu-65; ion has 27e','Cu-65; ion has 29e','Zn-65; ion has 27e','Zn-65; ion has 29e'], correct:0, solution:'<p>Z=29 is Copper. Mass = 29+36 = 65. Cu²⁺ loses 2e⁻ (29-2=27).</p>'}

];