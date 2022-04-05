import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap'


const NavBar = () => {

    return (
        <nav>
            <a href="/" className="enlace-logo"><img src="../img/logo.png" className="logo" alt="goat-hoops-logo"/></a>

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
                                    <li><a className="dropdown-item" href="#">Icon</a></li>
                                    <li><a className="dropdown-item" href="#">Association</a></li>
                                    <li><a className="dropdown-item" href="#">City Edition</a></li>
                                    <li><a className="dropdown-item" href="#">Throwback</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a className="dropdown-item" href="#">Remeras</a></li>
                        <li><a className="dropdown-item" href="#">Shorts</a></li>
                        <li><a className="dropdown-item" href="#">Buzos</a></li>
                    </ul>
                </div>

                <a href='#' className='link'>Nosotros</a>
                <a href='#' className='link'>Contacto</a>
                <CartWidget />

            </div>

        </nav>
    )
}

export default NavBar;