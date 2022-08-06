import './App.css';
// import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
// import MercadoLibre from './components/MercadoLibre/MercadoLibre';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
// import Counter from './components/Counter/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom' // este componento es aquel que envuelve todos
//los componentes que pueden interactuar con la url
//Para definir todas las rutas tengo el componente routes
//Route -> con este componente detallo cual es la condicion que tiene que cumplir


function App() {

  // const [page, setPage] = useState('list')

  // const handleOnAdd = (quantity) => {
  //   console.log(`la cantidad agregada es : ${quantity}`)
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/> 
        <Routes>
           <Route path='/' element = {<ItemListConteiner greeting='Listado de todos los productos'/>} /> {/*lleva asociado una props que va a decir cual es el elemento que tiene que mostrar 
                    esta ruta que va a ser ItemListConteiner y va a tener otra props
                    que sera path , la cual dira cual es la ruta que tiene que decir para verificar
                    el componente*/}
            <Route path='/category/:categoryId' element = {<ItemListConteiner greeting='Listado Filtrado'/>} />
            <Route path='/detail/:productId'  element = {<ItemDetailContainer />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          {/* <Counter stock= {10} onAdd={handleOnAdd} /> */}
        </Routes>
      </BrowserRouter>
       {/* <div>
          <button onClick={() => setPage ('list') }>list</button>
          <button onClick={() => setPage ('detail') }>detail</button>
        </div> */}
        {/* {page === 'list' ? <ItemListConteiner greeting='Hola Comision 34695'/> : null} */}
        {/* {page === 'detail' ? <ItemDetailContainer /> : null} */}
        {/* <MercadoLibre  /> */}
    </div>
  );
}

export default App;
