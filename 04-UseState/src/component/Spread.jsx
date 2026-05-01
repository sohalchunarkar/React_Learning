import React, { useState } from 'react'

const Spread = () => {
    const [obj, setobj] = useState({ name: "alex", age: 23, city: "ytl" })
    const [arr, setarr] = useState([10,20,30,40])

    function printObj() {
        console.log(obj)
    }

    // mehthod of concept used in react
    function changeOjb(){
        // console.log("name changing")
        // let someObj = {...obj}
        // someObj.name = "parikshit"
        // setobj(someObj)

        setobj(prev => ({...prev , name :"parikshit"}))
    }

    function printArr(){
        console.log(arr)
    }

    function changeArr(){
        // let arr2 = [...arr]
        // arr2.push(23)
        // setarr(arr2)
        setarr(prev => ([...prev , 78]))
    }

    return (
        <>
            <h2>obj is {obj.name}</h2>
            <h2>Arrr is {arr}</h2>
            <button onClick={printObj}>This is spread showing button</button>
            <button onClick={changeOjb}>This is spread Change obj details</button>
            <button onClick={printArr}>This is print arr</button>
            <button onClick={changeArr}>This is spread Change arr  details</button>
        </>
    )
}

export default Spread