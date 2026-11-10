function gauss(){return Math.sqrt(-2*Math.log(Math.random()+1e-12))*Math.cos(2*Math.PI*Math.random())}
function MD(n,L,T){const s=Math.ceil(Math.sqrt(n)),a=L/s,x=[],y=[],vx=[],vy=[],fx=Array(n).fill(0),fy=Array(n).fill(0);let pe=0;
 for(let i=0;i<n;i++){x.push((i%s+.5)*a);y.push((Math.floor(i/s)+.5)*a);vx.push(gauss()*Math.sqrt(T));vy.push(gauss()*Math.sqrt(T))}
 const mx=vx.reduce((a,b)=>a+b)/n,my=vy.reduce((a,b)=>a+b)/n;for(let i=0;i<n;i++){vx[i]-=mx;vy[i]-=my}
 function force(){fx.fill(0);fy.fill(0);pe=0;for(let i=0;i<n;i++)for(let j=i+1;j<n;j++){let dx=x[i]-x[j],dy=y[i]-y[j];dx-=L*Math.round(dx/L);dy-=L*Math.round(dy/L);const r2=dx*dx+dy*dy;if(r2<6.25){const i2=1/r2,i6=i2*i2*i2,f=24*i2*i6*(2*i6-1);pe+=4*i6*(i6-1);fx[i]+=f*dx;fy[i]+=f*dy;fx[j]-=f*dx;fy[j]-=f*dy}}}
 force();const o={x:x,y:y,L:L,n:n,pe:()=>pe,ke(){let k=0;for(let i=0;i<n;i++)k+=.5*(vx[i]*vx[i]+vy[i]*vy[i]);return k},
 step(dt,Tt){for(let i=0;i<n;i++){vx[i]+=.5*dt*fx[i];vy[i]+=.5*dt*fy[i];x[i]=(x[i]+dt*vx[i]+L)%L;y[i]=(y[i]+dt*vy[i]+L)%L}force();for(let i=0;i<n;i++){vx[i]+=.5*dt*fx[i];vy[i]+=.5*dt*fy[i]}
  if(Tt>0){const s=Math.sqrt(1+.02*(Tt/(o.ke()/n)-1));for(let i=0;i<n;i++){vx[i]*=s;vy[i]*=s}}}};return o}
function Lattice(n){const g=new Uint8Array(n*n);let cov=0;const nb=i=>{const x=i%n,y=(i/n)|0;return g[((y+n-1)%n)*n+x]+g[((y+1)%n)*n+x]+g[y*n+(x+n-1)%n]+g[y*n+(x+1)%n]};
 return{g:g,n:n,sweep(mu,eps,J,kT){for(let t=0;t<n*n;t++){const i=(Math.random()*n*n)|0,m=nb(i);if(!g[i]){if(Math.random()<Math.exp(-(-eps-J*m-mu)/kT)){g[i]=1;cov++}}else if(Math.random()<Math.exp(-(eps+J*m+mu)/kT)){g[i]=0;cov--}}return cov/(n*n)}}}
if(typeof module!='undefined')module.exports={MD,Lattice};
