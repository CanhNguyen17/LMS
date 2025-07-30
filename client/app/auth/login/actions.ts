'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    const username = formData.get('username')
    const password = formData.get('password')

    const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    })

    const data = await res.json()
    //
    if (res.ok && data.token && data.role && data.username) {
        const cookieStore = cookies()
        cookieStore.set('token', data.token, {
            httpOnly: false,
            secure: true,
            path: '/',
            maxAge: 60 * 60 * 24,
        })
        cookieStore.set('role', data.role)
        cookieStore.set('username', data.username)
        redirect('/')
    } else {
        throw new Error('Sai tài khoản hoặc mật khẩu')
    }
}
