import React from 'react'

export const ExperienceCard = ({ job }) => {
  return (
    <div
      className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-md rounded-lg overflow-hidden border ja__card mb-6"
      key={job.name}
    >
      <div className="flex items-center p-4">
        <div className="mr-4">
          <figure className="w-12 h-12">
            <img
              alt={job.name}
              src={job.logo}
              style={{ borderRadius: '5px', width: '48px', height: '48px' }}
            />
          </figure>
        </div>
        <div className="flex-1">
          <p className="text-xl font-bold ja__card-title">{job.name}</p>
          <p className="text-sm text-gray-600">{job.web}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="text-gray-700">
          <p>{job.description}</p>
        </div>
      </div>
    </div>
  )
}
