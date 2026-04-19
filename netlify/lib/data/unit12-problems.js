/* ── Unit 12 Problem Bank — Solutions
   82 problems total: 30 calc | 33 concept | 18 multi (actually 19 multi — p64–p82)
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

/* ══════════════ CALCULATION (30) ══════════════ */
{id:'p01',type:'calc',tag:'Calculation',
 q:'What is the molarity of a solution made by dissolving 11.7 g of NaCl (M = 58.44 g/mol) in enough water to make 500.0 mL of solution?',
 answer:0.400, tolerance:0.005, unit:'M',
 solution:'mol NaCl = 11.7 ÷ 58.44 = 0.2002 mol; M = 0.2002 ÷ 0.5000 L = <strong>0.400 M</strong>'},

{id:'p02',type:'calc',tag:'Calculation',
 q:'How many moles of solute are in 350.0 mL of a 2.00 M NaOH solution?',
 answer:0.700, tolerance:0.005, unit:'mol',
 solution:'mol = M × L = 2.00 × 0.3500 = <strong>0.700 mol</strong>'},

{id:'p03',type:'calc',tag:'Calculation',
 q:'What volume (in mL) of a 0.500 M glucose solution contains 0.125 mol glucose?',
 answer:250, tolerance:2, unit:'mL',
 solution:'L = mol ÷ M = 0.125 ÷ 0.500 = 0.250 L = <strong>250 mL</strong>'},

{id:'p04',type:'calc',tag:'Calculation',
 q:'What is the molarity of a solution made by dissolving 45.0 g of glucose (M = 180.16 g/mol) in enough water to make 250.0 mL of solution?',
 answer:1.00, tolerance:0.01, unit:'M',
 solution:'mol = 45.0 ÷ 180.16 = 0.2498 mol; M = 0.2498 ÷ 0.2500 = <strong>1.00 M</strong>'},

{id:'p05',type:'calc',tag:'Calculation',
 q:'How many grams of KNO₃ (M = 101.11 g/mol) are needed to make 1.00 L of a 0.750 M solution?',
 answer:75.8, tolerance:0.3, unit:'g',
 solution:'mol = 0.750 × 1.00 = 0.750 mol; g = 0.750 × 101.11 = <strong>75.8 g</strong>'},

{id:'p06',type:'calc',tag:'Calculation',
 q:'What is the molarity of a solution made by dissolving 4.00 g of NaCl (M = 58.44 g/mol) in enough water to make 250.0 mL of solution?',
 answer:0.274, tolerance:0.004, unit:'M',
 solution:'mol = 4.00 ÷ 58.44 = 0.06845 mol; M = 0.06845 ÷ 0.2500 = <strong>0.274 M</strong>'},

{id:'p07',type:'calc',tag:'Calculation',
 q:'How many mL of 12.0 M HCl must be diluted to make 250.0 mL of 0.500 M HCl? (V₂ is the FINAL volume.)',
 answer:10.4, tolerance:0.2, unit:'mL',
 solution:'C₁V₁ = C₂V₂ → V₁ = (0.500 × 250.0) ÷ 12.0 = <strong>10.4 mL</strong>'},

{id:'p08',type:'calc',tag:'Calculation',
 q:'50.0 mL of 2.00 M KOH is diluted to a final volume of 250.0 mL. What is the new concentration?',
 answer:0.400, tolerance:0.005, unit:'M',
 solution:'C₂ = C₁V₁/V₂ = (2.00 × 50.0) ÷ 250.0 = <strong>0.400 M</strong>'},

{id:'p09',type:'calc',tag:'Calculation',
 q:'What final volume (in mL) is needed to dilute 25.0 mL of 6.00 M H₂SO₄ to 0.150 M?',
 answer:1000, tolerance:5, unit:'mL',
 solution:'V₂ = C₁V₁/C₂ = (6.00 × 25.0) ÷ 0.150 = <strong>1000 mL</strong>'},

{id:'p10',type:'calc',tag:'Calculation',
 q:'A student dilutes 5.00 mL of 5.00 M NaCl to a final volume of 500.0 mL. What is the final concentration?',
 answer:0.0500, tolerance:0.001, unit:'M',
 solution:'C₂ = (5.00 × 5.00) ÷ 500.0 = <strong>0.0500 M</strong>'},

{id:'p11',type:'calc',tag:'Calculation',
 q:'Calculate the percent mass/mass (% m/m) of a solution made by dissolving 15.0 g NaCl in 135.0 g of water.',
 answer:10.0, tolerance:0.2, unit:'%',
 solution:'Solution mass = 15.0 + 135.0 = 150.0 g; % = (15.0 ÷ 150.0) × 100 = <strong>10.0%</strong>'},

{id:'p12',type:'calc',tag:'Calculation',
 q:'What is the % m/v of a solution containing 20.0 g of glucose dissolved in enough water to make 500.0 mL of solution?',
 answer:4.00, tolerance:0.05, unit:'% m/v',
 solution:'% m/v = (20.0 ÷ 500.0) × 100 = <strong>4.00 g/100 mL</strong>'},

