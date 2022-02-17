import React from 'react'
import Article from './components/articles/Articles'
import {
  BiHomeAlt,
  BiUser,
  BiBook,
  BiBriefcase,
  BiMessageSquare,
  BiMoon,
  BiMouse
} from 'react-icons/bi'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'
function App() {
  return (
    <div className="App">
      <div className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Jorge Arteaga
          </a>
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link active-link">
                  <BiHomeAlt />
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  <BiUser />
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  <BiBook />
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  <BiBriefcase />
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  <BiMessageSquare />
                </a>
              </li>
            </ul>
          </div>
          <BiMoon />
        </nav>
      </div>
      <main className="main">
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home_data">
              <span className="home__greeting">Hello, I&#39;m</span>
              <h1 className="home__name">Jorge Arteaga</h1>
              <h3 className="home__education">Frontend Developer</h3>
            </div>
            <div className="home__buttons">
              <a download="" href="#" className="button button--ghost">
                Download CV
              </a>
              <a href="#about" className="button">
                About me
              </a>
            </div>
            <div className="home__handle">
              <img src="" alt="Perfil" className="home__img" />
            </div>
            <div className="home__social">
              <a href="" className="home__social-link">
                <BsLinkedin />
              </a>
              <a href="" className="home__social-link">
                <BsGithub />
              </a>
              <a href="" className="home__social-link">
                <BsTwitter />
              </a>
            </div>
            <a href="#about" className="home__scroll">
              <BiMouse className="home__scroll-icon" />
              <span className="home__scroll-name">Scroll Down</span>
            </a>
          </div>
        </section>
        <section className="home section" id="about"></section>
        <section className="home section" id="skills"></section>
      </main>
      <footer className="footer"></footer>
      <Article />
    </div>
  )
}

export default App
