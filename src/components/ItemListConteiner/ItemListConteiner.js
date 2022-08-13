import './ItemListConteiner.css'
import { getProduct, getProductByCategory } from '../../asyncMock'
import { useState,useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListConteiner=({ greeting }) => {
    
    const [products, setProducts] = useState([])
    console.log(products)

    const { categoryId} = useParams()
    
    useEffect(() => {
        const asyncFunction = categoryId ? getProductByCategory : getProduct

        asyncFunction(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        })
    },[categoryId])

    return(
        
        <div className='ItemListContainer'>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
 
export default ItemListConteiner