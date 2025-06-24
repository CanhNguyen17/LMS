'use server'

import { redirect } from 'next/navigation'

export async function register(formData: FormData) {
    const username = formData.get('username')
    const password = formData.get('password')

    const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    })

    if (res.ok) {
        redirect('/auth/login')
    } else {
        throw new Error('Đăng ký thất bại')
    }
}
