'use server'

import { cookies } from 'next/headers'

export async function getCartItems() {
    const token = cookies().get('token')?.value
    if (!token) return []

    const res = await fetch('http://localhost:5000/api/cart', {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store',
    })
    return await res.json()
}

export async function updateQuantity(id: string, type: 'increase' | 'decrease') {
    await fetch(`http://localhost:5000/api/cart/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: type }),
    })
}

export async function deleteItem(id: string) {
    await fetch(`http://localhost:5000/api/cart/${id}`, {
        method: 'DELETE'
    })
}

//cookie chi luu dc o use server
export async function setCheckoutCookie(data: any) {
    cookies().set('checkout', JSON.stringify(data), {
        httpOnly: true,
        path: '/',
        secure: true,
        maxAge: 60 * 30, // 30 phút
    })
}