import React from 'react'

const About = () => {
  return (
    <section className="about__container" id="acerca-de-mi">
      <div className="container mt-6 py-6">
        <h2
          className="is-size-1 has-text-weight-bold mb-6 is-size-3-mobile"
          style={{ lineHeight: 1 }}
        >
          I love create <br /> Somethings <br />
          Simple and Cleand
        </h2>
        <div className="m-auto py-6" style={{ width: '50%' }}>
          <h3 className="is-size-4 has-text-weight-medium">Acerca de mi</h3>
          <h4
            className="is-size-2 has-text-weight-light my-5 is-size-5-mobile"
            style={{ lineHeight: 1 }}
          >
            Soy Frontend Developer con 10 años de experiencia en prototipado,
            creando diseños atractivos y funcionales.
          </h4>
        </div>
      </div>
    </section>
  )
}
export default About
