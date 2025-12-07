import React from 'react'
import { User, Book, MessageSquare, Briefcase } from 'lucide-react'

export const Navbar = () => {
  return (
    <div className="ml-6 flex">
      <a href="/#acerca-de-mi" className="nav__link p-2 flex items-center">
        <User />
        <span className="pl-3">Acerca de mi</span>
      </a>

      <a href="/#experiencia" className="nav__link p-2 flex items-center">
        <Book /> <span className="pl-3">Experiencia</span>
      </a>

      <a href="/#proyectos" className="nav__link p-2 flex items-center">
        <Briefcase /> <span className="pl-3">Proyectos</span>
      </a>

      <a href="/#contacto" className="nav__link p-2 flex items-center">
        <MessageSquare /> <span className="pl-3">Contacto</span>
      </a>
    </div>
  )
}
