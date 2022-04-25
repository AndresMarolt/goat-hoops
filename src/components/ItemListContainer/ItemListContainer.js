import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import { useEffect, useState } from 'react';
import { obtainProducts, obtainTipoId } from '../../asyncmock';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { firestoreDDBB } from '../../services/firebase';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
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
                    console.log(doc.data());
                    return { id: doc.id, ...doc.data()}
                })
                setProducts(products);
            })
        
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