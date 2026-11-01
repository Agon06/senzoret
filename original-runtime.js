let current=0,part=0,sourcePage=0;
const card=document.getElementById('card');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function button(label,fn,active=false){const b=document.createElement('button');b.textContent=label;b.onclick=fn;if(active)b.className='primary';return b}
function chooseTask(i){current=i;part=0;render()}
function render(){
 const t=tasks[current],images=solutionImages[current],nav=document.getElementById('nav');nav.replaceChildren();
 tasks.forEach((x,i)=>{const b=button(x[0],()=>chooseTask(i),i===current);b.title=x[1];b.setAttribute('aria-label','Detyra '+x[0]+': '+x[1]);nav.append(b)});
 card.innerHTML='<div class="taskbar"><h2>'+esc(t[0]+' · '+t[1])+'</h2><button id="source">PDF origjinal ↗</button></div><div class="workspace"><section class="question-pane"><p class="label">PYETJA ORIGJINALE</p><div class="question-images" id="question"></div></section><section class="guide"><div class="step-heading"><h3>Zgjidhja e profesorit</h3><span>'+(images.length>1?'Pjesa '+(part+1)+' / '+images.length:'')+'</span></div><div class="solution-image" id="solution"></div><div class="bottom" id="controls"></div></section></div>';
 questionImages[current].forEach(src=>{const im=document.createElement('img');im.src=src;im.alt='Pyetja origjinale '+t[0];document.getElementById('question').append(im)});
 const im=document.createElement('img');im.src=images[part];im.alt='Zgjidhja origjinale '+t[0]+', pjesa '+(part+1);document.getElementById('solution').append(im);
 const controls=document.getElementById('controls');if(images.length>1){const prev=button('← Pjesa paraprake',()=>{part--;render()});prev.disabled=part===0;controls.append(prev);if(part<images.length-1)controls.append(button('Pjesa tjetër →',()=>{part++;render()},true))}
 if(part===images.length-1&&current<tasks.length-1)controls.append(button('Detyra tjetër →',()=>chooseTask(current+1),true));
 document.getElementById('source').onclick=()=>{sourcePage=0;renderSource();document.getElementById('sourceDialog').showModal()};
}
function sourcePages(){return current===1?[1,2]:current===2?[2,3]:current===6?[5,6,7]:current===8?[7,8]:current===10?[8,9,10,11,12]:current===11?[12,13]:current===12?[13,14,15]:[tasks[current][4]]}
function renderSource(){const nums=sourcePages(),panel=document.getElementById('sourceContent');panel.innerHTML='<div class="source-controls"><button id="sourcePrev">←</button><span>Faqja '+nums[sourcePage]+' e PDF-së</span><button id="sourceNext">→</button><button id="sourceClose">Mbyll ✕</button></div><img alt="Faqja origjinale '+nums[sourcePage]+'" src="'+pages[nums[sourcePage]]+'">';const p=document.getElementById('sourcePrev'),n=document.getElementById('sourceNext');p.disabled=sourcePage===0;n.disabled=sourcePage===nums.length-1;p.onclick=()=>{sourcePage--;renderSource()};n.onclick=()=>{sourcePage++;renderSource()};document.getElementById('sourceClose').onclick=()=>document.getElementById('sourceDialog').close()}
render();
