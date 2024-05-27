import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

import "./itemDetail.css";

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(0); // Estado para la cantidad de productos
  const { agregarProducto } = useContext(CartContext); // Función para agregar producto al carrito

  const addProduct = () => {
    // Estructuramos el nuevo producto a añadir en el carrito
    const productCart = { ...product, quantity: count };
    // Usamos la función del contexto para añadir este producto al carrito
    agregarProducto(productCart);
  };

  const handleCountChange = (newCount) => {
    // Función para actualizar el estado de la cantidad de productos
    setCount(newCount);
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
        <ItemCount stock={product.stock} onCountChange={handleCountChange} />
        <button onClick={addProduct}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;