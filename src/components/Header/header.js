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
        className="navbar is-fixed-top nav container"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a href="#" className="nav__logo" rel="noreferer">
            {siteTitle}
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Navbar />
          </div>
        </div>
        <div className="navbar-end">
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
