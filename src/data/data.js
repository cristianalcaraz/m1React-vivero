//import ItemListConteiner from "../componets/ItemListConteiner/ItemListConteiner";

const products = [
    {
        id: "1",
        name: "Palo de Agua",
        description: "Considerada como una planta tropical, sus hojas son largas y colgantes con una pequeña franja amarilla en el medio, mientras que el tronco es grueso y color marrón.",
        price: 1200,
        stock: "10",
        category: "interior",
        image: "/image/planta1.jpg.jpeg",
    },
    {
        id: "2",
        name: "Cala ",
        description: "La cala o lirio de agua es una planta sin tallo, cuyas flores y hojas se elevan directamente a partir de rizomas. Crecen hasta alcanzar los 120 o 150 centímetros de altura y disponen de grandes hojas en forma de punta de flecha y pequeñas flores muy vistosa",
        price: 1200,
        stock: "10",
        category: "interior",
        image: "/image/planta2.jpg.jpeg",
    },
    {
        id: "3",
        name: "Monstera",
        description: "Planta de tallo grueso que alcanza 20 m de largo; Las hojas con muchos agujeros, grandes, correosas, brillantes, cordadas, de 20 a 90 cm de largo y de 20 a 80 cm de ancho.",
        price: 500,
        stock: "10",
        category: "exterior",
        image: "/image/planta3.jpg.jpeg",
    },
    {
        id: "4",
        name: "Rosa China",
        description: "El rosa china puede adaptarse a una variedad de tipos de suelo y crece mejor en un suelo ácido que sea fértil, suelto y drenado. Cuando se planta en jardín, hay que elegir un lugar elevado con la suficiente luz solar, una buena ventilación y un suelo ligeramente ácido.",
        price: 2200,
        stock: "10",
        category: "interior",
        image: "/image/planta4.jpg.jpeg",
    },
    {
        id: "5",
        name: "Palmera Rusa",
        description: "típicamente caedizo, pinnadas, finamente divididas, con folíolos lanceolados de hasta 1 m de largo, que se insertan en el raquis en distintas filas y agrupamientos dando a la hoja un aspecto plumoso.",
        price: 4200,
        stock: "10",
        category: "exterior",
        image: "/image/planta5.jpg.jpeg",
    },
    {
        id: "6",
        name: "Rayito de Sol",
        description: "Los rayitos de sol son plantas provenientes de Sudáfrica. Estas miden entre 20 a 30 centímetros de altura, sus hojas son muy peculiares ya que son muy similares a suculentas. su gran atractivo son sus flores, ",
        price: 6200,
        stock: "10",
        category: "exterior",
        image: "/image/planta6.jpg.jpeg.png",
    },
    {
        id: "7",
        name: "Petunia",
        description: "La Petunia hybrida es una planta perenne tratada bajo cultivo como anual que llega a medir hasta los 160 cm. Las hojas son alternas u opuestas, de 7 cm de largo por 3.5 de ancho. Están recubiertas por una vellosidad pegajosa. Las flores son redondas con la base en forma de tubo sobre pedúnculos de hasta 5 cm de largo",
        price: 8200,
        stock: "10",
        category: "exterior",
        image: "/image/planta7.jpg.png",
    },
    {
        id: "8",
        name: "The plan",
        description: "interior",
        price: 2200,
        stock: "10",
        category: "interior",
        image: "/image/planta8.jpg.png",
    },
    {
        id: "9",
        name: "Cuero de Sapo",
        description: "Mantén las hojas secas para evitar manchas de agua y un posible inicio de mildiu polvoriento. Podar y quitar las flores marchitas y las hojas amarillentas para promover un crecimiento más saludable. Revisa regularmente la humedad del suelo. Regar en exceso puede provocar pudrición de raíces",
        price: 8200,
        stock: "10",
        category: "exterior",
        image: "/image/planta9.jpg.png",
    },
    {
        id: "10",
        name: "Monedita",
        description: "La planta de la moneda es un arbusto suculento que proviene de áfrica, esta planta es muy fácil de cuidar ya que es bastante resistente",
        price: 2200,
        stock: "10",
        category: "interior",
        image: "/image/planta10.jpg.png",
    },
    {
        id: "11",
        name: "Cresta de gallo ",
        description: "La flor de terciopelo también es conocida como mano de león, celosía o cresta de gallo. La Celosia argentea, mejor conocida en nuestro país como flor de terciopelo o cresta de gallo, es una flor representativa de la celebración de Día de los Muertos ya que es utilizada por su llamativo color para decorar las ofrenda",
        price: 2200,
        stock: "10",
        category: "interior",
        image: "/image/planta11.jpg.png",
    },
    {
        id: "12",
        name: "Rosa de mesa",
        description: "Para que crezcan sanos y den bonitas flores, los rosales necesitan una tierra rica en nutrientes. Conviene plantarlos en un sustrato para macetas ligero, que permita un buen drenaje. Pon piedras o grava en el fondo de la maceta para mejorar el drenaje y evitar que el sustrato salga por los agujeros",
        price: 8200,
        stock: "10",
        category: "exterior",
        image: "/image/planta12.jpg.png",
    },
    {
        id: "13",
        name: "Dolar",
        description: "Para cuidar la planta del dinero, es esencial colocarla en un lugar con luz filtrada, evitando la exposición directa al sol intenso. Su mantenimiento es fácil, requiriendo riego regular pero no en exceso. Esta planta, apta para principiantes, no solo es resistente sino que también agrega belleza natural al hogar",
        price: 2200,
        stock: "10",
        category: "interior",
        image: "/image/planta13.jpg.png",
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

