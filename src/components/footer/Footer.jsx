import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Jorge Arteaga</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
            <a href="#work" className="footer__link">
              Projects
            </a>
            <a href="#blog" className="footer__link">
              Blog
            </a>
          </li>
        </ul>
        <ul className="footer__social">
          <a
            href="https://www.linkedin.com/in/jorge-luis-arteaga-perez/"
            target="_blank"
            className="footer__social-link"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/jlarteagap"
            target="_blank"
            className="footer__social-link"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://twitter.com/jlarteagap"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <BsTwitter />
          </a>
        </ul>
        <span className="footer__copy">
          &#169; Jorge Arteaga - All rigths reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer
