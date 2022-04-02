import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {

    const [counterState, setCounter] = useState({count: initial});

    const decrement = () => {
        /* if(counterState.count > 1) {
            setCounter({...counterState, count: counterState.count - 1})
        } */
        setCounter({...counterState, count: counterState.count - 1})
    }

    const increment = () => {
        /* if(counterState.count < stock) {
            setCounter({...counterState, count: counterState.count + 1})
        } */
        setCounter({...counterState, count: counterState.count + 1})
    }

    return(
        <div className='agregar__carrito'>
            <div className='agregar__carrito-controles'>
                <button type='button' onClick={decrement}>-</button>
                <p>{counterState.count}</p>
                <button type='button' onClick={increment}>+</button>
            </div>
            
            <button type='button' className='agregar__carrito-boton' onClick={ () => onAdd(counterState.count, stock)}>Agregar al Carrito</button>

        </div>
    )
}

export default ItemCount;