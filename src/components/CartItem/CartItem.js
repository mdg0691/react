import './CartItem.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'


const CartItem = ({ id, name, img, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div className='CartBoxItem'>
            <div>
                <div>{name}</div>
                <div>
                    <picture>
                        <img src={img} alt={name}/>
                    </picture>
                </div>
                <div> {quantity}</div>
                <div> {price}</div>
                <div>${price * quantity}</div>
                <div><button onClick={() => handleRemove(id)}>X</button></div>
            </div>
        </div>
        
    )
}

export default CartItem