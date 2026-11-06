// RHF/STO-3G H2 (R=1.4 bohr). Integral: Szabo & Ostlund, Modern Quantum Chemistry, Sec. 3.5.2
const H2={A:.7746,B:.5697,C:.2970,D:.4441,S:.6593,H:[[-1.1204,-.9584],[-.9584,-1.1204]],VNN:1/1.4};
const eri=(i,j,k,l)=>i==j&&k==l?(i==k?H2.A:H2.B):(i!=j&&k!=l?H2.C:H2.D);
function eig2(a,b,d){const m=(a+d)/2,r=Math.hypot((a-d)/2,b),l1=m-r,l2=m+r;let v=Math.abs(b)<1e-14?(a<=d?[1,0]:[0,1]):[b,l1-a];const n=Math.hypot(v[0],v[1]);v=[v[0]/n,v[1]/n];return{e:[l1,l2],v:v}}
function h2scf(alpha,P0,K){const s=H2.S,p=Math.pow(1+s,-.5),q=Math.pow(1-s,-.5),x11=(p+q)/2,x12=(p-q)/2,X=[[x11,x12],[x12,x11]],mm=(a,b)=>[0,1].map(i=>[0,1].map(j=>a[i][0]*b[0][j]+a[i][1]*b[1][j]));
 let P=P0.map(r=>r.slice()),out=[],Eold=0;
 for(let it=0;it<K;it++){const F=[0,1].map(m=>[0,1].map(n=>{let g=0;for(let l=0;l<2;l++)for(let t=0;t<2;t++)g+=P[l][t]*(eri(m,n,t,l)-.5*eri(m,l,t,n));return H2.H[m][n]+g}));
  let E=H2.VNN;for(let m=0;m<2;m++)for(let n=0;n<2;n++)E+=.5*P[m][n]*(H2.H[m][n]+F[m][n]);
  const Fp=mm(mm(X,F),X),g=eig2(Fp[0][0],Fp[0][1],Fp[1][1]),c=[X[0][0]*g.v[0]+X[0][1]*g.v[1],X[1][0]*g.v[0]+X[1][1]*g.v[1]];
  const Pn=[[2*c[0]*c[0],2*c[0]*c[1]],[2*c[1]*c[0],2*c[1]*c[1]]];
  out.push({it:it,E:E,dE:E-Eold,eps:g.e,c:c,P:P.map(r=>r.slice())});Eold=E;
  P=P.map((r,i)=>r.map((v,j)=>(1-alpha)*v+alpha*Pn[i][j]))}
 return out}
if(typeof module!='undefined')module.exports={h2scf};
