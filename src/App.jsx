import NavBar from "./componets/NavBar/NavBar.jsx";
import ItemListContainer from "./componets/ItemListConteiner/ItemListConteiner.jsx";
import ItemDetailContainer from "./componets/ItemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./componets/context/CartContext.jsx";
import Cart from "./componets/cart/Cart.jsx";
import Checkout from './componets/checkout/Checkout.jsx';
import { ToastContainer } from "react-toastify";
import React from 'react';

import Exterior from "./componets/paginas/Exterior.jsx";


import Interior from "./componets/paginas/Interior.jsx";

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>

          <NavBar />
          <ToastContainer theme="dark"/>
          <Routes>
            {/* Corrected the usage of Route component with the element prop */}

            <Route path='/exterior' element={<Exterior />} />
            <Route path='/interior' element={<Interior />} />
            <Route path="/" element={<ItemListContainer saludo="Bienvenidos a tu Vivero Digital" />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App; 