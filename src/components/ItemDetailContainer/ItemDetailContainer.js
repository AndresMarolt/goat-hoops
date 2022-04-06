import { obtainDetail } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState } from "react";
import { useEffect } from "react";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        obtainDetail()
            .then((prod) => {
                setProduct(prod);
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    console.log(...product);

    return(
        <ItemDetail product={product}></ItemDetail>
    )
}

export default ItemDetailContainer;