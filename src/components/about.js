import React from 'react'

const About = () => {
  return (
    <section className="about__container" id="acerca-de-mi">
      <div className="container mt-6 py-6">
        <h2
          className="is-size-1 has-text-weight-bold mb-6"
          style={{ lineHeight: 1 }}
        >
          I love create <br /> Somethings <br />
          Simple and Cleand
        </h2>
        <div className="m-auto py-6" style={{ width: '50%' }}>
          <h3 className="is-size-4 has-text-weight-medium">Acerca de mi</h3>
          <h4
            className="is-size-2 has-text-weight-light my-5"
            style={{ lineHeight: 1 }}
          >
            Soy Frontend Developer con 10 años de experiencia en prototipado,
            creando diseños atractivos y funcionales.
          </h4>
          <p className="is-size-5 mb-5">
            Currently,I am working on ReactJs, applying my skills in creating
            Templates for Wordpress. I love learning and trying new
            technologies, and I am interested in finding opportunities that
            allow me to continue developing my skills and knowledge.
          </p>
          <p className="is-size-5">
            If you are looking for a Frontend Developer with experience in
            prototyping and design, do not hesitate to contact me. I am willing
            to work on interesting and challenging projects that allow me to
            continue growing as a professional.
          </p>
        </div>
      </div>
    </section>
  )
}
export default About
