function sc(id){const c=document.getElementById(id);if(!c)return null;const ctx=c.getContext('2d');c.width=c.offsetWidth||600;c.height=220;ctx.clearRect(0,0,c.width,c.height);return{ctx,W:c.width,H:220};}
function axes(ctx,W,H,pad,xM,yM,xL,yL,xs,ys){
ctx.strokeStyle='#e2e8f0';ctx.lineWidth=1;
for(let y=0;y<=yM;y+=ys){const sy=H-pad.b-(y/yM)*(H-pad.t-pad.b);ctx.beginPath();ctx.moveTo(pad.l,sy);ctx.lineTo(W-pad.r,sy);ctx.stroke();}
for(let x=0;x<=xM;x+=xs){const sx=pad.l+(x/xM)*(W-pad.l-pad.r);ctx.beginPath();ctx.moveTo(sx,pad.t);ctx.lineTo(sx,H-pad.b);ctx.stroke();}
ctx.strokeStyle='#94a3b8';ctx.lineWidth=1.5;
ctx.beginPath();ctx.moveTo(pad.l,pad.t);ctx.lineTo(pad.l,H-pad.b);ctx.lineTo(W-pad.r,H-pad.b);ctx.stroke();
ctx.fillStyle='#64748b';ctx.font='10px DM Mono,monospace';
ctx.textAlign='right';
for(let y=0;y<=yM;y+=ys){const sy=H-pad.b-(y/yM)*(H-pad.t-pad.b);ctx.fillText(y.toFixed(y<1?3:1),pad.l-4,sy+4);}
ctx.textAlign='center';
for(let x=0,i=0;x<=xM;x+=xs,i++){const sx=pad.l+(x/xM)*(W-pad.l-pad.r);ctx.fillText(x<10?x.toFixed(1):x.toFixed(0),sx,H-pad.b+14);}
ctx.fillStyle='#2563eb';ctx.font='11px system-ui,sans-serif';
ctx.fillText(xL,W/2,H-2);
ctx.save();ctx.translate(11,H/2);ctx.rotate(-Math.PI/2);ctx.fillText(yL,0,0);ctx.restore();
}
function dot(ctx,x,y,lbl){ctx.fillStyle='#dc2626';ctx.beginPath();ctx.arc(x,y,7,0,Math.PI*2);ctx.fill();ctx.fillStyle='#1e3a8a';ctx.font='bold 10px DM Mono,monospace';ctx.textAlign='left';ctx.fillText(lbl,x+10,y-6);}

function updateBoyle(){
const pInput=document.getElementById('boyleP');
const kInput=document.getElementById('boyleK');
const pVal=document.getElementById('boylePVal');
const kVal=document.getElementById('boyleKVal');
const readout=document.getElementById('boyleReadout');
if(!pInput||!kInput||!pVal||!kVal||!readout)return;
const p=parseFloat(pInput.value);
const k=parseFloat(kInput.value);
pVal.textContent=p.toFixed(2)+' atm';
kVal.textContent='k = '+k.toFixed(1);
const v=k/p;
readout.textContent='P = '+p.toFixed(3)+' atm  |  V = '+v.toFixed(3)+' L  |  P×V = '+(p*v).toFixed(3)+' L·atm (constant)';
const g=sc('boyleCanvas');if(!g)return;
const{ctx,W,H}=g;const pad={l:55,r:20,t:15,b:36};
const pMax=6,vMax=Math.min(k/0.18+1,45);
const scX=x=>pad.l+(x/vMax)*(W-pad.l-pad.r);const scY=y=>H-pad.b-(y/pMax)*(H-pad.t-pad.b);
axes(ctx,W,H,pad,vMax,pMax,'Volume (L)','Pressure (atm)',vMax/5,1);
ctx.strokeStyle='#2563eb';ctx.lineWidth=2.5;ctx.beginPath();let f=true;
for(let v2=k/pMax;v2<=vMax;v2+=0.05){const p2=k/v2;if(p2>pMax)continue;if(f){ctx.moveTo(scX(v2),scY(p2));f=false;}else ctx.lineTo(scX(v2),scY(p2));}
ctx.stroke();
if(v>0&&v<=vMax&&p<=pMax)dot(ctx,scX(v),scY(p),'('+v.toFixed(2)+'L, '+p.toFixed(2)+'atm)');
}

function updateCharles(){
const tInput=document.getElementById('charlesT');
const kInput=document.getElementById('charlesK');
const tVal=document.getElementById('charlesTVal');
const kVal=document.getElementById('charlesKVal');
const readout=document.getElementById('charlesReadout');
if(!tInput||!kInput||!tVal||!kVal||!readout)return;
const T=parseFloat(tInput.value);
const k=parseFloat(kInput.value);
tVal.textContent=T+' K ('+(T-273).toFixed(1)+'°C)';
kVal.textContent='k = '+k.toFixed(3);
const V=k*T;
readout.textContent='T = '+T+' K  |  V = '+V.toFixed(3)+' L  |  V/T = '+k.toFixed(4)+' L/K (constant)';
const g=sc('charlesCanvas');if(!g)return;
const{ctx,W,H}=g;const pad={l:55,r:20,t:15,b:36};
const Tmax=750,Vmax=k*Tmax*1.1;
const scX=t=>pad.l+(t/Tmax)*(W-pad.l-pad.r);const scY=v=>H-pad.b-(v/Vmax)*(H-pad.t-pad.b);
axes(ctx,W,H,pad,Tmax,Vmax,'Temperature (K)','Volume (L)',150,Vmax/5);
ctx.strokeStyle='#059669';ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(scX(0),scY(0));ctx.lineTo(scX(Tmax),scY(k*Tmax));ctx.stroke();
if(T<=Tmax&&V<=Vmax)dot(ctx,scX(T),scY(V),'('+T+'K, '+V.toFixed(2)+'L)');
}

function updateGay(){
const tInput=document.getElementById('gayT');
const kInput=document.getElementById('gayK');
const tVal=document.getElementById('gayTVal');
const kVal=document.getElementById('gayKVal');
const readout=document.getElementById('gayReadout');
if(!tInput||!kInput||!tVal||!kVal||!readout)return;
const T=parseFloat(tInput.value);
const k=parseFloat(kInput.value);
tVal.textContent=T+' K ('+(T-273).toFixed(1)+'°C)';
kVal.textContent='k = '+k.toFixed(4);
const P=k*T;
readout.textContent='T = '+T+' K  |  P = '+P.toFixed(4)+' atm  |  P/T = '+k.toFixed(5)+' atm/K (constant)';
const g=sc('gayCanvas');if(!g)return;
const{ctx,W,H}=g;const pad={l:65,r:20,t:15,b:36};
const Tmax=750,Pmax=k*Tmax*1.1;
const scX=t=>pad.l+(t/Tmax)*(W-pad.l-pad.r);const scY=p=>H-pad.b-(p/Pmax)*(H-pad.t-pad.b);
axes(ctx,W,H,pad,Tmax,Pmax,'Temperature (K)','Pressure (atm)',150,Pmax/5);
ctx.strokeStyle='#7c3aed';ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(scX(0),scY(0));ctx.lineTo(scX(Tmax),scY(k*Tmax));ctx.stroke();
if(T<=Tmax&&P<=Pmax)dot(ctx,scX(T),scY(P),'('+T+'K, '+P.toFixed(4)+'atm)');
}

const toolState={law:null,setup:null,avog:null,water:null,ideal:null};
const scenarioOrderState={
law:{order:[],position:0,lastIndex:null},
setup:{order:[],position:0,lastIndex:null},
avog:{order:[],position:0,lastIndex:null},
water:{order:[],position:0,lastIndex:null},
ideal:{order:[],position:0,lastIndex:null}
};
const choiceOrderState={
law:[],
setup:[],
avog:[],
water:[],
ideal:[]
};

const lawChoiceMeta={
boyle:{id:'lawOptBoyle',label:"Boyle's Law"},
charles:{id:'lawOptCharles',label:"Charles's Law"},
gay:{id:'lawOptGay',label:"Gay-Lussac's Law"},
combined:{id:'lawOptCombined',label:'Combined Gas Law'},
ideal:{id:'lawOptIdeal',label:'Ideal Gas Law'},
avogadro:{id:'lawOptAvogadro',label:"Avogadro's Law"}
};

