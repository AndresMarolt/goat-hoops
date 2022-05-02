import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap'
import './DropdownMenu.css'
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { firestoreDDBB } from '../../services/firebase'


const DropdownMenu = () => {

    const [categorias, setCategorias] = useState([]);
    const [tipos, setTipos] = useState([]);

    useEffect(() => {
        getDocs(collection(firestoreDDBB, 'categorias'))
            .then(response => {
                console.log(response.docs);
                const categorias = response.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })
                setCategorias(categorias);
            })
        
        getDocs(collection(firestoreDDBB, 'categorias', 'camisetas', 'tipos'))
            .then(response => {
                console.log(response.docs);
                const tipos = response.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })
                setTipos(tipos);
            })
    }, [])

    return(
        <div className="btn-group dropdown">
            <button className="btn dropdown-toggle link" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                Productos
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                {categorias.map(cat => 
                    cat.id === 'camisetas' ? 
                        <li key="dropdend">
                            <div className="btn-group dropend">
                                <button key={cat.id} className="dropdown-toggle link btn-submenu dropdown-item" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    {cat.descripcion}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                    {tipos.map(tipo => 
                                        <li key={tipo.id}><NavLink to={`/categoria/camisetas/${tipo.id}`} className="dropdown-item subitem">{tipo.descripcion}</NavLink></li>    
                                    )}
                                </ul>
                            </div>
                        </li>
                        
                        :

                        <li key={cat.id}><NavLink to={`/categoria/${cat.id}`} className='dropdown-item item'>
                            {cat.descripcion}
                        </NavLink></li>
                )}

            </ul>
        </div>
    )
}

export default DropdownMenu;