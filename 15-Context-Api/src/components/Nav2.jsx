import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav2 = () => {
    const [theme, settheme] = useContext(ThemeDataContext)
 
    return (
        <div className='Nav-2'>
            <h3>Services</h3>
            <h3>About</h3>
            <h3>Contact</h3>
            <h3>{theme}</h3>
        </div>
    )
}

export default Nav2