const lawScenarios=[
{
scenario:"A sealed syringe of gas is compressed from 2.0 L to 1.0 L while the temperature stays constant and no gas escapes.",
correct:"boyle",
correctFeedback:"Right — pressure and volume are changing while temperature and amount stay constant, so Boyle's Law applies.",
incorrectFeedback:"Not quite — check what stays constant first. Boyle's Law only works when temperature and amount of gas stay constant. Read the scenario again and match the constant conditions.",
reveal:[
"<strong>What stays constant:</strong> temperature and amount of gas",
"<strong>What changes:</strong> pressure and volume",
"<strong>Best match:</strong> Boyle's Law connects pressure and volume when T and n stay constant."
]
},
{
scenario:"A balloon warms from 250 K to 400 K while the pressure stays constant and the amount of gas does not change.",
correct:"charles",
correctFeedback:"Right — volume changes with temperature while pressure and amount stay constant, so Charles's Law applies.",
incorrectFeedback:"Not quite — this is a constant-pressure temperature change. Look for the law that connects volume and Kelvin temperature when pressure stays constant.",
reveal:[
"<strong>What stays constant:</strong> pressure and amount of gas",
"<strong>What changes:</strong> volume and temperature",
"<strong>Best match:</strong> Charles's Law connects volume and Kelvin temperature when P and n stay constant."
]
},
{
scenario:"A rigid tank of gas is heated from 290 K to 360 K. The amount of gas stays the same and the tank cannot expand.",
correct:"gay",
correctFeedback:"Right — pressure changes with temperature while volume and amount stay constant, so Gay-Lussac's Law applies.",
incorrectFeedback:"Not quite — the container is rigid, so volume stays constant. Look for the law that connects pressure and Kelvin temperature at constant volume.",
reveal:[
"<strong>What stays constant:</strong> volume and amount of gas",
"<strong>What changes:</strong> pressure and temperature",
"<strong>Best match:</strong> Gay-Lussac's Law connects pressure and Kelvin temperature when V and n stay constant."
]
},
{
scenario:"One gas sample changes from 1.20 atm, 4.0 L, 300 K to a new pressure, volume, and temperature. No gas is added or lost.",
correct:"combined",
correctFeedback:"Right — this is one gas sample changing from state 1 to state 2 with constant amount of gas, so the Combined Gas Law applies.",
incorrectFeedback:"Not quite — this is a state-1 to state-2 problem for the same gas sample. Look for the law that connects P, V, and T when n stays constant.",
reveal:[
"<strong>What stays constant:</strong> amount of gas",
"<strong>What changes:</strong> pressure, volume, and temperature across two states",
"<strong>Best match:</strong> The Combined Gas Law compares state 1 and state 2 when n stays constant."
]
},
{
scenario:"A gas sample is in a 3.0 L container at 1.5 atm and 350 K. You want to find how many moles of gas are present. No conditions change.",
correct:"ideal",
correctFeedback:"Right — you know P, V, and T and are solving for n directly from a single state, so the Ideal Gas Law (PV = nRT) applies.",
incorrectFeedback:"Not quite — this is not a two-state problem and nothing is changing. You have three known quantities and one unknown. Look for the law that lets you solve for any one of P, V, n, or T directly.",
reveal:[
"<strong>What is known:</strong> P, V, and T",
"<strong>What you're solving for:</strong> moles (n)",
"<strong>Best match:</strong> The Ideal Gas Law (PV = nRT) connects all four variables in a single state."
]
},
{
scenario:"A flexible balloon at constant temperature and pressure grows from 2.0 L to 4.0 L as more gas is pumped in.",
correct:"avogadro",
correctFeedback:"Right — volume doubles because the amount of gas doubled, while temperature and pressure stay constant, so Avogadro's Law applies.",
incorrectFeedback:"Not quite — temperature and pressure are both constant here, so this is not Boyle's, Charles's, or Gay-Lussac's Law. Look for the law that relates volume to the amount of gas at constant T and P.",
reveal:[
"<strong>What stays constant:</strong> temperature and pressure",
"<strong>What changes:</strong> volume and amount of gas",
"<strong>Best match:</strong> Avogadro's Law — equal volumes at the same T and P contain equal numbers of molecules, and volume is directly proportional to n."
]
},
{
scenario:"A gas sample in a sealed cylinder expands from 1.5 L to 3.0 L while the temperature stays constant and the amount of gas does not change.",
correct:"boyle",
correctFeedback:"Right — pressure and volume change while temperature and amount stay constant, so Boyle's Law applies.",
incorrectFeedback:"Not quite — if temperature and amount are constant, the pressure-volume relationship is Boyle's Law.",
reveal:[
"<strong>What stays constant:</strong> temperature and amount of gas",
"<strong>What changes:</strong> pressure and volume",
"<strong>Best match:</strong> Boyle's Law relates pressure and volume inversely when T and n stay constant."
]
},
{
scenario:"A gas in a flexible container cools from 500 K to 250 K while the pressure stays constant and no gas is added or removed.",
correct:"charles",
correctFeedback:"Right — volume changes with Kelvin temperature at constant pressure, so Charles's Law applies.",
incorrectFeedback:"Not quite — constant pressure points to the volume-temperature relationship in Charles's Law.",
reveal:[
"<strong>What stays constant:</strong> pressure and amount of gas",
"<strong>What changes:</strong> volume and temperature",
"<strong>Best match:</strong> Charles's Law connects V and T when P and n stay constant."
]
},
{
scenario:"A rigid aerosol can sits in the sun and its temperature rises while the amount of gas and volume stay constant.",
correct:"gay",
correctFeedback:"Right — pressure changes with temperature in a rigid container, so Gay-Lussac's Law applies.",
incorrectFeedback:"Not quite — a rigid container means volume is constant. The pressure-temperature law is Gay-Lussac's Law.",
reveal:[
"<strong>What stays constant:</strong> volume and amount of gas",
"<strong>What changes:</strong> pressure and temperature",
"<strong>Best match:</strong> Gay-Lussac's Law relates P and T at constant V and n."
]
},
{
scenario:"One sample of gas changes from 0.95 atm, 2.5 L, 280 K to a new state with different pressure, volume, and temperature. No gas enters or leaves.",
correct:"combined",
correctFeedback:"Right — this is a same-sample state change with constant amount of gas, so the Combined Gas Law applies.",
incorrectFeedback:"Not quite — a state 1 to state 2 comparison for the same sample points to the Combined Gas Law.",
reveal:[
"<strong>What stays constant:</strong> amount of gas",
"<strong>What changes:</strong> pressure, volume, and temperature",
"<strong>Best match:</strong> The Combined Gas Law compares two states when n stays constant."
]
},
{
scenario:"A gas is measured at 2.20 atm, 5.00 L, and 315 K, and you need to find the number of moles present from that one set of conditions.",
correct:"ideal",
correctFeedback:"Right — a single-state problem with P, V, and T known uses the Ideal Gas Law.",
incorrectFeedback:"Not quite — nothing is changing from state 1 to state 2 here. Use PV = nRT for a single state.",
reveal:[
"<strong>What is known:</strong> pressure, volume, and temperature",
"<strong>What you're solving for:</strong> moles",
"<strong>Best match:</strong> The Ideal Gas Law connects all four variables in one state."
]
},
{
scenario:"At constant temperature and pressure, a gas sample doubles from 0.40 mol to 0.80 mol and its volume doubles too.",
correct:"avogadro",
correctFeedback:"Right — volume is directly proportional to amount of gas when temperature and pressure stay constant, so Avogadro's Law applies.",
incorrectFeedback:"Not quite — if T and P stay constant and only n and V change together, that is Avogadro's Law.",
reveal:[
"<strong>What stays constant:</strong> temperature and pressure",
"<strong>What changes:</strong> amount of gas and volume",
"<strong>Best match:</strong> Avogadro's Law relates V and n directly at constant T and P."
]
},
{
scenario:"A gas sample in a piston changes pressure as its temperature changes, but the piston is free to move and the amount of gas stays fixed.",
correct:"combined",
correctFeedback:"Right — both pressure and temperature change and the volume may change too, so this is handled by the Combined Gas Law for one sample.",
incorrectFeedback:"Not quite — because more than one variable changes for the same sample, use the Combined Gas Law instead of a simpler special case.",
reveal:[
"<strong>What stays constant:</strong> amount of gas",
"<strong>What changes:</strong> at least pressure and temperature, and volume is not fixed",
"<strong>Best match:</strong> The Combined Gas Law is the general one-sample relation when n stays constant."
]
},
{
scenario:"A gas sample in a fixed-volume bulb cools down, and you want to predict how its pressure changes while no gas escapes.",
correct:"gay",
correctFeedback:"Right — with constant volume and amount, pressure follows temperature by Gay-Lussac's Law.",
incorrectFeedback:"Not quite — the key phrase is fixed volume. That means use Gay-Lussac's Law.",
reveal:[
"<strong>What stays constant:</strong> volume and amount of gas",
"<strong>What changes:</strong> pressure and temperature",
"<strong>Best match:</strong> Gay-Lussac's Law links P and T at constant V."
]
},
{
scenario:"A weather balloon rises and the outside pressure drops while the gas temperature stays nearly constant and no gas escapes.",
correct:"boyle",
correctFeedback:"Right — at roughly constant temperature and amount, pressure and volume follow Boyle's Law.",
incorrectFeedback:"Not quite — if temperature and amount stay the same, pressure-volume changes are described by Boyle's Law.",
reveal:[
"<strong>What stays constant:</strong> temperature and amount of gas",
"<strong>What changes:</strong> pressure and volume",
"<strong>Best match:</strong> Boyle's Law describes the inverse P-V relationship."
]
},
{
scenario:"A sample of gas is heated in a balloon that can expand freely while pressure stays equal to the outside atmosphere.",
correct:"charles",
correctFeedback:"Right — a freely expanding balloon keeps pressure about constant, so the volume-temperature relationship is Charles's Law.",
incorrectFeedback:"Not quite — constant pressure makes this a Charles's Law situation, not Gay-Lussac's.",
reveal:[
"<strong>What stays constant:</strong> pressure and amount of gas",
"<strong>What changes:</strong> temperature and volume",
"<strong>Best match:</strong> Charles's Law relates V and T at constant pressure."
]
}
];

