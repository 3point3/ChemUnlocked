// ── TOOL LOGIC ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  initElectronChallenge();
  initOrbitalChoiceChallenge();
  initPhotonChallenge();
  initHydrogenChallenge();
});

// ── ELEMENT DATA (Z=1–118) ────────────────────────────────────────────────
// Format: [symbol, name, config_string, noble_gas_core, block, valence_e, unpaired_e]
const ELEMENTS = [
  null,
  ['H',  'Hydrogen',     '1s1',                                    '',      's', 1, 1],
  ['He', 'Helium',       '1s2',                                    '',      's', 2, 0],
  ['Li', 'Lithium',      '1s2 2s1',                                '[He]',  's', 1, 1],
  ['Be', 'Beryllium',    '1s2 2s2',                                '[He]',  's', 2, 0],
  ['B',  'Boron',        '1s2 2s2 2p1',                           '[He]',  'p', 3, 1],
  ['C',  'Carbon',       '1s2 2s2 2p2',                           '[He]',  'p', 4, 2],
  ['N',  'Nitrogen',     '1s2 2s2 2p3',                           '[He]',  'p', 5, 3],
  ['O',  'Oxygen',       '1s2 2s2 2p4',                           '[He]',  'p', 6, 2],
  ['F',  'Fluorine',     '1s2 2s2 2p5',                           '[He]',  'p', 7, 1],
  ['Ne', 'Neon',         '1s2 2s2 2p6',                           '[He]',  'p', 8, 0],
  ['Na', 'Sodium',       '1s2 2s2 2p6 3s1',                      '[Ne]',  's', 1, 1],
  ['Mg', 'Magnesium',    '1s2 2s2 2p6 3s2',                      '[Ne]',  's', 2, 0],
  ['Al', 'Aluminum',     '1s2 2s2 2p6 3s2 3p1',                  '[Ne]',  'p', 3, 1],
  ['Si', 'Silicon',      '1s2 2s2 2p6 3s2 3p2',                  '[Ne]',  'p', 4, 2],
  ['P',  'Phosphorus',   '1s2 2s2 2p6 3s2 3p3',                  '[Ne]',  'p', 5, 3],
  ['S',  'Sulfur',       '1s2 2s2 2p6 3s2 3p4',                  '[Ne]',  'p', 6, 2],
  ['Cl', 'Chlorine',     '1s2 2s2 2p6 3s2 3p5',                  '[Ne]',  'p', 7, 1],
  ['Ar', 'Argon',        '1s2 2s2 2p6 3s2 3p6',                  '[Ne]',  'p', 8, 0],
  ['K',  'Potassium',    '1s2 2s2 2p6 3s2 3p6 4s1',              '[Ar]',  's', 1, 1],
  ['Ca', 'Calcium',      '1s2 2s2 2p6 3s2 3p6 4s2',              '[Ar]',  's', 2, 0],
  ['Sc', 'Scandium',     '1s2 2s2 2p6 3s2 3p6 4s2 3d1',         '[Ar]',  'd', 2, 1],
  ['Ti', 'Titanium',     '1s2 2s2 2p6 3s2 3p6 4s2 3d2',         '[Ar]',  'd', 2, 2],
  ['V',  'Vanadium',     '1s2 2s2 2p6 3s2 3p6 4s2 3d3',         '[Ar]',  'd', 2, 3],
  ['Cr', 'Chromium',     '1s2 2s2 2p6 3s2 3p6 4s1 3d5 ★',       '[Ar]',  'd', 1, 6],
  ['Mn', 'Manganese',    '1s2 2s2 2p6 3s2 3p6 4s2 3d5',         '[Ar]',  'd', 2, 5],
  ['Fe', 'Iron',         '1s2 2s2 2p6 3s2 3p6 4s2 3d6',         '[Ar]',  'd', 2, 4],
  ['Co', 'Cobalt',       '1s2 2s2 2p6 3s2 3p6 4s2 3d7',         '[Ar]',  'd', 2, 3],
  ['Ni', 'Nickel',       '1s2 2s2 2p6 3s2 3p6 4s2 3d8',         '[Ar]',  'd', 2, 2],
  ['Cu', 'Copper',       '1s2 2s2 2p6 3s2 3p6 4s1 3d10 ★',      '[Ar]',  'd', 1, 1],
  ['Zn', 'Zinc',         '1s2 2s2 2p6 3s2 3p6 4s2 3d10',        '[Ar]',  'd', 2, 0],
  ['Ga', 'Gallium',      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1',    '[Ar]',  'p', 3, 1],
  ['Ge', 'Germanium',    '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2',    '[Ar]',  'p', 4, 2],
  ['As', 'Arsenic',      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3',    '[Ar]',  'p', 5, 3],
  ['Se', 'Selenium',     '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4',    '[Ar]',  'p', 6, 2],
  ['Br', 'Bromine',      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5',    '[Ar]',  'p', 7, 1],
  ['Kr', 'Krypton',      '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6',    '[Ar]',  'p', 8, 0],
  ['Rb', 'Rubidium',     '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1','[Kr]',  's', 1, 1],
  ['Sr', 'Strontium',    '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2','[Kr]',  's', 2, 0],
  ['Y',  'Yttrium',      '[Kr] 5s2 4d1',                           '[Kr]',  'd', 2, 1],
  ['Zr', 'Zirconium',    '[Kr] 5s2 4d2',                           '[Kr]',  'd', 2, 2],
  ['Nb', 'Niobium',      '[Kr] 5s1 4d4 ★',                        '[Kr]',  'd', 1, 5],
  ['Mo', 'Molybdenum',   '[Kr] 5s1 4d5 ★',                        '[Kr]',  'd', 1, 6],
  ['Tc', 'Technetium',   '[Kr] 5s2 4d5',                           '[Kr]',  'd', 2, 5],
  ['Ru', 'Ruthenium',    '[Kr] 5s1 4d7 ★',                        '[Kr]',  'd', 1, 7],
  ['Rh', 'Rhodium',      '[Kr] 5s1 4d8 ★',                        '[Kr]',  'd', 1, 8],
  ['Pd', 'Palladium',    '[Kr] 4d10 ★',                           '[Kr]',  'd', 0, 0],
  ['Ag', 'Silver',       '[Kr] 5s1 4d10 ★',                       '[Kr]',  'd', 1, 1],
  ['Cd', 'Cadmium',      '[Kr] 5s2 4d10',                         '[Kr]',  'd', 2, 0],
  ['In', 'Indium',       '[Kr] 5s2 4d10 5p1',                     '[Kr]',  'p', 3, 1],
  ['Sn', 'Tin',          '[Kr] 5s2 4d10 5p2',                     '[Kr]',  'p', 4, 2],
  ['Sb', 'Antimony',     '[Kr] 5s2 4d10 5p3',                     '[Kr]',  'p', 5, 3],
  ['Te', 'Tellurium',    '[Kr] 5s2 4d10 5p4',                     '[Kr]',  'p', 6, 2],
  ['I',  'Iodine',       '[Kr] 5s2 4d10 5p5',                     '[Kr]',  'p', 7, 1],
  ['Xe', 'Xenon',        '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6', '[Kr]', 'p', 8, 0],
  ['Cs', 'Cesium',       '[Xe] 6s1',                          '[Xe]', 's', 1, 1],
  ['Ba', 'Barium',       '[Xe] 6s2',                          '[Xe]', 's', 2, 0],
  ['La', 'Lanthanum',    '[Xe] 5d1 6s2',                      '[Xe]', 'f', 2, 1],
  ['Ce', 'Cerium',       '[Xe] 4f1 5d1 6s2',                  '[Xe]', 'f', 2, 2],
  ['Pr', 'Praseodymium', '[Xe] 4f3 6s2',                      '[Xe]', 'f', 2, 3],
  ['Nd', 'Neodymium',    '[Xe] 4f4 6s2',                      '[Xe]', 'f', 2, 4],
  ['Pm', 'Promethium',   '[Xe] 4f5 6s2',                      '[Xe]', 'f', 2, 5],
  ['Sm', 'Samarium',     '[Xe] 4f6 6s2',                      '[Xe]', 'f', 2, 6],
  ['Eu', 'Europium',     '[Xe] 4f7 6s2',                      '[Xe]', 'f', 2, 7],
  ['Gd', 'Gadolinium',   '[Xe] 4f7 5d1 6s2',                  '[Xe]', 'f', 2, 8],
  ['Tb', 'Terbium',      '[Xe] 4f9 6s2',                      '[Xe]', 'f', 2, 3],
  ['Dy', 'Dysprosium',   '[Xe] 4f10 6s2',                     '[Xe]', 'f', 2, 4],
  ['Ho', 'Holmium',      '[Xe] 4f11 6s2',                     '[Xe]', 'f', 2, 3],
  ['Er', 'Erbium',       '[Xe] 4f12 6s2',                     '[Xe]', 'f', 2, 2],
  ['Tm', 'Thulium',      '[Xe] 4f13 6s2',                     '[Xe]', 'f', 2, 1],
  ['Yb', 'Ytterbium',    '[Xe] 4f14 6s2',                     '[Xe]', 'f', 2, 0],
  ['Lu', 'Lutetium',     '[Xe] 4f14 5d1 6s2',                 '[Xe]', 'd', 2, 1],
  ['Hf', 'Hafnium',      '[Xe] 4f14 5d2 6s2',                 '[Xe]', 'd', 2, 2],
  ['Ta', 'Tantalum',     '[Xe] 4f14 5d3 6s2',                 '[Xe]', 'd', 2, 3],
  ['W',  'Tungsten',     '[Xe] 4f14 5d4 6s2',                 '[Xe]', 'd', 2, 4],
  ['Re', 'Rhenium',      '[Xe] 4f14 5d5 6s2',                 '[Xe]', 'd', 2, 5],
  ['Os', 'Osmium',       '[Xe] 4f14 5d6 6s2',                 '[Xe]', 'd', 2, 4],
  ['Ir', 'Iridium',      '[Xe] 4f14 5d7 6s2',                 '[Xe]', 'd', 2, 3],
  ['Pt', 'Platinum',     '[Xe] 4f14 5d9 6s1 ★',               '[Xe]', 'd', 1, 1],
  ['Au', 'Gold',         '[Xe] 4f14 5d10 6s1 ★',              '[Xe]', 'd', 1, 1],
  ['Hg', 'Mercury',      '[Xe] 4f14 5d10 6s2',                '[Xe]', 'd', 2, 0],
  ['Tl', 'Thallium',     '[Xe] 4f14 5d10 6p1',                '[Xe]', 'p', 3, 1],
  ['Pb', 'Lead',         '[Xe] 4f14 5d10 6p2',                '[Xe]', 'p', 4, 2],
  ['Bi', 'Bismuth',      '[Xe] 4f14 5d10 6p3',                '[Xe]', 'p', 5, 3],
  ['Po', 'Polonium',     '[Xe] 4f14 5d10 6p4',                '[Xe]', 'p', 6, 2],
  ['At', 'Astatine',     '[Xe] 4f14 5d10 6p5',                '[Xe]', 'p', 7, 1],
  ['Rn', 'Radon',        '[Xe] 4f14 5d10 6p6',                '[Xe]', 'p', 8, 0],
  ['Fr', 'Francium',     '[Rn] 7s1',                           '[Rn]', 's', 1, 1],
  ['Ra', 'Radium',       '[Rn] 7s2',                           '[Rn]', 's', 2, 0],
  ['Ac', 'Actinium',     '[Rn] 6d1 7s2',                       '[Rn]', 'f', 2, 1],
  ['Th', 'Thorium',      '[Rn] 6d2 7s2',                       '[Rn]', 'f', 2, 2],
  ['Pa', 'Protactinium', '[Rn] 5f2 6d1 7s2',                   '[Rn]', 'f', 2, 3],
  ['U',  'Uranium',      '[Rn] 5f3 6d1 7s2',                   '[Rn]', 'f', 2, 4],
  ['Np', 'Neptunium',    '[Rn] 5f4 6d1 7s2',                   '[Rn]', 'f', 2, 5],
  ['Pu', 'Plutonium',    '[Rn] 5f6 7s2',                       '[Rn]', 'f', 2, 6],
  ['Am', 'Americium',    '[Rn] 5f7 7s2',                       '[Rn]', 'f', 2, 7],
  ['Cm', 'Curium',       '[Rn] 5f7 6d1 7s2',                   '[Rn]', 'f', 2, 8],
  ['Bk', 'Berkelium',    '[Rn] 5f9 7s2',                       '[Rn]', 'f', 2, 3],
  ['Cf', 'Californium',  '[Rn] 5f10 7s2',                      '[Rn]', 'f', 2, 4],
  ['Es', 'Einsteinium',  '[Rn] 5f11 7s2',                      '[Rn]', 'f', 2, 3],
  ['Fm', 'Fermium',      '[Rn] 5f12 7s2',                      '[Rn]', 'f', 2, 2],
  ['Md', 'Mendelevium',  '[Rn] 5f13 7s2',                      '[Rn]', 'f', 2, 1],
  ['No', 'Nobelium',     '[Rn] 5f14 7s2',                      '[Rn]', 'f', 2, 0],
  ['Lr', 'Lawrencium',   '[Rn] 5f14 7s2 7p1',                  '[Rn]', 'd', 2, 1],
  ['Rf', 'Rutherfordium','[Rn] 5f14 6d2 7s2',                  '[Rn]', 'd', 2, 2],
  ['Db', 'Dubnium',      '[Rn] 5f14 6d3 7s2',                  '[Rn]', 'd', 2, 3],
  ['Sg', 'Seaborgium',   '[Rn] 5f14 6d4 7s2',                  '[Rn]', 'd', 2, 4],
  ['Bh', 'Bohrium',      '[Rn] 5f14 6d5 7s2',                  '[Rn]', 'd', 2, 5],
  ['Hs', 'Hassium',      '[Rn] 5f14 6d6 7s2',                  '[Rn]', 'd', 2, 4],
  ['Mt', 'Meitnerium',   '[Rn] 5f14 6d7 7s2',                  '[Rn]', 'd', 2, 3],
  ['Ds', 'Darmstadtium', '[Rn] 5f14 6d8 7s2',                  '[Rn]', 'd', 2, 2],
  ['Rg', 'Roentgenium',  '[Rn] 5f14 6d9 7s2',                  '[Rn]', 'd', 2, 1],
  ['Cn', 'Copernicium',  '[Rn] 5f14 6d10 7s2',                 '[Rn]', 'd', 2, 0],
  ['Nh', 'Nihonium',     '[Rn] 5f14 6d10 7s2 7p1',             '[Rn]', 'p', 3, 1],
  ['Fl', 'Flerovium',    '[Rn] 5f14 6d10 7s2 7p2',             '[Rn]', 'p', 4, 2],
  ['Mc', 'Moscovium',    '[Rn] 5f14 6d10 7s2 7p3',             '[Rn]', 'p', 5, 3],
  ['Lv', 'Livermorium',  '[Rn] 5f14 6d10 7s2 7p4',             '[Rn]', 'p', 6, 2],
  ['Ts', 'Tennessine',   '[Rn] 5f14 6d10 7s2 7p5',             '[Rn]', 'p', 7, 1],
  ['Og', 'Oganesson',    '[Rn] 5f14 6d10 7s2 7p6',             '[Rn]', 'p', 8, 0],
];

const C_LIGHT = 3.00e8;
const H_PLANCK = 6.626e-34;
const SUPERSCRIPT_TO_NORMAL = { '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9' };
const NORMAL_TO_SUPERSCRIPT = { '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹' };
const FILLING_ORDER = ['1s','2s','2p','3s','3p','4s','3d','4p','5s','4d','5p','6s','4f','5d','6p','7s','5f','6d','7p'];
const CORE_ELECTRONS = { '[He]': 2, '[Ne]': 10, '[Ar]': 18, '[Kr]': 36, '[Xe]': 54, '[Rn]': 86, none: 0 };

const photonPrompts = [
  { label: 'red hydrogen line', wl_nm: 656 },
  { label: 'blue-green hydrogen line', wl_nm: 486.1 },
  { label: 'indigo hydrogen line', wl_nm: 434 },
  { label: 'violet hydrogen line', wl_nm: 410 },
  { label: 'UV lamp line', wl_nm: 320 },
  { label: 'UV hydrogen line', wl_nm: 121 },
  { label: 'green visible line', wl_nm: 530 },
  { label: 'near-IR line', wl_nm: 890 },
  { label: 'IR hydrogen line', wl_nm: 1876 },
  { label: 'yellow visible line', wl_nm: 589 },
  { label: 'orange visible line', wl_nm: 610 },
  { label: 'far-UV line', wl_nm: 250 }
];

const hydrogenPrompts = [
  { ni: 3, nf: 2 },
  { ni: 4, nf: 2 },
  { ni: 5, nf: 2 },
  { ni: 2, nf: 4 },
  { ni: 3, nf: 1 },
  { ni: 1, nf: 4 },
  { ni: 5, nf: 3 },
  { ni: 3, nf: 5 },
  { ni: 6, nf: 2 },
  { ni: 2, nf: 5 },
  { ni: 6, nf: 4 },
  { ni: 4, nf: 1 }
];

const diagCases = [
  {
    prompt: 'Sulfur student work: [Ne] 3s2 3p4 with orbital boxes shown as ↑↓ | ↑ | empty.',
    mistake: 'hund',
    corrected: '[Ne] 3s2 3p4',
    explanation: 'The shorthand is fine, but the orbital diagram pairs too early. In 3p4 the electrons must spread out first, then one pairs.'
  },
  {
    prompt: 'Iron student work: [Ar] 3d6 4s2',
    mistake: 'aufbau',
    corrected: '[Ar] 4s2 3d6',
    explanation: 'For neutral atoms in this course, 4s fills before 3d. The student listed the filled sublevels in the wrong Aufbau order.'
  },
  {
    prompt: 'Chromium student work: [Ar] 4s2 3d4',
    mistake: 'exception',
    corrected: '[Ar] 4s1 3d5',
    explanation: 'Chromium is a classic exception. One electron shifts so the d sublevel becomes half-filled and more stable.'
  },
  {
    prompt: 'Calcium student work: [Ne] 4s2',
    mistake: 'core',
    corrected: '[Ar] 4s2',
    explanation: 'The previous noble gas before calcium is argon, not neon. The shorthand core must include all inner electrons.'
  },
  {
    prompt: 'Oxygen student work uses one orbital with ↑↑.',
    mistake: 'pauli',
    corrected: '[He] 2s2 2p4',
    explanation: 'Two electrons in the same orbital must have opposite spins. Two spin-up electrons in one orbital violate Pauli exclusion.'
  },
  {
    prompt: 'Phosphorus student work: [Ne] 3s2 3p3 with orbital boxes shown as ↑↓ | ↑ | empty.',
    mistake: 'hund',
    corrected: '[Ne] 3s2 3p3',
    explanation: 'In 3p3, the three electrons should occupy the three p orbitals singly before any pairing happens.'
  },
  {
    prompt: 'Nickel student work: [Ar] 3d8 4s2',
    mistake: 'aufbau',
    corrected: '[Ar] 4s2 3d8',
    explanation: 'For neutral atoms in this course sequence, the 4s sublevel is written as filling before 3d.'
  },
  {
    prompt: 'Potassium student work: [Ne] 4s1',
    mistake: 'core',
    corrected: '[Ar] 4s1',
    explanation: 'The noble-gas core before potassium is argon. Neon leaves out too many inner electrons.'
  },
  {
    prompt: 'Magnesium student work shows a single orbital box with ↑↑ for 3s2.',
    mistake: 'pauli',
    corrected: '[Ne] 3s2',
    explanation: 'If two electrons share the same orbital, they must have opposite spins. An ↑↑ pair is not allowed.'
  },
  {
    prompt: 'Copper student work: [Ar] 4s2 3d9',
    mistake: 'exception',
    corrected: '[Ar] 4s1 3d10',
    explanation: 'Copper is another common exception. One electron shifts to make the d sublevel completely filled and more stable.'
  },
  {
    prompt: 'Carbon student work: [He] 2s2 2p2 with orbital boxes shown as ↑↓ | empty | empty.',
    mistake: 'hund',
    corrected: '[He] 2s2 2p2',
    explanation: 'The two 2p electrons should go into separate equal-energy p orbitals before any pairing.'
  },
  {
    prompt: 'Bromine student work: [Ar] 3d10 4s2 4p5',
    mistake: 'aufbau',
    corrected: '[Ar] 4s2 3d10 4p5',
    explanation: 'The filled sublevels should follow the course Aufbau order with 4s filled before 3d.'
  },
  {
    prompt: 'Strontium student work: [Kr] 5s2 with one 5s box drawn as ↑↑.',
    mistake: 'pauli',
    corrected: '[Kr] 5s2',
    explanation: 'A single orbital can hold two electrons only if they have opposite spins, so ↑↑ in one box violates Pauli exclusion.'
  },
  {
    prompt: 'Silicon student work: [He] 3s2 3p2',
    mistake: 'core',
    corrected: '[Ne] 3s2 3p2',
    explanation: 'The shorthand core before silicon is neon, not helium. The noble-gas core must include all inner electrons.'
  },
  {
    prompt: 'Manganese student work: [Ar] 3d5 4s2',
    mistake: 'aufbau',
    corrected: '[Ar] 4s2 3d5',
    explanation: 'The electron count is fine, but the filled sublevels are written out of the course Aufbau order.'
  },
  {
    prompt: 'Nitrogen student work uses one 2p orbital with ↑↑ and leaves another 2p orbital empty.',
    mistake: 'pauli',
    corrected: '[He] 2s2 2p3',
    explanation: 'The same-spin pair is the clearest rule break. Pauli exclusion is violated before you even finish applying Hund’s rule.'
  }
];

const ecState = { currentZ: 16, orbitalStates: [], diagIndex: -1 };
const orbitalChoicePrompts = [
  { label: 'Nitrogen 2p3', sublevel: '2p', electrons: 3, ruleFocus: 'hund' },
  { label: 'Sulfur 3p4', sublevel: '3p', electrons: 4, ruleFocus: 'hund' },
  { label: 'Iron 3d6', sublevel: '3d', electrons: 6, ruleFocus: 'hund' },
  { label: 'Bromine 4p5', sublevel: '4p', electrons: 5, ruleFocus: 'pauli' },
  { label: 'Carbon 2p2', sublevel: '2p', electrons: 2, ruleFocus: 'hund' },
  { label: 'Oxygen 2p4', sublevel: '2p', electrons: 4, ruleFocus: 'pauli' },
  { label: 'Phosphorus 3p3', sublevel: '3p', electrons: 3, ruleFocus: 'hund' },
  { label: 'Chlorine 3p5', sublevel: '3p', electrons: 5, ruleFocus: 'pauli' },
  { label: 'Cobalt 3d7', sublevel: '3d', electrons: 7, ruleFocus: 'hund' },
  { label: 'Nickel 3d8', sublevel: '3d', electrons: 8, ruleFocus: 'pauli' },
  { label: 'Aluminum 3p1', sublevel: '3p', electrons: 1, ruleFocus: 'hund' },
  { label: 'Arsenic 4p3', sublevel: '4p', electrons: 3, ruleFocus: 'hund' }
];
const phState = { index: 0, region: '', trend: '' };
const hyState = { index: 0, transition: '', sign: '', region: '', compare: '' };
const orbState = { index: -1, selected: '', options: [] };

function resetToolState(feedbackId, revealId, revealBtnId, nextBtnId, message) {
  setFeedback(feedbackId, message, 'neutral');
  const reveal = document.getElementById(revealId);
  if (reveal) reveal.hidden = true;
  const revealBtn = document.getElementById(revealBtnId);
  if (revealBtn) revealBtn.disabled = true;
  const nextBtn = document.getElementById(nextBtnId);
  if (nextBtn) nextBtn.disabled = true;
}

function unlockToolProgress(revealBtnId, nextBtnId) {
  const revealBtn = document.getElementById(revealBtnId);
  if (revealBtn) revealBtn.disabled = false;
  const nextBtn = document.getElementById(nextBtnId);
  if (nextBtn) nextBtn.disabled = false;
}

function showToolReveal(revealId) {
  const reveal = document.getElementById(revealId);
  if (!reveal) return;
  reveal.hidden = false;
}

function initElectronChallenge() {
  const select = document.getElementById('ecElementSelect');
  if (!select) return;

  for (let z = 1; z < ELEMENTS.length; z++) {
    if (!ELEMENTS[z]) continue;
    const opt = document.createElement('option');
    opt.value = z;
    opt.textContent = `${z}. ${ELEMENTS[z][0]} — ${ELEMENTS[z][1]}`;
    select.appendChild(opt);
  }

  select.addEventListener('change', function () { setElectronElement(parseInt(select.value, 10)); });
  document.getElementById('ecRandomBtn').addEventListener('click', randomElectronElement);
  document.getElementById('ecNextBtn').addEventListener('click', randomElectronElement);
  document.getElementById('ecCheckBtn').addEventListener('click', checkElectronChallenge);
  document.getElementById('ecRevealBtn').addEventListener('click', revealElectronChallenge);

  initElectronDiagnose();
  buildMiniPT();
  setElectronElement(16);
}

function initElectronDiagnose() {
  document.getElementById('ecDiagCheckBtn').addEventListener('click', checkElectronDiagnosis);
  document.getElementById('ecDiagRevealBtn').addEventListener('click', revealElectronDiagnosis);
  document.getElementById('ecDiagNextBtn').addEventListener('click', nextElectronDiagnosis);
  nextElectronDiagnosis();
}

function setElectronElement(z) {
  if (!z || !ELEMENTS[z]) return;
  ecState.currentZ = z;
  document.getElementById('ecElementSelect').value = String(z);
  const [sym, name] = ELEMENTS[z];
  const profile = getElectronProfile(z);
  document.getElementById('ecPrompt').innerHTML =
    `<strong>Element: ${name} (${sym})</strong>` +
    `<p>First decision: <strong>Which sublevel is being filled last?</strong> Find the block first, then the number.</p>`;

  renderElectronSublevelChoices(profile.lastSublevel.name);
  resetToolState('ecFeedback', 'ecAnswer', 'ecRevealBtn', 'ecNextBtn', 'Choose one last-filled sublevel, then click Check.');
  document.querySelectorAll('.pt-cell.selected').forEach(function (c) { c.classList.remove('selected'); });
  const activePt = document.querySelector(`.pt-cell[data-z="${z}"]`);
  if (activePt) activePt.classList.add('selected');
}

function randomElectronElement() {
  const pool = [6, 8, 11, 16, 17, 19, 20, 24, 26, 29];
  const z = pool[Math.floor(Math.random() * pool.length)];
  setElectronElement(z);
}

function getElectronProfile(z) {
  const [sym, name, config, core, block, , unpaired] = ELEMENTS[z];
  const cleanConfig = stripConfigDecorations(config);
  const parts = parseConfigParts(cleanConfig.replace(/\[.*?\]\s*/, ''));
  const lastSublevel = parts[parts.length - 1];
  const shorthand = buildShorthandConfig(cleanConfig, core || '');
  return { sym, name, config: cleanConfig, core: core || 'none', block, displayBlock: lastSublevel.type, unpaired, shorthand, lastSublevel };
}

function stripConfigDecorations(config) {
  return config.replace(' ★', '').trim();
}

function parseConfigParts(configTail) {
  const normalized = toNormalDigits(configTail);
  return normalized.split(/\s+/).map(function (part) {
    const match = part.match(/^(\d)([spdf])(\d+)$/);
    if (!match) return null;
    return { name: `${match[1]}${match[2]}`, n: parseInt(match[1], 10), type: match[2], count: parseInt(match[3], 10) };
  }).filter(Boolean);
}

function toNormalDigits(text) {
  return text.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, function (ch) { return SUPERSCRIPT_TO_NORMAL[ch] || ch; });
}

function toSuperscriptDigits(text) {
  return String(text).replace(/\d/g, function (ch) { return NORMAL_TO_SUPERSCRIPT[ch] || ch; });
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatElectronToken(token) {
  const normalized = toNormalDigits(token);
  const sublevelMatch = normalized.match(/^(\d)([spdf])(\d+)$/i);
  if (sublevelMatch) {
    return `<span class="chem-token">${sublevelMatch[1]}${sublevelMatch[2]}<span class="ec-count">${sublevelMatch[3]}</span></span>`;
  }
  if (/^\[[A-Za-z]{1,2}\]$/.test(normalized)) {
    return `<span class="chem-token">${escapeHtml(normalized)}</span>`;
  }
  return escapeHtml(token);
}

function formatElectronConfig(config) {
  return String(config || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(formatElectronToken)
    .join(' ');
}

function formatElectronText(text) {
  return escapeHtml(text || '').replace(/\[[A-Za-z]{1,2}\]|\d[spdf][⁰¹²³⁴⁵⁶⁷⁸⁹0-9]+/g, function (match) {
    return formatElectronToken(match);
  });
}

function normalizeElementConfigData() {
  for (let z = 1; z < ELEMENTS.length; z++) {
    if (!ELEMENTS[z]) continue;
    ELEMENTS[z][2] = toNormalDigits(stripConfigDecorations(ELEMENTS[z][2]));
  }
  diagCases.forEach(function (item) {
    item.prompt = toNormalDigits(item.prompt);
    item.corrected = toNormalDigits(item.corrected);
  });
}

function normalizeConfigInput(text) {
  return toNormalDigits((text || '').trim())
    .replace(/\s+/g, ' ')
    .replace(/\s*\[\s*/g, '[')
    .replace(/\s*\]\s*/g, '] ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function buildShorthandConfig(cleanConfig, core) {
  if (!core) return cleanConfig;
  if (cleanConfig.startsWith('[')) return cleanConfig;
  const coreCount = CORE_ELECTRONS[core];
  const parts = parseConfigParts(cleanConfig);
  let count = 0;
  let startIndex = 0;
  while (startIndex < parts.length && count < coreCount) {
    count += parts[startIndex].count;
    startIndex++;
  }
  if (count !== coreCount) return cleanConfig;
  const tail = parts.slice(startIndex).map(function (part) {
    return `${part.name}${part.count}`;
  }).join(' ');
  return `${core}${tail ? ` ${tail}` : ''}`.trim();
}

normalizeElementConfigData();

function renderElectronSublevelChoices(correctValue) {
  const wrap = document.getElementById('ecSublevelChoices');
  if (!wrap) return;
  wrap.innerHTML = '';
  const choices = electronSublevelChoices(correctValue);
  choices.forEach(function (choice) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'segment-btn tool-choice-btn explore-choice';
    btn.dataset.value = choice;
    btn.setAttribute('aria-pressed', 'false');
    btn.textContent = choice;
    btn.addEventListener('click', function () {
      wrap.querySelectorAll('.explore-choice').forEach(function (other) {
        other.classList.remove('active');
        other.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    });
    wrap.appendChild(btn);
  });
}

function electronSublevelChoices(correctValue) {
  const match = correctValue.match(/^(\d)([spdf])$/);
  if (!match) return [correctValue];
  const n = parseInt(match[1], 10);
  const type = match[2];
  const choices = new Set([correctValue]);
  if (type === 's') choices.add(`${n}p`);
  if (type === 'p') choices.add(`${n}s`);
  if (type === 'd') choices.add(`${n + 1}s`);
  if (type === 'f') choices.add(`${n + 2}s`);
  if (type !== 's' && n > 1) choices.add(`${n - 1}${type}`);
  if (type !== 'f') choices.add(`${n + 1}${type}`);
  return Array.from(choices).slice(0, 4);
}

function orbitalStateMarkup(state) {
  if (state === 1) return '<span class="arrow-up-el">↑</span>';
  if (state === 2) return '<span class="arrow-up-el">↑</span><span class="arrow-down-el">↓</span>';
  if (state === 3) return '<span class="arrow-up-el">↑</span><span class="arrow-up-el">↑</span>';
  return '';
}

function checkElectronChallenge() {
  const z = ecState.currentZ;
  if (!z) return;
  const profile = getElectronProfile(z);
  const chosenLast = getChoiceValue('ecSublevelChoices');
  if (!chosenLast) {
    setFeedback('ecFeedback', 'Choose one answer first — find the block, then use the period to choose the number.', 'warn');
    return;
  }
  unlockToolProgress('ecRevealBtn', 'ecNextBtn');
  if (chosenLast !== profile.lastSublevel.name) {
    setFeedback('ecFeedback', `Error: wrong last-filled sublevel. Rule: the block gives the letter and the period gives the number. Next step: locate the element's block, then match the period to the sublevel.`, 'warn');
    return;
  }

  setFeedback('ecFeedback', `Right — the last-filled sublevel is ${profile.lastSublevel.name}. Rule: block gives the letter and period gives the number.`, 'good');
}

function revealElectronChallenge() {
  const z = ecState.currentZ;
  if (!z) return;
  const profile = getElectronProfile(z);
  const answer = document.getElementById('ecAnswer');
  showToolReveal('ecAnswer');
  answer.innerHTML =
    `<div class="icon">▸</div><div class="key-fact-copy"><p class="key-fact-title">Why ${profile.lastSublevel.name} is correct</p><ul class="key-fact-list"><li>${profile.sym} ends in a <strong>${profile.displayBlock}</strong> sublevel, so the block gives the letter.</li><li>Then use the shell number for that last-filled sublevel.</li><li><strong>Answer:</strong> ${profile.lastSublevel.name}</li></ul>${renderStaticOrbitalRow(profile.lastSublevel)}</div>`;
}

function renderStaticOrbitalRow(lastSublevel) {
  const states = buildExpectedOccupancy(lastSublevel.type, lastSublevel.count);
  let html = `<div class="orbital-row"><span class="sublevel-name">${lastSublevel.name}:</span>`;
  states.forEach(function (state) {
    const cls = state === 0 ? 'orb-box empty' : state === 1 ? 'orb-box up-only' : 'orb-box full';
    html += `<div class="${cls}">${orbitalStateMarkup(state)}</div>`;
  });
  html += '</div>';
  return html;
}

function buildExpectedOccupancy(type, count) {
  const numOrbs = getOrbitalCount(type);
  const fills = new Array(numOrbs).fill(0);
  let rem = count;
  for (let i = 0; i < numOrbs && rem > 0; i++) { fills[i]++; rem--; }
  for (let i = 0; i < numOrbs && rem > 0; i++) { fills[i]++; rem--; }
  return fills;
}

function getOrbitalCount(type) {
  return type === 's' ? 1 : type === 'p' ? 3 : type === 'd' ? 5 : 7;
}

function nextElectronDiagnosis() {
  ecState.diagIndex = (ecState.diagIndex + 1) % diagCases.length;
  loadElectronDiagnosis();
}

function loadElectronDiagnosis() {
  const diag = diagCases[ecState.diagIndex];
  document.getElementById('ecDiagPrompt').innerHTML = `<strong>Find the broken rule.</strong><p>${formatElectronText(diag.prompt)}</p>`;
  document.getElementById('ecDiagMistakeSelect').value = '';
  resetToolState('ecDiagFeedback', 'ecDiagAnswer', 'ecDiagRevealBtn', 'ecDiagNextBtn', 'Choose the broken rule, then click Check.');
}

function checkElectronDiagnosis() {
  const diag = diagCases[ecState.diagIndex];
  const chosen = document.getElementById('ecDiagMistakeSelect').value;
  if (!chosen) {
    setFeedback('ecDiagFeedback', 'Choose one rule first — focus on the main error in the student work.', 'warn');
    return;
  }
  unlockToolProgress('ecDiagRevealBtn', 'ecDiagNextBtn');
  if (chosen !== diag.mistake) {
    if (diag.mistake === 'hund') {
      setFeedback('ecDiagFeedback', `Error: wrong rule selected. Rule: Hund's rule means equal-energy orbitals get one electron each before pairing. Next step: look for early pairing across the row.`, 'warn');
    } else if (diag.mistake === 'pauli') {
      setFeedback('ecDiagFeedback', `Error: wrong rule selected. Rule: two electrons in one orbital must have opposite spins. Next step: find the box that shows an invalid same-spin pair.`, 'warn');
    } else if (diag.mistake === 'aufbau') {
      setFeedback('ecDiagFeedback', `Error: wrong rule selected. Rule: use the Aufbau order from this unit, with 4s before 3d for neutral atoms. Next step: recheck the sublevel order in the student's work.`, 'warn');
    } else if (diag.mistake === 'core') {
      setFeedback('ecDiagFeedback', `Error: wrong rule selected. Rule: noble-gas shorthand must include all inner electrons from the previous noble gas. Next step: find the noble gas immediately before the element.`, 'warn');
    } else {
      setFeedback('ecDiagFeedback', `Error: wrong rule selected. Rule: chromium and copper are common exception cases after the standard pattern. Next step: compare the usual Aufbau prediction with the actual stable arrangement.`, 'warn');
    }
    return;
  }
  if (diag.mistake === 'hund') {
    setFeedback('ecDiagFeedback', `Right — this breaks Hund's rule. Rule: equal-energy orbitals get one electron each before pairing.`, 'good');
  } else if (diag.mistake === 'pauli') {
    setFeedback('ecDiagFeedback', `Right — this breaks Pauli exclusion. Rule: two electrons in one orbital must have opposite spins.`, 'good');
  } else if (diag.mistake === 'aufbau') {
    setFeedback('ecDiagFeedback', `Right — this breaks the Aufbau order. Rule: follow the filling order used in this course, with 4s before 3d for neutral atoms.`, 'good');
  } else if (diag.mistake === 'core') {
    setFeedback('ecDiagFeedback', `Right — the noble-gas core is wrong. Rule: shorthand must include all inner electrons from the previous noble gas.`, 'good');
  } else {
    setFeedback('ecDiagFeedback', 'Right — this misses a common exception. Rule: chromium uses the more stable 4s1 3d5 arrangement.', 'good');
  }
}

function revealElectronDiagnosis() {
  const diag = diagCases[ecState.diagIndex];
  const answer = document.getElementById('ecDiagAnswer');
  showToolReveal('ecDiagAnswer');
  answer.innerHTML = `<div class="icon">▸</div><div class="key-fact-copy"><p class="key-fact-title">Reasoning and correction</p><ul class="key-fact-list"><li><strong>Corrected work:</strong> <span class="electron-config-inline">${formatElectronConfig(diag.corrected)}</span></li><li>${escapeHtml(diag.explanation)}</li></ul></div>`;
}

function initOrbitalChoiceChallenge() {
  const grid = document.getElementById('orbChoiceGrid');
  if (!grid) return;
  document.getElementById('orbCheckBtn').addEventListener('click', checkOrbitalChoiceChallenge);
  document.getElementById('orbRevealBtn').addEventListener('click', revealOrbitalChoiceChallenge);
  document.getElementById('orbNextBtn').addEventListener('click', nextOrbitalChoicePrompt);
  nextOrbitalChoicePrompt();
}

function nextOrbitalChoicePrompt() {
  orbState.index = (orbState.index + 1) % orbitalChoicePrompts.length;
  orbState.selected = '';
  const prompt = orbitalChoicePrompts[orbState.index];
  document.getElementById('orbPrompt').innerHTML =
    `<strong>${formatElectronText(prompt.label)}</strong>` +
    `<p>Choose the orbital diagram that correctly places <strong>${prompt.electrons} electrons</strong> in the <strong>${prompt.sublevel}</strong> sublevel.</p>`;
  orbState.options = buildOrbitalChoiceOptions(prompt);
  renderOrbitalChoiceOptions();
  resetToolState('orbFeedback', 'orbAnswer', 'orbRevealBtn', 'orbNextBtn', 'Choose one diagram, then click Check.');
}

function buildOrbitalChoiceOptions(prompt) {
  const type = prompt.sublevel.replace(/\d/, '');
  const correctStates = buildExpectedOccupancy(type, prompt.electrons);
  const earlyPairStates = buildEarlyPairOccupancy(type, prompt.electrons);
  const pauliStates = buildPauliViolationOccupancy(type, prompt.electrons);
  const options = [
    {
      id: 'A',
      label: 'A',
      states: prompt.ruleFocus === 'hund' ? earlyPairStates : pauliStates,
      verdict: prompt.ruleFocus === 'hund' ? 'hund' : 'pauli'
    },
    {
      id: 'B',
      label: 'B',
      states: correctStates,
      verdict: 'correct'
    },
    {
      id: 'C',
      label: 'C',
      states: prompt.ruleFocus === 'hund' ? pauliStates : earlyPairStates,
      verdict: prompt.ruleFocus === 'hund' ? 'pauli' : 'hund'
    }
  ];
  return options;
}

function buildEarlyPairOccupancy(type, count) {
  const numOrbs = getOrbitalCount(type);
  const fills = new Array(numOrbs).fill(0);
  let rem = count;
  let idx = 0;
  while (rem >= 2 && idx < numOrbs) {
    fills[idx] = 2;
    rem -= 2;
    idx++;
  }
  idx = 0;
  while (rem > 0 && idx < numOrbs) {
    if (fills[idx] === 0) {
      fills[idx] = 1;
      rem--;
    }
    idx++;
  }
  return fills;
}

function buildPauliViolationOccupancy(type, count) {
  const correct = buildExpectedOccupancy(type, count);
  const states = correct.slice();
  const singleIndex = states.findIndex(function (state) { return state === 1; });
  if (singleIndex !== -1 && count >= 2) {
    states[singleIndex] = 3;
    const donorIndex = states.findIndex(function (state, index) { return index !== singleIndex && state > 0; });
    if (donorIndex !== -1) states[donorIndex] -= 1;
    return states;
  }
  const firstPairIndex = states.findIndex(function (state) { return state === 2; });
  if (firstPairIndex !== -1) {
    states[firstPairIndex] = 3;
    const otherPairIndex = states.findIndex(function (state, index) { return index !== firstPairIndex && state === 2; });
    if (otherPairIndex !== -1) states[otherPairIndex] = 1;
  }
  return states;
}

function renderOrbitalChoiceOptions() {
  const grid = document.getElementById('orbChoiceGrid');
  if (!grid) return;
  const prompt = orbitalChoicePrompts[orbState.index];
  grid.innerHTML = '';
  orbState.options.forEach(function (option) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'segment-btn tool-choice-btn explore-choice cardlike';
    card.dataset.value = option.id;
    card.setAttribute('aria-pressed', 'false');
    card.innerHTML =
      `<div class="orb-choice-heading">` +
        `<strong class="orb-choice-letter">${option.label}:</strong>` +
        `<span class="orb-choice-title">${prompt.sublevel} orbital diagram</span>` +
      `</div>` +
      renderOrbitalRowMarkup(prompt.sublevel, option.states);
    card.addEventListener('click', function () {
      orbState.selected = option.id;
      grid.querySelectorAll('.explore-choice').forEach(function (other) {
        other.classList.remove('active');
        other.setAttribute('aria-pressed', 'false');
      });
      card.classList.add('active');
      card.setAttribute('aria-pressed', 'true');
    });
    grid.appendChild(card);
  });
}

function renderOrbitalRowMarkup(sublevel, states) {
  let html = `<div class="orbital-row"><span class="sublevel-name">${sublevel}:</span>`;
  states.forEach(function (state) {
    const cls = state === 0 ? 'orb-box empty' : state === 1 ? 'orb-box up-only' : state === 2 ? 'orb-box full' : 'orb-box forbidden';
    html += `<div class="${cls}">${orbitalStateMarkup(state)}</div>`;
  });
  html += '</div>';
  return html;
}

function checkOrbitalChoiceChallenge() {
  const selected = orbState.options.find(function (option) { return option.id === orbState.selected; });
  if (!selected) {
    setFeedback('orbFeedback', 'Choose one diagram first — count the electrons, spread them out first, and rule out any box with the same-spin pair.', 'warn');
    return;
  }
  unlockToolProgress('orbRevealBtn', 'orbNextBtn');
  if (selected.verdict === 'hund') {
    setFeedback('orbFeedback', 'Error: this pairs electrons too early. Rule: in equal-energy orbitals, place one electron in each orbital before pairing. Next step: look for the row that spreads the single arrows out first.', 'warn');
    return;
  }
  if (selected.verdict === 'pauli') {
    setFeedback('orbFeedback', 'Error: one orbital shows two electrons with the same spin. Rule: two electrons in one orbital must have opposite spins. Next step: rule out any box with ↑↑.', 'warn');
    return;
  }
  setFeedback('orbFeedback', 'Right — this diagram follows Hund first and Pauli within each box. Rule: spread out across equal-energy orbitals before pairing, and only opposite spins can share one orbital.', 'good');
}

function revealOrbitalChoiceChallenge() {
  const prompt = orbitalChoicePrompts[orbState.index];
  const correct = orbState.options.find(function (option) { return option.verdict === 'correct'; });
  const answer = document.getElementById('orbAnswer');
  showToolReveal('orbAnswer');
  answer.innerHTML =
    `<div class="icon">▸</div><div class="key-fact-copy"><p class="key-fact-title">Why ${correct.label} is correct</p><ul class="key-fact-list"><li>${prompt.electrons} electrons go into the <strong>${prompt.sublevel}</strong> sublevel.</li><li>Fill each equal-energy orbital once before pairing.</li><li>If two electrons share one box, they must be <strong>↑↓</strong>.</li></ul>${renderOrbitalRowMarkup(prompt.sublevel, correct.states)}</div>`;
}

function initPhotonChallenge() {
  initChoiceButtons('phRegionChoices');

  document.getElementById('phCheckBtn').addEventListener('click', checkPhotonChallenge);
  document.getElementById('phRevealBtn').addEventListener('click', revealPhotonChallenge);
  document.getElementById('phNextBtn').addEventListener('click', nextPhotonPrompt);

  phState.index = -1;
  nextPhotonPrompt();
}

function nextPhotonPrompt() {
  phState.index = (phState.index + 1) % photonPrompts.length;
  clearChoiceGroup('phRegionChoices');
  document.getElementById('phPredictedMarker').hidden = true;
  document.getElementById('phActualMarker').hidden = true;

  const prompt = photonPrompts[phState.index];
  document.getElementById('phPrompt').innerHTML =
    `<strong>Wavelength: ${prompt.wl_nm} nm</strong>` +
    `<p>First decision: <strong>Which region of light contains this wavelength?</strong></p>`;
  resetToolState('phFeedback', 'phAnswer', 'phRevealBtn', 'phNextBtn', 'Choose one light region, then click Check.');
}

function checkPhotonChallenge() {
  const prompt = photonPrompts[phState.index];
  const expectedRegion = getPhotonRegion(prompt.wl_nm);
  const chosenRegion = getChoiceValue('phRegionChoices');
  if (!chosenRegion) {
    setFeedback('phFeedback', 'Choose one region first — compare the wavelength to the visible range.', 'warn');
    return;
  }
  unlockToolProgress('phRevealBtn', 'phNextBtn');
  if (chosenRegion !== expectedRegion) {
    setFeedback('phFeedback', 'Error: wrong light region. Rule: visible light is about 400 to 700 nm; shorter is UV and longer is IR. Next step: compare the wavelength to 400 nm and 700 nm.', 'warn');
    return;
  }

  updateSpectrumMarkers(chosenRegion, prompt.wl_nm, true);
  setFeedback('phFeedback', `Right — ${prompt.wl_nm} nm ${prompt.wl_nm < 400 ? 'is shorter than visible light, so it is ultraviolet' : prompt.wl_nm > 700 ? 'is longer than visible light, so it is infrared' : 'falls inside the visible range, so it is visible light'}. Rule: compare wavelength to the visible range first.`, 'good');
}

function revealPhotonChallenge() {
  const prompt = photonPrompts[phState.index];
  updateSpectrumMarkers(getChoiceValue('phRegionChoices') || getPhotonRegion(prompt.wl_nm), prompt.wl_nm, true);
  const answer = document.getElementById('phAnswer');
  showToolReveal('phAnswer');
  answer.innerHTML =
    `<div class="icon">▸</div><div class="key-fact-copy"><p class="key-fact-title">Why ${getPhotonRegion(prompt.wl_nm)} is correct</p><ul class="key-fact-list"><li>Visible light is about 400 to 700 nm.</li><li>Shorter wavelengths are UV, and longer wavelengths are IR.</li><li>Shorter wavelength also means higher photon energy.</li></ul></div>`;
}

function updateSpectrumMarkers(chosenRegion, wl_nm, showActual) {
  const predicted = document.getElementById('phPredictedMarker');
  const actual = document.getElementById('phActualMarker');
  const regionPositions = { UV: 18, Visible: 50, IR: 82 };
  if (chosenRegion && predicted) {
    predicted.hidden = false;
    predicted.style.left = `${regionPositions[chosenRegion] || 50}%`;
  }
  if (actual && showActual) {
    actual.hidden = false;
    actual.style.left = `${spectrumPositionForWavelength(wl_nm)}%`;
  }
}

function spectrumPositionForWavelength(wl_nm) {
  if (wl_nm < 400) return 18;
  if (wl_nm > 700) return 82;
  return 22 + ((wl_nm - 400) / 300) * 56;
}

function getPhotonRegion(wl_nm) {
  if (wl_nm < 400) return 'UV';
  if (wl_nm <= 700) return 'Visible';
  return 'IR';
}

function initHydrogenChallenge() {
  initChoiceButtons('hyTransitionChoices');

  document.getElementById('hyCheckBtn').addEventListener('click', checkHydrogenChallenge);
  document.getElementById('hyRevealBtn').addEventListener('click', revealHydrogenChallenge);
  document.getElementById('hyNextBtn').addEventListener('click', nextHydrogenPrompt);

  hyState.index = -1;
  nextHydrogenPrompt();
}

function nextHydrogenPrompt() {
  hyState.index = (hyState.index + 1) % hydrogenPrompts.length;
  clearChoiceGroup('hyTransitionChoices');

  const prompt = hydrogenPrompts[hyState.index];
  document.getElementById('hyPrompt').innerHTML =
    `<strong>Hydrogen transition: n = ${prompt.ni} → n = ${prompt.nf}</strong>` +
    `<p>Read the arrow first. Is this emission or absorption?</p>`;
  renderHydrogenDiagram(prompt);
  resetToolState('hyFeedback', 'hyAnswer', 'hyRevealBtn', 'hyNextBtn', 'Choose emission or absorption, then click Check.');
}

function renderHydrogenDiagram(prompt) {
  const diagram = document.getElementById('hyDiagram');
  if (!diagram) return;
  diagram.innerHTML = '';
  const levelPositions = { 1: 215, 2: 170, 3: 135, 4: 105, 5: 80, 6: 58, 7: 38 };
  for (let n = 1; n <= 7; n++) {
    const line = document.createElement('div');
    line.className = 'hydrogen-level';
    line.style.top = `${levelPositions[n]}px`;
    line.innerHTML = `<span>n = ${n}</span>`;
    diagram.appendChild(line);
  }
  const arrow = document.createElement('div');
  const isDown = prompt.ni > prompt.nf;
  arrow.className = `hydrogen-arrow ${isDown ? 'down' : 'up'}`;
  arrow.style.top = `${Math.min(levelPositions[prompt.ni], levelPositions[prompt.nf])}px`;
  arrow.style.height = `${Math.abs(levelPositions[prompt.ni] - levelPositions[prompt.nf])}px`;
  diagram.appendChild(arrow);
}

function checkHydrogenChallenge() {
  const prompt = hydrogenPrompts[hyState.index];
  const isEmission = prompt.ni > prompt.nf;
  const chosenTransition = getChoiceValue('hyTransitionChoices');
  if (!chosenTransition) {
    setFeedback('hyFeedback', 'Choose one answer first — follow the arrow direction.', 'warn');
    return;
  }
  unlockToolProgress('hyRevealBtn', 'hyNextBtn');
  if (chosenTransition !== (isEmission ? 'emission' : 'absorption')) {
    setFeedback('hyFeedback', `Error: wrong process. Rule: a ${isEmission ? 'downward' : 'upward'} arrow means the electron ${isEmission ? 'drops to a lower energy level and emits light' : 'moves to a higher energy level and absorbs energy'}. Next step: follow the arrow direction before thinking about equations.`, 'warn');
    return;
  }

  setFeedback('hyFeedback', `Right — the arrow points ${isEmission ? 'downward' : 'upward'}, so the electron ${isEmission ? 'drops to a lower energy level and the atom emits light' : 'moves to a higher energy level and the atom absorbs energy'}. Rule: arrow direction tells you emission or absorption first.`, 'good');
}

function revealHydrogenChallenge() {
  const prompt = hydrogenPrompts[hyState.index];
  const data = hydrogenTransitionData(prompt.ni, prompt.nf);
  const isEmission = prompt.ni > prompt.nf;
  const answer = document.getElementById('hyAnswer');
  showToolReveal('hyAnswer');
  answer.innerHTML =
    `<div class="icon">▸</div><div class="key-fact-copy"><p class="key-fact-title">Why ${isEmission ? 'emission' : 'absorption'} is correct</p><ul class="key-fact-list"><li>For the atom, ΔE is <strong>${isEmission ? 'negative' : 'positive'}</strong> because ΔE = E<sub>final</sub> − E<sub>initial</sub>.</li><li>The wavelength for this transition is <strong>${data.wl_nm.toFixed(1)} nm</strong>, which is in the <strong>${data.region}</strong> region.</li></ul></div>`;
}

function hydrogenTransitionData(ni, nf) {
  const E0 = -2.18e-18;
  const Ei = E0 / (ni * ni);
  const Ef = E0 / (nf * nf);
  const dE = Ef - Ei;
  const absdE = Math.abs(dE);
  const freq = absdE / H_PLANCK;
  const wl_nm = (C_LIGHT / freq) / 1e-9;
  return { dE, freq, wl_nm, region: getPhotonRegion(wl_nm) };
}

function initChoiceButtons(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll('.explore-choice').forEach(function (btn) {
    btn.addEventListener('click', function () {
      container.querySelectorAll('.explore-choice').forEach(function (other) {
        other.classList.remove('active');
        other.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    });
  });
}

function getChoiceValue(containerId) {
  const selected = document.querySelector(`#${containerId} .explore-choice.active`);
  return selected ? selected.dataset.value : '';
}

function clearChoiceGroup(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll('.explore-choice').forEach(function (btn) {
    btn.classList.remove('active');
    btn.setAttribute('aria-pressed', 'false');
  });
}

function setFeedback(id, message, tone) {
  const box = document.getElementById(id);
  if (!box) return;
  const state = tone === 'good' ? 'correct' : tone === 'warn' ? 'incorrect' : tone === 'info' ? 'info' : 'pending';
  box.className = 'segment-readout tool-feedback';
  box.dataset.state = state;
  box.textContent = message;
}

// ── MINI PERIODIC TABLE ───────────────────────────────────────────────────
const PT_MAIN = [
  [1,1,'H','s'],[1,18,'He','s'],
  [2,1,'Li','s'],[2,2,'Be','s'],
  [2,13,'B','p'],[2,14,'C','p'],[2,15,'N','p'],[2,16,'O','p'],[2,17,'F','p'],[2,18,'Ne','p'],
  [3,1,'Na','s'],[3,2,'Mg','s'],
  [3,13,'Al','p'],[3,14,'Si','p'],[3,15,'P','p'],[3,16,'S','p'],[3,17,'Cl','p'],[3,18,'Ar','p'],
  [4,1,'K','s'],[4,2,'Ca','s'],
  [4,3,'Sc','d'],[4,4,'Ti','d'],[4,5,'V','d'],[4,6,'Cr','d'],[4,7,'Mn','d'],
  [4,8,'Fe','d'],[4,9,'Co','d'],[4,10,'Ni','d'],[4,11,'Cu','d'],[4,12,'Zn','d'],
  [4,13,'Ga','p'],[4,14,'Ge','p'],[4,15,'As','p'],[4,16,'Se','p'],[4,17,'Br','p'],[4,18,'Kr','p'],
  [5,1,'Rb','s'],[5,2,'Sr','s'],
  [5,3,'Y','d'],[5,4,'Zr','d'],[5,5,'Nb','d'],[5,6,'Mo','d'],[5,7,'Tc','d'],
  [5,8,'Ru','d'],[5,9,'Rh','d'],[5,10,'Pd','d'],[5,11,'Ag','d'],[5,12,'Cd','d'],
  [5,13,'In','p'],[5,14,'Sn','p'],[5,15,'Sb','p'],[5,16,'Te','p'],[5,17,'I','p'],[5,18,'Xe','p'],
  [6,1,'Cs','s'],[6,2,'Ba','s'],
  [6,3,'*','f'],
  [6,4,'Hf','d'],[6,5,'Ta','d'],[6,6,'W','d'],[6,7,'Re','d'],
  [6,8,'Os','d'],[6,9,'Ir','d'],[6,10,'Pt','d'],[6,11,'Au','d'],[6,12,'Hg','d'],
  [6,13,'Tl','p'],[6,14,'Pb','p'],[6,15,'Bi','p'],[6,16,'Po','p'],[6,17,'At','p'],[6,18,'Rn','p'],
  [7,1,'Fr','s'],[7,2,'Ra','s'],
  [7,3,'**','f'],
  [7,4,'Rf','d'],[7,5,'Db','d'],[7,6,'Sg','d'],[7,7,'Bh','d'],
  [7,8,'Hs','d'],[7,9,'Mt','d'],[7,10,'Ds','d'],[7,11,'Rg','d'],[7,12,'Cn','d'],
  [7,13,'Nh','p'],[7,14,'Fl','p'],[7,15,'Mc','p'],[7,16,'Lv','p'],[7,17,'Ts','p'],[7,18,'Og','p'],
];

const PT_F = [
  [1,1,'La'],[1,2,'Ce'],[1,3,'Pr'],[1,4,'Nd'],[1,5,'Pm'],
  [1,6,'Sm'],[1,7,'Eu'],[1,8,'Gd'],[1,9,'Tb'],[1,10,'Dy'],
  [1,11,'Ho'],[1,12,'Er'],[1,13,'Tm'],[1,14,'Yb'],[1,15,'Lu'],
  [2,1,'Ac'],[2,2,'Th'],[2,3,'Pa'],[2,4,'U'],[2,5,'Np'],
  [2,6,'Pu'],[2,7,'Am'],[2,8,'Cm'],[2,9,'Bk'],[2,10,'Cf'],
  [2,11,'Es'],[2,12,'Fm'],[2,13,'Md'],[2,14,'No'],[2,15,'Lr'],
];

const SYM_TO_Z = {};
for (let z = 1; z < ELEMENTS.length; z++) {
  if (ELEMENTS[z]) SYM_TO_Z[ELEMENTS[z][0]] = z;
}

function makePTCell(sym, blkClass, z, isPlaceholder, tooltipId) {
  const div = document.createElement('div');
  div.className = `pt-cell ${blkClass}`;
  div.textContent = sym;
  if (z) div.dataset.z = z;
  if (isPlaceholder) {
    div.style.fontSize = '0.55rem';
    div.style.cursor = 'default';
    return div;
  }
  if (z) {
    const tooltip = document.getElementById(tooltipId);
    div.addEventListener('mouseenter', function (e) {
      const data = ELEMENTS[z];
      if (tooltip) {
        tooltip.innerHTML = `<strong>${z}. ${sym} — ${data[1]}</strong><br>${data[4]}-block element`;
        tooltip.style.display = 'block';
      }
      moveTip(e);
    });
    div.addEventListener('mousemove', moveTip);
    div.addEventListener('mouseleave', function () { if (tooltip) tooltip.style.display = 'none'; });
    div.addEventListener('click', function () {
      document.querySelectorAll('.pt-cell.selected').forEach(function (c) { c.classList.remove('selected'); });
      div.classList.add('selected');
      const sel = document.getElementById('ecElementSelect');
      if (sel) sel.value = z;
      setElectronElement(z);
    });
    div.style.cursor = 'pointer';
  }
  return div;
}

function buildMiniPT() {
  buildMiniPTInstance('miniPT', 'miniPT_f', 'ptTooltip');
  buildMiniPTInstance('miniPTChallenge', 'miniPTChallenge_f', 'ptTooltipChallenge');
}

function buildMiniPTInstance(gridId, fGridId, tooltipId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  const cells = {};
  grid.innerHTML = '';

  for (let r = 1; r <= 7; r++) {
    for (let c = 1; c <= 18; c++) {
      const div = document.createElement('div');
      div.className = 'pt-cell empty';
      div.style.gridRow = r;
      div.style.gridColumn = c;
      grid.appendChild(div);
      cells[`${r}-${c}`] = div;
    }
  }

  for (const [row, col, sym, blk] of PT_MAIN) {
    const key = `${row}-${col}`;
    const old = cells[key];
    const blkClass = { s:'s-blk', p:'p-blk', d:'d-blk', f:'f-blk' }[blk];
    const isPlaceholder = sym === '*' || sym === '**';
    const z = isPlaceholder ? null : SYM_TO_Z[sym];
    const cell = makePTCell(sym, blkClass, z, isPlaceholder, tooltipId);
    cell.style.gridRow = row;
    cell.style.gridColumn = col;
    grid.replaceChild(cell, old);
    cells[key] = cell;
  }

  const fgrid = document.getElementById(fGridId);
  if (!fgrid) return;
  fgrid.innerHTML = '';
  const fLookup = {};
  for (const [row, col, sym] of PT_F) { fLookup[`${row}-${col}`] = sym; }

  for (let r = 1; r <= 2; r++) {
    for (let c = 1; c <= 15; c++) {
      const sym = fLookup[`${r}-${c}`];
      let cell;
      if (sym) {
        const z = SYM_TO_Z[sym];
        cell = makePTCell(sym, 'f-blk', z, false, tooltipId);
      } else {
        cell = document.createElement('div');
        cell.className = 'pt-cell empty';
      }
      cell.style.gridRow = r;
      cell.style.gridColumn = c;
      fgrid.appendChild(cell);
    }
  }
}

function moveTip(e) {
  document.querySelectorAll('.pt-tooltip').forEach(function (tip) {
    if (tip.style.display === 'block') {
      tip.style.left = (e.clientX + 14) + 'px';
      tip.style.top = (e.clientY + 14) + 'px';
    }
  });
}
