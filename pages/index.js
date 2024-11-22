import * as React from 'react'

import Home from '../src/components/home'
import About from '../src/components/about/about'
import Skills from '../src/components/skills'

import Contact from '../src/components/contact/contact'
// import BlogList from '../src/components/blog/BlogList'
import SEO from '../src/components/seo/Seo'
import { Experience } from '../src/components/experience'
import Projects from '../src/components/Projects'

export const getServerSideProps = async () => {
  const res = await fetch('https://jlarteaga.com/api/about')

  const { social, contact, data, about, experience, skills, projects } =
    await res.json()

  return {
    props: { social, contact, data, about, experience, skills, projects }
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
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact social={social} contact={contact} />
    </>
  )
}

export default index
