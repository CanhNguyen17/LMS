// app/checkout/actions.ts
'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

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
export async function placeOrder(formData: FormData) {
    const token = cookies().get('token')?.value
    //
    const raw = formData.get('data') as string
    if (!raw) throw new Error('Thiếu dữ liệu giỏ hàng')

    const data = JSON.parse(raw)

    try {
        const res = await fetch(`http://localhost:5000/api/order`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                courses: data.Items.map((item: any) => ({
                    courseId: item._id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    quantity: item.quantity,
                })),
                quantity: data.quantity,
                total: data.total,
            }),
        })

        if (!res.ok) throw new Error('API lỗi')

        //Sau khi đặt hàng thành công, chuyển hướng luôn từ server
        redirect('/order-view')
    } catch (err) {
        console.error('Đặt hàng lỗi:', err)
        throw err
    }
}