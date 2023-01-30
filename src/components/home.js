import React from 'react'

import { BiMouse } from 'react-icons/bi'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'

import { DownloadButton } from './Utils/utils'

const Home = ({ siteTitle }) => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home_data">
          <h1 className="home-name">{siteTitle}</h1>
          <h2 className="home__education">Frontend Developer</h2>
        </div>
        <div className="home__buttons">
          <DownloadButton />
          <a href="#about" className="btn button">
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