const setupScenarios=[
{
problem:"A gas sample has P = 755 mmHg, V = 0.500 L, and T = 25&deg;C. You want to solve for moles.",
options:{
a:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">755 mmHg × 0.500 L</span><span class=\"formula-frac-d\">0.08206 × 25</span></span>",
b:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">0.993 atm × 0.500 L</span><span class=\"formula-frac-d\">0.08206 × 298 K</span></span>",
c:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">755 mmHg × 0.500 L</span><span class=\"formula-frac-d\">8.314 × 298 K</span></span>"
},
correct:"b",
correctFeedback:"Right — this setup uses Kelvin temperature and matches the pressure unit to the gas constant, so the equation is valid.",
incorrectFeedback:"Not quite — this setup breaks the unit rules. Temperature must be in Kelvin, and the pressure unit must match R. Check those two pieces and choose again.",
reveal:[
"25&deg;C must be converted to <strong>298 K</strong>.",
"755 mmHg must be converted to <strong>0.993 atm</strong> if you use <strong>R = 0.08206 L·atm·mol⁻¹·K⁻¹</strong>.",
"The valid setup is <strong>n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">0.993 atm × 0.500 L</span><span class=\"formula-frac-d\">0.08206 × 298 K</span></span></strong>."
]
},
{
problem:"A gas sample has P = 101.3 kPa, V = 2.00 L, and T = 300 K. You want to solve for moles.",
options:{
a:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">101.3 kPa × 2.00 L</span><span class=\"formula-frac-d\">8.314 × 300 K</span></span>",
b:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">101.3 atm × 2.00 L</span><span class=\"formula-frac-d\">0.08206 × 300 K</span></span>",
c:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">101.3 kPa × 2.00 L</span><span class=\"formula-frac-d\">0.08206 × 27&deg;C</span></span>"
},
correct:"a",
correctFeedback:"Right — this setup keeps temperature in Kelvin and matches kPa with R = 8.314 L·kPa·mol⁻¹·K⁻¹.",
incorrectFeedback:"Not quite — one setup changes the pressure unit incorrectly and another uses Celsius. Use Kelvin and keep the pressure unit matched to R.",
reveal:[
"Temperature is already in <strong>Kelvin</strong>, so no temperature conversion is needed.",
"Pressure is already in <strong>kPa</strong>, so use <strong>R = 8.314 L·kPa·mol⁻¹·K⁻¹</strong>.",
"The valid setup is <strong>n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">101.3 kPa × 2.00 L</span><span class=\"formula-frac-d\">8.314 × 300 K</span></span></strong>."
]
},
{
problem:"A gas sample has P = 1.50 atm, V = 4.20 L, and T = 52&deg;C. You want to solve for moles.",
options:{
a:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">1.50 atm × 4.20 L</span><span class=\"formula-frac-d\">0.08206 × 325 K</span></span>",
b:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">1.50 atm × 4.20 L</span><span class=\"formula-frac-d\">8.314 × 325 K</span></span>",
c:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">1.50 atm × 4.20 L</span><span class=\"formula-frac-d\">0.08206 × 52</span></span>"
},
correct:"a",
correctFeedback:"Right — this setup uses Kelvin temperature and matches atm with R = 0.08206 L·atm·mol⁻¹·K⁻¹.",
incorrectFeedback:"Not quite — the pressure unit and gas constant must match, and Celsius cannot go directly into PV = nRT. Convert temperature to Kelvin and choose the matching R.",
reveal:[
"52&deg;C must be converted to <strong>325 K</strong>.",
"Pressure is already in <strong>atm</strong>, so use <strong>R = 0.08206 L·atm·mol⁻¹·K⁻¹</strong>.",
"The valid setup is <strong>n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">1.50 atm × 4.20 L</span><span class=\"formula-frac-d\">0.08206 × 325 K</span></span></strong>."
]
},
{
problem:"A gas sample has P = 650 mmHg, V = 1.25 L, and T = 40&deg;C. You want to solve for moles.",
options:{
a:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">0.855 atm × 1.25 L</span><span class=\"formula-frac-d\">0.08206 × 313 K</span></span>",
b:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">650 mmHg × 1.25 L</span><span class=\"formula-frac-d\">0.08206 × 313 K</span></span>",
c:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">0.855 atm × 1.25 L</span><span class=\"formula-frac-d\">8.314 × 40</span></span>"
},
correct:"a",
correctFeedback:"Right — the pressure was converted to atm, the temperature was converted to Kelvin, and the gas constant matches those units.",
incorrectFeedback:"Not quite — you need Kelvin temperature and a pressure unit that matches R. Recheck both conversions.",
reveal:[
"40&deg;C becomes <strong>313 K</strong>.",
"650 mmHg becomes about <strong>0.855 atm</strong> when using <strong>R = 0.08206</strong>.",
"That makes choice A the valid setup."
]
},
{
problem:"A gas sample has P = 98.0 kPa, V = 3.50 L, and T = 18&deg;C. You want to solve for moles.",
options:{
a:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">98.0 kPa × 3.50 L</span><span class=\"formula-frac-d\">8.314 × 291 K</span></span>",
b:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">98.0 atm × 3.50 L</span><span class=\"formula-frac-d\">0.08206 × 291 K</span></span>",
c:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">98.0 kPa × 3.50 L</span><span class=\"formula-frac-d\">8.314 × 18</span></span>"
},
correct:"a",
correctFeedback:"Right — kPa matches R = 8.314, and the temperature has been converted to Kelvin.",
incorrectFeedback:"Not quite — do not leave temperature in Celsius, and do not switch kPa to atm unless you also change R.",
reveal:[
"18&deg;C becomes <strong>291 K</strong>.",
"Pressure is already in <strong>kPa</strong>, so use <strong>R = 8.314 L·kPa·mol⁻¹·K⁻¹</strong>.",
"That makes choice A the valid setup."
]
},
{
problem:"A gas sample has P = 2.40 atm, V = 0.850 L, and T = 12&deg;C. You want to solve for moles.",
options:{
a:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">2.40 atm × 0.850 L</span><span class=\"formula-frac-d\">0.08206 × 285 K</span></span>",
b:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">2.40 atm × 0.850 L</span><span class=\"formula-frac-d\">8.314 × 285 K</span></span>",
c:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">2.40 atm × 0.850 L</span><span class=\"formula-frac-d\">0.08206 × 12</span></span>"
},
correct:"a",
correctFeedback:"Right — this setup uses Kelvin and the atm-based gas constant correctly.",
incorrectFeedback:"Not quite — atm goes with 0.08206, and Celsius cannot go directly into PV = nRT.",
reveal:[
"12&deg;C becomes <strong>285 K</strong>.",
"Pressure is already in <strong>atm</strong>, so <strong>R = 0.08206</strong> is appropriate.",
"That makes choice A correct."
]
},
{
problem:"A gas sample has P = 110.0 kPa, V = 1.80 L, and T = 325 K. You want to solve for moles.",
options:{
a:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">110.0 kPa × 1.80 L</span><span class=\"formula-frac-d\">8.314 × 325 K</span></span>",
b:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">110.0 kPa × 1.80 L</span><span class=\"formula-frac-d\">0.08206 × 325 K</span></span>",
c:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">110.0 atm × 1.80 L</span><span class=\"formula-frac-d\">8.314 × 325 K</span></span>"
},
correct:"a",
correctFeedback:"Right — pressure in kPa matches the 8.314 gas constant, and the temperature is already in Kelvin.",
incorrectFeedback:"Not quite — the pressure unit must match the gas constant, and the given pressure is kPa, not atm.",
reveal:[
"Temperature is already in <strong>Kelvin</strong>.",
"Pressure is already in <strong>kPa</strong>, so use <strong>R = 8.314</strong>.",
"That makes choice A the valid setup."
]
},
{
problem:"A gas sample has P = 720 mmHg, V = 2.25 L, and T = 35&deg;C. You want to solve for moles.",
options:{
a:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">0.947 atm × 2.25 L</span><span class=\"formula-frac-d\">0.08206 × 308 K</span></span>",
b:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">720 mmHg × 2.25 L</span><span class=\"formula-frac-d\">8.314 × 308 K</span></span>",
c:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">0.947 atm × 2.25 L</span><span class=\"formula-frac-d\">0.08206 × 35</span></span>"
},
correct:"a",
correctFeedback:"Right — the pressure was converted to atm, the temperature to Kelvin, and the gas constant matches.",
incorrectFeedback:"Not quite — check both conversions. You need Kelvin and a pressure unit that matches R.",
reveal:[
"35&deg;C becomes <strong>308 K</strong>.",
"720 mmHg becomes about <strong>0.947 atm</strong> when using <strong>R = 0.08206</strong>.",
"That makes choice A the valid setup."
]
},
{
problem:"A gas sample has P = 88.5 kPa, V = 5.00 L, and T = 44&deg;C. You want to solve for moles.",
options:{
a:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">88.5 kPa × 5.00 L</span><span class=\"formula-frac-d\">8.314 × 317 K</span></span>",
b:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">88.5 atm × 5.00 L</span><span class=\"formula-frac-d\">0.08206 × 317 K</span></span>",
c:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">88.5 kPa × 5.00 L</span><span class=\"formula-frac-d\">8.314 × 44</span></span>"
},
correct:"a",
correctFeedback:"Right — this uses Kelvin temperature and keeps kPa matched with R = 8.314.",
incorrectFeedback:"Not quite — Celsius cannot go directly into the equation, and the pressure unit must stay consistent with the gas constant.",
reveal:[
"44&deg;C becomes <strong>317 K</strong>.",
"Pressure is already in <strong>kPa</strong>, so use <strong>R = 8.314</strong>.",
"That makes choice A correct."
]
},
{
problem:"A gas sample has P = 0.850 atm, V = 6.40 L, and T = 295 K. You want to solve for moles.",
options:{
a:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">0.850 atm × 6.40 L</span><span class=\"formula-frac-d\">0.08206 × 295 K</span></span>",
b:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">0.850 kPa × 6.40 L</span><span class=\"formula-frac-d\">8.314 × 295 K</span></span>",
c:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">0.850 atm × 6.40 L</span><span class=\"formula-frac-d\">0.08206 × 22</span></span>"
},
correct:"a",
correctFeedback:"Right — atm pairs with 0.08206 and the temperature is already in Kelvin.",
incorrectFeedback:"Not quite — use the gas constant that matches atm, and do not convert 295 K into Celsius for the equation.",
reveal:[
"Temperature is already in <strong>Kelvin</strong>.",
"Pressure is already in <strong>atm</strong>, so use <strong>R = 0.08206</strong>.",
"That makes choice A the correct setup."
]
},
{
problem:"A gas sample has P = 103.0 kPa, V = 0.950 L, and T = 5&deg;C. You want to solve for moles.",
options:{
a:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">103.0 kPa × 0.950 L</span><span class=\"formula-frac-d\">8.314 × 278 K</span></span>",
b:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">103.0 kPa × 0.950 L</span><span class=\"formula-frac-d\">0.08206 × 278 K</span></span>",
c:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">103.0 atm × 0.950 L</span><span class=\"formula-frac-d\">8.314 × 278 K</span></span>"
},
correct:"a",
correctFeedback:"Right — kPa matches 8.314, and 5&deg;C must be converted to 278 K first.",
incorrectFeedback:"Not quite — the temperature has to be Kelvin and the pressure unit has to match the chosen value of R.",
reveal:[
"5&deg;C becomes <strong>278 K</strong>.",
"Pressure stays in <strong>kPa</strong>, so use <strong>R = 8.314</strong>.",
"That makes choice A correct."
]
},
{
problem:"A gas sample has P = 1.10 atm, V = 3.00 L, and T = 60&deg;C. You want to solve for moles.",
options:{
a:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">1.10 atm × 3.00 L</span><span class=\"formula-frac-d\">0.08206 × 333 K</span></span>",
b:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">1.10 atm × 3.00 L</span><span class=\"formula-frac-d\">8.314 × 333 K</span></span>",
c:"n = <span class=\"formula-frac\"><span class=\"formula-frac-n\">1.10 atm × 3.00 L</span><span class=\"formula-frac-d\">0.08206 × 60</span></span>"
},
correct:"a",
correctFeedback:"Right — that setup converts temperature to Kelvin and keeps atm matched with 0.08206.",
incorrectFeedback:"Not quite — the equation requires Kelvin, and the gas constant must match the pressure unit.",
reveal:[
"60&deg;C becomes <strong>333 K</strong>.",
"Pressure is already in <strong>atm</strong>, so use <strong>R = 0.08206</strong>.",
"That makes choice A the valid setup."
]
}
];

const avogScenarios=[
{
sampleA:"1.0 L of CH4 at the same T and P",
sampleB:"1.0 L of H2 at the same T and P",
correct:"a",
correctFeedback:"Right — equal volumes at the same temperature and pressure have the same number of molecules, but CH4 has more hydrogen atoms in each molecule.",
incorrectFeedback:"Not quite — you mixed up molecules and atoms. Start with Avogadro's Law: equal volumes mean equal numbers of molecules. Then compare how many hydrogen atoms each molecule contains.",
revealTitle:"Why Sample A has more hydrogen atoms",
reveal:[
"Equal volumes at the same temperature and pressure contain the same number of <strong>molecules</strong>.",
"Each CH4 molecule has <strong>4 hydrogen atoms</strong>.",
"Each H2 molecule has <strong>2 hydrogen atoms</strong>.",
"So Sample A has more hydrogen atoms."
]
},
{
sampleA:"1.0 L of NH3 at the same T and P",
sampleB:"1.0 L of H2 at the same T and P",
correct:"a",
correctFeedback:"Right — equal volumes mean equal numbers of molecules, and NH3 has 3 hydrogen atoms per molecule while H2 has 2.",
incorrectFeedback:"Not quite — do not compare liters directly to atoms. First use Avogadro's Law to match molecules, then compare hydrogen atoms per molecule.",
revealTitle:"Why Sample A has more hydrogen atoms",
reveal:[
"Equal volumes at the same temperature and pressure contain the same number of <strong>molecules</strong>.",
"Each NH3 molecule has <strong>3 hydrogen atoms</strong>.",
"Each H2 molecule has <strong>2 hydrogen atoms</strong>.",
"So Sample A has more hydrogen atoms."
]
},
{
sampleA:"1.0 L of H2O vapor at the same T and P",
sampleB:"1.0 L of H2S at the same T and P",
correct:"same",
correctFeedback:"Right — equal volumes mean equal numbers of molecules, and each molecule in both samples contains 2 hydrogen atoms.",
incorrectFeedback:"Not quite — start with equal molecules, not equal masses. Then compare the number of hydrogen atoms in each molecule.",
revealTitle:"Why both samples have the same number of hydrogen atoms",
reveal:[
"Equal volumes at the same temperature and pressure contain the same number of <strong>molecules</strong>.",
"Each H2O molecule has <strong>2 hydrogen atoms</strong>.",
"Each H2S molecule also has <strong>2 hydrogen atoms</strong>.",
"So both samples have the same number of hydrogen atoms."
]
},
{
sampleA:"1.0 L of H2 at the same T and P",
sampleB:"1.0 L of CH4 at the same T and P",
correct:"b",
correctFeedback:"Right — equal volumes mean equal numbers of molecules, but CH4 has 4 hydrogen atoms per molecule while H2 has only 2.",
incorrectFeedback:"Not quite — equal volumes mean equal numbers of molecules at the same T and P. The question is how many hydrogen atoms are inside each molecule.",
revealTitle:"Why Sample B has more hydrogen atoms",
reveal:[
"Equal volumes at the same temperature and pressure contain the same number of <strong>molecules</strong>.",
"Each H2 molecule has <strong>2 hydrogen atoms</strong>.",
"Each CH4 molecule has <strong>4 hydrogen atoms</strong>.",
"So Sample B has more hydrogen atoms."
]
},
{
sampleA:"1.0 L of HCl at the same T and P",
sampleB:"1.0 L of HBr at the same T and P",
correct:"same",
correctFeedback:"Right — equal volumes mean equal numbers of molecules, and each molecule contains one hydrogen atom.",
incorrectFeedback:"Not quite — start with equal molecules, then compare hydrogen atoms per molecule. Each molecule here has one hydrogen.",
revealTitle:"Why both samples have the same number of hydrogen atoms",
reveal:[
"Equal volumes at the same temperature and pressure contain the same number of <strong>molecules</strong>.",
"Each HCl molecule has <strong>1 hydrogen atom</strong>.",
"Each HBr molecule also has <strong>1 hydrogen atom</strong>.",
"So both samples contain the same number of hydrogen atoms."
]
},
{
sampleA:"1.0 L of C2H6 at the same T and P",
sampleB:"1.0 L of CH4 at the same T and P",
correct:"a",
correctFeedback:"Right — equal volumes contain equal molecules, and C2H6 has 6 hydrogen atoms per molecule while CH4 has 4.",
incorrectFeedback:"Not quite — compare hydrogen atoms per molecule after you use Avogadro's Law to match molecule counts.",
revealTitle:"Why Sample A has more hydrogen atoms",
reveal:[
"Equal volumes at the same temperature and pressure contain the same number of <strong>molecules</strong>.",
"Each C2H6 molecule has <strong>6 hydrogen atoms</strong>.",
"Each CH4 molecule has <strong>4 hydrogen atoms</strong>.",
"So Sample A has more hydrogen atoms."
]
},
{
sampleA:"1.0 L of H2 at the same T and P",
sampleB:"1.0 L of NH3 at the same T and P",
correct:"b",
correctFeedback:"Right — equal volumes mean equal molecules, and NH3 has 3 hydrogen atoms per molecule while H2 has 2.",
incorrectFeedback:"Not quite — use Avogadro's Law first, then compare hydrogen atoms inside each molecule.",
revealTitle:"Why Sample B has more hydrogen atoms",
reveal:[
"Equal volumes at the same temperature and pressure contain the same number of <strong>molecules</strong>.",
"Each H2 molecule has <strong>2 hydrogen atoms</strong>.",
"Each NH3 molecule has <strong>3 hydrogen atoms</strong>.",
"So Sample B has more hydrogen atoms."
]
},
{
sampleA:"1.0 L of C2H2 at the same T and P",
sampleB:"1.0 L of C2H6 at the same T and P",
correct:"b",
correctFeedback:"Right — equal volumes give equal molecules, and C2H6 has more hydrogen atoms per molecule than C2H2.",
incorrectFeedback:"Not quite — the comparison depends on hydrogen atoms per molecule after you match the number of molecules.",
revealTitle:"Why Sample B has more hydrogen atoms",
reveal:[
"Equal volumes at the same temperature and pressure contain the same number of <strong>molecules</strong>.",
"Each C2H2 molecule has <strong>2 hydrogen atoms</strong>.",
"Each C2H6 molecule has <strong>6 hydrogen atoms</strong>.",
"So Sample B has more hydrogen atoms."
]
},
{
sampleA:"1.0 L of H2O vapor at the same T and P",
sampleB:"1.0 L of NH3 at the same T and P",
correct:"b",
correctFeedback:"Right — equal volumes mean equal molecules, and NH3 has 3 H atoms per molecule while H2O has 2.",
incorrectFeedback:"Not quite — compare the number of hydrogen atoms in each molecule after using Avogadro's Law.",
revealTitle:"Why Sample B has more hydrogen atoms",
reveal:[
"Equal volumes at the same temperature and pressure contain the same number of <strong>molecules</strong>.",
"Each H2O molecule has <strong>2 hydrogen atoms</strong>.",
"Each NH3 molecule has <strong>3 hydrogen atoms</strong>.",
"So Sample B has more hydrogen atoms."
]
},
{
sampleA:"1.0 L of CH4 at the same T and P",
sampleB:"1.0 L of C2H6 at the same T and P",
correct:"b",
correctFeedback:"Right — equal volumes give equal numbers of molecules, and C2H6 has more H atoms per molecule than CH4.",
incorrectFeedback:"Not quite — use equal molecules first, then compare the formulas for hydrogen count.",
revealTitle:"Why Sample B has more hydrogen atoms",
reveal:[
"Equal volumes at the same temperature and pressure contain the same number of <strong>molecules</strong>.",
"Each CH4 molecule has <strong>4 hydrogen atoms</strong>.",
"Each C2H6 molecule has <strong>6 hydrogen atoms</strong>.",
"So Sample B has more hydrogen atoms."
]
},
{
sampleA:"1.0 L of HF at the same T and P",
sampleB:"1.0 L of CH4 at the same T and P",
correct:"b",
correctFeedback:"Right — equal volumes mean equal molecules, and CH4 has 4 hydrogen atoms per molecule while HF has only 1.",
incorrectFeedback:"Not quite — the molecule counts are equal, so compare how many hydrogen atoms each molecule contains.",
revealTitle:"Why Sample B has more hydrogen atoms",
reveal:[
"Equal volumes at the same temperature and pressure contain the same number of <strong>molecules</strong>.",
"Each HF molecule has <strong>1 hydrogen atom</strong>.",
"Each CH4 molecule has <strong>4 hydrogen atoms</strong>.",
"So Sample B has more hydrogen atoms."
]
},
{
sampleA:"1.0 L of H2S at the same T and P",
sampleB:"1.0 L of C2H2 at the same T and P",
correct:"same",
correctFeedback:"Right — equal volumes mean equal molecules, and both molecules contain 2 hydrogen atoms each.",
incorrectFeedback:"Not quite — after you match molecule counts, compare hydrogen atoms in each formula. Both have 2 H atoms.",
revealTitle:"Why both samples have the same number of hydrogen atoms",
reveal:[
"Equal volumes at the same temperature and pressure contain the same number of <strong>molecules</strong>.",
"Each H2S molecule has <strong>2 hydrogen atoms</strong>.",
"Each C2H2 molecule also has <strong>2 hydrogen atoms</strong>.",
"So both samples contain the same number of hydrogen atoms."
]
},
{
sampleA:"1.0 L of PH3 at the same T and P",
sampleB:"1.0 L of HCl at the same T and P",
correct:"a",
correctFeedback:"Right — equal volumes give equal molecules, and PH3 has 3 hydrogen atoms per molecule while HCl has 1.",
incorrectFeedback:"Not quite — compare hydrogen atoms per molecule after matching the number of molecules.",
revealTitle:"Why Sample A has more hydrogen atoms",
reveal:[
"Equal volumes at the same temperature and pressure contain the same number of <strong>molecules</strong>.",
"Each PH3 molecule has <strong>3 hydrogen atoms</strong>.",
"Each HCl molecule has <strong>1 hydrogen atom</strong>.",
"So Sample A has more hydrogen atoms."
]
},
{
sampleA:"1.0 L of CH3OH vapor at the same T and P",
sampleB:"1.0 L of H2O vapor at the same T and P",
correct:"a",
correctFeedback:"Right — equal volumes mean equal molecules, and CH3OH has 4 hydrogen atoms per molecule while H2O has 2.",
incorrectFeedback:"Not quite — first match molecules with Avogadro's Law, then compare the formulas for total hydrogen atoms.",
revealTitle:"Why Sample A has more hydrogen atoms",
reveal:[
"Equal volumes at the same temperature and pressure contain the same number of <strong>molecules</strong>.",
"Each CH3OH molecule has <strong>4 hydrogen atoms</strong>.",
"Each H2O molecule has <strong>2 hydrogen atoms</strong>.",
"So Sample A has more hydrogen atoms."
]
}
];

