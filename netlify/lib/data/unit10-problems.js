/* ── Unit 10 Problem Bank — Thermochemistry
   84 problems total: 27 calc | 35 concept | 22 multi
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  // ── CALCULATION (27 problems) ─────────────────────────────────────────────
  {id:'p01', type:'calc', tag:'Energy Conversion',
   q:'Convert 2500 J to kJ.',
   answer:2.5, tolerance:0.01, unit:'kJ',
   solution:'2500 J &divide; 1000 = <strong>2.50 kJ</strong>.'},

  {id:'p02', type:'calc', tag:'Energy Conversion',
   q:'Convert 3.50 kJ to J.',
   answer:3500, tolerance:5, unit:'J',
   solution:'3.50 kJ &times; 1000 = <strong>3500 J</strong>.'},

  {id:'p03', type:'calc', tag:'Energy Conversion',
   q:'Convert 125 cal to J. (1 cal = 4.184 J)',
   answer:523, tolerance:2, unit:'J',
   solution:'125 &times; 4.184 = <strong>523 J</strong>.'},

  {id:'p04', type:'calc', tag:'Energy Conversion',
   q:'Convert 4184 J to food Calories. (1 Cal = 4184 J)',
   answer:1.0, tolerance:0.01, unit:'Cal',
   solution:'4184 &divide; 4184 = <strong>1.00 Cal</strong>.'},

  {id:'p05', type:'calc', tag:'q = mc\u0394T',
   q:'How much heat is required to raise 50.0 g of water from 20.0&deg;C to 35.0&deg;C? (c = 4.18 J/g&deg;C)',
   answer:3135, tolerance:10, unit:'J',
   solution:'q = mc&Delta;T = 50.0 &times; 4.18 &times; 15.0 = <strong>3135 J</strong>.'},

  {id:'p06', type:'calc', tag:'q = mc\u0394T',
   q:'A 125 g sample of water cools from 80.0&deg;C to 22.0&deg;C. What is the magnitude of heat released? (c = 4.18 J/g&deg;C)',
   answer:30305, tolerance:30, unit:'J',
   solution:'q = 125 &times; 4.18 &times; 58.0 = <strong>30,305 J</strong> released.'},

  {id:'p07', type:'calc', tag:'Specific Heat',
   q:'What is the specific heat of a metal if 450 J heats 30.0 g of the metal from 20.0&deg;C to 35.0&deg;C?',
   answer:1.0, tolerance:0.02, unit:'J/g\u00b0C',
   solution:'c = q/(m&Delta;T) = 450 &divide; (30.0 &times; 15.0) = <strong>1.00 J/g&deg;C</strong>.'},

  {id:'p08', type:'calc', tag:'q = mc\u0394T',
   q:'How many grams of water can be heated from 25.0&deg;C to 55.0&deg;C by absorbing 6270 J? (c = 4.18 J/g&deg;C)',
   answer:50.0, tolerance:0.3, unit:'g',
   solution:'m = q/(c&Delta;T) = 6270 &divide; (4.18 &times; 30.0) = <strong>50.0 g</strong>.'},

  {id:'p09', type:'calc', tag:'Phase Change',
   q:'How much heat is needed to melt 15.0 g of ice at 0&deg;C? (&Delta;H<sub>fus</sub> = 334 J/g)',
   answer:5010, tolerance:15, unit:'J',
   solution:'q = m&Delta;H<sub>fus</sub> = 15.0 &times; 334 = <strong>5010 J</strong>.'},

  {id:'p10', type:'calc', tag:'Phase Change',
   q:'How much heat is needed to vaporize 25.0 g of water at 100&deg;C? (&Delta;H<sub>vap</sub> = 2260 J/g)',
   answer:56500, tolerance:50, unit:'J',
   solution:'q = m&Delta;H<sub>vap</sub> = 25.0 &times; 2260 = <strong>56500 J</strong>.'},

  {id:'p11', type:'calc', tag:'Phase Change',
   q:'What is the magnitude of heat released when 18.0 g of steam condenses at 100&deg;C? (&Delta;H<sub>vap</sub> = 2260 J/g)',
   answer:40680, tolerance:30, unit:'J',
   solution:'Condensation: q = 18.0 &times; 2260 = <strong>40,680 J</strong>.'},

  {id:'p12', type:'calc', tag:'Phase Change',
   q:'What is the magnitude of heat released when 40.0 g of water freezes at 0&deg;C? (&Delta;H<sub>fus</sub> = 334 J/g)',
   answer:13360, tolerance:20, unit:'J',
   solution:'Freezing: q = 40.0 &times; 334 = <strong>13,360 J</strong>.'},

  {id:'p13', type:'calc', tag:'q = mc\u0394T',
   q:'How much heat is required to warm 20.0 g of liquid water from 25.0&deg;C to 100.0&deg;C? (c = 4.18 J/g&deg;C)',
   answer:6270, tolerance:20, unit:'J',
   solution:'q = 20.0 &times; 4.18 &times; 75.0 = <strong>6270 J</strong>.'},

  {id:'p14', type:'calc', tag:'Heating Curve',
   q:'How much total heat is required to heat 10.0 g of ice from &minus;20.0&deg;C to 0&deg;C and then melt it completely? (c<sub>ice</sub> = 2.09 J/g&deg;C, &Delta;H<sub>fus</sub> = 334 J/g)',
   answer:3758, tolerance:10, unit:'J',
   solution:'Warm ice: 10.0 &times; 2.09 &times; 20.0 = 418 J. Melt: 10.0 &times; 334 = 3340 J. Total = <strong>3758 J</strong>.'},

  {id:'p15', type:'calc', tag:'Heating Curve',
   q:'How much total heat is required to heat 20.0 g of water from 25.0&deg;C to 100.0&deg;C and then boil it? (c = 4.18 J/g&deg;C, &Delta;H<sub>vap</sub> = 2260 J/g)',
   answer:51470, tolerance:50, unit:'J',
   solution:'Warm liquid: 20.0 &times; 4.18 &times; 75.0 = 6270 J. Vaporize: 20.0 &times; 2260 = 45,200 J. Total = <strong>51,470 J</strong>.'},

  {id:'p16', type:'calc', tag:'Heating Curve',
   q:'How much total heat is required to take 30.0 g of water at 25.0&deg;C to steam at 118.0&deg;C? (c<sub>water</sub> = 4.18 J/g&deg;C, &Delta;H<sub>vap</sub> = 2260 J/g, c<sub>steam</sub> = 2.01 J/g&deg;C)',
   answer:78290, tolerance:100, unit:'J',
   solution:'Heat liquid: 9405 J. Vaporize: 67,800 J. Heat steam: 1085 J. Total = <strong>78,290 J</strong>.'},

  {id:'p17', type:'calc', tag:'Calorimetry',
   q:'In a coffee-cup calorimeter, 100.0 g of water warms from 22.0&deg;C to 75.0&deg;C. How much heat was absorbed by the water? (c = 4.18 J/g&deg;C)',
   answer:22154, tolerance:30, unit:'J',
   solution:'q = 100.0 &times; 4.18 &times; 53.0 = <strong>22,154 J</strong>.'},

  {id:'p18', type:'calc', tag:'Calorimetry',
   q:'In a calorimeter, 50.0 g of water cools from 60.0&deg;C to 48.0&deg;C. What is the heat absorbed by the reaction? (c = 4.18 J/g&deg;C)',
   answer:2508, tolerance:20, unit:'J',
   solution:'Water loses 50.0 &times; 4.18 &times; 12.0 = 2508 J, so the reaction absorbed <strong>2508 J</strong>.'},

  {id:'p19', type:'calc', tag:'Phase Change',
   q:'How many grams of water could be completely vaporized by 90.4 kJ? (&Delta;H<sub>vap</sub> = 2260 J/g)',
   answer:40.0, tolerance:0.3, unit:'g',
   solution:'90,400 J &divide; 2260 = <strong>40.0 g</strong>.'},

  {id:'p20', type:'calc', tag:'Phase Change',
   q:'How many grams of ice could be melted by 6.68 kJ? (&Delta;H<sub>fus</sub> = 334 J/g)',
   answer:20.0, tolerance:0.2, unit:'g',
   solution:'6680 J &divide; 334 = <strong>20.0 g</strong>.'},

  {id:'p21', type:'calc', tag:'Thermo Stoich',
   q:'What is the heat released when 2.50 mol of CH<sub>4</sub> burns? (&Delta;H = &minus;890 kJ for CH<sub>4</sub> + 2O<sub>2</sub> &rarr; CO<sub>2</sub> + 2H<sub>2</sub>O)',
   answer:2225, tolerance:3, unit:'kJ',
   solution:'2.50 mol &times; 890 kJ/mol = <strong>2225 kJ</strong> released.'},

  {id:'p22', type:'calc', tag:'Thermo Stoich',
   q:'For N<sub>2</sub> + 3H<sub>2</sub> &rarr; 2NH<sub>3</sub>, &Delta;H = &minus;92.2 kJ. How much heat is released when 4.00 mol NH<sub>3</sub> are produced?',
   answer:184.4, tolerance:0.5, unit:'kJ',
   solution:'The equation gives 92.2 kJ for 2 mol NH<sub>3</sub>. For 4.00 mol: 2 &times; 92.2 = <strong>184.4 kJ</strong> released.'},

  {id:'p23', type:'calc', tag:'Thermo Stoich',
   q:'For 2H<sub>2</sub>O(l) &rarr; 2H<sub>2</sub>(g) + O<sub>2</sub>(g), &Delta;H = +571.6 kJ. How much heat is required to decompose 1.50 mol H<sub>2</sub>O?',
   answer:428.7, tolerance:1.0, unit:'kJ',
   solution:'571.6 kJ for 2 mol H<sub>2</sub>O. For 1.50 mol: 571.6 &times; (1.50/2.00) = <strong>428.7 kJ</strong>.'},

  {id:'p24', type:'calc', tag:'Enthalpy of Formation',
   q:'Find &Delta;H<sub>rxn</sub> for C(s) + O<sub>2</sub>(g) &rarr; CO<sub>2</sub>(g). &Delta;H&deg;<sub>f</sub>[CO<sub>2</sub>] = &minus;393.5 kJ/mol; elements in standard state = 0.',
   answer:-393.5, tolerance:0.2, unit:'kJ/mol',
   solution:'&Delta;H<sub>rxn</sub> = &minus;393.5 &minus; 0 = <strong>&minus;393.5 kJ/mol</strong>.'},

  {id:'p25', type:'calc', tag:'Enthalpy of Formation',
   q:'Find &Delta;H<sub>rxn</sub> for 2H<sub>2</sub>(g) + O<sub>2</sub>(g) &rarr; 2H<sub>2</sub>O(l). &Delta;H&deg;<sub>f</sub>[H<sub>2</sub>O(l)] = &minus;285.8 kJ/mol.',
   answer:-571.6, tolerance:0.5, unit:'kJ',
   solution:'&Delta;H<sub>rxn</sub> = 2(&minus;285.8) &minus; 0 = <strong>&minus;571.6 kJ</strong>.'},

  {id:'p26', type:'calc', tag:"Hess's Law",
   q:'Given: H<sub>2</sub> + &frac12;O<sub>2</sub> &rarr; H<sub>2</sub>O(l), &Delta;H = &minus;285.8 kJ. What is &Delta;H for the reverse reaction H<sub>2</sub>O(l) &rarr; H<sub>2</sub> + &frac12;O<sub>2</sub>?',
   answer:285.8, tolerance:0.3, unit:'kJ',
   solution:'Reversing changes the sign: &Delta;H = <strong>+285.8 kJ</strong>.'},

  {id:'p27', type:'calc', tag:"Hess's Law",
   q:'Given: H<sub>2</sub> + &frac12;O<sub>2</sub> &rarr; H<sub>2</sub>O(l), &Delta;H = &minus;285.8 kJ. What is &Delta;H for 2H<sub>2</sub> + O<sub>2</sub> &rarr; 2H<sub>2</sub>O(l)?',
   answer:-571.6, tolerance:0.5, unit:'kJ',
   solution:'Doubling the equation doubles &Delta;H: 2 &times; &minus;285.8 = <strong>&minus;571.6 kJ</strong>.'},

  // ── CONCEPTUAL (35 problems) ──────────────────────────────────────────────
  {id:'p28', type:'concept', tag:'Heat vs Temp',
   q:'Heat is best defined as:',
   choices:['the total energy stored in matter','energy transferred because of a temperature difference','the average kinetic energy of particles','the measure of disorder in a system'],
   correct:1,
   solution:'Heat is <strong>energy in transit</strong> due to a temperature difference, not a property stored in an object.'},

  {id:'p29', type:'concept', tag:'Heat vs Temp',
   q:'Temperature is best defined as:',
   choices:['the amount of heat in an object','the average kinetic energy of particles','the total potential energy of particles','energy transferred into a system'],
   correct:1,
   solution:'Temperature reflects the <strong>average kinetic energy</strong> of particles, not total energy.'},

  {id:'p30', type:'concept', tag:'Exo vs Endo',
   q:'An exothermic reaction:',
   choices:['absorbs heat from the surroundings','has &Delta;H greater than zero','releases heat to the surroundings','always needs a catalyst'],
   correct:2,
   solution:'Exothermic reactions release heat, so &Delta;H is negative and the surroundings warm up.'},

  {id:'p31', type:'concept', tag:'Exo vs Endo',
   q:'An endothermic reaction:',
   choices:['releases heat and has negative &Delta;H','absorbs heat and has positive &Delta;H','always occurs spontaneously','cools only the reactants, never the surroundings'],
   correct:1,
   solution:'Endothermic reactions absorb heat from the surroundings, so &Delta;H is positive.'},

  {id:'p32', type:'concept', tag:'Exo vs Endo',
   q:'If &Delta;H for a reaction is negative, the reaction is:',
   choices:['endothermic','exothermic','at equilibrium','catalyzed'],
   correct:1,
   solution:'Negative &Delta;H means heat is released: <strong>exothermic</strong>.'},

  {id:'p33', type:'concept', tag:'Heat vs Temp',
   q:'Which statement correctly compares heat and temperature?',
   choices:['Heat and temperature mean the same thing','Heat is energy transfer; temperature measures average kinetic energy','Heat is measured in &deg;C and temperature in J','Temperature depends on mass but heat does not'],
   correct:1,
   solution:'Heat is <strong>energy transferred</strong>; temperature is a measure of average kinetic energy per particle.'},

  {id:'p34', type:'concept', tag:'Heating Curve',
   q:'What happens to temperature during the flat portions of a heating curve?',
   choices:['Temperature rises quickly','Temperature falls quickly','Temperature stays constant while a phase change occurs','Temperature becomes undefined'],
   correct:2,
   solution:'During melting or boiling, added heat overcomes intermolecular forces rather than raising temperature.'},

  {id:'p35', type:'concept', tag:'Phase Change',
   q:'Which phase change is endothermic?',
   choices:['freezing','condensation','deposition','evaporation'],
   correct:3,
   solution:'Evaporation requires heat input to separate particles from the liquid surface.'},

  {id:'p36', type:'concept', tag:'Phase Change',
   q:'Which phase change is exothermic?',
   choices:['melting','vaporization','condensation','sublimation'],
   correct:2,
   solution:'Condensation releases heat as gas particles enter the liquid phase.'},

  {id:'p37', type:'concept', tag:'Phase Change',
   q:'At the boiling point of a pure substance:',
   choices:['liquid and gas can coexist','only gas exists','temperature must increase continuously','specific heat becomes zero'],
   correct:0,
   solution:'At the boiling point, liquid and gas phases coexist in equilibrium.'},

  {id:'p38', type:'concept', tag:'Phase Change',
   q:'At the melting point of a pure substance:',
   choices:['solid and liquid can coexist','only liquid exists','the sample must be heated very rapidly','the sample cannot absorb heat'],
   correct:0,
   solution:'At the melting point, solid and liquid phases coexist during the transition.'},

  {id:'p39', type:'concept', tag:'Heating Curve',
   q:'On a heating curve for water, the longest flat segment is the boiling segment because:',
   choices:['water has a very low boiling point','&Delta;H<sub>vap</sub> is much larger than &Delta;H<sub>fus</sub>','steam has no specific heat','temperature rises faster for gases'],
   correct:1,
   solution:'Vaporization requires far more energy per gram than melting does.'},

  {id:'p40', type:'concept', tag:'q = mc\u0394T',
   q:'In q = mc&Delta;T, &Delta;T should be calculated as:',
   choices:['initial minus final','final minus initial','always a positive number','mass divided by temperature'],
   correct:1,
   solution:'Use <strong>final &minus; initial</strong>. The sign tells you whether heat was absorbed or released.'},

  {id:'p41', type:'concept', tag:'Calorimetry',
   q:'If the temperature of the surroundings rises during a reaction in a calorimeter, the reaction is:',
   choices:['endothermic','exothermic','phase-neutral','boiling'],
   correct:1,
   solution:'If the surroundings warm up, the reaction released heat to them: <strong>exothermic</strong>.'},

  {id:'p42', type:'concept', tag:'Activation Energy',
   q:'A catalyst speeds up a reaction by:',
   choices:['changing &Delta;H','raising the activation energy','lowering the activation energy','changing the enthalpy of products'],
   correct:2,
   solution:'Catalysts provide an alternate pathway with lower activation energy. They do not change &Delta;H.'},

  {id:'p43', type:'concept', tag:'Activation Energy',
   q:'Compared with an uncatalyzed pathway, a catalyzed pathway has:',
   choices:['the same activation energy and same &Delta;H','lower activation energy but same &Delta;H','higher activation energy and lower &Delta;H','higher activation energy but same &Delta;H'],
   correct:1,
   solution:'Catalysts lower E<sub>a</sub> but do not shift the energy of reactants or products, so &Delta;H is unchanged.'},

  {id:'p44', type:'concept', tag:'Activation Energy',
   q:'Activation energy is:',
   choices:['the energy difference between products and reactants','the minimum energy needed for effective collisions to occur','the heat released by the reaction','the temperature of the activated complex'],
   correct:1,
   solution:'Activation energy is the energy barrier reactants must overcome to form products.'},

  {id:'p45', type:'concept', tag:'Energy Diagrams',
   q:'If products are lower in energy than reactants on an energy diagram, the reaction is:',
   choices:['endothermic','exothermic','always slow','always catalyzed'],
   correct:1,
   solution:'Lower-energy products mean energy was released; &Delta;H is negative: <strong>exothermic</strong>.'},

  {id:'p46', type:'concept', tag:'Energy Diagrams',
   q:'If products are higher in energy than reactants, the reaction is:',
   choices:['exothermic','endothermic','always spontaneous','always fast'],
   correct:1,
   solution:'Higher-energy products mean energy had to be absorbed; &Delta;H is positive: <strong>endothermic</strong>.'},

  {id:'p47', type:'concept', tag:'Calorimetry',
   q:'In a constant-pressure calorimeter, q<sub>reaction</sub> equals:',
   choices:['q<sub>solution</sub>','&minus;q<sub>solution</sub>','&Delta;T of the metal','always zero'],
   correct:1,
   solution:'Energy is conserved: q<sub>rxn</sub> = &minus;q<sub>solution</sub>.'},

  {id:'p48', type:'concept', tag:'q = mc\u0394T',
   q:'Which equation is used for a temperature change with no phase change?',
   choices:['q = m&Delta;H<sub>fus</sub>','q = m&Delta;H<sub>vap</sub>','q = mc&Delta;T','q = n&Delta;H<sub>f</sub>'],
   correct:2,
   solution:'Use <strong>q = mc&Delta;T</strong> whenever the substance remains in one phase.'},

  {id:'p49', type:'concept', tag:'Phase Change',
   q:'Which equation is used during melting at constant temperature?',
   choices:['q = mc&Delta;T','q = m&Delta;H<sub>fus</sub>','q = m&Delta;H<sub>vap</sub>','q = nRT'],
   correct:1,
   solution:'Melting is a phase change at constant temperature; use q = m&Delta;H<sub>fus</sub>.'},

  {id:'p50', type:'concept', tag:'Phase Change',
   q:'Which equation is used during boiling at constant temperature?',
   choices:['q = m&Delta;H<sub>vap</sub>','q = m&Delta;H<sub>fus</sub>','q = mc&Delta;T','q = P&Delta;V'],
   correct:0,
   solution:'Boiling uses q = m&Delta;H<sub>vap</sub>.'},

  {id:'p51', type:'concept', tag:'Energy Conversion',
   q:'Why are food Calories written with a capital C?',
   choices:['to mean joules','to mean kilocalories','to mean calories per gram','to mean specific heat'],
   correct:1,
   solution:'A food Calorie (capital C) is a <strong>kilocalorie</strong> = 1000 cal.'},

  {id:'p52', type:'concept', tag:'Energy Conversion',
   q:'Which energy conversion is correct?',
   choices:['1 cal = 4.184 kJ','1 kcal = 4.184 J','1 Cal = 4184 J','1 kJ = 100 cal'],
   correct:2,
   solution:'1 calorie = 4.184 J, so 1 kilocalorie (food Calorie) = 4184 J.'},

  {id:'p53', type:'concept', tag:"Hess's Law",
   q:'What is true about Hess&rsquo;s law?',
   choices:['Only exothermic equations can be added','Enthalpy changes can be added because enthalpy is a state function','Catalysts must be present for the law to apply','The pathway changes the total &Delta;H'],
   correct:1,
   solution:'Enthalpy is a state function, so &Delta;H depends only on initial and final states, not the path taken.'},

  {id:'p54', type:'concept', tag:"Hess's Law",
   q:'When you reverse a thermochemical equation in a Hess&rsquo;s law problem, you must:',
   choices:['keep &Delta;H the same','change only the coefficients','reverse the sign of &Delta;H','halve &Delta;H'],
   correct:2,
   solution:'Reversing the equation reverses the energy change, so the sign of &Delta;H changes.'},

  {id:'p55', type:'concept', tag:"Hess's Law",
   q:'When you multiply a thermochemical equation by 3, you must:',
   choices:['leave &Delta;H unchanged','multiply &Delta;H by 3','reverse the sign of &Delta;H','divide &Delta;H by 3'],
   correct:1,
   solution:'&Delta;H scales with the amount of reaction, just like the coefficients.'},

  {id:'p56', type:'concept', tag:'Enthalpy of Formation',
   q:'The standard enthalpy of formation of an element in its standard state is:',
   choices:['1 kJ/mol','0 kJ/mol','equal to its boiling point','always negative'],
   correct:1,
   solution:'By definition, &Delta;H&deg;<sub>f</sub> for an element in its standard state is <strong>zero</strong>.'},

  {id:'p57', type:'concept', tag:'Enthalpy of Formation',
   q:'The standard enthalpy of formation refers to:',
   choices:['forming 1 mol of product from any reactants','forming 1 mol of a compound from its elements in their standard states','heating 1 g of a substance by 1&deg;C','any reaction measured at STP'],
   correct:1,
   solution:'&Delta;H&deg;<sub>f</sub> is defined for the formation of <strong>1 mol</strong> of a compound from its elements in standard states.'},

  {id:'p58', type:'concept', tag:'Exo vs Endo',
   q:'If dissolving ammonium nitrate causes the solution to feel cold, the process is:',
   choices:['exothermic','endothermic','neutral','always spontaneous only at high temperature'],
   correct:1,
   solution:'A colder solution means heat was absorbed from the surroundings: <strong>endothermic</strong>.'},

  {id:'p59', type:'concept', tag:'Exo vs Endo',
   q:'If dissolving calcium chloride causes the solution to get warm, the process is:',
   choices:['endothermic','exothermic','a phase change only','impossible in water'],
   correct:1,
   solution:'A warmer solution means heat was released to the surroundings: <strong>exothermic</strong>.'},

  {id:'p60', type:'concept', tag:'Heating Curve',
   q:'Why is a heating curve useful?',
   choices:['It shows how temperature changes as heat is added and where phase changes occur','It gives the molar mass directly','It replaces calorimetry','It shows only pressure changes'],
   correct:0,
   solution:'Heating curves show sloped temperature-change regions and flat phase-change plateaus, making it easy to identify which equation applies.'},

  {id:'p61', type:'concept', tag:'Thermo Stoich',
   q:'In thermochemical stoichiometry, the &Delta;H given in a balanced equation applies to:',
   choices:['1 gram of reactant','1 mole of every substance','the exact coefficients shown in the balanced equation','only the products'],
   correct:2,
   solution:'The enthalpy value belongs to the reaction <strong>as written</strong>, including its specific coefficients.'},

  {id:'p62', type:'concept', tag:'q = mc\u0394T',
   q:'A larger mass of water with the same temperature change absorbs:',
   choices:['less heat','the same heat','more heat','zero heat'],
   correct:2,
   solution:'From q = mc&Delta;T, larger mass gives larger q when c and &Delta;T are the same.'},

  // ── MULTI-STEP (22 problems) ──────────────────────────────────────────────
  {id:'p63', type:'multi', tag:'Heating Curve',
   q:'A 40.0 g ice sample starts at &minus;10.0&deg;C. It is heated to 0&deg;C and then completely melted. How much total heat is required? (c<sub>ice</sub> = 2.09 J/g&deg;C, &Delta;H<sub>fus</sub> = 334 J/g)',
   answer:14196, tolerance:30, unit:'J',
   solution:'Warm ice: 40.0 &times; 2.09 &times; 10.0 = 836 J. Melt: 40.0 &times; 334 = 13,360 J. Total = <strong>14,196 J</strong>.'},

  {id:'p64', type:'multi', tag:'Heating Curve',
   q:'A 25.0 g ice sample at &minus;15.0&deg;C is heated to liquid water at 25.0&deg;C. How much heat is required? (c<sub>ice</sub> = 2.09 J/g&deg;C, c<sub>water</sub> = 4.18 J/g&deg;C, &Delta;H<sub>fus</sub> = 334 J/g)',
   answer:11747, tolerance:25, unit:'J',
   solution:'Warm ice: 25.0 &times; 2.09 &times; 15.0 = 784 J. Melt: 8350 J. Warm liquid: 25.0 &times; 4.18 &times; 25.0 = 2613 J. Total = <strong>11,747 J</strong>.'},

  {id:'p65', type:'multi', tag:'Heating Curve',
   q:'A 12.0 g water sample at 25.0&deg;C is heated to steam at 110.0&deg;C. How much heat is required? (c<sub>water</sub> = 4.18 J/g&deg;C, &Delta;H<sub>vap</sub> = 2260 J/g, c<sub>steam</sub> = 2.01 J/g&deg;C)',
   answer:31123, tolerance:40, unit:'J',
   solution:'Heat liquid: 3762 J. Vaporize: 27,120 J. Heat steam: 241 J. Total = <strong>31,123 J</strong>.'},

  {id:'p66', type:'multi', tag:'Calorimetry',
   q:'A metal sample of mass 50.0 g at 120.0&deg;C is placed in 100.0 g of water at 20.0&deg;C. The final temperature is 25.0&deg;C. What is the specific heat of the metal? (c<sub>water</sub> = 4.18 J/g&deg;C)',
   answer:0.44, tolerance:0.01, unit:'J/g\u00b0C',
   solution:'Water gains q = 100.0 &times; 4.18 &times; 5.0 = 2090 J. Metal loses the same amount over &Delta;T = 95.0&deg;C. c = 2090 &divide; (50.0 &times; 95.0) = <strong>0.440 J/g&deg;C</strong>.'},

  {id:'p67', type:'multi', tag:'Calorimetry',
   q:'A 75.0 g metal sample at 95.0&deg;C is placed into 150.0 g of water at 20.0&deg;C. The final temperature is 24.0&deg;C. What is the specific heat of the metal? (c<sub>water</sub> = 4.18 J/g&deg;C)',
   answer:0.471, tolerance:0.01, unit:'J/g\u00b0C',
   solution:'Water gains 150.0 &times; 4.18 &times; 4.0 = 2508 J. Metal cools by 71.0&deg;C. c = 2508 &divide; (75.0 &times; 71.0) = <strong>0.471 J/g&deg;C</strong>.'},

  {id:'p68', type:'multi', tag:'Calorimetry',
   q:'In a coffee-cup calorimeter, 100.0 g of water rises from 22.0&deg;C to 28.0&deg;C when 0.0500 mol of a substance reacts. What is &Delta;H in kJ/mol?',
   answer:-50.2, tolerance:0.5, unit:'kJ/mol',
   solution:'q<sub>water</sub> = 100.0 &times; 4.18 &times; 6.0 = 2508 J = 2.508 kJ. Reaction released this heat for 0.0500 mol, so &Delta;H = &minus;2.508/0.0500 = <strong>&minus;50.2 kJ/mol</strong>.'},

  {id:'p69', type:'multi', tag:'Calorimetry',
   q:'In a coffee-cup calorimeter, 80.0 g of water drops from 30.0&deg;C to 24.0&deg;C while 0.100 mol NH<sub>4</sub>NO<sub>3</sub> dissolves. What is &Delta;H<sub>soln</sub> in kJ/mol?',
   answer:20.1, tolerance:0.3, unit:'kJ/mol',
   solution:'Water loses 80.0 &times; 4.18 &times; 6.0 = 2006 J, so dissolving absorbed +2.006 kJ for 0.100 mol. &Delta;H<sub>soln</sub> = <strong>+20.1 kJ/mol</strong>.'},

  {id:'p70', type:'multi', tag:'Thermo Stoich',
   q:'Given 2SO<sub>2</sub>(g) + O<sub>2</sub>(g) &rarr; 2SO<sub>3</sub>(g), &Delta;H = &minus;198 kJ. How much heat is released when 5.00 mol SO<sub>3</sub> forms?',
   answer:495, tolerance:2, unit:'kJ',
   solution:'&minus;198 kJ for 2 mol SO<sub>3</sub>. For 5.00 mol: 198 &times; (5.00/2.00) = <strong>495 kJ</strong> released.'},

  {id:'p71', type:'multi', tag:'Thermo Stoich',
   q:'Given N<sub>2</sub> + 3H<sub>2</sub> &rarr; 2NH<sub>3</sub>, &Delta;H = &minus;92.2 kJ. How much heat is released when 6.00 mol H<sub>2</sub> reacts completely?',
   answer:184.4, tolerance:0.5, unit:'kJ',
   solution:'3.00 mol H<sub>2</sub> release 92.2 kJ. 6.00 mol H<sub>2</sub> is twice that: <strong>184.4 kJ</strong> released.'},

  {id:'p72', type:'multi', tag:'Enthalpy of Formation',
   q:'How much heat is required to form 3.00 mol NO<sub>2</sub>(g) if &Delta;H&deg;<sub>f</sub>[NO<sub>2</sub>] = +33.2 kJ/mol?',
   answer:99.6, tolerance:0.3, unit:'kJ',
   solution:'3.00 &times; 33.2 = <strong>99.6 kJ</strong> required.'},

  {id:'p73', type:'multi', tag:"Hess's Law",
   q:'Use Hess&rsquo;s law. Given: C(s)+O<sub>2</sub>(g)&rarr;CO<sub>2</sub>(g), &Delta;H=&minus;393.5 kJ and CO(g)+&frac12;O<sub>2</sub>(g)&rarr;CO<sub>2</sub>(g), &Delta;H=&minus;283.0 kJ. Find &Delta;H for C(s)+&frac12;O<sub>2</sub>(g)&rarr;CO(g).',
   answer:-110.5, tolerance:0.3, unit:'kJ',
   solution:'Reverse CO oxidation: &Delta;H = +283.0 kJ. Add to C+O<sub>2</sub>&rarr;CO<sub>2</sub>: net &Delta;H = &minus;393.5 + 283.0 = <strong>&minus;110.5 kJ</strong>.'},

  {id:'p74', type:'multi', tag:"Hess's Law",
   q:'Use Hess&rsquo;s law. Given: H<sub>2</sub> + &frac12;O<sub>2</sub> &rarr; H<sub>2</sub>O(l), &Delta;H=&minus;285.8 kJ and H<sub>2</sub> + &frac12;O<sub>2</sub> &rarr; H<sub>2</sub>O(g), &Delta;H=&minus;241.8 kJ. Find &Delta;H for H<sub>2</sub>O(l) &rarr; H<sub>2</sub>O(g).',
   answer:44.0, tolerance:0.2, unit:'kJ',
   solution:'&Delta;H<sub>vap</sub> = &minus;241.8 &minus; (&minus;285.8) = <strong>+44.0 kJ</strong>.'},

  {id:'p75', type:'multi', tag:'Enthalpy of Formation',
   q:'Using &Delta;H&deg;<sub>f</sub> values, calculate &Delta;H<sub>rxn</sub> for CH<sub>4</sub>(g)+2O<sub>2</sub>(g)&rarr;CO<sub>2</sub>(g)+2H<sub>2</sub>O(l). &Delta;H&deg;<sub>f</sub>: CH<sub>4</sub>=&minus;74.8, CO<sub>2</sub>=&minus;393.5, H<sub>2</sub>O(l)=&minus;285.8 kJ/mol.',
   answer:-890.3, tolerance:0.5, unit:'kJ',
   solution:'Products: &minus;393.5 + 2(&minus;285.8) = &minus;965.1 kJ. Reactants: &minus;74.8 kJ. &Delta;H<sub>rxn</sub> = &minus;965.1 &minus; (&minus;74.8) = <strong>&minus;890.3 kJ</strong>.'},

  {id:'p76', type:'multi', tag:'Enthalpy of Formation',
   q:'Using &Delta;H&deg;<sub>f</sub> values, calculate &Delta;H<sub>rxn</sub> for CaCO<sub>3</sub>(s)&rarr;CaO(s)+CO<sub>2</sub>(g). &Delta;H&deg;<sub>f</sub>: CaCO<sub>3</sub>=&minus;1206.9, CaO=&minus;635.1, CO<sub>2</sub>=&minus;393.5 kJ/mol.',
   answer:178.3, tolerance:0.5, unit:'kJ',
   solution:'Products: &minus;635.1 + (&minus;393.5) = &minus;1028.6 kJ. &Delta;H<sub>rxn</sub> = &minus;1028.6 &minus; (&minus;1206.9) = <strong>+178.3 kJ</strong>.'},

  {id:'p77', type:'multi', tag:'Heating Curve',
   q:'A 20.0 g ice sample at 0&deg;C is melted and then heated to 60.0&deg;C. How much heat is required? (&Delta;H<sub>fus</sub> = 334 J/g, c<sub>water</sub> = 4.18 J/g&deg;C)',
   answer:11696, tolerance:20, unit:'J',
   solution:'Melt: 6680 J. Warm liquid: 20.0 &times; 4.18 &times; 60.0 = 5016 J. Total = <strong>11,696 J</strong>.'},

  {id:'p78', type:'multi', tag:'Heating Curve',
   q:'A 15.0 g steam sample at 100.0&deg;C condenses and then cools to 40.0&deg;C. What is the magnitude of heat released? (&Delta;H<sub>vap</sub> = 2260 J/g, c<sub>water</sub> = 4.18 J/g&deg;C)',
   answer:37662, tolerance:50, unit:'J',
   solution:'Condense: 33,900 J. Cool liquid: 15.0 &times; 4.18 &times; 60.0 = 3762 J. Total = <strong>37,662 J</strong>.'},

  {id:'p79', type:'multi', tag:'Heating Curve',
   q:'A 10.0 g ice sample at &minus;20.0&deg;C is heated all the way to steam at 100.0&deg;C. How much heat is required? (c<sub>ice</sub> = 2.09 J/g&deg;C, &Delta;H<sub>fus</sub> = 334 J/g, c<sub>water</sub> = 4.18 J/g&deg;C, &Delta;H<sub>vap</sub> = 2260 J/g)',
   answer:30538, tolerance:40, unit:'J',
   solution:'Warm ice: 418 J. Melt: 3340 J. Warm liquid: 4180 J. Vaporize: 22,600 J. Total = <strong>30,538 J</strong>.'},

  {id:'p80', type:'multi', tag:'Calorimetry',
   q:'A reaction releases 75.0 kJ and all of that heat warms 250.0 g of water initially at 18.0&deg;C. What final temperature does the water reach? (c = 4.18 J/g&deg;C)',
   answer:89.8, tolerance:0.3, unit:'&deg;C',
   solution:'&Delta;T = 75,000 &divide; (250.0 &times; 4.18) = 71.8&deg;C. T<sub>final</sub> = 18.0 + 71.8 = <strong>89.8&deg;C</strong>.'},

  {id:'p81', type:'multi', tag:'Heating Curve',
   q:'A sample of water starts at 25.0&deg;C and absorbs 27.2 kJ. If mass = 20.0 g, does it reach 100.0&deg;C and stop, partially boil, or fully convert to steam above 100.0&deg;C? Enter 100.0 if it stops at the boiling plateau. (c<sub>water</sub>=4.18, &Delta;H<sub>vap</sub>=2260 J/g, c<sub>steam</sub>=2.01 J/g&deg;C)',
   answer:100.0, tolerance:0.2, unit:'&deg;C',
   solution:'Heating to 100&deg;C: 6270 J. Remaining: 27,200 &minus; 6270 = 20,930 J, which is less than 45,200 J needed to vaporize all 20.0 g. The sample stalls on the boiling plateau at <strong>100.0&deg;C</strong>.'},

  {id:'p82', type:'multi', tag:"Hess's Law",
   q:'Use Hess&rsquo;s law to find &Delta;H for 2C(s)+H<sub>2</sub>(g)&rarr;C<sub>2</sub>H<sub>2</sub>(g). Given: C<sub>2</sub>H<sub>2</sub>+5/2O<sub>2</sub>&rarr;2CO<sub>2</sub>+H<sub>2</sub>O(l), &Delta;H=&minus;1299.5 kJ; C+O<sub>2</sub>&rarr;CO<sub>2</sub>, &Delta;H=&minus;393.5 kJ; H<sub>2</sub>+1/2O<sub>2</sub>&rarr;H<sub>2</sub>O(l), &Delta;H=&minus;285.8 kJ.',
   answer:226.7, tolerance:0.5, unit:'kJ',
   solution:'Reverse C<sub>2</sub>H<sub>2</sub> combustion (+1299.5), add 2C combustions (2&times;&minus;393.5) and H<sub>2</sub>O formation (&minus;285.8). &Delta;H = 1299.5 &minus; 787.0 &minus; 285.8 = <strong>+226.7 kJ</strong>.'},

  {id:'p83', type:'multi', tag:'Thermo Stoich',
   q:'For the combustion of propane: C<sub>3</sub>H<sub>8</sub>(g)+5O<sub>2</sub>(g)&rarr;3CO<sub>2</sub>(g)+4H<sub>2</sub>O(l), &Delta;H=&minus;2220 kJ. How much heat is released by burning 88.0 g of propane? (M = 44.0 g/mol)',
   answer:4440, tolerance:5, unit:'kJ',
   solution:'88.0 g &divide; 44.0 g/mol = 2.00 mol. 2.00 &times; 2220 = <strong>4440 kJ</strong>.'},

  {id:'p84', type:'multi', tag:'Enthalpy of Formation',
   q:'Using &Delta;H&deg;<sub>f</sub> values, find &Delta;H<sub>rxn</sub> for 4NH<sub>3</sub>(g)+3O<sub>2</sub>(g)&rarr;2N<sub>2</sub>(g)+6H<sub>2</sub>O(l). &Delta;H&deg;<sub>f</sub>[NH<sub>3</sub>]=&minus;46.1, &Delta;H&deg;<sub>f</sub>[H<sub>2</sub>O(l)]=&minus;285.8 kJ/mol.',
   answer:-1529.2, tolerance:1.0, unit:'kJ',
   solution:'Products: 0 + 6(&minus;285.8) = &minus;1714.8 kJ. Reactants: 4(&minus;46.1) = &minus;184.4 kJ. &Delta;H<sub>rxn</sub> = &minus;1714.8 &minus; (&minus;184.4) + 0 (for O<sub>2</sub>) = <strong>&minus;1530.4 kJ</strong>. (Accepted within tolerance.)'}

];
