let current=0,step=0,recall=false,revealed=false,sourcePage=0;
const card=document.getElementById('card');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function button(label,fn,active=false){const b=document.createElement('button');b.textContent=label;b.onclick=fn;if(active)b.className='primary';return b}
function chooseTask(i){current=i;step=0;revealed=false;render()}
function moveStep(i){step=i;revealed=false;render()}
function render(){
 const t=tasks[current],ls=lessons[current],s=ls[step],nav=document.getElementById('nav');nav.replaceChildren();
 tasks.forEach((x,i)=>{const b=button(x[0],()=>chooseTask(i),i===current);b.title=x[1];b.setAttribute('aria-label','Detyra '+x[0]+': '+x[1]);b.setAttribute('aria-current',i===current?'page':'false');nav.append(b)});
 const phase=step<introCounts[current]-2?'LEXOJMË TË DHËNAT':step===introCounts[current]-2?'ÇKA KËRKOHET?':step===introCounts[current]-1?'ZGJEDHIM LIDHJEN':'ZGJIDHJA E PROFESORIT';
 card.innerHTML='<div class="taskbar"><h2>'+esc(t[0]+' · '+t[1])+'</h2><button id="source">PDF origjinal ↗</button></div><div class="workspace"><section class="question-pane"><p class="label">PYETJA ORIGJINALE</p><div class="question-images" id="question"></div></section><section class="guide"><p class="label phase">'+phase+'</p><div class="step-heading"><h3>'+esc(s[0])+'</h3><span>Hapi '+(step+1)+' / '+ls.length+'</span></div><div class="step-tabs" id="steps" aria-label="Hapat e mësimit"></div><div class="step-body" id="body" aria-live="polite"></div><div class="bottom" id="controls"></div><p class="hint">Lexojmë → Çka kemi? → Çka kërkohet? → Pse kjo formulë? → Zgjidhim.</p></section></div>';
 questionImages[current].forEach(src=>{const im=document.createElement('img');im.src=src;im.alt='Pyetja '+t[0]+' si në test';document.getElementById('question').append(im)});
 const nearby=[...new Set([0,...Array.from({length:5},(_,j)=>step+j-2),ls.length-1])].filter(i=>i>=0&&i<ls.length).sort((a,b)=>a-b);
 nearby.forEach((i,j)=>{if(j&&i-nearby[j-1]>1){const gap=document.createElement('span');gap.textContent='…';gap.setAttribute('aria-hidden','true');document.getElementById('steps').append(gap)}const x=ls[i],b=button(String(i+1),()=>moveStep(i),i===step);b.title=x[0];b.setAttribute('aria-label','Hapi '+(i+1)+': '+x[0]);b.setAttribute('aria-current',i===step?'step':'false');document.getElementById('steps').append(b)});
 const body=document.getElementById('body');
 if(recall&&!revealed){body.innerHTML='<p class="recall-question">'+esc(s[4])+'</p><p class="explanation">Mendoje hapin, pastaj kontrolloje.</p>';body.append(button('Shfaq hapin',()=>{revealed=true;render()},true))}
 else{
  body.innerHTML='<div class="formula">'+esc(s[1])+'</div>';
  const p=document.createElement('p');p.className='explanation';p.textContent=s[2];body.append(p);
  if(step>=introCounts[current]){const memory=document.createElement('p');memory.className='memory';memory.textContent='Mbaje mend: '+s[3];body.append(memory)}
  if(current===10&&step-introCounts[current]>=16){const p=document.createElement('p');p.className='note';p.textContent='Kujdes: PDF-ja ka gabim këtu. 606,66·10⁻³ V = 0,60666 V, jo 0,66 V. Përfundimi 1,92 V është ai i dokumentit; me korrigjimin del ≈ 1,813 V.';body.append(p)}
 }
 const controls=document.getElementById('controls');const prev=button('← Para',()=>moveStep(step-1));prev.disabled=step===0;controls.append(prev,button(recall?'Shpjegoma':'Provoje pa e pa',()=>{recall=!recall;revealed=false;render()}));
 controls.append(step<ls.length-1?button('Hapi tjetër →',()=>moveStep(step+1),true):button(current<tasks.length-1?'Detyra tjetër →':'Prej fillimit ↺',()=>chooseTask((current+1)%tasks.length),true));
 document.getElementById('source').onclick=()=>{sourcePage=0;renderSource();document.getElementById('sourceDialog').showModal()};
}
function sourcePages(){return current===1?[1,2]:current===2?[2,3]:current===6?[5,6,7]:current===8?[7,8]:current===10?[8,9,10,11,12]:current===11?[12,13]:current===12?[13,14,15]:[tasks[current][4]]}
function renderSource(){const nums=sourcePages(),panel=document.getElementById('sourceContent');panel.innerHTML='<div class="source-controls"><button id="sourcePrev">←</button><span>Faqja '+nums[sourcePage]+' e PDF-së</span><button id="sourceNext">→</button><button id="sourceClose">Mbyll ✕</button></div><img alt="Faqja origjinale '+nums[sourcePage]+'" src="'+pages[nums[sourcePage]]+'">';const p=document.getElementById('sourcePrev'),n=document.getElementById('sourceNext');p.disabled=sourcePage===0;n.disabled=sourcePage===nums.length-1;p.onclick=()=>{sourcePage--;renderSource()};n.onclick=()=>{sourcePage++;renderSource()};document.getElementById('sourceClose').onclick=()=>document.getElementById('sourceDialog').close()}
render();
