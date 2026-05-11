import React, { useState } from 'react'
import Navbar from './Navbar'

const App = () => {
  const [theme, settheme] = useState('light')
  return (
    <div>
      <h1>the theme is {theme}</h1>
      <Navbar  theme = {theme} settheme = {settheme}  />
    </div>
  )
}

export default App