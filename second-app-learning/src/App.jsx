
import { useEffect, useState } from 'react'
import './App.css'
import Use from './components/exampleofuseState/Use'

import Navbar from './components/useEffect/navbar'

function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
   alert('the count is been modified')
  }, [count])
  

  return (
    <>
      <Navbar name="something" />
      <Use name="hello" key="23" message="this is the desc" />
      <button>{count}</button>
      <button onClick={() => setCount(count + 1)} >button for count increase</button>
      <button onClick={() => setCount(0)}>button for count reset</button>
    </>
  )
}

export default App
