import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'
import DropdownMenu from '../DropdownMenu/DropdownMenu'


const NavBar = () => {

    return (
        <nav className='contenedor'>
            <Link to={'/'} className='enlace-logo'><img src="logonuevo.png" className="logo" alt="goat-hoops-logo"/></Link>

            <div className="nav__bar">
                <DropdownMenu/>
                <Link to={'/nosotros'} className="link">Nosotros</Link>
                <Link to={'/contacto'} className="link">Contacto</Link>
                <CartWidget />

            </div>

        </nav>
    )
}

export default NavBar;