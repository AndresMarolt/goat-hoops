import './Cart.css'
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = () => {

    const {cart, removeItem, clearCart} = useContext(CartContext);

    return(
        <div className="Cart">
            <h1 className='Cart_title'>Carrito</h1>
            {cart && <ul className="Cart_list">{ cart.map(prod => <CartItem key={prod.id} {...prod} />) }</ul>}
        </div>
    )
}

export default Cart;