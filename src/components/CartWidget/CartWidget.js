import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.js'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    
    const {getQuantity} = useContext(CartContext);

    return (
        <Link to="/cart" className='carrito link'>
            <FontAwesomeIcon icon={faCartShopping} className="carrito__icono"/>
            <p className="carrito__cantidad"> {getQuantity()} </p>
        </Link>
    )
};

export default CartWidget;