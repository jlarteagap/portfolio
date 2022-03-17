import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ThemeContextWrapper from "../theme/ThemeContextWrapper"
import Home from "../components/home"
import About from "../components/about"
import Skills from "../components/skills"
import Services from "../components/services"
import Work from "../components/work"
import Contact from "../components/contact"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query titleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

return (
  <ThemeContextWrapper>
    <Layout>
      <Seo title="Home" />
      <Home siteTitle={data.site.siteMetadata?.title} />
      <About />
      <Skills />
      <Services />
      <Work />
      <Contact />
    </Layout>
  </ThemeContextWrapper>
)}

export default IndexPage
