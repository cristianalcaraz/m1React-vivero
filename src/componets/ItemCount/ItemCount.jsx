import { useState } from "react"
import "./Itemcount.css";

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)
    //restar al carrito  - 
    const handleClickLees = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    // sumar al carrito  +
    const handleClickIncrement = () => {
        if (count < stock)
            setCount(count + 1)

    }

    //agregar al carrito
    const handleClickAddToCart = () => {
        addProduct(count)
    };

    return (
        <div className="itemcount">
            <div className="controls-itemcount">
                <button className="button-controls" onClick={handleClickLees}>-</button>
                <p>{count}</p>
                <button className="button-controls" onClick={handleClickIncrement}>+</button>
            </div>
            <button className="button-controls"  onClick={handleClickAddToCart} >Agregar al Carrito</button>
        </div>
    )
}
export default ItemCount;