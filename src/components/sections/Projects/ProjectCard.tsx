import Card from '../../ui/Card/Card'
import Image from 'next/image'
import Tag from '../../ui/Tag'

const ProjectCard = ({ project }) => {
  const { title, description, image, stack } = project

  return (
    <Card>
      <div className="mb-4">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="image"
        />
      </div>

      <h3 className="title is-4 has-text-weight-semibold">{title}</h3>

      <p className="my-4">{description}</p>

      <div className="mt-3">
        {stack.map((tech) => (
          <Tag key={tech} label={tech} />
        ))}
      </div>
    </Card>
  )
}

export default ProjectCard
