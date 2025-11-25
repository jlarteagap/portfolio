import React from 'react'

const Skills = ({ skills }) => {
  return (
    <section
      className=""
      style={{ backgroundColor: '#000', padding: '6rem 0' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <h2 className="my-12 font-bold skills__title outlinetext">
              Frontend
            </h2>
            {skills[0].frontend.map((skill, i) => {
              return (
                <div
                  key={i}
                  className="inline-block px-4 py-2 rounded border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white mr-4 mt-4 transition-colors duration-300"
                >
                  {skill}
                </div>
              )
            })}
          </div>
          <div className="flex-1">
            <h2 className="my-12 font-bold text-5xl" style={{ color: 'white' }}>
              Backend
            </h2>
            {skills[0].backend.map((skill, i) => {
              return (
                <div
                  key={i}
                  className="inline-block px-4 py-2 rounded border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white mr-4 mt-4 transition-colors duration-300"
                >
                  {skill}
                </div>
              )
            })}
            <h2 className="my-12 font-bold text-4xl" style={{ color: 'white' }}>
              Herramientas
            </h2>
            <div>
              {skills[0].tools.map((skill, i) => {
                return (
                  <div
                    key={i}
                    className="inline-block px-4 py-2 rounded border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white mr-4 mt-4 transition-colors duration-300"
                  >
                    {skill}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
