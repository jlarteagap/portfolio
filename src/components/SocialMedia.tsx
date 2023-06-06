import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const SocialMedia = ({ social }) => {
  const iconComponents = {
    linkedin: <FaLinkedin size={24} />,
    github: <FaGithub size={24} />,
    twitter: <FaTwitter size={24} />
  }
  return (
    <div
      className="is-flex mt-6 is-justify-content-center"
      style={{ gap: '1rem' }}
    >
      {social.map(icon => {
        return (
          <div key={icon.name}>
            <a
              href={icon.url}
              className="is-flex is-flex-direction-column is-align-items-center"
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
