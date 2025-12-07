import * as React from 'react'
import PropTypes from 'prop-types'

import Header from './Header/header.jsx'
// import Footer from './footer'

const Layout = ({ children, headerType = 'developer' }) => {
  return (
    <>
      <Header siteTitle={'Jorge Arteaga'} type={headerType} />
      <main>{children}</main>
      {/* <Footer siteTitle={'Jorge Arteaga'} /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerType: PropTypes.oneOf(['developer', 'editor'])
}

export default Layout
