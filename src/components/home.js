import React from 'react'

import { BiMouse } from 'react-icons/bi'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'

const Home = ({siteTitle}) => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home_data">
          <span className="home__greeting">Hello, I&#39;m</span>
          <h1 className="home__name">{siteTitle}</h1>
          <h3 className="home__education">Frontend Developer</h3>
        </div>
        <div className="home__buttons">
          <a
            download
            href="../assets/pdf/Jorge-Luis-Arteaga-eng.pdf"
            className="button button--ghost"
          >
            Download CV
          </a>
          <a href="#about" className="button">
            About me
          </a>
        </div>

        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/jorge-luis-arteaga-perez/"
            target="_blank"
            className="home__social-link"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/jlarteagap"
            target="_blank"
            className="home__social-link"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://twitter.com/jlarteagap"
            target="_blank"
            className="home__social-link"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
        </div>
        <a href="#about" className="home__scroll">
          <BiMouse className="home__scroll-icon" />
          <span className="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </section>
  )
}

export default Home
