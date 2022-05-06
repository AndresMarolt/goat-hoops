import { useState, useEffect, useContext } from "react";
import CartContext from "../../context/CartContext";
import './BuyerForm.css'

const BuyerForm = (createOrder) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [dni, setDni] = useState();

    const {cart, getQuantity, getSubtotal, clearCart} = useContext(CartContext);
    
    return(
        <>
            <div className="Form_container">
                <form className="Buyer-form">
                    <div className="campo">
                        <label>Nombre</label>
                        <input type="text" onChange={(e) => setName(e.target.value)}></input>
                    </div>

                    <div className="campo">
                        <label>Teléfono</label>
                        <input type="tel" onChange={(e) => setPhone(e.target.value)}></input>
                    </div>

                    <div className="campo">
                        <label>Domicilio</label>
                        <input type="text" onChange={(e) => setAddress(e.target.value)}></input>
                    </div>

                    <div className="campo">
                        <label>Localidad</label>
                        <input type="text" onChange={(e) => setCity(e.target.value)}></input>
                    </div>

                    <div className="campo">
                        <label>Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    
                    <div className="campo">
                        <label>DNI</label>
                        <input type="text" onChange={(e) => setDni(e.target.value)}></input>
                    </div>
                </form>
            </div>

            <div className='Cart_buttons'>
                <button onClick={() => clearCart()} className="Cart_button">Vaciar Carrito</button>
                <button onClick={() => createOrder(name, phone, address, city, email, dni)} className="Cart_button color-green">Generar Orden</button>
            </div>
        </>
    )
}

export default BuyerForm;