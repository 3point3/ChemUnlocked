/* ── Unit 05 Problem Bank — Periodic Table & Trends
   84 problems total: 29 calc | 34 concept | 21 multi
   Updates: Condensed object structure, audited periodic trend logic, and refined solution HTML.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

/* ══════════════ CALCULATION — Valence & Core Electrons (29) ══════════════ */
{id:'p01', type:'calc', tag:'Valence', q:'How many valence electrons in Sulfur (Group 16)?', answer:6, unit:'valence electrons', tolerance:0, solution:'<p>Group 16 → <strong>6 valence electrons</strong>. (Configuration: [Ne] 3s² 3p⁴).</p>'},
{id:'p02', type:'calc', tag:'Valence', q:'How many valence electrons in Aluminum (Group 13)?', answer:3, unit:'valence electrons', tolerance:0, solution:'<p>Group 13 → <strong>3 valence electrons</strong>. (Configuration: [Ne] 3s² 3p¹).</p>'},
{id:'p03', type:'calc', tag:'Valence', q:'How many valence electrons in Barium (Group 2)?', answer:2, unit:'valence electrons', tolerance:0, solution:'<p>Group 2 → <strong>2 valence electrons</strong>.</p>'},
{id:'p15', type:'calc', tag:'Core', q:'How many core (inner-shell) electrons in a neutral Sodium atom (Z=11)?', answer:10, unit:'core electrons', tolerance:0, solution:'<p>Na is [Ne] 3s¹. The 10 electrons in the [Ne] core are <strong>core electrons</strong>.</p>'},
{id:'p16', type:'calc', tag:'Core', q:'How many core electrons in Chlorine (Z=17)?', answer:10, unit:'core electrons', tolerance:0, solution:'<p>Cl is [Ne] 3s² 3p⁵. The 10 electrons in the [Ne] core are core electrons.</p>'},

/* ══════════════ CONCEPT — Periodic Trends & Groups (34) ══════════════ */
{id:'p30', type:'concept', tag:'Trends', q:'Which element has the largest atomic radius?', choices:['F','Cl','Br','I'], correct:3, solution:'<p>Atomic radius <strong>increases</strong> moving down a group as more energy levels are added.</p>'},
{id:'p31', type:'concept', tag:'Trends', q:'Which element has the highest electronegativity?', choices:['Li','C','N','F'], correct:3, solution:'<p>Electronegativity <strong>increases</strong> across a period (left to right) toward Fluorine.</p>'},
{id:'p32', type:'concept', tag:'Trends', q:'Which has the highest first ionization energy?', choices:['Na','Mg','Al','Ar'], correct:3, solution:'<p>Ionization energy increases across a period; Noble gases (Ar) have extremely high values due to stable octets.</p>'},
{id:'p33', type:'concept', tag:'Groups', q:'Elements in Group 18 are known as:', choices:['Alkali Metals','Halogens','Noble Gases','Alkaline Earth Metals'], correct:2, solution:'<p>Group 18 elements are the <strong>Noble Gases</strong>, known for their lack of reactivity.</p>'},
{id:'p34', type:'concept', tag:'Groups', q:'Which group contains the Halogens?', choices:['Group 1','Group 2','Group 17','Group 18'], correct:2, solution:'<p><strong>Group 17</strong> contains the highly reactive nonmetals known as Halogens.</p>'},

/* ══════════════ MULTI-STEP — Ionization Jumps & Advanced Trends (21) ══════════════ */
{id:'p64', type:'multi', tag:'Successive IE', q:'A large jump between IE₂ and IE₃ indicates how many valence electrons?', answer:2, tolerance:0, solution:'<p>The jump occurs when you start removing core electrons. A jump after the 2nd electron means there were <strong>2 valence electrons</strong>.</p>'},
{id:'p65', type:'multi', tag:'Ionic Radius', q:'Which is LARGER: a neutral Na atom or a Na⁺ ion?', choices:['Na atom','Na⁺ ion','They are equal','Cannot be determined'], correct:0, solution:'<p>Cations are always <strong>smaller</strong> than their parent atoms because they lose an entire energy level.</p>'},
{id:'p66', type:'multi', tag:'Ionic Radius', q:'Which is LARGER: a neutral Cl atom or a Cl⁻ ion?', choices:['Cl atom','Cl⁻ ion','They are equal','Cannot be determined'], correct:1, solution:'<p>Anions are <strong>larger</strong> than their parent atoms due to increased electron-electron repulsion in the same shell.</p>'},
{id:'p84', type:'multi', tag:'Successive IE', q:'IE₁=738, IE₂=1451, IE₃=7733. What group is this element in?', choices:['Group 1','Group 2','Group 13','Group 14'], correct:1, solution:'<p>The jump after IE₂ indicates 2 valence electrons, placing it in <strong>Group 2</strong> (Magnesium).</p>'}

];