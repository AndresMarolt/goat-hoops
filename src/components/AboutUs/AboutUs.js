import './AboutUs.css'

const AboutUs = () => {
    return(
        <div className="Nosotros">
            <h1 className='Nosotros_title'>Sobre Nosotros</h1>

            <div className='Nosotros_info'>
                <img className='Nosotros_info-img' src="../logonuevo.png"></img>
                <p className='Nosotros_info-parrafo'>
                    

                    Nuestra historia comienza en 2017 cuando un grupo de emprendedores de la venta de indumentaria que tenían además en común la pasión por el basket, y en particular la NBA, se pusieron de acuerdo para comenzar un nuevo emprendimiento que abarque sus dos mayores pasiones. Poco a poco y con mucho esfuerzo pudimos ir agregando más locales a nuestra lista de sucursales para ser hoy en día unos de los líderes de la venta de productos oficiales NBA en la Argentina. Actualmente, ya habiendo puesto pie en Chile y Uruguay, nos encontramos en pleno proceso de abarcar más países de la región. Goat Hoops es lo que es gracias a sus clientes, y por eso buscamos ofrecerles una atención de excelencia, ofertas inbatibles y por sobre todo un lugar que les permita a los fanáticos acercarse un poco al mundo NBA.  
                </p>
            </div>
        </div>
    )
}

export default AboutUs;