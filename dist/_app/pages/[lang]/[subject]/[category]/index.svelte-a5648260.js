var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(e,n,r)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,a=(t,a)=>{for(var l in a||(a={}))n.call(a,l)&&o(t,l,a[l]);if(e)for(var l of e(a))r.call(a,l)&&o(t,l,a[l]);return t};import{S as l,i as s,s as c,e as i,c as u,a as p,d as f,b as h,f as d,G as m,Q as $,t as g,g as b,F as y,h as v,l as x,B as w,r as E,u as j,v as O,D as k,E as N,j as q,m as H,o as T,w as _,k as M,n as P,R as S,K as D,H as I,p as L,q as A,J as B,A as V}from"../../../../chunks/vendor-e019d8d9.js";import{c as F}from"../../../../chunks/page_tree-6c98b32b.js";import"../../../../chunks/subjects-05510567.js";function G(t){let e;return{c(){e=i("div"),this.h()},l(t){e=u(t,"DIV",{class:!0}),p(e).forEach(f),this.h()},h(){h(e,"class","equation scrollbox svelte-1u2xji")},m(n,r){d(n,e,r),e.innerHTML=t[0]},p(t,[n]){1&n&&(e.innerHTML=t[0])},i:m,o:m,d(t){t&&f(e)}}}function J(t,e,n){let r,{body:o}=e;return t.$$set=t=>{"body"in t&&n(1,o=t.body)},t.$$.update=()=>{2&t.$$.dirty&&n(0,r=$.renderToString(o,{throwOnError:!1,displayMode:!0}))},[r,o]}class K extends l{constructor(t){super(),s(this,t,J,G,c,{body:1})}}function Q(t){let e,n;return{c(){e=i("p"),n=g(t[0]),this.h()},l(r){e=u(r,"P",{class:!0});var o=p(e);n=b(o,t[0]),o.forEach(f),this.h()},h(){h(e,"class","svelte-190pcvv")},m(t,r){d(t,e,r),y(e,n)},p(t,[e]){1&e&&v(n,t[0])},i:m,o:m,d(t){t&&f(e)}}}function R(t,e,n){let{body:r}=e;return t.$$set=t=>{"body"in t&&n(0,r=t.body)},[r]}class z extends l{constructor(t){super(),s(this,t,R,Q,c,{body:0})}}function C(t){let e;return{c(){e=i("span"),this.h()},l(t){e=u(t,"SPAN",{class:!0}),p(e).forEach(f),this.h()},h(){h(e,"class","inline svelte-auoy6n")},m(n,r){d(n,e,r),e.innerHTML=t[0]},p(t,[n]){1&n&&(e.innerHTML=t[0])},i:m,o:m,d(t){t&&f(e)}}}function U(t,e,n){let r,{body:o}=e;return t.$$set=t=>{"body"in t&&n(1,o=t.body)},t.$$.update=()=>{2&t.$$.dirty&&n(0,r=$.renderToString(o,{throwOnError:!1}))},[r,o]}class W extends l{constructor(t){super(),s(this,t,U,C,c,{body:1})}}function X(t){let e,n;const r=t[4].default,o=k(r,t,t[3],null);return{c(){e=i("div"),o&&o.c()},l(t){e=u(t,"DIV",{});var n=p(e);o&&o.l(n),n.forEach(f)},m(t,r){d(t,e,r),o&&o.m(e,null),n=!0},p(t,e){o&&o.p&&(!n||8&e)&&N(o,r,t,t[3],n?e:-1,null,null)},i(t){n||(O(o,t),n=!0)},o(t){E(o,t),n=!1},d(t){t&&f(e),o&&o.d(t)}}}function Y(t){let e,n,r;const o=t[4].default,a=k(o,t,t[3],null);return{c(){e=i("a"),a&&a.c(),this.h()},l(t){e=u(t,"A",{href:!0,target:!0,class:!0});var n=p(e);a&&a.l(n),n.forEach(f),this.h()},h(){h(e,"href",t[0]),h(e,"target",n=t[2]?"_blank":"_self"),h(e,"class","svelte-1jaxqwo")},m(t,n){d(t,e,n),a&&a.m(e,null),r=!0},p(t,l){a&&a.p&&(!r||8&l)&&N(a,o,t,t[3],r?l:-1,null,null),(!r||1&l)&&h(e,"href",t[0]),(!r||4&l&&n!==(n=t[2]?"_blank":"_self"))&&h(e,"target",n)},i(t){r||(O(a,t),r=!0)},o(t){E(a,t),r=!1},d(t){t&&f(e),a&&a.d(t)}}}function Z(t){let e,n,r,o;const a=[Y,X],l=[];function s(t,e){return t[1]?0:1}return e=s(t),n=l[e]=a[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){l[e].m(t,n),d(t,r,n),o=!0},p(t,[o]){let c=e;e=s(t),e===c?l[e].p(t,o):(w(),E(l[c],1,1,(()=>{l[c]=null})),j(),n=l[e],n?n.p(t,o):(n=l[e]=a[e](t),n.c()),O(n,1),n.m(r.parentNode,r))},i(t){o||(O(n),o=!0)},o(t){E(n),o=!1},d(t){l[e].d(t),t&&f(r)}}}function tt(t,e,n){let{$$slots:r={},$$scope:o}=e,{url:a}=e,{active:l}=e,{external:s=!1}=e;return t.$$set=t=>{"url"in t&&n(0,a=t.url),"active"in t&&n(1,l=t.active),"external"in t&&n(2,s=t.external),"$$scope"in t&&n(3,o=t.$$scope)},[a,l,s,o,r]}class et extends l{constructor(t){super(),s(this,t,tt,Z,c,{url:0,active:1,external:2})}}function nt(t,e,n){const r=t.slice();return r[7]=e[n],r}function rt(t){let e,n,r;var o=t[4][t[7].component];function a(t){return{props:{body:t[7].body,compact:t[0]}}}return o&&(e=new o(a(t))),{c(){e&&q(e.$$.fragment),n=x()},l(t){e&&H(e.$$.fragment,t),n=x()},m(t,o){e&&T(e,t,o),d(t,n,o),r=!0},p(t,r){const l={};if(2&r&&(l.body=t[7].body),1&r&&(l.compact=t[0]),o!==(o=t[4][t[7].component])){if(e){w();const t=e;E(t.$$.fragment,1,0,(()=>{_(t,1)})),j()}o?(e=new o(a(t)),q(e.$$.fragment),O(e.$$.fragment,1),T(e,n.parentNode,n)):e=null}else o&&e.$set(l)},i(t){r||(e&&O(e.$$.fragment,t),r=!0)},o(t){e&&E(e.$$.fragment,t),r=!1},d(t){t&&f(n),e&&_(e,t)}}}function ot(t){let e,n,r,o,a,l=t[1],s=[];for(let i=0;i<l.length;i+=1)s[i]=rt(nt(t,l,i));const c=t=>E(s[t],1,1,(()=>{s[t]=null}));return{c(){e=i("div"),n=i("h2"),r=g(t[2]),o=M();for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(a){e=u(a,"DIV",{class:!0});var l=p(e);n=u(l,"H2",{});var c=p(n);r=b(c,t[2]),c.forEach(f),o=P(l);for(let t=0;t<s.length;t+=1)s[t].l(l);l.forEach(f),this.h()},h(){h(e,"class",S(t[5]?"normal-border":"non-interactive")+" svelte-12tbl0w"),D(e,"compact",t[0])},m(t,l){d(t,e,l),y(e,n),y(n,r),y(e,o);for(let n=0;n<s.length;n+=1)s[n].m(e,null);a=!0},p(t,n){if((!a||4&n)&&v(r,t[2]),19&n){let r;for(l=t[1],r=0;r<l.length;r+=1){const o=nt(t,l,r);s[r]?(s[r].p(o,n),O(s[r],1)):(s[r]=rt(o),s[r].c(),O(s[r],1),s[r].m(e,null))}for(w(),r=l.length;r<s.length;r+=1)c(r);j()}1&n&&D(e,"compact",t[0])},i(t){if(!a){for(let t=0;t<l.length;t+=1)O(s[t]);a=!0}},o(t){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)E(s[e]);a=!1},d(t){t&&f(e),I(s,t)}}}function at(t){let e,n;return e=new et({props:{active:t[5],url:t[3],external:t[6],$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){q(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){T(e,t,r),n=!0},p(t,[n]){const r={};8&n&&(r.url=t[3]),1031&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}function lt(t,e,n){const r={text:z,equation:K,inline_equation:W};let{compact:o=!1}=e,{parts:a}=e,{header:l}=e,{url:s}=e,c=!s.includes("NONE"),i=s.includes("http");return t.$$set=t=>{"compact"in t&&n(0,o=t.compact),"parts"in t&&n(1,a=t.parts),"header"in t&&n(2,l=t.header),"url"in t&&n(3,s=t.url)},[o,a,l,s,r,c,i]}class st extends l{constructor(t){super(),s(this,t,lt,at,c,{compact:0,parts:1,header:2,url:3})}}function ct(t,e,n){const r=t.slice();return r[3]=e[n],r}function it(t){let e,n,r=t[1],o=[];for(let l=0;l<r.length;l+=1)o[l]=ut(ct(t,r,l));const a=t=>E(o[t],1,1,(()=>{o[t]=null}));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=x()},l(t){for(let e=0;e<o.length;e+=1)o[e].l(t);e=x()},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);d(t,e,r),n=!0},p(t,n){if(3&n){let l;for(r=t[1],l=0;l<r.length;l+=1){const a=ct(t,r,l);o[l]?(o[l].p(a,n),O(o[l],1)):(o[l]=ut(a),o[l].c(),O(o[l],1),o[l].m(e.parentNode,e))}for(w(),l=r.length;l<o.length;l+=1)a(l);j()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)O(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)E(o[e]);n=!1},d(t){I(o,t),t&&f(e)}}}function ut(t){let e,n;const r=[t[3],{compact:t[0]}];let o={};for(let a=0;a<r.length;a+=1)o=V(o,r[a]);return e=new st({props:o}),{c(){q(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){T(e,t,r),n=!0},p(t,n){const o=3&n?L(r,[2&n&&A(t[3]),1&n&&{compact:t[0]}]):{};e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){_(e,t)}}}function pt(t){let e,n,r,o;document.title=e=" "+t[2]+" ";let a=t[1]&&it(t);return{c(){n=M(),a&&a.c(),r=x()},l(t){B('[data-svelte="svelte-1w02k1y"]',document.head).forEach(f),n=P(t),a&&a.l(t),r=x()},m(t,e){d(t,n,e),a&&a.m(t,e),d(t,r,e),o=!0},p(t,[n]){(!o||4&n)&&e!==(e=" "+t[2]+" ")&&(document.title=e),t[1]?a?(a.p(t,n),2&n&&O(a,1)):(a=it(t),a.c(),O(a,1),a.m(r.parentNode,r)):a&&(w(),E(a,1,1,(()=>{a=null})),j())},i(t){o||(O(a),o=!0)},o(t){E(a),o=!1},d(t){t&&f(n),a&&a.d(t),t&&f(r)}}}async function ft(t){let{lang:e,subject:n,category:r}=t.page.params,o=t.page.query.has("compact");return{props:a({compact:o},F(e,n,r))}}function ht(t,e,n){let{compact:r}=e,{paragraphs:o}=e,{header:a}=e;return t.$$set=t=>{"compact"in t&&n(0,r=t.compact),"paragraphs"in t&&n(1,o=t.paragraphs),"header"in t&&n(2,a=t.header)},[r,o,a]}export default class extends l{constructor(t){super(),s(this,t,ht,pt,c,{compact:0,paragraphs:1,header:2})}}export{ft as load};
