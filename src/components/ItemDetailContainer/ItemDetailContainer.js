import { obtainDetail } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        obtainDetail()
            .then((prod) => {
                setProduct(prod);
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    return(
        <div>
            <ItemDetail key={product.id} {...product}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer;