/* ── Unit 13 Problem Bank — Solutions
   172 problems total: 64 calc | 70 concept | 38 multi (82 original + 90 added)
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

/* ══════════════ CALCULATION (30) ══════════════ */
{id:'p01',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'What is the molarity of a solution made by dissolving 11.7 g of NaCl (M = 58.44 g/mol) in enough water to make 500.0 mL of solution?',
 answer:0.400, tolerance:0.005, unit:'M',
 solution:'<p>Use M = n/V (molarity = moles ÷ liters).</p><p>First convert grams to moles: 11.7 ÷ 58.44 = 0.2002 mol.</p><p>Then divide by liters of solution: 0.2002 ÷ 0.5000 L = <strong>0.400 M</strong></p>'},

{id:'p02',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'How many moles of solute are in 350.0 mL of a 2.00 M NaOH solution?',
 answer:0.700, tolerance:0.005, unit:'mol',
 solution:'mol = M × L = 2.00 × 0.3500 = <strong>0.700 mol</strong>'},

{id:'p03',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'What volume (in mL) of a 0.500 M glucose solution contains 0.125 mol glucose?',
 answer:250, tolerance:2, unit:'mL',
 solution:'L = mol ÷ M = 0.125 ÷ 0.500 = 0.250 L = <strong>250 mL</strong>'},

{id:'p04',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'What is the molarity of a solution made by dissolving 45.0 g of glucose (M = 180.16 g/mol) in enough water to make 250.0 mL of solution?',
 answer:1.00, tolerance:0.01, unit:'M',
 solution:'mol = 45.0 ÷ 180.16 = 0.2498 mol; M = 0.2498 ÷ 0.2500 = <strong>1.00 M</strong>'},

{id:'p05',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'How many grams of KNO3 (M = 101.11 g/mol) are needed to make 1.00 L of a 0.750 M solution?',
 answer:75.8, tolerance:0.3, unit:'g',
 solution:'mol = 0.750 × 1.00 = 0.750 mol; g = 0.750 × 101.11 = <strong>75.8 g</strong>'},

{id:'p06',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'What is the molarity of a solution made by dissolving 4.00 g of NaCl (M = 58.44 g/mol) in enough water to make 250.0 mL of solution?',
 answer:0.274, tolerance:0.004, unit:'M',
 solution:'mol = 4.00 ÷ 58.44 = 0.06845 mol; M = 0.06845 ÷ 0.2500 = <strong>0.274 M</strong>'},

{id:'p07',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'How many mL of 12.0 M HCl must be diluted to make 250.0 mL of 0.500 M HCl? (V2 is the FINAL volume.)',
 answer:10.4, tolerance:0.2, unit:'mL',
 solution:'<p>Use the dilution equation C1V1 = C2V2.</p><p>V1 = (0.500 × 250.0) ÷ 12.0 = <strong>10.4 mL</strong></p>'},

{id:'p08',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'50.0 mL of 2.00 M KOH is diluted to a final volume of 250.0 mL. What is the new concentration?',
 answer:0.400, tolerance:0.005, unit:'M',
 solution:'C2 = C1V1/V2 = (2.00 × 50.0) ÷ 250.0 = <strong>0.400 M</strong>'},

{id:'p09',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'What final volume (in mL) is needed to dilute 25.0 mL of 6.00 M H2SO4 to 0.150 M?',
 answer:1000, tolerance:5, unit:'mL',
 solution:'V2 = C1V1/C2 = (6.00 × 25.0) ÷ 0.150 = <strong>1000 mL</strong>'},

{id:'p10',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'A student dilutes 5.00 mL of 5.00 M NaCl to a final volume of 500.0 mL. What is the final concentration?',
 answer:0.0500, tolerance:0.001, unit:'M',
 solution:'C2 = (5.00 × 5.00) ÷ 500.0 = <strong>0.0500 M</strong>'},

{id:'p11',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'Calculate the percent mass/mass (% m/m) of a solution made by dissolving 15.0 g NaCl in 135.0 g of water.',
 answer:10.0, tolerance:0.2, unit:'%',
 solution:'Solution mass = 15.0 + 135.0 = 150.0 g; % = (15.0 ÷ 150.0) × 100 = <strong>10.0%</strong>'},

{id:'p12',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'What is the % m/v of a solution containing 20.0 g of glucose dissolved in enough water to make 500.0 mL of solution?',
 answer:4.00, tolerance:0.05, unit:'% m/v',
 solution:'% m/v = (20.0 ÷ 500.0) × 100 = <strong>4.00 g/100 mL</strong>'},

{id:'p13',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'How many grams of solute are in 250.0 g of an 8.00% m/m solution?',
 answer:20.0, tolerance:0.2, unit:'g',
 solution:'g solute = 0.0800 × 250.0 = <strong>20.0 g</strong>'},

{id:'p14',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'Calculate the molality of a solution made by dissolving 25.0 g of NaCl (M = 58.44 g/mol) in 200.0 g of water.',
 answer:2.14, tolerance:0.03, unit:'m',
 solution:'<p>Use m = n/kg(solvent) (molality = moles ÷ kg of solvent).</p><p>First find moles of NaCl: 25.0 ÷ 58.44 = 0.4278 mol.</p><p>Then divide by kilograms of solvent: 0.4278 ÷ 0.2000 kg = <strong>2.14 m</strong></p>'},

{id:'p15',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'Calculate the molality of a solution made by dissolving 18.0 g of glucose (M = 180.16 g/mol) in 500.0 g of water.',
 answer:0.200, tolerance:0.003, unit:'m',
 solution:'mol = 18.0 ÷ 180.16 = 0.09992 mol; m = 0.09992 ÷ 0.5000 kg = <strong>0.200 m</strong>'},

{id:'p16',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'How many moles of solute are present in a 3.00 m solution prepared with 500.0 g of water?',
 answer:1.50, tolerance:0.02, unit:'mol',
 solution:'mol = m × kg solvent = 3.00 × 0.500 = <strong>1.50 mol</strong>'},

{id:'p17',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'A 1.50 m non-electrolyte solution in water (Kb = 0.512 °C·kg/mol). What is the new boiling point?',
 answer:100.768, tolerance:0.01, unit:'°C',
 solution:'ΔTb = 0.512 × 1.50 × 1 = 0.768 °C; bp = 100 + 0.768 = <strong>100.768 °C</strong>'},

{id:'p18',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'A 0.800 m non-electrolyte solution in water (Kf = 1.86 °C·kg/mol). What is the new freezing point?',
 answer:-1.488, tolerance:0.02, unit:'°C',
 solution:'ΔTf = 1.86 × 0.800 × 1 = 1.488 °C; fp = 0 - 1.488 = <strong>-1.488 °C</strong>'},

{id:'p19',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'What is the freezing point of a 1.00 m NaCl(aq) solution? (Kf = 1.86 °C·kg/mol; NaCl → i = 2)',
 answer:-3.72, tolerance:0.05, unit:'°C',
 solution:'Use freezing-point depression: ΔTf = 1.86 × 1.00 × 2 = 3.72 °C.<br>Subtract from pure water&#8217;s freezing point: fp = <strong>-3.72 °C</strong>'},

{id:'p20',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'What is the boiling point of a 0.500 m CaCl2(aq) solution? (Kb = 0.512 °C·kg/mol; CaCl2 → i = 3)',
 answer:100.768, tolerance:0.01, unit:'°C',
 solution:'ΔTb = 0.512 × 0.500 × 3 = 0.768 °C; bp = <strong>100.768 °C</strong>'},

{id:'p21',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'A solution has a freezing point depression ΔTf = 3.72 °C. What is the molality? (Kf = 1.86 °C·kg/mol; non-electrolyte, i=1)',
 answer:2.00, tolerance:0.03, unit:'m',
 solution:'m = ΔTf ÷ (Kf × i) = 3.72 ÷ 1.86 = <strong>2.00 m</strong>'},

{id:'p22',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'How many grams of AgCl (M = 143.32 g/mol) precipitate when 50.0 mL of 0.200 M AgNO3 reacts with excess NaCl? (Ag^+ + Cl^- → AgCl)',
 answer:1.43, tolerance:0.03, unit:'g',
 solution:'First find moles of Ag^+: 0.200 × 0.0500 = 0.0100 mol.<br>The mole ratio to AgCl is 1:1, so g AgCl = 0.0100 × 143.32 = <strong>1.43 g</strong>'},

{id:'p23',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'How many grams of BaSO4 (M = 233.40 g/mol) form when 75.0 mL of 0.100 M BaCl2 reacts with excess Na2SO4? (Ba^2+ + SO4^2- → BaSO4)',
 answer:1.75, tolerance:0.03, unit:'g',
 solution:'mol Ba^2+ = 0.100 × 0.0750 = 0.00750 mol; g BaSO4 = 0.00750 × 233.40 = <strong>1.75 g</strong>'},

{id:'p24',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'What volume (in mL) of 0.500 M H2SO4 is needed to react with 0.300 mol NaOH? (H2SO4 + 2NaOH → Na2SO4 + 2H2O)',
 answer:300, tolerance:3, unit:'mL',
 solution:'mol H2SO4 = 0.300 ÷ 2 = 0.150 mol; V = 0.150 ÷ 0.500 = 0.300 L = <strong>300 mL</strong>'},

{id:'p25',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'What volume (mL) of 0.050 M H2SO4 neutralizes 25.0 mL of 0.100 M NaOH? (H2SO4 + 2NaOH → Na2SO4 + 2H2O)',
 answer:25.0, tolerance:0.5, unit:'mL',
 solution:'mol NaOH = 0.100 × 0.0250 = 0.00250 mol; mol H2SO4 = 0.00125 mol; V = 0.00125 ÷ 0.050 = 0.0250 L = <strong>25.0 mL</strong>'},

{id:'p26',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'How many grams of KCl (M = 74.55 g/mol) are dissolved in 2.00 L of a 0.300 M solution?',
 answer:44.7, tolerance:0.3, unit:'g',
 solution:'mol = 0.300 × 2.00 = 0.600 mol; g = 0.600 × 74.55 = <strong>44.7 g</strong>'},

{id:'p27',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'What is the molarity of a CaCl2 solution made by dissolving 22.2 g (M = 111.08 g/mol) in 500.0 mL of solution?',
 answer:0.400, tolerance:0.005, unit:'M',
 solution:'mol = 22.2 ÷ 111.08 = 0.1999 mol; M = 0.1999 ÷ 0.500 = <strong>0.400 M</strong>'},

{id:'p28',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'How many moles of HCl are in 35.0 mL of a 6.00 M solution?',
 answer:0.210, tolerance:0.003, unit:'mol',
 solution:'mol = 6.00 × 0.0350 = <strong>0.210 mol</strong>'},

{id:'p29',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'What volume (mL) of 5.00 M stock solution is needed to prepare 500.0 mL of 0.250 M solution?',
 answer:25.0, tolerance:0.5, unit:'mL',
 solution:'V1 = (0.250 × 500.0) ÷ 5.00 = <strong>25.0 mL</strong>'},

