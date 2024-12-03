import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <section className="container mb-6">
      <h2 className="is-size-2 is-bold has-text-centered has-text-weight-bold is-uppercase">
        Últimos proyectos
      </h2>

      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <Image src="/images/projects/danzacruz.png" fill loading="lazy" />
          </figure>
        </div>
        <div className="card-content">
          <p className="my-5">
            Desarrollé una landing page para Danzacruz, destacando información
            clave y un sistema de registro intuitivo. Además, creé un panel de
            administración para gestionar inscripciones, organizar talleres y
            generar reportes en tiempo real. Esta solución optimizó la logística
            del evento, mejorando la experiencia de organizadores y
            participantes.
          </p>
          <div>
            <p className="is-bold">Stack:</p>
            <span className="button is-primary is-outlined is-small mr-4">
              Nextjs
            </span>
            <span className="button is-primary is-outlined is-small mr-4">
              React
            </span>
            <span className="button is-primary is-outlined is-small mr-4">
              Shadcn
            </span>
            <span className="button is-primary is-outlined is-small mr-4">
              Firebase
            </span>
            <span className="button is-primary is-outlined is-small mr-4">
              Tailwind
            </span>
          </div>
          <div className="content"></div>
        </div>
      </div>
    </section>
  )
}
export default Projects
