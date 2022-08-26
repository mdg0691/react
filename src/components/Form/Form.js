import { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState ('')
    const [lastName, setlastName] = useState ('')
    const [phone, setPhone] = useState ('')
    const [address, setAddress] = useState ('')
    const [email, setEmail] = useState ('')

    const handletChangeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handletChangeLastName = (e) => {
        setlastName(e.target.value)
    }

    const handletChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const handletChangeAddress = (e) => {
        setAddress(e.target.value)
    }
    const handletChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type = 'text' 
                    name = 'firstname' 
                    placeholder = 'Nombre'
                    value = {firstName}
                    onChange = {handletChangeFirstName} 
                /><br/><br/>
                <input 
                    type = 'text' 
                    name = 'lastname' 
                    placeholder = 'Apellido'
                    value = {lastName}
                    onChange = {handletChangeLastName} 
                /><br/><br/>
                <input 
                    type = 'text' 
                    name = 'phone' 
                    placeholder = 'Telefono'
                    value = {phone}
                    onChange = {handletChangePhone} 
                /><br/><br/>
                <input 
                    type = 'text' 
                    name = 'address' 
                    placeholder = 'Direccion'
                    value = {address}
                    onChange = {handletChangeAddress} 
                /><br/><br/>
                <input 
                    type = 'text' 
                    name = 'email' 
                    placeholder = 'Correo Electronico'
                    value = {email}
                    onChange = {handletChangeEmail} 
                /><br/><br/>

                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Form