import './Cart.css'
import { useContext, useState } from "react";
import CartItem from "../CartItem/CartItem";
import CartContext from "../../context/CartContext";
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import { firestoreDDBB } from '../../services/firebase';
import { writeBatch, getDocs, getDoc, query, where, documentId, collection, addDoc } from 'firebase/firestore';

const Cart = () => {

    const [loading, setLoading] = useState(false);

    const {cart, getQuantity, getSubtotal, clearCart} = useContext(CartContext);

    const createOrder = () => {
        setLoading(true);
        
        const objOrder = {                          // Se crea un objeto Order, que contiene los siguientes campos:
            items: cart,
            buyer: {
                name: 'Andrés Marolt',
                phone: '11114444',
                email: 'andresmmarolt@gmail.com'
            },
            total: getSubtotal(),
            date: new Date()
        }
    
        const ids = cart.map(prod => prod.id );         // La variable "ids" contiene los ids de cada producto del carrito
        const batch = writeBatch(firestoreDDBB);        // Se crea una "cajita" llamada batch donde se van a guardar los cambios a realizar para hacerlos todos juntos al final.
        const collectionRef = collection(firestoreDDBB, 'products') 
        const outOfStock = [];                          // Productos sin stock: ninguno por ahora
    
        getDocs(query(collectionRef, where(documentId(), 'in', ids)))   // Vamos a buscar en la colección products aquellos documentos que estén en el carrito
            .then(response => {
                response.docs.forEach(doc => {      // Iteramos a través de cada documento devuelto
                    const dataDoc = doc.data();     // dataDoc contiene los campos de cada documento obtenido
    
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity;   // Se busca en el cart el producto en cuestión para que, si este existe, obtengamos su cantidad
    
                    if(dataDoc.stock >= prodQuantity) {         // Si el stock que figura en firestore es mayor o igual a la cantidad que se agregó al carrito...
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity});   // ... se añadira a la "cajita" batch el update del stock 
                    } else {
                        outOfStock.push({id: doc.id, ...dataDoc})  // ... si no, se agregará el producto al array de productos sin stock
                    }
                });
            }) .then(() => {
                if(outOfStock.length === 0) {                   // Al finalizar, si el array de productos sin stock está vacío...
                    const collectionRef = collection(firestoreDDBB, 'orders');      
                    return addDoc(collectionRef, objOrder);            // ... Se añadirá un documento "order" a la colección "orders"
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock});  // Si el array de productos sin stock no está vacío, retornar un error
                }
            }).then(({ id }) => {                               
                batch.commit();                                 // Si hasta acá todo está bien entonces se va a commitear los cambios en firestore con la actualización del stock
                console.log(`El ID de la orden es ${id}`);
                clearCart();
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                setLoading(false);
            });

    }

    if(loading) {
        return <h1>Se está generando su orden</h1>
    }
    

    if(!cart.length) {
        return(
            <div className="Cart">
                <h1 className='Cart_title'>Carrito Vacío</h1>
            </div>
        )
    } 
        
    return(
        <div className="Cart contenedor">
            <h1 className='Cart_title'>Carrito</h1>
            <ul className="Cart_list"> {cart.map(prod => <CartItem key={prod.id} {...prod} /> )} </ul>
            <h2 className='Cart_subtotal'>Subtotal ({getQuantity() > 1 ? `${getQuantity()} productos` : `1 producto`}): ${getSubtotal()}</h2>
            <div className='Cart_buttons'>
                <button onClick={() => createOrder()} className="generar-orden">Generar Orden</button>
            </div>
        </div>
    )
}

export default Cart;