import React from 'react'
import { DownloadButton } from './Utils/utils'
import Image from 'next/image'
// import { BiCaretRight } from 'react-icons/bi'

export const Experience = ({ experience }) => {
  console.log(experience)
  return (
    <section className="container py-6 px-3" id="experiencia">
      <h2 className="is-size-1 my-6 has-text-weight-bold">Experiencia</h2>
      <div className="columns is-4 is-3" style={{ gap: '1.5rem' }}>
        {experience.map(job => {
          return (
            <div className="column card ja__card" key={job.name}>
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <Image
                      width="48"
                      height="48"
                      src={job.logo}
                      alt={job.name}
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title ja__card-title is-4">{job.name}</p>
                  <p className="subtitle is-6">{job.web}</p>
                </div>
              </div>
              <div className="card-content">
                <div className="content">
                  <p>{job.description}</p>
                </div>
              </div>
            </div>
          )
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
