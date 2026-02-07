import express from 'express'
import { getPromo, setPromo } from '../controllers/promoController.js';

const promoRouter = express.Router();

promoRouter.post('/',setPromo);
promoRouter.get('/',getPromo);

export {promoRouter};
