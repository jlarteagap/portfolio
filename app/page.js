import Home from '../src/components/home'
import About from '../src/components/about/about'
import Skills from '../src/components/skills'
import Contact from '../src/components/contact/contact'
import { Experience } from '../src/components/experience'
import ProjectsSection from '../src/components/sections/Projects/ProjectsSection'
import { aboutData } from '../src/data/about'

export const metadata = {
  title: `${aboutData.data.carrer} | ${aboutData.data.name}`,
  description: aboutData.data.description,
  openGraph: {
    title: aboutData.data.carrer,
    description: aboutData.data.description,
    siteName: aboutData.data.name,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: aboutData.data.carrer,
    description: aboutData.data.description,
  }
}

export default function Page() {
  const { social, contact, data, about, experience, skills } = aboutData

  return (
    <>
      <Home siteTitle={data} />
      <About about={about} />
      <Experience experience={experience} />
      <ProjectsSection />
      <Skills skills={skills} />
      <Contact social={social} contact={contact} />
    </>
  )
}
