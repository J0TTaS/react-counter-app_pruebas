
// Añadimos un agrupador general
describe( 'Pruebas en el archivo demo.test.js', () => {

    test( 'Los strings deben ser iguales:', () => {
    
        // 1. Inicializacion
        const mensaje = 'Hola Mundo';
    
        // 2. Estímulo
        const mensaje2 = `Hola Mundo`;
    
        // 3. Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 ); // ===
    
    })
});