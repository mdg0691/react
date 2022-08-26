import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { db } from "../../services/firebase"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate} from 'react-router-dom'
// import Form from "../Form/Form"

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, getQuantity, getTotal, clearCart} = useContext(CartContext)
    const totalQuantity = getQuantity()
    const total = getTotal()
    const navigate = useNavigate()
 
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

    const createOrder = async () => {
        setIsLoading(true)
        try {
            const objOrder ={
                buyer:{
                  firstName: firstName,
                  lastName: lastName,
                  phone: phone,
                  address: address,
                },
                items: cart, 
                totalQuantity,
                total,
                date: new Date()
              }
    
              const ids = cart.map (prod => prod.id)
              console.log(ids)
    
              const productsRef = collection(db , 'products')
              const screenshopFromFirestore = await getDocs(query (productsRef, where (documentId(), 'in', ids)))
              const { docs } = screenshopFromFirestore
              const outOfStock = []
    
              const batch= writeBatch(db)
    
              docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDB = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity 
    
                if( stockDB >= prodQuantity ){
                    batch.update(doc.ref, { stock: stockDB - prodQuantity })
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
              })
    
              if(outOfStock.length === 0){
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                console.log(`El id de su orden es : ${orderAdded.id}`)
                clearCart()
                setOrderCreated(true)

                setTimeout(() => {
                    navigate('/')
                }, 3000 )
               
              } else{
                console.log('Hay productos fuera de stock')
              }
        } catch (error){
            console.log(error)
        } finally {
            setIsLoading(false)
        }

        if(isLoading){
            return <h1>La orden esta generandose...</h1>
        }

        if(orderCreated){
            return <h1>La orden fue creada correctamente , sera redirigido al listado de productos</h1>
        }
        
        
}
    return(
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
                <button onClick={createOrder}>Generar Orden</button>
                {/* <button>Enviar</button> */}
            </form>
        </div>
            
        </>
    )
}

export default Checkout