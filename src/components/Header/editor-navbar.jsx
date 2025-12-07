import React from 'react'
import { User, Scissors, PenTool, BarChart3, MessageSquare } from 'lucide-react'

export const EditorNavbar = () => {
  return (
    <div className="ml-6 flex">
      <a href="#sobre-mi" className="nav__link p-2 flex items-center">
        <User size={20} />
        <span className="pl-3">Sobre mí</span>
      </a>

      <a href="#servicios" className="nav__link p-2 flex items-center">
        <Scissors size={20} /> <span className="pl-3">Servicios</span>
      </a>

      <a href="#proceso" className="nav__link p-2 flex items-center">
        <PenTool size={20} /> <span className="pl-3">Proceso</span>
      </a>

      <a href="#resultados" className="nav__link p-2 flex items-center">
        <BarChart3 size={20} /> <span className="pl-3">Resultados</span>
      </a>

      <a href="#contacto" className="nav__link p-2 flex items-center">
        <MessageSquare size={20} /> <span className="pl-3">Contacto</span>
      </a>
    </div>
  )
}
