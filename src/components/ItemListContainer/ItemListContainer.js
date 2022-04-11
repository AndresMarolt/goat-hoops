import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { obtainProducts, obtainTipoId } from '../../asyncmock';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { categoriaId, tipoId } = useParams();

    useEffect(() => {
        obtainProducts(categoriaId)
            .then(prods => {
                setProducts(prods);
            }).catch(error => {
                console.log(error);
            })
    }, [categoriaId])

    useEffect(() => {
        obtainTipoId(tipoId)
            .then(prods => {
                setProducts(prods);
            }).catch(error => {
                console.log(error);
            })
    }, [tipoId])

    console.log(categoriaId, tipoId);

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