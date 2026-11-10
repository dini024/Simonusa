// Parser ORCA/Gaussian + helper geometri (tanpa dependensi DOM)

const R={H:.31,C:.76,N:.71,O:.66,F:.57,P:1.07,S:1.05,Cl:1.02,Br:1.2,I:1.39,B:.84,Si:1.11,Zn:1.22,Ti:1.6,Ru:1.46};
const EL=['','H','He','Li','Be','B','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca','Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn','Ga','Ge','As','Se','Br','Kr','Rb','Sr','Y','Zr','Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd','In','Sn','Sb','Te','I'];
const H2EV=27.211386,CM2EV=1/8065.544;

function parse(t,name){const g=/Entering Gaussian|Gaussian, Inc/.test(t);const o={prog:g?'Gaussian':'ORCA'};
 let L=t.split(/\r?\n/);
 // geometry
 if(g){let k=-1;L.forEach((l,i)=>{if(/Standard orientation:|Input orientation:/.test(l))k=i});if(k>0){let a=[];for(let i=k+5;i<L.length&&!/----/.test(L[i]);i++){const p=L[i].trim().split(/\s+/);a.push([EL[+p[1]]||'X',+p[3],+p[4],+p[5]])}o.geom=a}}
 else{let k=L.map((l,i)=>/CARTESIAN COORDINATES \(ANGSTROEM\)/.test(l)?i:-1).filter(i=>i>=0).pop();if(k>=0){let a=[];for(let i=k+2;i<L.length&&L[i].trim();i++){const p=L[i].trim().split(/\s+/);a.push([p[0],+p[1],+p[2],+p[3]])}o.geom=a}}
 // freq
 let fr=[];if(g){L.forEach(l=>{if(/Frequencies --/.test(l))fr.push(...l.split('--')[1].trim().split(/\s+/).map(Number))})}
 else{let k=t.lastIndexOf('VIBRATIONAL FREQUENCIES');if(k>=0)t.slice(k).split('\n').forEach(l=>{const m=l.match(/^\s*\d+:\s+(-?[\d.]+)\s+cm/);if(m&&+m[1]!=0)fr.push(+m[1])})}
 if(fr.length)o.freq=fr;
 // orbitals
 let oc=[],vi=[];
 if(g){const k=t.lastIndexOf('The electronic state is');if(k>=0)t.slice(k).split('\n').forEach(l=>{const n=(l.match(/-?\d+\.\d{5}/g)||[]).map(Number).map(x=>x*H2EV);if(/Alpha  occ/.test(l))oc.push(...n);else if(/Alpha virt/.test(l))vi.push(...n)})}
 else{const k=t.lastIndexOf('ORBITAL ENERGIES');if(k>=0){let st=false;for(const l of t.slice(k).split('\n')){const m=l.match(/^\s*\d+\s+([\d.]+)\s+(-?[\d.]+)\s+(-?[\d.]+)/);if(m){st=true;(+m[1]>0?oc:vi).push(+m[3])}else if(st)break}}}
 if(oc.length&&vi.length){o.oc=oc;o.vi=vi}
 // TDDFT
 let ex=[];
 if(g){let cur=null;L.forEach(l=>{let m=l.match(/Excited State\s+(\d+):\s+(\S+)\s+(-?[\d.]+) eV\s+([\d.]+) nm\s+f=([\d.]+)/);if(m){cur={n:+m[1],sym:m[2],E:+m[3],nm:+m[4],f:+m[5],tr:[]};ex.push(cur)}else if(cur&&(m=l.match(/^\s+(\d+)\s+->\s*(\d+)\s+(-?[\d.]+)/))&&cur.tr.length<3)cur.tr.push(m[1]+'→'+m[2]+' ('+m[3]+')')})}
 else{const k=t.lastIndexOf('ABSORPTION SPECTRUM VIA TRANSITION ELECTRIC DIPOLE MOMENTS');if(k>=0){let n=0;t.slice(k).split('\n').forEach(l=>{const m=l.match(/->\s*\d+-\S+\s+(\d+\.\d+)\s+(\d+\.\d+)\s+(\d+\.\d+)/);if(m)ex.push({n:++n,sym:'',E:+m[1]*CM2EV,nm:+m[2],f:+m[3],tr:[]})});
  const tdk=t.lastIndexOf('TD-DFT/TDA EXCITED STATES')>=0?t.lastIndexOf('TD-DFT/TDA EXCITED STATES'):t.lastIndexOf('TD-DFT EXCITED STATES');
  if(tdk>=0){let cs=0;t.slice(tdk).split('\n').forEach(l=>{let m=l.match(/^STATE\s+(\d+):/);if(m)cs=+m[1];else if(cs&&(m=l.match(/^\s+(\d+[ab]\s+->\s+\d+[ab])\s+:\s+(-?[\d.]+)/))){const e=ex[cs-1];if(e&&e.tr.length<3)e.tr.push(m[1].replace(/\s+/g,'')+' ('+m[2]+')')}})}}}
 if(ex.length)o.ex=ex;
 // docking
 const dk=L.filter(l=>/^\s*\d+\s+-?\d+\.\d+\s+\d+\.\d+\s+\d+\.\d+\s*$/.test(l));if(/ORCA DOCKER|DOCKER/i.test(t)&&dk.length)o.dock=dk.map(l=>l.trim().split(/\s+/));
 return o}
