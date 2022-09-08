import './Navbar.css'
import CardWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom' 
import { useAsync } from '../../hooks/useAsync';
import { getCategories } from '../../services/firebase/firestore';

const Navbar = () => {
    const {data,error} = useAsync(() => getCategories())

    if(error){
        console.log(error)
    }
    
    return(
        <nav className="Navbar">
            <ul className="List">
                <li><img className="MainLogo" src='images\logoTN.jpeg' alt='logo'/></li>
                <li><Link to='/'>HOME</Link></li>
                {data?.map((category) =>(
                            <li><Link to={category.path} key={category.name} className='link'>{category.name}</Link></li>
                        ))}
                <CardWidget/>
            </ul>
            
        </nav>

    )
}

export default Navbar