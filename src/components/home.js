import React, { useEffect, useState } from 'react'

import { BiMouse } from 'react-icons/bi'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'

import AnimatedLetters from './animateLetters'

const Home = ({siteTitle}) => {
  const[letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['J', 'o', 'r', 'g','e', '  ', 'A', 'r', 't', 'e', 'a', 'g', 'a']
  const jobArray = ['F','r','o','n','t','e','n','d','  ', 'D','e','v','e','l','o','p','e','r']
  
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home_data">
          <span className="home__greeting">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <span className={`${letterClass} _12`}> I</span>
            <span className={`${letterClass} _12`}>'m</span>
            </span>
          <h1 className="home__name">
            <AnimatedLetters 
              letterClass={letterClass} 
              strArray={nameArray} 
              idx={15}/>
            </h1>
          <h3 className="home__education">
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} />
          </h3>
        </div>
        <div className="home__buttons">
          <a
            download
            href="../assets/pdf/jorge-arteaga-eng.pdf"
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
