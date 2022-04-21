import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    const decrement = () => {
        if(counter > initial) setCounter(counter - 1);
    }

    const increment = () => {
        if(counter < stock) setCounter(counter + 1);
    }

    return(
        <div className='agregar__carrito'>
            <p>Disponibles: {stock}</p>
            <div className='agregar__carrito-controles'>
                <button type='button' onClick={decrement}>-</button>
                <p>{counter}</p>
                <button type='button' onClick={increment}>+</button>
            </div>
            
            <button type='button' className='agregar__carrito-boton' onClick={ () => onAdd(counter)}>Agregar al Carrito</button>

        </div>
    )
}

export default ItemCount;