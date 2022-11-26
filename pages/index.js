import * as React from "react"

import Layout from "../src/components/layout"
import ThemeContextWrapper from "../src/theme/ThemeContextWrapper"
import Home from "../src/components/home"
import About from "../src/components/about"
import Skills from "../src/components/skills"
import Services from "../src/components/services"
import Work from "../src/components/work"
import Contact from "../src/components/contact"
import BlogList from "../src/components/blog/BlogList"

const index =() =>{
  return (
    <ThemeContextWrapper>
      <Layout>
        <Home siteTitle="Data" />
        <About />
        <Skills />
        <Services />
        <Work />
        <BlogList />
        <Contact />
      </Layout>
    </ThemeContextWrapper>
  )
}

export default index
