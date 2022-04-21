import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({id, jugador, precio, nombre, img}) => {


    return(
        <div className="Producto">
            <div>
                <div className="Producto__img">
                    <img src={img} alt={jugador} />
                </div>

                <div className="Producto__comprar">
                    <p className="Producto__comprar-precio">${precio}</p>
                    <p className="Producto__comprar-titulo">{nombre}</p>
                </div>
            </div>
            
            <Link to={`/item/${id}`} className="Btn-info">Ver Más</Link>
        </div>
    )
}

export default Item;