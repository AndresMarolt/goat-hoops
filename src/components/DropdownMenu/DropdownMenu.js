import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap'
import './DropdownMenu.css'
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { firestoreDDBB } from '../../services/firebase'


const DropdownMenu = () => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        getDocs(collection(firestoreDDBB, 'categorias'))
            .then(response => {
                console.log(response.docs);
                const categorias = response.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })
                setCategorias(categorias);
            })
    }, [])

    return(
        <div className="btn-group dropdown">
            <button className="btn dropdown-toggle link" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                Productos
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                {categorias.map(cat => 
                    cat.tipos ? 
                        <li>
                            <div className="btn-group dropend">
                                <button key={cat.id} className="dropdown-toggle link btn-submenu dropdown-item" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    {cat.descripcion}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                    {cat.tipos.map(tipo => 
                                        <li><NavLink to={`/categoria/camisetas/${tipo}`} className="dropdown-item subitem">{tipo}</NavLink></li>    
                                    )}
                                </ul>
                            </div>
                        </li>
                        
                        :

                        <li><NavLink key={cat.id} to={`/categoria/${cat.id}`} className='dropdown-item item'>
                            {cat.descripcion}
                        </NavLink></li>


                        
                        
                )}

            </ul>
        </div>
    )
}

export default DropdownMenu;

{/* <li>
                            <div className="btn-group dropend">
                                <button className="dropdown-toggle link btn-submenu dropdown-item" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    Camisetas
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                    <li><NavLink to={'/categoria/camisetas/icon'} className="dropdown-item">Icon</NavLink></li>
                                    <li><NavLink to={'/categoria/camisetas/association'} className="dropdown-item">Association</NavLink></li>
                                    <li><NavLink to={'/categoria/camisetas/city-edition'} className="dropdown-item">City Edition</NavLink></li>
                                    <li><NavLink to={'/categoria/camisetas/hardwood-classics'} className="dropdown-item">Hardwood Classics</NavLink></li>
                                </ul>
                            </div>
                        </li>
                        :
                        <li><NavLink key={cat.id} to={`/categoria/${cat.id}`} className='dropdown-item'>
                            {cat.descripcion}
                        </NavLink></li> */}