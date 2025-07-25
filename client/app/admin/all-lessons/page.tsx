import { deleteLesson } from '.././actions'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import LessonForm from '@/components/LessonForm'

type Lesson = {
    titleLesson: string
    videoUrl: string
    contentMarkdown: string
}

type Course = {
    _id: string
    title: string
    description: string
    lessons: Lesson[]
}

async function getCoursesandLessons(): Promise<Course[]> {
    const token = cookies().get('token')?.value
    const res = await fetch('http://localhost:5000/api/courses', {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store',
    })

    if (!res.ok) throw new Error('Lỗi khi tải danh sách khoá học')
    return res.json()
}

export default async function CourseManagementPage() {
    const token = cookies().get('token')?.value
    const role = cookies().get('role')?.value

    if (!token) redirect('/auth/login')
    if (role !== 'admin') redirect('/')

    const courses = await getCoursesandLessons()

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Quản lý bài học</h1>

            <ul className="mt-8 space-y-4">
                {courses.map((course) => (
                    <li
                        key={course._id}
                        className="bg-white border rounded p-5 shadow-sm flex justify-between items-start"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-red-600">{course.title}</h3>

                            <LessonForm courseId={course._id.toString()} />

                            {course.lessons.map((lesson: any, index: number) => (
                                <div key={index}>
                                    <div className='flex items-center justify-between text-sm'>
                                        <h3 className="font-semibold text-blue-400 pr-2">
                                            {lesson.titleLesson}
                                        </h3>
                                        <form
                                            action={async () => {
                                                'use server'
                                                await deleteLesson(course._id, lesson._id)
                                                console.log(lesson._id);

                                            }}
                                        >
                                            <button
                                                type="submit"
                                                className="text-red-600 hover:text-red-800 font-medium"
                                            >
                                                Xoá
                                            </button>
                                        </form>
                                    </div>
                                    {/* // */}

                                    <h3 key={index} className="text-sm font-semibold text-gray-800">
                                        {lesson.contentMarkdown}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
