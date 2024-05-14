import NavBar from './componets/NavBar/NavBar'
import ItemListConteiner from './componets/ItemListConteiner/ItemListConteiner'
//import ItemCount from './componets/ItemCount/ItemCount'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import exterior from './componets/paginas/exterior'
import home from './componets/paginas/home'
import interior from './componets/paginas/interior'

import './App.css';


function App() {
  //alert("Bienvenido a Tu vivero Digital")
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <NavBar />
          <Switch>
            <Route path='/' exact Component={home} />

            <Route path='/' exact Component={exterior} />
            <Route path='/' exact Component={interior} />
          </Switch>
        </Routes>


        <Routes>

          <Route path="/" element={<ItemListConteiner saludo="Bienvenidos a tu Vivero Digital" />} />
          <Route path="/category/:idCategory" element={<itemListContainer saludo="Bienvenidos!!" />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />

        </Routes>



      </BrowserRouter>

    </div>


  )
}

export default App;
