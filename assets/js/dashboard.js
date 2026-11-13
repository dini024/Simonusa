const MOL={},COLS=['#1a6fd4','#d33','#1a9a4a','#d08000','#8a3fd0','#0aa','#a50','#555'],col=i=>COLS[i%8],names=()=>Object.keys(MOL);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const nums=t=>t.split(/\r?\n/).map(l=>l.trim().split(/[\s,;]+/).map(Number)).filter(a=>a.length>=2&&isFinite(a[0])&&isFinite(a[1]));
const rd=(f,b)=>new Promise(r=>{const x=new FileReader();x.onload=()=>r(x.result);b?x.readAsDataURL(f):x.readAsText(f)});
let cur='';
function orbitalMoleculeName(filename){
 return filename
  .replace(/\.(cube|cub|png|jpe?g|webp)$/i,'')
  .replace(/(?:^|[ _.-])(HOMO|LUMO|HIGHEST[_ -]?OCCUPIED|LOWEST[_ -]?UNOCCUPIED|FRONTIER[_ -]?ORBITAL)(?=$|[ _.-])/ig,' ')
  .replace(/[ _.-]+/g,' ').trim();
}
async function up(role,files){
 const entered=$('mn').value.trim();
 for(const f of files){
  let nm=entered;
  if(!nm&&(role==='ch'||role==='cl')){
   // Pair the second orbital with the currently selected molecule first.
   // This handles common filenames such as HOMO.cube + LUMO.cube,
   // where the filenames themselves contain no common molecule name.
   const counterpart=role==='ch'?'cl':'ch';
   if(cur&&MOL[cur]&&(MOL[cur][counterpart]||MOL[cur][counterpart+'i']))nm=cur;
   if(!nm)nm=orbitalMoleculeName(f.name);
   if(!nm&&cur&&MOL[cur])nm=cur;
   if(!nm){const candidates=names().filter(n=>!MOL[n][counterpart]);if(candidates.length===1)nm=candidates[0]}
   if(!nm)nm='Molecule 1';
  }
  if(!nm)nm=f.name.replace(/\.[^.]+$/,'');
  const m=MOL[nm]||(MOL[nm]={});
  if(role==='out'){
   const t=await rd(f),o=parse(t,f.name);
   if(!o.ex&&!o.geom){const a=nums(t);if(a.length)o.ex=a.map(([w,x],i)=>({n:i+1,sym:'',E:1239.84/w,nm:w,f:x,tr:[]}))}
   Object.keys(o).forEach(k=>{if(o[k]!==undefined)m[k]=o[k]});
  }else if(role==='xyz'){
   const L=(await rd(f)).trim().split(/\r?\n/),n=+L[0];
   m.geom=L.slice(2,2+n).map(l=>{const p=l.trim().split(/\s+/);return[p[0],+p[1],+p[2],+p[3]]});
  }else if(role==='ch'||role==='cl'){
   const im=f.type.startsWith('image')||/\.(png|jpe?g|webp)$/i.test(f.name);
   if(im){m[role+'i']=await rd(f,true);delete m[role]}else{m[role]=await rd(f,false);delete m[role+'i']}
   m[role+'Name']=f.name;
   cur=nm;
  }else if(role==='ex')m.exp=nums(await rd(f));
  else if(role==='jv')m.jv=nums(await rd(f));
 }
 render();
}
document.querySelectorAll('.up').forEach(i=>i.onchange=async e=>{await up(i.dataset.r,e.target.files);i.value=''});
function render(){const ns=names();if(!ns.includes(cur))cur=ns[0]||'';$('sel').innerHTML=ns.map(n=>`<option ${n==cur?'selected':''}>${esc(n)}</option>`).join('');
 $('chips').innerHTML=ns.map((n,i)=>`<span style="color:${col(i)}">● ${esc(n)}</span> <button data-d="${esc(n)}">×</button> `).join('')||'Belum ada molekul. Isi nama lalu unggah berkas.';rGal();rStr();rFreq();rEl();rOp();rPVin();drawPV()}
