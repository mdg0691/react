import './ItemListConteiner.css'
import { useState,useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListConteiner=({ greeting }) => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    
    useEffect(() => {
        setLoading(true)

        const collectionRef = !categoryId
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('category', '==', categoryId))

        getDocs(collectionRef).then(response => {
            console.log(response)
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                console.log(data)
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        }).catch(error =>{
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        
    },[categoryId])
    if(loading){
        return <h1>Cargando Productos..</h1>
    } 

        return(
            <div className='ItemListContainer'>
                <h1>{`${greeting} ${categoryId || ''}`}</h1>
                <ItemList products={products}/>
            </div>
        )
    
}
 
export default ItemListConteiner