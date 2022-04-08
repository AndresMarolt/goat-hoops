import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({id, equipo, jugador, tipoId, precio, img}) => {
    return(
        <div className="Producto">
            <div>
                <div className="Producto__img">
                    <img src={img} alt={jugador} />
                </div>

                <div className="Producto__comprar">
                    <p className="Producto__comprar-precio">{precio}</p>
                    <p className="Producto__comprar-titulo">{equipo} - {jugador} [{tipoId}]</p>
                </div>

            </div>
            
            <Link to={`/Item/${id}`} className="Btn-info">Ver Más</Link>
        </div>
    )
}

export default Item;