{id:'p13',type:'calc',tag:'Calculation',
 q:'How many grams of solute are in 250.0 g of an 8.00% m/m solution?',
 answer:20.0, tolerance:0.2, unit:'g',
 solution:'g solute = 0.0800 × 250.0 = <strong>20.0 g</strong>'},

{id:'p14',type:'calc',tag:'Calculation',
 q:'Calculate the molality of a solution made by dissolving 25.0 g of NaCl (M = 58.44 g/mol) in 200.0 g of water.',
 answer:2.14, tolerance:0.03, unit:'m',
 solution:'mol NaCl = 25.0 ÷ 58.44 = 0.4278 mol; m = 0.4278 ÷ 0.2000 kg = <strong>2.14 m</strong>'},

{id:'p15',type:'calc',tag:'Calculation',
 q:'Calculate the molality of a solution made by dissolving 18.0 g of glucose (M = 180.16 g/mol) in 500.0 g of water.',
 answer:0.200, tolerance:0.003, unit:'m',
 solution:'mol = 18.0 ÷ 180.16 = 0.09992 mol; m = 0.09992 ÷ 0.5000 kg = <strong>0.200 m</strong>'},

{id:'p16',type:'calc',tag:'Calculation',
 q:'How many moles of solute are present in a 3.00 m solution prepared with 500.0 g of water?',
 answer:1.50, tolerance:0.02, unit:'mol',
 solution:'mol = m × kg solvent = 3.00 × 0.500 = <strong>1.50 mol</strong>'},

{id:'p17',type:'calc',tag:'Calculation',
 q:'A 1.50 m non-electrolyte solution in water (Kb = 0.512 °C·kg/mol). What is the new boiling point?',
 answer:100.768, tolerance:0.01, unit:'°C',
 solution:'ΔTb = 0.512 × 1.50 × 1 = 0.768 °C; bp = 100 + 0.768 = <strong>100.768 °C</strong>'},

{id:'p18',type:'calc',tag:'Calculation',
 q:'A 0.800 m non-electrolyte solution in water (Kf = 1.86 °C·kg/mol). What is the new freezing point?',
 answer:-1.488, tolerance:0.02, unit:'°C',
 solution:'ΔTf = 1.86 × 0.800 × 1 = 1.488 °C; fp = 0 − 1.488 = <strong>−1.488 °C</strong>'},

{id:'p19',type:'calc',tag:'Calculation',
 q:'What is the freezing point of a 1.00 m NaCl(aq) solution? (Kf = 1.86 °C·kg/mol; NaCl → i = 2)',
 answer:-3.72, tolerance:0.05, unit:'°C',
 solution:'ΔTf = 1.86 × 1.00 × 2 = 3.72 °C; fp = <strong>−3.72 °C</strong>'},

{id:'p20',type:'calc',tag:'Calculation',
 q:'What is the boiling point of a 0.500 m CaCl₂(aq) solution? (Kb = 0.512 °C·kg/mol; CaCl₂ → i = 3)',
 answer:100.768, tolerance:0.01, unit:'°C',
 solution:'ΔTb = 0.512 × 0.500 × 3 = 0.768 °C; bp = <strong>100.768 °C</strong>'},

{id:'p21',type:'calc',tag:'Calculation',
 q:'A solution has a freezing point depression ΔTf = 3.72 °C. What is the molality? (Kf = 1.86 °C·kg/mol; non-electrolyte, i=1)',
 answer:2.00, tolerance:0.03, unit:'m',
 solution:'m = ΔTf ÷ (Kf × i) = 3.72 ÷ 1.86 = <strong>2.00 m</strong>'},

{id:'p22',type:'calc',tag:'Calculation',
 q:'How many grams of AgCl (M = 143.32 g/mol) precipitate when 50.0 mL of 0.200 M AgNO₃ reacts with excess NaCl? (Ag⁺ + Cl⁻ → AgCl)',
 answer:1.43, tolerance:0.03, unit:'g',
 solution:'mol Ag⁺ = 0.200 × 0.0500 = 0.0100 mol; g AgCl = 0.0100 × 143.32 = <strong>1.43 g</strong>'},

{id:'p23',type:'calc',tag:'Calculation',
 q:'How many grams of BaSO₄ (M = 233.40 g/mol) form when 75.0 mL of 0.100 M BaCl₂ reacts with excess Na₂SO₄? (Ba²⁺ + SO₄²⁻ → BaSO₄)',
 answer:1.75, tolerance:0.03, unit:'g',
 solution:'mol Ba²⁺ = 0.100 × 0.0750 = 0.00750 mol; g BaSO₄ = 0.00750 × 233.40 = <strong>1.75 g</strong>'},

