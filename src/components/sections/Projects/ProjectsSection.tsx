import { projects } from '../../../data/projects'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
    <section className="container my-6">
      <h2 className="is-size-2 has-text-centered has-text-weight-bold mb-6">
        Últimos proyectos
      </h2>

      <div className="columns is-multiline">
        {projects.map((p) => (
          <div key={p.id} className="column is-6">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
