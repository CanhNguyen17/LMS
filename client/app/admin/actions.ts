'use server'

import { cookies } from 'next/headers'

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
}

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
}