{id:'p24',type:'calc',tag:'Calculation',
 q:'What volume (in mL) of 0.500 M H₂SO₄ is needed to react with 0.300 mol NaOH? (H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O)',
 answer:300, tolerance:3, unit:'mL',
 solution:'mol H₂SO₄ = 0.300 ÷ 2 = 0.150 mol; V = 0.150 ÷ 0.500 = 0.300 L = <strong>300 mL</strong>'},

{id:'p25',type:'calc',tag:'Calculation',
 q:'What volume (mL) of 0.050 M H₂SO₄ neutralizes 25.0 mL of 0.100 M NaOH? (H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O)',
 answer:25.0, tolerance:0.5, unit:'mL',
 solution:'mol NaOH = 0.100 × 0.0250 = 0.00250 mol; mol H₂SO₄ = 0.00125 mol; V = 0.00125 ÷ 0.050 = 0.0250 L = <strong>25.0 mL</strong>'},

{id:'p26',type:'calc',tag:'Calculation',
 q:'How many grams of KCl (M = 74.55 g/mol) are dissolved in 2.00 L of a 0.300 M solution?',
 answer:44.7, tolerance:0.3, unit:'g',
 solution:'mol = 0.300 × 2.00 = 0.600 mol; g = 0.600 × 74.55 = <strong>44.7 g</strong>'},

{id:'p27',type:'calc',tag:'Calculation',
 q:'What is the molarity of a CaCl₂ solution made by dissolving 22.2 g (M = 111.08 g/mol) in 500.0 mL of solution?',
 answer:0.400, tolerance:0.005, unit:'M',
 solution:'mol = 22.2 ÷ 111.08 = 0.1999 mol; M = 0.1999 ÷ 0.500 = <strong>0.400 M</strong>'},

{id:'p28',type:'calc',tag:'Calculation',
 q:'How many moles of HCl are in 35.0 mL of a 6.00 M solution?',
 answer:0.210, tolerance:0.003, unit:'mol',
 solution:'mol = 6.00 × 0.0350 = <strong>0.210 mol</strong>'},

{id:'p29',type:'calc',tag:'Calculation',
 q:'What volume (mL) of 5.00 M stock solution is needed to prepare 500.0 mL of 0.250 M solution?',
 answer:25.0, tolerance:0.5, unit:'mL',
 solution:'V₁ = (0.250 × 500.0) ÷ 5.00 = <strong>25.0 mL</strong>'},

{id:'p30',type:'calc',tag:'Calculation',
 q:'Calculate the osmotic pressure (atm) at 25 °C of a 0.100 M non-electrolyte solution. (R = 0.08206 L·atm/mol·K, T = 298 K, i = 1)',
 answer:2.45, tolerance:0.05, unit:'atm',
 solution:'π = iMRT = 1 × 0.100 × 0.08206 × 298 = <strong>2.45 atm</strong>'},

/* ══════════════ CONCEPTUAL (33) ══════════════ */
{id:'p31',type:'concept',tag:'Concept',
 q:'Which unit of concentration is used when calculating colligative properties like boiling point elevation?',
 choices:['Molarity (M)','Molality (m)','% mass/mass','ppm'],correct:1,
 solution:'Molality (m) is used because it is based on mass of solvent, not volume, so it does not change with temperature. Colligative formulas (ΔTb = Kb × m × i) require molality.'},

{id:'p32',type:'concept',tag:'Concept',
 q:'In the dilution formula C₁V₁ = C₂V₂, what does V₂ represent?',
 choices:['The volume of solvent added','The volume of stock solution used','The total final volume of the diluted solution','The volume of water in the original solution'],correct:2,
 solution:'V₂ is the total FINAL volume after dilution, not the volume of water added. This is the most common dilution error. If you add water to a solution, V₂ = original volume + water added.'},

{id:'p33',type:'concept',tag:'Concept',
 q:'What happens to the solubility of a gas (like CO₂) dissolved in water as temperature increases?',
 choices:['It increases because more kinetic energy is available','It decreases because gas molecules escape more easily','It stays the same','It first increases, then decreases'],correct:1,
 solution:'Gas solubility in liquid decreases with increasing temperature. Higher temperature gives gas molecules enough kinetic energy to escape the solution — this is why warm soda goes flat.'},

{id:'p34',type:'concept',tag:'Concept',
 q:'Which of the following solutions would have the LOWEST freezing point?',
 choices:['1.0 m glucose (i=1)','1.0 m NaCl (i=2)','1.0 m CaCl₂ (i=3)','0.5 m AlCl₃ (i=4)'],correct:2,
 solution:'ΔTf = Kf × m × i. Products: Glucose: 1.0; NaCl: 2.0; CaCl₂: 3.0; AlCl₃: 0.5×4=2.0. CaCl₂ gives ΔTf = 3×Kf — the largest depression → lowest freezing point.'},

{id:'p35',type:'concept',tag:'Concept',
 q:'A solution of KNO₃ is saturated at 60 °C. It is carefully cooled to 20 °C without any solid forming. This solution is best described as:',
 choices:['Unsaturated at 20 °C','Saturated at 20 °C','Supersaturated at 20 °C','A suspension'],correct:2,
 solution:'A supersaturated solution contains more dissolved solute than the equilibrium solubility allows at that temperature. It is unstable and crystallizes rapidly when disturbed.'},

