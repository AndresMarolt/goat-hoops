import './CartItem.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartItem = ({id, nombre, precio, quantity, img, stock}) => {

    const {removeItem, addItem} = useContext(CartContext);

    const productObj = {
            id, nombre, precio, img
    }

    const decreaseQuantity = () => {
        if(quantity>1) {
            quantity--;
            addItem(productObj, quantity);
        }
    }

    const increaseQuantity = () => {
        if(quantity < stock) {
            quantity++;
            addItem(productObj, quantity);
        }
    }

    return(
        <li className='Cart_list-item'>
            <img src={img} className="Item_img"/>
            <div className='Item_data'>
                <p className='Item_data-nombre'>{nombre}</p>
                <p className='Item_data-precio'>Precio: ${precio}</p>
                <p className='Item_data-quantity'>Cantidad: <button onClick={() => decreaseQuantity()} className='Cart_btn-quantity'>-</button>{quantity}<button onClick={() => increaseQuantity()} className='Cart_btn-quantity'>+</button></p>
                <p className='Item_data-precio'>Disponibles: {stock}</p>
                <button onClick={() => removeItem(id)} className='Item_delete'>Eliminar</button>
            </div>
        </li>
    )
}

export default CartItem;