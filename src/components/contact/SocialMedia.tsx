import React from 'react'
import { Linkedin, Github, Twitter } from 'lucide-react'

const SocialMedia = ({ social }) => {
  const iconComponents = {
    linkedin: <Linkedin size={24} />,
    github: <Github size={24} />,
    twitter: <Twitter size={24} />
  }
  return (
    <div className="flex mt-12 justify-center gap-4">
      {social.map(icon => {
        return (
          <div key={icon.name}>
            <a
              href={icon.url}
              className="flex flex-col items-center hover:text-gray-600 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              {iconComponents[icon.name.toLowerCase()]}
              {icon.name}
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default SocialMedia
