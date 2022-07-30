import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import Counter from './components/Counter/Counter';
function App() {

  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es : ${quantity}`)
  }
  return (
    <div className="App">
      <Navbar/>
      <ItemListConteiner greeting='Articulos'/>
      <Counter stock= {10} onAdd={handleOnAdd} />
    </div>
  );
}

export default App;
