import './Item.css'

const Item = ({equipo, jugador, tipo, precio, img}) => {
    return(
        <div className="Producto">
            <div className="Producto__img">
                <img src={img} alt={jugador} className="Producto__data-img" />
            </div>

            <div className="Producto__comprar">
                <o className="Producto__comprar-titulo">{equipo} - {jugador} [{tipo}]</o>
                <o className="Producto__comprar-precio">{precio}</o>
            </div>

            <button className="Btn-info">Ver Más</button>

        </div>
    )
}

export default Item;