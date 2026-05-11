import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const ChangeTheme = () => {
    const [theme ,settheme] = useContext(ThemeDataContext)
    
  return (
    <div>
        <button onClick={()=>{
            settheme('dark')
            
        }}>Changetheme</button>
    </div>
  )
}

export default ChangeTheme