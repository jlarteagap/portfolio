import{j as e}from"./jsx-runtime.D_zvdyIk.js";import"./index.Cd_vQiNd.js";import{c as s}from"./createLucideIcon.BYiIDVK1.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],n=s("arrow-right",r);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],i=s("github",o);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],x=s("linkedin",l);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],m=s("mail",d);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],f=s("message-circle",h);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],p=s("twitter",j),y=({social:t})=>{const a={linkedin:e.jsx(x,{size:24}),github:e.jsx(i,{size:24}),twitter:e.jsx(p,{size:24})};return e.jsx("div",{className:"flex mt-12 justify-center gap-4",children:t.map(c=>e.jsx("div",{children:e.jsxs("a",{href:c.url,className:"flex flex-col items-center hover:text-gray-600 transition-colors",target:"_blank",rel:"noreferrer",children:[a[c.name.toLowerCase()],c.name]})},c.name))})},_=({contact:t})=>e.jsxs("div",{className:"flex justify-around mt-12 contact__data flex-col md:flex-row gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(m,{size:32}),e.jsx("h3",{className:"contact__card-title font-bold text-lg",children:"Email"}),e.jsx("span",{className:"font-bold",children:t.email}),e.jsxs("a",{href:`mailto:${t.email}`,target:"_blank",className:"flex justify-center items-center mt-2 hover:text-blue-500",rel:"noreferrer",children:["Escríbeme ",e.jsx(n,{})]})]}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(f,{size:32}),e.jsx("h3",{className:"contact__card-title font-bold text-lg",children:"WhatsApp"}),e.jsxs("span",{className:"font-bold",children:["+",t.phone]}),e.jsxs("a",{href:`https://wa.me/${t.phone}`,target:"_blank",className:"flex justify-center items-center mt-2 hover:text-green-500",rel:"noreferrer",children:["Escríbeme ",e.jsx(n,{})]})]})]}),k=({social:t,contact:a})=>e.jsxs("section",{className:"contact container mx-auto py-12",id:"contacto",children:[e.jsx("div",{className:"text-center",children:e.jsx("h2",{className:"text-4xl font-bold max-sm:text-2xl",children:"Contacta conmigo"})}),e.jsx(_,{contact:a}),e.jsx(y,{social:t})]});export{k as default};
