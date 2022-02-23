import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import App from './App'
import ThemeContextWrapper from './theme/ThemeContextWrapper'

ReactDOM.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextWrapper>,
  document.getElementById('root')
)
