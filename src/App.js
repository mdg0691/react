import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { CartContextProvider } from './context/CartContext'
import { NotificationProvider } from './notification/Notification'
import CartList from './components/CartList/CartList';
import Checkout from './components/Checkout/Checkout';

function App() {
  
  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar/> 
            <Routes>
                <Route path='/' element = {<ItemListConteiner greeting='Listado de todos los productos'/>} /> 
                <Route path='/category/:categoryId' element = {<ItemListConteiner greeting='Listado Filtrado'/>} />
                <Route path='/detail/:productId'  element = {<ItemDetailContainer />} />
                <Route path='/cart' element={<CartList />}/>
                <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
          </BrowserRouter> 
        </CartContextProvider>
      </NotificationProvider>
      
    </div>
  );
}

export default App;
