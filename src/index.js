import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp.js';
import CounterApp from './CounterApp.js';

import './index.css';

//const saludo = <h1>Hola Mundo</h1>;
// console.log(saludo);

const divRoot = document.querySelector('#root');
// console.log(divRoot);

// ReactDOM.render( <PrimeraApp saludoGoku="Hola, soy Goku" saludoVegeta="Hola, soy Vegeta" saludo="Hola, esto es un saludo" otra={1985} />, divRoot );
ReactDOM.render( <CounterApp value={123456} />, divRoot );