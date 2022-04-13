import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav>
            <Link to={'/'} className='enlace-logo'><img src="../img/logo.png" className="logo" alt="goat-hoops-logo"/></Link>

            <div className="nav__bar">
                <div className="btn-group dropdown">
                    <button className="btn btn-secondary dropdown-toggle link" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                        Productos
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                            <div className="btn-group dropend">
                                <button className="btn btn-secondary dropdown-toggle link btn-submenu" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    Camisetas
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                    <li><Link to={'/categoria/camisetas/icon'} className="dropdown-item">Icon</Link></li>
                                    <li><Link to={'/categoria/camisetas/association'} className="dropdown-item">Association</Link></li>
                                    <li><Link to={'/categoria/camisetas/city-edition'} className="dropdown-item">City Edition</Link></li>
                                    <li><Link to={'/categoria/camisetas/hardwood-classics'} className="dropdown-item">Hardwood Classics</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li><Link to={'/categoria/remeras'} className='dropdown-item'>Remeras</Link></li>
                        <li><Link to={'/categoria/shorts'} className='dropdown-item'>Shorts</Link></li>
                        <li><Link to={'/categoria/buzos'} className='dropdown-item'>Buzos</Link></li>
                    </ul>
                </div>

                <Link to={'/nosotros'} className="link">Nosotros</Link>
                <Link to={'/contacto'} className="link">Contacto</Link>
                <CartWidget ammount="0"/>

            </div>

        </nav>
    )
}

export default NavBar;