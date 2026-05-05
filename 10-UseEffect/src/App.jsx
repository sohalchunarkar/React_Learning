import React, { useEffect, useState } from 'react'

const App = () => {
  const [num1, setnum1] = useState(1)
  const [num2, setnum2] = useState(10)
  // useEffect(() => {
  //  console.log("normal use Effect run's on Every state change")
  // })
  // useEffect(() => {
  //  console.log("run one's on first render")
  // },[])
  useEffect(() => {
    // also it run's on first render
   console.log("run's on dependency value change we provide")
  },[num1])
  
  return (
    <div>
      <h1>{num1}</h1>
      <h1>{num2}</h1>
      {/* <h2>hello</h2> */}

      <button onClick={()=>{setnum1(num1+1)}}>num1++</button>
      <button onClick={()=>{setnum1(num2+1)}}>num2++</button>
    </div>
  )
} 

export default App