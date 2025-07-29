import CartList from '@/components/CartList'
import { getCartItems } from './actions'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function CartPage() {
    const token = cookies().get('token')?.value
    if (!token) redirect('/auth/login')

    const items = await getCartItems()

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Trang Giỏ Hàng</h1>
            <CartList items={items} />
        </div>
    )
}
