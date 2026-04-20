import React from 'react'
import "./App.css"
import Card from './components/Card'
import { arr } from './data/companydata'

const App = () => {
  return (
    <div className="card-container">
      {arr.map((data) => (
        <Card key={data.id} userInfo={data} />
      ))}
    </div>
  )
}

export default App