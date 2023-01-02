import React from 'react'
import { BiUser, BiBook, BiBriefcase, BiMessageSquare } from 'react-icons/bi'

export const Navbar = () => {
  return (
    <div className="ml-6 is-flex">
      <a href="#about" className="nav__link navbar-item">
        <BiUser />
        <span className="pl-3">About</span>
      </a>

      <a href="#skills" className="nav__link navbar-item">
        <BiBook /> <span className="pl-3">Skills</span>
      </a>

      <a href="#work" className="nav__link navbar-item">
        <BiBriefcase /> <span className="pl-3">Portfolio</span>
      </a>

      <a href="#contact" className="nav__link navbar-item">
        <BiMessageSquare /> <span className="pl-3">Contact</span>
      </a>
    </div>
  )
}
