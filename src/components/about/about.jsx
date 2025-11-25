import React from 'react'
import { AboutContent } from './AboutContent'

const About = ({ about }) => {
  return (
    <section className="about__container" id="acerca-de-mi">
      <div className="container mx-auto mt-12 py-12">
        <div className="flex flex-col md:flex-row about__container__column">
          <div className="flex justify-center items-center w-full md:w-1/2">
            <h2
              className="text-5xl font-bold mb-12 max-sm:text-3xl"
              style={{ lineHeight: 1 }}
              dangerouslySetInnerHTML={{ __html: about.hero }}
            ></h2>
          </div>
          <div className="m-auto py-12 about__text w-full md:w-1/2">
            <h3 className="text-2xl font-medium">{about.title}</h3>
            <h4
              className="text-4xl font-light my-10 max-sm:text-xl"
              style={{ lineHeight: 1 }}
            >
              {about.resume}
            </h4>
            <AboutContent content={about.content} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
