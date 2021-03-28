// para poder tener las ayudas de jest
import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe( 'Prueba del fichero 05-funciones', () => {

    test( 'getUser debe devolver un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        console.log( user );

        expect( user ).toEqual( userTest ); // El toBe falla porque la comparacion es de dos objetos {} === {}
    })

    // getUsuarioActivo debe de retornar un objeto
    test( 'getUsuarioActivo debe devolver un objeto', () => {

        const nombre = 'Fernando';

        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo( nombre );

        console.log( user );

        expect( user ).toEqual( userTest ); // El toBe falla porque la comparacion es de dos objetos {} === {}
    })

});