import React from 'react'
import { BiUser, BiBook, BiBriefcase, BiMessageSquare } from 'react-icons/bi'

export const Navbar = () => {
  return (
    <>
      <a href="#about" className="nav__link navbar-item">
        <BiUser /> About
      </a>

      <a href="#skills" className="nav__link navbar-item">
        <BiBook /> Skills
      </a>

      <a href="#work" className="nav__link navbar-item">
        <BiBriefcase /> Portfolio
      </a>

      <a href="#contact" className="nav__link navbar-item">
        <BiMessageSquare /> Contact
      </a>
    </>
  )
}