{id:'p30',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'Calculate the osmotic pressure (atm) at 25 °C of a 0.100 M non-electrolyte solution. (R = 0.08206 L·atm/mol·K, T = 298 K, i = 1)',
 answer:2.45, tolerance:0.05, unit:'atm',
 solution:'π = iMRT = 1 × 0.100 × 0.08206 × 298 = <strong>2.45 atm</strong>'},

/* ══════════════ CONCEPTUAL (33) ══════════════ */
{id:'p31',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Which unit of concentration is used when calculating colligative properties like boiling point elevation?',
 choices:['Molarity (M)','Molality (m)','% mass/mass','ppm'],correct:1,
 solution:'Molality (m) is used because it is based on mass of solvent, not volume, so it does not change with temperature. Colligative formulas (ΔTb = Kb × m × i) require molality.'},

{id:'p32',difficulty:'easy',type:'concept',tag:'Concept',
 q:'In the dilution formula C1V1 = C2V2, what does V2 represent?',
 choices:['The volume of solvent added','The volume of stock solution used','The total final volume of the diluted solution','The volume of water in the original solution'],correct:2,
 solution:'V2 is the total FINAL volume after dilution, not the volume of water added. This is the most common dilution error. If you add water to a solution, V2 = original volume + water added.'},

{id:'p33',difficulty:'easy',type:'concept',tag:'Concept',
 q:'What happens to the solubility of a gas (like CO2) dissolved in water as temperature increases?',
 choices:['It increases because more kinetic energy is available','It decreases because gas molecules escape more easily','It stays the same','It first increases, then decreases'],correct:1,
 solution:'Gas solubility in liquid decreases with increasing temperature. Higher temperature gives gas molecules enough kinetic energy to escape the solution — this is why warm soda goes flat.'},

{id:'p34',difficulty:'medium',type:'concept',tag:'Concept',
 q:'Which of the following solutions would have the LOWEST freezing point?',
 choices:['1.0 m glucose (i=1)','1.0 m NaCl (i=2)','1.0 m CaCl2 (i=3)','0.5 m AlCl3 (i=4)'],correct:2,
 solution:'ΔTf = Kf × m × i. Products: Glucose: 1.0; NaCl: 2.0; CaCl2: 3.0; AlCl3: 0.5×4=2.0. CaCl2 gives ΔTf = 3×Kf — the largest depression → lowest freezing point.'},

{id:'p35',difficulty:'easy',type:'concept',tag:'Concept',
 q:'A solution of KNO3 is saturated at 60 °C. It is carefully cooled to 20 °C without any solid forming. This solution is best described as:',
 choices:['Unsaturated at 20 °C','Saturated at 20 °C','Supersaturated at 20 °C','A suspension'],correct:2,
 solution:'A supersaturated solution contains more dissolved solute than the equilibrium solubility allows at that temperature. It is unstable and crystallizes rapidly when disturbed.'},

{id:'p36',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Which of these solutes is a strong electrolyte?',
 choices:['Glucose (C6H12O6)','Ethanol (C2H5OH)','Sodium chloride (NaCl)','Acetic acid (CH3COOH)'],correct:2,
 solution:'NaCl is an ionic compound that dissociates 100% in water → Na^+ + Cl^-. Glucose and ethanol are nonelectrolytes. Acetic acid is a weak electrolyte (partially dissociates).'},

{id:'p37',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Why does adding solute lower the freezing point of water?',
 choices:['Solute particles add energy to the system','Solute particles interfere with formation of the crystal lattice','Solute particles raise the boiling point, making freezing harder','Solute reacts with ice and melts it'],correct:1,
 solution:'Water freezes when molecules slow enough to form a regular crystal lattice. Dissolved solute particles disrupt this ordering process, requiring a lower temperature (more energy removal) to freeze.'},

{id:'p38',difficulty:'medium',type:'concept',tag:'Concept',
 q:'Two solutions: Solution A has 1 mol glucose in 1 kg water; Solution B has 1 mol NaCl in 1 kg water. Which has the higher boiling point?',
 choices:['Solution A, because glucose has a higher molar mass','Solution B, because NaCl produces 2 particles per formula unit','They are equal because both are 1 m','Solution A, because glucose is a nonelectrolyte'],correct:1,
 solution:'ΔTb = Kb × m × i. Glucose: i=1, ΔTb = 1×Kb. NaCl: i=2, ΔTb = 2×Kb. More particles → greater colligative effect → higher boiling point for Solution B.'},

{id:'p39',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Which diagram BEST represents 0.1 M NaCl(aq)?',
 choices:['Neutral NaCl clusters surrounded by water molecules','Separate Na^+ and Cl^- ions uniformly dispersed through water','Only Cl^- ions with Na^+ attached to container walls','Na2Cl and NaCl2 ions in solution'],correct:1,
 solution:'NaCl is a strong electrolyte. In solution it fully dissociates: NaCl → Na^+(aq) + Cl^-(aq). A correct particle diagram shows equal numbers of separated Na^+ and Cl^- ions dispersed uniformly.'},

{id:'p40',difficulty:'easy',type:'concept',tag:'Concept',
 q:'The solubility of KNO3 at 20 °C is 32 g per 100 g H2O. A student dissolves 20 g KNO3 in 100 g H2O at 20 °C. This solution is:',
 choices:['Supersaturated','Saturated','Unsaturated','At the solubility limit'],correct:2,
 solution:'20 g < 32 g (the solubility limit at 20 °C), so the solution is unsaturated. More KNO3 could dissolve without leaving any undissolved solid.'},

{id:'p41',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Which concentration unit has units of grams of solute per 100 mL of solution?',
 choices:['Molarity (M)','Molality (m)','% m/m','% m/v'],correct:3,
 solution:'% mass/volume (% m/v) = (g solute / mL solution) × 100, giving units of g per 100 mL. It is commonly used in pharmacy and medicine.'},

{id:'p42',difficulty:'easy',type:'concept',tag:'Concept',
 q:'A precipitation reaction occurs when AgNO3(aq) is added to NaCl(aq). Which ions are the spectator ions?',
 choices:['Ag^+ and Cl^-','Na^+ and NO3^-','Ag^+ and Na^+','Cl^- and NO3^-'],correct:1,
 solution:'The reaction is: Ag^+(aq) + Cl^-(aq) → AgCl(s). Na^+ and NO3^- do not participate — they remain in solution unchanged and are spectator ions.'},

{id:'p43',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Why is molarity temperature-dependent but molality is not?',
 choices:['Molarity uses grams; molality uses moles','Molarity uses volume (which changes with T); molality uses mass (constant)','Molarity is measured at STP; molality is not','They are both temperature-dependent'],correct:1,
 solution:'Volume of a solution changes slightly with temperature (thermal expansion/contraction), so molarity (mol/L) changes. Mass does not change with temperature, so molality (mol/kg) is constant.'},

{id:'p44',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Which of the following is a colligative property?',
 choices:['The color of a colored solution','The conductivity of an electrolyte','The boiling point elevation of a solution','The density of a solvent'],correct:2,
 solution:'Colligative properties depend on the NUMBER of solute particles, not their identity. Boiling point elevation, freezing point depression, osmotic pressure, and vapor pressure lowering are all colligative.'},

{id:'p45',difficulty:'easy',type:'concept',tag:'Concept',
 q:'What is the van\'t Hoff factor (i) for CaCl2?',
 choices:['1','2','3','4'],correct:2,
 solution:'CaCl2 → Ca^2+ + 2Cl^-: produces 3 ions per formula unit → i = 3. This triples the colligative effect compared to a nonelectrolyte at the same molality.'},

{id:'p46',difficulty:'easy',type:'concept',tag:'Concept',
 q:'A saturated solution has solid KNO3 at the bottom. A student adds more KNO3 solid. What happens?',
 choices:['All the new solid dissolves immediately','The solution becomes supersaturated','The added solid remains undissolved','The temperature increases'],correct:2,
 solution:'A saturated solution is already at maximum dissolved solute. Any additional solid will remain undissolved. The only way to dissolve more is to raise the temperature.'},

{id:'p47',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Which pair of ions forms an insoluble precipitate in a double-displacement reaction?',
 choices:['Na^+ and Cl^-','K^+ and NO3^-','Ag^+ and Cl^-','NH4^+ and SO4^2-'],correct:2,
 solution:'AgCl is insoluble (Ksp very small). Na^+, K^+, and NH4^+ salts are generally soluble. NO3^- salts are always soluble. Ag^+ + Cl^- → AgCl(s) is a classic precipitation reaction.'},

{id:'p48',difficulty:'easy',type:'concept',tag:'Concept',
 q:'In a net ionic equation for a precipitation reaction, spectator ions are:',
 choices:['Written as solids on the product side','Omitted because they do not change during the reaction','Included with (s) notation','Always transition metal ions'],correct:1,
 solution:'Spectator ions are dissolved and ionic before and after the reaction — they do not participate. In a net ionic equation they are cancelled and omitted entirely.'},

{id:'p49',difficulty:'medium',type:'concept',tag:'Concept',
 q:'A solution\'s freezing point is -2.79 °C. Which could it be? (Kf = 1.86 °C·kg/mol)',
 choices:['0.500 m glucose (i=1)','0.750 m NaCl (i=2)','0.500 m NaCl (i=2)','1.00 m glucose (i=1)'],correct:1,
 solution:'ΔTf = Kf × m × i. B: 1.86 × 0.750 × 2 = 2.79 °C → fp = -2.79 °C ✓. Others: A: 0.93°C, C: 1.86°C, D: 1.86°C. Only B matches.'},

{id:'p50',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Which process describes osmosis?',
 choices:['Movement of solute from high to low concentration across a membrane','Movement of solvent from low solute concentration to high solute concentration through a semipermeable membrane','Dissolving a solid in a liquid','Evaporation of solvent from a solution'],correct:1,
 solution:'Osmosis is the net movement of SOLVENT (not solute) through a semipermeable membrane from lower to higher solute concentration (from higher to lower water concentration).'},

{id:'p51',difficulty:'easy',type:'concept',tag:'Concept',
 q:'An IV bag labeled "0.9% NaCl (Normal Saline)" uses which unit of concentration?',
 choices:['Molarity','Molality','% m/v','% v/v'],correct:2,
 solution:'0.9% NaCl means 0.9 g NaCl per 100 mL of solution — this is % mass/volume (m/v), the standard notation for pharmaceutical solutions.'},

{id:'p52',difficulty:'medium',type:'concept',tag:'Concept',
 q:'Which solution has the HIGHEST boiling point?',
 choices:['1.0 m sucrose (i=1)','0.5 m NaCl (i=2)','0.5 m MgCl2 (i=3)','Pure water'],correct:2,
 solution:'ΔTb = Kb × m × i: sucrose: 1.0; NaCl: 1.0; MgCl2: 0.5×3=1.5; water: 0. MgCl2 has the highest effective particle count → highest boiling point.'},

{id:'p53',difficulty:'easy',type:'concept',tag:'Concept',
 q:'What happens when a seed crystal is added to a supersaturated KNO3 solution?',
 choices:['The crystal dissolves completely','Rapid crystallization begins as excess solute deposits on the seed','The solution becomes unsaturated','Nothing, because the solution is stable'],correct:1,
 solution:'A supersaturated solution is metastable. A seed crystal provides a surface for excess solute to deposit on, triggering rapid crystallization until the solution returns to saturation.'},

{id:'p54',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Why is road salt (NaCl or CaCl2) effective at de-icing roads?',
 choices:['It reacts with water to produce heat','It raises the melting point of ice','It lowers the freezing point of water below 0 °C','It absorbs sunlight to heat the road'],correct:2,
 solution:'Road salt works through freezing point depression — a colligative property. Dissolved ions increase particle count and lower the freezing point, preventing ice formation at temperatures near 0 °C.'},

{id:'p55',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Which of the following would NOT be considered an electrolyte solution?',
 choices:['Dissolved NaCl','Dissolved HCl','Dissolved glucose','Dissolved KOH'],correct:2,
 solution:'Glucose (C6H12O6) is a molecular compound that does not dissociate in water. It dissolves to form intact molecules, not ions — it is a nonelectrolyte and does not conduct electricity.'},

{id:'p56',difficulty:'medium',type:'concept',tag:'Concept',
 q:'At 80 °C the solubility of KNO3 is ~169 g/100 g H2O. 100 g KNO3 is dissolved in 100 g water at 80 °C, then cooled to 20 °C (solubility ~32 g). Approximately how many grams crystallize out?',
 choices:['About 32 g','About 68 g','About 100 g','None — it stays dissolved'],correct:1,
 solution:'At 20 °C, only 32 g remains dissolved per 100 g water. 100 - 32 = <strong>68 g</strong> crystallizes out.'},

{id:'p57',difficulty:'easy',type:'concept',tag:'Concept',
 q:'When writing a net ionic equation, which species are written in dissociated ionic form?',
 choices:['Only the precipitate','All species','Soluble aqueous ionic compounds','Only the reactants'],correct:2,
 solution:'In a full ionic equation, soluble aqueous ionic compounds are written as separated ions (e.g., Na^+(aq) + Cl^-(aq)). Precipitates and molecular compounds are written as intact formulas.'},

{id:'p58',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Which factor does NOT affect colligative properties?',
 choices:['Number of solute particles','Molality of the solution','van\'t Hoff factor (i)','Chemical identity of the solute'],correct:3,
 solution:'Colligative properties depend ONLY on the NUMBER of solute particles (m × i), not on what those particles are. Chemical identity is irrelevant — only particle count matters.'},

{id:'p59',difficulty:'medium',type:'concept',tag:'Concept',
 q:'0.1 M glucose and 0.1 M NaCl are on opposite sides of a semipermeable membrane. Water flows:',
 choices:['From glucose side to NaCl side','From NaCl side to glucose side','No net flow occurs','Water flows equally in both directions'],correct:0,
 solution:'NaCl (i=2) creates more particles than glucose (i=1) at the same molarity → higher effective solute concentration on NaCl side. Water flows by osmosis from lower to higher solute concentration (glucose → NaCl).'},

{id:'p60',difficulty:'easy',type:'concept',tag:'Concept',
 q:'A student heats a saturated solution, adds more solute until it dissolves, then carefully cools it. The result is:',
 choices:['An unsaturated solution','A saturated solution','A supersaturated solution','A suspension'],correct:2,
 solution:'Dissolving extra solute at high temperature and cooling carefully without triggering crystallization creates a supersaturated solution — a classic lab demonstration.'},

{id:'p61',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Which is the correct procedure for making 250 mL of 0.200 M NaOH?',
 choices:['Weigh NaOH, add to 250 mL of water, stir','Weigh NaOH, dissolve in some water in a 250 mL volumetric flask, then fill to the mark','Add water to flask first, then add NaOH and stir','Dissolve NaOH in 500 mL, then take 250 mL'],correct:1,
 solution:'Correct lab technique: weigh the solute → add to volumetric flask → dissolve in some water → fill precisely to the 250 mL mark. This ensures the total solution volume = 250 mL.'},

{id:'p62',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Which best describes the difference between molarity and molality?',
 choices:['Molarity is always larger than molality','Molarity uses L of solution as the denominator; molality uses kg of solvent','Molality is used for concentrated solutions; molarity for dilute solutions','They are always numerically equal for aqueous solutions'],correct:1,
 solution:'Molarity = mol/L of solution (temperature-dependent); Molality = mol/kg of solvent (temperature-independent). For dilute aqueous solutions they are numerically similar, but not equal.'},

{id:'p63',difficulty:'medium',type:'concept',tag:'Concept',
 q:'Which of the following pairs of ions CANNOT form an insoluble precipitate in a double-displacement reaction?',
 choices:['Pb^2+ and SO4^2-','Na^+ and Cl^-','Ag^+ and Br^-','Ba^2+ and SO4^2-'],correct:1,
 solution:'Na^+ and Cl^- form NaCl, which is very soluble (35.7 g/100 g H2O). All Na^+ salts are soluble. The other pairs form insoluble precipitates: PbSO4(s), AgBr(s), BaSO4(s).'},

{id:'p64',difficulty:'easy',type:'concept',tag:'Concept',
 q:'A solution contains Na^+, Cl^-, Ag^+, and NO3^-. A precipitate forms. Which ion is NOT in the precipitate?',
 choices:['Na^+','Ag^+','Cl^-','Both Na^+ and NO3^-'],correct:3,
 solution:'Ag^+ + Cl^- → AgCl(s) precipitate. Na^+ and NO3^- remain as spectator ions in solution — they are not part of the precipitate.'},

/* ══════════════ MULTI-STEP (18) ══════════════ */
{id:'p65',difficulty:'medium',type:'multi',tag:'Multi-step',
 q:'You dissolve 58.4 g of NaCl (M = 58.44 g/mol) in 500.0 g of water. (a) Calculate molality. (b) Calculate the new freezing point. (Kf = 1.86 °C·kg/mol; i = 2) Enter the freezing point.',
 answer:-7.44, tolerance:0.1, unit:'°C',
 solution:'mol NaCl = 58.4/58.44 = 0.999 mol; m = 0.999/0.500 = 2.00 m. ΔTf = 1.86 × 2.00 × 2 = 7.44 °C; fp = <strong>-7.44 °C</strong>'},

{id:'p66',difficulty:'medium',type:'multi',tag:'Multi-step',
 q:'A 2.00 m glucose (non-electrolyte, i=1) solution in water. What is the freezing point? (Kf = 1.86 °C·kg/mol)',
 answer:-3.72, tolerance:0.05, unit:'°C',
 solution:'ΔTf = 1.86 × 2.00 × 1 = 3.72 °C; fp = 0 - 3.72 = <strong>-3.72 °C</strong>'},

{id:'p67',difficulty:'medium',type:'multi',tag:'Multi-step',
 q:'You need to prepare 1.00 L of 0.0500 M KMnO4 (M = 158.03 g/mol) from a 0.500 M stock. How many grams of KMnO4 are in the final solution?',
 answer:7.90, tolerance:0.1, unit:'g',
 solution:'V1 = (0.0500 × 1000)/0.500 = 100 mL of stock. mol KMnO4 = 0.0500 × 1.00 = 0.0500 mol; g = 0.0500 × 158.03 = <strong>7.90 g</strong>'},

{id:'p68',difficulty:'medium',type:'multi',tag:'Multi-step',
 q:'A solution is made by dissolving 9.00 g of glucose (M = 180.16 g/mol) in 100.0 g of water. What is the freezing point? (Kf = 1.86 °C·kg/mol, i=1)',
 answer:-0.929, tolerance:0.01, unit:'°C',
 solution:'mol = 9.00/180.16 = 0.04996 mol; m = 0.04996/0.1000 = 0.4996 m; ΔTf = 1.86 × 0.500 × 1 = 0.929 °C; fp = <strong>-0.929 °C</strong>'},

{id:'p69',difficulty:'medium',type:'multi',tag:'Multi-step',
 q:'200.0 mL of 1.50 M HNO3 is diluted to 600.0 mL. How many moles of HNO3 are in 50.0 mL of the diluted solution?',
 answer:0.0250, tolerance:0.001, unit:'mol',
 solution:'C2 = (1.50 × 200.0)/600.0 = 0.500 M. mol = 0.500 × 0.0500 = <strong>0.0250 mol</strong>'},

{id:'p70',difficulty:'hard',type:'multi',tag:'Multi-step',
 q:'50.0 mL of 0.400 M BaCl2 is added to 50.0 mL of 0.300 M Na2SO4. (Ba^2+ + SO4^2- → BaSO4↓, M = 233.40 g/mol). Find limiting reagent and calculate grams of precipitate.',
 answer:3.50, tolerance:0.06, unit:'g',
 solution:'mol Ba^2+ = 0.400 × 0.050 = 0.0200 mol. mol SO4^2- = 0.300 × 0.050 = 0.0150 mol. Ratio 1:1 → SO4^2- limits. g BaSO4 = 0.0150 × 233.40 = <strong>3.50 g</strong>'},

{id:'p71',difficulty:'medium',type:'multi',tag:'Multi-step',
 q:'A student prepares 100.0 mL of 1.00 M NaCl, then dilutes 25.0 mL to a final volume of 500.0 mL. What is the molarity of the final solution?',
 answer:0.0500, tolerance:0.001, unit:'M',
 solution:'Step 1: M stock = 1.00 M. Step 2: C2 = (1.00 × 25.0)/500.0 = <strong>0.0500 M</strong>'},

{id:'p72',difficulty:'hard',type:'multi',tag:'Multi-step',
 q:'An unknown non-electrolyte (5.00 g) dissolved in 100.0 g water gives a freezing point of -1.86 °C. (Kf = 1.86 °C·kg/mol) Find the molar mass.',
 answer:50.0, tolerance:1.5, unit:'g/mol',
 solution:'m = ΔTf/(Kf × i) = 1.86/1.86 = 1.00 m. mol = 1.00 × 0.100 = 0.100 mol. M = 5.00/0.100 = <strong>50.0 g/mol</strong>'},

{id:'p73',difficulty:'medium',type:'multi',tag:'Multi-step',
 q:'100.0 mL of 0.500 M AgNO3 + 100.0 mL of 0.500 M NaCl. (Ag^+ + Cl^- → AgCl, M = 143.32 g/mol). Calculate grams of AgCl produced.',
 answer:7.17, tolerance:0.1, unit:'g',
 solution:'mol Ag^+ = 0.500 × 0.100 = 0.0500 mol. mol Cl^- = 0.0500 mol. 1:1 ratio, stoichiometric. g AgCl = 0.0500 × 143.32 = <strong>7.17 g</strong>'},

{id:'p74',difficulty:'hard',type:'multi',tag:'Multi-step',
 q:'How many grams of Pb(NO3)2 (M = 331.21 g/mol) are needed to make 500.0 mL of 0.200 M solution? Then find grams of PbI2 (M = 461.0 g/mol) that precipitate with excess KI. (Pb^2+ + 2I^- → PbI2)',
 answer:46.1, tolerance:0.5, unit:'g PbI2',
 solution:'mol Pb(NO3)2 = 0.200 × 0.500 = 0.100 mol; g = 33.1 g. mol PbI2 = 0.100 mol; g PbI2 = 0.100 × 461.0 = <strong>46.1 g</strong>'},

{id:'p75',difficulty:'medium',type:'multi',tag:'Multi-step',
 q:'You dissolve 40.0 g of NaOH (M = 40.00 g/mol) in 200.0 g of water. What is the boiling point? (Kb = 0.512 °C·kg/mol; NaOH → i = 2)',
 answer:105.12, tolerance:0.05, unit:'°C',
 solution:'mol NaOH = 40.0/40.00 = 1.00 mol; m = 1.00/0.200 = 5.00 m. ΔTb = 0.512 × 5.00 × 2 = 5.12 °C; bp = 100 + 5.12 = <strong>105.12 °C</strong>'},

{id:'p76',difficulty:'medium',type:'multi',tag:'Multi-step',
 q:'A 2.50 m KCl(aq) solution (i = 2). What is the boiling point? (Kb = 0.512 °C·kg/mol)',
 answer:102.56, tolerance:0.05, unit:'°C',
 solution:'ΔTb = 0.512 × 2.50 × 2 = 2.56 °C; bp = 100 + 2.56 = <strong>102.56 °C</strong>'},

{id:'p77',difficulty:'hard',type:'multi',tag:'Multi-step',
 q:'Calculate grams of CaCO3 (M = 100.09 g/mol) that precipitate when 75.0 mL of 0.200 M CaCl2 is mixed with 100.0 mL of 0.200 M Na2CO3. (Ca^2+ + CO3^2- → CaCO3↓). Find limiting reagent first.',
 answer:1.50, tolerance:0.03, unit:'g',
 solution:'mol Ca^2+ = 0.200 × 0.0750 = 0.0150 mol. mol CO3^2- = 0.200 × 0.100 = 0.0200 mol. 1:1 ratio → Ca^2+ limits. g CaCO3 = 0.0150 × 100.09 = <strong>1.50 g</strong>'},

{id:'p78',difficulty:'easy',type:'multi',tag:'Multi-step',
 q:'A student has a 6.00 M HCl stock. They need 100.0 mL of 0.300 M HCl. What volume (mL) of stock do they measure out?',
 answer:5.00, tolerance:0.1, unit:'mL',
 solution:'V1 = (C2 × V2)/C1 = (0.300 × 100.0)/6.00 = <strong>5.00 mL</strong>'},

{id:'p79',difficulty:'easy',type:'multi',tag:'Multi-step',
 q:'A 250.0 mL solution of 3.00 M H2SO4 is diluted to 2.00 L. What is the new molarity?',
 answer:0.375, tolerance:0.005, unit:'M',
 solution:'C2 = (3.00 × 0.250)/2.00 = 0.750/2.00 = <strong>0.375 M</strong>'},

{id:'p80',difficulty:'medium',type:'multi',tag:'Multi-step',
 q:'You dilute 100.0 mL of 0.800 M HNO3 to a final volume of 400.0 mL. Then you take 50.0 mL of the new solution and need to find moles of HNO3 in that portion.',
 answer:0.0100, tolerance:0.0003, unit:'mol',
 solution:'C2 = (0.800 × 100.0)/400.0 = 0.200 M. mol = 0.200 × 0.0500 = <strong>0.0100 mol</strong>'},

{id:'p81',difficulty:'medium',type:'multi',tag:'Multi-step',
 q:'A 500.0 mL solution contains 14.6 g of HCl (M = 36.46 g/mol). This is used to neutralize NaOH (HCl + NaOH → NaCl + H2O). If 30.0 mL of the HCl solution is used, how many moles of NaOH are neutralized?',
 answer:0.0240, tolerance:0.001, unit:'mol',
 solution:'M HCl = (14.6/36.46)/0.5000 = 0.8007 M. mol HCl = 0.8007 × 0.0300 = 0.02402 mol. 1:1 ratio → mol NaOH = <strong>0.0240 mol</strong>'},

{id:'p82',difficulty:'medium',type:'multi',tag:'Multi-step',
 q:'You want to make 250 mL of 2.50 M H2SO4 from concentrated H2SO4 (18.0 M). What volume (mL) of concentrated acid do you measure out?',
 answer:34.7, tolerance:0.5, unit:'mL',
 solution:'V1 = (C2 × V2)/C1 = (2.50 × 250)/18.0 = 625/18.0 = <strong>34.7 mL</strong>. Always add acid to water when diluting concentrated acids.'},

/* ══════════════ EXPANSION BATCH — 90 problems (20 easy / 25 medium / 45 hard) ══════════════ */

/* ── EASY CALC (10) ── */
{id:'p83',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'What is the molarity of a solution made by dissolving 8.50 g of NaCl (M = 58.44 g/mol) in enough water to make 250.0 mL of solution?',
 answer:0.582, tolerance:0.006, unit:'M',
 solution:'mol = 8.50 ÷ 58.44 = 0.1455 mol; M = 0.1455 ÷ 0.2500 = <strong>0.582 M</strong>'},

{id:'p84',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'How many moles of solute are in 250.0 mL of a 0.400 M solution?',
 answer:0.100, tolerance:0.002, unit:'mol',
 solution:'mol = M × L = 0.400 × 0.2500 = <strong>0.100 mol</strong>'},

{id:'p85',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'What volume (in mL) of a 0.400 M solution contains 0.0800 mol of solute?',
 answer:200, tolerance:2, unit:'mL',
 solution:'L = mol ÷ M = 0.0800 ÷ 0.400 = 0.200 L = <strong>200 mL</strong>'},

{id:'p86',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'What is the molarity of a solution made by dissolving 30.0 g of glucose (M = 180.16 g/mol) in enough water to make 500.0 mL of solution?',
 answer:0.333, tolerance:0.005, unit:'M',
 solution:'mol = 30.0 ÷ 180.16 = 0.1665 mol; M = 0.1665 ÷ 0.5000 = <strong>0.333 M</strong>'},

{id:'p87',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'How many grams of NaCl (M = 58.44 g/mol) are needed to make 500.0 mL of a 0.500 M solution?',
 answer:14.6, tolerance:0.2, unit:'g',
 solution:'mol = 0.500 × 0.500 = 0.250 mol; g = 0.250 × 58.44 = <strong>14.6 g</strong>'},

{id:'p88',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'25.0 mL of 4.00 M stock solution is diluted to a final volume of 200.0 mL. What is the new concentration?',
 answer:0.500, tolerance:0.005, unit:'M',
 solution:'C2 = C1V1/V2 = (4.00 × 25.0) ÷ 200.0 = <strong>0.500 M</strong>'},

{id:'p89',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'How many mL of 6.00 M stock solution must be diluted to make 300.0 mL of 0.250 M solution?',
 answer:12.5, tolerance:0.3, unit:'mL',
 solution:'V1 = (0.250 × 300.0) ÷ 6.00 = <strong>12.5 mL</strong>'},

{id:'p90',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'Calculate the percent mass/mass (% m/m) of a solution made by dissolving 12.0 g NaCl in 108.0 g of water.',
 answer:10.0, tolerance:0.2, unit:'%',
 solution:'Solution mass = 12.0 + 108.0 = 120.0 g; % = (12.0 ÷ 120.0) × 100 = <strong>10.0%</strong>'},

{id:'p91',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'What is the % m/v of a solution containing 15.0 g of solute dissolved in enough water to make 300.0 mL of solution?',
 answer:5.00, tolerance:0.1, unit:'% m/v',
 solution:'% m/v = (15.0 ÷ 300.0) × 100 = <strong>5.00 g/100 mL</strong>'},

{id:'p92',difficulty:'easy',type:'calc',tag:'Calculation',
 q:'Calculate the molality of a solution made by dissolving 20.0 g of NaCl (M = 58.44 g/mol) in 400.0 g of water.',
 answer:0.856, tolerance:0.01, unit:'m',
 solution:'mol = 20.0 ÷ 58.44 = 0.3423 mol; m = 0.3423 ÷ 0.4000 kg = <strong>0.856 m</strong>'},

/* ── MEDIUM CALC (10) ── */
{id:'p93',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'A 1.20 m non-electrolyte solution in water (Kb = 0.512 °C·kg/mol). What is the boiling point elevation?',
 answer:0.614, tolerance:0.01, unit:'°C',
 solution:'ΔTb = 0.512 × 1.20 × 1 = <strong>0.614 °C</strong>'},

{id:'p94',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'A 0.900 m non-electrolyte solution in water (Kf = 1.86 °C·kg/mol). What is the freezing point depression?',
 answer:1.674, tolerance:0.02, unit:'°C',
 solution:'ΔTf = 1.86 × 0.900 × 1 = <strong>1.674 °C</strong>'},

{id:'p95',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'What is the freezing point of a 1.20 m KCl(aq) solution? (Kf = 1.86 °C·kg/mol; KCl → i = 2)',
 answer:-4.46, tolerance:0.05, unit:'°C',
 solution:'ΔTf = 1.86 × 1.20 × 2 = 4.46 °C; fp = <strong>-4.46 °C</strong>'},

{id:'p96',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'What is the boiling point of a 0.400 m MgCl2(aq) solution? (Kb = 0.512 °C·kg/mol; MgCl2 → i = 3)',
 answer:100.614, tolerance:0.01, unit:'°C',
 solution:'ΔTb = 0.512 × 0.400 × 3 = 0.614 °C; bp = <strong>100.614 °C</strong>'},

{id:'p97',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'A solution has a freezing point depression ΔTf = 5.58 °C. What is the molality? (Kf = 1.86 °C·kg/mol; non-electrolyte, i=1)',
 answer:3.00, tolerance:0.03, unit:'m',
 solution:'m = ΔTf ÷ (Kf × i) = 5.58 ÷ 1.86 = <strong>3.00 m</strong>'},

{id:'p98',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'How many grams of AgCl (M = 143.32 g/mol) precipitate when 60.0 mL of 0.150 M AgNO3 reacts with excess NaCl? (Ag^+ + Cl^- → AgCl)',
 answer:1.29, tolerance:0.03, unit:'g',
 solution:'mol Ag^+ = 0.150 × 0.0600 = 0.00900 mol; g AgCl = 0.00900 × 143.32 = <strong>1.29 g</strong>'},

