'use client'

import { useState } from 'react'
import { updateQuantity, deleteItem } from '../../../client/app/cart/actions'
import { setCheckoutCookie } from '@/app/cart/actions'

type CartItem = {
    _id: string
    courseId: string
    title: string
    image: string
    price: number
    quantity: number
}

export default function CartList({ items }: { items: CartItem[] }) {
    const [list, setList] = useState(items)

    const handleUpdate = async (id: string, action: 'increase' | 'decrease') => {
        const product = list.find(i => i._id === id)
        if (!product || (action === 'decrease' && product.quantity <= 1)) return

        await updateQuantity(id, action)
        setList(prev =>
            prev.map(i =>
                i._id === id
                    ? { ...i, quantity: action === 'increase' ? i.quantity + 1 : i.quantity - 1 }
                    : i
            )
        )
    }

    const handleDelete = async (id: string) => {
        await deleteItem(id)
        setList(prev => prev.filter(i => i._id !== id))
    }

    const total = list.reduce((sum, i) => sum + i.price * i.quantity, 0)
    const quantity = list.reduce((sum, i) => sum + i.quantity, 0)

    return (
        <div>
            <h2>Giỏ hàng của bạn ({quantity} sản phẩm)</h2>

            {list.length > 0 ? (
                <>
                    {list.map(item => (
                        <div key={item._id} className="flex items-center gap-4 border-b py-4">
                            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />

                            <div className="flex-1">
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-sm text-gray-600">Giá: {item.price.toLocaleString()} đ</p>

                                <div className="flex items-center gap-2 mt-2">
                                    <button
                                        onClick={() => handleUpdate(item._id, 'decrease')}
                                        disabled={item.quantity <= 1}
                                        className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
                                    >
                                        −
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => handleUpdate(item._id, 'increase')}
                                        className="px-2 py-1 bg-gray-200 rounded"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={() => handleDelete(item._id)}
                                className="text-red-500 hover:underline ml-auto"
                            >
                                Xoá
                            </button>
                        </div>
                    ))}

                    <h3>Tổng tiền: {total.toLocaleString()} đ</h3>
                    {/* // */}
                    <form action={setCheckoutCookie}>
                        <input type="hidden" name="data" value={JSON.stringify({ Items: list, quantity, total })} />
                        <button type="submit">Thanh toán</button>
                    </form>
                </>
            ) : (
                <div>
                    <p>Giỏ hàng của bạn đang trống. <a href="/shop">Xem sản phẩm</a></p>
                    <img src="/img/cart-empty.png" width={150} alt="Cart Empty" />
                </div>
            )}
        </div>
    )
}
