import React, { useState, useEffect } from "react";
import ItemDetail from "./itemDetail.jsx";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true); // Estado para controlar la carga
//  const [productNotFound, setProductNotFound] = useState(false);
  const { idProduct } = useParams();

// getdDoc un solo producto cuantos serian para cargar todos ? linea 18
  const getProduct = () => {
    setLoading(true);

    const productRef = doc(db, "products", idProduct);
    getDoc(productRef)
      .then((productDb) => {
        //formateamos correctamente nuestro producto
        const data = { id: productDb.id, ...productDb.data() };
        setProduct(data);
      })
      .finally(() => setLoading(false));
  };


  useEffect(() => {
    getProduct();
  }, [idProduct]);

  return loading ? <loading /> : <ItemDetail product={product} />;
};

  export default ItemDetailContainer;