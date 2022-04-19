import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import Cart from '../Cart/Cart';

const ItemDetail = ({id, nombre, img, precio, descripcion, stock}) => {

    const {addItem, isInCart, cart} = useContext(CartContext);

    const onAddFunction = (count) => {

        const productObj = {
            id, nombre, precio
        }

        addItem(productObj, count);
    }
    

    return(
        <section className="Detalle">
                <h1 className="Detalle__titulo">{nombre}</h1>
                <img src={img} alt="imagen-producto" className="Detalle__img"/>
                <div>
                    <p className="Detalle__precio">{precio}</p>
                    <p className="Detalle__descripcion">{descripcion}</p>
                    <div id="div">
                        {isInCart(id) > 0 ? <Link to='/cart' className='link-carrito'><p className='link-carrito_texto'>Ir al Carrito</p></Link> : <ItemCount className="Item-count" stock={stock} initial={1} onAdd={onAddFunction} />} 
                    </div>
                </div>

        </section>
    )
}

export default ItemDetail;