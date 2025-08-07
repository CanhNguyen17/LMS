import { logout } from '@/app/actions/logout'

export default function LogoutButton() {
    return (
        <form action={logout}>
            <button
                type="submit"
                className="text-white hover:underline hover:text-red-500"
            >
                Đăng xuất
            </button>
        </form>
    )
}
