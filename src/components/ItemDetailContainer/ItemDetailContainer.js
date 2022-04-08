import { obtainDetail } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { productId } = useParams();

    useEffect(() => {
        obtainDetail(productId)
            .then((prod) => {
                setProduct(prod);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                setLoading(false);
            })
    }, [productId])

    return(
        <div>
            <>
                {loading ? <h1>Cargando...</h1> : 
                product ? <ItemDetail key={product.id} {...product} /> : <h1>El producto no existe</h1>}
            </>
        </div>
    )
}

export default ItemDetailContainer;