{id:'p99',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'How many grams of BaSO4 (M = 233.40 g/mol) form when 80.0 mL of 0.150 M BaCl2 reacts with excess Na2SO4? (Ba^2+ + SO4^2- → BaSO4)',
 answer:2.80, tolerance:0.05, unit:'g',
 solution:'mol Ba^2+ = 0.150 × 0.0800 = 0.0120 mol; g BaSO4 = 0.0120 × 233.40 = <strong>2.80 g</strong>'},

{id:'p100',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'What volume (in mL) of 0.400 M H2SO4 is needed to react with 0.240 mol NaOH? (H2SO4 + 2NaOH → Na2SO4 + 2H2O)',
 answer:300, tolerance:3, unit:'mL',
 solution:'mol H2SO4 = 0.240 ÷ 2 = 0.120 mol; V = 0.120 ÷ 0.400 = 0.300 L = <strong>300 mL</strong>'},

{id:'p101',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'What volume (mL) of 0.075 M H2SO4 neutralizes 30.0 mL of 0.150 M NaOH? (H2SO4 + 2NaOH → Na2SO4 + 2H2O)',
 answer:30.0, tolerance:0.5, unit:'mL',
 solution:'mol NaOH = 0.150 × 0.0300 = 0.00450 mol; mol H2SO4 = 0.00225 mol; V = 0.00225 ÷ 0.075 = 0.0300 L = <strong>30.0 mL</strong>'},

{id:'p102',difficulty:'medium',type:'calc',tag:'Calculation',
 q:'Calculate the osmotic pressure (atm) at 25 °C of a 0.250 M non-electrolyte solution. (R = 0.08206 L·atm/mol·K, T = 298 K, i = 1)',
 answer:6.11, tolerance:0.1, unit:'atm',
 solution:'π = iMRT = 1 × 0.250 × 0.08206 × 298 = <strong>6.11 atm</strong>'},

/* ── HARD CALC (14) ── */
{id:'p103',difficulty:'hard',type:'calc',tag:'Calculation',
 q:'40.0 mL of 0.250 M Pb(NO3)2 is mixed with 60.0 mL of 0.200 M KI. (Pb^2+ + 2I^- → PbI2, M = 461.0 g/mol) Find the limiting reagent and the mass of PbI2 that forms.',
 answer:2.77, tolerance:0.05, unit:'g',
 solution:'mol Pb^2+ = 0.250 × 0.0400 = 0.0100 mol (needs 0.0200 mol I^- to react fully). mol I^- available = 0.200 × 0.0600 = 0.0120 mol. Since 0.0120 < 0.0200, <strong>I^- is limiting</strong>. mol PbI2 = 0.0120 ÷ 2 = 0.00600 mol; g PbI2 = 0.00600 × 461.0 = <strong>2.77 g</strong>'},

{id:'p104',difficulty:'hard',type:'calc',tag:'Calculation',
 q:'An unknown non-electrolyte (2.50 g) is dissolved in enough water to make 250.0 mL of solution. The osmotic pressure is measured as 1.50 atm at 300 K. What is the molar mass of the solute? (R = 0.08206, i = 1)',
 answer:164.1, tolerance:3, unit:'g/mol',
 solution:'M(molarity) = π/(iRT) = 1.50/(1 × 0.08206 × 300) = 0.06093 M; mol = 0.06093 × 0.2500 = 0.01523 mol; molar mass = 2.50 ÷ 0.01523 = <strong>164.1 g/mol</strong>'},

{id:'p105',difficulty:'hard',type:'calc',tag:'Calculation',
 q:'A 10.0 mL sample of 2.00 M stock solution is diluted to 100.0 mL. Then 25.0 mL of that solution is diluted again to a final volume of 250.0 mL. How many moles of solute are in 50.0 mL of the final solution?',
 answer:0.00100, tolerance:0.00003, unit:'mol',
 solution:'Step 1: C1 = (2.00 × 10.0)/100.0 = 0.200 M. Step 2: C2 = (0.200 × 25.0)/250.0 = 0.0200 M. mol in 50.0 mL = 0.0200 × 0.0500 = <strong>0.00100 mol</strong>'},

{id:'p106',difficulty:'hard',type:'calc',tag:'Calculation',
 q:'A NaCl solution is 15.0% m/m and has a density of 1.10 g/mL. What is its molarity? (M(NaCl) = 58.44 g/mol)',
 answer:2.82, tolerance:0.05, unit:'M',
 solution:'In 1.00 L (1000 mL) of solution: mass = 1000 × 1.10 = 1100 g. Solute mass = 0.150 × 1100 = 165 g. mol = 165 ÷ 58.44 = 2.82 mol. Since this is per 1.00 L, M = <strong>2.82 M</strong>'},

{id:'p107',difficulty:'hard',type:'calc',tag:'Calculation',
 q:'A NaCl (M = 58.44 g/mol) solution is 2.50 m. What is its percent mass/mass (% m/m)?',
 answer:12.75, tolerance:0.2, unit:'%',
 solution:'Per 1.00 kg (1000 g) of water: mol NaCl = 2.50, mass NaCl = 2.50 × 58.44 = 146.1 g. Total solution mass = 1000 + 146.1 = 1146.1 g. % m/m = (146.1 ÷ 1146.1) × 100 = <strong>12.75%</strong>'},

{id:'p108',difficulty:'hard',type:'calc',tag:'Calculation',
 q:'A 0.500 m aqueous solution has a measured freezing point depression of 2.79 °C. (Kf = 1.86 °C·kg/mol) What is the experimental van&#8217;t Hoff factor (i)?',
 answer:3.00, tolerance:0.05, unit:'(i)',
 solution:'i = ΔTf ÷ (Kf × m) = 2.79 ÷ (1.86 × 0.500) = <strong>3.00</strong>, consistent with a salt like CaCl2 or Na2SO4 that fully dissociates into 3 ions.'},

{id:'p109',difficulty:'hard',type:'calc',tag:'Calculation',
 q:'100.0 mL of 2.00 M NaCl is mixed with 150.0 mL of 0.500 M NaCl. Assuming volumes are additive, what is the molarity of the combined solution?',
 answer:1.10, tolerance:0.02, unit:'M',
 solution:'Total mol = (2.00 × 0.100) + (0.500 × 0.150) = 0.200 + 0.0750 = 0.275 mol. Total volume = 0.100 + 0.150 = 0.250 L. M = 0.275 ÷ 0.250 = <strong>1.10 M</strong>'},

{id:'p110',difficulty:'hard',type:'calc',tag:'Calculation',
 q:'A 250.0 mL sample of unknown BaCl2 solution reacts completely with excess Na2SO4, producing 3.50 g of BaSO4 (M = 233.40 g/mol). What was the original molarity of the BaCl2 solution?',
 answer:0.0600, tolerance:0.001, unit:'M',
 solution:'mol BaSO4 = 3.50 ÷ 233.40 = 0.0150 mol. Since Ba^2+ + SO4^2- → BaSO4 is 1:1, mol BaCl2 = 0.0150 mol. M = 0.0150 ÷ 0.2500 = <strong>0.0600 M</strong>'},

{id:'p111',difficulty:'hard',type:'calc',tag:'Calculation',
 q:'A 3.20 g sample of an unknown non-electrolyte is dissolved in 150.0 g of water. The freezing point of the resulting solution is -0.744 °C. (Kf = 1.86 °C·kg/mol) What is the molar mass of the solute?',
 answer:53.3, tolerance:1.5, unit:'g/mol',
 solution:'m = ΔTf ÷ Kf = 0.744 ÷ 1.86 = 0.400 m. mol = 0.400 × 0.1500 kg = 0.0600 mol. Molar mass = 3.20 ÷ 0.0600 = <strong>53.3 g/mol</strong>'},

{id:'p112',difficulty:'hard',type:'calc',tag:'Calculation',
 q:'A student dilutes 15.0 mL of NaOH stock solution to a final volume of 250.0 mL. A 20.0 mL portion of the diluted solution exactly neutralizes 25.0 mL of 0.200 M HCl. What was the concentration of the original NaOH stock?',
 answer:1.67, tolerance:0.05, unit:'M',
 solution:'mol HCl = 0.200 × 0.0250 = 0.00500 mol = mol NaOH reacted (1:1 ratio). M(diluted NaOH) = 0.00500 ÷ 0.0200 = 0.250 M. M(stock) = M(diluted) × (250.0/15.0) = 0.250 × 16.67 = <strong>1.67 M</strong>'},

{id:'p113',difficulty:'hard',type:'calc',tag:'Calculation',
 q:'Calculate the osmotic pressure (atm) at 32 °C of a 0.0500 M CaCl2 solution. (R = 0.08206, T = 305 K, CaCl2 → i = 3)',
 answer:3.82, tolerance:0.06, unit:'atm',
 solution:'π = iMRT = 3 × 0.0500 × 0.08206 × 305 = <strong>3.82 atm</strong>'},

{id:'p114',difficulty:'hard',type:'calc',tag:'Calculation',
 q:'How many mL of a 12.0% m/v solution contain 18.0 g of solute?',
 answer:150, tolerance:2, unit:'mL',
 solution:'V = mass ÷ (%/100) = 18.0 ÷ 0.120 = <strong>150 mL</strong>'},

{id:'p115',difficulty:'hard',type:'calc',tag:'Calculation',
 q:'A solution is made by dissolving 12.5 g of CuSO4 (M = 159.61 g/mol) in 175.0 g of water. What is the molality?',
 answer:0.448, tolerance:0.01, unit:'m',
 solution:'mol = 12.5 ÷ 159.61 = 0.07832 mol; m = 0.07832 ÷ 0.1750 kg = <strong>0.448 m</strong>'},

{id:'p116',difficulty:'hard',type:'calc',tag:'Calculation',
 q:'100.0 mL of 20.0% m/v solution is mixed with 300.0 mL of 5.00% m/v solution (same solute). Assuming volumes are additive, what is the final % m/v?',
 answer:8.75, tolerance:0.15, unit:'%',
 solution:'mass 1 = 0.200 × 100.0 = 20.0 g. mass 2 = 0.0500 × 300.0 = 15.0 g. Total mass = 35.0 g. Total volume = 400.0 mL. % m/v = (35.0 ÷ 400.0) × 100 = <strong>8.75%</strong>'},

/* ══════════════ NEW CONCEPTUAL (36) ══════════════ */

/* ── EASY CONCEPT (8) ── */
{id:'p117',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Which quantity does molarity divide moles of solute by?',
 choices:['Liters of solvent','Liters of solution','Kilograms of solvent','Grams of solution'],correct:1,
 solution:'Molarity (M) = mol solute ÷ liters of SOLUTION (not solvent). This distinction matters for concentrated solutions.'},

