// RHF/STO-3G (zeta=1.24) untuk H2 sebagai fungsi R (bohr): integral s-Gaussian analitik (Szabo & Ostlund, App. A)
const P3=[[3.42525091,.15432897],[.62391373,.53532814],[.16885540,.44463454]];
function erf(x){const s=x<0?-1:1;x=Math.abs(x);const t=1/(1+.3275911*x),y=1-(((((1.061405429*t-1.453152027)*t)+1.421413741)*t-.284496736)*t+.254829592)*t*Math.exp(-x*x);return s*y}
const F0=t=>t<1e-8?1-t/3:.5*Math.sqrt(Math.PI/t)*erf(Math.sqrt(t)),NG=a=>Math.pow(2*a/Math.PI,.75);
function h2int(R){const A=0,B=R,O=[];for(const[a,ca]of P3)O.push([a,ca*NG(a)]);
 const pr=(a,b,Ra,Rb)=>{const p=a+b,Rp=(a*Ra+b*Rb)/p;return{p,Rp,K:Math.exp(-a*b/p*(Ra-Rb)**2),q:a*b/p}};
 const S=(i,j)=>{let s=0;for(const[a,ca]of O)for(const[b,cb]of O){const g=pr(a,b,i,j);s+=ca*cb*Math.pow(Math.PI/g.p,1.5)*g.K}return s};
 const T=(i,j)=>{let s=0;for(const[a,ca]of O)for(const[b,cb]of O){const g=pr(a,b,i,j);s+=ca*cb*g.q*(3-2*g.q*(i-j)**2)*Math.pow(Math.PI/g.p,1.5)*g.K}return s};
 const V=(i,j,C)=>{let s=0;for(const[a,ca]of O)for(const[b,cb]of O){const g=pr(a,b,i,j);s-=ca*cb*2*Math.PI/g.p*g.K*F0(g.p*(g.Rp-C)**2)}return s};
 const E=(i,j,k,l)=>{let s=0;for(const[a,ca]of O)for(const[b,cb]of O){const g=pr(a,b,i,j);for(const[c,cc]of O)for(const[d,cd]of O){const h=pr(c,d,k,l);s+=ca*cb*cc*cd*2*Math.pow(Math.PI,2.5)/(g.p*h.p*Math.sqrt(g.p+h.p))*g.K*h.K*F0(g.p*h.p/(g.p+h.p)*(g.Rp-h.Rp)**2)}}return s};
 return{S12:S(A,B),H11:T(A,A)+V(A,A,A)+V(A,A,B),H12:T(A,B)+V(A,B,A)+V(A,B,B),a:E(A,A,A,A),b:E(A,A,B,B),c:E(A,B,A,B),d:E(A,A,A,B)}}
function h2E(R){const q=h2int(R),el=2*(q.H11+q.H12)/(1+q.S12)+(2*q.a+2*q.b+4*q.c+8*q.d)/(4*(1+q.S12)**2);return el+1/R}
function hAtomE(){let t=0,v=0,s=0;for(const[a,ca]of P3)for(const[b,cb]of P3){const na=ca*NG(a),nb=cb*NG(b),p=a+b,q=a*b/p,S=Math.pow(Math.PI/p,1.5);t+=na*nb*q*3*S;v-=na*nb*2*Math.PI/p}return t+v}
if(typeof module!='undefined')module.exports={h2int,h2E,hAtomE};
