'use client'

import { useState } from 'react'

type OrderItem = {
    _id: string
    courses: {
        courseId: string
        title: string
        image: string
        price: number
        quantity: number
    }[]
    total: number
    quantity: number
}

export default function OrderList({ items }: { items: OrderItem[] }) {
    const [list, setList] = useState(items)

    return (
        <div className="space-y-4">
            {list.map((item) => (
                <div key={item._id} className="border p-4 rounded-md bg-white shadow">
                    <h2 className="font-semibold">Tổng tiền: {item.total}₫</h2>
                    <p>Số lượng: {item.quantity}</p>
                    <div className="mt-2 space-y-2">
                        {item.courses.map((course) => (
                            <div key={course.courseId} className="flex items-center gap-4">
                                <img src={course.image} alt={course.title} className="w-16 h-16 object-cover rounded" />
                                <div>
                                    <h3 className="font-medium">{course.title}</h3>
                                    <p>Giá: {course.price}₫</p>
                                    <p>Số lượng: {course.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
