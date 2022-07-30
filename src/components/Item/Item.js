import'./Item.css'
const Item =({product}) => {

    return(
        <li>
            <div>
                <h3>{product.name}</h3>
                <img className="ItemCard" src={product.img} alt={product.name} />
                <h3>Precio : {product.price}</h3>
                <button>Ver detalle del producto</button>
            </div>
            <div>
                <h3>Stock Disponible : {product.stock}</h3>
            </div>
        </li>
    )
}

export default Item