// app/checkout/actions.ts
'use server'

import { cookies } from 'next/headers'

// Đọc cookie checkout từ server
export async function getCheckoutCookie() {
    const raw = cookies().get('checkout')
    if (!raw) return null

    try {
        return JSON.parse(raw.value)
    } catch (error) {
        console.error('Lỗi parse checkout cookie:', error)
        return null
    }
}

// Gửi đơn hàng đến API
export async function placeOrder(data: {
    Items: Array<{
        _id: string
        title: string
        image: string
        price: number
        quantity: number
    }>
    quantity: number
    total: number
}) {
    try {
        const res = await fetch(`${process.env.API_URL}/order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                products: data.Items.map(item => ({
                    productId: item._id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    quantity: item.quantity,
                })),
                quantity: data.quantity,
                total: data.total,
            }),
        })

        if (!res.ok) throw new Error('Lỗi API')

        return true
    } catch (err) {
        console.error('Đặt hàng lỗi:', err)
        return false
    }
}
