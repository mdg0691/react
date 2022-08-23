import './CartItem.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'


const CartItem = ({ id, name, img, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <table className='CartBoxItem'>
            <tr>
                <th >Nombre</th>
                <th >Imagen</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>

            </tr>
            <tr>
                <td>{name}</td>
                <td>
                    <picture>
                        <img src={img} alt={name}/>
                    </picture>
                </td>
                <td> {quantity}</td>
                <td> {price}</td>
                <td>${price * quantity}</td>
                <td><button onClick={() => handleRemove(id)}>X</button></td>
            </tr>
        </table>
        
    )
}

export default CartItem