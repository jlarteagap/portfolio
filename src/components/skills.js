import React from 'react'

const Skills = ({ skills }) => {
  return (
    <section className="container">
      <div className="columns">
        <div className="column">
          <h2 className="my-6 has-text-weight-bold skills__title">Stack</h2>
          {skills[0].frontend.map((skill, i) => {
            return (
              <div key={i} className="button is-primary is-outlined mr-4 mt-4">
                {skill}
              </div>
            )
          })}
        </div>
        <div className="column">
          <h2 className="my-6 has-text-weight-bold is-size-1">Backend</h2>
          {skills[0].backend.map((skill, i) => {
            return (
              <div key={i} className="button is-link is-outlined mr-4 mt-4">
                {skill}
              </div>
            )
          })}
          <h2 className="my-6 has-text-weight-bold is-size-2">Tools</h2>
          <div>
            {skills[0].tools.map((skill, i) => {
              return (
                <div key={i} className="button is-info is-outlined mr-4 mt-4">
                  {skill}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
