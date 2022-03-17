/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { ThemeContext, themes } from '../context/ThemeContext'

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <ThemeContext.Consumer>
      {({ changeTheme }) => (
        <div
          className="change-theme"
          color="link"
          onClick={() => {
            setDarkMode(!darkMode)
            changeTheme(darkMode ? themes.light : themes.dark)
          }}
        >
          {darkMode ? <BiMoon /> : <BiSun />}
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
export default DarkMode
