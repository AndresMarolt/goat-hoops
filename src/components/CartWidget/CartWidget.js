import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.js'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'


const CartWidget = () => {
    
    const {getQuantity} = useContext(CartContext);

    return (
        <div className='carrito'>
            <FontAwesomeIcon icon={faCartShopping} className="carrito__icono"/>
            <p className="carrito__cantidad"> {getQuantity()} </p>
        </div>
    )
};

export default CartWidget;