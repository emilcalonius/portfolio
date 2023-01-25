(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function q(){}const ke=e=>e;function rt(e){return e()}function tt(){return Object.create(null)}function D(e){e.forEach(rt)}function pe(e){return typeof e=="function"}function qe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let oe;function S(e,t){return oe||(oe=document.createElement("a")),oe.href=t,e===oe.href}function _t(e){return Object.keys(e).length===0}const it=typeof window<"u";let ot=it?()=>window.performance.now():()=>Date.now(),Se=it?e=>requestAnimationFrame(e):q;const F=new Set;function ct(e){F.forEach(t=>{t.c(e)||(F.delete(t),t.f())}),F.size!==0&&Se(ct)}function at(e){let t;return F.size===0&&Se(ct),{promise:new Promise(n=>{F.add(t={c:e,f:n})}),abort(){F.delete(t)}}}function l(e,t){e.appendChild(t)}function ut(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function bt(e){const t=c("style");return yt(ut(e),t),t.sheet}function yt(e,t){return l(e.head||e,t),t.sheet}function N(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function ft(e){return document.createTextNode(e)}function m(){return ft(" ")}function xt(){return ft("")}function wt(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function r(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function $t(e){return Array.from(e.childNodes)}function kt(e,t,{bubbles:n=!1,cancelable:o=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,o,t),s}const fe=new Map;let de=0;function qt(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function St(e,t){const n={stylesheet:bt(t),rules:{}};return fe.set(e,n),n}function dt(e,t,n,o,s,i,f,u=0){const h=16.666/o;let d=`{
`;for(let b=0;b<=1;b+=h){const x=t+(n-t)*i(b);d+=b*100+`%{${f(x,1-x)}}
`}const g=d+`100% {${f(n,1-n)}}
}`,p=`__svelte_${qt(g)}_${u}`,a=ut(e),{stylesheet:v,rules:_}=fe.get(a)||St(a,e);_[p]||(_[p]=!0,v.insertRule(`@keyframes ${p} ${g}`,v.cssRules.length));const k=e.style.animation||"";return e.style.animation=`${k?`${k}, `:""}${p} ${o}ms linear ${s}ms 1 both`,de+=1,p}function be(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),s=n.length-o.length;s&&(e.style.animation=o.join(", "),de-=s,de||Tt())}function Tt(){Se(()=>{de||(fe.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&L(t)}),fe.clear())})}let Y;function U(e){Y=e}function Ct(){if(!Y)throw new Error("Function called outside component initialization");return Y}function jt(e){Ct().$$.on_mount.push(e)}const R=[],nt=[],ae=[],lt=[],Lt=Promise.resolve();let ye=!1;function Et(){ye||(ye=!0,Lt.then(mt))}function z(e){ae.push(e)}const _e=new Set;let J=0;function mt(){if(J!==0)return;const e=Y;do{try{for(;J<R.length;){const t=R[J];J++,U(t),Pt(t.$$)}}catch(t){throw R.length=0,J=0,t}for(U(null),R.length=0,J=0;nt.length;)nt.pop()();for(let t=0;t<ae.length;t+=1){const n=ae[t];_e.has(n)||(_e.add(n),n())}ae.length=0}while(R.length);for(;lt.length;)lt.pop()();ye=!1,_e.clear(),U(e)}function Pt(e){if(e.fragment!==null){e.update(),D(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}let Q;function pt(){return Q||(Q=Promise.resolve(),Q.then(()=>{Q=null})),Q}function me(e,t,n){e.dispatchEvent(kt(`${t?"intro":"outro"}${n}`))}const ue=new Set;let E;function At(){E={r:0,c:[],p:E}}function Mt(){E.r||D(E.c),E=E.p}function K(e,t){e&&e.i&&(ue.delete(e),e.i(t))}function ce(e,t,n,o){if(e&&e.o){if(ue.has(e))return;ue.add(e),E.c.push(()=>{ue.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}const ht={duration:0};function Nt(e,t,n){const o={direction:"in"};let s=t(e,n,o),i=!1,f,u,h=0;function d(){f&&be(e,f)}function g(){const{delay:a=0,duration:v=300,easing:_=ke,tick:k=q,css:b}=s||ht;b&&(f=dt(e,0,1,v,a,_,b,h++)),k(0,1);const x=ot()+a,P=x+v;u&&u.abort(),i=!0,z(()=>me(e,!0,"start")),u=at(T=>{if(i){if(T>=P)return k(1,0),me(e,!0,"end"),d(),i=!1;if(T>=x){const w=_((T-x)/v);k(w,1-w)}}return i})}let p=!1;return{start(){p||(p=!0,be(e),pe(s)?(s=s(o),pt().then(g)):g())},invalidate(){p=!1},end(){i&&(d(),i=!1)}}}function vt(e,t,n){const o={direction:"out"};let s=t(e,n,o),i=!0,f;const u=E;u.r+=1;function h(){const{delay:d=0,duration:g=300,easing:p=ke,tick:a=q,css:v}=s||ht;v&&(f=dt(e,1,0,g,d,p,v));const _=ot()+d,k=_+g;z(()=>me(e,!1,"start")),at(b=>{if(i){if(b>=k)return a(0,1),me(e,!1,"end"),--u.r||D(u.c),!1;if(b>=_){const x=p((b-_)/g);a(1-x,x)}}return i})}return pe(s)?pt().then(()=>{s=s(o),h()}):h(),{end(d){d&&s.tick&&s.tick(1,0),i&&(f&&be(e,f),i=!1)}}}function st(e){e&&e.c()}function xe(e,t,n,o){const{fragment:s,after_update:i}=e.$$;s&&s.m(t,n),o||z(()=>{const f=e.$$.on_mount.map(rt).filter(pe);e.$$.on_destroy?e.$$.on_destroy.push(...f):D(f),e.$$.on_mount=[]}),i.forEach(z)}function we(e,t){const n=e.$$;n.fragment!==null&&(D(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(e,t){e.$$.dirty[0]===-1&&(R.push(e),Et(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Te(e,t,n,o,s,i,f,u=[-1]){const h=Y;U(e);const d=e.$$={fragment:null,ctx:[],props:i,update:q,not_equal:s,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:tt(),dirty:u,skip_bound:!1,root:t.target||h.$$.root};f&&f(d.root);let g=!1;if(d.ctx=n?n(e,t.props||{},(p,a,...v)=>{const _=v.length?v[0]:a;return d.ctx&&s(d.ctx[p],d.ctx[p]=_)&&(!d.skip_bound&&d.bound[p]&&d.bound[p](_),g&&Ht(e,p)),a}):[],d.update(),g=!0,D(d.before_update),d.fragment=o?o(d.ctx):!1,t.target){if(t.hydrate){const p=$t(t.target);d.fragment&&d.fragment.l(p),p.forEach(L)}else d.fragment&&d.fragment.c();t.intro&&K(e.$$.fragment),xe(e,t.target,t.anchor,t.customElement),mt()}U(h)}class Ce{$destroy(){we(this,1),this.$destroy=q}$on(t,n){if(!pe(n))return q;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(t){this.$$set&&!_t(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const It="/assets/portrait-5a226c09.jpg",Gt="/assets/github-e5f90b2a.png",Vt="/assets/gitlab-a1818ac7.png",Ot="/assets/linkedin-eddb01f3.png";function Jt(e){let t,n,o,s,i,f,u,h,d,g,p,a,v,_,k,b,x,P,T,w,C,W,j,A,B,M;return{c(){t=c("div"),n=c("div"),o=c("div"),s=c("div"),i=c("img"),u=m(),h=c("div"),d=c("div"),d.innerHTML=`<h1 class="title-text svelte-17volmx">Hi,</h1> 
                <h1 class="title-text svelte-17volmx">I&#39;m</h1> 
                <h1 class="name svelte-17volmx">Emil Calonius</h1> 
                <h1 class="title-text svelte-17volmx">|</h1> 
                <h1 class="name svelte-17volmx">Full Stack</h1> 
                <h1 class="title-text svelte-17volmx">developer</h1>`,g=m(),p=c("div"),a=c("a"),v=c("img"),k=m(),b=c("a"),x=c("img"),T=m(),w=c("a"),C=c("img"),j=m(),A=c("p"),A.textContent=`I am an aspiring web developer, who loves
                problem solving and seeing the work I do
                affect peoples lives positively. Making modern, responsive 
                and practical web applications is my passion! 🔥`,B=m(),M=c("p"),M.textContent=`I like to keep up with new technologies and constantly improving 
                my skills keeps me motivated. 
                Take a look at my experience and projects below. ⬇️`,r(i,"class","portrait-img svelte-17volmx"),S(i.src,f=It)||r(i,"src",f),r(i,"alt","portrait"),r(s,"class","portrait svelte-17volmx"),r(o,"class","portrait-border svelte-17volmx"),r(d,"class","title svelte-17volmx"),r(v,"class","link svelte-17volmx"),S(v.src,_=Gt)||r(v,"src",_),r(v,"alt","GitHub"),r(a,"href","https://github.com/emilcalonius"),r(a,"target","_blank"),r(a,"rel","noreferrer noopener"),r(x,"class","link svelte-17volmx"),S(x.src,P=Vt)||r(x,"src",P),r(x,"alt","GitLab"),r(b,"href","https://gitlab.com/emilcalonius"),r(b,"target","_blank"),r(b,"rel","noreferrer noopener"),r(C,"class","link svelte-17volmx"),S(C.src,W=Ot)||r(C,"src",W),r(C,"alt","LinkedIn"),r(w,"href","https://www.linkedin.com/in/emilcalonius/"),r(w,"target","_blank"),r(w,"rel","noreferrer noopener"),r(p,"class","links svelte-17volmx"),r(A,"class","bio svelte-17volmx"),r(M,"class","bio svelte-17volmx"),r(h,"class","text-container svelte-17volmx"),r(n,"class","profile svelte-17volmx"),r(t,"class","introduction svelte-17volmx")},m(H,X){N(H,t,X),l(t,n),l(n,o),l(o,s),l(s,i),l(n,u),l(n,h),l(h,d),l(h,g),l(h,p),l(p,a),l(a,v),l(p,k),l(p,b),l(b,x),l(p,T),l(p,w),l(w,C),l(h,j),l(h,A),l(h,B),l(h,M)},p:q,i:q,o:q,d(H){H&&L(t)}}}class Rt extends Ce{constructor(t){super(),Te(this,t,null,Jt,qe,{})}}const Ft="/assets/lumisovellus_pc-a2fc1a52.png",zt="/assets/lumisovellus_mobile-4af60509.png",Dt="/assets/vgcollection_search-c925ae2a.png",Wt="/assets/vgcollection_library-f45ad065.png",Bt="/assets/vgcollection_game-1155625b.png",Qt="/assets/birdnest-988926c2.png";function Kt(e){let t,n,o,s,i,f,u,h,d,g,p,a,v,_,k,b,x,P,T,w,C,W,j,A,B,M,H,X,je,y,Z,Le,ee,Ee,te,Pe,ne,Ae,he,Me,Ne,He,I,Ie,Ge,G,Ve,Oe,V,Je,Re,Fe,ze,De,We,$,le,Be,se,Qe,re,Ke,ie,Ue,ve,Ye,Xe,Ze,O,et;return{c(){t=c("div"),n=c("div"),o=c("h1"),o.textContent="# Projects",s=m(),i=c("div"),f=m(),u=c("div"),h=c("h1"),h.textContent="Lumisovellus ❄️",d=m(),g=c("h3"),g.textContent="School project",p=m(),a=c("p"),a.innerHTML=`I was a frontend developer on the Lumisovellus-project.
                The web app is used for recording snow
                information in the Pallas area. Project was a part of
                Tampere University&#39;s software engineering project -course. 
                The application is now maintained by
                Pallaksen Pöllöt and is actively used during the
                winter season by people moving around the Pallas
                fell area.
                <br/> 
                <br/>
                Source code on 
                <a href="https://github.com/oona988/snowledge" target="_blank" rel="noreferrer noopener">GitHub</a> 
                <br/>
                Website hosted 
                <a href="https://lumisovellus.fi" target="_blank" rel="noreferrer noopener">here</a>`,v=m(),_=c("h3"),_.textContent="Technologies",k=m(),b=c("ul"),b.innerHTML=`<li class="svelte-1tqb5y0">JavaScript</li> 
                <li class="svelte-1tqb5y0">React ⚛️</li> 
                <li class="svelte-1tqb5y0">NodeJS</li> 
                <li class="svelte-1tqb5y0">MySQL 🐬</li>`,x=m(),P=c("br"),T=m(),w=c("img"),W=m(),j=c("img"),B=m(),M=c("br"),H=m(),X=c("br"),je=m(),y=c("div"),Z=c("h1"),Z.textContent="Video game collection 🎮",Le=m(),ee=c("h3"),ee.textContent="Personal project",Ee=m(),te=c("p"),te.innerHTML=`A website for building and managing your video game collection. Includes a REST API
                built with Spring Boot and a front end made with Vue. Also has Meilisearch search
                engine database with over 60 000 video games published on Steam to search through
                and add to your collection. App authentication and access-control is impemented in a
                stateless manner with JWTs.
                <br/> 
                <br/>
                Source code on 
                <a href="https://github.com/emilcalonius/game-collection-frontend" target="_blank" rel="noreferrer noopener">GitHub</a> 
                <br/>
                Website hosted 
                <a href="https://calonius.me/game-collection-frontend" target="_blank" rel="noreferrer noopener">here</a>`,Pe=m(),ne=c("h3"),ne.textContent="Technologies",Ae=m(),he=c("ul"),he.innerHTML=`<li class="svelte-1tqb5y0">TypeScript</li> 
                <li class="svelte-1tqb5y0">VueJS</li> 
                <li class="svelte-1tqb5y0">Java ☕</li> 
                <li class="svelte-1tqb5y0">Spring boot 🍃</li> 
                <li class="svelte-1tqb5y0">PostgreSQL 🐘</li>`,Me=m(),Ne=c("br"),He=m(),I=c("img"),Ge=m(),G=c("img"),Oe=m(),V=c("img"),Re=m(),Fe=c("br"),ze=m(),De=c("br"),We=m(),$=c("div"),le=c("h1"),le.textContent="Drone radar 📡",Be=m(),se=c("h3"),se.textContent="Personal project",Qe=m(),re=c("p"),re.innerHTML=`Application for monitoring drone traffic near the nest of an endangered bird species 
                and keeping track of pilots violating the no drone zone around the nest. 
                Simulated drone positions are fetched from an external API maintained by Reaktor. 
                Violations are persisted in the backend for 10 minutes.
                Frontend developed using Vue and backend made with Node.
                <br/> 
                <br/>
                Source code on 
                <a href="https://github.com/emilcalonius/birdnest" target="_blank" rel="noreferrer noopener">GitHub</a> 
                <br/>
                Website hosted 
                <a href="https://calonius.me/birdnest" target="_blank" rel="noreferrer noopener">here</a>`,Ke=m(),ie=c("h3"),ie.textContent="Technologies",Ue=m(),ve=c("ul"),ve.innerHTML=`<li class="svelte-1tqb5y0">TypeScript</li> 
                <li class="svelte-1tqb5y0">VueJS</li> 
                <li class="svelte-1tqb5y0">NodeJS</li>`,Ye=m(),Xe=c("br"),Ze=m(),O=c("img"),r(o,"class","title svelte-1tqb5y0"),r(i,"class","splatter svelte-1tqb5y0"),r(h,"class","name svelte-1tqb5y0"),r(g,"class","subtitle svelte-1tqb5y0"),r(a,"class","description svelte-1tqb5y0"),r(_,"class","svelte-1tqb5y0"),S(w.src,C=zt)||r(w,"src",C),r(w,"alt","lumisovellus-mobile"),r(w,"class","mobile snowledge svelte-1tqb5y0"),S(j.src,A=Ft)||r(j,"src",A),r(j,"alt","lumisovellus-pc"),r(j,"class","pc svelte-1tqb5y0"),r(u,"class","project"),r(Z,"class","name svelte-1tqb5y0"),r(ee,"class","subtitle svelte-1tqb5y0"),r(te,"class","description svelte-1tqb5y0"),r(ne,"class","svelte-1tqb5y0"),S(I.src,Ie=Dt)||r(I,"src",Ie),r(I,"alt","Video Game Collection search"),r(I,"class","mobile svelte-1tqb5y0"),S(G.src,Ve=Wt)||r(G,"src",Ve),r(G,"alt","Video Game Collection library"),r(G,"class","mobile svelte-1tqb5y0"),S(V.src,Je=Bt)||r(V,"src",Je),r(V,"alt","Video Game Collection game info"),r(V,"class","mobile svelte-1tqb5y0"),r(y,"class","project"),r(le,"class","name svelte-1tqb5y0"),r(se,"class","subtitle svelte-1tqb5y0"),r(re,"class","description svelte-1tqb5y0"),r(ie,"class","svelte-1tqb5y0"),S(O.src,et=Qt)||r(O,"src",et),r(O,"alt","birdnest"),r(O,"class","pc svelte-1tqb5y0"),r($,"class","project"),r(n,"class","projects-container svelte-1tqb5y0"),r(t,"class","projects svelte-1tqb5y0")},m(ge,gt){N(ge,t,gt),l(t,n),l(n,o),l(n,s),l(n,i),l(n,f),l(n,u),l(u,h),l(u,d),l(u,g),l(u,p),l(u,a),l(u,v),l(u,_),l(u,k),l(u,b),l(u,x),l(u,P),l(u,T),l(u,w),l(u,W),l(u,j),l(n,B),l(n,M),l(n,H),l(n,X),l(n,je),l(n,y),l(y,Z),l(y,Le),l(y,ee),l(y,Ee),l(y,te),l(y,Pe),l(y,ne),l(y,Ae),l(y,he),l(y,Me),l(y,Ne),l(y,He),l(y,I),l(y,Ge),l(y,G),l(y,Oe),l(y,V),l(n,Re),l(n,Fe),l(n,ze),l(n,De),l(n,We),l(n,$),l($,le),l($,Be),l($,se),l($,Qe),l($,re),l($,Ke),l($,ie),l($,Ue),l($,ve),l($,Ye),l($,Xe),l($,Ze),l($,O)},p:q,i:q,o:q,d(ge){ge&&L(t)}}}class Ut extends Ce{constructor(t){super(),Te(this,t,null,Kt,qe,{})}}function $e(e,{delay:t=0,duration:n=400,easing:o=ke}={}){const s=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:o,css:i=>`opacity: ${i*s}`}}function Yt(e){let t,n,o,s,i,f;return{c(){t=c("button"),t.textContent="Top",r(t,"class","toTop svelte-xks5o5")},m(u,h){N(u,t,h),s=!0,i||(f=wt(t,"click",e[1]),i=!0)},p:q,i(u){s||(z(()=>{o&&o.end(1),n=Nt(t,$e,{}),n.start()}),s=!0)},o(u){n&&n.invalidate(),o=vt(t,$e,{}),s=!1},d(u){u&&L(t),u&&o&&o.end(),i=!1,f()}}}function Xt(e){let t,n,o;return{c(){t=c("div"),r(t,"class","arrow svelte-xks5o5")},m(s,i){N(s,t,i),o=!0},p:q,i(s){o||(n&&n.end(1),o=!0)},o(s){n=vt(t,$e,{}),o=!1},d(s){s&&L(t),s&&n&&n.end()}}}function Zt(e){let t,n,o,s,i,f,u,h;t=new Rt({}),o=new Ut({});const d=[Xt,Yt],g=[];function p(a,v){return a[0]?1:0}return i=p(e),f=g[i]=d[i](e),{c(){st(t.$$.fragment),n=m(),st(o.$$.fragment),s=m(),f.c(),u=xt()},m(a,v){xe(t,a,v),N(a,n,v),xe(o,a,v),N(a,s,v),g[i].m(a,v),N(a,u,v),h=!0},p(a,[v]){let _=i;i=p(a),i===_?g[i].p(a,v):(At(),ce(g[_],1,1,()=>{g[_]=null}),Mt(),f=g[i],f?f.p(a,v):(f=g[i]=d[i](a),f.c()),K(f,1),f.m(u.parentNode,u))},i(a){h||(K(t.$$.fragment,a),K(o.$$.fragment,a),K(f),h=!0)},o(a){ce(t.$$.fragment,a),ce(o.$$.fragment,a),ce(f),h=!1},d(a){we(t,a),a&&L(n),we(o,a),a&&L(s),g[i].d(a),a&&L(u)}}}function en(e,t,n){let o=!1;window.onscroll=function(f){window.pageYOffset>0?n(0,o=!0):n(0,o=!1)};const s=()=>{window.scrollTo(0,0),setTimeout(()=>{i()},900)},i=()=>{document.querySelector(".introduction"),window.innerHeight>=865&&(document.querySelector(".arrow").style.display="block")};return jt(()=>{i()}),[o,s]}class tn extends Ce{constructor(t){super(),Te(this,t,en,Zt,qe,{})}}new tn({target:document.getElementById("app")});
