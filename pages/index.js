import * as React from 'react'

import Home from '../src/components/home'
import About from '../src/components/about/about'
import Skills from '../src/components/skills'

import Contact from '../src/components/contact/contact'
// import BlogList from '../src/components/blog/BlogList'
import SEO from '../src/components/seo/Seo'
import { Experience } from '../src/components/experience'
import ProjectsSection from '../src/components/sections/Projects/ProjectsSection'

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/about`)

  const { social, contact, data, about, experience, skills } = await res.json()

  return {
    props: { social, contact, data, about, experience, skills }
  }
}

const index = ({
  social,
  contact,
  data,
  about,
  experience,
  skills,
  projects
}) => {
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
      <ProjectsSection />
      <Skills skills={skills} />
      {/* <BlogList /> */}
      {/* <Work /> */}

      <Contact social={social} contact={contact} />
    </>
  )
}

export default index
