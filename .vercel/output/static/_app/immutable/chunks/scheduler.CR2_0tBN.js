function b(){}const M=t=>t;function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function A(){return Object.create(null)}function j(t){t.forEach(w)}function E(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function S(t){return Object.keys(t).length===0}function O(t,...n){if(t==null){for(const o of n)o(void 0);return b}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t,n,e){t.$$.on_destroy.push(O(n,e))}function B(t,n,e,o){if(t){const r=y(t,n,e,o);return t[0](r)}}function y(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function C(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],f=Math.max(n.dirty.length,r.length);for(let u=0;u<f;u+=1)a[u]=n.dirty[u]|r[u];return a}return n.dirty|r}return n.dirty}function D(t,n,e,o,r,a){if(r){const f=y(n,e,o,a);t.p(f,r)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t){return t&&E(t.destroy)?t.destroy:b}function I(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let l;function d(t){l=t}function m(){if(!l)throw new Error("Function called outside component initialization");return l}function J(t){m().$$.on_mount.push(t)}function K(t){m().$$.after_update.push(t)}const i=[],p=[];let c=[];const g=[],x=Promise.resolve();let h=!1;function q(){h||(h=!0,x.then(z))}function L(){return q(),x}function v(t){c.push(t)}const _=new Set;let s=0;function z(){if(s!==0)return;const t=l;do{try{for(;s<i.length;){const n=i[s];s++,d(n),F(n.$$)}}catch(n){throw i.length=0,s=0,n}for(d(null),i.length=0,s=0;p.length;)p.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];_.has(e)||(_.add(e),e())}c.length=0}while(i.length);for(;g.length;)g.pop()();h=!1,_.clear(),d(t)}function F(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}function N(t){const n=[],e=[];c.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),c=n}export{k as A,I as a,K as b,U as c,p as d,H as e,v as f,E as g,A as h,M as i,z as j,S as k,N as l,l as m,b as n,J as o,d as p,w as q,j as r,P as s,L as t,i as u,q as v,B as w,D as x,G as y,C as z};
