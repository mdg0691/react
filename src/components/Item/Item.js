import'./Item.css'
import { Link } from 'react-router-dom'// lo utilizo para reemplazar
//el botton y con esta objeto seteo la pagina de la url
// el componente link es un ancore por detras
const Item =({product,id}) => {

    return(
        <li>
            <div className="CardStyle">
                <h3>{product.name}</h3>
                <img className="ItemCard" src={product.img} alt={product.name} />
                <h3>Precio : {product.price}</h3>
                <Link to={`/detail/${product.id}`} >Ver detalle del producto</Link>
            </div>
            <div>
                <h3>Stock Disponible : {product.stock}</h3>
            </div>
        </li>
    )
}

export default Item