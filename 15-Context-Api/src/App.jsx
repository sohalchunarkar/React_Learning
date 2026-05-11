import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ChangeTheme from './components/ChangeTheme'

const App = () => {
  const [theme, settheme] = useState('ligth')
  return (
    <div>
      <Navbar  />
      <ChangeTheme  />
    </div>
  )
}

export default App