import { logout } from '@/app/actions/logout'

export default function LogoutButton() {
    return (
        <form action={logout}>
            <button
                type="submit"
                className="text-red-500 hover:underline"
            >
                Đăng xuất
            </button>
        </form>
    )
}