{id:'p36',type:'concept',tag:'Concept',
 q:'Which of these solutes is a strong electrolyte?',
 choices:['Glucose (C₆H₁₂O₆)','Ethanol (C₂H₅OH)','Sodium chloride (NaCl)','Acetic acid (CH₃COOH)'],correct:2,
 solution:'NaCl is an ionic compound that dissociates 100% in water → Na⁺ + Cl⁻. Glucose and ethanol are nonelectrolytes. Acetic acid is a weak electrolyte (partially dissociates).'},

{id:'p37',type:'concept',tag:'Concept',
 q:'Why does adding solute lower the freezing point of water?',
 choices:['Solute particles add energy to the system','Solute particles interfere with formation of the crystal lattice','Solute particles raise the boiling point, making freezing harder','Solute reacts with ice and melts it'],correct:1,
 solution:'Water freezes when molecules slow enough to form a regular crystal lattice. Dissolved solute particles disrupt this ordering process, requiring a lower temperature (more energy removal) to freeze.'},

{id:'p38',type:'concept',tag:'Concept',
 q:'Two solutions: Solution A has 1 mol glucose in 1 kg water; Solution B has 1 mol NaCl in 1 kg water. Which has the higher boiling point?',
 choices:['Solution A, because glucose has a higher molar mass','Solution B, because NaCl produces 2 particles per formula unit','They are equal because both are 1 m','Solution A, because glucose is a nonelectrolyte'],correct:1,
 solution:'ΔTb = Kb × m × i. Glucose: i=1, ΔTb = 1×Kb. NaCl: i=2, ΔTb = 2×Kb. More particles → greater colligative effect → higher boiling point for Solution B.'},

{id:'p39',type:'concept',tag:'Concept',
 q:'Which diagram BEST represents 0.1 M NaCl(aq)?',
 choices:['Neutral NaCl clusters surrounded by water molecules','Separate Na⁺ and Cl⁻ ions uniformly dispersed through water','Only Cl⁻ ions with Na⁺ attached to container walls','Na₂Cl and NaCl₂ ions in solution'],correct:1,
 solution:'NaCl is a strong electrolyte. In solution it fully dissociates: NaCl → Na⁺(aq) + Cl⁻(aq). A correct particle diagram shows equal numbers of separated Na⁺ and Cl⁻ ions dispersed uniformly.'},

{id:'p40',type:'concept',tag:'Concept',
 q:'The solubility of KNO₃ at 20 °C is 32 g per 100 g H₂O. A student dissolves 20 g KNO₃ in 100 g H₂O at 20 °C. This solution is:',
 choices:['Supersaturated','Saturated','Unsaturated','At the solubility limit'],correct:2,
 solution:'20 g < 32 g (the solubility limit at 20 °C), so the solution is unsaturated. More KNO₃ could dissolve without leaving any undissolved solid.'},

{id:'p41',type:'concept',tag:'Concept',
 q:'Which concentration unit has units of grams of solute per 100 mL of solution?',
 choices:['Molarity (M)','Molality (m)','% m/m','% m/v'],correct:3,
 solution:'% mass/volume (% m/v) = (g solute / mL solution) × 100, giving units of g per 100 mL. It is commonly used in pharmacy and medicine.'},

{id:'p42',type:'concept',tag:'Concept',
 q:'A precipitation reaction occurs when AgNO₃(aq) is added to NaCl(aq). Which ions are the spectator ions?',
 choices:['Ag⁺ and Cl⁻','Na⁺ and NO₃⁻','Ag⁺ and Na⁺','Cl⁻ and NO₃⁻'],correct:1,
 solution:'The reaction is: Ag⁺(aq) + Cl⁻(aq) → AgCl(s). Na⁺ and NO₃⁻ do not participate — they remain in solution unchanged and are spectator ions.'},

{id:'p43',type:'concept',tag:'Concept',
 q:'Why is molarity temperature-dependent but molality is not?',
 choices:['Molarity uses grams; molality uses moles','Molarity uses volume (which changes with T); molality uses mass (constant)','Molarity is measured at STP; molality is not','They are both temperature-dependent'],correct:1,
 solution:'Volume of a solution changes slightly with temperature (thermal expansion/contraction), so molarity (mol/L) changes. Mass does not change with temperature, so molality (mol/kg) is constant.'},

{id:'p44',type:'concept',tag:'Concept',
 q:'Which of the following is a colligative property?',
 choices:['The color of a colored solution','The conductivity of an electrolyte','The boiling point elevation of a solution','The density of a solvent'],correct:2,
 solution:'Colligative properties depend on the NUMBER of solute particles, not their identity. Boiling point elevation, freezing point depression, osmotic pressure, and vapor pressure lowering are all colligative.'},

