
const $=id=>document.getElementById(id),COL=['#1a6fd4','#d33','#1a9a4a','#d08000'],lin=(a,b,n)=>Array.from({length:n},(_,i)=>a+(b-a)*i/(n-1));
function plot(id,S,o={}){const c=$(id),g=c.getContext('2d'),W=c.width,H=c.height,m={l:82,r:22,t:52,b:54};g.clearRect(0,0,W,H);if(!S.length)return;
 const xs=S.flatMap(s=>s.x),ys=S.flatMap(s=>s.y);let x0=o.x0??Math.min(...xs),x1=o.x1??Math.max(...xs),y0=o.y0??Math.min(...ys),y1=o.y1??Math.max(...ys);if(x0===x1){x0-=1;x1+=1}if(y0===y1){const d=Math.abs(y0)*.08||1;y0-=d;y1+=d}
 const X=v=>m.l+(v-x0)/(x1-x0)*(W-m.l-m.r),Y=v=>H-m.b-(v-y0)/(y1-y0)*(H-m.t-m.b),fg=getComputedStyle(document.body).color;
 g.font='13px system-ui';g.textBaseline='middle';g.strokeStyle=fg;g.fillStyle=fg;g.globalAlpha=.16;
 for(let i=0;i<=5;i++){const a=x0+(x1-x0)*i/5,b=y0+(y1-y0)*i/5,xx=X(a),yy=Y(b);g.beginPath();g.moveTo(xx,m.t);g.lineTo(xx,H-m.b);g.moveTo(m.l,yy);g.lineTo(W-m.r,yy);g.stroke();g.globalAlpha=.9;g.textAlign='center';g.fillText(Number(a.toPrecision(4)).toString(),xx,H-m.b+17);g.textAlign='right';g.fillText(Number(b.toPrecision(4)).toString(),m.l-10,yy);g.globalAlpha=.16}
 g.globalAlpha=1;g.strokeStyle=fg;g.strokeRect(m.l,m.t,W-m.l-m.r,H-m.t-m.b);g.font='14px system-ui';g.textAlign='center';g.fillText(o.xl||'',(m.l+W-m.r)/2,H-13);g.save();g.translate(18,(m.t+H-m.b)/2);g.rotate(-Math.PI/2);g.fillText(o.yl||'',0,0);g.restore();
 g.save();g.beginPath();g.rect(m.l,m.t,W-m.l-m.r,H-m.t-m.b);g.clip();S.forEach((s,k)=>{g.strokeStyle=s.c||COL[k%4];g.lineWidth=2.5;g.setLineDash(s.d?[7,4]:[]);g.beginPath();s.x.forEach((v,i)=>i?g.lineTo(X(v),Y(s.y[i])):g.moveTo(X(v),Y(s.y[i])));g.stroke()});g.restore();g.setLineDash([]);
 (()=>{const items=S.map((s,k)=>({s,k,w:24+g.measureText(s.n||'').width+18})),total=items.reduce((a,x)=>a+x.w,0)+12;let x=W-m.r-total;g.fillStyle='rgba(255,255,255,.88)';g.fillRect(x,5,total,34);g.strokeStyle='rgba(128,128,128,.22)';g.strokeRect(x,5,total,34);items.forEach(({s,k,w})=>{g.fillStyle=s.c||COL[k%4];g.fillRect(x+8,20,16,3);g.fillStyle=fg;g.textAlign='left';g.textBaseline='middle';g.fillText(s.n||'',x+30,21);x+=w})})();return{dot:(x,y,c)=>{g.fillStyle=c||'#d33';g.beginPath();g.arc(X(x),Y(y),5,0,7);g.fill()}}}
document.documentElement.lang=localStorage.cc_lang||'en';
const L=(a,b)=>document.documentElement.lang=='en'?b:a;
function ctx(id){return $(id).getContext('2d')}
function loop(id,fn){const c=$(id);let t=0,run=true,last=performance.now();const w=document.createElement('div');w.className='cvw';c.parentNode.insertBefore(w,c);const b=document.createElement('button');b.className='pz';b.textContent='⏸ '+L('Jeda','Pause');b.onclick=()=>{run=!run;b.textContent=(run?'⏸ ':'▶ ')+(run?L('Jeda','Pause'):L('Putar','Play'))};w.append(c,b);
 (function f(n){const dt=Math.max(0,Math.min(.1,(n-last)/1000));if(run)t+=dt;last=n;try{fn(t)}catch(e){console.error(e)}requestAnimationFrame(f)})(last)}
