// app/checkout/page.tsx
import { getCheckoutCookie } from './actions'
import OrderForm from './OrderForm' // nếu dùng form riêng cho đặt hàng

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

export default async function CheckoutPage() {
    const data: CheckoutData | null = await getCheckoutCookie()

    return (
        <>
            {data && data.Items.length > 0 ? (
                <div className="bg-white rounded-md shadow-lg p-6 max-w-3xl mx-auto mt-10 space-y-6">
                    <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Thông tin đơn hàng</h2>

                    <div className="divide-y divide-gray-200">
                        {data.Items.map((item: CartItem) => (
                            <div key={item._id} className="flex items-center gap-4 py-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-24 h-24 object-cover rounded-md border"
                                />
                                <div className="flex-1">
                                    <h3 className="text-lg font-medium text-gray-700">{item.title}</h3>
                                    <p className="text-sm text-gray-500">Số lượng: {item.quantity}</p>
                                    <p className="text-sm text-gray-500">Giá: {item.price.toLocaleString()} đ</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-right text-lg font-semibold text-gray-900">
                        Tổng tiền: <span className="text-red-500">{data.total.toLocaleString()} đ</span>
                    </div>

                    <div className="mt-6 border-t pt-6">
                        <OrderForm data={data} />
                    </div>
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-gray-600 text-lg mb-4">Giỏ hàng của bạn đang trống.</p>
                    <a
                        href="/shop"
                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                        Xem sản phẩm
                    </a>
                </div>
            )}
        </>
    )
}
