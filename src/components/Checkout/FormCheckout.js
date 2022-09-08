import {useContext } from 'react';
import CartContext from '../../context/CartContext'
// import './FormCheckout.css'


const FormCheckout = ({createOrder}) =>{

    const {buyer, setBuyer} = useContext(CartContext)
    const {firstName, lastName, address, phone, email} = buyer

    
    const handleChange = (e) =>{
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value            
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    
    return (
        <>
            <h1>Formulario de Pago</h1>
            <div>
            <form onSubmit={handleSubmit}>
                <input 
                    required
                    type = 'text' 
                    name = 'firstName' 
                    placeholder = 'Nombre'
                    value = {firstName}
                    onChange = {handleChange} 
                /><br/><br/>
                <input 
                    type = 'text' 
                    name = 'lastName' 
                    placeholder = 'Apellido'
                    value = {lastName}
                    onChange = {handleChange} 
                /><br/><br/>
                <input 
                    type = 'text' 
                    name = 'phone' 
                    placeholder = 'Telefono'
                    value = {phone}
                    onChange = {handleChange} 
                /><br/><br/>
                <input 
                    type = 'text' 
                    name = 'address' 
                    placeholder = 'Direccion'
                    value = {address}
                    onChange = {handleChange} 
                /><br/><br/>
                <input 
                    type = 'text' 
                    name = 'email' 
                    placeholder = 'Correo Electronico'
                    value = {email}
                    onChange = {handleChange} 
                /><br/><br/>
                {(firstName && lastName && address && phone && email ) && <button onClick={()=>createOrder()}>Generar Orden</button>}
            </form>
        </div>
            
        </>
    )
}

export default FormCheckout