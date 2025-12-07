import{j as e}from"./jsx-runtime.D_zvdyIk.js";import"./index.Cd_vQiNd.js";import{c as s}from"./createLucideIcon.BYiIDVK1.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],x=s("award",p);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],f=s("calendar",h);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],b=s("trending-up",g);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],r=s("users",u);function N(){const t=[{label:"Participantes",value:"45",icon:r},{label:"Coreografías",value:"50+",icon:x},{label:"Bailarines",value:"500+",icon:r},{label:"Reducción de tiempo",value:"58%",icon:b}],o=["Next.js","React","TypeScript","TailwindCSS","Shadcn/UI","Firebase","Firestore","Auth","Storage","Yup","React Hook Form","Vercel"],n=["Registro manual que consumía demasiado tiempo","Datos no centralizados","Panel administrativo limitado (2024)","Reportes generados manualmente","Desactivación manual del evento","Código no utilizado acumulado"],l=[{title:"Landing Page",description:"Diseño visual orientado a conversión con información clara y carga optimizada"},{title:"Sistema de Registro",description:"Formulario rediseñado con validación robusta y subida automática de documentos"},{title:"Panel Admin + Dashboard",description:"Gestión completa con filtros, búsqueda en tiempo real y métricas visuales"},{title:"Cierre Automático",description:"Desactivación automática del registro al finalizar el plazo"},{title:"Depuración del Código",description:"Eliminación de componentes no utilizados y preparación para reutilización"}],c=[{metric:"100%",description:"Registros centralizados"},{metric:"70%",description:"Reducción de tareas manuales"},{metric:"Segundos",description:"Generación de reportes"},{metric:"58%",description:"Mejora en tiempo de carga"}],d=["La importancia de construir sistemas reutilizables año tras año","Mantener la arquitectura lo más limpia y escalable posible","Integrar validaciones desde el inicio para evitar errores posteriores","Diseñar dashboards enfocados en información accionable"],m=["Implementar pagos online (Stripe)","Módulo de acreditaciones para el evento","Estados avanzados de revisión","Credenciales imprimibles automáticas","API interna para aplicaciones móviles"];return e.jsxs(e.Fragment,{children:[e.jsx("style",{jsx:!0,children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text',
            'Helvetica Neue', sans-serif;
        }

        .case-study-container {
          background: #fafafa;
          min-height: 100vh;
          padding: 4rem 0;
        }

        /* Hero Header */
        .hero-header {
          background: linear-gradient(135deg, #ffffff 0%, #f5f5f7 100%);
          border-radius: 24px;
          padding: 4rem;
          margin-bottom: 3rem;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hero-header:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #1d1d1f;
          line-height: 1.1;
          margin-bottom: 0.75rem;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 400;
          color: #6e6e73;
          letter-spacing: -0.01em;
        }

        .hero-meta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.03);
          border-radius: 8px;
          font-size: 0.95rem;
          color: #6e6e73;
          margin-top: 1.5rem;
        }

        /* Section Titles */
        .section-title {
          font-size: 2.25rem;
          font-weight: 600;
          letter-spacing: -0.015em;
          color: #1d1d1f;
          margin-bottom: 2rem;
        }

        .section-description {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #515154;
          font-weight: 400;
        }

        /* Metric Cards */
        .metric-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.06);
          height: 100%;
        }

        .metric-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
          border-color: #007aff;
        }

        .metric-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #007aff 0%, #0051d5 100%);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
          color: white;
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }

        .metric-card:hover .metric-icon {
          transform: scale(1.05);
        }

        .metric-value {
          font-size: 2.75rem;
          font-weight: 700;
          color: #1d1d1f;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }

        .metric-label {
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #86868b;
        }

        /* Tech Stack */
        .tech-tag {
          display: inline-flex;
          align-items: center;
          padding: 0.625rem 1.125rem;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #1d1d1f;
          margin: 0.375rem;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
        }

        .tech-tag:hover {
          background: #007aff;
          color: #ffffff;
          border-color: #007aff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 122, 255, 0.2);
        }

        /* Content Cards */
        .content-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .content-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
        }

        /* Problem Items */
        .problem-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem;
          background: #f5f5f7;
          border-radius: 12px;
          margin-bottom: 0.75rem;
          border-left: 3px solid #007aff;
          transition: all 0.2s ease;
        }

        .problem-item:hover {
          background: #ebebed;
          border-left-width: 4px;
        }

        .problem-number {
          width: 28px;
          height: 28px;
          background: #007aff;
          color: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          font-weight: 600;
          flex-shrink: 0;
        }

        /* Opportunity Box */
        .opportunity-box {
          background: linear-gradient(135deg, #007aff 0%, #0051d5 100%);
          color: white;
          padding: 2rem;
          border-radius: 16px;
          margin-top: 2rem;
          box-shadow: 0 8px 24px rgba(0, 122, 255, 0.2);
        }

        .opportunity-box p {
          font-size: 1.125rem;
          font-weight: 500;
          line-height: 1.6;
        }

        /* Objectives Boxes */
        .objectives-box {
          background: #ffffff;
          border-radius: 16px;
          padding: 2.5rem;
          height: 100%;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .objectives-box:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .objectives-box.inverted {
          background: linear-gradient(135deg, #1d1d1f 0%, #2d2d2f 100%);
          color: #ffffff;
        }

        .objectives-box ul {
          list-style: none;
          padding: 0;
        }

        .objectives-box li {
          padding: 0.875rem 0;
          padding-left: 2rem;
          position: relative;
          font-size: 1rem;
          line-height: 1.5;
        }

        .objectives-box li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #007aff;
          font-weight: 700;
          font-size: 1.125rem;
        }

        .objectives-box.inverted li::before {
          color: #0a84ff;
        }

        /* Solution Items */
        .solution-item {
          background: #ffffff;
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 1rem;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .solution-item:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
          border-color: #007aff;
        }

        .solution-number {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #007aff 0%, #0051d5 100%);
          color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .solution-title {
          font-size: 1.375rem;
          font-weight: 600;
          color: #1d1d1f;
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }

        .solution-description {
          font-size: 1rem;
          color: #515154;
          line-height: 1.6;
        }

        /* Results Section */
        .results-section {
          background: linear-gradient(135deg, #1d1d1f 0%, #2d2d2f 100%);
          color: #ffffff;
          padding: 4rem;
          border-radius: 24px;
          margin: 3rem 0;
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12);
        }

        .result-item {
          text-align: center;
          padding: 0 2rem;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .result-item:last-child {
          border-right: none;
        }

        .result-metric {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #ffffff 0%, #b8b8b8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .result-description {
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #86868b;
          font-weight: 500;
        }

        /* Learning Items */
        .learning-item {
          background: #ffffff;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          border-left: 4px solid #007aff;
          transition: all 0.2s ease;
        }

        .learning-item:hover {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          transform: translateX(4px);
        }

        .learning-item p {
          font-size: 1rem;
          color: #1d1d1f;
          line-height: 1.6;
          margin: 0;
        }

        /* Next Steps */
        .next-step-item {
          background: #ffffff;
          border-radius: 12px;
          padding: 1.5rem;
          height: 100%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .next-step-item:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
          border-color: #007aff;
        }

        .step-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #007aff 0%, #0051d5 100%);
          color: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
          font-size: 1.125rem;
        }

        /* Conclusion Items */
        .conclusion-item {
          background: #ffffff;
          border-radius: 12px;
          padding: 1.5rem;
          height: 100%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .conclusion-item:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .conclusion-item p {
          font-size: 1rem;
          font-weight: 500;
          color: #1d1d1f;
          margin: 0;
        }

        /* Spacing */
        .section-spacing {
          margin-bottom: 5rem;
        }

        .content-spacing {
          margin-bottom: 3rem;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-header {
            padding: 2.5rem;
          }

          .section-title {
            font-size: 1.875rem;
          }

          .result-metric {
            font-size: 2.5rem;
          }
        }
      `}),e.jsx("div",{className:"case-study-container",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("div",{className:"hero-header",children:e.jsxs("div",{className:"flex items-start gap-6",children:[e.jsx("div",{style:{fontSize:"3.5rem"},children:"🩰"}),e.jsxs("div",{children:[e.jsx("h1",{className:"hero-title",children:"Plataforma Danzacruz 2025"}),e.jsx("p",{className:"hero-subtitle",children:"Caso de Estudio — Desarrollador Full Stack"}),e.jsxs("div",{className:"hero-meta",children:[e.jsx("span",{className:"flex items-center justify-center",children:e.jsx(f,{size:16})}),e.jsx("span",{children:"Junio – Noviembre 2025"})]})]})]})}),e.jsx("div",{className:"relative p-5 m-auto w-[70%] h-[600px]",children:e.jsx("img",{src:"/images/projects/danzacruz-2025.jpg",alt:"Danzacruz 2025",style:{width:"100%",height:"100%",objectFit:"cover"}})}),e.jsxs("div",{className:"section-spacing",children:[e.jsx("h2",{className:"section-title",children:"Resumen del Proyecto"}),e.jsx("p",{className:"section-description",children:"Danzacruz es uno de los festivales de danza más grandes del país. El desafío del 2025 fue crear una plataforma moderna que permitiera registrar participantes y coreografías de manera simple, facilitar la gestión interna del evento y automatizar procesos que antes se hacían manualmente."})]}),e.jsx("div",{className:"section-spacing",children:e.jsx("div",{className:"flex flex-wrap -mx-4",children:t.map((i,a)=>e.jsx("div",{className:"w-full md:w-1/4 px-4 mb-4",children:e.jsxs("div",{className:"metric-card",children:[e.jsx("div",{className:"metric-icon",children:e.jsx(i.icon,{size:24})}),e.jsx("div",{className:"metric-value",children:i.value}),e.jsx("div",{className:"metric-label",children:i.label})]})},a))})}),e.jsx("div",{className:"relative p-5 m-auto w-[70%] h-[600px]",children:e.jsx("img",{src:"/images/projects/danzacruz-2025-1.jpg",alt:"Danzacruz 2025",style:{width:"100%",height:"100%",objectFit:"cover"}})}),e.jsxs("div",{className:"section-spacing",children:[e.jsx("h2",{className:"section-title",children:"Tecnologías Utilizadas"}),e.jsx("div",{children:o.map((i,a)=>e.jsx("span",{className:"tech-tag",children:i},a))})]}),e.jsxs("div",{className:"section-spacing",children:[e.jsx("h2",{className:"section-title",children:"El Problema"}),n.map((i,a)=>e.jsxs("div",{className:"problem-item",children:[e.jsx("div",{className:"problem-number",children:a+1}),e.jsx("p",{children:i})]},a)),e.jsx("div",{className:"opportunity-box",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Oportunidad:"})," Crear un sistema más robusto, limpio y automatizado que sirva como base para todas las ediciones futuras."]})})]}),e.jsxs("div",{className:"section-spacing",children:[e.jsx("h2",{className:"section-title",children:"Objetivos del Proyecto"}),e.jsxs("div",{className:"flex flex-wrap -mx-4",children:[e.jsx("div",{className:"w-full md:w-1/2 px-4 mb-4",children:e.jsxs("div",{className:"objectives-box",children:[e.jsx("h3",{className:"font-bold text-xl mb-4",children:"Objetivos Funcionales"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Modernizar el registro"}),e.jsx("li",{children:"Panel con métricas y filtros"}),e.jsx("li",{children:"Reportes automáticos en tiempo real"}),e.jsx("li",{children:"Sistema de cierre automático"}),e.jsx("li",{children:"Preparar para reutilización anual"})]})]})}),e.jsx("div",{className:"w-full md:w-1/2 px-4 mb-4",children:e.jsxs("div",{className:"objectives-box inverted",children:[e.jsx("h3",{className:"font-bold text-xl mb-4 text-white",children:"Objetivos Técnicos"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Reestructurar y eliminar código muerto"}),e.jsx("li",{children:"Diseño UI/UX más profesional"}),e.jsx("li",{children:"Optimizar base de datos y rendimiento"}),e.jsx("li",{children:"Arquitectura escalable"})]})]})})]})]}),e.jsx("div",{className:"relative p-5 m-auto w-[70%] h-[600px]",children:e.jsx("img",{src:"/images/projects/danzacruz-2025-2.jpg",alt:"Danzacruz 2025",style:{width:"100%",height:"100%",objectFit:"cover"}})}),e.jsxs("div",{className:"section-spacing",children:[e.jsx("h2",{className:"section-title",children:"La Solución"}),l.map((i,a)=>e.jsx("div",{className:"solution-item",children:e.jsxs("div",{className:"flex gap-6 items-start",children:[e.jsx("div",{className:"solution-number",children:a+1}),e.jsxs("div",{children:[e.jsx("h3",{className:"solution-title",children:i.title}),e.jsx("p",{className:"solution-description",children:i.description})]})]})},a))]}),e.jsxs("div",{className:"results-section",children:[e.jsx("h2",{className:"section-title text-white",children:"Resultados"}),e.jsx("div",{className:"flex flex-wrap -mx-4",children:c.map((i,a)=>e.jsx("div",{className:"w-full md:w-1/4 px-4 mb-4",children:e.jsxs("div",{className:"result-item",children:[e.jsx("div",{className:"result-metric",children:i.metric}),e.jsx("div",{className:"result-description",children:i.description})]})},a))})]}),e.jsxs("div",{className:"section-spacing",children:[e.jsx("h2",{className:"section-title",children:"Aprendizajes Clave"}),d.map((i,a)=>e.jsx("div",{className:"learning-item",children:e.jsx("p",{children:i})},a))]}),e.jsxs("div",{className:"section-spacing",children:[e.jsx("h2",{className:"section-title",children:"Próximos Pasos (2026)"}),e.jsx("div",{className:"flex flex-wrap -mx-4",children:m.map((i,a)=>e.jsx("div",{className:`w-full px-4 mb-4 ${a===4?"md:w-full":"md:w-1/2"}`,children:e.jsxs("div",{className:"next-step-item",children:[e.jsx("div",{className:"step-number",children:a+1}),e.jsx("p",{children:i})]})},a))})]}),e.jsxs("div",{className:"section-spacing",children:[e.jsx("h2",{className:"section-title",children:"Conclusión"}),e.jsx("p",{className:"section-description content-spacing",children:"El proyecto Danzacruz 2025 representa una evolución completa respecto al sistema desarrollado en 2024. No solo moderniza el proceso de registro y gestión, sino que crea una base tecnológica sólida para todas las futuras ediciones del festival."}),e.jsxs("div",{className:"flex flex-wrap -mx-4",children:[e.jsx("div",{className:"w-full md:w-1/2 px-4 mb-4",children:e.jsx("div",{className:"conclusion-item",children:e.jsx("p",{children:"✓ Diseñar soluciones para eventos masivos"})})}),e.jsx("div",{className:"w-full md:w-1/2 px-4 mb-4",children:e.jsx("div",{className:"conclusion-item",children:e.jsx("p",{children:"✓ Construir plataformas completas end-to-end"})})}),e.jsx("div",{className:"w-full md:w-1/2 px-4 mb-4",children:e.jsx("div",{className:"conclusion-item",children:e.jsx("p",{children:"✓ Optimizar procesos y automatizar tareas"})})}),e.jsx("div",{className:"w-full md:w-1/2 px-4 mb-4",children:e.jsx("div",{className:"conclusion-item",children:e.jsx("p",{children:"✓ Documentar proyectos para reutilización"})})})]})]})]})})]})}export{N as default};
