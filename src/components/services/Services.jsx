import React from 'react'
import { BiRightArrowAlt, BiX, BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
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
  )
}

export default Services
