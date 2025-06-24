import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 px-24 py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                {/* Logo hoặc tiêu đề */}
                <div>
                    <h2 className="text-xl font-bold text-blue-600 mb-2">LMS EDU</h2>
                    <p>Cung cấp các khóa học lập trình miễn phí.</p>
                </div>

                {/* Liên kết điều hướng */}
                <div>
                    <h3 className="font-semibold mb-3">Liên kết</h3>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover:text-blue-500">Trang chủ</Link></li>
                        <li><Link href="/courses" className="hover:text-blue-500">Khóa học</Link></li>
                        <li><Link href="/about-us" className="hover:text-blue-500">Giới thiệu</Link></li>
                        <li><Link href="/auth/register" className="hover:text-blue-500">Đăng ký</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Các khóa học</h3>
                    <ul className="space-y-2">
                        <li><Link href="/courses" className="hover:text-blue-500">HTML</Link></li>
                        <li><Link href="/courses" className="hover:text-blue-500">CSS</Link></li>
                        <li><Link href="/courses" className="hover:text-blue-500">JAVASCRIPT</Link></li>
                        <li><Link href="/courses" className="hover:text-blue-500">REACT</Link></li>
                    </ul>
                </div>

                {/* Thông tin liên hệ */}
                <div>
                    <h3 className="font-semibold mb-3">Liên hệ</h3>
                    <p>Email: support@lmsedu.vn</p>
                    <p>Hotline: 0901 234 567</p>
                    <p className="mt-2">© {new Date().getFullYear()} LMS EDU. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}