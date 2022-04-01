import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {

    const onAddFunction = (quantity, stock) => {

        if(quantity>stock) {
            alert("Superaste el stock");
            return;
        }
        quantity>1 ? alert(`Se agregaron ${quantity} productos al carrito de manera exitosa`) : alert(`Se agregó ${quantity} producto al carrito de manera exitosa`);    
    }

    return (
        <>
            <ItemCount stock={8} initial={1} onAdd={onAddFunction} ></ItemCount>
        </>
    )
}

export default ItemListContainer