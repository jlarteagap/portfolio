import React, { useState } from 'react'
import PropTypes from 'prop-types'

import DarkMode from '../darkmode'
import { Navbar } from './navbar'
import { DownloadButton } from '../Utils/utils'

const Header = ({ siteTitle }) => {
  const [isScrolled] = useState(false)

  return (
    <div className={`header ${isScrolled ? 'scroll-header' : ''}`} id="header">
      <nav
        className="navbar is-fixed-top nav container is-flex-mobile is-justify-content-space-between"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a href="#" className="nav__logo" rel="noreferer">
            {siteTitle}
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Navbar />
          </div>
        </div>
        <div className="navbar-end is-flex-mobile is-align-items-center">
          <div className="navbar-item">
            <DownloadButton />
          </div>
          <div className="navbar-item">
            <DarkMode />
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
