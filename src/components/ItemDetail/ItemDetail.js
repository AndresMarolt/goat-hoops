


const ItemDetail = ({categoria, equipo, tipo, img, jugador, precio, descripcion}) => {


    return(
        <section>
            <h1>{categoria} {equipo} [{tipo}] - {jugador}</h1>
            <img src={img}/>
            <p>{precio}</p>
            <p>{descripcion}</p>

        </section>
    )
}

export default ItemDetail;