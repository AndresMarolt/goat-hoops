import './ItemDetail.css'


const ItemDetail = ({categoriaId, equipo, tipoId, img, jugador, precio, descripcion}) => {


    return(
        <section className="Detalle">
            <div>
                <h1 className="Detalle__titulo">{categoriaId} {equipo} [{tipoId}] {jugador ? ` - ${jugador}` : null} </h1>
                <img src={img} className="Detalle__img"/>
                <p className="Detalle__precio">{precio}</p>
                <p className="Detalle__descripcion">{descripcion}</p>
            </div>

            <div>
                <button type='button'>COMPRAR AHORA</button>
            </div>
        </section>
    )
}

export default ItemDetail;