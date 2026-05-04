import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setdata] = useState([])
  let apiCalling = async ()=> {
    // with help of async
    // const response = await fetch('https://picsum.photos/v2/list')

    // const reps = await response.json()
    // // console.log(reps)
    // setdata(reps)

    // with help of axios

    const response  = await axios.get('https://picsum.photos/v2/list')

    console.log(response.data )
    setdata(response.data)
  }


  return (
    <>
      <div onClick={apiCalling}>App</div>
      {
        data.map(function printdat(elem) {
          return <h2 key={elem.id}>{elem.author} and {elem.id}</h2>
        })
      }
    </>

  )
}

export default App