import './Cart.css'
import CartItem from "../CartItem/CartItem";
import CartContext from "../../context/CartContext";
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import BuyerForm from '../BuyerForm/BuyerForm';
import Notification from '../Notification/Notification';
import { useContext, useEffect, useState } from "react";
import { firestoreDDBB } from '../../services/firebase';
import { writeBatch, getDocs, query, where, documentId, collection, addDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';


const Cart = () => {

    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [notifStatus, setNotifStatus] = useState("");
    const [notifText, setNotifText] = useState("");


    const {cart, getQuantity, getSubtotal, clearCart} = useContext(CartContext);

    useEffect(() => {
        if(showNotification) {
            setTimeout(() => {
                setShowNotification(false);
            }, 4000);
        }
    }, [showNotification])

    const createOrder = (name, surname, address, city, floor, phone, email, dni) => {

        if(!name || !surname || !address || !city || !email || !dni) {
            setShowNotification(true);
            setNotifStatus("error");
            setNotifText("Debe completar todos los campos obligatorios");
            return;
        }

        setLoading(true);
        
        const objOrder = {                           
            items: cart,
            buyer: {
                name: name,
                phone: phone,
                email: email,
                address: address,
                floor: floor,
                city: city,
                dni: dni
            },
            total: getSubtotal(),
            date: new Date()
        }
    
        const ids = cart.map(prod => prod.id );
        const batch = writeBatch(firestoreDDBB);
        const collectionRef = collection(firestoreDDBB, 'products')
        const outOfStock = [];
    
        getDocs(query(collectionRef, where(documentId(), 'in', ids)))    
            .then(response => {
                response.docs.forEach(doc => {       
                    const dataDoc = doc.data();      
    
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity;    
    
                    if(dataDoc.stock >= prodQuantity) {          
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity});    
                    } else {
                        outOfStock.push({id: doc.id, ...dataDoc})   
                    }
                });
            }) .then(() => {
                if(outOfStock.length === 0) {                    
                    const collectionRef = collection(firestoreDDBB, 'orders');      
                    return addDoc(collectionRef, objOrder);
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock});
                }
            }).then(({ id }) => {                               
                batch.commit();                                  
                console.log(`El ID de su orden es ${id}`);
                setShowNotification(true);
                setNotifStatus("success");
                setNotifText("Orden generada correctamente")
                clearCart();
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                setLoading(false);
            });
    }

    if(!cart.length) {
        return(
            <div className="Cart">
                <h1 className='Cart_title Cart_empty'>Carrito Vacío</h1>

                {showNotification && <Notification type={notifStatus} text={notifText}/>}

            </div>
        )
    } 
        
    return(
        <div className="Cart contenedor">
            {
                loading ?
                    <>
                        <h1 className='Cart_title'>Procesando su orden...</h1>
                        <LoadingAnimation />
                    </>

                    :

                    <>
                        <div>
                            <h1 className='Cart_title'>{!showForm ? "Carrito" : "Datos"}</h1>
                            <div className='Switch_container'>
                                <FontAwesomeIcon onClick={() => setShowForm(!showForm)} className='Switch' icon={!showForm ? faToggleOff : faToggleOn} />
                            </div>

                            {!showForm ?
                                <>
                                    <ul className="Cart_list"> {cart.map(prod => <CartItem key={prod.id} {...prod} /> )} </ul>
                                    <h2 className='Cart_subtotal'>Subtotal ({getQuantity() > 1 ? `${getQuantity()} productos` : `1 producto`}): ${getSubtotal()}</h2>
                                    <div className='Cart_buttons'>
                                        <button onClick={() => clearCart()} className="Cart_button">Vaciar Carrito</button>
                                        <button onClick={() => setShowForm(true)} className="Cart_button">Continuar &gt;&gt;&gt;</button>
                                    </div>
                                </>
                                
                                :

                                <BuyerForm createOrder={createOrder}/>
                            }

                        </div>

                        {showNotification && <Notification type={notifStatus} text={notifText}/>}
                    </>
            }
        </div>
    )
}

export default Cart;