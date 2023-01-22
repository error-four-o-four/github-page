import{r as i,a as S,R as w}from"./vendor-b4b31b10.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();var l={},C={get exports(){return l},set exports(o){l=o}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T=i,b=Symbol.for("react.element"),A=Symbol.for("react.fragment"),D=Object.prototype.hasOwnProperty,N=T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function L(o,t,s){var n,e={},r=null,c=null;s!==void 0&&(r=""+s),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(c=t.ref);for(n in t)D.call(t,n)&&!j.hasOwnProperty(n)&&(e[n]=t[n]);if(o&&o.defaultProps)for(n in t=o.defaultProps,t)e[n]===void 0&&(e[n]=t[n]);return{$$typeof:b,type:o,key:r,ref:c,props:e,_owner:N.current}}u.Fragment=A;u.jsx=L;u.jsxs=L;(function(o){o.exports=u})(C);const a=l.jsx,R=l.jsxs;var m={},y={},P={get exports(){return y},set exports(o){y=o}};(function(o){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(s){console.error(s)}}t(),o.exports=S})(P);var O=y;m.createRoot=O.createRoot,m.hydrateRoot=O.hydrateRoot;const $="./audio/",k="heater-1 heater-2 heater-3 heater-4 hat-closed hat-open clap kick-and-hat kick".split(" "),B="q w e a s d z x c".split(" "),I=k.map((o,t)=>{const s=B[t],n=`${$}${o}.mp3`;return{name:o,file:n,key:s}},{});function K({props:o,setDisplay:t}){const{name:s,file:n,key:e}=o,r=i.useRef(),[c,x]=i.useState(!1),[f,_]=i.useState(!1),p=i.useCallback(()=>{!c||r.current===null||(f&&(r.current.currentTime=0),_(!0),t(s),r.current.play())},[c,f,t,s]);return i.useEffect(()=>{const d=r.current,h=g=>g.key===e&&p(),v=()=>{x(!0)},E=()=>{_(!1),t(" "),d.currentTime=0};return d.addEventListener("canplay",v),d.addEventListener("ended",E),window.addEventListener("keydown",h),()=>{d.removeEventListener("canplay",v),d.removeEventListener("ended",E),window.removeEventListener("keydown",h)}},[e,p,t]),R("button",{id:s,type:"button",value:e,className:`drum-pad ${f?"playing":""}`,onClick:p,children:[a("audio",{ref:r,id:e,className:"clip",src:n}),c?e.toLocaleUpperCase():"..."]},e)}function q(){const[o,t]=i.useState(" "),s=i.useRef();return i.useEffect(()=>{console.log(k)},[]),R("div",{id:"drum-machine",className:"App",children:[a("div",{id:"display",ref:s,children:o}),a("div",{className:"pads-wrap",children:I.map(n=>a(K,{props:n,setDisplay:t},n.key))})]})}m.createRoot(document.getElementById("root")).render(a(w.StrictMode,{children:a(q,{})}));