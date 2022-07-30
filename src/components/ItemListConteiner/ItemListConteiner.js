import './ItemListConteiner.css'
import { getProduct } from '../../asyncMock'
import { useState,useEffect } from 'react'
import ItemList from '../ItemList/ItemList'


const ItemListConteiner=({ greeting }) => {
    
    const [products, setProducts] = useState([])
    console.log(products)
    
    useEffect(() => {
        getProduct().then(products => {
            setProducts(products)
        })
    },[])

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