{id:'p45',type:'concept',tag:'Concept',
 q:'What is the van\'t Hoff factor (i) for CaCl₂?',
 choices:['1','2','3','4'],correct:2,
 solution:'CaCl₂ → Ca²⁺ + 2Cl⁻: produces 3 ions per formula unit → i = 3. This triples the colligative effect compared to a nonelectrolyte at the same molality.'},

{id:'p46',type:'concept',tag:'Concept',
 q:'A saturated solution has solid KNO₃ at the bottom. A student adds more KNO₃ solid. What happens?',
 choices:['All the new solid dissolves immediately','The solution becomes supersaturated','The added solid remains undissolved','The temperature increases'],correct:2,
 solution:'A saturated solution is already at maximum dissolved solute. Any additional solid will remain undissolved. The only way to dissolve more is to raise the temperature.'},

{id:'p47',type:'concept',tag:'Concept',
 q:'Which pair of ions forms an insoluble precipitate in a double-displacement reaction?',
 choices:['Na⁺ and Cl⁻','K⁺ and NO₃⁻','Ag⁺ and Cl⁻','NH₄⁺ and SO₄²⁻'],correct:2,
 solution:'AgCl is insoluble (Ksp very small). Na⁺, K⁺, and NH₄⁺ salts are generally soluble. NO₃⁻ salts are always soluble. Ag⁺ + Cl⁻ → AgCl(s) is a classic precipitation reaction.'},

{id:'p48',type:'concept',tag:'Concept',
 q:'In a net ionic equation for a precipitation reaction, spectator ions are:',
 choices:['Written as solids on the product side','Omitted because they do not change during the reaction','Included with (s) notation','Always transition metal ions'],correct:1,
 solution:'Spectator ions are dissolved and ionic before and after the reaction — they do not participate. In a net ionic equation they are cancelled and omitted entirely.'},

{id:'p49',type:'concept',tag:'Concept',
 q:'A solution\'s freezing point is −2.79 °C. Which could it be? (Kf = 1.86 °C·kg/mol)',
 choices:['0.500 m glucose (i=1)','0.750 m NaCl (i=2)','0.500 m NaCl (i=2)','1.00 m glucose (i=1)'],correct:1,
 solution:'ΔTf = Kf × m × i. B: 1.86 × 0.750 × 2 = 2.79 °C → fp = −2.79 °C ✓. Others: A: 0.93°C, C: 1.86°C, D: 1.86°C. Only B matches.'},

{id:'p50',type:'concept',tag:'Concept',
 q:'Which process describes osmosis?',
 choices:['Movement of solute from high to low concentration across a membrane','Movement of solvent from low solute concentration to high solute concentration through a semipermeable membrane','Dissolving a solid in a liquid','Evaporation of solvent from a solution'],correct:1,
 solution:'Osmosis is the net movement of SOLVENT (not solute) through a semipermeable membrane from lower to higher solute concentration (from higher to lower water concentration).'},

{id:'p51',type:'concept',tag:'Concept',
 q:'An IV bag labeled "0.9% NaCl (Normal Saline)" uses which unit of concentration?',
 choices:['Molarity','Molality','% m/v','% v/v'],correct:2,
 solution:'0.9% NaCl means 0.9 g NaCl per 100 mL of solution — this is % mass/volume (m/v), the standard notation for pharmaceutical solutions.'},

{id:'p52',type:'concept',tag:'Concept',
 q:'Which solution has the HIGHEST boiling point?',
 choices:['1.0 m sucrose (i=1)','0.5 m NaCl (i=2)','0.5 m MgCl₂ (i=3)','Pure water'],correct:2,
 solution:'ΔTb = Kb × m × i: sucrose: 1.0; NaCl: 1.0; MgCl₂: 0.5×3=1.5; water: 0. MgCl₂ has the highest effective particle count → highest boiling point.'},

{id:'p53',type:'concept',tag:'Concept',
 q:'What happens when a seed crystal is added to a supersaturated KNO₃ solution?',
 choices:['The crystal dissolves completely','Rapid crystallization begins as excess solute deposits on the seed','The solution becomes unsaturated','Nothing, because the solution is stable'],correct:1,
 solution:'A supersaturated solution is metastable. A seed crystal provides a surface for excess solute to deposit on, triggering rapid crystallization until the solution returns to saturation.'},

{id:'p54',type:'concept',tag:'Concept',
 q:'Why is road salt (NaCl or CaCl₂) effective at de-icing roads?',
 choices:['It reacts with water to produce heat','It raises the melting point of ice','It lowers the freezing point of water below 0 °C','It absorbs sunlight to heat the road'],correct:2,
 solution:'Road salt works through freezing point depression — a colligative property. Dissolved ions increase particle count and lower the freezing point, preventing ice formation at temperatures near 0 °C.'},

{id:'p55',type:'concept',tag:'Concept',
 q:'Which of the following would NOT be considered an electrolyte solution?',
 choices:['Dissolved NaCl','Dissolved HCl','Dissolved glucose','Dissolved KOH'],correct:2,
 solution:'Glucose (C₆H₁₂O₆) is a molecular compound that does not dissociate in water. It dissolves to form intact molecules, not ions — it is a nonelectrolyte and does not conduct electricity.'},

