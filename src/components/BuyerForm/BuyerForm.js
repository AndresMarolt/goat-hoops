import { useState, useEffect, useContext } from "react";
import CartContext from "../../context/CartContext";
import './BuyerForm.css'

const BuyerForm = ({createOrder}) => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [floor, setFloor] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [dni, setDni] = useState('');

    const {clearCart} = useContext(CartContext);
    
    return(
        <>
            <div className="Form_container">
                <form className="Buyer-form">
                    <div className="campo">
                        <label>Nombres<span className="campo_obligatorio">(*)</span></label>
                        <input type="text" onChange={(e) => setName(e.target.value)}></input>
                    </div>

                    <div className="campo">
                        <label>Apellido<span className="campo_obligatorio">(*)</span></label>
                        <input type="text" onChange={(e) => setSurname(e.target.value)}></input>
                    </div>

                    <div className="campo">
                        <label>Calle<span className="campo_obligatorio">(*)</span></label>
                        <input type="text" onChange={(e) => setAddress(e.target.value)}></input>
                    </div>

                    <div className="campo">
                        <label>Piso</label>
                        <input type="text" onChange={(e) => setFloor(e.target.value)}></input>
                    </div>

                    <div className="campo">
                        <label>Localidad<span className="campo_obligatorio">(*)</span></label>
                        <input type="text" onChange={(e) => setCity(e.target.value)}></input>
                    </div>

                    <div className="campo">
                        <label>Teléfono</label>
                        <input type="tel" onChange={(e) => setPhone(e.target.value)}></input>
                    </div>

                    <div className="campo">
                        <label>Email<span className="campo_obligatorio">(*)</span></label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    
                    <div className="campo">
                        <label>DNI<span className="campo_obligatorio">(*)</span></label>
                        <input type="text" onChange={(e) => setDni(e.target.value)}></input>
                    </div>
                </form>

                <p className="campo_obligatorio-texto">(*) = Campo Obligatorio</p>
            </div>

            <div className='Cart_buttons'>
                <button onClick={() => clearCart()} className="Cart_button">Vaciar Carrito</button>
                <button onClick={() => createOrder(name, surname, address, floor, city, phone, email, dni)} className="Cart_button color-green">Generar Orden</button>
            </div>
        </>
    )
}

export default BuyerForm;