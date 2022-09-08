import './ItemListConteiner.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'

const ItemListConteiner = ({ greeting }) => {

    const { categoryId } = useParams()
    const getProductsFromFirestore = () => getProducts(categoryId)
    const { data, error, isLoading} = useAsync(getProductsFromFirestore, [categoryId])
    

    if(isLoading){
        return <h1>Cargando Productos..</h1>
    } 
    if(error){
        return <h1>404 FOUND</h1>
    }
      return(
            <div className='ItemListContainer'>
                <h1>{`${greeting} ${categoryId || ''}`}</h1>
                <ItemList products={data}/>
            </div>
        )
    
}
 
export default ItemListConteiner