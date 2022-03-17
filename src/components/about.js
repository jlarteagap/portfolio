import React from 'react'

import { BiAward, BiBriefcaseAlt, BiSupport } from 'react-icons/bi'
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <section className="about section" id="about">
      <span className="section__subtitle">My intro</span>
      <h2 className="section__title">About Me</h2>

      <div className="about__container container grid">
        <StaticImage
            src="../images/perfil.png"
            className='about__img'
            // width={300}
            // quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Jorge Luis Arteaga"
            // style={{ marginBottom: `1.45rem` }}
        />
        <div className="about__data">
          <div className="about__info">
            <div className="about__box">
              <BiAward className="about__icon" />
              <h3 className="about__title">Experience</h3>
              <span className="about__subtitle">8 Years Working</span>
            </div>
            <div className="about__box">
              <BiBriefcaseAlt className="about__icon" />
              <h3 className="about__title">Complete</h3>
              <span className="about__subtitle">48 + projects</span>
            </div>
            <div className="about__box">
              <BiSupport className="about__icon" />
              <h3 className="about__title">Support</h3>
              <span className="about__subtitle">Online 24/7</span>
            </div>
          </div>
          <p className="about__description">
            Frontend Developer with experience in layout prototypes, interested
            in deploying proposals and designed with tools like Figma, achieving
            user-friendly websites with languages like javascript (React, Node)
            taking into account UX strategies
            <br />
            Also working with backend technologies with Django and Node.
            Databases including MongoDB and GraphQL
          </p>
          <a href="#contact" className="button">
            Contact me
          </a>
        </div>
      </div>
    </section>
  )
}
export default About