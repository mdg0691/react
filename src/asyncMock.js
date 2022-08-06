const products = [
    {
        id: '1',
        name: 'nike pegasus',
        price: '2000',
        category: 'man',
        img: 'https://ibb.co/yNp1M3T',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '2',
        name: 'detalle2',
        price: '2000',
        category: 'man',
        img: 'images/item02.jpg',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '3',
        name: 'detalle3',
        price: '2000',
        category: 'womwn',
        img: 'images/item03.jpeg',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '4',
        name: 'detalle4',
        price: '2000',
        category: 'women',
        img: 'images/item04.jpeg',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '5',
        name: 'detalle5',
        price: '2000',
        category: 'childs',
        img: '',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '6',
        name: 'detalle6',
        price: '2000',
        category: 'accesories',
        img: '',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '7',
        name: 'detalle7',
        price: '2000',
        category: 'accesories',
        img: '',
        stock: '10',
        description: 'Zapatilla ideal para running'
    }
]

export const getProduct =() =>{
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(products)
        },3000)
        
    })
}

export const getProductByCategory =(categoryId) =>{
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === categoryId))
        },500)
        
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find( prod => prod.id === id))
        },3000)
        
    })
}