"use client"
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Navbar } from './navbar'
import { EditorNavbar } from './editor-navbar'
import { DownloadButton } from '../Utils/utils'
import { Code2, Video } from 'lucide-react'

const Header = ({ siteTitle, type = 'developer' }) => {
  const [isScrolled] = useState(false)
  const isDeveloper = type === 'developer'

  return (
    <div className={`header ${isScrolled ? 'scroll-header' : ''}`} id="header">
      <nav
        className="fixed top-0 w-full z-50 flex gap-5 justify-between p-4 bg-slate-900"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="flex items-center gap-4">
          <h1 className="p-2 inline-block text-white">{siteTitle}</h1>
          
        </div>

        <div className="hidden md:flex items-center w-full">
          <div className="flex justify-start w-full text-slate-200">
            {isDeveloper ? <Navbar /> : <EditorNavbar />}
          </div>
        </div>
        <div className="flex items-center gap-4">
  <a  
            href={isDeveloper ? '/editor' : '/'}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors text-sm font-medium border border-slate-700"
            title={isDeveloper ? 'Ir a modo Editor' : 'Ir a modo Desarrollador'}
          >
            {isDeveloper ? <Video size={16} /> : <Code2 size={16} />}
            <span className="hidden sm:inline">{isDeveloper ? 'Editor' : 'Dev'}</span>
          </a>
        </div>

      </nav>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  type: PropTypes.oneOf(['developer', 'editor'])
}

Header.defaultProps = {
  siteTitle: ``,
  type: 'developer'
}

export default Header
