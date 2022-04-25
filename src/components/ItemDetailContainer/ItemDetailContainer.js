import { obtainDetail } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { getDoc, doc } from 'firebase/firestore';
import {firestoreDDBB} from '../../services/firebase'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { productId } = useParams();

    useEffect(() => {

        getDoc(doc(firestoreDDBB, 'products', productId)).then(response => {
            const product = { id: response.id, ...response.data() }
            setProduct(product);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        })

        /* obtainDetail(productId)
            .then((prod) => {
                setProduct(prod);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                setLoading(false);
            }) */
    }, [productId])

    return(
        <>
            {loading ? 
                <LoadingAnimation /> : 
            product ? 
                <ItemDetail key={product.id} {...product} /> : 
                
                <h1>El producto no existe</h1>}
        </>
    )
}

export default ItemDetailContainer;