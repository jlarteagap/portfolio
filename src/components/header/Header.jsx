/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {
  BiHomeAlt,
  BiUser,
  BiBook,
  BiBriefcase,
  BiMessageSquare,
  BiMoon
} from 'react-icons/bi'
import DarkMode from './DarkMode'

const Header = () => {
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
  return (
    <div className={`header ${isScrolled ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo" rel="noreferer">
          Jorge Arteaga
        </a>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link active-link">
                <BiHomeAlt />
              </a>
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

export default Header