const waterScenarios=[
{
measured:"755 mmHg",
vapor:"23.8 mmHg",
gas:"H2",
options:{total:"755 mmHg",vapor:"23.8 mmHg",dry:"731.2 mmHg"},
correct:"dry",
correctFeedback:"Right — the measured pressure includes hydrogen gas and water vapor, so you must subtract the water vapor pressure to get the dry hydrogen pressure.",
incorrectFeedback:"Not quite — the measured pressure is not just hydrogen. Total pressure includes water vapor too. Subtract the water vapor pressure first, then use the dry gas pressure.",
reveal:[
"Measured pressure = hydrogen gas + water vapor.",
"<strong>755.0 − 23.8 = 731.2 mmHg</strong>",
"Use <strong>731.2 mmHg</strong> as the pressure of dry H2."
]
},
{
measured:"742 mmHg",
vapor:"17.5 mmHg",
gas:"O2",
options:{total:"742 mmHg",vapor:"17.5 mmHg",dry:"724.5 mmHg"},
correct:"dry",
correctFeedback:"Right — the measured pressure includes oxygen gas and water vapor, so you must subtract the water vapor pressure first.",
incorrectFeedback:"Not quite — the barometer reading includes water vapor. Remove the water vapor pressure before using the gas pressure in PV = nRT.",
reveal:[
"Measured pressure = oxygen gas + water vapor.",
"<strong>742.0 − 17.5 = 724.5 mmHg</strong>",
"Use <strong>724.5 mmHg</strong> as the pressure of dry O2."
]
},
{
measured:"780 mmHg",
vapor:"31.8 mmHg",
gas:"N2",
options:{total:"780 mmHg",vapor:"31.8 mmHg",dry:"748.2 mmHg"},
correct:"dry",
correctFeedback:"Right — the total pressure includes nitrogen gas and water vapor, so the dry-gas pressure is the difference.",
incorrectFeedback:"Not quite — total pressure is a mixture pressure. Subtract the water vapor pressure first, then use the dry nitrogen pressure.",
reveal:[
"Measured pressure = nitrogen gas + water vapor.",
"<strong>780.0 − 31.8 = 748.2 mmHg</strong>",
"Use <strong>748.2 mmHg</strong> as the pressure of dry N2."
]
},
{
measured:"730 mmHg",
vapor:"21.1 mmHg",
gas:"H2",
options:{total:"730 mmHg",vapor:"21.1 mmHg",dry:"708.9 mmHg"},
correct:"dry",
correctFeedback:"Right — subtract the water vapor pressure from the measured pressure to get the dry hydrogen pressure.",
incorrectFeedback:"Not quite — the measured pressure includes both hydrogen and water vapor. Subtract the vapor pressure first.",
reveal:[
"Measured pressure = hydrogen gas + water vapor.",
"<strong>730.0 − 21.1 = 708.9 mmHg</strong>",
"Use <strong>708.9 mmHg</strong> as the pressure of dry H2."
]
},
{
measured:"765 mmHg",
vapor:"19.8 mmHg",
gas:"O2",
options:{total:"765 mmHg",vapor:"19.8 mmHg",dry:"745.2 mmHg"},
correct:"dry",
correctFeedback:"Right — the dry oxygen pressure is the total measured pressure minus the water vapor pressure.",
incorrectFeedback:"Not quite — total pressure includes water vapor, so subtract it before using the gas pressure.",
reveal:[
"Measured pressure = oxygen gas + water vapor.",
"<strong>765.0 − 19.8 = 745.2 mmHg</strong>",
"Use <strong>745.2 mmHg</strong> as the pressure of dry O2."
]
},
{
measured:"748 mmHg",
vapor:"24.0 mmHg",
gas:"CO2",
options:{total:"748 mmHg",vapor:"24.0 mmHg",dry:"724.0 mmHg"},
correct:"dry",
correctFeedback:"Right — subtracting the water vapor pressure gives the pressure of dry CO2.",
incorrectFeedback:"Not quite — the measured pressure is a mixture pressure. Remove the water vapor part first.",
reveal:[
"Measured pressure = carbon dioxide + water vapor.",
"<strong>748.0 − 24.0 = 724.0 mmHg</strong>",
"Use <strong>724.0 mmHg</strong> as the pressure of dry CO2."
]
},
{
measured:"770 mmHg",
vapor:"29.9 mmHg",
gas:"H2",
options:{total:"770 mmHg",vapor:"29.9 mmHg",dry:"740.1 mmHg"},
correct:"dry",
correctFeedback:"Right — the dry hydrogen pressure is found by subtraction.",
incorrectFeedback:"Not quite — total collected pressure includes both the gas and water vapor, so subtract the vapor pressure.",
reveal:[
"Measured pressure = hydrogen gas + water vapor.",
"<strong>770.0 − 29.9 = 740.1 mmHg</strong>",
"Use <strong>740.1 mmHg</strong> as the pressure of dry H2."
]
},
{
measured:"735 mmHg",
vapor:"18.7 mmHg",
gas:"N2",
options:{total:"735 mmHg",vapor:"18.7 mmHg",dry:"716.3 mmHg"},
correct:"dry",
correctFeedback:"Right — subtract the water vapor pressure to isolate the dry nitrogen pressure.",
incorrectFeedback:"Not quite — the measured pressure is not pure nitrogen yet. Remove the water vapor contribution first.",
reveal:[
"Measured pressure = nitrogen gas + water vapor.",
"<strong>735.0 − 18.7 = 716.3 mmHg</strong>",
"Use <strong>716.3 mmHg</strong> as the pressure of dry N2."
]
},
{
measured:"790 mmHg",
vapor:"32.9 mmHg",
gas:"O2",
options:{total:"790 mmHg",vapor:"32.9 mmHg",dry:"757.1 mmHg"},
correct:"dry",
correctFeedback:"Right — subtracting the water vapor pressure gives the pressure of dry oxygen.",
incorrectFeedback:"Not quite — Dalton's law says the measured pressure is the sum of oxygen and water vapor pressures.",
reveal:[
"Measured pressure = oxygen gas + water vapor.",
"<strong>790.0 − 32.9 = 757.1 mmHg</strong>",
"Use <strong>757.1 mmHg</strong> as the pressure of dry O2."
]
},
{
measured:"752 mmHg",
vapor:"20.4 mmHg",
gas:"He",
options:{total:"752 mmHg",vapor:"20.4 mmHg",dry:"731.6 mmHg"},
correct:"dry",
correctFeedback:"Right — the dry helium pressure is the measured pressure minus the water vapor pressure.",
incorrectFeedback:"Not quite — subtract the water vapor part from the total to get the dry gas pressure.",
reveal:[
"Measured pressure = helium + water vapor.",
"<strong>752.0 − 20.4 = 731.6 mmHg</strong>",
"Use <strong>731.6 mmHg</strong> as the pressure of dry He."
]
},
{
measured:"744 mmHg",
vapor:"22.4 mmHg",
gas:"H2",
options:{total:"744 mmHg",vapor:"22.4 mmHg",dry:"721.6 mmHg"},
correct:"dry",
correctFeedback:"Right — subtracting the vapor pressure gives the dry hydrogen pressure.",
incorrectFeedback:"Not quite — the total reading contains water vapor too, so subtract it before using the gas pressure.",
reveal:[
"Measured pressure = hydrogen gas + water vapor.",
"<strong>744.0 − 22.4 = 721.6 mmHg</strong>",
"Use <strong>721.6 mmHg</strong> as the pressure of dry H2."
]
},
{
measured:"760 mmHg",
vapor:"17.0 mmHg",
gas:"O2",
options:{total:"760 mmHg",vapor:"17.0 mmHg",dry:"743.0 mmHg"},
correct:"dry",
correctFeedback:"Right — subtract the vapor pressure to find the dry oxygen pressure.",
incorrectFeedback:"Not quite — water vapor contributes to the measured pressure, so subtract it first.",
reveal:[
"Measured pressure = oxygen gas + water vapor.",
"<strong>760.0 − 17.0 = 743.0 mmHg</strong>",
"Use <strong>743.0 mmHg</strong> as the pressure of dry O2."
]
},
{
measured:"738 mmHg",
vapor:"26.7 mmHg",
gas:"N2",
options:{total:"738 mmHg",vapor:"26.7 mmHg",dry:"711.3 mmHg"},
correct:"dry",
correctFeedback:"Right — the dry nitrogen pressure is the total minus the water vapor pressure.",
incorrectFeedback:"Not quite — do not use the total collected pressure directly. First remove the vapor-pressure contribution.",
reveal:[
"Measured pressure = nitrogen gas + water vapor.",
"<strong>738.0 − 26.7 = 711.3 mmHg</strong>",
"Use <strong>711.3 mmHg</strong> as the pressure of dry N2."
]
}
];

