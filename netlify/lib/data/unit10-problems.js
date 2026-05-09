/* ── Unit 10 Problem Bank — Chemical Bonding
   81 problems total: 12 calc | 52 concept | 17 multi
   Updates: Standardized VSEPR logic and preserved chemical HTML entities for rendering.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

/* ══════════════ CONCEPT — Bond Types & Electronegativity (52) ══════════════ */
{id:'p01', type:'concept', tag:'Bond Types', q:'Which bond forms when electrons are <strong>transferred</strong> from a metal to a nonmetal?', choices:['Nonpolar covalent','Polar covalent','Ionic bond','Metallic bond'], correct:2, solution:'<p>Ionic bonds form through electron transfer, creating electrostatic attraction between ions.</p>'},
{id:'p02', type:'concept', tag:'Bond Types', q:'A bond between two <strong>identical</strong> nonmetal atoms (like H&#8211;H) is:', choices:['Ionic','Polar covalent','Nonpolar covalent','Metallic'], correct:2, solution:'<p>Identical atoms share electrons equally (&#916;EN = 0), making the bond <strong>nonpolar covalent</strong>.</p>'},
{id:'p03', type:'concept', tag:'Electronegativity', q:'Which element is the most electronegative on the periodic table?', choices:['Cesium','Oxygen','Fluorine','Helium'], correct:2, solution:'<p><strong>Fluorine</strong> has the highest attraction for shared electrons in a bond.</p>'},
{id:'p15', type:'concept', tag:'VSEPR', q:'What is the molecular geometry of a molecule with 2 bonding pairs and 0 lone pairs?', choices:['Bent','Linear','Tetrahedral','Trigonal planar'], correct:1, solution:'<p>Two groups spread 180&deg; apart to minimize repulsion, forming a <strong>linear</strong> shape.</p>'},
{id:'p16', type:'concept', tag:'VSEPR', q:'What is the molecular geometry of CH&#8324;?', choices:['Square planar','Tetrahedral','Trigonal pyramidal','Trigonal planar'], correct:1, solution:'<p>Carbon has 4 bonding pairs and 0 lone pairs, resulting in a <strong>tetrahedral</strong> geometry.</p>'},
{id:'p17', type:'concept', tag:'VSEPR', q:'What is the molecular geometry of NH&#8323;?', choices:['Tetrahedral','Trigonal planar','Trigonal pyramidal','Bent'], correct:2, solution:'<p>Nitrogen has 3 bonding pairs and 1 lone pair. The lone pair pushes the bonds down into a <strong>pyramidal</strong> shape.</p>'},
{id:'p18', type:'concept', tag:'VSEPR', q:'What is the molecular geometry of H&#8322;O?', choices:['Linear','Bent','Tetrahedral','Trigonal planar'], correct:1, solution:'<p>Oxygen has 2 bonding pairs and 2 lone pairs. The lone pairs cause the molecule to be <strong>bent</strong>.</p>'},

/* ══════════════ CALCULATION — Formal Charge & Bond Orders (12) ══════════════ */
{id:'p53', type:'calc', tag:'Formal Charge', q:'Formal charge of Oxygen in H&#8322;O?', answer:0, tolerance:0, solution:'<p>FC = Valence &#8211; (Dots + Lines). For O: 6 &#8211; (4 + 2) = <strong>0</strong>.</p>'},
{id:'p54', type:'calc', tag:'Bond Order', q:'Bond order of a triple bond (like in N&#8322;)?', answer:3, tolerance:0, solution:'<p>A triple bond shares 3 pairs of electrons, so the <strong>bond order is 3</strong>.</p>'},
{id:'p55', type:'calc', tag:'Valence Count', q:'Total valence electrons for the NO&#8323;&#8315; ion?', answer:24, tolerance:0, solution:'<p>N(5) + 3O(18) + 1 extra for negative charge = <strong>24 electrons</strong>.</p>'},

/* ══════════════ MULTI-STEP — Exceptions & Polarity (17) ══════════════ */
{id:'p66', type:'multi', tag:'Polarity', q:'Is BF&#8323; a polar or nonpolar molecule?', choices:['Polar','Nonpolar','Ionic','Metallic'], correct:1, solution:'<p>Although B&#8211;F bonds are polar, the trigonal planar symmetry cancels the dipoles, making the <strong>molecule nonpolar</strong>.</p>'},
{id:'p80', type:'multi', tag:'NASBU', q:'How many electrons remain for the central Boron in BF&#8323; after octets are given to Fluorine?', answer:0, tolerance:0, solution:'<p>Boron is an exception; it is stable with only 6 valence electrons in BF&#8323;. <strong>0 remain</strong>.</p>'},
{id:'p81', type:'multi', tag:'Geometry', q:'Molecular geometry of ICl&#8324;&#8315; (4 bonds, 2 lone pairs)?', choices:['Tetrahedral','Octahedral','Square planar','See-saw'], correct:2, solution:'<p>6 electron groups (Octahedral arrangement). 2 lone pairs go opposite each other, leaving 4 atoms in a <strong>square plane</strong>.</p>'}

];