/* eslint-disable react/no-unknown-property */
import React from 'react'
import Image from 'next/image'
import { Users, Award, TrendingUp, Calendar } from 'lucide-react'

export default function DanzacruzCaseStudy() {
  const metrics = [
    { label: 'Participantes', value: '45', icon: Users },
    { label: 'Coreografías', value: '50+', icon: Award },
    { label: 'Bailarines', value: '500+', icon: Users },
    { label: 'Reducción de tiempo', value: '58%', icon: TrendingUp }
  ]

  const techStack = [
    'Next.js',
    'React',
    'TypeScript',
    'TailwindCSS',
    'Shadcn/UI',
    'Firebase',
    'Firestore',
    'Auth',
    'Storage',
    'Yup',
    'React Hook Form',
    'Vercel'
  ]

  const problems = [
    'Registro manual que consumía demasiado tiempo',
    'Datos no centralizados',
    'Panel administrativo limitado (2024)',
    'Reportes generados manualmente',
    'Desactivación manual del evento',
    'Código no utilizado acumulado'
  ]

  const solutions = [
    {
      title: 'Landing Page',
      description:
        'Diseño visual orientado a conversión con información clara y carga optimizada'
    },
    {
      title: 'Sistema de Registro',
      description:
        'Formulario rediseñado con validación robusta y subida automática de documentos'
    },
    {
      title: 'Panel Admin + Dashboard',
      description:
        'Gestión completa con filtros, búsqueda en tiempo real y métricas visuales'
    },
    {
      title: 'Cierre Automático',
      description: 'Desactivación automática del registro al finalizar el plazo'
    },
    {
      title: 'Depuración del Código',
      description:
        'Eliminación de componentes no utilizados y preparación para reutilización'
    }
  ]

  const results = [
    { metric: '100%', description: 'Registros centralizados' },
    { metric: '70%', description: 'Reducción de tareas manuales' },
    { metric: 'Segundos', description: 'Generación de reportes' },
    { metric: '58%', description: 'Mejora en tiempo de carga' }
  ]

  const learnings = [
    'La importancia de construir sistemas reutilizables año tras año',
    'Mantener la arquitectura lo más limpia y escalable posible',
    'Integrar validaciones desde el inicio para evitar errores posteriores',
    'Diseñar dashboards enfocados en información accionable'
  ]

  const nextSteps = [
    'Implementar pagos online (Stripe)',
    'Módulo de acreditaciones para el evento',
    'Estados avanzados de revisión',
    'Credenciales imprimibles automáticas',
    'API interna para aplicaciones móviles'
  ]

  return (
    <>
      <style jsx>{`
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
      `}</style>

      <div className="case-study-container">
        <div className="container mx-auto px-4">
          {/* Hero Header */}
          <div className="hero-header">
            <div className="flex items-start gap-6">
              <div style={{ fontSize: '3.5rem' }}>🩰</div>
              <div>
                <h1 className="hero-title">Plataforma Danzacruz 2025</h1>
                <p className="hero-subtitle">
                  Caso de Estudio — Desarrollador Full Stack
                </p>
                <div className="hero-meta">
                  <span className="flex items-center justify-center">
                    <Calendar size={16} />
                  </span>
                  <span>Junio – Noviembre 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Resumen */}
          <div className="relative p-5 m-auto w-[70%] h-[600px]">
            <Image
              src="/images/projects/danzacruz-2025.jpg"
              alt="Danzacruz 2025"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="section-spacing">
            <h2 className="section-title">Resumen del Proyecto</h2>
            <p className="section-description">
              Danzacruz es uno de los festivales de danza más grandes del país.
              El desafío del 2025 fue crear una plataforma moderna que
              permitiera registrar participantes y coreografías de manera
              simple, facilitar la gestión interna del evento y automatizar
              procesos que antes se hacían manualmente.
            </p>
          </div>

          {/* Métricas */}
          <div className="section-spacing">
            <div className="flex flex-wrap -mx-4">
              {metrics.map((metric, index) => (
                <div key={index} className="w-full md:w-1/4 px-4 mb-4">
                  <div className="metric-card">
                    <div className="metric-icon">
                      <metric.icon size={24} />
                    </div>
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="relative p-5 m-auto w-[70%] h-[600px]">
            <Image
              src="/images/projects/danzacruz-2025-1.jpg"
              alt="Danzacruz 2025"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="section-spacing">
            <h2 className="section-title">Tecnologías Utilizadas</h2>
            <div>
              {techStack.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* El Problema */}
          <div className="section-spacing">
            <h2 className="section-title">El Problema</h2>
            {problems.map((problem, index) => (
              <div key={index} className="problem-item">
                <div className="problem-number">{index + 1}</div>
                <p>{problem}</p>
              </div>
            ))}
            <div className="opportunity-box">
              <p>
                <strong>Oportunidad:</strong> Crear un sistema más robusto,
                limpio y automatizado que sirva como base para todas las
                ediciones futuras.
              </p>
            </div>
          </div>

          {/* Objetivos */}
          <div className="section-spacing">
            <h2 className="section-title">Objetivos del Proyecto</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-4">
                <div className="objectives-box">
                  <h3 className="font-bold text-xl mb-4">
                    Objetivos Funcionales
                  </h3>
                  <ul>
                    <li>Modernizar el registro</li>
                    <li>Panel con métricas y filtros</li>
                    <li>Reportes automáticos en tiempo real</li>
                    <li>Sistema de cierre automático</li>
                    <li>Preparar para reutilización anual</li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-4">
                <div className="objectives-box inverted">
                  <h3 className="font-bold text-xl mb-4 text-white">
                    Objetivos Técnicos
                  </h3>
                  <ul>
                    <li>Reestructurar y eliminar código muerto</li>
                    <li>Diseño UI/UX más profesional</li>
                    <li>Optimizar base de datos y rendimiento</li>
                    <li>Arquitectura escalable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="relative p-5 m-auto w-[70%] h-[600px]">
            <Image
              src="/images/projects/danzacruz-2025-2.jpg"
              alt="Danzacruz 2025"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* La Solución */}
          <div className="section-spacing">
            <h2 className="section-title">La Solución</h2>
            {solutions.map((solution, index) => (
              <div key={index} className="solution-item">
                <div className="flex gap-6 items-start">
                  <div className="solution-number">{index + 1}</div>
                  <div>
                    <h3 className="solution-title">{solution.title}</h3>
                    <p className="solution-description">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Resultados */}
          <div className="results-section">
            <h2 className="section-title text-white">Resultados</h2>
            <div className="flex flex-wrap -mx-4">
              {results.map((result, index) => (
                <div key={index} className="w-full md:w-1/4 px-4 mb-4">
                  <div className="result-item">
                    <div className="result-metric">{result.metric}</div>
                    <div className="result-description">
                      {result.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Aprendizajes */}
          <div className="section-spacing">
            <h2 className="section-title">Aprendizajes Clave</h2>
            {learnings.map((learning, index) => (
              <div key={index} className="learning-item">
                <p>{learning}</p>
              </div>
            ))}
          </div>

          {/* Próximos Pasos */}
          <div className="section-spacing">
            <h2 className="section-title">Próximos Pasos (2026)</h2>
            <div className="flex flex-wrap -mx-4">
              {nextSteps.map((step, index) => (
                <div
                  key={index}
                  className={`w-full px-4 mb-4 ${
                    index === 4 ? 'md:w-full' : 'md:w-1/2'
                  }`}
                >
                  <div className="next-step-item">
                    <div className="step-number">{index + 1}</div>
                    <p>{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusión */}
          <div className="section-spacing">
            <h2 className="section-title">Conclusión</h2>
            <p className="section-description content-spacing">
              El proyecto Danzacruz 2025 representa una evolución completa
              respecto al sistema desarrollado en 2024. No solo moderniza el
              proceso de registro y gestión, sino que crea una base tecnológica
              sólida para todas las futuras ediciones del festival.
            </p>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-4">
                <div className="conclusion-item">
                  <p>✓ Diseñar soluciones para eventos masivos</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-4">
                <div className="conclusion-item">
                  <p>✓ Construir plataformas completas end-to-end</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-4">
                <div className="conclusion-item">
                  <p>✓ Optimizar procesos y automatizar tareas</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-4">
                <div className="conclusion-item">
                  <p>✓ Documentar proyectos para reutilización</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
