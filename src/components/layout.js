import * as React from 'react'
import PropTypes from 'prop-types'

import Header from './Header/header'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header siteTitle={'Jorge Arteaga'} />
      <main className="main">{children}</main>
      <Footer siteTitle={'Jorge Arteaga'} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
