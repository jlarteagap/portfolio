import React from 'react'
import Image from 'next/image'

export const ExperienceCard = ({ job }) => {
  return (
    <div className="column card ja__card" key={job.name}>
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <Image
              width="48"
              height="48"
              alt={job.name}
              src={job.logo}
              style={{ borderRadius: '5px' }}
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
}
