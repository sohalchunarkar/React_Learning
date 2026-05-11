import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ChangeTheme from './components/ChangeTheme'

const App = () => {
  const [theme, settheme] = useState('ligth')
  return (
    <div>
      <Navbar theme ={theme} >
        <h1>this is the children 1</h1>
        <h1>this is the children 2</h1>
      </Navbar>
      <ChangeTheme settheme = {settheme}  />
    </div>
  )
}

export default App