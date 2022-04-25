import './Cart.css'
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = () => {

    const {cart, getQuantity, getSubtotal} = useContext(CartContext);

    if(!cart.length) {
        return(
            <div className="Cart">
                <h1 className='Cart_title'>Carrito Vacío</h1>
            </div>
        )
    } 
        
    return(
        <div className="Cart">
            <h1 className='Cart_title'>Carrito</h1>
            <ul className="Cart_list"> {cart.map(prod => <CartItem key={prod.id} {...prod} /> )} </ul>
            <h2 className='Cart_subtotal'>Subtotal ({getQuantity() > 1 ? `${getQuantity()} productos` : `1 producto`}): ${getSubtotal()}</h2>
        </div>
    )
}

export default Cart;