import React from 'react'
import Article from './components/articles/Articles'
import {
  BiHomeAlt,
  BiUser,
  BiBook,
  BiBriefcase,
  BiMessageSquare,
  BiMoon,
  BiMouse,
  BiAward,
  BiBriefcaseAlt,
  BiSupport,
  BiBadgeCheck,
  BiRightArrowAlt,
  BiX,
  BiCheck
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
        <section className="home section" id="about">
          <span className="section__subtitle">My intro</span>
          <h2 className="section__title">About Me</h2>

          <div className="about__container container grid">
            <img src="" alt="About me" className="about__img" />
            <div className="about__data">
              <div className="about__info">
                <div className="about__box">
                  <BiAward className="about__icon" />
                  <h3 className="about__title">Experience</h3>
                  <span className="about__subtitle">8 Years Working</span>
                </div>
                <div className="about__box">
                  <BiBriefcaseAlt className="about__icon" />
                  <h3 className="about__title">Complete</h3>
                  <span className="about__subtitle">48 + projects</span>
                </div>
                <div className="about__box">
                  <BiSupport className="about__icon" />
                  <h3 className="about__title">Support</h3>
                  <span className="about__subtitle">Online 24/7</span>
                </div>
              </div>
              <p className="about__description">
                Frontend Developer with experience in layout prototypes,
                interested in deploying proposals and designed with tools like
                Figma, achieving user-friendly websites with languages like
                javascript (React, Node) taking into account UX strategies
                <br />
                Also working with backend technologies with Django and Node.
                Databases including MongoDB and GraphQL
              </p>
              <a href="#contact" className="button">
                Contact me
              </a>
            </div>
          </div>
        </section>

        <section className="home section" id="skills">
          <span className="section__subtitle">My abilities</span>
          <h2 className="section__title">My Experience</h2>

          <div className="skills__container container grid">
            <div className="skills__content">
              <h3 className="skills__title">Frontend developer</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">Html</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">CSS3</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">JavaScript</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                </div>
                <div className="skills__group">
                  <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">React</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">Bootstrap</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">Bulma CSS</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills__content">
              <h3 className="skills__title">Backend developer</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">Node Js</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">Python / Django</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">GraphQl</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                </div>
                <div className="skills__group">
                  <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">MySql</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">MongoDB</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    <div>
                      <h3 className="skills__name">Firebase</h3>
                      <span className="skills__level"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home section" id="services">
          <span className="section__subtitle">My Services</span>
          <h2 className="section__title">What I Offer</h2>

          <div className="services__container container grid">
            <div className="services__card">
              <h3 className="services__title">
                Product <br /> Designer
              </h3>
              <span className="services__button">
                See more <BiRightArrowAlt className="services__icon" />
              </span>
              <div className="services__modal">
                <div className="services__modal-content">
                  <BiX />
                  <h3 className="services__modal-title">
                    Product <br />
                    Designer
                  </h3>
                  <p className="services__modal-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Perspiciatis in nesciunt commodi adipisci debitis porro. Vel
                    odio eius similique. Iusto delectus at pariatur, quas neque
                    molestias doloremque corrupti quis nemo?
                  </p>
                  <ul className="services__modal-list">
                    <li className="services__modal-item">
                      <BiCheck />
                      <p className="services__modal-info">Web Develop</p>
                    </li>
                    <li className="services__modal-item">
                      <BiCheck />
                      <p className="services__modal-info">Web Develop</p>
                    </li>
                    <li className="services__modal-item">
                      <BiCheck />
                      <p className="services__modal-info">Web Develop</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="services__card">
              <h3 className="services__title">
                UI/UX <br />
                Designer
              </h3>
              <span className="services__button">
                See more <BiRightArrowAlt className="services__icon" />
              </span>
              <div className="services__modal">
                <div className="services__modal-content">
                  <BiX />
                  <h3 className="services__modal-title">
                    Product <br />
                    Designer
                  </h3>
                  <p className="services__modal-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Perspiciatis in nesciunt commodi adipisci debitis porro. Vel
                    odio eius similique. Iusto delectus at pariatur, quas neque
                    molestias doloremque corrupti quis nemo?
                  </p>
                  <ul className="services__modal-list">
                    <li className="services__modal-item">
                      <BiCheck />
                      <p className="services__modal-info">Web Develop</p>
                    </li>
                    <li className="services__modal-item">
                      <BiCheck />
                      <p className="services__modal-info">Web Develop</p>
                    </li>
                    <li className="services__modal-item">
                      <BiCheck />
                      <p className="services__modal-info">Web Develop</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="services__card">
              <h3 className="services__title">
                Visual <br />
                Designer
              </h3>
              <span className="services__button">
                See more <BiRightArrowAlt className="services__icon" />
              </span>
              <div className="services__modal">
                <div className="services__modal-content">
                  <BiX className="services__modal-close" />
                  <h3 className="services__modal-title">
                    Product <br />
                    Designer
                  </h3>
                  <p className="services__modal-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Perspiciatis in nesciunt commodi adipisci debitis porro. Vel
                    odio eius similique. Iusto delectus at pariatur, quas neque
                    molestias doloremque corrupti quis nemo?
                  </p>
                  <ul className="services__modal-list">
                    <li className="services__modal-item">
                      <BiCheck />
                      <p className="services__modal-info">Web Develop</p>
                    </li>
                    <li className="services__modal-item">
                      <BiCheck />
                      <p className="services__modal-info">Web Develop</p>
                    </li>
                    <li className="services__modal-item">
                      <BiCheck />
                      <p className="services__modal-info">Web Develop</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home section" id="work"></section>
      </main>
      <footer className="footer"></footer>
      <Article />
    </div>
  )
}

export default App
