import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import {getDoc, doc} from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)
        getDoc(doc(db, 'products', productId)).then(response => {
            const data = response.data()
            const productsAdapted = {id:response.id, ...data}
            setProduct(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        }) 
    }, [productId])

    console.log(product)

    if(loading){
        return <h1>Cargando Producto..</h1>
    } 
        return(
            <>
                <div>
                    <h1>Detalle</h1>
                </div>
                <div className="ItemDetailConteiner">   
                    <ItemDetail {...product}/>
                </div>
            </>  
    )
} 

export default ItemDetailContainer