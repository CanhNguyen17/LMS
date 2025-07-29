'use server'
import { revalidatePath } from 'next/cache' //re-render
import { cookies } from 'next/headers'

//Course
export async function createCourse(formData: FormData) {
    const token = cookies().get('token')?.value

    const title = formData.get('title') as string
    const description = formData.get('description') as string

    const res = await fetch('http://localhost:5000/api/courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ title, description, lessons: [] })
    })

    if (!res.ok) {
        throw new Error('Lỗi khi thêm khóa học')
    }
    //
    revalidatePath('/admin/all-courses')
}

export async function deleteCourse(id: string) {
    const token = cookies().get('token')?.value

    const res = await fetch(`http://localhost:5000/api/courses/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if (!res.ok) {
        throw new Error('Xóa khóa học thất bại')
    }
    //
    revalidatePath('/admin/all-courses')
}

//Lesson
export async function createLesson(formData: FormData) {
    const token = cookies().get('token')?.value

    const courseId = formData.get('courseId') as string
    const titleLesson = formData.get('titleLesson') as string
    const contentMarkdown = formData.get('contentMarkdown') as string
    const videoUrl = formData.get('videoUrl') as string

    const res = await fetch(`http://localhost:5000/api/courses/${courseId}/lesson`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ titleLesson, contentMarkdown, videoUrl })
    })

    if (!res.ok) {
        throw new Error('Lỗi khi thêm user')
    }
    //
    revalidatePath('/admin/all-lessons')
}

export async function deleteLesson(courseId: string, lessonId: string) {
    const token = cookies().get('token')?.value

    const res = await fetch(`http://localhost:5000/api/courses/${courseId}/lesson/${lessonId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log(courseId, lessonId, token)


    if (!res.ok) {
        throw new Error('Xóa bai học thất bại')
    }
    //
    revalidatePath('/admin/all-lessons')
}

//User
export async function createUser(formData: FormData) {
    const token = cookies().get('token')?.value

    const username = formData.get('username') as string
    const passwordHash = formData.get('passwordHash') as string

    const res = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ username, passwordHash })
    })

    if (!res.ok) {
        throw new Error('Lỗi khi thêm user')
    }
    //
    revalidatePath('/admin/all-users')
}

export async function deleteUser(id: string) {
    const token = cookies().get('token')?.value

    const res = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if (!res.ok) {
        throw new Error('Xóa khóa học thất bại')
    }
    //
    revalidatePath('/admin/all-users')
}