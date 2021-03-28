// Estructura de Functional Componente (FC) con PropTypes creado con el snippet rafcp
// Escribiendo rafcp en el VSCode sencillamente nos crea el esqueleto del FC con PropTypes
// Existen 3 snippets utiles: rafc, rafce y rafcp

import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ( { value = 10 } ) => {

    // const [ nombre, setNombre ] = useState('Goku');
    // console.log( nombre, setNombre );
    const [ counter, setCounter ] = useState( value );

    // handleAdd
    const handleAdd = () => {
        // setCounter( counter + 1 ); // IMPORTANTE: no se puede usar counter++ porque React considera que se esta incrementando el valor de una const
        setCounter( (c) => c + 1 );
    }

    const handleSubstract = () => {
        // setCounter( counter - 1 ); // IMPORTANTE: no se puede usar counter++ porque React considera que se esta incrementando el valor de una const
        setCounter( (c) => c - 1 );
    }

    const handleReset = () => {
        setCounter( value );
    }

    //La funcion del manejador tambien podria haber sido llamada en el button de la siguiente manera
    // <button onClick={ (e) => handleAdd(e) }> +1 </button>
    return (
        <>
            <div>
                <h1>CounterApp</h1>
                <h2> { counter } </h2>
            </div>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp
