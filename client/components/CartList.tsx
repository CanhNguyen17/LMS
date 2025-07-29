'use client'

import { useState } from 'react'
import { updateQuantity, deleteItem } from '../../client/app/cart/actions'
import { useRouter } from 'next/navigation'
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
    const router = useRouter()

    const handleUpdate = async (id: string, action: 'increase' | 'decrease') => {
        const product = list.find(i => i._id === id)
        if (!product || (action === 'decrease' && product.quantity <= 1)) return

        await updateQuantity(id, action)
        setList(prev =>
            prev.map(i => i._id === id
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
                        <div key={item._id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ddd' }}>
                            <img src={item.image} alt={item.title} width={80} />
                            <p><strong>{item.title}</strong></p>
                            <p>Giá: {item.price.toLocaleString()} đ</p>
                            <div>
                                <button onClick={() => handleUpdate(item._id, 'decrease')} disabled={item.quantity <= 1}>−</button>
                                <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                                <button onClick={() => handleUpdate(item._id, 'increase')}>+</button>
                            </div>
                            <button onClick={() => handleDelete(item._id)}> Xoá sản phẩm</button>
                        </div>
                    ))}

                    <h3>Tổng tiền: {total.toLocaleString()} đ</h3>
                    <button onClick={async () => {
                        const data = {
                            Items: list,
                            quantity,
                            total,
                        }
                        await setCheckoutCookie(data)
                        router.push('/checkout')
                    }}>Thanh toán</button>
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
