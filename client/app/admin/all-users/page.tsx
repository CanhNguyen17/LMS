import { deleteUser } from '.././actions'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import UserForm from '@/components/UserForm'

type User = {
    _id: string
    username: string
    role: string
}

async function getUsers(): Promise<User[]> {
    const token = cookies().get('token')?.value
    const res = await fetch('http://localhost:5000/api/users', {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store',
    })

    if (!res.ok) throw new Error('Lỗi khi tải danh sách người dùng')
    return res.json()
}

export default async function CourseManagementPage() {
    const token = cookies().get('token')?.value
    const role = cookies().get('role')?.value

    if (!token) redirect('/auth/login')
    if (role !== 'admin') redirect('/')

    const users = await getUsers()

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Quản lý người dùng</h1>

            <UserForm />

            <ul className="mt-8 space-y-4">
                {users.map((user) => (
                    <li
                        key={user._id}
                        className="bg-white border rounded p-5 shadow-sm flex justify-between items-start"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">{user.username}</h3>
                            <p className="text-sm text-gray-600 mt-1">{user.role}</p>
                        </div>
                        <form
                            action={async () => {
                                'use server'
                                await deleteUser(user._id)
                            }}
                        >
                            <button
                                type="submit"
                                className="text-red-600 hover:text-red-800 font-medium"
                            >
                                Xoá
                            </button>
                        </form>
                    </li>
                ))}
            </ul>
        </div>
    )
}
