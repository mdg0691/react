const products = [
    {
        id: '1',
        name: 'Modelo 1',
        price: '2000',
        category: 'man',
        img: 'https://i.ibb.co/j8J95Z7/c9228755-76ed-4c8b-9f78-01594293c8031-2c383e7ed05f6f0fa216230066604637-640-0.jpg',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '2',
        name: 'Modelo 2',
        price: '2000',
        category: 'man',
        img: 'https://i.ibb.co/LxjQjJb/169345095-202303694680998-1788632182487173646-n1-c6f836992de5b7895b16178364671782-640-0.jpg',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '3',
        name: 'Modelo 3',
        price: '2000',
        category: 'women',
        img: 'https://i.ibb.co/z2KQc86/8fddffeb-155b-4294-9aa0-69cefcf338871-2513b1b69ffbca72c216560143333541-640-0.jpg',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '4',
        name: 'Modelo 4',
        price: '2000',
        category: 'women',
        img: 'https://i.ibb.co/99TcMLt/FB-IMG-1658491609910.jpg',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '5',
        name: 'Modelo 5',
        price: '2000',
        category: 'childs',
        img: 'https://i.ibb.co/SQQK1Dn/e7c8e46d-fb9a-43d4-8d06-c39fd1621e851-8bbde7764bc3a9bb2f16197298224159-480-0.jpg',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '6',
        name: 'Modelo 6',
        price: '2000',
        category: 'accesories',
        img: 'https://i.ibb.co/99TcMLt/FB-IMG-1658491609910.jpg',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '7',
        name: 'Modelo 7',
        price: '2000',
        category: 'accesories',
        img: 'https://i.ibb.co/Qkt9Pys/2a9c126d-ee7d-4dea-84a2-6e6ff8261d7f1-d1dfe6499a5ca5306216507276680816-640-0.jpg',
        stock: '10',
        description: 'Zapatilla ideal para running'
    }
]

export const getProduct =() =>{
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(products)
        },1000)
        
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
        },1000)
        
    })
}