import CourseForm from '@/components/CourseForm'
import { deleteCourse } from './actions'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type Course = {
    _id: string
    title: string
    description: string
}

async function getCourses(): Promise<Course[]> {
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

    const courses = await getCourses()

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Quản lý khóa học</h1>

            <CourseForm />

            <ul className="mt-8 space-y-4">
                {courses.map((course) => (
                    <li
                        key={course._id}
                        className="bg-white border rounded p-5 shadow-sm flex justify-between items-start"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{course.description}</p>
                        </div>
                        <form
                            action={async () => {
                                'use server'
                                await deleteCourse(course._id)
                            }}
                        >
                            <button
                                type="submit"
                                className="text-red-600 hover:text-red-800 font-medium"
                            >
                                Xoá
                            </button>
                        </form>
                    </li>
                ))}
            </ul>
        </div>
    )
}
