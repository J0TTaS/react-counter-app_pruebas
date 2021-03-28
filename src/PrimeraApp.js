// FC: Functional Component: es lo que vamos a crear en este fichero. Es un componente de React basado en funciones. 
// SFC: Stateless Functional Component: este es el metodo antiguo de crear componentes y se basaba en class

// Opcion 1 para no poner un DIV que incluya el H1 y el P: uso de Fragment 
// import React, {Fragment} from 'react';

// Opcion 2 para no poner un DIV que incluya el H1 y el P: uso de <></>
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo = "Hola soy Juanjo", otra , subtitulo } ) => {

    // console.log( props );

    // const saludo = "Hola Mundo const"; // String - Lo imprime
    // const saludo = 12345; // Enteros - Lo imprime
    // const saludo = true; // Booleanos - No lo imprime
    // const saludo = [1,2,3,4,5]; // Arrays - Los imprime de manera concatenada
    // const saludo = { // Objetos - No se pueden imprimir tal cual. Hay que usar JSON.stringify. Y para formatearlo es mejor usar <pre></pre>
    //     Nombre: 'Fernando',
    //     Edad: 34
    // }

// PROBLEMA: uso de DIVs innecesarios para devolver, en el return, mas de un elemento HTML.
// Usando esta opcion veriamos esto en el navegador: <div><h1>Hola Mundo</h1><p>Mi primera aplicacion de React</p></div>
// Se puede comprobar que hay un DIV innecesario que envuelve a los dos otros elementos H1 y P.
// return (
//     <div>
//         <h1>Hola Mundo</h1>
//         <p>Mi primera aplicacion de React</p>
//     </div>
// );


// Opcion 1: uso de Fragment
//    return (
//        <Fragment>
//            <h1>Hola Mundo</h1>
//            <p>Mi primera aplicacion de React</p>
//        </Fragment>
//    );

// Opcion 2: uso de <></>
    return (
        <>
            <h1> { saludo } { otra } </h1>
            {/* <pre>{ JSON.stringify(saludo, null, 2) }</pre> */}
            <p> { subtitulo } </p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    otra: PropTypes.number.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
