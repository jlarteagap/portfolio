import * as React from 'react'
import PropTypes from 'prop-types'

import Header from './Header/header'
// import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={'Jorge Arteaga'} />
      <main>{children}</main>
      {/* <Footer siteTitle={'Jorge Arteaga'} /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
