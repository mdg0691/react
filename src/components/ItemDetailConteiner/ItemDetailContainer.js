import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
        .then(product => {
            setProduct(product)
        })
        .catch(error => { 
            console.log(error)
        })
    }, [productId])

    console.log(product)
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