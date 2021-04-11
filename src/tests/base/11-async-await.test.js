// para poder tener las ayudas de jest
import '@testing-library/jest-dom';

import { getImagen } from '../../base/11-async-await';
import heroes from '../../data/heroes';

describe( 'Pruebas con async-await y Fetch', () => {

    test( 'debe retornar el URL de la imagen ', async() => {

        const url = await getImagen();
        console.log( url );
        expect( url.includes( 'https://' ) ).toBe( true );

    })

});