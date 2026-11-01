let current=0,step=0,part=0,view='question',sourcePage=0;
const card=document.getElementById('card');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const partMaps=[
 [0,0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0,1], [0,0,0,0,0,0],
 [0,0,0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0,0,0,0],
 Array(12).fill(0),Array(5).fill(0),Array(5).fill(0),
 [0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,3],
 [0,0,0,1,1,1,1,1], [0,0,0,0,0,0,1]
];
function button(label,fn,active=false){const b=document.createElement('button');b.textContent=label;b.onclick=fn;if(active)b.className='primary';return b}
function chooseTask(i){current=i;moveStep(0)}
function moveStep(i){step=i;view=step<introCounts[current]?'question':'solution';part=step<introCounts[current]?0:(partMaps[current][step-introCounts[current]]??0);render()}
function render(){
 const t=tasks[current],s=lessons[current][step],intro=step<introCounts[current],nav=document.getElementById('nav');nav.replaceChildren();
 tasks.forEach((x,i)=>{const b=button(x[0],()=>chooseTask(i),i===current);b.title=x[1];b.setAttribute('aria-label','Detyra '+x[0]+': '+x[1]);nav.append(b)});
 card.innerHTML='<div class="taskbar"><h2>'+esc(t[0]+' · '+t[1])+'</h2><button id="source">PDF origjinal ↗</button></div><div class="workspace"><section class="question-pane"><div class="document-tabs" id="documentTabs"></div><div class="question-images" id="original"></div><div class="document-controls" id="parts"></div></section><section class="guide"><p class="label">'+(intro?'E KUPTOJMË PYETJEN':'SHPJEGIM PRANË ORIGJINALIT')+'</p><div class="step-heading"><h3>'+esc(s[0])+'</h3><span>'+(step+1)+' / '+lessons[current].length+'</span></div><div class="step-body" id="reason" aria-live="polite"></div><div class="bottom" id="controls"></div></section></div>';
 const tabs=document.getElementById('documentTabs');tabs.append(button('Pyetja',()=>{view='question';render()},view==='question'),button('Zgjidhja e profesorit',()=>{view='solution';render()},view==='solution'));
 const sources=view==='question'?questionImages[current]:[solutionImages[current][part]];
 sources.forEach(src=>{const im=document.createElement('img');im.src=src;im.alt=view==='question'?'Pyetja origjinale '+t[0]:'Zgjidhja origjinale '+t[0]+', pjesa '+(part+1);document.getElementById('original').append(im)});
 if(view==='solution'&&solutionImages[current].length>1){const parts=document.getElementById('parts');solutionImages[current].forEach((_,i)=>parts.append(button('Pjesa '+(i+1),()=>{part=i;render()},part===i)))}
 const reason=document.getElementById('reason');
 reason.innerHTML=(intro?'<div class="formula">'+esc(s[1])+'</div>':'<p class="label">PSE E BËN PROFESORI KËTË HAP?</p>')+'<p class="explanation method-reason">'+esc(s[2])+'</p>';
 if(!intro){const memory=document.createElement('p');memory.className='memory';memory.textContent='Lidhja që duhet me mbajtë mend: '+s[3];reason.append(memory)}
 if(step+1<lessons[current].length){const next=document.createElement('p');next.className='next-link';next.textContent='Pastaj: '+lessons[current][step+1][0];reason.append(next)}
 const controls=document.getElementById('controls'),prev=button('← Para',()=>moveStep(step-1));prev.disabled=step===0;controls.append(prev);
 controls.append(step<lessons[current].length-1?button('E kuptova · Vazhdo →',()=>moveStep(step+1),true):button(current<tasks.length-1?'Detyra tjetër →':'Prej fillimit ↺',()=>chooseTask((current+1)%tasks.length),true));
 document.getElementById('source').onclick=()=>{sourcePage=0;renderSource();document.getElementById('sourceDialog').showModal()};
}
function sourcePages(){return current===1?[1,2]:current===2?[2,3]:current===6?[5,6,7]:current===8?[7,8]:current===10?[8,9,10,11,12]:current===11?[12,13]:current===12?[13,14,15]:[tasks[current][4]]}
function renderSource(){const nums=sourcePages(),panel=document.getElementById('sourceContent');panel.innerHTML='<div class="source-controls"><button id="sourcePrev">←</button><span>Faqja '+nums[sourcePage]+' e PDF-së</span><button id="sourceNext">→</button><button id="sourceClose">Mbyll ✕</button></div><img alt="Faqja origjinale '+nums[sourcePage]+'" src="'+pages[nums[sourcePage]]+'">';const p=document.getElementById('sourcePrev'),n=document.getElementById('sourceNext');p.disabled=sourcePage===0;n.disabled=sourcePage===nums.length-1;p.onclick=()=>{sourcePage--;renderSource()};n.onclick=()=>{sourcePage++;renderSource()};document.getElementById('sourceClose').onclick=()=>document.getElementById('sourceDialog').close()}
render();
