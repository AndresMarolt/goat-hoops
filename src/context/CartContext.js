import { createContext, useEffect, useState } from "react";
import Cart from "../components/Cart/Cart";


const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    
    const addItem = (item, quantity) => {
        setCart([...cart, {...item, quantity}]);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const getQuantity = () => {
        let count = 0;
        cart.forEach(prod => {
            count += prod.quantity;
        })

        return count;
    }

    const removeItem = (itemId) => {
        const products = cart.filter(prod => prod.id !== itemId);
        setCart(products);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const clearCart = () => {
        const emptyCart = [];
        setCart(emptyCart);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            removeItem,
            clearCart,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;