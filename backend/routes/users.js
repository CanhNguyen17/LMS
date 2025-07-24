import express from 'express'
import { getUser, createUser, deleteUser } from '../controllers/userController.js'
import auth from '../middleware/auth.js'
import isAdmin from '../middleware/role.js'

const router = express.Router()

router.get('/', auth, isAdmin, getUser)
router.post('/', auth, isAdmin, createUser)
router.delete('/:id', auth, isAdmin, deleteUser)

export default router
