'use server'

import { cookies } from 'next/headers'

export async function getOrderItems() {
    const token = cookies().get('token')?.value
    if (!token) return []

    const res = await fetch('http://localhost:5000/api/order', {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store',
    })
    return await res.json()
}