import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   return(
       <div className='Counter'>          
            <div className='Btn'>
                <button className='MinusBtn Button' onClick={decrement}>-</button>
                <h4 className='Count Button'>{quantity}</h4>
                <button className='PlusBtn Button' onClick={increment}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount