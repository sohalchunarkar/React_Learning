import React from 'react'
import "./App.css"

const App = () => {
  function clicked(ele) {
    console.log('the button is clicked');
    console.log(ele);


  }

  function nameSubmitted() {
    alert(`the name has been submitted`)
  }

  function nameWritten(e) {
    console.log(`the name writing is ${e.target.value}`)
  }
  return (
    <div>
      <button className='btn' onClick={(ele) => {
        clicked(ele)
      }}>Click Me</button>



      <div className="submit-name">
        <input type="text" onChange={(e) => {
          nameWritten(e)
        }} name="name" id="name" placeholder='Enter your name' />
        <button onClick={nameSubmitted}>Submit Name</button>
      </div>


    </div>



  )

}

export default App