import React from 'react'

const App = () => {
  //  localStorage.setItem()
  //  const name = localStorage.getItem('user')
  //  console.log(name)

  const obj = {
    name : "alex" ,
    age : 12 , 
    email :"email@xyz.com"
  }
  // localStorage.setItem('user2' , JSON.stringify(obj))

  // console.log(typeof(localStorage.getItem('user2')));
  
  const getuser2 = JSON.parse(localStorage.getItem('user2'))

  console.log(getuser2);

  localStorage.removeItem('age')
  

  return (
    <div>App</div>
  )
}

export default App