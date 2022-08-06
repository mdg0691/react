import './Navbar.css'
import CardWidget from '../CardWidget/CardWidget'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'  
const Navbar = () => {
    return(
        <nav className="Navbar">
            <ul className="List">
                <li><Logo/></li>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/category/man'>Hombres</Link></li>
                <li><Link to='/category/women'>Mujeres</Link></li>
                <li><Link to='/category/childs'>Niños</Link></li>
                <li><Link to='/category/accesories'>Accesorios</Link></li>
                <li><CardWidget/></li>
            </ul>
        </nav>

    )
}

export default Navbar