const idealScenarios=[
{volume:10,aTemp:300,bTemp:700,correct:"b"},
{volume:8,aTemp:650,bTemp:250,correct:"a"},
{volume:12,aTemp:400,bTemp:550,correct:"b"},
{volume:6,aTemp:280,bTemp:520,correct:"b"},
{volume:14,aTemp:600,bTemp:320,correct:"a"},
{volume:9,aTemp:450,bTemp:500,correct:"b"},
{volume:15,aTemp:700,bTemp:350,correct:"a"},
{volume:7,aTemp:260,bTemp:410,correct:"b"},
{volume:11,aTemp:540,bTemp:300,correct:"a"},
{volume:5,aTemp:290,bTemp:640,correct:"b"},
{volume:13,aTemp:610,bTemp:420,correct:"a"},
{volume:16,aTemp:330,bTemp:580,correct:"b"},
{volume:4,aTemp:720,bTemp:310,correct:"a"},
{volume:18,aTemp:360,bTemp:690,correct:"b"}
];

const toolIndex={law:0,setup:0,avog:0,water:0,ideal:0};

function setText(id,text){const el=document.getElementById(id);if(el)el.textContent=text;}
function setHTML(id,html){const el=document.getElementById(id);if(el)el.innerHTML=html;}
function showEl(id,show=true){const el=document.getElementById(id);if(el)el.hidden=!show;}
function setDisabled(id,disabled=true){const el=document.getElementById(id);if(el)el.disabled=disabled;}
function renderChemFormula(formula){
if(!formula)return '';
const chargeMatch=formula.match(/^(.*?)(\d*)([+-])$/);
const coreFormula=chargeMatch?chargeMatch[1]:formula;
const chargeText=chargeMatch?`${chargeMatch[2]||''}${chargeMatch[3]==='-'?'-':'+'}`:'';
const coreMarkup=coreFormula.replace(/(\d+)/g,'<span class="chem-sub">$1</span>');
return `<span class="ion-group">${coreMarkup}${chargeText?`<span class="chem-charge">${chargeText}</span>`:''}</span>`;
}
function renderChemText(text){
if(!text)return '';
const formulas=['CH3OH','C2H6','C2H2','CH4','NH3','PH3','HCl','HBr','HF','H2O','H2S','H2','O2','N2','CO2','He'];
return formulas.reduce((out,formula)=>{
return out.replace(new RegExp(formula.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'g'),renderChemFormula(formula));
},text);
}
function setFeedbackState(id,text){
const el=document.getElementById(id);
if(!el)return;
el.textContent=text;
let state='info';
if(/^Right\b/.test(text))state='correct';
else if(/^Not quite\b/.test(text))state='incorrect';
else if(/click Check\.?$|first\.?$/.test(text))state='pending';
el.dataset.state=state;
}
function arraysEqual(a,b){
if(!a||!b||a.length!==b.length)return false;
for(let i=0;i<a.length;i+=1){
if(a[i]!==b[i])return false;
}
return true;
}
function createPracticeOrder(items,lastOrder,lastItem){
if(items.length<2)return items.slice();
let order=items.slice();
let attempts=0;
do{
order=shuffleList(items);
attempts+=1;
}while(
attempts<12&&
((lastOrder&&arraysEqual(order,lastOrder))||(lastItem!=null&&order[0]===lastItem))
);
if(lastItem!=null&&order[0]===lastItem){
const firstDifferentIndex=order.findIndex(item=>item!==lastItem);
if(firstDifferentIndex>0){
const firstDifferent=order.splice(firstDifferentIndex,1)[0];
order.unshift(firstDifferent);
}
}
if(lastOrder&&arraysEqual(order,lastOrder)&&order.length>1){
const tail=order.pop();
order.unshift(tail);
}
return order;
}
function ensureScenarioIndex(name,list){
const state=scenarioOrderState[name];
if(!state.order.length||state.position>=state.order.length){
state.order=createPracticeOrder(
list.map((_,index)=>index),
state.order,
state.lastIndex
);
state.position=0;
}
toolIndex[name]=state.order[state.position];
return toolIndex[name];
}
function advanceScenario(name,list){
const state=scenarioOrderState[name];
state.lastIndex=ensureScenarioIndex(name,list);
state.position+=1;
ensureScenarioIndex(name,list);
}
function shuffleChoiceGroup(containerId,selector,name){
const container=document.getElementById(containerId);
if(!container)return;
const buttons=Array.from(container.querySelectorAll(selector));
if(buttons.length<2)return;
const nextOrder=createPracticeOrder(buttons,choiceOrderState[name],null);
nextOrder.forEach(btn=>container.appendChild(btn));
choiceOrderState[name]=nextOrder;
}
function getChoiceIds(group){
return {
law:['lawOptBoyle','lawOptCharles','lawOptGay','lawOptCombined'],
setup:['setupOptA','setupOptB','setupOptC'],
avog:['avogOptA','avogOptB','avogOptSame'],
water:['waterOptTotal','waterOptVapor','waterOptDry'],
ideal:['idealOptA','idealOptB']
}[group]||[];
}
function clearChoiceUI(group){
getChoiceIds(group).forEach(id=>{
const el=document.getElementById(id);
if(!el)return;
el.classList.remove('active');
el.setAttribute('aria-pressed','false');
});
toolState[group]=null;
}
function selectChoice(group,value){
toolState[group]=value;
clearChoiceUI(group);
toolState[group]=value;
const selectedMap={
law:{boyle:'lawOptBoyle',charles:'lawOptCharles',gay:'lawOptGay',combined:'lawOptCombined'},
setup:{a:'setupOptA',b:'setupOptB',c:'setupOptC'},
avog:{a:'avogOptA',b:'avogOptB',same:'avogOptSame'},
water:{total:'waterOptTotal',vapor:'waterOptVapor',dry:'waterOptDry'},
ideal:{a:'idealOptA',b:'idealOptB'}
};
const id=selectedMap[group]&&selectedMap[group][value];
if(id){
const selectedEl=document.getElementById(id);
if(selectedEl){
selectedEl.classList.add('active');
selectedEl.setAttribute('aria-pressed','true');
}
}
}
function listHTML(items){return items.map(item=>'<li>'+item+'</li>').join('');}
function shuffleList(items){
const copy=items.slice();
for(let i=copy.length-1;i>0;i--){
const j=Math.floor(Math.random()*(i+1));
[copy[i],copy[j]]=[copy[j],copy[i]];
}
return copy;
}
function renderLawChoices(){
const container=document.getElementById('lawChoices');
if(!container)return;
const baseOrder=['boyle','charles','gay','combined'];
const order=createPracticeOrder(baseOrder,choiceOrderState.law,null);
choiceOrderState.law=order;
container.innerHTML=order.map(key=>{
const choice=lawChoiceMeta[key];
return '<button type="button" class="segment-btn tool-choice-btn explore-choice" id="'+choice.id+'" onclick="selectChoice(\'law\',\''+key+'\')" aria-pressed="false">'+choice.label+'</button>';
}).join('');
}

