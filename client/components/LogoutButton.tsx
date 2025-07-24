import { logout } from '@/app/actions/logout'

export default function LogoutButton() {
    return (
        <form action={logout}>
            <button
                type="submit"
                className="text-white bg-blue-900 rounded-md hover:underline"
            >
                Đăng xuất
            </button>
        </form>
    )
}
