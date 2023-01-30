/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { ThemeContext, themes } from '../context/ThemeContext'

const ThemeContextWrapper = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark)

  function changeTheme(theme) {
    setTheme(theme)
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('light-theme')
        break
      case themes.dark:
      default:
        document.body.classList.remove('light-theme')
        break
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme: themes, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextWrapper
