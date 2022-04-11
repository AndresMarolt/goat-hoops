import './ItemDetail.css'


const ItemDetail = ({nombre, img, precio, descripcion}) => {


    return(
        <section className="Detalle">
            <div>
                <h1 className="Detalle__titulo">{nombre}</h1>
                <img src={img} alt="imagen-producto" className="Detalle__img"/>
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