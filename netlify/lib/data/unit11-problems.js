/* ── Unit 11 Problem Bank — Thermochemistry
   174 problems total: 59 calc | 71 concept | 44 multi (84 original + 90 added)
   Served via netlify/functions/get-premium-problem-set.js
   NOT imported by any public-facing page.
─────────────────────────────────────────────────────── */

export const ALL_PROBLEMS = [

  // ── CALCULATION (27 problems) ─────────────────────────────────────────────
  {id:'p01', difficulty:'easy', type:'calc', tag:'Energy Conversion',
   q:'Convert 2500 J to kJ.',
   answer:2.5, tolerance:0.01, unit:'kJ',
   solution:'2500 J &divide; 1000 = <strong>2.50 kJ</strong>.'},

  {id:'p02', difficulty:'easy', type:'calc', tag:'Energy Conversion',
   q:'Convert 3.50 kJ to J.',
   answer:3500, tolerance:5, unit:'J',
   solution:'3.50 kJ &times; 1000 = <strong>3500 J</strong>.'},

  {id:'p03', difficulty:'easy', type:'calc', tag:'Energy Conversion',
   q:'Convert 125 cal to J. (1 cal = 4.184 J)',
   answer:523, tolerance:2, unit:'J',
   solution:'125 &times; 4.184 = <strong>523 J</strong>.'},

  {id:'p04', difficulty:'easy', type:'calc', tag:'Energy Conversion',
   q:'Convert 4184 J to food Calories. (1 Cal = 4184 J)',
   answer:1.0, tolerance:0.01, unit:'Cal',
   solution:'4184 &divide; 4184 = <strong>1.00 Cal</strong>.'},

  {id:'p05', difficulty:'easy', type:'calc', tag:'q = mc\u0394T',
   q:'How much heat is required to raise 50.0 g of water from 20.0&deg;C to 35.0&deg;C? (c = 4.18 J/g&deg;C)',
   answer:3135, tolerance:10, unit:'J',
   solution:'Use q = mc&Delta;T.<br>q = 50.0 &times; 4.18 &times; 15.0 = <strong>3135 J</strong>.'},

  {id:'p06', difficulty:'easy', type:'calc', tag:'q = mc\u0394T',
   q:'A 125 g sample of water cools from 80.0&deg;C to 22.0&deg;C. What is the magnitude of heat released? (c = 4.18 J/g&deg;C)',
   answer:30305, tolerance:30, unit:'J',
   solution:'Use q = mc&Delta;T with &Delta;T = 58.0&deg;C.<br>q = 125 &times; 4.18 &times; 58.0 = <strong>30,305 J</strong> released.'},

  {id:'p07', difficulty:'medium', type:'calc', tag:'Specific Heat',
   q:'What is the specific heat of a metal if 450 J heats 30.0 g of the metal from 20.0&deg;C to 35.0&deg;C?',
   answer:1.0, tolerance:0.02, unit:'J/g\u00b0C',
   solution:'c = q/(m&Delta;T) = 450 &divide; (30.0 &times; 15.0) = <strong>1.00 J/g&deg;C</strong>.'},

  {id:'p08', difficulty:'medium', type:'calc', tag:'q = mc\u0394T',
   q:'How many grams of water can be heated from 25.0&deg;C to 55.0&deg;C by absorbing 6270 J? (c = 4.18 J/g&deg;C)',
   answer:50.0, tolerance:0.3, unit:'g',
   solution:'m = q/(c&Delta;T) = 6270 &divide; (4.18 &times; 30.0) = <strong>50.0 g</strong>.'},

  {id:'p09', difficulty:'easy', type:'calc', tag:'Phase Change',
   q:'How much heat is needed to melt 15.0 g of ice at 0&deg;C? (&Delta;H<sub>fus</sub> = 334 J/g)',
   answer:5010, tolerance:15, unit:'J',
   solution:'q = m&Delta;H<sub>fus</sub> = 15.0 &times; 334 = <strong>5010 J</strong>.'},

  {id:'p10', difficulty:'easy', type:'calc', tag:'Phase Change',
   q:'How much heat is needed to vaporize 25.0 g of water at 100&deg;C? (&Delta;H<sub>vap</sub> = 2260 J/g)',
   answer:56500, tolerance:50, unit:'J',
   solution:'q = m&Delta;H<sub>vap</sub> = 25.0 &times; 2260 = <strong>56500 J</strong>.'},

  {id:'p11', difficulty:'easy', type:'calc', tag:'Phase Change',
   q:'What is the magnitude of heat released when 18.0 g of steam condenses at 100&deg;C? (&Delta;H<sub>vap</sub> = 2260 J/g)',
   answer:40680, tolerance:30, unit:'J',
   solution:'Condensation: q = 18.0 &times; 2260 = <strong>40,680 J</strong>.'},

  {id:'p12', difficulty:'easy', type:'calc', tag:'Phase Change',
   q:'What is the magnitude of heat released when 40.0 g of water freezes at 0&deg;C? (&Delta;H<sub>fus</sub> = 334 J/g)',
   answer:13360, tolerance:20, unit:'J',
   solution:'Freezing: q = 40.0 &times; 334 = <strong>13,360 J</strong>.'},

  {id:'p13', difficulty:'easy', type:'calc', tag:'q = mc\u0394T',
   q:'How much heat is required to warm 20.0 g of liquid water from 25.0&deg;C to 100.0&deg;C? (c = 4.18 J/g&deg;C)',
   answer:6270, tolerance:20, unit:'J',
   solution:'q = 20.0 &times; 4.18 &times; 75.0 = <strong>6270 J</strong>.'},

  {id:'p14', difficulty:'medium', type:'calc', tag:'Heating Curve',
   q:'How much total heat is required to heat 10.0 g of ice from &minus;20.0&deg;C to 0&deg;C and then melt it completely? (c<sub>ice</sub> = 2.09 J/g&deg;C, &Delta;H<sub>fus</sub> = 334 J/g)',
   answer:3758, tolerance:10, unit:'J',
   solution:'Step 1: warm the ice. 10.0 &times; 2.09 &times; 20.0 = 418 J.<br>Step 2: melt the ice. 10.0 &times; 334 = 3340 J.<br>Total = <strong>3758 J</strong>.'},

  {id:'p15', difficulty:'medium', type:'calc', tag:'Heating Curve',
   q:'How much total heat is required to heat 20.0 g of water from 25.0&deg;C to 100.0&deg;C and then boil it? (c = 4.18 J/g&deg;C, &Delta;H<sub>vap</sub> = 2260 J/g)',
   answer:51470, tolerance:50, unit:'J',
   solution:'Step 1: warm the liquid. 20.0 &times; 4.18 &times; 75.0 = 6270 J.<br>Step 2: vaporize the water. 20.0 &times; 2260 = 45,200 J.<br>Total = <strong>51,470 J</strong>.'},

  {id:'p16', difficulty:'medium', type:'calc', tag:'Heating Curve',
   q:'How much total heat is required to take 30.0 g of water at 25.0&deg;C to steam at 118.0&deg;C? (c<sub>water</sub> = 4.18 J/g&deg;C, &Delta;H<sub>vap</sub> = 2260 J/g, c<sub>steam</sub> = 2.01 J/g&deg;C)',
   answer:78290, tolerance:100, unit:'J',
   solution:'Heat liquid: 9405 J. Vaporize: 67,800 J. Heat steam: 1085 J. Total = <strong>78,290 J</strong>.'},

  {id:'p17', difficulty:'easy', type:'calc', tag:'Calorimetry',
   q:'In a coffee-cup calorimeter, 100.0 g of water warms from 22.0&deg;C to 75.0&deg;C. How much heat was absorbed by the water? (c = 4.18 J/g&deg;C)',
   answer:22154, tolerance:30, unit:'J',
   solution:'q = 100.0 &times; 4.18 &times; 53.0 = <strong>22,154 J</strong>.'},

  {id:'p18', difficulty:'easy', type:'calc', tag:'Calorimetry',
   q:'In a calorimeter, 50.0 g of water cools from 60.0&deg;C to 48.0&deg;C. What is the heat absorbed by the reaction? (c = 4.18 J/g&deg;C)',
   answer:2508, tolerance:20, unit:'J',
   solution:'Water loses 50.0 &times; 4.18 &times; 12.0 = 2508 J, so the reaction absorbed <strong>2508 J</strong>.'},

  {id:'p19', difficulty:'easy', type:'calc', tag:'Phase Change',
   q:'How many grams of water could be completely vaporized by 90.4 kJ? (&Delta;H<sub>vap</sub> = 2260 J/g)',
   answer:40.0, tolerance:0.3, unit:'g',
   solution:'90,400 J &divide; 2260 = <strong>40.0 g</strong>.'},

  {id:'p20', difficulty:'easy', type:'calc', tag:'Phase Change',
   q:'How many grams of ice could be melted by 6.68 kJ? (&Delta;H<sub>fus</sub> = 334 J/g)',
   answer:20.0, tolerance:0.2, unit:'g',
   solution:'6680 J &divide; 334 = <strong>20.0 g</strong>.'},

  {id:'p21', difficulty:'easy', type:'calc', tag:'Thermo Stoich',
   q:'What is the heat released when 2.50 mol of CH<sub>4</sub> burns? (&Delta;H = &minus;890 kJ for CH<sub>4</sub> + 2O<sub>2</sub> &rarr; CO<sub>2</sub> + 2H<sub>2</sub>O)',
   answer:2225, tolerance:3, unit:'kJ',
   solution:'Use the enthalpy as a conversion factor.<br>2.50 mol &times; 890 kJ/mol = <strong>2225 kJ</strong> released.'},

  {id:'p22', difficulty:'medium', type:'calc', tag:'Thermo Stoich',
   q:'For N<sub>2</sub> + 3H<sub>2</sub> &rarr; 2NH<sub>3</sub>, &Delta;H = &minus;92.2 kJ. How much heat is released when 4.00 mol NH<sub>3</sub> are produced?',
   answer:184.4, tolerance:0.5, unit:'kJ',
   solution:'The equation gives 92.2 kJ for 2 mol NH<sub>3</sub>. For 4.00 mol: 2 &times; 92.2 = <strong>184.4 kJ</strong> released.'},

  {id:'p23', difficulty:'medium', type:'calc', tag:'Thermo Stoich',
   q:'For 2H<sub>2</sub>O(l) &rarr; 2H<sub>2</sub>(g) + O<sub>2</sub>(g), &Delta;H = +571.6 kJ. How much heat is required to decompose 1.50 mol H<sub>2</sub>O?',
   answer:428.7, tolerance:1.0, unit:'kJ',
   solution:'571.6 kJ for 2 mol H<sub>2</sub>O. For 1.50 mol: 571.6 &times; (1.50/2.00) = <strong>428.7 kJ</strong>.'},

  {id:'p24', difficulty:'easy', type:'calc', tag:'Enthalpy of Formation',
   q:'Find &Delta;H<sub>rxn</sub> for C(s) + O<sub>2</sub>(g) &rarr; CO<sub>2</sub>(g). &Delta;H&deg;<sub>f</sub>[CO<sub>2</sub>] = &minus;393.5 kJ/mol; elements in standard state = 0.',
   answer:-393.5, tolerance:0.2, unit:'kJ/mol',
   solution:'&Delta;H<sub>rxn</sub> = &minus;393.5 &minus; 0 = <strong>&minus;393.5 kJ/mol</strong>.'},

  {id:'p25', difficulty:'easy', type:'calc', tag:'Enthalpy of Formation',
   q:'Find &Delta;H<sub>rxn</sub> for 2H<sub>2</sub>(g) + O<sub>2</sub>(g) &rarr; 2H<sub>2</sub>O(l). &Delta;H&deg;<sub>f</sub>[H<sub>2</sub>O(l)] = &minus;285.8 kJ/mol.',
   answer:-571.6, tolerance:0.5, unit:'kJ',
   solution:'&Delta;H<sub>rxn</sub> = 2(&minus;285.8) &minus; 0 = <strong>&minus;571.6 kJ</strong>.'},

  {id:'p26', difficulty:'easy', type:'calc', tag:"Hess's Law",
   q:'Given: H<sub>2</sub> + &frac12;O<sub>2</sub> &rarr; H<sub>2</sub>O(l), &Delta;H = &minus;285.8 kJ. What is &Delta;H for the reverse reaction H<sub>2</sub>O(l) &rarr; H<sub>2</sub> + &frac12;O<sub>2</sub>?',
   answer:285.8, tolerance:0.3, unit:'kJ',
   solution:'Reversing changes the sign: &Delta;H = <strong>+285.8 kJ</strong>.'},

  {id:'p27', difficulty:'easy', type:'calc', tag:"Hess's Law",
   q:'Given: H<sub>2</sub> + &frac12;O<sub>2</sub> &rarr; H<sub>2</sub>O(l), &Delta;H = &minus;285.8 kJ. What is &Delta;H for 2H<sub>2</sub> + O<sub>2</sub> &rarr; 2H<sub>2</sub>O(l)?',
   answer:-571.6, tolerance:0.5, unit:'kJ',
   solution:'Doubling the equation doubles &Delta;H: 2 &times; &minus;285.8 = <strong>&minus;571.6 kJ</strong>.'},

  // ── CONCEPTUAL (35 problems) ──────────────────────────────────────────────
  {id:'p28', difficulty:'easy', type:'concept', tag:'Heat vs Temp',
   q:'Heat is best defined as:',
   choices:['the total energy stored in matter','energy transferred because of a temperature difference','the average kinetic energy of particles','the measure of disorder in a system'],
   correct:1,
   solution:'Heat is <strong>energy in transit</strong> due to a temperature difference, not a property stored in an object.'},

  {id:'p29', difficulty:'easy', type:'concept', tag:'Heat vs Temp',
   q:'Temperature is best defined as:',
   choices:['the amount of heat in an object','the average kinetic energy of particles','the total potential energy of particles','energy transferred into a system'],
   correct:1,
   solution:'Temperature reflects the <strong>average kinetic energy</strong> of particles, not total energy.'},

  {id:'p30', difficulty:'easy', type:'concept', tag:'Exo vs Endo',
   q:'An exothermic reaction:',
   choices:['absorbs heat from the surroundings','has &Delta;H greater than zero','releases heat to the surroundings','always needs a catalyst'],
   correct:2,
   solution:'Exothermic reactions release heat, so &Delta;H is negative and the surroundings warm up.'},

  {id:'p31', difficulty:'easy', type:'concept', tag:'Exo vs Endo',
   q:'An endothermic reaction:',
   choices:['releases heat and has negative &Delta;H','absorbs heat and has positive &Delta;H','always occurs spontaneously','cools only the reactants, never the surroundings'],
   correct:1,
   solution:'Endothermic reactions absorb heat from the surroundings, so &Delta;H is positive.'},

  {id:'p32', difficulty:'easy', type:'concept', tag:'Exo vs Endo',
   q:'If &Delta;H for a reaction is negative, the reaction is:',
   choices:['endothermic','exothermic','at equilibrium','catalyzed'],
   correct:1,
   solution:'Negative &Delta;H means heat is released: <strong>exothermic</strong>.'},

  {id:'p33', difficulty:'easy', type:'concept', tag:'Heat vs Temp',
   q:'Which statement correctly compares heat and temperature?',
   choices:['Heat and temperature mean the same thing','Heat is energy transfer; temperature measures average kinetic energy','Heat is measured in &deg;C and temperature in J','Temperature depends on mass but heat does not'],
   correct:1,
   solution:'Heat is <strong>energy transferred</strong>; temperature is a measure of average kinetic energy per particle.'},

  {id:'p34', difficulty:'easy', type:'concept', tag:'Heating Curve',
   q:'What happens to temperature during the flat portions of a heating curve?',
   choices:['Temperature rises quickly','Temperature falls quickly','Temperature stays constant while a phase change occurs','Temperature becomes undefined'],
   correct:2,
   solution:'During melting or boiling, added heat overcomes intermolecular forces rather than raising temperature.'},

  {id:'p35', difficulty:'easy', type:'concept', tag:'Phase Change',
   q:'Which phase change is endothermic?',
   choices:['freezing','condensation','deposition','evaporation'],
   correct:3,
   solution:'Evaporation requires heat input to separate particles from the liquid surface.'},

  {id:'p36', difficulty:'easy', type:'concept', tag:'Phase Change',
   q:'Which phase change is exothermic?',
   choices:['melting','vaporization','condensation','sublimation'],
   correct:2,
   solution:'Condensation releases heat as gas particles enter the liquid phase.'},

  {id:'p37', difficulty:'easy', type:'concept', tag:'Phase Change',
   q:'At the boiling point of a pure substance:',
   choices:['liquid and gas can coexist','only gas exists','temperature must increase continuously','specific heat becomes zero'],
   correct:0,
   solution:'At the boiling point, liquid and gas phases coexist in equilibrium.'},

  {id:'p38', difficulty:'easy', type:'concept', tag:'Phase Change',
   q:'At the melting point of a pure substance:',
   choices:['solid and liquid can coexist','only liquid exists','the sample must be heated very rapidly','the sample cannot absorb heat'],
   correct:0,
   solution:'At the melting point, solid and liquid phases coexist during the transition.'},

  {id:'p39', difficulty:'medium', type:'concept', tag:'Heating Curve',
   q:'On a heating curve for water, the longest flat segment is the boiling segment because:',
   choices:['water has a very low boiling point','&Delta;H<sub>vap</sub> is much larger than &Delta;H<sub>fus</sub>','steam has no specific heat','temperature rises faster for gases'],
   correct:1,
   solution:'Vaporization requires far more energy per gram than melting does.'},

  {id:'p40', difficulty:'easy', type:'concept', tag:'q = mc\u0394T',
   q:'In q = mc&Delta;T, &Delta;T should be calculated as:',
   choices:['initial minus final','final minus initial','always a positive number','mass divided by temperature'],
   correct:1,
   solution:'Use <strong>final &minus; initial</strong>. The sign tells you whether heat was absorbed or released.'},

  {id:'p41', difficulty:'easy', type:'concept', tag:'Calorimetry',
   q:'If the temperature of the surroundings rises during a reaction in a calorimeter, the reaction is:',
   choices:['endothermic','exothermic','phase-neutral','boiling'],
   correct:1,
   solution:'If the surroundings warm up, the reaction released heat to them: <strong>exothermic</strong>.'},

  {id:'p42', difficulty:'easy', type:'concept', tag:'Activation Energy',
   q:'A catalyst speeds up a reaction by:',
   choices:['changing &Delta;H','raising the activation energy','lowering the activation energy','changing the enthalpy of products'],
   correct:2,
   solution:'Catalysts provide an alternate pathway with lower activation energy. They do not change &Delta;H.'},

  {id:'p43', difficulty:'medium', type:'concept', tag:'Activation Energy',
   q:'Compared with an uncatalyzed pathway, a catalyzed pathway has:',
   choices:['the same activation energy and same &Delta;H','lower activation energy but same &Delta;H','higher activation energy and lower &Delta;H','higher activation energy but same &Delta;H'],
   correct:1,
   solution:'Catalysts lower E<sub>a</sub> but do not shift the energy of reactants or products, so &Delta;H is unchanged.'},

  {id:'p44', difficulty:'easy', type:'concept', tag:'Activation Energy',
   q:'Activation energy is:',
   choices:['the energy difference between products and reactants','the minimum energy needed for effective collisions to occur','the heat released by the reaction','the temperature of the activated complex'],
   correct:1,
   solution:'Activation energy is the energy barrier reactants must overcome to form products.'},

  {id:'p45', difficulty:'easy', type:'concept', tag:'Energy Diagrams',
   q:'If products are lower in energy than reactants on an energy diagram, the reaction is:',
   choices:['endothermic','exothermic','always slow','always catalyzed'],
   correct:1,
   solution:'Lower-energy products mean energy was released; &Delta;H is negative: <strong>exothermic</strong>.'},

  {id:'p46', difficulty:'easy', type:'concept', tag:'Energy Diagrams',
   q:'If products are higher in energy than reactants, the reaction is:',
   choices:['exothermic','endothermic','always spontaneous','always fast'],
   correct:1,
   solution:'Higher-energy products mean energy had to be absorbed; &Delta;H is positive: <strong>endothermic</strong>.'},

  {id:'p47', difficulty:'medium', type:'concept', tag:'Calorimetry',
   q:'In a constant-pressure calorimeter, q<sub>reaction</sub> equals:',
   choices:['q<sub>solution</sub>','&minus;q<sub>solution</sub>','&Delta;T of the metal','always zero'],
   correct:1,
   solution:'Energy is conserved: q<sub>rxn</sub> = &minus;q<sub>solution</sub>.'},

  {id:'p48', difficulty:'easy', type:'concept', tag:'q = mc\u0394T',
   q:'Which equation is used for a temperature change with no phase change?',
   choices:['q = m&Delta;H<sub>fus</sub>','q = m&Delta;H<sub>vap</sub>','q = mc&Delta;T','q = n&Delta;H<sub>f</sub>'],
   correct:2,
   solution:'Use <strong>q = mc&Delta;T</strong> whenever the substance remains in one phase.'},

  {id:'p49', difficulty:'easy', type:'concept', tag:'Phase Change',
   q:'Which equation is used during melting at constant temperature?',
   choices:['q = mc&Delta;T','q = m&Delta;H<sub>fus</sub>','q = m&Delta;H<sub>vap</sub>','q = nRT'],
   correct:1,
   solution:'Melting is a phase change at constant temperature; use q = m&Delta;H<sub>fus</sub>.'},

  {id:'p50', difficulty:'easy', type:'concept', tag:'Phase Change',
   q:'Which equation is used during boiling at constant temperature?',
   choices:['q = m&Delta;H<sub>vap</sub>','q = m&Delta;H<sub>fus</sub>','q = mc&Delta;T','q = P&Delta;V'],
   correct:0,
   solution:'Boiling uses q = m&Delta;H<sub>vap</sub>.'},

  {id:'p51', difficulty:'easy', type:'concept', tag:'Energy Conversion',
   q:'Why are food Calories written with a capital C?',
   choices:['to mean joules','to mean kilocalories','to mean calories per gram','to mean specific heat'],
   correct:1,
   solution:'A food Calorie (capital C) is a <strong>kilocalorie</strong> = 1000 cal.'},

  {id:'p52', difficulty:'medium', type:'concept', tag:'Energy Conversion',
   q:'Which energy conversion is correct?',
   choices:['1 cal = 4.184 kJ','1 kcal = 4.184 J','1 Cal = 4184 J','1 kJ = 100 cal'],
   correct:2,
   solution:'1 calorie = 4.184 J, so 1 kilocalorie (food Calorie) = 4184 J.'},

  {id:'p53', difficulty:'medium', type:'concept', tag:"Hess's Law",
   q:'What is true about Hess&rsquo;s law?',
   choices:['Only exothermic equations can be added','Enthalpy changes can be added because enthalpy is a state function','Catalysts must be present for the law to apply','The pathway changes the total &Delta;H'],
   correct:1,
   solution:'Enthalpy is a state function, so &Delta;H depends only on initial and final states, not the path taken.'},

  {id:'p54', difficulty:'easy', type:'concept', tag:"Hess's Law",
   q:'When you reverse a thermochemical equation in a Hess&rsquo;s law problem, you must:',
   choices:['keep &Delta;H the same','change only the coefficients','reverse the sign of &Delta;H','halve &Delta;H'],
   correct:2,
   solution:'Reversing the equation reverses the energy change, so the sign of &Delta;H changes.'},

  {id:'p55', difficulty:'easy', type:'concept', tag:"Hess's Law",
   q:'When you multiply a thermochemical equation by 3, you must:',
   choices:['leave &Delta;H unchanged','multiply &Delta;H by 3','reverse the sign of &Delta;H','divide &Delta;H by 3'],
   correct:1,
   solution:'&Delta;H scales with the amount of reaction, just like the coefficients.'},

  {id:'p56', difficulty:'easy', type:'concept', tag:'Enthalpy of Formation',
   q:'The standard enthalpy of formation of an element in its standard state is:',
   choices:['1 kJ/mol','0 kJ/mol','equal to its boiling point','always negative'],
   correct:1,
   solution:'By definition, &Delta;H&deg;<sub>f</sub> for an element in its standard state is <strong>zero</strong>.'},

  {id:'p57', difficulty:'medium', type:'concept', tag:'Enthalpy of Formation',
   q:'The standard enthalpy of formation refers to:',
   choices:['forming 1 mol of product from any reactants','forming 1 mol of a compound from its elements in their standard states','heating 1 g of a substance by 1&deg;C','any reaction measured at STP'],
   correct:1,
   solution:'&Delta;H&deg;<sub>f</sub> is defined for the formation of <strong>1 mol</strong> of a compound from its elements in standard states.'},

  {id:'p58', difficulty:'easy', type:'concept', tag:'Exo vs Endo',
   q:'If dissolving ammonium nitrate causes the solution to feel cold, the process is:',
   choices:['exothermic','endothermic','neutral','always spontaneous only at high temperature'],
   correct:1,
   solution:'A colder solution means heat was absorbed from the surroundings: <strong>endothermic</strong>.'},

  {id:'p59', difficulty:'easy', type:'concept', tag:'Exo vs Endo',
   q:'If dissolving calcium chloride causes the solution to get warm, the process is:',
   choices:['endothermic','exothermic','a phase change only','impossible in water'],
   correct:1,
   solution:'A warmer solution means heat was released to the surroundings: <strong>exothermic</strong>.'},

  {id:'p60', difficulty:'easy', type:'concept', tag:'Heating Curve',
   q:'Why is a heating curve useful?',
   choices:['It shows how temperature changes as heat is added and where phase changes occur','It gives the molar mass directly','It replaces calorimetry','It shows only pressure changes'],
   correct:0,
   solution:'Heating curves show sloped temperature-change regions and flat phase-change plateaus, making it easy to identify which equation applies.'},

  {id:'p61', difficulty:'medium', type:'concept', tag:'Thermo Stoich',
   q:'In thermochemical stoichiometry, the &Delta;H given in a balanced equation applies to:',
   choices:['1 gram of reactant','1 mole of every substance','the exact coefficients shown in the balanced equation','only the products'],
   correct:2,
   solution:'The enthalpy value belongs to the reaction <strong>as written</strong>, including its specific coefficients.'},

  {id:'p62', difficulty:'easy', type:'concept', tag:'q = mc\u0394T',
   q:'A larger mass of water with the same temperature change absorbs:',
   choices:['less heat','the same heat','more heat','zero heat'],
   correct:2,
   solution:'From q = mc&Delta;T, larger mass gives larger q when c and &Delta;T are the same.'},

  // ── MULTI-STEP (22 problems) ──────────────────────────────────────────────
  {id:'p63', difficulty:'medium', type:'multi', tag:'Heating Curve',
   q:'A 40.0 g ice sample starts at &minus;10.0&deg;C. It is heated to 0&deg;C and then completely melted. How much total heat is required? (c<sub>ice</sub> = 2.09 J/g&deg;C, &Delta;H<sub>fus</sub> = 334 J/g)',
   answer:14196, tolerance:30, unit:'J',
   solution:'Warm ice: 40.0 &times; 2.09 &times; 10.0 = 836 J. Melt: 40.0 &times; 334 = 13,360 J. Total = <strong>14,196 J</strong>.'},

  {id:'p64', difficulty:'medium', type:'multi', tag:'Heating Curve',
   q:'A 25.0 g ice sample at &minus;15.0&deg;C is heated to liquid water at 25.0&deg;C. How much heat is required? (c<sub>ice</sub> = 2.09 J/g&deg;C, c<sub>water</sub> = 4.18 J/g&deg;C, &Delta;H<sub>fus</sub> = 334 J/g)',
   answer:11747, tolerance:25, unit:'J',
   solution:'Warm ice: 25.0 &times; 2.09 &times; 15.0 = 784 J. Melt: 8350 J. Warm liquid: 25.0 &times; 4.18 &times; 25.0 = 2613 J. Total = <strong>11,747 J</strong>.'},

  {id:'p65', difficulty:'medium', type:'multi', tag:'Heating Curve',
   q:'A 12.0 g water sample at 25.0&deg;C is heated to steam at 110.0&deg;C. How much heat is required? (c<sub>water</sub> = 4.18 J/g&deg;C, &Delta;H<sub>vap</sub> = 2260 J/g, c<sub>steam</sub> = 2.01 J/g&deg;C)',
   answer:31123, tolerance:40, unit:'J',
   solution:'Heat liquid: 3762 J. Vaporize: 27,120 J. Heat steam: 241 J. Total = <strong>31,123 J</strong>.'},

  {id:'p66', difficulty:'medium', type:'multi', tag:'Calorimetry',
   q:'A metal sample of mass 50.0 g at 120.0&deg;C is placed in 100.0 g of water at 20.0&deg;C. The final temperature is 25.0&deg;C. What is the specific heat of the metal? (c<sub>water</sub> = 4.18 J/g&deg;C)',
   answer:0.44, tolerance:0.01, unit:'J/g\u00b0C',
   solution:'Water gains q = 100.0 &times; 4.18 &times; 5.0 = 2090 J. Metal loses the same amount over &Delta;T = 95.0&deg;C. c = 2090 &divide; (50.0 &times; 95.0) = <strong>0.440 J/g&deg;C</strong>.'},

  {id:'p67', difficulty:'medium', type:'multi', tag:'Calorimetry',
   q:'A 75.0 g metal sample at 95.0&deg;C is placed into 150.0 g of water at 20.0&deg;C. The final temperature is 24.0&deg;C. What is the specific heat of the metal? (c<sub>water</sub> = 4.18 J/g&deg;C)',
   answer:0.471, tolerance:0.01, unit:'J/g\u00b0C',
   solution:'Water gains 150.0 &times; 4.18 &times; 4.0 = 2508 J. Metal cools by 71.0&deg;C. c = 2508 &divide; (75.0 &times; 71.0) = <strong>0.471 J/g&deg;C</strong>.'},

  {id:'p68', difficulty:'medium', type:'multi', tag:'Calorimetry',
   q:'In a coffee-cup calorimeter, 100.0 g of water rises from 22.0&deg;C to 28.0&deg;C when 0.0500 mol of a substance reacts. What is &Delta;H in kJ/mol?',
   answer:-50.2, tolerance:0.5, unit:'kJ/mol',
   solution:'q<sub>water</sub> = 100.0 &times; 4.18 &times; 6.0 = 2508 J = 2.508 kJ. Reaction released this heat for 0.0500 mol, so &Delta;H = &minus;2.508/0.0500 = <strong>&minus;50.2 kJ/mol</strong>.'},

  {id:'p69', difficulty:'medium', type:'multi', tag:'Calorimetry',
   q:'In a coffee-cup calorimeter, 80.0 g of water drops from 30.0&deg;C to 24.0&deg;C while 0.100 mol NH<sub>4</sub>NO<sub>3</sub> dissolves. What is &Delta;H<sub>soln</sub> in kJ/mol?',
   answer:20.1, tolerance:0.3, unit:'kJ/mol',
   solution:'Water loses 80.0 &times; 4.18 &times; 6.0 = 2006 J, so dissolving absorbed +2.006 kJ for 0.100 mol. &Delta;H<sub>soln</sub> = <strong>+20.1 kJ/mol</strong>.'},

  {id:'p70', difficulty:'medium', type:'multi', tag:'Thermo Stoich',
   q:'Given 2SO<sub>2</sub>(g) + O<sub>2</sub>(g) &rarr; 2SO<sub>3</sub>(g), &Delta;H = &minus;198 kJ. How much heat is released when 5.00 mol SO<sub>3</sub> forms?',
   answer:495, tolerance:2, unit:'kJ',
   solution:'&minus;198 kJ for 2 mol SO<sub>3</sub>. For 5.00 mol: 198 &times; (5.00/2.00) = <strong>495 kJ</strong> released.'},

  {id:'p71', difficulty:'medium', type:'multi', tag:'Thermo Stoich',
   q:'Given N<sub>2</sub> + 3H<sub>2</sub> &rarr; 2NH<sub>3</sub>, &Delta;H = &minus;92.2 kJ. How much heat is released when 6.00 mol H<sub>2</sub> reacts completely?',
   answer:184.4, tolerance:0.5, unit:'kJ',
   solution:'3.00 mol H<sub>2</sub> release 92.2 kJ. 6.00 mol H<sub>2</sub> is twice that: <strong>184.4 kJ</strong> released.'},

  {id:'p72', difficulty:'medium', type:'multi', tag:'Enthalpy of Formation',
   q:'How much heat is required to form 3.00 mol NO<sub>2</sub>(g) if &Delta;H&deg;<sub>f</sub>[NO<sub>2</sub>] = +33.2 kJ/mol?',
   answer:99.6, tolerance:0.3, unit:'kJ',
   solution:'3.00 &times; 33.2 = <strong>99.6 kJ</strong> required.'},

  {id:'p73', difficulty:'medium', type:'multi', tag:"Hess's Law",
   q:'Use Hess&rsquo;s law. Given: C(s)+O<sub>2</sub>(g)&rarr;CO<sub>2</sub>(g), &Delta;H=&minus;393.5 kJ and CO(g)+&frac12;O<sub>2</sub>(g)&rarr;CO<sub>2</sub>(g), &Delta;H=&minus;283.0 kJ. Find &Delta;H for C(s)+&frac12;O<sub>2</sub>(g)&rarr;CO(g).',
   answer:-110.5, tolerance:0.3, unit:'kJ',
   solution:'Reverse CO oxidation: &Delta;H = +283.0 kJ. Add to C+O<sub>2</sub>&rarr;CO<sub>2</sub>: net &Delta;H = &minus;393.5 + 283.0 = <strong>&minus;110.5 kJ</strong>.'},

  {id:'p74', difficulty:'medium', type:'multi', tag:"Hess's Law",
   q:'Use Hess&rsquo;s law. Given: H<sub>2</sub> + &frac12;O<sub>2</sub> &rarr; H<sub>2</sub>O(l), &Delta;H=&minus;285.8 kJ and H<sub>2</sub> + &frac12;O<sub>2</sub> &rarr; H<sub>2</sub>O(g), &Delta;H=&minus;241.8 kJ. Find &Delta;H for H<sub>2</sub>O(l) &rarr; H<sub>2</sub>O(g).',
   answer:44.0, tolerance:0.2, unit:'kJ',
   solution:'&Delta;H<sub>vap</sub> = &minus;241.8 &minus; (&minus;285.8) = <strong>+44.0 kJ</strong>.'},

  {id:'p75', difficulty:'medium', type:'multi', tag:'Enthalpy of Formation',
   q:'Using &Delta;H&deg;<sub>f</sub> values, calculate &Delta;H<sub>rxn</sub> for CH<sub>4</sub>(g)+2O<sub>2</sub>(g)&rarr;CO<sub>2</sub>(g)+2H<sub>2</sub>O(l). &Delta;H&deg;<sub>f</sub>: CH<sub>4</sub>=&minus;74.8, CO<sub>2</sub>=&minus;393.5, H<sub>2</sub>O(l)=&minus;285.8 kJ/mol.',
   answer:-890.3, tolerance:0.5, unit:'kJ',
   solution:'Products: &minus;393.5 + 2(&minus;285.8) = &minus;965.1 kJ. Reactants: &minus;74.8 kJ. &Delta;H<sub>rxn</sub> = &minus;965.1 &minus; (&minus;74.8) = <strong>&minus;890.3 kJ</strong>.'},

  {id:'p76', difficulty:'medium', type:'multi', tag:'Enthalpy of Formation',
   q:'Using &Delta;H&deg;<sub>f</sub> values, calculate &Delta;H<sub>rxn</sub> for CaCO<sub>3</sub>(s)&rarr;CaO(s)+CO<sub>2</sub>(g). &Delta;H&deg;<sub>f</sub>: CaCO<sub>3</sub>=&minus;1206.9, CaO=&minus;635.1, CO<sub>2</sub>=&minus;393.5 kJ/mol.',
   answer:178.3, tolerance:0.5, unit:'kJ',
   solution:'Products: &minus;635.1 + (&minus;393.5) = &minus;1028.6 kJ. &Delta;H<sub>rxn</sub> = &minus;1028.6 &minus; (&minus;1206.9) = <strong>+178.3 kJ</strong>.'},

  {id:'p77', difficulty:'medium', type:'multi', tag:'Heating Curve',
   q:'A 20.0 g ice sample at 0&deg;C is melted and then heated to 60.0&deg;C. How much heat is required? (&Delta;H<sub>fus</sub> = 334 J/g, c<sub>water</sub> = 4.18 J/g&deg;C)',
   answer:11696, tolerance:20, unit:'J',
   solution:'Melt: 6680 J. Warm liquid: 20.0 &times; 4.18 &times; 60.0 = 5016 J. Total = <strong>11,696 J</strong>.'},

  {id:'p78', difficulty:'medium', type:'multi', tag:'Heating Curve',
   q:'A 15.0 g steam sample at 100.0&deg;C condenses and then cools to 40.0&deg;C. What is the magnitude of heat released? (&Delta;H<sub>vap</sub> = 2260 J/g, c<sub>water</sub> = 4.18 J/g&deg;C)',
   answer:37662, tolerance:50, unit:'J',
   solution:'Condense: 33,900 J. Cool liquid: 15.0 &times; 4.18 &times; 60.0 = 3762 J. Total = <strong>37,662 J</strong>.'},

  {id:'p79', difficulty:'hard', type:'multi', tag:'Heating Curve',
   q:'A 10.0 g ice sample at &minus;20.0&deg;C is heated all the way to steam at 100.0&deg;C. How much heat is required? (c<sub>ice</sub> = 2.09 J/g&deg;C, &Delta;H<sub>fus</sub> = 334 J/g, c<sub>water</sub> = 4.18 J/g&deg;C, &Delta;H<sub>vap</sub> = 2260 J/g)',
   answer:30538, tolerance:40, unit:'J',
   solution:'Warm ice: 418 J. Melt: 3340 J. Warm liquid: 4180 J. Vaporize: 22,600 J. Total = <strong>30,538 J</strong>.'},

  {id:'p80', difficulty:'medium', type:'multi', tag:'Calorimetry',
   q:'A reaction releases 75.0 kJ and all of that heat warms 250.0 g of water initially at 18.0&deg;C. What final temperature does the water reach? (c = 4.18 J/g&deg;C)',
   answer:89.8, tolerance:0.3, unit:'&deg;C',
   solution:'&Delta;T = 75,000 &divide; (250.0 &times; 4.18) = 71.8&deg;C. T<sub>final</sub> = 18.0 + 71.8 = <strong>89.8&deg;C</strong>.'},

  {id:'p81', difficulty:'hard', type:'multi', tag:'Heating Curve',
   q:'A sample of water starts at 25.0&deg;C and absorbs 27.2 kJ. If mass = 20.0 g, does it reach 100.0&deg;C and stop, partially boil, or fully convert to steam above 100.0&deg;C? Enter 100.0 if it stops at the boiling plateau. (c<sub>water</sub>=4.18, &Delta;H<sub>vap</sub>=2260 J/g, c<sub>steam</sub>=2.01 J/g&deg;C)',
   answer:100.0, tolerance:0.2, unit:'&deg;C',
   solution:'Heating to 100&deg;C: 6270 J. Remaining: 27,200 &minus; 6270 = 20,930 J, which is less than 45,200 J needed to vaporize all 20.0 g. The sample stalls on the boiling plateau at <strong>100.0&deg;C</strong>.'},

  {id:'p82', difficulty:'hard', type:'multi', tag:"Hess's Law",
   q:'Use Hess&rsquo;s law to find &Delta;H for 2C(s)+H<sub>2</sub>(g)&rarr;C<sub>2</sub>H<sub>2</sub>(g). Given: C<sub>2</sub>H<sub>2</sub>+5/2O<sub>2</sub>&rarr;2CO<sub>2</sub>+H<sub>2</sub>O(l), &Delta;H=&minus;1299.5 kJ; C+O<sub>2</sub>&rarr;CO<sub>2</sub>, &Delta;H=&minus;393.5 kJ; H<sub>2</sub>+1/2O<sub>2</sub>&rarr;H<sub>2</sub>O(l), &Delta;H=&minus;285.8 kJ.',
   answer:226.7, tolerance:0.5, unit:'kJ',
   solution:'Reverse C<sub>2</sub>H<sub>2</sub> combustion (+1299.5), add 2C combustions (2&times;&minus;393.5) and H<sub>2</sub>O formation (&minus;285.8). &Delta;H = 1299.5 &minus; 787.0 &minus; 285.8 = <strong>+226.7 kJ</strong>.'},

  {id:'p83', difficulty:'medium', type:'multi', tag:'Thermo Stoich',
   q:'For the combustion of propane: C<sub>3</sub>H<sub>8</sub>(g)+5O<sub>2</sub>(g)&rarr;3CO<sub>2</sub>(g)+4H<sub>2</sub>O(l), &Delta;H=&minus;2220 kJ. How much heat is released by burning 88.0 g of propane? (M = 44.0 g/mol)',
   answer:4440, tolerance:5, unit:'kJ',
   solution:'88.0 g &divide; 44.0 g/mol = 2.00 mol. 2.00 &times; 2220 = <strong>4440 kJ</strong>.'},

  {id:'p84', difficulty:'hard', type:'multi', tag:'Enthalpy of Formation',
   q:'Using &Delta;H&deg;<sub>f</sub> values, find &Delta;H<sub>rxn</sub> for 4NH<sub>3</sub>(g)+3O<sub>2</sub>(g)&rarr;2N<sub>2</sub>(g)+6H<sub>2</sub>O(l). &Delta;H&deg;<sub>f</sub>[NH<sub>3</sub>]=&minus;46.1, &Delta;H&deg;<sub>f</sub>[H<sub>2</sub>O(l)]=&minus;285.8 kJ/mol.',
   answer:-1530.4, tolerance:1.0, unit:'kJ',
   solution:'<p>&Delta;H&deg;<sub>rxn</sub> = &Sigma;(&Delta;H&deg;<sub>f</sub> products) &minus; &Sigma;(&Delta;H&deg;<sub>f</sub> reactants).</p><p>Products: 2(0) + 6(&minus;285.8) = &minus;1714.8 kJ</p><p>Reactants: 4(&minus;46.1) + 3(0) = &minus;184.4 kJ</p><p>&Delta;H&deg;<sub>rxn</sub> = &minus;1714.8 &minus; (&minus;184.4) = <strong>&minus;1530.4 kJ</strong></p>'},


  /* ════════════ EXPANSION BATCH — 90 problems (20 easy / 25 medium / 45 hard) ════════════ */

  /* ── EASY CALC (8) ── */
  {id:'p85', difficulty:'easy', type:'calc', tag:'Energy Conversion',
   q:'Convert 8400 J to kJ.',
   answer:8.40, tolerance:0.02, unit:'kJ',
   solution:'8400 J &divide; 1000 = <strong>8.40 kJ</strong>.'},

  {id:'p86', difficulty:'easy', type:'calc', tag:'Energy Conversion',
   q:'Convert 3.20 kJ to J.',
   answer:3200, tolerance:5, unit:'J',
   solution:'3.20 kJ &times; 1000 = <strong>3200 J</strong>.'},

  {id:'p87', difficulty:'easy', type:'calc', tag:'Energy Conversion',
   q:'Convert 1250 cal to J. (1 cal = 4.184 J)',
   answer:5230, tolerance:5, unit:'J',
   solution:'1250 &times; 4.184 = <strong>5230 J</strong>.'},

  {id:'p88', difficulty:'easy', type:'calc', tag:'q = mcΔT',
   q:'How much heat is required to raise 25.0 g of water from 10.0&deg;C to 25.0&deg;C? (c = 4.18 J/g&deg;C)',
   answer:1567.5, tolerance:5, unit:'J',
   solution:'q = mc&Delta;T = 25.0 &times; 4.18 &times; 15.0 = <strong>1568 J</strong>.'},

  {id:'p89', difficulty:'easy', type:'calc', tag:'q = mcΔT',
   q:'A 50.0 g sample of water cools from 35.0&deg;C to 25.0&deg;C. What is the magnitude of heat released? (c = 4.18 J/g&deg;C)',
   answer:2090, tolerance:5, unit:'J',
   solution:'q = mc&Delta;T = 50.0 &times; 4.18 &times; 10.0 = <strong>2090 J</strong> released.'},

  {id:'p90', difficulty:'easy', type:'calc', tag:'Phase Change',
   q:'How much heat is needed to melt 15.0 g of ice at 0&deg;C? (&Delta;H<sub>fus</sub> = 334 J/g)',
   answer:5010, tolerance:5, unit:'J',
   solution:'q = m&Delta;H<sub>fus</sub> = 15.0 &times; 334 = <strong>5010 J</strong>.'},

  {id:'p91', difficulty:'easy', type:'calc', tag:'Phase Change',
   q:'How much heat is needed to vaporize 5.00 g of water at 100&deg;C? (&Delta;H<sub>vap</sub> = 2260 J/g)',
   answer:11300, tolerance:20, unit:'J',
   solution:'q = m&Delta;H<sub>vap</sub> = 5.00 &times; 2260 = <strong>11,300 J</strong>.'},

  {id:'p92', difficulty:'easy', type:'calc', tag:'Phase Change',
   q:'How much heat is released when 8.00 g of steam at 100&deg;C condenses to liquid water? (&Delta;H<sub>vap</sub> = 2260 J/g)',
   answer:18080, tolerance:20, unit:'J',
   solution:'q = m&Delta;H<sub>vap</sub> = 8.00 &times; 2260 = <strong>18,080 J</strong> released.'},

  /* ── MEDIUM CALC (10) ── */
  {id:'p93', difficulty:'medium', type:'calc', tag:'Specific Heat',
   q:'A 2500 J sample of heat raises the temperature of an aluminum block by 20.0&deg;C. (c<sub>Al</sub> = 0.900 J/g&deg;C) What is the mass of the block?',
   answer:138.9, tolerance:1.0, unit:'g',
   solution:'m = q &divide; (c&Delta;T) = 2500 &divide; (0.900 &times; 20.0) = <strong>138.9 g</strong>.'},

  {id:'p94', difficulty:'medium', type:'calc', tag:'Heating Curve',
   q:'A 20.0 g ice sample starts at &minus;10.0&deg;C. How much heat is needed to warm it to 0&deg;C and then completely melt it? (c<sub>ice</sub> = 2.09 J/g&deg;C, &Delta;H<sub>fus</sub> = 334 J/g)',
   answer:7098, tolerance:15, unit:'J',
   solution:'Warm ice: 20.0 &times; 2.09 &times; 10.0 = 418 J. Melt: 20.0 &times; 334 = 6680 J. Total = <strong>7098 J</strong>.'},

  {id:'p95', difficulty:'medium', type:'calc', tag:'Specific Heat',
   q:'In a calorimetry trial, 836 J of heat raises the temperature of a 40.0 g sample by 5.00&deg;C. What is the specific heat of the substance?',
   answer:4.18, tolerance:0.05, unit:'J/g&deg;C',
   solution:'c = q &divide; (m&Delta;T) = 836 &divide; (40.0 &times; 5.00) = <strong>4.18 J/g&deg;C</strong>.'},

  {id:'p96', difficulty:'medium', type:'calc', tag:'Thermo Stoich',
   q:'2H<sub>2</sub>(g)+O<sub>2</sub>(g)&rarr;2H<sub>2</sub>O(g), &Delta;H=&minus;483.6 kJ. What is &Delta;H for the reaction of 5.00 mol of H<sub>2</sub>?',
   answer:-1209.0, tolerance:2, unit:'kJ',
   solution:'5.00 mol H<sub>2</sub> &times; (&minus;483.6 kJ / 2 mol H<sub>2</sub>) = <strong>&minus;1209.0 kJ</strong>.'},

  {id:'p97', difficulty:'medium', type:'calc', tag:'Phase Change',
   q:'How much heat is required to warm 25.0 g of water from 20.0&deg;C to 100.0&deg;C and then completely vaporize it? (c<sub>water</sub> = 4.18 J/g&deg;C, &Delta;H<sub>vap</sub> = 2260 J/g)',
   answer:64.86, tolerance:0.3, unit:'kJ',
   solution:'Warm: 25.0 &times; 4.18 &times; 80.0 = 8360 J. Vaporize: 25.0 &times; 2260 = 56,500 J. Total = 64,860 J = <strong>64.86 kJ</strong>.'},

  {id:'p98', difficulty:'medium', type:'calc', tag:'Calorimetry',
   q:'A reaction warms 60.0 g of solution (c = 4.18 J/g&deg;C) by 5.00&deg;C. What is q for the reaction?',
   answer:-1254, tolerance:5, unit:'J',
   solution:'q<sub>solution</sub> = 60.0 &times; 4.18 &times; 5.00 = +1254 J. By conservation of energy, q<sub>rxn</sub> = &minus;q<sub>solution</sub> = <strong>&minus;1254 J</strong>.'},

  {id:'p99', difficulty:'medium', type:'calc', tag:'Thermo Stoich',
   q:'N<sub>2</sub>(g)+3H<sub>2</sub>(g)&rarr;2NH<sub>3</sub>(g), &Delta;H=&minus;92.2 kJ. What is &Delta;H when 3.00 mol of NH<sub>3</sub> form?',
   answer:-138.3, tolerance:1.5, unit:'kJ',
   solution:'3.00 mol NH<sub>3</sub> &times; (&minus;92.2 kJ / 2 mol NH<sub>3</sub>) = <strong>&minus;138.3 kJ</strong>.'},

  {id:'p100', difficulty:'medium', type:'calc', tag:'Enthalpy of Formation',
   q:'CaO(s)+CO<sub>2</sub>(g)&rarr;CaCO<sub>3</sub>(s). &Delta;H&deg;<sub>f</sub>[CaCO<sub>3</sub>]=&minus;1207.6, &Delta;H&deg;<sub>f</sub>[CaO]=&minus;635.1, &Delta;H&deg;<sub>f</sub>[CO<sub>2</sub>]=&minus;393.5 kJ/mol. Find &Delta;H<sub>rxn</sub>.',
   answer:-179.0, tolerance:1.0, unit:'kJ',
   solution:'&Delta;H<sub>rxn</sub> = (&minus;1207.6) &minus; [(&minus;635.1)+(&minus;393.5)] = &minus;1207.6 &minus; (&minus;1028.6) = <strong>&minus;179.0 kJ</strong>.'},

  {id:'p101', difficulty:'medium', type:'calc', tag:"Hess's Law",
   q:'Given C(s)+O<sub>2</sub>(g)&rarr;CO<sub>2</sub>(g), &Delta;H=&minus;393.5 kJ, what is &Delta;H for 3C(s)+3O<sub>2</sub>(g)&rarr;3CO<sub>2</sub>(g)?',
   answer:-1180.5, tolerance:2, unit:'kJ',
   solution:'Multiplying the equation by 3 multiplies &Delta;H by 3: &minus;393.5 &times; 3 = <strong>&minus;1180.5 kJ</strong>.'},

  {id:'p102', difficulty:'medium', type:'calc', tag:'q = mcΔT',
   q:'A 200.0 g sample of water (c = 4.18 J/g&deg;C) absorbs 5000 J of heat. What is &Delta;T?',
   answer:5.98, tolerance:0.1, unit:'&deg;C',
   solution:'&Delta;T = q &divide; (mc) = 5000 &divide; (200.0 &times; 4.18) = <strong>5.98&deg;C</strong>.'},

  /* ── HARD CALC (14) ── */
  {id:'p103', difficulty:'hard', type:'calc', tag:'Heating Curve',
   q:'A 30.0 g ice sample at &minus;20.0&deg;C is heated until it becomes steam at 120.0&deg;C. How much total heat is required? (c<sub>ice</sub>=2.09, &Delta;H<sub>fus</sub>=334, c<sub>water</sub>=4.18, &Delta;H<sub>vap</sub>=2260, c<sub>steam</sub>=2.01, all J/g or J/g&deg;C)',
   answer:92.82, tolerance:0.3, unit:'kJ',
   solution:'Warm ice: 30.0&times;2.09&times;20.0=1254 J. Melt: 30.0&times;334=10,020 J. Warm liquid: 30.0&times;4.18&times;100.0=12,540 J. Vaporize: 30.0&times;2260=67,800 J. Warm steam: 30.0&times;2.01&times;20.0=1206 J. Total = 92,820 J = <strong>92.82 kJ</strong>.'},

  {id:'p104', difficulty:'hard', type:'calc', tag:'Heating Curve',
   q:'A 15.0 g ice sample at &minus;15.0&deg;C is heated to liquid water at 50.0&deg;C (it does not boil). How much total heat is required? (c<sub>ice</sub>=2.09, &Delta;H<sub>fus</sub>=334, c<sub>water</sub>=4.18)',
   answer:8615, tolerance:20, unit:'J',
   solution:'Warm ice: 15.0&times;2.09&times;15.0=470.3 J. Melt: 15.0&times;334=5010 J. Warm liquid: 15.0&times;4.18&times;50.0=3135 J. Total = <strong>8615 J</strong>.'},

  {id:'p105', difficulty:'hard', type:'calc', tag:'Heating Curve',
   q:'A 40.0 g sample of water at 25.0&deg;C is heated until it becomes steam at 150.0&deg;C. How much total heat is required? (c<sub>water</sub>=4.18, &Delta;H<sub>vap</sub>=2260, c<sub>steam</sub>=2.01)',
   answer:106.96, tolerance:0.3, unit:'kJ',
   solution:'Warm liquid: 40.0&times;4.18&times;75.0=12,540 J. Vaporize: 40.0&times;2260=90,400 J. Warm steam: 40.0&times;2.01&times;50.0=4020 J. Total = 106,960 J = <strong>106.96 kJ</strong>.'},

  {id:'p106', difficulty:'hard', type:'calc', tag:"Hess's Law",
   q:'Use Hess&rsquo;s law to find &Delta;H for CO<sub>2</sub>(g)+H<sub>2</sub>(g)&rarr;CO(g)+H<sub>2</sub>O(l). Given: C(s)+O<sub>2</sub>(g)&rarr;CO<sub>2</sub>(g), &Delta;H=&minus;393.5 kJ; C(s)+1/2O<sub>2</sub>(g)&rarr;CO(g), &Delta;H=&minus;110.5 kJ; H<sub>2</sub>(g)+1/2O<sub>2</sub>(g)&rarr;H<sub>2</sub>O(l), &Delta;H=&minus;285.8 kJ.',
   answer:-2.8, tolerance:0.5, unit:'kJ',
   solution:'Reverse the first equation (+393.5), then add the second (&minus;110.5) and third (&minus;285.8). &Delta;H = 393.5 &minus; 110.5 &minus; 285.8 = <strong>&minus;2.8 kJ</strong>.'},

  {id:'p107', difficulty:'hard', type:'calc', tag:"Hess's Law",
   q:'Use Hess&rsquo;s law to find &Delta;H for 2S(s)+3O<sub>2</sub>(g)&rarr;2SO<sub>3</sub>(g). Given: S(s)+O<sub>2</sub>(g)&rarr;SO<sub>2</sub>(g), &Delta;H=&minus;296.8 kJ; 2SO<sub>2</sub>(g)+O<sub>2</sub>(g)&rarr;2SO<sub>3</sub>(g), &Delta;H=&minus;198.4 kJ.',
   answer:-792.0, tolerance:1.0, unit:'kJ',
   solution:'Double the first equation (2&times;&minus;296.8=&minus;593.6) and add the second (&minus;198.4). &Delta;H = &minus;593.6 &minus; 198.4 = <strong>&minus;792.0 kJ</strong>.'},

  {id:'p108', difficulty:'hard', type:'calc', tag:"Hess's Law",
   q:'Using the same two equations as the previous problem (S(s)+O<sub>2</sub>(g)&rarr;SO<sub>2</sub>(g), &Delta;H=&minus;296.8 kJ; 2SO<sub>2</sub>(g)+O<sub>2</sub>(g)&rarr;2SO<sub>3</sub>(g), &Delta;H=&minus;198.4 kJ), find &Delta;H for S(s)+3/2O<sub>2</sub>(g)&rarr;SO<sub>3</sub>(g).',
   answer:-396.0, tolerance:1.0, unit:'kJ',
   solution:'This target is half of 2S+3O<sub>2</sub>&rarr;2SO<sub>3</sub>, which has &Delta;H=&minus;792.0 kJ. Half of that is <strong>&minus;396.0 kJ</strong>.'},

  {id:'p109', difficulty:'hard', type:'calc', tag:'Enthalpy of Formation',
   q:'Find &Delta;H<sub>rxn</sub> for the combustion of propane: C<sub>3</sub>H<sub>8</sub>(g)+5O<sub>2</sub>(g)&rarr;3CO<sub>2</sub>(g)+4H<sub>2</sub>O(l). &Delta;H&deg;<sub>f</sub>: C<sub>3</sub>H<sub>8</sub>=&minus;103.85, CO<sub>2</sub>=&minus;393.5, H<sub>2</sub>O(l)=&minus;285.8 kJ/mol.',
   answer:-2219.9, tolerance:1.0, unit:'kJ',
   solution:'Products: 3(&minus;393.5)+4(&minus;285.8) = &minus;1180.5&minus;1143.2 = &minus;2323.7 kJ. Reactants: &minus;103.85+5(0) = &minus;103.85 kJ. &Delta;H<sub>rxn</sub> = &minus;2323.7&minus;(&minus;103.85) = <strong>&minus;2219.9 kJ</strong>.'},

  {id:'p110', difficulty:'hard', type:'calc', tag:'Enthalpy of Formation',
   q:'Find &Delta;H<sub>rxn</sub> for the combustion of ethanol: C<sub>2</sub>H<sub>5</sub>OH(l)+3O<sub>2</sub>(g)&rarr;2CO<sub>2</sub>(g)+3H<sub>2</sub>O(l). &Delta;H&deg;<sub>f</sub>: C<sub>2</sub>H<sub>5</sub>OH(l)=&minus;277.6, CO<sub>2</sub>=&minus;393.5, H<sub>2</sub>O(l)=&minus;285.8 kJ/mol.',
   answer:-1366.8, tolerance:1.0, unit:'kJ',
   solution:'Products: 2(&minus;393.5)+3(&minus;285.8) = &minus;787.0&minus;857.4 = &minus;1644.4 kJ. Reactants: &minus;277.6+3(0) = &minus;277.6 kJ. &Delta;H<sub>rxn</sub> = &minus;1644.4&minus;(&minus;277.6) = <strong>&minus;1366.8 kJ</strong>.'},

  {id:'p111', difficulty:'hard', type:'calc', tag:'Enthalpy of Formation',
   q:'Find &Delta;H<sub>rxn</sub> for the combustion of butane: C<sub>4</sub>H<sub>10</sub>(g)+13/2O<sub>2</sub>(g)&rarr;4CO<sub>2</sub>(g)+5H<sub>2</sub>O(l). &Delta;H&deg;<sub>f</sub>: C<sub>4</sub>H<sub>10</sub>=&minus;125.6, CO<sub>2</sub>=&minus;393.5, H<sub>2</sub>O(l)=&minus;285.8 kJ/mol.',
   answer:-2877.4, tolerance:1.0, unit:'kJ',
   solution:'Products: 4(&minus;393.5)+5(&minus;285.8) = &minus;1574.0&minus;1429.0 = &minus;3003.0 kJ. Reactants: &minus;125.6+6.5(0) = &minus;125.6 kJ. &Delta;H<sub>rxn</sub> = &minus;3003.0&minus;(&minus;125.6) = <strong>&minus;2877.4 kJ</strong>.'},

  {id:'p112', difficulty:'hard', type:'calc', tag:'Enthalpy of Formation',
   q:'Find &Delta;H<sub>rxn</sub> for the combustion of methanol: CH<sub>3</sub>OH(l)+3/2O<sub>2</sub>(g)&rarr;CO<sub>2</sub>(g)+2H<sub>2</sub>O(l). &Delta;H&deg;<sub>f</sub>: CH<sub>3</sub>OH(l)=&minus;238.4, CO<sub>2</sub>=&minus;393.5, H<sub>2</sub>O(l)=&minus;285.8 kJ/mol.',
   answer:-726.7, tolerance:1.0, unit:'kJ',
   solution:'Products: &minus;393.5+2(&minus;285.8) = &minus;393.5&minus;571.6 = &minus;965.1 kJ. Reactants: &minus;238.4+1.5(0) = &minus;238.4 kJ. &Delta;H<sub>rxn</sub> = &minus;965.1&minus;(&minus;238.4) = <strong>&minus;726.7 kJ</strong>.'},

  {id:'p113', difficulty:'hard', type:'calc', tag:'Calorimetry',
   q:'In an insulated container, 50.0 g of water at 80.0&deg;C is mixed with 100.0 g of water at 20.0&deg;C. What is the final temperature?',
   answer:40.0, tolerance:0.3, unit:'&deg;C',
   solution:'Heat lost = heat gained: 50.0(80.0&minus;T<sub>f</sub>) = 100.0(T<sub>f</sub>&minus;20.0). Solving: 4000&minus;50.0T<sub>f</sub> = 100.0T<sub>f</sub>&minus;2000, so 150.0T<sub>f</sub>=6000, T<sub>f</sub> = <strong>40.0&deg;C</strong>.'},

  {id:'p114', difficulty:'hard', type:'calc', tag:'Calorimetry',
   q:'In an insulated container, 75.0 g of water at 90.0&deg;C is mixed with 125.0 g of water at 15.0&deg;C. What is the final temperature?',
   answer:43.1, tolerance:0.3, unit:'&deg;C',
   solution:'75.0(90.0&minus;T<sub>f</sub>) = 125.0(T<sub>f</sub>&minus;15.0). Solving gives T<sub>f</sub> = <strong>43.1&deg;C</strong>.'},

  {id:'p115', difficulty:'hard', type:'calc', tag:'Calorimetry',
   q:'A 50.0 g block of aluminum (c=0.900 J/g&deg;C) at 200.0&deg;C is dropped into 100.0 g of water (c=4.18 J/g&deg;C) at 25.0&deg;C. What is the final temperature?',
   answer:42.0, tolerance:0.3, unit:'&deg;C',
   solution:'50.0(0.900)(200.0&minus;T<sub>f</sub>) = 100.0(4.18)(T<sub>f</sub>&minus;25.0). Solving: 45.0T<sub>f</sub>+418T<sub>f</sub> is rearranged to 463T<sub>f</sub>=19,450, T<sub>f</sub> = <strong>42.0&deg;C</strong>.'},

  {id:'p116', difficulty:'hard', type:'calc', tag:'Thermo Stoich',
   q:'CH<sub>4</sub>(g)+2O<sub>2</sub>(g)&rarr;CO<sub>2</sub>(g)+2H<sub>2</sub>O(l), &Delta;H=&minus;890.4 kJ/mol. How much heat is released by burning 50.0 g of CH<sub>4</sub>? (MM CH<sub>4</sub>=16.04 g/mol)',
   answer:2775.0, tolerance:5, unit:'kJ',
   solution:'50.0 g &divide; 16.04 g/mol = 3.117 mol. 3.117 &times; 890.4 = <strong>2775 kJ</strong> released.'},

  // ── NEW CONCEPTUAL (36 problems) ──────────────────────────────────────────

  /* ── EASY CONCEPT (10) ── */
  {id:'p117', difficulty:'easy', type:'concept', tag:'Heat vs Temp',
   q:'Which unit measures heat energy directly?',
   choices:['&deg;C','J','K','mol'],
   correct:1,
   solution:'Joules (J) measure <strong>energy</strong>, including heat. Degrees and Kelvin measure temperature.'},

  {id:'p118', difficulty:'easy', type:'concept', tag:'Heat vs Temp',
   q:'Two objects at the same temperature are placed in contact. The net heat flow between them is:',
   choices:['always from the larger object','always from the smaller object','zero, since they are at thermal equilibrium','impossible to determine'],
   correct:2,
   solution:'Heat flows due to a temperature difference. Equal temperatures means the objects are already at <strong>thermal equilibrium</strong>, so net heat flow is zero.'},

  {id:'p119', difficulty:'easy', type:'concept', tag:'Exo vs Endo',
   q:'Melting ice at 0&deg;C is best classified as:',
   choices:['exothermic, &Delta;H negative','endothermic, &Delta;H positive','neither, since temperature stays constant','exothermic only in winter'],
   correct:1,
   solution:'Melting requires energy input to break the attractions holding the solid together, so it is <strong>endothermic</strong> with a positive &Delta;H, even though temperature stays constant during the change.'},

  {id:'p120', difficulty:'easy', type:'concept', tag:'Phase Change',
   q:'During a phase change, the temperature of the substance:',
   choices:['increases steadily','decreases steadily','remains constant','oscillates'],
   correct:2,
   solution:'All added or removed energy goes into changing the arrangement of particles, not their kinetic energy, so <strong>temperature stays constant</strong> during a phase change.'},

  {id:'p121', difficulty:'easy', type:'concept', tag:'Phase Change',
   q:'Freezing releases heat to the surroundings, making it:',
   choices:['endothermic','exothermic','isothermal','adiabatic'],
   correct:1,
   solution:'Freezing releases energy as particles settle into a more ordered solid structure, so it is <strong>exothermic</strong>.'},

  {id:'p122', difficulty:'easy', type:'concept', tag:'Heating Curve',
   q:'On a heating curve (temperature vs. heat added), the sloped (diagonal) segments represent:',
   choices:['a phase change occurring','the substance melting only','temperature change within a single phase','the substance at its boiling point'],
   correct:2,
   solution:'Sloped segments show the temperature rising as heat warms a single phase (solid, liquid, or gas). Flat segments represent phase changes.'},

  {id:'p123', difficulty:'easy', type:'concept', tag:'Calorimetry',
   q:'In a coffee-cup calorimeter, heat released by a reaction is assumed to be:',
   choices:['lost to the room','absorbed entirely by the surrounding solution','converted into work','equal to zero'],
   correct:1,
   solution:'An ideal calorimeter is treated as perfectly insulated, so all heat released by the reaction is <strong>absorbed by the surrounding solution</strong>.'},

  {id:'p124', difficulty:'easy', type:'concept', tag:'Calorimetry',
   q:'A calorimeter measures the &Delta;T of the surrounding water or solution in order to determine:',
   choices:['the mass of the reactants','the amount of heat transferred','the identity of the products','the reaction rate'],
   correct:1,
   solution:'Using q=mc&Delta;T on the surroundings lets chemists calculate <strong>the heat transferred</strong> by the reaction.'},

  {id:'p125', difficulty:'easy', type:'concept', tag:'Activation Energy',
   q:'Activation energy is best described as:',
   choices:['the total energy released by a reaction','the energy difference between reactants and products','the minimum energy needed to start a reaction','the energy of the products only'],
   correct:2,
   solution:'Activation energy is the energy barrier &mdash; the <strong>minimum energy</strong> colliding particles need to react.'},

  {id:'p126', difficulty:'easy', type:'concept', tag:'Energy Diagrams',
   q:'On an energy diagram for an exothermic reaction, the products are drawn:',
   choices:['higher in energy than the reactants','lower in energy than the reactants','at the same energy as the reactants','at the peak of the curve'],
   correct:1,
   solution:'Exothermic reactions release energy, so the products end up <strong>lower in energy</strong> than the reactants.'},

  /* ── MEDIUM CONCEPT (11) ── */
  {id:'p127', difficulty:'medium', type:'concept', tag:'Heat vs Temp',
   q:'A large pot of lukewarm water and a small cup of very hot water are compared. Which statement is correct?',
   choices:['The pot contains more total heat energy, though it has a lower temperature.','The cup contains more total heat energy because it is hotter.','Both contain the same amount of heat energy.','Heat and temperature are the same, so this cannot be determined.'],
   correct:0,
   solution:'Total heat energy (q=mc&Delta;T) depends on mass as well as temperature. The much larger mass of lukewarm water can store <strong>more total heat</strong> than a small amount of very hot water.'},

  {id:'p128', difficulty:'medium', type:'concept', tag:'Exo vs Endo',
   q:'For a reaction with &Delta;H = +55 kJ/mol, which statement is true?',
   choices:['The reaction releases 55 kJ of heat per mole and is exothermic.','The reaction absorbs 55 kJ of heat per mole and is endothermic.','The reaction has no heat exchange with surroundings.','&Delta;H cannot be positive for a real reaction.'],
   correct:1,
   solution:'A positive &Delta;H means the products have more enthalpy than the reactants &mdash; the reaction <strong>absorbs</strong> energy and is endothermic.'},

  {id:'p129', difficulty:'medium', type:'concept', tag:'Heating Curve',
   q:'A substance&rsquo;s heating curve shows a very short flat segment at its melting point but a very long flat segment at its boiling point. This suggests:',
   choices:['&Delta;H<sub>fus</sub> is much smaller than &Delta;H<sub>vap</sub> for this substance','&Delta;H<sub>fus</sub> is much larger than &Delta;H<sub>vap</sub> for this substance','the specific heat of the liquid is zero','the substance has no boiling point'],
   correct:0,
   solution:'A longer flat segment means more heat (at constant rate) is needed for that phase change, so <strong>&Delta;H<sub>vap</sub> is much larger than &Delta;H<sub>fus</sub></strong> here.'},

  {id:'p130', difficulty:'medium', type:'concept', tag:'Calorimetry',
   q:'Why is a coffee-cup calorimeter considered a constant-pressure system?',
   choices:['It is sealed and rigid','It is open to the atmosphere','It is placed in an ice bath','It has a fixed volume of gas'],
   correct:1,
   solution:'A coffee-cup calorimeter is open to the air, so the pressure inside stays equal to <strong>atmospheric pressure</strong> throughout the reaction.'},

  {id:'p131', difficulty:'medium', type:'concept', tag:'Calorimetry',
   q:'If a reaction in a calorimeter causes the temperature of the surrounding water to drop, the reaction is:',
   choices:['exothermic, and the water gave up heat to the reaction','endothermic, and the reaction absorbed heat from the water','impossible, since temperature cannot drop','occurring at constant temperature'],
   correct:1,
   solution:'A temperature drop in the water means the water lost heat to the reaction, so the reaction <strong>absorbed heat</strong> &mdash; it is endothermic.'},

  {id:'p132', difficulty:'medium', type:'concept', tag:"Hess's Law",
   q:'Hess&rsquo;s law works because enthalpy is a:',
   choices:['path-dependent quantity','state function, independent of the path taken','kinetic property','function of reaction rate only'],
   correct:1,
   solution:'Because enthalpy is a <strong>state function</strong>, &Delta;H for a reaction is the same whether it happens in one step or several &mdash; only the initial and final states matter.'},

  {id:'p133', difficulty:'medium', type:'concept', tag:"Hess's Law",
   q:'If a chemical equation is reversed, its &Delta;H value:',
   choices:['stays exactly the same','doubles','changes sign','becomes zero'],
   correct:2,
   solution:'Reversing a reaction swaps reactants and products, which <strong>flips the sign</strong> of &Delta;H.'},

  {id:'p134', difficulty:'medium', type:'concept', tag:'Enthalpy of Formation',
   q:'The standard enthalpy of formation of an element in its standard state (e.g., O<sub>2</sub>(g), Cu(s)) is defined as:',
   choices:['always positive','always negative','exactly zero','equal to its molar mass'],
   correct:2,
   solution:'By definition, elements in their standard states have &Delta;H&deg;<sub>f</sub> = <strong>zero</strong>, since no formation reaction is needed to make them.'},

  {id:'p135', difficulty:'medium', type:'concept', tag:'Enthalpy of Formation',
   q:'Using formation data and Hess&rsquo;s law, &Delta;H<sub>rxn</sub> is calculated as:',
   choices:['sum of reactants minus sum of products','sum of products minus sum of reactants','sum of products plus sum of reactants','average of products and reactants'],
   correct:1,
   solution:'&Delta;H<sub>rxn</sub> = &Sigma;(&Delta;H&deg;<sub>f</sub> <strong>products</strong>) &minus; &Sigma;(&Delta;H&deg;<sub>f</sub> reactants).'},

  {id:'p136', difficulty:'medium', type:'concept', tag:'Activation Energy',
   q:'Adding a catalyst to a reaction changes the activation energy but not the overall &Delta;H because:',
   choices:['catalysts change the identity of the products','catalysts provide an alternate pathway without changing the relative energies of reactants and products','catalysts absorb some of the reaction heat','catalysts only work on exothermic reactions'],
   correct:1,
   solution:'A catalyst offers a lower-energy pathway (lower activation energy) but the reactants and products &mdash; and therefore &Delta;H &mdash; stay <strong>unchanged</strong>.'},

  {id:'p137', difficulty:'medium', type:'concept', tag:'Energy Diagrams',
   q:'On an energy diagram, the difference in energy between the peak (transition state) and the products represents:',
   choices:['the activation energy of the reverse reaction','&Delta;H for the reaction','the activation energy of the forward reaction','the heat of formation'],
   correct:0,
   solution:'The gap from the peak down to the products is the energy barrier for the reaction running backward &mdash; the <strong>activation energy of the reverse reaction</strong>.'},

  /* ── HARD CONCEPT (15) ── */
  {id:'p138', difficulty:'hard', type:'concept', tag:"Hess's Law",
   q:'Given three thermochemical equations that must be manipulated (reversed and/or scaled) to obtain a target equation, the correct overall &Delta;H is obtained by:',
   choices:['adding the original &Delta;H values without modification','applying the same reversal/scaling operations to &Delta;H as were applied to each equation, then summing','averaging the &Delta;H values of the equations used','using only the &Delta;H of the equation with the largest coefficients'],
   correct:1,
   solution:'Each &Delta;H must be reversed (sign flipped) or scaled (multiplied) to match how its equation was manipulated, and then all of the adjusted &Delta;H values are <strong>summed</strong>.'},

  {id:'p139', difficulty:'hard', type:'concept', tag:'Enthalpy of Formation',
   q:'A reaction has a large negative &Delta;H<sub>rxn</sub> calculated from formation data. This indicates the products, as a group, are:',
   choices:['higher in enthalpy than the reactants, so the reaction is endothermic','lower in enthalpy than the reactants, releasing energy as the reaction proceeds','identical in enthalpy to the reactants','unstable relative to the reactants'],
   correct:1,
   solution:'A large negative &Delta;H<sub>rxn</sub> means the products end up <strong>lower in enthalpy</strong> than the reactants, so the excess energy is released to the surroundings.'},

  {id:'p140', difficulty:'hard', type:'concept', tag:'Calorimetry',
   q:'In a real (non-ideal) calorimetry experiment, some heat escapes to the surroundings instead of being absorbed by the water. This causes the experimentally measured |q| to be:',
   choices:['higher than the true value, since heat is created','lower than the true value, since not all heat is captured by the water','exactly equal to the true value regardless of losses','impossible to predict'],
   correct:1,
   solution:'If heat leaks out before it can raise the water&rsquo;s temperature, the measured &Delta;T &mdash; and thus the calculated |q| &mdash; comes out <strong>lower</strong> than the true heat released.'},

  {id:'p141', difficulty:'hard', type:'concept', tag:'Calorimetry',
   q:'Two calorimetry trials use the same reaction and the same moles of reactant, but Trial B uses twice the mass of water as Trial A. Compared to Trial A, Trial B&rsquo;s measured &Delta;T will be:',
   choices:['twice as large, since q is proportional to mass','the same, since q is fixed by the moles reacted','about half as large, since the same heat is spread over more water','impossible to determine without knowing c'],
   correct:2,
   solution:'q is fixed by the reaction, but &Delta;T = q &divide; (mc). Doubling the water&rsquo;s mass <strong>halves</strong> the resulting temperature change.'},

  {id:'p142', difficulty:'hard', type:'concept', tag:'Heating Curve',
   q:'A sample absorbs enough heat to reach exactly 100.0&deg;C but not enough to fully vaporize. On a graph of temperature vs. heat added, the sample&rsquo;s final data point lies:',
   choices:['on the sloped segment above 100&deg;C','on the flat plateau at 100&deg;C','on the sloped segment below 100&deg;C','at 0&deg;C'],
   correct:1,
   solution:'A partially-boiled sample sits somewhere along the <strong>flat plateau at 100&deg;C</strong>, since temperature does not rise until vaporization is complete.'},

  {id:'p143', difficulty:'hard', type:'concept', tag:'Phase Change',
   q:'Substance X has a much larger liquid-phase specific heat than substance Y. Heating equal masses of each from well below their melting points to well above their boiling points (all else equal), which statement is true?',
   choices:['X and Y require exactly the same total heat','X requires more heat overall because its liquid-phase segment has a steeper slope','X requires more heat overall because its liquid-phase segment needs more energy per degree','Y always boils at a lower temperature than X'],
   correct:2,
   solution:'A larger specific heat means <strong>more joules are needed per gram per degree</strong> to warm the liquid, so X needs more total heat during that segment (and its slope on a q-vs-T graph is actually shallower, not steeper).'},

  {id:'p144', difficulty:'hard', type:'concept', tag:'Activation Energy',
   q:'A reaction has a large activation energy but a very negative &Delta;H (highly exothermic overall). This combination means the reaction is:',
   choices:['thermodynamically unfavorable and kinetically fast','thermodynamically favorable (releases energy) but kinetically slow at room temperature without added energy or a catalyst','impossible, since exothermic reactions always have low activation energy','only possible at absolute zero'],
   correct:1,
   solution:'&Delta;H describes energetics (favorable, since it releases energy), while activation energy describes the kinetic barrier. A large barrier makes the reaction <strong>slow to start</strong> even though it is energetically favorable.'},

  {id:'p145', difficulty:'hard', type:'concept', tag:'Energy Diagrams',
   q:'On an energy diagram, adding a catalyst is shown as:',
   choices:['lowering both the reactant and product energy levels equally','lowering the peak (transition state) energy for both forward and reverse directions','only lowering the peak for the forward direction','raising the reactant energy level'],
   correct:1,
   solution:'A catalyst provides a new pathway with a <strong>lower transition-state peak</strong>, which speeds up both the forward and reverse reactions equally without moving the reactant or product energy levels.'},

  {id:'p146', difficulty:'hard', type:'concept', tag:'Exo vs Endo',
   q:'A process is endothermic overall, but its energy-vs-progress graph shows a brief dip early on before the curve rises. This is consistent with:',
   choices:['bond-breaking releasing more energy than bond-forming absorbs overall','an intermediate step that releases a small amount of energy, while the overall process still absorbs more energy than it releases','the reaction not actually being endothermic','&Delta;H being exactly zero'],
   correct:1,
   solution:'A multi-step process can have an exothermic intermediate step (the small dip) while the <strong>overall</strong> process still absorbs net energy, since only the starting and ending points determine the overall &Delta;H.'},

  {id:'p147', difficulty:'hard', type:'concept', tag:"Hess's Law",
   q:'Equation 1 contributes &Delta;H<sub>1</sub> directly to a target reaction. Equation 2 (used in reverse and doubled) contributes to the same target. If &Delta;H<sub>2</sub> = +40 kJ for equation 2 as originally written, the contribution from equation 2 to the target&rsquo;s total &Delta;H is:',
   choices:['+80 kJ','&minus;80 kJ','+40 kJ','&minus;40 kJ'],
   correct:1,
   solution:'Reversing flips the sign (+40 &rarr; &minus;40); doubling then multiplies by 2: &minus;40 &times; 2 = <strong>&minus;80 kJ</strong>.'},

  {id:'p148', difficulty:'hard', type:'concept', tag:'Enthalpy of Formation',
   q:'For a reaction where all reactants are elements in their standard states, &Delta;H<sub>rxn</sub> calculated from formation data equals:',
   choices:['zero, always','the negative of the sum of the products&rsquo; formation enthalpies','the sum of the products&rsquo; standard formation enthalpies, since the reactant term is zero','undefined, since elements have no formation enthalpy'],
   correct:2,
   solution:'Since &Delta;H&deg;<sub>f</sub> = 0 for elements in their standard states, the reactant sum drops out, leaving &Delta;H<sub>rxn</sub> equal to <strong>the sum of the products&rsquo; formation enthalpies</strong>.'},

  {id:'p149', difficulty:'hard', type:'concept', tag:'Phase Change',
   q:'Two identical beakers of water are placed in a freezer. Beaker A has twice the mass of Beaker B. Compared to Beaker B, Beaker A will release ______ heat while freezing completely, and (assuming equal heat-loss rate) take ______ time to freeze.',
   choices:['half as much; half as much','twice as much; twice as much','the same amount; the same amount','twice as much; half as much'],
   correct:1,
   solution:'Heat released during freezing is q=m&Delta;H<sub>fus</sub>, which is proportional to mass, so Beaker A releases <strong>twice as much heat</strong>. At an equal heat-loss rate, releasing twice the heat also takes <strong>twice as long</strong>.'},

  {id:'p150', difficulty:'hard', type:'concept', tag:'Thermo Stoich',
   q:'A thermochemical equation shows &Delta;H = &minus;180 kJ for 2 mol of a product. If a reaction actually produces 0.50 mol of that product, the heat released is:',
   choices:['180 kJ','90 kJ','45 kJ','360 kJ'],
   correct:2,
   solution:'0.50 mol &times; (180 kJ / 2 mol) = <strong>45 kJ</strong> released.'},

  {id:'p151', difficulty:'hard', type:'concept', tag:'Calorimetry',
   q:'A hot metal block is dropped into cool water in an insulated calorimeter. At thermal equilibrium, which statement must be true?',
   choices:['The metal and water reach the same final temperature, and heat lost by the metal equals heat gained by the water','The metal and water reach different final temperatures','Heat lost by the metal is greater than heat gained by the water','The specific heat of the metal must equal that of water'],
   correct:0,
   solution:'In an insulated system, all heat lost by the hot object is gained by the cooler one, and both reach a <strong>common final temperature</strong> at equilibrium.'},

  {id:'p152', difficulty:'hard', type:'concept', tag:'Heating Curve',
   q:'Comparing 50.0 g of liquid water warmed by 10.0&deg;C to 50.0 g of ice melted completely (c<sub>water</sub>=4.18 J/g&deg;C, &Delta;H<sub>fus</sub>=334 J/g), which requires more heat, and by roughly how much?',
   choices:['Warming requires more heat, by about 14,600 J','Melting requires more heat, by about 14,600 J','They require the same amount of heat','Melting requires more heat, by about 2,090 J'],
   correct:1,
   solution:'Warming: 50.0&times;4.18&times;10.0=2090 J. Melting: 50.0&times;334=16,700 J. <strong>Melting requires more heat</strong>, by about 16,700&minus;2090&asymp;14,600 J.'},

  // ── NEW MULTI-STEP (22 problems) ──────────────────────────────────────────

  /* ── EASY MULTI (2) ── */
  {id:'p153', difficulty:'easy', type:'multi', tag:'Energy Conversion',
   q:'Convert 8368 J to kilocalories, then round to 3 sig figs. (1 kcal = 4184 J)',
   answer:2.00, tolerance:0.02, unit:'kcal',
   solution:'8368 &divide; 4184 = <strong>2.00 kcal</strong>.'},

  {id:'p154', difficulty:'easy', type:'multi', tag:'Phase Change',
   q:'A sample of ice absorbs 3340 J of heat while melting. How many grams of ice melted? (&Delta;H<sub>fus</sub> = 334 J/g)',
   answer:10.0, tolerance:0.1, unit:'g',
   solution:'3340 &divide; 334 = <strong>10.0 g</strong> of ice melted.'},

  /* ── MEDIUM MULTI (4) ── */
  {id:'p155', difficulty:'medium', type:'multi', tag:'Heating Curve',
   q:'A 60.0 g ice sample starts at &minus;8.00&deg;C. It is heated to 0&deg;C and then completely melted. How much total heat is required? (c<sub>ice</sub> = 2.09 J/g&deg;C, &Delta;H<sub>fus</sub> = 334 J/g)',
   answer:21043, tolerance:40, unit:'J',
   solution:'Warm ice: 60.0 &times; 2.09 &times; 8.00 = 1003 J. Melt: 60.0 &times; 334 = 20,040 J. Total = <strong>21,043 J</strong>.'},

  {id:'p156', difficulty:'medium', type:'multi', tag:'Specific Heat',
   q:'In a calorimetry trial, 1128.6 J of heat raises the temperature of a 45.0 g sample by 6.00&deg;C. What is the specific heat of the substance?',
   answer:4.18, tolerance:0.05, unit:'J/g&deg;C',
   solution:'c = q &divide; (m&Delta;T) = 1128.6 &divide; (45.0 &times; 6.00) = <strong>4.18 J/g&deg;C</strong>.'},

  {id:'p157', difficulty:'medium', type:'multi', tag:'Thermo Stoich',
   q:'N<sub>2</sub>(g)+3H<sub>2</sub>(g)&rarr;2NH<sub>3</sub>(g), &Delta;H=&minus;92.2 kJ. How much heat is released producing 0.750 mol of NH<sub>3</sub>?',
   answer:34.6, tolerance:0.5, unit:'kJ',
   solution:'0.750 mol NH<sub>3</sub> &times; (92.2 kJ / 2 mol NH<sub>3</sub>) = <strong>34.6 kJ</strong> released.'},

  {id:'p158', difficulty:'medium', type:'multi', tag:'Enthalpy of Formation',
   q:'Using &Delta;H&deg;<sub>f</sub>: CO(g)=&minus;110.5, CO<sub>2</sub>(g)=&minus;393.5 kJ/mol, find &Delta;H for CO(g)+1/2O<sub>2</sub>(g)&rarr;CO<sub>2</sub>(g).',
   answer:-283.0, tolerance:1.0, unit:'kJ',
   solution:'&Delta;H = (&minus;393.5) &minus; [(&minus;110.5)+0] = <strong>&minus;283.0 kJ</strong>.'},

  /* ── HARD MULTI (16) ── */
  {id:'p159', difficulty:'hard', type:'multi', tag:'Heating Curve',
   q:'A 25.0 g ice sample at &minus;25.0&deg;C is heated until it becomes steam at 130.0&deg;C. How much total heat is required? (c<sub>ice</sub>=2.09, &Delta;H<sub>fus</sub>=334, c<sub>water</sub>=4.18, &Delta;H<sub>vap</sub>=2260, c<sub>steam</sub>=2.01)',
   answer:78.11, tolerance:0.3, unit:'kJ',
   solution:'Warm ice: 25.0&times;2.09&times;25.0=1306 J. Melt: 25.0&times;334=8350 J. Warm liquid: 25.0&times;4.18&times;100.0=10,450 J. Vaporize: 25.0&times;2260=56,500 J. Warm steam: 25.0&times;2.01&times;30.0=1508 J. Total = 78,114 J = <strong>78.11 kJ</strong>.'},

  {id:'p160', difficulty:'hard', type:'multi', tag:'Heating Curve',
   q:'A 50.0 g ice sample at &minus;10.0&deg;C is heated to liquid water at 60.0&deg;C. How much total heat is required? (c<sub>ice</sub>=2.09, &Delta;H<sub>fus</sub>=334, c<sub>water</sub>=4.18)',
   answer:30.29, tolerance:0.3, unit:'kJ',
   solution:'Warm ice: 50.0&times;2.09&times;10.0=1045 J. Melt: 50.0&times;334=16,700 J. Warm liquid: 50.0&times;4.18&times;60.0=12,540 J. Total = 30,285 J = <strong>30.29 kJ</strong>.'},

  {id:'p161', difficulty:'hard', type:'multi', tag:'Heating Curve',
   q:'A 10.0 g water sample at 90.0&deg;C is heated until it becomes steam at 140.0&deg;C. How much total heat is required? (c<sub>water</sub>=4.18, &Delta;H<sub>vap</sub>=2260, c<sub>steam</sub>=2.01)',
   answer:23.82, tolerance:0.3, unit:'kJ',
   solution:'Warm liquid: 10.0&times;4.18&times;10.0=418 J. Vaporize: 10.0&times;2260=22,600 J. Warm steam: 10.0&times;2.01&times;40.0=804 J. Total = 23,822 J = <strong>23.82 kJ</strong>.'},

  {id:'p162', difficulty:'hard', type:'multi', tag:'Heating Curve',
   q:'A 20.0 g steam sample at 150.0&deg;C cools all the way down to ice at &minus;30.0&deg;C. How much heat is released in total? (c<sub>ice</sub>=2.09, &Delta;H<sub>fus</sub>=334, c<sub>water</sub>=4.18, &Delta;H<sub>vap</sub>=2260, c<sub>steam</sub>=2.01)',
   answer:63.50, tolerance:0.3, unit:'kJ',
   solution:'Cool steam: 20.0&times;2.01&times;50.0=2010 J. Condense: 20.0&times;2260=45,200 J. Cool liquid: 20.0&times;4.18&times;100.0=8360 J. Freeze: 20.0&times;334=6680 J. Cool ice: 20.0&times;2.09&times;30.0=1254 J. Total = 63,504 J = <strong>63.50 kJ</strong> released.'},

  {id:'p163', difficulty:'hard', type:'multi', tag:'Calorimetry',
   q:'In an insulated container, 60.0 g of water at 10.0&deg;C is mixed with 40.0 g of water at 95.0&deg;C. What is the final temperature?',
   answer:44.0, tolerance:0.3, unit:'&deg;C',
   solution:'60.0(T<sub>f</sub>&minus;10.0) = 40.0(95.0&minus;T<sub>f</sub>). Solving gives T<sub>f</sub> = <strong>44.0&deg;C</strong>.'},

  {id:'p164', difficulty:'hard', type:'multi', tag:'Calorimetry',
   q:'In an insulated container, 40.0 g of water at 95.0&deg;C is mixed with 160.0 g of water at 15.0&deg;C. What is the final temperature?',
   answer:31.0, tolerance:0.3, unit:'&deg;C',
   solution:'40.0(95.0&minus;T<sub>f</sub>) = 160.0(T<sub>f</sub>&minus;15.0). Solving gives T<sub>f</sub> = <strong>31.0&deg;C</strong>.'},

  {id:'p165', difficulty:'hard', type:'multi', tag:'Calorimetry',
   q:'A 60.0 g piece of iron (c=0.449 J/g&deg;C) at 300.0&deg;C is dropped into 120.0 g of water (c=4.18 J/g&deg;C) at 18.0&deg;C. What is the final temperature?',
   answer:32.37, tolerance:0.3, unit:'&deg;C',
   solution:'60.0(0.449)(300.0&minus;T<sub>f</sub>) = 120.0(4.18)(T<sub>f</sub>&minus;18.0). Solving gives T<sub>f</sub> = <strong>32.37&deg;C</strong>.'},

  {id:'p166', difficulty:'hard', type:'multi', tag:'Calorimetry',
   q:'A 40.0 g piece of copper (c=0.385 J/g&deg;C) at 250.0&deg;C is dropped into 80.0 g of water (c=4.18 J/g&deg;C) at 22.0&deg;C. What is the final temperature?',
   answer:32.04, tolerance:0.3, unit:'&deg;C',
   solution:'40.0(0.385)(250.0&minus;T<sub>f</sub>) = 80.0(4.18)(T<sub>f</sub>&minus;22.0). Solving gives T<sub>f</sub> = <strong>32.04&deg;C</strong>.'},

  {id:'p167', difficulty:'hard', type:'multi', tag:"Hess's Law",
   q:'Use Hess&rsquo;s law to find &Delta;H for N<sub>2</sub>(g)+2O<sub>2</sub>(g)&rarr;2NO<sub>2</sub>(g). Given: N<sub>2</sub>(g)+O<sub>2</sub>(g)&rarr;2NO(g), &Delta;H=+180.5 kJ; 2NO(g)+O<sub>2</sub>(g)&rarr;2NO<sub>2</sub>(g), &Delta;H=&minus;114.2 kJ.',
   answer:66.3, tolerance:1.0, unit:'kJ',
   solution:'Adding the two equations directly gives the target. &Delta;H = 180.5 &minus; 114.2 = <strong>+66.3 kJ</strong>.'},

  {id:'p168', difficulty:'hard', type:'multi', tag:"Hess's Law",
   q:'Use Hess&rsquo;s law to find &Delta;H for C(s)+2H<sub>2</sub>(g)&rarr;CH<sub>4</sub>(g). Given: C(s)+O<sub>2</sub>(g)&rarr;CO<sub>2</sub>(g), &Delta;H=&minus;393.5 kJ; H<sub>2</sub>(g)+1/2O<sub>2</sub>(g)&rarr;H<sub>2</sub>O(l), &Delta;H=&minus;285.8 kJ; CH<sub>4</sub>(g)+2O<sub>2</sub>(g)&rarr;CO<sub>2</sub>(g)+2H<sub>2</sub>O(l), &Delta;H=&minus;890.4 kJ.',
   answer:-74.7, tolerance:1.0, unit:'kJ',
   solution:'Add the first equation, double and add the second, and reverse the third: &Delta;H = (&minus;393.5) + 2(&minus;285.8) &minus; (&minus;890.4) = &minus;393.5&minus;571.6+890.4 = <strong>&minus;74.7 kJ</strong>.'},

  {id:'p169', difficulty:'hard', type:'multi', tag:'Enthalpy of Formation',
   q:'Find &Delta;H<sub>rxn</sub> for the combustion of ethane: C<sub>2</sub>H<sub>6</sub>(g)+7/2O<sub>2</sub>(g)&rarr;2CO<sub>2</sub>(g)+3H<sub>2</sub>O(l). &Delta;H&deg;<sub>f</sub>: C<sub>2</sub>H<sub>6</sub>=&minus;84.0, CO<sub>2</sub>=&minus;393.5, H<sub>2</sub>O(l)=&minus;285.8 kJ/mol.',
   answer:-1560.4, tolerance:1.0, unit:'kJ',
   solution:'Products: 2(&minus;393.5)+3(&minus;285.8) = &minus;787.0&minus;857.4 = &minus;1644.4 kJ. Reactants: &minus;84.0+3.5(0) = &minus;84.0 kJ. &Delta;H<sub>rxn</sub> = &minus;1644.4&minus;(&minus;84.0) = <strong>&minus;1560.4 kJ</strong>.'},

  {id:'p170', difficulty:'hard', type:'multi', tag:'Enthalpy of Formation',
   q:'Find &Delta;H<sub>rxn</sub> for the combustion of glucose: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s)+6O<sub>2</sub>(g)&rarr;6CO<sub>2</sub>(g)+6H<sub>2</sub>O(l). &Delta;H&deg;<sub>f</sub>: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>=&minus;1273.3, CO<sub>2</sub>=&minus;393.5, H<sub>2</sub>O(l)=&minus;285.8 kJ/mol.',
   answer:-2802.5, tolerance:2.0, unit:'kJ',
   solution:'Products: 6(&minus;393.5)+6(&minus;285.8) = &minus;2361.0&minus;1714.8 = &minus;4075.8 kJ. Reactants: &minus;1273.3+6(0) = &minus;1273.3 kJ. &Delta;H<sub>rxn</sub> = &minus;4075.8&minus;(&minus;1273.3) = <strong>&minus;2802.5 kJ</strong>.'},

  {id:'p171', difficulty:'hard', type:'multi', tag:'Thermo Stoich',
   q:'Using &Delta;H<sub>rxn</sub>=&minus;2803 kJ/mol for the combustion of glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, MM=180.16 g/mol), how much heat is released burning 18.0 g of glucose?',
   answer:280.1, tolerance:3, unit:'kJ',
   solution:'18.0 g &divide; 180.16 g/mol = 0.0999 mol. 0.0999 &times; 2803 = <strong>280.1 kJ</strong> released.'},

  {id:'p172', difficulty:'hard', type:'multi', tag:'Thermo Stoich',
   q:'Using &Delta;H<sub>rxn</sub>=&minus;2877.4 kJ/mol for the combustion of butane (C<sub>4</sub>H<sub>10</sub>, MM=58.12 g/mol), how much heat is released burning 35.0 g of butane?',
   answer:1732.7, tolerance:8, unit:'kJ',
   solution:'35.0 g &divide; 58.12 g/mol = 0.6022 mol. 0.6022 &times; 2877.4 = <strong>1732.7 kJ</strong> released.'},

  {id:'p173', difficulty:'hard', type:'multi', tag:'Thermo Stoich',
   q:'2C<sub>2</sub>H<sub>2</sub>(g)+5O<sub>2</sub>(g)&rarr;4CO<sub>2</sub>(g)+2H<sub>2</sub>O(l), &Delta;H=&minus;2599.2 kJ. How much heat is released by burning 25.0 g of C<sub>2</sub>H<sub>2</sub>? (MM C<sub>2</sub>H<sub>2</sub>=26.04 g/mol)',
   answer:1247.8, tolerance:8, unit:'kJ',
   solution:'25.0 g &divide; 26.04 g/mol = 0.9601 mol. 0.9601 &times; (2599.2 kJ / 2 mol) = <strong>1247.8 kJ</strong> released.'},

  {id:'p174', difficulty:'hard', type:'multi', tag:'Calorimetry',
   q:'A 25.0 g ice cube at 0.0&deg;C is added to 200.0 g of water at 25.0&deg;C in an insulated cup. The ice melts completely, and the mixture reaches a common final temperature. Find the final temperature. (&Delta;H<sub>fus</sub>=334 J/g, c<sub>water</sub>=4.18 J/g&deg;C)',
   answer:13.34, tolerance:0.5, unit:'&deg;C',
   solution:'Heat to melt ice and warm it to T<sub>f</sub>: 25.0(334) + 25.0(4.18)T<sub>f</sub>. Heat lost by the warm water: 200.0(4.18)(25.0&minus;T<sub>f</sub>). Setting them equal and solving: 8350+104.5T<sub>f</sub> = 20,900&minus;836T<sub>f</sub>, so 940.5T<sub>f</sub>=12,550, T<sub>f</sub> = <strong>13.34&deg;C</strong>.'},

];
