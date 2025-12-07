import React from 'react'
import { projects } from '../../../data/projects'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
    <section className="container mx-auto my-12" id="proyectos">
      <h2 className="text-4xl text-center font-bold mb-12">
        Últimos proyectos
      </h2>

      <div className="flex flex-wrap -mx-4">
        {projects.slice().reverse().map(p => (
          <div key={p.id} className="w-full md:w-1/2 px-4 mb-8">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