{id:'p56',type:'concept',tag:'Concept',
 q:'At 80 °C the solubility of KNO₃ is ~169 g/100 g H₂O. 100 g KNO₃ is dissolved in 100 g water at 80 °C, then cooled to 20 °C (solubility ~32 g). Approximately how many grams crystallize out?',
 choices:['About 32 g','About 68 g','About 100 g','None — it stays dissolved'],correct:1,
 solution:'At 20 °C, only 32 g remains dissolved per 100 g water. 100 − 32 = <strong>68 g</strong> crystallizes out.'},

{id:'p57',type:'concept',tag:'Concept',
 q:'When writing a net ionic equation, which species are written in dissociated ionic form?',
 choices:['Only the precipitate','All species','Soluble aqueous ionic compounds','Only the reactants'],correct:2,
 solution:'In a full ionic equation, soluble aqueous ionic compounds are written as separated ions (e.g., Na⁺(aq) + Cl⁻(aq)). Precipitates and molecular compounds are written as intact formulas.'},

{id:'p58',type:'concept',tag:'Concept',
 q:'Which factor does NOT affect colligative properties?',
 choices:['Number of solute particles','Molality of the solution','van\'t Hoff factor (i)','Chemical identity of the solute'],correct:3,
 solution:'Colligative properties depend ONLY on the NUMBER of solute particles (m × i), not on what those particles are. Chemical identity is irrelevant — only particle count matters.'},

{id:'p59',type:'concept',tag:'Concept',
 q:'0.1 M glucose and 0.1 M NaCl are on opposite sides of a semipermeable membrane. Water flows:',
 choices:['From glucose side to NaCl side','From NaCl side to glucose side','No net flow occurs','Water flows equally in both directions'],correct:0,
 solution:'NaCl (i=2) creates more particles than glucose (i=1) at the same molarity → higher effective solute concentration on NaCl side. Water flows by osmosis from lower to higher solute concentration (glucose → NaCl).'},

{id:'p60',type:'concept',tag:'Concept',
 q:'A student heats a saturated solution, adds more solute until it dissolves, then carefully cools it. The result is:',
 choices:['An unsaturated solution','A saturated solution','A supersaturated solution','A suspension'],correct:2,
 solution:'Dissolving extra solute at high temperature and cooling carefully without triggering crystallization creates a supersaturated solution — a classic lab demonstration.'},

{id:'p61',type:'concept',tag:'Concept',
 q:'Which is the correct procedure for making 250 mL of 0.200 M NaOH?',
 choices:['Weigh NaOH, add to 250 mL of water, stir','Weigh NaOH, dissolve in some water in a 250 mL volumetric flask, then fill to the mark','Add water to flask first, then add NaOH and stir','Dissolve NaOH in 500 mL, then take 250 mL'],correct:1,
 solution:'Correct lab technique: weigh the solute → add to volumetric flask → dissolve in some water → fill precisely to the 250 mL mark. This ensures the total solution volume = 250 mL.'},

{id:'p62',type:'concept',tag:'Concept',
 q:'Which best describes the difference between molarity and molality?',
 choices:['Molarity is always larger than molality','Molarity uses L of solution as the denominator; molality uses kg of solvent','Molality is used for concentrated solutions; molarity for dilute solutions','They are always numerically equal for aqueous solutions'],correct:1,
 solution:'Molarity = mol/L of solution (temperature-dependent); Molality = mol/kg of solvent (temperature-independent). For dilute aqueous solutions they are numerically similar, but not equal.'},

{id:'p63',type:'concept',tag:'Concept',
 q:'Which of the following pairs of ions CANNOT form an insoluble precipitate in a double-displacement reaction?',
 choices:['Pb²⁺ and SO₄²⁻','Na⁺ and Cl⁻','Ag⁺ and Br⁻','Ba²⁺ and SO₄²⁻'],correct:1,
 solution:'Na⁺ and Cl⁻ form NaCl, which is very soluble (35.7 g/100 g H₂O). All Na⁺ salts are soluble. The other pairs form insoluble precipitates: PbSO₄(s), AgBr(s), BaSO₄(s).'},

{id:'p64',type:'concept',tag:'Concept',
 q:'A solution contains Na⁺, Cl⁻, Ag⁺, and NO₃⁻. A precipitate forms. Which ion is NOT in the precipitate?',
 choices:['Na⁺','Ag⁺','Cl⁻','Both Na⁺ and NO₃⁻'],correct:3,
 solution:'Ag⁺ + Cl⁻ → AgCl(s) precipitate. Na⁺ and NO₃⁻ remain as spectator ions in solution — they are not part of the precipitate.'},