function renderLawTool(){
const data=lawScenarios[ensureScenarioIndex('law',lawScenarios)];
renderLawChoices();
setText('lawScenario',data.scenario);
setFeedbackState('lawFeedback','Choose one law, then click Check.');
setHTML('lawRevealList',listHTML(data.reveal));
showEl('lawReveal',false);showEl('lawSupport',false);setDisabled('lawRevealBtn',true);setDisabled('lawNextBtn',true);
clearChoiceUI('law');
}
function checkLawTool(){
const data=lawScenarios[ensureScenarioIndex('law',lawScenarios)];
showEl('lawSupport',true);setDisabled('lawRevealBtn',false);setDisabled('lawNextBtn',false);
if(!toolState.law){setFeedbackState('lawFeedback','Choose one law, then click Check.');return;}
setFeedbackState('lawFeedback',toolState.law===data.correct?data.correctFeedback:data.incorrectFeedback);
}
function revealLawTool(){showEl('lawReveal',true);}
function nextLawTool(){advanceScenario('law',lawScenarios);renderLawTool();}

function renderSetupTool(){
const data=setupScenarios[ensureScenarioIndex('setup',setupScenarios)];
setHTML('setupProblem',data.problem);
setHTML('setupOptA',data.options.a);
setHTML('setupOptB',data.options.b);
setHTML('setupOptC',data.options.c);
setFeedbackState('setupFeedback','Choose one setup, then click Check.');
setHTML('setupRevealList',listHTML(data.reveal));
showEl('setupReveal',false);showEl('setupSupport',false);setDisabled('setupRevealBtn',true);setDisabled('setupNextBtn',true);
clearChoiceUI('setup');
shuffleChoiceGroup('setupChoices','.explore-choice','setup');
}
function checkSetupTool(){
const data=setupScenarios[ensureScenarioIndex('setup',setupScenarios)];
showEl('setupSupport',true);setDisabled('setupRevealBtn',false);setDisabled('setupNextBtn',false);
if(!toolState.setup){setFeedbackState('setupFeedback','Choose one setup, then click Check.');return;}
setFeedbackState('setupFeedback',toolState.setup===data.correct?data.correctFeedback:data.incorrectFeedback);
}
function revealSetupTool(){showEl('setupReveal',true);}
function nextSetupTool(){advanceScenario('setup',setupScenarios);renderSetupTool();}

