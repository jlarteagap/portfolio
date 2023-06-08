import React from 'react'
import { AboutContent } from './AboutContent'

const About = ({ about }) => {
  return (
    <section className="about__container" id="acerca-de-mi">
      <div className="container mt-6 py-6">
        <h2
          className="is-size-1 has-text-weight-bold mb-6 is-size-3-mobile"
          style={{ lineHeight: 1 }}
          dangerouslySetInnerHTML={{ __html: about.hero }}
        ></h2>
        <div className="m-auto py-6 about__text">
          <h3 className="is-size-4 has-text-weight-medium">{about.title}</h3>
          <h4
            className="is-size-2 has-text-weight-light my-5 is-size-5-mobile"
            style={{ lineHeight: 1 }}
          >
            {about.resume}
          </h4>
          <AboutContent content={about.content} />
        </div>
      </div>
    </section>
  )
}
export default About
