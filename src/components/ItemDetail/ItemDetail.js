import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';
import Notification from '../Notification/Notification';

const ItemDetail = ({id, nombre, img, precio, descripcion, stock}) => {

    const {addItem} = useContext(CartContext);
    const [quantity, setQuantity] = useState();
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        if(showNotification) {
            setTimeout(() => {
                setShowNotification(false);
            }, 4000);
        }
    }, [showNotification])



    const onAddFunction = (count) => {

        const productObj = {
            id, nombre, precio, img
        }

        setQuantity(count);

        addItem(productObj, count);
        setShowNotification(true);
    }


    return(
        <section className="Detalle">
                <h1 className="Detalle__titulo">{nombre}</h1>
                <img src={img} alt="imagen-producto" className="Detalle__img"/>
                <div>
                    <p className="Detalle__precio">${precio}</p>
                    <p className="Detalle__descripcion">{descripcion}</p>
                    <div id="div">
                        <ItemCount className="Item-count" stock={stock} initial={1} onAdd={onAddFunction} /> 
                    </div>
                </div>

                {showNotification && <Notification type="success" text= {`Se {quantity>1 ? 'agregaron' : 'agregó'} {quantity} {quantity>1 ? 'unidades' : 'unidad'} de {nombre} al carrito correctamente`} />}
        </section>
    )
}

export default ItemDetail;