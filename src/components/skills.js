import React from 'react'
import { BiBadgeCheck } from 'react-icons/bi'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <span className="section__subtitle">My abilities</span>
      <h2 className="section__title">My Experience</h2>

      <div className="skills__container container grid">
        <div className="skills__content">
          <h3 className="skills__title">Frontend developer</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Html</h3>
                  <span className="skills__level"></span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">CSS3</h3>
                  <span className="skills__level"></span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__level"></span>
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">React</h3>
                  <span className="skills__level"></span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Bootstrap</h3>
                  <span className="skills__level"></span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Bulma CSS</h3>
                  <span className="skills__level"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills__content">
          <h3 className="skills__title">Backend developer</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Node Js</h3>
                  <span className="skills__level"></span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Python / Django</h3>
                  <span className="skills__level"></span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">GraphQl</h3>
                  <span className="skills__level"></span>
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">MySql</h3>
                  <span className="skills__level"></span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">MongoDB</h3>
                  <span className="skills__level"></span>
                </div>
              </div>
              <div className="skills__data">
                <BiBadgeCheck className="skills__icon" />
                <div>
                  <h3 className="skills__name">Firebase</h3>
                  <span className="skills__level"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
