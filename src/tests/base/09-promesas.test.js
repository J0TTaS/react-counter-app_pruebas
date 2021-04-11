// para poder tener las ayudas de jest
import '@testing-library/jest-dom';

import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe( 'Pruebas con promesas', () => {

    test( 'getHeroeByIdAsync debe de retornar un Heroe async', ( done ) => {

        const id = 1;

        getHeroeByIdAsync( id )
            .then( ( heroe ) => {
                expect( heroe ).toBe( heroes[0] );
                done();
            });
    })

    test( 'getHeroeByIdAsync debe de retornar un error si heroe no existe', ( done ) => {

        const id = 10; // este id no existe en el fichero Heores

        getHeroeByIdAsync( id )
            .catch( ( error ) => {
                expect( error ).toBe( 'No se pudo encontrar el héroe' );
                done();
            });
    })

});