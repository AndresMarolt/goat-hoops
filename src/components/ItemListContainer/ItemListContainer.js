import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { obtainProducts, obtainTipoId } from '../../asyncmock';
import { useParams } from 'react-router-dom';
import BannerCarousel from '../BannerCarousel/BannerCarousel';

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

        if(tipoId) {
            obtainTipoId(tipoId)
                .then(prods => {
                    setProducts(prods);
                }).catch(error => {
                    console.log(error);
                })
        }
    }, [categoriaId, tipoId])

    return (
        <div className="ItemListContainer">

            <BannerCarousel />

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