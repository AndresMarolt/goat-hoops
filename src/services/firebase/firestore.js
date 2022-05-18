import { firestoreDDBB } from "./index";
import { getDocs, query, collection, where } from "firebase/firestore";

export const getProducts = (categoriaId, tipoId) => {
    return new Promise((resolve, reject) => {

        const queryConstraints = [];

        queryConstraints.push(where('categoriaId', '==', categoriaId));
        if(tipoId) queryConstraints.push(where('tipoId', '==', tipoId));
    
        const collectionRef = categoriaId ? query(collection(firestoreDDBB, 'products'), ...queryConstraints)
                                          : collection(firestoreDDBB, 'products');
    
        getDocs(collectionRef) 
                .then(response => {
                    const products = response.docs.map(doc => {
                        return { id: doc.id, ...doc.data()}
                    })
                    resolve(products);
                }).catch((error) => {
                    reject(error);
                })
    
    })
}