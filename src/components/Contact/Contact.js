import './Contact.css'
import {useRef, useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import Notification from '../Notification/Notification';

const Contact = () => {

    const form = useRef();
    const [showNotification, setShowNotification] = useState(false);
    const [sendStatus, setSendStatus] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    
    useEffect(() => {
        if(showNotification) {
            setTimeout(() => {
                setShowNotification(false);
            }, 4000);
        }
    }, [showNotification])
    
    const sendEmail = (e) => {
      e.preventDefault();
  
      if(!name || !email || !subject || !message) {
          setSendStatus("error");
          setShowNotification(true);
          return;
      }

      emailjs.sendForm('contacto_goathoops', 'template_61gggz8', form.current, '85yDB4ccSl6iwgP1v')
        .then((result) => {
            setSendStatus("success");
            setShowNotification("success")
        }, (error) => {
            setSendStatus("error");
            setShowNotification("error")
        });
    };

    return(
        <div className='Contacto'>
            <h1 className='Contacto_title'>Contacto</h1>

            <form className='Contacto_form' ref={form} onSubmit={sendEmail}>
                <div className='Campo'>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" onChange={(e) => setName(e.target.value)} placeholder='Nombre' name="from_name"/>
                </div>
                <div className='Campo'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' name="email"/>
                </div>
                <div className='Campo'>
                    <label htmlFor="asunto">Asunto</label>
                    <input type="text" id="asunto" onChange={(e) => setSubject(e.target.value)} placeholder='Asunto' name="subject"/>
                </div>
                <div className='Campo'>
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" onChange={(e) => setMessage(e.target.value)} placeholder='Mensaje' name='message' />
                </div>

                <button type="submit">Enviar</button>
            </form>

            {showNotification && <Notification type={sendStatus} text= {sendStatus === "success" ? "Su mensaje fue enviado correctamente" : "Debe completar todos los campos para poder enviar su mensaje" } />}
        </div>
    )
}

export default Contact;