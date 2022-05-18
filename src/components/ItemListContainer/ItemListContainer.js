import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'
import { getProducts } from '../../services/firebase/firestore';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState();

    const { categoriaId, tipoId } = useParams();

    useEffect(() => {
        setLoading(true);
        
        getProducts(categoriaId, tipoId)
            .then(products => {
                setProducts(products)
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                setLoading(false);
            })
            
    }, [categoriaId, tipoId])

    return (
        <div className="ItemListContainer">

            <BannerCarousel />

            <div className='contenedor'>
                {(!categoriaId && !tipoId) ? 
                    <div className='Items-title'>
                        <h1 className=''>TRENDING</h1>
                    </div>
                    : 
                    <div className='Items-title'>
                        <h1 className=''>{categoriaId} {tipoId && <span>{tipoId}</span>}</h1>
                    </div>}

                {loading ? 
                    <LoadingAnimation />
                    :
                    <ItemList products={products}/>

                }
            </div>
        </div>
    )
}

export default ItemListContainer;