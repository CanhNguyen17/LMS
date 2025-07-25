import express from 'express'
import {
    getCourses,
    createCourse,
    deleteCourse,
    getCourseLessons,
    deleteLesson,
    createLesson
} from '../controllers/courseController.js'

import auth from '../middleware/auth.js'
import isAdmin from '../middleware/role.js'

const router = express.Router()

router.get('/', getCourses)
router.get('/:id/lesson', auth, getCourseLessons)
////admin
router.post('/', auth, isAdmin, createCourse)
router.delete('/:id', auth, isAdmin, deleteCourse)
//lesson
router.post('/:courseId/lesson', auth, isAdmin, createLesson)
router.delete('/:courseId/lesson/:lessonId', auth, isAdmin, deleteLesson)

export default router
