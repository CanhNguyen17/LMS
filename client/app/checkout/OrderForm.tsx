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
    const jsonData = JSON.stringify(data)

    return (
        <form action={placeOrder}>
            <input type="hidden" name="data" value={jsonData} />
            <button
                type="submit"
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
            >
                Xác nhận đặt hàng
            </button>
        </form>
    )
}
