import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {

    const onAddFunction = (quantity) => {

        quantity>1 ? alert(`Se agregaron ${quantity} productos al carrito exitosamente`) : alert(`Se agregó ${quantity} producto al carrito exitosamente`);    
    }

    return (
        <>
            <ItemCount stock={8} initial={1} onAdd={onAddFunction} ></ItemCount>
        </>
    )
}

export default ItemListContainer