import React from 'react'
import { BiUser, BiBook, BiMessageSquare } from 'react-icons/bi'

export const Navbar = () => {
  return (
    <div className="ml-6 is-flex">
      <a href="#acerca-de-mi" className="nav__link navbar-item">
        <BiUser />
        <span className="pl-3">Acerca de mi</span>
      </a>

      <a href="#experiencia" className="nav__link navbar-item">
        <BiBook /> <span className="pl-3">Experiencia</span>
      </a>

      <a href="#contacto" className="nav__link navbar-item">
        <BiMessageSquare /> <span className="pl-3">Contacto</span>
      </a>
    </div>
  )
}
