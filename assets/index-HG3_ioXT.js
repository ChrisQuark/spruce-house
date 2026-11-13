(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Sp="modulepreload",bp=function(i,t){return new URL(i,t).href},th={},Ep=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let c=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=c(e.map(u=>{if(u=bp(u,n),u in th)return;th[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(n)for(let g=o.length-1;g>=0;g--){const _=o[g];if(_.href===u&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Sp,h||(d.as="script"),d.crossOrigin="",d.href=u,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((g,_)=>{d.addEventListener("load",g),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};const ro="180",ir={ROTATE:0,DOLLY:1,PAN:2},Qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tp=0,eh=1,wp=2,qf=1,Yf=2,ci=3,Jn=0,un=1,on=2,qe=0,sr=1,ql=2,nh=3,ih=4,jf=5,Gn=100,Ap=101,Rp=102,Cp=103,Pp=104,kr=200,Dp=201,Ip=202,Lp=203,Yl=204,jl=205,$l=206,Up=207,Zl=208,Np=209,Fp=210,Op=211,Bp=212,zp=213,kp=214,Kl=0,Jl=1,Ql=2,ar=3,tc=4,ec=5,nc=6,ic=7,$f=0,Vp=1,Hp=2,Bi=0,Zf=1,Kf=2,Jf=3,ru=4,Qf=5,td=6,ed=7,nd=300,lr=301,cr=302,sc=303,rc=304,Ca=306,Mi=1e3,_i=1001,oc=1002,hn=1003,Gp=1004,fo=1005,an=1006,Ya=1007,Fi=1008,Xn=1009,id=1010,sd=1011,Zr=1012,ou=1013,zi=1014,ln=1015,cn=1016,au=1017,lu=1018,ur=1020,rd=35902,od=35899,ad=1021,ld=1022,vn=1023,Kr=1026,hr=1027,cu=1028,Pa=1029,cd=1030,uu=1031,hu=1033,da=33776,pa=33777,ma=33778,ga=33779,ac=35840,lc=35841,cc=35842,uc=35843,hc=36196,fc=37492,dc=37496,pc=37808,mc=37809,gc=37810,_c=37811,xc=37812,vc=37813,yc=37814,Mc=37815,Sc=37816,bc=37817,Ec=37818,Tc=37819,wc=37820,Ac=37821,Rc=36492,Cc=36494,Pc=36495,Dc=36283,Ic=36284,Lc=36285,Uc=36286,ub=2300,hb=2301,Wp=3200,Xp=3201,fu=0,qp=1,Ui="",xn="srgb",us="srgb-linear",ya="linear",ce="srgb",Ss=7680,sh=519,Yp=512,jp=513,$p=514,ud=515,Zp=516,Kp=517,Jp=518,Qp=519,rh=35044,oh="300 es",Wn=2e3,Ma=2001;class ds{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ah=1234567;const Wr=Math.PI/180,Jr=180/Math.PI;function ps(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function du(i,t){return(i%t+t)%t}function tm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function em(i,t,e){return i!==t?(e-i)/(t-i):0}function Xr(i,t,e){return(1-e)*i+e*t}function nm(i,t,e,n){return Xr(i,t,1-Math.exp(-e*n))}function im(i,t=1){return t-Math.abs(du(i,t*2)-t)}function sm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function rm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function om(i,t){return i+Math.floor(Math.random()*(t-i+1))}function am(i,t){return i+Math.random()*(t-i)}function lm(i){return i*(.5-Math.random())}function cm(i){i!==void 0&&(ah=i);let t=ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function um(i){return i*Wr}function hm(i){return i*Jr}function fm(i){return(i&i-1)===0&&i!==0}function dm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mm(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ks(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Nc={DEG2RAD:Wr,RAD2DEG:Jr,generateUUID:ps,clamp:Gt,euclideanModulo:du,mapLinear:tm,inverseLerp:em,lerp:Xr,damp:nm,pingpong:im,smoothstep:sm,smootherstep:rm,randInt:om,randFloat:am,randFloatSpread:lm,seededRandom:cm,degToRad:um,radToDeg:hm,isPowerOfTwo:fm,ceilPowerOfTwo:dm,floorPowerOfTwo:pm,setQuaternionFromProperEuler:mm,normalize:sn,denormalize:Ks};class ${constructor(t=0,e=0){$.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ki{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const S=Math.sqrt(v),E=Math.atan2(S,p*y);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S}const x=a*y;if(l=l*m+f*x,c=c*m+d*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ja.copy(this).projectOnVector(t),this.sub(ja)}reflect(t){return this.sub(ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new D,lh=new ki;class Jt{constructor(t,e,n,s,r,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],v=s[4],x=s[7],S=s[2],E=s[5],A=s[8];return r[0]=o*_+a*y+l*S,r[3]=o*m+a*v+l*E,r[6]=o*p+a*x+l*A,r[1]=c*_+u*y+h*S,r[4]=c*m+u*v+h*E,r[7]=c*p+u*x+h*A,r[2]=f*_+d*y+g*S,r[5]=f*m+d*v+g*E,r[8]=f*p+d*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($a.makeScale(t,e)),this}rotate(t){return this.premultiply($a.makeRotation(-t)),this}translate(t,e){return this.premultiply($a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new Jt;function hd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gm(){const i=Qr("canvas");return i.style.display="block",i}const ch={};function to(i){i in ch||(ch[i]=!0,console.warn(i))}function _m(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const uh=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hh=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xm(){const i={enabled:!0,workingColorSpace:us,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ce&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ui?ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return to("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return to("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[us]:{primaries:t,whitePoint:n,transfer:ya,toXYZ:uh,fromXYZ:hh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:uh,fromXYZ:hh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),i}const se=xm();function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bs;class vm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{bs===void 0&&(bs=Qr("canvas")),bs.width=t.width,bs.height=t.height;const s=bs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=bs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ym=0;class pu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=ps(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Za(s[o].image)):r.push(Za(s[o]))}else r=Za(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Za(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mm=0;const Ka=new D;class Ge extends ds{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=_i,s=_i,r=an,o=Fi,a=vn,l=Xn,c=Ge.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=ps(),this.name="",this.source=new pu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ka).x}get height(){return this.source.getSize(Ka).y}get depth(){return this.source.getSize(Ka).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mi:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mi:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=nd;Ge.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(d+1)/2,S=(p+1)/2,E=(u+f)/4,A=(h+_)/4,w=(g+m)/4;return v>x&&v>S?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=A/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=w/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=w/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sm extends ds{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ge(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new pu(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends Sm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fd extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bm extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ce{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),mo.subVectors(this.max,br),Es.subVectors(t.a,br),Ts.subVectors(t.b,br),ws.subVectors(t.c,br),Ti.subVectors(Ts,Es),wi.subVectors(ws,Ts),ji.subVectors(Es,ws);let e=[0,-Ti.z,Ti.y,0,-wi.z,wi.y,0,-ji.z,ji.y,Ti.z,0,-Ti.x,wi.z,0,-wi.x,ji.z,0,-ji.x,-Ti.y,Ti.x,0,-wi.y,wi.x,0,-ji.y,ji.x,0];return!Ja(e,Es,Ts,ws,mo)||(e=[1,0,0,0,1,0,0,0,1],!Ja(e,Es,Ts,ws,mo))?!1:(go.crossVectors(Ti,wi),e=[go.x,go.y,go.z],Ja(e,Es,Ts,ws,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ei=[new D,new D,new D,new D,new D,new D,new D,new D],On=new D,po=new Ce,Es=new D,Ts=new D,ws=new D,Ti=new D,wi=new D,ji=new D,br=new D,mo=new D,go=new D,$i=new D;function Ja(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$i.fromArray(i,r);const a=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=t.dot($i),c=e.dot($i),u=n.dot($i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Em=new Ce,Er=new D,Qa=new D;class Nn{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Em.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);const e=Er.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(Qa)),this.expandByPoint(Er.copy(t.center).sub(Qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ni=new D,tl=new D,_o=new D,Ai=new D,el=new D,xo=new D,nl=new D;class gr{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){tl.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),Ai.copy(this.origin).sub(tl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(_o),a=Ai.dot(this.direction),l=-Ai.dot(_o),c=Ai.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(tl).addScaledVector(_o,f),d}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,s,r){el.subVectors(e,t),xo.subVectors(n,t),nl.crossVectors(el,xo);let o=this.direction.dot(nl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,t);const l=a*this.direction.dot(xo.crossVectors(Ai,xo));if(l<0)return null;const c=a*this.direction.dot(el.cross(Ai));if(c<0||l+c>o)return null;const u=-a*Ai.dot(nl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,n,s,r,o,a,l,c,u,h,f,d,g,_,m){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(t,e,n,s,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),o=1/As.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tm,t,wm)}lookAt(t,e,n){const s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ri.crossVectors(n,Sn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ri.crossVectors(n,Sn)),Ri.normalize(),vo.crossVectors(Sn,Ri),s[0]=Ri.x,s[4]=vo.x,s[8]=Sn.x,s[1]=Ri.y,s[5]=vo.y,s[9]=Sn.y,s[2]=Ri.z,s[6]=vo.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],v=n[7],x=n[11],S=n[15],E=s[0],A=s[4],w=s[8],b=s[12],M=s[1],R=s[5],P=s[9],L=s[13],N=s[2],O=s[6],z=s[10],J=s[14],G=s[3],nt=s[7],ut=s[11],vt=s[15];return r[0]=o*E+a*M+l*N+c*G,r[4]=o*A+a*R+l*O+c*nt,r[8]=o*w+a*P+l*z+c*ut,r[12]=o*b+a*L+l*J+c*vt,r[1]=u*E+h*M+f*N+d*G,r[5]=u*A+h*R+f*O+d*nt,r[9]=u*w+h*P+f*z+d*ut,r[13]=u*b+h*L+f*J+d*vt,r[2]=g*E+_*M+m*N+p*G,r[6]=g*A+_*R+m*O+p*nt,r[10]=g*w+_*P+m*z+p*ut,r[14]=g*b+_*L+m*J+p*vt,r[3]=y*E+v*M+x*N+S*G,r[7]=y*A+v*R+x*O+S*nt,r[11]=y*w+v*P+x*z+S*ut,r[15]=y*b+v*L+x*J+S*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*d-n*l*d)+_*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+e*c*h-e*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-s*a*u-e*l*h+e*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,v=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,x=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,S=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,E=e*y+n*v+s*x+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=y*A,t[1]=(_*f*r-h*m*r-_*s*d+n*m*d+h*s*p-n*f*p)*A,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*A,t[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*d-n*l*d)*A,t[4]=v*A,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*A,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*d+e*l*d)*A,t[8]=x*A,t[9]=(g*h*r-u*_*r-g*n*d+e*_*d+u*n*p-e*h*p)*A,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*A,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*d-e*a*d)*A,t[12]=S*A,t[13]=(u*_*s-g*h*s+g*n*f-e*_*f-u*n*m+e*h*m)*A,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*A,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,y=l*c,v=l*u,x=l*h,S=n.x,E=n.y,A=n.z;return s[0]=(1-(_+p))*S,s[1]=(d+x)*S,s[2]=(g-v)*S,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(f+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+v)*A,s[9]=(m-y)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=As.set(s[0],s[1],s[2]).length();const o=As.set(s[4],s[5],s[6]).length(),a=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Bn.copy(this);const c=1/r,u=1/o,h=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,e.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Wn,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Wn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ma)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Wn,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Wn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ma)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const As=new D,Bn=new $t,Tm=new D(0,0,0),wm=new D(1,1,1),Ri=new D,vo=new D,Sn=new D,fh=new $t,dh=new ki;class Fn{constructor(t=0,e=0,n=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dh.setFromEuler(this),this.setFromQuaternion(dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class mu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Am=0;const ph=new D,Rs=new ki,ii=new $t,yo=new D,Tr=new D,Rm=new D,Cm=new ki,mh=new D(1,0,0),gh=new D(0,1,0),_h=new D(0,0,1),xh={type:"added"},Pm={type:"removed"},Cs={type:"childadded",child:null},il={type:"childremoved",child:null};class Be extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new D,e=new Fn,n=new ki,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new Jt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(mh,t)}rotateY(t){return this.rotateOnAxis(gh,t)}rotateZ(t){return this.rotateOnAxis(_h,t)}translateOnAxis(t,e){return ph.copy(t).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mh,t)}translateY(t){return this.translateOnAxis(gh,t)}translateZ(t){return this.translateOnAxis(_h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yo.copy(t):yo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Tr,yo,this.up):ii.lookAt(yo,Tr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(ii),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xh),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pm),il.child=t,this.dispatchEvent(il),il.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xh),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,Rm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Cm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Be.DEFAULT_UP=new D(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new D,si=new D,sl=new D,ri=new D,Ps=new D,Ds=new D,vh=new D,rl=new D,ol=new D,al=new D,ll=new pe,cl=new pe,ul=new pe;class Ye{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zn.subVectors(t,e),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zn.subVectors(s,e),si.subVectors(n,e),sl.subVectors(t,e);const o=zn.dot(zn),a=zn.dot(si),l=zn.dot(sl),c=si.dot(si),u=si.dot(sl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ll.setScalar(0),cl.setScalar(0),ul.setScalar(0),ll.fromBufferAttribute(t,e),cl.fromBufferAttribute(t,n),ul.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ll,r.x),o.addScaledVector(cl,r.y),o.addScaledVector(ul,r.z),o}static isFrontFacing(t,e,n,s){return zn.subVectors(n,e),si.subVectors(t,e),zn.cross(si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),zn.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ye.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ps.subVectors(s,n),Ds.subVectors(r,n),rl.subVectors(t,n);const l=Ps.dot(rl),c=Ds.dot(rl);if(l<=0&&c<=0)return e.copy(n);ol.subVectors(t,s);const u=Ps.dot(ol),h=Ds.dot(ol);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ps,o);al.subVectors(t,r);const d=Ps.dot(al),g=Ds.dot(al);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ds,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return vh.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(vh,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Ps,o).addScaledVector(Ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function hl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=du(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=hl(o,r,t+1/3),this.g=hl(o,r,t),this.b=hl(o,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=xn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){const n=dd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return se.workingToColorSpace(Ke.copy(this),t),Math.round(Gt(Ke.r*255,0,255))*65536+Math.round(Gt(Ke.g*255,0,255))*256+Math.round(Gt(Ke.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(Ke.copy(this),e);const n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=xn){se.workingToColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,s=Ke.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(Mo);const n=Xr(Ci.h,Mo.h,e),s=Xr(Ci.s,Mo.s,e),r=Xr(Ci.l,Mo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new Yt;Yt.NAMES=dd;let Dm=0;class Wi extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=sr,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=jl,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yl&&(n.blendSrc=this.blendSrc),this.blendDst!==jl&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Da extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=$f,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pi=Im();function Im(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Lm(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Gt(i,-65504,65504),pi.floatView[0]=i;const t=pi.uint32View[0],e=t>>23&511;return pi.baseTable[e]+((t&8388607)>>pi.shiftTable[e])}function Um(i){const t=i>>10;return pi.uint32View[0]=pi.mantissaTable[pi.offsetTable[t]+(i&1023)]+pi.exponentTable[t],pi.floatView[0]}class So{static toHalfFloat(t){return Lm(t)}static fromHalfFloat(t){return Um(t)}}const Pe=new D,bo=new $;let Nm=0;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rh,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bo.fromBufferAttribute(this,e),bo.applyMatrix3(t),this.setXY(e,bo.x,bo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ks(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rh&&(t.usage=this.usage),t}}class pd extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class md extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Fm=0;const Pn=new $t,fl=new Be,Is=new D,bn=new Ce,wr=new Ce,Ve=new D;class Ee extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hd(t)?md:pd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return fl.lookAt(t),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ce);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(bn.min,wr.min),bn.expandByPoint(Ve),Ve.addVectors(bn.max,wr.max),bn.expandByPoint(Ve)):(bn.expandByPoint(wr.min),bn.expandByPoint(wr.max))}bn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ve.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(t,c),Ve.add(Is)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new D,l[w]=new D;const c=new D,u=new D,h=new D,f=new $,d=new $,g=new $,_=new D,m=new D;function p(w,b,M){c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,w),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),a[w].add(_),a[b].add(_),a[M].add(_),l[w].add(m),l[b].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let w=0,b=y.length;w<b;++w){const M=y[w],R=M.start,P=M.count;for(let L=R,N=R+P;L<N;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const v=new D,x=new D,S=new D,E=new D;function A(w){S.fromBufferAttribute(s,w),E.copy(S);const b=a[w];v.copy(b),v.sub(S.multiplyScalar(S.dot(b))).normalize(),x.crossVectors(E,b);const R=x.dot(l[w])<0?-1:1;o.setXYZW(w,v.x,v.y,v.z,R)}for(let w=0,b=y.length;w<b;++w){const M=y[w],R=M.start,P=M.count;for(let L=R,N=R+P;L<N;L+=3)A(t.getX(L+0)),A(t.getX(L+1)),A(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new $e(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yh=new $t,Zi=new gr,Eo=new Nn,Mh=new D,To=new D,wo=new D,Ao=new D,dl=new D,Ro=new D,Sh=new D,Co=new D;class Ie extends Be{constructor(t=new Ee,e=new Da){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(dl.fromBufferAttribute(h,t),o?Ro.addScaledVector(dl,u):Ro.addScaledVector(dl.sub(e),u))}e.add(Ro)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(r),Zi.copy(t.ray).recast(t.near),!(Eo.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Eo,Mh)===null||Zi.origin.distanceToSquared(Mh)>(t.far-t.near)**2))&&(yh.copy(r).invert(),Zi.copy(t.ray).applyMatrix4(yh),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,S=v;x<S;x+=3){const E=a.getX(x),A=a.getX(x+1),w=a.getX(x+2);s=Po(this,p,t,n,c,u,h,E,A,w),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=Po(this,o,t,n,c,u,h,y,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,S=v;x<S;x+=3){const E=x,A=x+1,w=x+2;s=Po(this,p,t,n,c,u,h,E,A,w),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,v=m+1,x=m+2;s=Po(this,o,t,n,c,u,h,y,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Om(i,t,e,n,s,r,o,a){let l;if(t.side===un?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Jn,a),l===null)return null;Co.copy(a),Co.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Co);return c<e.near||c>e.far?null:{distance:c,point:Co.clone(),object:i}}function Po(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,To),i.getVertexPosition(l,wo),i.getVertexPosition(c,Ao);const u=Om(i,t,e,n,To,wo,Ao,Sh);if(u){const h=new D;Ye.getBarycoord(Sh,To,wo,Ao,h),s&&(u.uv=Ye.getInterpolatedAttribute(s,a,l,c,h,new $)),r&&(u.uv1=Ye.getInterpolatedAttribute(r,a,l,c,h,new $)),o&&(u.normal=Ye.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};Ye.getNormal(To,wo,Ao,f.normal),u.face=f,u.barycoord=h}return u}class ms extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(h,2));function g(_,m,p,y,v,x,S,E,A,w,b){const M=x/A,R=S/w,P=x/2,L=S/2,N=E/2,O=A+1,z=w+1;let J=0,G=0;const nt=new D;for(let ut=0;ut<z;ut++){const vt=ut*R-L;for(let Pt=0;Pt<O;Pt++){const Bt=Pt*M-P;nt[_]=Bt*y,nt[m]=vt*v,nt[p]=N,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[p]=E>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(Pt/A),h.push(1-ut/w),J+=1}}for(let ut=0;ut<w;ut++)for(let vt=0;vt<A;vt++){const Pt=f+vt+O*ut,Bt=f+vt+O*(ut+1),te=f+(vt+1)+O*(ut+1),jt=f+(vt+1)+O*ut;l.push(Pt,Bt,jt),l.push(Bt,te,jt),G+=6}a.addGroup(d,G,b),d+=G,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function rn(i){const t={};for(let e=0;e<i.length;e++){const n=fr(i[e]);for(const s in n)t[s]=n[s]}return t}function Bm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Kn={clone:fr,merge:rn};var zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class De extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zm,this.fragmentShader=km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=Bm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _d extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new D,bh=new $,Eh=new $;class Tn extends _d{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,bh,Eh),e.subVectors(Eh,bh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ls=-90,Us=1;class Vm extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(Ls,Us,t,e);s.layers=this.layers,this.add(s);const r=new Tn(Ls,Us,t,e);r.layers=this.layers,this.add(r);const o=new Tn(Ls,Us,t,e);o.layers=this.layers,this.add(o);const a=new Tn(Ls,Us,t,e);a.layers=this.layers,this.add(a);const l=new Tn(Ls,Us,t,e);l.layers=this.layers,this.add(l);const c=new Tn(Ls,Us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class xd extends Ge{constructor(t=[],e=lr,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hm extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xd(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ms(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:qe});r.uniforms.tEquirect.value=e;const o=new Ie(s,r),a=e.minFilter;return e.minFilter===Fi&&(e.minFilter=an),new Vm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Re extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gm={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class gu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new gu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Wm extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class as extends Ge{constructor(t=null,e=1,n=1,s,r,o,a,l,c=hn,u=hn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Th extends $e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ns=new $t,wh=new $t,Do=[],Ah=new Ce,Xm=new $t,Ar=new Ie,Rr=new Nn;class qm extends Ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Th(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ce),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ns),Ah.copy(t.boundingBox).applyMatrix4(Ns),this.boundingBox.union(Ah)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ns),Rr.copy(t.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(Rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(n),t.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ns),wh.multiplyMatrices(n,Ns),Ar.matrixWorld=wh,Ar.raycast(t,Do);for(let o=0,a=Do.length;o<a;o++){const l=Do[o];l.instanceId=r,l.object=this,e.push(l)}Do.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Th(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new as(new Float32Array(s*this.count),s,this.count,cu,ln));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ml=new D,Ym=new D,jm=new Jt;class wn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ml.subVectors(n,e).cross(Ym.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ml),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jm.getNormalMatrix(t),s=this.coplanarPoint(ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new Nn,$m=new $(.5,.5),Io=new D;class oo{constructor(t=new wn,e=new wn,n=new wn,s=new wn,r=new wn,o=new wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],v=r[13],x=r[14],S=r[15];if(s[0].setComponents(c-o,d-u,p-g,S-y).normalize(),s[1].setComponents(c+o,d+u,p+g,S+y).normalize(),s[2].setComponents(c+a,d+h,p+_,S+v).normalize(),s[3].setComponents(c-a,d-h,p-_,S-v).normalize(),n)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(c-l,d-f,p-m,S-x).normalize();else if(s[4].setComponents(c-l,d-f,p-m,S-x).normalize(),e===Wn)s[5].setComponents(c+l,d+f,p+m,S+x).normalize();else if(e===Ma)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){Ki.center.set(0,0,0);const e=$m.distanceTo(t.center);return Ki.radius=.7071067811865476+e,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Io.x=s.normal.x>0?t.max.x:t.min.x,Io.y=s.normal.y>0?t.max.y:t.min.y,Io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const jn=new $t,$n=new oo;class _u{constructor(){this.coordinateSystem=Wn}intersectsObject(t,e){if(!e.isArrayCamera||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const s=e.cameras[n];if(jn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),$n.setFromProjectionMatrix(jn,s.coordinateSystem,s.reversedDepth),$n.intersectsObject(t))return!0}return!1}intersectsSprite(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const s=e.cameras[n];if(jn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),$n.setFromProjectionMatrix(jn,s.coordinateSystem,s.reversedDepth),$n.intersectsSprite(t))return!0}return!1}intersectsSphere(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const s=e.cameras[n];if(jn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),$n.setFromProjectionMatrix(jn,s.coordinateSystem,s.reversedDepth),$n.intersectsSphere(t))return!0}return!1}intersectsBox(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const s=e.cameras[n];if(jn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),$n.setFromProjectionMatrix(jn,s.coordinateSystem,s.reversedDepth),$n.intersectsBox(t))return!0}return!1}containsPoint(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const s=e.cameras[n];if(jn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),$n.setFromProjectionMatrix(jn,s.coordinateSystem,s.reversedDepth),$n.containsPoint(t))return!0}return!1}clone(){return new _u}}function gl(i,t){return i-t}function Zm(i,t){return i.z-t.z}function Km(i,t){return t.z-i.z}class Jm{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,s){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=s}reset(){this.list.length=0,this.index=0}}const gn=new $t,Qm=new Yt(1,1,1),Rh=new oo,tg=new _u,Lo=new Ce,Ji=new Nn,Cr=new D,Ch=new D,eg=new D,_l=new Jm,Je=new Ie,Uo=[];function ng(i,t,e=0){const n=t.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==t.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,i.getComponent(r,o))}else t.array.set(i.array,e*n);t.needsUpdate=!0}function Qi(i,t){if(i.constructor!==t.constructor){const e=Math.min(i.length,t.length);for(let n=0;n<e;n++)t[n]=i[n]}else{const e=Math.min(i.length,t.length);t.set(new i.constructor(i.buffer,0,e))}}class ig extends Ie{constructor(t,e,n=e*2,s){super(new Ee,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new as(e,t,t,vn,ln);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new as(e,t,t,Pa,zi);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new as(e,t,t,vn,ln);n.colorSpace=se.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,u=new a.constructor(n*l),h=new $e(u,l,c);e.setAttribute(r,h)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);e.setIndex(new $e(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=t.getAttribute(n),r=e.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ce);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,gn),this.getBoundingBoxAt(r,Lo).applyMatrix4(gn),t.union(Lo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,s=e.length;n<s;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,gn),this.getBoundingSphereAt(r,Ji).applyMatrix4(gn),t.union(Ji)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(gl),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;gn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(Qm.toArray(o.image.data,s*4),o.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const o=t.getIndex();if(o!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?o.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(gl),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,t),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(s&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(const u in n.attributes){const h=e.getAttribute(u),f=n.getAttribute(u);ng(h,f,l);const d=h.itemSize;for(let g=h.count,_=c;g<_;g++){const m=l+g;for(let p=0;p<d;p++)f.setComponent(m,p,0)}f.needsUpdate=!0,f.addUpdateRange(l*d,c*d)}if(s){const u=a.indexStart,h=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let f=0;f<o.count;f++)r.setX(u+f,l+o.getX(f));for(let f=o.count,d=h;f<d;f++)r.setX(u+f,l);r.needsUpdate=!0,r.addUpdateRange(u,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].active&&n[s].geometryIndex===t&&this.deleteInstance(s);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const n=this._geometryInfo,s=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const l=s[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){const{indexStart:u,vertexStart:h,reservedIndexCount:f}=c,d=r.index,g=d.array,_=t-h;for(let m=u;m<u+f;m++)g[m]=g[m]+_;d.array.copyWithin(e,u,u+f),d.addUpdateRange(e,f),c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){const{vertexStart:u,reservedVertexCount:h}=c,f=r.attributes;for(const d in f){const g=f[d],{array:_,itemSize:m}=g;_.copyWithin(t*m,u*m,(u+h)*m),g.addUpdateRange(t*m,h*m)}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[t];if(s.boundingBox===null){const r=new Ce,o=n.index,a=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let u=l;o&&(u=o.getX(u)),r.expandByPoint(Cr.fromBufferAttribute(a,u))}s.boundingBox=r}return e.copy(s.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[t];if(s.boundingSphere===null){const r=new Nn;this.getBoundingBoxAt(t,Lo),Lo.getCenter(r.center);const o=n.index,a=n.attributes.position;let l=0;for(let c=s.start,u=s.start+s.count;c<u;c++){let h=c;o&&(h=o.getX(h)),Cr.fromBufferAttribute(a,h),l=Math.max(l,r.center.distanceToSquared(Cr))}r.radius=Math.sqrt(l),s.boundingSphere=r}return e.copy(s.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const n=this._matricesTexture,s=this._matricesTexture.image.data;return e.toArray(s,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(gl);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const s=new Int32Array(t),r=new Int32Array(t);Qi(this._multiDrawCounts,s),Qi(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=t;const o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Qi(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Qi(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Qi(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ee,this._initializeGeometry(r));const o=this.geometry;r.index&&Qi(r.index.array,o.index.array);for(const a in r.attributes)Qi(r.attributes[a].array,o.attributes[a].array)}raycast(t,e){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Je.material=this.material,Je.geometry.index=o.index,Je.geometry.attributes=o.attributes,Je.geometry.boundingBox===null&&(Je.geometry.boundingBox=new Ce),Je.geometry.boundingSphere===null&&(Je.geometry.boundingSphere=new Nn);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,u=s[c];Je.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,Je.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Je.geometry.boundingBox),this.getBoundingSphereAt(c,Je.geometry.boundingSphere),Je.raycast(t,Uo);for(let h=0,f=Uo.length;h<f;h++){const d=Uo[h];d.object=this,d.batchId=a,e.push(d)}Uo.length=0}Je.material=null,Je.geometry.index=null,Je.geometry.attributes={},Je.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,h=this._geometryInfo,f=this.perObjectFrustumCulled,d=this._indirectTexture,g=d.image.data,_=n.isArrayCamera?tg:Rh;f&&!n.isArrayCamera&&(gn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Rh.setFromProjectionMatrix(gn,n.coordinateSystem,n.reversedDepth));let m=0;if(this.sortObjects){gn.copy(this.matrixWorld).invert(),Cr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(gn),Ch.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(gn);for(let v=0,x=l.length;v<x;v++)if(l[v].visible&&l[v].active){const S=l[v].geometryIndex;this.getMatrixAt(v,gn),this.getBoundingSphereAt(S,Ji).applyMatrix4(gn);let E=!1;if(f&&(E=!_.intersectsSphere(Ji,n)),!E){const A=h[S],w=eg.subVectors(Ji.center,Cr).dot(Ch);_l.push(A.start,A.count,w,v)}}const p=_l.list,y=this.customSort;y===null?p.sort(r.transparent?Km:Zm):y.call(this,p,n);for(let v=0,x=p.length;v<x;v++){const S=p[v];c[m]=S.start*a,u[m]=S.count,g[m]=S.index,m++}_l.reset()}else for(let p=0,y=l.length;p<y;p++)if(l[p].visible&&l[p].active){const v=l[p].geometryIndex;let x=!1;if(f&&(this.getMatrixAt(p,gn),this.getBoundingSphereAt(v,Ji).applyMatrix4(gn),x=!_.intersectsSphere(Ji,n)),!x){const S=h[v];c[m]=S.start*a,u[m]=S.count,g[m]=p,m++}}d.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(t,e,n,s,r,o){this.onBeforeRender(t,null,s,r,o)}}class xu extends Wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Sa=new D,ba=new D,Ph=new $t,Pr=new gr,No=new Nn,xl=new D,Dh=new D;class _r extends Be{constructor(t=new Ee,e=new xu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Sa.fromBufferAttribute(e,s-1),ba.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Sa.distanceTo(ba);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;Ph.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(Ph);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),y=u.getX(_+1),v=Fo(this,t,Pr,l,p,y,_);v&&e.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Fo(this,t,Pr,l,_,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Fo(this,t,Pr,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Fo(this,t,Pr,l,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fo(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Sa.fromBufferAttribute(a,s),ba.fromBufferAttribute(a,r),e.distanceSqToSegment(Sa,ba,xl,Dh)>n)return;xl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(xl);if(!(c<t.near||c>t.far))return{distance:c,point:Dh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Ih=new D,Lh=new D;class vd extends _r{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ih.fromBufferAttribute(e,s),Lh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ih.distanceTo(Lh);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yd extends _r{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class sg extends Wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Uh=new $t,Fc=new gr,Oo=new Nn,Bo=new D;class Md extends Be{constructor(t=new Ee,e=new sg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(s),Oo.radius+=r,t.ray.intersectsSphere(Oo)===!1)return;Uh.copy(s).invert(),Fc.copy(t.ray).applyMatrix4(Uh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Bo.fromBufferAttribute(h,m),Nh(Bo,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Bo.fromBufferAttribute(h,g),Nh(Bo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Nh(i,t,e,n,s,r,o){const a=Fc.distanceSqToPoint(i);if(a<e){const l=new D;Fc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class fb extends Ge{constructor(t,e,n,s,r,o,a,l,c,u,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class rg extends Ge{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vu extends Ge{constructor(t,e,n=zi,s,r,o,a=hn,l=hn,c,u=Kr,h=1){if(u!==Kr&&u!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Sd extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class yu extends Ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new D,u=new $;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Mu extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(d,2));function y(){const x=new D,S=new D;let E=0;const A=(e-t)/n;for(let w=0;w<=r;w++){const b=[],M=w/r,R=M*(e-t)+t;for(let P=0;P<=s;P++){const L=P/s,N=L*l+a,O=Math.sin(N),z=Math.cos(N);S.x=R*O,S.y=-M*n+m,S.z=R*z,h.push(S.x,S.y,S.z),x.set(O,A,z).normalize(),f.push(x.x,x.y,x.z),d.push(L,1-M),b.push(g++)}_.push(b)}for(let w=0;w<s;w++)for(let b=0;b<r;b++){const M=_[b][w],R=_[b+1][w],P=_[b+1][w+1],L=_[b][w+1];(t>0||b!==0)&&(u.push(M,R,L),E+=3),(e>0||b!==r-1)&&(u.push(R,P,L),E+=3)}c.addGroup(p,E,0),p+=E}function v(x){const S=g,E=new $,A=new D;let w=0;const b=x===!0?t:e,M=x===!0?1:-1;for(let P=1;P<=s;P++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const R=g;for(let P=0;P<=s;P++){const N=P/s*l+a,O=Math.cos(N),z=Math.sin(N);A.x=b*z,A.y=m*M,A.z=b*O,h.push(A.x,A.y,A.z),f.push(0,M,0),E.x=O*.5+.5,E.y=z*.5*M+.5,d.push(E.x,E.y),g++}for(let P=0;P<s;P++){const L=S+P,N=R+P;x===!0?u.push(N,N+1,L):u.push(N+1,N,L),w+=3}c.addGroup(p,w,x===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new $:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new D,s=[],r=[],o=[],a=new D,l=new $t;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Gt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Gt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Su extends Qn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new $){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class og extends Su{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function bu(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const zo=new D,vl=new bu,yl=new bu,Ml=new bu;class ag extends Qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(zo.subVectors(s[0],s[1]).add(s[0]),c=zo);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(zo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=zo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),vl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),yl.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),Ml.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),yl.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ml.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(vl.calc(l),yl.calc(l),Ml.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Fh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function lg(i,t){const e=1-i;return e*e*t}function cg(i,t){return 2*(1-i)*i*t}function ug(i,t){return i*i*t}function qr(i,t,e,n){return lg(i,t)+cg(i,e)+ug(i,n)}function hg(i,t){const e=1-i;return e*e*e*t}function fg(i,t){const e=1-i;return 3*e*e*i*t}function dg(i,t){return 3*(1-i)*i*i*t}function pg(i,t){return i*i*i*t}function Yr(i,t,e,n,s){return hg(i,t)+fg(i,e)+dg(i,n)+pg(i,s)}class bd extends Qn{constructor(t=new $,e=new $,n=new $,s=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new $){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yr(t,s.x,r.x,o.x,a.x),Yr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mg extends Qn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yr(t,s.x,r.x,o.x,a.x),Yr(t,s.y,r.y,o.y,a.y),Yr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ed extends Qn{constructor(t=new $,e=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gg extends Qn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Td extends Qn{constructor(t=new $,e=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qr(t,s.x,r.x,o.x),qr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _g extends Qn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(qr(t,s.x,r.x,o.x),qr(t,s.y,r.y,o.y),qr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wd extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Fh(a,l.x,c.x,u.x,h.x),Fh(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new $().fromArray(s))}return this}}var Oc=Object.freeze({__proto__:null,ArcCurve:og,CatmullRomCurve3:ag,CubicBezierCurve:bd,CubicBezierCurve3:mg,EllipseCurve:Su,LineCurve:Ed,LineCurve3:gg,QuadraticBezierCurve:Td,QuadraticBezierCurve3:_g,SplineCurve:wd});class xg extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Oc[s.type]().fromJSON(s))}return this}}class Oh extends xg{constructor(t){super(),this.type="Path",this.currentPoint=new $,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ed(this.currentPoint.clone(),new $(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Td(this.currentPoint.clone(),new $(t,e),new $(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new bd(this.currentPoint.clone(),new $(t,e),new $(n,s),new $(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new wd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Su(t,e,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class hs extends Oh{constructor(t){super(t),this.uuid=ps(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Oh().fromJSON(s))}return this}}function vg(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ad(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Eg(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=e;f<s;f+=e){const d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return eo(r,o,e,a,l,c,0),o}function Ad(i,t,e,n,s){let r;if(s===Ng(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Bh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Bh(o/n|0,i[o],i[o+1],r);return r&&dr(r,r.next)&&(io(r),r=r.next),r}function fs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(dr(e,e.next)||be(e.prev,e,e.next)===0)){if(io(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function eo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Cg(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Mg(i,n,s,r):yg(i)){t.push(l.i,i.i,c.i),io(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Sg(fs(i),t),eo(i,t,e,n,s,r,2)):o===2&&bg(i,t,e,n,s,r):eo(fs(i),t,e,n,s,r,1);break}}}function yg(i){const t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Vr(s,a,r,l,o,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Mg(i,t,e,n){const s=i.prev,r=i,o=i.next;if(be(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(u,h,f),_=Math.max(a,l,c),m=Math.max(u,h,f),p=Bc(d,g,t,e,n),y=Bc(_,m,t,e,n);let v=i.prevZ,x=i.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Vr(a,u,l,h,c,f,v.x,v.y)&&be(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Vr(a,u,l,h,c,f,x.x,x.y)&&be(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Vr(a,u,l,h,c,f,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Vr(a,u,l,h,c,f,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Sg(i,t){let e=i;do{const n=e.prev,s=e.next.next;!dr(n,s)&&Cd(n,e,e.next,s)&&no(n,s)&&no(s,n)&&(t.push(n.i,e.i,s.i),io(e),io(e.next),e=i=s),e=e.next}while(e!==i);return fs(e)}function bg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ig(o,a)){let l=Pd(o,a);o=fs(o,o.next),l=fs(l,l.next),eo(o,t,e,n,s,r,0),eo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Eg(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Ad(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Dg(c))}s.sort(Tg);for(let r=0;r<s.length;r++)e=wg(s[r],e);return e}function Tg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function wg(i,t){const e=Ag(i,t);if(!e)return t;const n=Pd(e,i);return fs(n,n.next),fs(e,e.next)}function Ag(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(dr(i,e))return e;do{if(dr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Rd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const h=Math.abs(s-e.y)/(n-e.x);no(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&Rg(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function Rg(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function Cg(i,t,e,n){let s=i;do s.z===0&&(s.z=Bc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Pg(s)}function Pg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Bc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Dg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Rd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Vr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Rd(i,t,e,n,s,r,o,a)}function Ig(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Lg(i,t)&&(no(i,t)&&no(t,i)&&Ug(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||dr(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function dr(i,t){return i.x===t.x&&i.y===t.y}function Cd(i,t,e,n){const s=Vo(be(i,t,e)),r=Vo(be(i,t,n)),o=Vo(be(e,n,i)),a=Vo(be(e,n,t));return!!(s!==r&&o!==a||s===0&&ko(i,e,t)||r===0&&ko(i,n,t)||o===0&&ko(e,i,n)||a===0&&ko(e,t,n))}function ko(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Vo(i){return i>0?1:i<0?-1:0}function Lg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Cd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function no(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function Ug(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Pd(i,t){const e=zc(i.i,i.x,i.y),n=zc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Bh(i,t,e,n){const s=zc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function io(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function zc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ng(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Fg{static triangulate(t,e,n=2){return vg(t,e,n)}}class xi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return xi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];zh(t),kh(n,t);let o=t.length;e.forEach(zh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,kh(n,e[l]);const a=Fg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function zh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function kh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ls extends Ee{constructor(t=new hs([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Og;let v,x=!1,S,E,A,w;p&&(v=p.getSpacedPoints(u),x=!0,f=!1,S=p.computeFrenetFrames(u,!1),E=new D,A=new D,w=new D),f||(m=0,d=0,g=0,_=0);const b=a.extractPoints(c);let M=b.shape;const R=b.holes;if(!xi.isClockWise(M)){M=M.reverse();for(let st=0,Q=R.length;st<Q;st++){const K=R[st];xi.isClockWise(K)&&(R[st]=K.reverse())}}function L(st){const K=10000000000000001e-36;let Z=st[0];for(let mt=1;mt<=st.length;mt++){const at=mt%st.length,gt=st[at],Wt=gt.x-Z.x,Vt=gt.y-Z.y,I=Wt*Wt+Vt*Vt,T=Math.max(Math.abs(gt.x),Math.abs(gt.y),Math.abs(Z.x),Math.abs(Z.y)),H=K*T*T;if(I<=H){st.splice(at,1),mt--;continue}Z=gt}}L(M),R.forEach(L);const N=R.length,O=M;for(let st=0;st<N;st++){const Q=R[st];M=M.concat(Q)}function z(st,Q,K){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(Q,K)}const J=M.length;function G(st,Q,K){let Z,mt,at;const gt=st.x-Q.x,Wt=st.y-Q.y,Vt=K.x-st.x,I=K.y-st.y,T=gt*gt+Wt*Wt,H=gt*I-Wt*Vt;if(Math.abs(H)>Number.EPSILON){const q=Math.sqrt(T),it=Math.sqrt(Vt*Vt+I*I),Y=Q.x-Wt/q,Rt=Q.y+gt/q,ft=K.x-I/it,At=K.y+Vt/it,It=((ft-Y)*I-(At-Rt)*Vt)/(gt*I-Wt*Vt);Z=Y+gt*It-st.x,mt=Rt+Wt*It-st.y;const ct=Z*Z+mt*mt;if(ct<=2)return new $(Z,mt);at=Math.sqrt(ct/2)}else{let q=!1;gt>Number.EPSILON?Vt>Number.EPSILON&&(q=!0):gt<-Number.EPSILON?Vt<-Number.EPSILON&&(q=!0):Math.sign(Wt)===Math.sign(I)&&(q=!0),q?(Z=-Wt,mt=gt,at=Math.sqrt(T)):(Z=gt,mt=Wt,at=Math.sqrt(T/2))}return new $(Z/at,mt/at)}const nt=[];for(let st=0,Q=O.length,K=Q-1,Z=st+1;st<Q;st++,K++,Z++)K===Q&&(K=0),Z===Q&&(Z=0),nt[st]=G(O[st],O[K],O[Z]);const ut=[];let vt,Pt=nt.concat();for(let st=0,Q=N;st<Q;st++){const K=R[st];vt=[];for(let Z=0,mt=K.length,at=mt-1,gt=Z+1;Z<mt;Z++,at++,gt++)at===mt&&(at=0),gt===mt&&(gt=0),vt[Z]=G(K[Z],K[at],K[gt]);ut.push(vt),Pt=Pt.concat(vt)}let Bt;if(m===0)Bt=xi.triangulateShape(O,R);else{const st=[],Q=[];for(let K=0;K<m;K++){const Z=K/m,mt=d*Math.cos(Z*Math.PI/2),at=g*Math.sin(Z*Math.PI/2)+_;for(let gt=0,Wt=O.length;gt<Wt;gt++){const Vt=z(O[gt],nt[gt],at);wt(Vt.x,Vt.y,-mt),Z===0&&st.push(Vt)}for(let gt=0,Wt=N;gt<Wt;gt++){const Vt=R[gt];vt=ut[gt];const I=[];for(let T=0,H=Vt.length;T<H;T++){const q=z(Vt[T],vt[T],at);wt(q.x,q.y,-mt),Z===0&&I.push(q)}Z===0&&Q.push(I)}}Bt=xi.triangulateShape(st,Q)}const te=Bt.length,jt=g+_;for(let st=0;st<J;st++){const Q=f?z(M[st],Pt[st],jt):M[st];x?(A.copy(S.normals[0]).multiplyScalar(Q.x),E.copy(S.binormals[0]).multiplyScalar(Q.y),w.copy(v[0]).add(A).add(E),wt(w.x,w.y,w.z)):wt(Q.x,Q.y,0)}for(let st=1;st<=u;st++)for(let Q=0;Q<J;Q++){const K=f?z(M[Q],Pt[Q],jt):M[Q];x?(A.copy(S.normals[st]).multiplyScalar(K.x),E.copy(S.binormals[st]).multiplyScalar(K.y),w.copy(v[st]).add(A).add(E),wt(w.x,w.y,w.z)):wt(K.x,K.y,h/u*st)}for(let st=m-1;st>=0;st--){const Q=st/m,K=d*Math.cos(Q*Math.PI/2),Z=g*Math.sin(Q*Math.PI/2)+_;for(let mt=0,at=O.length;mt<at;mt++){const gt=z(O[mt],nt[mt],Z);wt(gt.x,gt.y,h+K)}for(let mt=0,at=R.length;mt<at;mt++){const gt=R[mt];vt=ut[mt];for(let Wt=0,Vt=gt.length;Wt<Vt;Wt++){const I=z(gt[Wt],vt[Wt],Z);x?wt(I.x,I.y+v[u-1].y,v[u-1].x+K):wt(I.x,I.y,h+K)}}}j(),tt();function j(){const st=s.length/3;if(f){let Q=0,K=J*Q;for(let Z=0;Z<te;Z++){const mt=Bt[Z];Tt(mt[2]+K,mt[1]+K,mt[0]+K)}Q=u+m*2,K=J*Q;for(let Z=0;Z<te;Z++){const mt=Bt[Z];Tt(mt[0]+K,mt[1]+K,mt[2]+K)}}else{for(let Q=0;Q<te;Q++){const K=Bt[Q];Tt(K[2],K[1],K[0])}for(let Q=0;Q<te;Q++){const K=Bt[Q];Tt(K[0]+J*u,K[1]+J*u,K[2]+J*u)}}n.addGroup(st,s.length/3-st,0)}function tt(){const st=s.length/3;let Q=0;Mt(O,Q),Q+=O.length;for(let K=0,Z=R.length;K<Z;K++){const mt=R[K];Mt(mt,Q),Q+=mt.length}n.addGroup(st,s.length/3-st,1)}function Mt(st,Q){let K=st.length;for(;--K>=0;){const Z=K;let mt=K-1;mt<0&&(mt=st.length-1);for(let at=0,gt=u+m*2;at<gt;at++){const Wt=J*at,Vt=J*(at+1),I=Q+Z+Wt,T=Q+mt+Wt,H=Q+mt+Vt,q=Q+Z+Vt;Kt(I,T,H,q)}}}function wt(st,Q,K){l.push(st),l.push(Q),l.push(K)}function Tt(st,Q,K){ie(st),ie(Q),ie(K);const Z=s.length/3,mt=y.generateTopUV(n,s,Z-3,Z-2,Z-1);U(mt[0]),U(mt[1]),U(mt[2])}function Kt(st,Q,K,Z){ie(st),ie(Q),ie(Z),ie(Q),ie(K),ie(Z);const mt=s.length/3,at=y.generateSideWallUV(n,s,mt-6,mt-3,mt-2,mt-1);U(at[0]),U(at[1]),U(at[3]),U(at[1]),U(at[2]),U(at[3])}function ie(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function U(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Bg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Oc[s.type]().fromJSON(s)),new ls(n,t.options)}}const Og={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new $(r,o),new $(a,l),new $(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new $(o,1-l),new $(c,1-h),new $(f,1-g),new $(_,1-p)]:[new $(a,1-l),new $(u,1-h),new $(d,1-g),new $(m,1-p)]}};function Bg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class gs extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*f-o;for(let v=0;v<c;v++){const x=v*h-r;g.push(x,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const v=y+c*p,x=y+c*(p+1),S=y+1+c*(p+1),E=y+1+c*p;d.push(v,x,E),d.push(x,S,E)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Eu extends Ee{constructor(t=new hs([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ue(s,3)),this.setAttribute("normal",new ue(r,3)),this.setAttribute("uv",new ue(o,2));function c(u){const h=s.length/3,f=u.extractPoints(e);let d=f.shape;const g=f.holes;xi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];xi.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=xi.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){const y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){const y=_[m],v=y[0]+h,x=y[1]+h,S=y[2]+h;n.push(v,x,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return zg(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Eu(n,t.curveSegments)}}function zg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ia extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,f=new D,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],v=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let S=0;S<=e;S++){const E=S/e;h.x=-t*Math.cos(s+E*r)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(s+E*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(E+x,1-v),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const v=u[p][y+1],x=u[p][y],S=u[p+1][y],E=u[p+1][y+1];(p!==0||o>0)&&d.push(v,x,E),(p!==n-1||l<Math.PI)&&d.push(x,S,E)}this.setIndex(d),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class kg extends De{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ea extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fu,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sl extends Ea{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Vg extends Wi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fu,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Hg extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gg extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const jr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Wg{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Xg=new Wg;class ao{constructor(t){this.manager=t!==void 0?t:Xg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ao.DEFAULT_MATERIAL_NAME="__DEFAULT";const oi={};class qg extends Error{constructor(t,e){super(t),this.response=e}}class Yg extends ao{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=jr.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(oi[t]!==void 0){oi[t].push({onLoad:e,onProgress:n,onError:s});return}oi[t]=[],oi[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=oi[t],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:v,value:x})=>{if(v)p.close();else{_+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let E=0,A=u.length;E<A;E++){const w=u[E];w.onProgress&&w.onProgress(S)}p.enqueue(x),y()}},v=>{p.error(v)})}}});return new Response(m)}else throw new qg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{jr.add(`file:${t}`,c);const u=oi[t];delete oi[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=oi[t];if(u===void 0)throw this.manager.itemError(t),c;delete oi[t];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Fs=new WeakMap;class jg extends ao{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=jr.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let h=Fs.get(o);h===void 0&&(h=[],Fs.set(o,h)),h.push({onLoad:e,onError:s})}return o}const a=Qr("img");function l(){u(),e&&e(this);const h=Fs.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Fs.delete(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),jr.remove(`image:${t}`);const f=Fs.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}Fs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),jr.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class $g extends ao{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new as,a=new Yg(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:_i,o.wrapT=c.wrapT!==void 0?c.wrapT:_i,o.magFilter=c.magFilter!==void 0?c.magFilter:an,o.minFilter=c.minFilter!==void 0?c.minFilter:an,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Fi),c.mipmapCount===1&&(o.minFilter=an),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,s),o}}class Zg extends ao{constructor(t){super(t)}load(t,e,n,s){const r=new Ge,o=new jg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Tu extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Kg extends Tu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const bl=new $t,Vh=new D,Hh=new D;class Dd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oo,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vh),Hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hh),e.updateMatrixWorld(),bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Gh=new $t,Dr=new D,El=new D;class Jg extends Dd{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Dr),El.copy(n.position),El.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(El),n.updateMatrixWorld(),s.makeTranslation(-Dr.x,-Dr.y,-Dr.z),Gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh,n.coordinateSystem,n.reversedDepth)}}class Qg extends Tu{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class La extends _d{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class t0 extends Dd{constructor(){super(new La(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Id extends Tu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new t0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class e0 extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ld{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const wu="\\[\\]\\.:\\/",n0=new RegExp("["+wu+"]","g"),Au="[^"+wu+"]",i0="[^"+wu.replace("\\.","")+"]",s0=/((?:WC+[\/:])*)/.source.replace("WC",Au),r0=/(WCOD+)?/.source.replace("WCOD",i0),o0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Au),a0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Au),l0=new RegExp("^"+s0+r0+o0+a0+"$"),c0=["material","materials","bones","map"];class u0{constructor(t,e,n){const s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class fe{constructor(t,e,n){this.path=e,this.parsedPath=n||fe.parseTrackName(e),this.node=fe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new fe.Composite(t,e,n):new fe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(n0,"")}static parseTrackName(t){const e=l0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);c0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=fe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[s];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}fe.Composite=u0;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Wh=new $t;class Ud{constructor(t,e,n=0,s=1/0){this.ray=new gr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new mu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wh),this}intersectObject(t,e=!0,n=[]){return kc(t,this,n,e),n.sort(Xh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)kc(t[s],this,n,e);return n.sort(Xh),n}}function Xh(i,t){return i.distance-t.distance}function kc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)kc(r[o],t,e,!0)}}class qh{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Gt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Yh=new D,Ho=new D,Os=new D,Bs=new D,Tl=new D,h0=new D,f0=new D;class Si{constructor(t=new D,e=new D){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Yh.subVectors(t,this.start),Ho.subVectors(this.end,this.start);const n=Ho.dot(Ho);let r=Ho.dot(Yh)/n;return e&&(r=Gt(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=h0,n=f0){const s=10000000000000001e-32;let r,o;const a=this.start,l=t.start,c=this.end,u=t.end;Os.subVectors(c,a),Bs.subVectors(u,l),Tl.subVectors(a,l);const h=Os.dot(Os),f=Bs.dot(Bs),d=Bs.dot(Tl);if(h<=s&&f<=s)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(h<=s)r=0,o=d/f,o=Gt(o,0,1);else{const g=Os.dot(Tl);if(f<=s)o=0,r=Gt(-g/h,0,1);else{const _=Os.dot(Bs),m=h*f-_*_;m!==0?r=Gt((_*d-g*f)/m,0,1):r=0,o=(_*r+d)/f,o<0?(o=0,r=Gt(-g/h,0,1)):o>1&&(o=1,r=Gt((_-g)/h,0,1))}}return e.copy(a).add(Os.multiplyScalar(r)),n.copy(l).add(Bs.multiplyScalar(o)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Nd extends ds{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function jh(i,t,e,n){const s=d0(n);switch(e){case ad:return i*t;case cu:return i*t/s.components*s.byteLength;case Pa:return i*t/s.components*s.byteLength;case cd:return i*t*2/s.components*s.byteLength;case uu:return i*t*2/s.components*s.byteLength;case ld:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case hu:return i*t*4/s.components*s.byteLength;case da:case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lc:case uc:return Math.max(i,16)*Math.max(t,8)/4;case ac:case cc:return Math.max(i,8)*Math.max(t,8)/2;case hc:case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rc:case Cc:case Pc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Dc:case Ic:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Lc:case Uc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function d0(i){switch(i){case Xn:case id:return{byteLength:1,components:1};case Zr:case sd:case cn:return{byteLength:2,components:1};case au:case lu:return{byteLength:2,components:4};case zi:case ou:case ln:return{byteLength:4,components:1};case rd:case od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ro);function Fd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function p0(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var m0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,S0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,E0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,C0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,B0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,k0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X0="gl_FragColor = linearToOutputTexel( gl_FragColor );",q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,J0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,a_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,l_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,__=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,D_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,B_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,W_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Q_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ax=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ox=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:m0,alphahash_pars_fragment:g0,alphamap_fragment:_0,alphamap_pars_fragment:x0,alphatest_fragment:v0,alphatest_pars_fragment:y0,aomap_fragment:M0,aomap_pars_fragment:S0,batching_pars_vertex:b0,batching_vertex:E0,begin_vertex:T0,beginnormal_vertex:w0,bsdfs:A0,iridescence_fragment:R0,bumpmap_pars_fragment:C0,clipping_planes_fragment:P0,clipping_planes_pars_fragment:D0,clipping_planes_pars_vertex:I0,clipping_planes_vertex:L0,color_fragment:U0,color_pars_fragment:N0,color_pars_vertex:F0,color_vertex:O0,common:B0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:k0,displacementmap_pars_vertex:V0,displacementmap_vertex:H0,emissivemap_fragment:G0,emissivemap_pars_fragment:W0,colorspace_fragment:X0,colorspace_pars_fragment:q0,envmap_fragment:Y0,envmap_common_pars_fragment:j0,envmap_pars_fragment:$0,envmap_pars_vertex:Z0,envmap_physical_pars_fragment:a_,envmap_vertex:K0,fog_vertex:J0,fog_pars_vertex:Q0,fog_fragment:t_,fog_pars_fragment:e_,gradientmap_pars_fragment:n_,lightmap_pars_fragment:i_,lights_lambert_fragment:s_,lights_lambert_pars_fragment:r_,lights_pars_begin:o_,lights_toon_fragment:l_,lights_toon_pars_fragment:c_,lights_phong_fragment:u_,lights_phong_pars_fragment:h_,lights_physical_fragment:f_,lights_physical_pars_fragment:d_,lights_fragment_begin:p_,lights_fragment_maps:m_,lights_fragment_end:g_,logdepthbuf_fragment:__,logdepthbuf_pars_fragment:x_,logdepthbuf_pars_vertex:v_,logdepthbuf_vertex:y_,map_fragment:M_,map_pars_fragment:S_,map_particle_fragment:b_,map_particle_pars_fragment:E_,metalnessmap_fragment:T_,metalnessmap_pars_fragment:w_,morphinstance_vertex:A_,morphcolor_vertex:R_,morphnormal_vertex:C_,morphtarget_pars_vertex:P_,morphtarget_vertex:D_,normal_fragment_begin:I_,normal_fragment_maps:L_,normal_pars_fragment:U_,normal_pars_vertex:N_,normal_vertex:F_,normalmap_pars_fragment:O_,clearcoat_normal_fragment_begin:B_,clearcoat_normal_fragment_maps:z_,clearcoat_pars_fragment:k_,iridescence_pars_fragment:V_,opaque_fragment:H_,packing:G_,premultiplied_alpha_fragment:W_,project_vertex:X_,dithering_fragment:q_,dithering_pars_fragment:Y_,roughnessmap_fragment:j_,roughnessmap_pars_fragment:$_,shadowmap_pars_fragment:Z_,shadowmap_pars_vertex:K_,shadowmap_vertex:J_,shadowmask_pars_fragment:Q_,skinbase_vertex:tx,skinning_pars_vertex:ex,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:sx,specularmap_pars_fragment:rx,tonemapping_fragment:ox,tonemapping_pars_fragment:ax,transmission_fragment:lx,transmission_pars_fragment:cx,uv_pars_fragment:ux,uv_pars_vertex:hx,uv_vertex:fx,worldpos_vertex:dx,background_vert:px,background_frag:mx,backgroundCube_vert:gx,backgroundCube_frag:_x,cube_vert:xx,cube_frag:vx,depth_vert:yx,depth_frag:Mx,distanceRGBA_vert:Sx,distanceRGBA_frag:bx,equirect_vert:Ex,equirect_frag:Tx,linedashed_vert:wx,linedashed_frag:Ax,meshbasic_vert:Rx,meshbasic_frag:Cx,meshlambert_vert:Px,meshlambert_frag:Dx,meshmatcap_vert:Ix,meshmatcap_frag:Lx,meshnormal_vert:Ux,meshnormal_frag:Nx,meshphong_vert:Fx,meshphong_frag:Ox,meshphysical_vert:Bx,meshphysical_frag:zx,meshtoon_vert:kx,meshtoon_frag:Vx,points_vert:Hx,points_frag:Gx,shadow_vert:Wx,shadow_frag:Xx,sprite_vert:qx,sprite_frag:Yx},St={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Zn={basic:{uniforms:rn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:rn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:rn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:rn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:rn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:rn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:rn([St.points,St.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:rn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:rn([St.common,St.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:rn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:rn([St.sprite,St.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:rn([St.common,St.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:rn([St.lights,St.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Zn.physical={uniforms:rn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Go={r:0,b:0,g:0},ts=new Fn,jx=new $t;function $x(i,t,e,n,s,r,o){const a=new Yt(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1;const S=g(v);S===null?p(a,l):S&&S.isColor&&(p(S,1),x=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===Ca)?(u===void 0&&(u=new Ie(new ms(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:fr(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ts.copy(x.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jx.makeRotationFromEuler(ts)),u.material.toneMapped=se.getTransfer(S.colorSpace)!==ce,(h!==S||f!==S.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ie(new gs(2,2),new De({name:"BackgroundMaterial",uniforms:fr(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=se.getTransfer(S.colorSpace)!==ce,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,x){v.getRGB(Go,gd(i)),n.buffers.color.setClear(Go.r,Go.g,Go.b,x,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m,dispose:y}}function Zx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,R,P,L,N){let O=!1;const z=h(L,P,R);r!==z&&(r=z,c(r.object)),O=d(M,L,P,N),O&&g(M,L,P,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(M,R,P,L),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,R,P){const L=P.wireframe===!0;let N=n[M.id];N===void 0&&(N={},n[M.id]=N);let O=N[R.id];O===void 0&&(O={},N[R.id]=O);let z=O[L];return z===void 0&&(z=f(l()),O[L]=z),z}function f(M){const R=[],P=[],L=[];for(let N=0;N<e;N++)R[N]=0,P[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:P,attributeDivisors:L,object:M,attributes:{},index:null}}function d(M,R,P,L){const N=r.attributes,O=R.attributes;let z=0;const J=P.getAttributes();for(const G in J)if(J[G].location>=0){const ut=N[G];let vt=O[G];if(vt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor)),ut===void 0||ut.attribute!==vt||vt&&ut.data!==vt.data)return!0;z++}return r.attributesNum!==z||r.index!==L}function g(M,R,P,L){const N={},O=R.attributes;let z=0;const J=P.getAttributes();for(const G in J)if(J[G].location>=0){let ut=O[G];ut===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));const vt={};vt.attribute=ut,ut&&ut.data&&(vt.data=ut.data),N[G]=vt,z++}r.attributes=N,r.attributesNum=z,r.index=L}function _(){const M=r.newAttributes;for(let R=0,P=M.length;R<P;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const P=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;P[M]=1,L[M]===0&&(i.enableVertexAttribArray(M),L[M]=1),N[M]!==R&&(i.vertexAttribDivisor(M,R),N[M]=R)}function y(){const M=r.newAttributes,R=r.enabledAttributes;for(let P=0,L=R.length;P<L;P++)R[P]!==M[P]&&(i.disableVertexAttribArray(P),R[P]=0)}function v(M,R,P,L,N,O,z){z===!0?i.vertexAttribIPointer(M,R,P,N,O):i.vertexAttribPointer(M,R,P,L,N,O)}function x(M,R,P,L){_();const N=L.attributes,O=P.getAttributes(),z=R.defaultAttributeValues;for(const J in O){const G=O[J];if(G.location>=0){let nt=N[J];if(nt===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),nt!==void 0){const ut=nt.normalized,vt=nt.itemSize,Pt=t.get(nt);if(Pt===void 0)continue;const Bt=Pt.buffer,te=Pt.type,jt=Pt.bytesPerElement,j=te===i.INT||te===i.UNSIGNED_INT||nt.gpuType===ou;if(nt.isInterleavedBufferAttribute){const tt=nt.data,Mt=tt.stride,wt=nt.offset;if(tt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<G.locationSize;Tt++)p(G.location+Tt,tt.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Tt=0;Tt<G.locationSize;Tt++)m(G.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let Tt=0;Tt<G.locationSize;Tt++)v(G.location+Tt,vt/G.locationSize,te,ut,Mt*jt,(wt+vt/G.locationSize*Tt)*jt,j)}else{if(nt.isInstancedBufferAttribute){for(let tt=0;tt<G.locationSize;tt++)p(G.location+tt,nt.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let tt=0;tt<G.locationSize;tt++)m(G.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let tt=0;tt<G.locationSize;tt++)v(G.location+tt,vt/G.locationSize,te,ut,vt*jt,vt/G.locationSize*tt*jt,j)}}else if(z!==void 0){const ut=z[J];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(G.location,ut);break;case 3:i.vertexAttrib3fv(G.location,ut);break;case 4:i.vertexAttrib4fv(G.location,ut);break;default:i.vertexAttrib1fv(G.location,ut)}}}}y()}function S(){w();for(const M in n){const R=n[M];for(const P in R){const L=R[P];for(const N in L)u(L[N].object),delete L[N];delete R[P]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const P in R){const L=R[P];for(const N in L)u(L[N].object),delete L[N];delete R[P]}delete n[M.id]}function A(M){for(const R in n){const P=n[R];if(P[M.id]===void 0)continue;const L=P[M.id];for(const N in L)u(L[N].object),delete L[N];delete P[M.id]}}function w(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Kx(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Jx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const w=A===cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ln&&!w)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:S,maxSamples:E}}function Qx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new wn,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,v=y*4;let x=p.clippingState||null;l.value=x,x=u(g,f,v,d);for(let S=0;S!==v;++S)x[S]=e[S];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==_;++v,x+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function tv(i){let t=new WeakMap;function e(o,a){return a===sc?o.mapping=lr:a===rc&&(o.mapping=cr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===sc||a===rc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Hm(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const tr=4,$h=[.125,.215,.35,.446,.526,.582],os=20,wl=new La,Zh=new Yt;let Al=null,Rl=0,Cl=0,Pl=!1;const rs=(1+Math.sqrt(5))/2,zs=1/rs,Kh=[new D(-rs,zs,0),new D(rs,zs,0),new D(-zs,0,rs),new D(zs,0,rs),new D(0,rs,-zs),new D(0,rs,zs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],ev=new D;class Vc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=ev}=r;Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Al,Rl,Cl),this._renderer.xr.enabled=Pl,t.scissorTest=!1,Wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===lr||t.mapping===cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:cn,format:vn,colorSpace:us,depthBuffer:!1},s=Jh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nv(r)),this._blurMaterial=iv(r,t,e)}return s}_compileMaterial(t){const e=new Ie(this._lodPlanes[0],t);this._renderer.compile(e,wl)}_sceneToCubeUV(t,e,n,s,r){const l=new Tn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Zh),h.toneMapping=Bi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new Da({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),m=new Ie(new ms,_);let p=!1;const y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,p=!0):(_.color.copy(Zh),p=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));const S=this._cubeSize;Wo(s,x*S,v>2?S:0,S,S),h.setRenderTarget(s),p&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===lr||t.mapping===cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Wo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,wl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kh[(s-r-1)%Kh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ie(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*os-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):os;m>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);const p=[];let y=0;for(let A=0;A<os;++A){const w=A/_,b=Math.exp(-w*w/2);p.push(b),A===0?y+=b:A<m&&(y+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const x=this._sizeLods[s],S=3*x*(s>v-tr?s-v+tr:0),E=4*(this._cubeSize-x);Wo(e,S,E,3*x,2*x),l.setRenderTarget(e),l.render(h,wl)}}function nv(i){const t=[],e=[],n=[];let s=i;const r=i-tr+1+$h.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-tr?l=$h[o-i+tr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),v=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,w=E>2?0:-1,b=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];y.set(b,_*g*E),v.set(f,m*g*E);const M=[E,E,E,E,E,E];x.set(M,p*g*E)}const S=new Ee;S.setAttribute("position",new $e(y,_)),S.setAttribute("uv",new $e(v,m)),S.setAttribute("faceIndex",new $e(x,p)),t.push(S),s>tr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jh(i,t,e){const n=new An(i,t,e);return n.texture.mapping=Ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function iv(i,t,e){const n=new Float32Array(os),s=new D(0,1,0);return new De({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qe,depthTest:!1,depthWrite:!1})}function Qh(){return new De({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qe,depthTest:!1,depthWrite:!1})}function tf(){return new De({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qe,depthTest:!1,depthWrite:!1})}function Ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sv(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===sc||l===rc,u=l===lr||l===cr;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Vc(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Vc(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function rv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&to("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ov(i,t,e,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,x=y.length;v<x;v+=3){const S=y[v+0],E=y[v+1],A=y[v+2];f.push(S,E,E,A,A,S)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const S=v+0,E=v+1,A=v+2;f.push(S,E,E,A,A,S)}}else return;const m=new(hd(f)?md:pd)(f,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function av(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function lv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function cv(i,t,e){const n=new WeakMap,s=new pe;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let b=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const E=new Float32Array(x*S*4*h),A=new fd(E,x,S,h);A.type=ln,A.needsUpdate=!0;const w=v*4;for(let M=0;M<h;M++){const R=m[M],P=p[M],L=y[M],N=x*S*4*M;for(let O=0;O<R.count;O++){const z=O*w;d===!0&&(s.fromBufferAttribute(R,O),E[N+z+0]=s.x,E[N+z+1]=s.y,E[N+z+2]=s.z,E[N+z+3]=0),g===!0&&(s.fromBufferAttribute(P,O),E[N+z+4]=s.x,E[N+z+5]=s.y,E[N+z+6]=s.z,E[N+z+7]=0),_===!0&&(s.fromBufferAttribute(L,O),E[N+z+8]=s.x,E[N+z+9]=s.y,E[N+z+10]=s.z,E[N+z+11]=L.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new $(x,S)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function uv(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Od=new Ge,ef=new vu(1,1),Bd=new fd,zd=new bm,kd=new xd,nf=[],sf=[],rf=new Float32Array(16),of=new Float32Array(9),af=new Float32Array(4);function xr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=nf[s];if(r===void 0&&(r=new Float32Array(s),nf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ua(i,t){let e=sf[t];e===void 0&&(e=new Int32Array(t),sf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function dv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function pv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function mv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;af.set(n),i.uniformMatrix2fv(this.addr,!1,af),ke(e,n)}}function gv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;of.set(n),i.uniformMatrix3fv(this.addr,!1,of),ke(e,n)}}function _v(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;rf.set(n),i.uniformMatrix4fv(this.addr,!1,rf),ke(e,n)}}function xv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function yv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function Mv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function Sv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function Ev(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function Tv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function wv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ef.compareFunction=ud,r=ef):r=Od,e.setTexture2D(t||r,s)}function Av(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zd,s)}function Rv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||kd,s)}function Cv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bd,s)}function Pv(i){switch(i){case 5126:return hv;case 35664:return fv;case 35665:return dv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return _v;case 5124:case 35670:return xv;case 35667:case 35671:return vv;case 35668:case 35672:return yv;case 35669:case 35673:return Mv;case 5125:return Sv;case 36294:return bv;case 36295:return Ev;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}function Dv(i,t){i.uniform1fv(this.addr,t)}function Iv(i,t){const e=xr(t,this.size,2);i.uniform2fv(this.addr,e)}function Lv(i,t){const e=xr(t,this.size,3);i.uniform3fv(this.addr,e)}function Uv(i,t){const e=xr(t,this.size,4);i.uniform4fv(this.addr,e)}function Nv(i,t){const e=xr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fv(i,t){const e=xr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ov(i,t){const e=xr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bv(i,t){i.uniform1iv(this.addr,t)}function zv(i,t){i.uniform2iv(this.addr,t)}function kv(i,t){i.uniform3iv(this.addr,t)}function Vv(i,t){i.uniform4iv(this.addr,t)}function Hv(i,t){i.uniform1uiv(this.addr,t)}function Gv(i,t){i.uniform2uiv(this.addr,t)}function Wv(i,t){i.uniform3uiv(this.addr,t)}function Xv(i,t){i.uniform4uiv(this.addr,t)}function qv(i,t,e){const n=this.cache,s=t.length,r=Ua(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Od,r[o])}function Yv(i,t,e){const n=this.cache,s=t.length,r=Ua(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zd,r[o])}function jv(i,t,e){const n=this.cache,s=t.length,r=Ua(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||kd,r[o])}function $v(i,t,e){const n=this.cache,s=t.length,r=Ua(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bd,r[o])}function Zv(i){switch(i){case 5126:return Dv;case 35664:return Iv;case 35665:return Lv;case 35666:return Uv;case 35674:return Nv;case 35675:return Fv;case 35676:return Ov;case 5124:case 35670:return Bv;case 35667:case 35671:return zv;case 35668:case 35672:return kv;case 35669:case 35673:return Vv;case 5125:return Hv;case 36294:return Gv;case 36295:return Wv;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return $v}}class Kv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pv(e.type)}}class Jv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zv(e.type)}}class Qv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function lf(i,t){i.seq.push(t),i.map[t.id]=t}function ty(i,t,e){const n=i.name,s=n.length;for(Dl.lastIndex=0;;){const r=Dl.exec(n),o=Dl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){lf(e,c===void 0?new Kv(a,i,t):new Jv(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Qv(a),lf(e,h)),e=h}}}class _a{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ty(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function cf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ey=37297;let ny=0;function iy(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const uf=new Jt;function sy(i){se._getMatrix(uf,se.workingColorSpace,i);const t=`mat3( ${uf.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case ya:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+iy(i.getShaderSource(t),a)}else return r}function ry(i,t){const e=sy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function oy(i,t){let e;switch(t){case Zf:e="Linear";break;case Kf:e="Reinhard";break;case Jf:e="Cineon";break;case ru:e="ACESFilmic";break;case td:e="AgX";break;case ed:e="Neutral";break;case Qf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xo=new D;function ay(){se.getLuminanceCoefficients(Xo);const i=Xo.x.toFixed(4),t=Xo.y.toFixed(4),e=Xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ly(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function cy(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function uy(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Hr(i){return i!==""}function ff(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function df(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(i){return i.replace(hy,dy)}const fy=new Map;function dy(i,t){let e=Qt[t];if(e===void 0){const n=fy.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Hc(e)}const py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pf(i){return i.replace(py,my)}function my(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===qf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ci&&(t="SHADOWMAP_TYPE_VSM"),t}function _y(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lr:case cr:t="ENVMAP_TYPE_CUBE";break;case Ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xy(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===cr&&(t="ENVMAP_MODE_REFRACTION"),t}function vy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $f:t="ENVMAP_BLENDING_MULTIPLY";break;case Vp:t="ENVMAP_BLENDING_MIX";break;case Hp:t="ENVMAP_BLENDING_ADD";break}return t}function yy(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function My(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=gy(e),c=_y(e),u=xy(e),h=vy(e),f=yy(e),d=ly(e),g=cy(r),_=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hr).join(`
`),p.length>0&&(p+=`
`)):(m=[mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),p=[mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Bi?oy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,ry("linearToOutputTexel",e.outputColorSpace),ay(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hr).join(`
`)),o=Hc(o),o=ff(o,e),o=df(o,e),a=Hc(a),a=ff(a,e),a=df(a,e),o=pf(o),a=pf(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+o,x=y+p+a,S=cf(s,s.VERTEX_SHADER,v),E=cf(s,s.FRAGMENT_SHADER,x);s.attachShader(_,S),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(R){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(_)||"",L=s.getShaderInfoLog(S)||"",N=s.getShaderInfoLog(E)||"",O=P.trim(),z=L.trim(),J=N.trim();let G=!0,nt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,E);else{const ut=hf(s,S,"vertex"),vt=hf(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+ut+`
`+vt)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||J==="")&&(nt=!1);nt&&(R.diagnostics={runnable:G,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(S),s.deleteShader(E),w=new _a(s,_),b=uy(s,_)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,ey)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ny++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=E,this}let Sy=0;class by{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ey(t),e.set(t,n)),n}}class Ey{constructor(t){this.id=Sy++,this.code=t,this.usedTimes=0}}function Ty(i,t,e,n,s,r,o){const a=new mu,l=new by,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,R,P,L){const N=P.fog,O=L.geometry,z=b.isMeshStandardMaterial?P.environment:null,J=(b.isMeshStandardMaterial?e:t).get(b.envMap||z),G=J&&J.mapping===Ca?J.image.height:null,nt=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ut=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,vt=ut!==void 0?ut.length:0;let Pt=0;O.morphAttributes.position!==void 0&&(Pt=1),O.morphAttributes.normal!==void 0&&(Pt=2),O.morphAttributes.color!==void 0&&(Pt=3);let Bt,te,jt,j;if(nt){const le=Zn[nt];Bt=le.vertexShader,te=le.fragmentShader}else Bt=b.vertexShader,te=b.fragmentShader,l.update(b),jt=l.getVertexShaderID(b),j=l.getFragmentShaderID(b);const tt=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),wt=L.isInstancedMesh===!0,Tt=L.isBatchedMesh===!0,Kt=!!b.map,ie=!!b.matcap,U=!!J,st=!!b.aoMap,Q=!!b.lightMap,K=!!b.bumpMap,Z=!!b.normalMap,mt=!!b.displacementMap,at=!!b.emissiveMap,gt=!!b.metalnessMap,Wt=!!b.roughnessMap,Vt=b.anisotropy>0,I=b.clearcoat>0,T=b.dispersion>0,H=b.iridescence>0,q=b.sheen>0,it=b.transmission>0,Y=Vt&&!!b.anisotropyMap,Rt=I&&!!b.clearcoatMap,ft=I&&!!b.clearcoatNormalMap,At=I&&!!b.clearcoatRoughnessMap,It=H&&!!b.iridescenceMap,ct=H&&!!b.iridescenceThicknessMap,bt=q&&!!b.sheenColorMap,kt=q&&!!b.sheenRoughnessMap,Ft=!!b.specularMap,xt=!!b.specularColorMap,Xt=!!b.specularIntensityMap,F=it&&!!b.transmissionMap,lt=it&&!!b.thicknessMap,pt=!!b.gradientMap,Dt=!!b.alphaMap,ht=b.alphaTest>0,et=!!b.alphaHash,Nt=!!b.extensions;let Zt=Bi;b.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Zt=i.toneMapping);const _e={shaderID:nt,shaderType:b.type,shaderName:b.name,vertexShader:Bt,fragmentShader:te,defines:b.defines,customVertexShaderID:jt,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Tt,batchingColor:Tt&&L._colorsTexture!==null,instancing:wt,instancingColor:wt&&L.instanceColor!==null,instancingMorph:wt&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:us,alphaToCoverage:!!b.alphaToCoverage,map:Kt,matcap:ie,envMap:U,envMapMode:U&&J.mapping,envMapCubeUVHeight:G,aoMap:st,lightMap:Q,bumpMap:K,normalMap:Z,displacementMap:f&&mt,emissiveMap:at,normalMapObjectSpace:Z&&b.normalMapType===qp,normalMapTangentSpace:Z&&b.normalMapType===fu,metalnessMap:gt,roughnessMap:Wt,anisotropy:Vt,anisotropyMap:Y,clearcoat:I,clearcoatMap:Rt,clearcoatNormalMap:ft,clearcoatRoughnessMap:At,dispersion:T,iridescence:H,iridescenceMap:It,iridescenceThicknessMap:ct,sheen:q,sheenColorMap:bt,sheenRoughnessMap:kt,specularMap:Ft,specularColorMap:xt,specularIntensityMap:Xt,transmission:it,transmissionMap:F,thicknessMap:lt,gradientMap:pt,opaque:b.transparent===!1&&b.blending===sr&&b.alphaToCoverage===!1,alphaMap:Dt,alphaTest:ht,alphaHash:et,combine:b.combine,mapUv:Kt&&_(b.map.channel),aoMapUv:st&&_(b.aoMap.channel),lightMapUv:Q&&_(b.lightMap.channel),bumpMapUv:K&&_(b.bumpMap.channel),normalMapUv:Z&&_(b.normalMap.channel),displacementMapUv:mt&&_(b.displacementMap.channel),emissiveMapUv:at&&_(b.emissiveMap.channel),metalnessMapUv:gt&&_(b.metalnessMap.channel),roughnessMapUv:Wt&&_(b.roughnessMap.channel),anisotropyMapUv:Y&&_(b.anisotropyMap.channel),clearcoatMapUv:Rt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ft&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:kt&&_(b.sheenRoughnessMap.channel),specularMapUv:Ft&&_(b.specularMap.channel),specularColorMapUv:xt&&_(b.specularColorMap.channel),specularIntensityMapUv:Xt&&_(b.specularIntensityMap.channel),transmissionMapUv:F&&_(b.transmissionMap.channel),thicknessMapUv:lt&&_(b.thicknessMap.channel),alphaMapUv:Dt&&_(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Z||Vt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(Kt||Dt),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Mt,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Pt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Kt&&b.map.isVideoTexture===!0&&se.getTransfer(b.map.colorSpace)===ce,decodeVideoTextureEmissive:at&&b.emissiveMap.isVideoTexture===!0&&se.getTransfer(b.emissiveMap.colorSpace)===ce,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===on,flipSided:b.side===un,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Nt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&b.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)M.push(R),M.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(y(M,b),v(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const M=g[b.type];let R;if(M){const P=Zn[M];R=Kn.clone(P.uniforms)}else R=b.uniforms;return R}function S(b,M){let R;for(let P=0,L=u.length;P<L;P++){const N=u[P];if(N.cacheKey===M){R=N,++R.usedTimes;break}}return R===void 0&&(R=new My(i,M,b,r),u.push(R)),R}function E(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:w}}function wy(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ay(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _f(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||Ay),n.length>1&&n.sort(f||gf),s.length>1&&s.sort(f||gf)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Ry(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new _f,i.set(n,[o])):s>=r.length?(o=new _f,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Cy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Yt};break;case"SpotLight":e={position:new D,direction:new D,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Py(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Dy=0;function Iy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ly(i){const t=new Cy,e=Py(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new $t,o=new $t;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,v=0,x=0,S=0,E=0,A=0;c.sort(Iy);for(let b=0,M=c.length;b<M;b++){const R=c[b],P=R.color,L=R.intensity,N=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=P.r*L,h+=P.g*L,f+=P.b*L;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],L);A++}else if(R.isDirectionalLight){const z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,G=e.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=R.shadow.matrix,y++}n.directional[d]=z,d++}else if(R.isSpotLight){const z=t.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(P).multiplyScalar(L),z.distance=N,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[_]=z;const J=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,J.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=J.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=O,x++}_++}else if(R.isRectAreaLight){const z=t.get(R);z.color.copy(P).multiplyScalar(L),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=z,m++}else if(R.isPointLight){const z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const J=R.shadow,G=e.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=R.shadow.matrix,v++}n.point[g]=z,g++}else if(R.isHemisphereLight){const z=t.get(R);z.skyColor.copy(R.color).multiplyScalar(L),z.groundColor.copy(R.groundColor).multiplyScalar(L),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const w=n.hash;(w.directionalLength!==d||w.pointLength!==g||w.spotLength!==_||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==y||w.numPointShadows!==v||w.numSpotShadows!==x||w.numSpotMaps!==S||w.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,w.directionalLength=d,w.pointLength=g,w.spotLength=_,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=y,w.numPointShadows=v,w.numSpotShadows=x,w.numSpotMaps=S,w.numLightProbes=A,n.version=Dy++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const v=c[p];if(v.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(v.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function xf(i){const t=new Ly(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Uy(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new xf(i),t.set(s,[a])):r>=o.length?(a=new xf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Oy(i,t,e){let n=new oo;const s=new $,r=new $,o=new pe,a=new Hg({depthPacking:Xp}),l=new Gg,c={},u=e.maxTextureSize,h={[Jn]:un,[un]:Jn,[on]:on},f=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:Ny,fragmentShader:Fy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ee;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ie(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qf;let p=this.type;this.render=function(E,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(qe),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const L=p!==ci&&this.type===ci,N=p===ci&&this.type!==ci;for(let O=0,z=E.length;O<z;O++){const J=E[O],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const nt=G.getFrameExtents();if(s.multiply(nt),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,G.mapSize.y=r.y)),G.map===null||L===!0||N===!0){const vt=this.type!==ci?{minFilter:hn,magFilter:hn}:{};G.map!==null&&G.map.dispose(),G.map=new An(s.x,s.y,vt),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ut=G.getViewportCount();for(let vt=0;vt<ut;vt++){const Pt=G.getViewport(vt);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),P.viewport(o),G.updateMatrices(J,vt),n=G.getFrustum(),x(A,w,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===ci&&y(G,w),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,R)};function y(E,A){const w=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new An(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,w,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,w,d,_,null)}function v(E,A,w,b){let M=null;const R=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)M=R;else if(M=w.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const P=M.uuid,L=A.uuid;let N=c[P];N===void 0&&(N={},c[P]=N);let O=N[L];O===void 0&&(O=M.clone(),N[L]=O,A.addEventListener("dispose",S)),M=O}if(M.visible=A.visible,M.wireframe=A.wireframe,b===ci?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const P=i.properties.get(M);P.light=w}return M}function x(E,A,w,b,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ci)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const L=t.update(E),N=E.material;if(Array.isArray(N)){const O=L.groups;for(let z=0,J=O.length;z<J;z++){const G=O[z],nt=N[G.materialIndex];if(nt&&nt.visible){const ut=v(E,nt,b,M);E.onBeforeShadow(i,E,A,w,L,ut,G),i.renderBufferDirect(w,null,L,ut,E,G),E.onAfterShadow(i,E,A,w,L,ut,G)}}}else if(N.visible){const O=v(E,N,b,M);E.onBeforeShadow(i,E,A,w,L,O,null),i.renderBufferDirect(w,null,L,O,E,null),E.onAfterShadow(i,E,A,w,L,O,null)}}const P=E.children;for(let L=0,N=P.length;L<N;L++)x(P[L],A,w,b,M)}function S(E){E.target.removeEventListener("dispose",S);for(const w in c){const b=c[w],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const By={[Kl]:Jl,[Ql]:nc,[tc]:ic,[ar]:ec,[Jl]:Kl,[nc]:Ql,[ic]:tc,[ec]:ar};function zy(i,t){function e(){let F=!1;const lt=new pe;let pt=null;const Dt=new pe(0,0,0,0);return{setMask:function(ht){pt!==ht&&!F&&(i.colorMask(ht,ht,ht,ht),pt=ht)},setLocked:function(ht){F=ht},setClear:function(ht,et,Nt,Zt,_e){_e===!0&&(ht*=Zt,et*=Zt,Nt*=Zt),lt.set(ht,et,Nt,Zt),Dt.equals(lt)===!1&&(i.clearColor(ht,et,Nt,Zt),Dt.copy(lt))},reset:function(){F=!1,pt=null,Dt.set(-1,0,0,0)}}}function n(){let F=!1,lt=!1,pt=null,Dt=null,ht=null;return{setReversed:function(et){if(lt!==et){const Nt=t.get("EXT_clip_control");et?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),lt=et;const Zt=ht;ht=null,this.setClear(Zt)}},getReversed:function(){return lt},setTest:function(et){et?tt(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(et){pt!==et&&!F&&(i.depthMask(et),pt=et)},setFunc:function(et){if(lt&&(et=By[et]),Dt!==et){switch(et){case Kl:i.depthFunc(i.NEVER);break;case Jl:i.depthFunc(i.ALWAYS);break;case Ql:i.depthFunc(i.LESS);break;case ar:i.depthFunc(i.LEQUAL);break;case tc:i.depthFunc(i.EQUAL);break;case ec:i.depthFunc(i.GEQUAL);break;case nc:i.depthFunc(i.GREATER);break;case ic:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Dt=et}},setLocked:function(et){F=et},setClear:function(et){ht!==et&&(lt&&(et=1-et),i.clearDepth(et),ht=et)},reset:function(){F=!1,pt=null,Dt=null,ht=null,lt=!1}}}function s(){let F=!1,lt=null,pt=null,Dt=null,ht=null,et=null,Nt=null,Zt=null,_e=null;return{setTest:function(le){F||(le?tt(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(le){lt!==le&&!F&&(i.stencilMask(le),lt=le)},setFunc:function(le,ti,Yn){(pt!==le||Dt!==ti||ht!==Yn)&&(i.stencilFunc(le,ti,Yn),pt=le,Dt=ti,ht=Yn)},setOp:function(le,ti,Yn){(et!==le||Nt!==ti||Zt!==Yn)&&(i.stencilOp(le,ti,Yn),et=le,Nt=ti,Zt=Yn)},setLocked:function(le){F=le},setClear:function(le){_e!==le&&(i.clearStencil(le),_e=le)},reset:function(){F=!1,lt=null,pt=null,Dt=null,ht=null,et=null,Nt=null,Zt=null,_e=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,S=null,E=null,A=new Yt(0,0,0),w=0,b=!1,M=null,R=null,P=null,L=null,N=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=J>=2);let nt=null,ut={};const vt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Bt=new pe().fromArray(vt),te=new pe().fromArray(Pt);function jt(F,lt,pt,Dt){const ht=new Uint8Array(4),et=i.createTexture();i.bindTexture(F,et),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<pt;Nt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(lt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return et}const j={};j[i.TEXTURE_2D]=jt(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(i.DEPTH_TEST),o.setFunc(ar),K(!1),Z(eh),tt(i.CULL_FACE),st(qe);function tt(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function Mt(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function wt(F,lt){return h[F]!==lt?(i.bindFramebuffer(F,lt),h[F]=lt,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=lt),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Tt(F,lt){let pt=d,Dt=!1;if(F){pt=f.get(lt),pt===void 0&&(pt=[],f.set(lt,pt));const ht=F.textures;if(pt.length!==ht.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let et=0,Nt=ht.length;et<Nt;et++)pt[et]=i.COLOR_ATTACHMENT0+et;pt.length=ht.length,Dt=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(pt)}function Kt(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const ie={[Gn]:i.FUNC_ADD,[Ap]:i.FUNC_SUBTRACT,[Rp]:i.FUNC_REVERSE_SUBTRACT};ie[Cp]=i.MIN,ie[Pp]=i.MAX;const U={[kr]:i.ZERO,[Dp]:i.ONE,[Ip]:i.SRC_COLOR,[Yl]:i.SRC_ALPHA,[Fp]:i.SRC_ALPHA_SATURATE,[Zl]:i.DST_COLOR,[$l]:i.DST_ALPHA,[Lp]:i.ONE_MINUS_SRC_COLOR,[jl]:i.ONE_MINUS_SRC_ALPHA,[Np]:i.ONE_MINUS_DST_COLOR,[Up]:i.ONE_MINUS_DST_ALPHA,[Op]:i.CONSTANT_COLOR,[Bp]:i.ONE_MINUS_CONSTANT_COLOR,[zp]:i.CONSTANT_ALPHA,[kp]:i.ONE_MINUS_CONSTANT_ALPHA};function st(F,lt,pt,Dt,ht,et,Nt,Zt,_e,le){if(F===qe){_===!0&&(Mt(i.BLEND),_=!1);return}if(_===!1&&(tt(i.BLEND),_=!0),F!==jf){if(F!==m||le!==b){if((p!==Gn||x!==Gn)&&(i.blendEquation(i.FUNC_ADD),p=Gn,x=Gn),le)switch(F){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ih:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,v=null,S=null,E=null,A.set(0,0,0),w=0,m=F,b=le}return}ht=ht||lt,et=et||pt,Nt=Nt||Dt,(lt!==p||ht!==x)&&(i.blendEquationSeparate(ie[lt],ie[ht]),p=lt,x=ht),(pt!==y||Dt!==v||et!==S||Nt!==E)&&(i.blendFuncSeparate(U[pt],U[Dt],U[et],U[Nt]),y=pt,v=Dt,S=et,E=Nt),(Zt.equals(A)===!1||_e!==w)&&(i.blendColor(Zt.r,Zt.g,Zt.b,_e),A.copy(Zt),w=_e),m=F,b=!1}function Q(F,lt){F.side===on?Mt(i.CULL_FACE):tt(i.CULL_FACE);let pt=F.side===un;lt&&(pt=!pt),K(pt),F.blending===sr&&F.transparent===!1?st(qe):st(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Dt=F.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),at(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function Z(F){F!==Tp?(tt(i.CULL_FACE),F!==R&&(F===eh?i.cullFace(i.BACK):F===wp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),R=F}function mt(F){F!==P&&(z&&i.lineWidth(F),P=F)}function at(F,lt,pt){F?(tt(i.POLYGON_OFFSET_FILL),(L!==lt||N!==pt)&&(i.polygonOffset(lt,pt),L=lt,N=pt)):Mt(i.POLYGON_OFFSET_FILL)}function gt(F){F?tt(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function Wt(F){F===void 0&&(F=i.TEXTURE0+O-1),nt!==F&&(i.activeTexture(F),nt=F)}function Vt(F,lt,pt){pt===void 0&&(nt===null?pt=i.TEXTURE0+O-1:pt=nt);let Dt=ut[pt];Dt===void 0&&(Dt={type:void 0,texture:void 0},ut[pt]=Dt),(Dt.type!==F||Dt.texture!==lt)&&(nt!==pt&&(i.activeTexture(pt),nt=pt),i.bindTexture(F,lt||j[F]),Dt.type=F,Dt.texture=lt)}function I(){const F=ut[nt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(F){Bt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Bt.copy(F))}function kt(F){te.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function Ft(F,lt){let pt=c.get(lt);pt===void 0&&(pt=new WeakMap,c.set(lt,pt));let Dt=pt.get(F);Dt===void 0&&(Dt=i.getUniformBlockIndex(lt,F.name),pt.set(F,Dt))}function xt(F,lt){const Dt=c.get(lt).get(F);l.get(lt)!==Dt&&(i.uniformBlockBinding(lt,Dt,F.__bindingPointIndex),l.set(lt,Dt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},nt=null,ut={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,S=null,E=null,A=new Yt(0,0,0),w=0,b=!1,M=null,R=null,P=null,L=null,N=null,Bt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:Mt,bindFramebuffer:wt,drawBuffers:Tt,useProgram:Kt,setBlending:st,setMaterial:Q,setFlipSided:K,setCullFace:Z,setLineWidth:mt,setPolygonOffset:at,setScissorTest:gt,activeTexture:Wt,bindTexture:Vt,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:H,texImage2D:It,texImage3D:ct,updateUBOMapping:Ft,uniformBlockBinding:xt,texStorage2D:ft,texStorage3D:At,texSubImage2D:q,texSubImage3D:it,compressedTexSubImage2D:Y,compressedTexSubImage3D:Rt,scissor:bt,viewport:kt,reset:Xt}}function ky(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return d?new OffscreenCanvas(I,T):Qr("canvas")}function _(I,T,H){let q=1;const it=Vt(I);if((it.width>H||it.height>H)&&(q=H/Math.max(it.width,it.height)),q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Y=Math.floor(q*it.width),Rt=Math.floor(q*it.height);h===void 0&&(h=g(Y,Rt));const ft=T?g(Y,Rt):h;return ft.width=Y,ft.height=Rt,ft.getContext("2d").drawImage(I,0,0,Y,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Y+"x"+Rt+")."),ft}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(I,T,H,q,it=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Y=T;if(T===i.RED&&(H===i.FLOAT&&(Y=i.R32F),H===i.HALF_FLOAT&&(Y=i.R16F),H===i.UNSIGNED_BYTE&&(Y=i.R8)),T===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.R8UI),H===i.UNSIGNED_SHORT&&(Y=i.R16UI),H===i.UNSIGNED_INT&&(Y=i.R32UI),H===i.BYTE&&(Y=i.R8I),H===i.SHORT&&(Y=i.R16I),H===i.INT&&(Y=i.R32I)),T===i.RG&&(H===i.FLOAT&&(Y=i.RG32F),H===i.HALF_FLOAT&&(Y=i.RG16F),H===i.UNSIGNED_BYTE&&(Y=i.RG8)),T===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RG8UI),H===i.UNSIGNED_SHORT&&(Y=i.RG16UI),H===i.UNSIGNED_INT&&(Y=i.RG32UI),H===i.BYTE&&(Y=i.RG8I),H===i.SHORT&&(Y=i.RG16I),H===i.INT&&(Y=i.RG32I)),T===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),H===i.UNSIGNED_INT&&(Y=i.RGB32UI),H===i.BYTE&&(Y=i.RGB8I),H===i.SHORT&&(Y=i.RGB16I),H===i.INT&&(Y=i.RGB32I)),T===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),H===i.UNSIGNED_INT&&(Y=i.RGBA32UI),H===i.BYTE&&(Y=i.RGBA8I),H===i.SHORT&&(Y=i.RGBA16I),H===i.INT&&(Y=i.RGBA32I)),T===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),T===i.RGBA){const Rt=it?ya:se.getTransfer(q);H===i.FLOAT&&(Y=i.RGBA32F),H===i.HALF_FLOAT&&(Y=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Y=Rt===ce?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(I,T){let H;return I?T===null||T===zi||T===ur?H=i.DEPTH24_STENCIL8:T===ln?H=i.DEPTH32F_STENCIL8:T===Zr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===zi||T===ur?H=i.DEPTH_COMPONENT24:T===ln?H=i.DEPTH_COMPONENT32F:T===Zr&&(H=i.DEPTH_COMPONENT16),H}function S(I,T){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==hn&&I.minFilter!==an?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function E(I){const T=I.target;T.removeEventListener("dispose",E),w(T),T.isVideoTexture&&u.delete(T)}function A(I){const T=I.target;T.removeEventListener("dispose",A),M(T)}function w(I){const T=n.get(I);if(T.__webglInit===void 0)return;const H=I.source,q=f.get(H);if(q){const it=q[T.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(I),Object.keys(q).length===0&&f.delete(H)}n.remove(I)}function b(I){const T=n.get(I);i.deleteTexture(T.__webglTexture);const H=I.source,q=f.get(H);delete q[T.__cacheKey],o.memory.textures--}function M(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(T.__webglFramebuffer[q]))for(let it=0;it<T.__webglFramebuffer[q].length;it++)i.deleteFramebuffer(T.__webglFramebuffer[q][it]);else i.deleteFramebuffer(T.__webglFramebuffer[q]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[q])}else{if(Array.isArray(T.__webglFramebuffer))for(let q=0;q<T.__webglFramebuffer.length;q++)i.deleteFramebuffer(T.__webglFramebuffer[q]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let q=0;q<T.__webglColorRenderbuffer.length;q++)T.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[q]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const H=I.textures;for(let q=0,it=H.length;q<it;q++){const Y=n.get(H[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(H[q])}n.remove(I)}let R=0;function P(){R=0}function L(){const I=R;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),R+=1,I}function N(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function O(I,T){const H=n.get(I);if(I.isVideoTexture&&gt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){const q=I.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(H,I,T);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+T)}function z(I,T){const H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){j(H,I,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+T)}function J(I,T){const H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){j(H,I,T);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+T)}function G(I,T){const H=n.get(I);if(I.version>0&&H.__version!==I.version){tt(H,I,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+T)}const nt={[Mi]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[oc]:i.MIRRORED_REPEAT},ut={[hn]:i.NEAREST,[Gp]:i.NEAREST_MIPMAP_NEAREST,[fo]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Ya]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},vt={[Yp]:i.NEVER,[Qp]:i.ALWAYS,[jp]:i.LESS,[ud]:i.LEQUAL,[$p]:i.EQUAL,[Jp]:i.GEQUAL,[Zp]:i.GREATER,[Kp]:i.NOTEQUAL};function Pt(I,T){if(T.type===ln&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===an||T.magFilter===Ya||T.magFilter===fo||T.magFilter===Fi||T.minFilter===an||T.minFilter===Ya||T.minFilter===fo||T.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,nt[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,nt[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,nt[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ut[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ut[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,vt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hn||T.minFilter!==fo&&T.minFilter!==Fi||T.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Bt(I,T){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",E));const q=T.source;let it=f.get(q);it===void 0&&(it={},f.set(q,it));const Y=N(T);if(Y!==I.__cacheKey){it[Y]===void 0&&(it[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),it[Y].usedTimes++;const Rt=it[I.__cacheKey];Rt!==void 0&&(it[I.__cacheKey].usedTimes--,Rt.usedTimes===0&&b(T)),I.__cacheKey=Y,I.__webglTexture=it[Y].texture}return H}function te(I,T,H){return Math.floor(Math.floor(I/H)/T)}function jt(I,T,H,q){const Y=I.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,H,q,T.data);else{Y.sort((ct,bt)=>ct.start-bt.start);let Rt=0;for(let ct=1;ct<Y.length;ct++){const bt=Y[Rt],kt=Y[ct],Ft=bt.start+bt.count,xt=te(kt.start,T.width,4),Xt=te(bt.start,T.width,4);kt.start<=Ft+1&&xt===Xt&&te(kt.start+kt.count-1,T.width,4)===xt?bt.count=Math.max(bt.count,kt.start+kt.count-bt.start):(++Rt,Y[Rt]=kt)}Y.length=Rt+1;const ft=i.getParameter(i.UNPACK_ROW_LENGTH),At=i.getParameter(i.UNPACK_SKIP_PIXELS),It=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let ct=0,bt=Y.length;ct<bt;ct++){const kt=Y[ct],Ft=Math.floor(kt.start/4),xt=Math.ceil(kt.count/4),Xt=Ft%T.width,F=Math.floor(Ft/T.width),lt=xt,pt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Xt,F,lt,pt,H,q,T.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,At),i.pixelStorei(i.UNPACK_SKIP_ROWS,It)}}function j(I,T,H){let q=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(q=i.TEXTURE_3D);const it=Bt(I,T),Y=T.source;e.bindTexture(q,I.__webglTexture,i.TEXTURE0+H);const Rt=n.get(Y);if(Y.version!==Rt.__version||it===!0){e.activeTexture(i.TEXTURE0+H);const ft=se.getPrimaries(se.workingColorSpace),At=T.colorSpace===Ui?null:se.getPrimaries(T.colorSpace),It=T.colorSpace===Ui||ft===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let ct=_(T.image,!1,s.maxTextureSize);ct=Wt(T,ct);const bt=r.convert(T.format,T.colorSpace),kt=r.convert(T.type);let Ft=v(T.internalFormat,bt,kt,T.colorSpace,T.isVideoTexture);Pt(q,T);let xt;const Xt=T.mipmaps,F=T.isVideoTexture!==!0,lt=Rt.__version===void 0||it===!0,pt=Y.dataReady,Dt=S(T,ct);if(T.isDepthTexture)Ft=x(T.format===hr,T.type),lt&&(F?e.texStorage2D(i.TEXTURE_2D,1,Ft,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ct.width,ct.height,0,bt,kt,null));else if(T.isDataTexture)if(Xt.length>0){F&&lt&&e.texStorage2D(i.TEXTURE_2D,Dt,Ft,Xt[0].width,Xt[0].height);for(let ht=0,et=Xt.length;ht<et;ht++)xt=Xt[ht],F?pt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,xt.width,xt.height,bt,kt,xt.data):e.texImage2D(i.TEXTURE_2D,ht,Ft,xt.width,xt.height,0,bt,kt,xt.data);T.generateMipmaps=!1}else F?(lt&&e.texStorage2D(i.TEXTURE_2D,Dt,Ft,ct.width,ct.height),pt&&jt(T,ct,bt,kt)):e.texImage2D(i.TEXTURE_2D,0,Ft,ct.width,ct.height,0,bt,kt,ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){F&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ft,Xt[0].width,Xt[0].height,ct.depth);for(let ht=0,et=Xt.length;ht<et;ht++)if(xt=Xt[ht],T.format!==vn)if(bt!==null)if(F){if(pt)if(T.layerUpdates.size>0){const Nt=jh(xt.width,xt.height,T.format,T.type);for(const Zt of T.layerUpdates){const _e=xt.data.subarray(Zt*Nt/xt.data.BYTES_PER_ELEMENT,(Zt+1)*Nt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,Zt,xt.width,xt.height,1,bt,_e)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,xt.width,xt.height,ct.depth,bt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,Ft,xt.width,xt.height,ct.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?pt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,xt.width,xt.height,ct.depth,bt,kt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,Ft,xt.width,xt.height,ct.depth,0,bt,kt,xt.data)}else{F&&lt&&e.texStorage2D(i.TEXTURE_2D,Dt,Ft,Xt[0].width,Xt[0].height);for(let ht=0,et=Xt.length;ht<et;ht++)xt=Xt[ht],T.format!==vn?bt!==null?F?pt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,xt.width,xt.height,bt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,Ft,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?pt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,xt.width,xt.height,bt,kt,xt.data):e.texImage2D(i.TEXTURE_2D,ht,Ft,xt.width,xt.height,0,bt,kt,xt.data)}else if(T.isDataArrayTexture)if(F){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ft,ct.width,ct.height,ct.depth),pt)if(T.layerUpdates.size>0){const ht=jh(ct.width,ct.height,T.format,T.type);for(const et of T.layerUpdates){const Nt=ct.data.subarray(et*ht/ct.data.BYTES_PER_ELEMENT,(et+1)*ht/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,ct.width,ct.height,1,bt,kt,Nt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,bt,kt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ct.width,ct.height,ct.depth,0,bt,kt,ct.data);else if(T.isData3DTexture)F?(lt&&e.texStorage3D(i.TEXTURE_3D,Dt,Ft,ct.width,ct.height,ct.depth),pt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,bt,kt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ct.width,ct.height,ct.depth,0,bt,kt,ct.data);else if(T.isFramebufferTexture){if(lt)if(F)e.texStorage2D(i.TEXTURE_2D,Dt,Ft,ct.width,ct.height);else{let ht=ct.width,et=ct.height;for(let Nt=0;Nt<Dt;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,Ft,ht,et,0,bt,kt,null),ht>>=1,et>>=1}}else if(Xt.length>0){if(F&&lt){const ht=Vt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Ft,ht.width,ht.height)}for(let ht=0,et=Xt.length;ht<et;ht++)xt=Xt[ht],F?pt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,bt,kt,xt):e.texImage2D(i.TEXTURE_2D,ht,Ft,bt,kt,xt);T.generateMipmaps=!1}else if(F){if(lt){const ht=Vt(ct);e.texStorage2D(i.TEXTURE_2D,Dt,Ft,ht.width,ht.height)}pt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,kt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Ft,bt,kt,ct);m(T)&&p(q),Rt.__version=Y.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function tt(I,T,H){if(T.image.length!==6)return;const q=Bt(I,T),it=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);const Y=n.get(it);if(it.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+H);const Rt=se.getPrimaries(se.workingColorSpace),ft=T.colorSpace===Ui?null:se.getPrimaries(T.colorSpace),At=T.colorSpace===Ui||Rt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const It=T.isCompressedTexture||T.image[0].isCompressedTexture,ct=T.image[0]&&T.image[0].isDataTexture,bt=[];for(let et=0;et<6;et++)!It&&!ct?bt[et]=_(T.image[et],!0,s.maxCubemapSize):bt[et]=ct?T.image[et].image:T.image[et],bt[et]=Wt(T,bt[et]);const kt=bt[0],Ft=r.convert(T.format,T.colorSpace),xt=r.convert(T.type),Xt=v(T.internalFormat,Ft,xt,T.colorSpace),F=T.isVideoTexture!==!0,lt=Y.__version===void 0||q===!0,pt=it.dataReady;let Dt=S(T,kt);Pt(i.TEXTURE_CUBE_MAP,T);let ht;if(It){F&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Xt,kt.width,kt.height);for(let et=0;et<6;et++){ht=bt[et].mipmaps;for(let Nt=0;Nt<ht.length;Nt++){const Zt=ht[Nt];T.format!==vn?Ft!==null?F?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Nt,0,0,Zt.width,Zt.height,Ft,Zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Nt,Xt,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Nt,0,0,Zt.width,Zt.height,Ft,xt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Nt,Xt,Zt.width,Zt.height,0,Ft,xt,Zt.data)}}}else{if(ht=T.mipmaps,F&&lt){ht.length>0&&Dt++;const et=Vt(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Xt,et.width,et.height)}for(let et=0;et<6;et++)if(ct){F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,bt[et].width,bt[et].height,Ft,xt,bt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Xt,bt[et].width,bt[et].height,0,Ft,xt,bt[et].data);for(let Nt=0;Nt<ht.length;Nt++){const _e=ht[Nt].image[et].image;F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Nt+1,0,0,_e.width,_e.height,Ft,xt,_e.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Nt+1,Xt,_e.width,_e.height,0,Ft,xt,_e.data)}}else{F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ft,xt,bt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Xt,Ft,xt,bt[et]);for(let Nt=0;Nt<ht.length;Nt++){const Zt=ht[Nt];F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Nt+1,0,0,Ft,xt,Zt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Nt+1,Xt,Ft,xt,Zt.image[et])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),Y.__version=it.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Mt(I,T,H,q,it,Y){const Rt=r.convert(H.format,H.colorSpace),ft=r.convert(H.type),At=v(H.internalFormat,Rt,ft,H.colorSpace),It=n.get(T),ct=n.get(H);if(ct.__renderTarget=T,!It.__hasExternalTextures){const bt=Math.max(1,T.width>>Y),kt=Math.max(1,T.height>>Y);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,Y,At,bt,kt,T.depth,0,Rt,ft,null):e.texImage2D(it,Y,At,bt,kt,0,Rt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),at(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,it,ct.__webglTexture,0,mt(T)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,it,ct.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(I,T,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){const q=T.depthTexture,it=q&&q.isDepthTexture?q.type:null,Y=x(T.stencilBuffer,it),Rt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=mt(T);at(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,Y,T.width,T.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Y,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Y,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,I)}else{const q=T.textures;for(let it=0;it<q.length;it++){const Y=q[it],Rt=r.convert(Y.format,Y.colorSpace),ft=r.convert(Y.type),At=v(Y.internalFormat,Rt,ft,Y.colorSpace),It=mt(T);H&&at(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,At,T.width,T.height):at(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,At,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,At,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(T.depthTexture);q.__renderTarget=T,(!q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const it=q.__webglTexture,Y=mt(T);if(T.depthTexture.format===Kr)at(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(T.depthTexture.format===hr)at(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Kt(I){const T=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const q=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),q){const it=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,q.removeEventListener("dispose",it)};q.addEventListener("dispose",it),T.__depthDisposeCallback=it}T.__boundDepthTexture=q}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const q=I.texture.mipmaps;q&&q.length>0?Tt(T.__webglFramebuffer[0],I):Tt(T.__webglFramebuffer,I)}else if(H){T.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[q]),T.__webglDepthbuffer[q]===void 0)T.__webglDepthbuffer[q]=i.createRenderbuffer(),wt(T.__webglDepthbuffer[q],I,!1);else{const it=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=T.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Y)}}else{const q=I.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),wt(T.__webglDepthbuffer,I,!1);else{const it=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(I,T,H){const q=n.get(I);T!==void 0&&Mt(q.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Kt(I)}function U(I){const T=I.texture,H=n.get(I),q=n.get(T);I.addEventListener("dispose",A);const it=I.textures,Y=I.isWebGLCubeRenderTarget===!0,Rt=it.length>1;if(Rt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=T.version,o.memory.textures++),Y){H.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[ft]=[];for(let At=0;At<T.mipmaps.length;At++)H.__webglFramebuffer[ft][At]=i.createFramebuffer()}else H.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let ft=0;ft<T.mipmaps.length;ft++)H.__webglFramebuffer[ft]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let ft=0,At=it.length;ft<At;ft++){const It=n.get(it[ft]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&at(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ft=0;ft<it.length;ft++){const At=it[ft];H.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ft]);const It=r.convert(At.format,At.colorSpace),ct=r.convert(At.type),bt=v(At.internalFormat,It,ct,At.colorSpace,I.isXRRenderTarget===!0),kt=mt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,bt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,H.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),wt(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,T);for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0)for(let At=0;At<T.mipmaps.length;At++)Mt(H.__webglFramebuffer[ft][At],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,At);else Mt(H.__webglFramebuffer[ft],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ft=0,At=it.length;ft<At;ft++){const It=it[ft],ct=n.get(It);let bt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(bt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,ct.__webglTexture),Pt(bt,It),Mt(H.__webglFramebuffer,I,It,i.COLOR_ATTACHMENT0+ft,bt,0),m(It)&&p(bt)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ft=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,q.__webglTexture),Pt(ft,T),T.mipmaps&&T.mipmaps.length>0)for(let At=0;At<T.mipmaps.length;At++)Mt(H.__webglFramebuffer[At],I,T,i.COLOR_ATTACHMENT0,ft,At);else Mt(H.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,ft,0);m(T)&&p(ft),e.unbindTexture()}I.depthBuffer&&Kt(I)}function st(I){const T=I.textures;for(let H=0,q=T.length;H<q;H++){const it=T[H];if(m(it)){const Y=y(I),Rt=n.get(it).__webglTexture;e.bindTexture(Y,Rt),p(Y),e.unbindTexture()}}}const Q=[],K=[];function Z(I){if(I.samples>0){if(at(I)===!1){const T=I.textures,H=I.width,q=I.height;let it=i.COLOR_BUFFER_BIT;const Y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(I),ft=T.length>1;if(ft)for(let It=0;It<T.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const At=I.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let It=0;It<T.length;It++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[It]);const ct=n.get(T[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,H,q,0,0,H,q,it,i.NEAREST),l===!0&&(Q.length=0,K.length=0,Q.push(i.COLOR_ATTACHMENT0+It),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Q.push(Y),K.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let It=0;It<T.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[It]);const ct=n.get(T[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function mt(I){return Math.min(s.maxSamples,I.samples)}function at(I){const T=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function gt(I){const T=o.render.frame;u.get(I)!==T&&(u.set(I,T),I.update())}function Wt(I,T){const H=I.colorSpace,q=I.format,it=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==us&&H!==Ui&&(se.getTransfer(H)===ce?(q!==vn||it!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}function Vt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=P,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=ie,this.setupRenderTarget=U,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=at}function Vy(i,t){function e(n,s=Ui){let r;const o=se.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===au)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===od)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===id)return i.BYTE;if(n===sd)return i.SHORT;if(n===Zr)return i.UNSIGNED_SHORT;if(n===ou)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===cn)return i.HALF_FLOAT;if(n===ad)return i.ALPHA;if(n===ld)return i.RGB;if(n===vn)return i.RGBA;if(n===Kr)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===cu)return i.RED;if(n===Pa)return i.RED_INTEGER;if(n===cd)return i.RG;if(n===uu)return i.RG_INTEGER;if(n===hu)return i.RGBA_INTEGER;if(n===da||n===pa||n===ma||n===ga)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ac||n===lc||n===cc||n===uc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hc||n===fc||n===dc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hc||n===fc)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===dc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===yc||n===Mc||n===Sc||n===bc||n===Ec||n===Tc||n===wc||n===Ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ec)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rc||n===Cc||n===Pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rc)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dc||n===Ic||n===Lc||n===Uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Sd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new De({vertexShader:Hy,fragmentShader:Gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new gs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xy extends ds{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Wy,p={},y=e.getContextAttributes();let v=null,x=null;const S=[],E=[],A=new $;let w=null;const b=new Tn;b.viewport=new pe;const M=new Tn;M.viewport=new pe;const R=[b,M],P=new e0;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let tt=S[j];return tt===void 0&&(tt=new pl,S[j]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(j){let tt=S[j];return tt===void 0&&(tt=new pl,S[j]=tt),tt.getGripSpace()},this.getHand=function(j){let tt=S[j];return tt===void 0&&(tt=new pl,S[j]=tt),tt.getHandSpace()};function O(j){const tt=E.indexOf(j.inputSource);if(tt===-1)return;const Mt=S[tt];Mt!==void 0&&(Mt.update(j.inputSource,j.frame,c||o),Mt.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",J);for(let j=0;j<S.length;j++){const tt=E[j];tt!==null&&(E[j]=null,S[j].disconnect(tt))}L=null,N=null,m.reset();for(const j in p)delete p[j];t.setRenderTarget(v),d=null,f=null,h=null,s=null,x=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",z),s.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,wt=null,Tt=null;y.depth&&(Tt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=y.stencil?hr:Kr,wt=y.stencil?ur:zi);const Kt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new An(f.textureWidth,f.textureHeight,{format:vn,type:Xn,depthTexture:new vu(f.textureWidth,f.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new An(d.framebufferWidth,d.framebufferHeight,{format:vn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(j){for(let tt=0;tt<j.removed.length;tt++){const Mt=j.removed[tt],wt=E.indexOf(Mt);wt>=0&&(E[wt]=null,S[wt].disconnect(Mt))}for(let tt=0;tt<j.added.length;tt++){const Mt=j.added[tt];let wt=E.indexOf(Mt);if(wt===-1){for(let Kt=0;Kt<S.length;Kt++)if(Kt>=E.length){E.push(Mt),wt=Kt;break}else if(E[Kt]===null){E[Kt]=Mt,wt=Kt;break}if(wt===-1)break}const Tt=S[wt];Tt&&Tt.connect(Mt)}}const G=new D,nt=new D;function ut(j,tt,Mt){G.setFromMatrixPosition(tt.matrixWorld),nt.setFromMatrixPosition(Mt.matrixWorld);const wt=G.distanceTo(nt),Tt=tt.projectionMatrix.elements,Kt=Mt.projectionMatrix.elements,ie=Tt[14]/(Tt[10]-1),U=Tt[14]/(Tt[10]+1),st=(Tt[9]+1)/Tt[5],Q=(Tt[9]-1)/Tt[5],K=(Tt[8]-1)/Tt[0],Z=(Kt[8]+1)/Kt[0],mt=ie*K,at=ie*Z,gt=wt/(-K+Z),Wt=gt*-K;if(tt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Wt),j.translateZ(gt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Tt[10]===-1)j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Vt=ie+gt,I=U+gt,T=mt-Wt,H=at+(wt-Wt),q=st*U/I*Vt,it=Q*U/I*Vt;j.projectionMatrix.makePerspective(T,H,q,it,Vt,I),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function vt(j,tt){tt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(tt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let tt=j.near,Mt=j.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),P.near=M.near=b.near=tt,P.far=M.far=b.far=Mt,(L!==P.near||N!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),L=P.near,N=P.far),P.layers.mask=j.layers.mask|6,b.layers.mask=P.layers.mask&3,M.layers.mask=P.layers.mask&5;const wt=j.parent,Tt=P.cameras;vt(P,wt);for(let Kt=0;Kt<Tt.length;Kt++)vt(Tt[Kt],wt);Tt.length===2?ut(P,b,M):P.projectionMatrix.copy(b.projectionMatrix),Pt(j,P,wt)};function Pt(j,tt,Mt){Mt===null?j.matrix.copy(tt.matrixWorld):(j.matrix.copy(Mt.matrixWorld),j.matrix.invert(),j.matrix.multiply(tt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Jr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(j){return p[j]};let Bt=null;function te(j,tt){if(u=tt.getViewerPose(c||o),g=tt,u!==null){const Mt=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let wt=!1;Mt.length!==P.cameras.length&&(P.cameras.length=0,wt=!0);for(let U=0;U<Mt.length;U++){const st=Mt[U];let Q=null;if(d!==null)Q=d.getViewport(st);else{const Z=h.getViewSubImage(f,st);Q=Z.viewport,U===0&&(t.setRenderTargetTextures(x,Z.colorTexture,Z.depthStencilTexture),t.setRenderTarget(x))}let K=R[U];K===void 0&&(K=new Tn,K.layers.enable(U),K.viewport=new pe,R[U]=K),K.matrix.fromArray(st.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(st.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Q.x,Q.y,Q.width,Q.height),U===0&&(P.matrix.copy(K.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),wt===!0&&P.cameras.push(K)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const U=h.getDepthInformation(Mt[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(Tt&&Tt.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let U=0;U<Mt.length;U++){const st=Mt[U].camera;if(st){let Q=p[st];Q||(Q=new Sd,p[st]=Q);const K=h.getCameraImage(st);Q.sourceTexture=K}}}}for(let Mt=0;Mt<S.length;Mt++){const wt=E[Mt],Tt=S[Mt];wt!==null&&Tt!==void 0&&Tt.update(wt,tt,c||o)}Bt&&Bt(j,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const jt=new Fd;jt.setAnimationLoop(te),this.setAnimationLoop=function(j){Bt=j},this.dispose=function(){}}}const es=new Fn,qy=new $t;function Yy(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,es.copy(x),es.x*=-1,es.y*=-1,es.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(qy.makeRotationFromEuler(es)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jy(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=s[y.id];x===void 0&&(g(y),x=u(y),s[y.id]=x,y.addEventListener("dispose",m));const S=v.program;n.updateUBOMapping(y,S);const E=t.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function u(y){const v=h();y.__bindingPointIndex=v;const x=i.createBuffer(),S=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=s[y.id],x=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,A=x.length;E<A;E++){const w=Array.isArray(x[E])?x[E]:[x[E]];for(let b=0,M=w.length;b<M;b++){const R=w[b];if(d(R,E,b,S)===!0){const P=R.__offset,L=Array.isArray(R.value)?R.value:[R.value];let N=0;for(let O=0;O<L.length;O++){const z=L[O],J=_(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,P+N,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,N),N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,v,x,S){const E=y.value,A=v+"_"+x;if(S[A]===void 0)return typeof E=="number"||typeof E=="boolean"?S[A]=E:S[A]=E.clone(),!0;{const w=S[A];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return S[A]=E,!0}else if(w.equals(E)===!1)return w.copy(E),!0}return!1}function g(y){const v=y.uniforms;let x=0;const S=16;for(let A=0,w=v.length;A<w;A++){const b=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,R=b.length;M<R;M++){const P=b[M],L=Array.isArray(P.value)?P.value:[P.value];for(let N=0,O=L.length;N<O;N++){const z=L[N],J=_(z),G=x%S,nt=G%J.boundary,ut=G+nt;x+=nt,ut!==0&&S-ut<J.storage&&(x+=S-ut),P.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=x,x+=J.storage}}}const E=x%S;return E>0&&(x+=S-E),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class $y{constructor(t={}){const{canvas:e=gm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=xn;let E=0,A=0,w=null,b=-1,M=null;const R=new pe,P=new pe;let L=null;const N=new Yt(0);let O=0,z=e.width,J=e.height,G=1,nt=null,ut=null;const vt=new pe(0,0,z,J),Pt=new pe(0,0,z,J);let Bt=!1;const te=new oo;let jt=!1,j=!1;const tt=new $t,Mt=new D,wt=new pe,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function ie(){return w===null?G:1}let U=n;function st(C,k){return e.getContext(C,k)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ro}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),U===null){const k="webgl2";if(U=st(k,C),U===null)throw st(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Q,K,Z,mt,at,gt,Wt,Vt,I,T,H,q,it,Y,Rt,ft,At,It,ct,bt,kt,Ft,xt,Xt;function F(){Q=new rv(U),Q.init(),Ft=new Vy(U,Q),K=new Jx(U,Q,t,Ft),Z=new zy(U,Q),K.reversedDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),mt=new lv(U),at=new wy,gt=new ky(U,Q,Z,at,K,Ft,mt),Wt=new tv(x),Vt=new sv(x),I=new p0(U),xt=new Zx(U,I),T=new ov(U,I,mt,xt),H=new uv(U,T,I,mt),ct=new cv(U,K,gt),ft=new Qx(at),q=new Ty(x,Wt,Vt,Q,K,xt,ft),it=new Yy(x,at),Y=new Ry,Rt=new Uy(Q),It=new $x(x,Wt,Vt,Z,H,d,l),At=new Oy(x,H,K),Xt=new jy(U,mt,K,Z),bt=new Kx(U,Q,mt),kt=new av(U,Q,mt),mt.programs=q.programs,x.capabilities=K,x.extensions=Q,x.properties=at,x.renderLists=Y,x.shadowMap=At,x.state=Z,x.info=mt}F();const lt=new Xy(x,U);this.xr=lt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=Q.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Q.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(z,J,!1))},this.getSize=function(C){return C.set(z,J)},this.setSize=function(C,k,W=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,J=k,e.width=Math.floor(C*G),e.height=Math.floor(k*G),W===!0&&(e.style.width=C+"px",e.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(z*G,J*G).floor()},this.setDrawingBufferSize=function(C,k,W){z=C,J=k,G=W,e.width=Math.floor(C*W),e.height=Math.floor(k*W),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(vt)},this.setViewport=function(C,k,W,X){C.isVector4?vt.set(C.x,C.y,C.z,C.w):vt.set(C,k,W,X),Z.viewport(R.copy(vt).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(Pt)},this.setScissor=function(C,k,W,X){C.isVector4?Pt.set(C.x,C.y,C.z,C.w):Pt.set(C,k,W,X),Z.scissor(P.copy(Pt).multiplyScalar(G).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(C){Z.setScissorTest(Bt=C)},this.setOpaqueSort=function(C){nt=C},this.setTransparentSort=function(C){ut=C},this.getClearColor=function(C){return C.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,W=!0){let X=0;if(C){let V=!1;if(w!==null){const dt=w.texture.format;V=dt===hu||dt===uu||dt===Pa}if(V){const dt=w.texture.type,Et=dt===Xn||dt===zi||dt===Zr||dt===ur||dt===au||dt===lu,Ut=It.getClearColor(),Ct=It.getClearAlpha(),Ht=Ut.r,qt=Ut.g,Ot=Ut.b;Et?(g[0]=Ht,g[1]=qt,g[2]=Ot,g[3]=Ct,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Ht,_[1]=qt,_[2]=Ot,_[3]=Ct,U.clearBufferiv(U.COLOR,0,_))}else X|=U.COLOR_BUFFER_BIT}k&&(X|=U.DEPTH_BUFFER_BIT),W&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),It.dispose(),Y.dispose(),Rt.dispose(),at.dispose(),Wt.dispose(),Vt.dispose(),H.dispose(),xt.dispose(),Xt.dispose(),q.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Yn),lt.removeEventListener("sessionend",ju),qi.stop()};function pt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=mt.autoReset,k=At.enabled,W=At.autoUpdate,X=At.needsUpdate,V=At.type;F(),mt.autoReset=C,At.enabled=k,At.autoUpdate=W,At.needsUpdate=X,At.type=V}function ht(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function et(C){const k=C.target;k.removeEventListener("dispose",et),Nt(k)}function Nt(C){Zt(C),at.remove(C)}function Zt(C){const k=at.get(C).programs;k!==void 0&&(k.forEach(function(W){q.releaseProgram(W)}),C.isShaderMaterial&&q.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,W,X,V,dt){k===null&&(k=Tt);const Et=V.isMesh&&V.matrixWorld.determinant()<0,Ut=gp(C,k,W,X,V);Z.setMaterial(X,Et);let Ct=W.index,Ht=1;if(X.wireframe===!0){if(Ct=T.getWireframeAttribute(W),Ct===void 0)return;Ht=2}const qt=W.drawRange,Ot=W.attributes.position;let ee=qt.start*Ht,he=(qt.start+qt.count)*Ht;dt!==null&&(ee=Math.max(ee,dt.start*Ht),he=Math.min(he,(dt.start+dt.count)*Ht)),Ct!==null?(ee=Math.max(ee,0),he=Math.min(he,Ct.count)):Ot!=null&&(ee=Math.max(ee,0),he=Math.min(he,Ot.count));const Te=he-ee;if(Te<0||Te===1/0)return;xt.setup(V,X,Ut,W,Ct);let ve,me=bt;if(Ct!==null&&(ve=I.get(Ct),me=kt,me.setIndex(ve)),V.isMesh)X.wireframe===!0?(Z.setLineWidth(X.wireframeLinewidth*ie()),me.setMode(U.LINES)):me.setMode(U.TRIANGLES);else if(V.isLine){let zt=X.linewidth;zt===void 0&&(zt=1),Z.setLineWidth(zt*ie()),V.isLineSegments?me.setMode(U.LINES):V.isLineLoop?me.setMode(U.LINE_LOOP):me.setMode(U.LINE_STRIP)}else V.isPoints?me.setMode(U.POINTS):V.isSprite&&me.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)to("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))me.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const zt=V._multiDrawStarts,Me=V._multiDrawCounts,re=V._multiDrawCount,yn=Ct?I.get(Ct).bytesPerElement:1,Ms=at.get(X).currentProgram.getUniforms();for(let Mn=0;Mn<re;Mn++)Ms.setValue(U,"_gl_DrawID",Mn),me.render(zt[Mn]/yn,Me[Mn])}else if(V.isInstancedMesh)me.renderInstances(ee,Te,V.count);else if(W.isInstancedBufferGeometry){const zt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Me=Math.min(W.instanceCount,zt);me.renderInstances(ee,Te,Me)}else me.render(ee,Te)};function _e(C,k,W){C.transparent===!0&&C.side===on&&C.forceSinglePass===!1?(C.side=un,C.needsUpdate=!0,ho(C,k,W),C.side=Jn,C.needsUpdate=!0,ho(C,k,W),C.side=on):ho(C,k,W)}this.compile=function(C,k,W=null){W===null&&(W=C),p=Rt.get(W),p.init(k),v.push(p),W.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),C!==W&&C.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const X=new Set;return C.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const dt=V.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){const Ut=dt[Et];_e(Ut,W,V),X.add(Ut)}else _e(dt,W,V),X.add(dt)}),p=v.pop(),X},this.compileAsync=function(C,k,W=null){const X=this.compile(C,k,W);return new Promise(V=>{function dt(){if(X.forEach(function(Et){at.get(Et).currentProgram.isReady()&&X.delete(Et)}),X.size===0){V(C);return}setTimeout(dt,10)}Q.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let le=null;function ti(C){le&&le(C)}function Yn(){qi.stop()}function ju(){qi.start()}const qi=new Fd;qi.setAnimationLoop(ti),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(C){le=C,lt.setAnimationLoop(C),C===null?qi.stop():qi.start()},lt.addEventListener("sessionstart",Yn),lt.addEventListener("sessionend",ju),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(k),k=lt.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,k,w),p=Rt.get(C,v.length),p.init(k),v.push(p),tt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),te.setFromProjectionMatrix(tt,Wn,k.reversedDepth),j=this.localClippingEnabled,jt=ft.init(this.clippingPlanes,j),m=Y.get(C,y.length),m.init(),y.push(m),lt.enabled===!0&&lt.isPresenting===!0){const dt=x.xr.getDepthSensingMesh();dt!==null&&Xa(dt,k,-1/0,x.sortObjects)}Xa(C,k,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(nt,ut),Kt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Kt&&It.addToRenderList(m,C),this.info.render.frame++,jt===!0&&ft.beginShadows();const W=p.state.shadowsArray;At.render(W,C,k),jt===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,V=m.transmissive;if(p.setupLights(),k.isArrayCamera){const dt=k.cameras;if(V.length>0)for(let Et=0,Ut=dt.length;Et<Ut;Et++){const Ct=dt[Et];Zu(X,V,C,Ct)}Kt&&It.render(C);for(let Et=0,Ut=dt.length;Et<Ut;Et++){const Ct=dt[Et];$u(m,C,Ct,Ct.viewport)}}else V.length>0&&Zu(X,V,C,k),Kt&&It.render(C),$u(m,C,k);w!==null&&A===0&&(gt.updateMultisampleRenderTarget(w),gt.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(x,C,k),xt.resetDefaultState(),b=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],jt===!0&&ft.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Xa(C,k,W,X){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||te.intersectsSprite(C)){X&&wt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(tt);const Et=H.update(C),Ut=C.material;Ut.visible&&m.push(C,Et,Ut,W,wt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||te.intersectsObject(C))){const Et=H.update(C),Ut=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),wt.copy(C.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),wt.copy(Et.boundingSphere.center)),wt.applyMatrix4(C.matrixWorld).applyMatrix4(tt)),Array.isArray(Ut)){const Ct=Et.groups;for(let Ht=0,qt=Ct.length;Ht<qt;Ht++){const Ot=Ct[Ht],ee=Ut[Ot.materialIndex];ee&&ee.visible&&m.push(C,Et,ee,W,wt.z,Ot)}}else Ut.visible&&m.push(C,Et,Ut,W,wt.z,null)}}const dt=C.children;for(let Et=0,Ut=dt.length;Et<Ut;Et++)Xa(dt[Et],k,W,X)}function $u(C,k,W,X){const V=C.opaque,dt=C.transmissive,Et=C.transparent;p.setupLightsView(W),jt===!0&&ft.setGlobalState(x.clippingPlanes,W),X&&Z.viewport(R.copy(X)),V.length>0&&uo(V,k,W),dt.length>0&&uo(dt,k,W),Et.length>0&&uo(Et,k,W),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Zu(C,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new An(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?cn:Xn,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const dt=p.state.transmissionRenderTarget[X.id],Et=X.viewport||R;dt.setSize(Et.z*x.transmissionResolutionScale,Et.w*x.transmissionResolutionScale);const Ut=x.getRenderTarget(),Ct=x.getActiveCubeFace(),Ht=x.getActiveMipmapLevel();x.setRenderTarget(dt),x.getClearColor(N),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),Kt&&It.render(W);const qt=x.toneMapping;x.toneMapping=Bi;const Ot=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),jt===!0&&ft.setGlobalState(x.clippingPlanes,X),uo(C,W,X),gt.updateMultisampleRenderTarget(dt),gt.updateRenderTargetMipmap(dt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let he=0,Te=k.length;he<Te;he++){const ve=k[he],me=ve.object,zt=ve.geometry,Me=ve.material,re=ve.group;if(Me.side===on&&me.layers.test(X.layers)){const yn=Me.side;Me.side=un,Me.needsUpdate=!0,Ku(me,W,X,zt,Me,re),Me.side=yn,Me.needsUpdate=!0,ee=!0}}ee===!0&&(gt.updateMultisampleRenderTarget(dt),gt.updateRenderTargetMipmap(dt))}x.setRenderTarget(Ut,Ct,Ht),x.setClearColor(N,O),Ot!==void 0&&(X.viewport=Ot),x.toneMapping=qt}function uo(C,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let V=0,dt=C.length;V<dt;V++){const Et=C[V],Ut=Et.object,Ct=Et.geometry,Ht=Et.group;let qt=Et.material;qt.allowOverride===!0&&X!==null&&(qt=X),Ut.layers.test(W.layers)&&Ku(Ut,k,W,Ct,qt,Ht)}}function Ku(C,k,W,X,V,dt){C.onBeforeRender(x,k,W,X,V,dt),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(x,k,W,X,C,dt),V.transparent===!0&&V.side===on&&V.forceSinglePass===!1?(V.side=un,V.needsUpdate=!0,x.renderBufferDirect(W,k,X,V,C,dt),V.side=Jn,V.needsUpdate=!0,x.renderBufferDirect(W,k,X,V,C,dt),V.side=on):x.renderBufferDirect(W,k,X,V,C,dt),C.onAfterRender(x,k,W,X,V,dt)}function ho(C,k,W){k.isScene!==!0&&(k=Tt);const X=at.get(C),V=p.state.lights,dt=p.state.shadowsArray,Et=V.state.version,Ut=q.getParameters(C,V.state,dt,k,W),Ct=q.getProgramCacheKey(Ut);let Ht=X.programs;X.environment=C.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(C.isMeshStandardMaterial?Vt:Wt).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Ht===void 0&&(C.addEventListener("dispose",et),Ht=new Map,X.programs=Ht);let qt=Ht.get(Ct);if(qt!==void 0){if(X.currentProgram===qt&&X.lightsStateVersion===Et)return Qu(C,Ut),qt}else Ut.uniforms=q.getUniforms(C),C.onBeforeCompile(Ut,x),qt=q.acquireProgram(Ut,Ct),Ht.set(Ct,qt),X.uniforms=Ut.uniforms;const Ot=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ot.clippingPlanes=ft.uniform),Qu(C,Ut),X.needsLights=xp(C),X.lightsStateVersion=Et,X.needsLights&&(Ot.ambientLightColor.value=V.state.ambient,Ot.lightProbe.value=V.state.probe,Ot.directionalLights.value=V.state.directional,Ot.directionalLightShadows.value=V.state.directionalShadow,Ot.spotLights.value=V.state.spot,Ot.spotLightShadows.value=V.state.spotShadow,Ot.rectAreaLights.value=V.state.rectArea,Ot.ltc_1.value=V.state.rectAreaLTC1,Ot.ltc_2.value=V.state.rectAreaLTC2,Ot.pointLights.value=V.state.point,Ot.pointLightShadows.value=V.state.pointShadow,Ot.hemisphereLights.value=V.state.hemi,Ot.directionalShadowMap.value=V.state.directionalShadowMap,Ot.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ot.spotShadowMap.value=V.state.spotShadowMap,Ot.spotLightMatrix.value=V.state.spotLightMatrix,Ot.spotLightMap.value=V.state.spotLightMap,Ot.pointShadowMap.value=V.state.pointShadowMap,Ot.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=qt,X.uniformsList=null,qt}function Ju(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=_a.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Qu(C,k){const W=at.get(C);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function gp(C,k,W,X,V){k.isScene!==!0&&(k=Tt),gt.resetTextureUnits();const dt=k.fog,Et=X.isMeshStandardMaterial?k.environment:null,Ut=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:us,Ct=(X.isMeshStandardMaterial?Vt:Wt).get(X.envMap||Et),Ht=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ot=!!W.morphAttributes.position,ee=!!W.morphAttributes.normal,he=!!W.morphAttributes.color;let Te=Bi;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Te=x.toneMapping);const ve=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,me=ve!==void 0?ve.length:0,zt=at.get(X),Me=p.state.lights;if(jt===!0&&(j===!0||C!==M)){const nn=C===M&&X.id===b;ft.setState(X,C,nn)}let re=!1;X.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Me.state.version||zt.outputColorSpace!==Ut||V.isBatchedMesh&&zt.batching===!1||!V.isBatchedMesh&&zt.batching===!0||V.isBatchedMesh&&zt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&zt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&zt.instancing===!1||!V.isInstancedMesh&&zt.instancing===!0||V.isSkinnedMesh&&zt.skinning===!1||!V.isSkinnedMesh&&zt.skinning===!0||V.isInstancedMesh&&zt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&zt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&zt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&zt.instancingMorph===!1&&V.morphTexture!==null||zt.envMap!==Ct||X.fog===!0&&zt.fog!==dt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==ft.numPlanes||zt.numIntersection!==ft.numIntersection)||zt.vertexAlphas!==Ht||zt.vertexTangents!==qt||zt.morphTargets!==Ot||zt.morphNormals!==ee||zt.morphColors!==he||zt.toneMapping!==Te||zt.morphTargetsCount!==me)&&(re=!0):(re=!0,zt.__version=X.version);let yn=zt.currentProgram;re===!0&&(yn=ho(X,k,V));let Ms=!1,Mn=!1,Sr=!1;const Se=yn.getUniforms(),Rn=zt.uniforms;if(Z.useProgram(yn.program)&&(Ms=!0,Mn=!0,Sr=!0),X.id!==b&&(b=X.id,Mn=!0),Ms||M!==C){Z.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Se.setValue(U,"projectionMatrix",C.projectionMatrix),Se.setValue(U,"viewMatrix",C.matrixWorldInverse);const mn=Se.map.cameraPosition;mn!==void 0&&mn.setValue(U,Mt.setFromMatrixPosition(C.matrixWorld)),K.logarithmicDepthBuffer&&Se.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Se.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Mn=!0,Sr=!0)}if(V.isSkinnedMesh){Se.setOptional(U,V,"bindMatrix"),Se.setOptional(U,V,"bindMatrixInverse");const nn=V.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Se.setValue(U,"boneTexture",nn.boneTexture,gt))}V.isBatchedMesh&&(Se.setOptional(U,V,"batchingTexture"),Se.setValue(U,"batchingTexture",V._matricesTexture,gt),Se.setOptional(U,V,"batchingIdTexture"),Se.setValue(U,"batchingIdTexture",V._indirectTexture,gt),Se.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&Se.setValue(U,"batchingColorTexture",V._colorsTexture,gt));const Cn=W.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&ct.update(V,W,yn),(Mn||zt.receiveShadow!==V.receiveShadow)&&(zt.receiveShadow=V.receiveShadow,Se.setValue(U,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Rn.envMap.value=Ct,Rn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(Rn.envMapIntensity.value=k.environmentIntensity),Mn&&(Se.setValue(U,"toneMappingExposure",x.toneMappingExposure),zt.needsLights&&_p(Rn,Sr),dt&&X.fog===!0&&it.refreshFogUniforms(Rn,dt),it.refreshMaterialUniforms(Rn,X,G,J,p.state.transmissionRenderTarget[C.id]),_a.upload(U,Ju(zt),Rn,gt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(_a.upload(U,Ju(zt),Rn,gt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Se.setValue(U,"center",V.center),Se.setValue(U,"modelViewMatrix",V.modelViewMatrix),Se.setValue(U,"normalMatrix",V.normalMatrix),Se.setValue(U,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const nn=X.uniformsGroups;for(let mn=0,qa=nn.length;mn<qa;mn++){const Yi=nn[mn];Xt.update(Yi,yn),Xt.bind(Yi,yn)}}return yn}function _p(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function xp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,k,W){const X=at.get(C);X.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),at.get(C.texture).__webglTexture=k,at.get(C.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){const W=at.get(C);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const vp=U.createFramebuffer();this.setRenderTarget=function(C,k=0,W=0){w=C,E=k,A=W;let X=!0,V=null,dt=!1,Et=!1;if(C){const Ct=at.get(C);if(Ct.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(U.FRAMEBUFFER,null),X=!1;else if(Ct.__webglFramebuffer===void 0)gt.setupRenderTarget(C);else if(Ct.__hasExternalTextures)gt.rebindTextures(C,at.get(C.texture).__webglTexture,at.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ot=C.depthTexture;if(Ct.__boundDepthTexture!==Ot){if(Ot!==null&&at.has(Ot)&&(C.width!==Ot.image.width||C.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(C)}}const Ht=C.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Et=!0);const qt=at.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qt[k])?V=qt[k][W]:V=qt[k],dt=!0):C.samples>0&&gt.useMultisampledRTT(C)===!1?V=at.get(C).__webglMultisampledFramebuffer:Array.isArray(qt)?V=qt[W]:V=qt,R.copy(C.viewport),P.copy(C.scissor),L=C.scissorTest}else R.copy(vt).multiplyScalar(G).floor(),P.copy(Pt).multiplyScalar(G).floor(),L=Bt;if(W!==0&&(V=vp),Z.bindFramebuffer(U.FRAMEBUFFER,V)&&X&&Z.drawBuffers(C,V),Z.viewport(R),Z.scissor(P),Z.setScissorTest(L),dt){const Ct=at.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ct.__webglTexture,W)}else if(Et){const Ct=k;for(let Ht=0;Ht<C.textures.length;Ht++){const qt=at.get(C.textures[Ht]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ht,qt.__webglTexture,W,Ct)}}else if(C!==null&&W!==0){const Ct=at.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ct.__webglTexture,W)}b=-1},this.readRenderTargetPixels=function(C,k,W,X,V,dt,Et,Ut=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=at.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct){Z.bindFramebuffer(U.FRAMEBUFFER,Ct);try{const Ht=C.textures[Ut],qt=Ht.format,Ot=Ht.type;if(!K.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-X&&W>=0&&W<=C.height-V&&(C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ut),U.readPixels(k,W,X,V,Ft.convert(qt),Ft.convert(Ot),dt))}finally{const Ht=w!==null?at.get(w).__webglFramebuffer:null;Z.bindFramebuffer(U.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(C,k,W,X,V,dt,Et,Ut=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=at.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct)if(k>=0&&k<=C.width-X&&W>=0&&W<=C.height-V){Z.bindFramebuffer(U.FRAMEBUFFER,Ct);const Ht=C.textures[Ut],qt=Ht.format,Ot=Ht.type;if(!K.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ee),U.bufferData(U.PIXEL_PACK_BUFFER,dt.byteLength,U.STREAM_READ),C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ut),U.readPixels(k,W,X,V,Ft.convert(qt),Ft.convert(Ot),0);const he=w!==null?at.get(w).__webglFramebuffer:null;Z.bindFramebuffer(U.FRAMEBUFFER,he);const Te=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await _m(U,Te,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ee),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,dt),U.deleteBuffer(ee),U.deleteSync(Te),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,W=0){const X=Math.pow(2,-W),V=Math.floor(C.image.width*X),dt=Math.floor(C.image.height*X),Et=k!==null?k.x:0,Ut=k!==null?k.y:0;gt.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,Et,Ut,V,dt),Z.unbindTexture()};const yp=U.createFramebuffer(),Mp=U.createFramebuffer();this.copyTextureToTexture=function(C,k,W=null,X=null,V=0,dt=null){dt===null&&(V!==0?(to("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dt=V,V=0):dt=0);let Et,Ut,Ct,Ht,qt,Ot,ee,he,Te;const ve=C.isCompressedTexture?C.mipmaps[dt]:C.image;if(W!==null)Et=W.max.x-W.min.x,Ut=W.max.y-W.min.y,Ct=W.isBox3?W.max.z-W.min.z:1,Ht=W.min.x,qt=W.min.y,Ot=W.isBox3?W.min.z:0;else{const Cn=Math.pow(2,-V);Et=Math.floor(ve.width*Cn),Ut=Math.floor(ve.height*Cn),C.isDataArrayTexture?Ct=ve.depth:C.isData3DTexture?Ct=Math.floor(ve.depth*Cn):Ct=1,Ht=0,qt=0,Ot=0}X!==null?(ee=X.x,he=X.y,Te=X.z):(ee=0,he=0,Te=0);const me=Ft.convert(k.format),zt=Ft.convert(k.type);let Me;k.isData3DTexture?(gt.setTexture3D(k,0),Me=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(gt.setTexture2DArray(k,0),Me=U.TEXTURE_2D_ARRAY):(gt.setTexture2D(k,0),Me=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const re=U.getParameter(U.UNPACK_ROW_LENGTH),yn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ms=U.getParameter(U.UNPACK_SKIP_PIXELS),Mn=U.getParameter(U.UNPACK_SKIP_ROWS),Sr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ve.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ve.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ht),U.pixelStorei(U.UNPACK_SKIP_ROWS,qt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ot);const Se=C.isDataArrayTexture||C.isData3DTexture,Rn=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const Cn=at.get(C),nn=at.get(k),mn=at.get(Cn.__renderTarget),qa=at.get(nn.__renderTarget);Z.bindFramebuffer(U.READ_FRAMEBUFFER,mn.__webglFramebuffer),Z.bindFramebuffer(U.DRAW_FRAMEBUFFER,qa.__webglFramebuffer);for(let Yi=0;Yi<Ct;Yi++)Se&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,at.get(C).__webglTexture,V,Ot+Yi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,at.get(k).__webglTexture,dt,Te+Yi)),U.blitFramebuffer(Ht,qt,Et,Ut,ee,he,Et,Ut,U.DEPTH_BUFFER_BIT,U.NEAREST);Z.bindFramebuffer(U.READ_FRAMEBUFFER,null),Z.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||C.isRenderTargetTexture||at.has(C)){const Cn=at.get(C),nn=at.get(k);Z.bindFramebuffer(U.READ_FRAMEBUFFER,yp),Z.bindFramebuffer(U.DRAW_FRAMEBUFFER,Mp);for(let mn=0;mn<Ct;mn++)Se?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Cn.__webglTexture,V,Ot+mn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Cn.__webglTexture,V),Rn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,nn.__webglTexture,dt,Te+mn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,nn.__webglTexture,dt),V!==0?U.blitFramebuffer(Ht,qt,Et,Ut,ee,he,Et,Ut,U.COLOR_BUFFER_BIT,U.NEAREST):Rn?U.copyTexSubImage3D(Me,dt,ee,he,Te+mn,Ht,qt,Et,Ut):U.copyTexSubImage2D(Me,dt,ee,he,Ht,qt,Et,Ut);Z.bindFramebuffer(U.READ_FRAMEBUFFER,null),Z.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Rn?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(Me,dt,ee,he,Te,Et,Ut,Ct,me,zt,ve.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Me,dt,ee,he,Te,Et,Ut,Ct,me,ve.data):U.texSubImage3D(Me,dt,ee,he,Te,Et,Ut,Ct,me,zt,ve):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,dt,ee,he,Et,Ut,me,zt,ve.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,dt,ee,he,ve.width,ve.height,me,ve.data):U.texSubImage2D(U.TEXTURE_2D,dt,ee,he,Et,Ut,me,zt,ve);U.pixelStorei(U.UNPACK_ROW_LENGTH,re),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ms),U.pixelStorei(U.UNPACK_SKIP_ROWS,Mn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Sr),dt===0&&k.generateMipmaps&&U.generateMipmap(Me),Z.unbindTexture()},this.initRenderTarget=function(C){at.get(C).__webglFramebuffer===void 0&&gt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?gt.setTextureCube(C,0):C.isData3DTexture?gt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?gt.setTexture2DArray(C,0):gt.setTexture2D(C,0),Z.unbindTexture()},this.resetState=function(){E=0,A=0,w=null,Z.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}const vf={type:"change"},Cu={type:"start"},Vd={type:"end"},qo=new gr,yf=new wn,Zy=Math.cos(70*Nc.DEG2RAD),Ue=new D,_n=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Il=1e-6;class Ky extends Nd{constructor(t,e=null){super(t,e),this.state=de.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ir.ROTATE,MIDDLE:ir.DOLLY,RIGHT:ir.PAN},this.touches={ONE:Qs.ROTATE,TWO:Qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new ki,this._lastTargetPosition=new D,this._quat=new ki().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qh,this._sphericalDelta=new qh,this._scale=1,this._panOffset=new D,this._rotateStart=new $,this._rotateEnd=new $,this._rotateDelta=new $,this._panStart=new $,this._panEnd=new $,this._panDelta=new $,this._dollyStart=new $,this._dollyEnd=new $,this._dollyDelta=new $,this._dollyDirection=new D,this._mouse=new $,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qy.bind(this),this._onPointerDown=Jy.bind(this),this._onPointerUp=tM.bind(this),this._onContextMenu=aM.bind(this),this._onMouseWheel=iM.bind(this),this._onKeyDown=sM.bind(this),this._onTouchStart=rM.bind(this),this._onTouchMove=oM.bind(this),this._onMouseDown=eM.bind(this),this._onMouseMove=nM.bind(this),this._interceptControlDown=lM.bind(this),this._interceptControlUp=cM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vf),this.update(),this.state=de.NONE}update(t=null){const e=this.object.position;Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=_n:n>Math.PI&&(n-=_n),s<-Math.PI?s+=_n:s>Math.PI&&(s-=_n),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ue.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(qo.origin.copy(this.object.position),qo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qo.direction))<Zy?this.object.lookAt(this.target):(yf.setFromNormalAndCoplanarPoint(this.object.up,this.target),qo.intersectPlane(yf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Il||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Il||this._lastTargetPosition.distanceToSquared(this.target)>Il?(this.dispatchEvent(vf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?_n/60*this.autoRotateSpeed*t:_n/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){this.screenSpacePanning===!0?Ue.setFromMatrixColumn(e,1):(Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue)),Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ue.copy(s).sub(this.target);let r=Ue.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Jy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Qy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function tM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vd),this.state=de.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function eM(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ir.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=de.DOLLY;break;case ir.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}break;case ir.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Cu)}function nM(i){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function iM(i){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(i.preventDefault(),this.dispatchEvent(Cu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Vd))}function sM(i){this.enabled!==!1&&this._handleKeyDown(i)}function rM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=de.TOUCH_ROTATE;break;case Qs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case Qs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=de.TOUCH_DOLLY_PAN;break;case Qs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Cu)}function oM(i){switch(this._trackPointer(i),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=de.NONE}}function aM(i){this.enabled!==!1&&i.preventDefault()}function lM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class uM extends $g{constructor(t){super(t),this.type=cn}parse(t){const o=function(w,b){switch(w){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(b||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(b||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(b||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(b||""))}},h=function(w,b,M){b=b||1024;let P=w.pos,L=-1,N=0,O="",z=String.fromCharCode.apply(null,new Uint16Array(w.subarray(P,P+128)));for(;0>(L=z.indexOf(`
`))&&N<b&&P<w.byteLength;)O+=z,N+=z.length,P+=128,z+=String.fromCharCode.apply(null,new Uint16Array(w.subarray(P,P+128)));return-1<L?(w.pos+=N+L+1,O+z.slice(0,L)):!1},f=function(w){const b=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,N={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let O,z;for((w.pos>=w.byteLength||!(O=h(w)))&&o(1,"no header found"),(z=O.match(b))||o(3,"bad initial token"),N.valid|=1,N.programtype=z[1],N.string+=O+`
`;O=h(w),O!==!1;){if(N.string+=O+`
`,O.charAt(0)==="#"){N.comments+=O+`
`;continue}if((z=O.match(M))&&(N.gamma=parseFloat(z[1])),(z=O.match(R))&&(N.exposure=parseFloat(z[1])),(z=O.match(P))&&(N.valid|=2,N.format=z[1]),(z=O.match(L))&&(N.valid|=4,N.height=parseInt(z[1],10),N.width=parseInt(z[2],10)),N.valid&2&&N.valid&4)break}return N.valid&2||o(3,"missing format specifier"),N.valid&4||o(3,"missing image size specifier"),N},d=function(w,b,M){const R=b;if(R<8||R>32767||w[0]!==2||w[1]!==2||w[2]&128)return new Uint8Array(w);R!==(w[2]<<8|w[3])&&o(3,"wrong scanline width");const P=new Uint8Array(4*b*M);P.length||o(4,"unable to allocate buffer space");let L=0,N=0;const O=4*R,z=new Uint8Array(4),J=new Uint8Array(O);let G=M;for(;G>0&&N<w.byteLength;){N+4>w.byteLength&&o(1),z[0]=w[N++],z[1]=w[N++],z[2]=w[N++],z[3]=w[N++],(z[0]!=2||z[1]!=2||(z[2]<<8|z[3])!=R)&&o(3,"bad rgbe scanline format");let nt=0,ut;for(;nt<O&&N<w.byteLength;){ut=w[N++];const Pt=ut>128;if(Pt&&(ut-=128),(ut===0||nt+ut>O)&&o(3,"bad scanline data"),Pt){const Bt=w[N++];for(let te=0;te<ut;te++)J[nt++]=Bt}else J.set(w.subarray(N,N+ut),nt),nt+=ut,N+=ut}const vt=R;for(let Pt=0;Pt<vt;Pt++){let Bt=0;P[L]=J[Pt+Bt],Bt+=R,P[L+1]=J[Pt+Bt],Bt+=R,P[L+2]=J[Pt+Bt],Bt+=R,P[L+3]=J[Pt+Bt],L+=4}G--}return P},g=function(w,b,M,R){const P=w[b+3],L=Math.pow(2,P-128)/255;M[R+0]=w[b+0]*L,M[R+1]=w[b+1]*L,M[R+2]=w[b+2]*L,M[R+3]=1},_=function(w,b,M,R){const P=w[b+3],L=Math.pow(2,P-128)/255;M[R+0]=So.toHalfFloat(Math.min(w[b+0]*L,65504)),M[R+1]=So.toHalfFloat(Math.min(w[b+1]*L,65504)),M[R+2]=So.toHalfFloat(Math.min(w[b+2]*L,65504)),M[R+3]=So.toHalfFloat(1)},m=new Uint8Array(t);m.pos=0;const p=f(m),y=p.width,v=p.height,x=d(m.subarray(m.pos),y,v);let S,E,A;switch(this.type){case ln:A=x.length/4;const w=new Float32Array(A*4);for(let M=0;M<A;M++)g(x,M*4,w,M*4);S=w,E=ln;break;case cn:A=x.length/4;const b=new Uint16Array(A*4);for(let M=0;M<A;M++)_(x,M*4,b,M*4);S=b,E=cn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:v,data:S,header:p.string,gamma:p.gamma,exposure:p.exposure,type:E}}setDataType(t){return this.type=t,this}load(t,e,n,s){function r(o,a){switch(o.type){case ln:case cn:o.colorSpace=us,o.minFilter=an,o.magFilter=an,o.generateMipmaps=!1,o.flipY=!0;break}e&&e(o,a)}return super.load(t,r,n,s)}}class hM extends uM{constructor(t){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(t)}}const cs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class _s{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fM=new La(-1,1,1,-1,0,1);class dM extends Ee{constructor(){super(),this.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ue([0,2,0,0,2,0],2))}}const pM=new dM;class Na{constructor(t){this._mesh=new Ie(pM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,fM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class mM extends _s{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof De?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Kn.clone(t.uniforms),this.material=new De({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Na(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Mf extends _s{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class gM extends _s{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class _M{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new $);this._width=n.width,this._height=n.height,e=new An(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:cn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mM(cs),this.copyPass.material.blending=qe,this.clock=new Ld}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Mf!==void 0&&(o instanceof Mf?n=!0:o instanceof gM&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class xM extends _s{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Yt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const Yo={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new $t},cameraProjectionMatrixInverse:{value:new $t},cameraWorldMatrix:{value:new $t},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},jo={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ll={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function vM(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=yM(t),n=e.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=e[o],l=2*Math.PI*a/n,c=new D(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}const r=new as(s,t,t);return r.wrapS=Mi,r.wrapT=Mi,r.needsUpdate=!0,r}function yM(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=o++;r++,s--}return n}const $o={defines:{SAMPLES:16,SAMPLE_VECTORS:Hd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $},cameraProjectionMatrixInverse:{value:new $t},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Hd(i,t,e){const n=MM(i,t,e);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function MM(i,t,e){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*t*s/i,o=Math.pow(s/(i-1),e);n.push(new D(Math.cos(r),Math.sin(r),o))}return n}class SM{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,d=c-h,g=t-f,_=e-d;let m,p;g>_?(m=1,p=0):(m=0,p=1);const y=g-m+u,v=_-p+u,x=g-1+2*u,S=_-1+2*u,E=l&255,A=c&255,w=this.perm[E+this.perm[A]]%12,b=this.perm[E+m+this.perm[A+p]]%12,M=this.perm[E+1+this.perm[A+1]]%12;let R=.5-g*g-_*_;R<0?n=0:(R*=R,n=R*R*this._dot(this.grad3[w],g,_));let P=.5-y*y-v*v;P<0?s=0:(P*=P,s=P*P*this._dot(this.grad3[b],y,v));let L=.5-x*x-S*S;return L<0?r=0:(L*=L,r=L*L*this._dot(this.grad3[M],x,S)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a;const c=(t+e+n)*.3333333333333333,u=Math.floor(t+c),h=Math.floor(e+c),f=Math.floor(n+c),d=1/6,g=(u+h+f)*d,_=u-g,m=h-g,p=f-g,y=t-_,v=e-m,x=n-p;let S,E,A,w,b,M;y>=v?v>=x?(S=1,E=0,A=0,w=1,b=1,M=0):y>=x?(S=1,E=0,A=0,w=1,b=0,M=1):(S=0,E=0,A=1,w=1,b=0,M=1):v<x?(S=0,E=0,A=1,w=0,b=1,M=1):y<x?(S=0,E=1,A=0,w=0,b=1,M=1):(S=0,E=1,A=0,w=1,b=1,M=0);const R=y-S+d,P=v-E+d,L=x-A+d,N=y-w+2*d,O=v-b+2*d,z=x-M+2*d,J=y-1+3*d,G=v-1+3*d,nt=x-1+3*d,ut=u&255,vt=h&255,Pt=f&255,Bt=this.perm[ut+this.perm[vt+this.perm[Pt]]]%12,te=this.perm[ut+S+this.perm[vt+E+this.perm[Pt+A]]]%12,jt=this.perm[ut+w+this.perm[vt+b+this.perm[Pt+M]]]%12,j=this.perm[ut+1+this.perm[vt+1+this.perm[Pt+1]]]%12;let tt=.6-y*y-v*v-x*x;tt<0?s=0:(tt*=tt,s=tt*tt*this._dot3(this.grad3[Bt],y,v,x));let Mt=.6-R*R-P*P-L*L;Mt<0?r=0:(Mt*=Mt,r=Mt*Mt*this._dot3(this.grad3[te],R,P,L));let wt=.6-N*N-O*O-z*z;wt<0?o=0:(wt*=wt,o=wt*wt*this._dot3(this.grad3[jt],N,O,z));let Tt=.6-J*J-G*G-nt*nt;return Tt<0?a=0:(Tt*=Tt,a=Tt*Tt*this._dot3(this.grad3[j],J,G,nt)),32*(s+r+o+a)}noise4d(t,e,n,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,f,d,g;const _=(t+e+n+s)*l,m=Math.floor(t+_),p=Math.floor(e+_),y=Math.floor(n+_),v=Math.floor(s+_),x=(m+p+y+v)*c,S=m-x,E=p-x,A=y-x,w=v-x,b=t-S,M=e-E,R=n-A,P=s-w,L=b>M?32:0,N=b>R?16:0,O=M>R?8:0,z=b>P?4:0,J=M>P?2:0,G=R>P?1:0,nt=L+N+O+z+J+G,ut=o[nt][0]>=3?1:0,vt=o[nt][1]>=3?1:0,Pt=o[nt][2]>=3?1:0,Bt=o[nt][3]>=3?1:0,te=o[nt][0]>=2?1:0,jt=o[nt][1]>=2?1:0,j=o[nt][2]>=2?1:0,tt=o[nt][3]>=2?1:0,Mt=o[nt][0]>=1?1:0,wt=o[nt][1]>=1?1:0,Tt=o[nt][2]>=1?1:0,Kt=o[nt][3]>=1?1:0,ie=b-ut+c,U=M-vt+c,st=R-Pt+c,Q=P-Bt+c,K=b-te+2*c,Z=M-jt+2*c,mt=R-j+2*c,at=P-tt+2*c,gt=b-Mt+3*c,Wt=M-wt+3*c,Vt=R-Tt+3*c,I=P-Kt+3*c,T=b-1+4*c,H=M-1+4*c,q=R-1+4*c,it=P-1+4*c,Y=m&255,Rt=p&255,ft=y&255,At=v&255,It=a[Y+a[Rt+a[ft+a[At]]]]%32,ct=a[Y+ut+a[Rt+vt+a[ft+Pt+a[At+Bt]]]]%32,bt=a[Y+te+a[Rt+jt+a[ft+j+a[At+tt]]]]%32,kt=a[Y+Mt+a[Rt+wt+a[ft+Tt+a[At+Kt]]]]%32,Ft=a[Y+1+a[Rt+1+a[ft+1+a[At+1]]]]%32;let xt=.6-b*b-M*M-R*R-P*P;xt<0?u=0:(xt*=xt,u=xt*xt*this._dot4(r[It],b,M,R,P));let Xt=.6-ie*ie-U*U-st*st-Q*Q;Xt<0?h=0:(Xt*=Xt,h=Xt*Xt*this._dot4(r[ct],ie,U,st,Q));let F=.6-K*K-Z*Z-mt*mt-at*at;F<0?f=0:(F*=F,f=F*F*this._dot4(r[bt],K,Z,mt,at));let lt=.6-gt*gt-Wt*Wt-Vt*Vt-I*I;lt<0?d=0:(lt*=lt,d=lt*lt*this._dot4(r[kt],gt,Wt,Vt,I));let pt=.6-T*T-H*H-q*q-it*it;return pt<0?g=0:(pt*=pt,g=pt*pt*this._dot4(r[Ft],T,H,q,it)),27*(u+h+f+d+g)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}}class Vn extends _s{constructor(t,e,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=vM(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new An(this.width,this.height,{type:cn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new De({defines:Object.assign({},Yo.defines),uniforms:Kn.clone(Yo.uniforms),vertexShader:Yo.vertexShader,fragmentShader:Yo.fragmentShader,blending:qe,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Vg,this.normalMaterial.blending=qe,this.pdMaterial=new De({defines:Object.assign({},$o.defines),uniforms:Kn.clone($o.uniforms),vertexShader:$o.vertexShader,fragmentShader:$o.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new De({defines:Object.assign({},jo.defines),uniforms:Kn.clone(jo.uniforms),vertexShader:jo.vertexShader,fragmentShader:jo.fragmentShader,blending:qe}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new De({uniforms:Kn.clone(cs.uniforms),vertexShader:cs.vertexShader,fragmentShader:cs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Zl,blendDst:kr,blendEquation:Gn,blendSrcAlpha:$l,blendDstAlpha:kr,blendEquationAlpha:Gn}),this.blendMaterial=new De({uniforms:Kn.clone(Ll.uniforms),vertexShader:Ll.vertexShader,fragmentShader:Ll.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:jf,blendSrc:Zl,blendDst:kr,blendEquation:Gn,blendSrcAlpha:$l,blendDstAlpha:kr,blendEquationAlpha:Gn}),this._fsQuad=new Na(null),this._originalClearColor=new Yt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new vu,this.depthTexture.format=hr,this.depthTexture.type=ur,this.normalRenderTarget=new An(this.width,this.height,{minFilter:hn,magFilter:hn,type:cn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Hd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Vn.OUTPUT.Off:break;case Vn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Vn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Vn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Vn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case Vn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case Vn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){const t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){const e=new SM,n=t*t*4,s=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){const l=o,c=a;s[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,s[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const r=new as(s,t,t,vn,Xn);return r.wrapS=Mi,r.wrapT=Mi,r.needsUpdate=!0,r}}Vn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const bM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Yt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class pr extends _s{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new $(t.x,t.y):new $(256,256),this.clearColor=new Yt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new An(r,o,{type:cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new An(r,o,{type:cn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new An(r,o,{type:cn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=bM;this.highPassUniforms=Kn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new De({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new $(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Kn.clone(cs.uniforms),this.blendMaterial=new De({uniforms:this.copyUniforms,vertexShader:cs.vertexShader,fragmentShader:cs.fragmentShader,blending:ql,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Yt,this._oldClearAlpha=1,this._basic=new Da,this._fsQuad=new Na(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=pr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=pr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new De({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new De({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}pr.BlurDirectionX=new $(1,0);pr.BlurDirectionY=new $(0,1);const Zo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class EM extends _s{constructor(){super(),this.uniforms=Kn.clone(Zo.uniforms),this.material=new kg({name:Zo.name,uniforms:this.uniforms,vertexShader:Zo.vertexShader,fragmentShader:Zo.fragmentShader}),this._fsQuad=new Na(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},se.getTransfer(this._outputColorSpace)===ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ru?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===td?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ed?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Qf&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Gd=0,TM=1,wM=2,Sf=2,Ul=1.25,bf=1,Qe=32,Ne=Qe/4,Wd=65535,xa=Math.pow(2,-24),Pu=Symbol("SKIP_GENERATION"),Xd={strategy:Gd,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Pu]:!1};function we(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Gc(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function Ef(i,t){t.set(i)}function Tf(i,t,e){let n,s;for(let r=0;r<3;r++){const o=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[o],s=t[o],e[o]=n>s?n:s}}function Ko(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],o=s-r,a=s+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Ir(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function Ae(i,t){return t[i+15]===Wd}function He(i,t){return t[i+6]}function tn(i,t){return t[i+14]}function Fe(i){return i+Ne}function Oe(i,t){const e=t[i+6];return i+e*Ne}function Du(i,t){return t[i+7]}function Nl(i,t,e,n,s){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,h=1/0,f=1/0,d=1/0,g=-1/0,_=-1/0,m=-1/0;const p=i.offset||0;for(let y=(t-p)*6,v=(t+e-p)*6;y<v;y+=6){const x=i[y+0],S=i[y+1],E=x-S,A=x+S;E<r&&(r=E),A>l&&(l=A),x<h&&(h=x),x>g&&(g=x);const w=i[y+2],b=i[y+3],M=w-b,R=w+b;M<o&&(o=M),R>c&&(c=R),w<f&&(f=w),w>_&&(_=w);const P=i[y+4],L=i[y+5],N=P-L,O=P+L;N<a&&(a=N),O>u&&(u=O),P<d&&(d=P),P>m&&(m=P)}n[0]=r,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=u,s[0]=h,s[1]=f,s[2]=d,s[3]=g,s[4]=_,s[5]=m}const ui=32,AM=(i,t)=>i.candidate-t.candidate,Di=new Array(ui).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Jo=new Float32Array(6);function RM(i,t,e,n,s,r){let o=-1,a=0;if(r===Gd)o=Gc(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===TM)o=Gc(i),o!==-1&&(a=CM(e,n,s,o));else if(r===wM){const l=Ir(i);let c=Ul*s;const u=e.offset||0,h=(n-u)*6,f=(n+s-u)*6;for(let d=0;d<3;d++){const g=t[d],p=(t[d+3]-g)/ui;if(s<ui/4){const y=[...Di];y.length=s;let v=0;for(let S=h;S<f;S+=6,v++){const E=y[v];E.candidate=e[S+2*d],E.count=0;const{bounds:A,leftCacheBounds:w,rightCacheBounds:b}=E;for(let M=0;M<3;M++)b[M]=1/0,b[M+3]=-1/0,w[M]=1/0,w[M+3]=-1/0,A[M]=1/0,A[M+3]=-1/0;Ko(S,e,A)}y.sort(AM);let x=s;for(let S=0;S<x;S++){const E=y[S];for(;S+1<x&&y[S+1].candidate===E.candidate;)y.splice(S+1,1),x--}for(let S=h;S<f;S+=6){const E=e[S+2*d];for(let A=0;A<x;A++){const w=y[A];E>=w.candidate?Ko(S,e,w.rightCacheBounds):(Ko(S,e,w.leftCacheBounds),w.count++)}}for(let S=0;S<x;S++){const E=y[S],A=E.count,w=s-E.count,b=E.leftCacheBounds,M=E.rightCacheBounds;let R=0;A!==0&&(R=Ir(b)/l);let P=0;w!==0&&(P=Ir(M)/l);const L=bf+Ul*(R*A+P*w);L<c&&(o=d,c=L,a=E.candidate)}}else{for(let x=0;x<ui;x++){const S=Di[x];S.count=0,S.candidate=g+p+x*p;const E=S.bounds;for(let A=0;A<3;A++)E[A]=1/0,E[A+3]=-1/0}for(let x=h;x<f;x+=6){let A=~~((e[x+2*d]-g)/p);A>=ui&&(A=ui-1);const w=Di[A];w.count++,Ko(x,e,w.bounds)}const y=Di[ui-1];Ef(y.bounds,y.rightCacheBounds);for(let x=ui-2;x>=0;x--){const S=Di[x],E=Di[x+1];Tf(S.bounds,E.rightCacheBounds,S.rightCacheBounds)}let v=0;for(let x=0;x<ui-1;x++){const S=Di[x],E=S.count,A=S.bounds,b=Di[x+1].rightCacheBounds;E!==0&&(v===0?Ef(A,Jo):Tf(A,Jo,Jo)),v+=E;let M=0,R=0;v!==0&&(M=Ir(Jo)/l);const P=s-v;P!==0&&(R=Ir(b)/l);const L=bf+Ul*(M*v+R*P);L<c&&(o=d,c=L,a=S.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function CM(i,t,e,n){let s=0;const r=i.offset;for(let o=t,a=t+e;o<a;o++)s+=i[(o-r)*6+n*2];return s/e}class Fl{constructor(){this.boundingData=new Float32Array(6)}}function PM(i,t,e,n,s,r){let o=n,a=n+s-1;const l=r.pos,c=r.axis*2,u=e.offset||0;for(;;){for(;o<=a&&e[(o-u)*6+c]<l;)o++;for(;o<=a&&e[(a-u)*6+c]>=l;)a--;if(o<a){for(let h=0;h<t;h++){let f=i[o*t+h];i[o*t+h]=i[a*t+h],i[a*t+h]=f}for(let h=0;h<6;h++){const f=o-u,d=a-u,g=e[f*6+h];e[f*6+h]=e[d*6+h],e[d*6+h]=g}o++,a--}else return o}}let qd,va,Wc,Yd;const DM=Math.pow(2,32);function Xc(i){return"count"in i?1:1+Xc(i.left)+Xc(i.right)}function IM(i,t,e){return qd=new Float32Array(e),va=new Uint32Array(e),Wc=new Uint16Array(e),Yd=new Uint8Array(e),qc(i,t)}function qc(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)qd[e+o]=r[o];if(s)return t.buffer?(Yd.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(va[e+6]=t.offset,Wc[n+14]=t.count,Wc[n+15]=Wd,i+Qe);{const{left:o,right:a,splitAxis:l}=t,c=i+Qe;let u=qc(c,o);const h=i/Qe,d=u/Qe-h;if(d>DM)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return va[e+6]=d,va[e+7]=l,qc(u,a)}}function LM(i,t,e,n,s,r){const{maxDepth:o,verbose:a,targetLeafSize:l,_strictLeafSize:c=1/0,strategy:u,onProgress:h}=s,f=i.primitiveBuffer,d=i.primitiveBufferStride,g=new Float32Array(6);let _=!1;const m=new Fl;return Nl(t,e,n,m.boundingData,g),y(m,e,n,g),m;function p(v){h&&h((v-r.offset)/r.count)}function y(v,x,S,E=null,A=0){!_&&A>=o&&(_=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));const w=S>c;if(S<=l&&!w||A>=o)return p(x+S),v.offset=x,v.count=S,v;const b=RM(v.boundingData,E,t,x,S,u);let M=b.axis===-1?-1:PM(f,d,t,x,S,b);if(b.axis===-1||M===x||M===x+S){if(!w)return p(x+S),v.offset=x,v.count=S,v;b.axis=Math.max(0,Gc(v.boundingData)),M=x+Math.max(1,Math.floor(S/2))}v.splitAxis=b.axis;const R=new Fl,P=x,L=M-x;v.left=R,Nl(t,P,L,R.boundingData,g),y(R,P,L,g,A+1);const N=new Fl,O=M,z=S-L;return v.right=N,Nl(t,O,z,N.boundingData,g),y(N,O,z,g,A+1),v}}function UM(i,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),s=n[0],r=n[n.length-1],o={offset:s.offset,count:r.offset+r.count-s.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(l=>{const c=LM(i,a,l.offset,l.count,t,o),u=Xc(c),h=new e(Qe*u);return IM(0,c,h),h})}class Iu{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class NM{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const ye=new NM;let Oi,er;const ks=[],Qo=new Iu(()=>new Ce);function FM(i,t,e,n,s,r){Oi=Qo.getPrimitive(),er=Qo.getPrimitive(),ks.push(Oi,er),ye.setBuffer(i._roots[t]);const o=Yc(0,i.geometry,e,n,s,r);ye.clearBuffer(),Qo.releasePrimitive(Oi),Qo.releasePrimitive(er),ks.pop(),ks.pop();const a=ks.length;return a>0&&(er=ks[a-1],Oi=ks[a-2]),o}function Yc(i,t,e,n,s=null,r=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=ye;let u=i*2;if(Ae(u,l)){const f=He(i,c),d=tn(u,l);return we(i,a,Oi),n(f,d,!1,o,r+i/Ne,Oi)}else{let M=function(P){const{uint16Array:L,uint32Array:N}=ye;let O=P*2;for(;!Ae(O,L);)P=Fe(P),O=P*2;return He(P,N)},R=function(P){const{uint16Array:L,uint32Array:N}=ye;let O=P*2;for(;!Ae(O,L);)P=Oe(P,N),O=P*2;return He(P,N)+tn(O,L)};const f=Fe(i),d=Oe(i,c);let g=f,_=d,m,p,y,v;if(s&&(y=Oi,v=er,we(g,a,y),we(_,a,v),m=s(y),p=s(v),p<m)){g=d,_=f;const P=m;m=p,p=P,y=v}y||(y=Oi,we(g,a,y));const x=Ae(g*2,l),S=e(y,x,m,o+1,r+g/Ne);let E;if(S===Sf){const P=M(g),N=R(g)-P;E=n(P,N,!0,o+1,r+g/Ne,y)}else E=S&&Yc(g,t,e,n,s,r,o+1);if(E)return!0;v=er,we(_,a,v);const A=Ae(_*2,l),w=e(v,A,p,o+1,r+_/Ne);let b;if(w===Sf){const P=M(_),N=R(_)-P;b=n(P,N,!0,o+1,r+_/Ne,v)}else b=w&&Yc(_,t,e,n,s,r,o+1);return!!b}}const $r=new ye.constructor,Ta=new ye.constructor,Ii=new Iu(()=>new Ce),Vs=new Ce,Hs=new Ce,Ol=new Ce,Bl=new Ce;let zl=!1;function OM(i,t,e,n){if(zl)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");zl=!0;const s=i._roots,r=t._roots;let o,a=0,l=0;const c=new $t().copy(e).invert();for(let u=0,h=s.length;u<h;u++){$r.setBuffer(s[u]),l=0;const f=Ii.getPrimitive();we(0,$r.float32Array,f),f.applyMatrix4(c);for(let d=0,g=r.length;d<g&&(Ta.setBuffer(r[d]),o=kn(0,0,e,c,n,a,l,0,0,f),Ta.clearBuffer(),l+=r[d].byteLength/Qe,!o);d++);if(Ii.releasePrimitive(f),$r.clearBuffer(),a+=s[u].byteLength/Qe,o)break}return zl=!1,o}function kn(i,t,e,n,s,r=0,o=0,a=0,l=0,c=null,u=!1){let h,f;u?(h=Ta,f=$r):(h=$r,f=Ta);const d=h.float32Array,g=h.uint32Array,_=h.uint16Array,m=f.float32Array,p=f.uint32Array,y=f.uint16Array,v=i*2,x=t*2,S=Ae(v,_),E=Ae(x,y);let A=!1;if(E&&S)u?A=s(He(t,p),tn(t*2,y),He(i,g),tn(i*2,_),l,o+t/Ne,a,r+i/Ne):A=s(He(i,g),tn(i*2,_),He(t,p),tn(t*2,y),a,r+i/Ne,l,o+t/Ne);else if(E){const w=Ii.getPrimitive();we(t,m,w),w.applyMatrix4(e);const b=Fe(i),M=Oe(i,g);we(b,d,Vs),we(M,d,Hs);const R=w.intersectsBox(Vs),P=w.intersectsBox(Hs);A=R&&kn(t,b,n,e,s,o,r,l,a+1,w,!u)||P&&kn(t,M,n,e,s,o,r,l,a+1,w,!u),Ii.releasePrimitive(w)}else{const w=Fe(t),b=Oe(t,p);we(w,m,Ol),we(b,m,Bl);const M=c.intersectsBox(Ol),R=c.intersectsBox(Bl);if(M&&R)A=kn(i,w,e,n,s,r,o,a,l+1,c,u)||kn(i,b,e,n,s,r,o,a,l+1,c,u);else if(M)if(S)A=kn(i,w,e,n,s,r,o,a,l+1,c,u);else{const P=Ii.getPrimitive();P.copy(Ol).applyMatrix4(e);const L=Fe(i),N=Oe(i,g);we(L,d,Vs),we(N,d,Hs);const O=P.intersectsBox(Vs),z=P.intersectsBox(Hs);A=O&&kn(w,L,n,e,s,o,r,l,a+1,P,!u)||z&&kn(w,N,n,e,s,o,r,l,a+1,P,!u),Ii.releasePrimitive(P)}else if(R)if(S)A=kn(i,b,e,n,s,r,o,a,l+1,c,u);else{const P=Ii.getPrimitive();P.copy(Bl).applyMatrix4(e);const L=Fe(i),N=Oe(i,g);we(L,d,Vs),we(N,d,Hs);const O=P.intersectsBox(Vs),z=P.intersectsBox(Hs);A=O&&kn(b,L,n,e,s,o,r,l,a+1,P,!u)||z&&kn(b,N,n,e,s,o,r,l,a+1,P,!u),Ii.releasePrimitive(P)}}return A}const kl=new class{constructor(){let i=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(r,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=i=r._roots[o],this.uint16Array=e=new Uint16Array(i),this.uint32Array=t=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=r=>{let o=r*2;for(;!Ae(o,e);)r=Fe(r),o=r*2;return He(r,t)},this.getRangeEnd=r=>{let o=r*2;for(;!Ae(o,e);)r=Oe(r,t),o=r*2;return He(r,t)+tn(o,e)};const s=(r,o,a)=>{const l=o*2,c=Ae(l,e);if(!r(a,c,o)&&!c){const h=Fe(o),f=Oe(o,t);s(r,h,a+1),s(r,f,a+1)}};this.traverseBuffer=r=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{s(r,0,0)}finally{n=!1}},this.traverse=r=>{this.traverseBuffer((o,a,l)=>{if(a){const c=l*2,u=t[l+6],h=e[c+14];return r(o,a,new Float32Array(i,l*4,6),u,h)}else{const c=Du(l,t);return r(o,a,new Float32Array(i,l*4,6),c)}})}}},wf=new Ce,Gs=new Float32Array(6);class BM{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Xd,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),UM(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,s){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0;for(let h=t,f=t+e;h<f;h++){this.writePrimitiveBounds(h,Gs,0);const[d,g,_,m,p,y]=Gs;d<r&&(r=d),m>l&&(l=m),g<o&&(o=g),p>c&&(c=p),_<a&&(a=_),y>u&&(u=y)}return n[s+0]=r,n[s+1]=o,n[s+2]=a,n[s+3]=l,n[s+4]=c,n[s+5]=u,n}computePrimitiveBounds(t,e,n){const s=n.offset||0;for(let r=t,o=t+e;r<o;r++){this.writePrimitiveBounds(r,Gs,0);const[a,l,c,u,h,f]=Gs,d=(a+u)/2,g=(l+h)/2,_=(c+f)/2,m=(u-a)/2,p=(h-l)/2,y=(f-c)/2,v=(r-s)*6;n[v+0]=d,n[v+1]=m+(Math.abs(d)+m)*xa,n[v+2]=g,n[v+3]=p+(Math.abs(g)+p)*xa,n[v+4]=_,n[v+5]=y+(Math.abs(_)+y)*xa}return n}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let n=0,s=e.length;n<s;n++)e[n]+=t;else{const n=this._roots;for(let s=0;s<n.length;s++){const r=n[s],o=new Uint32Array(r),a=new Uint16Array(r),l=r.byteLength/Qe;for(let c=0;c<l;c++){const u=Ne*c,h=2*u;Ae(h,a)&&(o[u+6]+=t)}}}}traverse(t,e=0){kl.setBVH(this,e),kl.traverse(t),kl.reset()}refit(){const t=this._roots;for(let e=0,n=t.length;e<n;e++){const s=t[e],r=new Uint32Array(s),o=new Uint16Array(s),a=new Float32Array(s),l=s.byteLength/Qe;for(let c=l-1;c>=0;c--){const u=c*Ne,h=u*2;if(Ae(h,o)){const d=He(u,r),g=tn(h,o);this.writePrimitiveRangeBounds(d,g,Gs,0),a.set(Gs,u)}else{const d=Fe(u),g=Oe(u,r);for(let _=0;_<3;_++){const m=a[d+_],p=a[d+_+3],y=a[g+_],v=a[g+_+3];a[u+_]=m<y?m:y,a[u+_+3]=p>v?p:v}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{we(0,new Float32Array(n),wf),t.union(wf)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:s,intersectsPrimitive:r,scratchPrimitive:o,iterate:a}=t;if(s&&r){const h=s;s=(f,d,g,_,m)=>h(f,d,g,_,m)?!0:a(f,d,this,r,g,_,o)}else s||(r?s=(h,f,d,g)=>a(h,f,this,r,d,g,o):s=(h,f,d)=>d);let l=!1,c=0;const u=this._roots;for(let h=0,f=u.length;h<f;h++){const d=u[h];if(l=FM(this,h,n,s,e,c),l)break;c+=d.byteLength/Qe}return l}bvhcast(t,e,n){let{intersectsRanges:s}=n;return OM(this,t,e,s)}}function zM(){return typeof SharedArrayBuffer<"u"}function Lu(i){return i.index?i.index.count:i.attributes.position.count}function Fa(i){return Lu(i)/3}function kM(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function VM(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=kM(e,n);i.setIndex(new $e(s,1));for(let r=0;r<e;r++)s[r]=r}}function HM(i,t,e){const n=Lu(i)/e,s=t||i.drawRange,r=s.start/e,o=(s.start+s.count)/e,a=Math.max(0,r),l=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(l)}}function GM(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Af(i,t,e){const n=HM(i,t,e),s=GM(i,e);if(!s.length)return[n];const r=[],o=n.offset,a=n.offset+n.count,l=Lu(i)/e,c=[];for(const f of s){const{offset:d,count:g}=f,_=d,m=isFinite(g)?g:l-d,p=d+m;_<a&&p>o&&(c.push({pos:Math.max(o,_),isStart:!0}),c.push({pos:Math.min(a,p),isStart:!1}))}c.sort((f,d)=>f.pos!==d.pos?f.pos-d.pos:f.type==="end"?-1:1);let u=0,h=null;for(const f of c){const d=f.pos;u!==0&&d!==h&&r.push({offset:h,count:d-h}),u+=f.isStart?1:-1,h=d}return r}function WM(i,t){const e=i[i.length-1],n=e.offset+e.count>2**16,s=i.reduce((c,u)=>c+u.count,0),r=n?4:2,o=t?new SharedArrayBuffer(s*r):new ArrayBuffer(s*r),a=n?new Uint32Array(o):new Uint16Array(o);let l=0;for(let c=0;c<i.length;c++){const{offset:u,count:h}=i[c];for(let f=0;f<h;f++)a[l+f]=u+f;l+=h}return a}class XM extends BM{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!zM())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Xd,...e},e[Pu]||this.init(e)}init(t){const{geometry:e,primitiveStride:n}=this;if(t.indirect){const s=Af(e,t.range,n),r=WM(s,t.useSharedArrayBuffer);this._indirectBuffer=r}else VM(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Ce))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Af(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class bi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){const l=t[r][e];n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],l=t.dot(a);n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}bi.prototype.setFromBox=(function(){const i=new D;return function(e,n){const s=n.min,r=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){i.x=s.x*l+r.x*(1-l),i.y=s.y*c+r.y*(1-c),i.z=s.z*u+r.z*(1-u);const h=e.dot(i);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}})();const qM=(function(){const i=new D,t=new D,e=new D;return function(s,r,o){const a=s.start,l=i,c=r.start,u=t;e.subVectors(a,c),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const h=e.dot(u),f=u.dot(l),d=u.dot(u),g=e.dot(l),m=l.dot(l)*d-f*f;let p,y;m!==0?p=(h*f-g*d)/m:p=0,y=(h+p*f)/d,o.x=p,o.y=y}})(),Uu=(function(){const i=new $,t=new D,e=new D;return function(s,r,o,a){qM(s,r,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){s.at(l,o),r.at(c,a);return}else if(l>=0&&l<=1){c<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;l<0?u=s.start:u=s.end;let h;c<0?h=r.start:h=r.end;const f=t,d=e;if(s.closestPointToPoint(h,!0,t),r.closestPointToPoint(u,!0,e),f.distanceToSquared(h)<=d.distanceToSquared(u)){o.copy(f),a.copy(h);return}else{o.copy(u),a.copy(d);return}}}})(),YM=(function(){const i=new D,t=new D,e=new wn,n=new Si;return function(r,o){const{radius:a,center:l}=r,{a:c,b:u,c:h}=o;if(n.start=c,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=c,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;const _=o.getPlane(e);if(Math.abs(_.distanceToPoint(l))<=a){const p=_.projectPoint(l,t);if(o.containsPoint(p))return!0}return!1}})(),jM=["x","y","z"],fi=1e-15,Rf=fi*fi;function Dn(i){return Math.abs(i)<fi}class qn extends Ye{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new D),this.satBounds=new Array(4).fill().map(()=>new bi),this.points=[this.a,this.b,this.c],this.plane=new wn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Si,this.needsUpdate=!0}intersectsSphere(t){return YM(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],l=o[0];this.getNormal(a),l.setFromPoints(a,s);const c=r[1],u=o[1];c.subVectors(t,e),u.setFromPoints(c,s);const h=r[2],f=o[2];h.subVectors(e,n),f.setFromPoints(h,s);const d=r[3],g=o[3];d.subVectors(n,t),g.setFromPoints(d,s);const _=c.length(),m=h.length(),p=d.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,_<fi?m<fi||p<fi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):m<fi?p<fi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):p<fi&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}qn.prototype.closestPointToSegment=(function(){const i=new D,t=new D,e=new Si;return function(s,r=null,o=null){const{start:a,end:l}=s,c=this.points;let u,h=1/0;for(let f=0;f<3;f++){const d=(f+1)%3;e.start.copy(c[f]),e.end.copy(c[d]),Uu(e,s,i,t),u=i.distanceToSquared(t),u<h&&(h=u,r&&r.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),u=a.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),u=l.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),o&&o.copy(l)),Math.sqrt(h)}})();qn.prototype.intersectsTriangle=(function(){const i=new qn,t=new bi,e=new bi,n=new D,s=new D,r=new D,o=new D,a=new Si,l=new Si,c=new D,u=new $,h=new $;function f(v,x,S,E){const A=n;!v.isDegenerateIntoPoint&&!v.isDegenerateIntoSegment?A.copy(v.plane.normal):A.copy(x.plane.normal);const w=v.satBounds,b=v.satAxes;for(let P=1;P<4;P++){const L=w[P],N=b[P];if(t.setFromPoints(N,x.points),L.isSeparated(t)||(o.copy(A).cross(N),t.setFromPoints(o,v.points),e.setFromPoints(o,x.points),t.isSeparated(e)))return!1}const M=x.satBounds,R=x.satAxes;for(let P=1;P<4;P++){const L=M[P],N=R[P];if(t.setFromPoints(N,v.points),L.isSeparated(t)||(o.crossVectors(A,N),t.setFromPoints(o,v.points),e.setFromPoints(o,x.points),t.isSeparated(e)))return!1}return S&&(E||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),S.start.set(0,0,0),S.end.set(0,0,0)),!0}function d(v,x,S,E,A,w,b,M,R,P,L){let N=b/(b-M);P.x=E+(A-E)*N,L.start.subVectors(x,v).multiplyScalar(N).add(v),N=b/(b-R),P.y=E+(w-E)*N,L.end.subVectors(S,v).multiplyScalar(N).add(v)}function g(v,x,S,E,A,w,b,M,R,P,L){if(A>0)d(v.c,v.a,v.b,E,x,S,R,b,M,P,L);else if(w>0)d(v.b,v.a,v.c,S,x,E,M,b,R,P,L);else if(M*R>0||b!=0)d(v.a,v.b,v.c,x,S,E,b,M,R,P,L);else if(M!=0)d(v.b,v.a,v.c,S,x,E,M,b,R,P,L);else if(R!=0)d(v.c,v.a,v.b,E,x,S,R,b,M,P,L);else return!0;return!1}function _(v,x,S,E){const A=x.degenerateSegment,w=v.plane.distanceToPoint(A.start),b=v.plane.distanceToPoint(A.end);return Dn(w)?Dn(b)?f(v,x,S,E):(S&&(S.start.copy(A.start),S.end.copy(A.start)),v.containsPoint(A.start)):Dn(b)?(S&&(S.start.copy(A.end),S.end.copy(A.end)),v.containsPoint(A.end)):v.plane.intersectLine(A,n)!=null?(S&&(S.start.copy(n),S.end.copy(n)),v.containsPoint(n)):!1}function m(v,x,S){const E=x.a;return Dn(v.plane.distanceToPoint(E))&&v.containsPoint(E)?(S&&(S.start.copy(E),S.end.copy(E)),!0):!1}function p(v,x,S){const E=v.degenerateSegment,A=x.a;return E.closestPointToPoint(A,!0,n),A.distanceToSquared(n)<Rf?(S&&(S.start.copy(A),S.end.copy(A)),!0):!1}function y(v,x,S,E){if(v.isDegenerateIntoSegment)if(x.isDegenerateIntoSegment){const A=v.degenerateSegment,w=x.degenerateSegment,b=s,M=r;A.delta(b),w.delta(M);const R=n.subVectors(w.start,A.start),P=b.x*M.y-b.y*M.x;if(Dn(P))return!1;const L=(R.x*M.y-R.y*M.x)/P,N=-(b.x*R.y-b.y*R.x)/P;if(L<0||L>1||N<0||N>1)return!1;const O=A.start.z+b.z*L,z=w.start.z+M.z*N;return Dn(O-z)?(S&&(S.start.copy(A.start).addScaledVector(b,L),S.end.copy(A.start).addScaledVector(b,L)),!0):!1}else return x.isDegenerateIntoPoint?p(v,x,S):_(x,v,S,E);else{if(v.isDegenerateIntoPoint)return x.isDegenerateIntoPoint?x.a.distanceToSquared(v.a)<Rf?(S&&(S.start.copy(v.a),S.end.copy(v.a)),!0):!1:x.isDegenerateIntoSegment?p(x,v,S):m(x,v,S);if(x.isDegenerateIntoPoint)return m(v,x,S);if(x.isDegenerateIntoSegment)return _(v,x,S,E)}}return function(x,S=null,E=!1){this.needsUpdate&&this.update(),x.isExtendedTriangle?x.needsUpdate&&x.update():(i.copy(x),i.update(),x=i);const A=y(this,x,S,E);if(A!==void 0)return A;const w=this.plane,b=x.plane;let M=b.distanceToPoint(this.a),R=b.distanceToPoint(this.b),P=b.distanceToPoint(this.c);Dn(M)&&(M=0),Dn(R)&&(R=0),Dn(P)&&(P=0);const L=M*R,N=M*P;if(L>0&&N>0)return!1;let O=w.distanceToPoint(x.a),z=w.distanceToPoint(x.b),J=w.distanceToPoint(x.c);Dn(O)&&(O=0),Dn(z)&&(z=0),Dn(J)&&(J=0);const G=O*z,nt=O*J;if(G>0&&nt>0)return!1;s.copy(w.normal),r.copy(b.normal);const ut=s.cross(r);let vt=0,Pt=Math.abs(ut.x);const Bt=Math.abs(ut.y);Bt>Pt&&(Pt=Bt,vt=1),Math.abs(ut.z)>Pt&&(vt=2);const jt=jM[vt],j=this.a[jt],tt=this.b[jt],Mt=this.c[jt],wt=x.a[jt],Tt=x.b[jt],Kt=x.c[jt];if(g(this,j,tt,Mt,L,N,M,R,P,u,a))return f(this,x,S,E);if(g(x,wt,Tt,Kt,G,nt,O,z,J,h,l))return f(this,x,S,E);if(u.y<u.x){const ie=u.y;u.y=u.x,u.x=ie,c.copy(a.start),a.start.copy(a.end),a.end.copy(c)}if(h.y<h.x){const ie=h.y;h.y=h.x,h.x=ie,c.copy(l.start),l.start.copy(l.end),l.end.copy(c)}return u.y<h.x||h.y<u.x?!1:(S&&(h.x>u.x?S.start.copy(l.start):S.start.copy(a.start),h.y<u.y?S.end.copy(l.end):S.end.copy(a.end)),!0)}})();qn.prototype.distanceToPoint=(function(){const i=new D;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();qn.prototype.distanceToTriangle=(function(){const i=new D,t=new D,e=["a","b","c"],n=new Si,s=new Si;return function(o,a=null,l=null){const c=a||l?n:null;if(this.intersectsTriangle(o,c,!0))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let u=1/0;for(let h=0;h<3;h++){let f;const d=e[h],g=o[d];this.closestPointToPoint(g,i),f=g.distanceToSquared(i),f<u&&(u=f,a&&a.copy(i),l&&l.copy(g));const _=this[d];o.closestPointToPoint(_,i),f=_.distanceToSquared(i),f<u&&(u=f,a&&a.copy(_),l&&l.copy(i))}for(let h=0;h<3;h++){const f=e[h],d=e[(h+1)%3];n.set(this[f],this[d]);for(let g=0;g<3;g++){const _=e[g],m=e[(g+1)%3];s.set(o[_],o[m]),Uu(n,s,i,t);const p=i.distanceToSquared(t);p<u&&(u=p,a&&a.copy(i),l&&l.copy(t))}}return Math.sqrt(u)}})();class pn{constructor(t,e,n){this.isOrientedBox=!0,this.min=new D,this.max=new D,this.matrix=new $t,this.invMatrix=new $t,this.points=new Array(8).fill().map(()=>new D),this.satAxes=new Array(3).fill().map(()=>new D),this.satBounds=new Array(3).fill().map(()=>new bi),this.alignedSatBounds=new Array(3).fill().map(()=>new bi),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}pn.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const f=1*c|2*u|4*h,d=s[f];d.x=c?n.x:e.x,d.y=u?n.y:e.y,d.z=h?n.z:e.z,d.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=s[0];for(let c=0;c<3;c++){const u=o[c],h=r[c],f=1<<c,d=s[f];u.subVectors(a,d),h.setFromPoints(u,s)}const l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();pn.prototype.intersectsBox=(function(){const i=new bi;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const c=o[l],u=r[l];if(i.setFromBox(c,e),u.isSeparated(i))return!1}return!0}})();pn.prototype.intersectsTriangle=(function(){const i=new qn,t=new Array(3),e=new bi,n=new bi,s=new D;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let f=0;f<3;f++){const d=a[f],g=l[f];if(e.setFromPoints(g,t),d.isSeparated(e))return!1}const c=o.satBounds,u=o.satAxes,h=this.points;for(let f=0;f<3;f++){const d=c[f],g=u[f];if(e.setFromPoints(g,h),d.isSeparated(e))return!1}for(let f=0;f<3;f++){const d=l[f];for(let g=0;g<4;g++){const _=u[g];if(s.crossVectors(d,_),e.setFromPoints(s,t),n.setFromPoints(s,h),e.isSeparated(n))return!1}}return!0}})();pn.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();pn.prototype.distanceToPoint=(function(){const i=new D;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();pn.prototype.distanceToBox=(function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new Si),e=new Array(12).fill().map(()=>new Si),n=new D,s=new D;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),l&&l.copy(n),c&&c.copy(s)),0;const u=a*a,h=o.min,f=o.max,d=this.points;let g=1/0;for(let m=0;m<8;m++){const p=d[m];s.copy(p).clamp(h,f);const y=p.distanceToSquared(s);if(y<g&&(g=y,l&&l.copy(p),c&&c.copy(s),y<u))return Math.sqrt(y)}let _=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){const v=(m+1)%3,x=(m+2)%3,S=p<<v|y<<x,E=1<<m|p<<v|y<<x,A=d[S],w=d[E];t[_].set(A,w);const M=i[m],R=i[v],P=i[x],L=e[_],N=L.start,O=L.end;N[M]=h[M],N[R]=p?h[R]:f[R],N[P]=y?h[P]:f[R],O[M]=f[M],O[R]=p?h[R]:f[R],O[P]=y?h[P]:f[R],_++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){s.x=m?f.x:h.x,s.y=p?f.y:h.y,s.z=y?f.z:h.z,this.closestPointToPoint(s,n);const v=s.distanceToSquared(n);if(v<g&&(g=v,l&&l.copy(n),c&&c.copy(s),v<u))return Math.sqrt(v)}for(let m=0;m<12;m++){const p=t[m];for(let y=0;y<12;y++){const v=e[y];Uu(p,v,n,s);const x=n.distanceToSquared(s);if(x<g&&(g=x,l&&l.copy(n),c&&c.copy(s),x<u))return Math.sqrt(x)}}return Math.sqrt(g)}})();class $M extends Iu{constructor(){super(()=>new qn)}}const Un=new $M,Lr=new D,Vl=new D;function ZM(i,t,e={},n=0,s=1/0){const r=n*n,o=s*s;let a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:u=>(Lr.copy(t).clamp(u.min,u.max),Lr.distanceToSquared(t)),intersectsBounds:(u,h,f)=>f<a&&f<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(t,Lr);const f=t.distanceToSquared(Lr);return f<a&&(Vl.copy(Lr),a=f,l=h),f<r}}),a===1/0)return null;const c=Math.sqrt(a);return e.point?e.point.copy(Vl):e.point=Vl.clone(),e.distance=c,e.faceIndex=l,e}const ta=parseInt(ro)>=169,KM=parseInt(ro)<=161,ns=new D,is=new D,ss=new D,ea=new $,na=new $,ia=new $,Cf=new D,Pf=new D,Df=new D,Ur=new D;function JM(i,t,e,n,s,r,o,a){let l;if(r===un?l=i.intersectTriangle(n,e,t,!0,s):l=i.intersectTriangle(t,e,n,r!==on,s),l===null)return null;const c=i.origin.distanceTo(s);return c<o||c>a?null:{distance:c,point:s.clone()}}function If(i,t,e,n,s,r,o,a,l,c,u){ns.fromBufferAttribute(t,r),is.fromBufferAttribute(t,o),ss.fromBufferAttribute(t,a);const h=JM(i,ns,is,ss,Ur,l,c,u);if(h){if(n){ea.fromBufferAttribute(n,r),na.fromBufferAttribute(n,o),ia.fromBufferAttribute(n,a),h.uv=new $;const d=Ye.getInterpolation(Ur,ns,is,ss,ea,na,ia,h.uv);ta||(h.uv=d)}if(s){ea.fromBufferAttribute(s,r),na.fromBufferAttribute(s,o),ia.fromBufferAttribute(s,a),h.uv1=new $;const d=Ye.getInterpolation(Ur,ns,is,ss,ea,na,ia,h.uv1);ta||(h.uv1=d),KM&&(h.uv2=h.uv1)}if(e){Cf.fromBufferAttribute(e,r),Pf.fromBufferAttribute(e,o),Df.fromBufferAttribute(e,a),h.normal=new D;const d=Ye.getInterpolation(Ur,ns,is,ss,Cf,Pf,Df,h.normal);h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1),ta||(h.normal=d)}const f={a:r,b:o,c:a,normal:new D,materialIndex:0};if(Ye.getNormal(ns,is,ss,f.normal),h.face=f,h.faceIndex=r,ta){const d=new D;Ye.getBarycoord(Ur,ns,is,ss,d),h.barycoord=d}}return h}function Lf(i){return i&&i.isMaterial?i.side:i}function Oa(i,t,e,n,s,r,o){const a=n*3;let l=a+0,c=a+1,u=a+2;const{index:h,groups:f}=i;i.index&&(l=h.getX(l),c=h.getX(c),u=h.getX(u));const{position:d,normal:g,uv:_,uv1:m}=i.attributes;if(Array.isArray(t)){const p=n*3;for(let y=0,v=f.length;y<v;y++){const{start:x,count:S,materialIndex:E}=f[y];if(p>=x&&p<x+S){const A=Lf(t[E]),w=If(e,d,g,_,m,l,c,u,A,r,o);if(w)if(w.faceIndex=n,w.face.materialIndex=E,s)s.push(w);else return w}}}else{const p=Lf(t),y=If(e,d,g,_,m,l,c,u,p,r,o);if(y)if(y.faceIndex=n,y.face.materialIndex=0,s)s.push(y);else return y}return null}function Le(i,t,e,n){const s=i.a,r=i.b,o=i.c;let a=t,l=t+1,c=t+2;e&&(a=e.getX(a),l=e.getX(l),c=e.getX(c)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function QM(i,t,e,n,s,r,o,a){const{geometry:l,_indirectBuffer:c}=i;for(let u=n,h=n+s;u<h;u++)Oa(l,t,e,u,r,o,a)}function tS(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:l}=i;let c=1/0,u=null;for(let h=n,f=n+s;h<f;h++){let d;d=Oa(a,t,e,h,null,r,o),d&&d.distance<c&&(u=d,c=d.distance)}return u}function eS(i,t,e,n,s,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let u=i,h=t+i;u<h;u++){let f;if(f=u,Le(o,f*3,l,c),o.needsUpdate=!0,n(o,f,s,r))return!0}return!1}function nS(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,l,c=0;const u=i._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),h(0,c),c+=r.byteLength;function h(f,d,g=!1){const _=f*2;if(Ae(_,a)){const m=He(f,o),p=tn(_,a);let y=1/0,v=1/0,x=1/0,S=-1/0,E=-1/0,A=-1/0;for(let w=3*m,b=3*(m+p);w<b;w++){let M=n[w];const R=s.getX(M),P=s.getY(M),L=s.getZ(M);R<y&&(y=R),R>S&&(S=R),P<v&&(v=P),P>E&&(E=P),L<x&&(x=L),L>A&&(A=L)}return l[f+0]!==y||l[f+1]!==v||l[f+2]!==x||l[f+3]!==S||l[f+4]!==E||l[f+5]!==A?(l[f+0]=y,l[f+1]=v,l[f+2]=x,l[f+3]=S,l[f+4]=E,l[f+5]=A,!0):!1}else{const m=Fe(f),p=Oe(f,o);let y=g,v=!1,x=!1;if(t){if(!y){const M=m/Ne+d/Qe,R=p/Ne+d/Qe;v=t.has(M),x=t.has(R),y=!v&&!x}}else v=!0,x=!0;const S=y||v,E=y||x;let A=!1;S&&(A=h(m,d,y));let w=!1;E&&(w=h(p,d,y));const b=A||w;if(b)for(let M=0;M<3;M++){const R=m+M,P=p+M,L=l[R],N=l[R+3],O=l[P],z=l[P+3];l[f+M]=L<O?L:O,l[f+M+3]=N>z?N:z}return b}}}function Vi(i,t,e,n,s){let r,o,a,l,c,u;const h=1/e.direction.x,f=1/e.direction.y,d=1/e.direction.z,g=e.origin.x,_=e.origin.y,m=e.origin.z;let p=t[i],y=t[i+3],v=t[i+1],x=t[i+3+1],S=t[i+2],E=t[i+3+2];return h>=0?(r=(p-g)*h,o=(y-g)*h):(r=(y-g)*h,o=(p-g)*h),f>=0?(a=(v-_)*f,l=(x-_)*f):(a=(x-_)*f,l=(v-_)*f),r>l||a>o||((a>r||isNaN(r))&&(r=a),(l<o||isNaN(o))&&(o=l),d>=0?(c=(S-m)*d,u=(E-m)*d):(c=(E-m)*d,u=(S-m)*d),r>u||c>o)?!1:((c>r||r!==r)&&(r=c),(u<o||o!==o)&&(o=u),r<=s&&o>=n)}function iS(i,t,e,n,s,r,o,a){const{geometry:l,_indirectBuffer:c}=i;for(let u=n,h=n+s;u<h;u++){let f=c?c[u]:u;Oa(l,t,e,f,r,o,a)}}function sS(i,t,e,n,s,r,o){const{geometry:a,_indirectBuffer:l}=i;let c=1/0,u=null;for(let h=n,f=n+s;h<f;h++){let d;d=Oa(a,t,e,l?l[h]:h,null,r,o),d&&d.distance<c&&(u=d,c=d.distance)}return u}function rS(i,t,e,n,s,r,o){const{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let u=i,h=t+i;u<h;u++){let f;if(f=e.resolveTriangleIndex(u),Le(o,f*3,l,c),o.needsUpdate=!0,n(o,f,s,r))return!0}return!1}function oS(i,t,e,n,s,r,o){ye.setBuffer(i._roots[t]),jc(0,i,e,n,s,r,o),ye.clearBuffer()}function jc(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=ye,u=i*2;if(Ae(u,l)){const f=He(i,c),d=tn(u,l);QM(t,e,n,f,d,s,r,o)}else{const f=Fe(i);Vi(f,a,n,r,o)&&jc(f,t,e,n,s,r,o);const d=Oe(i,c);Vi(d,a,n,r,o)&&jc(d,t,e,n,s,r,o)}}const aS=["x","y","z"];function lS(i,t,e,n,s,r){ye.setBuffer(i._roots[t]);const o=$c(0,i,e,n,s,r);return ye.clearBuffer(),o}function $c(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:l}=ye;let c=i*2;if(Ae(c,a)){const h=He(i,l),f=tn(c,a);return tS(t,e,n,h,f,s,r)}else{const h=Du(i,l),f=aS[h],g=n.direction[f]>=0;let _,m;g?(_=Fe(i),m=Oe(i,l)):(_=Oe(i,l),m=Fe(i));const y=Vi(_,o,n,s,r)?$c(_,t,e,n,s,r):null;if(y){const S=y.point[f];if(g?S<=o[m+h]:S>=o[m+h+3])return y}const x=Vi(m,o,n,s,r)?$c(m,t,e,n,s,r):null;return y&&x?y.distance<=x.distance?y:x:y||x||null}}const sa=new Ce,Ws=new qn,Xs=new qn,Nr=new $t,Uf=new pn,ra=new pn;function cS(i,t,e,n){ye.setBuffer(i._roots[t]);const s=Zc(0,i,e,n);return ye.clearBuffer(),s}function Zc(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=ye;let l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Uf.set(e.boundingBox.min,e.boundingBox.max,n),s=Uf),Ae(l,o)){const u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,g=e.attributes.position,_=He(i,a),m=tn(l,o);if(Nr.copy(n).invert(),e.boundsTree)return we(i,r,ra),ra.matrix.copy(Nr),ra.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>ra.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let v=_*3,x=(m+_)*3;v<x;v+=3)if(Le(Xs,v,h,f),Xs.needsUpdate=!0,y.intersectsTriangle(Xs))return!0;return!1}});{const p=Fa(e);for(let y=_*3,v=(m+_)*3;y<v;y+=3){Le(Ws,y,h,f),Ws.a.applyMatrix4(Nr),Ws.b.applyMatrix4(Nr),Ws.c.applyMatrix4(Nr),Ws.needsUpdate=!0;for(let x=0,S=p*3;x<S;x+=3)if(Le(Xs,x,d,g),Xs.needsUpdate=!0,Ws.intersectsTriangle(Xs))return!0}}}else{const u=Fe(i),h=Oe(i,a);return we(u,r,sa),!!(s.intersectsBox(sa)&&Zc(u,t,e,n,s)||(we(h,r,sa),s.intersectsBox(sa)&&Zc(h,t,e,n,s)))}}const oa=new $t,Hl=new pn,Fr=new pn,uS=new D,hS=new D,fS=new D,dS=new D;function pS(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Hl.set(t.boundingBox.min,t.boundingBox.max,e),Hl.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,c=a.index,u=t.attributes.position,h=t.index,f=Un.getPrimitive(),d=Un.getPrimitive();let g=uS,_=hS,m=null,p=null;s&&(m=fS,p=dS);let y=1/0,v=null,x=null;return oa.copy(e).invert(),Fr.matrix.copy(oa),i.shapecast({boundsTraverseOrder:S=>Hl.distanceToBox(S),intersectsBounds:(S,E,A)=>A<y&&A<o?(E&&(Fr.min.copy(S.min),Fr.max.copy(S.max),Fr.needsUpdate=!0),!0):!1,intersectsRange:(S,E)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:w=>Fr.distanceToBox(w),intersectsBounds:(w,b,M)=>M<y&&M<o,intersectsRange:(w,b)=>{for(let M=w,R=w+b;M<R;M++){Le(d,3*M,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let P=S,L=S+E;P<L;P++){Le(f,3*P,c,l),f.needsUpdate=!0;const N=f.distanceToTriangle(d,g,m);if(N<y&&(_.copy(g),p&&p.copy(m),y=N,v=P,x=M),N<r)return!0}}}});{const A=Fa(t);for(let w=0,b=A;w<b;w++){Le(d,3*w,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let M=S,R=S+E;M<R;M++){Le(f,3*M,c,l),f.needsUpdate=!0;const P=f.distanceToTriangle(d,g,m);if(P<y&&(_.copy(g),p&&p.copy(m),y=P,v=M,x=w),P<r)return!0}}}}}),Un.releasePrimitive(f),Un.releasePrimitive(d),y===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=y,n.faceIndex=v,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(oa),_.applyMatrix4(oa),s.distance=_.sub(s.point).length(),s.faceIndex=x),n)}function mS(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,o,a,l,c=0;const u=i._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),h(0,c),c+=r.byteLength;function h(f,d,g=!1){const _=f*2;if(Ae(_,a)){const m=He(f,o),p=tn(_,a);let y=1/0,v=1/0,x=1/0,S=-1/0,E=-1/0,A=-1/0;for(let w=m,b=m+p;w<b;w++){const M=3*i.resolveTriangleIndex(w);for(let R=0;R<3;R++){let P=M+R;P=n?n[P]:P;const L=s.getX(P),N=s.getY(P),O=s.getZ(P);L<y&&(y=L),L>S&&(S=L),N<v&&(v=N),N>E&&(E=N),O<x&&(x=O),O>A&&(A=O)}}return l[f+0]!==y||l[f+1]!==v||l[f+2]!==x||l[f+3]!==S||l[f+4]!==E||l[f+5]!==A?(l[f+0]=y,l[f+1]=v,l[f+2]=x,l[f+3]=S,l[f+4]=E,l[f+5]=A,!0):!1}else{const m=Fe(f),p=Oe(f,o);let y=g,v=!1,x=!1;if(t){if(!y){const M=m/Ne+d/Qe,R=p/Ne+d/Qe;v=t.has(M),x=t.has(R),y=!v&&!x}}else v=!0,x=!0;const S=y||v,E=y||x;let A=!1;S&&(A=h(m,d,y));let w=!1;E&&(w=h(p,d,y));const b=A||w;if(b)for(let M=0;M<3;M++){const R=m+M,P=p+M,L=l[R],N=l[R+3],O=l[P],z=l[P+3];l[f+M]=L<O?L:O,l[f+M+3]=N>z?N:z}return b}}}function gS(i,t,e,n,s,r,o){ye.setBuffer(i._roots[t]),Kc(0,i,e,n,s,r,o),ye.clearBuffer()}function Kc(i,t,e,n,s,r,o){const{float32Array:a,uint16Array:l,uint32Array:c}=ye,u=i*2;if(Ae(u,l)){const f=He(i,c),d=tn(u,l);iS(t,e,n,f,d,s,r,o)}else{const f=Fe(i);Vi(f,a,n,r,o)&&Kc(f,t,e,n,s,r,o);const d=Oe(i,c);Vi(d,a,n,r,o)&&Kc(d,t,e,n,s,r,o)}}const _S=["x","y","z"];function xS(i,t,e,n,s,r){ye.setBuffer(i._roots[t]);const o=Jc(0,i,e,n,s,r);return ye.clearBuffer(),o}function Jc(i,t,e,n,s,r){const{float32Array:o,uint16Array:a,uint32Array:l}=ye;let c=i*2;if(Ae(c,a)){const h=He(i,l),f=tn(c,a);return sS(t,e,n,h,f,s,r)}else{const h=Du(i,l),f=_S[h],g=n.direction[f]>=0;let _,m;g?(_=Fe(i),m=Oe(i,l)):(_=Oe(i,l),m=Fe(i));const y=Vi(_,o,n,s,r)?Jc(_,t,e,n,s,r):null;if(y){const S=y.point[f];if(g?S<=o[m+h]:S>=o[m+h+3])return y}const x=Vi(m,o,n,s,r)?Jc(m,t,e,n,s,r):null;return y&&x?y.distance<=x.distance?y:x:y||x||null}}const aa=new Ce,qs=new qn,Ys=new qn,Or=new $t,Nf=new pn,la=new pn;function vS(i,t,e,n){ye.setBuffer(i._roots[t]);const s=Qc(0,i,e,n);return ye.clearBuffer(),s}function Qc(i,t,e,n,s=null){const{float32Array:r,uint16Array:o,uint32Array:a}=ye;let l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Nf.set(e.boundingBox.min,e.boundingBox.max,n),s=Nf),Ae(l,o)){const u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,g=e.attributes.position,_=He(i,a),m=tn(l,o);if(Or.copy(n).invert(),e.boundsTree)return we(i,r,la),la.matrix.copy(Or),la.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>la.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let v=_,x=m+_;v<x;v++)if(Le(Ys,3*t.resolveTriangleIndex(v),h,f),Ys.needsUpdate=!0,y.intersectsTriangle(Ys))return!0;return!1}});{const p=Fa(e);for(let y=_,v=m+_;y<v;y++){const x=t.resolveTriangleIndex(y);Le(qs,3*x,h,f),qs.a.applyMatrix4(Or),qs.b.applyMatrix4(Or),qs.c.applyMatrix4(Or),qs.needsUpdate=!0;for(let S=0,E=p*3;S<E;S+=3)if(Le(Ys,S,d,g),Ys.needsUpdate=!0,qs.intersectsTriangle(Ys))return!0}}}else{const u=Fe(i),h=Oe(i,a);return we(u,r,aa),!!(s.intersectsBox(aa)&&Qc(u,t,e,n,s)||(we(h,r,aa),s.intersectsBox(aa)&&Qc(h,t,e,n,s)))}}const ca=new $t,Gl=new pn,Br=new pn,yS=new D,MS=new D,SS=new D,bS=new D;function ES(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Gl.set(t.boundingBox.min,t.boundingBox.max,e),Gl.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,c=a.index,u=t.attributes.position,h=t.index,f=Un.getPrimitive(),d=Un.getPrimitive();let g=yS,_=MS,m=null,p=null;s&&(m=SS,p=bS);let y=1/0,v=null,x=null;return ca.copy(e).invert(),Br.matrix.copy(ca),i.shapecast({boundsTraverseOrder:S=>Gl.distanceToBox(S),intersectsBounds:(S,E,A)=>A<y&&A<o?(E&&(Br.min.copy(S.min),Br.max.copy(S.max),Br.needsUpdate=!0),!0):!1,intersectsRange:(S,E)=>{if(t.boundsTree){const A=t.boundsTree;return A.shapecast({boundsTraverseOrder:w=>Br.distanceToBox(w),intersectsBounds:(w,b,M)=>M<y&&M<o,intersectsRange:(w,b)=>{for(let M=w,R=w+b;M<R;M++){const P=A.resolveTriangleIndex(M);Le(d,3*P,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let L=S,N=S+E;L<N;L++){const O=i.resolveTriangleIndex(L);Le(f,3*O,c,l),f.needsUpdate=!0;const z=f.distanceToTriangle(d,g,m);if(z<y&&(_.copy(g),p&&p.copy(m),y=z,v=L,x=M),z<r)return!0}}}})}else{const A=Fa(t);for(let w=0,b=A;w<b;w++){Le(d,3*w,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let M=S,R=S+E;M<R;M++){const P=i.resolveTriangleIndex(M);Le(f,3*P,c,l),f.needsUpdate=!0;const L=f.distanceToTriangle(d,g,m);if(L<y&&(_.copy(g),p&&p.copy(m),y=L,v=M,x=w),L<r)return!0}}}}}),Un.releasePrimitive(f),Un.releasePrimitive(d),y===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=y,n.faceIndex=v,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(ca),_.applyMatrix4(ca),s.distance=_.sub(s.point).length(),s.faceIndex=x),n)}function Ff(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}const ua=new pn,ha=new gr,Of=new D,Bf=new $t,zf=new D,Wl=["getX","getY","getZ"];class wa extends XM{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=s.map(l=>l.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=r?r.slice():null):(a.roots=s,a.index=o?o.array:null,a.indirectBuffer=r),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(r));const a=new wa(e,{...n,[Pu]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){const c=e.getIndex();if(c===null){const u=new $e(t.index,1,!1);e.setIndex(u)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return a;function l(c){for(let u=0;u<c.length;u++){const h=c[u],f=new Uint32Array(h),d=new Uint16Array(h);for(let g=0,_=h.byteLength/Qe;g<_;g++){const m=Ne*g,p=2*m;Ae(p,d)||(f[m+6]=f[m+6]/Ne-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){const s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,c=(r?r[t]:t)*3;let u=c+0,h=c+1,f=c+2;a&&(u=a[u],h=a[h],f=a[f]);for(let d=0;d<3;d++){const g=o[Wl[d]](u),_=o[Wl[d]](h),m=o[Wl[d]](f);let p=g;_<p&&(p=_),m<p&&(p=m);let y=g;_>y&&(y=_),m>y&&(y=m),e[n+d]=p,e[n+d+3]=y}return e}computePrimitiveBounds(t,e,n){const s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,l=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const c=o.array,u=o.offset||0;let h=3;o.isInterleavedBufferAttribute&&(h=o.data.stride);const f=["getX","getY","getZ"],d=n.offset;for(let g=t,_=t+e;g<_;g++){const p=(r?r[g]:g)*3,y=(g-d)*6;let v=p+0,x=p+1,S=p+2;a&&(v=a[v],x=a[x],S=a[S]),l||(v=v*h+u,x=x*h+u,S=S*h+u);for(let E=0;E<3;E++){let A,w,b;l?(A=o[f[E]](v),w=o[f[E]](x),b=o[f[E]](S)):(A=c[v+E],w=c[x+E],b=c[S+E]);let M=A;w<M&&(M=w),b<M&&(M=b);let R=A;w>R&&(R=w),b>R&&(R=b);const P=(R-M)/2,L=E*2;n[y+L+0]=M+P,n[y+L+1]=P+(Math.abs(M)+P)*xa}}return n}raycastObject3D(t,e,n=[]){const{material:s}=t;if(s===void 0)return;Bf.copy(t.matrixWorld).invert(),ha.copy(e.ray).applyMatrix4(Bf),zf.setFromMatrixScale(t.matrixWorld),Of.copy(ha.direction).multiply(zf);const r=Of.length(),o=e.near/r,a=e.far/r;if(e.firstHitOnly===!0){let l=this.raycastFirst(ha,s,o,a);l=Ff(l,t,e),l&&n.push(l)}else{const l=this.raycast(ha,s,o,a);for(let c=0,u=l.length;c<u;c++){const h=Ff(l[c],t,e);h&&n.push(h)}}return n}refit(t=null){return(this.indirect?mS:nS)(this,t)}raycast(t,e=Jn,n=0,s=1/0){const r=this._roots,o=[],a=this.indirect?gS:oS;for(let l=0,c=r.length;l<c;l++)a(this,l,e,t,o,n,s);return o}raycastFirst(t,e=Jn,n=0,s=1/0){const r=this._roots;let o=null;const a=this.indirect?xS:lS;for(let l=0,c=r.length;l<c;l++){const u=a(this,l,e,t,n,s);u!=null&&(o==null||u.distance<o.distance)&&(o=u)}return o}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?vS:cS;for(let o=0,a=s.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){const e=Un.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?rS:eS});return Un.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const o=Un.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?g=>{const _=this.resolveTriangleIndex(g);Le(o,_*3,a,l)}:g=>{Le(o,g*3,a,l)},u=Un.getPrimitive(),h=t.geometry.index,f=t.geometry.attributes.position,d=t.indirect?g=>{const _=t.resolveTriangleIndex(g);Le(u,_*3,h,f)}:g=>{Le(u,g*3,h,f)};if(r){if(!(t instanceof wa))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const g=(_,m,p,y,v,x,S,E)=>{for(let A=p,w=p+y;A<w;A++){d(A),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let b=_,M=_+m;b<M;b++)if(c(b),o.needsUpdate=!0,r(o,u,b,A,v,x,S,E))return!0}return!1};if(s){const _=s;s=function(m,p,y,v,x,S,E,A){return _(m,p,y,v,x,S,E,A)?!0:g(m,p,y,v,x,S,E,A)}}else s=g}return super.bvhcast(t,e,{intersectsRanges:s})}intersectsBox(t,e){return ua.set(t.min,t.max,e),ua.needsUpdate=!0,this.shapecast({intersectsBounds:n=>ua.intersectsBox(n),intersectsTriangle:n=>ua.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,o=1/0){return(this.indirect?ES:pS)(this,t,e,n,s,r,o)}closestPointToPoint(t,e={},n=0,s=1/0){return ZM(this,t,e,n,s)}}const Js={Mesh:Ie.prototype.raycast,Line:_r.prototype.raycast,LineSegments:vd.prototype.raycast,LineLoop:yd.prototype.raycast,Points:Md.prototype.raycast,BatchedMesh:ig.prototype.raycast},Xe=new Ie,fa=[];function TS(i,t){if(this.isBatchedMesh)wS.call(this,i,t);else{const{geometry:e}=this;if(e.boundsTree)e.boundsTree.raycastObject3D(this,i,t);else{let n;if(this instanceof Ie)n=Js.Mesh;else if(this instanceof vd)n=Js.LineSegments;else if(this instanceof yd)n=Js.LineLoop;else if(this instanceof _r)n=Js.Line;else if(this instanceof Md)n=Js.Points;else throw new Error("BVH: Fallback raycast function not found.");n.call(this,i,t)}}}function wS(i,t){if(this.boundsTrees){const e=this.boundsTrees,n=this._drawInfo||this._instanceInfo,s=this._drawRanges||this._geometryInfo,r=this.matrixWorld;Xe.material=this.material,Xe.geometry=this.geometry;const o=Xe.geometry.boundsTree,a=Xe.geometry.drawRange;Xe.geometry.boundingSphere===null&&(Xe.geometry.boundingSphere=new Nn);for(let l=0,c=n.length;l<c;l++){if(!this.getVisibleAt(l))continue;const u=n[l].geometryIndex;if(Xe.geometry.boundsTree=e[u],this.getMatrixAt(l,Xe.matrixWorld).premultiply(r),!Xe.geometry.boundsTree){this.getBoundingBoxAt(u,Xe.geometry.boundingBox),this.getBoundingSphereAt(u,Xe.geometry.boundingSphere);const h=s[u];Xe.geometry.setDrawRange(h.start,h.count)}Xe.raycast(i,fa);for(let h=0,f=fa.length;h<f;h++){const d=fa[h];d.object=this,d.batchId=l,t.push(d)}fa.length=0}Xe.geometry.boundsTree=o,Xe.geometry.drawRange=a,Xe.material=null,Xe.geometry=null}else Js.BatchedMesh.call(this,i,t)}function AS(i={}){const{type:t=wa}=i;return this.boundsTree=new t(this,i),this.boundsTree}function RS(){this.boundsTree=null}const B={};function CS(i=8731){return()=>(i=i*1664525+1013904223>>>0,i/4294967296)}function ai(i){const t=document.createElement("canvas");t.width=t.height=1024;const e=t.getContext("2d"),n=CS(),s={spruce:[183,153,116],oak:[178,144,100],stone:[206,196,176],limestone:[208,195,174],plaster:[232,226,212],asphalt:[113,116,111],grass:[127,143,95],linen:[238,228,209]}[i]||[200,190,170],r=e.createImageData(1024,1024);for(let a=0;a<1024;a++)for(let l=0;l<1024;l++){const c=(a*1024+l)*4,u=i==="spruce"||i==="oak",h=Math.sin(a*.45+Math.sin(l*.008)*2+Math.sin(l*.024)*.4)*4+Math.sin(a*1.4+Math.sin(l*.015))*3,d=(u?(Math.sin(a*.056+Math.sin(l*.004)*1.5)+.5*Math.sin(a*.105+Math.sin(l*.006)*2))*(i==="spruce"?5:1.3):0)+(n()-.5)*(i==="asphalt"?34:16)+(u?h:0)+(i==="grass"?Math.sin(l*.028)*Math.cos(a*.045)*9:0);for(let g=0;g<3;g++)r.data[c+g]=s[g]+d;r.data[c+3]=255}if(e.putImageData(r,0,0),i==="limestone")for(let a=0;a<4;a++)for(let l=-1;l<3;l++){const c=l*512+a%2*256,u=a*256,h=(n()-.5)*18;e.fillStyle=`rgba(${208+h},${195+h},${174+h},.48)`,e.fillRect(c+2,u+2,508,252),e.strokeStyle="rgba(91,81,63,.30)",e.lineWidth=2.5,e.strokeRect(c+1.5,u+1.5,509,253),e.strokeStyle="rgba(244,233,211,.42)",e.lineWidth=1,e.beginPath(),e.moveTo(c+4,u+5),e.lineTo(c+507,u+5),e.stroke()}if(i==="spruce"||i==="oak")for(let a=0;a<(i==="spruce"?9:28);a++){const l=n()*1024,c=n()*1024;e.strokeStyle=i==="spruce"?"rgba(91,52,23,.27)":"rgba(101,71,37,.10)",e.lineWidth=.9;for(let u=0;u<5;u++)e.beginPath(),e.ellipse(l,c,10+u*6,2+u*1.5,0,0,Math.PI*2),e.stroke()}if(i==="linen"){e.globalAlpha=.12,e.strokeStyle="#746853";for(let a=0;a<1024;a+=3)e.beginPath(),e.moveTo(a,0),e.lineTo(a,1024),e.moveTo(0,a),e.lineTo(1024,a),e.stroke()}const o=new rg(t);return o.wrapS=o.wrapT=Mi,o.colorSpace=xn,o.anisotropy=8,o}function PS(){const i=(o,a,l=.8,c={})=>B[o]=new Ea({name:o,color:a,roughness:l,...c}),t=ai("spruce"),e=ai("oak"),n=ai("stone"),s=ai("linen");i("spruce","#f5e5d3",.68,{map:t,bumpMap:t,bumpScale:.008,vertexColors:!0}),i("endgrain","#bb946d",.82,{map:e}),i("oak","#ebd5b5",.7,{map:e,bumpMap:e,bumpScale:.007}),i("stone","#e8dfcf",.93,{map:n,bumpMap:n,bumpScale:.023}),i("plaster","#f0e9dc",.91,{map:ai("plaster")}),i("roof","#82917a",.61,{metalness:.3}),i("metal","#303a39",.42,{metalness:.7}),i("brass","#b29462",.34,{metalness:.8}),i("sage","#91a18d",.93,{map:s,bumpMap:s,bumpScale:.015}),i("terracotta","#ba755b",.94,{map:s,bumpMap:s,bumpScale:.013}),i("linen","#f3eddf",.97,{map:s,bumpMap:s,bumpScale:.01}),i("rug","#d5c2a1",1,{map:s,bumpMap:s,bumpScale:.026}),i("cream","#f2ecdf"),i("ceramic","#e5dfcd",.22),i("charcoal","#252e2d",.66),i("soil","#766342",1),i("asphalt","#737873",.98,{map:ai("asphalt")}),i("grass","#cad6aa",1,{map:ai("grass")}),i("lawn","#b0c697",1,{map:ai("grass")}),i("gravel","#e7decb",1,{map:n,bumpMap:n,bumpScale:.035}),i("court","#4d8078",.98),i("clay","#b9856d",.95),i("leaf","#778c58",.9),i("leafDark","#455c38",1),i("bark","#88795b",.96,{map:e}),i("white","#f5f1e7",.8),i("lamp","#fff0d0",.4,{emissive:"#ffe0a6",emissiveIntensity:1.8}),i("outdoorLamp","#eddfc5",.4,{emissive:"#ffd596",emissiveIntensity:0});const r=ai("limestone");i("boundaryStone","#eee7db",.96,{map:r,bumpMap:r,bumpScale:.018}),i("artPaper","#ddd3ba",.95),i("artGreen","#5d765e",.92),i("artClay","#b97654",.92),i("fire","#e97924",.7,{emissive:"#ff741b",emissiveIntensity:3}),i("tv","#0d171b",.18,{metalness:.15});for(const[o,a]of[["carSage","#778c7e"],["carClay","#986550"],["carSand","#d8cfc0"],["carBlue","#465861"]])B[o]=new Sl({name:o,color:a,metalness:.48,roughness:.27,clearcoat:1,clearcoatRoughness:.17});return i("tyre","#171a1b",.94),i("carWindow","#1c3037",.19,{metalness:.48}),i("tailLight","#922e23",.3),i("bookSage","#667763"),i("bookRust","#a45f45"),i("bookCream","#e0cfae"),B.glass=new Sl({name:"architectural_glass",color:"#e9f5ee",roughness:.07,metalness:.03,transparent:!0,opacity:.22,depthWrite:!1,side:on,clearcoat:1}),B.mirror=new Ea({name:"mirror",color:"#e0e5e3",metalness:1,roughness:.025}),B.water=new Sl({name:"pool_water",color:"#63afa9",roughness:.17,metalness:.2,transparent:!0,opacity:.82,clearcoat:1,side:on}),B}async function DS(){const i=new Zg,t=async(n,s,r=1)=>{const o=await i.loadAsync(`./textures/${n}_${s}.jpg`);return o.wrapS=o.wrapT=Mi,o.repeat.set(r,r),o.anisotropy=8,s==="diff"&&(o.colorSpace=xn),o},e=[["spruce","wood_table",1.3,.18],["oak","wood_table",1,.14],["linen","rough_linen",3.7,.35],["terracotta","rough_linen",3.7,.3],["sage","wool_boucle",3,.27],["plaster","plastered_wall_02",.7,.22],["grass","aerial_grass_rock",1,.3]];await Promise.all(e.map(async([n,s,r,o])=>{const a=B[n];a.normalMap=await t(s,"nor_gl",r),a.normalScale=new $(o,o),a.bumpMap=null,["spruce","oak"].includes(n)||(a.roughnessMap=await t(s,"rough",r)),["grass","plaster"].includes(n)&&(a.map=await t(s,"diff",r)),["spruce","oak"].includes(n)&&(a.normalScale.setScalar(.045),a.roughnessMap=null,a.roughness=.82),n==="spruce"&&(a.color.set("#f5e5d3"),a.normalScale.setScalar(.12),a.roughness=.68),n==="oak"&&a.color.set("#e9d6b7"),n==="grass"&&a.color.set("#b8c89c"),n==="grass"&&(B.lawn.normalMap=a.normalMap,B.lawn.normalScale=new $(.22,.22),B.lawn.roughnessMap=a.roughnessMap),a.needsUpdate=!0}))}const zr=new D;function In(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;zr.copy(t),zr[n]=0,zr.normalize();const c=.5*o/(o+a),u=1-zr.angleTo(i)/l;return Math.sign(zr[e])===1?u*c:a/(o+a)+c+c*(1-u)}class Nu extends ms{constructor(t=1,e=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new D,c=new D,u=new D(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=h.length/6,_=new D,m=.5/o;for(let p=0,y=0;p<h.length;p+=3,y+=2)switch(l.fromArray(h,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[p+0]=u.x*Math.sign(l.x)+c.x*r,h[p+1]=u.y*Math.sign(l.y)+c.y*r,h[p+2]=u.z*Math.sign(l.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),d[y+0]=In(_,c,"z","y",r,n),d[y+1]=1-In(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),d[y+0]=1-In(_,c,"z","y",r,n),d[y+1]=1-In(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),d[y+0]=1-In(_,c,"x","z",r,t),d[y+1]=In(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[y+0]=1-In(_,c,"x","z",r,t),d[y+1]=1-In(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[y+0]=1-In(_,c,"x","y",r,t),d[y+1]=1-In(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),d[y+0]=In(_,c,"x","y",r,t),d[y+1]=1-In(_,c,"y","x",r,e);break}}static fromJSON(t){return new Nu(t.width,t.height,t.depth,t.segments,t.radius)}}function IS(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ee;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const h=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(const u in r){const h=kf(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);const g=kf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function kf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new $e(o,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){const _=u.getComponent(f,g);a.setComponent(f+h,g,_)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const LS=new ms(1,1,1);function US(i,t,e,n,s,r,o,a,l,c,u){const h=Math.min(.0035,(a-o)/5),f=a-o,d=l/2,g=[[-d+h,0],[d-h,0],[d,h],[d,f-h],[d-h,f],[-d+h,f],[-d,f-h],[-d,h]],_=new hs(g.map(w=>new $(...w))),m=new ls(_,{depth:r-s,bevelEnabled:!1,steps:1});e==="x"?(m.rotateY(Math.PI/2),m.translate(s,o,n)):m.translate(n,o,s);const p=m.attributes.position,y=m.attributes.normal,v=m.attributes.uv;for(let w=0;w<p.count;w++)v.setXY(w,(Math.abs(y.getX(w))>.7?p.getZ(w):p.getX(w))/3,p.getY(w)/.93);m.userData.timberUV=!0;const x=fn(i,t,m,c,[0,0,0],"solid",u),S=Math.sin(Math.floor((o+.001)/.31)*91.17+n*12.8+Math.floor(s)*.67)*43758.5453,E=.88+.14*(S-Math.floor(S)),A=m.attributes.color;for(let w=0;w<A.count;w++)A.setXYZ(w,E,E,E);return x}function fn(i,t,e,n,s=[0,0,0],r="detail",o="ground"){if(n.name==="spruce"&&!e.userData.timberUV&&e.attributes.uv){const l=e.attributes.uv;for(let c=0;c<l.count;c++)l.setXY(c,l.getX(c)/3,l.getY(c)/.93)}if(n.vertexColors&&!e.attributes.color){const l=new Float32Array(e.attributes.position.count*3).fill(1);e.setAttribute("color",new $e(l,3))}const a=new Ie(e,n);return a.name=t,a.position.set(...s),a.castShadow=!0,a.receiveShadow=!0,a.userData={role:r,level:o},i.add(a),a}function _t(i,t,e,n,s,r="detail",o="ground",a=0){const l=a?new Nu(...n,3,Math.min(a,...n.map(u=>u*.45))):LS.clone();if(s.map||s.normalMap){const u=l.attributes.uv,h=l.attributes.position,f=l.attributes.normal;for(let d=0;d<u.count;d++){const g=h.getX(d)*(a?1:n[0])+e[0],_=h.getY(d)*(a?1:n[1])+e[1],m=h.getZ(d)*(a?1:n[2])+e[2];Math.abs(f.getY(d))>.7?u.setXY(d,g,m):Math.abs(f.getX(d))>.7?u.setXY(d,m,_):u.setXY(d,g,_)}}const c=fn(i,t,l,s,e,r,o);return a||c.scale.set(...n),c}function ge(i,t,e,n,s,r,o="detail",a="ground",l=n){return fn(i,t,new Mu(l,n,s,n>.2?64:20),r,e,o,a)}function Aa(i,t,e,n,s,r="ground"){const o=fn(i,t,new Ia(1,24,16),s,e,"detail",r);return o.scale.set(...n),o}function ne(i,t,e,n,s,r,o="detail",a="ground"){const l=new D(...e),c=new D(...n),u=c.clone().sub(l),h=ge(i,t,l.add(c).multiplyScalar(.5).toArray(),s,u.length(),r,o,a);return h.quaternion.setFromUnitVectors(new D(0,1,0),u.normalize()),h}function tu(i,t,e,n,s,r,o="solid",a="upper"){const l=new hs(e.map(c=>new $(...c)));if(s.name==="spruce"){const c=(h,f,d)=>{const g=[];for(let _=0;_<h.length;_++){const m=h[_],p=h[(_+1)%h.length],y=d?m[1]>=f:m[1]<=f,v=d?p[1]>=f:p[1]<=f;if(y&&g.push(m),y!==v){const x=(f-m[1])/(p[1]-m[1]);g.push([m[0]+x*(p[0]-m[0]),f])}}return g},u=fn(i,t+"_rebated_core",new ls(l,{depth:n-.008,bevelEnabled:!1}),s,[0,0,r-(n-.008)/2],o,a);for(let h=Math.floor(Math.min(...e.map(f=>f[1]))/.31)*.31;h<Math.max(...e.map(f=>f[1]));h+=.31){const f=c(c(e,h+.003,!0),h+.307,!1);f.length<3||fn(i,t+"_timber_course",new ls(new hs(f.map(d=>new $(...d))),{depth:n,bevelEnabled:!1}),s,[0,0,r-n/2],o,a)}return u}return fn(i,t,new ls(l,{depth:n,bevelEnabled:!1}),s,[0,0,r-n/2],o,a)}function jd(i){i.updateMatrixWorld(!0);const t=new Map;i.traverse(e=>{if(!e.isMesh)return;const{role:n="detail",level:s="ground"}=e.userData,r=e.userData.variant||"",o=e.userData.masterVariant||"",a=e.userData.bathVariant||"",l=`${e.material.uuid}/${n}/${s}/${r}/${o}/${a}`;t.has(l)||t.set(l,{m:e.material,role:n,level:s,variant:r,masterVariant:o,bathVariant:a,geos:[],names:[]});const c=t.get(l),u=e.geometry.clone().applyMatrix4(e.matrixWorld);c.geos.push(u.index?u.toNonIndexed():u),c.names.push(e.name)}),i.clear();for(const e of t.values()){const n=IS(e.geos,!1);e.geos.forEach(r=>r.dispose());const s=fn(i,`${e.level}_${e.role}_${e.m.name}${e.variant?"_variant_"+e.variant:""}${e.masterVariant?"_suite_"+e.masterVariant:""}${e.bathVariant?"_bath_"+e.bathVariant:""}`,n,e.m,[0,0,0],e.role,e.level);s.userData.parts=e.names,e.variant&&(s.userData.variant=e.variant),e.masterVariant&&(s.userData.masterVariant=e.masterVariant),e.bathVariant&&(s.userData.bathVariant=e.bathVariant)}return i}const rt=Object.freeze({id:"sketch",width:9.4,widthExtra:0,left:-.15,center:4.55,gridB:3.35,gridC:5.75,depth:8.3,back:-8.15,front:.15,roomFront:4.25,roomExtra:0,loftFront:4.25,stairExtra:0,bathFront:2.75,loftBathFront:2.75,loftDelta:0,upperGoing:.28,bedroomWidth:3.1175,bedroomDepth:3.8675,porch:1,externalWall:.3,internalWall:.165,pitch:30,loftLevel:3.235,knee:2});function vi(i){const t=[[-.15,-1],[.15,-1],[3.2675,-.65],[3.4325,-.65],[4.15,-.5],[5.6,-.5],[5.6675,-.35],[5.8325,-.35],[8.95,0],[9.25,0]];let e=i<=t[0][0]?-1:0;for(let n=1;n<t.length;n++)if(i>=t[n-1][0]&&i<=t[n][0]){const[s,r]=t[n-1],[o,a]=t[n];e=r+(a-r)*(i-s)/(o-s);break}return i+e*rt.widthExtra}const yt=i=>rt.back+i,ot={A:0,B:3.35,C:5.75,D:9.1,front:rt.front-.15,bedrooms:yt(rt.roomFront),bath:yt(rt.bathFront),loftFront:yt(rt.loftFront),loftBath:yt(rt.loftBathFront),rear:rt.back+.15,external:.3,internal:.165,ground:3,loft:3.235,knee:5.235,pitch:30,plinth:.3},ae={...ot,A:-rt.widthExtra,B:rt.gridB,C:rt.gridC};rt.width*rt.depth,rt.groundUsable;.15-rt.widthExtra,rt.gridB-.0825,yt(.3),ae.bedrooms-.0825,rt.gridC+.0825,yt(.3),ae.bedrooms-.0825,rt.gridB+.0825,rt.gridC-.0825,yt(.3),ae.bath-.0825,rt.gridB+.0825,rt.gridC-.0825,ae.bath+.0825,ae.bedrooms,rt.gridB+.0825,yt(.3),ae.loftFront-.0825,.15-rt.widthExtra,rt.gridB-.0825,yt(.3),ae.loftFront-.0825;const Ba=[{room:"bedroom1",x:1.7,z:yt(1.575),width:1.6,depth:2.05,y:0,color:"linen"},{room:"bedroom2",x:7.25,z:yt(1.575),width:1.5,depth:2.05,y:0,color:"sage"},{room:"master",x:6.95,z:yt(1.65),width:1.8,depth:2.1,y:3.235,color:"terracotta"}],Fu=[{room:"bedroom1",x:1.2,z:ae.bedrooms-.39,width:1.8,depth:.5,y:0},{room:"bedroom2",x:7.75,z:ae.bedrooms-.39,width:1.9,depth:.5,y:0}];Ba.map(i=>({...i,x:vi(i.x)}));Fu.map(i=>({...i,x:vi(i.x)}));ae.B,ae.bedrooms-1.05,ae.bedrooms-.15,ae.C,ae.bedrooms-1.05,ae.bedrooms-.15,ae.bath,vi(4.15),vi(4.95);const di=ae.loft/18;function $d(i=0){const t=e=>yt(e+rt.stairExtra+i);return[...Array.from({length:5},(e,n)=>({x:.7-rt.widthExtra,z:t(6.63-n*.28),y:(n+1)*di,width:.94,depth:.28})),{x:.83-rt.widthExtra,z:t(4.9),y:6*di,width:1.2,depth:.94,landing:!0},...Array.from({length:11},(e,n)=>({x:1.43-rt.widthExtra+(n+.5)*rt.upperGoing,z:t(4.9),y:(n+7)*di,width:rt.upperGoing,depth:.94}))]}$d();function xs(i,t){const e=new Re;return i.add(e),e.userData.layoutAnchor=t,e}function NS(i){if(!rt.widthExtra)return i;i.updateMatrixWorld(!0);const t=/glulam|gable|partition|Bedroom_(front_wall|dividing_wall|open_door)|Bathroom_(front_wall|open_sliding_leaf)|^(Front_|Rear_|Side_window|Upper_|Master_|Suite_|Ensuite_door|Open_entry_leaf|Linen_curtain|Curtain_rod)|Kitchen_(right_|back_|drawer|side_|stone_splashback)|Oak_floorboard|Limestone_floor_tile|Ground_slab|Loft_floor|^Porch$|Entrance_.*step|Door_sconce|Sconce_glow/,e=r=>5.235+Math.min(Math.max(r,0),Math.max(9.1-r,0))*Math.tan(Math.PI/6),n=r=>5.235+Math.min(Math.max(r+rt.widthExtra,0),Math.max(9.1-r,0))*Math.tan(Math.PI/6);function s(r){if(!r.userData.layoutReady){if(r.userData.layoutAnchor!==void 0){r.position.x+=vi(r.userData.layoutAnchor)-r.userData.layoutAnchor;return}if(r.isGroup&&r!==i&&(r.position.lengthSq()>0||r.rotation.y!==0)){const o=new D;r.getWorldPosition(o),r.position.x+=vi(o.x)-o.x;return}if(r.isMesh)if(t.test(r.name)||r.userData.role==="walk"){r.updateMatrix();const o=r.geometry.clone().applyMatrix4(r.matrix),a=o.attributes.position;for(let l=0;l<a.count;l++){const c=a.getX(l),u=a.getY(l),h=vi(c);let f=u;if(u>5.235&&/gable|partition|Master_glass|Master_door_transom|Glass_mullion|Glass_sill|Suite_front_left|Front_upper|Front_glulam_pier/.test(r.name)){const d=n(h)-e(c);f=u+Math.max(0,Math.min(1,(u-5.235)/(e(c)-5.235||1)))*d}a.setXYZ(l,h,f,a.getZ(l))}o.computeVertexNormals(),o.computeBoundingBox(),o.computeBoundingSphere(),r.geometry.dispose(),r.geometry=o,r.position.set(0,0,0),r.quaternion.identity(),r.scale.set(1,1,1)}else r.position.x+=vi(r.position.x)-r.position.x;else for(const o of r.children)s(o)}}return s(i),i}function Ou(i,t,e,n,s=.95,r=.7,o=0,a="ground"){const l=xs(i,t);l.position.set(t,e,n),l.rotation.y=o,_t(l,"Oak_art_frame",[0,0,0],[s,r,.035],B.oak,"interior",a,.012),_t(l,"Linen_art_mount",[0,0,.025],[s-.065,r-.065,.012],B.artPaper,"interior",a);const c=ge(l,"Terracotta_sun",[-s*.19,r*.17,.04],r*.115,.01,B.artClay,"interior",a);c.rotation.x=Math.PI/2;for(let u=0;u<3;u++){const h=(u-1)*s*.2,f=.043+u*.003;ne(l,"Relief_botanical_stem",[h,-r*.35,f],[h+s*.03,r*.22,f],.005,B.artGreen,"interior",a);for(let d=0;d<4;d++){const g=d%2?-1:1,_=-r*.2+d*r*.105;tu(l,"Botanical_relief",[[h,_],[h+g*s*.12,_+r*.035],[h+g*s*.075,_+r*.12]],.005,d%2?B.artGreen:B.artClay,f,"interior",a)}}}function FS(i,{x:t,y:e,z:n,width:s=1.7,height:r=2.3,depth:o=.57,rotation:a=0}){const l=xs(i,t);l.position.set(t,e,n),l.rotation.y=a,_t(l,"Open_wardrobe_back",[0,r/2,-o/2+.025],[s,r,.05],B.oak,"interiorSolid","loft");for(const c of[-s/2,s/2])_t(l,"Open_wardrobe_side",[c,r/2,0],[.035,r,o],B.oak,"interiorSolid","loft");for(const c of[.08,.5,r-.025])_t(l,"Open_wardrobe_shelf",[0,c,0],[s,.045,o],B.oak,"interiorSolid","loft");for(const c of[-s*.25,s*.25])_t(l,"Wardrobe_drawer",[c,.29,.035],[s/2-.055,.34,o-.08],B.sage,"interiorSolid","loft",.014),ne(l,"Drawer_pull",[c-.13,.37,o/2],[c+.13,.37,o/2],.008,B.brass,"interior","loft");ne(l,"Brass_hanging_rail",[-s/2+.07,r-.29,0],[s/2-.07,r-.29,0],.012,B.brass,"interior","loft"),_t(l,"Wardrobe_warm_LED",[0,r-.07,o/2-.04],[s-.1,.014,.018],B.lamp,"interior","loft");for(let c=0;c<10;c++){const u=-s/2+.15+c*(s-.3)/9,h=r-.36,f=.7+c%4*.12,d=[B.linen,B.linen,B.sage,B.charcoal,B.linen,B.terracotta,B.sage,B.linen,B.charcoal,B.linen][c];ne(l,"Hanger_hook",[u,h+.1,0],[u,h,0],.005,B.brass,"interior","loft");for(const p of[-.19,.19])ne(l,"Clothes_hanger",[u,h,0],[u,h-.1,p],.006,B.oak,"interior","loft");ne(l,"Hanger_rail",[u,h-.1,-.19],[u,h-.1,.19],.005,B.oak,"interior","loft");const g=new Re;l.add(g),g.position.x=u,g.rotation.y=Math.PI/2+Math.sin(c*2.3)*.1;const _=[[-.22,h-.16],[-.095,h-.065],[-.045,h-.11],[.045,h-.11],[.095,h-.065],[.22,h-.16],[.195,h-.6],[.135,h-.59],[.14,f+.03],[.06,f],[0,f+.02],[-.07,f-.01],[-.14,f+.035],[-.135,h-.59],[-.195,h-.6]],m=new ls(new hs(_.map(p=>new $(...p))),{depth:.02,bevelEnabled:!0,bevelSize:.009,bevelThickness:.009,bevelSegments:3,steps:1});fn(g,"Soft_hanging_garment",m,d,[0,0,-.01],"interior","loft");for(const p of[-.085,.075])ne(g,"Fabric_fold",[p,f+.055,.014],[p*.8,h-.3,.014],.009,d,"interior","loft")}}function so(i,t,e,n,s=.55,r="ground"){const o=xs(i,t);o.position.set(t,e,n),o.name="Living_greenery",ge(o,"Terracotta_plant_pot",[0,s*.17,0],s*.18,s*.34,B.terracotta,"interiorSolid",r,s*.23),ge(o,"Plant_soil",[0,s*.342,0],s*.2,.012,B.soil,"interior",r);for(let a=0;a<7;a++){const l=a*2.399,c=s*(.55+a%3*.16),u=s*(.13+a%2*.1),h=Math.cos(l)*u,f=Math.sin(l)*u;ne(o,"Plant_stem",[0,s*.31,0],[h,c,f],s*.007,B.leafDark,"interior",r);const d=new hs;d.moveTo(0,0),d.bezierCurveTo(-s*.18,s*.1,-s*.14,s*.34,0,s*.42),d.bezierCurveTo(s*.14,s*.34,s*.18,s*.1,0,0);const g=fn(o,"Soft_green_leaf",new Eu(d,10),a%2?B.leaf:B.leafDark,[h,c-s*.04,f],"interior",r);g.material.side=on,g.rotation.set(-.5,l,.22*Math.sin(l)),ne(o,"Leaf_midvein",[h,c,f],[h+Math.sin(l)*s*.1,c+s*.3,f+Math.cos(l)*s*.1],s*.003,B.leaf,"interior",r)}return o}function Ln(i,t,e,n,s,r,o,a,l,c=[],u="ground",h=B.spruce){const f=[s,r,...c.flatMap(d=>[d.a,d.b])].filter(d=>d>=s&&d<=r).sort((d,g)=>d-g);for(let d=Math.floor(o/.31);d*.31<a-.001;d++){const g=Math.max(o,d*.31),_=Math.min((d+1)*.31,a);for(let m=0;m<f.length-1;m++){const p=f[m],y=f[m+1];if(y-p<.001)continue;const v=c.find(S=>(p+y)/2>S.a&&(p+y)/2<S.b),x=v?[[g,Math.min(_,v.sill)],[Math.max(g,v.head),_]]:[[g,_]];for(const[S,E]of x)E-S<.002||(h===B.spruce?US(i,t,e,n,p,y,S,E,l,h,u):_t(i,t,e==="x"?[(p+y)/2,(S+E)/2,n]:[n,(S+E)/2,(p+y)/2],e==="x"?[y-p,E-S,l]:[l,E-S,y-p],h,"solid",u))}}}function Hn(i,t,e,n,s,r,o,a,l="ground",c=!0){const u=r-s,h=a-o,f=(s+r)/2,d=e==="x",g=(_,m,p,y,v,x=.065,S=B.metal,E="solid")=>_t(i,t+"_"+_,d?[m,p,n]:[n,p,m],d?[y,v,x]:[x,v,y],S,E,l);g("sill",f,o+.035,u,.07),g("head",f,a-.035,u,.07),g("left",s+.035,(o+a)/2,.07,h),g("right",r-.035,(o+a)/2,.07,h),c&&(g("glass",f,(o+a)/2,u-.09,h-.09,.018,B.glass),u>1.3&&g("mullion",f,(o+a)/2,.042,h))}function eu(i,t,e,n,s,r="ground",o=0){const a=new gs(n,s,24,12),l=a.attributes.position;for(let u=0;u<l.count;u++){const h=l.getX(u),f=l.getY(u);l.setZ(u,Math.sin(h/n*Math.PI*12)*.052+Math.sin(f*4)*.007)}a.computeVertexNormals();const c=fn(i,"Linen_curtain",a,B.linen,[t,o+s/2,e],"interior",r);c.material.side=on,ne(i,"Curtain_rod",[t-n/2-.12,o+s+.05,e],[t+n/2+.12,o+s+.05,e],.014,B.metal,"interior",r)}function Bu(i,t,e,n,s,r="ground",o=0){_t(i,"Woven_rug",[t,o+.019,e],[n,.026,s],B.rug,"interior",r,.012)}function zu(i,t,e,n,s="ground"){ge(i,"Lamp_base",[t,e+.02,n],.13,.04,B.brass,"interior",s),ge(i,"Lamp_stem",[t,e+.17,n],.014,.3,B.brass,"interior",s),ge(i,"Lamp_linen_shade",[t,e+.38,n],.2,.27,B.linen,"interior",s,.13),Aa(i,"Lamp_glow",[t,e+.37,n],[.09,.09,.09],B.lamp,s)}function ku(i,t){i=xs(i,t.x);const{x:e,z:n,width:s,depth:r,y:o}=t,a=o?"loft":"ground";(!o||t.room!=="master")&&Ou(i,e,o+1.97,yt(.35),.94,.67,0,a),Bu(i,e,n+.2,s+1.05,r+.85,a,o),_t(i,`${t.room}_bed_frame`,[e,o+.2,n],[s+.09,.32,r+.12],B.oak,"interiorSolid",a,.04),_t(i,`${t.room}_headboard`,[e,o+.65,n-r/2-.06],[s+.18,1.18,.1],B.oak,"interiorSolid",a,.04),_t(i,`${t.room}_mattress`,[e,o+.49,n],[s,.28,r],B.linen,"interiorSolid",a,.11);const l=new gs(s+.14,r*.78,42,32),c=l.attributes.position;for(let u=0;u<c.count;u++){const h=c.getX(u),f=c.getY(u),d=Math.max(0,Math.abs(h)-s/2+.04)/.1;c.setZ(u,Math.sin(h*15+f*3)*.011+Math.cos(f*21+h)*.006-d*.11)}l.computeVertexNormals(),l.rotateX(-Math.PI/2),fn(i,`${t.room}_duvet`,l,B[t.color],[e,o+.648,n+.21],"interior",a);for(const u of[-s*.25,s*.25]){const h=_t(i,"Linen_pillow",[e+u,o+.685,n-r*.33],[s*.44,.17,.44],B.linen,"interior",a,.08);h.rotation.y=u<0?.04:-.05}_t(i,"Folded_throw",[e,o+.665,n+r*.32],[s+.12,.075,.46],B[t.color==="terracotta"?"sage":"terracotta"],"interior",a,.025);for(const u of[-1,1]){const h=e+u*(s/2+.32);_t(i,"Bedside_table",[h,o+.44,n-.67],[.42,.12,.42],B.oak,"interiorSolid",a,.03);for(const f of[-.13,.13])for(const d of[-.13,.13])ge(i,"Bedside_leg",[h+f,o+.19,n-.67+d],.018,.38,B.oak,"interior",a);zu(i,h,o+.51,n-.67,a)}}function Zd(i,t){i=xs(i,t.x);const e=t.y?"loft":"ground",n=t.y?1.95:2.32;_t(i,t.room+"_wardrobe",[t.x,t.y+n/2,t.z],[t.width,n,t.depth],B.sage,"interiorSolid",e,.018);const s=t.y?1:-1,r=t.width<t.depth,o=r?3:4,a=r?t.depth:t.width;for(let l=0;l<o;l++){const c=-a/2+(l+.5)*a/o;_t(i,"Wardrobe_door",r?[t.x-.322,t.y+n/2,t.z+c]:[t.x+c,t.y+n/2,t.z+s*.27],r?[.035,n-.08,a/o-.018]:[a/o-.018,n-.08,.035],B.sage,"interior",e,.012),ne(i,"Wardrobe_handle",r?[t.x-.35,t.y+.91,t.z+c+.11]:[t.x+c+.11,t.y+.91,t.z+s*.3],r?[t.x-.35,t.y+1.19,t.z+c+.11]:[t.x+c+.11,t.y+1.19,t.z+s*.3],.009,B.brass,"interior",e)}}function OS(i,t,e,n=0){const s=new Re;i.add(s),s.position.set(t,0,e),s.rotation.y=n,_t(s,"Upholstered_chair_seat",[0,.46,0],[.48,.1,.46],B.terracotta,"interiorSolid","ground",.07),_t(s,"Oak_chair_back",[0,.73,-.23],[.49,.4,.06],B.oak,"interiorSolid","ground",.07);for(const r of[-1,1])for(const o of[-1,1])ne(s,"Chair_leg",[r*.17,.44,o*.17],[r*.22,.02,o*.22],.018,B.oak,"interior")}function BS(i){i=xs(i,0);const t=new Re;i.add(t),t.position.set(.48,0,ae.front-.48),t.rotation.y=rt.id==="143.7"?Math.atan2(3.12-.48,yt(rt.depth-1.95)-(ae.front-.48)):Math.atan2(2.65-.48,-1.24+ae.front*.5-(ae.front-.48)),ge(t,"Stone_fireplace_hearth",[0,.035,0],.39,.07,B.stone,"interiorSolid"),_t(t,"Stove_pedestal",[0,.19,0],[.34,.3,.31],B.charcoal,"interiorSolid","ground",.045),_t(t,"Stove_back",[0,.62,-.17],[.44,.6,.04],B.metal,"interiorSolid","ground",.02);for(const e of[-.2,.2])_t(t,"Stove_side",[e,.62,0],[.04,.6,.38],B.metal,"interiorSolid","ground",.018);for(const e of[.34,.9])_t(t,"Stove_casing",[0,e,0],[.44,.04,.38],B.metal,"interiorSolid","ground",.018);_t(t,"Stove_firebox",[0,.61,-.14],[.36,.51,.018],B.charcoal,"interior");for(let e=0;e<4;e++){const n=ge(t,"Firewood",[0,.415+e*.012,.07+e*.027],.027,.25,B.bark,"interior");n.rotation.z=Math.PI/2}for(let e=0;e<7;e++){const n=.06+e%3*.025,s=Aa(t,"Flame",[(e-3)*.037,.445+n,.145],[.02,n,.018],B.fire);s.userData.role="interior"}_t(t,"Stove_glass_door",[0,.62,.197],[.35,.5,.012],B.glass,"interior"),ne(t,"Stove_handle",[.205,.51,.21],[.205,.72,.21],.012,B.brass,"interior"),ge(i,"Fireplace_flue",[.48,3.67,ae.front-.48],.075,5.6,B.charcoal,"detail","upper"),ge(i,"Flue_rain_cap",[.48,6.49,ae.front-.48],.13,.06,B.metal,"detail","upper");for(const[e,n,s,r]of[[.175,-.48,.022,.78],[.48,-.175,.78,.022]])_t(i,"Stove_heat_shield",[e,.82,n+ae.front],[s,1.6,r],B.stone,"interior")}const Kd=i=>ot.knee+Math.min(i,9.1-i)*Math.tan(Math.PI/6),li=i=>Kd(i)-.16;function Ni(i,t,e,n,s,r,o="solid",a="upper"){if(!rt.widthExtra)return tu(i,t,e,n,s,r,o,a);const l=e.map(([h,f])=>{const d=Kd(Math.max(0,Math.min(9.1,h))),g=vi(h),_=ot.knee+Math.min(Math.max(0,g+rt.widthExtra),Math.max(0,9.1-g))*Math.tan(Math.PI/6),m=Math.abs(f-d)<.02?_:Math.abs(f-(d-.16))<.02?_-.16:f;return[g,m]}),c=i.children.length,u=tu(i,t,l,n,s,r,o,a);for(const h of i.children.slice(c))h.userData.layoutReady=!0;return u}function Jd(i,{upper:t=!1,y:e=0}={}){const n=t?"loft":"ground",s=t?1:4.95,r=-7.1,o=t?1.35:1.2,a=1.4,l=t?2.65:3.9;_t(i,"Shower_tray",[s,e+.055,r],[o,.1,a],B.stone,"interiorSolid",n,.025),_t(i,"Shower_glass",[s-o/2,e+1.1,r],[.018,2.15,a],B.glass,"solid",n),_t(i,"Shower_glass_front",[s,e+1.1,r+a/2],[o,2.15,.018],B.glass,"solid",n),ne(i,"Shower_riser",[s,e+.9,-7.8],[s,e+2.21,-7.8],.013,B.brass,"interior",n),ge(i,"Rain_shower",[s,e+2.23,-7.6],.14,.025,B.brass,"interior",n),_t(i,"WC_cistern",[l,e+.6,-7.69],[.39,.75,.17],B.ceramic,"interiorSolid",n,.06),Aa(i,"WC_bowl",[l,e+.34,-7.33],[.21,.22,.33],B.ceramic,n),ge(i,"WC_foot",[l,e+.15,-7.38],.12,.3,B.ceramic,"interiorSolid",n);const c=t?.455:3.72,u=t?-5.05:-6,h=t?1.65:.8;_t(i,"Wall_backed_vanity",[c,e+.51,u],[.55,.65,h],B.oak,"interiorSolid",n,.02),_t(i,"Vanity_stone",[c,e+.86,u],[.58,.065,h+.025],B.stone,"interior",n,.015);for(const d of t?[-.4,.4]:[0])Aa(i,"Basin",[c,e+.935,u+d],[.19,.09,.24],B.ceramic,n),ne(i,"Basin_tap",[c-.19,e+.89,u+d],[c-.19,e+1.1,u+d],.014,B.brass,"interior",n);const f=fn(i,"Bathroom_mirror",new yu(.34,40),B.mirror,[t?.162:3.445,e+1.62,u],"interior",n);f.rotation.y=Math.PI/2}function zS(i,t){const e=new Re;i.add(e),yt((.3+rt.roomFront-.0825)/2),ku(e,Ba[0]),Zd(e,Fu[0]),rt.roomExtra&&Vu(e,.65,yt(rt.roomFront-1.6)),so(e,2.75,0,yt(2.9),.5);for(const n of[.98,1.83,rt.roomFront-1.27,rt.roomFront-.42]){const s=new Re;e.add(s),s.position.set(.2,0,yt(n)),s.rotation.y=Math.PI/2,eu(s,0,0,.22,2.4)}e.traverse(n=>{n.isMesh&&(n.userData.variant=t,n.userData.role.startsWith("interior")||(n.userData.role="interior"))})}function Vu(i,t,e,n=0){i=xs(i,t<4.5?0:9.1);const s=n?"loft":"ground";_t(i,"Writing_desk",[t,n+.76,e],[.55,.065,1.2],B.oak,"interiorSolid",s,.02);for(const o of[-.5,.5])for(const a of[-.2,.2])ne(i,"Desk_leg",[t+a,n+.72,e+o],[t+a,n+.02,e+o],.02,B.oak,"interior",s);const r=new Re;i.add(r),r.position.y=n,OS(r,t+(t>4.5?-.6:.6),e,t>4.5?Math.PI/2:-Math.PI/2),r.traverse(o=>{o.isMesh&&(o.userData.level=s)}),zu(i,t,n+.8,e-.38,s),_t(i,"Open_notebook",[t,n+.807,e+.12],[.28,.02,.36],B.bookCream,"interior",s)}function kS(i){{Bu(i,2.75,(yt(rt.depth-1.165)+yt(rt.roomFront+1.55))/2,2.8,rt.depth-rt.roomFront-1.7);const l=new Re;i.add(l),l.position.set(2.65,0,yt(rt.depth-1.165)),l.rotation.y=Math.PI,_t(l,"Sofa_base",[0,.27,0],[2.05,.31,.86],B.sage,"interiorSolid","ground",.12),_t(l,"Sofa_back",[0,.7,-.36],[2.12,.8,.18],B.sage,"interiorSolid","ground",.08);for(const f of[-.98,.98])_t(l,"Sofa_arm",[f,.54,0],[.17,.4,.85],B.sage,"interiorSolid","ground",.07);for(const f of[-.48,.48])_t(l,"Sofa_cushion",[f,.49,.03],[.88,.18,.7],B.sage,"interior","ground",.07);for(const[f,d]of[[-.67,"terracotta"],[.6,"linen"],[.2,"terracotta"]]){const g=_t(l,"Sofa_pillow",[f,.8,-.2],[.4,.4,.16],B[d],"interior","ground",.075);g.rotation.x=-.2,g.rotation.z=f*.2}const c=new gs(.37,.98,16,32),u=c.attributes.position;for(let f=0;f<u.count;f++){const d=u.getX(f),g=u.getY(f)+.49;u.setXYZ(f,.67+d,.59-Math.max(0,g-.65)*1.5+Math.sin(d*32+g*4)*.008,-.34+Math.min(g,.77))}c.computeVertexNormals(),fn(l,"Draped_linen_throw",c,B.linen,[0,0,0],"interior");const h=ge(i,"Coffee_table",[2.78,.38,yt(rt.depth-2.2)],.34,.055,B.oak,"interiorSolid");h.scale.x=1.3,ge(i,"Coffee_table_pedestal",[2.78,.19,yt(rt.depth-2.2)],.15,.36,B.oak,"interiorSolid"),_t(i,"Coffee_book",[2.72,.43,yt(rt.depth-2.21)],[.23,.035,.29],B.bookRust,"interior"),ge(i,"Ceramic_bowl",[3.02,.45,yt(rt.depth-2.11)],.075,.06,B.ceramic,"interior"),_t(i,"TV_wall_limewash",[2.74,.97,yt(rt.roomFront+.09)],[1.6,1.5,.04],B.plaster,"interior"),_t(i,"Large_flat_screen_frame",[2.82,1.03,yt(rt.roomFront+.123)],[1.48,.83,.045],B.metal,"interior"),_t(i,"Large_flat_screen_TV",[2.82,1.03,yt(rt.roomFront+.15)],[1.42,.79,.012],B.tv,"interior"),_t(i,"Media_console",[2.75,.27,yt(rt.roomFront+.35)],[1.95,.32,.45],B.oak,"interiorSolid","ground",.02);for(let f=0;f<24;f++)_t(i,"Media_fluting",[1.84+f*.078,.28,yt(rt.roomFront+.59)],[.028,.26,.018],B.oak,"interior");ge(i,"Living_side_table",[3.92,.5,yt(rt.depth-1.165)],.22,.045,B.oak,"interiorSolid"),ge(i,"Side_table_leg",[3.92,.24,yt(rt.depth-1.165)],.075,.48,B.oak,"interior"),zu(i,3.92,.53,yt(rt.depth-1.165)),BS(i)}const t=rt.roomFront+.18,e=rt.depth-.48,n=yt((t+e)/2),s=[[yt(t),ot.bedrooms+.95],[ot.bedrooms+1.55,ot.front-.98]];for(const[l,c]of s){_t(i,"Kitchen_right_cabinet",[8.63,.46,(l+c)/2],[.6,.9,c-l-.035],B.sage,"interiorSolid","ground",.012),_t(i,"Kitchen_right_counter",[8.63,.94,(l+c)/2],[.65,.06,c-l-.015],B.stone,"interior","ground",.015);const u=Math.max(1,Math.floor((c-l)/.5));for(let h=0;h<u;h++)_t(i,"Kitchen_side_drawer",[8.32,.6,l+(h+.5)*(c-l)/u],[.018,.56,(c-l)/u-.04],B.sage,"interior")}_t(i,"Kitchen_back_cabinet",[7.41,.46,yt(t+.3)],[2.72,.9,.6],B.sage,"interiorSolid"),_t(i,"Kitchen_back_counter",[7.41,.94,yt(t+.3)],[2.76,.06,.66],B.stone,"interior","ground",.015);for(let l=0;l<5;l++)_t(i,"Kitchen_drawer",[6.3+l*.52,.6,yt(t+.61)],[.5,.56,.018],B.sage,"interior");_t(i,"Sink_recess",[8.63,.979,n],[.42,.012,.57],B.metal,"interior","ground",.05),ne(i,"Kitchen_tap",[8.87,.98,n],[8.87,1.26,n],.018,B.brass,"interior"),ne(i,"Tap_spout",[8.87,1.26,n],[8.66,1.26,n],.018,B.brass,"interior"),_t(i,"Induction_hob",[7.1,.978,yt(t+.3)],[.63,.018,.46],B.charcoal,"interior");for(const l of[6.94,7.27])for(const c of[yt(t+.18),yt(t+.41)])ge(i,"Hob_ring",[l,.991,c],.078,.004,B.metal,"interior");_t(i,"Kitchen_tall_fridge",[6.18,1.12,yt(t+.31)],[.58,2.24,.6],B.sage,"interiorSolid");const r=rt.id!=="143.7"?1.64:2.4,o=yt(rt.id!=="143.7"?rt.depth-1.784:rt.depth-3.15),a=6.96;_t(i,"Kitchen_island",[a,.48,o],[.8,.91,r-.08],B.oak,"interiorSolid","ground",.018),_t(i,"Island_stone",[a,.96,o],[.88,.07,r],B.stone,"interior","ground",.02);for(const l of[-.44,.44]){ge(i,"Island_stool",[a-.9,.66,o+l],.21,.07,B.oak,"interiorSolid");for(const c of[-1,1])for(const u of[-1,1])ne(i,"Stool_leg",[a-.9+c*.15,.62,o+l+u*.15],[a-.9+c*.19,.02,o+l+u*.19],.018,B.oak,"interior")}for(const l of[-.43,.43])ne(i,"Pendant_cable",[a,4.8,o+l],[a,2.25,o+l],.008,B.metal,"interior"),ge(i,"Pendant_shade",[a,2.25,o+l],.27,.18,B.cream,"interior","ground",.1),ge(i,"Pendant_light",[a,2.157,o+l],.235,.01,B.lamp,"interior");ge(i,"Kitchen_vase",[7.8,1.09,yt(t+.3)],.09,.23,B.terracotta,"interior","ground",.06);for(let l=0;l<4;l++)ne(i,"Dried_stem",[7.8,1.2,yt(t+.3)],[7.7+l*.06,1.65,yt(t+.3)+.06*Math.sin(l)],.004,B.oak,"interior");rt.roomExtra}function Qd(i,t,e,n,s,r=null){const o=[e,n];for(let a=e+.19;a<n;a+=.19)o.push(a);r&&o.push(r[2],r[3]),o.sort((a,l)=>a-l);for(let a=1;a<o.length;a++){const l=o[a-1],c=o[a];if(c-l<.001||l<e||c>n)continue;const u=[.15,8.95,...a%2?[2.05,6.45]:[4.55],...r?[r[0],r[1]]:[]].sort((h,f)=>h-f);for(let h=1;h<u.length;h++){const f=(u[h-1]+u[h])/2,d=(l+c)/2,g=u[h]-u[h-1];if(g<.001)continue;const _=r&&f>r[0]&&f<r[1]&&d>r[2]&&d<r[3];_t(i,_?"Limestone_floor_tile":"Oak_floorboard",[f,t-.006,d],[g-.001,.012,c-l-.001],_?B.stone:B.oak,"walk",s)}}}function VS(i,t){const e=new Re;i.add(e),e.userData.layoutReady=!0;const n=$d(t),s=yt(rt.loftFront+.65+t),r=-rt.widthExtra,o=4.51-rt.widthExtra/2,a=rt.upperGoing;for(const[h,f]of n.entries())_t(e,"Stair_tread_"+(h+1),[f.x,f.y-.042,f.z],[f.width,.084,f.depth],B.oak,"walk");ne(e,"Stair_lower_stringer",[.7+r,.03,n[0].z+.14],[.7+r,6*di-.08,s],.045,B.metal,"detail"),ne(e,"Stair_upper_stringer",[1.3+r,6*di-.1,s],[o,ot.loft-.2,s],.045,B.metal,"detail");for(const h of n.slice(6))for(const f of[-a*.32,0,a*.32]){const d=h.x+f;ne(e,"Stair_baluster",[d,h.y-.01,s+.47],[d,h.y+1.02+f/a*di,s+.47],.009,B.metal,"solid")}ne(e,"Upper_stair_handrail",[1.43+r,7*di+.93,s+.47],[o+.14,ot.loft+.93,s+.47],.022,B.oak,"solid");const l=[[.23+r,1.02,n[0].z+.14],[.23+r,6*di+1.02,s-.47],[1.3+r,6*di+1.02,s-.47],[o-.01,ot.loft+.84,s-.47]];for(let h=1;h<l.length;h++)ne(e,"Wall_handrail",l[h-1],l[h],.022,B.metal,"solid");for(const h of n.slice(0,5))ne(e,"Lower_baluster",[.23+r,h.y,h.z],[.23+r,h.y+1,h.z],.009,B.metal,"solid");const c=ot.loftFront+t+.0825,u=5.09-rt.widthExtra/2;_t(e,"Loft_landing",[u,ot.loft-.1175,c+.52],[1.16,.235,1.04],B.oak,"walk","upper"),Hn(e,"Landing_guard","x",c+1.04,u-.58,u+.58,ot.loft,ot.loft+1.08,"upper"),Hn(e,"Landing_side_guard","z",u+.58,c,c+1.04,ot.loft,ot.loft+1.08,"upper"),e.traverse(h=>{h.isMesh&&h.userData.level==="ground"&&(h.userData.level="stair")})}function HS(i,t){const e=new Re;i.add(e);const n=0,s=ot.loftFront+n;_t(e,"Loft_floor",[4.55,ot.loft-.1235,(rt.back+s+.0825)/2],[9.4,.223,s+.0825-rt.back],B.oak,"walk","upper"),Qd(e,ot.loft,yt(.3),s-.0825,"upper",[.15,3.2675,yt(.3),s-.0825]);{const o=yt(2.95),a=yt(3.85);if(Ln(e,"Ensuite_partition","z",3.35,yt(.3),s,ot.loft,li(3.35),.165,[{a:o,b:a,sill:ot.loft,head:ot.loft+2.1}],"loft",B.plaster),Hn(e,"Ensuite_door","z",3.35,o,a,ot.loft,ot.loft+2.1,"loft",!1),Jd(e,{upper:!0,y:ot.loft}),ku(e,Ba[2]),FS(e,{x:3.76,y:ot.loft,z:yt(1.6),rotation:Math.PI/2}),rt.roomExtra){Vu(e,8.55,yt(4.3),ot.loft),Bu(e,6.5,yt(4.7),2.6,2.3,"loft",ot.loft),_t(e,"Master_linen_bench",[6.65,ot.loft+.43,yt(4.6)],[1.7,.3,.6],B.linen,"interiorSolid","loft",.07);for(const l of[-.66,.66])for(const c of[-.2,.2])_t(e,"Master_bench_leg",[6.65+l,ot.loft+.14,yt(4.6)+c],[.06,.28,.06],B.oak,"interiorSolid","loft")}}const r=(o,a)=>{const l=[[o,ot.loft],[a,ot.loft],[a,li(a)]];o<4.55&&a>4.55&&l.push([4.55,li(4.55)]),l.push([o,li(o)]),Ni(e,"Master_glass",l,.016,B.glass,s,"solid","loft");for(const c of[o,a])ne(e,"Glass_mullion",[c,ot.loft,s],[c,li(c),s],.022,B.metal,"solid","loft");ne(e,"Glass_sill",[o,ot.loft,s],[a,ot.loft,s],.022,B.metal,"solid","loft")};Ni(e,"Suite_front_left",[[.15,ot.loft],[3.35,ot.loft],[3.35,li(3.35)],[.15,li(.15)]],.165,B.plaster,s,"solid","loft");for(const[o,a]of[[3.4325,4.7],[5.6,6.25],[6.25,7.6],[7.6,8.95]])r(o,a);Hn(e,"Master_entry","x",s,4.7,5.6,ot.loft,ot.loft+2.1,"loft",!1),Ni(e,"Master_door_transom",[[4.7,ot.loft+2.1],[5.6,ot.loft+2.1],[5.6,li(5.6)],[4.7,li(4.7)]],.016,B.glass,s,"solid","loft"),_t(e,"Master_open_sliding_door",[6.05,ot.loft+1.08,s-.05],[.83,2.1,.016],B.glass,"solid","loft"),so(e,8.3,ot.loft,yt(rt.loftFront-.52),.65,"loft"),Ou(e,6.9,ot.loft+2,yt(.34),.72,.58,0,"loft"),VS(e,n),e.traverse(o=>{o.isMesh&&(o.userData.masterVariant=t)})}function GS({merge:i=!0}={}){const t=new Re;t.name="Residence_"+rt.id+"sqm",_t(t,"Ground_slab",[4.55,-.152,(rt.back+rt.front)/2],[9.4,.28,rt.depth],B.stone,"walk"),Qd(t,0,yt(.3),rt.front-.3,"ground",[3.4325,5.6675,yt(.3),yt(rt.bathFront-.0825)]);const e=[{a:.325,b:3.025,sill:.03,head:2.3},{a:3.65,b:5.45,sill:0,head:2.3},{a:6.075,b:8.775,sill:.03,head:2.3}];Ln(t,"Front_glulam","x",ot.front,-.15,9.25,0,3,.3,e);for(const p of e)Hn(t,"Front","x",ot.front+.02,p.a,p.b,p.sill,p.head,"ground",p.a!==3.65);for(const p of[3.2,5.9])_t(t,"Open_entry_leaf",[p,1.15,ot.front-.22],[.84,2.26,.055],B.glass,"solid");const n=[{a:yt(1.1),b:yt(1.7),sill:0,head:2.3},{a:ot.bedrooms-1,b:ot.bedrooms-.4,sill:0,head:2.3}];for(const p of[0,9.1]){const y=p===0?n:[...n,{a:ot.bedrooms+.95,b:ot.bedrooms+1.55,sill:0,head:2.3},{a:ot.front-.98,b:ot.front-.38,sill:rt.id==="143.7"?1.05:0,head:2.3}];Ln(t,"Side_glulam","z",p,yt(.3),ot.front-.15,0,3,.3,y);for(const x of y)Hn(t,"Side_window","z",p,x.a,x.b,x.sill,x.head);const v=[{a:yt(1.1),b:yt(1.7)},{a:ot.loftFront-1,b:ot.loftFront-.4}].map(x=>({...x,sill:3.45,head:5.05}));Ln(t,"Upper_side_glulam","z",p,yt(.3),ot.front-.15,3,ot.knee,.3,v,"upper");for(const x of v)Hn(t,"Upper_window","z",p,x.a,x.b,x.sill,x.head,"upper");Ln(t,"Porch_side_glulam","z",p,rt.front,1.15,0,3,.3),Ln(t,"Porch_upper_glulam","z",p,rt.front,1.15,3,ot.knee,.3,[],"upper")}const s=[{a:3.8,b:5.3,sill:1.95,head:2.35}];Ln(t,"Rear_glulam","x",ot.rear,-.15,9.25,0,3,.3,s),Hn(t,"Bathroom_window","x",ot.rear,3.8,5.3,1.95,2.35);const r=[{a:2.3,b:3.2,sill:3.3,head:5.6},{a:3.85,b:5.35,sill:3.3,head:5.6},{a:5.85,b:6.75,sill:3.3,head:5.6}];Ln(t,"Rear_upper_glulam","x",ot.rear,-.15,9.25,3,ot.knee,.3,r,"upper");for(const p of r)Hn(t,"Rear_upper_window","x",ot.rear,p.a,p.b,p.sill,p.head,"upper");for(const p of[3.35,5.75])Ln(t,"Bedroom_dividing_wall","z",p,yt(.3),ot.bedrooms,0,3,.165,[{a:ot.bedrooms-1.05,b:ot.bedrooms-.15,sill:0,head:2.1}]),Hn(t,"Bedroom_door","z",p,ot.bedrooms-1.05,ot.bedrooms-.15,0,2.1,"ground",!1),_t(t,"Bedroom_open_door",[p+(p===3.35?-.46:.46),1.04,ot.bedrooms-.11],[.88,2.08,.04],B.cream,"solid");for(const[p,y]of[[.15,3.35],[5.75,8.95]])Ln(t,"Bedroom_front_wall","x",ot.bedrooms,p,y,0,3,.165);Ln(t,"Bathroom_front_wall","x",ot.bath,3.35,5.75,0,3,.165,[{a:4.15,b:4.95,sill:0,head:2.1}]),Hn(t,"Bathroom_door","x",ot.bath,4.15,4.95,0,2.1,"ground",!1),rt.id!=="143.7"?_t(t,"Bathroom_open_door",[4.14,1.04,ot.bath-.41],[.04,2.08,.78],B.cream,"solid"):_t(t,"Bathroom_open_sliding_leaf",[3.72,1.04,ot.bath+.1],[.8,2.08,.04],B.cream,"solid");const o=4.55*Math.tan(Math.PI/6),a=ot.knee+o,l=p=>ot.knee+Math.min(p,9.1-p)*Math.tan(Math.PI/6),c=[[.3,3.05],[3.65,5.45],[6.05,8.8]];Ln(t,"Upper_front_spandrel","x",ot.front,-.15,9.25,3,3.27,.3,[],"upper");for(const[p,y]of c){const v=Math.min(l(p)-.32,5.7),x=Math.min(l(y)-.32,5.7);Ni(t,"Front_upper_glass",[[p,3.27],[y,3.27],[y,x],[p,v]],.016,B.glass,ot.front+.025,"solid","upper");for(const[S,E]of[[[p,3.27,ot.front+.025],[y,3.27,ot.front+.025]],[[y,3.27,ot.front+.025],[y,x,ot.front+.025]],[[y,x,ot.front+.025],[p,v,ot.front+.025]],[[p,v,ot.front+.025],[p,3.27,ot.front+.025]]])ne(t,"Front_glass_frame",S,E,.03,B.metal,"solid","upper");ne(t,"Front_glass_mullion",[(p+y)/2,3.27,ot.front+.025],[(p+y)/2,(v+x)/2,ot.front+.025],.019,B.metal,"solid","upper")}for(const[p,y]of[[-.15,.3],[3.05,3.65],[5.45,6.05],[8.8,9.25]])Ni(t,"Front_glulam_pier",[[p,3.27],[y,3.27],[y,l(Math.min(y,9.1))],[p,l(Math.max(p,0))]],.3,B.spruce,ot.front,"solid","upper");for(const[p,y]of c){const v=Math.min(l(p)-.32,5.7),x=Math.min(l(y)-.32,5.7);Ni(t,"Front_upper_timber",[[p,v],[y,x],[y,l(y)],[p,l(p)]],.3,B.spruce,ot.front,"solid","upper")}Ni(t,"Front_gable_peak",[[3.05,l(3.05)],[4.55,a],[6.05,l(6.05)],[5.45,5.7],[3.65,5.7]],.3,B.spruce,ot.front,"solid","upper");const u=[0,2.3,3.2,3.85,4.55,5.35,5.85,6.75,9.1];for(let p=0;p<u.length-1;p++){const y=u[p],v=u[p+1],x=r.find(E=>(y+v)/2>E.a&&(y+v)/2<E.b),S=x?x.head:ot.knee;Ni(t,"Rear_gable",[[y,S],[v,S],[v,l(v)],[y,l(y)]],.3,B.spruce,ot.rear,"solid","upper")}const h=new Re;t.add(h),h.userData.layoutReady=!0;const f=ot.knee+(rt.width-.3)/2*Math.tan(Math.PI/6),d=(rt.width+.4)/2,g=9.5,_=Math.PI/6,m=d/Math.cos(_);for(const p of[-1,1]){const y=rt.center+p*d/2,v=f-d/2*Math.tan(_)+.13,x=_t(h,"Sage_roof",[y,v,-3.6],[m,.22,g],B.roof,"roof","roof");x.rotation.z=-p*_;const S=_t(h,"Timber_soffit",[y,v-.26113,-3.6],[m,.05,g],B.spruce,"roof","roof");S.rotation.z=-p*_;const E=_t(h,"Roof_insulation",[y,v-.18,-3.6],[m,.12,g],B.cream,"roof","roof");E.rotation.z=-p*_;for(let A=0;A<23;A++){const w=1.15-A*9.5/22;ne(h,"Standing_seam",[rt.center+p*.03,f+.265,w],[rt.center+p*d,f-d*Math.tan(_)+.265,w],.016,B.roof,"roof","roof")}_t(h,"Eaves_gutter",[rt.center+p*d,f-d*Math.tan(_),-3.6],[.14,.14,g+.02],B.metal,"roof","roof"),ge(h,"Rainwater_downpipe",[p<0?-.31-rt.widthExtra:9.41,2.57,yt(.37)],.045,5.14,B.metal,"detail","upper")}ne(h,"Ridge_cap",[rt.center,f+.275,1.15],[rt.center,f+.275,rt.back-.26],.055,B.roof,"roof","roof"),_t(t,"Porch",[4.55,-.075,.65],[9.4,.15,1],B.stone,"walk"),_t(t,"Entrance_lower_step",[4.55,-.275,1.73],[2.1,.15,.5],B.stone,"walk"),_t(t,"Entrance_upper_step",[4.55,-.175,1.35],[2.1,.15,.4],B.stone,"walk");for(const p of[3.25,5.86])_t(t,"Door_sconce",[p,1.8,.21+ot.front],[.08,.3,.08],B.metal),_t(t,"Sconce_glow",[p,1.8,.26+ot.front],[.045,.18,.01],B.lamp);kS(t),ku(t,Ba[1]),Zd(t,Fu[1]),rt.roomExtra&&Vu(t,8.43,yt(rt.roomFront-1.55)),Jd(t),HS(t,"open"),zS(t,"bedroom"),so(t,8.64,.98,yt(rt.depth-.8),.4),so(t,5.76,0,yt(rt.depth-.9),.72),Ou(t,7.55,2.15,yt(rt.roomFront+.095),.85,.55);for(const p of[2.84,6.28,8.56])eu(t,p,ot.front-.2,.32,2.42);for(const p of[4,5.2,6,6.6])eu(t,p,yt(.36),.23,2.3,"loft",ot.loft);return NS(t),i?jd(t):t}function tp(i){return()=>(i=1664525*i+1013904223>>>0,i/4294967296)}function WS(i,t,e,n=.28){const s=tp(e),r=[],o=[],a=[],l=new D,c=new D,u=new D,h=new Yt,f=(g,_,m)=>{r.push(...g),o.push(_.r,_.g,_.b),a.push(...m)};for(const[g,_,m]of i){const p=s()*Math.PI*2,y=(s()-.5)*1.8;l.set(Math.cos(p)*Math.cos(y),Math.sin(y),Math.sin(p)*Math.cos(y)),c.set(-Math.sin(p),.35,Math.cos(p)).normalize(),u.crossVectors(l,c).normalize();const v=t*(.75+s()*.7),x=v*n,S=new D(g,_,m),E=S.clone().addScaledVector(l,v),A=S.clone().addScaledVector(l,-v),w=S.clone().addScaledVector(c,x),b=S.clone().addScaledVector(c,-x),M=S.clone().addScaledVector(u,v*.08);h.setHSL(.2+s()*.07,.22+s()*.15,.24+s()*.19);const R=[A,S.clone().addScaledVector(l,-v*.55).addScaledVector(c,x*.83),w,S.clone().addScaledVector(l,v*.55).addScaledVector(c,x*.83),E,S.clone().addScaledVector(l,v*.55).addScaledVector(c,-x*.83),b,S.clone().addScaledVector(l,-v*.55).addScaledVector(c,-x*.83)];for(let P=0;P<R.length;P++)for(const L of[R[P],M,R[(P+1)%R.length]])f(L.toArray(),h,u.toArray())}const d=new Ee;return d.setAttribute("position",new ue(r,3)),d.setAttribute("color",new ue(o,3)),d.setAttribute("normal",new ue(a,3)),d.setAttribute("uv",new ue(new Array(r.length/3*2).fill(0),2)),d}let Vf;function XS(i=12){Vf??=new Ea({name:"Olive_foliage",color:"#8e9e78",vertexColors:!0,roughness:.92,side:on});const t=new Re,e=tp(i),n=[];ne(t,"Olive_trunk",[0,0,0],[.15,2,.05],.16,B.bark);for(let r=0;r<8;r++){const o=r*Math.PI*.25+e()*.3,a=1.1+e()*.55,l=[Math.cos(o)*a,2.6+e()*.9,Math.sin(o)*a];ne(t,"Olive_branch",[.12,1.25,.03],l,.058,B.bark);for(let c=0;c<4;c++){const u=o+(c-1.5)*.38,h=[l[0]+Math.cos(u)*.55,l[1]+.25+e()*.4,l[2]+Math.sin(u)*.55];ne(t,"Olive_twig",l,h,.017,B.bark),n.push(h)}}n.push([0,3.9,0],[.5,3.7,.5],[-.5,3.65,-.6]);const s=[];for(const r of n)for(let o=0;o<110;o++){const a=e()*Math.PI*2,l=e()*2-1,c=Math.sqrt(1-l*l),u=Math.pow(e(),.45);s.push([r[0]+Math.cos(a)*c*u*.78,r[1]+l*u*.65,r[2]+Math.sin(a)*c*u*.72])}return fn(t,"Olive_leaves",WS(s,.12,i+7),Vf),jd(t)}function qS(i,t,e,n){const s=new $t,r=new ki,o=new D,a=new D(0,1,0);for(const l of t.children){const c=new qm(l.geometry,l.material,e.length);c.name=n+"_"+l.name,e.forEach((u,h)=>{r.setFromAxisAngle(a,u.rotation||0);const f=u.scale||1;o.set(f,u.heightScale??f,f),s.compose(new D(u.x,u.y,u.z),r,o),c.setMatrixAt(h,s)}),c.castShadow=!0,c.receiveShadow=!0,c.computeBoundingSphere(),c.userData={role:"plant",level:"ground"},i.add(c)}}const ep=[],np=[],Hu=[],ip=[],Li=new Re,hi=new Re;let or;Ee.prototype.computeBoundsTree=AS;Ee.prototype.disposeBoundsTree=RS;Ie.prototype.raycast=TS;async function YS(){PS(),await DS(),or=GS({merge:!0}),or.name="Spruce_House_R01_metres",Li.add(or),Li.add(hi),_t(hi,"Garden_ground",[4.55,-.425,-3.5],[120,.15,120],B.lawn,"walk"),_t(hi,"Limestone_terrace",[4.55,-.37,3.1],[13,.1,5.1],B.gravel,"walk");for(let i=0;i<6;i++)_t(hi,"Garden_path",[4.55,-.32,6.1+i*.85],[1.65,.05,.7],B.stone,"walk");for(const[i,t]of[[-1.3,1.8],[10.4,1.8],[-2.4,-7.1],[11.5,-8]])so(hi,i,-.35,t,1.3);qS(hi,XS(28),[{x:-6,y:-.35,z:-6,scale:1.25},{x:16,y:-.35,z:-8,scale:1.4},{x:14,y:-.35,z:7,scale:1.05},{x:-7,y:-.35,z:12,scale:1.4},{x:3,y:-.35,z:-18,scale:1.4},{x:24,y:-.35,z:-22,scale:1.65},{x:-17,y:-.35,z:-22,scale:1.6}],"Olive");for(const[i,t]of[[-2.1,3.1],[11.3,3.1]])ge(hi,"Garden_bollard",[i,.05,t],.045,.8,B.metal),ge(hi,"Garden_bollard_glow",[i,.38,t],.048,.14,B.lamp);for(const[i,t,e,n]of[[2.4,2.65,-1.3,40],[7.2,2.5,-2,38],[1.7,2.5,-6,22],[7.2,2.5,-6,22],[6.9,5.5,-6,28],[1.5,5.2,-6,18],[4.55,2.4,.75,15]]){const s=new Qg("#ffe0ac",n,11,2);s.position.set(i,t,e),s.castShadow=!0,s.shadow.mapSize.set(512,512),s.shadow.camera.near=.08,s.shadow.camera.far=13,s.shadow.bias=-3e-4,s.shadow.normalBias=.03,s.userData.power=n,Li.add(s),ip.push(s)}return Li.updateMatrixWorld(!0),Li.traverse(i=>{if(!i.isMesh)return;const t=i.userData.role;["solid","interiorSolid","walk","roof"].includes(t)&&(i.isInstancedMesh||(i.geometry.computeBoundsTree(),Hu.push(i)),t==="walk"&&ep.push(i),["solid","interiorSolid"].includes(t)&&np.push(i))}),Li}function za(i,t=!0,e=!0){or?.traverse(n=>{if(!n.isMesh)return;const{role:s,level:r}=n.userData;let o=!0;s==="roof"&&(o=t&&["none","section"].includes(i)),i==="ground"&&["upper","loft","roof"].includes(r)&&(o=!1),i==="loft"&&r==="ground"&&(o=!1),!e&&(s.startsWith("interior")||/Flame|duvet|WC_bowl|Lamp_glow/.test(n.userData.parts?.join(" ")||n.name))&&(o=!1),n.visible=o}),hi.visible=!["ground","loft","section"].includes(i)}const js=new Fn(0,0,0,"YXZ"),$s=new D,jS={type:"change"},$S={type:"lock"},ZS={type:"unlock"},Hf=.002,Gf=Math.PI/2;class KS extends Nd{constructor(t,e=null){super(t,e),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=JS.bind(this),this._onPointerlockChange=QS.bind(this),this._onPointerlockError=tb.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(t){super.connect(t),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(t){if(this.enabled===!1)return;const e=this.object;$s.setFromMatrixColumn(e.matrix,0),$s.crossVectors(e.up,$s),e.position.addScaledVector($s,t)}moveRight(t){if(this.enabled===!1)return;const e=this.object;$s.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector($s,t)}lock(t=!1){this.domElement.requestPointerLock({unadjustedMovement:t})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function JS(i){if(this.enabled===!1||this.isLocked===!1)return;const t=this.object;js.setFromQuaternion(t.quaternion),js.y-=i.movementX*Hf*this.pointerSpeed,js.x-=i.movementY*Hf*this.pointerSpeed,js.x=Math.max(Gf-this.maxPolarAngle,Math.min(Gf-this.minPolarAngle,js.x)),t.quaternion.setFromEuler(js),this.dispatchEvent(jS)}function QS(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent($S),this.isLocked=!0):(this.dispatchEvent(ZS),this.isLocked=!1)}function tb(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const Wf=1.7,Xl=.27,eb=.23;class nb{constructor(t,e){this.camera=t,this.canvas=e,this.enabled=!1,this.keys={},this.keyboardLook=!1,this.mouseLook=!0,this.joy={x:0,y:0},this.ground=0,this.fallSpeed=0,this.ray=new Ud,this.ray.firstHitOnly=!0,this.euler=new Fn(0,0,0,"YXZ"),this.controls=new KS(t,e),this.controls.pointerSpeed=.8,this.controls.enabled=!1;for(const a of["keydown","keyup"])window.addEventListener(a,l=>{if(!/INPUT|SELECT|TEXTAREA/.test(l.target.tagName)&&!(!this.enabled||document.querySelector("dialog[open]"))){if(a==="keydown"&&l.code==="KeyL"&&!l.repeat){this.setKeyboardLook(!this.keyboardLook),l.preventDefault();return}a==="keydown"&&l.code==="Escape"&&(this.mouseLook=!1,this.lastPointer=null),["KeyW","KeyS","KeyA","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(l.code)&&(this.keys[l.code]=a==="keydown",l.preventDefault())}});window.addEventListener("blur",()=>{this.keys={}}),document.addEventListener("visibilitychange",()=>{this.keys={}}),e.addEventListener("pointerdown",a=>{if(!(!this.enabled||a.button!==0)&&(this.mouseLook=!0,this.drag={id:a.pointerId,x:a.clientX,y:a.clientY},a.pointerType!=="touch"&&!this.controls.isLocked))try{e.requestPointerLock?.()?.catch?.(()=>{})}catch{}}),window.addEventListener("pointermove",a=>{if(!(!this.enabled||this.controls.isLocked||document.querySelector("dialog[open]")))if(a.pointerType==="touch"){if(!this.drag||this.drag.id!==a.pointerId)return;this.look((a.clientX-this.drag.x)*-.0035,(a.clientY-this.drag.y)*-.0035),this.drag.x=a.clientX,this.drag.y=a.clientY}else a.target===e&&this.mouseLook?(this.lastPointer&&this.look((a.clientX-this.lastPointer.x)*-.003,(a.clientY-this.lastPointer.y)*-.003),this.lastPointer={x:a.clientX,y:a.clientY}):this.lastPointer=null}),e.addEventListener("pointerleave",()=>{this.lastPointer=null});for(const a of["pointerup","pointercancel"])window.addEventListener(a,()=>{this.drag=null});const n=document.getElementById("joystick"),s=document.getElementById("joystick-knob");let r;const o=a=>{const l=n.getBoundingClientRect();let c=a.clientX-l.left-l.width/2,u=a.clientY-l.top-l.height/2;const h=Math.hypot(c,u);h>34&&(c*=34/h,u*=34/h),this.joy={x:c/34,y:-u/34},s.style.transform=`translate(${c}px,${u}px)`};n.addEventListener("pointerdown",a=>{r=a.pointerId,n.setPointerCapture(r),o(a),a.preventDefault()}),n.addEventListener("pointermove",a=>{a.pointerId===r&&o(a)});for(const a of["pointerup","pointercancel"])n.addEventListener(a,()=>{r=null,this.joy={x:0,y:0},s.style.transform=""})}setKeyboardLook(t){this.keyboardLook=t,this.keys={};const e=document.getElementById("keyboard-look-btn");e&&(e.textContent=t?"WASD: Look":"WASD: Walk",e.setAttribute("aria-pressed",t))}look(t,e){!t&&!e||(this.euler.setFromQuaternion(this.camera.quaternion),this.euler.y+=t,this.euler.x=Nc.clamp(this.euler.x+e,-1.48,1.48),this.camera.quaternion.setFromEuler(this.euler))}enable(t,e){this.enabled=!0,this.mouseLook=!0,this.lastPointer=null,this.controls.enabled=!0,this.keys={},this.ground=t.y-Wf,this.fallSpeed=0,this.camera.position.copy(t),this.camera.lookAt(e),document.getElementById("joystick").hidden=!matchMedia("(pointer:coarse)").matches}disable(){this.enabled=!1,this.lastPointer=null,this.drag=null,this.controls.enabled=!1,this.controls.unlock(),this.keys={},this.joy={x:0,y:0},document.getElementById("joystick").hidden=!0}groundAt(t,e,n){this.ray.set(new D(t,n,e),new D(0,-1,0)),this.ray.far=100;const s=ep.filter(o=>!o.userData.house||Math.hypot(o.userData.house.x-t,o.userData.house.z-e)<18);return this.ray.intersectObjects(s,!1).find(o=>o.object.visible)?.point.y??-.35}blocked(t,e){const n=this.camera.position,s=Math.hypot(t,e);if(!s)return!1;const r=np.filter(a=>!a.userData.house||Math.hypot(a.userData.house.x-n.x,a.userData.house.z-n.z)<18),o=new D(t,0,e).normalize();this.ray.far=s+eb;for(const a of[.4,.72,1.2])if(this.ray.set(new D(n.x,this.ground+a,n.z),o),this.ray.intersectObjects(r,!1).some(l=>l.object.visible))return!0;return!1}step(t,e){const n=this.camera.position;Math.abs(n.x+t)>200||Math.abs(n.z+e)>200||this.blocked(t,e)||this.groundAt(n.x+t,n.z+e,this.ground+Xl)-this.ground>Xl+.01||(n.x+=t,n.z+=e)}update(t){if(!this.enabled)return;const e=this.keys,n=this.keyboardLook;this.look((+!!(e.ArrowLeft||n&&e.KeyA)-+!!(e.ArrowRight||n&&e.KeyD))*t*1.35,(+!!(e.ArrowUp||n&&e.KeyW)-+!!(e.ArrowDown||n&&e.KeyS))*t*1.1);let s=(n?0:+!!e.KeyW-+!!e.KeyS)+this.joy.y,r=(n?0:+!!e.KeyD-+!!e.KeyA)+this.joy.x;const o=Math.hypot(s,r);if(o>1&&(s/=o,r/=o),o>0){const c=this.camera.getWorldDirection(new D);c.y=0,c.normalize();const u=new D(-c.z,0,c.x),h=(e.ShiftLeft||e.ShiftRight?4.4:2.2)*t,f=c.multiplyScalar(s*h).addScaledVector(u,r*h);this.blocked(f.x,f.z)?(this.step(f.x,0),this.step(0,f.z)):this.step(f.x,f.z)}const a=this.camera.position,l=this.groundAt(a.x,a.z,this.ground+Xl);l<this.ground-.3?(this.fallSpeed+=9.8*t,this.ground=Math.max(l,this.ground-this.fallSpeed*t)):(this.ground=l,this.fallSpeed=0),a.y=Nc.lerp(a.y,this.ground+Wf,1-Math.exp(-16*t))}}const ib=(i,t)=>({distance:i.distanceTo(t),horizontal:Math.hypot(t.x-i.x,t.z-i.z),vertical:t.y-i.y});class sb{constructor(t,e,n,s,r){this.camera=e,this.canvas=n,this.objects=s,this.notify=r,this.enabled=!1,this.pending=null,this.records=[],this.visual=new Re,this.visual.name="Measurements",t.add(this.visual),this.ray=new Ud,this.ray.firstHitOnly=!0,this.material=new Da({color:"#f5d3a5",depthTest:!1}),this.lineMaterial=new xu({color:"#f3cfa0",depthTest:!1}),this.nodes=[],this.markers=[],document.getElementById("undo-measure").onclick=()=>this.undo(),document.getElementById("clear-measure").onclick=()=>this.clear(),document.getElementById("export-measure").onclick=()=>this.export()}setEnabled(t){this.enabled=t,document.body.classList.toggle("measuring",t),document.getElementById("measure-panel").hidden=!t,t||(this.pending=null,this.redraw()),this.updatePanel()}pick(t){const e=this.canvas.getBoundingClientRect(),n=new $((t.clientX-e.left)/e.width*2-1,-(t.clientY-e.top)/e.height*2+1);this.ray.setFromCamera(n,this.camera);const s=this.objects.filter(l=>{for(let c=l;c;c=c.parent)if(!c.visible)return!1;return!0});this.ray.firstHitOnly=!this.clipPlanes?.().length;const r=this.ray.intersectObjects(s,!1).find(l=>!(this.clipPlanes?.()||[]).some(c=>c.distanceToPoint(l.point)<-1e-4));if(!r){this.notify("Select a surface in the model.");return}let o=r.point.clone(),a=!1;if(document.getElementById("snap-toggle").checked&&r.face){const l=r.object.geometry.attributes.position,c=[r.face.a,r.face.b,r.face.c];let u=1/0,h=null;for(const f of c){const d=new D().fromBufferAttribute(l,f);if(r.object.isInstancedMesh&&r.instanceId!==void 0){const m=new $t;r.object.getMatrixAt(r.instanceId,m),d.applyMatrix4(m)}if(d.applyMatrix4(r.object.matrixWorld),(this.clipPlanes?.()||[]).some(m=>m.distanceToPoint(d)<-1e-4))continue;const g=d.clone().project(this.camera),_=Math.hypot((g.x-n.x)*e.width/2,(g.y-n.y)*e.height/2);_<u&&(u=_,h=d)}u<24&&(o=h,a=!0)}this.addPoint(o,r.object.name,a)}addPoint(t,e="Model surface",n=!1){if(!this.pending)this.pending={point:t.clone(),surface:e,snapped:n};else{const s=this.pending,r={point:t.clone(),surface:e,snapped:n};this.records.push({a:s,b:r,...ib(s.point,r.point)}),this.pending=null}this.redraw(),this.updatePanel()}undo(){this.pending?this.pending=null:this.records.pop(),this.redraw(),this.updatePanel()}clear(){this.pending=null,this.records=[],this.redraw(),this.updatePanel()}redraw(){this.visual.traverse(e=>{e.geometry&&e.geometry.dispose()}),this.visual.clear(),this.nodes.forEach(e=>e.el.remove()),this.nodes=[],this.markers=[];const t=e=>{const n=new Ie(new Ia(.065,12,8),this.material);n.position.copy(e),n.renderOrder=999,this.visual.add(n),this.markers.push(n)};for(const[e,n]of this.records.entries()){const s=n.a.point,r=n.b.point;t(s),t(r);const o=new _r(new Ee().setFromPoints([s,r]),this.lineMaterial);o.renderOrder=998,this.visual.add(o);const a=document.createElement("div");a.className="measure-label",a.textContent=`${e+1} · ${n.distance.toFixed(3)} m`,document.getElementById("labels").append(a),this.nodes.push({el:a,point:s.clone().add(r).multiplyScalar(.5)})}this.pending&&t(this.pending.point)}update(){const t=this.canvas.getBoundingClientRect();for(const{el:e,point:n}of this.nodes){const s=n.clone().project(this.camera);e.hidden=s.z>1||s.z<-1,e.style.left=`${(s.x+1)*t.width/2}px`,e.style.top=`${(1-s.y)*t.height/2-15}px`}for(const e of this.markers){const n=Math.max(1,this.camera.position.distanceTo(e.position)*.055);e.scale.setScalar(n)}}updatePanel(){const t=this.records.at(-1);document.getElementById("measure-instruction").textContent=this.pending?"First point set. Select your second point.":this.records.length?"Select another pair of points to compare.":"Select a surface for your first point.",document.getElementById("measure-distance").innerHTML=(t?t.distance.toFixed(3):"—")+" <small>m</small>",document.getElementById("measure-horizontal").textContent=t?`${t.horizontal.toFixed(3)} m`:"—",document.getElementById("measure-vertical").textContent=t?`${t.vertical>=0?"+":""}${t.vertical.toFixed(3)} m`:"—",document.getElementById("export-measure").disabled=!this.records.length,document.getElementById("undo-measure").disabled=!this.pending&&!this.records.length,document.getElementById("clear-measure").disabled=!this.pending&&!this.records.length}export(){const t={project:"Spruce House R01",units:"metres",created:new Date().toISOString(),note:"Distances in the drawing-based coordination model. Not field measurements or construction dimensions.",measurements:this.records.map((s,r)=>({number:r+1,start:s.a.point.toArray(),end:s.b.point.toArray(),startSurface:s.a.surface,endSurface:s.b.surface,startSnapped:s.a.snapped,endSnapped:s.b.snapped,distance:s.distance,horizontal:s.horizontal,vertical:s.vertical}))},e=URL.createObjectURL(new Blob([JSON.stringify(t,null,2)],{type:"application/json"})),n=document.createElement("a");n.href=e,n.download="spruce-house-measurements.json",n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),this.notify("Measurements saved with both point coordinates.")}}const mi=ae.knee+4.55*Math.tan(Math.PI/6),sp={revision:"R01",units:"metres",source:"Manufacturer hand sketch, pages 1 and 2; owner confirmation 13 November 2026",gridWidth:9.1,gridDepth:8,exteriorWidth:9.4,exteriorDepth:8.3,externalWall:.3,internalWall:.165,porchProjection:1,groundClearHeight:3,loftFFL:3.235,eavesWallDatum:5.235,pitchDegrees:30,calculatedRidgeDatum:mi,roofFinishRidgeApprox:mi+.33,bedroomClearWidth:3.1175,bedroomClearDepth:3.8675,bathroomClearWidth:2.235,bathroomClearDepth:2.3675,loftPartitionFront:-3.9,stairRisers:18,stairRise:3.235/18,stairGoing:.28,stairClearWidth:.94,notes:["Outside dimension excludes the porch and roof overhangs.","Roof ridge datum calculated from the 30 degree pitch; sketch 8.235 m total conflicts.","Roof buildup, structural sizing and all construction details are illustrative and require engineering.","Balcony means internal guarded landing overlooking living room.","No verified statutory or usable total area is claimed."]},rp='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 690" role="img" aria-label="Dimensioned model diagram"><style>text{font-family:Arial,sans-serif;fill:#3b4a3e;font-size:12px} .wall{fill:#c9b69b;stroke:#5c6454;stroke-width:1}.dim{stroke:#7d8e74;stroke-width:1;fill:none}.label{font-size:11px}.note{font-size:10px;fill:#75816e}</style>';function rb(){const t=o=>100+(o+.15)*52,e=o=>100+(o+8.15)*52,n=(o,a,l,c,u="#c9b69b")=>`<rect x="${t(o)}" y="${e(a)}" width="${l*52}" height="${c*52}" fill="${u}" stroke="#5c6454"/>`;let s=rp+'<text x="100" y="28" class="diagram-title">GROUND FLOOR · MODEL GRID</text><text x="100" y="49" class="note">Rear at top · view-facing porch below · all dimensions in metres</text>';s+=n(-.15,-8.15,9.4,8.3,"#f3eee1")+n(-.15,-8.15,9.4,.3)+n(-.15,-7.85,.3,8)+n(8.95,-7.85,.3,8);for(const[o,a]of[[-.15,.325],[3.025,3.65],[5.45,6.075],[8.775,9.25]])s+=n(o,-.15,a-o,.3);for(const o of[3.35,5.75])s+=n(o-.0825,-7.85,.165,2.9),s+=n(o-.0825,-4.05,.165,.15);s+=n(.15,-3.9825,3.2,.165)+n(5.75,-3.9825,3.2,.165)+n(3.35,-5.4825,.8,.165)+n(4.95,-5.4825,.8,.165);for(const o of[.325,3.65,6.075])s+=`<path d="M${t(o)} ${e(0)}H${t(o+(o===3.65?1.8:2.7))}" stroke="#739f99" stroke-width="4"/>`;for(const[o,a,l,c]of[[.9,-7.6,1.6,2.05],[6.5,-7.6,1.5,2.05]])s+=n(o,a,l,c,"#dadfcf");for(const o of[-.15,8.95])for(const[a,l]of[[-7.05,-6.45],[-4.9,-4.3],...o>0?[[-2.95,-2.35],[-.98,-.38]]:[]])s+=n(o,a,.3,l-a,"#faf9f2"),s+=`<path d="M${t(o+.15)} ${e(a)}V${e(l)}" stroke="#739f99" stroke-width="3"/>`;s+=n(.23,-3.72,.94,2.34,"#d3c2a5");for(let o=0;o<6;o++)s+=`<path d="M${t(.23)} ${e(-1.38-o*.28)}h${.94*52}" class="dim"/>`;s+=n(.15,.15,8.8,1,"#e3dccb")+n(-.15,.15,.3,1)+n(8.95,.15,.3,1),s+=`<rect x="${t(.23)}" y="${e(-3.72)}" width="${4.28*52}" height="${.94*52}" fill="#d3c2a5"/>`;for(let o=0;o<12;o++)s+=`<path d="M${t(1.43+o*.28)} ${e(-3.72)}v${.94*52}" class="dim"/>`;for(const[o,a,l]of[["BEDROOM 1",1.7,-4.8],["3.118 × 3.868",1.7,-4.45],["BEDROOM 2",7.25,-4.8],["3.118 × 3.868",7.25,-4.45],["BATH / WC",4.55,-6.9],["HALL",4.55,-4.6],["LIVING",2.7,-1.35],["KITCHEN",7.15,-1.8],["COVERED PORCH · 1.00 m",4.55,.8]])s+=`<text x="${t(a)}" y="${e(l)}" text-anchor="middle">${o}</text>`;const r=(o,a,l,c)=>`<path d="M${t(o)} ${l-7}v14m0-7H${t(a)}m0-7v14" class="dim"/><text x="${(t(o)+t(a))/2}" y="${l-9}" text-anchor="middle">${c}</text>`;return s+=r(-.15,9.25,78,"9.400 outside")+r(0,3.35,610,"3.350 centres")+r(3.35,5.75,610,"2.400")+r(5.75,9.1,610,"3.350 centres"),s+=`<path d="M625 ${e(-8.15)}h16m-8 0V${e(.15)}m-8 0h16" class="dim"/><text x="650" y="${e(-4)}" transform="rotate(90 650 ${e(-4)})" text-anchor="middle">8.300 outside · 8.000 centres</text><text x="100" y="650" class="note">300 mm external timber · 165 mm internal partitions · 310 mm courses</text><text x="100" y="668" class="note">Diagram excludes furniture details and structural design. Stair layout remains proposed.</text></svg>`,s}function ob(){const t=s=>100+(s+.15)*52,e=s=>575-s*52;let n=rp+'<text x="100" y="30" class="diagram-title">FRONT SECTION · RAISED ROOF</text><text x="100" y="51" class="note">Calculated from the chosen 30° pitch; roof layers are illustrative</text>';n+=`<path d="M${t(0)} ${e(0)}V${e(ae.knee)}L${t(4.55)} ${e(mi)}L${t(9.1)} ${e(ae.knee)}V${e(0)}Z" fill="#ebe1cf" stroke="#6a745c" stroke-width="2"/><path d="M${t(.15)} ${e(ae.loft)}H${t(8.95)}" stroke="#8b7657" stroke-width="12"/><path d="M${t(3.35)} ${e(ae.loft)}V${e(ae.knee+3.35*Math.tan(Math.PI/6))}" stroke="#8b7657" stroke-width="8"/>`;for(const[s,r]of[[0,"±0.000 ground FFL"],[3,"+3.000 clear ceiling"],[3.235,"+3.235 loft FFL"],[5.235,"+5.235 wall datum"],[mi,`+${mi.toFixed(3)} calculated ridge`]]){const o=e(s);n+=`<path d="M${t(-.2)} ${o}H650" stroke="#87937b" stroke-width=".7" stroke-dasharray="3 4"/><text x="645" y="${o+(s===3?17:-7)}" text-anchor="end" class="label">${r}</text>`}return n+=`<text x="${t(1.6)}" y="${e(4.1)}" text-anchor="middle">EN SUITE</text><text x="${t(6.2)}" y="${e(4.1)}" text-anchor="middle">GLAZED MASTER SUITE</text><text x="${t(4.55)}" y="${e(1.5)}" text-anchor="middle">GROUND FLOOR · 3.000 m CLEAR</text><text x="${t(2.5)}" y="${e(6.1)}">30°</text><text x="100" y="620" class="note">Roof rise = 4.55 × tan(30°) = ${(mi-ae.knee).toFixed(3)} m.</text><text x="100" y="643" class="note">The sketch’s 3.00 m roof-rise note / 8.235 m total is inconsistent with this pitch.</text><text x="100" y="666" class="note">Proposed roof finish is approximately +${(mi+.33).toFixed(2)} m; final build-up and height require confirmation.</text></svg>`,n}const Lt=i=>document.getElementById(i),vs=Lt("scene"),Ra=Lt("viewport");let xe;try{xe=new $y({canvas:vs,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch(i){throw Lt("load-message").textContent="Your browser could not start 3D. Try a current browser with hardware acceleration enabled.",i}xe.setPixelRatio(Math.min(devicePixelRatio,1.6));xe.shadowMap.enabled=!0;xe.shadowMap.type=Yf;xe.shadowMap.autoUpdate=!1;xe.shadowMap.needsUpdate=!0;xe.toneMapping=ru;xe.toneMappingExposure=1.05;xe.localClippingEnabled=!0;xe.setClearColor("#dce4df");const dn=new Wm;dn.background=new Yt("#dce4df");dn.fog=new gu("#dce4df",45,100);const en=new Tn(44,1,.05,220),gi=new La(-9,9,9,-9,.05,200);let je=en;je.position.set(18,10.3,19);const oe=new Ky(je,vs);oe.target.set(4.55,3,-3);oe.enableDamping=!0;oe.dampingFactor=.07;oe.minDistance=1;oe.maxDistance=70;oe.maxPolarAngle=Math.PI*.49;const Xi=new _M(xe),op=new xM(dn,je),vr=new Vn(dn,je,1,1),ka=new pr(new $(1,1),.15,.5,1.5);vr.output=Vn.OUTPUT.Default;vr.updateGtaoMaterial({radius:.65,distanceExponent:1,thickness:.8,scale:1.05});vr.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:4,rings:2,samples:16});Xi.addPass(op);Xi.addPass(vr);Xi.addPass(ka);Xi.addPass(new EM);ka.enabled=!1;const ap=new Kg("#f4f3e7","#6c7656",1);dn.add(ap);const We=new Id("#fff0d5",3.2);We.position.set(-16,24,18);We.target.position.set(4.55,2,-3);We.castShadow=!0;We.shadow.mapSize.set(2048,2048);We.shadow.camera.left=-16;We.shadow.camera.right=16;We.shadow.camera.top=16;We.shadow.camera.bottom=-16;We.shadow.camera.near=1;We.shadow.camera.far=75;We.shadow.normalBias=.04;We.shadow.bias=-3e-4;We.shadow.radius=3;dn.add(We,We.target);const Gu=new Id("#d7e6f3",.8);Gu.position.set(14,12,-12);dn.add(Gu);const Va=new nb(en,vs),ys=new sb(dn,je,vs,Hu,iu);let nu="exterior",Ei=!1,Hi="none",Gi="orbit",Ha="high",Ga="day",En=null,Xf,nr=19;ys.clipPlanes=()=>xe.clippingPlanes;const lo=new Re;dn.add(lo);lo.visible=!1;const lp=[];function iu(i){Lt("toast").textContent=i,Lt("toast").hidden=!1,clearTimeout(Xf),Xf=setTimeout(()=>Lt("toast").hidden=!0,4200)}function Wa(){const i=Ra.getBoundingClientRect();xe.setSize(i.width,i.height,!1),Xi.setSize(i.width,i.height),en.aspect=i.width/i.height,en.updateProjectionMatrix(),gi.left=-nr*en.aspect/2,gi.right=nr*en.aspect/2,gi.top=nr/2,gi.bottom=-nr/2,gi.updateProjectionMatrix()}new ResizeObserver(Wa).observe(Ra);Wa();function mr(i){je=i,oe.object=i,op.camera=i,vr.camera=i,ys.camera=i,Wa()}function cp(i,t){En={start:performance.now(),from:je.position.clone(),to:new D(...i),fromTarget:oe.target.clone(),target:new D(...t),duration:matchMedia("(prefers-reduced-motion:reduce)").matches?1:850},oe.enabled=!1}function yr(){Va.disable(),Gi="orbit",Lt("walk-help").hidden=!0,Lt("walk-btn").classList.remove("active"),Lt("orbit-btn").classList.add("active"),oe.enabled=!0}function Mr(){ys.setEnabled(!1),Lt("ruler-btn").classList.remove("active"),Gi==="measure"&&(Gi="orbit")}function Wu(){Hi="none",xe.clippingPlanes=[],za(Hi,Lt("roof-toggle").checked,Lt("furniture-toggle").checked),up()}function up(){xe.shadowMap.needsUpdate=!0,document.querySelectorAll("[data-cut]").forEach(i=>i.classList.toggle("active",i.dataset.cut===Hi))}const Xu={exterior:{p:[18,10.3,19],t:[4.55,3,-3],label:"Exterior · front garden"},living:{p:[4.65,1.7,-.45],t:[2.35,1.2,-2.6],label:"Living room · beneath the loft"},bedroom:{p:[2.9,1.7,-4.65],t:[1.65,1.1,-6.7],label:"Bedroom 1 · original sketch grid"},master:{p:[5.1,4.935,-4.4],t:[7.2,4.35,-6.5],label:"Master suite · raised roof"},landing:{p:[5.07,4.935,-3.27],t:[6.3,2.4,-.1],label:"Internal balcony · double-height living"},bathroom:{p:[2.65,4.935,-4.3],t:[.65,4.3,-5.4],label:"En suite · master loft"}};function co(i){if(!Ei)return;nu=i,yr(),Mr(),Wu(),mr(en),en.fov=i==="exterior"?44:68,en.updateProjectionMatrix(),oe.enableRotate=!0,oe.minPolarAngle=0;const t=Xu[i];cp(t.p,t.t),Lt("view-label").textContent=t.label,document.querySelectorAll("[data-view]").forEach(e=>e.classList.toggle("active",e.dataset.view===i)),document.body.classList.remove("menu-open"),Lt("mobile-menu").setAttribute("aria-expanded","false"),Lt("controls-hint").textContent="Drag to orbit · Scroll to zoom · Right-drag to pan"}function hp(i){if(!Ei)return;yr(),Mr(),Wu(),mr(en),En=null,Gi="walk",en.fov=66,en.updateProjectionMatrix();const t=Xu[i||"living"];Va.enable(new D(...t.p),new D(...t.t)),oe.enabled=!1,Lt("walk-help").hidden=!1,Lt("walk-btn").classList.add("active"),Lt("orbit-btn").classList.remove("active"),Lt("view-label").textContent="Walk mode · mouse / arrows to look",Lt("controls-hint").textContent="WASD moves · Drag on touch to look · Esc releases mouse"}function fp(i){if(!Ei)return;if(yr(),Mr(),En=null,Hi=i,za(Hi,Lt("roof-toggle").checked,Lt("furniture-toggle").checked),up(),i==="none"){xe.clippingPlanes=[],co("exterior");return}const t=i==="ground",e=i==="loft";xe.clippingPlanes=[t?new wn(new D(0,-1,0),1.2):e?new wn(new D(0,-1,0),4.43):new wn(new D(-1,0,0),4.55)],t||e?(nr=en.aspect<.8?17:13,mr(gi),je.position.set(4.55,25,-3.7+.001),oe.target.set(4.55,0,-3.7),je.up.set(0,1,0),je.lookAt(oe.target),oe.enableRotate=!1,oe.enabled=!0):(mr(en),oe.enableRotate=!0,cp([20,8,8],[4.55,3.3,-3.5])),Lt("view-label").textContent=t?"Ground-floor cutaway":e?"Loft cutaway · guarded landing":"Section · right half removed",document.body.classList.remove("menu-open"),Lt("mobile-menu").setAttribute("aria-expanded","false")}function dp(){Ei&&(yr(),Mr(),Wu(),nr=en.aspect<.8?17:11.5,mr(gi),En=null,gi.position.set(4.55,3.9,35),oe.target.set(4.55,3.9,-3),gi.lookAt(oe.target),oe.enabled=!0,oe.enableRotate=!1,Lt("view-label").textContent="Front elevation · orthographic")}function su(i){xe.shadowMap.needsUpdate=!0,Ga=i;const t={day:{sky:"#dce4df",sun:3.2,hemi:.9,env:.8,p:[-16,24,18],fill:.8,exposure:1.05},golden:{sky:"#e2ddca",sun:2.5,hemi:.65,env:.65,p:[-20,12,15],fill:.5,exposure:1.03},night:{sky:"#101c2b",sun:.25,hemi:.17,env:.12,p:[-12,24,-16],fill:.15,exposure:1.15}},e=t[i];dn.background=new Yt(e.sky),dn.fog.color.set(e.sky),We.intensity=e.sun,We.position.set(...e.p),We.color.set(i==="night"?"#abc5f3":i==="golden"?"#ffd5a0":"#fff0d5"),ap.intensity=e.hemi,Gu.intensity=e.fill,dn.environmentIntensity=e.env,xe.toneMappingExposure=e.exposure;for(const n of ip)n.intensity=n.userData.power*(i==="night"?1.9:.55);B.lamp&&(B.lamp.emissiveIntensity=i==="night"?3:1),ka.enabled=i==="night"&&Ha==="high",Lt("lighting-btn").textContent={day:"☀ Daylight",golden:"◒ Golden hour",night:"☾ Night"}[i]}function pp(i){xe.shadowMap.needsUpdate=!0,Ha=i?"smooth":"high",xe.setPixelRatio(Math.min(devicePixelRatio,i?1:1.6)),vr.enabled=!i,xe.shadowMap.enabled=!i,ka.enabled=!i&&Ga==="night",Wa(),Lt("quality-btn").textContent=i?"Quality: Smooth":"Quality: High"}function qu(i,t){const e=URL.createObjectURL(i),n=document.createElement("a");n.href=e,n.download=t,n.click(),setTimeout(()=>URL.revokeObjectURL(e),2e3)}function Zs(i,t,e,n=[0,0,0]){const s=new D(...i),r=new D(...t),o=new D(...n),a=s.clone().add(o),l=r.clone().add(o),c=new xu({color:"#314c38",depthTest:!1});for(const h of[[s,a],[r,l],[a,l]]){const f=new _r(new Ee().setFromPoints(h),c);f.renderOrder=999,lo.add(f)}const u=document.createElement("div");u.className="dimension-label",u.textContent=e,Lt("labels").append(u),lp.push({el:u,point:a.clone().lerp(l,.5)})}function ab(){Zs([-.15,0,.15],[9.25,0,.15],"9.400 m exterior",[0,0,2.6]),Zs([9.25,0,-8.15],[9.25,0,.15],"8.300 m exterior",[1.8,0,0]),Zs([-.15,0,.15],[-.15,3.235,.15],"3.235 m loft FFL",[-1.2,0,0]),Zs([9.25,0,.15],[9.25,5.235,.15],"5.235 m wall datum",[2.7,0,0]),Zs([4.55,0,-8.15],[4.55,mi,-8.15],`${mi.toFixed(3)} m ridge datum`,[0,0,-1]),Zs([7.6,0,.15],[7.6,0,1.15],"1.000 m canopy",[0,.2,0])}function Yu(i){document.querySelectorAll("[data-drawing]").forEach(t=>t.classList.toggle("active",t.dataset.drawing===i)),Lt("drawing-content").innerHTML=i==="plan"?rb():i==="section"?ob():`<img class="drawing-image" src="./drawings/manufacturer-${i==="sketch1"?1:2}.png" alt="Manufacturer original handwritten ${i==="sketch1"?"floor plans":"elevation"}"/>`}document.querySelectorAll("[data-view]").forEach(i=>i.onclick=()=>co(i.dataset.view));document.querySelectorAll("[data-cut]").forEach(i=>i.onclick=()=>fp(i.dataset.cut));Lt("orbit-btn").onclick=()=>co("exterior");Lt("walk-btn").onclick=()=>hp(nu==="exterior"?"living":nu);Lt("exit-walk").onclick=()=>co("exterior");Lt("front-btn").onclick=dp;Lt("roof-toggle").onchange=()=>{za(Hi,Lt("roof-toggle").checked,Lt("furniture-toggle").checked),xe.shadowMap.needsUpdate=!0};Lt("furniture-toggle").onchange=()=>{za(Hi,Lt("roof-toggle").checked,Lt("furniture-toggle").checked),xe.shadowMap.needsUpdate=!0};Lt("dimension-toggle").onchange=i=>lo.visible=i.target.checked;Lt("quality-btn").onclick=()=>pp(Ha==="high");Lt("lighting-btn").onclick=()=>su({day:"golden",golden:"night",night:"day"}[Ga]);Lt("ruler-btn").onclick=()=>{Ei&&(yr(),Gi="measure",ys.setEnabled(!0),Lt("ruler-btn").classList.add("active"),Lt("controls-hint").textContent="Click two surfaces · Drag to orbit · Distances in metres")};Lt("close-ruler").onclick=()=>Mr();let Gr;vs.addEventListener("pointerdown",i=>Gr={x:i.clientX,y:i.clientY,button:i.button});vs.addEventListener("pointerup",i=>{Gi==="measure"&&Gr?.button===0&&Math.hypot(i.clientX-Gr.x,i.clientY-Gr.y)<5&&ys.pick(i),Gr=null});Lt("dimensions-download").onclick=()=>qu(new Blob([JSON.stringify(sp,null,2)],{type:"application/json"}),"Spruce-House-R01-dimensions.json");Lt("notes-btn").onclick=()=>Lt("notes-dialog").showModal();Lt("drawings-btn").onclick=()=>{Yu("plan"),Lt("drawings-dialog").showModal()};Lt("notes-to-drawings").onclick=()=>{Lt("notes-dialog").close(),Yu("plan"),Lt("drawings-dialog").showModal()};document.querySelectorAll("[data-close]").forEach(i=>i.onclick=()=>Lt(i.dataset.close).close());document.querySelectorAll("[data-drawing]").forEach(i=>i.onclick=()=>Yu(i.dataset.drawing));Lt("capture-btn").onclick=()=>{Ei&&(Xi.render(),vs.toBlob(i=>i&&qu(i,"Spruce-House-R01-view.png"),"image/png"))};Lt("download-btn").onclick=async()=>{if(!Ei)return;const i=Lt("download-btn");i.disabled=!0,i.textContent="Preparing…";try{const{GLTFExporter:t}=await Ep(async()=>{const{GLTFExporter:n}=await import("./GLTFExporter-OUx7PC4N.js");return{GLTFExporter:n}},[],import.meta.url),e=await new t().parseAsync(or,{binary:!0,onlyVisible:!1});qu(new Blob([e],{type:"model/gltf-binary"}),"Spruce-House-R01-metres.glb"),iu("House model exported in metres. Dimension notes are available in Model notes.")}catch(t){iu("Export could not complete. Please try again."),console.error(t)}finally{i.disabled=!1,i.textContent="Export 3D ↗"}};Lt("mobile-menu").onclick=()=>{const i=document.body.classList.toggle("menu-open");Lt("mobile-menu").setAttribute("aria-expanded",i)};async function lb(){try{const i=new Vc(xe),[t,e]=await Promise.all([YS(),new hM().loadAsync("./assets/daylight.hdr").catch(()=>null)]);e&&(dn.environment=i.fromEquirectangular(e).texture,e.dispose()),i.dispose(),dn.add(Li),ab(),su("day"),Ei=!0,Lt("loading").hidden=!0,innerWidth<760&&(je.position.set(22,13,26),oe.target.set(4.55,3,-3)),oe.update(),window.__house={ready:!0,scene:dn,world:Li,house:or,renderer:xe,orbit:oe,walker:Va,ruler:ys,views:Xu,specifications:sp,selectables:Hu,get camera(){return je},get state(){return{cut:Hi,mode:Gi,quality:Ha,mood:Ga}},visit:co,applyCut:fp,frontView:dp,startWalk:hp,setQuality:pp,light:su,setView:(s,r)=>{yr(),Mr(),mr(en),En=null,je.position.set(...s),oe.target.set(...r),je.lookAt(oe.target),oe.enabled=!0},render:()=>Xi.render()}}catch(i){Lt("load-message").textContent="The model could not finish loading. Please refresh to try again.",console.error(i)}}lb();const cb=new Ld;function mp(){requestAnimationFrame(mp);const i=Math.min(cb.getDelta(),.04);if(En){const t=Math.min(1,(performance.now()-En.start)/En.duration),e=t*t*(3-2*t);je.position.lerpVectors(En.from,En.to,e),oe.target.lerpVectors(En.fromTarget,En.target,e),je.lookAt(oe.target),t===1&&(En=null,oe.enabled=!0)}else Gi==="walk"&&!document.querySelector("dialog[open]")?Va.update(i):oe.update();ys.update();for(const t of lp){const e=t.point.clone().project(je);t.el.hidden=!lo.visible||e.z>1||e.z<-1,t.el.style.left=`${(e.x+1)*Ra.clientWidth/2}px`,t.el.style.top=`${(1-e.y)*Ra.clientHeight/2}px`}Ei&&Xi.render()}mp();export{$e as B,Yt as C,on as D,vm as I,an as L,$t as M,Ui as N,fe as P,ki as Q,ro as R,pu as S,D as V,fb as a,Nc as b,vn as c,ub as d,Wm as e,xn as f,hn as g,Gp as h,fo as i,Ya as j,Fi as k,_i as l,Mi as m,oc as n,hb as o};
