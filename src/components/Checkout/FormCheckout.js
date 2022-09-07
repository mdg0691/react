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
            <h1>Checkout</h1>
            {/* <Form/> */}
            <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type = 'text' 
                    name = 'firstname' 
                    placeholder = 'Nombre'
                    value = {firstName}
                    onChange = {handleChange} 
                /><br/><br/>
                <input 
                    type = 'text' 
                    name = 'lastname' 
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
                <button onClick={createOrder}>Generar Orden</button>
                {/* <button>Enviar</button> */}
            </form>
        </div>
            
        </>
    )
}

export default FormCheckout