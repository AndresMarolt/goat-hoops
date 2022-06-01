
import './DropdownMenu.css'
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getDocs, collection } from "firebase/firestore";
import { firestoreDDBB } from '../../services/firebase'
import userEvent from '@testing-library/user-event';


const DropdownMenu = () => {

    const menuRef = useRef(null);
    const [menuShow, setMenuShow] = useState(false);

    const subMenuRef = useRef(null);
    const [submenuShow, setSubmenuShow] = useState(false);

    const [categorias, setCategorias] = useState([]);
    const [tipos, setTipos] = useState([]);

    useEffect(() => {
        getDocs(collection(firestoreDDBB, 'categorias'))
            .then(response => {
                const categorias = response.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })
                setCategorias(categorias);
            })
        
        getDocs(collection(firestoreDDBB, 'categorias', 'camisetas', 'tipos'))
            .then(response => {
                const tipos = response.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })
                setTipos(tipos);
            })
    }, [])

    useEffect(() => {

        console.log(menuRef);
        const handleClickOutsideDropdown = (event) => {
            if ( (menuRef.current && !menuRef.current.contains(event.target)) && (subMenuRef.current && !subMenuRef.current.contains(event.target))  ) {
                setMenuShow(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutsideDropdown);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutsideDropdown);
        };
    }, [menuRef])

    return(
        <div className="dropdown">
            <button className="navegacion-enlace dropbtn" ref={menuRef} onClick={(e) => {setMenuShow(!menuShow); setSubmenuShow(false)}}>
                Productos
            </button>
            <ul className={`dropdown-content ${menuShow ? "showDropdown" : ""}`}>

                {categorias.map(cat => 
                    cat.id === 'camisetas' ? 
                        <li key="dropdend">
                            <div className="">
                                <button key={cat.id} ref={subMenuRef} className="navegacion-enlace submenuBtn" onClick={() => {setSubmenuShow(!submenuShow); }}>
                                    {cat.descripcion}
                                </button>
                                <ul className={`submenu dropdown-content ${submenuShow ? "showDropdown" : ""}`}>
                                    {tipos.map(tipo => 
                                        <li key={tipo.id}><NavLink to={`/categoria/camisetas/${tipo.id}`} className="submenu-item">{tipo.descripcion}</NavLink></li>    
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