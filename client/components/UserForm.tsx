import { createUser } from '@/app/admin/actions'

export default function UserForm() {
    return (
        <form
            action={createUser}
            className="bg-white border rounded-md p-6 shadow ring-1 ring-gray-200"
        >
            <h2 className="text-xl font-bold mb-4 text-gray-800">Thêm người dùng mới</h2>

            <input
                name="username"
                placeholder="Username"
                className="w-full border rounded p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />

            <input
                type="password"
                name="passwordHash"
                placeholder="Mật khẩu"
                className="w-full border rounded p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />

            <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded"
            >
                Thêm
            </button>
        </form>
    )
}
