import './CardWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const CardWidget =() =>{
    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return(
    
            <Link to='/cart'>
                <img className="CardLogo" src='images\carrito.png' alt='CardWidget'/>
                <p>{ quantity }</p>
            </Link>
    
        
    )
}

export default CardWidget