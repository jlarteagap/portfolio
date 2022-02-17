import React from 'react'
import Article from './components/articles/Articles'
import {
  BiHomeAlt,
  BiUser,
  BiBook,
  BiBriefcase,
  BiMessageSquare,
  BiMoon
} from 'react-icons/bi'

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
      <Article />
    </div>
  )
}

export default App
