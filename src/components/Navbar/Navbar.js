import './Navbar.css'
import './Button.js'
import Button from './Button.js'
import CardWidget from '../CardWidget/CardWidget'
import Logo from '../Logo/Logo'

const Navbar = () => {
    return(
        <nav className="Navbar">
            <ul className="List">
                <li><Logo/></li>
                <li><Button label='Zapatillas' color='white'background='#8c038c'/></li>
                <li><Button label='Zapatos'color='white'background='#8c038c'/></li>
                <li><Button label='Remeras'color='white'background='#8c038c'/></li>
                <li><Button label='Bermudas'color='white' background='#8c038c'/></li>
                <li><CardWidget/></li>
            </ul>
        </nav>
    )
}

export default Navbar