{id:'p118',difficulty:'easy',type:'concept',tag:'Concept',
 q:'A solution that has dissolved all the solute it can hold at a given temperature is called:',
 choices:['Unsaturated','Saturated','Supersaturated','Diluted'],correct:1,
 solution:'A saturated solution is in equilibrium with undissolved solute (or at the maximum solubility limit) at a given temperature.'},

{id:'p119',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Which of the following is a nonelectrolyte in water?',
 choices:['NaCl','KOH','Sucrose (C12H22O11)','HNO3'],correct:2,
 solution:'Sucrose is a molecular compound that dissolves as intact molecules — it does not dissociate into ions and does not conduct electricity.'},

{id:'p120',difficulty:'easy',type:'concept',tag:'Concept',
 q:'What does "like dissolves like" mean in the context of solubility?',
 choices:['Only identical compounds can form solutions','Polar solvents dissolve polar/ionic solutes; nonpolar solvents dissolve nonpolar solutes','All solutes dissolve equally in all solvents','Only solids dissolve in liquids'],correct:1,
 solution:'"Like dissolves like" describes how intermolecular forces must match: polar/ionic substances dissolve well in polar solvents (like water), while nonpolar substances dissolve well in nonpolar solvents.'},

{id:'p121',difficulty:'easy',type:'concept',tag:'Concept',
 q:'In the formula π = iMRT, what does the "i" represent?',
 choices:['The ionization energy of the solute','The van&#8217;t Hoff factor (number of particles per formula unit)','The intensity of the solution color','The initial concentration'],correct:1,
 solution:'The van&#8217;t Hoff factor (i) accounts for how many particles a formula unit produces in solution — 1 for nonelectrolytes, 2 for NaCl, 3 for CaCl2, etc.'},

{id:'p122',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Adding solute to a solvent generally has what effect on the solvent&#8217;s vapor pressure?',
 choices:['Raises it','Lowers it','No effect','Doubles it'],correct:1,
 solution:'Dissolved solute particles occupy some of the liquid surface, reducing the rate at which solvent molecules escape into the vapor phase — this lowers vapor pressure, a colligative property.'},

{id:'p123',difficulty:'easy',type:'concept',tag:'Concept',
 q:'Which statement about dilution is TRUE?',
 choices:['Dilution changes the number of moles of solute','Dilution decreases concentration but keeps moles of solute constant','Dilution always doubles the volume','Dilution requires removing solvent'],correct:1,
 solution:'Dilution adds solvent, increasing volume and decreasing concentration, but the moles of solute present do not change — this is the basis of C1V1 = C2V2.'},

{id:'p124',difficulty:'easy',type:'concept',tag:'Concept',
 q:'A reaction where a solid forms when two aqueous solutions are mixed is called a:',
 choices:['Neutralization reaction','Combustion reaction','Precipitation (double-displacement) reaction','Redox reaction'],correct:2,
 solution:'When ions from two soluble solutions combine to form an insoluble product, that solid is a precipitate, and the reaction is a precipitation (double-displacement) reaction.'},

/* ── MEDIUM CONCEPT (10) ── */
{id:'p125',difficulty:'medium',type:'concept',tag:'Concept',
 q:'A student mixes equal volumes of 0.100 M AgNO3 and 0.100 M NaCl. Compared to the original AgNO3 solution, the concentration of Ag^+ remaining in solution after the reaction is:',
 choices:['The same, 0.100 M','Doubled, since two solutions were mixed','Essentially zero, since nearly all Ag^+ precipitates as AgCl with equal moles of Cl^-','Exactly 0.0500 M, half of the original'],correct:2,
 solution:'Equal moles of Ag^+ and Cl^- were combined (1:1 ratio, both 0.100 M in equal volumes), so essentially all of the Ag^+ precipitates out as AgCl(s), leaving very little Ag^+ in solution.'},

{id:'p126',difficulty:'medium',type:'concept',tag:'Concept',
 q:'Which solution would have the greatest osmotic pressure at the same temperature and molarity?',
 choices:['0.10 M glucose','0.10 M NaCl','0.10 M CaCl2','0.10 M AlCl3'],correct:3,
 solution:'π = iMRT. AlCl3 → Al^3+ + 3Cl^-, giving i = 4, the largest particle count of the choices, so it produces the greatest osmotic pressure at equal molarity.'},

{id:'p127',difficulty:'medium',type:'concept',tag:'Concept',
 q:'Why does molality remain unaffected when a solution is heated, while molarity decreases slightly?',
 choices:['Heat destroys some solute particles','Heating expands the solution&#8217;s volume without changing its mass, so mol/kg stays fixed while mol/L decreases','Heating increases the mass of the solvent','Both change equally with heat'],correct:1,
 solution:'Thermal expansion increases volume (lowering mol/L = molarity) but mass is conserved, so mol/kg = molality is unaffected by temperature.'},

{id:'p128',difficulty:'medium',type:'concept',tag:'Concept',
 q:'A chemist compares 1.0 m glucose, 1.0 m NaCl, and 1.0 m CaCl2 in water. Ranking their boiling points from LOWEST to HIGHEST:',
 choices:['CaCl2 &lt; NaCl &lt; glucose','glucose &lt; NaCl &lt; CaCl2','NaCl &lt; glucose &lt; CaCl2','They are all equal'],correct:1,
 solution:'ΔTb = Kb × m × i. Glucose (i=1) has the smallest effect, NaCl (i=2) is next, CaCl2 (i=3) has the largest boiling point elevation — so glucose has the LOWEST boiling point and CaCl2 the HIGHEST.'},

{id:'p129',difficulty:'medium',type:'concept',tag:'Concept',
 q:'A precipitation reaction is run with 50.0 mL of 0.200 M Pb(NO3)2 and 50.0 mL of 0.100 M NaCl. Which ion determines the maximum amount of precipitate (PbCl2) that can form?',
 choices:['Pb^2+, since it is more concentrated','Cl^-, since only half the necessary moles of Cl^- are available relative to Pb^2+','NO3^-, the spectator ion','Na^+, the spectator ion'],correct:1,
 solution:'PbCl2 needs a 1:2 ratio of Pb^2+:Cl^-. Here mol Pb^2+ = 0.0100 and mol Cl^- = 0.00500 — far short of the 0.0200 mol Cl^- needed, so Cl^- is the limiting reagent.'},

{id:'p130',difficulty:'medium',type:'concept',tag:'Concept',
 q:'Two beakers contain water at the same temperature. Beaker A has table salt dissolved in it; Beaker B is pure water. Which statement about vapor pressure is TRUE?',
 choices:['Beaker A has higher vapor pressure because ions attract water molecules to the surface','Beaker A has lower vapor pressure because solute particles occupy some of the surface, reducing the escape rate of water molecules','Both beakers have identical vapor pressure','Vapor pressure depends only on temperature, not solute'],correct:1,
 solution:'Dissolved solute lowers vapor pressure (a colligative property) by physically occupying part of the surface and reducing the fraction of solvent molecules able to escape into vapor.'},

{id:'p131',difficulty:'medium',type:'concept',tag:'Concept',
 q:'Why is it important to use a volumetric flask rather than a beaker when preparing a solution of precise molarity?',
 choices:['Volumetric flasks are cheaper','Beakers only measure mass, not volume','Volumetric flasks are calibrated to a precise volume at the fill line, minimizing volume measurement error','Beakers cannot hold liquids'],correct:2,
 solution:'Volumetric flasks are manufactured and calibrated to hold an exact volume at their fill line, giving far more precise volume measurements than the graduated markings on a beaker.'},

{id:'p132',difficulty:'medium',type:'concept',tag:'Concept',
 q:'A solution&#8217;s molarity is known, but its density is unknown. Which additional piece of information would let you convert molarity to molality?',
 choices:['The temperature only','The density of the solution and the molar mass of the solute','The color of the solution','The container&#8217;s shape'],correct:1,
 solution:'Converting between molarity (per L of solution) and molality (per kg of solvent) requires knowing the solution&#8217;s density (to get total mass) and the solute&#8217;s molar mass (to separate solute mass from solvent mass).'},

{id:'p133',difficulty:'medium',type:'concept',tag:'Concept',
 q:'Which of these correctly describes solubility behavior as temperature increases, for a TYPICAL ionic solid dissolving in water?',
 choices:['Solubility always decreases with increasing temperature','Solubility generally increases with increasing temperature, though there are exceptions','Solubility is unaffected by temperature for solids','Solubility becomes negative at high temperature'],correct:1,
 solution:'Most ionic solids become more soluble as temperature rises (more thermal energy helps break the crystal lattice), though there are some exceptions where solubility decreases with temperature.'},

{id:'p134',difficulty:'medium',type:'concept',tag:'Concept',
 q:'A student standardizes an NaOH solution of unknown concentration by titrating it against a known mass of a solid acid, recording moles of acid, moles of base, and volume of NaOH used. Which concentration unit is most directly obtained from this data?',
 choices:['Molality','% m/m','Molarity','Mole fraction'],correct:2,
 solution:'Titration gives moles of NaOH reacted and the volume of NaOH solution used — dividing moles by volume (in L) directly gives molarity.'},

/* ── HARD CONCEPT (18) ── */
{id:'p135',difficulty:'hard',type:'concept',tag:'Concept',
 q:'Two unknown solutions, X and Y, have the same molality, but X has a freezing point depression twice as large as Y. What is the most likely explanation?',
 choices:['X has a larger molar mass than Y','X is an electrolyte with a van&#8217;t Hoff factor about twice that of Y (e.g., i=2 vs i=1)','X was measured at a higher temperature','Y has a larger molar mass than X'],correct:1,
 solution:'ΔTf = Kf × m × i. Since m is the same for both, a doubled ΔTf means X&#8217;s van&#8217;t Hoff factor (particle count) is about twice that of Y — e.g., X is an electrolyte producing 2 particles per formula unit while Y is a nonelectrolyte.'},

{id:'p136',difficulty:'hard',type:'concept',tag:'Concept',
 q:'A 0.100 M solution of an unknown salt MX2 has an experimentally measured osmotic pressure consistent with i=2.5 instead of the theoretical i=3. What does this suggest?',
 choices:['The salt is a nonelectrolyte','The salt is not fully dissociating (ion pairing reduces the effective particle count below the theoretical maximum)','The measurement is impossible and must be an error','MX2 actually has the formula MX'],correct:1,
 solution:'Real electrolyte solutions often show an effective i slightly below the theoretical maximum because some ions remain associated as ion pairs instead of separating completely, especially at higher concentrations.'},

{id:'p137',difficulty:'hard',type:'concept',tag:'Concept',
 q:'A chemist performs two dilutions in sequence on a stock solution: first diluting 10-fold, then diluting the result an additional 5-fold. What is the overall dilution factor compared to the original stock?',
 choices:['15-fold','2-fold','50-fold','5-fold'],correct:2,
 solution:'Sequential dilution factors multiply: 10 × 5 = <strong>50-fold</strong> overall dilution from the original stock.'},

