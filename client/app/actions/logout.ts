'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function logout() {
    const cookieStore = cookies()
    cookieStore.delete('token')
    cookieStore.delete('role') // nếu bạn lưu role
    redirect('/auth/login') // tự động chuyển hướng sau logout
}
