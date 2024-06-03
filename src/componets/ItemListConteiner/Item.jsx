import { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const [expandir, setExpandir] = useState(false)
  // este se activa cuando el mause pasa por la card
  const handleMouseOver = () => {
  setExpandir(true)
  }
  //este evento se activa cuando el mause sale de la card
  const handleMouseLeave = ()  => {
    setExpandir(false)
  }
  // expandir card 1 seg 
  const estiloCard ={
    transform: expandir ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease-in-out"
  }

  return (
    <div className="item"
    style={estiloCard} 
    onMouseOver={handleMouseOver} 
    onMouseLeave={handleMouseLeave}
    >

      <img
        className="image-item"
        src={product.image}
        style={{ width: "200px" }}
      />
      <div className="content-item">
        <p>{product.name}</p>
        <Link to={`/detail/${product.id}`} className="button-item"> 
        Ver detalles 
        </Link>
      </div>
    </div>
  );
};
export default Item;