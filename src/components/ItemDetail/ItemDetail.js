import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({nombre, img, precio, descripcion, stock}) => {

    const onAddFunction = (quantity) => {
        quantity>1 ? alert(`Se agregaron ${quantity} productos al carrito exitosamente`) : alert(`Se agregó ${quantity} producto al carrito exitosamente`);
    }

    return(
        <section className="Detalle">
                <h1 className="Detalle__titulo">{nombre}</h1>
                <img src={img} alt="imagen-producto" className="Detalle__img"/>
                <div>
                    <p className="Detalle__precio">{precio}</p>
                    <p className="Detalle__descripcion">{descripcion}</p>
                    <ItemCount className="Item-count" stock={stock} initial={0} onAdd={onAddFunction} />
                </div>

        </section>
    )
}

export default ItemDetail;