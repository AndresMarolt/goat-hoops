import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { obtainProducts, obtainTipoId } from '../../asyncmock';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const bla = useParams();
    const { categoriaId, tipoId } = useParams();
    const [category, setCategory] = useState("");

    useEffect(() => {
        obtainProducts(categoriaId)
            .then(prods => {
                setProducts(prods);
                setCategory(categoriaId);
                console.log("Category: " + category);
            }).catch(error => {
                console.log(error);
            })

        if(tipoId) {
            obtainTipoId(tipoId)
                .then(prods => {
                    setProducts(prods);
                }).catch(error => {
                    console.log(error);
                })
        }
    }, [categoriaId, tipoId])

    const onAddFunction = (quantity) => {
        quantity>1 ? alert(`Se agregaron ${quantity} productos al carrito exitosamente`) : alert(`Se agregó ${quantity} producto al carrito exitosamente`);
    }

    return (
        <div className="ItemListContainer">
            <img src="/img/etc/banner_nike_lebron.jpg" className='banner' />
            {(!categoriaId && !tipoId) ? 
                <div className='Items-title'>
                    <h1 className=''>TRENDING</h1>
                </div>
                : 
                <div className='Items-title'>
                    <h1 className=''>{categoriaId} <span>{tipoId ? tipoId : null}</span></h1>
                </div>}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;