'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

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
    const res = await fetch(`http://localhost:5000/api/cart/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: type }),
    })
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    console.log('Cập nhật thành công:', data.message);
}

export async function deleteItem(id: string) {
    await fetch(`http://localhost:5000/api/cart/${id}`, {
        method: 'DELETE'
    })
}

//cookie chi luu dc o use server
export async function setCheckoutCookie(formData: FormData) {
    const raw = formData.get('data') as string
    const checkout = JSON.parse(raw)

    cookies().set('checkout', JSON.stringify(checkout), {
        httpOnly: true,
        path: '/',
        secure: true,
        maxAge: 60 * 30,
    })
    //
    redirect('/checkout')
}
