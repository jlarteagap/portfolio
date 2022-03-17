
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  BiHomeAlt,
  BiUser,
  BiBook,
  BiBriefcase,
  BiMessageSquare
} from 'react-icons/bi'
import DarkMode from "./darkmode"


const Header = ({ siteTitle }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollHeader = () => {
    const header = document.getElementById('header')
    console.log(header)
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50)
    })
  }, [])

  return(
    <div className={`header ${isScrolled ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo" rel="noreferer">
          {siteTitle}
        </a>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link active-link">
                <BiHomeAlt />
              </Link>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <BiUser />
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <BiBook />
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                <BiBriefcase />
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <BiMessageSquare />
              </a>
            </li>
          </ul>
        </div>
        <DarkMode />
      </nav>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
