import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 text-white bg-blue-950 border-r p-6">
                <h2 className="text-xl font-bold mb-6 text-blue-300">Trang quản trị</h2>
                <nav className="space-y-4">
                    <Link href={'/admin/all-courses'} className="block hover:text-blue-300">Khóa học</Link>
                    <Link href={'/admin/all-lessons'} className="block hover:text-blue-300">Bài học</Link>
                    <Link href={'/admin/all-users'} className="block hover:text-blue-300">Người dùng</Link>
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-8">{children}</main>
        </div>
    )
}
