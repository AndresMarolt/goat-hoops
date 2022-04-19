import './Contact.css'

const Contact = () => {
    return(
        <div className='Contacto'>
            <h1 className='Contacto_title'>Contacto</h1>

            <form className='Contacto_form'>
                <div className='Campo'>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" placeholder='Nombre'/>
                </div>
                <div className='Campo'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder='Email'/>
                </div>
                <div className='Campo'>
                    <label htmlFor="asunto">Asunto</label>
                    <select id="asunto">
                        <option value="0">--Elija una opción--</option>
                        <option value="1">Consulta por stock</option>
                        <option value="2">Hay un problema con mi producto</option>
                        <option value="3">Hay un problema con mi compra</option>
                        <option value="4">Otro</option>
                    </select>
                </div>
                <div className='Campo'>
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" placeholder='Mensaje'></textarea>
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contact;