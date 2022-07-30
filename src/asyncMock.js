const products = [
    {
        id: '1',
        name: 'nike pegasus',
        price: '2000',
        category: 'man',
        img: 'images/item01.jpeg',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '2',
        name: 'asdfasdf',
        price: '2000',
        category: 'man',
        img: 'images/item02.jpg',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '3',
        name: 'asdasdf',
        price: '2000',
        category: 'man',
        img: 'images/item03.jpeg',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '4',
        name: 'asdasdf  ',
        price: '2000',
        category: 'man',
        img: 'images/item04.jpeg',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '5',
        name: '',
        price: '2000',
        category: 'man',
        img: '',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '6',
        price: '2000',
        category: 'man',
        img: '',
        stock: '10',
        description: 'Zapatilla ideal para running'
    },
    {
        id: '7',
        price: '2000',
        category: 'man',
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