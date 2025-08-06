import express from 'express'
import auth from '../middleware/auth.js'
import { createOrder, listOrder } from '../controllers/orderController.js';

const router = express.Router()

router.post('/', auth, createOrder);
router.get('/', auth, listOrder);

export default router
