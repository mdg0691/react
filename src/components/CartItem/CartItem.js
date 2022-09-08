import './CartItem.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'


const CartItem = ({ id, name, quantity, price }) => {

    const { removeItem } = useContext(CartContext)
    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div className='CartBoxItem'>
            <div className='CartFlex'>
                <div className='CartItem'>{name}</div>
                <div className='CartItem'> Cantidad: {quantity}</div>
                <div className='CartItem'> Precio unitario: {price}</div>
                <div className='CartItem'>Subtotal: ${price * quantity}</div>
                <div className='CartItem'><button onClick={() => handleRemove(id)}>X</button></div>
            </div>
        </div>
        
    )
}

export default CartItem