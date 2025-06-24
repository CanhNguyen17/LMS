export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 text-white bg-blue-950 border-r p-6">
                <h2 className="text-xl font-bold mb-6 text-blue-300">Trang quản trị</h2>
                <nav className="space-y-4">
                    <a href="/admin/all-courses" className="block hover:text-blue-300">Khóa học</a>
                    <a href="/admin/lessons" className="block hover:text-blue-300">Bài học</a>
                    <a href="/admin/users" className="block hover:text-blue-300">Người dùng</a>
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-8">{children}</main>
        </div>
    )
}
