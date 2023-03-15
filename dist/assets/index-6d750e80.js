(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const L=(t,e)=>(t[e.split("-")[1]]=document.querySelector(e),t),C=["#section-welcome","#section-projects","#section-about"].reduce(L,{}),j=document.getElementById("img-pfp-bg"),q=document.getElementById("img-pfp"),T=document.getElementById("txt-animated"),Y=[...document.querySelectorAll(".project-card")],w=["#ul-navbar","#ul-languages","#ul-environments","#ul-certificates","#ul-socials"].reduce(L,{}),z={navbar:[...w.navbar.querySelectorAll("a")],languages:[],frameworks:[],certificates:[],socials:[]},c={sections:C,pfpBg:j,pfp:q,txt:T,cards:Y,uls:w,links:z},{welcome:K}=c.sections,{pfp:p,pfpBg:M,txt:f}=c,I=["<code/>","() => code;","SELECT * FROM code;"],A=100;let b=!1,y=0;async function N(){await u(5e3),S()}function F(){setInterval(()=>{f.classList.toggle("cursor")},700)}async function S(){b||(F(),b=!0),await u(3e3);let t=setInterval(()=>{f.textContent=f.textContent.slice(0,-1),f.textContent.length===0&&(clearInterval(t),t=null,y=(y+1)%I.length,$())},A)}async function $(){await u(1e3);const t=I[y];let e=0,n=setInterval(async()=>{f.textContent=t.slice(0,e),e+=1,e>t.length&&(clearInterval(n),n=null,S())},A)}const H=[{opacity:0},{opacity:1}],R={duration:200,easing:"ease-out"},i=["translateY(0%) scale(1)","translateY(-5%) scale(0.875, 1.1)","translateY(0%) scale(1)","translateY(-5%) scale(0.875, 1.1)","translateY(0%) scale(1)"],d=["brightness(0.25) drop-shadow(0 -0.25rem 0.5rem black) blur(2px)","brightness(1.0) drop-shadow(0 0.5rem 0.75rem black) blur(0)"],D=[{marginBottom:"15%",transform:i[0],filter:d[0],opacity:0,offset:0},{transform:i[0],offset:.2},{filter:d[0],transform:i[1],opacity:.25,offset:.4},{filter:d[1],transform:i[2],opacity:1,offset:.6},{transform:i[3],offset:.8},{transform:i[4],marginBottom:"7.5%",filter:d[1],offset:1}],G={duration:2e3,easing:"ease-in-out"},J=[{transform:"scale(1)",marginBottom:"7.5%",offset:0},{transform:"scale(0.975, 1.025)",marginBottom:"7.5%",offset:.325},{transform:"scale(1)",marginBottom:"7.5%",offset:1}],Q={duration:4e3,easing:"ease-in-out",iterations:1/0};async function U(){await u(),K.classList.remove("loading"),p.style.transformOrigin="bottom center",g(M,H,R);const t=g(p,D,G);t.onfinish=()=>{g(p,J,Q)}}function g(t,e,n){const o=t.animate(e,{...n,fill:"forwards"});return o.addEventListener("finish",()=>{o.commitStyles(),o.cancel()}),o}function u(t=1e3){return new Promise(e=>{setTimeout(e,t)})}const O=new Promise(async(t,e)=>{try{const o=await(await fetch("svgs.json")).json();t(o)}catch(n){console.log(n),e(null)}});function x(t){return{slug:t.getAttribute("data-slug"),hex:t.getAttribute("data-hex")}}function V(t){const e=[...document.querySelectorAll(".lazy-svg")];for(const n of e){const{slug:o}=x(n);n.children[0].innerHTML=t[o]}}const W=Promise.allSettled([v(c.pfp),v(c.pfpBg)]);function v(t,e=t.getAttribute("data-src")){return t.classList.add("hidden"),t.removeAttribute("data-src"),new Promise((n,o)=>{try{t.onload=()=>{t.onload=null,t.classList.remove("hidden"),n(t)},t.src=e}catch(s){console.log(s),o(null)}})}function X(t){const e=t.getAttribute("data-src");t.removeAttribute("data-src"),t.onload=()=>{t.onload=null,t.classList.remove("hidden")},t.src=e}function Z(){const t=[...document.querySelectorAll("img[data-src]")];for(const e of t)X(e)}let l=null;function B(){this.id!=="profile-link"&&(l==null||l.classList.remove("active"),l=this,l.classList.add("active"))}function _(){for(const n of c.links.navbar.slice(0,-1))n.onclick=B.bind(n);const t=c.links.navbar.at(-1),{slug:e}=x(t);t.classList.remove("lazy-svg"),O.then(n=>{t.children[1].remove(),t.children[0].innerHTML=n[e]})}function tt(){const t=o=>{for(const s of o){const{target:r,isIntersecting:a}=s,{height:m}=s.rootBounds,{y:h,bottom:E}=s.boundingClientRect;if(a&&(h<.75*m&&r.classList.contains("hidden")&&r.classList.remove("hidden"),h<.5*m&&E>.5*m)){const k=c.links.navbar.find(P=>P.href.split("#")[1]===r.id);B.call(k)}}},e={threshold:[...Array(11).keys()].map(o=>o/10)},n=new IntersectionObserver(t,e);for(const o of Object.values(c.sections))n.observe(o)}c.sections.welcome.classList.add("loading");c.sections.projects.classList.add("hidden");c.sections.about.classList.add("hidden");for(const t of c.cards){const e=t.querySelector("img");e==null||e.classList.add("hidden")}_();tt();window.addEventListener("load",()=>{W.then(U),O.then(V),Z(),N()});
