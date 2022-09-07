import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import FormCheckout from './FormCheckout'
import { db } from "../../services/firebase"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate} from 'react-router-dom'
// import Form from "../Form/Form"

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, getQuantity, getTotal, clearCart, buyer} = useContext(CartContext)
    const totalQuantity = getQuantity()
    const total = getTotal()
    const navigate = useNavigate()

    const createOrder = async () => {
        setIsLoading(true)
        try {
            const objOrder ={
                buyer,
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
        <FormCheckout createOrder={createOrder}/>
    )
}

export default Checkout