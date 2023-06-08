import * as React from 'react'

import Home from '../src/components/home'
import About from '../src/components/about/about'
// import Skills from '../src/components/skills'
// import Services from '../src/components/services'
// import Work from '../src/components/work'
import Contact from '../src/components/contact/contact'
// import BlogList from '../src/components/blog/BlogList'
import SEO from '../src/components/seo/Seo'
import { Experience } from '../src/components/Experience'

export const getServerSideProps = async () => {
  const res = await fetch('https://jlarteaga.com/api/about')
  const { social, contact, data, about, experience } = await res.json()
  return {
    props: { social, contact, data, about, experience }
  }
}

const index = ({ social, contact, data, about, experience }) => {
  return (
    <>
      <SEO
        title={data.carrer}
        siteTitle={data.name}
        description={data.description}
      />
      <Home siteTitle={data} />
      <About about={about} />
      <Experience experience={experience} />
      {/* <Skills />
      <Services />
      <Work />
      <BlogList />
       */}
      <Contact social={social} contact={contact} />
    </>
  )
}

export default index
