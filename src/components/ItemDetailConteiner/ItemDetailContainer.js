import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { useAsync } from '../../hooks/useAsync'
import { getProd } from '../../services/firebase/firestore'

const ItemDetailContainer = () => {
    const { productId } = useParams()
    const getProdFromFirestore = () => getProd(productId) 
    const { data, error, isLoading} = useAsync(getProdFromFirestore, [productId])

    if(isLoading){
        return <h1>Cargando Producto..</h1>
    }
    if(error){
        return <h1>404 FOUND</h1>
    } 
        return(
            <div className="ItemDetailBox">
                    <h1>Detalle</h1>
                 
                    <ItemDetail {...data}/>
                
            </div>  
    )
} 

export default ItemDetailContainer