{id:'p138',difficulty:'hard',type:'concept',tag:'Concept',
 q:'500.0 mL of 0.200 M Na2CO3 is mixed with 500.0 mL of 0.150 M CaCl2 (Ca^2+ + CO3^2- → CaCO3). After the reaction, which ions remain at significant concentration in solution?',
 choices:['Only Ca^2+ and CO3^2-','Only Na^+ and Cl^-, since excess CO3^2- reacts with something else','Na^+, Cl^-, and the excess unreacted CO3^2- (since CO3^2- was in excess relative to Ca^2+)','No ions remain; everything precipitates'],correct:2,
 solution:'mol CO3^2- = 0.100, mol Ca^2+ = 0.0750. The 1:1 reaction consumes all the Ca^2+, leaving 0.0250 mol of CO3^2- unreacted, along with the spectator ions Na^+ and Cl^-.'},

{id:'p139',difficulty:'hard',type:'concept',tag:'Concept',
 q:'A student wants to know if a colorless aqueous solution conducts electricity strongly, weakly, or not at all, without doing a conductivity test. Which piece of information would be MOST useful?',
 choices:['The solution&#8217;s temperature','Whether the solute is an ionic compound, a strong acid/base, or a molecular nonelectrolyte','The color of the solute in its solid form','The volume of the solution'],correct:1,
 solution:'Conductivity depends on the presence and concentration of free-moving ions. Knowing the solute&#8217;s chemical class (strong electrolyte, weak electrolyte, or nonelectrolyte) predicts conductivity directly.'},

{id:'p140',difficulty:'hard',type:'concept',tag:'Concept',
 q:'Which of these solutions, all at 1.0 m, would be expected to have a boiling point closest to that of 1.0 m glucose?',
 choices:['1.0 m NaCl','1.0 m CaCl2','1.0 m AlCl3','1.0 m HC2H3O2 (acetic acid, a weak electrolyte with i only slightly above 1)'],correct:3,
 solution:'Glucose is a nonelectrolyte (i=1). Acetic acid is a weak electrolyte that only partially ionizes, giving an effective i just slightly greater than 1 — much closer to glucose than the fully-dissociated salts.'},

{id:'p141',difficulty:'hard',type:'concept',tag:'Concept',
 q:'A saturated solution of AgCl is at equilibrium with excess solid AgCl. If solid NaCl is added, providing extra Cl^- ions, what happens to the amount of dissolved Ag^+, and why?',
 choices:['It increases, because more chloride helps silver dissolve','It decreases, because the added Cl^- shifts the dissolution equilibrium toward more solid AgCl forming (a common-ion effect)','It stays the same, since AgCl is already saturated','All the AgCl dissolves completely'],correct:1,
 solution:'This is the common-ion effect: adding Cl^- (a product ion of the AgCl dissolution equilibrium) shifts the equilibrium to favor more solid AgCl, decreasing dissolved Ag^+.'},

{id:'p142',difficulty:'hard',type:'concept',tag:'Concept',
 q:'A 0.50 M solution of a weak electrolyte has a measured freezing point depression smaller than predicted for i=2 but larger than predicted for i=1. What does this indicate about the solute?',
 choices:['It is a strong electrolyte','It is a nonelectrolyte','It partially dissociates in water, producing an effective i between 1 and 2','The Kf value used must be wrong'],correct:2,
 solution:'A measured effect between the i=1 and i=2 predictions is the signature of a weak electrolyte — one that dissociates into ions only partially, giving an effective particle count between the extremes.'},

{id:'p143',difficulty:'hard',type:'concept',tag:'Concept',
 q:'You need to determine whether mixing two solutions will produce a precipitate. Which strategy correctly predicts this?',
 choices:['Always assume a precipitate forms when two aqueous solutions are mixed','Combine the ions from both solutions into all possible new pairings and check solubility rules for each new pairing','Only ionic compounds with the same charge magnitude will precipitate','Precipitates only form between two different metals'],correct:1,
 solution:'The correct method is to swap the ions (double displacement) and check each new possible pairing against the solubility rules — if any new pairing is insoluble, a precipitate forms.'},

{id:'p144',difficulty:'hard',type:'concept',tag:'Concept',
 q:'A concentrated stock solution is diluted, but the student accidentally uses the INITIAL (not final) volume in the denominator when calculating the new concentration. How does this error affect the calculated concentration compared to the true value?',
 choices:['The calculated concentration is too low, since dividing by too small a volume','The calculated concentration is too high, since dividing by a smaller volume than the true final volume overstates concentration','There is no effect, since moles are unaffected','The error only matters if the dilution factor is very large'],correct:1,
 solution:'Using the smaller initial volume instead of the larger final volume in the denominator (mol ÷ V) produces an artificially inflated, too-high calculated concentration.'},

{id:'p145',difficulty:'hard',type:'concept',tag:'Concept',
 q:'Rank the following in order of INCREASING osmotic pressure at equal molarity and temperature: (I) sucrose (i=1), (II) KBr (i=2), (III) Na3PO4 (i=4)',
 choices:['III &lt; II &lt; I','I &lt; II &lt; III','II &lt; I &lt; III','I &lt; III &lt; II'],correct:1,
 solution:'π = iMRT — osmotic pressure scales directly with i at equal M and T. Since 1 &lt; 2 &lt; 4, the order is sucrose &lt; KBr &lt; Na3PO4, i.e. <strong>I &lt; II &lt; III</strong>.'},

{id:'p146',difficulty:'hard',type:'concept',tag:'Concept',
 q:'A solute&#8217;s molality and molarity are numerically very close for a dilute aqueous solution but diverge for a concentrated one. What is the best explanation?',
 choices:['Molality is only defined for dilute solutions','In dilute solutions, the mass of dissolved solute is negligible compared to the solvent, so solution mass &asymp; solvent mass and density &asymp; 1 g/mL; concentrated solutions violate both approximations','Molarity always exceeds molality at high concentration due to unit conversion errors','There is no real relationship between the two units'],correct:1,
 solution:'For dilute aqueous solutions, the solute contributes very little mass, so 1 L of solution &asymp; 1 kg of water and density &asymp; 1 g/mL, making M &asymp; m numerically. Concentrated solutions violate these approximations, so the values diverge.'},

{id:'p147',difficulty:'hard',type:'concept',tag:'Concept',
 q:'Two students calculate the molar mass of the same unknown nonelectrolyte from the same freezing point depression data. Student A correctly assumes i=1, while Student B mistakenly assumes i=2. Whose calculated molar mass will be LARGER?',
 choices:['Student A, because assuming i=1 gives a larger calculated molality','Student B, because assuming a larger i produces a smaller calculated molality, and dividing mass by a smaller mol count gives a larger molar mass','They will calculate the same molar mass regardless of i','Neither — the molar mass calculation does not involve i'],correct:1,
 solution:'m = ΔTf/(Kf×i). Assuming a larger i (Student B) makes the calculated molality smaller, which makes the calculated moles smaller — and since molar mass = mass/mol, a smaller mol count produces a LARGER calculated molar mass.'},

{id:'p148',difficulty:'hard',type:'concept',tag:'Concept',
 q:'A solid acid H2A (a weak diprotic acid) is dissolved in water and only partially ionizes. Its van&#8217;t Hoff factor i would most likely be:',
 choices:['Exactly 1, since it does not fully dissociate','Exactly 3, since it can release 2 H^+ plus the anion','Between 1 and 3, reflecting partial dissociation into ions','Exactly 2, always'],correct:2,
 solution:'A weak diprotic acid only partially ionizes, so its effective particle count lies somewhere between 1 (fully intact molecules) and 3 (fully dissociated into 2 H^+ and A^2-).'},

{id:'p149',difficulty:'hard',type:'concept',tag:'Concept',
 q:'A student assumes NaCl and CaCl2 solutions of the same molarity will have the same osmotic pressure, since both are common ionic salts. Why is this assumption WRONG?',
 choices:['It is actually correct — both have i=2','CaCl2 produces 3 ions (i=3) per formula unit vs. NaCl&#8217;s 2 ions (i=2), so at equal molarity CaCl2 produces higher osmotic pressure','NaCl does not dissociate in water','Osmotic pressure does not depend on the number of particles'],correct:1,
 solution:'NaCl → Na^+ + Cl^- gives i=2, while CaCl2 → Ca^2+ + 2Cl^- gives i=3. Since π = iMRT, CaCl2 produces a higher osmotic pressure than NaCl at the same molarity.'},

{id:'p150',difficulty:'hard',type:'concept',tag:'Concept',
 q:'In preparing a calibration series of standard solutions from one stock solution via serial dilution, an error in the FIRST dilution step will affect:',
 choices:['Only that one dilution step','All subsequent dilutions in the series, since each is made from the previous (compounding the error)','No other steps, since each dilution is independent','Only the last dilution in the series'],correct:1,
 solution:'In serial dilution, each new solution is made from the previous one, so an error at the very first step propagates and compounds through every later dilution in the series.'},

{id:'p151',difficulty:'hard',type:'concept',tag:'Concept',
 q:'Which best explains why concentrated sulfuric acid should be added SLOWLY to water (not the reverse) when diluting?',
 choices:['Water added to concentrated acid can cause the exothermic heat of dilution to boil and spatter the acid dangerously; adding acid to a larger volume of water dissipates the heat more safely','It has no safety impact, it is just tradition','Acid added to water reacts explosively no matter what','Water added to acid changes the acid&#8217;s molar mass'],correct:0,
 solution:'Dilution of concentrated sulfuric acid is highly exothermic. Adding water to concentrated acid can locally boil the water and spatter acid; adding acid slowly to a large volume of water spreads the heat out safely — hence "always add acid to water."'},

{id:'p152',difficulty:'hard',type:'concept',tag:'Concept',
 q:'For a given solute in water at a given concentration, will ΔTf/Kf and ΔTb/Kb give the same value of i, assuming ideal behavior?',
 choices:['No, they measure completely different quantities','Yes — both ΔTf/Kf and ΔTb/Kb equal m×i for the same solution, so they should give consistent values of i','No, Kf and Kb always give a different i by definition','Only for nonelectrolytes'],correct:1,
 solution:'Both formulas rearrange to i = ΔT/(K×m). Since both ΔTf and ΔTb arise from the same underlying particle count (m×i) in the same solution, they should agree on the value of i under ideal behavior.'},

/* ══════════════ NEW MULTI-STEP (20) ══════════════ */

/* ── EASY MULTI (2) ── */
{id:'p153',difficulty:'easy',type:'multi',tag:'Multi-step',
 q:'You dissolve 5.00 g of NaOH (M = 40.00 g/mol) in enough water to make 250.0 mL of solution. What is the molarity?',
 answer:0.500, tolerance:0.01, unit:'M',
 solution:'mol = 5.00/40.00 = 0.125 mol; M = 0.125/0.2500 = <strong>0.500 M</strong>'},

