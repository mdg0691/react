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
        
        // if(!categoryId){
        //     getProduct().then(products => {
        //         setProducts(products)
        //     })
        // } else {
        //     getProductByCategory(categoryId).then(products => {
        //         setProducts(products)
        //     })
        // }
    },[categoryId])

    return(
        <>
            <h1>{greeting}</h1>

            {/* <ul>
                {products.map(prod => <li key={prod.id}>{prod.name}</li>)}
            </ul> */}
            <ItemList products={products}/>
        </>
    )
}
 
export default ItemListConteiner