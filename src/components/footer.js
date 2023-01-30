import React from 'react'
import { Social } from './social'

const Footer = ({ siteTitle }) => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">{ siteTitle }</h1>
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
        <Social />
        <span className="footer__copy">
          &#169; Jorge Luis Arteaga - All rigths reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer
