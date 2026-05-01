import React, { useState } from 'react'
import Spread from './component/Spread'

const App = () => {
  const [count, setcount] = useState(0)
  return (
    <>
      <div>
        <h1>Count is {count}</h1>
        <button onClick={() => { setcount(count + 1) }}>increase</button>
        <button onClick={() => { setcount(count - 1) }}>decrease</button>
      </div>

      <div>
        <Spread />
      </div>
    </> 

  )
}

export default App