import React from 'react'
import Nav2 from './Nav2'

const Navbar = (props) => {
    console.log(props.children[0])
  return (
    <div className='Nav'>
        <h1>Theme</h1>
   
        <Nav2 theme = {props.theme} />
    </div>
  )
}

export default Navbar