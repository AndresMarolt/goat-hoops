import './CartItem.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartItem = ({id, nombre, precio, quantity, img}) => {

    const {removeItem} = useContext(CartContext);

    return(
        <li className='Cart_list-item'>
            <img src={img} className="Item_img"/>
            <div className='Item_data'>
                <p className='Item_data-nombre'>{nombre}</p>
                <p className='Item_data-precio'>Precio: ${precio}</p>
                <p className='Item_data-quantity'>Cantidad: {quantity}</p>
                <button onClick={() => removeItem(id)} className='Item_delete'>Eliminar</button>
            </div>
        </li>
    )
}

export default CartItem;