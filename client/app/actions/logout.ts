'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function logout() {
    const cookieStore = cookies()
    cookieStore.delete('token')
    cookieStore.delete('role') // nếu bạn lưu role
    cookieStore.delete('username')
    redirect('/auth/login') // tự động chuyển hướng sau logout
}
