import React from 'react'
import { Social } from './social'

const Footer = ({ siteTitle }) => {
  return (
    <footer className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">{siteTitle}</h1>
        <ul className="flex gap-4 mb-4">
          <li>
            <a href="#about" className="hover:underline mx-2">
              About
            </a>
            <a href="#work" className="hover:underline mx-2">
              Projects
            </a>
            <a href="#blog" className="hover:underline mx-2">
              Blog
            </a>
          </li>
        </ul>
        <Social />
        <span className="text-sm text-gray-500">
          &#169; Jorge Luis Arteaga - All rigths reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer
