import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Navbar } from './navbar'
import { DownloadButton } from '../Utils/utils'

const Header = ({ siteTitle }) => {
  const [isScrolled] = useState(false)

  return (
    <div className={`header ${isScrolled ? 'scroll-header' : ''}`} id="header">
      <nav
        className="fixed top-0 w-full z-50 flex justify-between ja__navbar p-4"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="flex items-center">
          <h1 className="p-2 text-xl font-bold">{siteTitle}</h1>
        </div>
        <div className="hidden md:flex items-center w-full">
          <div className="flex justify-start w-full">
            <Navbar />
          </div>
        </div>
        <div className="flex items-center">
          <div className="p-2 px-2">
            <DownloadButton />
          </div>
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