$('chips').onclick=e=>{if(e.target.dataset.d){delete MOL[e.target.dataset.d];render()}};$('sel').onchange=e=>{cur=e.target.value;rEl()};
function xyzOf(G){return G.length+'\n\n'+G.map(a=>a.join(' ')).join('\n')}
function view3d(el,G){const v=$3Dmol.createViewer(el,{backgroundColor:'white'});v.addModel(xyzOf(G),'xyz');v.setStyle({},{stick:{radius:.15},sphere:{scale:.25}});v.zoomTo();v.render();return v}
function rGal(){$('gal').innerHTML='';names().filter(n=>MOL[n].geom).forEach(n=>{const d=document.createElement('div');d.className='card';d.innerHTML='<b>'+esc(n)+'</b> ('+MOL[n].geom.length+' atom)<div class="v" style="height:240px"></div>';$('gal').append(d);view3d(d.lastChild,MOL[n].geom)})}
// struktur
const A3=(G,i)=>G[i-1],dh=(G,i,j,k,l)=>{const b1=sub(A3(G,j),A3(G,i)),b2=sub(A3(G,k),A3(G,j)),b3=sub(A3(G,l),A3(G,k)),n1=cr(b1,b2),n2=cr(b2,b3);return Math.atan2(dot(cr(n1,n2),b2)/nr(b2),dot(n1,n2))*180/Math.PI};
function planar(G){const hv=G.filter(a=>a[0]!='H'),n=hv.length;if(n<4)return NaN;const m=[1,2,3].map(d=>hv.reduce((s,a)=>s+a[d],0)/n),C=[[0,0,0],[0,0,0],[0,0,0]];hv.forEach(a=>{const d=[a[1]-m[0],a[2]-m[1],a[3]-m[2]];for(let i=0;i<3;i++)for(let j=0;j<3;j++)C[i][j]+=d[i]*d[j]});
 const q=(C[0][0]+C[1][1]+C[2][2])/3,B=C.map((r,i)=>r.map((v,j)=>v-(i==j?q:0))),p=Math.sqrt(B.flat().reduce((s,v)=>s+v*v,0)/6)||1e-9,b=B.map(r=>r.map(v=>v/p)),det=b[0][0]*(b[1][1]*b[2][2]-b[1][2]*b[2][1])-b[0][1]*(b[1][0]*b[2][2]-b[1][2]*b[2][0])+b[0][2]*(b[1][0]*b[2][1]-b[1][1]*b[2][0]);return Math.sqrt(Math.max(0,q+2*p*Math.cos(Math.acos(Math.max(-1,Math.min(1,det/2)))/3+2*Math.PI/3))/n)}
function rStr(){const ms=$('ms').value.split('\n').map(l=>l.trim().split(/\s+/)).filter(a=>a.length>=3&&['bond','angle','dihedral'].includes(a[0])),ns=names().filter(n=>MOL[n].geom);
 $('tstr').innerHTML='<tr><th>Molekul</th>'+ms.map(a=>`<th>${esc(a[1])}</th>`).join('')+'<th>Planaritas RMSD (Å)</th><th>Kelas (heuristik)</th></tr>'+ns.map(n=>{const G=MOL[n].geom,v=ms.map(a=>{const ix=a.slice(2).map(Number);if(ix.some(i=>!G[i-1]))return'—';return a[0]=='bond'?dist(A3(G,ix[0]),A3(G,ix[1])).toFixed(3)+' Å':a[0]=='angle'?(()=>{const u=sub(A3(G,ix[0]),A3(G,ix[1])),w=sub(A3(G,ix[2]),A3(G,ix[1]));return(Math.acos(dot(u,w)/nr(u)/nr(w))*180/Math.PI).toFixed(1)+'°'})():dh(G,...ix).toFixed(1)+'°'}),p=planar(G);
  return`<tr><td>${esc(n)}</td>${v.map(x=>'<td>'+x+'</td>').join('')}<td>${isNaN(p)?'—':p.toFixed(3)}</td><td>${isNaN(p)?'—':p<.05?'planar':p<.25?'semi-planar':'non-planar'}</td></tr>`}).join('')}
function rFreq(){$('tfr').innerHTML='<tr><th>Molekul</th><th>Program</th><th>Mode</th><th>Imajiner</th><th>3 terendah (cm⁻¹)</th><th>Status</th></tr>'+names().filter(n=>MOL[n].freq).map(n=>{const F=MOL[n].freq,im=F.filter(x=>x<0);return`<tr><td>${esc(n)}</td><td>${MOL[n].prog||''}</td><td>${F.length}</td><td>${im.length}</td><td>${[...F].sort((a,b)=>a-b).slice(0,3).map(x=>x.toFixed(1)).join(', ')}</td><td class="${im.length?'bad':'ok'}">${im.length?'bukan minimum':'minimum sejati'}</td></tr>`}).join('')}
// elektrokimia
function elec(m){if(!m.oc||!m.vi)return null;const h=m.oc[m.oc.length-1],l=m.vi[0],IP=-h,EA=-l,chi=(IP+EA)/2,eta=(IP-EA)/2;return{h,l,gap:l-h,IP,EA,chi,eta,om:chi*chi/(2*eta),S:1/eta}}
const orbitalViewers={homo:null,lumo:null};
const BOHR_TO_ANG=0.529177210903;
const CUBE_ELEMENTS=['','H','He','Li','Be','B','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca','Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn','Ga','Ge','As','Se','Br','Kr','Rb','Sr','Y','Zr','Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd','In','Sn','Sb','Te','I','Xe','Cs','Ba','La','Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb','Lu','Hf','Ta','W','Re','Os','Ir','Pt','Au','Hg','Tl','Pb','Bi','Po','At','Rn'];
function cubeAtomsXYZ(data){
 const L=data.replace(/\r/g,'').split('\n');
 if(L.length<7)return '';
 const h=L[2].trim().split(/\s+/),nat=Math.abs(parseInt(h[0],10));
 if(!Number.isFinite(nat)||nat<1||L.length<6+nat)return '';
 const grid=L.slice(3,6).map(x=>x.trim().split(/\s+/));
 // Gaussian cube: positive grid counts indicate Bohr; negative counts indicate Angstrom.
 const bohr=Number(grid[0][0])>0;
 const factor=bohr?BOHR_TO_ANG:1;
 const out=[String(nat),'Atoms read from Gaussian cube'];
 for(let i=0;i<nat;i++){
  const p=L[6+i].trim().split(/\s+/),z=Math.abs(parseInt(p[0],10));
  const el=CUBE_ELEMENTS[z]||'C';
  const xyz=p.slice(2,5).map(Number);
  if(xyz.length!==3||xyz.some(v=>!Number.isFinite(v)))return '';
  out.push(el+' '+xyz.map(v=>(v*factor).toFixed(7)).join(' '));
 }
 return out.join('\n');
}
function geometryXYZ(m,cubeText){
 if(Array.isArray(m.geom)&&m.geom.length){
  return [String(m.geom.length),'Uploaded molecular geometry',...m.geom.map(a=>a[0]+' '+a.slice(1,4).join(' '))].join('\n');
 }
 return cubeAtomsXYZ(cubeText);
}
function cube(id,m,k){
 const el=$(id),label=k==='ch'?'HOMO':'LUMO';
 el.innerHTML='';
 el.style.cssText='position:relative;display:block;width:100%;height:330px;min-height:280px;overflow:hidden;background:#fff;border-radius:8px';
 const image=m[k+'i'];
 if(image){
  const im=document.createElement('img');im.src=image;im.alt=label+' molecular orbital';
  im.style.cssText='display:block;width:100%;height:100%;object-fit:contain;background:#fff';
  el.appendChild(im);return;
 }
 const data=m[k];
 if(!data){el.innerHTML='<div style="height:100%;display:grid;place-items:center;text-align:center;padding:14px;box-sizing:border-box;color:#667085">Upload '+label+' .cube file.<br><small>Use the same molecule name for HOMO and LUMO.</small></div>';return;}
 try{
  const L=data.replace(/\r/g,'').split('\n');
  if(L.length<7||!Number.isFinite(Number(L[2].trim().split(/\s+/)[0])))throw new Error('Invalid Gaussian cube header. Check that this is a volumetric orbital .cube file.');
  const viewer=$3Dmol.createViewer(el,{backgroundColor:0xffffff,antialias:true});
  if(!viewer)throw new Error('WebGL viewer could not be created.');
  const geom=geometryXYZ(m,data);
  if(geom){
   viewer.addModel(geom,'xyz');
   viewer.setStyle({}, {stick:{radius:0.13,colorscheme:'Jmol'},sphere:{scale:0.18,colorscheme:'Jmol'}});
  }
  const iso=Math.max(0.0001,Number($('iso').value)||0.02);
  const vol=new $3Dmol.VolumeData(data,'cube');
  viewer.addIsosurface(vol,{isoval:iso,color:'#2457C5',alpha:0.95,smoothness:10});
  viewer.addIsosurface(vol,{isoval:-iso,color:'#D83B3B',alpha:0.95,smoothness:10});
  viewer.zoomTo();
  viewer.resize();
  viewer.render();
  orbitalViewers[k==='ch'?'homo':'lumo']=viewer;
  requestAnimationFrame(()=>{viewer.resize();viewer.render()});
 }catch(err){
  el.innerHTML='<div style="padding:12px;color:#b42318;font-size:13px">Cannot render '+label+': '+esc(err.message||String(err))+'</div>';
 }
}
function rEl(){const ns=names().filter(n=>elec(MOL[n])),m=MOL[cur]||{};cube('vh',m,'ch');cube('vl',m,'cl');$('isov').textContent=$('iso').value;const cb=+$('cb').value,rx=+$('rx').value;
 $('tel').innerHTML='<tr><th>Molekul</th><th>HOMO</th><th>LUMO</th><th>E<sub>gap</sub></th><th>IP</th><th>EA</th><th>χ</th><th>η</th><th>S (eV⁻¹)</th><th>ω</th><th>ΔG<sub>inj</sub>=LUMO−E<sub>CB</sub></th><th>ΔG<sub>reg</sub>=E<sub>redox</sub>−HOMO</th></tr>'+ns.map(n=>{const e=elec(MOL[n]),f=x=>x.toFixed(3);return`<tr><td>${esc(n)}</td><td>${f(e.h)}</td><td>${f(e.l)}</td><td>${f(e.gap)}</td><td>${f(e.IP)}</td><td>${f(e.EA)}</td><td>${f(e.chi)}</td><td>${f(e.eta)}</td><td>${f(e.S)}</td><td>${f(e.om)}</td><td>${f(e.l-cb)}</td><td>${f(rx-e.h)}</td></tr>`}).join('');
 const c=$('c_lad'),g=c.getContext('2d'),fg=getComputedStyle(document.body).color;g.clearRect(0,0,760,360);g.font='12px system-ui';if(!ns.length)return;const E=ns.map(n=>elec(MOL[n])),lo=Math.min(...E.map(e=>e.h),cb,rx)-.6,hi=Math.max(...E.map(e=>e.l),cb,rx)+.6,Y=v=>340-(v-lo)/(hi-lo)*320;
 [[cb,'E_CB TiO₂','#888'],[rx,'E_redox','#a50']].forEach(([v,t,cl])=>{g.strokeStyle=cl;g.setLineDash([6,4]);g.beginPath();g.moveTo(50,Y(v));g.lineTo(750,Y(v));g.stroke();g.setLineDash([]);g.fillStyle=cl;g.fillText(t+' '+v,52,Y(v)-3)});
 const w=700/ns.length;ns.forEach((n,i)=>{const x=50+i*w+w/2-35,e=E[i];g.lineWidth=4;g.strokeStyle='#d33';g.beginPath();g.moveTo(x,Y(e.h));g.lineTo(x+70,Y(e.h));g.stroke();g.strokeStyle='#1a6fd4';g.beginPath();g.moveTo(x,Y(e.l));g.lineTo(x+70,Y(e.l));g.stroke();g.lineWidth=1;g.fillStyle=fg;g.fillText('LUMO '+e.l.toFixed(2),x,Y(e.l)-5);g.fillText('HOMO '+e.h.toFixed(2),x,Y(e.h)+14);g.fillText(n+' (Eg '+e.gap.toFixed(2)+')',x,350)})}
