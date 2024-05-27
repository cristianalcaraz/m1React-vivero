import React, { useState, useEffect } from "react";
import ItemDetail from "./itemDetail.jsx";
import getProducts from "../../data/data";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true); // Estado para controlar la carga
  const { idProduct } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((respuesta) => {
        const productFind = respuesta.find((productRes) => productRes.id === Number(idProduct));
        if (productFind) {
          setProduct(productFind);
        } else {
          // Manejar el caso en el que no se encuentre ningún producto
          console.log("Producto no encontrado");
          // Aquí podrías establecer un estado para indicar que el producto no se encontró
          setProductNotFound(true);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
        console.log("Finalizó la promesa");
      });
  }, [idProduct]);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : productNotFound ? (
        <p>Producto no encontrado</p> // Mensaje para indicar que el producto no se encontró
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
}
export default ItemDetailContainer;