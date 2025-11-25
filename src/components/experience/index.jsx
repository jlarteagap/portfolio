import React from 'react'
import { DownloadButton } from '../Utils/utils'
import { ExperienceCard } from './ExperienceCard'

export const Experience = ({ experience }) => {
  return (
    <section className="container mx-auto py-12 px-4" id="experiencia">
      <h2 className="text-5xl my-12 font-bold">Experiencia</h2>
      <div className="flex flex-col lg:flex-row flex-wrap gap-6">
        {experience.map(job => {
          return <ExperienceCard key={job.name} job={job} />
        })}
      </div>
      <div className="flex mt-12 flex-col items-center">
        <p className="mb-4">Descargar el Curriculum completo...</p>
        <div>
          <DownloadButton />
        </div>
      </div>
    </section>
  )
}
