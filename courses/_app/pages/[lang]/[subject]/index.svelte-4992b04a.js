import{S as e,i as t,s,l as a,f as r,v as n,e as o,j as l,k as c,c as f,a as i,m as h,n as u,d,b as m,o as g,F as p,p as $,q as v,r as j,w as k,u as b,H as x,J as N,B as w,A as B}from"../../../chunks/vendor-e019d8d9.js";import{b as y}from"../../../chunks/page_tree-fe00cf29.js";import{N as E}from"../../../chunks/NavCard-060a73d8.js";import"../../../chunks/subjects-c8d8fa51.js";function q(e,t,s){const a=e.slice();return a[2]=t[s],a}function A(e){let t,s,o=e[0],l=[];for(let a=0;a<o.length;a+=1)l[a]=C(q(e,o,a));const c=e=>j(l[e],1,1,(()=>{l[e]=null}));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=a()},l(e){for(let t=0;t<l.length;t+=1)l[t].l(e);t=a()},m(e,a){for(let t=0;t<l.length;t+=1)l[t].m(e,a);r(e,t,a),s=!0},p(e,s){if(1&s){let a;for(o=e[0],a=0;a<o.length;a+=1){const r=q(e,o,a);l[a]?(l[a].p(r,s),n(l[a],1)):(l[a]=C(r),l[a].c(),n(l[a],1),l[a].m(t.parentNode,t))}for(w(),a=o.length;a<l.length;a+=1)c(a);b()}},i(e){if(!s){for(let e=0;e<o.length;e+=1)n(l[e]);s=!0}},o(e){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)j(l[t]);s=!1},d(e){x(l,e),e&&d(t)}}}function C(e){let t,s,a,b;const x=[e[2]];let N={};for(let r=0;r<x.length;r+=1)N=B(N,x[r]);return s=new E({props:N}),{c(){t=o("div"),l(s.$$.fragment),a=c(),this.h()},l(e){t=f(e,"DIV",{class:!0});var r=i(t);h(s.$$.fragment,r),a=u(r),r.forEach(d),this.h()},h(){m(t,"class","cardholder svelte-gx01xt")},m(e,n){r(e,t,n),g(s,t,null),p(t,a),b=!0},p(e,t){const a=1&t?$(x,[v(e[2])]):{};s.$set(a)},i(e){b||(n(s.$$.fragment,e),b=!0)},o(e){j(s.$$.fragment,e),b=!1},d(e){e&&d(t),k(s)}}}function D(e){let t,s,l,i,h,m;document.title=t=" "+e[1]+" ";let g=e[0]&&A(e);return{c(){s=c(),l=o("br"),i=c(),g&&g.c(),h=a()},l(e){N('[data-svelte="svelte-1w02k1y"]',document.head).forEach(d),s=u(e),l=f(e,"BR",{}),i=u(e),g&&g.l(e),h=a()},m(e,t){r(e,s,t),r(e,l,t),r(e,i,t),g&&g.m(e,t),r(e,h,t),m=!0},p(e,[s]){(!m||2&s)&&t!==(t=" "+e[1]+" ")&&(document.title=t),e[0]?g?(g.p(e,s),1&s&&n(g,1)):(g=A(e),g.c(),n(g,1),g.m(h.parentNode,h)):g&&(w(),j(g,1,1,(()=>{g=null})),b())},i(e){m||(n(g),m=!0)},o(e){j(g),m=!1},d(e){e&&d(s),e&&d(l),e&&d(i),g&&g.d(e),e&&d(h)}}}async function F(e){let{lang:t,subject:s}=e.page.params;return{props:y(t,s)}}function H(e,t,s){let{categories:a}=t,{header:r}=t;return e.$$set=e=>{"categories"in e&&s(0,a=e.categories),"header"in e&&s(1,r=e.header)},[a,r]}export default class extends e{constructor(e){super(),t(this,e,H,D,s,{categories:0,header:1})}}export{F as load};
