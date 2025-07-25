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

//lesson
export const createLesson = async (req, res) => {
    const { courseId } = req.params
    const { titleLesson, contentMarkdown, videoUrl } = req.body

    try {
        const course = await Course.findById(courseId)
        if (!course) return res.status(404).json({ message: 'Không tìm thấy khoá học' })

        course.lessons.push({
            titleLesson,
            contentMarkdown,
            videoUrl
        })

        await course.save()
        res.status(201).json({ message: 'Đã thêm bài học thành công' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Lỗi server khi thêm bài học' })
    }
}

export const deleteLesson = async (req, res) => {
    const { courseId, lessonId } = req.params

    try {
        const course = await Course.findById(courseId)
        if (!course) return res.status(404).json({ message: 'Không tìm thấy khoá học' })

        // Xoá bài học khỏi danh sách lessons
        course.lessons = course.lessons.filter(
            (lesson) => lesson._id.toString() !== lessonId
        )

        await course.save()
        res.json({ message: 'Đã xoá bài học thành công' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Lỗi server khi xoá bài học' })
    }
}
