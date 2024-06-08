import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

import "./itemDetail.css";


const ItemDetail = ({ product }) => {
  const [ocultarCount, setOcultarCount] = useState(false);

  const { agregarProducto } = useContext(CartContext);

  const addProduct = (count) => {
    //estructuramos el nuevo producto a añadir en el carrito
    //quantity = cantidad
    const productCart = { ...product, quantity: count };
    //usamos la funcion del context para añadir este producto al carrito
    agregarProducto(productCart);
      
    //una vez el usuario clickeo en "agregar producto" ocultamos el componente ItemCount
    setOcultarCount(true);
  };

  return (
    <div className="item-detail">
      <div className="image-detail">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="content-detail">
        <p className="name-detail">{product.name}</p>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>
        <ItemCount stock={product.stock} addProduct={addProduct} />

      </div>
    </div>
  );
};

export default ItemDetail;


 