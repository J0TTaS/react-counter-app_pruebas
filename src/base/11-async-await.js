

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'xeuZyep88pAlYPy3JCa1J4F9AkEPkJC8';
        //const apiKey = 'FakeApiKey'; // Para forzar al test a fallar ponemos un APIKEY que no exista
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        //console.error(error)
        return 'No existe';
    }
    
    
    
}

 getImagen();



