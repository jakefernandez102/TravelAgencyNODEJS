import { Testimony } from "../models/testimonies.js";
import { Trip } from "../models/Trip.js";




const indexPage = async ( req, res ) => {

    //consultar 3 viajes del modelo Trips
    const promiseDB = [];
    promiseDB.push( Trip.findAll( { limit: 3 } ) );
    promiseDB.push( Testimony.findAll( { limit: 3 } ) );
    try {

        const result = await Promise.all( promiseDB );
        res.render( 'index', {
            page: 'Home',
            clase: 'home',
            trips: result[ 0 ],
            testim: result[ 1 ]
        } );
    } catch ( error ) {
        console.log( error );
    }

};


const aboutUsPage = ( req, res ) => {

    res.render( 'aboutus', {
        page: 'About Us'
    } );
};

const trips = async ( req, res ) => {

    //consultar Base datos
    const trips = await Trip.findAll();


    res.render( 'trips', {
        page: 'Next Trips',
        trips
    } );
};

const testimonies = async ( req, res ) => {

    try {

        const testim = await Testimony.findAll();

        res.render( 'testimonies', {
            page: 'Testimonies',
            testim
        } );

    } catch ( error ) {
        console.log( error );
    }

};


//Muestra  un viaje por su slug
const tripDetailPage = async ( req, res ) => {

    const { slug } = req.params;
    try {
        const trip = await Trip.findOne( { where: { slug } } );
        res.render( 'trip', {
            page: 'Trip Information',
            trip
        } );
    } catch ( error ) {
        console.log( error );
    }
};


export {
    indexPage,
    aboutUsPage,
    trips,
    testimonies,
    tripDetailPage,
};