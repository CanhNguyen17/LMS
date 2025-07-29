import express from 'express'
import auth from '../middleware/auth.js'
import { addToCart, deleteCart, getCart, putDeleteCart, putQuantityCart } from '../controllers/cartController.js';

const router = express.Router()

router.post('/:id', auth, addToCart);
//
router.get('/', auth, getCart);
router.delete('/:id', deleteCart);
router.put('/:id', putQuantityCart);
//sau khi mua
router.put('/', putDeleteCart);

export default router