function renderAvogTool(){
const data=avogScenarios[ensureScenarioIndex('avog',avogScenarios)];
setHTML('avogSampleA',renderChemText(data.sampleA));
setHTML('avogSampleB',renderChemText(data.sampleB));
setFeedbackState('avogFeedback','Choose one answer, then click Check.');
setText('avogRevealTitle',data.revealTitle);
setHTML('avogRevealList',renderChemText(listHTML(data.reveal)));
showEl('avogReveal',false);showEl('avogSupport',false);setDisabled('avogRevealBtn',true);setDisabled('avogNextBtn',true);
clearChoiceUI('avog');
shuffleChoiceGroup('avogChoices','.explore-choice','avog');
}
function checkAvogTool(){
const data=avogScenarios[ensureScenarioIndex('avog',avogScenarios)];
showEl('avogSupport',true);setDisabled('avogRevealBtn',false);setDisabled('avogNextBtn',false);
if(!toolState.avog){setFeedbackState('avogFeedback','Choose one answer, then click Check.');return;}
setFeedbackState('avogFeedback',toolState.avog===data.correct?data.correctFeedback:data.incorrectFeedback);
}
function revealAvogTool(){showEl('avogReveal',true);}
function nextAvogTool(){advanceScenario('avog',avogScenarios);renderAvogTool();}

function renderWaterTool(){
const data=waterScenarios[ensureScenarioIndex('water',waterScenarios)];
setHTML('waterMeasured',data.measured);
setHTML('waterVapor',data.vapor);
setHTML('waterGas',renderChemText(data.gas));
setHTML('waterOptTotal',data.options.total);
setHTML('waterOptVapor',data.options.vapor);
setHTML('waterOptDry',data.options.dry);
setFeedbackState('waterFeedback','Choose one pressure, then click Check.');
setHTML('waterRevealList',renderChemText(listHTML(data.reveal)));
showEl('waterReveal',false);showEl('waterSupport',false);setDisabled('waterRevealBtn',true);setDisabled('waterNextBtn',true);
clearChoiceUI('water');
shuffleChoiceGroup('waterChoices','.explore-choice','water');
}
function checkWaterTool(){
const data=waterScenarios[ensureScenarioIndex('water',waterScenarios)];
showEl('waterSupport',true);setDisabled('waterRevealBtn',false);setDisabled('waterNextBtn',false);
if(!toolState.water){setFeedbackState('waterFeedback','Choose one pressure, then click Check.');return;}
setFeedbackState('waterFeedback',toolState.water===data.correct?data.correctFeedback:data.incorrectFeedback);
}
function revealWaterTool(){showEl('waterReveal',true);}
function nextWaterTool(){advanceScenario('water',waterScenarios);renderWaterTool();}

function updateIdealBase(showSliderPoint=false){
const g=sc('idealCanvas');if(!g)return;
const{ctx,W,H}=g;const pad={l:55,r:20,t:15,b:36};
const Vmax=32,Pmax=6,R=0.08206;
const scX=v=>pad.l+(v/Vmax)*(W-pad.l-pad.r);const scY=p=>H-pad.b-(p/Pmax)*(H-pad.t-pad.b);
axes(ctx,W,H,pad,Vmax,Pmax,'Volume (L)','Pressure (atm)',Vmax/5,1);
[{T:200,c:'#bfdbfe'},{T:300,c:'#60a5fa'},{T:500,c:'#2563eb'},{T:700,c:'#1e3a8a'}].forEach(({T,c})=>{
ctx.strokeStyle=c;ctx.lineWidth=1.8;ctx.beginPath();let f=true;
for(let v=0.3;v<=Vmax;v+=0.1){const p=R*T/v;if(p>Pmax)continue;if(f){ctx.moveTo(scX(v),scY(p));f=false;}else ctx.lineTo(scX(v),scY(p));}
ctx.stroke();
const vL=R*T/(Pmax*0.85);if(vL>0&&vL<=Vmax){ctx.fillStyle=c;ctx.font='10px DM Mono,monospace';ctx.textAlign='left';ctx.fillText(T+'K',scX(vL)+3,scY(Pmax*0.85)-3);}
});
ctx.fillStyle='#0f172a';ctx.font='bold 11px DM Mono,monospace';ctx.textAlign='left';
const data=idealScenarios[ensureScenarioIndex('ideal',idealScenarios)];
const VA=data.volume,TA=data.aTemp,PA=R*TA/VA,VB=data.volume,TB=data.bTemp,PB=R*TB/VB;
dot(ctx,scX(VA),scY(PA),'A');
dot(ctx,scX(VB),scY(PB),'B');
if(showSliderPoint){
const V=parseFloat(document.getElementById('idealV').value);
const Ts=parseFloat(document.getElementById('idealT').value);
const P=R*Ts/V;
if(V>0&&V<=Vmax&&P>=0&&P<=Pmax)dot(ctx,scX(V),scY(P),'S');
}
}

function renderIdealTool(){
const data=idealScenarios[ensureScenarioIndex('ideal',idealScenarios)];
setFeedbackState('idealReadout','Choose Point A or Point B, then click Check.');
setText('idealSliderReadout','Move the sliders after the reveal to test more points.');
showEl('idealSliderPanel',false);setDisabled('idealRevealBtn',true);setDisabled('idealNextBtn',true);
clearChoiceUI('ideal');
shuffleChoiceGroup('idealChoices','.explore-choice','ideal');
updateIdealBase(false);
const elA=document.getElementById('idealOptA'); const elB=document.getElementById('idealOptB');
if(elA)elA.textContent='Point A ('+data.aTemp+' K)';
if(elB)elB.textContent='Point B ('+data.bTemp+' K)';
}
function checkIdealTool(){
const data=idealScenarios[ensureScenarioIndex('ideal',idealScenarios)];
setDisabled('idealRevealBtn',false);setDisabled('idealNextBtn',false);
if(!toolState.ideal){setFeedbackState('idealReadout','Choose Point A or Point B, then click Check.');return;}
setFeedbackState('idealReadout',toolState.ideal===data.correct?'Right — at the same volume, the hotter gas has the higher pressure because pressure increases with temperature in PV = nRT.':'Not quite — compare the temperatures at the same volume. When volume stays fixed, higher temperature means higher pressure. Check which point is on the hotter curve.');
}
function revealIdealTool(){
showEl('idealSliderPanel',true);
const data=idealScenarios[ensureScenarioIndex('ideal',idealScenarios)];
const winner=data.correct==='a'?'Point A':'Point B';
setFeedbackState('idealReadout',winner+' is on the hotter curve, so '+winner+' has the higher pressure at the same volume.');
updateIdealSlider();
}
function nextIdealTool(){advanceScenario('ideal',idealScenarios);renderIdealTool();}
function updateIdealSlider(){
const V=parseFloat(document.getElementById('idealV').value);
const Ts=parseFloat(document.getElementById('idealT').value);
document.getElementById('idealVVal').textContent=V.toFixed(1)+' L';
document.getElementById('idealTVal').textContent=Ts+' K ('+(Ts-273).toFixed(0)+'°C)';
const P=0.08206*Ts/V;
document.getElementById('idealSliderReadout').textContent='n = 1.000 mol  |  V = '+V.toFixed(2)+' L  |  T = '+Ts+' K  |  P = '+P.toFixed(4)+' atm';
updateIdealBase(true);
}

window.addEventListener('load',()=>{updateBoyle();updateCharles();updateGay();renderLawTool();renderSetupTool();renderAvogTool();renderWaterTool();renderIdealTool();});
window.addEventListener('resize',()=>{updateBoyle();updateCharles();updateGay();updateIdealBase(document.getElementById('idealSliderPanel')&&!document.getElementById('idealSliderPanel').hidden);});
