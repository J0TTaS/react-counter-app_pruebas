

const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = personajes;


export const retornaArreglo = () =>{
    return ['ABC', 123];
}

//const [ letras, numeros ] = retornaArreglo(); 


// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
// IMPORTANTE!!! Si llamamos a la funcion useState nos dara un error de React. Por eso sustituimos 'use' por 'us'
const usState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}






