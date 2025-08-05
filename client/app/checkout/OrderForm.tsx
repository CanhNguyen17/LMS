'use client'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { placeOrder } from './actions'

type CartItem = {
    _id: string
    courseId: string
    title: string
    image: string
    price: number
    quantity: number
}

type CheckoutData = {
    Items: CartItem[]
    quantity: number
    total: number
}

export default function OrderForm({ data }: { data: CheckoutData }) {
    const router = useRouter()
    const [pending, startTransition] = useTransition()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        startTransition(async () => {
            const success = await placeOrder(data)
            if (success) {
                router.push('/order-success')
            } else {
                alert('Đặt hàng thất bại')
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                disabled={pending}
            >
                {pending ? 'Đang xử lý...' : 'Xác nhận đặt hàng'}
            </button>
        </form>
    )
}
