import { Sequelize } from "sequelize";
import db from "../config/db.js";


//Nuestro primer modelo
export const Testimony = db.define( 'testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },

} );