{id:'p154',difficulty:'easy',type:'multi',tag:'Multi-step',
 q:'50.0 mL of 4.00 M stock solution is diluted to a final volume of 400.0 mL. What is the new concentration?',
 answer:0.500, tolerance:0.01, unit:'M',
 solution:'C2 = (4.00 × 50.0)/400.0 = <strong>0.500 M</strong>'},

/* ── MEDIUM MULTI (5) ── */
{id:'p155',difficulty:'medium',type:'multi',tag:'Multi-step',
 q:'300.0 mL of 2.00 M KBr is diluted to 900.0 mL. How many moles of KBr are in 60.0 mL of the diluted solution?',
 answer:0.0400, tolerance:0.001, unit:'mol',
 solution:'C2 = (2.00 × 300.0)/900.0 = 0.6667 M. mol = 0.6667 × 0.0600 = <strong>0.0400 mol</strong>'},

{id:'p156',difficulty:'medium',type:'multi',tag:'Multi-step',
 q:'A solution is made by dissolving 12.0 g of glucose (M = 180.16 g/mol) in 150.0 g of water. What is the freezing point? (Kf = 1.86 °C·kg/mol, i=1)',
 answer:-0.826, tolerance:0.02, unit:'°C',
 solution:'mol = 12.0/180.16 = 0.06661 mol; m = 0.06661/0.1500 = 0.4440 m; ΔTf = 1.86 × 0.4440 = 0.826 °C; fp = <strong>-0.826 °C</strong>'},

{id:'p157',difficulty:'medium',type:'multi',tag:'Multi-step',
 q:'60.0 mL of 0.250 M Na2SO4 reacts with excess BaCl2. (Ba^2+ + SO4^2- → BaSO4, M = 233.40 g/mol) How many grams of BaSO4 precipitate?',
 answer:3.50, tolerance:0.06, unit:'g',
 solution:'mol SO4^2- = 0.250 × 0.0600 = 0.0150 mol; g BaSO4 = 0.0150 × 233.40 = <strong>3.50 g</strong>'},

{id:'p158',difficulty:'medium',type:'multi',tag:'Multi-step',
 q:'A student has 4.00 M HCl stock. They need 150.0 mL of 0.600 M HCl. What volume (mL) of stock do they measure out?',
 answer:22.5, tolerance:0.4, unit:'mL',
 solution:'V1 = (C2 × V2)/C1 = (0.600 × 150.0)/4.00 = <strong>22.5 mL</strong>'},

{id:'p159',difficulty:'medium',type:'multi',tag:'Multi-step',
 q:'You dissolve 22.5 g of KBr (M = 119.00 g/mol) in 300.0 g of water. What is the boiling point? (Kb = 0.512 °C·kg/mol; KBr → i = 2)',
 answer:100.645, tolerance:0.02, unit:'°C',
 solution:'mol KBr = 22.5/119.00 = 0.1891 mol; m = 0.1891/0.3000 = 0.6303 m. ΔTb = 0.512 × 0.6303 × 2 = 0.645 °C; bp = 100 + 0.645 = <strong>100.645 °C</strong>'},

/* ── HARD MULTI (13) ── */
{id:'p160',difficulty:'hard',type:'multi',tag:'Multi-step',
 q:'60.0 mL of 0.300 M Pb(NO3)2 is mixed with 80.0 mL of 0.250 M KI. (Pb^2+ + 2I^- → PbI2, M = 461.0 g/mol) Find the limiting reagent and the mass of PbI2 formed.',
 answer:4.61, tolerance:0.08, unit:'g',
 solution:'mol Pb^2+ = 0.300 × 0.0600 = 0.0180 mol (needs 0.0360 mol I^-). mol I^- available = 0.250 × 0.0800 = 0.0200 mol. Since 0.0200 &lt; 0.0360, <strong>I^- is limiting</strong>. mol PbI2 = 0.0200 ÷ 2 = 0.0100 mol; g PbI2 = 0.0100 × 461.0 = <strong>4.61 g</strong>'},

{id:'p161',difficulty:'hard',type:'multi',tag:'Multi-step',
 q:'An unknown non-electrolyte (3.10 g) is dissolved in enough water to make 300.0 mL of solution. The osmotic pressure is measured as 1.20 atm at 295 K. What is the molar mass of the solute? (R = 0.08206, i = 1)',
 answer:208.5, tolerance:4, unit:'g/mol',
 solution:'M = π/(iRT) = 1.20/(1 × 0.08206 × 295) = 0.04957 M; mol = 0.04957 × 0.3000 = 0.01487 mol; molar mass = 3.10 ÷ 0.01487 = <strong>208.5 g/mol</strong>'},

{id:'p162',difficulty:'hard',type:'multi',tag:'Multi-step',
 q:'A 15.0 mL sample of 3.00 M stock solution is diluted to 150.0 mL. Then 20.0 mL of that solution is diluted again to a final volume of 200.0 mL. How many moles of solute are in 40.0 mL of the final solution?',
 answer:0.00120, tolerance:0.00003, unit:'mol',
 solution:'Step 1: C1 = (3.00 × 15.0)/150.0 = 0.300 M. Step 2: C2 = (0.300 × 20.0)/200.0 = 0.0300 M. mol in 40.0 mL = 0.0300 × 0.0400 = <strong>0.00120 mol</strong>'},

{id:'p163',difficulty:'hard',type:'multi',tag:'Multi-step',
 q:'A KCl solution is 20.0% m/m and has a density of 1.13 g/mL. What is its molarity? (M(KCl) = 74.55 g/mol)',
 answer:3.03, tolerance:0.06, unit:'M',
 solution:'In 1.00 L (1000 mL) of solution: mass = 1000 × 1.13 = 1130 g. Solute mass = 0.200 × 1130 = 226 g. mol = 226 ÷ 74.55 = 3.03 mol, so M = <strong>3.03 M</strong>'},

{id:'p164',difficulty:'hard',type:'multi',tag:'Multi-step',
 q:'A KBr (M = 119.00 g/mol) solution is 1.80 m. What is its percent mass/mass (% m/m)?',
 answer:17.64, tolerance:0.3, unit:'%',
 solution:'Per 1.00 kg water: mol KBr = 1.80, mass KBr = 1.80 × 119.00 = 214.2 g. Total solution mass = 1000 + 214.2 = 1214.2 g. % m/m = (214.2 ÷ 1214.2) × 100 = <strong>17.64%</strong>'},

{id:'p165',difficulty:'hard',type:'multi',tag:'Multi-step',
 q:'A 0.400 m aqueous solution has a measured freezing point depression of 2.23 °C. (Kf = 1.86 °C·kg/mol) What is the experimental van&#8217;t Hoff factor (i)?',
 answer:3.00, tolerance:0.05, unit:'(i)',
 solution:'i = ΔTf ÷ (Kf × m) = 2.23 ÷ (1.86 × 0.400) = <strong>3.00</strong>'},

{id:'p166',difficulty:'hard',type:'multi',tag:'Multi-step',
 q:'150.0 mL of 1.50 M NaCl is mixed with 250.0 mL of 0.400 M NaCl. Assuming volumes are additive, what is the molarity of the combined solution?',
 answer:0.813, tolerance:0.02, unit:'M',
 solution:'Total mol = (1.50 × 0.150) + (0.400 × 0.250) = 0.225 + 0.100 = 0.325 mol. Total volume = 0.400 L. M = 0.325 ÷ 0.400 = <strong>0.813 M</strong>'},

{id:'p167',difficulty:'hard',type:'multi',tag:'Multi-step',
 q:'A 300.0 mL sample of unknown CaCl2 solution reacts completely with excess Na2CO3, producing 4.20 g of CaCO3 (M = 100.09 g/mol). What was the original molarity of the CaCl2 solution?',
 answer:0.140, tolerance:0.003, unit:'M',
 solution:'mol CaCO3 = 4.20 ÷ 100.09 = 0.0420 mol. Since Ca^2+ + CO3^2- → CaCO3 is 1:1, mol CaCl2 = 0.0420 mol. M = 0.0420 ÷ 0.3000 = <strong>0.140 M</strong>'},

{id:'p168',difficulty:'hard',type:'multi',tag:'Multi-step',
 q:'A 2.80 g sample of an unknown non-electrolyte is dissolved in 120.0 g of water. The freezing point of the solution is -0.564 °C. (Kf = 1.86 °C·kg/mol) What is the molar mass of the solute?',
 answer:77.0, tolerance:2, unit:'g/mol',
 solution:'m = ΔTf ÷ Kf = 0.564 ÷ 1.86 = 0.3032 m. mol = 0.3032 × 0.1200 kg = 0.03639 mol. Molar mass = 2.80 ÷ 0.03639 = <strong>77.0 g/mol</strong>'},

{id:'p169',difficulty:'hard',type:'multi',tag:'Multi-step',
 q:'A student dilutes 15.0 mL of NaOH stock to a final volume of 300.0 mL. A 20.0 mL portion of the diluted solution exactly neutralizes 25.0 mL of 0.200 M HCl. What was the concentration of the original NaOH stock?',
 answer:5.00, tolerance:0.1, unit:'M',
 solution:'mol HCl = 0.200 × 0.0250 = 0.00500 mol = mol NaOH reacted (1:1 ratio). M(diluted) = 0.00500 ÷ 0.0200 = 0.250 M. M(stock) = 0.250 × (300.0/15.0) = <strong>5.00 M</strong>'},

{id:'p170',difficulty:'hard',type:'multi',tag:'Multi-step',
 q:'Calculate the osmotic pressure (atm) at 32 °C of a 0.0800 M Na3PO4 solution. (R = 0.08206, T = 305 K, Na3PO4 → i = 4)',
 answer:8.01, tolerance:0.15, unit:'atm',
 solution:'π = iMRT = 4 × 0.0800 × 0.08206 × 305 = <strong>8.01 atm</strong>'},

{id:'p171',difficulty:'hard',type:'multi',tag:'Multi-step',
 q:'How many mL of an 8.00% m/v solution contain 12.0 g of solute?',
 answer:150, tolerance:2, unit:'mL',
 solution:'V = mass ÷ (%/100) = 12.0 ÷ 0.0800 = <strong>150 mL</strong>'},

{id:'p172',difficulty:'hard',type:'multi',tag:'Multi-step',
 q:'150.0 mL of a 15.0% m/v solution is mixed with 250.0 mL of a 6.00% m/v solution (same solute). Assuming volumes are additive, what is the final % m/v?',
 answer:9.38, tolerance:0.15, unit:'%',
 solution:'mass 1 = 0.150 × 150.0 = 22.5 g. mass 2 = 0.0600 × 250.0 = 15.0 g. Total mass = 37.5 g. Total volume = 400.0 mL. % m/v = (37.5 ÷ 400.0) × 100 = <strong>9.38%</strong>'},

]; // end ALL_PROBLEMS — 172 problems total (82 original + 90 added)
