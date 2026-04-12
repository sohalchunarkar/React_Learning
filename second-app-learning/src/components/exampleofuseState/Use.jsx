
//This is the example of use state
//and the prop as well
import { useState, useEffect ,useRef} from 'react';

export default function Use(prop) {
    let [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1)
    }

    function reset() {
        setCount(0)
    }

    let a = useRef(0)
    // let a = 0
    useEffect(() => {
        a.current = a.current + 1;
        console.log(`the value of ${a.current}`)
        // a = a+1
        // console.log(`the value of ${a}`)

    })


    return (
        <>
            <button onClick={handleClick}>count is {count}</button>
            <button onClick={reset}> {prop.name} </button>
            <button > {a.current} </button>
            <div>{prop.message}</div>
        </>
    )
}