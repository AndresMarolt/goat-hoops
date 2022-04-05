import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { obtainProducts } from '../../asyncmock';

const ItemListContainer = () => {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        obtainProducts()
            .then(prods => {
                setProducts(prods);
            }).catch(error => {
                console.log(error);
            })
    }, [])

    const onAddFunction = (quantity) => {

        quantity>1 ? alert(`Se agregaron ${quantity} productos al carrito exitosamente`) : alert(`Se agregó ${quantity} producto al carrito exitosamente`);
    }

    return (
        <>
            <ItemCount stock={8} initial={1} onAdd={onAddFunction} ></ItemCount>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer;