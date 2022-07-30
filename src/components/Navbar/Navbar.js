import './Navbar.css'
import Button from '../Button/Button'
import CardWidget from '../CardWidget/CardWidget'
import Logo from '../Logo/Logo'

const Navbar = () => {
    return(
        <nav className="Navbar">
            <ul className="List">
                <li><Logo/></li>
                <li><Button label='Hombre' color='white'background='#8c038c'/></li>
                <li><Button label='Mujeres'color='white'background='#8c038c'/></li>
                <li><Button label='Niños'color='white'background='#8c038c'/></li>
                <li><Button label='Accesorios'color='white' background='#8c038c'/></li>
                <li><CardWidget/></li>
            </ul>
        </nav>

    )
}

export default Navbar