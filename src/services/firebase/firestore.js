
import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore'
import { db } from './index'

export const getProducts = (categoryId) => {
    const collectionRef = !categoryId
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('category', '==', categoryId))

        return getDocs(collectionRef).then(response => {
            console.log(response)
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                console.log(data)
                return { id: doc.id, ...data}
            })
            return productsAdapted
        }).catch(error => {
            return error
        })
} 

export const getProd = (prodId) => {
    return getDoc(doc(db, 'products',prodId)).then(res => {
        const data = res.data()
        const productDb = {id:res.id, ...data}
        
        return productDb

    }).catch(error =>{
        return error
    })
}

export const getCategories =()=>{
    const allCategories = collection(db, 'categories')
    return getDocs(allCategories).then((response) =>{
        const categories = response.docs.map((snap)=>{
            return{
                id: snap.id,
                ...snap.data()
            }
        })
        return categories
    }).catch(error =>{
        return error
    })
}