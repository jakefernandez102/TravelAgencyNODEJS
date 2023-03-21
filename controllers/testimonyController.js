import { Testimony } from "../models/testimonies.js";



const saveTestimony = async ( req, res ) => {

    const { name, email, message } = req.body;
    const errors = [];
    if ( name.trim() === '' ) {
        errors.push( { message: 'Name is empty' } );
    }
    if ( email.trim() === '' ) {
        errors.push( { message: 'Email is empty' } );
    }
    if ( message.trim() === '' ) {
        errors.push( { message: 'Message is empty' } );
    }

    if ( errors.length > 0 ) {

        //consultar testomoniales existentes
        const testim = await Testimony.findAll();

        //Mostrar vista con errores
        res.render( 'testimonies', {
            page: 'Testimonies',
            errors,
            name,
            email,
            message,
            testim
        } );
    } else {
        //Almacenar el objeto en la base de datos
        try {
            await Testimony.create( {
                nombre: name,
                correo: email,
                mensaje: message,
            } );

            res.redirect( '/testimonies' );
        } catch ( error ) {
            console.log( error );
        }
    }
};

export {
    saveTestimony,

};