/* ══════════════ MULTI-STEP (18) ══════════════ */
{id:'p65',type:'multi',tag:'Multi-step',
 q:'You dissolve 58.4 g of NaCl (M = 58.44 g/mol) in 500.0 g of water. (a) Calculate molality. (b) Calculate the new freezing point. (Kf = 1.86 °C·kg/mol; i = 2) Enter the freezing point.',
 answer:-7.44, tolerance:0.1, unit:'°C',
 solution:'mol NaCl = 58.4/58.44 = 0.999 mol; m = 0.999/0.500 = 2.00 m. ΔTf = 1.86 × 2.00 × 2 = 7.44 °C; fp = <strong>−7.44 °C</strong>'},

{id:'p66',type:'multi',tag:'Multi-step',
 q:'A 2.00 m glucose (non-electrolyte, i=1) solution in water. What is the freezing point? (Kf = 1.86 °C·kg/mol)',
 answer:-3.72, tolerance:0.05, unit:'°C',
 solution:'ΔTf = 1.86 × 2.00 × 1 = 3.72 °C; fp = 0 − 3.72 = <strong>−3.72 °C</strong>'},

{id:'p67',type:'multi',tag:'Multi-step',
 q:'You need to prepare 1.00 L of 0.0500 M KMnO₄ (M = 158.03 g/mol) from a 0.500 M stock. How many grams of KMnO₄ are in the final solution?',
 answer:7.90, tolerance:0.1, unit:'g',
 solution:'V₁ = (0.0500 × 1000)/0.500 = 100 mL of stock. mol KMnO₄ = 0.0500 × 1.00 = 0.0500 mol; g = 0.0500 × 158.03 = <strong>7.90 g</strong>'},

{id:'p68',type:'multi',tag:'Multi-step',
 q:'A solution is made by dissolving 9.00 g of glucose (M = 180.16 g/mol) in 100.0 g of water. What is the freezing point? (Kf = 1.86 °C·kg/mol, i=1)',
 answer:-0.929, tolerance:0.01, unit:'°C',
 solution:'mol = 9.00/180.16 = 0.04996 mol; m = 0.04996/0.1000 = 0.4996 m; ΔTf = 1.86 × 0.500 × 1 = 0.929 °C; fp = <strong>−0.929 °C</strong>'},

{id:'p69',type:'multi',tag:'Multi-step',
 q:'200.0 mL of 1.50 M HNO₃ is diluted to 600.0 mL. How many moles of HNO₃ are in 50.0 mL of the diluted solution?',
 answer:0.0250, tolerance:0.001, unit:'mol',
 solution:'C₂ = (1.50 × 200.0)/600.0 = 0.500 M. mol = 0.500 × 0.0500 = <strong>0.0250 mol</strong>'},

{id:'p70',type:'multi',tag:'Multi-step',
 q:'50.0 mL of 0.400 M BaCl₂ is added to 50.0 mL of 0.300 M Na₂SO₄. (Ba²⁺ + SO₄²⁻ → BaSO₄↓, M = 233.40 g/mol). Find limiting reagent and calculate grams of precipitate.',
 answer:3.50, tolerance:0.06, unit:'g',
 solution:'mol Ba²⁺ = 0.400 × 0.050 = 0.0200 mol. mol SO₄²⁻ = 0.300 × 0.050 = 0.0150 mol. Ratio 1:1 → SO₄²⁻ limits. g BaSO₄ = 0.0150 × 233.40 = <strong>3.50 g</strong>'},

{id:'p71',type:'multi',tag:'Multi-step',
 q:'A student prepares 100.0 mL of 1.00 M NaCl, then dilutes 25.0 mL to a final volume of 500.0 mL. What is the molarity of the final solution?',
 answer:0.0500, tolerance:0.001, unit:'M',
 solution:'Step 1: M stock = 1.00 M. Step 2: C₂ = (1.00 × 25.0)/500.0 = <strong>0.0500 M</strong>'},

{id:'p72',type:'multi',tag:'Multi-step',
 q:'An unknown non-electrolyte (5.00 g) dissolved in 100.0 g water gives a freezing point of −1.86 °C. (Kf = 1.86 °C·kg/mol) Find the molar mass.',
 answer:50.0, tolerance:1.5, unit:'g/mol',
 solution:'m = ΔTf/(Kf × i) = 1.86/1.86 = 1.00 m. mol = 1.00 × 0.100 = 0.100 mol. M = 5.00/0.100 = <strong>50.0 g/mol</strong>'},

{id:'p73',type:'multi',tag:'Multi-step',
 q:'100.0 mL of 0.500 M AgNO₃ + 100.0 mL of 0.500 M NaCl. (Ag⁺ + Cl⁻ → AgCl, M = 143.32 g/mol). Calculate grams of AgCl produced.',
 answer:7.17, tolerance:0.1, unit:'g',
 solution:'mol Ag⁺ = 0.500 × 0.100 = 0.0500 mol. mol Cl⁻ = 0.0500 mol. 1:1 ratio, stoichiometric. g AgCl = 0.0500 × 143.32 = <strong>7.17 g</strong>'},

