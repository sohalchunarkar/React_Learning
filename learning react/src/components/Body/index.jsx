import "./style.css"
import products from "../products/product"
let obj = {
    name: "rohan ",
    age: 23
}

let cssname = "Rendering"
function Body() {
    const listitmes = products.map(pr => 
        <li key={pr.id}>
            {pr.title}
        </li>
    )
    return (
        <div>
            <h1 className={cssname}>the name of person is {obj.name} , age is {obj.age} </h1>
            <ul className="ProductsMultiple">
                {listitmes}
            </ul>
        </div>
    )
}

export default Body