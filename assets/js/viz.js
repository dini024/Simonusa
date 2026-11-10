
const $=id=>document.getElementById(id),COL=['#1a6fd4','#d33','#1a9a4a','#d08000'],lin=(a,b,n)=>Array.from({length:n},(_,i)=>a+(b-a)*i/(n-1));
function plot(id,S,o={}){const c=$(id),g=c.getContext('2d'),W=c.width,H=c.height,m={l:56,r:12,t:12,b:36};g.clearRect(0,0,W,H);
 const xs=S.flatMap(s=>s.x),ys=S.flatMap(s=>s.y),x0=o.x0??Math.min(...xs),x1=o.x1??Math.max(...xs),y0=o.y0??Math.min(...ys),y1=o.y1??Math.max(...ys);
 const X=v=>m.l+(v-x0)/(x1-x0)*(W-m.l-m.r),Y=v=>H-m.b-(v-y0)/((y1-y0)||1)*(H-m.t-m.b),fg=getComputedStyle(document.body).color;
 g.font='12px system-ui';g.strokeStyle=g.fillStyle=fg;g.globalAlpha=.35;g.strokeRect(m.l,m.t,W-m.l-m.r,H-m.t-m.b);g.globalAlpha=.8;
 for(let i=0;i<=5;i++){const a=x0+(x1-x0)*i/5,b=y0+(y1-y0)*i/5;g.fillText(+a.toPrecision(3),X(a)-10,H-m.b+14);g.fillText(+b.toPrecision(4),2,Y(b)+4)}
 g.fillText(o.xl||'',W/2-30,H-6);g.save();g.translate(12,H/2+30);g.rotate(-Math.PI/2);g.fillText(o.yl||'',0,0);g.restore();g.globalAlpha=1;
 g.save();g.beginPath();g.rect(m.l,m.t,W-m.l-m.r,H-m.t-m.b);g.clip();
 S.forEach((s,k)=>{g.strokeStyle=s.c||COL[k%4];g.lineWidth=2;g.setLineDash(s.d?[6,4]:[]);g.beginPath();s.x.forEach((v,i)=>i?g.lineTo(X(v),Y(s.y[i])):g.moveTo(X(v),Y(s.y[i])));g.stroke()});g.restore();g.setLineDash([]);
 S.forEach((s,k)=>{g.fillStyle=s.c||COL[k%4];g.fillText(s.n||'',m.l+10,m.t+16+15*k)});
 return{dot:(x,y,c)=>{g.fillStyle=c||'#d33';g.beginPath();g.arc(X(x),Y(y),5,0,7);g.fill()}}}

document.documentElement.lang=localStorage.cc_lang||'en';
const L=(a,b)=>document.documentElement.lang=='en'?b:a;
function ctx(id){return $(id).getContext('2d')}
function loop(id,fn){const c=$(id);let t=0,run=true,last=performance.now();const w=document.createElement('div');w.className='cvw';c.parentNode.insertBefore(w,c);const b=document.createElement('button');b.className='pz';b.textContent='⏸ '+L('Jeda','Pause');b.onclick=()=>{run=!run;b.textContent=(run?'⏸ ':'▶ ')+(run?L('Jeda','Pause'):L('Putar','Play'))};w.append(c,b);
 (function f(n){const dt=Math.max(0,Math.min(.1,(n-last)/1000));if(run)t+=dt;last=n;try{fn(t)}catch(e){console.error(e)}requestAnimationFrame(f)})(last)}
