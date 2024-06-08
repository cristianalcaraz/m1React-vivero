import { IoBagRemoveOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./cartWidget.css"


const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext)

  let cantidad = cantidadTotal()

  return (
    <Link to="/cart" className={ cantidad >= 1 ? "cartwireddget cart-red" : "cartwidget cart-blue" }>
      <IoBagRemoveOutline size={35}/>
      <p className="number"> { cantidad >=1 && cantidad } </p>
    </Link>
  )
}
export default CartWidget   

