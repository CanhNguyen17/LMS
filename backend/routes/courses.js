import express from 'express'
import {
    getCourses,
    createCourse,
    deleteCourse,
    getCourseLessons
} from '../controllers/courseController.js'

import auth from '../middleware/auth.js'
import isAdmin from '../middleware/role.js'

const router = express.Router()

router.get('/', getCourses)
router.post('/', auth, isAdmin, createCourse)
router.delete('/:id', auth, isAdmin, deleteCourse)
router.get('/:id/lesson', auth, getCourseLessons)

export default router
