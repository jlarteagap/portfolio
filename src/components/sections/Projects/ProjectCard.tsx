import React from 'react'
import Card from '../../ui/Card/Card'
import Tag from '../../ui/Tag'

interface Project {
  id: string
  title: string
  description: string
  image: string
  stack: string[]
  link?: string
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, image, stack, link } = project
  
  const content = (
    <Card>
      <div className="mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded"
        />
      </div>

      <h3 className="text-xl font-bold font-semibold text-slate-800">{title}</h3>

      <p className="my-4 text-slate-800">{description}</p>

      <div className="mt-3">
        {stack.map(tech => (
          <Tag key={tech} label={tech} />
        ))}
      </div>
      {link && (
      <a href={link} className=" mt-3 flex justify-center bg-slate-800 text-green-500 p-2 rounded hover:bg-green-500 hover:text-slate-800 transition-colors transition-colors hover:scale-[1.02] transition-transform duration-300 text-green-500 hover:font-bold">Ver proyecto</a>
      )}
    </Card>
  )

  return content
}

export default ProjectCard
