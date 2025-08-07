import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import OrderList from './OrderList'
import { getOrderItems } from './actions' // bạn cần định nghĩa hàm này

export default async function OrderPage() {
    const token = cookies().get('token')?.value
    if (!token) redirect('/auth/login')

    const items = await getOrderItems()

    return (
        <div className="p-8 md:px-24">
            <h1 className="text-2xl font-bold mb-4">Trang Đơn Hàng</h1>
            <OrderList items={items} />
        </div>
    )
}
