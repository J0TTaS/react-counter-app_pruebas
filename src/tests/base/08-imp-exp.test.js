// para poder tener las ayudas de jest
import '@testing-library/jest-dom';

import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe( 'Pruebas en funcions de Heroes del fichero 08-imp-exp.test.js ', () => {

    test( 'Debe retornar un heroe por ID', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );
    }) 

    test( 'Debe retornar undefined si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
    }) 

    test( 'Debe retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroesDC = getHeroesByOwner( owner );

        // console.log( heroesDC );

        const heroesData = heroes.filter( h => h.owner === owner );

        // console.log( heroesData );

        expect( heroesDC ).toEqual( heroesData );

    })

    test( 'Debe retornar un arreglo con los heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroesMarvelLength = getHeroesByOwner( owner ).length;

        // console.log( heroesMarvelLength );

        const heroesDataLength = heroes.filter( h => h.owner === owner ).length;

        // console.log( heroesDataLength );

        expect( heroesMarvelLength ).toBe( heroesDataLength );
    })
});