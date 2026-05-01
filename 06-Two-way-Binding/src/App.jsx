import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('')
  function submitForm(e){
    e.preventDefault()
    console.log("from submitted by.. ",title)
    settitle('')

  }
  return (
    <form onSubmit={(e)=>{
      submitForm(e)
    }}>
      <input type="text" value={title} placeholder='Enter Your Name' onChange={(e)=>{
        settitle(e.target.value)
      }} />
      <button>Submit</button>
    </form>
  )
}

export default App