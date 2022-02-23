import React from 'react'
import {
  Header,
  Footer,
  Skills,
  Services,
  Work,
  About,
  Home,
  Contact
} from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
