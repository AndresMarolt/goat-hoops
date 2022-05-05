import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import Pagination from '../Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { firestoreDDBB } from '../../services/firebase';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const pageNumberLimit = 5;
    const [passengersData, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(0);

    const { categoriaId, tipoId } = useParams();

    useEffect(() => {

        const queryConstraints = [];

        queryConstraints.push(where('categoriaId', '==', categoriaId));
        if(tipoId) queryConstraints.push(where('tipoId', '==', tipoId));
        
        queryConstraints.forEach(tipo => console.log(tipo));
        
        const collectionRef = categoriaId ? query(collection(firestoreDDBB, 'products'), ...queryConstraints)
                                          : collection(firestoreDDBB, 'products'); // TRAE TODOS LOS DOCUMENTOS (ELEMENTOS) DE LA COLECCION DE MI BASE DE DATOS DE FIREBASE, COLECCION CUYO NOMBRE ES 'PRODUCTS'

        getDocs(collectionRef) 
            .then(response => {
                const products = response.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                })
                setProducts(products);

                setData(products);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                setLoading(false);
            })
        
    }, [categoriaId, tipoId, currentPage])



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
                        <h1 className=''>{categoriaId} <span>{tipoId ? tipoId : null}</span></h1>
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