function dist(a,b){return Math.hypot(a[1]-b[1],a[2]-b[2],a[3]-b[3])}
function sub(a,b){return [a[1]-b[1],a[2]-b[2],a[3]-b[3]]}
const dot=(u,v)=>u[0]*v[0]+u[1]*v[1]+u[2]*v[2],cr=(u,v)=>[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]],nr=u=>Math.sqrt(dot(u,u));
function geomTab(G){const n=G.length,bd=[];for(let i=0;i<n;i++)for(let j=i+1;j<n;j++)if(dist(G[i],G[j])<1.25*((R[G[i][0]]||1)+(R[G[j][0]]||1)))bd.push([i,j]);
 const nb=G.map(_=>[]);bd.forEach(([i,j])=>{nb[i].push(j);nb[j].push(i)});let h='<h3>Bond length (Å)</h3><table><tr><th>Ikatan</th><th>Å</th></tr>';
 bd.filter(([i,j])=>!(G[i][0]=='H'&&G[j][0]=='H')).slice(0,150).forEach(([i,j])=>h+=`<tr><td>${G[i][0]}${i+1}–${G[j][0]}${j+1}</td><td>${dist(G[i],G[j]).toFixed(4)}</td></tr>`);h+='</table><h3>Bond angle (°)</h3><table><tr><th>Sudut</th><th>°</th></tr>';let c=0;
 for(let j=0;j<n;j++)for(let a=0;a<nb[j].length;a++)for(let b=a+1;b<nb[j].length;b++){const i=nb[j][a],k=nb[j][b];if(G[i][0]=='H'&&G[k][0]=='H'||c++>150)continue;const u=sub(G[i],G[j]),v=sub(G[k],G[j]);h+=`<tr><td>${G[i][0]}${i+1}–${G[j][0]}${j+1}–${G[k][0]}${k+1}</td><td>${(Math.acos(dot(u,v)/nr(u)/nr(v))*180/Math.PI).toFixed(2)}</td></tr>`}
 h+='</table><h3>Dihedral (°), atom berat</h3><table><tr><th>Dihedral</th><th>°</th></tr>';c=0;
 bd.forEach(([j,k])=>{if(G[j][0]=='H'||G[k][0]=='H')return;nb[j].forEach(i=>nb[k].forEach(l=>{if(i==k||l==j||i==l||G[i][0]=='H'||G[l][0]=='H'||c++>150)return;const b1=sub(G[j],G[i]),b2=sub(G[k],G[j]),b3=sub(G[l],G[k]),n1=cr(b1,b2),n2=cr(b2,b3);const x=dot(n1,n2),y=dot(cr(n1,n2),b2)/nr(b2);h+=`<tr><td>${G[i][0]}${i+1}-${G[j][0]}${j+1}-${G[k][0]}${k+1}-${G[l][0]}${l+1}</td><td>${(Math.atan2(y,x)*180/Math.PI).toFixed(2)}</td></tr>`}))});
 const hv=G.filter(a=>a[0]!='H'),m=[0,1,2].map(d=>hv.reduce((s,a)=>s+a[d+1],0)/hv.length),C=[[0,0,0],[0,0,0],[0,0,0]];hv.forEach(a=>{const d=[a[1]-m[0],a[2]-m[1],a[3]-m[2]];for(let i=0;i<3;i++)for(let j=0;j<3;j++)C[i][j]+=d[i]*d[j]});
 const q=(C[0][0]+C[1][1]+C[2][2])/3,B=C.map((r,i)=>r.map((v,j)=>v-(i==j?q:0))),p=Math.sqrt(B.flat().reduce((s,v)=>s+v*v,0)/6)||1e-9,Bn=B.map(r=>r.map(v=>v/p)),det=Bn[0][0]*(Bn[1][1]*Bn[2][2]-Bn[1][2]*Bn[2][1])-Bn[0][1]*(Bn[1][0]*Bn[2][2]-Bn[1][2]*Bn[2][0])+Bn[0][2]*(Bn[1][0]*Bn[2][1]-Bn[1][1]*Bn[2][0]),ph=Math.acos(Math.max(-1,Math.min(1,det/2)))/3,lmin=q+2*p*Math.cos(ph+2*Math.PI/3);
 h+=`</table><p><b>Planaritas</b> (RMSD atom berat ke bidang terbaik): <b>${Math.sqrt(Math.max(lmin,0)/hv.length).toFixed(4)} Å</b> (&lt;0.05 Å ≈ planar)</p>`;return h}

if(typeof module!='undefined')module.exports={parse,geomTab,dist,sub,dot,cr,nr};
