//Configuracion de servidor express

//Express es como un apache

// const express = require( 'express' ); version command js
import express from 'express'; //persion import
import db from './config/db.js';
import router from './routers/index.js';




const app = express();

//conectar la base de datos
db.authenticate()
    .then( () => {
        console.log( 'Conected Conected Conected' );
    } )
    .catch( error => console.log( error ) );


//definir puerto
const port = process.env.PORT || 4000;

//Habilitat pug
app.set( 'view engine', 'pug' );

// definiendo middleware
//obtener año actual
app.use( ( req, res, next ) => {

    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.siteName = 'Travel Agency';
    return next();
} );

//Agregar body parser para leer datos del form
app.use( express.urlencoded( { extended: true } ) );


//definir la carpeta publica
app.use( express.static( 'public' ) );

//agregar router
app.use( '/', router );


app.listen( port, () => {
    console.log( `Server is runing at port ${ port }` );
} );