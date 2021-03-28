// para poder tener las ayudas de jest
import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe( 'Pruebas en 02-template-string.test.js ', () => {

    test( 'getSaludo debe devolver Hola Fernando!', () => {

        const nombre = 'Fernando';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre + '!' );
    })

    // getSaludo debe retornar Hola Carlos! si no se usa el argumento nombre
    test( 'getSaludo debe devolver Hola Carlos! por defecto', () => {

        const saludo = getSaludo();
        expect( saludo ).toBe( 'Hola Carlos!' );
    })
});