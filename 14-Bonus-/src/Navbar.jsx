import React from 'react'

const Navbar = (props) => {
          
  return (
    <button onClick={()=>{
        props.settheme('dark')
    }} >change theme</button>
  )
}

export default Navbar