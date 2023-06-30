import React from 'react'
import { DownloadButton } from '../Utils/utils'
import { ExperienceCard } from './ExperienceCard'

export const Experience = ({ experience }) => {
  return (
    <section className="container py-6" id="experiencia">
      <h2 className="is-size-1 my-6 has-text-weight-bold">Experiencia</h2>
      <div className="columns is-4 is-3 px-2" style={{ gap: '1.5rem' }}>
        {experience.map(job => {
          return <ExperienceCard key={job.name} job={job} />
        })}
      </div>
      <div className="is-flex mt-6 is-flex-direction-column is-align-items-center">
        <p className="mb-4">Descargar el Curriculum completo...</p>
        <div>
          <DownloadButton />
        </div>
      </div>
    </section>
  )
}
