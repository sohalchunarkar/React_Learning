import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div className='nav-bar'>
        <div className='heading'>Router-Learning</div>
        <div className='sections'>
            <Link to ='/Home'>Home</Link>
            <Link to = '/About'>About</Link>
            <Link to= '/Contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar