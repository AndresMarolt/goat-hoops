import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({nombre, img, precio, descripcion, stock}) => {

    const [quantity, setQuantity] = useState(0);

    const onAddFunction = (count) => {
        setQuantity(count);
    }

    return(
        <section className="Detalle">
                <h1 className="Detalle__titulo">{nombre}</h1>
                <img src={img} alt="imagen-producto" className="Detalle__img"/>
                <div>
                    <p className="Detalle__precio">{precio}</p>
                    <p className="Detalle__descripcion">{descripcion}</p>
                    <div id="div">
                        {quantity > 0 ? <Link to='/cart' className='link-carrito'><p className='link-carrito_texto'>Ir al Carrito</p></Link> : <ItemCount className="Item-count" stock={stock} initial={1} onAdd={onAddFunction} />} 
                    </div>
                </div>

        </section>
    )
}

export default ItemDetail;