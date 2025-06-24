import Course from '../models/Course.js'

export const getCourses = async (req, res) => {
    const courses = await Course.find()
    res.json(courses)
}

export const getCourseLessons = async (req, res) => {
    const course = await Course.findById(req.params.id)
    //LUY Y
    if (!course || !Array.isArray(course.lessons) || course.lessons.length === 0) {
        return res.status(404).json({ message: 'Không tìm thấy bài học' })
    }

    res.json(course.lessons)
}

export const createCourse = async (req, res) => {
    const newCourse = new Course(req.body)
    await newCourse.save()
    res.status(201).json(newCourse)
}

export const deleteCourse = async (req, res) => {
    await Course.findByIdAndDelete(req.params.id)
    res.json({ message: 'Đã xoá khóa học' })
}
