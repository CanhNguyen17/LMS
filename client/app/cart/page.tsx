import CartList from './CartList'
import { getCartItems } from './actions'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function CartPage() {
    const token = cookies().get('token')?.value
    if (!token) redirect('/auth/login')

    const items = await getCartItems()

    return (
        <div className="p-8 md:px-24">
            <h1>Trang Giỏ Hàng</h1>
            <CartList items={items} />
        </div>
    )
}
