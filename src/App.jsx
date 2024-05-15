import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./componets/NavBar/NavBar.jsx";

import ItemListContainer from "./componets/ItemListConteiner/ItemListConteiner.jsx";
import ItemDetailContainer from "./componets/ItemDetailContainer/ItemDetailContainer.jsx";

// import ItemCount from './components/ItemCount/ItemCount'; // Uncomment if needed

import Exterior from "./componets/paginas/Exterior.jsx";
import Home from "./componets/paginas/Home.jsx";

import Interior from "./componets/paginas/Interior.jsx";

import './App.css';

function App() {
  // Uncomment the alert below if you want a welcome message on load
  // alert("Bienvenido a Tu vivero Digital");
  return (
      <div>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            {/* Corrected the usage of Route component with the `element` prop */}
            
            <Route path='/exterior' element={<Exterior />} />
            <Route path='/interior' element={<Interior />} />
            <Route path="/" element={<ItemListContainer saludo="Bienvenidos a tu Vivero Digital" />} />
            <Route path="/category/:idCategory" element={<ItemListContainer saludo="Bienvenidos!!" />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
