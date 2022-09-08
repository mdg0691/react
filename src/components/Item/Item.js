import'./Item.css'
import { Link } from 'react-router-dom'

const Item =({id, name, img, price}) => {
    const handleClick = (e) => {
        e.stopPropagation()
        console.log('hice click en item')
    }
    return(
        <article className="CardItem" onClick={handleClick}>
            <header>
                <h2 >
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p >
                    Precio: ${price}
                </p>
            </section>           
            <footer>
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item