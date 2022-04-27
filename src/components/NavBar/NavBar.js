import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import DropdownMenu from '../DropdownMenu/DropdownMenu'

const NavBar = () => {


    return (
        <nav className='contenedor'>
            <Link to={'/'} className='enlace-logo'><img src="logonuevo.png" className="logo" alt="goat-hoops-logo"/></Link>

            <div className='search-bar'>
                <FontAwesomeIcon className='search-bar_lupa' icon={faMagnifyingGlass} />
                <input className='search-bar_barra' placeholder='Encontrá acá tus productos preferidos'/>
            </div>

            <div className="nav__bar">
                <DropdownMenu />
                <Link to={'/nosotros'} className="link">Nosotros</Link>
                <Link to={'/contacto'} className="link">Contacto</Link>
                <CartWidget ammount="0"/>

            </div>

        </nav>
    )
}

export default NavBar;