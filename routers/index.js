import express from 'express'; //persion import
import {
    indexPage,
    aboutUsPage,
    trips,
    testimonies,
    tripDetailPage
} from "../controllers/paginasController.js";
import { saveTestimony } from '../controllers/testimonyController.js';
const router = express.Router();

router.get( '/', indexPage );

router.get( '/aboutus', aboutUsPage );

router.get( '/trips', trips );
router.get( '/trips/:slug', tripDetailPage );

router.get( '/testimonies', testimonies );
router.post( '/testimonies', saveTestimony );




export default router;