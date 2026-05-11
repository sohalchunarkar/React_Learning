import React from 'react'

const ChangeTheme = (props) => {
  return (
    <div>
        <button onClick={()=>{
            props.settheme('dark')
        }}>Changetheme</button>
    </div>
  )
}

export default ChangeTheme