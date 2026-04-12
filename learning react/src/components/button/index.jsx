import { useState } from "react"
import "./style.css"
function MyButton() {
    const [count, setCount] = useState(0)

    function handleclick() {
        setCount(count + 1)
    }

    return (
        <button onClick={handleclick} className="countBtn">
            clicked {count} times
        </button>
    )
}

export default MyButton





function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
       
            <MyButton2 count={count} onClick={handleClick} />
            <MyButton2 count={count} onClick={handleClick} />
            <MyButton2 count={count} onClick={handleClick} />
            <MyButton2 count={count} onClick={handleClick} />
        </div>
    );
}

function MyButton2({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}
export {MyApp}