// optik
const sg=()=>+$('sig').value,F8=8065.544,epsAt=(m,l)=>{const s=sg()*F8,v=1e7/l;return m.ex.reduce((a,e)=>a+1.3062974e8*e.f/s*Math.exp(-(((v-e.E*F8)/s)**2)),0)},Fat=(m,l)=>m.ex.reduce((a,e)=>a+e.f*Math.exp(-(((1239.84/l-e.E)/sg())**2)),0);
function rOp(){const ns=names().filter(n=>MOL[n].ex),x=lin(250,900,326),nz=$('nm').checked;$('sgv').textContent=sg().toFixed(2);const curve=(m,f)=>{const y=x.map(l=>f(m,l)),mx=nz?Math.max(...y)||1:1;return y.map(v=>v/mx)};
 if(ns.length){plot('c_sim',ns.map((n,i)=>({n,x,y:curve(MOL[n],epsAt),c:col(names().indexOf(n))})),{xl:'λ (nm)',yl:nz?'ε ternormalisasi':'ε (M⁻¹cm⁻¹)',y0:0});plot('c_lhe',ns.map(n=>({n,x,y:x.map(l=>1-Math.pow(10,-Fat(MOL[n],l))),c:col(names().indexOf(n))})),{xl:'λ (nm)',yl:'LHE = 1−10^(−f)',y0:0,y1:1})}else{['c_sim','c_lhe'].forEach(i=>$(i).getContext('2d').clearRect(0,0,760,300))}
 const m=MOL[cur]||{},S=[];if(m.ex)S.push({n:'Simulasi '+cur,x,y:curve(m,epsAt)});if(m.exp&&m.exp.length){const mx=Math.max(...m.exp.map(a=>a[1]))||1;S.push({n:'Eksperimen',x:m.exp.map(a=>a[0]),y:m.exp.map(a=>a[1]/mx),c:'#d33',d:1})}
 if(S.length)plot('c_cmp',S,{xl:'λ (nm)',yl:'absorbansi relatif',y0:0});else $('c_cmp').getContext('2d').clearRect(0,0,760,300);
 $('tex').innerHTML='<tr><th>Molekul</th><th>State</th><th>λ (nm)</th><th>E (eV)</th><th>f</th><th>LHE</th><th>Transisi (koef.)</th><th>Sim. λ<sub>maks</sub></th><th>Eksp. λ<sub>maks</sub></th></tr>'+ns.map(n=>{const M=MOL[n],mx=M.ex.reduce((a,b)=>b.f>a.f?b:a),ev=M.exp&&M.exp.length?M.exp.reduce((a,b)=>b[1]>a[1]?b:a)[0].toFixed(0):'—';return M.ex.slice(0,20).map(e=>`<tr${e===mx?' style="font-weight:700"':''}><td>${esc(n)}</td><td>${e.n} ${e.sym||''}</td><td>${e.nm.toFixed(1)}</td><td>${e.E.toFixed(3)}</td><td>${e.f.toFixed(4)}</td><td>${(1-Math.pow(10,-e.f)).toFixed(3)}</td><td>${e.tr.join('; ')}</td><td>${e===mx?mx.nm.toFixed(1):''}</td><td>${e===mx?ev:''}</td></tr>`).join('')}).join('')}
