import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { CartContextProvider } from './context/CartContext'

function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/> 
          <Routes>
            <Route path='/' element = {<ItemListConteiner greeting='Listado de todos los productos'/>} /> 
              <Route path='/category/:categoryId' element = {<ItemListConteiner greeting='Listado Filtrado'/>} />
              <Route path='/detail/:productId'  element = {<ItemDetailContainer />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