{id:'p74',type:'multi',tag:'Multi-step',
 q:'How many grams of Pb(NO₃)₂ (M = 331.21 g/mol) are needed to make 500.0 mL of 0.200 M solution? Then find grams of PbI₂ (M = 461.0 g/mol) that precipitate with excess KI. (Pb²⁺ + 2I⁻ → PbI₂)',
 answer:46.1, tolerance:0.5, unit:'g PbI₂',
 solution:'mol Pb(NO₃)₂ = 0.200 × 0.500 = 0.100 mol; g = 33.1 g. mol PbI₂ = 0.100 mol; g PbI₂ = 0.100 × 461.0 = <strong>46.1 g</strong>'},

{id:'p75',type:'multi',tag:'Multi-step',
 q:'You dissolve 40.0 g of NaOH (M = 40.00 g/mol) in 200.0 g of water. What is the boiling point? (Kb = 0.512 °C·kg/mol; NaOH → i = 2)',
 answer:105.12, tolerance:0.05, unit:'°C',
 solution:'mol NaOH = 40.0/40.00 = 1.00 mol; m = 1.00/0.200 = 5.00 m. ΔTb = 0.512 × 5.00 × 2 = 5.12 °C; bp = 100 + 5.12 = <strong>105.12 °C</strong>'},

{id:'p76',type:'multi',tag:'Multi-step',
 q:'A 2.50 m KCl(aq) solution (i = 2). What is the boiling point? (Kb = 0.512 °C·kg/mol)',
 answer:102.56, tolerance:0.05, unit:'°C',
 solution:'ΔTb = 0.512 × 2.50 × 2 = 2.56 °C; bp = 100 + 2.56 = <strong>102.56 °C</strong>'},

{id:'p77',type:'multi',tag:'Multi-step',
 q:'Calculate grams of CaCO₃ (M = 100.09 g/mol) that precipitate when 75.0 mL of 0.200 M CaCl₂ is mixed with 100.0 mL of 0.200 M Na₂CO₃. (Ca²⁺ + CO₃²⁻ → CaCO₃↓). Find limiting reagent first.',
 answer:1.50, tolerance:0.03, unit:'g',
 solution:'mol Ca²⁺ = 0.200 × 0.0750 = 0.0150 mol. mol CO₃²⁻ = 0.200 × 0.100 = 0.0200 mol. 1:1 ratio → Ca²⁺ limits. g CaCO₃ = 0.0150 × 100.09 = <strong>1.50 g</strong>'},

{id:'p78',type:'multi',tag:'Multi-step',
 q:'A student has a 6.00 M HCl stock. They need 100.0 mL of 0.300 M HCl. What volume (mL) of stock do they measure out?',
 answer:5.00, tolerance:0.1, unit:'mL',
 solution:'V₁ = (C₂ × V₂)/C₁ = (0.300 × 100.0)/6.00 = <strong>5.00 mL</strong>'},

{id:'p79',type:'multi',tag:'Multi-step',
 q:'A 250.0 mL solution of 3.00 M H₂SO₄ is diluted to 2.00 L. What is the new molarity?',
 answer:0.375, tolerance:0.005, unit:'M',
 solution:'C₂ = (3.00 × 0.250)/2.00 = 0.750/2.00 = <strong>0.375 M</strong>'},

{id:'p80',type:'multi',tag:'Multi-step',
 q:'You dilute 100.0 mL of 0.800 M HNO₃ to a final volume of 400.0 mL. Then you take 50.0 mL of the new solution and need to find moles of HNO₃ in that portion.',
 answer:0.0100, tolerance:0.0003, unit:'mol',
 solution:'C₂ = (0.800 × 100.0)/400.0 = 0.200 M. mol = 0.200 × 0.0500 = <strong>0.0100 mol</strong>'},

{id:'p81',type:'multi',tag:'Multi-step',
 q:'A 500.0 mL solution contains 14.6 g of HCl (M = 36.46 g/mol). This is used to neutralize NaOH (HCl + NaOH → NaCl + H₂O). If 30.0 mL of the HCl solution is used, how many moles of NaOH are neutralized?',
 answer:0.0240, tolerance:0.001, unit:'mol',
 solution:'M HCl = (14.6/36.46)/0.5000 = 0.8007 M. mol HCl = 0.8007 × 0.0300 = 0.02402 mol. 1:1 ratio → mol NaOH = <strong>0.0240 mol</strong>'},

{id:'p82',type:'multi',tag:'Multi-step',
 q:'You want to make 250 mL of 2.50 M H₂SO₄ from concentrated H₂SO₄ (18.0 M). What volume (mL) of concentrated acid do you measure out?',
 answer:34.7, tolerance:0.5, unit:'mL',
 solution:'V₁ = (C₂ × V₂)/C₁ = (2.50 × 250)/18.0 = 625/18.0 = <strong>34.7 mL</strong>. Always add acid to water when diluting concentrated acids.'},

]; // end ALL_PROBLEMS — 82 problems total