// PV
function fitX(ff){const F=x=>{let b=0;for(let i=1;i<200;i++){const u=i/200;b=Math.max(b,u*(1-(Math.exp(x*u)-1)/(Math.exp(x)-1)))}return b};let a=.01,b=80;for(let i=0;i<50;i++){const m=(a+b)/2;F(m)<ff?a=m:b=m}return(a+b)/2}
const jvSim=p=>{if(!(p.voc>0&&p.jsc>0&&p.ff>.25&&p.ff<1))return null;const x=fitX(p.ff),V=lin(0,p.voc,60);return{V,J:V.map(v=>p.jsc*(1-(Math.exp(x*v/p.voc)-1)/(Math.exp(x)-1)))}};
function jvExp(d){if(!d||d.length<3)return null;const a=[...d].sort((p,q)=>p[0]-q[0]),at=(v)=>{for(let i=1;i<a.length;i++)if(a[i-1][0]<=v&&a[i][0]>=v){const t=(v-a[i-1][0])/((a[i][0]-a[i-1][0])||1);return a[i-1][1]+t*(a[i][1]-a[i-1][1])}return a[0][1]};let voc=a[a.length-1][0];for(let i=1;i<a.length;i++)if(a[i-1][1]>0&&a[i][1]<=0){voc=a[i-1][0]+a[i-1][1]/(a[i-1][1]-a[i][1])*(a[i][0]-a[i-1][0]);break}const jsc=at(0);let pm=0;a.forEach(([v,j])=>{if(v>=0&&v<=voc&&v*j>pm)pm=v*j});return{voc,jsc,ff:pm/(voc*jsc)}}
function rPVin(){$('pvin').innerHTML='<tr><th>Molekul</th><th>Sim. Voc (V)</th><th>Sim. Jsc (mA/cm²)</th><th>Sim. FF</th></tr>'+names().map(n=>{const p=MOL[n].pv||(MOL[n].pv={});return`<tr><td>${esc(n)}</td>`+['voc','jsc','ff'].map(k=>`<td><input type="number" step="any" data-n="${esc(n)}" data-k="${k}" value="${p[k]??''}" style="width:90px"></td>`).join('')+'</tr>'}).join('')}
$('pvin').oninput=e=>{const t=e.target;if(t.dataset.n){MOL[t.dataset.n].pv[t.dataset.k]=parseFloat(t.value);drawPV()}};
function fillVoc(){const cb=+$('cb').value,sh=+$('dv').value;names().forEach(n=>{const e=elec(MOL[n]);if(e)MOL[n].pv.voc=+(e.l-cb+sh).toFixed(3)});rPVin();drawPV()}
function drawPV(){const ns=names(),Pin=+$('pin').value||100;const S=[],E=[],rows=[];ns.forEach((n,i)=>{const m=MOL[n],s=jvSim(m.pv||{}),e=jvExp(m.jv);if(s)S.push({n,x:s.V,y:s.J,c:col(i)});if(m.jv&&m.jv.length)E.push({n,x:m.jv.map(a=>a[0]),y:m.jv.map(a=>a[1]),c:col(i)});const p=m.pv||{},pce=(v,j,f)=>(v*j*f/Pin*100);
 rows.push(`<tr><td>${esc(n)}</td>${['voc','jsc','ff'].map(k=>'<td>'+(isFinite(p[k])?p[k]:'—')+'</td>').join('')}<td>${isFinite(p.voc*p.jsc*p.ff)?pce(p.voc,p.jsc,p.ff).toFixed(2):'—'}</td>${e?`<td>${e.voc.toFixed(3)}</td><td>${e.jsc.toFixed(2)}</td><td>${e.ff.toFixed(3)}</td><td>${pce(e.voc,e.jsc,e.ff).toFixed(2)}</td>`:'<td>—</td><td>—</td><td>—</td><td>—</td>'}</tr>`)});
 const cl=id=>$(id).getContext('2d').clearRect(0,0,760,300);S.length?plot('c_jvs',S,{xl:'V',yl:'J (mA/cm²)',y0:0}):cl('c_jvs');E.length?plot('c_jve',E,{xl:'V',yl:'J (mA/cm²)'}):cl('c_jve');
 $('tpv').innerHTML='<tr><th rowspan="2">Molekul</th><th colspan="4">Simulasi / prediksi</th><th colspan="4">Eksperimen</th></tr><tr><th>Voc</th><th>Jsc</th><th>FF</th><th>PCE (%)</th><th>Voc</th><th>Jsc</th><th>FF</th><th>PCE (%)</th></tr>'+rows.join('')}
function csv(id,fn){const r=[...$(id).rows].map(r=>[...r.cells].map(c=>'"'+c.textContent.replace(/"/g,'""')+'"').join(','));const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([r.join('\n')]));a.download=fn;a.click()}
['ms','sig','nm','iso','cb','rx','dv','pin'].forEach(i=>$(i).oninput=()=>{rStr();rEl();rOp();drawPV()});render();
