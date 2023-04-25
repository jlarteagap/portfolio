import * as React from 'react'

import Home from '../src/components/home'
import About from '../src/components/about'
import Skills from '../src/components/skills'
import Services from '../src/components/services'
import Work from '../src/components/work'
import Contact from '../src/components/contact'
import BlogList from '../src/components/blog/BlogList'
import SEO from '../src/components/seo/Seo'
import { Experience } from '../src/components/Experience'

const index = () => {
  return (
    <>
      <SEO title="Frontend Developer" siteTitle="Jorge Luis Arteaga" />
      <Home siteTitle="Jorge Arteaga" />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Work />
      <BlogList />
      <Contact />
    </>
  )
}

export default index
