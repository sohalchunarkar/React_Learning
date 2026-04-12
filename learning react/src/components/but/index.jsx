import { useState } from "react";

export default function Clicked()
{   
    let[click , setClick] = useState(0);
    function handleClick()
    {
        setClick(click+1)
    }
    return(
        <>
        <button onClick={handleClick}>
            count {click}
        </button>
        </>
    )
}