import{a9 as q,aa as oe,a7 as $e,a3 as Be,a1 as _e,i as Ae,j as Pe,o as le,c as E,d as L,q as I,at as se,a0 as re,b as k,V as ce,e as de,v as ze,k as A,s as ue,a as g,n as P,m as fe,U as N,au as ve,a6 as O,w as X,t as Z,x as K,av as Ne,N as U,C as Oe,S as Ee,aw as Le,A as z,D as De,ax as He,f as te,ay as Me,az as We,aA as ne,K as Ze,X as Ve,J as Fe,aB as Ue,r as je,h as qe,Q as Ke,aC as Xe,E as Ye,y as Je,z as Qe,ah as Ge}from"./index-84821ee2.js";import{a as Y,S as pe,b as et,c as tt,h as nt}from"./index-2691d4e2.js";function at(e,o,l){let d=0;const n=e.scrollLeft,a=l===0?1:Math.round(l*1e3/16);function s(){e.scrollLeft+=(o-n)/a,++d<a&&q(s)}s()}function it(e,o,l,d){let n=oe(e);const a=n<o,s=l===0?1:Math.round(l*1e3/16),h=(o-n)/s;function u(){n+=h,(a&&n>o||!a&&n<o)&&(n=o),$e(e,n),a&&n<o||!a&&n>o?q(u):d&&q(d)}u()}let ot=0;function he(){const e=Be(),{name:o="unknown"}=(e==null?void 0:e.type)||{};return`${o}-${++ot}`}function lt(e,o){if(!_e||!window.IntersectionObserver)return;const l=new IntersectionObserver(a=>{o(a[0].intersectionRatio>0)},{root:document.body}),d=()=>{e.value&&l.observe(e.value)},n=()=>{e.value&&l.unobserve(e.value)};Ae(n),Pe(n),le(d)}const[st,rt]=E("sticky"),ct={zIndex:P,position:fe("top"),container:Object,offsetTop:N(0),offsetBottom:N(0)};var dt=L({name:st,props:ct,emits:["scroll","change"],setup(e,{emit:o,slots:l}){const d=I(),n=se(d),a=re({fixed:!1,width:0,height:0,transform:0}),s=k(()=>ce(e.position==="top"?e.offsetTop:e.offsetBottom)),h=k(()=>{const{fixed:f,height:w,width:x}=a;if(f)return{width:`${x}px`,height:`${w}px`}}),u=k(()=>{if(!a.fixed)return;const f=de(ze(e.zIndex),{width:`${a.width}px`,height:`${a.height}px`,[e.position]:`${s.value}px`});return a.transform&&(f.transform=`translate3d(0, ${a.transform}px, 0)`),f}),T=f=>o("scroll",{scrollTop:f,isFixed:a.fixed}),b=()=>{if(!d.value||ve(d))return;const{container:f,position:w}=e,x=O(d),v=oe(window);if(a.width=x.width,a.height=x.height,w==="top")if(f){const C=O(f),r=C.bottom-s.value-a.height;a.fixed=s.value>x.top&&C.bottom>0,a.transform=r<0?r:0}else a.fixed=s.value>x.top;else{const{clientHeight:C}=document.documentElement;if(f){const r=O(f),R=C-r.top-s.value-a.height;a.fixed=C-s.value<x.bottom&&C>r.top,a.transform=R<0?-R:0}else a.fixed=C-s.value<x.bottom}T(v)};return A(()=>a.fixed,f=>o("change",f)),ue("scroll",b,{target:n,passive:!0}),lt(d,b),()=>{var f;return g("div",{ref:d,style:h.value},[g("div",{class:rt({fixed:a.fixed}),style:u.value},[(f=l.default)==null?void 0:f.call(l)])])}}});const ut=X(dt),[ft,ae]=E("tab");var vt=L({name:ft,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:P,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:Z},setup(e,{slots:o}){const l=k(()=>{const n={},{type:a,color:s,disabled:h,isActive:u,activeColor:T,inactiveColor:b}=e;s&&a==="card"&&(n.borderColor=s,h||(u?n.backgroundColor=s:n.color=s));const w=u?T:b;return w&&(n.color=w),n}),d=()=>{const n=g("span",{class:ae("text",{ellipsis:!e.scrollable})},[o.title?o.title():e.title]);return e.dot||K(e.badge)&&e.badge!==""?g(Ne,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[n]}):n};return()=>g("div",{id:e.id,role:"tab",class:[ae([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:l.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[d()])}});const[ht,ie]=E("tabs");var bt=L({name:ht,props:{count:U(Number),inited:Boolean,animated:Boolean,duration:U(P),swipeable:Boolean,lazyRender:Boolean,currentIndex:U(Number)},emits:["change"],setup(e,{emit:o,slots:l}){const d=I(),n=h=>o("change",h),a=()=>{var h;const u=(h=l.default)==null?void 0:h.call(l);return e.animated||e.swipeable?g(pe,{ref:d,loop:!1,class:ie("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:n},{default:()=>[u]}):u},s=h=>{const u=d.value;u&&u.state.active!==h&&u.swipeTo(h,{immediate:!e.inited})};return A(()=>e.currentIndex,s),Oe(()=>{s(e.currentIndex)}),Y({swipeRef:d}),()=>g("div",{class:ie("content",{animated:e.animated||e.swipeable})},[a()])}});const[be,W]=E("tabs"),gt={type:fe("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:N(0),duration:N(.3),animated:Boolean,ellipsis:Z,swipeable:Boolean,scrollspy:Boolean,offsetTop:N(0),background:String,lazyRender:Z,lineWidth:P,lineHeight:P,beforeChange:Function,swipeThreshold:N(5),titleActiveColor:String,titleInactiveColor:String},ge=Symbol(be);var mt=L({name:be,props:gt,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:o,slots:l}){let d,n,a;const s=I(),h=I(),u=I(),T=I(),b=he(),f=se(s),[w,x]=et(),{children:v,linkChildren:C}=Ee(ge),r=re({inited:!1,position:"",lineStyle:{},currentIndex:-1}),R=k(()=>v.length>e.swipeThreshold||!e.ellipsis||e.shrink),V=k(()=>({borderColor:e.color,background:e.background})),$=(t,i)=>{var c;return(c=t.name)!=null?c:i},J=k(()=>{const t=v[r.currentIndex];if(t)return $(t,r.currentIndex)}),F=k(()=>ce(e.offsetTop)),Q=k(()=>e.sticky?F.value+d:0),D=t=>{const i=h.value,c=w.value;if(!R.value||!i||!c||!c[r.currentIndex])return;const y=c[r.currentIndex].$el,m=y.offsetLeft-(i.offsetWidth-y.offsetWidth)/2;at(i,m,t?0:+e.duration)},B=()=>{const t=r.inited;z(()=>{const i=w.value;if(!i||!i[r.currentIndex]||e.type!=="line"||ve(s.value))return;const c=i[r.currentIndex].$el,{lineWidth:y,lineHeight:m}=e,S=c.offsetLeft+c.offsetWidth/2,_={width:te(y),backgroundColor:e.color,transform:`translateX(${S}px) translateX(-50%)`};if(t&&(_.transitionDuration=`${e.duration}s`),K(m)){const ee=te(m);_.height=ee,_.borderRadius=ee}r.lineStyle=_})},me=t=>{const i=t<r.currentIndex?-1:1;for(;t>=0&&t<v.length;){if(!v[t].disabled)return t;t+=i}},H=(t,i)=>{const c=me(t);if(!K(c))return;const y=v[c],m=$(y,c),S=r.currentIndex!==null;r.currentIndex!==c&&(r.currentIndex=c,i||D(),B()),m!==e.active&&(o("update:active",m),S&&o("change",m,y.title)),a&&!e.scrollspy&&We(Math.ceil(ne(s.value)-F.value))},M=(t,i)=>{const c=v.find((m,S)=>$(m,S)===t),y=c?v.indexOf(c):0;H(y,i)},G=(t=!1)=>{if(e.scrollspy){const i=v[r.currentIndex].$el;if(i&&f.value){const c=ne(i,f.value)-Q.value;n=!0,it(f.value,c,t?0:+e.duration,()=>{n=!1})}}},ye=(t,i,c)=>{const{title:y,disabled:m}=v[i],S=$(v[i],i);m||(Fe(e.beforeChange,{args:[S],done:()=>{H(i),G()}}),Ue(t)),o("clickTab",{name:S,title:y,event:c,disabled:m})},we=t=>{a=t.isFixed,o("scroll",t)},xe=t=>{z(()=>{M(t),G(!0)})},Ce=()=>{for(let t=0;t<v.length;t++){const{top:i}=O(v[t].$el);if(i>Q.value)return t===0?0:t-1}return v.length-1},Se=()=>{if(e.scrollspy&&!n){const t=Ce();H(t)}},Te=()=>v.map((t,i)=>g(vt,Ze({key:t.id,id:`${b}-${i}`,ref:x(i),type:e.type,color:e.color,style:t.titleStyle,class:t.titleClass,shrink:e.shrink,isActive:i===r.currentIndex,controls:t.id,scrollable:R.value,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,onClick:c=>ye(t,i,c)},Ve(t,["dot","badge","title","disabled","showZeroBadge"])),{title:t.$slots.title})),ke=()=>{if(e.type==="line"&&v.length)return g("div",{class:W("line"),style:r.lineStyle},null)},p=()=>{var t,i,c;const{type:y,border:m,sticky:S}=e,_=[g("div",{ref:S?void 0:u,class:[W("wrap"),{[Me]:y==="line"&&m}]},[g("div",{ref:h,role:"tablist",class:W("nav",[y,{shrink:e.shrink,complete:R.value}]),style:V.value,"aria-orientation":"horizontal"},[(t=l["nav-left"])==null?void 0:t.call(l),Te(),ke(),(i=l["nav-right"])==null?void 0:i.call(l)])]),(c=l["nav-bottom"])==null?void 0:c.call(l)];return S?g("div",{ref:u},[_]):_};A([()=>e.color,Le],B),A(()=>e.active,t=>{t!==J.value&&M(t)}),A(()=>v.length,()=>{r.inited&&(M(e.active),B(),z(()=>{D(!0)}))});const Ie=()=>{M(e.active,!0),z(()=>{r.inited=!0,u.value&&(d=O(u.value).height),D(!0)})},Re=(t,i)=>o("rendered",t,i);return Y({resize:()=>{B(),z(()=>{var t,i;return(i=(t=T.value)==null?void 0:t.swipeRef.value)==null?void 0:i.resize()})},scrollTo:xe}),De(B),He(B),le(Ie),ue("scroll",Se,{target:f,passive:!0}),C({id:b,props:e,setLine:B,onRendered:Re,currentName:J,scrollIntoView:D}),()=>g("div",{ref:s,class:W([e.type])},[e.sticky?g(ut,{container:s.value,offsetTop:F.value,onScroll:we},{default:()=>[p()]}):p(),g(bt,{ref:T,count:v.length,inited:r.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:r.currentIndex,onChange:H},{default:()=>{var t;return[(t=l.default)==null?void 0:t.call(l)]}})])}});const yt=Symbol(),[wt,j]=E("tab"),xt=de({},je,{dot:Boolean,name:P,badge:P,title:String,disabled:Boolean,titleClass:qe,titleStyle:[String,Object],showZeroBadge:Z});var Ct=L({name:wt,props:xt,setup(e,{slots:o}){const l=he(),d=I(!1),{parent:n,index:a}=Ke(ge);if(!n)return;const s=()=>{var b;return(b=e.name)!=null?b:a.value},h=()=>{d.value=!0,n.props.lazyRender&&z(()=>{n.onRendered(s(),e.title)})},u=k(()=>{const b=s()===n.currentName.value;return b&&!d.value&&h(),b}),T=I(!u.value);return A(u,b=>{b?T.value=!1:Xe(()=>{T.value=!0})}),A(()=>e.title,()=>{n.setLine(),n.scrollIntoView()}),Ye(yt,u),()=>{var b;const f=`${n.id}-${a.value}`,{animated:w,swipeable:x,scrollspy:v,lazyRender:C}=n.props;if(!o.default&&!w)return;const r=v||u.value;if(w||x)return g(tt,{id:l,role:"tabpanel",class:j("panel-wrapper",{inactive:T.value}),tabindex:u.value?0:-1,"aria-hidden":!u.value,"aria-labelledby":f},{default:()=>{var $;return[g("div",{class:j("panel")},[($=o.default)==null?void 0:$.call(o)])]}});const V=d.value||v||!C?(b=o.default)==null?void 0:b.call(o):null;return Y({id:l}),Je(g("div",{id:l,role:"tabpanel",class:j("panel"),tabindex:r?0:-1,"aria-labelledby":f},[V]),[[Qe,r]])}}});const Rt=X(Ct),$t=X(mt);function St(){return nt.get({url:"/city/all"})}const Bt=Ge("city",{state:()=>({allCities:{},currentCity:{cityName:"北京"}}),actions:{async fetchAllCitiesData(){const e=await St();this.allCities=e.data}}});export{$t as T,Rt as a,he as b,Bt as u};
