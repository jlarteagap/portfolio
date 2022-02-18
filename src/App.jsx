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
  BiCheck,
  BiMailSend
} from 'react-icons/bi'
import { BsLinkedin, BsGithub, BsTwitter, BsWhatsapp } from 'react-icons/bs'
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
        <section className="about section" id="about">
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

        <section className="skills section" id="skills">
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
        <section className="services section" id="services">
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
        <section className="work section" id="work">
          <span className="section__subtitle">My Portfolio</span>
          <h2 className="section__title">Recent Works</h2>

          <div className="work__filters">
            <span className="work__item active-work" data-filter="all">
              All
            </span>
            <span className="work__item" data-filter="web">
              Web
            </span>
            <span className="work__item" data-filter="movil">
              Movil
            </span>
            <span className="work__item" data-filter="desing">
              Design
            </span>
          </div>

          <div className="work__container container grid">
            <div className="work__card mix web">
              <img src="" alt="Demo" className="work__img" />
              <h3 className="work__title">Web Desing</h3>
              <a href="#" className="work__button">
                Demo <BiRightArrowAlt className="work__icon" />
              </a>
            </div>
            <div className="work__card mix desing">
              <img src="" alt="Demo" className="work__img" />
              <h3 className="work__title">App movil</h3>
              <a href="#" className="work__button">
                Demo <BiRightArrowAlt className="work__icon" />
              </a>
            </div>
            <div className="work__card mix web">
              <img src="" alt="Demo" className="work__img" />
              <h3 className="work__title">Web Desing</h3>
              <a href="#" className="work__button">
                Demo <BiRightArrowAlt className="work__icon" />
              </a>
            </div>
            <div className="work__card mix movil">
              <img src="" alt="Demo" className="work__img" />
              <h3 className="work__title">App Movil</h3>
              <a href="#" className="work__button">
                Demo <BiRightArrowAlt className="work__icon" />
              </a>
            </div>
          </div>
        </section>
        <section className="contact section" id="contact">
          <span className="section__subtitle">Get in touch</span>
          <h2 className="section__title">Contact me</h2>
          <div className="contact__container container grid">
            <div className="contact__content">
              <h3 className="contact__title">Talk to me</h3>
              <div className="contact__info">
                <div className="contact__card">
                  <BiMailSend className="contact__card-icon" />
                  <h3 className="contact__card-title">Email</h3>
                  <span className="contact__card-data">
                    jorgelarteagap@gmail.com
                  </span>
                  <a
                    href="mailto:jorgelarteagap@gmail.com"
                    target="_blank"
                    className="contact__button"
                    rel="noreferrer"
                  >
                    Write me{' '}
                    <BiRightArrowAlt className="contact__button-icon" />
                  </a>
                </div>
                <div className="contact__card">
                  <BsWhatsapp className="contact__card-icon" />
                  <h3 className="contact__card-title">WhatsApp</h3>
                  <span className="contact__card-data">+591 77633551</span>
                  <a
                    href="https://wa.me/59177633551"
                    target="_blank"
                    className="contact__button"
                    rel="noreferrer"
                  >
                    Write me{' '}
                    <BiRightArrowAlt className="contact__button-icon" />
                  </a>
                </div>
                <div className="contact__card">
                  <BsTwitter className="contact__card-icon" />
                  <h3 className="contact__card-title">Twitter</h3>
                  <span className="contact__card-data">jlarteagap</span>
                  <a
                    href="http://twitter.com/jlarteagap"
                    target="_blank"
                    className="contact__button"
                    rel="noreferrer"
                  >
                    Write me{' '}
                    <BiRightArrowAlt className="contact__button-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="contact__content">
              <h3 className="contact__title">Write me your project</h3>

              <form action="" className="contact__form">
                <div className="contact__form-div">
                  <label htmlFor="" className="contact__form-tag">
                    Names
                  </label>
                  <input
                    type="text"
                    className="contact__form-input"
                    placeholder="Insert your names"
                  />
                </div>
                <div className="contact__form-div">
                  <label htmlFor="" className="contact__form-tag">
                    Mail
                  </label>
                  <input
                    type="email"
                    placeholder="Insert your email"
                    className="contact__form-input"
                  />
                </div>
                <div className="contact__form-div contact__form-area">
                  <label htmlFor="" className="contact__form-tag">
                    Project
                  </label>
                  <textarea
                    name=""
                    className="contact__form-input"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Write your project"
                  ></textarea>
                </div>
                <button className="button">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Jorge Arteaga</h1>
          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
              <a href="#work" className="footer__link">
                Projects
              </a>
              <a href="#blog" className="footer__link">
                Blog
              </a>
            </li>
          </ul>
          <ul className="footer__social">
            <a
              href="https://www.linkedin.com/in/jorge-luis-arteaga-perez/"
              target="_blank"
              className="footer__social-link"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/jlarteagap"
              target="_blank"
              className="footer__social-link"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://twitter.com/jlarteagap"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <BsTwitter />
            </a>
          </ul>
          <span className="footer__copy">
            &#169; Jorge Arteaga - All rigths reserved
          </span>
        </div>
      </footer>
      <Article />
    </div>
  )
}

export default App
