import Item from "../Item/Item";
import './ItemList.css' 


const ItemList = ({products}) => {


    return(
        <section className="Productos-todo">
            {products.map(prod => <Item key={prod.id} {...prod}></Item>) };
        </section>
    )
}

export default ItemList;