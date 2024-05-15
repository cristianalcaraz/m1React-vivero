//import ItemListConteiner from "../componets/ItemListConteiner/ItemListConteiner";

const products = [
    {
        id: "1",
        name: "Palo de Agua",
        description: "interior",
        price: 1200,
        stock: "10",
        category: "interior",
        image: "/image/planta1.jpg.jpeg",
    },
    {
        id: "2",
        name: "Cala ",
        description: "interior",
        price: 1200,
        stock: "10",
        category: "interior",
        image: "/image/planta2.jpg.jpeg",
    },
    {
        id: "3",
        name: "Monstera",
        description: "interior",
        price: 500,
        stock: "10",
        category: "exterior",
        image: "/image/planta3.jpg.jpeg",
    },
    {
        id: "4",
        name: "Rosa China",
        description: "interior",
        price: 2200,
        stock: "10",
        category: "interior",
        image: "/image/planta4.jpg.jpeg",
    },
    {
        id: "5",
        name: "Palmera Rusa",
        description: "interior",
        price: 4200,
        stock: "10",
        category: "exterior",
        image: "/image/planta5.jpg.jpeg",
    },
    {
        id: "6",
        name: "Rayito de Sol",
        description: "interior",
        price: 6200,
        stock: "10",
        category: "exterior",
        image: "/image/planta6.jpg.jpeg.png",
    },
];

//obtener productos
const getProducts = () => {
    return new Promise((resolve, reject) => {
      //simulamos un retraso de red
      setTimeout(() => {
        resolve(products)
      }, 100);
    });
  };
export default getProducts ;

