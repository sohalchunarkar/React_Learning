import { useEffect } from 'react';
import './style.css'



function Navbar({name}) {
    
  useEffect(() => {
  alert('noargs pass when navbar render every time it will run')
  })
  
  //this will run when first render
  useEffect(() => {
    alert('this is the first render of the navbar')
  }, [])
  
 
  //cleanup function 



    return (
        <div>
            <nav>
                <ul>
                    <li>{name}</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
