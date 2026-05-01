import React from 'react'

const App = () => {

  function submitHandler(e){
    e.preventDefault()
    console.log("form submitted")
  }
  return (
    <form onSubmit={(e)=>{
      submitHandler(e)
    }}>
      <input type="text" placeholder='Enter your name' />
      <button>Submit</button>

    </form>
  )
}

export default App