import './Cart.css'
import CartItem from "../CartItem/CartItem";
import CartContext from "../../context/CartContext";
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import { useContext, useState } from "react";
import { firestoreDDBB } from '../../services/firebase';
import { writeBatch, getDocs, query, where, documentId, collection, addDoc } from 'firebase/firestore';

const Cart = () => {

    const [loading, setLoading] = useState(false);

    const {cart, getQuantity, getSubtotal, clearCart} = useContext(CartContext);

    const createOrder = () => {
        setLoading(true);
        
        const objOrder = {                           
            items: cart,
            buyer: {
                name: 'Andrés Marolt',
                phone: '11114444',
                email: 'andresmmarolt@gmail.com'
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
                        <h1 className='Cart_title'>Carrito</h1>
                        <ul className="Cart_list"> {cart.map(prod => <CartItem key={prod.id} {...prod} /> )} </ul>
                        <h2 className='Cart_subtotal'>Subtotal ({getQuantity() > 1 ? `${getQuantity()} productos` : `1 producto`}): ${getSubtotal()}</h2>
                        <div className='Cart_buttons'>
                            <button onClick={() => createOrder()} className="Cart_button">Generar Orden</button>
                            <button onClick={() => clearCart()} className="Cart_button">Vaciar Carrito</button>
                        </div>
                    </>
            }
        </div>
    )
}

export default Cart;