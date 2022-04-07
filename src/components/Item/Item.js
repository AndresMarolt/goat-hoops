import './Item.css'

const Item = ({equipo, jugador, tipo, precio, img}) => {
    return(
        <div className="Producto">
            <div>
                <div className="Producto__img">
                    <img src={img} alt={jugador} />
                </div>

                <div className="Producto__comprar">
                    <p className="Producto__comprar-precio">{precio}</p>
                    <p className="Producto__comprar-titulo">{equipo} - {jugador} [{tipo}]</p>
                </div>

            </div>

            <button className="Btn-info">Ver Más</button>
        </div>
    )
}

export default Item;