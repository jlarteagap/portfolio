import React from 'react'
import { BiAward, BiBriefcaseAlt, BiSupport } from 'react-icons/bi'
import Image from 'next/image'
const About = () => {
  return (
    <section className="about section" id="about">
      <span className="section__subtitle">My intro</span>
      <h2 className="section__title">About Me</h2>

      <div className="about__container container grid">
        <Image
          src="/images/perfil.png"
          className="about__img"
          alt="Jorge Luis Arteaga"
          width="400"
          height="300"
        />
        <div className="about__data">
          <div className="about__info">
            <div className="about__box">
              <BiAward className="about__icon" />
              <h3 className="about__title">Experience</h3>
              <span className="about__subtitle">10s Years Working</span>
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
            I am a Frontend Developer with over 10 years of experience in
            prototyping and creating attractive and functional designs. I use
            tools like Figma, Adobe XD, and Photoshop to create visual proposals
            that become high-quality solutions.
          </p>
          <p>
            Currently,I am working on ReactJs, applying my skills in creating
            Templates for Wordpress. I love learning and trying new
            technologies, and I am interested in finding opportunities that
            allow me to continue developing my skills and knowledge.
          </p>
          <p>
            If you are looking for a Frontend Developer with experience in
            prototyping and design, do not hesitate to contact me. I am willing
            to work on interesting and challenging projects that allow me to
            continue growing as a professional.
          </p>

          <a href="#contact" className="button mt-5">
            Contact me
          </a>
        </div>
      </div>
    </section>
  )
}
export default About
